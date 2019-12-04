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
    LyExpansionIcon.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyExpansionIcon.prototype, "color", null);
    tslib_1.__decorate([
        Input()
    ], LyExpansionIcon.prototype, "up", null);
    LyExpansionIcon = tslib_1.__decorate([
        Component({
            selector: 'ly-expansion-icon',
            template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], LyExpansionIcon);
    return LyExpansionIcon;
}());
export { LyExpansionIcon };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWljb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZXhwYW5zaW9uLWljb24vZXhwYW5zaW9uLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRCxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFLLENBQUMsR0FBRyxDQUFDLE9BQUk7UUFDbkIsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsY0FBYztRQUMvQixPQUFPLEVBQUUsY0FBYztRQUN2QixVQUFVLEVBQUUsU0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFdBQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBVTtRQUM5RixpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsUUFBUTtZQUNkLG1CQUFtQixFQUFFLGVBQWU7WUFDcEMsU0FBUyxFQUFFLGVBQWU7U0FDM0I7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsUUFBUTtZQUNmLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCO0tBQ0Y7SUFDRCxFQUFFLEVBQUU7UUFDRixzQkFBc0IsRUFBRTtZQUN0QixtQkFBbUIsRUFBRSxnQkFBZ0I7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLG1CQUFtQixFQUFFLGVBQWU7WUFDcEMsU0FBUyxFQUFFLGVBQWU7U0FDM0I7S0FDRjtDQUNGLENBQUMsRUFyQ3dDLENBcUN4QyxDQUFDOztBQU9IO0lBb0NFLHlCQUNVLE1BQWdCLEVBQ2hCLFNBQW9CLEVBQ3BCLEdBQWU7UUFGZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQXRDaEIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSzdDLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFtQ2xCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFqQ0Qsc0JBQUksa0NBQUs7YUFPVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBVEQsVUFBVSxHQUFXO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztnQkFDM0YsUUFBUSxFQUFFO29CQUNSLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDcEM7YUFDRixDQUFDLEVBSjBGLENBSTFGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSwrQkFBRTthQVlOO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7YUFkRCxVQUFPLEdBQWlCO1lBQ3RCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbEU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDckU7YUFDRjtRQUNILENBQUM7OztPQUFBO0lBYUQsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQVRpQixRQUFRO2dCQUNMLFNBQVM7Z0JBQ2YsVUFBVTs7SUE5QnpCO1FBREMsS0FBSyxFQUFFO2dEQU9QO0lBS0Q7UUFEQyxLQUFLLEVBQUU7NkNBWVA7SUEvQlUsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGtHQUFvQztZQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csZUFBZSxDQStDM0I7SUFBRCxzQkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzFlbScsXG4gICAgaGVpZ2h0OiAnMWVtJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250U2l6ZTogJzI0cHgnXG4gIH0sXG4gIGxpbmU6IHtcbiAgICB0b3A6ICdjYWxjKDAuNWVtIC0gMXB4KScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6IGAkezEgLyAzfWVtYCxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdHJhbnNpdGlvbjogYGFsbCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YCxcbiAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgbGVmdDogJzAuMjVlbScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJ1xuICAgIH0sXG4gICAgJyY6bGFzdC1vZi10eXBlJzoge1xuICAgICAgcmlnaHQ6ICcwLjI1ZW0nLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgtNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJ1xuICAgIH1cbiAgfSxcbiAgdXA6IHtcbiAgICAne2xpbmV9OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKC00NWRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknXG4gICAgfSxcbiAgICAne2xpbmV9Omxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknXG4gICAgfVxuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZXhwYW5zaW9uLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLWljb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uSWNvbiB7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3VwID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdMeUV4cGFuc2lvbkljb24uY29sb3InLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgJ3tsaW5lfSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgIH1cbiAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcywgbnVsbCwgU1RZTEVTKTtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB1cCh2YWw6IGJvb2xlYW4gfCAnJykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy51cCkge1xuICAgICAgdGhpcy5fdXAgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy51cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy51cCA9ICF0aGlzLnVwO1xuICB9XG59XG4iXX0=