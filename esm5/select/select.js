import * as tslib_1 from "tslib";
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, forwardRef, Host, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, OnChanges, QueryList, ContentChildren, AfterViewInit, AfterContentInit, Directive, ContentChild } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES as FIELD_STYLES } from '@alyle/ui/field';
import { LyOverlay, LySelectionModel, LyTheme2, OverlayFactory, shadowBuilder, ThemeVariables, toBoolean, Positioning, CanDisableCtor, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir, styleTemplateToString, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
export var STYLES = function (theme, ref) {
    var select = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:block;padding-after:1em;min-width:em;min-height:1.5em;-webkit-tap-highlight-color:transparent;}" + styleTemplateToString(((theme.select
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ04sTUFBTSxxQkFBcUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsT0FBTyxFQUNQLFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxZQUFZLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsU0FBUyxFQUNULE1BQU0sRUFDTCxNQUFNLGdCQUFnQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxJQUFJLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUNiLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILHFCQUFxQixF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QUFDO0NBQUEsQUFqSUQsQ0FBOEIsaUJBQWlCLEdBaUk5QztTQWpJWSxRQUFRO0FBbUlyQixTQUFTLElBQUksQ0FBQyxDQUFVO0lBQ3RCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUNELFNBQVMsUUFBUSxDQUFDLENBQVc7SUFDM0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBrZXlmcmFtZXMsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBDb250ZW50Q2hpbGRcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gIE5nQ29udHJvbCxcbiAgTmdGb3JtXG4gIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlGaWVsZCwgTHlGaWVsZENvbnRyb2xCYXNlLCBTVFlMRVMgYXMgRklFTERfU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpL2ZpZWxkJztcbmltcG9ydCB7XG4gIEx5T3ZlcmxheSxcbiAgTHlTZWxlY3Rpb25Nb2RlbCxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBQb3NpdGlvbmluZyxcbiAgQ2FuRGlzYWJsZUN0b3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5UYWJJbmRleCxcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgRGlyLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTZWxlY3RUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIFNlbGVjdCBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTZWxlY3RWYXJpYWJsZXMge1xuICBzZWxlY3Q/OiBMeVNlbGVjdFRoZW1lO1xufVxuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNlbGVjdFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBzZWxlY3QgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3BhZGRpbmctYWZ0ZXI6MWVtO21pbi13aWR0aDplbTttaW4taGVpZ2h0OjEuNWVtOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5zZWxlY3RcbiAgICAgICAgICAgICYmIHRoZW1lLnNlbGVjdC5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuc2VsZWN0LnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5zZWxlY3Qucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihzZWxlY3QpKVxuICAgICAgICAgICAgICA6IHRoZW1lLnNlbGVjdC5yb290KHNlbGVjdCkpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX1gLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2luaGVyaXQnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgbWF4SGVpZ2h0OiAnMjU2cHgnXG4gICAgfSxcbiAgICB2YWx1ZVRleHQ6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcbiAgICBvcHRpb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgcGFkZGluZzogJzAgMWVtJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBsaW5lSGVpZ2h0OiAnM2VtJyxcbiAgICAgIGhlaWdodDogJzNlbScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0sXG4gICAgb3B0aW9uVGV4dDoge1xuICAgICAgJ2x5LWNoZWNrYm94IH4gJic6IHtcbiAgICAgICAgbWFyZ2luQmVmb3JlOiAnLTE2cHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBBTklNQVRJT05TID0gW1xuICB0cmlnZ2VyKCdzZWxlY3RFbnRlcicsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC45KSdcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignc2VsZWN0TGVhdmUnLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICBdKVxuXTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVNlbGVjdEJhc2UgeyB9XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5U2VsZWN0TWl4aW5CYXNlID0gbWl4aW5UYWJJbmRleChMeVNlbGVjdEJhc2UgYXMgQ2FuRGlzYWJsZUN0b3IpO1xuXG4vKipcbiAqIEFsbG93cyB0aGUgdXNlciB0byBjdXN0b21pemUgdGhlIHRyaWdnZXIgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgc2VsZWN0IGhhcyBhIHZhbHVlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1zZWxlY3QtdHJpZ2dlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlTZWxlY3RUcmlnZ2VyIHsgfVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseVNlbGVjdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ3RhYkluZGV4J1xuICB9LFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIGlucHV0czogWyd0YWJJbmRleCddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEx5RmllbGRDb250cm9sQmFzZSwgdXNlRXhpc3Rpbmc6IEx5U2VsZWN0IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNlbGVjdFxuICAgIGV4dGVuZHMgTHlTZWxlY3RNaXhpbkJhc2VcbiAgICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBMeUZpZWxkQ29udHJvbEJhc2UsIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0aW9uTW9kZWw6IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+O1xuICAvKiogQGludGVybmFsICovXG4gIF92YWx1ZTogYW55O1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5RmFjdG9yeSB8IG51bGw7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2hhc0Rpc2FibGVkQ2xhc3M/OiBib29sZWFuO1xuICBwcml2YXRlIF9lcnJvckNsYXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9mb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUgfCBudWxsID0gdGhpcy5fcGFyZW50Rm9ybSB8fCB0aGlzLl9wYXJlbnRGb3JtR3JvdXA7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZhbHVlS2V5OiAob3B0OiB1bmtub3duKSA9PiB1bmtub3duID0gc2FtZTtcbiAgcHJpdmF0ZSBfdmFsdWVLZXlGbjogKG9wdDogTHlPcHRpb24pID0+IHVua25vd24gPSBnZXRWYWx1ZTtcbiAgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJzb3JDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3ZhbHVlVGV4dCcsIHsgc3RhdGljOiBmYWxzZSB9KSB2YWx1ZVRleHREaXZSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICAvKiogQGludGVybmFsICovXG4gIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeU9wdGlvbiksIHsgc3RhdGljOiBmYWxzZSB9KSBfb3B0aW9uczogUXVlcnlMaXN0PEx5T3B0aW9uPjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25zOiBRdWVyeUxpc3Q8THlPcHRpb24+O1xuICBAQ29udGVudENoaWxkKEx5U2VsZWN0VHJpZ2dlciwgeyBzdGF0aWM6IGZhbHNlIH0pIGN1c3RvbVRyaWdnZXI6IEx5U2VsZWN0VHJpZ2dlcjtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBjaGFuZ2UgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBibHVyIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSBmYWxzZSAmJiAhdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IHRydWUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2VuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVmID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSAmJiB0aGlzLl9zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBMeU9wdGlvbltdID0gW107XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5zb21lKF8gPT4gdGhpcy5fdmFsdWVLZXkoXykgPT09IHRoaXMuX3ZhbHVlS2V5Rm4ob3B0KSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvcHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgICAgIC8vIHNlbGVjdCB2YWx1ZXNcbiAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2gob3B0ID0+IG9wdC5zZWxlY3QoKSk7XG5cbiAgICAgICAgICAgICAgLy8gZGVzZWxlY3Qgb2xkIHZhbHVlc1xuICAgICAgICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICBvcHQubmdPbkNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgIG9wdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICBvcHQubmdPbkNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgb3B0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5vcHRpb25zLmZpbmQob3B0ID0+IHRoaXMuX3ZhbHVlS2V5Rm4ob3B0KSA9PT0gdGhpcy52YWx1ZUtleSh0aGlzLnZhbHVlKSk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZC5zZWxlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgaWYgKCF2YWwgJiYgdGhpcy5faGFzRGlzYWJsZWRDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbXVsdGlwbGU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVLZXkoZm46IChvcHQ6IHVua25vd24pID0+IHVua25vd24pIHtcbiAgICB0aGlzLl92YWx1ZUtleUZuID0gKG9wdDogTHlPcHRpb24pID0+IGZuKGdldFZhbHVlKG9wdCkpO1xuICAgIHRoaXMuX3ZhbHVlS2V5ID0gZm47XG4gIH1cbiAgZ2V0IHZhbHVlS2V5KCk6IChvcHQ6IHVua25vd24pID0+IHVua25vd24geyByZXR1cm4gdGhpcy5fdmFsdWVLZXk7IH1cblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKSA6IHZhbCA9PSBudWxsIHx8IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKTtcbiAgfVxuXG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQgPyB0cnVlIDogIXRoaXMuZW1wdHk7XG4gIH1cblxuICAvKiogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgdHJpZ2dlci4gKi9cbiAgZ2V0IHRyaWdnZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdGlvbiA9PiBvcHRpb24udmlld1ZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09IERpci5ydGwpIHtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zLnJldmVyc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9ucy5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXS52aWV3VmFsdWU7XG4gIH1cblxuICAvKiogQ3VycmVudCBzZWxlY3RlZHMgKi9cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyBzZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkgOiBzZWxlY3RlZFswXS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2ZpZWxkOiBMeUZpZWxkLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgLy8gTm90ZTogd2UgcHJvdmlkZSB0aGUgdmFsdWUgYWNjZXNzb3IgdGhyb3VnaCBoZXJlLCBpbnN0ZWFkIG9mXG4gICAgICAvLyB0aGUgYHByb3ZpZGVyc2AgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlGaWVsZC5zZWxlY3QnLCB7XG4gICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgbnVsbCwgU1RZTEVfUFJJT1JJVFksIEZJRUxEX1NUWUxFUyk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsID0gbmV3IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+KHtcbiAgICAgIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGdldEtleTogdGhpcy5fdmFsdWVLZXlGblxuICAgIH0pO1xuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMubmdDb250cm9sO1xuXG4gICAgLy8gdXBkYXRlIHN0eWxlcyBvbiBkaXNhYmxlZFxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gISFuZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBjbGFzcyB7c2VsZWN0QXJyb3d9IHRvIGA8c2VsZWN0PmBcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5zZWxlY3RBcnJvdyk7XG5cbiAgICAvLyBhcHBseSBkZWZhdWx0IHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxkLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgbmV3VmFsID0gISEodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5uZ0NvbnRyb2wudG91Y2hlZCB8fCAodGhpcy5fZm9ybSAmJiB0aGlzLl9mb3JtLnN1Ym1pdHRlZCkpKTtcbiAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgIHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1ZhbDtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZmllbGQuY2xhc3Nlcy5lcnJvclN0YXRlO1xuICAgICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBlcnJvckNsYXNzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Vycm9yQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmdDb250cm9sID8gdGhpcy5uZ0NvbnRyb2wudmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jaGFuZ2VzLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkczogTHlPcHRpb25bXSA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIGlmIChvcHRpb24uaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRzLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMgb25seSB1cGRhdGUgdGhlIHJlZnNcbiAgICAgICAgaWYgKHNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgICAgICAgIHNlbGVjdGVkcy5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qob3B0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRoaXMuX3VwZGF0ZVNlbGVjdGVkQ2xhc3MoKTtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy50ZW1wbGF0ZVJlZiwgbnVsbCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgfSxcbiAgICAgIGZuRGVzdHJveTogdGhpcy5jbG9zZS5iaW5kKHRoaXMpLFxuICAgICAgb25SZXNpemVTY3JvbGw6IHRoaXMuX3VwZGF0ZVBsYWNlbWVudC5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlUGxhY2VtZW50KCkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgb25Db250YWluZXJDbGljaygpIHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7IH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJ2YWx1ZVwiIHByb3BlcnR5IG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNoZWNrZWQgdmFsdWVcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChfdmFsdWVTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgICAgZm4odGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHNlbGVjdC4gUGFydCBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHJlcXVpcmVkXG4gICAqIHRvIGludGVncmF0ZSB3aXRoIEFuZ3VsYXIncyBjb3JlIGZvcm1zIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgU2V0cyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9vdmVybGF5UmVmIS5jb250YWluZXJFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpITtcbiAgICBjb25zdCB7IG5hdGl2ZUVsZW1lbnQgfSA9IHRoaXMudmFsdWVUZXh0RGl2UmVmO1xuICAgIGxldCBwYW5lbFdpZHRoOiBudW1iZXI7XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgcGFuZWxXaWR0aCA9IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyAzMiAqIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhbmVsV2lkdGggPSBuYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgMzI7XG4gICAgfVxuXG5cbiAgICAvLyByZXNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsICdpbml0aWFsJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBgJHtwYW5lbFdpZHRofXB4YCk7XG5cblxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5pc0VtcHR5KClcbiAgICAgICAgPyBlbC5xdWVyeVNlbGVjdG9yKCdseS1vcHRpb24nKSFcbiAgICAgICAgOiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXS5fZ2V0SG9zdEVsZW1lbnQoKTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHtcbiAgICAgIHk6IC0obmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyKSxcbiAgICAgIHg6IC0xNlxuICAgIH07XG5cbiAgICAvLyBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gICAgaWYgKGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgIT09IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgaWYgKGNvbnRhaW5lci5zY3JvbGxUb3AgPT09IHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3ApIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgLSAoY29udGFpbmVyLm9mZnNldEhlaWdodCAvIDIpICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcCAtIChjb250YWluZXIub2Zmc2V0SGVpZ2h0IC8gMiAtIChzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wIC0gY29udGFpbmVyLnNjcm9sbFRvcCkpICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgICBvZmZzZXQueSA9IGNvbnRhaW5lci5zY3JvbGxUb3AgKyBvZmZzZXQueTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgb2Zmc2V0LnggLT0gMjQ7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcoXG4gICAgICBZUG9zaXRpb24uYmVsb3csXG4gICAgICBYUG9zaXRpb24uYWZ0ZXIsXG4gICAgICBudWxsIGFzIGFueSxcbiAgICAgIG5hdGl2ZUVsZW1lbnQsXG4gICAgICBlbCxcbiAgICAgIHRoaXMuX3RoZW1lLnZhcmlhYmxlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIC8vIHNldCBwb3NpdGlvblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4LCAwKWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtLW9yaWdpbicsIGAke3Bvc2l0aW9uLm94fSAke3Bvc2l0aW9uLm95fSAwYCk7XG5cbiAgICAvLyBzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIGNvbnN0IHdpZHRoID0gcG9zaXRpb24ud2lkdGggPT09ICdpbml0aWFsJ1xuICAgICAgICAgID8gYCR7cGFuZWxXaWR0aH1weGBcbiAgICAgICAgICA6IHBvc2l0aW9uLndpZHRoO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgd2lkdGgpO1xuICB9XG5cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeU9wdGlvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlPcHRpb25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICAgIG1peGluQ29sb3IoXG4gICAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5T3B0aW9uQmFzZSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeU9wdGlvbiBleHRlbmRzIEx5T3B0aW9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9vbkNsaWNrKCkge1xuICAgIGlmICghdGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgdGhpcy5fc2VsZWN0LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5vbkNoYW5nZSh0aGlzLl9zZWxlY3QuX3ZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3Mgc2ltcGxlIHN0cmluZyB2YWx1ZXMgYm91bmQgdG8gdGhlIG9wdGlvbiBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFRoZSBkaXNwbGF5ZWQgdmFsdWUgb2YgdGhlIG9wdGlvbi4gKi9cbiAgZ2V0IHZpZXdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoKHRoaXMuX2dldEhvc3RFbGVtZW50KCkgYXMgRWxlbWVudCkudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgU2VsZWN0ICovXG4gIGdldCBfY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSA/IHRoaXMuX3NlbGVjdC5fZmllbGQuY29sb3IgOiAnJztcbiAgfVxuXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIEBIb3N0KCkgcHVibGljIF9zZWxlY3Q6IEx5U2VsZWN0LFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgIHN1cGVyKF90aGVtZSwgX25nWm9uZSk7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub3B0aW9uKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZWxlY3QuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX3NlbGVjdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnRvZ2dsZSh0aGlzKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC50b2dnbGUodGhpcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZWxlY3QuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX3NlbGVjdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBzYW1lKG86IHVua25vd24pOiB1bmtub3duIHtcbiAgcmV0dXJuIG87XG59XG5mdW5jdGlvbiBnZXRWYWx1ZShvOiBMeU9wdGlvbik6IHVua25vd24ge1xuICByZXR1cm4gby52YWx1ZTtcbn1cbiJdfQ==