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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmlwcGxlLyIsInNvdXJjZXMiOlsicmlwcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQU10QyxNQUFNOzs7O0lBWUosWUFDVTtRQUFBLGNBQVMsR0FBVCxTQUFTOzBCQVpJLEVBQUU7dUJBQ2Y7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNSLGFBQWE7b0JBQ2IseUJBQXlCLENBQzFCO2FBQ0YsQ0FDRjtTQUNGOztRQUlDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMvQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBRSxxQkFBcUIsQ0FBRTtTQUNwQyxDQUFDLENBQUM7O1FBQ0gsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQzFFLHFCQUFxQjtnQkFDckIsYUFBYTtnQkFDYixjQUFjO2dCQUNkLDJCQUEyQjtnQkFDM0IsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLDhCQUE4QjtnQkFDOUIsc0JBQXNCO2dCQUN0QixpRkFBaUY7Z0JBQ2pGLHlFQUF5RTtnQkFDekUsaUVBQWlFO2dCQUNqRSxpRUFBaUU7Z0JBQ2pFLHVCQUF1QixDQUN4QixFQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztLQUM3Qzs7O1lBckNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgc3R5bGVzRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ3JpcHBsZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgei1pbmRleDogMDtgICtcbiAgICAgICAgICBgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ3JpcHBsZScsIHtcbiAgICAgICcnOiAoKSA9PiAoICdwb3NpdGlvbjogcmVsYXRpdmU7JyApXG4gICAgfSk7XG4gICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgncmlwcGxlLWNvbnQnLCB7Jyc6ICgpID0+IChcbiAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICBgd2lkdGg6IDVweDtgICtcbiAgICAgIGBoZWlnaHQ6IDVweDtgICtcbiAgICAgIGBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7YCArXG4gICAgICBgb3BhY2l0eTogLjE5O2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6IDEwMCU7YCArXG4gICAgICBgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO2AgK1xuICAgICAgYHRyYW5zZm9ybTogc2NhbGUoMCk7YCArXG4gICAgICBgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YFxuICAgICl9KTtcbiAgICB0aGlzLnN0eWxlc0RhdGEucHVzaChob3N0LCByaXBwbGVDb250YWluZXIpO1xuICB9XG5cbn1cbiJdfQ==