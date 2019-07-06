import * as tslib_1 from "tslib";
var LySlider_1;
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { LyTheme2, toBoolean, LY_COMMON_STYLES, getLyThemeStyleUndefinedError, toNumber, LyHostClass, untilComponentDestroyed, Dir } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
export const LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LySlider),
    multi: true
};
const STYLE_PRIORITY = -2;
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'inline-block',
        position: 'relative',
        boxSizing: 'border-box',
        cursor: 'pointer',
        '{bg}': Object.assign({}, LY_COMMON_STYLES.fill, { margin: 'auto' }),
        [[
            // always show visible thumb, when {thumbVisible} is available
            '&{thumbVisible} {thumb}',
            // on hover
            '&:not({thumbNotVisible}):not({disabled}) {thumbContent}:hover {thumb}',
            // on focused
            '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused} {thumb}'
        ].join()]: {
            borderRadius: '50% 50% 0%'
        },
        [[
            '&{thumbVisible} {thumbContent}::before',
            '&:not({thumbNotVisible}):not({disabled}) {thumbContent}:hover::before',
            '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused}::before'
        ].join()]: {
            transform: 'scale(1)'
        },
        '&': theme.slider ? theme.slider.root : null
    },
    track: {
        position: 'absolute',
        margin: 'auto'
    },
    bg: {},
    thumbContainer: {
        width: 0,
        height: 0,
        position: 'absolute',
        margin: 'auto'
    },
    thumbContent: {
        '&::before': {
            content: `''`,
            position: 'absolute',
            opacity: .6,
            transform: 'scale(0)',
            transition: `transform ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms, background ${theme.animations.durations.complex}ms ${theme.animations.curves.sharp} 0ms`
        }
    },
    thumb: {
        position: 'absolute',
        width: '12px',
        height: '12px',
        left: '-6px',
        top: '-6px',
        borderRadius: '50%',
        outline: 0,
        transition: ['border-radius'].map(prop => `${prop} ${theme.animations.durations.exiting}ms ${theme.animations.curves.standard} 0ms`).join(),
        '&::before': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { borderRadius: '50%', transition: ['box-shadow'].map(prop => `${prop} ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms`).join() })
    },
    thumbLabel: {
        position: 'absolute',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        top: '-14px',
        before: '-14px',
        transition: ['transform', 'top', 'left', 'right', 'border-radius'].map(prop => `${prop} ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms`).join()
    },
    thumbLabelValue: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: '#fff'
    },
    horizontal: {
        width: '120px',
        height: '2px',
        padding: '10px 0',
        touchAction: 'pan-y !important',
        '& {track}, & {bg}': {
            height: '2px',
            width: '100%'
        },
        '{track}': {
            before: 0,
            top: 0,
            bottom: 0
        },
        '& {thumb}': {
            transform: 'rotateZ(-135deg)'
        },
        '{thumbLabel}': {
            transform: 'rotateZ(45deg) scale(0)',
        },
        [[
            // always show visible thumb, when {thumbVisible} is available
            '&{thumbVisible} {thumbLabel}',
            // on hover
            '&:not({disabled}) {thumbContent}:hover {thumbLabel}',
            // on focused
            '& {thumbContent}{thumbContentFocused} {thumbLabel}'
        ].join()]: {
            borderRadius: '50% 50% 0%',
            top: '-50px',
            transform: 'rotateZ(45deg) scale(1)'
        },
        '& {thumbLabelValue}': {
            transform: 'rotateZ(-45deg)'
        },
        '{thumbContainer}': {
            top: 0,
            bottom: 0
        },
        '& {thumbContent}::before': {
            width: '2px',
            height: '24px',
            left: '-1px',
            top: '-24px'
        },
        '{tick}': {
            width: '2px',
            height: 'inherit',
            top: 0,
            bottom: 0,
        },
        '{mark}': {
            top: '22px',
            transform: `translateX(${theme.direction === Dir.ltr ? '-' : ''}50%)`,
        },
        '&{marked}': {
            marginBottom: '24px'
        }
    },
    vertical: {
        width: '2px',
        height: '120px',
        padding: '0 10px',
        touchAction: 'pan-x !important',
        '& {track}, & {bg}': {
            height: '100%',
            width: '2px'
        },
        '{track}': {
            bottom: 0,
            left: 0,
            right: 0
        },
        '& {thumb}': {
            transform: theme.direction === Dir.ltr ? 'rotateZ(135deg)' : 'rotateZ(-45deg)'
        },
        '& {thumbLabel}': {
            transform: 'rotateZ(-45deg) scale(0)'
        },
        [[
            // always show visible thumb, when {thumbVisible} is available
            '&{thumbVisible} {thumbLabel}',
            // on hover
            '&:not({disabled}) {thumbContent}:hover {thumbLabel}',
            // on focused
            '& {thumbContent}{thumbContentFocused} {thumbLabel}'
        ].join()]: {
            borderRadius: theme.direction === Dir.ltr ? '50% 50% 0%' : '0 50% 50% 50%',
            before: '-50px',
            transform: 'rotateZ(-45deg) scale(1)'
        },
        '& {thumbLabelValue}': {
            transform: 'rotateZ(45deg)'
        },
        '{thumbContainer}': {
            left: 0,
            right: 0
        },
        '{thumbContent}::before': {
            width: '24px',
            height: '2px',
            before: '-24px',
            top: '-1px'
        },
        '{tick}': {
            width: 'inherit',
            height: '2px',
            left: 0,
            right: 0
        },
        '{mark}': {
            before: '22px',
            transform: 'translateY(50%)',
        },
        '&{marked}': {
            [theme.direction === Dir.ltr ? 'marginRight' : 'marginLeft']: '24px'
        }
    },
    marked: {},
    mark: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        fontSize: '14px',
        color: theme.text.secondary
    },
    markActive: {
        color: 'currentColor'
    },
    tick: {
        position: 'absolute',
        margin: 'auto'
    },
    tickActive: {},
    thumbVisible: null,
    thumbNotVisible: null,
    thumbContentFocused: null,
    sliding: null,
    disabled: {
        cursor: 'default'
    }
});
const ɵ0 = STYLES;
/** A change event emitted by the LySlider component. */
export class LySliderChange {
    constructor(
    /** The LySlider that changed. */
    source, 
    /** The new value of the source slider. */
    value) {
        this.source = source;
        this.value = value;
    }
}
let LySlider = LySlider_1 = class LySlider {
    // private _ngClass: NgClass;
    constructor(_theme, _el, _renderer, _cd, _hostClass) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._hostClass = _hostClass;
        this.classes = this._theme.addStyleSheet(STYLES);
        this._value = null;
        this._min = 0;
        this._max = 100;
        this._step = 1;
        this._changes = new Subject();
        this._thumbs = [];
        this._rootClasses = new Set();
        /** Event emitted when the slider value has changed. */
        this.change = new EventEmitter();
        /** Event emitted when the slider thumb moves. */
        this.input = new EventEmitter();
        /** @docs-private */
        this.valueChange = new EventEmitter();
        /**
         * The registered callback function called when a blur event occurs on the input element.
         * @docs-private
         */
        this.onTouched = () => { };
        this._controlValueAccessorChangeFn = () => { };
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    /** Whether or not to show the thumb. */
    get thumbVisible() {
        return this._thumbVisible;
    }
    set thumbVisible(val) {
        const newVal = val != null ? toBoolean(val) : null;
        if (newVal !== this.thumbVisible) {
            const { thumbVisible: thumbVisibleClass } = this.classes;
            const { thumbNotVisible: thumbNotVisibleClass } = this.classes;
            this._thumbVisible = newVal;
            this._hostClass.toggle(thumbVisibleClass, newVal === true);
            this._hostClass.toggle(thumbNotVisibleClass, newVal === false);
        }
    }
    /** Whether or not to show the marks, also accepts an array of marks. */
    get marks() {
        return this._marks;
    }
    set marks(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.marks) {
            const newClass = this.classes.marked;
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, newClass);
                this._marksClass = newClass;
                this._marks = Array.isArray(val) ? val : newVal;
            }
            else if (this._marksClass) {
                this._marks = false;
                this._renderer.removeClass(this._el.nativeElement, newClass);
                this._marksClass = null;
            }
            if (Array.isArray(newVal)) {
                this._marksList = val;
            }
            else {
                this._marksList = null;
            }
        }
    }
    /** The maximum value that the slider can have. */
    get max() {
        return this._max;
    }
    set max(v) {
        this._max = toNumber(v, this._max);
        this._updateThumbs();
        this._cd.markForCheck();
    }
    /** The minimum value that the slider can have. */
    get min() {
        return this._min;
    }
    set min(v) {
        this._min = toNumber(v, this._min);
        // If the value wasn't explicitly set by the user, set it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        this._updateThumbs();
        this._cd.markForCheck();
    }
    /** The slider appearance style. */
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle(`${LySlider_1.и}.appearance:${val}`, (theme) => {
                const styleFn = theme.slider.appearance[val].appearance;
                if (!styleFn) {
                    throw getLyThemeStyleUndefinedError(LySlider_1.и, 'appearance', val);
                }
                return styleFn(theme, val);
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
        }
    }
    get appearance() {
        return this._appearance;
    }
    /** Color of Slider */
    get color() {
        return this._color;
    }
    set color(val) {
        this._color = val;
        const appearance = this.appearance;
        const styleKey = `${LySlider_1.и}.color:${val}`;
        const newStyle = (theme) => {
            const color = theme.colorOf(val);
            return theme.slider.appearance[appearance].color(theme, color);
        };
        this._colorClass = this._theme.addStyle(styleKey, newStyle, this._el.nativeElement, this._colorClass, STYLE_PRIORITY + 1, STYLES);
    }
    /** Whether the slider is vertical. */
    get vertical() {
        return this._vertical;
    }
    set vertical(val) {
        const newVal = toBoolean(val);
        this._vertical = newVal;
        const newClass = newVal
            ? this.classes.vertical
            : this.classes.horizontal;
        this._verticalClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._verticalClass);
        this._updateThumbs();
        this._cd.markForCheck();
    }
    /** The values at which the thumb will snap. */
    get step() { return this._step; }
    set step(v) {
        this._step = toNumber(v, this._step);
        this._stepPrecision = this._step % 1 !== 0
            ? this._step.toString().split('.')[1].length
            : null;
        this._cd.markForCheck();
    }
    /**
     * Value of a slider, this can be a number or an array of numbers.
     * If the array of numbers has more than one value,
     * then this will create more thumbs
     */
    get value() {
        return this._value;
    }
    set value(val) {
        if (val !== this._value) {
            const valueIsArray = Array.isArray(val);
            if (typeof val === 'number') {
                let newValue = Number(val);
                newValue = parseFloat(newValue.toFixed(this._stepPrecision));
                this._value = newValue;
            }
            else if (valueIsArray && !arrayEquals(this._value, val)) {
                let newValue = val;
                newValue = newValue.map(_val => _val === null
                    ? _val
                    : parseFloat(_val.toFixed(this._stepPrecision)));
                this._value = newValue;
            }
            this._thumbs = (valueIsArray ?
                this._value
                : [this._value]).map((v, index) => ({
                index,
                value: toNumber(v, this.min),
                displayValue: null,
                percent: null,
                styles: {}
            }));
            this._updateThumbs();
            this._cd.markForCheck();
        }
    }
    /** Whether the slider is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.disabled) {
            this._disabled = newVal;
            if (newVal) {
                const appearance = this.appearance;
                const styleKey = `${LySlider_1.и}.disabled:${val}`;
                let newStyle;
                if (!this._theme.existStyle(styleKey)) {
                    const color = this.color;
                    newStyle = (theme) => {
                        const colorCss = theme.colorOf(color);
                        return theme.slider.appearance[appearance].disabled(theme, colorCss);
                    };
                }
                const newClass = this._theme.addStyle(styleKey, newStyle, this._el.nativeElement, this._disabledClass, STYLE_PRIORITY + 2, STYLES);
                this._renderer.addClass(this._getHostElement(), this.classes.disabled);
                this._disabledClass = newClass;
            }
            else if (this._disabledClass) {
                this._renderer.removeClass(this._getHostElement(), this._disabledClass);
                this._renderer.removeClass(this._getHostElement(), this.classes.disabled);
                this._disabledClass = null;
            }
        }
    }
    /**
     * Whether or not to show the thumb label, but if the value is a number,
     * it will show ticks according to the steps. For example: if you set
     * 3 ticks with a step of 10, you will draw a tick every 30 values
     */
    get ticks() {
        return this._ticks;
    }
    set ticks(val) {
        const newValue = toNumber(val, toBoolean(val));
        this._ticks = newValue;
    }
    get _tickList() {
        return this.__tickList;
    }
    ngOnChanges() {
        this._updateTickValues();
        this._changes.next();
    }
    ngOnInit() {
        this._theme.directionChanged.pipe(untilComponentDestroyed(this)).subscribe(() => {
            this.ngOnChanges();
            this._updateThumbs();
            this._cd.markForCheck();
        });
        /** Set default appearance */
        if (this.appearance == null) {
            this.appearance = this._theme.variables.slider.defaultConfig.appearance;
        }
        /** Set horizontal slider */
        if (this.vertical == null) {
            this.vertical = false;
        }
        /** Set default color */
        if (this.color == null) {
            this.color = 'accent';
        }
        /** Set default step */
        if (this.step == null) {
            this.step = 1;
        }
    }
    ngOnDestroy() {
        this._changes.complete();
    }
    writeValue(value) {
        this.value = value;
        this._changes.next();
    }
    /**
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _onFocus(thumb) {
        if (!this.disabled) {
            thumb.focused = true;
        }
    }
    _onBlur(thumb) {
        if (!this.disabled) {
            thumb.focused = false;
        }
    }
    _onTap(event) {
        if (this.disabled) {
            return;
        }
        this._startSlide();
        this._updateValueFromPosition(event.center.x, event.center.y);
        this._onSlideEnd();
    }
    _onSlide(event) {
        if (this.disabled) {
            return;
        }
        this._startSlide();
        if (event['isFinal']) {
            if (event['pointerType'] === 'touch' && event.center.x === 0 && event.center.y === 0) {
                // restore to initial position
                this.value = this._valueOnSlideStart;
            }
            else {
                this._updateValueFromPosition(event.center.x, event.center.y);
            }
            this._onSlideEnd();
        }
        else {
            this._updateValueFromPosition(event.center.x, event.center.y);
        }
        event.preventDefault();
        if (!valueEquals(this._valueOnSlideStart, this.value) && !this.disabled) {
            this._emitInputEvent();
            this._changes.next();
        }
    }
    _startSlide() {
        if (!this._isSliding) {
            this._isSliding = true;
            this._renderer.addClass(this._el.nativeElement, this.classes.sliding);
            // clone
            this._valueOnSlideStart = Array.isArray(this.value) ? this.value.slice(0) : this.value;
            this._thumbsOnSlideStart = this._thumbs.slice(0).map(t => (Object.assign({}, t)));
            this._currentRect = this._bg.nativeElement.getBoundingClientRect();
        }
    }
    _onSlideEnd() {
        if (this._isSliding) {
            this._isSliding = false;
            this._renderer.removeClass(this._el.nativeElement, this.classes.sliding);
            if (!valueEquals(this._valueOnSlideStart, this.value) && !this.disabled) {
                this._emitChangeEvent();
                this._changes.next();
            }
            this._thumbsOnSlideStart = null;
            this._valueOnSlideStart = null;
            this._closestIndex = null;
            this._currentRect = null;
        }
    }
    _trackByFn(_index, item) {
        return item.index;
    }
    _updateValueFromPosition(x, y) {
        if (!this._bg) {
            return;
        }
        const w = this._currentRect.width;
        const h = this._currentRect.height;
        x -= this._currentRect.x;
        y -= this._currentRect.y;
        let percent = clamp(this.vertical
            ? гvalueToPercent(y, 0, h)
            : гvalueToPercent(x, 0, w), 0, 100);
        if (this.vertical || (!this.vertical && this._theme.variables.direction === Dir.rtl)) {
            percent = 100 - percent;
        }
        let value;
        if (percent === 0) {
            value = this.min;
        }
        else if (percent === 100) {
            value = this.max;
        }
        else {
            value = this._roundValueToStep(percentToValue(percent, this.min, this.max));
        }
        if (this._closestIndex == null) {
            this._closestIndex = findClosest(this._thumbs.map(thumb => thumb.value), value);
        }
        const currentThumb = this._thumbsOnSlideStart[this._closestIndex];
        this._slidingThumbValue = currentThumb.value = value;
        if (Array.isArray(this.value)) {
            this.value = this._thumbsOnSlideStart.map(thumb => thumb.value).sort(ASC);
        }
        else {
            this.value = value;
        }
        // focus slidingThumb
        const currentSlidingThumb = this._thumbs.find(thumb => thumb.value === value);
        currentSlidingThumb.focused = true;
        this._thumbsRef.toArray()[currentSlidingThumb.index].nativeElement.focus();
    }
    _updateThumbs() {
        this._thumbs.forEach(thumb => {
            const val = clamp(thumb.value, this.min, this.max);
            const percent = гvalueToPercent(val, this.min, this.max);
            const pos = this._calculatePosition(percent);
            thumb.value = val;
            thumb.displayValue = this._transformValue(val);
            thumb.percent = percent;
            thumb.focused = false;
            thumb.styles = {
                [pos.style]: pos.value
            };
        });
        this._updateTrack();
    }
    _calculatePosition(percent) {
        let style;
        const value = `${percent}%`;
        if (this.vertical) {
            style = 'bottom';
        }
        else {
            style = this._theme.variables.direction === 'rtl' ? 'right' : 'left';
        }
        return {
            style,
            value
        };
    }
    _updateTrack() {
        const track = this._track;
        const thumbs = this._thumbs;
        const thumbsPercents = thumbs.map(thumb => thumb.percent);
        const direction = this._theme.variables.direction === 'rtl' ? 'right' : 'left';
        if (thumbs.length === 1) {
            thumbsPercents.unshift(0);
        }
        const minPercent = this._minPercent = Math.min(...thumbsPercents);
        const maxPercent = this._maxPercent = Math.max(...thumbsPercents);
        if (track) {
            track.nativeElement.style.width = null;
            track.nativeElement.style.height = null;
            track.nativeElement.style.left = null;
            track.nativeElement.style.right = null;
            if (this.vertical) {
                track.nativeElement.style.height = `${(maxPercent - minPercent)}%`;
                track.nativeElement.style.bottom = `${minPercent}%`;
            }
            else {
                track.nativeElement.style.width = `${maxPercent - minPercent}%`;
                track.nativeElement.style[direction] = `${minPercent}%`;
            }
        }
    }
    /** Emits a change event. */
    _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this._createChangeEvent());
    }
    /** Emits an input event. */
    _emitInputEvent() {
        this.input.emit(this._createChangeEvent());
    }
    _createChangeEvent(value = this.value) {
        return new LySliderChange(this, value);
    }
    _roundValueToStep(value) {
        return Number((Math.round(value / this.step) * this.step).toFixed(this._stepPrecision));
    }
    _transformValue(value) {
        if (this.displayWith) {
            return this.displayWith(value);
        }
        return value;
    }
    _getHostElement() {
        return this._el.nativeElement;
    }
    _updateTickValues() {
        this.__tickList = [];
        if (!this.ticks) {
            return false;
        }
        else {
            const ticks = this.ticks;
            this._tickInterval = typeof ticks === 'number'
                ? this.step * ticks
                : this.step;
            this.__tickList = [];
            const tickIntervals = this._tickInterval + 1;
            const stepWith = this._tickInterval;
            for (let index = 0; index < tickIntervals; index++) {
                this.__tickList.push(clamp(index * stepWith, this.min, this.max));
            }
        }
        this._cd.markForCheck();
    }
};
LySlider.и = 'LySlider';
tslib_1.__decorate([
    ViewChild('bg', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], LySlider.prototype, "_bg", void 0);
tslib_1.__decorate([
    ViewChild('track', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], LySlider.prototype, "_track", void 0);
tslib_1.__decorate([
    ViewChild('ticksRef', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], LySlider.prototype, "_ticksRef", void 0);
tslib_1.__decorate([
    ViewChildren('thumbsRef'),
    tslib_1.__metadata("design:type", QueryList)
], LySlider.prototype, "_thumbsRef", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], LySlider.prototype, "displayWith", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LySlider.prototype, "change", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LySlider.prototype, "input", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LySlider.prototype, "valueChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LySlider.prototype, "thumbVisible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], LySlider.prototype, "marks", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], LySlider.prototype, "max", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], LySlider.prototype, "min", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LySlider.prototype, "appearance", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LySlider.prototype, "color", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LySlider.prototype, "vertical", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], LySlider.prototype, "step", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], LySlider.prototype, "value", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LySlider.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], LySlider.prototype, "ticks", null);
LySlider = LySlider_1 = tslib_1.__decorate([
    Component({
        selector: 'ly-slider',
        template: "<div #bg [className]=\"classes.bg\"></div>\n<div #track [className]=\"classes.track\"></div>\n<ng-template [ngIf]=\"ticks\">\n  <ly-tick *ngFor=\"let tick of _tickList\" [value]=\"tick\"></ly-tick>\n</ng-template>\n<span #ticksRef></span>\n<ng-template [ngIf]=\"marks\">\n  <ng-content select=\"ly-mark\"></ng-content>\n</ng-template>\n<ng-template [ngIf]=\"_marksList\">\n  <ly-mark *ngFor=\"let mark of _marksList\" [value]=\"mark.value\">{{ mark.label }}</ly-mark>\n</ng-template>\n<div\n  *ngFor=\"let thumb of _thumbs; trackBy: _trackByFn\"\n  [className]=\"classes.thumbContainer\"\n  [ngStyle]=\"thumb.styles\"\n>\n  <div\n    [className]=\"classes.thumbContent\"\n    [ngClass]=\"thumb.focused ? classes.thumbContentFocused : null\"\n  >\n    <div\n      #thumbsRef\n      (focus)=\"_onFocus(thumb)\"\n      (blur)=\"_onBlur(thumb)\"\n      [attr.tabindex]=\"disabled ? -1 : 0\"\n      [className]=\"classes.thumb\"\n    ></div>\n    <div [className]=\"classes.thumbLabel\" *ngIf=\"thumbVisible !== false\">\n      <span [className]=\"classes.thumbLabelValue\">{{ thumb.displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'lySlider',
        providers: [
            LY_SLIDER_CONTROL_VALUE_ACCESSOR,
            LyHostClass
        ],
        host: {
            '(slide)': '_onSlide($event)',
            '(slideend)': '_onSlideEnd()',
            '(tap)': '_onTap($event)'
        }
    }),
    tslib_1.__metadata("design:paramtypes", [LyTheme2,
        ElementRef,
        Renderer2,
        ChangeDetectorRef,
        LyHostClass])
], LySlider);
export { LySlider };
function findClosest(values, currentValue) {
    const { index: closestIndex } = values.reduce((previousValue, value, index) => {
        const distance = Math.abs(currentValue - value);
        if (previousValue === null || distance < previousValue.distance || distance === previousValue.distance) {
            return {
                distance,
                index,
            };
        }
        return previousValue;
    }, null);
    return closestIndex;
}
export function гvalueToPercent(value, min, max) {
    return ((value - min) * 100) / (max - min);
}
function percentToValue(percent, min, max) {
    return (max - min) * (percent / 100) + min;
}
function arrayEquals(array1, array2) {
    return Array.isArray(array1) && Array.isArray(array2) && array1.length === array2.length
        && array1.every((value, index) => value === array2[index]);
}
function valueEquals(value, value2) {
    if (value === value2) {
        return true;
    }
    return arrayEquals(value, value2);
}
function clamp(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
export function гbetween(x, min, max) {
    return x >= min && x <= max;
}
function ASC(a, b) {
    return a - b;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBR1QsU0FBUyxFQUNULFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQUUsUUFBUSxFQUVmLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsNkJBQTZCLEVBRTdCLFFBQVEsRUFFUixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLEdBQUcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUV4QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxTQUFTLEVBQUUsY0FBYztJQUN6QixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixTQUFTLEVBQUUsWUFBWTtRQUN2QixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLG9CQUNELGdCQUFnQixDQUFDLElBQUksSUFDeEIsTUFBTSxFQUFFLE1BQU0sR0FDZjtRQUNELENBQ0U7WUFD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LENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDcEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNmLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQVMsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUMxRCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIGdldEx5VGhlbWVTdHlsZVVuZGVmaW5lZEVycm9yLFxuICBIYW1tZXJJbnB1dCxcbiAgdG9OdW1iZXIsXG4gIFN0eWxlRGVjbGFyYXRpb25zQmxvY2ssIFxuICBMeUhvc3RDbGFzcyxcbiAgdW50aWxDb21wb25lbnREZXN0cm95ZWQsXG4gIERpcn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNsaWRlclZhcmlhYmxlcyB9IGZyb20gJy4vc2xpZGVyLmNvbmZpZyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBUaGVtZVZhcmlhYmxlc1dpdGhTbGlkZXIgZXh0ZW5kcyBUaGVtZVZhcmlhYmxlcyB7XG4gIHNsaWRlcjogU2xpZGVyVmFyaWFibGVzO1xufVxuXG5leHBvcnQgY29uc3QgTFlfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeVNsaWRlciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlc1dpdGhTbGlkZXIpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAne2JnfSc6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfSxcbiAgICBbXG4gICAgICBbXG4gICAgICAgIC8vIGFsd2F5cyBzaG93IHZpc2libGUgdGh1bWIsIHdoZW4ge3RodW1iVmlzaWJsZX0gaXMgYXZhaWxhYmxlXG4gICAgICAgICcme3RodW1iVmlzaWJsZX0ge3RodW1ifScsXG4gICAgICAgIC8vIG9uIGhvdmVyXG4gICAgICAgICcmOm5vdCh7dGh1bWJOb3RWaXNpYmxlfSk6bm90KHtkaXNhYmxlZH0pIHt0aHVtYkNvbnRlbnR9OmhvdmVyIHt0aHVtYn0nLFxuICAgICAgICAvLyBvbiBmb2N1c2VkXG4gICAgICAgICcmOm5vdCh7dGh1bWJOb3RWaXNpYmxlfSkge3RodW1iQ29udGVudH17dGh1bWJDb250ZW50Rm9jdXNlZH0ge3RodW1ifSdcbiAgICAgIF0uam9pbigpXG4gICAgXToge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlIDUwJSAwJSdcbiAgICB9LFxuICAgIFtcbiAgICAgIFtcbiAgICAgICAgJyZ7dGh1bWJWaXNpYmxlfSB7dGh1bWJDb250ZW50fTo6YmVmb3JlJyxcbiAgICAgICAgJyY6bm90KHt0aHVtYk5vdFZpc2libGV9KTpub3Qoe2Rpc2FibGVkfSkge3RodW1iQ29udGVudH06aG92ZXI6OmJlZm9yZScsXG4gICAgICAgICcmOm5vdCh7dGh1bWJOb3RWaXNpYmxlfSkge3RodW1iQ29udGVudH17dGh1bWJDb250ZW50Rm9jdXNlZH06OmJlZm9yZSdcbiAgICAgIF0uam9pbigpXG4gICAgXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgfSxcbiAgICAnJic6IHRoZW1lLnNsaWRlciA/IHRoZW1lLnNsaWRlci5yb290IDogbnVsbFxuICB9LFxuXG4gIHRyYWNrOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgYmc6IHsgfSxcbiAgdGh1bWJDb250YWluZXI6IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGh1bWJDb250ZW50OiB7XG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IC42LFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke1xuICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICAgICAgfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtcywgYmFja2dyb3VuZCAke1xuICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4XG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYFxuICAgIH1cbiAgfSxcbiAgdGh1bWI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzEycHgnLFxuICAgIGhlaWdodDogJzEycHgnLFxuICAgIGxlZnQ6ICctNnB4JyxcbiAgICB0b3A6ICctNnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgdHJhbnNpdGlvbjogWydib3JkZXItcmFkaXVzJ10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmV4aXRpbmdcbiAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMG1zYCkuam9pbigpLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHRyYW5zaXRpb246IFsnYm94LXNoYWRvdyddLm1hcChwcm9wID0+IGAke3Byb3B9ICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYCkuam9pbigpXG4gICAgfVxuICB9LFxuICB0aHVtYkxhYmVsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcyOHB4JyxcbiAgICBoZWlnaHQ6ICcyOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRvcDogJy0xNHB4JyxcbiAgICBiZWZvcmU6ICctMTRweCcsXG4gICAgdHJhbnNpdGlvbjogWyd0cmFuc2Zvcm0nLCAndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm9yZGVyLXJhZGl1cyddLm1hcChwcm9wID0+IGAke3Byb3B9ICR7XG4gICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXNgKS5qb2luKClcbiAgfSxcbiAgdGh1bWJMYWJlbFZhbHVlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgY29sb3I6ICcjZmZmJ1xuICB9LFxuXG4gIGhvcml6b250YWw6IHtcbiAgICB3aWR0aDogJzEyMHB4JyxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDAnLFxuICAgIHRvdWNoQWN0aW9uOiAncGFuLXkgIWltcG9ydGFudCcsXG4gICAgJyYge3RyYWNrfSwgJiB7Ymd9Jzoge1xuICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgICd7dHJhY2t9Jzoge1xuICAgICAgYmVmb3JlOiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwXG4gICAgfSxcbiAgICAnJiB7dGh1bWJ9Jzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigtMTM1ZGVnKSdcbiAgICB9LFxuXG4gICAgJ3t0aHVtYkxhYmVsfSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpIHNjYWxlKDApJyxcbiAgICB9LFxuICAgIFtcbiAgICAgIFtcbiAgICAgICAgLy8gYWx3YXlzIHNob3cgdmlzaWJsZSB0aHVtYiwgd2hlbiB7dGh1bWJWaXNpYmxlfSBpcyBhdmFpbGFibGVcbiAgICAgICAgJyZ7dGh1bWJWaXNpYmxlfSB7dGh1bWJMYWJlbH0nLFxuICAgICAgICAvLyBvbiBob3ZlclxuICAgICAgICAnJjpub3Qoe2Rpc2FibGVkfSkge3RodW1iQ29udGVudH06aG92ZXIge3RodW1iTGFiZWx9JyxcbiAgICAgICAgLy8gb24gZm9jdXNlZFxuICAgICAgICAnJiB7dGh1bWJDb250ZW50fXt0aHVtYkNvbnRlbnRGb2N1c2VkfSB7dGh1bWJMYWJlbH0nXG4gICAgICBdLmpvaW4oKVxuICAgIF06IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJSA1MCUgMCUnLFxuICAgICAgdG9wOiAnLTUwcHgnLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZykgc2NhbGUoMSknXG4gICAgfSxcblxuICAgICcmIHt0aHVtYkxhYmVsVmFsdWV9Jzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigtNDVkZWcpJ1xuICAgIH0sXG4gICAgJ3t0aHVtYkNvbnRhaW5lcn0nOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDBcbiAgICB9LFxuICAgICcmIHt0aHVtYkNvbnRlbnR9OjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogJzJweCcsXG4gICAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICAgIGxlZnQ6ICctMXB4JyxcbiAgICAgIHRvcDogJy0yNHB4J1xuICAgIH0sXG5cbiAgICAne3RpY2t9Jzoge1xuICAgICAgd2lkdGg6ICcycHgnLFxuICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgfSxcbiAgICAne21hcmt9Jzoge1xuICAgICAgdG9wOiAnMjJweCcsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJy0nIDogJyd9NTAlKWAsXG4gICAgfSxcbiAgICAnJnttYXJrZWR9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMjRweCdcbiAgICB9XG4gIH0sXG4gIHZlcnRpY2FsOiB7XG4gICAgd2lkdGg6ICcycHgnLFxuICAgIGhlaWdodDogJzEyMHB4JyxcbiAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICB0b3VjaEFjdGlvbjogJ3Bhbi14ICFpbXBvcnRhbnQnLFxuICAgICcmIHt0cmFja30sICYge2JnfSc6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcycHgnXG4gICAgfSxcbiAgICAne3RyYWNrfSc6IHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH0sXG4gICAgJyYge3RodW1ifSc6IHtcbiAgICAgIHRyYW5zZm9ybTogdGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJ3JvdGF0ZVooMTM1ZGVnKScgOiAncm90YXRlWigtNDVkZWcpJ1xuICAgIH0sXG4gICAgJyYge3RodW1iTGFiZWx9Jzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigtNDVkZWcpIHNjYWxlKDApJ1xuICAgIH0sXG4gICAgW1xuICAgICAgW1xuICAgICAgICAvLyBhbHdheXMgc2hvdyB2aXNpYmxlIHRodW1iLCB3aGVuIHt0aHVtYlZpc2libGV9IGlzIGF2YWlsYWJsZVxuICAgICAgICAnJnt0aHVtYlZpc2libGV9IHt0aHVtYkxhYmVsfScsXG4gICAgICAgIC8vIG9uIGhvdmVyXG4gICAgICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7dGh1bWJDb250ZW50fTpob3ZlciB7dGh1bWJMYWJlbH0nLFxuICAgICAgICAvLyBvbiBmb2N1c2VkXG4gICAgICAgICcmIHt0aHVtYkNvbnRlbnR9e3RodW1iQ29udGVudEZvY3VzZWR9IHt0aHVtYkxhYmVsfSdcbiAgICAgIF0uam9pbigpXG4gICAgXToge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnNTAlIDUwJSAwJScgOiAnMCA1MCUgNTAlIDUwJScsXG4gICAgICBiZWZvcmU6ICctNTBweCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZykgc2NhbGUoMSknXG4gICAgfSxcblxuICAgICcmIHt0aHVtYkxhYmVsVmFsdWV9Jzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknXG4gICAgfSxcbiAgICAne3RodW1iQ29udGFpbmVyfSc6IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH0sXG4gICAgJ3t0aHVtYkNvbnRlbnR9OjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogJzI0cHgnLFxuICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgIGJlZm9yZTogJy0yNHB4JyxcbiAgICAgIHRvcDogJy0xcHgnXG4gICAgfSxcbiAgICAne3RpY2t9Jzoge1xuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDBcbiAgICB9LFxuICAgICd7bWFya30nOiB7XG4gICAgICBiZWZvcmU6ICcyMnB4JyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNTAlKScsXG4gICAgfSxcbiAgICAnJnttYXJrZWR9Jzoge1xuICAgICAgW3RoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICdtYXJnaW5SaWdodCcgOiAnbWFyZ2luTGVmdCddOiAnMjRweCdcbiAgICB9XG4gIH0sXG5cbiAgbWFya2VkOiB7IH0sXG4gIG1hcms6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeVxuICB9LFxuICBtYXJrQWN0aXZlOiB7XG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHRpY2s6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICB0aWNrQWN0aXZlOiB7fSxcblxuICB0aHVtYlZpc2libGU6IG51bGwsXG4gIHRodW1iTm90VmlzaWJsZTogbnVsbCxcbiAgdGh1bWJDb250ZW50Rm9jdXNlZDogbnVsbCxcbiAgc2xpZGluZzogbnVsbCxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICB9XG59KTtcblxuLyoqIEEgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgYnkgdGhlIEx5U2xpZGVyIGNvbXBvbmVudC4gKi9cbmV4cG9ydCBjbGFzcyBMeVNsaWRlckNoYW5nZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogVGhlIEx5U2xpZGVyIHRoYXQgY2hhbmdlZC4gKi9cbiAgICBwdWJsaWMgc291cmNlOiBMeVNsaWRlcixcbiAgICAvKiogVGhlIG5ldyB2YWx1ZSBvZiB0aGUgc291cmNlIHNsaWRlci4gKi9cbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCxcbiAgKSB7IH1cbn1cblxuaW50ZXJmYWNlIFRodW1iIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBwZXJjZW50OiBudW1iZXIgfCBudWxsO1xuICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGZvY3VzZWQ/OiBib29sZWFuO1xuICBzbGlkaW5nPzogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlck1hcmsge1xuICB2YWx1ZTogbnVtYmVyO1xuICBsYWJlbDogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlTbGlkZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBMWV9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixcbiAgICBMeUhvc3RDbGFzc1xuICBdLFxuICBob3N0OiB7XG4gICAgJyhzbGlkZSknOiAnX29uU2xpZGUoJGV2ZW50KScsXG4gICAgJyhzbGlkZWVuZCknOiAnX29uU2xpZGVFbmQoKScsXG4gICAgJyh0YXApJzogJ19vblRhcCgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5U2xpZGVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBzdGF0aWMg0LggPSAnTHlTbGlkZXInO1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzPzogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3ZlcnRpY2FsOiBib29sZWFuO1xuICBwcml2YXRlIF92ZXJ0aWNhbENsYXNzPzogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90aHVtYnNPblNsaWRlU3RhcnQ6IFRodW1iW10gfCBudWxsO1xuICBwcml2YXRlIF92YWx1ZU9uU2xpZGVTdGFydDogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsO1xuXG4gIHByaXZhdGUgX21pbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbWF4OiBudW1iZXIgPSAxMDA7XG5cbiAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfc3RlcFByZWNpc2lvbj86IG51bWJlciB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfY2xvc2VzdEluZGV4OiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9jdXJyZW50UmVjdDogRE9NUmVjdCB8IG51bGw7XG5cbiAgX2NoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBNaW4gcGVyY2VudGFnZSwgdGhpcyBpcyBmb3IgbWFyay4gKi9cbiAgX21pblBlcmNlbnQ6IG51bWJlcjtcbiAgLyoqIE1heCBwZXJjZW50YWdlLCB0aGlzIGlzIGZvciBtYXJrLiAqL1xuICBfbWF4UGVyY2VudDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGh1bWIgaXMgc2xpZGluZy5cbiAgICovXG4gIF9pc1NsaWRpbmc6IGJvb2xlYW47XG4gIF9zbGlkaW5nVGh1bWJWYWx1ZT86IG51bWJlciB8IG51bGw7XG5cbiAgX3RodW1iczogVGh1bWJbXSA9IFtdO1xuXG4gIF9yb290Q2xhc3NlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2JnJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9iZz86IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd0cmFjaycsIHsgc3RhdGljOiB0cnVlIH0pIF90cmFjazogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3RpY2tzUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgX3RpY2tzUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZHJlbigndGh1bWJzUmVmJykgX3RodW1ic1JlZj86IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50Pj47XG5cbiAgQElucHV0KCkgZGlzcGxheVdpdGg6ICh2YWx1ZTogbnVtYmVyIHwgbnVsbCkgPT4gc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBoYXMgY2hhbmdlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2xpZGVyIHRodW1iIG1vdmVzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5wdXQ6IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPigpO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbD4oKTtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBibHVyIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgdGh1bWIuICovXG4gIEBJbnB1dCgpXG4gIGdldCB0aHVtYlZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iVmlzaWJsZTtcbiAgfVxuICBzZXQgdGh1bWJWaXNpYmxlKHZhbDogYm9vbGVhbiB8IG51bGwpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB2YWwgIT0gbnVsbCA/IHRvQm9vbGVhbih2YWwpIDogbnVsbDtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMudGh1bWJWaXNpYmxlKSB7XG5cbiAgICAgIGNvbnN0IHsgdGh1bWJWaXNpYmxlOiB0aHVtYlZpc2libGVDbGFzcyB9ID0gdGhpcy5jbGFzc2VzO1xuICAgICAgY29uc3QgeyB0aHVtYk5vdFZpc2libGU6IHRodW1iTm90VmlzaWJsZUNsYXNzIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgICB0aGlzLl90aHVtYlZpc2libGUgPSBuZXdWYWw7XG5cbiAgICAgIHRoaXMuX2hvc3RDbGFzcy50b2dnbGUodGh1bWJWaXNpYmxlQ2xhc3MsIG5ld1ZhbCA9PT0gdHJ1ZSk7XG4gICAgICB0aGlzLl9ob3N0Q2xhc3MudG9nZ2xlKHRodW1iTm90VmlzaWJsZUNsYXNzLCBuZXdWYWwgPT09IGZhbHNlKTtcblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RodW1iVmlzaWJsZTogYm9vbGVhbiB8IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIG1hcmtzLCBhbHNvIGFjY2VwdHMgYW4gYXJyYXkgb2YgbWFya3MuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXJrcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3M7XG4gIH1cbiAgc2V0IG1hcmtzKHZhbDogYm9vbGVhbiB8IEx5U2xpZGVyTWFya1tdKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLm1hcmtzKSB7XG5cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jbGFzc2VzLm1hcmtlZDtcblxuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgICAgIHRoaXMuX21hcmtzQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgICAgdGhpcy5fbWFya3MgPSBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBuZXdWYWw7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX21hcmtzQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5fbWFya3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgICAgICB0aGlzLl9tYXJrc0NsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1ZhbCkpIHtcbiAgICAgICAgdGhpcy5fbWFya3NMaXN0ID0gdmFsIGFzIEx5U2xpZGVyTWFya1tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya3NMaXN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtzOiBib29sZWFuIHwgTHlTbGlkZXJNYXJrW107XG4gIHByaXZhdGUgX21hcmtzQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIF9tYXJrc0xpc3Q/OiBMeVNsaWRlck1hcmtbXSB8IG51bGw7XG5cbiAgLyoqIFRoZSBtYXhpbXVtIHZhbHVlIHRoYXQgdGhlIHNsaWRlciBjYW4gaGF2ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbiAgc2V0IG1heCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB0b051bWJlcih2LCB0aGlzLl9tYXgpO1xuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIG1pbmltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuICBzZXQgbWluKHY6IG51bWJlcikge1xuICAgIHRoaXMuX21pbiA9IHRvTnVtYmVyKHYsIHRoaXMuX21pbik7XG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgd2Fzbid0IGV4cGxpY2l0bHkgc2V0IGJ5IHRoZSB1c2VyLCBzZXQgaXQgdG8gdGhlIG1pbi5cbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl9taW47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIHNsaWRlciBhcHBlYXJhbmNlIHN0eWxlLiAqL1xuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGAke0x5U2xpZGVyLtC4fS5hcHBlYXJhbmNlOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXNXaXRoU2xpZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlRm4gPSB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZSFbdmFsXS5hcHBlYXJhbmNlO1xuICAgICAgICBpZiAoIXN0eWxlRm4pIHtcbiAgICAgICAgICB0aHJvdyBnZXRMeVRoZW1lU3R5bGVVbmRlZmluZWRFcnJvcihMeVNsaWRlci7QuCwgJ2FwcGVhcmFuY2UnLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZUZuKHRoZW1lLCB2YWwpO1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLCBTVFlMRV9QUklPUklUWSwgU1RZTEVTKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICAvKiogQ29sb3Igb2YgU2xpZGVyICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgY29uc3QgYXBwZWFyYW5jZSA9IHRoaXMuYXBwZWFyYW5jZTtcbiAgICBjb25zdCBzdHlsZUtleSA9IGAke0x5U2xpZGVyLtC4fS5jb2xvcjoke3ZhbH1gO1xuXG4gICAgY29uc3QgbmV3U3R5bGUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzV2l0aFNsaWRlcikgPT4ge1xuICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICByZXR1cm4gdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2UhW2FwcGVhcmFuY2VdLmNvbG9yKHRoZW1lLCBjb2xvcik7XG4gICAgfTtcbiAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBzdHlsZUtleSxcbiAgICAgIG5ld1N0eWxlLFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSArIDEsIFNUWUxFUyk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgc2xpZGVyIGlzIHZlcnRpY2FsLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHNldCB2ZXJ0aWNhbCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IG5ld1ZhbDtcblxuICAgIGNvbnN0IG5ld0NsYXNzID0gbmV3VmFsXG4gICAgICA/IHRoaXMuY2xhc3Nlcy52ZXJ0aWNhbFxuICAgICAgOiB0aGlzLmNsYXNzZXMuaG9yaXpvbnRhbDtcblxuICAgIHRoaXMuX3ZlcnRpY2FsQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yZW5kZXJlcixcbiAgICAgIG5ld0NsYXNzLFxuICAgICAgdGhpcy5fdmVydGljYWxDbGFzcyBhcyBhbnkpO1xuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIHZhbHVlcyBhdCB3aGljaCB0aGUgdGh1bWIgd2lsbCBzbmFwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RlcCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc3RlcDsgfVxuICBzZXQgc3RlcCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwID0gdG9OdW1iZXIodiwgdGhpcy5fc3RlcCk7XG5cbiAgICB0aGlzLl9zdGVwUHJlY2lzaW9uID0gdGhpcy5fc3RlcCAlIDEgIT09IDBcbiAgICAgID8gdGhpcy5fc3RlcC50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoXG4gICAgICA6IG51bGw7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWx1ZSBvZiBhIHNsaWRlciwgdGhpcyBjYW4gYmUgYSBudW1iZXIgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICogSWYgdGhlIGFycmF5IG9mIG51bWJlcnMgaGFzIG1vcmUgdGhhbiBvbmUgdmFsdWUsXG4gICAqIHRoZW4gdGhpcyB3aWxsIGNyZWF0ZSBtb3JlIHRodW1ic1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgY29uc3QgdmFsdWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IE51bWJlcih2YWwpO1xuICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQobmV3VmFsdWUudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uIGFzIG51bWJlcikpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZUlzQXJyYXkgJiYgIWFycmF5RXF1YWxzKHRoaXMuX3ZhbHVlLCB2YWwpKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbCBhcyBudW1iZXJbXTtcbiAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5tYXAoXG4gICAgICAgICAgX3ZhbCA9PiBfdmFsID09PSBudWxsXG4gICAgICAgICAgPyBfdmFsXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KF92YWwudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uIGFzIG51bWJlcikpKTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGh1bWJzID0gKHZhbHVlSXNBcnJheSA/XG4gICAgICAgIHRoaXMuX3ZhbHVlIGFzIChudW1iZXIgfCBudWxsKVtdXG4gICAgICAgIDogW3RoaXMuX3ZhbHVlIGFzIG51bWJlciB8IG51bGxdKS5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHZhbHVlOiB0b051bWJlcih2LCB0aGlzLm1pbiksXG4gICAgICAgICAgZGlzcGxheVZhbHVlOiBudWxsLFxuICAgICAgICAgIHBlcmNlbnQ6IG51bGwsXG4gICAgICAgICAgc3R5bGVzOiB7fVxuICAgICAgICB9KSk7XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgc2xpZGVyIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlO1xuICAgICAgICBjb25zdCBzdHlsZUtleSA9IGAke0x5U2xpZGVyLtC4fS5kaXNhYmxlZDoke3ZhbH1gO1xuICAgICAgICBsZXQgbmV3U3R5bGU6IFN0eWxlRGVjbGFyYXRpb25zQmxvY2sgfCBudWxsO1xuICAgICAgICBpZiAoIXRoaXMuX3RoZW1lLmV4aXN0U3R5bGUoc3R5bGVLZXkpKSB7XG4gICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgIG5ld1N0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlc1dpdGhTbGlkZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQ3NzID0gdGhlbWUuY29sb3JPZihjb2xvcik7XG4gICAgICAgICAgICByZXR1cm4gdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2UhW2FwcGVhcmFuY2VdLmRpc2FibGVkKHRoZW1lLCBjb2xvckNzcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICAgIHN0eWxlS2V5LFxuICAgICAgICAgIG5ld1N0eWxlLFxuICAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyxcbiAgICAgICAgICBTVFlMRV9QUklPUklUWSArIDIsIFNUWUxFUyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZGlzYWJsZWRDbGFzcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kaXNhYmxlZENsYXNzKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHRodW1iIGxhYmVsLCBidXQgaWYgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLFxuICAgKiBpdCB3aWxsIHNob3cgdGlja3MgYWNjb3JkaW5nIHRvIHRoZSBzdGVwcy4gRm9yIGV4YW1wbGU6IGlmIHlvdSBzZXRcbiAgICogMyB0aWNrcyB3aXRoIGEgc3RlcCBvZiAxMCwgeW91IHdpbGwgZHJhdyBhIHRpY2sgZXZlcnkgMzAgdmFsdWVzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdGlja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpY2tzO1xuICB9XG4gIHNldCB0aWNrcyh2YWw6IG51bWJlciB8IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRvTnVtYmVyKHZhbCwgdG9Cb29sZWFuKHZhbCkpO1xuICAgIHRoaXMuX3RpY2tzID0gbmV3VmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGlja3M6IG51bWJlciB8IGJvb2xlYW47XG4gIF90aWNrSW50ZXJ2YWw6IG51bWJlcjtcbiAgZ2V0IF90aWNrTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RpY2tMaXN0O1xuICB9XG4gIHByaXZhdGUgX190aWNrTGlzdDogbnVtYmVyW107XG4gIC8vIHByaXZhdGUgX25nQ2xhc3M6IE5nQ2xhc3M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9ob3N0Q2xhc3M6IEx5SG9zdENsYXNzXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlVGlja1ZhbHVlcygpO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLl90aGVtZS5kaXJlY3Rpb25DaGFuZ2VkLnBpcGUodW50aWxDb21wb25lbnREZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IGFwcGVhcmFuY2UgKi9cbiAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IChcbiAgICAgICAgdGhpcy5fdGhlbWUudmFyaWFibGVzIGFzIFRoZW1lVmFyaWFibGVzV2l0aFNsaWRlcikuc2xpZGVyLmRlZmF1bHRDb25maWchLmFwcGVhcmFuY2UhO1xuICAgIH1cblxuICAgIC8qKiBTZXQgaG9yaXpvbnRhbCBzbGlkZXIgKi9cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGNvbG9yICovXG4gICAgaWYgKHRoaXMuY29sb3IgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb2xvciA9ICdhY2NlbnQnO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBzdGVwICovXG4gICAgaWYgKHRoaXMuc3RlcCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzZWxlY3QuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfb25Gb2N1cyh0aHVtYjogVGh1bWIpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9vbkJsdXIodGh1bWI6IFRodW1iKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgX29uVGFwKGV2ZW50OiBIYW1tZXJJbnB1dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXJ0U2xpZGUoKTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgIHRoaXMuX29uU2xpZGVFbmQoKTtcbiAgfVxuXG4gIF9vblNsaWRlKGV2ZW50OiBIYW1tZXJJbnB1dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTbGlkZSgpO1xuXG4gICAgaWYgKGV2ZW50Wydpc0ZpbmFsJ10pIHtcbiAgICAgIGlmIChldmVudFsncG9pbnRlclR5cGUnXSA9PT0gJ3RvdWNoJyAmJiBldmVudC5jZW50ZXIueCA9PT0gMCAmJiBldmVudC5jZW50ZXIueSA9PT0gMCkge1xuICAgICAgICAvLyByZXN0b3JlIHRvIGluaXRpYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uU2xpZGVFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICB9XG5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXZhbHVlRXF1YWxzKHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0LCB0aGlzLnZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZW1pdElucHV0RXZlbnQoKTtcbiAgICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0U2xpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGluZyk7XG5cbiAgICAgIC8vIGNsb25lXG4gICAgICB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCA9IEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlLnNsaWNlKDApIDogdGhpcy52YWx1ZTtcblxuICAgICAgdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0ID0gdGhpcy5fdGh1bWJzLnNsaWNlKDApLm1hcCh0ID0+ICh7Li4udH0pKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRSZWN0ID0gdGhpcy5fYmchLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICB9XG4gIH1cblxuICBfb25TbGlkZUVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkaW5nKTtcblxuICAgICAgaWYgKCF2YWx1ZUVxdWFscyh0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCwgdGhpcy52YWx1ZSkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2Nsb3Nlc3RJbmRleCA9IG51bGw7XG4gICAgICB0aGlzLl9jdXJyZW50UmVjdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgX3RyYWNrQnlGbihfaW5kZXg6IG51bWJlciwgaXRlbTogVGh1bWIpIHtcbiAgICByZXR1cm4gaXRlbS5pbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLl9iZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHcgPSB0aGlzLl9jdXJyZW50UmVjdCEud2lkdGg7XG4gICAgY29uc3QgaCA9IHRoaXMuX2N1cnJlbnRSZWN0IS5oZWlnaHQ7XG4gICAgeCAtPSB0aGlzLl9jdXJyZW50UmVjdCEueDtcbiAgICB5IC09IHRoaXMuX2N1cnJlbnRSZWN0IS55O1xuXG4gICAgbGV0IHBlcmNlbnQgPSBjbGFtcChcbiAgICAgIHRoaXMudmVydGljYWxcbiAgICAgICAgPyDQs3ZhbHVlVG9QZXJjZW50KHksIDAsIGgpXG4gICAgICAgIDog0LN2YWx1ZVRvUGVyY2VudCh4LCAwLCB3KSxcbiAgICAgIDAsXG4gICAgICAxMDApO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwgfHwgKCF0aGlzLnZlcnRpY2FsICYmIHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09IERpci5ydGwpKSB7XG4gICAgICBwZXJjZW50ID0gMTAwIC0gcGVyY2VudDtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWU6IG51bWJlcjtcblxuICAgIGlmIChwZXJjZW50ID09PSAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWluO1xuICAgIH0gZWxzZSBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuX3JvdW5kVmFsdWVUb1N0ZXAocGVyY2VudFRvVmFsdWUocGVyY2VudCwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG9zZXN0SW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY2xvc2VzdEluZGV4ID0gZmluZENsb3Nlc3QodGhpcy5fdGh1bWJzLm1hcCh0aHVtYiA9PiB0aHVtYi52YWx1ZSksIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRodW1iID0gdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0IVt0aGlzLl9jbG9zZXN0SW5kZXhdO1xuICAgIHRoaXMuX3NsaWRpbmdUaHVtYlZhbHVlID0gY3VycmVudFRodW1iLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQhLm1hcCh0aHVtYiA9PiB0aHVtYi52YWx1ZSkuc29ydChBU0MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gZm9jdXMgc2xpZGluZ1RodW1iXG4gICAgY29uc3QgY3VycmVudFNsaWRpbmdUaHVtYiA9IHRoaXMuX3RodW1icy5maW5kKHRodW1iID0+IHRodW1iLnZhbHVlID09PSB2YWx1ZSkhO1xuICAgIGN1cnJlbnRTbGlkaW5nVGh1bWIuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fdGh1bWJzUmVmIS50b0FycmF5KClbY3VycmVudFNsaWRpbmdUaHVtYi5pbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGh1bWJzKCkge1xuICAgIHRoaXMuX3RodW1icy5mb3JFYWNoKHRodW1iID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGNsYW1wKHRodW1iLnZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgY29uc3QgcGVyY2VudCA9INCzdmFsdWVUb1BlcmNlbnQodmFsLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5fY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudCk7XG4gICAgICB0aHVtYi52YWx1ZSA9IHZhbDtcbiAgICAgIHRodW1iLmRpc3BsYXlWYWx1ZSA9IHRoaXMuX3RyYW5zZm9ybVZhbHVlKHZhbCk7XG4gICAgICB0aHVtYi5wZXJjZW50ID0gcGVyY2VudDtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRodW1iLnN0eWxlcyA9IHtcbiAgICAgICAgW3Bvcy5zdHlsZV06IHBvcy52YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3VwZGF0ZVRyYWNrKCk7XG4gIH1cblxuICBfY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudDogbnVtYmVyKSB7XG4gICAgbGV0IHN0eWxlOiBzdHJpbmc7XG4gICAgY29uc3QgdmFsdWUgPSBgJHtwZXJjZW50fSVgO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHN0eWxlID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUcmFjaygpIHtcbiAgICBjb25zdCB0cmFjayA9IHRoaXMuX3RyYWNrO1xuICAgIGNvbnN0IHRodW1icyA9IHRoaXMuX3RodW1icztcbiAgICBjb25zdCB0aHVtYnNQZXJjZW50cyA9IHRodW1icy5tYXAodGh1bWIgPT4gdGh1bWIucGVyY2VudCEpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICAgIGlmICh0aHVtYnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aHVtYnNQZXJjZW50cy51bnNoaWZ0KDApO1xuICAgIH1cblxuICAgIGNvbnN0IG1pblBlcmNlbnQgPSB0aGlzLl9taW5QZXJjZW50ID0gTWF0aC5taW4oLi4udGh1bWJzUGVyY2VudHMpO1xuICAgIGNvbnN0IG1heFBlcmNlbnQgPSB0aGlzLl9tYXhQZXJjZW50ID0gTWF0aC5tYXgoLi4udGh1bWJzUGVyY2VudHMpO1xuXG4gICAgaWYgKHRyYWNrKSB7XG5cbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmlnaHQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkeyhtYXhQZXJjZW50IC0gbWluUGVyY2VudCl9JWA7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gYCR7bWluUGVyY2VudH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHttYXhQZXJjZW50IC0gbWluUGVyY2VudH0lYDtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZVtkaXJlY3Rpb25dID0gYCR7bWluUGVyY2VudH0lYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRW1pdHMgYSBjaGFuZ2UgZXZlbnQuICovXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMudmFsdWUpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KCkpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGFuIGlucHV0IGV2ZW50LiAqL1xuICBwcml2YXRlIF9lbWl0SW5wdXRFdmVudCgpIHtcbiAgICB0aGlzLmlucHV0LmVtaXQodGhpcy5fY3JlYXRlQ2hhbmdlRXZlbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDaGFuZ2VFdmVudCh2YWx1ZSA9IHRoaXMudmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEx5U2xpZGVyQ2hhbmdlKHRoaXMsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JvdW5kVmFsdWVUb1N0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBOdW1iZXIoKE1hdGgucm91bmQodmFsdWUgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwKS50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24hKSk7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2Zvcm1WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVdpdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlXaXRoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGlja1ZhbHVlcygpIHtcbiAgICB0aGlzLl9fdGlja0xpc3QgPSBbXTtcbiAgICBpZiAoIXRoaXMudGlja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGlja3MgPSB0aGlzLnRpY2tzO1xuICAgICAgdGhpcy5fdGlja0ludGVydmFsID0gdHlwZW9mIHRpY2tzID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHRoaXMuc3RlcCAqIHRpY2tzXG4gICAgICAgIDogdGhpcy5zdGVwO1xuXG4gICAgICB0aGlzLl9fdGlja0xpc3QgPSBbXTtcbiAgICAgIGNvbnN0IHRpY2tJbnRlcnZhbHMgPSB0aGlzLl90aWNrSW50ZXJ2YWwgKyAxO1xuICAgICAgY29uc3Qgc3RlcFdpdGggPSB0aGlzLl90aWNrSW50ZXJ2YWw7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlja0ludGVydmFsczsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLl9fdGlja0xpc3QucHVzaChjbGFtcChpbmRleCAqIHN0ZXBXaXRoLCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdCh2YWx1ZXM6IG51bWJlcltdLCBjdXJyZW50VmFsdWU6IG51bWJlcikge1xuICBjb25zdCB7IGluZGV4OiBjbG9zZXN0SW5kZXggfSA9IHZhbHVlcy5yZWR1Y2U8e1xuICAgIGRpc3RhbmNlOiBudW1iZXJcbiAgICBpbmRleDogbnVtYmVyXG4gIH0gfCBudWxsPigocHJldmlvdXNWYWx1ZSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50VmFsdWUgLSB2YWx1ZSk7XG5cbiAgICBpZiAocHJldmlvdXNWYWx1ZSA9PT0gbnVsbCB8fCBkaXN0YW5jZSA8IHByZXZpb3VzVmFsdWUuZGlzdGFuY2UgfHwgZGlzdGFuY2UgPT09IHByZXZpb3VzVmFsdWUuZGlzdGFuY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpbmRleCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gIH0sIG51bGwpITtcbiAgcmV0dXJuIGNsb3Nlc3RJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uINCzdmFsdWVUb1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiAoKHZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFRvVmFsdWUocGVyY2VudCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogKHBlcmNlbnQgLyAxMDApICsgbWluO1xufVxuXG5mdW5jdGlvbiBhcnJheUVxdWFscyhhcnJheTE6IGFueSwgYXJyYXkyOiBhbnkpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkxKSAmJiBBcnJheS5pc0FycmF5KGFycmF5MikgJiYgYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aFxuICAgICYmIGFycmF5MS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gYXJyYXkyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWxzKHZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwsIHZhbHVlMjogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsKSB7XG4gIGlmICh2YWx1ZSA9PT0gdmFsdWUyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGFycmF5RXF1YWxzKHZhbHVlLCB2YWx1ZTIpO1xufVxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uINCzYmV0d2Vlbih4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG59XG5cbmZ1bmN0aW9uIEFTQyhhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICByZXR1cm4gYSAtIGI7XG59XG4iXX0=