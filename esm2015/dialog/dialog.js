import * as tslib_1 from "tslib";
import { Injectable, TemplateRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { LyOverlay, LyOverlayRef, LyTheme2, STYLES_BACKDROP_DARK } from '@alyle/ui';
import { LyDialogContainer } from './dialog-container.component';
import { LyDialogRef } from './dialog-ref';
import { DynamicInjector } from './dynamic-injector';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
let LyDialog = class LyDialog {
    constructor(_overlay, _componentFactoryResolver, _theme, _injector) {
        this._overlay = _overlay;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._theme = _theme;
        this._injector = _injector;
    }
    open(componentOrTemplateRef, config) {
        // merge with default config
        config = Object.assign({}, new LyDialogConfig(), config);
        let componentFactoryOrTemplate;
        if (componentOrTemplateRef instanceof TemplateRef) {
            componentFactoryOrTemplate = componentOrTemplateRef;
        }
        else {
            componentFactoryOrTemplate = this._componentFactoryResolver.resolveComponentFactory(componentOrTemplateRef);
        }
        const onReziseScroll = () => {
            // I would have used FlexBox to position, but not,
            // because it creates a blurring effect in the text
            // when the `dialog` is opened
            const dialogContainerElement = overlayRef.containerElement;
            const x = window.innerWidth / 2 - dialogContainerElement.offsetWidth / 2;
            const y = window.innerHeight / 2 - dialogContainerElement.offsetHeight / 2;
            dialogContainerElement.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
        };
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
        const instance = overlayRef.componentRef.instance;
        const dialogContainerStyle = instance._getHostElement().style;
        dialogContainerStyle.width = toPx(config.width);
        dialogContainerStyle.maxWidth = toPx(config.maxWidth);
        dialogContainerStyle.minWidth = toPx(config.minWidth);
        dialogContainerStyle.height = toPx(config.height);
        dialogContainerStyle.maxHeight = toPx(config.maxHeight);
        dialogContainerStyle.minHeight = toPx(config.minHeight);
        const providers = [
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
        const newInjector = new DynamicInjector(Injector.create(providers, overlayRef.componentRef.injector), this._injector);
        instance._init(componentFactoryOrTemplate, newInjector);
        const dialogRef = newInjector.get(LyDialogRef);
        return dialogRef;
    }
};
LyDialog = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [LyOverlay,
        ComponentFactoryResolver,
        LyTheme2,
        Injector])
], LyDialog);
export { LyDialog };
/**
 * convert number to px
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxXQUFXLEVBQUUsd0JBQXdCLEVBQW9CLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFFbkIsWUFDVSxRQUFtQixFQUNuQix5QkFBbUQsRUFDbkQsTUFBZ0IsRUFDaEIsU0FBbUI7UUFIbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUN6QixDQUFDO0lBQ0wsSUFBSSxDQUFvQixzQkFBZ0QsRUFDaEQsTUFBNkI7UUFFbkQsNEJBQTRCO1FBQzVCLE1BQU0scUJBQVEsSUFBSSxjQUFjLEVBQUUsRUFBSyxNQUFNLENBQUUsQ0FBQztRQUVoRCxJQUFJLDBCQUFvRSxDQUFDO1FBQ3pFLElBQUksc0JBQXNCLFlBQVksV0FBVyxFQUFFO1lBQ2pELDBCQUEwQixHQUFHLHNCQUFzQixDQUFDO1NBQ3JEO2FBQU07WUFDTCwwQkFBMEIsR0FBRyxJ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QywwQkFBMEIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4RCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBOUVZLFFBQVE7SUFEcEIsVUFBVSxFQUFFOzZDQUlTLFNBQVM7UUFDUSx3QkFBd0I7UUFDM0MsUUFBUTtRQUNMLFFBQVE7R0FObEIsUUFBUSxDQThFcEI7U0E5RVksUUFBUTtBQWdGckI7O0dBRUc7QUFDSCxTQUFTLElBQUksQ0FBQyxHQUF1QztJQUNuRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDbkI7U0FBTSxJQUFJLEdBQUcsRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBUZW1wbGF0ZVJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRGYWN0b3J5LCBJbmplY3RvciwgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheSwgTHlPdmVybGF5UmVmLCBMeVRoZW1lMiwgU1RZTEVTX0JBQ0tEUk9QX0RBUksgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeURpYWxvZ0NvbnRhaW5lciB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgRHluYW1pY0luamVjdG9yIH0gZnJvbSAnLi9keW5hbWljLWluamVjdG9yJztcbmltcG9ydCB7IEx5RGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcbmltcG9ydCB7IExZX0RJQUxPR19EQVRBIH0gZnJvbSAnLi9kaWFsb2ctZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeURpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cbiAgb3BlbjxULCBEQVRBID0gdW5rbm93bj4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc/OiBMeURpYWxvZ0NvbmZpZzxEQVRBPik6IEx5RGlhbG9nUmVmIHtcblxuICAgIC8vIG1lcmdlIHdpdGggZGVmYXVsdCBjb25maWdcbiAgICBjb25maWcgPSB7IC4uLm5ldyBMeURpYWxvZ0NvbmZpZygpLCAuLi5jb25maWcgfTtcblxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgICBpZiAoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSA9IGNvbXBvbmVudE9yVGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudE9yVGVtcGxhdGVSZWYpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUmV6aXNlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgLy8gSSB3b3VsZCBoYXZlIHVzZWQgRmxleEJveCB0byBwb3NpdGlvbiwgYnV0IG5vdCxcbiAgICAgIC8vIGJlY2F1c2UgaXQgY3JlYXRlcyBhIGJsdXJyaW5nIGVmZmVjdCBpbiB0aGUgdGV4dFxuICAgICAgLy8gd2hlbiB0aGUgYGRpYWxvZ2AgaXMgb3BlbmVkXG4gICAgICBjb25zdCBkaWFsb2dDb250YWluZXJFbGVtZW50ID0gb3ZlcmxheVJlZi5jb250YWluZXJFbGVtZW50O1xuICAgICAgY29uc3QgeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGRpYWxvZ0NvbnRhaW5lckVsZW1lbnQub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgY29uc3QgeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBkaWFsb2dDb250YWluZXJFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICBkaWFsb2dDb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQoeCl9cHgsICR7TWF0aC5yb3VuZCh5KX1weCwgMClgO1xuICAgIH07XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoTHlEaWFsb2dDb250YWluZXIsIG51bGwsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgb25SZXNpemVTY3JvbGw6IG9uUmV6aXNlU2Nyb2xsLFxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MgfHwgdGhpcy5fdGhlbWUuc3R5bGUoU1RZTEVTX0JBQ0tEUk9QX0RBUkspLFxuICAgICAgZm5EZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5zdGFuY2U6IEx5RGlhbG9nQ29udGFpbmVyID0gb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlO1xuICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lclN0eWxlID0gaW5zdGFuY2UuX2dldEhvc3RFbGVtZW50KCkuc3R5bGU7XG5cbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS53aWR0aCA9IHRvUHgoY29uZmlnLndpZHRoKTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5tYXhXaWR0aCA9IHRvUHgoY29uZmlnLm1heFdpZHRoKTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5taW5XaWR0aCA9IHRvUHgoY29uZmlnLm1pbldpZHRoKTtcbiAgICBkaWFsb2dDb250YWluZXJTdHlsZS5oZWlnaHQgPSB0b1B4KGNvbmZpZy5oZWlnaHQpO1xuICAgIGRpYWxvZ0NvbnRhaW5lclN0eWxlLm1heEhlaWdodCA9IHRvUHgoY29uZmlnLm1heEhlaWdodCk7XG4gICAgZGlhbG9nQ29udGFpbmVyU3R5bGUubWluSGVpZ2h0ID0gdG9QeChjb25maWcubWluSGVpZ2h0KTtcblxuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTHlEaWFsb2dSZWYsXG4gICAgICAgIHVzZVZhbHVlOiBuZXcgTHlEaWFsb2dSZWYob3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluamVjdG9yLmdldChMeU92ZXJsYXlSZWYpKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTHlEaWFsb2dDb25maWcsXG4gICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgaWYgKGNvbmZpZy5kYXRhICE9IG51bGwpIHtcbiAgICAgIHByb3ZpZGVycy5wdXNoKHtcbiAgICAgICAgcHJvdmlkZTogTFlfRElBTE9HX0RBVEEsXG4gICAgICAgIHVzZVZhbHVlOiBjb25maWcuZGF0YVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBuZXcgRHluYW1pY0luamVjdG9yKFxuICAgICAgICBJbmplY3Rvci5jcmVhdGUocHJvdmlkZXJzLCBvdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5qZWN0b3IpLCB0aGlzLl9pbmplY3Rvcik7XG4gICAgaW5zdGFuY2UuX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIG5ld0luamVjdG9yKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSBuZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IG51bWJlciB0byBweFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsfXB4YDtcbiAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=