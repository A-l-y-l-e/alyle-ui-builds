/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { LyTheme2, LyOverlay, shadowBuilder } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_HORIZONTAL_POSITION = 'end';
/** @type {?} */
const DEFAULT_VERTICAL_POSITION = 'bottom';
/**
 * Event that is emitted when a snack bar is dismissed.
 * @record
 */
export function LySnackBarDismiss() { }
if (false) {
    /**
     * Whether the snack bar was dismissed using the action fn.
     * @type {?}
     */
    LySnackBarDismiss.prototype.dismissedByAction;
}
export class LySnackBar {
    /**
     * @param {?} _templateRef
     * @param {?} _theme
     * @param {?} _overlay
     * @param {?} _snackBarService
     */
    constructor(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.afterDismissed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    open() {
        // close previous snackBar if exist
        /** @type {?} */
        const sbrPrev = this._snackBarService._currentSnackBar;
        if (sbrPrev) {
            sbrPrev.dismiss();
        }
        /** @type {?} */
        const duration = this.duration;
        /** @type {?} */
        const horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
        /** @type {?} */
        const verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
        /** @type {?} */
        const snackBar = this._overlay.create(this._templateRef, undefined, {
            styles: {
                // this remove previous style
                justifyContent: null
            },
            classes: [
                this._theme.addStyle('SnackBar', (theme) => (Object.assign({ borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px', padding: '0 16px', minHeight: '48px', minWidth: '256px', opacity: 0, transition: `opacity ${theme.animations.curves.standard} 350ms`, fontSize: theme.pxToRem(theme.typography.fontSize), boxShadow: shadowBuilder(4, (/** @type {?} */ (theme.snackBar.root.background))), [theme.getBreakpoint('XSmall')]: {
                        width: 'calc(100% - 16px)'
                    } }, theme.snackBar.root)), undefined, undefined, STYLE_PRIORITY),
                this._theme.addStyle(`SnackBar.hp:${horizontalPosition}.vp:${verticalPosition}`, () => {
                    /** @type {?} */
                    const __styles = {
                        [verticalPosition]: 0
                    };
                    if (horizontalPosition === 'center') {
                        __styles.marginRight = __styles.marginLeft = 'auto';
                        __styles.left = __styles.right = 0;
                    }
                    else {
                        __styles[horizontalPosition] = 0;
                    }
                    return __styles;
                }, undefined, undefined, STYLE_PRIORITY)
            ]
        });
        /**
         * TODO: add support for `@keyframes`
         */
        getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
        this._theme.addStyle('SnackBar:open', ({
            opacity: 1
        }), snackBar.containerElement, undefined, STYLE_PRIORITY);
        /** @type {?} */
        const sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
        this._snackBarService._currentSnackBar = sbr;
        return sbr;
    }
    /**
     * Dismiss snackBar
     * @return {?}
     */
    dismiss() {
        /** @type {?} */
        const sbr = this._snackBarService._currentSnackBar;
        if (sbr) {
            sbr.dismissWithAction();
        }
    }
}
LySnackBar.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[ly-snack-bar]',
                exportAs: 'lySnackBar'
            },] }
];
/** @nocollapse */
LySnackBar.ctorParameters = () => [
    { type: TemplateRef },
    { type: LyTheme2 },
    { type: LyOverlay },
    { type: LySnackBarService }
];
LySnackBar.propDecorators = {
    duration: [{ type: Input }],
    horizontalPosition: [{ type: Input }],
    verticalPosition: [{ type: Input }],
    afterDismissed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LySnackBar.prototype.duration;
    /** @type {?} */
    LySnackBar.prototype.horizontalPosition;
    /** @type {?} */
    LySnackBar.prototype.verticalPosition;
    /** @type {?} */
    LySnackBar.prototype.afterDismissed;
    /** @type {?} */
    LySnackBar.prototype._templateRef;
    /** @type {?} */
    LySnackBar.prototype._theme;
    /** @type {?} */
    LySnackBar.prototype._overlay;
    /** @type {?} */
    LySnackBar.prototype._snackBarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O01BRTFDLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLDJCQUEyQixHQUFHLEtBQUs7O01BQ25DLHlCQUF5QixHQUFHLFFBQVE7Ozs7O0FBRzFDLHVDQUdDOzs7Ozs7SUFEQyw4Q0FBMkI7O0FBTzdCLE1BQU0sT0FBTyxVQUFVOzs7Ozs7O0lBS3JCLFlBQ1UsWUFBOEIsRUFDOUIsTUFBZ0IsRUFDaEIsUUFBbUIsRUFDbkIsZ0JBQW1DO1FBSG5DLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUxuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0lBTTdELENBQUM7Ozs7SUFFTCxJQUFJOzs7Y0FFSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtRQUN0RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjs7Y0FFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2NBQ3hCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFBSSwy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LFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFsQjBCLFdBQVc7WUFDN0IsUUFBUTtZQUFFLFNBQVM7WUFDbkIsaUJBQWlCOzs7dUJBa0J2QixLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxNQUFNOzs7O0lBSFAsOEJBQTBCOztJQUMxQix3Q0FBMkU7O0lBQzNFLHNDQUE0Qzs7SUFDNUMsb0NBQWlFOztJQUUvRCxrQ0FBc0M7O0lBQ3RDLDRCQUF3Qjs7SUFDeEIsOEJBQTJCOztJQUMzQixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeU92ZXJsYXksIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyUmVmIH0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTiA9ICdlbmQnO1xuY29uc3QgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTiA9ICdib3R0b20nO1xuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyRGlzbWlzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzbmFjayBiYXIgd2FzIGRpc21pc3NlZCB1c2luZyB0aGUgYWN0aW9uIGZuLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbHktc25hY2stYmFyXScsXG4gIGV4cG9ydEFzOiAnbHlTbmFja0Jhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhciB7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnbGVmdCcgfCAncmlnaHQnO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBvcGVuKCkge1xuICAgIC8vIGNsb3NlIHByZXZpb3VzIHNuYWNrQmFyIGlmIGV4aXN0XG4gICAgY29uc3Qgc2JyUHJldiA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnJQcmV2KSB7XG4gICAgICBzYnJQcmV2LmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgY29uc3QgaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5ob3Jpem9udGFsUG9zaXRpb24gfHwgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OO1xuICAgIGNvbnN0IHZlcnRpY2FsUG9zaXRpb24gPSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gfHwgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTjtcblxuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy5fdGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIC8vIHRoaXMgcmVtb3ZlIHByZXZpb3VzIHN0eWxlXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogW1xuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXInLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAnOHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICBtaW5XaWR0aDogJzI1NnB4JyxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDM1MG1zYCxcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCwgdGhlbWUuc25hY2tCYXIucm9vdC5iYWNrZ3JvdW5kIGFzIHN0cmluZyksXG4gICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnRoZW1lLnNuYWNrQmFyLnJvb3QsXG4gICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpLFxuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgX19zdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiAnYXV0bycsXG4gICAgICAgICAgICBsZWZ0PzogMCxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PzogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ/OiAwLFxuICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICBbdmVydGljYWxQb3NpdGlvbl06IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy5tYXJnaW5SaWdodCA9IF9fc3R5bGVzLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBfX3N0eWxlcy5sZWZ0ID0gX19zdHlsZXMucmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfX3N0eWxlc1tob3Jpem9udGFsUG9zaXRpb25dID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9fc3R5bGVzO1xuICAgICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICBdXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVE9ETzogYWRkIHN1cHBvcnQgZm9yIGBAa2V5ZnJhbWVzYFxuICAgICAqL1xuICAgIGdldENvbXB1dGVkU3R5bGUoc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuXG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCAoe1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0pLCBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICBjb25zdCBzYnIgPSBuZXcgTHlTbmFja0JhclJlZih0aGlzLl9zbmFja0JhclNlcnZpY2UsIHNuYWNrQmFyLCB0aGlzLmFmdGVyRGlzbWlzc2VkLCBkdXJhdGlvbiwgdGhpcy5fdGhlbWUpO1xuICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gc2JyO1xuICAgIHJldHVybiBzYnI7XG4gIH1cblxuICAvKiogRGlzbWlzcyBzbmFja0JhciAqL1xuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNiciA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnIpIHtcbiAgICAgIHNici5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19