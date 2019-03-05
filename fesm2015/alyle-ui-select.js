import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES } from '@alyle/ui/field';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyOverlay, LySelectionModel, LyTheme2, shadowBuilder, toBoolean, Positioning, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { LyCheckboxModule } from '@alyle/ui/checkbox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const STYLES$1 = (theme) => ({
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
/**
 * \@docs-private
 * @type {?}
 */
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
/**
 * \@docs-private
 */
class LySelectBase {
}
/**
 * \@docs-private
 * @type {?}
 */
const LySelectMixinBase = mixinTabIndex((/** @type {?} */ (LySelectBase)));
class LySelect extends LySelectMixinBase {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _overlay
     * @param {?} _field
     * @param {?} _cd
     * @param {?} _ngZone
     * @param {?} ngControl
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     */
    constructor(_theme, _renderer, _el, _overlay, _field, _cd, _ngZone, ngControl, _parentForm, _parentFormGroup) {
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
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES$1, STYLE_PRIORITY);
        this._disabled = false;
        this._required = false;
        this.stateChanges = new Subject();
        this._form = this._parentForm || this._parentFormGroup;
        this._valueKey = same;
        this._valueKeyFn = getValue;
        this._focused = false;
        this.errorState = false;
        /**
         * Emits whenever the component is destroyed.
         */
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
        }, this._field._getHostElement(), null, STYLE_PRIORITY, STYLES);
    }
    /**
     * @return {?}
     */
    _onBlur() {
        if (this._focused !== false && !this._opened) {
            this._focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    _onFocus() {
        if (this._focused !== true && !this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /**
     * \@internal
     * @param {?} e
     * @return {?}
     */
    _endAnimation(e) {
        if (e.toState === 'void') {
            if (this._overlayRef) {
                this._overlayRef.remove();
                this._overlayRef = null;
            }
        }
    }
    /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (val !== this.value && this._selectionModel) {
            this._value = val;
            this.writeValue(val);
            if (this.options) {
                if (this.multiple) {
                    if (Array.isArray(this.value)) {
                        /** @type {?} */
                        const values = [];
                        this.options.forEach(opt => {
                            if (this.value.some(_ => this._valueKey(_) === this._valueKeyFn(opt))) {
                                values.push(opt);
                            }
                        });
                        if (values.length) {
                            /** @type {?} */
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
                    /** @type {?} */
                    const selecteds = this._selectionModel.selected;
                    this._selectionModel.clear();
                    if (selecteds.length) {
                        selecteds.forEach(opt => {
                            opt.ngOnChanges();
                            opt._cd.markForCheck();
                        });
                    }
                    /** @type {?} */
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
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Whether the input is disabled.
     * @param {?} val
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get multiple() { return this._multiple; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set valueKey(fn) {
        this._valueKeyFn = (opt) => fn(getValue(opt));
        this._valueKey = fn;
    }
    /**
     * @return {?}
     */
    get valueKey() { return this._valueKey; }
    /**
     * @param {?} val
     * @return {?}
     */
    set placeholder(val) {
        this._placeholder = val;
    }
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @return {?}
     */
    get focused() {
        return this._focused;
    }
    /**
     * @return {?}
     */
    get empty() {
        /** @type {?} */
        const val = this.value;
        return this.multiple ? this._selectionModel.isEmpty() : val == null || this._selectionModel.isEmpty();
    }
    /**
     * @return {?}
     */
    get floatingLabel() {
        return this._opened ? true : !this.empty;
    }
    /**
     * The value displayed in the trigger.
     * @return {?}
     */
    get triggerValue() {
        if (this._multiple) {
            /** @type {?} */
            const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
            if (this._theme.variables.direction === Dir.rtl) {
                selectedOptions.reverse();
            }
            return selectedOptions.join(', ');
        }
        return this._selectionModel.selected[0].viewValue;
    }
    /**
     * Current selecteds
     * @return {?}
     */
    get selected() {
        /** @type {?} */
        const selected = this._selectionModel.selected;
        return this.multiple ? selected.map(option => option.value) : selected[0].value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectionModel = new LySelectionModel({
            multiple: this.multiple ? true : undefined,
            getKey: this._valueKeyFn
        });
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const oldVal = this.errorState;
        /** @type {?} */
        const newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
                /** @type {?} */
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
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.value = this.ngControl ? this.ngControl.value : this._value;
            this.stateChanges.next();
            this._cd.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.options) {
            this.options.changes.pipe(takeUntil(this._destroy)).subscribe(() => {
                /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        if (this._overlayRef) {
            this._overlayRef.destroy();
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    close() {
        if (this._overlayRef) {
            this.onTouched();
            this._overlayRef.detach();
            this._opened = false;
            this._getHostElement().focus();
            this.stateChanges.next();
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    onContainerClick() {
        this.open();
        this._getHostElement().focus();
    }
    /**
     * Focuses the input.
     * @return {?}
     */
    focus() { this._getHostElement().focus(); }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this._el.nativeElement;
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        if (this.options) {
            this.value = value;
        }
    }
    /**
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (_valueString) => {
            fn(this.value);
        };
    }
    /**
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
        this.stateChanges.next();
    }
    /**
     * @private
     * @return {?}
     */
    _updatePlacement() {
        /** @type {?} */
        const el = (/** @type {?} */ ((/** @type {?} */ (this._overlayRef)).containerElement));
        /** @type {?} */
        const container = (/** @type {?} */ (el.querySelector('div')));
        const { nativeElement } = this.valueTextDivRef;
        /** @type {?} */
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
        /** @type {?} */
        const selectedElement = this._selectionModel.isEmpty()
            ? (/** @type {?} */ (el.querySelector('ly-option')))
            : this._selectionModel.selected[0]._getHostElement();
        /** @type {?} */
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
        /** @type {?} */
        const position = new Positioning(YPosition.below, XPosition.after, (/** @type {?} */ (null)), nativeElement, el, this._theme.variables, offset, false);
        // set position
        this._renderer.setStyle(el, 'transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
        this._renderer.setStyle(el, 'transform-origin', `${position.ox} ${position.oy} 0`);
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        /** @type {?} */
        const width = position.width === 'initial'
            ? `${panelWidth}px`
            : position.width;
        this._renderer.setStyle(container, 'width', width);
    }
}
LySelect.decorators = [
    { type: Component, args: [{
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
                    { provide: LyFieldControlBase, useExisting: LySelect }
                ]
            }] }
];
/** @nocollapse */
LySelect.ctorParameters = () => [
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
];
LySelect.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    valueTextDivRef: [{ type: ViewChild, args: ['valueText',] }],
    _options: [{ type: ViewChild, args: [forwardRef(() => LyOption),] }],
    options: [{ type: ContentChildren, args: [forwardRef(() => LyOption), { descendants: true },] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }],
    _onFocus: [{ type: HostListener, args: ['focus',] }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }],
    multiple: [{ type: Input }],
    valueKey: [{ type: Input }],
    placeholder: [{ type: Input }]
};
/**
 * \@docs-private
 */
class LyOptionBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
class LyOption extends LyOptionMixinBase {
    /**
     * @param {?} _select
     * @param {?} _el
     * @param {?} _rippleService
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _cd
     * @param {?} _ngZone
     */
    constructor(/** @internal */ _select, _el, _rippleService, _renderer, _theme, _cd, _ngZone) {
        super(_theme, _ngZone);
        this._select = _select;
        this._el = _el;
        this._rippleService = _rippleService;
        this._cd = _cd;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES$1, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.option);
        this.setAutoContrast();
        this._triggerElement = _el;
    }
    /**
     * @return {?}
     */
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
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * The displayed value of the option.
     * @return {?}
     */
    get viewValue() {
        return (((/** @type {?} */ (this._getHostElement()))).textContent || '').trim();
    }
    /**
     * The color of Select
     * @return {?}
     */
    get _color() {
        return this._select._selectionModel.isSelected(this) ? this._select._field.color : '';
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this._select._selectionModel.isSelected(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    select() {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
            /** @type {?} */
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
                /** @type {?} */
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
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled) {
            return;
        }
        if (this._select.multiple) {
            /** @type {?} */
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
                /** @type {?} */
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
    /**
     * \@internal
     * @return {?}
     */
    _getHostElement() {
        return this._el.nativeElement;
    }
}
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
LyOption.ctorParameters = () => [
    { type: LySelect, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: LyRippleService },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
LyOption.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    _onClick: [{ type: HostListener, args: ['click',] }],
    value: [{ type: Input, args: ['value',] }]
};
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
class LySelectModule {
}
LySelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LySelect, LyOption],
                imports: [
                    CommonModule,
                    LyCommonModule,
                    LyCheckboxModule,
                    LyOverlayModule
                ],
                exports: [LySelect, LyOption, LyCommonModule]
            },] }
];

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