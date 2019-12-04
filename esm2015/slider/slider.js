var LySlider_1;
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, OnInit, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, OnChanges, OnDestroy, QueryList, ViewChildren, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, ThemeVariables, toBoolean, LY_COMMON_STYLES, HammerInput, toNumber, LyHostClass, untilComponentDestroyed, Dir, StyleCollection, LyClasses, StyleTemplate, styleTemplateToString, ThemeRef, StyleRenderer } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
export const LY_SLIDER_DEFAULT_OPTIONS = new InjectionToken('LY_SLIDER_DEFAULT_OPTIONS');
export const LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LySlider),
    multi: true
};
const STYLE_PRIORITY = -2;
const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    const { before } = theme;
    return {
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{display:inline-block;position:relative;box-sizing:border-box;cursor:pointer;}${styleTemplateToString(((theme.slider
            && theme.slider.root
            && (theme.slider.root instanceof StyleCollection
                ? theme.slider.root.setTransformer(fn => fn(__)).css
                : theme.slider.root(__)))), `${className}`)}${styleTemplateToString((LY_COMMON_STYLES.fill), `${className} ${__.bg}`)}${className} ${__.bg}{margin:auto;}${className}${__.thumbVisible} ${__.thumb},${className}:not(${__.thumbNotVisible}):not(${__.disabled}) ${__.thumbContent}:hover ${__.thumb},${className}:not(${__.thumbNotVisible}) ${__.thumbContent}${__.thumbContentFocused} ${__.thumb}{border-radius:50% 50% 0%;}${className}${__.thumbVisible} ${__.thumbContent}::before,${className}:not(${__.thumbNotVisible}):not(${__.disabled}) ${__.thumbContent}:hover::before,${className}:not(${__.thumbNotVisible}) ${__.thumbContent}${__.thumbContentFocused}::before{transform:scale(1);}`,
        track: (className) => `${className}{position:absolute;margin:auto;}`,
        bg: null,
        thumbContainer: (className) => `${className}{width:0;height:0;position:absolute;margin:auto;}`,
        thumbContent: (className) => `${className}::before{content:'';position:absolute;opacity:.6;transform:scale(0);transition:transform ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms, background ${theme.animations.durations.complex}ms ${theme.animations.curves.sharp} 0ms;}`,
        thumb: (className) => `${className}{position:absolute;width:12px;height:12px;left:-6px;top:-6px;border-radius:50%;outline:0;transition:${['border-radius'].map(prop => `${prop} ${theme.animations.durations.exiting}ms ${theme.animations.curves.standard} 0ms`).join()};}${className}::before{content:'';border-radius:50%;transition:${['box-shadow'].map(prop => `${prop} ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp} 0ms`).join()};}${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}::before`)}`,
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixHQUFHLEVBQ0gsZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFzQi9CLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUNsQyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQztBQU01RSxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBeUMsRUFBRSxHQUFhLEVBQUUs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QUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUFXLEVBQUUsTUFBVztJQUMzQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1dBQ25GLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQXdDLEVBQUUsTUFBeUM7SUFDdEcsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUNwRCxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBUyxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQzFELE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0LFxuICBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgSGFtbWVySW5wdXQsXG4gIHRvTnVtYmVyLFxuICBMeUhvc3RDbGFzcyxcbiAgdW50aWxDb21wb25lbnREZXN0cm95ZWQsXG4gIERpcixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgVGhlbWVSZWYsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBTbGlkZXIgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICBkaXNhYmxlZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgY29sb3I/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGFwcGVhcmFuY2U/OiB7XG4gICAgc3RhbmRhcmQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICAgIFtrZXk6IHN0cmluZ106IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSkgfCB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJEZWZhdWx0T3B0aW9ucyB7XG4gIGFwcGVhcmFuY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9TTElERVJfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48THlTbGlkZXJEZWZhdWx0T3B0aW9ucz4oJ0xZX1NMSURFUl9ERUZBVUxUX09QVElPTlMnKTtcblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlclZhcmlhYmxlcyB7XG4gIHNsaWRlcj86IEx5U2xpZGVyVGhlbWU7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5U2xpZGVyKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgeyBiZWZvcmUgfSA9IHRoZW1lO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6cG9pbnRlcjt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5zbGlkZXJcbiAgICAgICAgICAgICYmIHRoZW1lLnNsaWRlci5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuc2xpZGVyLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5zbGlkZXIucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihfXykpLmNzc1xuICAgICAgICAgICAgICA6IHRoZW1lLnNsaWRlci5yb290KF9fKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9ICR7X18uYmd9YCl9JHtjbGFzc05hbWV9ICR7X18uYmd9e21hcmdpbjphdXRvO30ke2NsYXNzTmFtZX0ke19fLnRodW1iVmlzaWJsZX0gJHtfXy50aHVtYn0sJHtjbGFzc05hbWV9Om5vdCgke19fLnRodW1iTm90VmlzaWJsZX0pOm5vdCgke19fLmRpc2FibGVkfSkgJHtfXy50aHVtYkNvbnRlbnR9OmhvdmVyICR7X18udGh1bWJ9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy50aHVtYk5vdFZpc2libGV9KSAke19fLnRodW1iQ29udGVudH0ke19fLnRodW1iQ29udGVudEZvY3VzZWR9ICR7X18udGh1bWJ9e2JvcmRlci1yYWRpdXM6NTAlIDUwJSAwJTt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJDb250ZW50fTo6YmVmb3JlLCR7Y2xhc3NOYW1lfTpub3QoJHtfXy50aHVtYk5vdFZpc2libGV9KTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3Zlcjo6YmVmb3JlLCR7Y2xhc3NOYW1lfTpub3QoJHtfXy50aHVtYk5vdFZpc2libGV9KSAke19fLnRodW1iQ29udGVudH0ke19fLnRodW1iQ29udGVudEZvY3VzZWR9OjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKDEpO31gLFxuXG4gICAgdHJhY2s6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46YXV0bzt9YCxcbiAgICBiZzogbnVsbCxcbiAgICB0aHVtYkNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjA7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87fWAsXG4gICAgdGh1bWJDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX06OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjY7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246dHJhbnNmb3JtICR7XG4gICAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zLCBiYWNrZ3JvdW5kICR7XG4gICAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXM7fWAsXG4gICAgdGh1bWI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2xlZnQ6LTZweDt0b3A6LTZweDtib3JkZXItcmFkaXVzOjUwJTtvdXRsaW5lOjA7dHJhbnNpdGlvbjoke1snYm9yZGVyLXJhZGl1cyddLm1hcChwcm9wID0+IGAke3Byb3B9ICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmV4aXRpbmdcbiAgICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAwbXNgKS5qb2luKCl9O30ke2NsYXNzTmFtZX06OmJlZm9yZXtjb250ZW50OicnO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246JHtbJ2JveC1zaGFkb3cnXS5tYXAocHJvcCA9PiBgJHtwcm9wfSAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gICAgICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXNgKS5qb2luKCl9O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YmVmb3JlYCl9YCxcbiAgICB0aHVtYkxhYmVsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtib3JkZXItcmFkaXVzOjUwJTt0b3A6LTE0cHg7JHtiZWZvcmV9Oi0xNHB4O3RyYW5zaXRpb246JHtbJ3RyYW5zZm9ybScsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3JkZXItcmFkaXVzJ10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmdcbiAgICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXNgKS5qb2luKCl9O31gLFxuICAgIHRodW1iTGFiZWxWYWx1ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiNmZmY7fWAsXG5cbiAgICBob3Jpem9udGFsOiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MTIwcHg7aGVpZ2h0OjJweDtwYWRkaW5nOjEwcHggMDt0b3VjaC1hY3Rpb246cGFuLXkgIWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7X18udHJhY2t9LCR7Y2xhc3NOYW1lfSAke19fLmJnfXtoZWlnaHQ6MnB4O3dpZHRoOjEwMCU7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfXske2JlZm9yZX06MDt0b3A6MDtib3R0b206MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJ9e3RyYW5zZm9ybTpyb3RhdGVaKC0xMzVkZWcpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsfXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZykgc2NhbGUoMCk7fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1iTGFiZWx9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3ZlciAke19fLnRodW1iTGFiZWx9LCR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGVudH0ke19fLnRodW1iQ29udGVudEZvY3VzZWR9ICR7X18udGh1bWJMYWJlbH17Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDAlO3RvcDotNTBweDt0cmFuc2Zvcm06cm90YXRlWig0NWRlZykgc2NhbGUoMSk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iTGFiZWxWYWx1ZX17dHJhbnNmb3JtOnJvdGF0ZVooLTQ1ZGVnKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250YWluZXJ9e3RvcDowO2JvdHRvbTowO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9OjpiZWZvcmV7d2lkdGg6MnB4O2hlaWdodDoyNHB4O2xlZnQ6LTFweDt0b3A6LTI0cHg7fSR7Y2xhc3NOYW1lfSAke19fLnRpY2t9e3dpZHRoOjJweDtoZWlnaHQ6aW5oZXJpdDt0b3A6MDtib3R0b206MDt9JHtjbGFzc05hbWV9ICR7X18ubWFya317dG9wOjIycHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoJHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnLScgOiAnJ301MCUpO30ke2NsYXNzTmFtZX0ke19fLm1hcmtlZH17bWFyZ2luLWJvdHRvbToyNHB4O31gLFxuICAgIHZlcnRpY2FsOiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MnB4O2hlaWdodDoxMjBweDtwYWRkaW5nOjAgMTBweDt0b3VjaC1hY3Rpb246cGFuLXggIWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7X18udHJhY2t9LCR7Y2xhc3NOYW1lfSAke19fLmJnfXtoZWlnaHQ6MTAwJTt3aWR0aDoycHg7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfXtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJ9e3RyYW5zZm9ybToke3RoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICdyb3RhdGVaKDEzNWRlZyknIDogJ3JvdGF0ZVooLTQ1ZGVnKSd9O30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsfXt0cmFuc2Zvcm06cm90YXRlWigtNDVkZWcpIHNjYWxlKDApO30ke2NsYXNzTmFtZX0ke19fLnRodW1iVmlzaWJsZX0gJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX06bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXIgJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1iTGFiZWx9e2JvcmRlci1yYWRpdXM6JHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnNTAlIDUwJSAwJScgOiAnMCA1MCUgNTAlIDUwJSd9O2JlZm9yZTotNTBweDt0cmFuc2Zvcm06cm90YXRlWigtNDVkZWcpIHNjYWxlKDEpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsVmFsdWV9e3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250YWluZXJ9e2xlZnQ6MDtyaWdodDowO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9OjpiZWZvcmV7d2lkdGg6MjRweDtoZWlnaHQ6MnB4O2JlZm9yZTotMjRweDt0b3A6LTFweDt9JHtjbGFzc05hbWV9ICR7X18udGlja317d2lkdGg6aW5oZXJpdDtoZWlnaHQ6MnB4O2xlZnQ6MDtyaWdodDowO30ke2NsYXNzTmFtZX0gJHtfXy5tYXJrfXske2JlZm9yZX06MjJweDt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpO30ke2NsYXNzTmFtZX0ke19fLm1hcmtlZH17JHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnbWFyZ2luLXJpZ2h0JyA6ICdtYXJnaW4tbGVmdCd9OjI0cHg7fWAsXG5cbiAgICBtYXJrZWQ6IG51bGwsXG4gICAgbWFyazogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXNpemU6MTRweDtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9YCxcbiAgICBtYXJrQWN0aXZlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y29sb3I6Y3VycmVudENvbG9yO31gLFxuICAgIHRpY2s6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46YXV0bzt9YCxcbiAgICB0aWNrQWN0aXZlOiBudWxsLFxuXG4gICAgdGh1bWJWaXNpYmxlOiBudWxsLFxuICAgIHRodW1iTm90VmlzaWJsZTogbnVsbCxcbiAgICB0aHVtYkNvbnRlbnRGb2N1c2VkOiBudWxsLFxuICAgIHNsaWRpbmc6IG51bGwsXG4gICAgZGlzYWJsZWQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjdXJzb3I6ZGVmYXVsdDt9YFxuICB9O1xufTtcblxuLyoqIEEgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgYnkgdGhlIEx5U2xpZGVyIGNvbXBvbmVudC4gKi9cbmV4cG9ydCBjbGFzcyBMeVNsaWRlckNoYW5nZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogVGhlIEx5U2xpZGVyIHRoYXQgY2hhbmdlZC4gKi9cbiAgICBwdWJsaWMgc291cmNlOiBMeVNsaWRlcixcbiAgICAvKiogVGhlIG5ldyB2YWx1ZSBvZiB0aGUgc291cmNlIHNsaWRlci4gKi9cbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCxcbiAgKSB7IH1cbn1cblxuaW50ZXJmYWNlIFRodW1iIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBwZXJjZW50OiBudW1iZXIgfCBudWxsO1xuICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGZvY3VzZWQ/OiBib29sZWFuO1xuICBzbGlkaW5nPzogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlck1hcmsge1xuICB2YWx1ZTogbnVtYmVyO1xuICBsYWJlbDogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlTbGlkZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBMWV9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnKHNsaWRlKSc6ICdfb25TbGlkZSgkZXZlbnQpJyxcbiAgICAnKHNsaWRlZW5kKSc6ICdfb25TbGlkZUVuZCgpJyxcbiAgICAnKHRhcCknOiAnX29uVGFwKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlTbGlkZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHN0YXRpYyDQuCA9ICdMeVNsaWRlcic7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmVydGljYWxDbGFzcz86IHN0cmluZyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdGh1bWJzT25TbGlkZVN0YXJ0OiBUaHVtYltdIHwgbnVsbDtcbiAgcHJpdmF0ZSBfdmFsdWVPblNsaWRlU3RhcnQ6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbDtcblxuICBwcml2YXRlIF9taW46IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX21heDogbnVtYmVyID0gMTAwO1xuXG4gIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX3N0ZXBQcmVjaXNpb24/OiBudW1iZXIgfCBudWxsO1xuXG4gIHByaXZhdGUgX2Nsb3Nlc3RJbmRleDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY3VycmVudFJlY3Q6IERPTVJlY3QgfCBudWxsO1xuXG4gIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogTWluIHBlcmNlbnRhZ2UsIHRoaXMgaXMgZm9yIG1hcmsuICovXG4gIF9taW5QZXJjZW50OiBudW1iZXI7XG4gIC8qKiBNYXggcGVyY2VudGFnZSwgdGhpcyBpcyBmb3IgbWFyay4gKi9cbiAgX21heFBlcmNlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIHRodW1iIGlzIHNsaWRpbmcuXG4gICAqL1xuICBfaXNTbGlkaW5nOiBib29sZWFuO1xuICBfc2xpZGluZ1RodW1iVmFsdWU/OiBudW1iZXIgfCBudWxsO1xuXG4gIF90aHVtYnM6IFRodW1iW10gPSBbXTtcblxuICBfcm9vdENsYXNzZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBAVmlld0NoaWxkKCdiZycsIHsgc3RhdGljOiBmYWxzZSB9KSBfYmc/OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndHJhY2snLCB7IHN0YXRpYzogdHJ1ZSB9KSBfdHJhY2s6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd0aWNrc1JlZicsIHsgc3RhdGljOiB0cnVlIH0pIF90aWNrc1JlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGRyZW4oJ3RodW1ic1JlZicpIF90aHVtYnNSZWY/OiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD4+O1xuXG4gIEBJbnB1dCgpIGRpc3BsYXlXaXRoOiAodmFsdWU6IG51bWJlciB8IG51bGwpID0+IHN0cmluZyB8IG51bWJlcjtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNsaWRlciB0aHVtYiBtb3Zlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0OiBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4oKTtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgYmx1ciBldmVudCBvY2N1cnMgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHRodW1iLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdGh1bWJWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYlZpc2libGU7XG4gIH1cbiAgc2V0IHRodW1iVmlzaWJsZSh2YWw6IGJvb2xlYW4gfCBudWxsKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdmFsICE9IG51bGwgPyB0b0Jvb2xlYW4odmFsKSA6IG51bGw7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLnRodW1iVmlzaWJsZSkge1xuXG4gICAgICBjb25zdCB7IHRodW1iVmlzaWJsZTogdGh1bWJWaXNpYmxlQ2xhc3MgfSA9IHRoaXMuY2xhc3NlcztcbiAgICAgIGNvbnN0IHsgdGh1bWJOb3RWaXNpYmxlOiB0aHVtYk5vdFZpc2libGVDbGFzcyB9ID0gdGhpcy5jbGFzc2VzO1xuICAgICAgdGhpcy5fdGh1bWJWaXNpYmxlID0gbmV3VmFsO1xuXG4gICAgICB0aGlzLl9ob3N0Q2xhc3MudG9nZ2xlKHRodW1iVmlzaWJsZUNsYXNzLCBuZXdWYWwgPT09IHRydWUpO1xuICAgICAgdGhpcy5faG9zdENsYXNzLnRvZ2dsZSh0aHVtYk5vdFZpc2libGVDbGFzcywgbmV3VmFsID09PSBmYWxzZSk7XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90aHVtYlZpc2libGU6IGJvb2xlYW4gfCBudWxsO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSBtYXJrcywgYWxzbyBhY2NlcHRzIGFuIGFycmF5IG9mIG1hcmtzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWFya3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzO1xuICB9XG4gIHNldCBtYXJrcyh2YWw6IGJvb2xlYW4gfCBMeVNsaWRlck1hcmtbXSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5tYXJrcykge1xuXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY2xhc3Nlcy5tYXJrZWQ7XG5cbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgICAgICB0aGlzLl9tYXJrc0NsYXNzID0gbmV3Q2xhc3M7XG4gICAgICAgIHRoaXMuX21hcmtzID0gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogbmV3VmFsO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXJrc0NsYXNzKSB7XG4gICAgICAgIHRoaXMuX21hcmtzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICAgICAgdGhpcy5fbWFya3NDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdWYWwpKSB7XG4gICAgICAgIHRoaXMuX21hcmtzTGlzdCA9IHZhbCBhcyBMeVNsaWRlck1hcmtbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21hcmtzTGlzdCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9tYXJrczogYm9vbGVhbiB8IEx5U2xpZGVyTWFya1tdO1xuICBwcml2YXRlIF9tYXJrc0NsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBfbWFya3NMaXN0PzogTHlTbGlkZXJNYXJrW10gfCBudWxsO1xuXG4gIC8qKiBUaGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG4gIHNldCBtYXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdG9OdW1iZXIodiwgdGhpcy5fbWF4KTtcbiAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoZSBtaW5pbXVtIHZhbHVlIHRoYXQgdGhlIHNsaWRlciBjYW4gaGF2ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cbiAgc2V0IG1pbih2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW4gPSB0b051bWJlcih2LCB0aGlzLl9taW4pO1xuXG4gICAgLy8gSWYgdGhlIHZhbHVlIHdhc24ndCBleHBsaWNpdGx5IHNldCBieSB0aGUgdXNlciwgc2V0IGl0IHRvIHRoZSBtaW4uXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fbWluO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoZSBzbGlkZXIgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl9zci5hZGQoXG4gICAgICAgIGAke0x5U2xpZGVyLtC4fS5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICAgIGlmICh0aGVtZS5zbGlkZXIgJiYgdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZVt2YWxdO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFwcGVhcmFuY2UgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IGFwcGVhcmFuY2Uuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oY2xhc3NlcykpLmNzc1xuICAgICAgICAgICAgICAgIDogYXBwZWFyYW5jZShjbGFzc2VzLCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2VgKTtcbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIC8qKiBDb2xvciBvZiBTbGlkZXIgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgIGNvbnN0IHN0eWxlS2V5ID0gYCR7THlTbGlkZXIu0Lh9LmNvbG9yOiR7dmFsfWA7XG5cbiAgICBjb25zdCBuZXdTdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuXG4gICAgICBpZiAodGhlbWUuc2xpZGVyICYmIHRoZW1lLnNsaWRlci5jb2xvcikge1xuICAgICAgICBjb25zdCBzbGlkZXJDb2xvciA9IHRoZW1lLnNsaWRlci5jb2xvcjtcbiAgICAgICAgaWYgKHNsaWRlckNvbG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNsaWRlckNvbG9yIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICA/IChzbGlkZXJDb2xvcikuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oX18sIGNvbG9yKSkuY3NzXG4gICAgICAgICAgICA6IHNsaWRlckNvbG9yKF9fLCBjb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5zbGlkZXIuY29sb3JgKTtcbiAgICB9O1xuICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl9zci5hZGQoXG4gICAgICBzdHlsZUtleSxcbiAgICAgIG5ld1N0eWxlLFxuICAgICAgU1RZTEVfUFJJT1JJVFkgKyAxLFxuICAgICAgdGhpcy5fY29sb3JDbGFzc1xuICAgICk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgc2xpZGVyIGlzIHZlcnRpY2FsLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHNldCB2ZXJ0aWNhbCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IG5ld1ZhbDtcblxuICAgIGNvbnN0IG5ld0NsYXNzID0gbmV3VmFsXG4gICAgICA/IHRoaXMuY2xhc3Nlcy52ZXJ0aWNhbFxuICAgICAgOiB0aGlzLmNsYXNzZXMuaG9yaXpvbnRhbDtcblxuICAgIHRoaXMuX3ZlcnRpY2FsQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yZW5kZXJlcixcbiAgICAgIG5ld0NsYXNzLFxuICAgICAgdGhpcy5fdmVydGljYWxDbGFzcyBhcyBhbnkpO1xuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIHZhbHVlcyBhdCB3aGljaCB0aGUgdGh1bWIgd2lsbCBzbmFwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RlcCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc3RlcDsgfVxuICBzZXQgc3RlcCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwID0gdG9OdW1iZXIodiwgdGhpcy5fc3RlcCk7XG5cbiAgICB0aGlzLl9zdGVwUHJlY2lzaW9uID0gdGhpcy5fc3RlcCAlIDEgIT09IDBcbiAgICAgID8gdGhpcy5fc3RlcC50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoXG4gICAgICA6IG51bGw7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWx1ZSBvZiBhIHNsaWRlciwgdGhpcyBjYW4gYmUgYSBudW1iZXIgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICogSWYgdGhlIGFycmF5IG9mIG51bWJlcnMgaGFzIG1vcmUgdGhhbiBvbmUgdmFsdWUsXG4gICAqIHRoZW4gdGhpcyB3aWxsIGNyZWF0ZSBtb3JlIHRodW1ic1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgY29uc3QgdmFsdWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IE51bWJlcih2YWwpO1xuICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQobmV3VmFsdWUudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uIGFzIG51bWJlcikpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZUlzQXJyYXkgJiYgIWFycmF5RXF1YWxzKHRoaXMuX3ZhbHVlLCB2YWwpKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbCBhcyBudW1iZXJbXTtcbiAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5tYXAoXG4gICAgICAgICAgX3ZhbCA9PiBfdmFsID09PSBudWxsXG4gICAgICAgICAgPyBfdmFsXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KF92YWwudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uIGFzIG51bWJlcikpKTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGh1bWJzID0gKHZhbHVlSXNBcnJheSA/XG4gICAgICAgIHRoaXMuX3ZhbHVlIGFzIChudW1iZXIgfCBudWxsKVtdXG4gICAgICAgIDogW3RoaXMuX3ZhbHVlIGFzIG51bWJlciB8IG51bGxdKS5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHZhbHVlOiB0b051bWJlcih2LCB0aGlzLm1pbiksXG4gICAgICAgICAgZGlzcGxheVZhbHVlOiBudWxsLFxuICAgICAgICAgIHBlcmNlbnQ6IG51bGwsXG4gICAgICAgICAgc3R5bGVzOiB7fVxuICAgICAgICB9KSk7XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgc2xpZGVyIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGNvbnN0IHN0eWxlS2V5ID0gYCR7THlTbGlkZXIu0Lh9LmRpc2FibGVkOiR7dmFsfS0ke2NvbG9yfWA7XG4gICAgICAgIGxldCBuZXdTdHlsZTogKCh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gICAgICAgIG5ld1N0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xyID0gdGhlbWUuY29sb3JPZihjb2xvcik7XG4gICAgICAgICAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcblxuICAgICAgICAgIGlmICh0aGVtZS5zbGlkZXIgJiYgdGhlbWUuc2xpZGVyLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJDb2xvciA9IHRoZW1lLnNsaWRlci5kaXNhYmxlZDtcbiAgICAgICAgICAgIGlmIChzbGlkZXJDb2xvcikge1xuICAgICAgICAgICAgICByZXR1cm4gc2xpZGVyQ29sb3IgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IChzbGlkZXJDb2xvcikuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oX18sIGNscikpLmNzc1xuICAgICAgICAgICAgICAgIDogc2xpZGVyQ29sb3IoX18sIGNscik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5zbGlkZXIuY29sb3JgKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9zci5hZGQoXG4gICAgICAgICAgc3R5bGVLZXksXG4gICAgICAgICAgbmV3U3R5bGUsXG4gICAgICAgICAgU1RZTEVfUFJJT1JJVFkgKyAxLjUsXG4gICAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl9ob3N0Q2xhc3MuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZGlzYWJsZWRDbGFzcykge1xuICAgICAgICB0aGlzLl9ob3N0Q2xhc3MucmVtb3ZlKHRoaXMuX2Rpc2FibGVkQ2xhc3MpO1xuICAgICAgICB0aGlzLl9ob3N0Q2xhc3MucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSB0aHVtYiBsYWJlbCwgYnV0IGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlcixcbiAgICogaXQgd2lsbCBzaG93IHRpY2tzIGFjY29yZGluZyB0byB0aGUgc3RlcHMuIEZvciBleGFtcGxlOiBpZiB5b3Ugc2V0XG4gICAqIDMgdGlja3Mgd2l0aCBhIHN0ZXAgb2YgMTAsIHlvdSB3aWxsIGRyYXcgYSB0aWNrIGV2ZXJ5IDMwIHZhbHVlc1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRpY2tzKCkge1xuICAgIHJldHVybiB0aGlzLl90aWNrcztcbiAgfVxuICBzZXQgdGlja3ModmFsOiBudW1iZXIgfCBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0b051bWJlcih2YWwsIHRvQm9vbGVhbih2YWwpKTtcbiAgICB0aGlzLl90aWNrcyA9IG5ld1ZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3RpY2tzOiBudW1iZXIgfCBib29sZWFuO1xuICBfdGlja0ludGVydmFsOiBudW1iZXI7XG4gIGdldCBfdGlja0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190aWNrTGlzdDtcbiAgfVxuICBwcml2YXRlIF9fdGlja0xpc3Q6IG51bWJlcltdO1xuICAvLyBwcml2YXRlIF9uZ0NsYXNzOiBOZ0NsYXNzO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfaG9zdENsYXNzOiBMeUhvc3RDbGFzcyxcbiAgICBwcml2YXRlIF9zcjogU3R5bGVSZW5kZXJlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1NMSURFUl9ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHQ6IEx5U2xpZGVyRGVmYXVsdE9wdGlvbnNcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVUaWNrVmFsdWVzKCk7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuX3RoZW1lLmRpcmVjdGlvbkNoYW5nZWQucGlwZSh1bnRpbENvbXBvbmVudERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gKHRoaXMuX2RlZmF1bHQgJiYgdGhpcy5fZGVmYXVsdC5hcHBlYXJhbmNlKSB8fCAnc3RhbmRhcmQnO1xuICAgIH1cblxuICAgIC8qKiBTZXQgaG9yaXpvbnRhbCBzbGlkZXIgKi9cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGNvbG9yICovXG4gICAgaWYgKHRoaXMuY29sb3IgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb2xvciA9ICdhY2NlbnQnO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBzdGVwICovXG4gICAgaWYgKHRoaXMuc3RlcCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzZWxlY3QuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfb25Gb2N1cyh0aHVtYjogVGh1bWIpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9vbkJsdXIodGh1bWI6IFRodW1iKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgX29uVGFwKGV2ZW50OiBIYW1tZXJJbnB1dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXJ0U2xpZGUoKTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgIHRoaXMuX29uU2xpZGVFbmQoKTtcbiAgfVxuXG4gIF9vblNsaWRlKGV2ZW50OiBIYW1tZXJJbnB1dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTbGlkZSgpO1xuXG4gICAgaWYgKGV2ZW50Wydpc0ZpbmFsJ10pIHtcbiAgICAgIGlmIChldmVudFsncG9pbnRlclR5cGUnXSA9PT0gJ3RvdWNoJyAmJiBldmVudC5jZW50ZXIueCA9PT0gMCAmJiBldmVudC5jZW50ZXIueSA9PT0gMCkge1xuICAgICAgICAvLyByZXN0b3JlIHRvIGluaXRpYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uU2xpZGVFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICB9XG5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLl9lbWl0SW5wdXRFdmVudCgpO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRTbGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkaW5nKTtcblxuICAgICAgLy8gY2xvbmVcbiAgICAgIHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0ID0gQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUuc2xpY2UoMCkgOiB0aGlzLnZhbHVlO1xuXG4gICAgICB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQgPSB0aGlzLl90aHVtYnMuc2xpY2UoMCkubWFwKHQgPT4gKHsuLi50fSkpO1xuICAgICAgdGhpcy5fY3VycmVudFJlY3QgPSB0aGlzLl9iZyEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIH1cbiAgfVxuXG4gIF9vblNsaWRlRW5kKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRpbmcpO1xuXG4gICAgICBpZiAoIXZhbHVlRXF1YWxzKHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0LCB0aGlzLnZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQgPSBudWxsO1xuICAgICAgdGhpcy5fdmFsdWVPblNsaWRlU3RhcnQgPSBudWxsO1xuICAgICAgdGhpcy5fY2xvc2VzdEluZGV4ID0gbnVsbDtcbiAgICAgIHRoaXMuX2N1cnJlbnRSZWN0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfdHJhY2tCeUZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBUaHVtYikge1xuICAgIHJldHVybiBpdGVtLmluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuX2JnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdyA9IHRoaXMuX2N1cnJlbnRSZWN0IS53aWR0aDtcbiAgICBjb25zdCBoID0gdGhpcy5fY3VycmVudFJlY3QhLmhlaWdodDtcbiAgICB4IC09IHRoaXMuX2N1cnJlbnRSZWN0IS54O1xuICAgIHkgLT0gdGhpcy5fY3VycmVudFJlY3QhLnk7XG5cbiAgICBsZXQgcGVyY2VudCA9IGNsYW1wKFxuICAgICAgdGhpcy52ZXJ0aWNhbFxuICAgICAgICA/INCzdmFsdWVUb1BlcmNlbnQoeSwgMCwgaClcbiAgICAgICAgOiDQs3ZhbHVlVG9QZXJjZW50KHgsIDAsIHcpLFxuICAgICAgMCxcbiAgICAgIDEwMCk7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCB8fCAoIXRoaXMudmVydGljYWwgJiYgdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gRGlyLnJ0bCkpIHtcbiAgICAgIHBlcmNlbnQgPSAxMDAgLSBwZXJjZW50O1xuICAgIH1cblxuICAgIGxldCB2YWx1ZTogbnVtYmVyO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5taW47XG4gICAgfSBlbHNlIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5tYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fcm91bmRWYWx1ZVRvU3RlcChwZXJjZW50VG9WYWx1ZShwZXJjZW50LCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nsb3Nlc3RJbmRleCA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9jbG9zZXN0SW5kZXggPSBmaW5kQ2xvc2VzdCh0aGlzLl90aHVtYnMubWFwKHRodW1iID0+IHRodW1iLnZhbHVlKSwgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50VGh1bWIgPSB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQhW3RoaXMuX2Nsb3Nlc3RJbmRleF07XG4gICAgdGhpcy5fc2xpZGluZ1RodW1iVmFsdWUgPSBjdXJyZW50VGh1bWIudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCEubWFwKHRodW1iID0+IHRodW1iLnZhbHVlKS5zb3J0KEFTQyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBmb2N1cyBzbGlkaW5nVGh1bWJcbiAgICBjb25zdCBjdXJyZW50U2xpZGluZ1RodW1iOiBUaHVtYiB8IHVuZGVmaW5lZCA9IHRoaXMuX3RodW1icy5maW5kKHRodW1iID0+IHRodW1iLnZhbHVlID09PSB2YWx1ZSkhO1xuICAgIGlmIChjdXJyZW50U2xpZGluZ1RodW1iKSB7XG4gICAgICBjdXJyZW50U2xpZGluZ1RodW1iLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGh1bWJzUmVmIS50b0FycmF5KClbY3VycmVudFNsaWRpbmdUaHVtYi5pbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRodW1icygpIHtcbiAgICB0aGlzLl90aHVtYnMuZm9yRWFjaCh0aHVtYiA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBjbGFtcCh0aHVtYi52YWx1ZSwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSDQs3ZhbHVlVG9QZXJjZW50KHZhbCwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuX2NhbGN1bGF0ZVBvc2l0aW9uKHBlcmNlbnQpO1xuICAgICAgdGh1bWIudmFsdWUgPSB2YWw7XG4gICAgICB0aHVtYi5kaXNwbGF5VmFsdWUgPSB0aGlzLl90cmFuc2Zvcm1WYWx1ZSh2YWwpO1xuICAgICAgdGh1bWIucGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aHVtYi5zdHlsZXMgPSB7XG4gICAgICAgIFtwb3Muc3R5bGVdOiBwb3MudmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB0aGlzLl91cGRhdGVUcmFjaygpO1xuICB9XG5cbiAgX2NhbGN1bGF0ZVBvc2l0aW9uKHBlcmNlbnQ6IG51bWJlcikge1xuICAgIGxldCBzdHlsZTogc3RyaW5nO1xuICAgIGNvbnN0IHZhbHVlID0gYCR7cGVyY2VudH0lYDtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZSA9ICdib3R0b20nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZSA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVHJhY2soKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0aGlzLl90cmFjaztcbiAgICBjb25zdCB0aHVtYnMgPSB0aGlzLl90aHVtYnM7XG4gICAgY29uc3QgdGh1bWJzUGVyY2VudHMgPSB0aHVtYnMubWFwKHRodW1iID0+IHRodW1iLnBlcmNlbnQhKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgICBpZiAodGh1bWJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGh1bWJzUGVyY2VudHMudW5zaGlmdCgwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5QZXJjZW50ID0gdGhpcy5fbWluUGVyY2VudCA9IE1hdGgubWluKC4uLnRodW1ic1BlcmNlbnRzKTtcbiAgICBjb25zdCBtYXhQZXJjZW50ID0gdGhpcy5fbWF4UGVyY2VudCA9IE1hdGgubWF4KC4uLnRodW1ic1BlcmNlbnRzKTtcblxuICAgIGlmICh0cmFjaykge1xuXG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLnJpZ2h0ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHsobWF4UGVyY2VudCAtIG1pblBlcmNlbnQpfSVgO1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmJvdHRvbSA9IGAke21pblBlcmNlbnR9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7bWF4UGVyY2VudCAtIG1pblBlcmNlbnR9JWA7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGVbZGlyZWN0aW9uXSA9IGAke21pblBlcmNlbnR9JWA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEVtaXRzIGEgY2hhbmdlIGV2ZW50LiAqL1xuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl9jcmVhdGVDaGFuZ2VFdmVudCgpKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBpbnB1dCBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZW1pdElucHV0RXZlbnQoKSB7XG4gICAgdGhpcy5pbnB1dC5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2hhbmdlRXZlbnQodmFsdWUgPSB0aGlzLnZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBMeVNsaWRlckNoYW5nZSh0aGlzLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9yb3VuZFZhbHVlVG9TdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVyKChNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5zdGVwKSAqIHRoaXMuc3RlcCkudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmRpc3BsYXlXaXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5V2l0aCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRpY2tWYWx1ZXMoKSB7XG4gICAgdGhpcy5fX3RpY2tMaXN0ID0gW107XG4gICAgaWYgKCF0aGlzLnRpY2tzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRpY2tzID0gdGhpcy50aWNrcztcbiAgICAgIHRoaXMuX3RpY2tJbnRlcnZhbCA9IHR5cGVvZiB0aWNrcyA9PT0gJ251bWJlcidcbiAgICAgICAgPyB0aGlzLnN0ZXAgKiB0aWNrc1xuICAgICAgICA6IHRoaXMuc3RlcDtcblxuICAgICAgdGhpcy5fX3RpY2tMaXN0ID0gW107XG4gICAgICBjb25zdCB0aWNrSW50ZXJ2YWxzID0gdGhpcy5fdGlja0ludGVydmFsICsgMTtcbiAgICAgIGNvbnN0IHN0ZXBXaXRoID0gdGhpcy5fdGlja0ludGVydmFsO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpY2tJbnRlcnZhbHM7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy5fX3RpY2tMaXN0LnB1c2goY2xhbXAoaW5kZXggKiBzdGVwV2l0aCwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZENsb3Nlc3QodmFsdWVzOiBudW1iZXJbXSwgY3VycmVudFZhbHVlOiBudW1iZXIpIHtcbiAgY29uc3QgeyBpbmRleDogY2xvc2VzdEluZGV4IH0gPSB2YWx1ZXMucmVkdWNlPHtcbiAgICBkaXN0YW5jZTogbnVtYmVyXG4gICAgaW5kZXg6IG51bWJlclxuICB9IHwgbnVsbD4oKHByZXZpb3VzVmFsdWUsIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudFZhbHVlIC0gdmFsdWUpO1xuXG4gICAgaWYgKHByZXZpb3VzVmFsdWUgPT09IG51bGwgfHwgZGlzdGFuY2UgPCBwcmV2aW91c1ZhbHVlLmRpc3RhbmNlIHx8IGRpc3RhbmNlID09PSBwcmV2aW91c1ZhbHVlLmRpc3RhbmNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgaW5kZXgsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICB9LCBudWxsKSE7XG4gIHJldHVybiBjbG9zZXN0SW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiDQs3ZhbHVlVG9QZXJjZW50KHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgKiAxMDApIC8gKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRUb1ZhbHVlKHBlcmNlbnQsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIChwZXJjZW50IC8gMTAwKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gYXJyYXlFcXVhbHMoYXJyYXkxOiBhbnksIGFycmF5MjogYW55KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5MSkgJiYgQXJyYXkuaXNBcnJheShhcnJheTIpICYmIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGhcbiAgICAmJiBhcnJheTEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IGFycmF5MltpbmRleF0pO1xufVxuXG5mdW5jdGlvbiB2YWx1ZUVxdWFscyh2YWx1ZTogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsLCB2YWx1ZTI6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCkge1xuICBpZiAodmFsdWUgPT09IHZhbHVlMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBhcnJheUVxdWFscyh2YWx1ZSwgdmFsdWUyKTtcbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIGlmICh2YWx1ZSA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiDQs2JldHdlZW4oeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIHggPj0gbWluICYmIHggPD0gbWF4O1xufVxuXG5mdW5jdGlvbiBBU0MoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuIl19