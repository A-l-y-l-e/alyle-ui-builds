/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { toBoolean } from '../minimal/is-boolean';
/** @type {?} */
var STYLES = function (theme) { return ({
    root: {
        width: '1em',
        height: '1em',
        display: 'inline-block',
        position: 'relative',
        fontSize: '24px'
    },
    line: {
        top: 'calc(0.5em - 1px)',
        position: 'absolute',
        width: 1 / 3 + "em",
        height: '2px',
        backgroundColor: 'currentColor',
        display: 'inline-block',
        transition: "all " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
        '&:first-of-type': {
            left: '0.25em',
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        },
        '&:last-of-type': {
            right: '0.25em',
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        }
    },
    up: {
        '{line}:first-of-type': {
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        },
        '{line}:last-of-type': {
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        }
    }
}); };
var ɵ0 = STYLES;
var LyExpansionIcon = /** @class */ (function () {
    function LyExpansionIcon(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(STYLES);
        this._up = false;
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyExpansionIcon.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._colorClass = this._theme.addStyle('LyExpansionIcon.color', function (theme) { return ({
                '{line}': {
                    backgroundColor: theme.colorOf(val)
                }
            }); }, this._el.nativeElement, this._colorClass, null, STYLES);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyExpansionIcon.prototype, "up", {
        get: /**
         * @return {?}
         */
        function () {
            return this._up;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.up) {
                this._up = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.up);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.up);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyExpansionIcon.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.up = !this.up;
    };
    LyExpansionIcon.decorators = [
        { type: Component, args: [{
                    selector: 'ly-expansion-icon',
                    template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    LyExpansionIcon.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyExpansionIcon.propDecorators = {
        color: [{ type: Input }],
        up: [{ type: Input }]
    };
    return LyExpansionIcon;
}());
export { LyExpansionIcon };
if (false) {
    /** @type {?} */
    LyExpansionIcon.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyExpansionIcon.prototype._color;
    /**
     * @type {?}
     * @private
     */
    LyExpansionIcon.prototype._colorClass;
    /**
     * @type {?}
     * @private
     */
    LyExpansionIcon.prototype._up;
    /**
     * @type {?}
     * @private
     */
    LyExpansionIcon.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyExpansionIcon.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyExpansionIcon.prototype._el;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWljb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZXhwYW5zaW9uLWljb24vZXhwYW5zaW9uLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFFNUMsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUssQ0FBQyxHQUFHLENBQUMsT0FBSTtRQUNuQixNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxjQUFjO1FBQy9CLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFVBQVUsRUFBRSxTQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsV0FBTSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFVO1FBQzlGLGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsbUJBQW1CLEVBQUUsZUFBZTtZQUNwQyxTQUFTLEVBQUUsZUFBZTtTQUMzQjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxRQUFRO1lBQ2YsbUJBQW1CLEVBQUUsZ0JBQWdCO1lBQ3JDLFNBQVMsRUFB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b25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udFNpemU6ICcyNHB4J1xuICB9LFxuICBsaW5lOiB7XG4gICAgdG9wOiAnY2FsYygwLjVlbSAtIDFweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiBgJHsxIC8gM31lbWAsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRyYW5zaXRpb246IGBhbGwgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWAsXG4gICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgIGxlZnQ6ICcwLjI1ZW0nLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSg0NWRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKSdcbiAgICB9LFxuICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgIHJpZ2h0OiAnMC4yNWVtJyxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoLTQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKSdcbiAgICB9XG4gIH0sXG4gIHVwOiB7XG4gICAgJ3tsaW5lfTpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgtNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJ1xuICAgIH0sXG4gICAgJ3tsaW5lfTpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJ1xuICAgIH1cbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWV4cGFuc2lvbi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1pY29uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvbkljb24ge1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF91cCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlFeHBhbnNpb25JY29uLmNvbG9yJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICd7bGluZX0nOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICB9XG4gICAgfSksIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MsIG51bGwsIFNUWUxFUyk7XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXAodmFsOiBib29sZWFuIHwgJycpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMudXApIHtcbiAgICAgIHRoaXMuX3VwID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnVwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHVwKCkge1xuICAgIHJldHVybiB0aGlzLl91cDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMudXAgPSAhdGhpcy51cDtcbiAgfVxufVxuIl19