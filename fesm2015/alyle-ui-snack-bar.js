import { Injectable, NgModule, Directive, Input, TemplateRef, Output, EventEmitter, defineInjectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LyTheme2, LyOverlay, shadowBuilder, LyOverlayModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LySnackBarService {
}
LySnackBarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ LySnackBarService.ngInjectableDef = defineInjectable({ factory: function LySnackBarService_Factory() { return new LySnackBarService(); }, token: LySnackBarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_DURATION = 6e3;
/**
 * @ignore
 * @type {?}
 */
const STYLE_PRIORITY = -2;
class LySnackBarRef {
    /**
     * @param {?} _snackBarService
     * @param {?} _overlay
     * @param {?} _afterDismissedEventEmitter
     * @param {?} duration
     * @param {?} _theme
     */
    constructor(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
        this._snackBarService = _snackBarService;
        this._overlay = _overlay;
        this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
        this._theme = _theme;
        this._dismissedByAction = false;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */
        this._afterDismissed = new Subject();
        this._timer = setTimeout(() => {
            this.dismiss();
        }, duration || DEFAULT_DURATION);
    }
    /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    afterDismissed() {
        return this._afterDismissed.asObservable();
    }
    /**
     * @return {?}
     */
    dismiss() {
        /** @type {?} */
        const snackBar = this._overlay;
        /** @type {?} */
        const timer = this._timer;
        this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.next();
        this._afterDismissed.complete();
        if (snackBar) {
            if (timer) {
                // clear previous timer
                clearTimeout(timer);
            }
            this._theme.addStyle('SnackBar:close', ({
                opacity: 0
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
            setTimeout(() => {
                snackBar.destroy();
            }, 350);
            this._snackBarService._currentSnackBar = null;
            this._overlay = null;
        }
    }
    /**
     * @return {?}
     */
    dismissWithAction() {
        /** @type {?} */
        const snackBar = this._overlay;
        if (snackBar) {
            this._dismissedByAction = true;
            this.dismiss();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY$1 = -2;
/** @type {?} */
const DEFAULT_HORIZONTAL_POSITION = 'end';
/** @type {?} */
const DEFAULT_VERTICAL_POSITION = 'bottom';
class LySnackBar {
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
                    } }, theme.snackBar.root)), undefined, undefined, STYLE_PRIORITY$1),
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
                }, undefined, undefined, STYLE_PRIORITY$1)
            ]
        });
        this._theme.requestAnimationFrame(() => {
            this._theme.addStyle('SnackBar:open', ({
                opacity: 1
            }), snackBar.containerElement, undefined, STYLE_PRIORITY$1);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LySnackBarModule {
}
LySnackBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [LyOverlayModule],
                declarations: [LySnackBar],
                exports: [LySnackBar]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LySnackBarModule, LySnackBar, LySnackBarService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktc25hY2stYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci1yZWYudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJTZXJ2aWNlIHtcbiAgX2N1cnJlbnRTbmFja0JhcjogTHlTbmFja0JhclJlZjtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJEaXNtaXNzIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5jb25zdCBERUZBVUxUX0RVUkFUSU9OID0gNmUzO1xuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyUmVmIHtcbiAgcHJpdmF0ZSBfdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBfZGlzbWlzc2VkQnlBY3Rpb24gPSBmYWxzZTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgYmVlbiBkaXNtaXNzZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FmdGVyRGlzbWlzc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgc25hY2sgYmFyIGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIGFmdGVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZnRlckRpc21pc3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gICAgcHJpdmF0ZSBfYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4sXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH0sIGR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT04pO1xuICB9XG5cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlci5lbWl0KHtkaXNtaXNzZWRCeUFjdGlvbjogdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb259KTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuY29tcGxldGUoKTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAvLyBjbGVhciBwcmV2aW91cyB0aW1lclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOmNsb3NlJywgKHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSksIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNuYWNrQmFyLmRlc3Ryb3koKTtcbiAgICAgIH0sIDM1MCk7XG4gICAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IG51bGw7XG4gICAgICB0aGlzLl9vdmVybGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGlzbWlzc1dpdGhBY3Rpb24oKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIEx5T3ZlcmxheSwgVGhlbWVWYXJpYWJsZXMsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJSZWYgfSBmcm9tICcuL3NuYWNrLWJhci1yZWYnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OID0gJ2VuZCc7XG5jb25zdCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OID0gJ2JvdHRvbSc7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIHtcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdsZWZ0JyB8ICdyaWdodCc7XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIEBPdXRwdXQoKSBhZnRlckRpc21pc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZVxuICApIHsgfVxuXG4gIG9wZW4oKSB7XG4gICAgLy8gY2xvc2UgcHJldmlvdXMgc25hY2tCYXIgaWYgZXhpc3RcbiAgICBjb25zdCBzYnJQcmV2ID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNiclByZXYpIHtcbiAgICAgIHNiclByZXYuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiB8fCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT047XG4gICAgY29uc3QgdmVydGljYWxQb3NpdGlvbiA9IHRoaXMudmVydGljYWxQb3NpdGlvbiB8fCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OO1xuXG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLl90ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgLy8gdGhpcyByZW1vdmUgcHJldmlvdXMgc3R5bGVcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiBbXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcicsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBtYXJnaW46ICc4cHgnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgIG1pbldpZHRoOiAnMjU2cHgnLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzUwbXNgLFxuICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpLFxuICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0LCB0aGVtZS5zbmFja0Jhci5yb290LmJhY2tncm91bmQgYXMgc3RyaW5nKSxcbiAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDE2cHgpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4udGhlbWUuc25hY2tCYXIucm9vdCxcbiAgICAgICAgfSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSksXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBTbmFja0Jhci5ocDoke2hvcml6b250YWxQb3NpdGlvbn0udnA6JHt2ZXJ0aWNhbFBvc2l0aW9ufWAsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBfX3N0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86ICdhdXRvJyxcbiAgICAgICAgICAgIGxlZnQ/OiAwLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiAnYXV0bycsXG4gICAgICAgICAgICByaWdodD86IDAsXG4gICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgIFt2ZXJ0aWNhbFBvc2l0aW9uXTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLm1hcmdpblJpZ2h0ID0gX19zdHlsZXMubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmxlZnQgPSBfX3N0eWxlcy5yaWdodCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9fc3R5bGVzW2hvcml6b250YWxQb3NpdGlvbl0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX19zdHlsZXM7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsICh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pLCBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNiciA9IG5ldyBMeVNuYWNrQmFyUmVmKHRoaXMuX3NuYWNrQmFyU2VydmljZSwgc25hY2tCYXIsIHRoaXMuYWZ0ZXJEaXNtaXNzZWQsIGR1cmF0aW9uLCB0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBzYnI7XG4gICAgcmV0dXJuIHNicjtcbiAgfVxuXG4gIC8qKiBEaXNtaXNzIHNuYWNrQmFyICovXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc2JyID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNicikge1xuICAgICAgc2JyLmRpc21pc3NXaXRoQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXIgfSBmcm9tICcuL3NuYWNrLWJhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMeU92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVNuYWNrQmFyXSxcbiAgZXhwb3J0czogW0x5U25hY2tCYXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJTVFlMRV9QUklPUklUWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQU1hLGlCQUFpQjs7O1lBSDdCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7QUNKRDtNQUtNLGdCQUFnQixHQUFHLEdBQUc7Ozs7O01BRXRCLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFFekIsTUFBYSxhQUFhOzs7Ozs7OztJQVd4QixZQUNVLGdCQUFtQyxFQUNuQyxRQUFnQyxFQUNoQywyQkFBNEQsRUFDcEUsUUFBZ0IsRUFDUixNQUFnQjtRQUpoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQ2hDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBaUM7UUFFNUQsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQWRsQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFHbEIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBYXJELElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQixFQUFFLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQWJELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDNUM7Ozs7SUFhRCxPQUFPOztjQUNDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTs7Y0FDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3pCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsRUFBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FB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