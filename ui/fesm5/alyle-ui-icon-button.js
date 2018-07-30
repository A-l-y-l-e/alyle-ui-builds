import { CoreTheme, LyBgColorAndRaised, LyTheme2 } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, defineInjectable, inject } from '@angular/core';
import { LyRipple, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyIconButtonService = /** @class */ (function () {
    function LyIconButtonService(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            host: this.coreTheme.setUpStyle('icnBtn', { '': function () {
                    var /** @type {?} */ style = "-webkit-user-select:none;" +
                        "-moz-user-select:none;" +
                        "-ms-user-select:none;" +
                        "user-select:none;" +
                        "-webkit-tap-highlight-color:rgba(0, 0, 0, 0);" +
                        "justify-content: center;" +
                        "align-items: center;" +
                        "background:transparent;" +
                        "border:0;" +
                        "padding:0;" +
                        "overflow:hidden;" +
                        "cursor:pointer;" +
                        "outline:none;" +
                        "box-sizing:border-box;" +
                        "color:currentColor;" +
                        "display:inline-flex;" +
                        "position:relative;" +
                        "text-decoration: none;" +
                        "border-radius:50%;";
                    return style;
                } }),
            content: this.coreTheme.setUpStyle('icnBtnCntnt', { '': function () {
                    return ("display:flex;" +
                        "justify-content:inherit;" +
                        "align-items:inherit;" +
                        "width:inherit;" +
                        "height:inherit;" +
                        "overflow:inherit;");
                } })
        };
    }
    LyIconButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyIconButtonService.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });
    return LyIconButtonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyIconButton = /** @class */ (function () {
    function LyIconButton(elementRef, renderer, bgAndColor, iconButtonService, theme) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.bgAndColor = bgAndColor;
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    Object.defineProperty(LyIconButton.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return {
                config: this.theme.setUpStyle('iconButtonConfig', {
                    '': function () {
                        return ("width:" + _this.theme.config["iconButton"].size + ";" +
                            ("height:" + _this.theme.config["iconButton"].size + ";"));
                    }
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyIconButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, this.iconButtonService.classes.host);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.config);
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
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
        { type: LyIconButtonService, },
        { type: LyTheme2, },
    ]; };
    LyIconButton.propDecorators = {
        "ripple": [{ type: ViewChild, args: [LyRipple,] },],
    };
    return LyIconButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyIconButtonModule = /** @class */ (function () {
    function LyIconButtonModule() {
    }
    LyIconButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyRippleModule],
                    exports: [LyIconButton],
                    declarations: [LyIconButton],
                },] },
    ];
    return LyIconButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyIconButtonModule, LyIconButton, LyIconButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB7XG4gICAgaG9zdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnaWNuQnRuJywgeycnOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9XG4gICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC1tb3otdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbXMtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGB1c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICBgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtgICtcbiAgICAgIGBib3JkZXI6MDtgICtcbiAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICBgb3ZlcmZsb3c6aGlkZGVuO2AgK1xuICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgYG91dGxpbmU6bm9uZTtgICtcbiAgICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YCArXG4gICAgICBgY29sb3I6Y3VycmVudENvbG9yO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgdGV4dC1kZWNvcmF0aW9uOiBub25lO2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6NTAlO2A7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfX0pLFxuICAgIGNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bkNudG50JywgeycnOiAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICBgd2lkdGg6aW5oZXJpdDtgICtcbiAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgIGBvdmVyZmxvdzppbmhlcml0O2BcbiAgICApfSlcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUsIEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlCZ0NvbG9yQW5kUmFpc2VkLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwie3sgaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50IH19XCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaWNvblN0eWxlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyfTtcbiAgQFZpZXdDaGlsZChMeVJpcHBsZSkgcmlwcGxlOiBMeVJpcHBsZTtcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlKCdpY29uQnV0dG9uQ29uZmlnJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YCArXG4gICAgICAgICAgYGhlaWdodDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YFxuICAgICAgICApXG4gICAgICB9KVxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuaG9zdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNvbmZpZyk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnLi9pY29uLWJ1dHRvbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJY29uQnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBd0NFLDZCQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7dUJBbENUO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRTtvQkFDN0MscUJBQU0sS0FBSyxHQUNYLDJCQUEyQjt3QkFDM0Isd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsK0NBQStDO3dCQUMvQywwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLG9CQUFvQixDQUFDO29CQUNyQixPQUFPLEtBQUssQ0FBQztpQkFDZCxFQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUMsRUFBRSxFQUFFO29CQUFNLFFBQzNELGVBQWU7d0JBQ2YsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7aUJBQ3BCLEVBQUMsQ0FBQztTQUNKO0tBR0k7O2dCQXZDTixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLFNBQVM7Ozs4QkFBbEI7Ozs7Ozs7QUNBQTtJQXNERSxzQkFDUyxZQUNDLFVBQ1ksWUFDYixtQkFDQztRQUpELGVBQVUsR0FBVixVQUFVO1FBQ1QsYUFBUSxHQUFSLFFBQVE7UUFDSSxlQUFVLEdBQVYsVUFBVTtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2hCLFVBQUssR0FBTCxLQUFLO1FBRWIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7S0FDRjtJQXBCRCxzQkFBSSxpQ0FBTzs7OztRQUFYO1lBQUEsaUJBU0M7WUFSQyxPQUFPO2dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDaEQsRUFBRSxFQUFFO3dCQUFNLFFBQ1IsV0FBUyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sZUFBWSxJQUFJLE1BQUc7NkJBQzdDLFlBQVUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksSUFBSSxNQUFHLENBQUE7cUJBQy9DO2lCQUNGLENBQUM7YUFDSCxDQUFDO1NBQ0g7OztPQUFBOzs7O0lBYUQsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVFOztnQkEzQ0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUVBQWlFO29CQUMzRSxRQUFRLEVBQUUsOElBT1Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFyQ0MsVUFBVTtnQkFjVixTQUFTO2dCQU1RLGtCQUFrQix1QkFrQ2hDLFFBQVE7Z0JBakNKLG1CQUFtQjtnQkFEVyxRQUFROzs7MkJBb0I1QyxTQUFTLFNBQUMsUUFBUTs7dUJBM0NyQjs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDN0I7OzZCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=