import { Injectable, Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2, defineInjectable, inject } from '@angular/core';
import { LyTheme2, toBoolean, LyCoreStyles, LyCommonModule } from '@alyle/ui';
import { LyRippleModule, LyRippleService, Ripple } from '@alyle/ui/ripple';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    labelContent: {
        padding: '0 0.5em'
    }
});
class LyRadioService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyRadioStatic', STYLE_PRIORITY);
    }
}
LyRadioService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyRadioService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyRadioService.ngInjectableDef = defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(inject(LyTheme2)); }, token: LyRadioService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY$1 = -2;
/** @type {?} */
const LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyRadioGroup),
    multi: true
};
/** @type {?} */
let idx = 0;
class UndefinedValue {
    constructor() { }
}
/** @type {?} */
const styles$1 = theme => ({
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
class LyRadioGroup {
    /**
     * @param {?} _radioService
     * @param {?} elementRef
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} ngZone
     * @param {?} cd
     */
    constructor(_radioService, elementRef, _renderer, theme, ngZone, cd) {
        this._radioService = _radioService;
        this.theme = theme;
        this.ngZone = ngZone;
        this.cd = cd;
        this._value = new UndefinedValue;
        this.name = `ly-radio-name-${idx++}`;
        this._color = 'accent';
        this.classes = this.theme.addStyleSheet(styles$1, 'lyRadio', STYLE_PRIORITY$1);
        this.change = new EventEmitter();
        this.withColor = 'accent';
        /**
         * The method to be called in order to update ngModel
         */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        this.onTouched = () => { };
        _renderer.addClass(elementRef.nativeElement, this._radioService.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (this._value !== val) {
            // this._value = val;
            if (this._radios) {
                this._updateCheckFromValue(val);
            }
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!!this._radios) {
            this.value = value;
            this.markForCheck();
        }
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    setDisabledState(isDisabled) {
        // this.disabled = isDisabled;
        this.markForCheck();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _updateCheckFromValue(val) {
        /** @type {?} */
        let newChecked;
        this._radios.forEach(radioButton => {
            if (val === radioButton.value) {
                this.updatevalue(val);
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updatevalue(value) {
        this._value = value;
        this._controlValueAccessorChangeFn(value);
        this.change.emit();
        this.markForCheck();
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _radioResetChecked() {
        this._radios.forEach(_ => _._setCheckedToFalsy());
    }
}
LyRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'ly-radio-group',
                template: `<ng-content></ng-content>`,
                providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                exportAs: 'lyRadioGroup'
            },] },
];
/** @nocollapse */
LyRadioGroup.ctorParameters = () => [
    { type: LyRadioService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
LyRadioGroup.propDecorators = {
    value: [{ type: Input }],
    change: [{ type: Output }],
    withColor: [{ type: Input }],
    _radios: [{ type: ContentChildren, args: [forwardRef(() => LyRadio),] }]
};
class LyRadio {
    /**
     * @param {?} radioGroup
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} coreStyles
     * @param {?} _rippleService
     */
    constructor(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, coreStyles, _rippleService) {
        this.radioGroup = radioGroup;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.theme = theme;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.coreStyles = coreStyles;
        this._rippleService = _rippleService;
        this.id = `ly-radio-id-${idx++}`;
        this.name = '';
        this._value = null;
        this._checked = false;
        this.change = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set withColor(val) {
        if (this._withColor !== val) {
            this._withColor = val;
            if (this.checkedClass) {
                /** create new class if exist `this.checkedClass` */
                this.checkedClass = this._createStyleWithColor(val);
            }
        }
    }
    /**
     * @return {?}
     */
    get withColor() {
        return this._withColor;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (this._value !== val) {
            this._value = val;
        }
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        /** @type {?} */
        const newCheckedState = toBoolean(val);
        /** @type {?} */
        const before = this._checked;
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
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @return {?}
     */
    get inputId() {
        return `${this.id}-input`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputChange(event) {
        event.stopPropagation();
        this.radioGroup._updateCheckFromValue(this.value);
        // this.radioGroup._radioResetChecked();
        // this.checked = true;
        this.radioGroup._touch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) { event.stopPropagation(); }
    /**
     * @return {?}
     */
    _setCheckedToFalsy() {
        this.checked = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createStyleWithColor(val) {
        return this.theme.addStyle(`lyRadio-checked:${val}`, theme => ({
            color: theme.colorOf(val),
            '& div>:nth-child(1)': {
                transform: 'scale(1.25)',
                color: theme.colorOf(val),
            },
            '& div>:nth-child(2)': {
                transform: 'scale(0.8)'
            },
        }), this._radioContainer.nativeElement, this.checkedClass, STYLE_PRIORITY$1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.radioGroup) {
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
            this._renderer.addClass(this._radioContainer.nativeElement, this.radioGroup.classes.container);
        }
        this._ripple = new Ripple(this.theme.config, this.ngZone, this._rippleService.classes, this._radioContainer.nativeElement, this._elementRef.nativeElement);
        this._ripple.setConfig({
            centered: true,
            radius: 'containerSize'
        });
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._ripple.removeEvents();
    }
}
LyRadio.decorators = [
    { type: Component, args: [{
                selector: 'ly-radio',
                // styleUrls: ['radio.scss'],
                template: `
  <label #_labelContainer [attr.for]="inputId" [className]="radioGroup.classes.label">
    <input
      [className]="coreStyles.classes.visuallyHidden"
      [id]="inputId"
      [checked]="checked"
      [name]="name"
      (change)="_onInputChange($event)"
      (click)="_onInputClick($event)"
      type="radio"
      >
    <div #_radioContainer>
      <div>
        <div [className]="coreStyles.classes.fill"></div>
        <div [className]="coreStyles.classes.fill"></div>
      </div>
    </div>
    <div
    [className]="radioGroup._radioService.classes.labelContent">
      <ng-content></ng-content>
    </div>
  </label>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
LyRadio.ctorParameters = () => [
    { type: LyRadioGroup, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: LyCoreStyles },
    { type: LyRippleService }
];
LyRadio.propDecorators = {
    _radioContainer: [{ type: ViewChild, args: ['_radioContainer',] }],
    _labelContainer: [{ type: ViewChild, args: ['_labelContainer',] }],
    withColor: [{ type: Input }],
    change: [{ type: Output }],
    value: [{ type: Input }],
    checked: [{ type: Input }]
};
class LyRadioModule {
}
LyRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyRippleModule, LyCommonModule],
                exports: [LyRadioGroup, LyRadio],
                declarations: [LyRadioGroup, LyRadio],
            },] },
];

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

export { LyRadioService, LY_RADIO_CONTROL_VALUE_ACCESSOR, UndefinedValue, LyRadioGroup, LyRadio, LyRadioModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmFkaW8uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9yYWRpby9yYWRpby5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmFkaW8vcmFkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcbiAgbGFiZWxDb250ZW50OiB7XG4gICAgcGFkZGluZzogJzAgMC41ZW0nXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlSYWRpb1N0YXRpYycsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9wdGlvbmFsLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBOZ1pvbmUsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUsIEx5UmlwcGxlU2VydmljZSwgUmlwcGxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBMeUNvcmVTdHlsZXMsIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVJhZGlvU2VydmljZSB9IGZyb20gJy4vcmFkaW8uc2VydmljZSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBjb25zdCBMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvR3JvdXApLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IGlkeCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVbmRlZmluZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGxhYmVsOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJ2NhbGMoMWVtICogMyknLFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgICcmPmRpdiAqJzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBib3JkZXI6ICdzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IHRoZW1lLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGVcbiAgICB9XG4gIH1cbn0pO1xuLy8gY29uc29sZS5sb2coJ21vZHVsZS5pZCcsIG1vZHVsZS5pZCk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0xZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlSYWRpb0dyb3VwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF92YWx1ZSA9IG5ldyBVbmRlZmluZWRWYWx1ZTtcbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcbiAgX2NvbG9yID0gJ2FjY2VudCc7XG5cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseVJhZGlvJywgU1RZTEVfUFJJT1JJVFkpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAvLyB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKSB3aXRoQ29sb3IgPSAnYWNjZW50JztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW8pKSBfcmFkaW9zOiBRdWVyeUxpc3Q8THlSYWRpbz47XG5cbiAgLyoqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIGluIG9yZGVyIHRvIHVwZGF0ZSBuZ01vZGVsICovXG4gIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBNYXJrIHRoaXMgZ3JvdXAgYXMgYmVpbmcgXCJ0b3VjaGVkXCIgKGZvciBuZ01vZGVsKS4gTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBjb250YWluZWRcbiAgICogcmFkaW8gYnV0dG9ucyB1cG9uIHRoZWlyIGJsdXIuXG4gICAqL1xuICBfdG91Y2goKSB7XG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICghIXRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGVsIHZhbHVlIGNoYW5nZXMuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gSW1wbGVtZW50ZWQgYXMgYSBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBXaGV0aGVyIHRoZSBjb250cm9sIHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3JhZGlvU2VydmljZTogTHlSYWRpb1NlcnZpY2UsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIF91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWw6IGFueSkge1xuICAgIGxldCBuZXdDaGVja2VkOiBib29sZWFuO1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHJhZGlvQnV0dG9uLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRldmFsdWUodmFsKTtcbiAgICAgICAgbmV3Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIW5ld0NoZWNrZWQpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpbycsXG4gIC8vIHN0eWxlVXJsczogWydyYWRpby5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxsYWJlbCAjX2xhYmVsQ29udGFpbmVyIFthdHRyLmZvcl09XCJpbnB1dElkXCIgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLmNsYXNzZXMubGFiZWxcIj5cbiAgICA8aW5wdXRcbiAgICAgIFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLnZpc3VhbGx5SGlkZGVuXCJcbiAgICAgIFtpZF09XCJpbnB1dElkXCJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAoY2hhbmdlKT1cIl9vbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIl9vbklucHV0Q2xpY2soJGV2ZW50KVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgPlxuICAgIDxkaXYgI19yYWRpb0NvbnRhaW5lcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgW2NsYXNzTmFtZV09XCJjb3JlU3R5bGVzLmNsYXNzZXMuZmlsbFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICBbY2xhc3NOYW1lXT1cInJhZGlvR3JvdXAuX3JhZGlvU2VydmljZS5jbGFzc2VzLmxhYmVsQ29udGVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2xhYmVsPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpbyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWQgPSBgbHktcmFkaW8taWQtJHtpZHgrK31gO1xuICBuYW1lID0gJyc7XG4gIF92YWx1ZSA9IG51bGw7XG4gIHByaXZhdGUgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGU6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoZWNrZWRDbGFzczogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfcmFkaW9Db250YWluZXInKSBwcml2YXRlIF9yYWRpb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX3dpdGhDb2xvciAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICBpZiAodGhpcy5jaGVja2VkQ2xhc3MpIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBuZXcgY2xhc3MgaWYgZXhpc3QgYHRoaXMuY2hlY2tlZENsYXNzYCAqL1xuICAgICAgICB0aGlzLmNoZWNrZWRDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3Q2hlY2tlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5fY2hlY2tlZDtcbiAgICBpZiAoYmVmb3JlICE9PSBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICBpZiAoIWJlZm9yZSAmJiBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgLyoqIFVzZSBjdXJyZW50IGNoZWNrZWQgY2xhc3Mgb3IgY3JlYXRlIG5ldyBjbGFzcyAqL1xuICAgICAgICB0aGlzLmNoZWNrZWRDbGFzcyA9IHRoaXMuY2hlY2tlZENsYXNzIHx8IHRoaXMuX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHRoaXMud2l0aENvbG9yIHx8IHRoaXMucmFkaW9Hcm91cC53aXRoQ29sb3IpO1xuICAgICAgICAvKiogQWRkIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jaGVja2VkQ2xhc3MpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLnJhZGlvR3JvdXAudmFsdWUpIHtcbiAgICAgICAgICAvKiogdXBkYXRlIFZhbHVlICovXG4gICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnVwZGF0ZXZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogUmVtb3ZlIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jaGVja2VkQ2xhc3MpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIGdldCBpbnB1dElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR9LWlucHV0YDtcbiAgfVxuXG4gIF9vbklucHV0Q2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIC8vIHRoaXMucmFkaW9Hcm91cC5fcmFkaW9SZXNldENoZWNrZWQoKTtcbiAgICAvLyB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdG91Y2goKTtcbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG5cbiAgX3NldENoZWNrZWRUb0ZhbHN5KCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlSYWRpby1jaGVja2VkOiR7dmFsfWAsIHRoZW1lID0+ICh7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgICcmIGRpdj46bnRoLWNoaWxkKDEpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMjUpJyxcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICB9LFxuICAgICAgICAnJiBkaXY+Om50aC1jaGlsZCgyKSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5jaGVja2VkQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5yYWRpb0dyb3VwLmNsYXNzZXMuY29udGFpbmVyKTtcbiAgICB9XG4gICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLnRoZW1lLmNvbmZpZywgdGhpcy5uZ1pvbmUsIHRoaXMuX3JpcHBsZVNlcnZpY2UuY2xhc3NlcywgdGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9yaXBwbGUuc2V0Q29uZmlnKHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZSdcbiAgICB9KTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJhZGlvR3JvdXA6IEx5UmFkaW9Hcm91cCxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBjb3JlU3R5bGVzOiBMeUNvcmVTdHlsZXMsXG4gICAgcHJpdmF0ZSBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlXG4gICkgeyB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSYWRpb0dyb3VwLCBMeVJhZGlvXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSYWRpb0dyb3VwLCBMeVJhZGlvXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJTVFlMRV9QUklPUklUWSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBR0EsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLE1BQU0sTUFBTSxJQUFJO0lBQ2QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELFlBQVksRUFB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