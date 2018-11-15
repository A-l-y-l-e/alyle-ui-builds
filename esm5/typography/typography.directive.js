/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = function (theme) { return ({
    root: tslib_1.__assign({ margin: 0, display: 'block' }, theme.typography.root)
}); };
var ɵ0 = styles;
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
            styl.fontSize = theme.pxToRem((/** @type {?} */ (styl.fontSize)) || typography.fontSize);
            if (styl.lineHeight) {
                styl.lineHeight = theme.pxToRem((/** @type {?} */ (styl.lineHeight)));
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
export { LyTypography };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBa0MsTUFBTSxXQUFXLENBQUM7O0lBRTFFLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLElBQUkscUJBQ0YsTUFBTSxFQUFFLENBQUMsRUFDVCxPQUFPLEVBQUUsT0FBTyxJQUNiLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QjtDQUNGLENBQUMsRUFOd0MsQ0FNeEM7Ozs7SUFJQSxVQUFPO0lBQ1AsTUFBRztJQUNILFNBQU07Ozs7O0FBR1I7SUFnRUUsc0JBQ1UsS0FBZSxFQUNmLFVBQXNCLEVBQ3RCLFFBQW1CO1FBRm5CLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUEvRDdCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFpRXpELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQXJERCxzQkFDSSwrQkFBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBUkQsVUFDVSxHQUFXO1lBQ25CLElBQUksR0FB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NUIsK0JBQXlCOztJQUN6QixvQ0FBNkI7O0lBRTdCLGtDQUE0Qjs7SUFDNUIsdUNBQWdDOztJQUVoQyxxQ0FBK0I7O0lBQy9CLDBDQUFtQzs7SUFrRGpDLDZCQUF1Qjs7SUFDdkIsa0NBQThCOztJQUM5QixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMsIFN0eWxlQ29udGFpbmVyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LnJvb3RcbiAgfVxufSk7XG5cbi8qKiBAaWdub3JlICovXG5lbnVtIEd1dHRlciB7XG4gIGRlZmF1bHQsXG4gIHRvcCxcbiAgYm90dG9tLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy5zdHlsZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlclRvcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJCb3R0b206IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IHRoaXMuX2NyZWF0ZVR5cENsYXNzKHZhbCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5kZWZhdWx0LCBuZXdWYWwsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlclRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlclRvcCkge1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wID0gbmV3VmFsO1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwsIHRoaXMuX2d1dHRlclRvcENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlclRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyVG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlckJvdHRvbSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlckJvdHRvbSkge1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuYm90dG9tLCBuZXdWYWwsIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoKHRoaXMuZ3V0dGVyVG9wICYmIHRoaXMuZ3V0dGVyQm90dG9tKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2UgJzxlbGVtZW50IGx5VHlwIGd1dHRlcj4nIGluc3RlYWQgb2YgJzxlbGVtZW50IGx5VHlwIGd1dHRlclRvcCBndXR0ZXJCb3R0b20+J2ApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShuZXdLZXksXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwb2dyYXBoeSB9ID0gdGhlbWU7XG4gICAgICAgIGNvbnN0IHN0eWw6IFN0eWxlQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbih7IH0sIHR5cG9ncmFwaHkubHlUeXBba2V5IHx8ICdib2R5MSddKTtcbiAgICAgICAgc3R5bC5mb250U2l6ZSA9IHRoZW1lLnB4VG9SZW0oc3R5bC5mb250U2l6ZSBhcyBudW1iZXIgfHwgdHlwb2dyYXBoeS5mb250U2l6ZSk7XG4gICAgICAgIGlmIChzdHlsLmxpbmVIZWlnaHQpIHtcbiAgICAgICAgICBzdHlsLmxpbmVIZWlnaHQgPSB0aGVtZS5weFRvUmVtKHN0eWwubGluZUhlaWdodCBhcyBudW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGZvbnRGYW1pbHlcbiAgICAgICAgc3R5bC5mb250RmFtaWx5ID0gc3R5bC5mb250RmFtaWx5IHx8IHR5cG9ncmFwaHkuZm9udEZhbWlseTtcbiAgICAgICAgcmV0dXJuIHN0eWw7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKG5hbWU6IEd1dHRlciwgdmFsOiBib29sZWFuLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuYWRkU3R5bGUoXG4gICAgICBgay10eXAtZ3V0dGVyOiR7bmFtZX06JHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gbmFtZSA9PT0gR3V0dGVyLmRlZmF1bHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbi10b3A6JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLnRvcCkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlclRvcCA6IDAgfWVtO2AgK1xuICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci5ib3R0b20pID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJCb3R0b20gOiAwIH1lbTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxufVxuIl19