(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chroma-js'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', 'chroma-js', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = {}),global.chroma,global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.platformBrowser));
}(this, (function (exports,_chroma,i0,i1,rxjs,operators,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} hexcolor
     * @return {?}
     */
    function getContrastYIQ(hexcolor) {
        var /** @type {?} */ r = parseInt(hexcolor.substr(0, 2), 16);
        var /** @type {?} */ g = parseInt(hexcolor.substr(2, 2), 16);
        var /** @type {?} */ b = parseInt(hexcolor.substr(4, 2), 16);
        var /** @type {?} */ yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ chroma = _chroma;
    var /** @type {?} */ shadowKeyUmbraOpacity = 0.2;
    var /** @type {?} */ shadowKeyPenumbraOpacity = 0.14;
    var /** @type {?} */ shadowAmbientShadowOpacity = 0.12;
    var /** @type {?} */ Shadows = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1],
        [0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2],
        [0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2],
        [0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0],
        [0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0],
        [0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0],
        [0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1],
        [0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2],
        [0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2],
        [0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3],
        [0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3],
        [0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4],
        [0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4],
        [0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4],
        [0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5],
        [0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5],
        [0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5],
        [0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6],
        [0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6],
        [0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7],
        [0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7],
        [0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7],
        [0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8],
        [0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8]
    ];
    /**
     * @param {?=} elevation
     * @param {?=} color
     * @return {?}
     */
    function shadowBuilder(elevation, color) {
        if (elevation === void 0) {
            elevation = 2;
        }
        if (color === void 0) {
            color = '#000';
        }
        var /** @type {?} */ Color = chroma(color);
        var /** @type {?} */ colors = [
            Color.alpha(shadowKeyUmbraOpacity).css(),
            Color.alpha(shadowKeyPenumbraOpacity).css(),
            Color.alpha(shadowAmbientShadowOpacity).css()
        ];
        var /** @type {?} */ e = Shadows[elevation];
        // tslint:disable-next-line:max-line-length
        return "box-shadow:" + e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RandomId = /** @class */ (function () {
        function RandomId() {
        }
        Object.defineProperty(RandomId.prototype, "generate", {
            get: /**
             * @return {?}
             */ function () {
                var /** @type {?} */ id = (Math.random() + Date.now());
                return id;
            },
            enumerable: true,
            configurable: true
        });
        RandomId.decorators = [
            { type: i0.Injectable },
        ];
        return RandomId;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} el
     * @param {?} parentSelector
     * @return {?}
     */
    function getParents(el, parentSelector) {
        // If no parentSelector defined will bubble up all the way to *document*
        if (parentSelector === undefined) {
            parentSelector = 'body';
        }
        var /** @type {?} */ parents = [];
        var /** @type {?} */ p = el.parentNode;
        var /** @type {?} */ pxz = null;
        while (!pxz) {
            var /** @type {?} */ o = p;
            parents.push(o);
            p = o.parentNode;
            pxz = p.querySelector(parentSelector);
        }
        // parents.push(_parentSelector); // Push that parentSelector you wanted to stop at
        // console.log(parents[parents.length - 1]);
        return parents[parents.length - 1];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ THEME_VARIABLES = new i0.InjectionToken('ly.theme.variables');
    var /** @type {?} */ IS_CORE_THEME = new i0.InjectionToken('ly.is.root');
    var StyleMap = /** @class */ (function () {
        function StyleMap(themeName) {
            this.themeName = themeName;
        }
        return StyleMap;
    }());
    var ThemeVariables = /** @class */ (function () {
        function ThemeVariables() {
        }
        return ThemeVariables;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.
    var /** @type {?} */ hasV8BreakIterator = (typeof (Intl) !== 'undefined' && ( /** @type {?} */(Intl)).v8BreakIterator);
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */
    var Platform = /** @class */ (function () {
        function Platform() {
            /**
             * Layout Engines
             */
            this.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
            this.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
            // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
            this.BLINK = Platform.isBrowser &&
                (!!(( /** @type {?} */(window)).chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);
            // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
            // ensure that Webkit runs standalone and is not used as another engine's base.
            this.WEBKIT = Platform.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
            /**
             * Browsers and Platform Types
             */
            this.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !( /** @type {?} */(window)).MSStream;
            // It's difficult to detect the plain Gecko engine, because most of the browsers identify
            // them self as Gecko-like browsers and modify the userAgent's according to that.
            // Since we only cover one explicit Firefox case, we can simply check for Firefox
            // instead of having an unstable check for Gecko.
            this.FIREFOX = Platform.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
            // Trident on mobile adds the android platform to the userAgent to trick detections.
            this.ANDROID = Platform.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
            // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
            // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
            // Safari browser should also use Webkit as its layout engine.
            this.SAFARI = Platform.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        }
        Platform.isBrowser = typeof document === 'object' && !!document;
        return Platform;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyRootService = /** @class */ (function () {
        function LyRootService(_document, rendererFactory) {
            this.rendererFactory = rendererFactory;
            this.themeRootMap = new Map();
            this.themeMap = new Map();
            this.themes = new Map();
            this._styleMap = new Map();
            this.renderer = this.rendererFactory.createRenderer(null, null);
            var /** @type {?} */ container;
            if (Platform.isBrowser && (container = _document.querySelector('ly-core-theme'))) {
                this.rootContainer = container;
                // this._setUpStylesIfExist();
            }
            else {
                this.rootContainer = this.renderer.createElement('ly-core-theme');
                this.renderer.insertBefore(_document.body, this.rootContainer, _document.body.firstElementChild);
            }
            // setTimeout(() => this._setUpStylesIfExist(), 10000);
        }
        /**
         * @param {?} palette
         * @return {?}
         */
        LyRootService.prototype.registerTheme = /**
         * @param {?} palette
         * @return {?}
         */
            function (palette) {
                if (!this.themeMap.has(palette.name)) {
                    this.themeMap.set(palette.name, new Map());
                    this.themes.set(palette.name, palette);
                }
                return {
                    map: this.themeMap.get(palette.name),
                    palette: this.themes.get(palette.name)
                };
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LyRootService.prototype.getTheme = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.themes.get(name);
            };
        LyRootService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        // private _setUpStylesIfExist() {
        //   console.time('init');
        //   const list = this.rootContainer.childNodes;
        //   let index = 0;
        //   let styleElement: HTMLStyleElement;
        //   while (styleElement = list[index] as HTMLStyleElement) {
        //     const attribute = styleElement.attributes.item(0);
        //     const name = attribute.name;
        //     const id = attribute.value;
        //     this._styleMap.set(name, {
        //       id,
        //       styleElement
        //     });
        //     index++;
        //   }
        //   console.timeEnd('init');
        //   console.log(this._styleMap);
        // }
        /** @nocollapse */
        LyRootService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] },] },
                { type: i0.RendererFactory2, },
            ];
        };
        /** @nocollapse */ LyRootService.ngInjectableDef = i0.defineInjectable({ factory: function LyRootService_Factory() { return new LyRootService(i0.inject(i1.DOCUMENT), i0.inject(i0.RendererFactory2)); }, token: LyRootService, providedIn: "root" });
        return LyRootService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LY_GLOBAL_CONTRAST = new i0.InjectionToken('ly.global.contrast');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ THEME_CONFIG = new i0.InjectionToken('ly.theme.config.root');
    var /** @type {?} */ LY_THEME_CONFIG = new i0.InjectionToken('ly_theme_config');
    var /** @type {?} */ THEME_CONFIG_EXTRA = new i0.InjectionToken('ly.theme.config.extra');
    var /** @type {?} */ LY_THEME_NAME = new i0.InjectionToken('ly.theme.name');
    var LyThemeConfig = /** @class */ (function () {
        function LyThemeConfig() {
            this.themes = [];
        }
        return LyThemeConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var InvertMediaQuery = {
        No: 0,
        Yes: 1,
    };
    InvertMediaQuery[InvertMediaQuery.No] = "No";
    InvertMediaQuery[InvertMediaQuery.Yes] = "Yes";
    /**
     * @param {?} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function transformMediaQuery(media, invertMediaQuery) {
        if (invertMediaQuery === void 0) {
            invertMediaQuery = InvertMediaQuery.No;
        }
        if (media && invertMediaQuery === InvertMediaQuery.Yes) {
            var /** @type {?} */ newVal = media.split(',').map(function (_) { return "not " + _; });
            return newVal;
        }
        return media;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ classId = 0;
    var CoreTheme = /** @class */ (function () {
        function CoreTheme(themeConfig, rendererFactory, _document) {
            var _this = this;
            this.rendererFactory = rendererFactory;
            this._document = _document;
            this._themeMap = new Map();
            this._styleMap = new Map();
            this._styleCoreMap = new Map();
            if (!themeConfig) {
                throw new Error('LY_THEME_CONFIG undefined');
            }
            this.renderer = this.rendererFactory.createRenderer(null, null);
            if (Platform.isBrowser) {
                var /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
                var /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
                var /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
                if (primaryStyleContainer) {
                    ( /** @type {?} */(_document.body)).removeChild(mediaStyleContainer);
                    // mediaStyleContainer.innerHTML = '';
                    primaryStyleContainer.innerHTML = '';
                    secondaryStyleContainer.innerHTML = '';
                }
            }
            this.mediaStyleContainer = this.renderer.createElement('ly-media-style-container');
            this.primaryStyleContainer = this.renderer.createElement('ly-primary-style-container');
            this.secondaryStyleContainer = this.renderer.createElement('ly-secondary-style-container');
            this.renderer.insertBefore(_document.body, this.mediaStyleContainer, _document.body.firstChild);
            this.renderer.insertBefore(_document.body, this.primaryStyleContainer, this.mediaStyleContainer);
            this.renderer.insertBefore(_document.body, this.secondaryStyleContainer, this.primaryStyleContainer);
            this.setCoreStyle();
            if (themeConfig) {
                themeConfig.themes.forEach(function (item) {
                    _this.add(new item);
                });
            }
        }
        /**
         * add new theme
         * @param theme: ThemeConfig
         */
        /**
         * add new theme
         * @param {?} theme
         * @return {?}
         */
        CoreTheme.prototype.add = /**
         * add new theme
         * @param {?} theme
         * @return {?}
         */
            function (theme) {
                this._themeMap.set(theme.name, theme);
                this._styleMap.set(theme.name, new Map());
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CoreTheme.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this._themeMap.get(name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CoreTheme.prototype.getStyleMap = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this._styleMap.get(name);
            };
        /**
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
        CoreTheme.prototype.setUpStyle = /**
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
            function (key, styles, media, invertMediaQuery) {
                return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.primaryStyleContainer, media, invertMediaQuery);
            };
        /**
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
        CoreTheme.prototype.setUpStyleSecondary = /**
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
            function (key, styles, media, invertMediaQuery) {
                return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.secondaryStyleContainer, media, invertMediaQuery);
            };
        /**
         * @template T
         * @param {?} themeConfig
         * @param {?} key
         * @param {?} style
         * @param {?} mapStyles
         * @param {?} _for
         * @param {?} _in
         * @param {?=} _media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
        CoreTheme.prototype._ĸreateStyle = /**
         * @template T
         * @param {?} themeConfig
         * @param {?} key
         * @param {?} style
         * @param {?} mapStyles
         * @param {?} _for
         * @param {?} _in
         * @param {?=} _media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
            function (themeConfig, key, style, mapStyles, _for, _in, _media, invertMediaQuery) {
                if (mapStyles.has(key)) {
                    return mapStyles.get(key).id;
                }
                else {
                    var /** @type {?} */ id = "k" + (classId++).toString(36);
                    var /** @type {?} */ styleElement = this.renderer.createElement('style');
                    var /** @type {?} */ media = transformMediaQuery(_media, invertMediaQuery);
                    var /** @type {?} */ styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
                    var /** @type {?} */ saveIn = media ? this.mediaStyleContainer : _in;
                    this.renderer.appendChild(styleElement, styleContent);
                    this.renderer.appendChild(saveIn, styleElement);
                    if (i0.isDevMode()) {
                        this.renderer.setAttribute(styleElement, 'style_data', _for + "\u00B7\u00B7\u00B7" + id + "\u00B7\u00B7\u00B7" + key);
                    }
                    var /** @type {?} */ dataStyle = {
                        id: id,
                        style: style,
                        styleElement: styleElement,
                        media: media
                    };
                    mapStyles.set(key, dataStyle);
                    return id;
                }
            };
        /** #style */
        /**
         * #style
         * @template T
         * @param {?} themeConfig
         * @param {?} styles
         * @param {?} id
         * @param {?=} media
         * @return {?}
         */
        CoreTheme.prototype._createStyleContent = /**
         * #style
         * @template T
         * @param {?} themeConfig
         * @param {?} styles
         * @param {?} id
         * @param {?=} media
         * @return {?}
         */
            function (themeConfig, styles, id, media) {
                var /** @type {?} */ typf = typeof styles;
                if (typf === 'string') {
                    return toMedia("." + id + "{" + styles + "}", media);
                }
                else if (typf === 'function') {
                    return toMedia("." + id + "{" + (( /** @type {?} */(styles)))(themeConfig) + "}", media);
                }
                var /** @type {?} */ content = '';
                for (var /** @type {?} */ key$ in /** @type {?} */ (styles)) {
                    if (styles.hasOwnProperty(key$)) {
                        var /** @type {?} */ val = styles[key$];
                        var /** @type {?} */ text = typeof val === 'function' ? val(themeConfig) : val;
                        content += "." + id + key$ + "{" + text + "}";
                    }
                }
                return toMedia(content, media);
            };
        /**
         * @return {?}
         */
        CoreTheme.prototype.setCoreStyle = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ classname = this.setUpStyle('rootbody', {
                    '': function () {
                        return ("margin:0;");
                    },
                    ', *, *:after, *:before': function () {
                        return ("-webkit-box-sizing: border-box;" +
                            "-moz-box-sizing: border-box;" +
                            "box-sizing: border-box;");
                    }
                });
                this.renderer.addClass(this._document.body, classname);
            };
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
        CoreTheme.prototype.updateClassName = /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
            function (element, renderer, newClassname, oldClassname) {
                if (oldClassname) {
                    renderer.removeClass(element, oldClassname);
                }
                renderer.addClass(element, newClassname);
            };
        CoreTheme.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CoreTheme.ctorParameters = function () {
            return [
                { type: LyThemeConfig, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LY_THEME_CONFIG,] },] },
                { type: i0.RendererFactory2, },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] },] },
            ];
        };
        /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i1.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
        return CoreTheme;
    }());
    /**
     * Converter to media query if `media` is present
     * @param {?} text style content
     * @param {?=} media media query
     * @return {?}
     */
    function toMedia(text, media) {
        if (typeof media === 'string') {
            return "@media " + media + "{" + text + "}";
        }
        else if (Array.isArray(media)) {
            var /** @type {?} */ result_1 = '';
            media.forEach(function (_) { return result_1 += "@media " + _ + "{" + text + "}"; });
            return result_1;
        }
        return text;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyTheme2 = /** @class */ (function () {
        function LyTheme2(core, themeName) {
            this.core = core;
            console.log("new Theme: " + themeName);
            if (themeName) {
                this.setUpTheme(themeName);
            }
        }
        /**
         * @param {?} themeName
         * @return {?}
         */
        LyTheme2.prototype.setUpTheme = /**
         * @param {?} themeName
         * @return {?}
         */
            function (themeName) {
                if (!this.config) {
                    this.config = this.core.get(themeName);
                    this._styleMap = new Map();
                }
            };
        /**
         * @template T
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
        LyTheme2.prototype.setUpStyle = /**
         * @template T
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
            function (key, styles, media, invertMediaQuery) {
                var /** @type {?} */ name = this.config.name;
                return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.primaryStyleContainer, media, invertMediaQuery);
            };
        /**
         * @template T
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
        LyTheme2.prototype.setUpStyleSecondary = /**
         * @template T
         * @param {?} key
         * @param {?} styles
         * @param {?=} media
         * @param {?=} invertMediaQuery
         * @return {?}
         */
            function (key, styles, media, invertMediaQuery) {
                var /** @type {?} */ name = this.config.name;
                return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.secondaryStyleContainer, media, invertMediaQuery);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LyTheme2.prototype.colorOf = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return get(this.config, value);
            };
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
        LyTheme2.prototype.updateClassName = /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
            function (element, renderer, newClassname, oldClassname) {
                this.core.updateClassName(element, renderer, newClassname, oldClassname);
            };
        /**
         * @param {?} nam
         * @return {?}
         */
        LyTheme2.prototype.setTheme = /**
         * @param {?} nam
         * @return {?}
         */
            function (nam) {
                var _this = this;
                this.config = this.core.get(nam);
                this._styleMap.forEach(function (dataStyle, key) {
                    console.log(key);
                    dataStyle.styleElement.innerText = _this.core._createStyleContent(_this.config, dataStyle.style, dataStyle.id);
                });
            };
        LyTheme2.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        LyTheme2.ctorParameters = function () {
            return [
                { type: CoreTheme, },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LY_THEME_NAME,] },] },
            ];
        };
        return LyTheme2;
    }());
    /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function get(obj, path) {
        var /** @type {?} */ _path = path instanceof Array ? path : path.split(':');
        for (var /** @type {?} */ i = 0; i < _path.length; i++) {
            obj = obj[_path[i]] || path;
        }
        return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(_viewRef) {
            this._viewRef = _viewRef;
            this.ngTranscludeChange = new i0.EventEmitter();
            this.viewRef = _viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngTransclude;
            },
            set: /**
             * @param {?} templateRef
             * @return {?}
             */ function (templateRef) {
                this._ngTransclude = templateRef;
                if (templateRef) {
                    this.viewRef.createEmbeddedView(templateRef);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgTranscludeDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.ngTranscludeChange.emit(true);
            };
        /**
         * @return {?}
         */
        NgTranscludeDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.viewRef.detach();
            };
        NgTranscludeDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngTransclude]'
                    },] },
        ];
        /** @nocollapse */
        NgTranscludeDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef, },
            ];
        };
        NgTranscludeDirective.propDecorators = {
            "ngTransclude": [{ type: i0.Input },],
            "ngTranscludeChange": [{ type: i0.Output },],
        };
        return NgTranscludeDirective;
    }());
    var NgTranscludeModule = /** @class */ (function () {
        function NgTranscludeModule() {
        }
        NgTranscludeModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [NgTranscludeDirective],
                        declarations: [NgTranscludeDirective]
                    },] },
        ];
        return NgTranscludeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} obj
     * @return {?}
     */
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    function exactPosition(elem) {
        var /** @type {?} */ docElem, /** @type {?} */ win, /** @type {?} */ box = { top: 0, left: 0 };
        var /** @type {?} */ doc = elem && elem.ownerDocument;
        docElem = doc.documentElement;
        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function toBoolean(value) {
        return value != null && "" + value !== 'false';
    }
    /**
     * @deprecated
     * @return {?}
     */
    function IsBoolean() {
        return function (target, key) {
            var /** @type {?} */ definition = Object.getOwnPropertyDescriptor(target, key);
            if (definition) {
                Object.defineProperty(target, key, {
                    get: definition.get,
                    set: function (newValue) {
                        definition.set(toBoolean(newValue));
                    },
                    enumerable: true,
                    configurable: true
                });
            }
            else {
                Object.defineProperty(target, key, {
                    get: function () {
                        return this['__' + key];
                    },
                    set: function (newValue) {
                        this['__' + key] = toBoolean(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyShadowService = /** @class */ (function () {
        function LyShadowService() {
            /**
             * Default elevation
             */
            this.elevation = 1;
        }
        /** demo: setShadow(...[elevation, color]...) */
        /**
         * demo: setShadow(...[elevation, color]...)
         * @param {?} theme
         * @param {?} elementRef
         * @param {?} renderer
         * @param {?} val
         * @param {?=} oldClassName
         * @return {?}
         */
        LyShadowService.prototype.setShadow = /**
         * demo: setShadow(...[elevation, color]...)
         * @param {?} theme
         * @param {?} elementRef
         * @param {?} renderer
         * @param {?} val
         * @param {?=} oldClassName
         * @return {?}
         */
            function (theme, elementRef, renderer, val, oldClassName) {
                var /** @type {?} */ keys;
                var /** @type {?} */ elevation;
                var /** @type {?} */ color = 'colorShadow';
                if (val) {
                    keys = val.join('');
                    elevation = val[0];
                    color = val[1] || color;
                }
                else {
                    keys = "" + this.elevation + color;
                    elevation = this.elevation;
                }
                var /** @type {?} */ classname = theme.setUpStyle("shadow" + keys, { '': function () {
                        return "" + shadowBuilder(elevation, theme.colorOf(color));
                    } });
                theme.updateClassName(elementRef.nativeElement, renderer, classname, oldClassName);
                return classname;
            };
        LyShadowService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */ LyShadowService.ngInjectableDef = i0.defineInjectable({ factory: function LyShadowService_Factory() { return new LyShadowService(); }, token: LyShadowService, providedIn: "root" });
        return LyShadowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyBgColorAndRaised = /** @class */ (function () {
        function LyBgColorAndRaised(theme, renderer, elementRef, shadow, contrast) {
            this.theme = theme;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.shadow = shadow;
            this.contrast = contrast;
            this.elevation = 3;
        }
        Object.defineProperty(LyBgColorAndRaised.prototype, "bg", {
            get: /**
             * @return {?}
             */ function () {
                return this._bg;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._bg = value;
                // this._cssBg = this.theme.colorOf(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBgColorAndRaised.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._color = value;
                // this._cssColor = this.theme.colorOf(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBgColorAndRaised.prototype, "raised", {
            get: /**
             * @return {?}
             */ function () { return this._raisedState; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) { this._raisedState = toBoolean(val); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyBgColorAndRaised.prototype.setAutoContrast = /**
         * @return {?}
         */
            function () {
                this.contrast = true;
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LyBgColorAndRaised.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                var /** @type {?} */ newClassName;
                /**
                 * ~
                 */
                var /** @type {?} */ raisedĸey = this._raisedState === true ? 'raised' : '';
                var /** @type {?} */ key = '';
                if ((this.contrast && !this.color || this.color === 'auto') && this.bg) {
                    key = "contrast" + this.bg + this._raisedState + this.elevation;
                    newClassName = this.theme.setUpStyle("ly-" + key, { '': this.contrastStyle.bind(this) });
                }
                else if (this.bg && this.color) {
                    key = "b&\u0138" + this.bg + this.color + this._raisedState + this.elevation;
                    newClassName = this.theme.setUpStyle("ly-" + key, { '': this.bgColorStyle.bind(this) });
                }
                else if (this.raised && !this.bg) {
                    key = raisedĸey + this.color || '';
                    newClassName = this.theme.setUpStyle("ly-" + key, { '': function () {
                            var /** @type {?} */ styles = "background-color:" + _this.theme.config["background"].primary + ";";
                            var /** @type {?} */ color = '';
                            var /** @type {?} */ colorShadow;
                            if (_this.color) {
                                color = _this.theme.colorOf(_this.color);
                                colorShadow = color;
                                styles += "color:" + color + ";";
                            }
                            else {
                                colorShadow = _this.theme.config["colorShadow"];
                            }
                            if (_this._raisedState) {
                                styles += shadowBuilder(_this.elevation, colorShadow);
                            }
                            return styles;
                        } });
                }
                else if (this.bg || this.color) {
                    var /** @type {?} */ changeKey_1 = this.bg ? ['bg', 'background', this.bg] : ['ĸ', 'color', this.color];
                    var /** @type {?} */ color = changeKey_1[2];
                    key = "" + changeKey_1[0] + color + this._raisedState + this.elevation;
                    /** Create style */
                    newClassName = this.theme.setUpStyle("ly-" + key, { '': function () {
                            var /** @type {?} */ _color = _this.theme.colorOf(_this.bg || _this.color);
                            var /** @type {?} */ styles = changeKey_1[1] + ":" + _color + ";";
                            if (_this._raisedState) {
                                styles += shadowBuilder(_this.elevation, _color);
                            }
                            return styles;
                        } });
                }
                else {
                    key = "raised" + this._raisedState + this.elevation;
                    newClassName = this.theme.setUpStyle("ly-" + key, { '': function () {
                            if (_this._raisedState) {
                                return shadowBuilder(_this.elevation, _this.theme.config["colorShadow"]);
                            }
                            else {
                                return shadowBuilder(0, _this.theme.config["colorShadow"]);
                            }
                        } });
                }
                this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, newClassName, this._currentClassName);
                this._currentClassName = newClassName;
            };
        /**
         * @return {?}
         */
        LyBgColorAndRaised.prototype.contrastStyle = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
                this._color = this.theme.colorOf(this.bg + ":contrast");
                var /** @type {?} */ styles = "background:" + cssBg + ";color:" + this._color + ";";
                if (this._raisedState) {
                    styles += shadowBuilder(this.elevation, cssBg);
                }
                return styles;
            };
        /**
         * @return {?}
         */
        LyBgColorAndRaised.prototype.bgColorStyle = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
                var /** @type {?} */ cssColor = this.theme.colorOf(this.color);
                var /** @type {?} */ styles = "background:" + cssBg + ";color:" + cssColor + ";";
                if (this._raisedState) {
                    styles += shadowBuilder(this.elevation, cssBg);
                }
                return styles;
            };
        LyBgColorAndRaised.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[bg], [color], [raised]'
                    },] },
        ];
        /** @nocollapse */
        LyBgColorAndRaised.ctorParameters = function () {
            return [
                { type: LyTheme2, },
                { type: i0.Renderer2, },
                { type: i0.ElementRef, },
                { type: LyShadowService, },
                { type: undefined, decorators: [{ type: i0.Inject, args: [LY_GLOBAL_CONTRAST,] }, { type: i0.Optional },] },
            ];
        };
        LyBgColorAndRaised.propDecorators = {
            "bg": [{ type: i0.Input },],
            "color": [{ type: i0.Input },],
            "raised": [{ type: i0.Input },],
            "elevation": [{ type: i0.Input },],
        };
        return LyBgColorAndRaised;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyNewRaised = /** @class */ (function () {
        function LyNewRaised(theme, elementRef, renderer, shadow) {
            this.theme = theme;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.shadow = shadow;
            this.elevation = 3;
        }
        Object.defineProperty(LyNewRaised.prototype, "newRaised", {
            set: /**
             * Default raised
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.currentClassName = this.shadow.setShadow(this.theme, this.elementRef, this.renderer, [value[0] || this.elevation, value[1]], this.currentClassName);
            },
            enumerable: true,
            configurable: true
        });
        LyNewRaised.decorators = [
            { type: i0.Directive, args: [{ selector: ':not([raised])[newRaised]' },] },
        ];
        /** @nocollapse */
        LyNewRaised.ctorParameters = function () {
            return [
                { type: LyTheme2, },
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: LyShadowService, },
            ];
        };
        LyNewRaised.propDecorators = {
            "newRaised": [{ type: i0.Input },],
        };
        return LyNewRaised;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyThemeContainer = /** @class */ (function () {
        function LyThemeContainer(theme, elementRef, renderer) {
            this.theme = theme;
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        Object.defineProperty(LyThemeContainer.prototype, "lyTheme", {
            get: /**
             * @return {?}
             */ function () {
                return this._lyTheme;
            },
            set: /**
             * set theme
             * @param {?} nam
             * @return {?}
             */ function (nam) {
                console.log("this.theme.config.name", this.theme.config.name, nam);
                this._lyTheme = nam;
                this.theme.setUpTheme(name);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyThemeContainer.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._setContainerStyle(this.elementRef.nativeElement, this.renderer);
            };
        /**
         * @param {?} element
         * @param {?} renderer
         * @return {?}
         */
        LyThemeContainer.prototype._setContainerStyle = /**
         * @param {?} element
         * @param {?} renderer
         * @return {?}
         */
            function (element, renderer) {
                var _this = this;
                var /** @type {?} */ classname = this.theme.setUpStyle("theme:" + this.theme.config.name, {
                    '': function () {
                        return ("background-color:" + _this.theme.config["background"].default + ";" +
                            ("color:" + _this.theme.config["text"].default + ";") +
                            ("font-family:" + _this.theme.config["typography"].fontFamily + ";"));
                    }
                });
                renderer.addClass(element, classname);
            };
        LyThemeContainer.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lyTheme]',
                        providers: [LyTheme2],
                        exportAs: 'lyTheme'
                    },] },
        ];
        /** @nocollapse */
        LyThemeContainer.ctorParameters = function () {
            return [
                { type: LyTheme2, },
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
            ];
        };
        LyThemeContainer.propDecorators = {
            "lyTheme": [{ type: i0.Input },],
            "shared": [{ type: i0.Input },],
        };
        return LyThemeContainer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyCommonModule = /** @class */ (function () {
        function LyCommonModule() {
        }
        LyCommonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LyBgColorAndRaised, LyNewRaised, LyThemeContainer],
                        exports: [LyBgColorAndRaised, LyNewRaised, LyThemeContainer],
                        providers: [
                            { provide: LY_GLOBAL_CONTRAST, useValue: false }
                        ]
                    },] },
        ];
        return LyCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyOverlayContainer = /** @class */ (function () {
        function LyOverlayContainer() {
            if (Platform.isBrowser) {
                var /** @type {?} */ container = document.createElement('ly-overlay-container');
                document.body.appendChild(container);
                this._containerElement = container;
            }
        }
        Object.defineProperty(LyOverlayContainer.prototype, "containerElement", {
            get: /**
             * @return {?}
             */ function () {
                return this._containerElement;
            },
            enumerable: true,
            configurable: true
        });
        LyOverlayContainer.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        LyOverlayContainer.ctorParameters = function () { return []; };
        return LyOverlayContainer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DomService = /** @class */ (function () {
        function DomService(componentFactoryResolver, overlayContainer) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.overlayContainer = overlayContainer;
        }
        /**
         * @template T
         * @param {?} _hostViewContainerRef
         * @param {?} component
         * @param {?} template
         * @return {?}
         */
        DomService.prototype.attach = /**
         * @template T
         * @param {?} _hostViewContainerRef
         * @param {?} component
         * @param {?} template
         * @return {?}
         */
            function (_hostViewContainerRef, component, template) {
                var _this = this;
                var /** @type {?} */ viewRef = _hostViewContainerRef.createEmbeddedView(template);
                viewRef.detectChanges();
                this._viewContainerRef = _hostViewContainerRef;
                viewRef.rootNodes.forEach(function (rootNode) { return _this.addChild(rootNode); });
            };
        /**
         * @param {?} child
         * @return {?}
         */
        DomService.prototype.addChild = /**
         * @param {?} child
         * @return {?}
         */
            function (child) {
                this.overlayContainer.containerElement.appendChild(child);
            };
        /**
         * @param {?} componentRef
         * @return {?}
         */
        DomService.prototype.getDomElementFromComponentRef = /**
         * @param {?} componentRef
         * @return {?}
         */
            function (componentRef) {
                return /** @type {?} */ (( /** @type {?} */(componentRef.hostView))
                    .rootNodes[0]);
            };
        /**
         * @param {?} componentRef
         * @param {?} delay
         * @return {?}
         */
        DomService.prototype.destroyRef = /**
         * @param {?} componentRef
         * @param {?} delay
         * @return {?}
         */
            function (componentRef, delay) {
                var _this = this;
                setTimeout(function () {
                    if (_this._viewContainerRef) {
                        _this._viewContainerRef.detach();
                        _this._viewContainerRef.clear();
                    }
                }, delay);
            };
        DomService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        DomService.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver, },
                { type: LyOverlayContainer, },
            ];
        };
        return DomService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} parentContainer
     * @return {?}
     */
    function LY_OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
        return parentContainer || new LyOverlayContainer();
    }
    var /** @type {?} */ LY_OVERLAY_CONTAINER_PROVIDER = {
        // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
        provide: LyOverlayContainer,
        deps: [[new i0.Optional(), new i0.SkipSelf(), LyOverlayContainer]],
        useFactory: LY_OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    var LxDomModule = /** @class */ (function () {
        function LxDomModule() {
        }
        LxDomModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        providers: [[DomService, LY_OVERLAY_CONTAINER_PROVIDER]]
                    },] },
        ];
        return LxDomModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var FocusStatus = {
        /**mouse and/or touch*/
        DEFAULT: 'default',
        /** keyboard and/or program*/
        KEYBOARD: 'keyboard',
    };
    var LyFocusState = /** @class */ (function () {
        function LyFocusState(elementRef, _ngZone, _renderer, _cd) {
            var _this = this;
            this._ngZone = _ngZone;
            this._renderer = _renderer;
            this.stateMap = new Map();
            this._eventHandlers = new Map();
            this._stateSubject = new rxjs.Subject();
            this.lyFocusChange = new i0.EventEmitter();
            this._eventOptions = /** @type {?} */ ({ passive: true });
            if (Platform.isBrowser) {
                this._eventHandlers
                    .set('focus', this.on.bind(this))
                    .set('blur', this.on.bind(this))
                    .set('touchstart', this.on.bind(this))
                    .set('mousedown', this.on.bind(this));
                var /** @type {?} */ element = elementRef.nativeElement;
                this.setTriggerElement(element);
                var /** @type {?} */ ob = this._stateSubject.asObservable();
                this._stateSubscription = ob
                    // .debounceTime(111)
                    .pipe(operators.debounceTime(111))
                    .subscribe(function (e) {
                    _this.state = e;
                    _this._updateClass();
                    _this.lyFocusChange.emit(e);
                });
            }
        }
        /**
         * @return {?}
         */
        LyFocusState.prototype._updateState = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ state;
                if (this.stateMap.has('blur')) {
                    this.stateMap.clear();
                }
                else if (this.stateMap.has('focus') && this.stateMap.has('mousedown') || this.stateMap.has('focus') && this.stateMap.has('touchstart')) {
                    state = FocusStatus.DEFAULT;
                }
                else if (this.stateMap.has('focus')) {
                    state = FocusStatus.KEYBOARD;
                }
                this._stateSubject.next(state);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyFocusState.prototype.on = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.stateMap.set(event.type, true);
                this._updateState();
            };
        /**
         * @return {?}
         */
        LyFocusState.prototype._updateClass = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ element = this._containerElement;
                var /** @type {?} */ state = this.state;
                var /** @type {?} */ toggleClass = function (className, shouldSet) { return shouldSet ? _this._renderer.addClass(element, className) : _this._renderer.removeClass(element, className); };
                toggleClass("ly-focused", !!state);
                for (var /** @type {?} */ key in FocusStatus) {
                    if (FocusStatus.hasOwnProperty(key)) {
                        var /** @type {?} */ className = FocusStatus[key];
                        toggleClass("ly-" + className + "-focused", state === className);
                    }
                }
            };
        /**
         * @param {?} element
         * @return {?}
         */
        LyFocusState.prototype.setTriggerElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var _this = this;
                if (this._containerElement) {
                    this._eventHandlers.forEach(function (fn, type) {
                        _this._containerElement.removeEventListener(type, fn, _this._eventOptions);
                    });
                }
                if (element) {
                    this._ngZone.runOutsideAngular(function () {
                        return _this._eventHandlers.forEach(function (fn, type) {
                            return element.addEventListener(type, fn, _this._eventOptions);
                        });
                    });
                }
                this._containerElement = element;
            };
        /**
         * @return {?}
         */
        LyFocusState.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (Platform.isBrowser) {
                    this._stateSubscription.unsubscribe();
                    this.setTriggerElement(null);
                }
            };
        LyFocusState.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lyFocusState]',
                        exportAs: 'lyFocusState'
                    },] },
        ];
        /** @nocollapse */
        LyFocusState.ctorParameters = function () {
            return [
                { type: i0.ElementRef, },
                { type: i0.NgZone, },
                { type: i0.Renderer2, },
                { type: i0.ChangeDetectorRef, },
            ];
        };
        LyFocusState.propDecorators = {
            "lyFocusChange": [{ type: i0.Output },],
        };
        return LyFocusState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyFocusStateModule = /** @class */ (function () {
        function LyFocusStateModule() {
        }
        LyFocusStateModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [LyFocusState],
                        exports: [LyFocusState]
                    },] },
        ];
        return LyFocusStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ AUI_VERSION = '1.7.0-beta.3vwyc';
    var /** @type {?} */ AUI_LAST_UPDATE = '2018-07-29T19:10:45.188Z';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LY_HAMMER_OPTIONS = new i0.InjectionToken('LY_HAMMER_OPTIONS');
    var LyHammerGestureConfig = /** @class */ (function (_super) {
        __extends(LyHammerGestureConfig, _super);
        function LyHammerGestureConfig(_hammerOptions) {
            var _this = _super.call(this) || this;
            _this._hammerOptions = _hammerOptions;
            _this._hammer = typeof window !== 'undefined' ? ( /** @type {?} */(window)).Hammer : null;
            _this.events = _this._hammer ? [
                'slide',
                'slidestart',
                'slideend',
                'slideright',
                'slideleft'
            ] : [];
            return _this;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        LyHammerGestureConfig.prototype.buildHammer = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                // if (Platform.isBrowser) {
                //   const newClass = this.coreTheme.setUpStyle('k-hammer-css', {
                //     '': () => (
                //       `user-select: none;` +
                //       `-webkit-user-drag: none;` +
                //       `-webkit-tap-highlight-color: rgba(0, 0, 0, 0);`
                //     )
                //   });
                //   element.classList.add(newClass);
                // }
                var /** @type {?} */ mc = new this._hammer(element, this._hammerOptions || undefined);
                var /** @type {?} */ pan = new this._hammer.Pan();
                var /** @type {?} */ swipe = new this._hammer.Swipe();
                var /** @type {?} */ slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
                slide.recognizeWith(swipe);
                pan.recognizeWith(swipe);
                // Add customized gestures to Hammer manager
                mc.add([swipe, pan, slide]);
                return mc;
            };
        /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */
        LyHammerGestureConfig.prototype._createRecognizer = /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */
            function (base, options) {
                var inheritances = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    inheritances[_i - 2] = arguments[_i];
                }
                var /** @type {?} */ recognizer = new (base.constructor)(options);
                inheritances.push(base);
                inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
                return recognizer;
            };
        LyHammerGestureConfig.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        LyHammerGestureConfig.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LY_HAMMER_OPTIONS,] },] },
            ];
        };
        return LyHammerGestureConfig;
    }(platformBrowser.HammerGestureConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyThemeModule = /** @class */ (function () {
        function LyThemeModule() {
        }
        /**
         * @param {?} themeName
         * @return {?}
         */
        LyThemeModule.setTheme = /**
         * @param {?} themeName
         * @return {?}
         */
            function (themeName) {
                return {
                    ngModule: LyThemeModule,
                    providers: [
                        LyTheme2,
                        { provide: LY_THEME_NAME, useValue: themeName }
                    ]
                };
            };
        LyThemeModule.decorators = [
            { type: i0.NgModule },
        ];
        return LyThemeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyCoreStyles = /** @class */ (function () {
        function LyCoreStyles(coreTheme) {
            this.coreTheme = coreTheme;
            this.classes = {
                /** Position absolute */
                Fill: this.coreTheme.setUpStyle('k-absolute', {
                    '': function () {
                        return ("position: absolute;" +
                            "top: 0;" +
                            "bottom: 0;" +
                            "left: 0;" +
                            "right: 0;");
                    }
                }),
                VisuallyHidden: this.coreTheme.setUpStyle('k-visually-hidden', {
                    '': function () {
                        return ("border: 0;" +
                            "clip: rect(0 0 0 0);" +
                            "height: 1px;" +
                            "margin: -1px;" +
                            "overflow: hidden;" +
                            "padding: 0;" +
                            "position: absolute;" +
                            "width: 1px;" +
                            "outline: 0;" +
                            "-webkit-appearance: none;" +
                            "-moz-appearance: none;");
                    }
                })
            };
        }
        LyCoreStyles.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        LyCoreStyles.ctorParameters = function () {
            return [
                { type: CoreTheme, },
            ];
        };
        /** @nocollapse */ LyCoreStyles.ngInjectableDef = i0.defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(i0.inject(CoreTheme)); }, token: LyCoreStyles, providedIn: "root" });
        return LyCoreStyles;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Undefined = /** @class */ (function () {
        function Undefined() {
        }
        return Undefined;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyStyleUtils = /** @class */ (function () {
        function LyStyleUtils() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        LyStyleUtils.prototype.pxToRem = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ size = this.typography.fontSize / 14;
                return value / this.typography.htmlFontSize * size + "rem";
            };
        return LyStyleUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.getContrastYIQ = getContrastYIQ;
    exports.shadowBuilder = shadowBuilder;
    exports.Shadows = Shadows;
    exports.RandomId = RandomId;
    exports.getParents = getParents;
    exports.THEME_VARIABLES = THEME_VARIABLES;
    exports.IS_CORE_THEME = IS_CORE_THEME;
    exports.StyleMap = StyleMap;
    exports.ThemeVariables = ThemeVariables;
    exports.LyRootService = LyRootService;
    exports.Platform = Platform;
    exports.LyCommonModule = LyCommonModule;
    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.NgTranscludeModule = NgTranscludeModule;
    exports.exactPosition = exactPosition;
    exports.toBoolean = toBoolean;
    exports.IsBoolean = IsBoolean;
    exports.DomService = DomService;
    exports.LY_OVERLAY_CONTAINER_PROVIDER_FACTORY = LY_OVERLAY_CONTAINER_PROVIDER_FACTORY;
    exports.LY_OVERLAY_CONTAINER_PROVIDER = LY_OVERLAY_CONTAINER_PROVIDER;
    exports.LxDomModule = LxDomModule;
    exports.LyFocusStateModule = LyFocusStateModule;
    exports.FocusStatus = FocusStatus;
    exports.LyFocusState = LyFocusState;
    exports.AUI_VERSION = AUI_VERSION;
    exports.AUI_LAST_UPDATE = AUI_LAST_UPDATE;
    exports.LY_HAMMER_OPTIONS = LY_HAMMER_OPTIONS;
    exports.LyHammerGestureConfig = LyHammerGestureConfig;
    exports.LY_GLOBAL_CONTRAST = LY_GLOBAL_CONTRAST;
    exports.LyBgColorAndRaised = LyBgColorAndRaised;
    exports.LyShadowService = LyShadowService;
    exports.CoreTheme = CoreTheme;
    exports.THEME_CONFIG = THEME_CONFIG;
    exports.LY_THEME_CONFIG = LY_THEME_CONFIG;
    exports.THEME_CONFIG_EXTRA = THEME_CONFIG_EXTRA;
    exports.LY_THEME_NAME = LY_THEME_NAME;
    exports.LyThemeConfig = LyThemeConfig;
    exports.LyThemeContainer = LyThemeContainer;
    exports.LyTheme2 = LyTheme2;
    exports.LyThemeModule = LyThemeModule;
    exports.LyCoreStyles = LyCoreStyles;
    exports.Undefined = Undefined;
    exports.transformMediaQuery = transformMediaQuery;
    exports.InvertMediaQuery = InvertMediaQuery;
    exports.LyStyleUtils = LyStyleUtils;
    exports.ɵb = LyOverlayContainer;
    exports.ɵa = LyNewRaised;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2x5L3JhbmRvbS1pZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wYXJlbnRzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Jvb3Quc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb250cmFzdC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcmFpc2VkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLG51bGwsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYW5kb21JZCB7XG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaWQ6IGFueSA9IChNYXRoLnJhbmRvbSgpICsgRGF0ZS5ub3coKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbDogSFRNTEVsZW1lbnQsIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHJcbiAgLy8gSWYgbm8gcGFyZW50U2VsZWN0b3IgZGVmaW5lZCB3aWxsIGJ1YmJsZSB1cCBhbGwgdGhlIHdheSB0byAqZG9jdW1lbnQqXHJcbiAgaWYgKHBhcmVudFNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50U2VsZWN0b3IgPSAnYm9keSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgbGV0IHA6IGFueSA9IGVsLnBhcmVudE5vZGU7XHJcbiAgbGV0IHB4ejogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIHdoaWxlICghcHh6KSB7XHJcbiAgICAgIGNvbnN0IG8gPSBwO1xyXG4gICAgICBwYXJlbnRzLnB1c2gobyk7XHJcbiAgICAgIHAgPSBvLnBhcmVudE5vZGU7XHJcbiAgICAgIHB4eiA9IHAucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIC8vIHBhcmVudHMucHVzaChfcGFyZW50U2VsZWN0b3IpOyAvLyBQdXNoIHRoYXQgcGFyZW50U2VsZWN0b3IgeW91IHdhbnRlZCB0byBzdG9wIGF0XHJcbiAgLy8gY29uc29sZS5sb2cocGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdKTtcclxuICByZXR1cm4gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlRGF0YSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhbGV0dGVWYXJpYWJsZXM+KCdseS50aGVtZS52YXJpYWJsZXMnKTtcclxuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZU1hcCB7XHJcbiAgcHJpdmF0ZSBzdHlsZU1hcDogTWFwPHN0cmluZywgU3R5bGVEYXRhPjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lTmFtZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgY2xhc3MgVGhlbWVWYXJpYWJsZXMge1xyXG4gIC8qKiBUaGVtZSBuYW1lICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBzY2hlbWU/OiBzdHJpbmc7XHJcbiAgY29sb3JTY2hlbWVzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXHJcbi8vIGlzIG5lY2Vzc2FyeSB0byBkZXRlY3QgYWxsIEJsaW5rIGJhc2VkIGJyb3dzZXJzLlxyXG5jb25zdCBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mKEludGwpICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxyXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xyXG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xyXG4gIEVER0UgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgVFJJREVOVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXHJcbiAgQkxJTksgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQpO1xyXG5cclxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cclxuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXHJcbiAgV0VCS0lUID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuQkxJTksgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvKiogQnJvd3NlcnMgYW5kIFBsYXRmb3JtIFR5cGVzICovXHJcbiAgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XHJcblxyXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XHJcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXHJcbiAgLy8gU2luY2Ugd2Ugb25seSBjb3ZlciBvbmUgZXhwbGljaXQgRmlyZWZveCBjYXNlLCB3ZSBjYW4gc2ltcGx5IGNoZWNrIGZvciBGaXJlZm94XHJcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxyXG4gIEZJUkVGT1ggPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhmaXJlZm94fG1pbmVmaWVsZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cclxuICBBTkRST0lEID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9hbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcclxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XHJcbiAgLy8gU2FmYXJpIGJyb3dzZXIgc2hvdWxkIGFsc28gdXNlIFdlYmtpdCBhcyBpdHMgbGF5b3V0IGVuZ2luZS5cclxuICBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgdGhpcy5XRUJLSVQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdHlsZURhdGEsIERhdGFTdHlsZSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Um9vdFNlcnZpY2Uge1xuICAvKiogU3R5bGUgQ29udGFpbmVyICovXG4gIHJvb3RDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICB0aGVtZVJvb3RNYXAgPSBuZXcgTWFwPHN0cmluZywgU3R5bGVEYXRhPigpO1xuICBwcml2YXRlIHRoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIFN0eWxlRGF0YT4+KCk7XG4gIHByaXZhdGUgdGhlbWVzID0gbmV3IE1hcDxzdHJpbmcsIHtba2V5OiBzdHJpbmddOiBhbnl9PigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICBsZXQgY29udGFpbmVyOiBhbnk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiAoY29udGFpbmVyID0gX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2x5LWNvcmUtdGhlbWUnKSkpIHtcbiAgICAgIHRoaXMucm9vdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIC8vIHRoaXMuX3NldFVwU3R5bGVzSWZFeGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvb3RDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LWNvcmUtdGhlbWUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnJvb3RDb250YWluZXIsIF9kb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3NldFVwU3R5bGVzSWZFeGlzdCgpLCAxMDAwMCk7XG4gIH1cbiAgcmVnaXN0ZXJUaGVtZShwYWxldHRlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHBhbGV0dGUubmFtZSkpIHtcbiAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHBhbGV0dGUubmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMudGhlbWVzLnNldChwYWxldHRlLm5hbWUsIHBhbGV0dGUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbWFwOiB0aGlzLnRoZW1lTWFwLmdldChwYWxldHRlLm5hbWUpLFxuICAgICAgcGFsZXR0ZTogdGhpcy50aGVtZXMuZ2V0KHBhbGV0dGUubmFtZSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVzLmdldChuYW1lKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgX3NldFVwU3R5bGVzSWZFeGlzdCgpIHtcbiAgLy8gICBjb25zb2xlLnRpbWUoJ2luaXQnKTtcbiAgLy8gICBjb25zdCBsaXN0ID0gdGhpcy5yb290Q29udGFpbmVyLmNoaWxkTm9kZXM7XG4gIC8vICAgbGV0IGluZGV4ID0gMDtcbiAgLy8gICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MU3R5bGVFbGVtZW50O1xuICAvLyAgIHdoaWxlIChzdHlsZUVsZW1lbnQgPSBsaXN0W2luZGV4XSBhcyBIVE1MU3R5bGVFbGVtZW50KSB7XG4gIC8vICAgICBjb25zdCBhdHRyaWJ1dGUgPSBzdHlsZUVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKDApO1xuICAvLyAgICAgY29uc3QgbmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAvLyAgICAgY29uc3QgaWQgPSBhdHRyaWJ1dGUudmFsdWU7XG4gIC8vICAgICB0aGlzLl9zdHlsZU1hcC5zZXQobmFtZSwge1xuICAvLyAgICAgICBpZCxcbiAgLy8gICAgICAgc3R5bGVFbGVtZW50XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGluZGV4Kys7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUudGltZUVuZCgnaW5pdCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuX3N0eWxlTWFwKTtcbiAgLy8gfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTFlfR0xPQkFMX0NPTlRSQVNUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdseS5nbG9iYWwuY29udHJhc3QnKTtcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLnJvb3QnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlUaGVtZUNvbmZpZz4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IFRIRU1FX0NPTkZJR19FWFRSQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUaGVtZUNvbmZpZyB8IFRoZW1lQ29uZmlnW10+KCdseS50aGVtZS5jb25maWcuZXh0cmEnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzOiBhbnlbXSA9IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUSEVNRV9DT05GSUcsIFRoZW1lQ29uZmlnLCBUSEVNRV9DT05GSUdfRVhUUkEsIExZX1RIRU1FX0NPTkZJRywgTHlUaGVtZUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0eWxlQ29udGVudCwgU3R5bGVEYXRhLCBEYXRhU3R5bGUsIFN0eWxlLCBNdWx0aXBsZVN0eWxlcyB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5LCB0cmFuc2Zvcm1NZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxubGV0IGNsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVDb3JlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgbWVkaWFTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJpbWFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByaW1hcnlTdHlsZUNvbnRhaW5lcikge1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChtZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gbWVkaWFTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJpbWFyeVN0eWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5zZXRDb3JlU3R5bGUoKTtcbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIHRoZW1lQ29uZmlnLnRoZW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZChuZXcgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lQ29uZmlnXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICBzZXRVcFN0eWxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8OEwrhyZWF0ZVN0eWxlKHVuZGVmaW5lZCwga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlQ29yZU1hcCwgJ3Jvb3QnLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/DhMK4cmVhdGVTdHlsZTxUPih0aGVtZUNvbmZpZzogYW55LCBrZXksIHN0eWxlOiBTdHlsZTxUPiwgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+LCBfZm9yOiBzdHJpbmcsIF9pbjogYW55LCBfbWVkaWE/OiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKG1hcFN0eWxlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIG1hcFN0eWxlcy5nZXQoa2V5KS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWQgPSBgayR7KGNsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBjb25zdCBtZWRpYSA9IHRyYW5zZm9ybU1lZGlhUXVlcnkoX21lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgICAgIGNvbnN0IHN0eWxlQ29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWcsIHN0eWxlLCBpZCwgbWVkaWEpKTtcbiAgICAgIGNvbnN0IHNhdmVJbiA9IG1lZGlhID8gdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyIDogX2luO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlQ29udGVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNhdmVJbiwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdHlsZUVsZW1lbnQsICdzdHlsZV9kYXRhJywgYCR7X2Zvcn3DgsK3w4LCt8OCwrcke2lkfcOCwrfDgsK3w4LCtyR7a2V5fWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YVN0eWxlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHN0eWxlRWxlbWVudCxcbiAgICAgICAgbWVkaWFcbiAgICAgIH07XG4gICAgICBtYXBTdHlsZXMuc2V0KGtleSwgZGF0YVN0eWxlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH1cblxuICAvKiogI3N0eWxlICovXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWc6IFQsIHN0eWxlczogU3R5bGU8VD4sIGlkOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCB0eXBmID0gdHlwZW9mIHN0eWxlcztcbiAgICBpZiAodHlwZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHtzdHlsZXN9fWAsIG1lZGlhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHsoc3R5bGVzIGFzIFN0eWxlQ29udGVudDxUPikodGhlbWVDb25maWcpfX1gLCBtZWRpYSk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkkIGluIHN0eWxlcyBhcyBNdWx0aXBsZVN0eWxlczxUPikge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkkKSkge1xuICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5JF07XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKHRoZW1lQ29uZmlnKSA6IHZhbDtcbiAgICAgICAgY29udGVudCArPSBgLiR7aWR9JHtrZXkkfXske3RleHR9fWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b01lZGlhKGNvbnRlbnQsIG1lZGlhKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29yZVN0eWxlKCkge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMuc2V0VXBTdHlsZSgncm9vdGJvZHknLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOjA7YFxuICAgICAgKSxcbiAgICAgICcsICosICo6YWZ0ZXIsICo6YmVmb3JlJzogKCkgPT4gKFxuICAgICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5ib2R5LCBjbGFzc25hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnRlciB0byBtZWRpYSBxdWVyeSBpZiBgbWVkaWFgIGlzIHByZXNlbnRcbiAqIEBwYXJhbSB0ZXh0IHN0eWxlIGNvbnRlbnRcbiAqIEBwYXJhbSBtZWRpYSBtZWRpYSBxdWVyeVxuICovXG5mdW5jdGlvbiB0b01lZGlhKHRleHQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAodHlwZW9mIG1lZGlhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7dGV4dH19YDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lZGlhKSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBtZWRpYS5mb3JFYWNoKF8gPT4gcmVzdWx0ICs9IGBAbWVkaWEgJHtffXske3RleHR9fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3IFRoZW1lOiAke3RoZW1lTmFtZX1gKTtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgIH1cbiAgfVxuICBzZXRVcFN0eWxlPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/DhMK4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlLCBrZXkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICBkYXRhU3R5bGUuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuY29yZS5fY3JlYXRlU3R5bGVDb250ZW50KHRoaXMuY29uZmlnLCBkYXRhU3R5bGUuc3R5bGUsIGRhdGFTdHlsZS5pZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSBuZ1RyYW5zY2x1ZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSBfdmlld1JlZjtcclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5uZ1RyYW5zY2x1ZGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYuZGV0YWNoKCk7XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcclxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxyXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gSXNCb29sZWFuKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGRlZmluaXRpb24uZ2V0LFxuICAgICAgICBzZXQ6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICBkZWZpbml0aW9uLnNldCh0b0Jvb2xlYW4obmV3VmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzWydfXycgKyBrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgIHRoaXNbJ19fJyArIGtleV0gPSB0b0Jvb2xlYW4obmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5U2hhZG93U2VydmljZSB7XHJcbiAgLyoqIERlZmF1bHQgZWxldmF0aW9uICovXHJcbiAgZWxldmF0aW9uID0gMTtcclxuICAvKiogZGVtbzogc2V0U2hhZG93KC4uLltlbGV2YXRpb24sIGNvbG9yXS4uLikgKi9cclxuICBzZXRTaGFkb3codGhlbWU6IEx5VGhlbWUyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB2YWw6IFtudW1iZXIsIHN0cmluZ10sIG9sZENsYXNzTmFtZT86IHN0cmluZykge1xyXG4gICAgbGV0IGtleXM6IHN0cmluZztcclxuICAgIGxldCBlbGV2YXRpb246IG51bWJlcjtcclxuICAgIGxldCBjb2xvciA9ICdjb2xvclNoYWRvdyc7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGtleXMgPSB2YWwuam9pbignJyk7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHZhbFswXTtcclxuICAgICAgY29sb3IgPSB2YWxbMV0gfHwgY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzID0gYCR7dGhpcy5lbGV2YXRpb259JHtjb2xvcn1gO1xyXG4gICAgICBlbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoZW1lLnNldFVwU3R5bGUoYHNoYWRvdyR7a2V5c31gLCB7Jyc6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3NoYWRvd0J1aWxkZXIoZWxldmF0aW9uLCB0aGVtZS5jb2xvck9mKGNvbG9yKSl9YDtcclxuICAgIH19KTtcclxuICAgIHRoZW1lLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCBjbGFzc25hbWUsIG9sZENsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gY2xhc3NuYW1lO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBTa2lwU2VsZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5qZWN0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi9hbHlsZS1jb25maWctc2VydmljZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbYmddLCBbY29sb3JdLCBbcmFpc2VkXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlCZ0NvbG9yQW5kUmFpc2VkIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfcmFpc2VkU3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGJnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZyA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIC8vIGdldCBjc3NCZygpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQmc7XG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIC8vIGdldCBjc3NDb2xvcigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQ29sb3I7XG4gIC8vIH1cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkU3RhdGU7IH1cbiAgQElucHV0KCkgZWxldmF0aW9uID0gMztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlLFxuICAgIEBJbmplY3QoTFlfR0xPQkFMX0NPTlRSQVNUKSBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyYXN0OiBib29sZWFuXG4gICkgeyB9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLmNvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgIC8qKn4gKi9cbiAgICBjb25zdCByYWlzZWTDhMK4ZXkgPSB0aGlzLl9yYWlzZWRTdGF0ZSA9PT0gdHJ1ZSA/ICdyYWlzZWQnIDogJyc7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICgodGhpcy5jb250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0bycpICYmIHRoaXMuYmcpIHtcbiAgICAgIGtleSA9IGBjb250cmFzdCR7dGhpcy5iZ30ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iZyAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICBrZXkgPSBgYibDhMK4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgICAga2V5ID0gcmFpc2Vkw4TCuGV5ICsgdGhpcy5jb2xvciB8fCAnJztcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmJhY2tncm91bmQucHJpbWFyeX07YDtcbiAgICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICAgIGxldCBjb2xvclNoYWRvdztcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICBjb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IGNvbG9yO1xuICAgICAgICAgIHN0eWxlcyArPSBgY29sb3I6JHtjb2xvcn07YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH19KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmcgfHwgdGhpcy5jb2xvcikge1xuICAgICAgY29uc3QgY2hhbmdlS2V5ID0gdGhpcy5iZyA/IFsnYmcnLCAnYmFja2dyb3VuZCcsIHRoaXMuYmddIDogWyfDhMK4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBfY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlcigwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgIH19KTtcbiAgICB9XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzTmFtZSwgdGhpcy5fY3VycmVudENsYXNzTmFtZSk7XG4gICAgdGhpcy5fY3VycmVudENsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZTtcbiAgfVxuICBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBwcml2YXRlIGJnQ29sb3JTdHlsZSgpIHtcbiAgICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICBjb25zdCBjc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHtjc3NDb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vYWx5bGUtY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnOm5vdChbcmFpc2VkXSlbbmV3UmFpc2VkXScgfSlcbmV4cG9ydCBjbGFzcyBMeU5ld1JhaXNlZCB7XG4gIGVsZXZhdGlvbiA9IDM7XG4gIHByaXZhdGUgY3VycmVudENsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogRGVmYXVsdCByYWlzZWQgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuZXdSYWlzZWQodmFsdWU6IFtudW1iZXIsIHN0cmluZ10pIHtcbiAgICB0aGlzLmN1cnJlbnRDbGFzc05hbWUgPSB0aGlzLnNoYWRvdy5zZXRTaGFkb3codGhpcy50aGVtZSwgdGhpcy5lbGVtZW50UmVmLCB0aGlzLnJlbmRlcmVyLCBbIHZhbHVlWzBdIHx8IHRoaXMuZWxldmF0aW9uLCB2YWx1ZVsxXSBdLCB0aGlzLmN1cnJlbnRDbGFzc05hbWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRoZW1lXScsXG4gIHByb3ZpZGVyczogW0x5VGhlbWUyXSxcbiAgZXhwb3J0QXM6ICdseVRoZW1lJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbHlUaGVtZTogc3RyaW5nO1xuICAvKipcbiAgICogc2V0IHRoZW1lXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlUaGVtZShuYW06IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGB0aGlzLnRoZW1lLmNvbmZpZy5uYW1lYCwgdGhpcy50aGVtZS5jb25maWcubmFtZSwgbmFtKTtcbiAgICB0aGlzLl9seVRoZW1lID0gbmFtO1xuICAgIHRoaXMudGhlbWUuc2V0VXBUaGVtZShuYW1lKTtcbiAgfVxuICBnZXQgbHlUaGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUaGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNoYXJlZDogdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDb250YWluZXJTdHlsZShlbGVtZW50LCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGB0aGVtZToke3RoaXMudGhlbWUuY29uZmlnLm5hbWV9YCwge1xuICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5iYWNrZ3JvdW5kLmRlZmF1bHR9O2AgK1xuICAgICAgICBgY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRlZmF1bHR9O2AgK1xuICAgICAgICBgZm9udC1mYW1pbHk6JHt0aGlzLnRoZW1lLmNvbmZpZy50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2BcbiAgICAgIClcbiAgICB9KTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlCZ0NvbG9yQW5kUmFpc2VkIH0gZnJvbSAnLi9iZy1jb2xvci1hbmQtcmFpc2VkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5TmV3UmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnLi90aGVtZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUJnQ29sb3JBbmRSYWlzZWQsIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyXSxcbiAgZXhwb3J0czogW0x5QmdDb2xvckFuZFJhaXNlZCwgTHlOZXdSYWlzZWQsIEx5VGhlbWVDb250YWluZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IExZX0dMT0JBTF9DT05UUkFTVCwgdXNlVmFsdWU6IGZhbHNlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIE5nTW9kdWxlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xufVxuXG5leHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbiAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtbRG9tU2VydmljZSwgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJdXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZSB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjAtYmV0YS4zdnd5Yyc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMDctMjlUMTk6MTA6NDUuMTg4Wic7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIHByaXZhdGUgX2hhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gIGV2ZW50czogc3RyaW5nW10gPSB0aGlzLl9oYW1tZXIgPyBbXG4gICAgJ3NsaWRlJyxcbiAgICAnc2xpZGVzdGFydCcsXG4gICAgJ3NsaWRlZW5kJyxcbiAgICAnc2xpZGVyaWdodCcsXG4gICAgJ3NsaWRlbGVmdCdcbiAgXSA6IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zLFxuICAgIC8vIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgLy8gaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgIC8vICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdrLWhhbW1lci1jc3MnLCB7XG4gICAgLy8gICAgICcnOiAoKSA9PiAoXG4gICAgLy8gICAgICAgYHVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgIC8vICAgICAgIGAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO2BcbiAgICAvLyAgICAgKVxuICAgIC8vICAgfSk7XG4gICAgLy8gICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIC8vIH1cbiAgICBjb25zdCBtYyA9IG5ldyB0aGlzLl9oYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IHRoaXMuX2hhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyB0aGlzLl9oYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHNsaWRlLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBTZWxmLCBIb3N0LCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gVEhFTUUyX1BST1ZJREVSX0ZBQ1RPUlkoXG4vLyAgIHBhcmVudFJlZ2lzdHJ5OiBMeVRoZW1lMixcbi8vICAgY29yZVRoZW1lOiBDb3JlVGhlbWUpIHtcbi8vICAgcmV0dXJuIHBhcmVudFJlZ2lzdHJ5IHx8IG5ldyBMeVRoZW1lMihjb3JlVGhlbWUpO1xuLy8gfVxuXG4vLyAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuLy8gZXhwb3J0IGNvbnN0IFRIRU1FMl9QUk9WSURFUiA9IHtcbi8vICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBMeVRoZW1lMiBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuLy8gICBwcm92aWRlOiBMeVRoZW1lMixcbi8vICAgZGVwczogW1xuLy8gICAgIFtuZXcgT3B0aW9uYWwoKSwgTHlUaGVtZTJdLFxuLy8gICAgIFtDb3JlVGhlbWVdXG4vLyAgIF0sXG4vLyAgIHVzZUZhY3Rvcnk6IFRIRU1FMl9QUk9WSURFUl9GQUNUT1JZLFxuLy8gfTtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIHNldFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMeVRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEx5VGhlbWUyLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHtcbiAgICAvKiogUG9zaXRpb24gYWJzb2x1dGUgKi9cbiAgICBGaWxsOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stYWJzb2x1dGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgVmlzdWFsbHlIaWRkZW46IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay12aXN1YWxseS1oaWRkZW4nLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJvcmRlcjogMDtgICtcbiAgICAgICAgICBgY2xpcDogcmVjdCgwIDAgMCAwKTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxcHg7YCArXG4gICAgICAgICAgYG1hcmdpbjogLTFweDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgcGFkZGluZzogMDtgICtcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB3aWR0aDogMXB4O2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otYXBwZWFyYW5jZTogbm9uZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUpIHsgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJleHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXIsXG4gIH07XG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkluamVjdGlvblRva2VuIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJSZW5kZXJlckZhY3RvcnkyIiwiaXNEZXZNb2RlIiwiT3B0aW9uYWwiLCJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJTa2lwU2VsZiIsIkNvbW1vbk1vZHVsZSIsIlN1YmplY3QiLCJkZWJvdW5jZVRpbWUiLCJOZ1pvbmUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiSGFtbWVyR2VzdHVyZUNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBK0IsUUFBUTtRQUNyQyxxQkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLHFCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMscUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxxQkFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDdkQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN6Qzs7Ozs7O0FDTkQsSUFDQSxxQkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBRXZCLHFCQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztJQUNsQyxxQkFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7SUFDdEMscUJBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLHlCQUFhLE9BQU8sR0FBRztRQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVB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