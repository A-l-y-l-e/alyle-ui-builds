import { Injectable, Optional, Inject, NgModule, Directive, Input, Renderer2, ElementRef, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT, CommonModule } from '@angular/common';
import { map, share, take } from 'rxjs/operators';
import { CoreTheme, Platform, LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyIconService = /** @class */ (function () {
    function LyIconService(http, document, coreTheme) {
        this.http = http;
        this.document = document;
        this.coreTheme = coreTheme;
        this.svgMap = new Map();
        this.classes = {
            svg: this.coreTheme.setUpStyle('_svg', {
                '': function () { return ("width:inherit;" +
                    "height:inherit;" +
                    "fill:currentColor;"); }
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
                    .pipe(share(), map(function (svgText) { return _this.textToSvg(svgText); }))
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyIconService.ngInjectableDef = defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(inject(HttpClient), inject(DOCUMENT, 8), inject(CoreTheme)); }, token: LyIconService, providedIn: "root" });
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
    Object.defineProperty(Icon.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return {
                root: this.theme.setUpStyle('root', {
                    '': function () { return ("font-size:" + _this.theme.config["icon"].fontSize + ";" +
                        "width:1em;" +
                        "height:1em;" +
                        "display:inline-flex;"); }
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "src", {
        get: /**
         * @return {?}
         */
        function () {
            return this._src;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._src = val;
            if (Platform.isBrowser) {
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
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._icon = val;
            if (Platform.isBrowser) {
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
            .pipe(take(1))
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
        /** @type {?} */
        var icon = this.elementRef.nativeElement.querySelector('svg');
        if (icon) {
            this.renderer.removeChild(this.elementRef, icon);
        }
    };
    Icon.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-icon'
                },] },
    ];
    /** @nocollapse */
    Icon.ctorParameters = function () { return [
        { type: LyIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 }
    ]; };
    Icon.propDecorators = {
        src: [{ type: Input }],
        icon: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

export { LyIconModule, LyIconService, Icon };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9iczogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgbG9hZGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgc3ZnTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb24+KCk7XG4gIGNsYXNzZXMgPSB7XG4gICAgc3ZnOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ19zdmcnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICAgICAgYGhlaWdodDppbmhlcml0O2AgK1xuICAgICAgICAgIGBmaWxsOmN1cnJlbnRDb2xvcjtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICB1cmwgPSBgJHt1cmx9LnN2Z2A7XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LFxuICAgICAgICB7XG4gICAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHRoaXMudGV4dFRvU3ZnKHN2Z1RleHQpKSxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdGV4dFRvU3ZnKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBnZXRTdmcoa2V5OiBzdHJpbmcpOiBTdmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlJY29uU2VydmljZSwgU3ZnSWNvbiB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJ1xufSlcbmV4cG9ydCBjbGFzcyBJY29uIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDogdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgICAncm9vdCcsIHtcbiAgICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgICAgYGZvbnQtc2l6ZToke3RoaXMudGhlbWUuY29uZmlnLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgICAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNyYyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3NyYyA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGBfdXJsOiR7dmFsfWA7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uuc2V0U3ZnKGtleSwgdmFsKTtcbiAgICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcoa2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBzcmMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2Zyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5zcmMgfHwgdGhpcy5pY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBzdmdJY29uLm9ic1xuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHN2Z0VsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UudGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZiwgaWNvbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25dLFxuICBleHBvcnRzOiBbSWNvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQTRCRSx1QkFDVSxNQUM4QixRQUFhLEVBQzNDO1FBRkEsU0FBSSxHQUFKLElBQUk7UUFDMEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMzQyxjQUFTLEdBQVQsU0FBUztzQkFmRixJQUFJLEdBQUcsRUFBbUI7dUJBQ2pDO1lBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUM1QixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLGNBQU0sUUFDUixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsb0JBQW9CLElBQ3JCO2FBQ0YsQ0FDRjtTQUNGO0tBS0k7Ozs7OztJQUVMLDhCQUFNOzs7OztJQUFOLFVBQU8sR0FBVyxFQUFFLEdBQVc7UUFBL0IsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsR0FBRyxHQUFNLEdBQUcsU0FBTSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDakI7Z0JBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQztxQkFDaEQsSUFBSSxDQUNILEtBQUssRUFB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