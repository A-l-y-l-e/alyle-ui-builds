import { __extends } from 'tslib';
import { Injectable, Optional, Inject, SecurityContext, NgModule, defineInjectable, inject, Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { LyTheme2, LyCommonModule, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Platform } from '@alyle/ui';
import { map, share, take } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/**
 * The following styles will never be updated
 * @type {?}
 */
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
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    Object.defineProperty(LyIconService.prototype, "defaultClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIconService.prototype, "defaultClassPrefix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultClassPrefix;
        },
        enumerable: true,
        configurable: true
    });
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
            /** @type {?} */
            var urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            /** @type {?} */
            var svgIcon_1 = {
                obs: this.http.get(urlSanitized + ".svg", { responseType: 'text' })
                    .pipe(share(), map(function (svgText) {
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
     * @param {?} key
     * @param {?} literal
     * @return {?}
     */
    LyIconService.prototype.addSvgIconLiteral = /**
     * @param {?} key
     * @param {?} literal
     * @return {?}
     */
    function (key, literal) {
        if (!this.svgMap.has(key)) {
            /** @type {?} */
            var sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            if (!sanitizedLiteral) {
                throw new Error("LyIconService: Failed sanitize '" + key + "'");
            }
            /** @type {?} */
            var svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg: svg
            });
        }
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    LyIconService.prototype._textToSvg = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        var svg = (/** @type {?} */ (div.querySelector('svg')));
        return svg;
    };
    /**
     * @private
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype._cacheSvgIcon = /**
     * @private
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    function (svg, key) {
        /** @type {?} */
        var svgIconInfo = this.svgMap.get(key);
        if (!(/** @type {?} */ (svgIconInfo)).svg) {
            (/** @type {?} */ (this.svgMap.get(key))).svg = svg;
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
        if (!this.svgMap.has(key)) {
            throw new Error("LyIconService: Icon " + key + " not found");
        }
        return (/** @type {?} */ (this.svgMap.get(key)));
    };
    /**
     * Set default className for `ly-icon`
     * @param className class name
     * @param prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     */
    /**
     * Set default className for `ly-icon`
     * @param {?=} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    LyIconService.prototype.setDefaultClass = /**
     * Set default className for `ly-icon`
     * @param {?=} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    function (className, prefix) {
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
    LyIconService.prototype.registerFontClass = /**
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
    function (opt) {
        this._fontClasses.set(opt.key, opt);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype.getFontClass = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._fontClasses.get(key);
    };
    LyIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyIconService.ngInjectableDef = defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(inject(HttpClient), inject(DomSanitizer), inject(DOCUMENT, 8), inject(LyTheme2)); }, token: LyIconService, providedIn: "root" });
    return LyIconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY$1 = -2;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyIconBase = /** @class */ (function () {
    function LyIconBase(_theme) {
        this._theme = _theme;
    }
    return LyIconBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
var LyIcon = /** @class */ (function (_super) {
    __extends(LyIcon, _super);
    function LyIcon(iconService, _el, _renderer, theme) {
        var _this = _super.call(this, theme) || this;
        _this.iconService = iconService;
        _this._el = _el;
        _this._renderer = _renderer;
        _this.setAutoContrast();
        return _this;
    }
    Object.defineProperty(LyIcon.prototype, "icon", {
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
    Object.defineProperty(LyIcon.prototype, "fontSet", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fontSet;
        },
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._fontSet = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fontIcon;
        },
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._fontIcon = key;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    };
    /**
     * @private
     * @return {?}
     */
    LyIcon.prototype._isDefault = /**
     * @private
     * @return {?}
     */
    function () {
        return !(this.icon || this.fontSet);
    };
    /**
     * @private
     * @param {?} svgIcon
     * @return {?}
     */
    LyIcon.prototype._prepareSvgIcon = /**
     * @private
     * @param {?} svgIcon
     * @return {?}
     */
    function (svgIcon) {
        var _this = this;
        if (svgIcon.svg) {
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            (/** @type {?} */ (svgIcon.obs)).pipe(take(1))
                .subscribe(function (svgElement) {
                _this._appendChild((/** @type {?} */ (svgElement.cloneNode(true))));
            });
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    LyIcon.prototype._appendChild = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._cleanIcon();
        this._iconElement = svg;
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    };
    /**
     * @private
     * @return {?}
     */
    LyIcon.prototype._appendDefaultSvgIcon = /**
     * @private
     * @return {?}
     */
    function () {
        this._appendChild(this.iconService.defaultSvgIcon);
    };
    /**
     * @private
     * @return {?}
     */
    LyIcon.prototype._updateClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._isDefault() && this.iconService.defaultClass) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    };
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._cleanIcon();
    };
    /**
     * run only browser
     * remove current icon
     */
    /**
     * run only browser
     * remove current icon
     * @private
     * @return {?}
     */
    LyIcon.prototype._cleanIcon = /**
     * run only browser
     * remove current icon
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var icon = this._iconElement;
        if (icon) {
            this._renderer.removeChild(this._el.nativeElement, icon);
            this._iconElement = undefined;
        }
    };
    /**
     * @private
     * @return {?}
     */
    LyIcon.prototype._updateFontClass = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentClass = this._currentClass;
        /** @type {?} */
        var fontSetKey = this.fontSet;
        /** @type {?} */
        var icon = this.fontIcon;
        /** @type {?} */
        var el = this._el.nativeElement;
        /** @type {?} */
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
    LyIcon.ctorParameters = function () { return [
        { type: LyIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 }
    ]; };
    LyIcon.propDecorators = {
        icon: [{ type: Input }],
        fontSet: [{ type: Input }],
        fontIcon: [{ type: Input }]
    };
    return LyIcon;
}(LyIconMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LyIconModule = /** @class */ (function () {
    function LyIconModule() {
    }
    LyIconModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyIcon],
                    exports: [LyIcon, LyCommonModule]
                },] }
    ];
    return LyIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LyIconModule, LyIconService, LyIconBase, LyIconMixinBase, LyIcon };

//# sourceMappingURL=alyle-ui-icon.js.map