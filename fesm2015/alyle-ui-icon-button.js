import { LyTheme2, mixinStyleUpdater, mixinBg, mixinFlat, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyRippleService } from '@alyle/ui';
import { Injectable, NgModule, ChangeDetectionStrategy, Component, ElementRef, NgZone, Renderer2, ViewChild, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
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
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
}
LyIconButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyIconButtonService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(LyTheme2)); }, token: LyIconButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY$1 = -2;
/** @type {?} */
const styles$1 = (theme) => ({
    size: {
        width: theme.iconButton.size,
        height: theme.iconButton.size
    }
});
class LyIconButtonBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @type {?} */
const LyIconButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyIconButtonBase))))))))));
class LyIconButton extends LyIconButtonMixinBase {
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
        this.classes = this.theme.addStyleSheet(styles$1, STYLE_PRIORITY$1);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyIconButtonModule {
}
LyIconButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [LyIconButton],
                declarations: [LyIconButton],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyIconButtonModule, LyIconButtonBase, LyIconButtonMixinBase, LyIconButton, LyIconButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgb3ZlcmZsb3c6ICdpbmhlcml0JyxcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5GbGF0LFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgc2l6ZToge1xuICAgIHdpZHRoOiB0aGVtZS5pY29uQnV0dG9uLnNpemUsXG4gICAgaGVpZ2h0OiB0aGVtZS5pY29uQnV0dG9uLnNpemVcbiAgfVxufSk7XG5cbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlJY29uQnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlJY29uQnV0dG9uQmFzZSkpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbY2xhc3NOYW1lXT1cImljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudFwiXG4gID48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIDxkaXYgI3JpcHBsZUNvbnRhaW5lciBbY2xhc3NOYW1lXT1cIl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMuY29udGFpbmVyXCI+PC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBleHRlbmRzIEx5SWNvbkJ1dHRvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGljb25CdXR0b25TZXJ2aWNlOiBMeUljb25CdXR0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICBjb25zb2xlLndhcm4oJ2RlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIGA8YnV0dG9uIGx5LWJ1dHRvbiBhcHBlYXJhbmNlPVwiaWNvblwiYD4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNpemUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICcuL2ljb24tYnV0dG9uJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJTVFlMRV9QUklPUklUWSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtNQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BRW5CLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtRQUNqRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxFQUFFLFNBQVM7UUFDekIsVUFBVSxF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