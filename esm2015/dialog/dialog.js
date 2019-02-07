/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, TemplateRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { LyOverlay, LyOverlayRef, LyTheme2, STYLES_BACKDROP_DARK } from '@alyle/ui';
import { LyDialogContainer } from './dialog-container.component';
import { LyDialogRef } from './dialog-ref';
import { DynamicInjector } from './dynamic-injector';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
export class LyDialog {
    /**
     * @param {?} _overlay
     * @param {?} _componentFactoryResolver
     * @param {?} _theme
     * @param {?} _injector
     */
    constructor(_overlay, _componentFactoryResolver, _theme, _injector) {
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
    open(componentOrTemplateRef, config) {
        // merge with default config
        config = Object.assign({}, new LyDialogConfig(), config);
        /** @type {?} */
        let componentFactoryOrTemplate;
        if (componentOrTemplateRef instanceof TemplateRef) {
            componentFactoryOrTemplate = componentOrTemplateRef;
        }
        else {
            componentFactoryOrTemplate = this._componentFactoryResolver.resolveComponentFactory(componentOrTemplateRef);
        }
        /** @type {?} */
        const onReziseScroll = () => {
            // I would have used FlexBox to position, but not,
            // because it creates a blurring effect in the text
            // when the `dialog` is opened
            /** @type {?} */
            const dialogContainerElement = overlayRef.containerElement;
            /** @type {?} */
            const x = window.innerWidth / 2 - dialogContainerElement.offsetWidth / 2;
            /** @type {?} */
            const y = window.innerHeight / 2 - dialogContainerElement.offsetHeight / 2;
            dialogContainerElement.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
        };
        /** @type {?} */
        const overlayRef = this._overlay.create(LyDialogContainer, null, {
            styles: {
                top: 0,
                left: 0
            },
            hasBackdrop: config.hasBackdrop,
            onResizeScroll: onReziseScroll,
            backdropClass: config.backdropClass || this._theme.style(STYLES_BACKDROP_DARK),
            fnDestroy: () => {
                dialogRef.close();
            }
        });
        /** @type {?} */
        const instance = (/** @type {?} */ (overlayRef.componentRef)).instance;
        /** @type {?} */
        const dialogContainerStyle = instance._getHostElement().style;
        dialogContainerStyle.width = toPx(config.width);
        dialogContainerStyle.maxWidth = toPx(config.maxWidth);
        dialogContainerStyle.minWidth = toPx(config.minWidth);
        dialogContainerStyle.height = toPx(config.height);
        dialogContainerStyle.maxHeight = toPx(config.maxHeight);
        dialogContainerStyle.minHeight = toPx(config.minHeight);
        /** @type {?} */
        const providers = [
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
        const newInjector = new DynamicInjector(Injector.create(providers, (/** @type {?} */ (overlayRef.componentRef)).injector), this._injector);
        instance._init(componentFactoryOrTemplate, newInjector);
        /** @type {?} */
        const dialogRef = newInjector.get(LyDialogRef);
        return dialogRef;
    }
}
LyDialog.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LyDialog.ctorParameters = () => [
    { type: LyOverlay },
    { type: ComponentFactoryResolver },
    { type: LyTheme2 },
    { type: Injector }
];
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
        return `${val}px`;
    }
    else if (val) {
        return val;
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxXQUFXLEVBQUUsd0JBQXdCLEVBQW9CLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE1BQU0sT0FBTyxRQUFROzs7Ozs7O0lBRW5CLFlBQ1UsUUFBbUIsRUFDbkIseUJBQW1ELEVBQ25ELE1BQWdCLEVBQ2hCLFNBQW1CO1FBSG5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFDekIsQ0FBQzs7Ozs7OztJQUNMLElBQUksQ0FBb0Isc0JBQWdELEVBQ2hELE1BQTZCO1FBRW5ELDRCQUE0QjtRQUM1QixNQUFNLHFCQUFRLElBQUksY0FBYyxFQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7O1lBRTVDLDBCQUFvRTtRQUN4RSxJQUFJLHNCQUFzQixZQUFZLFdBQVcsRUFBRTtZQUNqRCwwQkFBMEIsR0FBRyxzQkFBc0IsQ0FBQztTQUNyRDthQUFNO1lBQ0wsMEJBQTBCLEdBQUcsSUFBSSxD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LFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7WUE5RUYsVUFBVTs7OztZQVJGLFNBQVM7WUFEc0Isd0JBQXdCO1lBQzlCLFFBQVE7WUFEMEMsUUFBUTs7Ozs7OztJQWF4Riw0QkFBMkI7Ozs7O0lBQzNCLDZDQUEyRDs7Ozs7SUFDM0QsMEJBQXdCOzs7OztJQUN4Qiw2QkFBMkI7Ozs7Ozs7QUE2RS9CLFNBQVMsSUFBSSxDQUFDLEdBQXVDO0lBQ25ELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQztLQUNuQjtTQUFNLElBQUksR0FBRyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUsIFRlbXBsYXRlUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudEZhY3RvcnksIEluamVjdG9yLCBTdGF0aWNQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5LCBMeU92ZXJsYXlSZWYsIEx5VGhlbWUyLCBTVFlMRVNfQkFDS0RST1BfREFSSyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5RGlhbG9nQ29udGFpbmVyIH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMeURpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBEeW5hbWljSW5qZWN0b3IgfSBmcm9tICcuL2R5bmFtaWMtaW5qZWN0b3InO1xuaW1wb3J0IHsgTHlEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHsgTFlfRElBTE9HX0RBVEEgfSBmcm9tICcuL2RpYWxvZy1kYXRhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvclxuICApIHsgfVxuICBvcGVuPFQsIERBVEEgPSB1bmtub3duPihjb21wb25lbnRPclRlbXBsYXRlUmVmOiBUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz86IEx5RGlhbG9nQ29uZmlnPERBVEE+KTogTHlEaWFsb2dSZWYge1xuXG4gICAgLy8gbWVyZ2Ugd2l0aCBkZWZhdWx0IGNvbmZpZ1xuICAgIGNvbmZpZyA9IHsgLi4ubmV3IEx5RGlhbG9nQ29uZmlnKCksIC4uLmNvbmZpZyB9O1xuXG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlOiBDb21wb25lbnRGYWN0b3J5PGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGlmIChjb21wb25lbnRPclRlbXBsYXRlUmVmIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gY29tcG9uZW50T3JUZW1wbGF0ZVJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50T3JUZW1wbGF0ZVJlZik7XG4gICAgfVxuXG4gICAgY29uc3Qgb25SZXppc2VTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAvLyBJIHdvdWxkIGhhdmUgdXNlZCBGbGV4Qm94IHRvIHBvc2l0aW9uLCBidXQgbm90LFxuICAgICAgLy8gYmVjYXVzZSBpdCBjcmVhdGVzIGEgYmx1cnJpbmcgZWZmZWN0IGluIHRoZSB0ZXh0XG4gICAgICAvLyB3aGVuIHRoZSBgZGlhbG9nYCBpcyBvcGVuZWRcbiAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lckVsZW1lbnQgPSBvdmVybGF5UmVmLmNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICBjb25zdCB4ID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gZGlhbG9nQ29udGFpbmVyRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICBjb25zdCB5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGRpYWxvZ0NvbnRhaW5lckVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIGRpYWxvZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7TWF0aC5yb3VuZCh4KX1weCwgJHtNYXRoLnJvdW5kKHkpfXB4LCAwKWA7XG4gICAgfTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShMeURpYWxvZ0NvbnRhaW5lciwgbnVsbCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXG4gICAgICBvblJlc2l6ZVNjcm9sbDogb25SZXppc2VTY3JvbGwsXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyB8fCB0aGlzLl90aGVtZS5zdHlsZShTVFlMRVNfQkFDS0RST1BfREFSSyksXG4gICAgICBmbkRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbnN0YW5jZTogTHlEaWFsb2dDb250YWluZXIgPSBvdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5zdGFuY2U7XG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyU3R5bGUgPSBpbnN0YW5jZS5fZ2V0SG9zdEVsZW1lbnQoKS5zdHlsZTtcblxuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLndpZHRoID0gdG9QeChjb25maWcud2lkdGgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLm1heFdpZHRoID0gdG9QeChjb25maWcubWF4V2lkdGgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLm1pbldpZHRoID0gdG9QeChjb25maWcubWluV2lkdGgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLmhlaWdodCA9IHRvUHgoY29uZmlnLmhlaWdodCk7XG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUubWF4SGVpZ2h0ID0gdG9QeChjb25maWcubWF4SGVpZ2h0KTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5taW5IZWlnaHQgPSB0b1B4KGNvbmZpZy5taW5IZWlnaHQpO1xuXG4gICAgY29uc3QgcHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiBMeURpYWxvZ1JlZixcbiAgICAgICAgdXNlVmFsdWU6IG5ldyBMeURpYWxvZ1JlZihvdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5qZWN0b3IuZ2V0KEx5T3ZlcmxheVJlZikpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiBMeURpYWxvZ0NvbmZpZyxcbiAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoY29uZmlnLmRhdGEgIT0gbnVsbCkge1xuICAgICAgcHJvdmlkZXJzLnB1c2goe1xuICAgICAgICBwcm92aWRlOiBMWV9ESUFMT0dfREFUQSxcbiAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5kYXRhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdJbmplY3RvciA9IG5ldyBEeW5hbWljSW5qZWN0b3IoXG4gICAgICAgIEluamVjdG9yLmNyZWF0ZShwcm92aWRlcnMsIG92ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbmplY3RvciksIHRoaXMuX2luamVjdG9yKTtcbiAgICBpbnN0YW5jZS5faW5pdChjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgbmV3SW5qZWN0b3IpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG5ld0luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxufVxuXG4vKipcbiAqIGNvbnZlcnQgbnVtYmVyIHRvIHB4XG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2UgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==