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
                { type: i1.LyBgColorAndRaised, decorators: [{ type: i0.Optional },] },
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

    exports.LyIconButtonModule = LyIconButtonModule;
    exports.LyIconButton = LyIconButton;
    exports.ɵa = LyIconButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIGhvc3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bicsIHsnJzogKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPVxuICAgICAgYC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbW96LXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgLW1zLXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2AgK1xuICAgICAgYGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YCArXG4gICAgICBgYm9yZGVyOjA7YCArXG4gICAgICBgcGFkZGluZzowO2AgK1xuICAgICAgYG92ZXJmbG93OmhpZGRlbjtgICtcbiAgICAgIGBjdXJzb3I6cG9pbnRlcjtgICtcbiAgICAgIGBvdXRsaW5lOm5vbmU7YCArXG4gICAgICBgYm94LXNpemluZzpib3JkZXItYm94O2AgK1xuICAgICAgYGNvbG9yOmN1cnJlbnRDb2xvcjtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYHRleHQtZGVjb3JhdGlvbjogbm9uZTtgICtcbiAgICAgIGBib3JkZXItcmFkaXVzOjUwJTtgO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH19KSxcbiAgICBjb250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdpY25CdG5DbnRudCcsIHsnJzogKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgIGBhbGlnbi1pdGVtczppbmhlcml0O2AgK1xuICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICBgaGVpZ2h0OmluaGVyaXQ7YCArXG4gICAgICBgb3ZlcmZsb3c6aW5oZXJpdDtgXG4gICAgKX0pXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgaXNEZXZNb2RlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlLCBMeVJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5QmdDb2xvckFuZFJhaXNlZCwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWljb24tYnV0dG9uXSwgYVtseS1pY29uLWJ1dHRvbl0sIHNwYW5bbHktaWNvbi1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInt7IGljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMuY29udGVudCB9fVwiXG4gIGx5UmlwcGxlXG4gIGx5UmlwcGxlQ2VudGVyZWRcbiAgPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUljb25CdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2ljb25TdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcn07XG4gIEBWaWV3Q2hpbGQoTHlSaXBwbGUpIHJpcHBsZTogTHlSaXBwbGU7XG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZSgnaWNvbkJ1dHRvbkNvbmZpZycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2AgK1xuICAgICAgICAgIGBoZWlnaHQ6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uQnV0dG9uLnNpemV9O2BcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5QmdDb2xvckFuZFJhaXNlZCxcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmhvc3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jb25maWcpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJy4vaWNvbi1idXR0b24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29yZVRoZW1lIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlCZ0NvbG9yQW5kUmFpc2VkIiwiT3B0aW9uYWwiLCJMeVRoZW1lMiIsIlZpZXdDaGlsZCIsIkx5UmlwcGxlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeVJpcHBsZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBd0NFLDZCQUNVO1lBQUEsY0FBUyxHQUFULFNBQVM7MkJBbENUO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLEVBQUU7d0JBQzdDLHFCQUFNLEtBQUssR0FDWCwyQkFBMkI7NEJBQzNCLHdCQUF3Qjs0QkFDeEIsdUJBQXVCOzRCQUN2QixtQkFBbUI7NEJBQ25CLCtDQUErQzs0QkFDL0MsMEJBQTBCOzRCQUMxQixzQkFBc0I7NEJBQ3RCLHlCQUF5Qjs0QkFDekIsV0FBVzs0QkFDWCxZQUFZOzRCQUNaLGtCQUFrQjs0QkFDbEIsaUJBQWlCOzRCQUNqQixlQUFlOzRCQUNmLHdCQUF3Qjs0QkFDeEIscUJBQXFCOzRCQUNyQixzQkFBc0I7NEJBQ3RCLG9CQUFvQjs0QkFDcEIsd0JBQXdCOzRCQUN4QixvQkFBb0IsQ0FBQzt3QkFDckIsT0FBTyxLQUFLLENBQUM7cUJBQ2QsRUFBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUU7d0JBQU0sUUFDM0QsZUFBZTs0QkFDZiwwQkFBMEI7NEJBQzFCLHNCQUFzQjs0QkFDdEIsZ0JBQWdCOzRCQUNoQixpQkFBaUI7NEJBQ2pCLG1CQUFtQjtxQkFDcEIsRUFBQyxDQUFDO2FBQ0o7U0FHSTs7b0JBdkNOQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFMUUMsWUFBUzs7OztrQ0FBbEI7Ozs7Ozs7QUNBQTtRQXNERSxzQkFDUyxZQUNDLFVBQ1ksWUFDYixtQkFDQztZQUpELGVBQVUsR0FBVixVQUFVO1lBQ1QsYUFBUSxHQUFSLFFBQVE7WUFDSSxlQUFVLEdBQVYsVUFBVTtZQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCO1lBQ2hCLFVBQUssR0FBTCxLQUFLO1lBRWIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7UUFwQkQsc0JBQUksaUNBQU87OztnQkFBWDtnQkFBQSxpQkFTQztnQkFSQyxPQUFPO29CQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTt3QkFDaEQsRUFBRSxFQUFFOzRCQUFNLFFBQ1IsV0FBUyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sZUFBWSxJQUFJLE1BQUc7aUNBQzdDLFlBQVUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksSUFBSSxNQUFHLENBQUE7eUJBQy9DO3FCQUNGLENBQUM7aUJBQ0gsQ0FBQzthQUNIOzs7V0FBQTs7OztRQWFELCtCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVFOztvQkEzQ0ZDLFlBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLGlFQUFpRTt3QkFDM0UsUUFBUSxFQUFFLDhJQU9UO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7d0JBQzFCLGVBQWUsRUFBRUMsMEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCOzs7Ozt3QkFyQ0NDLGFBQVU7d0JBY1ZDLFlBQVM7d0JBTVFDLHFCQUFrQix1QkFrQ2hDQyxXQUFRO3dCQWpDSixtQkFBbUI7d0JBRFdDLFdBQVE7Ozs7K0JBb0I1Q0MsWUFBUyxTQUFDQyxlQUFROzsyQkEzQ3JCOzs7Ozs7O0FDQUE7Ozs7b0JBTUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksRUFBRUMscUJBQWMsQ0FBQzt3QkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQzdCOztpQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==