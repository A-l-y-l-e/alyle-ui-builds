import { CommonModule } from '@angular/common';
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
const STYLE_PRIORITY = -0.9;
/** @type {?} */
const STYLES = (theme) => ({
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
        transition: `height ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
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
        transition: `visibility ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
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
        borderTop: `1px solid ${theme.divider}`,
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
class LyAccordion {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_theme, _renderer, _el) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        this._appearance = val;
        this._appearanceClass = this._theme.addStyle(`lyAccordion.appearance:${val}`, (theme) => {
            if (!theme.expansion) {
                throw getLyThemeVariableUndefinedError('expansion');
            }
            if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            return (/** @type {?} */ (theme.expansion.appearance[val]));
        }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
    }
    /**
     * @return {?}
     */
    get appearance() {
        return this._appearance;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set multiple(val) {
        this._multiple = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get hasToggle() {
        return this._hasToggle;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { expansion } = this._theme.variables;
        if (expansion && expansion.root) {
            this._renderer.addClass(this._el.nativeElement, this._theme.style(expansion.root, STYLE_PRIORITY, STYLES));
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this._openCloseAll(true);
    }
    /**
     * @return {?}
     */
    openAll() {
        this._openCloseAll(false);
    }
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _openCloseAll(expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
LyAccordion.decorators = [
    { type: Directive, args: [{
                selector: 'ly-accordion',
                exportAs: 'lyAccordion'
            },] }
];
/** @nocollapse */
LyAccordion.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyAccordion.propDecorators = {
    appearance: [{ type: Input }],
    multiple: [{ type: Input }],
    hasToggle: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const lyExpansionAnimations = {
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
class LyExpansionPanelContent {
    /**
     * @param {?} _template
     */
    constructor(_template) {
        this._template = _template;
    }
}
LyExpansionPanelContent.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[lyExpansionPanelContent]'
            },] }
];
/** @nocollapse */
LyExpansionPanelContent.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
class LyExpansionPanelBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
class LyExpansionPanel extends LyButtonMixinBase {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _cd
     * @param {?} _theme
     * @param {?} _accordion
     */
    constructor(_el, _renderer, _cd, _theme, _accordion) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._accordion = _accordion;
        /**
         * \@docs-private
         */
        this.classes = this._accordion.classes;
        this._panelAnimationTiming = `${this._theme.variables.animations.durations.entering}ms ${this._theme.variables.animations.curves.standard}`;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = Subscription.EMPTY;
        this._hasToggle = !!this._accordion.hasToggle;
        /**
         * Event emitted every time the LyExpansionPanel is closed.
         */
        this.closed = new EventEmitter();
        /**
         * Event emitted every time the LyExpansionPanel is opened.
         */
        this.opened = new EventEmitter();
        /**
         * An event emitted after the body's collapse animation happens.
         */
        this.afterCollapse = new EventEmitter();
        /**
         * An event emitted after the body's expansion animation happens.
         */
        this.afterExpand = new EventEmitter();
        /**
         * Event emitted when the LyExpansionPanel is destroyed.
         */
        this.destroyed = new EventEmitter();
        /**
         * Stream of body animation done events.
         */
        this._bodyAnimationDone = new Subject();
        _renderer.addClass(_el.nativeElement, this._accordion.classes.panel);
        this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.disabled) {
            this._disabled = newVal;
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this._accordion.classes.disabled);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.disabled);
            }
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set expanded(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
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
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get hasToggle() {
        return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let requireUpdate = false;
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
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this._lazyContent) {
            this.opened.pipe(startWith((/** @type {?} */ (null))), filter(() => !!this.expanded && !this._lazyContentRef), first()).subscribe(() => this._lazyContentRef = this._lazyContent._template);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._openCloseAllSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    close() {
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    open() {
        this.expanded = true;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expanded = !this.expanded;
    }
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeToOpenCloseAllActions() {
        return this._accordion._openCloseAllActions.subscribe(expanded => {
            this.expanded = expanded;
        });
    }
}
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
LyExpansionPanel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyExpansionPanelHeader {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} _accordion
     * @param {?} _expansionPanel
     */
    constructor(el, renderer, _accordion, _expansionPanel) {
        this._accordion = _accordion;
        this._expansionPanel = _expansionPanel;
        /**
         * \@docs-private
         */
        this.classes = this._accordion.classes;
        renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
    }
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
LyExpansionPanelHeader.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] },
    { type: LyExpansionPanel, decorators: [{ type: Inject, args: [LyExpansionPanel,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyExpansionPanelTitle {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} accordion
     */
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
}
LyExpansionPanelTitle.decorators = [
    { type: Directive, args: [{
                selector: 'ly-panel-title'
            },] }
];
/** @nocollapse */
LyExpansionPanelTitle.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyExpansionPanelDescription {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} accordion
     */
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
}
LyExpansionPanelDescription.decorators = [
    { type: Directive, args: [{
                selector: 'ly-panel-description'
            },] }
];
/** @nocollapse */
LyExpansionPanelDescription.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyExpansionPanelAction {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} accordion
     */
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
}
LyExpansionPanelAction.decorators = [
    { type: Directive, args: [{
                selector: 'ly-action-row'
            },] }
];
/** @nocollapse */
LyExpansionPanelAction.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyExpansionModule {
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