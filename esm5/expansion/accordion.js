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
                if (!((/** @type {?} */ (theme.expansion)).appearance && (/** @type {?} */ (theme.expansion)).appearance[val])) {
                    throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                }
                return (/** @type {?} */ ((/** @type {?} */ (theme.expansion)).appearance[val]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFrQixRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFFekIsY0FBYyxHQUFHLENBQUMsR0FBRzs7QUFFM0IsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFNBQVMsRUFBRTtRQUNULGlDQUFpQyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsV0FBVyxFQUFFLE1BQU07U0FDcEI7UUFDRCx5QkFBeUIsRUFBRTtZQUN6QixjQUFjLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzthQUMxQjtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO2FBQzVCO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUNuRDtJQUNELEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGlDQUFpQyxFQUFFO1lBQ2pDLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO0tBQ0Y7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QUFDLFVBQVUsRUFBRTtnQkFDakUsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtvQkFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztpQkFDdEQ7YUFDRjtTQUNGO2FBQU07WUFDTCxNQUFNLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sbUNBQWE7Ozs7O0lBQXJCLFVBQXNCLFFBQWlCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBdkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQWpHbUMsUUFBUTtnQkFERyxTQUFTO2dCQUE3QixVQUFVOzs7NkJBZ0hsQyxLQUFLOzJCQXFCTCxLQUFLOzRCQVFMLEtBQUs7O0lBMkNSLGtCQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0FyRlksV0FBVzs7Ozs7O0lBR3RCLDhCQUFxRDs7Ozs7SUFFckQsa0NBQTRCOzs7OztJQUM1QixnQ0FBMkI7Ozs7O0lBQzNCLGlDQUEwQjs7Ozs7SUFDMUIsdUNBQWlDOzs7OztJQUdqQywyQ0FBeUU7Ozs7O0lBd0N2RSw2QkFBd0I7Ozs7O0lBQ3hCLGdDQUE0Qjs7Ozs7SUFDNUIsMEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMsIEx5VGhlbWUyLCBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvciB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTAuOTtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICRuYW1lOiAnZXhwYW5zaW9uJyxcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJ3twYW5lbFRpdGxlfSx7cGFuZWxEZXNjcmlwdGlvbn0nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXJnaW5BZnRlcjogJzE2cHgnLFxuICAgIH0sXG4gICAgJ3twYW5lbH06bm90KHtkaXNhYmxlZH0pJzoge1xuICAgICAgJ3twYW5lbFRpdGxlfSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgICd7cGFuZWxEZXNjcmlwdGlvbn0nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICAnJic6IHRoZW1lLmV4cGFuc2lvbiA/IHRoZW1lLmV4cGFuc2lvbi5yb290IDogbnVsbFxuICB9LFxuICBwYW5lbDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7cGFuZWxIZWFkZXJ9Jzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9XG4gIH0sXG4gIHBhbmVsSGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIHRyYW5zaXRpb246IGBoZWlnaHQgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWAsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE1KSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgJ3twYW5lbH06bm90KHtleHBhbmRlZH0pOm5vdCh7ZGlzYWJsZWR9KSAmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuaG92ZXIsXG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGFuZWxIZWFkZXJDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHBhbmVsQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gIH0sXG4gIHBhbmVsQm9keToge1xuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6ICcwIDI0cHggMTZweCcsXG4gICAgdHJhbnNpdGlvbjogYHZpc2liaWxpdHkgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWAsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogdGhlbWUucHhUb1JlbSgyMClcbiAgfSxcbiAgcGFuZWxUaXRsZToge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHBhbmVsRGVzY3JpcHRpb246IHtcbiAgICBmbGV4R3JvdzogMlxuICB9LFxuICBwYW5lbEFjdGlvblJvdzoge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLmRpdmlkZXJ9YCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgcGFkZGluZzogJzE2cHggOHB4IDE2cHggMjRweCdcbiAgfSxcbiAgZXhwYW5kZWQ6IHtcbiAgICAne3BhbmVsQm9keX0nOiB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICB9XG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgY29sb3I6IHRoZW1lLmRpc2FibGVkLmNvbnRyYXN0XG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hY2NvcmRpb24nLFxuICBleHBvcnRBczogJ2x5QWNjb3JkaW9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUFjY29yZGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcblxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuO1xuICBwcml2YXRlIF9oYXNUb2dnbGUgPSB0cnVlO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdHJ1ZS9mYWxzZSB3aGVuIG9wZW5BbGwvY2xvc2VBbGwgaXMgdHJpZ2dlcmVkLiAqL1xuICByZWFkb25seSBfb3BlbkNsb3NlQWxsQWN0aW9uczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5QWNjb3JkaW9uLmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKCEodGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlICYmIHRoZW1lLmV4cGFuc2lvbiEuYXBwZWFyYW5jZVt2YWxdKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgZXhwYW5zaW9uLmFwcGVhcmFuY2VbJyR7dmFsfSddIG5vdCBmb3VuZCBpbiBUaGVtZVZhcmlhYmxlc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGVtZS5leHBhbnNpb24hLmFwcGVhcmFuY2VbdmFsXSE7XG4gICAgICB9LFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgU1RZTEVTXG4gICAgKTtcbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGFzVG9nZ2xlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc1RvZ2dsZSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RvZ2dsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGV4cGFuc2lvbiB9ID0gdGhpcy5fdGhlbWUudmFyaWFibGVzO1xuICAgIGlmIChleHBhbnNpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgICAgLy8gQXBwbHkgZGVmYXVsdCBjb25maWdcbiAgICAgIGlmIChleHBhbnNpb24uZGVmYXVsdENvbmZpZyAmJiBleHBhbnNpb24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IGV4cGFuc2lvbi5kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IoJ2V4cGFuc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbCh0cnVlKTtcbiAgfVxuXG4gIG9wZW5BbGwoKSB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5DbG9zZUFsbChleHBhbmRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLm5leHQoZXhwYW5kZWQpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=