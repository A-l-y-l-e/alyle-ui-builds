/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function TypographyConfig() { }
function TypographyConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    TypographyConfig.prototype.fontSize;
    /** @type {?|undefined} */
    TypographyConfig.prototype.fontFamily;
    /** @type {?|undefined} */
    TypographyConfig.prototype.fontWeight;
    /** @type {?|undefined} */
    TypographyConfig.prototype.letterSpacing;
    /** @type {?|undefined} */
    TypographyConfig.prototype.textTransform;
    /** @type {?|undefined} */
    TypographyConfig.prototype.gutterTop;
    /** @type {?|undefined} */
    TypographyConfig.prototype.gutterBottom;
}
var LyStyleUtils = /** @class */ (function () {
    function LyStyleUtils() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LyStyleUtils.prototype.pxToRem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ size = this.typography.fontSize / 14;
        return value / this.typography.htmlFontSize * size + "rem";
    };
    return LyStyleUtils;
}());
export { LyStyleUtils };
function LyStyleUtils_tsickle_Closure_declarations() {
    /** @type {?} */
    LyStyleUtils.prototype.typography;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQTs7Ozs7OztJQUtFLDhCQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0MsT0FBVSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFLLENBQUM7S0FDNUQ7dUJBbEJIO0lBbUJDLENBQUE7QUFURCx3QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVHlwb2dyYXBoeUNvbmZpZyB7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBudW1iZXI7XG4gIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gIHRleHRUcmFuc2Zvcm0/OiAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICdsb3dlcmNhc2UnO1xuICBndXR0ZXJUb3A/OiBudW1iZXI7XG4gIGd1dHRlckJvdHRvbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxufVxuIl19