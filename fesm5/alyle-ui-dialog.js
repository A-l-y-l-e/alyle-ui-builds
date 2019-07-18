import { __decorate, __metadata, __assign } from 'tslib';
import { Injectable, InjectionToken, TemplateRef, ViewChild, ViewContainerRef, Component, ChangeDetectionStrategy, ApplicationRef, ElementRef, ChangeDetectorRef, Renderer2, Injector, ComponentFactoryResolver, Directive, NgModule } from '@angular/core';
import { LyOverlayRef, LyTheme2, shadowBuilder, STYLES_BACKDROP_DARK, LyOverlay, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

var LyDialogRef = /** @class */ (function () {
    function LyDialogRef(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    Object.defineProperty(LyDialogRef.prototype, "afterOpened", {
        get: function () {
            return this._overlayRef.componentRef.instance._afterOpened.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "beforeClosed", {
        get: function () {
            return this._overlayRef.componentRef.instance._beforeClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "afterClosed", {
        get: function () {
            return this._overlayRef.componentRef.instance._afterClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "result", {
        /**
         * @internal
         * @docs-private
         */
        get: function () {
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    LyDialogRef.prototype.close = function (result) {
        var dialogContainer = this._overlayRef.componentRef.instance;
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    };
    LyDialogRef = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LyOverlayRef])
    ], LyDialogRef);
    return LyDialogRef;
}());

/**
 * Configuration for opening a modal dialog with the LyDialog service.
 */
var LyDialogConfig = /** @class */ (function () {
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
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
    }
    return LyDialogConfig;
}());

var LY_DIALOG_DATA = new InjectionToken('LyDialogData');

var STYLE_PRIORITY = -2;
/** @docs-private */
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
    __decorate([
        ViewChild(TemplateRef, { read: ViewContainerRef, static: true }),
        __metadata("design:type", ViewContainerRef)
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
        }),
        __metadata("design:paramtypes", [ApplicationRef,
            LyOverlayRef,
            LyTheme2,
            ElementRef,
            ChangeDetectorRef,
            Renderer2])
    ], LyDialogContainer);
    return LyDialogContainer;
}());
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

var DynamicInjector = /** @class */ (function () {
    function DynamicInjector(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    DynamicInjector.prototype.get = function (token, notFoundValue, _flags) {
        var value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicInjector;
}());

var LyDialog = /** @class */ (function () {
    function LyDialog(_overlay, _componentFactoryResolver, _theme, _injector) {
        this._overlay = _overlay;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._theme = _theme;
        this._injector = _injector;
    }
    LyDialog.prototype.open = function (componentOrTemplateRef, config) {
        // merge with default config
        config = __assign({}, new LyDialogConfig(), config);
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
    LyDialog = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LyOverlay,
            ComponentFactoryResolver,
            LyTheme2,
            Injector])
    ], LyDialog);
    return LyDialog;
}());
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

/** @docs-private */
var STYLE_PRIORITY$1 = -2;
/** @docs-private */
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
    LyDialogTitle.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_TITLE, STYLE_PRIORITY$1));
    };
    LyDialogTitle = __decorate([
        Directive({
            selector: '[ly-dialog-title], [lyDialogTitle]',
            exportAs: 'lyDialogTitle'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyDialogTitle);
    return LyDialogTitle;
}());

/** @docs-private */
var STYLE_PRIORITY$2 = -2;
/** @docs-private */
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
    LyDialogContent.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_CONTENT, STYLE_PRIORITY$2));
    };
    LyDialogContent = __decorate([
        Directive({
            selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
            exportAs: 'lyDialogContent'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyDialogContent);
    return LyDialogContent;
}());

/** @docs-private */
var STYLE_PRIORITY$3 = -2;
/** @docs-private */
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
    LyDialogActions.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY$3));
    };
    LyDialogActions = __decorate([
        Directive({
            selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
            exportAs: 'lyDialogActions'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyDialogActions);
    return LyDialogActions;
}());

var LyDialogModule = /** @class */ (function () {
    function LyDialogModule() {
    }
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
    return LyDialogModule;
}());

export { LY_DIALOG_DATA, LyDialog, LyDialogModule, LyDialogRef, LyDialogContainer as ɵa, LyDialogTitle as ɵb, LyDialogContent as ɵc, LyDialogActions as ɵd };
//# sourceMappingURL=alyle-ui-dialog.js.map
