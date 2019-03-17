/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { toBoolean, LyTheme2, getLyThemeVariableUndefinedError } from '@alyle/ui';
import { Subject } from 'rxjs';
/** @type {?} */
var STYLE_PRIORITY = -0.9;
/** @type {?} */
export var STYLES = function (theme) { return ({
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
        transition: "height " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
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
        transition: "visibility " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
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
        borderTop: "1px solid " + theme.divider,
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
}); };
var LyAccordion = /** @class */ (function () {
    function LyAccordion(_theme, _renderer, _el) {
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
    Object.defineProperty(LyAccordion.prototype, "appearance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._appearance;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle("lyAccordion.appearance:" + val, function (theme) {
                if (!theme.expansion) {
                    throw getLyThemeVariableUndefinedError('expansion');
                }
                if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                    throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                }
                return (/** @type {?} */ (theme.expansion.appearance[val]));
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._multiple = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "hasToggle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasToggle;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hasToggle = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyAccordion.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var expansion = this._theme.variables.expansion;
        if (expansion && expansion.root) {
            this._renderer.addClass(this._el.nativeElement, this._theme.style(expansion.root, STYLE_PRIORITY, STYLES));
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    };
    /**
     * @return {?}
     */
    LyAccordion.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        this._openCloseAll(true);
    };
    /**
     * @return {?}
     */
    LyAccordion.prototype.openAll = /**
     * @return {?}
     */
    function () {
        this._openCloseAll(false);
    };
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    LyAccordion.prototype._openCloseAll = /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    function (expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    };
    LyAccordion.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-accordion',
                    exportAs: 'lyAccordion'
                },] }
    ];
    /** @nocollapse */
    LyAccordion.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyAccordion.propDecorators = {
        appearance: [{ type: Input }],
        multiple: [{ type: Input }],
        hasToggle: [{ type: Input }]
    };
    return LyAccordion;
}());
export { LyAccordion };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFrQixRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFFekIsY0FBYyxHQUFHLENBQUMsR0FBRzs7QUFFM0IsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFNBQVMsRUFBRTtRQUNULGlDQUFpQyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsV0FBVyxFQUFFLE1BQU07U0FDcEI7UUFDRCx5QkFBeUIsRUFBRTtZQUN6QixjQUFjLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzthQUMxQjtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO2FBQzVCO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsaUNBQWlDLEVBQUU7WUFDakMsTUFBTSxFQUFFLFNBQVM7U0FDbEI7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFF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USxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sbUNBQWE7Ozs7O0lBQXJCLFVBQXNCLFFBQWlCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBcEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQS9GbUMsUUFBUTtnQkFERyxTQUFTO2dCQUE3QixVQUFVOzs7NkJBOEdsQyxLQUFLOzJCQXdCTCxLQUFLOzRCQVFMLEtBQUs7O0lBcUNSLGtCQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0FsRlksV0FBVzs7Ozs7O0lBR3RCLDhCQUFxRDs7Ozs7SUFFckQsa0NBQTRCOzs7OztJQUM1QixnQ0FBMkI7Ozs7O0lBQzNCLGlDQUEwQjs7Ozs7SUFDMUIsdUNBQWlDOzs7OztJQUdqQywyQ0FBeUU7Ozs7O0lBMkN2RSw2QkFBd0I7Ozs7O0lBQ3hCLGdDQUE0Qjs7Ozs7SUFDNUIsMEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMsIEx5VGhlbWUyLCBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvciB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTAuOTtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICRuYW1lOiAnZXhwYW5zaW9uJyxcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJ3twYW5lbFRpdGxlfSx7cGFuZWxEZXNjcmlwdGlvbn0nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXJnaW5BZnRlcjogJzE2cHgnLFxuICAgIH0sXG4gICAgJ3twYW5lbH06bm90KHtkaXNhYmxlZH0pJzoge1xuICAgICAgJ3twYW5lbFRpdGxlfSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgICd7cGFuZWxEZXNjcmlwdGlvbn0nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcm9vdDogbnVsbCxcbiAgcGFuZWw6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJjpub3Qoe2Rpc2FibGVkfSkge3BhbmVsSGVhZGVyfSc6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfVxuICB9LFxuICBwYW5lbEhlYWRlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICB0cmFuc2l0aW9uOiBgaGVpZ2h0ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNSksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgICd7cGFuZWx9Om5vdCh7ZXhwYW5kZWR9KTpub3Qoe2Rpc2FibGVkfSkgJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmhvdmVyLFxuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBhbmVsSGVhZGVyQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBwYW5lbENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICB9LFxuICBwYW5lbEJvZHk6IHtcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4IDE2cHgnLFxuICAgIHRyYW5zaXRpb246IGB2aXNpYmlsaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNCksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6IHRoZW1lLnB4VG9SZW0oMjApXG4gIH0sXG4gIHBhbmVsVGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBwYW5lbERlc2NyaXB0aW9uOiB7XG4gICAgZmxleEdyb3c6IDJcbiAgfSxcbiAgcGFuZWxBY3Rpb25Sb3c6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5kaXZpZGVyfWAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIHBhZGRpbmc6ICcxNnB4IDhweCAxNnB4IDI0cHgnXG4gIH0sXG4gIGV4cGFuZGVkOiB7XG4gICAgJ3twYW5lbEJvZHl9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgfVxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGNvbG9yOiB0aGVtZS5kaXNhYmxlZC5jb250cmFzdFxuICB9XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICdseUFjY29yZGlvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlBY2NvcmRpb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzVG9nZ2xlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHRydWUvZmFsc2Ugd2hlbiBvcGVuQWxsL2Nsb3NlQWxsIGlzIHRyaWdnZXJlZC4gKi9cbiAgcmVhZG9ubHkgX29wZW5DbG9zZUFsbEFjdGlvbnM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUFjY29yZGlvbi5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICghdGhlbWUuZXhwYW5zaW9uKSB7XG4gICAgICAgICAgdGhyb3cgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IoJ2V4cGFuc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoZW1lLmV4cGFuc2lvbi5hcHBlYXJhbmNlICYmIHRoZW1lLmV4cGFuc2lvbi5hcHBlYXJhbmNlW3ZhbF0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBleHBhbnNpb24uYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoZW1lLmV4cGFuc2lvbi5hcHBlYXJhbmNlW3ZhbF0hO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgIFNUWUxFU1xuICAgICk7XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc1RvZ2dsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNUb2dnbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaGFzVG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUb2dnbGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBleHBhbnNpb24gfSA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcztcbiAgICBpZiAoZXhwYW5zaW9uICYmIGV4cGFuc2lvbi5yb290KSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fdGhlbWUuc3R5bGUoZXhwYW5zaW9uLnJvb3QsIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpKTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsKHRydWUpO1xuICB9XG5cbiAgb3BlbkFsbCgpIHtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkNsb3NlQWxsKGV4cGFuZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX29wZW5DbG9zZUFsbEFjdGlvbnMubmV4dChleHBhbmRlZCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==