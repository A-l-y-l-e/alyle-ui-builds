import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation, Directive, ElementRef, Input, NgModule, NgZone, Component, HostListener, TemplateRef, ViewContainerRef, defineInjectable, inject, Renderer2, Injector, ComponentFactoryResolver, ApplicationRef, INJECTOR, isDevMode } from '@angular/core';
import { __extends, __spread, __assign } from 'tslib';
import { DOCUMENT } from '@angular/common';
import { Subject, fromEvent, empty, Subscription, merge } from 'rxjs';
import { HammerGestureConfig } from '@angular/platform-browser';
import { map, share, auditTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} hexcolor
 * @return {?}
 */
function getContrastYIQ(hexcolor) {
    /** @type {?} */
    var r = parseInt(hexcolor.substr(0, 2), 16);
    /** @type {?} */
    var g = parseInt(hexcolor.substr(2, 2), 16);
    /** @type {?} */
    var b = parseInt(hexcolor.substr(4, 2), 16);
    /** @type {?} */
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var chroma = _chroma;
/** @type {?} */
var shadowKeyUmbraOpacity = 0.2;
/** @type {?} */
var shadowKeyPenumbraOpacity = 0.14;
/** @type {?} */
var shadowAmbientShadowOpacity = 0.12;
/** @type {?} */
var Shadows = [
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
function shadowBuilderDeprecated(elevation, color) {
    if (elevation === void 0) { elevation = 2; }
    if (color === void 0) { color = '#000'; }
    /** @type {?} */
    var Color = chroma(color);
    /** @type {?} */
    var colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    /** @type {?} */
    var e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return "box-shadow:" + e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
}
/**
 * @param {?} elevation
 * @param {?=} color
 * @return {?}
 */
function shadowBuilder(elevation, color) {
    /** @type {?} */
    var Color = chroma(color || '#000');
    /** @type {?} */
    var rgb = (/** @type {?} */ ((/** @type {?} */ (Color.get('rgb')))));
    if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
        // Darken and saturate if the color is not in the grayscale
        Color = Color.darken().saturate(2);
    }
    /** @type {?} */
    var colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    /** @type {?} */
    var e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var THEME_VARIABLES = new InjectionToken('ly.theme.variables');
/** @type {?} */
var IS_CORE_THEME = new InjectionToken('ly.is.root');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.isBrowser = typeof document === 'object' && !!document;
    /**
     * Layout Engines
     */
    Platform.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
    Platform.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    Platform.BLINK = Platform.isBrowser &&
        (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) && !!CSS && !Platform.EDGE && !Platform.TRIDENT);
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    Platform.WEBKIT = Platform.isBrowser &&
        /AppleWebKit/i.test(navigator.userAgent) && !Platform.BLINK && !Platform.EDGE && !Platform.TRIDENT;
    /**
     * Browsers and Platform Types
     */
    Platform.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !((/** @type {?} */ (window))).MSStream;
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    Platform.FIREFOX = Platform.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    Platform.ANDROID = Platform.isBrowser && /android/i.test(navigator.userAgent) && !Platform.TRIDENT;
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    Platform.SAFARI = Platform.isBrowser && /safari/i.test(navigator.userAgent) && Platform.WEBKIT;
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var supportsPassive;
/**
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassive === void 0) {
        try {
            /** @type {?} */
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) { }
    }
    return supportsPassive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_THEME_GLOBAL_VARIABLES = new InjectionToken('ly.theme.global.variables');
/** @type {?} */
var LY_THEME = new InjectionToken('ly_theme_config');
/** @type {?} */
var LY_THEME_NAME = new InjectionToken('ly.theme.name');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        /** @type {?} */
        var size = this.typography.fontSize / 14;
        return value / this.typography.htmlFontSize * size + "rem";
    };
    /**
     * @param {?} value
     * @param {?=} optional
     * @return {?}
     */
    LyStyleUtils.prototype.colorOf = /**
     * @param {?} value
     * @param {?=} optional
     * @return {?}
     */
    function (value, optional) {
        return get(this, value, optional);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LyStyleUtils.prototype.getBreakpoint = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return "@media " + (this.breakpoints[key] || key);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyStyleUtils.prototype.getDirection = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val === DirAlias.start || val === DirAlias.before) {
            return this.direction === 'rtl' ? 'right' : 'left';
        }
        else if (val === DirAlias.end || val === DirAlias.after) {
            return this.direction === 'rtl' ? 'left' : 'right';
        }
        else {
            return val;
        }
    };
    return LyStyleUtils;
}());
/** @enum {string} */
var Dir = {
    rtl: 'rtl',
    ltr: 'ltr',
};
/** @enum {string} */
var DirAlias = {
    /** @deprecated, use `before` instead */
    start: 'start',
    /** @deprecated, use `after` instead */
    end: 'end',
    before: 'before',
    after: 'after',
};
/** @enum {string} */
var DirPosition = {
    left: 'left',
    right: 'right',
};
/**
 * get color of object
 * @param {?} obj object
 * @param {?} path path
 * @param {?} optional get optional value, if not exist return default if not is string
 * @return {?}
 */
function get(obj, path, optional) {
    /** @type {?} */
    var _path = path instanceof Array ? path : path.split(':');
    for (var i = 0; i < _path.length; i++) {
        /** @type {?} */
        var posibleOb = obj[_path[i]];
        if (posibleOb) {
            obj = posibleOb;
        }
        else {
            /** if not exist */
            return (/** @type {?} */ (path));
        }
    }
    if (typeof obj === 'string') {
        return (/** @type {?} */ (obj));
    }
    else if (optional) {
        return obj[optional] || obj['default'];
    }
    else {
        return obj['default'];
    }
    // return typeof obj === 'string' ? obj as string : obj['default'] as string;
}
/**
 * @param {?} str
 * @param {?} fn
 * @return {?}
 */
function eachMedia(str, fn) {
    if (typeof str === 'string') {
        /** @type {?} */
        var values = str.split(/\s/g);
        for (var index = 0; index < values.length; index++) {
            /** @type {?} */
            var valItem = values[index].split(/\@/g);
            /** @type {?} */
            var value = valItem.shift();
            /** @type {?} */
            var len = valItem.length;
            if (len) {
                for (var j = 0; j < len; j++) {
                    fn.call(undefined, value, valItem[j], valItem.length);
                }
            }
            else {
                fn.call(undefined, value, undefined, len);
            }
        }
    }
    else {
        fn.call(undefined, str, undefined, 0);
    }
}
/**
 * Simple object check.
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function mergeDeep(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var _a, _b;
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, __spread([target], sources));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, globalVariables, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME undefined');
        }
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            /** @type {?} */
            var nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (var index = 0; index < nodes.length; index++) {
                    /** @type {?} */
                    var element = nodes.item(index);
                    ((/** @type {?} */ (_document.body))).removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        if (Array.isArray(themeConfig)) {
            themeConfig.forEach(function (item) {
                if (globalVariables) {
                    mergeDeep(item, globalVariables);
                }
                _this.add((/** @type {?} */ (item)));
                _this.themes.add(item.name);
            });
        }
        else {
            if (globalVariables) {
                mergeDeep(themeConfig, globalVariables);
            }
            this.add((/** @type {?} */ (themeConfig)));
            this.themes.add(themeConfig.name);
        }
    }
    /**
     * add new theme
     * @param theme: ThemeVariables
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CoreTheme.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ CoreTheme.ngInjectableDef = defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(inject(LY_THEME, 8), inject(LY_THEME_GLOBAL_VARIABLES, 8), inject(RendererFactory2), inject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    return CoreTheme;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var YPosition = {
    above: 'above',
    below: 'below',
};
/** @enum {string} */
var XPosition = {
    before: 'before',
    after: 'after',
    left: 'left',
    right: 'right',
};
/**
 * @param {?} placement
 * @param {?} xPosition
 * @param {?} yPosition
 * @param {?} origin
 * @param {?} overlayElement
 * @param {?} themeVariables
 * @param {?=} offset
 * @return {?}
 */
function getPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset) {
    if (offset === void 0) { offset = 0; }
    /** @type {?} */
    var originRect = (/** @type {?} */ (origin.getBoundingClientRect()));
    /** @type {?} */
    var overlayElementRect = (/** @type {?} */ (overlayElement.getBoundingClientRect()));
    if (xPosition && yPosition) {
        throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
    }
    if ((xPosition || yPosition) && !placement) {
        throw new Error("`placement` is required.");
    }
    /** @type {?} */
    var x = 0;
    /** @type {?} */
    var y = 0;
    /** @type {?} */
    var ox = 'center';
    /** @type {?} */
    var oy = 'center';
    if (placement || xPosition || yPosition) {
        if (placement) {
            if (placement === YPosition.above) {
                x = (originRect.width - overlayElementRect.width) / 2;
                y = -overlayElementRect.height - offset;
                oy = 'bottom';
            }
            else if (placement === YPosition.below) {
                x = (originRect.width - overlayElementRect.width) / 2;
                y = originRect.height + offset;
                oy = 'top';
            }
            else {
                /** @type {?} */
                var dir = themeVariables.getDirection((/** @type {?} */ (placement)));
                if (dir === DirPosition.left) {
                    ox = '100%';
                    x = -overlayElementRect.width - offset;
                    y = (originRect.height - overlayElementRect.height) / 2;
                }
                else if (dir === DirPosition.right) {
                    ox = '0%';
                    x = originRect.width + offset;
                    y = (originRect.height - overlayElementRect.height) / 2;
                }
            }
        }
        if (xPosition) {
            /** @type {?} */
            var dir = themeVariables.getDirection((/** @type {?} */ (xPosition)));
            if (dir === DirPosition.right) {
                ox = '0%';
                x = 0;
            }
            else if (dir === DirPosition.left) {
                ox = '100%';
                x = originRect.width - overlayElementRect.width;
            }
        }
        else if (yPosition) {
            if (yPosition === YPosition.above) {
                y = 0;
                oy = '0%';
            }
            else if (yPosition === YPosition.below) {
                y = originRect.height - overlayElementRect.height;
                oy = '100%';
            }
        }
    }
    return {
        x: Math.round(x),
        y: Math.round(y),
        ox: ox,
        oy: oy
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultStyles = {
    '@global': {
        '*, *:after, *:before': {
            '-webkit-box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            'box-sizing': 'border-box'
        }
    }
};
/** @type {?} */
var REF_REG_EXP = /\{([\w-]+)\}/g;
/** @enum {number} */
var TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = 'Multiple';
TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
/** @type {?} */
var STYLE_MAP5 = new Map();
/** @type {?} */
var nextClassId = 0;
/** @type {?} */
var nextKeyFrameId = 0;
var StylesInDocument = /** @class */ (function () {
    function StylesInDocument() {
        this.styles = {};
        this.styleContainers = new Map();
        this.styleElementGlobalMap = new Map();
    }
    StylesInDocument.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StylesInDocument.ngInjectableDef = defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
    return StylesInDocument;
}());
/** @type {?} */
var THEME_MAP = new Map();
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(stylesInDocument, core, themeName, _document, _ngZone) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementsMap = new Map();
        this.themeMap = THEME_MAP;
        /**
         * ssr or hmr
         */
        this.isDevOrServer = isDevMode() || !Platform.isBrowser;
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
            this.elements = themeName in this.stylesInDocument.styles
                ? this.stylesInDocument.styles[themeName]
                : this.stylesInDocument.styles[themeName] = new Map();
            if (!this.initialTheme) {
                this.initialTheme = this.config.name;
            }
            if (!this.themeMap.has(this.initialTheme)) {
                this.themeMap.set(this.initialTheme, {
                    base: this.initialTheme,
                    change: null
                });
            }
            this._addDefaultStyles();
        }
    };
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     * @param parentStyle
     */
    /**
     * Add a new dynamic style, use only within \@Input()
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @param {?=} parentStyle
     * @return {?}
     */
    LyTheme2.prototype.addStyle = /**
     * Add a new dynamic style, use only within \@Input()
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @param {?=} parentStyle
     * @return {?}
     */
    function (id, style, el, instance, priority, parentStyle) {
        /** @type {?} */
        var newClass = (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (style)), id, priority, TypeStyle.OnlyOne, false, parentStyle)));
        if (newClass === instance) {
            return newClass;
        }
        if (el) {
            if (instance) {
                el.classList.remove(instance);
            }
            el.classList.add(newClass);
        }
        return newClass;
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
        if (newClass === oldClass) {
            return newClass;
        }
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
        if (!Platform.isBrowser) {
            throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
        }
        if (nam !== this.config.name) {
            this.themeMap.get(this.initialTheme).change = nam;
            this.config = this.core.get(nam);
            this._updateAllStyles();
        }
    };
    /** Toggle right-to-left/left-to-right */
    /**
     * Toggle right-to-left/left-to-right
     * @return {?}
     */
    LyTheme2.prototype.toggleDirection = /**
     * Toggle right-to-left/left-to-right
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = this.config.direction;
        this.config.direction = current === Dir.ltr ? Dir.rtl : Dir.ltr;
        this._updateAllStyles();
    };
    /**
     * @return {?}
     */
    LyTheme2.prototype._updateAllStyles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.elements.forEach(function (_, key) {
            /** @type {?} */
            var styleData = STYLE_MAP5.get(key);
            if (styleData.requireUpdate) {
                _this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true, styleData.parentStyle);
            }
        });
    };
    /**
     * Create a simple style
     * return className
     * @param id id of style
     * @param css style object or string
     * @param priority style priority
     */
    /**
     * Create a simple style
     * return className
     * @param {?} id id of style
     * @param {?} css style object or string
     * @param {?=} priority style priority
     * @return {?}
     */
    LyTheme2.prototype.addSimpleStyle = /**
     * Create a simple style
     * return className
     * @param {?} id id of style
     * @param {?} css style object or string
     * @param {?=} priority style priority
     * @return {?}
     */
    function (id, css, priority) {
        return (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (css)), id, priority, TypeStyle.OnlyOne, false)));
    };
    /**
     * @return {?}
     */
    LyTheme2.prototype._addDefaultStyles = /**
     * @return {?}
     */
    function () {
        this.addStyleSheet(defaultStyles);
    };
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param priority priority for style
     */
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} priority priority for style
     * @return {?}
     */
    LyTheme2.prototype.addStyleSheet = /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} priority priority for style
     * @return {?}
     */
    function (styles, priority) {
        return this._createStyleContent2(styles, null, priority, TypeStyle.Multiple);
    };
    /**
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @param {?=} parentStyle
     * @return {?}
     */
    LyTheme2.prototype._createStyleContent2 = /**
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @param {?=} parentStyle
     * @return {?}
     */
    function (styles, id, priority, type, forChangeTheme, parentStyle) {
        /** @type {?} */
        var newId = (/** @type {?} */ (id)) || styles;
        /** @type {?} */
        var isNewStyle;
        if (!STYLE_MAP5.has(newId)) {
            isNewStyle = true;
            STYLE_MAP5.set(newId, {
                priority: priority,
                styles: styles,
                type: type,
                css: {},
                id: id,
                parentStyle: parentStyle
            });
        }
        /** @type {?} */
        var styleMap = STYLE_MAP5.get(newId);
        /** @type {?} */
        var themeName = this.initialTheme;
        /** @type {?} */
        var isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            /**
             * create new style for new theme
             * @type {?}
             */
            var css = void 0;
            /** @type {?} */
            var themeMap = this.themeMap.get(this.initialTheme);
            /** @type {?} */
            var config = this.core.get(themeMap.change || themeName);
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(config), themeName, id, type, config);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, (/** @type {?} */ (newId)), type, config);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
                /** @type {?} */
                var newEl = this._createElementStyle(css);
                if (styleMap.requireUpdate) {
                    // This is required for when a theme changes
                    this.elements.set(newId, newEl);
                }
                else if (this.isDevOrServer) {
                    // in dev mode or server it is not necessary
                    // since the styles will not change
                    this.stylesInDocument.styleElementGlobalMap.set(newId, newEl);
                }
                this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), newEl);
            }
            if (forChangeTheme) {
                /** @type {?} */
                var el = this.elements.get(newId);
                el.innerText = css;
            }
        }
        else if (this.isDevOrServer) {
            /**
             * append child style if not exist in dom
             * for ssr or hmr
             */
            if (!this.elements.has(newId)) {
                /** @type {?} */
                var _css = styleMap.css[themeName] || styleMap.css;
                /** @type {?} */
                var map$$1 = this.stylesInDocument.styleElementGlobalMap;
                if (styleMap.requireUpdate) {
                    this.elements.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
                }
                else if (!map$$1.has(newId)) {
                    map$$1.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), map$$1.get(newId));
                }
            }
        }
        return styleMap.classes || styleMap[themeName];
    };
    /**
     * @param {?=} priority
     * @return {?}
     */
    LyTheme2.prototype._createStyleContainer = /**
     * @param {?=} priority
     * @return {?}
     */
    function (priority) {
        if (priority === void 0) { priority = 0; }
        var styleContainers = this.stylesInDocument.styleContainers;
        if (!styleContainers.has(priority)) {
            /** @type {?} */
            var el = this.core.renderer.createElement("ly-s-c");
            if (isDevMode()) {
                this.core.renderer.setAttribute(el, 'priority', "" + priority);
            }
            styleContainers.set(priority, el);
            if (styleContainers.size === 0) {
                this.core.renderer.insertBefore(this._document.body, el, this._document.body.firstChild);
                return el;
            }
        }
        else {
            return styleContainers.get(priority);
        }
        /** @type {?} */
        var refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    LyTheme2.prototype.findNode = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var styleContainers = this.stylesInDocument.styleContainers;
        /** @type {?} */
        var keys = (Array.from(styleContainers.keys())).sort();
        /** @type {?} */
        var key = keys.find(function (_) { return index < _; });
        return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
    };
    /**
     * @param {?} css
     * @return {?}
     */
    LyTheme2.prototype._createElementStyle = /**
     * @param {?} css
     * @return {?}
     */
    function (css) {
        /** @type {?} */
        var styleElement = this.core.renderer.createElement('style');
        /** @type {?} */
        var styleText = this.core.renderer.createText(css);
        this.core.renderer.appendChild(styleElement, styleText);
        return styleElement;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LyTheme2.prototype.requestAnimationFrame = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (typeof requestAnimationFrame === 'function') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    fn();
                });
            });
        }
        else {
            fn();
        }
    };
    LyTheme2.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LyTheme2.ctorParameters = function () { return [
        { type: StylesInDocument },
        { type: CoreTheme },
        { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    return LyTheme2;
}());
/**
 * @param {?} styleMap
 * @param {?} styles
 * @param {?} themeName
 * @param {?} id
 * @param {?} typeStyle
 * @param {?} themeVariables
 * @return {?}
 */
function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables) {
    // for styles type string
    if (typeStyle === TypeStyle.OnlyOne) {
        // use current class or set new
        /** @type {?} */
        var className = styleMap.requireUpdate
            ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
            : styleMap.classes
                ? styleMap.classes
                : styleMap.classes = createNextClassId();
        /** @type {?} */
        var rules = void 0;
        if (typeof styles === 'string') {
            rules = "." + className + "{" + styles + "}";
        }
        else {
            rules = styleToString(id, null, styles, themeVariables, (/** @type {?} */ (className)));
        }
        if (styleMap.parentStyle) {
            /** @type {?} */
            var styleMapOfParentStyle = STYLE_MAP5.get(styleMap.parentStyle);
            return replaceRefs(rules, styleMapOfParentStyle[themeName]);
        }
        return rules;
    }
    // for multiples styles
    /** @type {?} */
    var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    /** @type {?} */
    var content = '';
    /** @type {?} */
    var name = styles.$name ? styles.$name + "-" : '';
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            /** @type {?} */
            var value = styles[key];
            if (key === '$keyframes') {
                content += keyframesToString(name, classesMap, (/** @type {?} */ (value)), themeVariables);
            }
            else if (typeof value === 'object' || value === null) {
                // set new id if not exist
                /** @type {?} */
                var currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid("y-" + name + key + "-" + createNextClassId()) : createNextClassId();
                /** @type {?} */
                var style = styleToString(key, styles.$name, (/** @type {?} */ (value)), themeVariables, currentClassName);
                content += style;
            }
        }
    }
    return replaceRefs(content, classesMap);
}
/**
 * @param {?} str
 * @param {?} data
 * @return {?}
 */
function replaceRefs(str, data) {
    return str.replace(REF_REG_EXP, function (match, token) {
        /** @type {?} */
        var className = data[token];
        if (className) {
            return "." + data[token];
        }
        else {
            return data["@\u0433.->-" + token];
        }
    });
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} key
 * @param {?} $name
 * @param {?} ob
 * @param {?} themeVariables
 * @param {?} currentKey
 * @param {?=} parentKey
 * @return {?}
 */
function styleToString(key, $name, ob, themeVariables, currentKey, parentKey) {
    /** @type {?} */
    var content = '';
    /** @type {?} */
    var subContent = '';
    /** @type {?} */
    var keyAndValue = '';
    /** @type {?} */
    var newKey;
    if (parentKey) {
        if (currentKey.indexOf('&') !== -1) {
            newKey = currentKey.replace(/&/g, parentKey);
        }
        else if (currentKey.indexOf('@media') === 0) {
            newKey = "" + currentKey;
        }
        else {
            newKey = parentKey + " " + currentKey;
        }
    }
    else if (key === '@global') {
        newKey = key;
    }
    else {
        newKey = "." + currentKey;
    }
    for (var styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            /** @type {?} */
            var element = ob[styleKey];
            // Omit style with value null
            if (element != null) {
                // Check if is Object literal
                if (element.constructor === Object) {
                    subContent += styleToString(key, $name, (/** @type {?} */ (element)), themeVariables, styleKey, newKey);
                }
                else {
                    keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
                }
            }
        }
    }
    if (keyAndValue) {
        if (isDevMode()) {
            /** @type {?} */
            var lin = '\n\n';
            if ($name) {
                lin += "/** Style Sheet name: " + $name + " */\n";
            }
            lin += "/** Style Key: " + key + " */\n";
            content += "" + lin;
        }
        if (newKey.indexOf('@media') === 0) {
            content += "" + newKey;
            keyAndValue = parentKey + "{" + keyAndValue + "}";
        }
        else if (parentKey && parentKey === '@global') {
            content += "" + currentKey;
        }
        else {
            content += "" + newKey;
        }
        content += "{" + keyAndValue + "}";
    }
    return content + subContent;
}
/**
 * @param {?} key
 * @param {?} value
 * @param {?} themeVariables
 * @return {?}
 */
function convertToStyleValue(key, value, themeVariables) {
    /** @type {?} */
    var newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
    if (value.constructor === Array) {
        /** @type {?} */
        var lin = '';
        for (var index = 0; index < value.length; index++) {
            lin += newStyleKey + ":" + value[index] + ";";
        }
        return lin;
    }
    else {
        return newStyleKey + ":" + value + ";";
    }
}
/**
 * @param {?} styleName
 * @param {?} keysMap
 * @param {?} keyframes
 * @param {?} themeVariables
 * @return {?}
 */
function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
    /** @type {?} */
    var content = '';
    for (var name_1 in keyframes) {
        if (keyframes.hasOwnProperty(name_1)) {
            /** @type {?} */
            var keyframe = keyframes[name_1];
            // Sometimes the name of a class can be the same as the name of a keyframe,
            // so we add a character to be different
            /** @type {?} */
            var newUniqueName = "@\u0433.->-" + name_1;
            // set new id if not exist
            /** @type {?} */
            var newName = newUniqueName in keysMap
                ? keysMap[newUniqueName]
                : keysMap[newUniqueName] = isDevMode() ? toClassNameValid("" + styleName + name_1 + "-" + createNextKeyframeId() + "-v") : createNextKeyframeId();
            content += "@keyframes " + newName + "{";
            for (var percent in keyframe) {
                if (keyframe.hasOwnProperty(percent)) {
                    content += percent + "%{";
                    /** @type {?} */
                    var styles = keyframe[percent];
                    for (var key in styles) {
                        if (styles.hasOwnProperty(key)) {
                            /** @type {?} */
                            var val = styles[key];
                            content += convertToStyleValue(key, (/** @type {?} */ (val)), themeVariables);
                        }
                    }
                    content += "}";
                }
            }
            content += "}";
        }
    }
    return content;
}
/**
 * @param {?} str
 * @param {?} key
 * @param {?} to
 * @return {?}
 */
function warnDeprecatedKeyStyle(str, key, to) {
    console.warn("Style key `" + key + "` deprecated for `" + str + "`, change `" + key + "` to `" + to + "`\n");
}
/**
 * @param {?} str
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyle(str, themeVariables) {
    /** @type {?} */
    var hyphenCase = toHyphenCase(str);
    if (hyphenCase.indexOf(DirAlias.start) !== -1) {
        warnDeprecatedKeyStyle(str, DirAlias.start, DirAlias.before);
        return dirCache(str, hyphenCase, themeVariables, DirAlias.start);
    }
    else if (hyphenCase.indexOf(DirAlias.end) !== -1) {
        warnDeprecatedKeyStyle(str, DirAlias.end, DirAlias.after);
        return dirCache(str, hyphenCase, themeVariables, DirAlias.end);
    }
    else if (hyphenCase.indexOf(DirAlias.before) !== -1) {
        return dirCache(str, hyphenCase, themeVariables, DirAlias.before);
    }
    else if (hyphenCase.indexOf(DirAlias.after) !== -1) {
        return dirCache(str, hyphenCase, themeVariables, DirAlias.after);
    }
    else if (hyphenCase.indexOf(YPosition.above) !== -1) {
        return YPositionCache(str, hyphenCase, themeVariables, YPosition.above, TOP);
    }
    else if (hyphenCase.indexOf(YPosition.below) !== -1) {
        return YPositionCache(str, hyphenCase, themeVariables, YPosition.below, BOTTOM);
    }
    return hyphenCase;
}
/**
 * @param {?} str
 * @return {?}
 */
function toClassNameValid(str) {
    /** @type {?} */
    var s = str.replace(/^[0-9]|[^\w\-]/g, function (_) {
        return "_" + _.charCodeAt(0);
    });
    return toHyphenCase(s);
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
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyleCache(str, themeVariables) {
    /** @type {?} */
    var map$$1 = STYLE_KEYS_MAP[themeVariables.direction];
    return str in map$$1
        ? map$$1[str]
        : map$$1[str] = converterToCssKeyAndStyle(str, themeVariables);
}
/** @type {?} */
var ignoreCSSKEY = {
    'break-after': 'break-after',
    'break-before': 'break-before',
    'page-break-after': 'page-break-after',
    'page-break-before': 'page-break-before'
};
/** @type {?} */
var STYLE_KEYS_MAP = {
    rtl: __assign({}, ignoreCSSKEY),
    ltr: __assign({}, ignoreCSSKEY)
};
/** @type {?} */
var BOTTOM = 'bottom';
/** @type {?} */
var TOP = 'top';
/**
 * @param {?} original
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} dirAlias
 * @return {?}
 */
function dirCache(original, val, themeVariables, dirAlias) {
    /** @type {?} */
    var map$$1 = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map$$1[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
}
/**
 * @param {?} original
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} pos
 * @param {?} to
 * @return {?}
 */
function YPositionCache(original, val, themeVariables, pos, to) {
    /** @type {?} */
    var map$$1 = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map$$1[original] = val.replace(pos, to);
}
/**
 * @param {?} str
 * @return {?}
 */
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
/**
 * @return {?}
 */
function createNextClassId() {
    return "i" + (nextClassId++).toString(36);
}
/**
 * @return {?}
 */
function createNextKeyframeId() {
    return "k" + (nextKeyFrameId++).toString(36);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(_viewRef) {
        this._viewRef = _viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            if (templateRef) {
                this._ngTransclude = templateRef;
                this._viewRef.createEmbeddedView(templateRef);
            }
            else {
                this._ngTransclude = null;
                this._viewRef.clear();
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
        { type: Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: Input }]
    };
    return NgTranscludeDirective;
}());
var NgTranscludeModule = /** @class */ (function () {
    function NgTranscludeModule() {
    }
    NgTranscludeModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NgTranscludeDirective],
                    declarations: [NgTranscludeDirective]
                },] }
    ];
    return NgTranscludeModule;
}());
/**
 * @ignore
 * @param {?} element
 * @return {?}
 */
function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE = '';
/** @type {?} */
var STYLE_PRIORITY = -1;
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinStyleUpdater(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        /**
         * @return {?}
         */
        class_1.prototype.setAutoContrast = /**
         * @return {?}
         */
        function () {
            this._autoContrast = true;
        };
        /**
         * @param {?} element
         * @return {?}
         */
        class_1.prototype.updateStyle = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var __bg = this.bg;
            /** @type {?} */
            var __color = this.color;
            /** @type {?} */
            var __raised = this.raised;
            /** @type {?} */
            var __elevation = this.elevation;
            /** @type {?} */
            var __disabled = this.disabled;
            /** @type {?} */
            var __outlined = this.outlined;
            /** @type {?} */
            var __shadowColor = this.shadowColor;
            /** @type {?} */
            var __isContrast = this._autoContrast && !__color || __color === 'auto';
            /** @type {?} */
            var newKey = "common----:" + (__bg || DEFAULT_VALUE) + "\u00B7" + (__color || DEFAULT_VALUE) + "\u00B7" + (__raised || DEFAULT_VALUE) + "\u00B7" + (__elevation || DEFAULT_VALUE) + "\u00B7" + (__disabled || DEFAULT_VALUE) + "\u00B7" + (__outlined || DEFAULT_VALUE) + "\u00B7" + (__shadowColor || DEFAULT_VALUE) + "\u00B7" + (__isContrast || DEFAULT_VALUE);
            this._classNameAnonymous = this._theme.addStyle(newKey, function (theme) {
                /** @type {?} */
                var style = {};
                if (__outlined) {
                    style.border = '1px solid currentColor';
                }
                if (__disabled) {
                    style.color = theme.text.disabled;
                    style.pointerEvents = 'none';
                    if (__bg) {
                        style.background = theme.disabled.default;
                    }
                }
                else {
                    if (__bg) {
                        style.background = theme.colorOf(__bg);
                        if (__isContrast) {
                            style.color = theme.colorOf(__bg + ":contrast");
                        }
                    }
                    if (!style.color && __color) {
                        style.color = theme.colorOf(__color);
                    }
                    if (__raised || __elevation) {
                        if (!__bg) {
                            style.background = theme.background.primary.default;
                        }
                        /** @type {?} */
                        var backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                        /** @type {?} */
                        var shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
                        style.boxShadow = shadowBuilder(__elevation || 3, shadowColor);
                        if (!__elevation) {
                            style['&:active'] = {
                                boxShadow: shadowBuilder(8, shadowColor)
                            };
                        }
                    }
                }
                return (/** @type {?} */ (style));
            }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
        };
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function toBoolean(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var RippleRef = /** @class */ (function () {
    function RippleRef() {
        this.state = true;
        this.timestamp = -Date.now();
        this.container = document.createElement('span');
    }
    /**
     * @return {?}
     */
    RippleRef.prototype.end = /**
     * @return {?}
     */
    function () {
        this.state = false;
        this.timestamp += Date.now();
    };
    return RippleRef;
}());
var Ripple = /** @class */ (function () {
    function Ripple(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
        this._themeVariables = _themeVariables;
        this._ngZone = _ngZone;
        this.classes = classes;
        this._containerElement = _containerElement;
        this._triggerElement = _triggerElement;
        this._eventHandlers = new Map();
        this.config = {};
        this._transitionDuration = this._themeVariables.ripple.duration;
        this._eventOptions = (/** @type {?} */ ({ passive: true }));
        if (Platform.isBrowser) {
            if (typeof PointerEvent === 'function' && typeof TouchEvent === 'function') {
                this._eventHandlers.set('pointerdown', this.onPointerDown.bind(this));
            }
            else {
                this._eventHandlers.set('mousedown', this.onPointerDown.bind(this));
            }
            this._eventHandlers.set('touchend', this.onPointerLeave.bind(this));
            this._eventHandlers.set('touchcancel', this.onPointerLeave.bind(this));
            this._eventHandlers.set('mouseup', this.onPointerLeave.bind(this));
            this._eventHandlers.set('mouseleave', this.onPointerLeave.bind(this));
            if (!_triggerElement) {
                _triggerElement = _containerElement;
            }
            this.setTriggerElement(_triggerElement);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    Ripple.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = config;
    };
    Object.defineProperty(Ripple.prototype, "_rectContainer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._containerElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    Ripple.prototype.setTriggerElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (element) {
            // element.classList.add(this.stylesData[0]);
            // this._renderer.addClass(element, this.stylesData[0].id);
            this._ngZone.runOutsideAngular(function () {
                _this._eventHandlers.forEach(function (fn, type) { return element.addEventListener(type, fn, _this._eventOptions); });
            });
        }
        this._triggerElement = element;
    };
    /**
     * @param {?} styles
     * @return {?}
     */
    Ripple.prototype.createRipple = /**
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        this._rippleRef = new RippleRef();
        /** @type {?} */
        var container = this._rippleRef.container;
        container.className = this.classes.rippleContainer;
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                /** @type {?} */
                var element = styles[key];
                if (typeof element === 'number') {
                    container.style[key] = element + "px";
                }
                else {
                    container.style[key] = element;
                }
            }
        }
        this._containerElement.appendChild(container);
        window.getComputedStyle(container).getPropertyValue('opacity');
        container.style.transform = "scale(1)";
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Ripple.prototype.onPointerDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.config.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.config);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Ripple.prototype.onPointerLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.config.disabled) {
            this.endRipple();
        }
    };
    /**
     * @param {?} event
     * @param {?} rippleConfig
     * @return {?}
     */
    Ripple.prototype.startRipple = /**
     * @param {?} event
     * @param {?} rippleConfig
     * @return {?}
     */
    function (event, rippleConfig) {
        /** @type {?} */
        var containerRect = this._rectContainer;
        /** @type {?} */
        var x = event.clientX;
        /** @type {?} */
        var y = event.clientY;
        if (rippleConfig.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        var left = x - containerRect.left;
        /** @type {?} */
        var top = y - containerRect.top;
        /** @type {?} */
        var radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
        if (rippleConfig.percentageToIncrease) {
            radius += radius * rippleConfig.percentageToIncrease / 100;
        }
        this.createRipple({
            left: left - radius,
            top: top - radius,
            width: radius * 2,
            height: radius * 2,
            transitionDuration: this._transitionDuration + "ms"
        });
    };
    /**
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    Ripple.prototype.runTimeoutOutsideZone = /**
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    function (fn, delay) {
        if (delay === void 0) { delay = 0; }
        this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    /**
     * @return {?}
     */
    Ripple.prototype.endRipple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rippleRef = this._rippleRef || null;
        /** @type {?} */
        var duration = this._transitionDuration;
        if (rippleRef && rippleRef.state) {
            rippleRef.end();
            this.runTimeoutOutsideZone(function () {
                rippleRef.container.style.opacity = '0';
                rippleRef.container.style.transitionDuration = _this._transitionDuration / 5 + "ms";
                // }, rippleRef.timestamp < duration ? duration : 0);
                // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) : 0);
            }, rippleRef.timestamp < duration ? duration * .15 : 0);
            this.runTimeoutOutsideZone(function () {
                rippleRef.container.parentNode.removeChild(rippleRef.container);
                // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
            }, rippleRef.timestamp < duration ? duration * 2 : duration);
        }
    };
    /**
     * @return {?}
     */
    Ripple.prototype.removeEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._triggerElement) {
            this._eventHandlers.forEach(function (fn, type) {
                _this._triggerElement.removeEventListener(type, fn, _this._eventOptions);
            });
        }
    };
    return Ripple;
}());
/**
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function rippleRadius(x, y, rect) {
    /** @type {?} */
    var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @param {?} rect
 * @return {?}
 */
function maxSize(rect) {
    return Math.max(rect.width, rect.height);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_COMMON_STYLES = {
    fill: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        outline: 0,
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none'
    }
};
var LyCoreStyles = /** @class */ (function () {
    function LyCoreStyles(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES);
    }
    LyCoreStyles.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LyCoreStyles.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyCoreStyles.ngInjectableDef = defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(inject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
    return LyCoreStyles;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var styles = function (theme) { return ({
    rippleContainer: {
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: 'currentColor',
        opacity: '.2',
        borderRadius: '50%',
        transform: 'scale(0)',
        transition: "opacity " + theme.ripple.transition.opacity + ",transform " + theme.ripple.transition.transform,
        pointerEvents: 'none'
    },
    container: __assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
}); };
var LyRippleService = /** @class */ (function () {
    function LyRippleService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
    LyRippleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyRippleService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyRippleService.ngInjectableDef = defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(inject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
    return LyRippleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._rippleConfig = {};
            _this._disableRipple = null;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disableRipple", {
            get: /**
             * @return {?}
             */
            function () { return this._disableRipple; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                if (Platform.isBrowser && val !== this._disableRipple) {
                    /** @type {?} */
                    var newVal = this._disableRipple = toBoolean(val);
                    // remove previous ripple if exist
                    this._removeRippleEvents();
                    if (!newVal) {
                        // add ripple
                        Promise.resolve(null).then(function () {
                            /** @type {?} */
                            var rippleContainer = _this._rippleContainer.nativeElement;
                            /** @type {?} */
                            var triggerElement = _this._triggerElement.nativeElement;
                            _this._ripple = new Ripple(_this._theme.config, _this._ngZone, _this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                            _this._ripple.setConfig(_this._rippleConfig);
                        });
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        class_1.prototype._removeRippleEvents = /**
         * @return {?}
         */
        function () {
            if (Platform.isBrowser) {
                if (this._ripple) {
                    this._ripple.removeEvents();
                    this._ripple = null;
                }
            }
        };
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._disabled = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_COLOR = 'primary';
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinColor(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () { return this._color; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var defaultColor = val || DEFAULT_COLOR;
                if (defaultColor !== this.color) {
                    this._color = defaultColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_BG = 'primary';
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinBg(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "bg", {
            get: /**
             * @return {?}
             */
            function () { return this._bg; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var defaultColor = val || DEFAULT_BG;
                if (defaultColor !== this.bg) {
                    this._bg = defaultColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinRaised(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "raised", {
            get: /**
             * @return {?}
             */
            function () { return this._raised; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._raised = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinOutlined(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "outlined", {
            get: /**
             * @return {?}
             */
            function () { return this._outlined; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._outlined = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinElevation(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "elevation", {
            get: /**
             * @return {?}
             */
            function () { return this._elevation; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._elevation = value; },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinShadowColor(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "shadowColor", {
            get: /**
             * @return {?}
             */
            function () { return this._shadowColor; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._shadowColor = value; },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_BG$1 = 'paper';
var LyPaperBase = /** @class */ (function () {
    function LyPaperBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyPaperBase;
}());
/** @type {?} */
var LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
var LyPaper = /** @class */ (function (_super) {
    __extends(LyPaper, _super);
    function LyPaper(theme, ngZone, _el, _renderer) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this.setAutoContrast();
        _this._triggerElement = _this._el;
        _this._rippleContainer = _this._el;
        return _this;
    }
    Object.defineProperty(LyPaper.prototype, "hasText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasText;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hasText = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyPaper.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyPaper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG$1;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    };
    /**
     * @return {?}
     */
    LyPaper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeRippleEvents();
    };
    LyPaper.decorators = [
        { type: Directive, args: [{
                    selector: "ly-paper, [ly-paper], [ly-text]",
                    inputs: [
                        'bg',
                        'flat',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                        'disableRipple'
                    ]
                },] }
    ];
    /** @nocollapse */
    LyPaper.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyPaper.propDecorators = {
        hasText: [{ type: Input, args: ['ly-text',] }]
    };
    return LyPaper;
}(LyPaperMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyWithClass = /** @class */ (function () {
    function LyWithClass(el) {
        this.el = el;
    }
    Object.defineProperty(LyWithClass.prototype, "withClass", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (!val) {
                throw new Error("'" + val + "' is not valid className");
            }
            this.el.nativeElement.classList.add(val);
        },
        enumerable: true,
        configurable: true
    });
    LyWithClass.decorators = [
        { type: Directive, args: [{
                    selector: '[withClass]'
                },] }
    ];
    /** @nocollapse */
    LyWithClass.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    LyWithClass.propDecorators = {
        withClass: [{ type: Input }]
    };
    return LyWithClass;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyWithClass, LyPaper],
                    exports: [LyWithClass, LyPaper]
                },] }
    ];
    return LyCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    /** @type {?} */
    var docElem;
    /** @type {?} */
    var win;
    /** @type {?} */
    var box = { top: 0, left: 0 };
    /** @type {?} */
    var doc = elem && elem.ownerDocument;
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var FocusStatus = {
    /**mouse and/or touch*/
    DEFAULT: 'default',
    /** keyboard and/or program*/
    KEYBOARD: 'keyboard',
};
var LyFocusState = /** @class */ (function () {
    function LyFocusState(_ngZone) {
        this._ngZone = _ngZone;
        this._elementMap = new Map();
        this._count = 0;
    }
    /**
     * @param {?} element
     * @param {?=} keyElement
     * @return {?}
     */
    LyFocusState.prototype.listen = /**
     * @param {?} element
     * @param {?=} keyElement
     * @return {?}
     */
    function (element, keyElement) {
        var _this = this;
        if (!Platform.isBrowser) {
            // return null if it is not browser platform
            return null;
        }
        /** @type {?} */
        var nativeElement = getNativeElement(element);
        /** @type {?} */
        var key = keyElement && getNativeElement(keyElement) || nativeElement;
        if (this._elementMap.has(key)) {
            return this._elementMap.get(key).subject.asObservable();
        }
        /** @type {?} */
        var focusState = {
            unlisten: null,
            subject: new Subject()
        };
        this._incrementCount();
        /** @type {?} */
        var focusListener = function (event) { return _this._on(event, focusState.subject); };
        /** @type {?} */
        var blurListener = function (event) { return _this._on(event, focusState.subject); };
        focusState.unlisten = function () {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        };
        this._elementMap.set(key, focusState);
        this._ngZone.runOutsideAngular(function () {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        });
        return focusState.subject.asObservable();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    LyFocusState.prototype.unlisten = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var focusStateInfo = this._elementMap.get(getNativeElement(element));
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._decrementCount();
        }
    };
    /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    LyFocusState.prototype._on = /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    function (event, subject) {
        var _this = this;
        this._ngZone.run(function () { return subject.next({
            event: event,
            by: _this._currentEvent || 'keyboard'
        }); });
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype._addGlobalListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var eventListenerOptions = supportsPassiveEventListeners
            ? {
                passive: true,
                capture: true
            } : false;
        /** @type {?} */
        var documentKeydownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'keyboard'; }); };
        /** @type {?} */
        var documentMousedownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'mouse'; }); };
        this._ngZone.runOutsideAngular(function () {
            document.addEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.addEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        });
        this._removeGlobalListeners = function () {
            document.removeEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.removeEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        };
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype._incrementCount = /**
     * @return {?}
     */
    function () {
        if (++this._count === 1) {
            this._addGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype._decrementCount = /**
     * @return {?}
     */
    function () {
        if (!--this._count) {
            this._removeGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementMap.forEach(function (_, element) { return _this.unlisten(element); });
    };
    LyFocusState.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyFocusState.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    /** @nocollapse */ LyFocusState.ngInjectableDef = defineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(inject(NgZone)); }, token: LyFocusState, providedIn: "root" });
    return LyFocusState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var AUI_VERSION = '1.9.7-nightly.20181213-jpmc6zgx';
/** @type {?} */
var AUI_LAST_UPDATE = '2018-12-13T08:23:33.392Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
/** @type {?} */
var HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft',
    'slidecancel'
];
var LyHammerGestureConfig = /** @class */ (function (_super) {
    __extends(LyHammerGestureConfig, _super);
    function LyHammerGestureConfig(_hammerOptions) {
        var _this = _super.call(this) || this;
        _this._hammerOptions = _hammerOptions;
        _this.events = HAMMER_GESTURES_EVENTS;
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
        /** @type {?} */
        var hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        /** @type {?} */
        var mc = new hammer(element, this._hammerOptions || {});
        /** @type {?} */
        var pan = new hammer.Pan();
        /** @type {?} */
        var swipe = new hammer.Swipe();
        /** @type {?} */
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
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
        /** @type {?} */
        var recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    LyHammerGestureConfig.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LyHammerGestureConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] }] }
    ]; };
    return LyHammerGestureConfig;
}(HammerGestureConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                [LyTheme2],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    };
    LyThemeModule.decorators = [
        { type: NgModule }
    ];
    return LyThemeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var Undefined = /** @class */ (function () {
    function Undefined() {
    }
    return Undefined;
}());
/** @type {?} */
var UndefinedValue = new Undefined();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {number} */
var InvertMediaQuery = {
    No: 0,
    Yes: 1,
};
InvertMediaQuery[InvertMediaQuery.No] = 'No';
InvertMediaQuery[InvertMediaQuery.Yes] = 'Yes';
/**
 * @param {?} media
 * @param {?=} invertMediaQuery
 * @return {?}
 */
function transformMediaQuery(media, invertMediaQuery) {
    if (invertMediaQuery === void 0) { invertMediaQuery = InvertMediaQuery.No; }
    if (media && invertMediaQuery === InvertMediaQuery.Yes) {
        /** @type {?} */
        var newVal = media.split(',').map(function (_) { return "not " + _; });
        return newVal;
    }
    return media;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var styles$1 = function (theme) { return ({
    overlayBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay,
        pointerEvents: 'none'
    }
}); };
var WindowScrollService = /** @class */ (function () {
    function WindowScrollService(document, ngZone) {
        var _this = this;
        this.document = document;
        if (Platform.isBrowser) {
            ngZone.runOutsideAngular(function () {
                _this.scroll$ = fromEvent(window.document, 'scroll').pipe(auditTime(20), map(function () {
                    return window.scrollY || _this.document.documentElement.scrollTop;
                }), share());
            });
        }
        else {
            this.scroll$ = empty();
        }
    }
    WindowScrollService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WindowScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ WindowScrollService.ngInjectableDef = defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(inject(DOCUMENT), inject(NgZone)); }, token: WindowScrollService, providedIn: "root" });
    return WindowScrollService;
}());
var LyOverlayContainer = /** @class */ (function () {
    function LyOverlayContainer(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles$1);
        this._items = new Set();
        if (Platform.isBrowser) {
            /** @type {?} */
            var container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    Object.defineProperty(LyOverlayContainer.prototype, "containerElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._containerElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add instance
     * @ignore
     */
    /**
     * Add instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    LyOverlayContainer.prototype._add = /**
     * Add instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._items.add(item);
        this.containerElement.appendChild(item);
        this._update();
    };
    /**
   * Remove instance
   * @ignore
   */
    /**
     * Remove instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    LyOverlayContainer.prototype._remove = /**
     * Remove instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    };
    /**
     * Update styles for overlay container
     * @ignore
     */
    /**
     * Update styles for overlay container
     * @ignore
     * @return {?}
     */
    LyOverlayContainer.prototype._update = /**
     * Update styles for overlay container
     * @ignore
     * @return {?}
     */
    function () {
        if (this._items.size) {
            if (!this._isActiveOverlayContainer) {
                this._isActiveOverlayContainer = true;
                this._containerElement.classList.add(this._classes.overlayBackdrop);
            }
        }
        else if (this._isActiveOverlayContainer) {
            this._containerElement.classList.remove(this._classes.overlayBackdrop);
            this._isActiveOverlayContainer = false;
        }
    };
    LyOverlayContainer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyOverlayContainer.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyOverlayContainer.ngInjectableDef = defineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(inject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
    return LyOverlayContainer;
}());
/** @type {?} */
var BACKDROP_STYLES = ({
    backdrop: {
        pointerEvents: 'all',
        userSelect: 'none'
    }
});
var LyOverlayBackdrop = /** @class */ (function () {
    function LyOverlayBackdrop(el, _theme, _overlayConfig, commonStyles) {
        this._theme = _theme;
        this._overlayConfig = _overlayConfig;
        /**
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(BACKDROP_STYLES);
        el.nativeElement.classList.add(commonStyles.classes.fill);
        if (_overlayConfig.backdrop) {
            el.nativeElement.classList.add(this.classes.backdrop);
        }
    }
    /**
     * @return {?}
     */
    LyOverlayBackdrop.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this._overlayConfig.fnDestroy();
    };
    LyOverlayBackdrop.decorators = [
        { type: Component, args: [{
                    selector: 'ly-overlay-backdrop',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    LyOverlayBackdrop.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: undefined, decorators: [{ type: Inject, args: ['overlayConfig',] }] },
        { type: LyCoreStyles }
    ]; };
    LyOverlayBackdrop.propDecorators = {
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return LyOverlayBackdrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ResizeService = /** @class */ (function () {
    function ResizeService(document, ngZone) {
        var _this = this;
        this.document = document;
        if (Platform.isBrowser) {
            ngZone.runOutsideAngular(function () {
                _this.resize$ = fromEvent(window, 'resize').pipe(auditTime(20), map(function () {
                    return window.innerHeight || _this.document.documentElement.clientHeight;
                }), share());
            });
        }
        else {
            this.resize$ = empty();
        }
    }
    ResizeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ResizeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ ResizeService.ngInjectableDef = defineInjectable({ factory: function ResizeService_Factory() { return new ResizeService(inject(DOCUMENT), inject(NgZone)); }, token: ResizeService, providedIn: "root" });
    return ResizeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CreateFromTemplateRef = /** @class */ (function () {
    function CreateFromTemplateRef(_componentFactoryResolver, _appRef, _templateRef, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this.windowSRSub = Subscription.EMPTY;
        // this._viewRef = _templateRef.createEmbeddedView(_context);
        // this._viewRef.detectChanges();
        this._el = document.createElement('div');
        // this._viewRef.rootNodes.forEach(rootNode => container.appendChild(rootNode));
        /** @type {?} */
        var __styles = __assign({ position: 'absolute', display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', pointerEvents: 'all' }, config.styles);
        /** @type {?} */
        var newInjector = Injector.create([
            {
                provide: 'overlayConfig',
                useValue: (/** @type {?} */ (__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles })))
            }
        ], this._injector);
        this.updateStyles(__styles);
        if (config.host) {
            this.windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                /** @type {?} */
                var rect = config.host.getBoundingClientRect();
                /** @type {?} */
                var newStyles = {
                    top: rect.top,
                    left: rect.left
                };
                _this.updateStyles(newStyles);
            });
        }
        /** @type {?} */
        var classes = config.classes;
        if (classes && classes.length) {
            classes.forEach(function (className) { return ((/** @type {?} */ (_this._el))).classList.add(className); });
        }
        this._compRefOverlayBackdrop = this.generateComponent(LyOverlayBackdrop, newInjector);
        this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
        /** @type {?} */
        var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
        this._overlayContainer._add(backdropEl);
        this._appendComponentToBody(_templateRef, _context, this._injector);
    }
    Object.defineProperty(CreateFromTemplateRef.prototype, "containerElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._el;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} __styles
     * @return {?}
     */
    CreateFromTemplateRef.prototype.updateStyles = /**
     * @param {?} __styles
     * @return {?}
     */
    function (__styles) {
        /** Apply styles */
        /** set styles */
        for (var key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                /** @type {?} */
                var styleVal = __styles[key];
                if (styleVal) {
                    this._el.style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                }
            }
        }
    };
    /**
     * @param {?} type
     * @param {?} context
     * @param {?} injector
     * @return {?}
     */
    CreateFromTemplateRef.prototype._appendComponentToBody = /**
     * @param {?} type
     * @param {?} context
     * @param {?} injector
     * @return {?}
     */
    function (type, context, injector) {
        var _this = this;
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
            /** @type {?} */
            var viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(function (_) { return _this._el.appendChild(_); });
            // Append DOM element to the body
            this._overlayContainer._add(this._el);
        }
        else if (typeof type === 'string') {
            this._el.innerText = type;
            this._overlayContainer._add(this._el);
        }
        else {
            this._compRef = this.generateComponent((/** @type {?} */ (type)), injector);
            this._el = this._compRef.location.nativeElement;
            this._overlayContainer._add(this._el);
        }
    };
    /**
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    CreateFromTemplateRef.prototype.generateComponent = /**
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    function (type, injector) {
        /** @type {?} */
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    };
    /**
     * @return {?}
     */
    CreateFromTemplateRef.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
    };
    /**
     * @return {?}
     */
    CreateFromTemplateRef.prototype.remove = /**
     * @return {?}
     */
    function () {
        if (this._viewRef) {
            this._viewRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = null;
        }
        else if (this._compRef) {
            this._compRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = null;
        }
        else if (this._el) {
            // remove if content is string
            this._overlayContainer._remove(this._el);
            this._el = null;
        }
        if (this._compRefOverlayBackdrop) {
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            this._compRefOverlayBackdrop.destroy();
            /** @type {?} */
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this.windowSRSub.unsubscribe();
    };
    /**
     * @return {?}
     */
    CreateFromTemplateRef.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this.remove();
    };
    return CreateFromTemplateRef;
}());
var LyOverlay = /** @class */ (function () {
    function LyOverlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} config
     * @return {?}
     */
    LyOverlay.prototype.create = /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} config
     * @return {?}
     */
    function (template, context, config) {
        return new CreateFromTemplateRef(this._componentFactoryResolver, this._appRef, template, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    };
    LyOverlay.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyOverlay.ctorParameters = function () { return [
        { type: LyOverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: WindowScrollService },
        { type: ResizeService }
    ]; };
    /** @nocollapse */ LyOverlay.ngInjectableDef = defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(inject(LyOverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(WindowScrollService), inject(ResizeService)); }, token: LyOverlay, providedIn: "root" });
    return LyOverlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyOverlayModule = /** @class */ (function () {
    function LyOverlayModule() {
    }
    LyOverlayModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyOverlayBackdrop],
                    entryComponents: [LyOverlayBackdrop]
                },] }
    ];
    return LyOverlayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var MUTATION_OBSERVER_INIT = {
    characterData: true,
    childList: true,
    subtree: true
};
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    MutationObserverFactory.prototype.create = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MutationObserverFactory.ngInjectableDef = defineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    return MutationObserverFactory;
}());
var ElementObserver = /** @class */ (function () {
    function ElementObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ElementObserver.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this.destroy(element); });
    };
    /**
     * @param {?} elementOrRef
     * @param {?} fn
     * @param {?=} options
     * @return {?}
     */
    ElementObserver.prototype.observe = /**
     * @param {?} elementOrRef
     * @param {?} fn
     * @param {?=} options
     * @return {?}
     */
    function (elementOrRef, fn, options) {
        /** @type {?} */
        var element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            var observer = this._mutationObserverFactory.create(fn);
            if (observer) {
                observer.observe(element, options || MUTATION_OBSERVER_INIT);
            }
            this._observedElements.set(element, observer);
        }
        return this._observedElements.get(element);
    };
    /**
     * Destroy Observer
     */
    /**
     * Destroy Observer
     * @param {?} elementOrRef
     * @return {?}
     */
    ElementObserver.prototype.destroy = /**
     * Destroy Observer
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        /** @type {?} */
        var element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).disconnect();
            this._observedElements.delete(element);
        }
    };
    ElementObserver.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ElementObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory }
    ]; };
    /** @nocollapse */ ElementObserver.ngInjectableDef = defineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(inject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
    return ElementObserver;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var AlignAlias = {
    rowReverse: 'row-reverse',
    columnReverse: 'column-reverse',
    wrapReverse: 'wrap-reverse',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
};

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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, supportsPassiveEventListeners, LyCommonModule, getNativeElement, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, defaultEntry, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyPaperBase, LyPaperMixinBase, LyPaper, CoreTheme, LY_THEME_GLOBAL_VARIABLES, LY_THEME, LY_THEME_NAME, converterToCssKeyAndStyle, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, Dir, DirAlias, DirPosition, WindowScrollService, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, MutationObserverFactory, ElementObserver, ResizeService, mixinStyleUpdater, mixinDisableRipple, mixinDisabled, mixinColor, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Ripple, LyRippleService, getPosition, YPosition, XPosition, AlignAlias, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGFzc2l2ZS1saXN0ZW5lcnMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vYnVpbGQtY29tbW9uLWJlaGF2aW9ycy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlLXJpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZGlzYWJsZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2NvbG9yLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9iZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vcmFpc2VkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9vdXRsaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZWxldmF0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9zaGFkb3ctY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcGFwZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LWNvbnRhaW5lci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vcmVzaXplLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5Lm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wb3NpdGlvbi9hbGlnbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RZSVEoaGV4Y29sb3IpIHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgY29uc3QgeWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xuICByZXR1cm4gKHlpcSA+PSAxMjgpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG59XG4iLCJpbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG5jb25zdCBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xuY29uc3Qgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuZXhwb3J0IGNvbnN0IFNoYWRvd3MgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDMsIDAsIDAsIDEsIDEsIDAsIDAsIDIsIDEsIC0xXSxcbiAgWzAsIDEsIDUsIDAsIDAsIDIsIDIsIDAsIDAsIDMsIDEsIC0yXSxcbiAgWzAsIDEsIDgsIDAsIDAsIDMsIDQsIDAsIDAsIDMsIDMsIC0yXSxcbiAgWzAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMF0sXG4gIFswLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxXSxcbiAgWzAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDJdLFxuICBbMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMl0sXG4gIFswLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgM10sXG4gIFswLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgM10sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNF0sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNF0sXG4gIFswLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNF0sXG4gIFswLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNV0sXG4gIFswLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDVdLFxuICBbMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1XSxcbiAgWzAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNl0sXG4gIFswLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDZdLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgN10sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3XSxcbiAgWzAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDddLFxuICBbMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOF0sXG4gIFswLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4XVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb246IG51bWJlciB8IHN0cmluZyA9IDIsIGNvbG9yID0gJyMwMDAnKSB7XG4gIGNvbnN0IENvbG9yID0gY2hyb21hKGNvbG9yKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYGJveC1zaGFkb3c6JHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nLCBjb2xvcj86IHN0cmluZykge1xuICBsZXQgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKTtcbiAgY29uc3QgcmdiID0gQ29sb3IuZ2V0KCdyZ2InKSBhcyBhbnkgYXMgbnVtYmVyW107XG4gIGlmICghKHJnYlswXSA9PT0gcmdiWzFdICYmIHJnYlswXSA9PT0gcmdiWzJdKSkge1xuICAgIC8vIERhcmtlbiBhbmQgc2F0dXJhdGUgaWYgdGhlIGNvbG9yIGlzIG5vdCBpbiB0aGUgZ3JheXNjYWxlXG4gICAgQ29sb3IgPSBDb2xvci5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgfVxuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgJHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhbGV0dGVWYXJpYWJsZXM+KCdseS50aGVtZS52YXJpYWJsZXMnKTtcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlVmFyaWFibGVzIHtcbiAgZGVmYXVsdD86IHN0cmluZztcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvclNjaGVtZSB7XG4gIGJhY2tncm91bmQ/OiB7XG4gICAgZGVmYXVsdD86IHN0cmluZyxcbiAgICBwYXBlcj86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIHRleHQ/OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk/OiBzdHJpbmcsXG4gICAgc2Vjb25kYXJ5Pzogc3RyaW5nLFxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxuICAgIGhpbnQ/OiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xuICBkaXZpZGVyPzogc3RyaW5nO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XG4gIGJhcj86IHN0cmluZztcbiAgaW5wdXQ/OiB7XG4gICAgbGFiZWw/OiBzdHJpbmcsXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXG4gIH07XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbiIsIlxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXG5jb25zdCBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mKEludGwpICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XG4vKipcbiAqIFNlcnZpY2UgdG8gZGV0ZWN0IHRoZSBjdXJyZW50IHBsYXRmb3JtIGJ5IGNvbXBhcmluZyB0aGUgdXNlckFnZW50IHN0cmluZ3MgYW5kXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xuICBzdGF0aWMgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cbiAgc3RhdGljIHJlYWRvbmx5IEVER0UgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHN0YXRpYyByZWFkb25seSBUUklERU5UID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxuICBzdGF0aWMgcmVhZG9ubHkgQkxJTksgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQpO1xuXG4gIC8vIFdlYmtpdCBpcyBwYXJ0IG9mIHRoZSB1c2VyQWdlbnQgaW4gRWRnZUhUTUwsIEJsaW5rIGFuZCBUcmlkZW50LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXG4gIHN0YXRpYyByZWFkb25seSBXRUJLSVQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIVBsYXRmb3JtLkJMSU5LICYmICFQbGF0Zm9ybS5FREdFICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8qKiBCcm93c2VycyBhbmQgUGxhdGZvcm0gVHlwZXMgKi9cbiAgc3RhdGljIHJlYWRvbmx5IElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xuXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxuICBzdGF0aWMgcmVhZG9ubHkgRklSRUZPWCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXG4gIHN0YXRpYyByZWFkb25seSBBTkRST0lEID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9hbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uVFJJREVOVDtcblxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxuICBzdGF0aWMgcmVhZG9ubHkgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIFBsYXRmb3JtLldFQktJVDtcbn1cbiIsImxldCBzdXBwb3J0c1Bhc3NpdmU7XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTogYm9vbGVhbiB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmUgPT09IHZvaWQgMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTdHlsZVV0aWxzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBTdHlsZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvcmlwcGxlJztcbmltcG9ydCB7IFR5cG9ncmFwaHlWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENoZWNrYm94VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvY2hlY2tib3gnO1xuaW1wb3J0IHsgU25hY2tCYXJWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9zbmFjay1iYXInO1xuaW1wb3J0IHsgQnV0dG9uVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvYnV0dG9uJztcbmltcG9ydCB7IFRvb2x0aXBWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy90b29sdGlwJztcblxuZXhwb3J0IGNvbnN0IExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFydGlhbFRoZW1lVmFyaWFibGVzPignbHkudGhlbWUuZ2xvYmFsLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGRpc2FibGVkOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgLyoqIHNlY29uZGFyeSAqL1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIHRlcnRpYXJ5OiBzdHJpbmcsXG4gICAgYmFzZTogc3RyaW5nXG4gIH07XG4gIHRleHQ6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogc3RyaW5nLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIGRpc2FibGVkOiBzdHJpbmcsXG4gICAgaGludDogc3RyaW5nXG4gIH07XG4gIHR5cG9ncmFwaHk6IFR5cG9ncmFwaHlWYXJpYWJsZXM7XG4gIC8qKiBjb2xvciBmb3IgZGl2aWRlciAqL1xuICBkaXZpZGVyOiBzdHJpbmc7XG4gIHNoYWRvdzogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNoYWRvdyBpbnN0ZWFkICovXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xuICByYWRpbzoge1xuICAgIC8qKiBjb2xvciBmb3IgcmFkaW86b3V0ZXJDaXJjbGUgKi9cbiAgICBvdXRlckNpcmNsZT86IHN0cmluZztcbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlIG91dGVyQ2lyY2xlIGluc3RlYWQgKi9cbiAgICByYWRpb091dGVyQ2lyY2xlPzogc3RyaW5nO1xuICB9O1xuICBtZW51OiB7XG4gICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gIH07XG4gIGRyYXdlcjoge1xuICAgIC8qKiBjb2xvciBmb3IgZHJhd2VyOmJhY2tkcm9wICovXG4gICAgYmFja2Ryb3A6IHN0cmluZ1xuICB9O1xuICBmaWVsZDoge1xuICAgIGJvcmRlckNvbG9yOiBzdHJpbmdcbiAgICBsYWJlbENvbG9yOiBzdHJpbmdcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBiYXNlPzoge1xuICAgICAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9O1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGljb25CdXR0b246IHtcbiAgICBzaXplOiBzdHJpbmdcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmdcbiAgfTtcbiAgekluZGV4OiB7XG4gICAgdG9vbGJhcjogbnVtYmVyXG4gICAgZHJhd2VyOiBudW1iZXJcbiAgICBvdmVybGF5OiBudW1iZXJcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogUmlwcGxlVmFyaWFibGVzO1xuICBiYWRnZToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lcixcbiAgICBwb3NpdGlvbj86IHtcbiAgICAgIFtwb3NpdGlvbk5hbWU6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyXG4gICAgfVxuICB9O1xuICBjaGVja2JveDogQ2hlY2tib3hWYXJpYWJsZXM7XG4gIHNuYWNrQmFyOiBTbmFja0JhclZhcmlhYmxlcztcbiAgYnV0dG9uOiBCdXR0b25WYXJpYWJsZXM7XG4gIHRvb2x0aXA6IFRvb2x0aXBWYXJpYWJsZXM7XG59XG5cbmV4cG9ydCB0eXBlIFRoZW1lVmFyaWFibGVzID0gTHlTdHlsZVV0aWxzICYgVGhlbWVDb25maWc7XG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVWYXJpYWJsZXMgPSBQYXJ0aWFsPFRoZW1lVmFyaWFibGVzPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdD86IHN0cmluZztcbiAgLyoqIHNoYWRvdyBjb2xvciAqL1xuICBzaGFkb3c/OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBYU21hbGw6IHN0cmluZyxcbiAgICBTbWFsbDogc3RyaW5nLFxuICAgIE1lZGl1bTogc3RyaW5nLFxuICAgIExhcmdlOiBzdHJpbmcsXG4gICAgWExhcmdlOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0OiBzdHJpbmcsXG4gICAgVGFibGV0OiBzdHJpbmcsXG4gICAgV2ViOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBUYWJsZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFdlYlBvcnRyYWl0OiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgVGFibGV0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgV2ViTGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG4gIGRpcmVjdGlvbjogRGlyO1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcsIG9wdGlvbmFsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIHZhbHVlLCBvcHRpb25hbCk7XG4gIH1cbiAgZ2V0QnJlYWtwb2ludChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBgQG1lZGlhICR7dGhpcy5icmVha3BvaW50c1trZXldIHx8IGtleX1gO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKHZhbDogRGlyQWxpYXMpIHtcbiAgICBpZiAodmFsID09PSBEaXJBbGlhcy5zdGFydCB8fCB2YWwgPT09IERpckFsaWFzLmJlZm9yZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IERpckFsaWFzLmVuZCB8fCB2YWwgPT09IERpckFsaWFzLmFmdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRGlyIHtcbiAgcnRsID0gJ3J0bCcsXG4gIGx0ciA9ICdsdHInXG59XG5leHBvcnQgZW51bSBEaXJBbGlhcyB7XG4gIC8qKiBAZGVwcmVjYXRlZCwgdXNlIGBiZWZvcmVgIGluc3RlYWQgKi9cbiAgc3RhcnQgPSAnc3RhcnQnLFxuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYWZ0ZXJgIGluc3RlYWQgKi9cbiAgZW5kID0gJ2VuZCcsXG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcidcbn1cbmV4cG9ydCBlbnVtIERpclBvc2l0aW9uIHtcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbi8qKlxuICogZ2V0IGNvbG9yIG9mIG9iamVjdFxuICogQHBhcmFtIG9iaiBvYmplY3RcbiAqIEBwYXJhbSBwYXRoIHBhdGhcbiAqIEBwYXJhbSBvcHRpb25hbCBnZXQgb3B0aW9uYWwgdmFsdWUsIGlmIG5vdCBleGlzdCByZXR1cm4gZGVmYXVsdCBpZiBub3QgaXMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIG9wdGlvbmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBwYXRoIGFzIHN0cmluZztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9iaiBhcyBzdHJpbmc7XG4gIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICByZXR1cm4gb2JqW29wdGlvbmFsXSB8fCBvYmpbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqWydkZWZhdWx0J107XG4gIH1cbiAgLy8gcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShzdHI6IHN0cmluZyB8IG51bWJlciwgZm46ICgodmFsOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcsIGlzTWVkaWE6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbEl0ZW0ubGVuZ3RoO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCB2YWxJdGVtLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdW5kZWZpbmVkLCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCB1bmRlZmluZWQsIDApO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHsgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pOyB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRSwgVGhlbWVWYXJpYWJsZXMsIExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUUpIHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTKSBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUUgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KTtcbiAgICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpKSB7XG4gICAgICB0aGVtZUNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgICAgbWVyZ2VEZWVwKGl0ZW0sIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQoaXRlbSBhcyBhbnkpO1xuICAgICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbS5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIG1lcmdlRGVlcCh0aGVtZUNvbmZpZywgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkKHRoZW1lQ29uZmlnIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQodGhlbWVDb25maWcubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZVZhcmlhYmxlc1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGlyUG9zaXRpb24gfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbmV4cG9ydCBlbnVtIFlQb3NpdGlvbiB7XG4gIGFib3ZlID0gJ2Fib3ZlJyxcbiAgYmVsb3cgPSAnYmVsb3cnXG59XG5cbmV4cG9ydCBlbnVtIFhQb3NpdGlvbiB7XG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcicsXG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBYUG9zaXRpb24gfCBZUG9zaXRpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgb3JpZ2luOiBFbGVtZW50LFxuICBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBvZmZzZXQgPSAwKSB7XG5cbiAgY29uc3Qgb3JpZ2luUmVjdCA9IG9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBjb25zdCBvdmVybGF5RWxlbWVudFJlY3QgPSBvdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBpZiAoeFBvc2l0aW9uICYmIHlQb3NpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbiBub3QgdXNlIFxcYHhQb3NpdGlvblxcYCBhbmQgXFxgeVBvc2l0aW9uXFxgIHRvZ2V0aGVyLCB1c2Ugb25seSBvbmUgb2YgdGhlbS5gKTtcbiAgfVxuICBpZiAoKHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pICYmICFwbGFjZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHBsYWNlbWVudFxcYCBpcyByZXF1aXJlZC5gKTtcbiAgfVxuICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIG94ID0gJ2NlbnRlcicsXG4gICAgICBveSA9ICdjZW50ZXInO1xuICBpZiAocGxhY2VtZW50IHx8IHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pIHtcbiAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeCA9IChvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgIHkgPSAtb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgb3kgPSAnYm90dG9tJztcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeCA9IChvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgIHkgPSBvcmlnaW5SZWN0LmhlaWdodCArIG9mZnNldDtcbiAgICAgICAgb3kgPSAndG9wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihwbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggPSAtb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC0gb2Zmc2V0O1xuICAgICAgICAgIHkgPSAob3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gb3JpZ2luUmVjdC53aWR0aCArIG9mZnNldDtcbiAgICAgICAgICB5ID0gKG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHhQb3NpdGlvbikge1xuICAgICAgY29uc3QgZGlyID0gdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICB4ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICB4ID0gb3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbikge1xuICAgICAgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgIHkgPSAwO1xuICAgICAgICBveSA9ICcwJSc7XG4gICAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHkgPSBvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgeTogTWF0aC5yb3VuZCh5KSxcbiAgICBveCxcbiAgICBveVxuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgWVBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vcG9zaXRpb24nO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuXG5jb25zdCBTVFlMRV9NQVA1OiBNYXA8YW55LCBTdHlsZU1hcDU+ID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNSB7XG4gIHN0eWxlczogU3R5bGVzRm4yIHwgU3R5bGVzMjtcbiAgdHlwZTogVHlwZVN0eWxlO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgLyoqIE9ubHkgZm9yIHN0eWxlcyBvZiBUeXBlU3R5bGUub25lICovXG4gIHBhcmVudFN0eWxlPzogU3R5bGVzO1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZztcbn1cblxubGV0IG5leHRDbGFzc0lkID0gMDtcbmxldCBuZXh0S2V5RnJhbWVJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PlxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbiAgc3R5bGVFbGVtZW50R2xvYmFsTWFwID0gbmV3IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG59XG5cbmNvbnN0IFRIRU1FX01BUCA9IG5ldyBNYXA8c3RyaW5nLCB7XG4gIGJhc2U6IHN0cmluZ1xuICBjaGFuZ2U6IHN0cmluZyB8IG51bGxcbn0+KCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVWYXJpYWJsZXM7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PjtcbiAgX2VsZW1lbnRzTWFwID0gbmV3IE1hcDxhbnksIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG4gIHByaXZhdGUgdGhlbWVNYXAgPSBUSEVNRV9NQVA7XG4gIC8qKiBzc3Igb3IgaG1yICovXG4gIHByaXZhdGUgaXNEZXZPclNlcnZlciA9IGlzRGV2TW9kZSgpIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50aGVtZU1hcC5oYXModGhpcy5pbml0aWFsVGhlbWUpKSB7XG4gICAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHRoaXMuaW5pdGlhbFRoZW1lLCB7XG4gICAgICAgICAgYmFzZTogdGhpcy5pbml0aWFsVGhlbWUsXG4gICAgICAgICAgY2hhbmdlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gcGFyZW50U3R5bGVcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSB8ICgodGhlbWUpID0+IHN0cmluZykgfCBzdHJpbmcsIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIsIHBhcmVudFN0eWxlPzogU3R5bGVzKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlIGFzIGFueSwgaWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIHBhcmVudFN0eWxlKSBhcyBzdHJpbmc7XG4gICAgaWYgKG5ld0NsYXNzID09PSBpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICBpZiAobmV3Q2xhc3MgPT09IG9sZENsYXNzKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICBpZiAobmFtICE9PSB0aGlzLmNvbmZpZy5uYW1lKSB7XG4gICAgICB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSkuY2hhbmdlID0gbmFtO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlIHJpZ2h0LXRvLWxlZnQvbGVmdC10by1yaWdodCAqL1xuICB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuY29uZmlnLmRpcmVjdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5kaXJlY3Rpb24gPSBjdXJyZW50ID09PSBEaXIubHRyID8gRGlyLnJ0bCA6IERpci5sdHI7XG4gICAgdGhpcy5fdXBkYXRlQWxsU3R5bGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbGxTdHlsZXMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlRGF0YSA9IFNUWUxFX01BUDUuZ2V0KGtleSk7XG4gICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBzdHlsZURhdGEuaWQsIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUsIHN0eWxlRGF0YS5wYXJlbnRTdHlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxlIHN0eWxlXG4gICAqIHJldHVybiBjbGFzc05hbWVcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgb2JqZWN0IG9yIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgc3R5bGUgcHJpb3JpdHlcbiAgICovXG4gIGFkZFNpbXBsZVN0eWxlKGlkOiBzdHJpbmcsIGNzczogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lciksIHByaW9yaXR5PzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBpZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMsIHByaW9yaXR5PzogbnVtYmVyKTogT25seUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyKFxuICAgIHN0eWxlczogU3R5bGVzLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLFxuICAgIHBhcmVudFN0eWxlPzogU3R5bGVzXG4gICkge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgYXMgc3RyaW5nIHx8IHN0eWxlcztcbiAgICBsZXQgaXNOZXdTdHlsZTogYm9vbGVhbjtcbiAgICBpZiAoIVNUWUxFX01BUDUuaGFzKG5ld0lkKSkge1xuICAgICAgaXNOZXdTdHlsZSA9IHRydWU7XG4gICAgICBTVFlMRV9NQVA1LnNldChuZXdJZCwge1xuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZCxcbiAgICAgICAgcGFyZW50U3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IFNUWUxFX01BUDUuZ2V0KG5ld0lkKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBpc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgY29uc3QgdGhlbWVNYXAgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTWFwLmNoYW5nZSB8fCB0aGVtZU5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKGNvbmZpZyksIHRoZW1lTmFtZSwgaWQsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBzdHlsZU1hcC5jc3MgPSBjc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBuZXdFbCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3MpO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHdoZW4gYSB0aGVtZSBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgICAgICAvLyBpbiBkZXYgbW9kZSBvciBzZXJ2ZXIgaXQgaXMgbm90IG5lY2Vzc2FyeVxuICAgICAgICAgIC8vIHNpbmNlIHRoZSBzdHlsZXMgd2lsbCBub3QgY2hhbmdlXG4gICAgICAgICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcC5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBuZXdFbCk7XG4gICAgICB9XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCk7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciBvciBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcDtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXAuaGFzKG5ld0lkKSkge1xuICAgICAgICAgIG1hcC5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbWFwLmdldChuZXdJZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgLyoqIFByZWZpeCBuYW1lICovXG4gICRuYW1lPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMiA9IChUKSA9PiBTdHlsZXMyO1xuXG5leHBvcnQgdHlwZSBTdHlsZXMgPSBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleWZyYW1lcyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgW3BlcmNlbnQ6IG51bWJlcl06IFN0eWxlQ29udGFpbmVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZXMyLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlc1xuKSB7XG4gIC8vIGZvciBzdHlsZXMgdHlwZSBzdHJpbmdcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgbGV0IHJ1bGVzOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBydWxlcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIG51bGwsIHN0eWxlcywgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVNYXAucGFyZW50U3R5bGUpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwT2ZQYXJlbnRTdHlsZSA9IFNUWUxFX01BUDUuZ2V0KHN0eWxlTWFwLnBhcmVudFN0eWxlKTtcbiAgICAgIHJldHVybiByZXBsYWNlUmVmcyhydWxlcywgc3R5bGVNYXBPZlBhcmVudFN0eWxlW3RoZW1lTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IG5hbWUgPSBzdHlsZXMuJG5hbWUgPyBgJHtzdHlsZXMuJG5hbWV9LWAgOiAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGB5LSR7bmFtZX0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCBzdHlsZXMuJG5hbWUsIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRhdGFbdG9rZW5dO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGFbYEDDkMKzLi0+LSR7dG9rZW59YF07XG4gICAgfVxuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoa2V5OiBzdHJpbmcsICRuYW1lOiBzdHJpbmcsIG9iOiBPYmplY3QsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkpIHtcbiAgICBpZiAoY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5ID0gYCR7cGFyZW50S2V5fSAke2N1cnJlbnRLZXl9YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gYC4ke2N1cnJlbnRLZXl9YDtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIC8vIE9taXQgc3R5bGUgd2l0aCB2YWx1ZSBudWxsXG4gICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGlzIE9iamVjdCBsaXRlcmFsXG4gICAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCAkbmFtZSwgZWxlbWVudCBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5QW5kVmFsdWUgKz0gY29udmVydFRvU3R5bGVWYWx1ZShzdHlsZUtleSwgZWxlbWVudCwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbGV0IGxpbiA9ICdcXG5cXG4nO1xuICAgICAgaWYgKCRuYW1lKSB7XG4gICAgICAgIGxpbiArPSBgLyoqIFN0eWxlIFNoZWV0IG5hbWU6ICR7JG5hbWV9ICovXFxuYDtcbiAgICAgIH1cbiAgICAgIGxpbiArPSBgLyoqIFN0eWxlIEtleTogJHtrZXl9ICovXFxuYDtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bGlufWA7XG4gICAgfVxuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3R5bGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgbmV3U3R5bGVLZXkgPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoa2V5LCB0aGVtZVZhcmlhYmxlcyk7XG4gIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGluICs9IGAke25ld1N0eWxlS2V5fToke3ZhbHVlW2luZGV4XX07YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWV9O2A7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzVG9TdHJpbmcoc3R5bGVOYW1lOiBzdHJpbmcsIGtleXNNYXA6IG9iamVjdCwga2V5ZnJhbWVzOiBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBsZXQgY29udGVudCA9ICcnO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICBpZiAoa2V5ZnJhbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIC8vIFNvbWV0aW1lcyB0aGUgbmFtZSBvZiBhIGNsYXNzIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgbmFtZSBvZiBhIGtleWZyYW1lLFxuICAgICAgLy8gc28gd2UgYWRkIGEgY2hhcmFjdGVyIHRvIGJlIGRpZmZlcmVudFxuICAgICAgY29uc3QgbmV3VW5pcXVlTmFtZSA9IGBAw5DCsy4tPi0ke25hbWV9YDtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBuZXdOYW1lID0gbmV3VW5pcXVlTmFtZSBpbiBrZXlzTWFwXG4gICAgICA/IGtleXNNYXBbbmV3VW5pcXVlTmFtZV1cbiAgICAgIDoga2V5c01hcFtuZXdVbmlxdWVOYW1lXSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtzdHlsZU5hbWV9JHtuYW1lfS0ke2NyZWF0ZU5leHRLZXlmcmFtZUlkKCl9LXZgKSA6IGNyZWF0ZU5leHRLZXlmcmFtZUlkKCk7XG4gICAgICBjb250ZW50ICs9IGBAa2V5ZnJhbWVzICR7bmV3TmFtZX17YDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBpbiBrZXlmcmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWUuaGFzT3duUHJvcGVydHkocGVyY2VudCkpIHtcbiAgICAgICAgICBjb250ZW50ICs9IGAke3BlcmNlbnR9JXtgO1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGtleWZyYW1lW3BlcmNlbnRdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXldO1xuICAgICAgICAgICAgICBjb250ZW50ICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5LCB2YWwgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudCArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHI6IHN0cmluZywga2V5OiBzdHJpbmcsIHRvOiBzdHJpbmcpIHtcbiAgY29uc29sZS53YXJuKGBTdHlsZSBrZXkgXFxgJHtrZXl9XFxgIGRlcHJlY2F0ZWQgZm9yIFxcYCR7c3RyfVxcYCwgY2hhbmdlIFxcYCR7a2V5fVxcYCB0byBcXGAke3RvfVxcYFxcbmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IGh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbiAgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5zdGFydCkgIT09IC0xKSB7XG4gICAgd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHIsIERpckFsaWFzLnN0YXJ0LCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5zdGFydCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmVuZCkgIT09IC0xKSB7XG4gICAgd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHIsIERpckFsaWFzLmVuZCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5lbmQpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5iZWZvcmUpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5iZWZvcmUpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5hZnRlcikgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmFmdGVyKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmFib3ZlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmFib3ZlLCBUT1ApO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYmVsb3cpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYmVsb3csIEJPVFRPTSk7XG4gIH1cbiAgcmV0dXJuIGh5cGhlbkNhc2U7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKTogc3RyaW5nIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgcmV0dXJuIHN0ciBpbiBtYXBcbiAgPyBtYXBbc3RyXVxuICA6IG1hcFtzdHJdID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHIsIHRoZW1lVmFyaWFibGVzKTtcbn1cblxuY29uc3QgaWdub3JlQ1NTS0VZID0ge1xuICAnYnJlYWstYWZ0ZXInOiAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJzogJ2JyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWFmdGVyJzogJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnOiAncGFnZS1icmVhay1iZWZvcmUnXG59O1xuXG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHtcbiAgcnRsOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH0sXG4gIGx0cjoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9XG59O1xuXG5jb25zdCBCT1RUT00gPSAnYm90dG9tJztcbmNvbnN0IFRPUCA9ICd0b3AnO1xuXG5mdW5jdGlvbiBkaXJDYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgZGlyQWxpYXM6IERpckFsaWFzKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShkaXJBbGlhcywgdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKGRpckFsaWFzKSk7XG59XG5cbmZ1bmN0aW9uIFlQb3NpdGlvbkNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBwb3M6IFlQb3NpdGlvbiwgdG86ICd0b3AnIHwgJ2JvdHRvbScpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKHBvcywgdG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dENsYXNzSWQoKSB7XG4gIHJldHVybiBgaSR7KG5leHRDbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV4dEtleWZyYW1lSWQoKSB7XG4gIHJldHVybiBgayR7KG5leHRLZXlGcmFtZUlkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG50eXBlIE9ubHlDbGFzc2VzPFQ+ID0gUmVjb3JkPChcbiAgRXhjbHVkZTwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSxcbiAgJyRuYW1lJyB8ICckc2hlZXQnIHwgJyRrZXlmcmFtZXMnPlxuKSwgc3RyaW5nPjtcblxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgTmdNb2R1bGUsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5QXR0cmlidXRlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh0ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XG4gICAgICB0aGlzLl92aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IG51bGw7XG4gICAgICB0aGlzLl92aWV3UmVmLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5nVHJhbnNjbHVkZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3ZpZXdSZWYucmVtb3ZlKCk7XG4gIH1cbn1cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XG5cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBIVE1MRWxlbWVudCB7XG4gIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnQubmF0aXZlRWxlbWVudCA6IGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5pbXBvcnQgeyBDYW5Db2xvciB9IGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgQ2FuQmcgfSBmcm9tICcuL2JnJztcbmltcG9ydCB7IENhbkRpc2FibGUgfSBmcm9tICcuL2Rpc2FibGVkJztcbmltcG9ydCB7IENhblJhaXNlZCB9IGZyb20gJy4vcmFpc2VkJztcbmltcG9ydCB7IENhbkVsZXZhdGlvbiB9IGZyb20gJy4vZWxldmF0aW9uJztcbmltcG9ydCB7IENhbk91dGxpbmVkIH0gZnJvbSAnLi9vdXRsaW5lZCc7XG5pbXBvcnQgeyBDYW5TaGFkb3dDb2xvciB9IGZyb20gJy4vc2hhZG93LWNvbG9yJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TmF0aXZlRWxlbWVudCB9IGZyb20gJy4uL21pbmltYWwvY29tbW9uJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5TdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICB1cGRhdGVTdHlsZTogKGVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBFbGVtZW50KSA9PiB2b2lkO1xuICBzZXRBdXRvQ29udHJhc3Q6ICgpID0+IHZvaWQ7XG59XG5leHBvcnQgdHlwZSBDYW5TdHlsZVVwZGF0ZXJDdG9yID0gQ29uc3RydWN0b3I8UmVxdWlyZVBhcmFtc1N0eWxlVXBkYXRlciAmIFBhcnRpYWw8Q2FuQ29sb3IgJiBDYW5CZyAmIENhbkRpc2FibGUgJiBDYW5SYWlzZWQgJiBDYW5FbGV2YXRpb24gJiBDYW5PdXRsaW5lZCAmIENhblNoYWRvd0NvbG9yPj47XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblN0eWxlVXBkYXRlcjxUIGV4dGVuZHMgQ2FuU3R5bGVVcGRhdGVyQ3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblN0eWxlVXBkYXRlcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX2NsYXNzTmFtZUFub255bW91czogc3RyaW5nO1xuICAgIF9hdXRvQ29udHJhc3Q6IGJvb2xlYW47XG4gICAgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlU3R5bGUoZWxlbWVudDogRWxlbWVudFJlZjxhbnk+IHwgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IF9fYmcgPSB0aGlzLmJnO1xuICAgICAgY29uc3QgX19jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICBjb25zdCBfX3JhaXNlZCA9IHRoaXMucmFpc2VkO1xuICAgICAgY29uc3QgX19lbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcbiAgICAgIGNvbnN0IF9fZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgY29uc3QgX19vdXRsaW5lZCA9IHRoaXMub3V0bGluZWQ7XG4gICAgICBjb25zdCBfX3NoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3dDb2xvcjtcbiAgICAgIGNvbnN0IF9faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhX19jb2xvciB8fCBfX2NvbG9yID09PSAnYXV0byc7XG4gICAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgICBfX2JnIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgX19jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgX19yYWlzZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgX19lbGV2YXRpb24gfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICBfX2Rpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICBfX291dGxpbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgIF9fc2hhZG93Q29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgICAgICBfX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgdGhpcy5fY2xhc3NOYW1lQW5vbnltb3VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUobmV3S2V5LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgICAgYm9yZGVyPzogc3RyaW5nLFxuICAgICAgICAgIGJhY2tncm91bmQ/OiBzdHJpbmcsXG4gICAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM/OiAnbm9uZSc7XG4gICAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9ID0ge307XG4gICAgICAgIGlmIChfX291dGxpbmVkKSB7XG4gICAgICAgICAgc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBjdXJyZW50Q29sb3InO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX2Rpc2FibGVkKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS50ZXh0LmRpc2FibGVkO1xuICAgICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5kaXNhYmxlZC5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yT2YoX19iZyk7XG4gICAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihgJHtfX2JnfTpjb250cmFzdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIF9fY29sb3IpIHtcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihfX2NvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9fcmFpc2VkIHx8IF9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIV9fYmcpIHtcbiAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yQ3NzID0gc3R5bGUuYmFja2dyb3VuZCAhPT0gX19iZyAmJiB0aGVtZS5jb2xvck9mKF9fYmcgfHwgJ2JhY2tncm91bmQ6cHJpbWFyeScsICdzaGFkb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gc2hhZG93QnVpbGRlcihfX2VsZXZhdGlvbiB8fCAzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgICBpZiAoIV9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig4LCBzaGFkb3dDb2xvcilcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICAgIH0sIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCksIHRoaXMuX2NsYXNzTmFtZUFub255bW91cywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbiIsImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmlwcGxlQ29uZmlnIHtcbiAgY2VudGVyZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNlbnNpdGl2ZT86IGJvb2xlYW47XG4gIHJhZGl1cz86ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgcGVyY2VudGFnZVRvSW5jcmVhc2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVSZWYge1xuICBzdGF0ZSA9IHRydWU7XG4gIHRpbWVzdGFtcCA9IC1EYXRlLm5vdygpO1xuICByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbmQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZXN0YW1wICs9IERhdGUubm93KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZSB7XG4gIHByaXZhdGUgX3JpcHBsZVJlZjogUmlwcGxlUmVmO1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgY29uZmlnOiBSaXBwbGVDb25maWcgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMucmlwcGxlLmR1cmF0aW9uO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBhbnksXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgVG91Y2hFdmVudCAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGVuZCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hjYW5jZWwnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNldXAnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlbGVhdmUnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgaWYgKCFfdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgICAgX3RyaWdnZXJFbGVtZW50ID0gX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KF90cmlnZ2VyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcmVjdENvbnRhaW5lcigpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlc0RhdGFbMF0pO1xuICAgICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5zdHlsZXNEYXRhWzBdLmlkKTtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJpcHBsZShzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmd9KSB7XG4gICAgdGhpcy5fcmlwcGxlUmVmID0gbmV3IFJpcHBsZVJlZigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZVJlZi5jb250YWluZXI7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3Nlcy5yaXBwbGVDb250YWluZXI7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0eWxlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBgJHtlbGVtZW50fXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMSlgO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBvaW50ZXJEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgLyoqRGVzdHJveSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3QgKi9cbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgICB0aGlzLnN0YXJ0UmlwcGxlKGV2ZW50LCB0aGlzLmNvbmZpZyk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgb25Qb2ludGVyTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UmlwcGxlKGV2ZW50OiBNb3VzZUV2ZW50IHwgUG9pbnRlckV2ZW50LCByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9yZWN0Q29udGFpbmVyO1xuICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcbiAgICB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICB4ID0gY29udGFpbmVyUmVjdC5sZWZ0ICsgY29udGFpbmVyUmVjdC53aWR0aCAvIDI7XG4gICAgICB5ID0gY29udGFpbmVyUmVjdC50b3AgKyBjb250YWluZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgfVxuICAgIGNvbnN0IGxlZnQgPSB4IC0gY29udGFpbmVyUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHkgLSBjb250YWluZXJSZWN0LnRvcDtcbiAgICBsZXQgcmFkaXVzID0gcmlwcGxlQ29uZmlnLnJhZGl1cyA9PT0gJ2NvbnRhaW5lclNpemUnID8gbWF4U2l6ZShjb250YWluZXJSZWN0KSAvIDIgOiByaXBwbGVDb25maWcucmFkaXVzIHx8IHJpcHBsZVJhZGl1cyh4LCB5LCBjb250YWluZXJSZWN0KTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlKSB7XG4gICAgICByYWRpdXMgKz0gcmFkaXVzICogcmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlIC8gMTAwO1xuICAgIH1cbiAgICB0aGlzLmNyZWF0ZVJpcHBsZSh7XG4gICAgICBsZWZ0OiBsZWZ0IC0gcmFkaXVzLFxuICAgICAgdG9wOiB0b3AgLSByYWRpdXMsXG4gICAgICB3aWR0aDogcmFkaXVzICogMixcbiAgICAgIGhlaWdodDogcmFkaXVzICogMixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9ufW1zYFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46IEZ1bmN0aW9uLCBkZWxheSA9IDApIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmbiwgZGVsYXkpKTtcbiAgfVxuXG4gIGVuZFJpcHBsZSgpIHtcbiAgICBjb25zdCByaXBwbGVSZWY6IFJpcHBsZVJlZiA9IHRoaXMuX3JpcHBsZVJlZiB8fCBudWxsO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIGlmIChyaXBwbGVSZWYgJiYgcmlwcGxlUmVmLnN0YXRlKSB7XG4gICAgICByaXBwbGVSZWYuZW5kKCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb24gLyA1fW1zYDtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIDogMCk7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSA6IDApO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAuMTUgOiAwKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJpcHBsZVJlZi5jb250YWluZXIpO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgKiAyIDogZHVyYXRpb24pO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVMpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcycHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogJy4yJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLm9wYWNpdHl9LHRyYW5zZm9ybSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLnRyYW5zZm9ybVxuICAgIH1gLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXMge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICBfbmdab25lOiBOZ1pvbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIF90cmlnZ2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnO1xuICBfcmVtb3ZlUmlwcGxlRXZlbnRzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zPj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIF9yaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICAgIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGUgPSBudWxsO1xuXG4gICAgZ2V0IGRpc2FibGVSaXBwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlOyB9XG4gICAgc2V0IGRpc2FibGVSaXBwbGUodmFsOiBib29sZWFuKSB7XG4gICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHZhbCAhPT0gdGhpcy5fZGlzYWJsZVJpcHBsZSkge1xuICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUmlwcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3RcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgLy8gYWRkIHJpcHBsZVxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl90cmlnZ2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLl90aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpLCByaXBwbGVDb250YWluZXIsIHRyaWdnZXJFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuX3JpcHBsZS5zZXRDb25maWcodGhpcy5fcmlwcGxlQ29uZmlnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlUmlwcGxlRXZlbnRzKCkge1xuICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICBpZiAodGhpcy5fcmlwcGxlKSB7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgICAgICAgIHRoaXMuX3JpcHBsZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRGlzYWJsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICdwcmltYXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db2xvciB7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkNvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9jb2xvcjsgfVxuICAgIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkJnIHtcbiAgYmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQmc8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQmc+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2JnOiBzdHJpbmc7XG5cbiAgICBnZXQgYmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2JnOyB9XG4gICAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB2YWwgfHwgREVGQVVMVF9CRztcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuYmcpIHtcbiAgICAgICAgdGhpcy5fYmcgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhblJhaXNlZCB7XG4gIHJhaXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluUmFpc2VkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblJhaXNlZD4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfcmFpc2VkOiBib29sZWFuO1xuXG4gICAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZDsgfVxuICAgIHNldCByYWlzZWQodmFsdWU6IGFueSkgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuT3V0bGluZWQge1xuICBvdXRsaW5lZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluT3V0bGluZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuT3V0bGluZWQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX291dGxpbmVkOiBib29sZWFuO1xuXG4gICAgZ2V0IG91dGxpbmVkKCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZWQ7IH1cbiAgICBzZXQgb3V0bGluZWQodmFsdWU6IGFueSkgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkVsZXZhdGlvbiB7XG4gIGVsZXZhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5FbGV2YXRpb248VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRWxldmF0aW9uPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9lbGV2YXRpb246IG51bWJlcjtcblxuICAgIGdldCBlbGV2YXRpb24oKSB7IHJldHVybiB0aGlzLl9lbGV2YXRpb247IH1cbiAgICBzZXQgZWxldmF0aW9uKHZhbHVlOiBhbnkpIHsgdGhpcy5fZWxldmF0aW9uID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhblNoYWRvd0NvbG9yIHtcbiAgc2hhZG93Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU2hhZG93Q29sb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU2hhZG93Q29sb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3NoYWRvd0NvbG9yOiBzdHJpbmc7XG5cbiAgICBnZXQgc2hhZG93Q29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3NoYWRvd0NvbG9yOyB9XG4gICAgc2V0IHNoYWRvd0NvbG9yKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5fc2hhZG93Q29sb3IgPSB2YWx1ZTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWl4aW5TdHlsZVVwZGF0ZXIsIG1peGluQmcsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciwgbWl4aW5EaXNhYmxlUmlwcGxlLCBtaXhpbkNvbG9yIH0gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmNvbnN0IERFRkFVTFRfQkcgPSAncGFwZXInO1xuXG5leHBvcnQgY2xhc3MgTHlQYXBlckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeVBhcGVyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVBhcGVyQmFzZSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBseS1wYXBlciwgW2x5LXBhcGVyXSwgW2x5LXRleHRdYCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlQYXBlciBleHRlbmRzIEx5UGFwZXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgX2hhc1RleHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCdseS10ZXh0JylcbiAgc2V0IGhhc1RleHQodmFsOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNUZXh0ID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RleHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fZWw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZyAmJiAhdGhpcy5oYXNUZXh0KSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseVBhcGVyJyxcbiAgICAgICAgKHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3aXRoQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVdpdGhDbGFzcyB7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCB2YWxpZCBjbGFzc05hbWVgKTtcbiAgICB9XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVBhcGVyIH0gZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl0sXG4gIGV4cG9ydHM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0Vmlldztcbn1cbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGVJbmZvIHtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG4gIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZSB7XG4gIGV2ZW50OiBGb2N1c0V2ZW50O1xuICBieTogJ2tleWJvYXJkJyB8ICdtb3VzZSc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2VsZW1lbnRNYXAgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBGb2N1c1N0YXRlSW5mbz4oKTtcbiAgcHJpdmF0ZSBfY3VycmVudEV2ZW50OiAnbW91c2UnIHwgJ2tleWJvYXJkJztcbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBsaXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwga2V5RWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBPYnNlcnZhYmxlPEZvY3VzU3RhdGU+IHwgbnVsbCB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGl0IGlzIG5vdCBicm93c2VyIHBsYXRmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBrZXkgPSBrZXlFbGVtZW50ICYmIGdldE5hdGl2ZUVsZW1lbnQoa2V5RWxlbWVudCkgfHwgbmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudE1hcC5nZXQoa2V5KS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGU6IEZvY3VzU3RhdGVJbmZvID0ge1xuICAgICAgdW5saXN0ZW46IG51bGwsXG4gICAgICBzdWJqZWN0OiBuZXcgU3ViamVjdDxGb2N1c1N0YXRlPigpXG4gICAgfTtcbiAgICB0aGlzLl9pbmNyZW1lbnRDb3VudCgpO1xuICAgIGNvbnN0IGZvY3VzTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuICAgIGNvbnN0IGJsdXJMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG5cbiAgICBmb2N1c1N0YXRlLnVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudE1hcC5zZXQoa2V5LCBmb2N1c1N0YXRlKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c1N0YXRlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB1bmxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNTdGF0ZUluZm8gPSB0aGlzLl9lbGVtZW50TWFwLmdldChnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpKTtcbiAgICBpZiAoZm9jdXNTdGF0ZUluZm8pIHtcbiAgICAgIGZvY3VzU3RhdGVJbmZvLnVubGlzdGVuKCk7XG4gICAgICB0aGlzLl9kZWNyZW1lbnRDb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uKGV2ZW50OiBGb2N1c0V2ZW50LCBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiBzdWJqZWN0Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBieTogdGhpcy5fY3VycmVudEV2ZW50IHx8ICdrZXlib2FyZCdcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyT3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzXG4gICAgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiBmYWxzZTtcblxuICAgIGNvbnN0IGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdrZXlib2FyZCcpO1xuICAgIGNvbnN0IGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ21vdXNlJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlbWVudENvdW50KCkge1xuICAgIGlmICgrK3RoaXMuX2NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoIS0tdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnRNYXAuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy51bmxpc3RlbihlbGVtZW50KSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjkuNy1uaWdodGx5LjIwMTgxMjEzLWpwbWM2emd4JztcbmV4cG9ydCBjb25zdCBBVUlfTEFTVF9VUERBVEUgPSAnMjAxOC0xMi0xM1QwODoyMzozMy4zOTJaJztcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuY29uc3QgSEFNTUVSX0dFU1RVUkVTX0VWRU5UUyA9IFtcbiAgJ3NsaWRlJyxcbiAgJ3NsaWRlc3RhcnQnLFxuICAnc2xpZGVlbmQnLFxuICAnc2xpZGVyaWdodCcsXG4gICdzbGlkZWxlZnQnLFxuICAnc2xpZGVjYW5jZWwnXG5dO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIGV2ZW50czogc3RyaW5nW10gPSBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgY29uc3QgaGFtbWVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAod2luZG93IGFzIGFueSkuSGFtbWVyIDogbnVsbDtcbiAgICBjb25zdCBtYyA9IG5ldyBoYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB7fSk7XG5cbiAgICBjb25zdCBwYW4gPSBuZXcgaGFtbWVyLlBhbigpO1xuICAgIGNvbnN0IHN3aXBlID0gbmV3IGhhbW1lci5Td2lwZSgpO1xuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwYW4sIHtldmVudDogJ3NsaWRlJywgdGhyZXNob2xkOiAwfSwgc3dpcGUpO1xuXG4gICAgcGFuLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwYW4sIHNsaWRlXSk7XG4gICAgcmV0dXJuIG1jO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUmVjb2duaXplcihiYXNlOiBhbnksIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgKGJhc2UuY29uc3RydWN0b3IpKG9wdGlvbnMpO1xuXG4gICAgaW5oZXJpdGFuY2VzLnB1c2goYmFzZSk7XG4gICAgaW5oZXJpdGFuY2VzLmZvckVhY2goaXRlbSA9PiByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgoaXRlbSkpO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIHNldFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMeVRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFtMeVRoZW1lMl0sXG4gICAgICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6IHRoZW1lTmFtZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlDb3JlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIG92ZXJsYXlCYWNrZHJvcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5vdmVybGF5LFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9XG59KTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXaW5kb3dTY3JvbGxTZXJ2aWNlIHtcblxuICBzY3JvbGwkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdzY3JvbGwnKS5waXBlKFxuICAgICAgICAgIGF1ZGl0VGltZSgyMCksXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgU2V0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNBY3RpdmVPdmVybGF5Q29udGFpbmVyOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfYWRkKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5hZGQoaXRlbSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9yZW1vdmUoaXRlbSkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0eWxlcyBmb3Igb3ZlcmxheSBjb250YWluZXJcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEJBQ0tEUk9QX1NUWUxFUyA9ICh7XG4gIGJhY2tkcm9wOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vdmVybGF5LWJhY2tkcm9wJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUJhY2tkcm9wIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoQkFDS0RST1BfU1RZTEVTKTtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuX292ZXJsYXlDb25maWcuZm5EZXN0cm95KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoJ292ZXJsYXlDb25maWcnKSBwcml2YXRlIF9vdmVybGF5Q29uZmlnOiBhbnksXG4gICAgY29tbW9uU3R5bGVzOiBMeUNvcmVTdHlsZXNcbiAgKSB7XG4gICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbW1vblN0eWxlcy5jbGFzc2VzLmZpbGwpO1xuICAgIGlmIChfb3ZlcmxheUNvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5iYWNrZHJvcCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUsIGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZVNlcnZpY2Uge1xuXG4gIHJlc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgICAgYXVkaXRUaW1lKDIwKSxcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzaXplJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIsIEx5T3ZlcmxheUJhY2tkcm9wLCBXaW5kb3dTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi9yZXNpemUnO1xuXG5pbnRlcmZhY2UgT3ZlcmxheUNvbmZpZyB7XG4gIHN0eWxlczogT2JqZWN0O1xuICBjbGFzc2VzPzogc3RyaW5nW107XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgZm5EZXN0cm95PzogKC4uLmFyZykgPT4gdm9pZDtcbiAgaG9zdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAgKi9cbiAgZGV0YWNoOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBSZW1vdmUgZWxlbWVudCBvZiBET00gKi9cbiAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBEZXRhY2ggJiByZW1vdmUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcblxuICBjb250YWluZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcblxufVxuY2xhc3MgQ3JlYXRlRnJvbVRlbXBsYXRlUmVmIGltcGxlbWVudHMgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9lbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wUmVmT3ZlcmxheUJhY2tkcm9wOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2luZG93U1JTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2UsXG4gICAgcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZSxcbiAgICBjb25maWc/OiBPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYgPSBfdGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KF9jb250ZXh0KTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG4gICAgY29uc3QgX19zdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgICAuLi5jb25maWcuc3R5bGVzXG4gICAgfTtcbiAgICBjb25zdCBuZXdJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6ICdvdmVybGF5Q29uZmlnJyxcbiAgICAgICAgdXNlVmFsdWU6IDxPdmVybGF5Q29uZmlnPntcbiAgICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpLFxuICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICBzdHlsZXM6IF9fc3R5bGVzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSwgdGhpcy5faW5qZWN0b3IpO1xuXG4gICAgdGhpcy51cGRhdGVTdHlsZXMoX19zdHlsZXMpO1xuICAgIGlmIChjb25maWcuaG9zdCkge1xuICAgICAgdGhpcy53aW5kb3dTUlN1YiA9IG1lcmdlKHdpbmRvd1Njcm9sbC5zY3JvbGwkLCByZXNpemVTZXJ2aWNlLnJlc2l6ZSQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKG5ld1N0eWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXM7XG4gICAgaWYgKGNsYXNzZXMgJiYgY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiAodGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQoTHlPdmVybGF5QmFja2Ryb3AsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZChiYWNrZHJvcEVsKTtcbiAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHkoX3RlbXBsYXRlUmVmLCBfY29udGV4dCwgdGhpcy5faW5qZWN0b3IpO1xuXG4gIH1cblxuICB1cGRhdGVTdHlsZXMoX19zdHlsZXMpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwpIHtcbiAgICAgICAgICB0aGlzLl9lbC5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiB8IHN0cmluZywgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsLmlubmVyVGV4dCA9IHR5cGU7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudCh0eXBlIGFzIFR5cGU8YW55PiwgaW5qZWN0b3IpO1xuICAgICAgdGhpcy5fZWwgPSB0aGlzLl9jb21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQ29tcG9uZW50KHR5cGU6IFR5cGU8YW55PiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlKTtcbiAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl92aWV3UmVmKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbXBSZWYpIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2VsKSB7XG4gICAgICAvLyByZW1vdmUgaWYgY29udGVudCBpcyBzdHJpbmdcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuZGVzdHJveSgpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfd2luZG93U2Nyb2xsOiBXaW5kb3dTY3JvbGxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2VcbiAgKSB7IH1cblxuICBjcmVhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcsIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZUZyb21UZW1wbGF0ZVJlZihcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0ZW1wbGF0ZSwgdGhpcy5fb3ZlcmxheUNvbnRhaW5lciwgY29udGV4dCwgdGhpcy5faW5qZWN0b3IsIHRoaXMuX3dpbmRvd1Njcm9sbCwgdGhpcy5fcmVzaXplU2VydmljZSwgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5T3ZlcmxheUJhY2tkcm9wXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTHlPdmVybGF5QmFja2Ryb3BdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBNVVRBVElPTl9PQlNFUlZFUl9JTklUID0ge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICBjaGlsZExpc3Q6IHRydWUsXG4gIHN1YnRyZWU6IHRydWVcbn07XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgY3JlYXRlKGNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrKTogTXV0YXRpb25PYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX29ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5OiBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeVxuICApIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5kZXN0cm95KGVsZW1lbnQpKTtcbiAgfVxuXG4gIG9ic2VydmUoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50PiwgZm46IE11dGF0aW9uQ2FsbGJhY2ssIG9wdGlvbnM/OiBNdXRhdGlvbk9ic2VydmVySW5pdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLl9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeS5jcmVhdGUoZm4pO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb3B0aW9ucyB8fCBNVVRBVElPTl9PQlNFUlZFUl9JTklUKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgT2JzZXJ2ZXJcbiAgICovXG4gIGRlc3Ryb3koZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KS5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduQWxpYXMge1xuICByb3dSZXZlcnNlID0gJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZSA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlID0gJ3dyYXAtcmV2ZXJzZScsXG4gIHN0YXJ0ID0gJ2ZsZXgtc3RhcnQnLFxuICBlbmQgPSAnZmxleC1lbmQnLFxuICBiZXR3ZWVuID0gJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQgPSAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5ID0gJ3NwYWNlLWV2ZW5seSdcbn1cbiJdLCJuYW1lcyI6WyJtYXAiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRFRkFVTFRfQkciLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixjQUFjLENBQUMsUUFBUTs7UUFDL0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1FBQ3ZDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztRQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7UUFDdkMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSTtJQUN0RCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3pDOzs7Ozs7Ozs7OztBQ05EO0lBQ00sTUFBTSxHQUFHLE9BQU87O0lBRWhCLHFCQUFxQixHQUFHLEdBQUc7O0lBQzNCLHdCQUF3QixHQUFHLElBQUk7O0lBQy9CLDBCQUEwQixHQUFHLElBQUk7O0FBQ3ZDLElBQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDM0M7Ozs7OztBQUNELFNBQWdCLHVCQUF1QixDQUFDLFNBQThCLEVBQUUsS0FBYztJQUE5QywwQkFBQSxFQUFBLGFBQThCO0lBQUUsc0JBQUEsRUFBQSxjQUFjOztRQUM5RSxLQUFL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