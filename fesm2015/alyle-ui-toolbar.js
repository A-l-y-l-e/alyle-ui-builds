import { __decorate, __metadata } from 'tslib';
import { isDevMode, Input, Directive, Renderer2, ElementRef, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, toBoolean, getLyThemeVariableUndefinedError, LyTheme2, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

const STYLE_PRIORITY = -2;
const DEFAULT_POSITION = 'fixed';
const DEFAULT_BG = 'background:tertiary';
const styles = (theme) => ({
    root: {
        padding: '0 16px',
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        height: '64px',
        zIndex: theme.zIndex.toolbar,
        [theme.getBreakpoint('XSmall')]: {
            height: '56px'
        },
        '&': theme.toolbar ? theme.toolbar.root : null
    },
    dense: {
        height: '56px'
    }
});
const ɵ0 = styles;
/** @docs-private */
class LyToolbarBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
let LyToolbar = class LyToolbar extends LyToolbarMixinBase {
    constructor(_renderer, _el, theme) {
        super(theme);
        this._renderer = _renderer;
        this._el = _el;
        this.theme = theme;
        /**
         * Styles
         * @docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
    set dense(val) {
        const newVal = toBoolean(val);
        if (isDevMode() && newVal !== this.dense) {
            console.warn(this._el.nativeElement, `LyToolbar.appearance: \`dense\` is deprecated, instead use \`appearance="dense"\``);
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this.classes.dense);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.dense);
            }
        }
    }
    get dense() {
        return this._dense;
    }
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle(`LyToolbar.appearance:${val}`, (theme) => {
                if (!theme.toolbar) {
                    throw getLyThemeVariableUndefinedError('toolbar');
                }
                if (!(theme.toolbar.appearance && theme.toolbar.appearance[val])) {
                    throw new Error(`Value toolbar.appearance['${val}'] not found in ThemeVariables`);
                }
                return theme.toolbar.appearance[val];
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
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
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyToolbar.prototype, "position", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyToolbar.prototype, "dense", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
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
        ]
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        LyTheme2])
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

export { LyToolbar, LyToolbarBase, LyToolbarMixinBase, LyToolbarModule, ɵ0 };
//# sourceMappingURL=alyle-ui-toolbar.js.map
