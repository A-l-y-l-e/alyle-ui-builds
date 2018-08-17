import { CoreTheme, LyCommon, LyTheme2 } from '@alyle/ui';
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
    { type: LyCommon, decorators: [{ type: Optional },] },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyIconButtonModule, LyIconButton, LyIconButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB7XG4gICAgaG9zdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnaWNuQnRuJywgeycnOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9XG4gICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC1tb3otdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbXMtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGB1c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICBgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtgICtcbiAgICAgIGBib3JkZXI6MDtgICtcbiAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICBgb3ZlcmZsb3c6aGlkZGVuO2AgK1xuICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgYG91dGxpbmU6bm9uZTtgICtcbiAgICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YCArXG4gICAgICBgY29sb3I6Y3VycmVudENvbG9yO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgdGV4dC1kZWNvcmF0aW9uOiBub25lO2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6NTAlO2A7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfX0pLFxuICAgIGNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bkNudG50JywgeycnOiAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICBgd2lkdGg6aW5oZXJpdDtgICtcbiAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgIGBvdmVyZmxvdzppbmhlcml0O2BcbiAgICApfSlcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUsIEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2ljb24tYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJ7eyBpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnQgfX1cIlxuICBseVJpcHBsZVxuICBseVJpcHBsZUNlbnRlcmVkXG4gID5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pY29uU3R5bGU6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJ9O1xuICBAVmlld0NoaWxkKEx5UmlwcGxlKSByaXBwbGU6IEx5UmlwcGxlO1xuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoJ2ljb25CdXR0b25Db25maWcnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOiR7dGhpcy50aGVtZS5jb25maWcuaWNvbkJ1dHRvbi5zaXplfTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiR7dGhpcy50aGVtZS5jb25maWcuaWNvbkJ1dHRvbi5zaXplfTtgXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUNvbW1vbixcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmhvc3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jb25maWcpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJy4vaWNvbi1idXR0b24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQXdDRSxZQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7dUJBbENUO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRTtvQkFDN0MsdUJBQU0sS0FBSyxHQUNYLDJCQUEyQjt3QkFDM0Isd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsK0NBQStDO3dCQUMvQywwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLG9CQUFvQixDQUFDO29CQUNyQixPQUFPLEtBQUssQ0FBQztpQkFDZCxFQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQ3JELGVBQWU7b0JBQ2YsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixtQkFBbUIsQ0FDcEIsRUFBQyxDQUFDO1NBQ0o7S0FHSTs7O1lBdkNOLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFNBQVM7Ozs7Ozs7O0FDQWxCOzs7Ozs7OztJQXNERSxZQUNTLFlBQ0MsVUFDWSxZQUNiLG1CQUNDO1FBSkQsZUFBVSxHQUFWLFVBQVU7UUFDVCxhQUFRLEdBQVIsUUFBUTtRQUNJLGVBQVUsR0FBVixVQUFVO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDaEIsVUFBSyxHQUFMLEtBQUs7UUFFYixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7O0lBcEJELElBQUksT0FBTztRQUNULE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ2hELEVBQUUsRUFBRSxPQUNGLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksSUFBSSxHQUFHO29CQUM3QyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxlQUFZLElBQUksR0FBRyxDQUMvQzthQUNGLENBQUM7U0FDSCxDQUFDO0tBQ0g7Ozs7SUFhRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVFOzs7WUEzQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsaUVBQWlFO2dCQUMzRSxRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFyQ0MsVUFBVTtZQWNWLFNBQVM7WUFNUSxRQUFRLHVCQWtDdEIsUUFBUTtZQWpDSixtQkFBbUI7WUFEQyxRQUFROzs7dUJBb0JsQyxTQUFTLFNBQUMsUUFBUTs7Ozs7OztBQzNDckI7OztZQU1DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQzthQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=