/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CoreTheme } from '@alyle/ui';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var LyIconButtonService = /** @class */ (function () {
    function LyIconButtonService(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            host: this.coreTheme.setUpStyle('icnBtn', { '': function () {
                    /** @type {?} */
                    var style = "-webkit-user-select:none;" +
                        "-moz-user-select:none;" +
                        "-ms-user-select:none;" +
                        "user-select:none;" +
                        "-webkit-tap-highlight-color:rgba(0, 0, 0, 0);" +
                        "justify-content: center;" +
                        "align-items: center;" +
                        "background:transparent;" +
                        "border:0;" +
                        "padding:0;" +
                        "overflow:hidden;" +
                        "cursor:pointer;" +
                        "outline:none;" +
                        "box-sizing:border-box;" +
                        "color:currentColor;" +
                        "display:inline-flex;" +
                        "position:relative;" +
                        "text-decoration: none;" +
                        "border-radius:50%;";
                    return style;
                } }),
            content: this.coreTheme.setUpStyle('icnBtnCntnt', { '': function () { return ("display:flex;" +
                    "justify-content:inherit;" +
                    "align-items:inherit;" +
                    "width:inherit;" +
                    "height:inherit;" +
                    "overflow:inherit;"); } })
        };
    }
    LyIconButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyIconButtonService.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });
    return LyIconButtonService;
}());
export { LyIconButtonService };
if (false) {
    /** @type {?} */
    LyIconButtonService.prototype.classes;
    /** @type {?} */
    LyIconButtonService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi8iLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQXVDekMsNkJBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkFsQ1Q7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxFQUFFOztvQkFDN0MsSUFBTSxLQUFLLEdBQ1gsMkJBQTJCO3dCQUMzQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQiwrQ0FBK0M7d0JBQy9DLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CLENBQUM7b0JBQ3JCLE9BQU8sS0FBSyxDQUFDO2lCQUNkLEVBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUUsY0FBTSxPQUFBLENBQzNELGVBQWU7b0JBQ2YsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixtQkFBbUIsQ0FDcEIsRUFQNEQsQ0FPNUQsRUFBQyxDQUFDO1NBQ0o7S0FHSTs7Z0JBdkNOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsU0FBUzs7OzhCQUFsQjs7U0FNYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICBob3N0OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdpY25CdG4nLCB7Jyc6ICgpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID1cbiAgICAgIGAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgLW1vei11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYC1tcy11c2VyLXNlbGVjdDpub25lO2AgK1xuICAgICAgYHVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7YCArXG4gICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgICtcbiAgICAgIGBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2AgK1xuICAgICAgYGJvcmRlcjowO2AgK1xuICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgIGBvdmVyZmxvdzpoaWRkZW47YCArXG4gICAgICBgY3Vyc29yOnBvaW50ZXI7YCArXG4gICAgICBgb3V0bGluZTpub25lO2AgK1xuICAgICAgYGJveC1zaXppbmc6Ym9yZGVyLWJveDtgICtcbiAgICAgIGBjb2xvcjpjdXJyZW50Q29sb3I7YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgICtcbiAgICAgIGBwb3NpdGlvbjpyZWxhdGl2ZTtgICtcbiAgICAgIGB0ZXh0LWRlY29yYXRpb246IG5vbmU7YCArXG4gICAgICBgYm9yZGVyLXJhZGl1czo1MCU7YDtcbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9fSksXG4gICAgY29udGVudDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnaWNuQnRuQ250bnQnLCB7Jyc6ICgpID0+IChcbiAgICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgICBganVzdGlmeS1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgIGB3aWR0aDppbmhlcml0O2AgK1xuICAgICAgYGhlaWdodDppbmhlcml0O2AgK1xuICAgICAgYG92ZXJmbG93OmluaGVyaXQ7YFxuICAgICl9KVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkgeyB9XG59XG4iXX0=