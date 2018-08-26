(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon-button', ['exports', '@alyle/ui', '@angular/core', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['icon-button'] = {}),global.alyle.ui,global.ng.core,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,i1,i0,ripple,common) { 'use strict';

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
                content: this.coreTheme.setUpStyle('icnBtnCntnt', { '': function () {
                        return ("display:flex;" +
                            "justify-content:inherit;" +
                            "align-items:inherit;" +
                            "width:inherit;" +
                            "height:inherit;" +
                            "overflow:inherit;");
                    } })
            };
        }
        LyIconButtonService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyIconButtonService.ctorParameters = function () {
            return [
                { type: i1.CoreTheme }
            ];
        };
        /** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });
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
             */ function () {
                var _this = this;
                return {
                    config: this.theme.setUpStyle('iconButtonConfig', {
                        '': function () {
                            return ("width:" + _this.theme.config["iconButton"].size + ";" +
                                ("height:" + _this.theme.config["iconButton"].size + ";"));
                        }
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                        template: "\n  <div class=\"{{ iconButtonService.classes.content }}\"\n  lyRipple\n  lyRippleCentered\n  >\n    <ng-content></ng-content>\n  </div>\n  ",
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        exportAs: 'lyIconButton'
                    },] },
        ];
        /** @nocollapse */
        LyIconButton.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyCommon, decorators: [{ type: i0.Optional }] },
                { type: LyIconButtonService },
                { type: i1.LyTheme2 }
            ];
        };
        LyIconButton.propDecorators = {
            ripple: [{ type: i0.ViewChild, args: [ripple.LyRipple,] }]
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule],
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

    exports.LyIconButtonModule = LyIconButtonModule;
    exports.LyIconButton = LyIconButton;
    exports.ɵa = LyIconButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIGhvc3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bicsIHsnJzogKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPVxuICAgICAgYC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbW96LXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgLW1zLXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2AgK1xuICAgICAgYGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YCArXG4gICAgICBgYm9yZGVyOjA7YCArXG4gICAgICBgcGFkZGluZzowO2AgK1xuICAgICAgYG92ZXJmbG93OmhpZGRlbjtgICtcbiAgICAgIGBjdXJzb3I6cG9pbnRlcjtgICtcbiAgICAgIGBvdXRsaW5lOm5vbmU7YCArXG4gICAgICBgYm94LXNpemluZzpib3JkZXItYm94O2AgK1xuICAgICAgYGNvbG9yOmN1cnJlbnRDb2xvcjtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYHRleHQtZGVjb3JhdGlvbjogbm9uZTtgICtcbiAgICAgIGBib3JkZXItcmFkaXVzOjUwJTtgO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH19KSxcbiAgICBjb250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdpY25CdG5DbnRudCcsIHsnJzogKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgIGBhbGlnbi1pdGVtczppbmhlcml0O2AgK1xuICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICBgaGVpZ2h0OmluaGVyaXQ7YCArXG4gICAgICBgb3ZlcmZsb3c6aW5oZXJpdDtgXG4gICAgKX0pXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2ljb24tYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJ7eyBpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnQgfX1cIlxuICBseVJpcHBsZVxuICBseVJpcHBsZUNlbnRlcmVkXG4gID5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pY29uU3R5bGU6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJ9O1xuICBAVmlld0NoaWxkKEx5UmlwcGxlKSByaXBwbGU6IEx5UmlwcGxlO1xuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoJ2ljb25CdXR0b25Db25maWcnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOiR7dGhpcy50aGVtZS5jb25maWcuaWNvbkJ1dHRvbi5zaXplfTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiR7dGhpcy50aGVtZS5jb25maWcuaWNvbkJ1dHRvbi5zaXplfTtgXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUNvbW1vbixcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmhvc3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jb25maWcpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJy4vaWNvbi1idXR0b24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29yZVRoZW1lIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlDb21tb24iLCJPcHRpb25hbCIsIkx5VGhlbWUyIiwiVmlld0NoaWxkIiwiTHlSaXBwbGUiLCJOZ01vZHVs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