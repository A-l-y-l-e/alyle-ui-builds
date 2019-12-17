import { TemplateRef } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { LyOverlayConfig } from './overlay-config';
import { LyOverlayBackdrop } from './overlay-backdrop';
import { createOverlayInjector } from './overlay-injector';
import { Platform } from '../platform/index';
export class OverlayFactory {
    constructor(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this._windowSRSub = Subscription.EMPTY;
        this._config = config = Object.assign({}, new LyOverlayConfig(), config);
        this._el = document.createElement('div');
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
        const newInjector = this._newInjector = createOverlayInjector(this._injector, Object.assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
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
                const classes = config.classes;
                classes.forEach((className) => this._el.classList.add(className));
            }
        }
        this.updateBackdrop(!!config.hasBackdrop);
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    get containerElement() {
        return this._el;
    }
    get componentRef() {
        return this._compRef;
    }
    updateBackdrop(hasBackdrop) {
        if (hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, this._newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
        }
        else if (this._compRefOverlayBackdrop) {
            this._resetScroll();
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
            this._compRefOverlayBackdrop = null;
        }
    }
    _updateStyles(__styles) {
        /** Apply styles */
        /** set styles */
        for (const key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                const styleVal = __styles[key];
                if (styleVal != null) {
                    this._el.style[key] = typeof __styles[key] === 'number' ? `${styleVal}px` : styleVal;
                }
            }
        }
    }
    _appendComponentToBody(type, context, injector) {
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
            const viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(_ => this._el.appendChild(_));
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
    }
    _generateComponent(type, injector) {
        const factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    }
    /** Detaches a view from dirty checking again of ApplicationRef. */
    detach() {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
        if (this._compRef) {
            this._appRef.detachView(this._compRef.hostView);
        }
    }
    /** Remove element of DOM */
    remove() {
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
    }
    /** Detach & remove */
    destroy() {
        this.detach();
        this.remove();
    }
    _hiddeScroll() {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            const scrollWidth = window.innerWidth - window.document.body.clientWidth;
            if (scrollWidth) {
                const computedStyle = getComputedStyle(window.document.body);
                this._paddingRight = computedStyle.getPropertyValue('padding-right');
                window.document.body.style.paddingRight = `calc(${scrollWidth}px + ${this._paddingRight})`;
            }
            window.document.body.style.overflow = 'hidden';
        }
    }
    _resetScroll() {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            if (this._paddingRight) {
                window.document.body.style.paddingRight = this._paddingRight;
                this._paddingRight = null;
            }
            window.document.body.style.overflow = '';
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2RvbS9vdmVybGF5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyRSxXQUFXLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsTUFBTSxPQUFPLGNBQWM7SUFtQnpCLFlBQ1UseUJBQW1ELEVBQ25ELE9BQXVCLEVBQy9CLHVCQUE0RCxFQUNwRCxpQkFBcUMsRUFDN0MsUUFBYSxFQUNMLFNBQW1CLEVBQzNCLFlBQXVCLEVBQ3ZCLGFBQXdCLEVBQ3hCLE1BQXdCO1FBUmhCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUVyQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBcEJyQixpQkFBWSxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBeUJ0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0scUJBQVEsSUFBSSxlQUFlLEVBQUUsRUFBSyxNQUFNLENBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUc7WUFDZixRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsTUFBTTtZQUNmLGNB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QWEsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxXQUFXLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO2FBRTVGO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBQ08sWUFBWTtRQUNsQixJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTtZQUN2RixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDM0I7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtYmVkZGVkVmlld1JlZiwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEFwcGxpY2F0aW9uUmVmLCBUZW1wbGF0ZVJlZiwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdpblNjcm9sbCB9IGZyb20gJy4vc2Nyb2xsJztcbmltcG9ydCB7IFdpblJlc2l6ZSB9IGZyb20gJy4vcmVzaXplJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbmZpZyB9IGZyb20gJy4vb3ZlcmxheS1jb25maWcnO1xuaW1wb3J0IHsgTHlPdmVybGF5QmFja2Ryb3AgfSBmcm9tICcuL292ZXJsYXktYmFja2Ryb3AnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBjcmVhdGVPdmVybGF5SW5qZWN0b3IgfSBmcm9tICcuL292ZXJsYXktaW5qZWN0b3InO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5RmFjdG9yeTxUID0gYW55PiB7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9lbD86IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8VD4gfCBudWxsO1xuICBwcml2YXRlIF9jb21wUmVmT3ZlcmxheUJhY2tkcm9wPzogQ29tcG9uZW50UmVmPGFueT4gfCBudWxsO1xuICBwcml2YXRlIF93aW5kb3dTUlN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIHByaXZhdGUgX3BhZGRpbmdSaWdodDogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29uZmlnOiBMeU92ZXJsYXlDb25maWc7XG4gIHByaXZhdGUgX25ld0luamVjdG9yOiBJbmplY3RvcjtcbiAgLyoqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgb24gc2Nyb2xsIG9yIHJlc2l6ZSBldmVudCAqL1xuICBvblJlc2l6ZVNjcm9sbDogKCgpID0+IHZvaWQpIHwgbnVsbDtcblxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cbiAgZ2V0IGNvbXBvbmVudFJlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcFJlZjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZk9yQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxUPiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcmVzaXplU2VydmljZTogV2luUmVzaXplLFxuICAgIGNvbmZpZz86IEx5T3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgPSB7IC4uLm5ldyBMeU92ZXJsYXlDb25maWcoKSwgLi4uY29uZmlnIH07XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBfX3N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJ1xuICAgIH07XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgT2JqZWN0LmFzc2lnbihfX3N0eWxlcywgY29uZmlnLnN0eWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSB0aGlzLl9uZXdJbmplY3RvciA9IGNyZWF0ZU92ZXJsYXlJbmplY3Rvcih0aGlzLl9pbmplY3Rvciwge1xuICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICBzdHlsZXM6IF9fc3R5bGVzLFxuICAgICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLl91cGRhdGVTdHlsZXMoX19zdHlsZXMpO1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcub25SZXNpemVTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5vblJlc2l6ZVNjcm9sbCA9IGNvbmZpZy5vblJlc2l6ZVNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fd2luZG93U1JTdWIgPSBtZXJnZSh3aW5kb3dTY3JvbGwuc2Nyb2xsJCwgcmVzaXplU2VydmljZS5yZXNpemUkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vblJlc2l6ZVNjcm9sbCkge1xuICAgICAgICAgIHRoaXMub25SZXNpemVTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb25maWcuY2xhc3Nlcykge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXM7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiAodGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVCYWNrZHJvcCghIWNvbmZpZy5oYXNCYWNrZHJvcCk7XG5cbiAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHkoX3RlbXBsYXRlUmVmT3JDb21wb25lbnQsIF9jb250ZXh0LCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5faGlkZGVTY3JvbGwoKTtcblxuICB9XG5cbiAgdXBkYXRlQmFja2Ryb3AoaGFzQmFja2Ryb3A6IGJvb2xlYW4pIHtcbiAgICBpZiAoaGFzQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLl9nZW5lcmF0ZUNvbXBvbmVudChMeU92ZXJsYXlCYWNrZHJvcCwgdGhpcy5fbmV3SW5qZWN0b3IpO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKGJhY2tkcm9wRWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fcmVzZXRTY3JvbGwoKTtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlcyhfX3N0eWxlczogb2JqZWN0KSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9lbCEuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4gfCBzdHJpbmcsIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsIS5hcHBlbmRDaGlsZChfKSk7XG5cbiAgICAgIC8vIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWwhLmlubmVyVGV4dCA9IHR5cGU7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5fZ2VuZXJhdGVDb21wb25lbnQodHlwZSwgaW5qZWN0b3IpO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9lbCEuYXBwZW5kQ2hpbGQodGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICAvKiogRGV0YWNoZXMgYSB2aWV3IGZyb20gZGlydHkgY2hlY2tpbmcgYWdhaW4gb2YgQXBwbGljYXRpb25SZWYuICovXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmLmhvc3RWaWV3KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLl9yZXNldFNjcm9sbCgpO1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbXBSZWYpIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcFJlZiA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9lbCkge1xuICAgICAgLy8gcmVtb3ZlIGlmIHRlbXBsYXRlIGlzIHN0cmluZ1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUJhY2tkcm9wKGZhbHNlKTtcbiAgICB0aGlzLl93aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIERldGFjaCAmIHJlbW92ZSAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGRlU2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fY29uZmlnLmhhc0JhY2tkcm9wICYmIHRoaXMuX292ZXJsYXlDb250YWluZXIub3ZlcmxheUxlbikge1xuICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHNjcm9sbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KTtcblxuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYGNhbGMoJHtzY3JvbGxXaWR0aH1weCArICR7dGhpcy5fcGFkZGluZ1JpZ2h0fSlgO1xuXG4gICAgICB9XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9yZXNldFNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX2NvbmZpZy5oYXNCYWNrZHJvcCAmJiB0aGlzLl9vdmVybGF5Q29udGFpbmVyLm92ZXJsYXlMZW4pIHtcbiAgICAgIGlmICh0aGlzLl9wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fcGFkZGluZ1JpZ2h0O1xuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSBudWxsO1xuICAgICAgfVxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==