import * as tslib_1 from "tslib";
import { Color, hexColorToInt } from '@alyle/ui/color';
import { _STYLE_MAP } from './theme/style';
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
export function eachMedia(str, fn, styleCollection) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHOUQ7SUFBQTtRQXVDRSxrQkFBa0I7UUFDVCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXZCLHFCQUFxQjtRQUNaLFVBQUssR0FBRyxRQUFRLENBQUM7SUE2QzVCLENBQUM7SUExREMsc0JBQUksZ0NBQU07UUFEVix1REFBdUQ7YUFDdkQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksK0JBQUs7UUFEVCx1REFBdUQ7YUFDdkQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBUUQsOEJBQU8sR0FBUCxVQUFRLEtBQWE7UUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzNDLE9BQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksUUFBSyxDQUFDO0lBQzdELENBQUM7SUFDRCw4QkFBTyxHQUFQLFVBQVEsS0FBc0IsRUFBRSxRQUFpQjtRQUMvQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdD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RUFBRSxDQUFDO0lBRS9CLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4QyxLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLEdBQUcsSUFBRyxFQUFFLE1BQUcsQ0FBQztpQkFBRTtnQkFDM0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLEdBQUcsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQzthQUMvQztTQUNGO0tBQ0Y7SUFFRCxPQUFPLFNBQVMsaUNBQUMsTUFBTSxHQUFLLE9BQU8sR0FBRTtBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IsIGhleENvbG9yVG9JbnQgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuaW1wb3J0IHsgX1NUWUxFX01BUCwgU3R5bGVzLCBMeUNsYXNzZXMgfSBmcm9tICcuL3RoZW1lL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29sbGVjdGlvbiwgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJy4vcGFyc2UnO1xuXG5leHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBicmVha3BvaW50czoge1xuICAgIFhTbWFsbDogc3RyaW5nLFxuICAgIFNtYWxsOiBzdHJpbmcsXG4gICAgTWVkaXVtOiBzdHJpbmcsXG4gICAgTGFyZ2U6IHN0cmluZyxcbiAgICBYTGFyZ2U6IHN0cmluZyxcblxuICAgIEhhbmRzZXQ6IHN0cmluZyxcbiAgICBUYWJsZXQ6IHN0cmluZyxcbiAgICBXZWI6IHN0cmluZyxcblxuICAgIEhhbmRzZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFRhYmxldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgV2ViUG9ydHJhaXQ6IHN0cmluZyxcblxuICAgIEhhbmRzZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBUYWJsZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBXZWJMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgZGlyZWN0aW9uOiBEaXI7XG5cbiAgLyoqIFJldHVybnMgbGVmdCBvciByaWdodCBhY2NvcmRpbmcgdG8gdGhlIGRpcmVjdGlvbiAqL1xuICBnZXQgYmVmb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpcmVjdGlvbihEaXJBbGlhcy5iZWZvcmUpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgbGVmdCBvciByaWdodCBhY2NvcmRpbmcgdG8gdGhlIGRpcmVjdGlvbiAqL1xuICBnZXQgYWZ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmFmdGVyKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRvcCAqL1xuICByZWFkb25seSBhYm92ZSA9ICd0b3AnO1xuXG4gIC8qKiBSZXR1cm5zIGJvdHRvbSAqL1xuICByZWFkb25seSBiZWxvdyA9ICdib3R0b20nO1xuXG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZyB8IG51bWJlciwgb3B0aW9uYWw/OiBzdHJpbmcpOiBDb2xvciB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBuZXcgQ29sb3IodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJyMnKSAmJiB2YWx1ZS5sZW5ndGggPT09IDcpIHtcbiAgICAgIHJldHVybiBuZXcgQ29sb3IoaGV4Q29sb3JUb0ludCh2YWx1ZSkpO1xuICAgIH1cbiAgICBjb25zdCBjb2xvciA9IGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICAvKiogQ3JlYXRlIGludmFsaWQgY29sb3IgKi9cbiAgICByZXR1cm4gbmV3IENvbG9yKCk7XG4gIH1cbiAgZ2V0QnJlYWtwb2ludChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBgQG1lZGlhICR7dGhpcy5icmVha3BvaW50c1trZXldIHx8IGtleX1gO1xuICB9XG5cbiAgc2VsZWN0b3JzT2Y8VD4oc3R5bGVzOiBUICYgU3R5bGVzKTogTHlDbGFzc2VzPFQ+IHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IF9TVFlMRV9NQVAuZ2V0KHN0eWxlcyk7XG4gICAgaWYgKHN0eWxlTWFwKSB7XG4gICAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGlzLm5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2xhc3NlcyBub3QgZm91bmQnKTtcbiAgICB9XG4gIH1cblxuICBnZXREaXJlY3Rpb24odmFsOiBEaXJBbGlhcyB8ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdhYm92ZScgfCAnYmVsb3cnKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuYmVmb3JlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gRGlyQWxpYXMuYWZ0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSAnYWJvdmUnKSB7XG4gICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09ICdiZWxvdycpIHtcbiAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBEaXIge1xuICBydGwgPSAncnRsJyxcbiAgbHRyID0gJ2x0cidcbn1cbmV4cG9ydCBlbnVtIERpckFsaWFzIHtcbiAgYmVmb3JlID0gJ2JlZm9yZScsXG4gIGFmdGVyID0gJ2FmdGVyJ1xufVxuZXhwb3J0IGVudW0gRGlyUG9zaXRpb24ge1xuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuLyoqXG4gKiBnZXQgY29sb3Igb2Ygb2JqZWN0XG4gKiBAcGFyYW0gb2JqIG9iamVjdFxuICogQHBhcmFtIHBhdGggcGF0aFxuICogQHBhcmFtIG9wdGlvbmFsIGdldCBvcHRpb25hbCB2YWx1ZSwgaWYgbm90IGV4aXN0IHJldHVybiBkZWZhdWx0IGlmIG5vdCBpcyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBzdHJpbmdbXSB8IHN0cmluZywgb3B0aW9uYWw/OiBzdHJpbmcpOiBDb2xvciB7XG4gIGlmIChwYXRoID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAwKTtcbiAgfVxuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBuZXcgQ29sb3IoKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgIHJldHVybiBvYmpbb3B0aW9uYWxdIHx8IG9ialsnZGVmYXVsdCddO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpbJ2RlZmF1bHQnXTtcbiAgfVxuICAvLyByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG4vLyBleHBvcnQgdHlwZSBNZWRpYVF1ZXJ5QXJyYXkgPSAoXG4vLyAgIHN0cmluZyB8IG51bWJlciB8IChudW1iZXIgfCBzdHJpbmd8IChzdHJpbmcgfCBudW1iZXIpW10pW11cbi8vIClbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShcbiAgc3RyOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGZuOiAoKHZhbDogc3RyaW5nIHwgbnVtYmVyLCBtZWRpYTogc3RyaW5nIHwgbnVsbCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZClcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKFxuICBzdHI6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgZm46ICgodmFsOiBzdHJpbmcgfCBudW1iZXIsIG1lZGlhOiBzdHJpbmcgfCBudWxsLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSxcbiAgc3R5bGVDb2xsZWN0aW9uOiBTdHlsZUNvbGxlY3Rpb25cbik6IFN0eWxlVGVtcGxhdGU7XG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKFxuICBzdHI6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgZm46ICgodmFsOiBzdHJpbmcgfCBudW1iZXIsIG1lZGlhOiBzdHJpbmcgfCBudWxsLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSxcbiAgc3R5bGVDb2xsZWN0aW9uPzogU3R5bGVDb2xsZWN0aW9uXG4pOiBTdHlsZVRlbXBsYXRlIHwgdm9pZCB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3Qgc3RyVmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCkhO1xuICAgICAgY29uc3QgbGVuID0gdmFsSXRlbS5sZW5ndGg7XG4gICAgICBjb25zdCB2YWx1ZSA9IGlzTmFOKCtzdHJWYWx1ZSkgPyBzdHJWYWx1ZSA6ICtzdHJWYWx1ZTtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGNvbnN0IHN0ID0gZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCBpbmRleCk7XG4gICAgICAgICAgaWYgKHN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgc3R5bGVDb2xsZWN0aW9uLmFkZChzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdCA9IGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgbnVsbCwgaW5kZXgpO1xuICAgICAgICBpZiAoc3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgc3R5bGVDb2xsZWN0aW9uLmFkZChzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3QgPSBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCBudWxsLCAwKTtcbiAgICBpZiAoc3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICBzdHlsZUNvbGxlY3Rpb24uYWRkKHN0KTtcbiAgICB9XG4gIH1cbiAgaWYgKHN0eWxlQ29sbGVjdGlvbikge1xuICAgIHJldHVybiBzdHlsZUNvbGxlY3Rpb24uY3NzO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFU+KHRhcmdldDogVCwgc291cmNlOiBVKTogVCAmIFU7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFY+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogVik6IFQgJiBVICYgVjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgViwgVz4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWLCBzb3VyY2UzOiBXKTogVCAmIFUgJiBWICYgVztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0OiBvYmplY3QsIC4uLnNvdXJjZXM6IGFueVtdKTogYW55O1xuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gLi4uc291cmNlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSkge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7IHJldHVybiB0YXJnZXQ7IH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgeyBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7IH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuIl19