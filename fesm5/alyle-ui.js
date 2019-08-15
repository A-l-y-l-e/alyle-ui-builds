import * as _chroma from 'chroma-js';
import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, RendererFactory2, Injectable, Optional, Inject, ViewEncapsulation, isDevMode, NgZone, Input, TemplateRef, Directive, ViewContainerRef, NgModule, ElementRef, Renderer2, HostListener, Component, Injector, ComponentFactoryResolver, ApplicationRef, INJECTOR, ChangeDetectionStrategy } from '@angular/core';
import { __spread, __decorate, __param, __metadata, __assign, __extends } from 'tslib';
import { DOCUMENT } from '@angular/common';
import { Subject, ReplaySubject, fromEvent, empty, Subscription, merge } from 'rxjs';
import { takeUntil, auditTime, map, share } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

var chroma = _chroma;
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
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
function shadowBuilderDeprecated(elevation, color) {
    if (elevation === void 0) { elevation = 2; }
    if (color === void 0) { color = '#000'; }
    var Color = chroma(color);
    var colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    var e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return "box-shadow:" + e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
}
function shadowBuilder(elevation, color) {
    var Color = chroma(color || '#000');
    var rgb = Color.get('rgb');
    if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
        // Darken and saturate if the color is not in the grayscale
        Color = Color.darken().saturate(2);
    }
    var colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    var e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
}

var THEME_VARIABLES = new InjectionToken('ly.theme.variables');
var IS_CORE_THEME = new InjectionToken('ly.is.root');

// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && Intl.v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.isBrowser = typeof document === 'object' && !!document;
    /** Layout Engines */
    Platform.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
    Platform.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    Platform.BLINK = Platform.isBrowser &&
        (!!(window.chrome || hasV8BreakIterator) && !!CSS && !Platform.EDGE && !Platform.TRIDENT);
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    Platform.WEBKIT = Platform.isBrowser &&
        /AppleWebKit/i.test(navigator.userAgent) && !Platform.BLINK && !Platform.EDGE && !Platform.TRIDENT;
    /** Browsers and Platform Types */
    Platform.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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

var supportsPassive;
function supportsPassiveEventListeners() {
    if (supportsPassive === void 0) {
        try {
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

var LY_THEME_GLOBAL_VARIABLES = new InjectionToken('ly.theme.global.variables');
var LY_THEME = new InjectionToken('ly_theme_config');
var LY_THEME_NAME = new InjectionToken('ly.theme.name');

/** Only for internal use */
var _STYLE_MAP = new Map();
var TypeStyle;
(function (TypeStyle) {
    TypeStyle[TypeStyle["Multiple"] = 0] = "Multiple";
    TypeStyle[TypeStyle["OnlyOne"] = 1] = "OnlyOne";
})(TypeStyle || (TypeStyle = {}));

var LyStyleUtils = /** @class */ (function () {
    function LyStyleUtils() {
    }
    LyStyleUtils.prototype.pxToRem = function (value) {
        var size = this.typography.fontSize / 14;
        return value / this.typography.htmlFontSize * size + "rem";
    };
    LyStyleUtils.prototype.colorOf = function (value, optional) {
        return get(this, value, optional);
    };
    LyStyleUtils.prototype.getBreakpoint = function (key) {
        return "@media " + (this.breakpoints[key] || key);
    };
    LyStyleUtils.prototype.getClasses = function (styles) {
        var styleMap = _STYLE_MAP.get(styles);
        if (styleMap) {
            return styleMap.classes || styleMap[this.name];
        }
        else {
            throw Error('Classes not found');
        }
    };
    LyStyleUtils.prototype.getDirection = function (val) {
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
var Dir;
(function (Dir) {
    Dir["rtl"] = "rtl";
    Dir["ltr"] = "ltr";
})(Dir || (Dir = {}));
var DirAlias;
(function (DirAlias) {
    DirAlias["before"] = "before";
    DirAlias["after"] = "after";
})(DirAlias || (DirAlias = {}));
var DirPosition;
(function (DirPosition) {
    DirPosition["left"] = "left";
    DirPosition["right"] = "right";
})(DirPosition || (DirPosition = {}));
/**
 * get color of object
 * @param obj object
 * @param path path
 * @param optional get optional value, if not exist return default if not is string
 */
function get(obj, path, optional) {
    var _path = path instanceof Array ? path : path.split(':');
    for (var i = 0; i < _path.length; i++) {
        var posibleOb = obj[_path[i]];
        if (posibleOb) {
            obj = posibleOb;
        }
        else {
            /** if not exist */
            return path;
        }
    }
    if (typeof obj === 'string') {
        return obj;
    }
    else if (optional) {
        return obj[optional] || obj['default'];
    }
    else {
        return obj['default'];
    }
    // return typeof obj === 'string' ? obj as string : obj['default'] as string;
}
function eachMedia(str, fn) {
    if (typeof str === 'string') {
        var values = str.split(/\s/g);
        for (var index = 0; index < values.length; index++) {
            var valItem = values[index].split(/\@/g);
            var value = valItem.shift();
            var len = valItem.length;
            if (len) {
                for (var j = 0; j < len; j++) {
                    fn.call(undefined, value, valItem[j], index);
                }
            }
            else {
                fn.call(undefined, value, null, index);
            }
        }
    }
    else {
        fn.call(undefined, str, null, 0);
    }
}
/**
 * Simple object check.
 * @param item
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length) {
        return target;
    }
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

var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, globalVariables, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        if (!themeConfig) {
            throw new Error("LY_THEME undefined: no theme has been added, please add at least one theme\n\n" +
                "Follow the steps of the documentation https://goo.gl/8V486A");
        }
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            var nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (var index = 0; index < nodes.length; index++) {
                    var element = nodes.item(index);
                    _document.body.removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        var themes = new Map();
        if (Array.isArray(themeConfig)) {
            themeConfig.forEach(function (item) {
                if (themes.has(item.name)) {
                    themes.get(item.name).push(item);
                }
                else {
                    themes.set(item.name, [item]);
                }
            });
            themes.forEach(function (items) {
                if (globalVariables) {
                    items.push(globalVariables);
                }
                if (items.length > 1) {
                    mergeDeep.apply(void 0, __spread([items[0]], items.slice(1)));
                }
                _this.add(items[0]);
                _this.themes.add(items[0].name);
            });
        }
        else {
            if (globalVariables) {
                mergeDeep(themeConfig, globalVariables);
            }
            this.add(themeConfig);
            this.themes.add(themeConfig.name);
        }
    }
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    CoreTheme.prototype.add = function (theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    };
    CoreTheme.prototype.hasTheme = function (theme) {
        var name = typeof theme === 'string' ? theme : theme.name;
        this._themeMap.has(name);
    };
    CoreTheme.prototype.get = function (name) {
        return this._themeMap.get(name);
    };
    CoreTheme.prototype.getStyleMap = function (name) {
        return this._styleMap.get(name);
    };
    CoreTheme.prototype.updateClassName = function (element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    };
    CoreTheme.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(ɵɵinject(LY_THEME, 8), ɵɵinject(LY_THEME_GLOBAL_VARIABLES, 8), ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    CoreTheme = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()), __param(0, Inject(LY_THEME)),
        __param(1, Optional()), __param(1, Inject(LY_THEME_GLOBAL_VARIABLES)),
        __param(3, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Object, RendererFactory2, Object])
    ], CoreTheme);
    return CoreTheme;
}());

var YPosition;
(function (YPosition) {
    YPosition["above"] = "above";
    YPosition["below"] = "below";
})(YPosition || (YPosition = {}));
var XPosition;
(function (XPosition) {
    XPosition["before"] = "before";
    XPosition["after"] = "after";
    XPosition["left"] = "left";
    XPosition["right"] = "right";
})(XPosition || (XPosition = {}));
var INITIAL_V = 'initial';
var Positioning = /** @class */ (function () {
    function Positioning(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, _offset, _flip) {
        if (_offset === void 0) { _offset = 0; }
        if (_flip === void 0) { _flip = true; }
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this._themeVariables = _themeVariables;
        this._offset = _offset;
        this._offsetCheck = 16;
        this._originRect = this.origin.getBoundingClientRect();
        this._overlayElementRect = this.overlayElement.getBoundingClientRect();
        this.width = INITIAL_V;
        this.height = INITIAL_V;
        var offsetCheckx2 = this._offsetCheck * 2;
        this.createPosition();
        if (_flip) {
            for (var index = 0; index < 2; index++) {
                if (this.checkAll(false, true)) {
                    this.createPosition();
                }
            }
        }
        // when there is not enough space
        if (this.checkAll(true, false)) {
            var _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
            var _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
            if (_max_height) {
                this.y = this._offsetCheck;
                this.height = window.innerHeight - offsetCheckx2 + "px";
            }
            else if (this.checkBottom(false, false)) {
                this.y += this.checkBottom(true, false);
            }
            else if (this.checkTop(false, false)) {
                this.y -= this.checkTop(true, false);
            }
            if (_max_width) {
                this.x = this._offsetCheck;
                this.width = window.innerWidth - offsetCheckx2 + "px";
            }
            else if (this.checkRight(false, false)) {
                this.x += this.checkRight(true, false);
            }
            else if (this.checkLeft(false, false)) {
                this.x -= this.checkLeft(true, false);
            }
            this.updateOrigin();
        }
        if (this._offset) {
            this.updateOrigin();
        }
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    Object.defineProperty(Positioning.prototype, "offsetX", {
        get: function () {
            return typeof this._offset === 'number'
                ? this._offset
                : this._offset.x || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Positioning.prototype, "offsetY", {
        get: function () {
            return typeof this._offset === 'number'
                ? this._offset
                : this._offset.y || 0;
        },
        enumerable: true,
        configurable: true
    });
    Positioning.prototype.createPosition = function () {
        if (this.xPosition && this.yPosition) {
            throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
            throw new Error("`placement` is required.");
        }
        var x = this._originRect.x, y = this._originRect.y, ox = 'center', oy = 'center';
        if (this.placement) {
            if (this.placement === YPosition.above) {
                x += (this._originRect.width - this._overlayElementRect.width) / 2;
                y += -this._overlayElementRect.height;
                oy = 'bottom';
                // set offset
                y -= this.offsetY;
            }
            else if (this.placement === YPosition.below) {
                x += (this._originRect.width - this._overlayElementRect.width) / 2;
                y += this._originRect.height;
                oy = 'top';
                // set offset
                y += this.offsetY;
            }
            else {
                var dir = this._themeVariables.getDirection(this.placement);
                if (dir === DirPosition.left) {
                    ox = '100%';
                    x += -this._overlayElementRect.width;
                    y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    // set offset
                    x -= this.offsetX;
                }
                else if (dir === DirPosition.right) {
                    ox = '0%';
                    x += this._originRect.width;
                    y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    // set offset
                    x += this.offsetX;
                }
            }
            if (this.xPosition) {
                var dir = this._themeVariables.getDirection(this.xPosition);
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = this._originRect.x;
                    // set offset
                    x += this.offsetX;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this._originRect.x + this._originRect.width - this._overlayElementRect.width;
                    // set offset
                    x -= this.offsetX;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = this._originRect.y;
                    oy = '0%';
                    // set offset
                    y -= this.offsetY;
                }
                else if (this.yPosition === YPosition.below) {
                    y = this._originRect.y + this._originRect.height - this._overlayElementRect.height;
                    oy = '100%';
                    // set offset
                    y += this.offsetY;
                }
            }
        }
        this.x = x;
        this.y = y;
        this.ax = x;
        this.ay = y;
        this.ox = ox;
        this.oy = oy;
        return {
            x: Math.round(x),
            y: Math.round(y),
            ox: ox,
            oy: oy
        };
    };
    Positioning.prototype.checkLeft = function (returnVal, invertIfNeed) {
        var rest = this.ax - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.xPosition) {
                    this.xPosition = invertPlacement(this.xPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkRight = function (returnVal, invertIfNeed) {
        var rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.xPosition) {
                    this.xPosition = invertPlacement(this.xPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkTop = function (returnVal, invertIfNeed) {
        var rest = this.ay - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement === YPosition.above || this.placement === YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.yPosition) {
                    this.yPosition = invertPlacement(this.yPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkBottom = function (returnVal, invertIfNeed) {
        var rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement === YPosition.above || this.placement === YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.yPosition) {
                    this.yPosition = invertPlacement(this.yPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkAll = function (returnVal, invertIfNeed) {
        return this.checkLeft(returnVal, invertIfNeed) ||
            this.checkRight(returnVal, invertIfNeed) ||
            this.checkTop(returnVal, invertIfNeed) ||
            this.checkBottom(returnVal, invertIfNeed);
    };
    Positioning.prototype.updateOrigin = function () {
        // do not update if it is defined
        if (this._origin) {
            return;
        }
        this._origin = true;
        var oax = this._originRect.x + this._originRect.width / 2;
        var oay = this._originRect.y + this._originRect.height / 2;
        var vax = this.x + this._overlayElementRect.width / 2;
        var vay = this.y + this._overlayElementRect.height / 2;
        this.ox = oax - vax + this._overlayElementRect.width / 2 + "px";
        this.oy = oay - vay + this._overlayElementRect.height / 2 + "px";
    };
    return Positioning;
}());
function invertPlacement(placement) {
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
    return placement;
}

var REF_REG_EXP = /\{([\w-]+)\}/g;
var nextClassId = 0;
var nextKeyFrameId = 0;
var StylesInDocument = /** @class */ (function () {
    function StylesInDocument() {
        this.styles = {};
        this.styleContainers = new Map();
        this.styleElementGlobalMap = new Map();
    }
    StylesInDocument.ngInjectableDef = ɵɵdefineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
    StylesInDocument = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], StylesInDocument);
    return StylesInDocument;
}());
var THEME_MAP = new Map();
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(stylesInDocument, core, themeName, _document, _ngZone) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementsMap = new Map();
        /** Event emitted when the direction has changed. */
        this._directionChanged = new Subject();
        this.themeMap = THEME_MAP;
        /** ssr or hmr */
        this.isDevOrServer = isDevMode() || !Platform.isBrowser;
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    Object.defineProperty(LyTheme2.prototype, "directionChanged", {
        get: function () {
            return this._directionChanged.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTheme2.prototype, "variables", {
        /** Get Theme Variables */
        get: function () {
            return this.config;
        },
        enumerable: true,
        configurable: true
    });
    LyTheme2.prototype.setUpTheme = function (themeName) {
        if (!this.config) {
            var theme = this.core.get(themeName);
            if (theme === undefined) {
                throw new Error("Theme " + themeName + " not found in CoreTheme");
            }
            this.config = theme;
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
    LyTheme2.prototype.addStyle = function (id, style, el, instance, priority, parentStyle) {
        var newClass = this._createStyleContent2(style, id, priority, TypeStyle.OnlyOne, false, parentStyle);
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
     * Create basic style
     * @param style Styles.
     * Note: Use only with inmutable variable.
     * @param priority Priority of style
     * @param parentStyle
     */
    LyTheme2.prototype.style = function (style, priority, parentStyle) {
        return this._createStyleContent2(style, null, priority, TypeStyle.OnlyOne, false, parentStyle);
    };
    LyTheme2.prototype.updateClassName = function (element, renderer, newClassname, oldClassname) {
        this.core.updateClassName(element, renderer, newClassname, oldClassname);
    };
    LyTheme2.prototype.updateClass = function (element, renderer, newClass, oldClass) {
        if (newClass === oldClass) {
            return newClass;
        }
        this.updateClassName(element, renderer, newClass, oldClass);
        return newClass;
    };
    LyTheme2.prototype.setTheme = function (nam) {
        if (!Platform.isBrowser) {
            throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
        }
        if (nam !== this.config.name) {
            var theme = this.themeMap.get(this.initialTheme);
            if (theme == null) {
                throw new Error("Theme " + nam + " not found in themeMap");
            }
            theme.change = nam;
            this.config = this.core.get(nam);
            this._updateAllStyles();
        }
    };
    /** Toggle right-to-left/left-to-right */
    LyTheme2.prototype.toggleDirection = function () {
        var current = this.config.direction;
        this.config.direction = current === Dir.ltr ? Dir.rtl : Dir.ltr;
        this._updateAllStyles();
        this._directionChanged.next();
    };
    LyTheme2.prototype._updateAllStyles = function () {
        var _this = this;
        this.elements.forEach(function (_, key) {
            var styleData = _STYLE_MAP.get(key);
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
     * @param priority style priority(default: 0)
     */
    LyTheme2.prototype.addSimpleStyle = function (id, css, priority, parentStyle) {
        return this._createStyleContent2(css, id, priority, TypeStyle.OnlyOne, false, parentStyle);
    };
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param priority priority for style
     */
    LyTheme2.prototype.addStyleSheet = function (styles, priority) {
        return this._createStyleContent2(styles, null, priority, TypeStyle.Multiple);
    };
    /**
     * Check if a style exist
     * @param stylesOrId Style or Id of a style
     */
    LyTheme2.prototype.existStyle = function (stylesOrId) {
        if (_STYLE_MAP.has(stylesOrId)) {
            var styleMap = _STYLE_MAP.get(stylesOrId);
            return !!(styleMap.classes || styleMap[this.initialTheme]);
        }
        return false;
    };
    LyTheme2.prototype._createStyleContent2 = function (styles, id, priority, type, forChangeTheme, parentStyle) {
        var newId = id || styles;
        var isNewStyle = null;
        if (!_STYLE_MAP.has(newId)) {
            isNewStyle = true;
            _STYLE_MAP.set(newId, {
                priority: priority,
                styles: styles,
                type: type,
                css: {},
                id: id,
                parentStyle: parentStyle
            });
        }
        var styleMap = _STYLE_MAP.get(newId);
        var themeName = this.initialTheme;
        var isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            /** create new style for new theme */
            var css = void 0;
            var themeMap = this.themeMap.get(this.initialTheme);
            var config = this.core.get(themeMap.change || themeName);
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(config, this), themeName, id, type, config);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, newId, type, config);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
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
                var _css = styleMap.css[themeName] || styleMap.css;
                var map = this.stylesInDocument.styleElementGlobalMap;
                if (styleMap.requireUpdate) {
                    this.elements.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
                }
                else if (!map.has(newId)) {
                    map.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), map.get(newId));
                }
            }
        }
        return styleMap.classes || styleMap[themeName];
    };
    LyTheme2.prototype._createStyleContainer = function (priority) {
        priority = priority || 0;
        var styleContainers = this.stylesInDocument.styleContainers;
        if (!styleContainers.has(priority)) {
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
        var refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    };
    LyTheme2.prototype.findNode = function (index) {
        var styleContainers = this.stylesInDocument.styleContainers;
        var keys = (Array.from(styleContainers.keys())).sort();
        var key = keys.find(function (_) { return index < _; });
        return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
    };
    LyTheme2.prototype._createElementStyle = function (css) {
        var styleElement = this.core.renderer.createElement('style');
        var styleText = this.core.renderer.createText(css);
        this.core.renderer.appendChild(styleElement, styleText);
        return styleElement;
    };
    LyTheme2.prototype.requestAnimationFrame = function (fn) {
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
    LyTheme2.prototype.toClassSelector = function (classes) {
        var newClasses = {};
        for (var key in classes) {
            if (classes.hasOwnProperty(key)) {
                newClasses[key] = "." + classes[key];
            }
        }
        return newClasses;
    };
    LyTheme2 = __decorate([
        Injectable(),
        __param(2, Inject(LY_THEME_NAME)),
        __param(3, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [StylesInDocument,
            CoreTheme, Object, Object, NgZone])
    ], LyTheme2);
    return LyTheme2;
}());
function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables) {
    // for styles type string
    if (typeStyle === TypeStyle.OnlyOne) {
        // use current class or set new
        var className = styleMap.requireUpdate
            ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
            : styleMap.classes
                ? styleMap.classes
                : styleMap.classes = createNextClassId();
        var rules = void 0;
        if (typeof styles === 'string') {
            rules = "." + className + "{" + styles + "}";
        }
        else {
            rules = styleToString(id, null, styles, themeVariables, className);
        }
        if (styleMap.parentStyle) {
            var styleMapOfParentStyle = _STYLE_MAP.get(styleMap.parentStyle);
            if (!styleMapOfParentStyle) {
                throw new Error("The parentStyle not exist or is called before being created.");
            }
            return replaceRefs(rules, styleMapOfParentStyle[themeName]);
        }
        return rules;
    }
    // for multiples styles
    var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    var content = '';
    var name = styles.$name ? styles.$name + "-" : '';
    // set priority
    if (styles.$priority != null) {
        styleMap.priority = styles.$priority;
    }
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            var value = styles[key];
            if (key === '$keyframes') {
                content += keyframesToString(name, classesMap, value, themeVariables);
            }
            else if (typeof value === 'object' || value === null) {
                // set new id if not exist
                var currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid("y-" + name + key + "-" + createNextClassId()) : createNextClassId();
                var style = styleToString(key, styles.$name, value, themeVariables, currentClassName);
                content += style;
            }
        }
    }
    return replaceRefs(content, classesMap);
}
function replaceRefs(str, data) {
    return str.replace(REF_REG_EXP, function (_match, token) {
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
 */
function styleToString(key, $name, ob, themeVariables, currentKey, parentKey) {
    var content = '';
    var subContent = '';
    var keyAndValue = '';
    var newKey;
    if (parentKey) {
        if (currentKey.indexOf('&') !== -1) {
            newKey = currentKey.replace(/&/g, parentKey);
        }
        else if (currentKey.indexOf('@media') === 0) {
            newKey = "" + currentKey;
        }
        else if (currentKey === '@global' || parentKey === '@global') {
            newKey = currentKey;
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
            var element = ob[styleKey];
            // Omit style with value null
            if (element != null) {
                // Check if is Object literal
                if (element.constructor === Object) {
                    subContent += styleToString(key, $name, element, themeVariables, styleKey, newKey);
                }
                else {
                    keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
                }
            }
        }
    }
    if (keyAndValue) {
        if (isDevMode()) {
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
function convertToStyleValue(key, value, themeVariables) {
    var newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
    if (value.constructor === Array) {
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
function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
    var content = '';
    for (var name_1 in keyframes) {
        if (keyframes.hasOwnProperty(name_1)) {
            var keyframe = keyframes[name_1];
            // Sometimes the name of a class can be the same as the name of a keyframe,
            // so we add a character to be different
            var newUniqueName = "@\u0433.->-" + name_1;
            // set new id if not exist
            var newName = newUniqueName in keysMap
                ? keysMap[newUniqueName]
                : keysMap[newUniqueName] = isDevMode() ? toClassNameValid("" + styleName + name_1 + "-" + createNextKeyframeId() + "-v") : createNextKeyframeId();
            content += "@keyframes " + newName + "{";
            for (var percent in keyframe) {
                if (keyframe.hasOwnProperty(percent)) {
                    content += percent + "%{";
                    var styles = keyframe[percent];
                    for (var key in styles) {
                        if (styles.hasOwnProperty(key)) {
                            var val = styles[key];
                            content += convertToStyleValue(key, val, themeVariables);
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
function converterToCssKeyAndStyle(str, themeVariables) {
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
function toClassNameValid(str) {
    var s = str.replace(/^[0-9]|[^\w\-]/g, function (_) {
        return "_" + _.charCodeAt(0);
    });
    return toHyphenCase(s);
}
function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
}
function converterToCssKeyAndStyleCache(str, themeVariables) {
    var map = STYLE_KEYS_MAP[themeVariables.direction];
    return str in map
        ? map[str]
        : map[str] = converterToCssKeyAndStyle(str, themeVariables);
}
var ignoreCSSKEY = {
    'break-after': 'break-after',
    'break-before': 'break-before',
    'page-break-after': 'page-break-after',
    'page-break-before': 'page-break-before'
};
var STYLE_KEYS_MAP = {
    rtl: __assign({}, ignoreCSSKEY),
    ltr: __assign({}, ignoreCSSKEY)
};
var BOTTOM = 'bottom';
var TOP = 'top';
function dirCache(original, val, themeVariables, dirAlias) {
    var map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
}
function YPositionCache(original, val, themeVariables, pos, to) {
    var map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(pos, to);
}
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
function createNextClassId() {
    return "i" + (nextClassId++).toString(36);
}
function createNextKeyframeId() {
    return "k" + (nextKeyFrameId++).toString(36);
}

var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(_viewRef) {
        this._viewRef = _viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        set: function (templateRef) {
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
    Object.defineProperty(NgTranscludeDirective.prototype, "getNgTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.prototype.ngOnDestroy = function () {
        this._viewRef.remove();
    };
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], NgTranscludeDirective.prototype, "ngTransclude", null);
    NgTranscludeDirective = __decorate([
        Directive({
            selector: '[ngTransclude]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], NgTranscludeDirective);
    return NgTranscludeDirective;
}());
var NgTranscludeModule = /** @class */ (function () {
    function NgTranscludeModule() {
    }
    NgTranscludeModule = __decorate([
        NgModule({
            exports: [NgTranscludeDirective],
            declarations: [NgTranscludeDirective]
        })
    ], NgTranscludeModule);
    return NgTranscludeModule;
}());
/**
 * @ignore
 */
function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}

var DEFAULT_VALUE = '';
var STYLE_PRIORITY = -1;
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
        class_1.prototype.setAutoContrast = function () {
            this._autoContrast = true;
        };
        class_1.prototype.updateStyle = function (element) {
            var __bg = this._superHyperInternalPropertyBg;
            var __color = this._superHyperInternalPropertyColor;
            var __raised = this._superHyperInternalPropertyRaised;
            var __elevation = this._superHyperInternalPropertyElevation;
            var __disabled = this._superHyperInternalPropertyDisabled;
            var __outlined = this._superHyperInternalPropertyOutlined;
            var __shadowColor = this._superHyperInternalPropertyShadowColor;
            var __isContrast = this._autoContrast && !__color || __color === 'auto';
            var newKey = "common----:" + (__bg || DEFAULT_VALUE) + "\u00B7" + (__color || DEFAULT_VALUE) + "\u00B7" + __raised + "\u00B7" + __elevation + "\u00B7" + (__disabled || DEFAULT_VALUE) + "\u00B7" + (__outlined || DEFAULT_VALUE) + "\u00B7" + (__shadowColor || DEFAULT_VALUE) + "\u00B7" + (__isContrast || DEFAULT_VALUE);
            this._classNameAnonymous = this._theme.addStyle(newKey, function (theme) {
                var style = {};
                if (__outlined) {
                    style.border = '1px solid currentColor';
                }
                if (__disabled) {
                    style.color = theme.disabled.contrast;
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
                    if (__raised || (__elevation != null)) {
                        if (!__bg) {
                            style.background = theme.background.primary.default;
                        }
                        var backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                        var shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
                        if (__elevation != null) {
                            style.boxShadow = shadowBuilder(__elevation, shadowColor);
                        }
                        else {
                            style.boxShadow = shadowBuilder(3, shadowColor);
                            style['&:active'] = {
                                boxShadow: shadowBuilder(8, shadowColor)
                            };
                        }
                    }
                }
                return style;
            }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
        };
        return class_1;
    }(base));
}

function toBoolean(value) {
    return value != null && "" + value !== 'false';
}

var RippleRef = /** @class */ (function () {
    function RippleRef() {
        this.state = true;
        this.timestamp = -Date.now();
        this.container = document.createElement('span');
    }
    RippleRef.prototype.end = function () {
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
        this._eventOptions = { passive: true };
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
    Ripple.prototype.setConfig = function (config) {
        this.config = config;
    };
    Object.defineProperty(Ripple.prototype, "_rectContainer", {
        get: function () {
            return this._containerElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Ripple.prototype.setTriggerElement = function (element) {
        var _this = this;
        if (element) {
            this._ngZone.runOutsideAngular(function () {
                _this._eventHandlers.forEach(function (fn, type) { return element.addEventListener(type, fn, _this._eventOptions); });
            });
        }
        this._triggerElement = element;
    };
    Ripple.prototype.createRipple = function (styles) {
        this._rippleRef = new RippleRef();
        var container = this._rippleRef.container;
        container.className = this.classes.rippleContainer;
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
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
    Ripple.prototype.onPointerDown = function (event) {
        if (!this.config.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.config);
        }
    };
    Ripple.prototype.onPointerLeave = function (_event) {
        if (!this.config.disabled) {
            this.endRipple();
        }
    };
    Ripple.prototype.startRipple = function (event, rippleConfig) {
        var containerRect = this._rectContainer;
        var x = event.clientX, y = event.clientY;
        if (rippleConfig.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        var left = x - containerRect.left;
        var top = y - containerRect.top;
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
    Ripple.prototype.runTimeoutOutsideZone = function (fn, delay) {
        if (delay === void 0) { delay = 0; }
        this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    Ripple.prototype.endRipple = function () {
        var _this = this;
        var rippleRef = this._rippleRef;
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
            this._rippleRef = undefined;
        }
    };
    Ripple.prototype.removeEvents = function () {
        var _this = this;
        if (this._triggerElement) {
            this._eventHandlers.forEach(function (fn, type) {
                _this._triggerElement.removeEventListener(type, fn, _this._eventOptions);
            });
        }
    };
    return Ripple;
}());
function rippleRadius(x, y, rect) {
    var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
function maxSize(rect) {
    return Math.max(rect.width, rect.height);
}

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
    LyCoreStyles.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(ɵɵinject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
    LyCoreStyles = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [LyTheme2])
    ], LyCoreStyles);
    return LyCoreStyles;
}());

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
    LyRippleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(ɵɵinject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
    LyRippleService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [LyTheme2])
    ], LyRippleService);
    return LyRippleService;
}());

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
            get: function () { return this._disableRipple; },
            set: function (val) {
                var _this = this;
                if (Platform.isBrowser && val !== this._disableRipple) {
                    var newVal = this._disableRipple = toBoolean(val);
                    // remove previous ripple if exist
                    this._removeRippleEvents();
                    if (!newVal) {
                        // add ripple
                        Promise.resolve(null).then(function () {
                            var triggerElement = _this._triggerElement.nativeElement;
                            var rippleContainer = (_this._rippleContainer && _this._rippleContainer.nativeElement) || triggerElement;
                            _this._ripple = new Ripple(_this._theme.variables, _this._ngZone, _this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                            _this._ripple.setConfig(_this._rippleConfig);
                        });
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        class_1.prototype._removeRippleEvents = function () {
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

function mixinDisabled(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._superHyperInternalPropertyDisabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: function () { return this._superHyperInternalPropertyDisabled; },
            set: function (value) { this._superHyperInternalPropertyDisabled = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

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
            get: function () { return this._superHyperInternalPropertyColor; },
            set: function (val) {
                var defaultColor = val;
                if (defaultColor !== this.color) {
                    this._superHyperInternalPropertyColor = defaultColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

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
            get: function () { return this._superHyperInternalPropertyBg; },
            set: function (val) {
                var defaultColor = val;
                if (defaultColor !== this.bg) {
                    this._superHyperInternalPropertyBg = defaultColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

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
            get: function () { return this._superHyperInternalPropertyRaised; },
            set: function (value) { this._superHyperInternalPropertyRaised = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

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
            get: function () { return this._superHyperInternalPropertyOutlined; },
            set: function (value) { this._superHyperInternalPropertyOutlined = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

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
            get: function () { return this._superHyperInternalPropertyElevation; },
            set: function (value) { this._superHyperInternalPropertyElevation = value; },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

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
            get: function () { return this._superHyperInternalPropertyShadowColor; },
            set: function (value) { this._superHyperInternalPropertyShadowColor = value; },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

var DEFAULT_TAB_INDEX = 0;
function mixinTabIndex(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._tabIndex = DEFAULT_TAB_INDEX;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "tabIndex", {
            get: function () {
                return this.disabled ? -1 : this._tabIndex;
            },
            set: function (value) {
                this._tabIndex = value != null ? value : DEFAULT_TAB_INDEX;
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

var DEFAULT_BG = 'paper';
var LyPaperBase = /** @class */ (function () {
    function LyPaperBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyPaperBase;
}());
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
        get: function () {
            return this._hasText;
        },
        set: function (val) {
            this._hasText = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyPaper.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyPaper.prototype.ngOnInit = function () {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    };
    LyPaper.prototype.ngOnDestroy = function () {
        this._removeRippleEvents();
    };
    __decorate([
        Input('ly-text'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyPaper.prototype, "hasText", null);
    LyPaper = __decorate([
        Directive({
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
        }),
        __metadata("design:paramtypes", [LyTheme2,
            NgZone,
            ElementRef,
            Renderer2])
    ], LyPaper);
    return LyPaper;
}(LyPaperMixinBase));

var LyWithClass = /** @class */ (function () {
    function LyWithClass(el) {
        this.el = el;
    }
    Object.defineProperty(LyWithClass.prototype, "withClass", {
        set: function (val) {
            if (!val) {
                throw new Error("'" + val + "' is not valid className");
            }
            this.el.nativeElement.classList.add(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyWithClass.prototype, "withClass", null);
    LyWithClass = __decorate([
        Directive({
            selector: '[withClass]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], LyWithClass);
    return LyWithClass;
}());

var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule = __decorate([
        NgModule({
            declarations: [LyWithClass, LyPaper],
            exports: [LyWithClass, LyPaper]
        })
    ], LyCommonModule);
    return LyCommonModule;
}());

function defaultEntry(value, defaultValue) {
    return value !== '' && value !== void 0 ? value : defaultValue;
}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}
// Element to move, element or px from, element or px to, time in ms to animate
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
function scrollWithAnimation(element, to, duration, p, motion) {
    var _motion = motion || easeOutCuaic;
    var scrollLeft = element.scrollLeft;
    return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
}
function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
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
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}
// function easeInOutCuaic(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t * t / 2; }
//   t -= 2;
//   return (t * t * t + 2) / 2;
// }
// function easeInQuart(t: number) {
//   return t * t * t * t;
// }
// function easeOutQuart(t: number) {
//   t--;
//   return -(t * t * t * t - 1);
// }
// function easeInOutQuart(t: number) {
//   t /= 0.5;
//   if (t < 1) {return 0.5 * t * t * t * t; }
//   t -= 2;
//   return -(t * t * t * t - 2) / 2;
// }
// function easeInQuint(t: number) {
//   return t * t * t * t * t;
// }
// function easeOutQuint(t: number) {
//   t--;
//   return t * t * t * t * t + 1;
// }
// function easeInOutQuint(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t * t * t * t / 2; }
//   t -= 2;
//   return (t * t * t * t * t + 2) / 2;
// }
// function easeInSine(t: number) {
//   return -Math.cos(t / (Math.PI / 2)) + 1;
// }
// function easeOutSine(t: number) {
//   return Math.sin(t / (Math.PI / 2));
// }
// function easeInOutSine(t: number) {
//   return -(Math.cos(Math.PI * t) - 1) / 2;
// }
// function easeInExpo(t: number) {
//   return Math.pow(2, 10 * (t - 1));
// }
// function easeOutExpo(t: number) {
//   return -Math.pow(2, -10 * t) + 1;
// }
// function easeInOutExpo(t: number) {
//   t /= 0.5;
//   if (t < 1) {return Math.pow(2, 10 * (t - 1)) / 2; }
//   t--;
//   return (-Math.pow(2, -10 * t) + 2) / 2;
// }
// function easeInCirc(t: number) {
//   return -Math.sqrt(1 - t * t) - 1;
// }
// function easeOutCirc(t: number) {
//   t--;
//   return Math.sqrt(1 - t * t);
// }
// function easeInOutCirc(t: number) {
//   t /= 0.5;
//   if (t < 1) {return -(Math.sqrt(1 - t * t) - 1) / 2; }
//   t -= 2;
//   return (Math.sqrt(1 - t * t) + 1) / 2;
// }

function toNumber(val, _default) {
    var num = typeof val === 'number'
        ? val
        : typeof val === 'string' && val.length
            ? +val
            : _default;
    return isNaN(num) ? (_default === void 0 ? 0 : _default) : num;
}

function componentDestroyed(component) {
    var modifiedComponent = component;
    if (modifiedComponent.__componentDestroyed$) {
        return modifiedComponent.__componentDestroyed$;
    }
    var oldNgOnDestroy = component.ngOnDestroy;
    var stop$ = new ReplaySubject();
    modifiedComponent.ngOnDestroy = function () {
        if (oldNgOnDestroy) {
            oldNgOnDestroy.apply(component);
        }
        stop$.next();
        stop$.complete();
    };
    return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
}
function untilComponentDestroyed(component) {
    return function (source) { return source.pipe(takeUntil(componentDestroyed(component))); };
}

var LyHostClass = /** @class */ (function () {
    function LyHostClass(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this._set = new Set();
    }
    LyHostClass.prototype.add = function (className) {
        if (!this._set.has(className)) {
            this._set.add(className);
            this._renderer.addClass(this._el.nativeElement, className);
        }
    };
    LyHostClass.prototype.remove = function (className) {
        if (this._set.has(className)) {
            this._set.delete(className);
            this._renderer.removeClass(this._el.nativeElement, className);
        }
    };
    LyHostClass.prototype.toggle = function (className, enabled) {
        if (enabled) {
            this.add(className);
        }
        else {
            this.remove(className);
        }
    };
    LyHostClass = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2])
    ], LyHostClass);
    return LyHostClass;
}());

var FocusStatus;
(function (FocusStatus) {
    /**mouse and/or touch*/
    FocusStatus["DEFAULT"] = "default";
    /** keyboard and/or program*/
    FocusStatus["KEYBOARD"] = "keyboard";
})(FocusStatus || (FocusStatus = {}));
var LyFocusState = /** @class */ (function () {
    function LyFocusState(_ngZone) {
        this._ngZone = _ngZone;
        this._elementMap = new Map();
        this._count = 0;
    }
    LyFocusState.prototype.listen = function (element, keyElement) {
        var _this = this;
        if (!Platform.isBrowser) {
            // return null if it is not browser platform
            return null;
        }
        var nativeElement = getNativeElement(element);
        var key = keyElement && getNativeElement(keyElement) || nativeElement;
        if (this._elementMap.has(key)) {
            return this._elementMap.get(key).subject.asObservable();
        }
        var focusState = {
            unlisten: null,
            subject: new Subject()
        };
        this._incrementCount();
        var focusListener = function (event) { return _this._on(event, focusState.subject); };
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
    LyFocusState.prototype.focusElement = function (element, origin, options) {
        var nativeElement = getNativeElement(element);
        this._currentEvent = origin;
        if (typeof nativeElement.focus === 'function') {
            nativeElement.focus(options);
        }
    };
    LyFocusState.prototype.unlisten = function (element) {
        if (!Platform.isBrowser) {
            return;
        }
        var el = getNativeElement(element);
        var focusStateInfo = this._elementMap.get(el);
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._elementMap.delete(el);
            this._decrementCount();
        }
    };
    LyFocusState.prototype._on = function (event, subject) {
        var by = null;
        if (event.type === 'focus') {
            by = this._currentEvent || 'keyboard';
        }
        this._ngZone.run(function () { return subject.next(by); });
    };
    LyFocusState.prototype._addGlobalListeners = function () {
        var _this = this;
        if (!Platform.isBrowser) {
            return;
        }
        var eventListenerOptions = supportsPassiveEventListeners
            ? {
                passive: true,
                capture: true
            } : false;
        var documentKeydownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'keyboard'; }); };
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
    LyFocusState.prototype._incrementCount = function () {
        if (++this._count === 1) {
            this._addGlobalListeners();
        }
    };
    LyFocusState.prototype._decrementCount = function () {
        if (!--this._count) {
            this._removeGlobalListeners();
        }
    };
    LyFocusState.prototype.ngOnDestroy = function () {
        var _this = this;
        this._elementMap.forEach(function (_, element) { return _this.unlisten(element); });
    };
    LyFocusState.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(ɵɵinject(NgZone)); }, token: LyFocusState, providedIn: "root" });
    LyFocusState = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NgZone])
    ], LyFocusState);
    return LyFocusState;
}());

var AUI_VERSION = '2.9.3';
var AUI_LAST_UPDATE = '2019-08-01T04:23:33.591Z';

var LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
var HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft',
    'slidecancel'
];
var ɵ0 = function () { }, ɵ1 = function () { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 */
var noopHammerInstance = {
    on: ɵ0,
    off: ɵ1,
};
var LyHammerGestureConfig = /** @class */ (function (_super) {
    __extends(LyHammerGestureConfig, _super);
    function LyHammerGestureConfig(_hammerOptions) {
        var _this = _super.call(this) || this;
        _this._hammerOptions = _hammerOptions;
        _this.events = HAMMER_GESTURES_EVENTS;
        return _this;
    }
    LyHammerGestureConfig.prototype.buildHammer = function (element) {
        var hammer = typeof window !== 'undefined' ? window.Hammer : null;
        if (!hammer) {
            return noopHammerInstance;
        }
        var mc = new hammer(element, this._hammerOptions || {});
        var pan = new hammer.Pan();
        var swipe = new hammer.Swipe();
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    LyHammerGestureConfig.prototype._createRecognizer = function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        var recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    LyHammerGestureConfig = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(LY_HAMMER_OPTIONS)),
        __metadata("design:paramtypes", [Object])
    ], LyHammerGestureConfig);
    return LyHammerGestureConfig;
}(HammerGestureConfig));

var LyThemeModule = /** @class */ (function () {
    function LyThemeModule() {
    }
    LyThemeModule_1 = LyThemeModule;
    LyThemeModule.setTheme = function (themeName) {
        return {
            ngModule: LyThemeModule_1,
            providers: [
                [LyTheme2],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    };
    var LyThemeModule_1;
    LyThemeModule = LyThemeModule_1 = __decorate([
        NgModule()
    ], LyThemeModule);
    return LyThemeModule;
}());

var Undefined = /** @class */ (function () {
    function Undefined() {
    }
    return Undefined;
}());
var UndefinedValue = new Undefined();

// @Injectable()
var LyOverlayRef = /** @class */ (function () {
    function LyOverlayRef() {
    }
    return LyOverlayRef;
}());

var styles$1 = function (theme) { return ({
    overlay: {
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
            var container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    Object.defineProperty(LyOverlayContainer.prototype, "overlayLen", {
        get: function () {
            return this._items.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOverlayContainer.prototype, "containerElement", {
        get: function () {
            return this._containerElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add instance
     * @ignore
     */
    LyOverlayContainer.prototype._add = function (item) {
        this._items.add(item);
        this.containerElement.appendChild(item);
        this._update();
    };
    /**
   * Remove instance
   * @ignore
   */
    LyOverlayContainer.prototype._remove = function (item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    };
    /**
     * Update styles for overlay container
     * @ignore
     */
    LyOverlayContainer.prototype._update = function () {
        if (this._items.size) {
            if (!this._isActiveOverlayContainer) {
                this._isActiveOverlayContainer = true;
                this._containerElement.classList.add(this._classes.overlay);
            }
        }
        else if (this._isActiveOverlayContainer) {
            this._containerElement.classList.remove(this._classes.overlay);
            this._isActiveOverlayContainer = false;
        }
    };
    LyOverlayContainer.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(ɵɵinject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
    LyOverlayContainer = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [LyTheme2])
    ], LyOverlayContainer);
    return LyOverlayContainer;
}());

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
    WinResize.ngInjectableDef = ɵɵdefineInjectable({ factory: function WinResize_Factory() { return new WinResize(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); }, token: WinResize, providedIn: "root" });
    WinResize = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, NgZone])
    ], WinResize);
    return WinResize;
}());

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
    WinScroll.ngInjectableDef = ɵɵdefineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); }, token: WinScroll, providedIn: "root" });
    WinScroll = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, NgZone])
    ], WinScroll);
    return WinScroll;
}());

var LyOverlayConfig = /** @class */ (function () {
    function LyOverlayConfig() {
        this.hasBackdrop = true;
        /**
         * Whether the user can click on the backdrop to close the overlay.
         */
        this.disableClose = false;
    }
    return LyOverlayConfig;
}());

var STYLE_PRIORITY$1 = -2;
var STYLES_BACKDROP_ROOT = (__assign({}, LY_COMMON_STYLES.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
var LyOverlayBackdrop = /** @class */ (function () {
    function LyOverlayBackdrop(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY$1));
        // this applies custom class for backdrop,
        // if one is not defined, do nothing.
        var backdropClass = _config.backdropClass;
        if (backdropClass) {
            this._el.nativeElement.classList.add(backdropClass);
        }
    }
    LyOverlayBackdrop.prototype.onclick = function () {
        if (!this._config.disableClose) {
            this._config.fnDestroy();
        }
    };
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyOverlayBackdrop.prototype, "onclick", null);
    LyOverlayBackdrop = __decorate([
        Component({
            selector: 'ly-overlay-backdrop',
            template: ""
        }),
        __metadata("design:paramtypes", [ElementRef,
            LyTheme2,
            LyOverlayConfig])
    ], LyOverlayBackdrop);
    return LyOverlayBackdrop;
}());

function createOverlayInjector(parent, config, overlayFactory) {
    return Injector.create({
        providers: [
            {
                provide: LyOverlayConfig,
                useValue: config
            },
            {
                provide: LyOverlayRef,
                useValue: overlayFactory
            }
        ],
        parent: parent
    });
}

var OverlayFactory = /** @class */ (function () {
    function OverlayFactory(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this._windowSRSub = Subscription.EMPTY;
        this._config = config = __assign({}, new LyOverlayConfig(), config);
        this._el = document.createElement('div');
        var __styles = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'all'
        };
        if (config) {
            Object.assign(__styles, config.styles);
        }
        var newInjector = createOverlayInjector(this._injector, __assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
        this._updateStyles(__styles);
        if (config) {
            if (config.onResizeScroll) {
                this.onResizeScroll = config.onResizeScroll;
            }
            this._windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                if (_this.onResizeScroll) {
                    _this.onResizeScroll();
                }
            });
            if (config.classes) {
                var classes = config.classes;
                classes.forEach(function (className) { return _this._el.classList.add(className); });
            }
        }
        if (config.hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
        }
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    Object.defineProperty(OverlayFactory.prototype, "containerElement", {
        get: function () {
            return this._el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayFactory.prototype, "componentRef", {
        get: function () {
            return this._compRef;
        },
        enumerable: true,
        configurable: true
    });
    OverlayFactory.prototype._updateStyles = function (__styles) {
        /** Apply styles */
        /** set styles */
        for (var key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                var styleVal = __styles[key];
                if (styleVal != null) {
                    this._el.style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                }
            }
        }
    };
    OverlayFactory.prototype._appendComponentToBody = function (type, context, injector) {
        var _this = this;
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
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
            this._compRef = this._generateComponent(type, injector);
            this._appRef.attachView(this._compRef.hostView);
            this._el.appendChild(this._compRef.location.nativeElement);
            this._overlayContainer._add(this._el);
        }
    };
    OverlayFactory.prototype._generateComponent = function (type, injector) {
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    };
    /** Detaches a view from dirty checking again of ApplicationRef. */
    OverlayFactory.prototype.detach = function () {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
        if (this._compRef) {
            this._appRef.detachView(this._compRef.hostView);
        }
    };
    /** Remove element of DOM */
    OverlayFactory.prototype.remove = function () {
        this._resetScroll();
        if (this._viewRef) {
            this._viewRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        else if (this._compRef) {
            this._compRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
            this._compRef = null;
        }
        else if (this._el) {
            // remove if template is string
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        if (this._compRefOverlayBackdrop) {
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            this._compRefOverlayBackdrop.destroy();
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this._windowSRSub.unsubscribe();
    };
    /** Detach & remove */
    OverlayFactory.prototype.destroy = function () {
        this.detach();
        this.remove();
    };
    OverlayFactory.prototype._hiddeScroll = function () {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            var scrollWidth = window.innerWidth - window.document.body.clientWidth;
            if (scrollWidth) {
                var computedStyle = getComputedStyle(window.document.body);
                this._paddingRight = computedStyle.getPropertyValue('padding-right');
                window.document.body.style.paddingRight = "calc(" + scrollWidth + "px + " + this._paddingRight + ")";
            }
            window.document.body.style.overflow = 'hidden';
        }
    };
    OverlayFactory.prototype._resetScroll = function () {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            if (this._paddingRight) {
                window.document.body.style.paddingRight = this._paddingRight;
                this._paddingRight = null;
            }
            window.document.body.style.overflow = null;
        }
    };
    return OverlayFactory;
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
    LyOverlay.prototype.create = function (templateOrComponent, context, config) {
        return new OverlayFactory(this._componentFactoryResolver, this._appRef, templateOrComponent, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    };
    LyOverlay.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(ɵɵinject(LyOverlayContainer), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR), ɵɵinject(WinScroll), ɵɵinject(WinResize)); }, token: LyOverlay, providedIn: "root" });
    LyOverlay = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [LyOverlayContainer,
            ComponentFactoryResolver,
            ApplicationRef,
            Injector,
            WinScroll,
            WinResize])
    ], LyOverlay);
    return LyOverlay;
}());

var LyOverlayModule = /** @class */ (function () {
    function LyOverlayModule() {
    }
    LyOverlayModule = __decorate([
        NgModule({
            declarations: [LyOverlayBackdrop],
            entryComponents: [LyOverlayBackdrop]
        })
    ], LyOverlayModule);
    return LyOverlayModule;
}());

var STYLES_BACKDROP_DARK = ({
    backgroundColor: 'rgba(0,0,0,.32)'
});

var MUTATION_OBSERVER_INIT = {
    characterData: true,
    childList: true,
    subtree: true
};
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    MutationObserverFactory.prototype.create = function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    MutationObserverFactory = __decorate([
        Injectable({ providedIn: 'root' })
    ], MutationObserverFactory);
    return MutationObserverFactory;
}());
var ElementObserver = /** @class */ (function () {
    function ElementObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._observedElements = new Map();
    }
    ElementObserver.prototype.ngOnDestroy = function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this.destroy(element); });
    };
    ElementObserver.prototype.observe = function (elementOrRef, fn, options) {
        var element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (!this._observedElements.has(element)) {
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
    ElementObserver.prototype.destroy = function (elementOrRef) {
        var element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (this._observedElements.has(element)) {
            var observer = this._observedElements.get(element);
            if (observer) {
                this._observedElements.get(element).disconnect();
            }
            this._observedElements.delete(element);
        }
    };
    ElementObserver.ngInjectableDef = ɵɵdefineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(ɵɵinject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
    ElementObserver = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [MutationObserverFactory])
    ], ElementObserver);
    return ElementObserver;
}());

var AlignAlias;
(function (AlignAlias) {
    AlignAlias["rowReverse"] = "row-reverse";
    AlignAlias["columnReverse"] = "column-reverse";
    AlignAlias["wrapReverse"] = "wrap-reverse";
    AlignAlias["start"] = "flex-start";
    AlignAlias["end"] = "flex-end";
    AlignAlias["between"] = "space-between";
    AlignAlias["around"] = "space-around";
    AlignAlias["evenly"] = "space-evenly";
})(AlignAlias || (AlignAlias = {}));

function same(o) {
    return o;
}
var LySelectionModel = /** @class */ (function () {
    function LySelectionModel(opts) {
        this._selectionMap = new Map();
        this._getKeyFn = same;
        if (!opts) {
            return;
        }
        var multiple = opts.multiple, getKey = opts.getKey;
        if (getKey) {
            this._getKeyFn = getKey;
        }
        if (multiple === true) {
            this._multiple = true;
            var selecteds = opts.selecteds;
            if (Array.isArray(selecteds) && selecteds.length) {
                this.select.apply(this, __spread(selecteds));
            }
        }
        else {
            var selecteds = opts.selecteds;
            if (selecteds) {
                this._markSelected(selecteds);
            }
        }
    }
    Object.defineProperty(LySelectionModel.prototype, "selected", {
        /** Selected values. */
        get: function () {
            if (!this._selected) {
                this._selected = Array.from(this._selectionMap.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggles a value between selected and deselected.
     */
    LySelectionModel.prototype.toggle = function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Selects one or several values.
     */
    LySelectionModel.prototype.select = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        values.forEach(function (value) { return _this._markSelected(value); });
        this._clearSelectedValues();
    };
    /**
     * Deselects a value or an array of values.
     */
    LySelectionModel.prototype.deselect = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._clearSelectedValues();
    };
    /**
     * Determines whether a value is selected.
     */
    LySelectionModel.prototype.isSelected = function (value) {
        var key = this._getKeyFn(value);
        return this._selectionMap.has(key);
    };
    /**
     * Determines whether the model does not have a value.
     */
    LySelectionModel.prototype.isEmpty = function () {
        return this._selectionMap.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    LySelectionModel.prototype.hasValue = function () {
        return this._selectionMap.size !== 0;
    };
    /**
     * Gets whether multiple values can be selected.
     */
    LySelectionModel.prototype.isMultipleSelection = function () {
        return this._multiple;
    };
    /**
     * Clears all of the selected values.
     */
    LySelectionModel.prototype.clear = function () {
        this._unmarkAll();
        this._clearSelectedValues();
    };
    /** Selects a value. */
    LySelectionModel.prototype._markSelected = function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            var key = this._getKeyFn(value);
            this._selectionMap.set(key, value);
        }
    };
    /** Deselects a value. */
    LySelectionModel.prototype._unmarkSelected = function (value) {
        if (this.isSelected(value)) {
            var key = this._getKeyFn(value);
            this._selectionMap.delete(key);
        }
    };
    /** Clears out the selected values. */
    LySelectionModel.prototype._unmarkAll = function () {
        if (!this.isEmpty()) {
            this._selectionMap.clear();
        }
    };
    /** Clear the selected values so they can be re-cached. */
    LySelectionModel.prototype._clearSelectedValues = function () {
        this._selected = null;
    };
    return LySelectionModel;
}());

function getLyThemeVariableUndefinedError(variable) {
    return Error("Variable '" + variable + "' undefined in Theme.");
}
function getLyThemeVariableOptionUndefinedError(comp, variable) {
    return Error(comp + ": variable " + variable + " is undefined in Theme.");
}
function getLyThemeStyleUndefinedError(comp, input, val) {
    return Error(comp + ": no styles defined in the theme have been found for `@Input() " + input + "`,"
        + (" the value given is `" + val + "`."));
}

var STYLES = function (theme) { return ({
    root: {
        width: '1em',
        height: '1em',
        display: 'inline-block',
        position: 'relative',
        fontSize: '24px'
    },
    line: {
        top: 'calc(0.5em - 1px)',
        position: 'absolute',
        width: 1 / 3 + "em",
        height: '2px',
        backgroundColor: 'currentColor',
        display: 'inline-block',
        transition: "all " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
        '&:first-of-type': {
            left: '0.25em',
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        },
        '&:last-of-type': {
            right: '0.25em',
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        }
    },
    up: {
        '{line}:first-of-type': {
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        },
        '{line}:last-of-type': {
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        }
    }
}); };
var LyExpansionIcon = /** @class */ (function () {
    function LyExpansionIcon(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(STYLES);
        this._up = false;
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyExpansionIcon.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            this._colorClass = this._theme.addStyle('LyExpansionIcon.color', function (theme) { return ({
                '{line}': {
                    backgroundColor: theme.colorOf(val)
                }
            }); }, this._el.nativeElement, this._colorClass, null, STYLES);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyExpansionIcon.prototype, "up", {
        get: function () {
            return this._up;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.up) {
                this._up = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.up);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.up);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LyExpansionIcon.prototype.toggle = function () {
        this.up = !this.up;
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyExpansionIcon.prototype, "color", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyExpansionIcon.prototype, "up", null);
    LyExpansionIcon = __decorate([
        Component({
            selector: 'ly-expansion-icon',
            template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [LyTheme2,
            Renderer2,
            ElementRef])
    ], LyExpansionIcon);
    return LyExpansionIcon;
}());

var LyExpansionIconModule = /** @class */ (function () {
    function LyExpansionIconModule() {
    }
    LyExpansionIconModule = __decorate([
        NgModule({
            declarations: [LyExpansionIcon],
            exports: [LyExpansionIcon]
        })
    ], LyExpansionIconModule);
    return LyExpansionIconModule;
}());

export { AUI_LAST_UPDATE, AUI_VERSION, AlignAlias, CoreTheme, Dir, DirAlias, DirPosition, ElementObserver, FocusStatus, IS_CORE_THEME, LY_COMMON_STYLES, LY_HAMMER_OPTIONS, LY_THEME, LY_THEME_GLOBAL_VARIABLES, LY_THEME_NAME, LyCommonModule, LyCoreStyles, LyExpansionIcon, LyExpansionIconModule, LyFocusState, LyHammerGestureConfig, LyHostClass, LyOverlay, LyOverlayConfig, LyOverlayContainer, LyOverlayModule, LyOverlayRef, LyPaper, LyPaperBase, LyPaperMixinBase, LyRippleService, LySelectionModel, LyStyleUtils, LyTheme2, LyThemeModule, MutationObserverFactory, NgTranscludeDirective, NgTranscludeModule, OverlayFactory, Platform, Positioning, Ripple, STYLES_BACKDROP_DARK, Shadows, StylesInDocument, THEME_VARIABLES, TypeStyle, Undefined, UndefinedValue, WinResize, WinScroll, XPosition, YPosition, _STYLE_MAP, capitalizeFirstLetter, converterToCssKeyAndStyle, createOverlayInjector, defaultEntry, eachMedia, getContrastYIQ, getLyThemeStyleUndefinedError, getLyThemeVariableOptionUndefinedError, getLyThemeVariableUndefinedError, getNativeElement, invertPlacement, isObject, mergeDeep, mixinBg, mixinColor, mixinDisableRipple, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, mixinTabIndex, scrollTo, scrollToC, scrollWithAnimation, shadowBuilder, shadowBuilderDeprecated, supportsPassiveEventListeners, toBoolean, toNumber, untilComponentDestroyed, ɵ0, ɵ1, LyWithClass as ɵa, LyOverlayBackdrop as ɵb };
//# sourceMappingURL=alyle-ui.js.map
