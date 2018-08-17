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
     * @suppress {checkTypes} checked by tsc
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
     * @suppress {checkTypes} checked by tsc
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
                // const oldState = this.errorState;
                var /** @type {?} */ parent = this._parentFormGroup || this._parentForm;
                // const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
                var /** @type {?} */ control = this._ngControl ? /** @type {?} */ (this._ngControl.control) : null;
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
                { type: core.ElementRef, },
                { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self },] },
                { type: forms.NgForm, decorators: [{ type: core.Optional },] },
                { type: forms.FormGroupDirective, decorators: [{ type: core.Optional },] },
                { type: core.ChangeDetectorRef, },
            ];
        };
        LyFieldDirective.propDecorators = {
            "type": [{ type: core.Input },],
            "focus": [{ type: core.HostListener, args: ['focus', ['true'],] },],
            "_blur": [{ type: core.HostListener, args: ['blur', ['false'],] },],
            "_noop": [{ type: core.HostListener, args: ['input',] },],
            "disabled": [{ type: core.Input },],
            "required": [{ type: core.Input },],
        };
        return LyFieldDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
                var /** @type {?} */ inputColor = function () { return _this.theme.colorOf(val); };
                this._classes.caretColor = this.theme.setUpStyle("input:caret" + val, {
                    '': function () {
                        return ("caret-color:" + inputColor());
                    }
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
                var /** @type {?} */ control = this._field ? this._field._ngControl : null;
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
                        styles: [":host{display:inline-block;position:relative;align-items:center}:host /deep/ ly-after,:host /deep/ ly-before{display:inline-block;vertical-align:inherit}:host /deep/ input,:host /deep/ textarea{border:none;outline:0;font-family:inherit;color:inherit;background:0 0;font-size:inherit;width:100%;font-weight:400;padding:0;display:inline-flex}:host.ly-default-off .ly-input-default,:host.ly-hidden-input /deep/ .ly-input-container input,:host.ly-hidden-input /deep/ .ly-input-container textarea{opacity:0}:host.ly-focus-active .ly-input-underline:after{width:100%}:host.ly-focus-active .ly-input-top-label,:host.ly-focus-active /deep/ ly-top-label{font-size:75%;top:0;-webkit-transform:translate(0,0);transform:translate(0,0)}:host.ly-focus-active .ly-input-default{opacity:0}:host.ly-value-on .ly-input-placeholder{opacity:0}.ly-input-underline{position:absolute;bottom:.875em;height:1px;right:0;left:0}.ly-input-underline:after{content:'';position:absolute;width:0%;height:2px;background:currentColor;left:0;right:0;margin:0 auto;bottom:0;transition:all 450ms cubic-bezier(.23,1,.32,1) 0s}.ly-input-underline.ly-disabled{background:0/4px 1px repeat-x;background-image:linear-gradient(to right,#b4b4b4 0,#b4b4b4 33%,transparent 0);border-top:0}.ly-input-underline.ly-disabled:after{width:0%}:host.ly-label-above .ly-input-float-label{font-size:75%;top:0}.ly-input-default,.ly-input-float-label,.ly-input-placeholder{pointer-events:none;position:absolute;bottom:1.125em;top:1.125em;margin:auto;font-size:100%;transition:all 375ms cubic-bezier(.23,1,.32,1);color:inherit;width:100%}.ly-input-content{width:100%;position:relative;display:flex;color:currentColor}.ly-input-container{padding:1.125em 0;position:relative;opacity:1;display:inline-block;vertical-align:inherit;width:100%}.ly-input-container ::ng-deep input{text-align:inherit}.bottom-field,.ly-error-container{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;font-size:75%;-webkit-transform:translate3d(0,calc(100% - 1.1em),0);transform:translate3d(0,calc(100% - 1.1em),0);display:flex}.bottom-field .bottom-field-space,.ly-error-container .bottom-field-space{flex:1}.ly-required{position:absolute;top:1.125em;right:0;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:.45}:host.ly-input-invalid .ly-input-float-label,:host.ly-input-invalid .ly-input-placeholder,:host.ly-input-invalid .ly-input-underline,:host.ly-input-invalid /deep/ ly-error{color:#f44336!important}:host.ly-input-invalid .ly-input-underline:after{width:100%}"],
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
                { type: ui.LyTheme2, },
                { type: core.ChangeDetectorRef, },
                { type: ui.LyCommon, decorators: [{ type: core.Optional },] },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
            ];
        };
        LyInput.propDecorators = {
            "_field": [{ type: core.ContentChild, args: [LyFieldDirective,] },],
            "lyPlaceholder": [{ type: core.ContentChild, args: [LyPlaceholder,] },],
            "lyDefault": [{ type: core.ContentChild, args: [LyDefault,] },],
            "lyLabel": [{ type: core.ContentChild, args: [LyLabel,] },],
            "type": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "labelAbove": [{ type: core.Input },],
            "default": [{ type: core.Input },],
            "withColor": [{ type: core.Input },],
            "isFloatingLabel": [{ type: core.HostBinding, args: ['class.ly-label-above',] },],
            "focusState": [{ type: core.HostBinding, args: ['class.ly-focus-active',] },],
            "defaultOff": [{ type: core.HostBinding, args: ['class.ly-hidden-input',] },],
            "disabled": [{ type: core.Input },],
            "required": [{ type: core.Input },],
            "currentValueState": [{ type: core.HostBinding, args: ['class.ly-value-on',] },],
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbHktYmVmb3JlLWlucHV0LCBseS1hZnRlci1pbnB1dCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5SW5wdXRDb250ZW50cyB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJzY3JpYmVyICwgIFN1YmplY3QgLCAgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRGlyZWN0aXZlLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFNlbGYsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEZvcm1zTW9kdWxlLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0NvbnRyb2wsIE5nRm9ybSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dENvbnRlbnRzIH0gZnJvbSAnLi9pbnB1dC1jb250ZW50cyc7XG5pbXBvcnQgeyBMeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9seS1maWVsZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0LCBseS1iZWZvcmUsIGx5LWFmdGVyLCBseS1pbnB1dCBseS1lcnJvciwgbHktaW5wdXQgbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dENvbW1vbiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0J1xufSlcbmV4cG9ydCBjbGFzcyBMeURlZmF1bHQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwge31cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZXh0LWZpZWxkLCBseS1pbnB1dCwgbHktdGV4dGFyZWEnLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC9kZWVwLyBseS1hZnRlciw6aG9zdCAvZGVlcC8gbHktYmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9Omhvc3QgL2RlZXAvIGlucHV0LDpob3N0IC9kZWVwLyB0ZXh0YXJlYXtib3JkZXI6bm9uZTtvdXRsaW5lOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0Lmx5LWRlZmF1bHQtb2ZmIC5seS1pbnB1dC1kZWZhdWx0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciBpbnB1dCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7b3BhY2l0eTowfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC10b3AtbGFiZWwsOmhvc3QubHktZm9jdXMtYWN0aXZlIC9kZWVwLyBseS10b3AtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC1kZWZhdWx0e29wYWNpdHk6MH06aG9zdC5seS12YWx1ZS1vbiAubHktaW5wdXQtcGxhY2Vob2xkZXJ7b3BhY2l0eTowfS5seS1pbnB1dC11bmRlcmxpbmV7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi44NzVlbTtoZWlnaHQ6MXB4O3JpZ2h0OjA7bGVmdDowfS5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2xlZnQ6MDtyaWdodDowO21hcmdpbjowIGF1dG87Ym90dG9tOjA7dHJhbnNpdGlvbjphbGwgNDUwbXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwc30ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVke2JhY2tncm91bmQ6MC80cHggMXB4IHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNiNGI0YjQgMCwjYjRiNGI0IDMzJSx0cmFuc3BhcmVudCAwKTtib3JkZXItdG9wOjB9Lmx5LWlucHV0LXVuZGVybGluZS5seS1kaXNhYmxlZDphZnRlcnt3aWR0aDowJX06aG9zdC5seS1sYWJlbC1hYm92ZSAubHktaW5wdXQtZmxvYXQtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MH0ubHktaW5wdXQtZGVmYXVsdCwubHktaW5wdXQtZmxvYXQtbGFiZWwsLmx5LWlucHV0LXBsYWNlaG9sZGVye3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEuMTI1ZW07dG9wOjEuMTI1ZW07bWFyZ2luOmF1dG87Zm9udC1zaXplOjEwMCU7dHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtjb2xvcjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRlbnR7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7Y29sb3I6Y3VycmVudENvbG9yfS5seS1pbnB1dC1jb250YWluZXJ7cGFkZGluZzoxLjEyNWVtIDA7cG9zaXRpb246cmVsYXRpdmU7b3BhY2l0eToxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXQ7d2lkdGg6MTAwJX0ubHktaW5wdXQtY29udGFpbmVyIDo6bmctZGVlcCBpbnB1dHt0ZXh0LWFsaWduOmluaGVyaXR9LmJvdHRvbS1maWVsZCwubHktZXJyb3ItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7Zm9udC1zaXplOjc1JTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGMoMTAwJSAtIDEuMWVtKSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7ZGlzcGxheTpmbGV4fS5ib3R0b20tZmllbGQgLmJvdHRvbS1maWVsZC1zcGFjZSwubHktZXJyb3ItY29udGFpbmVyIC5ib3R0b20tZmllbGQtc3BhY2V7ZmxleDoxfS5seS1yZXF1aXJlZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MS4xMjVlbTtyaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eTouNDV9Omhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtZmxvYXQtbGFiZWwsOmhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtdW5kZXJsaW5lLDpob3N0Lmx5LWlucHV0LWludmFsaWQgL2RlZXAvIGx5LWVycm9ye2NvbG9yOiNmNDQzMzYhaW1wb3J0YW50fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZTphZnRlcnt3aWR0aDoxMDAlfWBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWJlZm9yZVwiPjwvbmctY29udGVudD5cclxuPGRpdiBjbGFzcz1cInt7IF9jbGFzc2VzLndpdGhDb2xvciB9fSBseS1pbnB1dC11bmRlcmxpbmVcIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImx5LWlucHV0LWNvbnRhaW5lciB7eyBfY2xhc3Nlcy5jYXJldENvbG9yIH19XCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaW5wdXQsIHRleHRhcmVhXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gbHktcGxhY2Vob2xkZXIgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBsYWNlaG9sZGVyOyB0aGVuIGlzUGxhY2Vob2xkZXJUZW1wbGF0ZTsgZWxzZSBwbGFjZWhvbGRlckNvbnRhaW5lclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXNQbGFjZWhvbGRlclRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cInRvQm9vbGVhbihwbGFjZWhvbGRlcikgIT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlclN0YXRlXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtcGxhY2Vob2xkZXJcIj57eyBwbGFjZWhvbGRlciB9fTwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNwbGFjZWhvbGRlckNvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJseVBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXBsYWNlaG9sZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWRlZmF1bHQgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvQm9vbGVhbihkZWZhdWx0KTsgdGhlbiBpc0RlZmF1bHRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXNEZWZhdWx0VGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIShseURlZmF1bHQgIT09IHVuZGVmaW5lZCkgJiYgZGVmYXVsdE9mZlwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWRlZmF1bHRcIj5EZWZhdWx0OiB7eyBkZWZhdWx0IH19PC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlEZWZhdWx0ICE9PSB1bmRlZmluZWQgJiYgZGVmYXVsdE9mZlwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWRlZmF1bHRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZGVmYXVsdFwiPjwvbmctY29udGVudD57eyBkZWZhdWx0IH19XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDwhLS0gbHktbGFiZWwgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvQm9vbGVhbihsYWJlbCk7IHRoZW4gX2lzTGFiZWxUZW1wbGF0ZTsgZWxzZSBsYWJlbENvbnRhaW5lclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjX2lzTGFiZWxUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJsYWJlbCAhPT0gdW5kZWZpbmVkXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZmxvYXQtbGFiZWxcIj57eyBsYWJlbCB9fTwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNsYWJlbENvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJseUxhYmVsXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktbGFiZWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImx5LWljb24tcmVxdWlyZWRcIiAqbmdJZj1cInJlcXVpcmVkXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJib3R0b20tZmllbGRcIiAqbmdJZj1cIiFfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPXN0YXJ0XSwgbHktaGludDpub3QobHktaGludFthbGlnbl0pXCI+PC9uZy1jb250ZW50PlxyXG4gIDxzcGFuIGNsYXNzPVwiYm90dG9tLWZpZWxkLXNwYWNlXCI+PC9zcGFuPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWhpbnRbYWxpZ249ZW5kXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJib3R0b20tZmllbGRcIiAqbmdJZj1cIl9pc0Vycm9yU3RhdGUoKVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWVycm9yXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktYWZ0ZXJcIj48L25nLWNvbnRlbnQ+XHJcbmAsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubHktaW5wdXQtaW52YWxpZF0nOiAnX2lzRXJyb3JTdGF0ZSgpJyxcbiAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctdG91Y2hlZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ0b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICdfc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpJyxcbiAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICdfc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpJyxcbiAgICAnW2NsYXNzLm5nLXZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcInZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wZW5kaW5nXSc6ICdfc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIiknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBfdmFsdWU6IGFueTtcbiAgX2VsZW1lbnRUeXBlOiAnaW5wdXQnIHwgJ3RleHRhcmVhJztcbiAgX2lucHV0Q29sb3IgPSAncHJpbWFyeSc7XG4gIGN1cnJlbnRWYWx1ZTogYW55O1xuICBwcml2YXRlIHBhbGV0dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VkID0gbmV3IEFycmF5PCh2YWx1ZTogYW55KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIHRvdWNoZWQgPSBuZXcgQXJyYXk8KCkgPT4gdm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZChMeUZpZWxkRGlyZWN0aXZlKSBfZmllbGQ6IEx5RmllbGREaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlcikgbHlQbGFjZWhvbGRlcjogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeURlZmF1bHQpIGx5RGVmYXVsdDogTHlEZWZhdWx0O1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIGx5TGFiZWw6IEx5TGFiZWw7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJc0Jvb2xlYW4oKSBsYWJlbEFib3ZlOiBib29sZWFuO1xuICBASW5wdXQoKSBkZWZhdWx0OiBzdHJpbmc7XG4gIF9lcnJvclN0YXRlOiBib29sZWFuO1xuICBwbGFjZWhvbGRlckNvbnRhaW5lcjogYW55O1xuICBsYWJlbENvbnRhaW5lcjogYW55O1xuICBmb2N1c1N0YXRlU3VzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgX2NsYXNzZXM6IHtcbiAgICBjYXJldENvbG9yPzogc3RyaW5nLFxuICAgIHdpdGhDb2xvcj86IHN0cmluZ1xuICB9ID0ge307XG4gIF93aXRoQ29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yKHZhbCk7XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktbGFiZWwtYWJvdmUnKVxuICBnZXQgaXNGbG9hdGluZ0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlIHx8IHRoaXMubGFiZWxBYm92ZSB8fCB0aGlzLmlzRGVmYXVsdCB8fCB0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXJTdGF0ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGUgJiYgdGhpcy5pc0Zsb2F0aW5nTGFiZWw7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1mb2N1cy1hY3RpdmUnKSBmb2N1c1N0YXRlOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWhpZGRlbi1pbnB1dCcpXG4gIGdldCBkZWZhdWx0T2ZmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0ICYmICF0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLmRpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQucmVxdWlyZWQ7IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LXZhbHVlLW9uJylcbiAgZ2V0IGN1cnJlbnRWYWx1ZVN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoYCR7dGhpcy5jdXJyZW50VmFsdWV9YCkubGVuZ3RoICE9PSAwICYmIHRoaXMuY3VycmVudFZhbHVlICE9IG51bGw7XG4gIH1cblxuICBfdmFsdWVCb29sZWFuKHZhbCkge1xuICAgIHJldHVybiAhKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCA9PT0gJycpO1xuICB9XG5cbiAgX2lzRXJyb3JTdGF0ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC50b3VjaGVkIHx8IHRoaXMuX2Vycm9yU3RhdGU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5fZXJyb3JTdGF0ZSA9IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZDtcbiAgfVxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBiY3I6IEx5Q29tbW9uLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnB1dENvbG9yID0gKCkgPT4gdGhpcy50aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgdGhpcy5fY2xhc3Nlcy5jYXJldENvbG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGlucHV0OmNhcmV0JHt2YWx9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBjYXJldC1jb2xvcjoke2lucHV0Q29sb3IoKX1gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuX2NsYXNzZXMud2l0aENvbG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGlucHV0OiR7dmFsfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgY29sb3I6JHtpbnB1dENvbG9yKCl9O2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuaW5wdXQudW5kZXJsaW5lfTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdG9Cb29sZWFuKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5wbGFjZWhvbGRlcikgfHwgISF0aGlzLmx5UGxhY2Vob2xkZXI7XG4gIH1cbiAgZ2V0IGlzRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZGVmYXVsdCkgfHwgISF0aGlzLmx5RGVmYXVsdDtcbiAgfVxuICBnZXQgaXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMubGFiZWwpIHx8ICEhdGhpcy5seUxhYmVsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDb2xvcih0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC53aXRoQ29sb3IpO1xuICAgIH1cbiAgICAvLyB0aGlzLl9pbnB1dENvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbiA9IHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChmU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNTdGF0ZSA9IGZTdGF0ZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fZmllbGQuX3BhcmVudCgpKSB7XG4gICAgICB0aGlzLl9maWVsZC5fcGFyZW50KCkubmdTdWJtaXQuc3Vic2NyaWJlKChzdWJtaXQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLl9maWVsZC5fbmdDb250cm9sICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGlzLl9lcnJvclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcmVzZXQgZXJyb3Igb2Ygc3VibWl0IHRvIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGlzRm9jdXNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmllbGQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTHlJbnB1dDogUmVxdWlyZSBpbnB1dCBuYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkRm9yd2FyZChwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmllbGQgPyB0aGlzLl9maWVsZC5fbmdDb250cm9sIDogbnVsbDtcbiAgICByZXR1cm4gY29udHJvbCAmJiAoY29udHJvbCBhcyBhbnkpW3Byb3BdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHQpIHtcbiAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCAmJiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlN1YmplY3QiLCJFbGVtZW50UmVmIiwiTmdDb250cm9sIiwiT3B0aW9uYWwiLCJTZWxmIiwiTmdGb3JtIiwiRm9ybUdyb3VwRGlyZWN0aXZlIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsInRvQm9vbGVhbiIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiTHlUaGVtZTIiLCJMeUNvbW1vbiIsIlJlbmRlcmVyMiIsIkNvbnRlbnRDaGlsZCIsIkhvc3RCaW5kaW5nIiwiSXNCb29sZWFuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7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