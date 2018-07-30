(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/typography', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.typography = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,i0,i1,common) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyTypographyClasses.ctorParameters = function () {
            return [
                { type: i1.CoreTheme, },
            ];
        };
        /** @nocollapse */ LyTypographyClasses.ngInjectableDef = i0.defineInjectable({ factory: function LyTypographyClasses_Factory() { return new LyTypographyClasses(i0.inject(i1.CoreTheme)); }, token: LyTypographyClasses, providedIn: "root" });
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
             */ function () {
                return this._lyTyp;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: i0.Directive, args: [{
                        selector: "[lyTyp]"
                    },] },
        ];
        /** @nocollapse */
        LyTypography.ctorParameters = function () {
            return [
                { type: i1.LyTheme2, },
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: LyTypographyClasses, },
            ];
        };
        LyTypography.propDecorators = {
            "lyTyp": [{ type: i0.Input },],
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
            { type: i0.NgModule, args: [{
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyTypographyModule = LyTypographyModule;
    exports.LyTypography = LyTypography;
    exports.ɵa = LyTypographyClasses;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeUNsYXNzZXMge1xuICByb290OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0eWxlQ29yZTogQ29yZVRoZW1lXG4gICkge1xuICAgIHRoaXMucm9vdCA9IHN0eWxlQ29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stdHlwJyxcbiAgICAgICgpID0+IChcbiAgICAgICAgYG1hcmdpbjogMWVtIDAgMC42NWVtIDA7YCArXG4gICAgICAgIGBkaXNwbGF5OiBibG9jaztgXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG4vLyBpbXBvcnQgeyBJTWluaW1hVGhlbWUgfSBmcm9tICcuLi90aGVtZXMnO1xuaW1wb3J0IHsgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB9IGZyb20gJy4vdHlwb2dyYXBoeS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2x5VHlwXWBcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IHtcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVR5cCh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlUeXApIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuc3R5bGUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjbGFzc2VzOiBMeVR5cG9ncmFwaHlDbGFzc2VzXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVUeXBDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke2tleX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnkvKiogSU1pbmltYVRoZW1lICovPihuZXdLZXksXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwb2dyYXBoeSB9ID0gdGhlbWU7XG4gICAgICAgIGNvbnN0IHsgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIHRleHRUcmFuc2Zvcm0sIGxpbmVIZWlnaHQgfSA9IHR5cG9ncmFwaHlba2V5IHx8ICdib2R5MSddO1xuICAgICAgICBsZXQgc3R5bGUgPSAoXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oZm9udFNpemUpfTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtmb250V2VpZ2h0fTtgICtcbiAgICAgICAgICBgbGV0dGVyLXNwYWNpbmc6JHt0aGVtZS5weFRvUmVtKGxldHRlclNwYWNpbmcpfTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bGUgKz0gYGxpbmUtaGVpZ2h0OiR7dGhlbWUucHhUb1JlbShsaW5lSGVpZ2h0KX07YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlICs9IGB0ZXh0LXRyYW5zZm9ybToke3RleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVR5cG9ncmFwaHkgfSBmcm9tICcuL3R5cG9ncmFwaHkuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlUeXBvZ3JhcGh5XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUeXBvZ3JhcGh5XVxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvcmVUaGVtZSIsIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIlJl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