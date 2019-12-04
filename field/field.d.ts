import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2, QueryList, NgZone, OnDestroy, DoCheck } from '@angular/core';
import { LyTheme2, ElementObserver, StyleCollection, LyClasses, StyleTemplate, StyleRenderer, ThemeRef } from '@alyle/ui';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { LyError } from './error';
import { LyFieldControlBase } from './field-control-base';
export interface LyFieldTheme {
    /** Styles for Field Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    appearance?: {
        standard?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
        filled?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
        outlined?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
        [name: string]: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
}
export interface LyFieldVariables {
    field?: LyFieldTheme;
}
export declare const STYLE_SELECT_ARROW: (className: string) => string;
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyFieldVariables, ref: ThemeRef) => {
    $priority: number;
    $global: (className: string) => string;
    root: () => (className: string) => string;
    animations: () => (className: string) => string;
    container: (className: string) => string;
    fieldset: (className: string) => string;
    fieldsetSpan: (className: string) => string;
    labelSpan: (className: string) => string;
    prefix: (className: string) => string;
    infix: (className: string) => string;
    suffix: (className: string) => string;
    labelContainer: (className: string) => string;
    labelSpacingStart: any;
    labelCenter: (className: string) => string;
    labelSpacingEnd: (className: string) => string;
    label: (className: string) => string;
    isFloatingLabel: any;
    floatingLabel: () => (className: string) => string;
    placeholder: (className: string) => string;
    focused: any;
    inputNative: (className: string) => string;
    hintContainer: (className: string) => string;
    disabled: () => (className: string) => string;
    hint: any;
    error: any;
    errorState: () => (className: string) => string;
    hintAfter: (className: string) => string;
    hintBefore: (className: string) => string;
    selectArrow: () => (className: string) => string;
};
export declare class LyField implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    private _renderer;
    private _el;
    private _elementObserver;
    private _theme;
    private _cd;
    private _ngZone;
    private _styleRenderer;
    /**
     * styles
     * @docs-private
     */
    readonly classes: Pick<{
        $priority: string;
        $global: string;
        root: string;
        animations: string;
        container: string;
        fieldset: string;
        fieldsetSpan: string;
        labelSpan: string;
        prefix: string;
        infix: string;
        suffix: string;
        labelContainer: string;
        labelSpacingStart: string;
        labelCenter: string;
        labelSpacingEnd: string;
        label: string;
        isFloatingLabel: string;
        floatingLabel: string;
        placeholder: string;
        focused: string;
        inputNative: string;
        hintContainer: string;
        disabled: string;
        hint: string;
        error: string;
        errorState: string;
        hintAfter: string;
        hintBefore: string;
        selectArrow: string;
    }, "root" | "animations" | "container" | "fieldset" | "fieldsetSpan" | "labelSpan" | "prefix" | "infix" | "suffix" | "labelContainer" | "labelSpacingStart" | "labelCenter" | "labelSpacingEnd" | "label" | "isFloatingLabel" | "floatingLabel" | "placeholder" | "focused" | "inputNative" | "hintContainer" | "disabled" | "hint" | "error" | "errorState" | "hintAfter" | "hintBefore" | "selectArrow">;
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
    private _fullWidthClass?;
    _labelContainer: ElementRef<HTMLDivElement>;
    _labelContainer2: ElementRef<HTMLDivElement>;
    _labelSpan: ElementRef<HTMLDivElement>;
    _prefixContainer: ElementRef<HTMLDivElement>;
    _suffixContainer: ElementRef<HTMLDivElement>;
    _fieldsetLegend: ElementRef<HTMLDivElement>;
    _control?: LyFieldControlBase;
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
    [0x1]: string;
    onFocus(): void;
    constructor(_renderer: Renderer2, _el: ElementRef, _elementObserver: ElementObserver, _theme: LyTheme2, _cd: ChangeDetectorRef, _ngZone: NgZone, _styleRenderer: StyleRenderer);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
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
export declare class LyNativeControl implements LyFieldControlBase, OnInit, DoCheck, OnDestroy {
    private _theme;
    private _el;
    private _renderer;
    private _field;
    /** @docs-private */
    ngControl: NgControl;
    private _parentForm;
    private _parentFormGroup;
    protected _disabled: boolean;
    protected _required: boolean;
    protected _placeholder: string;
    readonly stateChanges: Subject<void>;
    private _hasDisabledClass?;
    private _errorClass?;
    private _cursorClass;
    private _isSelectInput;
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
    readonly focused: boolean;
    readonly empty: boolean;
    readonly floatingLabel: boolean;
    constructor(_theme: LyTheme2, _el: ElementRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, _renderer: Renderer2, _field: LyField, 
    /** @docs-private */
    ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /** @docs-private */
    onContainerClick(_e: MouseEvent): void;
    /** Focuses the input. */
    focus(): void;
    _getHostElement(): HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    private _hasLabelSelectionOption;
}
