(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/typography', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.typography = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = ({
        root: {
            margin: 0,
            display: 'block'
        }
    });
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
             */ function () {
                return this._lyTyp;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
                return this._gutter;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
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
             */ function () {
                return this._gutterTop;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
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
             */ function () {
                return this._gutterBottom;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
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
                    var _a = typography[key || 'body1'], fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, letterSpacing = _a.letterSpacing, textTransform = _a.textTransform, lineHeight = _a.lineHeight;
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
                    if (fontFamily) {
                        style += "font-family:" + fontFamily + ";";
                    }
                    else {
                        style += "font-family:" + typography.fontFamily + ";";
                    }
                    return style;
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
            { type: core.Directive, args: [{
                        selector: "[lyTyp]"
                    },] }
        ];
        /** @nocollapse */
        LyTypography.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        LyTypography.propDecorators = {
            lyTyp: [{ type: core.Input }],
            gutter: [{ type: core.Input }],
            gutterTop: [{ type: core.Input }],
            gutterBottom: [{ type: core.Input }]
        };
        return LyTypography;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyTypographyModule = /** @class */ (function () {
        function LyTypographyModule() {
        }
        LyTypographyModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyTypography],
                        declarations: [LyTypography]
                    },] }
        ];
        return LyTypographyModule;
    }());

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

    exports.LyTypographyModule = LyTypographyModule;
    exports.LyTypography = LyTypography;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfVxufSk7XG5cbi8qKiBAaWdub3JlICovXG5lbnVtIEd1dHRlciB7XG4gIGRlZmF1bHQsXG4gIHRvcCxcbiAgYm90dG9tLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy5zdHlsZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlclRvcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJCb3R0b206IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IHRoaXMuX2NyZWF0ZVR5cENsYXNzKHZhbCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5kZWZhdWx0LCBuZXdWYWwsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlclRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlclRvcCkge1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wID0gbmV3VmFsO1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwsIHRoaXMuX2d1dHRlclRvcENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlclRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyVG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlckJvdHRvbSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlckJvdHRvbSkge1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuYm90dG9tLCBuZXdWYWwsIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoKHRoaXMuZ3V0dGVyVG9wICYmIHRoaXMuZ3V0dGVyQm90dG9tKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2UgJzxlbGVtZW50IGx5VHlwIGd1dHRlcj4nIGluc3RlYWQgb2YgJzxlbGVtZW50IGx5VHlwIGd1dHRlclRvcCBndXR0ZXJCb3R0b20+J2ApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShuZXdLZXksXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwb2dyYXBoeSB9ID0gdGhlbWU7XG4gICAgICAgIGNvbnN0IHsgZm9udEZhbWlseSwgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIHRleHRUcmFuc2Zvcm0sIGxpbmVIZWlnaHQgfSA9IHR5cG9ncmFwaHlba2V5IHx8ICdib2R5MSddO1xuICAgICAgICBsZXQgc3R5bGUgPSAoXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oZm9udFNpemUpfTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtmb250V2VpZ2h0fTtgICtcbiAgICAgICAgICBgbGV0dGVyLXNwYWNpbmc6JHt0aGVtZS5weFRvUmVtKGxldHRlclNwYWNpbmcpfTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bGUgKz0gYGxpbmUtaGVpZ2h0OiR7dGhlbWUucHhUb1JlbShsaW5lSGVpZ2h0KX07YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlICs9IGB0ZXh0LXRyYW5zZm9ybToke3RleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvbnRGYW1pbHkpIHtcbiAgICAgICAgICBzdHlsZSArPSBgZm9udC1mYW1pbHk6JHtmb250RmFtaWx5fTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlICs9IGBmb250LWZhbWlseToke3R5cG9ncmFwaHkuZm9udEZhbWlseX07YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKG5hbWU6IEd1dHRlciwgdmFsOiBib29sZWFuLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuYWRkU3R5bGUoXG4gICAgICBgay10eXAtZ3V0dGVyOiR7bmFtZX06JHt2YWx9YCxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gbmFtZSA9PT0gR3V0dGVyLmRlZmF1bHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbi10b3A6JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLnRvcCkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlclRvcCA6IDAgfWVtO2AgK1xuICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci5ib3R0b20pID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJCb3R0b20gOiAwIH1lbTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHkgfSBmcm9tICcuL3R5cG9ncmFwaHkuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlUeXBvZ3JhcGh5XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUeXBvZ3JhcGh5XVxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidG9Cb29sZWFuIiwiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5w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