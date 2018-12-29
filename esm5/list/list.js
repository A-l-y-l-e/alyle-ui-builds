/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
var styles = function (theme) { return ({
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
var ɵ0 = styles;
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
export { LyList };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyList.prototype.classes;
    /** @type {?} */
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
    /** @type {?} */
    LyListItem.prototype._isActionListItem;
    /** @type {?} */
    LyListItem.prototype._onFocusByKeyboardState;
    /** @type {?} */
    LyListItem.prototype._rippleContainer;
    /** @type {?} */
    LyListItem.prototype._lines;
    /** @type {?} */
    LyListItem.prototype._icon;
    /** @type {?} */
    LyListItem.prototype._avatar;
    /** @type {?} */
    LyListItem.prototype._el;
    /** @type {?} */
    LyListItem.prototype._renderer;
    /** @type {?} */
    LyListItem.prototype._rippleService;
    /** @type {?} */
    LyListItem.prototype._focusState;
    /** @type {?} */
    LyListItem.prototype._list;
    /** @type {?} */
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
    /** @type {?} */
    LyListIcon.prototype._disablePadding;
    /** @type {?} */
    LyListIcon.prototype._disablePaddingClass;
    /** @type {?} */
    LyListIcon.prototype._theme;
    /** @type {?} */
    LyListIcon.prototype._el;
    /** @type {?} */
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
    /** @type {?} */
    LyLine.prototype._theme;
    /** @type {?} */
    LyLine.prototype._el;
    /** @type {?} */
    LyLine.prototype._renderer;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUVaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osZUFBZSxFQUNmLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUVQLE1BQU0sV0FBVyxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFdEMsY0FBYyxHQUFHLENBQUM7O0lBQ2xCLGVBQWUsR0FBRyxLQUFLOztJQUN2QixNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUNELFFBQVEsdUJBQ0gsZ0JBQWdCLENBQUMsTUFBTSxJQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3ZDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsS0FB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TixNQUFNLENBQVU7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FDeEIsUUFBUSxFQUNSLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM1QjtZQUNELGtCQUFrQixFQUFFO2dCQUNsQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzVCO1NBQ0YsQ0FBQyxFQWhCeUIsQ0FnQnpCLEVBQ0YsY0FBYyxDQUNmLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzs7O2dCQTVSQyxRQUFRO2dCQW5CUixVQUFVO2dCQUlWLFNBQVM7O0lBMlVYLGFBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQS9CWSxNQUFNOzs7SUFFZix3QkFBd0I7O0lBQ3hCLHFCQUF1Qjs7SUFDdkIsMkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QXZhdGFyIH0gZnJvbSAnQGFseWxlL3VpL2F2YXRhcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gMjtcbmNvbnN0IERJU0FCTEVfUEFERElORyA9IGZhbHNlO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgbGlzdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCdcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmJ1dHRvbixcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpLFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsICZ7YWN0aW9uTGlzdEl0ZW19OmhvdmVyOjphZnRlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICBsaXN0SXRlbUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBvbmVMaW5lOiB7XG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCdcbiAgfSxcbiAgdHdvTGluZToge1xuICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNjRweCcsXG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNHB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uTGlzdEl0ZW06IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBtaW5XaWR0aDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgbGlzdEl0ZW1XaXRoSWNvbjoge1xuICAgICd7bGluZXN9Jzoge1xuICAgICAgcGFkZGluZ0JlZm9yZTogJzE2cHgnXG4gICAgfVxuICB9LFxuICB0d29MaW5lV2l0aEljb246IHtcbiAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgICd7bGluZXN9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTRweCdcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiogTGlzdCBjb250YWluZXIgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QnLFxuICBleHBvcnRBczogJ2x5TGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzTmFtZV0nOiAnY2xhc3Nlcy5saXN0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9saXN0LmNsYXNzZXM7XG4gIHJlYWRvbmx5IF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIHByaXZhdGUgX2lzQWN0aW9uTGlzdEl0ZW06IGJvb2xlYW47XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5TGluZSkpIF9saW5lczogUXVlcnlMaXN0PEx5TGluZT47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUxpc3RJY29uKSkgX2ljb246IEx5TGlzdEljb247XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIpIF9hdmF0YXI6IEx5QXZhdGFyO1xuICBnZXQgX2xpc3RJdGVtQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IGxpc3RJdGVtQ29udGVudCwgdHdvTGluZSwgb25lTGluZSwgbGlzdEl0ZW1XaXRoSWNvbiwgdHdvTGluZVdpdGhJY29uIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtsaXN0SXRlbUNvbnRlbnRdO1xuICAgIGNvbnN0IGhhc0ljb24gPSB0aGlzLl9pY29uIHx8IHRoaXMuX2F2YXRhcjtcbiAgICBpZiAoaGFzSWNvbikge1xuICAgICAgY2xhc3Nlcy5wdXNoKGxpc3RJdGVtV2l0aEljb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZXMgJiYgdGhpcy5fbGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoaGFzSWNvbiAmJiB0aGlzLl9saW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0d29MaW5lV2l0aEljb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEgPyB0d29MaW5lIDogb25lTGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgnbHktbGlzdC1pdGVtJylcbiAgc2V0IGlzQWN0aW9uTGlzdEl0ZW0odmFsOiBhbnkpIHtcbiAgICB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzQWN0aW9uTGlzdEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX2xpc3Q6IEx5TGlzdCxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2xpc3QuY2xhc3Nlcy5saXN0SXRlbSk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGlvbkxpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hY3Rpb25MaXN0SXRlbSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgICAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2xpbmVzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGlzdC1pY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIERpc2FibGUgZXh0cmEgcGFkZGluZyAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBhZGRpbmcodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUGFkZGluZyA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlJY29uUGFkZGluZzoke25ld1ZhbC50b1N0cmluZygpfWAsICgpID0+IChcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZ1RvcDogbmV3VmFsID8gJzRweCcgOiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogbmV3VmFsID8gJzRweCcgOiAnOHB4J1xuICAgICAgfVxuICAgICkpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MpO1xuICB9XG4gIGdldCBkaXNhYmxlUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBhZGRpbmc7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaXN0SWNvbicsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgIHBhZGRpbmdBZnRlcjogJzE2cHgnXG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGFkZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVQYWRkaW5nID0gRElTQUJMRV9QQURESU5HO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGluZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGluZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGluZScsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2luaXRpYWwnLFxuICAgICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpudGgtY2hpbGQobisyKSc6IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19