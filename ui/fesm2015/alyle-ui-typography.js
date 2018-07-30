import { Injectable, NgModule, Directive, ElementRef, Renderer2, Input, defineInjectable, inject } from '@angular/core';
import { CoreTheme, LyTheme2 } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyTypographyClasses {
    /**
     * @param {?} styleCore
     */
    constructor(styleCore) {
        this.root = styleCore.setUpStyleSecondary('k-typ', () => (`margin: 1em 0 0.65em 0;` +
            `display: block;`));
    }
}
LyTypographyClasses.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyTypographyClasses.ctorParameters = () => [
    { type: CoreTheme, },
];
/** @nocollapse */ LyTypographyClasses.ngInjectableDef = defineInjectable({ factory: function LyTypographyClasses_Factory() { return new LyTypographyClasses(inject(CoreTheme)); }, token: LyTypographyClasses, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyTypography {
    /**
     * @param {?} style
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} classes
     */
    constructor(style, elementRef, renderer, classes) {
        this.style = style;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyTyp(val) {
        if (val !== this.lyTyp) {
            const /** @type {?} */ newClass = this._createTypClass(val);
            this.style.updateClassName(this.elementRef.nativeElement, this.renderer, newClass, this._lyTypClass);
            this._lyTypClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get lyTyp() {
        return this._lyTyp;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    _createTypClass(key) {
        const /** @type {?} */ newKey = `k-typ:${key}`;
        return this.style.setUpStyleSecondary(newKey, theme => {
            const { typography } = theme;
            const { fontSize, fontWeight, letterSpacing, textTransform, lineHeight } = typography.typographyVariants[key || 'body1'];
            let /** @type {?} */ style = (`font-size:${theme.pxToRem(fontSize)};` +
                `font-weight:${fontWeight};` +
                `letter-spacing:${theme.pxToRem(letterSpacing)};`);
            if (lineHeight) {
                style += `line-height:${theme.pxToRem(lineHeight)};`;
            }
            if (textTransform) {
                style += `text-transform:${textTransform};`;
            }
            return style;
        });
    }
}
LyTypography.decorators = [
    { type: Directive, args: [{
                selector: `[lyTyp]`
            },] },
];
/** @nocollapse */
LyTypography.ctorParameters = () => [
    { type: LyTheme2, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyTypographyClasses, },
];
LyTypography.propDecorators = {
    "lyTyp": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyTypographyModule, LyTypography, LyTypographyClasses as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB7XG4gIHJvb3Q6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgc3R5bGVDb3JlOiBDb3JlVGhlbWVcbiAgKSB7XG4gICAgdGhpcy5yb290ID0gc3R5bGVDb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay10eXAnLFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOiAxZW0gMCAwLjY1ZW0gMDtgICtcbiAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbi8vIGltcG9ydCB7IElNaW5pbWFUaGVtZSB9IGZyb20gJy4uL3RoZW1lcyc7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHlDbGFzc2VzIH0gZnJvbSAnLi90eXBvZ3JhcGh5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkge1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwpO1xuICAgICAgdGhpcy5zdHlsZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNsYXNzZXM6IEx5VHlwb2dyYXBoeUNsYXNzZXNcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueS8qKiBJTWluaW1hVGhlbWUgKi8+KG5ld0tleSxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3QgeyBmb250U2l6ZSwgZm9udFdlaWdodCwgbGV0dGVyU3BhY2luZywgdGV4dFRyYW5zZm9ybSwgbGluZUhlaWdodCB9ID0gdHlwb2dyYXBoeS50eXBvZ3JhcGh5VmFyaWFudHNba2V5IHx8ICdib2R5MSddO1xuICAgICAgICBsZXQgc3R5bGUgPSAoXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oZm9udFNpemUpfTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtmb250V2VpZ2h0fTtgICtcbiAgICAgICAgICBgbGV0dGVyLXNwYWNpbmc6JHt0aGVtZS5weFRvUmVtKGxldHRlclNwYWNpbmcpfTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bGUgKz0gYGxpbmUtaGVpZ2h0OiR7dGhlbWUucHhUb1JlbShsaW5lSGVpZ2h0KX07YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlICs9IGB0ZXh0LXRyYW5zZm9ybToke3RleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHkgfSBmcm9tICcuL3R5cG9ncmFwaHkuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlUeXBvZ3JhcGh5XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUeXBvZ3JhcGh5XVxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQVFFLFlBQ0UsU0FBb0I7UUFF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