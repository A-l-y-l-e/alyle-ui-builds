import { Subscription } from 'rxjs';
import { ElementRef, SimpleChanges, OnChanges, AfterContentInit, ChangeDetectorRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { LyTheme2, LyCommon } from '@alyle/ui';
import { LyFieldDirective } from './ly-field.directive';
export declare class LyInputCommon {
}
export declare class LyPlaceholder {
}
export declare class LyDefault {
}
export declare class LyLabel {
}
export declare class LyInput implements OnInit, AfterContentInit, OnChanges, OnDestroy {
    private theme;
    private _changeDetectorRef;
    _value: any;
    _elementType: 'input' | 'textarea';
    _inputColor: string;
    currentValue: any;
    private paletteSubscription;
    private changed;
    private touched;
    _field: LyFieldDirective;
    lyPlaceholder: LyPlaceholder;
    lyDefault: LyDefault;
    lyLabel: LyLabel;
    type: string;
    label: string;
    placeholder: string;
    labelAbove: boolean;
    default: string;
    _errorState: boolean;
    placeholderContainer: any;
    labelContainer: any;
    focusStateSuscription: Subscription;
    _classes: {
        caretColor?: string;
        withColor?: string;
    };
    _withColor: string;
    withColor: string;
    readonly isFloatingLabel: boolean;
    readonly placeholderState: boolean;
    focusState: boolean;
    readonly defaultOff: boolean;
    readonly disabled: boolean;
    readonly required: boolean;
    readonly currentValueState: boolean;
    _valueBoolean(val: any): boolean;
    _isErrorState(): boolean;
    private updateError;
    value(): any;
    constructor(theme: LyTheme2, _changeDetectorRef: ChangeDetectorRef, bcr: LyCommon, renderer: Renderer2, elementRef: ElementRef);
    private updateColor;
    toBoolean(val: any): boolean;
    readonly isPlaceholder: boolean;
    readonly isDefault: boolean;
    readonly isLabel: boolean;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    _shouldForward(prop: string): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
export declare class LyInputModule {
}
