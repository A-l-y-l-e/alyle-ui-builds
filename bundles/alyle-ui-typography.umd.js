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
            this.classes = this.style.addStyleSheet(styles, 'lyTyp', -1);
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
                }, this.elementRef.nativeElement, instance);
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
                }, this.elementRef.nativeElement, instance);
            };
        LyTypography.decorators = [
            { type: core.Directive, args: [{
                        selector: "[lyTyp]"
                    },] },
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
                    },] },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIGlzRGV2TW9kZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn0pO1xuXG5lbnVtIEd1dHRlciB7XG4gIGRlZmF1bHQsXG4gIHRvcCxcbiAgYm90dG9tLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYFxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy5zdHlsZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5VHlwJywgLTEpO1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlclRvcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJCb3R0b206IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGx5VHlwKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seVR5cCkge1xuICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IHRoaXMuX2NyZWF0ZVR5cENsYXNzKHZhbCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5kZWZhdWx0LCBuZXdWYWwsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlclRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlclRvcCkge1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wID0gbmV3VmFsO1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwsIHRoaXMuX2d1dHRlclRvcENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlclRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyVG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlckJvdHRvbSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlckJvdHRvbSkge1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuYm90dG9tLCBuZXdWYWwsIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoKHRoaXMuZ3V0dGVyVG9wICYmIHRoaXMuZ3V0dGVyQm90dG9tKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2UgJzxlbGVtZW50IGx5VHlwIGd1dHRlcj4nIGluc3RlYWQgb2YgJzxlbGVtZW50IGx5VHlwIGd1dHRlclRvcCBndXR0ZXJCb3R0b20+J2ApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7a2V5fWA7XG5cbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShuZXdLZXksXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwb2dyYXBoeSB9ID0gdGhlbWU7XG4gICAgICAgIGNvbnN0IHsgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIHRleHRUcmFuc2Zvcm0sIGxpbmVIZWlnaHQgfSA9IHR5cG9ncmFwaHlba2V5IHx8ICdib2R5MSddO1xuICAgICAgICBsZXQgc3R5bGUgPSAoXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oZm9udFNpemUpfTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtmb250V2VpZ2h0fTtgICtcbiAgICAgICAgICBgbGV0dGVyLXNwYWNpbmc6JHt0aGVtZS5weFRvUmVtKGxldHRlclNwYWNpbmcpfTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bGUgKz0gYGxpbmUtaGVpZ2h0OiR7dGhlbWUucHhUb1JlbShsaW5lSGVpZ2h0KX07YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlICs9IGB0ZXh0LXRyYW5zZm9ybToke3RleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3MobmFtZTogR3V0dGVyLCB2YWw6IGJvb2xlYW4sIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShcbiAgICAgIGBrLXR5cC1ndXR0ZXI6JHtuYW1lfToke3ZhbH1gLFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCBndXR0ZXIgPSBuYW1lID09PSBHdXR0ZXIuZGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgbWFyZ2luLXRvcDokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIudG9wKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyVG9wIDogMCB9ZW07YCArXG4gICAgICAgICAgYG1hcmdpbi1ib3R0b206JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLmJvdHRvbSkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlckJvdHRvbSA6IDAgfWVtO2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaW5zdGFuY2VcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeSB9IGZyb20gJy4vdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVR5cG9ncmFwaHldLFxuICBkZWNsYXJhdGlvbnM6IFtMeVR5cG9ncmFwaHldXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0b0Jvb2xlYW4iLCJEaXJlY3RpdmUiLCJMeVRoZW1lMiIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLE9BQU87U0FDakI7S0FDRixDQUFDLENBQUM7OztRQUdELFVBQU87UUFDUCxNQUFHO1FBQ0gsU0FBTTs7a0JBRk4sT0FBTztrQkFDUCxHQUFHO2tCQUNILE1BQU07O1FBbUVOLHNCQUNVLE9BQ0EsWUFDQTtZQUZBLFVBQUssR0FBTCxLQUFLO1lBQ0ws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