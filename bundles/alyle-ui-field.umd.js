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
    /** *
     * @ignore
      @type {?} */
    var ATTR_PLACEHOLDER = 'placeholder';
    var LyInputNative = /** @class */ (function () {
        function LyInputNative(_el, _renderer, /** @ignore */ ngControl, _parentForm, _parentFormGroup) {
            this._el = _el;
            this._renderer = _renderer;
            this.ngControl = ngControl;
            this._disabled = false;
            this._required = false;
            this.stateChanges = new rxjs.Subject();
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
                this.stateChanges.next();
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
                    this.stateChanges.next();
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
                    this.stateChanges.next();
                }
            };
        Object.defineProperty(LyInputNative.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._hostElement.value;
            },
            /** @ignore */
            set: /**
             * @ignore
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.value) {
                    this._hostElement.value = val;
                    this.stateChanges.next();
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
            /** Whether the input is disabled. */
            set: /**
             * Whether the input is disabled.
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
                this._renderer.setAttribute(this._hostElement, ATTR_PLACEHOLDER, '­');
            };
        /**
         * @return {?}
         */
        LyInputNative.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.stateChanges.complete();
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
    var DEFAULT_APPEARANCE_THEME = {
        standard: {
            container: {
                padding: '1em 0 0',
                '&:after': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px'
                },
                '&:hover:after': {
                    borderBottomColor: 'currentColor'
                }
            },
            containerFocused: {
                '&:after': {
                    borderWidth: '2px',
                    borderColor: 'currentColor'
                }
            },
            containerLabelHover: {
                color: 'currentColor'
            },
            label: {
                margin: '0.4375em 0'
            },
            placeholder: {
                margin: '0.4375em 0'
            },
            input: {
                margin: '0.4375em 0'
            },
            floatingLabel: {
                transform: 'translateY(-1.25em)'
            }
        }
    };
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
            animations: {
                '& {labelSpan}': {
                    transition: "font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
                },
                '& {label}': {
                    transition: theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
                }
            },
            container: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                '&:after': __assign({}, ui.LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: theme.field.borderColor })
            },
            fieldset: __assign({}, ui.LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.field.borderColor, borderWidth: 0 }),
            fieldsetSpan: {
                padding: 0,
                height: '2px'
            },
            labelSpan: {
                maxWidth: '100%',
                display: 'inline-block'
            },
            prefix: {
                maxHeight: '2em',
                display: 'flex',
                alignItems: 'center',
                '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, ui.LY_COMMON_STYLES.fill, { borderColor: theme.field.borderColor })
            },
            infix: {
                display: 'inline-flex',
                position: 'relative',
                alignItems: 'baseline',
                '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, ui.LY_COMMON_STYLES.fill, { borderColor: theme.field.borderColor })
            },
            suffix: {
                maxHeight: '2em',
                display: 'flex',
                alignItems: 'center',
                '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, ui.LY_COMMON_STYLES.fill, { borderColor: theme.field.borderColor })
            },
            labelContainer: __assign({}, ui.LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.field.borderColor }),
            labelSpacingStart: {},
            labelCenter: {
                display: 'flex',
                maxWidth: '100%'
            },
            labelSpacingEnd: {
                flex: 1
            },
            label: __assign({}, ui.LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.input.label, width: '100%' }),
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
            this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
            _renderer.addClass(_el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyField.prototype, "floatingLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._floatingLabel;
            },
            /** Whether the label is floating. */
            set: /**
             * Whether the label is floating.
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
            /** Theme color for the component. */
            set: /**
             * Theme color for the component.
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
            /** The field appearance style. */
            set: /**
             * The field appearance style.
             * @param {?} val
             * @return {?}
             */ function (val) {
                var _this = this;
                if (val !== this.appearance) {
                    this._appearance = val;
                    if (!(this._theme.config.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val])) {
                        throw new Error(val + " not found in theme.field.appearance");
                    }
                    this._appearanceClass = this._theme.addStyle("ly-field.appearance:" + val, function (theme) {
                        var _a;
                        /** @type {?} */
                        var appearance = ui.mergeDeep({}, theme.field.appearance["any"], theme.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val]);
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
                this._input.stateChanges.subscribe(function () {
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
                            _this._updateFielset(el_1, ui.DirAlias.start);
                            _this._elementObserver.observe(el_1, function () {
                                _this._updateFielset(el_1, ui.DirAlias.start);
                            });
                        }
                        if (_this._suffixContainer) {
                            /** @type {?} */
                            var el_2 = _this._suffixContainer.nativeElement;
                            _this._updateFielset(el_2, ui.DirAlias.end);
                            _this._elementObserver.observe(el_2, function () {
                                _this._updateFielset(el_2, ui.DirAlias.end);
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
                // this fix with of label
                this._renderer.addClass(this._el.nativeElement, this.classes.animations);
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
                    return _a = {},
                        _a["margin-" + f] = width + "px",
                        _a;
                });
                if (f === ui.DirAlias.start) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2lucHV0LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvbGFiZWwudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wbGFjZWhvbGRlci50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2hpbnQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wcmVmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9zdWZmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9maWVsZC50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2ZpZWxkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFNlbGYsIElucHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IEFUVFJfUExBQ0VIT0xERVIgPSAncGxhY2Vob2xkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGlucHV0LCBseS1maWVsZCA+IHRleHRhcmVhJyxcbiAgZXhwb3J0QXM6ICdseUlucHV0J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TmF0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGlnbm9yZSAqL1xuICBfaG9zdEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBfb25JbnB1dCgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5faG9zdEVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdEVsZW1lbnQudmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlXG4gICkge1xuICAgIHRoaXMuX2hvc3RFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9ob3N0RWxlbWVudCwgQVRUUl9QTEFDRUhPTERFUiwgJ8OCwq0nKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9ob3N0RWxlbWVudC5mb2N1cygpOyB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlIaW50IHsgfVxuIiwiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBQcmVmaXggdG8gYmUgcGxhY2VkIHRoZSBiZWZvcmUgb2YgdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5UHJlZml4XScsXG59KVxuZXhwb3J0IGNsYXNzIEx5UHJlZml4IHt9XG4iLCJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqIFN1ZmZpeCB0byBiZSBwbGFjZWQgdGhlIGFmdGVyIG9mIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVN1ZmZpeF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVN1ZmZpeCB7fVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIG1lcmdlRGVlcCwgRWxlbWVudE9ic2VydmVyLCBQbGF0Zm9ybSwgdG9Cb29sZWFuLCBEaXJBbGlhcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUlucHV0TmF0aXZlIH0gZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgeyBMeUxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQVBQRUFSQU5DRSA9ICdzdGFuZGFyZCc7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUUgPSB7XG4gIHN0YW5kYXJkOiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBwYWRkaW5nOiAnMWVtIDAgMCcsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgbWFyZ2luOiAnMC40Mzc1ZW0gMCdcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICBtYXJnaW46ICcwLjQzNzVlbSAwJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIG1hcmdpbjogJzAuNDM3NWVtIDAnXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjI1ZW0pJ1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMTI1XG4gICAgfSxcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYGZvbnQtc2l6ZSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfSxcbiAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZml4OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdTdGFydDoge30sXG4gICAgbGFiZWxDZW50ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ0VuZDoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBjb2xvcjogdGhlbWUuaW5wdXQubGFiZWwsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBpc0Zsb2F0aW5nTGFiZWw6IHt9LFxuICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBmb250U2l6ZTogJzc1JSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUuaW5wdXQubGFiZWxcbiAgICB9LFxuICAgIGZvY3VzZWQ6IHt9LFxuICAgIGhpbnQ6IHt9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICByZXNpemU6ICd2ZXJ0aWNhbCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICdmaWVsZC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaXNGbG9hdGluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9mbG9hdGluZ0xhYmVsOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2ZpZWxzZXRTdGFydENsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZmllbHNldEVuZENsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZmllbHNldFNwYW5DbGFzczogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXIyJykgX2xhYmVsQ29udGFpbmVyMjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbFNwYW4nKSBfbGFiZWxTcGFuOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3ByZWZpeENvbnRhaW5lcicpIF9wcmVmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfc3VmZml4Q29udGFpbmVyJykgX3N1ZmZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19maWVsZHNldExlZ2VuZCcpIF9maWVsZHNldExlZ2VuZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoTHlJbnB1dE5hdGl2ZSkgX2lucHV0OiBMeUlucHV0TmF0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIF9wbGFjZWhvbGRlckNoaWxkOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIF9sYWJlbENoaWxkOiBMeUxhYmVsO1xuICBAQ29udGVudENoaWxkcmVuKEx5SGludCkgX2hpbnRDaGlsZHJlbjogUXVlcnlMaXN0PEx5SGludD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlQcmVmaXgpIF9wcmVmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5UHJlZml4PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVN1ZmZpeCkgX3N1ZmZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlTdWZmaXg+O1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBsYWJlbCBpcyBmbG9hdGluZy4gKi9cbiAgQElucHV0KClcbiAgc2V0IGZsb2F0aW5nTGFiZWwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxvYXRpbmdMYWJlbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdMYWJlbDtcbiAgfVxuXG4gIC8qKiBUaGVtZSBjb2xvciBmb3IgdGhlIGNvbXBvbmVudC4gKi9cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3dpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQud2l0aENvbG9yOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9OmFmdGVyYF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlfWBdOiB7XG4gICAgICAgICAgICBjYXJldENvbG9yOiBjb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cblxuICAvKiogVGhlIGZpZWxkIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgaWYgKCEodGhpcy5fdGhlbWUuY29uZmlnLmZpZWxkLmFwcGVhcmFuY2VbdmFsXSB8fCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUVbdmFsXSkpICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5maWVsZC5hcHBlYXJhbmNlYCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuYXBwZWFyYW5jZToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSBtZXJnZURlZXAoe30sIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2UuYW55LCB0aGVtZS5maWVsZC5hcHBlYXJhbmNlW3ZhbF0gfHwgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FW3ZhbF0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7Li4uYXBwZWFyYW5jZS5jb250YWluZXJ9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMucHJlZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5wcmVmaXh9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5maXh9YF06IHsuLi5hcHBlYXJhbmNlLmluZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnN1ZmZpeH1gXTogey4uLmFwcGVhcmFuY2Uuc3VmZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlfWBdOiB7Li4uYXBwZWFyYW5jZS5pbnB1dH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXTogey4uLmFwcGVhcmFuY2UuZmllbGRzZXR9LFxuICAgICAgICAgIFtgJjpob3ZlciAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0SG92ZXJ9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0Rm9jdXNlZH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5wbGFjZWhvbGRlcn1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5wbGFjZWhvbGRlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5sYWJlbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsfS4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXTogey4uLmFwcGVhcmFuY2UuZmxvYXRpbmdMYWJlbH0sXG5cbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5jb250YWluZXJGb2N1c2VkXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FwcGVhcmFuY2VDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRPYnNlcnZlcjogRWxlbWVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IERFRkFVTFRfQVBQRUFSQU5DRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faW5wdXQuX2hvc3RFbGVtZW50LCB0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuICAgIHRoaXMuX2lucHV0LnN0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLl9pbnB1dC5uZ0NvbnRyb2w7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuc3RhcnQpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5zdGFydCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuZW5kKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuZW5kKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcyBmaXggd2l0aCBvZiBsYWJlbFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXQoZWw6IEVsZW1lbnQsIGY6IERpckFsaWFzKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUucGFkZGluZ1N0YXJ0OiR7d2lkdGh9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2BtYXJnaW4tJHtmfWBdOiBgJHt3aWR0aH1weGBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgaWYgKGYgPT09IERpckFsaWFzLnN0YXJ0KSB7XG4gICAgICB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9maWVsZHNldExlZ2VuZC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2ZpZWxzZXRTdGFydENsYXNzKTtcbiAgICAgIHRoaXMuX2ZpZWxzZXRTdGFydENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2ZpZWxkc2V0TGVnZW5kLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZmllbHNldEVuZENsYXNzKTtcblxuICAgICAgdGhpcy5fZmllbHNldEVuZENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldFNwYW4oKSB7XG4gICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghdGhpcy5faXNGbG9hdGluZykge1xuICAgICAgd2lkdGggLT0gd2lkdGggLyAxMDAgKiAyNTtcbiAgICB9XG4gICAgLyoqIEFkZCA2cHggb2Ygc3BhY2luZyAqL1xuICAgIHdpZHRoICs9IDY7XG4gICAgdGhpcy5fZmllbHNldFNwYW5DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5maWVsZHNldFNwYW5Gb2N1c2VkOiR7d2lkdGh9YCwge1xuICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge3dpZHRoOiBgJHt3aWR0aH1weGB9XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbHNldFNwYW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dC5wbGFjZWhvbGRlciAmJiAhdGhpcy5fbGFiZWxDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbENoaWxkIHx8IHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5faW5wdXQucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5faW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmxvYXRpbmdMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fbGFiZWxDb250YWluZXIyKSB7XG4gICAgICBjb25zdCBpc0Zsb2F0aW5nID0gdGhpcy5faW5wdXQuZm9jdXNlZCB8fCAhdGhpcy5faXNFbXB0eSgpIHx8IHRoaXMuZmxvYXRpbmdMYWJlbDtcbiAgICAgIGlmICh0aGlzLl9pc0Zsb2F0aW5nICE9PSBpc0Zsb2F0aW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRmxvYXRpbmcgPSBpc0Zsb2F0aW5nO1xuICAgICAgICBpZiAoaXNGbG9hdGluZykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXQuZm9jdXNlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5RmllbGQsXG4gICAgTHlQbGFjZWhvbGRlcixcbiAgICBMeUxhYmVsLFxuICAgIEx5SW5wdXROYXRpdmUsXG4gICAgTHlQcmVmaXgsXG4gICAgTHlTdWZmaXgsXG4gICAgTHlIaW50LFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyBMeUZpZWxkLCBMeVBsYWNlaG9sZGVyLCBMeUxhYmVsLCBMeUlucHV0TmF0aXZlLCBMeVByZWZpeCwgTHlTdWZmaXgsIEx5SGludCBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsInRvQm9vbGVhbiIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJOZ0NvbnRyb2wiLCJPcHRpb25hbCIsIlNlbGYiLCJOZ0Zvcm0iLCJGb3JtR3JvdXBEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJJbnB1dCIsIkhvc3RCaW5kaW5nIiwiTFlfQ09NTU9OX1NUWUxFUyIsIm1lcmdlRGVlcCIsIlBsYXRmb3JtIiwiRGlyQWxpYXMiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiRWxlbWVudE9ic2VydmVyIiwiTHlUaGVtZTIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nWm9uZSIsIlZpZXdDaGlsZCIsIkNvbnRlbnRDaGlsZCIsIkNvbnRlbnRDaGlsZHJlbiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFB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