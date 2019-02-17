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
                        '(click)': 'open()',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNOLE1BQU0scUJBQXFCLENBQUM7QUFDL0IsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBRU4sU0FBUyxFQUNULGVBQWUsRUFHZCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDVCxNQUFNLEVBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sSUFBSSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBRVIsYUFBYSxFQUViLFNBQVMsRUFDVCxXQUFXLEVBRVgsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxVQUFVLEVBQ1YsV0FBVyxFQUNYLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDRixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTNDLHNCQUFzQixHQUFHLEtB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MkJBRTNCLFlBQVksU0FBQyxPQUFPO3dCQWFwQixLQUFLLFNBQUMsT0FBTzs7SUE2R2hCLGVBQUM7Q0FBQSxBQWhKRCxDQWU4QixpQkFBaUIsR0FpSTlDO1NBaklZLFFBQVE7Ozs7OztJQUVuQiwyQkFBcUU7Ozs7O0lBQ3JFLDBCQUFvQjs7SUFFcEIsb0NBQTJEOzs7OztJQXNDL0MsMkJBQWdDOzs7OztJQUNoQyx1QkFBdUI7Ozs7O0lBRXZCLGtDQUFzQzs7Ozs7SUFJdEMsdUJBQTZCOzs7Ozs7QUFpRjNDLFNBQVMsSUFBSSxDQUFDLENBQVU7SUFDdEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDOzs7OztBQUNELFNBQVMsUUFBUSxDQUFDLENBQVc7SUFDM0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBrZXlmcmFtZXMsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgTmdDb250cm9sLFxuICBOZ0Zvcm1cbiAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUZpZWxkLCBMeUZpZWxkQ29udHJvbEJhc2UsIFNUWUxFUyBhcyBGSUVMRF9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWkvZmllbGQnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5LFxuICBMeVNlbGVjdGlvbk1vZGVsLFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZhY3RvcnksXG4gIHNoYWRvd0J1aWxkZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIFBvc2l0aW9uaW5nLFxuICBDYW5EaXNhYmxlQ3RvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpblRhYkluZGV4LFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBEaXJcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmdBZnRlcjogJzFlbScsXG4gICAgbWluV2lkdGg6ICczZW0nLFxuICAgIG1pbkhlaWdodDogJzEuNWVtJyxcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50J1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0KSxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2luaGVyaXQnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgbWF4SGVpZ2h0OiAnMjU2cHgnXG4gIH0sXG4gIHZhbHVlVGV4dDoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfSxcbiAgb3B0aW9uOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgIGJvcmRlcjogMCxcbiAgICBwYWRkaW5nOiAnMCAxZW0nLFxuICAgIG1hcmdpbjogMCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGxpbmVIZWlnaHQ6ICczZW0nLFxuICAgIGhlaWdodDogJzNlbScsXG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgb3B0aW9uVGV4dDoge1xuICAgICdseS1jaGVja2JveCB+ICYnOiB7XG4gICAgICBtYXJnaW5CZWZvcmU6ICctMTZweCdcbiAgICB9XG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignc2VsZWN0RW50ZXInLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBpbicsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOSknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknXG4gICAgICAgIH0pXG4gICAgICBdKSlcbiAgICBdKSxcbiAgXSksXG4gIHRyaWdnZXIoJ3NlbGVjdExlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzEwMG1zIDI1bXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgXSlcbl07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlTZWxlY3RCYXNlIHsgfVxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVNlbGVjdE1peGluQmFzZSA9IG1peGluVGFiSW5kZXgoTHlTZWxlY3RCYXNlIGFzIENhbkRpc2FibGVDdG9yKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5U2VsZWN0JyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29wZW4oKScsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICd0YWJJbmRleCdcbiAgfSxcbiAgYW5pbWF0aW9uczogWy4uLkFOSU1BVElPTlNdLFxuICBpbnB1dHM6IFsndGFiSW5kZXgnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMeUZpZWxkQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBMeVNlbGVjdCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlTZWxlY3RcbiAgICBleHRlbmRzIEx5U2VsZWN0TWl4aW5CYXNlXG4gICAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTHlGaWVsZENvbnRyb2xCYXNlLCBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICAvKiogQGludGVybmFsICovXG4gIF9zZWxlY3Rpb25Nb2RlbDogTHlTZWxlY3Rpb25Nb2RlbDxMeU9wdGlvbj47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3ZhbHVlOiBhbnk7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlGYWN0b3J5IHwgbnVsbDtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGFzRGlzYWJsZWRDbGFzcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2Vycm9yQ2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSB8IG51bGwgPSB0aGlzLl9wYXJlbnRGb3JtIHx8IHRoaXMuX3BhcmVudEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmFsdWVLZXk6IChvcHQ6IHVua25vd24pID0+IHVua25vd24gPSBzYW1lO1xuICBwcml2YXRlIF92YWx1ZUtleUZuOiAob3B0OiBMeU9wdGlvbikgPT4gdW5rbm93biA9IGdldFZhbHVlO1xuICBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvclN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1cnNvckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndmFsdWVUZXh0JykgdmFsdWVUZXh0RGl2UmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBAVmlld0NoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlPcHRpb24pKSBfb3B0aW9uczogUXVlcnlMaXN0PEx5T3B0aW9uPjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25zOiBRdWVyeUxpc3Q8THlPcHRpb24+O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGNoYW5nZSBldmVudCBvY2N1cnMgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IGZhbHNlICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gdHJ1ZSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlICYmIHRoaXMuX3NlbGVjdGlvbk1vZGVsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWwpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXM6IEx5T3B0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnNvbWUoXyA9PiB0aGlzLl92YWx1ZUtleShfKSA9PT0gdGhpcy5fdmFsdWVLZXlGbihvcHQpKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9wdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICAgICAgLy8gc2VsZWN0IHZhbHVlc1xuICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChvcHQgPT4gb3B0LnNlbGVjdCgpKTtcblxuICAgICAgICAgICAgICAvLyBkZXNlbGVjdCBvbGQgdmFsdWVzXG4gICAgICAgICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgIG9wdC5uZ09uQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgb3B0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgIG9wdC5uZ09uQ2hhbmdlcygpO1xuICAgICAgICAgICAgICBvcHQuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmluZChvcHQgPT4gdGhpcy5fdmFsdWVLZXlGbihvcHQpID09PSB0aGlzLnZhbHVlS2V5KHRoaXMudmFsdWUpKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNlbGVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9tdWx0aXBsZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZUtleShmbjogKG9wdDogdW5rbm93bikgPT4gdW5rbm93bikge1xuICAgIHRoaXMuX3ZhbHVlS2V5Rm4gPSAob3B0OiBMeU9wdGlvbikgPT4gZm4oZ2V0VmFsdWUob3B0KSk7XG4gICAgdGhpcy5fdmFsdWVLZXkgPSBmbjtcbiAgfVxuICBnZXQgdmFsdWVLZXkoKTogKG9wdDogdW5rbm93bikgPT4gdW5rbm93biB7IHJldHVybiB0aGlzLl92YWx1ZUtleTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpIDogdmFsID09IG51bGwgfHwgdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpO1xuICB9XG5cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZCA/IHRydWUgOiAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIC8qKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB0cmlnZ2VyLiAqL1xuICBnZXQgdHJpZ2dlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX211bHRpcGxlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52aWV3VmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gRGlyLnJ0bCkge1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnMucmV2ZXJzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25zLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLnZpZXdWYWx1ZTtcbiAgfVxuXG4gIC8qKiBDdXJyZW50IHNlbGVjdGVkcyAqL1xuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHNlbGVjdGVkLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSA6IHNlbGVjdGVkWzBdLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZmllbGQ6IEx5RmllbGQsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBwcm92aWRlIHRoZSB2YWx1ZSBhY2Nlc3NvciB0aHJvdWdoIGhlcmUsIGluc3RlYWQgb2ZcbiAgICAgIC8vIHRoZSBgcHJvdmlkZXJzYCB0byBhdm9pZCBydW5uaW5nIGludG8gYSBjaXJjdWxhciBpbXBvcnQuXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseUZpZWxkLnNlbGVjdCcsIHtcbiAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfVxuICAgIH0sIHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBudWxsLCBTVFlMRV9QUklPUklUWSwgRklFTERfU1RZTEVTKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsID0gbmV3IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+KHtcbiAgICAgIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGdldEtleTogdGhpcy5fdmFsdWVLZXlGblxuICAgIH0pO1xuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMubmdDb250cm9sO1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgb24gZGlzYWJsZWRcbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9ICEhbmdDb250cm9sLmRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgY2xhc3Mge3NlbGVjdEFycm93fSB0byBgPHNlbGVjdD5gXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuc2VsZWN0QXJyb3cpO1xuXG4gICAgLy8gYXBwbHkgZGVmYXVsdCBzdHlsZXNcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsZC5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IG5ld1ZhbCA9ICEhKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgKHRoaXMubmdDb250cm9sLnRvdWNoZWQgfHwgKHRoaXMuX2Zvcm0gJiYgdGhpcy5fZm9ybS5zdWJtaXR0ZWQpKSk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdWYWw7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2ZpZWxkLmNsYXNzZXMuZXJyb3JTdGF0ZTtcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gZXJyb3JDbGFzcztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJvckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5nQ29udHJvbCA/IHRoaXMubmdDb250cm9sLnZhbHVlIDogdGhpcy5fdmFsdWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZHM6IEx5T3B0aW9uW10gPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9uLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzIG9ubHkgdXBkYXRlIHRoZSByZWZzXG4gICAgICAgIGlmIChzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICBzZWxlY3RlZHMuZm9yRWFjaChvcHRpb24gPT4gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG9wdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGlzLl91cGRhdGVTZWxlY3RlZENsYXNzKCk7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMudGVtcGxhdGVSZWYsIG51bGwsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IG51bGxcbiAgICAgIH0sXG4gICAgICBmbkRlc3Ryb3k6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcbiAgICAgIG9uUmVzaXplU2Nyb2xsOiB0aGlzLl91cGRhdGVQbGFjZW1lbnQuYmluZCh0aGlzKVxuICAgIH0pO1xuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKFxuICAgICAgdGFrZSgxKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVBsYWNlbWVudCgpKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cygpOiB2b2lkIHsgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpOyB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwidmFsdWVcIiBwcm9wZXJ0eSBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBjaGVja2VkIHZhbHVlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAoX3ZhbHVlU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIGZuKHRoaXMudmFsdWUpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzZWxlY3QuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fb3ZlcmxheVJlZiEuY29udGFpbmVyRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCdkaXYnKSE7XG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLnZhbHVlVGV4dERpdlJlZjtcbiAgICBsZXQgcGFuZWxXaWR0aDogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHBhbmVsV2lkdGggPSBuYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgMzIgKiAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbFdpZHRoID0gbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDMyO1xuICAgIH1cblxuXG4gICAgLy8gcmVzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCAnaW5pdGlhbCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgYCR7cGFuZWxXaWR0aH1weGApO1xuXG5cbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpXG4gICAgICAgID8gZWwucXVlcnlTZWxlY3RvcignbHktb3B0aW9uJykhXG4gICAgICAgIDogdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0uX2dldEhvc3RFbGVtZW50KCk7XG5cbiAgICBjb25zdCBvZmZzZXQgPSB7XG4gICAgICB5OiAtKG5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3AgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiksXG4gICAgICB4OiAtMTZcbiAgICB9O1xuXG4gICAgLy8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgIGlmIChjb250YWluZXIuc2Nyb2xsSGVpZ2h0ICE9PSBjb250YWluZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIGlmIChjb250YWluZXIuc2Nyb2xsVG9wID09PSBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wKSB7XG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAyKSArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgLSAoY29udGFpbmVyLm9mZnNldEhlaWdodCAvIDIgLSAoc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCAtIGNvbnRhaW5lci5zY3JvbGxUb3ApKSArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgb2Zmc2V0LnkgPSBjb250YWluZXIuc2Nyb2xsVG9wICsgb2Zmc2V0Lnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIG9mZnNldC54IC09IDI0O1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKFxuICAgICAgWVBvc2l0aW9uLmJlbG93LFxuICAgICAgWFBvc2l0aW9uLmFmdGVyLFxuICAgICAgbnVsbCBhcyBhbnksXG4gICAgICBuYXRpdmVFbGVtZW50LFxuICAgICAgZWwsXG4gICAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICAvLyBzZXQgcG9zaXRpb25cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuXG4gICAgLy8gc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgcG9zaXRpb24uaGVpZ2h0KTtcbiAgICBjb25zdCB3aWR0aCA9IHBvc2l0aW9uLndpZHRoID09PSAnaW5pdGlhbCdcbiAgICAgICAgICA/IGAke3BhbmVsV2lkdGh9cHhgXG4gICAgICAgICAgOiBwb3NpdGlvbi53aWR0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHdpZHRoKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlPcHRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5T3B0aW9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgICBtaXhpbkNvbG9yKFxuICAgICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeU9wdGlvbkJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcHRpb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlPcHRpb24gZXh0ZW5kcyBMeU9wdGlvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9vbkNsaWNrKCkge1xuICAgIGlmICghdGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgdGhpcy5fc2VsZWN0LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5vbkNoYW5nZSh0aGlzLl9zZWxlY3QuX3ZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3Mgc2ltcGxlIHN0cmluZyB2YWx1ZXMgYm91bmQgdG8gdGhlIG9wdGlvbiBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFRoZSBkaXNwbGF5ZWQgdmFsdWUgb2YgdGhlIG9wdGlvbi4gKi9cbiAgZ2V0IHZpZXdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoKHRoaXMuX2dldEhvc3RFbGVtZW50KCkgYXMgRWxlbWVudCkudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgU2VsZWN0ICovXG4gIGdldCBfY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSA/IHRoaXMuX3NlbGVjdC5fZmllbGQuY29sb3IgOiAnJztcbiAgfVxuXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIEBIb3N0KCkgcHVibGljIF9zZWxlY3Q6IEx5U2VsZWN0LFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgIHN1cGVyKF90aGVtZSwgX25nWm9uZSk7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub3B0aW9uKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZWxlY3QuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX3NlbGVjdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnRvZ2dsZSh0aGlzKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC50b2dnbGUodGhpcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZWxlY3QuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX3NlbGVjdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBzYW1lKG86IHVua25vd24pOiB1bmtub3duIHtcbiAgcmV0dXJuIG87XG59XG5mdW5jdGlvbiBnZXRWYWx1ZShvOiBMeU9wdGlvbik6IHVua25vd24ge1xuICByZXR1cm4gby52YWx1ZTtcbn1cbiJdfQ==