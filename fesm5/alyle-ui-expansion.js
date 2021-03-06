import { __decorate, __extends, __param } from 'tslib';
import { Renderer2, ElementRef, Input, Directive, TemplateRef, EventEmitter, ChangeDetectorRef, Inject, ContentChild, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toBoolean, getLyThemeVariableUndefinedError, LyTheme2, mixinStyleUpdater, mixinBg, mixinColor, mixinElevation, mixinShadowColor, LyExpansionIconModule, NgTranscludeModule } from '@alyle/ui';
import { Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { distinctUntilChanged, startWith, filter, first } from 'rxjs/operators';

var STYLE_PRIORITY = -0.9;
var STYLES = function (theme, ref) {
    var classes = ref.selectorsOf(STYLES);
    var after = theme.after;
    return {
        $priority: STYLE_PRIORITY,
        $name: LyAccordion.и,
        $global: function () { return function (className) { return className + " " + classes.panelTitle + "," + className + " " + classes.panelDescription + "{display:flex;margin-" + after + ":16px;}" + className + " " + classes.panel + ":not(" + classes.disabled + ") " + classes.panelTitle + "{color:" + theme.text.default + ";}" + className + " " + classes.panel + ":not(" + classes.disabled + ") " + classes.panelDescription + "{color:" + theme.text.secondary + ";}"; }; },
        root: (theme.expansion && theme.expansion.root) ? function () { return theme.expansion.root(classes); } : null,
        panel: function () { return function (className) { return className + "{display:block;overflow:hidden;position:relative;}" + className + ":not(" + classes.disabled + ") " + classes.panelHeader + "{cursor:pointer;}"; }; },
        panelHeader: function () { return function (className) { return className + "{display:flex;position:relative;flex-direction:row;align-items:center;padding:0 24px;transition:height " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard + ";font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(15) + ";font-weight:400;}" + classes.panel + ":not(" + classes.expanded + "):not(" + classes.disabled + ") " + className + ":hover{background:" + theme.hover + ";}@media (hover: none){" + classes.panel + ":not(" + classes.expanded + "):not(" + classes.disabled + ") " + className + ":hover{background:none;}}"; }; },
        panelHeaderContent: function (className) { return className + "{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden;}"; },
        panelContent: function (className) { return className + "{display:flex;flex-direction:column;overflow:visible;}"; },
        panelBody: function (className) { return className + "{visibility:hidden;padding:0 24px 16px;transition:visibility " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard + ";font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(14) + ";font-weight:400;line-height:" + theme.pxToRem(20) + ";}"; },
        panelTitle: function (className) { return className + "{flex-grow:1;}"; },
        panelDescription: function (className) { return className + "{flex-grow:2;}"; },
        panelActionRow: function (className) { return className + "{border-top:1px solid " + theme.divider + ";display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;}"; },
        expanded: function () { return function (className) { return className + " " + classes.panelBody + "{visibility:visible;}"; }; },
        disabled: function (className) { return className + "{color:" + theme.disabled.contrast + ";}"; }
    };
};
var LyAccordion = /** @class */ (function () {
    function LyAccordion(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._hasToggle = true;
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new Subject();
    }
    Object.defineProperty(LyAccordion.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle("lyAccordion.appearance:" + val, function (theme, ref) {
                if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                    throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                }
                var classes = ref.selectorsOf(STYLES);
                return theme.expansion.appearance[val](classes);
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (val) {
            this._multiple = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "hasToggle", {
        get: function () {
            return this._hasToggle;
        },
        set: function (val) {
            this._hasToggle = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyAccordion.prototype.ngOnInit = function () {
        var expansion = this._theme.variables.expansion;
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
    };
    LyAccordion.prototype.closeAll = function () {
        this._openCloseAll(true);
    };
    LyAccordion.prototype.openAll = function () {
        this._openCloseAll(false);
    };
    LyAccordion.prototype._openCloseAll = function (expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    };
    /** @docs-private */
    LyAccordion.и = 'LyAccordion';
    LyAccordion.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return LyAccordion;
}());

var lyExpansionAnimations = {
    contentExpansion: trigger('contentExpansion', [
        state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed, void => collapsed', animate('{{panelAnimationTiming}}')),
    ])
};

var LyExpansionPanelContent = /** @class */ (function () {
    function LyExpansionPanelContent(_template) {
        this._template = _template;
    }
    LyExpansionPanelContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    LyExpansionPanelContent = __decorate([
        Directive({
            selector: 'ng-template[lyExpansionPanelContent]'
        })
    ], LyExpansionPanelContent);
    return LyExpansionPanelContent;
}());

/** @docs-private */
var LyExpansionPanelBase = /** @class */ (function () {
    function LyExpansionPanelBase(_theme) {
        this._theme = _theme;
    }
    return LyExpansionPanelBase;
}());
/** @docs-private */
var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
var LyExpansionPanel = /** @class */ (function (_super) {
    __extends(LyExpansionPanel, _super);
    function LyExpansionPanel(_el, _renderer, _cd, _theme, _accordion) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._cd = _cd;
        _this._accordion = _accordion;
        /** @docs-private */
        _this.classes = _this._accordion.classes;
        _this._panelAnimationTiming = _this._theme.variables.animations.durations.entering + "ms " + _this._theme.variables.animations.curves.standard;
        /** Subscription to openAll/closeAll events. */
        _this._openCloseAllSubscription = Subscription.EMPTY;
        _this._hasToggle = !!_this._accordion.hasToggle;
        /** Event emitted every time the LyExpansionPanel is closed. */
        _this.closed = new EventEmitter();
        /** Event emitted every time the LyExpansionPanel is opened. */
        _this.opened = new EventEmitter();
        /** An event emitted after the body's collapse animation happens. */
        _this.afterCollapse = new EventEmitter();
        /** An event emitted after the body's expansion animation happens. */
        _this.afterExpand = new EventEmitter();
        /** Event emitted when the LyExpansionPanel is destroyed. */
        _this.destroyed = new EventEmitter();
        /** Stream of body animation done events. */
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
        get: function () {
            return this._disabled;
        },
        set: function (val) {
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
        get: function () {
            return this._expanded;
        },
        set: function (val) {
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
        get: function () {
            return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
        },
        set: function (val) {
            this._hasToggle = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyExpansionPanel.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyExpansionPanel.prototype.ngOnInit = function () {
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
    LyExpansionPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._lazyContent) {
            this.opened.pipe(startWith(null), filter(function () { return !!_this.expanded && !_this._lazyContentRef; }), first()).subscribe(function () { return _this._lazyContentRef = _this._lazyContent._template; });
        }
    };
    LyExpansionPanel.prototype.ngOnDestroy = function () {
        this._openCloseAllSubscription.unsubscribe();
    };
    LyExpansionPanel.prototype.close = function () {
        this.expanded = false;
    };
    LyExpansionPanel.prototype.open = function () {
        this.expanded = true;
    };
    LyExpansionPanel.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    /** Gets the expanded state string. */
    LyExpansionPanel.prototype._getExpandedState = function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    LyExpansionPanel.prototype._subscribeToOpenCloseAllActions = function () {
        var _this = this;
        return this._accordion._openCloseAllActions.subscribe(function (expanded) {
            _this.expanded = expanded;
        });
    };
    LyExpansionPanel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
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
    return LyExpansionPanel;
}(LyButtonMixinBase));

var LyExpansionPanelHeader = /** @class */ (function () {
    function LyExpansionPanelHeader(el, renderer, _accordion, _expansionPanel) {
        this._accordion = _accordion;
        this._expansionPanel = _expansionPanel;
        /** @docs-private */
        this.classes = this._accordion.classes;
        renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
    }
    LyExpansionPanelHeader.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] },
        { type: LyExpansionPanel, decorators: [{ type: Inject, args: [LyExpansionPanel,] }] }
    ]; };
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
    return LyExpansionPanelHeader;
}());

var LyExpansionPanelTitle = /** @class */ (function () {
    function LyExpansionPanelTitle(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
    LyExpansionPanelTitle.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    LyExpansionPanelTitle = __decorate([
        Directive({
            selector: 'ly-panel-title'
        }),
        __param(2, Inject(LyAccordion))
    ], LyExpansionPanelTitle);
    return LyExpansionPanelTitle;
}());

var LyExpansionPanelDescription = /** @class */ (function () {
    function LyExpansionPanelDescription(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
    LyExpansionPanelDescription.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    LyExpansionPanelDescription = __decorate([
        Directive({
            selector: 'ly-panel-description'
        }),
        __param(2, Inject(LyAccordion))
    ], LyExpansionPanelDescription);
    return LyExpansionPanelDescription;
}());

var LyExpansionPanelAction = /** @class */ (function () {
    function LyExpansionPanelAction(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
    LyExpansionPanelAction.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    LyExpansionPanelAction = __decorate([
        Directive({
            selector: 'ly-action-row'
        }),
        __param(2, Inject(LyAccordion))
    ], LyExpansionPanelAction);
    return LyExpansionPanelAction;
}());

var LyExpansionModule = /** @class */ (function () {
    function LyExpansionModule() {
    }
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
    return LyExpansionModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyAccordion, LyButtonMixinBase, LyExpansionModule, LyExpansionPanel, LyExpansionPanelBase, LyExpansionPanelContent, LyExpansionPanelDescription, LyExpansionPanelHeader, LyExpansionPanelTitle, STYLES, lyExpansionAnimations as ɵa, LyExpansionPanelAction as ɵb };
//# sourceMappingURL=alyle-ui-expansion.js.map
