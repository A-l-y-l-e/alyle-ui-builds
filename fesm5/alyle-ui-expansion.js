import { CommonModule } from '@angular/common';
import { __extends } from 'tslib';
import { toBoolean, LyTheme2, getLyThemeVariableUndefinedError, mixinBg, mixinColor, mixinElevation, mixinShadowColor, mixinStyleUpdater, NgTranscludeModule, LyExpansionIconModule } from '@alyle/ui';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject, Subscription } from 'rxjs';
import { startWith, filter, first, distinctUntilChanged } from 'rxjs/operators';
import { Directive, Input, ElementRef, Renderer2, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Inject, Output, EventEmitter, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -0.9;
/** @type {?} */
var STYLES = function (theme) { return ({
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
}); };
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
        this._openCloseAllActions = new Subject();
    }
    Object.defineProperty(LyAccordion.prototype, "appearance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._appearance;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle("lyAccordion.appearance:" + val, function (theme) {
                if (!((/** @type {?} */ (theme.expansion)).appearance && (/** @type {?} */ (theme.expansion)).appearance[val])) {
                    throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                }
                return (/** @type {?} */ ((/** @type {?} */ (theme.expansion)).appearance[val]));
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._multiple = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "hasToggle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasToggle;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hasToggle = toBoolean(val);
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
        if (expansion) {
            if (expansion.root) {
                this._renderer.addClass(this._el.nativeElement, this._theme.style(expansion.root, STYLE_PRIORITY, STYLES));
            }
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // Apply default config
            if (expansion.defaultConfig && expansion.defaultConfig.appearance) {
                if (this.appearance == null) {
                    this.appearance = expansion.defaultConfig.appearance;
                }
            }
        }
        else {
            throw getLyThemeVariableUndefinedError('expansion');
        }
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
        { type: Directive, args: [{
                    selector: 'ly-accordion',
                    exportAs: 'lyAccordion'
                },] }
    ];
    /** @nocollapse */
    LyAccordion.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyAccordion.propDecorators = {
        appearance: [{ type: Input }],
        multiple: [{ type: Input }],
        hasToggle: [{ type: Input }]
    };
    return LyAccordion;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var lyExpansionAnimations = {
    contentExpansion: trigger('contentExpansion', [
        state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed, void => collapsed', animate('{{panelAnimationTiming}}')),
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
        { type: Directive, args: [{
                    selector: 'ng-template[lyExpansionPanelContent]'
                },] }
    ];
    /** @nocollapse */
    LyExpansionPanelContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return LyExpansionPanelContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyExpansionPanelBase = /** @class */ (function () {
    function LyExpansionPanelBase(_theme) {
        this._theme = _theme;
    }
    return LyExpansionPanelBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
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
        _this._openCloseAllSubscription = Subscription.EMPTY;
        _this._hasToggle = !!_this._accordion.hasToggle;
        /**
         * Event emitted every time the LyExpansionPanel is closed.
         */
        _this.closed = new EventEmitter();
        /**
         * Event emitted every time the LyExpansionPanel is opened.
         */
        _this.opened = new EventEmitter();
        /**
         * An event emitted after the body's collapse animation happens.
         */
        _this.afterCollapse = new EventEmitter();
        /**
         * An event emitted after the body's expansion animation happens.
         */
        _this.afterExpand = new EventEmitter();
        /**
         * Event emitted when the LyExpansionPanel is destroyed.
         */
        _this.destroyed = new EventEmitter();
        /**
         * Stream of body animation done events.
         */
        _this._bodyAnimationDone = new Subject();
        _renderer.addClass(_el.nativeElement, _this._accordion.classes.panel);
        _this._openCloseAllSubscription = _this._subscribeToOpenCloseAllActions();
        _this._bodyAnimationDone.pipe(distinctUntilChanged(function (x, y) {
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
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
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
         */
        function () {
            return this._expanded;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
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
         */
        function () {
            return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hasToggle = toBoolean(val);
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
            this.opened.pipe(startWith((/** @type {?} */ (null))), filter(function () { return !!_this.expanded && !_this._lazyContentRef; }), first()).subscribe(function () { return _this._lazyContentRef = _this._lazyContent._template; });
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
        { type: Component, args: [{
                    selector: 'ly-expansion-panel',
                    template: "<ng-content select=\"ly-expansion-panel-header\"></ng-content>\n<div [className]=\"classes.panelContent\"\n  [@contentExpansion]=\"{\n    value: _getExpandedState(),\n    params: {\n      panelAnimationTiming: _panelAnimationTiming\n    }\n  }\"\n  (@contentExpansion.done)=\"_bodyAnimationDone.next($event)\"\n>\n  <div [className]=\"classes.panelBody\">\n    <ng-content></ng-content>\n    <ng-template [ngTransclude]=\"_lazyContentRef\"></ng-template>\n  </div>\n  <ng-content select=\"ly-action-row\"></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
    LyExpansionPanel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    LyExpansionPanel.propDecorators = {
        _lazyContent: [{ type: ContentChild, args: [LyExpansionPanelContent,] }],
        closed: [{ type: Output }],
        opened: [{ type: Output }],
        afterCollapse: [{ type: Output }],
        afterExpand: [{ type: Output }],
        destroyed: [{ type: Output }],
        disabled: [{ type: Input }],
        expanded: [{ type: Input }],
        hasToggle: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'ly-expansion-panel-header',
                    template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
                    host: {
                        '(click)': '_expansionPanel.toggle()'
                    }
                }] }
    ];
    /** @nocollapse */
    LyExpansionPanelHeader.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] },
        { type: LyExpansionPanel, decorators: [{ type: Inject, args: [LyExpansionPanel,] }] }
    ]; };
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
        { type: Directive, args: [{
                    selector: 'ly-panel-title'
                },] }
    ];
    /** @nocollapse */
    LyExpansionPanelTitle.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
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
        { type: Directive, args: [{
                    selector: 'ly-panel-description'
                },] }
    ];
    /** @nocollapse */
    LyExpansionPanelDescription.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
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
        { type: Directive, args: [{
                    selector: 'ly-action-row'
                },] }
    ];
    /** @nocollapse */
    LyExpansionPanelAction.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
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
        { type: NgModule, args: [{
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
                        CommonModule,
                        LyExpansionIconModule,
                        NgTranscludeModule
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

export { STYLES, LyAccordion, LyExpansionModule, LyExpansionPanelBase, LyButtonMixinBase, LyExpansionPanel, LyExpansionPanelContent, LyExpansionPanelDescription, LyExpansionPanelHeader, LyExpansionPanelTitle, lyExpansionAnimations as ɵa, LyExpansionPanelAction as ɵb };

//# sourceMappingURL=alyle-ui-expansion.js.map