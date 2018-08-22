(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/ripple'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/radio', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/ripple', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.radio = {}),global.ng.core,global.alyle.ui,global.alyle.ui.ripple,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,i1,ripple,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyRadioService = /** @class */ (function () {
        function LyRadioService(coreTheme) {
            this.coreTheme = coreTheme;
            this.classes = {
                root: this.coreTheme.setUpStyle('k-radio-group', {
                    '': function () {
                        return ("display: flex;" +
                            "flex-wrap: wrap;");
                    }
                }),
                labelContent: this.coreTheme.setUpStyle('k-radio-label-content', {
                    '': function () { return ("padding: 0 0.5em;"); }
                })
            };
        }
        LyRadioService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyRadioService.ctorParameters = function () {
            return [
                { type: i1.CoreTheme }
            ];
        };
        /** @nocollapse */ LyRadioService.ngInjectableDef = i0.defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(i0.inject(i1.CoreTheme)); }, token: LyRadioService, providedIn: "root" });
        return LyRadioService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
    var LyRadioGroup = /** @class */ (function () {
        function LyRadioGroup(_radioService, elementRef, _renderer, theme, ngZone, cd) {
            this._radioService = _radioService;
            this.elementRef = elementRef;
            this._renderer = _renderer;
            this.theme = theme;
            this.ngZone = ngZone;
            this.cd = cd;
            this._value = new UndefinedValue;
            this.name = "ly-radio-name-" + idx++;
            this._color = 'accent';
            this.change = new i0.EventEmitter();
            /**
             * @deprecated use withColor
             */
            this.radioColor = 'accent';
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
        Object.defineProperty(LyRadioGroup.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                return {
                    label: this.theme.setUpStyle("k-radio-label", {
                        '': function () {
                            return ("cursor: pointer;" +
                                "white-space: nowrap;" +
                                "position: relative;" +
                                "display: flex;" +
                                "align-items: center;");
                        }
                    }),
                    container: this.theme.setUpStyleSecondary("k-radio-container", {
                        '': function () {
                            return ("position: relative;" +
                                "height: calc(1em * 3);" +
                                "width: 1.5em;");
                        },
                        '>div': function () { return ("box-sizing: border-box;"); },
                        '>div *': function () {
                            return ("box-sizing: border-box;" +
                                "margin:auto;" +
                                "border-radius: 50%;" +
                                "transition: transform cubic-bezier(.1, 1, 0.5, 1);" +
                                "transition-duration: 250ms;" +
                                "width: 1em;" +
                                "height: 1em;");
                        },
                        ' div>:nth-child(1)': function () {
                            return ("transform: scale(1);" +
                                "border: solid .08em currentColor;" +
                                ("color:" + _this.theme.config["radio"].radioOuterCircle));
                        },
                        ' div>:nth-child(2)': function () {
                            return ("background: currentColor;" +
                                "transform: scale(0);");
                        }
                    })
                };
            },
            enumerable: true,
            configurable: true
        });
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
            radioColor: [{ type: i0.Input }],
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
            this.onCheckedState = new i0.EventEmitter();
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
                        /** *
                         * create new class if exist `this.checkedClass`
                          @type {?} */
                        var beforeClass = this.checkedClass;
                        this.checkedClass = this._createStyleWithColor(val);
                        this.theme.updateClassName(this._radioContainer.nativeElement, this._renderer, this.checkedClass, beforeClass);
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
                var _this = this;
                return this.theme.setUpStyle("k-radio-checked-" + val, {
                    '': function () { return ("color:" + _this.theme.colorOf(val) + ";"); },
                    ' div>:nth-child(1)': function () {
                        return ("transform: scale(1.25);" +
                            ("color:" + _this.theme.colorOf(val) + ";"));
                    },
                    ' div>:nth-child(2)': function () { return ("transform: scale(0.7);"); },
                });
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
                this._rippleContainer = new ripple.Ripple(this.ngZone, this._rippleService.stylesData, this._radioContainer.nativeElement, this._elementRef.nativeElement);
                this._rippleContainer.setConfig({
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
                this._rippleContainer.removeEvents();
            };
        LyRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-radio',
                        // styleUrls: ['radio.scss'],
                        template: "\n  <label #_labelContainer [attr.for]=\"inputId\" [className]=\"radioGroup.classes.label\">\n    <input\n      [className]=\"coreStyles.classes.VisuallyHidden\"\n      [id]=\"inputId\"\n      [checked]=\"checked\"\n      [name]=\"name\"\n      (change)=\"_onInputChange($event)\"\n      (click)=\"_onInputClick($event)\"\n      type=\"radio\"\n      >\n    <div #_radioContainer>\n      <div>\n      <div [className]=\"coreStyles.classes.Fill\"></div>\n      <div [className]=\"coreStyles.classes.Fill\"></div>\n      </div>\n    </div>\n    <div\n    [className]=\"radioGroup._radioService.classes.labelContent\">\n      <ng-content></ng-content>\n    </div>\n  </label>\n  ",
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
            onCheckedState: [{ type: i0.Output }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmFkaW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmFkaW8vcmFkaW8uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3JhZGlvL3JhZGlvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stcmFkaW8tZ3JvdXAnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICAgICAgYGZsZXgtd3JhcDogd3JhcDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIGxhYmVsQ29udGVudDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLXJhZGlvLWxhYmVsLWNvbnRlbnQnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBhZGRpbmc6IDAgMC41ZW07YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkgeyB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPcHRpb25hbCxcbiAgSG9zdEJpbmRpbmcsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSwgTHlSaXBwbGUsIEx5UmlwcGxlU2VydmljZSwgUmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gLCBTdWJqZWN0ICwgQmVoYXZpb3JTdWJqZWN0ICwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmdNb2RlbCxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBQbGF0Zm9ybSwgSXNCb29sZWFuLCBMeVRoZW1lMiwgTHlDb3JlU3R5bGVzLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSYWRpb1NlcnZpY2UgfSBmcm9tICcuL3JhZGlvLnNlcnZpY2UnO1xuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBwcm92aWRlcnM6IFtMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5UmFkaW9Hcm91cCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb0dyb3VwIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBfdmFsdWUgPSBuZXcgVW5kZWZpbmVkVmFsdWU7XG4gIG5hbWUgPSBgbHktcmFkaW8tbmFtZS0ke2lkeCsrfWA7XG4gIF9jb2xvciA9ICdhY2NlbnQnO1xuICBwcml2YXRlIF9jbGFzc2VzO1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgICBgay1yYWRpby1sYWJlbGAsIHtcbiAgICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgICAgYGN1cnNvcjogcG9pbnRlcjtgICtcbiAgICAgICAgICAgIGB3aGl0ZS1zcGFjZTogbm93cmFwO2AgK1xuICAgICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgICBgay1yYWRpby1jb250YWluZXJgLCB7XG4gICAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICAgICAgICBgaGVpZ2h0OiBjYWxjKDFlbSAqIDMpO2AgK1xuICAgICAgICAgICAgYHdpZHRoOiAxLjVlbTtgXG4gICAgICAgICAgKSxcbiAgICAgICAgICAnPmRpdic6ICgpID0+IChcbiAgICAgICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2BcbiAgICAgICAgICApLFxuICAgICAgICAgICc+ZGl2IConOiAoKSA9PiAoXG4gICAgICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgICAgIGBtYXJnaW46YXV0bztgICtcbiAgICAgICAgICAgIGBib3JkZXItcmFkaXVzOiA1MCU7YCArXG4gICAgICAgICAgICBgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgICAgICAgIGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztgICtcbiAgICAgICAgICAgIGB3aWR0aDogMWVtO2AgK1xuICAgICAgICAgICAgYGhlaWdodDogMWVtO2BcbiAgICAgICAgICApLFxuICAgICAgICAgICcgZGl2PjpudGgtY2hpbGQoMSknOiAoKSA9PiAoXG4gICAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSgxKTtgICtcbiAgICAgICAgICAgIGBib3JkZXI6IHNvbGlkIC4wOGVtIGN1cnJlbnRDb2xvcjtgICtcbiAgICAgICAgICAgIGBjb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGV9YFxuICAgICAgICAgICksXG4gICAgICAgICAgJyBkaXY+Om50aC1jaGlsZCgyKSc6ICgpID0+IChcbiAgICAgICAgICAgIGBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7YCArXG4gICAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSgwKTtgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAvLyB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHdpdGhDb2xvciAqL1xuICBASW5wdXQoKSByYWRpb0NvbG9yID0gJ2FjY2VudCc7XG4gIEBJbnB1dCgpIHdpdGhDb2xvciA9ICdhY2NlbnQnO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpbykpIF9yYWRpb3M6IFF1ZXJ5TGlzdDxMeVJhZGlvPjtcblxuICAvKiogVGhlIG1ldGhvZCB0byBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gdXBkYXRlIG5nTW9kZWwgKi9cbiAgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIG9uVG91Y2ggZnVuY3Rpb24gcmVnaXN0ZXJlZCB2aWEgcmVnaXN0ZXJPblRvdWNoIChDb250cm9sVmFsdWVBY2Nlc3NvcikuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIE1hcmsgdGhpcyBncm91cCBhcyBiZWluZyBcInRvdWNoZWRcIiAoZm9yIG5nTW9kZWwpLiBNZWFudCB0byBiZSBjYWxsZWQgYnkgdGhlIGNvbnRhaW5lZFxuICAgKiByYWRpbyBidXR0b25zIHVwb24gdGhlaXIgYmx1ci5cbiAgICovXG4gIF90b3VjaCgpIHtcbiAgICBpZiAodGhpcy5vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKCEhdGhpcy5fcmFkaW9zKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlcy5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sLiBJbXBsZW1lbnRlZCBhcyBhIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFdoZXRoZXIgdGhlIGNvbnRyb2wgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgLy8gdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfcmFkaW9TZXJ2aWNlOiBMeVJhZGlvU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIF91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWw6IGFueSkge1xuICAgIGxldCBuZXdDaGVja2VkOiBib29sZWFuO1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHJhZGlvQnV0dG9uLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRldmFsdWUodmFsKTtcbiAgICAgICAgbmV3Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIW5ld0NoZWNrZWQpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpbycsXG4gIC8vIHN0eWxlVXJsczogWydyYWRpby5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxsYWJlbCAjX2xhYmVsQ29udGFpbmVyIFthdHRyLmZvcl09XCJpbnB1dElkXCIgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLmNsYXNzZXMubGFiZWxcIj5cbiAgICA8aW5wdXRcbiAgICAgIFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLlZpc3VhbGx5SGlkZGVuXCJcbiAgICAgIFtpZF09XCJpbnB1dElkXCJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAoY2hhbmdlKT1cIl9vbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIl9vbklucHV0Q2xpY2soJGV2ZW50KVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgPlxuICAgIDxkaXYgI19yYWRpb0NvbnRhaW5lcj5cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLkZpbGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgW2NsYXNzTmFtZV09XCJjb3JlU3R5bGVzLmNsYXNzZXMuRmlsbFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMubGFiZWxDb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvbGFiZWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpZCA9IGBseS1yYWRpby1pZC0ke2lkeCsrfWA7XG4gIG5hbWUgPSAnJztcbiAgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hlY2tlZENsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicpIHByaXZhdGUgX3JhZGlvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fd2l0aENvbG9yICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWRDbGFzcykge1xuICAgICAgICAvKiogY3JlYXRlIG5ldyBjbGFzcyBpZiBleGlzdCBgdGhpcy5jaGVja2VkQ2xhc3NgICovXG4gICAgICAgIGNvbnN0IGJlZm9yZUNsYXNzID0gdGhpcy5jaGVja2VkQ2xhc3M7XG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsKTtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIHRoaXMuY2hlY2tlZENsYXNzLCBiZWZvcmVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBAT3V0cHV0KCkgb25DaGVja2VkU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogVXNlIGN1cnJlbnQgY2hlY2tlZCBjbGFzcyBvciBjcmVhdGUgbmV3IGNsYXNzICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5jaGVja2VkQ2xhc3MgfHwgdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodGhpcy53aXRoQ29sb3IgfHwgdGhpcy5yYWRpb0dyb3VwLndpdGhDb2xvcik7XG4gICAgICAgIC8qKiBBZGQgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgX29uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgLy8gdGhpcy5yYWRpb0dyb3VwLl9yYWRpb1Jlc2V0Q2hlY2tlZCgpO1xuICAgIC8vIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl90b3VjaCgpO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cblxuICBfc2V0Q2hlY2tlZFRvRmFsc3koKSB7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGstcmFkaW8tY2hlY2tlZC0ke3ZhbH1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7dGhpcy50aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgJyBkaXY+Om50aC1jaGlsZCgxKSc6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtgICtcbiAgICAgICAgICBgY29sb3I6JHt0aGlzLnRoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICAnIGRpdj46bnRoLWNoaWxkKDIpJzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7YFxuICAgICAgICApLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5yYWRpb0dyb3VwLmNsYXNzZXMuY29udGFpbmVyKTtcbiAgICB9XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLm5nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5zdHlsZXNEYXRhLCB0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5zZXRDb25maWcoe1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJ1xuICAgIH0pO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlcyxcbiAgICBwcml2YXRlIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2VcbiAgKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb3JlVGhlbWUiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJMeVRoZW1lMiIsIk5nWm9uZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJDb250ZW50Q2hpbGRyZW4iLCJ0b0Jvb2xlYW4iLCJSaXBwbGUiLCJPcHRpb25hbCIsIkx5Q29yZVN0eWxlcyIsIkx5UmlwcGxlU2VydmljZSIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJMeVJpcHBsZU1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUF3QkUsd0JBQ1U7WUFBQSxjQUFTLEdBQVQsU0FBUzsyQkFsQlQ7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUM3QixlQUFlLEVBQUU7b0JBQ2YsRUFBRSxFQUFFO3dCQUFNLFFBQ1IsZ0JBQWdCOzRCQUNoQixrQkFBa0I7cUJBQ25CO2lCQUNGLENBQ0Y7Z0JBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNyQyx1QkFBdUIsRUFBRTtvQkFDdkIsRUFBRSxFQUFFLGNBQU0sUUFDUixtQkFBbUIsSUFDcEI7aUJBQ0YsQ0FDRjthQUNGO1NBR0k7O29CQXZCTkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBSlFDLFlBQVM7Ozs7NkJBRGxCOzs7Ozs7O0FDQUE7QUFxQ0EsUUFBYSwrQkFBK0IsR0FBUTtRQUNsRCxPQUFPLEVBQUVDLHVCQUFpQjtRQUMxQixXQUFXLEVBQUVDLGFBQVUsQ0FBQyxjQUFNLE9BQUEsWUFBWSxHQUFBLENBQUM7UUFDM0MsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOztJQUVGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztB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