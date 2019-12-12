"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LINE_FEED_REGEX = () => /(\n?[^\n]+\n?)/g;
const AMPERSAND_REGEX = () => /&/g;
const STYLE_TEMPLATE_REGEX = () => /StyleTemplate\[[\w]+\]/g;
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
class LylParse {
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
exports.LylParse = LylParse;
function lyl(literals, ...placeholders) {
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
exports.lyl = lyl;
function createUniqueId() {
    return `StyleTemplate[__${(id++).toString(36)}]`;
}
function createUniqueCommentSelector(text = 'id') {
    return `/* >> ${text} -- ${Math.floor(new Date().valueOf() * Math.random()).toString(36)} */`;
}
class StyleCollection {
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
exports.StyleCollection = StyleCollection;
/**
 * Simple object check.
 * @param item
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item)) && !(item instanceof StyleCollection);
}
function mergeThemes(target, ...sources) {
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
exports.mergeThemes = mergeThemes;
function styleTemplateToString(fn, className) {
    if (fn instanceof StyleCollection) {
        return fn.css(className);
    }
    return fn ? (fn)(className) : '';
}
exports.styleTemplateToString = styleTemplateToString;
// export function normalizeStyleTemplate(
//   fn: StyleTemplate
//   ) {
//   if (fn.length) {
//     return fn as StyleTemplate;
//   } else {
//     return (fn as (() => StyleTemplate))();
//   }
// }
class StringIdGenerator {
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
exports.StringIdGenerator = StringIdGenerator;
//# sourceMappingURL=parse.js.map