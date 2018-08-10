/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LyTheme2, CoreTheme } from '@alyle/ui';
import { Injectable, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var LyButtonService = /** @class */ (function () {
    function LyButtonService(coreTheme, theme) {
        this.coreTheme = coreTheme;
        this.theme = theme;
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
                } }),
            currentConfig: this.theme.setUpStyleSecondary('buttonConfig', function (theme) {
                var _a = theme.typography, button = _a.button, fontFamily = _a.fontFamily;
                var /** @type {?} */ styleButton = ("font-family:" + (button.fontFamily || fontFamily) + ";" +
                    ("font-weight:" + button.fontWeight + ";") +
                    ("font-size:" + theme.pxToRem(button.fontSize) + ";") +
                    ("color:" + theme.text.default + ";"));
                if (theme.letterSpacing) {
                    styleButton += "letter-spacing:" + theme.pxToRem(button.letterSpacing) + ";";
                }
                if (button.textTransform) {
                    styleButton += "text-transform:" + button.textTransform + ";";
                }
                return styleButton;
            })
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
        { type: LyTheme2, },
    ]; };
    /** @nocollapse */ LyButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(i0.inject(i1.CoreTheme), i0.inject(i1.LyTheme2)); }, token: LyButtonService, providedIn: "root" });
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
    LyButtonService.prototype.classes;
    /** @type {?} */
    LyButtonService.prototype.coreTheme;
    /** @type {?} */
    LyButtonService.prototype.theme;
}
/**
 * @return {?}
 */
function rootStyle() {
    return '-webkit-tap-highlight-color:transparent;' +
        'background-color:rgba(0, 0, 0, 0);' +
        'border:0;' +
        'padding:0 1em;' +
        '-moz-appearance:none;' +
        'margin:0;' +
        'border-radius:3px;' +
        'outline:none;' +
        'font-weight:500;' +
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBQUUsU0FBUyxFQUNwQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQ0wsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDOzs7O0lBa0RyQix5QkFDVSxXQUNBO1FBREEsY0FBUyxHQUFULFNBQVM7UUFDVCxVQUFLLEdBQUwsS0FBSzt1QkE5Q0w7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxTQUFTO2FBQ2QsQ0FBQztZQUNKLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDakMsU0FBUyxFQUNULEVBQUMsRUFBRSxFQUFFO29CQUFNLE9BQUEsQ0FDVCxnQ0FBZ0MsQ0FDakM7Z0JBRlUsQ0FFVixFQUFDLENBQ0g7WUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3RDLGVBQWUsRUFDZixFQUFDLEVBQUUsRUFBRTtvQkFBTSxPQUFBLENBQ1QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZix5QkFBeUIsQ0FDMUI7Z0JBVFUsQ0FTVixFQUFDLENBQ0g7WUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDM0MsY0FBYyxFQUNkLFVBQUEsS0FBSztnQkFDSCwyQkFBUSxrQkFBTSxFQUFFLDBCQUFVLENBQXNCO2dCQUNoRCxxQkFBSSxXQUFXLEdBQUcsQ0FDaEIsa0JBQWUsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLE9BQUc7cUJBQ2pELGlCQUFlLE1BQU0sQ0FBQyxVQUFVLE1BQUcsQ0FBQTtxQkFDbkMsZUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBRyxDQUFBO3FCQUM5QyxXQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxNQUFHLENBQUEsQ0FDL0IsQ0FBQztnQkFDRixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7b0JBQ3ZCLFdBQVcsSUFBSSxvQkFBa0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQUcsQ0FBQztpQkFDekU7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO29CQUN4QixXQUFXLElBQUksb0JBQWtCLE1BQU0sQ0FBQyxhQUFhLE1BQUcsQ0FBQztpQkFDMUQ7Z0JBQ0QsT0FBTyxXQUFXLENBQUM7YUFDcEIsQ0FDRjtTQUNGO0tBSUk7O2dCQW5ETixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJXLFNBQVM7Z0JBQW5CLFFBQVE7OzswQkFEVjs7U0FVYSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUQ1QjtJQUNFLE9BQU8sMENBQTBDO1FBQ2pELG9DQUFvQztRQUNwQyxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsb0NBQW9DO1FBQ3BDLDBEQUEwRDtRQUMxRCxtQkFBbUIsQ0FBQztDQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgICksXG4gICAgY3VycmVudENvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICAnYnV0dG9uQ29uZmlnJyxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gICAgICAgIGxldCBzdHlsZUJ1dHRvbiA9IChcbiAgICAgICAgICBgZm9udC1mYW1pbHk6JHtidXR0b24uZm9udEZhbWlseSB8fCBmb250RmFtaWx5fTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtidXR0b24uZm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGVtZS5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShidXR0b24ubGV0dGVyU3BhY2luZyl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYHRleHQtdHJhbnNmb3JtOiR7YnV0dG9uLnRleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlQnV0dG9uO1xuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMWVtOycgK1xuICAnLW1vei1hcHBlYXJhbmNlOm5vbmU7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiJdfQ==