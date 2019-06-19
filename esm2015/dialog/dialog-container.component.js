import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewChild, ViewContainerRef, ApplicationRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { LyOverlayRef, LyTheme2, shadowBuilder } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
const STYLE_PRIORITY = -2;
/** @docs-private */
const STYLES = (theme) => ({
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
});
const ɵ0 = STYLES;
/** @docs-private */
let LyDialogContainer = class LyDialogContainer {
    constructor(_appRef, _overlayRef, _theme, _el, _cd, _renderer) {
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
    ngOnInit() {
        if (this._componentFactoryOrTemplate instanceof TemplateRef) {
            const context = new LyDialogContext(this._newInjector);
            this._embeddedViewRef = this.viewContainerRef
                .createEmbeddedView(this._componentFactoryOrTemplate, context);
        }
        else {
            this._componentRef = this.viewContainerRef
                .createComponent(this._componentFactoryOrTemplate, undefined, this._newInjector);
        }
        // If exist dialogStyleBlock apply for this component, else do nothing.
        const { containerClass } = this._newInjector.get(LyDialogConfig);
        if (containerClass) {
            this._renderer.addClass(this._el.nativeElement, containerClass);
        }
    }
    ngDoCheck() {
        this._overlayRef.onResizeScroll();
    }
    /** @internal */
    _init(componentFactoryOrTemplate, newInjector) {
        this._componentFactoryOrTemplate = componentFactoryOrTemplate;
        this._newInjector = newInjector;
    }
    /**
     * Start to close, starts the dialog exit animation.
     * @internal
     */
    _startClose() {
        this._state = 'exit';
        this._cd.markForCheck();
    }
    _onAnimationStart(event) {
        if (event.toState === 'enter') {
            this._overlayRef.onResizeScroll();
        }
    }
    /** @internal */
    _onAnimationDone(event) {
        if (event.toState === 'exit') {
            const dialogRef = this._newInjector.get(LyDialogRef);
            this._destroy();
            this._overlayRef.destroy();
            this._afterClosed.next(dialogRef.result);
            this._afterClosed.complete();
        }
        else if (event.toState === 'enter') {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    }
    _destroy() {
        if (this._componentRef) {
            this._appRef.detachView(this._componentRef.hostView);
            this._componentRef.destroy();
        }
        else {
            this._appRef.detachView(this._embeddedViewRef);
            this._embeddedViewRef.detach();
            this._embeddedViewRef.destroy();
        }
    }
    /** @internal */
    _getHostElement() {
        return this._el.nativeElement;
    }
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
export { LyDialogContainer };
export class LyDialogContext {
    constructor(_injector) {
        this._injector = _injector;
        this.$implicit = this._injector.get(LyDialogRef);
        this.dialogRef = this._injector.get(LyDialogRef);
    }
    get data() {
        return this._injector.get(LY_DIALOG_DATA);
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUdkLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBa0IsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDakQsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsUUFBUSxFQUFFLE1BQU07UUFDaEIsZ0JBQWdCLEVB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QUFTLENBQVU7UUFQdkMsY0FBUyxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELGNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQU1ELENBQUM7SUFKNUMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBR0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0b3IsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERvQ2hlY2ssXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHRyaWdnZXIsIEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMeU92ZXJsYXlSZWYsIEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcywgc2hhZG93QnVpbGRlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEx5RGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcbmltcG9ydCB7IEx5RGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcbmltcG9ydCB7IExZX0RJQUxPR19EQVRBIH0gZnJvbSAnLi9kaWFsb2ctZGF0YSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoMTIpLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgJz4gOmZpcnN0LWNoaWxkJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICAnJic6IHRoZW1lLmRpYWxvZyA/IHRoZW1lLmRpYWxvZy5yb290IDogbnVsbFxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRpYWxvZy1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQ29udGFpbmVyJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQsIGV4aXQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC43KSd9KSksXG4gICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZSd9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9wYWNpdHk6IDF9KSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkLCAqID0+IGV4aXQnLFxuICAgICAgICBhbmltYXRlKCc3NW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKVxuICAgIF0pXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW0BkaWFsb2dDb250YWluZXJdJzogJ19zdGF0ZScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLnN0YXJ0KSc6ICdfb25BbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAnKEBkaWFsb2dDb250YWluZXIuZG9uZSknOiAnX29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2VtYmVkZGVkVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYWZ0ZXJPcGVuZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9iZWZvcmVDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIC8qKlxuICAgKiBTdGF0ZSBvZiB0aGUgZGlhbG9nIGFuaW1hdGlvbi5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc3RhdGU6ICd2b2lkJyB8ICdlbnRlcicgfCAnZXhpdCcgPSAnZW50ZXInO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBfbmV3SW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogTHlPdmVybGF5UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IEx5RGlhbG9nQ29udGV4dCh0aGlzLl9uZXdJbmplY3Rvcik7XG5cbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgICAgIC5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIHVuZGVmaW5lZCwgdGhpcy5fbmV3SW5qZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0IGRpYWxvZ1N0eWxlQmxvY2sgYXBwbHkgZm9yIHRoaXMgY29tcG9uZW50LCBlbHNlIGRvIG5vdGhpbmcuXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gdGhpcy5fbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nQ29uZmlnKTtcbiAgICBpZiAoY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lckNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5vblJlc2l6ZVNjcm9sbCEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIG5ld0luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU7XG4gICAgdGhpcy5fbmV3SW5qZWN0b3IgPSBuZXdJbmplY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0byBjbG9zZSwgc3RhcnRzIHRoZSBkaWFsb2cgZXhpdCBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXJ0Q2xvc2UoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSAnZXhpdCc7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiEub25SZXNpemVTY3JvbGwhKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX25ld0luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoZGlhbG9nUmVmLnJlc3VsdCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9lbWJlZGRlZFZpZXdSZWYpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnkgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICBkaWFsb2dSZWYgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmplY3Rvci5nZXQoTFlfRElBTE9HX0RBVEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cbn1cbiJdfQ==