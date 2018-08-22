import { Injectable, Optional, Inject, NgModule, Directive, Input, Renderer2, ElementRef, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT, CommonModule } from '@angular/common';
import { map, share, take } from 'rxjs/operators';
import { CoreTheme, Platform, LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyIconService {
    /**
     * @param {?} http
     * @param {?} document
     * @param {?} coreTheme
     */
    constructor(http, document, coreTheme) {
        this.http = http;
        this.document = document;
        this.coreTheme = coreTheme;
        this.svgMap = new Map();
        this.classes = {
            svg: this.coreTheme.setUpStyle('_svg', {
                '': () => (`width:inherit;` +
                    `height:inherit;` +
                    `fill:currentColor;`)
            })
        };
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            url = `${url}.svg`;
            this.svgMap.set(key, {
                obs: this.http.get(url, { responseType: 'text' })
                    .pipe(share(), map(svgText => this.textToSvg(svgText)))
            });
        }
    }
    /**
     * @param {?} str
     * @return {?}
     */
    textToSvg(str) {
        /** @type {?} */
        const div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = /** @type {?} */ (div.querySelector('svg'));
        return svg;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSvg(key) {
        return this.svgMap.get(key);
    }
}
LyIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: CoreTheme }
];
/** @nocollapse */ LyIconService.ngInjectableDef = defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(inject(HttpClient), inject(DOCUMENT, 8), inject(CoreTheme)); }, token: LyIconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Icon {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     */
    constructor(iconService, elementRef, renderer, theme) {
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this._defaultClass = 'material-icons';
    }
    /**
     * @return {?}
     */
    get classes() {
        return {
            root: this.theme.setUpStyle('root', {
                '': () => (`font-size:${this.theme.config["icon"].fontSize};` +
                    `width:1em;` +
                    `height:1em;` +
                    `display:inline-flex;`)
            })
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set src(val) {
        this._src = val;
        if (Platform.isBrowser) {
            if (val) {
                /** @type {?} */
                const key = `_url:${val}`;
                this.iconService.setSvg(key, val);
                this._prepareSvgIcon(this.iconService.getSvg(key));
            }
        }
        else {
            this._appendDefaultSvgIcon();
        }
    }
    /**
     * @return {?}
     */
    get src() {
        return this._src;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set icon(val) {
        this._icon = val;
        if (Platform.isBrowser) {
            this._prepareSvgIcon(this.iconService.getSvg(val));
        }
        else {
            this._appendDefaultSvgIcon();
        }
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @return {?}
     */
    _isDefault() {
        return !(this.src || this.icon);
    }
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    _prepareSvgIcon(svgIcon) {
        svgIcon.obs
            .pipe(take(1))
            .subscribe((svgElement) => {
            this._cleanIcon();
            this._appendChild(svgElement);
        });
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _appendChild(svg) {
        this.renderer.addClass(svg, this.iconService.classes.svg);
        this.renderer.appendChild(this.elementRef.nativeElement, svg);
    }
    /**
     * @return {?}
     */
    _appendDefaultSvgIcon() {
        this._appendChild(this.iconService.textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>'));
    }
    /**
     * @return {?}
     */
    _updateClass() {
        if (this._isDefault()) {
            this.renderer.addClass(this.elementRef.nativeElement, this._defaultClass);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
        this._updateClass();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._updateClass();
    }
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    _cleanIcon() {
        /** @type {?} */
        const icon = this.elementRef.nativeElement.querySelector('svg');
        if (icon) {
            this.renderer.removeChild(this.elementRef, icon);
        }
    }
}
Icon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-icon'
            },] },
];
/** @nocollapse */
Icon.ctorParameters = () => [
    { type: LyIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
Icon.propDecorators = {
    src: [{ type: Input }],
    icon: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyIconModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9iczogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgbG9hZGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgc3ZnTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb24+KCk7XG4gIGNsYXNzZXMgPSB7XG4gICAgc3ZnOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ19zdmcnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICAgICAgYGhlaWdodDppbmhlcml0O2AgK1xuICAgICAgICAgIGBmaWxsOmN1cnJlbnRDb2xvcjtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICB1cmwgPSBgJHt1cmx9LnN2Z2A7XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LFxuICAgICAgICB7XG4gICAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHRoaXMudGV4dFRvU3ZnKHN2Z1RleHQpKSxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdGV4dFRvU3ZnKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBnZXRTdmcoa2V5OiBzdHJpbmcpOiBTdmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlJY29uU2VydmljZSwgU3ZnSWNvbiB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJ1xufSlcbmV4cG9ydCBjbGFzcyBJY29uIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDogdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgICAncm9vdCcsIHtcbiAgICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgICAgYGZvbnQtc2l6ZToke3RoaXMudGhlbWUuY29uZmlnLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgICAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNyYyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3NyYyA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGBfdXJsOiR7dmFsfWA7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uuc2V0U3ZnKGtleSwgdmFsKTtcbiAgICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcoa2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBzcmMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2Zyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5zcmMgfHwgdGhpcy5pY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBzdmdJY29uLm9ic1xuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHN2Z0VsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UudGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZiwgaWNvbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25dLFxuICBleHBvcnRzOiBbSWNvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBNEJFLFlBQ1UsTUFDOEIsUUFBYSxFQUMzQztRQUZBLFNBQUksR0FBSixJQUFJO1FBQzBCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDM0MsY0FBUyxHQUFULFNBQVM7c0JBZkYsSUFBSSxHQUFHLEVBQW1CO3VCQUNqQztZQUNSLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDNUIsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxPQUNGLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixvQkFBb0IsQ0FDckI7YUFDRixDQUNGO1NBQ0Y7S0FLSTs7Ozs7O0lBRUwsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQ2pCO2dCQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7cUJBQ2hELElBQUksQ0FDSCxLQUFLLEVBQUUsRUFDUCxHQUFHLENBQUMs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