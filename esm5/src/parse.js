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
            .replace(/(\/\/[^\n\r]*(?:[\n\r]+|$))/g, '')
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
                    var newValue = after + key.replace(media + '{', '') + ("{" + val + "}");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDOztBQUM3RCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBbUpDO1FBbEpDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLENBQUM7YUFDM0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFB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RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxPQUFPO2FBQ1I7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IExJTkVfRkVFRF9SRUdFWCA9ICgpID0+IC8oXFxuP1teXFxuXStcXG4/KS9nO1xuY29uc3QgQU1QRVJTQU5EX1JFR0VYID0gKCkgPT4gLyYvZztcbmNvbnN0IFNUWUxFX1RFTVBMQVRFX1JFR0VYID0gKCkgPT4gL1N0eWxlVGVtcGxhdGVcXFtbXFx3XStcXF0vZztcbmxldCBpZDogbnVtYmVyID0gMDtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBseWwgc3R5bGUgYmxvY2sgdG8gQ1NTXG4gKlxuICogQWxsb3dlZCBibG9ja3M6XG4gKlxuICogLy8gU2ltcGxlXG4gKiBjb25zdCBCVVRUT05fU1RZTEUgPSBseWwgYHtcbiAqICAgcGFkZGluZzogOHB4IDEycHhcbiAqICAgZm9udC1zaXplOiAxNHB4XG4gKiAgIGJvcmRlci1yYWRpdXM6IDlweFxuICogICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwXG4gKiB9YFxuICpcbiAqIC8vIE5lc3RpbmdcbiAqIGNvbnN0IHN0eWxlID0gbHlsIGB7XG4gKiAgIHVsID4ge1xuICogICAgIGxpIHtcbiAqICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAqICAgICB9XG4gKiAgIH1cbiAqICAgcCB7XG4gKiAgICAgfiB7XG4gKiAgICAgICBzcGFuIHtcbiAqICAgICAgICAgb3BhY2l0eTogMC44O1xuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICogfWBcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMeWxQYXJzZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcke2NsYXNzTmFtZX0nXG4gICkgeyB9XG5cbiAgdG9Dc3MoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzOiAoc3RyaW5nW10pW10gPSBbXTtcbiAgICBsZXQgc2VsZWN0b3I6IG51bGwgfCBzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0IHJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICAgIHRoaXMuX3RlbXBsYXRlXG4gICAgICAucmVwbGFjZSgvKFxcL1xcL1teXFxuXFxyXSooPzpbXFxuXFxyXSt8JCkpL2csICcnKVxuICAgICAgLnJlcGxhY2UoLyxcXG4vZywgJywnKVxuICAgICAgLnJlcGxhY2UoTElORV9GRUVEX1JFR0VYKCksIChfZXgsIGZ1bGxMaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUudHJpbSgpO1xuXG4gICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJ3snKSkge1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFt0aGlzLl9jbGFzc05hbWVdKTtcbiAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yc1swXVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsaW5lXzEgPSBmdWxsTGluZS5zbGljZSgwLCBmdWxsTGluZS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goXG4gICAgICAgICAgICBsaW5lXzFcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAubWFwKF8gPT4gXy50cmltKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcblxuICAgICAgICAgIGlmIChsaW5lXzEuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgICAgaWYgKCFydWxlcy5oYXMobGluZV8xKSkge1xuICAgICAgICAgICAgICBydWxlcy5zZXQobGluZV8xLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5sZW5ndGggPT09IDEgJiYgZnVsbExpbmUuZW5kc1dpdGgoJ30nKSkge1xuICAgICAgICBzZWxlY3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgY29uc3QgbGluID0gZnVsbExpbmU7XG5cbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGxpbik7XG4gICAgICAgIC8vIGZ1bGxMaW5lID0gbGluO1xuICAgICAgICAvLyAvKiogRm9yIG5vbiBMeWxNb2R1bGU8ICovZWxzZSB7XG4gICAgICAgIC8vICAgZnVsbExpbmUgPSBgXFwkeygke2xpbi5zbGljZSgyLCBsaW4ubGVuZ3RoIC0gMSl9KShcXGAke3NlbGVjdG9yfVxcYCl9YDtcbiAgICAgICAgLy8gICBydWxlcy5zZXQoY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpLCBmdWxsTGluZSk7XG4gICAgICAgIC8vIH0gLyoqIGZvciBub24gTHlsTW9kdWxlPiAgKi9cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmdWxsTGluZS5zbGljZSgzKTtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2NjJyl9JHtjb250ZW50fWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxMaW5lKSB7XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCd1bmRlZmluZWQnKSB8fCBmdWxsTGluZS5zdGFydHNXaXRoKCcvLyAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJzsnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEbyBub3QgcmVxdWlyZSBzZW1pY29sb24gaW4gWyR7ZnVsbExpbmV9XWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJzogJykpIHtcbiAgICAgICAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUucmVwbGFjZSgnOiAnLCAnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsTGluZSArPSAnOyc7XG4gICAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yISkhLnB1c2goZnVsbExpbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICAvLyBKb2luIG1lZGlhIHF1ZXJpZXMgJiBrZXlmcmFtZXNcbiAgICBydWxlcy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hBcnJheSA9IGtleS5tYXRjaCgvKEBbXlxcJHtdKig/OlxcJHtbXntdKikqKXsvKTtcbiAgICAgIGlmIChtYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gbWF0Y2hBcnJheVsxXTtcbiAgICAgICAgaWYgKG1lZGlhICE9PSBrZXkgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gcnVsZXMuZ2V0KG1lZGlhKSE7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhZnRlciArIGtleS5yZXBsYWNlKG1lZGlhICsgJ3snLCAnJykgKyBgeyR7dmFsfX1gO1xuICAgICAgICAgIHJ1bGVzLnNldChtZWRpYSwgW25ld1ZhbHVlXSk7XG4gICAgICAgICAgcnVsZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKHJ1bGVzLmVudHJpZXMoKSlcbiAgICAgIC5maWx0ZXIocnVsZSA9PiBydWxlWzFdKVxuICAgICAgLm1hcChydWxlID0+IHtcbiAgICAgICAgY29uc3Qgc2VsID0gcnVsZVswXTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBydWxlWzFdO1xuICAgICAgICBjb25zdCBjc3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IGNvbnRlbnRSZW5kZXJlZDogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldDxzdHJpbmdbXT4oKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGxldCBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgICAgICAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb24gPSBgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKCgke2V4cHJlc3Npb259KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGBcXCR7JHtleHByZXNzaW9ufX1gKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY3NzICs9IGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgICAgICAgICBjc3MucHVzaChjb250ZW50KTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZXQpLm1hcCgoXykgPT4ge1xuICAgICAgICAgIGlmIChfID09PSBjc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3MubGVuZ3RoXG4gICAgICAgICAgICA/IGAke3NlbH17JHtjc3Muam9pbignJyl9fWBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLmpvaW4oJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIC8vIHJldHVybiAoY3NzXG4gICAgICAgIC8vICAgPyBgJHtzZWx9eyR7Y3NzfX1gXG4gICAgICAgIC8vICAgOiAgJycpICsgY29udGVudFJlbmRlcmVkO1xuICAgICAgICAvLyBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAvLyAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcKiA+PiBjY1teXFwvXFwqXStcXCpcXC8vZywgJycpO1xuICAgICAgICAvLyAgIGxldCB2YXJpYWJsZSA9IGNvbnRlbnQuc2xpY2UoMiwgY29udGVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgLy8gICB2YXJpYWJsZSA9IGBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKCR7dmFyaWFibGV9KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgIC8vICAgcmV0dXJuIGBcXCR7JHt2YXJpYWJsZX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyAvLyBmb3Igbm9uIEx5bE1vZHVsZT5cblxuICAgICAgICAvLyBpZiAoc2VsLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBgJHtzZWx9eyR7cnVsZVsxXX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSkge1xuICAgIGxldCBtZWRpYTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2VsID0gc2VsZWN0b3JzXG4gICAgICAubWFwKF8gPT4gXy5maWx0ZXIoX18gPT4ge1xuICAgICAgICBpZiAoX18uc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgLy8gc2F2ZSBtZWRpYVxuICAgICAgICAgIG1lZGlhID0gX187XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfXztcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwcmV2Lm1hcChpdGVtID0+IGN1cnJlbnQubWFwKGN1ID0+IHtcbiAgICAgICAgICBpZiAoY3UuaW5jbHVkZXMoJyYnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1LnJlcGxhY2UoQU1QRVJTQU5EX1JFR0VYKCksIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7aXRlbX0gJHtjdX1gO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcsJyk7XG5cbiAgICBpZiAobWVkaWEpIHtcbiAgICAgIHJldHVybiBgJHttZWRpYX17JHtzZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlVGVtcGxhdGUgPSAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGx5bChsaXRlcmFsczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBsYWNlaG9sZGVyczogKHN0cmluZyB8IENvbG9yIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVtYmVyIHwgU3R5bGVUZW1wbGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpW10pIHtcbiAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBkc01hcCA9IG5ldyBNYXA8c3RyaW5nLCAoU3R5bGVUZW1wbGF0ZSkgfCBTdHlsZUNvbGxlY3Rpb24+KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZWhvbGRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2ldO1xuICAgICAgcmVzdWx0ICs9IGxpdGVyYWxzW2ldO1xuICAgICAgaWYgKHJlc3VsdC5lbmRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBwbGFjZWhvbGRlciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5ld0lEID0gY3JlYXRlVW5pcXVlSWQoKTtcbiAgICAgICAgICBkc01hcC5zZXQobmV3SUQsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXN1bHQgKz0gbmV3SUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSBwbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGxhc3QgbGl0ZXJhbFxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tsaXRlcmFscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjc3MgPSByZXN1bHQucmVwbGFjZShTVFlMRV9URU1QTEFURV9SRUdFWCgpLCAoc3RyKSA9PiB7XG4gICAgICBpZiAoZHNNYXAuaGFzKHN0cikpIHtcbiAgICAgICAgY29uc3QgZm4gPSBkc01hcC5nZXQoc3RyKSE7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgICAgaWYgKGZuIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSBmbi5jc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSBmbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpfSR7dGVtcGxhdGUoJ3x8Jnx8Jyl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEx5bFBhcnNlKGNzcywgY2xhc3NOYW1lKS50b0NzcygpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIGBTdHlsZVRlbXBsYXRlW19fJHsoaWQrKykudG9TdHJpbmcoMzYpfV1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IodGV4dCA9ICdpZCcpIHtcbiAgcmV0dXJuIGAvKiA+PiAke3RleHR9IC0tICR7TWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KX0gKi9gO1xufVxuXG50eXBlIFRyYW5zZm9ybWVyPFQ+ID0gKHN0OiBUKSA9PiAoU3R5bGVUZW1wbGF0ZSk7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZUNvbGxlY3Rpb248VCA9IGFueT4ge1xuICBwcml2YXRlIF90ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXTtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXI/OiBUcmFuc2Zvcm1lcjxUPjtcblxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChUKVtdKVxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSkge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcbiAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGQoLi4udGVtcGxhdGVzOiAoVClbXSk6IFN0eWxlQ29sbGVjdGlvbjxUPjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uO1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb24gfCBTdHlsZUNvbGxlY3Rpb248VD4ge1xuICAgIC8vIHJldHVybiBuZXcgU3R5bGVDb2xsZWN0aW9uKC4uLlsuLi50aGlzLl90ZW1wbGF0ZXMsIC4uLnRlbXBsYXRlc10pO1xuICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKC4uLnRlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVHJhbnNmb3JtIHN0eWxlICovXG4gIHNldFRyYW5zZm9ybWVyKHRyYW5zZm9ybWVyOiBUcmFuc2Zvcm1lcjxUPikge1xuICAgIHRoaXMuX3RyYW5zZm9ybWVyID0gdHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBTdHlsZVRlbXBsYXRlXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0aGlzLl90ZW1wbGF0ZXM7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRlbXBsYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgIGlmICh0aGlzLl90cmFuc2Zvcm1lcikge1xuICAgICAgICB0ZW1wbGF0ZSA9ICgodGhpcy5fdHJhbnNmb3JtZXIodGVtcGxhdGVzW2luZGV4XSBhcyBUKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGxhdGUgPSAodGVtcGxhdGVzW2luZGV4XSBhcyBTdHlsZVRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIGxpbiArPSB0ZW1wbGF0ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9XG5cbn1cblxuXG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5mdW5jdGlvbiBpc09iamVjdChpdGVtOiBhbnkpIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSkgJiYgIShpdGVtIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFU+KHRhcmdldDogVCwgc291cmNlOiBVKTogVCAmIFU7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXM8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXModGFyZ2V0OiBvYmplY3QsIC4uLnNvdXJjZXM6IGFueVtdKTogYW55O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZVtrZXldLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBpcyBhIGNsYXNzXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXJnZVRoZW1lcyh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0S2V5ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGNvbnN0IHNvdXJjZUtleSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAvLyBNZXJnZSBzdHlsZXNcbiAgICAgICAgaWYgKHRhcmdldEtleSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbiAmJiB0eXBlb2Ygc291cmNlS2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSAodGFyZ2V0W2tleV0gYXMgU3R5bGVDb2xsZWN0aW9uKS5hZGQoc291cmNlS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlVGhlbWVzKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoZm46IFN0eWxlVGVtcGxhdGUgfCBTdHlsZUNvbGxlY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZm4gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gZm4uY3NzKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZuID8gKGZuKShjbGFzc05hbWUpIDogJyc7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZVRlbXBsYXRlKFxuLy8gICBmbjogU3R5bGVUZW1wbGF0ZVxuLy8gICApIHtcbi8vICAgaWYgKGZuLmxlbmd0aCkge1xuLy8gICAgIHJldHVybiBmbiBhcyBTdHlsZVRlbXBsYXRlO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoZm4gYXMgKCgpID0+IFN0eWxlVGVtcGxhdGUpKSgpO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdJZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgX2NoYXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25leHRJZDogbnVtYmVyW107XG4gIGNvbnN0cnVjdG9yKGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jykge1xuICAgIHRoaXMuX2NoYXJzID0gY2hhcnM7XG4gICAgdGhpcy5fbmV4dElkID0gWzBdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCByOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hhciBvZiB0aGlzLl9uZXh0SWQpIHtcbiAgICAgIHIudW5zaGlmdCh0aGlzLl9jaGFyc1tjaGFyXSk7XG4gICAgfVxuICAgIHRoaXMuX2luY3JlbWVudCgpO1xuICAgIHJldHVybiByLmpvaW4oJycpO1xuICB9XG5cbiAgX2luY3JlbWVudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25leHRJZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsID0gKyt0aGlzLl9uZXh0SWRbaV07XG4gICAgICBpZiAodmFsID49IHRoaXMuX2NoYXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9uZXh0SWRbaV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9uZXh0SWQucHVzaCgwKTtcbiAgfVxufVxuIl19