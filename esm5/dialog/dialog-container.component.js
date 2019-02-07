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
var STYLE_PRIORITY = -2;
/**
 * \@docs-private
 * @type {?}
 */
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
        }
    }
}); };
var ɵ0 = STYLES;
/**
 * \@docs-private
 */
var LyDialogContainer = /** @class */ (function () {
    function LyDialogContainer(_appRef, _overlayRef, _theme, _el, _cd, _renderer) {
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
    LyDialogContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._componentFactoryOrTemplate instanceof TemplateRef) {
            this._embeddedViewRef = this.viewContainerRef.createEmbeddedView(this._componentFactoryOrTemplate);
            this._appRef.attachView(this._embeddedViewRef);
        }
        else {
            this._componentRef = this.viewContainerRef.createComponent(this._componentFactoryOrTemplate, undefined, this._newInjector);
        }
        // If exist dialogStyleBlock apply for this component, else do nothing.
        var containerClass = this._newInjector.get(LyDialogConfig).containerClass;
        if (containerClass) {
            this._renderer.addClass(this._el.nativeElement, containerClass);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} componentFactoryOrTemplate
     * @param {?} newInjector
     * @return {?}
     */
    LyDialogContainer.prototype._init = /**
     * \@internal
     * @param {?} componentFactoryOrTemplate
     * @param {?} newInjector
     * @return {?}
     */
    function (componentFactoryOrTemplate, newInjector) {
        this._componentFactoryOrTemplate = componentFactoryOrTemplate;
        this._newInjector = newInjector;
    };
    /**
     * Start to close, starts the dialog exit animation.
     * @internal
     */
    /**
     * Start to close, starts the dialog exit animation.
     * \@internal
     * @return {?}
     */
    LyDialogContainer.prototype._startClose = /**
     * Start to close, starts the dialog exit animation.
     * \@internal
     * @return {?}
     */
    function () {
        this._state = 'exit';
        this._cd.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyDialogContainer.prototype._onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            (/** @type {?} */ ((/** @type {?} */ (this._overlayRef)).onResizeScroll))();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    LyDialogContainer.prototype._onAnimationDone = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'exit') {
            /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    LyDialogContainer.prototype._destroy = /**
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * \@internal
     * @return {?}
     */
    LyDialogContainer.prototype._getHostElement = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this._el.nativeElement;
    };
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
    LyDialogContainer.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: LyOverlayRef },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    LyDialogContainer.propDecorators = {
        viewContainerRef: [{ type: ViewChild, args: [TemplateRef, { read: ViewContainerRef },] }]
    };
    return LyDialogContainer;
}());
export { LyDialogContainer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUdkLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBa0IsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRTNDLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0lBR25CLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDakQsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsUUFBUSxFQUFFLE1BQU07UUFDaEIsZ0JBQWdCLEVBQUU7WUFDaEIsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsUUFBUTtZQUN2QixLQUFLLEVBQUUsTUFBTTtT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QUFDLENBQUMsQ0FBQzs0QkFDMUMsVUFBVSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsa0NBQWtDLEVBQ2pFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsVUFBVSxDQUFDLHNCQUFzQixFQUMvQixPQUFPLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzt5QkFDdkUsQ0FBQztxQkFDSDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsUUFBUTt3QkFDOUIsMEJBQTBCLEVBQUUsMkJBQTJCO3dCQUN2RCx5QkFBeUIsRUFBRSwwQkFBMEI7cUJBQ3REO2lCQUNGOzs7O2dCQXREQyxjQUFjO2dCQVNQLFlBQVk7Z0JBQUUsUUFBUTtnQkFKN0IsVUFBVTtnQkFDVixpQkFBaUI7Z0JBRmpCLFNBQVM7OzttQ0F1RVIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUFtRnBELHdCQUFDO0NBQUEsQUEzSEQsSUEySEM7U0F2R1ksaUJBQWlCOzs7Ozs7SUFFNUIsb0NBQXFFOzs7OztJQUNyRSw2Q0FBK0M7Ozs7O0lBQy9DLDBDQUF5Qzs7Ozs7SUFHekMseUNBQTRDOzs7OztJQUU1QywwQ0FBNEM7Ozs7O0lBRTVDLHlDQUEyQzs7Ozs7O0lBTTNDLG1DQUE0Qzs7Ozs7O0lBRzVDLDZDQUF3Rzs7Ozs7O0lBR3hHLHdEQUE4RTs7Ozs7SUFFOUUseUNBQStCOzs7OztJQUc3QixvQ0FBK0I7Ozs7O0lBQy9CLHdDQUFpQzs7Ozs7SUFDakMsbUNBQXdCOzs7OztJQUN4QixnQ0FBb0M7Ozs7O0lBQ3BDLGdDQUE4Qjs7Ozs7SUFDOUIsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlPdmVybGF5UmVmLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMeURpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBMeURpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoMTIpLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgJz4gOmZpcnN0LWNoaWxkJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRpYWxvZy1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQ29udGFpbmVyJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQsIGV4aXQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC43KSd9KSksXG4gICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZSd9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9wYWNpdHk6IDF9KSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkLCAqID0+IGV4aXQnLFxuICAgICAgICBhbmltYXRlKCc3NW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKVxuICAgIF0pXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW0BkaWFsb2dDb250YWluZXJdJzogJ19zdGF0ZScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLnN0YXJ0KSc6ICdfb25BbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAnKEBkaWFsb2dDb250YWluZXIuZG9uZSknOiAnX29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2VtYmVkZGVkVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYWZ0ZXJPcGVuZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9iZWZvcmVDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIC8qKlxuICAgKiBTdGF0ZSBvZiB0aGUgZGlhbG9nIGFuaW1hdGlvbi5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc3RhdGU6ICd2b2lkJyB8ICdlbnRlcicgfCAnZXhpdCcgPSAnZW50ZXInO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHByaXZhdGUgcmVhZG9ubHkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogQGludGVybmFsICovXG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlOiBDb21wb25lbnRGYWN0b3J5PGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgX25ld0luamVjdG9yOiBJbmplY3RvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX292ZXJsYXlSZWY6IEx5T3ZlcmxheVJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUpO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fZW1iZWRkZWRWaWV3UmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgdW5kZWZpbmVkLCB0aGlzLl9uZXdJbmplY3Rvcik7XG4gICAgfVxuXG4gICAgLy8gSWYgZXhpc3QgZGlhbG9nU3R5bGVCbG9jayBhcHBseSBmb3IgdGhpcyBjb21wb25lbnQsIGVsc2UgZG8gbm90aGluZy5cbiAgICBjb25zdCB7IGNvbnRhaW5lckNsYXNzIH0gPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dDb25maWcpO1xuICAgIGlmIChjb250YWluZXJDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIG5ld0luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU7XG4gICAgdGhpcy5fbmV3SW5qZWN0b3IgPSBuZXdJbmplY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0byBjbG9zZSwgc3RhcnRzIHRoZSBkaWFsb2cgZXhpdCBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXJ0Q2xvc2UoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSAnZXhpdCc7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiEub25SZXNpemVTY3JvbGwhKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX25ld0luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoZGlhbG9nUmVmLnJlc3VsdCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9lbWJlZGRlZFZpZXdSZWYpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19