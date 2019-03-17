(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@alyle/ui'), require('@angular/animations'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/expansion', ['exports', '@angular/common', '@alyle/ui', '@angular/animations', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.expansion = {}),global.ng.common,global.ly.core,global.ng.animations,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,common,ui,animations,rxjs,operators,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -0.9;
    /** @type {?} */
    var STYLES = function (theme) {
        return ({
            $priority: STYLE_PRIORITY,
            $name: 'expansion',
            '@global': {
                '{panelTitle},{panelDescription}': {
                    display: 'flex',
                    marginAfter: '16px',
                },
                '{panel}:not({disabled})': {
                    '{panelTitle}': {
                        color: theme.text.default
                    },
                    '{panelDescription}': {
                        color: theme.text.secondary
                    }
                }
            },
            root: null,
            panel: {
                display: 'block',
                overflow: 'hidden',
                position: 'relative',
                '&:not({disabled}) {panelHeader}': {
                    cursor: 'pointer'
                }
            },
            panelHeader: {
                display: 'flex',
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 24px',
                transition: "height " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.pxToRem(15),
                fontWeight: 400,
                '{panel}:not({expanded}):not({disabled}) &:hover': {
                    background: theme.hover,
                    '@media (hover: none)': {
                        background: 'none'
                    }
                }
            },
            panelHeaderContent: {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                overflow: 'hidden'
            },
            panelContent: {
                display: 'flex',
                flexDirection: 'column',
                overflow: 'visible'
            },
            panelBody: {
                visibility: 'hidden',
                padding: '0 24px 16px',
                transition: "visibility " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.pxToRem(14),
                fontWeight: 400,
                lineHeight: theme.pxToRem(20)
            },
            panelTitle: {
                flexGrow: 1
            },
            panelDescription: {
                flexGrow: 2
            },
            panelActionRow: {
                borderTop: "1px solid " + theme.divider,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: '16px 8px 16px 24px'
            },
            expanded: {
                '{panelBody}': {
                    visibility: 'visible'
                }
            },
            disabled: {
                color: theme.disabled.contrast
            }
        });
    };
    var LyAccordion = /** @class */ (function () {
        function LyAccordion(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            /**
             * \@docs-private
             */
            this.classes = this._theme.addStyleSheet(STYLES);
            this._hasToggle = true;
            /**
             * Stream that emits true/false when openAll/closeAll is triggered.
             */
            this._openCloseAllActions = new rxjs.Subject();
        }
        Object.defineProperty(LyAccordion.prototype, "appearance", {
            get: /**
             * @return {?}
             */ function () {
                return this._appearance;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("lyAccordion.appearance:" + val, function (theme) {
                    if (!theme.expansion) {
                        throw ui.getLyThemeVariableUndefinedError('expansion');
                    }
                    if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                        throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    return ( /** @type {?} */(theme.expansion.appearance[val]));
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyAccordion.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._multiple;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._multiple = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyAccordion.prototype, "hasToggle", {
            get: /**
             * @return {?}
             */ function () {
                return this._hasToggle;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._hasToggle = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyAccordion.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var expansion = this._theme.variables.expansion;
                if (expansion && expansion.root) {
                    this._renderer.addClass(this._el.nativeElement, this._theme.style(expansion.root, STYLE_PRIORITY, STYLES));
                }
                this._renderer.addClass(this._el.nativeElement, this.classes.root);
            };
        /**
         * @return {?}
         */
        LyAccordion.prototype.closeAll = /**
         * @return {?}
         */
            function () {
                this._openCloseAll(true);
            };
        /**
         * @return {?}
         */
        LyAccordion.prototype.openAll = /**
         * @return {?}
         */
            function () {
                this._openCloseAll(false);
            };
        /**
         * @private
         * @param {?} expanded
         * @return {?}
         */
        LyAccordion.prototype._openCloseAll = /**
         * @private
         * @param {?} expanded
         * @return {?}
         */
            function (expanded) {
                if (this.multiple) {
                    this._openCloseAllActions.next(expanded);
                }
            };
        LyAccordion.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-accordion',
                        exportAs: 'lyAccordion'
                    },] }
        ];
        /** @nocollapse */
        LyAccordion.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        LyAccordion.propDecorators = {
            appearance: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            hasToggle: [{ type: core.Input }]
        };
        return LyAccordion;
    }());

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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var lyExpansionAnimations = {
        contentExpansion: animations.trigger('contentExpansion', [
            animations.state('collapsed, void', animations.style({ height: '0px', visibility: 'hidden' })),
            animations.state('expanded', animations.style({ height: '*', visibility: 'visible' })),
            animations.transition('expanded <=> collapsed, void => collapsed', animations.animate('{{panelAnimationTiming}}')),
        ])
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyExpansionPanelContent = /** @class */ (function () {
        function LyExpansionPanelContent(_template) {
            this._template = _template;
        }
        LyExpansionPanelContent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ng-template[lyExpansionPanelContent]'
                    },] }
        ];
        /** @nocollapse */
        LyExpansionPanelContent.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return LyExpansionPanelContent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyExpansionPanelBase = /** @class */ (function () {
        function LyExpansionPanelBase(_theme) {
            this._theme = _theme;
        }
        return LyExpansionPanelBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyButtonMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinElevation(ui.mixinShadowColor(LyExpansionPanelBase)))));
    var LyExpansionPanel = /** @class */ (function (_super) {
        __extends(LyExpansionPanel, _super);
        function LyExpansionPanel(_el, _renderer, _cd, _theme, _accordion) {
            var _this = _super.call(this, _theme) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._cd = _cd;
            _this._accordion = _accordion;
            /**
             * \@docs-private
             */
            _this.classes = _this._accordion.classes;
            _this._panelAnimationTiming = _this._theme.variables.animations.durations.entering + "ms " + _this._theme.variables.animations.curves.standard;
            /**
             * Subscription to openAll/closeAll events.
             */
            _this._openCloseAllSubscription = rxjs.Subscription.EMPTY;
            _this._hasToggle = !!_this._accordion.hasToggle;
            /**
             * Event emitted every time the LyExpansionPanel is closed.
             */
            _this.closed = new core.EventEmitter();
            /**
             * Event emitted every time the LyExpansionPanel is opened.
             */
            _this.opened = new core.EventEmitter();
            /**
             * An event emitted after the body's collapse animation happens.
             */
            _this.afterCollapse = new core.EventEmitter();
            /**
             * An event emitted after the body's expansion animation happens.
             */
            _this.afterExpand = new core.EventEmitter();
            /**
             * Event emitted when the LyExpansionPanel is destroyed.
             */
            _this.destroyed = new core.EventEmitter();
            /**
             * Stream of body animation done events.
             */
            _this._bodyAnimationDone = new rxjs.Subject();
            _renderer.addClass(_el.nativeElement, _this._accordion.classes.panel);
            _this._openCloseAllSubscription = _this._subscribeToOpenCloseAllActions();
            _this._bodyAnimationDone.pipe(operators.distinctUntilChanged(function (x, y) {
                return x.fromState === y.fromState && x.toState === y.toState;
            })).subscribe(function (event) {
                if (event.fromState !== 'void') {
                    if (event.toState === 'expanded') {
                        _this.afterExpand.emit();
                    }
                    else if (event.toState === 'collapsed') {
                        _this.afterCollapse.emit();
                    }
                }
            });
            return _this;
        }
        Object.defineProperty(LyExpansionPanel.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
                if (newVal !== this.disabled) {
                    this._disabled = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this._accordion.classes.disabled);
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.disabled);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyExpansionPanel.prototype, "expanded", {
            get: /**
             * @return {?}
             */ function () {
                return this._expanded;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
                if (newVal !== this.expanded && !this.disabled) {
                    // unselect other panels
                    if (newVal && !this._accordion.multiple) {
                        this._accordion._openCloseAllActions.next(false);
                    }
                    this._expanded = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this._accordion.classes.expanded);
                        this.opened.emit();
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.expanded);
                        this.closed.emit();
                    }
                    this._cd.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyExpansionPanel.prototype, "hasToggle", {
            get: /**
             * @return {?}
             */ function () {
                return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._hasToggle = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requireUpdate = false;
                if (this.bg == null) {
                    this.bg = 'paper';
                    requireUpdate = true;
                }
                if (this.color == null) {
                    this.color = 'text';
                    requireUpdate = true;
                }
                if (this.elevation == null) {
                    this.elevation = 2;
                    requireUpdate = true;
                }
                if (requireUpdate) {
                    this.ngOnChanges();
                }
            };
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._lazyContent) {
                    this.opened.pipe(operators.startWith(( /** @type {?} */(null))), operators.filter(function () { return !!_this.expanded && !_this._lazyContentRef; }), operators.first()).subscribe(function () { return _this._lazyContentRef = _this._lazyContent._template; });
                }
            };
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._openCloseAllSubscription.unsubscribe();
            };
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.close = /**
         * @return {?}
         */
            function () {
                this.expanded = false;
            };
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.open = /**
         * @return {?}
         */
            function () {
                this.expanded = true;
            };
        /**
         * @return {?}
         */
        LyExpansionPanel.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.expanded = !this.expanded;
            };
        /** Gets the expanded state string. */
        /**
         * Gets the expanded state string.
         * @return {?}
         */
        LyExpansionPanel.prototype._getExpandedState = /**
         * Gets the expanded state string.
         * @return {?}
         */
            function () {
                return this.expanded ? 'expanded' : 'collapsed';
            };
        /**
         * @private
         * @return {?}
         */
        LyExpansionPanel.prototype._subscribeToOpenCloseAllActions = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                return this._accordion._openCloseAllActions.subscribe(function (expanded) {
                    _this.expanded = expanded;
                });
            };
        LyExpansionPanel.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-expansion-panel',
                        template: "<ng-content select=\"ly-expansion-panel-header\"></ng-content>\n<div [className]=\"classes.panelContent\"\n  [@contentExpansion]=\"{\n    value: _getExpandedState(),\n    params: {\n      panelAnimationTiming: _panelAnimationTiming\n    }\n  }\"\n  (@contentExpansion.done)=\"_bodyAnimationDone.next($event)\"\n>\n  <div [className]=\"classes.panelBody\">\n    <ng-content></ng-content>\n    <ng-template [ngTransclude]=\"_lazyContentRef\"></ng-template>\n  </div>\n  <ng-content select=\"ly-action-row\"></ng-content>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        exportAs: 'lyExpansionPanel',
                        animations: [
                            lyExpansionAnimations.contentExpansion
                        ],
                        inputs: [
                            'bg',
                            'color',
                            'elevation',
                            'shadowColor'
                        ]
                    }] }
        ];
        /** @nocollapse */
        LyExpansionPanel.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: ui.LyTheme2 },
                { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
            ];
        };
        LyExpansionPanel.propDecorators = {
            _lazyContent: [{ type: core.ContentChild, args: [LyExpansionPanelContent,] }],
            closed: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            afterCollapse: [{ type: core.Output }],
            afterExpand: [{ type: core.Output }],
            destroyed: [{ type: core.Output }],
            disabled: [{ type: core.Input }],
            expanded: [{ type: core.Input }],
            hasToggle: [{ type: core.Input }]
        };
        return LyExpansionPanel;
    }(LyButtonMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyExpansionPanelHeader = /** @class */ (function () {
        function LyExpansionPanelHeader(el, renderer, _accordion, _expansionPanel) {
            this._accordion = _accordion;
            this._expansionPanel = _expansionPanel;
            /**
             * \@docs-private
             */
            this.classes = this._accordion.classes;
            renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
        }
        LyExpansionPanelHeader.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-expansion-panel-header',
                        template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
                        host: {
                            '(click)': '_expansionPanel.toggle()'
                        }
                    }] }
        ];
        /** @nocollapse */
        LyExpansionPanelHeader.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] },
                { type: LyExpansionPanel, decorators: [{ type: core.Inject, args: [LyExpansionPanel,] }] }
            ];
        };
        return LyExpansionPanelHeader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyExpansionPanelTitle = /** @class */ (function () {
        function LyExpansionPanelTitle(el, renderer, accordion) {
            renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
        }
        LyExpansionPanelTitle.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-panel-title'
                    },] }
        ];
        /** @nocollapse */
        LyExpansionPanelTitle.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
            ];
        };
        return LyExpansionPanelTitle;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyExpansionPanelDescription = /** @class */ (function () {
        function LyExpansionPanelDescription(el, renderer, accordion) {
            renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
        }
        LyExpansionPanelDescription.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-panel-description'
                    },] }
        ];
        /** @nocollapse */
        LyExpansionPanelDescription.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
            ];
        };
        return LyExpansionPanelDescription;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyExpansionPanelAction = /** @class */ (function () {
        function LyExpansionPanelAction(el, renderer, accordion) {
            renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
        }
        LyExpansionPanelAction.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-action-row'
                    },] }
        ];
        /** @nocollapse */
        LyExpansionPanelAction.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
            ];
        };
        return LyExpansionPanelAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyExpansionModule = /** @class */ (function () {
        function LyExpansionModule() {
        }
        LyExpansionModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            LyAccordion,
                            LyExpansionPanel,
                            LyExpansionPanelHeader,
                            LyExpansionPanelContent,
                            LyExpansionPanelTitle,
                            LyExpansionPanelDescription,
                            LyExpansionPanelAction
                        ],
                        imports: [
                            common.CommonModule,
                            ui.LyExpansionIconModule,
                            ui.NgTranscludeModule
                        ],
                        exports: [
                            LyAccordion,
                            LyExpansionPanel,
                            LyExpansionPanelHeader,
                            LyExpansionPanelContent,
                            LyExpansionPanelTitle,
                            LyExpansionPanelDescription,
                            LyExpansionPanelAction
                        ]
                    },] }
        ];
        return LyExpansionModule;
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

    exports.STYLES = STYLES;
    exports.LyAccordion = LyAccordion;
    exports.LyExpansionModule = LyExpansionModule;
    exports.LyExpansionPanelBase = LyExpansionPanelBase;
    exports.LyButtonMixinBase = LyButtonMixinBase;
    exports.LyExpansionPanel = LyExpansionPanel;
    exports.LyExpansionPanelContent = LyExpansionPanelContent;
    exports.LyExpansionPanelDescription = LyExpansionPanelDescription;
    exports.LyExpansionPanelHeader = LyExpansionPanelHeader;
    exports.LyExpansionPanelTitle = LyExpansionPanelTitle;
    exports.ɵa = lyExpansionAnimations;
    exports.ɵb = LyExpansionPanelAction;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-expansion.umd.js.map