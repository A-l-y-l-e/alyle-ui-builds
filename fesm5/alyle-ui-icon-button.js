import { CoreTheme, LyCommon, LyTheme2 } from '@alyle/ui';
import { Injectable, NgModule, Component, ElementRef, ViewChild, Optional, Renderer2, ChangeDetectionStrategy, defineInjectable, inject } from '@angular/core';
import { LyRipple, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyIconButtonService = /** @class */ (function () {
    function LyIconButtonService(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            host: this.coreTheme.setUpStyle('icnBtn', { '': function () {
                    /** @type {?} */
                    var style = "-webkit-user-select:none;" +
                        "-moz-user-select:none;" +
                        "-ms-user-select:none;" +
                        "user-select:none;" +
                        "-webkit-tap-highlight-color:rgba(0, 0, 0, 0);" +
                        "justify-content: center;" +
                        "align-items: center;" +
                        "background:transparent;" +
                        "border:0;" +
                        "padding:0;" +
                        "overflow:hidden;" +
                        "cursor:pointer;" +
                        "outline:none;" +
                        "box-sizing:border-box;" +
                        "color:currentColor;" +
                        "display:inline-flex;" +
                        "position:relative;" +
                        "text-decoration: none;" +
                        "border-radius:50%;";
                    return style;
                } }),
            content: this.coreTheme.setUpStyle('icnBtnCntnt', { '': function () { return ("display:flex;" +
                    "justify-content:inherit;" +
                    "align-items:inherit;" +
                    "width:inherit;" +
                    "height:inherit;" +
                    "overflow:inherit;"); } })
        };
    }
    LyIconButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyIconButtonService.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyIconButtonService.ngInjectableDef = defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(inject(CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });
    return LyIconButtonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                    '': function () { return ("width:" + _this.theme.config["iconButton"].size + ";" +
                        ("height:" + _this.theme.config["iconButton"].size + ";")); }
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
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCommon, decorators: [{ type: Optional }] },
        { type: LyIconButtonService },
        { type: LyTheme2 }
    ]; };
    LyIconButton.propDecorators = {
        ripple: [{ type: ViewChild, args: [LyRipple,] }]
    };
    return LyIconButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyIconButtonModule = /** @class */ (function () {
    function LyIconButtonModule() {
    }
    LyIconButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyRippleModule],
                    exports: [LyIconButton],
                    declarations: [LyIconButton],
                },] },
    ];
    return LyIconButtonModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB7XG4gICAgaG9zdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnaWNuQnRuJywgeycnOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9XG4gICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC1tb3otdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbXMtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGB1c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICBgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtgICtcbiAgICAgIGBib3JkZXI6MDtgICtcbiAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICBgb3ZlcmZsb3c6aGlkZGVuO2AgK1xuICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgYG91dGxpbmU6bm9uZTtgICtcbiAgICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YCArXG4gICAgICBgY29sb3I6Y3VycmVudENvbG9yO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgdGV4dC1kZWNvcmF0aW9uOiBub25lO2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6NTAlO2A7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfX0pLFxuICAgIGNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bkNudG50JywgeycnOiAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICBgd2lkdGg6aW5oZXJpdDtgICtcbiAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgIGBvdmVyZmxvdzppbmhlcml0O2BcbiAgICApfSlcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5UmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInt7IGljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudCB9fVwiXG4gIGx5UmlwcGxlXG4gIGx5UmlwcGxlQ2VudGVyZWRcbiAgPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2ljb25TdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcn07XG4gIEBWaWV3Q2hpbGQoTHlSaXBwbGUpIHJpcHBsZTogTHlSaXBwbGU7XG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZSgnaWNvbkJ1dHRvbkNvbmZpZycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2AgK1xuICAgICAgICAgIGBoZWlnaHQ6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2BcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5Q29tbW9uLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuaG9zdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNvbmZpZyk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnLi9pY29uLWJ1dHRvbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJY29uQnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBd0NFLDZCQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7dUJBbENUO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRTs7b0JBQzdDLElBQU0sS0FBSyxH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