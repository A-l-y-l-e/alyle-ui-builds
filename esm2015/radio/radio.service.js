/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yYWRpby8iLCJzb3VyY2VzIjpbInJhZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUVyQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztLQUN4QjtDQUNGLENBQUMsQ0FBQztBQUtILE1BQU0sT0FBTyxjQUFjOzs7O0lBRXpCLFlBQ1U7UUFBQSxVQUFLLEdBQUwsS0FBSztRQUZmLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBR3REOzs7WUFQTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFsQlEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gIH0sXG4gIGxhYmVsQ29udGVudDoge1xuICAgIHBhZGRpbmc6ICcwIDAuNWVtJ1xuICB9LFxuICByYWRpb0J1dHRvbjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iXX0=