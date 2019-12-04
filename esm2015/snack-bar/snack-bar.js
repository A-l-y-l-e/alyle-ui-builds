import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LyTheme2, LyOverlay, ThemeVariables, XPosition, YPosition, styleTemplateToString, StyleTemplate, StyleCollection } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
const STYLE_PRIORITY = -2;
const DEFAULT_HORIZONTAL_POSITION = XPosition.after;
const DEFAULT_VERTICAL_POSITION = YPosition.below;
export const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: (className) => `${className}{border-radius:4px;display:flex;justify-content:space-between;align-items:center;margin:8px;padding:0 16px;min-height:48px;min-width:320px;max-width:320px;opacity:0;transition:opacity ${theme.animations.curves.standard} 350ms, transform ${theme.animations.curves.deceleration} 350ms;font-size:${theme.pxToRem(theme.typography.fontSize)};box-sizing:border-box;}${styleTemplateToString(((theme.snackBar
        && theme.snackBar.root) || null), `${className}`)}${className} ${theme.getBreakpoint('XSmall')}{width:calc(100% - 16px);min-width:calc(100% - 16px);}`
});
let LySnackBar = class LySnackBar {
    constructor(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.classes = this._theme.renderStyleSheet(STYLES);
        this.afterDismissed = new EventEmitter();
    }
    ngOnDestroy() {
        this.dismiss();
    }
    open() {
        // close previous snackBar if exist
        const sbrPrev = this._snackBarService._currentSnackBar;
        if (sbrPrev) {
            sbrPrev.dismiss();
        }
        const duration = this.duration;
        const horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
        const verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
        const snackBar = this._overlay.create(this._templateRef, undefined, {
            styles: {
                // this remove previous style
                justifyContent: null
            },
            hasBackdrop: false,
            classes: [
                this.classes.root,
                this._theme.renderStyle(`SnackBar.hp:${horizontalPosition}.vp:${verticalPosition}`, (theme) => {
                    let marginLeft;
                    let left;
                    let marginRight;
                    let right;
                    let transform;
                    let top;
                    let bottom;
                    let hp;
                    if (verticalPosition === YPosition.above) {
                        transform = 'translateY(-180%)';
                        top = 0;
                    }
                    if (verticalPosition === YPosition.below) {
                        transform = 'translateY(180%)';
                        bottom = 0;
                    }
                    if (horizontalPosition === 'center') {
                        marginRight = marginLeft = 'auto';
                        left = right = 0;
                    }
                    else {
                        hp = theme.getDirection(horizontalPosition);
                    }
                    return (className) => `${className}{margin-left:${marginLeft};left:${left};margin-right:${marginRight};right:${right};transform:${transform};top:${top};bottom:${bottom};${hp}:0;}`;
                }, STYLE_PRIORITY)
            ]
        });
        this._theme.requestAnimationFrame(() => {
            const newClass = this._theme.renderStyle('SnackBar:open', () => ((className) => `${className}{opacity:1;transform:translateY(0);}`), STYLE_PRIORITY);
            snackBar.containerElement.classList.add(newClass);
        });
        window.getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
        const sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
        this._snackBarService._currentSnackBar = sbr;
        return sbr;
    }
    /** Dismiss snackBar */
    dismiss() {
        const sbr = this._snackBarService._currentSnackBar;
        if (sbr) {
            sbr.dismissWithAction();
        }
    }
};
LySnackBar.ctorParameters = () => [
    { type: TemplateRef },
    { type: LyTheme2 },
    { type: LyOverlay },
    { type: LySnackBarService }
];
tslib_1.__decorate([
    Input()
], LySnackBar.prototype, "duration", void 0);
tslib_1.__decorate([
    Input()
], LySnackBar.prototype, "horizontalPosition", void 0);
tslib_1.__decorate([
    Input()
], LySnackBar.prototype, "verticalPosition", void 0);
tslib_1.__decorate([
    Output()
], LySnackBar.prototype, "afterDismissed", void 0);
LySnackBar = tslib_1.__decorate([
    Directive({
        selector: 'ng-template[ly-snack-bar]',
        exportAs: 'lySnackBar'
    })
], LySnackBar);
export { LySnackBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxTQUFTLEVBQ1QsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVloRCxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEQsTUFBTSx5QkFBeUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTJDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEUsU0FBUyxFQUFFLGNBQWM7SUFDekIsSUFBSSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLDJMQUEyTCxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUFxQixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLG9CQUFvQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLDJCQUEyQixxQkFBcUIsQ0FBQyxDQUNwYSxDQUFDLEtBQUssQ0FBQyxRQUFRO1dBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFB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RCxVQUFVO0lBSnRCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQztHQUNXLFVBQVUsQ0F1RnRCO1NBdkZZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIEx5T3ZlcmxheSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFN0eWxlQ29sbGVjdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbmFja0JhclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgU25hY2tCYXIgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZVRlbXBsYXRlIHwgU3R5bGVDb2xsZWN0aW9uO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbmFja0JhclZhcmlhYmxlcyB7XG4gIHNuYWNrQmFyPzogTHlTbmFja0JhclRoZW1lO1xufVxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OID0gWFBvc2l0aW9uLmFmdGVyO1xuY29uc3QgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTiA9IFlQb3NpdGlvbi5iZWxvdztcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbmFja0JhclZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JvcmRlci1yYWRpdXM6NHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjhweDtwYWRkaW5nOjAgMTZweDttaW4taGVpZ2h0OjQ4cHg7bWluLXdpZHRoOjMyMHB4O21heC13aWR0aDozMjBweDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDM1MG1zLCB0cmFuc2Zvcm0gJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IDM1MG1zO2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSl9O2JveC1zaXppbmc6Ym9yZGVyLWJveDt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAodGhlbWUuc25hY2tCYXJcbiAgICAgICAgICAmJiB0aGVtZS5zbmFja0Jhci5yb290KSB8fCBudWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSAke3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpfXt3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTttaW4td2lkdGg6Y2FsYygxMDAlIC0gMTZweCk7fWBcbn0pO1xuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyRGlzbWlzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzbmFjayBiYXIgd2FzIGRpc21pc3NlZCB1c2luZyB0aGUgYWN0aW9uIGZuLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbHktc25hY2stYmFyXScsXG4gIGV4cG9ydEFzOiAnbHlTbmFja0Jhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciB8ICdJbmZpbml0eSc7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicgfCBYUG9zaXRpb247XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246IFlQb3NpdGlvbjtcbiAgQE91dHB1dCgpIGFmdGVyRGlzbWlzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kaXNtaXNzKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIC8vIGNsb3NlIHByZXZpb3VzIHNuYWNrQmFyIGlmIGV4aXN0XG4gICAgY29uc3Qgc2JyUHJldiA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnJQcmV2KSB7XG4gICAgICBzYnJQcmV2LmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgY29uc3QgaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5ob3Jpem9udGFsUG9zaXRpb24gfHwgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OO1xuICAgIGNvbnN0IHZlcnRpY2FsUG9zaXRpb24gPSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gfHwgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTjtcblxuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy5fdGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIC8vIHRoaXMgcmVtb3ZlIHByZXZpb3VzIHN0eWxlXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBudWxsXG4gICAgICB9LFxuICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgY2xhc3NlczogW1xuICAgICAgICB0aGlzLmNsYXNzZXMucm9vdCxcbiAgICAgICAgdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoYFNuYWNrQmFyLmhwOiR7aG9yaXpvbnRhbFBvc2l0aW9ufS52cDoke3ZlcnRpY2FsUG9zaXRpb259YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGxldCBtYXJnaW5MZWZ0OiAnYXV0bycgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IGxlZnQ6IDAgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IG1hcmdpblJpZ2h0OiAnYXV0bycgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IHJpZ2h0OiAwIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGxldCB0cmFuc2Zvcm06IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgdG9wOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IGJvdHRvbTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGxldCBocDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTE4MCUpJztcbiAgICAgICAgICAgIHRvcCA9IDA7XG4gICAgICAgICAgfSBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxODAlKSc7XG4gICAgICAgICAgICBib3R0b20gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBtYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgbGVmdCA9IHJpZ2h0ID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHAgPSB0aGVtZS5nZXREaXJlY3Rpb24oaG9yaXpvbnRhbFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tbGVmdDoke21hcmdpbkxlZnR9O2xlZnQ6JHtsZWZ0fTttYXJnaW4tcmlnaHQ6JHttYXJnaW5SaWdodH07cmlnaHQ6JHtyaWdodH07dHJhbnNmb3JtOiR7dHJhbnNmb3JtfTt0b3A6JHt0b3B9O2JvdHRvbToke2JvdHRvbX07JHtocH06MDt9YDtcbiAgICAgICAgfSwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZSgnU25hY2tCYXI6b3BlbicsICgpID0+IChcbiAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9YFxuICAgICAgKSwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ29wYWNpdHknKTtcblxuICAgIGNvbnN0IHNiciA9IG5ldyBMeVNuYWNrQmFyUmVmKHRoaXMuX3NuYWNrQmFyU2VydmljZSwgc25hY2tCYXIsIHRoaXMuYWZ0ZXJEaXNtaXNzZWQsIGR1cmF0aW9uLCB0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBzYnI7XG4gICAgcmV0dXJuIHNicjtcbiAgfVxuXG4gIC8qKiBEaXNtaXNzIHNuYWNrQmFyICovXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc2JyID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNicikge1xuICAgICAgc2JyLmRpc21pc3NXaXRoQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=