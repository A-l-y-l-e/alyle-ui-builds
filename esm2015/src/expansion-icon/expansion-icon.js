/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { toBoolean } from '../minimal/is-boolean';
/** @type {?} */
const STYLES = (theme) => ({
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
        width: `${1 / 3}em`,
        height: '2px',
        backgroundColor: 'currentColor',
        display: 'inline-block',
        transition: `all ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
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
});
const ɵ0 = STYLES;
export class LyExpansionIcon {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(STYLES);
        this._up = false;
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set color(val) {
        this._colorClass = this._theme.addStyle('LyExpansionIcon.color', (theme) => ({
            '{line}': {
                backgroundColor: theme.colorOf(val)
            }
        }), this._el.nativeElement, this._colorClass, null, STYLES);
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set up(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.up) {
            this._up = newVal;
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this.classes.up);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.up);
            }
        }
    }
    /**
     * @return {?}
     */
    get up() {
        return this._up;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.up = !this.up;
    }
}
LyExpansionIcon.decorators = [
    { type: Component, args: [{
                selector: 'ly-expansion-icon',
                template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
LyExpansionIcon.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyExpansionIcon.propDecorators = {
    color: [{ type: Input }],
    up: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWljb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZXhwYW5zaW9uLWljb24vZXhwYW5zaW9uLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFNUMsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU07S0FDakI7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUk7UUFDbkIsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsY0FBYztRQUMvQixPQUFPLEVBQUUsY0FBYztRQUN2QixVQUFVLEVBQUUsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1FBQzlGLGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsbUJBQW1CLEVBQUUsZUFBZTtZQUNwQyxTQUFTLEVBQUUsZUFBZTtTQUMzQjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxRQUFRO1lBQ2YsbUJBQW1CLEVBQUUsZ0JBQWdCO1lBQ3JDLFNBQVMsRUFBRSxnQkFBZ0I7U0FDNUI7S0FDRjtJQUNELEVBQUUsRUFBRTtRQUNGLHNCQUFzQixFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsbUJBQW1CLEVBQUUsZUFBZTtZQUNwQyxTQUFTLEVBQUUsZUFBZTtTQUMzQjtLQUNGO0NBQ0YsQ0FBQzs7QUFPRixNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBb0MxQixZQUNVLE1BQWdCLEVBQ2hCLFNBQW9CLEVBQ3BCLEdBQWU7UUFGZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQXRDaEIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSzdDLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFtQ2xCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBbENELElBQ0ksS0FBSyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFO2dCQUNSLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUNwQztTQUNGLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsSUFDSSxFQUFFLENBQUMsR0FBaUI7O2NBQ2hCLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBRTdCLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDbEIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JFO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFVRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixrR0FBb0M7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBL0NRLFFBQVE7WUFEK0MsU0FBUztZQUFyQixVQUFVOzs7b0JBeUQzRCxLQUFLO2lCQVdMLEtBQUs7Ozs7SUFsQk4sa0NBQXFEOzs7OztJQUVyRCxpQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUE0Qjs7Ozs7SUFFNUIsOEJBQW9COzs7OztJQStCbEIsaUNBQXdCOzs7OztJQUN4QixvQ0FBNEI7Ozs7O0lBQzVCLDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZvbnRTaXplOiAnMjRweCdcbiAgfSxcbiAgbGluZToge1xuICAgIHRvcDogJ2NhbGMoMC41ZW0gLSAxcHgpJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogYCR7MSAvIDN9ZW1gLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0cmFuc2l0aW9uOiBgYWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gLFxuICAgICcmOmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICBsZWZ0OiAnMC4yNWVtJyxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknXG4gICAgfSxcbiAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICByaWdodDogJzAuMjVlbScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKC00NWRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknXG4gICAgfVxuICB9LFxuICB1cDoge1xuICAgICd7bGluZX06Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoLTQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKSdcbiAgICB9LFxuICAgICd7bGluZX06bGFzdC1vZi10eXBlJzoge1xuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSg0NWRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKSdcbiAgICB9XG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1leHBhbnNpb24taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24taWNvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25JY29uIHtcbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcblxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdXAgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ0x5RXhwYW5zaW9uSWNvbi5jb2xvcicsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAne2xpbmV9Jzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgfVxuICAgIH0pLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzLCBudWxsLCBTVFlMRVMpO1xuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVwKHZhbDogYm9vbGVhbiB8ICcnKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLnVwKSB7XG4gICAgICB0aGlzLl91cCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy51cCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB1cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnVwID0gIXRoaXMudXA7XG4gIH1cbn1cbiJdfQ==