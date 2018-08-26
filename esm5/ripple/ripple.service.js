/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var LyRippleService = /** @class */ (function () {
    function LyRippleService(coreTheme) {
        this.coreTheme = coreTheme;
        this.stylesData = [];
        this.classes = {
            root: this.coreTheme.setUpStyleSecondary('ripple', {
                '': function () { return ("z-index: 0;" +
                    "border-radius: inherit;"); }
            })
        };
        /** @type {?} */
        var host = this.coreTheme.setUpStyle('ripple', {
            '': function () { return ('position: relative;'); }
        });
        /** @type {?} */
        var rippleContainer = this.coreTheme.setUpStyle('ripple-cont', { '': function () { return ("position: absolute;" +
                "width: 5px;" +
                "height: 5px;" +
                "background: currentColor;" +
                "opacity: .19;" +
                "border-radius: 100%;" +
                "-webkit-transform: scale(0);" +
                "transform: scale(0);" +
                "-webkit-transition: opacity ease,-webkit-transform cubic-bezier(.1, 1, 0.5, 1);" +
                "transition: opacity ease,-webkit-transform cubic-bezier(.1, 1, 0.5, 1);" +
                "transition: opacity ease,transform cubic-bezier(.1, 1, 0.5, 1);" +
                "transition: opacity ease,transform cubic-bezier(.1, 1, 0.5, 1);" +
                "pointer-events: none;"); } });
        this.stylesData.push(host, rippleContainer);
    }
    LyRippleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRippleService.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(i1.CoreTheme)); }, token: LyRippleService, providedIn: "root" });
    return LyRippleService;
}());
export { LyRippleService };
if (false) {
    /** @type {?} */
    LyRippleService.prototype.stylesData;
    /** @type {?} */
    LyRippleService.prototype.classes;
    /** @type {?} */
    LyRippleService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmlwcGxlLyIsInNvdXJjZXMiOlsicmlwcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztJQWlCcEMseUJBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzswQkFaSSxFQUFFO3VCQUNmO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQ3RDLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsY0FBTSxPQUFBLENBQ1IsYUFBYTtvQkFDYix5QkFBeUIsQ0FDMUIsRUFIUyxDQUdUO2FBQ0YsQ0FDRjtTQUNGOztRQUlDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMvQyxFQUFFLEVBQUUsY0FBTSxPQUFBLENBQUUscUJBQXFCLENBQUUsRUFBekIsQ0FBeUI7U0FDcEMsQ0FBQyxDQUFDOztRQUNILElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFDLEVBQUUsRUFBRSxjQUFNLE9BQUEsQ0FDMUUscUJBQXFCO2dCQUNyQixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsMkJBQTJCO2dCQUMzQixlQUFlO2dCQUNmLHNCQUFzQjtnQkFDdEIsOEJBQThCO2dCQUM5QixzQkFBc0I7Z0JBQ3RCLGlGQUFpRjtnQkFDakYseUVBQXlFO2dCQUN6RSxpRUFBaUU7Z0JBQ2pFLGlFQUFpRTtnQkFDakUsdUJBQXVCLENBQ3hCLEVBZDJFLENBYzNFLEVBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQzdDOztnQkFyQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxTQUFTOzs7MEJBRGxCOztTQU1hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZVNlcnZpY2Uge1xuICBzdHlsZXNEYXRhOiBzdHJpbmdbXSA9IFtdO1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAncmlwcGxlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB6LWluZGV4OiAwO2AgK1xuICAgICAgICAgIGBib3JkZXItcmFkaXVzOiBpbmhlcml0O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgncmlwcGxlJywge1xuICAgICAgJyc6ICgpID0+ICggJ3Bvc2l0aW9uOiByZWxhdGl2ZTsnIClcbiAgICB9KTtcbiAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdyaXBwbGUtY29udCcsIHsnJzogKCkgPT4gKFxuICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgIGB3aWR0aDogNXB4O2AgK1xuICAgICAgYGhlaWdodDogNXB4O2AgK1xuICAgICAgYGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtgICtcbiAgICAgIGBvcGFjaXR5OiAuMTk7YCArXG4gICAgICBgYm9yZGVyLXJhZGl1czogMTAwJTtgICtcbiAgICAgIGAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7YCArXG4gICAgICBgdHJhbnNmb3JtOiBzY2FsZSgwKTtgICtcbiAgICAgIGAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgXG4gICAgKX0pO1xuICAgIHRoaXMuc3R5bGVzRGF0YS5wdXNoKGhvc3QsIHJpcHBsZUNvbnRhaW5lcik7XG4gIH1cblxufVxuIl19