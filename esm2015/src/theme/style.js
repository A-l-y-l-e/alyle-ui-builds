/** For internal use only */
export const _STYLE_MAP = new Map();
export var TypeStyle;
(function (TypeStyle) {
    TypeStyle[TypeStyle["Multiple"] = 0] = "Multiple";
    TypeStyle[TypeStyle["OnlyOne"] = 1] = "OnlyOne";
    /**
     * A lyl Style
     */
    TypeStyle[TypeStyle["LylStyle"] = 2] = "LylStyle";
})(TypeStyle || (TypeStyle = {}));
export function getThemeNameForSelectors(themeId) {
    return `${themeId}<~(selectors)`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsNEJBQTRCO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQWdDekQsTUFBTSxDQUFOLElBQVksU0FPWDtBQVBELFdBQVksU0FBUztJQUNuQixpREFBUSxDQUFBO0lBQ1IsK0NBQU8sQ0FBQTtJQUNQOztPQUVHO0lBQ0gsaURBQVEsQ0FBQTtBQUNWLENBQUMsRUFQVyxTQUFTLEtBQVQsU0FBUyxRQU9wQjtBQTRERCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsT0FBZTtJQUN0RCxPQUFPLEdBQUcsT0FBTyxlQUFlLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJy4uL3BhcnNlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seSAqL1xuZXhwb3J0IGNvbnN0IF9TVFlMRV9NQVA6IE1hcDxhbnksIFN0eWxlTWFwNT4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogRm9yIGludGVybmFsIHVzZSBvbmx5XG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA1IHtcbiAgc3R5bGVzOiBTdHlsZXM7XG4gIHR5cGU6IFR5cGVTdHlsZTtcbiAgcHJpb3JpdHk/OiBudW1iZXIgfCBudWxsO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgLyoqIE9ubHkgZm9yIHN0eWxlcyBvZiBUeXBlU3R5bGUub25lICovXG4gIHBhcmVudFN0eWxlPzogU3R5bGVzO1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG4gIGlzTmV3U3R5bGU/OiBib29sZWFuO1xuICAvKiogVGhpcyBpcyB1c2VkIHdoZW4gYSBpbnN0YW5jZSBjb250YWlucyBtdWx0aXBsZSBzdHlsZXMgKi9cbiAga2V5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZSxcbiAgLyoqXG4gICAqIEEgbHlsIFN0eWxlXG4gICAqL1xuICBMeWxTdHlsZVxufVxuXG5cbi8qKlxuICogU3R5bGUgT2JqZWN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCB8IFN0eWxlVGVtcGxhdGUgfCBDb2xvcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUdyb3VwIHtcbiAgLyoqIFByZWZpeCBuYW1lICovXG4gICRuYW1lPzogc3RyaW5nO1xuICAka2V5ZnJhbWVzPzogS2V5ZnJhbWVzRGVwcmVjYXRlZDtcbiAgJHByaW9yaXR5PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8ICgoKSA9PiBTdHlsZVRlbXBsYXRlKSB8IFN0eWxlVGVtcGxhdGUgfCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5U3R5bGVHcm91cCB7XG4gIC8qKiBQcmVmaXggbmFtZSAqL1xuICAkbmFtZT86IHN0cmluZztcbiAgJHByaW9yaXR5PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiAoKCkgPT4gKFN0eWxlVGVtcGxhdGUgfCBudWxsIHwgdW5kZWZpbmVkKSkgfCBTdHlsZVRlbXBsYXRlIHwgc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDU1MgZGVjbGFyYXRpb25zIGJsb2NrXG4gKi9cbmV4cG9ydCB0eXBlIFN0eWxlRGVjbGFyYXRpb25zQmxvY2sgPSAoKFQ6IGFueSwgdGhlbWU6IGFueSkgPT4gU3R5bGVDb250YWluZXIgfCBzdHJpbmcpIHwgU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBMeVN0eWxlcyA9ICgoVDogYW55LCB0aGVtZTogYW55KSA9PiBMeVN0eWxlR3JvdXApIHwgdW5kZWZpbmVkIHwgbnVsbDtcbmV4cG9ydCB0eXBlIFN0eWxlcyA9ICgoKFQ6IGFueSwgdGhlbWU6IGFueSkgPT4gU3R5bGVHcm91cCkgfCBTdHlsZUdyb3VwIHwgdW5kZWZpbmVkIHwgbnVsbCkgfCBMeVN0eWxlcztcblxuZXhwb3J0IGludGVyZmFjZSBLZXlmcmFtZXNEZXByZWNhdGVkIHtcbiAgW25hbWU6IHN0cmluZ106IHtcbiAgICBbcGVyY2VudDogbnVtYmVyXTogU3R5bGVDb250YWluZXJcbiAgfTtcbn1cblxudHlwZSBMeUNsYXNzZXNQcm9wZXJ0aWVzPFQ+ID0ge1xuICBbXG4gICAgUCBpbiBrZXlvZiAoXG4gICAgICBUIGV4dGVuZHMgKCh0aGVtZTogYW55LCByZWY/OiBhbnkpID0+IGluZmVyIFIpID8gUiA6IFRcbiAgICApXG4gIF06IHN0cmluZztcbn07XG5cbi8vIENvbnZlcnQgYWxsIHByb3BlcnRpZXMgdG8gYHN0cmluZ2AgdHlwZSwgYW5kIGV4Y2x1ZGUgcHJvcGVydGllcyB0aGF0IG5vdCBpcyBjbGFzcyBuYW1lXG5leHBvcnQgdHlwZSBMeUNsYXNzZXM8VD4gPSBPbWl0PEx5Q2xhc3Nlc1Byb3BlcnRpZXM8VD4sICckbmFtZScgfCAnJGtleWZyYW1lcycgfCAnQGdsb2JhbCcgfCAnJHByaW9yaXR5JyB8ICckZ2xvYmFsJz47XG5cbnR5cGUgT21pdDxULCBLPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG5cbnR5cGUgTHlDb21wb25lbnRTdHlsZUl0ZW08Q09NUE9ORU5ULCBJTlBVVFMgZXh0ZW5kcyBrZXlvZiBDT01QT05FTlQ+ID0ge1xuICBbUCBpbiBJTlBVVFNdOiAodGhlbWU6IFRoZW1lVmFyaWFibGVzLCB2YWx1ZTogQ09NUE9ORU5UW1BdKSA9PiBTdHlsZUNvbnRhaW5lclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBMeUNvbXBvbmVudFN0eWxlPENPTVBPTkVOVCwgSU5QVVRTIGV4dGVuZHMga2V5b2YgQ09NUE9ORU5UPiB7XG4gIFtrZXk6IHN0cmluZ106IEx5Q29tcG9uZW50U3R5bGVJdGVtPENPTVBPTkVOVCwgSU5QVVRTPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lTmFtZUZvclNlbGVjdG9ycyh0aGVtZUlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGAke3RoZW1lSWR9PH4oc2VsZWN0b3JzKWA7XG59XG4iXX0=