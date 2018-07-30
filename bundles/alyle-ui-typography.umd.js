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
                    var _a = typography.typographyVariants[key || 'body1'], fontSize = _a.fontSize, fontWeight = _a.fontWeight, letterSpacing = _a.letterSpacing, textTransform = _a.textTransform, lineHeight = _a.lineHeight;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdHlwb2dyYXBoeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeUNsYXNzZXMge1xuICByb290OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0eWxlQ29yZTogQ29yZVRoZW1lXG4gICkge1xuICAgIHRoaXMucm9vdCA9IHN0eWxlQ29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stdHlwJyxcbiAgICAgICgpID0+IChcbiAgICAgICAgYG1hcmdpbjogMWVtIDAgMC42NWVtIDA7YCArXG4gICAgICAgIGBkaXNwbGF5OiBibG9jaztgXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG4vLyBpbXBvcnQgeyBJTWluaW1hVGhlbWUgfSBmcm9tICcuLi90aGVtZXMnO1xuaW1wb3J0IHsgTHlUeXBvZ3JhcGh5Q2xhc3NlcyB9IGZyb20gJy4vdHlwb2dyYXBoeS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2x5VHlwXWBcbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IHtcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVR5cCh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlUeXApIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuc3R5bGUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjbGFzc2VzOiBMeVR5cG9ncmFwaHlDbGFzc2VzXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVUeXBDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke2tleX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnkvKiogSU1pbmltYVRoZW1lICovPihuZXdLZXksXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwb2dyYXBoeSB9ID0gdGhlbWU7XG4gICAgICAgIGNvbnN0IHsgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIHRleHRUcmFuc2Zvcm0sIGxpbmVIZWlnaHQgfSA9IHR5cG9ncmFwaHkudHlwb2dyYXBoeVZhcmlhbnRzW2tleSB8fCAnYm9keTEnXTtcbiAgICAgICAgbGV0IHN0eWxlID0gKFxuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7Zm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShsZXR0ZXJTcGFjaW5nKX07YFxuICAgICAgICApO1xuICAgICAgICBpZiAobGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWxlICs9IGBsaW5lLWhlaWdodDoke3RoZW1lLnB4VG9SZW0obGluZUhlaWdodCl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzdHlsZSArPSBgdGV4dC10cmFuc2Zvcm06JHt0ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUeXBvZ3JhcGh5IH0gZnJvbSAnLi90eXBvZ3JhcGh5LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5VHlwb2dyYXBoeV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VHlwb2dyYXBoeV1cbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb3JlVGhlbWUiLCJEaXJlY3RpdmUiLCJMeVRoZW1lMiIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFRRSw2QkFDRSxTQUFvQjtZQUVwQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdkMsT0FBTyxFQUNQO2dCQUFNLFFBQ0oseUJBQXlCO29CQUN6QixpQkFBaUI7YUFDbEIsQ0FDRixDQUFDO1NBQ0g7O29CQWZGQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFKUUMsWUFBUzs7OztrQ0FEbEI7Ozs7Ozs7QUNBQTtRQXVCRSxzQkFDVSxPQUNBLFlBQ0EsVUFDUixPQUE0QjtZQUhwQixVQUFLLEdBQUwsS0FBSztZQUNMLGVBQVUsR0FBVixVQUFVO1lBQ1YsYUFBUSxHQUFSLFFBQVE7WUFHaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFOzhCQWpCRywrQkFBSzs7O2dCQU9UO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQjs7OzswQkFUUyxHQUFXO2dCQUNuQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUN0QixxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNyRyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztpQkFDN0I7Ozs7Ozs7OztRQWNLLHNDQUFlOzs7O3NCQUFDLEdBQVc7Z0JBQ2pDLHFCQUFNLE1BQU0sR0FBRyxXQUFTLEdBQUssQ0FBQztnQkFFOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUF5QixNQUFNLEVBQ2xFLFVBQUEsS0FBSztvQkFDSyxJQUFBLDZCQUFVLENBQVc7b0JBQzdCLHdEQUFRLHNCQUFRLEVBQUUsMEJBQVUsRUFBRSxnQ0FBYSxFQUFFLGdDQUFhLEVBQUUsMEJBQVUsQ0FBbUQ7b0JBQ3pILHFCQUFJLEtBQUssSUFDUCxlQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQUc7eUJBQ3ZDLGlCQUFlLFVBQVUsTUFBRyxDQUFBO3lCQUM1QixvQkFBa0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBRyxDQUFBLENBQ2xELENBQUM7b0JBQ0YsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsS0FBSyxJQUFJLGlCQUFlLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQUcsQ0FBQztxQkFDdEQ7b0JBQ0QsSUFBSSxhQUFhLEVBQUU7d0JBQ2pCLEtBQUssSUFBSSxvQkFBa0IsYUFBYSxNQUFHLENBQUM7cUJBQzdDO29CQUNELE9BQU8sS0FBSyxDQUFDO2lCQUNkLENBQ0YsQ0FBQzs7O29CQS9DTEMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxTQUFTO3FCQUNwQjs7Ozs7d0JBTlFDLFdBQVE7d0JBREdDLGFBQVU7d0JBQUVDLFlBQVM7d0JBR2hDLG1CQUFtQjs7Ozs4QkFTekJDLFFBQUs7OzJCQVpSOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUM3Qjs7aUNBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=