import { Injectable, NgModule, defineInjectable, EventEmitter, Directive, TemplateRef, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { __assign } from 'tslib';
import { LyTheme2, LyOverlay, shadowBuilder, XPosition, YPosition, LyOverlayModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LySnackBarService = /** @class */ (function () {
    function LySnackBarService() {
    }
    LySnackBarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ LySnackBarService.ngInjectableDef = defineInjectable({ factory: function LySnackBarService_Factory() { return new LySnackBarService(); }, token: LySnackBarService, providedIn: "root" });
    return LySnackBarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_DURATION = 6e3;
var LySnackBarRef = /** @class */ (function () {
    function LySnackBarRef(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
        var _this = this;
        this._snackBarService = _snackBarService;
        this._overlay = _overlay;
        this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
        this._theme = _theme;
        this._dismissedByAction = false;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */
        this._afterDismissed = new Subject();
        this._timer = setTimeout(function () {
            _this.dismiss();
        }, duration || DEFAULT_DURATION);
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    LySnackBarRef.prototype.afterDismissed = /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    function () {
        return this._afterDismissed.asObservable();
    };
    /**
     * @return {?}
     */
    LySnackBarRef.prototype.dismiss = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var snackBar = this._overlay;
        /** @type {?} */
        var timer = this._timer;
        this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.next();
        this._afterDismissed.complete();
        if (snackBar) {
            if (timer) {
                // clear previous timer
                clearTimeout(timer);
            }
            snackBar.containerElement.classList.remove(this._theme.addStyle('SnackBar:open', null, null, null, null));
            setTimeout(function () {
                snackBar.destroy();
            }, 350);
            this._snackBarService._currentSnackBar = null;
            this._overlay = null;
        }
    };
    /**
     * @return {?}
     */
    LySnackBarRef.prototype.dismissWithAction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var snackBar = this._overlay;
        if (snackBar) {
            this._dismissedByAction = true;
            this.dismiss();
        }
    };
    return LySnackBarRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
/** @type {?} */
var DEFAULT_VERTICAL_POSITION = YPosition.below;
var LySnackBar = /** @class */ (function () {
    function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.afterDismissed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LySnackBar.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // close previous snackBar if exist
        /** @type {?} */
        var sbrPrev = this._snackBarService._currentSnackBar;
        if (sbrPrev) {
            sbrPrev.dismiss();
        }
        /** @type {?} */
        var duration = this.duration;
        /** @type {?} */
        var horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
        /** @type {?} */
        var verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
        /** @type {?} */
        var snackBar = this._overlay.create(this._templateRef, undefined, {
            styles: {
                // this remove previous style
                justifyContent: null
            },
            classes: [
                this._theme.addStyle('SnackBar', function (theme) {
                    var _a;
                    return (__assign((_a = { borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px', padding: '0 16px', minHeight: '48px', minWidth: '320px', maxWidth: '320px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms", fontSize: theme.pxToRem(theme.typography.fontSize), boxShadow: shadowBuilder(4, (/** @type {?} */ (theme.snackBar.root.background))) }, _a[theme.getBreakpoint('XSmall')] = {
                        width: 'calc(100% - 16px)',
                        minWidth: 'calc(100% - 16px)'
                    }, _a), theme.snackBar.root));
                }, undefined, undefined, STYLE_PRIORITY),
                this._theme.addStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
                    /** @type {?} */
                    var __styles = {};
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
        this._theme.requestAnimationFrame(function () {
            _this._theme.addStyle('SnackBar:open', ({
                opacity: 1,
                transform: 'translateY(0)'
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
        });
        /** @type {?} */
        var sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
        this._snackBarService._currentSnackBar = sbr;
        return sbr;
    };
    /** Dismiss snackBar */
    /**
     * Dismiss snackBar
     * @return {?}
     */
    LySnackBar.prototype.dismiss = /**
     * Dismiss snackBar
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sbr = this._snackBarService._currentSnackBar;
        if (sbr) {
            sbr.dismissWithAction();
        }
    };
    LySnackBar.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[ly-snack-bar]',
                    exportAs: 'lySnackBar'
                },] }
    ];
    /** @nocollapse */
    LySnackBar.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: LyTheme2 },
        { type: LyOverlay },
        { type: LySnackBarService }
    ]; };
    LySnackBar.propDecorators = {
        duration: [{ type: Input }],
        horizontalPosition: [{ type: Input }],
        verticalPosition: [{ type: Input }],
        afterDismissed: [{ type: Output }]
    };
    return LySnackBar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LySnackBarModule = /** @class */ (function () {
    function LySnackBarModule() {
    }
    LySnackBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [LyOverlayModule],
                    declarations: [LySnackBar],
                    exports: [LySnackBar]
                },] }
    ];
    return LySnackBarModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktc25hY2stYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci1yZWYudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJTZXJ2aWNlIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX2N1cnJlbnRTbmFja0JhcjogTHlTbmFja0JhclJlZjtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJEaXNtaXNzIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5jb25zdCBERUZBVUxUX0RVUkFUSU9OID0gNmUzO1xuXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhclJlZiB7XG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG4gIHByaXZhdGUgX2Rpc21pc3NlZEJ5QWN0aW9uID0gZmFsc2U7XG5cbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGUgdXNlciB0aGF0IHRoZSBzbmFjayBiYXIgaGFzIGJlZW4gZGlzbWlzc2VkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9hZnRlckRpc21pc3NlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHNuYWNrIGJhciBpcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBhZnRlckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZSxcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLFxuICAgIHByaXZhdGUgX2FmdGVyRGlzbWlzc2VkRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+LFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9LCBkdXJhdGlvbiB8fCBERUZBVUxUX0RVUkFUSU9OKTtcbiAgfVxuXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXIuZW1pdCh7ZGlzbWlzc2VkQnlBY3Rpb246IHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9ufSk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQubmV4dCgpO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdGltZXJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcjpvcGVuJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNuYWNrQmFyLmRlc3Ryb3koKTtcbiAgICAgIH0sIDM1MCk7XG4gICAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IG51bGw7XG4gICAgICB0aGlzLl9vdmVybGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGlzbWlzc1dpdGhBY3Rpb24oKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeU92ZXJsYXksIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyLCBYUG9zaXRpb24sIFlQb3NpdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5jb25zdCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OID0gWVBvc2l0aW9uLmJlbG93O1xuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyRGlzbWlzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzbmFjayBiYXIgd2FzIGRpc21pc3NlZCB1c2luZyB0aGUgYWN0aW9uIGZuLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbHktc25hY2stYmFyXScsXG4gIGV4cG9ydEFzOiAnbHlTbmFja0Jhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhciB7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicgfCBYUG9zaXRpb247XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246IFlQb3NpdGlvbjtcbiAgQE91dHB1dCgpIGFmdGVyRGlzbWlzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgb3BlbigpIHtcbiAgICAvLyBjbG9zZSBwcmV2aW91cyBzbmFja0JhciBpZiBleGlzdFxuICAgIGNvbnN0IHNiclByZXYgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyUHJldikge1xuICAgICAgc2JyUHJldi5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGNvbnN0IGhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uIHx8IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTjtcbiAgICBjb25zdCB2ZXJ0aWNhbFBvc2l0aW9uID0gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uIHx8IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT047XG5cbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX3RlbXBsYXRlUmVmLCB1bmRlZmluZWQsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICAvLyB0aGlzIHJlbW92ZSBwcmV2aW91cyBzdHlsZVxuICAgICAgICBqdXN0aWZ5Q29udGVudDogbnVsbFxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIG1hcmdpbjogJzhweCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgbWluV2lkdGg6ICczMjBweCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICczMjBweCcsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzNTBtcywgdHJhbnNmb3JtICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAzNTBtc2AsXG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQsIHRoZW1lLnNuYWNrQmFyLnJvb3QuYmFja2dyb3VuZCBhcyBzdHJpbmcpLFxuICAgICAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMTZweCknLFxuICAgICAgICAgICAgbWluV2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnRoZW1lLnNuYWNrQmFyLnJvb3QsXG4gICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpLFxuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgX19zdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiAnYXV0bycsXG4gICAgICAgICAgICBsZWZ0PzogMCxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PzogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ/OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nLFxuICAgICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB9ID0geyB9O1xuICAgICAgICAgIGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xODAlKSc7XG4gICAgICAgICAgICBfX3N0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIH0gaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgICAgX19zdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLm1hcmdpblJpZ2h0ID0gX19zdHlsZXMubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmxlZnQgPSBfX3N0eWxlcy5yaWdodCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9fc3R5bGVzW3RoZW1lLmdldERpcmVjdGlvbihob3Jpem9udGFsUG9zaXRpb24gYXMgYW55KV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX19zdHlsZXM7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsICh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICB9KSwgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzYnIgPSBuZXcgTHlTbmFja0JhclJlZih0aGlzLl9zbmFja0JhclNlcnZpY2UsIHNuYWNrQmFyLCB0aGlzLmFmdGVyRGlzbWlzc2VkLCBkdXJhdGlvbiwgdGhpcy5fdGhlbWUpO1xuICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gc2JyO1xuICAgIHJldHVybiBzYnI7XG4gIH1cblxuICAvKiogRGlzbWlzcyBzbmFja0JhciAqL1xuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNiciA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnIpIHtcbiAgICAgIHNici5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlTbmFja0Jhcl0sXG4gIGV4cG9ydHM6IFtMeVNuYWNrQmFyXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFHQTtLQU1DOztnQkFOQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBTEQ7Q0FHQTs7Ozs7O0FDRkE7SUFLTSxnQkFBZ0IsR0FBRyxHQUFHO0FBRTVCO0lBV0UsdUJBQ1UsZ0JBQW1DLEVBQ25DLFFBQWdDLEVBQ2hDLDJCQUE0RCxFQUNwRSxRQUFnQixFQUNSLE1BQWdCO1FBTDFCLGlCQVVDO1FBVFMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQUNoQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQWlDO1FBRTVELFdBQU0sR0FBTixNQUFNLENBQVU7UUFkbEIsdUJBQWtC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