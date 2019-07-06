import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList, Input, Output, Component, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, Directive, NgModule } from '@angular/core';
import { toBoolean, toNumber, getLyThemeStyleUndefinedError, untilComponentDestroyed, Dir, LyHostClass, LyTheme2, LY_COMMON_STYLES, LyCommonModule } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

var LySlider_1;
const LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
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
class LySliderChange {
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
__decorate([
    ViewChild('bg', { static: false }),
    __metadata("design:type", ElementRef)
], LySlider.prototype, "_bg", void 0);
__decorate([
    ViewChild('track', { static: true }),
    __metadata("design:type", ElementRef)
], LySlider.prototype, "_track", void 0);
__decorate([
    ViewChild('ticksRef', { static: true }),
    __metadata("design:type", ElementRef)
], LySlider.prototype, "_ticksRef", void 0);
__decorate([
    ViewChildren('thumbsRef'),
    __metadata("design:type", QueryList)
], LySlider.prototype, "_thumbsRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], LySlider.prototype, "displayWith", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LySlider.prototype, "change", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LySlider.prototype, "input", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LySlider.prototype, "valueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LySlider.prototype, "thumbVisible", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LySlider.prototype, "marks", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], LySlider.prototype, "max", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], LySlider.prototype, "min", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LySlider.prototype, "appearance", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LySlider.prototype, "color", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LySlider.prototype, "vertical", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], LySlider.prototype, "step", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LySlider.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LySlider.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LySlider.prototype, "ticks", null);
LySlider = LySlider_1 = __decorate([
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
    __metadata("design:paramtypes", [LyTheme2,
        ElementRef,
        Renderer2,
        ChangeDetectorRef,
        LyHostClass])
], LySlider);
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
function гvalueToPercent(value, min, max) {
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
function гbetween(x, min, max) {
    return x >= min && x <= max;
}
function ASC(a, b) {
    return a - b;
}

let LyTick = class LyTick {
    constructor(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
    }
    ngOnChanges() {
        this._updateTick();
    }
    ngOnInit() {
        this._renderer.addClass(this._getHostElement(), this.classes.tick);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(() => {
            this._updateTick();
        });
    }
    _updateTick() {
        const min = this._slider._minPercent;
        const max = this._slider._maxPercent;
        const className = this._slider.classes.tickActive;
        const percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        const pos = this._slider._calculatePosition(percent);
        if (гbetween(percent, min, max)) {
            this._tickActiveClass = className;
            this._renderer.addClass(this._el.nativeElement, className);
        }
        else if (this._tickActiveClass) {
            this._tickActiveClass = null;
            this._renderer.removeClass(this._el.nativeElement, className);
        }
        this._renderer.setStyle(this._getHostElement(), 'bottom', null);
        this._renderer.setStyle(this._getHostElement(), 'left', null);
        this._renderer.setStyle(this._getHostElement(), 'right', null);
        this._renderer.setStyle(this._getHostElement(), pos.style, pos.value);
    }
    ngOnDestroy() { }
    _getHostElement() {
        return this._el.nativeElement;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], LyTick.prototype, "value", void 0);
LyTick = __decorate([
    Directive({
        selector: 'ly-tick'
    }),
    __metadata("design:paramtypes", [LySlider,
        Renderer2,
        ElementRef])
], LyTick);

let LyMark = class LyMark {
    constructor(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
        _renderer.addClass(_el.nativeElement, _slider.classes.mark);
    }
    ngOnInit() {
        this._renderer.insertBefore(this._slider._getHostElement(), this._tick._getHostElement(), this._slider._ticksRef.nativeElement);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(() => {
            this._updateMark();
        });
    }
    _updateMark() {
        const min = this._slider._minPercent;
        const max = this._slider._maxPercent;
        const className = this._slider.classes.markActive;
        const percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        const pos = this._slider._calculatePosition(percent);
        if (гbetween(percent, min, max)) {
            this._markActiveClass = className;
            this._renderer.addClass(this._el.nativeElement, className);
        }
        else if (this._markActiveClass) {
            this._markActiveClass = null;
            this._renderer.removeClass(this._el.nativeElement, className);
        }
        this._renderer.setStyle(this._getHostElement(), 'bottom', null);
        this._renderer.setStyle(this._getHostElement(), 'left', null);
        this._renderer.setStyle(this._getHostElement(), 'right', null);
        this._renderer.setStyle(this._getHostElement(), pos.style, pos.value);
    }
    ngOnDestroy() { }
    _getHostElement() {
        return this._el.nativeElement;
    }
};
__decorate([
    ViewChild(LyTick, { static: true }),
    __metadata("design:type", LyTick)
], LyMark.prototype, "_tick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LyMark.prototype, "value", void 0);
LyMark = __decorate([
    Component({
        selector: 'ly-mark',
        template: "<ly-tick [value]=\"value\"></ly-tick>\n<ng-content></ng-content>",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [LySlider,
        Renderer2,
        ElementRef])
], LyMark);

let LySliderModule = class LySliderModule {
};
LySliderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LyCommonModule
        ],
        declarations: [LySlider, LyMark, LyTick],
        exports: [LySlider, LyMark]
    })
], LySliderModule);

export { LY_SLIDER_CONTROL_VALUE_ACCESSOR, LySlider, LySliderChange, LySliderModule, ɵ0, LyMark as ɵa, LyTick as ɵb, гbetween, гvalueToPercent };
//# sourceMappingURL=alyle-ui-slider.js.map
