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
    Object.defineProperty(LyListItem.prototype, "listItemClasses", {
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
                        if (event.by === 'keyboard') {
                            if (event.event.type === 'focus') {
                                _this._onFocusByKeyboardState = true;
                                _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                            }
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
                    template: "<span [ngClass]=\"listItemClasses\">\n  <ng-content></ng-content>\n  <div *ngIf=\"_lines?.length\" [className]=\"classes.lines\">\n    <ng-content select=\"[ly-line]\"></ng-content>\n  </div>\n</span>\n<div *ngIf=\"_isBrowser\" #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbGlzdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2xpc3QvbGlzdC50cyIsIm5nOi8vQGFseWxlL3VpL2xpc3QvbGlzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QXZhdGFyIH0gZnJvbSAnQGFseWxlL3VpL2F2YXRhcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gMjtcbmNvbnN0IERJU0FCTEVfUEFERElORyA9IGZhbHNlO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgbGlzdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCdcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmJ1dHRvbixcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpLFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsICZ7YWN0aW9uTGlzdEl0ZW19OmhvdmVyOjphZnRlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICBsaXN0SXRlbUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBvbmVMaW5lOiB7XG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCdcbiAgfSxcbiAgdHdvTGluZToge1xuICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNjRweCcsXG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNHB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uTGlzdEl0ZW06IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBtaW5XaWR0aDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgbGlzdEl0ZW1XaXRoSWNvbjoge1xuICAgICd7bGluZXN9Jzoge1xuICAgICAgcGFkZGluZ0JlZm9yZTogJzE2cHgnXG4gICAgfVxuICB9LFxuICB0d29MaW5lV2l0aEljb246IHtcbiAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgICd7bGluZXN9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTRweCdcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiogTGlzdCBjb250YWluZXIgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QnLFxuICBleHBvcnRBczogJ2x5TGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzTmFtZV0nOiAnY2xhc3Nlcy5saXN0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdCB7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9saXN0LmNsYXNzZXM7XG4gIHJlYWRvbmx5IF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIHByaXZhdGUgX2lzQWN0aW9uTGlzdEl0ZW06IGJvb2xlYW47XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5TGluZSkpIF9saW5lczogUXVlcnlMaXN0PEx5TGluZT47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUxpc3RJY29uKSkgX2ljb246IEx5TGlzdEljb247XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIpIF9hdmF0YXI6IEx5QXZhdGFyO1xuICBnZXQgbGlzdEl0ZW1DbGFzc2VzKCkge1xuICAgIGNvbnN0IHsgbGlzdEl0ZW1Db250ZW50LCB0d29MaW5lLCBvbmVMaW5lLCBsaXN0SXRlbVdpdGhJY29uLCB0d29MaW5lV2l0aEljb24gfSA9IHRoaXMuY2xhc3NlcztcbiAgICBjb25zdCBjbGFzc2VzID0gW2xpc3RJdGVtQ29udGVudF07XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMuX2ljb24gfHwgdGhpcy5fYXZhdGFyO1xuICAgIGlmIChoYXNJY29uKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobGlzdEl0ZW1XaXRoSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lcyAmJiB0aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChoYXNJY29uICYmIHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHR3b0xpbmVXaXRoSWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5fbGluZXMubGVuZ3RoID4gMSA/IHR3b0xpbmUgOiBvbmVMaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCdseS1saXN0LWl0ZW0nKVxuICBzZXQgaXNBY3Rpb25MaXN0SXRlbSh2YWw6IGFueSkge1xuICAgIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW0gPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNBY3Rpb25MaXN0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3Rpb25MaXN0SXRlbTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgcHJpdmF0ZSBfbGlzdDogTHlMaXN0LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbGlzdC5jbGFzc2VzLmxpc3RJdGVtKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aW9uTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFjdGlvbkxpc3RJdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LmV2ZW50LnR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fbGluZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2QubWFya0ZvckNoZWNrKCkpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1saXN0LWljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJY29uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGlzYWJsZSBleHRyYSBwYWRkaW5nICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGFkZGluZyh2YWw6IGFueSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVQYWRkaW5nID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fZGlzYWJsZVBhZGRpbmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseUljb25QYWRkaW5nOiR7bmV3VmFsLnRvU3RyaW5nKCl9YCwgKCkgPT4gKFxuICAgICAge1xuICAgICAgICBwYWRkaW5nVG9wOiBuZXdWYWwgPyAnNHB4JyA6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBuZXdWYWwgPyAnNHB4JyA6ICc4cHgnXG4gICAgICB9XG4gICAgKSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZVBhZGRpbmdDbGFzcyk7XG4gIH1cbiAgZ2V0IGRpc2FibGVQYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGFkZGluZztcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpc3RJY29uJyxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgcGFkZGluZ0FmdGVyOiAnMTZweCdcbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQYWRkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVBhZGRpbmcgPSBESVNBQkxFX1BBRERJTkc7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1saW5lXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaW5lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaW5lJyxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNilcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOm50aC1jaGlsZChuKzIpJzoge1xuICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlMaXN0LCBMeUxpc3RJdGVtLCBMeUxpc3RJY29uLCBMeUxpbmUgfSBmcm9tICcuL2xpc3QnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5TGlzdCwgTHlMaXN0SXRlbSwgTHlMaXN0SWNvbiwgTHlMaW5lXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uTW9kdWxlLCBMeUxpc3QsIEx5TGlzdEl0ZW0sIEx5TGlzdEljb24sIEx5TGluZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0TW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXFDTSxjQUFjLEdBQUcsQ0FBQzs7SUFDbEIsZUFBZSxHQUFHLEtBQUs7O0lBQ3ZCLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssUUFBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUNELFFBQVEsZUFDSCxnQkFBZ0IsQ0FBQyxNQUFNLElBQzFCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDdkMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDekIsT0FBTyxFQUFFLE1BQU0sRUFDZixLQUFLLEVBQUUsTUFBTSxFQUNiLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLFVBQVUsRUFBRSxZQUFZLEVBQ3hCLGNBQWMsRUFBRSxZQUFZLEVBQzVCLFlBQVksRUFBRSxDQUFDLEVBQ2YsVUFBVSxhQUNSLE9BQU8sRUFBRSxJQUFJLElBQ1YsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsVUFBVSxFQUFFLGFBQWEsRUFDekIsT0FBTyxFQUFFLENBQUMsRUFDVixhQUFhLEVBQUUsTUFBTSxLQUV2Qiw2REFBNkQsRUFBRTtZQUM3RCxVQUFVLEVBQUUsY0FBYztZQUMxQixPQUFPLEVBQUUsR0FBRztZQUNaLFlBQVks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