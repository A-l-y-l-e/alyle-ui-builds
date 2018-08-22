/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
import { LyTypographyClasses } from './typography.service';
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
                /** @type {?} */
                var newClass = this._createTypClass(val);
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
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                /** @type {?} */
                var newClass = this._createGutterClass(Gutter.default, newVal);
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
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                /** @type {?} */
                var newClass = this._createGutterClass(Gutter.top, newVal);
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
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                /** @type {?} */
                var newClass = this._createGutterClass(Gutter.bottom, newVal);
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
        /** @type {?} */
        var newKey = "k-typ:" + key;
        return this.style.setUpStyleSecondary(newKey, function (theme) {
            var typography = theme.typography;
            var _a = typography[key || 'body1'], fontSize = _a.fontSize, fontWeight = _a.fontWeight, letterSpacing = _a.letterSpacing, textTransform = _a.textTransform, lineHeight = _a.lineHeight;
            /** @type {?} */
            var style = ("font-size:" + theme.pxToRem(fontSize) + ";" +
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
            /** @type {?} */
            var gutter = name === Gutter.default;
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
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTypographyClasses }
    ]; };
    LyTypography.propDecorators = {
        lyTyp: [{ type: Input }],
        gutter: [{ type: Input }],
        gutterTop: [{ type: Input }],
        gutterBottom: [{ type: Input }]
    };
    return LyTypography;
}());
export { LyTypography };
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0lBR3pELFVBQU87SUFDUCxNQUFHO0lBQ0gsU0FBTTs7Y0FGTixPQUFPO2NBQ1AsR0FBRztjQUNILE1BQU07O0lBc0VOLHNCQUNVLE9BQ0EsWUFDQSxVQUNSLE9BQTRCO1FBSHBCLFVBQUssR0FBTCxLQUFLO1FBQ0wsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUdoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckU7SUExREQsc0JBQ0ksK0JBQUs7Ozs7UUFPVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFWRCxVQUNVLEdBQVc7WUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTs7Z0JBQ3RCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckcsSUFBSSxDQUFDLFdBQVcs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QUs7O3VCQWpFUjs7U0FjYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBpc0Rldk1vZGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG4vLyBpbXBvcnQgeyBJTWluaW1hVGhlbWUgfSBmcm9tICcuLi90aGVtZXMnO1xuaW1wb3J0IHsgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB9IGZyb20gJy4vdHlwb2dyYXBoeS5zZXJ2aWNlJztcblxuZW51bSBHdXR0ZXIge1xuICBkZWZhdWx0LFxuICB0b3AsXG4gIGJvdHRvbSxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2x5VHlwXWBcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJUb3A6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlclRvcENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJCb3R0b21DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVR5cCh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlUeXApIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuc3R5bGUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5kZWZhdWx0LCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSB0aGlzLnN0eWxlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyVG9wKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyVG9wKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3AgPSBuZXdWYWw7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3BDbGFzcyA9IHRoaXMuc3R5bGUudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9ndXR0ZXJUb3BDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXJUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlclRvcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJCb3R0b20odmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJCb3R0b20pIHtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbSA9IG5ld1ZhbDtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmJvdHRvbSwgbmV3VmFsKTtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzID0gdGhpcy5zdHlsZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjbGFzc2VzOiBMeVR5cG9ncmFwaHlDbGFzc2VzXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoKHRoaXMuZ3V0dGVyVG9wICYmIHRoaXMuZ3V0dGVyQm90dG9tKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2UgJzxlbGVtZW50IGx5VHlwIGd1dHRlcj4nIGluc3RlYWQgb2YgJzxlbGVtZW50IGx5VHlwIGd1dHRlclRvcCBndXR0ZXJCb3R0b20+J2ApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueS8qKiBJTWluaW1hVGhlbWUgKi8+KG5ld0tleSxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3QgeyBmb250U2l6ZSwgZm9udFdlaWdodCwgbGV0dGVyU3BhY2luZywgdGV4dFRyYW5zZm9ybSwgbGluZUhlaWdodCB9ID0gdHlwb2dyYXBoeVtrZXkgfHwgJ2JvZHkxJ107XG4gICAgICAgIGxldCBzdHlsZSA9IChcbiAgICAgICAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbShmb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBmb250LXdlaWdodDoke2ZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0obGV0dGVyU3BhY2luZyl9O2BcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcbiAgICAgICAgICBzdHlsZSArPSBgbGluZS1oZWlnaHQ6JHt0aGVtZS5weFRvUmVtKGxpbmVIZWlnaHQpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGUgKz0gYHRleHQtdHJhbnNmb3JtOiR7dGV4dFRyYW5zZm9ybX07YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKG5hbWU6IEd1dHRlciwgdmFsOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgYGstdHlwLWd1dHRlcjoke25hbWV9OiR7dmFsfWAsXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IGd1dHRlciA9IG5hbWUgPT09IEd1dHRlci5kZWZhdWx0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW4tdG9wOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci50b3ApID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJUb3AgOiAwIH1lbTtgICtcbiAgICAgICAgICBgbWFyZ2luLWJvdHRvbTokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIuYm90dG9tKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyQm90dG9tIDogMCB9ZW07YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==