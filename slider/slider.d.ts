import { ElementRef, Renderer2, OnInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, QueryList } from '@angular/core';
import { LyTheme2, HammerInput, LyHostClass } from '@alyle/ui';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
export declare const LY_SLIDER_CONTROL_VALUE_ACCESSOR: {
    provide: import("@angular/core").InjectionToken<ControlValueAccessor>;
    useExisting: import("@angular/core").Type<any>;
    multi: boolean;
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
    static и: string;
    readonly classes: Record<"disabled" | "thumbVisible" | "vertical" | "root" | "track" | "bg" | "thumbContainer" | "thumbContent" | "thumb" | "thumbLabel" | "thumbLabelValue" | "horizontal" | "marked" | "mark" | "markActive" | "tick" | "tickActive" | "thumbNotVisible" | "thumbContentFocused" | "sliding", string>;
    private _disabled;
    private _disabledClass?;
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
    constructor(_theme: LyTheme2, _el: ElementRef, _renderer: Renderer2, _cd: ChangeDetectorRef, _hostClass: LyHostClass);
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
