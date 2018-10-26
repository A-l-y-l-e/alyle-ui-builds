/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Optional, Self, Input, HostListener, HostBinding, Renderer2 } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { toBoolean } from '@alyle/ui';
import { Subject } from 'rxjs';
/** *
 * @ignore
  @type {?} */
var ATTR_PLACEHOLDER = 'placeholder';
var LyInputNative = /** @class */ (function () {
    function LyInputNative(_el, _renderer, /** @ignore */
    ngControl, _parentForm, _parentFormGroup) {
        this._el = _el;
        this._renderer = _renderer;
        this.ngControl = ngControl;
        this._disabled = false;
        this._required = false;
        this.stateChanges = new Subject();
        this.focused = false;
        this._hostElement = this._el.nativeElement;
    }
    /**
     * @return {?}
     */
    LyInputNative.prototype._onInput = /**
     * @return {?}
     */
    function () {
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    LyInputNative.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        if (this.focused !== false) {
            this.focused = false;
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    LyInputNative.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (this.focused !== true) {
            this.focused = true;
            this.stateChanges.next();
        }
    };
    Object.defineProperty(LyInputNative.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hostElement.value;
        },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.value) {
                this._hostElement.value = val;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInputNative.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        /** Whether the input is disabled. */
        set: /**
         * Whether the input is disabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInputNative.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInputNative.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._placeholder = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyInputNative.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.setAttribute(this._hostElement, ATTR_PLACEHOLDER, '­');
    };
    /**
     * @return {?}
     */
    LyInputNative.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    LyInputNative.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () { this._hostElement.focus(); };
    LyInputNative.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > input, ly-field > textarea',
                    exportAs: 'lyInput'
                },] }
    ];
    /** @nocollapse */
    LyInputNative.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
    LyInputNative.propDecorators = {
        _onInput: [{ type: HostListener, args: ['input',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }],
        _onFocus: [{ type: HostListener, args: ['focus',] }],
        value: [{ type: Input }],
        disabled: [{ type: HostBinding }, { type: Input }],
        required: [{ type: HostBinding }, { type: Input }],
        placeholder: [{ type: Input }]
    };
    return LyInputNative;
}());
export { LyInputNative };
if (false) {
    /**
     * @ignore
     * @type {?}
     */
    LyInputNative.prototype._hostElement;
    /** @type {?} */
    LyInputNative.prototype._disabled;
    /** @type {?} */
    LyInputNative.prototype._required;
    /** @type {?} */
    LyInputNative.prototype._placeholder;
    /** @type {?} */
    LyInputNative.prototype.stateChanges;
    /** @type {?} */
    LyInputNative.prototype.focused;
    /** @type {?} */
    LyInputNative.prototype._el;
    /** @type {?} */
    LyInputNative.prototype._renderer;
    /**
     * @ignore
     * @type {?}
     */
    LyInputNative.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBVSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHL0IsSUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7O0lBc0VyQyx1QkFDVSxLQUNBO0lBRW1CLFNBQW9CLEVBQ25DLFdBQW1CLEVBQ25CLGdCQUFvQztRQUx4QyxRQUFHLEdBQUgsR0FBRztRQUNILGNBQVMsR0FBVCxTQUFTO1FBRVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWpFakQsaUJBQXNCLEtBQUssQ0FBQztRQUM1QixpQkFBc0IsS0FBSyxDQUFDO1FBRTVCLG9CQUF1QyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzNELGVBQW1CLEtBQUssQ0FBQztRQWlFdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUM1Qzs7OztJQWhFc0IsZ0NBQVE7OztJQUEvQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFcUIsK0JBQU87OztJQUE3QjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7O0lBQ3NCLGdDQUFROzs7SUFBL0I7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7S0FDRjtJQUdELHNCQUNJLGdDQUFLOzs7O1FBTVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ2hDO1FBVkQsY0FBYzs7Ozs7O1FBQ2QsVUFDVSxHQUFHO1lBQ1gsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCO1NBQ0Y7OztPQUFBO0lBTUQsc0JBRUksbUNBQVE7Ozs7UUFHWjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7UUFYRCxxQ0FBcUM7Ozs7OztRQUNyQyxVQUVhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBO0lBUUQsc0JBRUksbUNBQVE7Ozs7UUFHWixjQUEwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7UUFMbEQsVUFFYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQUdELHNCQUNJLHNDQUFXOzs7O1FBR2YsY0FBNEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7O1FBSnZELFVBQ2dCLEdBQVc7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7U0FDekI7OztPQUFBOzs7O0lBY0QsZ0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN2RTs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7SUFFRCx5QkFBeUI7Ozs7O0lBQ3pCLDZCQUFLOzs7O0lBQUwsY0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFOztnQkF4RjdDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUNBQXVDO29CQUNqRCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBWG1CLFVBQVU7Z0JBQTRELFNBQVM7Z0JBQzFGLFNBQVMsdUJBK0ViLFFBQVEsWUFBSSxJQUFJO2dCQS9FRCxNQUFNLHVCQWdGckIsUUFBUTtnQkFoRmUsa0JBQWtCLHVCQWlGekMsUUFBUTs7OzJCQTdEVixZQUFZLFNBQUMsT0FBTzswQkFJcEIsWUFBWSxTQUFDLE1BQU07MkJBTW5CLFlBQVksU0FBQyxPQUFPO3dCQVFwQixLQUFLOzJCQVlMLFdBQVcsWUFDWCxLQUFLOzJCQVdMLFdBQVcsWUFDWCxLQUFLOzhCQU1MLEtBQUs7O3dCQXRFUjs7U0FZYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPcHRpb25hbCwgU2VsZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgQVRUUl9QTEFDRUhPTERFUiA9ICdwbGFjZWhvbGRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gaW5wdXQsIGx5LWZpZWxkID4gdGV4dGFyZWEnLFxuICBleHBvcnRBczogJ2x5SW5wdXQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXROYXRpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAaWdub3JlICovXG4gIF9ob3N0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIF9vbklucHV0KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9ob3N0RWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0RWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gIH1cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIC8qKiBAaWdub3JlICovXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmVcbiAgKSB7XG4gICAgdGhpcy5faG9zdEVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2hvc3RFbGVtZW50LCBBVFRSX1BMQUNFSE9MREVSLCAnwq0nKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9ob3N0RWxlbWVudC5mb2N1cygpOyB9XG5cbn1cbiJdfQ==