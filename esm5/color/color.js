import * as tslib_1 from "tslib";
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
    Color.prototype.rgba = function () {
        return this._color.slice(0);
    };
    Color.prototype.alpha = function (value) {
        if (value === void 0) {
            return this._color[3];
        }
        // Clone
        var _color = this.rgba();
        // Set alpha
        _color[3] = value;
        return new (Color.bind.apply(Color, tslib_1.__spread([void 0], _color)))();
    };
    Color.prototype.luminance = function (lum) {
        if (lum === void 0) {
            return rgbToLuminance.apply(void 0, tslib_1.__spread(this._color));
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
            var mid = new (Color.bind.apply(Color, tslib_1.__spread([void 0], interpolateRgb(low.rgba(), high.rgba(), 0.5))))();
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
        return new (Color.bind.apply(Color, tslib_1.__spread([void 0], rgb)))();
    };
    /**
     * Changes the saturation of a color by manipulating the Lch chromaticity.
     * @param amount default: 1
     */
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
        return new (Color.bind.apply(Color, tslib_1.__spread([void 0], rgb)))();
    };
    /**
     * Similar to saturate, but the opposite direction.
     * @param amount default: 1
     */
    Color.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 1; }
        return this.saturate(-amount);
    };
    /**
     * @param amount default: 1
     */
    Color.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 1; }
        var lab = rgbToLab(this._color);
        lab[0] -= 18 * amount;
        var xyzFromLab = labToXyz(lab);
        var rgb = xyzToRgb(xyzFromLab);
        // Set alpha
        rgb.push(this._color[3]);
        return new (Color.bind.apply(Color, tslib_1.__spread([void 0], rgb)))();
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
        return rgbToCss(this.rgba());
    };
    Color.prototype.toString = function () {
        return this.css();
    };
    return Color;
}());
export { Color };
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
export function hexColorToInt(_color) {
    if (_color.startsWith('#')) {
        return parseInt(_color.slice(1), 16);
    }
    throw new Error("Expected to start with '#' the given value is: " + _color);
}
export function color() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new (Color.bind.apply(Color, tslib_1.__spread([void 0], args)))();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY29sb3IvIiwic291cmNlcyI6WyJjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNaLElBQUEsY0FBRyxFQUFFLGNBQUcsRUFBRSxjQUFHLENBQVU7QUFFL0I7SUFPRTtRQUFZLGNBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQix5QkFBaUI7O1FBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQixvQkFBb0I7WUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVdELHFCQUFLLEdBQUwsVUFBTSxLQUFjO1FBQ2xCLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2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QUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDckQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDckQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFFckQsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQWE7SUFDN0IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBRWpCLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDWixDQUFDLElBQUksR0FBRyxDQUFDO0lBQ1QsQ0FBQyxJQUFJLE9BQU8sQ0FBQztJQUViLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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T0FBTztJQUU3RCxPQUFPO1FBQ0wsSUFBSSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUM7S0FDeEMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQWM7SUFDMUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFrRCxNQUFRLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBS0QsTUFBTSxVQUFVLEtBQUs7SUFBQyxjQUErQjtTQUEvQixVQUErQixFQUEvQixxQkFBK0IsRUFBL0IsSUFBK0I7UUFBL0IseUJBQStCOztJQUNuRCxZQUFXLEtBQUssWUFBTCxLQUFLLDZCQUFJLElBQWdCLE1BQUU7QUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVQUyA9IDFlLTc7XG5jb25zdCBNQVhfSVRFUiA9IDIwO1xuY29uc3QgeyBwb3csIG1pbiwgbWF4IH0gPSBNYXRoO1xuXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbG9yOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihoZXg6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpXG4gIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGFscGhhPzogbnVtYmVyKVxuICBjb25zdHJ1Y3RvciguLi5hcmdzOiBudW1iZXJbXSlcbiAgY29uc3RydWN0b3IoLi4uYXJnczogbnVtYmVyW10pIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPCAzICYmIGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fY29sb3IgPSBiaWdJbnRUb1JnYihhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgdGhpcy5fY29sb3IgPSBhcmdzO1xuXG4gICAgICAvLyBTZXQgZGVmYXVsdCBhbHBoYVxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yWzNdID0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sb3IgPSBbXTtcbiAgICB9XG4gIH1cblxuICByZ2JhKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvci5zbGljZSgwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbG9yIG9wYWNpdHlcbiAgICovXG4gIGFscGhhKCk6IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgY29sb3Igb3BhY2l0eVxuICAgKiBAcGFyYW0gdmFsdWUgb3BhY2l0eVxuICAgKi9cbiAgYWxwaGEodmFsdWU6IG51bWJlcik6IENvbG9yO1xuICBhbHBoYSh2YWx1ZT86IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sb3JbM107XG4gICAgfVxuXG4gICAgLy8gQ2xvbmVcbiAgICBjb25zdCBfY29sb3IgPSB0aGlzLnJnYmEoKTtcblxuICAgIC8vIFNldCBhbHBoYVxuICAgIF9jb2xvclszXSA9IHZhbHVlO1xuICAgIHJldHVybiBuZXcgQ29sb3IoLi4uX2NvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZWxhdGl2ZSBicmlnaHRuZXNzXG4gICAqL1xuICBsdW1pbmFuY2UoKTogbnVtYmVyO1xuICAvKipcbiAgICogTm9ybWFsaXplZCB0byAwIGZvciBkYXJrZXN0IGJsYWNrIGFuZCAxIGZvciBsaWdodGVzdCB3aGl0ZS5cbiAgICogQHBhcmFtIGx1bSAwIHRvIDFcbiAgICovXG4gIGx1bWluYW5jZShsdW06IG51bWJlcik6IENvbG9yO1xuICBsdW1pbmFuY2UobHVtPzogbnVtYmVyKSB7XG4gICAgaWYgKGx1bSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gcmdiVG9MdW1pbmFuY2UoLi4uKHRoaXMuX2NvbG9yIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSkpO1xuICAgIH1cblxuICAgIGlmIChsdW0gPT09IDApIHtcbiAgICAgIC8vIHJldHVybiBwdXJlIGJsYWNrXG4gICAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDAsIHRoaXMuX2NvbG9yWzNdKTtcbiAgICB9XG4gICAgaWYgKGx1bSA9PT0gMSkge1xuICAgICAgLy8gcmV0dXJuIHB1cmUgd2hpdGVcbiAgICAgIHJldHVybiBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgdGhpcy5fY29sb3JbM10pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0aXZlTHVtaW5hbmNlID0gdGhpcy5sdW1pbmFuY2UoKTtcbiAgICBsZXQgbWF4X2l0ZXIgPSBNQVhfSVRFUjtcblxuICAgIGNvbnN0IHRlc3QgPSAobG93OiBDb2xvciwgaGlnaDogQ29sb3IpOiBDb2xvciA9PiB7XG4gICAgICBjb25zdCBtaWQgPSBuZXcgQ29sb3IoLi4uaW50ZXJwb2xhdGVSZ2IobG93LnJnYmEoKSwgaGlnaC5yZ2JhKCksIDAuNSkpO1xuICAgICAgY29uc3QgbG0gPSBtaWQubHVtaW5hbmNlKCkgYXMgbnVtYmVyO1xuXG4gICAgICBpZiAoTWF0aC5hYnMobHVtIC0gbG0pIDwgRVBTIHx8ICFtYXhfaXRlci0tKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsbSA+IGx1bSA/IHRlc3QobG93LCBtaWQpIDogdGVzdChtaWQsIGhpZ2gpO1xuICAgIH07XG5cbiAgICBjb25zdCByZ2IgPSAocmVsYXRpdmVMdW1pbmFuY2UgPiBsdW1cbiAgICAgICAgPyB0ZXN0KG5ldyBDb2xvcigwLCAwLCAwKSwgdGhpcylcbiAgICAgICAgOiB0ZXN0KHRoaXMsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KSkpLnJnYmEoKTtcbiAgICByZ2IucG9wKCk7XG4gICAgcmdiLnB1c2godGhpcy5fY29sb3JbIDMgXSk7XG5cbiAgICByZXR1cm4gbmV3IENvbG9yKC4uLnJnYik7XG5cbiAgfVxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgc2F0dXJhdGlvbiBvZiBhIGNvbG9yIGJ5IG1hbmlwdWxhdGluZyB0aGUgTGNoIGNocm9tYXRpY2l0eS5cbiAgICogQHBhcmFtIGFtb3VudCBkZWZhdWx0OiAxXG4gICAqL1xuICBzYXR1cmF0ZShhbW91bnQgPSAxKSB7XG4gICAgY29uc3QgbGFiID0gcmdiVG9MYWIodGhpcy5fY29sb3IpO1xuICAgIGNvbnN0IGxjaCA9IGxhYlRvTGNoKGxhYik7XG5cbiAgICBsY2hbMV0gKz0gMTggKiBhbW91bnQ7XG5cbiAgICBpZiAobGNoWzFdIDwgMCkge1xuICAgICAgbGNoWzFdID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJGcm9tTGNoID0gbGNoVG9MYWIobGNoKTtcbiAgICBjb25zdCB4eXpGcm9tTGFiID0gbGFiVG9YeXoobGFiRnJvbUxjaCk7XG4gICAgY29uc3QgcmdiID0geHl6VG9SZ2IoeHl6RnJvbUxhYik7XG5cbiAgICAvLyBTZXQgYWxwaGFcbiAgICByZ2IucHVzaCh0aGlzLl9jb2xvclszXSk7XG5cbiAgICByZXR1cm4gbmV3IENvbG9yKC4uLnJnYik7XG4gIH1cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gc2F0dXJhdGUsIGJ1dCB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0gYW1vdW50IGRlZmF1bHQ6IDFcbiAgICovXG4gIGRlc2F0dXJhdGUoYW1vdW50ID0gMSkge1xuICAgIHJldHVybiB0aGlzLnNhdHVyYXRlKC1hbW91bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhbW91bnQgZGVmYXVsdDogMVxuICAgKi9cbiAgZGFya2VuKGFtb3VudCA9IDEpIHtcbiAgICBjb25zdCBsYWIgPSByZ2JUb0xhYih0aGlzLl9jb2xvcik7XG4gICAgbGFiWzBdIC09IDE4ICogYW1vdW50O1xuICAgIGNvbnN0IHh5ekZyb21MYWIgPSBsYWJUb1h5eihsYWIpO1xuICAgIGNvbnN0IHJnYiA9IHh5elRvUmdiKHh5ekZyb21MYWIpO1xuXG4gICAgLy8gU2V0IGFscGhhXG4gICAgcmdiLnB1c2godGhpcy5fY29sb3JbM10pO1xuXG4gICAgcmV0dXJuIG5ldyBDb2xvciguLi5yZ2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvcHBvc2l0ZSBvZiBkYXJrZW5cbiAgICogQHBhcmFtIGFtb3VudCBkZWZhdWx0IDFcbiAgICovXG4gIGJyaWdodGVuKGFtb3VudCA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5kYXJrZW4oLWFtb3VudCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgaWYgKCF0aGlzLl9jb2xvci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAndW5kZWZpbmVkIC0gaW52YWxpZCBjb2xvcic7XG4gICAgfVxuICAgIHJldHVybiByZ2JUb0Nzcyh0aGlzLnJnYmEoKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5jc3MoKTtcbiAgfVxuXG59XG5cblxuLy8gLyoqXG4vLyAgKiBDb252ZXJ0IG51bWJlciB0byBDU1Ncbi8vICAqIDB4MDBiY2Q0ID4gIzAwYmNkNFxuLy8gICogQHBhcmFtIGludCBJbnRcbi8vICAqL1xuLy8gZnVuY3Rpb24gYmlnSW50VG9Dc3MoaW50OiBudW1iZXIpIHtcbi8vICAgY29uc3QgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbi8vICAgcmV0dXJuICcjMDAwMDAwJy5zdWJzdHJpbmcoMCwgNyAtIGhleC5sZW5ndGgpICsgaGV4O1xuLy8gfVxuXG5mdW5jdGlvbiByZ2JUb0NzcyhyZ2I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XG4gIGNvbnN0IGFscGhhID0gcmdiLnBvcCgpO1xuICBpZiAoYWxwaGEgPT09IDEpIHtcbiAgICByZXR1cm4gYHJnYigke3JnYi5tYXAoTWF0aC5yb3VuZCkuam9pbigpfSlgO1xuICB9XG4gIHJldHVybiBgcmdiYSgke3JnYi5tYXAoTWF0aC5yb3VuZCkuam9pbigpfSwke2FscGhhfSlgO1xufVxuXG5mdW5jdGlvbiBiaWdJbnRUb1JnYihiaWdJbnQ6IG51bWJlciwgYWxwaGEgPSAxKSB7XG4gIC8vIGlmIChiaWdJbnQgPCAweDEwMDApIHtcbiAgLy8gICBiaWdJbnQgPSBwYXJzZUludChiaWdJbnQudG9TdHJpbmcoMTYpLnNwbGl0KCcnKS5tYXAoY2hhciA9PiB7XG4gIC8vICAgICByZXR1cm4gY2hhciArIGNoYXI7XG4gIC8vICAgfSkuam9pbignJyksIDE2KTtcbiAgLy8gfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcbiAgY29uc3QgcmVkID0gKGJpZ0ludCA+PiAxNikgJiAweGZmO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcbiAgY29uc3QgZ3JlZW4gPSAoYmlnSW50ID4+IDgpICYgMHhmZjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXG4gIGNvbnN0IGJsdWUgPSBiaWdJbnQgJiAweGZmO1xuXG4gIHJldHVybiBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdO1xufVxuXG4vLyBmdW5jdGlvbiByZ2JUb0JpZ0ludChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XG4vLyAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxuLy8gICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xuLy8gfVxuXG5mdW5jdGlvbiByZ2JUb1h5eihyZ2I6IG51bWJlcltdKSB7XG4gIGxldCByID0gcmdiWzBdIC8gMjU1O1xuICBsZXQgZyA9IHJnYlsxXSAvIDI1NTtcbiAgbGV0IGIgPSByZ2JbMl0gLyAyNTU7XG5cbiAgLy8gQXNzdW1lIHNSR0JcbiAgciA9IHIgPiAwLjA0MDQ1ID8gKCgociArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKHIgLyAxMi45Mik7XG4gIGcgPSBnID4gMC4wNDA0NSA/ICgoKGcgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChnIC8gMTIuOTIpO1xuICBiID0gYiA+IDAuMDQwNDUgPyAoKChiICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuICBjb25zdCB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuICBjb25zdCB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuICBjb25zdCB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG4gIHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIHJnYlRvTGFiKHJnYjogbnVtYmVyW10pIHtcbiAgY29uc3QgeHl6ID0gcmdiVG9YeXoocmdiKTtcbiAgbGV0IHggPSB4eXpbIDAgXTtcbiAgbGV0IHkgPSB4eXpbIDEgXTtcbiAgbGV0IHogPSB4eXpbIDIgXTtcblxuICB4IC89IDk1LjA0NztcbiAgeSAvPSAxMDA7XG4gIHogLz0gMTA4Ljg4MztcblxuICB4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG4gIHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcbiAgeiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG4gIGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcbiAgY29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG4gIGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG4gIHJldHVybiBbIGwsIGEsIGIgXTtcbn1cblxuZnVuY3Rpb24gbGFiVG9MY2gobGFiOiBudW1iZXJbXSkge1xuICBjb25zdCBsID0gbGFiWyAwIF07XG4gIGNvbnN0IGEgPSBsYWJbIDEgXTtcbiAgY29uc3QgYiA9IGxhYlsgMiBdO1xuICBsZXQgaDogbnVtYmVyO1xuXG4gIGNvbnN0IGhyID0gTWF0aC5hdGFuMihiLCBhKTtcbiAgaCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cbiAgaWYgKGggPCAwKSB7XG4gICAgaCArPSAzNjA7XG4gIH1cblxuICBjb25zdCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG4gIHJldHVybiBbIGwsIGMsIGggXTtcbn1cblxuZnVuY3Rpb24gbGNoVG9MYWIobGNoOiBudW1iZXJbXSkge1xuICBjb25zdCBsID0gbGNoWyAwIF07XG4gIGNvbnN0IGMgPSBsY2hbIDEgXTtcbiAgY29uc3QgaCA9IGxjaFsgMiBdO1xuXG4gIGNvbnN0IGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICBjb25zdCBhID0gYyAqIE1hdGguY29zKGhyKTtcbiAgY29uc3QgYiA9IGMgKiBNYXRoLnNpbihocik7XG5cbiAgcmV0dXJuIFsgbCwgYSwgYiBdO1xufVxuXG5mdW5jdGlvbiBsYWJUb1h5eihsYWI6IG51bWJlcltdKSB7XG4gIGNvbnN0IGwgPSBsYWJbIDAgXTtcbiAgY29uc3QgYSA9IGxhYlsgMSBdO1xuICBjb25zdCBiID0gbGFiWyAyIF07XG4gIGxldCB4O1xuICBsZXQgeTtcbiAgbGV0IHo7XG5cbiAgeSA9IChsICsgMTYpIC8gMTE2O1xuICB4ID0gYSAvIDUwMCArIHk7XG4gIHogPSB5IC0gYiAvIDIwMDtcblxuICBjb25zdCB5MiA9IHkgKiogMztcbiAgY29uc3QgeDIgPSB4ICoqIDM7XG4gIGNvbnN0IHoyID0geiAqKiAzO1xuICB5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4NztcbiAgeCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG4gIHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG4gIHggKj0gOTUuMDQ3O1xuICB5ICo9IDEwMDtcbiAgeiAqPSAxMDguODgzO1xuXG4gIHJldHVybiBbIHgsIHksIHogXTtcbn1cblxuZnVuY3Rpb24geHl6VG9SZ2IoeHl6OiBudW1iZXJbXSkge1xuICBjb25zdCB4ID0geHl6WyAwIF0gLyAxMDA7XG4gIGNvbnN0IHkgPSB4eXpbIDEgXSAvIDEwMDtcbiAgY29uc3QgeiA9IHh5elsgMiBdIC8gMTAwO1xuICBsZXQgcjtcbiAgbGV0IGc7XG4gIGxldCBiO1xuXG4gIHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcbiAgZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG4gIGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG4gIC8vIEFzc3VtZSBzUkdCXG4gIHIgPSByID4gMC4wMDMxMzA4XG4gICAgPyAoKDEuMDU1ICogKHIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuICAgIDogciAqIDEyLjkyO1xuXG4gIGcgPSBnID4gMC4wMDMxMzA4XG4gICAgPyAoKDEuMDU1ICogKGcgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuICAgIDogZyAqIDEyLjkyO1xuXG4gIGIgPSBiID4gMC4wMDMxMzA4XG4gICAgPyAoKDEuMDU1ICogKGIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuICAgIDogYiAqIDEyLjkyO1xuXG4gIHIgPSBtaW4obWF4KDAsIHIpLCAxKTtcbiAgZyA9IG1pbihtYXgoMCwgZyksIDEpO1xuICBiID0gbWluKG1heCgwLCBiKSwgMSk7XG5cbiAgcmV0dXJuIFsgciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NSBdO1xufVxuXG5mdW5jdGlvbiByZ2JUb0x1bWluYW5jZShyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIC8vIFJlbGF0aXZlIGx1bWluYW5jZVxuICAvLyBTZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICByID0gbHVtaW5hbmNlX2NoYW5uZWwocik7XG4gIGcgPSBsdW1pbmFuY2VfY2hhbm5lbChnKTtcbiAgYiA9IGx1bWluYW5jZV9jaGFubmVsKGIpO1xuICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xufVxuXG5mdW5jdGlvbiBsdW1pbmFuY2VfY2hhbm5lbCh4OiBudW1iZXIpIHtcbiAgeCAvPSAyNTU7XG4gIHJldHVybiB4IDw9IDAuMDM5MjggPyB4IC8gMTIuOTIgOiBwb3coKHggKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVSZ2IocmdiMTogbnVtYmVyW10sIHJnYjI6IG51bWJlcltdLCBmID0gMC41KSB7XG5cbiAgcmV0dXJuIFtcbiAgICByZ2IxWyAwIF0gKyBmICogKHJnYjJbIDAgXSAtIHJnYjFbIDAgXSksXG4gICAgcmdiMVsgMSBdICsgZiAqIChyZ2IyWyAxIF0gLSByZ2IxWyAxIF0pLFxuICAgIHJnYjFbIDIgXSArIGYgKiAocmdiMlsgMiBdIC0gcmdiMVsgMiBdKSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleENvbG9yVG9JbnQoX2NvbG9yOiBzdHJpbmcpIHtcbiAgaWYgKF9jb2xvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoX2NvbG9yLnNsaWNlKDEpLCAxNik7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB0byBzdGFydCB3aXRoICcjJyB0aGUgZ2l2ZW4gdmFsdWUgaXM6ICR7X2NvbG9yfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3IoaGV4OiBudW1iZXIsIGFscGhhPzogbnVtYmVyKTogQ29sb3I7XG5leHBvcnQgZnVuY3Rpb24gY29sb3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpOiBDb2xvcjtcbmV4cG9ydCBmdW5jdGlvbiBjb2xvciguLi5hcmdzOiBudW1iZXJbXSk6IENvbG9yO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yKC4uLmFyZ3M6IChudW1iZXIgfCB1bmRlZmluZWQpW10pOiBDb2xvciB7XG4gIHJldHVybiBuZXcgQ29sb3IoLi4uYXJncyBhcyBudW1iZXJbXSk7XG59XG4iXX0=