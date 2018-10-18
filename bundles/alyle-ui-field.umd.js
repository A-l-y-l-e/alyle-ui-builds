(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@alyle/ui'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/field', ['exports', '@angular/core', '@angular/forms', '@alyle/ui', 'rxjs', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.field = {}),global.ng.core,global.ng.forms,global.alyle.ui,global.rxjs,global.ng.common));
}(this, (function (exports,core,forms,ui,rxjs,common) { 'use strict';

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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ATTR_PLACEHOLDER = 'placeholder';
    var LyInputNative = /** @class */ (function () {
        function LyInputNative(_el, _renderer, _theme, /** @ignore */ ngControl, _parentForm, _parentFormGroup) {
            this._el = _el;
            this._renderer = _renderer;
            this._theme = _theme;
            this.ngControl = ngControl;
            this._disabled = false;
            this._required = false;
            this.valueChanges = new rxjs.Subject();
            this.focused = false;
            this._hostElement = this._el.nativeElement;
        }
        /**
         * @return {?}
         */
        LyInputNative.prototype._onInput = /**
         * @return {?}
         */
            function () {
                this.valueChanges.next();
            };
        /**
         * @return {?}
         */
        LyInputNative.prototype._onBlur = /**
         * @return {?}
         */
            function () {
                if (this.focused !== false) {
                    this.focused = false;
                    this.valueChanges.next();
                }
            };
        /**
         * @return {?}
         */
        LyInputNative.prototype._onFocus = /**
         * @return {?}
         */
            function () {
                if (this.focused !== true) {
                    this.focused = true;
                    this.valueChanges.next();
                }
            };
        Object.defineProperty(LyInputNative.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._hostElement.value;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.value) {
                    this._hostElement.value = val;
                    this.valueChanges.next();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInputNative.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = ui.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInputNative.prototype, "required", {
            get: /**
             * @return {?}
             */ function () { return this._required; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._required = ui.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyInputNative.prototype, "placeholder", {
            get: /**
             * @return {?}
             */ function () { return this._placeholder; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._placeholder = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyInputNative.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.placeholder) {
                    this._renderer.removeAttribute(this._hostElement, ATTR_PLACEHOLDER);
                }
            };
        /**
         * @return {?}
         */
        LyInputNative.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.valueChanges.complete();
            };
        /** Focuses the input. */
        /**
         * Focuses the input.
         * @return {?}
         */
        LyInputNative.prototype.focus = /**
         * Focuses the input.
         * @return {?}
         */
            function () { this._hostElement.focus(); };
        LyInputNative.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-field > input, ly-field > textarea',
                        exportAs: 'lyInput'
                    },] }
        ];
        /** @nocollapse */
        LyInputNative.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
                { type: forms.NgForm, decorators: [{ type: core.Optional }] },
                { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] }
            ];
        };
        LyInputNative.propDecorators = {
            _onInput: [{ type: core.HostListener, args: ['input',] }],
            _onBlur: [{ type: core.HostListener, args: ['blur',] }],
            _onFocus: [{ type: core.HostListener, args: ['focus',] }],
            value: [{ type: core.Input }],
            disabled: [{ type: core.HostBinding }, { type: core.Input }],
            required: [{ type: core.HostBinding }, { type: core.Input }],
            placeholder: [{ type: core.Input }]
        };
        return LyInputNative;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyLabel = /** @class */ (function () {
        function LyLabel() {
        }
        LyLabel.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-field > ly-label'
                    },] }
        ];
        return LyLabel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyPlaceholder = /** @class */ (function () {
        function LyPlaceholder() {
        }
        LyPlaceholder.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-field > ly-placeholder'
                    },] }
        ];
        return LyPlaceholder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Hint text to be shown underneath the field.
     */
    var LyHint = /** @class */ (function () {
        function LyHint() {
        }
        LyHint.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-field > ly-hint'
                    },] }
        ];
        return LyHint;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Prefix to be placed the before of the field.
     */
    var LyPrefix = /** @class */ (function () {
        function LyPrefix() {
        }
        LyPrefix.decorators = [
            { type: core.Directive, args: [{
                        selector: '[lyPrefix]',
                    },] }
        ];
        return LyPrefix;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Suffix to be placed the after of the field.
     */
    var LySuffix = /** @class */ (function () {
        function LySuffix() {
        }
        LySuffix.decorators = [
            { type: core.Directive, args: [{
                        selector: '[lySuffix]',
                    },] }
        ];
        return LySuffix;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_APPEARANCE = 'standard';
    /** @type {?} */
    var DEFAULT_WITH_COLOR = 'primary';
    /** @type {?} */
    var styles = function (theme) {
        return {
            root: {
                display: 'inline-block',
                position: 'relative',
                marginBottom: '1em',
                lineHeight: 1.125
            },
            container: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                '&:after': __assign({}, ui.LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: theme.input.borderColor })
            },
            fieldset: __assign({}, ui.LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.input.borderColor, borderWidth: 0 }),
            fieldsetSpan: {
                padding: 0
            },
            labelSpan: {
                maxWidth: '100%',
                display: 'inline-block',
                transition: "font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
            },
            prefix: {
                maxHeight: '2em',
                display: 'flex',
                alignItems: 'center',
                '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, ui.LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
            },
            infix: {
                display: 'inline-flex',
                position: 'relative',
                alignItems: 'baseline',
                '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, ui.LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
            },
            suffix: {
                maxHeight: '2em',
                display: 'flex',
                alignItems: 'center',
                '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, ui.LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
            },
            labelContainer: __assign({}, ui.LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.input.borderColor }),
            labelSpacingStart: {},
            labelCenter: {
                display: 'flex',
                maxWidth: '100%'
            },
            labelSpacingEnd: {
                flex: 1
            },
            label: __assign({}, ui.LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.input.label, width: '100%', transition: theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s" }),
            isFloatingLabel: {},
            floatingLabel: {
                '& {labelSpan}': {
                    fontSize: '75%'
                }
            },
            placeholder: __assign({}, ui.LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.input.label }),
            focused: {},
            hint: {},
            inputNative: {
                resize: 'vertical',
                padding: 0,
                outline: 'none',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'inherit',
                font: 'inherit',
                width: '100%'
            }
        };
    };
    var LyField = /** @class */ (function () {
        function LyField(_renderer, _el, _elementObserver, _theme, _cd, _ngZone) {
            this._renderer = _renderer;
            this._el = _el;
            this._elementObserver = _elementObserver;
            this._theme = _theme;
            this._cd = _cd;
            this._ngZone = _ngZone;
            /**
             * styles
             * @ignore
             */
            this.classes = this._theme.addStyleSheet(styles, 'ly-field', STYLE_PRIORITY);
            _renderer.addClass(_el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyField.prototype, "floatingLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._floatingLabel;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._floatingLabel = ui.toBoolean(val);
                this._updateFloatingLabel();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyField.prototype, "withColor", {
            get: /**
             * @return {?}
             */ function () {
                return this._withColor;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                var _this = this;
                if (val !== this._withColor) {
                    this._withColor = val;
                    this._withColorClass = this._theme.addStyle("ly-field.withColor:" + val, function (theme) {
                        var _a;
                        /** @type {?} */
                        var color = theme.colorOf(val);
                        return _a = {},
                            _a["&." + _this.classes.focused + " ." + _this.classes.container + ":after"] = {
                                color: color
                            },
                            _a["&." + _this.classes.focused + " ." + _this.classes.fieldset] = {
                                borderColor: color
                            },
                            _a["&." + _this.classes.focused + " ." + _this.classes.label] = {
                                color: color
                            },
                            _a["& ." + _this.classes.inputNative] = {
                                caretColor: color
                            },
                            _a;
                    }, this._el.nativeElement, this._withColorClass, STYLE_PRIORITY + 1);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyField.prototype, "appearance", {
            get: /**
             * @return {?}
             */ function () {
                return this._appearance;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                var _this = this;
                if (val !== this.appearance) {
                    this._appearance = val;
                    if (!( /** @type {?} */(this._theme.config.input)).appearance[val]) {
                        throw new Error(val + " not found in theme.input.appearance");
                    }
                    this._appearanceClass = this._theme.addStyle("ly-field.appearance:" + val, function (theme) {
                        var _a;
                        /** @type {?} */
                        var appearance = ui.mergeDeep({}, theme.input.appearance["any"], theme.input.appearance[val]);
                        return _a = {},
                            _a["& ." + _this.classes.container] = __assign({}, appearance.container),
                            _a["& ." + _this.classes.prefix] = __assign({}, appearance.prefix),
                            _a["& ." + _this.classes.infix] = __assign({}, appearance.infix),
                            _a["& ." + _this.classes.suffix] = __assign({}, appearance.suffix),
                            _a["& ." + _this.classes.inputNative] = __assign({}, appearance.input),
                            _a["& ." + _this.classes.fieldset] = __assign({}, appearance.fieldset),
                            _a["&:hover ." + _this.classes.fieldset] = __assign({}, appearance.fieldsetHover),
                            _a["&." + _this.classes.focused + " ." + _this.classes.fieldset] = __assign({}, appearance.fieldsetFocused),
                            _a["& ." + _this.classes.placeholder] = __assign({}, appearance.placeholder),
                            _a["& ." + _this.classes.label] = __assign({}, appearance.label),
                            _a["& ." + _this.classes.floatingLabel + "." + _this.classes.label] = __assign({}, appearance.floatingLabel),
                            _a["&." + _this.classes.focused + " ." + _this.classes.container] = __assign({}, appearance.containerFocused),
                            _a;
                    }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyField.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.withColor) {
                    this.withColor = DEFAULT_WITH_COLOR;
                }
                if (!this.appearance) {
                    this.appearance = DEFAULT_APPEARANCE;
                }
            };
        /**
         * @return {?}
         */
        LyField.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._renderer.addClass(this._input._hostElement, this.classes.inputNative);
                this._input.valueChanges.subscribe(function () {
                    _this._updateFloatingLabel();
                    _this._markForCheck();
                });
                /** @type {?} */
                var ngControl = this._input.ngControl;
                // Run change detection if the value changes.
                if (ngControl && ngControl.valueChanges) {
                    ngControl.valueChanges.subscribe(function () {
                        _this._updateFloatingLabel();
                        _this._markForCheck();
                    });
                }
            };
        /**
         * @return {?}
         */
        LyField.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._updateFloatingLabel();
                if (ui.Platform.isBrowser) {
                    this._ngZone.runOutsideAngular(function () {
                        if (_this._prefixContainer) {
                            /** @type {?} */
                            var el_1 = _this._prefixContainer.nativeElement;
                            _this._updateFielset(el_1, 'start');
                            _this._elementObserver.observe(el_1, function () {
                                _this._updateFielset(el_1, 'start');
                            });
                        }
                        if (_this._suffixContainer) {
                            /** @type {?} */
                            var el_2 = _this._suffixContainer.nativeElement;
                            _this._updateFielset(el_2, 'end');
                            _this._elementObserver.observe(el_2, function () {
                                _this._updateFielset(el_2, 'end');
                            });
                        }
                        if (_this._labelSpan) {
                            /** @type {?} */
                            var el = _this._labelSpan.nativeElement;
                            _this._updateFielsetSpan();
                            _this._elementObserver.observe(el, function () {
                                _this._updateFielsetSpan();
                            });
                        }
                    });
                }
            };
        /**
         * @param {?} el
         * @param {?} f
         * @return {?}
         */
        LyField.prototype._updateFielset = /**
         * @param {?} el
         * @param {?} f
         * @return {?}
         */
            function (el, f) {
                var width = el.getBoundingClientRect().width;
                /** @type {?} */
                var newClass = this._theme.addStyle("style.paddingStart:" + width, function (theme) {
                    var _a;
                    /** @type {?} */
                    var direction = theme.getDirection(f);
                    return _a = {},
                        _a["margin-" + direction] = width + "px",
                        _a;
                });
                if (f === 'start') {
                    this._theme.updateClass(this._fieldsetLegend.nativeElement, this._renderer, newClass, this._fielsetStartClass);
                    this._fielsetStartClass = newClass;
                }
                else {
                    this._theme.updateClass(this._fieldsetLegend.nativeElement, this._renderer, newClass, this._fielsetEndClass);
                    this._fielsetEndClass = newClass;
                }
            };
        /**
         * @return {?}
         */
        LyField.prototype._updateFielsetSpan = /**
         * @return {?}
         */
            function () {
                var _a;
                var width = this._labelSpan.nativeElement.getBoundingClientRect().width;
                if (!this._isFloating) {
                    width -= width / 100 * 25;
                }
                /** Add 6px of spacing */
                width += 6;
                this._fielsetSpanClass = this._theme.addStyle("style.fieldsetSpanFocused:" + width, (_a = {},
                    _a["&." + this.classes.isFloatingLabel + " ." + this.classes.fieldsetSpan] = { width: width + "px" },
                    _a), this._el.nativeElement, this._fielsetSpanClass, STYLE_PRIORITY);
            };
        /** @ignore */
        /**
         * @ignore
         * @return {?}
         */
        LyField.prototype._isLabel = /**
         * @ignore
         * @return {?}
         */
            function () {
                if (this._input.placeholder && !this._labelChild) {
                    return true;
                }
                else if (this._labelChild || this._placeholderChild) {
                    return true;
                }
                return false;
            };
        /** @ignore */
        /**
         * @ignore
         * @return {?}
         */
        LyField.prototype._isPlaceholder = /**
         * @ignore
         * @return {?}
         */
            function () {
                if ((this._labelChild && this._input.placeholder) || (this._labelChild && this._placeholderChild)) {
                    return true;
                }
                return false;
            };
        /** @ignore */
        /**
         * @ignore
         * @return {?}
         */
        LyField.prototype._isEmpty = /**
         * @ignore
         * @return {?}
         */
            function () {
                /** @type {?} */
                var val = this._input.value;
                return val === '' || val === null || val === undefined;
            };
        /**
         * @return {?}
         */
        LyField.prototype._updateFloatingLabel = /**
         * @return {?}
         */
            function () {
                if (this._labelContainer2) {
                    /** @type {?} */
                    var isFloating = this._input.focused || !this._isEmpty() || this.floatingLabel;
                    if (this._isFloating !== isFloating) {
                        this._isFloating = isFloating;
                        if (isFloating) {
                            this._renderer.addClass(this._labelContainer2.nativeElement, this.classes.floatingLabel);
                            this._renderer.addClass(this._el.nativeElement, this.classes.isFloatingLabel);
                        }
                        else {
                            this._renderer.removeClass(this._labelContainer2.nativeElement, this.classes.floatingLabel);
                            this._renderer.removeClass(this._el.nativeElement, this.classes.isFloatingLabel);
                        }
                    }
                }
                if (this._input.focused) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.focused);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.focused);
                }
            };
        /**
         * @return {?}
         */
        LyField.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this._cd.markForCheck();
            };
        LyField.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-field',
                        template: "<div [className]=\"classes.container\" (click)=\"_input.focus()\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _isEmpty() && (_input.focused || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.hint\"></div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_input.placeholder\">{{ _input.placeholder }}</ng-container>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        LyField.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.ElementObserver },
                { type: ui.LyTheme2 },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        LyField.propDecorators = {
            _labelContainer: [{ type: core.ViewChild, args: ['_labelContainer',] }],
            _labelContainer2: [{ type: core.ViewChild, args: ['_labelContainer2',] }],
            _labelSpan: [{ type: core.ViewChild, args: ['_labelSpan',] }],
            _prefixContainer: [{ type: core.ViewChild, args: ['_prefixContainer',] }],
            _suffixContainer: [{ type: core.ViewChild, args: ['_suffixContainer',] }],
            _fieldsetLegend: [{ type: core.ViewChild, args: ['_fieldsetLegend',] }],
            _input: [{ type: core.ContentChild, args: [LyInputNative,] }],
            _placeholderChild: [{ type: core.ContentChild, args: [LyPlaceholder,] }],
            _labelChild: [{ type: core.ContentChild, args: [LyLabel,] }],
            _hintChildren: [{ type: core.ContentChildren, args: [LyHint,] }],
            _prefixChildren: [{ type: core.ContentChildren, args: [LyPrefix,] }],
            _suffixChildren: [{ type: core.ContentChildren, args: [LySuffix,] }],
            floatingLabel: [{ type: core.Input }],
            withColor: [{ type: core.Input }],
            appearance: [{ type: core.Input }]
        };
        return LyField;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyFieldModule = /** @class */ (function () {
        function LyFieldModule() {
        }
        LyFieldModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ui.LyCommonModule
                        ],
                        exports: [
                            LyField,
                            LyPlaceholder,
                            LyLabel,
                            LyInputNative,
                            LyPrefix,
                            LySuffix,
                            LyHint,
                            ui.LyCommonModule
                        ],
                        declarations: [LyField, LyPlaceholder, LyLabel, LyInputNative, LyPrefix, LySuffix, LyHint]
                    },] }
        ];
        return LyFieldModule;
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

    exports.LyField = LyField;
    exports.LyFieldModule = LyFieldModule;
    exports.ɵd = LyHint;
    exports.ɵa = LyInputNative;
    exports.ɵc = LyLabel;
    exports.ɵb = LyPlaceholder;
    exports.ɵe = LyPrefix;
    exports.ɵf = LySuffix;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2lucHV0LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvbGFiZWwudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wbGFjZWhvbGRlci50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2hpbnQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wcmVmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9zdWZmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9maWVsZC50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2ZpZWxkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFNlbGYsIElucHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IEFUVFJfUExBQ0VIT0xERVIgPSAncGxhY2Vob2xkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGlucHV0LCBseS1maWVsZCA+IHRleHRhcmVhJyxcbiAgZXhwb3J0QXM6ICdseUlucHV0J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TmF0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGlnbm9yZSAqL1xuICBfaG9zdEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSB2YWx1ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBfb25JbnB1dCgpIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5faG9zdEVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdEVsZW1lbnQudmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIC8qKiBAaWdub3JlICovXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICkge1xuICAgIHRoaXMuX2hvc3RFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5faG9zdEVsZW1lbnQsIEFUVFJfUExBQ0VIT0xERVIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9ob3N0RWxlbWVudC5mb2N1cygpOyB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlIaW50IHsgfVxuIiwiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBQcmVmaXggdG8gYmUgcGxhY2VkIHRoZSBiZWZvcmUgb2YgdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5UHJlZml4XScsXG59KVxuZXhwb3J0IGNsYXNzIEx5UHJlZml4IHt9XG4iLCJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqIFN1ZmZpeCB0byBiZSBwbGFjZWQgdGhlIGFmdGVyIG9mIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVN1ZmZpeF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVN1ZmZpeCB7fVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIG1lcmdlRGVlcCwgRWxlbWVudE9ic2VydmVyLCBQbGF0Zm9ybSwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SW5wdXROYXRpdmUgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeVByZWZpeCB9IGZyb20gJy4vcHJlZml4JztcbmltcG9ydCB7IEx5U3VmZml4IH0gZnJvbSAnLi9zdWZmaXgnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFID0gJ3N0YW5kYXJkJztcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMTI1XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpZWxkc2V0OiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgfSxcbiAgICBmaWVsZHNldFNwYW46IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuICAgIGxhYmVsU3Bhbjoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdHJhbnNpdGlvbjogYGZvbnQtc2l6ZSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgIH0sXG4gICAgcHJlZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgaW5maXg6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgbGFiZWxDb250YWluZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiB7fSxcbiAgICBsYWJlbENlbnRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nRW5kOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5pbnB1dC5sYWJlbCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9c2BcbiAgICB9LFxuICAgIGlzRmxvYXRpbmdMYWJlbDoge30sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnNzUlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5pbnB1dC5sYWJlbFxuICAgIH0sXG4gICAgZm9jdXNlZDoge30sXG4gICAgaGludDoge30sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIHJlc2l6ZTogJ3ZlcnRpY2FsJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9O1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseS1maWVsZCcsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9pc0Zsb2F0aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Zsb2F0aW5nTGFiZWw6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmllbHNldFN0YXJ0Q2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9maWVsc2V0RW5kQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9maWVsc2V0U3BhbkNsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicpIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcjInKSBfbGFiZWxDb250YWluZXIyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsU3BhbicpIF9sYWJlbFNwYW46IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfcHJlZml4Q29udGFpbmVyJykgX3ByZWZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19zdWZmaXhDb250YWluZXInKSBfc3VmZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2ZpZWxkc2V0TGVnZW5kJykgX2ZpZWxkc2V0TGVnZW5kOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZChMeUlucHV0TmF0aXZlKSBfaW5wdXQ6IEx5SW5wdXROYXRpdmU7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlcikgX3BsYWNlaG9sZGVyQ2hpbGQ6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgX2xhYmVsQ2hpbGQ6IEx5TGFiZWw7XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlIaW50KSBfaGludENoaWxkcmVuOiBRdWVyeUxpc3Q8THlIaW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVByZWZpeCkgX3ByZWZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlQcmVmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5U3VmZml4KSBfc3VmZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVN1ZmZpeD47XG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3dpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQud2l0aENvbG9yOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9OmFmdGVyYF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlfWBdOiB7XG4gICAgICAgICAgICBjYXJldENvbG9yOiBjb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIGlmICghKHRoaXMuX3RoZW1lLmNvbmZpZy5pbnB1dCBhcyBhbnkpLmFwcGVhcmFuY2VbdmFsXSkgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLmlucHV0LmFwcGVhcmFuY2VgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC5hcHBlYXJhbmNlOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IG1lcmdlRGVlcCh7fSwgdGhlbWUuaW5wdXQuYXBwZWFyYW5jZS5hbnksIHRoZW1lLmlucHV0LmFwcGVhcmFuY2VbdmFsXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHsuLi5hcHBlYXJhbmNlLmNvbnRhaW5lcn0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5wcmVmaXh9YF06IHsuLi5hcHBlYXJhbmNlLnByZWZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbmZpeH1gXTogey4uLmFwcGVhcmFuY2UuaW5maXh9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuc3VmZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5zdWZmaXh9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHsuLi5hcHBlYXJhbmNlLmlucHV0fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldH0sXG4gICAgICAgICAgW2AmOmhvdmVyIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXTogey4uLmFwcGVhcmFuY2UuZmllbGRzZXRIb3Zlcn0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXTogey4uLmFwcGVhcmFuY2UuZmllbGRzZXRGb2N1c2VkfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnBsYWNlaG9sZGVyfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLnBsYWNlaG9sZGVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmxhYmVsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWx9LiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7Li4uYXBwZWFyYW5jZS5mbG9hdGluZ0xhYmVsfSxcblxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmNvbnRhaW5lckZvY3VzZWRcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudE9ic2VydmVyOiBFbGVtZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9pbnB1dC5faG9zdEVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZSk7XG4gICAgdGhpcy5faW5wdXQudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMuX2lucHV0Lm5nQ29udHJvbDtcblxuICAgIC8vIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHJlZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcmVmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCAnc3RhcnQnKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgJ2VuZCcpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCAnZW5kJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldChlbDogRWxlbWVudCwgZjogJ3N0YXJ0JyB8ICdlbmQnKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUucGFkZGluZ1N0YXJ0OiR7d2lkdGh9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhlbWUuZ2V0RGlyZWN0aW9uKGYpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2BtYXJnaW4tJHtkaXJlY3Rpb259YF06IGAke3dpZHRofXB4YFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAoZiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZmllbGRzZXRMZWdlbmQubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9maWVsc2V0U3RhcnRDbGFzcyk7XG4gICAgICB0aGlzLl9maWVsc2V0U3RhcnRDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9maWVsZHNldExlZ2VuZC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2ZpZWxzZXRFbmRDbGFzcyk7XG5cbiAgICAgIHRoaXMuX2ZpZWxzZXRFbmRDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXRTcGFuKCkge1xuICAgIGxldCB7IHdpZHRoIH0gPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuX2lzRmxvYXRpbmcpIHtcbiAgICAgIHdpZHRoIC09IHdpZHRoIC8gMTAwICogMjU7XG4gICAgfVxuICAgIC8qKiBBZGQgNnB4IG9mIHNwYWNpbmcgKi9cbiAgICB3aWR0aCArPSA2O1xuICAgIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUuZmllbGRzZXRTcGFuRm9jdXNlZDoke3dpZHRofWAsIHtcbiAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWx9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHt3aWR0aDogYCR7d2lkdGh9cHhgfVxuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5faW5wdXQucGxhY2Vob2xkZXIgJiYgIXRoaXMuX2xhYmVsQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxDaGlsZCB8fCB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKCh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX2lucHV0LnBsYWNlaG9sZGVyKSB8fCAodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0VtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2lucHV0LnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsQ29udGFpbmVyMikge1xuICAgICAgY29uc3QgaXNGbG9hdGluZyA9IHRoaXMuX2lucHV0LmZvY3VzZWQgfHwgIXRoaXMuX2lzRW1wdHkoKSB8fCB0aGlzLmZsb2F0aW5nTGFiZWw7XG4gICAgICBpZiAodGhpcy5faXNGbG9hdGluZyAhPT0gaXNGbG9hdGluZykge1xuICAgICAgICB0aGlzLl9pc0Zsb2F0aW5nID0gaXNGbG9hdGluZztcbiAgICAgICAgaWYgKGlzRmxvYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0LmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5RmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IEx5SW5wdXROYXRpdmUgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUZpZWxkLFxuICAgIEx5UGxhY2Vob2xkZXIsXG4gICAgTHlMYWJlbCxcbiAgICBMeUlucHV0TmF0aXZlLFxuICAgIEx5UHJlZml4LFxuICAgIEx5U3VmZml4LFxuICAgIEx5SGludCxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTHlGaWVsZCwgTHlQbGFjZWhvbGRlciwgTHlMYWJlbCwgTHlJbnB1dE5hdGl2ZSwgTHlQcmVmaXgsIEx5U3VmZml4LCBMeUhpbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlN1YmplY3QiLCJ0b0Jvb2xlYW4iLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlUaGVtZTIiLCJOZ0NvbnRyb2wiLCJPcHRpb25hbCIsIlNlbGYiLCJOZ0Zvcm0iLCJGb3JtR3JvdXBEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJJbnB1dCIsIkhvc3RCaW5kaW5nIiwiTFlfQ09NTU9OX1NUWUxFUyIsIm1lcmdlRGVlcCIsIlBsYXRmb3JtIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRPYnNlcnZlciIsIkNoYW5nZURldGVjdG9yUmVmIiwiTmdab25lIiwiVmlld0NoaWxkIiwiQ29udGVudENoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWixDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUE7Ozs7OztBQ3RDRDtJQUtBLElBQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDOztRQW9FckMsdUJBQ1UsS0FDQSxXQUNBLHVCQUVtQixTQUFvQixFQUNuQyxXQUFtQixFQUNuQixnQkFBb0M7WUFOeEMsUUFBRyxHQUFILEdBQUc7WUFDSCxjQUFTLEdBQVQsU0FBUztZQUNULFdBQU0sR0FBTixNQUFNO1lBRWEsY0FBUyxHQUFULFNBQVMsQ0FBVztZQWhFakQsaUJBQXNCLEtBQUss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