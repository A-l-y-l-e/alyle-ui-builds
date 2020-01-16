import * as tslib_1 from "tslib";
var LINE_FEED_REGEX = function () { return /(\n?[^\n]+\n?)/g; };
var ɵ0 = LINE_FEED_REGEX;
var AMPERSAND_REGEX = function () { return /&/g; };
var ɵ1 = AMPERSAND_REGEX;
var STYLE_TEMPLATE_REGEX = function () { return /__LY_EXPRESSION__\[[\w]+\]/g; };
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
        // Save expressions
        var exMap = {};
        for (var i = 0; i < placeholders.length; i++) {
            var placeholder = placeholders[i];
            result += literals[i];
            if (result.endsWith('...')) {
                result = result.slice(0, result.length - 3);
                if (typeof placeholder === 'function'
                    || placeholder instanceof StyleCollection) {
                    result += "" + createUniqueCommentSelector('ds') + st2c(placeholder, '||&||');
                }
            }
            else {
                var newID = "__LY_EXPRESSION__[__" + (id++).toString(36) + "]";
                result += newID;
                exMap[newID] = "" + placeholder;
            }
        }
        // add the last literal
        result += literals[literals.length - 1];
        var css = new LylParse(result, className).toCss();
        return css.replace(STYLE_TEMPLATE_REGEX(), function (str) {
            if (str in exMap) {
                return exMap[str];
            }
            return '';
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sZUFBZSxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7QUFDaEQsSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0FBQ25DLElBQU0sb0JBQW9CLEdBQUcsY0FBTSxPQUFBLDZCQUE2QixFQUE3QixDQUE2QixDQUFDOztBQUNqRSxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0g7SUFFRSxrQkFDVSxTQUFpQixFQUNqQixVQUFtQztRQUFuQywyQkFBQSxFQUFBLDJCQUFtQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCx3QkFBSyxHQUFMO1FBQUEsaUJBeUpDO1FBeEpDLElBQU0sU0FBUyxHQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQWdCO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO3FCQUFNO29CQUNMLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLElBQUksWUFBWSxFQUFFO3dCQUNoQixTQUFTLENBQUMsSUFBSSxDQUNaLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQ2hCLENBQUM7d0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3lCQUN2QjtxQkFDRjt5QkFBTTt3QkFDTCxTQUFTLENBQUMsSUFBSSxDQUNaLE1BQU07NkJBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQzs2QkFDVixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQ3BCLENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFFOUM7Z0JBR0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjthQUNGO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzFDLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQztnQkFFckIsc0JBQXNCO2dCQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0Isa0JBQWtCO2dCQUNsQixrQ0FBa0M7Z0JBQ2xDLHlFQUF5RTtnQkFDekUsNERBQTREO2dCQUM1RCwrQkFBK0I7YUFDaEM7aUJBQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxxQkFBcUI7Z0JBQ3JCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLHNCQUFzQjtnQkFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQyxJQUFJLENBQUMsS0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFTLENBQUMsQ0FBQzthQUM3RTtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDaEUsT0FBTyxFQUFFLENBQUM7cUJBQ1g7b0JBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFnQyxRQUFRLE1BQUcsQ0FBQyxDQUFDO3FCQUM5RDtvQkFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzNCLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQ0QsUUFBUSxJQUFJLEdBQUcsQ0FBQztvQkFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFTLENBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUNBQWlDO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNyQixJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDekQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDL0IsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztvQkFDaEMsSUFBTSxLQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxJQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBRSxPQUFPO3dCQUVwRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsdUVBQXVFO3dCQUN2RSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7NEJBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDeEU7NkJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzRCQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDOUQ7NkJBQU07NEJBQ0wsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dDQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUNwQjtpQ0FBTTtnQ0FDTCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs2QkFDMUI7eUJBQ0Y7d0JBQ0QsT0FBTyxRQUFRLENBQUM7b0JBQ2xCLENBQUMsRUFBRSxFQUEyQixDQUFDO3lCQUM1QixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFHLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQXZELENBQXVELENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pGLHlCQUF5QjtvQkFDekIsUUFBUTtvQkFDUix5QkFBeUI7b0JBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQixNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQVAsQ0FBTyxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztZQUN6QixJQUFNLGVBQWUsR0FBYSxFQUFFLENBQUM7WUFDckMsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQVksQ0FBQztZQUVoQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDcEQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ2xDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDMUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDMUI7eUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN6QyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDMUI7eUJBQU07d0JBQ0wsK0JBQStCO3dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNkO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU07d0JBQ2pCLENBQUMsQ0FBSSxHQUFHLFNBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBRzt3QkFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDTjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25CO1lBQ0gsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhCLENBQUM7SUFFTyxvQ0FBaUIsR0FBekIsVUFBMEIsU0FBdUI7UUFDL0MsSUFBSSxLQUFLLEdBQWtCLElBQUksQ0FBQztRQUNoQyxJQUFNLEdBQUcsR0FBRyxTQUFTO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFO1lBQ25CLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsYUFBYTtnQkFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxFQVBRLENBT1IsQ0FBQzthQUNGLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO1lBQ3BCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRTtnQkFDNUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNwQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzVDO2dCQUNELE9BQVUsSUFBSSxTQUFJLEVBQUksQ0FBQztZQUN6QixDQUFDLENBQUMsRUFMOEIsQ0FLOUIsQ0FBQyxDQUFDO1lBQ0osT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUViLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBVSxLQUFLLFNBQUksR0FBSyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEvTEQsSUErTEM7O0FBRUQsU0FBUyxXQUFXLENBQUMsT0FBZSxFQUFFLEdBQVc7SUFDL0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxVQUFVLEdBQUcsV0FBUyxVQUFVLFlBQVEsR0FBRyxPQUFLLENBQUM7SUFDakQsT0FBTyxPQUFNLFVBQVUsTUFBRyxDQUFDO0FBQzdCLENBQUM7QUFJRCxNQUFNLFVBQVUsR0FBRyxDQUFDLFFBQThCO0lBQUUsc0JBQWlHO1NBQWpHLFVBQWlHLEVBQWpHLHFCQUFpRyxFQUFqRyxJQUFpRztRQUFqRyxxQ0FBaUc7O0lBQ25KLE9BQU8sVUFBQyxTQUFpQjtRQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsbUJBQW1CO1FBQ25CLElBQU0sS0FBSyxHQUE0QixFQUFFLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxPQUFPLFdBQVcsS0FBSyxVQUFVO3VCQUNoQyxXQUFXLFlBQVksZUFBZSxFQUN6QztvQkFDQSxNQUFNLElBQUksS0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBRyxDQUFDO2lCQUMvRTthQUNGO2lCQUFNO2dCQUNMLElBQU0sS0FBSyxHQUFHLHlCQUF1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFHLENBQUM7Z0JBQzVELE1BQU0sSUFBSSxLQUFLLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFHLFdBQWEsQ0FBQzthQUNqQztTQUNGO1FBRUQsdUJBQXVCO1FBQ3ZCLE1BQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsVUFBQyxHQUFHO1lBQzdDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDaEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsMkJBQTJCLENBQUMsSUFBVztJQUFYLHFCQUFBLEVBQUEsV0FBVztJQUM5QyxPQUFPLFdBQVMsSUFBSSxZQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQUssQ0FBQztBQUNoRyxDQUFDO0FBSUQ7SUFLRTtRQUFZLG1CQUFtQzthQUFuQyxVQUFtQyxFQUFuQyxxQkFBbUMsRUFBbkMsSUFBbUM7WUFBbkMsOEJBQW1DOztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFJRCw2QkFBRyxHQUFIOztRQUFJLG1CQUFtQzthQUFuQyxVQUFtQyxFQUFuQyxxQkFBbUMsRUFBbkMsSUFBbUM7WUFBbkMsOEJBQW1DOztRQUNyQyxxRUFBcUU7UUFDckUsQ0FBQSxLQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxJQUFJLDRCQUFJLFNBQVMsR0FBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsd0NBQWMsR0FBZCxVQUFlLFdBQTJCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILDZCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNuQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksUUFBUSxTQUFlLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLFFBQVEsR0FBSSxTQUFTLENBQUMsS0FBSyxDQUFtQixDQUFDO2FBQ2hEO1lBQ0QsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxJQUFJLENBQ2xCLEVBQXNELEVBQ3RELFNBQWlCO0lBQ2pCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxJQUFJLEVBQUUsWUFBWSxlQUFlLEVBQUU7UUFDakMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELDBDQUEwQztBQUMxQyxzQkFBc0I7QUFDdEIsUUFBUTtBQUNSLHFCQUFxQjtBQUNyQixrQ0FBa0M7QUFDbEMsYUFBYTtBQUNiLDhDQUE4QztBQUM5QyxNQUFNO0FBQ04sSUFBSTtBQUVKO0lBR0UsMkJBQVksS0FBb0M7UUFBcEMsc0JBQUEsRUFBQSxvQ0FBb0M7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBSSxHQUFKOztRQUNFLElBQU0sQ0FBQyxHQUFhLEVBQUUsQ0FBQzs7WUFDdkIsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTVCLElBQU0sSUFBSSxXQUFBO2dCQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBMSU5FX0ZFRURfUkVHRVggPSAoKSA9PiAvKFxcbj9bXlxcbl0rXFxuPykvZztcbmNvbnN0IEFNUEVSU0FORF9SRUdFWCA9ICgpID0+IC8mL2c7XG5jb25zdCBTVFlMRV9URU1QTEFURV9SRUdFWCA9ICgpID0+IC9fX0xZX0VYUFJFU1NJT05fX1xcW1tcXHddK1xcXS9nO1xubGV0IGlkOiBudW1iZXIgPSAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhIGx5bCBzdHlsZSBibG9jayB0byBDU1NcbiAqXG4gKiBBbGxvd2VkIGJsb2NrczpcbiAqXG4gKiAvLyBTaW1wbGVcbiAqIGNvbnN0IEJVVFRPTl9TVFlMRSA9IGx5bCBge1xuICogICBwYWRkaW5nOiA4cHggMTJweFxuICogICBmb250LXNpemU6IDE0cHhcbiAqICAgYm9yZGVyLXJhZGl1czogOXB4XG4gKiAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTBcbiAqIH1gXG4gKlxuICogLy8gTmVzdGluZ1xuICogY29uc3Qgc3R5bGUgPSBseWwgYHtcbiAqICAgdWwgPiB7XG4gKiAgICAgbGkge1xuICogICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICogICAgIH1cbiAqICAgfVxuICogICBwIHtcbiAqICAgICB+IHtcbiAqICAgICAgIHNwYW4ge1xuICogICAgICAgICBvcGFjaXR5OiAwLjg7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9YFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEx5bFBhcnNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nID0gJyR7Y2xhc3NOYW1lfSdcbiAgKSB7IH1cblxuICB0b0NzcygpIHtcbiAgICBjb25zdCBzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSA9IFtdO1xuICAgIGxldCBzZWxlY3RvcjogbnVsbCB8IHN0cmluZyA9IG51bGw7XG4gICAgY29uc3QgcnVsZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgdGhpcy5fdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKC8oXFwvXFwvXFxzW15cXG5cXHJdKig/OltcXG5cXHJdK3wkKSkvZywgJycpXG4gICAgICAucmVwbGFjZSgvLFxcbi9nLCAnLCcpXG4gICAgICAucmVwbGFjZShMSU5FX0ZFRURfUkVHRVgoKSwgKF9leCwgZnVsbExpbmU6IHN0cmluZykgPT4ge1xuICAgICAgZnVsbExpbmUgPSBmdWxsTGluZS50cmltKCk7XG5cbiAgICAgIGlmIChmdWxsTGluZS5lbmRzV2l0aCgneycpKSB7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goW3RoaXMuX2NsYXNzTmFtZV0pO1xuICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3JzWzBdWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxpbmVfMSA9IGZ1bGxMaW5lLnNsaWNlKDAsIGZ1bGxMaW5lLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBpc01lZGlhUXVlcnkgPSBsaW5lXzEuaW5jbHVkZXMoJ0AnKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgICBzZWxlY3RvcnMucHVzaChcbiAgICAgICAgICAgICAgW2xpbmVfMS50cmltKCldXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFydWxlcy5oYXMobGluZV8xKSkge1xuICAgICAgICAgICAgICBydWxlcy5zZXQobGluZV8xLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFxuICAgICAgICAgICAgICBsaW5lXzFcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLm1hcChfID0+IF8udHJpbSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUubGVuZ3RoID09PSAxICYmIGZ1bGxMaW5lLmVuZHNXaXRoKCd9JykpIHtcbiAgICAgICAgc2VsZWN0b3JzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAgIGlmICghcnVsZXMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIGNvbnN0IGxpbiA9IGZ1bGxMaW5lO1xuXG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChsaW4pO1xuICAgICAgICAvLyBmdWxsTGluZSA9IGxpbjtcbiAgICAgICAgLy8gLyoqIEZvciBub24gTHlsTW9kdWxlPCAqL2Vsc2Uge1xuICAgICAgICAvLyAgIGZ1bGxMaW5lID0gYFxcJHsoJHtsaW4uc2xpY2UoMiwgbGluLmxlbmd0aCAtIDEpfSkoXFxgJHtzZWxlY3Rvcn1cXGApfWA7XG4gICAgICAgIC8vICAgcnVsZXMuc2V0KGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKSwgZnVsbExpbmUpO1xuICAgICAgICAvLyB9IC8qKiBmb3Igbm9uIEx5bE1vZHVsZT4gICovXG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy4uLicpKSB7XG4gICAgICAgIC8vIGZvciBub24gTHlsTW9kdWxlPlxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnVsbExpbmUuc2xpY2UoMyk7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAvLyBJZ25vcmUgY29tcGlsZWQgY3NzXG4gICAgICAgIHJ1bGVzLmdldChzZWxlY3RvcikhLnB1c2goYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdjYycpfSR7Y29udGVudH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmdWxsTGluZSkge1xuICAgICAgICAgIGlmIChmdWxsTGluZS5pbmNsdWRlcygndW5kZWZpbmVkJykgfHwgZnVsbExpbmUuc3RhcnRzV2l0aCgnLy8gJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRG8gbm90IHJlcXVpcmUgc2VtaWNvbG9uIGluIFske2Z1bGxMaW5lfV1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCc6ICcpKSB7XG4gICAgICAgICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnJlcGxhY2UoJzogJywgJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbExpbmUgKz0gJzsnO1xuICAgICAgICAgIHJ1bGVzLmdldChzZWxlY3RvciEpIS5wdXNoKGZ1bGxMaW5lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgLy8gSm9pbiBtZWRpYSBxdWVyaWVzICYga2V5ZnJhbWVzXG4gICAgcnVsZXMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQXJyYXkgPSBrZXkubWF0Y2goLyhAW15cXCR7XSooPzpcXCR7W157XSopKil7Lyk7XG4gICAgICBpZiAobWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtZWRpYSA9IG1hdGNoQXJyYXlbMV07XG4gICAgICAgIGlmIChtZWRpYSAhPT0ga2V5ICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhZnRlciA9IHJ1bGVzLmdldChtZWRpYSkhO1xuICAgICAgICAgIGNvbnN0IHNlbCA9IGtleS5yZXBsYWNlKG1lZGlhICsgJ3snLCAnJyk7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhZnRlciArIHZhbC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIC8vIF9fUkVBRFlfXyBpcyBhZGRlZCB0byBiZSBpZ25vcmVkIGJ5IGNvbnRlbnQuc3RhcnRzV2l0aCAoJy8gKiA+PiB4eCcpXG4gICAgICAgICAgICBpZiAoY3VycmVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIHByZXZpb3VzLnB1c2goJy8qIF9fUkVBRFlfXyAqLycgKyBjdXJyZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5zdGFydHNXaXRoKCcvKiA+PiBjYycpKSB7XG4gICAgICAgICAgICAgIHByZXZpb3VzLnB1c2goJy8qIF9fUkVBRFlfXyAqLycgKyB0cmFuc2Zvcm1DQyhjdXJyZW50LCBzZWwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgICAgICAgbGFzdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzLnB1c2goW2N1cnJlbnRdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgIH0sIFtdIGFzIChzdHJpbmcgfCBzdHJpbmdbXSlbXSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pID8gYCR7c2VsfXske2l0ZW0uam9pbignJyl9fWAgOiBpdGVtKS5qb2luKCcnKTtcbiAgICAgICAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGFmdGVyXG4gICAgICAgICAgLy8gKyBzZWxcbiAgICAgICAgICAvLyArIGB7JHt2YWwuam9pbignJyl9fWA7XG4gICAgICAgICAgcnVsZXMuc2V0KG1lZGlhLCBbbmV3VmFsdWVdKTtcbiAgICAgICAgICBydWxlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocnVsZXMuZW50cmllcygpKVxuICAgICAgLmZpbHRlcihydWxlID0+IHJ1bGVbMV0pXG4gICAgICAubWFwKHJ1bGUgPT4ge1xuICAgICAgICBjb25zdCBzZWwgPSBydWxlWzBdO1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHJ1bGVbMV07XG4gICAgICAgIGNvbnN0IGNzczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY29udGVudFJlbmRlcmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0PHN0cmluZ1tdPigpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaCh0cmFuc2Zvcm1DQyhjb250ZW50LCBzZWwpKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY3NzICs9IGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgICAgICAgICBjc3MucHVzaChjb250ZW50KTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZXQpLm1hcCgoXykgPT4ge1xuICAgICAgICAgIGlmIChfID09PSBjc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3MubGVuZ3RoXG4gICAgICAgICAgICA/IGAke3NlbH17JHtjc3Muam9pbignJyl9fWBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLmpvaW4oJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSkge1xuICAgIGxldCBtZWRpYTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2VsID0gc2VsZWN0b3JzXG4gICAgICAubWFwKF8gPT4gXy5maWx0ZXIoX18gPT4ge1xuICAgICAgICBpZiAoX18uc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgLy8gc2F2ZSBtZWRpYVxuICAgICAgICAgIG1lZGlhID0gX187XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfXztcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwcmV2Lm1hcChpdGVtID0+IGN1cnJlbnQubWFwKGN1ID0+IHtcbiAgICAgICAgICBpZiAoY3UuaW5jbHVkZXMoJyYnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1LnJlcGxhY2UoQU1QRVJTQU5EX1JFR0VYKCksIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7aXRlbX0gJHtjdX1gO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcsJyk7XG5cbiAgICBpZiAobWVkaWEpIHtcbiAgICAgIHJldHVybiBgJHttZWRpYX17JHtzZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNDKGNvbnRlbnQ6IHN0cmluZywgc2VsOiBzdHJpbmcpIHtcbiAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gIGxldCBleHByZXNzaW9uID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICBleHByZXNzaW9uID0gYHN0MmMoKCR7ZXhwcmVzc2lvbn0pLCBcXGAke3NlbH1cXGApYDtcbiAgcmV0dXJuIGBcXCR7JHtleHByZXNzaW9ufX1gO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRlbXBsYXRlID0gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBseWwobGl0ZXJhbHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wbGFjZWhvbGRlcnM6IChzdHJpbmcgfCBDb2xvciB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bWJlciB8IFN0eWxlVGVtcGxhdGUgfCBudWxsIHwgdW5kZWZpbmVkKVtdKSB7XG4gIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgLy8gU2F2ZSBleHByZXNzaW9uc1xuICAgIGNvbnN0IGV4TWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2Vob2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1tpXTtcbiAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgICAgIGlmIChyZXN1bHQuZW5kc1dpdGgoJy4uLicpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCByZXN1bHQubGVuZ3RoIC0gMyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICB8fCBwbGFjZWhvbGRlciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgKz0gYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpfSR7c3QyYyhwbGFjZWhvbGRlciwgJ3x8Jnx8Jyl9YDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3SUQgPSBgX19MWV9FWFBSRVNTSU9OX19bX18keyhpZCsrKS50b1N0cmluZygzNil9XWA7XG4gICAgICAgIHJlc3VsdCArPSBuZXdJRDtcbiAgICAgICAgZXhNYXBbbmV3SURdID0gYCR7cGxhY2Vob2xkZXJ9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGxhc3QgbGl0ZXJhbFxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tsaXRlcmFscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjc3MgPSBuZXcgTHlsUGFyc2UocmVzdWx0LCBjbGFzc05hbWUpLnRvQ3NzKCk7XG4gICAgcmV0dXJuIGNzcy5yZXBsYWNlKFNUWUxFX1RFTVBMQVRFX1JFR0VYKCksIChzdHIpID0+IHtcbiAgICAgIGlmIChzdHIgaW4gZXhNYXApIHtcbiAgICAgICAgcmV0dXJuIGV4TWFwW3N0cl07XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3Rvcih0ZXh0ID0gJ2lkJykge1xuICByZXR1cm4gYC8qID4+ICR7dGV4dH0gLS0gJHtNYXRoLmZsb29yKG5ldyBEYXRlKCkudmFsdWVPZigpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpfSAqL2A7XG59XG5cbnR5cGUgVHJhbnNmb3JtZXI8VD4gPSAoc3Q6IFQpID0+IChTdHlsZVRlbXBsYXRlKTtcblxuZXhwb3J0IGNsYXNzIFN0eWxlQ29sbGVjdGlvbjxUID0gYW55PiB7XG4gIHByaXZhdGUgX3RlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdO1xuICBwcml2YXRlIF90cmFuc2Zvcm1lcj86IFRyYW5zZm9ybWVyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKC4uLnRlbXBsYXRlczogKFQpW10pXG4gIGNvbnN0cnVjdG9yKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuICAgIHRoaXMuY3NzID0gdGhpcy5jc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZCguLi50ZW1wbGF0ZXM6IChUKVtdKTogU3R5bGVDb2xsZWN0aW9uPFQ+O1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb247XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbiB8IFN0eWxlQ29sbGVjdGlvbjxUPiB7XG4gICAgLy8gcmV0dXJuIG5ldyBTdHlsZUNvbGxlY3Rpb24oLi4uWy4uLnRoaXMuX3RlbXBsYXRlcywgLi4udGVtcGxhdGVzXSk7XG4gICAgdGhpcy5fdGVtcGxhdGVzLnB1c2goLi4udGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBUcmFuc2Zvcm0gc3R5bGUgKi9cbiAgc2V0VHJhbnNmb3JtZXIodHJhbnNmb3JtZXI6IFRyYW5zZm9ybWVyPFQ+KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtZXIgPSB0cmFuc2Zvcm1lcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFN0eWxlVGVtcGxhdGVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgY3NzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGxpbiA9ICcnO1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRoaXMuX3RlbXBsYXRlcztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGVtcGxhdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IHRlbXBsYXRlOiBTdHlsZVRlbXBsYXRlO1xuICAgICAgaWYgKHRoaXMuX3RyYW5zZm9ybWVyKSB7XG4gICAgICAgIHRlbXBsYXRlID0gKCh0aGlzLl90cmFuc2Zvcm1lcih0ZW1wbGF0ZXNbaW5kZXhdIGFzIFQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wbGF0ZSA9ICh0ZW1wbGF0ZXNbaW5kZXhdIGFzIFN0eWxlVGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgbGluICs9IHRlbXBsYXRlKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW47XG4gIH1cblxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhIC4uLntzdHlsZX0gdG8gY3NzXG4gKiBGb3IgaW50ZXJuYWwgdXNlIHB1cnBvc2VzIG9ubHlcbiAqIEBwYXJhbSBmbiBTdHlsZVRlbXBsYXRlIG9yIFN0eWxlQ29sbGVjdGlvblxuICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdDJjKFxuICBmbjogU3R5bGVUZW1wbGF0ZSB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmIChmbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChmbiBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgIHJldHVybiBmbi5jc3MoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZm4oY2xhc3NOYW1lKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlVGVtcGxhdGUoXG4vLyAgIGZuOiBTdHlsZVRlbXBsYXRlXG4vLyAgICkge1xuLy8gICBpZiAoZm4ubGVuZ3RoKSB7XG4vLyAgICAgcmV0dXJuIGZuIGFzIFN0eWxlVGVtcGxhdGU7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIChmbiBhcyAoKCkgPT4gU3R5bGVUZW1wbGF0ZSkpKCk7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0lkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSBfY2hhcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfbmV4dElkOiBudW1iZXJbXTtcbiAgY29uc3RydWN0b3IoY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSB7XG4gICAgdGhpcy5fY2hhcnMgPSBjaGFycztcbiAgICB0aGlzLl9uZXh0SWQgPSBbMF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IHI6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHRoaXMuX25leHRJZCkge1xuICAgICAgci51bnNoaWZ0KHRoaXMuX2NoYXJzW2NoYXJdKTtcbiAgICB9XG4gICAgdGhpcy5faW5jcmVtZW50KCk7XG4gICAgcmV0dXJuIHIuam9pbignJyk7XG4gIH1cblxuICBfaW5jcmVtZW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbmV4dElkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB2YWwgPSArK3RoaXMuX25leHRJZFtpXTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5fY2hhcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX25leHRJZFtpXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25leHRJZC5wdXNoKDApO1xuICB9XG59XG4iXX0=