/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, TemplateRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { LyOverlay, LyOverlayRef, LyTheme2, STYLES_BACKDROP_DARK } from '@alyle/ui';
import { LyDialogContainer } from './dialog-container.component';
import { LyDialogRef } from './dialog-ref';
import { DynamicInjector } from './dynamic-injector';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
var LyDialog = /** @class */ (function () {
    function LyDialog(_overlay, _componentFactoryResolver, _theme, _injector) {
        this._overlay = _overlay;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._theme = _theme;
        this._injector = _injector;
    }
    /**
     * @template T, DATA
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    LyDialog.prototype.open = /**
     * @template T, DATA
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        // merge with default config
        config = tslib_1.__assign({}, new LyDialogConfig(), config);
        /** @type {?} */
        var componentFactoryOrTemplate;
        if (componentOrTemplateRef instanceof TemplateRef) {
            componentFactoryOrTemplate = componentOrTemplateRef;
        }
        else {
            componentFactoryOrTemplate = this._componentFactoryResolver.resolveComponentFactory(componentOrTemplateRef);
        }
        /** @type {?} */
        var onReziseScroll = function () {
            // I would have used FlexBox to position, but not,
            // because it creates a blurring effect in the text
            // when the `dialog` is opened
            /** @type {?} */
            var dialogContainerElement = overlayRef.containerElement;
            /** @type {?} */
            var x = window.innerWidth / 2 - dialogContainerElement.offsetWidth / 2;
            /** @type {?} */
            var y = window.innerHeight / 2 - dialogContainerElement.offsetHeight / 2;
            dialogContainerElement.style.transform = "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
        };
        /** @type {?} */
        var overlayRef = this._overlay.create(LyDialogContainer, null, {
            styles: {
                top: 0,
                left: 0
            },
            hasBackdrop: config.hasBackdrop,
            onResizeScroll: onReziseScroll,
            backdropClass: config.backdropClass || this._theme.style(STYLES_BACKDROP_DARK),
            fnDestroy: function () {
                dialogRef.close();
            }
        });
        /** @type {?} */
        var instance = (/** @type {?} */ (overlayRef.componentRef)).instance;
        /** @type {?} */
        var dialogContainerStyle = instance._getHostElement().style;
        dialogContainerStyle.width = toPx(config.width);
        dialogContainerStyle.maxWidth = toPx(config.maxWidth);
        dialogContainerStyle.minWidth = toPx(config.minWidth);
        dialogContainerStyle.height = toPx(config.height);
        dialogContainerStyle.maxHeight = toPx(config.maxHeight);
        dialogContainerStyle.minHeight = toPx(config.minHeight);
        /** @type {?} */
        var providers = [
            {
                provide: LyDialogRef,
                useValue: new LyDialogRef((/** @type {?} */ (overlayRef.componentRef)).injector.get(LyOverlayRef))
            },
            {
                provide: LyDialogConfig,
                useValue: config
            }
        ];
        if (config.data != null) {
            providers.push({
                provide: LY_DIALOG_DATA,
                useValue: config.data
            });
        }
        /** @type {?} */
        var newInjector = new DynamicInjector(Injector.create(providers, (/** @type {?} */ (overlayRef.componentRef)).injector), this._injector);
        instance._init(componentFactoryOrTemplate, newInjector);
        /** @type {?} */
        var dialogRef = newInjector.get(LyDialogRef);
        return dialogRef;
    };
    LyDialog.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LyDialog.ctorParameters = function () { return [
        { type: LyOverlay },
        { type: ComponentFactoryResolver },
        { type: LyTheme2 },
        { type: Injector }
    ]; };
    return LyDialog;
}());
export { LyDialog };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyDialog.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    LyDialog.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    LyDialog.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyDialog.prototype._injector;
}
/**
 * convert number to px
 * @param {?} val
 * @return {?}
 */
function toPx(val) {
    if (typeof val === 'number') {
        return val + "px";
    }
    else if (val) {
        return val;
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsV0FBVyxFQUFFLHdCQUF3QixFQUFvQixRQUFRLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQztJQUdFLGtCQUNVLFFBQW1CLEVBQ25CLHlCQUFtRCxFQUNuRCxNQUFnQixFQUNoQixTQUFtQjtRQUhuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQ3pCLENBQUM7Ozs7Ozs7SUFDTCx1QkFBSTs7Ozs7O0lBQUosVUFBd0Isc0JBQWdELEVBQ2hELE1BQTZCO1FBRW5ELDRCQUE0QjtRQUM1QixNQUFNLHdCQUFRLElBQUksY0FBYyxFQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7O1lBRTVDLDBCQUFvRTtRQUN4RSxJQUFJLHNCQUFzQixZQUFZLFdBQVcsRUFBRTtZQUNqRCwwQkFBMEIsR0FBRyxzQkFBc0IsQ0FBQztTQUNyRDthQUFNO1lBQ0wsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDN0c7O1lBRUssY0FBYyxHQUFHOzs7OztnQkFJZixzQkFBc0IsR0FBRyxVQUFVLENBQUMsZ0JBQWdCOztnQkFDcEQsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLFdBQVcsR0FBRyxDQUFDOztnQkFDbEUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLFlBQVksR0FBRyxDQUFDO1lBQzFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUJBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFRLENBQUM7UUFDcEcsQ0FBQzs7WUFFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFO1lBQy9ELE1BQU0sRUFBRTtnQkFDTixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNSO1lBQ0QsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQy9CLGNBQWMsRUFBRSxjQUFjO1lBQzlCLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1lBQzlFLFNBQVMsRUFBRTtnQkFDVCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsQ0FBQztTQUNGLENBQUM7O1lBRUksUUFBUSxHQUFzQixtQkFBQSxVQUFVLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUTs7WUFDL0Qsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUs7UUFFN0Qsb0JBQW9CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsb0JBQW9CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsb0JBQW9CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsb0JBQW9CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsb0JBQW9CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsb0JBQW9CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBRWxELFNBQVMsR0FBcUI7WUFDbEM7Z0JBQ0UsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxtQkFBQSxVQUFVLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvRTtZQUNEO2dCQUNFLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixRQUFRLEVBQUUsTUFBTTthQUNqQjtTQUNGO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNiLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUk7YUFDdEIsQ0FBQyxDQUFDO1NBQ0o7O1lBRUssV0FBVyxHQUFHLElBQUksZUFBZSxDQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxtQkFBQSxVQUFVLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsRixRQUFRLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLFdBQVcsQ0FBQyxDQUFDOztZQUNsRCxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDOUMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOUVGLFVBQVU7Ozs7Z0JBUkYsU0FBUztnQkFEc0Isd0JBQXdCO2dCQUM5QixRQUFRO2dCQUQwQyxRQUFROztJQXdGNUYsZUFBQztDQUFBLEFBL0VELElBK0VDO1NBOUVZLFFBQVE7Ozs7OztJQUdqQiw0QkFBMkI7Ozs7O0lBQzNCLDZDQUEyRDs7Ozs7SUFDM0QsMEJBQXdCOzs7OztJQUN4Qiw2QkFBMkI7Ozs7Ozs7QUE2RS9CLFNBQVMsSUFBSSxDQUFDLEdBQXVDO0lBQ25ELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQVUsR0FBRyxPQUFJLENBQUM7S0FDbkI7U0FBTSxJQUFJLEdBQUcsRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBUZW1wbGF0ZVJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRGYWN0b3J5LCBJbmplY3RvciwgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheSwgTHlPdmVybGF5UmVmLCBMeVRoZW1lMiwgU1RZTEVTX0JBQ0tEUk9QX0RBUksgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeURpYWxvZ0NvbnRhaW5lciB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgRHluYW1pY0luamVjdG9yIH0gZnJvbSAnLi9keW5hbWljLWluamVjdG9yJztcbmltcG9ydCB7IEx5RGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcbmltcG9ydCB7IExZX0RJQUxPR19EQVRBIH0gZnJvbSAnLi9kaWFsb2ctZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeURpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cbiAgb3BlbjxULCBEQVRBID0gdW5rbm93bj4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc/OiBMeURpYWxvZ0NvbmZpZzxEQVRBPik6IEx5RGlhbG9nUmVmIHtcblxuICAgIC8vIG1lcmdlIHdpdGggZGVmYXVsdCBjb25maWdcbiAgICBjb25maWcgPSB7IC4uLm5ldyBMeURpYWxvZ0NvbmZpZygpLCAuLi5jb25maWcgfTtcblxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgICBpZiAoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSA9IGNvbXBvbmVudE9yVGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudE9yVGVtcGxhdGVSZWYpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUmV6aXNlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgLy8gSSB3b3VsZCBoYXZlIHVzZWQgRmxleEJveCB0byBwb3NpdGlvbiwgYnV0IG5vdCxcbiAgICAgIC8vIGJlY2F1c2UgaXQgY3JlYXRlcyBhIGJsdXJyaW5nIGVmZmVjdCBpbiB0aGUgdGV4dFxuICAgICAgLy8gd2hlbiB0aGUgYGRpYWxvZ2AgaXMgb3BlbmVkXG4gICAgICBjb25zdCBkaWFsb2dDb250YWluZXJFbGVtZW50ID0gb3ZlcmxheVJlZi5jb250YWluZXJFbGVtZW50O1xuICAgICAgY29uc3QgeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGRpYWxvZ0NvbnRhaW5lckVsZW1lbnQub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgY29uc3QgeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBkaWFsb2dDb250YWluZXJFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICBkaWFsb2dDb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQoeCl9cHgsICR7TWF0aC5yb3VuZCh5KX1weCwgMClgO1xuICAgIH07XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoTHlEaWFsb2dDb250YWluZXIsIG51bGwsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgb25SZXNpemVTY3JvbGw6IG9uUmV6aXNlU2Nyb2xsLFxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MgfHwgdGhpcy5fdGhlbWUuc3R5bGUoU1RZTEVTX0JBQ0tEUk9QX0RBUkspLFxuICAgICAgZm5EZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5zdGFuY2U6IEx5RGlhbG9nQ29udGFpbmVyID0gb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlO1xuICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lclN0eWxlID0gaW5zdGFuY2UuX2dldEhvc3RFbGVtZW50KCkuc3R5bGU7XG5cbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS53aWR0aCA9IHRvUHgoY29uZmlnLndpZHRoKTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5tYXhXaWR0aCA9IHRvUHgoY29uZmlnLm1heFdpZHRoKTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5taW5XaWR0aCA9IHRvUHgoY29uZmlnLm1pbldpZHRoKTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5oZWlnaHQgPSB0b1B4KGNvbmZpZy5oZWlnaHQpO1xuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLm1heEhlaWdodCA9IHRvUHgoY29uZmlnLm1heEhlaWdodCk7XG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUubWluSGVpZ2h0ID0gdG9QeChjb25maWcubWluSGVpZ2h0KTtcblxuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTHlEaWFsb2dSZWYsXG4gICAgICAgIHVzZVZhbHVlOiBuZXcgTHlEaWFsb2dSZWYob3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluamVjdG9yLmdldChMeU92ZXJsYXlSZWYpKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTHlEaWFsb2dDb25maWcsXG4gICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgaWYgKGNvbmZpZy5kYXRhICE9IG51bGwpIHtcbiAgICAgIHByb3ZpZGVycy5wdXNoKHtcbiAgICAgICAgcHJvdmlkZTogTFlfRElBTE9HX0RBVEEsXG4gICAgICAgIHVzZVZhbHVlOiBjb25maWcuZGF0YVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBuZXcgRHluYW1pY0luamVjdG9yKFxuICAgICAgICBJbmplY3Rvci5jcmVhdGUocHJvdmlkZXJzLCBvdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5qZWN0b3IpLCB0aGlzLl9pbmplY3Rvcik7XG4gICAgaW5zdGFuY2UuX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIG5ld0luamVjdG9yKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSBuZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IG51bWJlciB0byBweFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsfXB4YDtcbiAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=