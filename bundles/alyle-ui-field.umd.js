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
            label: __assign({}, ui.LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.field.labelColor, width: '100%' }),
            isFloatingLabel: {},
            floatingLabel: {
                '& {labelSpan}': {
                    fontSize: '75%'
                }
            },
            placeholder: __assign({}, ui.LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.field.labelColor }),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2lucHV0LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvbGFiZWwudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wbGFjZWhvbGRlci50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2hpbnQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wcmVmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9zdWZmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9maWVsZC50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2ZpZWxkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFNlbGYsIElucHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IEFUVFJfUExBQ0VIT0xERVIgPSAncGxhY2Vob2xkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGlucHV0LCBseS1maWVsZCA+IHRleHRhcmVhJyxcbiAgZXhwb3J0QXM6ICdseUlucHV0J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TmF0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGlnbm9yZSAqL1xuICBfaG9zdEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBfb25JbnB1dCgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5faG9zdEVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdEVsZW1lbnQudmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlXG4gICkge1xuICAgIHRoaXMuX2hvc3RFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9ob3N0RWxlbWVudCwgQVRUUl9QTEFDRUhPTERFUiwgJ8OCwq0nKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9ob3N0RWxlbWVudC5mb2N1cygpOyB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlIaW50IHsgfVxuIiwiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBQcmVmaXggdG8gYmUgcGxhY2VkIHRoZSBiZWZvcmUgb2YgdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5UHJlZml4XScsXG59KVxuZXhwb3J0IGNsYXNzIEx5UHJlZml4IHt9XG4iLCJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqIFN1ZmZpeCB0byBiZSBwbGFjZWQgdGhlIGFmdGVyIG9mIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVN1ZmZpeF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVN1ZmZpeCB7fVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIG1lcmdlRGVlcCwgRWxlbWVudE9ic2VydmVyLCBQbGF0Zm9ybSwgdG9Cb29sZWFuLCBEaXJBbGlhcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUlucHV0TmF0aXZlIH0gZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgeyBMeUxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQVBQRUFSQU5DRSA9ICdzdGFuZGFyZCc7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUUgPSB7XG4gIHN0YW5kYXJkOiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBwYWRkaW5nOiAnMWVtIDAgMCcsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgbWFyZ2luOiAnMC40Mzc1ZW0gMCdcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICBtYXJnaW46ICcwLjQzNzVlbSAwJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIG1hcmdpbjogJzAuNDM3NWVtIDAnXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjI1ZW0pJ1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMTI1XG4gICAgfSxcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYGZvbnQtc2l6ZSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfSxcbiAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZml4OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdTdGFydDoge30sXG4gICAgbGFiZWxDZW50ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ0VuZDoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBjb2xvcjogdGhlbWUuZmllbGQubGFiZWxDb2xvcixcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGlzRmxvYXRpbmdMYWJlbDoge30sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnNzUlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5maWVsZC5sYWJlbENvbG9yXG4gICAgfSxcbiAgICBmb2N1c2VkOiB7fSxcbiAgICBoaW50OiB7fSxcbiAgICBpbnB1dE5hdGl2ZToge1xuICAgICAgcmVzaXplOiAndmVydGljYWwnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH07XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmllbGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2lzRmxvYXRpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmxvYXRpbmdMYWJlbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9maWVsc2V0U3RhcnRDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2ZpZWxzZXRFbmRDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2ZpZWxzZXRTcGFuQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyMicpIF9sYWJlbENvbnRhaW5lcjI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxTcGFuJykgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInKSBfcHJlZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3N1ZmZpeENvbnRhaW5lcicpIF9zdWZmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfZmllbGRzZXRMZWdlbmQnKSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKEx5SW5wdXROYXRpdmUpIF9pbnB1dDogTHlJbnB1dE5hdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBfbGFiZWxDaGlsZDogTHlMYWJlbDtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUhpbnQpIF9oaW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUhpbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKEx5UHJlZml4KSBfcHJlZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlTdWZmaXgpIF9zdWZmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5U3VmZml4PjtcblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl93aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLndpdGhDb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfTphZnRlcmBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXToge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXToge1xuICAgICAgICAgICAgY2FyZXRDb2xvcjogY29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG5cbiAgLyoqIFRoZSBmaWVsZCBhcHBlYXJhbmNlIHN0eWxlLiAqL1xuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIGlmICghKHRoaXMuX3RoZW1lLmNvbmZpZy5maWVsZC5hcHBlYXJhbmNlW3ZhbF0gfHwgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FW3ZhbF0pKSAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuZmllbGQuYXBwZWFyYW5jZWApO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLmFwcGVhcmFuY2U6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gbWVyZ2VEZWVwKHt9LCB0aGVtZS5maWVsZC5hcHBlYXJhbmNlLmFueSwgdGhlbWUuZmllbGQuYXBwZWFyYW5jZVt2YWxdIHx8IERFRkFVTFRfQVBQRUFSQU5DRV9USEVNRVt2YWxdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXTogey4uLmFwcGVhcmFuY2UuY29udGFpbmVyfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnByZWZpeH1gXTogey4uLmFwcGVhcmFuY2UucHJlZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmluZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5pbmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5zdWZmaXh9YF06IHsuLi5hcHBlYXJhbmNlLnN1ZmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXTogey4uLmFwcGVhcmFuY2UuaW5wdXR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0fSxcbiAgICAgICAgICBbYCY6aG92ZXIgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEhvdmVyfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEZvY3VzZWR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMucGxhY2Vob2xkZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UucGxhY2Vob2xkZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UubGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbH0uJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHsuLi5hcHBlYXJhbmNlLmZsb2F0aW5nTGFiZWx9LFxuXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UuY29udGFpbmVyRm9jdXNlZFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50T2JzZXJ2ZXI6IEVsZW1lbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lucHV0Ll9ob3N0RWxlbWVudCwgdGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9pbnB1dC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5faW5wdXQubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLnN0YXJ0KTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuc3RhcnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmVuZCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmVuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMgZml4IHdpdGggb2YgbGFiZWxcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0KGVsOiBFbGVtZW50LCBmOiBEaXJBbGlhcykge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYHN0eWxlLnBhZGRpbmdTdGFydDoke3dpZHRofWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgbWFyZ2luLSR7Zn1gXTogYCR7d2lkdGh9cHhgXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmIChmID09PSBEaXJBbGlhcy5zdGFydCkge1xuICAgICAgdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZmllbGRzZXRMZWdlbmQubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9maWVsc2V0U3RhcnRDbGFzcyk7XG4gICAgICB0aGlzLl9maWVsc2V0U3RhcnRDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9maWVsZHNldExlZ2VuZC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2ZpZWxzZXRFbmRDbGFzcyk7XG5cbiAgICAgIHRoaXMuX2ZpZWxzZXRFbmRDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXRTcGFuKCkge1xuICAgIGxldCB7IHdpZHRoIH0gPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuX2lzRmxvYXRpbmcpIHtcbiAgICAgIHdpZHRoIC09IHdpZHRoIC8gMTAwICogMjU7XG4gICAgfVxuICAgIC8qKiBBZGQgNnB4IG9mIHNwYWNpbmcgKi9cbiAgICB3aWR0aCArPSA2O1xuICAgIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUuZmllbGRzZXRTcGFuRm9jdXNlZDoke3dpZHRofWAsIHtcbiAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWx9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHt3aWR0aDogYCR7d2lkdGh9cHhgfVxuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5faW5wdXQucGxhY2Vob2xkZXIgJiYgIXRoaXMuX2xhYmVsQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxDaGlsZCB8fCB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKCh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX2lucHV0LnBsYWNlaG9sZGVyKSB8fCAodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0VtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2lucHV0LnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsQ29udGFpbmVyMikge1xuICAgICAgY29uc3QgaXNGbG9hdGluZyA9IHRoaXMuX2lucHV0LmZvY3VzZWQgfHwgIXRoaXMuX2lzRW1wdHkoKSB8fCB0aGlzLmZsb2F0aW5nTGFiZWw7XG4gICAgICBpZiAodGhpcy5faXNGbG9hdGluZyAhPT0gaXNGbG9hdGluZykge1xuICAgICAgICB0aGlzLl9pc0Zsb2F0aW5nID0gaXNGbG9hdGluZztcbiAgICAgICAgaWYgKGlzRmxvYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0LmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5RmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IEx5SW5wdXROYXRpdmUgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUZpZWxkLFxuICAgIEx5UGxhY2Vob2xkZXIsXG4gICAgTHlMYWJlbCxcbiAgICBMeUlucHV0TmF0aXZlLFxuICAgIEx5UHJlZml4LFxuICAgIEx5U3VmZml4LFxuICAgIEx5SGludCxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTHlGaWVsZCwgTHlQbGFjZWhvbGRlciwgTHlMYWJlbCwgTHlJbnB1dE5hdGl2ZSwgTHlQcmVmaXgsIEx5U3VmZml4LCBMeUhpbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlN1YmplY3QiLCJ0b0Jvb2xlYW4iLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTmdDb250cm9sIiwiT3B0aW9uYWwiLCJTZWxmIiwiTmdGb3JtIiwiRm9ybUdyb3VwRGlyZWN0aXZlIiwiSG9zdExpc3RlbmVyIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIkxZX0NPTU1PTl9TVFlMRVMiLCJtZXJnZURlZXAiLCJQbGF0Zm9ybSIsIkRpckFsaWFzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRPYnNlcnZlciIsIkx5VGhlbWUyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJOZ1pvbmUiLCJWaWV3Q2hpbGQiLCJDb250ZW50Q2hpbGQiLCJDb250ZW50Q2hpbGRyZW4iLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzND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