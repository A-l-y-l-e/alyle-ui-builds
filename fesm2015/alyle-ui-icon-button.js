import { LyTheme2, LyCommon } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, defineInjectable, inject } from '@angular/core';
import { LyRipple, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = ({
    root: {
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        border: 0,
        padding: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        outline: 'none',
        boxSizing: 'border-box',
        color: 'currentColor',
        display: 'inline-flex',
        position: 'relative',
        textDecoration: 'none',
        borderRadius: '50%',
    },
    content: {
        display: 'flex',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        width: 'inherit',
        height: 'inherit',
        overflow: 'inherit',
    }
});
class LyIconButtonService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyIconButtonStatic');
    }
}
LyIconButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyIconButtonService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(LyTheme2)); }, token: LyIconButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles$1 = theme => ({
    size: {
        width: theme.iconButton.size,
        height: theme.iconButton.size
    }
});
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
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles$1, 'lyIconButton');
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.iconButtonService.classes.root);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.size);
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
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCommon, decorators: [{ type: Optional }] },
    { type: LyIconButtonService },
    { type: LyTheme2 }
];
LyIconButton.propDecorators = {
    ripple: [{ type: ViewChild, args: [LyRipple,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LyIconButtonModule, LyIconButton, LyIconButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVRoZW1lLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGJvcmRlcjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgb3ZlcmZsb3c6ICdpbmhlcml0JyxcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5SWNvbkJ1dHRvblN0YXRpYycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHNpemU6IHtcbiAgICB3aWR0aDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplLFxuICAgIGhlaWdodDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJ7eyBpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnQgfX1cIlxuICBseVJpcHBsZVxuICBseVJpcHBsZUNlbnRlcmVkXG4gID5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKEx5UmlwcGxlKSByaXBwbGU6IEx5UmlwcGxlO1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5SWNvbkJ1dHRvbicpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb24sXG4gICAgcHVibGljIGljb25CdXR0b25TZXJ2aWNlOiBMeUljb25CdXR0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2l6ZSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnLi9pY29uLWJ1dHRvbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJY29uQnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtRQUNqRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxFQUFFLFNBQVM7UUFDekIsVUFBVSxFQUFFLFNBQVM7UUFDckIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFLSDs7OztJQUVFLFlBQ1U7UUFBQSxVQUFLLEdBQUwsS0FBSzt1QkFGTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUM7S0FHM0Q7OztZQVBOLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXJDbUIsUUFBUTs7Ozs7Ozs7QUNBNUI7QUFjQSxNQUFNQSxRQUFNLEdBQUcsS0FBSyxLQUFLO0lBQ3ZCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7UUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSTtLQUM5QjtDQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBb0JELFlBQ1MsWUFDQyxVQUNJLFVBQW9CLEVBQ3pCLG1CQUNDO1FBSkQsZUFBVSxHQUFWLFVBQVU7UUFDVCxhQUFRLEdBQVIsUUFBUTtRQUVULHNCQUFpQixHQUFqQixpQkFBaUI7UUFDaEIsVUFBSyxHQUFMLEtBQUs7dUJBTkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUNBLFFBQU0sRUFBRSxjQUFjLENBQUM7UUFReEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUU7OztZQWpDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxpRUFBaUU7Z0JBQzNFLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQWpDQyxVQUFVO1lBSVYsU0FBUztZQUtGLFFBQVEsdUJBK0JaLFFBQVE7WUE5QkosbUJBQW1CO1lBRFQsUUFBUTs7O3FCQTBCeEIsU0FBUyxTQUFDLFFBQVE7Ozs7Ozs7QUNyQ3JCOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9