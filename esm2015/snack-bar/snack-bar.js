/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { LyTheme2, LyOverlay, shadowBuilder, XPosition, YPosition } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_HORIZONTAL_POSITION = XPosition.after;
/** @type {?} */
const DEFAULT_VERTICAL_POSITION = YPosition.below;
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
                this._theme.addStyle('SnackBar', (theme) => (Object.assign({ borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px', padding: '0 16px', minHeight: '48px', minWidth: '320px', maxWidth: '320px', opacity: 0, transition: `opacity ${theme.animations.curves.standard} 350ms, transform ${theme.animations.curves.deceleration} 350ms`, fontSize: theme.pxToRem(theme.typography.fontSize), boxShadow: shadowBuilder(4, (/** @type {?} */ (theme.snackBar.root.background))), [theme.getBreakpoint('XSmall')]: {
                        width: 'calc(100% - 16px)',
                        minWidth: 'calc(100% - 16px)'
                    } }, theme.snackBar.root)), undefined, undefined, STYLE_PRIORITY),
                this._theme.addStyle(`SnackBar.hp:${horizontalPosition}.vp:${verticalPosition}`, (theme) => {
                    /** @type {?} */
                    const __styles = {};
                    if (verticalPosition === YPosition.above) {
                        __styles.transform = 'translateY(-180%)';
                        __styles.top = 0;
                    }
                    if (verticalPosition === YPosition.below) {
                        __styles.transform = 'translateY(180%)';
                        __styles.bottom = 0;
                    }
                    if (horizontalPosition === 'center') {
                        __styles.marginRight = __styles.marginLeft = 'auto';
                        __styles.left = __styles.right = 0;
                    }
                    else {
                        __styles[theme.getDirection((/** @type {?} */ (horizontalPosition)))] = 0;
                    }
                    return __styles;
                }, undefined, undefined, STYLE_PRIORITY)
            ]
        });
        this._theme.requestAnimationFrame(() => {
            this._theme.addStyle('SnackBar:open', ({
                opacity: 1,
                transform: 'translateY(0)'
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLGFBQWEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFMUMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsMkJBQTJCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O01BQzdDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7OztBQUdqRCx1Q0FHQzs7Ozs7O0lBREMsOENBQTJCOztBQU83QixNQUFNLE9BQU8sVUFBVTs7Ozs7OztJQUtyQixZQUNVLFlBQThCLEVBQzlCLE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLGdCQUFtQztRQUhuQyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFMbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztJQU03RCxDQUFDOzs7O0lBRUwsSUFBSTs7O2NBRUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDdEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkI7O2NBRUssUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFROztj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USxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQzs7Y0FFRyxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDN0MsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7OztJQUdELE9BQU87O2NBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDbEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFsQjBCLFdBQVc7WUFDN0IsUUFBUTtZQUFFLFNBQVM7WUFDbkIsaUJBQWlCOzs7dUJBa0J2QixLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxNQUFNOzs7O0lBSFAsOEJBQTBCOztJQUMxQix3Q0FBdUY7O0lBQ3ZGLHNDQUFxQzs7SUFDckMsb0NBQWlFOztJQUUvRCxrQ0FBc0M7O0lBQ3RDLDRCQUF3Qjs7SUFDeEIsOEJBQTJCOztJQUMzQixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeU92ZXJsYXksIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyLCBYUG9zaXRpb24sIFlQb3NpdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5jb25zdCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OID0gWVBvc2l0aW9uLmJlbG93O1xuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyRGlzbWlzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzbmFjayBiYXIgd2FzIGRpc21pc3NlZCB1c2luZyB0aGUgYWN0aW9uIGZuLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbHktc25hY2stYmFyXScsXG4gIGV4cG9ydEFzOiAnbHlTbmFja0Jhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhciB7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgWFBvc2l0aW9uO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiBZUG9zaXRpb247XG4gIEBPdXRwdXQoKSBhZnRlckRpc21pc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZVxuICApIHsgfVxuXG4gIG9wZW4oKSB7XG4gICAgLy8gY2xvc2UgcHJldmlvdXMgc25hY2tCYXIgaWYgZXhpc3RcbiAgICBjb25zdCBzYnJQcmV2ID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNiclByZXYpIHtcbiAgICAgIHNiclByZXYuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiB8fCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT047XG4gICAgY29uc3QgdmVydGljYWxQb3NpdGlvbiA9IHRoaXMudmVydGljYWxQb3NpdGlvbiB8fCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OO1xuXG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLl90ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgLy8gdGhpcyByZW1vdmUgcHJldmlvdXMgc3R5bGVcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiBbXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcicsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBtYXJnaW46ICc4cHgnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgIG1pbldpZHRoOiAnMzIwcHgnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMzIwcHgnLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzUwbXMsIHRyYW5zZm9ybSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gMzUwbXNgLFxuICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpLFxuICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0LCB0aGVtZS5zbmFja0Jhci5yb290LmJhY2tncm91bmQgYXMgc3RyaW5nKSxcbiAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDE2cHgpJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAnY2FsYygxMDAlIC0gMTZweCknXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi50aGVtZS5zbmFja0Jhci5yb290LFxuICAgICAgICB9KSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKSxcbiAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYFNuYWNrQmFyLmhwOiR7aG9yaXpvbnRhbFBvc2l0aW9ufS52cDoke3ZlcnRpY2FsUG9zaXRpb259YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IF9fc3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PzogJ2F1dG8nLFxuICAgICAgICAgICAgbGVmdD86IDAsXG4gICAgICAgICAgICBtYXJnaW5SaWdodD86ICdhdXRvJyxcbiAgICAgICAgICAgIHJpZ2h0PzogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybT86IHN0cmluZyxcbiAgICAgICAgICAgIHRvcD86IG51bWJlclxuICAgICAgICAgICAgYm90dG9tPzogbnVtYmVyXG4gICAgICAgICAgfSA9IHsgfTtcbiAgICAgICAgICBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMudG9wID0gMDtcbiAgICAgICAgICB9IGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDE4MCUpJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy5tYXJnaW5SaWdodCA9IF9fc3R5bGVzLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBfX3N0eWxlcy5sZWZ0ID0gX19zdHlsZXMucmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfX3N0eWxlc1t0aGVtZS5nZXREaXJlY3Rpb24oaG9yaXpvbnRhbFBvc2l0aW9uIGFzIGFueSldID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9fc3R5bGVzO1xuICAgICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCAoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgfSksIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2JyID0gbmV3IEx5U25hY2tCYXJSZWYodGhpcy5fc25hY2tCYXJTZXJ2aWNlLCBzbmFja0JhciwgdGhpcy5hZnRlckRpc21pc3NlZCwgZHVyYXRpb24sIHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IHNicjtcbiAgICByZXR1cm4gc2JyO1xuICB9XG5cbiAgLyoqIERpc21pc3Mgc25hY2tCYXIgKi9cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzYnIgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyKSB7XG4gICAgICBzYnIuZGlzbWlzc1dpdGhBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==