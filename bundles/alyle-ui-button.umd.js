(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/button', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.button = {}), global.ng.core, global.ly.core));
}(this, function (exports, core, ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var STYLES = function (theme) {
        var _a;
        var typography = theme.typography;
        var _styles = ({
            root: {
                fontFamily: typography.fontFamily,
                color: theme.text.default,
                '-webkit-tap-highlight-color': 'transparent',
                backgroundColor: "rgba(0, 0, 0, 0)",
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
                '&::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }),
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
            animations: (_a = {},
                _a[['&:hover',
                    '&:hover::after',
                    '&:focus',
                    '&:focus::after',
                    '{onFocusByKeyboard}'].join()] = {
                    transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms',
                },
                _a)
        });
        return _styles;
    };

    var DEFAULT_DISABLE_RIPPLE = false;
    var STYLE_PRIORITY = -2;
    /** @docs-private */
    var LyButtonBase = /** @class */ (function () {
        function LyButtonBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyButtonBase;
    }());
    /** @docs-private */
    var LyButtonMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyButtonBase)))))))));
    var LyButton = /** @class */ (function (_super) {
        __extends(LyButton, _super);
        function LyButton(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
            var _this = _super.call(this, _theme, _ngZone) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._rippleService = _rippleService;
            _this._focusState = _focusState;
            /**
             * Style
             * @docs-private
             */
            _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            _this._rippleSensitive = false;
            _this.setAutoContrast();
            _this._triggerElement = _el;
            if (ui.Platform.FIREFOX) {
                _this._theme.addStyle('button-ff', {
                    '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                        border: 0
                    }
                }, _this._el.nativeElement, undefined, STYLE_PRIORITY);
            }
            _this._renderer.addClass(_this._el.nativeElement, _this.classes.animations);
            if (!_theme.variables.button) {
                throw ui.getLyThemeVariableUndefinedError('button');
            }
            return _this;
        }
        Object.defineProperty(LyButton.prototype, "rippleSensitive", {
            /** @docs-private */
            get: function () {
                return this._rippleSensitive;
            },
            set: function (value) {
                var newVal = this._rippleSensitive = ui.toBoolean(value);
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
                    this._sizeClass = this._theme.addStyle("lyButton.size:" + val, function (theme) {
                        if (theme.button && theme.button.size && theme.button.size[val]) {
                            return theme.button.size[val];
                        }
                        throw new Error("Value button.size['" + val + "'] not found in ThemeVariables");
                    }, this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
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
                    this._appearanceClass = this._theme.addStyle("lyButton.appearance:" + val, function (theme) {
                        if (!(theme.button.appearance && theme.button.appearance[val])) {
                            throw new Error("Value button.appearance['" + val + "'] not found in ThemeVariables");
                        }
                        return theme.button.appearance[val];
                    }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
                }
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
        };
        LyButton.prototype.ngAfterViewInit = function () {
            // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
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
        __decorate([
            core.ViewChild('rippleContainer', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyButton.prototype, "_rippleContainer", void 0);
        __decorate([
            core.Input('sensitive'),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyButton.prototype, "rippleSensitive", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyButton.prototype, "size", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyButton.prototype, "appearance", null);
        LyButton = __decorate([
            core.Component({
                selector: 'button[ly-button], a[ly-button]',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
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
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                ui.LyTheme2,
                core.NgZone,
                ui.LyRippleService,
                ui.LyFocusState])
        ], LyButton);
        return LyButton;
    }(LyButtonMixinBase));

    var LyButtonModule = /** @class */ (function () {
        function LyButtonModule() {
        }
        LyButtonModule = __decorate([
            core.NgModule({
                exports: [ui.LyCommonModule, LyButton],
                declarations: [LyButton]
            })
        ], LyButtonModule);
        return LyButtonModule;
    }());

    exports.LyButton = LyButton;
    exports.LyButtonBase = LyButtonBase;
    exports.LyButtonMixinBase = LyButtonMixinBase;
    exports.LyButtonModule = LyButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-button.umd.js.map
