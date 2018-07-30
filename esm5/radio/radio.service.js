/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                '': function () {
                    return ("display: flex;" +
                        "flex-wrap: wrap;");
                }
            }),
            labelContent: this.coreTheme.setUpStyle('k-radio-label-content', {
                '': function () {
                    return ("padding: 0 0.5em;");
                }
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
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyRadioService.ngInjectableDef = i0.defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(i0.inject(i1.CoreTheme)); }, token: LyRadioService, providedIn: "root" });
    return LyRadioService;
}());
export { LyRadioService };
function LyRadioService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyRadioService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyRadioService.ctorParameters;
    /** @type {?} */
    LyRadioService.prototype.classes;
    /** @type {?} */
    LyRadioService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yYWRpby8iLCJzb3VyY2VzIjpbInJhZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztJQXVCcEMsd0JBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkFsQlQ7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzdCLGVBQWUsRUFBRTtnQkFDZixFQUFFLEVBQUU7b0JBQU0sT0FBQSxDQUNSLGdCQUFnQjt3QkFDaEIsa0JBQWtCLENBQ25CO2dCQUhTLENBR1Q7YUFDRixDQUNGO1lBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNyQyx1QkFBdUIsRUFBRTtnQkFDdkIsRUFBRSxFQUFFO29CQUFNLE9BQUEsQ0FDUixtQkFBbUIsQ0FDcEI7Z0JBRlMsQ0FFVDthQUNGLENBQ0Y7U0FDRjtLQUdJOztnQkF2Qk4sVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxTQUFTOzs7eUJBRGxCOztTQU1hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvU2VydmljZSB7XG4gIGNsYXNzZXMgPSB7XG4gICAgcm9vdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLXJhZGlvLWdyb3VwJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgIGBmbGV4LXdyYXA6IHdyYXA7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBsYWJlbENvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay1yYWRpby1sYWJlbC1jb250ZW50Jywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwYWRkaW5nOiAwIDAuNWVtO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuIl19