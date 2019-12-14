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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDOztBQUM3RCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBbUpDO1FBbEpDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFB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Q0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuY29uc3QgTElORV9GRUVEX1JFR0VYID0gKCkgPT4gLyhcXG4/W15cXG5dK1xcbj8pL2c7XG5jb25zdCBBTVBFUlNBTkRfUkVHRVggPSAoKSA9PiAvJi9nO1xuY29uc3QgU1RZTEVfVEVNUExBVEVfUkVHRVggPSAoKSA9PiAvU3R5bGVUZW1wbGF0ZVxcW1tcXHddK1xcXS9nO1xubGV0IGlkOiBudW1iZXIgPSAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhIGx5bCBzdHlsZSBibG9jayB0byBDU1NcbiAqXG4gKiBBbGxvd2VkIGJsb2NrczpcbiAqXG4gKiAvLyBTaW1wbGVcbiAqIGNvbnN0IEJVVFRPTl9TVFlMRSA9IGx5bCBge1xuICogICBwYWRkaW5nOiA4cHggMTJweFxuICogICBmb250LXNpemU6IDE0cHhcbiAqICAgYm9yZGVyLXJhZGl1czogOXB4XG4gKiAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTBcbiAqIH1gXG4gKlxuICogLy8gTmVzdGluZ1xuICogY29uc3Qgc3R5bGUgPSBseWwgYHtcbiAqICAgdWwgPiB7XG4gKiAgICAgbGkge1xuICogICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICogICAgIH1cbiAqICAgfVxuICogICBwIHtcbiAqICAgICB+IHtcbiAqICAgICAgIHNwYW4ge1xuICogICAgICAgICBvcGFjaXR5OiAwLjg7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9YFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEx5bFBhcnNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nID0gJyR7Y2xhc3NOYW1lfSdcbiAgKSB7IH1cblxuICB0b0NzcygpIHtcbiAgICBjb25zdCBzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSA9IFtdO1xuICAgIGxldCBzZWxlY3RvcjogbnVsbCB8IHN0cmluZyA9IG51bGw7XG4gICAgY29uc3QgcnVsZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgdGhpcy5fdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKC8oXFwvXFwvXFxzW15cXG5cXHJdKig/OltcXG5cXHJdK3wkKSkvZywgJycpXG4gICAgICAucmVwbGFjZSgvLFxcbi9nLCAnLCcpXG4gICAgICAucmVwbGFjZShMSU5FX0ZFRURfUkVHRVgoKSwgKF9leCwgZnVsbExpbmU6IHN0cmluZykgPT4ge1xuICAgICAgZnVsbExpbmUgPSBmdWxsTGluZS50cmltKCk7XG5cbiAgICAgIGlmIChmdWxsTGluZS5lbmRzV2l0aCgneycpKSB7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goW3RoaXMuX2NsYXNzTmFtZV0pO1xuICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3JzWzBdWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxpbmVfMSA9IGZ1bGxMaW5lLnNsaWNlKDAsIGZ1bGxMaW5lLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChcbiAgICAgICAgICAgIGxpbmVfMVxuICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgIC5tYXAoXyA9PiBfLnRyaW0oKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuXG4gICAgICAgICAgaWYgKGxpbmVfMS5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVzLmhhcyhsaW5lXzEpKSB7XG4gICAgICAgICAgICAgIHJ1bGVzLnNldChsaW5lXzEsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghcnVsZXMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJ1bGVzLnNldChzZWxlY3RvciwgW10pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLmxlbmd0aCA9PT0gMSAmJiBmdWxsTGluZS5lbmRzV2l0aCgnfScpKSB7XG4gICAgICAgIHNlbGVjdG9ycy5wb3AoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJ1bGVzLnNldChzZWxlY3RvciwgW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICBjb25zdCBsaW4gPSBmdWxsTGluZTtcblxuICAgICAgICAvLyBJZ25vcmUgY29tcGlsZWQgY3NzXG4gICAgICAgIHJ1bGVzLmdldChzZWxlY3RvcikhLnB1c2gobGluKTtcbiAgICAgICAgLy8gZnVsbExpbmUgPSBsaW47XG4gICAgICAgIC8vIC8qKiBGb3Igbm9uIEx5bE1vZHVsZTwgKi9lbHNlIHtcbiAgICAgICAgLy8gICBmdWxsTGluZSA9IGBcXCR7KCR7bGluLnNsaWNlKDIsIGxpbi5sZW5ndGggLSAxKX0pKFxcYCR7c2VsZWN0b3J9XFxgKX1gO1xuICAgICAgICAvLyAgIHJ1bGVzLnNldChjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2RzJyksIGZ1bGxMaW5lKTtcbiAgICAgICAgLy8gfSAvKiogZm9yIG5vbiBMeWxNb2R1bGU+ICAqL1xuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5zdGFydHNXaXRoKCcuLi4nKSkge1xuICAgICAgICAvLyBmb3Igbm9uIEx5bE1vZHVsZT5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGZ1bGxMaW5lLnNsaWNlKDMpO1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGAke2NyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignY2MnKX0ke2NvbnRlbnR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnVsbExpbmUpIHtcbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJ3VuZGVmaW5lZCcpIHx8IGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy8vICcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmdWxsTGluZS5lbmRzV2l0aCgnOycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvIG5vdCByZXF1aXJlIHNlbWljb2xvbiBpbiBbJHtmdWxsTGluZX1dYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmdWxsTGluZS5pbmNsdWRlcygnOiAnKSkge1xuICAgICAgICAgICAgZnVsbExpbmUgPSBmdWxsTGluZS5yZXBsYWNlKCc6ICcsICc6Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxMaW5lICs9ICc7JztcbiAgICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IhKSEucHVzaChmdWxsTGluZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcblxuICAgIC8vIEpvaW4gbWVkaWEgcXVlcmllcyAmIGtleWZyYW1lc1xuICAgIHJ1bGVzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEFycmF5ID0ga2V5Lm1hdGNoKC8oQFteXFwke10qKD86XFwke1tee10qKSopey8pO1xuICAgICAgaWYgKG1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbWVkaWEgPSBtYXRjaEFycmF5WzFdO1xuICAgICAgICBpZiAobWVkaWEgIT09IGtleSAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgYWZ0ZXIgPSBydWxlcy5nZXQobWVkaWEpITtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFmdGVyICsga2V5LnJlcGxhY2UobWVkaWEgKyAneycsICcnKSArIGB7JHt2YWwuam9pbignOycpfX1gO1xuICAgICAgICAgIHJ1bGVzLnNldChtZWRpYSwgW25ld1ZhbHVlXSk7XG4gICAgICAgICAgcnVsZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKHJ1bGVzLmVudHJpZXMoKSlcbiAgICAgIC5maWx0ZXIocnVsZSA9PiBydWxlWzFdKVxuICAgICAgLm1hcChydWxlID0+IHtcbiAgICAgICAgY29uc3Qgc2VsID0gcnVsZVswXTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBydWxlWzFdO1xuICAgICAgICBjb25zdCBjc3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IGNvbnRlbnRSZW5kZXJlZDogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldDxzdHJpbmdbXT4oKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGxldCBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgICAgICAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb24gPSBgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKCgke2V4cHJlc3Npb259KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGBcXCR7JHtleHByZXNzaW9ufX1gKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY3NzICs9IGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgICAgICAgICBjc3MucHVzaChjb250ZW50KTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZXQpLm1hcCgoXykgPT4ge1xuICAgICAgICAgIGlmIChfID09PSBjc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3MubGVuZ3RoXG4gICAgICAgICAgICA/IGAke3NlbH17JHtjc3Muam9pbignJyl9fWBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLmpvaW4oJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIC8vIHJldHVybiAoY3NzXG4gICAgICAgIC8vICAgPyBgJHtzZWx9eyR7Y3NzfX1gXG4gICAgICAgIC8vICAgOiAgJycpICsgY29udGVudFJlbmRlcmVkO1xuICAgICAgICAvLyBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAvLyAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcKiA+PiBjY1teXFwvXFwqXStcXCpcXC8vZywgJycpO1xuICAgICAgICAvLyAgIGxldCB2YXJpYWJsZSA9IGNvbnRlbnQuc2xpY2UoMiwgY29udGVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgLy8gICB2YXJpYWJsZSA9IGBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKCR7dmFyaWFibGV9KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgIC8vICAgcmV0dXJuIGBcXCR7JHt2YXJpYWJsZX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyAvLyBmb3Igbm9uIEx5bE1vZHVsZT5cblxuICAgICAgICAvLyBpZiAoc2VsLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBgJHtzZWx9eyR7cnVsZVsxXX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSkge1xuICAgIGxldCBtZWRpYTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2VsID0gc2VsZWN0b3JzXG4gICAgICAubWFwKF8gPT4gXy5maWx0ZXIoX18gPT4ge1xuICAgICAgICBpZiAoX18uc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgLy8gc2F2ZSBtZWRpYVxuICAgICAgICAgIG1lZGlhID0gX187XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfXztcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwcmV2Lm1hcChpdGVtID0+IGN1cnJlbnQubWFwKGN1ID0+IHtcbiAgICAgICAgICBpZiAoY3UuaW5jbHVkZXMoJyYnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1LnJlcGxhY2UoQU1QRVJTQU5EX1JFR0VYKCksIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7aXRlbX0gJHtjdX1gO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcsJyk7XG5cbiAgICBpZiAobWVkaWEpIHtcbiAgICAgIHJldHVybiBgJHttZWRpYX17JHtzZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlVGVtcGxhdGUgPSAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGx5bChsaXRlcmFsczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBsYWNlaG9sZGVyczogKHN0cmluZyB8IENvbG9yIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVtYmVyIHwgU3R5bGVUZW1wbGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpW10pIHtcbiAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBkc01hcCA9IG5ldyBNYXA8c3RyaW5nLCAoU3R5bGVUZW1wbGF0ZSkgfCBTdHlsZUNvbGxlY3Rpb24+KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZWhvbGRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2ldO1xuICAgICAgcmVzdWx0ICs9IGxpdGVyYWxzW2ldO1xuICAgICAgaWYgKHJlc3VsdC5lbmRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBwbGFjZWhvbGRlciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5ld0lEID0gY3JlYXRlVW5pcXVlSWQoKTtcbiAgICAgICAgICBkc01hcC5zZXQobmV3SUQsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXN1bHQgKz0gbmV3SUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSBwbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGxhc3QgbGl0ZXJhbFxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tsaXRlcmFscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjc3MgPSByZXN1bHQucmVwbGFjZShTVFlMRV9URU1QTEFURV9SRUdFWCgpLCAoc3RyKSA9PiB7XG4gICAgICBpZiAoZHNNYXAuaGFzKHN0cikpIHtcbiAgICAgICAgY29uc3QgZm4gPSBkc01hcC5nZXQoc3RyKSE7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgICAgaWYgKGZuIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSBmbi5jc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSBmbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpfSR7dGVtcGxhdGUoJ3x8Jnx8Jyl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEx5bFBhcnNlKGNzcywgY2xhc3NOYW1lKS50b0NzcygpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIGBTdHlsZVRlbXBsYXRlW19fJHsoaWQrKykudG9TdHJpbmcoMzYpfV1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IodGV4dCA9ICdpZCcpIHtcbiAgcmV0dXJuIGAvKiA+PiAke3RleHR9IC0tICR7TWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KX0gKi9gO1xufVxuXG50eXBlIFRyYW5zZm9ybWVyPFQ+ID0gKHN0OiBUKSA9PiAoU3R5bGVUZW1wbGF0ZSk7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZUNvbGxlY3Rpb248VCA9IGFueT4ge1xuICBwcml2YXRlIF90ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXTtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXI/OiBUcmFuc2Zvcm1lcjxUPjtcblxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChUKVtdKVxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSkge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcbiAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGQoLi4udGVtcGxhdGVzOiAoVClbXSk6IFN0eWxlQ29sbGVjdGlvbjxUPjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uO1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb24gfCBTdHlsZUNvbGxlY3Rpb248VD4ge1xuICAgIC8vIHJldHVybiBuZXcgU3R5bGVDb2xsZWN0aW9uKC4uLlsuLi50aGlzLl90ZW1wbGF0ZXMsIC4uLnRlbXBsYXRlc10pO1xuICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKC4uLnRlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVHJhbnNmb3JtIHN0eWxlICovXG4gIHNldFRyYW5zZm9ybWVyKHRyYW5zZm9ybWVyOiBUcmFuc2Zvcm1lcjxUPikge1xuICAgIHRoaXMuX3RyYW5zZm9ybWVyID0gdHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBTdHlsZVRlbXBsYXRlXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0aGlzLl90ZW1wbGF0ZXM7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRlbXBsYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgIGlmICh0aGlzLl90cmFuc2Zvcm1lcikge1xuICAgICAgICB0ZW1wbGF0ZSA9ICgodGhpcy5fdHJhbnNmb3JtZXIodGVtcGxhdGVzW2luZGV4XSBhcyBUKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGxhdGUgPSAodGVtcGxhdGVzW2luZGV4XSBhcyBTdHlsZVRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIGxpbiArPSB0ZW1wbGF0ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKGZuOiBTdHlsZVRlbXBsYXRlIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKGZuIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGZuLmNzcyhjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmbiA/IChmbikoY2xhc3NOYW1lKSA6ICcnO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVUZW1wbGF0ZShcbi8vICAgZm46IFN0eWxlVGVtcGxhdGVcbi8vICAgKSB7XG4vLyAgIGlmIChmbi5sZW5ndGgpIHtcbi8vICAgICByZXR1cm4gZm4gYXMgU3R5bGVUZW1wbGF0ZTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gKGZuIGFzICgoKSA9PiBTdHlsZVRlbXBsYXRlKSkoKTtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nSWRHZW5lcmF0b3Ige1xuICBwcml2YXRlIF9jaGFyczogc3RyaW5nO1xuICBwcml2YXRlIF9uZXh0SWQ6IG51bWJlcltdO1xuICBjb25zdHJ1Y3RvcihjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpIHtcbiAgICB0aGlzLl9jaGFycyA9IGNoYXJzO1xuICAgIHRoaXMuX25leHRJZCA9IFswXTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgY29uc3Qgcjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdGhpcy5fbmV4dElkKSB7XG4gICAgICByLnVuc2hpZnQodGhpcy5fY2hhcnNbY2hhcl0pO1xuICAgIH1cbiAgICB0aGlzLl9pbmNyZW1lbnQoKTtcbiAgICByZXR1cm4gci5qb2luKCcnKTtcbiAgfVxuXG4gIF9pbmNyZW1lbnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uZXh0SWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbCA9ICsrdGhpcy5fbmV4dElkW2ldO1xuICAgICAgaWYgKHZhbCA+PSB0aGlzLl9jaGFycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbmV4dElkW2ldID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbmV4dElkLnB1c2goMCk7XG4gIH1cbn1cbiJdfQ==