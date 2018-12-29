(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/field', ['exports', '@angular/core', '@alyle/ui', 'rxjs', '@angular/forms', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.field = {}),global.ng.core,global.ly.core,global.rxjs,global.ng.forms,global.ng.common));
}(this, (function (exports,core,ui,rxjs,forms,common) { 'use strict';

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
    var STYLES = function (theme) {
        return {
            root: {
                display: 'inline-block',
                position: 'relative',
                marginBottom: '.5em',
                lineHeight: 1.125,
                '& {hint}, & {error}': {
                    display: 'block',
                    fontSize: '.75em',
                    marginTop: '8px'
                },
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
                alignItems: 'center'
            },
            infix: {
                display: 'inline-flex',
                position: 'relative',
                alignItems: 'baseline',
                width: '100%'
            },
            suffix: {
                maxHeight: '2em',
                display: 'flex',
                alignItems: 'center'
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
            hintContainer: {
                display: 'flex',
                flex: '1 0 auto',
                maxWidth: '100%',
                overflow: 'hidden',
                justifyContent: 'space-between'
            },
            disabled: {
                '&, & {label}, & {container}:after': {
                    color: theme.disabled.contrast,
                    cursor: 'default'
                }
            },
            hint: null,
            error: null,
            errorState: {
                '& {label}, & {hintContainer}': {
                    color: theme.warn.default + "!important"
                },
                '& {fieldset}, & {container}:after': {
                    borderColor: theme.warn.default + "!important"
                },
                '& {inputNative}': {
                    caretColor: theme.warn.default + "!important"
                },
                // hidde all hints except after hint
                '& {hintContainer} ly-hint:last-child': {
                    display: 'none'
                }
            }
        };
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * LyHint
     * @type {?}
     */
    var STYLE_PRIORITY = -2;
    /**
     * Hint text to be shown underneath the field.
     */
    var LyHint = /** @class */ (function () {
        function LyHint(_renderer, _el, _theme) {
            this._renderer = _renderer;
            this._el = _el;
            this._theme = _theme;
            /** @type {?} */
            var className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).hint;
            _renderer.addClass(_el.nativeElement, className);
        }
        Object.defineProperty(LyHint.prototype, "align", {
            get: /**
             * @return {?}
             */ function () {
                return this._align;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.invertPlacement(( /** @type {?} */(val)));
                if (val) {
                    this._alignClass = this._theme.addStyle("lyHint.align:" + val, function () {
                        var _a;
                        return (_a = {},
                            _a["margin-" + newVal] = 'auto',
                            _a);
                    }, this._el.nativeElement, this._alignClass, STYLE_PRIORITY);
                }
                else if (this._alignClass) {
                    this._renderer.removeClass(this._el.nativeElement, this._alignClass);
                    this._alignClass = null;
                }
                this._align = val;
            },
            enumerable: true,
            configurable: true
        });
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
        LyHint.propDecorators = {
            align: [{ type: core.Input }]
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
    var STYLE_PRIORITY$1 = -2;
    /** @type {?} */
    var DEFAULT_APPEARANCE = 'standard';
    /** @type {?} */
    var DEFAULT_APPEARANCE_THEME = {
        standard: {
            root: {
                '&:not({disabled}) {container}:hover:after': {
                    borderBottomColor: 'currentColor'
                },
                '&{disabled} {container}:after': {
                    borderBottomStyle: 'dotted',
                    borderColor: 'inherit'
                }
            },
            container: {
                padding: '1em 0 0',
                '&:after': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px'
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
                alignItems: 'center'
            },
            infix: {
                display: 'inline-flex',
                position: 'relative',
                alignItems: 'baseline',
                width: '100%'
            },
            suffix: {
                maxHeight: '2em',
                display: 'flex',
                alignItems: 'center'
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
            hint: {
                display: 'flex',
                flex: '1 0 auto',
                maxWidth: '100%',
                overflow: 'hidden',
                justifyContent: 'space-between'
            },
            disabled: {
                '&, & {label}, & {container}:after': {
                    color: theme.disabled.contrast,
                    cursor: 'default'
                }
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
             * \@docs-private
             */
            this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY$1);
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
        Object.defineProperty(LyField.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            /** Theme color for the component. */
            set: /**
             * Theme color for the component.
             * @param {?} val
             * @return {?}
             */ function (val) {
                var _this = this;
                if (val !== this._color) {
                    this._color = val;
                    this._colorClass = this._theme.addStyle("ly-field.color:" + val, function (theme) {
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
                    }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY$1 + 1);
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
                        var appearance = ui.mergeDeep({}, theme.field.appearance.base, theme.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val]);
                        /** @type {?} */
                        var classes = _this.classes;
                        return _a = {
                            '&': __assign({}, appearance.root)
                        },
                            _a["& ." + classes.container] = __assign({}, appearance.container),
                            _a["& ." + classes.prefix] = __assign({}, appearance.prefix),
                            _a["& ." + classes.infix] = __assign({}, appearance.infix),
                            _a["& ." + classes.suffix] = __assign({}, appearance.suffix),
                            _a["& ." + classes.inputNative] = __assign({}, appearance.input),
                            _a["& ." + classes.fieldset] = __assign({}, appearance.fieldset),
                            _a["& ." + classes.placeholder] = __assign({}, appearance.placeholder),
                            _a["& ." + classes.label] = __assign({}, appearance.label),
                            _a["& ." + classes.hint] = __assign({}, appearance.hint),
                            _a["& ." + classes.floatingLabel + "." + classes.label] = __assign({}, appearance.floatingLabel),
                            _a["&." + classes.focused + " ." + classes.container] = __assign({}, appearance.containerFocused),
                            _a;
                    }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY$1, styles);
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
                if (!this.color) {
                    this.color = DEFAULT_WITH_COLOR;
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
                            _this._updateFielset(el_1, ui.DirAlias.before);
                            _this._elementObserver.observe(el_1, function () {
                                _this._updateFielset(el_1, ui.DirAlias.before);
                            });
                        }
                        if (_this._suffixContainer) {
                            /** @type {?} */
                            var el_2 = _this._suffixContainer.nativeElement;
                            _this._updateFielset(el_2, ui.DirAlias.after);
                            _this._elementObserver.observe(el_2, function () {
                                _this._updateFielset(el_2, ui.DirAlias.after);
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
                        _a["& ." + _this.classes.fieldsetSpan] = (_b = {},
                            _b["margin-" + dir] = width + "px",
                            _b),
                        _a);
                }, null, null, STYLE_PRIORITY$1);
                if (dir === ui.DirAlias.before) {
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
                    _a), this._el.nativeElement, this._fielsetSpanClass, STYLE_PRIORITY$1);
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
        /**
         * @return {?}
         */
        LyField.prototype._getHostElement = /**
         * @return {?}
         */
            function () {
                return this._el.nativeElement;
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
            _input: [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyInputNative; }),] }],
            _placeholderChild: [{ type: core.ContentChild, args: [LyPlaceholder,] }],
            _labelChild: [{ type: core.ContentChild, args: [LyLabel,] }],
            _hintChildren: [{ type: core.ContentChildren, args: [LyHint,] }],
            _prefixChildren: [{ type: core.ContentChildren, args: [LyPrefix,] }],
            _suffixChildren: [{ type: core.ContentChildren, args: [LySuffix,] }],
            floatingLabel: [{ type: core.Input }],
            color: [{ type: core.Input }],
            appearance: [{ type: core.Input }]
        };
        return LyField;
    }());
    var LyInputNative = /** @class */ (function () {
        function LyInputNative(_el, _renderer, _field, ngControl, _parentForm, _parentFormGroup) {
            this._el = _el;
            this._renderer = _renderer;
            this._field = _field;
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
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this._disabled) {
                    this._disabled = ui.toBoolean(val);
                    if (!val && this._hasDisabledClass) {
                        this._renderer.removeClass(this._field._getHostElement(), this._field.classes.disabled);
                        this._hasDisabledClass = null;
                    }
                    else if (val) {
                        this._renderer.addClass(this._field._getHostElement(), this._field.classes.disabled);
                        this._hasDisabledClass = true;
                    }
                }
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
                var _this = this;
                this._renderer.setAttribute(this._hostElement, 'placeholder', '­');
                /** @type {?} */
                var ngControl = this.ngControl;
                // update styles on disabled
                if (ngControl) {
                    ngControl.statusChanges.subscribe(function () {
                        _this.disabled = ngControl.disabled;
                    });
                }
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
                        selector: 'input[lyInput], textarea[lyInput]',
                        exportAs: 'lyInput'
                    },] }
        ];
        /** @nocollapse */
        LyInputNative.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyField },
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
    /**
     * LyError
     * @type {?}
     */
    var STYLE_PRIORITY$2 = -2;
    var LyError = /** @class */ (function () {
        function LyError(renderer, el, _theme) {
            this._theme = _theme;
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY$2);
            /** @type {?} */
            var className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY$2).error;
            renderer.addClass(el.nativeElement, className);
        }
        LyError.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-error'
                    },] }
        ];
        /** @nocollapse */
        LyError.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        return LyError;
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
                            LyError,
                            ui.LyCommonModule
                        ],
                        declarations: [LyField, LyPlaceholder, LyLabel, LyInputNative, LyPrefix, LySuffix, LyHint, LyError]
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
    exports.LyInputNative = LyInputNative;
    exports.LyFieldModule = LyFieldModule;
    exports.ɵf = LyError;
    exports.ɵc = LyHint;
    exports.ɵb = LyLabel;
    exports.ɵa = LyPlaceholder;
    exports.ɵd = LyPrefix;
    exports.ɵe = LySuffix;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2xhYmVsLnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvcGxhY2Vob2xkZXIudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9oaW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvcHJlZml4LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvc3VmZml4LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvZmllbGQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9lcnJvci50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2ZpZWxkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIgeyB9XG4iLCJpbXBvcnQgeyBUaGVtZVZhcmlhYmxlcywgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5Cb3R0b206ICcuNWVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMTI1LFxuICAgICAgJyYge2hpbnR9LCAmIHtlcnJvcn0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGZvbnRTaXplOiAnLjc1ZW0nLFxuICAgICAgICBtYXJnaW5Ub3A6ICc4cHgnXG4gICAgICB9LFxuICAgIH0sXG4gICAgYW5pbWF0aW9uczoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246IGBmb250LXNpemUgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9c2BcbiAgICAgIH0sXG4gICAgICAnJiB7bGFiZWx9Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9c2BcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBsYWJlbENvbnRhaW5lcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nU3RhcnQ6IHt9LFxuICAgIGxhYmVsQ2VudGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdFbmQ6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3IsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBpc0Zsb2F0aW5nTGFiZWw6IHt9LFxuICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBmb250U2l6ZTogJzc1JSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUuZmllbGQubGFiZWxDb2xvclxuICAgIH0sXG4gICAgZm9jdXNlZDoge30sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIHJlc2l6ZTogJ3ZlcnRpY2FsJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBoaW50Q29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICAnJiwgJiB7bGFiZWx9LCAmIHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3QsXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBoaW50OiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGVycm9yU3RhdGU6IHtcbiAgICAgICcmIHtsYWJlbH0sICYge2hpbnRDb250YWluZXJ9Jzoge1xuICAgICAgICBjb2xvcjogYCR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnRgXG4gICAgICB9LFxuICAgICAgJyYge2ZpZWxkc2V0fSwgJiB7Y29udGFpbmVyfTphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgICcmIHtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgIGNhcmV0Q29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgIC8vIGhpZGRlIGFsbCBoaW50cyBleGNlcHQgYWZ0ZXIgaGludFxuICAgICAgJyYge2hpbnRDb250YWluZXJ9IGx5LWhpbnQ6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGludmVydFBsYWNlbWVudCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTVFlMRVMgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEx5SGludEFsaWduID0gJ2JlZm9yZScgfCAnYWZ0ZXInO1xuXG4vKiogTHlIaW50ICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogSGludCB0ZXh0IHRvIGJlIHNob3duIHVuZGVybmVhdGggdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUhpbnQge1xuICBwcml2YXRlIF9hbGlnbjogTHlIaW50QWxpZ247XG4gIHByaXZhdGUgX2FsaWduQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGFsaWduKHZhbDogTHlIaW50QWxpZ24pIHtcbiAgICBjb25zdCBuZXdWYWwgPSBpbnZlcnRQbGFjZW1lbnQodmFsIGFzIGFueSk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlIaW50LmFsaWduOiR7dmFsfWAsXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgW2BtYXJnaW4tJHtuZXdWYWx9YF06ICdhdXRvJ1xuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fYWxpZ25DbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbGlnbkNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hbGlnbkNsYXNzKTtcbiAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9hbGlnbiA9IHZhbDtcbiAgfVxuICBnZXQgYWxpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICAgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSkuaGludDtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKiogUHJlZml4IHRvIGJlIHBsYWNlZCB0aGUgYmVmb3JlIG9mIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVByZWZpeF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVByZWZpeCB7fVxuIiwiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBTdWZmaXggdG8gYmUgcGxhY2VkIHRoZSBhZnRlciBvZiB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTdWZmaXhdJyxcbn0pXG5leHBvcnQgY2xhc3MgTHlTdWZmaXgge31cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE5nWm9uZSxcbiAgRGlyZWN0aXZlLFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBmb3J3YXJkUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIG1lcmdlRGVlcCwgRWxlbWVudE9ic2VydmVyLCBQbGF0Zm9ybSwgdG9Cb29sZWFuLCBEaXJBbGlhcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FID0ge1xuICBzdGFuZGFyZDoge1xuICAgIHJvb3Q6IHtcbiAgICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7Y29udGFpbmVyfTpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgJyZ7ZGlzYWJsZWR9IHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgcGFkZGluZzogJzFlbSAwIDAnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgbWFyZ2luOiAnMC40Mzc1ZW0gMCdcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICBtYXJnaW46ICcwLjQzNzVlbSAwJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIG1hcmdpbjogJzAuNDM3NWVtIDAnXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjI1ZW0pJ1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnLjVlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjEyNVxuICAgIH0sXG4gICAgYW5pbWF0aW9uczoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246IGBmb250LXNpemUgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9c2BcbiAgICAgIH0sXG4gICAgICAnJiB7bGFiZWx9Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9c2BcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBsYWJlbENvbnRhaW5lcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nU3RhcnQ6IHt9LFxuICAgIGxhYmVsQ2VudGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdFbmQ6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3IsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBpc0Zsb2F0aW5nTGFiZWw6IHt9LFxuICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBmb250U2l6ZTogJzc1JSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUuZmllbGQubGFiZWxDb2xvclxuICAgIH0sXG4gICAgZm9jdXNlZDoge30sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIHJlc2l6ZTogJ3ZlcnRpY2FsJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBoaW50OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICAnJiwgJiB7bGFiZWx9LCAmIHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3QsXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaXNGbG9hdGluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9mbG9hdGluZ0xhYmVsOiBib29sZWFuO1xuICBwcml2YXRlIF9maWVsc2V0U3BhbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpblN0YXJ0Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luRW5kQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyMicpIF9sYWJlbENvbnRhaW5lcjI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxTcGFuJykgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInKSBfcHJlZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3N1ZmZpeENvbnRhaW5lcicpIF9zdWZmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfZmllbGRzZXRMZWdlbmQnKSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlJbnB1dE5hdGl2ZSkpIF9pbnB1dDogTHlJbnB1dE5hdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBfbGFiZWxDaGlsZDogTHlMYWJlbDtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUhpbnQpIF9oaW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUhpbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKEx5UHJlZml4KSBfcHJlZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlTdWZmaXgpIF9zdWZmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5U3VmZml4PjtcblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuY29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKiBUaGUgZmllbGQgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICBpZiAoISh0aGlzLl90aGVtZS5jb25maWcuZmllbGQuYXBwZWFyYW5jZVt2YWxdIHx8IERFRkFVTFRfQVBQRUFSQU5DRV9USEVNRVt2YWxdKSkgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2VgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC5hcHBlYXJhbmNlOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IG1lcmdlRGVlcCh7fSwgdGhlbWUuZmllbGQuYXBwZWFyYW5jZS5iYXNlLCB0aGVtZS5maWVsZC5hcHBlYXJhbmNlW3ZhbF0gfHwgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FW3ZhbF0pO1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICcmJzogey4uLmFwcGVhcmFuY2Uucm9vdH0sXG4gICAgICAgICAgW2AmIC4ke2NsYXNzZXMuY29udGFpbmVyfWBdOiB7Li4uYXBwZWFyYW5jZS5jb250YWluZXJ9LFxuICAgICAgICAgIFtgJiAuJHtjbGFzc2VzLnByZWZpeH1gXTogey4uLmFwcGVhcmFuY2UucHJlZml4fSxcbiAgICAgICAgICBbYCYgLiR7Y2xhc3Nlcy5pbmZpeH1gXTogey4uLmFwcGVhcmFuY2UuaW5maXh9LFxuICAgICAgICAgIFtgJiAuJHtjbGFzc2VzLnN1ZmZpeH1gXTogey4uLmFwcGVhcmFuY2Uuc3VmZml4fSxcbiAgICAgICAgICBbYCYgLiR7Y2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXTogey4uLmFwcGVhcmFuY2UuaW5wdXR9LFxuICAgICAgICAgIFtgJiAuJHtjbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldH0sXG4gICAgICAgICAgW2AmIC4ke2NsYXNzZXMucGxhY2Vob2xkZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UucGxhY2Vob2xkZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHtjbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmxhYmVsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7Y2xhc3Nlcy5oaW50fWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmhpbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHtjbGFzc2VzLmZsb2F0aW5nTGFiZWx9LiR7Y2xhc3Nlcy5sYWJlbH1gXTogey4uLmFwcGVhcmFuY2UuZmxvYXRpbmdMYWJlbH0sXG5cbiAgICAgICAgICBbYCYuJHtjbGFzc2VzLmZvY3VzZWR9IC4ke2NsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmNvbnRhaW5lckZvY3VzZWRcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLCBTVFlMRV9QUklPUklUWSwgc3R5bGVzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRPYnNlcnZlcjogRWxlbWVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lucHV0Ll9ob3N0RWxlbWVudCwgdGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9pbnB1dC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5faW5wdXQubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMgZml4IHdpdGggb2YgbGFiZWxcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0KGVsOiBFbGVtZW50LCBkaXI6IERpckFsaWFzKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgZmllbGRMZWdlbmRzdHlsZS5tYXJnaW4ke2Rpcn06JHt3aWR0aH1gLCAoKSA9PiAoe1xuICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHtcbiAgICAgICAgW2BtYXJnaW4tJHtkaXJ9YF06IGAke3dpZHRofXB4YFxuICAgICAgfVxuICAgIH0pLCBudWxsLCBudWxsLCBTVFlMRV9QUklPUklUWSk7XG4gICAgaWYgKGRpciA9PT0gRGlyQWxpYXMuYmVmb3JlKSB7XG4gICAgICB0aGlzLl9tYXJnaW5TdGFydENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5TdGFydENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFyZ2luRW5kQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpbkVuZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0U3BhbigpIHtcbiAgICBsZXQgeyB3aWR0aCB9ID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCF0aGlzLl9pc0Zsb2F0aW5nKSB7XG4gICAgICB3aWR0aCAtPSB3aWR0aCAvIDEwMCAqIDI1O1xuICAgIH1cbiAgICAvKiogQWRkIDZweCBvZiBzcGFjaW5nICovXG4gICAgd2lkdGggKz0gNjtcbiAgICB0aGlzLl9maWVsc2V0U3BhbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYHN0eWxlLmZpZWxkc2V0U3BhbkZvY3VzZWQ6JHt3aWR0aH1gLCB7XG4gICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7d2lkdGg6IGAke3dpZHRofXB4YH1cbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsc2V0U3BhbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0LnBsYWNlaG9sZGVyICYmICF0aGlzLl9sYWJlbENoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsQ2hpbGQgfHwgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc1BsYWNlaG9sZGVyKCkge1xuICAgIGlmICgodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9pbnB1dC5wbGFjZWhvbGRlcikgfHwgKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9pbnB1dC52YWx1ZTtcbiAgICByZXR1cm4gdmFsID09PSAnJyB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9sYWJlbENvbnRhaW5lcjIpIHtcbiAgICAgIGNvbnN0IGlzRmxvYXRpbmcgPSB0aGlzLl9pbnB1dC5mb2N1c2VkIHx8ICF0aGlzLl9pc0VtcHR5KCkgfHwgdGhpcy5mbG9hdGluZ0xhYmVsO1xuICAgICAgaWYgKHRoaXMuX2lzRmxvYXRpbmcgIT09IGlzRmxvYXRpbmcpIHtcbiAgICAgICAgdGhpcy5faXNGbG9hdGluZyA9IGlzRmxvYXRpbmc7XG4gICAgICAgIGlmIChpc0Zsb2F0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnB1dC5mb2N1c2VkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W2x5SW5wdXRdLCB0ZXh0YXJlYVtseUlucHV0XScsXG4gIGV4cG9ydEFzOiAnbHlJbnB1dCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dE5hdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgX2hvc3RFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGFzRGlzYWJsZWRDbGFzczogYm9vbGVhbjtcbiAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgX29uSW5wdXQoKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIF9vbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWQgIT09IHRydWUpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX2hvc3RFbGVtZW50LnZhbHVlID0gdmFsO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLiAqL1xuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9maWVsZDogTHlGaWVsZCxcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICApIHtcbiAgICB0aGlzLl9ob3N0RWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5faG9zdEVsZW1lbnQsICdwbGFjZWhvbGRlcicsICfDgsKtJyk7XG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5uZ0NvbnRyb2w7XG4gICAgLy8gdXBkYXRlIHN0eWxlcyBvbiBkaXNhYmxlZFxuICAgIGlmIChuZ0NvbnRyb2wpIHtcbiAgICAgIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBuZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cygpOiB2b2lkIHsgdGhpcy5faG9zdEVsZW1lbnQuZm9jdXMoKTsgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU1RZTEVTIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4vKiogTHlFcnJvciAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZXJyb3InXG59KVxuZXhwb3J0IGNsYXNzIEx5RXJyb3Ige1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgICApIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBfdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKS5lcnJvcjtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5RmllbGQsIEx5SW5wdXROYXRpdmUgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuaW1wb3J0IHsgTHlFcnJvciB9IGZyb20gJy4vZXJyb3InO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUZpZWxkLFxuICAgIEx5UGxhY2Vob2xkZXIsXG4gICAgTHlMYWJlbCxcbiAgICBMeUlucHV0TmF0aXZlLFxuICAgIEx5UHJlZml4LFxuICAgIEx5U3VmZml4LFxuICAgIEx5SGludCxcbiAgICBMeUVycm9yLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyBMeUZpZWxkLCBMeVBsYWNlaG9sZGVyLCBMeUxhYmVsLCBMeUlucHV0TmF0aXZlLCBMeVByZWZpeCwgTHlTdWZmaXgsIEx5SGludCwgTHlFcnJvciBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiTFlfQ09NTU9OX1NUWUxFUyIsImludmVydFBsYWNlbWVudCIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJMeVRoZW1lMiIsIklucHV0IiwiU1RZTEVfUFJJT1JJVFkiLCJ0b0Jvb2xlYW4iLCJtZXJnZURlZXAiLCJQbGF0Zm9ybSIsIkRpckFsaWFzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRPYnNlcnZlciIsIkNoYW5nZURldGVjdG9yUmVmIiwiTmdab25lIiwiVmlld0NoaWxkIiwiQ29udGVudENoaWxkIiwiZm9yd2FyZFJlZiIsIkNvbnRlbnRDaGlsZHJlbiIsIlN1YmplY3QiLCJOZ0NvbnRyb2wiLCJPcHRpb25hbCIsIlNlbGYiLCJOZ0Zvcm0iLCJGb3JtR3JvdXBEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJIb3N0QmluZGluZyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENB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