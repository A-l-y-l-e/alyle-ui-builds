import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, ThemeVariables, toBoolean, ThemeRef, st2c, LyHostClass, StyleRenderer, LY_COMMON_STYLES, StyleCollection, LyClasses, StyleTemplate, Style, WithStyles } from '@alyle/ui';
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
    tslib_1.__extends(LyCheckbox, _super);
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
        Input(),
        Style(ɵ0, STYLE_PRIORITY)
    ], LyCheckbox.prototype, "color", void 0);
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsWUFBWSxJQUFJLGNBQWMsRUFDOUIsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFdBQVcsRUFDWCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLEtBQUssRUFDTCxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHaEMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUM7QUFDcEMsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFjckMsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBMkMsRUFBRSxHQUFhO0lBQy9FLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBQSxxQkFBTSxFQUFFLG1CQUFLLENBQVc7SUFDaEMsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsY0FBTyxPQUFBLFVB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WUFBWTtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sZUFBZTthQUNoQjtTQUNGLENBQUM7T0FDVyxVQUFVLENBcU10QjtJQUFELGlCQUFDO0NBQUEsQUFyTUQsQ0FBZ0MsbUJBQW1CLEdBcU1sRDtTQXJNWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBMeUNvcmVTdHlsZXMgYXMgTHlDb21tb25TdHlsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVSZWYsXG4gIHN0MmMsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgU3R5bGUsXG4gIFdpdGhTdHlsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ2FjY2VudCc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDaGVja2JveFRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgQ2hlY2tib3ggQ29tcG9uZW50LiAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIC8qKiBTdHlsZXMgdGhhdCBhcHBseSB3aGVuIGEgY29sb3IgaXMgc2V0LiAqL1xuICBjb2xvcj86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4sIGNvbG9yOiBDb2xvcikgPT4gU3R5bGVUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUNoZWNrYm94VmFyaWFibGVzIHtcbiAgY2hlY2tib3g/OiBMeUNoZWNrYm94VGhlbWU7XG59XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlDaGVja2JveFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBjaGVja2JveCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCB7IGJlZm9yZSwgYWZ0ZXIgfSA9IHRoZW1lO1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeUNoZWNrYm94LtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tJHthZnRlcn06MTZweDttYXJnaW4tJHtiZWZvcmV9Oi0xNnB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7fSR7c3QyYygoXG4gICAgICAgICAgKHRoZW1lLmNoZWNrYm94XG4gICAgICAgICAgICAmJiB0aGVtZS5jaGVja2JveC5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuY2hlY2tib3gucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLmNoZWNrYm94LnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oY2hlY2tib3gpKVxuICAgICAgICAgICAgICA6IHRoZW1lLmNoZWNrYm94LnJvb3QoY2hlY2tib3gpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH06bm90KCR7Y2hlY2tib3guY2hlY2tlZH0pICR7Y2hlY2tib3guaWNvbn06YmVmb3Jle2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuZGVmYXVsdH07fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9e3BvaW50ZXItZXZlbnRzOm5vbmU7fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9ICR7Y2hlY2tib3gubGF5b3V0fXtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH0ke2NoZWNrYm94LmNoZWNrZWR9ICR7Y2hlY2tib3guaWNvbn06YmVmb3Jle2JvcmRlcjowO2JhY2tncm91bmQ6JHt0aGVtZS5kaXNhYmxlZC5kZWZhdWx0fTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5vbkZvY3VzQnlLZXlib2FyZH0gJHtjaGVja2JveC5pY29ufTo6YWZ0ZXJ7Ym94LXNoYWRvdzowIDAgMCAxMnB4O29wYWNpdHk6LjEzO2JvcmRlci1yYWRpdXM6NTAlO30ke2NsYXNzTmFtZX06bm90KCR7Y2hlY2tib3guY2hlY2tlZH0pICR7Y2hlY2tib3guaWNvbn17Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fWAsXG4gICAgbGF5b3V0OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpiYXNlbGluZTtjdXJzb3I6cG9pbnRlcjttYXJnaW4tJHtiZWZvcmV9OjE2cHg7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O31gLFxuICAgIGljb246IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tJHthZnRlcn06OHB4O21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87d2lkdGg6MTZweDtoZWlnaHQ6MTZweDt1c2VyLXNlbGVjdDpub25lO30ke2NsYXNzTmFtZX06OmJlZm9yZSwke2NsYXNzTmFtZX06OmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7fSR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YmVmb3JlLCR7Y2xhc3NOYW1lfTo6YWZ0ZXJgKX0ke2NsYXNzTmFtZX06OmJlZm9yZXtib3JkZXI6c29saWQgMnB4O2JvcmRlci1yYWRpdXM6MnB4O30ke2NsYXNzTmFtZX0gc3Zne3Bvc2l0aW9uOmFic29sdXRlO30ke2NsYXNzTmFtZX0gc3ZnIHBvbHlsaW5le2ZpbGw6bm9uZTtzdHJva2U6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdH07c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6MThweDtzdHJva2UtZGFzaG9mZnNldDoxOHB4O31gLFxuICAgIGNoZWNrZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufTo6YmVmb3Jle2JhY2tncm91bmQ6Y3VycmVudENvbG9yO30ke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufSBwb2x5bGluZXtzdHJva2UtZGFzaG9mZnNldDowO31gLFxuICAgIGlucHV0OiBMWV9DT01NT05fU1RZTEVTLnZpc3VhbGx5SGlkZGVuLFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGRpc2FibGVkOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaW5wdXR9e3Zpc2liaWxpdHk6aGlkZGVuO30ke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufXtjb2xvcjppbmhlcml0ICFpbXBvcnRhbnQ7fWAsXG4gICAgYW5pbWF0aW9uczogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259IHN2ZyBwb2x5bGluZXt0cmFuc2l0aW9uOmFsbCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9O31gXG4gIH07XG59O1xuXG4vKipcbiAqIFRoaXMgYWxsb3dzIGl0IHRvIHN1cHBvcnQgWyhuZ01vZGVsKV0uXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeUNoZWNrYm94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKiBDaGFuZ2UgZXZlbnQgb2JqZWN0IGVtaXR0ZWQgYnkgTHlDaGVja2JveC4gKi9cbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94Q2hhbmdlIHtcbiAgLyoqIFRoZSBzb3VyY2UgTHlDaGVja2JveCBvZiB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogTHlDaGVja2JveDtcbiAgLyoqIFRoZSBuZXcgYGNoZWNrZWRgIHZhbHVlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUNoZWNrYm94TWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKEx5Q2hlY2tib3hCYXNlKTtcblxuLyoqXG4gKiBAZHluYW1pY1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyLFxuICAgIExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsXG4gIF0sXG4gIGV4cG9ydEFzOiAnbHlDaGVja2JveCcsXG4gIGlucHV0czogW1xuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggZXh0ZW5kcyBMeUNoZWNrYm94TWl4aW5CYXNlIGltcGxlbWVudHMgV2l0aFN0eWxlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5Q2hlY2tib3gnO1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2lubmVyQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgLyoqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIENoZWNrYm94IGNvbG9yIHdoZW4gY2hlY2tlZCAqL1xuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgdmFsID0+IChcbiAgICAgIHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5Q2hlY2tib3hWYXJpYWJsZXMsXG4gICAgICByZWY6IFRoZW1lUmVmXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBjaGVja2JveCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICBpZiAodGhlbWUuY2hlY2tib3ggJiYgdGhlbWUuY2hlY2tib3guY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lLmNoZWNrYm94LmNvbG9yKGNoZWNrYm94LCBjb2xvcik7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlDaGVja2JveC7QuH06IHN0eWxlcyB0aGVtZS5jaGVja2JveC5jb2xvciBpcyB1bmRlZmluZWRgKTtcbiAgICB9XG4gICwgU1RZTEVfUFJJT1JJVFkpXG4gIGNvbG9yOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIC8vIGlmIChuZXdWYWwgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3gncyBgY2hlY2tlZGAgdmFsdWUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4oKTtcblxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPmAgZWxlbWVudCAqL1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfY29tbW9uU3R5bGVzOiBMeUNvbW1vblN0eWxlcyxcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICByZWFkb25seSBzUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxNTBcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIC8vIHNldCBkZWZhdWx0IGNvbG9yXG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXRFbGVtZW50LCB0aGlzLl9lbCk7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9pbm5lckNvbnRhaW5lcjtcblxuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIl19