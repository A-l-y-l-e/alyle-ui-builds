/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
/** @type {?} */
const STYLE_PRIORITY = 2;
/** @type {?} */
const DISABLE_PADDING = false;
/** @type {?} */
export const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    list: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px'
    },
    listItem: Object.assign({}, LY_COMMON_STYLES.button, { fontFamily: theme.typography.fontFamily, fontSize: theme.pxToRem(16), color: theme.text.default, display: 'flex', width: '100%', position: 'relative', padding: '0 16px', minHeight: '48px', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 0, '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
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
});
/**
 * List container
 */
export class LyList {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        /**
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(STYLES);
    }
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
LyList.ctorParameters = () => [
    { type: LyTheme2 }
];
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
export class LyListItemBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
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
export const LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
/**
 * List Item
 */
export class LyListItem extends LyListItemMixinBase {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} ngZone
     * @param {?} _rippleService
     * @param {?} _focusState
     * @param {?} _list
     * @param {?} _cd
     */
    constructor(_el, _renderer, theme, ngZone, _rippleService, _focusState, _list, _cd) {
        super(theme, ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this._rippleService = _rippleService;
        this._focusState = _focusState;
        this._list = _list;
        this._cd = _cd;
        /**
         * \@docs-private
         */
        this.classes = this._list.classes;
        this._isBrowser = Platform.isBrowser;
        this.setAutoContrast();
        this._triggerElement = _el;
    }
    /**
     * @return {?}
     */
    get _listItemClasses() {
        const { listItemContent, twoLine, oneLine, listItemWithIcon, twoLineWithIcon } = this.classes;
        /** @type {?} */
        const classes = [listItemContent];
        /** @type {?} */
        const hasIcon = this._icon || this._avatar;
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
    }
    /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    set isActionListItem(val) {
        this._isActionListItem = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get isActionListItem() {
        return this._isActionListItem;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
        if (this.disableRipple == null) {
            if (this.isActionListItem) {
                this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                this.disableRipple = false;
                /** @type {?} */
                const focusState = this._focusState.listen(this._el);
                if (focusState) {
                    focusState.subscribe((event) => {
                        if (this._onFocusByKeyboardState === true) {
                            this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                            this._onFocusByKeyboardState = false;
                        }
                        if (event === 'keyboard') {
                            this._onFocusByKeyboardState = true;
                            this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                        }
                    });
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._lines.changes.subscribe(() => this._cd.markForCheck());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
    }
}
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
LyListItem.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState },
    { type: LyList },
    { type: ChangeDetectorRef }
];
LyListItem.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    _lines: [{ type: ContentChildren, args: [forwardRef(() => LyLine),] }],
    _icon: [{ type: ContentChild, args: [forwardRef(() => LyListIcon),] }],
    _avatar: [{ type: ContentChild, args: [LyAvatar,] }],
    isActionListItem: [{ type: Input, args: ['ly-list-item',] }]
};
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
export class LyListIcon {
    /**
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyListIcon', (theme) => ({
            color: theme.text.secondary,
            paddingAfter: '16px'
        }), STYLE_PRIORITY));
    }
    /**
     * Disable extra padding
     * @param {?} val
     * @return {?}
     */
    set disablePadding(val) {
        /** @type {?} */
        const newVal = this._disablePadding = toBoolean(val);
        this._disablePaddingClass = this._theme.addStyle(`lyIconPadding:${newVal.toString()}`, () => ({
            paddingTop: newVal ? '4px' : '8px',
            paddingBottom: newVal ? '4px' : '8px'
        }));
        this._renderer.addClass(this._el.nativeElement, this._disablePaddingClass);
    }
    /**
     * @return {?}
     */
    get disablePadding() {
        return this._disablePadding;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.disablePadding == null) {
            this.disablePadding = DISABLE_PADDING;
        }
    }
}
LyListIcon.decorators = [
    { type: Directive, args: [{
                selector: '[ly-list-icon]'
            },] }
];
/** @nocollapse */
LyListIcon.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
LyListIcon.propDecorators = {
    disablePadding: [{ type: Input }]
};
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
export class LyLine {
    /**
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyLine', (theme) => ({
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
        }), STYLE_PRIORITY));
    }
}
LyLine.decorators = [
    { type: Directive, args: [{
                selector: '[ly-line]'
            },] }
];
/** @nocollapse */
LyLine.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBRVAsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztNQUV0QyxjQUFjLEdBQUcsQ0FBQzs7TUFDbEIsZUFBZSxHQUFHLEtBQUs7O0FBQzdCLE1BQU0sT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBQ0QsUUFBUSxvQkFDSCxnQkFBZ0IsQ0FBQyxNQUFNLElBQzFCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDdkMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFD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O1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hCLFFBQVEsRUFDUixDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM1QjtZQUNELGtCQUFrQixFQUFFO2dCQUNsQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzVCO1NBQ0YsQ0FBQyxFQUNGLGNBQWMsQ0FDZixDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7O1lBalNDLFFBQVE7WUFwQlIsVUFBVTtZQUlWLFNBQVM7Ozs7Ozs7SUFvVFAsd0JBQXdCOzs7OztJQUN4QixxQkFBdUI7Ozs7O0lBQ3ZCLDJCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBmb3J3YXJkUmVmLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QXZhdGFyIH0gZnJvbSAnQGFseWxlL3VpL2F2YXRhcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gMjtcbmNvbnN0IERJU0FCTEVfUEFERElORyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIGxpc3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5idXR0b24sXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE2KSxcbiAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgJyY6OmFmdGVyJzoge1xuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJntvbkZvY3VzQnlLZXlib2FyZH06OmFmdGVyLCAme2FjdGlvbkxpc3RJdGVtfTpob3Zlcjo6YWZ0ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgfVxuICB9LFxuICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgbGlzdEl0ZW1Db250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgb25lTGluZToge1xuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIG1pbkhlaWdodDogJzQ4cHgnXG4gIH0sXG4gIHR3b0xpbmU6IHtcbiAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgIG1pbkhlaWdodDogJzY0cHgnLFxuICAgICd7bGluZXN9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTRweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbkxpc3RJdGVtOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH0sXG4gIGxpbmVzOiB7XG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGxpc3RJdGVtV2l0aEljb246IHtcbiAgICAne2xpbmVzfSc6IHtcbiAgICAgIHBhZGRpbmdCZWZvcmU6ICcxNnB4J1xuICAgIH1cbiAgfSxcbiAgdHdvTGluZVdpdGhJY29uOiB7XG4gICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxNnB4JyxcbiAgICAne2xpbmVzfSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJy00cHgnXG4gICAgfVxuICB9XG59KTtcblxuLyoqIExpc3QgY29udGFpbmVyICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1saXN0JyxcbiAgZXhwb3J0QXM6ICdseUxpc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc05hbWVdJzogJ2NsYXNzZXMubGlzdCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3Qge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2xpc3QuY2xhc3NlcztcbiAgcmVhZG9ubHkgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgcHJpdmF0ZSBfaXNBY3Rpb25MaXN0SXRlbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlMaW5lKSkgX2xpbmVzOiBRdWVyeUxpc3Q8THlMaW5lPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5TGlzdEljb24pKSBfaWNvbjogTHlMaXN0SWNvbjtcbiAgQENvbnRlbnRDaGlsZChMeUF2YXRhcikgX2F2YXRhcjogTHlBdmF0YXI7XG4gIGdldCBfbGlzdEl0ZW1DbGFzc2VzKCkge1xuICAgIGNvbnN0IHsgbGlzdEl0ZW1Db250ZW50LCB0d29MaW5lLCBvbmVMaW5lLCBsaXN0SXRlbVdpdGhJY29uLCB0d29MaW5lV2l0aEljb24gfSA9IHRoaXMuY2xhc3NlcztcbiAgICBjb25zdCBjbGFzc2VzID0gW2xpc3RJdGVtQ29udGVudF07XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMuX2ljb24gfHwgdGhpcy5fYXZhdGFyO1xuICAgIGlmIChoYXNJY29uKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobGlzdEl0ZW1XaXRoSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lcyAmJiB0aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChoYXNJY29uICYmIHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHR3b0xpbmVXaXRoSWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5fbGluZXMubGVuZ3RoID4gMSA/IHR3b0xpbmUgOiBvbmVMaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCdseS1saXN0LWl0ZW0nKVxuICBzZXQgaXNBY3Rpb25MaXN0SXRlbSh2YWw6IGFueSkge1xuICAgIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW0gPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNBY3Rpb25MaXN0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3Rpb25MaXN0SXRlbTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgcHJpdmF0ZSBfbGlzdDogTHlMaXN0LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbGlzdC5jbGFzc2VzLmxpc3RJdGVtKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aW9uTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFjdGlvbkxpc3RJdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fbGluZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2QubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpc3QtaWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEljb24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEaXNhYmxlIGV4dHJhIHBhZGRpbmcgKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQYWRkaW5nKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVBhZGRpbmcgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5SWNvblBhZGRpbmc6JHtuZXdWYWwudG9TdHJpbmcoKX1gLCAoKSA9PiAoXG4gICAgICB7XG4gICAgICAgIHBhZGRpbmdUb3A6IG5ld1ZhbCA/ICc0cHgnIDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5ld1ZhbCA/ICc0cHgnIDogJzhweCdcbiAgICAgIH1cbiAgICApKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzKTtcbiAgfVxuICBnZXQgZGlzYWJsZVBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQYWRkaW5nO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGlzdEljb24nLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICBwYWRkaW5nQWZ0ZXI6ICcxNnB4J1xuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUGFkZGluZyA9IERJU0FCTEVfUEFERElORztcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpbmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpbmUnLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdpbml0aWFsJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bnRoLWNoaWxkKG4rMiknOiB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNClcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==