/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TemplateRef } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { LyOverlayConfig } from './overlay-config';
import { LyOverlayBackdrop } from './overlay-backdrop';
import { createOverlayInjector } from './overlay-injector';
import { Platform } from '../platform/index';
/**
 * @template T
 */
export class OverlayFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     * @param {?} _templateRefOrComponent
     * @param {?} _overlayContainer
     * @param {?} _context
     * @param {?} _injector
     * @param {?} windowScroll
     * @param {?} resizeService
     * @param {?=} config
     */
    constructor(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this._windowSRSub = Subscription.EMPTY;
        this._config = config = Object.assign({}, new LyOverlayConfig(), config);
        this._el = document.createElement('div');
        /** @type {?} */
        const __styles = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'all'
        };
        if (config) {
            Object.assign(__styles, config.styles);
        }
        /** @type {?} */
        const newInjector = createOverlayInjector(this._injector, Object.assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
        this._updateStyles(__styles);
        if (config) {
            if (config.onResizeScroll) {
                this.onResizeScroll = config.onResizeScroll;
            }
            this._windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(() => {
                if (this.onResizeScroll) {
                    this.onResizeScroll();
                }
            });
            if (config.classes) {
                /** @type {?} */
                const classes = config.classes;
                classes.forEach((className) => ((/** @type {?} */ (this._el))).classList.add(className));
            }
        }
        if (config.hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            /** @type {?} */
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
        }
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    /**
     * @return {?}
     */
    get containerElement() {
        return (/** @type {?} */ (this._el));
    }
    /**
     * @return {?}
     */
    get componentRef() {
        return this._compRef;
    }
    /**
     * @private
     * @param {?} __styles
     * @return {?}
     */
    _updateStyles(__styles) {
        /** Apply styles */
        /** set styles */
        for (const key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                /** @type {?} */
                const styleVal = __styles[key];
                if (styleVal != null) {
                    (/** @type {?} */ (this._el)).style[key] = typeof __styles[key] === 'number' ? `${styleVal}px` : styleVal;
                }
            }
        }
    }
    /**
     * @private
     * @param {?} type
     * @param {?} context
     * @param {?} injector
     * @return {?}
     */
    _appendComponentToBody(type, context, injector) {
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
            /** @type {?} */
            const viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(_ => (/** @type {?} */ (this._el)).appendChild(_));
            // Append DOM element to the body
            this._overlayContainer._add(this._el);
        }
        else if (typeof type === 'string') {
            (/** @type {?} */ (this._el)).innerText = type;
            this._overlayContainer._add(this._el);
        }
        else {
            this._compRef = this._generateComponent(type, injector);
            this._appRef.attachView(this._compRef.hostView);
            (/** @type {?} */ (this._el)).appendChild(this._compRef.location.nativeElement);
            this._overlayContainer._add(this._el);
        }
    }
    /**
     * @private
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    _generateComponent(type, injector) {
        /** @type {?} */
        const factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    }
    /**
     * Detaches a view from dirty checking again of ApplicationRef.
     * @return {?}
     */
    detach() {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
        if (this._compRef) {
            this._appRef.detachView(this._compRef.hostView);
        }
    }
    /**
     * Remove element of DOM
     * @return {?}
     */
    remove() {
        if (this._viewRef) {
            this._viewRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        else if (this._compRef) {
            this._compRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
            this._compRef = null;
        }
        else if (this._el) {
            // remove if template is string
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        if (this._compRefOverlayBackdrop) {
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            this._compRefOverlayBackdrop.destroy();
            /** @type {?} */
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this._windowSRSub.unsubscribe();
        this._resetScroll();
    }
    /**
     * Detach & remove
     * @return {?}
     */
    destroy() {
        this.detach();
        this.remove();
    }
    /**
     * @private
     * @return {?}
     */
    _hiddeScroll() {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            /** @type {?} */
            const scrollWidth = window.innerWidth - window.document.body.clientWidth;
            if (scrollWidth) {
                /** @type {?} */
                const computedStyle = getComputedStyle(window.document.body);
                this._paddingRight = computedStyle.getPropertyValue('padding-right');
                window.document.body.style.paddingRight = `calc(${scrollWidth}px + ${this._paddingRight})`;
            }
            window.document.body.style.overflow = 'hidden';
        }
    }
    /**
     * @private
     * @return {?}
     */
    _resetScroll() {
        if (Platform.isBrowser && this._config.hasBackdrop && !this._overlayContainer.overlayLen) {
            if (this._paddingRight) {
                window.document.body.style.paddingRight = this._paddingRight;
                this._paddingRight = null;
            }
            window.document.body.style.overflow = null;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._viewRef;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._el;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._compRef;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._compRefOverlayBackdrop;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._windowSRSub;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._paddingRight;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._config;
    /**
     * Function that will be called on scroll or resize event
     * @type {?}
     */
    OverlayFactory.prototype.onResizeScroll;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._overlayContainer;
    /**
     * @type {?}
     * @private
     */
    OverlayFactory.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2RvbS9vdmVybGF5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMkUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTdDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7Ozs7Ozs7SUFtQnpCLFlBQ1UseUJBQW1ELEVBQ25ELE9BQXVCLEVBQy9CLHVCQUE0RCxFQUNwRCxpQkFBcUMsRUFDN0MsUUFBYSxFQUNMLFNBQW1CLEVBQzNCLFlBQXVCLEVBQ3ZCLGFBQXdCLEVBQ3hCLE1BQXdCO1FBUmhCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUVyQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBcEJyQixpQkFBWSxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBeUJ0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0scUJBQVEsSUFBSSxlQUFlLEVBQUUsRUFBSyxNQUFNLENBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O2NBQ25DLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFB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S0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7OztJQUNPLFlBQVk7UUFDbEIsSUFBSSxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTtZQUN4RixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDM0I7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM1QztJQUNILENBQUM7Q0FDRjs7Ozs7O0lBdExDLGtDQUF1Qzs7Ozs7SUFDdkMsNkJBQTZCOzs7OztJQUM3QixrQ0FBeUM7Ozs7O0lBQ3pDLGlEQUFtRDs7Ozs7SUFDbkQsc0NBQXdEOzs7OztJQUV4RCx1Q0FBcUM7Ozs7O0lBQ3JDLGlDQUFpQzs7Ozs7SUFHakMsd0NBQW9DOzs7OztJQVNsQyxtREFBMkQ7Ozs7O0lBQzNELGlDQUErQjs7Ozs7SUFFL0IsMkNBQTZDOzs7OztJQUU3QyxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbWJlZGRlZFZpZXdSZWYsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBBcHBsaWNhdGlvblJlZiwgVGVtcGxhdGVSZWYsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5TY3JvbGwgfSBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgeyBXaW5SZXNpemUgfSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWJhY2tkcm9wJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgY3JlYXRlT3ZlcmxheUluamVjdG9yIH0gZnJvbSAnLi9vdmVybGF5LWluamVjdG9yJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheUZhY3Rvcnk8VCA9IGFueT4ge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw/OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPFQ+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29tcFJlZk92ZXJsYXlCYWNrZHJvcDogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX3dpbmRvd1NSU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgcHJpdmF0ZSBfcGFkZGluZ1JpZ2h0OiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9jb25maWc6IEx5T3ZlcmxheUNvbmZpZztcblxuICAvKiogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBvbiBzY3JvbGwgb3IgcmVzaXplIGV2ZW50ICovXG4gIG9uUmVzaXplU2Nyb2xsOiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuXG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuICBnZXQgY29tcG9uZW50UmVmKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wUmVmO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmT3JDb21wb25lbnQ6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPFQ+IHwgc3RyaW5nLFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpblNjcm9sbCxcbiAgICByZXNpemVTZXJ2aWNlOiBXaW5SZXNpemUsXG4gICAgY29uZmlnPzogTHlPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyA9IHsgLi4ubmV3IEx5T3ZlcmxheUNvbmZpZygpLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnXG4gICAgfTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKF9fc3R5bGVzLCBjb25maWcuc3R5bGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdJbmplY3RvciA9IGNyZWF0ZU92ZXJsYXlJbmplY3Rvcih0aGlzLl9pbmplY3Rvciwge1xuICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICBzdHlsZXM6IF9fc3R5bGVzLFxuICAgICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLl91cGRhdGVTdHlsZXMoX19zdHlsZXMpO1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcub25SZXNpemVTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5vblJlc2l6ZVNjcm9sbCA9IGNvbmZpZy5vblJlc2l6ZVNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fd2luZG93U1JTdWIgPSBtZXJnZSh3aW5kb3dTY3JvbGwuc2Nyb2xsJCwgcmVzaXplU2VydmljZS5yZXNpemUkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vblJlc2l6ZVNjcm9sbCkge1xuICAgICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb25maWcuY2xhc3Nlcykge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXM7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiAodGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5oYXNCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuX2dlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZk9yQ29tcG9uZW50LCBfY29udGV4dCwgbmV3SW5qZWN0b3IpO1xuICAgIHRoaXMuX2hpZGRlU2Nyb2xsKCk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlcyhfX3N0eWxlczogb2JqZWN0KSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9lbCEuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4gfCBzdHJpbmcsIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsIS5hcHBlbmRDaGlsZChfKSk7XG5cbiAgICAgIC8vIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWwhLmlubmVyVGV4dCA9IHR5cGU7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5fZ2VuZXJhdGVDb21wb25lbnQodHlwZSwgaW5qZWN0b3IpO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9lbCEuYXBwZW5kQ2hpbGQodGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICAvKiogRGV0YWNoZXMgYSB2aWV3IGZyb20gZGlydHkgY2hlY2tpbmcgYWdhaW4gb2YgQXBwbGljYXRpb25SZWYuICovXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmLmhvc3RWaWV3KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBpZiB0ZW1wbGF0ZSBpcyBzdHJpbmdcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKGJhY2tkcm9wRWwpO1xuICAgIH1cbiAgICB0aGlzLl93aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3Jlc2V0U2Nyb2xsKCk7XG4gIH1cblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZGVTY3JvbGwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl9jb25maWcuaGFzQmFja2Ryb3AgJiYgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5vdmVybGF5TGVuKSB7XG4gICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gd2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICBpZiAoc2Nyb2xsV2lkdGgpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgIHRoaXMuX3BhZGRpbmdSaWdodCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgY2FsYygke3Njcm9sbFdpZHRofXB4ICsgJHt0aGlzLl9wYWRkaW5nUmlnaHR9KWA7XG5cbiAgICAgIH1cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Jlc2V0U2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fY29uZmlnLmhhc0JhY2tkcm9wICYmICF0aGlzLl9vdmVybGF5Q29udGFpbmVyLm92ZXJsYXlMZW4pIHtcbiAgICAgIGlmICh0aGlzLl9wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fcGFkZGluZ1JpZ2h0O1xuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBudWxsO1xuICAgICAgfVxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19