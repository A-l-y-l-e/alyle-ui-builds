/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { LyRipple } from '@alyle/ui/ripple';
import { LyCommon, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
export class LyIconButton {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vIiwic291cmNlcyI6WyJpY29uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBT1YsU0FBUyxFQU1ULFFBQVEsRUFDUixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBa0IsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUQsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFpQjVELE1BQU07Ozs7Ozs7O0lBYUosWUFDUyxZQUNDLFVBQ1ksWUFDYixtQkFDQztRQUpELGVBQVUsR0FBVixVQUFVO1FBQ1QsYUFBUSxHQUFSLFFBQVE7UUFDSSxlQUFVLEdBQVYsVUFBVTtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2hCLFVBQUssR0FBTCxLQUFLO1FBRWIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7S0FDRjs7OztJQXBCRCxJQUFJLE9BQU87UUFDVCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dCQUNoRCxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FDUixTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxlQUFZLElBQUksR0FBRztvQkFDN0MsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sZUFBWSxJQUFJLEdBQUcsQ0FDL0M7YUFDRixDQUFDO1NBQ0gsQ0FBQztLQUNIOzs7O0lBYUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1RTs7O1lBM0NGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGlFQUFpRTtnQkFDM0UsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBckNDLFVBQVU7WUFjVixTQUFTO1lBTVEsUUFBUSx1QkFrQ3RCLFFBQVE7WUFqQ0osbUJBQW1CO1lBREMsUUFBUTs7O3VCQW9CbEMsU0FBUyxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIGlzRGV2TW9kZSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSwgTHlSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInt7IGljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudCB9fVwiXG4gIGx5UmlwcGxlXG4gIGx5UmlwcGxlQ2VudGVyZWRcbiAgPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2ljb25TdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcn07XG4gIEBWaWV3Q2hpbGQoTHlSaXBwbGUpIHJpcHBsZTogTHlSaXBwbGU7XG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZSgnaWNvbkJ1dHRvbkNvbmZpZycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2AgK1xuICAgICAgICAgIGBoZWlnaHQ6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2BcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5Q29tbW9uLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuaG9zdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNvbmZpZyk7XG4gIH1cbn1cblxuIl19