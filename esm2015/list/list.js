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
    root: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px',
        '&': theme.list ? theme.list.root : null
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
                    '[className]': 'classes.root'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBRVAsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztNQUV0QyxjQUFjLEdBQUcsQ0FBQzs7TUFDbEIsZUFBZSxHQUFHLEtBQUs7O0FBQzdCLE1BQU0sT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUN6QztJQUNELFFBQVEsb0JBQ0gsZ0JBQWdCLENBQUMsTUFBTSxJQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUs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QUFlLEVBQ2YsU0FBb0I7UUFGcEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUU1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUN4QixRQUFRLEVBQ1IsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixVQUFVLEVBQUUsQ0FBQztnQkFDYixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDNUI7WUFDRCxrQkFBa0IsRUFBRTtnQkFDbEIsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM1QjtTQUNGLENBQUMsRUFDRixjQUFjLENBQ2YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7OztZQWxTQyxRQUFRO1lBcEJSLFVBQVU7WUFJVixTQUFTOzs7Ozs7O0lBcVRQLHdCQUF3Qjs7Ozs7SUFDeEIscUJBQXVCOzs7OztJQUN2QiwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3lcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICB0b0Jvb2xlYW4sXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlc1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUF2YXRhciB9IGZyb20gJ0BhbHlsZS91aS9hdmF0YXInO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IDI7XG5jb25zdCBESVNBQkxFX1BBRERJTkcgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICAnJic6IHRoZW1lLmxpc3QgPyB0aGVtZS5saXN0LnJvb3QgOiBudWxsXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5idXR0b24sXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE2KSxcbiAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgJyY6OmFmdGVyJzoge1xuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJntvbkZvY3VzQnlLZXlib2FyZH06OmFmdGVyLCAme2FjdGlvbkxpc3RJdGVtfTpob3Zlcjo6YWZ0ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgfVxuICB9LFxuICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgbGlzdEl0ZW1Db250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgb25lTGluZToge1xuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIG1pbkhlaWdodDogJzQ4cHgnXG4gIH0sXG4gIHR3b0xpbmU6IHtcbiAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgIG1pbkhlaWdodDogJzY0cHgnLFxuICAgICd7bGluZXN9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTRweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbkxpc3RJdGVtOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH0sXG4gIGxpbmVzOiB7XG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGxpc3RJdGVtV2l0aEljb246IHtcbiAgICAne2xpbmVzfSc6IHtcbiAgICAgIHBhZGRpbmdCZWZvcmU6ICcxNnB4J1xuICAgIH1cbiAgfSxcbiAgdHdvTGluZVdpdGhJY29uOiB7XG4gICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxNnB4JyxcbiAgICAne2xpbmVzfSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJy00cHgnXG4gICAgfVxuICB9XG59KTtcblxuLyoqIExpc3QgY29udGFpbmVyICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1saXN0JyxcbiAgZXhwb3J0QXM6ICdseUxpc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc05hbWVdJzogJ2NsYXNzZXMucm9vdCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3Qge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2xpc3QuY2xhc3NlcztcbiAgcmVhZG9ubHkgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgcHJpdmF0ZSBfaXNBY3Rpb25MaXN0SXRlbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlMaW5lKSkgX2xpbmVzOiBRdWVyeUxpc3Q8THlMaW5lPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5TGlzdEljb24pKSBfaWNvbjogTHlMaXN0SWNvbjtcbiAgQENvbnRlbnRDaGlsZChMeUF2YXRhcikgX2F2YXRhcjogTHlBdmF0YXI7XG4gIGdldCBfbGlzdEl0ZW1DbGFzc2VzKCkge1xuICAgIGNvbnN0IHsgbGlzdEl0ZW1Db250ZW50LCB0d29MaW5lLCBvbmVMaW5lLCBsaXN0SXRlbVdpdGhJY29uLCB0d29MaW5lV2l0aEljb24gfSA9IHRoaXMuY2xhc3NlcztcbiAgICBjb25zdCBjbGFzc2VzID0gW2xpc3RJdGVtQ29udGVudF07XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMuX2ljb24gfHwgdGhpcy5fYXZhdGFyO1xuICAgIGlmIChoYXNJY29uKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobGlzdEl0ZW1XaXRoSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lcyAmJiB0aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChoYXNJY29uICYmIHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHR3b0xpbmVXaXRoSWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5fbGluZXMubGVuZ3RoID4gMSA/IHR3b0xpbmUgOiBvbmVMaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCdseS1saXN0LWl0ZW0nKVxuICBzZXQgaXNBY3Rpb25MaXN0SXRlbSh2YWw6IGFueSkge1xuICAgIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW0gPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNBY3Rpb25MaXN0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3Rpb25MaXN0SXRlbTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgcHJpdmF0ZSBfbGlzdDogTHlMaXN0LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbGlzdC5jbGFzc2VzLmxpc3RJdGVtKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aW9uTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFjdGlvbkxpc3RJdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fbGluZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2QubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpc3QtaWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEljb24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEaXNhYmxlIGV4dHJhIHBhZGRpbmcgKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQYWRkaW5nKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVBhZGRpbmcgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5SWNvblBhZGRpbmc6JHtuZXdWYWwudG9TdHJpbmcoKX1gLCAoKSA9PiAoXG4gICAgICB7XG4gICAgICAgIHBhZGRpbmdUb3A6IG5ld1ZhbCA/ICc0cHgnIDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5ld1ZhbCA/ICc0cHgnIDogJzhweCdcbiAgICAgIH1cbiAgICApKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzKTtcbiAgfVxuICBnZXQgZGlzYWJsZVBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQYWRkaW5nO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGlzdEljb24nLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICBwYWRkaW5nQWZ0ZXI6ICcxNnB4J1xuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUGFkZGluZyA9IERJU0FCTEVfUEFERElORztcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpbmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpbmUnLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdpbml0aWFsJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bnRoLWNoaWxkKG4rMiknOiB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNClcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==