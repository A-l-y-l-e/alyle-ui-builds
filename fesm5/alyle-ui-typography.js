import { __assign } from 'tslib';
import { Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        /**
         * \@docs-private
         */
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
            if (styl.lineHeight) {
                styl.lineHeight = theme.pxToRem((/** @type {?} */ (styl.lineHeight)));
            }
            if (typeof styl.letterSpacing === 'number') {
                styl.letterSpacing = styl.letterSpacing + "px";
            }
            // set default fontFamily
            styl.fontFamily = styl.fontFamily || typography.fontFamily;
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyTypographyModule, LyTypography };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgU3R5bGVDb250YWluZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkucm9vdFxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmVudW0gR3V0dGVyIHtcbiAgZGVmYXVsdCxcbiAgdG9wLFxuICBib3R0b20sXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnN0eWxlLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2x5VHlwOiBzdHJpbmc7XG4gIHByaXZhdGUgX2x5VHlwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJUb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuX2d1dHRlciA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmRlZmF1bHQsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyVG9wKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyVG9wKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3AgPSBuZXdWYWw7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3BDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5ib3R0b20sIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKG5ld0tleSxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3Qgc3R5bDogU3R5bGVDb250YWluZXIgPSBPYmplY3QuYXNzaWduKHsgfSwgdHlwb2dyYXBoeS5seVR5cFtrZXkgfHwgJ2JvZHkxJ10pO1xuICAgICAgICBpZiAoc3R5bC5saW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bC5saW5lSGVpZ2h0ID0gdGhlbWUucHhUb1JlbShzdHlsLmxpbmVIZWlnaHQgYXMgbnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHN0eWwubGV0dGVyU3BhY2luZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzdHlsLmxldHRlclNwYWNpbmcgPSBgJHtzdHlsLmxldHRlclNwYWNpbmd9cHhgO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGZvbnRGYW1pbHlcbiAgICAgICAgc3R5bC5mb250RmFtaWx5ID0gc3R5bC5mb250RmFtaWx5IHx8IHR5cG9ncmFwaHkuZm9udEZhbWlseTtcbiAgICAgICAgcmV0dXJuIHN0eWw7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKG5hbWU6IEd1dHRlciwgdmFsOiBib29sZWFuLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuYWRkU3R5bGUoXG4gICAgICBgay10eXAtZ3V0dGVyOiR7bmFtZX06JHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gbmFtZSA9PT0gR3V0dGVyLmRlZmF1bHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbi10b3A6JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLnRvcCkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlclRvcCA6IDAgfWVtO2AgK1xuICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci5ib3R0b20pID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJCb3R0b20gOiAwIH1lbTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHkgfSBmcm9tICcuL3R5cG9ncmFwaHkuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlUeXBvZ3JhcGh5XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUeXBvZ3JhcGh5XVxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssUUFBQztJQUN6QyxJQUFJLGFBQ0YsTUFBTSxFQUFFLENBQUMsRUFDVCxPQUFPLEVBQUUsT0FBTyxJQUNiLEtBQUssQ0FB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