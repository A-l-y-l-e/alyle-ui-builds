import { __assign } from 'tslib';
import { Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = function (theme) { return ({
    root: __assign({ margin: 0, display: 'block' }, theme.typography.root)
}); };
/** @enum {number} */
var Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = 'default';
Gutter[Gutter.top] = 'top';
Gutter[Gutter.bottom] = 'bottom';
var LyTypography = /** @class */ (function () {
    function LyTypography(style, elementRef, renderer) {
        this.style = style;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = this.style.addStyleSheet(styles, STYLE_PRIORITY);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyTypography.prototype, "lyTyp", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lyTyp;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.lyTyp) {
                this._lyTypClass = this._createTypClass(val, this._lyTypClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutter;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterTop;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                // const newClass = this._createGutterClass(Gutter.top, newVal);
                this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterBottom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterBottom;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTypography.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error("use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'");
        }
    };
    /**
     * @param {?} key
     * @param {?} instance
     * @return {?}
     */
    LyTypography.prototype._createTypClass = /**
     * @param {?} key
     * @param {?} instance
     * @return {?}
     */
    function (key, instance) {
        /** @type {?} */
        var newKey = "k-typ:" + key;
        return this.style.addStyle(newKey, function (theme) {
            var typography = theme.typography;
            /** @type {?} */
            var styl = Object.assign({}, typography.lyTyp[key || 'body1']);
            styl["fontSize"] = theme.pxToRem(/** @type {?} */ (styl["fontSize"]) || typography.fontSize);
            if (styl["lineHeight"]) {
                styl["lineHeight"] = theme.pxToRem(/** @type {?} */ (styl["lineHeight"]));
            }
            // set default fontFamily
            styl["fontFamily"] = styl["fontFamily"] || typography.fontFamily;
            return styl;
        }, this.elementRef.nativeElement, instance, STYLE_PRIORITY);
    };
    /**
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    LyTypography.prototype._createGutterClass = /**
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    function (name, val, instance) {
        return this.style.addStyle("k-typ-gutter:" + name + ":" + val, function (theme) {
            /** @type {?} */
            var gutter = name === Gutter.default;
            return ("margin-top:" + (val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0) + "em;" +
                ("margin-bottom:" + (val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0) + "em;"));
        }, this.elementRef.nativeElement, instance, STYLE_PRIORITY);
    };
    LyTypography.decorators = [
        { type: Directive, args: [{
                    selector: "[lyTyp]"
                },] }
    ];
    /** @nocollapse */
    LyTypography.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyTypography.propDecorators = {
        lyTyp: [{ type: Input }],
        gutter: [{ type: Input }],
        gutterTop: [{ type: Input }],
        gutterBottom: [{ type: Input }]
    };
    return LyTypography;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyTypographyModule = /** @class */ (function () {
    function LyTypographyModule() {
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
    return LyTypographyModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgU3R5bGVDb250YWluZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkucm9vdFxuICB9XG59KTtcblxuLyoqIEBpZ25vcmUgKi9cbmVudW0gR3V0dGVyIHtcbiAgZGVmYXVsdCxcbiAgdG9wLFxuICBib3R0b20sXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnN0eWxlLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2x5VHlwOiBzdHJpbmc7XG4gIHByaXZhdGUgX2x5VHlwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJUb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuX2d1dHRlciA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmRlZmF1bHQsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyVG9wKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyVG9wKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3AgPSBuZXdWYWw7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3BDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5ib3R0b20sIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKG5ld0tleSxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3Qgc3R5bDogU3R5bGVDb250YWluZXIgPSBPYmplY3QuYXNzaWduKHsgfSwgdHlwb2dyYXBoeS5seVR5cFtrZXkgfHwgJ2JvZHkxJ10pO1xuICAgICAgICBzdHlsLmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShzdHlsLmZvbnRTaXplIGFzIG51bWJlciB8fCB0eXBvZ3JhcGh5LmZvbnRTaXplKTtcbiAgICAgICAgaWYgKHN0eWwubGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWwubGluZUhlaWdodCA9IHRoZW1lLnB4VG9SZW0oc3R5bC5saW5lSGVpZ2h0IGFzIG51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgZm9udEZhbWlseVxuICAgICAgICBzdHlsLmZvbnRGYW1pbHkgPSBzdHlsLmZvbnRGYW1pbHkgfHwgdHlwb2dyYXBoeS5mb250RmFtaWx5O1xuICAgICAgICByZXR1cm4gc3R5bDtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3MobmFtZTogR3V0dGVyLCB2YWw6IGJvb2xlYW4sIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShcbiAgICAgIGBrLXR5cC1ndXR0ZXI6JHtuYW1lfToke3ZhbH1gLFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBndXR0ZXIgPSBuYW1lID09PSBHdXR0ZXIuZGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgbWFyZ2luLXRvcDokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIudG9wKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyVG9wIDogMCB9ZW07YCArXG4gICAgICAgICAgYG1hcmdpbi1ib3R0b206JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLmJvdHRvbSkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlckJvdHRvbSA6IDAgfWVtO2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeSB9IGZyb20gJy4vdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVR5cG9ncmFwaHldLFxuICBkZWNsYXJhdGlvbnM6IFtMeVR5cG9ncmFwaHldXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxRQUFDO0lBQ3pDLElBQUksYUFDRixNQUFNLEVBQUUsQ0FBQyxFQUNULE9BQU8sRUFBRSxPQUFPLElBQ2IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCO0NBQ0YsSUFBQyxDQUFDOzs7SUFJRCxVQUFPO0lBQ1AsTUFBRztJ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