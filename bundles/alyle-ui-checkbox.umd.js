(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@alyle/ui'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/checkbox', ['exports', '@angular/core', '@angular/common', '@alyle/ui', '@angular/forms'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.checkbox = {}), global.ng.core, global.ng.common, global.ly.core, global.ng.forms));
}(this, function (exports, core, common, ui, forms) { 'use strict';

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

    var STYLE_PRIORITY = -2;
    var DEFAULT_WITH_COLOR = 'accent';
    var DEFAULT_DISABLE_RIPPLE = false;
    var STYLES = function (theme) { return ({
        $priority: STYLE_PRIORITY,
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
            '&:not({checked}) {icon}': {
                color: theme.text.secondary
            },
            '&': theme.checkbox ? theme.checkbox.root : null
        },
        layout: {
            display: 'inline-flex',
            alignItems: 'baseline',
            cursor: 'pointer',
            marginBefore: '16px',
            paddingTop: '12px',
            paddingBottom: '12px'
        },
        icon: {
            position: 'relative',
            marginAfter: '8px',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '16px',
            height: '16px',
            userSelect: 'none',
            '&::before, &::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto', boxSizing: 'border-box' }),
            // border icon
            '&::before': {
                border: 'solid 2px',
                borderRadius: '2px'
            },
            svg: {
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
            },
        },
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
    }); };
    /**
     * This allows it to support [(ngModel)].
     * @ignore
     */
    var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyCheckbox; }),
        multi: true
    };
    /** Change event object emitted by LyCheckbox. */
    var LyCheckboxChange = /** @class */ (function () {
        function LyCheckboxChange() {
        }
        return LyCheckboxChange;
    }());
    /** @docs-private */
    var LyCheckboxBase = /** @class */ (function () {
        function LyCheckboxBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCheckboxBase;
    }());
    /** @docs-private */
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
            _this.classes = _this._theme.addStyleSheet(STYLES);
            /** Event emitted when the checkbox's `checked` value changes. */
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
            get: function () {
                return this._color;
            },
            set: function (val) {
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
            get: function () { return this._checked; },
            set: function (val) {
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
            get: function () {
                return this._required;
            },
            set: function (val) {
                this._required = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (val) {
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
        LyCheckbox.prototype.ngOnInit = function () {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // set default color
            if (!this.color) {
                this.color = DEFAULT_WITH_COLOR;
            }
        };
        LyCheckbox.prototype.ngAfterViewInit = function () {
            var _this = this;
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
        LyCheckbox.prototype.ngOnDestroy = function () {
            this._focusState.unlisten(this._el);
            this._removeRippleEvents();
        };
        /** @docs-private */
        LyCheckbox.prototype.writeValue = function (value) {
            this.checked = !!value;
        };
        /** @docs-private */
        LyCheckbox.prototype.registerOnChange = function (fn) {
            this._controlValueAccessorChangeFn = fn;
        };
        /** @docs-private */
        LyCheckbox.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        /** @docs-private */
        LyCheckbox.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        /** Toggles the `checked` state of the checkbox. */
        LyCheckbox.prototype.toggle = function () {
            this.checked = !this.checked;
        };
        LyCheckbox.prototype._onInputClick = function (event) {
            event.stopPropagation();
            if (!this.disabled) {
                this.toggle();
                this._emitChangeEvent();
            }
            this._markForCheck();
        };
        LyCheckbox.prototype._onChange = function (event) {
            event.stopPropagation();
        };
        LyCheckbox.prototype._emitChangeEvent = function () {
            this._controlValueAccessorChangeFn(this.checked);
            this.change.emit({
                source: this,
                checked: this.checked
            });
        };
        LyCheckbox.prototype._markForCheck = function () {
            this._changeDetectorRef.markForCheck();
        };
        __decorate([
            core.ViewChild('innerContainer', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyCheckbox.prototype, "_innerContainer", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LyCheckbox.prototype, "value", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyCheckbox.prototype, "color", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyCheckbox.prototype, "checked", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyCheckbox.prototype, "required", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyCheckbox.prototype, "disabled", null);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], LyCheckbox.prototype, "change", void 0);
        __decorate([
            core.ViewChild('input', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyCheckbox.prototype, "_inputElement", void 0);
        LyCheckbox = __decorate([
            core.Component({
                selector: 'ly-checkbox',
                template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                exportAs: 'lyCheckbox',
                inputs: [
                    'disableRipple'
                ]
            }),
            __metadata("design:paramtypes", [ui.LyCoreStyles,
                ui.LyTheme2,
                core.ElementRef,
                core.Renderer2,
                core.ChangeDetectorRef,
                ui.LyFocusState,
                core.NgZone])
        ], LyCheckbox);
        return LyCheckbox;
    }(LyCheckboxMixinBase));

    var LyCheckboxModule = /** @class */ (function () {
        function LyCheckboxModule() {
        }
        LyCheckboxModule = __decorate([
            core.NgModule({
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
            })
        ], LyCheckboxModule);
        return LyCheckboxModule;
    }());

    exports.LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = LY_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.LyCheckbox = LyCheckbox;
    exports.LyCheckboxBase = LyCheckboxBase;
    exports.LyCheckboxChange = LyCheckboxChange;
    exports.LyCheckboxMixinBase = LyCheckboxMixinBase;
    exports.LyCheckboxModule = LyCheckboxModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-checkbox.umd.js.map
