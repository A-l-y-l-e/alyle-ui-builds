import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, OnInit, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, OnChanges, OnDestroy, QueryList, ViewChildren, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, ThemeVariables, toBoolean, LY_COMMON_STYLES, HammerInput, toNumber, LyHostClass, untilComponentDestroyed, Dir, StyleCollection, LyClasses, StyleTemplate, styleTemplateToString, ThemeRef, StyleRenderer } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
export var LY_SLIDER_DEFAULT_OPTIONS = new InjectionToken('LY_SLIDER_DEFAULT_OPTIONS');
export var LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LySlider; }),
    multi: true
};
var STYLE_PRIORITY = -2;
var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    var before = theme.before;
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:inline-block;position:relative;box-sizing:border-box;cursor:pointer;}" + styleTemplateToString(((theme.slider
            && theme.slider.root
            && (theme.slider.root instanceof StyleCollection
                ? theme.slider.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.slider.root(__)))), "" + className) + styleTemplateToString((LY_COMMON_STYLES.fill), className + " " + __.bg) + className + " " + __.bg + "{margin:auto;}" + className + __.thumbVisible + " " + __.thumb + "," + className + ":not(" + __.thumbNotVisible + "):not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumb + "," + className + ":not(" + __.thumbNotVisible + ") " + __.thumbContent + __.thumbContentFocused + " " + __.thumb + "{border-radius:50% 50% 0%;}" + className + __.thumbVisible + " " + __.thumbContent + "::before," + className + ":not(" + __.thumbNotVisible + "):not(" + __.disabled + ") " + __.thumbContent + ":hover::before," + className + ":not(" + __.thumbNotVisible + ") " + __.thumbContent + __.thumbContentFocused + "::before{transform:scale(1);}"; }; },
        track: function (className) { return className + "{position:absolute;margin:auto;}"; },
        bg: null,
        thumbContainer: function (className) { return className + "{width:0;height:0;position:absolute;margin:auto;}"; },
        thumbContent: function (className) { return className + "::before{content:'';position:absolute;opacity:.6;transform:scale(0);transition:transform " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms, background " + theme.animations.durations.complex + "ms " + theme.animations.curves.sharp + " 0ms;}"; },
        thumb: function (className) { return className + "{position:absolute;width:12px;height:12px;left:-6px;top:-6px;border-radius:50%;outline:0;transition:" + ['border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.exiting + "ms " + theme.animations.curves.standard + " 0ms"; }).join() + ";}" + className + "::before{content:'';border-radius:50%;transition:" + ['box-shadow'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() + ";}" + styleTemplateToString((LY_COMMON_STYLES.fill), className + "::before"); },
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGNBQWMsRUFDZCxNQUFNLEVBQ04sUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNkLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLEdBQUcsRUFDSCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixxQkFBcUIsRUFDckIsUUFBUSxFQUNSLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQXNCL0IsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBTTVFLE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQztJQUN2QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDLEVBQUUsR0FBYTtJ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QUUsTUFBVztJQUMzQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1dBQ25GLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUF3QyxFQUFFLE1BQXlDO0lBQ3RHLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDcEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNmLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQVMsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUMxRCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdCxcbiAgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEhhbW1lcklucHV0LFxuICB0b051bWJlcixcbiAgTHlIb3N0Q2xhc3MsXG4gIHVudGlsQ29tcG9uZW50RGVzdHJveWVkLFxuICBEaXIsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFRoZW1lUmVmLFxuICBTdHlsZVJlbmRlcmVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBMeVNsaWRlclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgU2xpZGVyIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgZGlzYWJsZWQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGNvbG9yPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGUpO1xuICBhcHBlYXJhbmNlPzoge1xuICAgIHN0YW5kYXJkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpIHwgdW5kZWZpbmVkO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5U2xpZGVyRGVmYXVsdE9wdGlvbnMge1xuICBhcHBlYXJhbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTFlfU0xJREVSX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEx5U2xpZGVyRGVmYXVsdE9wdGlvbnM+KCdMWV9TTElERVJfREVGQVVMVF9PUFRJT05TJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJWYXJpYWJsZXMge1xuICBzbGlkZXI/OiBMeVNsaWRlclRoZW1lO1xufVxuXG5leHBvcnQgY29uc3QgTFlfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeVNsaWRlciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U2xpZGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IF9fID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYmVmb3JlIH0gPSB0aGVtZTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUuc2xpZGVyXG4gICAgICAgICAgICAmJiB0aGVtZS5zbGlkZXIucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnNsaWRlci5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuc2xpZGVyLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oX18pKS5jc3NcbiAgICAgICAgICAgICAgOiB0aGVtZS5zbGlkZXIucm9vdChfXykpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfSAke19fLmJnfWApfSR7Y2xhc3NOYW1lfSAke19fLmJnfXttYXJnaW46YXV0bzt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJ9LCR7Y2xhc3NOYW1lfTpub3QoJHtfXy50aHVtYk5vdFZpc2libGV9KTpub3QoJHtfXy5kaXNhYmxlZH0pICR7X18udGh1bWJDb250ZW50fTpob3ZlciAke19fLnRodW1ifSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSkgJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1ifXtib3JkZXItcmFkaXVzOjUwJSA1MCUgMCU7fSR7Y2xhc3NOYW1lfSR7X18udGh1bWJWaXNpYmxlfSAke19fLnRodW1iQ29udGVudH06OmJlZm9yZSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSk6bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXI6OmJlZm9yZSwke2NsYXNzTmFtZX06bm90KCR7X18udGh1bWJOb3RWaXNpYmxlfSkgJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfTo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSgxKTt9YCxcblxuICAgIHRyYWNrOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87fWAsXG4gICAgYmc6IG51bGwsXG4gICAgdGh1bWJDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjphdXRvO31gLFxuICAgIHRodW1iQ29udGVudDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5Oi42O3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9IDBtcywgYmFja2dyb3VuZCAke1xuICAgICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zO31gLFxuICAgIHRodW1iOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtsZWZ0Oi02cHg7dG9wOi02cHg7Ym9yZGVyLXJhZGl1czo1MCU7b3V0bGluZTowO3RyYW5zaXRpb246JHtbJ2JvcmRlci1yYWRpdXMnXS5tYXAocHJvcCA9PiBgJHtwcm9wfSAke1xuICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5leGl0aW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMG1zYCkuam9pbigpfTt9JHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOiR7Wydib3gtc2hhZG93J10ubWFwKHByb3AgPT4gYCR7cHJvcH0gJHtcbiAgICAgICAgICB0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICAgICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYCkuam9pbigpfTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06OmJlZm9yZWApfWAsXG4gICAgdGh1bWJMYWJlbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7Ym9yZGVyLXJhZGl1czo1MCU7dG9wOi0xNHB4OyR7YmVmb3JlfTotMTRweDt0cmFuc2l0aW9uOiR7Wyd0cmFuc2Zvcm0nLCAndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm9yZGVyLXJhZGl1cyddLm1hcChwcm9wID0+IGAke3Byb3B9ICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gICAgICB9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH0gMG1zYCkuam9pbigpfTt9YCxcbiAgICB0aHVtYkxhYmVsVmFsdWU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LXNpemU6MTJweDtjb2xvcjojZmZmO31gLFxuXG4gICAgaG9yaXpvbnRhbDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjEyMHB4O2hlaWdodDoycHg7cGFkZGluZzoxMHB4IDA7dG91Y2gtYWN0aW9uOnBhbi15ICFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfSwke2NsYXNzTmFtZX0gJHtfXy5iZ317aGVpZ2h0OjJweDt3aWR0aDoxMDAlO30ke2NsYXNzTmFtZX0gJHtfXy50cmFja317JHtiZWZvcmV9OjA7dG9wOjA7Ym90dG9tOjA7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1ifXt0cmFuc2Zvcm06cm90YXRlWigtMTM1ZGVnKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbH17dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpIHNjYWxlKDApO30ke2NsYXNzTmFtZX0ke19fLnRodW1iVmlzaWJsZX0gJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX06bm90KCR7X18uZGlzYWJsZWR9KSAke19fLnRodW1iQ29udGVudH06aG92ZXIgJHtfXy50aHVtYkxhYmVsfSwke2NsYXNzTmFtZX0gJHtfXy50aHVtYkNvbnRlbnR9JHtfXy50aHVtYkNvbnRlbnRGb2N1c2VkfSAke19fLnRodW1iTGFiZWx9e2JvcmRlci1yYWRpdXM6NTAlIDUwJSAwJTt0b3A6LTUwcHg7dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpIHNjYWxlKDEpO30ke2NsYXNzTmFtZX0gJHtfXy50aHVtYkxhYmVsVmFsdWV9e3RyYW5zZm9ybTpyb3RhdGVaKC00NWRlZyk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGFpbmVyfXt0b3A6MDtib3R0b206MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fTo6YmVmb3Jle3dpZHRoOjJweDtoZWlnaHQ6MjRweDtsZWZ0Oi0xcHg7dG9wOi0yNHB4O30ke2NsYXNzTmFtZX0gJHtfXy50aWNrfXt3aWR0aDoycHg7aGVpZ2h0OmluaGVyaXQ7dG9wOjA7Ym90dG9tOjA7fSR7Y2xhc3NOYW1lfSAke19fLm1hcmt9e3RvcDoyMnB4O3RyYW5zZm9ybTp0cmFuc2xhdGVYKCR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJy0nIDogJyd9NTAlKTt9JHtjbGFzc05hbWV9JHtfXy5tYXJrZWR9e21hcmdpbi1ib3R0b206MjRweDt9YCxcbiAgICB2ZXJ0aWNhbDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjJweDtoZWlnaHQ6MTIwcHg7cGFkZGluZzowIDEwcHg7dG91Y2gtYWN0aW9uOnBhbi14ICFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke19fLnRyYWNrfSwke2NsYXNzTmFtZX0gJHtfXy5iZ317aGVpZ2h0OjEwMCU7d2lkdGg6MnB4O30ke2NsYXNzTmFtZX0gJHtfXy50cmFja317Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1ifXt0cmFuc2Zvcm06JHt0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgPyAncm90YXRlWigxMzVkZWcpJyA6ICdyb3RhdGVaKC00NWRlZyknfTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbH17dHJhbnNmb3JtOnJvdGF0ZVooLTQ1ZGVnKSBzY2FsZSgwKTt9JHtjbGFzc05hbWV9JHtfXy50aHVtYlZpc2libGV9ICR7X18udGh1bWJMYWJlbH0sJHtjbGFzc05hbWV9Om5vdCgke19fLmRpc2FibGVkfSkgJHtfXy50aHVtYkNvbnRlbnR9OmhvdmVyICR7X18udGh1bWJMYWJlbH0sJHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fSR7X18udGh1bWJDb250ZW50Rm9jdXNlZH0gJHtfXy50aHVtYkxhYmVsfXtib3JkZXItcmFkaXVzOiR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJzUwJSA1MCUgMCUnIDogJzAgNTAlIDUwJSA1MCUnfTtiZWZvcmU6LTUwcHg7dHJhbnNmb3JtOnJvdGF0ZVooLTQ1ZGVnKSBzY2FsZSgxKTt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJMYWJlbFZhbHVlfXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7fSR7Y2xhc3NOYW1lfSAke19fLnRodW1iQ29udGFpbmVyfXtsZWZ0OjA7cmlnaHQ6MDt9JHtjbGFzc05hbWV9ICR7X18udGh1bWJDb250ZW50fTo6YmVmb3Jle3dpZHRoOjI0cHg7aGVpZ2h0OjJweDtiZWZvcmU6LTI0cHg7dG9wOi0xcHg7fSR7Y2xhc3NOYW1lfSAke19fLnRpY2t9e3dpZHRoOmluaGVyaXQ7aGVpZ2h0OjJweDtsZWZ0OjA7cmlnaHQ6MDt9JHtjbGFzc05hbWV9ICR7X18ubWFya317JHtiZWZvcmV9OjIycHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKTt9JHtjbGFzc05hbWV9JHtfXy5tYXJrZWR9eyR7dGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyID8gJ21hcmdpbi1yaWdodCcgOiAnbWFyZ2luLWxlZnQnfToyNHB4O31gLFxuXG4gICAgbWFya2VkOiBudWxsLFxuICAgIG1hcms6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zaXplOjE0cHg7Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fWAsXG4gICAgbWFya0FjdGl2ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2NvbG9yOmN1cnJlbnRDb2xvcjt9YCxcbiAgICB0aWNrOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87fWAsXG4gICAgdGlja0FjdGl2ZTogbnVsbCxcblxuICAgIHRodW1iVmlzaWJsZTogbnVsbCxcbiAgICB0aHVtYk5vdFZpc2libGU6IG51bGwsXG4gICAgdGh1bWJDb250ZW50Rm9jdXNlZDogbnVsbCxcbiAgICBzbGlkaW5nOiBudWxsLFxuICAgIGRpc2FibGVkOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y3Vyc29yOmRlZmF1bHQ7fWBcbiAgfTtcbn07XG5cbi8qKiBBIGNoYW5nZSBldmVudCBlbWl0dGVkIGJ5IHRoZSBMeVNsaWRlciBjb21wb25lbnQuICovXG5leHBvcnQgY2xhc3MgTHlTbGlkZXJDaGFuZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFRoZSBMeVNsaWRlciB0aGF0IGNoYW5nZWQuICovXG4gICAgcHVibGljIHNvdXJjZTogTHlTbGlkZXIsXG4gICAgLyoqIFRoZSBuZXcgdmFsdWUgb2YgdGhlIHNvdXJjZSBzbGlkZXIuICovXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwsXG4gICkgeyB9XG59XG5cbmludGVyZmFjZSBUaHVtYiB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgcGVyY2VudDogbnVtYmVyIHwgbnVsbDtcbiAgc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBmb2N1c2VkPzogYm9vbGVhbjtcbiAgc2xpZGluZz86IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbGlkZXJNYXJrIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGFiZWw6IG51bWJlciB8IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5U2xpZGVyJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTFlfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdLFxuICBob3N0OiB7XG4gICAgJyhzbGlkZSknOiAnX29uU2xpZGUoJGV2ZW50KScsXG4gICAgJyhzbGlkZWVuZCknOiAnX29uU2xpZGVFbmQoKScsXG4gICAgJyh0YXApJzogJ19vblRhcCgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5U2xpZGVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBzdGF0aWMg0LggPSAnTHlTbGlkZXInO1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZlcnRpY2FsQ2xhc3M/OiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RodW1ic09uU2xpZGVTdGFydDogVGh1bWJbXSB8IG51bGw7XG4gIHByaXZhdGUgX3ZhbHVlT25TbGlkZVN0YXJ0OiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDEwMDtcblxuICBwcml2YXRlIF9zdGVwOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9zdGVwUHJlY2lzaW9uPzogbnVtYmVyIHwgbnVsbDtcblxuICBwcml2YXRlIF9jbG9zZXN0SW5kZXg6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2N1cnJlbnRSZWN0OiBET01SZWN0IHwgbnVsbDtcblxuICBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIE1pbiBwZXJjZW50YWdlLCB0aGlzIGlzIGZvciBtYXJrLiAqL1xuICBfbWluUGVyY2VudDogbnVtYmVyO1xuICAvKiogTWF4IHBlcmNlbnRhZ2UsIHRoaXMgaXMgZm9yIG1hcmsuICovXG4gIF9tYXhQZXJjZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSB0aHVtYiBpcyBzbGlkaW5nLlxuICAgKi9cbiAgX2lzU2xpZGluZzogYm9vbGVhbjtcbiAgX3NsaWRpbmdUaHVtYlZhbHVlPzogbnVtYmVyIHwgbnVsbDtcblxuICBfdGh1bWJzOiBUaHVtYltdID0gW107XG5cbiAgX3Jvb3RDbGFzc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgQFZpZXdDaGlsZCgnYmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgX2JnPzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3RyYWNrJywgeyBzdGF0aWM6IHRydWUgfSkgX3RyYWNrOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndGlja3NSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfdGlja3NSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCd0aHVtYnNSZWYnKSBfdGh1bWJzUmVmPzogUXVlcnlMaXN0PEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+PjtcblxuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKHZhbHVlOiBudW1iZXIgfCBudWxsKSA9PiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNsaWRlckNoYW5nZT4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgdGh1bWIgbW92ZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dDogRXZlbnRFbWl0dGVyPEx5U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbGlkZXJDaGFuZ2U+KCk7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSB0aHVtYi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHRodW1iVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGh1bWJWaXNpYmxlO1xuICB9XG4gIHNldCB0aHVtYlZpc2libGUodmFsOiBib29sZWFuIHwgbnVsbCkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHZhbCAhPSBudWxsID8gdG9Cb29sZWFuKHZhbCkgOiBudWxsO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy50aHVtYlZpc2libGUpIHtcblxuICAgICAgY29uc3QgeyB0aHVtYlZpc2libGU6IHRodW1iVmlzaWJsZUNsYXNzIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgICBjb25zdCB7IHRodW1iTm90VmlzaWJsZTogdGh1bWJOb3RWaXNpYmxlQ2xhc3MgfSA9IHRoaXMuY2xhc3NlcztcbiAgICAgIHRoaXMuX3RodW1iVmlzaWJsZSA9IG5ld1ZhbDtcblxuICAgICAgdGhpcy5faG9zdENsYXNzLnRvZ2dsZSh0aHVtYlZpc2libGVDbGFzcywgbmV3VmFsID09PSB0cnVlKTtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcy50b2dnbGUodGh1bWJOb3RWaXNpYmxlQ2xhc3MsIG5ld1ZhbCA9PT0gZmFsc2UpO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGh1bWJWaXNpYmxlOiBib29sZWFuIHwgbnVsbDtcblxuICAvKiogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgbWFya3MsIGFsc28gYWNjZXB0cyBhbiBhcnJheSBvZiBtYXJrcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1hcmtzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXJrcztcbiAgfVxuICBzZXQgbWFya3ModmFsOiBib29sZWFuIHwgTHlTbGlkZXJNYXJrW10pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMubWFya3MpIHtcblxuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNsYXNzZXMubWFya2VkO1xuXG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICAgICAgdGhpcy5fbWFya3NDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgICB0aGlzLl9tYXJrcyA9IEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG5ld1ZhbDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWFya3NDbGFzcykge1xuICAgICAgICB0aGlzLl9tYXJrcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgICAgIHRoaXMuX21hcmtzQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsKSkge1xuICAgICAgICB0aGlzLl9tYXJrc0xpc3QgPSB2YWwgYXMgTHlTbGlkZXJNYXJrW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXJrc0xpc3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya3M6IGJvb2xlYW4gfCBMeVNsaWRlck1hcmtbXTtcbiAgcHJpdmF0ZSBfbWFya3NDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgX21hcmtzTGlzdD86IEx5U2xpZGVyTWFya1tdIHwgbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHRvTnVtYmVyKHYsIHRoaXMuX21heCk7XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgbWluaW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIHNldCBtaW4odjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluID0gdG9OdW1iZXIodiwgdGhpcy5fbWluKTtcblxuICAgIC8vIElmIHRoZSB2YWx1ZSB3YXNuJ3QgZXhwbGljaXRseSBzZXQgYnkgdGhlIHVzZXIsIHNldCBpdCB0byB0aGUgbWluLlxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX21pbjtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlVGh1bWJzKCk7XG5cbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBUaGUgc2xpZGVyIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgICBgJHtMeVNsaWRlci7QuH0uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgICAgICAgICBpZiAodGhlbWUuc2xpZGVyICYmIHRoZW1lLnNsaWRlci5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhlbWUuc2xpZGVyLmFwcGVhcmFuY2VbdmFsXTtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcHBlYXJhbmNlIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgPyBhcHBlYXJhbmNlLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKGNsYXNzZXMpKS5jc3NcbiAgICAgICAgICAgICAgICA6IGFwcGVhcmFuY2UoY2xhc3NlcywgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLnNsaWRlci5hcHBlYXJhbmNlYCk7XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICAvKiogQ29sb3Igb2YgU2xpZGVyICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICBjb25zdCBzdHlsZUtleSA9IGAke0x5U2xpZGVyLtC4fS5jb2xvcjoke3ZhbH1gO1xuXG4gICAgY29uc3QgbmV3U3R5bGUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcblxuICAgICAgaWYgKHRoZW1lLnNsaWRlciAmJiB0aGVtZS5zbGlkZXIuY29sb3IpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29sb3IgPSB0aGVtZS5zbGlkZXIuY29sb3I7XG4gICAgICAgIGlmIChzbGlkZXJDb2xvcikge1xuICAgICAgICAgIHJldHVybiBzbGlkZXJDb2xvciBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgPyAoc2xpZGVyQ29sb3IpLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKF9fLCBjb2xvcikpLmNzc1xuICAgICAgICAgICAgOiBzbGlkZXJDb2xvcihfXywgY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuc2xpZGVyLmNvbG9yYCk7XG4gICAgfTtcbiAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgc3R5bGVLZXksXG4gICAgICBuZXdTdHlsZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZICsgMSxcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3NcbiAgICApO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyB2ZXJ0aWNhbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBzZXQgdmVydGljYWwodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fdmVydGljYWwgPSBuZXdWYWw7XG5cbiAgICBjb25zdCBuZXdDbGFzcyA9IG5ld1ZhbFxuICAgICAgPyB0aGlzLmNsYXNzZXMudmVydGljYWxcbiAgICAgIDogdGhpcy5jbGFzc2VzLmhvcml6b250YWw7XG5cbiAgICB0aGlzLl92ZXJ0aWNhbENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fcmVuZGVyZXIsXG4gICAgICBuZXdDbGFzcyxcbiAgICAgIHRoaXMuX3ZlcnRpY2FsQ2xhc3MgYXMgYW55KTtcbiAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoZSB2YWx1ZXMgYXQgd2hpY2ggdGhlIHRodW1iIHdpbGwgc25hcC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0ZXAoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3N0ZXA7IH1cbiAgc2V0IHN0ZXAodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RlcCA9IHRvTnVtYmVyKHYsIHRoaXMuX3N0ZXApO1xuXG4gICAgdGhpcy5fc3RlcFByZWNpc2lvbiA9IHRoaXMuX3N0ZXAgJSAxICE9PSAwXG4gICAgICA/IHRoaXMuX3N0ZXAudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aFxuICAgICAgOiBudWxsO1xuXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsdWUgb2YgYSBzbGlkZXIsIHRoaXMgY2FuIGJlIGEgbnVtYmVyIG9yIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAqIElmIHRoZSBhcnJheSBvZiBudW1iZXJzIGhhcyBtb3JlIHRoYW4gb25lIHZhbHVlLFxuICAgKiB0aGVuIHRoaXMgd2lsbCBjcmVhdGUgbW9yZSB0aHVtYnNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbDogbnVtYmVyIHwgKG51bWJlciB8IG51bGwpW10gfCBudWxsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KG5ld1ZhbHVlLnRvRml4ZWQodGhpcy5fc3RlcFByZWNpc2lvbiBhcyBudW1iZXIpKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWVJc0FycmF5ICYmICFhcnJheUVxdWFscyh0aGlzLl92YWx1ZSwgdmFsKSkge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWwgYXMgbnVtYmVyW107XG4gICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUubWFwKFxuICAgICAgICAgIF92YWwgPT4gX3ZhbCA9PT0gbnVsbFxuICAgICAgICAgID8gX3ZhbFxuICAgICAgICAgIDogcGFyc2VGbG9hdChfdmFsLnRvRml4ZWQodGhpcy5fc3RlcFByZWNpc2lvbiBhcyBudW1iZXIpKSk7XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RodW1icyA9ICh2YWx1ZUlzQXJyYXkgP1xuICAgICAgICB0aGlzLl92YWx1ZSBhcyAobnVtYmVyIHwgbnVsbClbXVxuICAgICAgICA6IFt0aGlzLl92YWx1ZSBhcyBudW1iZXIgfCBudWxsXSkubWFwKCh2LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogdG9OdW1iZXIodiwgdGhpcy5taW4pLFxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogbnVsbCxcbiAgICAgICAgICBwZXJjZW50OiBudWxsLFxuICAgICAgICAgIHN0eWxlczoge31cbiAgICAgICAgfSkpO1xuXG4gICAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcblxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjb25zdCBzdHlsZUtleSA9IGAke0x5U2xpZGVyLtC4fS5kaXNhYmxlZDoke3ZhbH0tJHtjb2xvcn1gO1xuICAgICAgICBsZXQgbmV3U3R5bGU6ICgodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlTbGlkZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUpO1xuICAgICAgICBuZXdTdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNsaWRlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsciA9IHRoZW1lLmNvbG9yT2YoY29sb3IpO1xuICAgICAgICAgIGNvbnN0IF9fID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG5cbiAgICAgICAgICBpZiAodGhlbWUuc2xpZGVyICYmIHRoZW1lLnNsaWRlci5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyQ29sb3IgPSB0aGVtZS5zbGlkZXIuZGlzYWJsZWQ7XG4gICAgICAgICAgICBpZiAoc2xpZGVyQ29sb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlckNvbG9yIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgPyAoc2xpZGVyQ29sb3IpLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKF9fLCBjbHIpKS5jc3NcbiAgICAgICAgICAgICAgICA6IHNsaWRlckNvbG9yKF9fLCBjbHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuc2xpZGVyLmNvbG9yYCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgICAgIHN0eWxlS2V5LFxuICAgICAgICAgIG5ld1N0eWxlLFxuICAgICAgICAgIFNUWUxFX1BSSU9SSVRZICsgMS41LFxuICAgICAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3NcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5faG9zdENsYXNzLmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gbmV3Q2xhc3M7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5faG9zdENsYXNzLnJlbW92ZSh0aGlzLl9kaXNhYmxlZENsYXNzKTtcbiAgICAgICAgdGhpcy5faG9zdENsYXNzLnJlbW92ZSh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgdGh1bWIgbGFiZWwsIGJ1dCBpZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIsXG4gICAqIGl0IHdpbGwgc2hvdyB0aWNrcyBhY2NvcmRpbmcgdG8gdGhlIHN0ZXBzLiBGb3IgZXhhbXBsZTogaWYgeW91IHNldFxuICAgKiAzIHRpY2tzIHdpdGggYSBzdGVwIG9mIDEwLCB5b3Ugd2lsbCBkcmF3IGEgdGljayBldmVyeSAzMCB2YWx1ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0aWNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlja3M7XG4gIH1cbiAgc2V0IHRpY2tzKHZhbDogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdG9OdW1iZXIodmFsLCB0b0Jvb2xlYW4odmFsKSk7XG4gICAgdGhpcy5fdGlja3MgPSBuZXdWYWx1ZTtcbiAgfVxuICBwcml2YXRlIF90aWNrczogbnVtYmVyIHwgYm9vbGVhbjtcbiAgX3RpY2tJbnRlcnZhbDogbnVtYmVyO1xuICBnZXQgX3RpY2tMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9fdGlja0xpc3Q7XG4gIH1cbiAgcHJpdmF0ZSBfX3RpY2tMaXN0OiBudW1iZXJbXTtcbiAgLy8gcHJpdmF0ZSBfbmdDbGFzczogTmdDbGFzcztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3MsXG4gICAgcHJpdmF0ZSBfc3I6IFN0eWxlUmVuZGVyZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9TTElERVJfREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIF9kZWZhdWx0OiBMeVNsaWRlckRlZmF1bHRPcHRpb25zXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlVGlja1ZhbHVlcygpO1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLl90aGVtZS5kaXJlY3Rpb25DaGFuZ2VkLnBpcGUodW50aWxDb21wb25lbnREZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgICB0aGlzLl91cGRhdGVUaHVtYnMoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IGFwcGVhcmFuY2UgKi9cbiAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICh0aGlzLl9kZWZhdWx0ICYmIHRoaXMuX2RlZmF1bHQuYXBwZWFyYW5jZSkgfHwgJ3N0YW5kYXJkJztcbiAgICB9XG5cbiAgICAvKiogU2V0IGhvcml6b250YWwgc2xpZGVyICovXG4gICAgaWYgKHRoaXMudmVydGljYWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBjb2xvciAqL1xuICAgIGlmICh0aGlzLmNvbG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnYWNjZW50JztcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgc3RlcCAqL1xuICAgIGlmICh0aGlzLnN0ZXAgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgc2VsZWN0LiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgcmVxdWlyZWRcbiAgICogdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgX29uRm9jdXModGh1bWI6IFRodW1iKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aHVtYi5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfb25CbHVyKHRodW1iOiBUaHVtYikge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGh1bWIuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9vblRhcChldmVudDogSGFtbWVySW5wdXQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGFydFNsaWRlKCk7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tUG9zaXRpb24oZXZlbnQuY2VudGVyLngsIGV2ZW50LmNlbnRlci55KTtcbiAgICB0aGlzLl9vblNsaWRlRW5kKCk7XG4gIH1cblxuICBfb25TbGlkZShldmVudDogSGFtbWVySW5wdXQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0U2xpZGUoKTtcblxuICAgIGlmIChldmVudFsnaXNGaW5hbCddKSB7XG4gICAgICBpZiAoZXZlbnRbJ3BvaW50ZXJUeXBlJ10gPT09ICd0b3VjaCcgJiYgZXZlbnQuY2VudGVyLnggPT09IDAgJiYgZXZlbnQuY2VudGVyLnkgPT09IDApIHtcbiAgICAgICAgLy8gcmVzdG9yZSB0byBpbml0aWFsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKGV2ZW50LmNlbnRlci54LCBldmVudC5jZW50ZXIueSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vblNsaWRlRW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKGV2ZW50LmNlbnRlci54LCBldmVudC5jZW50ZXIueSk7XG4gICAgfVxuXG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5fZW1pdElucHV0RXZlbnQoKTtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0U2xpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGluZyk7XG5cbiAgICAgIC8vIGNsb25lXG4gICAgICB0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCA9IEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlLnNsaWNlKDApIDogdGhpcy52YWx1ZTtcblxuICAgICAgdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0ID0gdGhpcy5fdGh1bWJzLnNsaWNlKDApLm1hcCh0ID0+ICh7Li4udH0pKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRSZWN0ID0gdGhpcy5fYmchLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICB9XG4gIH1cblxuICBfb25TbGlkZUVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkaW5nKTtcblxuICAgICAgaWYgKCF2YWx1ZUVxdWFscyh0aGlzLl92YWx1ZU9uU2xpZGVTdGFydCwgdGhpcy52YWx1ZSkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZhbHVlT25TbGlkZVN0YXJ0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2Nsb3Nlc3RJbmRleCA9IG51bGw7XG4gICAgICB0aGlzLl9jdXJyZW50UmVjdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgX3RyYWNrQnlGbihfaW5kZXg6IG51bWJlciwgaXRlbTogVGh1bWIpIHtcbiAgICByZXR1cm4gaXRlbS5pbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVZhbHVlRnJvbVBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLl9iZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHcgPSB0aGlzLl9jdXJyZW50UmVjdCEud2lkdGg7XG4gICAgY29uc3QgaCA9IHRoaXMuX2N1cnJlbnRSZWN0IS5oZWlnaHQ7XG4gICAgeCAtPSB0aGlzLl9jdXJyZW50UmVjdCEueDtcbiAgICB5IC09IHRoaXMuX2N1cnJlbnRSZWN0IS55O1xuXG4gICAgbGV0IHBlcmNlbnQgPSBjbGFtcChcbiAgICAgIHRoaXMudmVydGljYWxcbiAgICAgICAgPyDQs3ZhbHVlVG9QZXJjZW50KHksIDAsIGgpXG4gICAgICAgIDog0LN2YWx1ZVRvUGVyY2VudCh4LCAwLCB3KSxcbiAgICAgIDAsXG4gICAgICAxMDApO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwgfHwgKCF0aGlzLnZlcnRpY2FsICYmIHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb24gPT09IERpci5ydGwpKSB7XG4gICAgICBwZXJjZW50ID0gMTAwIC0gcGVyY2VudDtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWU6IG51bWJlcjtcblxuICAgIGlmIChwZXJjZW50ID09PSAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWluO1xuICAgIH0gZWxzZSBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuX3JvdW5kVmFsdWVUb1N0ZXAocGVyY2VudFRvVmFsdWUocGVyY2VudCwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG9zZXN0SW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY2xvc2VzdEluZGV4ID0gZmluZENsb3Nlc3QodGhpcy5fdGh1bWJzLm1hcCh0aHVtYiA9PiB0aHVtYi52YWx1ZSksIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRodW1iID0gdGhpcy5fdGh1bWJzT25TbGlkZVN0YXJ0IVt0aGlzLl9jbG9zZXN0SW5kZXhdO1xuICAgIHRoaXMuX3NsaWRpbmdUaHVtYlZhbHVlID0gY3VycmVudFRodW1iLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl90aHVtYnNPblNsaWRlU3RhcnQhLm1hcCh0aHVtYiA9PiB0aHVtYi52YWx1ZSkuc29ydChBU0MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gZm9jdXMgc2xpZGluZ1RodW1iXG4gICAgY29uc3QgY3VycmVudFNsaWRpbmdUaHVtYjogVGh1bWIgfCB1bmRlZmluZWQgPSB0aGlzLl90aHVtYnMuZmluZCh0aHVtYiA9PiB0aHVtYi52YWx1ZSA9PT0gdmFsdWUpITtcbiAgICBpZiAoY3VycmVudFNsaWRpbmdUaHVtYikge1xuICAgICAgY3VycmVudFNsaWRpbmdUaHVtYi5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RodW1ic1JlZiEudG9BcnJheSgpW2N1cnJlbnRTbGlkaW5nVGh1bWIuaW5kZXhdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUaHVtYnMoKSB7XG4gICAgdGhpcy5fdGh1bWJzLmZvckVhY2godGh1bWIgPT4ge1xuICAgICAgY29uc3QgdmFsID0gY2xhbXAodGh1bWIudmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICBjb25zdCBwZXJjZW50ID0g0LN2YWx1ZVRvUGVyY2VudCh2YWwsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLl9jYWxjdWxhdGVQb3NpdGlvbihwZXJjZW50KTtcbiAgICAgIHRodW1iLnZhbHVlID0gdmFsO1xuICAgICAgdGh1bWIuZGlzcGxheVZhbHVlID0gdGhpcy5fdHJhbnNmb3JtVmFsdWUodmFsKTtcbiAgICAgIHRodW1iLnBlcmNlbnQgPSBwZXJjZW50O1xuICAgICAgdGh1bWIuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGh1bWIuc3R5bGVzID0ge1xuICAgICAgICBbcG9zLnN0eWxlXTogcG9zLnZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fdXBkYXRlVHJhY2soKTtcbiAgfVxuXG4gIF9jYWxjdWxhdGVQb3NpdGlvbihwZXJjZW50OiBudW1iZXIpIHtcbiAgICBsZXQgc3R5bGU6IHN0cmluZztcbiAgICBjb25zdCB2YWx1ZSA9IGAke3BlcmNlbnR9JWA7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc3R5bGUgPSAnYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB0aGlzLl90aGVtZS52YXJpYWJsZXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZSxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRyYWNrKCkge1xuICAgIGNvbnN0IHRyYWNrID0gdGhpcy5fdHJhY2s7XG4gICAgY29uc3QgdGh1bWJzID0gdGhpcy5fdGh1bWJzO1xuICAgIGNvbnN0IHRodW1ic1BlcmNlbnRzID0gdGh1bWJzLm1hcCh0aHVtYiA9PiB0aHVtYi5wZXJjZW50ISk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gICAgaWYgKHRodW1icy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRodW1ic1BlcmNlbnRzLnVuc2hpZnQoMCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWluUGVyY2VudCA9IHRoaXMuX21pblBlcmNlbnQgPSBNYXRoLm1pbiguLi50aHVtYnNQZXJjZW50cyk7XG4gICAgY29uc3QgbWF4UGVyY2VudCA9IHRoaXMuX21heFBlcmNlbnQgPSBNYXRoLm1heCguLi50aHVtYnNQZXJjZW50cyk7XG5cbiAgICBpZiAodHJhY2spIHtcblxuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBudWxsO1xuICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5yaWdodCA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7KG1heFBlcmNlbnQgLSBtaW5QZXJjZW50KX0lYDtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHttaW5QZXJjZW50fSVgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2submF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke21heFBlcmNlbnQgLSBtaW5QZXJjZW50fSVgO1xuICAgICAgICB0cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlW2RpcmVjdGlvbl0gPSBgJHttaW5QZXJjZW50fSVgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBFbWl0cyBhIGNoYW5nZSBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fY3JlYXRlQ2hhbmdlRXZlbnQoKSk7XG4gIH1cblxuICAvKiogRW1pdHMgYW4gaW5wdXQgZXZlbnQuICovXG4gIHByaXZhdGUgX2VtaXRJbnB1dEV2ZW50KCkge1xuICAgIHRoaXMuaW5wdXQuZW1pdCh0aGlzLl9jcmVhdGVDaGFuZ2VFdmVudCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNoYW5nZUV2ZW50KHZhbHVlID0gdGhpcy52YWx1ZSkge1xuICAgIHJldHVybiBuZXcgTHlTbGlkZXJDaGFuZ2UodGhpcywgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcm91bmRWYWx1ZVRvU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcigoTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMuc3RlcCkgKiB0aGlzLnN0ZXApLnRvRml4ZWQodGhpcy5fc3RlcFByZWNpc2lvbiEpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zZm9ybVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5V2l0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheVdpdGgodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUaWNrVmFsdWVzKCkge1xuICAgIHRoaXMuX190aWNrTGlzdCA9IFtdO1xuICAgIGlmICghdGhpcy50aWNrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aWNrcyA9IHRoaXMudGlja3M7XG4gICAgICB0aGlzLl90aWNrSW50ZXJ2YWwgPSB0eXBlb2YgdGlja3MgPT09ICdudW1iZXInXG4gICAgICAgID8gdGhpcy5zdGVwICogdGlja3NcbiAgICAgICAgOiB0aGlzLnN0ZXA7XG5cbiAgICAgIHRoaXMuX190aWNrTGlzdCA9IFtdO1xuICAgICAgY29uc3QgdGlja0ludGVydmFscyA9IHRoaXMuX3RpY2tJbnRlcnZhbCArIDE7XG4gICAgICBjb25zdCBzdGVwV2l0aCA9IHRoaXMuX3RpY2tJbnRlcnZhbDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aWNrSW50ZXJ2YWxzOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMuX190aWNrTGlzdC5wdXNoKGNsYW1wKGluZGV4ICogc3RlcFdpdGgsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0KHZhbHVlczogbnVtYmVyW10sIGN1cnJlbnRWYWx1ZTogbnVtYmVyKSB7XG4gIGNvbnN0IHsgaW5kZXg6IGNsb3Nlc3RJbmRleCB9ID0gdmFsdWVzLnJlZHVjZTx7XG4gICAgZGlzdGFuY2U6IG51bWJlclxuICAgIGluZGV4OiBudW1iZXJcbiAgfSB8IG51bGw+KChwcmV2aW91c1ZhbHVlLCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnRWYWx1ZSAtIHZhbHVlKTtcblxuICAgIGlmIChwcmV2aW91c1ZhbHVlID09PSBudWxsIHx8IGRpc3RhbmNlIDwgcHJldmlvdXNWYWx1ZS5kaXN0YW5jZSB8fCBkaXN0YW5jZSA9PT0gcHJldmlvdXNWYWx1ZS5kaXN0YW5jZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGluZGV4LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAgfSwgbnVsbCkhO1xuICByZXR1cm4gY2xvc2VzdEluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24g0LN2YWx1ZVRvUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuICgodmFsdWUgLSBtaW4pICogMTAwKSAvIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50VG9WYWx1ZShwZXJjZW50LCBtaW4sIG1heCkge1xuICByZXR1cm4gKG1heCAtIG1pbikgKiAocGVyY2VudCAvIDEwMCkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGFycmF5RXF1YWxzKGFycmF5MTogYW55LCBhcnJheTI6IGFueSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheTEpICYmIEFycmF5LmlzQXJyYXkoYXJyYXkyKSAmJiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoXG4gICAgJiYgYXJyYXkxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBhcnJheTJbaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gdmFsdWVFcXVhbHModmFsdWU6IG51bWJlciB8IChudW1iZXIgfCBudWxsKVtdIHwgbnVsbCwgdmFsdWUyOiBudW1iZXIgfCAobnVtYmVyIHwgbnVsbClbXSB8IG51bGwpIHtcbiAgaWYgKHZhbHVlID09PSB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYXJyYXlFcXVhbHModmFsdWUsIHZhbHVlMik7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmICh2YWx1ZSA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24g0LNiZXR3ZWVuKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbn1cblxuZnVuY3Rpb24gQVNDKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBhIC0gYjtcbn1cbiJdfQ==