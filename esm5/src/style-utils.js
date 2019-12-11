import * as tslib_1 from "tslib";
import { Color, hexColorToInt } from '@alyle/ui/color';
import { _STYLE_MAP } from './theme/style';
import { StyleCollection } from './parse';
var LyStyleUtils = /** @class */ (function () {
    function LyStyleUtils() {
        /** Returns top */
        this.above = 'top';
        /** Returns bottom */
        this.below = 'bottom';
    }
    Object.defineProperty(LyStyleUtils.prototype, "before", {
        /** Returns left or right according to the direction */
        get: function () {
            return this.getDirection(DirAlias.before);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyStyleUtils.prototype, "after", {
        /** Returns left or right according to the direction */
        get: function () {
            return this.getDirection(DirAlias.after);
        },
        enumerable: true,
        configurable: true
    });
    LyStyleUtils.prototype.pxToRem = function (value) {
        var size = this.typography.fontSize / 14;
        return value / this.typography.htmlFontSize * size + "rem";
    };
    LyStyleUtils.prototype.colorOf = function (value, optional) {
        if (typeof value === 'number') {
            return new Color(value);
        }
        if (value.includes('#') && value.length === 7) {
            return new Color(hexColorToInt(value));
        }
        var color = get(this, value, optional);
        if (color) {
            return color;
        }
        /** Create invalid color */
        return new Color();
    };
    LyStyleUtils.prototype.getBreakpoint = function (key) {
        return "@media " + (this.breakpoints[key] || key);
    };
    LyStyleUtils.prototype.selectorsOf = function (styles) {
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
        else if (val === 'above') {
            return 'top';
        }
        else if (val === 'below') {
            return 'bottom';
        }
        return val;
    };
    return LyStyleUtils;
}());
export { LyStyleUtils };
export var Dir;
(function (Dir) {
    Dir["rtl"] = "rtl";
    Dir["ltr"] = "ltr";
})(Dir || (Dir = {}));
export var DirAlias;
(function (DirAlias) {
    DirAlias["before"] = "before";
    DirAlias["after"] = "after";
})(DirAlias || (DirAlias = {}));
export var DirPosition;
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
    if (path === 'transparent') {
        return new Color(0, 0, 0, 0);
    }
    var _path = path instanceof Array ? path : path.split(':');
    for (var i = 0; i < _path.length; i++) {
        var posibleOb = obj[_path[i]];
        if (posibleOb) {
            obj = posibleOb;
        }
        else {
            /** if not exist */
            return new Color();
        }
    }
    if (obj instanceof Color) {
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
export function eachMedia(str, fn, withStyleCollection) {
    var styleCollection;
    if (withStyleCollection) {
        styleCollection = new StyleCollection();
    }
    if (typeof str === 'string') {
        var values = str.split(/\s/g);
        for (var index = 0; index < values.length; index++) {
            var valItem = values[index].split(/\@/g);
            var strValue = valItem.shift();
            var len = valItem.length;
            var value = isNaN(+strValue) ? strValue : +strValue;
            if (len) {
                for (var j = 0; j < len; j++) {
                    var st = fn.call(undefined, value, valItem[j], index);
                    if (styleCollection) {
                        styleCollection.add(st);
                    }
                }
            }
            else {
                var st = fn.call(undefined, value, null, index);
                if (styleCollection) {
                    styleCollection.add(st);
                }
            }
        }
    }
    else {
        var st = fn.call(undefined, str, null, 0);
        if (styleCollection) {
            styleCollection.add(st);
        }
    }
    if (styleCollection) {
        return styleCollection.css;
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
export function mergeDeep(target) {
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
    return mergeDeep.apply(void 0, tslib_1.__spread([target], sources));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBaUIsTUFBTSxTQUFTLENBQUM7QUFFekQ7SUFBQTtRQXVDRSxrQkFBa0I7UUFDVCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXZCLHFCQUFxQjtRQUNaLFVBQUssR0FBRyxRQUFRLENBQUM7SUE2QzVCLENBQUM7SUExREMsc0JBQUksZ0NBQU07UUFEVix1REFBdUQ7YUFDdkQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksK0JBQUs7UUFEVCx1REFBdUQ7YUFDdkQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBUUQsOEJBQU8sR0FBUCxVQUFRLEtBQWE7UUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzNDLE9BQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksUUFBSyxDQUFDO0lBQzdELENBQUM7SUFDRCw4QkFBTyxHQUFQLFVBQVEsS0FBc0IsRUFBRSxRQUFpQjtRQUMvQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FB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QkFBaUIsRUFBakIsSUFBaUI7UUFBakIsZ0NBQWlCOztJQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDdkMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRS9CLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4QyxLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLEdBQUcsSUFBRyxFQUFFLE1BQUcsQ0FBQztpQkFBRTtnQkFDM0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLEdBQUcsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQzthQUMvQztTQUNGO0tBQ0Y7SUFFRCxPQUFPLFNBQVMsaUNBQUMsTUFBTSxHQUFLLE9BQU8sR0FBRTtBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IsIGhleENvbG9yVG9JbnQgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuaW1wb3J0IHsgX1NUWUxFX01BUCwgU3R5bGVzLCBMeUNsYXNzZXMgfSBmcm9tICcuL3RoZW1lL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29sbGVjdGlvbiwgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJy4vcGFyc2UnO1xuXG5leHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBicmVha3BvaW50czoge1xuICAgIFhTbWFsbDogc3RyaW5nLFxuICAgIFNtYWxsOiBzdHJpbmcsXG4gICAgTWVkaXVtOiBzdHJpbmcsXG4gICAgTGFyZ2U6IHN0cmluZyxcbiAgICBYTGFyZ2U6IHN0cmluZyxcblxuICAgIEhhbmRzZXQ6IHN0cmluZyxcbiAgICBUYWJsZXQ6IHN0cmluZyxcbiAgICBXZWI6IHN0cmluZyxcblxuICAgIEhhbmRzZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFRhYmxldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgV2ViUG9ydHJhaXQ6IHN0cmluZyxcblxuICAgIEhhbmRzZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBUYWJsZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBXZWJMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgZGlyZWN0aW9uOiBEaXI7XG5cbiAgLyoqIFJldHVybnMgbGVmdCBvciByaWdodCBhY2NvcmRpbmcgdG8gdGhlIGRpcmVjdGlvbiAqL1xuICBnZXQgYmVmb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpcmVjdGlvbihEaXJBbGlhcy5iZWZvcmUpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgbGVmdCBvciByaWdodCBhY2NvcmRpbmcgdG8gdGhlIGRpcmVjdGlvbiAqL1xuICBnZXQgYWZ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmFmdGVyKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRvcCAqL1xuICByZWFkb25seSBhYm92ZSA9ICd0b3AnO1xuXG4gIC8qKiBSZXR1cm5zIGJvdHRvbSAqL1xuICByZWFkb25seSBiZWxvdyA9ICdib3R0b20nO1xuXG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZyB8IG51bWJlciwgb3B0aW9uYWw/OiBzdHJpbmcpOiBDb2xvciB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBuZXcgQ29sb3IodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJyMnKSAmJiB2YWx1ZS5sZW5ndGggPT09IDcpIHtcbiAgICAgIHJldHVybiBuZXcgQ29sb3IoaGV4Q29sb3JUb0ludCh2YWx1ZSkpO1xuICAgIH1cbiAgICBjb25zdCBjb2xvciA9IGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICAvKiogQ3JlYXRlIGludmFsaWQgY29sb3IgKi9cbiAgICByZXR1cm4gbmV3IENvbG9yKCk7XG4gIH1cbiAgZ2V0QnJlYWtwb2ludChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBgQG1lZGlhICR7dGhpcy5icmVha3BvaW50c1trZXldIHx8IGtleX1gO1xuICB9XG5cbiAgc2VsZWN0b3JzT2Y8VD4oc3R5bGVzOiBUICYgU3R5bGVzKTogTHlDbGFzc2VzPFQ+IHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IF9TVFlMRV9NQVAuZ2V0KHN0eWxlcyk7XG4gICAgaWYgKHN0eWxlTWFwKSB7XG4gICAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGlzLm5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2xhc3NlcyBub3QgZm91bmQnKTtcbiAgICB9XG4gIH1cblxuICBnZXREaXJlY3Rpb24odmFsOiBEaXJBbGlhcyB8ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdhYm92ZScgfCAnYmVsb3cnKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuYmVmb3JlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gRGlyQWxpYXMuYWZ0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSAnYWJvdmUnKSB7XG4gICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09ICdiZWxvdycpIHtcbiAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBEaXIge1xuICBydGwgPSAncnRsJyxcbiAgbHRyID0gJ2x0cidcbn1cbmV4cG9ydCBlbnVtIERpckFsaWFzIHtcbiAgYmVmb3JlID0gJ2JlZm9yZScsXG4gIGFmdGVyID0gJ2FmdGVyJ1xufVxuZXhwb3J0IGVudW0gRGlyUG9zaXRpb24ge1xuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuLyoqXG4gKiBnZXQgY29sb3Igb2Ygb2JqZWN0XG4gKiBAcGFyYW0gb2JqIG9iamVjdFxuICogQHBhcmFtIHBhdGggcGF0aFxuICogQHBhcmFtIG9wdGlvbmFsIGdldCBvcHRpb25hbCB2YWx1ZSwgaWYgbm90IGV4aXN0IHJldHVybiBkZWZhdWx0IGlmIG5vdCBpcyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBzdHJpbmdbXSB8IHN0cmluZywgb3B0aW9uYWw/OiBzdHJpbmcpOiBDb2xvciB7XG4gIGlmIChwYXRoID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAwKTtcbiAgfVxuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBuZXcgQ29sb3IoKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgIHJldHVybiBvYmpbb3B0aW9uYWxdIHx8IG9ialsnZGVmYXVsdCddO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpbJ2RlZmF1bHQnXTtcbiAgfVxuICAvLyByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG4vLyBleHBvcnQgdHlwZSBNZWRpYVF1ZXJ5QXJyYXkgPSAoXG4vLyAgIHN0cmluZyB8IG51bWJlciB8IChudW1iZXIgfCBzdHJpbmd8IChzdHJpbmcgfCBudW1iZXIpW10pW11cbi8vIClbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShcbiAgc3RyOiBzdHJpbmcgfCBudW1iZXIsXG4gIGZuOiAoKHZhbDogc3RyaW5nIHwgbnVtYmVyLCBtZWRpYTogc3RyaW5nIHwgbnVsbCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZClcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKFxuICBzdHI6IHN0cmluZyB8IG51bWJlcixcbiAgZm46ICgodmFsOiBzdHJpbmcgfCBudW1iZXIsIG1lZGlhOiBzdHJpbmcgfCBudWxsLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSxcbiAgc3R5bGVDb2xsZWN0aW9uOiBib29sZWFuXG4pOiBTdHlsZVRlbXBsYXRlO1xuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShcbiAgc3RyOiBzdHJpbmcgfCBudW1iZXIsXG4gIGZuOiAoKHZhbDogc3RyaW5nIHwgbnVtYmVyLCBtZWRpYTogc3RyaW5nIHwgbnVsbCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCksXG4gIHdpdGhTdHlsZUNvbGxlY3Rpb24/OiBib29sZWFuXG4pOiBTdHlsZVRlbXBsYXRlIHwgdm9pZCB7XG4gIGxldCBzdHlsZUNvbGxlY3Rpb246IFN0eWxlQ29sbGVjdGlvbiB8IHVuZGVmaW5lZDtcbiAgaWYgKHdpdGhTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICBzdHlsZUNvbGxlY3Rpb24gPSBuZXcgU3R5bGVDb2xsZWN0aW9uKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCBzdHJWYWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKSE7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGNvbnN0IHZhbHVlID0gaXNOYU4oK3N0clZhbHVlKSA/IHN0clZhbHVlIDogK3N0clZhbHVlO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgc3QgPSBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHZhbEl0ZW1bal0sIGluZGV4KTtcbiAgICAgICAgICBpZiAoc3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBzdHlsZUNvbGxlY3Rpb24uYWRkKHN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0ID0gZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCBudWxsLCBpbmRleCk7XG4gICAgICAgIGlmIChzdHlsZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBzdHlsZUNvbGxlY3Rpb24uYWRkKHN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdCA9IGZuLmNhbGwodW5kZWZpbmVkLCBzdHIsIG51bGwsIDApO1xuICAgIGlmIChzdHlsZUNvbGxlY3Rpb24pIHtcbiAgICAgIHN0eWxlQ29sbGVjdGlvbi5hZGQoc3QpO1xuICAgIH1cbiAgfVxuICBpZiAoc3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHN0eWxlQ29sbGVjdGlvbi5jc3M7XG4gIH1cbn1cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iXX0=