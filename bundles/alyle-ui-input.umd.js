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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbHktYmVmb3JlLWlucHV0LCBseS1hZnRlci1pbnB1dCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5SW5wdXRDb250ZW50cyB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBTZWxmLFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdDb250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWlucHV0IGlucHV0LCBseS10ZXh0YXJlYSB0ZXh0YXJlYSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgZm9jdXNTdGF0ZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGZvY3VzZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJ3RydWUnXSkgZm9jdXMoaXNGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlLm5leHQoaXNGb2N1c2VkKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWydmYWxzZSddKSBwcml2YXRlIF9ibHVyKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBwcml2YXRlIF9ub29wKCkgeyB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fbmdDb250cm9sID8gdGhpcy5fbmdDb250cm9sLmRpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSAhISh2YWx1ZSk7IH1cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkgeyByZXR1cm4gdGhpcy5fbmdDb250cm9sID8gdGhpcy5fbmdDb250cm9sLmludmFsaWQgOiB0aGlzLl9yZXF1aXJlZDsgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGFueSkgeyB0aGlzLl9yZXF1aXJlZCA9ICEhKHZhbHVlKTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIF9uZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9wYXJlbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMuX3BhcmVudEZvcm07XG4gIH1cbiAgcHJvdGVjdGVkIF91cGRhdGVFcnJvclN0YXRlKCkge1xuICAgIC8vIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICAgIC8vIGNvbnN0IG1hdGNoZXIgPSB0aGlzLmVycm9yU3RhdGVNYXRjaGVyIHx8IHRoaXMuX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fbmdDb250cm9sID8gdGhpcy5fbmdDb250cm9sLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2wgOiBudWxsO1xuICAgIC8vIGNvbnN0IG5ld1N0YXRlID0gbWF0Y2hlci5pc0Vycm9yU3RhdGUoY29udHJvbCwgcGFyZW50KTtcblxuICAgIC8vIGlmIChuZXdTdGF0ZSAhPT0gb2xkU3RhdGUpIHtcbiAgICAvLyAgIHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIC8vICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbZmxvYXRMYWJlbDogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgIC8vIGlmICghY2hhbmdlc1sncGxhY2Vob2xkZXInXS5maXJzdENoYW5nZSkge1xuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2hhbmdlc1sncGxhY2Vob2xkZXInXSkpXG4gICAgLy8gfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIElzQm9vbGVhbiwgdG9Cb29sZWFuLCBMeUNvbW1vbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUlucHV0Q29udGVudHMgfSBmcm9tICcuL2lucHV0LWNvbnRlbnRzJztcbmltcG9ydCB7IEx5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2x5LWZpZWxkLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRlZmF1bHQsIGx5LWJlZm9yZSwgbHktYWZ0ZXIsIGx5LWlucHV0IGx5LWVycm9yLCBseS1pbnB1dCBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29tbW9uIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXBsYWNlaG9sZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVBsYWNlaG9sZGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRlZmF1bHQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGVmYXVsdCB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTHlMYWJlbCB7fVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRleHQtZmllbGQsIGx5LWlucHV0LCBseS10ZXh0YXJlYScsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QgL2RlZXAvIGx5LWFmdGVyLDpob3N0IC9kZWVwLyBseS1iZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246aW5oZXJpdH06aG9zdCAvZGVlcC8gaW5wdXQsOmhvc3QgL2RlZXAvIHRleHRhcmVhe2JvcmRlcjpub25lO291dGxpbmU6MDtmb250LWZhbWlseTppbmhlcml0O2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDA7Zm9udC1zaXplOmluaGVyaXQ7d2lkdGg6MTAwJTtmb250LXdlaWdodDo0MDA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QubHktZGVmYXVsdC1vZmYgLmx5LWlucHV0LWRlZmF1bHQsOmhvc3QubHktaGlkZGVuLWlucHV0IC9kZWVwLyAubHktaW5wdXQtY29udGFpbmVyIGlucHV0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtvcGFjaXR5OjB9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LXRvcC1sYWJlbCw6aG9zdC5seS1mb2N1cy1hY3RpdmUgL2RlZXAvIGx5LXRvcC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKX06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LWRlZmF1bHR7b3BhY2l0eTowfTpob3N0Lmx5LXZhbHVlLW9uIC5seS1pbnB1dC1wbGFjZWhvbGRlcntvcGFjaXR5OjB9Lmx5LWlucHV0LXVuZGVybGluZXtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206Ljg3NWVtO2hlaWdodDoxcHg7cmlnaHQ6MDtsZWZ0OjB9Lmx5LWlucHV0LXVuZGVybGluZTphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjAlO2hlaWdodDoycHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOjAgYXV0bztib3R0b206MDt0cmFuc2l0aW9uOjQ1MG1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSl9Lmx5LWlucHV0LXVuZGVybGluZS5seS1kaXNhYmxlZHtiYWNrZ3JvdW5kOjAvNHB4IDFweCByZXBlYXQteDtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjYjRiNGI0IDAsI2I0YjRiNCAzMyUsdHJhbnNwYXJlbnQgMCk7Ym9yZGVyLXRvcDowfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWQ6YWZ0ZXJ7d2lkdGg6MCV9Omhvc3QubHktbGFiZWwtYWJvdmUgLmx5LWlucHV0LWZsb2F0LWxhYmVse2ZvbnQtc2l6ZTo3NSU7dG9wOjB9Lmx5LWlucHV0LWRlZmF1bHQsLmx5LWlucHV0LWZsb2F0LWxhYmVsLC5seS1pbnB1dC1wbGFjZWhvbGRlcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxLjEyNWVtO3RvcDoxLjEyNWVtO21hcmdpbjphdXRvO2ZvbnQtc2l6ZToxMDAlO3RyYW5zaXRpb246Mzc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtjb2xvcjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRlbnR7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7Y29sb3I6Y3VycmVudENvbG9yfS5seS1pbnB1dC1jb250YWluZXJ7cGFkZGluZzoxLjEyNWVtIDA7cG9zaXRpb246cmVsYXRpdmU7b3BhY2l0eToxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXQ7d2lkdGg6MTAwJX0ubHktaW5wdXQtY29udGFpbmVyIDo6bmctZGVlcCBpbnB1dHt0ZXh0LWFsaWduOmluaGVyaXR9LmJvdHRvbS1maWVsZCwubHktZXJyb3ItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7Zm9udC1zaXplOjc1JTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGMoMTAwJSAtIDEuMWVtKSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7ZGlzcGxheTpmbGV4fS5ib3R0b20tZmllbGQgLmJvdHRvbS1maWVsZC1zcGFjZSwubHktZXJyb3ItY29udGFpbmVyIC5ib3R0b20tZmllbGQtc3BhY2V7ZmxleDoxfS5seS1yZXF1aXJlZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MS4xMjVlbTtyaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eTouNDV9Omhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtZmxvYXQtbGFiZWwsOmhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtdW5kZXJsaW5lLDpob3N0Lmx5LWlucHV0LWludmFsaWQgL2RlZXAvIGx5LWVycm9ye2NvbG9yOiNmNDQzMzYhaW1wb3J0YW50fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZTphZnRlcnt3aWR0aDoxMDAlfWBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWJlZm9yZVwiPjwvbmctY29udGVudD5cclxuPGRpdiBjbGFzcz1cInt7IF9jbGFzc2VzLndpdGhDb2xvciB9fSBseS1pbnB1dC11bmRlcmxpbmVcIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImx5LWlucHV0LWNvbnRhaW5lciB7eyBfY2xhc3Nlcy5jYXJldENvbG9yIH19XCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaW5wdXQsIHRleHRhcmVhXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gbHktcGxhY2Vob2xkZXIgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBsYWNlaG9sZGVyOyB0aGVuIGlzUGxhY2Vob2xkZXJUZW1wbGF0ZTsgZWxzZSBwbGFjZWhvbGRlckNvbnRhaW5lclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXNQbGFjZWhvbGRlclRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cInRvQm9vbGVhbihwbGFjZWhvbGRlcikgIT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlclN0YXRlXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtcGxhY2Vob2xkZXJcIj57eyBwbGFjZWhvbGRlciB9fTwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNwbGFjZWhvbGRlckNvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJseVBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXBsYWNlaG9sZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWRlZmF1bHQgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvQm9vbGVhbihkZWZhdWx0KTsgdGhlbiBpc0RlZmF1bHRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXNEZWZhdWx0VGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIShseURlZmF1bHQgIT09IHVuZGVmaW5lZCkgJiYgZGVmYXVsdE9mZlwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWRlZmF1bHRcIj5EZWZhdWx0OiB7eyBkZWZhdWx0IH19PC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlEZWZhdWx0ICE9PSB1bmRlZmluZWQgJiYgZGVmYXVsdE9mZlwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWRlZmF1bHRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZGVmYXVsdFwiPjwvbmctY29udGVudD57eyBkZWZhdWx0IH19XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDwhLS0gbHktbGFiZWwgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvQm9vbGVhbihsYWJlbCk7IHRoZW4gX2lzTGFiZWxUZW1wbGF0ZTsgZWxzZSBsYWJlbENvbnRhaW5lclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjX2lzTGFiZWxUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJsYWJlbCAhPT0gdW5kZWZpbmVkXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZmxvYXQtbGFiZWxcIj57eyBsYWJlbCB9fTwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNsYWJlbENvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJseUxhYmVsXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktbGFiZWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImx5LWljb24tcmVxdWlyZWRcIiAqbmdJZj1cInJlcXVpcmVkXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJib3R0b20tZmllbGRcIiAqbmdJZj1cIiFfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPXN0YXJ0XSwgbHktaGludDpub3QobHktaGludFthbGlnbl0pXCI+PC9uZy1jb250ZW50PlxyXG4gIDxzcGFuIGNsYXNzPVwiYm90dG9tLWZpZWxkLXNwYWNlXCI+PC9zcGFuPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWhpbnRbYWxpZ249ZW5kXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJib3R0b20tZmllbGRcIiAqbmdJZj1cIl9pc0Vycm9yU3RhdGUoKVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWVycm9yXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktYWZ0ZXJcIj48L25nLWNvbnRlbnQ+XHJcbmAsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubHktaW5wdXQtaW52YWxpZF0nOiAnX2lzRXJyb3JTdGF0ZSgpJyxcbiAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctdG91Y2hlZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ0b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICdfc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpJyxcbiAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICdfc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpJyxcbiAgICAnW2NsYXNzLm5nLXZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcInZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wZW5kaW5nXSc6ICdfc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIiknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBfdmFsdWU6IGFueTtcbiAgX2VsZW1lbnRUeXBlOiAnaW5wdXQnIHwgJ3RleHRhcmVhJztcbiAgX2lucHV0Q29sb3IgPSAncHJpbWFyeSc7XG4gIGN1cnJlbnRWYWx1ZTogYW55O1xuICBwcml2YXRlIHBhbGV0dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VkID0gbmV3IEFycmF5PCh2YWx1ZTogYW55KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIHRvdWNoZWQgPSBuZXcgQXJyYXk8KCkgPT4gdm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZChMeUZpZWxkRGlyZWN0aXZlKSBfZmllbGQ6IEx5RmllbGREaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlcikgbHlQbGFjZWhvbGRlcjogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeURlZmF1bHQpIGx5RGVmYXVsdDogTHlEZWZhdWx0O1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIGx5TGFiZWw6IEx5TGFiZWw7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJc0Jvb2xlYW4oKSBsYWJlbEFib3ZlOiBib29sZWFuO1xuICBASW5wdXQoKSBkZWZhdWx0OiBzdHJpbmc7XG4gIF9lcnJvclN0YXRlOiBib29sZWFuO1xuICBwbGFjZWhvbGRlckNvbnRhaW5lcjogYW55O1xuICBsYWJlbENvbnRhaW5lcjogYW55O1xuICBmb2N1c1N0YXRlU3VzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgX2NsYXNzZXM6IHtcbiAgICBjYXJldENvbG9yPzogc3RyaW5nLFxuICAgIHdpdGhDb2xvcj86IHN0cmluZ1xuICB9ID0ge307XG4gIF93aXRoQ29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yKHZhbCk7XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktbGFiZWwtYWJvdmUnKVxuICBnZXQgaXNGbG9hdGluZ0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlIHx8IHRoaXMubGFiZWxBYm92ZSB8fCB0aGlzLmlzRGVmYXVsdCB8fCB0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXJTdGF0ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGUgJiYgdGhpcy5pc0Zsb2F0aW5nTGFiZWw7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1mb2N1cy1hY3RpdmUnKSBmb2N1c1N0YXRlOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWhpZGRlbi1pbnB1dCcpXG4gIGdldCBkZWZhdWx0T2ZmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0ICYmICF0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLmRpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQucmVxdWlyZWQ7IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LXZhbHVlLW9uJylcbiAgZ2V0IGN1cnJlbnRWYWx1ZVN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoYCR7dGhpcy5jdXJyZW50VmFsdWV9YCkubGVuZ3RoICE9PSAwICYmIHRoaXMuY3VycmVudFZhbHVlICE9IG51bGw7XG4gIH1cblxuICBfdmFsdWVCb29sZWFuKHZhbCkge1xuICAgIHJldHVybiAhKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCA9PT0gJycpO1xuICB9XG5cbiAgX2lzRXJyb3JTdGF0ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC50b3VjaGVkIHx8IHRoaXMuX2Vycm9yU3RhdGU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5fZXJyb3JTdGF0ZSA9IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZDtcbiAgfVxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBiY3I6IEx5Q29tbW9uLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnB1dENvbG9yID0gKCkgPT4gdGhpcy50aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgdGhpcy5fY2xhc3Nlcy5jYXJldENvbG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGlucHV0OmNhcmV0JHt2YWx9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBjYXJldC1jb2xvcjoke2lucHV0Q29sb3IoKX1gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuX2NsYXNzZXMud2l0aENvbG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGlucHV0OiR7dmFsfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgY29sb3I6JHtpbnB1dENvbG9yKCl9O2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuaW5wdXQudW5kZXJsaW5lfTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdG9Cb29sZWFuKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5wbGFjZWhvbGRlcikgfHwgISF0aGlzLmx5UGxhY2Vob2xkZXI7XG4gIH1cbiAgZ2V0IGlzRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZGVmYXVsdCkgfHwgISF0aGlzLmx5RGVmYXVsdDtcbiAgfVxuICBnZXQgaXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMubGFiZWwpIHx8ICEhdGhpcy5seUxhYmVsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDb2xvcih0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC53aXRoQ29sb3IpO1xuICAgIH1cbiAgICAvLyB0aGlzLl9pbnB1dENvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbiA9IHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChmU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNTdGF0ZSA9IGZTdGF0ZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fZmllbGQuX3BhcmVudCgpKSB7XG4gICAgICB0aGlzLl9maWVsZC5fcGFyZW50KCkubmdTdWJtaXQuc3Vic2NyaWJlKChzdWJtaXQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLl9maWVsZC5fbmdDb250cm9sICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGlzLl9lcnJvclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcmVzZXQgZXJyb3Igb2Ygc3VibWl0IHRvIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGlzRm9jdXNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmllbGQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTHlJbnB1dDogUmVxdWlyZSBpbnB1dCBuYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkRm9yd2FyZChwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmllbGQgPyB0aGlzLl9maWVsZC5fbmdDb250cm9sIDogbnVsbDtcbiAgICByZXR1cm4gY29udHJvbCAmJiAoY29udHJvbCBhcyBhbnkpW3Byb3BdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHQpIHtcbiAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCAmJiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlN1YmplY3QiLCJFbGVtZW50UmVmIiwiTmdDb250cm9sIiwiT3B0aW9uYWwiLCJTZWxmIiwiTmdGb3JtIiwiRm9ybUdyb3VwRGlyZWN0aXZlIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsInRvQm9vbGVhbiIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiTHlUaGVtZTIiLCJMeUNvbW1vbiIsIlJlbmRlcmVyMiIsIkNvbnRlbnRDaGlsZCIsIkhvc3RCaW5kaW5nIiwiSXNCb29sZWFuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSx3QkFvQzJCLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksT0FBTyxPQUFP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