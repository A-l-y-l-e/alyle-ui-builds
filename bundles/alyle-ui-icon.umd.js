(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs/operators', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.icon = {}),global.ng.core,global.ng.common.http,global.ng.common,global.rxjs.operators,global.alyle.ui));
}(this, (function (exports,i0,i1,i2,operators,i3) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = {
        svg: {
            width: 'inherit',
            height: 'inherit',
            fill: 'currentColor',
        }
    };
    var LyIconService = /** @class */ (function () {
        function LyIconService(http, document, theme) {
            this.http = http;
            this.document = document;
            this.theme = theme;
            this.svgMap = new Map();
            this.classes = this.theme.addStyleSheet(styles, 'lyIcon');
        }
        /**
         * @param {?} key
         * @param {?} url
         * @return {?}
         */
        LyIconService.prototype.setSvg = /**
         * @param {?} key
         * @param {?} url
         * @return {?}
         */
            function (key, url) {
                var _this = this;
                if (!this.svgMap.has(key)) {
                    url = url + ".svg";
                    this.svgMap.set(key, {
                        obs: this.http.get(url, { responseType: 'text' })
                            .pipe(operators.share(), operators.map(function (svgText) { return _this.textToSvg(svgText); }))
                    });
                }
            };
        /**
         * @param {?} str
         * @return {?}
         */
        LyIconService.prototype.textToSvg = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var div = this.document.createElement('DIV');
                div.innerHTML = str;
                /** @type {?} */
                var svg = /** @type {?} */ (div.querySelector('svg'));
                return svg;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        LyIconService.prototype.getSvg = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.svgMap.get(key);
            };
        LyIconService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyIconService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i2.DOCUMENT,] }] },
                { type: i3.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DOCUMENT, 8), i0.inject(i3.LyTheme2)); }, token: LyIconService, providedIn: "root" });
        return LyIconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Icon = /** @class */ (function () {
        function Icon(iconService, elementRef, renderer, theme) {
            this.iconService = iconService;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.theme = theme;
            this._defaultClass = 'material-icons';
        }
        Object.defineProperty(Icon.prototype, "src", {
            get: /**
             * @return {?}
             */ function () {
                return this._src;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._src = val;
                if (i3.Platform.isBrowser) {
                    if (val) {
                        /** @type {?} */
                        var key = "_url:" + val;
                        this.iconService.setSvg(key, val);
                        this._prepareSvgIcon(this.iconService.getSvg(key));
                    }
                }
                else {
                    this._appendDefaultSvgIcon();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Icon.prototype, "icon", {
            get: /**
             * @return {?}
             */ function () {
                return this._icon;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._icon = val;
                if (i3.Platform.isBrowser) {
                    this._prepareSvgIcon(this.iconService.getSvg(val));
                }
                else {
                    this._appendDefaultSvgIcon();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        Icon.prototype._isDefault = /**
         * @return {?}
         */
            function () {
                return !(this.src || this.icon);
            };
        /**
         * @param {?} svgIcon
         * @return {?}
         */
        Icon.prototype._prepareSvgIcon = /**
         * @param {?} svgIcon
         * @return {?}
         */
            function (svgIcon) {
                var _this = this;
                svgIcon.obs
                    .pipe(operators.take(1))
                    .subscribe(function (svgElement) {
                    _this._cleanIcon();
                    _this._appendChild(svgElement);
                });
            };
        /**
         * @param {?} svg
         * @return {?}
         */
        Icon.prototype._appendChild = /**
         * @param {?} svg
         * @return {?}
         */
            function (svg) {
                this.renderer.addClass(svg, this.iconService.classes.svg);
                this.renderer.appendChild(this.elementRef.nativeElement, svg);
            };
        /**
         * @return {?}
         */
        Icon.prototype._appendDefaultSvgIcon = /**
         * @return {?}
         */
            function () {
                this._appendChild(this.iconService.textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>'));
            };
        /**
         * @return {?}
         */
        Icon.prototype._updateClass = /**
         * @return {?}
         */
            function () {
                if (this._isDefault()) {
                    this.renderer.addClass(this.elementRef.nativeElement, this._defaultClass);
                }
            };
        /**
         * @return {?}
         */
        Icon.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._updateClass();
                this.theme.addStyle('lyIconRoot', function (theme) {
                    return ("font-size:" + theme.icon.fontSize + ";" +
                        "width:1em;" +
                        "height:1em;" +
                        "display:inline-flex;");
                }, this.elementRef.nativeElement);
            };
        /**
         * run only browser
         * remove current icon
         * @return {?}
         */
        Icon.prototype._cleanIcon = /**
         * run only browser
         * remove current icon
         * @return {?}
         */
            function () {
                /** @type {?} */
                var icon = this.elementRef.nativeElement.querySelector('svg');
                if (icon) {
                    this.renderer.removeChild(this.elementRef, icon);
                }
            };
        Icon.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-icon'
                    },] },
        ];
        /** @nocollapse */
        Icon.ctorParameters = function () {
            return [
                { type: LyIconService },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i3.LyTheme2 }
            ];
        };
        Icon.propDecorators = {
            src: [{ type: i0.Input }],
            icon: [{ type: i0.Input }]
        };
        return Icon;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyIconModule = /** @class */ (function () {
        function LyIconModule() {
        }
        LyIconModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule
                        ],
                        declarations: [Icon],
                        exports: [Icon]
                    },] },
        ];
        return LyIconModule;
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

    exports.LyIconModule = LyIconModule;
    exports.LyIconService = LyIconService;
    exports.Icon = Icon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM6IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIGxvYWRlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5SWNvbicpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIHVybCA9IGAke3VybH0uc3ZnYDtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksXG4gICAgICAgIHtcbiAgICAgICAgICBvYnM6IHRoaXMuaHR0cC5nZXQodXJsLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgICAgbWFwKHN2Z1RleHQgPT4gdGhpcy50ZXh0VG9Tdmcoc3ZnVGV4dCkpLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUljb25TZXJ2aWNlLCBTdmdJY29uIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWljb24nXG59KVxuZXhwb3J0IGNsYXNzIEljb24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3JjID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYF91cmw6JHt2YWx9YDtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS5zZXRTdmcoa2V5LCB2YWwpO1xuICAgICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2ZyhrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3JjO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvblNlcnZpY2U6IEx5SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLnNyYyB8fCB0aGlzLmljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIHN2Z0ljb24ub2JzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCB0aGlzLmljb25TZXJ2aWNlLmNsYXNzZXMuc3ZnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRGVmYXVsdFN2Z0ljb24oKSB7XG4gICAgdGhpcy5fYXBwZW5kQ2hpbGQodGhpcy5pY29uU2VydmljZS50ZXh0VG9TdmcoJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nKSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5faXNEZWZhdWx0KCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLnRoZW1lLmFkZFN0eWxlKCdseUljb25Sb290JywgdGhlbWUgPT4gKFxuICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YFxuICAgICksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLCBpY29uKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4vaWNvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSWNvbl0sXG4gIGV4cG9ydHM6IFtJY29uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUljb25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsic2hhcmUiLCJtYXAiLCJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJMeVRoZW1lMiIsIlBsYXRmb3JtIiwidGFrZSIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFPQSxJQUFNLE1BQU0sR0FBRztRQUNiLEdBQUcsRUFBRTtZQUNILEtBQUssRUFBRSxTQUFTO1lBQ2hCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLElBQUksRUFBRSxjQUFjO1NBQ25CO0tBQ0osQ0FBQzs7UUFhQSx1QkFDVSxNQUM4QixRQUFhLEVBQzNDO1lBRkEsU0FBSSxHQUFKLElBQUk7WUFDMEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztZQUMzQyxVQUFLLEdBQUwsS0FBSzswQkFMRSxJQUFJLEdBQUcsRUFBbUI7MkJBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7U0FLL0M7Ozs7OztRQUVMLDhCQUFNOzs7OztZQUFOLFVBQU8sR0FBVyxFQUFFLEdBQVc7Z0JBQS9CLGlCQWFDO2dCQVpDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekIsR0FBRyxHQUFNLEdBQUcsU0FBTSxDQUFDO29CQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQ2pCO3dCQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7NkJBQ2hELElBQUksQ0FDSEEsZUFBSyxFQUFFLEVBQ1BDLGFBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUEsQ0FBQyxDQUN4QztxQkFDRixDQUNGLENBQUM7aUJBQ0g7YUFDRjs7Ozs7UUFFRCxpQ0FBUzs7OztZQUFULFVBQVUsR0FBVzs7Z0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzs7Z0JBQ3BCLElBQU0sR0FBRyxxQkFBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBZSxFQUFDO2dCQUNuRCxPQUFPLEdBQUcsQ0FBQzthQUNaOzs7OztRQUVELDhCQUFNOzs7O1lBQU4sVUFBTyxHQUFXO2dCQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCOztvQkFwQ0ZDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQXJCUUMsYUFBVTt3REEyQmRDLFdBQVEsWUFBSUMsU0FBTSxTQUFDQyxXQUFRO3dCQXZCdkJDLFdBQVE7Ozs7NEJBTGpCOzs7Ozs7O0FDQUE7UUF5Q0UsY0FDVSxhQUNBLFlBQ0EsVUFDQTtZQUhBLGdCQUFXLEdBQVgsV0FBVztZQUNYLGVBQVUsR0FBVixVQUFVO1lBQ1YsYUFBUSxHQUFSLFFBQVE7WUFDUixVQUFLLEdBQUwsS0FBSztpQ0FwQ1MsZ0JBQWdCO1NBcUNuQztRQWxDTCxzQkFDSSxxQkFBRzs7O2dCQVlQO2dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQjs7OztnQkFmRCxVQUNRLEdBQVc7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJQyxXQUFRLENBQUMsU0FBUyxFQUFFO29CQUN0QixJQUFJLEdBQUcsRUFBRTs7d0JBQ1AsSUFBTSxHQUFHLEdBQUcsVUFBUSxHQUFLLENBQUM7d0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwRDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDOUI7YUFDRjs7O1dBQUE7UUFLRCxzQkFBYSxzQkFBSTs7O2dCQVFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7Ozs7Z0JBVkQsVUFBa0IsR0FBVztnQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLElBQUlBLFdBQVEsQ0FBQyxTQUFTLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7aUJBQzlCO2FBQ0Y7OztXQUFBOzs7O1FBWU8seUJBQVU7Ozs7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O1FBRzFCLDhCQUFlOzs7O3NCQUFDLE9BQWdCOztnQkFDdEMsT0FBTyxDQUFDLEdBQUc7cUJBQ1IsSUFBSSxDQUNIQyxjQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7cUJBQ0EsU0FBUyxDQUFDLFVBQUMsVUFBVTtvQkFDcEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMvQixDQUFDLENBQUM7Ozs7OztRQUdDLDJCQUFZOzs7O3NCQUFDLEdBQWU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7O1FBR3hELG9DQUFxQjs7OztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBR25ILDJCQUFZOzs7O2dCQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMzRTs7Ozs7UUFHSCx1QkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsVUFBQSxLQUFLO29CQUFJLFFBQ3pDLGVBQWEsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLE1BQUc7d0JBQ25DLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixzQkFBc0I7aUJBQ3ZCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuQzs7Ozs7O1FBTU8seUJBQVU7Ozs7Ozs7Z0JBQ2hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbEQ7OztvQkEzRkpDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUztxQkFDcEI7Ozs7O3dCQU5RLGFBQWE7d0JBRGdCQyxhQUFVO3dCQUFyQkMsWUFBUzt3QkFHakJMLFdBQVE7Ozs7MEJBU3hCTSxRQUFLOzJCQWlCTEEsUUFBSzs7bUJBN0JSOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLGVBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7cUJBQ2hCOzsyQkFWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9