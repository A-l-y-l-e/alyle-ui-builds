import { __decorate, __param } from 'tslib';
import { Renderer2, ElementRef, Input, Directive, TemplateRef, EventEmitter, ChangeDetectorRef, Inject, ContentChild, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toBoolean, getLyThemeVariableUndefinedError, LyTheme2, mixinStyleUpdater, mixinBg, mixinColor, mixinElevation, mixinShadowColor, LyExpansionIconModule, NgTranscludeModule } from '@alyle/ui';
import { Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { distinctUntilChanged, startWith, filter, first } from 'rxjs/operators';

const STYLE_PRIORITY = -0.9;
const STYLES = (theme, ref) => {
    const classes = ref.selectorsOf(STYLES);
    const { after } = theme;
    return {
        $priority: STYLE_PRIORITY,
        $name: LyAccordion.и,
        $global: () => (className) => `${className} ${classes.panelTitle},${className} ${classes.panelDescription}{display:flex;margin-${after}:16px;}${className} ${classes.panel}:not(${classes.disabled}) ${classes.panelTitle}{color:${theme.text.default};}${className} ${classes.panel}:not(${classes.disabled}) ${classes.panelDescription}{color:${theme.text.secondary};}`,
        root: (theme.expansion && theme.expansion.root) ? () => theme.expansion.root(classes) : null,
        panel: () => (className) => `${className}{display:block;overflow:hidden;position:relative;}${className}:not(${classes.disabled}) ${classes.panelHeader}{cursor:pointer;}`,
        panelHeader: () => (className) => `${className}{display:flex;position:relative;flex-direction:row;align-items:center;padding:0 24px;transition:height ${theme.animations.durations.entering}ms ${theme.animations.curves.standard};font-family:${theme.typography.fontFamily};font-size:${theme.pxToRem(15)};font-weight:400;}${classes.panel}:not(${classes.expanded}):not(${classes.disabled}) ${className}:hover{background:${theme.hover};}@media (hover: none){${classes.panel}:not(${classes.expanded}):not(${classes.disabled}) ${className}:hover{background:none;}}`,
        panelHeaderContent: (className) => `${className}{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden;}`,
        panelContent: (className) => `${className}{display:flex;flex-direction:column;overflow:visible;}`,
        panelBody: (className) => `${className}{visibility:hidden;padding:0 24px 16px;transition:visibility ${theme.animations.durations.entering}ms ${theme.animations.curves.standard};font-family:${theme.typography.fontFamily};font-size:${theme.pxToRem(14)};font-weight:400;line-height:${theme.pxToRem(20)};}`,
        panelTitle: (className) => `${className}{flex-grow:1;}`,
        panelDescription: (className) => `${className}{flex-grow:2;}`,
        panelActionRow: (className) => `${className}{border-top:1px solid ${theme.divider};display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;}`,
        expanded: () => (className) => `${className} ${classes.panelBody}{visibility:visible;}`,
        disabled: (className) => `${className}{color:${theme.disabled.contrast};}`
    };
};
let LyAccordion = class LyAccordion {
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._hasToggle = true;
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new Subject();
    }
    set appearance(val) {
        this._appearance = val;
        this._appearanceClass = this._theme.addStyle(`lyAccordion.appearance:${val}`, (theme, ref) => {
            if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            const classes = ref.selectorsOf(STYLES);
            return theme.expansion.appearance[val](classes);
        }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
    }
    get appearance() {
        return this._appearance;
    }
    set multiple(val) {
        this._multiple = toBoolean(val);
    }
    get multiple() {
        return this._multiple;
    }
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    get hasToggle() {
        return this._hasToggle;
    }
    ngOnInit() {
        const { expansion } = this._theme.variables;
        if (expansion) {
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
    }
    closeAll() {
        this._openCloseAll(true);
    }
    openAll() {
        this._openCloseAll(false);
    }
    _openCloseAll(expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    }
};
/** @docs-private */
LyAccordion.и = 'LyAccordion';
LyAccordion.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input()
], LyAccordion.prototype, "appearance", null);
__decorate([
    Input()
], LyAccordion.prototype, "multiple", null);
__decorate([
    Input()
], LyAccordion.prototype, "hasToggle", null);
LyAccordion = __decorate([
    Directive({
        selector: 'ly-accordion',
        exportAs: 'lyAccordion'
    })
], LyAccordion);

const lyExpansionAnimations = {
    contentExpansion: trigger('contentExpansion', [
        state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed, void => collapsed', animate('{{panelAnimationTiming}}')),
    ])
};

let LyExpansionPanelContent = class LyExpansionPanelContent {
    constructor(_template) {
        this._template = _template;
    }
};
LyExpansionPanelContent.ctorParameters = () => [
    { type: TemplateRef }
];
LyExpansionPanelContent = __decorate([
    Directive({
        selector: 'ng-template[lyExpansionPanelContent]'
    })
], LyExpansionPanelContent);

/** @docs-private */
class LyExpansionPanelBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
let LyExpansionPanel = class LyExpansionPanel extends LyButtonMixinBase {
    constructor(_el, _renderer, _cd, _theme, _accordion) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._accordion = _accordion;
        /** @docs-private */
        this.classes = this._accordion.classes;
        this._panelAnimationTiming = `${this._theme.variables.animations.durations.entering}ms ${this._theme.variables.animations.curves.standard}`;
        /** Subscription to openAll/closeAll events. */
        this._openCloseAllSubscription = Subscription.EMPTY;
        this._hasToggle = !!this._accordion.hasToggle;
        /** Event emitted every time the LyExpansionPanel is closed. */
        this.closed = new EventEmitter();
        /** Event emitted every time the LyExpansionPanel is opened. */
        this.opened = new EventEmitter();
        /** An event emitted after the body's collapse animation happens. */
        this.afterCollapse = new EventEmitter();
        /** An event emitted after the body's expansion animation happens. */
        this.afterExpand = new EventEmitter();
        /** Event emitted when the LyExpansionPanel is destroyed. */
        this.destroyed = new EventEmitter();
        /** Stream of body animation done events. */
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
    set disabled(val) {
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
    get disabled() {
        return this._disabled;
    }
    set expanded(val) {
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
    get expanded() {
        return this._expanded;
    }
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    get hasToggle() {
        return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    ngOnInit() {
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
    ngAfterContentInit() {
        if (this._lazyContent) {
            this.opened.pipe(startWith(null), filter(() => !!this.expanded && !this._lazyContentRef), first()).subscribe(() => this._lazyContentRef = this._lazyContent._template);
        }
    }
    ngOnDestroy() {
        this._openCloseAllSubscription.unsubscribe();
    }
    close() {
        this.expanded = false;
    }
    open() {
        this.expanded = true;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    _subscribeToOpenCloseAllActions() {
        return this._accordion._openCloseAllActions.subscribe(expanded => {
            this.expanded = expanded;
        });
    }
};
LyExpansionPanel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
__decorate([
    ContentChild(LyExpansionPanelContent, { static: false })
], LyExpansionPanel.prototype, "_lazyContent", void 0);
__decorate([
    Output()
], LyExpansionPanel.prototype, "closed", void 0);
__decorate([
    Output()
], LyExpansionPanel.prototype, "opened", void 0);
__decorate([
    Output()
], LyExpansionPanel.prototype, "afterCollapse", void 0);
__decorate([
    Output()
], LyExpansionPanel.prototype, "afterExpand", void 0);
__decorate([
    Output()
], LyExpansionPanel.prototype, "destroyed", void 0);
__decorate([
    Input()
], LyExpansionPanel.prototype, "disabled", null);
__decorate([
    Input()
], LyExpansionPanel.prototype, "expanded", null);
__decorate([
    Input()
], LyExpansionPanel.prototype, "hasToggle", null);
LyExpansionPanel = __decorate([
    Component({
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
    }),
    __param(4, Inject(LyAccordion))
], LyExpansionPanel);

let LyExpansionPanelHeader = class LyExpansionPanelHeader {
    constructor(el, renderer, _accordion, _expansionPanel) {
        this._accordion = _accordion;
        this._expansionPanel = _expansionPanel;
        /** @docs-private */
        this.classes = this._accordion.classes;
        renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
    }
};
LyExpansionPanelHeader.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] },
    { type: LyExpansionPanel, decorators: [{ type: Inject, args: [LyExpansionPanel,] }] }
];
LyExpansionPanelHeader = __decorate([
    Component({
        selector: 'ly-expansion-panel-header',
        template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
        host: {
            '(click)': '_expansionPanel.toggle()'
        }
    }),
    __param(2, Inject(LyAccordion)),
    __param(3, Inject(LyExpansionPanel))
], LyExpansionPanelHeader);

let LyExpansionPanelTitle = class LyExpansionPanelTitle {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
};
LyExpansionPanelTitle.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanelTitle = __decorate([
    Directive({
        selector: 'ly-panel-title'
    }),
    __param(2, Inject(LyAccordion))
], LyExpansionPanelTitle);

let LyExpansionPanelDescription = class LyExpansionPanelDescription {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
};
LyExpansionPanelDescription.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanelDescription = __decorate([
    Directive({
        selector: 'ly-panel-description'
    }),
    __param(2, Inject(LyAccordion))
], LyExpansionPanelDescription);

let LyExpansionPanelAction = class LyExpansionPanelAction {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
};
LyExpansionPanelAction.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanelAction = __decorate([
    Directive({
        selector: 'ly-action-row'
    }),
    __param(2, Inject(LyAccordion))
], LyExpansionPanelAction);

let LyExpansionModule = class LyExpansionModule {
};
LyExpansionModule = __decorate([
    NgModule({
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
    })
], LyExpansionModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyAccordion, LyButtonMixinBase, LyExpansionModule, LyExpansionPanel, LyExpansionPanelBase, LyExpansionPanelContent, LyExpansionPanelDescription, LyExpansionPanelHeader, LyExpansionPanelTitle, STYLES, lyExpansionAnimations as ɵa, LyExpansionPanelAction as ɵb };
//# sourceMappingURL=alyle-ui-expansion.js.map
