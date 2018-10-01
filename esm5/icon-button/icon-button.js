/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { LyRippleService, Ripple } from '@alyle/ui/ripple';
import { LyCommon, LyTheme2, Platform } from '@alyle/ui';
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
    function LyIconButton(_el, renderer, bgAndColor, iconButtonService, theme, _ngZone, _rippleService) {
        this._el = _el;
        this.renderer = renderer;
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        this._ngZone = _ngZone;
        this._rippleService = _rippleService;
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
        this.renderer.addClass(this._el.nativeElement, this.iconButtonService.classes.root);
        this.renderer.addClass(this._el.nativeElement, this.classes.size);
    };
    /**
     * @return {?}
     */
    LyIconButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            /** @type {?} */
            var rippleContainer = this._rippleContainer.nativeElement;
            /** @type {?} */
            var triggerElement = this._el.nativeElement;
            this._ripple = new Ripple(this.theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
            this._ripple.setConfig({
                centered: true
            });
        }
    };
    /**
     * @return {?}
     */
    LyIconButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this._ripple.removeEvents();
        }
    };
    LyIconButton.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                    template: "\n  <div [className]=\"iconButtonService.classes.content\"\n  ><ng-content></ng-content></div>\n  <div #rippleContainer [className]=\"_rippleService.classes.container\"></div>\n  ",
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
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService }
    ]; };
    LyIconButton.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }]
    };
    return LyIconButton;
}());
export { LyIconButton };
if (false) {
    /** @type {?} */
    LyIconButton.prototype.classes;
    /** @type {?} */
    LyIconButton.prototype._ripple;
    /** @type {?} */
    LyIconButton.prototype._rippleContainer;
    /** @type {?} */
    LyIconButton.prototype._el;
    /** @type {?} */
    LyIconButton.prototype.renderer;
    /** @type {?} */
    LyIconButton.prototype.iconButtonService;
    /** @type {?} */
    LyIconButton.prototype.theme;
    /** @type {?} */
    LyIconButton.prototype._ngZone;
    /** @type {?} */
    LyIconButton.prototype._rippleService;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFNUQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQU0sTUFBTSxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN2QixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7S0FDOUI7Q0FDRixDQUFDLEVBTHNCLENBS3RCLENBQUM7OztJQWtCRCxzQkFDUyxLQUNDLFVBQ0ksVUFBb0IsRUFDekIsbUJBQ0MsT0FDQSxTQUNEO1FBTkEsUUFBRyxHQUFILEdBQUc7UUFDRixhQUFRLEdBQVIsUUFBUTtRQUVULHNCQUFpQixHQUFqQixpQkFBaUI7UUFDaEIsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNSLG1CQUFjLEdBQWQsY0FBYzt1QkFWYixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztRQVl4RSxJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25FOzs7O0lBRUQsc0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztZQUN0QixJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztZQUM1RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3pILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNyQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM3QjtLQUNGOztnQkFsREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUVBQWlFO29CQUMzRSxRQUFRLEVBQUUscUxBSVQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFuQ0MsVUFBVTtnQkFJVixTQUFTO2dCQVFGLFFBQVEsdUJBK0JaLFFBQVE7Z0JBOUJKLG1CQUFtQjtnQkFEVCxRQUFRO2dCQUx6QixNQUFNO2dCQUlDLGVBQWU7OzttQ0E0QnJCLFNBQVMsU0FBQyxpQkFBaUI7O3VCQXpDOUI7O1NBc0NhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5UmlwcGxlU2VydmljZSwgUmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiwgTHlUaGVtZTIsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2ljb24tYnV0dG9uLnNlcnZpY2UnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBzaXplOiB7XG4gICAgd2lkdGg6IHRoZW1lLmljb25CdXR0b24uc2l6ZSxcbiAgICBoZWlnaHQ6IHRoZW1lLmljb25CdXR0b24uc2l6ZVxuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IFtjbGFzc05hbWVdPVwiaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50XCJcbiAgPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgPGRpdiAjcmlwcGxlQ29udGFpbmVyIFtjbGFzc05hbWVdPVwiX3JpcHBsZVNlcnZpY2UuY2xhc3Nlcy5jb250YWluZXJcIj48L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5SWNvbkJ1dHRvbicsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2l6ZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMudGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3JpcHBsZVNlcnZpY2UuY2xhc3NlcywgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICB0aGlzLl9yaXBwbGUuc2V0Q29uZmlnKHtcbiAgICAgICAgY2VudGVyZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cbn1cblxuIl19