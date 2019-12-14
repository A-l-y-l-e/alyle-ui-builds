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
    var _a;
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
                    Object.assign(target, (_a = {}, _a[key] = source[key], _a));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDOztBQUM3RCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBbUpDO1FBbEpDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFB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LENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxPQUFPO2FBQ1I7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IExJTkVfRkVFRF9SRUdFWCA9ICgpID0+IC8oXFxuP1teXFxuXStcXG4/KS9nO1xuY29uc3QgQU1QRVJTQU5EX1JFR0VYID0gKCkgPT4gLyYvZztcbmNvbnN0IFNUWUxFX1RFTVBMQVRFX1JFR0VYID0gKCkgPT4gL1N0eWxlVGVtcGxhdGVcXFtbXFx3XStcXF0vZztcbmxldCBpZDogbnVtYmVyID0gMDtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBseWwgc3R5bGUgYmxvY2sgdG8gQ1NTXG4gKlxuICogQWxsb3dlZCBibG9ja3M6XG4gKlxuICogLy8gU2ltcGxlXG4gKiBjb25zdCBCVVRUT05fU1RZTEUgPSBseWwgYHtcbiAqICAgcGFkZGluZzogOHB4IDEycHhcbiAqICAgZm9udC1zaXplOiAxNHB4XG4gKiAgIGJvcmRlci1yYWRpdXM6IDlweFxuICogICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwXG4gKiB9YFxuICpcbiAqIC8vIE5lc3RpbmdcbiAqIGNvbnN0IHN0eWxlID0gbHlsIGB7XG4gKiAgIHVsID4ge1xuICogICAgIGxpIHtcbiAqICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAqICAgICB9XG4gKiAgIH1cbiAqICAgcCB7XG4gKiAgICAgfiB7XG4gKiAgICAgICBzcGFuIHtcbiAqICAgICAgICAgb3BhY2l0eTogMC44O1xuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICogfWBcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMeWxQYXJzZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcke2NsYXNzTmFtZX0nXG4gICkgeyB9XG5cbiAgdG9Dc3MoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzOiAoc3RyaW5nW10pW10gPSBbXTtcbiAgICBsZXQgc2VsZWN0b3I6IG51bGwgfCBzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0IHJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICAgIHRoaXMuX3RlbXBsYXRlXG4gICAgICAucmVwbGFjZSgvKFxcL1xcL1xcc1teXFxuXFxyXSooPzpbXFxuXFxyXSt8JCkpL2csICcnKVxuICAgICAgLnJlcGxhY2UoLyxcXG4vZywgJywnKVxuICAgICAgLnJlcGxhY2UoTElORV9GRUVEX1JFR0VYKCksIChfZXgsIGZ1bGxMaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUudHJpbSgpO1xuXG4gICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJ3snKSkge1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFt0aGlzLl9jbGFzc05hbWVdKTtcbiAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yc1swXVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsaW5lXzEgPSBmdWxsTGluZS5zbGljZSgwLCBmdWxsTGluZS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goXG4gICAgICAgICAgICBsaW5lXzFcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAubWFwKF8gPT4gXy50cmltKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcblxuICAgICAgICAgIGlmIChsaW5lXzEuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgICAgaWYgKCFydWxlcy5oYXMobGluZV8xKSkge1xuICAgICAgICAgICAgICBydWxlcy5zZXQobGluZV8xLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5sZW5ndGggPT09IDEgJiYgZnVsbExpbmUuZW5kc1dpdGgoJ30nKSkge1xuICAgICAgICBzZWxlY3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgY29uc3QgbGluID0gZnVsbExpbmU7XG5cbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGxpbik7XG4gICAgICAgIC8vIGZ1bGxMaW5lID0gbGluO1xuICAgICAgICAvLyAvKiogRm9yIG5vbiBMeWxNb2R1bGU8ICovZWxzZSB7XG4gICAgICAgIC8vICAgZnVsbExpbmUgPSBgXFwkeygke2xpbi5zbGljZSgyLCBsaW4ubGVuZ3RoIC0gMSl9KShcXGAke3NlbGVjdG9yfVxcYCl9YDtcbiAgICAgICAgLy8gICBydWxlcy5zZXQoY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpLCBmdWxsTGluZSk7XG4gICAgICAgIC8vIH0gLyoqIGZvciBub24gTHlsTW9kdWxlPiAgKi9cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmdWxsTGluZS5zbGljZSgzKTtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2NjJyl9JHtjb250ZW50fWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxMaW5lKSB7XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCd1bmRlZmluZWQnKSB8fCBmdWxsTGluZS5zdGFydHNXaXRoKCcvLyAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJzsnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEbyBub3QgcmVxdWlyZSBzZW1pY29sb24gaW4gWyR7ZnVsbExpbmV9XWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJzogJykpIHtcbiAgICAgICAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUucmVwbGFjZSgnOiAnLCAnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsTGluZSArPSAnOyc7XG4gICAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yISkhLnB1c2goZnVsbExpbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICAvLyBKb2luIG1lZGlhIHF1ZXJpZXMgJiBrZXlmcmFtZXNcbiAgICBydWxlcy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hBcnJheSA9IGtleS5tYXRjaCgvKEBbXlxcJHtdKig/OlxcJHtbXntdKikqKXsvKTtcbiAgICAgIGlmIChtYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gbWF0Y2hBcnJheVsxXTtcbiAgICAgICAgaWYgKG1lZGlhICE9PSBrZXkgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gcnVsZXMuZ2V0KG1lZGlhKSE7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhZnRlciArIGtleS5yZXBsYWNlKG1lZGlhICsgJ3snLCAnJykgKyBgeyR7dmFsLmpvaW4oJzsnKX19YDtcbiAgICAgICAgICBydWxlcy5zZXQobWVkaWEsIFtuZXdWYWx1ZV0pO1xuICAgICAgICAgIHJ1bGVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShydWxlcy5lbnRyaWVzKCkpXG4gICAgICAuZmlsdGVyKHJ1bGUgPT4gcnVsZVsxXSlcbiAgICAgIC5tYXAocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHJ1bGVbMF07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gcnVsZVsxXTtcbiAgICAgICAgY29uc3QgY3NzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50UmVuZGVyZWQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8c3RyaW5nW10+KCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcbiAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaChjb250ZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gICAgICAgICAgICAgIGxldCBleHByZXNzaW9uID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICBleHByZXNzaW9uID0gYHN0eWxlVGVtcGxhdGVUb1N0cmluZygoJHtleHByZXNzaW9ufSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaChgXFwkeyR7ZXhwcmVzc2lvbn19YCk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY29udGVudFJlbmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGNzcyArPSBgJHtzZWx9eyR7Y29udGVudH19YDtcbiAgICAgICAgICAgICAgY3NzLnB1c2goY29udGVudCk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KS5tYXAoKF8pID0+IHtcbiAgICAgICAgICBpZiAoXyA9PT0gY3NzKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzLmxlbmd0aFxuICAgICAgICAgICAgPyBgJHtzZWx9eyR7Y3NzLmpvaW4oJycpfX1gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5qb2luKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAvLyByZXR1cm4gKGNzc1xuICAgICAgICAvLyAgID8gYCR7c2VsfXske2Nzc319YFxuICAgICAgICAvLyAgIDogICcnKSArIGNvbnRlbnRSZW5kZXJlZDtcbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgLy8gICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgICAgICAgLy8gICBsZXQgdmFyaWFibGUgPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vICAgdmFyaWFibGUgPSBgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKCgke3ZhcmlhYmxlfSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAvLyAgIHJldHVybiBgXFwkeyR7dmFyaWFibGV9fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG5cbiAgICAgICAgLy8gaWYgKHNlbC5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgLy8gICByZXR1cm4gYCR7c2VsfXske3J1bGVbMV19fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzOiAoc3RyaW5nW10pW10pIHtcbiAgICBsZXQgbWVkaWE6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yc1xuICAgICAgLm1hcChfID0+IF8uZmlsdGVyKF9fID0+IHtcbiAgICAgICAgaWYgKF9fLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgIC8vIHNhdmUgbWVkaWFcbiAgICAgICAgICBtZWRpYSA9IF9fO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX187XG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoXyA9PiBfLmxlbmd0aClcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJldi5tYXAoaXRlbSA9PiBjdXJyZW50Lm1hcChjdSA9PiB7XG4gICAgICAgICAgaWYgKGN1LmluY2x1ZGVzKCcmJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjdS5yZXBsYWNlKEFNUEVSU0FORF9SRUdFWCgpLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke2l0ZW19ICR7Y3V9YDtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLCcpO1xuXG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICByZXR1cm4gYCR7bWVkaWF9eyR7c2VsfWA7XG4gICAgfVxuICAgIHJldHVybiBzZWw7XG4gIH1cblxufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRlbXBsYXRlID0gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBseWwobGl0ZXJhbHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wbGFjZWhvbGRlcnM6IChzdHJpbmcgfCBDb2xvciB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bWJlciB8IFN0eWxlVGVtcGxhdGUgfCBudWxsIHwgdW5kZWZpbmVkKVtdKSB7XG4gIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgZHNNYXAgPSBuZXcgTWFwPHN0cmluZywgKFN0eWxlVGVtcGxhdGUpIHwgU3R5bGVDb2xsZWN0aW9uPigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2Vob2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1tpXTtcbiAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgICAgIGlmIChyZXN1bHQuZW5kc1dpdGgoJy4uLicpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCByZXN1bHQubGVuZ3RoIC0gMyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgfHwgcGxhY2Vob2xkZXIgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBuZXdJRCA9IGNyZWF0ZVVuaXF1ZUlkKCk7XG4gICAgICAgICAgZHNNYXAuc2V0KG5ld0lELCBwbGFjZWhvbGRlcik7XG4gICAgICAgICAgcmVzdWx0ICs9IG5ld0lEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHRoZSBsYXN0IGxpdGVyYWxcbiAgICByZXN1bHQgKz0gbGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgY3NzID0gcmVzdWx0LnJlcGxhY2UoU1RZTEVfVEVNUExBVEVfUkVHRVgoKSwgKHN0cikgPT4ge1xuICAgICAgaWYgKGRzTWFwLmhhcyhzdHIpKSB7XG4gICAgICAgIGNvbnN0IGZuID0gZHNNYXAuZ2V0KHN0cikhO1xuICAgICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICAgIGlmIChmbiBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgIHRlbXBsYXRlID0gZm4uY3NzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlID0gZm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2NyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKX0ke3RlbXBsYXRlKCd8fCZ8fCcpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBMeWxQYXJzZShjc3MsIGNsYXNzTmFtZSkudG9Dc3MoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlSWQoKSB7XG4gIHJldHVybiBgU3R5bGVUZW1wbGF0ZVtfXyR7KGlkKyspLnRvU3RyaW5nKDM2KX1dYDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKHRleHQgPSAnaWQnKSB7XG4gIHJldHVybiBgLyogPj4gJHt0ZXh0fSAtLSAke01hdGguZmxvb3IobmV3IERhdGUoKS52YWx1ZU9mKCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNil9ICovYDtcbn1cblxudHlwZSBUcmFuc2Zvcm1lcjxUPiA9IChzdDogVCkgPT4gKFN0eWxlVGVtcGxhdGUpO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVDb2xsZWN0aW9uPFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW107XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVyPzogVHJhbnNmb3JtZXI8VD47XG5cbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoVClbXSlcbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG4gICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkKC4uLnRlbXBsYXRlczogKFQpW10pOiBTdHlsZUNvbGxlY3Rpb248VD47XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uIHwgU3R5bGVDb2xsZWN0aW9uPFQ+IHtcbiAgICAvLyByZXR1cm4gbmV3IFN0eWxlQ29sbGVjdGlvbiguLi5bLi4udGhpcy5fdGVtcGxhdGVzLCAuLi50ZW1wbGF0ZXNdKTtcbiAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCguLi50ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFRyYW5zZm9ybSBzdHlsZSAqL1xuICBzZXRUcmFuc2Zvcm1lcih0cmFuc2Zvcm1lcjogVHJhbnNmb3JtZXI8VD4pIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1lciA9IHRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gU3R5bGVUZW1wbGF0ZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gdGhpcy5fdGVtcGxhdGVzO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICBpZiAodGhpcy5fdHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdGVtcGxhdGUgPSAoKHRoaXMuX3RyYW5zZm9ybWVyKHRlbXBsYXRlc1tpbmRleF0gYXMgVCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlID0gKHRlbXBsYXRlc1tpbmRleF0gYXMgU3R5bGVUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICBsaW4gKz0gdGVtcGxhdGUoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfVxuXG59XG5cblxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbTogYW55KSB7XG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpICYmICEoaXRlbSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFUsIFY+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogVik6IFQgJiBVICYgVjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lcyh0YXJnZXQ6IGFueSwgLi4uc291cmNlczogYW55W10pOiBhbnkge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7IHJldHVybiB0YXJnZXQ7IH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIGlmIChzb3VyY2Vba2V5XS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgaXMgYSBjbGFzc1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VUaGVtZXModGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEtleSA9IHRhcmdldFtrZXldO1xuICAgICAgICBjb25zdCBzb3VyY2VLZXkgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgLy8gTWVyZ2Ugc3R5bGVzXG4gICAgICAgIGlmICh0YXJnZXRLZXkgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24gJiYgdHlwZW9mIHNvdXJjZUtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gKHRhcmdldFtrZXldIGFzIFN0eWxlQ29sbGVjdGlvbikuYWRkKHNvdXJjZUtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlVGhlbWVzKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoZm46IFN0eWxlVGVtcGxhdGUgfCBTdHlsZUNvbGxlY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZm4gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gZm4uY3NzKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZuID8gKGZuKShjbGFzc05hbWUpIDogJyc7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZVRlbXBsYXRlKFxuLy8gICBmbjogU3R5bGVUZW1wbGF0ZVxuLy8gICApIHtcbi8vICAgaWYgKGZuLmxlbmd0aCkge1xuLy8gICAgIHJldHVybiBmbiBhcyBTdHlsZVRlbXBsYXRlO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoZm4gYXMgKCgpID0+IFN0eWxlVGVtcGxhdGUpKSgpO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdJZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgX2NoYXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25leHRJZDogbnVtYmVyW107XG4gIGNvbnN0cnVjdG9yKGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jykge1xuICAgIHRoaXMuX2NoYXJzID0gY2hhcnM7XG4gICAgdGhpcy5fbmV4dElkID0gWzBdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCByOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hhciBvZiB0aGlzLl9uZXh0SWQpIHtcbiAgICAgIHIudW5zaGlmdCh0aGlzLl9jaGFyc1tjaGFyXSk7XG4gICAgfVxuICAgIHRoaXMuX2luY3JlbWVudCgpO1xuICAgIHJldHVybiByLmpvaW4oJycpO1xuICB9XG5cbiAgX2luY3JlbWVudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25leHRJZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsID0gKyt0aGlzLl9uZXh0SWRbaV07XG4gICAgICBpZiAodmFsID49IHRoaXMuX2NoYXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9uZXh0SWRbaV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9uZXh0SWQucHVzaCgwKTtcbiAgfVxufVxuIl19