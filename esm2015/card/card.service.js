/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
export class LyCardClasses {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.card = this.theme.setUpStyleSecondary('k-card', () => (`display:block;` +
            `overflow: hidden;`));
        this.cardContent = this.theme.setUpStyleSecondary('k-card-content', () => (`display:block;` +
            `padding:16px 24px;`));
        this.cardActions = this.theme.setUpStyleSecondary('k-card-actions', () => (`display: block;` +
            `padding: 8px 12px;`));
        this.cardActionsItem = this.theme.setUpStyleSecondary('k-card-actions-item', () => (`margin: 0 4px;`));
    }
}
LyCardClasses.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LyCardClasses.ctorParameters = () => [
    { type: LyTheme2, },
];
/** @nocollapse */ LyCardClasses.ngInjectableDef = i0.defineInjectable({ factory: function LyCardClasses_Factory() { return new LyCardClasses(i0.inject(i1.LyTheme2)); }, token: LyCardClasses, providedIn: "root" });
function LyCardClasses_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardClasses.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardClasses.ctorParameters;
    /** @type {?} */
    LyCardClasses.prototype.card;
    /** @type {?} */
    LyCardClasses.prototype.cardContent;
    /** @type {?} */
    LyCardClasses.prototype.cardActions;
    /** @type {?} */
    LyCardClasses.prototype.cardActionsItem;
    /** @type {?} */
    LyCardClasses.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NhcmQvIiwic291cmNlcyI6WyJjYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBR3JDLE1BQU07Ozs7SUE0QkosWUFDVTtRQUFBLFVBQUssR0FBTCxLQUFLO29CQTVCUixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUNuQyxRQUFRLEVBQ1IsR0FBRyxFQUFFLENBQUMsQ0FDSixnQkFBZ0I7WUFDaEIsbUJBQW1CLENBQ3BCLENBQ0Y7MkJBQ2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDMUMsZ0JBQWdCLEVBQ2hCLEdBQUcsRUFBRSxDQUFDLENBQ0osZ0JBQWdCO1lBQ2hCLG9CQUFvQixDQUNyQixDQUNGOzJCQUNhLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQzFDLGdCQUFnQixFQUNoQixHQUFHLEVBQUUsQ0FBQyxDQUNKLGlCQUFpQjtZQUNqQixvQkFBb0IsQ0FDckIsQ0FDRjsrQkFDaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDOUMscUJBQXFCLEVBQ3JCLEdBQUcsRUFBRSxDQUFDLENBQ0osZ0JBQWdCLENBQ2pCLENBQ0Y7S0FHSTs7O1lBL0JOLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFGekIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDbGFzc2VzIHtcbiAgY2FyZCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2BcbiAgICApXG4gICk7XG4gIGNhcmRDb250ZW50ID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQtY29udGVudCcsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICBgcGFkZGluZzoxNnB4IDI0cHg7YFxuICAgIClcbiAgKTtcbiAgY2FyZEFjdGlvbnMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgJ2stY2FyZC1hY3Rpb25zJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTogYmxvY2s7YCArXG4gICAgICBgcGFkZGluZzogOHB4IDEycHg7YFxuICAgIClcbiAgKTtcbiAgY2FyZEFjdGlvbnNJdGVtID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQtYWN0aW9ucy1pdGVtJyxcbiAgICAoKSA9PiAoXG4gICAgICBgbWFyZ2luOiAwIDRweDtgXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIl19