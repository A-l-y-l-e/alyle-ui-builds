(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/input', ['exports', '@angular/core', '@angular/forms', 'rxjs', '@angular/common', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.input = {}),global.ng.core,global.ng.forms,global.rxjs,global.ng.common,global.alyle.ui));
}(this, (function (exports,core,forms,rxjs,common,ui) { 'use strict';

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
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyInputContents = /** @class */ (function () {
        function LyInputContents() {
        }
        LyInputContents.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-before-input, ly-after-input'
                    },] },
        ];
        return LyInputContents;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyFieldDirective = /** @class */ (function () {
        function LyFieldDirective(elementRef, _ngControl, _parentForm, _parentFormGroup, cd) {
            this.elementRef = elementRef;
            this._ngControl = _ngControl;
            this._parentForm = _parentForm;
            this._parentFormGroup = _parentFormGroup;
            this.cd = cd;
            this.focusState = new rxjs.Subject();
            this._disabled = false;
            this._required = false;
        }
        /**
         * @param {?} isFocused
         * @return {?}
         */
        LyFieldDirective.prototype.focus = /**
         * @param {?} isFocused
         * @return {?}
         */
            function (isFocused) {
                this.focusState.next(isFocused);
            };
        /**
         * @param {?} isFocused
         * @return {?}
         */
        LyFieldDirective.prototype._blur = /**
         * @param {?} isFocused
         * @return {?}
         */
            function (isFocused) {
                this.focusState.next(isFocused);
            };
        /**
         * @return {?}
         */
        LyFieldDirective.prototype._noop = /**
         * @return {?}
         */
            function () { };
        Object.defineProperty(LyFieldDirective.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._ngControl ? this._ngControl.disabled : this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._disabled = !!(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyFieldDirective.prototype, "required", {
            get: /**
             * @return {?}
             */ function () { return this._ngControl ? this._ngControl.invalid : this._required; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._required = !!(value); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyFieldDirective.prototype.markForCheck = /**
         * @return {?}
         */
            function () {
                this.cd.markForCheck();
            };
        /**
         * @return {?}
         */
        LyFieldDirective.prototype._parent = /**
         * @return {?}
         */
            function () {
                return this._parentFormGroup || this._parentForm;
            };
        /**
         * @return {?}
         */
        LyFieldDirective.prototype._updateErrorState = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = this._parentFormGroup || this._parentForm;
                /** @type {?} */
                var control = this._ngControl ? /** @type {?} */ (this._ngControl.control) : null;
                // const newState = matcher.isErrorState(control, parent);
                // if (newState !== oldState) {
                //   this.errorState = newState;
                //   this.stateChanges.next();
                // }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LyFieldDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                // if (!changes['placeholder'].firstChange) {
                //   console.log(JSON.stringify(changes['placeholder']))
                // }
            };
        /**
         * @return {?}
         */
        LyFieldDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.focusState.complete();
            };
        LyFieldDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-input input, ly-textarea textarea'
                    },] },
        ];
        /** @nocollapse */
        LyFieldDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
                { type: forms.NgForm, decorators: [{ type: core.Optional }] },
                { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] },
                { type: core.ChangeDetectorRef }
            ];
        };
        LyFieldDirective.propDecorators = {
            type: [{ type: core.Input }],
            focus: [{ type: core.HostListener, args: ['focus', ['true'],] }],
            _blur: [{ type: core.HostListener, args: ['blur', ['false'],] }],
            _noop: [{ type: core.HostListener, args: ['input',] }],
            disabled: [{ type: core.Input }],
            required: [{ type: core.Input }]
        };
        return LyFieldDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyInputCommon = /** @class */ (function () {
        function LyInputCommon() {
        }
        LyInputCommon.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-default, ly-before, ly-after, ly-input ly-error, ly-input ly-hint'
                    },] },
        ];
        return LyInputCommon;
    }());
    var LyPlaceholder = /** @class */ (function () {
        function LyPlaceholder() {
        }
        LyPlaceholder.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-placeholder'
                    },] },
        ];
        return LyPlaceholder;
    }());
    var LyDefault = /** @class */ (function () {
        function LyDefault() {
        }
        LyDefault.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-default'
                    },] },
        ];
        return LyDefault;
    }());
    var LyLabel = /** @class */ (function () {
        function LyLabel() {
        }
        LyLabel.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-label'
                    },] },
        ];
        return LyLabel;
    }());
    var LyInput = /** @class */ (function () {
        function LyInput(theme, _changeDetectorRef, bcr, renderer, elementRef) {
            this.theme = theme;
            this._changeDetectorRef = _changeDetectorRef;
            this._inputColor = 'primary';
            this.changed = new Array();
            this.touched = new Array();
            this.type = 'text';
            this._classes = {};
        }
        Object.defineProperty(LyInput.prototype, "withColor", {
            get: /**
             * @return {?}
             */ function () {
                return this._withColor;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._withColor = val;
                this.updateColor(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "isFloatingLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this.currentValueState || this.labelAbove || this.isDefault || this.focusState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "placeholderState", {
            get: /**
             * @return {?}
             */ function () {
                return !this.currentValueState && this.focusState || !this.currentValueState && !this.focusState && this.isFloatingLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "defaultOff", {
            get: /**
             * @return {?}
             */ function () {
                return this.currentValue === this.default && !this.focusState || !this.currentValueState && !this.focusState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._field.disabled; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "required", {
            get: /**
             * @return {?}
             */ function () { return this._field.required; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "currentValueState", {
            get: /**
             * @return {?}
             */ function () {
                return ("" + this.currentValue).length !== 0 && this.currentValue != null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} val
         * @return {?}
         */
        LyInput.prototype._valueBoolean = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return !(val === null || val === undefined || val === false || val === '');
            };
        /**
         * @return {?}
         */
        LyInput.prototype._isErrorState = /**
         * @return {?}
         */
            function () {
                if (this._field) {
                    return this._field._ngControl.invalid && this._field._ngControl.touched || this._errorState;
                }
            };
        /**
         * @return {?}
         */
        LyInput.prototype.updateError = /**
         * @return {?}
         */
            function () {
                this._errorState = this._field._ngControl.invalid;
            };
        /**
         * @return {?}
         */
        LyInput.prototype.value = /**
         * @return {?}
         */
            function () {
                return this.currentValue;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyInput.prototype.updateColor = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                /** @type {?} */
                var inputColor = function () { return _this.theme.colorOf(val); };
                this._classes.caretColor = this.theme.setUpStyle("input:caret" + val, {
                    '': function () { return ("caret-color:" + inputColor()); }
                });
                this._classes.withColor = this.theme.setUpStyle("input:" + val, {
                    '': function () {
                        return ("color:" + inputColor() + ";" +
                            ("background-color:" + _this.theme.config["input"].underline + ";"));
                    }
                });
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyInput.prototype.toBoolean = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return ui.toBoolean(val);
            };
        Object.defineProperty(LyInput.prototype, "isPlaceholder", {
            get: /**
             * @return {?}
             */ function () {
                return ui.toBoolean(this.placeholder) || !!this.lyPlaceholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "isDefault", {
            get: /**
             * @return {?}
             */ function () {
                return ui.toBoolean(this.default) || !!this.lyDefault;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInput.prototype, "isLabel", {
            get: /**
             * @return {?}
             */ function () {
                return ui.toBoolean(this.label) || !!this.lyLabel;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyInput.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.withColor) {
                    this.updateColor(this.theme.config["input"].withColor);
                }
                // this._inputColor = this.theme.colorOf(this._color);
                this.focusStateSuscription = this._field.focusState.subscribe(function (fState) {
                    _this.focusState = fState;
                });
                if (this._field._parent()) {
                    this._field._parent().ngSubmit.subscribe(function (submit) {
                        _this.updateError();
                    });
                }
            };
        /**
         * @return {?}
         */
        LyInput.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._field) {
                    this.currentValue = this._field._ngControl.value;
                    if (this._field._ngControl && this._field._ngControl.valueChanges) {
                        this._field._ngControl.valueChanges.subscribe(function (val) {
                            _this.currentValue = val;
                            _this._errorState = false;
                            _this._changeDetectorRef.markForCheck();
                            /**
                                       * reset error of submit to false
                                       */
                        });
                    }
                    this._field.focusState.subscribe(function (isFocused) {
                        if (_this.isDefault) {
                            if (!_this.currentValueState) {
                                _this.currentValue = _this.default;
                                _this._field._ngControl.valueAccessor.writeValue(_this.default);
                                _this._field._ngControl.viewToModelUpdate(_this.default);
                            }
                        }
                        _this._field.markForCheck();
                        _this._changeDetectorRef.markForCheck();
                    });
                }
                else {
                    console.warn('LyInput: Require input native');
                }
            };
        /**
         * @param {?} prop
         * @return {?}
         */
        LyInput.prototype._shouldForward = /**
         * @param {?} prop
         * @return {?}
         */
            function (prop) {
                /** @type {?} */
                var control = this._field ? this._field._ngControl : null;
                return control && ( /** @type {?} */(control))[prop];
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LyInput.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["default"]) {
                    if (this.isDefault && !this.currentValueState) {
                        this.currentValue = this.default;
                        this._field._ngControl.viewToModelUpdate(this.default);
                    }
                }
            };
        /**
         * @return {?}
         */
        LyInput.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.focusStateSuscription.unsubscribe();
            };
        LyInput.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-text-field, ly-input, ly-textarea',
                        styles: [":host{display:inline-block;position:relative;align-items:center}:host /deep/ ly-after,:host /deep/ ly-before{display:inline-block;vertical-align:inherit}:host /deep/ input,:host /deep/ textarea{border:none;outline:0;font-family:inherit;color:inherit;background:0 0;font-size:inherit;width:100%;font-weight:400;padding:0;display:inline-flex}:host.ly-default-off .ly-input-default,:host.ly-hidden-input /deep/ .ly-input-container input,:host.ly-hidden-input /deep/ .ly-input-container textarea{opacity:0}:host.ly-focus-active .ly-input-underline:after{width:100%}:host.ly-focus-active .ly-input-top-label,:host.ly-focus-active /deep/ ly-top-label{font-size:75%;top:0;-webkit-transform:translate(0,0);transform:translate(0,0)}:host.ly-focus-active .ly-input-default{opacity:0}:host.ly-value-on .ly-input-placeholder{opacity:0}.ly-input-underline{position:absolute;bottom:.875em;height:1px;right:0;left:0}.ly-input-underline:after{content:'';position:absolute;width:0%;height:2px;background:currentColor;left:0;right:0;margin:0 auto;bottom:0;transition:450ms cubic-bezier(.23,1,.32,1)}.ly-input-underline.ly-disabled{background:0/4px 1px repeat-x;background-image:linear-gradient(to right,#b4b4b4 0,#b4b4b4 33%,transparent 0);border-top:0}.ly-input-underline.ly-disabled:after{width:0%}:host.ly-label-above .ly-input-float-label{font-size:75%;top:0}.ly-input-default,.ly-input-float-label,.ly-input-placeholder{pointer-events:none;position:absolute;bottom:1.125em;top:1.125em;margin:auto;font-size:100%;transition:375ms cubic-bezier(.23,1,.32,1);color:inherit;width:100%}.ly-input-content{width:100%;position:relative;display:flex;color:currentColor}.ly-input-container{padding:1.125em 0;position:relative;opacity:1;display:inline-block;vertical-align:inherit;width:100%}.ly-input-container ::ng-deep input{text-align:inherit}.bottom-field,.ly-error-container{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;font-size:75%;-webkit-transform:translate3d(0,calc(100% - 1.1em),0);transform:translate3d(0,calc(100% - 1.1em),0);display:flex}.bottom-field .bottom-field-space,.ly-error-container .bottom-field-space{flex:1}.ly-required{position:absolute;top:1.125em;right:0;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:.45}:host.ly-input-invalid .ly-input-float-label,:host.ly-input-invalid .ly-input-placeholder,:host.ly-input-invalid .ly-input-underline,:host.ly-input-invalid /deep/ ly-error{color:#f44336!important}:host.ly-input-invalid .ly-input-underline:after{width:100%}"],
                        template: "<ng-content select=\"ly-before\"></ng-content>\n<div class=\"{{ _classes.withColor }} ly-input-underline\"></div>\n<div class=\"ly-input-container {{ _classes.caretColor }}\">\n  <ng-content select=\"input, textarea\"></ng-content>\n  <!-- ly-placeholder -->\n  <ng-container *ngIf=\"placeholder; then isPlaceholderTemplate; else placeholderContainer\"></ng-container>\n  <ng-template #isPlaceholderTemplate>\n    <div *ngIf=\"toBoolean(placeholder) !== undefined && placeholderState\" color=\"input:label\" class=\"ly-input-placeholder\">{{ placeholder }}</div>\n  </ng-template>\n  <ng-template #placeholderContainer>\n    <div *ngIf=\"lyPlaceholder !== undefined && placeholderState\" color=\"input:label\" class=\"ly-input-placeholder\">\n      <ng-content select=\"ly-placeholder\"></ng-content>\n    </div>\n  </ng-template>\n  <!-- ly-default -->\n  <ng-container *ngIf=\"toBoolean(default); then isDefaultTemplate\"></ng-container>\n  <ng-template #isDefaultTemplate>\n    <div *ngIf=\"!(lyDefault !== undefined) && defaultOff\" color=\"input:label\" class=\"ly-input-default\">Default: {{ default }}</div>\n    <div *ngIf=\"lyDefault !== undefined && defaultOff\" color=\"input:label\" class=\"ly-input-default\">\n      <ng-content select=\"ly-default\"></ng-content>{{ default }}\n    </div>\n  </ng-template>\n  <!-- ly-label -->\n  <ng-container *ngIf=\"toBoolean(label); then _isLabelTemplate; else labelContainer\"></ng-container>\n  <ng-template #_isLabelTemplate>\n    <div *ngIf=\"label !== undefined\" color=\"input:label\" class=\"ly-input-float-label\">{{ label }}</div>\n  </ng-template>\n  <ng-template #labelContainer>\n    <div *ngIf=\"lyLabel\" color=\"input:label\" class=\"ly-input-float-label\">\n      <ng-content select=\"ly-label\"></ng-content>\n    </div>\n  </ng-template>\n</div>\n<div class=\"ly-icon-required\" *ngIf=\"required\"></div>\n<div class=\"bottom-field\" *ngIf=\"!_isErrorState()\">\n  <ng-content select=\"ly-hint[align=start], ly-hint:not(ly-hint[align])\"></ng-content>\n  <span class=\"bottom-field-space\"></span>\n  <ng-content select=\"ly-hint[align=end]\"></ng-content>\n</div>\n<div class=\"bottom-field\" *ngIf=\"_isErrorState()\">\n  <ng-content select=\"ly-error\"></ng-content>\n</div>\n<ng-content select=\"ly-after\"></ng-content>\n",
                        // tslint:disable-next-line:use-host-property-decorator
                        host: {
                            '[class.ly-input-invalid]': '_isErrorState()',
                            '[class.ng-untouched]': '_shouldForward("untouched")',
                            '[class.ng-touched]': '_shouldForward("touched")',
                            '[class.ng-pristine]': '_shouldForward("pristine")',
                            '[class.ng-dirty]': '_shouldForward("dirty")',
                            '[class.ng-valid]': '_shouldForward("valid")',
                            '[class.ng-invalid]': '_shouldForward("invalid")',
                            '[class.ng-pending]': '_shouldForward("pending")',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        LyInput.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ChangeDetectorRef },
                { type: ui.LyCommon, decorators: [{ type: core.Optional }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        LyInput.propDecorators = {
            _field: [{ type: core.ContentChild, args: [LyFieldDirective,] }],
            lyPlaceholder: [{ type: core.ContentChild, args: [LyPlaceholder,] }],
            lyDefault: [{ type: core.ContentChild, args: [LyDefault,] }],
            lyLabel: [{ type: core.ContentChild, args: [LyLabel,] }],
            type: [{ type: core.Input }],
            label: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            labelAbove: [{ type: core.Input }],
            default: [{ type: core.Input }],
            withColor: [{ type: core.Input }],
            isFloatingLabel: [{ type: core.HostBinding, args: ['class.ly-label-above',] }],
            focusState: [{ type: core.HostBinding, args: ['class.ly-focus-active',] }],
            defaultOff: [{ type: core.HostBinding, args: ['class.ly-hidden-input',] }],
            disabled: [{ type: core.Input }],
            required: [{ type: core.Input }],
            currentValueState: [{ type: core.HostBinding, args: ['class.ly-value-on',] }]
        };
        __decorate([
            ui.IsBoolean(),
            __metadata("design:type", Boolean)
        ], LyInput.prototype, "labelAbove", void 0);
        return LyInput;
    }());
    var LyInputModule = /** @class */ (function () {
        function LyInputModule() {
        }
        LyInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule],
                        exports: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                        declarations: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                    },] },
        ];
        return LyInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyInputCommon = LyInputCommon;
    exports.LyPlaceholder = LyPlaceholder;
    exports.LyDefault = LyDefault;
    exports.LyLabel = LyLabel;
    exports.LyInput = LyInput;
    exports.LyInputModule = LyInputModule;
    exports.LyInputContents = LyInputContents;
    exports.LyFieldDirective = LyFieldDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbHktYmVmb3JlLWlucHV0LCBseS1hZnRlci1pbnB1dCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5SW5wdXRDb250ZW50cyB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJzY3JpYmVyICwgIFN1YmplY3QgLCAgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRGlyZWN0aXZlLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFNlbGYsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEZvcm1zTW9kdWxlLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0NvbnRyb2wsIE5nRm9ybSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dENvbnRlbnRzIH0gZnJvbSAnLi9pbnB1dC1jb250ZW50cyc7XG5pbXBvcnQgeyBMeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9seS1maWVsZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0LCBseS1iZWZvcmUsIGx5LWFmdGVyLCBseS1pbnB1dCBseS1lcnJvciwgbHktaW5wdXQgbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dENvbW1vbiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0J1xufSlcbmV4cG9ydCBjbGFzcyBMeURlZmF1bHQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwge31cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZXh0LWZpZWxkLCBseS1pbnB1dCwgbHktdGV4dGFyZWEnLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC9kZWVwLyBseS1hZnRlciw6aG9zdCAvZGVlcC8gbHktYmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9Omhvc3QgL2RlZXAvIGlucHV0LDpob3N0IC9kZWVwLyB0ZXh0YXJlYXtib3JkZXI6bm9uZTtvdXRsaW5lOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0Lmx5LWRlZmF1bHQtb2ZmIC5seS1pbnB1dC1kZWZhdWx0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciBpbnB1dCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7b3BhY2l0eTowfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC10b3AtbGFiZWwsOmhvc3QubHktZm9jdXMtYWN0aXZlIC9kZWVwLyBseS10b3AtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC1kZWZhdWx0e29wYWNpdHk6MH06aG9zdC5seS12YWx1ZS1vbiAubHktaW5wdXQtcGxhY2Vob2xkZXJ7b3BhY2l0eTowfS5seS1pbnB1dC11bmRlcmxpbmV7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi44NzVlbTtoZWlnaHQ6MXB4O3JpZ2h0OjA7bGVmdDowfS5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2xlZnQ6MDtyaWdodDowO21hcmdpbjowIGF1dG87Ym90dG9tOjA7dHJhbnNpdGlvbjo0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWR7YmFja2dyb3VuZDowLzRweCAxcHggcmVwZWF0LXg7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2I0YjRiNCAwLCNiNGI0YjQgMzMlLHRyYW5zcGFyZW50IDApO2JvcmRlci10b3A6MH0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVkOmFmdGVye3dpZHRoOjAlfTpob3N0Lmx5LWxhYmVsLWFib3ZlIC5seS1pbnB1dC1mbG9hdC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowfS5seS1pbnB1dC1kZWZhdWx0LC5seS1pbnB1dC1mbG9hdC1sYWJlbCwubHktaW5wdXQtcGxhY2Vob2xkZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MS4xMjVlbTt0b3A6MS4xMjVlbTttYXJnaW46YXV0bztmb250LXNpemU6MTAwJTt0cmFuc2l0aW9uOjM3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7Y29sb3I6aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250ZW50e3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2NvbG9yOmN1cnJlbnRDb2xvcn0ubHktaW5wdXQtY29udGFpbmVye3BhZGRpbmc6MS4xMjVlbSAwO3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRhaW5lciA6Om5nLWRlZXAgaW5wdXR7dGV4dC1hbGlnbjppbmhlcml0fS5ib3R0b20tZmllbGQsLmx5LWVycm9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO2ZvbnQtc2l6ZTo3NSU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO2Rpc3BsYXk6ZmxleH0uYm90dG9tLWZpZWxkIC5ib3R0b20tZmllbGQtc3BhY2UsLmx5LWVycm9yLWNvbnRhaW5lciAuYm90dG9tLWZpZWxkLXNwYWNle2ZsZXg6MX0ubHktcmVxdWlyZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEuMTI1ZW07cmlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6LjQ1fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LWZsb2F0LWxhYmVsLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXBsYWNlaG9sZGVyLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZSw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC9kZWVwLyBseS1lcnJvcntjb2xvcjojZjQ0MzM2IWltcG9ydGFudH06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX1gXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS1iZWZvcmVcIj48L25nLWNvbnRlbnQ+XHJcbjxkaXYgY2xhc3M9XCJ7eyBfY2xhc3Nlcy53aXRoQ29sb3IgfX0gbHktaW5wdXQtdW5kZXJsaW5lXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pbnB1dC1jb250YWluZXIge3sgX2NsYXNzZXMuY2FyZXRDb2xvciB9fVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImlucHV0LCB0ZXh0YXJlYVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGx5LXBsYWNlaG9sZGVyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJwbGFjZWhvbGRlcjsgdGhlbiBpc1BsYWNlaG9sZGVyVGVtcGxhdGU7IGVsc2UgcGxhY2Vob2xkZXJDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzUGxhY2Vob2xkZXJUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b0Jvb2xlYW4ocGxhY2Vob2xkZXIpICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjcGxhY2Vob2xkZXJDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1wbGFjZWhvbGRlclwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1kZWZhdWx0IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4oZGVmYXVsdCk7IHRoZW4gaXNEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzRGVmYXVsdFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cIiEobHlEZWZhdWx0ICE9PSB1bmRlZmluZWQpICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+RGVmYXVsdDoge3sgZGVmYXVsdCB9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRlZmF1bHRcIj48L25nLWNvbnRlbnQ+e3sgZGVmYXVsdCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWxhYmVsIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4obGFiZWwpOyB0aGVuIF9pc0xhYmVsVGVtcGxhdGU7IGVsc2UgbGFiZWxDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI19pc0xhYmVsVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibGFiZWwgIT09IHVuZGVmaW5lZFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+e3sgbGFiZWwgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjbGFiZWxDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlMYWJlbFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pY29uLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCIhX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1zdGFydF0sIGx5LWhpbnQ6bm90KGx5LWhpbnRbYWxpZ25dKVwiPjwvbmctY29udGVudD5cclxuICA8c3BhbiBjbGFzcz1cImJvdHRvbS1maWVsZC1zcGFjZVwiPjwvc3Bhbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCJfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1lcnJvclwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cImx5LWFmdGVyXCI+PC9uZy1jb250ZW50PlxyXG5gLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmx5LWlucHV0LWludmFsaWRdJzogJ19pc0Vycm9yU3RhdGUoKScsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgX3ZhbHVlOiBhbnk7XG4gIF9lbGVtZW50VHlwZTogJ2lucHV0JyB8ICd0ZXh0YXJlYSc7XG4gIF9pbnB1dENvbG9yID0gJ3ByaW1hcnknO1xuICBjdXJyZW50VmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBwYWxldHRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlZCA9IG5ldyBBcnJheTwodmFsdWU6IGFueSkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTHlGaWVsZERpcmVjdGl2ZSkgX2ZpZWxkOiBMeUZpZWxkRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIGx5UGxhY2Vob2xkZXI6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlEZWZhdWx0KSBseURlZmF1bHQ6IEx5RGVmYXVsdDtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBseUxhYmVsOiBMeUxhYmVsO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBASXNCb29sZWFuKCkgbGFiZWxBYm92ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVmYXVsdDogc3RyaW5nO1xuICBfZXJyb3JTdGF0ZTogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXJDb250YWluZXI6IGFueTtcbiAgbGFiZWxDb250YWluZXI6IGFueTtcbiAgZm9jdXNTdGF0ZVN1c2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIF9jbGFzc2VzOiB7XG4gICAgY2FyZXRDb2xvcj86IHN0cmluZyxcbiAgICB3aXRoQ29sb3I/OiBzdHJpbmdcbiAgfSA9IHt9O1xuICBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb2xvcih2YWwpO1xuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWxhYmVsLWFib3ZlJylcbiAgZ2V0IGlzRmxvYXRpbmdMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSB8fCB0aGlzLmxhYmVsQWJvdmUgfHwgdGhpcy5pc0RlZmF1bHQgfHwgdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmIHRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlICYmIHRoaXMuaXNGbG9hdGluZ0xhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZm9jdXMtYWN0aXZlJykgZm9jdXNTdGF0ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1oaWRkZW4taW5wdXQnKVxuICBnZXQgZGVmYXVsdE9mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWUgPT09IHRoaXMuZGVmYXVsdCAmJiAhdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLnJlcXVpcmVkOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS12YWx1ZS1vbicpXG4gIGdldCBjdXJyZW50VmFsdWVTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGAke3RoaXMuY3VycmVudFZhbHVlfWApLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmN1cnJlbnRWYWx1ZSAhPSBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQm9vbGVhbih2YWwpIHtcbiAgICByZXR1cm4gISh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgPT09ICcnKTtcbiAgfVxuXG4gIF9pc0Vycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9lcnJvclN0YXRlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xuICAgIHRoaXMuX2Vycm9yU3RhdGUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQ7XG4gIH1cblxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgYmNyOiBMeUNvbW1vbixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5wdXRDb2xvciA9ICgpID0+IHRoaXMudGhlbWUuY29sb3JPZih2YWwpO1xuICAgIHRoaXMuX2NsYXNzZXMuY2FyZXRDb2xvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBpbnB1dDpjYXJldCR7dmFsfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgY2FyZXQtY29sb3I6JHtpbnB1dENvbG9yKCl9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLl9jbGFzc2VzLndpdGhDb2xvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBpbnB1dDoke3ZhbH1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7aW5wdXRDb2xvcigpfTtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmlucHV0LnVuZGVybGluZX07YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHRvQm9vbGVhbih2YWw6IGFueSkge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMucGxhY2Vob2xkZXIpIHx8ICEhdGhpcy5seVBsYWNlaG9sZGVyO1xuICB9XG4gIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmRlZmF1bHQpIHx8ICEhdGhpcy5seURlZmF1bHQ7XG4gIH1cbiAgZ2V0IGlzTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmxhYmVsKSB8fCAhIXRoaXMubHlMYWJlbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3IodGhpcy50aGVtZS5jb25maWcuaW5wdXQud2l0aENvbG9yKTtcbiAgICB9XG4gICAgLy8gdGhpcy5faW5wdXRDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLl9jb2xvcik7XG4gICAgdGhpcy5mb2N1c1N0YXRlU3VzY3JpcHRpb24gPSB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoZlN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzU3RhdGUgPSBmU3RhdGU7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX2ZpZWxkLl9wYXJlbnQoKSkge1xuICAgICAgdGhpcy5fZmllbGQuX3BhcmVudCgpLm5nU3VibWl0LnN1YnNjcmliZSgoc3VibWl0KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWU7XG4gICAgICBpZiAodGhpcy5fZmllbGQuX25nQ29udHJvbCAmJiB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhpcy5fZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIHJlc2V0IGVycm9yIG9mIHN1Ym1pdCB0byBmYWxzZVxuICAgICAgICAgICAqL1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChpc0ZvY3VzZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKHRoaXMuZGVmYXVsdCk7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZpZWxkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0x5SW5wdXQ6IFJlcXVpcmUgaW5wdXQgbmF0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3VsZEZvcndhcmQocHJvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpZWxkID8gdGhpcy5fZmllbGQuX25nQ29udHJvbCA6IG51bGw7XG4gICAgcmV0dXJuIGNvbnRyb2wgJiYgKGNvbnRyb2wgYXMgYW55KVtwcm9wXTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kZWZhdWx0KSB7XG4gICAgICBpZiAodGhpcy5pc0RlZmF1bHQgJiYgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlU3VzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXRNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJTdWJqZWN0IiwiRWxlbWVudFJlZiIsIk5nQ29udHJvbCIsIk9wdGlvbmFsIiwiU2VsZiIsIk5nRm9ybSIsIkZvcm1Hcm91cERpcmVjdGl2ZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJIb3N0TGlzdGVuZXIiLCJ0b0Jvb2xlYW4iLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkx5VGhlbWUyIiwiTHlDb21tb24iLCJSZW5kZXJlcjIiLCJDb250ZW50Q2hpbGQiLCJIb3N0QmluZGluZyIsIklzQm9vbGVhbiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7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