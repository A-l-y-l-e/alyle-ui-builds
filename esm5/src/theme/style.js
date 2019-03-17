/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Only for internal use
 * @type {?}
 */
export var _STYLE_MAP = new Map();
/**
 * Only for internal use
 * \@docs-private
 * @record
 */
export function StyleMap5() { }
if (false) {
    /** @type {?} */
    StyleMap5.prototype.styles;
    /** @type {?} */
    StyleMap5.prototype.type;
    /** @type {?|undefined} */
    StyleMap5.prototype.priority;
    /** @type {?} */
    StyleMap5.prototype.css;
    /**
     * global theme
     * @type {?|undefined}
     */
    StyleMap5.prototype.classes;
    /**
     * requireUpdate
     * @type {?|undefined}
     */
    StyleMap5.prototype.classesWithTheme;
    /**
     * Only for styles of TypeStyle.one
     * @type {?|undefined}
     */
    StyleMap5.prototype.parentStyle;
    /** @type {?|undefined} */
    StyleMap5.prototype.requireUpdate;
    /** @type {?} */
    StyleMap5.prototype.id;
}
/** @enum {number} */
var TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
export { TypeStyle };
TypeStyle[TypeStyle.Multiple] = 'Multiple';
TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
/**
 * Style Object
 * @record
 */
export function StyleContainer() { }
/**
 * @record
 */
export function StyleGroup() { }
if (false) {
    /**
     * Prefix name
     * @type {?|undefined}
     */
    StyleGroup.prototype.$name;
    /** @type {?|undefined} */
    StyleGroup.prototype.$keyframes;
    /** @type {?|undefined} */
    StyleGroup.prototype.$priority;
    /* Skipping unhandled member: [key: string]: StyleContainer | string | number | undefined | null;*/
}
/**
 * @record
 */
export function Keyframes() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxNQUFNLEtBQU8sVUFBVSxHQUF3QixJQUFJLEdBQUcsRUFBRTs7Ozs7O0FBTXhELCtCQXFCQzs7O0lBcEJDLDJCQUFlOztJQUNmLHlCQUFnQjs7SUFDaEIsNkJBQXlCOztJQUN6Qix3QkFFVzs7Ozs7SUFFWCw0QkFFVzs7Ozs7SUFFWCxxQ0FJRTs7Ozs7SUFFRixnQ0FBcUI7O0lBQ3JCLGtDQUF3Qjs7SUFDeEIsdUJBQWtCOzs7O0lBSWxCLFdBQVE7SUFDUixVQUFPOzs7Ozs7Ozs7QUFPVCxvQ0FFQzs7OztBQUVELGdDQU1DOzs7Ozs7SUFKQywyQkFBZTs7SUFDZixnQ0FBdUI7O0lBQ3ZCLCtCQUFtQjs7Ozs7O0FBV3JCLCtCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIE9ubHkgZm9yIGludGVybmFsIHVzZSAqL1xuZXhwb3J0IGNvbnN0IF9TVFlMRV9NQVA6IE1hcDxhbnksIFN0eWxlTWFwNT4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogT25seSBmb3IgaW50ZXJuYWwgdXNlXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA1IHtcbiAgc3R5bGVzOiBTdHlsZXM7XG4gIHR5cGU6IFR5cGVTdHlsZTtcbiAgcHJpb3JpdHk/OiBudW1iZXIgfCBudWxsO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgLyoqIE9ubHkgZm9yIHN0eWxlcyBvZiBUeXBlU3R5bGUub25lICovXG4gIHBhcmVudFN0eWxlPzogU3R5bGVzO1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5cblxuLyoqXG4gKiBTdHlsZSBPYmplY3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlR3JvdXAge1xuICAvKiogUHJlZml4IG5hbWUgKi9cbiAgJG5hbWU/OiBzdHJpbmc7XG4gICRrZXlmcmFtZXM/OiBLZXlmcmFtZXM7XG4gICRwcmlvcml0eT86IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xufVxuXG4vKipcbiAqIENTUyBkZWNsYXJhdGlvbnMgYmxvY2tcbiAqL1xuZXhwb3J0IHR5cGUgU3R5bGVEZWNsYXJhdGlvbnNCbG9jayA9ICgoVDogYW55KSA9PiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZykgfCBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFN0eWxlcyA9ICgoVDogYW55LCB0aGVtZTogYW55KSA9PiBTdHlsZUdyb3VwKSB8IFN0eWxlR3JvdXAgfCB1bmRlZmluZWQgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleWZyYW1lcyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgW3BlcmNlbnQ6IG51bWJlcl06IFN0eWxlQ29udGFpbmVyXG4gIH07XG59XG5cbi8vIENvbnZlcnQgYWxsIHByb3BlcnRpZXMgdG8gYHN0cmluZ2AgdHlwZSwgYW5kIGV4Y2x1ZGUgcHJvcGVydGllcyB0aGF0IG5vdCBpcyBjbGFzcyBuYW1lXG5leHBvcnQgdHlwZSBMeUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFxuICBFeGNsdWRlPChUIGV4dGVuZHMgKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA/IChrZXlvZiBSZXR1cm5UeXBlPFQ+KSA6IGtleW9mIFQpLFxuICAnJG5hbWUnIHwgJyRrZXlmcmFtZXMnIHwgJ0BnbG9iYWwnIHwgJyRwcmlvcml0eSc+XG4pLCBzdHJpbmc+O1xuXG4iXX0=