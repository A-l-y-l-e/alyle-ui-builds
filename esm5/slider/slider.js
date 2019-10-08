import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { LyTheme2, toBoolean, LY_COMMON_STYLES, getLyThemeStyleUndefinedError, toNumber, LyHostClass, untilComponentDestroyed, Dir } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
export var LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LySlider; }),
    multi: true
};
var STYLE_PRIORITY = -2;
var STYLES = function (theme) {
    var _a, _b, _c, _d;
    return ({
        $priority: STYLE_PRIORITY,
        root: (_a = {
                display: 'inline-block',
                position: 'relative',
                boxSizing: 'border-box',
                cursor: 'pointer',
                '{bg}': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 'auto' })
            },
            _a[[
                // always show visible thumb, when {thumbVisible} is available
                '&{thumbVisible} {thumb}',
                // on hover
                '&:not({thumbNotVisible}):not({disabled}) {thumbContent}:hover {thumb}',
                // on focused
                '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused} {thumb}'
            ].join()] = {
                borderRadius: '50% 50% 0%'
            },
            _a[[
                '&{thumbVisible} {thumbContent}::before',
                '&:not({thumbNotVisible}):not({disabled}) {thumbContent}:hover::before',
                '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused}::before'
            ].join()] = {
                transform: 'scale(1)'
            },
            _a['&'] = theme.slider ? theme.slider.root : null,
            _a),
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
                content: "''",
                position: 'absolute',
                opacity: .6,
                transform: 'scale(0)',
                transition: "transform " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms, background " + theme.animations.durations.complex + "ms " + theme.animations.curves.sharp + " 0ms"
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
            transition: ['border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.exiting + "ms " + theme.animations.curves.standard + " 0ms"; }).join(),
            '&::before': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { borderRadius: '50%', transition: ['box-shadow'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() })
        },
        thumbLabel: {
            position: 'absolute',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            top: '-14px',
            before: '-14px',
            transition: ['transform', 'top', 'left', 'right', 'border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join()
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
        horizontal: (_b = {
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
                }
            },
            _b[[
                // always show visible thumb, when {thumbVisible} is available
                '&{thumbVisible} {thumbLabel}',
                // on hover
                '&:not({disabled}) {thumbContent}:hover {thumbLabel}',
                // on focused
                '& {thumbContent}{thumbContentFocused} {thumbLabel}'
            ].join()] = {
                borderRadius: '50% 50% 0%',
                top: '-50px',
                transform: 'rotateZ(45deg) scale(1)'
            },
            _b['& {thumbLabelValue}'] = {
                transform: 'rotateZ(-45deg)'
            },
            _b['{thumbContainer}'] = {
                top: 0,
                bottom: 0
            },
            _b['& {thumbContent}::before'] = {
                width: '2px',
                height: '24px',
                left: '-1px',
                top: '-24px'
            },
            _b['{tick}'] = {
                width: '2px',
                height: 'inherit',
                top: 0,
                bottom: 0,
            },
            _b['{mark}'] = {
                top: '22px',
                transform: "translateX(" + (theme.direction === Dir.ltr ? '-' : '') + "50%)",
            },
            _b['&{marked}'] = {
                marginBottom: '24px'
            },
            _b),
        vertical: (_c = {
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
                }
            },
            _c[[
                // always show visible thumb, when {thumbVisible} is available
                '&{thumbVisible} {thumbLabel}',
                // on hover
                '&:not({disabled}) {thumbContent}:hover {thumbLabel}',
                // on focused
                '& {thumbContent}{thumbContentFocused} {thumbLabel}'
            ].join()] = {
                borderRadius: theme.direction === Dir.ltr ? '50% 50% 0%' : '0 50% 50% 50%',
                before: '-50px',
                transform: 'rotateZ(-45deg) scale(1)'
            },
            _c['& {thumbLabelValue}'] = {
                transform: 'rotateZ(45deg)'
            },
            _c['{thumbContainer}'] = {
                left: 0,
                right: 0
            },
            _c['{thumbContent}::before'] = {
                width: '24px',
                height: '2px',
                before: '-24px',
                top: '-1px'
            },
            _c['{tick}'] = {
                width: 'inherit',
                height: '2px',
                left: 0,
                right: 0
            },
            _c['{mark}'] = {
                before: '22px',
                transform: 'translateY(50%)',
            },
            _c['&{marked}'] = (_d = {},
                _d[theme.direction === Dir.ltr ? 'marginRight' : 'marginLeft'] = '24px',
                _d),
            _c),
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
};
var ɵ0 = STYLES;
/** A change event emitted by the LySlider component. */
var LySliderChange = /** @class */ (function () {
    function LySliderChange(
    /** The LySlider that changed. */
    source, 
    /** The new value of the source slider. */
    value) {
        this.source = source;
        this.value = value;
    }
    return LySliderChange;
}());
export { LySliderChange };
var LySlider = /** @class */ (function () {
    // private _ngClass: NgClass;
    function LySlider(_theme, _el, _renderer, _cd, _hostClass) {
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
        this.onTouched = function () { };
        this._controlValueAccessorChangeFn = function () { };
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    LySlider_1 = LySlider;
    Object.defineProperty(LySlider.prototype, "thumbVisible", {
        /** Whether or not to show the thumb. */
        get: function () {
            return this._thumbVisible;
        },
        set: function (val) {
            var newVal = val != null ? toBoolean(val) : null;
            if (newVal !== this.thumbVisible) {
                var thumbVisibleClass = this.classes.thumbVisible;
                var thumbNotVisibleClass = this.classes.thumbNotVisible;
                this._thumbVisible = newVal;
                this._hostClass.toggle(thumbVisibleClass, newVal === true);
                this._hostClass.toggle(thumbNotVisibleClass, newVal === false);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "marks", {
        /** Whether or not to show the marks, also accepts an array of marks. */
        get: function () {
            return this._marks;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.marks) {
                var newClass = this.classes.marked;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "max", {
        /** The maximum value that the slider can have. */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = toNumber(v, this._max);
            this._updateThumbs();
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "min", {
        /** The minimum value that the slider can have. */
        get: function () {
            return this._min;
        },
        set: function (v) {
            this._min = toNumber(v, this._min);
            // If the value wasn't explicitly set by the user, set it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            this._updateThumbs();
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        /** The slider appearance style. */
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle(LySlider_1.и + ".appearance:" + val, function (theme) {
                    var styleFn = theme.slider.appearance[val].appearance;
                    if (!styleFn) {
                        throw getLyThemeStyleUndefinedError(LySlider_1.и, 'appearance', val);
                    }
                    return styleFn(theme, val);
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "color", {
        /** Color of Slider */
        get: function () {
            return this._color;
        },
        set: function (val) {
            this._color = val;
            var appearance = this.appearance;
            var styleKey = LySlider_1.и + ".color:" + val;
            var newStyle = function (theme) {
                var color = theme.colorOf(val);
                return theme.slider.appearance[appearance].color(theme, color);
            };
            this._colorClass = this._theme.addStyle(styleKey, newStyle, this._el.nativeElement, this._colorClass, STYLE_PRIORITY + 1, STYLES);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "vertical", {
        /** Whether the slider is vertical. */
        get: function () {
            return this._vertical;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            this._vertical = newVal;
            var newClass = newVal
                ? this.classes.vertical
                : this.classes.horizontal;
            this._verticalClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._verticalClass);
            this._updateThumbs();
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "step", {
        /** The values at which the thumb will snap. */
        get: function () { return this._step; },
        set: function (v) {
            this._step = toNumber(v, this._step);
            this._stepPrecision = this._step % 1 !== 0
                ? this._step.toString().split('.')[1].length
                : null;
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "value", {
        /**
         * Value of a slider, this can be a number or an array of numbers.
         * If the array of numbers has more than one value,
         * then this will create more thumbs
         */
        get: function () {
            return this._value;
        },
        set: function (val) {
            var _this = this;
            if (val !== this._value) {
                var valueIsArray = Array.isArray(val);
                if (typeof val === 'number') {
                    var newValue = Number(val);
                    newValue = parseFloat(newValue.toFixed(this._stepPrecision));
                    this._value = newValue;
                }
                else if (valueIsArray && !arrayEquals(this._value, val)) {
                    var newValue = val;
                    newValue = newValue.map(function (_val) { return _val === null
                        ? _val
                        : parseFloat(_val.toFixed(_this._stepPrecision)); });
                    this._value = newValue;
                }
                this._thumbs = (valueIsArray ?
                    this._value
                    : [this._value]).map(function (v, index) { return ({
                    index: index,
                    value: toNumber(v, _this.min),
                    displayValue: null,
                    percent: null,
                    styles: {}
                }); });
                this._updateThumbs();
                this._cd.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "disabled", {
        /** Whether the slider is disabled. */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.disabled) {
                this._disabled = newVal;
                if (newVal) {
                    var appearance_1 = this.appearance;
                    var styleKey = LySlider_1.и + ".disabled:" + val;
                    var newStyle = void 0;
                    if (!this._theme.existStyle(styleKey)) {
                        var color_1 = this.color;
                        newStyle = function (theme) {
                            var colorCss = theme.colorOf(color_1);
                            return theme.slider.appearance[appearance_1].disabled(theme, colorCss);
                        };
                    }
                    var newClass = this._theme.addStyle(styleKey, newStyle, this._el.nativeElement, this._disabledClass, STYLE_PRIORITY + 2, STYLES);
                    this._renderer.addClass(this._getHostElement(), this.classes.disabled);
                    this._disabledClass = newClass;
                }
                else if (this._disabledClass) {
                    this._renderer.removeClass(this._getHostElement(), this._disabledClass);
                    this._renderer.removeClass(this._getHostElement(), this.classes.disabled);
                    this._disabledClass = null;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "ticks", {
        /**
         * Whether or not to show the thumb label, but if the value is a number,
         * it will show ticks according to the steps. For example: if you set
         * 3 ticks with a step of 10, you will draw a tick every 30 values
         */
        get: function () {
            return this._ticks;
        },
        set: function (val) {
            var newValue = toNumber(val, toBoolean(val));
            this._ticks = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LySlider.prototype, "_tickList", {
        get: function () {
            return this.__tickList;
        },
        enumerable: true,
        configurable: true
    });
    LySlider.prototype.ngOnChanges = function () {
        this._updateTickValues();
        this._changes.next();
    };
    LySlider.prototype.ngOnInit = function () {
        var _this = this;
        this._theme.directionChanged.pipe(untilComponentDestroyed(this)).subscribe(function () {
            _this.ngOnChanges();
            _this._updateThumbs();
            _this._cd.markForCheck();
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
    };
    LySlider.prototype.ngOnDestroy = function () {
        this._changes.complete();
    };
    LySlider.prototype.writeValue = function (value) {
        this.value = value;
        this._changes.next();
    };
    /**
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    LySlider.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    LySlider.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    LySlider.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    LySlider.prototype._onFocus = function (thumb) {
        if (!this.disabled) {
            thumb.focused = true;
        }
    };
    LySlider.prototype._onBlur = function (thumb) {
        if (!this.disabled) {
            thumb.focused = false;
        }
    };
    LySlider.prototype._onTap = function (event) {
        if (this.disabled) {
            return;
        }
        this._startSlide();
        this._updateValueFromPosition(event.center.x, event.center.y);
        this._onSlideEnd();
    };
    LySlider.prototype._onSlide = function (event) {
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
    };
    LySlider.prototype._startSlide = function () {
        if (!this._isSliding) {
            this._isSliding = true;
            this._renderer.addClass(this._el.nativeElement, this.classes.sliding);
            // clone
            this._valueOnSlideStart = Array.isArray(this.value) ? this.value.slice(0) : this.value;
            this._thumbsOnSlideStart = this._thumbs.slice(0).map(function (t) { return (tslib_1.__assign({}, t)); });
            this._currentRect = this._bg.nativeElement.getBoundingClientRect();
        }
    };
    LySlider.prototype._onSlideEnd = function () {
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
    };
    LySlider.prototype._trackByFn = function (_index, item) {
        return item.index;
    };
    LySlider.prototype._updateValueFromPosition = function (x, y) {
        if (!this._bg) {
            return;
        }
        var w = this._currentRect.width;
        var h = this._currentRect.height;
        x -= this._currentRect.x;
        y -= this._currentRect.y;
        var percent = clamp(this.vertical
            ? гvalueToPercent(y, 0, h)
            : гvalueToPercent(x, 0, w), 0, 100);
        if (this.vertical || (!this.vertical && this._theme.variables.direction === Dir.rtl)) {
            percent = 100 - percent;
        }
        var value;
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
            this._closestIndex = findClosest(this._thumbs.map(function (thumb) { return thumb.value; }), value);
        }
        var currentThumb = this._thumbsOnSlideStart[this._closestIndex];
        this._slidingThumbValue = currentThumb.value = value;
        if (Array.isArray(this.value)) {
            this.value = this._thumbsOnSlideStart.map(function (thumb) { return thumb.value; }).sort(ASC);
        }
        else {
            this.value = value;
        }
        // focus slidingThumb
        var currentSlidingThumb = this._thumbs.find(function (thumb) { return thumb.value === value; });
        if (currentSlidingThumb) {
            currentSlidingThumb.focused = true;
            this._thumbsRef.toArray()[currentSlidingThumb.index].nativeElement.focus();
        }
    };
    LySlider.prototype._updateThumbs = function () {
        var _this = this;
        this._thumbs.forEach(function (thumb) {
            var _a;
            var val = clamp(thumb.value, _this.min, _this.max);
            var percent = гvalueToPercent(val, _this.min, _this.max);
            var pos = _this._calculatePosition(percent);
            thumb.value = val;
            thumb.displayValue = _this._transformValue(val);
            thumb.percent = percent;
            thumb.focused = false;
            thumb.styles = (_a = {},
                _a[pos.style] = pos.value,
                _a);
        });
        this._updateTrack();
    };
    LySlider.prototype._calculatePosition = function (percent) {
        var style;
        var value = percent + "%";
        if (this.vertical) {
            style = 'bottom';
        }
        else {
            style = this._theme.variables.direction === 'rtl' ? 'right' : 'left';
        }
        return {
            style: style,
            value: value
        };
    };
    LySlider.prototype._updateTrack = function () {
        var track = this._track;
        var thumbs = this._thumbs;
        var thumbsPercents = thumbs.map(function (thumb) { return thumb.percent; });
        var direction = this._theme.variables.direction === 'rtl' ? 'right' : 'left';
        if (thumbs.length === 1) {
            thumbsPercents.unshift(0);
        }
        var minPercent = this._minPercent = Math.min.apply(Math, tslib_1.__spread(thumbsPercents));
        var maxPercent = this._maxPercent = Math.max.apply(Math, tslib_1.__spread(thumbsPercents));
        if (track) {
            track.nativeElement.style.width = null;
            track.nativeElement.style.height = null;
            track.nativeElement.style.left = null;
            track.nativeElement.style.right = null;
            if (this.vertical) {
                track.nativeElement.style.height = (maxPercent - minPercent) + "%";
                track.nativeElement.style.bottom = minPercent + "%";
            }
            else {
                track.nativeElement.style.width = maxPercent - minPercent + "%";
                track.nativeElement.style[direction] = minPercent + "%";
            }
        }
    };
    /** Emits a change event. */
    LySlider.prototype._emitChangeEvent = function () {
        this._controlValueAccessorChangeFn(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this._createChangeEvent());
    };
    /** Emits an input event. */
    LySlider.prototype._emitInputEvent = function () {
        this.input.emit(this._createChangeEvent());
    };
    LySlider.prototype._createChangeEvent = function (value) {
        if (value === void 0) { value = this.value; }
        return new LySliderChange(this, value);
    };
    LySlider.prototype._roundValueToStep = function (value) {
        return Number((Math.round(value / this.step) * this.step).toFixed(this._stepPrecision));
    };
    LySlider.prototype._transformValue = function (value) {
        if (this.displayWith) {
            return this.displayWith(value);
        }
        return value;
    };
    LySlider.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LySlider.prototype._updateTickValues = function () {
        this.__tickList = [];
        if (!this.ticks) {
            return false;
        }
        else {
            var ticks = this.ticks;
            this._tickInterval = typeof ticks === 'number'
                ? this.step * ticks
                : this.step;
            this.__tickList = [];
            var tickIntervals = this._tickInterval + 1;
            var stepWith = this._tickInterval;
            for (var index = 0; index < tickIntervals; index++) {
                this.__tickList.push(clamp(index * stepWith, this.min, this.max));
            }
        }
        this._cd.markForCheck();
    };
    var LySlider_1;
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
    return LySlider;
}());
export { LySlider };
function findClosest(values, currentValue) {
    var closestIndex = values.reduce(function (previousValue, value, index) {
        var distance = Math.abs(currentValue - value);
        if (previousValue === null || distance < previousValue.distance || distance === previousValue.distance) {
            return {
                distance: distance,
                index: index,
            };
        }
        return previousValue;
    }, null).index;
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
        && array1.every(function (value, index) { return value === array2[index]; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFHVCxTQUFTLEVBQ1QsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBRWYsU0FBUyxFQUNULGdCQUFnQixFQUNoQiw2QkFBNkIsRUFFN0IsUUFBUSxFQUVSLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsR0FBRyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRXhCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTS9CLE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQztJQUN2QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQStCOztJQUFLLE9BQUEsQ0FBQztRQUNuRCxTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJO2dCQUNGLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixNQUFNLHVCQUNELGdCQUFnQixDQUFDLElBQUksSUFDeEIsTUFBTSxFQUFFLE1BQU0sR0FDZjs7WUFDRCxHQUNFO2dC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cEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNmLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQVMsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUMxRCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIGdldEx5VGhlbWVTdHlsZVVuZGVmaW5lZEVycm9yLFxuICBIYW1tZXJJbnB1dCxcbiAgdG9OdW1iZXIsXG4gIFN0eWxlRGVjbGFyYXRpb25zQmxvY2ssXG4gIEx5SG9zdENsYXNzLFxuICB1bnRpbENvbXBvbmVudERlc3Ryb3llZCxcbiAgRGlyfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU2xpZGVyVmFyaWFibGVzIH0gZnJvbSAnLi9zbGlkZXIuY29uZmlnJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIFRoZW1lVmFyaWFibGVzV2l0aFNsaWRlciBleHRlbmRzIFRoZW1lVmFyaWFibGVzIHtcbiAgc2xpZGVyOiBTbGlkZXJWYXJpYWJsZXM7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5U2xpZGVyKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzV2l0aFNsaWRlcikgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICd7Ymd9Jzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9LFxuICAgIFtcbiAgICAgIFtcbiAgICAgICAgLy8gYWx3YXlzIHNob3cgdmlzaWJsZSB0aHVtYiwgd2hlbiB7dGh1bWJWaXNpYmxlfSBpcyBhdmFpbGFibGVcbiAgICAgICAgJyZ7dGh1bWJWaXNpYmxlfSB7dGh1bWJ9JyxcbiAgICAgICAgLy8gb24gaG92ZXJcbiAgICAgICAgJyY6bm90KHt0aHVtYk5vdFZpc2libGV9KTpub3Qoe2Rpc2FibGVkfSkge3RodW1iQ29udGVudH06aG92ZXIge3RodW1ifScsXG4gICAgICAgIC8vIG9uIGZvY3VzZWRcbiAgICAgICAgJyY6bm90KHt0aHVtYk5vdFZpc2libGV9KSB7dGh1bWJDb250ZW50fXt0aHVtYkNvbnRlbnRGb2N1c2VkfSB7dGh1bWJ9J1xuICAgICAgXS5qb2luKClcbiAgICBdOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUgNTAlIDAlJ1xuICAgIH0sXG4gICAgW1xuICAgICAgW1xuICAgICAgICAnJnt0aHVtYlZpc2libGV9IHt0aHVtYkNvbnRlbnR9OjpiZWZvcmUnLFxuICAgICAgICAnJjpub3Qoe3RodW1iTm90VmlzaWJsZX0pOm5vdCh7ZGlzYWJsZWR9KSB7dGh1bWJDb250ZW50fTpob3Zlcjo6YmVmb3JlJyxcbiAgICAgICAgJyY6bm90KHt0aHVtYk5vdFZpc2libGV9KSB7dGh1bWJDb250ZW50fXt0aHVtYkNvbnRlbnRGb2N1c2VkfTo6YmVmb3JlJ1xuICAgICAgXS5qb2luKClcbiAgICBdOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9LFxuICAgICcmJzogdGhlbWUuc2xpZGVyID8gdGhlbWUuc2xpZGVyLnJvb3QgOiBudWxsXG4gIH0sXG5cbiAgdHJhY2s6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICBiZzogeyB9LFxuICB0aHVtYkNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICB0aHVtYkNvbnRlbnQ6IHtcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3BhY2l0eTogLjYsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zLCBiYWNrZ3JvdW5kICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXhcbiAgICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXNgXG4gICAgfVxuICB9LFxuICB0aHVtYjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTJweCcsXG4gICAgaGVpZ2h0OiAnMTJweCcsXG4gICAgbGVmdDogJy02cHgnLFxuICAgIHRvcDogJy02cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgb3V0bGluZTogMCxcbiAgICB0cmFuc2l0aW9uOiBbJ2JvcmRlci1yYWRpdXMnXS5tYXAocHJvcCA9PiBgJHtwcm9wfSAke1xuICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZXhpdGluZ1xuICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAwbXNgKS5qb2luKCksXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogWydib3gtc2hhZG93J10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmdcbiAgICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXNgKS5qb2luKClcbiAgICB9XG4gIH0sXG4gIHRodW1iTGFiZWw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzI4cHgnLFxuICAgIGhlaWdodDogJzI4cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdG9wOiAnLTE0cHgnLFxuICAgIGJlZm9yZTogJy0xNHB4JyxcbiAgICB0cmFuc2l0aW9uOiBbJ3RyYW5zZm9ybScsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3JkZXItcmFkaXVzJ10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gICAgfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtc2ApLmpvaW4oKVxuICB9LFxuICB0aHVtYkxhYmVsVmFsdWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJyNmZmYnXG4gIH0sXG5cbiAgaG9yaXpvbnRhbDoge1xuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgcGFkZGluZzogJzEwcHggMCcsXG4gICAgdG91Y2hBY3Rpb246ICdwYW4teSAhaW1wb3J0YW50JyxcbiAgICAnJiB7dHJhY2t9LCAmIHtiZ30nOiB7XG4gICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgJ3t0cmFja30nOiB7XG4gICAgICBiZWZvcmU6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDBcbiAgICB9LFxuICAgICcmIHt0aHVtYn0nOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC0xMzVkZWcpJ1xuICAgIH0sXG5cbiAgICAne3RodW1iTGFiZWx9Jzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZykgc2NhbGUoMCknLFxuICAgIH0sXG4gICAgW1xuICAgICAgW1xuICAgICAgICAvLyBhbHdheXMgc2hvdyB2aXNpYmxlIHRodW1iLCB3aGVuIHt0aHVtYlZpc2libGV9IGlzIGF2YWlsYWJsZVxuICAgICAgICAnJnt0aHVtYlZpc2libGV9IHt0aHVtYkxhYmVsfScsXG4gICAgICAgIC8vIG9uIGhvdmVyXG4gICAgICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7dGh1bWJDb250ZW50fTpob3ZlciB7dGh1bWJMYWJlbH0nLFxuICAgICAgICAvLyBvbiBmb2N1c2VkXG4gICAgICAgICcmIHt0aHVtYkNvbnRlbnR9e3RodW1iQ29udGVudEZvY3VzZWR9IHt0aHVtYkxhYmVsfSdcbiAgICAgIF0uam9pbigpXG4gICAgXToge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlIDUwJSAwJScsXG4gICAgICB0b3A6ICctNTBweCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKSBzY2FsZSgxKSdcbiAgICB9LFxuXG4gICAgJyYge3RodW1iTGFiZWxWYWx1ZX0nOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZyknXG4gICAgfSxcbiAgICAne3RodW1iQ29udGFpbmVyfSc6IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMFxuICAgIH0sXG4gICAgJyYge3RodW1iQ29udGVudH06OmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAnMnB4JyxcbiAgICAgIGhlaWdodDogJzI0cHgnLFxuICAgICAgbGVmdDogJy0xcHgnLFxuICAgICAgdG9wOiAnLTI0cHgnXG4gICAgfSxcblxuICAgICd7dGlja30nOiB7XG4gICAgICB3aWR0aDogJzJweCcsXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICB9LFxuICAgICd7bWFya30nOiB7XG4gICAgICB0b3A6ICcyMnB4JyxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnLScgOiAnJ301MCUpYCxcbiAgICB9LFxuICAgICcme21hcmtlZH0nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcyNHB4J1xuICAgIH1cbiAgfSxcbiAgdmVydGljYWw6IHtcbiAgICB3aWR0aDogJzJweCcsXG4gICAgaGVpZ2h0OiAnMTIwcHgnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgIHRvdWNoQWN0aW9uOiAncGFuLXggIWltcG9ydGFudCcsXG4gICAgJyYge3RyYWNrfSwgJiB7Ymd9Jzoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzJweCdcbiAgICB9LFxuICAgICd7dHJhY2t9Jzoge1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfSxcbiAgICAnJiB7dGh1bWJ9Jzoge1xuICAgICAgdHJhbnNmb3JtOiB0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAncm90YXRlWigxMzVkZWcpJyA6ICdyb3RhdGVaKC00NWRlZyknXG4gICAgfSxcbiAgICAnJiB7dGh1bWJMYWJlbH0nOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZykgc2NhbGUoMCknXG4gICAgfSxcbiAgICBbXG4gICAgICBbXG4gICAgICAgIC8vIGFsd2F5cyBzaG93IHZpc2libGUgdGh1bWIsIHdoZW4ge3RodW1iVmlzaWJsZX0gaXMgYXZhaWxhYmxlXG4gICAgICAgICcme3RodW1iVmlzaWJsZX0ge3RodW1iTGFiZWx9JyxcbiAgICAgICAgLy8gb24gaG92ZXJcbiAgICAgICAgJyY6bm90KHtkaXNhYmxlZH0pIHt0aHVtYkNvbnRlbnR9OmhvdmVyIHt0aHVtYkxhYmVsfScsXG4gICAgICAgIC8vIG9uIGZvY3VzZWRcbiAgICAgICAgJyYge3RodW1iQ29udGVudH17dGh1bWJDb250ZW50Rm9jdXNlZH0ge3RodW1iTGFiZWx9J1xuICAgICAgXS5qb2luKClcbiAgICBdOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICc1MCUgNTAlIDAlJyA6ICcwIDUwJSA1MCUgNTAlJyxcbiAgICAgIGJlZm9yZTogJy01MHB4JyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooLTQ1ZGVnKSBzY2FsZSgxKSdcbiAgICB9LFxuXG4gICAgJyYge3RodW1iTGFiZWxWYWx1ZX0nOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKSdcbiAgICB9LFxuICAgICd7dGh1bWJDb250YWluZXJ9Jzoge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfSxcbiAgICAne3RodW1iQ29udGVudH06OmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAnMjRweCcsXG4gICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgYmVmb3JlOiAnLTI0cHgnLFxuICAgICAgdG9wOiAnLTFweCdcbiAgICB9LFxuICAgICd7dGlja30nOiB7XG4gICAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH0sXG4gICAgJ3ttYXJrfSc6IHtcbiAgICAgIGJlZm9yZTogJzIycHgnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg1MCUpJyxcbiAgICB9LFxuICAgICcme21hcmtlZH0nOiB7XG4gICAgICBbdGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0J106ICcyNHB4J1xuICAgIH1cbiAgfSxcblxuICBtYXJrZWQ6IHsgfSxcbiAgbWFyazoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5XG4gIH0sXG4gIG1hcmtBY3RpdmU6IHtcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGljazoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1hcmdpbjogJ2F1dG8nXG4gIH0sXG4gIHRpY2tBY3RpdmU6IHt9LFxuXG4gIHRodW1iVmlzaWJsZTogbnVsbCxcbiAgdGh1bWJOb3RWaXNpYmxlOiBudWxsLFxuICB0aHVtYkNvbnRlbnRGb2N1c2VkOiBudWxsLFxuICBzbGlkaW5nOiBudWxsLFxuICBkaXNhYmxlZDoge1xuICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gIH1cbn0pO1xuXG4vKiogQSBjaGFuZ2UgZXZlbnQgZW1pdHRlZCBieSB0aGUgTHlTbGlkZXIgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNsYXNzIEx5U2xpZGVyQ2hhbmdlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBUaGUgTHlTbGlkZXIgdGhhdCBjaGFuZ2VkLiAqL1xuICAgIHB1YmxpYyBzb3VyY2U6IEx5U2xpZGVyLFxuICAgIC8qKiBUaGUgbmV3IHZhbHVlIG9mIHRoZSBzb3VyY2Ugc2xpZGVyLiAqL1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsLFxuICApIHsgfVxufVxuXG5pbnRlcmZhY2UgVGh1bWIge1xuICB2YWx1ZTogbnVtYmVyO1xuICBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIHBlcmNlbnQ6IG51bWJlciB8IG51bGw7XG4gIHN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgZm9jdXNlZD86IGJvb2xlYW47XG4gIHNsaWRpbmc/OiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyTWFyayB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGxhYmVsOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseVNsaWRlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIExZX1NMSURFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLFxuICAgIEx5SG9zdENsYXNzXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnKHNsaWRlKSc6ICdfb25TbGlkZSgkZXZlbnQpJyxcbiAgICAnKHNsaWRlZW5kKSc6ICdfb25TbGlkZUVuZCgpJyxcbiAgICAnKHRhcCknOiAnX29uVGFwKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlTbGlkZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHN0YXRpYyDQuCA9ICdMeVNsaWRlcic7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3M/OiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZlcnRpY2FsQ2xhc3M/OiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RodW1ic09uU2xpZGVTdGFydDogVGh1bWJbXSB8IG51bGw7XG4gIHByaXZhdGUgX3ZhbHVlT25TbGlkZVN0YXJ0OiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDEwMDtcblxuICBwcml2YXRlIF9zdGVwOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9zdGVwUHJlY2lzaW9uPzogbnVtYmVyIHwgbnVsbDtcblxuICBwcml2YXRlIF9jbG9zZXN0SW5kZXg6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2N1cnJlbnRSZWN0OiBET01SZWN0IHwgbnVsbDtcblxuICBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIE1pbiBwZXJjZW50YWdlLCB0aGlzIGlzIGZvciBtYXJrLiAqL1xuICBfbWluUGVyY2VudDogbnVtYmVyO1xuICAvKiogTWF4IHBlcmNlbnRhZ2UsIHRoaXMgaXMgZm9yIG1hcmsuICovXG4gIF9tYXhQZXJjZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSB0aHVtYiBpcyBzbGlkaW5nLlxuICAgKi9cbiAgX2lzU2xpZGluZzogYm9vbGVhbjtcbiAgX3NsaWRpbmdUaHVtYlZhbHVlPzogbnVtYmVyIHwgbnVsbDtcblxuICBfdGh1bWJzOiBUaHVtYltdID0gW107XG5cbiAgX3Jvb3RDbGFzc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgQFZpZXdDaGlsZCgnYmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgX2JnPzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3RyYWNrJywgeyBzdGF0aWM6IHRydWUgfSkgX3RyYWNrOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndGlja3NSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfdGlja3NSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCd0aHVtYnNSZWYnKSBfdGh1bWJzUmVmPzogUXVlcnlMaXN0PEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+PjtcblxuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKHZhbHVlOiBudW1iZXIgfCBudWxsKSA9PiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgdGh1bWIgbW92ZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dDogRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+KCk7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSB0aHVtYi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHRodW1iVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGh1bWJWaXNpYmxlO1xuICB9XG4gIHNldCB0aHVtYlZpc2libGUodmFsOiBib29sZWFuIHwgbnVsbCkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHZhbCAhPSBudWxsID8gdG9Cb29sZWFuKHZhbCkgOiBudWxsO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy50aHVtYlZpc2libGUpIHtcblxuICAgICAgY29uc3QgeyB0aHVtYlZpc2libGU6IHRodW1iVmlzaWJsZUNsYXNzIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgICBjb25zdCB7IHRodW1iTm90VmlzaWJsZTogdGh1bWJOb3RWaXNpYmxlQ2xhc3MgfSA9IHRoaXMuY2xhc3NlcztcbiAgICAgIHRoaXMuX3RodW1iVmlzaWJsZSA9IG5ld1ZhbDtcblxuICAgICAgdGhpcy5faG9zdENsYXNzLnRvZ2dsZSh0aHVtYlZpc2libGVDbGFzcywgbmV3VmFsID09PSB0cnVlKTtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcy50b2dnbGUodGh1bWJOb3RWaXNpYmxlQ2xhc3MsIG5ld1ZhbCA9PT0gZmFsc2UpO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGh1bWJWaXNpYmxlOiBib29sZWFuIHwgbnVsbDtcblxuICAvKiogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgbWFya3MsIGFsc28gYWNjZXB0cyBhbiBhcnJheSBvZiBtYXJrcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1hcmtzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXJrcztcbiAgfVxuICBzZXQgbWFya3ModmFsOiBib29sZWFuIHwgTHlTbGlkZXJNYXJrW10pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMubWFya3MpIHtcblxuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNsYXNzZXMubWFya2VkO1xuXG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICAgICAgdGhpcy5fbWFya3NDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgICB0aGlzLl9tYXJrcyA9IEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG5ld1ZhbDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWFya3NDbGFzcykge1xuICAgICAgICB0aGlzLl9tYXJrcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgICAgIHRoaXMuX21hcmtzQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsKSkge1xuICAgICAgICB0aGlzLl9tYXJrc0xpc3QgPSB2YWwgYXMgTHlTbGlkZXJNYXJrW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXJrc0xpc3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya3M6IGJvb2xlYW4gfCBMeVNsaWRlck1hcmtbXTtcbiAgcHJpdmF0ZSBfbWFya3NDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgX21hcmtzTGlzdD86IEx5U2xpZGVyTWFya1tdIHwgbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHRvTnVtYmVyKHYsIHRoaXMuX21heCk7XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgbWluaW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIHNldCBtaW4odjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluID0gdG9OdW1iZXIodiwgdGhpcy5fbWluKTtcblxuICAgIC8vIElmIHRoZSB2YWx1ZSB3YXNuJ3QgZXhwbGljaXRseSBzZXQgYnkgdGhlIHVzZXIsIHNldCBpdCB0byB0aGUgbWluLlxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX21pbjtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgc2xpZGVyIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYCR7THlTbGlkZXIu0Lh9LmFwcGVhcmFuY2U6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlc1dpdGhTbGlkZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVGbiA9IHRoZW1lLnNsaWRlci5hcHBlYXJhbmNlIVt2YWxdLmFwcGVhcmFuY2U7XG4gICAgICAgIGlmICghc3R5bGVGbikge1xuICAgICAgICAgIHRocm93IGdldEx5VGhlbWVTdHlsZVVuZGVmaW5lZEVycm9yKEx5U2xpZGVyLtC4LCAnYXBwZWFyYW5jZScsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlRm4odGhlbWUsIHZhbCk7XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIC8qKiBDb2xvciBvZiBTbGlkZXIgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlO1xuICAgIGNvbnN0IHN0eWxlS2V5ID0gYCR7THlTbGlkZXIu0Lh9LmNvbG9yOiR7dmFsfWA7XG5cbiAgICBjb25zdCBuZXdTdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXNXaXRoU2xpZGVyKSA9PiB7XG4gICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgIHJldHVybiB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZSFbYXBwZWFyYW5jZV0uY29sb3IodGhlbWUsIGNvbG9yKTtcbiAgICB9O1xuICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIHN0eWxlS2V5LFxuICAgICAgbmV3U3R5bGUsXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fY29sb3JDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZICsgMSwgU1RZTEVTKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBzbGlkZXIgaXMgdmVydGljYWwuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgc2V0IHZlcnRpY2FsKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gbmV3VmFsO1xuXG4gICAgY29uc3QgbmV3Q2xhc3MgPSBuZXdWYWxcbiAgICAgID8gdGhpcy5jbGFzc2VzLnZlcnRpY2FsXG4gICAgICA6IHRoaXMuY2xhc3Nlcy5ob3Jpem9udGFsO1xuXG4gICAgdGhpcy5fdmVydGljYWxDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3JlbmRlcmVyLFxuICAgICAgbmV3Q2xhc3MsXG4gICAgICB0aGlzLl92ZXJ0aWNhbENsYXNzIGFzIGFueSk7XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmFsdWVzIGF0IHdoaWNoIHRoZSB0aHVtYiB3aWxsIHNuYXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zdGVwOyB9XG4gIHNldCBzdGVwKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSB0b051bWJlcih2LCB0aGlzLl9zdGVwKTtcblxuICAgIHRoaXMuX3N0ZXBQcmVjaXNpb24gPSB0aGlzLl9zdGVwICUgMSAhPT0gMFxuICAgICAgPyB0aGlzLl9zdGVwLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGhcbiAgICAgIDogbnVsbDtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbHVlIG9mIGEgc2xpZGVyLCB0aGlzIGNhbiBiZSBhIG51bWJlciBvciBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgKiBJZiB0aGUgYXJyYXkgb2YgbnVtYmVycyBoYXMgbW9yZSB0aGFuIG9uZSB2YWx1ZSxcbiAgICogdGhlbiB0aGlzIHdpbGwgY3JlYXRlIG1vcmUgdGh1bWJzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWw6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICBjb25zdCB2YWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gTnVtYmVyKHZhbCk7XG4gICAgICAgIG5ld1ZhbHVlID0gcGFyc2VGbG9hdChuZXdWYWx1ZS50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24gYXMgbnVtYmVyKSk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlSXNBcnJheSAmJiAhYXJyYXlFcXVhbHModGhpcy5fdmFsdWUsIHZhbCkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsIGFzIG51bWJlcltdO1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLm1hcChcbiAgICAgICAgICBfdmFsID0+IF92YWwgPT09IG51bGxcbiAgICAgICAgICA/IF92YWxcbiAgICAgICAgICA6IHBhcnNlRmxvYXQoX3ZhbC50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24gYXMgbnVtYmVyKSkpO1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLl90aHVtYnMgPSAodmFsdWVJc0FycmF5ID9cbiAgICAgICAgdGhpcy5fdmFsdWUgYXMgKG51bWJlciB8IG51bGwpW11cbiAgICAgICAgOiBbdGhpcy5fdmFsdWUgYXMgbnVtYmVyIHwgbnVsbF0pLm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IHRvTnVtYmVyKHYsIHRoaXMubWluKSxcbiAgICAgICAgICBkaXNwbGF5VmFsdWU6IG51bGwsXG4gICAgICAgICAgcGVyY2VudDogbnVsbCxcbiAgICAgICAgICBzdHlsZXM6IHt9XG4gICAgICAgIH0pKTtcblxuICAgICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBzbGlkZXIgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGlzLmFwcGVhcmFuY2U7XG4gICAgICAgIGNvbnN0IHN0eWxlS2V5ID0gYCR7THlTbGlkZXIu0Lh9LmRpc2FibGVkOiR7dmFsfWA7XG4gICAgICAgIGxldCBuZXdTdHlsZTogU3R5bGVEZWNsYXJhdGlvbnNCbG9jayB8IG51bGw7XG4gICAgICAgIGlmICghdGhpcy5fdGhlbWUuZXhpc3RTdHlsZShzdHlsZUtleSkpIHtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgbmV3U3R5bGUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzV2l0aFNsaWRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sb3JDc3MgPSB0aGVtZS5jb2xvck9mKGNvbG9yKTtcbiAgICAgICAgICAgIHJldHVybiB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZSFbYXBwZWFyYW5jZV0uZGlzYWJsZWQodGhlbWUsIGNvbG9yQ3NzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgICAgc3R5bGVLZXksXG4gICAgICAgICAgbmV3U3R5bGUsXG4gICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzLFxuICAgICAgICAgIFNUWUxFX1BSSU9SSVRZICsgMiwgU1RZTEVTKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kaXNhYmxlZENsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2Rpc2FibGVkQ2xhc3MpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgdGh1bWIgbGFiZWwsIGJ1dCBpZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIsXG4gICAqIGl0IHdpbGwgc2hvdyB0aWNrcyBhY2NvcmRpbmcgdG8gdGhlIHN0ZXBzLiBGb3IgZXhhbXBsZTogaWYgeW91IHNldFxuICAgKiAzIHRpY2tzIHdpdGggYSBzdGVwIG9mIDEwLCB5b3Ugd2lsbCBkcmF3IGEgdGljayBldmVyeSAzMCB2YWx1ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0aWNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlja3M7XG4gIH1cbiAgc2V0IHRpY2tzKHZhbDogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdG9OdW1iZXIodmFsLCB0b0Jvb2xlYW4odmFsKSk7XG4gICAgdGhpcy5fdGlja3MgPSBuZXdWYWx1ZTtcbiAgfVxuICBwcml2YXRlIF90aWNrczogbnVtYmVyIHwgYm9vbGVhbjtcbiAgX3RpY2tJbnRlcnZhbDogbnVtYmVyO1xuICBnZXQgX3RpY2tMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9fdGlja0xpc3Q7XG4gIH1cbiAgcHJpdmF0ZSBfX3RpY2tMaXN0OiBudW1iZXJbXTtcbiAgLy8gcHJpdmF0ZSBfbmdDbGFzczogTmdDbGFzcztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3NcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVUaWNrVmFsdWVzKCk7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuX3RoZW1lLmRpcmVjdGlvbkNoYW5nZWQucGlwZSh1bnRpbENvbXBvbmVudERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gKFxuICAgICAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMgYXMgVGhlbWVWYXJpYWJsZXNXaXRoU2xpZGVyKS5zbGlkZXIuZGVmYXVsdENvbmZpZyEuYXBwZWFyYW5jZSE7XG4gICAgfVxuXG4gICAgLyoqIFNldCBob3Jpem9udGFsIHNsaWRlciAqL1xuICAgIGlmICh0aGlzLnZlcnRpY2FsID09IG51bGwpIHtcbiAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgY29sb3IgKi9cbiAgICBpZiAodGhpcy5jb2xvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2FjY2VudCc7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IHN0ZXAgKi9cbiAgICBpZiAodGhpcy5zdGVwID09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fY2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHNlbGVjdC4gUGFydCBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHJlcXVpcmVkXG4gICAqIHRvIGludGVncmF0ZSB3aXRoIEFuZ3VsYXIncyBjb3JlIGZvcm1zIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgU2V0cyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIF9vbkZvY3VzKHRodW1iOiBUaHVtYikge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGh1bWIuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX29uQmx1cih0aHVtYjogVGh1bWIpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfb25UYXAoZXZlbnQ6IEhhbW1lcklucHV0KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhcnRTbGlkZSgpO1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKGV2ZW50LmNlbnRlci54LCBldmVudC5jZW50ZXIueSk7XG4gICAgdGhpcy5fb25TbGlkZUVuZCgpO1xuICB9XG5cbiAgX29uU2xpZGUoZXZlbnQ6IEhhbW1lcklucHV0KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNsaWRlKCk7XG5cbiAgICBpZiAoZXZlbnRbJ2lzRmluYWwnXSkge1xuICAgICAgaWYgKGV2ZW50Wydwb2ludGVyVHlwZSddID09PSAndG91Y2gnICYmIGV2ZW50LmNlbnRlci54ID09PSAwICYmIGV2ZW50LmNlbnRlci55ID09PSAwKSB7XG4gICAgICAgIC8vIHJlc3RvcmUgdG8gaW5pdGlhbCBwb3NpdGlvblxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWVPblNsaWRlU3RhcnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb25TbGlkZUVuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgIH1cblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuX2VtaXRJbnB1dEV2ZW50KCk7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zdGFydFNsaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRpbmcpO1xuXG4gICAgICAvLyBjbG9uZVxuICAgICAgdGhpcy5fdmFsdWVPblNsaWRlU3RhcnQgPSBBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZS5zbGljZSgwKSA6IHRoaXMudmFsdWU7XG5cbiAgICAgIHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCA9IHRoaXMuX3RodW1icy5zbGljZSgwKS5tYXAodCA9PiAoey4uLnR9KSk7XG4gICAgICB0aGlzLl9jdXJyZW50UmVjdCA9IHRoaXMuX2JnIS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgfVxuICB9XG5cbiAgX29uU2xpZGVFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGluZyk7XG5cbiAgICAgIGlmICghdmFsdWVFcXVhbHModGhpcy5fdmFsdWVPblNsaWRlU3RhcnQsIHRoaXMudmFsdWUpICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCA9IG51bGw7XG4gICAgICB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCA9IG51bGw7XG4gICAgICB0aGlzLl9jbG9zZXN0SW5kZXggPSBudWxsO1xuICAgICAgdGhpcy5fY3VycmVudFJlY3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIF90cmFja0J5Rm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IFRodW1iKSB7XG4gICAgcmV0dXJuIGl0ZW0uaW5kZXg7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5fYmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3ID0gdGhpcy5fY3VycmVudFJlY3QhLndpZHRoO1xuICAgIGNvbnN0IGggPSB0aGlzLl9jdXJyZW50UmVjdCEuaGVpZ2h0O1xuICAgIHggLT0gdGhpcy5fY3VycmVudFJlY3QhLng7XG4gICAgeSAtPSB0aGlzLl9jdXJyZW50UmVjdCEueTtcblxuICAgIGxldCBwZXJjZW50ID0gY2xhbXAoXG4gICAgICB0aGlzLnZlcnRpY2FsXG4gICAgICAgID8g0LN2YWx1ZVRvUGVyY2VudCh5LCAwLCBoKVxuICAgICAgICA6INCzdmFsdWVUb1BlcmNlbnQoeCwgMCwgdyksXG4gICAgICAwLFxuICAgICAgMTAwKTtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsIHx8ICghdGhpcy52ZXJ0aWNhbCAmJiB0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSBEaXIucnRsKSkge1xuICAgICAgcGVyY2VudCA9IDEwMCAtIHBlcmNlbnQ7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlOiBudW1iZXI7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9IGVsc2UgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLl9yb3VuZFZhbHVlVG9TdGVwKHBlcmNlbnRUb1ZhbHVlKHBlcmNlbnQsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvc2VzdEluZGV4ID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Nsb3Nlc3RJbmRleCA9IGZpbmRDbG9zZXN0KHRoaXMuX3RodW1icy5tYXAodGh1bWIgPT4gdGh1bWIudmFsdWUpLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRUaHVtYiA9IHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCFbdGhpcy5fY2xvc2VzdEluZGV4XTtcbiAgICB0aGlzLl9zbGlkaW5nVGh1bWJWYWx1ZSA9IGN1cnJlbnRUaHVtYi52YWx1ZSA9IHZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0IS5tYXAodGh1bWIgPT4gdGh1bWIudmFsdWUpLnNvcnQoQVNDKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGZvY3VzIHNsaWRpbmdUaHVtYlxuICAgIGNvbnN0IGN1cnJlbnRTbGlkaW5nVGh1bWI6IFRodW1iIHwgdW5kZWZpbmVkID0gdGhpcy5fdGh1bWJzLmZpbmQodGh1bWIgPT4gdGh1bWIudmFsdWUgPT09IHZhbHVlKSE7XG4gICAgaWYgKGN1cnJlbnRTbGlkaW5nVGh1bWIpIHtcbiAgICAgIGN1cnJlbnRTbGlkaW5nVGh1bWIuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aHVtYnNSZWYhLnRvQXJyYXkoKVtjdXJyZW50U2xpZGluZ1RodW1iLmluZGV4XS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGh1bWJzKCkge1xuICAgIHRoaXMuX3RodW1icy5mb3JFYWNoKHRodW1iID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGNsYW1wKHRodW1iLnZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgY29uc3QgcGVyY2VudCA9INCzdmFsdWVUb1BlcmNlbnQodmFsLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5fY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudCk7XG4gICAgICB0aHVtYi52YWx1ZSA9IHZhbDtcbiAgICAgIHRodW1iLmRpc3BsYXlWYWx1ZSA9IHRoaXMuX3RyYW5zZm9ybVZhbHVlKHZhbCk7XG4gICAgICB0aHVtYi5wZXJjZW50ID0gcGVyY2VudDtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRodW1iLnN0eWxlcyA9IHtcbiAgICAgICAgW3Bvcy5zdHlsZV06IHBvcy52YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3VwZGF0ZVRyYWNrKCk7XG4gIH1cblxuICBfY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudDogbnVtYmVyKSB7XG4gICAgbGV0IHN0eWxlOiBzdHJpbmc7XG4gICAgY29uc3QgdmFsdWUgPSBgJHtwZXJjZW50fSVgO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHN0eWxlID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUcmFjaygpIHtcbiAgICBjb25zdCB0cmFjayA9IHRoaXMuX3RyYWNrO1xuICAgIGNvbnN0IHRodW1icyA9IHRoaXMuX3RodW1icztcbiAgICBjb25zdCB0aHVtYnNQZXJjZW50cyA9IHRodW1icy5tYXAodGh1bWIgPT4gdGh1bWIucGVyY2VudCEpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICAgIGlmICh0aHVtYnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aHVtYnNQZXJjZW50cy51bnNoaWZ0KDApO1xuICAgIH1cblxuICAgIGNvbnN0IG1pblBlcmNlbnQgPSB0aGlzLl9taW5QZXJjZW50ID0gTWF0aC5taW4oLi4udGh1bWJzUGVyY2VudHMpO1xuICAgIGNvbnN0IG1heFBlcmNlbnQgPSB0aGlzLl9tYXhQZXJjZW50ID0gTWF0aC5tYXgoLi4udGh1bWJzUGVyY2VudHMpO1xuXG4gICAgaWYgKHRyYWNrKSB7XG5cbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmlnaHQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkeyhtYXhQZXJjZW50IC0gbWluUGVyY2VudCl9JWA7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gYCR7bWluUGVyY2VudH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHttYXhQZXJjZW50IC0gbWluUGVyY2VudH0lYDtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZVtkaXJlY3Rpb25dID0gYCR7bWluUGVyY2VudH0lYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRW1pdHMgYSBjaGFuZ2UgZXZlbnQuICovXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMudmFsdWUpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KCkpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGFuIGlucHV0IGV2ZW50LiAqL1xuICBwcml2YXRlIF9lbWl0SW5wdXRFdmVudCgpIHtcbiAgICB0aGlzLmlucHV0LmVtaXQodGhpcy5fY3JlYXRlQ2hhbmdlRXZlbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDaGFuZ2VFdmVudCh2YWx1ZSA9IHRoaXMudmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEx5U2xpZGVyQ2hhbmdlKHRoaXMsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JvdW5kVmFsdWVUb1N0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBOdW1iZXIoKE1hdGgucm91bmQodmFsdWUgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwKS50b0ZpeGVkKHRoaXMuX3N0ZXBQcmVjaXNpb24hKSk7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2Zvcm1WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVdpdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlXaXRoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGlja1ZhbHVlcygpIHtcbiAgICB0aGlzLl9fdGlja0xpc3QgPSBbXTtcbiAgICBpZiAoIXRoaXMudGlja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGlja3MgPSB0aGlzLnRpY2tzO1xuICAgICAgdGhpcy5fdGlja0ludGVydmFsID0gdHlwZW9mIHRpY2tzID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHRoaXMuc3RlcCAqIHRpY2tzXG4gICAgICAgIDogdGhpcy5zdGVwO1xuXG4gICAgICB0aGlzLl9fdGlja0xpc3QgPSBbXTtcbiAgICAgIGNvbnN0IHRpY2tJbnRlcnZhbHMgPSB0aGlzLl90aWNrSW50ZXJ2YWwgKyAxO1xuICAgICAgY29uc3Qgc3RlcFdpdGggPSB0aGlzLl90aWNrSW50ZXJ2YWw7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlja0ludGVydmFsczsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLl9fdGlja0xpc3QucHVzaChjbGFtcChpbmRleCAqIHN0ZXBXaXRoLCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdCh2YWx1ZXM6IG51bWJlcltdLCBjdXJyZW50VmFsdWU6IG51bWJlcikge1xuICBjb25zdCB7IGluZGV4OiBjbG9zZXN0SW5kZXggfSA9IHZhbHVlcy5yZWR1Y2U8e1xuICAgIGRpc3RhbmNlOiBudW1iZXJcbiAgICBpbmRleDogbnVtYmVyXG4gIH0gfCBudWxsPigocHJldmlvdXNWYWx1ZSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50VmFsdWUgLSB2YWx1ZSk7XG5cbiAgICBpZiAocHJldmlvdXNWYWx1ZSA9PT0gbnVsbCB8fCBkaXN0YW5jZSA8IHByZXZpb3VzVmFsdWUuZGlzdGFuY2UgfHwgZGlzdGFuY2UgPT09IHByZXZpb3VzVmFsdWUuZGlzdGFuY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpbmRleCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gIH0sIG51bGwpITtcbiAgcmV0dXJuIGNsb3Nlc3RJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uINCzdmFsdWVUb1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiAoKHZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFRvVmFsdWUocGVyY2VudCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogKHBlcmNlbnQgLyAxMDApICsgbWluO1xufVxuXG5mdW5jdGlvbiBhcnJheUVxdWFscyhhcnJheTE6IGFueSwgYXJyYXkyOiBhbnkpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkxKSAmJiBBcnJheS5pc0FycmF5KGFycmF5MikgJiYgYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aFxuICAgICYmIGFycmF5MS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gYXJyYXkyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWxzKHZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwsIHZhbHVlMjogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsKSB7XG4gIGlmICh2YWx1ZSA9PT0gdmFsdWUyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGFycmF5RXF1YWxzKHZhbHVlLCB2YWx1ZTIpO1xufVxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uINCzYmV0d2Vlbih4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG59XG5cbmZ1bmN0aW9uIEFTQyhhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICByZXR1cm4gYSAtIGI7XG59XG4iXX0=