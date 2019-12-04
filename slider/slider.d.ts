import { ElementRef, Renderer2, OnInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, QueryList, InjectionToken } from '@angular/core';
import { LyTheme2, HammerInput, LyHostClass, StyleCollection, LyClasses, StyleTemplate, ThemeRef, StyleRenderer } from '@alyle/ui';
import { Color } from '@alyle/ui/color';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
export interface LySliderTheme {
    /** Styles for Slider Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    disabled?: StyleCollection<((classes: LyClasses<typeof STYLES>, color: Color) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>, color: Color) => StyleTemplate);
    color?: StyleCollection<((classes: LyClasses<typeof STYLES>, color: Color) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>, color: Color) => StyleTemplate);
    appearance?: {
        standard?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
        [key: string]: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
}
export interface LySliderDefaultOptions {
    appearance?: string;
}
export declare const LY_SLIDER_DEFAULT_OPTIONS: InjectionToken<LySliderDefaultOptions>;
export interface LySliderVariables {
    slider?: LySliderTheme;
}
export declare const LY_SLIDER_CONTROL_VALUE_ACCESSOR: {
    provide: InjectionToken<ControlValueAccessor>;
    useExisting: import("@angular/core").Type<any>;
    multi: boolean;
};
declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LySliderVariables, ref: ThemeRef) => {
    $priority: number;
    root: () => (className: string) => string;
    track: (className: string) => string;
    bg: any;
    thumbContainer: (className: string) => string;
    thumbContent: (className: string) => string;
    thumb: (className: string) => string;
    thumbLabel: (className: string) => string;
    thumbLabelValue: (className: string) => string;
    horizontal: () => (className: string) => string;
    vertical: () => (className: string) => string;
    marked: any;
    mark: (className: string) => string;
    markActive: (className: string) => string;
    tick: (className: string) => string;
    tickActive: any;
    thumbVisible: any;
    thumbNotVisible: any;
    thumbContentFocused: any;
    sliding: any;
    disabled: (className: string) => string;
};
/** A change event emitted by the LySlider component. */
export declare class LySliderChange {
    /** The LySlider that changed. */
    source: LySlider;
    /** The new value of the source slider. */
    value: number | (number | null)[] | null;
    constructor(
    /** The LySlider that changed. */
    source: LySlider, 
    /** The new value of the source slider. */
    value: number | (number | null)[] | null);
}
interface Thumb {
    value: number;
    displayValue: string | number | null;
    percent: number | null;
    styles: {
        [key: string]: string;
    };
    focused?: boolean;
    sliding?: boolean;
    index: number;
}
export interface LySliderMark {
    value: number;
    label: number | string;
}
export declare class LySlider implements OnChanges, OnInit, OnDestroy, ControlValueAccessor {
    private _theme;
    private _el;
    private _renderer;
    private _cd;
    private _hostClass;
    private _sr;
    private _default;
    static и: string;
    readonly classes: Pick<{
        $priority: string;
        root: string;
        track: string;
        bg: string;
        thumbContainer: string;
        thumbContent: string;
        thumb: string;
        thumbLabel: string;
        thumbLabelValue: string;
        horizontal: string;
        vertical: string;
        marked: string;
        mark: string;
        markActive: string;
        tick: string;
        tickActive: string;
        thumbVisible: string;
        thumbNotVisible: string;
        thumbContentFocused: string;
        sliding: string;
        disabled: string;
    }, "root" | "track" | "bg" | "thumbContainer" | "thumbContent" | "thumb" | "thumbLabel" | "thumbLabelValue" | "horizontal" | "vertical" | "marked" | "mark" | "markActive" | "tick" | "tickActive" | "thumbVisible" | "thumbNotVisible" | "thumbContentFocused" | "sliding" | "disabled">;
    private _disabled;
    private _disabledClass;
    private _color;
    private _colorClass;
    private _vertical;
    private _verticalClass?;
    private _appearance;
    private _appearanceClass;
    private _value;
    private _thumbsOnSlideStart;
    private _valueOnSlideStart;
    private _min;
    private _max;
    private _step;
    private _stepPrecision?;
    private _closestIndex;
    private _currentRect;
    _changes: Subject<void>;
    /** Min percentage, this is for mark. */
    _minPercent: number;
    /** Max percentage, this is for mark. */
    _maxPercent: number;
    /**
     * Whether or not the thumb is sliding.
     */
    _isSliding: boolean;
    _slidingThumbValue?: number | null;
    _thumbs: Thumb[];
    _rootClasses: Set<string>;
    _bg?: ElementRef<HTMLDivElement>;
    _track: ElementRef<HTMLDivElement>;
    _ticksRef: ElementRef<HTMLDivElement>;
    _thumbsRef?: QueryList<ElementRef<HTMLDivElement>>;
    displayWith: (value: number | null) => string | number;
    /** Event emitted when the slider value has changed. */
    readonly change: EventEmitter<LySliderChange>;
    /** Event emitted when the slider thumb moves. */
    readonly input: EventEmitter<LySliderChange>;
    /** @docs-private */
    readonly valueChange: EventEmitter<number | (number | null)[] | null>;
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @docs-private
     */
    onTouched: () => void;
    private _controlValueAccessorChangeFn;
    /** Whether or not to show the thumb. */
    thumbVisible: boolean | null;
    private _thumbVisible;
    /** Whether or not to show the marks, also accepts an array of marks. */
    marks: boolean | LySliderMark[];
    private _marks;
    private _marksClass;
    _marksList?: LySliderMark[] | null;
    /** The maximum value that the slider can have. */
    max: number;
    /** The minimum value that the slider can have. */
    min: number;
    /** The slider appearance style. */
    appearance: string;
    /** Color of Slider */
    color: string;
    /** Whether the slider is vertical. */
    vertical: boolean;
    /** The values at which the thumb will snap. */
    step: number;
    /**
     * Value of a slider, this can be a number or an array of numbers.
     * If the array of numbers has more than one value,
     * then this will create more thumbs
     */
    value: number | (number | null)[] | null;
    /** Whether the slider is disabled. */
    disabled: boolean;
    /**
     * Whether or not to show the thumb label, but if the value is a number,
     * it will show ticks according to the steps. For example: if you set
     * 3 ticks with a step of 10, you will draw a tick every 30 values
     */
    ticks: number | boolean;
    private _ticks;
    _tickInterval: number;
    readonly _tickList: number[];
    private __tickList;
    constructor(_theme: LyTheme2, _el: ElementRef, _renderer: Renderer2, _cd: ChangeDetectorRef, _hostClass: LyHostClass, _sr: StyleRenderer, _default: LySliderDefaultOptions);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
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
    _onFocus(thumb: Thumb): void;
    _onBlur(thumb: Thumb): void;
    _onTap(event: HammerInput): void;
    _onSlide(event: HammerInput): void;
    private _startSlide;
    _onSlideEnd(): void;
    _trackByFn(_index: number, item: Thumb): number;
    private _updateValueFromPosition;
    private _updateThumbs;
    _calculatePosition(percent: number): {
        style: string;
        value: string;
    };
    private _updateTrack;
    /** Emits a change event. */
    private _emitChangeEvent;
    /** Emits an input event. */
    private _emitInputEvent;
    private _createChangeEvent;
    private _roundValueToStep;
    private _transformValue;
    _getHostElement(): any;
    private _updateTickValues;
}
export declare function гvalueToPercent(value: number, min: number, max: number): number;
export declare function гbetween(x: number, min: number, max: number): boolean;
export {};
