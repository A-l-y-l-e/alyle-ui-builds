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
export const STYLES = (theme, ref) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixHQUFHLEVBQ0gsZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFzQi9CLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUNsQyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQztBQU01RSxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXlDLEVBQUUs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O0FBQzdDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUFXLEVBQUUsTUFBVztJQUMzQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1dBQ25GLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQXdDLEVBQUUsTUFBeUM7SUFDdEcsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUNwRCxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBUyxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQzFELE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0LFxuICBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgSGFtbWVySW5wdXQsXG4gIHRvTnVtYmVyLFxuICBMeUhvc3RDbGFzcyxcbiAgdW50aWxDb21wb25lbnREZXN0cm95ZWQsXG4gIERpcixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgVGhlbWVSZWYsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBTbGlkZXIgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICBkaXNhYmxlZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgY29sb3I/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGFwcGVhcmFuY2U/OiB7XG4gICAgc3RhbmRhcmQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICAgIFtrZXk6IHN0cmluZ106IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSkgfCB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJEZWZhdWx0T3B0aW9ucyB7XG4gIGFwcGVhcmFuY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9TTElERVJfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48THlTbGlkZXJEZWZhdWx0T3B0aW9ucz4oJ0xZX1NMSURFUl9ERUZBVUxUX09QVElPTlMnKTtcblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlclZhcmlhYmxlcyB7XG4gIHNsaWRlcj86IEx5U2xpZGVyVGhlbWU7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5U2xpZGVyKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IF9fID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYmVmb3JlIH0gPSB0aGVtZTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUuc2xpZGVyXG4gICAgICAgICAgICAmJiB0aGVtZS5zbGlkZXIucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnNsaWRlci5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuc2xpZGVyLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oX18pKS5jc3NcbiAgICAgICAgICAgICAgOiB0aGVtZS5zbGlkZXIucm9vdChfXykpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfSAke19fLmJnfWApfSR7Y2xhc3NOYW1lfSAke19fLmJnfXttYXJnaW46YXV0bzt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJ9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy50aHVtYk5vdFZpc2libGV9KTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3ZlciAke19fLnRodW1ifSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSkgJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1ifXtib3JkZXItcmFkaXVzOjUwJSA1MCUgMCU7fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1iQ29udGVudH06OmJlZm9yZSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSk6bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXI6OmJlZm9yZSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSkgJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfTo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSgxKTt9YCxcblxuICAgIHRyYWNrOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87fWAsXG4gICAgYmc6IG51bGwsXG4gICAgdGh1bWJDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjphdXRvO31gLFxuICAgIHRodW1iQ29udGVudDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5Oi42O3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtcywgYmFja2dyb3VuZCAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zO31gLFxuICAgIHRodW1iOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtsZWZ0Oi02cHg7dG9wOi02cHg7Ym9yZGVyLXJhZGl1czo1MCU7b3V0bGluZTowO3RyYW5zaXRpb246JHtbJ2JvcmRlci1yYWRpdXMnXS5tYXAocHJvcCA9PiBgJHtwcm9wfSAke1xuICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5leGl0aW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMG1zYCkuam9pbigpfTt9JHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOiR7Wydib3gtc2hhZG93J10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICAgICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYCkuam9pbigpfTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06OmJlZm9yZWApfWAsXG4gICAgdGh1bWJMYWJlbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7Ym9yZGVyLXJhZGl1czo1MCU7dG9wOi0xNHB4OyR7YmVmb3JlfTotMTRweDt0cmFuc2l0aW9uOiR7Wyd0cmFuc2Zvcm0nLCAndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm9yZGVyLXJhZGl1cyddLm1hcChwcm9wID0+IGAke3Byb3B9ICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYCkuam9pbigpfTt9YCxcbiAgICB0aHVtYkxhYmVsVmFsdWU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LXNpemU6MTJweDtjb2xvcjojZmZmO31gLFxuXG4gICAgaG9yaXpvbnRhbDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjEyMHB4O2hlaWdodDoycHg7cGFkZGluZzoxMHB4IDA7dG91Y2gtYWN0aW9uOnBhbi15ICFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfSwke2NsYXNzTmFtZX0gJHtfXy5iZ317aGVpZ2h0OjJweDt3aWR0aDoxMDAlO30ke2NsYXNzTmFtZX0gJHtfXy50cmFja317JHtiZWZvcmV9OjA7dG9wOjA7Ym90dG9tOjA7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1ifXt0cmFuc2Zvcm06cm90YXRlWigtMTM1ZGVnKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbH17dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpIHNjYWxlKDApO30ke2NsYXNzTmFtZX0ke19fLnRodW1iVmlzaWJsZX0gJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX06bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXIgJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1iTGFiZWx9e2JvcmRlci1yYWRpdXM6NTAlIDUwJSAwJTt0b3A6LTUwcHg7dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpIHNjYWxlKDEpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsVmFsdWV9e3RyYW5zZm9ybTpyb3RhdGVaKC00NWRlZyk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGFpbmVyfXt0b3A6MDtib3R0b206MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fTo6YmVmb3Jle3dpZHRoOjJweDtoZWlnaHQ6MjRweDtsZWZ0Oi0xcHg7dG9wOi0yNHB4O30ke2NsYXNzTmFtZX0gJHtfXy50aWNrfXt3aWR0aDoycHg7aGVpZ2h0OmluaGVyaXQ7dG9wOjA7Ym90dG9tOjA7fSR7Y2xhc3NOYW1lfSAke19fLm1hcmt9e3RvcDoyMnB4O3RyYW5zZm9ybTp0cmFuc2xhdGVYKCR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJy0nIDogJyd9NTAlKTt9JHtjbGFzc05hbWV9JHtfXy5tYXJrZWR9e21hcmdpbi1ib3R0b206MjRweDt9YCxcbiAgICB2ZXJ0aWNhbDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjJweDtoZWlnaHQ6MTIwcHg7cGFkZGluZzowIDEwcHg7dG91Y2gtYWN0aW9uOnBhbi14ICFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfSwke2NsYXNzTmFtZX0gJHtfXy5iZ317aGVpZ2h0OjEwMCU7d2lkdGg6MnB4O30ke2NsYXNzTmFtZX0gJHtfXy50cmFja317Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1ifXt0cmFuc2Zvcm06JHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAncm90YXRlWigxMzVkZWcpJyA6ICdyb3RhdGVaKC00NWRlZyknfTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbH17dHJhbnNmb3JtOnJvdGF0ZVooLTQ1ZGVnKSBzY2FsZSgwKTt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJMYWJlbH0sJHtjbGFzc05hbWV9Om5vdCgke19fLmRpc2FibGVkfSkgJHtfXy50aHVtYkNvbnRlbnR9OmhvdmVyICR7X18udGh1bWJMYWJlbH0sJHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fSR7X18udGh1bWJDb250ZW50Rm9jdXNlZH0gJHtfXy50aHVtYkxhYmVsfXtib3JkZXItcmFkaXVzOiR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJzUwJSA1MCUgMCUnIDogJzAgNTAlIDUwJSA1MCUnfTtiZWZvcmU6LTUwcHg7dHJhbnNmb3JtOnJvdGF0ZVooLTQ1ZGVnKSBzY2FsZSgxKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbFZhbHVlfXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGFpbmVyfXtsZWZ0OjA7cmlnaHQ6MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fTo6YmVmb3Jle3dpZHRoOjI0cHg7aGVpZ2h0OjJweDtiZWZvcmU6LTI0cHg7dG9wOi0xcHg7fSR7Y2xhc3NOYW1lfSAke19fLnRpY2t9e3dpZHRoOmluaGVyaXQ7aGVpZ2h0OjJweDtsZWZ0OjA7cmlnaHQ6MDt9JHtjbGFzc05hbWV9ICR7X18ubWFya317JHtiZWZvcmV9OjIycHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKTt9JHtjbGFzc05hbWV9JHtfXy5tYXJrZWR9eyR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJ21hcmdpbi1yaWdodCcgOiAnbWFyZ2luLWxlZnQnfToyNHB4O31gLFxuXG4gICAgbWFya2VkOiBudWxsLFxuICAgIG1hcms6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zaXplOjE0cHg7Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fWAsXG4gICAgbWFya0FjdGl2ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2NvbG9yOmN1cnJlbnRDb2xvcjt9YCxcbiAgICB0aWNrOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87fWAsXG4gICAgdGlja0FjdGl2ZTogbnVsbCxcblxuICAgIHRodW1iVmlzaWJsZTogbnVsbCxcbiAgICB0aHVtYk5vdFZpc2libGU6IG51bGwsXG4gICAgdGh1bWJDb250ZW50Rm9jdXNlZDogbnVsbCxcbiAgICBzbGlkaW5nOiBudWxsLFxuICAgIGRpc2FibGVkOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y3Vyc29yOmRlZmF1bHQ7fWBcbiAgfTtcbn07XG5cbi8qKiBBIGNoYW5nZSBldmVudCBlbWl0dGVkIGJ5IHRoZSBMeVNsaWRlciBjb21wb25lbnQuICovXG5leHBvcnQgY2xhc3MgTHlTbGlkZXJDaGFuZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFRoZSBMeVNsaWRlciB0aGF0IGNoYW5nZWQuICovXG4gICAgcHVibGljIHNvdXJjZTogTHlTbGlkZXIsXG4gICAgLyoqIFRoZSBuZXcgdmFsdWUgb2YgdGhlIHNvdXJjZSBzbGlkZXIuICovXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwsXG4gICkgeyB9XG59XG5cbmludGVyZmFjZSBUaHVtYiB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgcGVyY2VudDogbnVtYmVyIHwgbnVsbDtcbiAgc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBmb2N1c2VkPzogYm9vbGVhbjtcbiAgc2xpZGluZz86IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJNYXJrIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGFiZWw6IG51bWJlciB8IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5U2xpZGVyJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTFlfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdLFxuICBob3N0OiB7XG4gICAgJyhzbGlkZSknOiAnX29uU2xpZGUoJGV2ZW50KScsXG4gICAgJyhzbGlkZWVuZCknOiAnX29uU2xpZGVFbmQoKScsXG4gICAgJyh0YXApJzogJ19vblRhcCgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5U2xpZGVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBzdGF0aWMg0LggPSAnTHlTbGlkZXInO1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZlcnRpY2FsQ2xhc3M/OiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RodW1ic09uU2xpZGVTdGFydDogVGh1bWJbXSB8IG51bGw7XG4gIHByaXZhdGUgX3ZhbHVlT25TbGlkZVN0YXJ0OiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDEwMDtcblxuICBwcml2YXRlIF9zdGVwOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9zdGVwUHJlY2lzaW9uPzogbnVtYmVyIHwgbnVsbDtcblxuICBwcml2YXRlIF9jbG9zZXN0SW5kZXg6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2N1cnJlbnRSZWN0OiBET01SZWN0IHwgbnVsbDtcblxuICBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIE1pbiBwZXJjZW50YWdlLCB0aGlzIGlzIGZvciBtYXJrLiAqL1xuICBfbWluUGVyY2VudDogbnVtYmVyO1xuICAvKiogTWF4IHBlcmNlbnRhZ2UsIHRoaXMgaXMgZm9yIG1hcmsuICovXG4gIF9tYXhQZXJjZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSB0aHVtYiBpcyBzbGlkaW5nLlxuICAgKi9cbiAgX2lzU2xpZGluZzogYm9vbGVhbjtcbiAgX3NsaWRpbmdUaHVtYlZhbHVlPzogbnVtYmVyIHwgbnVsbDtcblxuICBfdGh1bWJzOiBUaHVtYltdID0gW107XG5cbiAgX3Jvb3RDbGFzc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgQFZpZXdDaGlsZCgnYmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgX2JnPzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3RyYWNrJywgeyBzdGF0aWM6IHRydWUgfSkgX3RyYWNrOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndGlja3NSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfdGlja3NSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCd0aHVtYnNSZWYnKSBfdGh1bWJzUmVmPzogUXVlcnlMaXN0PEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+PjtcblxuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKHZhbHVlOiBudW1iZXIgfCBudWxsKSA9PiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgdGh1bWIgbW92ZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dDogRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+KCk7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSB0aHVtYi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHRodW1iVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGh1bWJWaXNpYmxlO1xuICB9XG4gIHNldCB0aHVtYlZpc2libGUodmFsOiBib29sZWFuIHwgbnVsbCkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHZhbCAhPSBudWxsID8gdG9Cb29sZWFuKHZhbCkgOiBudWxsO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy50aHVtYlZpc2libGUpIHtcblxuICAgICAgY29uc3QgeyB0aHVtYlZpc2libGU6IHRodW1iVmlzaWJsZUNsYXNzIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgICBjb25zdCB7IHRodW1iTm90VmlzaWJsZTogdGh1bWJOb3RWaXNpYmxlQ2xhc3MgfSA9IHRoaXMuY2xhc3NlcztcbiAgICAgIHRoaXMuX3RodW1iVmlzaWJsZSA9IG5ld1ZhbDtcblxuICAgICAgdGhpcy5faG9zdENsYXNzLnRvZ2dsZSh0aHVtYlZpc2libGVDbGFzcywgbmV3VmFsID09PSB0cnVlKTtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcy50b2dnbGUodGh1bWJOb3RWaXNpYmxlQ2xhc3MsIG5ld1ZhbCA9PT0gZmFsc2UpO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGh1bWJWaXNpYmxlOiBib29sZWFuIHwgbnVsbDtcblxuICAvKiogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgbWFya3MsIGFsc28gYWNjZXB0cyBhbiBhcnJheSBvZiBtYXJrcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1hcmtzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXJrcztcbiAgfVxuICBzZXQgbWFya3ModmFsOiBib29sZWFuIHwgTHlTbGlkZXJNYXJrW10pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMubWFya3MpIHtcblxuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNsYXNzZXMubWFya2VkO1xuXG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICAgICAgdGhpcy5fbWFya3NDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgICB0aGlzLl9tYXJrcyA9IEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG5ld1ZhbDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWFya3NDbGFzcykge1xuICAgICAgICB0aGlzLl9tYXJrcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgICAgIHRoaXMuX21hcmtzQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsKSkge1xuICAgICAgICB0aGlzLl9tYXJrc0xpc3QgPSB2YWwgYXMgTHlTbGlkZXJNYXJrW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXJrc0xpc3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya3M6IGJvb2xlYW4gfCBMeVNsaWRlck1hcmtbXTtcbiAgcHJpdmF0ZSBfbWFya3NDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgX21hcmtzTGlzdD86IEx5U2xpZGVyTWFya1tdIHwgbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHRvTnVtYmVyKHYsIHRoaXMuX21heCk7XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgbWluaW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIHNldCBtaW4odjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluID0gdG9OdW1iZXIodiwgdGhpcy5fbWluKTtcblxuICAgIC8vIElmIHRoZSB2YWx1ZSB3YXNuJ3QgZXhwbGljaXRseSBzZXQgYnkgdGhlIHVzZXIsIHNldCBpdCB0byB0aGUgbWluLlxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX21pbjtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgc2xpZGVyIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgICBgJHtMeVNsaWRlci7QuH0uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgICAgICAgICBpZiAodGhlbWUuc2xpZGVyICYmIHRoZW1lLnNsaWRlci5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2VbdmFsXTtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcHBlYXJhbmNlIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgPyBhcHBlYXJhbmNlLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKGNsYXNzZXMpKS5jc3NcbiAgICAgICAgICAgICAgICA6IGFwcGVhcmFuY2UoY2xhc3NlcywgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLnNsaWRlci5hcHBlYXJhbmNlYCk7XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICAvKiogQ29sb3Igb2YgU2xpZGVyICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICBjb25zdCBzdHlsZUtleSA9IGAke0x5U2xpZGVyLtC4fS5jb2xvcjoke3ZhbH1gO1xuXG4gICAgY29uc3QgbmV3U3R5bGUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcblxuICAgICAgaWYgKHRoZW1lLnNsaWRlciAmJiB0aGVtZS5zbGlkZXIuY29sb3IpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29sb3IgPSB0aGVtZS5zbGlkZXIuY29sb3I7XG4gICAgICAgIGlmIChzbGlkZXJDb2xvcikge1xuICAgICAgICAgIHJldHVybiBzbGlkZXJDb2xvciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgPyAoc2xpZGVyQ29sb3IpLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKF9fLCBjb2xvcikpLmNzc1xuICAgICAgICAgICAgOiBzbGlkZXJDb2xvcihfXywgY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuc2xpZGVyLmNvbG9yYCk7XG4gICAgfTtcbiAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgc3R5bGVLZXksXG4gICAgICBuZXdTdHlsZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZICsgMSxcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3NcbiAgICApO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyB2ZXJ0aWNhbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBzZXQgdmVydGljYWwodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fdmVydGljYWwgPSBuZXdWYWw7XG5cbiAgICBjb25zdCBuZXdDbGFzcyA9IG5ld1ZhbFxuICAgICAgPyB0aGlzLmNsYXNzZXMudmVydGljYWxcbiAgICAgIDogdGhpcy5jbGFzc2VzLmhvcml6b250YWw7XG5cbiAgICB0aGlzLl92ZXJ0aWNhbENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fcmVuZGVyZXIsXG4gICAgICBuZXdDbGFzcyxcbiAgICAgIHRoaXMuX3ZlcnRpY2FsQ2xhc3MgYXMgYW55KTtcbiAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoZSB2YWx1ZXMgYXQgd2hpY2ggdGhlIHRodW1iIHdpbGwgc25hcC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0ZXAoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3N0ZXA7IH1cbiAgc2V0IHN0ZXAodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RlcCA9IHRvTnVtYmVyKHYsIHRoaXMuX3N0ZXApO1xuXG4gICAgdGhpcy5fc3RlcFByZWNpc2lvbiA9IHRoaXMuX3N0ZXAgJSAxICE9PSAwXG4gICAgICA/IHRoaXMuX3N0ZXAudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aFxuICAgICAgOiBudWxsO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsdWUgb2YgYSBzbGlkZXIsIHRoaXMgY2FuIGJlIGEgbnVtYmVyIG9yIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAqIElmIHRoZSBhcnJheSBvZiBudW1iZXJzIGhhcyBtb3JlIHRoYW4gb25lIHZhbHVlLFxuICAgKiB0aGVuIHRoaXMgd2lsbCBjcmVhdGUgbW9yZSB0aHVtYnNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbDogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KG5ld1ZhbHVlLnRvRml4ZWQodGhpcy5fc3RlcFByZWNpc2lvbiBhcyBudW1iZXIpKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWVJc0FycmF5ICYmICFhcnJheUVxdWFscyh0aGlzLl92YWx1ZSwgdmFsKSkge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWwgYXMgbnVtYmVyW107XG4gICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUubWFwKFxuICAgICAgICAgIF92YWwgPT4gX3ZhbCA9PT0gbnVsbFxuICAgICAgICAgID8gX3ZhbFxuICAgICAgICAgIDogcGFyc2VGbG9hdChfdmFsLnRvRml4ZWQodGhpcy5fc3RlcFByZWNpc2lvbiBhcyBudW1iZXIpKSk7XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RodW1icyA9ICh2YWx1ZUlzQXJyYXkgP1xuICAgICAgICB0aGlzLl92YWx1ZSBhcyAobnVtYmVyIHwgbnVsbClbXVxuICAgICAgICA6IFt0aGlzLl92YWx1ZSBhcyBudW1iZXIgfCBudWxsXSkubWFwKCh2LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogdG9OdW1iZXIodiwgdGhpcy5taW4pLFxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogbnVsbCxcbiAgICAgICAgICBwZXJjZW50OiBudWxsLFxuICAgICAgICAgIHN0eWxlczoge31cbiAgICAgICAgfSkpO1xuXG4gICAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjb25zdCBzdHlsZUtleSA9IGAke0x5U2xpZGVyLtC4fS5kaXNhYmxlZDoke3ZhbH0tJHtjb2xvcn1gO1xuICAgICAgICBsZXQgbmV3U3R5bGU6ICgodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUpO1xuICAgICAgICBuZXdTdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsciA9IHRoZW1lLmNvbG9yT2YoY29sb3IpO1xuICAgICAgICAgIGNvbnN0IF9fID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG5cbiAgICAgICAgICBpZiAodGhlbWUuc2xpZGVyICYmIHRoZW1lLnNsaWRlci5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyQ29sb3IgPSB0aGVtZS5zbGlkZXIuZGlzYWJsZWQ7XG4gICAgICAgICAgICBpZiAoc2xpZGVyQ29sb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlckNvbG9yIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgPyAoc2xpZGVyQ29sb3IpLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKF9fLCBjbHIpKS5jc3NcbiAgICAgICAgICAgICAgICA6IHNsaWRlckNvbG9yKF9fLCBjbHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuc2xpZGVyLmNvbG9yYCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgICAgIHN0eWxlS2V5LFxuICAgICAgICAgIG5ld1N0eWxlLFxuICAgICAgICAgIFNUWUxFX1BSSU9SSVRZICsgMS41LFxuICAgICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3NcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5faG9zdENsYXNzLmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gbmV3Q2xhc3M7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5faG9zdENsYXNzLnJlbW92ZSh0aGlzLl9kaXNhYmxlZENsYXNzKTtcbiAgICAgICAgdGhpcy5faG9zdENsYXNzLnJlbW92ZSh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgdGh1bWIgbGFiZWwsIGJ1dCBpZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIsXG4gICAqIGl0IHdpbGwgc2hvdyB0aWNrcyBhY2NvcmRpbmcgdG8gdGhlIHN0ZXBzLiBGb3IgZXhhbXBsZTogaWYgeW91IHNldFxuICAgKiAzIHRpY2tzIHdpdGggYSBzdGVwIG9mIDEwLCB5b3Ugd2lsbCBkcmF3IGEgdGljayBldmVyeSAzMCB2YWx1ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0aWNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlja3M7XG4gIH1cbiAgc2V0IHRpY2tzKHZhbDogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdG9OdW1iZXIodmFsLCB0b0Jvb2xlYW4odmFsKSk7XG4gICAgdGhpcy5fdGlja3MgPSBuZXdWYWx1ZTtcbiAgfVxuICBwcml2YXRlIF90aWNrczogbnVtYmVyIHwgYm9vbGVhbjtcbiAgX3RpY2tJbnRlcnZhbDogbnVtYmVyO1xuICBnZXQgX3RpY2tMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9fdGlja0xpc3Q7XG4gIH1cbiAgcHJpdmF0ZSBfX3RpY2tMaXN0OiBudW1iZXJbXTtcbiAgLy8gcHJpdmF0ZSBfbmdDbGFzczogTmdDbGFzcztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3MsXG4gICAgcHJpdmF0ZSBfc3I6IFN0eWxlUmVuZGVyZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9TTElERVJfREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIF9kZWZhdWx0OiBMeVNsaWRlckRlZmF1bHRPcHRpb25zXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlVGlja1ZhbHVlcygpO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLl90aGVtZS5kaXJlY3Rpb25DaGFuZ2VkLnBpcGUodW50aWxDb21wb25lbnREZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IGFwcGVhcmFuY2UgKi9cbiAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICh0aGlzLl9kZWZhdWx0ICYmIHRoaXMuX2RlZmF1bHQuYXBwZWFyYW5jZSkgfHwgJ3N0YW5kYXJkJztcbiAgICB9XG5cbiAgICAvKiogU2V0IGhvcml6b250YWwgc2xpZGVyICovXG4gICAgaWYgKHRoaXMudmVydGljYWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBjb2xvciAqL1xuICAgIGlmICh0aGlzLmNvbG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnYWNjZW50JztcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgc3RlcCAqL1xuICAgIGlmICh0aGlzLnN0ZXAgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgc2VsZWN0LiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgcmVxdWlyZWRcbiAgICogdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgX29uRm9jdXModGh1bWI6IFRodW1iKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfb25CbHVyKHRodW1iOiBUaHVtYikge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGh1bWIuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9vblRhcChldmVudDogSGFtbWVySW5wdXQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGFydFNsaWRlKCk7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICB0aGlzLl9vblNsaWRlRW5kKCk7XG4gIH1cblxuICBfb25TbGlkZShldmVudDogSGFtbWVySW5wdXQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0U2xpZGUoKTtcblxuICAgIGlmIChldmVudFsnaXNGaW5hbCddKSB7XG4gICAgICBpZiAoZXZlbnRbJ3BvaW50ZXJUeXBlJ10gPT09ICd0b3VjaCcgJiYgZXZlbnQuY2VudGVyLnggPT09IDAgJiYgZXZlbnQuY2VudGVyLnkgPT09IDApIHtcbiAgICAgICAgLy8gcmVzdG9yZSB0byBpbml0aWFsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKGV2ZW50LmNlbnRlci54LCBldmVudC5jZW50ZXIueSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vblNsaWRlRW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKGV2ZW50LmNlbnRlci54LCBldmVudC5jZW50ZXIueSk7XG4gICAgfVxuXG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5fZW1pdElucHV0RXZlbnQoKTtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0U2xpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGluZyk7XG5cbiAgICAgIC8vIGNsb25lXG4gICAgICB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCA9IEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlLnNsaWNlKDApIDogdGhpcy52YWx1ZTtcblxuICAgICAgdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0ID0gdGhpcy5fdGh1bWJzLnNsaWNlKDApLm1hcCh0ID0+ICh7Li4udH0pKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRSZWN0ID0gdGhpcy5fYmchLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICB9XG4gIH1cblxuICBfb25TbGlkZUVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkaW5nKTtcblxuICAgICAgaWYgKCF2YWx1ZUVxdWFscyh0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCwgdGhpcy52YWx1ZSkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2Nsb3Nlc3RJbmRleCA9IG51bGw7XG4gICAgICB0aGlzLl9jdXJyZW50UmVjdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgX3RyYWNrQnlGbihfaW5kZXg6IG51bWJlciwgaXRlbTogVGh1bWIpIHtcbiAgICByZXR1cm4gaXRlbS5pbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLl9iZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHcgPSB0aGlzLl9jdXJyZW50UmVjdCEud2lkdGg7XG4gICAgY29uc3QgaCA9IHRoaXMuX2N1cnJlbnRSZWN0IS5oZWlnaHQ7XG4gICAgeCAtPSB0aGlzLl9jdXJyZW50UmVjdCEueDtcbiAgICB5IC09IHRoaXMuX2N1cnJlbnRSZWN0IS55O1xuXG4gICAgbGV0IHBlcmNlbnQgPSBjbGFtcChcbiAgICAgIHRoaXMudmVydGljYWxcbiAgICAgICAgPyDQs3ZhbHVlVG9QZXJjZW50KHksIDAsIGgpXG4gICAgICAgIDog0LN2YWx1ZVRvUGVyY2VudCh4LCAwLCB3KSxcbiAgICAgIDAsXG4gICAgICAxMDApO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwgfHwgKCF0aGlzLnZlcnRpY2FsICYmIHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09IERpci5ydGwpKSB7XG4gICAgICBwZXJjZW50ID0gMTAwIC0gcGVyY2VudDtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWU6IG51bWJlcjtcblxuICAgIGlmIChwZXJjZW50ID09PSAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWluO1xuICAgIH0gZWxzZSBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuX3JvdW5kVmFsdWVUb1N0ZXAocGVyY2VudFRvVmFsdWUocGVyY2VudCwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG9zZXN0SW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY2xvc2VzdEluZGV4ID0gZmluZENsb3Nlc3QodGhpcy5fdGh1bWJzLm1hcCh0aHVtYiA9PiB0aHVtYi52YWx1ZSksIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRodW1iID0gdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0IVt0aGlzLl9jbG9zZXN0SW5kZXhdO1xuICAgIHRoaXMuX3NsaWRpbmdUaHVtYlZhbHVlID0gY3VycmVudFRodW1iLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQhLm1hcCh0aHVtYiA9PiB0aHVtYi52YWx1ZSkuc29ydChBU0MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gZm9jdXMgc2xpZGluZ1RodW1iXG4gICAgY29uc3QgY3VycmVudFNsaWRpbmdUaHVtYjogVGh1bWIgfCB1bmRlZmluZWQgPSB0aGlzLl90aHVtYnMuZmluZCh0aHVtYiA9PiB0aHVtYi52YWx1ZSA9PT0gdmFsdWUpITtcbiAgICBpZiAoY3VycmVudFNsaWRpbmdUaHVtYikge1xuICAgICAgY3VycmVudFNsaWRpbmdUaHVtYi5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RodW1ic1JlZiEudG9BcnJheSgpW2N1cnJlbnRTbGlkaW5nVGh1bWIuaW5kZXhdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUaHVtYnMoKSB7XG4gICAgdGhpcy5fdGh1bWJzLmZvckVhY2godGh1bWIgPT4ge1xuICAgICAgY29uc3QgdmFsID0gY2xhbXAodGh1bWIudmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICBjb25zdCBwZXJjZW50ID0g0LN2YWx1ZVRvUGVyY2VudCh2YWwsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLl9jYWxjdWxhdGVQb3NpdGlvbihwZXJjZW50KTtcbiAgICAgIHRodW1iLnZhbHVlID0gdmFsO1xuICAgICAgdGh1bWIuZGlzcGxheVZhbHVlID0gdGhpcy5fdHJhbnNmb3JtVmFsdWUodmFsKTtcbiAgICAgIHRodW1iLnBlcmNlbnQgPSBwZXJjZW50O1xuICAgICAgdGh1bWIuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGh1bWIuc3R5bGVzID0ge1xuICAgICAgICBbcG9zLnN0eWxlXTogcG9zLnZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fdXBkYXRlVHJhY2soKTtcbiAgfVxuXG4gIF9jYWxjdWxhdGVQb3NpdGlvbihwZXJjZW50OiBudW1iZXIpIHtcbiAgICBsZXQgc3R5bGU6IHN0cmluZztcbiAgICBjb25zdCB2YWx1ZSA9IGAke3BlcmNlbnR9JWA7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc3R5bGUgPSAnYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZSxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRyYWNrKCkge1xuICAgIGNvbnN0IHRyYWNrID0gdGhpcy5fdHJhY2s7XG4gICAgY29uc3QgdGh1bWJzID0gdGhpcy5fdGh1bWJzO1xuICAgIGNvbnN0IHRodW1ic1BlcmNlbnRzID0gdGh1bWJzLm1hcCh0aHVtYiA9PiB0aHVtYi5wZXJjZW50ISk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gICAgaWYgKHRodW1icy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRodW1ic1BlcmNlbnRzLnVuc2hpZnQoMCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWluUGVyY2VudCA9IHRoaXMuX21pblBlcmNlbnQgPSBNYXRoLm1pbiguLi50aHVtYnNQZXJjZW50cyk7XG4gICAgY29uc3QgbWF4UGVyY2VudCA9IHRoaXMuX21heFBlcmNlbnQgPSBNYXRoLm1heCguLi50aHVtYnNQZXJjZW50cyk7XG5cbiAgICBpZiAodHJhY2spIHtcblxuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5yaWdodCA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7KG1heFBlcmNlbnQgLSBtaW5QZXJjZW50KX0lYDtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHttaW5QZXJjZW50fSVgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke21heFBlcmNlbnQgLSBtaW5QZXJjZW50fSVgO1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlW2RpcmVjdGlvbl0gPSBgJHttaW5QZXJjZW50fSVgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBFbWl0cyBhIGNoYW5nZSBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fY3JlYXRlQ2hhbmdlRXZlbnQoKSk7XG4gIH1cblxuICAvKiogRW1pdHMgYW4gaW5wdXQgZXZlbnQuICovXG4gIHByaXZhdGUgX2VtaXRJbnB1dEV2ZW50KCkge1xuICAgIHRoaXMuaW5wdXQuZW1pdCh0aGlzLl9jcmVhdGVDaGFuZ2VFdmVudCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNoYW5nZUV2ZW50KHZhbHVlID0gdGhpcy52YWx1ZSkge1xuICAgIHJldHVybiBuZXcgTHlTbGlkZXJDaGFuZ2UodGhpcywgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcm91bmRWYWx1ZVRvU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcigoTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMuc3RlcCkgKiB0aGlzLnN0ZXApLnRvRml4ZWQodGhpcy5fc3RlcFByZWNpc2lvbiEpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zZm9ybVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5V2l0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheVdpdGgodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUaWNrVmFsdWVzKCkge1xuICAgIHRoaXMuX190aWNrTGlzdCA9IFtdO1xuICAgIGlmICghdGhpcy50aWNrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aWNrcyA9IHRoaXMudGlja3M7XG4gICAgICB0aGlzLl90aWNrSW50ZXJ2YWwgPSB0eXBlb2YgdGlja3MgPT09ICdudW1iZXInXG4gICAgICAgID8gdGhpcy5zdGVwICogdGlja3NcbiAgICAgICAgOiB0aGlzLnN0ZXA7XG5cbiAgICAgIHRoaXMuX190aWNrTGlzdCA9IFtdO1xuICAgICAgY29uc3QgdGlja0ludGVydmFscyA9IHRoaXMuX3RpY2tJbnRlcnZhbCArIDE7XG4gICAgICBjb25zdCBzdGVwV2l0aCA9IHRoaXMuX3RpY2tJbnRlcnZhbDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aWNrSW50ZXJ2YWxzOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMuX190aWNrTGlzdC5wdXNoKGNsYW1wKGluZGV4ICogc3RlcFdpdGgsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0KHZhbHVlczogbnVtYmVyW10sIGN1cnJlbnRWYWx1ZTogbnVtYmVyKSB7XG4gIGNvbnN0IHsgaW5kZXg6IGNsb3Nlc3RJbmRleCB9ID0gdmFsdWVzLnJlZHVjZTx7XG4gICAgZGlzdGFuY2U6IG51bWJlclxuICAgIGluZGV4OiBudW1iZXJcbiAgfSB8IG51bGw+KChwcmV2aW91c1ZhbHVlLCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnRWYWx1ZSAtIHZhbHVlKTtcblxuICAgIGlmIChwcmV2aW91c1ZhbHVlID09PSBudWxsIHx8IGRpc3RhbmNlIDwgcHJldmlvdXNWYWx1ZS5kaXN0YW5jZSB8fCBkaXN0YW5jZSA9PT0gcHJldmlvdXNWYWx1ZS5kaXN0YW5jZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGluZGV4LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAgfSwgbnVsbCkhO1xuICByZXR1cm4gY2xvc2VzdEluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24g0LN2YWx1ZVRvUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuICgodmFsdWUgLSBtaW4pICogMTAwKSAvIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50VG9WYWx1ZShwZXJjZW50LCBtaW4sIG1heCkge1xuICByZXR1cm4gKG1heCAtIG1pbikgKiAocGVyY2VudCAvIDEwMCkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGFycmF5RXF1YWxzKGFycmF5MTogYW55LCBhcnJheTI6IGFueSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheTEpICYmIEFycmF5LmlzQXJyYXkoYXJyYXkyKSAmJiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoXG4gICAgJiYgYXJyYXkxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBhcnJheTJbaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gdmFsdWVFcXVhbHModmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCwgdmFsdWUyOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwpIHtcbiAgaWYgKHZhbHVlID09PSB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYXJyYXlFcXVhbHModmFsdWUsIHZhbHVlMik7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmICh2YWx1ZSA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24g0LNiZXR3ZWVuKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbn1cblxuZnVuY3Rpb24gQVNDKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBhIC0gYjtcbn1cbiJdfQ==