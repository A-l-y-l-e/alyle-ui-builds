/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CoreTheme } from '@alyle/ui';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
export class LyButtonService {
    /**
     * @param {?} coreTheme
     */
    constructor(coreTheme) {
        this.coreTheme = coreTheme;
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
                    `box-sizing: border-box;`) })
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
];
/** @nocollapse */ LyButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(i0.inject(i1.CoreTheme)); }, token: LyButtonService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSyxTQUFTLEVBQ3BCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFHTCxVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7OztBQUt2QixNQUFNOzs7O0lBNEJKLFlBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUzt1QkExQlQ7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxTQUFTO2FBQ2QsQ0FBQztZQUNKLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDakMsU0FBUyxFQUNULEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1QsZ0NBQWdDLENBQ2pDLEVBQUMsQ0FDSDtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdEMsZUFBZSxFQUNmLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1QsWUFBWTtvQkFDWixlQUFlO29CQUNmLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZix5QkFBeUIsQ0FDMUIsRUFBQyxDQUNIO1NBQ0Y7S0FHSTs7O1lBakNOLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhXLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNyQjtJQUNFLE9BQU8sMENBQTBDO1FBQ2pELG9DQUFvQztRQUNwQyxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsb0NBQW9DO1FBQ3BDLDBEQUEwRDtRQUMxRCxtQkFBbUIsQ0FBQztDQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBwcml2YXRlIHJvb3RDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSB0aGVtZUNsYXNzTmFtZTogc3RyaW5nO1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMTZweDsnICtcbiAgJy1tb3otYXBwZWFyYW5jZTpub25lOycgK1xuICAnbWluLWhlaWdodDozNnB4OycgK1xuICAnaGVpZ2h0OjM2cHg7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnbWluLXdpZHRoOjg4cHg7JyArXG4gICdib3gtc2l6aW5nOmJvcmRlci1ib3g7JyArXG4gICdwb3NpdGlvbjpyZWxhdGl2ZTsnICtcbiAgYGp1c3RpZnktY29udGVudDpjZW50ZXI7YCArXG4gIGBhbGlnbi1pdGVtczpjZW50ZXI7YCArXG4gIGBhbGlnbi1jb250ZW50OmNlbnRlcjtgICtcbiAgJ2Rpc3BsYXk6aW5saW5lLWZsZXg7JyArXG4gICdjdXJzb3I6cG9pbnRlcjsnICtcbiAgJy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tb3otdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tcy11c2VyLXNlbGVjdDpub25lOycgK1xuICAndXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICd0cmFuc2l0aW9uOmFsbCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zOycgK1xuICBgb3ZlcmZsb3c6IGhpZGRlbjtgO1xufVxuIl19