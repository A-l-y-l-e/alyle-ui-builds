import { Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = ({
    root: {
        margin: 0,
        display: 'block'
    }
});
/** @enum {number} */
const Gutter = {
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
        this.classes = this.style.addStyleSheet(styles, 'lyTyp', -1);
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
        return this.style.addStyle(newKey, theme => {
            const { typography } = theme;
            const { fontFamily, fontSize, fontWeight, letterSpacing, textTransform, lineHeight } = typography[key || 'body1'];
            /** @type {?} */
            let style = (`font-size:${theme.pxToRem(fontSize)};` +
                `font-weight:${fontWeight};` +
                `letter-spacing:${theme.pxToRem(letterSpacing)};`);
            if (lineHeight) {
                style += `line-height:${theme.pxToRem(lineHeight)};`;
            }
            if (textTransform) {
                style += `text-transform:${textTransform};`;
            }
            if (fontFamily) {
                style += `font-family:${fontFamily};`;
            }
            else {
                style += `font-family:${typography.fontFamily};`;
            }
            return style;
        }, this.elementRef.nativeElement, instance);
    }
    /**
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    _createGutterClass(name, val, instance) {
        return this.style.addStyle(`k-typ-gutter:${name}:${val}`, theme => {
            /** @type {?} */
            const gutter = name === Gutter.default;
            return (`margin-top:${val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0}em;` +
                `margin-bottom:${val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0}em;`);
        }, this.elementRef.nativeElement, instance);
    }
}
LyTypography.decorators = [
    { type: Directive, args: [{
                selector: `[lyTyp]`
            },] },
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
            },] },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn0pO1xuXG5lbnVtIEd1dHRlciB7XG4gIGRlZmF1bHQsXG4gIHRvcCxcbiAgYm90dG9tLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy5zdHlsZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5VHlwJywgLTEpO1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlclRvcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJCb3R0b206IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IHRoaXMuX2NyZWF0ZVR5cENsYXNzKHZhbCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5kZWZhdWx0LCBuZXdWYWwsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlclRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlclRvcCkge1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wID0gbmV3VmFsO1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwsIHRoaXMuX2d1dHRlclRvcENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlclRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyVG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlckJvdHRvbSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlckJvdHRvbSkge1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuYm90dG9tLCBuZXdWYWwsIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoKHRoaXMuZ3V0dGVyVG9wICYmIHRoaXMuZ3V0dGVyQm90dG9tKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2UgJzxlbGVtZW50IGx5VHlwIGd1dHRlcj4nIGluc3RlYWQgb2YgJzxlbGVtZW50IGx5VHlwIGd1dHRlclRvcCBndXR0ZXJCb3R0b20+J2ApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShuZXdLZXksXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwb2dyYXBoeSB9ID0gdGhlbWU7XG4gICAgICAgIGNvbnN0IHsgZm9udEZhbWlseSwgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIHRleHRUcmFuc2Zvcm0sIGxpbmVIZWlnaHQgfSA9IHR5cG9ncmFwaHlba2V5IHx8ICdib2R5MSddO1xuICAgICAgICBsZXQgc3R5bGUgPSAoXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oZm9udFNpemUpfTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtmb250V2VpZ2h0fTtgICtcbiAgICAgICAgICBgbGV0dGVyLXNwYWNpbmc6JHt0aGVtZS5weFRvUmVtKGxldHRlclNwYWNpbmcpfTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bGUgKz0gYGxpbmUtaGVpZ2h0OiR7dGhlbWUucHhUb1JlbShsaW5lSGVpZ2h0KX07YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlICs9IGB0ZXh0LXRyYW5zZm9ybToke3RleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvbnRGYW1pbHkpIHtcbiAgICAgICAgICBzdHlsZSArPSBgZm9udC1mYW1pbHk6JHtmb250RmFtaWx5fTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlICs9IGBmb250LWZhbWlseToke3R5cG9ncmFwaHkuZm9udEZhbWlseX07YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVHdXR0ZXJDbGFzcyhuYW1lOiBHdXR0ZXIsIHZhbDogYm9vbGVhbiwgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKFxuICAgICAgYGstdHlwLWd1dHRlcjoke25hbWV9OiR7dmFsfWAsXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IGd1dHRlciA9IG5hbWUgPT09IEd1dHRlci5kZWZhdWx0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW4tdG9wOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci50b3ApID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJUb3AgOiAwIH1lbTtgICtcbiAgICAgICAgICBgbWFyZ2luLWJvdHRvbTokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIuYm90dG9tKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyQm90dG9tIDogMCB9ZW07YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpbnN0YW5jZVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUeXBvZ3JhcGh5IH0gZnJvbSAnLi90eXBvZ3JhcGh5LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5VHlwb2dyYXBoeV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VHlwb2dyYXBoeV1cbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFLE9BQU87S0FDakI7Q0FDRixDQUFDLENBQUM7OztJQUdELFVBQU87SUFDUCxNQUFHO0lBQ0gsU0FBTTs7Y0FGTixPQUFPO2NB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