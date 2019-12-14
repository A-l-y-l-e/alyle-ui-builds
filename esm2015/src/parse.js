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
                    Object.assign(target, { [key]: source[key] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7O0FBQ2hELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzs7QUFDbkMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7QUFDN0QsSUFBSSxFQUFFLEdBQVcsQ0FBQyxDQUFDO0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQ1UsU0FBaUIsRUFDakIsYUFBcUIsY0FBYztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCxLQUFLO1FBQ0gsTUFBTSxTQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTO2FBQ1gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsQ0FBQzthQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3RELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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YUFDckI7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IExJTkVfRkVFRF9SRUdFWCA9ICgpID0+IC8oXFxuP1teXFxuXStcXG4/KS9nO1xuY29uc3QgQU1QRVJTQU5EX1JFR0VYID0gKCkgPT4gLyYvZztcbmNvbnN0IFNUWUxFX1RFTVBMQVRFX1JFR0VYID0gKCkgPT4gL1N0eWxlVGVtcGxhdGVcXFtbXFx3XStcXF0vZztcbmxldCBpZDogbnVtYmVyID0gMDtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBseWwgc3R5bGUgYmxvY2sgdG8gQ1NTXG4gKlxuICogQWxsb3dlZCBibG9ja3M6XG4gKlxuICogLy8gU2ltcGxlXG4gKiBjb25zdCBCVVRUT05fU1RZTEUgPSBseWwgYHtcbiAqICAgcGFkZGluZzogOHB4IDEycHhcbiAqICAgZm9udC1zaXplOiAxNHB4XG4gKiAgIGJvcmRlci1yYWRpdXM6IDlweFxuICogICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwXG4gKiB9YFxuICpcbiAqIC8vIE5lc3RpbmdcbiAqIGNvbnN0IHN0eWxlID0gbHlsIGB7XG4gKiAgIHVsID4ge1xuICogICAgIGxpIHtcbiAqICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAqICAgICB9XG4gKiAgIH1cbiAqICAgcCB7XG4gKiAgICAgfiB7XG4gKiAgICAgICBzcGFuIHtcbiAqICAgICAgICAgb3BhY2l0eTogMC44O1xuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICogfWBcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMeWxQYXJzZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcke2NsYXNzTmFtZX0nXG4gICkgeyB9XG5cbiAgdG9Dc3MoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzOiAoc3RyaW5nW10pW10gPSBbXTtcbiAgICBsZXQgc2VsZWN0b3I6IG51bGwgfCBzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0IHJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICAgIHRoaXMuX3RlbXBsYXRlXG4gICAgICAucmVwbGFjZSgvKFxcL1xcL1xcc1teXFxuXFxyXSooPzpbXFxuXFxyXSt8JCkpL2csICcnKVxuICAgICAgLnJlcGxhY2UoLyxcXG4vZywgJywnKVxuICAgICAgLnJlcGxhY2UoTElORV9GRUVEX1JFR0VYKCksIChfZXgsIGZ1bGxMaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUudHJpbSgpO1xuXG4gICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJ3snKSkge1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFt0aGlzLl9jbGFzc05hbWVdKTtcbiAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yc1swXVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsaW5lXzEgPSBmdWxsTGluZS5zbGljZSgwLCBmdWxsTGluZS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goXG4gICAgICAgICAgICBsaW5lXzFcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAubWFwKF8gPT4gXy50cmltKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcblxuICAgICAgICAgIGlmIChsaW5lXzEuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgICAgaWYgKCFydWxlcy5oYXMobGluZV8xKSkge1xuICAgICAgICAgICAgICBydWxlcy5zZXQobGluZV8xLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJ1bGVzLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmdWxsTGluZS5sZW5ndGggPT09IDEgJiYgZnVsbExpbmUuZW5kc1dpdGgoJ30nKSkge1xuICAgICAgICBzZWxlY3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBydWxlcy5zZXQoc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgICAgY29uc3QgbGluID0gZnVsbExpbmU7XG5cbiAgICAgICAgLy8gSWdub3JlIGNvbXBpbGVkIGNzc1xuICAgICAgICBydWxlcy5nZXQoc2VsZWN0b3IpIS5wdXNoKGxpbik7XG4gICAgICAgIC8vIGZ1bGxMaW5lID0gbGluO1xuICAgICAgICAvLyAvKiogRm9yIG5vbiBMeWxNb2R1bGU8ICovZWxzZSB7XG4gICAgICAgIC8vICAgZnVsbExpbmUgPSBgXFwkeygke2xpbi5zbGljZSgyLCBsaW4ubGVuZ3RoIC0gMSl9KShcXGAke3NlbGVjdG9yfVxcYCl9YDtcbiAgICAgICAgLy8gICBydWxlcy5zZXQoY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdkcycpLCBmdWxsTGluZSk7XG4gICAgICAgIC8vIH0gLyoqIGZvciBub24gTHlsTW9kdWxlPiAgKi9cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUuc3RhcnRzV2l0aCgnLi4uJykpIHtcbiAgICAgICAgLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmdWxsTGluZS5zbGljZSgzKTtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChgJHtjcmVhdGVVbmlxdWVDb21tZW50U2VsZWN0b3IoJ2NjJyl9JHtjb250ZW50fWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxMaW5lKSB7XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCd1bmRlZmluZWQnKSB8fCBmdWxsTGluZS5zdGFydHNXaXRoKCcvLyAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuZW5kc1dpdGgoJzsnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEbyBub3QgcmVxdWlyZSBzZW1pY29sb24gaW4gWyR7ZnVsbExpbmV9XWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnVsbExpbmUuaW5jbHVkZXMoJzogJykpIHtcbiAgICAgICAgICAgIGZ1bGxMaW5lID0gZnVsbExpbmUucmVwbGFjZSgnOiAnLCAnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsTGluZSArPSAnOyc7XG4gICAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yISkhLnB1c2goZnVsbExpbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICAvLyBKb2luIG1lZGlhIHF1ZXJpZXMgJiBrZXlmcmFtZXNcbiAgICBydWxlcy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hBcnJheSA9IGtleS5tYXRjaCgvKEBbXlxcJHtdKig/OlxcJHtbXntdKikqKXsvKTtcbiAgICAgIGlmIChtYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gbWF0Y2hBcnJheVsxXTtcbiAgICAgICAgaWYgKG1lZGlhICE9PSBrZXkgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gcnVsZXMuZ2V0KG1lZGlhKSE7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhZnRlciArIGtleS5yZXBsYWNlKG1lZGlhICsgJ3snLCAnJykgKyBgeyR7dmFsLmpvaW4oJzsnKX19YDtcbiAgICAgICAgICBydWxlcy5zZXQobWVkaWEsIFtuZXdWYWx1ZV0pO1xuICAgICAgICAgIHJ1bGVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShydWxlcy5lbnRyaWVzKCkpXG4gICAgICAuZmlsdGVyKHJ1bGUgPT4gcnVsZVsxXSlcbiAgICAgIC5tYXAocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbCA9IHJ1bGVbMF07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gcnVsZVsxXTtcbiAgICAgICAgY29uc3QgY3NzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50UmVuZGVyZWQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8c3RyaW5nW10+KCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcbiAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaChjb250ZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwqID4+IGNjW15cXC9cXCpdK1xcKlxcLy9nLCAnJyk7XG4gICAgICAgICAgICAgIGxldCBleHByZXNzaW9uID0gY29udGVudC5zbGljZSgyLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICBleHByZXNzaW9uID0gYHN0eWxlVGVtcGxhdGVUb1N0cmluZygoJHtleHByZXNzaW9ufSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaChgXFwkeyR7ZXhwcmVzc2lvbn19YCk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY29udGVudFJlbmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGNzcyArPSBgJHtzZWx9eyR7Y29udGVudH19YDtcbiAgICAgICAgICAgICAgY3NzLnB1c2goY29udGVudCk7XG4gICAgICAgICAgICAgIHNldC5hZGQoY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KS5tYXAoKF8pID0+IHtcbiAgICAgICAgICBpZiAoXyA9PT0gY3NzKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzLmxlbmd0aFxuICAgICAgICAgICAgPyBgJHtzZWx9eyR7Y3NzLmpvaW4oJycpfX1gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5qb2luKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAvLyByZXR1cm4gKGNzc1xuICAgICAgICAvLyAgID8gYCR7c2VsfXske2Nzc319YFxuICAgICAgICAvLyAgIDogICcnKSArIGNvbnRlbnRSZW5kZXJlZDtcbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAvLyAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcfFxcfFxcJlxcfFxcfC9nLCBzZWwpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgLy8gICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCogPj4gY2NbXlxcL1xcKl0rXFwqXFwvL2csICcnKTtcbiAgICAgICAgLy8gICBsZXQgdmFyaWFibGUgPSBjb250ZW50LnNsaWNlKDIsIGNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vICAgdmFyaWFibGUgPSBgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nKCgke3ZhcmlhYmxlfSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAvLyAgIHJldHVybiBgXFwkeyR7dmFyaWFibGV9fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG5cbiAgICAgICAgLy8gaWYgKHNlbC5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgLy8gICByZXR1cm4gYCR7c2VsfXske3J1bGVbMV19fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzOiAoc3RyaW5nW10pW10pIHtcbiAgICBsZXQgbWVkaWE6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yc1xuICAgICAgLm1hcChfID0+IF8uZmlsdGVyKF9fID0+IHtcbiAgICAgICAgaWYgKF9fLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgIC8vIHNhdmUgbWVkaWFcbiAgICAgICAgICBtZWRpYSA9IF9fO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX187XG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoXyA9PiBfLmxlbmd0aClcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJldi5tYXAoaXRlbSA9PiBjdXJyZW50Lm1hcChjdSA9PiB7XG4gICAgICAgICAgaWYgKGN1LmluY2x1ZGVzKCcmJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjdS5yZXBsYWNlKEFNUEVSU0FORF9SRUdFWCgpLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke2l0ZW19ICR7Y3V9YDtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLCcpO1xuXG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICByZXR1cm4gYCR7bWVkaWF9eyR7c2VsfWA7XG4gICAgfVxuICAgIHJldHVybiBzZWw7XG4gIH1cblxufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRlbXBsYXRlID0gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBseWwobGl0ZXJhbHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wbGFjZWhvbGRlcnM6IChzdHJpbmcgfCBDb2xvciB8IFN0eWxlQ29sbGVjdGlvbiB8IG51bWJlciB8IFN0eWxlVGVtcGxhdGUgfCBudWxsIHwgdW5kZWZpbmVkKVtdKSB7XG4gIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgZHNNYXAgPSBuZXcgTWFwPHN0cmluZywgKFN0eWxlVGVtcGxhdGUpIHwgU3R5bGVDb2xsZWN0aW9uPigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2Vob2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1tpXTtcbiAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgICAgIGlmIChyZXN1bHQuZW5kc1dpdGgoJy4uLicpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCByZXN1bHQubGVuZ3RoIC0gMyk7XG4gICAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgfHwgcGxhY2Vob2xkZXIgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBuZXdJRCA9IGNyZWF0ZVVuaXF1ZUlkKCk7XG4gICAgICAgICAgZHNNYXAuc2V0KG5ld0lELCBwbGFjZWhvbGRlcik7XG4gICAgICAgICAgcmVzdWx0ICs9IG5ld0lEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHRoZSBsYXN0IGxpdGVyYWxcbiAgICByZXN1bHQgKz0gbGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgY3NzID0gcmVzdWx0LnJlcGxhY2UoU1RZTEVfVEVNUExBVEVfUkVHRVgoKSwgKHN0cikgPT4ge1xuICAgICAgaWYgKGRzTWFwLmhhcyhzdHIpKSB7XG4gICAgICAgIGNvbnN0IGZuID0gZHNNYXAuZ2V0KHN0cikhO1xuICAgICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICAgIGlmIChmbiBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbikge1xuICAgICAgICAgIHRlbXBsYXRlID0gZm4uY3NzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlID0gZm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2NyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKX0ke3RlbXBsYXRlKCd8fCZ8fCcpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBMeWxQYXJzZShjc3MsIGNsYXNzTmFtZSkudG9Dc3MoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlSWQoKSB7XG4gIHJldHVybiBgU3R5bGVUZW1wbGF0ZVtfXyR7KGlkKyspLnRvU3RyaW5nKDM2KX1dYDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKHRleHQgPSAnaWQnKSB7XG4gIHJldHVybiBgLyogPj4gJHt0ZXh0fSAtLSAke01hdGguZmxvb3IobmV3IERhdGUoKS52YWx1ZU9mKCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNil9ICovYDtcbn1cblxudHlwZSBUcmFuc2Zvcm1lcjxUPiA9IChzdDogVCkgPT4gKFN0eWxlVGVtcGxhdGUpO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVDb2xsZWN0aW9uPFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW107XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVyPzogVHJhbnNmb3JtZXI8VD47XG5cbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoVClbXSlcbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG4gICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkKC4uLnRlbXBsYXRlczogKFQpW10pOiBTdHlsZUNvbGxlY3Rpb248VD47XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uIHwgU3R5bGVDb2xsZWN0aW9uPFQ+IHtcbiAgICAvLyByZXR1cm4gbmV3IFN0eWxlQ29sbGVjdGlvbiguLi5bLi4udGhpcy5fdGVtcGxhdGVzLCAuLi50ZW1wbGF0ZXNdKTtcbiAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCguLi50ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFRyYW5zZm9ybSBzdHlsZSAqL1xuICBzZXRUcmFuc2Zvcm1lcih0cmFuc2Zvcm1lcjogVHJhbnNmb3JtZXI8VD4pIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1lciA9IHRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gU3R5bGVUZW1wbGF0ZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gdGhpcy5fdGVtcGxhdGVzO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICBpZiAodGhpcy5fdHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdGVtcGxhdGUgPSAoKHRoaXMuX3RyYW5zZm9ybWVyKHRlbXBsYXRlc1tpbmRleF0gYXMgVCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlID0gKHRlbXBsYXRlc1tpbmRleF0gYXMgU3R5bGVUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICBsaW4gKz0gdGVtcGxhdGUoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfVxuXG59XG5cblxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbTogYW55KSB7XG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpICYmICEoaXRlbSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzPFQsIFUsIFY+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogVik6IFQgJiBVICYgVjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lczxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVGhlbWVzKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRoZW1lcyh0YXJnZXQ6IGFueSwgLi4uc291cmNlczogYW55W10pOiBhbnkge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7IHJldHVybiB0YXJnZXQ7IH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIGlmIChzb3VyY2Vba2V5XS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgaXMgYSBjbGFzc1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VUaGVtZXModGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEtleSA9IHRhcmdldFtrZXldO1xuICAgICAgICBjb25zdCBzb3VyY2VLZXkgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgLy8gTWVyZ2Ugc3R5bGVzXG4gICAgICAgIGlmICh0YXJnZXRLZXkgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24gJiYgdHlwZW9mIHNvdXJjZUtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gKHRhcmdldFtrZXldIGFzIFN0eWxlQ29sbGVjdGlvbikuYWRkKHNvdXJjZUtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlVGhlbWVzKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRlbXBsYXRlVG9TdHJpbmcoZm46IFN0eWxlVGVtcGxhdGUgfCBTdHlsZUNvbGxlY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZm4gaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gZm4uY3NzKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZuID8gKGZuKShjbGFzc05hbWUpIDogJyc7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZVRlbXBsYXRlKFxuLy8gICBmbjogU3R5bGVUZW1wbGF0ZVxuLy8gICApIHtcbi8vICAgaWYgKGZuLmxlbmd0aCkge1xuLy8gICAgIHJldHVybiBmbiBhcyBTdHlsZVRlbXBsYXRlO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoZm4gYXMgKCgpID0+IFN0eWxlVGVtcGxhdGUpKSgpO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdJZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgX2NoYXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25leHRJZDogbnVtYmVyW107XG4gIGNvbnN0cnVjdG9yKGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jykge1xuICAgIHRoaXMuX2NoYXJzID0gY2hhcnM7XG4gICAgdGhpcy5fbmV4dElkID0gWzBdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCByOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hhciBvZiB0aGlzLl9uZXh0SWQpIHtcbiAgICAgIHIudW5zaGlmdCh0aGlzLl9jaGFyc1tjaGFyXSk7XG4gICAgfVxuICAgIHRoaXMuX2luY3JlbWVudCgpO1xuICAgIHJldHVybiByLmpvaW4oJycpO1xuICB9XG5cbiAgX2luY3JlbWVudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25leHRJZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsID0gKyt0aGlzLl9uZXh0SWRbaV07XG4gICAgICBpZiAodmFsID49IHRoaXMuX2NoYXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9uZXh0SWRbaV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9uZXh0SWQucHVzaCgwKTtcbiAgfVxufVxuIl19