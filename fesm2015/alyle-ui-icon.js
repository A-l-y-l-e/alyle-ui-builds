import { Injectable, Optional, Inject, SecurityContext, NgModule, Directive, Input, Renderer2, ElementRef, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share, take } from 'rxjs/operators';
import { LyTheme2, LyCommonModule, mixinStyleUpdater, mixinBg, mixinFlat, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Platform } from '@alyle/ui';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @param {?} _sanitizer
     * @param {?} document
     * @param {?} theme
     */
    constructor(http, _sanitizer, document, theme) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this.document = document;
        this.theme = theme;
        this._defaultClass = 'material-icons';
        this.svgMap = new Map();
        this._fontClasses = new Map();
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    /**
     * @return {?}
     */
    get defaultClass() {
        return this._defaultClass;
    }
    /**
     * @return {?}
     */
    get defaultClassPrefix() {
        return this._defaultClassPrefix;
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            /** @type {?} */
            const urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            /** @type {?} */
            const svgIcon = {
                obs: this.http.get(`${urlSanitized}.svg`, { responseType: 'text' })
                    .pipe(share(), map(svgText => {
                    if (svgIcon.svg) {
                        return svgIcon.svg;
                    }
                    /** @type {?} */
                    const svg = this._textToSvg(svgText);
                    this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon);
        }
    }
    /**
     * @param {?} key
     * @param {?} literal
     * @return {?}
     */
    addSvgIconLiteral(key, literal) {
        if (!this.svgMap.has(key)) {
            /** @type {?} */
            const sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            /** @type {?} */
            const svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg
            });
        }
    }
    /**
     * @param {?} str
     * @return {?}
     */
    _textToSvg(str) {
        /** @type {?} */
        const div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = (/** @type {?} */ (div.querySelector('svg')));
        return svg;
    }
    /**
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    _cacheSvgIcon(svg, key) {
        /** @type {?} */
        const svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSvg(key) {
        return this.svgMap.get(key);
    }
    /**
     * Set default className for `ly-icon`
     * @param {?} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    setDefaultClass(className, prefix) {
        this._defaultClass = className;
        this._defaultClassPrefix = prefix;
    }
    /**
     * Register new font class alias
     * demo:
     * For FontAwesome
     * registerFontClass('fa', 'fa', 'fa-')
     * @param {?} opt
     * @return {?}
     */
    registerFontClass(opt) {
        this._fontClasses.set(opt.key, opt);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getFontClass(key) {
        return this._fontClasses.get(key);
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
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconService.ngInjectableDef = defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(inject(HttpClient), inject(DomSanitizer), inject(DOCUMENT, 8), inject(LyTheme2)); }, token: LyIconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY$1 = -2;
class LyButtonBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @type {?} */
const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyButtonBase))))))));
class LyIcon extends LyButtonMixinBase {
    /**
     * @param {?} iconService
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} theme
     */
    constructor(iconService, _el, _renderer, theme) {
        super(theme);
        this.iconService = iconService;
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
    }
    /**
     * deprecated
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
     * @return {?}
     */
    get icon() {
        return this._icon;
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
    get fontSet() {
        return this._fontSet;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set fontSet(key) {
        this._fontSet = key;
    }
    /**
     * @return {?}
     */
    get fontIcon() {
        return this._fontIcon;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set fontIcon(key) {
        this._fontIcon = key;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    _isDefault() {
        return !(this.src || this.icon || this.fontSet);
    }
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    _prepareSvgIcon(svgIcon) {
        if (svgIcon.svg) {
            this._cleanIcon();
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe((svgElement) => {
                this._cleanIcon();
                this._appendChild((/** @type {?} */ (svgElement.cloneNode(true))));
            });
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _appendChild(svg) {
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    }
    /**
     * @return {?}
     */
    _appendDefaultSvgIcon() {
        this._appendChild(this.iconService.defaultSvgIcon);
    }
    /**
     * @return {?}
     */
    _updateClass() {
        if (this._isDefault()) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateClass();
        this._theme.addStyle('lyIconRoot', theme => (`font-size:${theme.icon.fontSize};` +
            `width:1em;` +
            `height:1em;` +
            `display:inline-flex;`), this._el.nativeElement, undefined, STYLE_PRIORITY$1);
    }
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    _cleanIcon() {
        /** @type {?} */
        const icon = this._el.nativeElement.querySelector('svg');
        if (icon) {
            this._renderer.removeChild(this._el, icon);
        }
    }
    /**
     * @return {?}
     */
    _updateFontClass() {
        /** @type {?} */
        const currentClass = this._currentClass;
        /** @type {?} */
        const fontSetKey = this.fontSet;
        /** @type {?} */
        const icon = this.fontIcon;
        /** @type {?} */
        const el = this._el.nativeElement;
        /** @type {?} */
        const iconClass = this.iconService.getFontClass(fontSetKey);
        if (currentClass) {
            this._renderer.removeClass(el, currentClass);
        }
        if (this._previousFontSet) {
            if (this._previousFontSet.class) {
                this._renderer.removeClass(el, this._previousFontSet.class);
            }
        }
        if (iconClass) {
            this._previousFontSet = iconClass;
        }
        this._currentClass = `${iconClass.prefix}${icon}`;
        this._renderer.addClass(el, this._currentClass);
    }
}
LyIcon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-icon',
                inputs: [
                    'bg',
                    'flat',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                ],
            },] }
];
/** @nocollapse */
LyIcon.ctorParameters = () => [
    { type: LyIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
LyIcon.propDecorators = {
    src: [{ type: Input }],
    icon: [{ type: Input }],
    fontSet: [{ type: Input }],
    fontIcon: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyIconModule {
}
LyIconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LyIcon],
                exports: [LyIcon, LyCommonModule]
            },] }
];

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

export { LyIconModule, LyIconService, LyButtonBase, LyButtonMixinBase, LyIcon };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU2FmZUh0bWwsIERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udENsYXNzT3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICAvKiogQ2xhc3MgbmFtZSAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqIEZyZWZpeCBjbGFzcyAqL1xuICBwcmVmaXg/OiBzdHJpbmc7XG59XG5jb25zdCBzdHlsZXMgPSB7XG4gIHN2Zzoge1xuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9icz86IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3NQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgcHJpdmF0ZSBfZm9udENsYXNzZXMgPSBuZXcgTWFwPHN0cmluZywgRm9udENsYXNzT3B0aW9ucz4oKTtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVhZG9ubHkgZGVmYXVsdFN2Z0ljb246IFNWR0VsZW1lbnQ7XG4gIGdldCBkZWZhdWx0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzcztcbiAgfVxuICBnZXQgZGVmYXVsdENsYXNzUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdFN2Z0ljb24gPSB0aGlzLl90ZXh0VG9TdmcoJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nKTtcbiAgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBTYWZlUmVzb3VyY2VVcmwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB1cmxTYW5pdGl6ZWQgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgdXJsKTtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldChgJHt1cmxTYW5pdGl6ZWR9LnN2Z2AsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdmdJY29uTGl0ZXJhbChrZXk6IHN0cmluZywgbGl0ZXJhbDogU2FmZUh0bWwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzYW5pdGl6ZWRMaXRlcmFsKTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHtcbiAgICAgICAgc3ZnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgX2NhY2hlU3ZnSWNvbihzdmc6IFNWR0VsZW1lbnQsIGtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ZnSWNvbkluZm8gPSB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN2Z0ljb25JbmZvLnN2Zykge1xuICAgICAgdGhpcy5zdmdNYXAuZ2V0KGtleSkuc3ZnID0gc3ZnO1xuICAgIH1cbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgfVxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgY2xhc3NOYW1lIGZvciBgbHktaWNvbmBcbiAgICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gICAqIEBwYXJhbSBwcmVmaXggQ2xhc3MgcHJlZml4LFxuICAgKiBGb3IgZXhhbXBsZSBpZiB5b3UgdXNlIEZvbnRBd2Vzb21lIHlvdXIgcHJlZml4IHdvdWxkIGJlIGBmYS1gLFxuICAgKiB0aGVuIGluIHRoZSB0ZW1wbGF0ZSBpdCBpcyBubyBsb25nZXIgbmVjZXNzYXJ5IHRvIHVzZSB0aGUgcHJlZml4XG4gICAqIEV4YW1wbGU6IGA8bHktaWNvbiBmb250SWNvbj1cImFsYXJtXCI+YFxuICAgKi9cbiAgc2V0RGVmYXVsdENsYXNzKGNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJlZml4Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdENsYXNzID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeCA9IHByZWZpeDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgZm9udCBjbGFzcyBhbGlhc1xuICAgKiBkZW1vOlxuICAgKiBGb3IgRm9udEF3ZXNvbWVcbiAgICogcmVnaXN0ZXJGb250Q2xhc3MoJ2ZhJywgJ2ZhJywgJ2ZhLScpXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgKiBAcGFyYW0gcHJlZml4IENsYXNzIHByZWZpeFxuICAgKi9cbiAgcmVnaXN0ZXJGb250Q2xhc3Mob3B0OiBGb250Q2xhc3NPcHRpb25zKSB7XG4gICAgdGhpcy5fZm9udENsYXNzZXMuc2V0KG9wdC5rZXksIG9wdCk7XG4gIH1cblxuICBnZXRGb250Q2xhc3Moa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udENsYXNzZXMuZ2V0KGtleSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5SWNvblNlcnZpY2UsIFN2Z0ljb24sIEZvbnRDbGFzc09wdGlvbnMgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCBtaXhpblN0eWxlVXBkYXRlciwgbWl4aW5CZywgbWl4aW5GbGF0LCBtaXhpbkNvbG9yLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY2xhc3MgTHlCdXR0b25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IEx5QnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUJ1dHRvbkJhc2UpKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbiBleHRlbmRzIEx5QnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9mb250U2V0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ByZXZpb3VzRm9udFNldDogRm9udENsYXNzT3B0aW9ucztcbiAgcHJpdmF0ZSBfY3VycmVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRJY29uOiBzdHJpbmc7XG5cbiAgLyoqIGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KClcbiAgc2V0IHNyYyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3NyYyA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGBfdXJsOiR7dmFsfWA7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uuc2V0U3ZnKGtleSwgdmFsKTtcbiAgICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcoa2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBzcmMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2Zyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udFNldCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250U2V0O1xuICB9XG4gIHNldCBmb250U2V0KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udFNldCA9IGtleTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250SWNvbjtcbiAgfVxuICBzZXQgZm9udEljb24oa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250SWNvbiA9IGtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvblNlcnZpY2U6IEx5SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5mb250U2V0IHx8IHRoaXMuZm9udEljb24pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZvbnRDbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLnNyYyB8fCB0aGlzLmljb24gfHwgdGhpcy5mb250U2V0KTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnSWNvbi5zdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmdJY29uLm9ic1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzdmcsIHRoaXMuaWNvblNlcnZpY2UuY2xhc3Nlcy5zdmcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREZWZhdWx0U3ZnSWNvbigpIHtcbiAgICB0aGlzLl9hcHBlbmRDaGlsZCh0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRTdmdJY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLl9pc0RlZmF1bHQoKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5SWNvblJvb3QnLCB0aGVtZSA9PiAoXG4gICAgICBgZm9udC1zaXplOiR7dGhlbWUuaWNvbi5mb250U2l6ZX07YCArXG4gICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgXG4gICAgKSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLCBpY29uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGb250Q2xhc3MoKSB7XG5cbiAgICBjb25zdCBjdXJyZW50Q2xhc3MgPSB0aGlzLl9jdXJyZW50Q2xhc3M7XG4gICAgY29uc3QgZm9udFNldEtleSA9IHRoaXMuZm9udFNldDtcbiAgICBjb25zdCBpY29uID0gdGhpcy5mb250SWNvbjtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaWNvbkNsYXNzID0gdGhpcy5pY29uU2VydmljZS5nZXRGb250Q2xhc3MoZm9udFNldEtleSk7XG4gICAgaWYgKGN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQpIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpY29uQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzRm9udFNldCA9IGljb25DbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgRXJyb3IoYEljb24gd2l0aCBrZXkke2ZvbnRTZXRLZXl9IG5vdCBmb3VuZGApO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50Q2xhc3MgPSBgJHtpY29uQ2xhc3MucHJlZml4fSR7aWNvbn1gO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsLCB0aGlzLl9jdXJyZW50Q2xhc3MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uIH0gZnJvbSAnLi9pY29uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uXSxcbiAgZXhwb3J0czogW0x5SWNvbiwgTHlDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJTVFlMRV9QUklPUklUWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtNQVFNLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BU25CLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxTQUFTO1FBQ2hC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