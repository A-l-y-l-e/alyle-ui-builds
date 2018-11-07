import { Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = (theme) => ({
    root: Object.assign({ margin: 0, display: 'block' }, theme.typography.root)
});
/** @enum {number} */
var Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = 'default';
Gutter[Gutter.top] = 'top';
Gutter[Gutter.bottom] = 'bottom';
class LyTypography {
    /**
     * @param {?} style
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(style, elementRef, renderer) {
        this.style = style;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = this.style.addStyleSheet(styles, STYLE_PRIORITY);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyTyp(val) {
        if (val !== this.lyTyp) {
            this._lyTypClass = this._createTypClass(val, this._lyTypClass);
        }
    }
    /**
     * @return {?}
     */
    get lyTyp() {
        return this._lyTyp;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutter(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.gutter) {
            this._gutter = newVal;
            this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
        }
    }
    /**
     * @return {?}
     */
    get gutter() {
        return this._gutter;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutterTop(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.gutterTop) {
            this._gutterTop = newVal;
            // const newClass = this._createGutterClass(Gutter.top, newVal);
            this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
        }
    }
    /**
     * @return {?}
     */
    get gutterTop() {
        return this._gutterTop;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutterBottom(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.gutterBottom) {
            this._gutterBottom = newVal;
            this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
        }
    }
    /**
     * @return {?}
     */
    get gutterBottom() {
        return this._gutterBottom;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error(`use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'`);
        }
    }
    /**
     * @param {?} key
     * @param {?} instance
     * @return {?}
     */
    _createTypClass(key, instance) {
        /** @type {?} */
        const newKey = `k-typ:${key}`;
        return this.style.addStyle(newKey, (theme) => {
            const { typography } = theme;
            /** @type {?} */
            const styl = Object.assign({}, typography.lyTyp[key || 'body1']);
            styl["fontSize"] = theme.pxToRem(/** @type {?} */ (styl["fontSize"]) || typography.fontSize);
            if (styl["lineHeight"]) {
                styl["lineHeight"] = theme.pxToRem(/** @type {?} */ (styl["lineHeight"]));
            }
            // set default fontFamily
            styl["fontFamily"] = styl["fontFamily"] || typography.fontFamily;
            return styl;
        }, this.elementRef.nativeElement, instance, STYLE_PRIORITY);
    }
    /**
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    _createGutterClass(name, val, instance) {
        return this.style.addStyle(`k-typ-gutter:${name}:${val}`, (theme) => {
            /** @type {?} */
            const gutter = name === Gutter.default;
            return (`margin-top:${val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0}em;` +
                `margin-bottom:${val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0}em;`);
        }, this.elementRef.nativeElement, instance, STYLE_PRIORITY);
    }
}
LyTypography.decorators = [
    { type: Directive, args: [{
                selector: `[lyTyp]`
            },] }
];
/** @nocollapse */
LyTypography.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
LyTypography.propDecorators = {
    lyTyp: [{ type: Input }],
    gutter: [{ type: Input }],
    gutterTop: [{ type: Input }],
    gutterBottom: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyTypographyModule {
}
LyTypographyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [LyTypography],
                declarations: [LyTypography]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LyTypographyModule, LyTypography };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgU3R5bGVDb250YWluZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkucm9vdFxuICB9XG59KTtcblxuLyoqIEBpZ25vcmUgKi9cbmVudW0gR3V0dGVyIHtcbiAgZGVmYXVsdCxcbiAgdG9wLFxuICBib3R0b20sXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnN0eWxlLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2x5VHlwOiBzdHJpbmc7XG4gIHByaXZhdGUgX2x5VHlwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJUb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuX2d1dHRlciA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmRlZmF1bHQsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyVG9wKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyVG9wKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3AgPSBuZXdWYWw7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3BDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5ib3R0b20sIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKG5ld0tleSxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3Qgc3R5bDogU3R5bGVDb250YWluZXIgPSBPYmplY3QuYXNzaWduKHsgfSwgdHlwb2dyYXBoeS5seVR5cFtrZXkgfHwgJ2JvZHkxJ10pO1xuICAgICAgICBzdHlsLmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShzdHlsLmZvbnRTaXplIGFzIG51bWJlciB8fCB0eXBvZ3JhcGh5LmZvbnRTaXplKTtcbiAgICAgICAgaWYgKHN0eWwubGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWwubGluZUhlaWdodCA9IHRoZW1lLnB4VG9SZW0oc3R5bC5saW5lSGVpZ2h0IGFzIG51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgZm9udEZhbWlseVxuICAgICAgICBzdHlsLmZvbnRGYW1pbHkgPSBzdHlsLmZvbnRGYW1pbHkgfHwgdHlwb2dyYXBoeS5mb250RmFtaWx5O1xuICAgICAgICByZXR1cm4gc3R5bDtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3MobmFtZTogR3V0dGVyLCB2YWw6IGJvb2xlYW4sIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShcbiAgICAgIGBrLXR5cC1ndXR0ZXI6JHtuYW1lfToke3ZhbH1gLFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBndXR0ZXIgPSBuYW1lID09PSBHdXR0ZXIuZGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgbWFyZ2luLXRvcDokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIudG9wKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyVG9wIDogMCB9ZW07YCArXG4gICAgICAgICAgYG1hcmdpbi1ib3R0b206JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLmJvdHRvbSkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlckJvdHRvbSA6IDAgfWVtO2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeSB9IGZyb20gJy4vdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVR5cG9ncmFwaHldLFxuICBkZWNsYXJhdGlvbnM6IFtMeVR5cG9ncmFwaHldXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR0EsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN6QyxJQUFJLGtCQUNGLE1BQU0sRUFBRSxDQUFDLEVBQ1QsT0FBTyxFQUFFLE9BQU8sSUFDYixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDLENBQUM7OztJQUlELFVBQU87SUFDUCxNQUFHO0lB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