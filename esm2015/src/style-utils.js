/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function TypographyConfig() { }
function TypographyConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    TypographyConfig.prototype.fontFamily;
    /** @type {?} */
    TypographyConfig.prototype.fontSize;
    /** @type {?|undefined} */
    TypographyConfig.prototype.fontWeight;
    /** @type {?|undefined} */
    TypographyConfig.prototype.letterSpacing;
    /** @type {?|undefined} */
    TypographyConfig.prototype.textTransform;
}
export class LyStyleUtils {
    /**
     * @param {?} value
     * @return {?}
     */
    pxToRem(value) {
        const /** @type {?} */ size = this.typography.fontSize / 14;
        return `${value / this.typography.htmlFontSize * size}rem`;
    }
}
function LyStyleUtils_tsickle_Closure_declarations() {
    /** @type {?} */
    LyStyleUtils.prototype.typography;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNOzs7OztJQUtKLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0MsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQztLQUM1RDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBUeXBvZ3JhcGh5Q29uZmlnIHtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udFdlaWdodD86IG51bWJlcjtcbiAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgdGV4dFRyYW5zZm9ybT86ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ2xvd2VyY2FzZSc7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbn1cbiJdfQ==