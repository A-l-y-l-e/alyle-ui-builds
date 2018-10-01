(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/ripple'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/radio', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/ripple', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.radio = {}),global.ng.core,global.alyle.ui,global.alyle.ui.ripple,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,i1,ripple,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = ({
        root: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        labelContent: {
            padding: '0 0.5em'
        }
    });
    var LyRadioService = /** @class */ (function () {
        function LyRadioService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles, 'lyRadioStatic', STYLE_PRIORITY);
        }
        LyRadioService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyRadioService.ctorParameters = function () {
            return [
                { type: i1.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyRadioService.ngInjectableDef = i0.defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(i0.inject(i1.LyTheme2)); }, token: LyRadioService, providedIn: "root" });
        return LyRadioService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY$1 = -2;
    /** @type {?} */
    var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return LyRadioGroup; }),
        multi: true
    };
    /** @type {?} */
    var idx = 0;
    var UndefinedValue = /** @class */ (function () {
        function UndefinedValue() {
        }
        return UndefinedValue;
    }());
    /** @type {?} */
    var styles$1 = function (theme) {
        return ({
            label: {
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
            },
            container: {
                position: 'relative',
                height: 'calc(1em * 3)',
                width: '1.5em',
                '&>div *': {
                    margin: 'auto',
                    borderRadius: '50%',
                    transition: 'transform cubic-bezier(.1, 1, 0.5, 1)',
                    transitionDuration: '250ms',
                    width: '1em',
                    height: '1em'
                },
                '& div>:nth-child(2)': {
                    background: 'currentColor',
                    transform: 'scale(0)'
                },
                '& div>:nth-child(1)': {
                    transform: 'scale(1)',
                    border: 'solid .08em currentColor',
                    color: theme.radio.radioOuterCircle
                }
            }
        });
    };
    var LyRadioGroup = /** @class */ (function () {
        function LyRadioGroup(_radioService, elementRef, _renderer, theme, ngZone, cd) {
            this._radioService = _radioService;
            this.theme = theme;
            this.ngZone = ngZone;
            this.cd = cd;
            this._value = new UndefinedValue;
            this.name = "ly-radio-name-" + idx++;
            this._color = 'accent';
            this.classes = this.theme.addStyleSheet(styles$1, 'lyRadio', STYLE_PRIORITY$1);
            this.change = new i0.EventEmitter();
            this.withColor = 'accent';
            /**
             * The method to be called in order to update ngModel
             */
            this._controlValueAccessorChangeFn = function () { };
            /**
             * onTouch function registered via registerOnTouch (ControlValueAccessor).
             * \@docs-private
             */
            this.onTouched = function () { };
            _renderer.addClass(elementRef.nativeElement, this._radioService.classes.root);
        }
        Object.defineProperty(LyRadioGroup.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._value !== val) {
                    // this._value = val;
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
        /**
         * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
         * radio buttons upon their blur.
         * @return {?}
         */
        LyRadioGroup.prototype._touch = /**
         * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
         * radio buttons upon their blur.
         * @return {?}
         */
            function () {
                if (this.onTouched) {
                    this.onTouched();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LyRadioGroup.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!!this._radios) {
                    this.value = value;
                    this.markForCheck();
                }
            };
        /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         */
        /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        LyRadioGroup.prototype.registerOnChange = /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
            function (fn) {
                this._controlValueAccessorChangeFn = fn;
            };
        /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         */
        /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        LyRadioGroup.prototype.registerOnTouched = /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * @param isDisabled Whether the control should be disabled.
         */
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled Whether the control should be disabled.
         * @return {?}
         */
        LyRadioGroup.prototype.setDisabledState = /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled Whether the control should be disabled.
         * @return {?}
         */
            function (isDisabled) {
                // this.disabled = isDisabled;
                this.markForCheck();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyRadioGroup.prototype._updateCheckFromValue = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                /** @type {?} */
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
                    if (this._value !== null) {
                        this._value = null;
                    }
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LyRadioGroup.prototype.updatevalue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._value = value;
                this._controlValueAccessorChangeFn(value);
                this.change.emit();
                this.markForCheck();
            };
        /**
         * @return {?}
         */
        LyRadioGroup.prototype.markForCheck = /**
         * @return {?}
         */
            function () {
                this.cd.markForCheck();
            };
        /**
         * @return {?}
         */
        LyRadioGroup.prototype._radioResetChecked = /**
         * @return {?}
         */
            function () {
                this._radios.forEach(function (_) { return _._setCheckedToFalsy(); });
            };
        LyRadioGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-radio-group',
                        template: "<ng-content></ng-content>",
                        providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        exportAs: 'lyRadioGroup'
                    },] },
        ];
        /** @nocollapse */
        LyRadioGroup.ctorParameters = function () {
            return [
                { type: LyRadioService },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyTheme2 },
                { type: i0.NgZone },
                { type: i0.ChangeDetectorRef }
            ];
        };
        LyRadioGroup.propDecorators = {
            value: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            withColor: [{ type: i0.Input }],
            _radios: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return LyRadio; }),] }]
        };
        return LyRadioGroup;
    }());
    var LyRadio = /** @class */ (function () {
        function LyRadio(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, coreStyles, _rippleService) {
            this.radioGroup = radioGroup;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this.theme = theme;
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.coreStyles = coreStyles;
            this._rippleService = _rippleService;
            this.id = "ly-radio-id-" + idx++;
            this.name = '';
            this._value = null;
            this._checked = false;
            this.change = new i0.EventEmitter();
        }
        Object.defineProperty(LyRadio.prototype, "withColor", {
            get: /**
             * @return {?}
             */ function () {
                return this._withColor;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._withColor !== val) {
                    this._withColor = val;
                    if (this.checkedClass) {
                        /** create new class if exist `this.checkedClass` */
                        this.checkedClass = this._createStyleWithColor(val);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "value", {
            get: /**
             * @return {?}
             */ function () { return this._value; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._value !== val) {
                    this._value = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "checked", {
            get: /**
             * @return {?}
             */ function () {
                return this._checked;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newCheckedState = i1.toBoolean(val);
                /** @type {?} */
                var before = this._checked;
                if (before !== newCheckedState) {
                    this._checked = newCheckedState;
                    if (!before && newCheckedState) {
                        /** Use current checked class or create new class */
                        this.checkedClass = this.checkedClass || this._createStyleWithColor(this.withColor || this.radioGroup.withColor);
                        /** Add class checked */
                        this._renderer.addClass(this._radioContainer.nativeElement, this.checkedClass);
                        if (this.value !== this.radioGroup.value) {
                            /** update Value */
                            this.radioGroup.updatevalue(this.value);
                        }
                    }
                    else {
                        /** Remove class checked */
                        this._renderer.removeClass(this._radioContainer.nativeElement, this.checkedClass);
                    }
                    this._markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "inputId", {
            get: /**
             * @return {?}
             */ function () {
                return this.id + "-input";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        LyRadio.prototype._onInputChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                this.radioGroup._updateCheckFromValue(this.value);
                // this.radioGroup._radioResetChecked();
                // this.checked = true;
                this.radioGroup._touch();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyRadio.prototype._onInputClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { event.stopPropagation(); };
        /**
         * @return {?}
         */
        LyRadio.prototype._setCheckedToFalsy = /**
         * @return {?}
         */
            function () {
                this.checked = false;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyRadio.prototype._createStyleWithColor = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return this.theme.addStyle("lyRadio-checked:" + val, function (theme) {
                    return ({
                        color: theme.colorOf(val),
                        '& div>:nth-child(1)': {
                            transform: 'scale(1.25)',
                            color: theme.colorOf(val),
                        },
                        '& div>:nth-child(2)': {
                            transform: 'scale(0.8)'
                        },
                    });
                }, this._radioContainer.nativeElement, this.checkedClass, STYLE_PRIORITY$1);
            };
        /**
         * @return {?}
         */
        LyRadio.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.radioGroup) {
                    // Copy name from parent radio group
                    this.name = this.radioGroup.name;
                    this._renderer.addClass(this._radioContainer.nativeElement, this.radioGroup.classes.container);
                }
                this._ripple = new ripple.Ripple(this.theme.config, this.ngZone, this._rippleService.classes, this._radioContainer.nativeElement, this._elementRef.nativeElement);
                this._ripple.setConfig({
                    centered: true,
                    radius: 'containerSize'
                });
            };
        /**
         * @return {?}
         */
        LyRadio.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this.changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        LyRadio.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._ripple.removeEvents();
            };
        LyRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-radio',
                        // styleUrls: ['radio.scss'],
                        template: "\n  <label #_labelContainer [attr.for]=\"inputId\" [className]=\"radioGroup.classes.label\">\n    <input\n      [className]=\"coreStyles.classes.visuallyHidden\"\n      [id]=\"inputId\"\n      [checked]=\"checked\"\n      [name]=\"name\"\n      (change)=\"_onInputChange($event)\"\n      (click)=\"_onInputClick($event)\"\n      type=\"radio\"\n      >\n    <div #_radioContainer>\n      <div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n      </div>\n    </div>\n    <div\n    [className]=\"radioGroup._radioService.classes.labelContent\">\n      <ng-content></ng-content>\n    </div>\n  </label>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        LyRadio.ctorParameters = function () {
            return [
                { type: LyRadioGroup, decorators: [{ type: i0.Optional }] },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyTheme2 },
                { type: i0.ChangeDetectorRef },
                { type: i0.NgZone },
                { type: i1.LyCoreStyles },
                { type: ripple.LyRippleService }
            ];
        };
        LyRadio.propDecorators = {
            _radioContainer: [{ type: i0.ViewChild, args: ['_radioContainer',] }],
            _labelContainer: [{ type: i0.ViewChild, args: ['_labelContainer',] }],
            withColor: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            value: [{ type: i0.Input }],
            checked: [{ type: i0.Input }]
        };
        return LyRadio;
    }());
    var LyRadioModule = /** @class */ (function () {
        function LyRadioModule() {
        }
        LyRadioModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ripple.LyRippleModule, i1.LyCommonModule],
                        exports: [LyRadioGroup, LyRadio],
                        declarations: [LyRadioGroup, LyRadio],
                    },] },
        ];
        return LyRadioModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyRadioService = LyRadioService;
    exports.LY_RADIO_CONTROL_VALUE_ACCESSOR = LY_RADIO_CONTROL_VALUE_ACCESSOR;
    exports.UndefinedValue = UndefinedValue;
    exports.LyRadioGroup = LyRadioGroup;
    exports.LyRadio = LyRadio;
    exports.LyRadioModule = LyRadioModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmFkaW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmFkaW8vcmFkaW8uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3JhZGlvL3JhZGlvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnXG4gIH0sXG4gIGxhYmVsQ29udGVudDoge1xuICAgIHBhZGRpbmc6ICcwIDAuNWVtJ1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb1NlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5UmFkaW9TdGF0aWMnLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlLCBMeVJpcHBsZVNlcnZpY2UsIFJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lMiwgTHlDb3JlU3R5bGVzLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSYWRpb1NlcnZpY2UgfSBmcm9tICcuL3JhZGlvLnNlcnZpY2UnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY29uc3QgTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpb0dyb3VwKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBpZHggPSAwO1xuXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBsYWJlbDoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBoZWlnaHQ6ICdjYWxjKDFlbSAqIDMpJyxcbiAgICB3aWR0aDogJzEuNWVtJyxcbiAgICAnJj5kaXYgKic6IHtcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzI1MG1zJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGhlaWdodDogJzFlbSdcbiAgICB9LFxuICAgICcmIGRpdj46bnRoLWNoaWxkKDIpJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICB9LFxuICAgICcmIGRpdj46bnRoLWNoaWxkKDEpJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgYm9yZGVyOiAnc29saWQgLjA4ZW0gY3VycmVudENvbG9yJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5yYWRpby5yYWRpb091dGVyQ2lyY2xlXG4gICAgfVxuICB9XG59KTtcbi8vIGNvbnNvbGUubG9nKCdtb2R1bGUuaWQnLCBtb2R1bGUuaWQpO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBwcm92aWRlcnM6IFtMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5UmFkaW9Hcm91cCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb0dyb3VwIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBfdmFsdWUgPSBuZXcgVW5kZWZpbmVkVmFsdWU7XG4gIG5hbWUgPSBgbHktcmFkaW8tbmFtZS0ke2lkeCsrfWA7XG4gIF9jb2xvciA9ICdhY2NlbnQnO1xuXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlSYWRpbycsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgLy8gdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgd2l0aENvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9yYWRpb1NlcnZpY2U6IEx5UmFkaW9TZXJ2aWNlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBfdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsOiBhbnkpIHtcbiAgICBsZXQgbmV3Q2hlY2tlZDogYm9vbGVhbjtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpb0J1dHRvbiA9PiB7XG4gICAgICBpZiAodmFsID09PSByYWRpb0J1dHRvbi52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZXZhbHVlKHZhbCk7XG4gICAgICAgIG5ld0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFuZXdDaGVja2VkKSB7XG4gICAgICAvKiogd2hlbiB2YWwgbm90IGV4aXN0IGluIHJhZGlvIGJ1dHRvbiAhPT0gICovXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKG51bGwpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGV2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3JhZGlvUmVzZXRDaGVja2VkKCkge1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKF8gPT4gXy5fc2V0Q2hlY2tlZFRvRmFsc3koKSk7XG4gIH1cblxufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8nLFxuICAvLyBzdHlsZVVybHM6IFsncmFkaW8uc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8bGFiZWwgI19sYWJlbENvbnRhaW5lciBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5jbGFzc2VzLmxhYmVsXCI+XG4gICAgPGlucHV0XG4gICAgICBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy52aXN1YWxseUhpZGRlblwiXG4gICAgICBbaWRdPVwiaW5wdXRJZFwiXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgKGNoYW5nZSk9XCJfb25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJfb25JbnB1dENsaWNrKCRldmVudClcIlxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgID5cbiAgICA8ZGl2ICNfcmFkaW9Db250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy5maWxsXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5sYWJlbENvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9sYWJlbD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlkID0gYGx5LXJhZGlvLWlkLSR7aWR4Kyt9YDtcbiAgbmFtZSA9ICcnO1xuICBfdmFsdWUgPSBudWxsO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGVja2VkQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX3JhZGlvQ29udGFpbmVyJykgcHJpdmF0ZSBfcmFkaW9Db250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicpIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl93aXRoQ29sb3IgIT09IHZhbCkge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZENsYXNzKSB7XG4gICAgICAgIC8qKiBjcmVhdGUgbmV3IGNsYXNzIGlmIGV4aXN0IGB0aGlzLmNoZWNrZWRDbGFzc2AgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZVdpdGhDb2xvcih2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld0NoZWNrZWRTdGF0ZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMuX2NoZWNrZWQ7XG4gICAgaWYgKGJlZm9yZSAhPT0gbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3Q2hlY2tlZFN0YXRlO1xuICAgICAgaWYgKCFiZWZvcmUgJiYgbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICAgIC8qKiBVc2UgY3VycmVudCBjaGVja2VkIGNsYXNzIG9yIGNyZWF0ZSBuZXcgY2xhc3MgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2xhc3MgPSB0aGlzLmNoZWNrZWRDbGFzcyB8fCB0aGlzLl9jcmVhdGVTdHlsZVdpdGhDb2xvcih0aGlzLndpdGhDb2xvciB8fCB0aGlzLnJhZGlvR3JvdXAud2l0aENvbG9yKTtcbiAgICAgICAgLyoqIEFkZCBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlKSB7XG4gICAgICAgICAgLyoqIHVwZGF0ZSBWYWx1ZSAqL1xuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC51cGRhdGV2YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIFJlbW92ZSBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAvLyB0aGlzLnJhZGlvR3JvdXAuX3JhZGlvUmVzZXRDaGVja2VkKCk7XG4gICAgLy8gdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkgeyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuXG4gIF9zZXRDaGVja2VkVG9GYWxzeSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZVdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5UmFkaW8tY2hlY2tlZDoke3ZhbH1gLCB0aGVtZSA9PiAoe1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICAnJiBkaXY+Om50aC1jaGlsZCgxKSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjI1KScsXG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuY2hlY2tlZENsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgLy8gQ29weSBuYW1lIGZyb20gcGFyZW50IHJhZGlvIGdyb3VwXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmFkaW9Hcm91cC5jbGFzc2VzLmNvbnRhaW5lcik7XG4gICAgfVxuICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy50aGVtZS5jb25maWcsIHRoaXMubmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcmlwcGxlLnNldENvbmZpZyh7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnXG4gICAgfSk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyByYWRpb0dyb3VwOiBMeVJhZGlvR3JvdXAsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgY29yZVN0eWxlczogTHlDb3JlU3R5bGVzLFxuICAgIHByaXZhdGUgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZVxuICApIHsgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG4gIGRlY2xhcmF0aW9uczogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkx5VGhlbWUyIiwiU1RZTEVfUFJJT1JJVFkiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJzdHlsZXMiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJOZ1pvbmUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwidG9Cb29sZWFuIiwiUmlwcGxlIiwiT3B0aW9uYWwiLCJMeUNvcmVTdHlsZXMiLCJMeVJpcHBsZVNlcnZpY2UiLCJWaWV3Q2hpbGQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBR0EsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRTFCLElBQU0sTUFBTSxJQUFJO1FBQ2QsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsTUFBTTtTQUNqQjtRQUNELFlBQVksRUFBRTtZQUNaLE9BQU8sRUFBRSxTQUFTO1NBQ25CO0tBQ0YsQ0FBQyxDQUFDOztRQU9ELHdCQUNVO1lBQUEsVUFBSyxHQUFMLEtBQUs7MkJBRkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7U0FHdEU7O29CQVBOQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFoQlFDLFdBQVE7Ozs7NkJBRGpCOzs7Ozs7O0FDQUE7SUE2QkEsSUFBTUMsZ0JBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsUUFBYSwrQkFBK0IsR0FBUTtRQUNsRCxPQUFPLEVBQUVDLHVCQUFpQjtRQUMxQixXQUFXLEVBQUVDLGFBQVUsQ0FBQyxjQUFNLE9BQUEsWUFBWSxHQUFBLENBQUM7UUFDM0MsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOztJQUVGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUVaLFFBQUE7UUFDRTtTQUFpQjs2QkF4Q25CO1FBeUNDLENBQUE7QUFGRDtJQUlBLElBQU1DLFFBQU0sR0FBRyxVQUFBLEtBQUs7UUFBSSxRQUFDO1lBQ3ZCLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsU0FBUztnQkFDakIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixPQUFPLEVBQUUsTUFBTTtnQkFDZixVQUFVLEVBQUUsUUFBUTthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLEtBQUssRUFBRSxPQUFPO2dCQUNkLFNBQVMsRUFBRTtvQkFDVCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxZQUFZLEVBQUUsS0FBSztvQkFDbkIsVUFBVSxFQUFFLHVDQUF1QztvQkFDbkQsa0JBQWtCLEVBQUUsT0FBTztvQkFDM0IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QscUJBQXFCLEVBQUU7b0JBQ3JCLFVBQVUsRUFBRSxjQUFjO29CQUMxQixTQUFTLEVBQUUsVUFBVTtpQkFDdEI7Z0JBQ0QscUJBQXFCLEVBQUU7b0JBQ3JCLFNBQVMsRUFBRSxVQUFVO29CQUNyQixNQUFNLEVBQUUsMEJBQTBCO29CQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7aUJBQ3BDO2FBQ0Y7U0FDRjtJQTlCdUIsQ0E4QnRCLENBQUM7O1FBd0ZELHNCQUNTLGVBQ1AsVUFBc0IsRUFDdEIsU0FBb0IsRUFDYixPQUNBLFFBQ0M7WUFMRCxrQkFBYSxHQUFiLGFBQWE7WUFHYixVQUFLLEdBQUwsS0FBSztZQUNMLFdBQU0sR0FBTixNQUFNO1lBQ0wsT0FBRSxHQUFGLEVBQUU7MEJBbkZILElBQUksY0FBYzt3QkFDcEIsbUJBQWlCLEdBQUcsRUFBSTswQkFDdEIsUUFBUTsyQkFFUCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQ0EsUUFBTSxFQUFFLFNBQVMsRUFBRUgsZ0JBQWMsQ0FBQzswQkFlckIsSUFBSUksZUFBWSxFQUFROzZCQUVuRCxRQUFROzs7O2lEQUl5QixlQUFROzs7Ozs2QkFNdkMsZUFBUTtZQXNEN0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9FO1FBaEZELHNCQUNJLCtCQUFLOzs7Z0JBUVQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BCOzs7O2dCQVhELFVBQ1UsR0FBUTtnQkFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTs7b0JBRXZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNqQztpQkFDRjthQUNGOzs7V0FBQTs7Ozs7Ozs7OztRQXVCRCw2QkFBTTs7Ozs7WUFBTjtnQkFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDbEI7YUFDRjs7Ozs7UUFFRCxpQ0FBVTs7OztZQUFWLFVBQVcsS0FBVTtnQkFDbkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7YUFDRjs7Ozs7Ozs7Ozs7O1FBT0QsdUNBQWdCOzs7Ozs7WUFBaEIsVUFBaUIsRUFBd0I7Z0JBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7YUFDekM7Ozs7Ozs7Ozs7OztRQU9ELHdDQUFpQjs7Ozs7O1lBQWpCLFVBQWtCLEVBQU87Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3JCOzs7Ozs7Ozs7O1FBTUQsdUNBQWdCOzs7OztZQUFoQixVQUFpQixVQUFtQjs7Z0JBRWxDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7Ozs7UUFhRCw0Q0FBcUI7Ozs7WUFBckIsVUFBc0IsR0FBUTtnQkFBOUIsaUJBa0JDOztnQkFqQkMsSUFBSSxVQUFVLENBQVU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztvQkFDOUIsSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTt3QkFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDbEIsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7cUJBQzVCO3lCQUFNLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDOUIsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7cUJBQzdCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsVUFBVSxFQUFFOztvQkFFZixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUNwQjtpQkFDRjthQUNGOzs7OztRQUVELGtDQUFXOzs7O1lBQVgsVUFBWSxLQUFVO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7Ozs7UUFFRCxtQ0FBWTs7O1lBQVo7Z0JBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN4Qjs7OztRQUVELHlDQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEdBQUEsQ0FBQyxDQUFDO2FBQ25EOztvQkFsSUZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMkJBQTJCO3dCQUNyQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzt3QkFDNUMsZUFBZSxFQUFFQywwQkFBdUIsQ0FBQyxNQUFNO3dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3dCQUMxQixRQUFRLEVBQUUsY0FBYztxQkFDekI7Ozs7O3dCQXZEUSxjQUFjO3dCQVhyQkMsYUFBVTt3QkFDVkMsWUFBUzt3QkFTY1QsV0FBUTt3QkFaL0JVLFNBQU07d0JBUk5DLG9CQUFpQjs7Ozs0QkFvRmhCQyxRQUFLOzZCQWFMQyxTQUFNO2dDQUVORCxRQUFLOzhCQUNMRSxrQkFBZSxTQUFDWCxhQUFVLENBQUMsY0FBTSxPQUFBLE9BQU8sR0FBQSxDQUFDOzsyQkExRzVDOzs7UUFrV0UsaUJBQ3FCLFVBQXdCLEVBQ25DLGFBQ0EsV0FDRCxPQUNDLG1CQUNBLFFBQ0QsWUFDQztZQVBXLGVBQVUsR0FBVixVQUFVLENBQWM7WUFDbkMsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsY0FBUyxHQUFULFNBQVM7WUFDVixVQUFLLEdBQUwsS0FBSztZQUNKLHNCQUFpQixHQUFqQixpQkFBaUI7WUFDakIsV0FBTSxHQUFOLE1BQU07WUFDUCxlQUFVLEdBQVYsVUFBVTtZQUNULG1CQUFjLEdBQWQsY0FBYztzQkE1SG5CLGlCQUFlLEdBQUcsRUFBSTt3QkFDcEIsRUFBRTswQkFDQSxJQUFJOzRCQUdNLEtBQUs7MEJBaUJMLElBQUlFLGVBQVksRUFBVztTQXVHekM7UUFwSEwsc0JBQ0ksOEJBQVM7OztnQkFTYjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7Ozs7Z0JBWkQsVUFDYyxHQUFXO2dCQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO29CQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztvQkFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOzt3QkFFckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7OztXQUFBO1FBTUQsc0JBQ0ksMEJBQUs7OztnQkFLVCxjQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzs7O2dCQU5uQyxVQUNVLEdBQUc7Z0JBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQ25CO2FBQ0Y7OztXQUFBO1FBR0Qsc0JBQ0ksNEJBQU87OztnQkFzQlg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7O2dCQXpCRCxVQUNZLEdBQVk7O2dCQUN0QixJQUFNLGVBQWUsR0FBR1UsWUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDdkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsSUFBSSxNQUFNLEtBQUssZUFBZSxFQUFFO29CQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxlQUFlLEVBQUU7O3dCQUU5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7d0JBRWpILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFFL0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFOzs0QkFFeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN6QztxQkFDRjt5QkFBTTs7d0JBRUwsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNuRjtvQkFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0Y7OztXQUFBO1FBSUQsc0JBQUksNEJBQU87OztnQkFBWDtnQkFDRSxPQUFVLElBQUksQ0FBQyxFQUFFLFdBQVEsQ0FBQzthQUMzQjs7O1dBQUE7Ozs7O1FBRUQsZ0NBQWM7Ozs7WUFBZCxVQUFlLEtBQVU7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkFHbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMxQjs7Ozs7UUFFRCwrQkFBYTs7OztZQUFiLFVBQWMsS0FBWSxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFOzs7O1FBRXhELG9DQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCOzs7OztRQUVELHVDQUFxQjs7OztZQUFyQixVQUFzQixHQUFXO2dCQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUN4QixxQkFBbUIsR0FBSyxFQUFFLFVBQUEsS0FBSztvQkFBSSxRQUFDO3dCQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7d0JBQ3pCLHFCQUFxQixFQUFFOzRCQUNyQixTQUFTLEVBQUUsYUFBYTs0QkFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO3lCQUMxQjt3QkFDRCxxQkFBcUIsRUFBRTs0QkFDckIsU0FBUyxFQUFFLFlBQVk7eUJBQ3hCO3FCQUNGO2lCQUFDLEVBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQ2pCZCxnQkFBYyxDQUNmLENBQUM7YUFDSDs7OztRQUVELDBCQUFROzs7WUFBUjtnQkFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O29CQUVuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDaEc7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJZSxhQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzSixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDckIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFLGVBQWU7aUJBQ3hCLENBQUMsQ0FBQzthQUNKOzs7O1FBRUQsK0JBQWE7OztZQUFiO2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2Qzs7OztRQUVELDZCQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzdCOztvQkEvSUZWLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTs7d0JBRXBCLFFBQVEsRUFBRSwwcUJBc0JUO3dCQUNELGVBQWUsRUFBRUMsMEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7Ozs7O3dCQXVIa0MsWUFBWSx1QkFBMUNVLFdBQVE7d0JBblZYVCxhQUFVO3dCQUNWQyxZQUFTO3dCQVNjVCxXQUFRO3dCQXBCL0JXLG9CQUFpQjt3QkFRakJELFNBQU07d0JBWTJCUSxlQUFZO3dCQVB0QkMsc0JBQWU7Ozs7c0NBa09yQ0MsWUFBUyxTQUFDLGlCQUFpQjtzQ0FDM0JBLFlBQVMsU0FBQyxpQkFBaUI7Z0NBQzNCUixRQUFLOzZCQWFMQyxTQUFNOzRCQUVORCxRQUFLOzhCQVFMQSxRQUFLOztzQkE5UVI7Ozs7OztvQkE4V0NTLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksRUFBRUMsaUJBQVcsRUFBRUMscUJBQWMsRUFBRUMsaUJBQWMsQ0FBQzt3QkFDcEUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQzt3QkFDaEMsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztxQkFDdEM7OzRCQWxYRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9