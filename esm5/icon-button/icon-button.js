/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
                }] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFFdEQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFFbkIsTUFBTSxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN2QixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7S0FDOUI7Q0FDRixDQUFDLEVBTHNCLENBS3RCOztBQUVGO0lBZ0JFLHNCQUNTLEdBQWUsRUFDZCxRQUFtQixFQUNmLFVBQW9CLEVBQ3pCLGlCQUFzQyxFQUNyQyxLQUFlLEVBQ2YsT0FBZSxFQUNoQixjQUErQjtRQU4vQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUVwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO1FBQ3JDLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQVZ4QyxZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBWXpELElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsc0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztnQkFDaEIsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhOztnQkFDckQsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtZQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3pILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNyQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGlFQUFpRTtvQkFDM0UsUUFBUSxFQUFFLHFMQUlUO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBbkNDLFVBQVU7Z0JBSVYsU0FBUztnQkFRRixRQUFRLHVCQStCWixRQUFRO2dCQTlCSixtQkFBbUI7Z0JBRFQsUUFBUTtnQkFMekIsTUFBTTtnQkFJQyxlQUFlOzs7bUNBNEJyQixTQUFTLFNBQUMsaUJBQWlCOztJQW9DOUIsbUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQXZDWSxZQUFZOzs7SUFDdkIsK0JBQTJEOztJQUMzRCwrQkFBd0I7O0lBQ3hCLHdDQUEyRDs7SUFFekQsMkJBQXNCOztJQUN0QixnQ0FBMkI7O0lBRTNCLHlDQUE2Qzs7SUFDN0MsNkJBQXVCOztJQUN2QiwrQkFBdUI7O0lBQ3ZCLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlclZpZXdJbml0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlSaXBwbGVTZXJ2aWNlLCBSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5Q29tbW9uLCBMeVRoZW1lMiwgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHNpemU6IHtcbiAgICB3aWR0aDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplLFxuICAgIGhlaWdodDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2NsYXNzTmFtZV09XCJpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnRcIlxuICA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2NsYXNzTmFtZV09XCJfcmlwcGxlU2VydmljZS5jbGFzc2VzLmNvbnRhaW5lclwiPjwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vbixcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNpemUpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLnRoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgdGhpcy5fcmlwcGxlLnNldENvbmZpZyh7XG4gICAgICAgIGNlbnRlcmVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==