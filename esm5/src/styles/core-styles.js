/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CoreTheme } from '../theme/core-theme.service';
import * as i0 from "@angular/core";
import * as i1 from "../theme/core-theme.service";
var LyCoreStyles = /** @class */ (function () {
    function LyCoreStyles(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            /** Position absolute */
            Fill: this.coreTheme.setUpStyle('k-absolute', {
                '': function () { return ("position: absolute;" +
                    "top: 0;" +
                    "bottom: 0;" +
                    "left: 0;" +
                    "right: 0;"); }
            }),
            VisuallyHidden: this.coreTheme.setUpStyle('k-visually-hidden', {
                '': function () { return ("border: 0;" +
                    "clip: rect(0 0 0 0);" +
                    "height: 1px;" +
                    "margin: -1px;" +
                    "overflow: hidden;" +
                    "padding: 0;" +
                    "position: absolute;" +
                    "width: 1px;" +
                    "outline: 0;" +
                    "-webkit-appearance: none;" +
                    "-moz-appearance: none;"); }
            })
        };
    }
    LyCoreStyles.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LyCoreStyles.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyCoreStyles.ngInjectableDef = i0.defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(i0.inject(i1.CoreTheme)); }, token: LyCoreStyles, providedIn: "root" });
    return LyCoreStyles;
}());
export { LyCoreStyles };
if (false) {
    /** @type {?} */
    LyCoreStyles.prototype.classes;
    /** @type {?} */
    LyCoreStyles.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zdHlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGVzL2NvcmUtc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztJQW1DdEQsc0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7dUJBL0I5Qjs7WUFFUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzdCLFlBQVksRUFBRTtnQkFDWixFQUFFLEVBQUUsY0FBTSxPQUFBLENBQ1IscUJBQXFCO29CQUNyQixTQUFTO29CQUNULFlBQVk7b0JBQ1osVUFBVTtvQkFDVixXQUFXLENBQ1osRUFOUyxDQU1UO2FBQ0YsQ0FDRjtZQUNELGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdkMsbUJBQW1CLEVBQUU7Z0JBQ25CLEVBQUUsRUFBRSxjQUFNLE9BQUEsQ0FDUixZQUFZO29CQUNaLHNCQUFzQjtvQkFDdEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYiwyQkFBMkI7b0JBQzNCLHdCQUF3QixDQUN6QixFQVpTLENBWVQ7YUFDRixDQUNGO1NBQ0Y7S0FDNEM7O2dCQWpDOUMsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsU0FBUzs7O3VCQURsQjs7U0FJYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0ge1xuICAgIC8qKiBQb3NpdGlvbiBhYnNvbHV0ZSAqL1xuICAgIEZpbGw6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay1hYnNvbHV0ZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB0b3A6IDA7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbGVmdDogMDtgICtcbiAgICAgICAgICBgcmlnaHQ6IDA7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBWaXN1YWxseUhpZGRlbjogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLXZpc3VhbGx5LWhpZGRlbicsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgYm9yZGVyOiAwO2AgK1xuICAgICAgICAgIGBjbGlwOiByZWN0KDAgMCAwIDApO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDFweDtgICtcbiAgICAgICAgICBgbWFyZ2luOiAtMXB4O2AgK1xuICAgICAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2AgK1xuICAgICAgICAgIGBwYWRkaW5nOiAwO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHdpZHRoOiAxcHg7YCArXG4gICAgICAgICAgYG91dGxpbmU6IDA7YCArXG4gICAgICAgICAgYC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtgICtcbiAgICAgICAgICBgLW1vei1hcHBlYXJhbmNlOiBub25lO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSkgeyB9XG59XG4iXX0=