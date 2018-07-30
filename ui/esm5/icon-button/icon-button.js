/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { LyRipple } from '@alyle/ui/ripple';
import { LyBgColorAndRaised, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
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
export { LyIconButton };
function LyIconButton_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyIconButton.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyIconButton.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyIconButton.propDecorators;
    /** @type {?} */
    LyIconButton.prototype._iconStyle;
    /** @type {?} */
    LyIconButton.prototype.ripple;
    /** @type {?} */
    LyIconButton.prototype.elementRef;
    /** @type {?} */
    LyIconButton.prototype.renderer;
    /** @type {?} */
    LyIconButton.prototype.bgAndColor;
    /** @type {?} */
    LyIconButton.prototype.iconButtonService;
    /** @type {?} */
    LyIconButton.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBT1YsU0FBUyxFQU1ULFFBQVEsRUFDUixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBa0IsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUQsT0FBTyxFQUFZLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUE4QjFELHNCQUNTLFlBQ0MsVUFDWSxZQUNiLG1CQUNDO1FBSkQsZUFBVSxHQUFWLFVBQVU7UUFDVCxhQUFRLEdBQVIsUUFBUTtRQUNJLGVBQVUsR0FBVixVQUFVO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDaEIsVUFBSyxHQUFMLEtBQUs7UUFFYixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtLQUNGO0lBcEJELHNCQUFJLGlDQUFPOzs7O1FBQVg7WUFBQSxpQkFTQztZQVJDLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFO29CQUNoRCxFQUFFLEVBQUU7d0JBQU0sT0FBQSxDQUNSLFdBQVMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksSUFBSSxNQUFHOzZCQUM3QyxZQUFVLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxlQUFZLElBQUksTUFBRyxDQUFBLENBQy9DO29CQUhTLENBR1Q7aUJBQ0YsQ0FBQzthQUNILENBQUM7U0FDSDs7O09BQUE7Ozs7SUFhRCwrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUU7O2dCQTNDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxpRUFBaUU7b0JBQzNFLFFBQVEsRUFBRSw4SUFPVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQXJDQyxVQUFVO2dCQWNWLFNBQVM7Z0JBTVEsa0JBQWtCLHVCQWtDaEMsUUFBUTtnQkFqQ0osbUJBQW1CO2dCQURXLFFBQVE7OzsyQkFvQjVDLFNBQVMsU0FBQyxRQUFROzt1QkEzQ3JCOztTQXlDYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUsIEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlCZ0NvbG9yQW5kUmFpc2VkLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwie3sgaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50IH19XCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaWNvblN0eWxlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyfTtcbiAgQFZpZXdDaGlsZChMeVJpcHBsZSkgcmlwcGxlOiBMeVJpcHBsZTtcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlKCdpY29uQnV0dG9uQ29uZmlnJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YCArXG4gICAgICAgICAgYGhlaWdodDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YFxuICAgICAgICApXG4gICAgICB9KVxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuaG9zdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNvbmZpZyk7XG4gIH1cbn1cblxuIl19