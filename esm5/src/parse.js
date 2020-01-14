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
                    var isMediaQuery = line_1.includes('@');
                    if (isMediaQuery) {
                        selectors.push([line_1.trim()]);
                        if (!rules.has(line_1)) {
                            rules.set(line_1, []);
                        }
                    }
                    else {
                        selectors.push(line_1
                            .split(',')
                            .map(function (_) { return _.trim(); }));
                    }
                    selector = _this._resolveSelectors(selectors);
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
                    var sel_1 = key.replace(media + '{', '');
                    var newValue = after + val.reduce(function (previous, current) {
                        var last = previous[previous.length - 1];
                        // __READY__ is added to be ignored by content.startsWith ('/ * >> xx')
                        if (current.startsWith('/* >> ds')) {
                            previous.push('/* __READY__ */' + current.replace(/\|\|\&\|\|/g, sel_1));
                        }
                        else if (current.startsWith('/* >> cc')) {
                            previous.push('/* __READY__ */' + transformCC(current, sel_1));
                        }
                        else {
                            if (Array.isArray(last)) {
                                last.push(current);
                            }
                            else {
                                previous.push([current]);
                            }
                        }
                        return previous;
                    }, [])
                        .map(function (item) { return Array.isArray(item) ? sel_1 + "{" + item.join('') + "}" : item; }).join('');
                    // const newValue = after
                    // + sel
                    // + `{${val.join('')}}`;
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
                        contentRendered.push(transformCC(content, sel));
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
function transformCC(content, sel) {
    content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
    var expression = content.slice(2, content.length - 1);
    expression = "st2c((" + expression + "), `" + sel + "`)";
    return "${" + expression + "}";
}
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
                if (typeof placeholder === 'function'
                    || placeholder instanceof StyleCollection) {
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
                return "" + createUniqueCommentSelector('ds') + st2c(fn, '||&||');
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
 * Transform a ...{style} to css
 * For internal use purposes only
 * @param fn StyleTemplate or StyleCollection
 * @param className class name
 */
export function st2c(fn, className) {
    if (fn == null) {
        return '';
    }
    if (fn instanceof StyleCollection) {
        return fn.css(className);
    }
    return fn(className);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDOztBQUM3RCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBeUpDO1FBeEpDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFB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QUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBSSxHQUFKOztRQUNFLElBQU0sQ0FBQyxHQUFhLEVBQUUsQ0FBQzs7WUFDdkIsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTVCLElBQU0sSUFBSSxXQUFBO2dCQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBMSU5FX0ZFRURfUkVHRVggPSAoKSA9PiAvKFxcbj9bXlxcbl0rXFxuPykvZztcbmNvbnN0IEFNUEVSU0FORF9SRUdFWCA9ICgpID0+IC8mL2c7XG5jb25zdCBTVFlMRV9URU1QTEFURV9SRUdFWCA9ICgpID0+IC9TdHlsZVRlbXBsYXRlXFxbW1xcd10rXFxdL2c7XG5sZXQgaWQ6IG51bWJlciA9IDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgbHlsIHN0eWxlIGJsb2NrIHRvIENTU1xuICpcbiAqIEFsbG93ZWQgYmxvY2tzOlxuICpcbiAqIC8vIFNpbXBsZVxuICogY29uc3QgQlVUVE9OX1NUWUxFID0gbHlsIGB7XG4gKiAgIHBhZGRpbmc6IDhweCAxMnB4XG4gKiAgIGZvbnQtc2l6ZTogMTRweFxuICogICBib3JkZXItcmFkaXVzOiA5cHhcbiAqICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMFxuICogfWBcbiAqXG4gKiAvLyBOZXN0aW5nXG4gKiBjb25zdCBzdHlsZSA9IGx5bCBge1xuICogICB1bCA+IHtcbiAqICAgICBsaSB7XG4gKiAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gKiAgICAgfVxuICogICB9XG4gKiAgIHAge1xuICogICAgIH4ge1xuICogICAgICAgc3BhbiB7XG4gKiAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqIH1gXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTHlsUGFyc2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcgPSAnJHtjbGFzc05hbWV9J1xuICApIHsgfVxuXG4gIHRvQ3NzKCkge1xuICAgIGNvbnN0IHNlbGVjdG9yczogKHN0cmluZ1tdKVtdID0gW107XG4gICAgbGV0IHNlbGVjdG9yOiBudWxsIHwgc3RyaW5nID0gbnVsbDtcbiAgICBjb25zdCBydWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoLyhcXC9cXC9cXHNbXlxcblxccl0qKD86W1xcblxccl0rfCQpKS9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC8sXFxuL2csICcsJylcbiAgICAgIC5yZXBsYWNlKExJTkVfRkVFRF9SRUdFWCgpLCAoX2V4LCBmdWxsTGluZTogc3RyaW5nKSA9PiB7XG4gICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnRyaW0oKTtcblxuICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCd7JykpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChbdGhpcy5fY2xhc3NOYW1lXSk7XG4gICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvcnNbMF1bMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGluZV8xID0gZnVsbExpbmUuc2xpY2UoMCwgZnVsbExpbmUubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGlzTWVkaWFRdWVyeSA9IGxpbmVfMS5pbmNsdWRlcygnQCcpO1xuICAgICAgICAgIGlmIChpc01lZGlhUXVlcnkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFxuICAgICAgICAgICAgICBbbGluZV8xLnRyaW0oKV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXJ1bGVzLmhhcyhsaW5lXzEpKSB7XG4gICAgICAgICAgICAgIHJ1bGVzLnNldChsaW5lXzEsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3JzLnB1c2goXG4gICAgICAgICAgICAgIGxpbmVfMVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAubWFwKF8gPT4gXy50cmltKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5sZW5ndGggPT09IDEgJiYgZnVsbExpbmUuZW5kc1dpdGgoJ30nKSkge1xuICAgICAgICBzZWxlY3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgY29uc3QgbGluID0gZnVsbExpbmU7XG5cbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGxpbik7XG4gICAgICAgIC8vIGZ1bGxMaW5lID0gbGluO1xuICAgICAgICAvLyAvKiogRm9yIG5vbiBMeWxNb2R1bGU8ICovZWxzZSB7XG4gICAgICAgIC8vICAgZnVsbExpbmUgPSBgXFwkeygke2xpbi5zbGljZSgyLCBsaW4ubGVuZ3RoIC0gMSl9KShcXGAke3NlbGVjdG9yfVxcYCl9YDtcbiAgICAgICAgLy8gICBydWxlcy5zZXQoY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpLCBmdWxsTGluZSk7XG4gICAgICAgIC8vIH0gLyoqIGZvciBub24gTHlsTW9kdWxlPiAgKi9cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmdWxsTGluZS5zbGljZSgzKTtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2NjJyl9JHtjb250ZW50fWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxMaW5lKSB7XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCd1bmRlZmluZWQnKSB8fCBmdWxsTGluZS5zdGFydHNXaXRoKCcvLyAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJzsnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEbyBub3QgcmVxdWlyZSBzZW1pY29sb24gaW4gWyR7ZnVsbExpbmV9XWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJzogJykpIHtcbiAgICAgICAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUucmVwbGFjZSgnOiAnLCAnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsTGluZSArPSAnOyc7XG4gICAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yISkhLnB1c2goZnVsbExpbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICAvLyBKb2luIG1lZGlhIHF1ZXJpZXMgJiBrZXlmcmFtZXNcbiAgICBydWxlcy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hBcnJheSA9IGtleS5tYXRjaCgvKEBbXlxcJHtdKig/OlxcJHtbXntdKikqKXsvKTtcbiAgICAgIGlmIChtYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gbWF0Y2hBcnJheVsxXTtcbiAgICAgICAgaWYgKG1lZGlhICE9PSBrZXkgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gcnVsZXMuZ2V0KG1lZGlhKSE7XG4gICAgICAgICAgY29uc3Qgc2VsID0ga2V5LnJlcGxhY2UobWVkaWEgKyAneycsICcnKTtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFmdGVyICsgdmFsLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgLy8gX19SRUFEWV9fIGlzIGFkZGVkIHRvIGJlIGlnbm9yZWQgYnkgY29udGVudC5zdGFydHNXaXRoICgnLyAqID4+IHh4JylcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgICAgICAgcHJldmlvdXMucHVzaCgnLyogX19SRUFEWV9fICovJyArIGN1cnJlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgICAgICAgcHJldmlvdXMucHVzaCgnLyogX19SRUFEWV9fICovJyArIHRyYW5zZm9ybUNDKGN1cnJlbnQsIHNlbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdCkpIHtcbiAgICAgICAgICAgICAgICBsYXN0LnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMucHVzaChbY3VycmVudF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgfSwgW10gYXMgKHN0cmluZyB8IHN0cmluZ1tdKVtdKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IEFycmF5LmlzQXJyYXkoaXRlbSkgPyBgJHtzZWx9eyR7aXRlbS5qb2luKCcnKX19YCA6IGl0ZW0pLmpvaW4oJycpO1xuICAgICAgICAgIC8vIGNvbnN0IG5ld1ZhbHVlID0gYWZ0ZXJcbiAgICAgICAgICAvLyArIHNlbFxuICAgICAgICAgIC8vICsgYHske3ZhbC5qb2luKCcnKX19YDtcbiAgICAgICAgICBydWxlcy5zZXQobWVkaWEsIFtuZXdWYWx1ZV0pO1xuICAgICAgICAgIHJ1bGVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShydWxlcy5lbnRyaWVzKCkpXG4gICAgICAuZmlsdGVyKHJ1bGUgPT4gcnVsZVsxXSlcbiAgICAgIC5tYXAocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHJ1bGVbMF07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gcnVsZVsxXTtcbiAgICAgICAgY29uc3QgY3NzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50UmVuZGVyZWQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8c3RyaW5nW10+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XG4gICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgICAgICAgY29udGVudFJlbmRlcmVkLnB1c2goY29udGVudC5yZXBsYWNlKC9cXHxcXHxcXCZcXHxcXHwvZywgc2VsKSk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY29udGVudFJlbmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBjYycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKHRyYW5zZm9ybUNDKGNvbnRlbnQsIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBjc3MgKz0gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICAgICAgICAgIGNzcy5wdXNoKGNvbnRlbnQpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNldCkubWFwKChfKSA9PiB7XG4gICAgICAgICAgaWYgKF8gPT09IGNzcykge1xuICAgICAgICAgICAgcmV0dXJuIGNzcy5sZW5ndGhcbiAgICAgICAgICAgID8gYCR7c2VsfXske2Nzcy5qb2luKCcnKX19YFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8uam9pbignJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgIH0pLmpvaW4oJycpO1xuXG4gIH1cblxuICBwcml2YXRlIF9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9yczogKHN0cmluZ1tdKVtdKSB7XG4gICAgbGV0IG1lZGlhOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBzZWwgPSBzZWxlY3RvcnNcbiAgICAgIC5tYXAoXyA9PiBfLmZpbHRlcihfXyA9PiB7XG4gICAgICAgIGlmIChfXy5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAvLyBzYXZlIG1lZGlhXG4gICAgICAgICAgbWVkaWEgPSBfXztcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fO1xuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKF8gPT4gXy5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHByZXYubWFwKGl0ZW0gPT4gY3VycmVudC5tYXAoY3UgPT4ge1xuICAgICAgICAgIGlmIChjdS5pbmNsdWRlcygnJicpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3UucmVwbGFjZShBTVBFUlNBTkRfUkVHRVgoKSwgaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtpdGVtfSAke2N1fWA7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHJlc3VsdCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywnKTtcblxuICAgIGlmIChtZWRpYSkge1xuICAgICAgcmV0dXJuIGAke21lZGlhfXske3NlbH1gO1xuICAgIH1cbiAgICByZXR1cm4gc2VsO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQ0MoY29udGVudDogc3RyaW5nLCBzZWw6IHN0cmluZykge1xuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgbGV0IGV4cHJlc3Npb24gPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gIGV4cHJlc3Npb24gPSBgc3QyYygoJHtleHByZXNzaW9ufSksIFxcYCR7c2VsfVxcYClgO1xuICByZXR1cm4gYFxcJHske2V4cHJlc3Npb259fWA7XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlVGVtcGxhdGUgPSAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGx5bChsaXRlcmFsczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBsYWNlaG9sZGVyczogKHN0cmluZyB8IENvbG9yIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVtYmVyIHwgU3R5bGVUZW1wbGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpW10pIHtcbiAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBkc01hcCA9IG5ldyBNYXA8c3RyaW5nLCAoU3R5bGVUZW1wbGF0ZSkgfCBTdHlsZUNvbGxlY3Rpb24+KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZWhvbGRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2ldO1xuICAgICAgcmVzdWx0ICs9IGxpdGVyYWxzW2ldO1xuICAgICAgaWYgKHJlc3VsdC5lbmRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgIHx8IHBsYWNlaG9sZGVyIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld0lEID0gY3JlYXRlVW5pcXVlSWQoKTtcbiAgICAgICAgICBkc01hcC5zZXQobmV3SUQsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXN1bHQgKz0gbmV3SUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSBwbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGxhc3QgbGl0ZXJhbFxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tsaXRlcmFscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjc3MgPSByZXN1bHQucmVwbGFjZShTVFlMRV9URU1QTEFURV9SRUdFWCgpLCAoc3RyKSA9PiB7XG4gICAgICBpZiAoZHNNYXAuaGFzKHN0cikpIHtcbiAgICAgICAgY29uc3QgZm4gPSBkc01hcC5nZXQoc3RyKSE7XG4gICAgICAgIHJldHVybiBgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2RzJyl9JHtzdDJjKGZuLCAnfHwmfHwnKX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTHlsUGFyc2UoY3NzLCBjbGFzc05hbWUpLnRvQ3NzKCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXF1ZUlkKCkge1xuICByZXR1cm4gYFN0eWxlVGVtcGxhdGVbX18keyhpZCsrKS50b1N0cmluZygzNil9XWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3Rvcih0ZXh0ID0gJ2lkJykge1xuICByZXR1cm4gYC8qID4+ICR7dGV4dH0gLS0gJHtNYXRoLmZsb29yKG5ldyBEYXRlKCkudmFsdWVPZigpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpfSAqL2A7XG59XG5cbnR5cGUgVHJhbnNmb3JtZXI8VD4gPSAoc3Q6IFQpID0+IChTdHlsZVRlbXBsYXRlKTtcblxuZXhwb3J0IGNsYXNzIFN0eWxlQ29sbGVjdGlvbjxUID0gYW55PiB7XG4gIHByaXZhdGUgX3RlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdO1xuICBwcml2YXRlIF90cmFuc2Zvcm1lcj86IFRyYW5zZm9ybWVyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKC4uLnRlbXBsYXRlczogKFQpW10pXG4gIGNvbnN0cnVjdG9yKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuICAgIHRoaXMuY3NzID0gdGhpcy5jc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZCguLi50ZW1wbGF0ZXM6IChUKVtdKTogU3R5bGVDb2xsZWN0aW9uPFQ+O1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb247XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbiB8IFN0eWxlQ29sbGVjdGlvbjxUPiB7XG4gICAgLy8gcmV0dXJuIG5ldyBTdHlsZUNvbGxlY3Rpb24oLi4uWy4uLnRoaXMuX3RlbXBsYXRlcywgLi4udGVtcGxhdGVzXSk7XG4gICAgdGhpcy5fdGVtcGxhdGVzLnB1c2goLi4udGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBUcmFuc2Zvcm0gc3R5bGUgKi9cbiAgc2V0VHJhbnNmb3JtZXIodHJhbnNmb3JtZXI6IFRyYW5zZm9ybWVyPFQ+KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtZXIgPSB0cmFuc2Zvcm1lcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFN0eWxlVGVtcGxhdGVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgY3NzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGxpbiA9ICcnO1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRoaXMuX3RlbXBsYXRlcztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGVtcGxhdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IHRlbXBsYXRlOiBTdHlsZVRlbXBsYXRlO1xuICAgICAgaWYgKHRoaXMuX3RyYW5zZm9ybWVyKSB7XG4gICAgICAgIHRlbXBsYXRlID0gKCh0aGlzLl90cmFuc2Zvcm1lcih0ZW1wbGF0ZXNbaW5kZXhdIGFzIFQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wbGF0ZSA9ICh0ZW1wbGF0ZXNbaW5kZXhdIGFzIFN0eWxlVGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgbGluICs9IHRlbXBsYXRlKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW47XG4gIH1cblxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhIC4uLntzdHlsZX0gdG8gY3NzXG4gKiBGb3IgaW50ZXJuYWwgdXNlIHB1cnBvc2VzIG9ubHlcbiAqIEBwYXJhbSBmbiBTdHlsZVRlbXBsYXRlIG9yIFN0eWxlQ29sbGVjdGlvblxuICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdDJjKFxuICBmbjogU3R5bGVUZW1wbGF0ZSB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmIChmbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChmbiBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgIHJldHVybiBmbi5jc3MoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZm4oY2xhc3NOYW1lKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlVGVtcGxhdGUoXG4vLyAgIGZuOiBTdHlsZVRlbXBsYXRlXG4vLyAgICkge1xuLy8gICBpZiAoZm4ubGVuZ3RoKSB7XG4vLyAgICAgcmV0dXJuIGZuIGFzIFN0eWxlVGVtcGxhdGU7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIChmbiBhcyAoKCkgPT4gU3R5bGVUZW1wbGF0ZSkpKCk7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0lkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSBfY2hhcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfbmV4dElkOiBudW1iZXJbXTtcbiAgY29uc3RydWN0b3IoY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSB7XG4gICAgdGhpcy5fY2hhcnMgPSBjaGFycztcbiAgICB0aGlzLl9uZXh0SWQgPSBbMF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IHI6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHRoaXMuX25leHRJZCkge1xuICAgICAgci51bnNoaWZ0KHRoaXMuX2NoYXJzW2NoYXJdKTtcbiAgICB9XG4gICAgdGhpcy5faW5jcmVtZW50KCk7XG4gICAgcmV0dXJuIHIuam9pbignJyk7XG4gIH1cblxuICBfaW5jcmVtZW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbmV4dElkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB2YWwgPSArK3RoaXMuX25leHRJZFtpXTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5fY2hhcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX25leHRJZFtpXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25leHRJZC5wdXNoKDApO1xuICB9XG59XG4iXX0=