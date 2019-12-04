import { __decorate, __param } from 'tslib';
import { InjectionToken, forwardRef, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, Optional, Inject, ViewChild, ViewChildren, Input, Output, Component, ChangeDetectionStrategy, Directive, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, LY_COMMON_STYLES, Dir, toBoolean, toNumber, untilComponentDestroyed, LyTheme2, LyHostClass, StyleRenderer, LyCommonModule } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

var LySlider_1;
const LY_SLIDER_DEFAULT_OPTIONS = new InjectionToken('LY_SLIDER_DEFAULT_OPTIONS');
const LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
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
__decorate([
    ViewChild('bg', { static: false })
], LySlider.prototype, "_bg", void 0);
__decorate([
    ViewChild('track', { static: true })
], LySlider.prototype, "_track", void 0);
__decorate([
    ViewChild('ticksRef', { static: true })
], LySlider.prototype, "_ticksRef", void 0);
__decorate([
    ViewChildren('thumbsRef')
], LySlider.prototype, "_thumbsRef", void 0);
__decorate([
    Input()
], LySlider.prototype, "displayWith", void 0);
__decorate([
    Output()
], LySlider.prototype, "change", void 0);
__decorate([
    Output()
], LySlider.prototype, "input", void 0);
__decorate([
    Output()
], LySlider.prototype, "valueChange", void 0);
__decorate([
    Input()
], LySlider.prototype, "thumbVisible", null);
__decorate([
    Input()
], LySlider.prototype, "marks", null);
__decorate([
    Input()
], LySlider.prototype, "max", null);
__decorate([
    Input()
], LySlider.prototype, "min", null);
__decorate([
    Input()
], LySlider.prototype, "appearance", null);
__decorate([
    Input()
], LySlider.prototype, "color", null);
__decorate([
    Input()
], LySlider.prototype, "vertical", null);
__decorate([
    Input()
], LySlider.prototype, "step", null);
__decorate([
    Input()
], LySlider.prototype, "value", null);
__decorate([
    Input()
], LySlider.prototype, "disabled", null);
__decorate([
    Input()
], LySlider.prototype, "ticks", null);
LySlider = LySlider_1 = __decorate([
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
    __param(6, Optional()), __param(6, Inject(LY_SLIDER_DEFAULT_OPTIONS))
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
LyTick.ctorParameters = () => [
    { type: LySlider },
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input()
], LyTick.prototype, "value", void 0);
LyTick = __decorate([
    Directive({
        selector: 'ly-tick'
    })
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
LyMark.ctorParameters = () => [
    { type: LySlider },
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    ViewChild(LyTick, { static: true })
], LyMark.prototype, "_tick", void 0);
__decorate([
    Input()
], LyMark.prototype, "value", void 0);
LyMark = __decorate([
    Component({
        selector: 'ly-mark',
        template: "<ly-tick [value]=\"value\"></ly-tick>\n<ng-content></ng-content>",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
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

/**
 * Generated bundle index. Do not edit.
 */

export { LY_SLIDER_CONTROL_VALUE_ACCESSOR, LY_SLIDER_DEFAULT_OPTIONS, LySlider, LySliderChange, LySliderModule, ɵ0, LyMark as ɵa, LyTick as ɵb, гbetween, гvalueToPercent };
//# sourceMappingURL=alyle-ui-slider.js.map
