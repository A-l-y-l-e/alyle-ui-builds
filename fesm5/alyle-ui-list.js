import { __assign, __extends } from 'tslib';
import { Directive, ElementRef, Input, NgZone, Renderer2, Component, ViewChild, forwardRef, ContentChildren, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform, LyCommonModule } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = 2;
/** @type {?} */
var DISABLE_PADDING = false;
/** @type {?} */
var styles = function (theme) { return ({
    list: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px'
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
/**
 * List container
 */
var LyList = /** @class */ (function () {
    function LyList(theme) {
        this.theme = theme;
        /**
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
    LyList.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-list',
                    exportAs: 'lyList',
                    host: {
                        '[className]': 'classes.list'
                    }
                },] }
    ];
    /** @nocollapse */
    LyList.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    return LyList;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyListItemBase = /** @class */ (function () {
    function LyListItemBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyListItemBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
/**
 * List Item
 */
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
        /**
         * \@docs-private
         */
        _this.classes = _this._list.classes;
        _this._isBrowser = Platform.isBrowser;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        return _this;
    }
    Object.defineProperty(LyListItem.prototype, "_listItemClasses", {
        get: /**
         * @return {?}
         */
        function () {
            var _a = this.classes, listItemContent = _a.listItemContent, twoLine = _a.twoLine, oneLine = _a.oneLine, listItemWithIcon = _a.listItemWithIcon, twoLineWithIcon = _a.twoLineWithIcon;
            /** @type {?} */
            var classes = [listItemContent];
            /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._isActionListItem;
        },
        /** @docs-private */
        set: /**
         * \@docs-private
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isActionListItem = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyListItem.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
        if (this.disableRipple == null) {
            if (this.isActionListItem) {
                this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                this.disableRipple = false;
                /** @type {?} */
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
    /**
     * @return {?}
     */
    LyListItem.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._lines.changes.subscribe(function () { return _this._cd.markForCheck(); });
    };
    LyListItem.decorators = [
        { type: Component, args: [{
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
                }] }
    ];
    /** @nocollapse */
    LyListItem.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState },
        { type: LyList },
        { type: ChangeDetectorRef }
    ]; };
    LyListItem.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        _lines: [{ type: ContentChildren, args: [forwardRef(function () { return LyLine; }),] }],
        _icon: [{ type: ContentChild, args: [forwardRef(function () { return LyListIcon; }),] }],
        _avatar: [{ type: ContentChild, args: [LyAvatar,] }],
        isActionListItem: [{ type: Input, args: ['ly-list-item',] }]
    };
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
        get: /**
         * @return {?}
         */
        function () {
            return this._disablePadding;
        },
        /** Disable extra padding */
        set: /**
         * Disable extra padding
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
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
    /**
     * @return {?}
     */
    LyListIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.disablePadding == null) {
            this.disablePadding = DISABLE_PADDING;
        }
    };
    LyListIcon.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-list-icon]'
                },] }
    ];
    /** @nocollapse */
    LyListIcon.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyListIcon.propDecorators = {
        disablePadding: [{ type: Input }]
    };
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
    LyLine.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-line]'
                },] }
    ];
    /** @nocollapse */
    LyLine.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return LyLine;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyListModule = /** @class */ (function () {
    function LyListModule() {
    }
    LyListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [LyList, LyListItem, LyListIcon, LyLine],
                    exports: [LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
                },] }
    ];
    return LyListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyList, LyListItemBase, LyListItemMixinBase, LyListItem, LyListIcon, LyLine, LyListModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbGlzdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2xpc3QvbGlzdC50cyIsIm5nOi8vQGFseWxlL3VpL2xpc3QvbGlzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QXZhdGFyIH0gZnJvbSAnQGFseWxlL3VpL2F2YXRhcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gMjtcbmNvbnN0IERJU0FCTEVfUEFERElORyA9IGZhbHNlO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgbGlzdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCdcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmJ1dHRvbixcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpLFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsICZ7YWN0aW9uTGlzdEl0ZW19OmhvdmVyOjphZnRlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICBsaXN0SXRlbUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBvbmVMaW5lOiB7XG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCdcbiAgfSxcbiAgdHdvTGluZToge1xuICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNjRweCcsXG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNHB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uTGlzdEl0ZW06IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBtaW5XaWR0aDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgbGlzdEl0ZW1XaXRoSWNvbjoge1xuICAgICd7bGluZXN9Jzoge1xuICAgICAgcGFkZGluZ0JlZm9yZTogJzE2cHgnXG4gICAgfVxuICB9LFxuICB0d29MaW5lV2l0aEljb246IHtcbiAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgICd7bGluZXN9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTRweCdcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiogTGlzdCBjb250YWluZXIgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QnLFxuICBleHBvcnRBczogJ2x5TGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzTmFtZV0nOiAnY2xhc3Nlcy5saXN0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9saXN0LmNsYXNzZXM7XG4gIHJlYWRvbmx5IF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIHByaXZhdGUgX2lzQWN0aW9uTGlzdEl0ZW06IGJvb2xlYW47XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5TGluZSkpIF9saW5lczogUXVlcnlMaXN0PEx5TGluZT47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUxpc3RJY29uKSkgX2ljb246IEx5TGlzdEljb247XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIpIF9hdmF0YXI6IEx5QXZhdGFyO1xuICBnZXQgX2xpc3RJdGVtQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IGxpc3RJdGVtQ29udGVudCwgdHdvTGluZSwgb25lTGluZSwgbGlzdEl0ZW1XaXRoSWNvbiwgdHdvTGluZVdpdGhJY29uIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtsaXN0SXRlbUNvbnRlbnRdO1xuICAgIGNvbnN0IGhhc0ljb24gPSB0aGlzLl9pY29uIHx8IHRoaXMuX2F2YXRhcjtcbiAgICBpZiAoaGFzSWNvbikge1xuICAgICAgY2xhc3Nlcy5wdXNoKGxpc3RJdGVtV2l0aEljb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZXMgJiYgdGhpcy5fbGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoaGFzSWNvbiAmJiB0aGlzLl9saW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0d29MaW5lV2l0aEljb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEgPyB0d29MaW5lIDogb25lTGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgnbHktbGlzdC1pdGVtJylcbiAgc2V0IGlzQWN0aW9uTGlzdEl0ZW0odmFsOiBhbnkpIHtcbiAgICB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzQWN0aW9uTGlzdEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX2xpc3Q6IEx5TGlzdCxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2xpc3QuY2xhc3Nlcy5saXN0SXRlbSk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGlvbkxpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hY3Rpb25MaXN0SXRlbSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgICAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2xpbmVzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGlzdC1pY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIERpc2FibGUgZXh0cmEgcGFkZGluZyAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBhZGRpbmcodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUGFkZGluZyA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlJY29uUGFkZGluZzoke25ld1ZhbC50b1N0cmluZygpfWAsICgpID0+IChcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZ1RvcDogbmV3VmFsID8gJzRweCcgOiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogbmV3VmFsID8gJzRweCcgOiAnOHB4J1xuICAgICAgfVxuICAgICkpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MpO1xuICB9XG4gIGdldCBkaXNhYmxlUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBhZGRpbmc7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaXN0SWNvbicsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgIHBhZGRpbmdBZnRlcjogJzE2cHgnXG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGFkZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVQYWRkaW5nID0gRElTQUJMRV9QQURESU5HO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGluZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGluZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGluZScsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2luaXRpYWwnLFxuICAgICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpudGgtY2hpbGQobisyKSc6IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5TGlzdCwgTHlMaXN0SXRlbSwgTHlMaXN0SWNvbiwgTHlMaW5lIH0gZnJvbSAnLi9saXN0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUxpc3QsIEx5TGlzdEl0ZW0sIEx5TGlzdEljb24sIEx5TGluZV0sXG4gIGV4cG9ydHM6IFtMeUNvbW1vbk1vZHVsZSwgTHlMaXN0LCBMeUxpc3RJdGVtLCBMeUxpc3RJY29uLCBMeUxpbmVdXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFxQ00sY0FBYyxHQUFHLENBQUM7O0lBQ2xCLGVBQWUsR0FBRyxLQUFLOztJQUN2QixNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFDRCxRQUFRLGVBQ0gsZ0JBQWdCLENBQUMsTUFBTSxJQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3ZDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsS0FBSyxFQUFFLE1BQU0sRUFDYixRQUFRLEVBQUUsVUFBVSxFQUNwQixPQUFPLEVBQUUsUUFBUSxFQUNqQixTQUFTLEVBQUUsTUFBTSxFQUNqQixRQUFRLEVBQUUsUUFBUSxFQUNsQixTQUFTLEVBQUUsTUFBTSxFQUNqQixVQUFVLEVBQUUsWUFBWSxFQUN4QixjQUFjLEVBQUUsWUFBWSxFQUM1QixZQUFZLEVBQUUsQ0FBQyxFQUNmLFVBQVUsYUFDUixPQUFPLEVBQUUsSUFBSSxJQUNWLGdCQUFnQixDQUFDLElBQUksSUFDeEIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLFVBQVUsRUFBRSxhQUFhLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLEVBQ1YsYUFBYSxFQUFFLE1BQU0sS0FFdkIsNkRBQTZELEVBQUU7WUFDN0QsVUFBVSxFQUFFLGNBQWM7WUFDMUIsT0FBTyxFQUFFLEdBQUc7WUFDWixZQUFZLEVBQUUsU0FBUztTQUN4QixH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