/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, Self, TemplateRef, ViewChild, NgZone, QueryList, ContentChildren } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase, STYLES as FIELD_STYLES } from '@alyle/ui/field';
import { LyOverlay, LySelectionModel, LyTheme2, shadowBuilder, toBoolean, Positioning, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinTabIndex, LyRippleService, XPosition, YPosition, Dir } from '@alyle/ui';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
export const STYLES = (theme) => ({
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
export class LySelectBase {
}
/**
 * \@docs-private
 * @type {?}
 */
export const LySelectMixinBase = mixinTabIndex((/** @type {?} */ (LySelectBase)));
export class LySelect extends LySelectMixinBase {
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
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
        }, this._field._getHostElement(), null, STYLE_PRIORITY, FIELD_STYLES);
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
export class LyOptionBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
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
export const LyOptionMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyOptionBase)))))))));
export class LyOption extends LyOptionMixinBase {
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
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ04sTUFBTSxxQkFBcUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFFTixTQUFTLEVBQ1QsZUFBZSxFQUdkLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsU0FBUyxFQUNULE1BQU0sRUFDTCxNQUFNLGdCQUFnQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxJQUFJLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFFUixhQUFhLEVBRWIsU0FBUyxFQUNULFdBQVcsRUFFWCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNGLE1BQU0sV0FBVyxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFM0Msc0JBQXNCLEdBQUcsS0FB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O2lCQUNoQjthQUNGOzs7O1lBNENxQyxRQUFRLHVCQUEvQixJQUFJO1lBbnNCakIsVUFBVTtZQThDVixlQUFlO1lBdENmLFNBQVM7WUFxQlQsUUFBUTtZQWhDUixpQkFBaUI7WUFlakIsTUFBTTs7OytCQWlwQkwsU0FBUyxTQUFDLGlCQUFpQjt1QkFFM0IsWUFBWSxTQUFDLE9BQU87b0JBYXBCLEtBQUssU0FBQyxPQUFPOzs7Ozs7O0lBbEJkLDJCQUFxRTs7Ozs7SUFDckUsMEJBQW9COztJQUVwQixvQ0FBMkQ7Ozs7O0lBc0MvQywyQkFBZ0M7Ozs7O0lBQ2hDLHVCQUF1Qjs7Ozs7SUFFdkIsa0NBQXNDOzs7OztJQUl0Qyx1QkFBNkI7Ozs7OztBQWlGM0MsU0FBUyxJQUFJLENBQUMsQ0FBVTtJQUN0QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7Ozs7O0FBQ0QsU0FBUyxRQUFRLENBQUMsQ0FBVztJQUMzQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIGtleWZyYW1lcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbiAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0NvbnRyb2wsXG4gIE5nRm9ybVxuICB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5RmllbGQsIEx5RmllbGRDb250cm9sQmFzZSwgU1RZTEVTIGFzIEZJRUxEX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aS9maWVsZCc7XG5pbXBvcnQge1xuICBMeU92ZXJsYXksXG4gIEx5U2VsZWN0aW9uTW9kZWwsXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RmFjdG9yeSxcbiAgc2hhZG93QnVpbGRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgUG9zaXRpb25pbmcsXG4gIENhbkRpc2FibGVDdG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluVGFiSW5kZXgsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIERpclxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZ0FmdGVyOiAnMWVtJyxcbiAgICBtaW5XaWR0aDogJzNlbScsXG4gICAgbWluSGVpZ2h0OiAnMS41ZW0nLFxuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnaW5oZXJpdCcsXG4gICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBtYXhIZWlnaHQ6ICcyNTZweCdcbiAgfSxcbiAgdmFsdWVUZXh0OiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9LFxuICBvcHRpb246IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLCAwLCAwLCAwKWAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgbGluZUhlaWdodDogJzNlbScsXG4gICAgaGVpZ2h0OiAnM2VtJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBvcHRpb25UZXh0OiB7XG4gICAgJ2x5LWNoZWNrYm94IH4gJic6IHtcbiAgICAgIG1hcmdpbkJlZm9yZTogJy0xNnB4J1xuICAgIH1cbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBBTklNQVRJT05TID0gW1xuICB0cmlnZ2VyKCdzZWxlY3RFbnRlcicsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC45KSdcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignc2VsZWN0TGVhdmUnLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICBdKVxuXTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVNlbGVjdEJhc2UgeyB9XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5U2VsZWN0TWl4aW5CYXNlID0gbWl4aW5UYWJJbmRleChMeVNlbGVjdEJhc2UgYXMgQ2FuRGlzYWJsZUN0b3IpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlTZWxlY3QnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICd0YWJJbmRleCdcbiAgfSxcbiAgYW5pbWF0aW9uczogWy4uLkFOSU1BVElPTlNdLFxuICBpbnB1dHM6IFsndGFiSW5kZXgnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMeUZpZWxkQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBMeVNlbGVjdCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlTZWxlY3RcbiAgICBleHRlbmRzIEx5U2VsZWN0TWl4aW5CYXNlXG4gICAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTHlGaWVsZENvbnRyb2xCYXNlLCBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICAvKiogQGludGVybmFsICovXG4gIF9zZWxlY3Rpb25Nb2RlbDogTHlTZWxlY3Rpb25Nb2RlbDxMeU9wdGlvbj47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3ZhbHVlOiBhbnk7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlGYWN0b3J5IHwgbnVsbDtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGFzRGlzYWJsZWRDbGFzcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2Vycm9yQ2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSB8IG51bGwgPSB0aGlzLl9wYXJlbnRGb3JtIHx8IHRoaXMuX3BhcmVudEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmFsdWVLZXk6IChvcHQ6IHVua25vd24pID0+IHVua25vd24gPSBzYW1lO1xuICBwcml2YXRlIF92YWx1ZUtleUZuOiAob3B0OiBMeU9wdGlvbikgPT4gdW5rbm93biA9IGdldFZhbHVlO1xuICBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvclN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1cnNvckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndmFsdWVUZXh0JykgdmFsdWVUZXh0RGl2UmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBAVmlld0NoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlPcHRpb24pKSBfb3B0aW9uczogUXVlcnlMaXN0PEx5T3B0aW9uPjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5T3B0aW9uKSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25zOiBRdWVyeUxpc3Q8THlPcHRpb24+O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGNoYW5nZSBldmVudCBvY2N1cnMgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IGZhbHNlICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gdHJ1ZSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlICYmIHRoaXMuX3NlbGVjdGlvbk1vZGVsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWwpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXM6IEx5T3B0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnNvbWUoXyA9PiB0aGlzLl92YWx1ZUtleShfKSA9PT0gdGhpcy5fdmFsdWVLZXlGbihvcHQpKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9wdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjb25zdCBiZWZvcmVTZWxlY3RlZHMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICAgICAgLy8gc2VsZWN0IHZhbHVlc1xuICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChvcHQgPT4gb3B0LnNlbGVjdCgpKTtcblxuICAgICAgICAgICAgICAvLyBkZXNlbGVjdCBvbGQgdmFsdWVzXG4gICAgICAgICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgIG9wdC5uZ09uQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgb3B0Ll9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkcy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgIG9wdC5uZ09uQ2hhbmdlcygpO1xuICAgICAgICAgICAgICBvcHQuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmluZChvcHQgPT4gdGhpcy5fdmFsdWVLZXlGbihvcHQpID09PSB0aGlzLnZhbHVlS2V5KHRoaXMudmFsdWUpKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNlbGVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9tdWx0aXBsZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZUtleShmbjogKG9wdDogdW5rbm93bikgPT4gdW5rbm93bikge1xuICAgIHRoaXMuX3ZhbHVlS2V5Rm4gPSAob3B0OiBMeU9wdGlvbikgPT4gZm4oZ2V0VmFsdWUob3B0KSk7XG4gICAgdGhpcy5fdmFsdWVLZXkgPSBmbjtcbiAgfVxuICBnZXQgdmFsdWVLZXkoKTogKG9wdDogdW5rbm93bikgPT4gdW5rbm93biB7IHJldHVybiB0aGlzLl92YWx1ZUtleTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpIDogdmFsID09IG51bGwgfHwgdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpO1xuICB9XG5cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZCA/IHRydWUgOiAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIC8qKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB0cmlnZ2VyLiAqL1xuICBnZXQgdHJpZ2dlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX211bHRpcGxlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52aWV3VmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gRGlyLnJ0bCkge1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnMucmV2ZXJzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25zLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLnZpZXdWYWx1ZTtcbiAgfVxuXG4gIC8qKiBDdXJyZW50IHNlbGVjdGVkcyAqL1xuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHNlbGVjdGVkLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSA6IHNlbGVjdGVkWzBdLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZmllbGQ6IEx5RmllbGQsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBwcm92aWRlIHRoZSB2YWx1ZSBhY2Nlc3NvciB0aHJvdWdoIGhlcmUsIGluc3RlYWQgb2ZcbiAgICAgIC8vIHRoZSBgcHJvdmlkZXJzYCB0byBhdm9pZCBydW5uaW5nIGludG8gYSBjaXJjdWxhciBpbXBvcnQuXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseUZpZWxkLnNlbGVjdCcsIHtcbiAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfVxuICAgIH0sIHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBudWxsLCBTVFlMRV9QUklPUklUWSwgRklFTERfU1RZTEVTKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsID0gbmV3IEx5U2VsZWN0aW9uTW9kZWw8THlPcHRpb24+KHtcbiAgICAgIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGdldEtleTogdGhpcy5fdmFsdWVLZXlGblxuICAgIH0pO1xuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMubmdDb250cm9sO1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgb24gZGlzYWJsZWRcbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9ICEhbmdDb250cm9sLmRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgY2xhc3Mge3NlbGVjdEFycm93fSB0byBgPHNlbGVjdD5gXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuc2VsZWN0QXJyb3cpO1xuXG4gICAgLy8gYXBwbHkgZGVmYXVsdCBzdHlsZXNcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsZC5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IG5ld1ZhbCA9ICEhKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgKHRoaXMubmdDb250cm9sLnRvdWNoZWQgfHwgKHRoaXMuX2Zvcm0gJiYgdGhpcy5fZm9ybS5zdWJtaXR0ZWQpKSk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdWYWw7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2ZpZWxkLmNsYXNzZXMuZXJyb3JTdGF0ZTtcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gZXJyb3JDbGFzcztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJvckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5nQ29udHJvbCA/IHRoaXMubmdDb250cm9sLnZhbHVlIDogdGhpcy5fdmFsdWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZHM6IEx5T3B0aW9uW10gPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9uLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzIG9ubHkgdXBkYXRlIHRoZSByZWZzXG4gICAgICAgIGlmIChzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICBzZWxlY3RlZHMuZm9yRWFjaChvcHRpb24gPT4gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG9wdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGlzLl91cGRhdGVTZWxlY3RlZENsYXNzKCk7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMudGVtcGxhdGVSZWYsIG51bGwsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IG51bGxcbiAgICAgIH0sXG4gICAgICBmbkRlc3Ryb3k6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcbiAgICAgIG9uUmVzaXplU2Nyb2xsOiB0aGlzLl91cGRhdGVQbGFjZW1lbnQuYmluZCh0aGlzKVxuICAgIH0pO1xuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKFxuICAgICAgdGFrZSgxKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVBsYWNlbWVudCgpKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgdGhpcy5vcGVuKCk7XG4gICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cygpOiB2b2lkIHsgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpOyB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwidmFsdWVcIiBwcm9wZXJ0eSBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBjaGVja2VkIHZhbHVlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAoX3ZhbHVlU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIGZuKHRoaXMudmFsdWUpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzZWxlY3QuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fb3ZlcmxheVJlZiEuY29udGFpbmVyRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCdkaXYnKSE7XG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLnZhbHVlVGV4dERpdlJlZjtcbiAgICBsZXQgcGFuZWxXaWR0aDogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHBhbmVsV2lkdGggPSBuYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgMzIgKiAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbFdpZHRoID0gbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDMyO1xuICAgIH1cblxuXG4gICAgLy8gcmVzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCAnaW5pdGlhbCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgYCR7cGFuZWxXaWR0aH1weGApO1xuXG5cbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpXG4gICAgICAgID8gZWwucXVlcnlTZWxlY3RvcignbHktb3B0aW9uJykhXG4gICAgICAgIDogdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0uX2dldEhvc3RFbGVtZW50KCk7XG5cbiAgICBjb25zdCBvZmZzZXQgPSB7XG4gICAgICB5OiAtKG5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRUb3AgKyBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiksXG4gICAgICB4OiAtMTZcbiAgICB9O1xuXG4gICAgLy8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgIGlmIChjb250YWluZXIuc2Nyb2xsSGVpZ2h0ICE9PSBjb250YWluZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIGlmIChjb250YWluZXIuc2Nyb2xsVG9wID09PSBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0VG9wKSB7XG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAyKSArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgLSAoY29udGFpbmVyLm9mZnNldEhlaWdodCAvIDIgLSAoc2VsZWN0ZWRFbGVtZW50Lm9mZnNldFRvcCAtIGNvbnRhaW5lci5zY3JvbGxUb3ApKSArIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgb2Zmc2V0LnkgPSBjb250YWluZXIuc2Nyb2xsVG9wICsgb2Zmc2V0Lnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIG9mZnNldC54IC09IDI0O1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKFxuICAgICAgWVBvc2l0aW9uLmJlbG93LFxuICAgICAgWFBvc2l0aW9uLmFmdGVyLFxuICAgICAgbnVsbCBhcyBhbnksXG4gICAgICBuYXRpdmVFbGVtZW50LFxuICAgICAgZWwsXG4gICAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICAvLyBzZXQgcG9zaXRpb25cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuXG4gICAgLy8gc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgcG9zaXRpb24uaGVpZ2h0KTtcbiAgICBjb25zdCB3aWR0aCA9IHBvc2l0aW9uLndpZHRoID09PSAnaW5pdGlhbCdcbiAgICAgICAgICA/IGAke3BhbmVsV2lkdGh9cHhgXG4gICAgICAgICAgOiBwb3NpdGlvbi53aWR0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHdpZHRoKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlPcHRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5T3B0aW9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgICBtaXhpbkNvbG9yKFxuICAgICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeU9wdGlvbkJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcHRpb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlPcHRpb24gZXh0ZW5kcyBMeU9wdGlvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9vbkNsaWNrKCkge1xuICAgIGlmICghdGhpcy5fc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgdGhpcy5fc2VsZWN0LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdC5vbkNoYW5nZSh0aGlzLl9zZWxlY3QuX3ZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3Mgc2ltcGxlIHN0cmluZyB2YWx1ZXMgYm91bmQgdG8gdGhlIG9wdGlvbiBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFRoZSBkaXNwbGF5ZWQgdmFsdWUgb2YgdGhlIG9wdGlvbi4gKi9cbiAgZ2V0IHZpZXdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoKHRoaXMuX2dldEhvc3RFbGVtZW50KCkgYXMgRWxlbWVudCkudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgU2VsZWN0ICovXG4gIGdldCBfY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSA/IHRoaXMuX3NlbGVjdC5fZmllbGQuY29sb3IgOiAnJztcbiAgfVxuXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigvKiogQGludGVybmFsICovXG4gICAgICAgICAgICAgIEBIb3N0KCkgcHVibGljIF9zZWxlY3Q6IEx5U2VsZWN0LFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgICAgcHVibGljIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgIHN1cGVyKF90aGVtZSwgX25nWm9uZSk7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub3B0aW9uKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZWxlY3QuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX3NlbGVjdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGVkcyA9IHRoaXMuX3NlbGVjdC5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnRvZ2dsZSh0aGlzKTtcbiAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgaWYgKGJlZm9yZVNlbGVjdGVkcy5sZW5ndGgpIHtcbiAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9zZWxlY3QuX3NlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU2VsZWN0ZWRzID0gdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5fc2VsZWN0Ll9zZWxlY3Rpb25Nb2RlbC50b2dnbGUodGhpcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdC5fdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICAgIGlmIChiZWZvcmVTZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgICAgYmVmb3JlU2VsZWN0ZWRzLmZvckVhY2gob3B0ID0+IG9wdC5uZ09uQ2hhbmdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZWxlY3QuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX3NlbGVjdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBzYW1lKG86IHVua25vd24pOiB1bmtub3duIHtcbiAgcmV0dXJuIG87XG59XG5mdW5jdGlvbiBnZXRWYWx1ZShvOiBMeU9wdGlvbik6IHVua25vd24ge1xuICByZXR1cm4gby52YWx1ZTtcbn1cbiJdfQ==