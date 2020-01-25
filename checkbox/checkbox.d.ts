import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, ThemeRef, StyleRenderer, StyleCollection, LyClasses, StyleTemplate, WithStyles } from '@alyle/ui';
import { Color } from '@alyle/ui/color';
export interface LyCheckboxTheme {
    /** Styles for Checkbox Component. */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    /** Styles that apply when a color is set. */
    color?: (classes: LyClasses<typeof STYLES>, color: Color) => StyleTemplate;
}
export interface LyCheckboxVariables {
    checkbox?: LyCheckboxTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyCheckboxVariables, ref: ThemeRef) => {
    $name: string;
    $priority: number;
    root: () => (className: string) => string;
    layout: (className: string) => string;
    icon: (className: string) => string;
    checked: () => (className: string) => string;
    input: (className: string) => string;
    onFocusByKeyboard: any;
    disabled: () => (className: string) => string;
    animations: () => (className: string) => string;
};
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
/** @docs-private */
export declare class LyCheckboxBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyCheckboxMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyCheckboxBase;
/**
 * @dynamic
 */
export declare class LyCheckbox extends LyCheckboxMixinBase implements WithStyles, ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    _commonStyles: LyCommonStyles;
    private _el;
    private _renderer;
    private _changeDetectorRef;
    private _focusState;
    readonly sRenderer: StyleRenderer;
    /** @ignore */
    static readonly и = "LyCheckbox";
    /**
     * styles
     * @ignore
     */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        layout: string;
        icon: string;
        checked: string;
        input: string;
        onFocusByKeyboard: string;
        disabled: string;
        animations: string;
    }, "root" | "layout" | "icon" | "checked" | "input" | "onFocusByKeyboard" | "disabled" | "animations">;
    protected _color: string;
    protected _colorClass: string;
    protected _required: boolean;
    protected _indeterminate: boolean;
    protected _checked: boolean;
    protected _disabled: any;
    private _onFocusByKeyboardState;
    _innerContainer: ElementRef<HTMLDivElement>;
    /** The value attribute of the native input element */
    value: string;
    /** Checkbox color when checked */
    color: string | null;
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
    constructor(_commonStyles: LyCommonStyles, _theme: LyTheme2, _el: ElementRef, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef, _focusState: LyFocusState, sRenderer: StyleRenderer, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** @docs-private */
    writeValue(value: any): void;
    /** @docs-private */
    registerOnChange(fn: (value: any) => void): void;
    /** @docs-private */
    registerOnTouched(fn: any): void;
    /** @docs-private */
    setDisabledState(isDisabled: boolean): void;
    /** Toggles the `checked` state of the checkbox. */
    toggle(): void;
    _onInputClick(event: Event): void;
    _onChange(event: Event): void;
    private _emitChangeEvent;
    private _markForCheck;
}
