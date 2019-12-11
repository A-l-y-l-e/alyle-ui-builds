import { __spread } from 'tslib';

var EPS = 1e-7;
var MAX_ITER = 20;
var pow = Math.pow, min = Math.min, max = Math.max;
var ColorClass = /** @class */ (function () {
    function ColorClass() {
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
    ColorClass.prototype.rgba = function () {
        return this._color.slice(0);
    };
    ColorClass.prototype.alpha = function (value) {
        if (value === void 0) {
            return this._color[3];
        }
        // Clone
        var _color = this.rgba();
        // Set alpha
        _color[3] = value;
        return new (Color.bind.apply(Color, __spread([void 0], _color)))();
    };
    ColorClass.prototype.luminance = function (lum) {
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
            var mid = new (Color.bind.apply(Color, __spread([void 0], interpolateRgb(low.rgba(), high.rgba(), 0.5))))();
            var lm = mid.luminance();
            if (Math.abs(lum - lm) < EPS || !max_iter--) {
                return mid;
            }
            return lm > lum ? test(low, mid) : test(mid, high);
        };
        var rgb = (relativeLuminance > lum
            ? test(new Color(0, 0, 0), this)
            : test(this, new Color(255, 255, 255))).rgba();
        rgb.pop();
        rgb.push(this._color[3]);
        return new (Color.bind.apply(Color, __spread([void 0], rgb)))();
    };
    ColorClass.prototype.saturate = function (amount) {
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
    ColorClass.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 1; }
        return this.saturate(-amount);
    };
    /**
     * @param amount default 1
     */
    ColorClass.prototype.darken = function (amount) {
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
    ColorClass.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 1; }
        return this.darken(-amount);
    };
    ColorClass.prototype.css = function () {
        if (!this._color.length) {
            return 'undefined - invalid color';
        }
        return rgbToCss(this.rgba());
    };
    ColorClass.prototype.toString = function () {
        return this.css();
    };
    return ColorClass;
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
    var alpha = rgb.pop();
    if (alpha === 1) {
        return "rgb(" + rgb.map(Math.round).join() + ")";
    }
    return "rgba(" + rgb.map(Math.round).join() + "," + alpha + ")";
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
function hexColorToInt(_color) {
    if (_color.startsWith('#')) {
        return parseInt(_color.slice(1), 16);
    }
    throw new Error("Expected to start with '#' the given value is: " + _color);
}
// https://stackoverflow.com/a/59186182
function CreateCallableConstructor(type) {
    // tslint:disable-next-line: no-shadowed-variable
    function Color() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (type.bind.apply(type, __spread([void 0], args)))();
    }
    Color.prototype = type.prototype;
    return Color;
}
var Color = CreateCallableConstructor(ColorClass);

/**
 * Generated bundle index. Do not edit.
 */

export { Color, ColorClass, hexColorToInt };
//# sourceMappingURL=alyle-ui-color.js.map
