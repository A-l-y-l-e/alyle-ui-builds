import { ChangeDetectorRef, OnInit, OnDestroy, QueryList, EventEmitter, NgZone, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { LyTheme2, LyCoreStyles, ThemeVariables, LyFocusState } from '@alyle/ui';
export declare const LY_RADIO_CONTROL_VALUE_ACCESSOR: any;
export declare class UndefinedValue {
    constructor();
}
export declare const STYLES: (theme: ThemeVariables) => {
    radioGroup: {
        display: string;
    };
    radio: {
        display: string;
        '&{checked}': {
            '{container}': {
                'div:nth-child(1)': {
                    transform: string;
                };
                'div:nth-child(2)': {
                    transform: string;
                };
            };
        };
        '&{onFocusByKeyboard} {container}::after': {
            boxShadow: string;
            background: string;
            opacity: number;
            borderRadius: string;
        };
    };
    label: {
        cursor: string;
        whiteSpace: string;
        position: string;
        display: string;
        alignItems: string;
    };
    labelContent: {
        padding: string;
    };
    container: {
        position: string;
        margin: string;
        width: string;
        height: string;
        'div': {
            margin: string;
            borderRadius: string;
            width: string;
            height: string;
        };
        '&::after': {
            width: string;
            height: string;
            margin: string;
            position: string;
            top: number;
            bottom: number;
            left: number;
            right: number;
            content: string;
        };
        'div:nth-child(2)': {
            background: string;
            transform: string;
        };
        'div:nth-child(1)': {
            transform: string;
            border: string;
            color: string;
        };
    };
    checked: any;
    _animations: {
        '{container} div': {
            transition: string;
            transitionDuration: string;
        };
    };
    onFocusByKeyboard: any;
    disabled: {
        color: string;
        '{container} div': {
            color: string;
        };
    };
};
export declare class LyRadioGroup implements ControlValueAccessor {
    private _theme;
    private _cd;
    /** @docs-private */
    readonly classes: Record<"radioGroup" | "radio" | "label" | "labelContent" | "container" | "checked" | "_animations" | "onFocusByKeyboard" | "disabled", string>;
    private _value;
    /** @docs-private */
    name: string;
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
    /** @docs-private */
    writeValue(value: any): void;
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     * @docs-private
     */
    setDisabledState(isDisabled: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, _theme: LyTheme2, _cd: ChangeDetectorRef);
    _updateCheckFromValue(val: any): void;
    /** @docs-private */
    updatevalue(value: any): void;
    _markForCheck(): void;
    _radioResetChecked(): void;
}
/** @docs-private */
export declare class LyRadioBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyRadioMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyRadioBase;
export declare class LyRadio extends LyRadioMixinBase implements OnInit, AfterViewInit, OnDestroy {
    /** @docs-private */
    radioGroup: LyRadioGroup;
    private _elementRef;
    private _renderer;
    private changeDetectorRef;
    _coreStyles: LyCoreStyles;
    private _focusState;
    /** @docs-private */
    readonly classes: Record<"radioGroup" | "radio" | "label" | "labelContent" | "container" | "checked" | "_animations" | "onFocusByKeyboard" | "disabled", string>;
    /** @docs-private */
    id: string;
    /** @docs-private */
    name: string;
    private _value;
    private _checked;
    private _color;
    private _colorClass;
    private _animClass;
    private _disabled;
    private _disabledClass;
    _input: ElementRef;
    private _radioContainer;
    _labelContainer: ElementRef;
    change: EventEmitter<boolean>;
    value: any;
    color: any;
    checked: boolean;
    /** @docs-private */
    readonly inputId: string;
    disabled: boolean;
    constructor(
    /** @docs-private */
    radioGroup: LyRadioGroup, _elementRef: ElementRef, _renderer: Renderer2, theme: LyTheme2, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, _coreStyles: LyCoreStyles, _focusState: LyFocusState);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    _markForCheck(): void;
    ngOnDestroy(): void;
    _onInputChange(event: any): void;
    private _addAnim;
    _onInputClick(event: Event): void;
    _setCheckedToFalsy(): void;
}
export declare class LyRadioModule {
}
