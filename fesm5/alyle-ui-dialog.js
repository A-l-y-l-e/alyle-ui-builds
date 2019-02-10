import { __assign } from 'tslib';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Injectable, Component, TemplateRef, ViewChild, ViewContainerRef, ApplicationRef, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, InjectionToken, ComponentFactoryResolver, Injector, Directive, NgModule } from '@angular/core';
import { LyOverlayRef, LyTheme2, shadowBuilder, LyOverlay, STYLES_BACKDROP_DARK, LyCommonModule, LyOverlayModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LyDialogRef = /** @class */ (function () {
    function LyDialogRef(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    Object.defineProperty(LyDialogRef.prototype, "afterOpened", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterOpened.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "beforeClosed", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._beforeClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "afterClosed", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "result", {
        /**
         * @internal
         * @docs-private
         */
        get: /**
         * \@internal
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} result
     * @return {?}
     */
    LyDialogRef.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        /** @type {?} */
        var dialogContainer = ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)));
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    };
    LyDialogRef.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LyDialogRef.ctorParameters = function () { return [
        { type: LyOverlayRef }
    ]; };
    return LyDialogRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration for opening a modal dialog with the LyDialog service.
 * @template DATA
 */
var /**
 * Configuration for opening a modal dialog with the LyDialog service.
 * @template DATA
 */
LyDialogConfig = /** @class */ (function () {
    function LyDialogConfig() {
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
    return LyDialogConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        }
    }
}); };
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
            this._embeddedViewRef = this.viewContainerRef.createEmbeddedView(this._componentFactoryOrTemplate);
            this._appRef.attachView(this._embeddedViewRef);
        }
        else {
            this._componentRef = this.viewContainerRef.createComponent(this._componentFactoryOrTemplate, undefined, this._newInjector);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicInjector = /** @class */ (function () {
    function DynamicInjector(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} _flags
     * @return {?}
     */
    DynamicInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} _flags
     * @return {?}
     */
    function (token, notFoundValue, _flags) {
        /** @type {?} */
        var value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_DIALOG_DATA = new InjectionToken('LyDialogData');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        config = __assign({}, new LyDialogConfig(), config);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
var STYLE_PRIORITY$1 = -2;
/**
 * \@docs-private
 * @type {?}
 */
var STYLES_DIALOG_TITLE = function (theme) { return ({
    display: 'block',
    flex: '0 0 auto',
    margin: '20px 0 16px',
    padding: '0 24px',
    fontSize: "20px",
    lineHeight: '24px',
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
}); };
var LyDialogTitle = /** @class */ (function () {
    function LyDialogTitle(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    LyDialogTitle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_TITLE, STYLE_PRIORITY$1));
    };
    LyDialogTitle.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-dialog-title], [lyDialogTitle]',
                    exportAs: 'lyDialogTitle'
                },] }
    ];
    /** @nocollapse */
    LyDialogTitle.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyDialogTitle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
var STYLE_PRIORITY$2 = -2;
/**
 * \@docs-private
 * @type {?}
 */
var STYLES_DIALOG_CONTENT = ({
    display: 'block',
    overflowY: 'auto',
    flex: '1 1 auto',
    padding: '0 24px 24px',
    '-webkit-overflow-scrolling': 'touch'
});
var LyDialogContent = /** @class */ (function () {
    function LyDialogContent(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    LyDialogContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_CONTENT, STYLE_PRIORITY$2));
    };
    LyDialogContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
                    exportAs: 'lyDialogContent'
                },] }
    ];
    /** @nocollapse */
    LyDialogContent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyDialogContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
var STYLE_PRIORITY$3 = -2;
/**
 * \@docs-private
 * @type {?}
 */
var STYLES_DIALOG_ACTIONS = ({
    display: 'flex',
    flex: '0 0 auto',
    padding: '8px',
    flexWrap: 'wrap',
    minHeight: '52px',
    alignItems: 'center'
});
var LyDialogActions = /** @class */ (function () {
    function LyDialogActions(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    LyDialogActions.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY$3));
    };
    LyDialogActions.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
                    exportAs: 'lyDialogActions'
                },] }
    ];
    /** @nocollapse */
    LyDialogActions.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyDialogActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LyDialogModule = /** @class */ (function () {
    function LyDialogModule() {
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
    return LyDialogModule;
}());

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