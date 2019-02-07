/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild, ViewContainerRef, ApplicationRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { LyOverlayRef, LyTheme2, shadowBuilder } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { LyDialogConfig } from './dialog-config';
/** @type {?} */
const STYLE_PRIORITY = -2;
/**
 * \@docs-private
 * @type {?}
 */
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
        }
    }
});
const ɵ0 = STYLES;
/**
 * \@docs-private
 */
export class LyDialogContainer {
    /**
     * @param {?} _appRef
     * @param {?} _overlayRef
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _cd
     * @param {?} _renderer
     */
    constructor(_appRef, _overlayRef, _theme, _el, _cd, _renderer) {
        this._appRef = _appRef;
        this._overlayRef = _overlayRef;
        this._theme = _theme;
        this._el = _el;
        this._cd = _cd;
        this._renderer = _renderer;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        /**
         * \@internal
         */
        this._afterOpened = new Subject();
        /**
         * \@internal
         */
        this._beforeClosed = new Subject();
        /**
         * \@internal
         */
        this._afterClosed = new Subject();
        /**
         * State of the dialog animation.
         * \@internal
         */
        this._state = 'enter';
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._componentFactoryOrTemplate instanceof TemplateRef) {
            this._embeddedViewRef = this.viewContainerRef.createEmbeddedView(this._componentFactoryOrTemplate);
            this._appRef.attachView(this._embeddedViewRef);
        }
        else {
            this._componentRef = this.viewContainerRef.createComponent(this._componentFactoryOrTemplate, undefined, this._newInjector);
        }
        // If exist dialogStyleBlock apply for this component, else do nothing.
        const { containerClass } = this._newInjector.get(LyDialogConfig);
        if (containerClass) {
            this._renderer.addClass(this._el.nativeElement, containerClass);
        }
    }
    /**
     * \@internal
     * @param {?} componentFactoryOrTemplate
     * @param {?} newInjector
     * @return {?}
     */
    _init(componentFactoryOrTemplate, newInjector) {
        this._componentFactoryOrTemplate = componentFactoryOrTemplate;
        this._newInjector = newInjector;
    }
    /**
     * Start to close, starts the dialog exit animation.
     * \@internal
     * @return {?}
     */
    _startClose() {
        this._state = 'exit';
        this._cd.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onAnimationStart(event) {
        if (event.toState === 'enter') {
            (/** @type {?} */ ((/** @type {?} */ (this._overlayRef)).onResizeScroll))();
        }
    }
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    _onAnimationDone(event) {
        if (event.toState === 'exit') {
            /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
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
    /**
     * \@internal
     * @return {?}
     */
    _getHostElement() {
        return this._el.nativeElement;
    }
}
LyDialogContainer.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
LyDialogContainer.ctorParameters = () => [
    { type: ApplicationRef },
    { type: LyOverlayRef },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
LyDialogContainer.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: [TemplateRef, { read: ViewContainerRef },] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyDialogContainer.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._embeddedViewRef;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._componentRef;
    /**
     * \@internal
     * @type {?}
     */
    LyDialogContainer.prototype._afterOpened;
    /**
     * \@internal
     * @type {?}
     */
    LyDialogContainer.prototype._beforeClosed;
    /**
     * \@internal
     * @type {?}
     */
    LyDialogContainer.prototype._afterClosed;
    /**
     * State of the dialog animation.
     * \@internal
     * @type {?}
     */
    LyDialogContainer.prototype._state;
    /**
     * \@internal
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype.viewContainerRef;
    /**
     * \@internal
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._componentFactoryOrTemplate;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._newInjector;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    LyDialogContainer.prototype._renderer;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUdkLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBa0IsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O01BRTNDLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O01BR25CLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsVUFBVTtRQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNqRCxZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUM1QixRQUFRLEVBQUUsTUFBTTtRQUNoQixnQkFBZ0IsRUFBRTtZQUNoQixPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxN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Q0FBa0MsRUFDakUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxVQUFVLENBQUMsc0JBQXNCLEVBQy9CLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2RSxDQUFDO2lCQUNIO2dCQUNELElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxRQUFRO29CQUM5QiwwQkFBMEIsRUFBRSwyQkFBMkI7b0JBQ3ZELHlCQUF5QixFQUFFLDBCQUEwQjtpQkFDdEQ7YUFDRjs7OztZQXREQyxjQUFjO1lBU1AsWUFBWTtZQUFFLFFBQVE7WUFKN0IsVUFBVTtZQUNWLGlCQUFpQjtZQUZqQixTQUFTOzs7K0JBdUVSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7Ozs7SUFsQmxELG9DQUFxRTs7Ozs7SUFDckUsNkNBQStDOzs7OztJQUMvQywwQ0FBeUM7Ozs7O0lBR3pDLHlDQUE0Qzs7Ozs7SUFFNUMsMENBQTRDOzs7OztJQUU1Qyx5Q0FBMkM7Ozs7OztJQU0zQyxtQ0FBNEM7Ozs7OztJQUc1Qyw2Q0FBd0c7Ozs7OztJQUd4Ryx3REFBOEU7Ozs7O0lBRTlFLHlDQUErQjs7Ozs7SUFHN0Isb0NBQStCOzs7OztJQUMvQix3Q0FBaUM7Ozs7O0lBQ2pDLG1DQUF3Qjs7Ozs7SUFDeEIsZ0NBQW9DOzs7OztJQUNwQyxnQ0FBOEI7Ozs7O0lBQzlCLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbmplY3RvcixcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgdHJpZ2dlciwgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheVJlZiwgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTHlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgTHlEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDEyKSxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICc+IDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0NvbnRhaW5lcicsIFtcbiAgICAgIHN0YXRlKCd2b2lkLCBleGl0Jywgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuNyknfSkpLFxuICAgICAgc3RhdGUoJ2VudGVyJywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvcGFjaXR5OiAxfSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCwgKiA9PiBleGl0JyxcbiAgICAgICAgYW5pbWF0ZSgnNzVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknLCBzdHlsZSh7b3BhY2l0eTogMH0pKSlcbiAgICBdKVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tAZGlhbG9nQ29udGFpbmVyXSc6ICdfc3RhdGUnLFxuICAgICcoQGRpYWxvZ0NvbnRhaW5lci5zdGFydCknOiAnX29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLmRvbmUpJzogJ19vbkFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ0NvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9lbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyT3BlbmVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYmVmb3JlQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAvKipcbiAgICogU3RhdGUgb2YgdGhlIGRpYWxvZyBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcblxuICAvKiogQGludGVybmFsICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIF9uZXdJbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBMeU92ZXJsYXlSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9lbWJlZGRlZFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlKTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2VtYmVkZGVkVmlld1JlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIHVuZGVmaW5lZCwgdGhpcy5fbmV3SW5qZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0IGRpYWxvZ1N0eWxlQmxvY2sgYXBwbHkgZm9yIHRoaXMgY29tcG9uZW50LCBlbHNlIGRvIG5vdGhpbmcuXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gdGhpcy5fbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nQ29uZmlnKTtcbiAgICBpZiAoY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lckNsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9pbml0KGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlOiBDb21wb25lbnRGYWN0b3J5PGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+LCBuZXdJbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSA9IGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlO1xuICAgIHRoaXMuX25ld0luamVjdG9yID0gbmV3SW5qZWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdG8gY2xvc2UsIHN0YXJ0cyB0aGUgZGlhbG9nIGV4aXQgYW5pbWF0aW9uLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9zdGFydENsb3NlKCkge1xuICAgIHRoaXMuX3N0YXRlID0gJ2V4aXQnO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYhLm9uUmVzaXplU2Nyb2xsISgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX29uQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KGRpYWxvZ1JlZi5yZXN1bHQpO1xuICAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLm5leHQoKTtcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fZW1iZWRkZWRWaWV3UmVmKTtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==