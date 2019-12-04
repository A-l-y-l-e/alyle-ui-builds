import { __extends, __decorate, __param } from 'tslib';
import { InjectionToken, ElementRef, Renderer2, NgZone, Optional, Inject, ViewChild, Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, LY_COMMON_STYLES, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, Platform, getLyThemeVariableUndefinedError, toBoolean, LyTheme2, LyRippleService, LyFocusState, LyHostClass, LyCommonModule } from '@alyle/ui';
import { Color } from '@alyle/ui/color';

var DEFAULT_DISABLE_RIPPLE = false;
var DEFAULT_SIZE = 'medium';
var STYLE_PRIORITY = -2;
var LY_BUTTON_DEFAULT_OPTIONS = new InjectionToken('LY_BUTTON_DEFAULT_OPTIONS');
var STYLES = function (theme, ref) {
    var typography = theme.typography;
    var button = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyButton.и,
        root: function () { return function (className) { return className + "{font-family:" + typography.fontFamily + ";color:" + theme.text.default + ";-webkit-tap-highlight-color:transparent;background-color:" + new Color(0, 0, 0, 0) + ";border:0;padding:0 1em;-moz-appearance:none;margin:0;border-radius:3px;outline:none;font-weight:500;box-sizing:border-box;position:relative;justify-content:center;align-items:center;align-content:center;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration-line:none;-webkit-text-decoration-line:none;font-size:" + theme.pxToRem(14) + ";}" + styleTemplateToString(((theme.button
            && theme.button.root
            && (theme.button.root instanceof StyleCollection
                ? theme.button.root.setTransformer(function (fn) { return fn(button); }).css
                : theme.button.root(button)))), "" + className) + className + "::-moz-focus-inner{border:0;}" + className + "::before{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}" + styleTemplateToString((LY_COMMON_STYLES.fill), className + "::before") + className + button.onFocusByKeyboard + "::before," + className + ":hover::before{background:currentColor;opacity:.13;border-radius:inherit;}"; }; },
        content: function (className) { return className + "{padding:0;display:flex;justify-content:inherit;align-items:inherit;align-content:inherit;width:100%;height:100%;box-sizing:border-box;}"; },
        /** When focus by keyboard */
        onFocusByKeyboard: null,
        animations: function (className) { return className + ":hover," + className + ":hover::before," + className + ":focus," + className + ":focus::before{transition:background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms;}"; }
    };
};
/** @docs-private */
var LyButtonBase = /** @class */ (function () {
    function LyButtonBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyButtonBase;
}());
/** @docs-private */
var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
var LyButton = /** @class */ (function (_super) {
    __extends(LyButton, _super);
    function LyButton(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, _defaultConfig) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._rippleService = _rippleService;
        _this._focusState = _focusState;
        _this._hostClass = _hostClass;
        _this._defaultConfig = _defaultConfig;
        /**
         * Style
         * @docs-private
         */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        _this._rippleSensitive = false;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        if (Platform.FIREFOX) {
            var newClass = _this._theme.renderStyle('button-ff', function () { return function (className) { return className + "::-moz-focus-inner," + className + "::-moz-focus-inner{border:0;}"; }; }, STYLE_PRIORITY);
            _renderer.addClass(_el.nativeElement, newClass);
        }
        _this._renderer.addClass(_this._el.nativeElement, _this.classes.animations);
        if (!_theme.variables.button) {
            throw getLyThemeVariableUndefinedError('button');
        }
        return _this;
    }
    LyButton_1 = LyButton;
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        /** @docs-private */
        get: function () {
            return this._rippleSensitive;
        },
        set: function (value) {
            var newVal = this._rippleSensitive = toBoolean(value);
            this._rippleConfig.sensitive = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "size", {
        /** Button size */
        get: function () {
            return this._size;
        },
        set: function (val) {
            if (val !== this.size) {
                this._size = val;
                var newClass = this._theme.renderStyle(LyButton_1.и + "--" + val + "-size", function (theme, ref) {
                    if (theme.button && theme.button.size && theme.button.size[val]) {
                        return theme.button.size[val](ref.selectorsOf(STYLES));
                    }
                    throw new Error("Value button.size['" + val + "'] not found in ThemeVariables");
                }, STYLE_PRIORITY);
                this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "appearance", {
        /** Button appearance */
        get: function () { return this._appearance; },
        set: function (val) {
            if (val !== this.appearance) {
                if (val === 'icon' && !this._rippleConfig.centered) {
                    this._rippleConfig.centered = true;
                }
                this._appearance = val;
                var newClass = this._theme.renderStyle(LyButton_1.и + "--" + val + "-appearance", function (theme, ref) {
                    if (!(theme.button.appearance && theme.button.appearance[val])) {
                        throw new Error("Value button.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    return theme.button.appearance[val](ref.selectorsOf(STYLES));
                }, STYLE_PRIORITY + 1);
                this._appearanceClass = this._hostClass.update(newClass, this._appearanceClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "hostElement", {
        /** @docs-private */
        get: function () {
            return this._el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LyButton.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
        var isDisabled = this.disabled;
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    };
    LyButton.prototype.ngOnInit = function () {
        var button = this._theme.variables.button;
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
    };
    LyButton.prototype.ngAfterViewInit = function () {
        var _this = this;
        var focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (_this._onFocusByKeyboardState === true) {
                    _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    _this._onFocusByKeyboardState = false;
                }
                if (event === 'keyboard') {
                    _this._onFocusByKeyboardState = true;
                    _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                }
            });
        }
    };
    LyButton.prototype.focus = function () {
        this._el.nativeElement.focus();
    };
    LyButton.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    };
    var LyButton_1;
    LyButton.и = 'LyButton';
    LyButton.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState },
        { type: LyHostClass },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_BUTTON_DEFAULT_OPTIONS,] }] }
    ]; };
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
    return LyButton;
}(LyButtonMixinBase));

var LyButtonModule = /** @class */ (function () {
    function LyButtonModule() {
    }
    LyButtonModule = __decorate([
        NgModule({
            exports: [LyCommonModule, LyButton],
            declarations: [LyButton]
        })
    ], LyButtonModule);
    return LyButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LY_BUTTON_DEFAULT_OPTIONS, LyButton, LyButtonBase, LyButtonMixinBase, LyButtonModule, STYLES };
//# sourceMappingURL=alyle-ui-button.js.map
