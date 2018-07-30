/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    var /** @type {?} */ style = "-webkit-user-select:none;" +
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
            content: this.coreTheme.setUpStyle('icnBtnCntnt', { '': function () {
                    return ("display:flex;" +
                        "justify-content:inherit;" +
                        "align-items:inherit;" +
                        "width:inherit;" +
                        "height:inherit;" +
                        "overflow:inherit;");
                } })
        };
    }
    LyIconButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyIconButtonService.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.CoreTheme)); }, token: LyIconButtonService, providedIn: "root" });
    return LyIconButtonService;
}());
export { LyIconButtonService };
function LyIconButtonService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyIconButtonService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyIconButtonService.ctorParameters;
    /** @type {?} */
    LyIconButtonService.prototype.classes;
    /** @type {?} */
    LyIconButtonService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi8iLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQXVDekMsNkJBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkFsQ1Q7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxFQUFFO29CQUM3QyxxQkFBTSxLQUFLLEdBQ1gsMkJBQTJCO3dCQUMzQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQiwrQ0FBK0M7d0JBQy9DLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CLENBQUM7b0JBQ3JCLE9BQU8sS0FBSyxDQUFDO2lCQUNkLEVBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxFQUFFLEVBQUU7b0JBQU0sT0FBQSxDQUMzRCxlQUFlO3dCQUNmLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CLENBQ3BCO2dCQVA0RCxDQU81RCxFQUFDLENBQUM7U0FDSjtLQUdJOztnQkF2Q04sVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxTQUFTOzs7OEJBQWxCOztTQU1hLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIGhvc3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2ljbkJ0bicsIHsnJzogKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPVxuICAgICAgYC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtbW96LXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgLW1zLXVzZXItc2VsZWN0Om5vbmU7YCArXG4gICAgICBgdXNlci1zZWxlY3Q6bm9uZTtgICtcbiAgICAgIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2AgK1xuICAgICAgYGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YCArXG4gICAgICBgYm9yZGVyOjA7YCArXG4gICAgICBgcGFkZGluZzowO2AgK1xuICAgICAgYG92ZXJmbG93OmhpZGRlbjtgICtcbiAgICAgIGBjdXJzb3I6cG9pbnRlcjtgICtcbiAgICAgIGBvdXRsaW5lOm5vbmU7YCArXG4gICAgICBgYm94LXNpemluZzpib3JkZXItYm94O2AgK1xuICAgICAgYGNvbG9yOmN1cnJlbnRDb2xvcjtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYHRleHQtZGVjb3JhdGlvbjogbm9uZTtgICtcbiAgICAgIGBib3JkZXItcmFkaXVzOjUwJTtgO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH19KSxcbiAgICBjb250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdpY25CdG5DbnRudCcsIHsnJzogKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgIGBhbGlnbi1pdGVtczppbmhlcml0O2AgK1xuICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICBgaGVpZ2h0OmluaGVyaXQ7YCArXG4gICAgICBgb3ZlcmZsb3c6aW5oZXJpdDtgXG4gICAgKX0pXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cbn1cbiJdfQ==