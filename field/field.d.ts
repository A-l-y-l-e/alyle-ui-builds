import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2, QueryList, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { LyTheme2, ElementObserver } from '@alyle/ui';
import { LyInputNative } from './input';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
/** @docs-private */
export declare class LyFieldBase {
}
/** @docs-private */
export declare const LyFieldMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & typeof LyFieldBase;
export declare class LyField extends LyFieldMixinBase implements OnChanges, OnInit, AfterContentInit, AfterViewInit {
    private _renderer;
    private _el;
    private _elementObserver;
    private _theme;
    private _cd;
    private _ngZone;
    /**
     * styles
     * @ignore
     */
    classes: Record<"placeholder" | "root" | "animations" | "container" | "fieldset" | "fieldsetSpan" | "labelSpan" | "prefix" | "infix" | "suffix" | "labelContainer" | "labelSpacingStart" | "labelCenter" | "labelSpacingEnd" | "label" | "isFloatingLabel" | "floatingLabel" | "focused" | "inputNative" | "hint", string>;
    protected _appearance: string;
    protected _appearanceClass: string;
    protected _withColor: string;
    protected _withColorClass: string;
    protected _isFloating: boolean;
    protected _floatingLabel: boolean;
    private _fielsetSpanClass;
    private _marginStartClass;
    private _marginEndClass;
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
    /** Whether the label is floating. */
    floatingLabel: boolean;
    /** Deprecated, instead use `[color], theme color for the component. */
    withColor: string;
    /** The field appearance style. */
    appearance: string;
    constructor(_renderer: Renderer2, _el: ElementRef, _elementObserver: ElementObserver, _theme: LyTheme2, _cd: ChangeDetectorRef, _ngZone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
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
}
