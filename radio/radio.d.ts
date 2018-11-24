import { ChangeDetectorRef, OnInit, OnDestroy, QueryList, EventEmitter, NgZone, ElementRef, Renderer2, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { LyTheme2, LyCoreStyles } from '@alyle/ui';
import { LyRadioService } from './radio.service';
export declare const LY_RADIO_CONTROL_VALUE_ACCESSOR: any;
export declare class UndefinedValue {
    constructor();
}
export declare class LyRadioGroup implements ControlValueAccessor {
    _radioService: LyRadioService;
    theme: LyTheme2;
    ngZone: NgZone;
    private cd;
    _value: UndefinedValue;
    name: string;
    _color: string;
    classes: Record<"label" | "container", string>;
    value: any;
    readonly change: EventEmitter<void>;
    color: string;
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
/** @docs-private */
export declare class LyRadioBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyRadioMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & typeof LyRadioBase;
export declare class LyRadio extends LyRadioMixinBase implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    radioGroup: LyRadioGroup;
    private _elementRef;
    private _renderer;
    private changeDetectorRef;
    coreStyles: LyCoreStyles;
    id: string;
    name: string;
    _value: any;
    private _checked;
    private checkedClass;
    private _radioContainer;
    _labelContainer: ElementRef;
    change: EventEmitter<boolean>;
    value: any;
    checked: boolean;
    readonly inputId: string;
    _onInputChange(event: any): void;
    _onInputClick(event: Event): void;
    _setCheckedToFalsy(): void;
    _createStyleWithColor(val: string): string;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    _markForCheck(): void;
    ngOnDestroy(): void;
    constructor(radioGroup: LyRadioGroup, _elementRef: ElementRef, _renderer: Renderer2, theme: LyTheme2, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, coreStyles: LyCoreStyles);
}
export declare class LyRadioModule {
}
