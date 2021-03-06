import { __decorate } from 'tslib';
import { Injectable, InjectionToken, TemplateRef, ApplicationRef, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, ViewContainerRef, Component, ChangeDetectionStrategy, Injector, ComponentFactoryResolver, Directive, NgModule } from '@angular/core';
import { LyOverlayRef, shadowBuilder, st2c, StyleCollection, LyTheme2, STYLES_BACKDROP_DARK, LyOverlay, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

let LyDialogRef = class LyDialogRef {
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    get afterOpened() {
        return this._overlayRef.componentRef.instance._afterOpened.asObservable();
    }
    get beforeClosed() {
        return this._overlayRef.componentRef.instance._beforeClosed.asObservable();
    }
    get afterClosed() {
        return this._overlayRef.componentRef.instance._afterClosed.asObservable();
    }
    /**
     * @internal
     * @docs-private
     */
    get result() {
        return this._result;
    }
    close(result) {
        const dialogContainer = this._overlayRef.componentRef.instance;
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    }
};
LyDialogRef.ctorParameters = () => [
    { type: LyOverlayRef }
];
LyDialogRef = __decorate([
    Injectable()
], LyDialogRef);

/**
 * Configuration for opening a modal dialog with the LyDialog service.
 */
class LyDialogConfig {
    constructor() {
        /**
         * Max-height of the dialog. If a number is provided, pixel units are assumed.
         * Defaults to calc(100vw - 90px)
         */
        this.maxHeight = 'calc(100vh - 64px)';
        /**
         * Max-width of the dialog. If a number is provided, pixel units are assumed.
         * Defaults to calc(100vw - 90px)
         */
        this.maxWidth = 'calc(100vw - 64px)';
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
    }
}

const LY_DIALOG_DATA = new InjectionToken('LyDialogData');

const STYLE_PRIORITY = -2;
/** @docs-private */
const STYLES = (theme, ref) => {
    const dialog = ref.selectorsOf(STYLES);
    return {
        root: () => (className) => `${className}{display:flex;position:relative;background-color:${theme.background.primary.default};border-radius:4px;box-shadow:${shadowBuilder(12)};overflow:auto;}${st2c(((theme.dialog
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
__decorate([
    ViewChild(TemplateRef, { read: ViewContainerRef, static: true })
], LyDialogContainer.prototype, "viewContainerRef", void 0);
LyDialogContainer = __decorate([
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
class LyDialogContext {
    constructor(_injector) {
        this._injector = _injector;
        this.$implicit = this._injector.get(LyDialogRef);
        this.dialogRef = this._injector.get(LyDialogRef);
    }
    get data() {
        return this._injector.get(LY_DIALOG_DATA);
    }
}

class DynamicInjector {
    constructor(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    get(token, notFoundValue, _flags) {
        const value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}

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
            disableClose: config.disableClose,
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
LyDialog.ctorParameters = () => [
    { type: LyOverlay },
    { type: ComponentFactoryResolver },
    { type: LyTheme2 },
    { type: Injector }
];
LyDialog = __decorate([
    Injectable()
], LyDialog);
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

/** @docs-private */
const STYLE_PRIORITY$1 = -2;
/** @docs-private */
const STYLES_DIALOG_TITLE = (theme) => (className) => `${className}{display:block;flex:0 0 auto;margin:20px 0 16px;padding:0 24px;font-size:20px;line-height:24px;font-weight:500;font-family:${theme.typography.fontFamily};}`;
const ɵ0$1 = STYLES_DIALOG_TITLE;
let LyDialogTitle = class LyDialogTitle {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_TITLE, STYLE_PRIORITY$1));
    }
};
LyDialogTitle.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDialogTitle = __decorate([
    Directive({
        selector: '[ly-dialog-title], [lyDialogTitle]',
        exportAs: 'lyDialogTitle'
    })
], LyDialogTitle);

/** @docs-private */
const STYLE_PRIORITY$2 = -2;
/** @docs-private */
const STYLES_DIALOG_CONTENT = () => (className) => `${className}{display:block;overflow-y:auto;flex:1 1 auto;padding:0 24px 24px;-webkit-overflow-scrolling:touch;}`;
const ɵ0$2 = STYLES_DIALOG_CONTENT;
let LyDialogContent = class LyDialogContent {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_CONTENT, STYLE_PRIORITY$2));
    }
};
LyDialogContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDialogContent = __decorate([
    Directive({
        selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
        exportAs: 'lyDialogContent'
    })
], LyDialogContent);

/** @docs-private */
const STYLE_PRIORITY$3 = -2;
/** @docs-private */
const STYLES_DIALOG_ACTIONS = () => (className) => `${className}{display:flex;flex:0 0 auto;padding:8px;flex-wrap:wrap;min-height:52px;align-items:center;}`;
const ɵ0$3 = STYLES_DIALOG_ACTIONS;
let LyDialogActions = class LyDialogActions {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY$3));
    }
};
LyDialogActions.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDialogActions = __decorate([
    Directive({
        selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
        exportAs: 'lyDialogActions'
    })
], LyDialogActions);

let LyDialogModule = class LyDialogModule {
};
LyDialogModule = __decorate([
    NgModule({
        entryComponents: [
            LyDialogContainer
        ],
        declarations: [
            LyDialogContainer,
            LyDialogTitle,
            LyDialogContent,
            LyDialogActions
        ],
        imports: [
            CommonModule,
            LyCommonModule,
            LyOverlayModule
        ],
        exports: [
            LyCommonModule,
            LyDialogContainer,
            LyDialogTitle,
            LyDialogContent,
            LyDialogActions
        ],
        providers: [
            LyDialog
        ]
    })
], LyDialogModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LY_DIALOG_DATA, LyDialog, LyDialogModule, LyDialogRef, LyDialogContainer as ɵa, LyDialogTitle as ɵb, LyDialogContent as ɵc, LyDialogActions as ɵd };
//# sourceMappingURL=alyle-ui-dialog.js.map
