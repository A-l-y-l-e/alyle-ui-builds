(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/color', ['exports'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.color = {})));
}(this, (function (exports) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var EPS = 1e-7;
    var MAX_ITER = 20;
    var pow = Math.pow, min = Math.min, max = Math.max;
    var Color = /** @class */ (function () {
        function Color() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length < 3 && args.length > 0) {
                this._color = bigIntToRgb(args[0], args[1]);
            }
            else if (args.length > 2) {
                this._color = args;
                // Set default alpha
                if (args.length === 3) {
                    this._color[3] = 1;
                }
            }
            else {
                this._color = [];
            }
        }
        Color.prototype.rgb = function () {
            return this._color.slice(0);
        };
        Color.prototype.alpha = function (value) {
            if (value === void 0) {
                return this._color[3];
            }
            // Clone
            var color = this._color.slice(0);
            // Set alpha
            color[3] = value;
            return new (Color.bind.apply(Color, __spread([void 0], color)))();
        };
        Color.prototype.luminance = function (lum) {
            if (lum === void 0) {
                return rgbToLuminance.apply(void 0, __spread(this._color));
            }
            if (lum === 0) {
                // return pure black
                return new Color(0, 0, 0, this._color[3]);
            }
            if (lum === 1) {
                // return pure white
                return new Color(255, 255, 255, this._color[3]);
            }
            var relativeLuminance = this.luminance();
            var max_iter = MAX_ITER;
            var test = function (low, high) {
                var mid = new (Color.bind.apply(Color, __spread([void 0], interpolateRgb(low.rgb(), high.rgb(), 0.5))))();
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };
            var rgb = (relativeLuminance > lum
                ? test(new Color(0, 0, 0), this)
                : test(this, new Color(255, 255, 255))).rgb();
            rgb.pop();
            rgb.push(this._color[3]);
            return new (Color.bind.apply(Color, __spread([void 0], rgb)))();
        };
        Color.prototype.saturate = function (amount) {
            if (amount === void 0) { amount = 1; }
            var lab = rgbToLab(this._color);
            var lch = labToLch(lab);
            lch[1] += 18 * amount;
            if (lch[1] < 0) {
                lch[1] = 0;
            }
            var labFromLch = lchToLab(lch);
            var xyzFromLab = labToXyz(labFromLch);
            var rgb = xyzToRgb(xyzFromLab);
            // Set alpha
            rgb.push(this._color[3]);
            return new (Color.bind.apply(Color, __spread([void 0], rgb)))();
        };
        Color.prototype.desaturate = function (amount) {
            if (amount === void 0) { amount = 1; }
            return this.saturate(-amount);
        };
        /**
         * @param amount default 1
         */
        Color.prototype.darken = function (amount) {
            if (amount === void 0) { amount = 1; }
            var lab = rgbToLab(this._color);
            lab[0] -= 18 * amount;
            var xyzFromLab = labToXyz(lab);
            var rgb = xyzToRgb(xyzFromLab);
            // Set alpha
            rgb.push(this._color[3]);
            return new (Color.bind.apply(Color, __spread([void 0], rgb)))();
        };
        /**
         * The opposite of darken
         * @param amount default 1
         */
        Color.prototype.brighten = function (amount) {
            if (amount === void 0) { amount = 1; }
            return this.darken(-amount);
        };
        Color.prototype.css = function () {
            if (!this._color.length) {
                return 'undefined - invalid color';
            }
            return rgbToCss(this._color);
        };
        Color.prototype.toString = function () {
            return this.css();
        };
        return Color;
    }());
    // /**
    //  * Convert number to CSS
    //  * 0x00bcd4 > #00bcd4
    //  * @param int Int
    //  */
    // function bigIntToCss(int: number) {
    //   const hex = int.toString(16);
    //   return '#000000'.substring(0, 7 - hex.length) + hex;
    // }
    function rgbToCss(rgb) {
        return "rgba(" + rgb.join() + ")";
    }
    function bigIntToRgb(bigInt, alpha) {
        if (alpha === void 0) { alpha = 1; }
        // if (bigInt < 0x1000) {
        //   bigInt = parseInt(bigInt.toString(16).split('').map(char => {
        //     return char + char;
        //   }).join(''), 16);
        // }
        // tslint:disable-next-line: no-bitwise
        var red = (bigInt >> 16) & 0xff;
        // tslint:disable-next-line: no-bitwise
        var green = (bigInt >> 8) & 0xff;
        // tslint:disable-next-line: no-bitwise
        var blue = bigInt & 0xff;
        return [red, green, blue, alpha];
    }
    // function rgbToBigInt(r: number, g: number, b: number) {
    //   // tslint:disable-next-line: no-bitwise
    //   return (r << 16) + (g << 8) + b;
    // }
    function rgbToXyz(rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        // Assume sRGB
        r = r > 0.04045 ? (Math.pow(((r + 0.055) / 1.055), 2.4)) : (r / 12.92);
        g = g > 0.04045 ? (Math.pow(((g + 0.055) / 1.055), 2.4)) : (g / 12.92);
        b = b > 0.04045 ? (Math.pow(((b + 0.055) / 1.055), 2.4)) : (b / 12.92);
        var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
        var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
        var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
        return [x * 100, y * 100, z * 100];
    }
    function rgbToLab(rgb) {
        var xyz = rgbToXyz(rgb);
        var x = xyz[0];
        var y = xyz[1];
        var z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? (Math.pow(x, (1 / 3))) : (7.787 * x) + (16 / 116);
        y = y > 0.008856 ? (Math.pow(y, (1 / 3))) : (7.787 * y) + (16 / 116);
        z = z > 0.008856 ? (Math.pow(z, (1 / 3))) : (7.787 * z) + (16 / 116);
        var l = (116 * y) - 16;
        var a = 500 * (x - y);
        var b = 200 * (y - z);
        return [l, a, b];
    }
    function labToLch(lab) {
        var l = lab[0];
        var a = lab[1];
        var b = lab[2];
        var h;
        var hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
            h += 360;
        }
        var c = Math.sqrt(a * a + b * b);
        return [l, c, h];
    }
    function lchToLab(lch) {
        var l = lch[0];
        var c = lch[1];
        var h = lch[2];
        var hr = h / 360 * 2 * Math.PI;
        var a = c * Math.cos(hr);
        var b = c * Math.sin(hr);
        return [l, a, b];
    }
    function labToXyz(lab) {
        var l = lab[0];
        var a = lab[1];
        var b = lab[2];
        var x;
        var y;
        var z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        var y2 = Math.pow(y, 3);
        var x2 = Math.pow(x, 3);
        var z2 = Math.pow(z, 3);
        y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
    }
    function xyzToRgb(xyz) {
        var x = xyz[0] / 100;
        var y = xyz[1] / 100;
        var z = xyz[2] / 100;
        var r;
        var g;
        var b;
        r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
        g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
        b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
        // Assume sRGB
        r = r > 0.0031308
            ? ((1.055 * (Math.pow(r, (1.0 / 2.4)))) - 0.055)
            : r * 12.92;
        g = g > 0.0031308
            ? ((1.055 * (Math.pow(g, (1.0 / 2.4)))) - 0.055)
            : g * 12.92;
        b = b > 0.0031308
            ? ((1.055 * (Math.pow(b, (1.0 / 2.4)))) - 0.055)
            : b * 12.92;
        r = min(max(0, r), 1);
        g = min(max(0, g), 1);
        b = min(max(0, b), 1);
        return [r * 255, g * 255, b * 255];
    }
    function rgbToLuminance(r, g, b) {
        // Relative luminance
        // See http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_channel(r);
        g = luminance_channel(g);
        b = luminance_channel(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    function luminance_channel(x) {
        x /= 255;
        return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
    }
    function interpolateRgb(rgb1, rgb2, f) {
        if (f === void 0) { f = 0.5; }
        return [
            rgb1[0] + f * (rgb2[0] - rgb1[0]),
            rgb1[1] + f * (rgb2[1] - rgb1[1]),
            rgb1[2] + f * (rgb2[2] - rgb1[2]),
        ];
    }
    function hexColorToInt(color) {
        if (color.startsWith('#')) {
            return parseInt(color.slice(1), 16);
        }
        throw new Error("Expected to start with '#' the given value is: " + color);
    }

    exports.Color = Color;
    exports.hexColorToInt = hexColorToInt;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-color.umd.js.map
