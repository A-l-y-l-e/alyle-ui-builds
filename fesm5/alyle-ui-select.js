import { __extends, __spread } from 'tslib';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES } from '@alyle/ui/field';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyOverlay, LySelectionModel, LyTheme2, shadowBuilder, toBoolean, Positioning, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir, LyCommonModule } from '@alyle/ui';
import { LyCheckboxModule } from '@alyle/ui/checkbox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var STYLES$1 = function (theme) { return ({
    root: {
        display: 'block',
        paddingAfter: '1em',
        minWidth: '3em',
        minHeight: '1.5em',
        '-webkit-tap-highlight-color': 'transparent'
    },
    container: {
        background: theme.background.primary.default,
        borderRadius: '2px',
        boxShadow: shadowBuilder(4),
        display: 'block',
        transformOrigin: 'inherit',
        pointerEvents: 'all',
        overflow: 'auto',
        maxHeight: '250px'
    },
    valueText: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    option: {
        display: 'flex',
        fontFamily: theme.typography.fontFamily,
        color: theme.text.default,
        '-webkit-tap-highlight-color': 'transparent',
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: 0,
        padding: '0 1em',
        margin: 0,
        outline: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        lineHeight: '3em',
        height: '3em',
        cursor: 'pointer'
    },
    content: {
        padding: 0,
        display: 'flex',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        alignContent: 'inherit',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box'
    }
}); };
/**
 * \@docs-private
 * @type {?}
 */
var ANIMATIONS = [
    trigger('selectEnter', [
        transition('void => in', [
            animate('125ms cubic-bezier(0, 0, 0.2, 1)', keyframes([
                style({
                    opacity: 0,
                    transform: 'scaleY(0.8)'
                }),
                style({
                    opacity: 1,
                    transform: 'scaleY(1)'
                })
            ]))
        ]),
    ]),
    trigger('selectLeave', [
        transition('* => void', animate('100ms linear', style({ opacity: 0 })))
    ])
];
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LySelectBase = /** @class */ (function () {
    function LySelectBase() {
    }
    return LySelectBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LySelectMixinBase = mixinTabIndex((/** @type {?} */ (LySelectBase)));
var LySelect = /** @class */ (function (_super) {
    __extends(LySelect, _super);
    function LySelect(_theme, _renderer, _el, _overlay, _field, _cd, _ngZone, ngControl, _parentForm, _parentFormGroup) {
        var _this = _super.call(this) || this;
        _this._theme = _theme;
        _this._renderer = _renderer;
        _this._el = _el;
        _this._overlay = _overlay;
        _this._field = _field;
        _this._cd = _cd;
        _this._ngZone = _ngZone;
        _this.ngControl = ngControl;
        _this._parentForm = _parentForm;
        _this._parentFormGroup = _parentFormGroup;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES$1, STYLE_PRIORITY);
        _this._disabled = false;
        _this._required = false;
        _this.stateChanges = new Subject();
        _this._form = _this._parentForm || _this._parentFormGroup;
        _this._valueKey = same;
        _this._valueKeyFn = getValue;
        _this._focused = false;
        _this.errorState = false;
        /**
         * Emits whenever the component is destroyed.
         */
        _this._destroy = new Subject();
        /**
         * The registered callback function called when a change event occurs on the input element.
         */
        _this.onChange = function (_) { };
        /**
         * The registered callback function called when a blur event occurs on the input element.
         */
        _this.onTouched = function () { };
        if (_this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this.ngControl.valueAccessor = _this;
        }
        _this._cursorClass = _this._theme.addStyle('lyField.select', {
            '& {container}': {
                cursor: 'pointer'
            }
        }, _this._field._getHostElement(), null, STYLE_PRIORITY, STYLES);
        return _this;
    }
    /**
     * @return {?}
     */
    LySelect.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        if (this._focused !== false && !this._opened) {
            this._focused = false;
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    LySelect.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (this._focused !== true && !this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} e
     * @return {?}
     */
    LySelect.prototype._endAnimation = /**
     * \@internal
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            if (this._overlayRef) {
                this._overlayRef.remove();
                this._overlayRef = null;
            }
        }
    };
    Object.defineProperty(LySelect.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        /** @docs-private */
        set: /**
         * \@docs-private
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this.value && this._selectionModel) {
                this._value = val;
                this.writeValue(val);
                this.onChange(val);
                if (this.options) {
                    if (this.multiple) {
                        if (Array.isArray(this.value)) {
                            /** @type {?} */
                            var values_1 = [];
                            this.options.forEach(function (opt) {
                                if (_this.value.some(function (_) { return !_this._selectionModel._selectionMap.has(_this.valueKey(_)) && _this._valueKey(_) === _this._valueKeyFn(opt); })) {
                                    values_1.push(opt);
                                }
                            });
                            if (values_1.length) {
                                /** @type {?} */
                                var beforeSelecteds = this._selectionModel.selected;
                                // reset
                                this._selectionModel.clear();
                                // select values
                                values_1.forEach(function (opt) { return opt.select(); });
                                // deselect old values
                                if (beforeSelecteds.length) {
                                    beforeSelecteds.forEach(function (opt) {
                                        opt.ngOnChanges();
                                        opt._cd.markForCheck();
                                    });
                                }
                            }
                        }
                    }
                    else {
                        // reset
                        /** @type {?} */
                        var selecteds = this._selectionModel.selected;
                        this._selectionModel.clear();
                        if (selecteds.length) {
                            selecteds.forEach(function (opt) {
                                opt.ngOnChanges();
                                opt._cd.markForCheck();
                            });
                        }
                        /** @type {?} */
                        var selected = this.options.find(function (opt) { return _this._valueKeyFn(opt) === _this.valueKey(_this.value); });
                        if (selected) {
                            selected.select();
                        }
                    }
                }
                this.stateChanges.next();
                this._cd.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function (val) {
            if (val !== this._disabled) {
                this._disabled = toBoolean(val);
                if (this._field) {
                    if (!val && this._hasDisabledClass) {
                        this._renderer.removeClass(this._field._getHostElement(), this._field.classes.disabled);
                        if (this._cursorClass) {
                            this._renderer.addClass(this._field._getHostElement(), this._cursorClass);
                        }
                        this._hasDisabledClass = undefined;
                    }
                    else if (val) {
                        this._renderer.addClass(this._field._getHostElement(), this._field.classes.disabled);
                        if (this._cursorClass) {
                            this._renderer.removeClass(this._field._getHostElement(), this._cursorClass);
                        }
                        this._hasDisabledClass = true;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "valueKey", {
        get: /**
         * @return {?}
         */
        function () { return this._valueKey; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._valueKeyFn = function (opt) { return fn(getValue(opt)); };
            this._valueKey = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._placeholder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "focused", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var val = this.value;
            return this.multiple ? this._selectionModel.isEmpty() : val == null || this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "floatingLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened ? true : !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "triggerValue", {
        /** The value displayed in the trigger. */
        get: /**
         * The value displayed in the trigger.
         * @return {?}
         */
        function () {
            if (this._multiple) {
                /** @type {?} */
                var selectedOptions = this._selectionModel.selected.map(function (option) { return option.viewValue; });
                if (this._theme.variables.direction === Dir.rtl) {
                    selectedOptions.reverse();
                }
                return selectedOptions.join(', ');
            }
            return this._selectionModel.selected[0].viewValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "selected", {
        /** Current selecteds */
        get: /**
         * Current selecteds
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selected = this._selectionModel.selected;
            return this.multiple ? selected.map(function (option) { return option.value; }) : selected[0].value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LySelect.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectionModel = new LySelectionModel({
            multiple: this.multiple ? true : undefined,
            getKey: this._valueKeyFn
        });
        /** @type {?} */
        var ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.pipe(takeUntil(this._destroy)).subscribe(function () {
                _this.disabled = !!ngControl.disabled;
            });
        }
        // apply class {selectArrow} to `<select>`
        this._renderer.addClass(this._field._getHostElement(), this._field.classes.selectArrow);
        // apply default styles
        this._renderer.addClass(this._el.nativeElement, this._field.classes.inputNative);
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    };
    /**
     * @return {?}
     */
    LySelect.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldVal = this.errorState;
        /** @type {?} */
        var newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
                /** @type {?} */
                var errorClass = this._field.classes.errorState;
                if (newVal) {
                    this._renderer.addClass(this._field._getHostElement(), errorClass);
                    this._errorClass = errorClass;
                }
                else if (this._errorClass) {
                    this._renderer.removeClass(this._field._getHostElement(), errorClass);
                    this._errorClass = undefined;
                }
                this.stateChanges.next();
            }
        }
    };
    /**
     * @return {?}
     */
    LySelect.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.value = _this.ngControl ? _this.ngControl.value : _this._value;
            _this.stateChanges.next();
            _this._cd.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    LySelect.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.options) {
            this.options.changes.pipe(takeUntil(this._destroy)).subscribe(function () {
                /** @type {?} */
                var selecteds = [];
                _this.options.forEach(function (option) {
                    if (option.isSelected) {
                        selecteds.push(option);
                    }
                });
                // this only update the refs
                if (selecteds.length) {
                    _this._selectionModel.clear();
                    selecteds.forEach(function (option) { return _this._selectionModel.select(option); });
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LySelect.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        if (this._overlayRef) {
            this._overlayRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    LySelect.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        // this._updateSelectedClass();
        this._opened = true;
        this.stateChanges.next();
        this._overlayRef = this._overlay.create(this.templateRef, null, {
            styles: {
                top: 0,
                left: 0,
                pointerEvents: null
            },
            fnDestroy: this.close.bind(this),
            onResizeScroll: this._updatePlacement.bind(this),
            backdrop: true
        });
        this._ngZone.onStable.pipe(take(1)).subscribe(function () { return _this._updatePlacement(); });
    };
    /**
     * @return {?}
     */
    LySelect.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this.onTouched();
            this._overlayRef.detach();
            this._opened = false;
            this._getHostElement().focus();
            this.stateChanges.next();
        }
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    LySelect.prototype.onContainerClick = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._getHostElement().focus();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    LySelect.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () { this._getHostElement().focus(); };
    /**
     * @return {?}
     */
    LySelect.prototype._getHostElement = /**
     * @return {?}
     */
    function () {
        return this._el.nativeElement;
    };
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    LySelect.prototype.writeValue = /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    function (value) {
        if (this.options) {
            this.value = value;
        }
    };
    /**
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    /**
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    LySelect.prototype.registerOnChange = /**
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this.onChange = function (_valueString) {
            fn(_this.value);
        };
    };
    /**
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    /**
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    LySelect.prototype.registerOnTouched = /**
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    LySelect.prototype.setDisabledState = /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
        this.stateChanges.next();
    };
    /**
     * @private
     * @return {?}
     */
    LySelect.prototype._updatePlacement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = (/** @type {?} */ ((/** @type {?} */ (this._overlayRef)).containerElement));
        /** @type {?} */
        var container = (/** @type {?} */ (el.querySelector('div')));
        var nativeElement = this._el.nativeElement;
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', nativeElement.offsetWidth + 32 + "px");
        /** @type {?} */
        var selectedElement = this._selectionModel.isEmpty()
            ? (/** @type {?} */ (el.querySelector('ly-option')))
            : this._selectionModel.selected[0]._getHostElement();
        /** @type {?} */
        var offset = {
            y: -(nativeElement.offsetHeight / 2 + selectedElement.offsetTop + selectedElement.offsetHeight / 2),
            x: -16
        };
        // scroll to selected option
        if (container.scrollHeight !== container.offsetHeight) {
            container.scrollTop = selectedElement.offsetTop;
            if (container.scrollTop === selectedElement.offsetTop) {
                container.scrollTop = container.scrollTop - (container.offsetHeight / 2) + selectedElement.offsetHeight / 2;
            }
            else {
                container.scrollTop = container.scrollTop - (container.offsetHeight / 2 - (selectedElement.offsetTop - container.scrollTop)) + selectedElement.offsetHeight / 2;
            }
            offset.y = container.scrollTop + offset.y;
        }
        /** @type {?} */
        var position = new Positioning(YPosition.below, XPosition.after, (/** @type {?} */ (null)), this._getHostElement(), el, this._theme.variables, offset, false);
        // set position
        this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
        this._renderer.setStyle(el, 'transform-origin', position.ox + " " + position.oy + " 0");
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        /** @type {?} */
        var width = position.width === 'initial'
            ? nativeElement.offsetWidth + 32 + "px"
            : position.width;
        this._renderer.setStyle(container, 'width', width);
    };
    LySelect.decorators = [
        { type: Component, args: [{
                    selector: 'ly-select',
                    template: "<div [className]=\"classes.valueText\">{{ empty ? '\\u00A0' : triggerValue }}</div>\n<ng-template>\n  <div #container [className]=\"classes.container\" [@selectEnter]=\"'in'\" (@selectLeave.done)=\"_endAnimation($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'lySelect',
                    host: {
                        '(click)': 'open()',
                        '[attr.tabindex]': 'tabIndex'
                    },
                    animations: __spread(ANIMATIONS),
                    inputs: ['tabIndex'],
                    providers: [
                        { provide: LyFieldControlBase, useExisting: LySelect }
                    ]
                }] }
    ];
    /** @nocollapse */
    LySelect.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyOverlay },
        { type: LyField, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
    LySelect.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
        _options: [{ type: ViewChild, args: [forwardRef(function () { return LyOption; }),] }],
        options: [{ type: ContentChildren, args: [forwardRef(function () { return LyOption; }), { descendants: true },] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }],
        _onFocus: [{ type: HostListener, args: ['focus',] }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        multiple: [{ type: Input }],
        valueKey: [{ type: Input }],
        placeholder: [{ type: Input }]
    };
    return LySelect;
}(LySelectMixinBase));
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyOptionBase = /** @class */ (function () {
    function LyOptionBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyOptionBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
var LyOption = /** @class */ (function (_super) {
    __extends(LyOption, _super);
    function LyOption(/** @internal */ _select, _el, _rippleService, _renderer, _theme, _cd, _ngZone) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._select = _select;
        _this._el = _el;
        _this._rippleService = _rippleService;
        _this._cd = _cd;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES$1, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, _this.classes.option);
        _this.setAutoContrast();
        _this._triggerElement = _el;
        return _this;
    }
    /**
     * @return {?}
     */
    LyOption.prototype._onClick = /**
     * @return {?}
     */
    function () {
        if (!this._select.multiple) {
            this.select();
            this._select.close();
        }
        else {
            this.toggle();
        }
    };
    Object.defineProperty(LyOption.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        /**
         * Tracks simple string values bound to the option element.
         */
        set: /**
         * Tracks simple string values bound to the option element.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOption.prototype, "viewValue", {
        /** The displayed value of the option. */
        get: /**
         * The displayed value of the option.
         * @return {?}
         */
        function () {
            return (((/** @type {?} */ (this._getHostElement()))).textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOption.prototype, "_color", {
        /** The color of Select */
        get: /**
         * The color of Select
         * @return {?}
         */
        function () {
            return this._select._selectionModel.isSelected(this) ? this._select._field.color : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOption.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._select._selectionModel.isSelected(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyOption.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    /**
     * @return {?}
     */
    LyOption.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyOption.prototype.select = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
            /** @type {?} */
            var beforeSelecteds = this._select._selectionModel.selected;
            this._select._selectionModel.select(this);
            this._select._value = this._select._selectionModel.selected.map(function (opt) { return opt.value; });
            this.updateStyle(this._el);
            if (beforeSelecteds.length) {
                beforeSelecteds.forEach(function (opt) { return opt.ngOnChanges(); });
            }
        }
        else {
            if (!this._select._selectionModel.isSelected(this)) {
                /** @type {?} */
                var beforeSelecteds = this._select._selectionModel.selected;
                this._select._selectionModel.select(this);
                this._select._value = this._value;
                this.updateStyle(this._el);
                if (beforeSelecteds.length) {
                    beforeSelecteds.forEach(function (opt) { return opt.ngOnChanges(); });
                }
            }
        }
        this._select.onChange(this._select._value);
        this._select._cd.markForCheck();
        this._select.stateChanges.next();
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    LyOption.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
            /** @type {?} */
            var beforeSelecteds = this._select._selectionModel.selected;
            this._select._selectionModel.toggle(this);
            this._select._value = this._select._selectionModel.selected.map(function (opt) { return opt.value; });
            this.updateStyle(this._el);
            if (beforeSelecteds.length) {
                beforeSelecteds.forEach(function (opt) { return opt.ngOnChanges(); });
            }
        }
        else {
            if (!this._select._selectionModel.isSelected(this)) {
                /** @type {?} */
                var beforeSelecteds = this._select._selectionModel.selected;
                this._select._selectionModel.toggle(this);
                this._select._value = this._value;
                this.updateStyle(this._el);
                if (beforeSelecteds.length) {
                    beforeSelecteds.forEach(function (opt) { return opt.ngOnChanges(); });
                }
            }
        }
        this._select.onChange(this._select._value);
        this._select._cd.markForCheck();
        this._select.stateChanges.next();
        this._cd.markForCheck();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    LyOption.prototype._getHostElement = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this._el.nativeElement;
    };
    LyOption.decorators = [
        { type: Component, args: [{
                    selector: 'ly-option',
                    template: "<span [className]=\"classes.content\">\n  <ly-checkbox [disabled]=\"disabled\"\n    [color]=\"_color\"\n    [checked]=\"isSelected\"\n    *ngIf=\"_select.multiple\"\n    (click)=\"$event.preventDefault()\"></ly-checkbox>\n  <ng-content></ng-content>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'disabled',
                        'outlined',
                        'elevation',
                        'shadowColor',
                        'disableRipple'
                    ]
                }] }
    ];
    /** @nocollapse */
    LyOption.ctorParameters = function () { return [
        { type: LySelect, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: LyRippleService },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    LyOption.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        _onClick: [{ type: HostListener, args: ['click',] }],
        value: [{ type: Input, args: ['value',] }]
    };
    return LyOption;
}(LyOptionMixinBase));
/**
 * @param {?} o
 * @return {?}
 */
function same(o) {
    return o;
}
/**
 * @param {?} o
 * @return {?}
 */
function getValue(o) {
    return o.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LySelectModule = /** @class */ (function () {
    function LySelectModule() {
    }
    LySelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LySelect, LyOption],
                    imports: [
                        CommonModule,
                        LyCommonModule,
                        LyCheckboxModule
                    ],
                    exports: [LySelect, LyOption, LyCommonModule]
                },] }
    ];
    return LySelectModule;
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

export { STYLES$1 as STYLES, LySelectBase, LySelectMixinBase, LySelect, LyOptionBase, LyOptionMixinBase, LyOption, LySelectModule };

//# sourceMappingURL=alyle-ui-select.js.map