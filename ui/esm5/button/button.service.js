/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CoreTheme } from '@alyle/ui';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var LyButtonService = /** @class */ (function () {
    function LyButtonService(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            root: this.coreTheme.setUpStyleSecondary('button', {
                '': rootStyle
            }),
            outlined: this.coreTheme.setUpStyle('btntlnd', { '': function () {
                    return ("border: 1px solid currentColor");
                } }),
            buttonContent: this.coreTheme.setUpStyle('buttonContent', { '': function () {
                    return ("padding:0;" +
                        "display:flex;" +
                        "justify-content:inherit;" +
                        "align-items:inherit;" +
                        "align-content:inherit;" +
                        "width: 100%;" +
                        "height: 100%;" +
                        "box-sizing: border-box;");
                } })
        };
    }
    LyButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyButtonService.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(i0.inject(i1.CoreTheme)); }, token: LyButtonService, providedIn: "root" });
    return LyButtonService;
}());
export { LyButtonService };
function LyButtonService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyButtonService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyButtonService.ctorParameters;
    /** @type {?} */
    LyButtonService.prototype.rootClassName;
    /** @type {?} */
    LyButtonService.prototype.themeClassName;
    /** @type {?} */
    LyButtonService.prototype.classes;
    /** @type {?} */
    LyButtonService.prototype.coreTheme;
}
/**
 * @return {?}
 */
function rootStyle() {
    return '-webkit-tap-highlight-color:transparent;' +
        'background-color:rgba(0, 0, 0, 0);' +
        'border:0;' +
        'padding:0 16px;' +
        '-moz-appearance:none;' +
        'min-height:36px;' +
        'height:36px;' +
        'margin:0;' +
        'border-radius:3px;' +
        'outline:none;' +
        'font-weight:500;' +
        'min-width:88px;' +
        'box-sizing:border-box;' +
        'position:relative;' +
        "justify-content:center;" +
        "align-items:center;" +
        "align-content:center;" +
        'display:inline-flex;' +
        'cursor:pointer;' +
        '-webkit-user-select:none;' +
        '-moz-user-select:none;' +
        '-ms-user-select:none;' +
        'user-select:none;' +
        'text-decoration-line:none;' +
        '-webkit-text-decoration-line:none;' +
        'transition:all 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;' +
        "overflow: hidden;";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSyxTQUFTLEVBQ3BCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFHTCxVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7Ozs7SUFpQ3JCLHlCQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7dUJBMUJUO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQ3RDLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsU0FBUzthQUNkLENBQUM7WUFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ2pDLFNBQVMsRUFDVCxFQUFDLEVBQUUsRUFBRTtvQkFBTSxPQUFBLENBQ1QsZ0NBQWdDLENBQ2pDO2dCQUZVLENBRVYsRUFBQyxDQUNIO1lBQ0QsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN0QyxlQUFlLEVBQ2YsRUFBQyxFQUFFLEVBQUU7b0JBQU0sT0FBQSxDQUNULFlBQVk7d0JBQ1osZUFBZTt3QkFDZiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YseUJBQXlCLENBQzFCO2dCQVRVLENBU1YsRUFBQyxDQUNIO1NBQ0Y7S0FHSTs7Z0JBakNOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFcsU0FBUzs7OzBCQURyQjs7U0FhYSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzVCO0lBQ0UsT0FBTywwQ0FBMEM7UUFDakQsb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsMERBQTBEO1FBQzFELG1CQUFtQixDQUFDO0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTHlUaGVtZTIsIENvcmVUaGVtZVxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uU2VydmljZSB7XG4gIHByaXZhdGUgcm9vdENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHRoZW1lQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIGNsYXNzZXMgPSB7XG4gICAgcm9vdDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdidXR0b24nLCB7XG4gICAgICAgICcnOiByb290U3R5bGVcbiAgICAgIH0pLFxuICAgIG91dGxpbmVkOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2J0bnRsbmQnLFxuICAgICAgeycnOiAoKSA9PiAoXG4gICAgICAgIGBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3JgXG4gICAgICApfVxuICAgICksXG4gICAgYnV0dG9uQ29udGVudDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidXR0b25Db250ZW50JyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgcGFkZGluZzowO2AgK1xuICAgICAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgICAgICBganVzdGlmeS1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICAgIGBhbGlnbi1pdGVtczppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24tY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgIGBoZWlnaHQ6IDEwMCU7YCArXG4gICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2BcbiAgICAgICl9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkgeyB9XG59XG5cbmZ1bmN0aW9uIHJvb3RTdHlsZSgpIHtcbiAgcmV0dXJuICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7JyArXG4gICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7JyArXG4gICdib3JkZXI6MDsnICtcbiAgJ3BhZGRpbmc6MCAxNnB4OycgK1xuICAnLW1vei1hcHBlYXJhbmNlOm5vbmU7JyArXG4gICdtaW4taGVpZ2h0OjM2cHg7JyArXG4gICdoZWlnaHQ6MzZweDsnICtcbiAgJ21hcmdpbjowOycgK1xuICAnYm9yZGVyLXJhZGl1czozcHg7JyArXG4gICdvdXRsaW5lOm5vbmU7JyArXG4gICdmb250LXdlaWdodDo1MDA7JyArXG4gICdtaW4td2lkdGg6ODhweDsnICtcbiAgJ2JveC1zaXppbmc6Ym9yZGVyLWJveDsnICtcbiAgJ3Bvc2l0aW9uOnJlbGF0aXZlOycgK1xuICBganVzdGlmeS1jb250ZW50OmNlbnRlcjtgICtcbiAgYGFsaWduLWl0ZW1zOmNlbnRlcjtgICtcbiAgYGFsaWduLWNvbnRlbnQ6Y2VudGVyO2AgK1xuICAnZGlzcGxheTppbmxpbmUtZmxleDsnICtcbiAgJ2N1cnNvcjpwb2ludGVyOycgK1xuICAnLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOycgK1xuICAnLW1vei11c2VyLXNlbGVjdDpub25lOycgK1xuICAnLW1zLXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICd1c2VyLXNlbGVjdDpub25lOycgK1xuICAndGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTsnICtcbiAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTsnICtcbiAgJ3RyYW5zaXRpb246YWxsIDM3NW1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXM7JyArXG4gIGBvdmVyZmxvdzogaGlkZGVuO2A7XG59XG4iXX0=