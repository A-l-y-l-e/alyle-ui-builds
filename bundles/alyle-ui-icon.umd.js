(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs/operators', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.icon = {}),global.ng.core,global.ng.common.http,global.ng.common,global.rxjs.operators,global.alyle.ui));
}(this, (function (exports,i0,i1,i2,operators,i3) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
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
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
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
                    /** @type {?} */
                    var svgIcon_1 = {
                        obs: this.http.get(url, { responseType: 'text' })
                            .pipe(operators.share(), operators.map(function (svgText) {
                            if (svgIcon_1.svg) {
                                return svgIcon_1.svg;
                            }
                            /** @type {?} */
                            var svg = _this._textToSvg(svgText);
                            _this._cacheSvgIcon(svg, key);
                            return svg;
                        }))
                    };
                    this.svgMap.set(key, svgIcon_1);
                }
            };
        /**
         * @param {?} str
         * @return {?}
         */
        LyIconService.prototype._textToSvg = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var div = this.document.createElement('DIV');
                div.innerHTML = str;
                /** @type {?} */
                var svg = ( /** @type {?} */(div.querySelector('svg')));
                return svg;
            };
        /**
         * @param {?} svg
         * @param {?} key
         * @return {?}
         */
        LyIconService.prototype._cacheSvgIcon = /**
         * @param {?} svg
         * @param {?} key
         * @return {?}
         */
            function (svg, key) {
                /** @type {?} */
                var svgIconInfo = this.svgMap.get(key);
                if (!svgIconInfo.svg) {
                    this.svgMap.get(key).svg = svg;
                }
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
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY$1 = -2;
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
                if (svgIcon.svg) {
                    this._cleanIcon();
                    this._appendChild(( /** @type {?} */(svgIcon.svg.cloneNode(true))));
                }
                else {
                    svgIcon.obs
                        .pipe(operators.take(1))
                        .subscribe(function (svgElement) {
                        _this._cleanIcon();
                        _this._appendChild(( /** @type {?} */(svgElement.cloneNode(true))));
                    });
                }
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
                this._appendChild(this.iconService.defaultSvgIcon);
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
                }, this.elementRef.nativeElement, undefined, STYLE_PRIORITY$1);
            };
        /**
         * run only browser
         * remove current icon
         */
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
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    },] }
        ];
        return LyIconModule;
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

    exports.LyIconModule = LyIconModule;
    exports.LyIconService = LyIconService;
    exports.Icon = Icon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pY29uL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+O1xuICBzdmc/OiBTVkdFbGVtZW50O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVhZG9ubHkgZGVmYXVsdFN2Z0ljb246IFNWR0VsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5kZWZhdWx0U3ZnSWNvbiA9IHRoaXMuX3RleHRUb1N2ZygnPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjwvc3ZnPicpO1xuICB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIHVybCA9IGAke3VybH0uc3ZnYDtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgX2NhY2hlU3ZnSWNvbihzdmc6IFNWR0VsZW1lbnQsIGtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ZnSWNvbkluZm8gPSB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN2Z0ljb25JbmZvLnN2Zykge1xuICAgICAgdGhpcy5zdmdNYXAuZ2V0KGtleSkuc3ZnID0gc3ZnO1xuICAgIH1cbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlJY29uU2VydmljZSwgU3ZnSWNvbiB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJ1xufSlcbmV4cG9ydCBjbGFzcyBJY29uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdENsYXNzID0gJ21hdGVyaWFsLWljb25zJztcbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyYyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3NyYyA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGBfdXJsOiR7dmFsfWA7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uuc2V0U3ZnKGtleSwgdmFsKTtcbiAgICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcoa2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBzcmMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2Zyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5zcmMgfHwgdGhpcy5pY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnSWNvbi5zdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmdJY29uLm9ic1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgdGhpcy50aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsIHRoZW1lID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2BcbiAgICApLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZiwgaWNvbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25dLFxuICBleHBvcnRzOiBbSWNvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInNoYXJlIiwibWFwIiwiSW5qZWN0YWJsZSIsIkh0dHBDbGllbnQiLCJPcHRpb25hbCIsIkluamVjdCIsIkRPQ1VNRU5UIiwiTHlUaGVtZTIiLCJTVFlMRV9QUklPUklUWSIsIlBsYXRmb3JtIiwidGFrZSIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPTSxjQUFjLEdBQUcs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