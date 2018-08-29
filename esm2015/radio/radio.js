/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LyRippleModule, LyRippleService, Ripple } from '@alyle/ui/ripple';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean } from '@alyle/ui';
import { LyRadioService } from './radio.service';
/** @type {?} */
export const LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyRadioGroup),
    multi: true
};
/** @type {?} */
let idx = 0;
export class UndefinedValue {
    constructor() { }
}
/** @type {?} */
const styles = theme => ({
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
const ɵ0 = styles;
export class LyRadioGroup {
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
        this.classes = this.theme.addStyleSheet(styles, 'lyRadio', -1);
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
if (false) {
    /** @type {?} */
    LyRadioGroup.prototype._value;
    /** @type {?} */
    LyRadioGroup.prototype.name;
    /** @type {?} */
    LyRadioGroup.prototype._color;
    /** @type {?} */
    LyRadioGroup.prototype.classes;
    /** @type {?} */
    LyRadioGroup.prototype.change;
    /** @type {?} */
    LyRadioGroup.prototype.withColor;
    /** @type {?} */
    LyRadioGroup.prototype._radios;
    /**
     * The method to be called in order to update ngModel
     * @type {?}
     */
    LyRadioGroup.prototype._controlValueAccessorChangeFn;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * \@docs-private
     * @type {?}
     */
    LyRadioGroup.prototype.onTouched;
    /** @type {?} */
    LyRadioGroup.prototype._radioService;
    /** @type {?} */
    LyRadioGroup.prototype.theme;
    /** @type {?} */
    LyRadioGroup.prototype.ngZone;
    /** @type {?} */
    LyRadioGroup.prototype.cd;
}
export class LyRadio {
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
        }), this._radioContainer.nativeElement, this.checkedClass);
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
        this._rippleContainer = new Ripple(this.ngZone, this._rippleService.classes, this._radioContainer.nativeElement, this._elementRef.nativeElement);
        this._rippleContainer.setConfig({
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
        this._rippleContainer.removeEvents();
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
if (false) {
    /** @type {?} */
    LyRadio.prototype.id;
    /** @type {?} */
    LyRadio.prototype.name;
    /** @type {?} */
    LyRadio.prototype._value;
    /** @type {?} */
    LyRadio.prototype._withColor;
    /** @type {?} */
    LyRadio.prototype._rippleContainer;
    /** @type {?} */
    LyRadio.prototype._checked;
    /** @type {?} */
    LyRadio.prototype.checkedClass;
    /** @type {?} */
    LyRadio.prototype._radioContainer;
    /** @type {?} */
    LyRadio.prototype._labelContainer;
    /** @type {?} */
    LyRadio.prototype.change;
    /** @type {?} */
    LyRadio.prototype.radioGroup;
    /** @type {?} */
    LyRadio.prototype._elementRef;
    /** @type {?} */
    LyRadio.prototype._renderer;
    /** @type {?} */
    LyRadio.prototype.theme;
    /** @type {?} */
    LyRadio.prototype.changeDetectorRef;
    /** @type {?} */
    LyRadio.prototype.ngZone;
    /** @type {?} */
    LyRadio.prototype.coreStyles;
    /** @type {?} */
    LyRadio.prototype._rippleService;
}
export class LyRadioModule {
}
LyRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyRippleModule, LyCommonModule],
                exports: [LyRadioGroup, LyRadio],
                declarations: [LyRadioGroup, LyRadio],
            },] },
];
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBR2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNFLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUNqRCxhQUFhLCtCQUErQixHQUFRO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOztBQUVGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUVaLE1BQU07SUFDSixpQkFBaUI7Q0FDbEI7O0FBRUQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9B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YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSwgTHlSaXBwbGVTZXJ2aWNlLCBSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIEx5Q29yZVN0eWxlcywgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmFkaW9TZXJ2aWNlIH0gZnJvbSAnLi9yYWRpby5zZXJ2aWNlJztcbmV4cG9ydCBjb25zdCBMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvR3JvdXApLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IGlkeCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVbmRlZmluZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGxhYmVsOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJ2NhbGMoMWVtICogMyknLFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgICcmPmRpdiAqJzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBib3JkZXI6ICdzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IHRoZW1lLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGVcbiAgICB9XG4gIH1cbn0pO1xuLy8gY29uc29sZS5sb2coJ21vZHVsZS5pZCcsIG1vZHVsZS5pZCk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0xZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlSYWRpb0dyb3VwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF92YWx1ZSA9IG5ldyBVbmRlZmluZWRWYWx1ZTtcbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcbiAgX2NvbG9yID0gJ2FjY2VudCc7XG5cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseVJhZGlvJywgLTEpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAvLyB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKSB3aXRoQ29sb3IgPSAnYWNjZW50JztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW8pKSBfcmFkaW9zOiBRdWVyeUxpc3Q8THlSYWRpbz47XG5cbiAgLyoqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIGluIG9yZGVyIHRvIHVwZGF0ZSBuZ01vZGVsICovXG4gIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBNYXJrIHRoaXMgZ3JvdXAgYXMgYmVpbmcgXCJ0b3VjaGVkXCIgKGZvciBuZ01vZGVsKS4gTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBjb250YWluZWRcbiAgICogcmFkaW8gYnV0dG9ucyB1cG9uIHRoZWlyIGJsdXIuXG4gICAqL1xuICBfdG91Y2goKSB7XG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICghIXRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGVsIHZhbHVlIGNoYW5nZXMuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gSW1wbGVtZW50ZWQgYXMgYSBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBXaGV0aGVyIHRoZSBjb250cm9sIHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3JhZGlvU2VydmljZTogTHlSYWRpb1NlcnZpY2UsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIF91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWw6IGFueSkge1xuICAgIGxldCBuZXdDaGVja2VkOiBib29sZWFuO1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHJhZGlvQnV0dG9uLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRldmFsdWUodmFsKTtcbiAgICAgICAgbmV3Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIW5ld0NoZWNrZWQpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpbycsXG4gIC8vIHN0eWxlVXJsczogWydyYWRpby5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxsYWJlbCAjX2xhYmVsQ29udGFpbmVyIFthdHRyLmZvcl09XCJpbnB1dElkXCIgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLmNsYXNzZXMubGFiZWxcIj5cbiAgICA8aW5wdXRcbiAgICAgIFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLnZpc3VhbGx5SGlkZGVuXCJcbiAgICAgIFtpZF09XCJpbnB1dElkXCJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAoY2hhbmdlKT1cIl9vbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIl9vbklucHV0Q2xpY2soJGV2ZW50KVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgPlxuICAgIDxkaXYgI19yYWRpb0NvbnRhaW5lcj5cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgW2NsYXNzTmFtZV09XCJjb3JlU3R5bGVzLmNsYXNzZXMuZmlsbFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMubGFiZWxDb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvbGFiZWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpZCA9IGBseS1yYWRpby1pZC0ke2lkeCsrfWA7XG4gIG5hbWUgPSAnJztcbiAgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hlY2tlZENsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicpIHByaXZhdGUgX3JhZGlvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fd2l0aENvbG9yICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWRDbGFzcykge1xuICAgICAgICAvKiogY3JlYXRlIG5ldyBjbGFzcyBpZiBleGlzdCBgdGhpcy5jaGVja2VkQ2xhc3NgICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogVXNlIGN1cnJlbnQgY2hlY2tlZCBjbGFzcyBvciBjcmVhdGUgbmV3IGNsYXNzICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5jaGVja2VkQ2xhc3MgfHwgdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodGhpcy53aXRoQ29sb3IgfHwgdGhpcy5yYWRpb0dyb3VwLndpdGhDb2xvcik7XG4gICAgICAgIC8qKiBBZGQgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgX29uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgLy8gdGhpcy5yYWRpb0dyb3VwLl9yYWRpb1Jlc2V0Q2hlY2tlZCgpO1xuICAgIC8vIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl90b3VjaCgpO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cblxuICBfc2V0Q2hlY2tlZFRvRmFsc3koKSB7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseVJhZGlvLWNoZWNrZWQ6JHt2YWx9YCwgdGhlbWUgPT4gKHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yNSknLFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIH0sXG4gICAgICAgICcmIGRpdj46bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmNoZWNrZWRDbGFzc1xuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5yYWRpb0dyb3VwLmNsYXNzZXMuY29udGFpbmVyKTtcbiAgICB9XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLm5nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5zZXRDb25maWcoe1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJ1xuICAgIH0pO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlcyxcbiAgICBwcml2YXRlIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2VcbiAgKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl19