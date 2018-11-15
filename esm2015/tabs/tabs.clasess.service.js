/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
const tabsStyles = {
    root: {
        display: 'block',
        overflow: 'hidden'
    },
    tab: {
        position: 'relative',
        display: 'inline-flex'
    },
    tabsLabels: {
        display: 'flex',
        position: 'relative',
        flexGrow: 1,
        overflow: 'hidden'
    },
    label: {
        minWidth: '72px',
        padding: '0 24px',
        cursor: 'pointer',
        height: '48px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    tabContents: {
        display: 'flex',
        transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
        willChange: 'transform'
    },
    tabContent: {
        width: '100%',
        flexShrink: 0,
        position: 'relative'
    },
    tabsIndicator: {
        position: 'absolute',
        transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
        bottom: 0,
        height: '2px',
        left: 0,
        background: 'currentColor'
    },
    tabsIndicatorForServer: {
        width: '100%'
    }
};
export class LyTabsClassesService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(tabsStyles);
    }
}
LyTabsClassesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyTabsClassesService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyTabsClassesService.ngInjectableDef = i0.defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(i0.inject(i1.LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyTabsClassesService.prototype.classes;
    /** @type {?} */
    LyTabsClassesService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jbGFzZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuY2xhc2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7TUFFL0IsVUFBVSxHQUFHO0lBQ2pCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLGFBQWE7S0FDdkI7SUFDRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUUsTUFBTTtRQUNoQixPQUFPLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLFVBQVUsRUFBRSxXQUFXO0tBQ3hCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLE1BQU07UUFDYixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxVQUFVO0tBQ3JCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLENBQUM7UUFDUCxVQUFVLEVBQUUsY0FBYztLQUMzQjtJQUNELHNCQUFzQixFQUFFO1FBQ3RCLEtBQUssRUFBRSxNQUFNO0tBQ2Q7Q0FDRjtBQUtELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFDVSxLQUFlO1FBQWYsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUZ6QixZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFHM0MsQ0FBQzs7O1lBUE4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBckRRLFFBQVE7Ozs7O0lBdURmLHVDQUErQzs7SUFFN0MscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCB0YWJzU3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICB9LFxuICB0YWJzTGFiZWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBsYWJlbDoge1xuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHRhYkNvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHRhYkNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0luZGljYXRvcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGFic0luZGljYXRvckZvclNlcnZlcjoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzQ2xhc3Nlc1NlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHRhYnNTdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIl19