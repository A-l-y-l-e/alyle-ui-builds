/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { LyRipple } from '@alyle/ui/ripple';
import { LyCommon, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = function (theme) { return ({
    size: {
        width: theme.iconButton.size,
        height: theme.iconButton.size
    }
}); };
var ɵ0 = styles;
var LyIconButton = /** @class */ (function () {
    function LyIconButton(elementRef, renderer, bgAndColor, iconButtonService, theme) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyIconButton', STYLE_PRIORITY);
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    /**
     * @return {?}
     */
    LyIconButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, this.iconButtonService.classes.root);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.size);
    };
    LyIconButton.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                    template: "\n  <div class=\"{{ iconButtonService.classes.content }}\"\n  lyRipple\n  lyRippleCentered\n  >\n    <ng-content></ng-content>\n  </div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'lyIconButton'
                },] },
    ];
    /** @nocollapse */
    LyIconButton.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCommon, decorators: [{ type: Optional }] },
        { type: LyIconButtonService },
        { type: LyTheme2 }
    ]; };
    LyIconButton.propDecorators = {
        ripple: [{ type: ViewChild, args: [LyRipple,] }]
    };
    return LyIconButton;
}());
export { LyIconButton };
if (false) {
    /** @type {?} */
    LyIconButton.prototype.ripple;
    /** @type {?} */
    LyIconButton.prototype.classes;
    /** @type {?} */
    LyIconButton.prototype.elementRef;
    /** @type {?} */
    LyIconButton.prototype.renderer;
    /** @type {?} */
    LyIconButton.prototype.iconButtonService;
    /** @type {?} */
    LyIconButton.prototype.theme;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFNUQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQU0sTUFBTSxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN2QixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7S0FDOUI7Q0FDRixDQUFDLEVBTHNCLENBS3RCLENBQUM7OztJQW9CRCxzQkFDUyxZQUNDLFVBQ0ksVUFBb0IsRUFDekIsbUJBQ0M7UUFKRCxlQUFVLEdBQVYsVUFBVTtRQUNULGFBQVEsR0FBUixRQUFRO1FBRVQsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNoQixVQUFLLEdBQUwsS0FBSzt1QkFOTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztRQVF4RSxJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFFOztnQkFqQ0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUVBQWlFO29CQUMzRSxRQUFRLEVBQUUsOElBT1Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFuQ0MsVUFBVTtnQkFJVixTQUFTO2dCQUtGLFFBQVEsdUJBaUNaLFFBQVE7Z0JBaENKLG1CQUFtQjtnQkFEVCxRQUFROzs7eUJBNEJ4QixTQUFTLFNBQUMsUUFBUTs7dUJBdkNyQjs7U0FzQ2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2ljb24tYnV0dG9uLnNlcnZpY2UnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBzaXplOiB7XG4gICAgd2lkdGg6IHRoZW1lLmljb25CdXR0b24uc2l6ZSxcbiAgICBoZWlnaHQ6IHRoZW1lLmljb25CdXR0b24uc2l6ZVxuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwie3sgaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50IH19XCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChMeVJpcHBsZSkgcmlwcGxlOiBMeVJpcHBsZTtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUljb25CdXR0b24nLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vbixcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zaXplKTtcbiAgfVxufVxuXG4iXX0=