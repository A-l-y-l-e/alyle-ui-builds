/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import { LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, } from '@alyle/ui';
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
var LyIconButtonBase = /** @class */ (function () {
    function LyIconButtonBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyIconButtonBase;
}());
export { LyIconButtonBase };
if (false) {
    /** @type {?} */
    LyIconButtonBase.prototype._theme;
    /** @type {?} */
    LyIconButtonBase.prototype._ngZone;
}
/** @type {?} */
export var LyIconButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyIconButtonBase))))))))));
var LyIconButton = /** @class */ (function (_super) {
    tslib_1.__extends(LyIconButton, _super);
    function LyIconButton(_el, _rippleService, renderer, iconButtonService, theme, ngZone) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this._el = _el;
        _this._rippleService = _rippleService;
        _this.renderer = renderer;
        _this.iconButtonService = iconButtonService;
        _this.theme = theme;
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        console.warn('deprecated, instead use `<button ly-button appearance="icon"`>');
        return _this;
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
    LyIconButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeRippleEvents();
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
        { type: LyRippleService },
        { type: Renderer2 },
        { type: LyIconButtonService },
        { type: LyTheme2 },
        { type: NgZone }
    ]; };
    LyIconButton.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }]
    };
    return LyIconButton;
}(LyIconButtonMixinBase));
export { LyIconButton };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBSU4sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsZUFBZSxFQUNmLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLFNBQVMsRUFDVCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsR0FFbEIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBR3RELGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBRW5CLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7UUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSTtLQUM5QjtDQUNGLENBQUMsRUFMd0MsQ0FLeEM7O0FBRUY7SUFDRSwwQkFDUyxNQUFnQixFQUNoQixPQUFlO1FBRGYsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3BCLENBQUM7SUFDUCx1QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSEcsa0NBQXVCOztJQUN2QixtQ0FBc0I7OztBQUkxQixNQUFNLEtBQU8scUJBQXFCLEdBQUcsaUJBQWlCLENBQ3RELE9BQU8sQ0FDTCxTQUFTLENBQ1AsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FDZCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3RDtJQVlrQyx3Q0FBcUI7SUFHckQsc0JBQ1MsR0FBZSxFQUNmLGNBQStCLEVBQzlCLFFBQW1CLEVBQ3BCLGlCQUFzQyxFQUNyQyxLQUFlLEVBQ3ZCLE1BQWM7UUFOaEIsWUFRRSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBRXJCO1FBVFEsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG9CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUM5QixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUFDckMsV0FBSyxHQUFMLEtBQUssQ0FBVTtRQVB6QixhQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBV3pELE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0VBQWdFLENBQUMsQ0FBQzs7SUFDakYsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGlFQUFpRTtvQkFDM0UsUUFBUSxFQUFFLHFMQUlUO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBaEVDLFVBQVU7Z0JBU1YsZUFBZTtnQkFKZixTQUFTO2dCQWtCRixtQkFBbUI7Z0JBYjFCLFFBQVE7Z0JBVFIsTUFBTTs7O21DQWtFTCxTQUFTLFNBQUMsaUJBQWlCOztJQXFCOUIsbUJBQUM7Q0FBQSxBQW5DRCxDQVlrQyxxQkFBcUIsR0F1QnREO1NBdkJZLFlBQVk7OztJQUN2QiwrQkFBMkQ7O0lBQzNELHdDQUEyRDs7SUFFekQsMkJBQXNCOztJQUN0QixzQ0FBc0M7O0lBQ3RDLGdDQUEyQjs7SUFDM0IseUNBQTZDOztJQUM3Qyw2QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbkZsYXQsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5zZXJ2aWNlJztcblxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBzaXplOiB7XG4gICAgd2lkdGg6IHRoZW1lLmljb25CdXR0b24uc2l6ZSxcbiAgICBoZWlnaHQ6IHRoZW1lLmljb25CdXR0b24uc2l6ZVxuICB9XG59KTtcblxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeUljb25CdXR0b25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluRmxhdChcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUljb25CdXR0b25CYXNlKSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IFtjbGFzc05hbWVdPVwiaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50XCJcbiAgPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgPGRpdiAjcmlwcGxlQ29udGFpbmVyIFtjbGFzc05hbWVdPVwiX3JpcHBsZVNlcnZpY2UuY2xhc3Nlcy5jb250YWluZXJcIj48L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGV4dGVuZHMgTHlJY29uQnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIGNvbnNvbGUud2FybignZGVwcmVjYXRlZCwgaW5zdGVhZCB1c2UgYDxidXR0b24gbHktYnV0dG9uIGFwcGVhcmFuY2U9XCJpY29uXCJgPicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2l6ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuXG4iXX0=