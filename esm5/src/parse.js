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
                        if (current.startsWith('/* >> ds')) {
                            previous.push(current.replace(/\|\|\&\|\|/g, sel_1));
                        }
                        else if (current.startsWith('/* >> cc')) {
                            previous.push(transformCC(current, sel_1));
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
            // return (css
            //   ? `${sel}{${css}}`
            //   :  '') + contentRendered;
            // if (content.startsWith('/* >> ds')) {
            //   return content.replace(/\|\|\&\|\|/g, sel);
            // }
            // if (content.startsWith('/* >> cc')) {
            //   content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
            //   let variable = content.slice(2, content.length - 1);
            //   variable = `st2c((${variable}), \`${sel}\`)`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDOztBQUM3RCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBMktDO1FBMUtDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO3FCQUFNO29CQUNMLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLElBQUksWUFBWSxFQUFFO3dCQUNoQixTQUFTLENBQUMsSUFBSSxDQUNaLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQ2hCLENBQUM7d0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3lCQUN2QjtxQkFDRjt5QkFBTTt3QkFDTCxTQUFTLENBQUMsSUFBSSxDQUNaLE1BQU07NkJBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQzs2QkFDVixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQ3BCLENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFFOUM7Z0JBR0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjthQUNGO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzFDLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQztnQkFFckIsc0JBQXNCO2dCQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0Isa0JBQWtCO2dCQUNsQixrQ0FBa0M7Z0JBQ2xDLHlFQUF5RTtnQkFDekUsNERBQTREO2dCQUM1RCwrQkFBK0I7YUFDaEM7aUJBQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxxQkFBcUI7Z0JBQ3JCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLHNCQUFzQjtnQkFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQyxJQUFJLENBQUMsS0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFTLENBQUMsQ0FBQzthQUM3RTtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDaEUsT0FBTyxFQUFFLENBQUM7cUJBQ1g7b0JBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFnQyxRQUFRLE1BQUcsQ0FBQyxDQUFDO3FCQUM5RDtvQkFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzNCLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQ0QsUUFBUSxJQUFJLEdBQUcsQ0FBQztvQkFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFTLENBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUNBQWlDO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNyQixJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDekQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDL0IsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztvQkFDaEMsSUFBTSxLQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxJQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBRSxPQUFPO3dCQUVwRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFFM0MsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzRCQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3BEOzZCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTs0QkFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQzFDOzZCQUFNOzRCQUNMLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs2QkFDcEI7aUNBQU07Z0NBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NkJBQzFCO3lCQUNGO3dCQUNELE9BQU8sUUFBUSxDQUFDO29CQUNsQixDQUFDLEVBQUUsRUFBMkIsQ0FBQzt5QkFDNUIsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUksS0FBRyxTQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUF2RCxDQUF1RCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqRix5QkFBeUI7b0JBQ3pCLFFBQVE7b0JBQ1IseUJBQXlCO29CQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25CO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDL0IsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFQLENBQU8sQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7WUFDekIsSUFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFZLENBQUM7WUFFaEMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzFELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzFCO3lCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDekMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzFCO3lCQUFNO3dCQUNMLCtCQUErQjt3QkFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZDtpQkFDRjthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNO3dCQUNqQixDQUFDLENBQUksR0FBRyxTQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQUc7d0JBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQ047cUJBQU07b0JBQ0wsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQjtZQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsOEJBQThCO1lBQzlCLHdDQUF3QztZQUN4QyxnREFBZ0Q7WUFDaEQsSUFBSTtZQUNKLHdDQUF3QztZQUN4Qyw4REFBOEQ7WUFDOUQseURBQXlEO1lBQ3pELGtEQUFrRDtZQUNsRCw4QkFBOEI7WUFDOUIsSUFBSTtZQUNKLHdCQUF3QjtZQUV4Qiw2QkFBNkI7WUFDN0IsaUNBQWlDO1lBQ2pDLElBQUk7WUFDSiwrQkFBK0I7UUFDakMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhCLENBQUM7SUFFTyxvQ0FBaUIsR0FBekIsVUFBMEIsU0FBdUI7UUFDL0MsSUFBSSxLQUFLLEdBQWtCLElBQUksQ0FBQztRQUNoQyxJQUFNLEdBQUcsR0FBRyxTQUFTO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFO1lBQ25CLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsYUFBYTtnQkFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxFQVBRLENBT1IsQ0FBQzthQUNGLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO1lBQ3BCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRTtnQkFDNUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNwQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzVDO2dCQUNELE9BQVUsSUFBSSxTQUFJLEVBQUksQ0FBQztZQUN6QixDQUFDLENBQUMsRUFMOEIsQ0FLOUIsQ0FBQyxDQUFDO1lBQ0osT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUViLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBVSxLQUFLLFNBQUksR0FBSyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUFqTkQsSUFpTkM7O0FBRUQsU0FBUyxXQUFXLENBQUMsT0FBZSxFQUFFLEdBQVc7SUFDL0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxVQUFVLEdBQUcsV0FBUyxVQUFVLFlBQVEsR0FBRyxPQUFLLENBQUM7SUFDakQsT0FBTyxPQUFNLFVBQVUsTUFBRyxDQUFDO0FBQzdCLENBQUM7QUFJRCxNQUFNLFVBQVUsR0FBRyxDQUFDLFFBQThCO0lBQUUsc0JBQWlHO1NBQWpHLFVBQWlHLEVBQWpHLHFCQUFpRyxFQUFqRyxJQUFpRztRQUFqRyxxQ0FBaUc7O0lBQ25KLE9BQU8sVUFBQyxTQUFpQjtRQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQTZDLENBQUM7UUFDbkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxPQUFPLFdBQVcsS0FBSyxVQUFVO3VCQUNoQyxXQUFXLFlBQVksZUFBZSxFQUN6QztvQkFDQSxJQUFNLEtBQUssR0FBRyxjQUFjLEVBQUUsQ0FBQztvQkFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUM7aUJBQ2pCO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLFdBQVcsQ0FBQzthQUN2QjtTQUNGO1FBRUQsdUJBQXVCO1FBQ3ZCLE1BQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsVUFBQyxHQUFHO1lBQ3JELElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztnQkFDM0IsT0FBTyxLQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFHLENBQUM7YUFDbkU7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsY0FBYztJQUNyQixPQUFPLHFCQUFtQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFHLENBQUM7QUFDbkQsQ0FBQztBQUVELFNBQVMsMkJBQTJCLENBQUMsSUFBVztJQUFYLHFCQUFBLEVBQUEsV0FBVztJQUM5QyxPQUFPLFdBQVMsSUFBSSxZQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQUssQ0FBQztBQUNoRyxDQUFDO0FBSUQ7SUFLRTtRQUFZLG1CQUFtQzthQUFuQyxVQUFtQyxFQUFuQyxxQkFBbUMsRUFBbkMsSUFBbUM7WUFBbkMsOEJBQW1DOztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFJRCw2QkFBRyxHQUFIOztRQUFJLG1CQUFtQzthQUFuQyxVQUFtQyxFQUFuQyxxQkFBbUMsRUFBbkMsSUFBbUM7WUFBbkMsOEJBQW1DOztRQUNyQyxxRUFBcUU7UUFDckUsQ0FBQSxLQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxJQUFJLDRCQUFJLFNBQVMsR0FBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsd0NBQWMsR0FBZCxVQUFlLFdBQTJCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILDZCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNuQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksUUFBUSxTQUFlLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLFFBQVEsR0FBSSxTQUFTLENBQUMsS0FBSyxDQUFtQixDQUFDO2FBQ2hEO1lBQ0QsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxJQUFJLENBQ2xCLEVBQXNELEVBQ3RELFNBQWlCO0lBQ2pCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxJQUFJLEVBQUUsWUFBWSxlQUFlLEVBQUU7UUFDakMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELDBDQUEwQztBQUMxQyxzQkFBc0I7QUFDdEIsUUFBUTtBQUNSLHFCQUFxQjtBQUNyQixrQ0FBa0M7QUFDbEMsYUFBYTtBQUNiLDhDQUE4QztBQUM5QyxNQUFNO0FBQ04sSUFBSTtBQUVKO0lBR0UsMkJBQVksS0FBb0M7UUFBcEMsc0JBQUEsRUFBQSxvQ0FBb0M7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBSSxHQUFKOztRQUNFLElBQU0sQ0FBQyxHQUFhLEVBQUUsQ0FBQzs7WUFDdkIsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTVCLElBQU0sSUFBSSxXQUFBO2dCQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBMSU5FX0ZFRURfUkVHRVggPSAoKSA9PiAvKFxcbj9bXlxcbl0rXFxuPykvZztcbmNvbnN0IEFNUEVSU0FORF9SRUdFWCA9ICgpID0+IC8mL2c7XG5jb25zdCBTVFlMRV9URU1QTEFURV9SRUdFWCA9ICgpID0+IC9TdHlsZVRlbXBsYXRlXFxbW1xcd10rXFxdL2c7XG5sZXQgaWQ6IG51bWJlciA9IDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgbHlsIHN0eWxlIGJsb2NrIHRvIENTU1xuICpcbiAqIEFsbG93ZWQgYmxvY2tzOlxuICpcbiAqIC8vIFNpbXBsZVxuICogY29uc3QgQlVUVE9OX1NUWUxFID0gbHlsIGB7XG4gKiAgIHBhZGRpbmc6IDhweCAxMnB4XG4gKiAgIGZvbnQtc2l6ZTogMTRweFxuICogICBib3JkZXItcmFkaXVzOiA5cHhcbiAqICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMFxuICogfWBcbiAqXG4gKiAvLyBOZXN0aW5nXG4gKiBjb25zdCBzdHlsZSA9IGx5bCBge1xuICogICB1bCA+IHtcbiAqICAgICBsaSB7XG4gKiAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gKiAgICAgfVxuICogICB9XG4gKiAgIHAge1xuICogICAgIH4ge1xuICogICAgICAgc3BhbiB7XG4gKiAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqIH1gXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTHlsUGFyc2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcgPSAnJHtjbGFzc05hbWV9J1xuICApIHsgfVxuXG4gIHRvQ3NzKCkge1xuICAgIGNvbnN0IHNlbGVjdG9yczogKHN0cmluZ1tdKVtdID0gW107XG4gICAgbGV0IHNlbGVjdG9yOiBudWxsIHwgc3RyaW5nID0gbnVsbDtcbiAgICBjb25zdCBydWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoLyhcXC9cXC9cXHNbXlxcblxccl0qKD86W1xcblxccl0rfCQpKS9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC8sXFxuL2csICcsJylcbiAgICAgIC5yZXBsYWNlKExJTkVfRkVFRF9SRUdFWCgpLCAoX2V4LCBmdWxsTGluZTogc3RyaW5nKSA9PiB7XG4gICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnRyaW0oKTtcblxuICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCd7JykpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChbdGhpcy5fY2xhc3NOYW1lXSk7XG4gICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvcnNbMF1bMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGluZV8xID0gZnVsbExpbmUuc2xpY2UoMCwgZnVsbExpbmUubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGlzTWVkaWFRdWVyeSA9IGxpbmVfMS5pbmNsdWRlcygnQCcpO1xuICAgICAgICAgIGlmIChpc01lZGlhUXVlcnkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFxuICAgICAgICAgICAgICBbbGluZV8xLnRyaW0oKV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXJ1bGVzLmhhcyhsaW5lXzEpKSB7XG4gICAgICAgICAgICAgIHJ1bGVzLnNldChsaW5lXzEsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3JzLnB1c2goXG4gICAgICAgICAgICAgIGxpbmVfMVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAubWFwKF8gPT4gXy50cmltKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5sZW5ndGggPT09IDEgJiYgZnVsbExpbmUuZW5kc1dpdGgoJ30nKSkge1xuICAgICAgICBzZWxlY3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgY29uc3QgbGluID0gZnVsbExpbmU7XG5cbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGxpbik7XG4gICAgICAgIC8vIGZ1bGxMaW5lID0gbGluO1xuICAgICAgICAvLyAvKiogRm9yIG5vbiBMeWxNb2R1bGU8ICovZWxzZSB7XG4gICAgICAgIC8vICAgZnVsbExpbmUgPSBgXFwkeygke2xpbi5zbGljZSgyLCBsaW4ubGVuZ3RoIC0gMSl9KShcXGAke3NlbGVjdG9yfVxcYCl9YDtcbiAgICAgICAgLy8gICBydWxlcy5zZXQoY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpLCBmdWxsTGluZSk7XG4gICAgICAgIC8vIH0gLyoqIGZvciBub24gTHlsTW9kdWxlPiAgKi9cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmdWxsTGluZS5zbGljZSgzKTtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2NjJyl9JHtjb250ZW50fWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxMaW5lKSB7XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCd1bmRlZmluZWQnKSB8fCBmdWxsTGluZS5zdGFydHNXaXRoKCcvLyAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJzsnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEbyBub3QgcmVxdWlyZSBzZW1pY29sb24gaW4gWyR7ZnVsbExpbmV9XWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJzogJykpIHtcbiAgICAgICAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUucmVwbGFjZSgnOiAnLCAnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsTGluZSArPSAnOyc7XG4gICAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yISkhLnB1c2goZnVsbExpbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICAvLyBKb2luIG1lZGlhIHF1ZXJpZXMgJiBrZXlmcmFtZXNcbiAgICBydWxlcy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hBcnJheSA9IGtleS5tYXRjaCgvKEBbXlxcJHtdKig/OlxcJHtbXntdKikqKXsvKTtcbiAgICAgIGlmIChtYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gbWF0Y2hBcnJheVsxXTtcbiAgICAgICAgaWYgKG1lZGlhICE9PSBrZXkgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gcnVsZXMuZ2V0KG1lZGlhKSE7XG4gICAgICAgICAgY29uc3Qgc2VsID0ga2V5LnJlcGxhY2UobWVkaWEgKyAneycsICcnKTtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFmdGVyICsgdmFsLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIHByZXZpb3VzLnB1c2goY3VycmVudC5yZXBsYWNlKC9cXHxcXHxcXCZcXHxcXHwvZywgc2VsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAgICAgICBwcmV2aW91cy5wdXNoKHRyYW5zZm9ybUNDKGN1cnJlbnQsIHNlbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdCkpIHtcbiAgICAgICAgICAgICAgICBsYXN0LnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMucHVzaChbY3VycmVudF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgfSwgW10gYXMgKHN0cmluZyB8IHN0cmluZ1tdKVtdKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IEFycmF5LmlzQXJyYXkoaXRlbSkgPyBgJHtzZWx9eyR7aXRlbS5qb2luKCcnKX19YCA6IGl0ZW0pLmpvaW4oJycpO1xuICAgICAgICAgIC8vIGNvbnN0IG5ld1ZhbHVlID0gYWZ0ZXJcbiAgICAgICAgICAvLyArIHNlbFxuICAgICAgICAgIC8vICsgYHske3ZhbC5qb2luKCcnKX19YDtcbiAgICAgICAgICBydWxlcy5zZXQobWVkaWEsIFtuZXdWYWx1ZV0pO1xuICAgICAgICAgIHJ1bGVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShydWxlcy5lbnRyaWVzKCkpXG4gICAgICAuZmlsdGVyKHJ1bGUgPT4gcnVsZVsxXSlcbiAgICAgIC5tYXAocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHJ1bGVbMF07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gcnVsZVsxXTtcbiAgICAgICAgY29uc3QgY3NzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50UmVuZGVyZWQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8c3RyaW5nW10+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XG4gICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgICAgICAgY29udGVudFJlbmRlcmVkLnB1c2goY29udGVudC5yZXBsYWNlKC9cXHxcXHxcXCZcXHxcXHwvZywgc2VsKSk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY29udGVudFJlbmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBjYycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKHRyYW5zZm9ybUNDKGNvbnRlbnQsIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBjc3MgKz0gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICAgICAgICAgIGNzcy5wdXNoKGNvbnRlbnQpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNldCkubWFwKChfKSA9PiB7XG4gICAgICAgICAgaWYgKF8gPT09IGNzcykge1xuICAgICAgICAgICAgcmV0dXJuIGNzcy5sZW5ndGhcbiAgICAgICAgICAgID8gYCR7c2VsfXske2Nzcy5qb2luKCcnKX19YFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8uam9pbignJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgLy8gcmV0dXJuIChjc3NcbiAgICAgICAgLy8gICA/IGAke3NlbH17JHtjc3N9fWBcbiAgICAgICAgLy8gICA6ICAnJykgKyBjb250ZW50UmVuZGVyZWQ7XG4gICAgICAgIC8vIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgLy8gICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9cXHxcXHxcXCZcXHxcXHwvZywgc2VsKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBjYycpKSB7XG4gICAgICAgIC8vICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gICAgICAgIC8vICAgbGV0IHZhcmlhYmxlID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAvLyAgIHZhcmlhYmxlID0gYHN0MmMoKCR7dmFyaWFibGV9KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgIC8vICAgcmV0dXJuIGBcXCR7JHt2YXJpYWJsZX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyAvLyBmb3Igbm9uIEx5bE1vZHVsZT5cblxuICAgICAgICAvLyBpZiAoc2VsLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBgJHtzZWx9eyR7cnVsZVsxXX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSkge1xuICAgIGxldCBtZWRpYTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2VsID0gc2VsZWN0b3JzXG4gICAgICAubWFwKF8gPT4gXy5maWx0ZXIoX18gPT4ge1xuICAgICAgICBpZiAoX18uc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgLy8gc2F2ZSBtZWRpYVxuICAgICAgICAgIG1lZGlhID0gX187XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfXztcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwcmV2Lm1hcChpdGVtID0+IGN1cnJlbnQubWFwKGN1ID0+IHtcbiAgICAgICAgICBpZiAoY3UuaW5jbHVkZXMoJyYnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1LnJlcGxhY2UoQU1QRVJTQU5EX1JFR0VYKCksIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7aXRlbX0gJHtjdX1gO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcsJyk7XG5cbiAgICBpZiAobWVkaWEpIHtcbiAgICAgIHJldHVybiBgJHttZWRpYX17JHtzZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNDKGNvbnRlbnQ6IHN0cmluZywgc2VsOiBzdHJpbmcpIHtcbiAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gIGxldCBleHByZXNzaW9uID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICBleHByZXNzaW9uID0gYHN0MmMoKCR7ZXhwcmVzc2lvbn0pLCBcXGAke3NlbH1cXGApYDtcbiAgcmV0dXJuIGBcXCR7JHtleHByZXNzaW9ufX1gO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRlbXBsYXRlID0gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBseWwobGl0ZXJhbHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wbGFjZWhvbGRlcnM6IChzdHJpbmcgfCBDb2xvciB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bWJlciB8IFN0eWxlVGVtcGxhdGUgfCBudWxsIHwgdW5kZWZpbmVkKVtdKSB7XG4gIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgZHNNYXAgPSBuZXcgTWFwPHN0cmluZywgKFN0eWxlVGVtcGxhdGUpIHwgU3R5bGVDb2xsZWN0aW9uPigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2Vob2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1tpXTtcbiAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgICAgIGlmIChyZXN1bHQuZW5kc1dpdGgoJy4uLicpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCByZXN1bHQubGVuZ3RoIC0gMyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICB8fCBwbGFjZWhvbGRlciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdJRCA9IGNyZWF0ZVVuaXF1ZUlkKCk7XG4gICAgICAgICAgZHNNYXAuc2V0KG5ld0lELCBwbGFjZWhvbGRlcik7XG4gICAgICAgICAgcmVzdWx0ICs9IG5ld0lEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHRoZSBsYXN0IGxpdGVyYWxcbiAgICByZXN1bHQgKz0gbGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgY3NzID0gcmVzdWx0LnJlcGxhY2UoU1RZTEVfVEVNUExBVEVfUkVHRVgoKSwgKHN0cikgPT4ge1xuICAgICAgaWYgKGRzTWFwLmhhcyhzdHIpKSB7XG4gICAgICAgIGNvbnN0IGZuID0gZHNNYXAuZ2V0KHN0cikhO1xuICAgICAgICByZXR1cm4gYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpfSR7c3QyYyhmbiwgJ3x8Jnx8Jyl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEx5bFBhcnNlKGNzcywgY2xhc3NOYW1lKS50b0NzcygpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIGBTdHlsZVRlbXBsYXRlW19fJHsoaWQrKykudG9TdHJpbmcoMzYpfV1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IodGV4dCA9ICdpZCcpIHtcbiAgcmV0dXJuIGAvKiA+PiAke3RleHR9IC0tICR7TWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KX0gKi9gO1xufVxuXG50eXBlIFRyYW5zZm9ybWVyPFQ+ID0gKHN0OiBUKSA9PiAoU3R5bGVUZW1wbGF0ZSk7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZUNvbGxlY3Rpb248VCA9IGFueT4ge1xuICBwcml2YXRlIF90ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXTtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXI/OiBUcmFuc2Zvcm1lcjxUPjtcblxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChUKVtdKVxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSkge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcbiAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGQoLi4udGVtcGxhdGVzOiAoVClbXSk6IFN0eWxlQ29sbGVjdGlvbjxUPjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uO1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb24gfCBTdHlsZUNvbGxlY3Rpb248VD4ge1xuICAgIC8vIHJldHVybiBuZXcgU3R5bGVDb2xsZWN0aW9uKC4uLlsuLi50aGlzLl90ZW1wbGF0ZXMsIC4uLnRlbXBsYXRlc10pO1xuICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKC4uLnRlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVHJhbnNmb3JtIHN0eWxlICovXG4gIHNldFRyYW5zZm9ybWVyKHRyYW5zZm9ybWVyOiBUcmFuc2Zvcm1lcjxUPikge1xuICAgIHRoaXMuX3RyYW5zZm9ybWVyID0gdHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBTdHlsZVRlbXBsYXRlXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0aGlzLl90ZW1wbGF0ZXM7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRlbXBsYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgIGlmICh0aGlzLl90cmFuc2Zvcm1lcikge1xuICAgICAgICB0ZW1wbGF0ZSA9ICgodGhpcy5fdHJhbnNmb3JtZXIodGVtcGxhdGVzW2luZGV4XSBhcyBUKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGxhdGUgPSAodGVtcGxhdGVzW2luZGV4XSBhcyBTdHlsZVRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIGxpbiArPSB0ZW1wbGF0ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9XG5cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSAuLi57c3R5bGV9IHRvIGNzc1xuICogRm9yIGludGVybmFsIHVzZSBwdXJwb3NlcyBvbmx5XG4gKiBAcGFyYW0gZm4gU3R5bGVUZW1wbGF0ZSBvciBTdHlsZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3QyYyhcbiAgZm46IFN0eWxlVGVtcGxhdGUgfCBTdHlsZUNvbGxlY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZm4gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAoZm4gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gZm4uY3NzKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZuKGNsYXNzTmFtZSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZVRlbXBsYXRlKFxuLy8gICBmbjogU3R5bGVUZW1wbGF0ZVxuLy8gICApIHtcbi8vICAgaWYgKGZuLmxlbmd0aCkge1xuLy8gICAgIHJldHVybiBmbiBhcyBTdHlsZVRlbXBsYXRlO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoZm4gYXMgKCgpID0+IFN0eWxlVGVtcGxhdGUpKSgpO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdJZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgX2NoYXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25leHRJZDogbnVtYmVyW107XG4gIGNvbnN0cnVjdG9yKGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jykge1xuICAgIHRoaXMuX2NoYXJzID0gY2hhcnM7XG4gICAgdGhpcy5fbmV4dElkID0gWzBdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCByOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hhciBvZiB0aGlzLl9uZXh0SWQpIHtcbiAgICAgIHIudW5zaGlmdCh0aGlzLl9jaGFyc1tjaGFyXSk7XG4gICAgfVxuICAgIHRoaXMuX2luY3JlbWVudCgpO1xuICAgIHJldHVybiByLmpvaW4oJycpO1xuICB9XG5cbiAgX2luY3JlbWVudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25leHRJZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsID0gKyt0aGlzLl9uZXh0SWRbaV07XG4gICAgICBpZiAodmFsID49IHRoaXMuX2NoYXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9uZXh0SWRbaV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9uZXh0SWQucHVzaCgwKTtcbiAgfVxufVxuIl19