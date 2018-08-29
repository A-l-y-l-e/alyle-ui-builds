/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
const styles = ({
    root: {
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        border: 0,
        padding: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        outline: 'none',
        boxSizing: 'border-box',
        color: 'currentColor',
        display: 'inline-flex',
        position: 'relative',
        textDecoration: 'none',
        borderRadius: '50%',
    },
    content: {
        display: 'flex',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        width: 'inherit',
        height: 'inherit',
        overflow: 'inherit',
    }
});
export class LyIconButtonService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyIconButtonStatic');
    }
}
LyIconButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyIconButtonService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.LyTheme2)); }, token: LyIconButtonService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyIconButtonService.prototype.classes;
    /** @type {?} */
    LyIconButtonService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi8iLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUUzQyxNQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0oscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsVUFBVSxFQUFFLE1BQU07UUFDbEIsNkJBQTZCLEVBQUUsa0JBQWtCO1FBQ2pELGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsTUFBTTtRQUNmLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGNBQWMsRUFBRSxNQUFNO1FBQ3RCLFlBQVksRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE1BQU07UUFDZixjQUFjLEVBQUUsU0FBUztRQUN6QixVQUFVLEVBQUUsU0FBUztRQUNyQixLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztRQUNqQixRQUFRLEVBQUUsU0FBUztLQUNwQjtDQUNGLENBQUMsQ0FBQztBQUtILE1BQU07Ozs7SUFFSixZQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7dUJBRkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDO0tBRzNEOzs7WUFQTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFyQ21CLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlVGhlbWUsIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBvdmVyZmxvdzogJ2luaGVyaXQnLFxuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlJY29uQnV0dG9uU3RhdGljJyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iXX0=