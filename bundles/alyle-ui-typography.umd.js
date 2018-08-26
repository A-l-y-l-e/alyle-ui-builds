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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9XG59KTtcblxuZW51bSBHdXR0ZXIge1xuICBkZWZhdWx0LFxuICB0b3AsXG4gIGJvdHRvbSxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2x5VHlwXWBcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xhc3NlcyA9IHRoaXMuc3R5bGUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseVR5cCcsIC0xKTtcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJUb3A6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlclRvcENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJCb3R0b21DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVR5cCh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlUeXApIHtcbiAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwsIHRoaXMuX2x5VHlwQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgbHlUeXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VHlwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlcih2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlcikge1xuICAgICAgdGhpcy5fZ3V0dGVyID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuZGVmYXVsdCwgbmV3VmFsLCB0aGlzLl9ndXR0ZXJDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJUb3AodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJUb3ApIHtcbiAgICAgIHRoaXMuX2d1dHRlclRvcCA9IG5ld1ZhbDtcbiAgICAgIC8vIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLnRvcCwgbmV3VmFsKTtcbiAgICAgIHRoaXMuX2d1dHRlclRvcENsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLnRvcCwgbmV3VmFsLCB0aGlzLl9ndXR0ZXJUb3BDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXJUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlclRvcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJCb3R0b20odmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJCb3R0b20pIHtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbSA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmJvdHRvbSwgbmV3VmFsLCB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXJCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlckJvdHRvbTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCh0aGlzLmd1dHRlclRvcCAmJiB0aGlzLmd1dHRlckJvdHRvbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlICc8ZWxlbWVudCBseVR5cCBndXR0ZXI+JyBpbnN0ZWFkIG9mICc8ZWxlbWVudCBseVR5cCBndXR0ZXJUb3AgZ3V0dGVyQm90dG9tPidgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVUeXBDbGFzcyhrZXk6IHN0cmluZywgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke2tleX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuYWRkU3R5bGUobmV3S2V5LFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cG9ncmFwaHkgfSA9IHRoZW1lO1xuICAgICAgICBjb25zdCB7IGZvbnRGYW1pbHksIGZvbnRTaXplLCBmb250V2VpZ2h0LCBsZXR0ZXJTcGFjaW5nLCB0ZXh0VHJhbnNmb3JtLCBsaW5lSGVpZ2h0IH0gPSB0eXBvZ3JhcGh5W2tleSB8fCAnYm9keTEnXTtcbiAgICAgICAgbGV0IHN0eWxlID0gKFxuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7Zm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShsZXR0ZXJTcGFjaW5nKX07YFxuICAgICAgICApO1xuICAgICAgICBpZiAobGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWxlICs9IGBsaW5lLWhlaWdodDoke3RoZW1lLnB4VG9SZW0obGluZUhlaWdodCl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzdHlsZSArPSBgdGV4dC10cmFuc2Zvcm06JHt0ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb250RmFtaWx5KSB7XG4gICAgICAgICAgc3R5bGUgKz0gYGZvbnQtZmFtaWx5OiR7Zm9udEZhbWlseX07YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZSArPSBgZm9udC1mYW1pbHk6JHt0eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3MobmFtZTogR3V0dGVyLCB2YWw6IGJvb2xlYW4sIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZS5hZGRTdHlsZShcbiAgICAgIGBrLXR5cC1ndXR0ZXI6JHtuYW1lfToke3ZhbH1gLFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCBndXR0ZXIgPSBuYW1lID09PSBHdXR0ZXIuZGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgbWFyZ2luLXRvcDokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIudG9wKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyVG9wIDogMCB9ZW07YCArXG4gICAgICAgICAgYG1hcmdpbi1ib3R0b206JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLmJvdHRvbSkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlckJvdHRvbSA6IDAgfWVtO2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaW5zdGFuY2VcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeSB9IGZyb20gJy4vdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVR5cG9ncmFwaHldLFxuICBkZWNsYXJhdGlvbnM6IFtMeVR5cG9ncmFwaHldXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0b0Jvb2xlYW4iLCJEaXJlY3RpdmUiLCJMeVRoZW1lMiIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLE9BQU87U0FDakI7S0FDRixDQUFDLENBQUM7OztRQUdELFVBQU87UUFDUCxNQUFHO1FBQ0gsU0FBTTs7a0JBRk4sT0FBTztrQkFDUCxHQUFHO2tCQUNILE1BQU07O1FBbUVOLHNCQUNVLE9BQ0EsWUFDQTtZQUZBLFVBQUssR0FBTCxLQUFLO1lBQ0wsZUFBVSxHQUFWLFVBQVU7WUFDVixhQUFRLEdBQVIsUUFBUTsyQkEvRFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQWlFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxRTtRQXJERCxzQkFDSSwrQkFBSzs7O2dCQUtUO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQjs7OztnQkFSRCxVQUNVLEdBQVc7Z0JBQ25CLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNoRTthQUNGOzs7V0FBQTtRQUtELHNCQUNJLGdDQUFNOzs7Z0JBT1Y7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCOzs7O2dCQVZELFVBQ1csR0FBWTs7Z0JBQ3JCLElBQU0sTUFBTSxHQUFHQSxZQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3hGO2FBQ0Y7OztXQUFBO1FBS0Qsc0JBQ0ksbUNBQVM7OztnQkFRYjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7Ozs7Z0JBWEQsVUFDYyxHQUFZOztnQkFDeEIsSUFBTSxNQUFNLEdBQUdBLFlBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7O29CQUV6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQzFGO2FBQ0Y7OztXQUFBO1FBS0Qsc0JBQ0ksc0NBQVk7OztnQkFPaEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7O2dCQVZELFVBQ2lCLEdBQVk7O2dCQUMzQixJQUFNLE1BQU0sR0FBR0EsWUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztvQkFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztpQkFDbkc7YUFDRjs7O1dBQUE7Ozs7UUFhRCwrQkFBUTs7O1lBQVI7Z0JBQ0UsS0FBSyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUc7b0JBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztpQkFDckc7YUFDRjs7Ozs7O1FBRU8sc0NBQWU7Ozs7O3NCQUFDLEdBQVcsRUFBRSxRQUFnQjs7Z0JBQ25ELElBQU0sTUFBTSxHQUFHLFdBQVMsR0FBSyxDQUFDO2dCQUU5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDL0IsVUFBQSxLQUFLO29CQUNLLElBQUEsNkJBQVUsQ0FBVztvQkFDN0IscUNBQVEsMEJBQVUsRUFBRSxzQkFBUSxFQUFFLDBCQUFVLEVBQUUsZ0NBQWEsRUFBRSxnQ0FBYSxFQUFFLDBCQUFVLENBQWdDOztvQkFDbEgsSUFBSSxLQUFLLElBQ1AsZUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFHO3lCQUN2QyxpQkFBZSxVQUFVLE1BQUcsQ0FBQTt5QkFDNUIsb0JBQWtCLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQUcsQ0FBQSxDQUNsRCxDQUFDO29CQUNGLElBQUksVUFBVSxFQUFFO3dCQUNkLEtBQUssSUFBSSxpQkFBZSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFHLENBQUM7cUJBQ3REO29CQUNELElBQUksYUFBYSxFQUFFO3dCQUNqQixLQUFLLElBQUksb0JBQWtCLGFBQWEsTUFBRyxDQUFDO3FCQUM3QztvQkFDRCxJQUFJLFVBQVUsRUFBRTt3QkFDZCxLQUFLLElBQUksaUJBQWUsVUFBVSxNQUFHLENBQUM7cUJBQ3ZDO3lCQUFNO3dCQUNMLEtBQUssSUFBSSxpQkFBZSxVQUFVLENBQUMsVUFBVSxNQUFHLENBQUM7cUJBQ2xEO29CQUNELE9BQU8sS0FBSyxDQUFDO2lCQUNkLEVBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFFBQVEsQ0FDVCxDQUFDOzs7Ozs7OztRQUdJLHlDQUFrQjs7Ozs7O3NCQUFDLElBQVksRUFBRSxHQUFZLEVBQUUsUUFBZ0I7Z0JBQ3JFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3hCLGtCQUFnQixJQUFJLFNBQUksR0FBSyxFQUM3QixVQUFBLEtBQUs7O29CQUNILElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUN2QyxRQUNFLGlCQUFlLEdBQUcsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLFNBQU07eUJBQzVGLG9CQUFrQixHQUFHLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxTQUFNLENBQUEsRUFDckc7aUJBQ0gsRUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQ3hDLENBQUM7OztvQkF2SExDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUztxQkFDcEI7Ozs7O3dCQWpCUUMsV0FBUTt3QkFER0MsZUFBVTt3QkFBRUMsY0FBUzs7Ozs0QkFpQ3RDQyxVQUFLOzZCQVVMQSxVQUFLO2dDQVlMQSxVQUFLO21DQWFMQSxVQUFLOzsyQkFwRVI7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQzdCOztpQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=