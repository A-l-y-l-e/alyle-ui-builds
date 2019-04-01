import { ChangeDetectorRef, DoCheck, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef, NgZone, OnChanges, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { LyField, LyFieldControlBase } from '@alyle/ui/field';
import { LyOverlay, LySelectionModel, LyTheme2, ThemeVariables, LyRippleService } from '@alyle/ui';
import { Subject } from 'rxjs';
export declare const STYLES: (theme: ThemeVariables) => {
    $priority: number;
    root: {
        display: string;
        paddingAfter: string;
        minWidth: string;
        minHeight: string;
        '-webkit-tap-highlight-color': string;
        '&': import("@alyle/ui/alyle-ui").StyleContainer;
    };
    container: {
        background: string;
        borderRadius: string;
        boxShadow: string;
        display: string;
        transformOrigin: string;
        pointerEvents: string;
        overflow: string;
        maxHeight: string;
    };
    valueText: {
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
    };
    option: {
        display: string;
        fontFamily: string;
        color: string;
        '-webkit-tap-highlight-color': string;
        backgroundColor: string;
        border: number;
        padding: string;
        margin: number;
        outline: string;
        boxSizing: string;
        position: string;
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        '-webkit-user-select': string;
        '-moz-user-select': string;
        '-ms-user-select': string;
        userSelect: string;
        lineHeight: string;
        height: string;
        cursor: string;
    };
    optionText: {
        'ly-checkbox ~ &': {
            marginBefore: string;
        };
    };
    content: {
        padding: number;
        display: string;
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        width: string;
        height: string;
        boxSizing: string;
    };
};
/** @docs-private */
export declare class LySelectBase {
}
/** @docs-private */
export declare const LySelectMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").HasTabIndex> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable>;
export declare class LySelect extends LySelectMixinBase implements ControlValueAccessor, LyFieldControlBase, OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {
    private _theme;
    private _renderer;
    private _el;
    private _overlay;
    /** @internal */
    _field: LyField;
    /** @internal */
    _cd: ChangeDetectorRef;
    private _ngZone;
    /** @docs-private */
    ngControl: NgControl;
    private _parentForm;
    private _parentFormGroup;
    /** @docs-private */
    readonly classes: Record<"root" | "container" | "valueText" | "option" | "optionText" | "content", string>;
    /** @internal */
    _selectionModel: LySelectionModel<LyOption>;
    /** @internal */
    _value: any;
    private _overlayRef;
    protected _disabled: boolean;
    protected _required: boolean;
    protected _placeholder: string;
    readonly stateChanges: Subject<void>;
    private _hasDisabledClass?;
    private _errorClass?;
    private _form;
    private _multiple;
    private _opened;
    private _valueKey;
    private _valueKeyFn;
    _focused: boolean;
    errorState: boolean;
    private _cursorClass;
    /** Emits whenever the component is destroyed. */
    private readonly _destroy;
    templateRef: TemplateRef<any>;
    valueTextDivRef: ElementRef<HTMLDivElement>;
    /** @internal */
    _options: QueryList<LyOption>;
    options: QueryList<LyOption>;
    /**
     * The registered callback function called when a change event occurs on the input element.
     */
    onChange: (_: any) => void;
    /**
     * The registered callback function called when a blur event occurs on the input element.
     */
    onTouched: () => void;
    _onBlur(): void;
    _onFocus(): void;
    /** @internal */
    _endAnimation(e: any): void;
    /** @docs-private */
    value: any;
    /** Whether the input is disabled. */
    disabled: boolean;
    required: boolean;
    multiple: boolean;
    valueKey: (opt: unknown) => unknown;
    placeholder: string;
    readonly focused: boolean;
    readonly empty: boolean;
    readonly floatingLabel: boolean;
    /** The value displayed in the trigger. */
    readonly triggerValue: string;
    /** Current selecteds */
    readonly selected: any;
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef, _overlay: LyOverlay, 
    /** @internal */
    _field: LyField, 
    /** @internal */
    _cd: ChangeDetectorRef, _ngZone: NgZone, 
    /** @docs-private */
    ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    /** @docs-private */
    onContainerClick(): void;
    /** Focuses the input. */
    focus(): void;
    _getHostElement(): any;
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    writeValue(value: any): void;
    /**
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    registerOnChange(fn: (value: any) => any): void;
    /**
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    registerOnTouched(fn: () => any): void;
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled: boolean): void;
    private _updatePlacement;
}
/** @docs-private */
export declare class LyOptionBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyOptionMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyOptionBase;
export declare class LyOption extends LyOptionMixinBase implements OnInit, OnChanges {
    _select: LySelect;
    private _el;
    /** @internal */
    _rippleService: LyRippleService;
    /** @internal */
    _cd: ChangeDetectorRef;
    /** @docs-private */
    readonly classes: Record<"root" | "container" | "valueText" | "option" | "optionText" | "content", string>;
    private _value;
    _rippleContainer: ElementRef;
    _onClick(): void;
    /**
     * Tracks simple string values bound to the option element.
     */
    value: any;
    /** The displayed value of the option. */
    readonly viewValue: string;
    /** The color of Select */
    readonly _color: string;
    readonly isSelected: boolean;
    constructor(/** @internal */ _select: LySelect, _el: ElementRef, 
    /** @internal */
    _rippleService: LyRippleService, _renderer: Renderer2, _theme: LyTheme2, 
    /** @internal */
    _cd: ChangeDetectorRef, _ngZone: NgZone);
    ngOnInit(): void;
    ngOnChanges(): void;
    select(): void;
    toggle(): void;
    /** @internal */
    _getHostElement(): any;
}
