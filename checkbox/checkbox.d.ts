import { ElementRef, Renderer2, NgZone, ChangeDetectorRef, AfterViewInit, OnDestroy, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyTheme2, LyFocusState } from '@alyle/ui';
import { LyRippleService } from '@alyle/ui/ripple';
/**
 * This allows it to support [(ngModel)].
 * @ignore
 */
export declare const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
/** Change event object emitted by LyCheckbox. */
export declare class LyCheckboxChange {
    /** The source LyCheckbox of the event. */
    source: LyCheckbox;
    /** The new `checked` value of the checkbox. */
    checked: boolean;
}
export declare class LyCheckbox implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    _commonStyles: LyCommonStyles;
    private _theme;
    private _el;
    private _renderer;
    private _changeDetectorRef;
    private _focusState;
    private _ngZone;
    private _rippleService;
    /**
     * styles
     * @ignore
     */
    readonly classes: Record<"root" | "layout" | "icon" | "checked" | "input" | "onFocusByKeyboard" | "disabled" | "animations", string>;
    protected _withColor: string;
    protected _withColorClass: string;
    protected _required: boolean;
    protected _indeterminate: boolean;
    protected _checked: boolean;
    protected _disabled: any;
    private _onFocusByKeyboardState;
    private _disableRipple;
    private _ripple;
    _innerContainer: ElementRef<HTMLDivElement>;
    /** The value attribute of the native input element */
    value: string;
    withColor: string;
    /** Whether ripples are disabled. */
    disableRipple: boolean;
    /**
     * Whether the checkbox is checked.
     */
    checked: boolean;
    required: boolean;
    disabled: boolean;
    /** Event emitted when the checkbox's `checked` value changes. */
    readonly change: EventEmitter<LyCheckboxChange>;
    /** The native `<input type="checkbox">` element */
    _inputElement: ElementRef<HTMLInputElement>;
    _onTouched: () => any;
    private _controlValueAccessorChangeFn;
    constructor(_commonStyles: LyCommonStyles, _theme: LyTheme2, _el: ElementRef, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef, _focusState: LyFocusState, _ngZone: NgZone, _rippleService: LyRippleService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _destroyRipple;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    /** Toggles the `checked` state of the checkbox. */
    toggle(): void;
    _onInputClick(event: Event): void;
    private _emitChangeEvent;
    private _markForCheck;
}
