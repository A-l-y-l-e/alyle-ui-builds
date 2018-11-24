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
            styl.fontSize = theme.pxToRem((/** @type {?} */ (styl.fontSize)) || typography.fontSize);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgU3R5bGVDb250YWluZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkucm9vdFxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmVudW0gR3V0dGVyIHtcbiAgZGVmYXVsdCxcbiAgdG9wLFxuICBib3R0b20sXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnN0eWxlLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2x5VHlwOiBzdHJpbmc7XG4gIHByaXZhdGUgX2x5VHlwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJUb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuX2d1dHRlciA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmRlZmF1bHQsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyVG9wKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyVG9wKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3AgPSBuZXdWYWw7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3BDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5ib3R0b20sIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKG5ld0tleSxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3Qgc3R5bDogU3R5bGVDb250YWluZXIgPSBPYmplY3QuYXNzaWduKHsgfSwgdHlwb2dyYXBoeS5seVR5cFtrZXkgfHwgJ2JvZHkxJ10pO1xuICAgICAgICBzdHlsLmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShzdHlsLmZvbnRTaXplIGFzIG51bWJlciB8fCB0eXBvZ3JhcGh5LmZvbnRTaXplKTtcbiAgICAgICAgaWYgKHN0eWwubGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWwubGluZUhlaWdodCA9IHRoZW1lLnB4VG9SZW0oc3R5bC5saW5lSGVpZ2h0IGFzIG51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsLmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc3R5bC5sZXR0ZXJTcGFjaW5nID0gYCR7c3R5bC5sZXR0ZXJTcGFjaW5nfXB4YDtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBmb250RmFtaWx5XG4gICAgICAgIHN0eWwuZm9udEZhbWlseSA9IHN0eWwuZm9udEZhbWlseSB8fCB0eXBvZ3JhcGh5LmZvbnRGYW1pbHk7XG4gICAgICAgIHJldHVybiBzdHlsO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVHdXR0ZXJDbGFzcyhuYW1lOiBHdXR0ZXIsIHZhbDogYm9vbGVhbiwgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKFxuICAgICAgYGstdHlwLWd1dHRlcjoke25hbWV9OiR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGd1dHRlciA9IG5hbWUgPT09IEd1dHRlci5kZWZhdWx0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW4tdG9wOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci50b3ApID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJUb3AgOiAwIH1lbTtgICtcbiAgICAgICAgICBgbWFyZ2luLWJvdHRvbTokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIuYm90dG9tKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyQm90dG9tIDogMCB9ZW07YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUeXBvZ3JhcGh5IH0gZnJvbSAnLi90eXBvZ3JhcGh5LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5VHlwb2dyYXBoeV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VHlwb2dyYXBoeV1cbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFHTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixNQUFNLEdB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