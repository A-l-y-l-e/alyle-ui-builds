import * as tslib_1 from "tslib";
import { OnInit, Component, ComponentFactory, TemplateRef, ViewChild, ViewContainerRef, Injector, ApplicationRef, ComponentRef, EmbeddedViewRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, DoCheck, } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { LyOverlayRef, LyTheme2, ThemeVariables, shadowBuilder, styleTemplateToString, LyClasses, StyleCollection, StyleTemplate, ThemeRef } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { LyDialogConfig } from './dialog-config';
import { LY_DIALOG_DATA } from './dialog-data';
const STYLE_PRIORITY = -2;
/** @docs-private */
const STYLES = (theme, ref) => {
    const dialog = ref.selectorsOf(STYLES);
    return {
        root: () => (className) => `${className}{display:flex;position:relative;background-color:${theme.background.primary.default};border-radius:4px;box-shadow:${shadowBuilder(12)};overflow:auto;}${styleTemplateToString(((theme.dialog
            && theme.dialog.root
            && (theme.dialog.root instanceof StyleCollection
                ? theme.dialog.root.setTransformer(fn => fn(dialog))
                : theme.dialog.root(dialog)))), `${className}`)}${className} > :first-child{display:flex;flex-direction:column;width:100%;}`
    };
};
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
LyDialogContainer.ctorParameters = () => [
    { type: ApplicationRef },
    { type: LyOverlayRef },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZGlhbG9nLyIsInNvdXJjZXMiOlsiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsY0FBYyxFQUNkLFlBQVksRUFDWixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE9BQU8sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsWUFBWSxFQUNaLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixTQUFTLEVBQ1QsZUFBZSxFQUNmLGFBQWEsRUFDYixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBYzFCLG9CQUFvQjtBQUNwQixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXlDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDMUUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLEdBQUksRUFBRSxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLG9EQUFvRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLGlDQUFpQyxhQUFhLENBQUMsRUFBRSxDQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxDQUN6TixDQUFDLEtBQUssQ0FBQyxNQUFNO2VBQ1IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2VBQ2pCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDOUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQy9CLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsU0FBUyxpRUFBaUU7S0FDdkcsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFFRixvQkFBb0I7QUFxQnBCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBMkI1QixZQUNVLE9BQXVCLEVBQ3ZCLFdBQXlCLEVBQ3pCLE1BQWdCLEVBQ2hCLEdBQTRCLEVBQzVCLEdBQXNCLEVBQ3RCLFNBQW9CO1FBTHBCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWhDOUIsb0JBQW9CO1FBQ1gsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUlyRSxnQkFBZ0I7UUFDUCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDNUMsZ0JBQWdCO1FBQ1Asa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzVDLGdCQUFnQjtRQUNQLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUUzQzs7O1dBR0c7UUFDSCxXQUFNLEdBQThCLE9BQU8sQ0FBQztRQWtCMUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELFFBQVE7UUFFTixJQUFJLElBQUksQ0FBQywyQkFBMkIsWUFBWSxXQUFXLEVBQUU7WUFFM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2lCQUM1QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtpQkFDckMsZUFBZSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RGO1FBRUQsdUVBQXVFO1FBQ3ZFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRSxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLEtBQUssQ0FBQywwQkFBb0UsRUFBRSxXQUFxQjtRQUMvRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsMEJBQTBCLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFxQjtRQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFZLENBQUMsY0FBZSxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDNUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFTyxRQUFRO1FBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7O1lBbkZvQixjQUFjO1lBQ1YsWUFBWTtZQUNqQixRQUFRO1lBQ1gsVUFBVTtZQUNWLGlCQUFpQjtZQUNYLFNBQVM7O0FBYm9DO0lBQWpFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzJEQUFxRDtBQXBCM0csaUJBQWlCO0lBcEI3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsVUFBVSxFQUFFO1lBQ1YsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUN6QixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7Z0JBQ2pFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLGtDQUFrQyxFQUNqRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFDL0IsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkUsQ0FBQztTQUNIO1FBQ0QsSUFBSSxFQUFFO1lBQ0osb0JBQW9CLEVBQUUsUUFBUTtZQUM5QiwwQkFBMEIsRUFBRSwyQkFBMkI7WUFDdkQseUJBQXlCLEVBQUUsMEJBQTBCO1NBQ3REO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQStHN0I7U0EvR1ksaUJBQWlCO0FBaUg5QixNQUFNLE9BQU8sZUFBZTtJQVExQixZQUFvQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBUHZDLGNBQVMsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFNRCxDQUFDO0lBSjVDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEb0NoZWNrLFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5UmVmLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHNoYWRvd0J1aWxkZXIsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgTHlDbGFzc2VzLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFRoZW1lUmVmIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTHlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgTHlEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHsgTFlfRElBTE9HX0RBVEEgfSBmcm9tICcuL2RpYWxvZy1kYXRhJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGludGVyZmFjZSBMeURpYWxvZ1RoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgRGlhbG9nIENvbXBvbmVudC4gKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICAvKiogU3R5bGVzIHRoYXQgYXBwbHkgd2hlbiBhIGNvbG9yIGlzIHNldC4gKi9cbiAgY29sb3I/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlEaWFsb2dWYXJpYWJsZXMge1xuICBkaWFsb2c/OiBMeURpYWxvZ1RoZW1lO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5RGlhbG9nVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGRpYWxvZyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgIHJvb3Q6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdH07Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzoke3NoYWRvd0J1aWxkZXIoMTIpfTtvdmVyZmxvdzphdXRvO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLmRpYWxvZ1xuICAgICAgICAgICAgJiYgdGhlbWUuZGlhbG9nLnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5kaWFsb2cucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLmRpYWxvZy5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGRpYWxvZykpXG4gICAgICAgICAgICAgIDogdGhlbWUuZGlhbG9nLnJvb3QoZGlhbG9nKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSA+IDpmaXJzdC1jaGlsZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7fWBcbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpYWxvZ0NvbnRhaW5lcicsIFtcbiAgICAgIHN0YXRlKCd2b2lkLCBleGl0Jywgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuNyknfSkpLFxuICAgICAgc3RhdGUoJ2VudGVyJywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvcGFjaXR5OiAxfSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCwgKiA9PiBleGl0JyxcbiAgICAgICAgYW5pbWF0ZSgnNzVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknLCBzdHlsZSh7b3BhY2l0eTogMH0pKSlcbiAgICBdKVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tAZGlhbG9nQ29udGFpbmVyXSc6ICdfc3RhdGUnLFxuICAgICcoQGRpYWxvZ0NvbnRhaW5lci5zdGFydCknOiAnX29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAZGlhbG9nQ29udGFpbmVyLmRvbmUpJzogJ19vbkFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ0NvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9lbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcmVhZG9ubHkgX2FmdGVyT3BlbmVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBfYmVmb3JlQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvKiogQGludGVybmFsICovXG4gIHJlYWRvbmx5IF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAvKipcbiAgICogU3RhdGUgb2YgdGhlIGRpYWxvZyBhbmltYXRpb24uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3N0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcblxuICAvKiogQGludGVybmFsICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgcmVhZG9ubHkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogQGludGVybmFsICovXG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlOiBDb21wb25lbnRGYWN0b3J5PGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgX25ld0luamVjdG9yOiBJbmplY3RvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX292ZXJsYXlSZWY6IEx5T3ZlcmxheVJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcblxuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBMeURpYWxvZ0NvbnRleHQodGhpcy5fbmV3SW5qZWN0b3IpO1xuXG4gICAgICB0aGlzLl9lbWJlZGRlZFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgIC5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fY29tcG9uZW50RmFjdG9yeU9yVGVtcGxhdGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgICAgICAuY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlLCB1bmRlZmluZWQsIHRoaXMuX25ld0luamVjdG9yKTtcbiAgICB9XG5cbiAgICAvLyBJZiBleGlzdCBkaWFsb2dTdHlsZUJsb2NrIGFwcGx5IGZvciB0aGlzIGNvbXBvbmVudCwgZWxzZSBkbyBub3RoaW5nLlxuICAgIGNvbnN0IHsgY29udGFpbmVyQ2xhc3MgfSA9IHRoaXMuX25ld0luamVjdG9yLmdldChMeURpYWxvZ0NvbmZpZyk7XG4gICAgaWYgKGNvbnRhaW5lckNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjb250YWluZXJDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuX292ZXJsYXlSZWYub25SZXNpemVTY3JvbGwhKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9pbml0KGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlOiBDb21wb25lbnRGYWN0b3J5PGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+LCBuZXdJbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5T3JUZW1wbGF0ZSA9IGNvbXBvbmVudEZhY3RvcnlPclRlbXBsYXRlO1xuICAgIHRoaXMuX25ld0luamVjdG9yID0gbmV3SW5qZWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdG8gY2xvc2UsIHN0YXJ0cyB0aGUgZGlhbG9nIGV4aXQgYW5pbWF0aW9uLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9zdGFydENsb3NlKCkge1xuICAgIHRoaXMuX3N0YXRlID0gJ2V4aXQnO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYhLm9uUmVzaXplU2Nyb2xsISgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX29uQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQoTHlEaWFsb2dSZWYpO1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KGRpYWxvZ1JlZi5yZXN1bHQpO1xuICAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLm5leHQoKTtcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fZW1iZWRkZWRWaWV3UmVmKTtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGV4dCB7XG4gICRpbXBsaWNpdDogYW55ID0gdGhpcy5faW5qZWN0b3IuZ2V0KEx5RGlhbG9nUmVmKTtcbiAgZGlhbG9nUmVmID0gdGhpcy5faW5qZWN0b3IuZ2V0KEx5RGlhbG9nUmVmKTtcblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5qZWN0b3IuZ2V0KExZX0RJQUxPR19EQVRBKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcikgeyB9XG59XG4iXX0=