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
var STYLE_PRIORITY$1 = -2;
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
                }, undefined, undefined, STYLE_PRIORITY$1),
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
                }, undefined, undefined, STYLE_PRIORITY$1)
            ]
        });
        this._theme.requestAnimationFrame(function () {
            _this._theme.addStyle('SnackBar:open', ({
                opacity: 1,
                transform: 'translateY(0)'
            }), snackBar.containerElement, undefined, STYLE_PRIORITY$1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktc25hY2stYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci1yZWYudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc25hY2stYmFyL3NuYWNrLWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJTZXJ2aWNlIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX2N1cnJlbnRTbmFja0JhcjogTHlTbmFja0JhclJlZjtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJEaXNtaXNzIH0gZnJvbSAnLi9zbmFjay1iYXInO1xuXG5jb25zdCBERUZBVUxUX0RVUkFUSU9OID0gNmUzO1xuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyUmVmIHtcbiAgcHJpdmF0ZSBfdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBfZGlzbWlzc2VkQnlBY3Rpb24gPSBmYWxzZTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgYmVlbiBkaXNtaXNzZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FmdGVyRGlzbWlzc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgc25hY2sgYmFyIGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIGFmdGVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZnRlckRpc21pc3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gICAgcHJpdmF0ZSBfYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4sXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH0sIGR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT04pO1xuICB9XG5cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlci5lbWl0KHtkaXNtaXNzZWRCeUFjdGlvbjogdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb259KTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuY29tcGxldGUoKTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAvLyBjbGVhciBwcmV2aW91cyB0aW1lclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuXG4gICAgICBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc25hY2tCYXIuZGVzdHJveSgpO1xuICAgICAgfSwgMzUwKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gbnVsbDtcbiAgICAgIHRoaXMuX292ZXJsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuICBkaXNtaXNzV2l0aEFjdGlvbigpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICB0aGlzLl9kaXNtaXNzZWRCeUFjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIEx5T3ZlcmxheSwgVGhlbWVWYXJpYWJsZXMsIHNoYWRvd0J1aWxkZXIsIFhQb3NpdGlvbiwgWVBvc2l0aW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyUmVmIH0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcbmNvbnN0IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT04gPSBZUG9zaXRpb24uYmVsb3c7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIHtcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyB8IFhQb3NpdGlvbjtcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBvcGVuKCkge1xuICAgIC8vIGNsb3NlIHByZXZpb3VzIHNuYWNrQmFyIGlmIGV4aXN0XG4gICAgY29uc3Qgc2JyUHJldiA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnJQcmV2KSB7XG4gICAgICBzYnJQcmV2LmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgY29uc3QgaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5ob3Jpem9udGFsUG9zaXRpb24gfHwgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OO1xuICAgIGNvbnN0IHZlcnRpY2FsUG9zaXRpb24gPSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gfHwgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTjtcblxuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy5fdGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIC8vIHRoaXMgcmVtb3ZlIHByZXZpb3VzIHN0eWxlXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogW1xuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXInLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAnOHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICBtaW5XaWR0aDogJzMyMHB4JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzMyMHB4JyxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDM1MG1zLCB0cmFuc2Zvcm0gJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IDM1MG1zYCxcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCwgdGhlbWUuc25hY2tCYXIucm9vdC5iYWNrZ3JvdW5kIGFzIHN0cmluZyksXG4gICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KScsXG4gICAgICAgICAgICBtaW5XaWR0aDogJ2NhbGMoMTAwJSAtIDE2cHgpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4udGhlbWUuc25hY2tCYXIucm9vdCxcbiAgICAgICAgfSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSksXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBTbmFja0Jhci5ocDoke2hvcml6b250YWxQb3NpdGlvbn0udnA6JHt2ZXJ0aWNhbFBvc2l0aW9ufWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBfX3N0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86ICdhdXRvJyxcbiAgICAgICAgICAgIGxlZnQ/OiAwLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiAnYXV0bycsXG4gICAgICAgICAgICByaWdodD86IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmcsXG4gICAgICAgICAgICB0b3A/OiBudW1iZXJcbiAgICAgICAgICAgIGJvdHRvbT86IG51bWJlclxuICAgICAgICAgIH0gPSB7IH07XG4gICAgICAgICAgaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgICAgX19zdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTE4MCUpJztcbiAgICAgICAgICAgIF9fc3R5bGVzLnRvcCA9IDA7XG4gICAgICAgICAgfSBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgICBfX3N0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxODAlKSc7XG4gICAgICAgICAgICBfX3N0eWxlcy5ib3R0b20gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgX19zdHlsZXMubWFyZ2luUmlnaHQgPSBfX3N0eWxlcy5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgX19zdHlsZXMubGVmdCA9IF9fc3R5bGVzLnJpZ2h0ID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX19zdHlsZXNbdGhlbWUuZ2V0RGlyZWN0aW9uKGhvcml6b250YWxQb3NpdGlvbiBhcyBhbnkpXSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfX3N0eWxlcztcbiAgICAgICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fdGhlbWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcjpvcGVuJywgKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgIH0pLCBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNiciA9IG5ldyBMeVNuYWNrQmFyUmVmKHRoaXMuX3NuYWNrQmFyU2VydmljZSwgc25hY2tCYXIsIHRoaXMuYWZ0ZXJEaXNtaXNzZWQsIGR1cmF0aW9uLCB0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBzYnI7XG4gICAgcmV0dXJuIHNicjtcbiAgfVxuXG4gIC8qKiBEaXNtaXNzIHNuYWNrQmFyICovXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc2JyID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNicikge1xuICAgICAgc2JyLmRpc21pc3NXaXRoQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXIgfSBmcm9tICcuL3NuYWNrLWJhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMeU92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVNuYWNrQmFyXSxcbiAgZXhwb3J0czogW0x5U25hY2tCYXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJTVFlMRV9QUklPUklUWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFHQTtLQU1DOztnQkFOQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBTEQ7Q0FHQTs7Ozs7O0FDRkE7SUFLTSxnQkFBZ0IsR0FBRyxHQUFHO0FBSTVCO0lBV0UsdUJBQ1UsZ0JBQW1DLEVBQ25DLFFBQWdDLEVBQ2hDLDJCQUE0RCxFQUNwRSxRQUFnQixFQUNSLE1BQWdCO1FBTDFCLGlCQVVDO1FBVFMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQUNoQyxnQ0FB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