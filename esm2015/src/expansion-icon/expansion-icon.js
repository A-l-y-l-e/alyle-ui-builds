import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { toBoolean } from '../minimal/is-boolean';
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
let LyExpansionIcon = class LyExpansionIcon {
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(STYLES);
        this._up = false;
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    set color(val) {
        this._colorClass = this._theme.addStyle('LyExpansionIcon.color', (theme) => ({
            '{line}': {
                backgroundColor: theme.colorOf(val)
            }
        }), this._el.nativeElement, this._colorClass, null, STYLES);
    }
    get color() {
        return this._color;
    }
    set up(val) {
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
    get up() {
        return this._up;
    }
    toggle() {
        this.up = !this.up;
    }
};
LyExpansionIcon.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
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
export { LyExpansionIcon };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWljb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZXhwYW5zaW9uLWljb24vZXhwYW5zaW9uLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJO1FBQ25CLE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLGNBQWM7UUFDL0IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsVUFBVSxFQUFFLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUM5RixpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsUUFBUTtZQUNkLG1CQUFtQixFQUFFLGVBQWU7WUFDcEMsU0FBUyxFQUFFLGVBQWU7U0FDM0I7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsUUFBUTtZQUNmLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCO0tBQ0Y7SUFDRCxFQUFFLEVBQUU7UUFDRixzQkFBc0IsRUFBRTtZQUN0QixtQkFBbUIsRUFBRSxnQkFBZ0I7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLG1CQUFtQixFQUFFLGVBQWU7WUFDcEMsU0FBUyxFQUFFLGVBQWU7U0FDM0I7S0FDRjtDQUNGLENBQUMsQ0FBQzs7QUFPSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBb0MxQixZQUNVLE1BQWdCLEVBQ2hCLFNBQW9CLEVBQ3BCLEdBQWU7UUFGZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQXRDaEIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSzdDLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFtQ2xCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFqQ0QsSUFBSSxLQUFLLENBQUMsR0FBVztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRixRQUFRLEVBQUU7Z0JBQ1IsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDLEdBQWlCO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ2xCLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyRTtTQUNGO0lBQ0gsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBVUQsTUFBTTtRQUNKLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFBOztZQVZtQixRQUFRO1lBQ0wsU0FBUztZQUNmLFVBQVU7O0FBOUJ6QjtJQURDLEtBQUssRUFBRTs0Q0FPUDtBQUtEO0lBREMsS0FBSyxFQUFFO3lDQVlQO0FBL0JVLGVBQWU7SUFMM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixrR0FBb0M7UUFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGVBQWUsQ0ErQzNCO1NBL0NZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzFlbScsXG4gICAgaGVpZ2h0OiAnMWVtJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250U2l6ZTogJzI0cHgnXG4gIH0sXG4gIGxpbmU6IHtcbiAgICB0b3A6ICdjYWxjKDAuNWVtIC0gMXB4KScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6IGAkezEgLyAzfWVtYCxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdHJhbnNpdGlvbjogYGFsbCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YCxcbiAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgbGVmdDogJzAuMjVlbScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDQ1ZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJ1xuICAgIH0sXG4gICAgJyY6bGFzdC1vZi10eXBlJzoge1xuICAgICAgcmlnaHQ6ICcwLjI1ZW0nLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgtNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJ1xuICAgIH1cbiAgfSxcbiAgdXA6IHtcbiAgICAne2xpbmV9OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKC00NWRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknXG4gICAgfSxcbiAgICAne2xpbmV9Omxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoNDVkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknXG4gICAgfVxuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZXhwYW5zaW9uLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLWljb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uSWNvbiB7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3VwID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdMeUV4cGFuc2lvbkljb24uY29sb3InLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgJ3tsaW5lfSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgIH1cbiAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcywgbnVsbCwgU1RZTEVTKTtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB1cCh2YWw6IGJvb2xlYW4gfCAnJykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy51cCkge1xuICAgICAgdGhpcy5fdXAgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy51cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy51cCA9ICF0aGlzLnVwO1xuICB9XG59XG4iXX0=