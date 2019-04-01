(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/button', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.button = {}),global.ng.core,global.ly.core));
}(this, (function (exports,core,ui) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLES = function (theme) {
        /** @type {?} */
        var typography = theme.typography;
        /** @type {?} */
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
            animations: {
                '&,&::after': {
                    transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms'
                }
            }
        });
        return _styles;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_DISABLE_RIPPLE = false;
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyButtonBase = /** @class */ (function () {
        function LyButtonBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyButtonBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
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
             * \@docs-private
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
            get: /**
             * \@docs-private
             * @return {?}
             */ function () {
                return this._rippleSensitive;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newVal = this._rippleSensitive = ui.toBoolean(value);
                this._rippleConfig.sensitive = newVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "size", {
            /** Button size */
            get: /**
             * Button size
             * @return {?}
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.size) {
                    this._size = val;
                    this._sizeClass = this._theme.addStyle("lyButton.size:" + val, function (theme) {
                        if (theme.button && theme.button.size && theme.button.size[val]) {
                            return ( /** @type {?} */(theme.button.size[val]));
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
            get: /**
             * Button appearance
             * @return {?}
             */ function () { return this._appearance; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.appearance) {
                    if (val === 'icon' && !this._rippleConfig.centered) {
                        this._rippleConfig.centered = true;
                    }
                    this._appearance = val;
                    this._appearanceClass = this._theme.addStyle("lyButton.appearance:" + val, function (theme) {
                        if (!(( /** @type {?} */(theme.button)).appearance && ( /** @type {?} */(( /** @type {?} */(theme.button)).appearance))[val])) {
                            throw new Error("Value button.appearance['" + val + "'] not found in ThemeVariables");
                        }
                        return ( /** @type {?} */(( /** @type {?} */(( /** @type {?} */(theme.button)).appearance))[val]));
                    }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyButton.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
                /** @type {?} */
                var isDisabled = this.disabled;
                this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
            };
        /**
         * @return {?}
         */
        LyButton.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        LyButton.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
                var _this = this;
                // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
                /** @type {?} */
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
        /**
         * @return {?}
         */
        LyButton.prototype.focus = /**
         * @return {?}
         */
            function () {
                this._el.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        LyButton.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._focusState.unlisten(this._el);
                this._removeRippleEvents();
            };
        LyButton.decorators = [
            { type: core.Component, args: [{
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
                    }] }
        ];
        /** @nocollapse */
        LyButton.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.NgZone },
                { type: ui.LyRippleService },
                { type: ui.LyFocusState }
            ];
        };
        LyButton.propDecorators = {
            _rippleContainer: [{ type: core.ViewChild, args: ['rippleContainer',] }],
            rippleSensitive: [{ type: core.Input, args: ['sensitive',] }],
            size: [{ type: core.Input }],
            appearance: [{ type: core.Input }]
        };
        return LyButton;
    }(LyButtonMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyButtonModule = /** @class */ (function () {
        function LyButtonModule() {
        }
        LyButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [ui.LyCommonModule, LyButton],
                        declarations: [LyButton]
                    },] }
        ];
        return LyButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LyButtonBase = LyButtonBase;
    exports.LyButtonMixinBase = LyButtonMixinBase;
    exports.LyButton = LyButton;
    exports.LyButtonModule = LyButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-button.umd.js.map