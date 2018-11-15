/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        if (val === DirAlias.end) {
            return this.direction === 'rtl' ? 'left' : 'right';
        }
        else {
            return this.direction === 'rtl' ? 'right' : 'left';
        }
    };
    return LyStyleUtils;
}());
export { LyStyleUtils };
if (false) {
    /** @type {?} */
    LyStyleUtils.prototype.typography;
    /** @type {?} */
    LyStyleUtils.prototype.breakpoints;
    /** @type {?} */
    LyStyleUtils.prototype.direction;
}
/** @enum {string} */
var Dir = {
    rtl: 'rtl',
    ltr: 'ltr',
};
export { Dir };
/** @enum {string} */
var DirAlias = {
    start: 'start',
    end: 'end',
};
export { DirAlias };
/** @enum {string} */
var DirPosition = {
    left: 'left',
    right: 'right',
};
export { DirPosition };
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
export function eachMedia(str, fn) {
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
export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
export function mergeDeep(target) {
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
    return mergeDeep.apply(void 0, tslib_1.__spread([target], sources));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUFBO0lBNkNBLENBQUM7Ozs7O0lBbEJDLDhCQUFPOzs7O0lBQVAsVUFBUSxLQUFhOztZQUNiLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFO1FBQzFDLE9BQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksUUFBSyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUNELDhCQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLFFBQWlCO1FBQ3RDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFDRCxvQ0FBYTs7OztJQUFiLFVBQWMsR0FBVztRQUN2QixPQUFPLGFBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELG1DQUFZOzs7O0lBQVosVUFBYSxHQUFhO1FBQ3hCLElBQUksR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQzs7OztJQTVDQyxrQ0FJRTs7SUFDRixtQ0FtQkU7O0lBQ0YsaUNBQWdCOzs7O0lBc0JoQixLQUFNLEtBQUs7SUFDWCxLQUFN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QUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxHQUFHLElBQUcsRUFBRSxNQUFHLENBQUM7aUJBQUU7Z0JBQzNELFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxHQUFHLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7YUFDL0M7U0FDRjtLQUNGO0lBRUQsT0FBTyxTQUFTLGlDQUFDLE1BQU0sR0FBSyxPQUFPLEdBQUU7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBicmVha3BvaW50czoge1xuICAgIFhTbWFsbDogc3RyaW5nLFxuICAgIFNtYWxsOiBzdHJpbmcsXG4gICAgTWVkaXVtOiBzdHJpbmcsXG4gICAgTGFyZ2U6IHN0cmluZyxcbiAgICBYTGFyZ2U6IHN0cmluZyxcblxuICAgIEhhbmRzZXQ6IHN0cmluZyxcbiAgICBUYWJsZXQ6IHN0cmluZyxcbiAgICBXZWI6IHN0cmluZyxcblxuICAgIEhhbmRzZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFRhYmxldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgV2ViUG9ydHJhaXQ6IHN0cmluZyxcblxuICAgIEhhbmRzZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBUYWJsZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBXZWJMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcsIG9wdGlvbmFsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIHZhbHVlLCBvcHRpb25hbCk7XG4gIH1cbiAgZ2V0QnJlYWtwb2ludChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBgQG1lZGlhICR7dGhpcy5icmVha3BvaW50c1trZXldIHx8IGtleX1gO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKHZhbDogRGlyQWxpYXMpIHtcbiAgICBpZiAodmFsID09PSBEaXJBbGlhcy5lbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRGlyIHtcbiAgcnRsID0gJ3J0bCcsXG4gIGx0ciA9ICdsdHInXG59XG5leHBvcnQgZW51bSBEaXJBbGlhcyB7XG4gIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgZW5kID0gJ2VuZCdcbn1cbmV4cG9ydCBlbnVtIERpclBvc2l0aW9uIHtcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbi8qKlxuICogZ2V0IGNvbG9yIG9mIG9iamVjdFxuICogQHBhcmFtIG9iaiBvYmplY3RcbiAqIEBwYXJhbSBwYXRoIHBhdGhcbiAqIEBwYXJhbSBvcHRpb25hbCBnZXQgb3B0aW9uYWwgdmFsdWUsIGlmIG5vdCBleGlzdCByZXR1cm4gZGVmYXVsdCBpZiBub3QgaXMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIG9wdGlvbmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBwYXRoIGFzIHN0cmluZztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9iaiBhcyBzdHJpbmc7XG4gIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICByZXR1cm4gb2JqW29wdGlvbmFsXSB8fCBvYmpbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqWydkZWZhdWx0J107XG4gIH1cbiAgLy8gcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShzdHI6IHN0cmluZyB8IG51bWJlciwgZm46ICgodmFsOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcsIGlzTWVkaWE6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbEl0ZW0ubGVuZ3RoO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCB2YWxJdGVtLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdW5kZWZpbmVkLCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCB1bmRlZmluZWQsIDApO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHsgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pOyB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiJdfQ==