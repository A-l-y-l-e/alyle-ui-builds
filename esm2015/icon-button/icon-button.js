/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import { LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = (theme) => ({
    size: {
        width: theme.iconButton.size,
        height: theme.iconButton.size
    }
});
const ɵ0 = styles;
export class LyIconButtonBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
if (false) {
    /** @type {?} */
    LyIconButtonBase.prototype._theme;
    /** @type {?} */
    LyIconButtonBase.prototype._ngZone;
}
/** @type {?} */
export const LyIconButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyIconButtonBase))))))))));
export class LyIconButton extends LyIconButtonMixinBase {
    /**
     * @param {?} _el
     * @param {?} _rippleService
     * @param {?} renderer
     * @param {?} iconButtonService
     * @param {?} theme
     * @param {?} ngZone
     */
    constructor(_el, _rippleService, renderer, iconButtonService, theme, ngZone) {
        super(theme, ngZone);
        this._el = _el;
        this._rippleService = _rippleService;
        this.renderer = renderer;
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        console.warn('deprecated, instead use `<button ly-button appearance="icon"`>');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this._el.nativeElement, this.iconButtonService.classes.root);
        this.renderer.addClass(this._el.nativeElement, this.classes.size);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeRippleEvents();
    }
}
LyIconButton.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                template: `
  <div [className]="iconButtonService.classes.content"
  ><ng-content></ng-content></div>
  <div #rippleContainer [className]="_rippleService.classes.container"></div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'lyIconButton'
            }] }
];
/** @nocollapse */
LyIconButton.ctorParameters = () => [
    { type: ElementRef },
    { type: LyRippleService },
    { type: Renderer2 },
    { type: LyIconButtonService },
    { type: LyTheme2 },
    { type: NgZone }
];
LyIconButton.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }]
};
if (false) {
    /** @type {?} */
    LyIconButton.prototype.classes;
    /** @type {?} */
    LyIconButton.prototype._rippleContainer;
    /** @type {?} */
    LyIconButton.prototype._el;
    /** @type {?} */
    LyIconButton.prototype._rippleService;
    /** @type {?} */
    LyIconButton.prototype.renderer;
    /** @type {?} */
    LyIconButton.prototype.iconButtonService;
    /** @type {?} */
    LyIconButton.prototype.theme;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFJTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsU0FBUyxFQUNULGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixHQUVsQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFHdEQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFFbkIsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7S0FDOUI7Q0FDRixDQUFDOztBQUVGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLFlBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNwQixDQUFDO0NBQ047OztJQUhHLGtDQUF1Qjs7SUFDdkIsbUNBQXNCOzs7QUFJMUIsTUFBTSxPQUFPLHFCQUFxQixHQUFHLGlCQUFpQixDQUN0RCxPQUFPLENBQ0wsU0FBUyxDQUNQLFVBQVUsQ0FDUixXQUFXLENBQ1QsYUFBYSxDQUNYLGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQ2Qsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFjN0QsTUFBTSxPQUFPLFlBQWEsU0FBUSxxQkFBcUI7Ozs7Ozs7OztJQUdyRCxZQUNTLEdBQWUsRUFDZixjQUErQixFQUM5QixRQUFtQixFQUNwQixpQkFBc0MsRUFDckMsS0FBZSxFQUN2QixNQUFjO1FBRWQsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQVBkLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO1FBQ3JDLFVBQUssR0FBTCxLQUFLLENBQVU7UUFQekIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQVd6RCxPQUFPLENBQUMsSUFBSSxDQUFDLGdFQUFnRSxDQUFDLENBQUM7SUFDakYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsaUVBQWlFO2dCQUMzRSxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFoRUMsVUFBVTtZQVNWLGVBQWU7WUFKZixTQUFTO1lBa0JGLG1CQUFtQjtZQWIxQixRQUFRO1lBVFIsTUFBTTs7OytCQWtFTCxTQUFTLFNBQUMsaUJBQWlCOzs7O0lBRDVCLCtCQUEyRDs7SUFDM0Qsd0NBQTJEOztJQUV6RCwyQkFBc0I7O0lBQ3RCLHNDQUFzQzs7SUFDdEMsZ0NBQTJCOztJQUMzQix5Q0FBNkM7O0lBQzdDLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluRmxhdCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2ljb24tYnV0dG9uLnNlcnZpY2UnO1xuXG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHNpemU6IHtcbiAgICB3aWR0aDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplLFxuICAgIGhlaWdodDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplXG4gIH1cbn0pO1xuXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IEx5SWNvbkJ1dHRvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5GbGF0KFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5SWNvbkJ1dHRvbkJhc2UpKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2NsYXNzTmFtZV09XCJpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnRcIlxuICA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2NsYXNzTmFtZV09XCJfcmlwcGxlU2VydmljZS5jbGFzc2VzLmNvbnRhaW5lclwiPjwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gZXh0ZW5kcyBMeUljb25CdXR0b25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgY29uc29sZS53YXJuKCdkZXByZWNhdGVkLCBpbnN0ZWFkIHVzZSBgPGJ1dHRvbiBseS1idXR0b24gYXBwZWFyYW5jZT1cImljb25cImA+Jyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zaXplKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG5cbiJdfQ==