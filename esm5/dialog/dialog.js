import * as tslib_1 from "tslib";
import { Injectable, Type, TemplateRef, ComponentFactoryResolver, ComponentFactory, Injector, StaticProvider } from '@angular/core';
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
    LyDialog.prototype.open = function (componentOrTemplateRef, config) {
        // merge with default config
        config = tslib_1.__assign({}, new LyDialogConfig(), config);
        var componentFactoryOrTemplate;
        if (componentOrTemplateRef instanceof TemplateRef) {
            componentFactoryOrTemplate = componentOrTemplateRef;
        }
        else {
            componentFactoryOrTemplate = this._componentFactoryResolver.resolveComponentFactory(componentOrTemplateRef);
        }
        var onReziseScroll = function () {
            // I would have used FlexBox to position, but not,
            // because it creates a blurring effect in the text
            // when the `dialog` is opened
            var dialogContainerElement = overlayRef.containerElement;
            var x = window.innerWidth / 2 - dialogContainerElement.offsetWidth / 2;
            var y = window.innerHeight / 2 - dialogContainerElement.offsetHeight / 2;
            dialogContainerElement.style.transform = "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
        };
        var overlayRef = this._overlay.create(LyDialogContainer, null, {
            styles: {
                top: 0,
                left: 0
            },
            hasBackdrop: config.hasBackdrop,
            onResizeScroll: onReziseScroll,
            disableClose: config.disableClose,
            backdropClass: config.backdropClass || this._theme.style(STYLES_BACKDROP_DARK),
            fnDestroy: function () {
                dialogRef.close();
            }
        });
        var instance = overlayRef.componentRef.instance;
        var dialogContainerStyle = instance._getHostElement().style;
        dialogContainerStyle.width = toPx(config.width);
        dialogContainerStyle.maxWidth = toPx(config.maxWidth);
        dialogContainerStyle.minWidth = toPx(config.minWidth);
        dialogContainerStyle.height = toPx(config.height);
        dialogContainerStyle.maxHeight = toPx(config.maxHeight);
        dialogContainerStyle.minHeight = toPx(config.minHeight);
        var providers = [
            {
                provide: LyDialogRef,
                useValue: new LyDialogRef(overlayRef.componentRef.injector.get(LyOverlayRef))
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
        var newInjector = new DynamicInjector(Injector.create(providers, overlayRef.componentRef.injector), this._injector);
        instance._init(componentFactoryOrTemplate, newInjector);
        var dialogRef = newInjector.get(LyDialogRef);
        return dialogRef;
    };
    LyDialog.ctorParameters = function () { return [
        { type: LyOverlay },
        { type: ComponentFactoryResolver },
        { type: LyTheme2 },
        { type: Injector }
    ]; };
    LyDialog = tslib_1.__decorate([
        Injectable()
    ], LyDialog);
    return LyDialog;
}());
export { LyDialog };
/**
 * convert number to px
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DO0lBRUUsa0JBQ1UsUUFBbUIsRUFDbkIseUJBQW1ELEVBQ25ELE1BQWdCLEVBQ2hCLFNBQW1CO1FBSG5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFDekIsQ0FBQztJQUNMLHVCQUFJLEdBQUosVUFBd0Isc0JBQWdELEVBQ2hELE1BQTZCO1FBRW5ELDRCQUE0QjtRQUM1QixNQUFNLHdCQUFRLElBQUksY0FBYyxFQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7UUFFaEQsSUFBSSwwQkFBb0UsQ0FBQztRQUN6RSxJQUFJLHNCQUFzQixZQUFZLFdBQVcsRUFBRTtZQUNqRCwwQkFBMEIsR0FBRyxzQkFBc0IsQ0FBQztTQUNyRDthQUFNO1lBQ0wsMEJB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Q25GLFFBQVEsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOztnQkEzRW1CLFNBQVM7Z0JBQ1Esd0JBQXdCO2dCQUMzQyxRQUFRO2dCQUNMLFFBQVE7O0lBTmxCLFFBQVE7UUFEcEIsVUFBVSxFQUFFO09BQ0EsUUFBUSxDQStFcEI7SUFBRCxlQUFDO0NBQUEsQUEvRUQsSUErRUM7U0EvRVksUUFBUTtBQWlGckI7O0dBRUc7QUFDSCxTQUFTLElBQUksQ0FBQyxHQUF1QztJQUNuRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFVLEdBQUcsT0FBSSxDQUFDO0tBQ25CO1NBQU0sSUFBSSxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSwgVGVtcGxhdGVSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50RmFjdG9yeSwgSW5qZWN0b3IsIFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXksIEx5T3ZlcmxheVJlZiwgTHlUaGVtZTIsIFNUWUxFU19CQUNLRFJPUF9EQVJLIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlEaWFsb2dDb250YWluZXIgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEx5RGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcbmltcG9ydCB7IER5bmFtaWNJbmplY3RvciB9IGZyb20gJy4vZHluYW1pYy1pbmplY3Rvcic7XG5pbXBvcnQgeyBMeURpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9ESUFMT0dfREFUQSB9IGZyb20gJy4vZGlhbG9nLWRhdGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlEaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yXG4gICkgeyB9XG4gIG9wZW48VCwgREFUQSA9IHVua25vd24+KGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPzogTHlEaWFsb2dDb25maWc8REFUQT4pOiBMeURpYWxvZ1JlZiB7XG5cbiAgICAvLyBtZXJnZSB3aXRoIGRlZmF1bHQgY29uZmlnXG4gICAgY29uZmlnID0geyAuLi5uZXcgTHlEaWFsb2dDb25maWcoKSwgLi4uY29uZmlnIH07XG5cbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT47XG4gICAgaWYgKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgPSBjb21wb25lbnRPclRlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRPclRlbXBsYXRlUmVmKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlemlzZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIC8vIEkgd291bGQgaGF2ZSB1c2VkIEZsZXhCb3ggdG8gcG9zaXRpb24sIGJ1dCBub3QsXG4gICAgICAvLyBiZWNhdXNlIGl0IGNyZWF0ZXMgYSBibHVycmluZyBlZmZlY3QgaW4gdGhlIHRleHRcbiAgICAgIC8vIHdoZW4gdGhlIGBkaWFsb2dgIGlzIG9wZW5lZFxuICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyRWxlbWVudCA9IG92ZXJsYXlSZWYuY29udGFpbmVyRWxlbWVudDtcbiAgICAgIGNvbnN0IHggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBkaWFsb2dDb250YWluZXJFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IHkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gZGlhbG9nQ29udGFpbmVyRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgZGlhbG9nQ29udGFpbmVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtNYXRoLnJvdW5kKHgpfXB4LCAke01hdGgucm91bmQoeSl9cHgsIDApYDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKEx5RGlhbG9nQ29udGFpbmVyLCBudWxsLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcbiAgICAgIG9uUmVzaXplU2Nyb2xsOiBvblJlemlzZVNjcm9sbCxcbiAgICAgIGRpc2FibGVDbG9zZTogY29uZmlnLmRpc2FibGVDbG9zZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IGNvbmZpZy5iYWNrZHJvcENsYXNzIHx8IHRoaXMuX3RoZW1lLnN0eWxlKFNUWUxFU19CQUNLRFJPUF9EQVJLKSxcbiAgICAgIGZuRGVzdHJveTogKCkgPT4ge1xuICAgICAgICBkaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluc3RhbmNlOiBMeURpYWxvZ0NvbnRhaW5lciA9IG92ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbnN0YW5jZTtcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXJTdHlsZSA9IGluc3RhbmNlLl9nZXRIb3N0RWxlbWVudCgpLnN0eWxlO1xuXG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUud2lkdGggPSB0b1B4KGNvbmZpZy53aWR0aCk7XG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUubWF4V2lkdGggPSB0b1B4KGNvbmZpZy5tYXhXaWR0aCk7XG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUubWluV2lkdGggPSB0b1B4KGNvbmZpZy5taW5XaWR0aCk7XG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUuaGVpZ2h0ID0gdG9QeChjb25maWcuaGVpZ2h0KTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5tYXhIZWlnaHQgPSB0b1B4KGNvbmZpZy5tYXhIZWlnaHQpO1xuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLm1pbkhlaWdodCA9IHRvUHgoY29uZmlnLm1pbkhlaWdodCk7XG5cbiAgICBjb25zdCBwcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEx5RGlhbG9nUmVmLFxuICAgICAgICB1c2VWYWx1ZTogbmV3IEx5RGlhbG9nUmVmKG92ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbmplY3Rvci5nZXQoTHlPdmVybGF5UmVmKSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEx5RGlhbG9nQ29uZmlnLFxuICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICB9XG4gICAgXTtcblxuICAgIGlmIChjb25maWcuZGF0YSAhPSBudWxsKSB7XG4gICAgICBwcm92aWRlcnMucHVzaCh7XG4gICAgICAgIHByb3ZpZGU6IExZX0RJQUxPR19EQVRBLFxuICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmRhdGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0luamVjdG9yID0gbmV3IER5bmFtaWNJbmplY3RvcihcbiAgICAgICAgSW5qZWN0b3IuY3JlYXRlKHByb3ZpZGVycywgb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluamVjdG9yKSwgdGhpcy5faW5qZWN0b3IpO1xuICAgIGluc3RhbmNlLl9pbml0KGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlLCBuZXdJbmplY3Rvcik7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nUmVmKTtcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG59XG5cbi8qKlxuICogY29udmVydCBudW1iZXIgdG8gcHhcbiAqL1xuZnVuY3Rpb24gdG9QeCh2YWw6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIl19