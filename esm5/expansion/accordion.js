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
            if (expansion.root) {
                this._renderer.addClass(this._el.nativeElement, this._theme.style(expansion.root, STYLE_PRIORITY, STYLES));
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFrQixRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFFekIsY0FBYyxHQUFHLENBQUMsR0FBRzs7QUFFM0IsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFNBQVMsRUFBRTtRQUNULGlDQUFpQyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsV0FBVyxFQUFFLE1BQU07U0FDcEI7UUFDRCx5QkFBeUIsRUFBRTtZQUN6QixjQUFjLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzthQUMxQjtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO2FBQzVCO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsaUNBQWlDLEVBQUU7WUFDakMsTUFBTSxFQUFFLFNBQVM7U0FDbEI7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFF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QUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIFRoZW1lVmFyaWFibGVzLCBMeVRoZW1lMiwgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0wLjk7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAkbmFtZTogJ2V4cGFuc2lvbicsXG4gICdAZ2xvYmFsJzoge1xuICAgICd7cGFuZWxUaXRsZX0se3BhbmVsRGVzY3JpcHRpb259Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQWZ0ZXI6ICcxNnB4JyxcbiAgICB9LFxuICAgICd7cGFuZWx9Om5vdCh7ZGlzYWJsZWR9KSc6IHtcbiAgICAgICd7cGFuZWxUaXRsZX0nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICAne3BhbmVsRGVzY3JpcHRpb259Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5zZWNvbmRhcnlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJvb3Q6IG51bGwsXG4gIHBhbmVsOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyY6bm90KHtkaXNhYmxlZH0pIHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH1cbiAgfSxcbiAgcGFuZWxIZWFkZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgdHJhbnNpdGlvbjogYGhlaWdodCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YCxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTUpLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAne3BhbmVsfTpub3Qoe2V4cGFuZGVkfSk6bm90KHtkaXNhYmxlZH0pICY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5ob3ZlcixcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwYW5lbEhlYWRlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgcGFuZWxDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgfSxcbiAgcGFuZWxCb2R5OiB7XG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogJzAgMjRweCAxNnB4JyxcbiAgICB0cmFuc2l0aW9uOiBgdmlzaWJpbGl0eSAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YCxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5weFRvUmVtKDIwKVxuICB9LFxuICBwYW5lbFRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgcGFuZWxEZXNjcmlwdGlvbjoge1xuICAgIGZsZXhHcm93OiAyXG4gIH0sXG4gIHBhbmVsQWN0aW9uUm93OiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGl2aWRlcn1gLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBwYWRkaW5nOiAnMTZweCA4cHggMTZweCAyNHB4J1xuICB9LFxuICBleHBhbmRlZDoge1xuICAgICd7cGFuZWxCb2R5fSc6IHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgIH1cbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3RcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWFjY29yZGlvbicsXG4gIGV4cG9ydEFzOiAnbHlBY2NvcmRpb24nXG59KVxuZXhwb3J0IGNsYXNzIEx5QWNjb3JkaW9uIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1RvZ2dsZSA9IHRydWU7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB0cnVlL2ZhbHNlIHdoZW4gb3BlbkFsbC9jbG9zZUFsbCBpcyB0cmlnZ2VyZWQuICovXG4gIHJlYWRvbmx5IF9vcGVuQ2xvc2VBbGxBY3Rpb25zOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlBY2NvcmRpb24uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAoISh0aGVtZS5leHBhbnNpb24hLmFwcGVhcmFuY2UgJiYgdGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlW3ZhbF0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBleHBhbnNpb24uYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoZW1lLmV4cGFuc2lvbiEuYXBwZWFyYW5jZVt2YWxdITtcbiAgICAgIH0sXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFksXG4gICAgICBTVFlMRVNcbiAgICApO1xuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG11bHRpcGxlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNUb2dnbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzVG9nZ2xlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzVG9nZ2xlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsgZXhwYW5zaW9uIH0gPSB0aGlzLl90aGVtZS52YXJpYWJsZXM7XG4gICAgaWYgKGV4cGFuc2lvbikge1xuICAgICAgaWYgKGV4cGFuc2lvbi5yb290KSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgdGhpcy5fdGhlbWUuc3R5bGUoZXhwYW5zaW9uLnJvb3QsIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgICAgLy8gQXBwbHkgZGVmYXVsdCBjb25maWdcbiAgICAgIGlmIChleHBhbnNpb24uZGVmYXVsdENvbmZpZyAmJiBleHBhbnNpb24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IGV4cGFuc2lvbi5kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IoJ2V4cGFuc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbCh0cnVlKTtcbiAgfVxuXG4gIG9wZW5BbGwoKSB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5DbG9zZUFsbChleHBhbmRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLm5leHQoZXhwYW5kZWQpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=