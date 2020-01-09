import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, ThemeVariables, toBoolean, ThemeRef, st2c, LyHostClass, StyleRenderer, LY_COMMON_STYLES, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_WITH_COLOR = 'accent';
var DEFAULT_DISABLE_RIPPLE = false;
export var STYLES = function (theme, ref) {
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
export var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
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
export { LyCheckboxChange };
/** @docs-private */
var LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
export { LyCheckboxBase };
/** @docs-private */
export var LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
var LyCheckbox = /** @class */ (function (_super) {
    tslib_1.__extends(LyCheckbox, _super);
    function LyCheckbox(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, _styleRenderer, ngZone) {
        var _this = _super.call(this, _theme, ngZone) || this;
        _this._commonStyles = _commonStyles;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusState = _focusState;
        _this._styleRenderer = _styleRenderer;
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
    Object.defineProperty(LyCheckbox.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            if (val !== this.color) {
                this._color = val;
                this._colorClass = this._styleRenderer.add(LyCheckbox_1.и + "--color-" + val, function (theme, ref) {
                    var checkbox = ref.selectorsOf(STYLES);
                    var color = theme.colorOf(val);
                    if (theme.checkbox && theme.checkbox.color) {
                        return theme.checkbox.color(checkbox, color);
                    }
                    throw new Error(LyCheckbox_1.и + ": styles theme.checkbox.color is undefined");
                }, STYLE_PRIORITY, this._colorClass);
            }
        },
        enumerable: true,
        configurable: true
    });
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
        { type: LyCommonStyles },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyFocusState },
        { type: StyleRenderer },
        { type: NgZone }
    ]; };
    tslib_1.__decorate([
        ViewChild('innerContainer', { static: false })
    ], LyCheckbox.prototype, "_innerContainer", void 0);
    tslib_1.__decorate([
        Input()
    ], LyCheckbox.prototype, "value", void 0);
    tslib_1.__decorate([
        Input()
    ], LyCheckbox.prototype, "color", null);
    tslib_1.__decorate([
        Input()
    ], LyCheckbox.prototype, "checked", null);
    tslib_1.__decorate([
        Input()
    ], LyCheckbox.prototype, "required", null);
    tslib_1.__decorate([
        Input()
    ], LyCheckbox.prototype, "disabled", null);
    tslib_1.__decorate([
        Output()
    ], LyCheckbox.prototype, "change", void 0);
    tslib_1.__decorate([
        ViewChild('input', { static: false })
    ], LyCheckbox.prototype, "_inputElement", void 0);
    LyCheckbox = LyCheckbox_1 = tslib_1.__decorate([
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
export { LyCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsWUFBWSxJQUFJLGNBQWMsRUFDOUIsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFdBQVcsRUFDWCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR25DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLElBQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBY3JDLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQTJDLEVBQUUsR0FBYTtJQUMvRSxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLElBQUEscUJBQU0sRUFBRSxtQkFBSyxDQUFXO0lBQ2hDLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxT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RSxLQUFLLEVBQUUsQ0FBQztxREFBNkM7SUF4RnhFLFVBQVU7UUFmdEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsc2pCQUE0QjtZQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO2dCQUNiLGtDQUFrQzthQUNuQztZQUNELFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRTtnQkFDTixlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0F3TXRCO0lBQUQsaUJBQUM7Q0FBQSxBQXhNRCxDQUFnQyxtQkFBbUIsR0F3TWxEO1NBeE1ZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBUaGVtZVJlZixcbiAgc3QyYyxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5Q2hlY2tib3hUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIENoZWNrYm94IENvbXBvbmVudC4gKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICAvKiogU3R5bGVzIHRoYXQgYXBwbHkgd2hlbiBhIGNvbG9yIGlzIHNldC4gKi9cbiAgY29sb3I/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDaGVja2JveFZhcmlhYmxlcyB7XG4gIGNoZWNrYm94PzogTHlDaGVja2JveFRoZW1lO1xufVxuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5Q2hlY2tib3hWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgeyBiZWZvcmUsIGFmdGVyIH0gPSB0aGVtZTtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlDaGVja2JveC7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YWZ0ZXJ9OjE2cHg7bWFyZ2luLSR7YmVmb3JlfTotMTZweDtkaXNwbGF5OmlubGluZS1mbGV4O30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5jaGVja2JveFxuICAgICAgICAgICAgJiYgdGhlbWUuY2hlY2tib3gucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmNoZWNrYm94LnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5jaGVja2JveC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNoZWNrYm94KSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5jaGVja2JveC5yb290KGNoZWNrYm94KSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9Om5vdCgke2NoZWNrYm94LmNoZWNrZWR9KSAke2NoZWNrYm94Lmljb259OmJlZm9yZXtjb2xvcjoke3RoZW1lLmRpc2FibGVkLmRlZmF1bHR9O30ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfXtwb2ludGVyLWV2ZW50czpub25lO30ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfSAke2NoZWNrYm94LmxheW91dH17Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9JHtjaGVja2JveC5jaGVja2VkfSAke2NoZWNrYm94Lmljb259OmJlZm9yZXtib3JkZXI6MDtiYWNrZ3JvdW5kOiR7dGhlbWUuZGlzYWJsZWQuZGVmYXVsdH07fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3gub25Gb2N1c0J5S2V5Ym9hcmR9ICR7Y2hlY2tib3guaWNvbn06OmFmdGVye2JveC1zaGFkb3c6MCAwIDAgMTJweDtvcGFjaXR5Oi4xMztib3JkZXItcmFkaXVzOjUwJTt9JHtjbGFzc05hbWV9Om5vdCgke2NoZWNrYm94LmNoZWNrZWR9KSAke2NoZWNrYm94Lmljb259e2NvbG9yOiR7dGhlbWUudGV4dC5zZWNvbmRhcnl9O31gLFxuICAgIGxheW91dDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6YmFzZWxpbmU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLSR7YmVmb3JlfToxNnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDt9YCxcbiAgICBpY29uOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLSR7YWZ0ZXJ9OjhweDttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7dXNlci1zZWxlY3Q6bm9uZTt9JHtjbGFzc05hbWV9OjpiZWZvcmUsJHtjbGFzc05hbWV9OjphZnRlcntjb250ZW50OicnO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O30ke3N0MmMoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06OmJlZm9yZSwke2NsYXNzTmFtZX06OmFmdGVyYCl9JHtjbGFzc05hbWV9OjpiZWZvcmV7Ym9yZGVyOnNvbGlkIDJweDtib3JkZXItcmFkaXVzOjJweDt9JHtjbGFzc05hbWV9IHN2Z3twb3NpdGlvbjphYnNvbHV0ZTt9JHtjbGFzc05hbWV9IHN2ZyBwb2x5bGluZXtmaWxsOm5vbmU7c3Ryb2tlOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHR9O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5OjE4cHg7c3Ryb2tlLWRhc2hvZmZzZXQ6MThweDt9YCxcbiAgICBjaGVja2VkOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaWNvbn06OmJlZm9yZXtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjt9JHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaWNvbn0gcG9seWxpbmV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDt9YCxcbiAgICBpbnB1dDogTFlfQ09NTU9OX1NUWUxFUy52aXN1YWxseUhpZGRlbixcbiAgICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgICBkaXNhYmxlZDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NoZWNrYm94LmlucHV0fXt2aXNpYmlsaXR5OmhpZGRlbjt9JHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaWNvbn17Y29sb3I6aW5oZXJpdCAhaW1wb3J0YW50O31gLFxuICAgIGFuaW1hdGlvbnM6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufSBzdmcgcG9seWxpbmV7dHJhbnNpdGlvbjphbGwgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfTt9YFxuICB9O1xufTtcblxuLyoqXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IEx5Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveENoYW5nZSB7XG4gIC8qKiBUaGUgc291cmNlIEx5Q2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IEx5Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDaGVja2JveE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeUNoZWNrYm94QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXIsXG4gICAgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUNoZWNrYm94JyxcbiAgaW5wdXRzOiBbXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBleHRlbmRzIEx5Q2hlY2tib3hNaXhpbkJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGlnbm9yZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlDaGVja2JveCc7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pbmRldGVybWluYXRlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2NoZWNrZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnaW5uZXJDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2lubmVyQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICAvKiogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgKi9cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5Q2hlY2tib3gu0Lh9LS1jb2xvci0ke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlDaGVja2JveFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICAgICAgaWYgKHRoZW1lLmNoZWNrYm94ICYmIHRoZW1lLmNoZWNrYm94LmNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlbWUuY2hlY2tib3guY29sb3IoY2hlY2tib3gsIGNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0x5Q2hlY2tib3gu0Lh9OiBzdHlsZXMgdGhlbWUuY2hlY2tib3guY29sb3IgaXMgdW5kZWZpbmVkYCk7XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgLy8gaWYgKG5ld1ZhbCAhPT0gdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgLy8gfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjaGVja2JveCdzIGBjaGVja2VkYCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIC8qKiBUaGUgbmF0aXZlIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9jb21tb25TdHlsZXM6IEx5Q29tbW9uU3R5bGVzLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxNTBcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIC8vIHNldCBkZWZhdWx0IGNvbG9yXG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXRFbGVtZW50LCB0aGlzLl9lbCk7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9pbm5lckNvbnRhaW5lcjtcblxuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIl19