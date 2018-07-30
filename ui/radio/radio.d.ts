import { ChangeDetectorRef, OnInit, OnDestroy, QueryList, EventEmitter, NgZone, ElementRef, Renderer2 } from '@angular/core';
import { LyRippleService } from '@alyle/ui/ripple';
import { ControlValueAccessor } from '@angular/forms';
import { LyTheme2, LyCoreStyles } from '@alyle/ui';
import { LyRadioService } from './radio.service';
export declare const LY_RADIO_CONTROL_VALUE_ACCESSOR: any;
export declare class UndefinedValue {
    constructor();
}
export declare class LyRadioGroup implements ControlValueAccessor {
    _radioService: LyRadioService;
    private elementRef;
    private _renderer;
    theme: LyTheme2;
    ngZone: NgZone;
    private cd;
    _value: UndefinedValue;
    name: string;
    _color: string;
    private _classes;
    readonly classes: {
        label: string;
        container: string;
    };
    value: any;
    readonly change: EventEmitter<void>;
    /** @deprecated use withColor */
    radioColor: string;
    withColor: string;
    _radios: QueryList<LyRadio>;
    /** The method to be called in order to update ngModel */
    _controlValueAccessorChangeFn: (value: any) => void;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    onTouched: () => any;
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch(): void;
    writeValue(value: any): void;
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled: boolean): void;
    constructor(_radioService: LyRadioService, elementRef: ElementRef, _renderer: Renderer2, theme: LyTheme2, ngZone: NgZone, cd: ChangeDetectorRef);
    _updateCheckFromValue(val: any): void;
    updatevalue(value: any): void;
    markForCheck(): void;
    _radioResetChecked(): void;
}
export declare class LyRadio implements OnInit, OnDestroy {
    radioGroup: LyRadioGroup;
    private _elementRef;
    private _renderer;
    theme: LyTheme2;
    private changeDetectorRef;
    private ngZone;
    coreStyles: LyCoreStyles;
    private _rippleService;
    id: string;
    name: string;
    _value: any;
    private _withColor;
    private _rippleContainer;
    private _checked;
    private checkedClass;
    private _radioContainer;
    _labelContainer: ElementRef;
    withColor: string;
    onCheckedState: EventEmitter<boolean>;
    value: any;
    checked: boolean;
    readonly inputId: string;
    _onInputChange(event: any): void;
    _onInputClick(event: Event): void;
    _setCheckedToFalsy(): void;
    _createStyleWithColor(val: string): string;
    ngOnInit(): void;
    _markForCheck(): void;
    ngOnDestroy(): void;
    constructor(radioGroup: LyRadioGroup, _elementRef: ElementRef, _renderer: Renderer2, theme: LyTheme2, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, coreStyles: LyCoreStyles, _rippleService: LyRippleService);
}
export declare class LyRadioModule {
}
