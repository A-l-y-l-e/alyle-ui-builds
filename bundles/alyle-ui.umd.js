(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chroma-js'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', 'chroma-js', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = {}),global.chroma,global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.platformBrowser));
}(this, (function (exports,_chroma,i0,i2,rxjs,operators,platformBrowser) { 'use strict';

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
    var /** @type {?} */ LY_GLOBAL_CONTRAST = new i0.InjectionToken('ly.global.contrast');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ THEME_CONFIG = new i0.InjectionToken('ly.theme.config.root');
    var /** @type {?} */ LY_THEME_CONFIG = new i0.InjectionToken('ly_theme_config');
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
            this.renderer = this.rendererFactory.createRenderer(null, {
                id: 'ly',
                encapsulation: i0.ViewEncapsulation.Native,
                styles: [],
                data: {}
            });
            if (Platform.isBrowser) {
                var /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
                var /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
                var /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
                if (primaryStyleContainer) {
                    ( /** @type {?} */(_document.body)).removeChild(mediaStyleContainer);
                    ( /** @type {?} */(_document.body)).removeChild(primaryStyleContainer);
                    ( /** @type {?} */(_document.body)).removeChild(secondaryStyleContainer);
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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] },] },
            ];
        };
        /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
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
    var /** @type {?} */ STYLE_MAP = {};
    var /** @type {?} */ CLASSES_MAP = {};
    var /** @type {?} */ nextId = 0;
    var LyTheme2 = /** @class */ (function () {
        function LyTheme2(core, themeName) {
            this.core = core;
            this.prefix = 'k';
            if (themeName) {
                this.setUpTheme(themeName);
            }
        }
        Object.defineProperty(LyTheme2.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                return CLASSES_MAP;
            },
            enumerable: true,
            configurable: true
        });
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
                    this._styleMap2 = themeName in STYLE_MAP
                        ? STYLE_MAP[themeName]
                        : STYLE_MAP[themeName] = new Map();
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
         * Add a new dynamic style, use only within @Input()
         * @param id Unique id
         * @param style Styles
         * @param el Element
         * @param instance The instance of this, this replaces the existing style with a new one when it changes
         */
        /**
         * Add a new dynamic style, use only within \@Input()
         * @template T
         * @param {?} id Unique id
         * @param {?} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @return {?}
         */
        LyTheme2.prototype.addStyle = /**
         * Add a new dynamic style, use only within \@Input()
         * @template T
         * @param {?} id Unique id
         * @param {?} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @return {?}
         */
            function (id, style, el, instance) {
                var /** @type {?} */ newClass = this.setUpStyle(id, style);
                if (instance) {
                    el.classList.remove(instance);
                }
                el.classList.add(newClass);
                return newClass;
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
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClass
         * @param {?=} oldClass
         * @return {?}
         */
        LyTheme2.prototype.updateClass = /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClass
         * @param {?=} oldClass
         * @return {?}
         */
            function (element, renderer, newClass, oldClass) {
                this.updateClassName(element, renderer, newClass, oldClass);
                return newClass;
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
                this._styleMap2.forEach(function (dataStyle) {
                    dataStyle.el.innerText = _this._createStyleContent2(dataStyle.styles, dataStyle.id).content;
                });
                this._styleMap.forEach(function (dataStyle) {
                    dataStyle.styleElement.innerText = _this.core._createStyleContent(_this.config, dataStyle.style, dataStyle.id);
                });
            };
        /**
         * Add new add a new style sheet
         * @param styles styles
         * @param id unique id for group
         */
        /**
         * Add new add a new style sheet
         * @template T
         * @param {?} styles styles
         * @param {?=} id unique id for group
         * @return {?}
         */
        LyTheme2.prototype.addStyleSheet = /**
         * Add new add a new style sheet
         * @template T
         * @param {?} styles styles
         * @param {?=} id unique id for group
         * @return {?}
         */
            function (styles, id) {
                var /** @type {?} */ newId = id || '';
                var /** @type {?} */ styleContent = this._createStyleContent2(styles, newId);
                var /** @type {?} */ styleText = this.core.renderer.createText(styleContent.content);
                var /** @type {?} */ styleElement = this.core.renderer.createElement('style');
                this.core.renderer.appendChild(styleElement, styleText);
                this.core.renderer.appendChild(this.core.primaryStyleContainer, styleElement);
                this._styleMap2.set(styleContent.key, {
                    id: newId,
                    el: styleElement,
                    styles: styles
                });
            };
        /**
         * @template T
         * @param {?} styles
         * @param {?} id
         * @return {?}
         */
        LyTheme2.prototype._createStyleContent2 = /**
         * @template T
         * @param {?} styles
         * @param {?} id
         * @return {?}
         */
            function (styles, id) {
                if (typeof styles === 'function') {
                    return groupStyleToString(styles(this.config), id);
                }
                else {
                    return groupStyleToString(styles, id);
                }
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
     * @param {?} styles
     * @param {?} id
     * @return {?}
     */
    function groupStyleToString(styles, id) {
        var /** @type {?} */ content = '';
        var /** @type {?} */ newKey = '';
        for (var /** @type {?} */ key in styles) {
            if (styles.hasOwnProperty(key)) {
                newKey += key;
                // if (styleMap.has(key)) {
                //   content += styleMap.get(key);
                // } else {
                var /** @type {?} */ value = styles[key];
                if (typeof value === 'object') {
                    var /** @type {?} */ classId = id + capitalizeFirstLetter(key);
                    var /** @type {?} */ className = classId in CLASSES_MAP
                        ? CLASSES_MAP[classId]
                        : CLASSES_MAP[classId] = "e" + nextId++;
                    var /** @type {?} */ style = styleToString(/** @type {?} */ (value), "." + className);
                    // styleMap.set((key), style);
                    content += style;
                }
                else {
                    console.log('value is string', value);
                }
                // }
            }
        }
        return {
            key: id + newKey,
            content: content
        };
    }
    /**
     * {color:'red'} to .className{color: red}
     * @param {?} ob
     * @param {?} className
     * @param {?=} parentClassName
     * @return {?}
     */
    function styleToString(ob, className, parentClassName) {
        var /** @type {?} */ content = '';
        var /** @type {?} */ keyAndValue = '';
        for (var /** @type {?} */ styleKey in ob) {
            if (ob.hasOwnProperty(styleKey)) {
                var /** @type {?} */ element = ob[styleKey];
                if (typeof element === 'object') {
                    content += styleToString(/** @type {?} */ (element), styleKey, className);
                }
                else {
                    keyAndValue += styleKey + ":" + element + ";";
                }
            }
        }
        var /** @type {?} */ newClassName = '';
        if (parentClassName) {
            newClassName += className.indexOf('&') === 0 ? "" + parentClassName + className.slice(1) : parentClassName + " ." + className;
        }
        else {
            newClassName += className;
        }
        content += newClassName + "{" + keyAndValue + "}";
        return content;
    }
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
     * @param {?} str
     * @return {?}
     */
    function toHyphenCase(str) {
        return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    var LyClasses = /** @class */ (function () {
        function LyClasses() {
        }
        Object.defineProperty(LyClasses.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                return CLASSES_MAP;
            },
            enumerable: true,
            configurable: true
        });
        LyClasses.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */ LyClasses.ngInjectableDef = i0.defineInjectable({ factory: function LyClasses_Factory() { return new LyClasses(); }, token: LyClasses, providedIn: "root" });
        return LyClasses;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(_viewRef) {
            this._viewRef = _viewRef;
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
                if (templateRef) {
                    this._ngTransclude = templateRef;
                    this._viewRef.createEmbeddedView(templateRef);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgTranscludeDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._viewRef.remove();
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
     * @param {?} value
     * @param {?} defaultValue
     * @return {?}
     */
    function defaultEntry(value, defaultValue) {
        return value !== '' && value !== void 0 ? value : defaultValue;
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
                            i2.CommonModule
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
                            i2.CommonModule
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
    var /** @type {?} */ AUI_VERSION = '1.7.0-beta.4ih8i';
    var /** @type {?} */ AUI_LAST_UPDATE = '2018-08-10T23:36:05.786Z';

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
    var /** @type {?} */ UndefinedValue = new Undefined();

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
    exports.Platform = Platform;
    exports.LyCommonModule = LyCommonModule;
    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.NgTranscludeModule = NgTranscludeModule;
    exports.exactPosition = exactPosition;
    exports.toBoolean = toBoolean;
    exports.IsBoolean = IsBoolean;
    exports.defaultEntry = defaultEntry;
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
    exports.LY_THEME_NAME = LY_THEME_NAME;
    exports.LyThemeConfig = LyThemeConfig;
    exports.LyThemeContainer = LyThemeContainer;
    exports.toHyphenCase = toHyphenCase;
    exports.capitalizeFirstLetter = capitalizeFirstLetter;
    exports.LyTheme2 = LyTheme2;
    exports.LyClasses = LyClasses;
    exports.LyThemeModule = LyThemeModule;
    exports.LyCoreStyles = LyCoreStyles;
    exports.Undefined = Undefined;
    exports.UndefinedValue = UndefinedValue;
    exports.transformMediaQuery = transformMediaQuery;
    exports.InvertMediaQuery = InvertMediaQuery;
    exports.LyStyleUtils = LyStyleUtils;
    exports.ɵb = LyOverlayContainer;
    exports.ɵa = LyNewRaised;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2x5L3JhbmRvbS1pZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wYXJlbnRzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbnRyYXN0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcmFpc2VkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLG51bGwsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYW5kb21JZCB7XG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaWQ6IGFueSA9IChNYXRoLnJhbmRvbSgpICsgRGF0ZS5ub3coKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbDogSFRNTEVsZW1lbnQsIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHJcbiAgLy8gSWYgbm8gcGFyZW50U2VsZWN0b3IgZGVmaW5lZCB3aWxsIGJ1YmJsZSB1cCBhbGwgdGhlIHdheSB0byAqZG9jdW1lbnQqXHJcbiAgaWYgKHBhcmVudFNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50U2VsZWN0b3IgPSAnYm9keSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgbGV0IHA6IGFueSA9IGVsLnBhcmVudE5vZGU7XHJcbiAgbGV0IHB4ejogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIHdoaWxlICghcHh6KSB7XHJcbiAgICAgIGNvbnN0IG8gPSBwO1xyXG4gICAgICBwYXJlbnRzLnB1c2gobyk7XHJcbiAgICAgIHAgPSBvLnBhcmVudE5vZGU7XHJcbiAgICAgIHB4eiA9IHAucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIC8vIHBhcmVudHMucHVzaChfcGFyZW50U2VsZWN0b3IpOyAvLyBQdXNoIHRoYXQgcGFyZW50U2VsZWN0b3IgeW91IHdhbnRlZCB0byBzdG9wIGF0XHJcbiAgLy8gY29uc29sZS5sb2cocGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdKTtcclxuICByZXR1cm4gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlRGF0YSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhbGV0dGVWYXJpYWJsZXM+KCdseS50aGVtZS52YXJpYWJsZXMnKTtcclxuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZU1hcCB7XHJcbiAgcHJpdmF0ZSBzdHlsZU1hcDogTWFwPHN0cmluZywgU3R5bGVEYXRhPjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lTmFtZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgY2xhc3MgVGhlbWVWYXJpYWJsZXMge1xyXG4gIC8qKiBUaGVtZSBuYW1lICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBzY2hlbWU/OiBzdHJpbmc7XHJcbiAgY29sb3JTY2hlbWVzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXHJcbi8vIGlzIG5lY2Vzc2FyeSB0byBkZXRlY3QgYWxsIEJsaW5rIGJhc2VkIGJyb3dzZXJzLlxyXG5jb25zdCBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mKEludGwpICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxyXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xyXG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xyXG4gIEVER0UgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgVFJJREVOVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXHJcbiAgQkxJTksgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQpO1xyXG5cclxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cclxuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXHJcbiAgV0VCS0lUID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuQkxJTksgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvKiogQnJvd3NlcnMgYW5kIFBsYXRmb3JtIFR5cGVzICovXHJcbiAgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XHJcblxyXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XHJcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXHJcbiAgLy8gU2luY2Ugd2Ugb25seSBjb3ZlciBvbmUgZXhwbGljaXQgRmlyZWZveCBjYXNlLCB3ZSBjYW4gc2ltcGx5IGNoZWNrIGZvciBGaXJlZm94XHJcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxyXG4gIEZJUkVGT1ggPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhmaXJlZm94fG1pbmVmaWVsZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cclxuICBBTkRST0lEID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9hbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcclxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XHJcbiAgLy8gU2FmYXJpIGJyb3dzZXIgc2hvdWxkIGFsc28gdXNlIFdlYmtpdCBhcyBpdHMgbGF5b3V0IGVuZ2luZS5cclxuICBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgdGhpcy5XRUJLSVQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IExZX0dMT0JBTF9DT05UUkFTVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignbHkuZ2xvYmFsLmNvbnRyYXN0Jyk7XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5LnRoZW1lLmNvbmZpZy5yb290Jyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEx5VGhlbWVDb25maWc+KCdseV90aGVtZV9jb25maWcnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzOiBhbnlbXSA9IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgaXNEZXZNb2RlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVEhFTUVfQ09ORklHLCBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3R5bGVDb250ZW50LCBTdHlsZURhdGEsIERhdGFTdHlsZSwgU3R5bGUsIE11bHRpcGxlU3R5bGVzIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnksIHRyYW5zZm9ybU1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5sZXQgY2xhc3NJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBwcml2YXRlIF9zdHlsZUNvcmVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0NPTkZJRykgdGhlbWVDb25maWc6IEx5VGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRV9DT05GSUcgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5hdGl2ZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG1lZGlhU3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHByaW1hcnlTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LXByaW1hcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LXNlY29uZGFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGlmIChwcmltYXJ5U3R5bGVDb250YWluZXIpIHtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQobWVkaWFTdHlsZUNvbnRhaW5lcik7XG4gICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKHByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKHNlY29uZGFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5zZXRDb3JlU3R5bGUoKTtcbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIHRoZW1lQ29uZmlnLnRoZW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZChuZXcgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lQ29uZmlnXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICBzZXRVcFN0eWxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8OEwrhyZWF0ZVN0eWxlKHVuZGVmaW5lZCwga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlQ29yZU1hcCwgJ3Jvb3QnLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/DhMK4cmVhdGVTdHlsZTxUPih0aGVtZUNvbmZpZzogYW55LCBrZXksIHN0eWxlOiBTdHlsZTxUPiwgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+LCBfZm9yOiBzdHJpbmcsIF9pbjogYW55LCBfbWVkaWE/OiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKG1hcFN0eWxlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIG1hcFN0eWxlcy5nZXQoa2V5KS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWQgPSBgayR7KGNsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBjb25zdCBtZWRpYSA9IHRyYW5zZm9ybU1lZGlhUXVlcnkoX21lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgICAgIGNvbnN0IHN0eWxlQ29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWcsIHN0eWxlLCBpZCwgbWVkaWEpKTtcbiAgICAgIGNvbnN0IHNhdmVJbiA9IG1lZGlhID8gdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyIDogX2luO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlQ29udGVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNhdmVJbiwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdHlsZUVsZW1lbnQsICdzdHlsZV9kYXRhJywgYCR7X2Zvcn3DgsK3w4LCt8OCwrcke2lkfcOCwrfDgsK3w4LCtyR7a2V5fWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YVN0eWxlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHN0eWxlRWxlbWVudCxcbiAgICAgICAgbWVkaWFcbiAgICAgIH07XG4gICAgICBtYXBTdHlsZXMuc2V0KGtleSwgZGF0YVN0eWxlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH1cblxuICAvKiogI3N0eWxlICovXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWc6IFQsIHN0eWxlczogU3R5bGU8VD4sIGlkOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCB0eXBmID0gdHlwZW9mIHN0eWxlcztcbiAgICBpZiAodHlwZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHtzdHlsZXN9fWAsIG1lZGlhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHsoc3R5bGVzIGFzIFN0eWxlQ29udGVudDxUPikodGhlbWVDb25maWcpfX1gLCBtZWRpYSk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkkIGluIHN0eWxlcyBhcyBNdWx0aXBsZVN0eWxlczxUPikge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkkKSkge1xuICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5JF07XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKHRoZW1lQ29uZmlnKSA6IHZhbDtcbiAgICAgICAgY29udGVudCArPSBgLiR7aWR9JHtrZXkkfXske3RleHR9fWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b01lZGlhKGNvbnRlbnQsIG1lZGlhKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29yZVN0eWxlKCkge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMuc2V0VXBTdHlsZSgncm9vdGJvZHknLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOjA7YFxuICAgICAgKSxcbiAgICAgICcsICosICo6YWZ0ZXIsICo6YmVmb3JlJzogKCkgPT4gKFxuICAgICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5ib2R5LCBjbGFzc25hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnRlciB0byBtZWRpYSBxdWVyeSBpZiBgbWVkaWFgIGlzIHByZXNlbnRcbiAqIEBwYXJhbSB0ZXh0IHN0eWxlIGNvbnRlbnRcbiAqIEBwYXJhbSBtZWRpYSBtZWRpYSBxdWVyeVxuICovXG5mdW5jdGlvbiB0b01lZGlhKHRleHQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAodHlwZW9mIG1lZGlhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7dGV4dH19YDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lZGlhKSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBtZWRpYS5mb3JFYWNoKF8gPT4gcmVzdWx0ICs9IGBAbWVkaWEgJHtffXske3RleHR9fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlSXRlbSB7XG4gIGlkOiBzdHJpbmc7XG4gIGVsOiBhbnk7XG4gIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyO1xufVxuXG5jb25zdCBTVFlMRV9NQVA6IHtcbiAgW2tleTogc3RyaW5nXTogTWFwPHN0cmluZywgU3R5bGVJdGVtPlxufSA9IHt9O1xuY29uc3QgQ0xBU1NFU19NQVA6IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXG59ID0ge307XG5sZXQgbmV4dElkID0gMDtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVDb25maWc7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgcHJlZml4ID0gJ2snO1xuICBwcml2YXRlIF9zdHlsZU1hcDI6IE1hcDxzdHJpbmcsIFN0eWxlSXRlbT47XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuX3N0eWxlTWFwMiA9IHRoZW1lTmFtZSBpbiBTVFlMRV9NQVBcbiAgICAgID8gU1RZTEVfTUFQW3RoZW1lTmFtZV1cbiAgICAgIDogU1RZTEVfTUFQW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLnNldFVwU3R5bGU8VD4oaWQsIHN0eWxlKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMuY29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGRhdGFTdHlsZS5zdHlsZXMsIGRhdGFTdHlsZS5pZCkuY29udGVudDtcbiAgICB9KTtcbiAgICB0aGlzLl9zdHlsZU1hcC5mb3JFYWNoKChkYXRhU3R5bGUpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIGlkIHVuaXF1ZSBpZCBmb3IgZ3JvdXBcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBTdHlsZXNGbjI8VD4gfCBTdHlsZXMyLCBpZD86IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJyc7XG4gICAgY29uc3Qgc3R5bGVDb250ZW50ID0gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG5ld0lkKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChzdHlsZUNvbnRlbnQuY29udGVudCk7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGVFbGVtZW50KTtcbiAgICB0aGlzLl9zdHlsZU1hcDIuc2V0KHN0eWxlQ29udGVudC5rZXksIHtcbiAgICAgIGlkOiBuZXdJZCxcbiAgICAgIGVsOiBzdHlsZUVsZW1lbnQsXG4gICAgICBzdHlsZXNcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcyh0aGlzLmNvbmZpZyksIGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXMsIGlkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVzMiB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCBpZDogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBuZXdLZXkgPSAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBuZXdLZXkgKz0ga2V5O1xuICAgICAgLy8gaWYgKHN0eWxlTWFwLmhhcyhrZXkpKSB7XG4gICAgICAvLyAgIGNvbnRlbnQgKz0gc3R5bGVNYXAuZ2V0KGtleSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IGNsYXNzSWQgPSBpZCArIGNhcGl0YWxpemVGaXJzdExldHRlcihrZXkpO1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzSWQgaW4gQ0xBU1NFU19NQVBcbiAgICAgICAgICA/IENMQVNTRVNfTUFQW2NsYXNzSWRdXG4gICAgICAgICAgOiBDTEFTU0VTX01BUFtjbGFzc0lkXSA9IGBlJHtuZXh0SWQrK31gO1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyh2YWx1ZSBhcyBTdHlsZXMyLCBgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICAgIC8vIHN0eWxlTWFwLnNldCgoa2V5KSwgc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogaWQgKyBuZXdLZXksXG4gICAgY29udGVudFxuICB9O1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKG9iOiBPYmplY3QsIGNsYXNzTmFtZTogc3RyaW5nLCBwYXJlbnRDbGFzc05hbWU/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoZWxlbWVudCBhcyBTdHlsZXMyLCBzdHlsZUtleSwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke3N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBuZXdDbGFzc05hbWUgPSAnJztcbiAgaWYgKHBhcmVudENsYXNzTmFtZSkge1xuICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWUuaW5kZXhPZignJicpID09PSAwID8gYCR7cGFyZW50Q2xhc3NOYW1lfSR7Y2xhc3NOYW1lLnNsaWNlKDEpfWAgOiBgJHtwYXJlbnRDbGFzc05hbWV9IC4ke2NsYXNzTmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWU7XG4gIH1cbiAgY29udGVudCArPSBgJHtuZXdDbGFzc05hbWV9eyR7a2V5QW5kVmFsdWV9fWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2xhc3NlcyB7XG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgTmdNb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QXR0cmlidXRlIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLl92aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xyXG5cclxufVxyXG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBkb2NFbGVtOiBhbnksIHdpbjogYW55LFxyXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gICAgY29uc3QgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XHJcblxyXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXHJcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBJc0Jvb2xlYW4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBrZXk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZGVmaW5pdGlvbi5nZXQsXG4gICAgICAgIHNldDogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgIGRlZmluaXRpb24uc2V0KHRvQm9vbGVhbihuZXdWYWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbJ19fJyArIGtleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgdGhpc1snX18nICsga2V5XSA9IHRvQm9vbGVhbihuZXdWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRFbnRyeSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5U2hhZG93U2VydmljZSB7XHJcbiAgLyoqIERlZmF1bHQgZWxldmF0aW9uICovXHJcbiAgZWxldmF0aW9uID0gMTtcclxuICAvKiogZGVtbzogc2V0U2hhZG93KC4uLltlbGV2YXRpb24sIGNvbG9yXS4uLikgKi9cclxuICBzZXRTaGFkb3codGhlbWU6IEx5VGhlbWUyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB2YWw6IFtudW1iZXIsIHN0cmluZ10sIG9sZENsYXNzTmFtZT86IHN0cmluZykge1xyXG4gICAgbGV0IGtleXM6IHN0cmluZztcclxuICAgIGxldCBlbGV2YXRpb246IG51bWJlcjtcclxuICAgIGxldCBjb2xvciA9ICdjb2xvclNoYWRvdyc7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGtleXMgPSB2YWwuam9pbignJyk7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHZhbFswXTtcclxuICAgICAgY29sb3IgPSB2YWxbMV0gfHwgY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzID0gYCR7dGhpcy5lbGV2YXRpb259JHtjb2xvcn1gO1xyXG4gICAgICBlbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoZW1lLnNldFVwU3R5bGUoYHNoYWRvdyR7a2V5c31gLCB7Jyc6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3NoYWRvd0J1aWxkZXIoZWxldmF0aW9uLCB0aGVtZS5jb2xvck9mKGNvbG9yKSl9YDtcclxuICAgIH19KTtcclxuICAgIHRoZW1lLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCBjbGFzc25hbWUsIG9sZENsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gY2xhc3NuYW1lO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBTa2lwU2VsZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5qZWN0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi9hbHlsZS1jb25maWctc2VydmljZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbYmddLCBbY29sb3JdLCBbcmFpc2VkXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlCZ0NvbG9yQW5kUmFpc2VkIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfcmFpc2VkU3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGJnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZyA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIC8vIGdldCBjc3NCZygpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQmc7XG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIC8vIGdldCBjc3NDb2xvcigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQ29sb3I7XG4gIC8vIH1cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkU3RhdGU7IH1cbiAgQElucHV0KCkgZWxldmF0aW9uID0gMztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlLFxuICAgIEBJbmplY3QoTFlfR0xPQkFMX0NPTlRSQVNUKSBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyYXN0OiBib29sZWFuXG4gICkgeyB9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLmNvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgIC8qKn4gKi9cbiAgICBjb25zdCByYWlzZWTDhMK4ZXkgPSB0aGlzLl9yYWlzZWRTdGF0ZSA9PT0gdHJ1ZSA/ICdyYWlzZWQnIDogJyc7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICgodGhpcy5jb250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0bycpICYmIHRoaXMuYmcpIHtcbiAgICAgIGtleSA9IGBjb250cmFzdCR7dGhpcy5iZ30ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iZyAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICBrZXkgPSBgYibDhMK4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgICAga2V5ID0gcmFpc2Vkw4TCuGV5ICsgdGhpcy5jb2xvciB8fCAnJztcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmJhY2tncm91bmQucHJpbWFyeX07YDtcbiAgICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICAgIGxldCBjb2xvclNoYWRvdztcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICBjb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IGNvbG9yO1xuICAgICAgICAgIHN0eWxlcyArPSBgY29sb3I6JHtjb2xvcn07YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH19KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmcgfHwgdGhpcy5jb2xvcikge1xuICAgICAgY29uc3QgY2hhbmdlS2V5ID0gdGhpcy5iZyA/IFsnYmcnLCAnYmFja2dyb3VuZCcsIHRoaXMuYmddIDogWyfDhMK4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBfY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlcigwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgIH19KTtcbiAgICB9XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzTmFtZSwgdGhpcy5fY3VycmVudENsYXNzTmFtZSk7XG4gICAgdGhpcy5fY3VycmVudENsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZTtcbiAgfVxuICBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBwcml2YXRlIGJnQ29sb3JTdHlsZSgpIHtcbiAgICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICBjb25zdCBjc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHtjc3NDb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vYWx5bGUtY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnOm5vdChbcmFpc2VkXSlbbmV3UmFpc2VkXScgfSlcbmV4cG9ydCBjbGFzcyBMeU5ld1JhaXNlZCB7XG4gIGVsZXZhdGlvbiA9IDM7XG4gIHByaXZhdGUgY3VycmVudENsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogRGVmYXVsdCByYWlzZWQgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuZXdSYWlzZWQodmFsdWU6IFtudW1iZXIsIHN0cmluZ10pIHtcbiAgICB0aGlzLmN1cnJlbnRDbGFzc05hbWUgPSB0aGlzLnNoYWRvdy5zZXRTaGFkb3codGhpcy50aGVtZSwgdGhpcy5lbGVtZW50UmVmLCB0aGlzLnJlbmRlcmVyLCBbIHZhbHVlWzBdIHx8IHRoaXMuZWxldmF0aW9uLCB2YWx1ZVsxXSBdLCB0aGlzLmN1cnJlbnRDbGFzc05hbWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5VGhlbWVdJyxcbiAgcHJvdmlkZXJzOiBbTHlUaGVtZTJdLFxuICBleHBvcnRBczogJ2x5VGhlbWUnXG59KVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9seVRoZW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzZXQgdGhlbWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBseVRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbHlUaGVtZSA9IG5hbTtcbiAgICB0aGlzLnRoZW1lLnNldFVwVGhlbWUobmFtZSk7XG4gIH1cbiAgZ2V0IGx5VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VGhlbWU7XG4gIH1cblxuICBASW5wdXQoKSBzaGFyZWQ6IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q29udGFpbmVyU3R5bGUoZWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgdGhlbWU6JHt0aGlzLnRoZW1lLmNvbmZpZy5uYW1lfWAsIHtcbiAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuYmFja2dyb3VuZC5kZWZhdWx0fTtgICtcbiAgICAgICAgYGNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kZWZhdWx0fTtgICtcbiAgICAgICAgYGZvbnQtZmFtaWx5OiR7dGhpcy50aGVtZS5jb25maWcudHlwb2dyYXBoeS5mb250RmFtaWx5fTtgXG4gICAgICApXG4gICAgfSk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5QmdDb2xvckFuZFJhaXNlZCB9IGZyb20gJy4vYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTFlfR0xPQkFMX0NPTlRSQVNUIH0gZnJvbSAnLi9jb250cmFzdCc7XG5pbXBvcnQgeyBMeU5ld1JhaXNlZCB9IGZyb20gJy4vcmFpc2VkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZU1vZHVsZSB9IGZyb20gJy4vdGhlbWUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlCZ0NvbG9yQW5kUmFpc2VkLCBMeU5ld1JhaXNlZCwgTHlUaGVtZUNvbnRhaW5lcl0sXG4gIGV4cG9ydHM6IFtMeUJnQ29sb3JBbmRSYWlzZWQsIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMWV9HTE9CQUxfQ09OVFJBU1QsIHVzZVZhbHVlOiBmYWxzZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdGFibGUsIE9wdGlvbmFsLCBOZ01vZHVsZSwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJvdGVjdGVkIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxufVxuXG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tU2VydmljZSB7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXJcbiAgKSB7IH1cblxuICBhdHRhY2g8VD4oX2hvc3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnQ6IGFueSwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZjtcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gdGhpcy5hZGRDaGlsZChyb290Tm9kZSkpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZGVzdHJveVJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+LCBkZWxheTogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2VydmljZSB9IGZyb20gJy4vZG9tLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcikge1xuICByZXR1cm4gcGFyZW50Q29udGFpbmVyIHx8IG5ldyBMeU92ZXJsYXlDb250YWluZXIoKTtcbn1cblxuZXhwb3J0IGNvbnN0IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlDb250YWluZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogTHlPdmVybGF5Q29udGFpbmVyLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTHlPdmVybGF5Q29udGFpbmVyXV0sXG4gIHVzZUZhY3Rvcnk6IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUllcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbW0RvbVNlcnZpY2UsIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSXV1cbn0pXG5leHBvcnQgY2xhc3MgTHhEb21Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gRm9jdXNTdGF0dXMge1xuICAvKiptb3VzZSBhbmQvb3IgdG91Y2gqL1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAvKioga2V5Ym9hcmQgYW5kL29yIHByb2dyYW0qL1xuICBLRVlCT0FSRCA9ICdrZXlib2FyZCcsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseUZvY3VzU3RhdGVdJyxcbiAgZXhwb3J0QXM6ICdseUZvY3VzU3RhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRlOiBGb2N1c1N0YXR1cztcbiAgc3RhdGVNYXAgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PEZvY3VzU3RhdHVzPigpO1xuICBfc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQE91dHB1dCgpIGx5Rm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzU3RhdHVzPigpO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzXG4gICAgICAuc2V0KCdmb2N1cycsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ2JsdXInLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCd0b3VjaHN0YXJ0JywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnbW91c2Vkb3duJywgdGhpcy5vbi5iaW5kKHRoaXMpKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgb24gPSAoZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBvYjogT2JzZXJ2YWJsZTxGb2N1c1N0YXR1cz4gPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IG9iXG4gICAgICAvLyAuZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTExKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogRm9jdXNTdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgICAgIHRoaXMubHlGb2N1c0NoYW5nZS5lbWl0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3RhdGUoKSB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnYmx1cicpKSB7XG4gICAgICB0aGlzLnN0YXRlTWFwLmNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygnbW91c2Vkb3duJykgfHwgdGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ3RvdWNoc3RhcnQnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5ERUZBVUxUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuS0VZQk9BUkQ7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIG9uKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzaG91bGRTZXQ6IGJvb2xlYW4pID0+IHNob3VsZFNldCA/IHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkgOiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIHRvZ2dsZUNsYXNzKGBseS1mb2N1c2VkYCwgISFzdGF0ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gRm9jdXNTdGF0dXMpIHtcbiAgICAgIGlmIChGb2N1c1N0YXR1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEZvY3VzU3RhdHVzW2tleV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGBseS0ke2NsYXNzTmFtZX0tZm9jdXNlZGAsIHN0YXRlID09PSBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUZvY3VzU3RhdGUgfSBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlGb2N1c1N0YXRlXSxcbiAgZXhwb3J0czogW0x5Rm9jdXNTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEFVSV9WRVJTSU9OID0gJzEuNy4wLWJldGEuNGloOGknO1xuZXhwb3J0IGNvbnN0IEFVSV9MQVNUX1VQREFURSA9ICcyMDE4LTA4LTEwVDIzOjM2OjA1Ljc4NlonO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBwcml2YXRlIF9oYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICBldmVudHM6IHN0cmluZ1tdID0gdGhpcy5faGFtbWVyID8gW1xuICAgICdzbGlkZScsXG4gICAgJ3NsaWRlc3RhcnQnLFxuICAgICdzbGlkZWVuZCcsXG4gICAgJ3NsaWRlcmlnaHQnLFxuICAgICdzbGlkZWxlZnQnXG4gIF0gOiBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9ucyxcbiAgICAvLyBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIC8vIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAvLyAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnay1oYW1tZXItY3NzJywge1xuICAgIC8vICAgICAnJzogKCkgPT4gKFxuICAgIC8vICAgICAgIGB1c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7YCArXG4gICAgLy8gICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtgXG4gICAgLy8gICAgIClcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICAvLyB9XG4gICAgY29uc3QgbWMgPSBuZXcgdGhpcy5faGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyB0aGlzLl9oYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgdGhpcy5faGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBzbGlkZS5yZWNvZ25pemVXaXRoKHN3aXBlKTtcbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgU2VsZiwgSG9zdCwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIFRIRU1FMl9QUk9WSURFUl9GQUNUT1JZKFxuLy8gICBwYXJlbnRSZWdpc3RyeTogTHlUaGVtZTIsXG4vLyAgIGNvcmVUaGVtZTogQ29yZVRoZW1lKSB7XG4vLyAgIHJldHVybiBwYXJlbnRSZWdpc3RyeSB8fCBuZXcgTHlUaGVtZTIoY29yZVRoZW1lKTtcbi8vIH1cblxuLy8gLyoqIEBkb2NzLXByaXZhdGUgKi9cbi8vIGV4cG9ydCBjb25zdCBUSEVNRTJfUFJPVklERVIgPSB7XG4vLyAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gTHlUaGVtZTIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbi8vICAgcHJvdmlkZTogTHlUaGVtZTIsXG4vLyAgIGRlcHM6IFtcbi8vICAgICBbbmV3IE9wdGlvbmFsKCksIEx5VGhlbWUyXSxcbi8vICAgICBbQ29yZVRoZW1lXVxuLy8gICBdLFxuLy8gICB1c2VGYWN0b3J5OiBUSEVNRTJfUFJPVklERVJfRkFDVE9SWSxcbi8vIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMeVRoZW1lMixcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB7XG4gICAgLyoqIFBvc2l0aW9uIGFic29sdXRlICovXG4gICAgRmlsbDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLWFic29sdXRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHRvcDogMDtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBsZWZ0OiAwO2AgK1xuICAgICAgICAgIGByaWdodDogMDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIFZpc3VhbGx5SGlkZGVuOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stdmlzdWFsbHktaGlkZGVuJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBib3JkZXI6IDA7YCArXG4gICAgICAgICAgYGNsaXA6IHJlY3QoMCAwIDAgMCk7YCArXG4gICAgICAgICAgYGhlaWdodDogMXB4O2AgK1xuICAgICAgICAgIGBtYXJnaW46IC0xcHg7YCArXG4gICAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47YCArXG4gICAgICAgICAgYHBhZGRpbmc6IDA7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgd2lkdGg6IDFweDtgICtcbiAgICAgICAgICBgb3V0bGluZTogMDtgICtcbiAgICAgICAgICBgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO2AgK1xuICAgICAgICAgIGAtbW96LWFwcGVhcmFuY2U6IG5vbmU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lKSB7IH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5leHBvcnQgY29uc3QgVW5kZWZpbmVkVmFsdWUgPSBuZXcgVW5kZWZpbmVkKCk7XG4iLCJleHBvcnQgaW50ZXJmYWNlIFR5cG9ncmFwaHlDb25maWcge1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250V2VpZ2h0PzogbnVtYmVyO1xuICBsZXR0ZXJTcGFjaW5nPzogbnVtYmVyO1xuICB0ZXh0VHJhbnNmb3JtPzogJ3VwcGVyY2FzZScgfCAnY2FwaXRhbGl6ZScgfCAnbG93ZXJjYXNlJztcbiAgZ3V0dGVyVG9wPzogbnVtYmVyO1xuICBndXR0ZXJCb3R0b20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiSW5qZWN0aW9uVG9rZW4iLCJWaWV3RW5jYXBzdWxhdGlvbiIsImlzRGV2TW9kZSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiUmVuZGVyZXJGYWN0b3J5MiIsIkRPQ1VNRU5UIiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiTmdNb2R1bGUiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiU2tpcFNlbGYiLCJDb21tb25Nb2R1bGUiLCJTdWJqZWN0IiwiRXZlbnRFbWl0dGVyIiwiZGVib3VuY2VUaW1lIiwiTmdab25lIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJPdXRwdXQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkhhbW1lckdlc3R1cmVDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQStCLFFBQVE7UUFDckMscUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxxQkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLHFCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMscUJBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDekM7Ozs7OztBQ05ELElBQ0EscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUV2QixxQkFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7SUFDbEMscUJBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLHFCQUFNLDBCQUEwQixHQUFHLElBQUksQ0FBQztBQUN4Qyx5QkFBYSxPQUFPLEdBQUc7UUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMzQyxDQUFDOzs7Ozs7QUFDRiwyQkFBOEIsU0FBOEIsRUFBRSxLQUFjO1FBQTlDLDBCQUFBO1lBQUEsYUFBOEI7O1FBQUUsc0JBQUE7WUFBQSxjQUFjOztRQUMxRSxxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFD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