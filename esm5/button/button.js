/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
var /** @type {?} */ DEFAULT_SIZE = 'medium';
var ɵ0 = function (theme) {
    return ("padding:0 8px;" +
        ("font-size:" + theme.pxToRem(theme.typography.button.fontSize - 1) + ";") +
        "min-height: 32px;" +
        "min-width: 64px;");
}, ɵ1 = function (theme) {
    return ("padding:0 14px;" +
        "min-height: 36px;" +
        "min-width: 88px;");
}, ɵ2 = function (theme) {
    return ("padding:0 21px;" +
        ("font-size:" + theme.pxToRem(theme.typography.button.fontSize + 1) + ";") +
        "min-height: 40px;" +
        "min-width: 112px;");
};
var /** @type {?} */ Size = {
    small: ɵ0,
    medium: ɵ1,
    large: ɵ2,
};
var LyButton = /** @class */ (function () {
    function LyButton(elementRef, renderer, theme, rippleStyles, _ngZone, bgAndColor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this.rippleStyles = rippleStyles;
        this.bgAndColor = bgAndColor;
        this._disabled = false;
        this._rippleSensitive = false;
        this.classes = this.theme.addStyleSheet(styles, 'lyButton');
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
            var /** @type {?} */ classname = toBoolean(val) === true ? this.classes.outlined : '';
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
    Object.defineProperty(LyButton.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.size) {
                this._size = val;
                this._sizeClass = this.theme.addStyle("k-button-size:" + this.size, Size[this.size], this.elementRef.nativeElement, this._sizeClass);
            }
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
            this._disabled = toBoolean(value);
            if (this._disabled) {
                var /** @type {?} */ key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
                this._disabledClassName = this.theme.addStyle("btn" + key, this.disableStyle.bind(this), this.elementRef.nativeElement, this._disabledClassName);
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
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
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
                    template: "\n  <span [className]=\"classes.content\">\n    <ng-content></ng-content>\n  </span>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyTheme2, },
        { type: LyRippleService, },
        { type: NgZone, },
        { type: LyCommon, decorators: [{ type: Optional },] },
    ]; };
    LyButton.propDecorators = {
        "outlined": [{ type: Input },],
        "rippleSensitive": [{ type: Input, args: ['sensitive',] },],
        "size": [{ type: Input },],
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
    LyButton.prototype.classes;
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
    LyButton.prototype._size;
    /** @type {?} */
    LyButton.prototype._sizeClass;
    /** @type {?} */
    LyButton.prototype.elementRef;
    /** @type {?} */
    LyButton.prototype.renderer;
    /** @type {?} */
    LyButton.prototype.theme;
    /** @type {?} */
    LyButton.prototype.rippleStyles;
    /** @type {?} */
    LyButton.prototype.bgAndColor;
}
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUVULE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDVCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxxQkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO1NBRXJCLFVBQUEsS0FBSztJQUFJLE9BQUEsQ0FDZCxnQkFBZ0I7U0FDaEIsZUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBRyxDQUFBO1FBQ25FLG1CQUFtQjtRQUNuQixrQkFBa0IsQ0FDbkI7QUFMZSxDQUtmLE9BQ08sVUFBQSxLQUFLO0lBQUksT0FBQSxDQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCLENBQ25CO0FBSmdCLENBSWhCLE9BQ00sVUFBQSxLQUFLO0lBQUksT0FBQSxDQUNkLGlCQUFpQjtTQUNqQixlQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFHLENBQUE7UUFDbkUsbUJBQW1CO1FBQ25CLG1CQUFtQixDQUNwQjtBQUxlLENBS2Y7QUFqQkgscUJBQU0sSUFBSSxHQUFHO0lBQ1gsS0FBSyxJQUtKO0lBQ0Qs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YUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWhEQyxVQUFVO2dCQUdWLFNBQVM7Z0JBVVQsUUFBUTtnQkFHTyxlQUFlO2dCQVg5QixNQUFNO2dCQVNOLFFBQVEsdUJBb0dMLFFBQVE7Ozs2QkFuRFYsS0FBSztvQ0FPTCxLQUFLLFNBQUMsV0FBVzt5QkFRakIsS0FBSzs2QkFnQkwsS0FBSzs7bUJBbEdSOztTQXFEYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlDb21tb25cbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2J1dHRvbi5zdHlsZSc7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IFNpemUgPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCA4cHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDMycHg7YCArXG4gICAgYG1pbi13aWR0aDogNjRweDtgXG4gICksXG4gIG1lZGl1bTogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgMTRweDtgICtcbiAgICBgbWluLWhlaWdodDogMzZweDtgICtcbiAgICBgbWluLXdpZHRoOiA4OHB4O2BcbiAgKSxcbiAgbGFyZ2U6IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDIxcHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDQwcHg7YCArXG4gICAgYG1pbi13aWR0aDogMTEycHg7YFxuICApLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xhc3Nlczoge1xuICAgIHJvb3Q6IHN0cmluZyxcbiAgICBvdXRsaW5lZDogc3RyaW5nLFxuICAgIGNvbnRlbnQ6IHN0cmluZ1xuICB9O1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdG9Cb29sZWFuKHZhbCkgPT09IHRydWUgPyB0aGlzLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIH1cblxuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstYnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemVdLFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpID8gJ3InIDogJ2YnO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBidG4ke2tleX1gLCB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlCdXR0b24nKTtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKF9uZ1pvbmUsIHJpcHBsZVN0eWxlcy5zdHlsZXNEYXRhLCBlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTdHlsZSgpIHtcbiAgICBsZXQgc3R5bGUgPVxuICAgIGBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7YCArXG4gICAgYGN1cnNvcjogZGVmYXVsdDtgICtcbiAgICBgY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kaXNhYmxlZH0gIWltcG9ydGFudDtgICtcbiAgICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YDtcbiAgICBpZiAodGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykpIHtcbiAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLmJ1dHRvbi5kaXNhYmxlZH0gIWltcG9ydGFudDtgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==