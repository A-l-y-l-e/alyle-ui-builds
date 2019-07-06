import { __assign, __spread, __decorate, __metadata } from 'tslib';
import { forwardRef, ViewChild, ElementRef, ViewChildren, QueryList, Input, Output, EventEmitter, Component, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, Directive, NgModule } from '@angular/core';
import { toBoolean, toNumber, getLyThemeStyleUndefinedError, untilComponentDestroyed, Dir, LyHostClass, LyTheme2, LY_COMMON_STYLES, LyCommonModule } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

var LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
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
                '{bg}': __assign({}, LY_COMMON_STYLES.fill, { margin: 'auto' })
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
            '&::before': __assign({ content: "''" }, LY_COMMON_STYLES.fill, { borderRadius: '50%', transition: ['box-shadow'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() })
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
        if (!valueEquals(this._valueOnSlideStart, this.value) && !this.disabled) {
            this._emitInputEvent();
            this._changes.next();
        }
    };
    LySlider.prototype._startSlide = function () {
        if (!this._isSliding) {
            this._isSliding = true;
            this._renderer.addClass(this._el.nativeElement, this.classes.sliding);
            // clone
            this._valueOnSlideStart = Array.isArray(this.value) ? this.value.slice(0) : this.value;
            this._thumbsOnSlideStart = this._thumbs.slice(0).map(function (t) { return (__assign({}, t)); });
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
        currentSlidingThumb.focused = true;
        this._thumbsRef.toArray()[currentSlidingThumb.index].nativeElement.focus();
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
        var minPercent = this._minPercent = Math.min.apply(Math, __spread(thumbsPercents));
        var maxPercent = this._maxPercent = Math.max.apply(Math, __spread(thumbsPercents));
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
    return LySlider;
}());
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
function гvalueToPercent(value, min, max) {
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
function гbetween(x, min, max) {
    return x >= min && x <= max;
}
function ASC(a, b) {
    return a - b;
}

var LyTick = /** @class */ (function () {
    function LyTick(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
    }
    LyTick.prototype.ngOnChanges = function () {
        this._updateTick();
    };
    LyTick.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.addClass(this._getHostElement(), this.classes.tick);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(function () {
            _this._updateTick();
        });
    };
    LyTick.prototype._updateTick = function () {
        var min = this._slider._minPercent;
        var max = this._slider._maxPercent;
        var className = this._slider.classes.tickActive;
        var percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        var pos = this._slider._calculatePosition(percent);
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
    };
    LyTick.prototype.ngOnDestroy = function () { };
    LyTick.prototype._getHostElement = function () {
        return this._el.nativeElement;
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
    return LyTick;
}());

var LyMark = /** @class */ (function () {
    function LyMark(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
        _renderer.addClass(_el.nativeElement, _slider.classes.mark);
    }
    LyMark.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.insertBefore(this._slider._getHostElement(), this._tick._getHostElement(), this._slider._ticksRef.nativeElement);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(function () {
            _this._updateMark();
        });
    };
    LyMark.prototype._updateMark = function () {
        var min = this._slider._minPercent;
        var max = this._slider._maxPercent;
        var className = this._slider.classes.markActive;
        var percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        var pos = this._slider._calculatePosition(percent);
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
    };
    LyMark.prototype.ngOnDestroy = function () { };
    LyMark.prototype._getHostElement = function () {
        return this._el.nativeElement;
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
    return LyMark;
}());

var LySliderModule = /** @class */ (function () {
    function LySliderModule() {
    }
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
    return LySliderModule;
}());

export { LY_SLIDER_CONTROL_VALUE_ACCESSOR, LySlider, LySliderChange, LySliderModule, ɵ0, LyMark as ɵa, LyTick as ɵb, гbetween, гvalueToPercent };
//# sourceMappingURL=alyle-ui-slider.js.map
