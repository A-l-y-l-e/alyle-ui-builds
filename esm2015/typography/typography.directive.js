/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = (theme) => ({
    root: Object.assign({ margin: 0, display: 'block' }, theme.typography.root)
});
const ɵ0 = styles;
/** @enum {number} */
var Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = 'default';
Gutter[Gutter.top] = 'top';
Gutter[Gutter.bottom] = 'bottom';
export class LyTypography {
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
if (false) {
    /** @type {?} */
    LyTypography.prototype.classes;
    /** @type {?} */
    LyTypography.prototype._lyTyp;
    /** @type {?} */
    LyTypography.prototype._lyTypClass;
    /** @type {?} */
    LyTypography.prototype._gutter;
    /** @type {?} */
    LyTypography.prototype._gutterClass;
    /** @type {?} */
    LyTypography.prototype._gutterTop;
    /** @type {?} */
    LyTypography.prototype._gutterTopClass;
    /** @type {?} */
    LyTypography.prototype._gutterBottom;
    /** @type {?} */
    LyTypography.prototype._gutterBottomClass;
    /** @type {?} */
    LyTypography.prototype.style;
    /** @type {?} */
    LyTypography.prototype.elementRef;
    /** @type {?} */
    LyTypography.prototype.renderer;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQyxNQUFNLFdBQVcsQ0FBQzs7QUFFaEYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLGtCQUNGLE1BQU0sRUFBRSxDQUFDLEVBQ1QsT0FBTyxFQUFFLE9BQU8sSUFDYixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDLENBQUM7Ozs7SUFJRCxVQUFPO0lBQ1AsTUFBRztJQUNILFNBQU07O2NBRk4sT0FBTztjQUNQLEdBQUc7Y0FDSCxNQUFNO0FBTVIsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQTZEdkIsWUFDVSxPQUNBLFlBQ0E7UUFGQSxVQUFLLEdBQUwsS0FBSztRQUNMLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUEvRGxCLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBaUV6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFFOzs7OztJQXJERCxJQUNJLEtBQUssQ0FBQyxHQUFXO1FBQ25CLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFD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USxFQUNSLGNBQWMsQ0FDZixDQUFDOzs7Ozs7OztJQUdJLGtCQUFrQixDQUFDLElBQVksRUFBRSxHQUFZLEVBQUUsUUFBZ0I7UUFDckUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDeEIsZ0JBQWdCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFDN0IsQ0FBQyxLQUFxQixFQUFFLEVBQUU7O1lBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLE9BQU8sQ0FDTCxjQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLO2dCQUM1RixpQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFFLEtBQUssQ0FDdEcsQ0FBQztTQUNILEVBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFFBQVEsRUFDUixjQUFjLENBQ2YsQ0FBQzs7OztZQWhITCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7YUFDcEI7Ozs7WUFwQlEsUUFBUTtZQURHLFVBQVU7WUFBRSxTQUFTOzs7b0JBb0N0QyxLQUFLO3FCQVVMLEtBQUs7d0JBWUwsS0FBSzsyQkFhTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCB0b0Jvb2xlYW4sIFRoZW1lVmFyaWFibGVzLCBTdHlsZUNvbnRhaW5lciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5yb290XG4gIH1cbn0pO1xuXG4vKiogQGlnbm9yZSAqL1xuZW51bSBHdXR0ZXIge1xuICBkZWZhdWx0LFxuICB0b3AsXG4gIGJvdHRvbSxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2x5VHlwXWBcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xhc3NlcyA9IHRoaXMuc3R5bGUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJUb3A6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlclRvcENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJCb3R0b21DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVR5cCh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlUeXApIHtcbiAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwsIHRoaXMuX2x5VHlwQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgbHlUeXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VHlwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlcih2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlcikge1xuICAgICAgdGhpcy5fZ3V0dGVyID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuZGVmYXVsdCwgbmV3VmFsLCB0aGlzLl9ndXR0ZXJDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJUb3AodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJUb3ApIHtcbiAgICAgIHRoaXMuX2d1dHRlclRvcCA9IG5ld1ZhbDtcbiAgICAgIC8vIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLnRvcCwgbmV3VmFsKTtcbiAgICAgIHRoaXMuX2d1dHRlclRvcENsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLnRvcCwgbmV3VmFsLCB0aGlzLl9ndXR0ZXJUb3BDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXJUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlclRvcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJCb3R0b20odmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJCb3R0b20pIHtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbSA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmJvdHRvbSwgbmV3VmFsLCB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXJCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlckJvdHRvbTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCh0aGlzLmd1dHRlclRvcCAmJiB0aGlzLmd1dHRlckJvdHRvbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlICc8ZWxlbWVudCBseVR5cCBndXR0ZXI+JyBpbnN0ZWFkIG9mICc8ZWxlbWVudCBseVR5cCBndXR0ZXJUb3AgZ3V0dGVyQm90dG9tPidgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVUeXBDbGFzcyhrZXk6IHN0cmluZywgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke2tleX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuYWRkU3R5bGUobmV3S2V5LFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cG9ncmFwaHkgfSA9IHRoZW1lO1xuICAgICAgICBjb25zdCBzdHlsOiBTdHlsZUNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oeyB9LCB0eXBvZ3JhcGh5Lmx5VHlwW2tleSB8fCAnYm9keTEnXSk7XG4gICAgICAgIHN0eWwuZm9udFNpemUgPSB0aGVtZS5weFRvUmVtKHN0eWwuZm9udFNpemUgYXMgbnVtYmVyIHx8IHR5cG9ncmFwaHkuZm9udFNpemUpO1xuICAgICAgICBpZiAoc3R5bC5saW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bC5saW5lSGVpZ2h0ID0gdGhlbWUucHhUb1JlbShzdHlsLmxpbmVIZWlnaHQgYXMgbnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBmb250RmFtaWx5XG4gICAgICAgIHN0eWwuZm9udEZhbWlseSA9IHN0eWwuZm9udEZhbWlseSB8fCB0eXBvZ3JhcGh5LmZvbnRGYW1pbHk7XG4gICAgICAgIHJldHVybiBzdHlsO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVHdXR0ZXJDbGFzcyhuYW1lOiBHdXR0ZXIsIHZhbDogYm9vbGVhbiwgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlKFxuICAgICAgYGstdHlwLWd1dHRlcjoke25hbWV9OiR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGd1dHRlciA9IG5hbWUgPT09IEd1dHRlci5kZWZhdWx0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW4tdG9wOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci50b3ApID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJUb3AgOiAwIH1lbTtgICtcbiAgICAgICAgICBgbWFyZ2luLWJvdHRvbTokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIuYm90dG9tKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyQm90dG9tIDogMCB9ZW07YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cbn1cbiJdfQ==