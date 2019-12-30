import { __decorate } from 'tslib';
import { Renderer2, ElementRef, Input, Directive, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

const STYLE_PRIORITY = -2;
const DEFAULT_POSITION = 'fixed';
const DEFAULT_BG = 'background:tertiary';
const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{padding:0 16px;display:flex;box-sizing:border-box;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:64px;z-index:${theme.zIndex.toolbar};}${styleTemplateToString(((theme.toolbar
            && theme.toolbar.root
            && (theme.toolbar.root instanceof StyleCollection
                ? theme.toolbar.root.setTransformer(fn => fn(__)).css
                : theme.toolbar.root(__)))), `${className}`)}${className} ${theme.getBreakpoint('XSmall')}{height:56px;}`
    };
};
/** @docs-private */
class LyToolbarBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
let LyToolbar = class LyToolbar extends LyToolbarMixinBase {
    constructor(_renderer, _el, theme, _sr) {
        super(theme);
        this._el = _el;
        this.theme = theme;
        this._sr = _sr;
        /**
         * Styles
         * @docs-private
         */
        this.classes = this.theme.renderStyleSheet(STYLES);
        this.setAutoContrast();
        _renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    set position(val) {
        this._position = val;
        this._positionClass = this.theme.addStyle(`lyToolbar.position:${val}`, `position:${val}`, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
    }
    get position() {
        return this._position;
    }
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            this._appearanceClass = this._sr.add(`LyToolbar.appearance:${val}`, (theme, ref) => {
                const classes = ref.selectorsOf(STYLES);
                if (theme.toolbar && theme.toolbar.appearance) {
                    const appearance = theme.toolbar.appearance[val];
                    if (appearance) {
                        return appearance instanceof StyleCollection
                            ? appearance.setTransformer((_) => _(classes)).css
                            : appearance(classes);
                    }
                }
                throw new Error(`${val} not found in theme.field.appearance`);
            }, STYLE_PRIORITY, this._appearanceClass);
        }
    }
    get appearance() {
        return this._appearance;
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    ngOnInit() {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    }
};
LyToolbar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: StyleRenderer }
];
__decorate([
    Input()
], LyToolbar.prototype, "position", null);
__decorate([
    Input()
], LyToolbar.prototype, "appearance", null);
LyToolbar = __decorate([
    Directive({
        selector: 'ly-toolbar',
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor'
        ],
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    })
], LyToolbar);

let LyToolbarModule = class LyToolbarModule {
};
LyToolbarModule = __decorate([
    NgModule({
        imports: [CommonModule, LyCommonModule],
        exports: [LyToolbar, LyCommonModule],
        declarations: [LyToolbar]
    })
], LyToolbarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyToolbar, LyToolbarBase, LyToolbarMixinBase, LyToolbarModule, STYLES };
//# sourceMappingURL=alyle-ui-toolbar.js.map
