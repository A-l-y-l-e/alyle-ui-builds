/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function TypographyConfig() { }
/** @type {?} */
TypographyConfig.prototype.fontSize;
/** @type {?|undefined} */
TypographyConfig.prototype.fontFamily;
/** @type {?|undefined} */
TypographyConfig.prototype.fontWeight;
/** @type {?|undefined} */
TypographyConfig.prototype.letterSpacing;
/** @type {?|undefined} */
TypographyConfig.prototype.textTransform;
/** @type {?|undefined} */
TypographyConfig.prototype.gutterTop;
/** @type {?|undefined} */
TypographyConfig.prototype.gutterBottom;
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
     * @return {?}
     */
    LyStyleUtils.prototype.colorOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return get(this, value);
    };
    return LyStyleUtils;
}());
export { LyStyleUtils };
if (false) {
    /** @type {?} */
    LyStyleUtils.prototype.typography;
}
/**
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    /** @type {?} */
    var _path = path instanceof Array ? path : path.split(':');
    for (var i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
}
/**
 * @param {?} str
 * @param {?} fn
 * @return {?}
 */
export function eachMedia(str, fn) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUE7Ozs7Ozs7SUFLRSw4QkFBTzs7OztJQUFQLFVBQVEsS0FBYTs7UUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzNDLE9BQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksUUFBSyxDQUFDO0tBQzVEOzs7OztJQUNELDhCQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN6Qjt1QkFyQkg7SUFzQkMsQ0FBQTtBQVpELHdCQVlDOzs7Ozs7Ozs7O0FBRUQsYUFBYSxHQUFXLEVBQUUsSUFBUzs7SUFDakMsSUFBTSxLQUFLLEdBQWEsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxtQkFBQyxHQUFhLEVBQUMsQ0FBQyxtQkFBQyxHQUFHLENBQUMsU0FBUyxDQUFXLENBQUEsQ0FBQztDQUMzRTs7Ozs7O0FBRUQsTUFBTSxvQkFBb0IsR0FBVyxFQUFFLEVBQXVEOztJQUM1RixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUNsRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUMzQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBQzlCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxHQUFHLEVBQUU7WUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2RDtTQUNGO2FBQU07WUFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVHlwb2dyYXBoeUNvbmZpZyB7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBudW1iZXI7XG4gIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gIHRleHRUcmFuc2Zvcm0/OiAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICdsb3dlcmNhc2UnO1xuICBndXR0ZXJUb3A/OiBudW1iZXI7XG4gIGd1dHRlckJvdHRvbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKHN0cjogc3RyaW5nLCBmbjogKCh2YWw6IHN0cmluZywgbWVkaWE6IHN0cmluZywgbGVuOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgY29uc3QgbGVuID0gdmFsSXRlbS5sZW5ndGg7XG4gICAgaWYgKGxlbikge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHZhbEl0ZW1bal0sIHZhbEl0ZW0ubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB1bmRlZmluZWQsIGxlbik7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==