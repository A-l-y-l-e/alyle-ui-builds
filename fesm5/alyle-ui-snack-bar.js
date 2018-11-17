import { Injectable, NgModule, defineInjectable, EventEmitter, Directive, TemplateRef, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { __assign } from 'tslib';
import { LyTheme2, LyOverlay, shadowBuilder, LyOverlayModule } from '@alyle/ui';

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
/**
 * @ignore
 * @type {?}
 */
var STYLE_PRIORITY = -2;
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
            this._theme.addStyle('SnackBar:close', ({
                opacity: 0
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
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
var STYLE_PRIORITY$1 = -2;
/** @type {?} */
var DEFAULT_HORIZONTAL_POSITION = 'end';
/** @type {?} */
var DEFAULT_VERTICAL_POSITION = 'bottom';
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
                    return (__assign((_a = { borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px', padding: '0 16px', minHeight: '48px', minWidth: '256px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 350ms", fontSize: theme.pxToRem(theme.typography.fontSize), boxShadow: shadowBuilder(4, (/** @type {?} */ (theme.snackBar.root.background))) }, _a[theme.getBreakpoint('XSmall')] = {
                        width: 'calc(100% - 16px)'
                    }, _a), theme.snackBar.root));
                }, undefined, undefined, STYLE_PRIORITY$1),
                this._theme.addStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function () {
                    var _a;
                    /** @type {?} */
                    var __styles = (_a = {},
                        _a[verticalPosition] = 0,
                        _a);
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
        /**
         * TODO: add support for `@keyframes`
         */
        getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
        this._theme.addStyle('SnackBar:open', ({
            opacity: 1
        }), snackBar.containerElement, undefined, STYLE_PRIORITY$1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktc25hY2stYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci1yZWYudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJTZXJ2aWNlIHtcbiAgX2N1cnJlbnRTbmFja0JhcjogTHlTbmFja0JhclJlZjtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJEaXNtaXNzIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5jb25zdCBERUZBVUxUX0RVUkFUSU9OID0gNmUzO1xuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyUmVmIHtcbiAgcHJpdmF0ZSBfdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBfZGlzbWlzc2VkQnlBY3Rpb24gPSBmYWxzZTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgYmVlbiBkaXNtaXNzZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FmdGVyRGlzbWlzc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgc25hY2sgYmFyIGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIGFmdGVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZnRlckRpc21pc3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gICAgcHJpdmF0ZSBfYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4sXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH0sIGR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT04pO1xuICB9XG5cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlci5lbWl0KHtkaXNtaXNzZWRCeUFjdGlvbjogdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb259KTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuY29tcGxldGUoKTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAvLyBjbGVhciBwcmV2aW91cyB0aW1lclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOmNsb3NlJywgKHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSksIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNuYWNrQmFyLmRlc3Ryb3koKTtcbiAgICAgIH0sIDM1MCk7XG4gICAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IG51bGw7XG4gICAgICB0aGlzLl9vdmVybGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGlzbWlzc1dpdGhBY3Rpb24oKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeU92ZXJsYXksIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyUmVmIH0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTiA9ICdlbmQnO1xuY29uc3QgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTiA9ICdib3R0b20nO1xuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyRGlzbWlzcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzbmFjayBiYXIgd2FzIGRpc21pc3NlZCB1c2luZyB0aGUgYWN0aW9uIGZuLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbHktc25hY2stYmFyXScsXG4gIGV4cG9ydEFzOiAnbHlTbmFja0Jhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhciB7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnbGVmdCcgfCAncmlnaHQnO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBvcGVuKCkge1xuICAgIC8vIGNsb3NlIHByZXZpb3VzIHNuYWNrQmFyIGlmIGV4aXN0XG4gICAgY29uc3Qgc2JyUHJldiA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnJQcmV2KSB7XG4gICAgICBzYnJQcmV2LmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgY29uc3QgaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5ob3Jpem9udGFsUG9zaXRpb24gfHwgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OO1xuICAgIGNvbnN0IHZlcnRpY2FsUG9zaXRpb24gPSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gfHwgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTjtcblxuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy5fdGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIC8vIHRoaXMgcmVtb3ZlIHByZXZpb3VzIHN0eWxlXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogW1xuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXInLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAnOHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICBtaW5XaWR0aDogJzI1NnB4JyxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDM1MG1zYCxcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCwgdGhlbWUuc25hY2tCYXIucm9vdC5iYWNrZ3JvdW5kIGFzIHN0cmluZyksXG4gICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnRoZW1lLnNuYWNrQmFyLnJvb3QsXG4gICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpLFxuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgX19zdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiAnYXV0bycsXG4gICAgICAgICAgICBsZWZ0PzogMCxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PzogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ/OiAwLFxuICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICBbdmVydGljYWxQb3NpdGlvbl06IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy5tYXJnaW5SaWdodCA9IF9fc3R5bGVzLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBfX3N0eWxlcy5sZWZ0ID0gX19zdHlsZXMucmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfX3N0eWxlc1tob3Jpem9udGFsUG9zaXRpb25dID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9fc3R5bGVzO1xuICAgICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICBdXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVE9ETzogYWRkIHN1cHBvcnQgZm9yIGBAa2V5ZnJhbWVzYFxuICAgICAqL1xuICAgIGdldENvbXB1dGVkU3R5bGUoc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuXG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCAoe1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0pLCBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICBjb25zdCBzYnIgPSBuZXcgTHlTbmFja0JhclJlZih0aGlzLl9zbmFja0JhclNlcnZpY2UsIHNuYWNrQmFyLCB0aGlzLmFmdGVyRGlzbWlzc2VkLCBkdXJhdGlvbiwgdGhpcy5fdGhlbWUpO1xuICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gc2JyO1xuICAgIHJldHVybiBzYnI7XG4gIH1cblxuICAvKiogRGlzbWlzcyBzbmFja0JhciAqL1xuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNiciA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnIpIHtcbiAgICAgIHNici5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlTbmFja0Jhcl0sXG4gIGV4cG9ydHM6IFtMeVNuYWNrQmFyXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiU1RZTEVfUFJJT1JJVFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBR0E7S0FLQzs7Z0JBTEEsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzRCQUxEO0NBR0E7Ozs7OztBQ0ZBO0lBS00sZ0JBQWdCLEdBQUcsR0FBRzs7Ozs7SUFFdEIsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUV6QjtJQVdFLHVCQUNVLGdCQUFtQyxFQUNuQyxRQUFnQyxFQUNoQywyQkFBNEQsRUFDcEUsUUFBZ0IsRUFDUixNQUFnQjtRQUwxQixpQkFVQztRQVRTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFpQztRQUU1RCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBZGxCLHVCQUFrQixHQUFHLEtBQUssQ0FBQzs7OztRQUdsQixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFhckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7WUFDdkIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCLEVBQUUsUUFBUSxJQUFJLGdCQUFnQixDQUFDLENBQUM7S0FDbEM7Ozs7OztJQWJELHNDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDNUM7Ozs7SUFhRCwrQkFBTzs7O0lBQVA7O1lBQ1EsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFROztZQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDekIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxFQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBQyxD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