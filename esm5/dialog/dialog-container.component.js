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
        },
        '&': theme.dialog ? theme.dialog.root : null
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
            /** @type {?} */
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
var LyDialogContext = /** @class */ (function () {
    function LyDialogContext(_injector) {
        this._injector = _injector;
        this.$implicit = this._injector.get(LyDialogRef);
        this.dialogRef = this._injector.get(LyDialogRef);
    }
    Object.defineProperty(LyDialogContext.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._injector.get(LY_DIALOG_DATA);
        },
        enumerable: true,
        configurable: true
    });
    return LyDialogContext;
}());
export { LyDialogContext };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUdkLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBa0IsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFekMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFHbkIsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsVUFBVTtRQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNqRCxZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUM1QixRQUFRLEVBQUUsTUFBTTtRQUNoQixnQkFBZ0IsRUFBRTtZQUNoQixPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRCxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7S0FDN0M7Q0FDRixDQUFDLEVBZndDLENBZXhDOzs7OztBQUdGO0lBK0NFLDJCQUNVLE9BQXVCLEVBQ3ZCLFdBQXlCLEVBQ3pCLE1BQWdCLEVBQ2hCLEdBQTRCLEVBQzVCLEdBQXNCLEVBQ3RCLFNBQW9CO1FBTHBCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVzs7OztRQS9CckIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQzs7OztRQUs1RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFFbkMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDOzs7O1FBRW5DLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7Ozs7UUFNM0MsV0FBTSxHQUE4QixPQUFPLENBQUM7UUFrQjFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFDRCxvQ0FBUTs7O0lBQVI7UUFFRSxJQUFJLElBQUksQ0FBQywyQkFBMkIsWUFBWSxXQUFXLEVBQUU7O2dCQUVyRCxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUV0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtpQkFDNUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7aUJBQ3JDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN0Rjs7UUFHTyxJQUFBLHFFQUFjO1FBQ3RCLElBQUksY0FBYyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQztJQUVELGdCQUFnQjs7Ozs7OztJQUNoQixpQ0FBSzs7Ozs7O0lBQUwsVUFBTSwwQkFBb0UsRUFBRSxXQUFxQjtRQUMvRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsMEJBQTBCLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdUNBQVc7Ozs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQXFCO1FBQ3JDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDN0IsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLGNBQWMsRUFBQyxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCOzs7Ozs7SUFDaEIsNENBQWdCOzs7OztJQUFoQixVQUFpQixLQUFxQjtRQUNwQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFOztnQkFDdEIsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxvQ0FBUTs7OztJQUFoQjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCOzs7OztJQUNoQiwyQ0FBZTs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDOztnQkE5SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGlCQUFpQixFQUFFOzRCQUN6QixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7NEJBQ2pFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7NEJBQzFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLGtDQUFrQyxFQUNqRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFDL0IsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3ZFLENBQUM7cUJBQ0g7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG9CQUFvQixFQUFFLFFBQVE7d0JBQzlCLDBCQUEwQixFQUFFLDJCQUEyQjt3QkFDdkQseUJBQXlCLEVBQUUsMEJBQTBCO3FCQUN0RDtpQkFDRjs7OztnQkF4REMsY0FBYztnQkFTUCxZQUFZO2dCQUFFLFFBQVE7Z0JBSjdCLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUZqQixTQUFTOzs7bUNBeUVSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0lBdUZwRCx3QkFBQztDQUFBLEFBL0hELElBK0hDO1NBM0dZLGlCQUFpQjs7Ozs7O0lBRTVCLG9DQUFxRTs7Ozs7SUFDckUsNkNBQStDOzs7OztJQUMvQywwQ0FBeUM7Ozs7O0lBR3pDLHlDQUE0Qzs7Ozs7SUFFNUMsMENBQTRDOzs7OztJQUU1Qyx5Q0FBMkM7Ozs7OztJQU0zQyxtQ0FBNEM7Ozs7OztJQUc1Qyw2Q0FBd0c7Ozs7OztJQUd4Ryx3REFBOEU7Ozs7O0lBRTlFLHlDQUErQjs7Ozs7SUFHN0Isb0NBQStCOzs7OztJQUMvQix3Q0FBaUM7Ozs7O0lBQ2pDLG1DQUF3Qjs7Ozs7SUFDeEIsZ0NBQW9DOzs7OztJQUNwQyxnQ0FBOEI7Ozs7O0lBQzlCLHNDQUE0Qjs7QUE0RWhDO0lBUUUseUJBQW9CLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFQdkMsY0FBUyxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELGNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQU1ELENBQUM7SUFKNUMsc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFHSCxzQkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkMsb0NBQWlEOztJQUNqRCxvQ0FBNEM7Ozs7O0lBTWhDLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbmplY3RvcixcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgdHJpZ2dlciwgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheVJlZiwgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTHlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgTHlEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHsgTFlfRElBTE9HX0RBVEEgfSBmcm9tICcuL2RpYWxvZy1kYXRhJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcigxMiksXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAnPiA6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgICcmJzogdGhlbWUuZGlhbG9nID8gdGhlbWUuZGlhbG9nLnJvb3QgOiBudWxsXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZGlhbG9nLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dDb250YWluZXInLCBbXG4gICAgICBzdGF0ZSgndm9pZCwgZXhpdCcsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjcpJ30pKSxcbiAgICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXInLCBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb3BhY2l0eTogMX0pKSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQsICogPT4gZXhpdCcsXG4gICAgICAgIGFuaW1hdGUoJzc1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpXG4gICAgXSlcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbQGRpYWxvZ0NvbnRhaW5lcl0nOiAnX3N0YXRlJyxcbiAgICAnKEBkaWFsb2dDb250YWluZXIuc3RhcnQpJzogJ19vbkFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICcoQGRpYWxvZ0NvbnRhaW5lci5kb25lKSc6ICdfb25BbmltYXRpb25Eb25lKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfZW1iZWRkZWRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcblxuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9hZnRlck9wZW5lZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2JlZm9yZUNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYWZ0ZXJDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIFN0YXRlIG9mIHRoZSBkaWFsb2cgYW5pbWF0aW9uLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9zdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyB8ICdleGl0JyA9ICdlbnRlcic7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBfbmV3SW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogTHlPdmVybGF5UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IEx5RGlhbG9nQ29udGV4dCh0aGlzLl9uZXdJbmplY3Rvcik7XG5cbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgICAgIC5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIHVuZGVmaW5lZCwgdGhpcy5fbmV3SW5qZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0IGRpYWxvZ1N0eWxlQmxvY2sgYXBwbHkgZm9yIHRoaXMgY29tcG9uZW50LCBlbHNlIGRvIG5vdGhpbmcuXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gdGhpcy5fbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nQ29uZmlnKTtcbiAgICBpZiAoY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lckNsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9pbml0KGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlOiBDb21wb25lbnRGYWN0b3J5PGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+LCBuZXdJbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSA9IGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlO1xuICAgIHRoaXMuX25ld0luamVjdG9yID0gbmV3SW5qZWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdG8gY2xvc2UsIHN0YXJ0cyB0aGUgZGlhbG9nIGV4aXQgYW5pbWF0aW9uLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9zdGFydENsb3NlKCkge1xuICAgIHRoaXMuX3N0YXRlID0gJ2V4aXQnO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYhLm9uUmVzaXplU2Nyb2xsISgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX29uQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KGRpYWxvZ1JlZi5yZXN1bHQpO1xuICAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLm5leHQoKTtcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fZW1iZWRkZWRWaWV3UmVmKTtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGV4dCB7XG4gICRpbXBsaWNpdDogYW55ID0gdGhpcy5faW5qZWN0b3IuZ2V0KEx5RGlhbG9nUmVmKTtcbiAgZGlhbG9nUmVmID0gdGhpcy5faW5qZWN0b3IuZ2V0KEx5RGlhbG9nUmVmKTtcblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5qZWN0b3IuZ2V0KExZX0RJQUxPR19EQVRBKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcikgeyB9XG59XG4iXX0=