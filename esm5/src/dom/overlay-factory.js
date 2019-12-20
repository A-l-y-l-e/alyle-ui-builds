import * as tslib_1 from "tslib";
import { TemplateRef } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { LyOverlayConfig } from './overlay-config';
import { LyOverlayBackdrop } from './overlay-backdrop';
import { createOverlayInjector } from './overlay-injector';
import { Platform } from '../platform/index';
var OverlayFactory = /** @class */ (function () {
    function OverlayFactory(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this._windowSRSub = Subscription.EMPTY;
        this._config = config = tslib_1.__assign({}, new LyOverlayConfig(), config);
        this._el = document.createElement('div');
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
        var newInjector = this._newInjector = createOverlayInjector(this._injector, tslib_1.__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
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
                var classes = config.classes;
                classes.forEach(function (className) { return _this._el.classList.add(className); });
            }
        }
        this.updateBackdrop(!!config.hasBackdrop);
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    Object.defineProperty(OverlayFactory.prototype, "containerElement", {
        get: function () {
            return this._el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayFactory.prototype, "componentRef", {
        get: function () {
            return this._compRef;
        },
        enumerable: true,
        configurable: true
    });
    OverlayFactory.prototype.updateBackdrop = function (hasBackdrop) {
        if (hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, this._newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl, true);
        }
        else if (this._compRefOverlayBackdrop) {
            this._resetScroll();
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
            this._compRefOverlayBackdrop = null;
        }
    };
    OverlayFactory.prototype._updateStyles = function (__styles) {
        /** Apply styles */
        /** set styles */
        for (var key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                var styleVal = __styles[key];
                if (styleVal != null) {
                    this._el.style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                }
            }
        }
    };
    OverlayFactory.prototype._appendComponentToBody = function (type, context, injector) {
        var _this = this;
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
            var viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(function (_) { return _this._el.appendChild(_); });
            // Append DOM element to the body
            this._overlayContainer._add(this._el);
        }
        else if (typeof type === 'string') {
            this._el.innerText = type;
            this._overlayContainer._add(this._el);
        }
        else {
            this._compRef = this._generateComponent(type, injector);
            this._appRef.attachView(this._compRef.hostView);
            this._el.appendChild(this._compRef.location.nativeElement);
            this._overlayContainer._add(this._el);
        }
    };
    OverlayFactory.prototype._generateComponent = function (type, injector) {
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    };
    /** Detaches a view from dirty checking again of ApplicationRef. */
    OverlayFactory.prototype.detach = function () {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
        if (this._compRef) {
            this._appRef.detachView(this._compRef.hostView);
        }
    };
    /** Remove element of DOM */
    OverlayFactory.prototype.remove = function () {
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
        this.updateBackdrop(false);
        this._windowSRSub.unsubscribe();
    };
    /** Detach & remove */
    OverlayFactory.prototype.destroy = function () {
        this.detach();
        this.remove();
    };
    OverlayFactory.prototype._hiddeScroll = function () {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            var scrollWidth = window.innerWidth - window.document.body.clientWidth;
            if (scrollWidth) {
                var computedStyle = getComputedStyle(window.document.body);
                this._paddingRight = computedStyle.getPropertyValue('padding-right');
                window.document.body.style.paddingRight = "calc(" + scrollWidth + "px + " + this._paddingRight + ")";
            }
            window.document.body.style.overflow = 'hidden';
        }
    };
    OverlayFactory.prototype._resetScroll = function () {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            if (this._paddingRight) {
                window.document.body.style.paddingRight = this._paddingRight;
                this._paddingRight = null;
            }
            window.document.body.style.overflow = '';
        }
    };
    return OverlayFactory;
}());
export { OverlayFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2RvbS9vdmVybGF5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBMkUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDO0lBbUJFLHdCQUNVLHlCQUFtRCxFQUNuRCxPQUF1QixFQUMvQix1QkFBNEQsRUFDcEQsaUJBQXFDLEVBQzdDLFFBQWEsRUFDTCxTQUFtQixFQUMzQixZQUF1QixFQUN2QixhQUF3QixFQUN4QixNQUF3QjtRQVQxQixpQkFxREM7UUFwRFMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUV2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBRXJDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFwQnJCLGlCQUFZLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUF5QnRELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSx3QkFBUSxJQUFJLGVBQWUsRUFBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFNLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsY0FB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Q3pFLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTdELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNyRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVEsV0FBVyxhQUFRLElBQUksQ0FBQyxhQUFhLE1BQUcsQ0FBQzthQUU1RjtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUNPLHFDQUFZLEdBQXBCO1FBQ0UsSUFBSSxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7WUFDdkYsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzNCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBNUxELElBNExDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1iZWRkZWRWaWV3UmVmLCBDb21wb25lbnRSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIFRlbXBsYXRlUmVmLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luU2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IHsgV2luUmVzaXplIH0gZnJvbSAnLi9yZXNpemUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1iYWNrZHJvcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXlJbmplY3RvciB9IGZyb20gJy4vb3ZlcmxheS1pbmplY3Rvcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlGYWN0b3J5PFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsPzogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxUPiB8IG51bGw7XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A/OiBDb21wb25lbnRSZWY8YW55PiB8IG51bGw7XG4gIHByaXZhdGUgX3dpbmRvd1NSU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgcHJpdmF0ZSBfcGFkZGluZ1JpZ2h0OiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9jb25maWc6IEx5T3ZlcmxheUNvbmZpZztcbiAgcHJpdmF0ZSBfbmV3SW5qZWN0b3I6IEluamVjdG9yO1xuICAvKiogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBvbiBzY3JvbGwgb3IgcmVzaXplIGV2ZW50ICovXG4gIG9uUmVzaXplU2Nyb2xsOiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuXG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuICBnZXQgY29tcG9uZW50UmVmKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wUmVmO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmT3JDb21wb25lbnQ6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPFQ+IHwgc3RyaW5nLFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpblNjcm9sbCxcbiAgICByZXNpemVTZXJ2aWNlOiBXaW5SZXNpemUsXG4gICAgY29uZmlnPzogTHlPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyA9IHsgLi4ubmV3IEx5T3ZlcmxheUNvbmZpZygpLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnXG4gICAgfTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKF9fc3R5bGVzLCBjb25maWcuc3R5bGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdJbmplY3RvciA9IHRoaXMuX25ld0luamVjdG9yID0gY3JlYXRlT3ZlcmxheUluamVjdG9yKHRoaXMuX2luamVjdG9yLCB7XG4gICAgICBmbkRlc3Ryb3k6IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICB9LCB0aGlzKTtcblxuICAgIHRoaXMuX3VwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZy5vblJlc2l6ZVNjcm9sbCkge1xuICAgICAgICB0aGlzLm9uUmVzaXplU2Nyb2xsID0gY29uZmlnLm9uUmVzaXplU2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl93aW5kb3dTUlN1YiA9IG1lcmdlKHdpbmRvd1Njcm9sbC5zY3JvbGwkLCByZXNpemVTZXJ2aWNlLnJlc2l6ZSQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm9uUmVzaXplU2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcy5vblJlc2l6ZVNjcm9sbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+ICh0aGlzLl9lbCBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUJhY2tkcm9wKCEhY29uZmlnLmhhc0JhY2tkcm9wKTtcblxuICAgIHRoaXMuX2FwcGVuZENvbXBvbmVudFRvQm9keShfdGVtcGxhdGVSZWZPckNvbXBvbmVudCwgX2NvbnRleHQsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9oaWRkZVNjcm9sbCgpO1xuXG4gIH1cblxuICB1cGRhdGVCYWNrZHJvcChoYXNCYWNrZHJvcDogYm9vbGVhbikge1xuICAgIGlmIChoYXNCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuX2dlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCB0aGlzLl9uZXdJbmplY3Rvcik7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9yZXNldFNjcm9sbCgpO1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKGJhY2tkcm9wRWwpO1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3R5bGVzKF9fc3R5bGVzOiBvYmplY3QpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX2VsIS5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiB8IHN0cmluZywgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwhLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbCEuaW5uZXJUZXh0ID0gdHlwZTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLl9nZW5lcmF0ZUNvbXBvbmVudCh0eXBlLCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2VsIS5hcHBlbmRDaGlsZCh0aGlzLl9jb21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gKi9cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl92aWV3UmVmKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWYuaG9zdFZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmUgZWxlbWVudCBvZiBET00gKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuX3Jlc2V0U2Nyb2xsKCk7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wUmVmID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2VsKSB7XG4gICAgICAvLyByZW1vdmUgaWYgdGVtcGxhdGUgaXMgc3RyaW5nXG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQmFja2Ryb3AoZmFsc2UpO1xuICAgIHRoaXMuX3dpbmRvd1NSU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZGVTY3JvbGwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl9jb25maWcuaGFzQmFja2Ryb3AgJiYgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5vdmVybGF5TGVuKSB7XG4gICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gd2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICBpZiAoc2Nyb2xsV2lkdGgpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgIHRoaXMuX3BhZGRpbmdSaWdodCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgY2FsYygke3Njcm9sbFdpZHRofXB4ICsgJHt0aGlzLl9wYWRkaW5nUmlnaHR9KWA7XG5cbiAgICAgIH1cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Jlc2V0U2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fY29uZmlnLmhhc0JhY2tkcm9wICYmIHRoaXMuX292ZXJsYXlDb250YWluZXIub3ZlcmxheUxlbikge1xuICAgICAgaWYgKHRoaXMuX3BhZGRpbmdSaWdodCkge1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9wYWRkaW5nUmlnaHQ7XG4gICAgICAgIHRoaXMuX3BhZGRpbmdSaWdodCA9IG51bGw7XG4gICAgICB9XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIH1cbiAgfVxufVxuIl19