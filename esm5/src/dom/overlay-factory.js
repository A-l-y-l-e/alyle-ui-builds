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
            this._overlayContainer._add(backdropEl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2RvbS9vdmVybGF5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBMkUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDO0lBbUJFLHdCQUNVLHlCQUFtRCxFQUNuRCxPQUF1QixFQUMvQix1QkFBNEQsRUFDcEQsaUJBQXFDLEVBQzdDLFFBQWEsRUFDTCxTQUFtQixFQUMzQixZQUF1QixFQUN2QixhQUF3QixFQUN4QixNQUF3QjtRQVQxQixpQkFxREM7UUFwRFMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUV2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBRXJDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFwQnJCLGlCQUFZLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUF5QnRELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSx3QkFBUSxJQUFJLGVBQWUsRUFBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFNLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsY0FB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QUFXLEVBQUU7Z0JBQ2YsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBUSxXQUFXLGFBQVEsSUFBSSxDQUFDLGFBQWEsTUFBRyxDQUFDO2FBRTVGO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBQ08scUNBQVksR0FBcEI7UUFDRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTtZQUN2RixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDM0I7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1TEQsSUE0TEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbWJlZGRlZFZpZXdSZWYsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBBcHBsaWNhdGlvblJlZiwgVGVtcGxhdGVSZWYsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5TY3JvbGwgfSBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgeyBXaW5SZXNpemUgfSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWJhY2tkcm9wJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgY3JlYXRlT3ZlcmxheUluamVjdG9yIH0gZnJvbSAnLi9vdmVybGF5LWluamVjdG9yJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheUZhY3Rvcnk8VCA9IGFueT4ge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw/OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPFQ+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29tcFJlZk92ZXJsYXlCYWNrZHJvcD86IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfd2luZG93U1JTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBwcml2YXRlIF9wYWRkaW5nUmlnaHQ6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2NvbmZpZzogTHlPdmVybGF5Q29uZmlnO1xuICBwcml2YXRlIF9uZXdJbmplY3RvcjogSW5qZWN0b3I7XG4gIC8qKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uIHNjcm9sbCBvciByZXNpemUgZXZlbnQgKi9cbiAgb25SZXNpemVTY3JvbGw6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG4gIGdldCBjb21wb25lbnRSZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBSZWY7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBfdGVtcGxhdGVSZWZPckNvbXBvbmVudDogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8VD4gfCBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIF9jb250ZXh0OiBhbnksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHdpbmRvd1Njcm9sbDogV2luU2Nyb2xsLFxuICAgIHJlc2l6ZVNlcnZpY2U6IFdpblJlc2l6ZSxcbiAgICBjb25maWc/OiBMeU92ZXJsYXlDb25maWdcbiAgKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnID0geyAuLi5uZXcgTHlPdmVybGF5Q29uZmlnKCksIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMuX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgX19zdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCdcbiAgICB9O1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oX19zdHlsZXMsIGNvbmZpZy5zdHlsZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0luamVjdG9yID0gdGhpcy5fbmV3SW5qZWN0b3IgPSBjcmVhdGVPdmVybGF5SW5qZWN0b3IodGhpcy5faW5qZWN0b3IsIHtcbiAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fdXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLm9uUmVzaXplU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwgPSBjb25maWcub25SZXNpemVTY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3dpbmRvd1NSU3ViID0gbWVyZ2Uod2luZG93U2Nyb2xsLnNjcm9sbCQsIHJlc2l6ZVNlcnZpY2UucmVzaXplJCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub25SZXNpemVTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzLm9uUmVzaXplU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQmFja2Ryb3AoISFjb25maWcuaGFzQmFja2Ryb3ApO1xuXG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZk9yQ29tcG9uZW50LCBfY29udGV4dCwgbmV3SW5qZWN0b3IpO1xuICAgIHRoaXMuX2hpZGRlU2Nyb2xsKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZUJhY2tkcm9wKGhhc0JhY2tkcm9wOiBib29sZWFuKSB7XG4gICAgaWYgKGhhc0JhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wID0gdGhpcy5fZ2VuZXJhdGVDb21wb25lbnQoTHlPdmVybGF5QmFja2Ryb3AsIHRoaXMuX25ld0luamVjdG9yKTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZChiYWNrZHJvcEVsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsKCk7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXMoX19zdHlsZXM6IG9iamVjdCkge1xuICAgIC8qKiBBcHBseSBzdHlsZXMgKi9cbiAgICAvKiogc2V0IHN0eWxlcyAqL1xuICAgIGZvciAoY29uc3Qga2V5IGluIF9fc3R5bGVzKSB7XG4gICAgICBpZiAoX19zdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZVZhbCA9IF9fc3R5bGVzW2tleV07XG4gICAgICAgIGlmIChzdHlsZVZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fZWwhLnN0eWxlW2tleV0gPSB0eXBlb2YgX19zdHlsZXNba2V5XSA9PT0gJ251bWJlcicgPyBgJHtzdHlsZVZhbH1weGAgOiBzdHlsZVZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENvbXBvbmVudFRvQm9keSh0eXBlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxhbnk+IHwgc3RyaW5nLCBjb250ZXh0LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxuICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMuX3ZpZXdSZWYgPSB0eXBlLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0IHx8IHt9KTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuXG4gICAgICAvLyBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2goXyA9PiB0aGlzLl9lbCEuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsIS5pbm5lclRleHQgPSB0eXBlO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuX2dlbmVyYXRlQ29tcG9uZW50KHR5cGUsIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fZWwhLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlQ29tcG9uZW50KHR5cGU6IFR5cGU8YW55PiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlKTtcbiAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAqL1xuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZSBlbGVtZW50IG9mIERPTSAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy5fcmVzZXRTY3JvbGwoKTtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBpZiB0ZW1wbGF0ZSBpcyBzdHJpbmdcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVCYWNrZHJvcChmYWxzZSk7XG4gICAgdGhpcy5fd2luZG93U1JTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2ggJiByZW1vdmUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oaWRkZVNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX2NvbmZpZy5oYXNCYWNrZHJvcCAmJiB0aGlzLl9vdmVybGF5Q29udGFpbmVyLm92ZXJsYXlMZW4pIHtcbiAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSB3aW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgIGlmIChzY3JvbGxXaWR0aCkge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh3aW5kb3cuZG9jdW1lbnQuYm9keSk7XG5cbiAgICAgICAgdGhpcy5fcGFkZGluZ1JpZ2h0ID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGBjYWxjKCR7c2Nyb2xsV2lkdGh9cHggKyAke3RoaXMuX3BhZGRpbmdSaWdodH0pYDtcblxuICAgICAgfVxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfcmVzZXRTY3JvbGwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl9jb25maWcuaGFzQmFja2Ryb3AgJiYgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5vdmVybGF5TGVuKSB7XG4gICAgICBpZiAodGhpcy5fcGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuX3BhZGRpbmdSaWdodDtcbiAgICAgICAgdGhpcy5fcGFkZGluZ1JpZ2h0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgfVxuICB9XG59XG4iXX0=