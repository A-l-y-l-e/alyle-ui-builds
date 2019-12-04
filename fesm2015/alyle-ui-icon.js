import { __decorate, __param } from 'tslib';
import { SecurityContext, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, Renderer2, Input, Directive, NgModule } from '@angular/core';
import { LyTheme2, keyframesUniqueId, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Platform, LyHostClass, LyCommonModule } from '@alyle/ui';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { share, map, take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

const STYLE_PRIORITY = -2;
/** The following styles will never be updated */
const styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
let LyIconService = class LyIconService {
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
         * @docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>';
    }
    get defaultClass() {
        return this._defaultClass;
    }
    get defaultClassPrefix() {
        return this._defaultClassPrefix;
    }
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            const urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            const svgIcon = {
                obs: this.http.get(`${urlSanitized}.svg`, { responseType: 'text' })
                    .pipe(share(), map(svgText => {
                    if (svgIcon.svg) {
                        return svgIcon.svg;
                    }
                    const svg = this._textToSvg(svgText);
                    this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon);
        }
    }
    addSvgIconLiteral(key, literal) {
        if (!this.svgMap.has(key)) {
            const sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            if (!sanitizedLiteral) {
                throw new Error(`LyIconService: Failed sanitize '${key}'`);
            }
            const svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg
            });
        }
    }
    /** String to SVG */
    _textToSvg(str) {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        return svg;
    }
    _cacheSvgIcon(svg, key) {
        const svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    }
    getSvg(key) {
        if (!this.svgMap.has(key)) {
            throw new Error(`LyIconService: Icon ${key} not found`);
        }
        return this.svgMap.get(key);
    }
    /**
     * Set default className for `ly-icon`
     * @param className class name
     * @param prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
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
     */
    registerFontClass(opt) {
        this._fontClasses.set(opt.key, opt);
    }
    getFontClass(key) {
        return this._fontClasses.get(key);
    }
};
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: LyTheme2 }
];
LyIconService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(ɵɵinject(HttpClient), ɵɵinject(DomSanitizer), ɵɵinject(DOCUMENT, 8), ɵɵinject(LyTheme2)); }, token: LyIconService, providedIn: "root" });
LyIconService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(2, Optional()), __param(2, Inject(DOCUMENT))
], LyIconService);

const STYLE_PRIORITY$1 = -2;
const STYLES = (theme) => {
    const loading = keyframesUniqueId.next();
    const { primary, secondary, tertiary } = theme.background;
    const lum = primary.default.luminance();
    let one = (lum < .5
        ? tertiary
        : secondary);
    let two = (lum < .5
        ? secondary
        : tertiary);
    one = one.darken(.25 * (lum < .5 ? -1 : 1.1));
    two = two.darken(.25 * (lum < .5 ? -1 : 1.1));
    return {
        $priority: STYLE_PRIORITY$1,
        $global: (className) => `@keyframes ${loading}{${className} 0%{background-position:200% 50%;}${className} 100%{background-position:-200% 50%;}}`,
        loading: (className) => `${className}{background:${`linear-gradient(270deg, ${one}, ${two}, ${two}, ${one})`};background-size:400% 400%;animation:${loading} 8s ease-in-out infinite;}`,
        defaultIcon: (className) => `${className}{border-radius:50px;}`
    };
};
const ɵ0 = STYLES;
/** @docs-private */
class LyIconBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
let LyIcon = class LyIcon extends LyIconMixinBase {
    constructor(iconService, _el, _renderer, theme, _hostClass) {
        super(theme);
        this.iconService = iconService;
        this._el = _el;
        this._renderer = _renderer;
        this._hostClass = _hostClass;
        this.classes = this._theme.addStyleSheet(STYLES);
        this.setAutoContrast();
    }
    get icon() {
        return this._icon;
    }
    set icon(val) {
        this._icon = val;
        this._addDefaultIcon();
        if (Platform.isBrowser) {
            this._prepareSvgIcon(this.iconService.getSvg(val));
        }
    }
    get fontSet() {
        return this._fontSet;
    }
    set fontSet(key) {
        this._fontSet = key;
    }
    get fontIcon() {
        return this._fontIcon;
    }
    set fontIcon(key) {
        this._fontIcon = key;
    }
    /** @docs-private */
    get hostElement() {
        return this._el.nativeElement;
    }
    ngOnChanges() {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    }
    _isDefault() {
        return !(this.icon || this.fontSet);
    }
    _prepareSvgIcon(svgIcon) {
        if (svgIcon.svg) {
            this._appendChild(svgIcon.svg.cloneNode(true));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe((svgElement) => {
                this._appendChild(svgElement.cloneNode(true));
            });
        }
    }
    _appendChild(svg) {
        this._cleanIcon();
        this._iconElement = svg;
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    }
    _addDefaultIcon() {
        this._hostClass.add(this.classes.defaultIcon);
        this._hostClass.add(this.classes.loading);
    }
    // private _appendDefaultSvgIcon() {
    //   const svgIcon = this.iconService._textToSvg(this.iconService.defaultSvgIcon) as SVGAElement;
    //   svgIcon.classList.add(this.classes.loading);
    //   this._appendChild(svgIcon);
    // }
    _updateClass() {
        if (this._isDefault() && this.iconService.defaultClass) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    }
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
    ngOnDestroy() {
        this._cleanIcon();
    }
    /**
     * run only browser
     * remove current icon
     */
    _cleanIcon() {
        const icon = this._iconElement;
        this._hostClass.remove(this.classes.defaultIcon);
        this._hostClass.remove(this.classes.loading);
        if (icon) {
            this._renderer.removeChild(this._el.nativeElement, icon);
            this._iconElement = undefined;
        }
    }
    _updateFontClass() {
        const currentClass = this._currentClass;
        const fontSetKey = this.fontSet;
        const icon = this.fontIcon;
        const el = this._el.nativeElement;
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
        else {
            throw new Error(`Icon with key${fontSetKey} not found`);
        }
        this._currentClass = `${iconClass.prefix}${icon}`;
        this._renderer.addClass(el, this._currentClass);
    }
};
LyIcon.ctorParameters = () => [
    { type: LyIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: LyHostClass }
];
__decorate([
    Input()
], LyIcon.prototype, "icon", null);
__decorate([
    Input()
], LyIcon.prototype, "fontSet", null);
__decorate([
    Input()
], LyIcon.prototype, "fontIcon", null);
LyIcon = __decorate([
    Directive({
        selector: 'ly-icon',
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor',
        ],
        exportAs: 'lyIcon',
        providers: [
            LyHostClass
        ]
    })
], LyIcon);

let LyIconModule = class LyIconModule {
};
LyIconModule = __decorate([
    NgModule({
        declarations: [LyIcon],
        exports: [LyIcon, LyCommonModule]
    })
], LyIconModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyIcon, LyIconBase, LyIconMixinBase, LyIconModule, LyIconService, ɵ0 };
//# sourceMappingURL=alyle-ui-icon.js.map
