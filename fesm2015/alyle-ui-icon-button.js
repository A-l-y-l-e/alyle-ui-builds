import { LyTheme2, Platform, LyCommon } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, NgZone, defineInjectable, inject } from '@angular/core';
import { LyRippleService, Ripple, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.classes = this.theme.addStyleSheet(styles, 'lyIconButtonStatic', STYLE_PRIORITY);
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
        this.classes = this.theme.addStyleSheet(styles$1, 'lyIconButton', STYLE_PRIORITY$1);
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
            },] },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgb3ZlcmZsb3c6ICdpbmhlcml0JyxcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5SWNvbkJ1dHRvblN0YXRpYycsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlclZpZXdJbml0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlSaXBwbGVTZXJ2aWNlLCBSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5Q29tbW9uLCBMeVRoZW1lMiwgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHNpemU6IHtcbiAgICB3aWR0aDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplLFxuICAgIGhlaWdodDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2NsYXNzTmFtZV09XCJpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnRcIlxuICA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2NsYXNzTmFtZV09XCJfcmlwcGxlU2VydmljZS5jbGFzc2VzLmNvbnRhaW5lclwiPjwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlJY29uQnV0dG9uJywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9yaXBwbGU6IFJpcHBsZTtcbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb24sXG4gICAgcHVibGljIGljb25CdXR0b25TZXJ2aWNlOiBMeUljb25CdXR0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zaXplKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy50aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5jbGFzc2VzLCByaXBwbGVDb250YWluZXIsIHRyaWdnZXJFbGVtZW50KTtcbiAgICAgIHRoaXMuX3JpcHBsZS5zZXRDb25maWcoe1xuICAgICAgICBjZW50ZXJlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICcuL2ljb24tYnV0dG9uJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUljb25CdXR0b25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUljb25CdXR0b25dLFxufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiU1RZTEVfUFJJT1JJVFkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBR0EsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLE1BQU0sTUFBTSxJQUFJO0lBQ2QsSUFBSSxFQUFFO1FBQ0oscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsVUFBVSxFQUFFLE1BQU07UUFDbEIsNkJBQTZCLEVBQUUsa0JBQWtCO1FBQ2pELGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsTUFBTTtRQUNmLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGNBQWMsRUFBRSxNQUFNO1FBQ3RCLFlBQVksRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE1BQU07UUFDZixjQUFjLEVBQUUsU0FBUztRQUN6QixV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