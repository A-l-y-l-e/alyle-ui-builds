import * as tslib_1 from "tslib";
var LINE_FEED_REGEX = function () { return /(\n?[^\n]+\n?)/g; };
var ɵ0 = LINE_FEED_REGEX;
var AMPERSAND_REGEX = function () { return /&/g; };
var ɵ1 = AMPERSAND_REGEX;
var STYLE_TEMPLATE_REGEX = function () { return /StyleTemplate\[[\w]+\]/g; };
var ɵ2 = STYLE_TEMPLATE_REGEX;
var id = 0;
/**
 * Transform a lyl style block to CSS
 *
 * Allowed blocks:
 *
 * // Simple
 * const BUTTON_STYLE = lyl `{
 *   padding: 8px 12px
 *   font-size: 14px
 *   border-radius: 9px
 *   border: 1px solid #e0e0e0
 * }`
 *
 * // Nesting
 * const style = lyl `{
 *   ul > {
 *     li {
 *       list-style-type: none;
 *     }
 *   }
 *   p {
 *     ~ {
 *       span {
 *         opacity: 0.8;
 *       }
 *     }
 *   }
 * }`
 *
 */
var LylParse = /** @class */ (function () {
    function LylParse(_template, _className) {
        if (_className === void 0) { _className = '${className}'; }
        this._template = _template;
        this._className = _className;
    }
    LylParse.prototype.toCss = function () {
        var _this = this;
        var selectors = [];
        var selector = null;
        var rules = new Map();
        this._template
            .replace(/(\/\/\s[^\n\r]*(?:[\n\r]+|$))/g, '')
            .replace(/,\n/g, ',')
            .replace(LINE_FEED_REGEX(), function (_ex, fullLine) {
            fullLine = fullLine.trim();
            if (fullLine.endsWith('{')) {
                if (selectors.length === 0) {
                    selectors.push([_this._className]);
                    selector = selectors[0][0];
                }
                else {
                    var line_1 = fullLine.slice(0, fullLine.length - 1).trim();
                    selectors.push(line_1
                        .split(',')
                        .map(function (_) { return _.trim(); }));
                    selector = _this._resolveSelectors(selectors);
                    if (line_1.includes('@')) {
                        if (!rules.has(line_1)) {
                            rules.set(line_1, []);
                        }
                    }
                }
                if (!rules.has(selector)) {
                    rules.set(selector, []);
                }
            }
            else if (fullLine.length === 1 && fullLine.endsWith('}')) {
                selectors.pop();
                if (selectors.length) {
                    selector = _this._resolveSelectors(selectors);
                    if (!rules.has(selector)) {
                        rules.set(selector, []);
                    }
                }
            }
            else if (fullLine.startsWith('/* >> ds')) {
                selector = _this._resolveSelectors(selectors);
                var lin = fullLine;
                // Ignore compiled css
                rules.get(selector).push(lin);
                // fullLine = lin;
                // /** For non LylModule< */else {
                //   fullLine = `\${(${lin.slice(2, lin.length - 1)})(\`${selector}\`)}`;
                //   rules.set(createUniqueCommentSelector('ds'), fullLine);
                // } /** for non LylModule>  */
            }
            else if (fullLine.startsWith('...')) {
                // for non LylModule>
                var content = fullLine.slice(3);
                selector = _this._resolveSelectors(selectors);
                // Ignore compiled css
                rules.get(selector).push("" + createUniqueCommentSelector('cc') + content);
            }
            else {
                if (fullLine) {
                    if (fullLine.includes('undefined') || fullLine.startsWith('// ')) {
                        return '';
                    }
                    if (fullLine.endsWith(';')) {
                        throw new Error("Do not require semicolon in [" + fullLine + "]");
                    }
                    if (fullLine.includes(': ')) {
                        fullLine = fullLine.replace(': ', ':');
                    }
                    fullLine += ';';
                    rules.get(selector).push(fullLine);
                }
            }
            return '';
        });
        // Join media queries & keyframes
        rules.forEach(function (val, key) {
            var matchArray = key.match(/(@[^\${]*(?:\${[^{]*)*){/);
            if (matchArray) {
                var media = matchArray[1];
                if (media !== key && val.length) {
                    var after = rules.get(media);
                    var newValue = after + key.replace(media + '{', '') + ("{" + val.join(';') + "}");
                    rules.set(media, [newValue]);
                    rules.delete(key);
                }
            }
        });
        return Array.from(rules.entries())
            .filter(function (rule) { return rule[1]; })
            .map(function (rule) {
            var sel = rule[0];
            var contents = rule[1];
            var css = [];
            var contentRendered = [];
            var set = new Set();
            for (var index = 0; index < contents.length; index++) {
                var content = contents[index];
                if (content) {
                    if (content.startsWith('/* >> ds')) {
                        contentRendered.push(content.replace(/\|\|\&\|\|/g, sel));
                        set.add(contentRendered);
                    }
                    else if (content.startsWith('/* >> cc')) {
                        content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
                        var expression = content.slice(2, content.length - 1);
                        expression = "styleTemplateToString((" + expression + "), `" + sel + "`)";
                        contentRendered.push("${" + expression + "}");
                        set.add(contentRendered);
                    }
                    else {
                        // css += `${sel}{${content}}`;
                        css.push(content);
                        set.add(css);
                    }
                }
            }
            return Array.from(set).map(function (_) {
                if (_ === css) {
                    return css.length
                        ? sel + "{" + css.join('') + "}"
                        : '';
                }
                else {
                    return _.join('');
                }
            }).join('');
            // return (css
            //   ? `${sel}{${css}}`
            //   :  '') + contentRendered;
            // if (content.startsWith('/* >> ds')) {
            //   return content.replace(/\|\|\&\|\|/g, sel);
            // }
            // if (content.startsWith('/* >> cc')) {
            //   content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
            //   let variable = content.slice(2, content.length - 1);
            //   variable = `styleTemplateToString((${variable}), \`${sel}\`)`;
            //   return `\${${variable}}`;
            // }
            // // for non LylModule>
            // if (sel.startsWith('@')) {
            //   return `${sel}{${rule[1]}}`;
            // }
            // return `${sel}{${content}}`;
        }).join('');
    };
    LylParse.prototype._resolveSelectors = function (selectors) {
        var media = null;
        var sel = selectors
            .map(function (_) { return _.filter(function (__) {
            if (__.startsWith('@')) {
                // save media
                media = __;
                return false;
            }
            return __;
        }); })
            .filter(function (_) { return _.length; })
            .reduce(function (prev, current) {
            var result = prev.map(function (item) { return current.map(function (cu) {
                if (cu.includes('&')) {
                    return cu.replace(AMPERSAND_REGEX(), item);
                }
                return item + " " + cu;
            }); });
            return Array.prototype.concat.apply([], result);
        })
            .join(',');
        if (media) {
            return media + "{" + sel;
        }
        return sel;
    };
    return LylParse;
}());
export { LylParse };
export function lyl(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    return function (className) {
        var result = '';
        var dsMap = new Map();
        for (var i = 0; i < placeholders.length; i++) {
            var placeholder = placeholders[i];
            result += literals[i];
            if (result.endsWith('...')) {
                result = result.slice(0, result.length - 3);
                if (typeof placeholder === 'function' || placeholder instanceof StyleCollection) {
                    var newID = createUniqueId();
                    dsMap.set(newID, placeholder);
                    result += newID;
                }
            }
            else {
                result += placeholder;
            }
        }
        // add the last literal
        result += literals[literals.length - 1];
        var css = result.replace(STYLE_TEMPLATE_REGEX(), function (str) {
            if (dsMap.has(str)) {
                var fn = dsMap.get(str);
                var template = void 0;
                if (fn instanceof StyleCollection) {
                    template = fn.css;
                }
                else {
                    template = fn;
                }
                return "" + createUniqueCommentSelector('ds') + template('||&||');
            }
            return '';
        });
        return new LylParse(css, className).toCss();
    };
}
function createUniqueId() {
    return "StyleTemplate[__" + (id++).toString(36) + "]";
}
function createUniqueCommentSelector(text) {
    if (text === void 0) { text = 'id'; }
    return "/* >> " + text + " -- " + Math.floor(new Date().valueOf() * Math.random()).toString(36) + " */";
}
var StyleCollection = /** @class */ (function () {
    function StyleCollection() {
        var templates = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            templates[_i] = arguments[_i];
        }
        this._templates = templates;
        this.css = this.css.bind(this);
    }
    StyleCollection.prototype.add = function () {
        var _a;
        var templates = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            templates[_i] = arguments[_i];
        }
        // return new StyleCollection(...[...this._templates, ...templates]);
        (_a = this._templates).push.apply(_a, tslib_1.__spread(templates));
        return this;
    };
    /** Transform style */
    StyleCollection.prototype.setTransformer = function (transformer) {
        this._transformer = transformer;
        return this;
    };
    /**
     * @return StyleTemplate
     * @docs-private
     */
    StyleCollection.prototype.css = function (className) {
        var lin = '';
        var templates = this._templates;
        for (var index = 0; index < templates.length; index++) {
            var template = void 0;
            if (this._transformer) {
                template = ((this._transformer(templates[index])));
            }
            else {
                template = templates[index];
            }
            lin += template(className);
        }
        return lin;
    };
    return StyleCollection;
}());
export { StyleCollection };
/**
 * Simple object check.
 * @param item
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item)) && !(item instanceof StyleCollection);
}
export function mergeThemes(target) {
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
                    if (source[key].constructor.name === 'Object') {
                        target[key] = {};
                    }
                    else {
                        // if is a class
                        target[key] = source[key];
                    }
                }
                mergeThemes(target[key], source[key]);
            }
            else {
                var targetKey = target[key];
                var sourceKey = source[key];
                // Merge styles
                if (targetKey instanceof StyleCollection && typeof sourceKey === 'function') {
                    target[key] = target[key].add(sourceKey);
                }
                else {
                    target[key] = source[key];
                }
            }
        }
    }
    return mergeThemes.apply(void 0, tslib_1.__spread([target], sources));
}
export function styleTemplateToString(fn, className) {
    if (fn instanceof StyleCollection) {
        return fn.css(className);
    }
    return fn ? (fn)(className) : '';
}
// export function normalizeStyleTemplate(
//   fn: StyleTemplate
//   ) {
//   if (fn.length) {
//     return fn as StyleTemplate;
//   } else {
//     return (fn as (() => StyleTemplate))();
//   }
// }
var StringIdGenerator = /** @class */ (function () {
    function StringIdGenerator(chars) {
        if (chars === void 0) { chars = 'abcdefghijklmnopqrstuvwxyz'; }
        this._chars = chars;
        this._nextId = [0];
    }
    StringIdGenerator.prototype.next = function () {
        var e_1, _a;
        var r = [];
        try {
            for (var _b = tslib_1.__values(this._nextId), _c = _b.next(); !_c.done; _c = _b.next()) {
                var char = _c.value;
                r.unshift(this._chars[char]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._increment();
        return r.join('');
    };
    StringIdGenerator.prototype._increment = function () {
        for (var i = 0; i < this._nextId.length; i++) {
            var val = ++this._nextId[i];
            if (val >= this._chars.length) {
                this._nextId[i] = 0;
            }
            else {
                return;
            }
        }
        this._nextId.push(0);
    };
    return StringIdGenerator;
}());
export { StringIdGenerator };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDOztBQUM3RCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBbUpDO1FBbEpDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFB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LENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBMSU5FX0ZFRURfUkVHRVggPSAoKSA9PiAvKFxcbj9bXlxcbl0rXFxuPykvZztcbmNvbnN0IEFNUEVSU0FORF9SRUdFWCA9ICgpID0+IC8mL2c7XG5jb25zdCBTVFlMRV9URU1QTEFURV9SRUdFWCA9ICgpID0+IC9TdHlsZVRlbXBsYXRlXFxbW1xcd10rXFxdL2c7XG5sZXQgaWQ6IG51bWJlciA9IDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgbHlsIHN0eWxlIGJsb2NrIHRvIENTU1xuICpcbiAqIEFsbG93ZWQgYmxvY2tzOlxuICpcbiAqIC8vIFNpbXBsZVxuICogY29uc3QgQlVUVE9OX1NUWUxFID0gbHlsIGB7XG4gKiAgIHBhZGRpbmc6IDhweCAxMnB4XG4gKiAgIGZvbnQtc2l6ZTogMTRweFxuICogICBib3JkZXItcmFkaXVzOiA5cHhcbiAqICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMFxuICogfWBcbiAqXG4gKiAvLyBOZXN0aW5nXG4gKiBjb25zdCBzdHlsZSA9IGx5bCBge1xuICogICB1bCA+IHtcbiAqICAgICBsaSB7XG4gKiAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gKiAgICAgfVxuICogICB9XG4gKiAgIHAge1xuICogICAgIH4ge1xuICogICAgICAgc3BhbiB7XG4gKiAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqIH1gXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTHlsUGFyc2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcgPSAnJHtjbGFzc05hbWV9J1xuICApIHsgfVxuXG4gIHRvQ3NzKCkge1xuICAgIGNvbnN0IHNlbGVjdG9yczogKHN0cmluZ1tdKVtdID0gW107XG4gICAgbGV0IHNlbGVjdG9yOiBudWxsIHwgc3RyaW5nID0gbnVsbDtcbiAgICBjb25zdCBydWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoLyhcXC9cXC9cXHNbXlxcblxccl0qKD86W1xcblxccl0rfCQpKS9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC8sXFxuL2csICcsJylcbiAgICAgIC5yZXBsYWNlKExJTkVfRkVFRF9SRUdFWCgpLCAoX2V4LCBmdWxsTGluZTogc3RyaW5nKSA9PiB7XG4gICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnRyaW0oKTtcblxuICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCd7JykpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChbdGhpcy5fY2xhc3NOYW1lXSk7XG4gICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvcnNbMF1bMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGluZV8xID0gZnVsbExpbmUuc2xpY2UoMCwgZnVsbExpbmUubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFxuICAgICAgICAgICAgbGluZV8xXG4gICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgLm1hcChfID0+IF8udHJpbSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgICBpZiAobGluZV8xLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgIGlmICghcnVsZXMuaGFzKGxpbmVfMSkpIHtcbiAgICAgICAgICAgICAgcnVsZXMuc2V0KGxpbmVfMSwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUubGVuZ3RoID09PSAxICYmIGZ1bGxMaW5lLmVuZHNXaXRoKCd9JykpIHtcbiAgICAgICAgc2VsZWN0b3JzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAgIGlmICghcnVsZXMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIGNvbnN0IGxpbiA9IGZ1bGxMaW5lO1xuXG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChsaW4pO1xuICAgICAgICAvLyBmdWxsTGluZSA9IGxpbjtcbiAgICAgICAgLy8gLyoqIEZvciBub24gTHlsTW9kdWxlPCAqL2Vsc2Uge1xuICAgICAgICAvLyAgIGZ1bGxMaW5lID0gYFxcJHsoJHtsaW4uc2xpY2UoMiwgbGluLmxlbmd0aCAtIDEpfSkoXFxgJHtzZWxlY3Rvcn1cXGApfWA7XG4gICAgICAgIC8vICAgcnVsZXMuc2V0KGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKSwgZnVsbExpbmUpO1xuICAgICAgICAvLyB9IC8qKiBmb3Igbm9uIEx5bE1vZHVsZT4gICovXG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy4uLicpKSB7XG4gICAgICAgIC8vIGZvciBub24gTHlsTW9kdWxlPlxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnVsbExpbmUuc2xpY2UoMyk7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAvLyBJZ25vcmUgY29tcGlsZWQgY3NzXG4gICAgICAgIHJ1bGVzLmdldChzZWxlY3RvcikhLnB1c2goYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdjYycpfSR7Y29udGVudH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmdWxsTGluZSkge1xuICAgICAgICAgIGlmIChmdWxsTGluZS5pbmNsdWRlcygndW5kZWZpbmVkJykgfHwgZnVsbExpbmUuc3RhcnRzV2l0aCgnLy8gJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRG8gbm90IHJlcXVpcmUgc2VtaWNvbG9uIGluIFske2Z1bGxMaW5lfV1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCc6ICcpKSB7XG4gICAgICAgICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnJlcGxhY2UoJzogJywgJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbExpbmUgKz0gJzsnO1xuICAgICAgICAgIHJ1bGVzLmdldChzZWxlY3RvciEpIS5wdXNoKGZ1bGxMaW5lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgLy8gSm9pbiBtZWRpYSBxdWVyaWVzICYga2V5ZnJhbWVzXG4gICAgcnVsZXMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQXJyYXkgPSBrZXkubWF0Y2goLyhAW15cXCR7XSooPzpcXCR7W157XSopKil7Lyk7XG4gICAgICBpZiAobWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtZWRpYSA9IG1hdGNoQXJyYXlbMV07XG4gICAgICAgIGlmIChtZWRpYSAhPT0ga2V5ICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhZnRlciA9IHJ1bGVzLmdldChtZWRpYSkhO1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYWZ0ZXIgKyBrZXkucmVwbGFjZShtZWRpYSArICd7JywgJycpICsgYHske3ZhbC5qb2luKCc7Jyl9fWA7XG4gICAgICAgICAgcnVsZXMuc2V0KG1lZGlhLCBbbmV3VmFsdWVdKTtcbiAgICAgICAgICBydWxlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocnVsZXMuZW50cmllcygpKVxuICAgICAgLmZpbHRlcihydWxlID0+IHJ1bGVbMV0pXG4gICAgICAubWFwKHJ1bGUgPT4ge1xuICAgICAgICBjb25zdCBzZWwgPSBydWxlWzBdO1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHJ1bGVbMV07XG4gICAgICAgIGNvbnN0IGNzczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY29udGVudFJlbmRlcmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0PHN0cmluZ1tdPigpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29udGVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XG4gICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgICAgICAgY29udGVudFJlbmRlcmVkLnB1c2goY29udGVudC5yZXBsYWNlKC9cXHxcXHxcXCZcXHxcXHwvZywgc2VsKSk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY29udGVudFJlbmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBjYycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcKiA+PiBjY1teXFwvXFwqXStcXCpcXC8vZywgJycpO1xuICAgICAgICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IGNvbnRlbnQuc2xpY2UoMiwgY29udGVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKCR7ZXhwcmVzc2lvbn0pLCBcXGAke3NlbH1cXGApYDtcbiAgICAgICAgICAgICAgY29udGVudFJlbmRlcmVkLnB1c2goYFxcJHske2V4cHJlc3Npb259fWApO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBjc3MgKz0gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICAgICAgICAgIGNzcy5wdXNoKGNvbnRlbnQpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNldCkubWFwKChfKSA9PiB7XG4gICAgICAgICAgaWYgKF8gPT09IGNzcykge1xuICAgICAgICAgICAgcmV0dXJuIGNzcy5sZW5ndGhcbiAgICAgICAgICAgID8gYCR7c2VsfXske2Nzcy5qb2luKCcnKX19YFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8uam9pbignJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgLy8gcmV0dXJuIChjc3NcbiAgICAgICAgLy8gICA/IGAke3NlbH17JHtjc3N9fWBcbiAgICAgICAgLy8gICA6ICAnJykgKyBjb250ZW50UmVuZGVyZWQ7XG4gICAgICAgIC8vIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgLy8gICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9cXHxcXHxcXCZcXHxcXHwvZywgc2VsKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBjYycpKSB7XG4gICAgICAgIC8vICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gICAgICAgIC8vICAgbGV0IHZhcmlhYmxlID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAvLyAgIHZhcmlhYmxlID0gYHN0eWxlVGVtcGxhdGVUb1N0cmluZygoJHt2YXJpYWJsZX0pLCBcXGAke3NlbH1cXGApYDtcbiAgICAgICAgLy8gICByZXR1cm4gYFxcJHske3ZhcmlhYmxlfX1gO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIC8vIGZvciBub24gTHlsTW9kdWxlPlxuXG4gICAgICAgIC8vIGlmIChzZWwuc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGAke3NlbH17JHtydWxlWzFdfX1gO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiBgJHtzZWx9eyR7Y29udGVudH19YDtcbiAgICAgIH0pLmpvaW4oJycpO1xuXG4gIH1cblxuICBwcml2YXRlIF9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9yczogKHN0cmluZ1tdKVtdKSB7XG4gICAgbGV0IG1lZGlhOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBzZWwgPSBzZWxlY3RvcnNcbiAgICAgIC5tYXAoXyA9PiBfLmZpbHRlcihfXyA9PiB7XG4gICAgICAgIGlmIChfXy5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAvLyBzYXZlIG1lZGlhXG4gICAgICAgICAgbWVkaWEgPSBfXztcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fO1xuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKF8gPT4gXy5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHByZXYubWFwKGl0ZW0gPT4gY3VycmVudC5tYXAoY3UgPT4ge1xuICAgICAgICAgIGlmIChjdS5pbmNsdWRlcygnJicpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3UucmVwbGFjZShBTVBFUlNBTkRfUkVHRVgoKSwgaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtpdGVtfSAke2N1fWA7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHJlc3VsdCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywnKTtcblxuICAgIGlmIChtZWRpYSkge1xuICAgICAgcmV0dXJuIGAke21lZGlhfXske3NlbH1gO1xuICAgIH1cbiAgICByZXR1cm4gc2VsO1xuICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVUZW1wbGF0ZSA9IChjbGFzc05hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gbHlsKGxpdGVyYWxzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGxhY2Vob2xkZXJzOiAoc3RyaW5nIHwgQ29sb3IgfCBTdHlsZUNvbGxlY3Rpb24gfCBudW1iZXIgfCBTdHlsZVRlbXBsYXRlIHwgbnVsbCB8IHVuZGVmaW5lZClbXSkge1xuICByZXR1cm4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGRzTWFwID0gbmV3IE1hcDxzdHJpbmcsIChTdHlsZVRlbXBsYXRlKSB8IFN0eWxlQ29sbGVjdGlvbj4oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlaG9sZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcnNbaV07XG4gICAgICByZXN1bHQgKz0gbGl0ZXJhbHNbaV07XG4gICAgICBpZiAocmVzdWx0LmVuZHNXaXRoKCcuLi4nKSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0Lmxlbmd0aCAtIDMpO1xuICAgICAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnZnVuY3Rpb24nIHx8IHBsYWNlaG9sZGVyIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgbmV3SUQgPSBjcmVhdGVVbmlxdWVJZCgpO1xuICAgICAgICAgIGRzTWFwLnNldChuZXdJRCwgcGxhY2Vob2xkZXIpO1xuICAgICAgICAgIHJlc3VsdCArPSBuZXdJRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCB0aGUgbGFzdCBsaXRlcmFsXG4gICAgcmVzdWx0ICs9IGxpdGVyYWxzW2xpdGVyYWxzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGNzcyA9IHJlc3VsdC5yZXBsYWNlKFNUWUxFX1RFTVBMQVRFX1JFR0VYKCksIChzdHIpID0+IHtcbiAgICAgIGlmIChkc01hcC5oYXMoc3RyKSkge1xuICAgICAgICBjb25zdCBmbiA9IGRzTWFwLmdldChzdHIpITtcbiAgICAgICAgbGV0IHRlbXBsYXRlOiBTdHlsZVRlbXBsYXRlO1xuICAgICAgICBpZiAoZm4gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IGZuLmNzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IGZuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2RzJyl9JHt0ZW1wbGF0ZSgnfHwmfHwnKX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTHlsUGFyc2UoY3NzLCBjbGFzc05hbWUpLnRvQ3NzKCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXF1ZUlkKCkge1xuICByZXR1cm4gYFN0eWxlVGVtcGxhdGVbX18keyhpZCsrKS50b1N0cmluZygzNil9XWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3Rvcih0ZXh0ID0gJ2lkJykge1xuICByZXR1cm4gYC8qID4+ICR7dGV4dH0gLS0gJHtNYXRoLmZsb29yKG5ldyBEYXRlKCkudmFsdWVPZigpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpfSAqL2A7XG59XG5cbnR5cGUgVHJhbnNmb3JtZXI8VD4gPSAoc3Q6IFQpID0+IChTdHlsZVRlbXBsYXRlKTtcblxuZXhwb3J0IGNsYXNzIFN0eWxlQ29sbGVjdGlvbjxUID0gYW55PiB7XG4gIHByaXZhdGUgX3RlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdO1xuICBwcml2YXRlIF90cmFuc2Zvcm1lcj86IFRyYW5zZm9ybWVyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKC4uLnRlbXBsYXRlczogKFQpW10pXG4gIGNvbnN0cnVjdG9yKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuICAgIHRoaXMuY3NzID0gdGhpcy5jc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZCguLi50ZW1wbGF0ZXM6IChUKVtdKTogU3R5bGVDb2xsZWN0aW9uPFQ+O1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb247XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbiB8IFN0eWxlQ29sbGVjdGlvbjxUPiB7XG4gICAgLy8gcmV0dXJuIG5ldyBTdHlsZUNvbGxlY3Rpb24oLi4uWy4uLnRoaXMuX3RlbXBsYXRlcywgLi4udGVtcGxhdGVzXSk7XG4gICAgdGhpcy5fdGVtcGxhdGVzLnB1c2goLi4udGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBUcmFuc2Zvcm0gc3R5bGUgKi9cbiAgc2V0VHJhbnNmb3JtZXIodHJhbnNmb3JtZXI6IFRyYW5zZm9ybWVyPFQ+KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtZXIgPSB0cmFuc2Zvcm1lcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFN0eWxlVGVtcGxhdGVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgY3NzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGxpbiA9ICcnO1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRoaXMuX3RlbXBsYXRlcztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGVtcGxhdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IHRlbXBsYXRlOiBTdHlsZVRlbXBsYXRlO1xuICAgICAgaWYgKHRoaXMuX3RyYW5zZm9ybWVyKSB7XG4gICAgICAgIHRlbXBsYXRlID0gKCh0aGlzLl90cmFuc2Zvcm1lcih0ZW1wbGF0ZXNbaW5kZXhdIGFzIFQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wbGF0ZSA9ICh0ZW1wbGF0ZXNbaW5kZXhdIGFzIFN0eWxlVGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgbGluICs9IHRlbXBsYXRlKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW47XG4gIH1cblxufVxuXG5cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW06IGFueSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKSAmJiAhKGl0ZW0gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXM8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXM8VCwgVSwgViwgVz4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWLCBzb3VyY2UzOiBXKTogVCAmIFUgJiBWICYgVztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lcyh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXModGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBpZiAoc291cmNlW2tleV0uY29uc3RydWN0b3IubmFtZSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGlzIGEgY2xhc3NcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlVGhlbWVzKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXRLZXkgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgY29uc3Qgc291cmNlS2V5ID0gc291cmNlW2tleV07XG4gICAgICAgIC8vIE1lcmdlIHN0eWxlc1xuICAgICAgICBpZiAodGFyZ2V0S2V5IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uICYmIHR5cGVvZiBzb3VyY2VLZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9ICh0YXJnZXRba2V5XSBhcyBTdHlsZUNvbGxlY3Rpb24pLmFkZChzb3VyY2VLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VUaGVtZXModGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVGVtcGxhdGVUb1N0cmluZyhmbjogU3R5bGVUZW1wbGF0ZSB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmIChmbiBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgIHJldHVybiBmbi5jc3MoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZm4gPyAoZm4pKGNsYXNzTmFtZSkgOiAnJztcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlVGVtcGxhdGUoXG4vLyAgIGZuOiBTdHlsZVRlbXBsYXRlXG4vLyAgICkge1xuLy8gICBpZiAoZm4ubGVuZ3RoKSB7XG4vLyAgICAgcmV0dXJuIGZuIGFzIFN0eWxlVGVtcGxhdGU7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIChmbiBhcyAoKCkgPT4gU3R5bGVUZW1wbGF0ZSkpKCk7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0lkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSBfY2hhcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfbmV4dElkOiBudW1iZXJbXTtcbiAgY29uc3RydWN0b3IoY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSB7XG4gICAgdGhpcy5fY2hhcnMgPSBjaGFycztcbiAgICB0aGlzLl9uZXh0SWQgPSBbMF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IHI6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHRoaXMuX25leHRJZCkge1xuICAgICAgci51bnNoaWZ0KHRoaXMuX2NoYXJzW2NoYXJdKTtcbiAgICB9XG4gICAgdGhpcy5faW5jcmVtZW50KCk7XG4gICAgcmV0dXJuIHIuam9pbignJyk7XG4gIH1cblxuICBfaW5jcmVtZW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbmV4dElkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB2YWwgPSArK3RoaXMuX25leHRJZFtpXTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5fY2hhcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX25leHRJZFtpXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25leHRJZC5wdXNoKDApO1xuICB9XG59XG4iXX0=