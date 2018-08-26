/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
export class LyRippleService {
    /**
     * @param {?} coreTheme
     */
    constructor(coreTheme) {
        this.coreTheme = coreTheme;
        this.stylesData = [];
        this.classes = {
            root: this.coreTheme.setUpStyleSecondary('ripple', {
                '': () => (`z-index: 0;` +
                    `border-radius: inherit;`)
            })
        };
        /** @type {?} */
        const host = this.coreTheme.setUpStyle('ripple', {
            '': () => ('position: relative;')
        });
        /** @type {?} */
        const rippleContainer = this.coreTheme.setUpStyle('ripple-cont', { '': () => (`position: absolute;` +
                `width: 5px;` +
                `height: 5px;` +
                `background: currentColor;` +
                `opacity: .19;` +
                `border-radius: 100%;` +
                `-webkit-transform: scale(0);` +
                `transform: scale(0);` +
                `-webkit-transition: opacity ease,-webkit-transform cubic-bezier(.1, 1, 0.5, 1);` +
                `transition: opacity ease,-webkit-transform cubic-bezier(.1, 1, 0.5, 1);` +
                `transition: opacity ease,transform cubic-bezier(.1, 1, 0.5, 1);` +
                `transition: opacity ease,transform cubic-bezier(.1, 1, 0.5, 1);` +
                `pointer-events: none;`) });
        this.stylesData.push(host, rippleContainer);
    }
}
LyRippleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyRippleService.ctorParameters = () => [
    { type: CoreTheme }
];
/** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(i1.CoreTheme)); }, token: LyRippleService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyRippleService.prototype.stylesData;
    /** @type {?} */
    LyRippleService.prototype.classes;
    /** @type {?} */
    LyRippleService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmlwcGxlLyIsInNvdXJjZXMiOlsicmlwcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBS3RDLE1BQU07Ozs7SUFZSixZQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7MEJBWkksRUFBRTt1QkFDZjtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1IsYUFBYTtvQkFDYix5QkFBeUIsQ0FDMUI7YUFDRixDQUNGO1NBQ0Y7O1FBSUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQy9DLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFFLHFCQUFxQixDQUFFO1NBQ3BDLENBQUMsQ0FBQzs7UUFDSCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FDMUUscUJBQXFCO2dCQUNyQixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsMkJBQTJCO2dCQUMzQixlQUFlO2dCQUNmLHNCQUFzQjtnQkFDdEIsOEJBQThCO2dCQUM5QixzQkFBc0I7Z0JBQ3RCLGlGQUFpRjtnQkFDakYseUVBQXlFO2dCQUN6RSxpRUFBaUU7Z0JBQ2pFLGlFQUFpRTtnQkFDakUsdUJBQXVCLENBQ3hCLEVBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQzdDOzs7WUFyQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlU2VydmljZSB7XG4gIHN0eWxlc0RhdGE6IHN0cmluZ1tdID0gW107XG4gIGNsYXNzZXMgPSB7XG4gICAgcm9vdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdyaXBwbGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHotaW5kZXg6IDA7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdyaXBwbGUnLCB7XG4gICAgICAnJzogKCkgPT4gKCAncG9zaXRpb246IHJlbGF0aXZlOycgKVxuICAgIH0pO1xuICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ3JpcHBsZS1jb250JywgeycnOiAoKSA9PiAoXG4gICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgYHdpZHRoOiA1cHg7YCArXG4gICAgICBgaGVpZ2h0OiA1cHg7YCArXG4gICAgICBgYmFja2dyb3VuZDogY3VycmVudENvbG9yO2AgK1xuICAgICAgYG9wYWNpdHk6IC4xOTtgICtcbiAgICAgIGBib3JkZXItcmFkaXVzOiAxMDAlO2AgK1xuICAgICAgYC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtgICtcbiAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKDApO2AgK1xuICAgICAgYC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSx0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSx0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHBvaW50ZXItZXZlbnRzOiBub25lO2BcbiAgICApfSk7XG4gICAgdGhpcy5zdHlsZXNEYXRhLnB1c2goaG9zdCwgcmlwcGxlQ29udGFpbmVyKTtcbiAgfVxuXG59XG4iXX0=