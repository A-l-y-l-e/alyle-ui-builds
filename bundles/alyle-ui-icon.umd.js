(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs/operators', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.icon = {}),global.ng.core,global.ng.common.http,global.ng.common,global.rxjs.operators,global.alyle.ui));
}(this, (function (exports,i0,i1,i2,operators,i3) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyIconService = /** @class */ (function () {
        function LyIconService(http, document, coreTheme) {
            this.http = http;
            this.document = document;
            this.coreTheme = coreTheme;
            this.svgMap = new Map();
            this.classes = {
                svg: this.coreTheme.setUpStyle('_svg', {
                    '': function () {
                        return ("width:inherit;" +
                            "height:inherit;" +
                            "fill:currentColor;");
                    }
                })
            };
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
                var /** @type {?} */ div = this.document.createElement('DIV');
                div.innerHTML = str;
                var /** @type {?} */ svg = /** @type {?} */ (div.querySelector('svg'));
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
                { type: i1.HttpClient, },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i2.DOCUMENT,] },] },
                { type: i3.CoreTheme, },
            ];
        };
        /** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DOCUMENT, 8), i0.inject(i3.CoreTheme)); }, token: LyIconService, providedIn: "root" });
        return LyIconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Icon = /** @class */ (function () {
        function Icon(iconService, elementRef, renderer, theme) {
            this.iconService = iconService;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.theme = theme;
            this._defaultClass = 'material-icons';
        }
        Object.defineProperty(Icon.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                return {
                    root: this.theme.setUpStyle('root', {
                        '': function () {
                            return ("font-size:" + _this.theme.config["icon"].fontSize + ";" +
                                "width:1em;" +
                                "height:1em;" +
                                "display:inline-flex;");
                        }
                    })
                };
            },
            enumerable: true,
            configurable: true
        });
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
                        var /** @type {?} */ key = "_url:" + val;
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
                this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
                this._updateClass();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        Icon.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this._updateClass();
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
                var /** @type {?} */ icon = this.elementRef.nativeElement.querySelector('svg');
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
                { type: LyIconService, },
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: i3.LyTheme2, },
            ];
        };
        Icon.propDecorators = {
            "src": [{ type: i0.Input },],
            "icon": [{ type: i0.Input },],
        };
        return Icon;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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

    exports.LyIconModule = LyIconModule;
    exports.LyIconService = LyIconService;
    exports.Icon = Icon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM6IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIGxvYWRlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBjbGFzc2VzID0ge1xuICAgIHN2ZzogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdfc3ZnJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDppbmhlcml0O2AgK1xuICAgICAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgICAgICBgZmlsbDpjdXJyZW50Q29sb3I7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdXJsID0gYCR7dXJsfS5zdmdgO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSxcbiAgICAgICAge1xuICAgICAgICAgIG9iczogdGhpcy5odHRwLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB0aGlzLnRleHRUb1N2ZyhzdmdUZXh0KSksXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5SWNvblNlcnZpY2UsIFN2Z0ljb24gfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaWNvbidcbn0pXG5leHBvcnQgY2xhc3MgSWNvbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdENsYXNzID0gJ21hdGVyaWFsLWljb25zJztcbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3Q6IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICAgJ3Jvb3QnLCB7XG4gICAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICAgIGBmb250LXNpemU6JHt0aGlzLnRoZW1lLmNvbmZpZy5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgICAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICAgICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgICAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzcmModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjb25zdCBrZXkgPSBgX3VybDoke3ZhbH1gO1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLnNldFN2ZyhrZXksIHZhbCk7XG4gICAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgc3JjKCkge1xuICAgIHJldHVybiB0aGlzLl9zcmM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuc3JjIHx8IHRoaXMuaWNvbik7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgc3ZnSWNvbi5vYnNcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ2hpbGQoc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsIHRoaXMuaWNvblNlcnZpY2UuY2xhc3Nlcy5zdmcpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREZWZhdWx0U3ZnSWNvbigpIHtcbiAgICB0aGlzLl9hcHBlbmRDaGlsZCh0aGlzLmljb25TZXJ2aWNlLnRleHRUb1N2ZygnPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjwvc3ZnPicpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLl9pc0RlZmF1bHQoKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGVmYXVsdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1biBvbmx5IGJyb3dzZXJcbiAgICogcmVtb3ZlIGN1cnJlbnQgaWNvblxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYW5JY29uKCkge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYsIGljb24pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9pY29uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJY29uXSxcbiAgZXhwb3J0czogW0ljb25dXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJzaGFyZSIsIm1hcCIsIkluamVjdGFibGUiLCJIdHRwQ2xpZW50IiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIkNvcmVUaGVtZSIsIlBsYXRmb3JtIiwidGFrZSIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJMeVRoZW1lMiIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQTRCRSx1QkFDVSxNQUM4QixVQUM5QjtZQUZBLFNBQUksR0FBSixJQUFJO1lBQzBCLGFBQVEsR0FBUixRQUFRO1lBQ3RDLGNBQVMsR0FBVCxTQUFTOzBCQWZGLElBQUksR0FBRyxFQUFtQjsyQkFDakM7Z0JBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUM1QixNQUFNLEVBQUU7b0JBQ04sRUFBRSxFQUFFO3dCQUFNLFFBQ1IsZ0JBQWdCOzRCQUNoQixpQkFBaUI7NEJBQ2pCLG9CQUFvQjtxQkFDckI7aUJBQ0YsQ0FDRjthQUNGO1NBS0k7Ozs7OztRQUVMLDhCQUFNOzs7OztZQUFOLFVBQU8sR0FBVyxFQUFFLEdBQVc7Z0JBQS9CLGlCQWFDO2dCQVpDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekIs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