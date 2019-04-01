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
import { LY_DIALOG_DATA } from './dialog-data';
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
        },
        '&': theme.dialog ? theme.dialog.root : null
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
            /** @type {?} */
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
export class LyDialogContext {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        this._injector = _injector;
        this.$implicit = this._injector.get(LyDialogRef);
        this.dialogRef = this._injector.get(LyDialogRef);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._injector.get(LY_DIALOG_DATA);
    }
}
if (false) {
    /** @type {?} */
    LyDialogContext.prototype.$implicit;
    /** @type {?} */
    LyDialogContext.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    LyDialogContext.prototype._injector;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUdkLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBa0IsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFFekMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7TUFHbkIsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1FBQ2pELFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQzVCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLGdCQUFnQixFQUFFO1lBQ2hCLE9BQU8sRUFBRSxN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QVQsU0FBUyxDQUFVO1FBUHZDLGNBQVMsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFNRCxDQUFDOzs7O0lBSjVDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUdGOzs7SUFSQyxvQ0FBaUQ7O0lBQ2pELG9DQUE0Qzs7Ozs7SUFNaEMsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlPdmVybGF5UmVmLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMeURpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBMeURpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9ESUFMT0dfREFUQSB9IGZyb20gJy4vZGlhbG9nLWRhdGEnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDEyKSxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICc+IDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgJyYnOiB0aGVtZS5kaWFsb2cgPyB0aGVtZS5kaWFsb2cucm9vdCA6IG51bGxcbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0NvbnRhaW5lcicsIFtcbiAgICAgIHN0YXRlKCd2b2lkLCBleGl0Jywgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuNyknfSkpLFxuICAgICAgc3RhdGUoJ2VudGVyJywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvcGFjaXR5OiAxfSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCwgKiA9PiBleGl0JyxcbiAgICAgICAgYW5pbWF0ZSgnNzVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknLCBzdHlsZSh7b3BhY2l0eTogMH0pKSlcbiAgICBdKVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tAZGlhbG9nQ29udGFpbmVyXSc6ICdfc3RhdGUnLFxuICAgICcoQGRpYWxvZ0NvbnRhaW5lci5zdGFydCknOiAnX29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLmRvbmUpJzogJ19vbkFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ0NvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9lbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyT3BlbmVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYmVmb3JlQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAvKipcbiAgICogU3RhdGUgb2YgdGhlIGRpYWxvZyBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcblxuICAvKiogQGludGVybmFsICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIF9uZXdJbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBMeU92ZXJsYXlSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTHlEaWFsb2dDb250ZXh0KHRoaXMuX25ld0luamVjdG9yKTtcblxuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgdW5kZWZpbmVkLCB0aGlzLl9uZXdJbmplY3Rvcik7XG4gICAgfVxuXG4gICAgLy8gSWYgZXhpc3QgZGlhbG9nU3R5bGVCbG9jayBhcHBseSBmb3IgdGhpcyBjb21wb25lbnQsIGVsc2UgZG8gbm90aGluZy5cbiAgICBjb25zdCB7IGNvbnRhaW5lckNsYXNzIH0gPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dDb25maWcpO1xuICAgIGlmIChjb250YWluZXJDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIG5ld0luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU7XG4gICAgdGhpcy5fbmV3SW5qZWN0b3IgPSBuZXdJbmplY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0byBjbG9zZSwgc3RhcnRzIHRoZSBkaWFsb2cgZXhpdCBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXJ0Q2xvc2UoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSAnZXhpdCc7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiEub25SZXNpemVTY3JvbGwhKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX25ld0luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoZGlhbG9nUmVmLnJlc3VsdCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9lbWJlZGRlZFZpZXdSZWYpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnkgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICBkaWFsb2dSZWYgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmplY3Rvci5nZXQoTFlfRElBTE9HX0RBVEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cbn1cbiJdfQ==