import { LyTheme2, Platform, LyCommon } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, NgZone, defineInjectable, inject } from '@angular/core';
import { LyRippleService, Ripple, LyRippleModule } from '@alyle/ui/ripple';
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
const styles$1 = theme => ({
    size: {
        width: theme.iconButton.size,
        height: theme.iconButton.size
    }
});
class LyIconButton {
    /**
     * @param {?} _el
     * @param {?} renderer
     * @param {?} bgAndColor
     * @param {?} iconButtonService
     * @param {?} theme
     * @param {?} _ngZone
     * @param {?} _rippleService
     */
    constructor(_el, renderer, bgAndColor, iconButtonService, theme, _ngZone, _rippleService) {
        this._el = _el;
        this.renderer = renderer;
        this.iconButtonService = iconButtonService;
        this.theme = theme;
        this._ngZone = _ngZone;
        this._rippleService = _rippleService;
        this.classes = this.theme.addStyleSheet(styles$1, STYLE_PRIORITY$1);
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
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
    ngAfterViewInit() {
        if (Platform.isBrowser) {
            /** @type {?} */
            const rippleContainer = this._rippleContainer.nativeElement;
            /** @type {?} */
            const triggerElement = this._el.nativeElement;
            this._ripple = new Ripple(this.theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
            this._ripple.setConfig({
                centered: true
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._ripple.removeEvents();
        }
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
    { type: Renderer2 },
    { type: LyCommon, decorators: [{ type: Optional }] },
    { type: LyIconButtonService },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService }
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
                imports: [CommonModule, LyRippleModule],
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

export { LyIconButtonModule, LyIconButton, LyIconButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgb3ZlcmZsb3c6ICdpbmhlcml0JyxcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVJpcHBsZVNlcnZpY2UsIFJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5zZXJ2aWNlJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgc2l6ZToge1xuICAgIHdpZHRoOiB0aGVtZS5pY29uQnV0dG9uLnNpemUsXG4gICAgaGVpZ2h0OiB0aGVtZS5pY29uQnV0dG9uLnNpemVcbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbY2xhc3NOYW1lXT1cImljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudFwiXG4gID48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIDxkaXYgI3JpcHBsZUNvbnRhaW5lciBbY2xhc3NOYW1lXT1cIl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMuY29udGFpbmVyXCI+PC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2l6ZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMudGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3JpcHBsZVNlcnZpY2UuY2xhc3NlcywgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICB0aGlzLl9yaXBwbGUuc2V0Q29uZmlnKHtcbiAgICAgICAgY2VudGVyZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnLi9pY29uLWJ1dHRvbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJY29uQnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlNUWUxFX1BSSU9SSVRZIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtNQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BRW5CLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtRQUNqRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxFQUFFLFNBQVM7UUFDekIsVUFBVSxFQUFFLFNBQVM7UUFDckIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNB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