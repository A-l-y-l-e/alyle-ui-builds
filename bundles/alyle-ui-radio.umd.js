(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/ripple'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/radio', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/ripple', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.radio = {}),global.ng.core,global.alyle.ui,global.alyle.ui.ripple,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,i1,ripple,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = ({
        root: {
            display: 'inline-block'
        },
        labelContent: {
            padding: '0 0.5em'
        },
        radioButton: {
            display: 'inline-block'
        }
    });
    var LyRadioService = /** @class */ (function () {
        function LyRadioService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        }
        LyRadioService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY$1 = -2;
    /** @type {?} */
    var DEFAULT_DISABLE_RIPPLE = false;
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
                alignItems: 'baseline'
            },
            container: {
                position: 'relative',
                width: '1.5em',
                margin: 'auto',
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
            this.classes = this.theme.addStyleSheet(styles$1, STYLE_PRIORITY$1);
            this.change = new i0.EventEmitter();
            this.color = 'accent';
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
                    }] }
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
            color: [{ type: i0.Input }],
            _radios: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return LyRadio; }),] }]
        };
        return LyRadioGroup;
    }());
    var LyRadioBase = /** @class */ (function () {
        function LyRadioBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyRadioBase;
    }());
    /** @type {?} */
    var LyRadioMixinBase = i1.mixinDisableRipple(i1.mixinColor(LyRadioBase));
    var LyRadio = /** @class */ (function (_super) {
        __extends(LyRadio, _super);
        function LyRadio(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, coreStyles) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this.radioGroup = radioGroup;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this.changeDetectorRef = changeDetectorRef;
            _this.coreStyles = coreStyles;
            _this.id = "ly-radio-id-" + idx++;
            _this.name = '';
            _this._value = null;
            // private _withColor: string;
            _this._checked = false;
            // @Input()
            // set withColor(val: string) {
            //   if (this._withColor !== val) {
            //     this._withColor = val;
            //     if (this.checkedClass) {
            //       /** create new class if exist `this.checkedClass` */
            //       this.checkedClass = this._createStyleWithColor(val);
            //     }
            //   }
            // }
            // get withColor() {
            //   return this._withColor;
            // }
            _this.change = new i0.EventEmitter();
            _this._triggerElement = _this._elementRef;
            _this._rippleConfig = {
                centered: true,
                radius: 'containerSize',
                percentageToIncrease: 100
            };
            _renderer.addClass(_elementRef.nativeElement, radioGroup._radioService.classes.radioButton);
            return _this;
        }
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
                        this.checkedClass = this.checkedClass || this._createStyleWithColor(this.color || this.radioGroup.color);
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
                return this._theme.addStyle("lyRadio-checked:" + val, function (theme) {
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
         * @param {?} changes
         * @return {?}
         */
        LyRadio.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.color) {
                    if (this.checkedClass) {
                        /** create new class if exist `this.checkedClass` */
                        this.checkedClass = this._createStyleWithColor(changes.color.currentValue);
                    }
                }
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
            };
        /**
         * @return {?}
         */
        LyRadio.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._rippleContainer = this._radioContainer;
                // set default disable ripple
                if (this.disableRipple === null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
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
                this._removeRippleEvents();
            };
        LyRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-radio',
                        // styleUrls: ['radio.scss'],
                        template: "\n  <label #_labelContainer [attr.for]=\"inputId\" [className]=\"radioGroup.classes.label\">\n    <input\n      [className]=\"coreStyles.classes.visuallyHidden\"\n      [id]=\"inputId\"\n      [checked]=\"checked\"\n      [name]=\"name\"\n      (change)=\"_onInputChange($event)\"\n      (click)=\"_onInputClick($event)\"\n      type=\"radio\"\n      >\n    <div #_radioContainer>\n      <div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n      </div>\n    </div>\n    <div\n    [className]=\"radioGroup._radioService.classes.labelContent\">\n      <ng-content></ng-content>\n    </div>\n  </label>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        inputs: [
                            'color',
                            'disableRipple'
                        ]
                    }] }
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
                { type: i1.LyCoreStyles }
            ];
        };
        LyRadio.propDecorators = {
            _radioContainer: [{ type: i0.ViewChild, args: ['_radioContainer',] }],
            _labelContainer: [{ type: i0.ViewChild, args: ['_labelContainer',] }],
            change: [{ type: i0.Output }],
            value: [{ type: i0.Input }],
            checked: [{ type: i0.Input }]
        };
        return LyRadio;
    }(LyRadioMixinBase));
    var LyRadioModule = /** @class */ (function () {
        function LyRadioModule() {
        }
        LyRadioModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ripple.LyRippleModule, i1.LyCommonModule],
                        exports: [LyRadioGroup, LyRadio],
                        declarations: [LyRadioGroup, LyRadio],
                    },] }
        ];
        return LyRadioModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyRadioService = LyRadioService;
    exports.LY_RADIO_CONTROL_VALUE_ACCESSOR = LY_RADIO_CONTROL_VALUE_ACCESSOR;
    exports.UndefinedValue = UndefinedValue;
    exports.LyRadioGroup = LyRadioGroup;
    exports.LyRadioBase = LyRadioBase;
    exports.LyRadioMixinBase = LyRadioMixinBase;
    exports.LyRadio = LyRadio;
    exports.LyRadioModule = LyRadioModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmFkaW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmFkaW8vcmFkaW8uc2VydmljZS50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9yYWRpby9yYWRpby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICB9LFxuICBsYWJlbENvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAnMCAwLjVlbSdcbiAgfSxcbiAgcmFkaW9CdXR0b246IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb1NlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIEx5Q29yZVN0eWxlcywgdG9Cb29sZWFuLCBtaXhpbkNvbG9yLCBtaXhpbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSYWRpb1NlcnZpY2UgfSBmcm9tICcuL3JhZGlvLnNlcnZpY2UnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpb0dyb3VwKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBpZHggPSAwO1xuXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBsYWJlbDoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICcmPmRpdiAqJzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBib3JkZXI6ICdzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IHRoZW1lLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGVcbiAgICB9XG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0xZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlSYWRpb0dyb3VwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF92YWx1ZSA9IG5ldyBVbmRlZmluZWRWYWx1ZTtcbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcbiAgX2NvbG9yID0gJ2FjY2VudCc7XG5cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgICB0aGlzLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9yYWRpb1NlcnZpY2U6IEx5UmFkaW9TZXJ2aWNlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBfdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsOiBhbnkpIHtcbiAgICBsZXQgbmV3Q2hlY2tlZDogYm9vbGVhbjtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpb0J1dHRvbiA9PiB7XG4gICAgICBpZiAodmFsID09PSByYWRpb0J1dHRvbi52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZXZhbHVlKHZhbCk7XG4gICAgICAgIG5ld0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFuZXdDaGVja2VkKSB7XG4gICAgICAvKiogd2hlbiB2YWwgbm90IGV4aXN0IGluIHJhZGlvIGJ1dHRvbiAhPT0gICovXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKG51bGwpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGV2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3JhZGlvUmVzZXRDaGVja2VkKCkge1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKF8gPT4gXy5fc2V0Q2hlY2tlZFRvRmFsc3koKSk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTHlSYWRpb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeVJhZGlvTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluQ29sb3IoTHlSYWRpb0Jhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8nLFxuICAvLyBzdHlsZVVybHM6IFsncmFkaW8uc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8bGFiZWwgI19sYWJlbENvbnRhaW5lciBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5jbGFzc2VzLmxhYmVsXCI+XG4gICAgPGlucHV0XG4gICAgICBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy52aXN1YWxseUhpZGRlblwiXG4gICAgICBbaWRdPVwiaW5wdXRJZFwiXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgKGNoYW5nZSk9XCJfb25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJfb25JbnB1dENsaWNrKCRldmVudClcIlxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgID5cbiAgICA8ZGl2ICNfcmFkaW9Db250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy5maWxsXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5sYWJlbENvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9sYWJlbD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBpbnB1dHM6IFtcbiAgICAnY29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gZXh0ZW5kcyBMeVJhZGlvTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGlkID0gYGx5LXJhZGlvLWlkLSR7aWR4Kyt9YDtcbiAgbmFtZSA9ICcnO1xuICBfdmFsdWUgPSBudWxsO1xuICAvLyBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoZWNrZWRDbGFzczogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfcmFkaW9Db250YWluZXInKSBwcml2YXRlIF9yYWRpb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gIC8vICAgaWYgKHRoaXMuX3dpdGhDb2xvciAhPT0gdmFsKSB7XG4gIC8vICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gIC8vICAgICBpZiAodGhpcy5jaGVja2VkQ2xhc3MpIHtcbiAgLy8gICAgICAgLyoqIGNyZWF0ZSBuZXcgY2xhc3MgaWYgZXhpc3QgYHRoaXMuY2hlY2tlZENsYXNzYCAqL1xuICAvLyAgICAgICB0aGlzLmNoZWNrZWRDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHZhbCk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIGdldCB3aXRoQ29sb3IoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgLy8gfVxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3Q2hlY2tlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5fY2hlY2tlZDtcbiAgICBpZiAoYmVmb3JlICE9PSBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICBpZiAoIWJlZm9yZSAmJiBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgLyoqIFVzZSBjdXJyZW50IGNoZWNrZWQgY2xhc3Mgb3IgY3JlYXRlIG5ldyBjbGFzcyAqL1xuICAgICAgICB0aGlzLmNoZWNrZWRDbGFzcyA9IHRoaXMuY2hlY2tlZENsYXNzIHx8IHRoaXMuX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHRoaXMuY29sb3IgfHwgdGhpcy5yYWRpb0dyb3VwLmNvbG9yKTtcbiAgICAgICAgLyoqIEFkZCBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlKSB7XG4gICAgICAgICAgLyoqIHVwZGF0ZSBWYWx1ZSAqL1xuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC51cGRhdGV2YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIFJlbW92ZSBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkgeyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuXG4gIF9zZXRDaGVja2VkVG9GYWxzeSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZVdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseVJhZGlvLWNoZWNrZWQ6JHt2YWx9YCwgdGhlbWUgPT4gKHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yNSknLFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIH0sXG4gICAgICAgICcmIGRpdj46bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmNoZWNrZWRDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xvcikge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZENsYXNzKSB7XG4gICAgICAgIC8qKiBjcmVhdGUgbmV3IGNsYXNzIGlmIGV4aXN0IGB0aGlzLmNoZWNrZWRDbGFzc2AgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZVdpdGhDb2xvcihjaGFuZ2VzLmNvbG9yLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgLy8gQ29weSBuYW1lIGZyb20gcGFyZW50IHJhZGlvIGdyb3VwXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmFkaW9Hcm91cC5jbGFzc2VzLmNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JhZGlvQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlc1xuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWY7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxMDBcbiAgICB9O1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCByYWRpb0dyb3VwLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5yYWRpb0J1dHRvbik7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJMeVRoZW1lMiIsIlNUWUxFX1BSSU9SSVRZIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwic3R5bGVzIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTmdab25lIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsIm1peGluRGlzYWJsZVJpcHBsZSIsIm1peGluQ29sb3IiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRvQm9vbGVhbiIsIk9wdGlvbmFsIiwiTHlDb3JlU3R5bGVzIiwiVmlld0NoaWxkIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7O1FBRW5CLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osT0FBTyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDWCxPQUFPLEVBQUUsY0FBYztTQUN4QjtLQUNGLENBQUM7QUFFRjtRQUtFLHdCQUNVLEtBQWU7WUFBZixVQUFLLEdBQUwsS0FBSyxDQUFVO1lBRnpCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FHdEQ7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