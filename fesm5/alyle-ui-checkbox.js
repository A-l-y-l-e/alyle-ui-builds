import { __extends, __decorate } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, NgZone, ViewChild, Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { st2c, StyleCollection, LY_COMMON_STYLES, mixinDisableRipple, toBoolean, LyCoreStyles, LyTheme2, LyFocusState, StyleRenderer, Style, LyHostClass, LyCommonModule } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var STYLE_PRIORITY = -2;
var DEFAULT_WITH_COLOR = 'accent';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLES = function (theme, ref) {
    var checkbox = ref.selectorsOf(STYLES);
    var before = theme.before, after = theme.after;
    return {
        $name: LyCheckbox.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{margin-" + after + ":16px;margin-" + before + ":-16px;display:inline-flex;}" + st2c(((theme.checkbox
            && theme.checkbox.root
            && (theme.checkbox.root instanceof StyleCollection
                ? theme.checkbox.root.setTransformer(function (fn) { return fn(checkbox); })
                : theme.checkbox.root(checkbox)))), "" + className) + className + checkbox.disabled + ":not(" + checkbox.checked + ") " + checkbox.icon + ":before{color:" + theme.disabled.default + ";}" + className + checkbox.disabled + "{pointer-events:none;}" + className + checkbox.disabled + " " + checkbox.layout + "{color:" + theme.text.secondary + ";}" + className + checkbox.disabled + checkbox.checked + " " + checkbox.icon + ":before{border:0;background:" + theme.disabled.default + ";}" + className + checkbox.onFocusByKeyboard + " " + checkbox.icon + "::after{box-shadow:0 0 0 12px;opacity:.13;border-radius:50%;}" + className + ":not(" + checkbox.checked + ") " + checkbox.icon + "{color:" + theme.text.secondary + ";}"; }; },
        layout: function (className) { return className + "{display:inline-flex;align-items:baseline;cursor:pointer;margin-" + before + ":16px;padding-top:12px;padding-bottom:12px;}"; },
        icon: function (className) { return className + "{position:relative;margin-" + after + ":8px;margin-top:auto;margin-bottom:auto;width:16px;height:16px;user-select:none;}" + className + "::before," + className + "::after{content:'';width:16px;height:16px;margin:auto;box-sizing:border-box;}" + st2c((LY_COMMON_STYLES.fill), className + "::before," + className + "::after") + className + "::before{border:solid 2px;border-radius:2px;}" + className + " svg{position:absolute;}" + className + " svg polyline{fill:none;stroke:" + theme.background.primary.default + ";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18px;stroke-dashoffset:18px;}"; },
        checked: function () { return function (className) { return className + " " + checkbox.icon + "::before{background:currentColor;}" + className + " " + checkbox.icon + " polyline{stroke-dashoffset:0;}"; }; },
        input: LY_COMMON_STYLES.visuallyHidden,
        onFocusByKeyboard: null,
        disabled: function () { return function (className) { return className + " " + checkbox.input + "{visibility:hidden;}" + className + " " + checkbox.icon + "{color:inherit !important;}"; }; },
        animations: function () { return function (className) { return className + " " + checkbox.icon + " svg polyline{transition:all " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + ";}"; }; }
    };
};
/**
 * This allows it to support [(ngModel)].
 * @ignore
 */
var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyCheckbox; }),
    multi: true
};
/** Change event object emitted by LyCheckbox. */
var LyCheckboxChange = /** @class */ (function () {
    function LyCheckboxChange() {
    }
    return LyCheckboxChange;
}());
/** @docs-private */
var LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
/** @docs-private */
var LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
var ɵ0 = function (val) { return function (theme, ref) {
    var checkbox = ref.selectorsOf(STYLES);
    var color = theme.colorOf(val);
    if (theme.checkbox && theme.checkbox.color) {
        return theme.checkbox.color(checkbox, color);
    }
    throw new Error(LyCheckbox_1.и + ": styles theme.checkbox.color is undefined");
}; };
/**
 * @dynamic
 */
var LyCheckbox = /** @class */ (function (_super) {
    __extends(LyCheckbox, _super);
    function LyCheckbox(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, sRenderer, ngZone) {
        var _this = _super.call(this, _theme, ngZone) || this;
        _this._commonStyles = _commonStyles;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusState = _focusState;
        _this.sRenderer = sRenderer;
        /**
         * styles
         * @ignore
         */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        /** Event emitted when the checkbox's `checked` value changes. */
        _this.change = new EventEmitter();
        _this._onTouched = function () { };
        _this._controlValueAccessorChangeFn = function () { };
        _this._triggerElement = _this._el;
        _this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
        return _this;
    }
    LyCheckbox_1 = LyCheckbox;
    Object.defineProperty(LyCheckbox.prototype, "checked", {
        /**
         * Whether the checkbox is checked.
         */
        get: function () { return this._checked; },
        set: function (val) {
            var newVal = toBoolean(val);
            // if (newVal !== this.checked) {
            this._checked = newVal;
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this.classes.checked);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.checked);
            }
            // }
            this._markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCheckbox.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (val) {
            this._required = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCheckbox.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.disabled) {
                this._disabled = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.disabled);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.disabled);
                }
                this._markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    LyCheckbox.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
        // set default color
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
    };
    LyCheckbox.prototype.ngAfterViewInit = function () {
        var _this = this;
        var focusState = this._focusState.listen(this._inputElement, this._el);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (_this._onFocusByKeyboardState === true) {
                    _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    _this._onFocusByKeyboardState = false;
                }
                if (event === 'keyboard') {
                    _this._onFocusByKeyboardState = true;
                    _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                }
                _this._onTouched();
            });
        }
        this._rippleContainer = this._innerContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
    };
    LyCheckbox.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    };
    /** @docs-private */
    LyCheckbox.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    /** @docs-private */
    LyCheckbox.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /** @docs-private */
    LyCheckbox.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /** @docs-private */
    LyCheckbox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Toggles the `checked` state of the checkbox. */
    LyCheckbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    LyCheckbox.prototype._onInputClick = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
        this._markForCheck();
    };
    LyCheckbox.prototype._onChange = function (event) {
        event.stopPropagation();
    };
    LyCheckbox.prototype._emitChangeEvent = function () {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit({
            source: this,
            checked: this.checked
        });
    };
    LyCheckbox.prototype._markForCheck = function () {
        this._changeDetectorRef.markForCheck();
    };
    var LyCheckbox_1;
    /** @ignore */
    LyCheckbox.и = 'LyCheckbox';
    LyCheckbox.ctorParameters = function () { return [
        { type: LyCoreStyles },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyFocusState },
        { type: StyleRenderer },
        { type: NgZone }
    ]; };
    __decorate([
        ViewChild('innerContainer', { static: false })
    ], LyCheckbox.prototype, "_innerContainer", void 0);
    __decorate([
        Input()
    ], LyCheckbox.prototype, "value", void 0);
    __decorate([
        Input(),
        Style(ɵ0, STYLE_PRIORITY)
    ], LyCheckbox.prototype, "color", void 0);
    __decorate([
        Input()
    ], LyCheckbox.prototype, "checked", null);
    __decorate([
        Input()
    ], LyCheckbox.prototype, "required", null);
    __decorate([
        Input()
    ], LyCheckbox.prototype, "disabled", null);
    __decorate([
        Output()
    ], LyCheckbox.prototype, "change", void 0);
    __decorate([
        ViewChild('input', { static: false })
    ], LyCheckbox.prototype, "_inputElement", void 0);
    LyCheckbox = LyCheckbox_1 = __decorate([
        Component({
            selector: 'ly-checkbox',
            template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                LyHostClass,
                StyleRenderer,
                LY_CHECKBOX_CONTROL_VALUE_ACCESSOR,
            ],
            exportAs: 'lyCheckbox',
            inputs: [
                'disableRipple'
            ]
        })
    ], LyCheckbox);
    return LyCheckbox;
}(LyCheckboxMixinBase));

var LyCheckboxModule = /** @class */ (function () {
    function LyCheckboxModule() {
    }
    LyCheckboxModule = __decorate([
        NgModule({
            declarations: [
                LyCheckbox
            ],
            imports: [
                CommonModule,
                LyCommonModule
            ],
            exports: [
                LyCommonModule,
                LyCheckbox
            ]
        })
    ], LyCheckboxModule);
    return LyCheckboxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LY_CHECKBOX_CONTROL_VALUE_ACCESSOR, LyCheckbox, LyCheckboxBase, LyCheckboxChange, LyCheckboxMixinBase, LyCheckboxModule, STYLES, ɵ0 };
//# sourceMappingURL=alyle-ui-checkbox.js.map
