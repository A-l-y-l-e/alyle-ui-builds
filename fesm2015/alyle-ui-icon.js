import { Injectable, Optional, Inject, SecurityContext, NgModule, Directive, ElementRef, Input, Renderer2, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share, take } from 'rxjs/operators';
import { LyTheme2, LyCommonModule, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Platform } from '@alyle/ui';
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
     * @param {?} _document
     * @param {?} theme
     */
    constructor(http, _sanitizer, _document, theme) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this._document = _document;
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
        const div = this._document.createElement('DIV');
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
     * registerFontClass({
     *   key: 'fa',
     *   class: 'fa'
     *   prefix: 'fa-'
     * })
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
/**
 * \@docs-private
 */
class LyIconBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
class LyIcon extends LyIconMixinBase {
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
        return !(this.icon || this.fontSet);
    }
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    _prepareSvgIcon(svgIcon) {
        if (svgIcon.svg) {
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe((svgElement) => {
                this._appendChild((/** @type {?} */ (svgElement.cloneNode(true))));
            });
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _appendChild(svg) {
        this._cleanIcon();
        this._iconElement = svg;
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
        this._theme.addStyle('lyIconRoot', (theme) => (`font-size:${theme.icon.fontSize};` +
            `width:1em;` +
            `position:relative;` +
            `height:1em;` +
            `display:inline-flex;` +
            `-webkit-box-sizing: content-box;` +
            `-moz-box-sizing: content-box;` +
            `box-sizing: content-box;`), this._el.nativeElement, undefined, STYLE_PRIORITY$1);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._cleanIcon();
    }
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    _cleanIcon() {
        /** @type {?} */
        const icon = this._iconElement;
        if (icon) {
            this._renderer.removeChild(this._el.nativeElement, icon);
            this._iconElement = null;
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

export { LyIconModule, LyIconService, LyIconBase, LyIconMixinBase, LyIcon };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU2FmZUh0bWwsIERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udENsYXNzT3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICAvKiogQ2xhc3MgbmFtZSAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqIEZyZWZpeCBjbGFzcyAqL1xuICBwcmVmaXg/OiBzdHJpbmc7XG59XG5jb25zdCBzdHlsZXMgPSB7XG4gIHN2Zzoge1xuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9icz86IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3NQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgcHJpdmF0ZSBfZm9udENsYXNzZXMgPSBuZXcgTWFwPHN0cmluZywgRm9udENsYXNzT3B0aW9ucz4oKTtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVhZG9ubHkgZGVmYXVsdFN2Z0ljb246IFNWR0VsZW1lbnQ7XG4gIGdldCBkZWZhdWx0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzcztcbiAgfVxuICBnZXQgZGVmYXVsdENsYXNzUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTdmdJY29uID0gdGhpcy5fdGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+Jyk7XG4gIH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogU2FmZVJlc291cmNlVXJsKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgdXJsU2FuaXRpemVkID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIHVybCk7XG4gICAgICBjb25zdCBzdmdJY29uOiBTdmdJY29uID0ge1xuICAgICAgICBvYnM6IHRoaXMuaHR0cC5nZXQoYCR7dXJsU2FuaXRpemVkfS5zdmdgLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICAgbWFwKHN2Z1RleHQgPT4ge1xuICAgICAgICAgICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdmdJY29uLnN2ZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzdmdUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU3ZnSWNvbihzdmcsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gc3ZnO1xuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9O1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwgc3ZnSWNvbik7XG4gICAgfVxuICB9XG5cbiAgYWRkU3ZnSWNvbkxpdGVyYWwoa2V5OiBzdHJpbmcsIGxpdGVyYWw6IFNhZmVIdG1sKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkTGl0ZXJhbCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbGl0ZXJhbCk7XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc2FuaXRpemVkTGl0ZXJhbCk7XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCB7XG4gICAgICAgIHN2Z1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGV4dFRvU3ZnKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FjaGVTdmdJY29uKHN2ZzogU1ZHRWxlbWVudCwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdmdJY29uSW5mbyA9IHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICAgIGlmICghc3ZnSWNvbkluZm8uc3ZnKSB7XG4gICAgICB0aGlzLnN2Z01hcC5nZXQoa2V5KS5zdmcgPSBzdmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCBjbGFzc05hbWUgZm9yIGBseS1pY29uYFxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIGNsYXNzIG5hbWVcbiAgICogQHBhcmFtIHByZWZpeCBDbGFzcyBwcmVmaXgsXG4gICAqIEZvciBleGFtcGxlIGlmIHlvdSB1c2UgRm9udEF3ZXNvbWUgeW91ciBwcmVmaXggd291bGQgYmUgYGZhLWAsXG4gICAqIHRoZW4gaW4gdGhlIHRlbXBsYXRlIGl0IGlzIG5vIGxvbmdlciBuZWNlc3NhcnkgdG8gdXNlIHRoZSBwcmVmaXhcbiAgICogRXhhbXBsZTogYDxseS1pY29uIGZvbnRJY29uPVwiYWxhcm1cIj5gXG4gICAqL1xuICBzZXREZWZhdWx0Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5fZGVmYXVsdENsYXNzUHJlZml4ID0gcHJlZml4O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG5ldyBmb250IGNsYXNzIGFsaWFzXG4gICAqIGRlbW86XG4gICAqIEZvciBGb250QXdlc29tZVxuICAgKiByZWdpc3RlckZvbnRDbGFzcyh7XG4gICAqICAga2V5OiAnZmEnLFxuICAgKiAgIGNsYXNzOiAnZmEnXG4gICAqICAgcHJlZml4OiAnZmEtJ1xuICAgKiB9KVxuICAgKi9cbiAgcmVnaXN0ZXJGb250Q2xhc3Mob3B0OiBGb250Q2xhc3NPcHRpb25zKSB7XG4gICAgdGhpcy5fZm9udENsYXNzZXMuc2V0KG9wdC5rZXksIG9wdCk7XG4gIH1cblxuICBnZXRGb250Q2xhc3Moa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udENsYXNzZXMuZ2V0KGtleSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9udENsYXNzT3B0aW9ucywgTHlJY29uU2VydmljZSwgU3ZnSWNvbiB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUljb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUljb25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5SWNvbkJhc2UpKSkpKSkpO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWljb24nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUljb24gZXh0ZW5kcyBMeUljb25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9mb250U2V0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ByZXZpb3VzRm9udFNldDogRm9udENsYXNzT3B0aW9ucztcbiAgcHJpdmF0ZSBfY3VycmVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRJY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb25FbGVtZW50OiBTVkdFbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2Zyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udFNldCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250U2V0O1xuICB9XG4gIHNldCBmb250U2V0KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udFNldCA9IGtleTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250SWNvbjtcbiAgfVxuICBzZXQgZm9udEljb24oa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250SWNvbiA9IGtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvblNlcnZpY2U6IEx5SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5mb250U2V0IHx8IHRoaXMuZm9udEljb24pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZvbnRDbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLmljb24gfHwgdGhpcy5mb250U2V0KTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0ljb24uc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnSWNvbi5vYnNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHN2Z0VsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ2hpbGQoc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgdGhpcy5faWNvbkVsZW1lbnQgPSBzdmc7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCB0aGlzLmljb25TZXJ2aWNlLmNsYXNzZXMuc3ZnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBzdmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRGVmYXVsdFN2Z0ljb24oKSB7XG4gICAgdGhpcy5fYXBwZW5kQ2hpbGQodGhpcy5pY29uU2VydmljZS5kZWZhdWx0U3ZnSWNvbik7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5faXNEZWZhdWx0KCkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseUljb25Sb290JywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKFxuICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgIGBwb3NpdGlvbjpyZWxhdGl2ZTtgICtcbiAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtgICtcbiAgICAgIGAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O2AgK1xuICAgICAgYGJveC1zaXppbmc6IGNvbnRlbnQtYm94O2BcbiAgICApLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1biBvbmx5IGJyb3dzZXJcbiAgICogcmVtb3ZlIGN1cnJlbnQgaWNvblxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYW5JY29uKCkge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLl9pY29uRWxlbWVudDtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgaWNvbik7XG4gICAgICB0aGlzLl9pY29uRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRm9udENsYXNzKCkge1xuXG4gICAgY29uc3QgY3VycmVudENsYXNzID0gdGhpcy5fY3VycmVudENsYXNzO1xuICAgIGNvbnN0IGZvbnRTZXRLZXkgPSB0aGlzLmZvbnRTZXQ7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZm9udEljb247XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGljb25DbGFzcyA9IHRoaXMuaWNvblNlcnZpY2UuZ2V0Rm9udENsYXNzKGZvbnRTZXRLZXkpO1xuICAgIGlmIChjdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBjdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJldmlvdXNGb250U2V0KSB7XG4gICAgICBpZiAodGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCB0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaWNvbkNsYXNzKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c0ZvbnRTZXQgPSBpY29uQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIEVycm9yKGBJY29uIHdpdGgga2V5JHtmb250U2V0S2V5fSBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudENsYXNzID0gYCR7aWNvbkNsYXNzLnByZWZpeH0ke2ljb259YDtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbCwgdGhpcy5fY3VycmVudENsYXNzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbiB9IGZyb20gJy4vaWNvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbl0sXG4gIGV4cG9ydHM6IFtMeUljb24sIEx5Q29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUljb25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiU1RZTEVfUFJJT1JJVFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7TUFRTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQVNuQixNQUFNLEdBQUc7SUFDYixHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsY0FBYztLQUNyQjtDQUNGO01BVVksYUFBYTs7Ozs7OztJQWN4QixZQUNVLElBQWdCLEVBQ2hC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