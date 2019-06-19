import { __assign, __decorate, __metadata, __extends } from 'tslib';
import { Directive, ViewChild, ElementRef, ContentChildren, forwardRef, QueryList, ContentChild, Input, Component, ChangeDetectionStrategy, Renderer2, NgZone, ChangeDetectorRef, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, LyTheme2, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, Platform, toBoolean, LyRippleService, LyFocusState, LyCommonModule } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
import { CommonModule } from '@angular/common';

var STYLE_PRIORITY = 2;
var DISABLE_PADDING = false;
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px',
        '&': theme.list ? theme.list.root : null
    },
    listItem: __assign({}, LY_COMMON_STYLES.button, { fontFamily: theme.typography.fontFamily, fontSize: theme.pxToRem(16), color: theme.text.default, display: 'flex', width: '100%', position: 'relative', padding: '0 16px', minHeight: '48px', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 0, '&::after': __assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
            background: 'currentColor',
            opacity: .13,
            borderRadius: 'inherit'
        } }),
    onFocusByKeyboard: null,
    listItemContent: {
        display: 'flex',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        alignContent: 'inherit',
        fontSize: 'inherit',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
    },
    oneLine: {
        paddingTop: '8px',
        paddingBottom: '8px',
        minHeight: '48px'
    },
    twoLine: {
        paddingTop: '16px',
        paddingBottom: '16px',
        minHeight: '64px',
        '{lines}': {
            marginBottom: '-4px'
        }
    },
    actionListItem: {
        cursor: 'pointer',
        userSelect: 'none'
    },
    lines: {
        alignSelf: 'stretch',
        minWidth: 0,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex'
    },
    listItemWithIcon: {
        '{lines}': {
            paddingBefore: '16px'
        }
    },
    twoLineWithIcon: {
        paddingTop: '16px',
        paddingBottom: '16px',
        '{lines}': {
            marginBottom: '-4px'
        }
    }
}); };
/** List container */
var LyList = /** @class */ (function () {
    function LyList(theme) {
        this.theme = theme;
        /** @docs-private */
        this.classes = this.theme.addStyleSheet(STYLES);
    }
    LyList = __decorate([
        Directive({
            selector: 'ly-list',
            exportAs: 'lyList',
            host: {
                '[className]': 'classes.root'
            }
        }),
        __metadata("design:paramtypes", [LyTheme2])
    ], LyList);
    return LyList;
}());
/** @docs-private */
var LyListItemBase = /** @class */ (function () {
    function LyListItemBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyListItemBase;
}());
/** @docs-private */
var LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
/** List Item */
var LyListItem = /** @class */ (function (_super) {
    __extends(LyListItem, _super);
    function LyListItem(_el, _renderer, theme, ngZone, _rippleService, _focusState, _list, _cd) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._rippleService = _rippleService;
        _this._focusState = _focusState;
        _this._list = _list;
        _this._cd = _cd;
        /** @docs-private */
        _this.classes = _this._list.classes;
        _this._isBrowser = Platform.isBrowser;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        return _this;
    }
    Object.defineProperty(LyListItem.prototype, "_listItemClasses", {
        get: function () {
            var _a = this.classes, listItemContent = _a.listItemContent, twoLine = _a.twoLine, oneLine = _a.oneLine, listItemWithIcon = _a.listItemWithIcon, twoLineWithIcon = _a.twoLineWithIcon;
            var classes = [listItemContent];
            var hasIcon = this._icon || this._avatar;
            if (hasIcon) {
                classes.push(listItemWithIcon);
            }
            if (this._lines && this._lines.length) {
                if (hasIcon && this._lines.length > 1) {
                    classes.push(twoLineWithIcon);
                }
                else {
                    classes.push(this._lines.length > 1 ? twoLine : oneLine);
                }
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyListItem.prototype, "isActionListItem", {
        get: function () {
            return this._isActionListItem;
        },
        /** @docs-private */
        set: function (val) {
            this._isActionListItem = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyListItem.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
        if (this.disableRipple == null) {
            if (this.isActionListItem) {
                this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                this.disableRipple = false;
                var focusState = this._focusState.listen(this._el);
                if (focusState) {
                    focusState.subscribe(function (event) {
                        if (_this._onFocusByKeyboardState === true) {
                            _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                            _this._onFocusByKeyboardState = false;
                        }
                        if (event === 'keyboard') {
                            _this._onFocusByKeyboardState = true;
                            _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                        }
                    });
                }
            }
        }
    };
    LyListItem.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._lines.changes.subscribe(function () { return _this._cd.markForCheck(); });
    };
    LyListItem.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._el);
    };
    __decorate([
        ViewChild('rippleContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyListItem.prototype, "_rippleContainer", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return LyLine; })),
        __metadata("design:type", QueryList)
    ], LyListItem.prototype, "_lines", void 0);
    __decorate([
        ContentChild(forwardRef(function () { return LyListIcon; }), { static: false }),
        __metadata("design:type", Object)
    ], LyListItem.prototype, "_icon", void 0);
    __decorate([
        ContentChild(LyAvatar, { static: false }),
        __metadata("design:type", LyAvatar)
    ], LyListItem.prototype, "_avatar", void 0);
    __decorate([
        Input('ly-list-item'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyListItem.prototype, "isActionListItem", null);
    LyListItem = __decorate([
        Component({
            selector: 'ly-list-item, a[ly-list-item], button[ly-list-item]',
            template: "<span [ngClass]=\"_listItemClasses\">\n  <ng-content></ng-content>\n  <div *ngIf=\"_lines?.length\" [className]=\"classes.lines\">\n    <ng-content select=\"[ly-line]\"></ng-content>\n  </div>\n</span>\n<div *ngIf=\"_isBrowser\" #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            inputs: [
                'bg',
                'color',
                'raised',
                'disabled',
                'outlined',
                'elevation',
                'shadowColor',
                'disableRipple'
            ],
            exportAs: 'lyListItem'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyTheme2,
            NgZone,
            LyRippleService,
            LyFocusState,
            LyList,
            ChangeDetectorRef])
    ], LyListItem);
    return LyListItem;
}(LyListItemMixinBase));
var LyListIcon = /** @class */ (function () {
    function LyListIcon(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyListIcon', function (theme) { return ({
            color: theme.text.secondary,
            paddingAfter: '16px'
        }); }, STYLE_PRIORITY));
    }
    Object.defineProperty(LyListIcon.prototype, "disablePadding", {
        get: function () {
            return this._disablePadding;
        },
        /** Disable extra padding */
        set: function (val) {
            var newVal = this._disablePadding = toBoolean(val);
            this._disablePaddingClass = this._theme.addStyle("lyIconPadding:" + newVal.toString(), function () { return ({
                paddingTop: newVal ? '4px' : '8px',
                paddingBottom: newVal ? '4px' : '8px'
            }); });
            this._renderer.addClass(this._el.nativeElement, this._disablePaddingClass);
        },
        enumerable: true,
        configurable: true
    });
    LyListIcon.prototype.ngOnInit = function () {
        if (this.disablePadding == null) {
            this.disablePadding = DISABLE_PADDING;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyListIcon.prototype, "disablePadding", null);
    LyListIcon = __decorate([
        Directive({
            selector: '[ly-list-icon]'
        }),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2])
    ], LyListIcon);
    return LyListIcon;
}());
var LyLine = /** @class */ (function () {
    function LyLine(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyLine', function (theme) { return ({
            margin: 0,
            padding: 0,
            fontWeight: 400,
            textAlign: 'initial',
            '&:first-child': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1,
                fontSize: theme.pxToRem(16)
            },
            '&:nth-child(n+2)': {
                lineHeight: '20px',
                fontSize: theme.pxToRem(14)
            }
        }); }, STYLE_PRIORITY));
    }
    LyLine = __decorate([
        Directive({
            selector: '[ly-line]'
        }),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2])
    ], LyLine);
    return LyLine;
}());

var LyListModule = /** @class */ (function () {
    function LyListModule() {
    }
    LyListModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [LyList, LyListItem, LyListIcon, LyLine],
            exports: [LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
        })
    ], LyListModule);
    return LyListModule;
}());

export { LyLine, LyList, LyListIcon, LyListItem, LyListItemBase, LyListItemMixinBase, LyListModule, STYLES };
//# sourceMappingURL=alyle-ui-list.js.map
