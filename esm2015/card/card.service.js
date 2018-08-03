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
    LyCardClasses.prototype.cardContent;
    /** @type {?} */
    LyCardClasses.prototype.cardActions;
    /** @type {?} */
    LyCardClasses.prototype.cardActionsItem;
    /** @type {?} */
    LyCardClasses.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NhcmQvIiwic291cmNlcyI6WyJjYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBR3JDLE1BQU07Ozs7SUFxQkosWUFDVTtRQUFBLFVBQUssR0FBTCxLQUFLOzJCQXJCRCxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMxQyxnQkFBZ0IsRUFDaEIsR0FBRyxFQUFFLENBQUMsQ0FDSixnQkFBZ0I7WUFDaEIsb0JBQW9CLENBQ3JCLENBQ0Y7MkJBQ2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDMUMsZ0JBQWdCLEVBQ2hCLEdBQUcsRUFBRSxDQUFDLENBQ0osaUJBQWlCO1lBQ2pCLG9CQUFvQixDQUNyQixDQUNGOytCQUNpQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUM5QyxxQkFBcUIsRUFDckIsR0FBRyxFQUFFLENBQUMsQ0FDSixnQkFBZ0IsQ0FDakIsQ0FDRjtLQUdJOzs7WUF4Qk4sVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUZ6QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENsYXNzZXMge1xuICBjYXJkQ29udGVudCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkLWNvbnRlbnQnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgYHBhZGRpbmc6MTZweCAyNHB4O2BcbiAgICApXG4gICk7XG4gIGNhcmRBY3Rpb25zID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQtYWN0aW9ucycsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6IGJsb2NrO2AgK1xuICAgICAgYHBhZGRpbmc6IDhweCAxMnB4O2BcbiAgICApXG4gICk7XG4gIGNhcmRBY3Rpb25zSXRlbSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkLWFjdGlvbnMtaXRlbScsXG4gICAgKCkgPT4gKFxuICAgICAgYG1hcmdpbjogMCA0cHg7YFxuICAgIClcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiJdfQ==