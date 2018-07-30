import { OnInit, AfterContentInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
export declare enum CheckboxState {
    /** The initial state. */
    Init = 0,
    /** Checked state. */
    Checked = 1,
    /** Unchecked state. */
    Unchecked = 2,
    /** Indeterminate state. */
    Indeterminate = 3
}
export declare class LyCheckbox implements OnInit, AfterContentInit, ControlValueAccessor, OnChanges, OnDestroy {
    private _currentCheckState;
    id: string;
    ariaLabel: string;
    ariaLabelledby: string;
    required: string;
    labelPosition: string;
    color: string;
    value: string;
    name: string;
    disabled: string;
    checked: boolean;
    indeterminate: string;
    change: EventEmitter<any>;
    indeterminateChange: EventEmitter<boolean>;
    onTouched: () => any;
    private _controlValueAccessorChangeFn;
    constructor();
    /** Toggles the `checked` state of the checkbox. */
    toggle(): void;
    _onChangeEvent(event: Event): void;
    _onInputClick(event: Event): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
