/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                '': function () {
                    return ("position: absolute;" +
                        "top: 0;" +
                        "bottom: 0;" +
                        "left: 0;" +
                        "right: 0;");
                }
            }),
            VisuallyHidden: this.coreTheme.setUpStyle('k-visually-hidden', {
                '': function () {
                    return ("border: 0;" +
                        "clip: rect(0 0 0 0);" +
                        "height: 1px;" +
                        "margin: -1px;" +
                        "overflow: hidden;" +
                        "padding: 0;" +
                        "position: absolute;" +
                        "width: 1px;" +
                        "outline: 0;" +
                        "-webkit-appearance: none;" +
                        "-moz-appearance: none;");
                }
            })
        };
    }
    LyCoreStyles.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LyCoreStyles.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyCoreStyles.ngInjectableDef = i0.defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(i0.inject(i1.CoreTheme)); }, token: LyCoreStyles, providedIn: "root" });
    return LyCoreStyles;
}());
export { LyCoreStyles };
function LyCoreStyles_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCoreStyles.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCoreStyles.ctorParameters;
    /** @type {?} */
    LyCoreStyles.prototype.classes;
    /** @type {?} */
    LyCoreStyles.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zdHlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGVzL2NvcmUtc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztJQW1DdEQsc0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7dUJBL0I5Qjs7WUFFUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzdCLFlBQVksRUFBRTtnQkFDWixFQUFFLEVBQUU7b0JBQU0sT0FBQSxDQUNSLHFCQUFxQjt3QkFDckIsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsV0FBVyxDQUNaO2dCQU5TLENBTVQ7YUFDRixDQUNGO1lBQ0QsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN2QyxtQkFBbUIsRUFBRTtnQkFDbkIsRUFBRSxFQUFFO29CQUFNLE9BQUEsQ0FDUixZQUFZO3dCQUNaLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYiwyQkFBMkI7d0JBQzNCLHdCQUF3QixDQUN6QjtnQkFaUyxDQVlUO2FBQ0YsQ0FDRjtTQUNGO0tBQzRDOztnQkFqQzlDLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBRnpCLFNBQVM7Ozt1QkFEbEI7O1NBSWEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHtcbiAgICAvKiogUG9zaXRpb24gYWJzb2x1dGUgKi9cbiAgICBGaWxsOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stYWJzb2x1dGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgVmlzdWFsbHlIaWRkZW46IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay12aXN1YWxseS1oaWRkZW4nLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJvcmRlcjogMDtgICtcbiAgICAgICAgICBgY2xpcDogcmVjdCgwIDAgMCAwKTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxcHg7YCArXG4gICAgICAgICAgYG1hcmdpbjogLTFweDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgcGFkZGluZzogMDtgICtcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB3aWR0aDogMXB4O2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otYXBwZWFyYW5jZTogbm9uZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUpIHsgfVxufVxuIl19