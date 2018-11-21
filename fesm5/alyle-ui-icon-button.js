import { LyTheme2, mixinStyleUpdater, mixinBg, mixinFlat, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyRippleService } from '@alyle/ui';
import { Injectable, NgModule, defineInjectable, inject, Component, ChangeDetectionStrategy, ElementRef, Renderer2, NgZone, ViewChild } from '@angular/core';
import { __extends } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
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
var LyIconButtonService = /** @class */ (function () {
    function LyIconButtonService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
    LyIconButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyIconButtonService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(LyTheme2)); }, token: LyIconButtonService, providedIn: "root" });
    return LyIconButtonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY$1 = -2;
/** @type {?} */
var styles$1 = function (theme) { return ({
    size: {
        width: theme.iconButton.size,
        height: theme.iconButton.size
    }
}); };
var LyIconButtonBase = /** @class */ (function () {
    function LyIconButtonBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyIconButtonBase;
}());
/** @type {?} */
var LyIconButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyIconButtonBase))))))))));
var LyIconButton = /** @class */ (function (_super) {
    __extends(LyIconButton, _super);
    function LyIconButton(_el, _rippleService, renderer, iconButtonService, theme, ngZone) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this._el = _el;
        _this._rippleService = _rippleService;
        _this.renderer = renderer;
        _this.iconButtonService = iconButtonService;
        _this.theme = theme;
        _this.classes = _this.theme.addStyleSheet(styles$1, STYLE_PRIORITY$1);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyIconButtonModule = /** @class */ (function () {
    function LyIconButtonModule() {
    }
    LyIconButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [LyIconButton],
                    declarations: [LyIconButton],
                },] }
    ];
    return LyIconButtonModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgb3ZlcmZsb3c6ICdpbmhlcml0JyxcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5GbGF0LFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgc2l6ZToge1xuICAgIHdpZHRoOiB0aGVtZS5pY29uQnV0dG9uLnNpemUsXG4gICAgaGVpZ2h0OiB0aGVtZS5pY29uQnV0dG9uLnNpemVcbiAgfVxufSk7XG5cbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlJY29uQnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlJY29uQnV0dG9uQmFzZSkpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbY2xhc3NOYW1lXT1cImljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudFwiXG4gID48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIDxkaXYgI3JpcHBsZUNvbnRhaW5lciBbY2xhc3NOYW1lXT1cIl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMuY29udGFpbmVyXCI+PC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBleHRlbmRzIEx5SWNvbkJ1dHRvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGljb25CdXR0b25TZXJ2aWNlOiBMeUljb25CdXR0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICBjb25zb2xlLndhcm4oJ2RlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIGA8YnV0dG9uIGx5LWJ1dHRvbiBhcHBlYXJhbmNlPVwiaWNvblwiYD4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNpemUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICcuL2ljb24tYnV0dG9uJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJTVFlMRV9QUklPUklUWSIsInN0eWxlcyIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBRW5CLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtRQUNqRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxF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