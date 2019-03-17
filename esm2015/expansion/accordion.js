/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { toBoolean, LyTheme2, getLyThemeVariableUndefinedError } from '@alyle/ui';
import { Subject } from 'rxjs';
/** @type {?} */
const STYLE_PRIORITY = -0.9;
/** @type {?} */
export const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    $name: 'expansion',
    '@global': {
        '{panelTitle},{panelDescription}': {
            display: 'flex',
            marginAfter: '16px',
        },
        '{panel}:not({disabled})': {
            '{panelTitle}': {
                color: theme.text.default
            },
            '{panelDescription}': {
                color: theme.text.secondary
            }
        }
    },
    root: null,
    panel: {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        '&:not({disabled}) {panelHeader}': {
            cursor: 'pointer'
        }
    },
    panelHeader: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 24px',
        transition: `height ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.pxToRem(15),
        fontWeight: 400,
        '{panel}:not({expanded}):not({disabled}) &:hover': {
            background: theme.hover,
            '@media (hover: none)': {
                background: 'none'
            }
        }
    },
    panelHeaderContent: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    panelContent: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible'
    },
    panelBody: {
        visibility: 'hidden',
        padding: '0 24px 16px',
        transition: `visibility ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.pxToRem(14),
        fontWeight: 400,
        lineHeight: theme.pxToRem(20)
    },
    panelTitle: {
        flexGrow: 1
    },
    panelDescription: {
        flexGrow: 2
    },
    panelActionRow: {
        borderTop: `1px solid ${theme.divider}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '16px 8px 16px 24px'
    },
    expanded: {
        '{panelBody}': {
            visibility: 'visible'
        }
    },
    disabled: {
        color: theme.disabled.contrast
    }
});
export class LyAccordion {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._hasToggle = true;
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new Subject();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        this._appearance = val;
        this._appearanceClass = this._theme.addStyle(`lyAccordion.appearance:${val}`, (theme) => {
            if (!theme.expansion) {
                throw getLyThemeVariableUndefinedError('expansion');
            }
            if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            return (/** @type {?} */ (theme.expansion.appearance[val]));
        }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
    }
    /**
     * @return {?}
     */
    get appearance() {
        return this._appearance;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set multiple(val) {
        this._multiple = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get hasToggle() {
        return this._hasToggle;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { expansion } = this._theme.variables;
        if (expansion && expansion.root) {
            this._renderer.addClass(this._el.nativeElement, this._theme.style(expansion.root, STYLE_PRIORITY, STYLES));
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this._openCloseAll(true);
    }
    /**
     * @return {?}
     */
    openAll() {
        this._openCloseAll(false);
    }
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _openCloseAll(expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
LyAccordion.decorators = [
    { type: Directive, args: [{
                selector: 'ly-accordion',
                exportAs: 'lyAccordion'
            },] }
];
/** @nocollapse */
LyAccordion.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyAccordion.propDecorators = {
    appearance: [{ type: Input }],
    multiple: [{ type: Input }],
    hasToggle: [{ type: Input }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyAccordion.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._appearance;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._hasToggle;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._appearanceClass;
    /**
     * Stream that emits true/false when openAll/closeAll is triggered.
     * @type {?}
     */
    LyAccordion.prototype._openCloseAllActions;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyAccordion.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFrQixRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFFekIsY0FBYyxHQUFHLENBQUMsR0FBRzs7QUFFM0IsTUFBTSxPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsU0FBUyxFQUFFLGNBQWM7SUFDekIsS0FBSyxFQUFFLFdBQVc7SUFDbEIsU0FBUyxFQUFFO1FBQ1QsaUNBQWlDLEVBQUU7WUFDakMsT0FBTyxFQUFFLE1BQU07WUFDZixXQUFXLEVBQUUsTUFBTTtTQUNwQjtRQUNELHlCQUF5QixFQUFFO1lBQ3pCLGNBQWMsRUFBRTtnQkFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQzFCO1lBQ0Qsb0JBQW9CLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDNUI7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFLElBQUk7SUFDVixLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixpQ0FBaUMsRUFBRTtZQUNqQyxNQUFNLEVBQUUsU0FBUztTQUNsQjtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFV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QUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUFpQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBL0ZtQyxRQUFRO1lBREcsU0FBUztZQUE3QixVQUFVOzs7eUJBOEdsQyxLQUFLO3VCQXdCTCxLQUFLO3dCQVFMLEtBQUs7Ozs7Ozs7SUExQ04sOEJBQXFEOzs7OztJQUVyRCxrQ0FBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7Ozs7SUFDM0IsaUNBQTBCOzs7OztJQUMxQix1Q0FBaUM7Ozs7O0lBR2pDLDJDQUF5RTs7Ozs7SUEyQ3ZFLDZCQUF3Qjs7Ozs7SUFDeEIsZ0NBQTRCOzs7OztJQUM1QiwwQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgTHlUaGVtZTIsIGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMC45O1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgJG5hbWU6ICdleHBhbnNpb24nLFxuICAnQGdsb2JhbCc6IHtcbiAgICAne3BhbmVsVGl0bGV9LHtwYW5lbERlc2NyaXB0aW9ufSc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbkFmdGVyOiAnMTZweCcsXG4gICAgfSxcbiAgICAne3BhbmVsfTpub3Qoe2Rpc2FibGVkfSknOiB7XG4gICAgICAne3BhbmVsVGl0bGV9Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJ3twYW5lbERlc2NyaXB0aW9ufSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByb290OiBudWxsLFxuICBwYW5lbDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7cGFuZWxIZWFkZXJ9Jzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9XG4gIH0sXG4gIHBhbmVsSGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIHRyYW5zaXRpb246IGBoZWlnaHQgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWAsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE1KSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgJ3twYW5lbH06bm90KHtleHBhbmRlZH0pOm5vdCh7ZGlzYWJsZWR9KSAmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuaG92ZXIsXG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGFuZWxIZWFkZXJDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHBhbmVsQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gIH0sXG4gIHBhbmVsQm9keToge1xuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6ICcwIDI0cHggMTZweCcsXG4gICAgdHJhbnNpdGlvbjogYHZpc2liaWxpdHkgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWAsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogdGhlbWUucHhUb1JlbSgyMClcbiAgfSxcbiAgcGFuZWxUaXRsZToge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHBhbmVsRGVzY3JpcHRpb246IHtcbiAgICBmbGV4R3JvdzogMlxuICB9LFxuICBwYW5lbEFjdGlvblJvdzoge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLmRpdmlkZXJ9YCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgcGFkZGluZzogJzE2cHggOHB4IDE2cHggMjRweCdcbiAgfSxcbiAgZXhwYW5kZWQ6IHtcbiAgICAne3BhbmVsQm9keX0nOiB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICB9XG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgY29sb3I6IHRoZW1lLmRpc2FibGVkLmNvbnRyYXN0XG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hY2NvcmRpb24nLFxuICBleHBvcnRBczogJ2x5QWNjb3JkaW9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUFjY29yZGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcblxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuO1xuICBwcml2YXRlIF9oYXNUb2dnbGUgPSB0cnVlO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdHJ1ZS9mYWxzZSB3aGVuIG9wZW5BbGwvY2xvc2VBbGwgaXMgdHJpZ2dlcmVkLiAqL1xuICByZWFkb25seSBfb3BlbkNsb3NlQWxsQWN0aW9uczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5QWNjb3JkaW9uLmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKCF0aGVtZS5leHBhbnNpb24pIHtcbiAgICAgICAgICB0aHJvdyBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvcignZXhwYW5zaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodGhlbWUuZXhwYW5zaW9uLmFwcGVhcmFuY2UgJiYgdGhlbWUuZXhwYW5zaW9uLmFwcGVhcmFuY2VbdmFsXSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGV4cGFuc2lvbi5hcHBlYXJhbmNlWycke3ZhbH0nXSBub3QgZm91bmQgaW4gVGhlbWVWYXJpYWJsZXNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhlbWUuZXhwYW5zaW9uLmFwcGVhcmFuY2VbdmFsXSE7XG4gICAgICB9LFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgU1RZTEVTXG4gICAgKTtcbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGFzVG9nZ2xlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc1RvZ2dsZSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RvZ2dsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGV4cGFuc2lvbiB9ID0gdGhpcy5fdGhlbWUudmFyaWFibGVzO1xuICAgIGlmIChleHBhbnNpb24gJiYgZXhwYW5zaW9uLnJvb3QpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl90aGVtZS5zdHlsZShleHBhbnNpb24ucm9vdCwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUykpO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGwodHJ1ZSk7XG4gIH1cblxuICBvcGVuQWxsKCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuQ2xvc2VBbGwoZXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5fb3BlbkNsb3NlQWxsQWN0aW9ucy5uZXh0KGV4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxufVxuIl19