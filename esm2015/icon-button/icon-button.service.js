/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { LyTheme2 } from '@alyle/ui';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
const STYLE_PRIORITY = -2;
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
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
}
LyIconButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLWJ1dHRvbi8iLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztNQUVyQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUVuQixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtRQUNqRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxFQUFFLFNBQVM7UUFDekIsVUFBVSxFQUFFLFNBQVM7UUFDckIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7Q0FDRixDQUFDO0FBS0YsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUU5QixZQUNVLEtBQWU7UUFBZixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBRnpCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFHdkQsQ0FBQzs7O1lBUE4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBdENRLFFBQVE7Ozs7O0lBd0NmLHNDQUEyRDs7SUFFekQsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgb3ZlcmZsb3c6ICdpbmhlcml0JyxcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIl19