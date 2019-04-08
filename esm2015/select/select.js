import * as tslib_1 from "tslib";
var LySelect_1;
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, QueryList, ContentChildren } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES as FIELD_STYLES } from '@alyle/ui/field';
import { LyOverlay, LySelectionModel, LyTheme2, shadowBuilder, toBoolean, Positioning, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir } from '@alyle/ui';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
const DEFAULT_DISABLE_RIPPLE = false;
const STYLE_PRIORITY = -2;
export const STYLES = (theme) => ({
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
export class LySelectBase {
}
/** @docs-private */
export const LySelectMixinBase = mixinTabIndex(LySelectBase);
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
        }, this._field._getHostElement(), null, STYLE_PRIORITY, FIELD_STYLES);
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
tslib_1.__decorate([
    ViewChild(TemplateRef),
    tslib_1.__metadata("design:type", TemplateRef)
], LySelect.prototype, "templateRef", void 0);
tslib_1.__decorate([
    ViewChild('valueText'),
    tslib_1.__metadata("design:type", ElementRef)
], LySelect.prototype, "valueTextDivRef", void 0);
tslib_1.__decorate([
    ViewChild(forwardRef(() => LyOption)),
    tslib_1.__metadata("design:type", QueryList)
], LySelect.prototype, "_options", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyOption), { descendants: true }),
    tslib_1.__metadata("design:type", QueryList)
], LySelect.prototype, "options", void 0);
tslib_1.__decorate([
    HostListener('blur'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LySelect.prototype, "_onBlur", null);
tslib_1.__decorate([
    HostListener('focus'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LySelect.prototype, "_onFocus", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], LySelect.prototype, "value", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LySelect.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LySelect.prototype, "required", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LySelect.prototype, "multiple", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], LySelect.prototype, "valueKey", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LySelect.prototype, "placeholder", null);
LySelect = LySelect_1 = tslib_1.__decorate([
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
    tslib_1.__param(4, Optional()),
    tslib_1.__param(7, Optional()), tslib_1.__param(7, Self()),
    tslib_1.__param(8, Optional()),
    tslib_1.__param(9, Optional()),
    tslib_1.__metadata("design:paramtypes", [LyTheme2,
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
export { LySelect };
/** @docs-private */
export class LyOptionBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
export const LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
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
tslib_1.__decorate([
    ViewChild('rippleContainer'),
    tslib_1.__metadata("design:type", ElementRef)
], LyOption.prototype, "_rippleContainer", void 0);
tslib_1.__decorate([
    HostListener('click'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LyOption.prototype, "_onClick", null);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
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
    tslib_1.__param(0, Host()),
    tslib_1.__metadata("design:paramtypes", [LySelect,
        ElementRef,
        LyRippleService,
        Renderer2,
        LyTheme2,
        ChangeDetectorRef,
        NgZone])
], LyOption);
export { LyOption };
function same(o) {
    return o;
}
function getValue(o) {
    return o.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNOLE1BQU0scUJBQXFCLENBQUM7QUFDL0IsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBRU4sU0FBUyxFQUNULGVBQWUsRUFHZCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDVCxNQUFNLEVBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sSUFBSSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBRVIsYUFBYSxFQUViLFNBQVMsRUFDVCxXQUFXLEVBRVgsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxVQUFVLEVBQ1YsV0FBVyxFQUNYLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDRixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsTUFBTSxzQkFBc0IsR0FBRyxL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QUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7Q0FFRixDQUFBO0FBNUgrQjtJQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7c0NBQW1CLFVBQVU7a0RBQUM7QUFFcEM7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozt3Q0FRckI7QUFNRDtJQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7OztxQ0FHZDtBQXZCVSxRQUFRO0lBZnBCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLGlaQUE0QjtRQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osT0FBTztZQUNQLFFBQVE7WUFDUixVQUFVO1lBQ1YsVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTtTQUNoQjtLQUNGLENBQUM7SUE0Q2EsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBQWlCLFFBQVE7UUFDbkIsVUFBVTtRQUVBLGVBQWU7UUFDM0IsU0FBUztRQUNaLFFBQVE7UUFFSixpQkFBaUI7UUFDcEIsTUFBTTtHQW5EaEIsUUFBUSxDQWlJcEI7U0FqSVksUUFBUTtBQW1JckIsU0FBUyxJQUFJLENBQUMsQ0FBVTtJQUN0QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFDRCxTQUFTLFFBQVEsQ0FBQyxDQUFXO0lBQzNCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAga2V5ZnJhbWVzLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxuICB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTZWxmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudEluaXRcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gIE5nQ29udHJvbCxcbiAgTmdGb3JtXG4gIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlGaWVsZCwgTHlGaWVsZENvbnRyb2xCYXNlLCBTVFlMRVMgYXMgRklFTERfU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpL2ZpZWxkJztcbmltcG9ydCB7XG4gIEx5T3ZlcmxheSxcbiAgTHlTZWxlY3Rpb25Nb2RlbCxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBQb3NpdGlvbmluZyxcbiAgQ2FuRGlzYWJsZUN0b3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5UYWJJbmRleCxcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgRGlyXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nQWZ0ZXI6ICcxZW0nLFxuICAgIG1pbldpZHRoOiAnM2VtJyxcbiAgICBtaW5IZWlnaHQ6ICcxLjVlbScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgJyYnOiB0aGVtZS5zZWxlY3QgPyB0aGVtZS5zZWxlY3Qucm9vdCA6IG51bGxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdpbmhlcml0JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIG1heEhlaWdodDogJzI1NnB4J1xuICB9LFxuICB2YWx1ZVRleHQ6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH0sXG4gIG9wdGlvbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogJzAgMWVtJyxcbiAgICBtYXJnaW46IDAsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBsaW5lSGVpZ2h0OiAnM2VtJyxcbiAgICBoZWlnaHQ6ICczZW0nLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIG9wdGlvblRleHQ6IHtcbiAgICAnbHktY2hlY2tib3ggfiAmJzoge1xuICAgICAgbWFyZ2luQmVmb3JlOiAnLTE2cHgnXG4gICAgfVxuICB9LFxuICBjb250ZW50OiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IEFOSU1BVElPTlMgPSBbXG4gIHRyaWdnZXIoJ3NlbGVjdEVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjkpJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuICAgICAgICB9KVxuICAgICAgXSkpXG4gICAgXSksXG4gIF0pLFxuICB0cmlnZ2VyKCdzZWxlY3RMZWF2ZScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyAyNW1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5U2VsZWN0QmFzZSB7IH1cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlTZWxlY3RNaXhpbkJhc2UgPSBtaXhpblRhYkluZGV4KEx5U2VsZWN0QmFzZSBhcyBDYW5EaXNhYmxlQ3Rvcik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseVNlbGVjdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ3RhYkluZGV4J1xuICB9LFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIGlucHV0czogWyd0YWJJbmRleCddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEx5RmllbGRDb250cm9sQmFzZSwgdXNlRXhpc3Rpbmc6IEx5U2VsZWN0IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNlbGVjdFxuICAgIGV4dGVuZHMgTHlTZWxlY3RNaXhpbkJhc2VcbiAgICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBMeUZpZWxkQ29udHJvbEJhc2UsIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0aW9uTW9kZWw6IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+O1xuICAvKiogQGludGVybmFsICovXG4gIF92YWx1ZTogYW55O1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5RmFjdG9yeSB8IG51bGw7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2hhc0Rpc2FibGVkQ2xhc3M/OiBib29sZWFuO1xuICBwcml2YXRlIF9lcnJvckNsYXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9mb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUgfCBudWxsID0gdGhpcy5fcGFyZW50Rm9ybSB8fCB0aGlzLl9wYXJlbnRGb3JtR3JvdXA7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZhbHVlS2V5OiAob3B0OiB1bmtub3duKSA9PiB1bmtub3duID0gc2FtZTtcbiAgcHJpdmF0ZSBfdmFsdWVLZXlGbjogKG9wdDogTHlPcHRpb24pID0+IHVua25vd24gPSBnZXRWYWx1ZTtcbiAgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJzb3JDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3ZhbHVlVGV4dCcpIHZhbHVlVGV4dERpdlJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSkgX29wdGlvbnM6IFF1ZXJ5TGlzdDxMeU9wdGlvbj47XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeU9wdGlvbiksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgb3B0aW9uczogUXVlcnlMaXN0PEx5T3B0aW9uPjtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBjaGFuZ2UgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBibHVyIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSBmYWxzZSAmJiAhdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IHRydWUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2VuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVmID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSAmJiB0aGlzLl9zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBMeU9wdGlvbltdID0gW107XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5zb21lKF8gPT4gdGhpcy5fdmFsdWVLZXkoXykgPT09IHRoaXMuX3ZhbHVlS2V5Rm4ob3B0KSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvcHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgICAgIC8vIHNlbGVjdCB2YWx1ZXNcbiAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2gob3B0ID0+IG9wdC5zZWxlY3QoKSk7XG5cbiAgICAgICAgICAgICAgLy8gZGVzZWxlY3Qgb2xkIHZhbHVlc1xuICAgICAgICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICBvcHQubmdPbkNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgIG9wdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICBvcHQubmdPbkNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgb3B0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5vcHRpb25zLmZpbmQob3B0ID0+IHRoaXMuX3ZhbHVlS2V5Rm4ob3B0KSA9PT0gdGhpcy52YWx1ZUtleSh0aGlzLnZhbHVlKSk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZC5zZWxlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgaWYgKCF2YWwgJiYgdGhpcy5faGFzRGlzYWJsZWRDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbXVsdGlwbGU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVLZXkoZm46IChvcHQ6IHVua25vd24pID0+IHVua25vd24pIHtcbiAgICB0aGlzLl92YWx1ZUtleUZuID0gKG9wdDogTHlPcHRpb24pID0+IGZuKGdldFZhbHVlKG9wdCkpO1xuICAgIHRoaXMuX3ZhbHVlS2V5ID0gZm47XG4gIH1cbiAgZ2V0IHZhbHVlS2V5KCk6IChvcHQ6IHVua25vd24pID0+IHVua25vd24geyByZXR1cm4gdGhpcy5fdmFsdWVLZXk7IH1cblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKSA6IHZhbCA9PSBudWxsIHx8IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmlzRW1wdHkoKTtcbiAgfVxuXG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQgPyB0cnVlIDogIXRoaXMuZW1wdHk7XG4gIH1cblxuICAvKiogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgdHJpZ2dlci4gKi9cbiAgZ2V0IHRyaWdnZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdGlvbiA9PiBvcHRpb24udmlld1ZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09IERpci5ydGwpIHtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zLnJldmVyc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9ucy5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXS52aWV3VmFsdWU7XG4gIH1cblxuICAvKiogQ3VycmVudCBzZWxlY3RlZHMgKi9cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyBzZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkgOiBzZWxlY3RlZFswXS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2ZpZWxkOiBMeUZpZWxkLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgLy8gTm90ZTogd2UgcHJvdmlkZSB0aGUgdmFsdWUgYWNjZXNzb3IgdGhyb3VnaCBoZXJlLCBpbnN0ZWFkIG9mXG4gICAgICAvLyB0aGUgYHByb3ZpZGVyc2AgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlGaWVsZC5zZWxlY3QnLCB7XG4gICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgbnVsbCwgU1RZTEVfUFJJT1JJVFksIEZJRUxEX1NUWUxFUyk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsID0gbmV3IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+KHtcbiAgICAgIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGdldEtleTogdGhpcy5fdmFsdWVLZXlGblxuICAgIH0pO1xuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMubmdDb250cm9sO1xuXG4gICAgLy8gdXBkYXRlIHN0eWxlcyBvbiBkaXNhYmxlZFxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gISFuZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBjbGFzcyB7c2VsZWN0QXJyb3d9IHRvIGA8c2VsZWN0PmBcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5zZWxlY3RBcnJvdyk7XG5cbiAgICAvLyBhcHBseSBkZWZhdWx0IHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxkLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgbmV3VmFsID0gISEodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5uZ0NvbnRyb2wudG91Y2hlZCB8fCAodGhpcy5fZm9ybSAmJiB0aGlzLl9mb3JtLnN1Ym1pdHRlZCkpKTtcbiAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgIHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1ZhbDtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZmllbGQuY2xhc3Nlcy5lcnJvclN0YXRlO1xuICAgICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBlcnJvckNsYXNzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Vycm9yQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmdDb250cm9sID8gdGhpcy5uZ0NvbnRyb2wudmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jaGFuZ2VzLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkczogTHlPcHRpb25bXSA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIGlmIChvcHRpb24uaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRzLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMgb25seSB1cGRhdGUgdGhlIHJlZnNcbiAgICAgICAgaWYgKHNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgICAgICAgIHNlbGVjdGVkcy5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qob3B0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRoaXMuX3VwZGF0ZVNlbGVjdGVkQ2xhc3MoKTtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy50ZW1wbGF0ZVJlZiwgbnVsbCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgfSxcbiAgICAgIGZuRGVzdHJveTogdGhpcy5jbG9zZS5iaW5kKHRoaXMpLFxuICAgICAgb25SZXNpemVTY3JvbGw6IHRoaXMuX3VwZGF0ZVBsYWNlbWVudC5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlUGxhY2VtZW50KCkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgb25Db250YWluZXJDbGljaygpIHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7IH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJ2YWx1ZVwiIHByb3BlcnR5IG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNoZWNrZWQgdmFsdWVcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChfdmFsdWVTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgICAgZm4odGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHNlbGVjdC4gUGFydCBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHJlcXVpcmVkXG4gICAqIHRvIGludGVncmF0ZSB3aXRoIEFuZ3VsYXIncyBjb3JlIGZvcm1zIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgU2V0cyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9vdmVybGF5UmVmIS5jb250YWluZXJFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpITtcbiAgICBjb25zdCB7IG5hdGl2ZUVsZW1lbnQgfSA9IHRoaXMudmFsdWVUZXh0RGl2UmVmO1xuICAgIGxldCBwYW5lbFdpZHRoOiBudW1iZXI7XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgcGFuZWxXaWR0aCA9IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyAzMiAqIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhbmVsV2lkdGggPSBuYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgMzI7XG4gICAgfVxuXG5cbiAgICAvLyByZXNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsICdpbml0aWFsJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBgJHtwYW5lbFdpZHRofXB4YCk7XG5cblxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5pc0VtcHR5KClcbiAgICAgICAgPyBlbC5xdWVyeVNlbGVjdG9yKCdseS1vcHRpb24nKSFcbiAgICAgICAgOiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXS5fZ2V0SG9zdEVsZW1lbnQoKTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHtcbiAgICAgIHk6IC0obmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyKSxcbiAgICAgIHg6IC0xNlxuICAgIH07XG5cbiAgICAvLyBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gICAgaWYgKGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgIT09IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgaWYgKGNvbnRhaW5lci5zY3JvbGxUb3AgPT09IHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3ApIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgLSAoY29udGFpbmVyLm9mZnNldEhlaWdodCAvIDIpICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcCAtIChjb250YWluZXIub2Zmc2V0SGVpZ2h0IC8gMiAtIChzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wIC0gY29udGFpbmVyLnNjcm9sbFRvcCkpICsgc2VsZWN0ZWRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgICBvZmZzZXQueSA9IGNvbnRhaW5lci5zY3JvbGxUb3AgKyBvZmZzZXQueTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgb2Zmc2V0LnggLT0gMjQ7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcoXG4gICAgICBZUG9zaXRpb24uYmVsb3csXG4gICAgICBYUG9zaXRpb24uYWZ0ZXIsXG4gICAgICBudWxsIGFzIGFueSxcbiAgICAgIG5hdGl2ZUVsZW1lbnQsXG4gICAgICBlbCxcbiAgICAgIHRoaXMuX3RoZW1lLnZhcmlhYmxlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIC8vIHNldCBwb3NpdGlvblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4LCAwKWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtLW9yaWdpbicsIGAke3Bvc2l0aW9uLm94fSAke3Bvc2l0aW9uLm95fSAwYCk7XG5cbiAgICAvLyBzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIGNvbnN0IHdpZHRoID0gcG9zaXRpb24ud2lkdGggPT09ICdpbml0aWFsJ1xuICAgICAgICAgID8gYCR7cGFuZWxXaWR0aH1weGBcbiAgICAgICAgICA6IHBvc2l0aW9uLndpZHRoO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgd2lkdGgpO1xuICB9XG5cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeU9wdGlvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlPcHRpb25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICAgIG1peGluQ29sb3IoXG4gICAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5T3B0aW9uQmFzZSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeU9wdGlvbiBleHRlbmRzIEx5T3B0aW9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX29uQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICB0aGlzLl9zZWxlY3QuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0Lm9uQ2hhbmdlKHRoaXMuX3NlbGVjdC5fdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBzaW1wbGUgc3RyaW5nIHZhbHVlcyBib3VuZCB0byB0aGUgb3B0aW9uIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKiogVGhlIGRpc3BsYXllZCB2YWx1ZSBvZiB0aGUgb3B0aW9uLiAqL1xuICBnZXQgdmlld1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICgodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSBhcyBFbGVtZW50KS50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiBTZWxlY3QgKi9cbiAgZ2V0IF9jb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpID8gdGhpcy5fc2VsZWN0Ll9maWVsZC5jb2xvciA6ICcnO1xuICB9XG5cbiAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgQEhvc3QoKSBwdWJsaWMgX3NlbGVjdDogTHlTZWxlY3QsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBwdWJsaWMgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgX25nWm9uZTogTmdab25lKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBfbmdab25lKTtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vcHRpb24pO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHRoaXMpO1xuICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSkge1xuICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fc2VsZWN0LnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwudG9nZ2xlKHRoaXMpO1xuICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSkge1xuICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnRvZ2dsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll92YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4gb3B0Lm5nT25DaGFuZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fc2VsZWN0LnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHNhbWUobzogdW5rbm93bik6IHVua25vd24ge1xuICByZXR1cm4gbztcbn1cbmZ1bmN0aW9uIGdldFZhbHVlKG86IEx5T3B0aW9uKTogdW5rbm93biB7XG4gIHJldHVybiBvLnZhbHVlO1xufVxuIl19