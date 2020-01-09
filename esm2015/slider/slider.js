var LySlider_1;
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, OnInit, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, OnChanges, OnDestroy, QueryList, ViewChildren, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, ThemeVariables, toBoolean, LY_COMMON_STYLES, HammerInput, toNumber, LyHostClass, untilComponentDestroyed, Dir, StyleCollection, LyClasses, StyleTemplate, st2c, ThemeRef, StyleRenderer } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
export const LY_SLIDER_DEFAULT_OPTIONS = new InjectionToken('LY_SLIDER_DEFAULT_OPTIONS');
export const LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LySlider),
    multi: true
};
const STYLE_PRIORITY = -2;
export const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    const { before } = theme;
    return {
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{display:inline-block;position:relative;box-sizing:border-box;cursor:pointer;}${st2c(((theme.slider
            && theme.slider.root
            && (theme.slider.root instanceof StyleCollection
                ? theme.slider.root.setTransformer(fn => fn(__)).css
                : theme.slider.root(__)))), `${className}`)}${st2c((LY_COMMON_STYLES.fill), `${className} ${__.bg}`)}${className} ${__.bg}{margin:auto;}${className}${__.thumbVisible} ${__.thumb},${className}:not(${__.thumbNotVisible}):not(${__.disabled}) ${__.thumbContent}:hover ${__.thumb},${className}:not(${__.thumbNotVisible}) ${__.thumbContent}${__.thumbContentFocused} ${__.thumb}{border-radius:50% 50% 0%;}${className}${__.thumbVisible} ${__.thumbContent}::before,${className}:not(${__.thumbNotVisible}):not(${__.disabled}) ${__.thumbContent}:hover::before,${className}:not(${__.thumbNotVisible}) ${__.thumbContent}${__.thumbContentFocused}::before{transform:scale(1);}`,
        track: (className) => `${className}{position:absolute;margin:auto;}`,
        bg: null,
        thumbContainer: (className) => `${className}{width:0;height:0;position:absolute;margin:auto;}`,
        thumbContent: (className) => `${className}::before{content:'';position:absolute;opacity:.6;transform:scale(0);transition:transform ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms, background ${theme.animations.durations.complex}ms ${theme.animations.curves.sharp} 0ms;}`,
        thumb: (className) => `${className}{position:absolute;width:12px;height:12px;left:-6px;top:-6px;border-radius:50%;outline:0;transition:${['border-radius'].map(prop => `${prop} ${theme.animations.durations.exiting}ms ${theme.animations.curves.standard} 0ms`).join()};}${className}::before{content:'';border-radius:50%;transition:${['box-shadow'].map(prop => `${prop} ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms`).join()};}${st2c((LY_COMMON_STYLES.fill), `${className}::before`)}`,
        thumbLabel: (className) => `${className}{position:absolute;width:28px;height:28px;border-radius:50%;top:-14px;${before}:-14px;transition:${['transform', 'top', 'left', 'right', 'border-radius'].map(prop => `${prop} ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms`).join()};}`,
        thumbLabelValue: (className) => `${className}{display:flex;height:100%;width:100%;align-items:center;justify-content:center;font-size:12px;color:#fff;}`,
        horizontal: () => (className) => `${className}{width:120px;height:2px;padding:10px 0;touch-action:pan-y !important;}${className} ${__.track},${className} ${__.bg}{height:2px;width:100%;}${className} ${__.track}{${before}:0;top:0;bottom:0;}${className} ${__.thumb}{transform:rotateZ(-135deg);}${className} ${__.thumbLabel}{transform:rotateZ(45deg) scale(0);}${className}${__.thumbVisible} ${__.thumbLabel},${className}:not(${__.disabled}) ${__.thumbContent}:hover ${__.thumbLabel},${className} ${__.thumbContent}${__.thumbContentFocused} ${__.thumbLabel}{border-radius:50% 50% 0%;top:-50px;transform:rotateZ(45deg) scale(1);}${className} ${__.thumbLabelValue}{transform:rotateZ(-45deg);}${className} ${__.thumbContainer}{top:0;bottom:0;}${className} ${__.thumbContent}::before{width:2px;height:24px;left:-1px;top:-24px;}${className} ${__.tick}{width:2px;height:inherit;top:0;bottom:0;}${className} ${__.mark}{top:22px;transform:translateX(${theme.direction === Dir.ltr ? '-' : ''}50%);}${className}${__.marked}{margin-bottom:24px;}`,
        vertical: () => (className) => `${className}{width:2px;height:120px;padding:0 10px;touch-action:pan-x !important;}${className} ${__.track},${className} ${__.bg}{height:100%;width:2px;}${className} ${__.track}{bottom:0;left:0;right:0;}${className} ${__.thumb}{transform:${theme.direction === Dir.ltr ? 'rotateZ(135deg)' : 'rotateZ(-45deg)'};}${className} ${__.thumbLabel}{transform:rotateZ(-45deg) scale(0);}${className}${__.thumbVisible} ${__.thumbLabel},${className}:not(${__.disabled}) ${__.thumbContent}:hover ${__.thumbLabel},${className} ${__.thumbContent}${__.thumbContentFocused} ${__.thumbLabel}{border-radius:${theme.direction === Dir.ltr ? '50% 50% 0%' : '0 50% 50% 50%'};before:-50px;transform:rotateZ(-45deg) scale(1);}${className} ${__.thumbLabelValue}{transform:rotateZ(45deg);}${className} ${__.thumbContainer}{left:0;right:0;}${className} ${__.thumbContent}::before{width:24px;height:2px;before:-24px;top:-1px;}${className} ${__.tick}{width:inherit;height:2px;left:0;right:0;}${className} ${__.mark}{${before}:22px;transform:translateY(50%);}${className}${__.marked}{${theme.direction === Dir.ltr ? 'margin-right' : 'margin-left'}:24px;}`,
        marked: null,
        mark: (className) => `${className}{position:absolute;white-space:nowrap;font-size:14px;color:${theme.text.secondary};}`,
        markActive: (className) => `${className}{color:currentColor;}`,
        tick: (className) => `${className}{position:absolute;margin:auto;}`,
        tickActive: null,
        thumbVisible: null,
        thumbNotVisible: null,
        thumbContentFocused: null,
        sliding: null,
        disabled: (className) => `${className}{cursor:default;}`
    };
};
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
    constructor(_theme, _el, _renderer, _cd, _hostClass, _sr, _default) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._hostClass = _hostClass;
        this._sr = _sr;
        this._default = _default;
        this.classes = this._theme.renderStyleSheet(STYLES);
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
            this._appearanceClass = this._sr.add(`${LySlider_1.и}.appearance:${val}`, (theme, ref) => {
                const classes = ref.selectorsOf(STYLES);
                if (theme.slider && theme.slider.appearance) {
                    const appearance = theme.slider.appearance[val];
                    if (appearance) {
                        return appearance instanceof StyleCollection
                            ? appearance.setTransformer((_) => _(classes)).css
                            : appearance(classes);
                    }
                }
                throw new Error(`${val} not found in theme.slider.appearance`);
            }, STYLE_PRIORITY, this._appearanceClass);
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
        const styleKey = `${LySlider_1.и}.color:${val}`;
        const newStyle = (theme, ref) => {
            const color = theme.colorOf(val);
            const __ = ref.selectorsOf(STYLES);
            if (theme.slider && theme.slider.color) {
                const sliderColor = theme.slider.color;
                if (sliderColor) {
                    return sliderColor instanceof StyleCollection
                        ? (sliderColor).setTransformer((_) => _(__, color)).css
                        : sliderColor(__, color);
                }
            }
            throw new Error(`${val} not found in theme.slider.color`);
        };
        this._colorClass = this._sr.add(styleKey, newStyle, STYLE_PRIORITY + 1, this._colorClass);
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
                const color = this.color;
                const styleKey = `${LySlider_1.и}.disabled:${val}-${color}`;
                let newStyle;
                newStyle = (theme, ref) => {
                    const clr = theme.colorOf(color);
                    const __ = ref.selectorsOf(STYLES);
                    if (theme.slider && theme.slider.disabled) {
                        const sliderColor = theme.slider.disabled;
                        if (sliderColor) {
                            return sliderColor instanceof StyleCollection
                                ? (sliderColor).setTransformer((_) => _(__, clr)).css
                                : sliderColor(__, clr);
                        }
                    }
                    throw new Error(`${val} not found in theme.slider.color`);
                };
                const newClass = this._sr.add(styleKey, newStyle, STYLE_PRIORITY + 1.5, this._disabledClass);
                this._hostClass.add(this.classes.disabled);
                this._disabledClass = newClass;
            }
            else if (this._disabledClass) {
                this._hostClass.remove(this._disabledClass);
                this._hostClass.remove(this.classes.disabled);
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
            this.appearance = (this._default && this._default.appearance) || 'standard';
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
        this._emitInputEvent();
        this._changes.next();
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
        if (currentSlidingThumb) {
            currentSlidingThumb.focused = true;
            this._thumbsRef.toArray()[currentSlidingThumb.index].nativeElement.focus();
        }
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
LySlider.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyHostClass },
    { type: StyleRenderer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_SLIDER_DEFAULT_OPTIONS,] }] }
];
tslib_1.__decorate([
    ViewChild('bg', { static: false })
], LySlider.prototype, "_bg", void 0);
tslib_1.__decorate([
    ViewChild('track', { static: true })
], LySlider.prototype, "_track", void 0);
tslib_1.__decorate([
    ViewChild('ticksRef', { static: true })
], LySlider.prototype, "_ticksRef", void 0);
tslib_1.__decorate([
    ViewChildren('thumbsRef')
], LySlider.prototype, "_thumbsRef", void 0);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "displayWith", void 0);
tslib_1.__decorate([
    Output()
], LySlider.prototype, "change", void 0);
tslib_1.__decorate([
    Output()
], LySlider.prototype, "input", void 0);
tslib_1.__decorate([
    Output()
], LySlider.prototype, "valueChange", void 0);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "thumbVisible", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "marks", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "max", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "min", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "appearance", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "color", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "vertical", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "step", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "value", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], LySlider.prototype, "ticks", null);
LySlider = LySlider_1 = tslib_1.__decorate([
    Component({
        selector: 'ly-slider',
        template: "<div #bg [className]=\"classes.bg\"></div>\n<div #track [className]=\"classes.track\"></div>\n<ng-template [ngIf]=\"ticks\">\n  <ly-tick *ngFor=\"let tick of _tickList\" [value]=\"tick\"></ly-tick>\n</ng-template>\n<span #ticksRef></span>\n<ng-template [ngIf]=\"marks\">\n  <ng-content select=\"ly-mark\"></ng-content>\n</ng-template>\n<ng-template [ngIf]=\"_marksList\">\n  <ly-mark *ngFor=\"let mark of _marksList\" [value]=\"mark.value\">{{ mark.label }}</ly-mark>\n</ng-template>\n<div\n  *ngFor=\"let thumb of _thumbs; trackBy: _trackByFn\"\n  [className]=\"classes.thumbContainer\"\n  [ngStyle]=\"thumb.styles\"\n>\n  <div\n    [className]=\"classes.thumbContent\"\n    [ngClass]=\"thumb.focused ? classes.thumbContentFocused : null\"\n  >\n    <div\n      #thumbsRef\n      (focus)=\"_onFocus(thumb)\"\n      (blur)=\"_onBlur(thumb)\"\n      [attr.tabindex]=\"disabled ? -1 : 0\"\n      [className]=\"classes.thumb\"\n    ></div>\n    <div [className]=\"classes.thumbLabel\" *ngIf=\"thumbVisible !== false\">\n      <span [className]=\"classes.thumbLabelValue\">{{ thumb.displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'lySlider',
        providers: [
            LY_SLIDER_CONTROL_VALUE_ACCESSOR,
            LyHostClass,
            StyleRenderer
        ],
        host: {
            '(slide)': '_onSlide($event)',
            '(slideend)': '_onSlideEnd()',
            '(tap)': '_onTap($event)'
        }
    }),
    tslib_1.__param(6, Optional()), tslib_1.__param(6, Inject(LY_SLIDER_DEFAULT_OPTIONS))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixHQUFHLEVBQ0gsZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IsSUFBSSxFQUNKLFFBQVEsRUFDUixhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFzQi9CLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUNsQyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQztBQU01RSxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXlDLEVBQUUsR0FB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QUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUFXLEVBQUUsTUFBVztJQUMzQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1dBQ25GLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQXdDLEVBQUUsTUFBeUM7SUFDdEcsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUNwRCxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBUyxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQzFELE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0LFxuICBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgSGFtbWVySW5wdXQsXG4gIHRvTnVtYmVyLFxuICBMeUhvc3RDbGFzcyxcbiAgdW50aWxDb21wb25lbnREZXN0cm95ZWQsXG4gIERpcixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0MmMsXG4gIFRoZW1lUmVmLFxuICBTdHlsZVJlbmRlcmVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgU2xpZGVyIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgZGlzYWJsZWQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGNvbG9yPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGUpO1xuICBhcHBlYXJhbmNlPzoge1xuICAgIHN0YW5kYXJkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpIHwgdW5kZWZpbmVkO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyRGVmYXVsdE9wdGlvbnMge1xuICBhcHBlYXJhbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTFlfU0xJREVSX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEx5U2xpZGVyRGVmYXVsdE9wdGlvbnM+KCdMWV9TTElERVJfREVGQVVMVF9PUFRJT05TJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJWYXJpYWJsZXMge1xuICBzbGlkZXI/OiBMeVNsaWRlclRoZW1lO1xufVxuXG5leHBvcnQgY29uc3QgTFlfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeVNsaWRlciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCB7IGJlZm9yZSB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2N1cnNvcjpwb2ludGVyO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5zbGlkZXJcbiAgICAgICAgICAgICYmIHRoZW1lLnNsaWRlci5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuc2xpZGVyLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5zbGlkZXIucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihfXykpLmNzc1xuICAgICAgICAgICAgICA6IHRoZW1lLnNsaWRlci5yb290KF9fKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfSAke19fLmJnfWApfSR7Y2xhc3NOYW1lfSAke19fLmJnfXttYXJnaW46YXV0bzt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJ9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy50aHVtYk5vdFZpc2libGV9KTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3ZlciAke19fLnRodW1ifSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSkgJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1ifXtib3JkZXItcmFkaXVzOjUwJSA1MCUgMCU7fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1iQ29udGVudH06OmJlZm9yZSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSk6bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXI6OmJlZm9yZSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSkgJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfTo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSgxKTt9YCxcblxuICAgIHRyYWNrOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87fWAsXG4gICAgYmc6IG51bGwsXG4gICAgdGh1bWJDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjphdXRvO31gLFxuICAgIHRodW1iQ29udGVudDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5Oi42O3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtcywgYmFja2dyb3VuZCAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zO31gLFxuICAgIHRodW1iOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtsZWZ0Oi02cHg7dG9wOi02cHg7Ym9yZGVyLXJhZGl1czo1MCU7b3V0bGluZTowO3RyYW5zaXRpb246JHtbJ2JvcmRlci1yYWRpdXMnXS5tYXAocHJvcCA9PiBgJHtwcm9wfSAke1xuICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5leGl0aW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMG1zYCkuam9pbigpfTt9JHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOiR7Wydib3gtc2hhZG93J10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICAgICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYCkuam9pbigpfTt9JHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjpiZWZvcmVgKX1gLFxuICAgIHRodW1iTGFiZWw6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JvcmRlci1yYWRpdXM6NTAlO3RvcDotMTRweDske2JlZm9yZX06LTE0cHg7dHJhbnNpdGlvbjoke1sndHJhbnNmb3JtJywgJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvcmRlci1yYWRpdXMnXS5tYXAocHJvcCA9PiBgJHtwcm9wfSAke1xuICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICAgICAgfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtc2ApLmpvaW4oKX07fWAsXG4gICAgdGh1bWJMYWJlbFZhbHVlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Zm9udC1zaXplOjEycHg7Y29sb3I6I2ZmZjt9YCxcblxuICAgIGhvcml6b250YWw6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDoxMjBweDtoZWlnaHQ6MnB4O3BhZGRpbmc6MTBweCAwO3RvdWNoLWFjdGlvbjpwYW4teSAhaW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtfXy50cmFja30sJHtjbGFzc05hbWV9ICR7X18uYmd9e2hlaWdodDoycHg7d2lkdGg6MTAwJTt9JHtjbGFzc05hbWV9ICR7X18udHJhY2t9eyR7YmVmb3JlfTowO3RvcDowO2JvdHRvbTowO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYn17dHJhbnNmb3JtOnJvdGF0ZVooLTEzNWRlZyk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iTGFiZWx9e3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKSBzY2FsZSgwKTt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJMYWJlbH0sJHtjbGFzc05hbWV9Om5vdCgke19fLmRpc2FibGVkfSkgJHtfXy50aHVtYkNvbnRlbnR9OmhvdmVyICR7X18udGh1bWJMYWJlbH0sJHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fSR7X18udGh1bWJDb250ZW50Rm9jdXNlZH0gJHtfXy50aHVtYkxhYmVsfXtib3JkZXItcmFkaXVzOjUwJSA1MCUgMCU7dG9wOi01MHB4O3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKSBzY2FsZSgxKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbFZhbHVlfXt0cmFuc2Zvcm06cm90YXRlWigtNDVkZWcpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRhaW5lcn17dG9wOjA7Ym90dG9tOjA7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGVudH06OmJlZm9yZXt3aWR0aDoycHg7aGVpZ2h0OjI0cHg7bGVmdDotMXB4O3RvcDotMjRweDt9JHtjbGFzc05hbWV9ICR7X18udGlja317d2lkdGg6MnB4O2hlaWdodDppbmhlcml0O3RvcDowO2JvdHRvbTowO30ke2NsYXNzTmFtZX0gJHtfXy5tYXJrfXt0b3A6MjJweDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgke3RoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICctJyA6ICcnfTUwJSk7fSR7Y2xhc3NOYW1lfSR7X18ubWFya2VkfXttYXJnaW4tYm90dG9tOjI0cHg7fWAsXG4gICAgdmVydGljYWw6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDoycHg7aGVpZ2h0OjEyMHB4O3BhZGRpbmc6MCAxMHB4O3RvdWNoLWFjdGlvbjpwYW4teCAhaW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtfXy50cmFja30sJHtjbGFzc05hbWV9ICR7X18uYmd9e2hlaWdodDoxMDAlO3dpZHRoOjJweDt9JHtjbGFzc05hbWV9ICR7X18udHJhY2t9e2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYn17dHJhbnNmb3JtOiR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJ3JvdGF0ZVooMTM1ZGVnKScgOiAncm90YXRlWigtNDVkZWcpJ307fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iTGFiZWx9e3RyYW5zZm9ybTpyb3RhdGVaKC00NWRlZykgc2NhbGUoMCk7fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1iTGFiZWx9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3ZlciAke19fLnRodW1iTGFiZWx9LCR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGVudH0ke19fLnRodW1iQ29udGVudEZvY3VzZWR9ICR7X18udGh1bWJMYWJlbH17Ym9yZGVyLXJhZGl1czoke3RoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICc1MCUgNTAlIDAlJyA6ICcwIDUwJSA1MCUgNTAlJ307YmVmb3JlOi01MHB4O3RyYW5zZm9ybTpyb3RhdGVaKC00NWRlZykgc2NhbGUoMSk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iTGFiZWxWYWx1ZX17dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRhaW5lcn17bGVmdDowO3JpZ2h0OjA7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGVudH06OmJlZm9yZXt3aWR0aDoyNHB4O2hlaWdodDoycHg7YmVmb3JlOi0yNHB4O3RvcDotMXB4O30ke2NsYXNzTmFtZX0gJHtfXy50aWNrfXt3aWR0aDppbmhlcml0O2hlaWdodDoycHg7bGVmdDowO3JpZ2h0OjA7fSR7Y2xhc3NOYW1lfSAke19fLm1hcmt9eyR7YmVmb3JlfToyMnB4O3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSk7fSR7Y2xhc3NOYW1lfSR7X18ubWFya2VkfXske3RoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi1sZWZ0J306MjRweDt9YCxcblxuICAgIG1hcmtlZDogbnVsbCxcbiAgICBtYXJrOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiR7dGhlbWUudGV4dC5zZWNvbmRhcnl9O31gLFxuICAgIG1hcmtBY3RpdmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjb2xvcjpjdXJyZW50Q29sb3I7fWAsXG4gICAgdGljazogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjphdXRvO31gLFxuICAgIHRpY2tBY3RpdmU6IG51bGwsXG5cbiAgICB0aHVtYlZpc2libGU6IG51bGwsXG4gICAgdGh1bWJOb3RWaXNpYmxlOiBudWxsLFxuICAgIHRodW1iQ29udGVudEZvY3VzZWQ6IG51bGwsXG4gICAgc2xpZGluZzogbnVsbCxcbiAgICBkaXNhYmxlZDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2N1cnNvcjpkZWZhdWx0O31gXG4gIH07XG59O1xuXG4vKiogQSBjaGFuZ2UgZXZlbnQgZW1pdHRlZCBieSB0aGUgTHlTbGlkZXIgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNsYXNzIEx5U2xpZGVyQ2hhbmdlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBUaGUgTHlTbGlkZXIgdGhhdCBjaGFuZ2VkLiAqL1xuICAgIHB1YmxpYyBzb3VyY2U6IEx5U2xpZGVyLFxuICAgIC8qKiBUaGUgbmV3IHZhbHVlIG9mIHRoZSBzb3VyY2Ugc2xpZGVyLiAqL1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsLFxuICApIHsgfVxufVxuXG5pbnRlcmZhY2UgVGh1bWIge1xuICB2YWx1ZTogbnVtYmVyO1xuICBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIHBlcmNlbnQ6IG51bWJlciB8IG51bGw7XG4gIHN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgZm9jdXNlZD86IGJvb2xlYW47XG4gIHNsaWRpbmc/OiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyTWFyayB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGxhYmVsOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseVNsaWRlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIExZX1NMSURFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLFxuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXSxcbiAgaG9zdDoge1xuICAgICcoc2xpZGUpJzogJ19vblNsaWRlKCRldmVudCknLFxuICAgICcoc2xpZGVlbmQpJzogJ19vblNsaWRlRW5kKCknLFxuICAgICcodGFwKSc6ICdfb25UYXAoJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeVNsaWRlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgc3RhdGljINC4ID0gJ0x5U2xpZGVyJztcbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcblxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWRDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3ZlcnRpY2FsOiBib29sZWFuO1xuICBwcml2YXRlIF92ZXJ0aWNhbENsYXNzPzogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90aHVtYnNPblNsaWRlU3RhcnQ6IFRodW1iW10gfCBudWxsO1xuICBwcml2YXRlIF92YWx1ZU9uU2xpZGVTdGFydDogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsO1xuXG4gIHByaXZhdGUgX21pbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbWF4OiBudW1iZXIgPSAxMDA7XG5cbiAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfc3RlcFByZWNpc2lvbj86IG51bWJlciB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfY2xvc2VzdEluZGV4OiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9jdXJyZW50UmVjdDogRE9NUmVjdCB8IG51bGw7XG5cbiAgX2NoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBNaW4gcGVyY2VudGFnZSwgdGhpcyBpcyBmb3IgbWFyay4gKi9cbiAgX21pblBlcmNlbnQ6IG51bWJlcjtcbiAgLyoqIE1heCBwZXJjZW50YWdlLCB0aGlzIGlzIGZvciBtYXJrLiAqL1xuICBfbWF4UGVyY2VudDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGh1bWIgaXMgc2xpZGluZy5cbiAgICovXG4gIF9pc1NsaWRpbmc6IGJvb2xlYW47XG4gIF9zbGlkaW5nVGh1bWJWYWx1ZT86IG51bWJlciB8IG51bGw7XG5cbiAgX3RodW1iczogVGh1bWJbXSA9IFtdO1xuXG4gIF9yb290Q2xhc3NlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2JnJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9iZz86IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd0cmFjaycsIHsgc3RhdGljOiB0cnVlIH0pIF90cmFjazogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3RpY2tzUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgX3RpY2tzUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZHJlbigndGh1bWJzUmVmJykgX3RodW1ic1JlZj86IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50Pj47XG5cbiAgQElucHV0KCkgZGlzcGxheVdpdGg6ICh2YWx1ZTogbnVtYmVyIHwgbnVsbCkgPT4gc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBoYXMgY2hhbmdlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2xpZGVyIHRodW1iIG1vdmVzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5wdXQ6IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPigpO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbD4oKTtcblxuICAvKipcbiAgICogVGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBibHVyIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgdGh1bWIuICovXG4gIEBJbnB1dCgpXG4gIGdldCB0aHVtYlZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iVmlzaWJsZTtcbiAgfVxuICBzZXQgdGh1bWJWaXNpYmxlKHZhbDogYm9vbGVhbiB8IG51bGwpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB2YWwgIT0gbnVsbCA/IHRvQm9vbGVhbih2YWwpIDogbnVsbDtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMudGh1bWJWaXNpYmxlKSB7XG5cbiAgICAgIGNvbnN0IHsgdGh1bWJWaXNpYmxlOiB0aHVtYlZpc2libGVDbGFzcyB9ID0gdGhpcy5jbGFzc2VzO1xuICAgICAgY29uc3QgeyB0aHVtYk5vdFZpc2libGU6IHRodW1iTm90VmlzaWJsZUNsYXNzIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgICB0aGlzLl90aHVtYlZpc2libGUgPSBuZXdWYWw7XG5cbiAgICAgIHRoaXMuX2hvc3RDbGFzcy50b2dnbGUodGh1bWJWaXNpYmxlQ2xhc3MsIG5ld1ZhbCA9PT0gdHJ1ZSk7XG4gICAgICB0aGlzLl9ob3N0Q2xhc3MudG9nZ2xlKHRodW1iTm90VmlzaWJsZUNsYXNzLCBuZXdWYWwgPT09IGZhbHNlKTtcblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RodW1iVmlzaWJsZTogYm9vbGVhbiB8IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIG1hcmtzLCBhbHNvIGFjY2VwdHMgYW4gYXJyYXkgb2YgbWFya3MuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXJrcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3M7XG4gIH1cbiAgc2V0IG1hcmtzKHZhbDogYm9vbGVhbiB8IEx5U2xpZGVyTWFya1tdKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLm1hcmtzKSB7XG5cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jbGFzc2VzLm1hcmtlZDtcblxuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgICAgIHRoaXMuX21hcmtzQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgICAgdGhpcy5fbWFya3MgPSBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBuZXdWYWw7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX21hcmtzQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5fbWFya3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgICAgICB0aGlzLl9tYXJrc0NsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1ZhbCkpIHtcbiAgICAgICAgdGhpcy5fbWFya3NMaXN0ID0gdmFsIGFzIEx5U2xpZGVyTWFya1tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya3NMaXN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtzOiBib29sZWFuIHwgTHlTbGlkZXJNYXJrW107XG4gIHByaXZhdGUgX21hcmtzQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIF9tYXJrc0xpc3Q/OiBMeVNsaWRlck1hcmtbXSB8IG51bGw7XG5cbiAgLyoqIFRoZSBtYXhpbXVtIHZhbHVlIHRoYXQgdGhlIHNsaWRlciBjYW4gaGF2ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbiAgc2V0IG1heCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB0b051bWJlcih2LCB0aGlzLl9tYXgpO1xuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIG1pbmltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuICBzZXQgbWluKHY6IG51bWJlcikge1xuICAgIHRoaXMuX21pbiA9IHRvTnVtYmVyKHYsIHRoaXMuX21pbik7XG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgd2Fzbid0IGV4cGxpY2l0bHkgc2V0IGJ5IHRoZSB1c2VyLCBzZXQgaXQgdG8gdGhlIG1pbi5cbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl9taW47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIHNsaWRlciBhcHBlYXJhbmNlIHN0eWxlLiAqL1xuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3NyLmFkZChcbiAgICAgICAgYCR7THlTbGlkZXIu0Lh9LmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgaWYgKHRoZW1lLnNsaWRlciAmJiB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IHRoZW1lLnNsaWRlci5hcHBlYXJhbmNlW3ZhbF07XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gYXBwZWFyYW5jZSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgID8gYXBwZWFyYW5jZS5zZXRUcmFuc2Zvcm1lcigoXykgPT4gXyhjbGFzc2VzKSkuY3NzXG4gICAgICAgICAgICAgICAgOiBhcHBlYXJhbmNlKGNsYXNzZXMsICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZWApO1xuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgLyoqIENvbG9yIG9mIFNsaWRlciAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgY29uc3Qgc3R5bGVLZXkgPSBgJHtMeVNsaWRlci7QuH0uY29sb3I6JHt2YWx9YDtcblxuICAgIGNvbnN0IG5ld1N0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgIGNvbnN0IF9fID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG5cbiAgICAgIGlmICh0aGVtZS5zbGlkZXIgJiYgdGhlbWUuc2xpZGVyLmNvbG9yKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlckNvbG9yID0gdGhlbWUuc2xpZGVyLmNvbG9yO1xuICAgICAgICBpZiAoc2xpZGVyQ29sb3IpIHtcbiAgICAgICAgICByZXR1cm4gc2xpZGVyQ29sb3IgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgID8gKHNsaWRlckNvbG9yKS5zZXRUcmFuc2Zvcm1lcigoXykgPT4gXyhfXywgY29sb3IpKS5jc3NcbiAgICAgICAgICAgIDogc2xpZGVyQ29sb3IoX18sIGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLnNsaWRlci5jb2xvcmApO1xuICAgIH07XG4gICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3NyLmFkZChcbiAgICAgIHN0eWxlS2V5LFxuICAgICAgbmV3U3R5bGUsXG4gICAgICBTVFlMRV9QUklPUklUWSArIDEsXG4gICAgICB0aGlzLl9jb2xvckNsYXNzXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBzbGlkZXIgaXMgdmVydGljYWwuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgc2V0IHZlcnRpY2FsKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gbmV3VmFsO1xuXG4gICAgY29uc3QgbmV3Q2xhc3MgPSBuZXdWYWxcbiAgICAgID8gdGhpcy5jbGFzc2VzLnZlcnRpY2FsXG4gICAgICA6IHRoaXMuY2xhc3Nlcy5ob3Jpem9udGFsO1xuXG4gICAgdGhpcy5fdmVydGljYWxDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3JlbmRlcmVyLFxuICAgICAgbmV3Q2xhc3MsXG4gICAgICB0aGlzLl92ZXJ0aWNhbENsYXNzIGFzIGFueSk7XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmFsdWVzIGF0IHdoaWNoIHRoZSB0aHVtYiB3aWxsIHNuYXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zdGVwOyB9XG4gIHNldCBzdGVwKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSB0b051bWJlcih2LCB0aGlzLl9zdGVwKTtcblxuICAgIHRoaXMuX3N0ZXBQcmVjaXNpb24gPSB0aGlzLl9zdGVwICUgMSAhPT0gMFxuICAgICAgPyB0aGlzLl9zdGVwLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGhcbiAgICAgIDogbnVsbDtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbHVlIG9mIGEgc2xpZGVyLCB0aGlzIGNhbiBiZSBhIG51bWJlciBvciBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgKiBJZiB0aGUgYXJyYXkgb2YgbnVtYmVycyBoYXMgbW9yZSB0aGFuIG9uZSB2YWx1ZSxcbiAgICogdGhlbiB0aGlzIHdpbGwgY3JlYXRlIG1vcmUgdGh1bWJzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWw6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICBjb25zdCB2YWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gTnVtYmVyKHZhbCk7XG4gICAgICAgIG5ld1ZhbHVlID0gcGFyc2VGbG9hdChuZXdWYWx1ZS50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24gYXMgbnVtYmVyKSk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlSXNBcnJheSAmJiAhYXJyYXlFcXVhbHModGhpcy5fdmFsdWUsIHZhbCkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsIGFzIG51bWJlcltdO1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLm1hcChcbiAgICAgICAgICBfdmFsID0+IF92YWwgPT09IG51bGxcbiAgICAgICAgICA/IF92YWxcbiAgICAgICAgICA6IHBhcnNlRmxvYXQoX3ZhbC50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24gYXMgbnVtYmVyKSkpO1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLl90aHVtYnMgPSAodmFsdWVJc0FycmF5ID9cbiAgICAgICAgdGhpcy5fdmFsdWUgYXMgKG51bWJlciB8IG51bGwpW11cbiAgICAgICAgOiBbdGhpcy5fdmFsdWUgYXMgbnVtYmVyIHwgbnVsbF0pLm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IHRvTnVtYmVyKHYsIHRoaXMubWluKSxcbiAgICAgICAgICBkaXNwbGF5VmFsdWU6IG51bGwsXG4gICAgICAgICAgcGVyY2VudDogbnVsbCxcbiAgICAgICAgICBzdHlsZXM6IHt9XG4gICAgICAgIH0pKTtcblxuICAgICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBzbGlkZXIgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY29uc3Qgc3R5bGVLZXkgPSBgJHtMeVNsaWRlci7QuH0uZGlzYWJsZWQ6JHt2YWx9LSR7Y29sb3J9YDtcbiAgICAgICAgbGV0IG5ld1N0eWxlOiAoKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgICAgICAgbmV3U3R5bGUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjbHIgPSB0aGVtZS5jb2xvck9mKGNvbG9yKTtcbiAgICAgICAgICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuXG4gICAgICAgICAgaWYgKHRoZW1lLnNsaWRlciAmJiB0aGVtZS5zbGlkZXIuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckNvbG9yID0gdGhlbWUuc2xpZGVyLmRpc2FibGVkO1xuICAgICAgICAgICAgaWYgKHNsaWRlckNvbG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzbGlkZXJDb2xvciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgID8gKHNsaWRlckNvbG9yKS5zZXRUcmFuc2Zvcm1lcigoXykgPT4gXyhfXywgY2xyKSkuY3NzXG4gICAgICAgICAgICAgICAgOiBzbGlkZXJDb2xvcihfXywgY2xyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLnNsaWRlci5jb2xvcmApO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3NyLmFkZChcbiAgICAgICAgICBzdHlsZUtleSxcbiAgICAgICAgICBuZXdTdHlsZSxcbiAgICAgICAgICBTVFlMRV9QUklPUklUWSArIDEuNSxcbiAgICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2hvc3RDbGFzcy5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kaXNhYmxlZENsYXNzKSB7XG4gICAgICAgIHRoaXMuX2hvc3RDbGFzcy5yZW1vdmUodGhpcy5fZGlzYWJsZWRDbGFzcyk7XG4gICAgICAgIHRoaXMuX2hvc3RDbGFzcy5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHRodW1iIGxhYmVsLCBidXQgaWYgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLFxuICAgKiBpdCB3aWxsIHNob3cgdGlja3MgYWNjb3JkaW5nIHRvIHRoZSBzdGVwcy4gRm9yIGV4YW1wbGU6IGlmIHlvdSBzZXRcbiAgICogMyB0aWNrcyB3aXRoIGEgc3RlcCBvZiAxMCwgeW91IHdpbGwgZHJhdyBhIHRpY2sgZXZlcnkgMzAgdmFsdWVzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdGlja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpY2tzO1xuICB9XG4gIHNldCB0aWNrcyh2YWw6IG51bWJlciB8IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRvTnVtYmVyKHZhbCwgdG9Cb29sZWFuKHZhbCkpO1xuICAgIHRoaXMuX3RpY2tzID0gbmV3VmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGlja3M6IG51bWJlciB8IGJvb2xlYW47XG4gIF90aWNrSW50ZXJ2YWw6IG51bWJlcjtcbiAgZ2V0IF90aWNrTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RpY2tMaXN0O1xuICB9XG4gIHByaXZhdGUgX190aWNrTGlzdDogbnVtYmVyW107XG4gIC8vIHByaXZhdGUgX25nQ2xhc3M6IE5nQ2xhc3M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9ob3N0Q2xhc3M6IEx5SG9zdENsYXNzLFxuICAgIHByaXZhdGUgX3NyOiBTdHlsZVJlbmRlcmVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfU0xJREVSX0RFRkFVTFRfT1BUSU9OUykgcHJpdmF0ZSBfZGVmYXVsdDogTHlTbGlkZXJEZWZhdWx0T3B0aW9uc1xuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3VwZGF0ZVRpY2tWYWx1ZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5fdGhlbWUuZGlyZWN0aW9uQ2hhbmdlZC5waXBlKHVudGlsQ29tcG9uZW50RGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBhcHBlYXJhbmNlICovXG4gICAgaWYgKHRoaXMuYXBwZWFyYW5jZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSAodGhpcy5fZGVmYXVsdCAmJiB0aGlzLl9kZWZhdWx0LmFwcGVhcmFuY2UpIHx8ICdzdGFuZGFyZCc7XG4gICAgfVxuXG4gICAgLyoqIFNldCBob3Jpem9udGFsIHNsaWRlciAqL1xuICAgIGlmICh0aGlzLnZlcnRpY2FsID09IG51bGwpIHtcbiAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgY29sb3IgKi9cbiAgICBpZiAodGhpcy5jb2xvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2FjY2VudCc7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IHN0ZXAgKi9cbiAgICBpZiAodGhpcy5zdGVwID09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fY2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHNlbGVjdC4gUGFydCBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHJlcXVpcmVkXG4gICAqIHRvIGludGVncmF0ZSB3aXRoIEFuZ3VsYXIncyBjb3JlIGZvcm1zIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgU2V0cyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIF9vbkZvY3VzKHRodW1iOiBUaHVtYikge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGh1bWIuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX29uQmx1cih0aHVtYjogVGh1bWIpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfb25UYXAoZXZlbnQ6IEhhbW1lcklucHV0KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhcnRTbGlkZSgpO1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKGV2ZW50LmNlbnRlci54LCBldmVudC5jZW50ZXIueSk7XG4gICAgdGhpcy5fb25TbGlkZUVuZCgpO1xuICB9XG5cbiAgX29uU2xpZGUoZXZlbnQ6IEhhbW1lcklucHV0KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNsaWRlKCk7XG5cbiAgICBpZiAoZXZlbnRbJ2lzRmluYWwnXSkge1xuICAgICAgaWYgKGV2ZW50Wydwb2ludGVyVHlwZSddID09PSAndG91Y2gnICYmIGV2ZW50LmNlbnRlci54ID09PSAwICYmIGV2ZW50LmNlbnRlci55ID09PSAwKSB7XG4gICAgICAgIC8vIHJlc3RvcmUgdG8gaW5pdGlhbCBwb3NpdGlvblxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWVPblNsaWRlU3RhcnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb25TbGlkZUVuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgIH1cblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuX2VtaXRJbnB1dEV2ZW50KCk7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zdGFydFNsaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRpbmcpO1xuXG4gICAgICAvLyBjbG9uZVxuICAgICAgdGhpcy5fdmFsdWVPblNsaWRlU3RhcnQgPSBBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZS5zbGljZSgwKSA6IHRoaXMudmFsdWU7XG5cbiAgICAgIHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCA9IHRoaXMuX3RodW1icy5zbGljZSgwKS5tYXAodCA9PiAoey4uLnR9KSk7XG4gICAgICB0aGlzLl9jdXJyZW50UmVjdCA9IHRoaXMuX2JnIS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgfVxuICB9XG5cbiAgX29uU2xpZGVFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGluZyk7XG5cbiAgICAgIGlmICghdmFsdWVFcXVhbHModGhpcy5fdmFsdWVPblNsaWRlU3RhcnQsIHRoaXMudmFsdWUpICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCA9IG51bGw7XG4gICAgICB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCA9IG51bGw7XG4gICAgICB0aGlzLl9jbG9zZXN0SW5kZXggPSBudWxsO1xuICAgICAgdGhpcy5fY3VycmVudFJlY3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIF90cmFja0J5Rm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IFRodW1iKSB7XG4gICAgcmV0dXJuIGl0ZW0uaW5kZXg7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5fYmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3ID0gdGhpcy5fY3VycmVudFJlY3QhLndpZHRoO1xuICAgIGNvbnN0IGggPSB0aGlzLl9jdXJyZW50UmVjdCEuaGVpZ2h0O1xuICAgIHggLT0gdGhpcy5fY3VycmVudFJlY3QhLng7XG4gICAgeSAtPSB0aGlzLl9jdXJyZW50UmVjdCEueTtcblxuICAgIGxldCBwZXJjZW50ID0gY2xhbXAoXG4gICAgICB0aGlzLnZlcnRpY2FsXG4gICAgICAgID8g0LN2YWx1ZVRvUGVyY2VudCh5LCAwLCBoKVxuICAgICAgICA6INCzdmFsdWVUb1BlcmNlbnQoeCwgMCwgdyksXG4gICAgICAwLFxuICAgICAgMTAwKTtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsIHx8ICghdGhpcy52ZXJ0aWNhbCAmJiB0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSBEaXIucnRsKSkge1xuICAgICAgcGVyY2VudCA9IDEwMCAtIHBlcmNlbnQ7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlOiBudW1iZXI7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9IGVsc2UgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLl9yb3VuZFZhbHVlVG9TdGVwKHBlcmNlbnRUb1ZhbHVlKHBlcmNlbnQsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvc2VzdEluZGV4ID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Nsb3Nlc3RJbmRleCA9IGZpbmRDbG9zZXN0KHRoaXMuX3RodW1icy5tYXAodGh1bWIgPT4gdGh1bWIudmFsdWUpLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRUaHVtYiA9IHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCFbdGhpcy5fY2xvc2VzdEluZGV4XTtcbiAgICB0aGlzLl9zbGlkaW5nVGh1bWJWYWx1ZSA9IGN1cnJlbnRUaHVtYi52YWx1ZSA9IHZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0IS5tYXAodGh1bWIgPT4gdGh1bWIudmFsdWUpLnNvcnQoQVNDKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGZvY3VzIHNsaWRpbmdUaHVtYlxuICAgIGNvbnN0IGN1cnJlbnRTbGlkaW5nVGh1bWI6IFRodW1iIHwgdW5kZWZpbmVkID0gdGhpcy5fdGh1bWJzLmZpbmQodGh1bWIgPT4gdGh1bWIudmFsdWUgPT09IHZhbHVlKSE7XG4gICAgaWYgKGN1cnJlbnRTbGlkaW5nVGh1bWIpIHtcbiAgICAgIGN1cnJlbnRTbGlkaW5nVGh1bWIuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aHVtYnNSZWYhLnRvQXJyYXkoKVtjdXJyZW50U2xpZGluZ1RodW1iLmluZGV4XS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGh1bWJzKCkge1xuICAgIHRoaXMuX3RodW1icy5mb3JFYWNoKHRodW1iID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGNsYW1wKHRodW1iLnZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgY29uc3QgcGVyY2VudCA9INCzdmFsdWVUb1BlcmNlbnQodmFsLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5fY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudCk7XG4gICAgICB0aHVtYi52YWx1ZSA9IHZhbDtcbiAgICAgIHRodW1iLmRpc3BsYXlWYWx1ZSA9IHRoaXMuX3RyYW5zZm9ybVZhbHVlKHZhbCk7XG4gICAgICB0aHVtYi5wZXJjZW50ID0gcGVyY2VudDtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRodW1iLnN0eWxlcyA9IHtcbiAgICAgICAgW3Bvcy5zdHlsZV06IHBvcy52YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3VwZGF0ZVRyYWNrKCk7XG4gIH1cblxuICBfY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudDogbnVtYmVyKSB7XG4gICAgbGV0IHN0eWxlOiBzdHJpbmc7XG4gICAgY29uc3QgdmFsdWUgPSBgJHtwZXJjZW50fSVgO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHN0eWxlID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUcmFjaygpIHtcbiAgICBjb25zdCB0cmFjayA9IHRoaXMuX3RyYWNrO1xuICAgIGNvbnN0IHRodW1icyA9IHRoaXMuX3RodW1icztcbiAgICBjb25zdCB0aHVtYnNQZXJjZW50cyA9IHRodW1icy5tYXAodGh1bWIgPT4gdGh1bWIucGVyY2VudCEpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICAgIGlmICh0aHVtYnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aHVtYnNQZXJjZW50cy51bnNoaWZ0KDApO1xuICAgIH1cblxuICAgIGNvbnN0IG1pblBlcmNlbnQgPSB0aGlzLl9taW5QZXJjZW50ID0gTWF0aC5taW4oLi4udGh1bWJzUGVyY2VudHMpO1xuICAgIGNvbnN0IG1heFBlcmNlbnQgPSB0aGlzLl9tYXhQZXJjZW50ID0gTWF0aC5tYXgoLi4udGh1bWJzUGVyY2VudHMpO1xuXG4gICAgaWYgKHRyYWNrKSB7XG5cbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmlnaHQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkeyhtYXhQZXJjZW50IC0gbWluUGVyY2VudCl9JWA7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gYCR7bWluUGVyY2VudH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHttYXhQZXJjZW50IC0gbWluUGVyY2VudH0lYDtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZVtkaXJlY3Rpb25dID0gYCR7bWluUGVyY2VudH0lYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRW1pdHMgYSBjaGFuZ2UgZXZlbnQuICovXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMudmFsdWUpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KCkpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGFuIGlucHV0IGV2ZW50LiAqL1xuICBwcml2YXRlIF9lbWl0SW5wdXRFdmVudCgpIHtcbiAgICB0aGlzLmlucHV0LmVtaXQodGhpcy5fY3JlYXRlQ2hhbmdlRXZlbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDaGFuZ2VFdmVudCh2YWx1ZSA9IHRoaXMudmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEx5U2xpZGVyQ2hhbmdlKHRoaXMsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JvdW5kVmFsdWVUb1N0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBOdW1iZXIoKE1hdGgucm91bmQodmFsdWUgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwKS50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24hKSk7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2Zvcm1WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVdpdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlXaXRoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGlja1ZhbHVlcygpIHtcbiAgICB0aGlzLl9fdGlja0xpc3QgPSBbXTtcbiAgICBpZiAoIXRoaXMudGlja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGlja3MgPSB0aGlzLnRpY2tzO1xuICAgICAgdGhpcy5fdGlja0ludGVydmFsID0gdHlwZW9mIHRpY2tzID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHRoaXMuc3RlcCAqIHRpY2tzXG4gICAgICAgIDogdGhpcy5zdGVwO1xuXG4gICAgICB0aGlzLl9fdGlja0xpc3QgPSBbXTtcbiAgICAgIGNvbnN0IHRpY2tJbnRlcnZhbHMgPSB0aGlzLl90aWNrSW50ZXJ2YWwgKyAxO1xuICAgICAgY29uc3Qgc3RlcFdpdGggPSB0aGlzLl90aWNrSW50ZXJ2YWw7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlja0ludGVydmFsczsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLl9fdGlja0xpc3QucHVzaChjbGFtcChpbmRleCAqIHN0ZXBXaXRoLCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdCh2YWx1ZXM6IG51bWJlcltdLCBjdXJyZW50VmFsdWU6IG51bWJlcikge1xuICBjb25zdCB7IGluZGV4OiBjbG9zZXN0SW5kZXggfSA9IHZhbHVlcy5yZWR1Y2U8e1xuICAgIGRpc3RhbmNlOiBudW1iZXJcbiAgICBpbmRleDogbnVtYmVyXG4gIH0gfCBudWxsPigocHJldmlvdXNWYWx1ZSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50VmFsdWUgLSB2YWx1ZSk7XG5cbiAgICBpZiAocHJldmlvdXNWYWx1ZSA9PT0gbnVsbCB8fCBkaXN0YW5jZSA8IHByZXZpb3VzVmFsdWUuZGlzdGFuY2UgfHwgZGlzdGFuY2UgPT09IHByZXZpb3VzVmFsdWUuZGlzdGFuY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpbmRleCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gIH0sIG51bGwpITtcbiAgcmV0dXJuIGNsb3Nlc3RJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uINCzdmFsdWVUb1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiAoKHZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFRvVmFsdWUocGVyY2VudCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogKHBlcmNlbnQgLyAxMDApICsgbWluO1xufVxuXG5mdW5jdGlvbiBhcnJheUVxdWFscyhhcnJheTE6IGFueSwgYXJyYXkyOiBhbnkpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkxKSAmJiBBcnJheS5pc0FycmF5KGFycmF5MikgJiYgYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aFxuICAgICYmIGFycmF5MS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gYXJyYXkyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWxzKHZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwsIHZhbHVlMjogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsKSB7XG4gIGlmICh2YWx1ZSA9PT0gdmFsdWUyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGFycmF5RXF1YWxzKHZhbHVlLCB2YWx1ZTIpO1xufVxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uINCzYmV0d2Vlbih4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG59XG5cbmZ1bmN0aW9uIEFTQyhhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICByZXR1cm4gYSAtIGI7XG59XG4iXX0=