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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmlwcGxlLyIsInNvdXJjZXMiOlsicmlwcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7SUFrQnBDLHlCQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7MEJBWkksRUFBRTt1QkFDZjtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLGNBQU0sT0FBQSxDQUNSLGFBQWE7b0JBQ2IseUJBQXlCLENBQzFCLEVBSFMsQ0FHVDthQUNGLENBQ0Y7U0FDRjs7UUFJQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDL0MsRUFBRSxFQUFFLGNBQU0sT0FBQSxDQUFFLHFCQUFxQixDQUFFLEVBQXpCLENBQXlCO1NBQ3BDLENBQUMsQ0FBQzs7UUFDSCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUUsY0FBTSxPQUFBLENBQzFFLHFCQUFxQjtnQkFDckIsYUFBYTtnQkFDYixjQUFjO2dCQUNkLDJCQUEyQjtnQkFDM0IsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLDhCQUE4QjtnQkFDOUIsc0JBQXNCO2dCQUN0QixpRkFBaUY7Z0JBQ2pGLHlFQUF5RTtnQkFDekUsaUVBQWlFO2dCQUNqRSxpRUFBaUU7Z0JBQ2pFLHVCQUF1QixDQUN4QixFQWQyRSxDQWMzRSxFQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztLQUM3Qzs7Z0JBckNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsU0FBUzs7OzBCQURsQjs7U0FPYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlU2VydmljZSB7XG4gIHN0eWxlc0RhdGE6IHN0cmluZ1tdID0gW107XG4gIGNsYXNzZXMgPSB7XG4gICAgcm9vdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdyaXBwbGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHotaW5kZXg6IDA7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdyaXBwbGUnLCB7XG4gICAgICAnJzogKCkgPT4gKCAncG9zaXRpb246IHJlbGF0aXZlOycgKVxuICAgIH0pO1xuICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ3JpcHBsZS1jb250JywgeycnOiAoKSA9PiAoXG4gICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgYHdpZHRoOiA1cHg7YCArXG4gICAgICBgaGVpZ2h0OiA1cHg7YCArXG4gICAgICBgYmFja2dyb3VuZDogY3VycmVudENvbG9yO2AgK1xuICAgICAgYG9wYWNpdHk6IC4xOTtgICtcbiAgICAgIGBib3JkZXItcmFkaXVzOiAxMDAlO2AgK1xuICAgICAgYC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtgICtcbiAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKDApO2AgK1xuICAgICAgYC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSx0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSx0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHBvaW50ZXItZXZlbnRzOiBub25lO2BcbiAgICApfSk7XG4gICAgdGhpcy5zdHlsZXNEYXRhLnB1c2goaG9zdCwgcmlwcGxlQ29udGFpbmVyKTtcbiAgfVxuXG59XG4iXX0=