/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TemplateRef, Injectable, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { LyOverlayContainer, LyOverlayBackdrop } from './overlay-container';
import { Subscription, merge } from 'rxjs';
import { WinResize } from './resize';
import { WinScroll } from './scroll';
import * as i0 from "@angular/core";
import * as i1 from "./overlay-container";
import * as i2 from "./scroll";
import * as i3 from "./resize";
/**
 * @record
 */
function OverlayConfig() { }
if (false) {
    /** @type {?} */
    OverlayConfig.prototype.styles;
    /** @type {?|undefined} */
    OverlayConfig.prototype.classes;
    /** @type {?|undefined} */
    OverlayConfig.prototype.backdrop;
    /** @type {?|undefined} */
    OverlayConfig.prototype.fnDestroy;
    /**
     * Function that will be called on scroll or resize event
     * @type {?|undefined}
     */
    OverlayConfig.prototype.onResizeScroll;
    /**
     * @deprecated
     * @type {?|undefined}
     */
    OverlayConfig.prototype.host;
}
/**
 * @record
 */
export function OverlayFromTemplateRef() { }
if (false) {
    /**
     * Detaches a view from dirty checking again of ApplicationRef.
     * @type {?}
     */
    OverlayFromTemplateRef.prototype.detach;
    /**
     * Remove element of DOM
     * @type {?}
     */
    OverlayFromTemplateRef.prototype.remove;
    /**
     * Detach & remove
     * @type {?}
     */
    OverlayFromTemplateRef.prototype.destroy;
    /**
     * Function that will be called on scroll or resize event
     * @type {?}
     */
    OverlayFromTemplateRef.prototype.onResizeScroll;
    /** @type {?} */
    OverlayFromTemplateRef.prototype.containerElement;
}
var CreateFromTemplateRef = /** @class */ (function () {
    function CreateFromTemplateRef(_componentFactoryResolver, _appRef, _templateRef, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this.windowSRSub = Subscription.EMPTY;
        // this._viewRef = _templateRef.createEmbeddedView(_context);
        // this._viewRef.detectChanges();
        this._el = document.createElement('div');
        // this._viewRef.rootNodes.forEach(rootNode => container.appendChild(rootNode));
        /** @type {?} */
        var __styles = {
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
        var newInjector = Injector.create([
            {
                provide: 'overlayConfig',
                useValue: (/** @type {?} */ (tslib_1.__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles })))
            }
        ], this._injector);
        this.updateStyles(__styles);
        if (config) {
            if (config.onResizeScroll) {
                this.onResizeScroll = config.onResizeScroll;
            }
            this.windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                if (_this.onResizeScroll) {
                    _this.onResizeScroll();
                }
                else if (config.host) {
                    /** @type {?} */
                    var rect = config.host.getBoundingClientRect();
                    /** @type {?} */
                    var newStyles = {
                        top: rect.top,
                        left: rect.left
                    };
                    _this.updateStyles(newStyles);
                }
            });
            if (config.classes) {
                /** @type {?} */
                var classes = config.classes;
                classes.forEach(function (className) { return ((/** @type {?} */ (_this._el))).classList.add(className); });
            }
        }
        this._compRefOverlayBackdrop = this.generateComponent(LyOverlayBackdrop, newInjector);
        this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
        /** @type {?} */
        var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
        this._overlayContainer._add(backdropEl);
        this._appendComponentToBody(_templateRef, _context, this._injector);
    }
    Object.defineProperty(CreateFromTemplateRef.prototype, "containerElement", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this._el));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} __styles
     * @return {?}
     */
    CreateFromTemplateRef.prototype.updateStyles = /**
     * @param {?} __styles
     * @return {?}
     */
    function (__styles) {
        /** Apply styles */
        /** set styles */
        for (var key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                /** @type {?} */
                var styleVal = __styles[key];
                if (styleVal != null) {
                    (/** @type {?} */ (this._el)).style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                }
            }
        }
    };
    /**
     * @private
     * @param {?} type
     * @param {?} context
     * @param {?} injector
     * @return {?}
     */
    CreateFromTemplateRef.prototype._appendComponentToBody = /**
     * @private
     * @param {?} type
     * @param {?} context
     * @param {?} injector
     * @return {?}
     */
    function (type, context, injector) {
        var _this = this;
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
            /** @type {?} */
            var viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(function (_) { return (/** @type {?} */ (_this._el)).appendChild(_); });
            // Append DOM element to the body
            this._overlayContainer._add(this._el);
        }
        else if (typeof type === 'string') {
            (/** @type {?} */ (this._el)).innerText = type;
            this._overlayContainer._add(this._el);
        }
        else {
            this._compRef = this.generateComponent((/** @type {?} */ (type)), injector);
            this._el = this._compRef.location.nativeElement;
            this._overlayContainer._add(this._el);
        }
    };
    /**
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    CreateFromTemplateRef.prototype.generateComponent = /**
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    function (type, injector) {
        /** @type {?} */
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    };
    /**
     * @return {?}
     */
    CreateFromTemplateRef.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
    };
    /**
     * @return {?}
     */
    CreateFromTemplateRef.prototype.remove = /**
     * @return {?}
     */
    function () {
        if (this._viewRef) {
            this._viewRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        else if (this._compRef) {
            this._compRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
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
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this.windowSRSub.unsubscribe();
    };
    /**
     * @return {?}
     */
    CreateFromTemplateRef.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this.remove();
    };
    return CreateFromTemplateRef;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._viewRef;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._el;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._compRef;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._compRefOverlayBackdrop;
    /** @type {?} */
    CreateFromTemplateRef.prototype.windowSRSub;
    /** @type {?} */
    CreateFromTemplateRef.prototype.onResizeScroll;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._overlayContainer;
    /**
     * @type {?}
     * @private
     */
    CreateFromTemplateRef.prototype._injector;
}
var LyOverlay = /** @class */ (function () {
    function LyOverlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} config
     * @return {?}
     */
    LyOverlay.prototype.create = /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} config
     * @return {?}
     */
    function (template, context, config) {
        return new CreateFromTemplateRef(this._componentFactoryResolver, this._appRef, template, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    };
    LyOverlay.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyOverlay.ctorParameters = function () { return [
        { type: LyOverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: WinScroll },
        { type: WinResize }
    ]; };
    /** @nocollapse */ LyOverlay.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(i0.inject(i1.LyOverlayContainer), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(i2.WinScroll), i0.inject(i3.WinResize)); }, token: LyOverlay, providedIn: "root" });
    return LyOverlay;
}());
export { LyOverlay };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._overlayContainer;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._windowScroll;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQW1CLFVBQVUsRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0FBRXJDLDRCQVNDOzs7SUFSQywrQkFBZTs7SUFDZixnQ0FBbUI7O0lBQ25CLGlDQUFtQjs7SUFDbkIsa0NBQWtDOzs7OztJQUVsQyx1Q0FBOEI7Ozs7O0lBRTlCLDZCQUFXOzs7OztBQUdiLDRDQWVDOzs7Ozs7SUFiQyx3Q0FBNEI7Ozs7O0lBRzVCLHdDQUE0Qjs7Ozs7SUFHNUIseUNBQTZCOzs7OztJQUc3QixnREFBb0M7O0lBRXBDLGtEQUEwQzs7QUFHNUM7SUFVRSwrQkFDVSx5QkFBbUQsRUFDbkQsT0FBdUIsRUFDL0IsWUFBdUMsRUFDL0IsaUJBQXFDLEVBQzdDLFFBQWEsRUFDTCxTQUFtQixFQUMzQixZQUF1QixFQUN2QixhQUF3QixFQUN4QixNQUFzQjtRQVR4QixpQkFvRUM7UUFuRVMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUV2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBRXJDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFYN0IsZ0JBQVcsR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQWdCN0MsNkRB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UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVztJQUMvQixDQUFDOzs7Ozs7O0lBRUwsMEJBQU07Ozs7OztJQUFOLFVBQU8sUUFBbUMsRUFBRSxPQUFhLEVBQUUsTUFBc0I7UUFDL0UsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixJQUFJLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5SixDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkE1TFEsa0JBQWtCO2dCQUR3Qyx3QkFBd0I7Z0JBQXhDLGNBQWM7Z0JBQTRCLFFBQVE7Z0JBSTVGLFNBQVM7Z0JBRFQsU0FBUzs7O29CQUhsQjtDQTZNQyxBQWxCRCxJQWtCQztTQWZZLFNBQVM7Ozs7OztJQUdsQixzQ0FBNkM7Ozs7O0lBQzdDLDhDQUEyRDs7Ozs7SUFDM0QsNEJBQStCOzs7OztJQUMvQiw4QkFBMkI7Ozs7O0lBQzNCLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luUmVzaXplIH0gZnJvbSAnLi9yZXNpemUnO1xuaW1wb3J0IHsgV2luU2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGwnO1xuXG5pbnRlcmZhY2UgT3ZlcmxheUNvbmZpZyB7XG4gIHN0eWxlczogT2JqZWN0O1xuICBjbGFzc2VzPzogc3RyaW5nW107XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgZm5EZXN0cm95PzogKC4uLmFyZzogYW55KSA9PiB2b2lkO1xuICAvKiogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBvbiBzY3JvbGwgb3IgcmVzaXplIGV2ZW50ICovXG4gIG9uUmVzaXplU2Nyb2xsPzogKCgpID0+IHZvaWQpO1xuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgaG9zdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAqL1xuICByZWFkb25seSBkZXRhY2g6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIFJlbW92ZSBlbGVtZW50IG9mIERPTSAqL1xuICByZWFkb25seSByZW1vdmU6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIERldGFjaCAmIHJlbW92ZSAqL1xuICByZWFkb25seSBkZXN0cm95OiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uIHNjcm9sbCBvciByZXNpemUgZXZlbnQgKi9cbiAgb25SZXNpemVTY3JvbGw6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgcmVhZG9ubHkgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw/OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aW5kb3dTUlN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBvblJlc2l6ZVNjcm9sbDogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpblNjcm9sbCxcbiAgICByZXNpemVTZXJ2aWNlOiBXaW5SZXNpemUsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnXG4gICAgfTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKF9fc3R5bGVzLCBjb25maWcuc3R5bGVzKTtcbiAgICB9XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLm9uUmVzaXplU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwgPSBjb25maWcub25SZXNpemVTY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud2luZG93U1JTdWIgPSBtZXJnZSh3aW5kb3dTY3JvbGwuc2Nyb2xsJCwgcmVzaXplU2VydmljZS5yZXNpemUkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vblJlc2l6ZVNjcm9sbCkge1xuICAgICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcuaG9zdCkge1xuICAgICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+ICh0aGlzLl9lbCBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzOiBvYmplY3QpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX2VsIS5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiB8IHN0cmluZywgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwhLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbCEuaW5uZXJUZXh0ID0gdHlwZTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KHR5cGUgYXMgVHlwZTxhbnk+LCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2VsKSB7XG4gICAgICAvLyByZW1vdmUgaWYgdGVtcGxhdGUgaXMgc3RyaW5nXG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuZGVzdHJveSgpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogV2luUmVzaXplXG4gICkgeyB9XG5cbiAgY3JlYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLCBjb250ZXh0PzogYW55LCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYoXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsIGNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==