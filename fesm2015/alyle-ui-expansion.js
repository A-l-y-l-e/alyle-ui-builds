import { __decorate, __metadata, __param } from 'tslib';
import { Input, Directive, Renderer2, ElementRef, TemplateRef, EventEmitter, ContentChild, Output, Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef, NgModule } from '@angular/core';
import { toBoolean, getLyThemeVariableUndefinedError, LyTheme2, mixinStyleUpdater, mixinBg, mixinColor, mixinElevation, mixinShadowColor, LyExpansionIconModule, NgTranscludeModule } from '@alyle/ui';
import { Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { distinctUntilChanged, startWith, filter, first } from 'rxjs/operators';

const STYLE_PRIORITY = -0.9;
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
        },
    },
    root: {
        '&': theme.expansion ? theme.expansion.root : null
    },
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
        this._appearanceClass = this._theme.addStyle(`lyAccordion.appearance:${val}`, (theme) => {
            if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            return theme.expansion.appearance[val];
        }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
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
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyAccordion.prototype, "appearance", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyAccordion.prototype, "multiple", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyAccordion.prototype, "hasToggle", null);
LyAccordion = __decorate([
    Directive({
        selector: 'ly-accordion',
        exportAs: 'lyAccordion'
    }),
    __metadata("design:paramtypes", [LyTheme2,
        Renderer2,
        ElementRef])
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
LyExpansionPanelContent = __decorate([
    Directive({
        selector: 'ng-template[lyExpansionPanelContent]'
    }),
    __metadata("design:paramtypes", [TemplateRef])
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
__decorate([
    ContentChild(LyExpansionPanelContent, { static: false }),
    __metadata("design:type", LyExpansionPanelContent)
], LyExpansionPanel.prototype, "_lazyContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "closed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "opened", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "afterCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "afterExpand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "destroyed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyExpansionPanel.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyExpansionPanel.prototype, "expanded", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
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
    __param(4, Inject(LyAccordion)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ChangeDetectorRef,
        LyTheme2,
        LyAccordion])
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
LyExpansionPanelHeader = __decorate([
    Component({
        selector: 'ly-expansion-panel-header',
        template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
        host: {
            '(click)': '_expansionPanel.toggle()'
        }
    }),
    __param(2, Inject(LyAccordion)),
    __param(3, Inject(LyExpansionPanel)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyAccordion,
        LyExpansionPanel])
], LyExpansionPanelHeader);

let LyExpansionPanelTitle = class LyExpansionPanelTitle {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
};
LyExpansionPanelTitle = __decorate([
    Directive({
        selector: 'ly-panel-title'
    }),
    __param(2, Inject(LyAccordion)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyAccordion])
], LyExpansionPanelTitle);

let LyExpansionPanelDescription = class LyExpansionPanelDescription {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
};
LyExpansionPanelDescription = __decorate([
    Directive({
        selector: 'ly-panel-description'
    }),
    __param(2, Inject(LyAccordion)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyAccordion])
], LyExpansionPanelDescription);

let LyExpansionPanelAction = class LyExpansionPanelAction {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
};
LyExpansionPanelAction = __decorate([
    Directive({
        selector: 'ly-action-row'
    }),
    __param(2, Inject(LyAccordion)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyAccordion])
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

export { LyAccordion, LyButtonMixinBase, LyExpansionModule, LyExpansionPanel, LyExpansionPanelBase, LyExpansionPanelContent, LyExpansionPanelDescription, LyExpansionPanelHeader, LyExpansionPanelTitle, STYLES, lyExpansionAnimations as ɵa, LyExpansionPanelAction as ɵb };
//# sourceMappingURL=alyle-ui-expansion.js.map
