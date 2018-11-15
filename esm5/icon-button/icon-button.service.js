/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
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
var LyIconButtonService = /** @class */ (function () {
    function LyIconButtonService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
    LyIconButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyIconButtonService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.LyTheme2)); }, token: LyIconButtonService, providedIn: "root" });
    return LyIconButtonService;
}());
export { LyIconButtonService };
if (false) {
    /** @type {?} */
    LyIconButtonService.prototype.classes;
    /** @type {?} */
    LyIconButtonService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi8iLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQUVyQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUVuQixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtRQUNqRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxFQUFFLFNBQVM7UUFDekIsVUFBVSxFQUFFLFNBQVM7UUFDckIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7Q0FDRixDQUFDO0FBRUY7SUFLRSw2QkFDVSxLQUFlO1FBQWYsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUZ6QixZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBR3ZELENBQUM7O2dCQVBOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBdENRLFFBQVE7Ozs4QkFBakI7Q0E0Q0MsQUFSRCxJQVFDO1NBTFksbUJBQW1COzs7SUFDOUIsc0NBQTJEOztJQUV6RCxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGJvcmRlcjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBvdmVyZmxvdzogJ2luaGVyaXQnLFxuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iXX0=