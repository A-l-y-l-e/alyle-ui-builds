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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @ignore
     * @type {?}
     */
    var ATTR_PLACEHOLDER = 'placeholder';
    var LyInputNative = /** @class */ (function () {
        function LyInputNative(_el, _renderer, ngControl, _parentForm, _parentFormGroup) {
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLES = ({
        root: {
            display: 'block',
            fontSize: '.75em',
            marginTop: '8px'
        }
    });
    /**
     * Hint text to be shown underneath the field.
     */
    var LyHint = /** @class */ (function () {
        function LyHint(_renderer, _el, _theme) {
            /** @type {?} */
            var className = _theme.addStyleSheet(STYLES).root;
            _renderer.addClass(_el.nativeElement, className);
        }
        LyHint.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-field > ly-hint'
                    },] }
        ];
        /** @nocollapse */
        LyHint.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        return LyHint;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                marginBottom: '.5em',
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
                position: 'relative',
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
                width: '100%',
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
            inputNative: {
                resize: 'vertical',
                padding: 0,
                outline: 'none',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'inherit',
                font: 'inherit',
                width: '100%'
            },
            hint: {}
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
                        var appearance = ui.mergeDeep({}, theme.field.appearance.any, theme.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val]);
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
                            _a["& ." + _this.classes.hint] = __assign({}, appearance.hint),
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
         * @param {?} dir
         * @return {?}
         */
        LyField.prototype._updateFielset = /**
         * @param {?} el
         * @param {?} dir
         * @return {?}
         */
            function (el, dir) {
                var _this = this;
                var width = el.getBoundingClientRect().width;
                /** @type {?} */
                var newClass = this._theme.addStyle("fieldLegendstyle.margin" + dir + ":" + width, function () {
                    var _a, _b;
                    return (_a = {},
                        _a["& ." + _this.classes.fieldsetSpan + ", & ." + _this.classes.hint] = (_b = {},
                            _b["margin-" + dir] = width + "px",
                            _b),
                        _a);
                }, null, null, STYLE_PRIORITY);
                if (dir === ui.DirAlias.start) {
                    this._marginStartClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginStartClass);
                }
                else {
                    this._marginEndClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginEndClass);
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
                        template: "<div [className]=\"classes.container\" (click)=\"_input.focus()\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _isEmpty() && (_input.focused || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n</div>\n<div [className]=\"classes.hint\" *ngIf=\"_hintChildren.length\">\n  <ng-content select=\"ly-hint\"></ng-content>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_input.placeholder\">{{ _input.placeholder }}</ng-container>\n</ng-template>\n",
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2lucHV0LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvbGFiZWwudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wbGFjZWhvbGRlci50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2hpbnQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9wcmVmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9zdWZmaXgudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9maWVsZC50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2ZpZWxkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFNlbGYsIElucHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IEFUVFJfUExBQ0VIT0xERVIgPSAncGxhY2Vob2xkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGlucHV0LCBseS1maWVsZCA+IHRleHRhcmVhJyxcbiAgZXhwb3J0QXM6ICdseUlucHV0J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TmF0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGlnbm9yZSAqL1xuICBfaG9zdEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBfb25JbnB1dCgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5faG9zdEVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdEVsZW1lbnQudmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlXG4gICkge1xuICAgIHRoaXMuX2hvc3RFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9ob3N0RWxlbWVudCwgQVRUUl9QTEFDRUhPTERFUiwgJ8OCwq0nKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9ob3N0RWxlbWVudC5mb2N1cygpOyB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRVMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJy43NWVtJyxcbiAgICBtYXJnaW5Ub3A6ICc4cHgnXG4gIH1cbn0pO1xuXG4vKiogSGludCB0ZXh0IHRvIGJlIHNob3duIHVuZGVybmVhdGggdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUhpbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3RoZW1lOiBMeVRoZW1lMlxuICAgICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IF90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUykucm9vdDtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKiogUHJlZml4IHRvIGJlIHBsYWNlZCB0aGUgYmVmb3JlIG9mIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVByZWZpeF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVByZWZpeCB7fVxuIiwiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBTdWZmaXggdG8gYmUgcGxhY2VkIHRoZSBhZnRlciBvZiB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTdWZmaXhdJyxcbn0pXG5leHBvcnQgY2xhc3MgTHlTdWZmaXgge31cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE5nWm9uZVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfQ09NTU9OX1NUWUxFUywgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCBtZXJnZURlZXAsIEVsZW1lbnRPYnNlcnZlciwgUGxhdGZvcm0sIHRvQm9vbGVhbiwgRGlyQWxpYXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FID0ge1xuICBzdGFuZGFyZDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgcGFkZGluZzogJzFlbSAwIDAnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXJGb2N1c2VkOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lckxhYmVsSG92ZXI6IHtcbiAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIG1hcmdpbjogJzAuNDM3NWVtIDAnXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgbWFyZ2luOiAnMC40Mzc1ZW0gMCdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBtYXJnaW46ICcwLjQzNzVlbSAwJ1xuICAgIH0sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS4yNWVtKSdcbiAgICB9XG4gIH1cbn07XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAncHJpbWFyeSc7XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJy41ZW0nLFxuICAgICAgbGluZUhlaWdodDogMS4xMjVcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgZmllbGRzZXQ6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICB9LFxuICAgIGZpZWxkc2V0U3Bhbjoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGhlaWdodDogJzJweCdcbiAgICB9LFxuICAgIGxhYmVsU3Bhbjoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgbGFiZWxDb250YWluZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiB7fSxcbiAgICBsYWJlbENlbnRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nRW5kOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5maWVsZC5sYWJlbENvbG9yLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaXNGbG9hdGluZ0xhYmVsOiB7fSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgZm9udFNpemU6ICc3NSUnXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGZvY3VzZWQ6IHt9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICByZXNpemU6ICd2ZXJ0aWNhbCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaGludDogeyB9XG4gIH07XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmllbGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2lzRmxvYXRpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmxvYXRpbmdMYWJlbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZmllbHNldFNwYW5DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9tYXJnaW5TdGFydENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpbkVuZENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpZWxkc2V0TGVnZW5kQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyMicpIF9sYWJlbENvbnRhaW5lcjI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxTcGFuJykgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInKSBfcHJlZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3N1ZmZpeENvbnRhaW5lcicpIF9zdWZmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfZmllbGRzZXRMZWdlbmQnKSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKEx5SW5wdXROYXRpdmUpIF9pbnB1dDogTHlJbnB1dE5hdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBfbGFiZWxDaGlsZDogTHlMYWJlbDtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUhpbnQpIF9oaW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUhpbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKEx5UHJlZml4KSBfcHJlZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlTdWZmaXgpIF9zdWZmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5U3VmZml4PjtcblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl93aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLndpdGhDb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfTphZnRlcmBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXToge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXToge1xuICAgICAgICAgICAgY2FyZXRDb2xvcjogY29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG5cbiAgLyoqIFRoZSBmaWVsZCBhcHBlYXJhbmNlIHN0eWxlLiAqL1xuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIGlmICghKHRoaXMuX3RoZW1lLmNvbmZpZy5maWVsZC5hcHBlYXJhbmNlW3ZhbF0gfHwgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FW3ZhbF0pKSAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuZmllbGQuYXBwZWFyYW5jZWApO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLmFwcGVhcmFuY2U6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gbWVyZ2VEZWVwKHt9LCB0aGVtZS5maWVsZC5hcHBlYXJhbmNlLmFueSwgdGhlbWUuZmllbGQuYXBwZWFyYW5jZVt2YWxdIHx8IERFRkFVTFRfQVBQRUFSQU5DRV9USEVNRVt2YWxdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXTogey4uLmFwcGVhcmFuY2UuY29udGFpbmVyfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnByZWZpeH1gXTogey4uLmFwcGVhcmFuY2UucHJlZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmluZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5pbmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5zdWZmaXh9YF06IHsuLi5hcHBlYXJhbmNlLnN1ZmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXTogey4uLmFwcGVhcmFuY2UuaW5wdXR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0fSxcbiAgICAgICAgICBbYCY6aG92ZXIgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEhvdmVyfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEZvY3VzZWR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMucGxhY2Vob2xkZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UucGxhY2Vob2xkZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UubGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaGludH1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5oaW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWx9LiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7Li4uYXBwZWFyYW5jZS5mbG9hdGluZ0xhYmVsfSxcblxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmNvbnRhaW5lckZvY3VzZWRcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudE9ic2VydmVyOiBFbGVtZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9pbnB1dC5faG9zdEVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZSk7XG4gICAgdGhpcy5faW5wdXQuc3RhdGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMuX2lucHV0Lm5nQ29udHJvbDtcblxuICAgIC8vIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHJlZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcmVmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5zdGFydCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLnN0YXJ0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5lbmQpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5lbmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbFNwYW4pIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0aGlzIGZpeCB3aXRoIG9mIGxhYmVsXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldChlbDogRWxlbWVudCwgZGlyOiBEaXJBbGlhcykge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGZpZWxkTGVnZW5kc3R5bGUubWFyZ2luJHtkaXJ9OiR7d2lkdGh9YCwgKCkgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufSwgJiAuJHt0aGlzLmNsYXNzZXMuaGludH1gXToge1xuICAgICAgICBbYG1hcmdpbi0ke2Rpcn1gXTogYCR7d2lkdGh9cHhgXG4gICAgICB9XG4gICAgfSksIG51bGwsIG51bGwsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICBpZiAoZGlyID09PSBEaXJBbGlhcy5zdGFydCkge1xuICAgICAgdGhpcy5fbWFyZ2luU3RhcnRDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbWFyZ2luU3RhcnRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcmdpbkVuZENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5FbmRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldFNwYW4oKSB7XG4gICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghdGhpcy5faXNGbG9hdGluZykge1xuICAgICAgd2lkdGggLT0gd2lkdGggLyAxMDAgKiAyNTtcbiAgICB9XG4gICAgLyoqIEFkZCA2cHggb2Ygc3BhY2luZyAqL1xuICAgIHdpZHRoICs9IDY7XG4gICAgdGhpcy5fZmllbHNldFNwYW5DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5maWVsZHNldFNwYW5Gb2N1c2VkOiR7d2lkdGh9YCwge1xuICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge3dpZHRoOiBgJHt3aWR0aH1weGB9XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbHNldFNwYW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dC5wbGFjZWhvbGRlciAmJiAhdGhpcy5fbGFiZWxDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbENoaWxkIHx8IHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5faW5wdXQucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5faW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmxvYXRpbmdMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fbGFiZWxDb250YWluZXIyKSB7XG4gICAgICBjb25zdCBpc0Zsb2F0aW5nID0gdGhpcy5faW5wdXQuZm9jdXNlZCB8fCAhdGhpcy5faXNFbXB0eSgpIHx8IHRoaXMuZmxvYXRpbmdMYWJlbDtcbiAgICAgIGlmICh0aGlzLl9pc0Zsb2F0aW5nICE9PSBpc0Zsb2F0aW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRmxvYXRpbmcgPSBpc0Zsb2F0aW5nO1xuICAgICAgICBpZiAoaXNGbG9hdGluZykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXQuZm9jdXNlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5RmllbGQsXG4gICAgTHlQbGFjZWhvbGRlcixcbiAgICBMeUxhYmVsLFxuICAgIEx5SW5wdXROYXRpdmUsXG4gICAgTHlQcmVmaXgsXG4gICAgTHlTdWZmaXgsXG4gICAgTHlIaW50LFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyBMeUZpZWxkLCBMeVBsYWNlaG9sZGVyLCBMeUxhYmVsLCBMeUlucHV0TmF0aXZlLCBMeVByZWZpeCwgTHlTdWZmaXgsIEx5SGludCBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsInRvQm9vbGVhbiIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJOZ0NvbnRyb2wiLCJPcHRpb25hbCIsIlNlbGYiLCJOZ0Zvcm0iLCJGb3JtR3JvdXBEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJJbnB1dCIsIkhvc3RCaW5kaW5nIiwiTHlUaGVtZTIiLCJMWV9DT01NT05fU1RZTEVTIiwibWVyZ2VEZWVwIiwiUGxhdGZvcm0iLCJEaXJBbGlhcyIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50T2JzZXJ2ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nWm9uZSIsIlZpZXdDaGlsZCIsIkNvbnRlbnRDaGlsZCIsIkNvbnRlbnRD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