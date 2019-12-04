import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, ThemeVariables, toBoolean, ThemeRef, styleTemplateToString, LyHostClass, StyleRenderer, LY_COMMON_STYLES, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_WITH_COLOR = 'accent';
var DEFAULT_DISABLE_RIPPLE = false;
export var STYLES = function (theme, ref) {
    var checkbox = ref.selectorsOf(STYLES);
    var before = theme.before, after = theme.after;
    return {
        $name: LyCheckbox.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{margin-" + after + ":16px;margin-" + before + ":-16px;display:inline-flex;}" + styleTemplateToString(((theme.checkbox
            && theme.checkbox.root
            && (theme.checkbox.root instanceof StyleCollection
                ? theme.checkbox.root.setTransformer(function (fn) { return fn(checkbox); })
                : theme.checkbox.root(checkbox)))), "" + className) + className + checkbox.disabled + ":not(" + checkbox.checked + ") " + checkbox.icon + ":before{color:" + theme.disabled.default + ";}" + className + checkbox.disabled + "{pointer-events:none;}" + className + checkbox.disabled + " " + checkbox.layout + "{color:" + theme.text.secondary + ";}" + className + checkbox.disabled + checkbox.checked + " " + checkbox.icon + ":before{border:0;background:" + theme.disabled.default + ";}" + className + checkbox.onFocusByKeyboard + " " + checkbox.icon + "::after{box-shadow:0 0 0 12px;opacity:.13;border-radius:50%;}" + className + ":not(" + checkbox.checked + ") " + checkbox.icon + "{color:" + theme.text.secondary + ";}"; }; },
        layout: function (className) { return className + "{display:inline-flex;align-items:baseline;cursor:pointer;margin-" + before + ":16px;padding-top:12px;padding-bottom:12px;}"; },
        icon: function (className) { return className + "{position:relative;margin-" + after + ":8px;margin-top:auto;margin-bottom:auto;width:16px;height:16px;user-select:none;}" + className + "::before," + className + "::after{content:'';width:16px;height:16px;margin:auto;box-sizing:border-box;}" + styleTemplateToString((LY_COMMON_STYLES.fill), className + "::before," + className + "::after") + className + "::before{border:solid 2px;border-radius:2px;}" + className + " svg{position:absolute;}" + className + " svg polyline{fill:none;stroke:" + theme.background.primary.default + ";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18px;stroke-dashoffset:18px;}"; },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsWUFBWSxJQUFJLGNBQWMsRUFDOUIsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLFNBQVMsRUFDVCxRQUFRLEVBQ1IscUJBQXFCLEVBQ3JCLFdBQVcsRUFDWCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR25DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLElBQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBY3JDLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQTJDLEVBQUUsR0FBYTtJQUMvRSxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLElBQUEscUJBQU0sRUFBRSxtQkFBSyxDQUFXO0lBQ2hDLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FB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QUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7cURBQTZDO0lBeEZ4RSxVQUFVO1FBZnRCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHNqQkFBNEI7WUFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixrQ0FBa0M7YUFDbkM7WUFDRCxRQUFRLEVBQUUsWUFBWTtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sZUFBZTthQUNoQjtTQUNGLENBQUM7T0FDVyxVQUFVLENBd010QjtJQUFELGlCQUFDO0NBQUEsQUF4TUQsQ0FBZ0MsbUJBQW1CLEdBd01sRDtTQXhNWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBMeUNvcmVTdHlsZXMgYXMgTHlDb21tb25TdHlsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVSZWYsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5Q2hlY2tib3hUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIENoZWNrYm94IENvbXBvbmVudC4gKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICAvKiogU3R5bGVzIHRoYXQgYXBwbHkgd2hlbiBhIGNvbG9yIGlzIHNldC4gKi9cbiAgY29sb3I/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+LCBjb2xvcjogQ29sb3IpID0+IFN0eWxlVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDaGVja2JveFZhcmlhYmxlcyB7XG4gIGNoZWNrYm94PzogTHlDaGVja2JveFRoZW1lO1xufVxuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5Q2hlY2tib3hWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgeyBiZWZvcmUsIGFmdGVyIH0gPSB0aGVtZTtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlDaGVja2JveC7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YWZ0ZXJ9OjE2cHg7bWFyZ2luLSR7YmVmb3JlfTotMTZweDtkaXNwbGF5OmlubGluZS1mbGV4O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLmNoZWNrYm94XG4gICAgICAgICAgICAmJiB0aGVtZS5jaGVja2JveC5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuY2hlY2tib3gucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLmNoZWNrYm94LnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oY2hlY2tib3gpKVxuICAgICAgICAgICAgICA6IHRoZW1lLmNoZWNrYm94LnJvb3QoY2hlY2tib3gpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH06bm90KCR7Y2hlY2tib3guY2hlY2tlZH0pICR7Y2hlY2tib3guaWNvbn06YmVmb3Jle2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuZGVmYXVsdH07fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9e3BvaW50ZXItZXZlbnRzOm5vbmU7fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9ICR7Y2hlY2tib3gubGF5b3V0fXtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH0ke2NoZWNrYm94LmNoZWNrZWR9ICR7Y2hlY2tib3guaWNvbn06YmVmb3Jle2JvcmRlcjowO2JhY2tncm91bmQ6JHt0aGVtZS5kaXNhYmxlZC5kZWZhdWx0fTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5vbkZvY3VzQnlLZXlib2FyZH0gJHtjaGVja2JveC5pY29ufTo6YWZ0ZXJ7Ym94LXNoYWRvdzowIDAgMCAxMnB4O29wYWNpdHk6LjEzO2JvcmRlci1yYWRpdXM6NTAlO30ke2NsYXNzTmFtZX06bm90KCR7Y2hlY2tib3guY2hlY2tlZH0pICR7Y2hlY2tib3guaWNvbn17Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fWAsXG4gICAgbGF5b3V0OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpiYXNlbGluZTtjdXJzb3I6cG9pbnRlcjttYXJnaW4tJHtiZWZvcmV9OjE2cHg7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O31gLFxuICAgIGljb246IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tJHthZnRlcn06OHB4O21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87d2lkdGg6MTZweDtoZWlnaHQ6MTZweDt1c2VyLXNlbGVjdDpub25lO30ke2NsYXNzTmFtZX06OmJlZm9yZSwke2NsYXNzTmFtZX06OmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjpiZWZvcmUsJHtjbGFzc05hbWV9OjphZnRlcmApfSR7Y2xhc3NOYW1lfTo6YmVmb3Jle2JvcmRlcjpzb2xpZCAycHg7Ym9yZGVyLXJhZGl1czoycHg7fSR7Y2xhc3NOYW1lfSBzdmd7cG9zaXRpb246YWJzb2x1dGU7fSR7Y2xhc3NOYW1lfSBzdmcgcG9seWxpbmV7ZmlsbDpub25lO3N0cm9rZToke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0fTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheToxOHB4O3N0cm9rZS1kYXNob2Zmc2V0OjE4cHg7fWAsXG4gICAgY2hlY2tlZDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259OjpiZWZvcmV7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7fSR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259IHBvbHlsaW5le3N0cm9rZS1kYXNob2Zmc2V0OjA7fWAsXG4gICAgaW5wdXQ6IExZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW4sXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pbnB1dH17dmlzaWJpbGl0eTpoaWRkZW47fSR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259e2NvbG9yOmluaGVyaXQgIWltcG9ydGFudDt9YCxcbiAgICBhbmltYXRpb25zOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaWNvbn0gc3ZnIHBvbHlsaW5le3RyYW5zaXRpb246YWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH07fWBcbiAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBhbGxvd3MgaXQgdG8gc3VwcG9ydCBbKG5nTW9kZWwpXS5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSBMeUNoZWNrYm94LiAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hDaGFuZ2Uge1xuICAvKiogVGhlIHNvdXJjZSBMeUNoZWNrYm94IG9mIHRoZSBldmVudC4gKi9cbiAgc291cmNlOiBMeUNoZWNrYm94O1xuICAvKiogVGhlIG5ldyBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5Q2hlY2tib3hNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUoTHlDaGVja2JveEJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyLFxuICAgIExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsXG4gIF0sXG4gIGV4cG9ydEFzOiAnbHlDaGVja2JveCcsXG4gIGlucHV0czogW1xuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggZXh0ZW5kcyBMeUNoZWNrYm94TWl4aW5CYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5Q2hlY2tib3gnO1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2lubmVyQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgLyoqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKFxuICAgICAgICBgJHtMeUNoZWNrYm94LtC4fS0tY29sb3ItJHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5Q2hlY2tib3hWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgICAgIGlmICh0aGVtZS5jaGVja2JveCAmJiB0aGVtZS5jaGVja2JveC5jb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoZW1lLmNoZWNrYm94LmNvbG9yKGNoZWNrYm94LCBjb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMeUNoZWNrYm94LtC4fTogc3R5bGVzIHRoZW1lLmNoZWNrYm94LmNvbG9yIGlzIHVuZGVmaW5lZGApO1xuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIC8vIGlmIChuZXdWYWwgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3gncyBgY2hlY2tlZGAgdmFsdWUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4oKTtcblxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPmAgZWxlbWVudCAqL1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfY29tbW9uU3R5bGVzOiBMeUNvbW1vblN0eWxlcyxcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9zdHlsZVJlbmRlcmVyOiBTdHlsZVJlbmRlcmVyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBzZXQgZGVmYXVsdCBjb2xvclxuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0RWxlbWVudCwgdGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5faW5uZXJDb250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==