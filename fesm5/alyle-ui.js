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
        if (val === DirAlias.before) {
            return this.direction === 'rtl' ? 'right' : 'left';
        }
        else if (val === DirAlias.after) {
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
 * @deprecated in favor of `Positioning`
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
    return createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset);
}
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
function createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset) {
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
var Positioning = /** @class */ (function () {
    function Positioning(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset) {
        if (offset === void 0) { offset = 0; }
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this.themeVariables = themeVariables;
        this.offset = offset;
        this.offsetCheck = 16;
        this.originRect = (/** @type {?} */ (this.origin.getBoundingClientRect()));
        this.overlayElementRect = (/** @type {?} */ (this.overlayElement.getBoundingClientRect()));
        this.createPosition();
        for (var index = 0; index < 2; index++) {
            if (this.checkAll()) {
                this.createPosition();
            }
        }
        // Where there is not enough space
        if (this.checkAll()) {
            /** @type {?} */
            var _max_width = this.overlayElementRect.width + this.offsetCheck * 2 > window.innerWidth;
            /** @type {?} */
            var _max_height = this.overlayElementRect.height + this.offsetCheck * 2 > window.innerHeight;
            if (_max_width || _max_height) {
                if (_max_height) {
                    this.y = this.originRect.y - this.offsetCheck;
                    this.y *= -1;
                }
                if (_max_width) {
                    this.x = this.originRect.x - this.offsetCheck;
                    this.x *= -1;
                }
            }
            else if (this.checkBottom()) {
                this.y += (/** @type {?} */ (this.checkBottom(true)));
            }
            else if (this.checkTop()) {
                this.y -= (/** @type {?} */ (this.checkTop(true)));
            }
            if (this.checkRight()) {
                this.x += (/** @type {?} */ (this.checkRight(true)));
            }
            else if (this.checkLeft()) {
                this.x -= (/** @type {?} */ (this.checkLeft(true)));
            }
        }
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    /**
     * @return {?}
     */
    Positioning.prototype.createPosition = /**
     * @return {?}
     */
    function () {
        if (this.xPosition && this.yPosition) {
            throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
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
        if (this.placement || this.xPosition || this.yPosition) {
            if (this.placement) {
                if (this.placement === YPosition.above) {
                    x = (this.originRect.width - this.overlayElementRect.width) / 2;
                    y = -this.overlayElementRect.height - this.offset;
                    oy = 'bottom';
                }
                else if (this.placement === YPosition.below) {
                    x = (this.originRect.width - this.overlayElementRect.width) / 2;
                    y = this.originRect.height + this.offset;
                    oy = 'top';
                }
                else {
                    /** @type {?} */
                    var dir = this.themeVariables.getDirection((/** @type {?} */ (this.placement)));
                    if (dir === DirPosition.left) {
                        ox = '100%';
                        x = -this.overlayElementRect.width - this.offset;
                        y = (this.originRect.height - this.overlayElementRect.height) / 2;
                    }
                    else if (dir === DirPosition.right) {
                        ox = '0%';
                        x = this.originRect.width + this.offset;
                        y = (this.originRect.height - this.overlayElementRect.height) / 2;
                    }
                }
            }
            if (this.xPosition) {
                /** @type {?} */
                var dir = this.themeVariables.getDirection((/** @type {?} */ (this.xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = 0;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this.originRect.width - this.overlayElementRect.width;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = 0;
                    oy = '0%';
                }
                else if (this.yPosition === YPosition.below) {
                    y = this.originRect.height - this.overlayElementRect.height;
                    oy = '100%';
                }
            }
        }
        this.x = x;
        this.y = y;
        this.ax = x + this.overlayElementRect.x;
        this.ay = y + this.overlayElementRect.y;
        this.ox = ox;
        this.oy = oy;
        return {
            x: Math.round(x),
            y: Math.round(y),
            ox: ox,
            oy: oy
        };
    };
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkLeft = /**
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = this.ax - this.offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = this.invertPosition(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = (/** @type {?} */ (this.invertPosition(this.xPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkRight = /**
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = window.innerWidth - (this.ax + this.overlayElementRect.width + this.offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = this.invertPosition(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = (/** @type {?} */ (this.invertPosition(this.xPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkTop = /**
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = this.ay - this.offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = this.invertPosition(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = (/** @type {?} */ (this.invertPosition(this.yPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkBottom = /**
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = window.innerHeight - (this.ay + this.overlayElementRect.height + this.offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = this.invertPosition(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = (/** @type {?} */ (this.invertPosition(this.yPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @return {?}
     */
    Positioning.prototype.checkAll = /**
     * @return {?}
     */
    function () {
        return this.checkLeft() ||
            this.checkRight() ||
            this.checkTop() ||
            this.checkBottom();
    };
    /**
     * @param {?} placement
     * @return {?}
     */
    Positioning.prototype.invertPosition = /**
     * @param {?} placement
     * @return {?}
     */
    function (placement) {
        if (placement === YPosition.above) {
            return YPosition.below;
        }
        else if (placement === YPosition.below) {
            return YPosition.above;
        }
        else if (placement === XPosition.after) {
            return XPosition.before;
        }
        else if (placement === XPosition.before) {
            return XPosition.after;
        }
        else if (placement === XPosition.right) {
            return XPosition.left;
        }
        else if (placement === XPosition.left) {
            return XPosition.right;
        }
    };
    return Positioning;
}());

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
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyle(str, themeVariables) {
    /** @type {?} */
    var hyphenCase = toHyphenCase(str);
    if (hyphenCase.indexOf(DirAlias.before) !== -1) {
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
            this._rippleRef = null;
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
    },
    button: {
        '-webkit-tap-highlight-color': 'transparent',
        backgroundColor: "transparent",
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        margin: 0,
        outline: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        textDecorationLine: 'none',
        '-webkit-text-decoration-line': 'none',
        '&::-moz-focus-inner': {
            border: 0
        }
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
                            var triggerElement = _this._triggerElement.nativeElement;
                            /** @type {?} */
                            var rippleContainer = (_this._rippleContainer && _this._rippleContainer.nativeElement) || triggerElement;
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
// Element to move, time in ms to animate
/**
 * @param {?} element
 * @param {?} duration
 * @return {?}
 */
function scrollTo(element, duration) {
    /** @type {?} */
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        /** @type {?} */
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}
// Element to move, element or px from, element or px to, time in ms to animate
/**
 * @param {?} element
 * @param {?} from
 * @param {?} to
 * @param {?} duration
 * @return {?}
 */
function scrollToC(element, from, to, duration) {
    if (duration <= 0) {
        return;
    }
    if (typeof from === 'object') {
        from = from.offsetTop;
    }
    if (typeof to === 'object') {
        to = to.offsetTop;
    }
    createScrollWithAnimation(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}
/**
 * @param {?} element
 * @param {?} to
 * @param {?} duration
 * @param {?=} p
 * @param {?=} motion
 * @return {?}
 */
function scrollWithAnimation(element, to, duration, p, motion) {
    /** @type {?} */
    var _motion = motion || easeOutCuaic;
    var scrollLeft = element.scrollLeft;
    return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
}
/**
 * @param {?} element
 * @param {?} xFrom
 * @param {?} xTo
 * @param {?} t01
 * @param {?} speed
 * @param {?} step
 * @param {?} motion
 * @param {?=} p
 * @return {?}
 */
function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
    /** @type {?} */
    var scrollT = p === 'y' ? 'scrollTop' : 'scrollLeft';
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element[scrollT] = xTo;
        return;
    }
    element[scrollT] = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    setTimeout(function () {
        createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p);
    }, step);
}
// function linearTween(t: number) {
//   return t;
// }
// function easeInQuad(t: number) {
//   return t * t;
// }
// function easeOutQuad(t: number) {
//   return -t * (t - 2);
// }
// function easeInOutQuad(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t / 2; }
//   t--;
//   return (t * (t - 2) - 1) / 2;
// }
// function easeInCuaic(t: number) {
//   return t * t * t;
// }
/**
 * @param {?} t
 * @return {?}
 */
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
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
        var el = getNativeElement(element);
        /** @type {?} */
        var focusStateInfo = this._elementMap.get(el);
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._elementMap.delete(el);
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
var AUI_VERSION = '1.9.10';
/** @type {?} */
var AUI_LAST_UPDATE = '2018-12-22T04:40:35.027Z';

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
var WinResize = /** @class */ (function () {
    function WinResize(document, ngZone) {
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
    WinResize.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WinResize.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ WinResize.ngInjectableDef = defineInjectable({ factory: function WinResize_Factory() { return new WinResize(inject(DOCUMENT), inject(NgZone)); }, token: WinResize, providedIn: "root" });
    return WinResize;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var WinScroll = /** @class */ (function () {
    function WinScroll(_document, ngZone) {
        var _this = this;
        this._document = _document;
        if (Platform.isBrowser) {
            ngZone.runOutsideAngular(function () {
                _this.scroll$ = fromEvent(window.document, 'scroll').pipe(auditTime(20), map(function () {
                    return window.scrollY || _this._document.documentElement.scrollTop;
                }), share());
            });
        }
        else {
            this.scroll$ = empty();
        }
    }
    WinScroll.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WinScroll.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ WinScroll.ngInjectableDef = defineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(inject(DOCUMENT), inject(NgZone)); }, token: WinScroll, providedIn: "root" });
    return WinScroll;
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
        { type: WinScroll },
        { type: WinResize }
    ]; };
    /** @nocollapse */ LyOverlay.ngInjectableDef = defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(inject(LyOverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(WinScroll), inject(WinResize)); }, token: LyOverlay, providedIn: "root" });
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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, supportsPassiveEventListeners, LyCommonModule, getNativeElement, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, defaultEntry, scrollTo, scrollToC, scrollWithAnimation, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyPaperBase, LyPaperMixinBase, LyPaper, CoreTheme, LY_THEME_GLOBAL_VARIABLES, LY_THEME, LY_THEME_NAME, converterToCssKeyAndStyle, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, Dir, DirAlias, DirPosition, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, MutationObserverFactory, ElementObserver, WinResize, WinScroll, mixinStyleUpdater, mixinDisableRipple, mixinDisabled, mixinColor, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Ripple, LyRippleService, getPosition, YPosition, XPosition, Positioning, AlignAlias, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGFzc2l2ZS1saXN0ZW5lcnMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vYnVpbGQtY29tbW9uLWJlaGF2aW9ycy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlLXJpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZGlzYWJsZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2NvbG9yLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9iZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vcmFpc2VkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9vdXRsaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZWxldmF0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9zaGFkb3ctY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcGFwZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9zY3JvbGwtdG8udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LWNvbnRhaW5lci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vcmVzaXplLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9zY3JvbGwudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9tdXRhdGlvbi1vYnNlcnZlci1mYWN0b3J5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL2FsaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gMiwgY29sb3IgPSAnIzAwMCcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgYm94LXNoYWRvdzoke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKSB7XG4gIGxldCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpO1xuICBjb25zdCByZ2IgPSBDb2xvci5nZXQoJ3JnYicpIGFzIGFueSBhcyBudW1iZXJbXTtcbiAgaWYgKCEocmdiWzBdID09PSByZ2JbMV0gJiYgcmdiWzBdID09PSByZ2JbMl0pKSB7XG4gICAgLy8gRGFya2VuIGFuZCBzYXR1cmF0ZSBpZiB0aGUgY29sb3IgaXMgbm90IGluIHRoZSBncmF5c2NhbGVcbiAgICBDb2xvciA9IENvbG9yLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICB9XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGAke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICBjb250cmFzdD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcbiAgYmFja2dyb3VuZD86IHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxuICAgIHBhcGVyPzogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbiAgdGV4dD86IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeT86IHN0cmluZyxcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ/OiBzdHJpbmcsXG4gICAgaGludD86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIGRpdmlkZXI/OiBzdHJpbmc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBpbnB1dD86IHtcbiAgICBsYWJlbD86IHN0cmluZyxcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcbiAgfTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIiwiXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgc3RhdGljIHJlYWRvbmx5IFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXG4gIHN0YXRpYyByZWFkb25seSBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhUGxhdGZvcm0uRURHRSAmJiAhUGxhdGZvcm0uVFJJREVOVCk7XG5cbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cbiAgc3RhdGljIHJlYWRvbmx5IFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uQkxJTksgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQ7XG5cbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG5cbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXG4gIHN0YXRpYyByZWFkb25seSBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cbiAgc3RhdGljIHJlYWRvbmx5IEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXG4gIHN0YXRpYyByZWFkb25seSBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUGxhdGZvcm0uV0VCS0lUO1xufVxuIiwibGV0IHN1cHBvcnRzUGFzc2l2ZTtcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpOiBib29sZWFuIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVN0eWxlVXRpbHMsIERpciB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFN0eWxlQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9yaXBwbGUnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2hlY2tib3hWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9jaGVja2JveCc7XG5pbXBvcnQgeyBTbmFja0JhclZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBCdXR0b25WYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9idXR0b24nO1xuaW1wb3J0IHsgVG9vbHRpcFZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3Rvb2x0aXAnO1xuaW1wb3J0IHsgQXZhdGFyVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvYXZhdGFyJztcblxuZXhwb3J0IGNvbnN0IExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFydGlhbFRoZW1lVmFyaWFibGVzPignbHkudGhlbWUuZ2xvYmFsLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGRpc2FibGVkOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBwYXBlcjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYmFja2dyb3VuZDoge1xuICAgIC8qKiBzZWNvbmRhcnkgKi9cbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcixcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICB0ZXJ0aWFyeTogc3RyaW5nLFxuICAgIGJhc2U6IHN0cmluZ1xuICB9O1xuICB0ZXh0OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IHN0cmluZyxcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICBkaXNhYmxlZDogc3RyaW5nLFxuICAgIGhpbnQ6IHN0cmluZ1xuICB9O1xuICB0eXBvZ3JhcGh5OiBUeXBvZ3JhcGh5VmFyaWFibGVzO1xuICAvKiogY29sb3IgZm9yIGRpdmlkZXIgKi9cbiAgZGl2aWRlcjogc3RyaW5nO1xuICBzaGFkb3c6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzaGFkb3cgaW5zdGVhZCAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgcmFkaW86IHtcbiAgICAvKiogY29sb3IgZm9yIHJhZGlvOm91dGVyQ2lyY2xlICovXG4gICAgb3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBvdXRlckNpcmNsZSBpbnN0ZWFkICovXG4gICAgcmFkaW9PdXRlckNpcmNsZT86IHN0cmluZztcbiAgfTtcbiAgbWVudToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICB9O1xuICBkcmF3ZXI6IHtcbiAgICAvKiogY29sb3IgZm9yIGRyYXdlcjpiYWNrZHJvcCAqL1xuICAgIGJhY2tkcm9wOiBzdHJpbmdcbiAgfTtcbiAgZmllbGQ6IHtcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nXG4gICAgbGFiZWxDb2xvcjogc3RyaW5nXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgYmFzZT86IHtcbiAgICAgICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyRm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGxhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbnB1dD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZsb2F0aW5nTGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwcmVmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHN1ZmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGhpbnQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgfTtcbiAgICAgIFthcHBlYXJhbmNlTmFtZTogc3RyaW5nXToge1xuICAgICAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpY29uQnV0dG9uOiB7XG4gICAgc2l6ZTogc3RyaW5nXG4gIH07XG4gIGljb246IHtcbiAgICBmb250U2l6ZTogc3RyaW5nXG4gIH07XG4gIHpJbmRleDoge1xuICAgIHRvb2xiYXI6IG51bWJlclxuICAgIGRyYXdlcjogbnVtYmVyXG4gICAgb3ZlcmxheTogbnVtYmVyXG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyXG4gIH07XG4gIGRpcmVjdGlvbj86IERpcjtcbiAgYW5pbWF0aW9uczoge1xuICAgIGN1cnZlczoge1xuICAgICAgc3RhbmRhcmQ6IHN0cmluZ1xuICAgICAgZGVjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIGFjY2VsZXJhdGlvbjogc3RyaW5nXG4gICAgICBzaGFycDogc3RyaW5nXG4gICAgfSxcbiAgICBkdXJhdGlvbnM6IHtcbiAgICAgIGNvbXBsZXg6IG51bWJlclxuICAgICAgZW50ZXJpbmc6IG51bWJlclxuICAgICAgZXhpdGluZzogbnVtYmVyXG4gICAgfVxuICB9O1xuICByaXBwbGU6IFJpcHBsZVZhcmlhYmxlcztcbiAgYmFkZ2U6IHtcbiAgICByb290PzogU3R5bGVDb250YWluZXIsXG4gICAgcG9zaXRpb24/OiB7XG4gICAgICBbcG9zaXRpb25OYW1lOiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lclxuICAgIH1cbiAgfTtcbiAgY2hlY2tib3g6IENoZWNrYm94VmFyaWFibGVzO1xuICBzbmFja0JhcjogU25hY2tCYXJWYXJpYWJsZXM7XG4gIGJ1dHRvbjogQnV0dG9uVmFyaWFibGVzO1xuICB0b29sdGlwOiBUb29sdGlwVmFyaWFibGVzO1xuICBhdmF0YXI6IEF2YXRhclZhcmlhYmxlcztcbn1cblxuZXhwb3J0IHR5cGUgVGhlbWVWYXJpYWJsZXMgPSBMeVN0eWxlVXRpbHMgJiBUaGVtZUNvbmZpZztcbmV4cG9ydCB0eXBlIFBhcnRpYWxUaGVtZVZhcmlhYmxlcyA9IFJlY3Vyc2l2ZVBhcnRpYWw8VGhlbWVWYXJpYWJsZXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0Pzogc3RyaW5nO1xuICAvKiogc2hhZG93IGNvbG9yICovXG4gIHNoYWRvdz86IHN0cmluZztcbn1cblxudHlwZSBSZWN1cnNpdmVQYXJ0aWFsPFQ+ID0ge1xuICBbUCBpbiBrZXlvZiBUXT86IFJlY3Vyc2l2ZVBhcnRpYWw8VFtQXT47XG59O1xuIiwiZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgWFNtYWxsOiBzdHJpbmcsXG4gICAgU21hbGw6IHN0cmluZyxcbiAgICBNZWRpdW06IHN0cmluZyxcbiAgICBMYXJnZTogc3RyaW5nLFxuICAgIFhMYXJnZTogc3RyaW5nLFxuXG4gICAgSGFuZHNldDogc3RyaW5nLFxuICAgIFRhYmxldDogc3RyaW5nLFxuICAgIFdlYjogc3RyaW5nLFxuXG4gICAgSGFuZHNldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgVGFibGV0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBXZWJQb3J0cmFpdDogc3RyaW5nLFxuXG4gICAgSGFuZHNldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFRhYmxldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFdlYkxhbmRzY2FwZTogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9O1xuICBkaXJlY3Rpb246IERpcjtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nLCBvcHRpb25hbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICB9XG4gIGdldEJyZWFrcG9pbnQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke3RoaXMuYnJlYWtwb2ludHNba2V5XSB8fCBrZXl9YDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbih2YWw6IERpckFsaWFzKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuYmVmb3JlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gRGlyQWxpYXMuYWZ0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBEaXIge1xuICBydGwgPSAncnRsJyxcbiAgbHRyID0gJ2x0cidcbn1cbmV4cG9ydCBlbnVtIERpckFsaWFzIHtcbiAgYmVmb3JlID0gJ2JlZm9yZScsXG4gIGFmdGVyID0gJ2FmdGVyJ1xufVxuZXhwb3J0IGVudW0gRGlyUG9zaXRpb24ge1xuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuLyoqXG4gKiBnZXQgY29sb3Igb2Ygb2JqZWN0XG4gKiBAcGFyYW0gb2JqIG9iamVjdFxuICogQHBhcmFtIHBhdGggcGF0aFxuICogQHBhcmFtIG9wdGlvbmFsIGdldCBvcHRpb25hbCB2YWx1ZSwgaWYgbm90IGV4aXN0IHJldHVybiBkZWZhdWx0IGlmIG5vdCBpcyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBzdHJpbmdbXSB8IHN0cmluZywgb3B0aW9uYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwb3NpYmxlT2IgPSBvYmpbX3BhdGhbaV1dO1xuICAgIGlmIChwb3NpYmxlT2IpIHtcbiAgICAgIG9iaiA9IHBvc2libGVPYjtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIGlmIG5vdCBleGlzdCAqL1xuICAgICAgcmV0dXJuIHBhdGggYXMgc3RyaW5nO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gb2JqIGFzIHN0cmluZztcbiAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgIHJldHVybiBvYmpbb3B0aW9uYWxdIHx8IG9ialsnZGVmYXVsdCddO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpbJ2RlZmF1bHQnXTtcbiAgfVxuICAvLyByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKHN0cjogc3RyaW5nIHwgbnVtYmVyLCBmbjogKCh2YWw6IHN0cmluZywgbWVkaWE6IHN0cmluZywgaXNNZWRpYTogbnVtYmVyKSA9PiB2b2lkKSkge1xuICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBzdHIuc3BsaXQoL1xccy9nKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdmFsSXRlbSA9IHZhbHVlc1tpbmRleF0uc3BsaXQoL1xcQC9nKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsSXRlbS5zaGlmdCgpO1xuICAgICAgY29uc3QgbGVuID0gdmFsSXRlbS5sZW5ndGg7XG4gICAgICBpZiAobGVuKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHZhbEl0ZW1bal0sIHZhbEl0ZW0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB1bmRlZmluZWQsIGxlbik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZuLmNhbGwodW5kZWZpbmVkLCBzdHIsIHVuZGVmaW5lZCwgMCk7XG4gIH1cbn1cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFU+KHRhcmdldDogVCwgc291cmNlOiBVKTogVCAmIFU7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFY+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogVik6IFQgJiBVICYgVjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgViwgVz4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWLCBzb3VyY2UzOiBXKTogVCAmIFUgJiBWICYgVztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0OiBvYmplY3QsIC4uLnNvdXJjZXM6IGFueVtdKTogYW55O1xuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gLi4uc291cmNlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7IHJldHVybiB0YXJnZXQ7IH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgeyBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7IH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FLCBUaGVtZVZhcmlhYmxlcywgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBtZXJnZURlZXAgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIGZpcnN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IHRoZW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZVZhcmlhYmxlcz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRSkgdGhlbWVDb25maWc6IFRoZW1lQ29uZmlnW10gfCBUaGVtZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMpIGdsb2JhbFZhcmlhYmxlczogVGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRSB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdCA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2x5LXMtYycpO1xuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGVzLml0ZW0oaW5kZXgpO1xuICAgICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGVtZUNvbmZpZykpIHtcbiAgICAgIHRoZW1lQ29uZmlnLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMpIHtcbiAgICAgICAgICBtZXJnZURlZXAoaXRlbSwgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZChpdGVtIGFzIGFueSk7XG4gICAgICAgIHRoaXMudGhlbWVzLmFkZChpdGVtLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMpIHtcbiAgICAgICAgbWVyZ2VEZWVwKHRoZW1lQ29uZmlnLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGQodGhlbWVDb25maWcgYXMgYW55KTtcbiAgICAgIHRoaXMudGhlbWVzLmFkZCh0aGVtZUNvbmZpZy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lVmFyaWFibGVzXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBEaXJQb3NpdGlvbiB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuZXhwb3J0IGVudW0gWVBvc2l0aW9uIHtcbiAgYWJvdmUgPSAnYWJvdmUnLFxuICBiZWxvdyA9ICdiZWxvdydcbn1cblxuZXhwb3J0IGVudW0gWFBvc2l0aW9uIHtcbiAgYmVmb3JlID0gJ2JlZm9yZScsXG4gIGFmdGVyID0gJ2FmdGVyJyxcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9IFhQb3NpdGlvbiB8IFlQb3NpdGlvbjtcblxuLyoqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIGBQb3NpdGlvbmluZ2AgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgb3JpZ2luOiBFbGVtZW50LFxuICBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBvZmZzZXQgPSAwXG4pIHtcbiAgcmV0dXJuIGNyZWF0ZVBvc2l0aW9uKFxuICAgIHBsYWNlbWVudCxcbiAgICB4UG9zaXRpb24sXG4gICAgeVBvc2l0aW9uLFxuICAgIG9yaWdpbixcbiAgICBvdmVybGF5RWxlbWVudCxcbiAgICB0aGVtZVZhcmlhYmxlcyxcbiAgICBvZmZzZXRcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb24oXG4gIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICB4UG9zaXRpb246IFhQb3NpdGlvbixcbiAgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gIG9yaWdpbjogRWxlbWVudCxcbiAgb3ZlcmxheUVsZW1lbnQ6IEVsZW1lbnQsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgb2Zmc2V0ID0gMFxuKSB7XG5cbiAgY29uc3Qgb3JpZ2luUmVjdCA9IG9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBjb25zdCBvdmVybGF5RWxlbWVudFJlY3QgPSBvdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBpZiAoeFBvc2l0aW9uICYmIHlQb3NpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbiBub3QgdXNlIFxcYHhQb3NpdGlvblxcYCBhbmQgXFxgeVBvc2l0aW9uXFxgIHRvZ2V0aGVyLCB1c2Ugb25seSBvbmUgb2YgdGhlbS5gKTtcbiAgfVxuICBpZiAoKHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pICYmICFwbGFjZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHBsYWNlbWVudFxcYCBpcyByZXF1aXJlZC5gKTtcbiAgfVxuICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIG94ID0gJ2NlbnRlcicsXG4gICAgICBveSA9ICdjZW50ZXInO1xuICBpZiAocGxhY2VtZW50IHx8IHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pIHtcbiAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeCA9IChvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgIHkgPSAtb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgb3kgPSAnYm90dG9tJztcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeCA9IChvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgIHkgPSBvcmlnaW5SZWN0LmhlaWdodCArIG9mZnNldDtcbiAgICAgICAgb3kgPSAndG9wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihwbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggPSAtb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC0gb2Zmc2V0O1xuICAgICAgICAgIHkgPSAob3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gb3JpZ2luUmVjdC53aWR0aCArIG9mZnNldDtcbiAgICAgICAgICB5ID0gKG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHhQb3NpdGlvbikge1xuICAgICAgY29uc3QgZGlyID0gdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICB4ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICB4ID0gb3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbikge1xuICAgICAgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgIHkgPSAwO1xuICAgICAgICBveSA9ICcwJSc7XG4gICAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHkgPSBvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgeTogTWF0aC5yb3VuZCh5KSxcbiAgICBveCxcbiAgICBveVxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwcml2YXRlIG9mZnNldENoZWNrID0gMTY7XG4gIHByaXZhdGUgb3JpZ2luUmVjdCA9IHRoaXMub3JpZ2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIHByaXZhdGUgb3ZlcmxheUVsZW1lbnRSZWN0ID0gdGhpcy5vdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgYXg6IG51bWJlcjtcbiAgYXk6IG51bWJlcjtcbiAgb3g6IHN0cmluZztcbiAgb3k6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gICAgcHJpdmF0ZSB4UG9zaXRpb246IFhQb3NpdGlvbixcbiAgICBwcml2YXRlIHlQb3NpdGlvbjogWVBvc2l0aW9uLFxuICAgIHByaXZhdGUgb3JpZ2luOiBFbGVtZW50LFxuICAgIHByaXZhdGUgb3ZlcmxheUVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBvZmZzZXQgPSAwXG4gICkge1xuICAgIHRoaXMuY3JlYXRlUG9zaXRpb24oKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyOyBpbmRleCsrKSB7XG4gICAgICBpZiAodGhpcy5jaGVja0FsbCgpKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVyZSB0aGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlXG4gICAgaWYgKHRoaXMuY2hlY2tBbGwoKSkge1xuICAgICAgY29uc3QgX21heF93aWR0aCA9IHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoICsgdGhpcy5vZmZzZXRDaGVjayAqIDIgPiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IF9tYXhfaGVpZ2h0ID0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0ICsgdGhpcy5vZmZzZXRDaGVjayAqIDIgPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBpZiAoX21heF93aWR0aCB8fCBfbWF4X2hlaWdodCkge1xuICAgICAgICBpZiAoX21heF9oZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLnkgPSB0aGlzLm9yaWdpblJlY3QueSAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfbWF4X3dpZHRoKSB7XG4gICAgICAgICAgdGhpcy54ID0gdGhpcy5vcmlnaW5SZWN0LnggLSB0aGlzLm9mZnNldENoZWNrO1xuICAgICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrQm90dG9tKCkpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuY2hlY2tCb3R0b20odHJ1ZSkgYXMgbnVtYmVyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrVG9wKCkpIHtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuY2hlY2tUb3AodHJ1ZSkgYXMgbnVtYmVyO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tSaWdodCgpKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmNoZWNrUmlnaHQodHJ1ZSkgYXMgbnVtYmVyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrTGVmdCgpKSB7XG4gICAgICAgIHRoaXMueCAtPSB0aGlzLmNoZWNrTGVmdCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcm91bmQgcmVzdWx0XG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICB0aGlzLmF4ID0gTWF0aC5yb3VuZCh0aGlzLmF4KTtcbiAgICB0aGlzLmF5ID0gTWF0aC5yb3VuZCh0aGlzLmF5KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQb3NpdGlvbihcbiAgKSB7XG4gICAgaWYgKHRoaXMueFBvc2l0aW9uICYmIHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4gbm90IHVzZSBcXGB4UG9zaXRpb25cXGAgYW5kIFxcYHlQb3NpdGlvblxcYCB0b2dldGhlciwgdXNlIG9ubHkgb25lIG9mIHRoZW0uYCk7XG4gICAgfVxuICAgIGlmICgodGhpcy54UG9zaXRpb24gfHwgdGhpcy55UG9zaXRpb24pICYmICF0aGlzLnBsYWNlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGBwbGFjZW1lbnRcXGAgaXMgcmVxdWlyZWQuYCk7XG4gICAgfVxuICAgIGxldCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIG94ID0gJ2NlbnRlcicsXG4gICAgICAgIG95ID0gJ2NlbnRlcic7XG4gICAgaWYgKHRoaXMucGxhY2VtZW50IHx8IHRoaXMueFBvc2l0aW9uIHx8IHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB4ID0gKHRoaXMub3JpZ2luUmVjdC53aWR0aCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgICAgeSA9IC10aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgLSB0aGlzLm9mZnNldDtcbiAgICAgICAgICBveSA9ICdib3R0b20nO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB4ID0gKHRoaXMub3JpZ2luUmVjdC53aWR0aCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgICAgeSA9IHRoaXMub3JpZ2luUmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldDtcbiAgICAgICAgICBveSA9ICd0b3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRpciA9IHRoaXMudGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHRoaXMucGxhY2VtZW50IGFzIGFueSk7XG4gICAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgICB4ID0gLXRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICB5ID0gKHRoaXMub3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICAgIHggPSB0aGlzLm9yaWdpblJlY3Qud2lkdGggKyB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIHkgPSAodGhpcy5vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy50aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy54UG9zaXRpb24gYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgICAgeCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IHRoaXMub3JpZ2luUmVjdC53aWR0aCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgb3kgPSAnMCUnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB5ID0gdGhpcy5vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgICBveSA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5heCA9IHggKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC54O1xuICAgIHRoaXMuYXkgPSB5ICsgdGhpcy5vdmVybGF5RWxlbWVudFJlY3QueTtcbiAgICB0aGlzLm94ID0gb3g7XG4gICAgdGhpcy5veSA9IG95O1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNYXRoLnJvdW5kKHgpLFxuICAgICAgeTogTWF0aC5yb3VuZCh5KSxcbiAgICAgIG94LFxuICAgICAgb3lcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0xlZnQocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB0aGlzLmF4IC0gdGhpcy5vZmZzZXRDaGVjaztcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5hYm92ZSAmJiB0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMueFBvc2l0aW9uKSBhcyBYUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tSaWdodChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKHRoaXMuYXggKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCArIHRoaXMub2Zmc2V0Q2hlY2spO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1RvcChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXkgLSB0aGlzLm9mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy55UG9zaXRpb24pIGFzIFlQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja0JvdHRvbShyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtICh0aGlzLmF5ICsgdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0ICsgdGhpcy5vZmZzZXRDaGVjayk7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tMZWZ0KCkgfHxcbiAgICB0aGlzLmNoZWNrUmlnaHQoKSB8fFxuICAgIHRoaXMuY2hlY2tUb3AoKSB8fFxuICAgIHRoaXMuY2hlY2tCb3R0b20oKTtcbiAgfVxuXG4gIHByaXZhdGUgaW52ZXJ0UG9zaXRpb24ocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQbGFjZW1lbnQge1xuICAgIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgcmV0dXJuIFlQb3NpdGlvbi5iZWxvdztcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICByZXR1cm4gWVBvc2l0aW9uLmFib3ZlO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIpIHtcbiAgICAgIHJldHVybiBYUG9zaXRpb24uYmVmb3JlO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24uYmVmb3JlKSB7XG4gICAgICByZXR1cm4gWFBvc2l0aW9uLmFmdGVyO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgIHJldHVybiBYUG9zaXRpb24ubGVmdDtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmxlZnQpIHtcbiAgICAgIHJldHVybiBYUG9zaXRpb24ucmlnaHQ7XG4gICAgfVxuICB9XG5cbn1cblxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgWVBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vcG9zaXRpb24nO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuXG5jb25zdCBTVFlMRV9NQVA1OiBNYXA8YW55LCBTdHlsZU1hcDU+ID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNSB7XG4gIHN0eWxlczogU3R5bGVzRm4yIHwgU3R5bGVzMjtcbiAgdHlwZTogVHlwZVN0eWxlO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgLyoqIE9ubHkgZm9yIHN0eWxlcyBvZiBUeXBlU3R5bGUub25lICovXG4gIHBhcmVudFN0eWxlPzogU3R5bGVzO1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZztcbn1cblxubGV0IG5leHRDbGFzc0lkID0gMDtcbmxldCBuZXh0S2V5RnJhbWVJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PlxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbiAgc3R5bGVFbGVtZW50R2xvYmFsTWFwID0gbmV3IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG59XG5cbmNvbnN0IFRIRU1FX01BUCA9IG5ldyBNYXA8c3RyaW5nLCB7XG4gIGJhc2U6IHN0cmluZ1xuICBjaGFuZ2U6IHN0cmluZyB8IG51bGxcbn0+KCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVWYXJpYWJsZXM7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PjtcbiAgX2VsZW1lbnRzTWFwID0gbmV3IE1hcDxhbnksIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG4gIHByaXZhdGUgdGhlbWVNYXAgPSBUSEVNRV9NQVA7XG4gIC8qKiBzc3Igb3IgaG1yICovXG4gIHByaXZhdGUgaXNEZXZPclNlcnZlciA9IGlzRGV2TW9kZSgpIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50aGVtZU1hcC5oYXModGhpcy5pbml0aWFsVGhlbWUpKSB7XG4gICAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHRoaXMuaW5pdGlhbFRoZW1lLCB7XG4gICAgICAgICAgYmFzZTogdGhpcy5pbml0aWFsVGhlbWUsXG4gICAgICAgICAgY2hhbmdlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gcGFyZW50U3R5bGVcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSB8ICgodGhlbWUpID0+IHN0cmluZykgfCBzdHJpbmcsIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIsIHBhcmVudFN0eWxlPzogU3R5bGVzKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlIGFzIGFueSwgaWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIHBhcmVudFN0eWxlKSBhcyBzdHJpbmc7XG4gICAgaWYgKG5ld0NsYXNzID09PSBpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICBpZiAobmV3Q2xhc3MgPT09IG9sZENsYXNzKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICBpZiAobmFtICE9PSB0aGlzLmNvbmZpZy5uYW1lKSB7XG4gICAgICB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSkuY2hhbmdlID0gbmFtO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlIHJpZ2h0LXRvLWxlZnQvbGVmdC10by1yaWdodCAqL1xuICB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuY29uZmlnLmRpcmVjdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5kaXJlY3Rpb24gPSBjdXJyZW50ID09PSBEaXIubHRyID8gRGlyLnJ0bCA6IERpci5sdHI7XG4gICAgdGhpcy5fdXBkYXRlQWxsU3R5bGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbGxTdHlsZXMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlRGF0YSA9IFNUWUxFX01BUDUuZ2V0KGtleSk7XG4gICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBzdHlsZURhdGEuaWQsIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUsIHN0eWxlRGF0YS5wYXJlbnRTdHlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxlIHN0eWxlXG4gICAqIHJldHVybiBjbGFzc05hbWVcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgb2JqZWN0IG9yIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgc3R5bGUgcHJpb3JpdHlcbiAgICovXG4gIGFkZFNpbXBsZVN0eWxlKGlkOiBzdHJpbmcsIGNzczogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lciksIHByaW9yaXR5PzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBpZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMsIHByaW9yaXR5PzogbnVtYmVyKTogT25seUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyKFxuICAgIHN0eWxlczogU3R5bGVzLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLFxuICAgIHBhcmVudFN0eWxlPzogU3R5bGVzXG4gICkge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgYXMgc3RyaW5nIHx8IHN0eWxlcztcbiAgICBsZXQgaXNOZXdTdHlsZTogYm9vbGVhbjtcbiAgICBpZiAoIVNUWUxFX01BUDUuaGFzKG5ld0lkKSkge1xuICAgICAgaXNOZXdTdHlsZSA9IHRydWU7XG4gICAgICBTVFlMRV9NQVA1LnNldChuZXdJZCwge1xuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZCxcbiAgICAgICAgcGFyZW50U3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IFNUWUxFX01BUDUuZ2V0KG5ld0lkKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBpc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgY29uc3QgdGhlbWVNYXAgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTWFwLmNoYW5nZSB8fCB0aGVtZU5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKGNvbmZpZyksIHRoZW1lTmFtZSwgaWQsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBzdHlsZU1hcC5jc3MgPSBjc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBuZXdFbCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3MpO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHdoZW4gYSB0aGVtZSBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgICAgICAvLyBpbiBkZXYgbW9kZSBvciBzZXJ2ZXIgaXQgaXMgbm90IG5lY2Vzc2FyeVxuICAgICAgICAgIC8vIHNpbmNlIHRoZSBzdHlsZXMgd2lsbCBub3QgY2hhbmdlXG4gICAgICAgICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcC5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBuZXdFbCk7XG4gICAgICB9XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCk7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciBvciBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcDtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXAuaGFzKG5ld0lkKSkge1xuICAgICAgICAgIG1hcC5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbWFwLmdldChuZXdJZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgLyoqIFByZWZpeCBuYW1lICovXG4gICRuYW1lPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMiA9IChUKSA9PiBTdHlsZXMyO1xuXG5leHBvcnQgdHlwZSBTdHlsZXMgPSBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleWZyYW1lcyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgW3BlcmNlbnQ6IG51bWJlcl06IFN0eWxlQ29udGFpbmVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZXMyLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlc1xuKSB7XG4gIC8vIGZvciBzdHlsZXMgdHlwZSBzdHJpbmdcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgbGV0IHJ1bGVzOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBydWxlcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIG51bGwsIHN0eWxlcywgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVNYXAucGFyZW50U3R5bGUpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwT2ZQYXJlbnRTdHlsZSA9IFNUWUxFX01BUDUuZ2V0KHN0eWxlTWFwLnBhcmVudFN0eWxlKTtcbiAgICAgIHJldHVybiByZXBsYWNlUmVmcyhydWxlcywgc3R5bGVNYXBPZlBhcmVudFN0eWxlW3RoZW1lTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IG5hbWUgPSBzdHlsZXMuJG5hbWUgPyBgJHtzdHlsZXMuJG5hbWV9LWAgOiAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGB5LSR7bmFtZX0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCBzdHlsZXMuJG5hbWUsIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRhdGFbdG9rZW5dO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGFbYEDDkMKzLi0+LSR7dG9rZW59YF07XG4gICAgfVxuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoa2V5OiBzdHJpbmcsICRuYW1lOiBzdHJpbmcsIG9iOiBPYmplY3QsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkpIHtcbiAgICBpZiAoY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5ID0gYCR7cGFyZW50S2V5fSAke2N1cnJlbnRLZXl9YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gYC4ke2N1cnJlbnRLZXl9YDtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIC8vIE9taXQgc3R5bGUgd2l0aCB2YWx1ZSBudWxsXG4gICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGlzIE9iamVjdCBsaXRlcmFsXG4gICAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCAkbmFtZSwgZWxlbWVudCBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5QW5kVmFsdWUgKz0gY29udmVydFRvU3R5bGVWYWx1ZShzdHlsZUtleSwgZWxlbWVudCwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbGV0IGxpbiA9ICdcXG5cXG4nO1xuICAgICAgaWYgKCRuYW1lKSB7XG4gICAgICAgIGxpbiArPSBgLyoqIFN0eWxlIFNoZWV0IG5hbWU6ICR7JG5hbWV9ICovXFxuYDtcbiAgICAgIH1cbiAgICAgIGxpbiArPSBgLyoqIFN0eWxlIEtleTogJHtrZXl9ICovXFxuYDtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bGlufWA7XG4gICAgfVxuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3R5bGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgbmV3U3R5bGVLZXkgPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoa2V5LCB0aGVtZVZhcmlhYmxlcyk7XG4gIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGluICs9IGAke25ld1N0eWxlS2V5fToke3ZhbHVlW2luZGV4XX07YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWV9O2A7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzVG9TdHJpbmcoc3R5bGVOYW1lOiBzdHJpbmcsIGtleXNNYXA6IG9iamVjdCwga2V5ZnJhbWVzOiBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBsZXQgY29udGVudCA9ICcnO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICBpZiAoa2V5ZnJhbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIC8vIFNvbWV0aW1lcyB0aGUgbmFtZSBvZiBhIGNsYXNzIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgbmFtZSBvZiBhIGtleWZyYW1lLFxuICAgICAgLy8gc28gd2UgYWRkIGEgY2hhcmFjdGVyIHRvIGJlIGRpZmZlcmVudFxuICAgICAgY29uc3QgbmV3VW5pcXVlTmFtZSA9IGBAw5DCsy4tPi0ke25hbWV9YDtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBuZXdOYW1lID0gbmV3VW5pcXVlTmFtZSBpbiBrZXlzTWFwXG4gICAgICA/IGtleXNNYXBbbmV3VW5pcXVlTmFtZV1cbiAgICAgIDoga2V5c01hcFtuZXdVbmlxdWVOYW1lXSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtzdHlsZU5hbWV9JHtuYW1lfS0ke2NyZWF0ZU5leHRLZXlmcmFtZUlkKCl9LXZgKSA6IGNyZWF0ZU5leHRLZXlmcmFtZUlkKCk7XG4gICAgICBjb250ZW50ICs9IGBAa2V5ZnJhbWVzICR7bmV3TmFtZX17YDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBpbiBrZXlmcmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWUuaGFzT3duUHJvcGVydHkocGVyY2VudCkpIHtcbiAgICAgICAgICBjb250ZW50ICs9IGAke3BlcmNlbnR9JXtgO1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGtleWZyYW1lW3BlcmNlbnRdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXldO1xuICAgICAgICAgICAgICBjb250ZW50ICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5LCB2YWwgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudCArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBoeXBoZW5DYXNlID0gdG9IeXBoZW5DYXNlKHN0cik7XG4gIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYmVmb3JlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYmVmb3JlKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYWZ0ZXIpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5hZnRlcik7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5hYm92ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5hYm92ZSwgVE9QKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmJlbG93KSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmJlbG93LCBCT1RUT00pO1xuICB9XG4gIHJldHVybiBoeXBoZW5DYXNlO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIHJldHVybiBzdHIgaW4gbWFwXG4gID8gbWFwW3N0cl1cbiAgOiBtYXBbc3RyXSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyLCB0aGVtZVZhcmlhYmxlcyk7XG59XG5cbmNvbnN0IGlnbm9yZUNTU0tFWSA9IHtcbiAgJ2JyZWFrLWFmdGVyJzogJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZSc6ICdicmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1hZnRlcic6ICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJzogJ3BhZ2UtYnJlYWstYmVmb3JlJ1xufTtcblxuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7XG4gIHJ0bDoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9LFxuICBsdHI6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfVxufTtcblxuY29uc3QgQk9UVE9NID0gJ2JvdHRvbSc7XG5jb25zdCBUT1AgPSAndG9wJztcblxuZnVuY3Rpb24gZGlyQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UoZGlyQWxpYXMsIHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihkaXJBbGlhcykpO1xufVxuXG5mdW5jdGlvbiBZUG9zaXRpb25DYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgcG9zOiBZUG9zaXRpb24sIHRvOiAndG9wJyB8ICdib3R0b20nKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShwb3MsIHRvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4gYGkkeyhuZXh0Q2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5leHRLZXlmcmFtZUlkKCkge1xuICByZXR1cm4gYGskeyhuZXh0S2V5RnJhbWVJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBPbmx5Q2xhc3NlczxUPiA9IFJlY29yZDwoXG4gIEV4Y2x1ZGU8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksXG4gICckbmFtZScgfCAnJHNoZWV0JyB8ICcka2V5ZnJhbWVzJz5cbiksIHN0cmluZz47XG5cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIE5nTW9kdWxlLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleUF0dHJpYnV0ZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ1RyYW5zY2x1ZGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xuICAgICAgdGhpcy5fdmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSBudWxsO1xuICAgICAgdGhpcy5fdmlld1JlZi5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xuICB9XG59XG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xuXG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgQ2FuQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcbmltcG9ydCB7IENhbkJnIH0gZnJvbSAnLi9iZyc7XG5pbXBvcnQgeyBDYW5EaXNhYmxlIH0gZnJvbSAnLi9kaXNhYmxlZCc7XG5pbXBvcnQgeyBDYW5SYWlzZWQgfSBmcm9tICcuL3JhaXNlZCc7XG5pbXBvcnQgeyBDYW5FbGV2YXRpb24gfSBmcm9tICcuL2VsZXZhdGlvbic7XG5pbXBvcnQgeyBDYW5PdXRsaW5lZCB9IGZyb20gJy4vb3V0bGluZWQnO1xuaW1wb3J0IHsgQ2FuU2hhZG93Q29sb3IgfSBmcm9tICcuL3NoYWRvdy1jb2xvcic7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZVBhcmFtc1N0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuU3R5bGVVcGRhdGVyIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbiAgdXBkYXRlU3R5bGU6IChlbGVtZW50OiBFbGVtZW50UmVmIHwgRWxlbWVudCkgPT4gdm9pZDtcbiAgc2V0QXV0b0NvbnRyYXN0OiAoKSA9PiB2b2lkO1xufVxuZXhwb3J0IHR5cGUgQ2FuU3R5bGVVcGRhdGVyQ3RvciA9IENvbnN0cnVjdG9yPFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIgJiBQYXJ0aWFsPENhbkNvbG9yICYgQ2FuQmcgJiBDYW5EaXNhYmxlICYgQ2FuUmFpc2VkICYgQ2FuRWxldmF0aW9uICYgQ2FuT3V0bGluZWQgJiBDYW5TaGFkb3dDb2xvcj4+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5TdHlsZVVwZGF0ZXI8VCBleHRlbmRzIENhblN0eWxlVXBkYXRlckN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5TdHlsZVVwZGF0ZXI+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9jbGFzc05hbWVBbm9ueW1vdXM6IHN0cmluZztcbiAgICBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICAgIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZVN0eWxlKGVsZW1lbnQ6IEVsZW1lbnRSZWY8YW55PiB8IEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBfX2JnID0gdGhpcy5iZztcbiAgICAgIGNvbnN0IF9fY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgY29uc3QgX19yYWlzZWQgPSB0aGlzLnJhaXNlZDtcbiAgICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XG4gICAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIGNvbnN0IF9fb3V0bGluZWQgPSB0aGlzLm91dGxpbmVkO1xuICAgICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9hdXRvQ29udHJhc3QgJiYgIV9fY29sb3IgfHwgX19jb2xvciA9PT0gJ2F1dG8nO1xuICAgICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIF9fY29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgX19kaXNhYmxlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgICAgX19pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZUFub255bW91cyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleSwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZToge1xuICAgICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICAgIGNvbG9yPzogc3RyaW5nLFxuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAgICcmOmhvdmVyJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YWN0aXZlJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUudGV4dC5kaXNhYmxlZDtcbiAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuZGlzYWJsZWQuZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvck9mKF9fYmcpO1xuICAgICAgICAgICAgaWYgKF9faXNDb250cmFzdCkge1xuICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoX19jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgaWYgKCFfX2JnKSB7XG4gICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckNzcyA9IHN0eWxlLmJhY2tncm91bmQgIT09IF9fYmcgJiYgdGhlbWUuY29sb3JPZihfX2JnIHx8ICdiYWNrZ3JvdW5kOnByaW1hcnknLCAnc2hhZG93Jyk7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IChfX3NoYWRvd0NvbG9yICYmIHRoZW1lLmNvbG9yT2YoX19zaGFkb3dDb2xvcikpIHx8IGJhY2tncm91bmRDb2xvckNzcyB8fCBzdHlsZS5iYWNrZ3JvdW5kIHx8IHN0eWxlLmNvbG9yIHx8IHRoZW1lLnNoYWRvdztcbiAgICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgICAgaWYgKCFfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgICBzdHlsZVsnJjphY3RpdmUnXSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZSBhcyBhbnk7XG4gICAgICB9LCBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpLCB0aGlzLl9jbGFzc05hbWVBbm9ueW1vdXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4iLCJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJpcHBsZUNvbmZpZyB7XG4gIGNlbnRlcmVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzZW5zaXRpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIHBlcmNlbnRhZ2VUb0luY3JlYXNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlUmVmIHtcbiAgc3RhdGUgPSB0cnVlO1xuICB0aW1lc3RhbXAgPSAtRGF0ZS5ub3coKTtcbiAgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZW5kKCkge1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVzdGFtcCArPSBEYXRlLm5vdygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGUge1xuICBwcml2YXRlIF9yaXBwbGVSZWY6IFJpcHBsZVJlZjtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPiA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIGNvbmZpZzogUmlwcGxlQ29uZmlnID0ge307XG4gIHByaXZhdGUgX3RyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuX3RoZW1lVmFyaWFibGVzLnJpcHBsZS5kdXJhdGlvbjtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2xhc3NlczogYW55LFxuICAgIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX3RyaWdnZXJFbGVtZW50PzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFRvdWNoRXZlbnQgID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hlbmQnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZXVwJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWxlYXZlJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIGlmICghX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICAgIF90cmlnZ2VyRWxlbWVudCA9IF9jb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChfdHJpZ2dlckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3JlY3RDb250YWluZXIoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSaXBwbGUoc3R5bGVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nfSkge1xuICAgIHRoaXMuX3JpcHBsZVJlZiA9IG5ldyBSaXBwbGVSZWYoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaXBwbGVSZWYuY29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSB0aGlzLmNsYXNzZXMucmlwcGxlQ29udGFpbmVyO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gYCR7ZWxlbWVudH1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ29wYWNpdHknKTtcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIC8qKkRlc3Ryb3kgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0ICovXG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgICAgdGhpcy5zdGFydFJpcHBsZShldmVudCwgdGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uUG9pbnRlckxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFJpcHBsZShldmVudDogTW91c2VFdmVudCB8IFBvaW50ZXJFdmVudCwgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fcmVjdENvbnRhaW5lcjtcbiAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXG4gICAgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgeCA9IGNvbnRhaW5lclJlY3QubGVmdCArIGNvbnRhaW5lclJlY3Qud2lkdGggLyAyO1xuICAgICAgeSA9IGNvbnRhaW5lclJlY3QudG9wICsgY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0geCAtIGNvbnRhaW5lclJlY3QubGVmdDtcbiAgICBjb25zdCB0b3AgPSB5IC0gY29udGFpbmVyUmVjdC50b3A7XG4gICAgbGV0IHJhZGl1cyA9IHJpcHBsZUNvbmZpZy5yYWRpdXMgPT09ICdjb250YWluZXJTaXplJyA/IG1heFNpemUoY29udGFpbmVyUmVjdCkgLyAyIDogcmlwcGxlQ29uZmlnLnJhZGl1cyB8fCByaXBwbGVSYWRpdXMoeCwgeSwgY29udGFpbmVyUmVjdCk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSkge1xuICAgICAgcmFkaXVzICs9IHJhZGl1cyAqIHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSAvIDEwMDtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVSaXBwbGUoe1xuICAgICAgbGVmdDogbGVmdCAtIHJhZGl1cyxcbiAgICAgIHRvcDogdG9wIC0gcmFkaXVzLFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbn1tc2BcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiBGdW5jdGlvbiwgZGVsYXkgPSAwKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XG4gIH1cblxuICBlbmRSaXBwbGUoKSB7XG4gICAgY29uc3QgcmlwcGxlUmVmOiBSaXBwbGVSZWYgPSB0aGlzLl9yaXBwbGVSZWYgfHwgbnVsbDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbjtcbiAgICBpZiAocmlwcGxlUmVmICYmIHJpcHBsZVJlZi5zdGF0ZSkge1xuICAgICAgcmlwcGxlUmVmLmVuZCgpO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uIC8gNX1tc2A7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiA6IDApO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgOiAwKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogLjE1IDogMCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyaXBwbGVSZWYuY29udGFpbmVyKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIHRoaXMuX3JpcHBsZVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJpcHBsZVJhZGl1cyh4OiBudW1iZXIsIHk6IG51bWJlciwgcmVjdDogQ2xpZW50UmVjdCkge1xuICBjb25zdCBkaXN0WCA9IE1hdGgubWF4KE1hdGguYWJzKHggLSByZWN0LmxlZnQpLCBNYXRoLmFicyh4IC0gcmVjdC5yaWdodCkpO1xuICBjb25zdCBkaXN0WSA9IE1hdGgubWF4KE1hdGguYWJzKHkgLSByZWN0LnRvcCksIE1hdGguYWJzKHkgLSByZWN0LmJvdHRvbSkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcbn1cblxuZnVuY3Rpb24gbWF4U2l6ZShyZWN0OiBDbGllbnRSZWN0KSB7XG4gIHJldHVybiBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IExZX0NPTU1PTl9TVFlMRVMgPSB7XG4gIGZpbGw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHZpc3VhbGx5SGlkZGVuOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJ1xuICB9LFxuICBidXR0b246IHtcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGB0cmFuc3BhcmVudGAsXG4gICAgYm9yZGVyOiAwLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICBtYXJnaW46IDAsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lJzogJ25vbmUnLFxuICAgICcmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgYm9yZGVyOiAwXG4gICAgfVxuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoTFlfQ09NTU9OX1NUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByaXBwbGVDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzJweCcsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICBvcGFjaXR5OiAnLjInLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUucmlwcGxlLnRyYW5zaXRpb24ub3BhY2l0eX0sdHJhbnNmb3JtICR7dGhlbWUucmlwcGxlLnRyYW5zaXRpb24udHJhbnNmb3JtXG4gICAgfWAsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZVNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmlwcGxlLCBSaXBwbGVDb25maWcgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3JpcHBsZS9yaXBwbGUuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZVBhcmFtcyB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG4gIF9uZ1pvbmU6IE5nWm9uZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5EaXNhYmxlUmlwcGxlIHtcbiAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuICBfcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWc7XG4gIF9yZW1vdmVSaXBwbGVFdmVudHM6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVSaXBwbGU8VCBleHRlbmRzIENvbnN0cnVjdG9yPFJlcXVpcmVQYXJhbXM+PihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRGlzYWJsZVJpcHBsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBfdHJpZ2dlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnID0ge307XG4gICAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZVJpcHBsZTtcblxuICAgIGdldCBkaXNhYmxlUmlwcGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTsgfVxuICAgIHNldCBkaXNhYmxlUmlwcGxlKHZhbDogYm9vbGVhbikge1xuICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB2YWwgIT09IHRoaXMuX2Rpc2FibGVSaXBwbGUpIHtcbiAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVJpcHBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgICAvLyByZW1vdmUgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0XG4gICAgICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICAgICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgIC8vIGFkZCByaXBwbGVcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX3RyaWdnZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSAodGhpcy5fcmlwcGxlQ29udGFpbmVyICYmIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB8fCB0cmlnZ2VyRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKSwgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9yaXBwbGUuc2V0Q29uZmlnKHRoaXMuX3JpcHBsZUNvbmZpZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgX3JlbW92ZVJpcHBsZUV2ZW50cygpIHtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JpcHBsZSkge1xuICAgICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZSB7XG4gIGRpc2FibGVkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAncHJpbWFyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQ29sb3Ige1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5Db2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcblxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbCB8fCBERUZBVUxUX0NPTE9SO1xuICAgICAgaWYgKGRlZmF1bHRDb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICB0aGlzLl9jb2xvciA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5CZyB7XG4gIGJnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkJnPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkJnPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9iZzogc3RyaW5nO1xuXG4gICAgZ2V0IGJnKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9iZzsgfVxuICAgIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQkc7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmJnKSB7XG4gICAgICAgIHRoaXMuX2JnID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5SYWlzZWQge1xuICByYWlzZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblJhaXNlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5SYWlzZWQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcblxuICAgIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWQ7IH1cbiAgICBzZXQgcmFpc2VkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbk91dGxpbmVkIHtcbiAgb3V0bGluZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbk91dGxpbmVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbk91dGxpbmVkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9vdXRsaW5lZDogYm9vbGVhbjtcblxuICAgIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG4gICAgc2V0IG91dGxpbmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5FbGV2YXRpb24ge1xuICBlbGV2YXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRWxldmF0aW9uPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkVsZXZhdGlvbj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZWxldmF0aW9uOiBudW1iZXI7XG5cbiAgICBnZXQgZWxldmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fZWxldmF0aW9uOyB9XG4gICAgc2V0IGVsZXZhdGlvbih2YWx1ZTogYW55KSB7IHRoaXMuX2VsZXZhdGlvbiA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5TaGFkb3dDb2xvciB7XG4gIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblNoYWRvd0NvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblNoYWRvd0NvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9zaGFkb3dDb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IHNoYWRvd0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zaGFkb3dDb2xvcjsgfVxuICAgIHNldCBzaGFkb3dDb2xvcih2YWx1ZTogc3RyaW5nKSB7IHRoaXMuX3NoYWRvd0NvbG9yID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IsIG1peGluRGlzYWJsZVJpcHBsZSwgbWl4aW5Db2xvciB9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3BhcGVyJztcblxuZXhwb3J0IGNsYXNzIEx5UGFwZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlQYXBlck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlQYXBlckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbHktcGFwZXIsIFtseS1wYXBlcl0sIFtseS10ZXh0XWAsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlQYXBlciBleHRlbmRzIEx5UGFwZXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgX2hhc1RleHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCdseS10ZXh0JylcbiAgc2V0IGhhc1RleHQodmFsOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNUZXh0ID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RleHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fZWw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZyAmJiAhdGhpcy5oYXNUZXh0KSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseVBhcGVyJyxcbiAgICAgICAgKHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3aXRoQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVdpdGhDbGFzcyB7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCB2YWxpZCBjbGFzc05hbWVgKTtcbiAgICB9XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVBhcGVyIH0gZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl0sXG4gIGV4cG9ydHM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0Vmlldztcbn1cbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiLy8gRWxlbWVudCB0byBtb3ZlLCB0aW1lIGluIG1zIHRvIGFuaW1hdGVcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZHVyYXRpb246IG51bWJlcikge1xuICBsZXQgZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaWYgKGUuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgY29uc3QgdCA9IGUuc2Nyb2xsVG9wO1xuICAgICsrZS5zY3JvbGxUb3A7XG4gICAgZSA9IHQgKyAxID09PSBlLnNjcm9sbFRvcC0tID8gZSA6IGRvY3VtZW50LmJvZHk7XG4gIH1cbiAgc2Nyb2xsVG9DKGUsIGUuc2Nyb2xsVG9wLCBlbGVtZW50LCBkdXJhdGlvbik7XG59XG5cbi8vIEVsZW1lbnQgdG8gbW92ZSwgZWxlbWVudCBvciBweCBmcm9tLCBlbGVtZW50IG9yIHB4IHRvLCB0aW1lIGluIG1zIHRvIGFuaW1hdGVcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUb0MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGZyb206IGFueSwgdG86IG51bWJlciB8IEhUTUxFbGVtZW50LCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gIGlmIChkdXJhdGlvbiA8PSAwKSB7IHJldHVybjsgfVxuICBpZiAodHlwZW9mIGZyb20gPT09ICdvYmplY3QnKSB7ZnJvbSA9IGZyb20ub2Zmc2V0VG9wOyB9XG4gIGlmICh0eXBlb2YgdG8gPT09ICdvYmplY3QnKSB7dG8gPSB0by5vZmZzZXRUb3A7IH1cblxuICBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKGVsZW1lbnQsIGZyb20sIHRvLCAwLCAxIC8gZHVyYXRpb24sIDIwLCBlYXNlT3V0Q3VhaWMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsV2l0aEFuaW1hdGlvbihcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHRvOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHA/OiAneCcgfCAneScsXG4gIG1vdGlvbj86ICh0OiBudW1iZXIpID0+IG51bWJlclxuKSB7XG4gIGNvbnN0IF9tb3Rpb24gPSBtb3Rpb24gfHwgZWFzZU91dEN1YWljO1xuICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IGVsZW1lbnQ7XG4gIHJldHVybiBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKGVsZW1lbnQsIHNjcm9sbExlZnQsIHRvLCAwLCAxIC8gZHVyYXRpb24sIDIwLCBfbW90aW9uLCBwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2Nyb2xsV2l0aEFuaW1hdGlvbihcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHhGcm9tOiBudW1iZXIsXG4gIHhUbzogbnVtYmVyLFxuICB0MDE6IG51bWJlcixcbiAgc3BlZWQ6IG51bWJlcixcbiAgc3RlcDogbnVtYmVyLFxuICBtb3Rpb246ICh0OiBudW1iZXIpID0+IG51bWJlcixcbiAgcD86ICd4JyB8ICd5J1xuKSB7XG4gIGNvbnN0IHNjcm9sbFQgPSBwID09PSAneScgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgaWYgKHQwMSA8IDAgfHwgdDAxID4gMSB8fCBzcGVlZCA8PSAwKSB7XG4gICAgZWxlbWVudFtzY3JvbGxUXSA9IHhUbztcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudFtzY3JvbGxUXSA9IHhGcm9tIC0gKHhGcm9tIC0geFRvKSAqIG1vdGlvbih0MDEpO1xuICB0MDEgKz0gc3BlZWQgKiBzdGVwO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oZWxlbWVudCwgeEZyb20sIHhUbywgdDAxLCBzcGVlZCwgc3RlcCwgbW90aW9uLCBwKTtcbiAgfSwgc3RlcCk7XG59XG5cblxuLy8gZnVuY3Rpb24gbGluZWFyVHdlZW4odDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5RdWFkKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLXQgKiAodCAtIDIpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0IC8gMjsgfVxuLy8gICB0LS07XG4vLyAgIHJldHVybiAodCAqICh0IC0gMikgLSAxKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbkN1YWljKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQgKiB0O1xuLy8gfVxuXG5mdW5jdGlvbiBlYXNlT3V0Q3VhaWModDogbnVtYmVyKSB7XG4gIHQtLTtcbiAgcmV0dXJuIHQgKiB0ICogdCArIDE7XG59XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dEN1YWljKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0ICogdCAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKHQgKiB0ICogdCArIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0UXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIC0odCAqIHQgKiB0ICogdCAtIDEpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0OyB9XG4vLyAgIHQgLT0gMjtcbi8vICAgcmV0dXJuIC0odCAqIHQgKiB0ICogdCAtIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVpbnQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFF1aW50KHQ6IG51bWJlcikge1xuLy8gICB0LS07XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdCArIDE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0IC8gMjsgfVxuLy8gICB0IC09IDI7XG4vLyAgIHJldHVybiAodCAqIHQgKiB0ICogdCAqIHQgKyAyKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJblNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtTWF0aC5jb3ModCAvIChNYXRoLlBJIC8gMikpICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiBNYXRoLnNpbih0IC8gKE1hdGguUEkgLyAyKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluRXhwbyh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRFeHBvKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpIC8gMjsgfVxuLy8gICB0LS07XG4vLyAgIHJldHVybiAoLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMikgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5DaXJjKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGguc3FydCgxIC0gdCAqIHQpIC0gMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dENpcmModDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgxIC0gdCAqIHQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKE1hdGguc3FydCgxIC0gdCAqIHQpICsgMSkgLyAyO1xuLy8gfVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGVJbmZvIHtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG4gIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZSB7XG4gIGV2ZW50OiBGb2N1c0V2ZW50O1xuICBieTogJ2tleWJvYXJkJyB8ICdtb3VzZSc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2VsZW1lbnRNYXAgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBGb2N1c1N0YXRlSW5mbz4oKTtcbiAgcHJpdmF0ZSBfY3VycmVudEV2ZW50OiAnbW91c2UnIHwgJ2tleWJvYXJkJztcbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBsaXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwga2V5RWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBPYnNlcnZhYmxlPEZvY3VzU3RhdGU+IHwgbnVsbCB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGl0IGlzIG5vdCBicm93c2VyIHBsYXRmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBrZXkgPSBrZXlFbGVtZW50ICYmIGdldE5hdGl2ZUVsZW1lbnQoa2V5RWxlbWVudCkgfHwgbmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudE1hcC5nZXQoa2V5KS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGU6IEZvY3VzU3RhdGVJbmZvID0ge1xuICAgICAgdW5saXN0ZW46IG51bGwsXG4gICAgICBzdWJqZWN0OiBuZXcgU3ViamVjdDxGb2N1c1N0YXRlPigpXG4gICAgfTtcbiAgICB0aGlzLl9pbmNyZW1lbnRDb3VudCgpO1xuICAgIGNvbnN0IGZvY3VzTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuICAgIGNvbnN0IGJsdXJMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG5cbiAgICBmb2N1c1N0YXRlLnVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudE1hcC5zZXQoa2V5LCBmb2N1c1N0YXRlKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c1N0YXRlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB1bmxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNvbnN0IGZvY3VzU3RhdGVJbmZvID0gdGhpcy5fZWxlbWVudE1hcC5nZXQoZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlSW5mbykge1xuICAgICAgZm9jdXNTdGF0ZUluZm8udW5saXN0ZW4oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnRNYXAuZGVsZXRlKGVsKTtcbiAgICAgIHRoaXMuX2RlY3JlbWVudENvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb24oZXZlbnQ6IEZvY3VzRXZlbnQsIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT4pIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHN1YmplY3QubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGJ5OiB0aGlzLl9jdXJyZW50RXZlbnQgfHwgJ2tleWJvYXJkJ1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEdsb2JhbExpc3RlbmVycygpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJPcHRpb25zID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnNcbiAgICA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSA6IGZhbHNlO1xuXG4gICAgY29uc3QgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ2tleWJvYXJkJyk7XG4gICAgY29uc3QgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAnbW91c2UnKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICB9KTtcbiAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5jcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCsrdGhpcy5fY291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuX2FkZEdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlY3JlbWVudENvdW50KCkge1xuICAgIGlmICghLS10aGlzLl9jb3VudCkge1xuICAgICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZWxlbWVudE1hcC5mb3JFYWNoKChfLCBlbGVtZW50KSA9PiB0aGlzLnVubGlzdGVuKGVsZW1lbnQpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEFVSV9WRVJTSU9OID0gJzEuOS4xMCc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTItMjJUMDQ6NDA6MzUuMDI3Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0JyxcbiAgJ3NsaWRlY2FuY2VsJ1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwge30pO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IGhhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyBoYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5leHBvcnQgY29uc3QgVW5kZWZpbmVkVmFsdWUgPSBuZXcgVW5kZWZpbmVkKCk7XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5QmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgU2V0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNBY3RpdmVPdmVybGF5Q29udGFpbmVyOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfYWRkKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5hZGQoaXRlbSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9yZW1vdmUoaXRlbSkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0eWxlcyBmb3Igb3ZlcmxheSBjb250YWluZXJcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEJBQ0tEUk9QX1NUWUxFUyA9ICh7XG4gIGJhY2tkcm9wOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vdmVybGF5LWJhY2tkcm9wJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUJhY2tkcm9wIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoQkFDS0RST1BfU1RZTEVTKTtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuX292ZXJsYXlDb25maWcuZm5EZXN0cm95KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoJ292ZXJsYXlDb25maWcnKSBwcml2YXRlIF9vdmVybGF5Q29uZmlnOiBhbnksXG4gICAgY29tbW9uU3R5bGVzOiBMeUNvcmVTdHlsZXNcbiAgKSB7XG4gICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbW1vblN0eWxlcy5jbGFzc2VzLmZpbGwpO1xuICAgIGlmIChfb3ZlcmxheUNvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5iYWNrZHJvcCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUsIGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpblJlc2l6ZSB7XG5cbiAgcmVzaXplJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNpemUkID0gZW1wdHkoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBlbXB0eSwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL3BsYXRmb3JtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2luU2Nyb2xsIHtcblxuICBzY3JvbGwkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGwkID0gZW1wdHkoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFRlbXBsYXRlUmVmLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBDb21wb25lbnRSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciwgTHlPdmVybGF5QmFja2Ryb3AgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdpblJlc2l6ZSB9IGZyb20gJy4vcmVzaXplJztcbmltcG9ydCB7IFdpblNjcm9sbCB9IGZyb20gJy4vc2Nyb2xsJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG5cbiAgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBfY29tcFJlZk92ZXJsYXlCYWNrZHJvcDogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpbmRvd1NSU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcmVzaXplU2VydmljZTogV2luUmVzaXplLFxuICAgIGNvbmZpZz86IE92ZXJsYXlDb25maWdcbiAgKSB7XG4gICAgLy8gdGhpcy5fdmlld1JlZiA9IF90ZW1wbGF0ZVJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoX2NvbnRleHQpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdE5vZGUpKTtcbiAgICBjb25zdCBfX3N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXNcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ292ZXJsYXlDb25maWcnLFxuICAgICAgICB1c2VWYWx1ZTogPE92ZXJsYXlDb25maWc+e1xuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZy5ob3N0KSB7XG4gICAgICB0aGlzLndpbmRvd1NSU3ViID0gbWVyZ2Uod2luZG93U2Nyb2xsLnNjcm9sbCQsIHJlc2l6ZVNlcnZpY2UucmVzaXplJCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNvbmZpZy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiByZWN0LmxlZnRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICBpZiAoY2xhc3NlcyAmJiBjbGFzc2VzLmxlbmd0aCkge1xuICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+ICh0aGlzLl9lbCBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudChMeU92ZXJsYXlCYWNrZHJvcCwgbmV3SW5qZWN0b3IpO1xuICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKGJhY2tkcm9wRWwpO1xuICAgIHRoaXMuX2FwcGVuZENvbXBvbmVudFRvQm9keShfdGVtcGxhdGVSZWYsIF9jb250ZXh0LCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgfVxuXG4gIHVwZGF0ZVN0eWxlcyhfX3N0eWxlcykge1xuICAgIC8qKiBBcHBseSBzdHlsZXMgKi9cbiAgICAvKiogc2V0IHN0eWxlcyAqL1xuICAgIGZvciAoY29uc3Qga2V5IGluIF9fc3R5bGVzKSB7XG4gICAgICBpZiAoX19zdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZVZhbCA9IF9fc3R5bGVzW2tleV07XG4gICAgICAgIGlmIChzdHlsZVZhbCkge1xuICAgICAgICAgIHRoaXMuX2VsLnN0eWxlW2tleV0gPSB0eXBlb2YgX19zdHlsZXNba2V5XSA9PT0gJ251bWJlcicgPyBgJHtzdHlsZVZhbH1weGAgOiBzdHlsZVZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENvbXBvbmVudFRvQm9keSh0eXBlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxhbnk+IHwgc3RyaW5nLCBjb250ZXh0LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxuICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMuX3ZpZXdSZWYgPSB0eXBlLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0IHx8IHt9KTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuXG4gICAgICAvLyBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2goXyA9PiB0aGlzLl9lbC5hcHBlbmRDaGlsZChfKSk7XG5cbiAgICAgIC8vIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWwuaW5uZXJUZXh0ID0gdHlwZTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KHR5cGUgYXMgVHlwZTxhbnk+LCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBpZiBjb250ZW50IGlzIHN0cmluZ1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKGJhY2tkcm9wRWwpO1xuICAgIH1cbiAgICB0aGlzLndpbmRvd1NSU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpblNjcm9sbCxcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7IH1cblxuICBjcmVhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcsIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZUZyb21UZW1wbGF0ZVJlZihcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0ZW1wbGF0ZSwgdGhpcy5fb3ZlcmxheUNvbnRhaW5lciwgY29udGV4dCwgdGhpcy5faW5qZWN0b3IsIHRoaXMuX3dpbmRvd1Njcm9sbCwgdGhpcy5fcmVzaXplU2VydmljZSwgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5T3ZlcmxheUJhY2tkcm9wXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTHlPdmVybGF5QmFja2Ryb3BdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBNVVRBVElPTl9PQlNFUlZFUl9JTklUID0ge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICBjaGlsZExpc3Q6IHRydWUsXG4gIHN1YnRyZWU6IHRydWVcbn07XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgY3JlYXRlKGNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrKTogTXV0YXRpb25PYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX29ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5OiBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeVxuICApIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5kZXN0cm95KGVsZW1lbnQpKTtcbiAgfVxuXG4gIG9ic2VydmUoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50PiwgZm46IE11dGF0aW9uQ2FsbGJhY2ssIG9wdGlvbnM/OiBNdXRhdGlvbk9ic2VydmVySW5pdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLl9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeS5jcmVhdGUoZm4pO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb3B0aW9ucyB8fCBNVVRBVElPTl9PQlNFUlZFUl9JTklUKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgT2JzZXJ2ZXJcbiAgICovXG4gIGRlc3Ryb3koZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KS5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduQWxpYXMge1xuICByb3dSZXZlcnNlID0gJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZSA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlID0gJ3dyYXAtcmV2ZXJzZScsXG4gIHN0YXJ0ID0gJ2ZsZXgtc3RhcnQnLFxuICBlbmQgPSAnZmxleC1lbmQnLFxuICBiZXR3ZWVuID0gJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQgPSAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5ID0gJ3NwYWNlLWV2ZW5seSdcbn1cbiJdLCJuYW1lcyI6WyJtYXAiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRFRkFVTFRfQkciLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixjQUFjLENBQUMsUUFBUTs7UUFDL0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1FBQ3ZDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztRQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7UUFDdkMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSTtJQUN0RCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3pDOzs7Ozs7Ozs7OztBQ05EO0lBQ00sTUFBTSxHQUFHLE9BQU87O0lBRWhCLHFCQUFxQixHQUFHLEdBQUc7O0lBQzNCLHdCQUF3QixHQUFHLElBQUk7O0lBQy9CLDBCQUEwQixHQUFHLElBQUk7O0FBQ3ZDLElBQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxD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