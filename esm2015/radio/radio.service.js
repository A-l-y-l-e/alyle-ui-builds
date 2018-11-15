/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: {
        display: 'inline-block'
    },
    labelContent: {
        padding: '0 0.5em'
    },
    radioButton: {
        display: 'inline-block'
    }
});
export class LyRadioService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
}
LyRadioService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyRadioService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyRadioService.ngInjectableDef = i0.defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(i0.inject(i1.LyTheme2)); }, token: LyRadioService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyRadioService.prototype.classes;
    /** @type {?} */
    LyRadioService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yYWRpby8iLCJzb3VyY2VzIjpbInJhZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztNQUUvQixjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUVuQixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztLQUN4QjtDQUNGLENBQUM7QUFLRixNQUFNLE9BQU8sY0FBYzs7OztJQUV6QixZQUNVLEtBQWU7UUFBZixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBRnpCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFHdkQsQ0FBQzs7O1lBUE4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbEJRLFFBQVE7Ozs7O0lBb0JmLGlDQUEyRDs7SUFFekQsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgfSxcbiAgbGFiZWxDb250ZW50OiB7XG4gICAgcGFkZGluZzogJzAgMC41ZW0nXG4gIH0sXG4gIHJhZGlvQnV0dG9uOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiJdfQ==