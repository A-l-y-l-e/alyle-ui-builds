import { Injectable, Optional, Inject, NgModule, Directive, Input, Renderer2, ElementRef, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT, CommonModule } from '@angular/common';
import { map, share, take } from 'rxjs/operators';
import { LyTheme2, Platform } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
class LyIconService {
    /**
     * @param {?} http
     * @param {?} document
     * @param {?} theme
     */
    constructor(http, document, theme) {
        this.http = http;
        this.document = document;
        this.theme = theme;
        this.svgMap = new Map();
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
            },] }
];
/** @nocollapse */
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconService.ngInjectableDef = defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(inject(HttpClient), inject(DOCUMENT, 8), inject(LyTheme2)); }, token: LyIconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY$1 = -2;
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
        this._updateClass();
        this.theme.addStyle('lyIconRoot', theme => (`font-size:${theme.icon.fontSize};` +
            `width:1em;` +
            `height:1em;` +
            `display:inline-flex;`), this.elementRef.nativeElement, undefined, STYLE_PRIORITY$1);
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
            },] }
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
            },] }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzdmc6IHtcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9iczogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgbG9hZGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgc3ZnTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb24+KCk7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdXJsID0gYCR7dXJsfS5zdmdgO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSxcbiAgICAgICAge1xuICAgICAgICAgIG9iczogdGhpcy5odHRwLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB0aGlzLnRleHRUb1N2ZyhzdmdUZXh0KSksXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUljb25TZXJ2aWNlLCBTdmdJY29uIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWljb24nXG59KVxuZXhwb3J0IGNsYXNzIEljb24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3JjID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYF91cmw6JHt2YWx9YDtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS5zZXRTdmcoa2V5LCB2YWwpO1xuICAgICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2ZyhrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3JjO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvblNlcnZpY2U6IEx5SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLnNyYyB8fCB0aGlzLmljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIHN2Z0ljb24ub2JzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCB0aGlzLmljb25TZXJ2aWNlLmNsYXNzZXMuc3ZnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRGVmYXVsdFN2Z0ljb24oKSB7XG4gICAgdGhpcy5fYXBwZW5kQ2hpbGQodGhpcy5pY29uU2VydmljZS50ZXh0VG9TdmcoJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nKSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5faXNEZWZhdWx0KCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLnRoZW1lLmFkZFN0eWxlKCdseUljb25Sb290JywgdGhlbWUgPT4gKFxuICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YFxuICAgICksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLCBpY29uKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4vaWNvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSWNvbl0sXG4gIGV4cG9ydHM6IFtJY29uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUljb25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiU1RZTEVfUFJJ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