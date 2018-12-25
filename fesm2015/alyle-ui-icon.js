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
/**
 * The following styles will never be updated
 * @type {?}
 */
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
        /**
         * Styles
         * \@docs-private
         */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU2FmZUh0bWwsIERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udENsYXNzT3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICAvKiogQ2xhc3MgbmFtZSAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqIEZyZWZpeCBjbGFzcyAqL1xuICBwcmVmaXg/OiBzdHJpbmc7XG59XG5cbi8qKiBUaGUgZm9sbG93aW5nIHN0eWxlcyB3aWxsIG5ldmVyIGJlIHVwZGF0ZWQgKi9cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzPzogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgc3ZnPzogU1ZHRWxlbWVudDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzcyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzc1ByZWZpeDogc3RyaW5nO1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBwcml2YXRlIF9mb250Q2xhc3NlcyA9IG5ldyBNYXA8c3RyaW5nLCBGb250Q2xhc3NPcHRpb25zPigpO1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHJlYWRvbmx5IGRlZmF1bHRTdmdJY29uOiBTVkdFbGVtZW50O1xuICBnZXQgZGVmYXVsdENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3M7XG4gIH1cbiAgZ2V0IGRlZmF1bHRDbGFzc1ByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzUHJlZml4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5kZWZhdWx0U3ZnSWNvbiA9IHRoaXMuX3RleHRUb1N2ZygnPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjwvc3ZnPicpO1xuICB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCkge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHVybFNhbml0aXplZCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCB1cmwpO1xuICAgICAgY29uc3Qgc3ZnSWNvbjogU3ZnSWNvbiA9IHtcbiAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KGAke3VybFNhbml0aXplZH0uc3ZnYCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHtcbiAgICAgICAgICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgICAgICAgICByZXR1cm4gc3ZnSWNvbi5zdmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc3ZnVGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVN2Z0ljb24oc3ZnLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN2ZztcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHN2Z0ljb24pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN2Z0ljb25MaXRlcmFsKGtleTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCkge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZExpdGVyYWwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGxpdGVyYWwpO1xuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHNhbml0aXplZExpdGVyYWwpO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwge1xuICAgICAgICBzdmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgX2NhY2hlU3ZnSWNvbihzdmc6IFNWR0VsZW1lbnQsIGtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ZnSWNvbkluZm8gPSB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN2Z0ljb25JbmZvLnN2Zykge1xuICAgICAgdGhpcy5zdmdNYXAuZ2V0KGtleSkuc3ZnID0gc3ZnO1xuICAgIH1cbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgfVxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgY2xhc3NOYW1lIGZvciBgbHktaWNvbmBcbiAgICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gICAqIEBwYXJhbSBwcmVmaXggQ2xhc3MgcHJlZml4LFxuICAgKiBGb3IgZXhhbXBsZSBpZiB5b3UgdXNlIEZvbnRBd2Vzb21lIHlvdXIgcHJlZml4IHdvdWxkIGJlIGBmYS1gLFxuICAgKiB0aGVuIGluIHRoZSB0ZW1wbGF0ZSBpdCBpcyBubyBsb25nZXIgbmVjZXNzYXJ5IHRvIHVzZSB0aGUgcHJlZml4XG4gICAqIEV4YW1wbGU6IGA8bHktaWNvbiBmb250SWNvbj1cImFsYXJtXCI+YFxuICAgKi9cbiAgc2V0RGVmYXVsdENsYXNzKGNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJlZml4Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdENsYXNzID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeCA9IHByZWZpeDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgZm9udCBjbGFzcyBhbGlhc1xuICAgKiBkZW1vOlxuICAgKiBGb3IgRm9udEF3ZXNvbWVcbiAgICogcmVnaXN0ZXJGb250Q2xhc3Moe1xuICAgKiAgIGtleTogJ2ZhJyxcbiAgICogICBjbGFzczogJ2ZhJ1xuICAgKiAgIHByZWZpeDogJ2ZhLSdcbiAgICogfSlcbiAgICovXG4gIHJlZ2lzdGVyRm9udENsYXNzKG9wdDogRm9udENsYXNzT3B0aW9ucykge1xuICAgIHRoaXMuX2ZvbnRDbGFzc2VzLnNldChvcHQua2V5LCBvcHQpO1xuICB9XG5cbiAgZ2V0Rm9udENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRDbGFzc2VzLmdldChrZXkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvbnRDbGFzc09wdGlvbnMsIEx5SWNvblNlcnZpY2UsIFN2Z0ljb24gfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlJY29uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlJY29uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUljb25CYXNlKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uIGV4dGVuZHMgTHlJY29uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udFNldDogc3RyaW5nO1xuICBwcml2YXRlIF9wcmV2aW91c0ZvbnRTZXQ6IEZvbnRDbGFzc09wdGlvbnM7XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mb250SWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uRWxlbWVudDogU1ZHRWxlbWVudDtcblxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRTZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFNldDtcbiAgfVxuICBzZXQgZm9udFNldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRTZXQgPSBrZXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udEljb247XG4gIH1cbiAgc2V0IGZvbnRJY29uKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udEljb24gPSBrZXk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZm9udFNldCB8fCB0aGlzLmZvbnRJY29uKSB7XG4gICAgICB0aGlzLl91cGRhdGVGb250Q2xhc3MoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5pY29uIHx8IHRoaXMuZm9udFNldCk7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgIHRoaXMuX2ljb25FbGVtZW50ID0gc3ZnO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2AgK1xuICAgICAgYC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7YCArXG4gICAgICBgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtgICtcbiAgICAgIGBib3gtc2l6aW5nOiBjb250ZW50LWJveDtgXG4gICAgKSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5faWNvbkVsZW1lbnQ7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGljb24pO1xuICAgICAgdGhpcy5faWNvbkVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvbnRDbGFzcygpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzcyA9IHRoaXMuX2N1cnJlbnRDbGFzcztcbiAgICBjb25zdCBmb250U2V0S2V5ID0gdGhpcy5mb250U2V0O1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmZvbnRJY29uO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmljb25TZXJ2aWNlLmdldEZvbnRDbGFzcyhmb250U2V0S2V5KTtcbiAgICBpZiAoY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldCkge1xuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgdGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGljb25DbGFzcykge1xuICAgICAgdGhpcy5fcHJldmlvdXNGb250U2V0ID0gaWNvbkNsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvcihgSWNvbiB3aXRoIGtleSR7Zm9udFNldEtleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDbGFzcyA9IGAke2ljb25DbGFzcy5wcmVmaXh9JHtpY29ufWA7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIHRoaXMuX2N1cnJlbnRDbGFzcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUljb25dLFxuICBleHBvcnRzOiBbTHlJY29uLCBMeUNvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlNUWUxFX1BSSU9SSVRZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO01BUU0sY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7TUFXbkIsTUFBTSxHQUFHO0lBQ2IsR0FBRyxFQUFF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