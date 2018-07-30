import { Injectable, NgModule, Directive, ElementRef, Renderer2, Input, defineInjectable, inject } from '@angular/core';
import { CoreTheme, LyTheme2 } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyTypographyClasses = /** @class */ (function () {
    function LyTypographyClasses(styleCore) {
        this.root = styleCore.setUpStyleSecondary('k-typ', function () {
            return ("margin: 1em 0 0.65em 0;" +
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

export { LyTypographyModule, LyTypography, LyTypographyClasses as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB7XG4gIHJvb3Q6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgc3R5bGVDb3JlOiBDb3JlVGhlbWVcbiAgKSB7XG4gICAgdGhpcy5yb290ID0gc3R5bGVDb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay10eXAnLFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOiAxZW0gMCAwLjY1ZW0gMDtgICtcbiAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbi8vIGltcG9ydCB7IElNaW5pbWFUaGVtZSB9IGZyb20gJy4uL3RoZW1lcyc7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHlDbGFzc2VzIH0gZnJvbSAnLi90eXBvZ3JhcGh5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkge1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwpO1xuICAgICAgdGhpcy5zdHlsZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNsYXNzZXM6IEx5VHlwb2dyYXBoeUNsYXNzZXNcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueS8qKiBJTWluaW1hVGhlbWUgKi8+KG5ld0tleSxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3QgeyBmb250U2l6ZSwgZm9udFdlaWdodCwgbGV0dGVyU3BhY2luZywgdGV4dFRyYW5zZm9ybSwgbGluZUhlaWdodCB9ID0gdHlwb2dyYXBoeVtrZXkgfHwgJ2JvZHkxJ107XG4gICAgICAgIGxldCBzdHlsZSA9IChcbiAgICAgICAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbShmb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBmb250LXdlaWdodDoke2ZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0obGV0dGVyU3BhY2luZyl9O2BcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcbiAgICAgICAgICBzdHlsZSArPSBgbGluZS1oZWlnaHQ6JHt0aGVtZS5weFRvUmVtKGxpbmVIZWlnaHQpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGUgKz0gYHRleHQtdHJhbnNmb3JtOiR7dGV4dFRyYW5zZm9ybX07YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeSB9IGZyb20gJy4vdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVR5cG9ncmFwaHldLFxuICBkZWNsYXJhdGlvbnM6IFtMeVR5cG9ncmFwaHldXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBUUUsNkJBQ0UsU0FBb0I7UUFFcEIsSUFBSSxDQUFDLElBQUksR0FB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