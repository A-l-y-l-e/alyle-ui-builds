import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, OnInit, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, OnChanges, OnDestroy, QueryList, ViewChildren, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, ThemeVariables, toBoolean, LY_COMMON_STYLES, HammerInput, toNumber, LyHostClass, untilComponentDestroyed, Dir, StyleCollection, LyClasses, StyleTemplate, st2c, ThemeRef, StyleRenderer } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
export var LY_SLIDER_DEFAULT_OPTIONS = new InjectionToken('LY_SLIDER_DEFAULT_OPTIONS');
export var LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LySlider; }),
    multi: true
};
var STYLE_PRIORITY = -2;
export var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    var before = theme.before;
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:inline-block;position:relative;box-sizing:border-box;cursor:pointer;}" + st2c(((theme.slider
            && theme.slider.root
            && (theme.slider.root instanceof StyleCollection
                ? theme.slider.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.slider.root(__)))), "" + className) + st2c((LY_COMMON_STYLES.fill), className + " " + __.bg) + className + " " + __.bg + "{margin:auto;}" + className + __.thumbVisible + " " + __.thumb + "," + className + ":not(" + __.thumbNotVisible + "):not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumb + "," + className + ":not(" + __.thumbNotVisible + ") " + __.thumbContent + __.thumbContentFocused + " " + __.thumb + "{border-radius:50% 50% 0%;}" + className + __.thumbVisible + " " + __.thumbContent + "::before," + className + ":not(" + __.thumbNotVisible + "):not(" + __.disabled + ") " + __.thumbContent + ":hover::before," + className + ":not(" + __.thumbNotVisible + ") " + __.thumbContent + __.thumbContentFocused + "::before{transform:scale(1);}"; }; },
        track: function (className) { return className + "{position:absolute;margin:auto;}"; },
        bg: null,
        thumbContainer: function (className) { return className + "{width:0;height:0;position:absolute;margin:auto;}"; },
        thumbContent: function (className) { return className + "::before{content:'';position:absolute;opacity:.6;transform:scale(0);transition:transform " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms, background " + theme.animations.durations.complex + "ms " + theme.animations.curves.sharp + " 0ms;}"; },
        thumb: function (className) { return className + "{position:absolute;width:12px;height:12px;left:-6px;top:-6px;border-radius:50%;outline:0;transition:" + ['border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.exiting + "ms " + theme.animations.curves.standard + " 0ms"; }).join() + ";}" + className + "::before{content:'';border-radius:50%;transition:" + ['box-shadow'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() + ";}" + st2c((LY_COMMON_STYLES.fill), className + "::before"); },
        thumbLabel: function (className) { return className + "{position:absolute;width:28px;height:28px;border-radius:50%;top:-14px;" + before + ":-14px;transition:" + ['transform', 'top', 'left', 'right', 'border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() + ";}"; },
        thumbLabelValue: function (className) { return className + "{display:flex;height:100%;width:100%;align-items:center;justify-content:center;font-size:12px;color:#fff;}"; },
        horizontal: function () { return function (className) { return className + "{width:120px;height:2px;padding:10px 0;touch-action:pan-y !important;}" + className + " " + __.track + "," + className + " " + __.bg + "{height:2px;width:100%;}" + className + " " + __.track + "{" + before + ":0;top:0;bottom:0;}" + className + " " + __.thumb + "{transform:rotateZ(-135deg);}" + className + " " + __.thumbLabel + "{transform:rotateZ(45deg) scale(0);}" + className + __.thumbVisible + " " + __.thumbLabel + "," + className + ":not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumbLabel + "," + className + " " + __.thumbContent + __.thumbContentFocused + " " + __.thumbLabel + "{border-radius:50% 50% 0%;top:-50px;transform:rotateZ(45deg) scale(1);}" + className + " " + __.thumbLabelValue + "{transform:rotateZ(-45deg);}" + className + " " + __.thumbContainer + "{top:0;bottom:0;}" + className + " " + __.thumbContent + "::before{width:2px;height:24px;left:-1px;top:-24px;}" + className + " " + __.tick + "{width:2px;height:inherit;top:0;bottom:0;}" + className + " " + __.mark + "{top:22px;transform:translateX(" + (theme.direction === Dir.ltr ? '-' : '') + "50%);}" + className + __.marked + "{margin-bottom:24px;}"; }; },
        vertical: function () { return function (className) { return className + "{width:2px;height:120px;padding:0 10px;touch-action:pan-x !important;}" + className + " " + __.track + "," + className + " " + __.bg + "{height:100%;width:2px;}" + className + " " + __.track + "{bottom:0;left:0;right:0;}" + className + " " + __.thumb + "{transform:" + (theme.direction === Dir.ltr ? 'rotateZ(135deg)' : 'rotateZ(-45deg)') + ";}" + className + " " + __.thumbLabel + "{transform:rotateZ(-45deg) scale(0);}" + className + __.thumbVisible + " " + __.thumbLabel + "," + className + ":not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumbLabel + "," + className + " " + __.thumbContent + __.thumbContentFocused + " " + __.thumbLabel + "{border-radius:" + (theme.direction === Dir.ltr ? '50% 50% 0%' : '0 50% 50% 50%') + ";before:-50px;transform:rotateZ(-45deg) scale(1);}" + className + " " + __.thumbLabelValue + "{transform:rotateZ(45deg);}" + className + " " + __.thumbContainer + "{left:0;right:0;}" + className + " " + __.thumbContent + "::before{width:24px;height:2px;before:-24px;top:-1px;}" + className + " " + __.tick + "{width:inherit;height:2px;left:0;right:0;}" + className + " " + __.mark + "{" + before + ":22px;transform:translateY(50%);}" + className + __.marked + "{" + (theme.direction === Dir.ltr ? 'margin-right' : 'margin-left') + ":24px;}"; }; },
        marked: null,
        mark: function (className) { return className + "{position:absolute;white-space:nowrap;font-size:14px;color:" + theme.text.secondary + ";}"; },
        markActive: function (className) { return className + "{color:currentColor;}"; },
        tick: function (className) { return className + "{position:absolute;margin:auto;}"; },
        tickActive: null,
        thumbVisible: null,
        thumbNotVisible: null,
        thumbContentFocused: null,
        sliding: null,
        disabled: function (className) { return className + "{cursor:default;}"; }
    };
};
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
    function LySlider(_theme, _el, _renderer, _cd, _hostClass, _sr, _default) {
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
                this._appearanceClass = this._sr.add(LySlider_1.и + ".appearance:" + val, function (theme, ref) {
                    var classes = ref.selectorsOf(STYLES);
                    if (theme.slider && theme.slider.appearance) {
                        var appearance = theme.slider.appearance[val];
                        if (appearance) {
                            return appearance instanceof StyleCollection
                                ? appearance.setTransformer(function (_) { return _(classes); }).css
                                : appearance(classes);
                        }
                    }
                    throw new Error(val + " not found in theme.slider.appearance");
                }, STYLE_PRIORITY, this._appearanceClass);
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
            var styleKey = LySlider_1.и + ".color:" + val;
            var newStyle = function (theme, ref) {
                var color = theme.colorOf(val);
                var __ = ref.selectorsOf(STYLES);
                if (theme.slider && theme.slider.color) {
                    var sliderColor = theme.slider.color;
                    if (sliderColor) {
                        return sliderColor instanceof StyleCollection
                            ? (sliderColor).setTransformer(function (_) { return _(__, color); }).css
                            : sliderColor(__, color);
                    }
                }
                throw new Error(val + " not found in theme.slider.color");
            };
            this._colorClass = this._sr.add(styleKey, newStyle, STYLE_PRIORITY + 1, this._colorClass);
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
                    var color_1 = this.color;
                    var styleKey = LySlider_1.и + ".disabled:" + val + "-" + color_1;
                    var newStyle = void 0;
                    newStyle = function (theme, ref) {
                        var clr = theme.colorOf(color_1);
                        var __ = ref.selectorsOf(STYLES);
                        if (theme.slider && theme.slider.disabled) {
                            var sliderColor = theme.slider.disabled;
                            if (sliderColor) {
                                return sliderColor instanceof StyleCollection
                                    ? (sliderColor).setTransformer(function (_) { return _(__, clr); }).css
                                    : sliderColor(__, clr);
                            }
                        }
                        throw new Error(val + " not found in theme.slider.color");
                    };
                    var newClass = this._sr.add(styleKey, newStyle, STYLE_PRIORITY + 1.5, this._disabledClass);
                    this._hostClass.add(this.classes.disabled);
                    this._disabledClass = newClass;
                }
                else if (this._disabledClass) {
                    this._hostClass.remove(this._disabledClass);
                    this._hostClass.remove(this.classes.disabled);
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
    LySlider.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyHostClass },
        { type: StyleRenderer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_SLIDER_DEFAULT_OPTIONS,] }] }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGNBQWMsRUFDZCxNQUFNLEVBQ04sUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNkLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLEdBQUcsRUFDSCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixJQUFJLEVBQ0osUUFBUSxFQUNSLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQXNCL0IsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBTTVFLE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQztJQUN2QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUF5QyxFQUFF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QUUsTUFBVztJQUMzQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1dBQ25GLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUF3QyxFQUFFLE1BQXlDO0lBQ3RHLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDcEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNmLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQVMsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUMxRCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdCxcbiAgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEhhbW1lcklucHV0LFxuICB0b051bWJlcixcbiAgTHlIb3N0Q2xhc3MsXG4gIHVudGlsQ29tcG9uZW50RGVzdHJveWVkLFxuICBEaXIsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBzdDJjLFxuICBUaGVtZVJlZixcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIFNsaWRlciBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGRpc2FibGVkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGUpO1xuICBjb2xvcj86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgYXBwZWFyYW5jZT86IHtcbiAgICBzdGFuZGFyZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gICAgW2tleTogc3RyaW5nXTogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlckRlZmF1bHRPcHRpb25zIHtcbiAgYXBwZWFyYW5jZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IExZX1NMSURFUl9ERUZBVUxUX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxMeVNsaWRlckRlZmF1bHRPcHRpb25zPignTFlfU0xJREVSX0RFRkFVTFRfT1BUSU9OUycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyVmFyaWFibGVzIHtcbiAgc2xpZGVyPzogTHlTbGlkZXJUaGVtZTtcbn1cblxuZXhwb3J0IGNvbnN0IExZX1NMSURFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlTbGlkZXIpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgeyBiZWZvcmUgfSA9IHRoZW1lO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6cG9pbnRlcjt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuc2xpZGVyXG4gICAgICAgICAgICAmJiB0aGVtZS5zbGlkZXIucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnNsaWRlci5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuc2xpZGVyLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oX18pKS5jc3NcbiAgICAgICAgICAgICAgOiB0aGVtZS5zbGlkZXIucm9vdChfXykpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke3N0MmMoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX0gJHtfXy5iZ31gKX0ke2NsYXNzTmFtZX0gJHtfXy5iZ317bWFyZ2luOmF1dG87fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1ifSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSk6bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXIgJHtfXy50aHVtYn0sJHtjbGFzc05hbWV9Om5vdCgke19fLnRodW1iTm90VmlzaWJsZX0pICR7X18udGh1bWJDb250ZW50fSR7X18udGh1bWJDb250ZW50Rm9jdXNlZH0gJHtfXy50aHVtYn17Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDAlO30ke2NsYXNzTmFtZX0ke19fLnRodW1iVmlzaWJsZX0gJHtfXy50aHVtYkNvbnRlbnR9OjpiZWZvcmUsJHtjbGFzc05hbWV9Om5vdCgke19fLnRodW1iTm90VmlzaWJsZX0pOm5vdCgke19fLmRpc2FibGVkfSkgJHtfXy50aHVtYkNvbnRlbnR9OmhvdmVyOjpiZWZvcmUsJHtjbGFzc05hbWV9Om5vdCgke19fLnRodW1iTm90VmlzaWJsZX0pICR7X18udGh1bWJDb250ZW50fSR7X18udGh1bWJDb250ZW50Rm9jdXNlZH06OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUoMSk7fWAsXG5cbiAgICB0cmFjazogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjphdXRvO31gLFxuICAgIGJnOiBudWxsLFxuICAgIHRodW1iQ29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MDtoZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46YXV0bzt9YCxcbiAgICB0aHVtYkNvbnRlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfTo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTouNjt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gJHtcbiAgICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXMsIGJhY2tncm91bmQgJHtcbiAgICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtczt9YCxcbiAgICB0aHVtYjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7bGVmdDotNnB4O3RvcDotNnB4O2JvcmRlci1yYWRpdXM6NTAlO291dGxpbmU6MDt0cmFuc2l0aW9uOiR7Wydib3JkZXItcmFkaXVzJ10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZXhpdGluZ1xuICAgICAgfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDBtc2ApLmpvaW4oKX07fSR7Y2xhc3NOYW1lfTo6YmVmb3Jle2NvbnRlbnQ6Jyc7Ym9yZGVyLXJhZGl1czo1MCU7dHJhbnNpdGlvbjoke1snYm94LXNoYWRvdyddLm1hcChwcm9wID0+IGAke3Byb3B9ICR7XG4gICAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmdcbiAgICAgICAgfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtc2ApLmpvaW4oKX07fSR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YmVmb3JlYCl9YCxcbiAgICB0aHVtYkxhYmVsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtib3JkZXItcmFkaXVzOjUwJTt0b3A6LTE0cHg7JHtiZWZvcmV9Oi0xNHB4O3RyYW5zaXRpb246JHtbJ3RyYW5zZm9ybScsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3JkZXItcmFkaXVzJ10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmdcbiAgICAgIH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfSAwbXNgKS5qb2luKCl9O31gLFxuICAgIHRodW1iTGFiZWxWYWx1ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiNmZmY7fWAsXG5cbiAgICBob3Jpem9udGFsOiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MTIwcHg7aGVpZ2h0OjJweDtwYWRkaW5nOjEwcHggMDt0b3VjaC1hY3Rpb246cGFuLXkgIWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7X18udHJhY2t9LCR7Y2xhc3NOYW1lfSAke19fLmJnfXtoZWlnaHQ6MnB4O3dpZHRoOjEwMCU7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfXske2JlZm9yZX06MDt0b3A6MDtib3R0b206MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJ9e3RyYW5zZm9ybTpyb3RhdGVaKC0xMzVkZWcpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsfXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZykgc2NhbGUoMCk7fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1iTGFiZWx9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3ZlciAke19fLnRodW1iTGFiZWx9LCR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGVudH0ke19fLnRodW1iQ29udGVudEZvY3VzZWR9ICR7X18udGh1bWJMYWJlbH17Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDAlO3RvcDotNTBweDt0cmFuc2Zvcm06cm90YXRlWig0NWRlZykgc2NhbGUoMSk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iTGFiZWxWYWx1ZX17dHJhbnNmb3JtOnJvdGF0ZVooLTQ1ZGVnKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250YWluZXJ9e3RvcDowO2JvdHRvbTowO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9OjpiZWZvcmV7d2lkdGg6MnB4O2hlaWdodDoyNHB4O2xlZnQ6LTFweDt0b3A6LTI0cHg7fSR7Y2xhc3NOYW1lfSAke19fLnRpY2t9e3dpZHRoOjJweDtoZWlnaHQ6aW5oZXJpdDt0b3A6MDtib3R0b206MDt9JHtjbGFzc05hbWV9ICR7X18ubWFya317dG9wOjIycHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoJHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnLScgOiAnJ301MCUpO30ke2NsYXNzTmFtZX0ke19fLm1hcmtlZH17bWFyZ2luLWJvdHRvbToyNHB4O31gLFxuICAgIHZlcnRpY2FsOiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MnB4O2hlaWdodDoxMjBweDtwYWRkaW5nOjAgMTBweDt0b3VjaC1hY3Rpb246cGFuLXggIWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7X18udHJhY2t9LCR7Y2xhc3NOYW1lfSAke19fLmJnfXtoZWlnaHQ6MTAwJTt3aWR0aDoycHg7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfXtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJ9e3RyYW5zZm9ybToke3RoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/ICdyb3RhdGVaKDEzNWRlZyknIDogJ3JvdGF0ZVooLTQ1ZGVnKSd9O30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsfXt0cmFuc2Zvcm06cm90YXRlWigtNDVkZWcpIHNjYWxlKDApO30ke2NsYXNzTmFtZX0ke19fLnRodW1iVmlzaWJsZX0gJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX06bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXIgJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1iTGFiZWx9e2JvcmRlci1yYWRpdXM6JHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnNTAlIDUwJSAwJScgOiAnMCA1MCUgNTAlIDUwJSd9O2JlZm9yZTotNTBweDt0cmFuc2Zvcm06cm90YXRlWigtNDVkZWcpIHNjYWxlKDEpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsVmFsdWV9e3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250YWluZXJ9e2xlZnQ6MDtyaWdodDowO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9OjpiZWZvcmV7d2lkdGg6MjRweDtoZWlnaHQ6MnB4O2JlZm9yZTotMjRweDt0b3A6LTFweDt9JHtjbGFzc05hbWV9ICR7X18udGlja317d2lkdGg6aW5oZXJpdDtoZWlnaHQ6MnB4O2xlZnQ6MDtyaWdodDowO30ke2NsYXNzTmFtZX0gJHtfXy5tYXJrfXske2JlZm9yZX06MjJweDt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpO30ke2NsYXNzTmFtZX0ke19fLm1hcmtlZH17JHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAnbWFyZ2luLXJpZ2h0JyA6ICdtYXJnaW4tbGVmdCd9OjI0cHg7fWAsXG5cbiAgICBtYXJrZWQ6IG51bGwsXG4gICAgbWFyazogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXNpemU6MTRweDtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9YCxcbiAgICBtYXJrQWN0aXZlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y29sb3I6Y3VycmVudENvbG9yO31gLFxuICAgIHRpY2s6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46YXV0bzt9YCxcbiAgICB0aWNrQWN0aXZlOiBudWxsLFxuXG4gICAgdGh1bWJWaXNpYmxlOiBudWxsLFxuICAgIHRodW1iTm90VmlzaWJsZTogbnVsbCxcbiAgICB0aHVtYkNvbnRlbnRGb2N1c2VkOiBudWxsLFxuICAgIHNsaWRpbmc6IG51bGwsXG4gICAgZGlzYWJsZWQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjdXJzb3I6ZGVmYXVsdDt9YFxuICB9O1xufTtcblxuLyoqIEEgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgYnkgdGhlIEx5U2xpZGVyIGNvbXBvbmVudC4gKi9cbmV4cG9ydCBjbGFzcyBMeVNsaWRlckNoYW5nZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogVGhlIEx5U2xpZGVyIHRoYXQgY2hhbmdlZC4gKi9cbiAgICBwdWJsaWMgc291cmNlOiBMeVNsaWRlcixcbiAgICAvKiogVGhlIG5ldyB2YWx1ZSBvZiB0aGUgc291cmNlIHNsaWRlci4gKi9cbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCxcbiAgKSB7IH1cbn1cblxuaW50ZXJmYWNlIFRodW1iIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBwZXJjZW50OiBudW1iZXIgfCBudWxsO1xuICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGZvY3VzZWQ/OiBib29sZWFuO1xuICBzbGlkaW5nPzogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlck1hcmsge1xuICB2YWx1ZTogbnVtYmVyO1xuICBsYWJlbDogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlTbGlkZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBMWV9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnKHNsaWRlKSc6ICdfb25TbGlkZSgkZXZlbnQpJyxcbiAgICAnKHNsaWRlZW5kKSc6ICdfb25TbGlkZUVuZCgpJyxcbiAgICAnKHRhcCknOiAnX29uVGFwKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlTbGlkZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHN0YXRpYyDQuCA9ICdMeVNsaWRlcic7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmVydGljYWxDbGFzcz86IHN0cmluZyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdGh1bWJzT25TbGlkZVN0YXJ0OiBUaHVtYltdIHwgbnVsbDtcbiAgcHJpdmF0ZSBfdmFsdWVPblNsaWRlU3RhcnQ6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbDtcblxuICBwcml2YXRlIF9taW46IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX21heDogbnVtYmVyID0gMTAwO1xuXG4gIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX3N0ZXBQcmVjaXNpb24/OiBudW1iZXIgfCBudWxsO1xuXG4gIHByaXZhdGUgX2Nsb3Nlc3RJbmRleDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY3VycmVudFJlY3Q6IERPTVJlY3QgfCBudWxsO1xuXG4gIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogTWluIHBlcmNlbnRhZ2UsIHRoaXMgaXMgZm9yIG1hcmsuICovXG4gIF9taW5QZXJjZW50OiBudW1iZXI7XG4gIC8qKiBNYXggcGVyY2VudGFnZSwgdGhpcyBpcyBmb3IgbWFyay4gKi9cbiAgX21heFBlcmNlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIHRodW1iIGlzIHNsaWRpbmcuXG4gICAqL1xuICBfaXNTbGlkaW5nOiBib29sZWFuO1xuICBfc2xpZGluZ1RodW1iVmFsdWU/OiBudW1iZXIgfCBudWxsO1xuXG4gIF90aHVtYnM6IFRodW1iW10gPSBbXTtcblxuICBfcm9vdENsYXNzZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBAVmlld0NoaWxkKCdiZycsIHsgc3RhdGljOiBmYWxzZSB9KSBfYmc/OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndHJhY2snLCB7IHN0YXRpYzogdHJ1ZSB9KSBfdHJhY2s6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd0aWNrc1JlZicsIHsgc3RhdGljOiB0cnVlIH0pIF90aWNrc1JlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGRyZW4oJ3RodW1ic1JlZicpIF90aHVtYnNSZWY/OiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD4+O1xuXG4gIEBJbnB1dCgpIGRpc3BsYXlXaXRoOiAodmFsdWU6IG51bWJlciB8IG51bGwpID0+IHN0cmluZyB8IG51bWJlcjtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNsaWRlciB0aHVtYiBtb3Zlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0OiBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4oKTtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgYmx1ciBldmVudCBvY2N1cnMgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHRodW1iLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdGh1bWJWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYlZpc2libGU7XG4gIH1cbiAgc2V0IHRodW1iVmlzaWJsZSh2YWw6IGJvb2xlYW4gfCBudWxsKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdmFsICE9IG51bGwgPyB0b0Jvb2xlYW4odmFsKSA6IG51bGw7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLnRodW1iVmlzaWJsZSkge1xuXG4gICAgICBjb25zdCB7IHRodW1iVmlzaWJsZTogdGh1bWJWaXNpYmxlQ2xhc3MgfSA9IHRoaXMuY2xhc3NlcztcbiAgICAgIGNvbnN0IHsgdGh1bWJOb3RWaXNpYmxlOiB0aHVtYk5vdFZpc2libGVDbGFzcyB9ID0gdGhpcy5jbGFzc2VzO1xuICAgICAgdGhpcy5fdGh1bWJWaXNpYmxlID0gbmV3VmFsO1xuXG4gICAgICB0aGlzLl9ob3N0Q2xhc3MudG9nZ2xlKHRodW1iVmlzaWJsZUNsYXNzLCBuZXdWYWwgPT09IHRydWUpO1xuICAgICAgdGhpcy5faG9zdENsYXNzLnRvZ2dsZSh0aHVtYk5vdFZpc2libGVDbGFzcywgbmV3VmFsID09PSBmYWxzZSk7XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90aHVtYlZpc2libGU6IGJvb2xlYW4gfCBudWxsO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSBtYXJrcywgYWxzbyBhY2NlcHRzIGFuIGFycmF5IG9mIG1hcmtzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWFya3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzO1xuICB9XG4gIHNldCBtYXJrcyh2YWw6IGJvb2xlYW4gfCBMeVNsaWRlck1hcmtbXSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5tYXJrcykge1xuXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY2xhc3Nlcy5tYXJrZWQ7XG5cbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgICAgICB0aGlzLl9tYXJrc0NsYXNzID0gbmV3Q2xhc3M7XG4gICAgICAgIHRoaXMuX21hcmtzID0gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogbmV3VmFsO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXJrc0NsYXNzKSB7XG4gICAgICAgIHRoaXMuX21hcmtzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICAgICAgdGhpcy5fbWFya3NDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdWYWwpKSB7XG4gICAgICAgIHRoaXMuX21hcmtzTGlzdCA9IHZhbCBhcyBMeVNsaWRlck1hcmtbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21hcmtzTGlzdCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9tYXJrczogYm9vbGVhbiB8IEx5U2xpZGVyTWFya1tdO1xuICBwcml2YXRlIF9tYXJrc0NsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBfbWFya3NMaXN0PzogTHlTbGlkZXJNYXJrW10gfCBudWxsO1xuXG4gIC8qKiBUaGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG4gIHNldCBtYXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdG9OdW1iZXIodiwgdGhpcy5fbWF4KTtcbiAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoZSBtaW5pbXVtIHZhbHVlIHRoYXQgdGhlIHNsaWRlciBjYW4gaGF2ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cbiAgc2V0IG1pbih2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW4gPSB0b051bWJlcih2LCB0aGlzLl9taW4pO1xuXG4gICAgLy8gSWYgdGhlIHZhbHVlIHdhc24ndCBleHBsaWNpdGx5IHNldCBieSB0aGUgdXNlciwgc2V0IGl0IHRvIHRoZSBtaW4uXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fbWluO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoZSBzbGlkZXIgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl9zci5hZGQoXG4gICAgICAgIGAke0x5U2xpZGVyLtC4fS5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICAgIGlmICh0aGVtZS5zbGlkZXIgJiYgdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS5zbGlkZXIuYXBwZWFyYW5jZVt2YWxdO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFwcGVhcmFuY2UgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IGFwcGVhcmFuY2Uuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oY2xhc3NlcykpLmNzc1xuICAgICAgICAgICAgICAgIDogYXBwZWFyYW5jZShjbGFzc2VzLCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2VgKTtcbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIC8qKiBDb2xvciBvZiBTbGlkZXIgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgIGNvbnN0IHN0eWxlS2V5ID0gYCR7THlTbGlkZXIu0Lh9LmNvbG9yOiR7dmFsfWA7XG5cbiAgICBjb25zdCBuZXdTdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuXG4gICAgICBpZiAodGhlbWUuc2xpZGVyICYmIHRoZW1lLnNsaWRlci5jb2xvcikge1xuICAgICAgICBjb25zdCBzbGlkZXJDb2xvciA9IHRoZW1lLnNsaWRlci5jb2xvcjtcbiAgICAgICAgaWYgKHNsaWRlckNvbG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNsaWRlckNvbG9yIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICA/IChzbGlkZXJDb2xvcikuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oX18sIGNvbG9yKSkuY3NzXG4gICAgICAgICAgICA6IHNsaWRlckNvbG9yKF9fLCBjb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5zbGlkZXIuY29sb3JgKTtcbiAgICB9O1xuICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl9zci5hZGQoXG4gICAgICBzdHlsZUtleSxcbiAgICAgIG5ld1N0eWxlLFxuICAgICAgU1RZTEVfUFJJT1JJVFkgKyAxLFxuICAgICAgdGhpcy5fY29sb3JDbGFzc1xuICAgICk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgc2xpZGVyIGlzIHZlcnRpY2FsLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHNldCB2ZXJ0aWNhbCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IG5ld1ZhbDtcblxuICAgIGNvbnN0IG5ld0NsYXNzID0gbmV3VmFsXG4gICAgICA/IHRoaXMuY2xhc3Nlcy52ZXJ0aWNhbFxuICAgICAgOiB0aGlzLmNsYXNzZXMuaG9yaXpvbnRhbDtcblxuICAgIHRoaXMuX3ZlcnRpY2FsQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yZW5kZXJlcixcbiAgICAgIG5ld0NsYXNzLFxuICAgICAgdGhpcy5fdmVydGljYWxDbGFzcyBhcyBhbnkpO1xuICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogVGhlIHZhbHVlcyBhdCB3aGljaCB0aGUgdGh1bWIgd2lsbCBzbmFwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RlcCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc3RlcDsgfVxuICBzZXQgc3RlcCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwID0gdG9OdW1iZXIodiwgdGhpcy5fc3RlcCk7XG5cbiAgICB0aGlzLl9zdGVwUHJlY2lzaW9uID0gdGhpcy5fc3RlcCAlIDEgIT09IDBcbiAgICAgID8gdGhpcy5fc3RlcC50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoXG4gICAgICA6IG51bGw7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWx1ZSBvZiBhIHNsaWRlciwgdGhpcyBjYW4gYmUgYSBudW1iZXIgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICogSWYgdGhlIGFycmF5IG9mIG51bWJlcnMgaGFzIG1vcmUgdGhhbiBvbmUgdmFsdWUsXG4gICAqIHRoZW4gdGhpcyB3aWxsIGNyZWF0ZSBtb3JlIHRodW1ic1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgY29uc3QgdmFsdWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IE51bWJlcih2YWwpO1xuICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQobmV3VmFsdWUudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uIGFzIG51bWJlcikpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZUlzQXJyYXkgJiYgIWFycmF5RXF1YWxzKHRoaXMuX3ZhbHVlLCB2YWwpKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbCBhcyBudW1iZXJbXTtcbiAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5tYXAoXG4gICAgICAgICAgX3ZhbCA9PiBfdmFsID09PSBudWxsXG4gICAgICAgICAgPyBfdmFsXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KF92YWwudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uIGFzIG51bWJlcikpKTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGh1bWJzID0gKHZhbHVlSXNBcnJheSA/XG4gICAgICAgIHRoaXMuX3ZhbHVlIGFzIChudW1iZXIgfCBudWxsKVtdXG4gICAgICAgIDogW3RoaXMuX3ZhbHVlIGFzIG51bWJlciB8IG51bGxdKS5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHZhbHVlOiB0b051bWJlcih2LCB0aGlzLm1pbiksXG4gICAgICAgICAgZGlzcGxheVZhbHVlOiBudWxsLFxuICAgICAgICAgIHBlcmNlbnQ6IG51bGwsXG4gICAgICAgICAgc3R5bGVzOiB7fVxuICAgICAgICB9KSk7XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuXG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgc2xpZGVyIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGNvbnN0IHN0eWxlS2V5ID0gYCR7THlTbGlkZXIu0Lh9LmRpc2FibGVkOiR7dmFsfS0ke2NvbG9yfWA7XG4gICAgICAgIGxldCBuZXdTdHlsZTogKCh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gICAgICAgIG5ld1N0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xyID0gdGhlbWUuY29sb3JPZihjb2xvcik7XG4gICAgICAgICAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcblxuICAgICAgICAgIGlmICh0aGVtZS5zbGlkZXIgJiYgdGhlbWUuc2xpZGVyLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJDb2xvciA9IHRoZW1lLnNsaWRlci5kaXNhYmxlZDtcbiAgICAgICAgICAgIGlmIChzbGlkZXJDb2xvcikge1xuICAgICAgICAgICAgICByZXR1cm4gc2xpZGVyQ29sb3IgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IChzbGlkZXJDb2xvcikuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oX18sIGNscikpLmNzc1xuICAgICAgICAgICAgICAgIDogc2xpZGVyQ29sb3IoX18sIGNscik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5zbGlkZXIuY29sb3JgKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9zci5hZGQoXG4gICAgICAgICAgc3R5bGVLZXksXG4gICAgICAgICAgbmV3U3R5bGUsXG4gICAgICAgICAgU1RZTEVfUFJJT1JJVFkgKyAxLjUsXG4gICAgICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl9ob3N0Q2xhc3MuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZGlzYWJsZWRDbGFzcykge1xuICAgICAgICB0aGlzLl9ob3N0Q2xhc3MucmVtb3ZlKHRoaXMuX2Rpc2FibGVkQ2xhc3MpO1xuICAgICAgICB0aGlzLl9ob3N0Q2xhc3MucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSB0aHVtYiBsYWJlbCwgYnV0IGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlcixcbiAgICogaXQgd2lsbCBzaG93IHRpY2tzIGFjY29yZGluZyB0byB0aGUgc3RlcHMuIEZvciBleGFtcGxlOiBpZiB5b3Ugc2V0XG4gICAqIDMgdGlja3Mgd2l0aCBhIHN0ZXAgb2YgMTAsIHlvdSB3aWxsIGRyYXcgYSB0aWNrIGV2ZXJ5IDMwIHZhbHVlc1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRpY2tzKCkge1xuICAgIHJldHVybiB0aGlzLl90aWNrcztcbiAgfVxuICBzZXQgdGlja3ModmFsOiBudW1iZXIgfCBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0b051bWJlcih2YWwsIHRvQm9vbGVhbih2YWwpKTtcbiAgICB0aGlzLl90aWNrcyA9IG5ld1ZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3RpY2tzOiBudW1iZXIgfCBib29sZWFuO1xuICBfdGlja0ludGVydmFsOiBudW1iZXI7XG4gIGdldCBfdGlja0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190aWNrTGlzdDtcbiAgfVxuICBwcml2YXRlIF9fdGlja0xpc3Q6IG51bWJlcltdO1xuICAvLyBwcml2YXRlIF9uZ0NsYXNzOiBOZ0NsYXNzO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfaG9zdENsYXNzOiBMeUhvc3RDbGFzcyxcbiAgICBwcml2YXRlIF9zcjogU3R5bGVSZW5kZXJlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1NMSURFUl9ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHQ6IEx5U2xpZGVyRGVmYXVsdE9wdGlvbnNcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVUaWNrVmFsdWVzKCk7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuX3RoZW1lLmRpcmVjdGlvbkNoYW5nZWQucGlwZSh1bnRpbENvbXBvbmVudERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1icygpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gKHRoaXMuX2RlZmF1bHQgJiYgdGhpcy5fZGVmYXVsdC5hcHBlYXJhbmNlKSB8fCAnc3RhbmRhcmQnO1xuICAgIH1cblxuICAgIC8qKiBTZXQgaG9yaXpvbnRhbCBzbGlkZXIgKi9cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGNvbG9yICovXG4gICAgaWYgKHRoaXMuY29sb3IgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb2xvciA9ICdhY2NlbnQnO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBzdGVwICovXG4gICAgaWYgKHRoaXMuc3RlcCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzZWxlY3QuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfb25Gb2N1cyh0aHVtYjogVGh1bWIpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRodW1iLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9vbkJsdXIodGh1bWI6IFRodW1iKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgX29uVGFwKGV2ZW50OiBIYW1tZXJJbnB1dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXJ0U2xpZGUoKTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21Qb3NpdGlvbihldmVudC5jZW50ZXIueCwgZXZlbnQuY2VudGVyLnkpO1xuICAgIHRoaXMuX29uU2xpZGVFbmQoKTtcbiAgfVxuXG4gIF9vblNsaWRlKGV2ZW50OiBIYW1tZXJJbnB1dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTbGlkZSgpO1xuXG4gICAgaWYgKGV2ZW50Wydpc0ZpbmFsJ10pIHtcbiAgICAgIGlmIChldmVudFsncG9pbnRlclR5cGUnXSA9PT0gJ3RvdWNoJyAmJiBldmVudC5jZW50ZXIueCA9PT0gMCAmJiBldmVudC5jZW50ZXIueSA9PT0gMCkge1xuICAgICAgICAvLyByZXN0b3JlIHRvIGluaXRpYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uU2xpZGVFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICB9XG5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLl9lbWl0SW5wdXRFdmVudCgpO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRTbGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkaW5nKTtcblxuICAgICAgLy8gY2xvbmVcbiAgICAgIHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0ID0gQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUuc2xpY2UoMCkgOiB0aGlzLnZhbHVlO1xuXG4gICAgICB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQgPSB0aGlzLl90aHVtYnMuc2xpY2UoMCkubWFwKHQgPT4gKHsuLi50fSkpO1xuICAgICAgdGhpcy5fY3VycmVudFJlY3QgPSB0aGlzLl9iZyEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIH1cbiAgfVxuXG4gIF9vblNsaWRlRW5kKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRpbmcpO1xuXG4gICAgICBpZiAoIXZhbHVlRXF1YWxzKHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0LCB0aGlzLnZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQgPSBudWxsO1xuICAgICAgdGhpcy5fdmFsdWVPblNsaWRlU3RhcnQgPSBudWxsO1xuICAgICAgdGhpcy5fY2xvc2VzdEluZGV4ID0gbnVsbDtcbiAgICAgIHRoaXMuX2N1cnJlbnRSZWN0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfdHJhY2tCeUZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBUaHVtYikge1xuICAgIHJldHVybiBpdGVtLmluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuX2JnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdyA9IHRoaXMuX2N1cnJlbnRSZWN0IS53aWR0aDtcbiAgICBjb25zdCBoID0gdGhpcy5fY3VycmVudFJlY3QhLmhlaWdodDtcbiAgICB4IC09IHRoaXMuX2N1cnJlbnRSZWN0IS54O1xuICAgIHkgLT0gdGhpcy5fY3VycmVudFJlY3QhLnk7XG5cbiAgICBsZXQgcGVyY2VudCA9IGNsYW1wKFxuICAgICAgdGhpcy52ZXJ0aWNhbFxuICAgICAgICA/INCzdmFsdWVUb1BlcmNlbnQoeSwgMCwgaClcbiAgICAgICAgOiDQs3ZhbHVlVG9QZXJjZW50KHgsIDAsIHcpLFxuICAgICAgMCxcbiAgICAgIDEwMCk7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCB8fCAoIXRoaXMudmVydGljYWwgJiYgdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gRGlyLnJ0bCkpIHtcbiAgICAgIHBlcmNlbnQgPSAxMDAgLSBwZXJjZW50O1xuICAgIH1cblxuICAgIGxldCB2YWx1ZTogbnVtYmVyO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5taW47XG4gICAgfSBlbHNlIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5tYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fcm91bmRWYWx1ZVRvU3RlcChwZXJjZW50VG9WYWx1ZShwZXJjZW50LCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nsb3Nlc3RJbmRleCA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9jbG9zZXN0SW5kZXggPSBmaW5kQ2xvc2VzdCh0aGlzLl90aHVtYnMubWFwKHRodW1iID0+IHRodW1iLnZhbHVlKSwgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50VGh1bWIgPSB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQhW3RoaXMuX2Nsb3Nlc3RJbmRleF07XG4gICAgdGhpcy5fc2xpZGluZ1RodW1iVmFsdWUgPSBjdXJyZW50VGh1bWIudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3RodW1ic09uU2xpZGVTdGFydCEubWFwKHRodW1iID0+IHRodW1iLnZhbHVlKS5zb3J0KEFTQyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBmb2N1cyBzbGlkaW5nVGh1bWJcbiAgICBjb25zdCBjdXJyZW50U2xpZGluZ1RodW1iOiBUaHVtYiB8IHVuZGVmaW5lZCA9IHRoaXMuX3RodW1icy5maW5kKHRodW1iID0+IHRodW1iLnZhbHVlID09PSB2YWx1ZSkhO1xuICAgIGlmIChjdXJyZW50U2xpZGluZ1RodW1iKSB7XG4gICAgICBjdXJyZW50U2xpZGluZ1RodW1iLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGh1bWJzUmVmIS50b0FycmF5KClbY3VycmVudFNsaWRpbmdUaHVtYi5pbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRodW1icygpIHtcbiAgICB0aGlzLl90aHVtYnMuZm9yRWFjaCh0aHVtYiA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBjbGFtcCh0aHVtYi52YWx1ZSwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSDQs3ZhbHVlVG9QZXJjZW50KHZhbCwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuX2NhbGN1bGF0ZVBvc2l0aW9uKHBlcmNlbnQpO1xuICAgICAgdGh1bWIudmFsdWUgPSB2YWw7XG4gICAgICB0aHVtYi5kaXNwbGF5VmFsdWUgPSB0aGlzLl90cmFuc2Zvcm1WYWx1ZSh2YWwpO1xuICAgICAgdGh1bWIucGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aHVtYi5zdHlsZXMgPSB7XG4gICAgICAgIFtwb3Muc3R5bGVdOiBwb3MudmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB0aGlzLl91cGRhdGVUcmFjaygpO1xuICB9XG5cbiAgX2NhbGN1bGF0ZVBvc2l0aW9uKHBlcmNlbnQ6IG51bWJlcikge1xuICAgIGxldCBzdHlsZTogc3RyaW5nO1xuICAgIGNvbnN0IHZhbHVlID0gYCR7cGVyY2VudH0lYDtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZSA9ICdib3R0b20nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZSA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVHJhY2soKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0aGlzLl90cmFjaztcbiAgICBjb25zdCB0aHVtYnMgPSB0aGlzLl90aHVtYnM7XG4gICAgY29uc3QgdGh1bWJzUGVyY2VudHMgPSB0aHVtYnMubWFwKHRodW1iID0+IHRodW1iLnBlcmNlbnQhKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgICBpZiAodGh1bWJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGh1bWJzUGVyY2VudHMudW5zaGlmdCgwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5QZXJjZW50ID0gdGhpcy5fbWluUGVyY2VudCA9IE1hdGgubWluKC4uLnRodW1ic1BlcmNlbnRzKTtcbiAgICBjb25zdCBtYXhQZXJjZW50ID0gdGhpcy5fbWF4UGVyY2VudCA9IE1hdGgubWF4KC4uLnRodW1ic1BlcmNlbnRzKTtcblxuICAgIGlmICh0cmFjaykge1xuXG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLnJpZ2h0ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHsobWF4UGVyY2VudCAtIG1pblBlcmNlbnQpfSVgO1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmJvdHRvbSA9IGAke21pblBlcmNlbnR9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7bWF4UGVyY2VudCAtIG1pblBlcmNlbnR9JWA7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGVbZGlyZWN0aW9uXSA9IGAke21pblBlcmNlbnR9JWA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEVtaXRzIGEgY2hhbmdlIGV2ZW50LiAqL1xuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl9jcmVhdGVDaGFuZ2VFdmVudCgpKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBpbnB1dCBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZW1pdElucHV0RXZlbnQoKSB7XG4gICAgdGhpcy5pbnB1dC5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2hhbmdlRXZlbnQodmFsdWUgPSB0aGlzLnZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBMeVNsaWRlckNoYW5nZSh0aGlzLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9yb3VuZFZhbHVlVG9TdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVyKChNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5zdGVwKSAqIHRoaXMuc3RlcCkudG9GaXhlZCh0aGlzLl9zdGVwUHJlY2lzaW9uISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmRpc3BsYXlXaXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5V2l0aCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRpY2tWYWx1ZXMoKSB7XG4gICAgdGhpcy5fX3RpY2tMaXN0ID0gW107XG4gICAgaWYgKCF0aGlzLnRpY2tzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRpY2tzID0gdGhpcy50aWNrcztcbiAgICAgIHRoaXMuX3RpY2tJbnRlcnZhbCA9IHR5cGVvZiB0aWNrcyA9PT0gJ251bWJlcidcbiAgICAgICAgPyB0aGlzLnN0ZXAgKiB0aWNrc1xuICAgICAgICA6IHRoaXMuc3RlcDtcblxuICAgICAgdGhpcy5fX3RpY2tMaXN0ID0gW107XG4gICAgICBjb25zdCB0aWNrSW50ZXJ2YWxzID0gdGhpcy5fdGlja0ludGVydmFsICsgMTtcbiAgICAgIGNvbnN0IHN0ZXBXaXRoID0gdGhpcy5fdGlja0ludGVydmFsO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpY2tJbnRlcnZhbHM7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy5fX3RpY2tMaXN0LnB1c2goY2xhbXAoaW5kZXggKiBzdGVwV2l0aCwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZENsb3Nlc3QodmFsdWVzOiBudW1iZXJbXSwgY3VycmVudFZhbHVlOiBudW1iZXIpIHtcbiAgY29uc3QgeyBpbmRleDogY2xvc2VzdEluZGV4IH0gPSB2YWx1ZXMucmVkdWNlPHtcbiAgICBkaXN0YW5jZTogbnVtYmVyXG4gICAgaW5kZXg6IG51bWJlclxuICB9IHwgbnVsbD4oKHByZXZpb3VzVmFsdWUsIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudFZhbHVlIC0gdmFsdWUpO1xuXG4gICAgaWYgKHByZXZpb3VzVmFsdWUgPT09IG51bGwgfHwgZGlzdGFuY2UgPCBwcmV2aW91c1ZhbHVlLmRpc3RhbmNlIHx8IGRpc3RhbmNlID09PSBwcmV2aW91c1ZhbHVlLmRpc3RhbmNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgaW5kZXgsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICB9LCBudWxsKSE7XG4gIHJldHVybiBjbG9zZXN0SW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiDQs3ZhbHVlVG9QZXJjZW50KHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgKiAxMDApIC8gKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRUb1ZhbHVlKHBlcmNlbnQsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIChwZXJjZW50IC8gMTAwKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gYXJyYXlFcXVhbHMoYXJyYXkxOiBhbnksIGFycmF5MjogYW55KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5MSkgJiYgQXJyYXkuaXNBcnJheShhcnJheTIpICYmIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGhcbiAgICAmJiBhcnJheTEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IGFycmF5MltpbmRleF0pO1xufVxuXG5mdW5jdGlvbiB2YWx1ZUVxdWFscyh2YWx1ZTogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsLCB2YWx1ZTI6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCkge1xuICBpZiAodmFsdWUgPT09IHZhbHVlMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBhcnJheUVxdWFscyh2YWx1ZSwgdmFsdWUyKTtcbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIGlmICh2YWx1ZSA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiDQs2JldHdlZW4oeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIHggPj0gbWluICYmIHggPD0gbWF4O1xufVxuXG5mdW5jdGlvbiBBU0MoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuIl19