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
            .replace(/(\/\/[^\n\r]*(?:[\n\r]+|$))/g, '')
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
                    const newValue = after + key.replace(media + '{', '') + `{${val}}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7O0FBQ2hELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzs7QUFDbkMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7QUFDN0QsSUFBSSxFQUFFLEdBQVcsQ0FBQyxDQUFDO0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQ1UsU0FBaUIsRUFDakIsYUFBcUIsY0FBYztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCxLQUFLO1FBQ0gsTUFBTSxTQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTO2FBQ1gsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsQ0FBQzthQUMzQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3RELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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QUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBMSU5FX0ZFRURfUkVHRVggPSAoKSA9PiAvKFxcbj9bXlxcbl0rXFxuPykvZztcbmNvbnN0IEFNUEVSU0FORF9SRUdFWCA9ICgpID0+IC8mL2c7XG5jb25zdCBTVFlMRV9URU1QTEFURV9SRUdFWCA9ICgpID0+IC9TdHlsZVRlbXBsYXRlXFxbW1xcd10rXFxdL2c7XG5sZXQgaWQ6IG51bWJlciA9IDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgbHlsIHN0eWxlIGJsb2NrIHRvIENTU1xuICpcbiAqIEFsbG93ZWQgYmxvY2tzOlxuICpcbiAqIC8vIFNpbXBsZVxuICogY29uc3QgQlVUVE9OX1NUWUxFID0gbHlsIGB7XG4gKiAgIHBhZGRpbmc6IDhweCAxMnB4XG4gKiAgIGZvbnQtc2l6ZTogMTRweFxuICogICBib3JkZXItcmFkaXVzOiA5cHhcbiAqICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMFxuICogfWBcbiAqXG4gKiAvLyBOZXN0aW5nXG4gKiBjb25zdCBzdHlsZSA9IGx5bCBge1xuICogICB1bCA+IHtcbiAqICAgICBsaSB7XG4gKiAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gKiAgICAgfVxuICogICB9XG4gKiAgIHAge1xuICogICAgIH4ge1xuICogICAgICAgc3BhbiB7XG4gKiAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqIH1gXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTHlsUGFyc2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcgPSAnJHtjbGFzc05hbWV9J1xuICApIHsgfVxuXG4gIHRvQ3NzKCkge1xuICAgIGNvbnN0IHNlbGVjdG9yczogKHN0cmluZ1tdKVtdID0gW107XG4gICAgbGV0IHNlbGVjdG9yOiBudWxsIHwgc3RyaW5nID0gbnVsbDtcbiAgICBjb25zdCBydWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoLyhcXC9cXC9bXlxcblxccl0qKD86W1xcblxccl0rfCQpKS9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC8sXFxuL2csICcsJylcbiAgICAgIC5yZXBsYWNlKExJTkVfRkVFRF9SRUdFWCgpLCAoX2V4LCBmdWxsTGluZTogc3RyaW5nKSA9PiB7XG4gICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnRyaW0oKTtcblxuICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCd7JykpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzZWxlY3RvcnMucHVzaChbdGhpcy5fY2xhc3NOYW1lXSk7XG4gICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvcnNbMF1bMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGluZV8xID0gZnVsbExpbmUuc2xpY2UoMCwgZnVsbExpbmUubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFxuICAgICAgICAgICAgbGluZV8xXG4gICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgLm1hcChfID0+IF8udHJpbSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgICBpZiAobGluZV8xLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgIGlmICghcnVsZXMuaGFzKGxpbmVfMSkpIHtcbiAgICAgICAgICAgICAgcnVsZXMuc2V0KGxpbmVfMSwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUubGVuZ3RoID09PSAxICYmIGZ1bGxMaW5lLmVuZHNXaXRoKCd9JykpIHtcbiAgICAgICAgc2VsZWN0b3JzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAgIGlmICghcnVsZXMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIGNvbnN0IGxpbiA9IGZ1bGxMaW5lO1xuXG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChsaW4pO1xuICAgICAgICAvLyBmdWxsTGluZSA9IGxpbjtcbiAgICAgICAgLy8gLyoqIEZvciBub24gTHlsTW9kdWxlPCAqL2Vsc2Uge1xuICAgICAgICAvLyAgIGZ1bGxMaW5lID0gYFxcJHsoJHtsaW4uc2xpY2UoMiwgbGluLmxlbmd0aCAtIDEpfSkoXFxgJHtzZWxlY3Rvcn1cXGApfWA7XG4gICAgICAgIC8vICAgcnVsZXMuc2V0KGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKSwgZnVsbExpbmUpO1xuICAgICAgICAvLyB9IC8qKiBmb3Igbm9uIEx5bE1vZHVsZT4gICovXG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy4uLicpKSB7XG4gICAgICAgIC8vIGZvciBub24gTHlsTW9kdWxlPlxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnVsbExpbmUuc2xpY2UoMyk7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAvLyBJZ25vcmUgY29tcGlsZWQgY3NzXG4gICAgICAgIHJ1bGVzLmdldChzZWxlY3RvcikhLnB1c2goYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdjYycpfSR7Y29udGVudH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmdWxsTGluZSkge1xuICAgICAgICAgIGlmIChmdWxsTGluZS5pbmNsdWRlcygndW5kZWZpbmVkJykgfHwgZnVsbExpbmUuc3RhcnRzV2l0aCgnLy8gJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRG8gbm90IHJlcXVpcmUgc2VtaWNvbG9uIGluIFske2Z1bGxMaW5lfV1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCc6ICcpKSB7XG4gICAgICAgICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnJlcGxhY2UoJzogJywgJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbExpbmUgKz0gJzsnO1xuICAgICAgICAgIHJ1bGVzLmdldChzZWxlY3RvciEpIS5wdXNoKGZ1bGxMaW5lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgLy8gSm9pbiBtZWRpYSBxdWVyaWVzICYga2V5ZnJhbWVzXG4gICAgcnVsZXMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQXJyYXkgPSBrZXkubWF0Y2goLyhAW15cXCR7XSooPzpcXCR7W157XSopKil7Lyk7XG4gICAgICBpZiAobWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtZWRpYSA9IG1hdGNoQXJyYXlbMV07XG4gICAgICAgIGlmIChtZWRpYSAhPT0ga2V5ICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhZnRlciA9IHJ1bGVzLmdldChtZWRpYSkhO1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYWZ0ZXIgKyBrZXkucmVwbGFjZShtZWRpYSArICd7JywgJycpICsgYHske3ZhbH19YDtcbiAgICAgICAgICBydWxlcy5zZXQobWVkaWEsIFtuZXdWYWx1ZV0pO1xuICAgICAgICAgIHJ1bGVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShydWxlcy5lbnRyaWVzKCkpXG4gICAgICAuZmlsdGVyKHJ1bGUgPT4gcnVsZVsxXSlcbiAgICAgIC5tYXAocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHJ1bGVbMF07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gcnVsZVsxXTtcbiAgICAgICAgY29uc3QgY3NzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50UmVuZGVyZWQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8c3RyaW5nW10+KCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcbiAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaChjb250ZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gICAgICAgICAgICAgIGxldCBleHByZXNzaW9uID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICBleHByZXNzaW9uID0gYHN0eWxlVGVtcGxhdGVUb1N0cmluZygoJHtleHByZXNzaW9ufSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaChgXFwkeyR7ZXhwcmVzc2lvbn19YCk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY29udGVudFJlbmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGNzcyArPSBgJHtzZWx9eyR7Y29udGVudH19YDtcbiAgICAgICAgICAgICAgY3NzLnB1c2goY29udGVudCk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KS5tYXAoKF8pID0+IHtcbiAgICAgICAgICBpZiAoXyA9PT0gY3NzKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzLmxlbmd0aFxuICAgICAgICAgICAgPyBgJHtzZWx9eyR7Y3NzLmpvaW4oJycpfX1gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5qb2luKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAvLyByZXR1cm4gKGNzc1xuICAgICAgICAvLyAgID8gYCR7c2VsfXske2Nzc319YFxuICAgICAgICAvLyAgIDogICcnKSArIGNvbnRlbnRSZW5kZXJlZDtcbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgLy8gICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgICAgICAgLy8gICBsZXQgdmFyaWFibGUgPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vICAgdmFyaWFibGUgPSBgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKCgke3ZhcmlhYmxlfSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAvLyAgIHJldHVybiBgXFwkeyR7dmFyaWFibGV9fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG5cbiAgICAgICAgLy8gaWYgKHNlbC5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgLy8gICByZXR1cm4gYCR7c2VsfXske3J1bGVbMV19fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzOiAoc3RyaW5nW10pW10pIHtcbiAgICBsZXQgbWVkaWE6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yc1xuICAgICAgLm1hcChfID0+IF8uZmlsdGVyKF9fID0+IHtcbiAgICAgICAgaWYgKF9fLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgIC8vIHNhdmUgbWVkaWFcbiAgICAgICAgICBtZWRpYSA9IF9fO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX187XG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoXyA9PiBfLmxlbmd0aClcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJldi5tYXAoaXRlbSA9PiBjdXJyZW50Lm1hcChjdSA9PiB7XG4gICAgICAgICAgaWYgKGN1LmluY2x1ZGVzKCcmJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjdS5yZXBsYWNlKEFNUEVSU0FORF9SRUdFWCgpLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke2l0ZW19ICR7Y3V9YDtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLCcpO1xuXG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICByZXR1cm4gYCR7bWVkaWF9eyR7c2VsfWA7XG4gICAgfVxuICAgIHJldHVybiBzZWw7XG4gIH1cblxufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRlbXBsYXRlID0gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBseWwobGl0ZXJhbHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wbGFjZWhvbGRlcnM6IChzdHJpbmcgfCBDb2xvciB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bWJlciB8IFN0eWxlVGVtcGxhdGUgfCBudWxsIHwgdW5kZWZpbmVkKVtdKSB7XG4gIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgZHNNYXAgPSBuZXcgTWFwPHN0cmluZywgKFN0eWxlVGVtcGxhdGUpIHwgU3R5bGVDb2xsZWN0aW9uPigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2Vob2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1tpXTtcbiAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgICAgIGlmIChyZXN1bHQuZW5kc1dpdGgoJy4uLicpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCByZXN1bHQubGVuZ3RoIC0gMyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgfHwgcGxhY2Vob2xkZXIgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBuZXdJRCA9IGNyZWF0ZVVuaXF1ZUlkKCk7XG4gICAgICAgICAgZHNNYXAuc2V0KG5ld0lELCBwbGFjZWhvbGRlcik7XG4gICAgICAgICAgcmVzdWx0ICs9IG5ld0lEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHRoZSBsYXN0IGxpdGVyYWxcbiAgICByZXN1bHQgKz0gbGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgY3NzID0gcmVzdWx0LnJlcGxhY2UoU1RZTEVfVEVNUExBVEVfUkVHRVgoKSwgKHN0cikgPT4ge1xuICAgICAgaWYgKGRzTWFwLmhhcyhzdHIpKSB7XG4gICAgICAgIGNvbnN0IGZuID0gZHNNYXAuZ2V0KHN0cikhO1xuICAgICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICAgIGlmIChmbiBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgIHRlbXBsYXRlID0gZm4uY3NzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlID0gZm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2NyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKX0ke3RlbXBsYXRlKCd8fCZ8fCcpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBMeWxQYXJzZShjc3MsIGNsYXNzTmFtZSkudG9Dc3MoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlSWQoKSB7XG4gIHJldHVybiBgU3R5bGVUZW1wbGF0ZVtfXyR7KGlkKyspLnRvU3RyaW5nKDM2KX1dYDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKHRleHQgPSAnaWQnKSB7XG4gIHJldHVybiBgLyogPj4gJHt0ZXh0fSAtLSAke01hdGguZmxvb3IobmV3IERhdGUoKS52YWx1ZU9mKCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNil9ICovYDtcbn1cblxudHlwZSBUcmFuc2Zvcm1lcjxUPiA9IChzdDogVCkgPT4gKFN0eWxlVGVtcGxhdGUpO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVDb2xsZWN0aW9uPFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW107XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVyPzogVHJhbnNmb3JtZXI8VD47XG5cbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoVClbXSlcbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG4gICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkKC4uLnRlbXBsYXRlczogKFQpW10pOiBTdHlsZUNvbGxlY3Rpb248VD47XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uIHwgU3R5bGVDb2xsZWN0aW9uPFQ+IHtcbiAgICAvLyByZXR1cm4gbmV3IFN0eWxlQ29sbGVjdGlvbiguLi5bLi4udGhpcy5fdGVtcGxhdGVzLCAuLi50ZW1wbGF0ZXNdKTtcbiAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCguLi50ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFRyYW5zZm9ybSBzdHlsZSAqL1xuICBzZXRUcmFuc2Zvcm1lcih0cmFuc2Zvcm1lcjogVHJhbnNmb3JtZXI8VD4pIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1lciA9IHRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gU3R5bGVUZW1wbGF0ZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gdGhpcy5fdGVtcGxhdGVzO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICBpZiAodGhpcy5fdHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdGVtcGxhdGUgPSAoKHRoaXMuX3RyYW5zZm9ybWVyKHRlbXBsYXRlc1tpbmRleF0gYXMgVCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlID0gKHRlbXBsYXRlc1tpbmRleF0gYXMgU3R5bGVUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICBsaW4gKz0gdGVtcGxhdGUoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfVxuXG59XG5cblxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbTogYW55KSB7XG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpICYmICEoaXRlbSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFUsIFY+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogVik6IFQgJiBVICYgVjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lcyh0YXJnZXQ6IGFueSwgLi4uc291cmNlczogYW55W10pOiBhbnkge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7IHJldHVybiB0YXJnZXQ7IH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIGlmIChzb3VyY2Vba2V5XS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgaXMgYSBjbGFzc1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VUaGVtZXModGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEtleSA9IHRhcmdldFtrZXldO1xuICAgICAgICBjb25zdCBzb3VyY2VLZXkgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgLy8gTWVyZ2Ugc3R5bGVzXG4gICAgICAgIGlmICh0YXJnZXRLZXkgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24gJiYgdHlwZW9mIHNvdXJjZUtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gKHRhcmdldFtrZXldIGFzIFN0eWxlQ29sbGVjdGlvbikuYWRkKHNvdXJjZUtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZVRoZW1lcyh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKGZuOiBTdHlsZVRlbXBsYXRlIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKGZuIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGZuLmNzcyhjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmbiA/IChmbikoY2xhc3NOYW1lKSA6ICcnO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVUZW1wbGF0ZShcbi8vICAgZm46IFN0eWxlVGVtcGxhdGVcbi8vICAgKSB7XG4vLyAgIGlmIChmbi5sZW5ndGgpIHtcbi8vICAgICByZXR1cm4gZm4gYXMgU3R5bGVUZW1wbGF0ZTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gKGZuIGFzICgoKSA9PiBTdHlsZVRlbXBsYXRlKSkoKTtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nSWRHZW5lcmF0b3Ige1xuICBwcml2YXRlIF9jaGFyczogc3RyaW5nO1xuICBwcml2YXRlIF9uZXh0SWQ6IG51bWJlcltdO1xuICBjb25zdHJ1Y3RvcihjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpIHtcbiAgICB0aGlzLl9jaGFycyA9IGNoYXJzO1xuICAgIHRoaXMuX25leHRJZCA9IFswXTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgY29uc3Qgcjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdGhpcy5fbmV4dElkKSB7XG4gICAgICByLnVuc2hpZnQodGhpcy5fY2hhcnNbY2hhcl0pO1xuICAgIH1cbiAgICB0aGlzLl9pbmNyZW1lbnQoKTtcbiAgICByZXR1cm4gci5qb2luKCcnKTtcbiAgfVxuXG4gIF9pbmNyZW1lbnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uZXh0SWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbCA9ICsrdGhpcy5fbmV4dElkW2ldO1xuICAgICAgaWYgKHZhbCA+PSB0aGlzLl9jaGFycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbmV4dElkW2ldID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbmV4dElkLnB1c2goMCk7XG4gIH1cbn1cbiJdfQ==