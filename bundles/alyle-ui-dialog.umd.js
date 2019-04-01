(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('rxjs'), require('@angular/common'), require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/dialog', ['exports', '@angular/animations', 'rxjs', '@angular/common', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.dialog = {}),global.ng.animations,global.rxjs,global.ng.common,global.ng.core,global.ly.core));
}(this, (function (exports,animations,rxjs,common,core,ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
             */ function () {
                return (( /** @type {?} */(( /** @type {?} */(this._overlayRef.componentRef)).instance)))._afterOpened.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDialogRef.prototype, "beforeClosed", {
            get: /**
             * @return {?}
             */ function () {
                return (( /** @type {?} */(( /** @type {?} */(this._overlayRef.componentRef)).instance)))._beforeClosed.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDialogRef.prototype, "afterClosed", {
            get: /**
             * @return {?}
             */ function () {
                return (( /** @type {?} */(( /** @type {?} */(this._overlayRef.componentRef)).instance)))._afterClosed.asObservable();
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
             */ function () {
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
                var dialogContainer = (( /** @type {?} */(( /** @type {?} */(this._overlayRef.componentRef)).instance)));
                dialogContainer._beforeClosed.next(result);
                dialogContainer._beforeClosed.complete();
                dialogContainer._startClose();
                this._result = result;
            };
        LyDialogRef.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LyDialogRef.ctorParameters = function () {
            return [
                { type: ui.LyOverlayRef }
            ];
        };
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
     */ LyDialogConfig = /** @class */ (function () {
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
    var LY_DIALOG_DATA = new core.InjectionToken('LyDialogData');

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
    var STYLES = function (theme) {
        return ({
            root: {
                display: 'flex',
                position: 'relative',
                backgroundColor: theme.background.primary.default,
                borderRadius: '4px',
                boxShadow: ui.shadowBuilder(12),
                overflow: 'auto',
                '> :first-child': {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                },
                '&': theme.dialog ? theme.dialog.root : null
            }
        });
    };
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
            this._afterOpened = new rxjs.Subject();
            /**
             * \@internal
             */
            this._beforeClosed = new rxjs.Subject();
            /**
             * \@internal
             */
            this._afterClosed = new rxjs.Subject();
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
                if (this._componentFactoryOrTemplate instanceof core.TemplateRef) {
                    /** @type {?} */
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
                    ( /** @type {?} */(( /** @type {?} */(this._overlayRef)).onResizeScroll))();
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
            { type: core.Component, args: [{
                        selector: 'ly-dialog-container',
                        template: '<ng-template></ng-template>',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        animations: [
                            animations.trigger('dialogContainer', [
                                animations.state('void, exit', animations.style({ opacity: 0, transform: 'scale(0.7)' })),
                                animations.state('enter', animations.style({ transform: 'none' })),
                                animations.transition('* => enter', animations.animate('150ms cubic-bezier(0, 0, 0.2, 1)', animations.style({ transform: 'none', opacity: 1 }))),
                                animations.transition('* => void, * => exit', animations.animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', animations.style({ opacity: 0 })))
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
        LyDialogContainer.ctorParameters = function () {
            return [
                { type: core.ApplicationRef },
                { type: ui.LyOverlayRef },
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: core.Renderer2 }
            ];
        };
        LyDialogContainer.propDecorators = {
            viewContainerRef: [{ type: core.ViewChild, args: [core.TemplateRef, { read: core.ViewContainerRef },] }]
        };
        return LyDialogContainer;
    }());
    var LyDialogContext = /** @class */ (function () {
        function LyDialogContext(_injector) {
            this._injector = _injector;
            this.$implicit = this._injector.get(LyDialogRef);
            this.dialogRef = this._injector.get(LyDialogRef);
        }
        Object.defineProperty(LyDialogContext.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._injector.get(LY_DIALOG_DATA);
            },
            enumerable: true,
            configurable: true
        });
        return LyDialogContext;
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
                if (componentOrTemplateRef instanceof core.TemplateRef) {
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
                    backdropClass: config.backdropClass || this._theme.style(ui.STYLES_BACKDROP_DARK),
                    fnDestroy: function () {
                        dialogRef.close();
                    }
                });
                /** @type {?} */
                var instance = ( /** @type {?} */(overlayRef.componentRef)).instance;
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
                        useValue: new LyDialogRef(( /** @type {?} */(overlayRef.componentRef)).injector.get(ui.LyOverlayRef))
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
                var newInjector = new DynamicInjector(core.Injector.create(providers, ( /** @type {?} */(overlayRef.componentRef)).injector), this._injector);
                instance._init(componentFactoryOrTemplate, newInjector);
                /** @type {?} */
                var dialogRef = newInjector.get(LyDialogRef);
                return dialogRef;
            };
        LyDialog.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LyDialog.ctorParameters = function () {
            return [
                { type: ui.LyOverlay },
                { type: core.ComponentFactoryResolver },
                { type: ui.LyTheme2 },
                { type: core.Injector }
            ];
        };
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
    var STYLES_DIALOG_TITLE = function (theme) {
        return ({
            display: 'block',
            flex: '0 0 auto',
            margin: '20px 0 16px',
            padding: '0 24px',
            fontSize: "20px",
            lineHeight: '24px',
            fontWeight: 500,
            fontFamily: theme.typography.fontFamily
        });
    };
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
            { type: core.Directive, args: [{
                        selector: '[ly-dialog-title], [lyDialogTitle]',
                        exportAs: 'lyDialogTitle'
                    },] }
        ];
        /** @nocollapse */
        LyDialogTitle.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
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
            { type: core.Directive, args: [{
                        selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
                        exportAs: 'lyDialogContent'
                    },] }
        ];
        /** @nocollapse */
        LyDialogContent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
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
            { type: core.Directive, args: [{
                        selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
                        exportAs: 'lyDialogActions'
                    },] }
        ];
        /** @nocollapse */
        LyDialogActions.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
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
            { type: core.NgModule, args: [{
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
                            common.CommonModule,
                            ui.LyCommonModule,
                            ui.LyOverlayModule
                        ],
                        exports: [
                            ui.LyCommonModule,
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

    exports.LyDialog = LyDialog;
    exports.LY_DIALOG_DATA = LY_DIALOG_DATA;
    exports.LyDialogRef = LyDialogRef;
    exports.LyDialogModule = LyDialogModule;
    exports.ɵd = LyDialogActions;
    exports.ɵa = LyDialogContainer;
    exports.ɵc = LyDialogContent;
    exports.ɵb = LyDialogTitle;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-dialog.umd.js.map