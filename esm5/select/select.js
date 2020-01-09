import * as tslib_1 from "tslib";
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, forwardRef, Host, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, OnChanges, QueryList, ContentChildren, AfterViewInit, AfterContentInit, Directive, ContentChild } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES as FIELD_STYLES } from '@alyle/ui/field';
import { LyOverlay, LySelectionModel, LyTheme2, OverlayFactory, shadowBuilder, ThemeVariables, toBoolean, Positioning, CanDisableCtor, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir, st2c, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
export var STYLES = function (theme, ref) {
    var select = ref.selectorsOf(STYLES);
    var after = theme.after;
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:block;padding-" + after + ":1em;min-width:em;min-height:1.5em;-webkit-tap-highlight-color:transparent;}" + st2c(((theme.select
            && theme.select.root
            && (theme.select.root instanceof StyleCollection
                ? theme.select.root.setTransformer(function (fn) { return fn(select); })
                : theme.select.root(select)))), "" + className); }; },
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
                marginBefore: '-16px',
                display: 'flex',
                alignItems: 'inherit',
                alignContent: 'inherit'
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
    };
};
/** @docs-private */
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
/** @docs-private */
var LySelectBase = /** @class */ (function () {
    function LySelectBase() {
    }
    return LySelectBase;
}());
export { LySelectBase };
/** @docs-private */
export var LySelectMixinBase = mixinTabIndex(LySelectBase);
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
var LySelectTrigger = /** @class */ (function () {
    function LySelectTrigger() {
    }
    LySelectTrigger = tslib_1.__decorate([
        Directive({
            selector: 'ly-select-trigger'
        })
    ], LySelectTrigger);
    return LySelectTrigger;
}());
export { LySelectTrigger };
var LySelect = /** @class */ (function (_super) {
    tslib_1.__extends(LySelect, _super);
    function LySelect(_theme, _renderer, _el, _overlay, 
    /** @internal */
    _field, 
    /** @internal */
    _cd, _ngZone, 
    /** @docs-private */
    ngControl, _parentForm, _parentFormGroup) {
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
        /** @docs-private */
        _this.classes = _this._theme.addStyleSheet(STYLES);
        _this._disabled = false;
        _this._required = false;
        _this.stateChanges = new Subject();
        _this._form = _this._parentForm || _this._parentFormGroup;
        _this._valueKey = same;
        _this._valueKeyFn = getValue;
        _this._focused = false;
        _this.errorState = false;
        /** Emits whenever the component is destroyed. */
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
    LySelect_1 = LySelect;
    LySelect.prototype._onBlur = function () {
        if (this._focused !== false && !this._opened) {
            this._focused = false;
            this.stateChanges.next();
        }
    };
    LySelect.prototype._onFocus = function () {
        if (this._focused !== true && !this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    /** @internal */
    LySelect.prototype._endAnimation = function (e) {
        if (e.toState === 'void') {
            if (this._overlayRef) {
                this._overlayRef.remove();
                this._overlayRef = null;
            }
        }
    };
    Object.defineProperty(LySelect.prototype, "value", {
        get: function () {
            return this._value;
        },
        /** @docs-private */
        set: function (val) {
            var _this = this;
            if (val !== this.value && this._selectionModel) {
                this._value = val;
                this.writeValue(val);
                if (this.options) {
                    if (this.multiple) {
                        if (Array.isArray(this.value)) {
                            var values_1 = [];
                            this.options.forEach(function (opt) {
                                if (_this.value.some(function (_) { return _this._valueKey(_) === _this._valueKeyFn(opt); })) {
                                    values_1.push(opt);
                                }
                            });
                            if (values_1.length) {
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
                        var selecteds = this._selectionModel.selected;
                        this._selectionModel.clear();
                        if (selecteds.length) {
                            selecteds.forEach(function (opt) {
                                opt.ngOnChanges();
                                opt._cd.markForCheck();
                            });
                        }
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
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        /** Whether the input is disabled. */
        set: function (val) {
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
        get: function () { return this._required; },
        set: function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "multiple", {
        get: function () { return this._multiple; },
        set: function (value) {
            this._multiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "valueKey", {
        get: function () { return this._valueKey; },
        set: function (fn) {
            this._valueKeyFn = function (opt) { return fn(getValue(opt)); };
            this._valueKey = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (val) {
            this._placeholder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "focused", {
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "empty", {
        get: function () {
            var val = this.value;
            return this.multiple ? this._selectionModel.isEmpty() : val == null || this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "floatingLabel", {
        get: function () {
            return this._opened ? true : !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySelect.prototype, "triggerValue", {
        /** The value displayed in the trigger. */
        get: function () {
            if (this._multiple) {
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
        get: function () {
            var selected = this._selectionModel.selected;
            return this.multiple ? selected.map(function (option) { return option.value; }) : selected[0].value;
        },
        enumerable: true,
        configurable: true
    });
    LySelect.prototype.ngOnInit = function () {
        var _this = this;
        this._selectionModel = new LySelectionModel({
            multiple: this.multiple ? true : undefined,
            getKey: this._valueKeyFn
        });
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
    LySelect.prototype.ngDoCheck = function () {
        var oldVal = this.errorState;
        var newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
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
    LySelect.prototype.ngAfterContentInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.value = _this.ngControl ? _this.ngControl.value : _this._value;
            _this.stateChanges.next();
            _this._cd.markForCheck();
        });
    };
    LySelect.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.options) {
            this.options.changes.pipe(takeUntil(this._destroy)).subscribe(function () {
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
    LySelect.prototype.ngOnDestroy = function () {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        if (this._overlayRef) {
            this._overlayRef.destroy();
        }
    };
    LySelect.prototype.open = function () {
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
    LySelect.prototype.close = function () {
        if (this._overlayRef) {
            this.onTouched();
            this._overlayRef.detach();
            this._opened = false;
            this._getHostElement().focus();
            this.stateChanges.next();
        }
    };
    /** @docs-private */
    LySelect.prototype.onContainerClick = function () {
        this.open();
        this._getHostElement().focus();
    };
    /** Focuses the input. */
    LySelect.prototype.focus = function () { this._getHostElement().focus(); };
    LySelect.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    LySelect.prototype.writeValue = function (value) {
        if (this.options) {
            this.value = value;
        }
    };
    /**
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    LySelect.prototype.registerOnChange = function (fn) {
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
    LySelect.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    LySelect.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
        this.stateChanges.next();
    };
    LySelect.prototype._updatePlacement = function () {
        var el = this._overlayRef.containerElement;
        var container = el.querySelector('div');
        var nativeElement = this.valueTextDivRef.nativeElement;
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
        var selectedElement = this._selectionModel.isEmpty()
            ? el.querySelector('ly-option')
            : this._selectionModel.selected[0]._getHostElement();
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
        var position = new Positioning(YPosition.below, XPosition.after, null, nativeElement, el, this._theme.variables, offset, false);
        // set position
        this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
        this._renderer.setStyle(el, 'transform-origin', position.ox + " " + position.oy + " 0");
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        var width = position.width === 'initial'
            ? panelWidth + "px"
            : position.width;
        this._renderer.setStyle(container, 'width', width);
    };
    var LySelect_1;
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
    tslib_1.__decorate([
        ViewChild('templateRef', { static: false })
    ], LySelect.prototype, "templateRef", void 0);
    tslib_1.__decorate([
        ViewChild('valueText', { static: false })
    ], LySelect.prototype, "valueTextDivRef", void 0);
    tslib_1.__decorate([
        ViewChild(forwardRef(function () { return LyOption; }), { static: false })
    ], LySelect.prototype, "_options", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return LyOption; }), { descendants: true })
    ], LySelect.prototype, "options", void 0);
    tslib_1.__decorate([
        ContentChild(LySelectTrigger, { static: false })
    ], LySelect.prototype, "customTrigger", void 0);
    tslib_1.__decorate([
        HostListener('blur')
    ], LySelect.prototype, "_onBlur", null);
    tslib_1.__decorate([
        HostListener('focus')
    ], LySelect.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Input()
    ], LySelect.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], LySelect.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], LySelect.prototype, "required", null);
    tslib_1.__decorate([
        Input()
    ], LySelect.prototype, "multiple", null);
    tslib_1.__decorate([
        Input()
    ], LySelect.prototype, "valueKey", null);
    tslib_1.__decorate([
        Input()
    ], LySelect.prototype, "placeholder", null);
    LySelect = LySelect_1 = tslib_1.__decorate([
        Component({
            selector: 'ly-select',
            template: "<div #valueText [ngSwitch]=\"empty\">\n  <div [className]=\"classes.valueText\" *ngSwitchCase=\"true\">{{ '\\u00A0' }}</div>\n  <div [className]=\"classes.valueText\" *ngSwitchDefault [ngSwitch]=\"!!customTrigger\">\n    <span *ngSwitchDefault>{{ triggerValue || '\\u00A0' }}</span>\n    <ng-content select=\"ly-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n  </div>\n</div>\n\n<ng-template #templateRef>\n  <div #container [className]=\"classes.container\" [@selectEnter]=\"'in'\" (@selectLeave.done)=\"_endAnimation($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'lySelect',
            host: {
                '[attr.tabindex]': 'tabIndex'
            },
            animations: tslib_1.__spread(ANIMATIONS),
            inputs: ['tabIndex'],
            providers: [
                { provide: LyFieldControlBase, useExisting: LySelect_1 }
            ]
        }),
        tslib_1.__param(4, Optional()),
        tslib_1.__param(7, Optional()), tslib_1.__param(7, Self()),
        tslib_1.__param(8, Optional()),
        tslib_1.__param(9, Optional())
    ], LySelect);
    return LySelect;
}(LySelectMixinBase));
export { LySelect };
/** @docs-private */
var LyOptionBase = /** @class */ (function () {
    function LyOptionBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyOptionBase;
}());
export { LyOptionBase };
/** @docs-private */
export var LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
var LyOption = /** @class */ (function (_super) {
    tslib_1.__extends(LyOption, _super);
    function LyOption(/** @internal */ _select, _el, 
    /** @internal */
    _rippleService, _renderer, _theme, 
    /** @internal */
    _cd, _ngZone) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._select = _select;
        _this._el = _el;
        _this._rippleService = _rippleService;
        _this._cd = _cd;
        /** @docs-private */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, _this.classes.option);
        _this.setAutoContrast();
        _this._triggerElement = _el;
        return _this;
    }
    LyOption.prototype._onClick = function () {
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
        get: function () {
            return this._value;
        },
        /**
         * Tracks simple string values bound to the option element.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOption.prototype, "viewValue", {
        /** The displayed value of the option. */
        get: function () {
            return (this._getHostElement().textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOption.prototype, "_color", {
        /** The color of Select */
        get: function () {
            return this._select._selectionModel.isSelected(this) ? this._select._field.color : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyOption.prototype, "isSelected", {
        get: function () {
            return this._select._selectionModel.isSelected(this);
        },
        enumerable: true,
        configurable: true
    });
    LyOption.prototype.ngOnInit = function () {
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    LyOption.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyOption.prototype.select = function () {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
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
    LyOption.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
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
    LyOption.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LyOption.ctorParameters = function () { return [
        { type: LySelect, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: LyRippleService },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    tslib_1.__decorate([
        ViewChild('rippleContainer', { static: false })
    ], LyOption.prototype, "_rippleContainer", void 0);
    tslib_1.__decorate([
        HostListener('click')
    ], LyOption.prototype, "_onClick", null);
    tslib_1.__decorate([
        Input('value')
    ], LyOption.prototype, "value", null);
    LyOption = tslib_1.__decorate([
        Component({
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
        }),
        tslib_1.__param(0, Host())
    ], LyOption);
    return LyOption;
}(LyOptionMixinBase));
export { LyOption };
function same(o) {
    return o;
}
function getValue(o) {
    return o.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ04sTUFBTSxxQkFBcUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsT0FBTyxFQUNQLFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxZQUFZLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsU0FBUyxFQUNULE1BQU0sRUFDTCxNQUFNLGdCQUFnQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxJQUFJLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUNiLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILElBQUksRUFD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Q0FBQTtPQTNDUixRQUFRLENBaUlwQjtJQUFELGVBQUM7Q0FBQSxBQWpJRCxDQUE4QixpQkFBaUIsR0FpSTlDO1NBaklZLFFBQVE7QUFtSXJCLFNBQVMsSUFBSSxDQUFDLENBQVU7SUFDdEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBQ0QsU0FBUyxRQUFRLENBQUMsQ0FBVztJQUMzQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIGtleWZyYW1lcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbiAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIENvbnRlbnRDaGlsZFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgTmdDb250cm9sLFxuICBOZ0Zvcm1cbiAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUZpZWxkLCBMeUZpZWxkQ29udHJvbEJhc2UsIFNUWUxFUyBhcyBGSUVMRF9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWkvZmllbGQnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5LFxuICBMeVNlbGVjdGlvbk1vZGVsLFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZhY3RvcnksXG4gIHNoYWRvd0J1aWxkZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIFBvc2l0aW9uaW5nLFxuICBDYW5EaXNhYmxlQ3RvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpblRhYkluZGV4LFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBEaXIsXG4gIHN0MmMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTZWxlY3RUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIFNlbGVjdCBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTZWxlY3RWYXJpYWJsZXMge1xuICBzZWxlY3Q/OiBMeVNlbGVjdFRoZW1lO1xufVxuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNlbGVjdFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBzZWxlY3QgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgeyBhZnRlciB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztwYWRkaW5nLSR7YWZ0ZXJ9OjFlbTttaW4td2lkdGg6ZW07bWluLWhlaWdodDoxLjVlbTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7fSR7c3QyYygoXG4gICAgICAgICAgKHRoZW1lLnNlbGVjdFxuICAgICAgICAgICAgJiYgdGhlbWUuc2VsZWN0LnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5zZWxlY3Qucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLnNlbGVjdC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKHNlbGVjdCkpXG4gICAgICAgICAgICAgIDogdGhlbWUuc2VsZWN0LnJvb3Qoc2VsZWN0KSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnaW5oZXJpdCcsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICBtYXhIZWlnaHQ6ICcyNTZweCdcbiAgICB9LFxuICAgIHZhbHVlVGV4dDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LFxuICAgIG9wdGlvbjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLCAwLCAwLCAwKWAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBwYWRkaW5nOiAnMCAxZW0nLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICczZW0nLFxuICAgICAgaGVpZ2h0OiAnM2VtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSxcbiAgICBvcHRpb25UZXh0OiB7XG4gICAgICAnbHktY2hlY2tib3ggfiAmJzoge1xuICAgICAgICBtYXJnaW5CZWZvcmU6ICctMTZweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IEFOSU1BVElPTlMgPSBbXG4gIHRyaWdnZXIoJ3NlbGVjdEVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjkpJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuICAgICAgICB9KVxuICAgICAgXSkpXG4gICAgXSksXG4gIF0pLFxuICB0cmlnZ2VyKCdzZWxlY3RMZWF2ZScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyAyNW1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5U2VsZWN0QmFzZSB7IH1cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlTZWxlY3RNaXhpbkJhc2UgPSBtaXhpblRhYkluZGV4KEx5U2VsZWN0QmFzZSBhcyBDYW5EaXNhYmxlQ3Rvcik7XG5cbi8qKlxuICogQWxsb3dzIHRoZSB1c2VyIHRvIGN1c3RvbWl6ZSB0aGUgdHJpZ2dlciB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSBzZWxlY3QgaGFzIGEgdmFsdWUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXNlbGVjdC10cmlnZ2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNlbGVjdFRyaWdnZXIgeyB9XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5U2VsZWN0JyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJpbmRleF0nOiAndGFiSW5kZXgnXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFsuLi5BTklNQVRJT05TXSxcbiAgaW5wdXRzOiBbJ3RhYkluZGV4J10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTHlGaWVsZENvbnRyb2xCYXNlLCB1c2VFeGlzdGluZzogTHlTZWxlY3QgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5U2VsZWN0XG4gICAgZXh0ZW5kcyBMeVNlbGVjdE1peGluQmFzZVxuICAgIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEx5RmllbGRDb250cm9sQmFzZSwgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICAvKiogQGludGVybmFsICovXG4gIF9zZWxlY3Rpb25Nb2RlbDogTHlTZWxlY3Rpb25Nb2RlbDxMeU9wdGlvbj47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3ZhbHVlOiBhbnk7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlGYWN0b3J5IHwgbnVsbDtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGFzRGlzYWJsZWRDbGFzcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2Vycm9yQ2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSB8IG51bGwgPSB0aGlzLl9wYXJlbnRGb3JtIHx8IHRoaXMuX3BhcmVudEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmFsdWVLZXk6IChvcHQ6IHVua25vd24pID0+IHVua25vd24gPSBzYW1lO1xuICBwcml2YXRlIF92YWx1ZUtleUZuOiAob3B0OiBMeU9wdGlvbikgPT4gdW5rbm93biA9IGdldFZhbHVlO1xuICBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvclN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1cnNvckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndmFsdWVUZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHZhbHVlVGV4dERpdlJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9vcHRpb25zOiBRdWVyeUxpc3Q8THlPcHRpb24+O1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlPcHRpb24pLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG9wdGlvbnM6IFF1ZXJ5TGlzdDxMeU9wdGlvbj47XG4gIEBDb250ZW50Q2hpbGQoTHlTZWxlY3RUcmlnZ2VyLCB7IHN0YXRpYzogZmFsc2UgfSkgY3VzdG9tVHJpZ2dlcjogTHlTZWxlY3RUcmlnZ2VyO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGNoYW5nZSBldmVudCBvY2N1cnMgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IGZhbHNlICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gdHJ1ZSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlICYmIHRoaXMuX3NlbGVjdGlvbk1vZGVsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWwpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXM6IEx5T3B0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnNvbWUoXyA9PiB0aGlzLl92YWx1ZUtleShfKSA9PT0gdGhpcy5fdmFsdWVLZXlGbihvcHQpKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9wdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICAgICAgLy8gc2VsZWN0IHZhbHVlc1xuICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChvcHQgPT4gb3B0LnNlbGVjdCgpKTtcblxuICAgICAgICAgICAgICAvLyBkZXNlbGVjdCBvbGQgdmFsdWVzXG4gICAgICAgICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgIG9wdC5uZ09uQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgb3B0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgIG9wdC5uZ09uQ2hhbmdlcygpO1xuICAgICAgICAgICAgICBvcHQuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmluZChvcHQgPT4gdGhpcy5fdmFsdWVLZXlGbihvcHQpID09PSB0aGlzLnZhbHVlS2V5KHRoaXMudmFsdWUpKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNlbGVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9tdWx0aXBsZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZUtleShmbjogKG9wdDogdW5rbm93bikgPT4gdW5rbm93bikge1xuICAgIHRoaXMuX3ZhbHVlS2V5Rm4gPSAob3B0OiBMeU9wdGlvbikgPT4gZm4oZ2V0VmFsdWUob3B0KSk7XG4gICAgdGhpcy5fdmFsdWVLZXkgPSBmbjtcbiAgfVxuICBnZXQgdmFsdWVLZXkoKTogKG9wdDogdW5rbm93bikgPT4gdW5rbm93biB7IHJldHVybiB0aGlzLl92YWx1ZUtleTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpIDogdmFsID09IG51bGwgfHwgdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpO1xuICB9XG5cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZCA/IHRydWUgOiAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIC8qKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB0cmlnZ2VyLiAqL1xuICBnZXQgdHJpZ2dlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX211bHRpcGxlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52aWV3VmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gRGlyLnJ0bCkge1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnMucmV2ZXJzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25zLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLnZpZXdWYWx1ZTtcbiAgfVxuXG4gIC8qKiBDdXJyZW50IHNlbGVjdGVkcyAqL1xuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHNlbGVjdGVkLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSA6IHNlbGVjdGVkWzBdLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZmllbGQ6IEx5RmllbGQsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBwcm92aWRlIHRoZSB2YWx1ZSBhY2Nlc3NvciB0aHJvdWdoIGhlcmUsIGluc3RlYWQgb2ZcbiAgICAgIC8vIHRoZSBgcHJvdmlkZXJzYCB0byBhdm9pZCBydW5uaW5nIGludG8gYSBjaXJjdWxhciBpbXBvcnQuXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseUZpZWxkLnNlbGVjdCcsIHtcbiAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfVxuICAgIH0sIHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBudWxsLCBTVFlMRV9QUklPUklUWSwgRklFTERfU1RZTEVTKTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwgPSBuZXcgTHlTZWxlY3Rpb25Nb2RlbDxMeU9wdGlvbj4oe1xuICAgICAgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICAgZ2V0S2V5OiB0aGlzLl92YWx1ZUtleUZuXG4gICAgfSk7XG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5uZ0NvbnRyb2w7XG5cbiAgICAvLyB1cGRhdGUgc3R5bGVzIG9uIGRpc2FibGVkXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhIW5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGNsYXNzIHtzZWxlY3RBcnJvd30gdG8gYDxzZWxlY3Q+YFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLnNlbGVjdEFycm93KTtcblxuICAgIC8vIGFwcGx5IGRlZmF1bHQgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbGQuY2xhc3Nlcy5pbnB1dE5hdGl2ZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBuZXdWYWwgPSAhISh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmICh0aGlzLm5nQ29udHJvbC50b3VjaGVkIHx8ICh0aGlzLl9mb3JtICYmIHRoaXMuX2Zvcm0uc3VibWl0dGVkKSkpO1xuICAgIGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3VmFsO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9maWVsZC5jbGFzc2VzLmVycm9yU3RhdGU7XG4gICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IGVycm9yQ2xhc3M7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZXJyb3JDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC52YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLmNoYW5nZXMucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRzOiBMeU9wdGlvbltdID0gW107XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZHMucHVzaChvcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcyBvbmx5IHVwZGF0ZSB0aGUgcmVmc1xuICAgICAgICBpZiAoc2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgc2VsZWN0ZWRzLmZvckVhY2gob3B0aW9uID0+IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChvcHRpb24pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhpcy5fdXBkYXRlU2VsZWN0ZWRDbGFzcygpO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLnRlbXBsYXRlUmVmLCBudWxsLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICB9LFxuICAgICAgZm5EZXN0cm95OiB0aGlzLmNsb3NlLmJpbmQodGhpcyksXG4gICAgICBvblJlc2l6ZVNjcm9sbDogdGhpcy5fdXBkYXRlUGxhY2VtZW50LmJpbmQodGhpcylcbiAgICB9KTtcbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZShcbiAgICAgIHRha2UoMSlcbiAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgIHRoaXMub3BlbigpO1xuICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7IHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTsgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBcInZhbHVlXCIgcHJvcGVydHkgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgY2hlY2tlZCB2YWx1ZVxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKF92YWx1ZVN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICBmbih0aGlzLnZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgc2VsZWN0LiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgcmVxdWlyZWRcbiAgICogdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX292ZXJsYXlSZWYhLmNvbnRhaW5lckVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gZWwucXVlcnlTZWxlY3RvcignZGl2JykhO1xuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy52YWx1ZVRleHREaXZSZWY7XG4gICAgbGV0IHBhbmVsV2lkdGg6IG51bWJlcjtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBwYW5lbFdpZHRoID0gbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDMyICogMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFuZWxXaWR0aCA9IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyAzMjtcbiAgICB9XG5cblxuICAgIC8vIHJlc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgJ2luaXRpYWwnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsIGAke3BhbmVsV2lkdGh9cHhgKTtcblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKVxuICAgICAgICA/IGVsLnF1ZXJ5U2VsZWN0b3IoJ2x5LW9wdGlvbicpIVxuICAgICAgICA6IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLl9nZXRIb3N0RWxlbWVudCgpO1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0ge1xuICAgICAgeTogLShuYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDIgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDIpLFxuICAgICAgeDogLTE2XG4gICAgfTtcblxuICAgIC8vIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cbiAgICBpZiAoY29udGFpbmVyLnNjcm9sbEhlaWdodCAhPT0gY29udGFpbmVyLm9mZnNldEhlaWdodCkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICBpZiAoY29udGFpbmVyLnNjcm9sbFRvcCA9PT0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCkge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcCAtIChjb250YWluZXIub2Zmc2V0SGVpZ2h0IC8gMikgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAyIC0gKHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3AgLSBjb250YWluZXIuc2Nyb2xsVG9wKSkgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIG9mZnNldC55ID0gY29udGFpbmVyLnNjcm9sbFRvcCArIG9mZnNldC55O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBvZmZzZXQueCAtPSAyNDtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbmluZyhcbiAgICAgIFlQb3NpdGlvbi5iZWxvdyxcbiAgICAgIFhQb3NpdGlvbi5hZnRlcixcbiAgICAgIG51bGwgYXMgYW55LFxuICAgICAgbmF0aXZlRWxlbWVudCxcbiAgICAgIGVsLFxuICAgICAgdGhpcy5fdGhlbWUudmFyaWFibGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgsIDApYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0tb3JpZ2luJywgYCR7cG9zaXRpb24ub3h9ICR7cG9zaXRpb24ub3l9IDBgKTtcblxuICAgIC8vIHNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsIHBvc2l0aW9uLmhlaWdodCk7XG4gICAgY29uc3Qgd2lkdGggPSBwb3NpdGlvbi53aWR0aCA9PT0gJ2luaXRpYWwnXG4gICAgICAgICAgPyBgJHtwYW5lbFdpZHRofXB4YFxuICAgICAgICAgIDogcG9zaXRpb24ud2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCB3aWR0aCk7XG4gIH1cblxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5T3B0aW9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeU9wdGlvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgICAgbWl4aW5Db2xvcihcbiAgICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlPcHRpb25CYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3B0aW9uIGV4dGVuZHMgTHlPcHRpb25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF92YWx1ZTogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX29uQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICB0aGlzLl9zZWxlY3QuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0Lm9uQ2hhbmdlKHRoaXMuX3NlbGVjdC5fdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBzaW1wbGUgc3RyaW5nIHZhbHVlcyBib3VuZCB0byB0aGUgb3B0aW9uIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKiogVGhlIGRpc3BsYXllZCB2YWx1ZSBvZiB0aGUgb3B0aW9uLiAqL1xuICBnZXQgdmlld1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICgodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSBhcyBFbGVtZW50KS50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiBTZWxlY3QgKi9cbiAgZ2V0IF9jb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpID8gdGhpcy5fc2VsZWN0Ll9maWVsZC5jb2xvciA6ICcnO1xuICB9XG5cbiAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgQEhvc3QoKSBwdWJsaWMgX3NlbGVjdDogTHlTZWxlY3QsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBwdWJsaWMgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgX25nWm9uZTogTmdab25lKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBfbmdab25lKTtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vcHRpb24pO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHRoaXMpO1xuICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSkge1xuICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fc2VsZWN0LnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwudG9nZ2xlKHRoaXMpO1xuICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSkge1xuICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnRvZ2dsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fc2VsZWN0LnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHNhbWUobzogdW5rbm93bik6IHVua25vd24ge1xuICByZXR1cm4gbztcbn1cbmZ1bmN0aW9uIGdldFZhbHVlKG86IEx5T3B0aW9uKTogdW5rbm93biB7XG4gIHJldHVybiBvLnZhbHVlO1xufVxuIl19