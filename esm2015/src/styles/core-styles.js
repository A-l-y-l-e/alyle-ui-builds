import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import * as i0 from "@angular/core";
import * as i1 from "../theme/theme2.service";
const ɵ0 = (className) => `${className}{position:absolute;top:0;bottom:0;left:0;right:0;}`, ɵ1 = (className) => `${className}{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none;}`, ɵ2 = (className) => `${className}{-webkit-tap-highlight-color:transparent;background-color:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;margin:0;outline:none;box-sizing:border-box;position:relative;text-decoration-line:none;-webkit-text-decoration-line:none;}${className}::-moz-focus-inner:{border:0;}`;
export const LY_COMMON_STYLES = {
    fill: ɵ0,
    visuallyHidden: ɵ1,
    button: ɵ2
};
export const LY_COMMON_STYLES_DEPRECATED = {
    fill: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        outline: 0,
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none'
    },
    button: {
        '-webkit-tap-highlight-color': 'transparent',
        backgroundColor: `transparent`,
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        margin: 0,
        outline: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        textDecorationLine: 'none',
        '-webkit-text-decoration-line': 'none',
        '&::-moz-focus-inner': {
            border: 0
        }
    }
};
let LyCoreStyles = class LyCoreStyles {
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES_DEPRECATED);
    }
};
LyCoreStyles.ctorParameters = () => [
    { type: LyTheme2 }
];
LyCoreStyles.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(i0.ɵɵinject(i1.LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
LyCoreStyles = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], LyCoreStyles);
export { LyCoreStyles };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zdHlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGVzL2NvcmUtc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O1dBSzNDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLG9EQUFvRCxPQUM3RSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxvS0FBb0ssT0FDL00sQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsMFBBQTBQLFNBQVMsZ0NBQWdDO0FBSGhWLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLElBQUksSUFBeUY7SUFDN0YsY0FBYyxJQUF5TTtJQUN2TixNQUFNLElBQXdVO0NBQy9VLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRztJQUN6QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsTUFBTTtRQUM1QixpQkFBaUIsRUFBRSxNQUFNO0tBQzFCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sNkJBQTZCLEVBQUUsYUFBYTtRQUM1QyxlQUFlLEVBQUUsYUFBYTtRQUM5QixNQUFNLEVBQUUsQ0FBQztRQUNULGlCQUFpQixFQUFFLE1BQU07UUFDekIsb0JBQW9CLEVBQUUsTUFBTTtRQUM1QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxNQUFNO1FBQ2YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsa0JBQWtCLEVBQUUsTUFBTTtRQUMxQiw4QkFBOEIsRUFBRSxNQUFNO1FBQ3RDLHFCQUFxQixFQUFFO1lBQ3JCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7S0FDRjtDQUNGLENBQUM7QUFHRixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLFlBQW9CLEtBQWU7UUFBZixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBRG5DLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDekMsQ0FBQTs7WUFENEIsUUFBUTs7O0FBRnhCLFlBQVk7SUFEeEIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLFlBQVksQ0FHeEI7U0FIWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQge1xuICAgfSBmcm9tICcuLi9wYXJzZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7fWAsXG4gIHZpc3VhbGx5SGlkZGVuOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7b3V0bGluZTowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO31gLFxuICBidXR0b246IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MDstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MDtvdXRsaW5lOm5vbmU7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lO30ke2NsYXNzTmFtZX06Oi1tb3otZm9jdXMtaW5uZXI6e2JvcmRlcjowO31gXG59O1xuXG5leHBvcnQgY29uc3QgTFlfQ09NTU9OX1NUWUxFU19ERVBSRUNBVEVEID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBgdHJhbnNwYXJlbnRgLFxuICAgIGJvcmRlcjogMCxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJyxcbiAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAnJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgIGJvcmRlcjogMFxuICAgIH1cbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVNfREVQUkVDQVRFRCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiJdfQ==