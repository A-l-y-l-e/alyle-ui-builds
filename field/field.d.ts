import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2, QueryList, NgZone, OnDestroy, DoCheck } from '@angular/core';
import { LyTheme2, ElementObserver } from '@alyle/ui';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { LyError } from './error';
export declare class LyField implements OnInit, AfterContentInit, AfterViewInit {
    private _renderer;
    private _el;
    private _elementObserver;
    private _theme;
    private _cd;
    private _ngZone;
    /**
     * styles
     * @docs-private
     */
    readonly classes: Record<"root" | "animations" | "container" | "fieldset" | "fieldsetSpan" | "labelSpan" | "prefix" | "infix" | "suffix" | "labelContainer" | "labelSpacingStart" | "labelCenter" | "labelSpacingEnd" | "label" | "isFloatingLabel" | "floatingLabel" | "placeholder" | "focused" | "inputNative" | "hintContainer" | "disabled" | "hint" | "error" | "errorState" | "hintAfter" | "hintBefore", string>;
    protected _appearance: string;
    protected _appearanceClass: string;
    protected _color: string;
    protected _colorClass: string;
    protected _isFloating: boolean;
    protected _floatingLabel: boolean;
    private _fielsetSpanClass;
    private _marginStartClass;
    private _marginEndClass;
    private _fullWidth;
    private _fullWidthClass;
    _labelContainer: ElementRef<HTMLDivElement>;
    _labelContainer2: ElementRef<HTMLDivElement>;
    _labelSpan: ElementRef<HTMLDivElement>;
    _prefixContainer: ElementRef<HTMLDivElement>;
    _suffixContainer: ElementRef<HTMLDivElement>;
    _fieldsetLegend: ElementRef<HTMLDivElement>;
    _input: LyInputNative;
    _placeholderChild: LyPlaceholder;
    _labelChild: LyLabel;
    _hintChildren: QueryList<LyHint>;
    _prefixChildren: QueryList<LyPrefix>;
    _suffixChildren: QueryList<LySuffix>;
    _errorChildren: QueryList<LyError>;
    readonly errorState: boolean;
    persistentHint: boolean;
    fullWidth: boolean;
    /** Whether the label is floating. */
    floatingLabel: boolean;
    /** Theme color for the component. */
    color: string;
    /** The field appearance style. */
    appearance: string;
    constructor(_renderer: Renderer2, _el: ElementRef, _elementObserver: ElementObserver, _theme: LyTheme2, _cd: ChangeDetectorRef, _ngZone: NgZone);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    private _updateFielset;
    private _updateFielsetSpan;
    /** @ignore */
    _isLabel(): boolean;
    /** @ignore */
    _isPlaceholder(): boolean;
    /** @ignore */
    _isEmpty(): boolean;
    private _updateFloatingLabel;
    private _markForCheck;
    _getHostElement(): any;
}
export declare class LyInputNative implements OnInit, DoCheck, OnDestroy {
    private _el;
    private _renderer;
    private _field;
    /** @docs-private */
    ngControl: NgControl;
    private _parentForm;
    private _parentFormGroup;
    _hostElement: HTMLInputElement | HTMLTextAreaElement;
    protected _disabled: boolean;
    protected _required: boolean;
    protected _placeholder: string;
    readonly stateChanges: Subject<void>;
    private _hasDisabledClass;
    private _errorClass;
    private _form;
    _focused: boolean;
    errorState: boolean;
    _onInput(): void;
    _onBlur(): void;
    _onFocus(): void;
    /** @ignore */
    value: any;
    /** Whether the input is disabled. */
    disabled: boolean;
    required: boolean;
    placeholder: string;
    constructor(_el: ElementRef<HTMLInputElement | HTMLTextAreaElement>, _renderer: Renderer2, _field: LyField, 
    /** @docs-private */
    ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /** Focuses the input. */
    focus(): void;
}
