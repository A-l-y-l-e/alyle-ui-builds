import { CoreTheme, LyCommon, LyTheme2 } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, defineInjectable, inject } from '@angular/core';
import { LyRipple, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyIconButtonService {
    /**
     * @param {?} coreTheme
     */
    constructor(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            host: this.coreTheme.setUpStyle('icnBtn', { '': () => {
                    /** @type {?} */
                    const style = `-webkit-user-select:none;` +
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
    { type: CoreTheme }
];
/** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB7XG4gICAgaG9zdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnaWNuQnRuJywgeycnOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9XG4gICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC1tb3otdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbXMtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGB1c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICBgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtgICtcbiAgICAgIGBib3JkZXI6MDtgICtcbiAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICBgb3ZlcmZsb3c6aGlkZGVuO2AgK1xuICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgYG91dGxpbmU6bm9uZTtgICtcbiAgICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YCArXG4gICAgICBgY29sb3I6Y3VycmVudENvbG9yO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgdGV4dC1kZWNvcmF0aW9uOiBub25lO2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6NTAlO2A7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfX0pLFxuICAgIGNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bkNudG50JywgeycnOiAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICBgd2lkdGg6aW5oZXJpdDtgICtcbiAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgIGBvdmVyZmxvdzppbmhlcml0O2BcbiAgICApfSlcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInt7IGljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudCB9fVwiXG4gIGx5UmlwcGxlXG4gIGx5UmlwcGxlQ2VudGVyZWRcbiAgPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2ljb25TdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcn07XG4gIEBWaWV3Q2hpbGQoTHlSaXBwbGUpIHJpcHBsZTogTHlSaXBwbGU7XG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZSgnaWNvbkJ1dHRvbkNvbmZpZycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2AgK1xuICAgICAgICAgIGBoZWlnaHQ6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2BcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5Q29tbW9uLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuaG9zdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNvbmZpZyk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnLi9pY29uLWJ1dHRvbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJY29uQnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0lBd0NFLFlBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkFsQ1Q7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxFQUFFOztvQkFDN0MsTUFBTSxLQUFL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