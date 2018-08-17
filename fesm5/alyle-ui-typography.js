import { Injectable, NgModule, Directive, ElementRef, Renderer2, Input, defineInjectable, inject } from '@angular/core';
import { CoreTheme, toBoolean, LyTheme2 } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyTypographyClasses = /** @class */ (function () {
    function LyTypographyClasses(styleCore) {
        this.root = styleCore.setUpStyleSecondary('k-typ', function () {
            return (
            // `margin: 1em 0 0.65em 0;` +
            // `margin: 1em 0 0.65em 0;` +
            "margin: 0;" +
                "display: block;");
        });
    }
    LyTypographyClasses.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyTypographyClasses.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyTypographyClasses.ngInjectableDef = defineInjectable({ factory: function LyTypographyClasses_Factory() { return new LyTypographyClasses(inject(CoreTheme)); }, token: LyTypographyClasses, providedIn: "root" });
    return LyTypographyClasses;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = "default";
Gutter[Gutter.top] = "top";
Gutter[Gutter.bottom] = "bottom";
var LyTypography = /** @class */ (function () {
    function LyTypography(style, elementRef, renderer, classes) {
        this.style = style;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, classes.root);
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
                var /** @type {?} */ newClass = this._createTypClass(val);
                this.style.updateClassName(this.elementRef.nativeElement, this.renderer, newClass, this._lyTypClass);
                this._lyTypClass = newClass;
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
            var /** @type {?} */ newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                var /** @type {?} */ newClass = this._createGutterClass(Gutter.default, newVal);
                this._gutterClass = this.style.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._gutterClass);
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
            var /** @type {?} */ newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                var /** @type {?} */ newClass = this._createGutterClass(Gutter.top, newVal);
                this._gutterTopClass = this.style.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._gutterTopClass);
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
            var /** @type {?} */ newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                var /** @type {?} */ newClass = this._createGutterClass(Gutter.bottom, newVal);
                this._gutterBottomClass = this.style.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._gutterBottomClass);
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
     * @return {?}
     */
    LyTypography.prototype._createTypClass = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ newKey = "k-typ:" + key;
        return this.style.setUpStyleSecondary(newKey, function (theme) {
            var typography = theme.typography;
            var _a = typography[key || 'body1'], fontSize = _a.fontSize, fontWeight = _a.fontWeight, letterSpacing = _a.letterSpacing, textTransform = _a.textTransform, lineHeight = _a.lineHeight;
            var /** @type {?} */ style = ("font-size:" + theme.pxToRem(fontSize) + ";" +
                ("font-weight:" + fontWeight + ";") +
                ("letter-spacing:" + theme.pxToRem(letterSpacing) + ";"));
            if (lineHeight) {
                style += "line-height:" + theme.pxToRem(lineHeight) + ";";
            }
            if (textTransform) {
                style += "text-transform:" + textTransform + ";";
            }
            return style;
        });
    };
    /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    LyTypography.prototype._createGutterClass = /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    function (name, val) {
        return this.style.setUpStyleSecondary("k-typ-gutter:" + name + ":" + val, function (theme) {
            var /** @type {?} */ gutter = name === Gutter.default;
            return ("margin-top:" + (val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0) + "em;" +
                ("margin-bottom:" + (val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0) + "em;"));
        });
    };
    LyTypography.decorators = [
        { type: Directive, args: [{
                    selector: "[lyTyp]"
                },] },
    ];
    /** @nocollapse */
    LyTypography.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyTypographyClasses, },
    ]; };
    LyTypography.propDecorators = {
        "lyTyp": [{ type: Input },],
        "gutter": [{ type: Input },],
        "gutterTop": [{ type: Input },],
        "gutterBottom": [{ type: Input },],
    };
    return LyTypography;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                },] },
    ];
    return LyTypographyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyTypographyModule, LyTypography, LyTypographyClasses as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB7XG4gIHJvb3Q6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgc3R5bGVDb3JlOiBDb3JlVGhlbWVcbiAgKSB7XG4gICAgdGhpcy5yb290ID0gc3R5bGVDb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay10eXAnLFxuICAgICAgKCkgPT4gKFxuICAgICAgICAvLyBgbWFyZ2luOiAxZW0gMCAwLjY1ZW0gMDtgICtcbiAgICAgICAgYG1hcmdpbjogMDtgICtcbiAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIGlzRGV2TW9kZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbi8vIGltcG9ydCB7IElNaW5pbWFUaGVtZSB9IGZyb20gJy4uL3RoZW1lcyc7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHlDbGFzc2VzIH0gZnJvbSAnLi90eXBvZ3JhcGh5LnNlcnZpY2UnO1xuXG5lbnVtIEd1dHRlciB7XG4gIGRlZmF1bHQsXG4gIHRvcCxcbiAgYm90dG9tLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlclRvcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJCb3R0b206IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwpO1xuICAgICAgdGhpcy5zdHlsZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuX2d1dHRlciA9IG5ld1ZhbDtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmRlZmF1bHQsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IHRoaXMuc3R5bGUudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9ndXR0ZXJDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJUb3AodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJUb3ApIHtcbiAgICAgIHRoaXMuX2d1dHRlclRvcCA9IG5ld1ZhbDtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLnRvcCwgbmV3VmFsKTtcbiAgICAgIHRoaXMuX2d1dHRlclRvcENsYXNzID0gdGhpcy5zdHlsZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2d1dHRlclRvcENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlclRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyVG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlckJvdHRvbSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlckJvdHRvbSkge1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tID0gbmV3VmFsO1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuYm90dG9tLCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MgPSB0aGlzLnN0eWxlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNsYXNzZXM6IEx5VHlwb2dyYXBoeUNsYXNzZXNcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55LyoqIElNaW5pbWFUaGVtZSAqLz4obmV3S2V5LFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cG9ncmFwaHkgfSA9IHRoZW1lO1xuICAgICAgICBjb25zdCB7IGZvbnRTaXplLCBmb250V2VpZ2h0LCBsZXR0ZXJTcGFjaW5nLCB0ZXh0VHJhbnNmb3JtLCBsaW5lSGVpZ2h0IH0gPSB0eXBvZ3JhcGh5W2tleSB8fCAnYm9keTEnXTtcbiAgICAgICAgbGV0IHN0eWxlID0gKFxuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7Zm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShsZXR0ZXJTcGFjaW5nKX07YFxuICAgICAgICApO1xuICAgICAgICBpZiAobGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWxlICs9IGBsaW5lLWhlaWdodDoke3RoZW1lLnB4VG9SZW0obGluZUhlaWdodCl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzdHlsZSArPSBgdGV4dC10cmFuc2Zvcm06JHt0ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3MobmFtZTogR3V0dGVyLCB2YWw6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICBgay10eXAtZ3V0dGVyOiR7bmFtZX06JHt2YWx9YCxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gbmFtZSA9PT0gR3V0dGVyLmRlZmF1bHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbi10b3A6JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLnRvcCkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlclRvcCA6IDAgfWVtO2AgK1xuICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci5ib3R0b20pID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJCb3R0b20gOiAwIH1lbTtgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHkgfSBmcm9tICcuL3R5cG9ncmFwaHkuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlUeXBvZ3JhcGh5XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUeXBvZ3JhcGh5XVxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQVFFLDZCQUNFLFNBQW9CO1FBRXBCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixDQUN2QyxPQUFPLEVBQ1A7WUFBTTs7O1lBRUosWUFBWTtnQkFDWixpQkFBaUI7U0FDbEIsQ0FDRixDQUFDO0tBQ0g7O2dCQWhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFNBQVM7Ozs4QkFEbEI7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztJQThFRSxzQkFDVSxPQUNBLFlBQ0EsVUFDUixPQUE0QjtRQUhwQixVQUFLLEdBQUwsS0FBSztRQUNMLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFHaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JFOzBCQXpERywrQkFBSzs7OztRQU9UO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztrQkFUUyxHQUFXO1lBQ25CLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQzdCOzs7OzswQkFPQyxnQ0FBTTs7OztRQVFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztrQkFWVSxHQUFZO1lBQ3JCLHFCQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkg7Ozs7OzBCQU9DLG1DQUFTOzs7O1FBUWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O2tCQVZhLEdBQVk7WUFDeEIscUJBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDekIscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM3SDs7Ozs7MEJBT0Msc0NBQVk7Ozs7UUFRaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7Ozs7O2tCQVZnQixHQUFZO1lBQzNCLHFCQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzVCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ25JOzs7Ozs7OztJQWVILCtCQUFROzs7SUFBUjtRQUNFLEtBQUssSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztTQUNyRztLQUNGOzs7OztJQUVPLHNDQUFlOzs7O2NBQUMsR0FBVztRQUNqQyxxQkFBTSxNQUFNLEdBQUcsV0FBUyxHQUFLLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUF5QixNQUFNLEVBQ2xFLFVBQUEsS0FBSztZQUNLLElBQUEsNkJBQVUsQ0FBVztZQUM3QixxQ0FBUSxzQkFBUSxFQUFFLDBCQUFVLEVBQUUsZ0NBQWEsRUFBRSxnQ0FBYSxFQUFFLDBCQUFVLENBQWdDO1lBQ3RHLHFCQUFJLEtBQUssSUFDUCxlQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQUc7aUJBQ3ZDLGlCQUFlLFVBQVUsTUFBRyxDQUFBO2lCQUM1QixvQkFBa0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBRyxDQUFBLENBQ2xELENBQUM7WUFDRixJQUFJLFVBQVUsRUFBRTtnQkFDZCxLQUFLLElBQUksaUJBQWUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBRyxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLEtBQUssSUFBSSxvQkFBa0IsYUFBYSxNQUFHLENBQUM7YUFDN0M7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkLENBQ0YsQ0FBQzs7Ozs7OztJQUdJLHlDQUFrQjs7Ozs7Y0FBQyxJQUFZLEVBQUUsR0FBWTtRQUNuRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQ25DLGtCQUFnQixJQUFJLFNBQUksR0FBSyxFQUM3QixVQUFBLEtBQUs7WUFDSCxxQkFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkMsUUFDRSxpQkFBZSxHQUFHLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxTQUFNO2lCQUM1RixvQkFBa0IsR0FBRyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsU0FBTSxDQUFBLEVBQ3JHO1NBQ0gsQ0FDRixDQUFDOzs7Z0JBbkhMLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBWlEsUUFBUTtnQkFERyxVQUFVO2dCQUFFLFNBQVM7Z0JBR2hDLG1CQUFtQjs7OzBCQXdCekIsS0FBSzsyQkFZTCxLQUFLOzhCQWFMLEtBQUs7aUNBYUwsS0FBSzs7dUJBakVSOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM3Qjs7NkJBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9