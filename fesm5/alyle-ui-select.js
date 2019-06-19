import { __extends, __decorate, __metadata, __spread, __param } from 'tslib';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { ViewChild, TemplateRef, ElementRef, forwardRef, QueryList, ContentChildren, HostListener, Input, Component, ChangeDetectionStrategy, Optional, Self, Renderer2, ChangeDetectorRef, NgZone, Host, NgModule } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { STYLES as STYLES$1, LyFieldControlBase, LyField } from '@alyle/ui/field';
import { shadowBuilder, mixinTabIndex, toBoolean, Dir, LySelectionModel, Positioning, YPosition, XPosition, LyTheme2, LyOverlay, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyRippleService, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { LyCheckboxModule } from '@alyle/ui/checkbox';

var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'block',
        paddingAfter: '1em',
        minWidth: '3em',
        minHeight: '1.5em',
        '-webkit-tap-highlight-color': 'transparent',
        '&': theme.select ? theme.select.root : null
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
/** @docs-private */
var LySelectMixinBase = mixinTabIndex(LySelectBase);
var LySelect = /** @class */ (function (_super) {
    __extends(LySelect, _super);
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
        }, _this._field._getHostElement(), null, STYLE_PRIORITY, STYLES$1);
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
    __decorate([
        ViewChild(TemplateRef, { static: false }),
        __metadata("design:type", TemplateRef)
    ], LySelect.prototype, "templateRef", void 0);
    __decorate([
        ViewChild('valueText', { static: false }),
        __metadata("design:type", ElementRef)
    ], LySelect.prototype, "valueTextDivRef", void 0);
    __decorate([
        ViewChild(forwardRef(function () { return LyOption; }), { static: false }),
        __metadata("design:type", QueryList)
    ], LySelect.prototype, "_options", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return LyOption; }), { descendants: true }),
        __metadata("design:type", QueryList)
    ], LySelect.prototype, "options", void 0);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LySelect.prototype, "_onBlur", null);
    __decorate([
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LySelect.prototype, "_onFocus", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LySelect.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LySelect.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LySelect.prototype, "required", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LySelect.prototype, "multiple", null);
    __decorate([
        Input(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], LySelect.prototype, "valueKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LySelect.prototype, "placeholder", null);
    LySelect = LySelect_1 = __decorate([
        Component({
            selector: 'ly-select',
            template: "<div [className]=\"classes.valueText\" #valueText>{{ empty ? '\\u00A0' : triggerValue }}</div>\n<ng-template>\n  <div #container [className]=\"classes.container\" [@selectEnter]=\"'in'\" (@selectLeave.done)=\"_endAnimation($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'lySelect',
            host: {
                '[attr.tabindex]': 'tabIndex'
            },
            animations: __spread(ANIMATIONS),
            inputs: ['tabIndex'],
            providers: [
                { provide: LyFieldControlBase, useExisting: LySelect_1 }
            ]
        }),
        __param(4, Optional()),
        __param(7, Optional()), __param(7, Self()),
        __param(8, Optional()),
        __param(9, Optional()),
        __metadata("design:paramtypes", [LyTheme2,
            Renderer2,
            ElementRef,
            LyOverlay,
            LyField,
            ChangeDetectorRef,
            NgZone,
            NgControl,
            NgForm,
            FormGroupDirective])
    ], LySelect);
    return LySelect;
}(LySelectMixinBase));
/** @docs-private */
var LyOptionBase = /** @class */ (function () {
    function LyOptionBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyOptionBase;
}());
/** @docs-private */
var LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
var LyOption = /** @class */ (function (_super) {
    __extends(LyOption, _super);
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
    __decorate([
        ViewChild('rippleContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyOption.prototype, "_rippleContainer", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyOption.prototype, "_onClick", null);
    __decorate([
        Input('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyOption.prototype, "value", null);
    LyOption = __decorate([
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
        __param(0, Host()),
        __metadata("design:paramtypes", [LySelect,
            ElementRef,
            LyRippleService,
            Renderer2,
            LyTheme2,
            ChangeDetectorRef,
            NgZone])
    ], LyOption);
    return LyOption;
}(LyOptionMixinBase));
function same(o) {
    return o;
}
function getValue(o) {
    return o.value;
}

var LySelectModule = /** @class */ (function () {
    function LySelectModule() {
    }
    LySelectModule = __decorate([
        NgModule({
            declarations: [LySelect, LyOption],
            imports: [
                CommonModule,
                LyCommonModule,
                LyCheckboxModule,
                LyOverlayModule
            ],
            exports: [LySelect, LyOption, LyCommonModule]
        })
    ], LySelectModule);
    return LySelectModule;
}());

export { LyOption, LyOptionBase, LyOptionMixinBase, LySelect, LySelectBase, LySelectMixinBase, LySelectModule, STYLES };
//# sourceMappingURL=alyle-ui-select.js.map
