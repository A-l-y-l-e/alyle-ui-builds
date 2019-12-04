import * as tslib_1 from "tslib";
import { OnInit, Component, ComponentFactory, TemplateRef, ViewChild, ViewContainerRef, Injector, ApplicationRef, ComponentRef, EmbeddedViewRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, DoCheck, } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { LyOverlayRef, LyTheme2, ThemeVariables, shadowBuilder, styleTemplateToString, LyClasses, StyleCollection, StyleTemplate, ThemeRef } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
var STYLE_PRIORITY = -2;
/** @docs-private */
var STYLES = function (theme, ref) {
    var dialog = ref.selectorsOf(STYLES);
    return {
        root: function () { return function (className) { return className + "{display:flex;position:relative;background-color:" + theme.background.primary.default + ";border-radius:4px;box-shadow:" + shadowBuilder(12) + ";overflow:auto;}" + styleTemplateToString(((theme.dialog
            && theme.dialog.root
            && (theme.dialog.root instanceof StyleCollection
                ? theme.dialog.root.setTransformer(function (fn) { return fn(dialog); })
                : theme.dialog.root(dialog)))), "" + className) + className + " > :first-child{display:flex;flex-direction:column;width:100%;}"; }; }
    };
};
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
    LyDialogContainer.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: LyOverlayRef },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        ViewChild(TemplateRef, { read: ViewContainerRef, static: true })
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
        })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsY0FBYyxFQUNkLFlBQVksRUFDWixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE9BQU8sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsWUFBWSxFQUNaLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixTQUFTLEVBQ1QsZUFBZSxFQUNmLGFBQWEsRUFDYixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBYzFCLG9CQUFvQjtBQUNwQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDLEVBQUUsR0FBYTtJQUN0RSxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE9BQU87UUFDTCxJQUFJLEVBQUUsY0FB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LEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkUsQ0FBQzthQUNIO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLG9CQUFvQixFQUFFLFFBQVE7Z0JBQzlCLDBCQUEwQixFQUFFLDJCQUEyQjtnQkFDdkQseUJBQXlCLEVBQUUsMEJBQTBCO2FBQ3REO1NBQ0YsQ0FBQztPQUNXLGlCQUFpQixDQStHN0I7SUFBRCx3QkFBQztDQUFBLEFBL0dELElBK0dDO1NBL0dZLGlCQUFpQjtBQWlIOUI7SUFRRSx5QkFBb0IsU0FBbUI7UUFBbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQVB2QyxjQUFTLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsY0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBTUQsQ0FBQztJQUo1QyxzQkFBSSxpQ0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUdILHNCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0b3IsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERvQ2hlY2ssXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHRyaWdnZXIsIEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBMeU92ZXJsYXlSZWYsXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgc2hhZG93QnVpbGRlcixcbiAgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgVGhlbWVSZWYgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMeURpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBMeURpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9ESUFMT0dfREFUQSB9IGZyb20gJy4vZGlhbG9nLWRhdGEnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5RGlhbG9nVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBEaWFsb2cgQ29tcG9uZW50LiAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIC8qKiBTdHlsZXMgdGhhdCBhcHBseSB3aGVuIGEgY29sb3IgaXMgc2V0LiAqL1xuICBjb2xvcj86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeURpYWxvZ1ZhcmlhYmxlcyB7XG4gIGRpYWxvZz86IEx5RGlhbG9nVGhlbWU7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlEaWFsb2dWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgZGlhbG9nID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIHJldHVybiB7XG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0fTtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OiR7c2hhZG93QnVpbGRlcigxMil9O292ZXJmbG93OmF1dG87fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUuZGlhbG9nXG4gICAgICAgICAgICAmJiB0aGVtZS5kaWFsb2cucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmRpYWxvZy5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuZGlhbG9nLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oZGlhbG9nKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5kaWFsb2cucm9vdChkaWFsb2cpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ID4gOmZpcnN0LWNoaWxke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRpYWxvZy1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQ29udGFpbmVyJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQsIGV4aXQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC43KSd9KSksXG4gICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZSd9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9wYWNpdHk6IDF9KSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkLCAqID0+IGV4aXQnLFxuICAgICAgICBhbmltYXRlKCc3NW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKVxuICAgIF0pXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW0BkaWFsb2dDb250YWluZXJdJzogJ19zdGF0ZScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLnN0YXJ0KSc6ICdfb25BbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAnKEBkaWFsb2dDb250YWluZXIuZG9uZSknOiAnX29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2VtYmVkZGVkVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYWZ0ZXJPcGVuZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9iZWZvcmVDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIC8qKlxuICAgKiBTdGF0ZSBvZiB0aGUgZGlhbG9nIGFuaW1hdGlvbi5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc3RhdGU6ICd2b2lkJyB8ICdlbnRlcicgfCAnZXhpdCcgPSAnZW50ZXInO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBfbmV3SW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogTHlPdmVybGF5UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IEx5RGlhbG9nQ29udGV4dCh0aGlzLl9uZXdJbmplY3Rvcik7XG5cbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgICAgIC5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIHVuZGVmaW5lZCwgdGhpcy5fbmV3SW5qZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0IGRpYWxvZ1N0eWxlQmxvY2sgYXBwbHkgZm9yIHRoaXMgY29tcG9uZW50LCBlbHNlIGRvIG5vdGhpbmcuXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gdGhpcy5fbmV3SW5qZWN0b3IuZ2V0KEx5RGlhbG9nQ29uZmlnKTtcbiAgICBpZiAoY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lckNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5vblJlc2l6ZVNjcm9sbCEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2luaXQoY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIG5ld0luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlID0gY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGU7XG4gICAgdGhpcy5fbmV3SW5qZWN0b3IgPSBuZXdJbmplY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0byBjbG9zZSwgc3RhcnRzIHRoZSBkaWFsb2cgZXhpdCBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXJ0Q2xvc2UoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSAnZXhpdCc7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiEub25SZXNpemVTY3JvbGwhKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuX25ld0luamVjdG9yLmdldChMeURpYWxvZ1JlZik7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoZGlhbG9nUmVmLnJlc3VsdCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9lbWJlZGRlZFZpZXdSZWYpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnkgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICBkaWFsb2dSZWYgPSB0aGlzLl9pbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmplY3Rvci5nZXQoTFlfRElBTE9HX0RBVEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cbn1cbiJdfQ==