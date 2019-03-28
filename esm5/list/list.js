/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
/** @type {?} */
var STYLE_PRIORITY = 2;
/** @type {?} */
var DISABLE_PADDING = false;
/** @type {?} */
export var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    list: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px'
    },
    listItem: tslib_1.__assign({}, LY_COMMON_STYLES.button, { fontFamily: theme.typography.fontFamily, fontSize: theme.pxToRem(16), color: theme.text.default, display: 'flex', width: '100%', position: 'relative', padding: '0 16px', minHeight: '48px', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 0, '&::after': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
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
        this.classes = this.theme.addStyleSheet(STYLES);
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
export { LyList };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyList.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyList.prototype.theme;
}
/**
 * \@docs-private
 */
var /**
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
 */
export { LyListItemBase };
if (false) {
    /** @type {?} */
    LyListItemBase.prototype._theme;
    /** @type {?} */
    LyListItemBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
/**
 * List Item
 */
var LyListItem = /** @class */ (function (_super) {
    tslib_1.__extends(LyListItem, _super);
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
    /**
     * @return {?}
     */
    LyListItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusState.unlisten(this._el);
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
export { LyListItem };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyListItem.prototype.classes;
    /** @type {?} */
    LyListItem.prototype._isBrowser;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._isActionListItem;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._onFocusByKeyboardState;
    /** @type {?} */
    LyListItem.prototype._rippleContainer;
    /** @type {?} */
    LyListItem.prototype._lines;
    /** @type {?} */
    LyListItem.prototype._icon;
    /** @type {?} */
    LyListItem.prototype._avatar;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._renderer;
    /** @type {?} */
    LyListItem.prototype._rippleService;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._focusState;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._list;
    /**
     * @type {?}
     * @private
     */
    LyListItem.prototype._cd;
}
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
export { LyListIcon };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyListIcon.prototype._disablePadding;
    /**
     * @type {?}
     * @private
     */
    LyListIcon.prototype._disablePaddingClass;
    /**
     * @type {?}
     * @private
     */
    LyListIcon.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyListIcon.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyListIcon.prototype._renderer;
}
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
export { LyLine };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyLine.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyLine.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyLine.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUVaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFaEIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osZUFBZSxFQUNmLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUVQLE1BQU0sV0FBVyxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFdEMsY0FBYyxHQUFHLENBQUM7O0lBQ2xCLGVBQWUsR0FBRyxLQUFLOztBQUM3QixNQUFNLEtBQU8sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDaEQsU0FBUyxFQUFFLGNBQWM7SUFDekIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFDRCxRQUFRLHVCQUNILGdCQUFnQixDQUFDLE1BQU0sSUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUN2QyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDM0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FB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QUN2QiwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3lcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICB0b0Jvb2xlYW4sXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlc1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUF2YXRhciB9IGZyb20gJ0BhbHlsZS91aS9hdmF0YXInO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IDI7XG5jb25zdCBESVNBQkxFX1BBRERJTkcgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICBsaXN0OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4J1xuICB9LFxuICBsaXN0SXRlbToge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuYnV0dG9uLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNiksXG4gICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9OjphZnRlciwgJnthY3Rpb25MaXN0SXRlbX06aG92ZXI6OmFmdGVyJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgIH1cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gIGxpc3RJdGVtQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH0sXG4gIG9uZUxpbmU6IHtcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICBtaW5IZWlnaHQ6ICc0OHB4J1xuICB9LFxuICB0d29MaW5lOiB7XG4gICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxNnB4JyxcbiAgICBtaW5IZWlnaHQ6ICc2NHB4JyxcbiAgICAne2xpbmVzfSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJy00cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25MaXN0SXRlbToge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9LFxuICBsaW5lczoge1xuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBsaXN0SXRlbVdpdGhJY29uOiB7XG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBwYWRkaW5nQmVmb3JlOiAnMTZweCdcbiAgICB9XG4gIH0sXG4gIHR3b0xpbmVXaXRoSWNvbjoge1xuICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTZweCcsXG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNHB4J1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBMaXN0IGNvbnRhaW5lciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdCcsXG4gIGV4cG9ydEFzOiAnbHlMaXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NOYW1lXSc6ICdjbGFzc2VzLmxpc3QnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5TGlzdEl0ZW1CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5TGlzdEl0ZW1NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlMaXN0SXRlbUJhc2UpKSkpKSkpKSk7XG5cbi8qKiBMaXN0IEl0ZW0gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QtaXRlbSwgYVtseS1saXN0LWl0ZW1dLCBidXR0b25bbHktbGlzdC1pdGVtXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIGV4cG9ydEFzOiAnbHlMaXN0SXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbSBleHRlbmRzIEx5TGlzdEl0ZW1NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9saXN0LmNsYXNzZXM7XG4gIHJlYWRvbmx5IF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIHByaXZhdGUgX2lzQWN0aW9uTGlzdEl0ZW06IGJvb2xlYW47XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5TGluZSkpIF9saW5lczogUXVlcnlMaXN0PEx5TGluZT47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUxpc3RJY29uKSkgX2ljb246IEx5TGlzdEljb247XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIpIF9hdmF0YXI6IEx5QXZhdGFyO1xuICBnZXQgX2xpc3RJdGVtQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IGxpc3RJdGVtQ29udGVudCwgdHdvTGluZSwgb25lTGluZSwgbGlzdEl0ZW1XaXRoSWNvbiwgdHdvTGluZVdpdGhJY29uIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtsaXN0SXRlbUNvbnRlbnRdO1xuICAgIGNvbnN0IGhhc0ljb24gPSB0aGlzLl9pY29uIHx8IHRoaXMuX2F2YXRhcjtcbiAgICBpZiAoaGFzSWNvbikge1xuICAgICAgY2xhc3Nlcy5wdXNoKGxpc3RJdGVtV2l0aEljb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZXMgJiYgdGhpcy5fbGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoaGFzSWNvbiAmJiB0aGlzLl9saW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0d29MaW5lV2l0aEljb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEgPyB0d29MaW5lIDogb25lTGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgnbHktbGlzdC1pdGVtJylcbiAgc2V0IGlzQWN0aW9uTGlzdEl0ZW0odmFsOiBhbnkpIHtcbiAgICB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzQWN0aW9uTGlzdEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX2xpc3Q6IEx5TGlzdCxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2xpc3QuY2xhc3Nlcy5saXN0SXRlbSk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGlvbkxpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hY3Rpb25MaXN0SXRlbSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgICAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2xpbmVzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1saXN0LWljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJY29uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGlzYWJsZSBleHRyYSBwYWRkaW5nICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGFkZGluZyh2YWw6IGFueSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVQYWRkaW5nID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fZGlzYWJsZVBhZGRpbmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseUljb25QYWRkaW5nOiR7bmV3VmFsLnRvU3RyaW5nKCl9YCwgKCkgPT4gKFxuICAgICAge1xuICAgICAgICBwYWRkaW5nVG9wOiBuZXdWYWwgPyAnNHB4JyA6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBuZXdWYWwgPyAnNHB4JyA6ICc4cHgnXG4gICAgICB9XG4gICAgKSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZVBhZGRpbmdDbGFzcyk7XG4gIH1cbiAgZ2V0IGRpc2FibGVQYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGFkZGluZztcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpc3RJY29uJyxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgcGFkZGluZ0FmdGVyOiAnMTZweCdcbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQYWRkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVBhZGRpbmcgPSBESVNBQkxFX1BBRERJTkc7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1saW5lXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaW5lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaW5lJyxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgdGV4dEFsaWduOiAnaW5pdGlhbCcsXG4gICAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNilcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOm50aC1jaGlsZChuKzIpJzoge1xuICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=