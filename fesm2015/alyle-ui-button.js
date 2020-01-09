import { __decorate, __param } from 'tslib';
import { InjectionToken, ElementRef, Renderer2, NgZone, Optional, Inject, ViewChild, Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { st2c, StyleCollection, LY_COMMON_STYLES, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, Platform, getLyThemeVariableUndefinedError, toBoolean, LyTheme2, LyRippleService, LyFocusState, LyHostClass, LyCommonModule } from '@alyle/ui';
import { Color } from '@alyle/ui/color';

var LyButton_1;
const DEFAULT_DISABLE_RIPPLE = false;
const DEFAULT_SIZE = 'medium';
const STYLE_PRIORITY = -2;
const LY_BUTTON_DEFAULT_OPTIONS = new InjectionToken('LY_BUTTON_DEFAULT_OPTIONS');
const STYLES = (theme, ref) => {
    const typography = theme.typography;
    const button = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyButton.и,
        root: () => (className) => `${className}{font-family:${typography.fontFamily};color:${theme.text.default};-webkit-tap-highlight-color:transparent;background-color:${new Color(0, 0, 0, 0)};border:0;padding:0 1em;-moz-appearance:none;margin:0;border-radius:3px;outline:none;font-weight:500;box-sizing:border-box;position:relative;justify-content:center;align-items:center;align-content:center;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration-line:none;-webkit-text-decoration-line:none;font-size:${theme.pxToRem(14)};}${st2c(((theme.button
            && theme.button.root
            && (theme.button.root instanceof StyleCollection
                ? theme.button.root.setTransformer(fn => fn(button)).css
                : theme.button.root(button)))), `${className}`)}${className}::-moz-focus-inner{border:0;}${className}::before{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}${st2c((LY_COMMON_STYLES.fill), `${className}::before`)}${className}${button.onFocusByKeyboard}::before,${className}:hover::before{background:currentColor;opacity:.13;border-radius:inherit;}`,
        content: (className) => `${className}{padding:0;display:flex;justify-content:inherit;align-items:inherit;align-content:inherit;width:100%;height:100%;box-sizing:border-box;}`,
        /** When focus by keyboard */
        onFocusByKeyboard: null,
        animations: (className) => `${className}:hover,${className}:hover::before,${className}:focus,${className}:focus::before{transition:background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms;}`
    };
};
/** @docs-private */
class LyButtonBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
let LyButton = LyButton_1 = class LyButton extends LyButtonMixinBase {
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, _defaultConfig) {
        super(_theme, _ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this._rippleService = _rippleService;
        this._focusState = _focusState;
        this._hostClass = _hostClass;
        this._defaultConfig = _defaultConfig;
        /**
         * Style
         * @docs-private
         */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this._rippleSensitive = false;
        this.setAutoContrast();
        this._triggerElement = _el;
        if (Platform.FIREFOX) {
            const newClass = this._theme.renderStyle('button-ff', () => (className) => `${className}::-moz-focus-inner,${className}::-moz-focus-inner{border:0;}`, STYLE_PRIORITY);
            _renderer.addClass(_el.nativeElement, newClass);
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
            const newClass = this._theme.renderStyle(`${LyButton_1.и}--${val}-size`, (theme, ref) => {
                if (theme.button && theme.button.size && theme.button.size[val]) {
                    return theme.button.size[val](ref.selectorsOf(STYLES));
                }
                throw new Error(`Value button.size['${val}'] not found in ThemeVariables`);
            }, STYLE_PRIORITY);
            this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
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
            const newClass = this._theme.renderStyle(`${LyButton_1.и}--${val}-appearance`, (theme, ref) => {
                if (!(theme.button.appearance && theme.button.appearance[val])) {
                    throw new Error(`Value button.appearance['${val}'] not found in ThemeVariables`);
                }
                return theme.button.appearance[val](ref.selectorsOf(STYLES));
            }, STYLE_PRIORITY + 1);
            this._appearanceClass = this._hostClass.update(newClass, this._appearanceClass);
        }
    }
    /** @docs-private */
    get hostElement() {
        return this._el.nativeElement;
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
            if (this.size == null && this.appearance == null) {
                // Apply default config
                this.size = (this._defaultConfig && this._defaultConfig.size)
                    || DEFAULT_SIZE;
            }
            else {
                if (this._defaultConfig && this._defaultConfig.appearance) {
                    if (this.appearance == null) {
                        this.appearance = this._defaultConfig.appearance;
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
LyButton.и = 'LyButton';
LyButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState },
    { type: LyHostClass },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_BUTTON_DEFAULT_OPTIONS,] }] }
];
__decorate([
    ViewChild('rippleContainer', { static: false })
], LyButton.prototype, "_rippleContainer", void 0);
__decorate([
    Input('sensitive')
], LyButton.prototype, "rippleSensitive", null);
__decorate([
    Input()
], LyButton.prototype, "size", null);
__decorate([
    Input()
], LyButton.prototype, "appearance", null);
LyButton = LyButton_1 = __decorate([
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
        ],
        providers: [LyHostClass],
        exportAs: 'lyButton'
    }),
    __param(7, Optional()), __param(7, Inject(LY_BUTTON_DEFAULT_OPTIONS))
], LyButton);

let LyButtonModule = class LyButtonModule {
};
LyButtonModule = __decorate([
    NgModule({
        exports: [LyCommonModule, LyButton],
        declarations: [LyButton]
    })
], LyButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LY_BUTTON_DEFAULT_OPTIONS, LyButton, LyButtonBase, LyButtonMixinBase, LyButtonModule, STYLES };
//# sourceMappingURL=alyle-ui-button.js.map
