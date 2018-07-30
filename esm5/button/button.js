/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, ViewChild, NgZone, ViewEncapsulation } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyBgColorAndRaised } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { LyButtonService } from './button.service';
var LyButton = /** @class */ (function () {
    function LyButton(elementRef, renderer, theme, rippleStyles, buttonService, _ngZone, bgAndColor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this.rippleStyles = rippleStyles;
        this.buttonService = buttonService;
        this.bgAndColor = bgAndColor;
        this._disabled = false;
        this._rippleSensitive = false;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
        if (Platform.isBrowser) {
            var /** @type {?} */ el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleStyles.stylesData, el);
        }
    }
    Object.defineProperty(LyButton.prototype, "outlined", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ classname = toBoolean(val) === true ? this.buttonService.classes.outlined : '';
            this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, classname, this._outlinedClassName);
            this._outlinedClassName = classname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rippleSensitive;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._rippleSensitive = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
            this._disabledClassName = this.theme.setUpStyle("btn" + key, { '': this.disableStyle.bind(this) });
            this._disabled = toBoolean(value);
            if (this._disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, this._disabledClassName);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, this._disabledClassName);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.currentConfig);
        this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.root);
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focused = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ classes = this.buttonService.classes;
        (/** @type {?} */ (this.buttonContent.nativeElement)).classList.add(classes.buttonContent);
    };
    /**
     * @return {?}
     */
    LyButton.prototype.disableStyle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ style = "box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;" +
            "cursor: default;" +
            ("color: " + this.theme.config["text"].disabled + " !important;") +
            "pointer-events: none;";
        if (this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg)) {
            style += "background-color: " + this.theme.config["button"].disabled + " !important;";
        }
        return style;
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this._rippleContainer.removeEvents();
        }
    };
    LyButton.decorators = [
        { type: Component, args: [{
                    selector: '[ly-button]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n  <span #content>\n    <ng-content></ng-content>\n  </span>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyTheme2, },
        { type: LyRippleService, },
        { type: LyButtonService, },
        { type: NgZone, },
        { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
    ]; };
    LyButton.propDecorators = {
        "outlined": [{ type: Input },],
        "rippleSensitive": [{ type: Input, args: ['sensitive',] },],
        "buttonContent": [{ type: ViewChild, args: ['content',] },],
        "disabled": [{ type: Input },],
    };
    return LyButton;
}());
export { LyButton };
function LyButton_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyButton.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyButton.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyButton.propDecorators;
    /** @type {?} */
    LyButton.prototype._disabled;
    /** @type {?} */
    LyButton.prototype._rippleSensitive;
    /** @type {?} */
    LyButton.prototype._disabledClassName;
    /** @type {?} */
    LyButton.prototype._outlinedClassName;
    /** @type {?} */
    LyButton.prototype._rippleContainer;
    /** @type {?} */
    LyButton.prototype.buttonContent;
    /** @type {?} */
    LyButton.prototype.elementRef;
    /** @type {?} */
    LyButton.prototype.renderer;
    /** @type {?} */
    LyButton.prototype.theme;
    /** @type {?} */
    LyButton.prototype.rippleStyles;
    /** @type {?} */
    LyButton.prototype.buttonService;
    /** @type {?} */
    LyButton.prototype.bgAndColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbkIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBaURqRCxrQkFDVSxZQUNBLFVBQ0EsT0FDRCxjQUNDLGVBQ1IsT0FBZSxFQUNLO1FBTlosZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLO1FBQ04saUJBQVksR0FBWixZQUFZO1FBQ1gsa0JBQWEsR0FBYixhQUFhO1FBRUQsZUFBVSxHQUFWLFVBQVU7eUJBM0NiLEtBQUs7Z0NBQ0csS0FBSztRQTRDOUIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIscUJBQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0tBQ0Y7MEJBOUNHLDhCQUFROzs7OztrQkFBQyxHQUFZO1lBQ3ZCLHFCQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3RyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDOzs7OzswQkFHbEMscUNBQWU7Ozs7O1lBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7UUFFL0IsVUFBb0IsS0FBYztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7OzBCQUtHLDhCQUFROzs7O1FBVVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O2tCQVpZLEtBQWM7WUFDekIscUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUMxRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBTSxHQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDaEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDbkY7Ozs7Ozs7O0lBd0JILDJCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hGOzs7O0lBRU0sMEJBQU87Ozs7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFHeEMsa0NBQWU7OztJQUFmO1FBQ0UscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3pDLG1CQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBNEIsRUFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQzdELE9BQU8sQ0FBQyxhQUFhLENBQ3RCLENBQUM7S0FDTDs7OztJQUVPLCtCQUFZOzs7O1FBQ2xCLHFCQUFJLEtBQUssR0FDVCxnREFBZ0Q7WUFDaEQsa0JBQWtCO2FBQ2xCLFlBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFNBQU0sUUFBUSxpQkFBYyxDQUFBO1lBQ3ZELHVCQUF1QixDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckUsS0FBSyxJQUFJLHVCQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sV0FBUSxRQUFRLGlCQUFjLENBQUM7U0FDL0U7UUFDRCxPQUFPLEtBQUssQ0FBQzs7Ozs7SUFHZiw4QkFBVzs7O0lBQVg7UUFDRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RDO0tBQ0Y7O2dCQWpHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsbUVBSVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQTVCQyxVQUFVO2dCQUdWLFNBQVM7Z0JBVVQsUUFBUTtnQkFHTyxlQUFlO2dCQUN2QixlQUFlO2dCQVp0QixNQUFNO2dCQVNOLGtCQUFrQix1QkEyRGYsUUFBUTs7OzZCQXRDVixLQUFLO29DQU1MLEtBQUssU0FBQyxXQUFXO2tDQVFqQixTQUFTLFNBQUMsU0FBUzs2QkFFbkIsS0FBSzs7bUJBdkRSOztTQWlDYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlCZ0NvbG9yQW5kUmFpc2VkXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuICNjb250ZW50PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgQElucHV0KClcbiAgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRvQm9vbGVhbih2YWwpID09PSB0cnVlID8gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIH1cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBAVmlld0NoaWxkKCdjb250ZW50JykgYnV0dG9uQ29udGVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSA/ICdyJyA6ICdmJztcbiAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgYnRuJHtrZXl9YCwgeycnOiB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIGJ1dHRvblNlcnZpY2U6IEx5QnV0dG9uU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUJnQ29sb3JBbmRSYWlzZWRcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZShfbmdab25lLCByaXBwbGVTdHlsZXMuc3R5bGVzRGF0YSwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLmN1cnJlbnRDb25maWcpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHVibGljIGZvY3VzZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXM7XG4gICAgICAodGhpcy5idXR0b25Db250ZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGNsYXNzZXMuYnV0dG9uQ29udGVudFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAgIGxldCBzdHlsZSA9XG4gICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIl19