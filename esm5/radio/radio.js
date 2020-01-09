import * as tslib_1 from "tslib";
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, OnInit, OnDestroy, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean, mixinDisableRipple, ThemeVariables, LyFocusState, LY_COMMON_STYLES, st2c, StyleCollection, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_DISABLE_RIPPLE = false;
var DEFAULT_COLOR = 'accent';
export var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyRadioGroup; }),
    multi: true
};
var idx = 0;
var UndefinedValue = /** @class */ (function () {
    function UndefinedValue() {
    }
    return UndefinedValue;
}());
export { UndefinedValue };
export var STYLES = function (theme, ref) {
    var radio = ref.selectorsOf(STYLES);
    var after = theme.after, before = theme.before;
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:inline-block;}" + st2c(((theme.radio
            && theme.radio.root
            && (theme.radio.root instanceof StyleCollection
                ? theme.radio.root.setTransformer(function (fn) { return fn(radio); })
                : theme.radio.root(radio)))), "" + className); }; },
        radio: function () { return function (className) { return className + "{display:inline-block;margin-" + after + ":16px;margin-" + before + ":-16px;}" + className + radio.checked + " " + radio.container + " div:nth-child(1){transform:scale(1.25);}" + className + radio.checked + " " + radio.container + " div:nth-child(2){transform:scale(0.8);}" + className + radio.onFocusByKeyboard + " " + radio.container + "::after{box-shadow:0 0 0 12px;background:currentColor;opacity:.13;border-radius:50%;}"; }; },
        label: function (className) { return className + "{margin-" + before + ":16px;cursor:pointer;white-space:nowrap;position:relative;display:flex;align-items:baseline;padding-top:12px;padding-bottom:12px;}"; },
        labelContent: null,
        container: function (className) { return className + "{position:relative;margin-" + before + ":.125em;margin-" + after + ":.5em;margin-top:auto;margin-bottom:auto;width:16px;height:16px;}" + className + " div{margin:auto;border-radius:50%;width:1em;height:1em;box-sizing:border-box;}" + className + "::after{content:'';width:16px;height:16px;margin:auto;}" + st2c((LY_COMMON_STYLES.fill), className + "::after") + className + " div:nth-child(2){background:currentColor;transform:scale(0);}" + className + " div:nth-child(1){transform:scale(1);border:solid .08em currentColor;color:" + theme.text.disabled + ";}"; },
        checked: null,
        _animations: function () { return function (className) { return className + " " + radio.container + " div{transition:transform cubic-bezier(.1, 1, 0.5, 1);transition-duration:250ms;}"; }; },
        onFocusByKeyboard: null,
        disabled: function () { return function (className) { return className + "{color:" + theme.disabled.contrast + ";}" + className + " " + radio.container + " div{color:" + theme.disabled.contrast + "!important;}"; }; }
    };
};
var LyRadioGroup = /** @class */ (function () {
    function LyRadioGroup(elementRef, renderer, _theme, _cd) {
        this._theme = _theme;
        this._cd = _cd;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        /** @docs-private */
        this.name = "ly-radio-name-" + idx++;
        this.change = new EventEmitter();
        this.color = 'accent';
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = function () { };
        renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyRadioGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (this._value !== val) {
                if (this._radios) {
                    this._updateCheckFromValue(val);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    LyRadioGroup.prototype._touch = function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /** @docs-private */
    LyRadioGroup.prototype.writeValue = function (value) {
        if (!!this._radios) {
            this.value = value;
            this._markForCheck();
        }
    };
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    LyRadioGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    LyRadioGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param _isDisabled Whether the control should be disabled.
     * @docs-private
     */
    LyRadioGroup.prototype.setDisabledState = function (_isDisabled) {
        // this.disabled = isDisabled;
        this._markForCheck();
    };
    LyRadioGroup.prototype._updateCheckFromValue = function (val) {
        var _this = this;
        var newChecked;
        this._radios.forEach(function (radioButton) {
            if (val === radioButton.value) {
                _this.updatevalue(val);
                newChecked = true;
                radioButton.checked = true;
            }
            else if (radioButton.checked) {
                radioButton.checked = false;
            }
        });
        if (!newChecked) {
            /** when val not exist in radio button !==  */
            this._controlValueAccessorChangeFn(null);
            if (this._value != null) {
                this._value = null;
            }
        }
    };
    /** @docs-private */
    LyRadioGroup.prototype.updatevalue = function (value) {
        this._value = value;
        this._controlValueAccessorChangeFn(value);
        this.change.emit();
        this._markForCheck();
    };
    LyRadioGroup.prototype._markForCheck = function () {
        this._cd.markForCheck();
    };
    LyRadioGroup.prototype._radioResetChecked = function () {
        this._radios.forEach(function (_) { return _._setCheckedToFalsy(); });
    };
    /** @docs-private */
    LyRadioGroup.и = 'LyRadioGroup';
    LyRadioGroup.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyRadioGroup.prototype, "value", null);
    tslib_1.__decorate([
        Output()
    ], LyRadioGroup.prototype, "change", void 0);
    tslib_1.__decorate([
        Input()
    ], LyRadioGroup.prototype, "color", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return LyRadio; }))
    ], LyRadioGroup.prototype, "_radios", void 0);
    LyRadioGroup = tslib_1.__decorate([
        Component({
            selector: 'ly-radio-group',
            template: "<ng-content></ng-content>",
            providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            exportAs: 'lyRadioGroup'
        })
    ], LyRadioGroup);
    return LyRadioGroup;
}());
export { LyRadioGroup };
/** @docs-private */
var LyRadioBase = /** @class */ (function () {
    function LyRadioBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyRadioBase;
}());
export { LyRadioBase };
/** @docs-private */
export var LyRadioMixinBase = mixinDisableRipple(LyRadioBase);
var LyRadio = /** @class */ (function (_super) {
    tslib_1.__extends(LyRadio, _super);
    function LyRadio(
    /** @docs-private */
    radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState, _styleRenderer) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this.radioGroup = radioGroup;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this._coreStyles = _coreStyles;
        _this._focusState = _focusState;
        _this._styleRenderer = _styleRenderer;
        /** @docs-private */
        _this.classes = _this.radioGroup.classes;
        /** @docs-private */
        _this.id = "ly-radio-id-" + idx++;
        /** @docs-private */
        _this.name = '';
        _this._value = null;
        _this._checked = false;
        _this.change = new EventEmitter();
        _this._triggerElement = _this._elementRef;
        _this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
        _renderer.addClass(_elementRef.nativeElement, radioGroup.classes.radio);
        return _this;
    }
    LyRadio_1 = LyRadio;
    Object.defineProperty(LyRadio.prototype, "value", {
        get: function () { return this._value; },
        set: function (val) {
            if (this._value !== val) {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "color", {
        get: function () { return this._color; },
        set: function (val) {
            if (this._color !== val) {
                this._color = val;
                this[0x1] = this._styleRenderer.add(LyRadio_1.и + "--color-" + val, function (theme, ref) {
                    var _a = ref.selectorsOf(STYLES), checked = _a.checked, container = _a.container;
                    return function (className) { return "" + className + checked + " " + container + "," + className + checked + " " + container + " div:nth-child(1)," + className + " " + container + " div:nth-child(2){color:" + theme.colorOf(val) + ";}"; };
                }, STYLE_PRIORITY, this[0x1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (val) {
            var newCheckedState = toBoolean(val);
            var before = this._checked;
            if (before !== newCheckedState) {
                this._checked = newCheckedState;
                if (!before && newCheckedState) {
                    /** Add class checked */
                    this._renderer.addClass(this._elementRef.nativeElement, this.classes.checked);
                    if (this.value !== this.radioGroup.value) {
                        /** update Value */
                        this.radioGroup.updatevalue(this.value);
                    }
                }
                else {
                    /** Remove class checked */
                    this._renderer.removeClass(this._elementRef.nativeElement, this.classes.checked);
                }
                this._markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "inputId", {
        /** @docs-private */
        get: function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            var newVal = toBoolean(value);
            if (newVal) {
                this._renderer.addClass(this._elementRef.nativeElement, this.classes.disabled);
                this._disabledClass = this.classes.disabled;
            }
            else if (this._disabledClass) {
                this._renderer.removeClass(this._elementRef.nativeElement, this.classes.disabled);
                this._disabledClass = undefined;
            }
            this._disabled = toBoolean(value);
            this._markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    LyRadio.prototype.ngOnInit = function () {
        if (this.radioGroup) {
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
        if (!this.color) {
            this.color = this.radioGroup.color || DEFAULT_COLOR;
        }
    };
    LyRadio.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rippleContainer = this._radioContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        var focusState = this._focusState.listen(this._input, this._elementRef);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (event === 'keyboard') {
                    _this._renderer.addClass(_this._elementRef.nativeElement, _this.classes.onFocusByKeyboard);
                }
                else if (event == null) {
                    _this._renderer.removeClass(_this._elementRef.nativeElement, _this.classes.onFocusByKeyboard);
                }
            });
        }
    };
    LyRadio.prototype._markForCheck = function () {
        this.changeDetectorRef.markForCheck();
    };
    LyRadio.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._elementRef);
        this._removeRippleEvents();
    };
    LyRadio.prototype._onInputChange = function (event) {
        event.stopPropagation();
        this.radioGroup._updateCheckFromValue(this.value);
        this.radioGroup._touch();
        this._addAnim();
    };
    LyRadio.prototype._addAnim = function () {
        if (!this._animClass) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes._animations);
            this._animClass = this.classes._animations;
        }
    };
    LyRadio.prototype._onInputClick = function (event) { event.stopPropagation(); };
    LyRadio.prototype._setCheckedToFalsy = function () {
        this.checked = false;
    };
    var LyRadio_1;
    /** @docs-private */
    LyRadio.и = 'LyRadio';
    LyRadio.ctorParameters = function () { return [
        { type: LyRadioGroup, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: LyCoreStyles },
        { type: LyFocusState },
        { type: StyleRenderer }
    ]; };
    tslib_1.__decorate([
        ViewChild('_input', { static: false })
    ], LyRadio.prototype, "_input", void 0);
    tslib_1.__decorate([
        ViewChild('_radioContainer', { static: false })
    ], LyRadio.prototype, "_radioContainer", void 0);
    tslib_1.__decorate([
        ViewChild('_labelContainer', { static: false })
    ], LyRadio.prototype, "_labelContainer", void 0);
    tslib_1.__decorate([
        Output()
    ], LyRadio.prototype, "change", void 0);
    tslib_1.__decorate([
        Input()
    ], LyRadio.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], LyRadio.prototype, "color", null);
    tslib_1.__decorate([
        Input()
    ], LyRadio.prototype, "checked", null);
    tslib_1.__decorate([
        Input()
    ], LyRadio.prototype, "disabled", null);
    LyRadio = LyRadio_1 = tslib_1.__decorate([
        Component({
            selector: 'ly-radio',
            template: "<label #_labelContainer [attr.for]=\"inputId\" [className]=\"classes.label\">\n  <input #_input\n    [className]=\"_coreStyles.classes.visuallyHidden\"\n    [id]=\"inputId\"\n    [checked]=\"checked\"\n    [name]=\"name\"\n    (change)=\"_onInputChange($event)\"\n    (click)=\"_onInputClick($event)\"\n    [disabled]=\"disabled\"\n    type=\"radio\"\n    >\n  <div #_radioContainer [className]=\"classes.container\">\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n  </div>\n  <div\n  [className]=\"classes.labelContent\">\n    <ng-content></ng-content>\n  </div>\n</label>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            inputs: [
                'disableRipple'
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        }),
        tslib_1.__param(0, Optional())
    ], LyRadio);
    return LyRadio;
}(LyRadioMixinBase));
export { LyRadio };
var LyRadioModule = /** @class */ (function () {
    function LyRadioModule() {
    }
    LyRadioModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, FormsModule, LyCommonModule],
            exports: [LyRadioGroup, LyRadio],
            declarations: [LyRadioGroup, LyRadio],
        })
    ], LyRadioModule);
    return LyRadioModule;
}());
export { LyRadioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFDVCxRQUFRLEVBQ1IsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBQ2QsUUFBUSxFQUNSLFlBQVksRUFDWixTQUFTLEVBQ1Qsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVluQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQztBQUNyQyxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUM7QUFFL0IsTUFBTSxDQUFDLElBQU0sK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxZQUFZLEVBQVosQ0FBWSxDQUFDO0lBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUVaO0lBQ0U7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O0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQUx6QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO1lBQ2hDLFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7U0FDdEMsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9wdGlvbmFsLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBOZ1pvbmUsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEx5Q29tbW9uTW9kdWxlLFxuICBMeVRoZW1lMixcbiAgTHlDb3JlU3R5bGVzLFxuICB0b0Jvb2xlYW4sXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgc3QyYyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFRoZW1lUmVmLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlSYWRpb1RoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgUmFkaW8gQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5UmFkaW9WYXJpYWJsZXMge1xuICByYWRpbz86IEx5UmFkaW9UaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnYWNjZW50JztcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVJhZGlvVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IHJhZGlvID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5yYWRpb1xuICAgICAgICAgICAgJiYgdGhlbWUucmFkaW8ucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnJhZGlvLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5yYWRpby5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKHJhZGlvKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5yYWRpby5yb290KHJhZGlvKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgcmFkaW86ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLSR7YWZ0ZXJ9OjE2cHg7bWFyZ2luLSR7YmVmb3JlfTotMTZweDt9JHtjbGFzc05hbWV9JHtyYWRpby5jaGVja2VkfSAke3JhZGlvLmNvbnRhaW5lcn0gZGl2Om50aC1jaGlsZCgxKXt0cmFuc2Zvcm06c2NhbGUoMS4yNSk7fSR7Y2xhc3NOYW1lfSR7cmFkaW8uY2hlY2tlZH0gJHtyYWRpby5jb250YWluZXJ9IGRpdjpudGgtY2hpbGQoMil7dHJhbnNmb3JtOnNjYWxlKDAuOCk7fSR7Y2xhc3NOYW1lfSR7cmFkaW8ub25Gb2N1c0J5S2V5Ym9hcmR9ICR7cmFkaW8uY29udGFpbmVyfTo6YWZ0ZXJ7Ym94LXNoYWRvdzowIDAgMCAxMnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO29wYWNpdHk6LjEzO2JvcmRlci1yYWRpdXM6NTAlO31gLFxuICAgIGxhYmVsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YmVmb3JlfToxNnB4O2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6YmFzZWxpbmU7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O31gLFxuICAgIGxhYmVsQ29udGVudDogbnVsbCxcbiAgICBjb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tJHtiZWZvcmV9Oi4xMjVlbTttYXJnaW4tJHthZnRlcn06LjVlbTttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7fSR7Y2xhc3NOYW1lfSBkaXZ7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MWVtO2hlaWdodDoxZW07Ym94LXNpemluZzpib3JkZXItYm94O30ke2NsYXNzTmFtZX06OmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46YXV0bzt9JHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjphZnRlcmApfSR7Y2xhc3NOYW1lfSBkaXY6bnRoLWNoaWxkKDIpe2JhY2tncm91bmQ6Y3VycmVudENvbG9yO3RyYW5zZm9ybTpzY2FsZSgwKTt9JHtjbGFzc05hbWV9IGRpdjpudGgtY2hpbGQoMSl7dHJhbnNmb3JtOnNjYWxlKDEpO2JvcmRlcjpzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3I7Y29sb3I6JHt0aGVtZS50ZXh0LmRpc2FibGVkfTt9YCxcbiAgICBjaGVja2VkOiBudWxsLFxuICAgIF9hbmltYXRpb25zOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7cmFkaW8uY29udGFpbmVyfSBkaXZ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO3RyYW5zaXRpb24tZHVyYXRpb246MjUwbXM7fWAsXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y29sb3I6JHt0aGVtZS5kaXNhYmxlZC5jb250cmFzdH07fSR7Y2xhc3NOYW1lfSAke3JhZGlvLmNvbnRhaW5lcn0gZGl2e2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuY29udHJhc3R9IWltcG9ydGFudDt9YFxuICB9O1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBwcm92aWRlcnM6IFtMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5UmFkaW9Hcm91cCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb0dyb3VwIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlSYWRpb0dyb3VwJztcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgICB0aGlzLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlcy5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gSW1wbGVtZW50ZWQgYXMgYSBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gX2lzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbDogYW55KSB7XG4gICAgbGV0IG5ld0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gcmFkaW9CdXR0b24udmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGV2YWx1ZSh2YWwpO1xuICAgICAgICBuZXdDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghbmV3Q2hlY2tlZCEpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlSYWRpb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlSYWRpb01peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeVJhZGlvQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gZXh0ZW5kcyBMeVJhZGlvTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlSYWRpbyc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnJhZGlvR3JvdXAuY2xhc3NlcztcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgaWQgPSBgbHktcmFkaW8taWQtJHtpZHgrK31gO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBuYW1lID0gJyc7XG4gIHByaXZhdGUgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3M/OiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19pbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIF9yYWRpb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWwpIHtcbiAgICBpZiAodGhpcy5fY29sb3IgIT09IHZhbCkge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgICB0aGlzWzB4MV0gPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChcbiAgICAgICAgYCR7THlSYWRpby7QuH0tLWNvbG9yLSR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMsIHJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICB9ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSR7Y2hlY2tlZH0gJHtjb250YWluZXJ9LCR7Y2xhc3NOYW1lfSR7Y2hlY2tlZH0gJHtjb250YWluZXJ9IGRpdjpudGgtY2hpbGQoMSksJHtjbGFzc05hbWV9ICR7Y29udGFpbmVyfSBkaXY6bnRoLWNoaWxkKDIpe2NvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTt9YDtcbiAgICAgICAgfSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFksXG4gICAgICAgIHRoaXNbMHgxXVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCkgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgWzB4MV06IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogQWRkIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gdGhpcy5jbGFzc2VzLmRpc2FibGVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZGlzYWJsZWRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9jb3JlU3R5bGVzOiBMeUNvcmVTdHlsZXMsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcmFkaW9Hcm91cC5jbGFzc2VzLnJhZGlvKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJhZGlvR3JvdXApIHtcbiAgICAgIC8vIENvcHkgbmFtZSBmcm9tIHBhcmVudCByYWRpbyBncm91cFxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5yYWRpb0dyb3VwLm5hbWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMucmFkaW9Hcm91cC5jb2xvciB8fCBERUZBVUxUX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9yYWRpb0NvbnRhaW5lcjtcblxuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXQsIHRoaXMuX2VsZW1lbnRSZWYpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWxlbWVudFJlZik7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gICAgdGhpcy5fYWRkQW5pbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQW5pbSgpIHtcbiAgICBpZiAoIXRoaXMuX2FuaW1DbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuX2FuaW1hdGlvbnMpO1xuICAgICAgdGhpcy5fYW5pbUNsYXNzID0gdGhpcy5jbGFzc2VzLl9hbmltYXRpb25zO1xuICAgIH1cbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG5cbiAgX3NldENoZWNrZWRUb0ZhbHN5KCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG4gIGRlY2xhcmF0aW9uczogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Nb2R1bGUgeyB9XG4iXX0=