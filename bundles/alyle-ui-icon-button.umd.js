(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon-button', ['exports', '@alyle/ui', '@angular/core', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['icon-button'] = {}),global.alyle.ui,global.ng.core,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,i1,i0,ripple,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyIconButtonService = /** @class */ (function () {
        function LyIconButtonService(coreTheme) {
            this.coreTheme = coreTheme;
            this.classes = {
                host: this.coreTheme.setUpStyle('icnBtn', { '': function () {
                        var /** @type {?} */ style = "-webkit-user-select:none;" +
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
                { type: i1.CoreTheme, },
            ];
        };
        /** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });
        return LyIconButtonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: i1.LyCommon, decorators: [{ type: i0.Optional },] },
                { type: LyIconButtonService, },
                { type: i1.LyTheme2, },
            ];
        };
        LyIconButton.propDecorators = {
            "ripple": [{ type: i0.ViewChild, args: [ripple.LyRipple,] },],
        };
        return LyIconButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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

    exports.LyIconButtonModule = LyIconButtonModule;
    exports.LyIconButton = LyIconButton;
    exports.ɵa = LyIconButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIGhvc3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bicsIHsnJzogKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPVxuICAgICAgYC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbW96LXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgLW1zLXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2AgK1xuICAgICAgYGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YCArXG4gICAgICBgYm9yZGVyOjA7YCArXG4gICAgICBgcGFkZGluZzowO2AgK1xuICAgICAgYG92ZXJmbG93OmhpZGRlbjtgICtcbiAgICAgIGBjdXJzb3I6cG9pbnRlcjtgICtcbiAgICAgIGBvdXRsaW5lOm5vbmU7YCArXG4gICAgICBgYm94LXNpemluZzpib3JkZXItYm94O2AgK1xuICAgICAgYGNvbG9yOmN1cnJlbnRDb2xvcjtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYHRleHQtZGVjb3JhdGlvbjogbm9uZTtgICtcbiAgICAgIGBib3JkZXItcmFkaXVzOjUwJTtgO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH19KSxcbiAgICBjb250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdpY25CdG5DbnRudCcsIHsnJzogKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgIGBhbGlnbi1pdGVtczppbmhlcml0O2AgK1xuICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICBgaGVpZ2h0OmluaGVyaXQ7YCArXG4gICAgICBgb3ZlcmZsb3c6aW5oZXJpdDtgXG4gICAgKX0pXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgaXNEZXZNb2RlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlLCBMeVJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5Q29tbW9uLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwie3sgaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50IH19XCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaWNvblN0eWxlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyfTtcbiAgQFZpZXdDaGlsZChMeVJpcHBsZSkgcmlwcGxlOiBMeVJpcHBsZTtcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlKCdpY29uQnV0dG9uQ29uZmlnJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YCArXG4gICAgICAgICAgYGhlaWdodDoke3RoaXMudGhlbWUuY29uZmlnLmljb25CdXR0b24uc2l6ZX07YFxuICAgICAgICApXG4gICAgICB9KVxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlDb21tb24sXG4gICAgcHVibGljIGljb25CdXR0b25TZXJ2aWNlOiBMeUljb25CdXR0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5ob3N0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY29uZmlnKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICcuL2ljb24tYnV0dG9uJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUljb25CdXR0b25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUljb25CdXR0b25dLFxufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvcmVUaGVtZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkx5Q29tbW9uIiwiT3B0aW9uYWwiLCJMeVRoZW1lMiIsIlZpZXdDaGlsZCIsIkx5UmlwcGxlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeVJpcHBsZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBd0NFLDZCQUNVO1lBQUEsY0FBUyxHQUFULFNBQVM7MkJBbENUO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLEVBQUU7d0JBQzdDLHFCQUFNLEtBQUssR0FDWCwyQkFBMkI7NEJBQzNCLHdCQUF3Qjs0QkFDeEIsdUJBQXVCOzRCQUN2QixtQkFBbUI7NEJBQ25CLCtDQUErQzs0QkFDL0MsMEJBQTBCOzRCQUMxQixzQkFBc0I7NEJBQ3RCLHlCQUF5Qjs0QkFDekIsV0FBVzs0QkFDWCxZQUFZOzRCQUNaLGtCQUFrQjs0QkFDbEIsaUJBQWlCOzRCQUNqQixlQUFlOzRCQUNmLHdCQUF3Qjs0QkFDeEIscUJBQXFCOzRCQUNyQixzQkFBc0I7NEJBQ3RCLG9CQUFvQjs0QkFDcEIsd0JBQXdCOzRCQUN4QixvQkFBb0IsQ0FBQzt3QkFDckIsT0FBTyxLQUFLLENBQUM7cUJBQ2QsRUFBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUU7d0JBQU0sUUFDM0QsZUFBZTs0QkFDZiwwQkFBMEI7NEJBQzFCLHNCQUFzQjs0QkFDdEIsZ0JBQWdCOzRCQUNoQixpQkFBaUI7NEJBQ2pCLG1CQUFtQjtxQkFDcEIsRUFBQyxDQUFDO2FBQ0o7U0FHSTs7b0JBdkNOQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFMUUMsWUFBUzs7OztrQ0FBbEI7Ozs7Ozs7QUNBQTtRQXNERSxzQkFDUyxZQUNDLFVBQ1ksWUFDYixtQkFDQztZQUpELGVBQVUsR0FBVixVQUFVO1lBQ1QsYUFBUSxHQUFSLFFBQVE7WUFDSSxlQUFVLEdBQVYsVUFBVTtZQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCO1lBQ2hCLFVBQUssR0FBTCxLQUFLO1lBRWIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7UUFwQkQsc0JBQUksaUNBQU87OztnQkFBWDtnQkFBQSxpQkFTQztnQkFSQyxPQUFPO29CQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTt3QkFDaEQsRUFBRSxFQUFFOzRCQUFNLFFBQ1IsV0FBUyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sZUFBWSxJQUFJLE1BQUc7aUNBQzdDLFlBQVUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksSUFBSSxNQUFHLENBQUE7eUJBQy9DO3FCQUNGLENBQUM7aUJBQ0gsQ0FBQzthQUNIOzs7V0FBQTs7OztRQWFELCtCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVFOztvQkEzQ0ZDLFlBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLGlFQUFpRTt3QkFDM0UsUUFBUSxFQUFFLDhJQU9UO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7d0JBQzFCLGVBQWUsRUFBRUMsMEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCOzs7Ozt3QkFyQ0NDLGFBQVU7d0JBY1ZDLFlBQVM7d0JBTVFDLFdBQVEsdUJBa0N0QkMsV0FBUTt3QkFqQ0osbUJBQW1CO3dCQURDQyxXQUFROzs7OytCQW9CbENDLFlBQVMsU0FBQ0MsZUFBUTs7MkJBM0NyQjs7Ozs7OztBQ0FBOzs7O29CQU1DQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLEVBQUVDLHFCQUFjLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUM3Qjs7aUNBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==