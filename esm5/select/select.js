/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, QueryList, ContentChildren } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES as FIELD_STYLES } from '@alyle/ui/field';
import { LyOverlay, LySelectionModel, LyTheme2, shadowBuilder, toBoolean, Positioning, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir } from '@alyle/ui';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
export var STYLES = function (theme) { return ({
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
        maxHeight: '256px'
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
    optionText: {
        'ly-checkbox ~ &': {
            marginBefore: '-16px'
        }
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
                    transform: 'scaleY(0.9)'
                }),
                style({
                    opacity: 1,
                    transform: 'scaleY(1)'
                })
            ]))
        ]),
    ]),
    trigger('selectLeave', [
        transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))
    ])
];
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LySelectBase = /** @class */ (function () {
    function LySelectBase() {
    }
    return LySelectBase;
}());
/**
 * \@docs-private
 */
export { LySelectBase };
/**
 * \@docs-private
 * @type {?}
 */
export var LySelectMixinBase = mixinTabIndex((/** @type {?} */ (LySelectBase)));
var LySelect = /** @class */ (function (_super) {
    tslib_1.__extends(LySelect, _super);
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
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
        }, _this._field._getHostElement(), null, STYLE_PRIORITY, FIELD_STYLES);
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
                if (this.options) {
                    if (this.multiple) {
                        if (Array.isArray(this.value)) {
                            /** @type {?} */
                            var values_1 = [];
                            this.options.forEach(function (opt) {
                                if (_this.value.some(function (_) { return _this._valueKey(_) === _this._valueKeyFn(opt); })) {
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
            onResizeScroll: this._updatePlacement.bind(this)
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
        this.open();
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
        var nativeElement = this.valueTextDivRef.nativeElement;
        /** @type {?} */
        var panelWidth;
        if (this.multiple) {
            panelWidth = nativeElement.offsetWidth + 32 * 2;
        }
        else {
            panelWidth = nativeElement.offsetWidth + 32;
        }
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', panelWidth + "px");
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
        if (this.multiple) {
            offset.x -= 24;
        }
        /** @type {?} */
        var position = new Positioning(YPosition.below, XPosition.after, (/** @type {?} */ (null)), nativeElement, el, this._theme.variables, offset, false);
        // set position
        this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
        this._renderer.setStyle(el, 'transform-origin', position.ox + " " + position.oy + " 0");
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        /** @type {?} */
        var width = position.width === 'initial'
            ? panelWidth + "px"
            : position.width;
        this._renderer.setStyle(container, 'width', width);
    };
    LySelect.decorators = [
        { type: Component, args: [{
                    selector: 'ly-select',
                    template: "<div [className]=\"classes.valueText\" #valueText>{{ empty ? '\\u00A0' : triggerValue }}</div>\n<ng-template>\n  <div #container [className]=\"classes.container\" [@selectEnter]=\"'in'\" (@selectLeave.done)=\"_endAnimation($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'lySelect',
                    host: {
                        '[attr.tabindex]': 'tabIndex'
                    },
                    animations: tslib_1.__spread(ANIMATIONS),
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
        valueTextDivRef: [{ type: ViewChild, args: ['valueText',] }],
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
export { LySelect };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LySelect.prototype.classes;
    /**
     * \@internal
     * @type {?}
     */
    LySelect.prototype._selectionModel;
    /**
     * \@internal
     * @type {?}
     */
    LySelect.prototype._value;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._overlayRef;
    /**
     * @type {?}
     * @protected
     */
    LySelect.prototype._disabled;
    /**
     * @type {?}
     * @protected
     */
    LySelect.prototype._required;
    /**
     * @type {?}
     * @protected
     */
    LySelect.prototype._placeholder;
    /** @type {?} */
    LySelect.prototype.stateChanges;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._hasDisabledClass;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._errorClass;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._form;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._opened;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._valueKey;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._valueKeyFn;
    /** @type {?} */
    LySelect.prototype._focused;
    /** @type {?} */
    LySelect.prototype.errorState;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._cursorClass;
    /**
     * Emits whenever the component is destroyed.
     * @type {?}
     * @private
     */
    LySelect.prototype._destroy;
    /** @type {?} */
    LySelect.prototype.templateRef;
    /** @type {?} */
    LySelect.prototype.valueTextDivRef;
    /**
     * \@internal
     * @type {?}
     */
    LySelect.prototype._options;
    /** @type {?} */
    LySelect.prototype.options;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @type {?}
     */
    LySelect.prototype.onChange;
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @type {?}
     */
    LySelect.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._overlay;
    /**
     * \@internal
     * @type {?}
     */
    LySelect.prototype._field;
    /**
     * \@internal
     * @type {?}
     */
    LySelect.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._ngZone;
    /**
     * \@docs-private
     * @type {?}
     */
    LySelect.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._parentForm;
    /**
     * @type {?}
     * @private
     */
    LySelect.prototype._parentFormGroup;
}
/**
 * \@docs-private
 */
var /**
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
 */
export { LyOptionBase };
if (false) {
    /** @type {?} */
    LyOptionBase.prototype._theme;
    /** @type {?} */
    LyOptionBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
var LyOption = /** @class */ (function (_super) {
    tslib_1.__extends(LyOption, _super);
    function LyOption(/** @internal */ _select, _el, _rippleService, _renderer, _theme, _cd, _ngZone) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._select = _select;
        _this._el = _el;
        _this._rippleService = _rippleService;
        _this._cd = _cd;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
        this._select.onChange(this._select._value);
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
                    template: "<span [className]=\"classes.content\">\n  <ly-checkbox [disabled]=\"disabled\"\n    [color]=\"_color\"\n    [checked]=\"isSelected\"\n    *ngIf=\"_select.multiple\"\n    (click)=\"$event.preventDefault()\"\n  ></ly-checkbox>\n  <span [className]=\"classes.optionText\"><ng-content></ng-content></span>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
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
export { LyOption };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyOption.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyOption.prototype._value;
    /** @type {?} */
    LyOption.prototype._rippleContainer;
    /**
     * \@internal
     * @type {?}
     */
    LyOption.prototype._select;
    /**
     * @type {?}
     * @private
     */
    LyOption.prototype._el;
    /**
     * \@internal
     * @type {?}
     */
    LyOption.prototype._rippleService;
    /**
     * \@internal
     * @type {?}
     */
    LyOption.prototype._cd;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNOLE1BQU0scUJBQXFCLENBQUM7QUFDL0IsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBRU4sU0FBUyxFQUNULGVBQWUsRUFHZCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDVCxNQUFNLEVBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sSUFBSSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBRVIsYUFBYSxFQUViLFNBQVMsRUFDVCxXQUFXLEVBRVgsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxVQUFVLEVBQ1YsV0FBVyxFQUNYLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDRixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTNDLHNCQUFzQixHQUFHLEtB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QkFBaUI7MkJBRTNCLFlBQVksU0FBQyxPQUFPO3dCQWFwQixLQUFLLFNBQUMsT0FBTzs7SUE2R2hCLGVBQUM7Q0FBQSxBQWhKRCxDQWU4QixpQkFBaUIsR0FpSTlDO1NBaklZLFFBQVE7Ozs7OztJQUVuQiwyQkFBcUU7Ozs7O0lBQ3JFLDBCQUFvQjs7SUFFcEIsb0NBQTJEOzs7OztJQXNDL0MsMkJBQWdDOzs7OztJQUNoQyx1QkFBdUI7Ozs7O0lBRXZCLGtDQUFzQzs7Ozs7SUFJdEMsdUJBQTZCOzs7Ozs7QUFpRjNDLFNBQVMsSUFBSSxDQUFDLENBQVU7SUFDdEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDOzs7OztBQUNELFNBQVMsUUFBUSxDQUFDLENBQVc7SUFDM0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBrZXlmcmFtZXMsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgTmdDb250cm9sLFxuICBOZ0Zvcm1cbiAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUZpZWxkLCBMeUZpZWxkQ29udHJvbEJhc2UsIFNUWUxFUyBhcyBGSUVMRF9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWkvZmllbGQnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5LFxuICBMeVNlbGVjdGlvbk1vZGVsLFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZhY3RvcnksXG4gIHNoYWRvd0J1aWxkZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIFBvc2l0aW9uaW5nLFxuICBDYW5EaXNhYmxlQ3RvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpblRhYkluZGV4LFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBEaXJcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmdBZnRlcjogJzFlbScsXG4gICAgbWluV2lkdGg6ICczZW0nLFxuICAgIG1pbkhlaWdodDogJzEuNWVtJyxcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50J1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0KSxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2luaGVyaXQnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgbWF4SGVpZ2h0OiAnMjU2cHgnXG4gIH0sXG4gIHZhbHVlVGV4dDoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfSxcbiAgb3B0aW9uOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgIGJvcmRlcjogMCxcbiAgICBwYWRkaW5nOiAnMCAxZW0nLFxuICAgIG1hcmdpbjogMCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGxpbmVIZWlnaHQ6ICczZW0nLFxuICAgIGhlaWdodDogJzNlbScsXG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgb3B0aW9uVGV4dDoge1xuICAgICdseS1jaGVja2JveCB+ICYnOiB7XG4gICAgICBtYXJnaW5CZWZvcmU6ICctMTZweCdcbiAgICB9XG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignc2VsZWN0RW50ZXInLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBpbicsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOSknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknXG4gICAgICAgIH0pXG4gICAgICBdKSlcbiAgICBdKSxcbiAgXSksXG4gIHRyaWdnZXIoJ3NlbGVjdExlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzEwMG1zIDI1bXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgXSlcbl07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlTZWxlY3RCYXNlIHsgfVxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVNlbGVjdE1peGluQmFzZSA9IG1peGluVGFiSW5kZXgoTHlTZWxlY3RCYXNlIGFzIENhbkRpc2FibGVDdG9yKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5U2VsZWN0JyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJpbmRleF0nOiAndGFiSW5kZXgnXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFsuLi5BTklNQVRJT05TXSxcbiAgaW5wdXRzOiBbJ3RhYkluZGV4J10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTHlGaWVsZENvbnRyb2xCYXNlLCB1c2VFeGlzdGluZzogTHlTZWxlY3QgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5U2VsZWN0XG4gICAgZXh0ZW5kcyBMeVNlbGVjdE1peGluQmFzZVxuICAgIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEx5RmllbGRDb250cm9sQmFzZSwgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0aW9uTW9kZWw6IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+O1xuICAvKiogQGludGVybmFsICovXG4gIF92YWx1ZTogYW55O1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5RmFjdG9yeSB8IG51bGw7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2hhc0Rpc2FibGVkQ2xhc3M/OiBib29sZWFuO1xuICBwcml2YXRlIF9lcnJvckNsYXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9mb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUgfCBudWxsID0gdGhpcy5fcGFyZW50Rm9ybSB8fCB0aGlzLl9wYXJlbnRGb3JtR3JvdXA7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZhbHVlS2V5OiAob3B0OiB1bmtub3duKSA9PiB1bmtub3duID0gc2FtZTtcbiAgcHJpdmF0ZSBfdmFsdWVLZXlGbjogKG9wdDogTHlPcHRpb24pID0+IHVua25vd24gPSBnZXRWYWx1ZTtcbiAgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJzb3JDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3ZhbHVlVGV4dCcpIHZhbHVlVGV4dERpdlJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSkgX29wdGlvbnM6IFF1ZXJ5TGlzdDxMeU9wdGlvbj47XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeU9wdGlvbiksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgb3B0aW9uczogUXVlcnlMaXN0PEx5T3B0aW9uPjtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBjaGFuZ2UgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBibHVyIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSBmYWxzZSAmJiAhdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IHRydWUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2VuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVmID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSAmJiB0aGlzLl9zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBMeU9wdGlvbltdID0gW107XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5zb21lKF8gPT4gdGhpcy5fdmFsdWVLZXkoXykgPT09IHRoaXMuX3ZhbHVlS2V5Rm4ob3B0KSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvcHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgICAgIC8vIHNlbGVjdCB2YWx1ZXNcbiAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2gob3B0ID0+IG9wdC5zZWxlY3QoKSk7XG5cbiAgICAgICAgICAgICAgLy8gZGVzZWxlY3Qgb2xkIHZhbHVlc1xuICAgICAgICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICBvcHQubmdPbkNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgIG9wdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICBvcHQubmdPbkNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgb3B0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5vcHRpb25zLmZpbmQob3B0ID0+IHRoaXMuX3ZhbHVlS2V5Rm4ob3B0KSA9PT0gdGhpcy52YWx1ZUtleSh0aGlzLnZhbHVlKSk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZC5zZWxlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgaWYgKCF2YWwgJiYgdGhpcy5faGFzRGlzYWJsZWRDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbXVsdGlwbGU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVLZXkoZm46IChvcHQ6IHVua25vd24pID0+IHVua25vd24pIHtcbiAgICB0aGlzLl92YWx1ZUtleUZuID0gKG9wdDogTHlPcHRpb24pID0+IGZuKGdldFZhbHVlKG9wdCkpO1xuICAgIHRoaXMuX3ZhbHVlS2V5ID0gZm47XG4gIH1cbiAgZ2V0IHZhbHVlS2V5KCk6IChvcHQ6IHVua25vd24pID0+IHVua25vd24geyByZXR1cm4gdGhpcy5fdmFsdWVLZXk7IH1cblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKSA6IHZhbCA9PSBudWxsIHx8IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKTtcbiAgfVxuXG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQgPyB0cnVlIDogIXRoaXMuZW1wdHk7XG4gIH1cblxuICAvKiogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgdHJpZ2dlci4gKi9cbiAgZ2V0IHRyaWdnZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdGlvbiA9PiBvcHRpb24udmlld1ZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09IERpci5ydGwpIHtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zLnJldmVyc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9ucy5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXS52aWV3VmFsdWU7XG4gIH1cblxuICAvKiogQ3VycmVudCBzZWxlY3RlZHMgKi9cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyBzZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkgOiBzZWxlY3RlZFswXS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2ZpZWxkOiBMeUZpZWxkLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgLy8gTm90ZTogd2UgcHJvdmlkZSB0aGUgdmFsdWUgYWNjZXNzb3IgdGhyb3VnaCBoZXJlLCBpbnN0ZWFkIG9mXG4gICAgICAvLyB0aGUgYHByb3ZpZGVyc2AgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlGaWVsZC5zZWxlY3QnLCB7XG4gICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgbnVsbCwgU1RZTEVfUFJJT1JJVFksIEZJRUxEX1NUWUxFUyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbCA9IG5ldyBMeVNlbGVjdGlvbk1vZGVsPEx5T3B0aW9uPih7XG4gICAgICBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICBnZXRLZXk6IHRoaXMuX3ZhbHVlS2V5Rm5cbiAgICB9KTtcbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLm5nQ29udHJvbDtcbiAgICAvLyB1cGRhdGUgc3R5bGVzIG9uIGRpc2FibGVkXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhIW5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGNsYXNzIHtzZWxlY3RBcnJvd30gdG8gYDxzZWxlY3Q+YFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLnNlbGVjdEFycm93KTtcblxuICAgIC8vIGFwcGx5IGRlZmF1bHQgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbGQuY2xhc3Nlcy5pbnB1dE5hdGl2ZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBuZXdWYWwgPSAhISh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmICh0aGlzLm5nQ29udHJvbC50b3VjaGVkIHx8ICh0aGlzLl9mb3JtICYmIHRoaXMuX2Zvcm0uc3VibWl0dGVkKSkpO1xuICAgIGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3VmFsO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9maWVsZC5jbGFzc2VzLmVycm9yU3RhdGU7XG4gICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IGVycm9yQ2xhc3M7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZXJyb3JDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC52YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLmNoYW5nZXMucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRzOiBMeU9wdGlvbltdID0gW107XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZHMucHVzaChvcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcyBvbmx5IHVwZGF0ZSB0aGUgcmVmc1xuICAgICAgICBpZiAoc2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgc2VsZWN0ZWRzLmZvckVhY2gob3B0aW9uID0+IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChvcHRpb24pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhpcy5fdXBkYXRlU2VsZWN0ZWRDbGFzcygpO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLnRlbXBsYXRlUmVmLCBudWxsLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICB9LFxuICAgICAgZm5EZXN0cm95OiB0aGlzLmNsb3NlLmJpbmQodGhpcyksXG4gICAgICBvblJlc2l6ZVNjcm9sbDogdGhpcy5fdXBkYXRlUGxhY2VtZW50LmJpbmQodGhpcylcbiAgICB9KTtcbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZShcbiAgICAgIHRha2UoMSlcbiAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgIHRoaXMub3BlbigpO1xuICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7IHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTsgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBcInZhbHVlXCIgcHJvcGVydHkgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgY2hlY2tlZCB2YWx1ZVxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKF92YWx1ZVN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICBmbih0aGlzLnZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgc2VsZWN0LiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgcmVxdWlyZWRcbiAgICogdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX292ZXJsYXlSZWYhLmNvbnRhaW5lckVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gZWwucXVlcnlTZWxlY3RvcignZGl2JykhO1xuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy52YWx1ZVRleHREaXZSZWY7XG4gICAgbGV0IHBhbmVsV2lkdGg6IG51bWJlcjtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBwYW5lbFdpZHRoID0gbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDMyICogMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFuZWxXaWR0aCA9IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyAzMjtcbiAgICB9XG5cblxuICAgIC8vIHJlc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgJ2luaXRpYWwnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsIGAke3BhbmVsV2lkdGh9cHhgKTtcblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKVxuICAgICAgICA/IGVsLnF1ZXJ5U2VsZWN0b3IoJ2x5LW9wdGlvbicpIVxuICAgICAgICA6IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLl9nZXRIb3N0RWxlbWVudCgpO1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0ge1xuICAgICAgeTogLShuYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDIgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDIpLFxuICAgICAgeDogLTE2XG4gICAgfTtcblxuICAgIC8vIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cbiAgICBpZiAoY29udGFpbmVyLnNjcm9sbEhlaWdodCAhPT0gY29udGFpbmVyLm9mZnNldEhlaWdodCkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICBpZiAoY29udGFpbmVyLnNjcm9sbFRvcCA9PT0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCkge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcCAtIChjb250YWluZXIub2Zmc2V0SGVpZ2h0IC8gMikgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAyIC0gKHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3AgLSBjb250YWluZXIuc2Nyb2xsVG9wKSkgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIG9mZnNldC55ID0gY29udGFpbmVyLnNjcm9sbFRvcCArIG9mZnNldC55O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBvZmZzZXQueCAtPSAyNDtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbmluZyhcbiAgICAgIFlQb3NpdGlvbi5iZWxvdyxcbiAgICAgIFhQb3NpdGlvbi5hZnRlcixcbiAgICAgIG51bGwgYXMgYW55LFxuICAgICAgbmF0aXZlRWxlbWVudCxcbiAgICAgIGVsLFxuICAgICAgdGhpcy5fdGhlbWUudmFyaWFibGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgsIDApYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0tb3JpZ2luJywgYCR7cG9zaXRpb24ub3h9ICR7cG9zaXRpb24ub3l9IDBgKTtcblxuICAgIC8vIHNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsIHBvc2l0aW9uLmhlaWdodCk7XG4gICAgY29uc3Qgd2lkdGggPSBwb3NpdGlvbi53aWR0aCA9PT0gJ2luaXRpYWwnXG4gICAgICAgICAgPyBgJHtwYW5lbFdpZHRofXB4YFxuICAgICAgICAgIDogcG9zaXRpb24ud2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCB3aWR0aCk7XG4gIH1cblxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5T3B0aW9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeU9wdGlvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgICAgbWl4aW5Db2xvcihcbiAgICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlPcHRpb25CYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3B0aW9uIGV4dGVuZHMgTHlPcHRpb25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF92YWx1ZTogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuX3NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3Qub25DaGFuZ2UodGhpcy5fc2VsZWN0Ll92YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHNpbXBsZSBzdHJpbmcgdmFsdWVzIGJvdW5kIHRvIHRoZSBvcHRpb24gZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKiBUaGUgZGlzcGxheWVkIHZhbHVlIG9mIHRoZSBvcHRpb24uICovXG4gIGdldCB2aWV3VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKCh0aGlzLl9nZXRIb3N0RWxlbWVudCgpIGFzIEVsZW1lbnQpLnRleHRDb250ZW50IHx8ICcnKS50cmltKCk7XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIFNlbGVjdCAqL1xuICBnZXQgX2NvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykgPyB0aGlzLl9zZWxlY3QuX2ZpZWxkLmNvbG9yIDogJyc7XG4gIH1cblxuICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBASG9zdCgpIHB1YmxpYyBfc2VsZWN0OiBMeVNlbGVjdCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBfbmdab25lOiBOZ1pvbmUpIHtcbiAgICBzdXBlcihfdGhlbWUsIF9uZ1pvbmUpO1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9wdGlvbik7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHRoaXMpO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9zZWxlY3Quc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC50b2dnbGUodGhpcyk7XG4gICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwudG9nZ2xlKHRoaXMpO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9zZWxlY3Quc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cblxuZnVuY3Rpb24gc2FtZShvOiB1bmtub3duKTogdW5rbm93biB7XG4gIHJldHVybiBvO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWUobzogTHlPcHRpb24pOiB1bmtub3duIHtcbiAgcmV0dXJuIG8udmFsdWU7XG59XG4iXX0=