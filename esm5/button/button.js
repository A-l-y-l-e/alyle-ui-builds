import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, OnDestroy, OnInit, ViewChild, AfterViewInit, OnChanges, InjectionToken, Inject, Optional } from '@angular/core';
import { Platform, toBoolean, LyTheme2, ThemeVariables, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState, getLyThemeVariableUndefinedError, StyleTemplate, LyClasses, styleTemplateToString, LY_COMMON_STYLES, ThemeRef, StyleCollection, LyHostClass } from '@alyle/ui';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixTQUFTLEVBQ1QsY0FBYyxFQUNkLE1BQU0sRUFDTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsWUFBWSxFQUNaLGdDQUFnQyxFQUNoQyxhQUFhLEVBQ2IsU0FBUyxFQUNULHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGVBQWUsRUFDZixXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBNkJ4QyxJQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQztBQUNyQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDOUIsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDLEVBQUUsR0FBYTtJQUM3RSxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQU0sTUFBTSxHQUFHLEdBQUcs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LEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDeEIsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQztRQW9GRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO09BbkZyQyxRQUFRLENBd0pwQjtJQUFELGVBQUM7Q0FBQSxBQXhKRCxDQUE4QixpQkFBaUIsR0F3SjlDO1NBeEpZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdCxcbiAgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluQ29sb3IsXG4gIG1peGluQmcsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeUZvY3VzU3RhdGUsXG4gIGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yLFxuICBTdHlsZVRlbXBsYXRlLFxuICBMeUNsYXNzZXMsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgVGhlbWVSZWYsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlIb3N0Q2xhc3MgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5QnV0dG9uVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBCdXR0b24gQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICBhcHBlYXJhbmNlPzoge1xuICAgIGljb24/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlXG4gICAgZmFiPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZVxuICAgIG1pbmlGYWI/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlXG4gICAgW25hbWU6IHN0cmluZ106ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZFxuICB9O1xuICBzaXplPzoge1xuICAgIHNtYWxsPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZVxuICAgIG1lZGl1bT86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgICBsYXJnZT86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgICBbbmFtZTogc3RyaW5nXTogKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpIHwgdW5kZWZpbmVkXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlCdXR0b25EZWZhdWx0T3B0aW9ucyB7XG4gIHNpemU/OiBzdHJpbmc7XG4gIGFwcGVhcmFuY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlCdXR0b25WYXJpYWJsZXMge1xuICBidXR0b24/OiBMeUJ1dHRvblRoZW1lO1xufVxuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5leHBvcnQgY29uc3QgTFlfQlVUVE9OX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEx5QnV0dG9uRGVmYXVsdE9wdGlvbnM+KCdMWV9CVVRUT05fREVGQVVMVF9PUFRJT05TJyk7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlCdXR0b25WYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IGJ1dHRvbiA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJG5hbWU6IEx5QnV0dG9uLtC4LFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtmb250LWZhbWlseToke3R5cG9ncmFwaHkuZm9udEZhbWlseX07Y29sb3I6JHt0aGVtZS50ZXh0LmRlZmF1bHR9Oy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOiR7bmV3IENvbG9yKDAsIDAsIDAsIDApfTtib3JkZXI6MDtwYWRkaW5nOjAgMWVtOy1tb3otYXBwZWFyYW5jZTpub25lO21hcmdpbjowO2JvcmRlci1yYWRpdXM6M3B4O291dGxpbmU6bm9uZTtmb250LXdlaWdodDo1MDA7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oMTQpfTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5idXR0b25cbiAgICAgICAgICAgICYmIHRoZW1lLmJ1dHRvbi5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuYnV0dG9uLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5idXR0b24ucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihidXR0b24pKS5jc3NcbiAgICAgICAgICAgICAgOiB0aGVtZS5idXR0b24ucm9vdChidXR0b24pKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9OjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowO30ke2NsYXNzTmFtZX06OmJlZm9yZXtjb250ZW50OicnO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06OmJlZm9yZWApfSR7Y2xhc3NOYW1lfSR7YnV0dG9uLm9uRm9jdXNCeUtleWJvYXJkfTo6YmVmb3JlLCR7Y2xhc3NOYW1lfTpob3Zlcjo6YmVmb3Jle2JhY2tncm91bmQ6Y3VycmVudENvbG9yO29wYWNpdHk6LjEzO2JvcmRlci1yYWRpdXM6aW5oZXJpdDt9YCxcbiAgICBjb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cGFkZGluZzowO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0O2FsaWduLWNvbnRlbnQ6aW5oZXJpdDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgICAvKiogV2hlbiBmb2N1cyBieSBrZXlib2FyZCAqL1xuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGFuaW1hdGlvbnM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfTpob3Zlciwke2NsYXNzTmFtZX06aG92ZXI6OmJlZm9yZSwke2NsYXNzTmFtZX06Zm9jdXMsJHtjbGFzc05hbWV9OmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDM3NW1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXMsIGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSkgMG1zO31gXG4gIH07XG59O1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QnV0dG9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUJ1dHRvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUJ1dHRvbkJhc2UpKSkpKSkpKSk7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LWJ1dHRvbl0sIGFbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBwcm92aWRlcnM6IFtMeUhvc3RDbGFzc10sXG4gIGV4cG9ydEFzOiAnbHlCdXR0b24nXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGV4dGVuZHMgTHlCdXR0b25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5QnV0dG9uJztcbiAgLyoqXG4gICAqIFN0eWxlXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcuc2Vuc2l0aXZlID0gbmV3VmFsO1xuICB9XG5cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKFxuICAgICAgICBgJHtMeUJ1dHRvbi7QuH0tLSR7dmFsfS1zaXplYCxcbiAgICAgICAgKHRoZW1lOiBMeUJ1dHRvblZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgICAgIGlmICh0aGVtZS5idXR0b24gJiYgdGhlbWUuYnV0dG9uLnNpemUgJiYgdGhlbWUuYnV0dG9uLnNpemVbdmFsXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZW1lLmJ1dHRvbi5zaXplW3ZhbF0hKHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBidXR0b24uc2l6ZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgIH0sXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpcy5fc2l6ZUNsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKiogQnV0dG9uIGFwcGVhcmFuY2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7IH1cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIGlmICh2YWwgPT09ICdpY29uJyAmJiAhdGhpcy5fcmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZUNvbmZpZy5jZW50ZXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShcbiAgICAgICAgYCR7THlCdXR0b24u0Lh9LS0ke3ZhbH0tYXBwZWFyYW5jZWAsXG4gICAgICAgICh0aGVtZTogTHlCdXR0b25WYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgICAgICBpZiAoISh0aGVtZS5idXR0b24hLmFwcGVhcmFuY2UgJiYgdGhlbWUuYnV0dG9uIS5hcHBlYXJhbmNlIVt2YWxdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBidXR0b24uYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGVtZS5idXR0b24hLmFwcGVhcmFuY2UhW3ZhbF0hKHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpKTtcbiAgICAgICAgfSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl9ob3N0Q2xhc3MudXBkYXRlKG5ld0NsYXNzLCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBob3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfZWw6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9ob3N0Q2xhc3M6IEx5SG9zdENsYXNzLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfQlVUVE9OX0RFRkFVTFRfT1BUSU9OUykgcHJpdmF0ZSBfZGVmYXVsdENvbmZpZzogTHlCdXR0b25EZWZhdWx0T3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIF9uZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gICAgaWYgKFBsYXRmb3JtLkZJUkVGT1gpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoJ2J1dHRvbi1mZicsICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfTo6LW1vei1mb2N1cy1pbm5lciwke2NsYXNzTmFtZX06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7fWAsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gICAgaWYgKCEoX3RoZW1lLnZhcmlhYmxlcyBhcyBMeUJ1dHRvblZhcmlhYmxlcykuYnV0dG9uKSB7XG4gICAgICB0aHJvdyBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvcignYnV0dG9uJyk7XG4gICAgfVxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBidXR0b24gfSA9ICh0aGlzLl90aGVtZS52YXJpYWJsZXMgYXMgTHlCdXR0b25WYXJpYWJsZXMpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgICAgaWYgKHRoaXMuc2l6ZSA9PSBudWxsICYmIHRoaXMuYXBwZWFyYW5jZSA9PSBudWxsKSB7XG4gICAgICAgIC8vIEFwcGx5IGRlZmF1bHQgY29uZmlnXG4gICAgICAgIHRoaXMuc2l6ZSA9ICh0aGlzLl9kZWZhdWx0Q29uZmlnICYmIHRoaXMuX2RlZmF1bHRDb25maWcuc2l6ZSEpXG4gICAgICAgICAgfHwgREVGQVVMVF9TSVpFO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRDb25maWcgJiYgdGhpcy5fZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYXBwZWFyYW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSB0aGlzLl9kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2VsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iXX0=