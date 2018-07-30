import { CoreTheme, LyBgColorAndRaised, LyTheme2 } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, defineInjectable, inject } from '@angular/core';
import { LyRipple, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyIconButtonService {
    /**
     * @param {?} coreTheme
     */
    constructor(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            host: this.coreTheme.setUpStyle('icnBtn', { '': () => {
                    const /** @type {?} */ style = `-webkit-user-select:none;` +
                        `-moz-user-select:none;` +
                        `-ms-user-select:none;` +
                        `user-select:none;` +
                        `-webkit-tap-highlight-color:rgba(0, 0, 0, 0);` +
                        `justify-content: center;` +
                        `align-items: center;` +
                        `background:transparent;` +
                        `border:0;` +
                        `padding:0;` +
                        `overflow:hidden;` +
                        `cursor:pointer;` +
                        `outline:none;` +
                        `box-sizing:border-box;` +
                        `color:currentColor;` +
                        `display:inline-flex;` +
                        `position:relative;` +
                        `text-decoration: none;` +
                        `border-radius:50%;`;
                    return style;
                } }),
            content: this.coreTheme.setUpStyle('icnBtnCntnt', { '': () => (`display:flex;` +
                    `justify-content:inherit;` +
                    `align-items:inherit;` +
                    `width:inherit;` +
                    `height:inherit;` +
                    `overflow:inherit;`) })
        };
    }
}
LyIconButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyIconButtonService.ctorParameters = () => [
    { type: CoreTheme, },
];
/** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyIconButton {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} bgAndColor
     * @param {?} iconButtonService
     * @param {?} theme
     */
    constructor(elementRef, renderer, bgAndColor, iconButtonService, theme) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.bgAndColor = bgAndColor;
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    /**
     * @return {?}
     */
    get classes() {
        return {
            config: this.theme.setUpStyle('iconButtonConfig', {
                '': () => (`width:${this.theme.config["iconButton"].size};` +
                    `height:${this.theme.config["iconButton"].size};`)
            })
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.iconButtonService.classes.host);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.config);
    }
}
LyIconButton.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                template: `
  <div class="{{ iconButtonService.classes.content }}"
  lyRipple
  lyRippleCentered
  >
    <ng-content></ng-content>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'lyIconButton'
            },] },
];
/** @nocollapse */
LyIconButton.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
    { type: LyIconButtonService, },
    { type: LyTheme2, },
];
LyIconButton.propDecorators = {
    "ripple": [{ type: ViewChild, args: [LyRipple,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyIconButtonModule {
}
LyIconButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyRippleModule],
                exports: [LyIconButton],
                declarations: [LyIconButton],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyIconButtonModule, LyIconButton, LyIconButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB7XG4gICAgaG9zdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnaWNuQnRuJywgeycnOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9XG4gICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC1tb3otdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbXMtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGB1c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICBgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtgICtcbiAgICAgIGBib3JkZXI6MDtgICtcbiAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICBgb3ZlcmZsb3c6aGlkZGVuO2AgK1xuICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgYG91dGxpbmU6bm9uZTtgICtcbiAgICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YCArXG4gICAgICBgY29sb3I6Y3VycmVudENvbG9yO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgdGV4dC1kZWNvcmF0aW9uOiBub25lO2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6NTAlO2A7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfX0pLFxuICAgIGNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bkNudG50JywgeycnOiAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICBgd2lkdGg6aW5oZXJpdDtgICtcbiAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgIGBvdmVyZmxvdzppbmhlcml0O2BcbiAgICApfSlcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUsIEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlCZ0NvbG9yQW5kUmFpc2VkLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwie3sgaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50IH19XCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaWNvblN0eWxlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyfTtcbiAgQFZpZXdDaGlsZChMeVJpcHBsZSkgcmlwcGxlOiBMeVJpcHBsZTtcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlKCdpY29uQnV0dG9uQ29uZmlnJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YCArXG4gICAgICAgICAgYGhlaWdodDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YFxuICAgICAgICApXG4gICAgICB9KVxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuaG9zdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNvbmZpZyk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnLi9pY29uLWJ1dHRvbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJY29uQnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0lBd0NFLFlBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkFsQ1Q7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxFQUFFO29CQUM3Qyx1QkFBTSxLQUFLLEdBQ1gsMkJBQTJCO3dCQUMzQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQiwrQ0FBK0M7d0JBQy9DLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CLENBQUM7b0JBQ3JCLE9BQU8sS0FBSyxDQUFDO2lCQUNkLEVBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUUsT0FDckQsZUFBZTtvQkFDZiwwQkFBMEI7b0JBQzFCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLG1CQUFtQixDQUNwQixFQUFDLENBQUM7U0FDSjtLQUdJOzs7WUF2Q04sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsU0FBUzs7Ozs7Ozs7QUNBbEI7Ozs7Ozs7O0lBc0RFLFlBQ1MsWUFDQyxVQUNZLFlBQ2IsbUJBQ0M7UUFKRCxlQUFVLEdBQVYsVUFBVTtRQUNULGFBQVEsR0FBUixRQUFRO1FBQ0ksZUFBVSxHQUFWLFVBQVU7UUFDdkIsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNoQixVQUFLLEdBQUwsS0FBSztRQUViLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7SUFwQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQkFDaEQsRUFBRSxFQUFFLE9BQ0YsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sZUFBWSxJQUFJLEdBQUc7b0JBQzdDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksSUFBSSxHQUFHLENBQy9DO2FBQ0YsQ0FBQztTQUNILENBQUM7S0FDSDs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUU7OztZQTNDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxpRUFBaUU7Z0JBQzNFLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQXJDQyxVQUFVO1lBY1YsU0FBUztZQU1RLGtCQUFrQix1QkFrQ2hDLFFBQVE7WUFqQ0osbUJBQW1CO1lBRFcsUUFBUTs7O3VCQW9CNUMsU0FBUyxTQUFDLFFBQVE7Ozs7Ozs7QUMzQ3JCOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDN0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==