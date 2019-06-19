import { __decorate, __metadata, __param } from 'tslib';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { ViewChild, TemplateRef, ElementRef, forwardRef, QueryList, ContentChildren, HostListener, Input, Component, ChangeDetectionStrategy, Optional, Self, Renderer2, ChangeDetectorRef, NgZone, Host, NgModule } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { STYLES as STYLES$1, LyFieldControlBase, LyField } from '@alyle/ui/field';
import { shadowBuilder, mixinTabIndex, toBoolean, Dir, LySelectionModel, Positioning, YPosition, XPosition, LyTheme2, LyOverlay, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyRippleService, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { LyCheckboxModule } from '@alyle/ui/checkbox';

var LySelect_1;
const DEFAULT_DISABLE_RIPPLE = false;
const STYLE_PRIORITY = -2;
const STYLES = (theme) => ({
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
        backgroundColor: `rgba(0, 0, 0, 0)`,
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
});
/** @docs-private */
const ANIMATIONS = [
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
class LySelectBase {
}
/** @docs-private */
const LySelectMixinBase = mixinTabIndex(LySelectBase);
let LySelect = LySelect_1 = class LySelect extends LySelectMixinBase {
    constructor(_theme, _renderer, _el, _overlay, 
    /** @internal */
    _field, 
    /** @internal */
    _cd, _ngZone, 
    /** @docs-private */
    ngControl, _parentForm, _parentFormGroup) {
        super();
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this._overlay = _overlay;
        this._field = _field;
        this._cd = _cd;
        this._ngZone = _ngZone;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._disabled = false;
        this._required = false;
        this.stateChanges = new Subject();
        this._form = this._parentForm || this._parentFormGroup;
        this._valueKey = same;
        this._valueKeyFn = getValue;
        this._focused = false;
        this.errorState = false;
        /** Emits whenever the component is destroyed. */
        this._destroy = new Subject();
        /**
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (_) => { };
        /**
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = () => { };
        if (this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        this._cursorClass = this._theme.addStyle('lyField.select', {
            '& {container}': {
                cursor: 'pointer'
            }
        }, this._field._getHostElement(), null, STYLE_PRIORITY, STYLES$1);
    }
    _onBlur() {
        if (this._focused !== false && !this._opened) {
            this._focused = false;
            this.stateChanges.next();
        }
    }
    _onFocus() {
        if (this._focused !== true && !this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /** @internal */
    _endAnimation(e) {
        if (e.toState === 'void') {
            if (this._overlayRef) {
                this._overlayRef.remove();
                this._overlayRef = null;
            }
        }
    }
    /** @docs-private */
    set value(val) {
        if (val !== this.value && this._selectionModel) {
            this._value = val;
            this.writeValue(val);
            if (this.options) {
                if (this.multiple) {
                    if (Array.isArray(this.value)) {
                        const values = [];
                        this.options.forEach(opt => {
                            if (this.value.some(_ => this._valueKey(_) === this._valueKeyFn(opt))) {
                                values.push(opt);
                            }
                        });
                        if (values.length) {
                            const beforeSelecteds = this._selectionModel.selected;
                            // reset
                            this._selectionModel.clear();
                            // select values
                            values.forEach(opt => opt.select());
                            // deselect old values
                            if (beforeSelecteds.length) {
                                beforeSelecteds.forEach(opt => {
                                    opt.ngOnChanges();
                                    opt._cd.markForCheck();
                                });
                            }
                        }
                    }
                }
                else {
                    // reset
                    const selecteds = this._selectionModel.selected;
                    this._selectionModel.clear();
                    if (selecteds.length) {
                        selecteds.forEach(opt => {
                            opt.ngOnChanges();
                            opt._cd.markForCheck();
                        });
                    }
                    const selected = this.options.find(opt => this._valueKeyFn(opt) === this.valueKey(this.value));
                    if (selected) {
                        selected.select();
                    }
                }
            }
            this.stateChanges.next();
            this._cd.markForCheck();
        }
    }
    get value() {
        return this._value;
    }
    /** Whether the input is disabled. */
    set disabled(val) {
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
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set required(value) {
        this._required = toBoolean(value);
    }
    get required() { return this._required; }
    set multiple(value) {
        this._multiple = toBoolean(value);
    }
    get multiple() { return this._multiple; }
    set valueKey(fn) {
        this._valueKeyFn = (opt) => fn(getValue(opt));
        this._valueKey = fn;
    }
    get valueKey() { return this._valueKey; }
    set placeholder(val) {
        this._placeholder = val;
    }
    get placeholder() { return this._placeholder; }
    get focused() {
        return this._focused;
    }
    get empty() {
        const val = this.value;
        return this.multiple ? this._selectionModel.isEmpty() : val == null || this._selectionModel.isEmpty();
    }
    get floatingLabel() {
        return this._opened ? true : !this.empty;
    }
    /** The value displayed in the trigger. */
    get triggerValue() {
        if (this._multiple) {
            const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
            if (this._theme.variables.direction === Dir.rtl) {
                selectedOptions.reverse();
            }
            return selectedOptions.join(', ');
        }
        return this._selectionModel.selected[0].viewValue;
    }
    /** Current selecteds */
    get selected() {
        const selected = this._selectionModel.selected;
        return this.multiple ? selected.map(option => option.value) : selected[0].value;
    }
    ngOnInit() {
        this._selectionModel = new LySelectionModel({
            multiple: this.multiple ? true : undefined,
            getKey: this._valueKeyFn
        });
        const ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.pipe(takeUntil(this._destroy)).subscribe(() => {
                this.disabled = !!ngControl.disabled;
            });
        }
        // apply class {selectArrow} to `<select>`
        this._renderer.addClass(this._field._getHostElement(), this._field.classes.selectArrow);
        // apply default styles
        this._renderer.addClass(this._el.nativeElement, this._field.classes.inputNative);
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    ngDoCheck() {
        const oldVal = this.errorState;
        const newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
                const errorClass = this._field.classes.errorState;
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
    }
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.value = this.ngControl ? this.ngControl.value : this._value;
            this.stateChanges.next();
            this._cd.markForCheck();
        });
    }
    ngAfterViewInit() {
        if (this.options) {
            this.options.changes.pipe(takeUntil(this._destroy)).subscribe(() => {
                const selecteds = [];
                this.options.forEach(option => {
                    if (option.isSelected) {
                        selecteds.push(option);
                    }
                });
                // this only update the refs
                if (selecteds.length) {
                    this._selectionModel.clear();
                    selecteds.forEach(option => this._selectionModel.select(option));
                }
            });
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        if (this._overlayRef) {
            this._overlayRef.destroy();
        }
    }
    open() {
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
        this._ngZone.onStable.pipe(take(1)).subscribe(() => this._updatePlacement());
    }
    close() {
        if (this._overlayRef) {
            this.onTouched();
            this._overlayRef.detach();
            this._opened = false;
            this._getHostElement().focus();
            this.stateChanges.next();
        }
    }
    /** @docs-private */
    onContainerClick() {
        this.open();
        this._getHostElement().focus();
    }
    /** Focuses the input. */
    focus() { this._getHostElement().focus(); }
    _getHostElement() {
        return this._el.nativeElement;
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    writeValue(value) {
        if (this.options) {
            this.value = value;
        }
    }
    /**
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    registerOnChange(fn) {
        this.onChange = (_valueString) => {
            fn(this.value);
        };
    }
    /**
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
        this.stateChanges.next();
    }
    _updatePlacement() {
        const el = this._overlayRef.containerElement;
        const container = el.querySelector('div');
        const { nativeElement } = this.valueTextDivRef;
        let panelWidth;
        if (this.multiple) {
            panelWidth = nativeElement.offsetWidth + 32 * 2;
        }
        else {
            panelWidth = nativeElement.offsetWidth + 32;
        }
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', `${panelWidth}px`);
        const selectedElement = this._selectionModel.isEmpty()
            ? el.querySelector('ly-option')
            : this._selectionModel.selected[0]._getHostElement();
        const offset = {
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
        const position = new Positioning(YPosition.below, XPosition.after, null, nativeElement, el, this._theme.variables, offset, false);
        // set position
        this._renderer.setStyle(el, 'transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
        this._renderer.setStyle(el, 'transform-origin', `${position.ox} ${position.oy} 0`);
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        const width = position.width === 'initial'
            ? `${panelWidth}px`
            : position.width;
        this._renderer.setStyle(container, 'width', width);
    }
};
__decorate([
    ViewChild(TemplateRef, { static: false }),
    __metadata("design:type", TemplateRef)
], LySelect.prototype, "templateRef", void 0);
__decorate([
    ViewChild('valueText', { static: false }),
    __metadata("design:type", ElementRef)
], LySelect.prototype, "valueTextDivRef", void 0);
__decorate([
    ViewChild(forwardRef(() => LyOption), { static: false }),
    __metadata("design:type", QueryList)
], LySelect.prototype, "_options", void 0);
__decorate([
    ContentChildren(forwardRef(() => LyOption), { descendants: true }),
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
        animations: [...ANIMATIONS],
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
/** @docs-private */
class LyOptionBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
let LyOption = class LyOption extends LyOptionMixinBase {
    constructor(/** @internal */ _select, _el, 
    /** @internal */
    _rippleService, _renderer, _theme, 
    /** @internal */
    _cd, _ngZone) {
        super(_theme, _ngZone);
        this._select = _select;
        this._el = _el;
        this._rippleService = _rippleService;
        this._cd = _cd;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.option);
        this.setAutoContrast();
        this._triggerElement = _el;
    }
    _onClick() {
        if (!this._select.multiple) {
            this.select();
            this._select.close();
        }
        else {
            this.toggle();
        }
        this._select.onChange(this._select._value);
    }
    /**
     * Tracks simple string values bound to the option element.
     */
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    /** The displayed value of the option. */
    get viewValue() {
        return (this._getHostElement().textContent || '').trim();
    }
    /** The color of Select */
    get _color() {
        return this._select._selectionModel.isSelected(this) ? this._select._field.color : '';
    }
    get isSelected() {
        return this._select._selectionModel.isSelected(this);
    }
    ngOnInit() {
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    select() {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
            const beforeSelecteds = this._select._selectionModel.selected;
            this._select._selectionModel.select(this);
            this._select._value = this._select._selectionModel.selected.map(opt => opt.value);
            this.updateStyle(this._el);
            if (beforeSelecteds.length) {
                beforeSelecteds.forEach(opt => opt.ngOnChanges());
            }
        }
        else {
            if (!this._select._selectionModel.isSelected(this)) {
                const beforeSelecteds = this._select._selectionModel.selected;
                this._select._selectionModel.select(this);
                this._select._value = this._value;
                this.updateStyle(this._el);
                if (beforeSelecteds.length) {
                    beforeSelecteds.forEach(opt => opt.ngOnChanges());
                }
            }
        }
        this._select._cd.markForCheck();
        this._select.stateChanges.next();
        this._cd.markForCheck();
    }
    toggle() {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
            const beforeSelecteds = this._select._selectionModel.selected;
            this._select._selectionModel.toggle(this);
            this._select._value = this._select._selectionModel.selected.map(opt => opt.value);
            this.updateStyle(this._el);
            if (beforeSelecteds.length) {
                beforeSelecteds.forEach(opt => opt.ngOnChanges());
            }
        }
        else {
            if (!this._select._selectionModel.isSelected(this)) {
                const beforeSelecteds = this._select._selectionModel.selected;
                this._select._selectionModel.toggle(this);
                this._select._value = this._value;
                this.updateStyle(this._el);
                if (beforeSelecteds.length) {
                    beforeSelecteds.forEach(opt => opt.ngOnChanges());
                }
            }
        }
        this._select._cd.markForCheck();
        this._select.stateChanges.next();
        this._cd.markForCheck();
    }
    /** @internal */
    _getHostElement() {
        return this._el.nativeElement;
    }
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
function same(o) {
    return o;
}
function getValue(o) {
    return o.value;
}

let LySelectModule = class LySelectModule {
};
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

export { LyOption, LyOptionBase, LyOptionMixinBase, LySelect, LySelectBase, LySelectMixinBase, LySelectModule, STYLES };
//# sourceMappingURL=alyle-ui-select.js.map
