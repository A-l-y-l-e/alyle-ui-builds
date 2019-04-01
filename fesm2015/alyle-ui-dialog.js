import { state, style, transition, animate, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Injectable, InjectionToken, Component, TemplateRef, ViewChild, ViewContainerRef, ApplicationRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, ComponentFactoryResolver, Injector, Directive, NgModule } from '@angular/core';
import { LyOverlayRef, LyTheme2, shadowBuilder, LyOverlay, STYLES_BACKDROP_DARK, LyCommonModule, LyOverlayModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyDialogRef {
    /**
     * @param {?} _overlayRef
     */
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    /**
     * @return {?}
     */
    get afterOpened() {
        return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterOpened.asObservable();
    }
    /**
     * @return {?}
     */
    get beforeClosed() {
        return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._beforeClosed.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClosed() {
        return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterClosed.asObservable();
    }
    /**
     * \@internal
     * \@docs-private
     * @return {?}
     */
    get result() {
        return this._result;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        /** @type {?} */
        const dialogContainer = ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)));
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    }
}
LyDialogRef.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LyDialogRef.ctorParameters = () => [
    { type: LyOverlayRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration for opening a modal dialog with the LyDialog service.
 * @template DATA
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
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_DIALOG_DATA = new InjectionToken('LyDialogData');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * \@docs-private
 */
class LyDialogContainer {
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
class LyDialogContext {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicInjector {
    /**
     * @param {?} _newInjector
     * @param {?} _parentInjector
     */
    constructor(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} _flags
     * @return {?}
     */
    get(token, notFoundValue, _flags) {
        /** @type {?} */
        const value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyDialog {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
const STYLE_PRIORITY$1 = -2;
/**
 * \@docs-private
 * @type {?}
 */
const STYLES_DIALOG_TITLE = (theme) => ({
    display: 'block',
    flex: '0 0 auto',
    margin: '20px 0 16px',
    padding: '0 24px',
    fontSize: `20px`,
    lineHeight: '24px',
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
});
class LyDialogTitle {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_TITLE, STYLE_PRIORITY$1));
    }
}
LyDialogTitle.decorators = [
    { type: Directive, args: [{
                selector: '[ly-dialog-title], [lyDialogTitle]',
                exportAs: 'lyDialogTitle'
            },] }
];
/** @nocollapse */
LyDialogTitle.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
const STYLE_PRIORITY$2 = -2;
/**
 * \@docs-private
 * @type {?}
 */
const STYLES_DIALOG_CONTENT = ({
    display: 'block',
    overflowY: 'auto',
    flex: '1 1 auto',
    padding: '0 24px 24px',
    '-webkit-overflow-scrolling': 'touch'
});
class LyDialogContent {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_CONTENT, STYLE_PRIORITY$2));
    }
}
LyDialogContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
                exportAs: 'lyDialogContent'
            },] }
];
/** @nocollapse */
LyDialogContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
const STYLE_PRIORITY$3 = -2;
/**
 * \@docs-private
 * @type {?}
 */
const STYLES_DIALOG_ACTIONS = ({
    display: 'flex',
    flex: '0 0 auto',
    padding: '8px',
    flexWrap: 'wrap',
    minHeight: '52px',
    alignItems: 'center'
});
class LyDialogActions {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY$3));
    }
}
LyDialogActions.decorators = [
    { type: Directive, args: [{
                selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
                exportAs: 'lyDialogActions'
            },] }
];
/** @nocollapse */
LyDialogActions.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyDialogModule {
}
LyDialogModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LyDialog, LY_DIALOG_DATA, LyDialogRef, LyDialogModule, LyDialogActions as ɵd, LyDialogContainer as ɵa, LyDialogContent as ɵc, LyDialogTitle as ɵb };

//# sourceMappingURL=alyle-ui-dialog.js.map