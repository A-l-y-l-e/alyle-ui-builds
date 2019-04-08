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
                var classes = config.classes;
                classes.forEach(function (className) { return _this._el.classList.add(className); });
            }
        }
        if (config.hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
        }
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
        if (this._compRefOverlayBackdrop) {
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            this._compRefOverlayBackdrop.destroy();
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
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
            window.document.body.style.overflow = null;
        }
    };
    return OverlayFactory;
}());
export { OverlayFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2RvbS9vdmVybGF5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBMkUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDO0lBbUJFLHdCQUNVLHlCQUFtRCxFQUNuRCxPQUF1QixFQUMvQix1QkFBNEQsRUFDcEQsaUJBQXFDLEVBQzdDLFFBQWEsRUFDTCxTQUFtQixFQUMzQixZQUF1QixFQUN2QixhQUF3QixFQUN4QixNQUF3QjtRQVQxQixpQkEwREM7UUF6RFMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUV2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBRXJDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFwQnJCLGlCQUFZLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUF5QnRELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSx3QkFBUSxJQUFJLGVBQWUsRUFBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFNLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsY0FB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QUMsWUFBWSxHQUFHLFVBQVEsV0FBVyxhQUFRLElBQUksQ0FBQyxhQUFhLE1BQUcsQ0FBQzthQUU1RjtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUNPLHFDQUFZLEdBQXBCO1FBQ0UsSUFBSSxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7WUFDdkYsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzNCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdkxELElBdUxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1iZWRkZWRWaWV3UmVmLCBDb21wb25lbnRSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIFRlbXBsYXRlUmVmLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luU2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IHsgV2luUmVzaXplIH0gZnJvbSAnLi9yZXNpemUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1iYWNrZHJvcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXlJbmplY3RvciB9IGZyb20gJy4vb3ZlcmxheS1pbmplY3Rvcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlGYWN0b3J5PFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsPzogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxUPiB8IG51bGw7XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF93aW5kb3dTUlN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIHByaXZhdGUgX3BhZGRpbmdSaWdodDogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29uZmlnOiBMeU92ZXJsYXlDb25maWc7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgb24gc2Nyb2xsIG9yIHJlc2l6ZSBldmVudCAqL1xuICBvblJlc2l6ZVNjcm9sbDogKCgpID0+IHZvaWQpIHwgbnVsbDtcblxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cbiAgZ2V0IGNvbXBvbmVudFJlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcFJlZjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZk9yQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxUPiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcmVzaXplU2VydmljZTogV2luUmVzaXplLFxuICAgIGNvbmZpZz86IEx5T3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgPSB7IC4uLm5ldyBMeU92ZXJsYXlDb25maWcoKSwgLi4uY29uZmlnIH07XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBfX3N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJ1xuICAgIH07XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgT2JqZWN0LmFzc2lnbihfX3N0eWxlcywgY29uZmlnLnN0eWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBjcmVhdGVPdmVybGF5SW5qZWN0b3IodGhpcy5faW5qZWN0b3IsIHtcbiAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fdXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLm9uUmVzaXplU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwgPSBjb25maWcub25SZXNpemVTY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3dpbmRvd1NSU3ViID0gbWVyZ2Uod2luZG93U2Nyb2xsLnNjcm9sbCQsIHJlc2l6ZVNlcnZpY2UucmVzaXplJCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub25SZXNpemVTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzLm9uUmVzaXplU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaGFzQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLl9nZW5lcmF0ZUNvbXBvbmVudChMeU92ZXJsYXlCYWNrZHJvcCwgbmV3SW5qZWN0b3IpO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKGJhY2tkcm9wRWwpO1xuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZENvbXBvbmVudFRvQm9keShfdGVtcGxhdGVSZWZPckNvbXBvbmVudCwgX2NvbnRleHQsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9oaWRkZVNjcm9sbCgpO1xuXG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXMoX19zdHlsZXM6IG9iamVjdCkge1xuICAgIC8qKiBBcHBseSBzdHlsZXMgKi9cbiAgICAvKiogc2V0IHN0eWxlcyAqL1xuICAgIGZvciAoY29uc3Qga2V5IGluIF9fc3R5bGVzKSB7XG4gICAgICBpZiAoX19zdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZVZhbCA9IF9fc3R5bGVzW2tleV07XG4gICAgICAgIGlmIChzdHlsZVZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fZWwhLnN0eWxlW2tleV0gPSB0eXBlb2YgX19zdHlsZXNba2V5XSA9PT0gJ251bWJlcicgPyBgJHtzdHlsZVZhbH1weGAgOiBzdHlsZVZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENvbXBvbmVudFRvQm9keSh0eXBlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxhbnk+IHwgc3RyaW5nLCBjb250ZXh0LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxuICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMuX3ZpZXdSZWYgPSB0eXBlLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0IHx8IHt9KTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuXG4gICAgICAvLyBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2goXyA9PiB0aGlzLl9lbCEuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsIS5pbm5lclRleHQgPSB0eXBlO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuX2dlbmVyYXRlQ29tcG9uZW50KHR5cGUsIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fZWwhLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlQ29tcG9uZW50KHR5cGU6IFR5cGU8YW55PiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlKTtcbiAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAqL1xuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZSBlbGVtZW50IG9mIERPTSAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy5fcmVzZXRTY3JvbGwoKTtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBpZiB0ZW1wbGF0ZSBpcyBzdHJpbmdcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKGJhY2tkcm9wRWwpO1xuICAgIH1cbiAgICB0aGlzLl93aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIERldGFjaCAmIHJlbW92ZSAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGRlU2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fY29uZmlnLmhhc0JhY2tkcm9wICYmIHRoaXMuX292ZXJsYXlDb250YWluZXIub3ZlcmxheUxlbikge1xuICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHNjcm9sbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KTtcblxuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYGNhbGMoJHtzY3JvbGxXaWR0aH1weCArICR7dGhpcy5fcGFkZGluZ1JpZ2h0fSlgO1xuXG4gICAgICB9XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9yZXNldFNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX2NvbmZpZy5oYXNCYWNrZHJvcCAmJiB0aGlzLl9vdmVybGF5Q29udGFpbmVyLm92ZXJsYXlMZW4pIHtcbiAgICAgIGlmICh0aGlzLl9wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fcGFkZGluZ1JpZ2h0O1xuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBudWxsO1xuICAgICAgfVxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19