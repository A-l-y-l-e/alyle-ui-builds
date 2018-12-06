import { Injectable, NgModule, Directive, Input, TemplateRef, Output, EventEmitter, defineInjectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LyTheme2, LyOverlay, shadowBuilder, XPosition, YPosition, LyOverlayModule } from '@alyle/ui';

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
            snackBar.containerElement.classList.remove(this._theme.addStyle('SnackBar:open', null, null, null, null));
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
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_HORIZONTAL_POSITION = XPosition.after;
/** @type {?} */
const DEFAULT_VERTICAL_POSITION = YPosition.below;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktc25hY2stYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci1yZWYudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJTZXJ2aWNlIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX2N1cnJlbnRTbmFja0JhcjogTHlTbmFja0JhclJlZjtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJEaXNtaXNzIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5jb25zdCBERUZBVUxUX0RVUkFUSU9OID0gNmUzO1xuXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhclJlZiB7XG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG4gIHByaXZhdGUgX2Rpc21pc3NlZEJ5QWN0aW9uID0gZmFsc2U7XG5cbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGUgdXNlciB0aGF0IHRoZSBzbmFjayBiYXIgaGFzIGJlZW4gZGlzbWlzc2VkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9hZnRlckRpc21pc3NlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHNuYWNrIGJhciBpcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBhZnRlckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZSxcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLFxuICAgIHByaXZhdGUgX2FmdGVyRGlzbWlzc2VkRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+LFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9LCBkdXJhdGlvbiB8fCBERUZBVUxUX0RVUkFUSU9OKTtcbiAgfVxuXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXIuZW1pdCh7ZGlzbWlzc2VkQnlBY3Rpb246IHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9ufSk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQubmV4dCgpO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdGltZXJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcjpvcGVuJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNuYWNrQmFyLmRlc3Ryb3koKTtcbiAgICAgIH0sIDM1MCk7XG4gICAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IG51bGw7XG4gICAgICB0aGlzLl9vdmVybGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGlzbWlzc1dpdGhBY3Rpb24oKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeU92ZXJsYXksIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyLCBYUG9zaXRpb24sIFlQb3NpdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5jb25zdCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OID0gWVBvc2l0aW9uLmJlbG93O1xuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyRGlzbWlzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzbmFjayBiYXIgd2FzIGRpc21pc3NlZCB1c2luZyB0aGUgYWN0aW9uIGZuLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbHktc25hY2stYmFyXScsXG4gIGV4cG9ydEFzOiAnbHlTbmFja0Jhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhciB7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicgfCBYUG9zaXRpb247XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246IFlQb3NpdGlvbjtcbiAgQE91dHB1dCgpIGFmdGVyRGlzbWlzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgb3BlbigpIHtcbiAgICAvLyBjbG9zZSBwcmV2aW91cyBzbmFja0JhciBpZiBleGlzdFxuICAgIGNvbnN0IHNiclByZXYgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyUHJldikge1xuICAgICAgc2JyUHJldi5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGNvbnN0IGhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uIHx8IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTjtcbiAgICBjb25zdCB2ZXJ0aWNhbFBvc2l0aW9uID0gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uIHx8IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT047XG5cbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX3RlbXBsYXRlUmVmLCB1bmRlZmluZWQsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICAvLyB0aGlzIHJlbW92ZSBwcmV2aW91cyBzdHlsZVxuICAgICAgICBqdXN0aWZ5Q29udGVudDogbnVsbFxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIG1hcmdpbjogJzhweCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgbWluV2lkdGg6ICczMjBweCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICczMjBweCcsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzNTBtcywgdHJhbnNmb3JtICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAzNTBtc2AsXG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQsIHRoZW1lLnNuYWNrQmFyLnJvb3QuYmFja2dyb3VuZCBhcyBzdHJpbmcpLFxuICAgICAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMTZweCknLFxuICAgICAgICAgICAgbWluV2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnRoZW1lLnNuYWNrQmFyLnJvb3QsXG4gICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpLFxuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgX19zdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiAnYXV0bycsXG4gICAgICAgICAgICBsZWZ0PzogMCxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PzogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ/OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nLFxuICAgICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB9ID0geyB9O1xuICAgICAgICAgIGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xODAlKSc7XG4gICAgICAgICAgICBfX3N0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIH0gaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgICAgX19zdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLm1hcmdpblJpZ2h0ID0gX19zdHlsZXMubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmxlZnQgPSBfX3N0eWxlcy5yaWdodCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9fc3R5bGVzW3RoZW1lLmdldERpcmVjdGlvbihob3Jpem9udGFsUG9zaXRpb24gYXMgYW55KV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX19zdHlsZXM7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsICh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICB9KSwgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzYnIgPSBuZXcgTHlTbmFja0JhclJlZih0aGlzLl9zbmFja0JhclNlcnZpY2UsIHNuYWNrQmFyLCB0aGlzLmFmdGVyRGlzbWlzc2VkLCBkdXJhdGlvbiwgdGhpcy5fdGhlbWUpO1xuICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gc2JyO1xuICAgIHJldHVybiBzYnI7XG4gIH1cblxuICAvKiogRGlzbWlzcyBzbmFja0JhciAqL1xuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNiciA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnIpIHtcbiAgICAgIHNici5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlTbmFja0Jhcl0sXG4gIGV4cG9ydHM6IFtMeVNuYWNrQmFyXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQU1hLGlCQUFpQjs7O1lBSDdCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7QUNKRDtNQUtNLGdCQUFnQixHQUFHLEdBQUc7QUFFNUIsTUFBYSxhQUFhOzs7Ozs7OztJQVd4QixZQUNVLGdCQUFtQyxFQUNuQyxRQUFnQyxFQUNoQywyQkFBNEQsRUFDcEUsUUFBZ0IsRUFDUixNQUFnQjtRQUpoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQ2hDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBaUM7UUFFNUQsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQWRsQix1QkFBa0IsR0FB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