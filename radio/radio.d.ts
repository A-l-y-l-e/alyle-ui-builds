import { ChangeDetectorRef, OnInit, OnDestroy, QueryList, EventEmitter, NgZone, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { LyTheme2, LyCoreStyles, LyFocusState, StyleCollection, LyClasses, StyleTemplate, ThemeRef, StyleRenderer } from '@alyle/ui';
export interface LyRadioTheme {
    /** Styles for Radio Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
}
export interface LyRadioVariables {
    radio?: LyRadioTheme;
}
export declare const LY_RADIO_CONTROL_VALUE_ACCESSOR: any;
export declare class UndefinedValue {
    constructor();
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyRadioVariables, ref: ThemeRef) => {
    $priority: number;
    root: () => (className: string) => string;
    radio: () => (className: string) => string;
    label: (className: string) => string;
    labelContent: any;
    container: (className: string) => string;
    checked: any;
    _animations: () => (className: string) => string;
    onFocusByKeyboard: any;
    disabled: () => (className: string) => string;
};
export declare class LyRadioGroup implements ControlValueAccessor {
    private _theme;
    private _cd;
    /** @docs-private */
    static readonly и = "LyRadioGroup";
    /** @docs-private */
    readonly classes: Pick<{
        $priority: string;
        root: string;
        radio: string;
        label: string;
        labelContent: string;
        container: string;
        checked: string;
        _animations: string;
        onFocusByKeyboard: string;
        disabled: string;
    }, "root" | "radio" | "label" | "labelContent" | "container" | "checked" | "_animations" | "onFocusByKeyboard" | "disabled">;
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
     * @param _isDisabled Whether the control should be disabled.
     * @docs-private
     */
    setDisabledState(_isDisabled: boolean): void;
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
    private _styleRenderer;
    /** @docs-private */
    static readonly и = "LyRadio";
    /** @docs-private */
    readonly classes: Pick<{
        $priority: string;
        root: string;
        radio: string;
        label: string;
        labelContent: string;
        container: string;
        checked: string;
        _animations: string;
        onFocusByKeyboard: string;
        disabled: string;
    }, "root" | "radio" | "label" | "labelContent" | "container" | "checked" | "_animations" | "onFocusByKeyboard" | "disabled">;
    /** @docs-private */
    id: string;
    /** @docs-private */
    name: string;
    private _value;
    private _checked;
    private _color;
    private _animClass;
    private _disabled;
    private _disabledClass?;
    _input: ElementRef;
    private _radioContainer;
    _labelContainer: ElementRef;
    change: EventEmitter<boolean>;
    value: any;
    color: any;
    [0x1]: string;
    checked: boolean;
    /** @docs-private */
    readonly inputId: string;
    disabled: boolean;
    constructor(
    /** @docs-private */
    radioGroup: LyRadioGroup, _elementRef: ElementRef, _renderer: Renderer2, theme: LyTheme2, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, _coreStyles: LyCoreStyles, _focusState: LyFocusState, _styleRenderer: StyleRenderer);
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
