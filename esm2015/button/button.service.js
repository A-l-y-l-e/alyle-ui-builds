/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LyTheme2, CoreTheme } from '@alyle/ui';
import { Injectable, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
export class LyButtonService {
    /**
     * @param {?} coreTheme
     * @param {?} theme
     */
    constructor(coreTheme, theme) {
        this.coreTheme = coreTheme;
        this.theme = theme;
        this.classes = {
            root: this.coreTheme.setUpStyleSecondary('button', {
                '': rootStyle
            }),
            outlined: this.coreTheme.setUpStyle('btntlnd', { '': () => (`border: 1px solid currentColor`) }),
            buttonContent: this.coreTheme.setUpStyle('buttonContent', { '': () => (`padding:0;` +
                    `display:flex;` +
                    `justify-content:inherit;` +
                    `align-items:inherit;` +
                    `align-content:inherit;` +
                    `width: 100%;` +
                    `height: 100%;` +
                    `box-sizing: border-box;`) }),
            currentConfig: this.theme.setUpStyleSecondary('buttonConfig', theme => {
                const { button, fontFamily } = theme.typography;
                let /** @type {?} */ styleButton = (`font-family:${button.fontFamily || fontFamily};` +
                    `font-weight:${button.fontWeight};` +
                    `font-size:${theme.pxToRem(button.fontSize)};` +
                    `color:${theme.text.default};`);
                if (theme.letterSpacing) {
                    styleButton += `letter-spacing:${theme.pxToRem(button.letterSpacing)};`;
                }
                if (button.textTransform) {
                    styleButton += `text-transform:${button.textTransform};`;
                }
                return styleButton;
            })
        };
    }
}
LyButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyButtonService.ctorParameters = () => [
    { type: CoreTheme, },
    { type: LyTheme2, },
];
/** @nocollapse */ LyButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(i0.inject(i1.CoreTheme), i0.inject(i1.LyTheme2)); }, token: LyButtonService, providedIn: "root" });
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
        'min-width:88px;' +
        'box-sizing:border-box;' +
        'position:relative;' +
        `justify-content:center;` +
        `align-items:center;` +
        `align-content:center;` +
        'display:inline-flex;' +
        'cursor:pointer;' +
        '-webkit-user-select:none;' +
        '-moz-user-select:none;' +
        '-ms-user-select:none;' +
        'user-select:none;' +
        'text-decoration-line:none;' +
        '-webkit-text-decoration-line:none;' +
        'transition:all 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;' +
        `overflow: hidden;`;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBQUUsU0FBUyxFQUNwQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQ0wsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDOzs7QUFLdkIsTUFBTTs7Ozs7SUE2Q0osWUFDVSxXQUNBO1FBREEsY0FBUyxHQUFULFNBQVM7UUFDVCxVQUFLLEdBQUwsS0FBSzt1QkE5Q0w7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxTQUFTO2FBQ2QsQ0FBQztZQUNKLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDakMsU0FBUyxFQUNULEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1QsZ0NBQWdDLENBQ2pDLEVBQUMsQ0FDSDtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdEMsZUFBZSxFQUNmLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1QsWUFBWTtvQkFDWixlQUFlO29CQUNmLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZix5QkFBeUIsQ0FDMUIsRUFBQyxDQUNIO1lBQ0QsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQzNDLGNBQWMsRUFDZCxLQUFLLENBQUMsRUFBRTtnQkFDTixNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ2hELHFCQUFJLFdBQVcsR0FBRyxDQUNoQixlQUFlLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxHQUFHO29CQUNqRCxlQUFlLE1BQU0sQ0FBQyxVQUFVLEdBQUc7b0JBQ25DLGFBQWEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7b0JBQzlDLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FDL0IsQ0FBQztnQkFDRixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7b0JBQ3ZCLFdBQVcsSUFBSSxrQkFBa0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztpQkFDekU7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO29CQUN4QixXQUFXLElBQUksa0JBQWtCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQztpQkFDMUQ7Z0JBQ0QsT0FBTyxXQUFXLENBQUM7YUFDcEIsQ0FDRjtTQUNGO0tBSUk7OztZQW5ETixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSVyxTQUFTO1lBQW5CLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREVjtJQUNFLE9BQU8sMENBQTBDO1FBQ2pELG9DQUFvQztRQUNwQyxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLG9DQUFvQztRQUNwQywwREFBMEQ7UUFDMUQsbUJBQW1CLENBQUM7Q0FDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMeVRoZW1lMiwgQ29yZVRoZW1lXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2J1dHRvbicsIHtcbiAgICAgICAgJyc6IHJvb3RTdHlsZVxuICAgICAgfSksXG4gICAgb3V0bGluZWQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnRudGxuZCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcmBcbiAgICAgICl9XG4gICAgKSxcbiAgICBidXR0b25Db250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2J1dHRvbkNvbnRlbnQnLFxuICAgICAgeycnOiAoKSA9PiAoXG4gICAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICAgIGBhbGlnbi1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKX1cbiAgICApLFxuICAgIGN1cnJlbnRDb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgJ2J1dHRvbkNvbmZpZycsXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYnV0dG9uLCBmb250RmFtaWx5IH0gPSB0aGVtZS50eXBvZ3JhcGh5O1xuICAgICAgICBsZXQgc3R5bGVCdXR0b24gPSAoXG4gICAgICAgICAgYGZvbnQtZmFtaWx5OiR7YnV0dG9uLmZvbnRGYW1pbHkgfHwgZm9udEZhbWlseX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7YnV0dG9uLmZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGJ1dHRvbi5mb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLnRleHQuZGVmYXVsdH07YFxuICAgICAgICApO1xuICAgICAgICBpZiAodGhlbWUubGV0dGVyU3BhY2luZykge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmxldHRlclNwYWNpbmcpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b24udGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGB0ZXh0LXRyYW5zZm9ybToke2J1dHRvbi50ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZUJ1dHRvbjtcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuZnVuY3Rpb24gcm9vdFN0eWxlKCkge1xuICByZXR1cm4gJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDsnICtcbiAgJ2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTsnICtcbiAgJ2JvcmRlcjowOycgK1xuICAncGFkZGluZzowIDFlbTsnICtcbiAgJy1tb3otYXBwZWFyYW5jZTpub25lOycgK1xuICAnbWFyZ2luOjA7JyArXG4gICdib3JkZXItcmFkaXVzOjNweDsnICtcbiAgJ291dGxpbmU6bm9uZTsnICtcbiAgJ2ZvbnQtd2VpZ2h0OjUwMDsnICtcbiAgJ21pbi13aWR0aDo4OHB4OycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiJdfQ==