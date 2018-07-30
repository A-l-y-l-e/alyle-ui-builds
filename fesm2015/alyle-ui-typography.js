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
            const { fontSize, fontWeight, letterSpacing, textTransform, lineHeight } = typography[key || 'body1'];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB7XG4gIHJvb3Q6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgc3R5bGVDb3JlOiBDb3JlVGhlbWVcbiAgKSB7XG4gICAgdGhpcy5yb290ID0gc3R5bGVDb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay10eXAnLFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOiAxZW0gMCAwLjY1ZW0gMDtgICtcbiAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbi8vIGltcG9ydCB7IElNaW5pbWFUaGVtZSB9IGZyb20gJy4uL3RoZW1lcyc7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHlDbGFzc2VzIH0gZnJvbSAnLi90eXBvZ3JhcGh5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkge1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwpO1xuICAgICAgdGhpcy5zdHlsZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNsYXNzZXM6IEx5VHlwb2dyYXBoeUNsYXNzZXNcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueS8qKiBJTWluaW1hVGhlbWUgKi8+KG5ld0tleSxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3QgeyBmb250U2l6ZSwgZm9udFdlaWdodCwgbGV0dGVyU3BhY2luZywgdGV4dFRyYW5zZm9ybSwgbGluZUhlaWdodCB9ID0gdHlwb2dyYXBoeVtrZXkgfHwgJ2JvZHkxJ107XG4gICAgICAgIGxldCBzdHlsZSA9IChcbiAgICAgICAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbShmb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBmb250LXdlaWdodDoke2ZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0obGV0dGVyU3BhY2luZyl9O2BcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcbiAgICAgICAgICBzdHlsZSArPSBgbGluZS1oZWlnaHQ6JHt0aGVtZS5weFRvUmVtKGxpbmVIZWlnaHQpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGUgKz0gYHRleHQtdHJhbnNmb3JtOiR7dGV4dFRyYW5zZm9ybX07YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeSB9IGZyb20gJy4vdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVR5cG9ncmFwaHldLFxuICBkZWNsYXJhdGlvbnM6IFtMeVR5cG9ncmFwaHldXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBUUUsWUFDRSxTQUFvQjtRQUVwQixJQUFJLENBQUMsSUFBSSxH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