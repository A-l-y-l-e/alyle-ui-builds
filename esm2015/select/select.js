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
    ViewChild(TemplateRef, { static: false }),
    tslib_1.__metadata("design:type", TemplateRef)
], LySelect.prototype, "templateRef", void 0);
tslib_1.__decorate([
    ViewChild('valueText', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], LySelect.prototype, "valueTextDivRef", void 0);
tslib_1.__decorate([
    ViewChild(forwardRef(() => LyOption), { static: false }),
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
    ViewChild('rippleContainer', { static: false }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNOLE1BQU0scUJBQXFCLENBQUM7QUFDL0IsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBRU4sU0FBUyxFQUNULGVBQWUsRUFHZCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDVCxNQUFNLEVBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sSUFBSSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixFQUNoQixRQUFRLEVBRVIsYUFBYSxFQUViLFNBQVMsRUFDVCxXQUFXLEVBRVgsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxVQUFVLEVBQ1YsV0FBVyxFQUNYLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDRixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsTUFBTSxzQkFBc0IsR0FBRyxL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Q0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0NBRUYsQ0FBQTtBQTVIa0Q7SUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFtQixVQUFVO2tEQUFDO0FBRXZEO0lBQXRCLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7d0NBUXJCO0FBTUQ7SUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7cUNBR2Q7QUF2QlUsUUFBUTtJQWZwQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixpWkFBNEI7UUFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsTUFBTSxFQUFFO1lBQ04sSUFBSTtZQUNKLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7U0FDaEI7S0FDRixDQUFDO0lBNENhLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQUFpQixRQUFRO1FBQ25CLFVBQVU7UUFFQSxlQUFlO1FBQzNCLFNBQVM7UUFDWixRQUFRO1FBRUosaUJBQWlCO1FBQ3BCLE1BQU07R0FuRGhCLFFBQVEsQ0FpSXBCO1NBaklZLFFBQVE7QUFtSXJCLFNBQVMsSUFBSSxDQUFDLENBQVU7SUFDdEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBQ0QsU0FBUyxRQUFRLENBQUMsQ0FBVztJQUMzQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIGtleWZyYW1lcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbiAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0NvbnRyb2wsXG4gIE5nRm9ybVxuICB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5RmllbGQsIEx5RmllbGRDb250cm9sQmFzZSwgU1RZTEVTIGFzIEZJRUxEX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aS9maWVsZCc7XG5pbXBvcnQge1xuICBMeU92ZXJsYXksXG4gIEx5U2VsZWN0aW9uTW9kZWwsXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RmFjdG9yeSxcbiAgc2hhZG93QnVpbGRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgUG9zaXRpb25pbmcsXG4gIENhbkRpc2FibGVDdG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluVGFiSW5kZXgsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIERpclxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZ0FmdGVyOiAnMWVtJyxcbiAgICBtaW5XaWR0aDogJzNlbScsXG4gICAgbWluSGVpZ2h0OiAnMS41ZW0nLFxuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICcmJzogdGhlbWUuc2VsZWN0ID8gdGhlbWUuc2VsZWN0LnJvb3QgOiBudWxsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnaW5oZXJpdCcsXG4gICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBtYXhIZWlnaHQ6ICcyNTZweCdcbiAgfSxcbiAgdmFsdWVUZXh0OiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9LFxuICBvcHRpb246IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLCAwLCAwLCAwKWAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgbGluZUhlaWdodDogJzNlbScsXG4gICAgaGVpZ2h0OiAnM2VtJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBvcHRpb25UZXh0OiB7XG4gICAgJ2x5LWNoZWNrYm94IH4gJic6IHtcbiAgICAgIG1hcmdpbkJlZm9yZTogJy0xNnB4J1xuICAgIH1cbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBBTklNQVRJT05TID0gW1xuICB0cmlnZ2VyKCdzZWxlY3RFbnRlcicsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC45KSdcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignc2VsZWN0TGVhdmUnLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICBdKVxuXTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVNlbGVjdEJhc2UgeyB9XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5U2VsZWN0TWl4aW5CYXNlID0gbWl4aW5UYWJJbmRleChMeVNlbGVjdEJhc2UgYXMgQ2FuRGlzYWJsZUN0b3IpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlTZWxlY3QnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICd0YWJJbmRleCdcbiAgfSxcbiAgYW5pbWF0aW9uczogWy4uLkFOSU1BVElPTlNdLFxuICBpbnB1dHM6IFsndGFiSW5kZXgnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMeUZpZWxkQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBMeVNlbGVjdCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlTZWxlY3RcbiAgICBleHRlbmRzIEx5U2VsZWN0TWl4aW5CYXNlXG4gICAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTHlGaWVsZENvbnRyb2xCYXNlLCBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NlbGVjdGlvbk1vZGVsOiBMeVNlbGVjdGlvbk1vZGVsPEx5T3B0aW9uPjtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheUZhY3RvcnkgfCBudWxsO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9oYXNEaXNhYmxlZENsYXNzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3JDbGFzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlIHwgbnVsbCA9IHRoaXMuX3BhcmVudEZvcm0gfHwgdGhpcy5fcGFyZW50Rm9ybUdyb3VwO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF92YWx1ZUtleTogKG9wdDogdW5rbm93bikgPT4gdW5rbm93biA9IHNhbWU7XG4gIHByaXZhdGUgX3ZhbHVlS2V5Rm46IChvcHQ6IEx5T3B0aW9uKSA9PiB1bmtub3duID0gZ2V0VmFsdWU7XG4gIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3Vyc29yQ2xhc3M6IHN0cmluZztcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndmFsdWVUZXh0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHZhbHVlVGV4dERpdlJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9vcHRpb25zOiBRdWVyeUxpc3Q8THlPcHRpb24+O1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlPcHRpb24pLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG9wdGlvbnM6IFF1ZXJ5TGlzdDxMeU9wdGlvbj47XG5cbiAgLyoqXG4gICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgY2hhbmdlIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbiAgLyoqXG4gICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgYmx1ciBldmVudCBvY2N1cnMgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gZmFsc2UgJiYgIXRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIF9vbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSB0cnVlICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9lbmRBbmltYXRpb24oZSkge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMudmFsdWUgJiYgdGhpcy5fc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbCk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlczogTHlPcHRpb25bXSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUuc29tZShfID0+IHRoaXMuX3ZhbHVlS2V5KF8pID09PSB0aGlzLl92YWx1ZUtleUZuKG9wdCkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gob3B0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgICAgICAgICAgICAvLyBzZWxlY3QgdmFsdWVzXG4gICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKG9wdCA9PiBvcHQuc2VsZWN0KCkpO1xuXG4gICAgICAgICAgICAgIC8vIGRlc2VsZWN0IG9sZCB2YWx1ZXNcbiAgICAgICAgICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBiZWZvcmVTZWxlY3RlZHMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICAgICAgb3B0Lm5nT25DaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICBvcHQuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgb3B0Lm5nT25DaGFuZ2VzKCk7XG4gICAgICAgICAgICAgIG9wdC5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMub3B0aW9ucy5maW5kKG9wdCA9PiB0aGlzLl92YWx1ZUtleUZuKG9wdCkgPT09IHRoaXMudmFsdWVLZXkodGhpcy52YWx1ZSkpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWQuc2VsZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgIGlmICghdmFsICYmIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX211bHRpcGxlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlS2V5KGZuOiAob3B0OiB1bmtub3duKSA9PiB1bmtub3duKSB7XG4gICAgdGhpcy5fdmFsdWVLZXlGbiA9IChvcHQ6IEx5T3B0aW9uKSA9PiBmbihnZXRWYWx1ZShvcHQpKTtcbiAgICB0aGlzLl92YWx1ZUtleSA9IGZuO1xuICB9XG4gIGdldCB2YWx1ZUtleSgpOiAob3B0OiB1bmtub3duKSA9PiB1bmtub3duIHsgcmV0dXJuIHRoaXMuX3ZhbHVlS2V5OyB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gIH1cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMudmFsdWU7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5pc0VtcHR5KCkgOiB2YWwgPT0gbnVsbCB8fCB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5pc0VtcHR5KCk7XG4gIH1cblxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkID8gdHJ1ZSA6ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgLyoqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIHRyaWdnZXIuICovXG4gIGdldCB0cmlnZ2VyVmFsdWUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHRpb24gPT4gb3B0aW9uLnZpZXdWYWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSBEaXIucnRsKSB7XG4gICAgICAgIHNlbGVjdGVkT3B0aW9ucy5yZXZlcnNlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbnMuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0udmlld1ZhbHVlO1xuICB9XG5cbiAgLyoqIEN1cnJlbnQgc2VsZWN0ZWRzICovXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gc2VsZWN0ZWQubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpIDogc2VsZWN0ZWRbMF0udmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHVibGljIF9maWVsZDogTHlGaWVsZCxcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBwdWJsaWMgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIC8vIE5vdGU6IHdlIHByb3ZpZGUgdGhlIHZhbHVlIGFjY2Vzc29yIHRocm91Z2ggaGVyZSwgaW5zdGVhZCBvZlxuICAgICAgLy8gdGhlIGBwcm92aWRlcnNgIHRvIGF2b2lkIHJ1bm5pbmcgaW50byBhIGNpcmN1bGFyIGltcG9ydC5cbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnNvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5RmllbGQuc2VsZWN0Jywge1xuICAgICAgJyYge2NvbnRhaW5lcn0nOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9XG4gICAgfSwgdGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIG51bGwsIFNUWUxFX1BSSU9SSVRZLCBGSUVMRF9TVFlMRVMpO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbCA9IG5ldyBMeVNlbGVjdGlvbk1vZGVsPEx5T3B0aW9uPih7XG4gICAgICBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICBnZXRLZXk6IHRoaXMuX3ZhbHVlS2V5Rm5cbiAgICB9KTtcbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLm5nQ29udHJvbDtcblxuICAgIC8vIHVwZGF0ZSBzdHlsZXMgb24gZGlzYWJsZWRcbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9ICEhbmdDb250cm9sLmRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgY2xhc3Mge3NlbGVjdEFycm93fSB0byBgPHNlbGVjdD5gXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuc2VsZWN0QXJyb3cpO1xuXG4gICAgLy8gYXBwbHkgZGVmYXVsdCBzdHlsZXNcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsZC5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IG5ld1ZhbCA9ICEhKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgKHRoaXMubmdDb250cm9sLnRvdWNoZWQgfHwgKHRoaXMuX2Zvcm0gJiYgdGhpcy5fZm9ybS5zdWJtaXR0ZWQpKSk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdWYWw7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2ZpZWxkLmNsYXNzZXMuZXJyb3JTdGF0ZTtcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gZXJyb3JDbGFzcztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJvckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5nQ29udHJvbCA/IHRoaXMubmdDb250cm9sLnZhbHVlIDogdGhpcy5fdmFsdWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZHM6IEx5T3B0aW9uW10gPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9uLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzIG9ubHkgdXBkYXRlIHRoZSByZWZzXG4gICAgICAgIGlmIChzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICBzZWxlY3RlZHMuZm9yRWFjaChvcHRpb24gPT4gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG9wdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGlzLl91cGRhdGVTZWxlY3RlZENsYXNzKCk7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMudGVtcGxhdGVSZWYsIG51bGwsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IG51bGxcbiAgICAgIH0sXG4gICAgICBmbkRlc3Ryb3k6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcbiAgICAgIG9uUmVzaXplU2Nyb2xsOiB0aGlzLl91cGRhdGVQbGFjZW1lbnQuYmluZCh0aGlzKVxuICAgIH0pO1xuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKFxuICAgICAgdGFrZSgxKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVBsYWNlbWVudCgpKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgdGhpcy5vcGVuKCk7XG4gICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cygpOiB2b2lkIHsgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpOyB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwidmFsdWVcIiBwcm9wZXJ0eSBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBjaGVja2VkIHZhbHVlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAoX3ZhbHVlU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIGZuKHRoaXMudmFsdWUpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzZWxlY3QuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fb3ZlcmxheVJlZiEuY29udGFpbmVyRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCdkaXYnKSE7XG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLnZhbHVlVGV4dERpdlJlZjtcbiAgICBsZXQgcGFuZWxXaWR0aDogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHBhbmVsV2lkdGggPSBuYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgMzIgKiAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbFdpZHRoID0gbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDMyO1xuICAgIH1cblxuXG4gICAgLy8gcmVzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCAnaW5pdGlhbCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgYCR7cGFuZWxXaWR0aH1weGApO1xuXG5cbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpXG4gICAgICAgID8gZWwucXVlcnlTZWxlY3RvcignbHktb3B0aW9uJykhXG4gICAgICAgIDogdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0uX2dldEhvc3RFbGVtZW50KCk7XG5cbiAgICBjb25zdCBvZmZzZXQgPSB7XG4gICAgICB5OiAtKG5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3AgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiksXG4gICAgICB4OiAtMTZcbiAgICB9O1xuXG4gICAgLy8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgIGlmIChjb250YWluZXIuc2Nyb2xsSGVpZ2h0ICE9PSBjb250YWluZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIGlmIChjb250YWluZXIuc2Nyb2xsVG9wID09PSBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wKSB7XG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAyKSArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgLSAoY29udGFpbmVyLm9mZnNldEhlaWdodCAvIDIgLSAoc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCAtIGNvbnRhaW5lci5zY3JvbGxUb3ApKSArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgb2Zmc2V0LnkgPSBjb250YWluZXIuc2Nyb2xsVG9wICsgb2Zmc2V0Lnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIG9mZnNldC54IC09IDI0O1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKFxuICAgICAgWVBvc2l0aW9uLmJlbG93LFxuICAgICAgWFBvc2l0aW9uLmFmdGVyLFxuICAgICAgbnVsbCBhcyBhbnksXG4gICAgICBuYXRpdmVFbGVtZW50LFxuICAgICAgZWwsXG4gICAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICAvLyBzZXQgcG9zaXRpb25cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuXG4gICAgLy8gc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgcG9zaXRpb24uaGVpZ2h0KTtcbiAgICBjb25zdCB3aWR0aCA9IHBvc2l0aW9uLndpZHRoID09PSAnaW5pdGlhbCdcbiAgICAgICAgICA/IGAke3BhbmVsV2lkdGh9cHhgXG4gICAgICAgICAgOiBwb3NpdGlvbi53aWR0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHdpZHRoKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlPcHRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5T3B0aW9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgICBtaXhpbkNvbG9yKFxuICAgICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeU9wdGlvbkJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcHRpb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlPcHRpb24gZXh0ZW5kcyBMeU9wdGlvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuX3NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3Qub25DaGFuZ2UodGhpcy5fc2VsZWN0Ll92YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHNpbXBsZSBzdHJpbmcgdmFsdWVzIGJvdW5kIHRvIHRoZSBvcHRpb24gZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKiBUaGUgZGlzcGxheWVkIHZhbHVlIG9mIHRoZSBvcHRpb24uICovXG4gIGdldCB2aWV3VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKCh0aGlzLl9nZXRIb3N0RWxlbWVudCgpIGFzIEVsZW1lbnQpLnRleHRDb250ZW50IHx8ICcnKS50cmltKCk7XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIFNlbGVjdCAqL1xuICBnZXQgX2NvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykgPyB0aGlzLl9zZWxlY3QuX2ZpZWxkLmNvbG9yIDogJyc7XG4gIH1cblxuICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBASG9zdCgpIHB1YmxpYyBfc2VsZWN0OiBMeVNlbGVjdCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBfbmdab25lOiBOZ1pvbmUpIHtcbiAgICBzdXBlcihfdGhlbWUsIF9uZ1pvbmUpO1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9wdGlvbik7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHRoaXMpO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9zZWxlY3Quc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC50b2dnbGUodGhpcyk7XG4gICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwudG9nZ2xlKHRoaXMpO1xuICAgICAgICB0aGlzLl9zZWxlY3QuX3ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgICBpZiAoYmVmb3JlU2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICAgIGJlZm9yZVNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiBvcHQubmdPbkNoYW5nZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9zZWxlY3Quc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cblxuZnVuY3Rpb24gc2FtZShvOiB1bmtub3duKTogdW5rbm93biB7XG4gIHJldHVybiBvO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWUobzogTHlPcHRpb24pOiB1bmtub3duIHtcbiAgcmV0dXJuIG8udmFsdWU7XG59XG4iXX0=