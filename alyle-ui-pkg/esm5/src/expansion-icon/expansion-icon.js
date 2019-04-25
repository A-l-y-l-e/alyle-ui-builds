import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { toBoolean } from '../minimal/is-boolean';
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
        get: function () {
            return this._color;
        },
        set: function (val) {
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
        get: function () {
            return this._up;
        },
        set: function (val) {
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
    LyExpansionIcon.prototype.toggle = function () {
        this.up = !this.up;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyExpansionIcon.prototype, "color", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LyExpansionIcon.prototype, "up", null);
    LyExpansionIcon = tslib_1.__decorate([
        Component({
            selector: 'ly-expansion-icon',
            template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [LyTheme2,
            Renderer2,
            ElementRef])
    ], LyExpansionIcon);
    return LyExpansionIcon;
}());
export { LyExpansionIcon };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWljb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZXhwYW5zaW9uLWljb24vZXhwYW5zaW9uLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRCxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFLLENBQUMsR0FBRyxDQUFDLE9BQUk7UUFDbkIsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsY0FBYztRQUMvQixPQUFPLEVBQUUsY0FBYztRQUN2QixVQUFVLEVBQUUsU0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFdBQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBVTtRQUM5RixpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsUUFBUTtZQUNkLG1CQUFtQixFQUFFLGVBQWU7WUFDcEMsU0FBUyxFQUFFLGVBQWU7U0FDM0I7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsUUFBUTtZQUNmLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCO0tBQ0Y7SUFDRCxFQUFFLEVBQUU7UUFDRixzQkFBc0IsRUFBRTtZQUN0QixtQkFBbUIsRUFBRSxnQkFBZ0I7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLG1CQUFtQixFQUFFLGVBQWU7WUFDcEMsU0FBUyxFQUFFLGVBQWU7U0FDM0I7S0FDRjtDQUNGLENBQUMsRUFyQ3dDLENBcUN4QyxDQUFDOztBQU9IO0lBb0NFLHlCQUNVLE1BQWdCLEVBQ2hCLFNBQW9CLEVBQ3BCLEdBQWU7UUFGZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQXRDaEIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSzdDLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFtQ2xCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFqQ0Qsc0JBQUksa0NBQUs7YUFPVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBVEQsVUFBVSxHQUFXO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztnQkFDM0YsUUFBUSxFQUFFO29CQUNSLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDcEM7YUFDRixDQUFDLEVBSjBGLENBSTFGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSwrQkFBRTthQVlOO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7YUFkRCxVQUFPLEdBQWlCO1lBQ3RCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbEU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDckU7YUFDRjtRQUNILENBQUM7OztPQUFBO0lBYUQsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFyQ0Q7UUFEQyxLQUFLLEVBQUU7OztnREFPUDtJQUtEO1FBREMsS0FBSyxFQUFFOzs7NkNBWVA7SUEvQlUsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGtHQUFvQztZQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO2lEQXNDa0IsUUFBUTtZQUNMLFNBQVM7WUFDZixVQUFVO09BdkNkLGVBQWUsQ0ErQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9DRCxJQStDQztTQS9DWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udFNpemU6ICcyNHB4J1xuICB9LFxuICBsaW5lOiB7XG4gICAgdG9wOiAnY2FsYygwLjVlbSAtIDFweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiBgJHsxIC8gM31lbWAsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRyYW5zaXRpb246IGBhbGwgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWAsXG4gICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgIGxlZnQ6ICcwLjI1ZW0nLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSg0NWRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKSdcbiAgICB9LFxuICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgIHJpZ2h0OiAnMC4yNWVtJyxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoLTQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKSdcbiAgICB9XG4gIH0sXG4gIHVwOiB7XG4gICAgJ3tsaW5lfTpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgtNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJ1xuICAgIH0sXG4gICAgJ3tsaW5lfTpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJ1xuICAgIH1cbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWV4cGFuc2lvbi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1pY29uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvbkljb24ge1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF91cCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlFeHBhbnNpb25JY29uLmNvbG9yJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICd7bGluZX0nOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICB9XG4gICAgfSksIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MsIG51bGwsIFNUWUxFUyk7XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXAodmFsOiBib29sZWFuIHwgJycpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMudXApIHtcbiAgICAgIHRoaXMuX3VwID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnVwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHVwKCkge1xuICAgIHJldHVybiB0aGlzLl91cDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMudXAgPSAhdGhpcy51cDtcbiAgfVxufVxuIl19