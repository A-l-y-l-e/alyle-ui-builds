/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var LyRadioService = /** @class */ (function () {
    function LyRadioService(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            root: this.coreTheme.setUpStyle('k-radio-group', {
                '': function () { return ("display: flex;" +
                    "flex-wrap: wrap;"); }
            }),
            labelContent: this.coreTheme.setUpStyle('k-radio-label-content', {
                '': function () { return ("padding: 0 0.5em;"); }
            })
        };
    }
    LyRadioService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRadioService.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyRadioService.ngInjectableDef = i0.defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(i0.inject(i1.CoreTheme)); }, token: LyRadioService, providedIn: "root" });
    return LyRadioService;
}());
export { LyRadioService };
if (false) {
    /** @type {?} */
    LyRadioService.prototype.classes;
    /** @type {?} */
    LyRadioService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yYWRpby8iLCJzb3VyY2VzIjpbInJhZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztJQXVCcEMsd0JBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkFsQlQ7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzdCLGVBQWUsRUFBRTtnQkFDZixFQUFFLEVBQUUsY0FBTSxPQUFBLENBQ1IsZ0JBQWdCO29CQUNoQixrQkFBa0IsQ0FDbkIsRUFIUyxDQUdUO2FBQ0YsQ0FDRjtZQUNELFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDckMsdUJBQXVCLEVBQUU7Z0JBQ3ZCLEVBQUUsRUFBRSxjQUFNLE9BQUEsQ0FDUixtQkFBbUIsQ0FDcEIsRUFGUyxDQUVUO2FBQ0YsQ0FDRjtTQUNGO0tBR0k7O2dCQXZCTixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFNBQVM7Ozt5QkFEbEI7O1NBTWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stcmFkaW8tZ3JvdXAnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICAgICAgYGZsZXgtd3JhcDogd3JhcDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIGxhYmVsQ29udGVudDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLXJhZGlvLWxhYmVsLWNvbnRlbnQnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBhZGRpbmc6IDAgMC41ZW07YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkgeyB9XG59XG4iXX0=