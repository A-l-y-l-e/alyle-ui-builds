import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewChild, ViewContainerRef, ApplicationRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { LyOverlayRef, LyTheme2, shadowBuilder } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
var STYLE_PRIORITY = -2;
/** @docs-private */
var STYLES = function (theme) { return ({
    root: {
        display: 'flex',
        position: 'relative',
        backgroundColor: theme.background.primary.default,
        borderRadius: '4px',
        boxShadow: shadowBuilder(12),
        overflow: 'auto',
        '> :first-child': {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        '&': theme.dialog ? theme.dialog.root : null
    }
}); };
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
    tslib_1.__decorate([
        ViewChild(TemplateRef, { read: ViewContainerRef, static: true }),
        tslib_1.__metadata("design:type", ViewContainerRef)
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
        }),
        tslib_1.__metadata("design:paramtypes", [ApplicationRef,
            LyOverlayRef,
            LyTheme2,
            ElementRef,
            ChangeDetectorRef,
            Renderer2])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUdkLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBa0IsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1FBQ2pELFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQzVCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLGdCQUFnQixFQUFFO1lB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QVMsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFNRCxDQUFDO0lBSjVDLHNCQUFJLGlDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBR0gsc0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbmplY3RvcixcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRG9DaGVjayxcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgdHJpZ2dlciwgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheVJlZiwgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTHlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgTHlEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHsgTFlfRElBTE9HX0RBVEEgfSBmcm9tICcuL2RpYWxvZy1kYXRhJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcigxMiksXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAnPiA6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgICcmJzogdGhlbWUuZGlhbG9nID8gdGhlbWUuZGlhbG9nLnJvb3QgOiBudWxsXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZGlhbG9nLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dDb250YWluZXInLCBbXG4gICAgICBzdGF0ZSgndm9pZCwgZXhpdCcsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjcpJ30pKSxcbiAgICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXInLCBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb3BhY2l0eTogMX0pKSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQsICogPT4gZXhpdCcsXG4gICAgICAgIGFuaW1hdGUoJzc1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpXG4gICAgXSlcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbQGRpYWxvZ0NvbnRhaW5lcl0nOiAnX3N0YXRlJyxcbiAgICAnKEBkaWFsb2dDb250YWluZXIuc3RhcnQpJzogJ19vbkFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICcoQGRpYWxvZ0NvbnRhaW5lci5kb25lKSc6ICdfb25BbmltYXRpb25Eb25lKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfZW1iZWRkZWRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcblxuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9hZnRlck9wZW5lZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2JlZm9yZUNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYWZ0ZXJDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIFN0YXRlIG9mIHRoZSBkaWFsb2cgYW5pbWF0aW9uLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9zdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyB8ICdleGl0JyA9ICdlbnRlcic7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIF9uZXdJbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBMeU92ZXJsYXlSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTHlEaWFsb2dDb250ZXh0KHRoaXMuX25ld0luamVjdG9yKTtcblxuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgdW5kZWZpbmVkLCB0aGlzLl9uZXdJbmplY3Rvcik7XG4gICAgfVxuXG4gICAgLy8gSWYgZXhpc3QgZGlhbG9nU3R5bGVCbG9jayBhcHBseSBmb3IgdGhpcyBjb21wb25lbnQsIGVsc2UgZG8gbm90aGluZy5cbiAgICBjb25zdCB7IGNvbnRhaW5lckNsYXNzIH0gPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dDb25maWcpO1xuICAgIGlmIChjb250YWluZXJDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLm9uUmVzaXplU2Nyb2xsISgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfaW5pdChjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PiwgbmV3SW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgPSBjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTtcbiAgICB0aGlzLl9uZXdJbmplY3RvciA9IG5ld0luamVjdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRvIGNsb3NlLCBzdGFydHMgdGhlIGRpYWxvZyBleGl0IGFuaW1hdGlvbi5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc3RhcnRDbG9zZSgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9ICdleGl0JztcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9vbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmIS5vblJlc2l6ZVNjcm9sbCEoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9vbkFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdleGl0Jykge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5fbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nUmVmKTtcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dChkaWFsb2dSZWYucmVzdWx0KTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50b1N0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICB0aGlzLl9hZnRlck9wZW5lZC5uZXh0KCk7XG4gICAgICB0aGlzLl9hZnRlck9wZW5lZC5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2VtYmVkZGVkVmlld1JlZik7XG4gICAgICB0aGlzLl9lbWJlZGRlZFZpZXdSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLl9lbWJlZGRlZFZpZXdSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMeURpYWxvZ0NvbnRleHQge1xuICAkaW1wbGljaXQ6IGFueSA9IHRoaXMuX2luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gIGRpYWxvZ1JlZiA9IHRoaXMuX2luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luamVjdG9yLmdldChMWV9ESUFMT0dfREFUQSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHsgfVxufVxuIl19