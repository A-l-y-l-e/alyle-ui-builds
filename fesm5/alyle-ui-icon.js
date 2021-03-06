import { __decorate, __param, __extends } from 'tslib';
import { SecurityContext, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, Renderer2, Input, Directive, NgModule } from '@angular/core';
import { LyTheme2, keyframesUniqueId, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Platform, LyHostClass, LyCommonModule } from '@alyle/ui';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { share, map, take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

var STYLE_PRIORITY = -2;
/** The following styles will never be updated */
var styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
var LyIconService = /** @class */ (function () {
    function LyIconService(http, _sanitizer, _document, theme) {
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
    Object.defineProperty(LyIconService.prototype, "defaultClass", {
        get: function () {
            return this._defaultClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIconService.prototype, "defaultClassPrefix", {
        get: function () {
            return this._defaultClassPrefix;
        },
        enumerable: true,
        configurable: true
    });
    LyIconService.prototype.setSvg = function (key, url) {
        var _this = this;
        if (!this.svgMap.has(key)) {
            var urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            var svgIcon_1 = {
                obs: this.http.get(urlSanitized + ".svg", { responseType: 'text' })
                    .pipe(share(), map(function (svgText) {
                    if (svgIcon_1.svg) {
                        return svgIcon_1.svg;
                    }
                    var svg = _this._textToSvg(svgText);
                    _this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon_1);
        }
    };
    LyIconService.prototype.addSvgIconLiteral = function (key, literal) {
        if (!this.svgMap.has(key)) {
            var sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            if (!sanitizedLiteral) {
                throw new Error("LyIconService: Failed sanitize '" + key + "'");
            }
            var svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg: svg
            });
        }
    };
    /** String to SVG */
    LyIconService.prototype._textToSvg = function (str) {
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        return svg;
    };
    LyIconService.prototype._cacheSvgIcon = function (svg, key) {
        var svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    };
    LyIconService.prototype.getSvg = function (key) {
        if (!this.svgMap.has(key)) {
            throw new Error("LyIconService: Icon " + key + " not found");
        }
        return this.svgMap.get(key);
    };
    /**
     * Set default className for `ly-icon`
     * @param className class name
     * @param prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     */
    LyIconService.prototype.setDefaultClass = function (className, prefix) {
        this._defaultClass = className;
        this._defaultClassPrefix = prefix;
    };
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
    LyIconService.prototype.registerFontClass = function (opt) {
        this._fontClasses.set(opt.key, opt);
    };
    LyIconService.prototype.getFontClass = function (key) {
        return this._fontClasses.get(key);
    };
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: LyTheme2 }
    ]; };
    LyIconService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(ɵɵinject(HttpClient), ɵɵinject(DomSanitizer), ɵɵinject(DOCUMENT, 8), ɵɵinject(LyTheme2)); }, token: LyIconService, providedIn: "root" });
    LyIconService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(2, Optional()), __param(2, Inject(DOCUMENT))
    ], LyIconService);
    return LyIconService;
}());

var STYLE_PRIORITY$1 = -2;
var STYLES = function (theme) {
    var loading = keyframesUniqueId.next();
    var _a = theme.background, primary = _a.primary, secondary = _a.secondary, tertiary = _a.tertiary;
    var lum = primary.default.luminance();
    var one = (lum < .5
        ? tertiary
        : secondary);
    var two = (lum < .5
        ? secondary
        : tertiary);
    one = one.darken(.25 * (lum < .5 ? -1 : 1.1));
    two = two.darken(.25 * (lum < .5 ? -1 : 1.1));
    return {
        $priority: STYLE_PRIORITY$1,
        $global: function (className) { return "@keyframes " + loading + "{" + className + " 0%{background-position:200% 50%;}" + className + " 100%{background-position:-200% 50%;}}"; },
        loading: function (className) { return className + "{background:" + ("linear-gradient(270deg, " + one + ", " + two + ", " + two + ", " + one + ")") + ";background-size:400% 400%;animation:" + loading + " 8s ease-in-out infinite;}"; },
        defaultIcon: function (className) { return className + "{border-radius:50px;}"; }
    };
};
/** @docs-private */
var LyIconBase = /** @class */ (function () {
    function LyIconBase(_theme) {
        this._theme = _theme;
    }
    return LyIconBase;
}());
/** @docs-private */
var LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
var LyIcon = /** @class */ (function (_super) {
    __extends(LyIcon, _super);
    function LyIcon(iconService, _el, _renderer, theme, _hostClass) {
        var _this = _super.call(this, theme) || this;
        _this.iconService = iconService;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._hostClass = _hostClass;
        _this.classes = _this._theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        return _this;
    }
    Object.defineProperty(LyIcon.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            this._addDefaultIcon();
            if (Platform.isBrowser) {
                this._prepareSvgIcon(this.iconService.getSvg(val));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontSet", {
        get: function () {
            return this._fontSet;
        },
        set: function (key) {
            this._fontSet = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontIcon", {
        get: function () {
            return this._fontIcon;
        },
        set: function (key) {
            this._fontIcon = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "hostElement", {
        /** @docs-private */
        get: function () {
            return this._el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LyIcon.prototype.ngOnChanges = function () {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    };
    LyIcon.prototype._isDefault = function () {
        return !(this.icon || this.fontSet);
    };
    LyIcon.prototype._prepareSvgIcon = function (svgIcon) {
        var _this = this;
        if (svgIcon.svg) {
            this._appendChild(svgIcon.svg.cloneNode(true));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe(function (svgElement) {
                _this._appendChild(svgElement.cloneNode(true));
            });
        }
    };
    LyIcon.prototype._appendChild = function (svg) {
        this._cleanIcon();
        this._iconElement = svg;
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    };
    LyIcon.prototype._addDefaultIcon = function () {
        this._hostClass.add(this.classes.defaultIcon);
        this._hostClass.add(this.classes.loading);
    };
    // private _appendDefaultSvgIcon() {
    //   const svgIcon = this.iconService._textToSvg(this.iconService.defaultSvgIcon) as SVGAElement;
    //   svgIcon.classList.add(this.classes.loading);
    //   this._appendChild(svgIcon);
    // }
    LyIcon.prototype._updateClass = function () {
        if (this._isDefault() && this.iconService.defaultClass) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    };
    LyIcon.prototype.ngOnInit = function () {
        this._updateClass();
        this._theme.addStyle('lyIconRoot', function (theme) { return ("font-size:" + theme.icon.fontSize + ";" +
            "width:1em;" +
            "position:relative;" +
            "height:1em;" +
            "display:inline-flex;" +
            "-webkit-box-sizing: content-box;" +
            "-moz-box-sizing: content-box;" +
            "box-sizing: content-box;"); }, this._el.nativeElement, undefined, STYLE_PRIORITY$1);
    };
    LyIcon.prototype.ngOnDestroy = function () {
        this._cleanIcon();
    };
    /**
     * run only browser
     * remove current icon
     */
    LyIcon.prototype._cleanIcon = function () {
        var icon = this._iconElement;
        this._hostClass.remove(this.classes.defaultIcon);
        this._hostClass.remove(this.classes.loading);
        if (icon) {
            this._renderer.removeChild(this._el.nativeElement, icon);
            this._iconElement = undefined;
        }
    };
    LyIcon.prototype._updateFontClass = function () {
        var currentClass = this._currentClass;
        var fontSetKey = this.fontSet;
        var icon = this.fontIcon;
        var el = this._el.nativeElement;
        var iconClass = this.iconService.getFontClass(fontSetKey);
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
            throw new Error("Icon with key" + fontSetKey + " not found");
        }
        this._currentClass = "" + iconClass.prefix + icon;
        this._renderer.addClass(el, this._currentClass);
    };
    LyIcon.ctorParameters = function () { return [
        { type: LyIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: LyHostClass }
    ]; };
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
    return LyIcon;
}(LyIconMixinBase));

var LyIconModule = /** @class */ (function () {
    function LyIconModule() {
    }
    LyIconModule = __decorate([
        NgModule({
            declarations: [LyIcon],
            exports: [LyIcon, LyCommonModule]
        })
    ], LyIconModule);
    return LyIconModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyIcon, LyIconBase, LyIconMixinBase, LyIconModule, LyIconService, STYLES };
//# sourceMappingURL=alyle-ui-icon.js.map
