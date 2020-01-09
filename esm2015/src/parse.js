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
                    const isMediaQuery = line_1.includes('@');
                    if (isMediaQuery) {
                        selectors.push([line_1.trim()]);
                        if (!rules.has(line_1)) {
                            rules.set(line_1, []);
                        }
                    }
                    else {
                        selectors.push(line_1
                            .split(',')
                            .map(_ => _.trim()));
                    }
                    selector = this._resolveSelectors(selectors);
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
                    const sel = key.replace(media + '{', '');
                    const newValue = after + val.reduce((previous, current) => {
                        const last = previous[previous.length - 1];
                        if (current.startsWith('/* >> ds')) {
                            previous.push(current.replace(/\|\|\&\|\|/g, sel));
                        }
                        else if (current.startsWith('/* >> cc')) {
                            previous.push(transformCC(current, sel));
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
                        .map(item => Array.isArray(item) ? `${sel}{${item.join('')}}` : item).join('');
                    // const newValue = after
                    // + sel
                    // + `{${val.join('')}}`;
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
                const content = contents[index];
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
            //   variable = `st2c((${variable}), \`${sel}\`)`;
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
function transformCC(content, sel) {
    content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
    let expression = content.slice(2, content.length - 1);
    expression = `st2c((${expression}), \`${sel}\`)`;
    return `\${${expression}}`;
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
                if (typeof placeholder === 'function'
                    || placeholder instanceof StyleCollection) {
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
                return `${createUniqueCommentSelector('ds')}${st2c(fn, '||&||')}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7O0FBQ2hELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzs7QUFDbkMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7QUFDN0QsSUFBSSxFQUFFLEdBQVcsQ0FBQyxDQUFDO0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQ1UsU0FBaUIsRUFDakIsYUFBcUIsY0FBYztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQ3pDLENBQUM7SUFFTCxLQUFLO1FBQ0gsTUFBTSxTQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTO2FBQ1gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsQ0FBQzthQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3RELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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QUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxDQUFDLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMvQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxPQUFPO2FBQ1I7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuY29uc3QgTElORV9GRUVEX1JFR0VYID0gKCkgPT4gLyhcXG4/W15cXG5dK1xcbj8pL2c7XG5jb25zdCBBTVBFUlNBTkRfUkVHRVggPSAoKSA9PiAvJi9nO1xuY29uc3QgU1RZTEVfVEVNUExBVEVfUkVHRVggPSAoKSA9PiAvU3R5bGVUZW1wbGF0ZVxcW1tcXHddK1xcXS9nO1xubGV0IGlkOiBudW1iZXIgPSAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhIGx5bCBzdHlsZSBibG9jayB0byBDU1NcbiAqXG4gKiBBbGxvd2VkIGJsb2NrczpcbiAqXG4gKiAvLyBTaW1wbGVcbiAqIGNvbnN0IEJVVFRPTl9TVFlMRSA9IGx5bCBge1xuICogICBwYWRkaW5nOiA4cHggMTJweFxuICogICBmb250LXNpemU6IDE0cHhcbiAqICAgYm9yZGVyLXJhZGl1czogOXB4XG4gKiAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTBcbiAqIH1gXG4gKlxuICogLy8gTmVzdGluZ1xuICogY29uc3Qgc3R5bGUgPSBseWwgYHtcbiAqICAgdWwgPiB7XG4gKiAgICAgbGkge1xuICogICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICogICAgIH1cbiAqICAgfVxuICogICBwIHtcbiAqICAgICB+IHtcbiAqICAgICAgIHNwYW4ge1xuICogICAgICAgICBvcGFjaXR5OiAwLjg7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9YFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEx5bFBhcnNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nID0gJyR7Y2xhc3NOYW1lfSdcbiAgKSB7IH1cblxuICB0b0NzcygpIHtcbiAgICBjb25zdCBzZWxlY3RvcnM6IChzdHJpbmdbXSlbXSA9IFtdO1xuICAgIGxldCBzZWxlY3RvcjogbnVsbCB8IHN0cmluZyA9IG51bGw7XG4gICAgY29uc3QgcnVsZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgdGhpcy5fdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKC8oXFwvXFwvXFxzW15cXG5cXHJdKig/OltcXG5cXHJdK3wkKSkvZywgJycpXG4gICAgICAucmVwbGFjZSgvLFxcbi9nLCAnLCcpXG4gICAgICAucmVwbGFjZShMSU5FX0ZFRURfUkVHRVgoKSwgKF9leCwgZnVsbExpbmU6IHN0cmluZykgPT4ge1xuICAgICAgZnVsbExpbmUgPSBmdWxsTGluZS50cmltKCk7XG5cbiAgICAgIGlmIChmdWxsTGluZS5lbmRzV2l0aCgneycpKSB7XG4gICAgICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2goW3RoaXMuX2NsYXNzTmFtZV0pO1xuICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3JzWzBdWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxpbmVfMSA9IGZ1bGxMaW5lLnNsaWNlKDAsIGZ1bGxMaW5lLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBpc01lZGlhUXVlcnkgPSBsaW5lXzEuaW5jbHVkZXMoJ0AnKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgICBzZWxlY3RvcnMucHVzaChcbiAgICAgICAgICAgICAgW2xpbmVfMS50cmltKCldXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFydWxlcy5oYXMobGluZV8xKSkge1xuICAgICAgICAgICAgICBydWxlcy5zZXQobGluZV8xLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKFxuICAgICAgICAgICAgICBsaW5lXzFcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLm1hcChfID0+IF8udHJpbSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFydWxlcy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZnVsbExpbmUubGVuZ3RoID09PSAxICYmIGZ1bGxMaW5lLmVuZHNXaXRoKCd9JykpIHtcbiAgICAgICAgc2VsZWN0b3JzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAgIGlmICghcnVsZXMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcnVsZXMuc2V0KHNlbGVjdG9yLCBbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy8qID4+IGRzJykpIHtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLl9yZXNvbHZlU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gICAgICAgIGNvbnN0IGxpbiA9IGZ1bGxMaW5lO1xuXG4gICAgICAgIC8vIElnbm9yZSBjb21waWxlZCBjc3NcbiAgICAgICAgcnVsZXMuZ2V0KHNlbGVjdG9yKSEucHVzaChsaW4pO1xuICAgICAgICAvLyBmdWxsTGluZSA9IGxpbjtcbiAgICAgICAgLy8gLyoqIEZvciBub24gTHlsTW9kdWxlPCAqL2Vsc2Uge1xuICAgICAgICAvLyAgIGZ1bGxMaW5lID0gYFxcJHsoJHtsaW4uc2xpY2UoMiwgbGluLmxlbmd0aCAtIDEpfSkoXFxgJHtzZWxlY3Rvcn1cXGApfWA7XG4gICAgICAgIC8vICAgcnVsZXMuc2V0KGNyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKSwgZnVsbExpbmUpO1xuICAgICAgICAvLyB9IC8qKiBmb3Igbm9uIEx5bE1vZHVsZT4gICovXG4gICAgICB9IGVsc2UgaWYgKGZ1bGxMaW5lLnN0YXJ0c1dpdGgoJy4uLicpKSB7XG4gICAgICAgIC8vIGZvciBub24gTHlsTW9kdWxlPlxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnVsbExpbmUuc2xpY2UoMyk7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fcmVzb2x2ZVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICAgICAgICAvLyBJZ25vcmUgY29tcGlsZWQgY3NzXG4gICAgICAgIHJ1bGVzLmdldChzZWxlY3RvcikhLnB1c2goYCR7Y3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKCdjYycpfSR7Y29udGVudH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmdWxsTGluZSkge1xuICAgICAgICAgIGlmIChmdWxsTGluZS5pbmNsdWRlcygndW5kZWZpbmVkJykgfHwgZnVsbExpbmUuc3RhcnRzV2l0aCgnLy8gJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRG8gbm90IHJlcXVpcmUgc2VtaWNvbG9uIGluIFske2Z1bGxMaW5lfV1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZ1bGxMaW5lLmluY2x1ZGVzKCc6ICcpKSB7XG4gICAgICAgICAgICBmdWxsTGluZSA9IGZ1bGxMaW5lLnJlcGxhY2UoJzogJywgJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbExpbmUgKz0gJzsnO1xuICAgICAgICAgIHJ1bGVzLmdldChzZWxlY3RvciEpIS5wdXNoKGZ1bGxMaW5lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgLy8gSm9pbiBtZWRpYSBxdWVyaWVzICYga2V5ZnJhbWVzXG4gICAgcnVsZXMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQXJyYXkgPSBrZXkubWF0Y2goLyhAW15cXCR7XSooPzpcXCR7W157XSopKil7Lyk7XG4gICAgICBpZiAobWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtZWRpYSA9IG1hdGNoQXJyYXlbMV07XG4gICAgICAgIGlmIChtZWRpYSAhPT0ga2V5ICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhZnRlciA9IHJ1bGVzLmdldChtZWRpYSkhO1xuICAgICAgICAgIGNvbnN0IHNlbCA9IGtleS5yZXBsYWNlKG1lZGlhICsgJ3snLCAnJyk7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhZnRlciArIHZhbC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuc3RhcnRzV2l0aCgnLyogPj4gZHMnKSkge1xuICAgICAgICAgICAgICBwcmV2aW91cy5wdXNoKGN1cnJlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LnN0YXJ0c1dpdGgoJy8qID4+IGNjJykpIHtcbiAgICAgICAgICAgICAgcHJldmlvdXMucHVzaCh0cmFuc2Zvcm1DQyhjdXJyZW50LCBzZWwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgICAgICAgbGFzdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzLnB1c2goW2N1cnJlbnRdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgIH0sIFtdIGFzIChzdHJpbmcgfCBzdHJpbmdbXSlbXSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pID8gYCR7c2VsfXske2l0ZW0uam9pbignJyl9fWAgOiBpdGVtKS5qb2luKCcnKTtcbiAgICAgICAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGFmdGVyXG4gICAgICAgICAgLy8gKyBzZWxcbiAgICAgICAgICAvLyArIGB7JHt2YWwuam9pbignJyl9fWA7XG4gICAgICAgICAgcnVsZXMuc2V0KG1lZGlhLCBbbmV3VmFsdWVdKTtcbiAgICAgICAgICBydWxlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocnVsZXMuZW50cmllcygpKVxuICAgICAgLmZpbHRlcihydWxlID0+IHJ1bGVbMV0pXG4gICAgICAubWFwKHJ1bGUgPT4ge1xuICAgICAgICBjb25zdCBzZWwgPSBydWxlWzBdO1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHJ1bGVbMV07XG4gICAgICAgIGNvbnN0IGNzczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY29udGVudFJlbmRlcmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0PHN0cmluZ1tdPigpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRSZW5kZXJlZC5wdXNoKGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCkpO1xuICAgICAgICAgICAgICBzZXQuYWRkKGNvbnRlbnRSZW5kZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAgICAgICBjb250ZW50UmVuZGVyZWQucHVzaCh0cmFuc2Zvcm1DQyhjb250ZW50LCBzZWwpKTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjb250ZW50UmVuZGVyZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY3NzICs9IGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgICAgICAgICBjc3MucHVzaChjb250ZW50KTtcbiAgICAgICAgICAgICAgc2V0LmFkZChjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZXQpLm1hcCgoXykgPT4ge1xuICAgICAgICAgIGlmIChfID09PSBjc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3MubGVuZ3RoXG4gICAgICAgICAgICA/IGAke3NlbH17JHtjc3Muam9pbignJyl9fWBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLmpvaW4oJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIC8vIHJldHVybiAoY3NzXG4gICAgICAgIC8vICAgPyBgJHtzZWx9eyR7Y3NzfX1gXG4gICAgICAgIC8vICAgOiAgJycpICsgY29udGVudFJlbmRlcmVkO1xuICAgICAgICAvLyBpZiAoY29udGVudC5zdGFydHNXaXRoKCcvKiA+PiBkcycpKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx8XFx8XFwmXFx8XFx8L2csIHNlbCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNvbnRlbnQuc3RhcnRzV2l0aCgnLyogPj4gY2MnKSkge1xuICAgICAgICAvLyAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcKiA+PiBjY1teXFwvXFwqXStcXCpcXC8vZywgJycpO1xuICAgICAgICAvLyAgIGxldCB2YXJpYWJsZSA9IGNvbnRlbnQuc2xpY2UoMiwgY29udGVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgLy8gICB2YXJpYWJsZSA9IGBzdDJjKCgke3ZhcmlhYmxlfSksIFxcYCR7c2VsfVxcYClgO1xuICAgICAgICAvLyAgIHJldHVybiBgXFwkeyR7dmFyaWFibGV9fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gZm9yIG5vbiBMeWxNb2R1bGU+XG5cbiAgICAgICAgLy8gaWYgKHNlbC5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgLy8gICByZXR1cm4gYCR7c2VsfXske3J1bGVbMV19fWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGAke3NlbH17JHtjb250ZW50fX1gO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxlY3RvcnMoc2VsZWN0b3JzOiAoc3RyaW5nW10pW10pIHtcbiAgICBsZXQgbWVkaWE6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yc1xuICAgICAgLm1hcChfID0+IF8uZmlsdGVyKF9fID0+IHtcbiAgICAgICAgaWYgKF9fLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgIC8vIHNhdmUgbWVkaWFcbiAgICAgICAgICBtZWRpYSA9IF9fO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX187XG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoXyA9PiBfLmxlbmd0aClcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJldi5tYXAoaXRlbSA9PiBjdXJyZW50Lm1hcChjdSA9PiB7XG4gICAgICAgICAgaWYgKGN1LmluY2x1ZGVzKCcmJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjdS5yZXBsYWNlKEFNUEVSU0FORF9SRUdFWCgpLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke2l0ZW19ICR7Y3V9YDtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLCcpO1xuXG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICByZXR1cm4gYCR7bWVkaWF9eyR7c2VsfWA7XG4gICAgfVxuICAgIHJldHVybiBzZWw7XG4gIH1cblxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1DQyhjb250ZW50OiBzdHJpbmcsIHNlbDogc3RyaW5nKSB7XG4gIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcKiA+PiBjY1teXFwvXFwqXStcXCpcXC8vZywgJycpO1xuICBsZXQgZXhwcmVzc2lvbiA9IGNvbnRlbnQuc2xpY2UoMiwgY29udGVudC5sZW5ndGggLSAxKTtcbiAgZXhwcmVzc2lvbiA9IGBzdDJjKCgke2V4cHJlc3Npb259KSwgXFxgJHtzZWx9XFxgKWA7XG4gIHJldHVybiBgXFwkeyR7ZXhwcmVzc2lvbn19YDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVUZW1wbGF0ZSA9IChjbGFzc05hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gbHlsKGxpdGVyYWxzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGxhY2Vob2xkZXJzOiAoc3RyaW5nIHwgQ29sb3IgfCBTdHlsZUNvbGxlY3Rpb24gfCBudW1iZXIgfCBTdHlsZVRlbXBsYXRlIHwgbnVsbCB8IHVuZGVmaW5lZClbXSkge1xuICByZXR1cm4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGRzTWFwID0gbmV3IE1hcDxzdHJpbmcsIChTdHlsZVRlbXBsYXRlKSB8IFN0eWxlQ29sbGVjdGlvbj4oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlaG9sZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcnNbaV07XG4gICAgICByZXN1bHQgKz0gbGl0ZXJhbHNbaV07XG4gICAgICBpZiAocmVzdWx0LmVuZHNXaXRoKCcuLi4nKSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0Lmxlbmd0aCAtIDMpO1xuICAgICAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgfHwgcGxhY2Vob2xkZXIgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3SUQgPSBjcmVhdGVVbmlxdWVJZCgpO1xuICAgICAgICAgIGRzTWFwLnNldChuZXdJRCwgcGxhY2Vob2xkZXIpO1xuICAgICAgICAgIHJlc3VsdCArPSBuZXdJRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCB0aGUgbGFzdCBsaXRlcmFsXG4gICAgcmVzdWx0ICs9IGxpdGVyYWxzW2xpdGVyYWxzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGNzcyA9IHJlc3VsdC5yZXBsYWNlKFNUWUxFX1RFTVBMQVRFX1JFR0VYKCksIChzdHIpID0+IHtcbiAgICAgIGlmIChkc01hcC5oYXMoc3RyKSkge1xuICAgICAgICBjb25zdCBmbiA9IGRzTWFwLmdldChzdHIpITtcbiAgICAgICAgcmV0dXJuIGAke2NyZWF0ZVVuaXF1ZUNvbW1lbnRTZWxlY3RvcignZHMnKX0ke3N0MmMoZm4sICd8fCZ8fCcpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBMeWxQYXJzZShjc3MsIGNsYXNzTmFtZSkudG9Dc3MoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlSWQoKSB7XG4gIHJldHVybiBgU3R5bGVUZW1wbGF0ZVtfXyR7KGlkKyspLnRvU3RyaW5nKDM2KX1dYDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlQ29tbWVudFNlbGVjdG9yKHRleHQgPSAnaWQnKSB7XG4gIHJldHVybiBgLyogPj4gJHt0ZXh0fSAtLSAke01hdGguZmxvb3IobmV3IERhdGUoKS52YWx1ZU9mKCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNil9ICovYDtcbn1cblxudHlwZSBUcmFuc2Zvcm1lcjxUPiA9IChzdDogVCkgPT4gKFN0eWxlVGVtcGxhdGUpO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVDb2xsZWN0aW9uPFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW107XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVyPzogVHJhbnNmb3JtZXI8VD47XG5cbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoVClbXSlcbiAgY29uc3RydWN0b3IoLi4udGVtcGxhdGVzOiAoU3R5bGVUZW1wbGF0ZSB8IFQpW10pIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG4gICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkKC4uLnRlbXBsYXRlczogKFQpW10pOiBTdHlsZUNvbGxlY3Rpb248VD47XG4gIGFkZCguLi50ZW1wbGF0ZXM6IChTdHlsZVRlbXBsYXRlIHwgVClbXSk6IFN0eWxlQ29sbGVjdGlvbjtcbiAgYWRkKC4uLnRlbXBsYXRlczogKFN0eWxlVGVtcGxhdGUgfCBUKVtdKTogU3R5bGVDb2xsZWN0aW9uIHwgU3R5bGVDb2xsZWN0aW9uPFQ+IHtcbiAgICAvLyByZXR1cm4gbmV3IFN0eWxlQ29sbGVjdGlvbiguLi5bLi4udGhpcy5fdGVtcGxhdGVzLCAuLi50ZW1wbGF0ZXNdKTtcbiAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCguLi50ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFRyYW5zZm9ybSBzdHlsZSAqL1xuICBzZXRUcmFuc2Zvcm1lcih0cmFuc2Zvcm1lcjogVHJhbnNmb3JtZXI8VD4pIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1lciA9IHRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gU3R5bGVUZW1wbGF0ZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gdGhpcy5fdGVtcGxhdGVzO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgdGVtcGxhdGU6IFN0eWxlVGVtcGxhdGU7XG4gICAgICBpZiAodGhpcy5fdHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdGVtcGxhdGUgPSAoKHRoaXMuX3RyYW5zZm9ybWVyKHRlbXBsYXRlc1tpbmRleF0gYXMgVCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlID0gKHRlbXBsYXRlc1tpbmRleF0gYXMgU3R5bGVUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICBsaW4gKz0gdGVtcGxhdGUoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfVxuXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgLi4ue3N0eWxlfSB0byBjc3NcbiAqIEZvciBpbnRlcm5hbCB1c2UgcHVycG9zZXMgb25seVxuICogQHBhcmFtIGZuIFN0eWxlVGVtcGxhdGUgb3IgU3R5bGVDb2xsZWN0aW9uXG4gKiBAcGFyYW0gY2xhc3NOYW1lIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0MmMoXG4gIGZuOiBTdHlsZVRlbXBsYXRlIHwgU3R5bGVDb2xsZWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKGZuID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKGZuIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGZuLmNzcyhjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmbihjbGFzc05hbWUpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVUZW1wbGF0ZShcbi8vICAgZm46IFN0eWxlVGVtcGxhdGVcbi8vICAgKSB7XG4vLyAgIGlmIChmbi5sZW5ndGgpIHtcbi8vICAgICByZXR1cm4gZm4gYXMgU3R5bGVUZW1wbGF0ZTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gKGZuIGFzICgoKSA9PiBTdHlsZVRlbXBsYXRlKSkoKTtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nSWRHZW5lcmF0b3Ige1xuICBwcml2YXRlIF9jaGFyczogc3RyaW5nO1xuICBwcml2YXRlIF9uZXh0SWQ6IG51bWJlcltdO1xuICBjb25zdHJ1Y3RvcihjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpIHtcbiAgICB0aGlzLl9jaGFycyA9IGNoYXJzO1xuICAgIHRoaXMuX25leHRJZCA9IFswXTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgY29uc3Qgcjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdGhpcy5fbmV4dElkKSB7XG4gICAgICByLnVuc2hpZnQodGhpcy5fY2hhcnNbY2hhcl0pO1xuICAgIH1cbiAgICB0aGlzLl9pbmNyZW1lbnQoKTtcbiAgICByZXR1cm4gci5qb2luKCcnKTtcbiAgfVxuXG4gIF9pbmNyZW1lbnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uZXh0SWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbCA9ICsrdGhpcy5fbmV4dElkW2ldO1xuICAgICAgaWYgKHZhbCA+PSB0aGlzLl9jaGFycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbmV4dElkW2ldID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbmV4dElkLnB1c2goMCk7XG4gIH1cbn1cbiJdfQ==