import * as tslib_1 from "tslib";
import { OnInit, Component, ComponentFactory, TemplateRef, ViewChild, ViewContainerRef, Injector, ApplicationRef, ComponentRef, EmbeddedViewRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, DoCheck, } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { LyOverlayRef, LyTheme2, ThemeVariables, shadowBuilder, st2c, LyClasses, StyleCollection, StyleTemplate, ThemeRef } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
var STYLE_PRIORITY = -2;
/** @docs-private */
var STYLES = function (theme, ref) {
    var dialog = ref.selectorsOf(STYLES);
    return {
        root: function () { return function (className) { return className + "{display:flex;position:relative;background-color:" + theme.background.primary.default + ";border-radius:4px;box-shadow:" + shadowBuilder(12) + ";overflow:auto;}" + st2c(((theme.dialog
            && theme.dialog.root
            && (theme.dialog.root instanceof StyleCollection
                ? theme.dialog.root.setTransformer(function (fn) { return fn(dialog); })
                : theme.dialog.root(dialog)))), "" + className) + className + " > :first-child{display:flex;flex-direction:column;width:100%;}"; }; }
    };
};
var ɵ0 = STYLES;
/** @docs-private */
var LyDialogContainer = /** @class */ (function () {
    function LyDialogContainer(_appRef, _overlayRef, _theme, _el, _cd, _renderer) {
        this._appRef = _appRef;
        this._overlayRef = _overlayRef;
        this._theme = _theme;
        this._el = _el;
        this._cd = _cd;
        this._renderer = _renderer;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        /** @internal */
        this._afterOpened = new Subject();
        /** @internal */
        this._beforeClosed = new Subject();
        /** @internal */
        this._afterClosed = new Subject();
        /**
         * State of the dialog animation.
         * @internal
         */
        this._state = 'enter';
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    LyDialogContainer.prototype.ngOnInit = function () {
        if (this._componentFactoryOrTemplate instanceof TemplateRef) {
            var context = new LyDialogContext(this._newInjector);
            this._embeddedViewRef = this.viewContainerRef
                .createEmbeddedView(this._componentFactoryOrTemplate, context);
        }
        else {
            this._componentRef = this.viewContainerRef
                .createComponent(this._componentFactoryOrTemplate, undefined, this._newInjector);
        }
        // If exist dialogStyleBlock apply for this component, else do nothing.
        var containerClass = this._newInjector.get(LyDialogConfig).containerClass;
        if (containerClass) {
            this._renderer.addClass(this._el.nativeElement, containerClass);
        }
    };
    LyDialogContainer.prototype.ngDoCheck = function () {
        this._overlayRef.onResizeScroll();
    };
    /** @internal */
    LyDialogContainer.prototype._init = function (componentFactoryOrTemplate, newInjector) {
        this._componentFactoryOrTemplate = componentFactoryOrTemplate;
        this._newInjector = newInjector;
    };
    /**
     * Start to close, starts the dialog exit animation.
     * @internal
     */
    LyDialogContainer.prototype._startClose = function () {
        this._state = 'exit';
        this._cd.markForCheck();
    };
    LyDialogContainer.prototype._onAnimationStart = function (event) {
        if (event.toState === 'enter') {
            this._overlayRef.onResizeScroll();
        }
    };
    /** @internal */
    LyDialogContainer.prototype._onAnimationDone = function (event) {
        if (event.toState === 'exit') {
            var dialogRef = this._newInjector.get(LyDialogRef);
            this._destroy();
            this._overlayRef.destroy();
            this._afterClosed.next(dialogRef.result);
            this._afterClosed.complete();
        }
        else if (event.toState === 'enter') {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    };
    LyDialogContainer.prototype._destroy = function () {
        if (this._componentRef) {
            this._appRef.detachView(this._componentRef.hostView);
            this._componentRef.destroy();
        }
        else {
            this._appRef.detachView(this._embeddedViewRef);
            this._embeddedViewRef.detach();
            this._embeddedViewRef.destroy();
        }
    };
    /** @internal */
    LyDialogContainer.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LyDialogContainer.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: LyOverlayRef },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        ViewChild(TemplateRef, { read: ViewContainerRef, static: true })
    ], LyDialogContainer.prototype, "viewContainerRef", void 0);
    LyDialogContainer = tslib_1.__decorate([
        Component({
            selector: 'ly-dialog-container',
            template: '<ng-template></ng-template>',
            changeDetection: ChangeDetectionStrategy.OnPush,
            animations: [
                trigger('dialogContainer', [
                    state('void, exit', style({ opacity: 0, transform: 'scale(0.7)' })),
                    state('enter', style({ transform: 'none' })),
                    transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'none', opacity: 1 }))),
                    transition('* => void, * => exit', animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0 })))
                ])
            ],
            host: {
                '[@dialogContainer]': '_state',
                '(@dialogContainer.start)': '_onAnimationStart($event)',
                '(@dialogContainer.done)': '_onAnimationDone($event)'
            }
        })
    ], LyDialogContainer);
    return LyDialogContainer;
}());
export { LyDialogContainer };
var LyDialogContext = /** @class */ (function () {
    function LyDialogContext(_injector) {
        this._injector = _injector;
        this.$implicit = this._injector.get(LyDialogRef);
        this.dialogRef = this._injector.get(LyDialogRef);
    }
    Object.defineProperty(LyDialogContext.prototype, "data", {
        get: function () {
            return this._injector.get(LY_DIALOG_DATA);
        },
        enumerable: true,
        configurable: true
    });
    return LyDialogContext;
}());
export { LyDialogContext };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsY0FBYyxFQUNkLFlBQVksRUFDWixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE9BQU8sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsWUFBWSxFQUNaLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUNiLElBQUksRUFDSixTQUFTLEVBQ1QsZUFBZSxFQUNmLGFBQWEsRUFDYixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBYzFCLG9CQUFvQjtBQUNwQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDLEVBQUUsR0FBYTtJQUN0RSxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE9BQU87UUFDTCxJQUFJLEVBQUUsY0FBTyxP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LEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFLENBQUM7YUFDSDtZQUNELElBQUksRUFBRTtnQkFDSixvQkFBb0IsRUFBRSxRQUFRO2dCQUM5QiwwQkFBMEIsRUFBRSwyQkFBMkI7Z0JBQ3ZELHlCQUF5QixFQUFFLDBCQUEwQjthQUN0RDtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0ErRzdCO0lBQUQsd0JBQUM7Q0FBQSxBQS9HRCxJQStHQztTQS9HWSxpQkFBaUI7QUFpSDlCO0lBUUUseUJBQW9CLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFQdkMsY0FBUyxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELGNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQU1ELENBQUM7SUFKNUMsc0JBQUksaUNBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFHSCxzQkFBQztBQUFELENBQUMsQUFURCxJQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEb0NoZWNrLFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5UmVmLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHNoYWRvd0J1aWxkZXIsXG4gIHN0MmMsXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEx5RGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcbmltcG9ydCB7IEx5RGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcbmltcG9ydCB7IExZX0RJQUxPR19EQVRBIH0gZnJvbSAnLi9kaWFsb2ctZGF0YSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlEaWFsb2dUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIERpYWxvZyBDb21wb25lbnQuICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgLyoqIFN0eWxlcyB0aGF0IGFwcGx5IHdoZW4gYSBjb2xvciBpcyBzZXQuICovXG4gIGNvbG9yPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5RGlhbG9nVmFyaWFibGVzIHtcbiAgZGlhbG9nPzogTHlEaWFsb2dUaGVtZTtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeURpYWxvZ1ZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBkaWFsb2cgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHR9O2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6JHtzaGFkb3dCdWlsZGVyKDEyKX07b3ZlcmZsb3c6YXV0bzt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuZGlhbG9nXG4gICAgICAgICAgICAmJiB0aGVtZS5kaWFsb2cucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmRpYWxvZy5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuZGlhbG9nLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oZGlhbG9nKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5kaWFsb2cucm9vdChkaWFsb2cpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ID4gOmZpcnN0LWNoaWxke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRpYWxvZy1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQ29udGFpbmVyJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQsIGV4aXQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC43KSd9KSksXG4gICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZSd9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9wYWNpdHk6IDF9KSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkLCAqID0+IGV4aXQnLFxuICAgICAgICBhbmltYXRlKCc3NW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKVxuICAgIF0pXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW0BkaWFsb2dDb250YWluZXJdJzogJ19zdGF0ZScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLnN0YXJ0KSc6ICdfb25BbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAnKEBkaWFsb2dDb250YWluZXIuZG9uZSknOiAnX29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2VtYmVkZGVkVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYWZ0ZXJPcGVuZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9iZWZvcmVDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIC8qKlxuICAgKiBTdGF0ZSBvZiB0aGUgZGlhbG9nIGFuaW1hdGlvbi5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc3RhdGU6ICd2b2lkJyB8ICdlbnRlcicgfCAnZXhpdCcgPSAnZW50ZXInO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBfbmV3SW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogTHlPdmVybGF5UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IEx5RGlhbG9nQ29udGV4dCh0aGlzLl9uZXdJbmplY3Rvcik7XG5cbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgICAgIC5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIHVuZGVmaW5lZCwgdGhpcy5fbmV3SW5qZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0IGRpYWxvZ1N0eWxlQmxvY2sgYXBwbHkgZm9yIHRoaXMgY29tcG9uZW50LCBlbHNlIGRvIG5vdGhpbmcuXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gdGhpcy5fbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nQ29uZmlnKTtcbiAgICBpZiAoY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lckNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5vblJlc2l6ZVNjcm9sbCEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIG5ld0luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU7XG4gICAgdGhpcy5fbmV3SW5qZWN0b3IgPSBuZXdJbmplY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0byBjbG9zZSwgc3RhcnRzIHRoZSBkaWFsb2cgZXhpdCBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXJ0Q2xvc2UoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSAnZXhpdCc7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiEub25SZXNpemVTY3JvbGwhKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX25ld0luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoZGlhbG9nUmVmLnJlc3VsdCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9lbWJlZGRlZFZpZXdSZWYpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnkgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICBkaWFsb2dSZWYgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmplY3Rvci5nZXQoTFlfRElBTE9HX0RBVEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cbn1cbiJdfQ==