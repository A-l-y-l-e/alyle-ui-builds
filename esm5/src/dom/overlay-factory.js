/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TemplateRef } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { LyOverlayConfig } from './overlay-config';
import { LyOverlayBackdrop } from './overlay-backdrop';
import { createOverlayInjector } from './overlay-injector';
import { Platform } from '../platform/index';
/**
 * @template T
 */
var /**
 * @template T
 */
OverlayFactory = /** @class */ (function () {
    function OverlayFactory(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this._windowSRSub = Subscription.EMPTY;
        this._config = config = tslib_1.__assign({}, new LyOverlayConfig(), config);
        this._el = document.createElement('div');
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
        var newInjector = createOverlayInjector(this._injector, tslib_1.__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
        this._updateStyles(__styles);
        if (config) {
            if (config.onResizeScroll) {
                this.onResizeScroll = config.onResizeScroll;
            }
            this._windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                if (_this.onResizeScroll) {
                    _this.onResizeScroll();
                }
            });
            if (config.classes) {
                /** @type {?} */
                var classes = config.classes;
                classes.forEach(function (className) { return ((/** @type {?} */ (_this._el))).classList.add(className); });
            }
        }
        if (config.hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            /** @type {?} */
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
        }
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    Object.defineProperty(OverlayFactory.prototype, "containerElement", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this._el));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayFactory.prototype, "componentRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this._compRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} __styles
     * @return {?}
     */
    OverlayFactory.prototype._updateStyles = /**
     * @private
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
    OverlayFactory.prototype._appendComponentToBody = /**
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
            this._compRef = this._generateComponent(type, injector);
            this._appRef.attachView(this._compRef.hostView);
            (/** @type {?} */ (this._el)).appendChild(this._compRef.location.nativeElement);
            this._overlayContainer._add(this._el);
        }
    };
    /**
     * @private
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    OverlayFactory.prototype._generateComponent = /**
     * @private
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    function (type, injector) {
        /** @type {?} */
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    };
    /** Detaches a view from dirty checking again of ApplicationRef. */
    /**
     * Detaches a view from dirty checking again of ApplicationRef.
     * @return {?}
     */
    OverlayFactory.prototype.detach = /**
     * Detaches a view from dirty checking again of ApplicationRef.
     * @return {?}
     */
    function () {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
        if (this._compRef) {
            this._appRef.detachView(this._compRef.hostView);
        }
    };
    /** Remove element of DOM */
    /**
     * Remove element of DOM
     * @return {?}
     */
    OverlayFactory.prototype.remove = /**
     * Remove element of DOM
     * @return {?}
     */
    function () {
        this._resetScroll();
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
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this._windowSRSub.unsubscribe();
    };
    /** Detach & remove */
    /**
     * Detach & remove
     * @return {?}
     */
    OverlayFactory.prototype.destroy = /**
     * Detach & remove
     * @return {?}
     */
    function () {
        this.detach();
        this.remove();
    };
    /**
     * @private
     * @return {?}
     */
    OverlayFactory.prototype._hiddeScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            /** @type {?} */
            var scrollWidth = window.innerWidth - window.document.body.clientWidth;
            if (scrollWidth) {
                /** @type {?} */
                var computedStyle = getComputedStyle(window.document.body);
                this._paddingRight = computedStyle.getPropertyValue('padding-right');
                window.document.body.style.paddingRight = "calc(" + scrollWidth + "px + " + this._paddingRight + ")";
            }
            window.document.body.style.overflow = 'hidden';
        }
    };
    /**
     * @private
     * @return {?}
     */
    OverlayFactory.prototype._resetScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            if (this._paddingRight) {
                window.document.body.style.paddingRight = this._paddingRight;
                this._paddingRight = null;
            }
            window.document.body.style.overflow = null;
        }
    };
    return OverlayFactory;
}());
/**
 * @template T
 */
export { OverlayFactory };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2RvbS9vdmVybGF5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQTJFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUU3Qzs7OztJQW1CRSx3QkFDVSx5QkFBbUQsRUFDbkQsT0FBdUIsRUFDL0IsdUJBQTRELEVBQ3BELGlCQUFxQyxFQUM3QyxRQUFhLEVBQ0wsU0FBbUIsRUFDM0IsWUFBdUIsRUFDdkIsYUFBd0IsRUFDeEIsTUFBd0I7UUFUMUIsaUJBMERDO1FBekRTLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUVyQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBcEJyQixpQkFBWSxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBeUJ0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sd0JBQVEsSUFBSSxlQUFlLEVBQUUsRUFBSyxNQUFNLENBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ25DLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxNQUFNO1lB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Q0FBQyxDQUFDO2dCQUNyRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVEsV0FBVyxhQUFRLElBQUksQ0FBQyxhQUFhLE1BQUcsQ0FBQzthQUU1RjtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7SUFDTyxxQ0FBWTs7OztJQUFwQjtRQUNFLElBQUksUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFO1lBQ3ZGLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXZMRCxJQXVMQzs7Ozs7Ozs7OztJQXRMQyxrQ0FBdUM7Ozs7O0lBQ3ZDLDZCQUE2Qjs7Ozs7SUFDN0Isa0NBQXlDOzs7OztJQUN6QyxpREFBbUQ7Ozs7O0lBQ25ELHNDQUF3RDs7Ozs7SUFFeEQsdUNBQXFDOzs7OztJQUNyQyxpQ0FBaUM7Ozs7O0lBR2pDLHdDQUFvQzs7Ozs7SUFTbEMsbURBQTJEOzs7OztJQUMzRCxpQ0FBK0I7Ozs7O0lBRS9CLDJDQUE2Qzs7Ozs7SUFFN0MsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1iZWRkZWRWaWV3UmVmLCBDb21wb25lbnRSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIFRlbXBsYXRlUmVmLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luU2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IHsgV2luUmVzaXplIH0gZnJvbSAnLi9yZXNpemUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1iYWNrZHJvcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXlJbmplY3RvciB9IGZyb20gJy4vb3ZlcmxheS1pbmplY3Rvcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlGYWN0b3J5PFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsPzogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxUPiB8IG51bGw7XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF93aW5kb3dTUlN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIHByaXZhdGUgX3BhZGRpbmdSaWdodDogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29uZmlnOiBMeU92ZXJsYXlDb25maWc7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgb24gc2Nyb2xsIG9yIHJlc2l6ZSBldmVudCAqL1xuICBvblJlc2l6ZVNjcm9sbDogKCgpID0+IHZvaWQpIHwgbnVsbDtcblxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cbiAgZ2V0IGNvbXBvbmVudFJlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcFJlZjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZk9yQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxUPiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcmVzaXplU2VydmljZTogV2luUmVzaXplLFxuICAgIGNvbmZpZz86IEx5T3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgPSB7IC4uLm5ldyBMeU92ZXJsYXlDb25maWcoKSwgLi4uY29uZmlnIH07XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBfX3N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJ1xuICAgIH07XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgT2JqZWN0LmFzc2lnbihfX3N0eWxlcywgY29uZmlnLnN0eWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBjcmVhdGVPdmVybGF5SW5qZWN0b3IodGhpcy5faW5qZWN0b3IsIHtcbiAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fdXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLm9uUmVzaXplU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwgPSBjb25maWcub25SZXNpemVTY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3dpbmRvd1NSU3ViID0gbWVyZ2Uod2luZG93U2Nyb2xsLnNjcm9sbCQsIHJlc2l6ZVNlcnZpY2UucmVzaXplJCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub25SZXNpemVTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzLm9uUmVzaXplU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaGFzQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLl9nZW5lcmF0ZUNvbXBvbmVudChMeU92ZXJsYXlCYWNrZHJvcCwgbmV3SW5qZWN0b3IpO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKGJhY2tkcm9wRWwpO1xuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZENvbXBvbmVudFRvQm9keShfdGVtcGxhdGVSZWZPckNvbXBvbmVudCwgX2NvbnRleHQsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9oaWRkZVNjcm9sbCgpO1xuXG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXMoX19zdHlsZXM6IG9iamVjdCkge1xuICAgIC8qKiBBcHBseSBzdHlsZXMgKi9cbiAgICAvKiogc2V0IHN0eWxlcyAqL1xuICAgIGZvciAoY29uc3Qga2V5IGluIF9fc3R5bGVzKSB7XG4gICAgICBpZiAoX19zdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZVZhbCA9IF9fc3R5bGVzW2tleV07XG4gICAgICAgIGlmIChzdHlsZVZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fZWwhLnN0eWxlW2tleV0gPSB0eXBlb2YgX19zdHlsZXNba2V5XSA9PT0gJ251bWJlcicgPyBgJHtzdHlsZVZhbH1weGAgOiBzdHlsZVZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENvbXBvbmVudFRvQm9keSh0eXBlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxhbnk+IHwgc3RyaW5nLCBjb250ZXh0LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxuICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMuX3ZpZXdSZWYgPSB0eXBlLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0IHx8IHt9KTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuXG4gICAgICAvLyBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2goXyA9PiB0aGlzLl9lbCEuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsIS5pbm5lclRleHQgPSB0eXBlO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuX2dlbmVyYXRlQ29tcG9uZW50KHR5cGUsIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fZWwhLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlQ29tcG9uZW50KHR5cGU6IFR5cGU8YW55PiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlKTtcbiAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAqL1xuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZSBlbGVtZW50IG9mIERPTSAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy5fcmVzZXRTY3JvbGwoKTtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBpZiB0ZW1wbGF0ZSBpcyBzdHJpbmdcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKGJhY2tkcm9wRWwpO1xuICAgIH1cbiAgICB0aGlzLl93aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIERldGFjaCAmIHJlbW92ZSAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGRlU2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fY29uZmlnLmhhc0JhY2tkcm9wICYmIHRoaXMuX292ZXJsYXlDb250YWluZXIub3ZlcmxheUxlbikge1xuICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHNjcm9sbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KTtcblxuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYGNhbGMoJHtzY3JvbGxXaWR0aH1weCArICR7dGhpcy5fcGFkZGluZ1JpZ2h0fSlgO1xuXG4gICAgICB9XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9yZXNldFNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX2NvbmZpZy5oYXNCYWNrZHJvcCAmJiB0aGlzLl9vdmVybGF5Q29udGFpbmVyLm92ZXJsYXlMZW4pIHtcbiAgICAgIGlmICh0aGlzLl9wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fcGFkZGluZ1JpZ2h0O1xuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBudWxsO1xuICAgICAgfVxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19