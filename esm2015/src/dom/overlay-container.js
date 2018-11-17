/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Component, Inject, HostListener, ElementRef } from '@angular/core';
import { Platform } from '../platform/index';
import { LyTheme2 } from '../theme/theme2.service';
import { LyCoreStyles } from '../styles/core-styles';
import { DOCUMENT } from '@angular/common';
import { fromEvent, empty } from 'rxjs';
import { map, share, auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../theme/theme2.service";
/** @type {?} */
const styles = (theme) => ({
    overlayBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay,
        pointerEvents: 'none'
    }
});
const ɵ0 = styles;
export class WindowScrollService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        if (Platform.isBrowser) {
            this.scroll$ = fromEvent(window, 'scroll').pipe(auditTime(200), map(() => {
                return window.scrollY || this.document.documentElement.scrollTop;
            }), share());
        }
        else {
            this.scroll$ = empty();
        }
    }
}
WindowScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WindowScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ WindowScrollService.ngInjectableDef = i0.defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(i0.inject(i1.DOCUMENT)); }, token: WindowScrollService, providedIn: "root" });
if (false) {
    /** @type {?} */
    WindowScrollService.prototype.scroll$;
    /** @type {?} */
    WindowScrollService.prototype.document;
}
export class LyOverlayContainer {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles);
        this._items = new Set();
        if (Platform.isBrowser) {
            /** @type {?} */
            const container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    /**
     * @return {?}
     */
    get containerElement() {
        return this._containerElement;
    }
    /**
     * Add instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    _add(item) {
        this._items.add(item);
        this.containerElement.appendChild(item);
        this._update();
    }
    /**
     * Remove instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    _remove(item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    }
    /**
     * Update styles for overlay container
     * @ignore
     * @return {?}
     */
    _update() {
        if (this._items.size) {
            if (!this._isActiveOverlayContainer) {
                this._isActiveOverlayContainer = true;
                this._containerElement.classList.add(this._classes.overlayBackdrop);
            }
        }
        else if (this._isActiveOverlayContainer) {
            this._containerElement.classList.remove(this._classes.overlayBackdrop);
            this._isActiveOverlayContainer = false;
        }
    }
}
LyOverlayContainer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyOverlayContainer.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyOverlayContainer.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(i0.inject(i2.LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyOverlayContainer.prototype._classes;
    /** @type {?} */
    LyOverlayContainer.prototype._containerElement;
    /** @type {?} */
    LyOverlayContainer.prototype._items;
    /** @type {?} */
    LyOverlayContainer.prototype._isActiveOverlayContainer;
    /** @type {?} */
    LyOverlayContainer.prototype.theme;
}
/** @type {?} */
const BACKDROP_STYLES = ({
    backdrop: {
        pointerEvents: 'all'
    }
});
export class LyOverlayBackdrop {
    /**
     * @param {?} el
     * @param {?} _theme
     * @param {?} _overlayConfig
     * @param {?} commonStyles
     */
    constructor(el, _theme, _overlayConfig, commonStyles) {
        this._theme = _theme;
        this._overlayConfig = _overlayConfig;
        /**
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(BACKDROP_STYLES);
        el.nativeElement.classList.add(commonStyles.classes.fill);
        if (_overlayConfig.backdrop) {
            el.nativeElement.classList.add(this.classes.backdrop);
        }
    }
    /**
     * @return {?}
     */
    onclick() {
        this._overlayConfig.fnDestroy();
    }
}
LyOverlayBackdrop.decorators = [
    { type: Component, args: [{
                selector: 'ly-overlay-backdrop',
                template: ``
            }] }
];
/** @nocollapse */
LyOverlayBackdrop.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 },
    { type: undefined, decorators: [{ type: Inject, args: ['overlayConfig',] }] },
    { type: LyCoreStyles }
];
LyOverlayBackdrop.propDecorators = {
    onclick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @ignore
     * @type {?}
     */
    LyOverlayBackdrop.prototype.classes;
    /** @type {?} */
    LyOverlayBackdrop.prototype._theme;
    /** @type {?} */
    LyOverlayBackdrop.prototype._overlayConfig;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztNQUdqRCxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLGVBQWUsRUFBRTtRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUM1QixhQUFhLEVBQUUsTUFBTTtLQUN0QjtDQUNGLENBQUM7O0FBTUYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUk5QixZQUM0QixRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUV2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFF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LEdBQU4sTUFBTSxDQUFVO1FBQ1MsbUJBQWMsR0FBZCxjQUFjLENBQUs7Ozs7UUFQdEQsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBVW5ELEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7SUFic0IsT0FBTztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQVRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBakhxRCxVQUFVO1lBRXZELFFBQVE7NENBeUhaLE1BQU0sU0FBQyxlQUFlO1lBeEhsQixZQUFZOzs7c0JBa0hsQixZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQURyQixvQ0FBcUQ7O0lBTW5ELG1DQUF3Qjs7SUFDeEIsMkNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlDb3JlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsICBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5QmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufSk7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93U2Nyb2xsU2VydmljZSB7XG5cbiAgcHVibGljIHNjcm9sbCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMjAwKSxcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmUoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGwkID0gZW1wdHkoKTtcbiAgICB9XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSBfY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9pdGVtcyA9IG5ldyBTZXQ8YW55PigpO1xuICBwcml2YXRlIF9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXI6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2x5LW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9hZGQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW1zLmFkZChpdGVtKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAgIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX3JlbW92ZShpdGVtKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3R5bGVzIGZvciBvdmVybGF5IGNvbnRhaW5lclxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zLnNpemUpIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgQkFDS0RST1BfU1RZTEVTID0gKHtcbiAgYmFja2Ryb3A6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJ1xuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIC8qKiBAaWdub3JlICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KEJBQ0tEUk9QX1NUWUxFUyk7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgICBpZiAoX292ZXJsYXlDb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYmFja2Ryb3ApO1xuICAgIH1cbiAgfVxufVxuIl19