import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, OnDestroy, OnInit, ViewChild, AfterViewInit, OnChanges, InjectionToken, Inject, Optional } from '@angular/core';
import { Platform, toBoolean, LyTheme2, ThemeVariables, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState, getLyThemeVariableUndefinedError, StyleTemplate, LyClasses, st2c, LY_COMMON_STYLES, ThemeRef, StyleCollection, LyHostClass } from '@alyle/ui';
import { Color } from '@alyle/ui/color';
var DEFAULT_DISABLE_RIPPLE = false;
var DEFAULT_SIZE = 'medium';
var STYLE_PRIORITY = -2;
export var LY_BUTTON_DEFAULT_OPTIONS = new InjectionToken('LY_BUTTON_DEFAULT_OPTIONS');
export var STYLES = function (theme, ref) {
    var typography = theme.typography;
    var button = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyButton.и,
        root: function () { return function (className) { return className + "{font-family:" + typography.fontFamily + ";color:" + theme.text.default + ";-webkit-tap-highlight-color:transparent;background-color:" + new Color(0, 0, 0, 0) + ";border:0;padding:0 1em;-moz-appearance:none;margin:0;border-radius:3px;outline:none;font-weight:500;box-sizing:border-box;position:relative;justify-content:center;align-items:center;align-content:center;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration-line:none;-webkit-text-decoration-line:none;font-size:" + theme.pxToRem(14) + ";}" + st2c(((theme.button
            && theme.button.root
            && (theme.button.root instanceof StyleCollection
                ? theme.button.root.setTransformer(function (fn) { return fn(button); }).css
                : theme.button.root(button)))), "" + className) + className + "::-moz-focus-inner{border:0;}" + className + "::before{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}" + st2c((LY_COMMON_STYLES.fill), className + "::before") + className + button.onFocusByKeyboard + "::before," + className + ":hover::before{background:currentColor;opacity:.13;border-radius:inherit;}"; }; },
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
export { LyButtonBase };
/** @docs-private */
export var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
var LyButton = /** @class */ (function (_super) {
    tslib_1.__extends(LyButton, _super);
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
    tslib_1.__decorate([
        ViewChild('rippleContainer', { static: false })
    ], LyButton.prototype, "_rippleContainer", void 0);
    tslib_1.__decorate([
        Input('sensitive')
    ], LyButton.prototype, "rippleSensitive", null);
    tslib_1.__decorate([
        Input()
    ], LyButton.prototype, "size", null);
    tslib_1.__decorate([
        Input()
    ], LyButton.prototype, "appearance", null);
    LyButton = LyButton_1 = tslib_1.__decorate([
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
        tslib_1.__param(7, Optional()), tslib_1.__param(7, Inject(LY_BUTTON_DEFAULT_OPTIONS))
    ], LyButton);
    return LyButton;
}(LyButtonMixinBase));
export { LyButton };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixTQUFTLEVBQ1QsY0FBYyxFQUNkLE1BQU0sRUFDTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsWUFBWSxFQUNaLGdDQUFnQyxFQUNoQyxhQUFhLEVBQ2IsU0FBUyxFQUNULElBQUksRUFDSixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGVBQWUsRUFDZixXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBNkJ4QyxJQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQztBQUNyQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDOUIsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDLEVBQUUsR0FBYTtJQUM3RSxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FB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QUFDLFdBQVcsQ0FBQztZQUN4QixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBb0ZHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7T0FuRnJDLFFBQVEsQ0F3SnBCO0lBQUQsZUFBQztDQUFBLEFBeEpELENBQThCLGlCQUFpQixHQXdKOUM7U0F4SlksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5CZyxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5Q2xhc3NlcyxcbiAgc3QyYyxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgVGhlbWVSZWYsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlIb3N0Q2xhc3MgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5QnV0dG9uVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBCdXR0b24gQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICBhcHBlYXJhbmNlPzoge1xuICAgIGljb24/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlXG4gICAgZmFiPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZVxuICAgIG1pbmlGYWI/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlXG4gICAgW25hbWU6IHN0cmluZ106ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZFxuICB9O1xuICBzaXplPzoge1xuICAgIHNtYWxsPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZVxuICAgIG1lZGl1bT86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgICBsYXJnZT86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgICBbbmFtZTogc3RyaW5nXTogKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpIHwgdW5kZWZpbmVkXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlCdXR0b25EZWZhdWx0T3B0aW9ucyB7XG4gIHNpemU/OiBzdHJpbmc7XG4gIGFwcGVhcmFuY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlCdXR0b25WYXJpYWJsZXMge1xuICBidXR0b24/OiBMeUJ1dHRvblRoZW1lO1xufVxuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5leHBvcnQgY29uc3QgTFlfQlVUVE9OX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEx5QnV0dG9uRGVmYXVsdE9wdGlvbnM+KCdMWV9CVVRUT05fREVGQVVMVF9PUFRJT05TJyk7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlCdXR0b25WYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IGJ1dHRvbiA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJG5hbWU6IEx5QnV0dG9uLtC4LFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtmb250LWZhbWlseToke3R5cG9ncmFwaHkuZm9udEZhbWlseX07Y29sb3I6JHt0aGVtZS50ZXh0LmRlZmF1bHR9Oy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOiR7bmV3IENvbG9yKDAsIDAsIDAsIDApfTtib3JkZXI6MDtwYWRkaW5nOjAgMWVtOy1tb3otYXBwZWFyYW5jZTpub25lO21hcmdpbjowO2JvcmRlci1yYWRpdXM6M3B4O291dGxpbmU6bm9uZTtmb250LXdlaWdodDo1MDA7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oMTQpfTt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuYnV0dG9uXG4gICAgICAgICAgICAmJiB0aGVtZS5idXR0b24ucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmJ1dHRvbi5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuYnV0dG9uLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oYnV0dG9uKSkuY3NzXG4gICAgICAgICAgICAgIDogdGhlbWUuYnV0dG9uLnJvb3QoYnV0dG9uKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDt9JHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7fSR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YmVmb3JlYCl9JHtjbGFzc05hbWV9JHtidXR0b24ub25Gb2N1c0J5S2V5Ym9hcmR9OjpiZWZvcmUsJHtjbGFzc05hbWV9OmhvdmVyOjpiZWZvcmV7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7b3BhY2l0eTouMTM7Ym9yZGVyLXJhZGl1czppbmhlcml0O31gLFxuICAgIGNvbnRlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwYWRkaW5nOjA7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7YWxpZ24tY29udGVudDppbmhlcml0O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O31gLFxuICAgIC8qKiBXaGVuIGZvY3VzIGJ5IGtleWJvYXJkICovXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgYW5pbWF0aW9uczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OmhvdmVyLCR7Y2xhc3NOYW1lfTpob3Zlcjo6YmVmb3JlLCR7Y2xhc3NOYW1lfTpmb2N1cywke2NsYXNzTmFtZX06Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uOmJhY2tncm91bmQgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcywgYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXM7fWBcbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlCdXR0b25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5QnV0dG9uQmFzZSkpKSkpKSkpKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktYnV0dG9uXSwgYVtseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIHByb3ZpZGVyczogW0x5SG9zdENsYXNzXSxcbiAgZXhwb3J0QXM6ICdseUJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gZXh0ZW5kcyBMeUJ1dHRvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlCdXR0b24nO1xuICAvKipcbiAgICogU3R5bGVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZy5zZW5zaXRpdmUgPSBuZXdWYWw7XG4gIH1cblxuICAvKiogQnV0dG9uIHNpemUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBzZXQgc2l6ZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoXG4gICAgICAgIGAke0x5QnV0dG9uLtC4fS0tJHt2YWx9LXNpemVgLFxuICAgICAgICAodGhlbWU6IEx5QnV0dG9uVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gICAgICAgICAgaWYgKHRoZW1lLmJ1dHRvbiAmJiB0aGVtZS5idXR0b24uc2l6ZSAmJiB0aGVtZS5idXR0b24uc2l6ZVt2YWxdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlbWUuYnV0dG9uLnNpemVbdmFsXSEocmVmLnNlbGVjdG9yc09mKFNUWUxFUykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGJ1dHRvbi5zaXplWycke3ZhbH0nXSBub3QgZm91bmQgaW4gVGhlbWVWYXJpYWJsZXNgKTtcbiAgICAgICAgfSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl9ob3N0Q2xhc3MudXBkYXRlKG5ld0NsYXNzLCB0aGlzLl9zaXplQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBCdXR0b24gYXBwZWFyYW5jZSAqL1xuICBASW5wdXQoKVxuICBnZXQgYXBwZWFyYW5jZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTsgfVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgaWYgKHZhbCA9PT0gJ2ljb24nICYmICF0aGlzLl9yaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlQ29uZmlnLmNlbnRlcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKFxuICAgICAgICBgJHtMeUJ1dHRvbi7QuH0tLSR7dmFsfS1hcHBlYXJhbmNlYCxcbiAgICAgICAgKHRoZW1lOiBMeUJ1dHRvblZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgICAgIGlmICghKHRoZW1lLmJ1dHRvbiEuYXBwZWFyYW5jZSAmJiB0aGVtZS5idXR0b24hLmFwcGVhcmFuY2UhW3ZhbF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGJ1dHRvbi5hcHBlYXJhbmNlWycke3ZhbH0nXSBub3QgZm91bmQgaW4gVGhlbWVWYXJpYWJsZXNgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoZW1lLmJ1dHRvbiEuYXBwZWFyYW5jZSFbdmFsXSEocmVmLnNlbGVjdG9yc09mKFNUWUxFUykpO1xuICAgICAgICB9LFxuICAgICAgU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX2hvc3RDbGFzcy51cGRhdGUobmV3Q2xhc3MsIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IGhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9lbDogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxBbmNob3JFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3MsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9CVVRUT05fREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIF9kZWZhdWx0Q29uZmlnOiBMeUJ1dHRvbkRlZmF1bHRPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgX25nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgICBpZiAoUGxhdGZvcm0uRklSRUZPWCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZSgnYnV0dG9uLWZmJywgKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjotbW96LWZvY3VzLWlubmVyLCR7Y2xhc3NOYW1lfTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDt9YCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgICBpZiAoIShfdGhlbWUudmFyaWFibGVzIGFzIEx5QnV0dG9uVmFyaWFibGVzKS5idXR0b24pIHtcbiAgICAgIHRocm93IGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yKCdidXR0b24nKTtcbiAgICB9XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGJ1dHRvbiB9ID0gKHRoaXMuX3RoZW1lLnZhcmlhYmxlcyBhcyBMeUJ1dHRvblZhcmlhYmxlcyk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgICBpZiAodGhpcy5zaXplID09IG51bGwgJiYgdGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCBjb25maWdcbiAgICAgICAgdGhpcy5zaXplID0gKHRoaXMuX2RlZmF1bHRDb25maWcgJiYgdGhpcy5fZGVmYXVsdENvbmZpZy5zaXplISlcbiAgICAgICAgICB8fCBERUZBVUxUX1NJWkU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5fZGVmYXVsdENvbmZpZyAmJiB0aGlzLl9kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IHRoaXMuX2RlZmF1bHRDb25maWcuYXBwZWFyYW5jZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cbiJdfQ==