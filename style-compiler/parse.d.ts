import { Color } from '@alyle/ui/color';
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
export declare class LylParse {
    private _template;
    private _className;
    constructor(_template: string, _className?: string);
    toCss(): string;
    private _resolveSelectors;
}
export declare type StyleTemplate = (className: string) => string;
export declare function lyl(literals: TemplateStringsArray, ...placeholders: (string | Color | StyleCollection | number | StyleTemplate | null | undefined)[]): (className: string) => string;
declare type Transformer<T> = (st: T) => (StyleTemplate);
export declare class StyleCollection<T = any> {
    private _templates;
    private _transformer?;
    constructor(...templates: (T)[]);
    add(...templates: (T)[]): StyleCollection<T>;
    add(...templates: (StyleTemplate | T)[]): StyleCollection;
    /** Transform style */
    setTransformer(transformer: Transformer<T>): this;
    /**
     * @return StyleTemplate
     * @docs-private
     */
    css(className: string): string;
}
export declare function styleTemplateToString(fn: StyleTemplate | StyleCollection | null | undefined, className: string): string;
export declare class StringIdGenerator {
    private _chars;
    private _nextId;
    constructor(chars?: string);
    next(): string;
    _increment(): void;
}
export {};
