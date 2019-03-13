(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/checkbox', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.checkbox = {}),global.ng.common,global.ng.core,global.ng.forms,global.ly.core));
}(this, (function (exports,common,core,forms,ui) { 'use strict';

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
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_WITH_COLOR = 'accent';
    /** @type {?} */
    var DEFAULT_DISABLE_RIPPLE = false;
    /** @type {?} */
    var STYLES = function (theme) {
        return ({
            root: {
                marginAfter: '16px',
                marginBefore: '-16px',
                display: 'inline-flex',
                '&{disabled}:not({checked}) {icon}:before': {
                    color: theme.disabled.default
                },
                '&{disabled}': {
                    pointerEvents: 'none',
                    '{layout}': {
                        color: theme.text.secondary
                    }
                },
                '&{disabled}{checked} {icon}:before': {
                    border: 0,
                    background: theme.disabled.default
                },
                '&{onFocusByKeyboard} {icon}::after': {
                    boxShadow: '0 0 0 12px',
                    opacity: .13,
                    borderRadius: '50%'
                },
                '&:not({checked}) {icon}': __assign({}, theme.checkbox.unchecked)
            },
            layout: {
                display: 'inline-flex',
                alignItems: 'baseline',
                cursor: 'pointer',
                marginBefore: '16px',
                paddingTop: '12px',
                paddingBottom: '12px'
            },
            icon: __assign({ position: 'relative', marginAfter: '8px', marginTop: 'auto', marginBottom: 'auto', width: '16px', height: '16px', userSelect: 'none' }, theme.checkbox.root, { '&::before, &::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }), '&::before': {
                    border: 'solid 2px',
                    borderRadius: '2px'
                }, svg: {
                    position: 'absolute',
                    polyline: {
                        fill: 'none',
                        stroke: theme.background.primary.default,
                        strokeWidth: 2,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeDasharray: '18px',
                        strokeDashoffset: '18px'
                    }
                } }),
            checked: {
                '& {icon}::before': {
                    background: 'currentColor'
                },
                '& {icon} polyline': {
                    strokeDashoffset: 0
                }
            },
            input: __assign({}, ui.LY_COMMON_STYLES.visuallyHidden),
            onFocusByKeyboard: {},
            disabled: {
                '& {input}': {
                    visibility: 'hidden'
                },
                '& {icon}': {
                    color: 'inherit !important'
                }
            },
            animations: {
                '& {icon} svg polyline': {
                    transition: "all " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp
                }
            }
        });
    };
    /**
     * This allows it to support [(ngModel)].
     * @ignore
     * @type {?}
     */
    var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyCheckbox; }),
        multi: true
    };
    /**
     * Change event object emitted by LyCheckbox.
     */
    var /**
     * Change event object emitted by LyCheckbox.
     */ LyCheckboxChange = /** @class */ (function () {
        function LyCheckboxChange() {
        }
        return LyCheckboxChange;
    }());
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyCheckboxBase = /** @class */ (function () {
        function LyCheckboxBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCheckboxBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyCheckboxMixinBase = ui.mixinDisableRipple(LyCheckboxBase);
    var LyCheckbox = /** @class */ (function (_super) {
        __extends(LyCheckbox, _super);
        function LyCheckbox(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, ngZone) {
            var _this = _super.call(this, _theme, ngZone) || this;
            _this._commonStyles = _commonStyles;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._focusState = _focusState;
            /**
             * styles
             * @ignore
             */
            _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            /**
             * Event emitted when the checkbox's `checked` value changes.
             */
            _this.change = new core.EventEmitter();
            _this._onTouched = function () { };
            _this._controlValueAccessorChangeFn = function () { };
            _this._triggerElement = _this._el;
            _this._rippleConfig = {
                centered: true,
                radius: 'containerSize',
                percentageToIncrease: 150
            };
            return _this;
        }
        Object.defineProperty(LyCheckbox.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.color) {
                    this._color = val;
                    this._colorClass = this._theme.addStyle("lyCheckbox.color:" + val, function (theme) {
                        var _a;
                        return (_a = {},
                            _a["&{checked} {icon}"] = {
                                color: theme.colorOf(val)
                            },
                            _a["&{checked}:not({disabled}) {icon}"] = {
                                boxShadow: ui.shadowBuilder(1, theme.colorOf(val))
                            },
                            _a);
                    }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "checked", {
            /**
             * Whether the checkbox is checked.
             */
            get: /**
             * Whether the checkbox is checked.
             * @return {?}
             */ function () { return this._checked; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
                // if (newVal !== this.checked) {
                this._checked = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.checked);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.checked);
                }
                // }
                this._markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._required = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
                if (newVal !== this.disabled) {
                    this._disabled = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this.classes.disabled);
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this.classes.disabled);
                    }
                    this._markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCheckbox.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this._el.nativeElement, this.classes.root);
                // set default color
                if (!this.color) {
                    this.color = DEFAULT_WITH_COLOR;
                }
            };
        /**
         * @return {?}
         */
        LyCheckbox.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var focusState = this._focusState.listen(this._inputElement, this._el);
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
                        _this._onTouched();
                    });
                }
                this._rippleContainer = this._innerContainer;
                // set default disable ripple
                if (this.disableRipple == null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
                this._renderer.addClass(this._el.nativeElement, this.classes.animations);
            };
        /**
         * @return {?}
         */
        LyCheckbox.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._focusState.unlisten(this._el);
                this._removeRippleEvents();
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
        LyCheckbox.prototype.writeValue = /**
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.checked = !!value;
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
        LyCheckbox.prototype.registerOnChange = /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._controlValueAccessorChangeFn = fn;
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
        LyCheckbox.prototype.registerOnTouched = /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} isDisabled
         * @return {?}
         */
        LyCheckbox.prototype.setDisabledState = /**
         * \@docs-private
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /** Toggles the `checked` state of the checkbox. */
        /**
         * Toggles the `checked` state of the checkbox.
         * @return {?}
         */
        LyCheckbox.prototype.toggle = /**
         * Toggles the `checked` state of the checkbox.
         * @return {?}
         */
            function () {
                this.checked = !this.checked;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyCheckbox.prototype._onInputClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                if (!this.disabled) {
                    this.toggle();
                    this._emitChangeEvent();
                }
                this._markForCheck();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyCheckbox.prototype._onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
            };
        /**
         * @private
         * @return {?}
         */
        LyCheckbox.prototype._emitChangeEvent = /**
         * @private
         * @return {?}
         */
            function () {
                this._controlValueAccessorChangeFn(this.checked);
                this.change.emit({
                    source: this,
                    checked: this.checked
                });
            };
        /**
         * @private
         * @return {?}
         */
        LyCheckbox.prototype._markForCheck = /**
         * @private
         * @return {?}
         */
            function () {
                this._changeDetectorRef.markForCheck();
            };
        LyCheckbox.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-checkbox',
                        template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                        exportAs: 'lyCheckbox',
                        inputs: [
                            'disableRipple'
                        ]
                    }] }
        ];
        /** @nocollapse */
        LyCheckbox.ctorParameters = function () {
            return [
                { type: ui.LyCoreStyles },
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: ui.LyFocusState },
                { type: core.NgZone }
            ];
        };
        LyCheckbox.propDecorators = {
            _innerContainer: [{ type: core.ViewChild, args: ['innerContainer',] }],
            value: [{ type: core.Input }],
            color: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            required: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            change: [{ type: core.Output }],
            _inputElement: [{ type: core.ViewChild, args: ['input',] }]
        };
        return LyCheckbox;
    }(LyCheckboxMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyCheckboxModule = /** @class */ (function () {
        function LyCheckboxModule() {
        }
        LyCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            LyCheckbox
                        ],
                        imports: [
                            common.CommonModule,
                            ui.LyCommonModule
                        ],
                        exports: [
                            ui.LyCommonModule,
                            LyCheckbox
                        ]
                    },] }
        ];
        return LyCheckboxModule;
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

    exports.LyCheckboxModule = LyCheckboxModule;
    exports.LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = LY_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.LyCheckboxChange = LyCheckboxChange;
    exports.LyCheckboxBase = LyCheckboxBase;
    exports.LyCheckboxMixinBase = LyCheckboxMixinBase;
    exports.LyCheckbox = LyCheckbox;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-checkbox.umd.js.map