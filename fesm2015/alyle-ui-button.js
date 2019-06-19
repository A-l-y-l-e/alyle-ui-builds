import { __decorate, __metadata } from 'tslib';
import { ViewChild, ElementRef, Input, Component, ChangeDetectionStrategy, Renderer2, NgZone, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, Platform, getLyThemeVariableUndefinedError, toBoolean, LyTheme2, LyRippleService, LyFocusState, LyCommonModule } from '@alyle/ui';

const STYLES = (theme) => {
    const typography = theme.typography;
    const _styles = ({
        root: {
            fontFamily: typography.fontFamily,
            color: theme.text.default,
            '-webkit-tap-highlight-color': 'transparent',
            backgroundColor: `rgba(0, 0, 0, 0)`,
            border: 0,
            padding: '0 1em',
            '-moz-appearance': 'none',
            margin: 0,
            borderRadius: '3px',
            outline: 'none',
            fontWeight: 500,
            boxSizing: 'border-box',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            display: 'inline-flex',
            cursor: 'pointer',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            userSelect: 'none',
            textDecorationLine: 'none',
            '-webkit-text-decoration-line': 'none',
            fontSize: theme.pxToRem(14),
            '&::-moz-focus-inner': {
                border: 0
            },
            '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }),
            '&{onFocusByKeyboard}::after, &:hover::after': {
                background: 'currentColor',
                opacity: .13,
                borderRadius: 'inherit'
            },
            '&': theme.button ? theme.button.root : null
        },
        content: {
            padding: 0,
            display: 'flex',
            justifyContent: 'inherit',
            alignItems: 'inherit',
            alignContent: 'inherit',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box'
        },
        onFocusByKeyboard: null,
        animations: {
            [['&:hover',
                '&:hover::after',
                '&:focus',
                '&:focus::after',
                '{onFocusByKeyboard}'].join()]: {
                transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms',
            }
        }
    });
    return _styles;
};

const DEFAULT_DISABLE_RIPPLE = false;
const STYLE_PRIORITY = -2;
/** @docs-private */
class LyButtonBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
let LyButton = class LyButton extends LyButtonMixinBase {
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        super(_theme, _ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this._rippleService = _rippleService;
        this._focusState = _focusState;
        /**
         * Style
         * @docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        this._rippleSensitive = false;
        this.setAutoContrast();
        this._triggerElement = _el;
        if (Platform.FIREFOX) {
            this._theme.addStyle('button-ff', {
                '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                    border: 0
                }
            }, this._el.nativeElement, undefined, STYLE_PRIORITY);
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        if (!_theme.variables.button) {
            throw getLyThemeVariableUndefinedError('button');
        }
    }
    /** @docs-private */
    get rippleSensitive() {
        return this._rippleSensitive;
    }
    set rippleSensitive(value) {
        const newVal = this._rippleSensitive = toBoolean(value);
        this._rippleConfig.sensitive = newVal;
    }
    /** Button size */
    get size() {
        return this._size;
    }
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this._theme.addStyle(`lyButton.size:${val}`, (theme) => {
                if (theme.button && theme.button.size && theme.button.size[val]) {
                    return theme.button.size[val];
                }
                throw new Error(`Value button.size['${val}'] not found in ThemeVariables`);
            }, this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
        }
    }
    /** Button appearance */
    get appearance() { return this._appearance; }
    set appearance(val) {
        if (val !== this.appearance) {
            if (val === 'icon' && !this._rippleConfig.centered) {
                this._rippleConfig.centered = true;
            }
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle(`lyButton.appearance:${val}`, (theme) => {
                if (!(theme.button.appearance && theme.button.appearance[val])) {
                    throw new Error(`Value button.appearance['${val}'] not found in ThemeVariables`);
                }
                return theme.button.appearance[val];
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
        }
    }
    ngOnChanges() {
        this.updateStyle(this._el);
        const isDisabled = this.disabled;
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    }
    ngOnInit() {
        const { button } = this._theme.variables;
        if (button) {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // Apply default config
            if (this.size == null && this.appearance == null) {
                this.size = button.defaultConfig.size;
            }
            else {
                if (button.defaultConfig && button.defaultConfig.appearance) {
                    if (this.appearance == null) {
                        this.appearance = button.defaultConfig.appearance;
                    }
                }
            }
        }
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    ngAfterViewInit() {
        // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        const focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe((event) => {
                if (this._onFocusByKeyboardState === true) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    this._onFocusByKeyboardState = false;
                }
                if (event === 'keyboard') {
                    this._onFocusByKeyboardState = true;
                    this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                }
            });
        }
    }
    focus() {
        this._el.nativeElement.focus();
    }
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    }
};
__decorate([
    ViewChild('rippleContainer', { static: false }),
    __metadata("design:type", ElementRef)
], LyButton.prototype, "_rippleContainer", void 0);
__decorate([
    Input('sensitive'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyButton.prototype, "rippleSensitive", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyButton.prototype, "size", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyButton.prototype, "appearance", null);
LyButton = __decorate([
    Component({
        selector: 'button[ly-button], a[ly-button]',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<span [className]=\"classes.content\">\n  <ng-content></ng-content>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
        inputs: [
            'bg',
            'color',
            'raised',
            'disabled',
            'outlined',
            'elevation',
            'shadowColor',
            'disableRipple'
        ]
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyTheme2,
        NgZone,
        LyRippleService,
        LyFocusState])
], LyButton);

let LyButtonModule = class LyButtonModule {
};
LyButtonModule = __decorate([
    NgModule({
        exports: [LyCommonModule, LyButton],
        declarations: [LyButton]
    })
], LyButtonModule);

export { LyButton, LyButtonBase, LyButtonMixinBase, LyButtonModule };
//# sourceMappingURL=alyle-ui-button.js.map
