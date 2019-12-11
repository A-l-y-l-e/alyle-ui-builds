const LINE_FEED_REGEX = () => /(\n?[^\n]+\n?)/g;
const ɵ0 = LINE_FEED_REGEX;
const AMPERSAND_REGEX = () => /&/g;
const ɵ1 = AMPERSAND_REGEX;
const STYLE_TEMPLATE_REGEX = () => /StyleTemplate\[[\w]+\]/g;
const ɵ2 = STYLE_TEMPLATE_REGEX;
let id = 0;
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
export class LylParse {
    constructor(_template, _className = '${className}') {
        this._template = _template;
        this._className = _className;
    }
    toCss() {
        const selectors = [];
        let selector = null;
        const rules = new Map();
        this._template
            .replace(/(\/\/\s[^\n\r]*(?:[\n\r]+|$))/g, '')
            .replace(/,\n/g, ',')
            .replace(LINE_FEED_REGEX(), (_ex, fullLine) => {
            fullLine = fullLine.trim();
            if (fullLine.endsWith('{')) {
                if (selectors.length === 0) {
                    selectors.push([this._className]);
                    selector = selectors[0][0];
                }
                else {
                    const line_1 = fullLine.slice(0, fullLine.length - 1).trim();
                    selectors.push(line_1
                        .split(',')
                        .map(_ => _.trim()));
                    selector = this._resolveSelectors(selectors);
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
                    selector = this._resolveSelectors(selectors);
                    if (!rules.has(selector)) {
                        rules.set(selector, []);
                    }
                }
            }
            else if (fullLine.startsWith('/* >> ds')) {
                selector = this._resolveSelectors(selectors);
                const lin = fullLine;
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
                const content = fullLine.slice(3);
                selector = this._resolveSelectors(selectors);
                // Ignore compiled css
                rules.get(selector).push(`${createUniqueCommentSelector('cc')}${content}`);
            }
            else {
                if (fullLine) {
                    if (fullLine.includes('undefined') || fullLine.startsWith('// ')) {
                        return '';
                    }
                    if (fullLine.endsWith(';')) {
                        throw new Error(`Do not require semicolon in [${fullLine}]`);
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
        rules.forEach((val, key) => {
            const matchArray = key.match(/(@[^\${]*(?:\${[^{]*)*){/);
            if (matchArray) {
                const media = matchArray[1];
                if (media !== key && val.length) {
                    const after = rules.get(media);
                    const newValue = after + key.replace(media + '{', '') + `{${val.join(';')}}`;
                    rules.set(media, [newValue]);
                    rules.delete(key);
                }
            }
        });
        return Array.from(rules.entries())
            .filter(rule => rule[1])
            .map(rule => {
            const sel = rule[0];
            const contents = rule[1];
            const css = [];
            const contentRendered = [];
            const set = new Set();
            for (let index = 0; index < contents.length; index++) {
                let content = contents[index];
                if (content) {
                    if (content.startsWith('/* >> ds')) {
                        contentRendered.push(content.replace(/\|\|\&\|\|/g, sel));
                        set.add(contentRendered);
                    }
                    else if (content.startsWith('/* >> cc')) {
                        content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
                        let expression = content.slice(2, content.length - 1);
                        expression = `styleTemplateToString((${expression}), \`${sel}\`)`;
                        contentRendered.push(`\${${expression}}`);
                        set.add(contentRendered);
                    }
                    else {
                        // css += `${sel}{${content}}`;
                        css.push(content);
                        set.add(css);
                    }
                }
            }
            return Array.from(set).map((_) => {
                if (_ === css) {
                    return css.length
                        ? `${sel}{${css.join('')}}`
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
    }
    _resolveSelectors(selectors) {
        let media = null;
        const sel = selectors
            .map(_ => _.filter(__ => {
            if (__.startsWith('@')) {
                // save media
                media = __;
                return false;
            }
            return __;
        }))
            .filter(_ => _.length)
            .reduce((prev, current) => {
            const result = prev.map(item => current.map(cu => {
                if (cu.includes('&')) {
                    return cu.replace(AMPERSAND_REGEX(), item);
                }
                return `${item} ${cu}`;
            }));
            return Array.prototype.concat.apply([], result);
        })
            .join(',');
        if (media) {
            return `${media}{${sel}`;
        }
        return sel;
    }
}
export function lyl(literals, ...placeholders) {
    return (className) => {
        let result = '';
        const dsMap = new Map();
        for (let i = 0; i < placeholders.length; i++) {
            const placeholder = placeholders[i];
            result += literals[i];
            if (result.endsWith('...')) {
                result = result.slice(0, result.length - 3);
                if (typeof placeholder === 'function' || placeholder instanceof StyleCollection) {
                    const newID = createUniqueId();
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
        const css = result.replace(STYLE_TEMPLATE_REGEX(), (str) => {
            if (dsMap.has(str)) {
                const fn = dsMap.get(str);
                let template;
                if (fn instanceof StyleCollection) {
                    template = fn.css;
                }
                else {
                    template = fn;
                }
                return `${createUniqueCommentSelector('ds')}${template('||&||')}`;
            }
            return '';
        });
        return new LylParse(css, className).toCss();
    };
}
function createUniqueId() {
    return `StyleTemplate[__${(id++).toString(36)}]`;
}
function createUniqueCommentSelector(text = 'id') {
    return `/* >> ${text} -- ${Math.floor(new Date().valueOf() * Math.random()).toString(36)} */`;
}
export class StyleCollection {
    constructor(...templates) {
        this._templates = templates;
        this.css = this.css.bind(this);
    }
    add(...templates) {
        // return new StyleCollection(...[...this._templates, ...templates]);
        this._templates.push(...templates);
        return this;
    }
    /** Transform style */
    setTransformer(transformer) {
        this._transformer = transformer;
        return this;
    }
    /**
     * @return StyleTemplate
     * @docs-private
     */
    css(className) {
        let lin = '';
        const templates = this._templates;
        for (let index = 0; index < templates.length; index++) {
            let template;
            if (this._transformer) {
                template = ((this._transformer(templates[index])));
            }
            else {
                template = templates[index];
            }
            lin += template(className);
        }
        return lin;
    }
}
/**
 * Simple object check.
 * @param item
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item)) && !(item instanceof StyleCollection);
}
export function mergeThemes(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
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
                const targetKey = target[key];
                const sourceKey = source[key];
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
    return mergeThemes(target, ...sources);
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
export class StringIdGenerator {
    constructor(chars = 'abcdefghijklmnopqrstuvwxyz') {
        this._chars = chars;
        this._nextId = [0];
    }
    next() {
        const r = [];
        for (const char of this._nextId) {
            r.unshift(this._chars[char]);
        }
        this._increment();
        return r.join('');
    }
    _increment() {
        for (let i = 0; i < this._nextId.length; i++) {
            const val = ++this._nextId[i];
            if (val >= this._chars.length) {
                this._nextId[i] = 0;
            }
            else {
                return;
            }
        }
        this._nextId.push(0);
    }
}
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7O0FBQ2hELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzs7QUFDbkMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7QUFDN0QsSUFBSSxFQUFFLEdBQVcsQ0FBQyxDQUFDO0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQ1UsU0FBaUIsRUFDakIsYUFBcUIsY0FBYztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCxLQUFLO1FBQ0gsTUFBTSxTQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTO2FBQ1gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsQ0FBQzthQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3RELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO3FCQUFNO29CQUNMLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdELFNBQVMsQ0FBQyxJQUFJLENBQ1osTUFBTTt5QkFDTCxLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUNwQixDQUFDO29CQUNGLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTdDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3lCQUN2QjtxQkFDRjtpQkFDRjtnQkFHRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3pCO2FBQ0Y7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUN6QjtpQkFDRjthQUNGO2lCQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDMUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO2dCQUVyQixzQkFBc0I7Z0JBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixrQkFBa0I7Z0JBQ2xCLGtDQUFrQztnQkFDbEMseUVBQXlFO2dCQUN6RSw0REFBNEQ7Z0JBQzVELCtCQUErQjthQUNoQztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JDLHFCQUFxQjtnQkFDckIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0Msc0JBQXNCO2dCQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDLElBQUksQ0FBQyxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLEVBQUU7b0JBQ1osSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2hFLE9BQU8sRUFBRSxDQUFDO3FCQUNYO29CQUNELElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDOUQ7b0JBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMzQixRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO29CQUNELFFBQVEsSUFBSSxHQUFHLENBQUM7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUyxDQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztRQUVILGlDQUFpQztRQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN6RCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUMvQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBRSxDQUFDO29CQUNoQyxNQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO29CQUM3RSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25CO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sZUFBZSxHQUFhLEVBQUUsQ0FBQztZQUNyQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNwRCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDbEMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUMxQjt5QkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ3pDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN0RCxVQUFVLEdBQUcsMEJBQTBCLFVBQVUsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDbEUsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7d0JBQzFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzFCO3lCQUFNO3dCQUNMLCtCQUErQjt3QkFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZDtpQkFDRjthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7b0JBQ2IsT0FBTyxHQUFHLENBQUMsTUFBTTt3QkFDakIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUc7d0JBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQ047cUJBQU07b0JBQ0wsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQjtZQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsOEJBQThCO1lBQzlCLHdDQUF3QztZQUN4QyxnREFBZ0Q7WUFDaEQsSUFBSTtZQUNKLHdDQUF3QztZQUN4Qyw4REFBOEQ7WUFDOUQseURBQXlEO1lBQ3pELG1FQUFtRTtZQUNuRSw4QkFBOEI7WUFDOUIsSUFBSTtZQUNKLHdCQUF3QjtZQUV4Qiw2QkFBNkI7WUFDN0IsaUNBQWlDO1lBQ2pDLElBQUk7WUFDSiwrQkFBK0I7UUFDakMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxTQUF1QjtRQUMvQyxJQUFJLEtBQUssR0FBa0IsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sR0FBRyxHQUFHLFNBQVM7YUFDbEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0QixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLGFBQWE7Z0JBQ2IsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQzthQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDckIsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDNUM7Z0JBQ0QsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0osT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUViLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxHQUFHLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUVGO0FBSUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUE4QixFQUFFLEdBQUcsWUFBOEY7SUFDbkosT0FBTyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQTZDLENBQUM7UUFDbkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxPQUFPLFdBQVcsS0FBSyxVQUFVLElBQUksV0FBVyxZQUFZLGVBQWUsRUFBRTtvQkFDL0UsTUFBTSxLQUFLLEdBQUcsY0FBYyxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUM5QixNQUFNLElBQUksS0FBSyxDQUFDO2lCQUNqQjthQUNGO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxXQUFXLENBQUM7YUFDdkI7U0FDRjtRQUVELHVCQUF1QjtRQUN2QixNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO2dCQUMzQixJQUFJLFFBQXVCLENBQUM7Z0JBQzVCLElBQUksRUFBRSxZQUFZLGVBQWUsRUFBRTtvQkFDakMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ25CO3FCQUFNO29CQUNMLFFBQVEsR0FBRyxFQUFFLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ25FO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWM7SUFDckIsT0FBTyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ25ELENBQUM7QUFFRCxTQUFTLDJCQUEyQixDQUFDLElBQUksR0FBRyxJQUFJO0lBQzlDLE9BQU8sU0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2hHLENBQUM7QUFJRCxNQUFNLE9BQU8sZUFBZTtJQUsxQixZQUFZLEdBQUcsU0FBZ0M7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBSUQsR0FBRyxDQUFDLEdBQUcsU0FBZ0M7UUFDckMscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLGNBQWMsQ0FBQyxXQUEyQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHLENBQUMsU0FBaUI7UUFDbkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyRCxJQUFJLFFBQXVCLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLFFBQVEsR0FBSSxTQUFTLENBQUMsS0FBSyxDQUFtQixDQUFDO2FBQ2hEO1lBQ0QsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUVGO0FBR0Q7OztHQUdHO0FBQ0gsU0FBUyxRQUFRLENBQUMsSUFBUztJQUN6QixPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLGVBQWUsQ0FBQyxDQUFDO0FBQzFHLENBQUM7QUFNRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVcsRUFBRSxHQUFHLE9BQWM7SUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUvQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNsQjt5QkFBTTt3QkFDTCxnQkFBZ0I7d0JBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzNCO2lCQUNGO2dCQUNELFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLGVBQWU7Z0JBQ2YsSUFBSSxTQUFTLFlBQVksZUFBZSxJQUFJLE9BQU8sU0FBUyxLQUFLLFVBQVUsRUFBRTtvQkFDM0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFJLE1BQU0sQ0FBQyxHQUFHLENBQXFCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTTtvQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsRUFBc0QsRUFBRSxTQUFpQjtJQUM3RyxJQUFJLEVBQUUsWUFBWSxlQUFlLEVBQUU7UUFDakMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRUQsMENBQTBDO0FBQzFDLHNCQUFzQjtBQUN0QixRQUFRO0FBQ1IscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQyxhQUFhO0FBQ2IsOENBQThDO0FBQzlDLE1BQU07QUFDTixJQUFJO0FBRUosTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUFZLEtBQUssR0FBRyw0QkFBNEI7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxDQUFDLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMvQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxPQUFPO2FBQ1I7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuY29uc3QgTElORV9GRUVEX1JFR0VYID0gKCkgPT4gLyhcXG4/W15cXG5dK1xcbj8pL2c7XG5jb25zdCBBTVBFUlNBTkRfUkVHRVggPSAoKSA9PiAvJi9nO1xuY29uc3QgU1RZTEVfVEVNUExBVEVfUkVHRVggPSAoKSA9PiAvU3R5bGVUZW1wbGF0ZVxcW1tcXHddK1xcXS9nO1xubGV0IGlkOiBudW1iZXIgPSAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhIGx5bCBzdHlsZSBibG9jayB0byBDU1NcbiAqXG4gKiBBbGxvd2VkIGJsb2NrczpcbiAqXG4gKiAvLyBTaW1wbGVcbiAqIGNvbnN0IEJVVFRPTl9TVFlMRSA9IGx5bCBge1xuICogICBwYWRkaW5nOiA4cHggMTJweFxuICogICBmb250LXNpemU6IDE0cHhcbiAqICAgYm9yZGVyLXJhZGl1czogOXB4XG4gKiAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTBcbiAqIH1gXG4gKlxuICogLy8gTmVzdGluZ1xuICogY29uc3Qgc3R5bGUgPSBseWwgYHtcbiAqICAgdWwgPiB7XG4gKiAgICAgbGkge1xuICogICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICogICAgIH1cbiAqICAgfVxuICogICBwIHtcbiAqICAgICB+IHtcbiAqICAgICAgIHNwYW4ge1xuICogICAgICAgICBvcGFjaXR5OiAwLjg7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9YFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEx5bFBhcnNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nID0gJyR7Y2xhc3NOYW1lfSdcbiAgKSB7IH1cblxuICB0b0NzcygpIHtcbiAgICBjb25zdCBzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSA9IFtdO1xuICAgIGxldCBzZWxlY3RvcjogbnVsbCB8IHN0cmluZyA9IG51bGw7XG4gICAgY29uc3QgcnVsZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgdGhpcy5fdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKC8oXFwvXFwvXFxzW15cXG5cXHJdKig/OltcXG5cXHJdK3wkKSkvZywgJycpXG4gICAgICAucmVwbGFjZSgvLFxcbi9nLCAnLCcpXG4gICAgICAucmVwbGFjZShMSU5FX0ZFRURfUkVHRVgoKSwgKF9leCwgZnVsbExpbmU6IHN0cmluZykgPT4ge1xuICAgICAgZnVsbExpbmUgPSBmdWxsTGluZS50cmltKCk7XG5cbiAgICAgIGlmIChmdWxsTGluZS5lbmRzV2l0aCgneycpKSB7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goW3RoaXMuX2NsYXNzTmFtZV0pO1xuICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3JzWzBdWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxpbmVfMSA9IGZ1bGxMaW5lLnNsaWNlKDAsIGZ1bGxMaW5lLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChcbiAgICAgICAgICAgIGxpbmVfMVxuICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgIC5tYXAoXyA9PiBfLnRyaW0oKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuXG4gICAgICAgICAgaWYgKGxpbmVfMS5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVzLmhhcyhsaW5lXzEpKSB7XG4gICAgICAgICAgICAgIHJ1bGVzLnNldChsaW5lXzEsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghcnVsZXMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJ1bGVzLnNldChzZWxlY3RvciwgW10pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLmxlbmd0aCA9PT0gMSAmJiBmdWxsTGluZS5lbmRzV2l0aCgnfScpKSB7XG4gICAgICAgIHNlbGVjdG9ycy5wb3AoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJ1bGVzLnNldChzZWxlY3RvciwgW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICBjb25zdCBsaW4gPSBmdWxsTGluZTtcblxuICAgICAgICAvLyBJZ25vcmUgY29tcGlsZWQgY3NzXG4gICAgICAgIHJ1bGVzLmdldChzZWxlY3RvcikhLnB1c2gobGluKTtcbiAgICAgICAgLy8gZnVsbExpbmUgPSBsaW47XG4gICAgICAgIC8vIC8qKiBGb3Igbm9uIEx5bE1vZHVsZTwgKi9lbHNlIHtcbiAgICAgICAgLy8gICBmdWxsTGluZSA9IGBcXCR7KCR7bGluLnNsaWNlKDIsIGxpbi5sZW5ndGggLSAxKX0pKFxcYCR7c2VsZWN0b3J9XFxgKX1gO1xuICAgICAgICAvLyAgIHJ1bGVzLnNldChjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2RzJyksIGZ1bGxMaW5lKTtcbiAgICAgICAgLy8gfSAvKiogZm9yIG5vbiBMeWxNb2R1bGU+ICAqL1xuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5zdGFydHNXaXRoKCcuLi4nKSkge1xuICAgICAgICAvLyBmb3Igbm9uIEx5bE1vZHVsZT5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGZ1bGxMaW5lLnNsaWNlKDMpO1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGAke2NyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignY2MnKX0ke2NvbnRlbnR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnVsbExpbmUpIHtcbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJ3VuZGVmaW5lZCcpIHx8IGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy8vICcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmdWxsTGluZS5lbmRzV2l0aCgnOycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvIG5vdCByZXF1aXJlIHNlbWljb2xvbiBpbiBbJHtmdWxsTGluZX1dYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmdWxsTGluZS5pbmNsdWRlcygnOiAnKSkge1xuICAgICAgICAgICAgZnVsbExpbmUgPSBmdWxsTGluZS5yZXBsYWNlKCc6ICcsICc6Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxMaW5lICs9ICc7JztcbiAgICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IhKSEucHVzaChmdWxsTGluZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcblxuICAgIC8vIEpvaW4gbWVkaWEgcXVlcmllcyAmIGtleWZyYW1lc1xuICAgIHJ1bGVzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEFycmF5ID0ga2V5Lm1hdGNoKC8oQFteXFwke10qKD86XFwke1tee10qKSopey8pO1xuICAgICAgaWYgKG1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbWVkaWEgPSBtYXRjaEFycmF5WzFdO1xuICAgICAgICBpZiAobWVkaWEgIT09IGtleSAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgYWZ0ZXIgPSBydWxlcy5nZXQobWVkaWEpITtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFmdGVyICsga2V5LnJlcGxhY2UobWVkaWEgKyAneycsICcnKSArIGB7JHt2YWwuam9pbignOycpfX1gO1xuICAgICAgICAgIHJ1bGVzLnNldChtZWRpYSwgW25ld1ZhbHVlXSk7XG4gICAgICAgICAgcnVsZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKHJ1bGVzLmVudHJpZXMoKSlcbiAgICAgIC5maWx0ZXIocnVsZSA9PiBydWxlWzFdKVxuICAgICAgLm1hcChydWxlID0+IHtcbiAgICAgICAgY29uc3Qgc2VsID0gcnVsZVswXTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBydWxlWzFdO1xuICAgICAgICBjb25zdCBjc3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IGNvbnRlbnRSZW5kZXJlZDogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldDxzdHJpbmdbXT4oKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGxldCBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgICAgICAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb24gPSBgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKCgke2V4cHJlc3Npb259KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGBcXCR7JHtleHByZXNzaW9ufX1gKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY3NzICs9IGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgICAgICAgICBjc3MucHVzaChjb250ZW50KTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZXQpLm1hcCgoXykgPT4ge1xuICAgICAgICAgIGlmIChfID09PSBjc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3MubGVuZ3RoXG4gICAgICAgICAgICA/IGAke3NlbH17JHtjc3Muam9pbignJyl9fWBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLmpvaW4oJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIC8vIHJldHVybiAoY3NzXG4gICAgICAgIC8vICAgPyBgJHtzZWx9eyR7Y3NzfX1gXG4gICAgICAgIC8vICAgOiAgJycpICsgY29udGVudFJlbmRlcmVkO1xuICAgICAgICAvLyBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAvLyAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcKiA+PiBjY1teXFwvXFwqXStcXCpcXC8vZywgJycpO1xuICAgICAgICAvLyAgIGxldCB2YXJpYWJsZSA9IGNvbnRlbnQuc2xpY2UoMiwgY29udGVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgLy8gICB2YXJpYWJsZSA9IGBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKCR7dmFyaWFibGV9KSwgXFxgJHtzZWx9XFxgKWA7XG4gICAgICAgIC8vICAgcmV0dXJuIGBcXCR7JHt2YXJpYWJsZX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyAvLyBmb3Igbm9uIEx5bE1vZHVsZT5cblxuICAgICAgICAvLyBpZiAoc2VsLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBgJHtzZWx9eyR7cnVsZVsxXX19YDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gYCR7c2VsfXske2NvbnRlbnR9fWA7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSkge1xuICAgIGxldCBtZWRpYTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2VsID0gc2VsZWN0b3JzXG4gICAgICAubWFwKF8gPT4gXy5maWx0ZXIoX18gPT4ge1xuICAgICAgICBpZiAoX18uc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgLy8gc2F2ZSBtZWRpYVxuICAgICAgICAgIG1lZGlhID0gX187XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfXztcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwcmV2Lm1hcChpdGVtID0+IGN1cnJlbnQubWFwKGN1ID0+IHtcbiAgICAgICAgICBpZiAoY3UuaW5jbHVkZXMoJyYnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1LnJlcGxhY2UoQU1QRVJTQU5EX1JFR0VYKCksIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7aXRlbX0gJHtjdX1gO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcsJyk7XG5cbiAgICBpZiAobWVkaWEpIHtcbiAgICAgIHJldHVybiBgJHttZWRpYX17JHtzZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlVGVtcGxhdGUgPSAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGx5bChsaXRlcmFsczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBsYWNlaG9sZGVyczogKHN0cmluZyB8IENvbG9yIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVtYmVyIHwgU3R5bGVUZW1wbGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpW10pIHtcbiAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBkc01hcCA9IG5ldyBNYXA8c3RyaW5nLCAoU3R5bGVUZW1wbGF0ZSkgfCBTdHlsZUNvbGxlY3Rpb24+KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZWhvbGRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2ldO1xuICAgICAgcmVzdWx0ICs9IGxpdGVyYWxzW2ldO1xuICAgICAgaWYgKHJlc3VsdC5lbmRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBwbGFjZWhvbGRlciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5ld0lEID0gY3JlYXRlVW5pcXVlSWQoKTtcbiAgICAgICAgICBkc01hcC5zZXQobmV3SUQsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXN1bHQgKz0gbmV3SUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSBwbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGxhc3QgbGl0ZXJhbFxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tsaXRlcmFscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjc3MgPSByZXN1bHQucmVwbGFjZShTVFlMRV9URU1QTEFURV9SRUdFWCgpLCAoc3RyKSA9PiB7XG4gICAgICBpZiAoZHNNYXAuaGFzKHN0cikpIHtcbiAgICAgICAgY29uc3QgZm4gPSBkc01hcC5nZXQoc3RyKSE7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgICAgaWYgKGZuIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSBmbi5jc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSBmbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpfSR7dGVtcGxhdGUoJ3x8Jnx8Jyl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEx5bFBhcnNlKGNzcywgY2xhc3NOYW1lKS50b0NzcygpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIGBTdHlsZVRlbXBsYXRlW19fJHsoaWQrKykudG9TdHJpbmcoMzYpfV1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IodGV4dCA9ICdpZCcpIHtcbiAgcmV0dXJuIGAvKiA+PiAke3RleHR9IC0tICR7TWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KX0gKi9gO1xufVxuXG50eXBlIFRyYW5zZm9ybWVyPFQ+ID0gKHN0OiBUKSA9PiAoU3R5bGVUZW1wbGF0ZSk7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZUNvbGxlY3Rpb248VCA9IGFueT4ge1xuICBwcml2YXRlIF90ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXTtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXI/OiBUcmFuc2Zvcm1lcjxUPjtcblxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChUKVtdKVxuICBjb25zdHJ1Y3RvciguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSkge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcbiAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGQoLi4udGVtcGxhdGVzOiAoVClbXSk6IFN0eWxlQ29sbGVjdGlvbjxUPjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uO1xuICBhZGQoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pOiBTdHlsZUNvbGxlY3Rpb24gfCBTdHlsZUNvbGxlY3Rpb248VD4ge1xuICAgIC8vIHJldHVybiBuZXcgU3R5bGVDb2xsZWN0aW9uKC4uLlsuLi50aGlzLl90ZW1wbGF0ZXMsIC4uLnRlbXBsYXRlc10pO1xuICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKC4uLnRlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVHJhbnNmb3JtIHN0eWxlICovXG4gIHNldFRyYW5zZm9ybWVyKHRyYW5zZm9ybWVyOiBUcmFuc2Zvcm1lcjxUPikge1xuICAgIHRoaXMuX3RyYW5zZm9ybWVyID0gdHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBTdHlsZVRlbXBsYXRlXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0aGlzLl90ZW1wbGF0ZXM7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRlbXBsYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCB0ZW1wbGF0ZTogU3R5bGVUZW1wbGF0ZTtcbiAgICAgIGlmICh0aGlzLl90cmFuc2Zvcm1lcikge1xuICAgICAgICB0ZW1wbGF0ZSA9ICgodGhpcy5fdHJhbnNmb3JtZXIodGVtcGxhdGVzW2luZGV4XSBhcyBUKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGxhdGUgPSAodGVtcGxhdGVzW2luZGV4XSBhcyBTdHlsZVRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIGxpbiArPSB0ZW1wbGF0ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9XG5cbn1cblxuXG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5mdW5jdGlvbiBpc09iamVjdChpdGVtOiBhbnkpIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSkgJiYgIShpdGVtIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFU+KHRhcmdldDogVCwgc291cmNlOiBVKTogVCAmIFU7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXM8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUaGVtZXModGFyZ2V0OiBvYmplY3QsIC4uLnNvdXJjZXM6IGFueVtdKTogYW55O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZVtrZXldLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBpcyBhIGNsYXNzXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXJnZVRoZW1lcyh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0S2V5ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGNvbnN0IHNvdXJjZUtleSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAvLyBNZXJnZSBzdHlsZXNcbiAgICAgICAgaWYgKHRhcmdldEtleSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbiAmJiB0eXBlb2Ygc291cmNlS2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSAodGFyZ2V0W2tleV0gYXMgU3R5bGVDb2xsZWN0aW9uKS5hZGQoc291cmNlS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlVGhlbWVzKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoZm46IFN0eWxlVGVtcGxhdGUgfCBTdHlsZUNvbGxlY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZm4gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gZm4uY3NzKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZuID8gKGZuKShjbGFzc05hbWUpIDogJyc7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZVRlbXBsYXRlKFxuLy8gICBmbjogU3R5bGVUZW1wbGF0ZVxuLy8gICApIHtcbi8vICAgaWYgKGZuLmxlbmd0aCkge1xuLy8gICAgIHJldHVybiBmbiBhcyBTdHlsZVRlbXBsYXRlO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoZm4gYXMgKCgpID0+IFN0eWxlVGVtcGxhdGUpKSgpO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdJZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgX2NoYXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25leHRJZDogbnVtYmVyW107XG4gIGNvbnN0cnVjdG9yKGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jykge1xuICAgIHRoaXMuX2NoYXJzID0gY2hhcnM7XG4gICAgdGhpcy5fbmV4dElkID0gWzBdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCByOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hhciBvZiB0aGlzLl9uZXh0SWQpIHtcbiAgICAgIHIudW5zaGlmdCh0aGlzLl9jaGFyc1tjaGFyXSk7XG4gICAgfVxuICAgIHRoaXMuX2luY3JlbWVudCgpO1xuICAgIHJldHVybiByLmpvaW4oJycpO1xuICB9XG5cbiAgX2luY3JlbWVudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25leHRJZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsID0gKyt0aGlzLl9uZXh0SWRbaV07XG4gICAgICBpZiAodmFsID49IHRoaXMuX2NoYXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9uZXh0SWRbaV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9uZXh0SWQucHVzaCgwKTtcbiAgfVxufVxuIl19