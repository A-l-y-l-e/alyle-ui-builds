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
        },
    },
    root: {
        '&': theme.expansion ? theme.expansion.root : null
    },
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
            if (!((/** @type {?} */ (theme.expansion)).appearance && (/** @type {?} */ (theme.expansion)).appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            return (/** @type {?} */ ((/** @type {?} */ (theme.expansion)).appearance[val]));
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
        if (expansion) {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // Apply default config
            if (expansion.defaultConfig && expansion.defaultConfig.appearance) {
                if (this.appearance == null) {
                    this.appearance = expansion.defaultConfig.appearance;
                }
            }
        }
        else {
            throw getLyThemeVariableUndefinedError('expansion');
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFrQixRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFFekIsY0FBYyxHQUFHLENBQUMsR0FBRzs7QUFFM0IsTUFBTSxPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsU0FBUyxFQUFFLGNBQWM7SUFDekIsS0FBSyxFQUFFLFdBQVc7SUFDbEIsU0FBUyxFQUFFO1FBQ1QsaUNBQWlDLEVBQUU7WUFDakMsT0FBTyxFQUFFLE1BQU07WUFDZixXQUFXLEVBQUUsTUFBTTtTQUNwQjtRQUNELHlCQUF5QixFQUFFO1lBQ3pCLGNBQWMsRUFBRTtnQkFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQzFCO1lBQ0Qsb0JBQW9CLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDNUI7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ25EO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsaUNBQWlDLEVBQUU7WUFDakMsTUFBTSxFQUFFLFNBQVM7U0FDbEI7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QjtZQUN2QixJQUFJLFNBQVMsQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7aUJBQ3REO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsTUFBTSxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFFBQWlCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFqR21DLFFBQVE7WUFERyxTQUFTO1lBQTdCLFVBQVU7Ozt5QkFnSGxDLEtBQUs7dUJBcUJMLEtBQUs7d0JBUUwsS0FBSzs7Ozs7OztJQXZDTiw4QkFBcUQ7Ozs7O0lBRXJELGtDQUE0Qjs7Ozs7SUFDNUIsZ0NBQTJCOzs7OztJQUMzQixpQ0FBMEI7Ozs7O0lBQzFCLHVDQUFpQzs7Ozs7SUFHakMsMkNBQXlFOzs7OztJQXdDdkUsNkJBQXdCOzs7OztJQUN4QixnQ0FBNEI7Ozs7O0lBQzVCLDBCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIFRoZW1lVmFyaWFibGVzLCBMeVRoZW1lMiwgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0wLjk7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAkbmFtZTogJ2V4cGFuc2lvbicsXG4gICdAZ2xvYmFsJzoge1xuICAgICd7cGFuZWxUaXRsZX0se3BhbmVsRGVzY3JpcHRpb259Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQWZ0ZXI6ICcxNnB4JyxcbiAgICB9LFxuICAgICd7cGFuZWx9Om5vdCh7ZGlzYWJsZWR9KSc6IHtcbiAgICAgICd7cGFuZWxUaXRsZX0nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICAne3BhbmVsRGVzY3JpcHRpb259Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5zZWNvbmRhcnlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICByb290OiB7XG4gICAgJyYnOiB0aGVtZS5leHBhbnNpb24gPyB0aGVtZS5leHBhbnNpb24ucm9vdCA6IG51bGxcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJjpub3Qoe2Rpc2FibGVkfSkge3BhbmVsSGVhZGVyfSc6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfVxuICB9LFxuICBwYW5lbEhlYWRlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICB0cmFuc2l0aW9uOiBgaGVpZ2h0ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNSksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgICd7cGFuZWx9Om5vdCh7ZXhwYW5kZWR9KTpub3Qoe2Rpc2FibGVkfSkgJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmhvdmVyLFxuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBhbmVsSGVhZGVyQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBwYW5lbENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICB9LFxuICBwYW5lbEJvZHk6IHtcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4IDE2cHgnLFxuICAgIHRyYW5zaXRpb246IGB2aXNpYmlsaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNCksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6IHRoZW1lLnB4VG9SZW0oMjApXG4gIH0sXG4gIHBhbmVsVGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBwYW5lbERlc2NyaXB0aW9uOiB7XG4gICAgZmxleEdyb3c6IDJcbiAgfSxcbiAgcGFuZWxBY3Rpb25Sb3c6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5kaXZpZGVyfWAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIHBhZGRpbmc6ICcxNnB4IDhweCAxNnB4IDI0cHgnXG4gIH0sXG4gIGV4cGFuZGVkOiB7XG4gICAgJ3twYW5lbEJvZHl9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgfVxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGNvbG9yOiB0aGVtZS5kaXNhYmxlZC5jb250cmFzdFxuICB9XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICdseUFjY29yZGlvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlBY2NvcmRpb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzVG9nZ2xlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHRydWUvZmFsc2Ugd2hlbiBvcGVuQWxsL2Nsb3NlQWxsIGlzIHRyaWdnZXJlZC4gKi9cbiAgcmVhZG9ubHkgX29wZW5DbG9zZUFsbEFjdGlvbnM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUFjY29yZGlvbi5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICghKHRoZW1lLmV4cGFuc2lvbiEuYXBwZWFyYW5jZSAmJiB0aGVtZS5leHBhbnNpb24hLmFwcGVhcmFuY2VbdmFsXSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGV4cGFuc2lvbi5hcHBlYXJhbmNlWycke3ZhbH0nXSBub3QgZm91bmQgaW4gVGhlbWVWYXJpYWJsZXNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlW3ZhbF0hO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgIFNUWUxFU1xuICAgICk7XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc1RvZ2dsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNUb2dnbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaGFzVG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUb2dnbGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBleHBhbnNpb24gfSA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcztcbiAgICBpZiAoZXhwYW5zaW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAgIC8vIEFwcGx5IGRlZmF1bHQgY29uZmlnXG4gICAgICBpZiAoZXhwYW5zaW9uLmRlZmF1bHRDb25maWcgJiYgZXhwYW5zaW9uLmRlZmF1bHRDb25maWcuYXBwZWFyYW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBleHBhbnNpb24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yKCdleHBhbnNpb24nKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGwodHJ1ZSk7XG4gIH1cblxuICBvcGVuQWxsKCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuQ2xvc2VBbGwoZXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5fb3BlbkNsb3NlQWxsQWN0aW9ucy5uZXh0KGV4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxufVxuIl19