/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { toBoolean } from '../minimal';
import { shadowBuilder } from '../shadow';
var LyCommon = /** @class */ (function () {
    function LyCommon(theme, elementRef) {
        this.theme = theme;
        this.elementRef = elementRef;
    }
    Object.defineProperty(LyCommon.prototype, "raised", {
        get: /**
         * @return {?}
         */
        function () { return this._raised; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._raised = toBoolean(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCommon.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._disabled = toBoolean(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCommon.prototype, "outlined", {
        get: /**
         * @return {?}
         */
        function () { return this._outlined; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._outlined = toBoolean(val); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyCommon.prototype.setAutoContrast = /**
     * @return {?}
     */
    function () {
        this._autoContrast = true;
    };
    /**
     * @return {?}
     */
    LyCommon.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._isContrast = this._autoContrast && !this.color || this.color === 'auto';
        var /** @type {?} */ newKey = "common----:" + (this.bg || DEFAULT_VALUE) + "\u00B7" + (this.color || DEFAULT_VALUE) + "\u00B7" + (this.raised || DEFAULT_VALUE) + "\u00B7" + (this.elevation || DEFAULT_VALUE) + "\u00B7" + (this.disabled || DEFAULT_VALUE) + "\u00B7" + (this.outlined || DEFAULT_VALUE) + "\u00B7" + (this.shadowColor || DEFAULT_VALUE) + "\u00B7" + (this._isContrast || DEFAULT_VALUE);
        this._className = this.theme.addStyle(newKey, function (theme) {
            var /** @type {?} */ style = {};
            if (_this.outlined) {
                style.border = '1px solid currentColor';
            }
            if (_this.disabled) {
                style.color = theme.text.disabled;
                style.pointerEvents = 'none';
                if (_this.bg) {
                    style.background = theme.button.disabled;
                }
            }
            else {
                if (_this.bg) {
                    style.background = _this.theme.colorOf(_this.bg);
                    if (_this._isContrast) {
                        style.color = _this.theme.colorOf(_this.bg + ":contrast");
                    }
                }
                if (!style.color && _this.color) {
                    style.color = _this.theme.colorOf(_this.color);
                }
                if (_this.raised || _this.elevation) {
                    var /** @type {?} */ shadowColor = (_this.shadowColor && _this.theme.colorOf(_this.shadowColor)) || style.background || style.color || theme.colorShadow;
                    if (!_this.bg) {
                        style.background = theme.background.primary;
                    }
                    style.boxShadow = shadowBuilder(_this.elevation || 3, shadowColor);
                    if (!_this.elevation) {
                        style['&:active'] = {
                            boxShadow: shadowBuilder(8, shadowColor)
                        };
                    }
                }
            }
            return /** @type {?} */ (style);
        }, this._getHostElement(), this._className);
        /**~ */
        // const raisedĸey = this.raised === true ? 'raised' : '';
        // let key = '';
        // if ((this.contrast && !this.color || this.color === 'auto') && this.bg) {
        //   key = `bcr-contrast:${this.bg}${raisedĸey}${this.elevation}`;
        //   this._className = this.theme.addStyle(`ly-${key}`, this.contrastStyle.bind(this), this._getHostElement(), this._className);
        // } else if (this.bg && this.color) {
        //   key = `b&ĸ${this.bg}${this.color}${this.raised}${this.elevation}`;
        //   this._className = this.theme.addStyle(`ly-${key}`, this.bgColorStyle.bind(this), this._getHostElement(), this._className);
        // } else if (this.raised && !this.bg) {
        //   key = raisedĸey + this.color || '';
        //   this._className = this.theme.addStyle<any>(`ly-${key}`, theme => {
        //     let styles = `background-color:${theme.background.primary};`;
        //     let color = '';
        //     let colorShadow;
        //     if (this.color) {
        //       color = this.theme.colorOf(this.color);
        //       colorShadow = color;
        //       styles += `color:${color};`;
        //     } else {
        //       colorShadow = theme.colorShadow;
        //     }
        //     if (this._raised) {
        //       styles += shadowBuilderDeprecated(this.elevation, colorShadow);
        //     }
        //     return styles;
        //   }, this._getHostElement(), this._className);
        // } else if (this.bg || this.color) {
        //   const changeKey = this.bg ? ['bg', 'background', this.bg] : ['ĸ', 'color', this.color];
        //   const color = changeKey[2];
        //   key = `${changeKey[0]}${color}${this._raised}${this.elevation}`;
        //   /** Create style */
        //   this._className = this.theme.addStyle(`ly-${key}`, () => {
        //     const _color = this.theme.colorOf(this.bg || this.color);
        //     let styles = `${changeKey[1]}:${_color};`;
        //     if (this._raised) {
        //       styles += shadowBuilderDeprecated(this.elevation, _color);
        //     }
        //     return styles;
        //   }, this._getHostElement(), this._className);
        // } else {
        //   key = `raised${this._raised}elxxxxxxxx${this.elevation}`;
        //   this._className = this.theme.addStyle(`ly-${key}`, () => {
        //     if (this._raised) {
        //       return shadowBuilderDeprecated(this.elevation, this.theme.config.colorShadow);
        //     } else {
        //       return shadowBuilderDeprecated(0, this.theme.config.colorShadow);
        //     }
        //   }, this._getHostElement(), this._className);
        // }
    };
    /**
     * @return {?}
     */
    LyCommon.prototype._getHostElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    LyCommon.decorators = [
        { type: Directive, args: [{
                    selector: "\n            [bg],\n            [color],\n            [raised],\n            [raised][shadowColor],\n            [ly-button][outlined],\n            [elevation],\n            [elevation][shadowColor],\n            [disabled],\n            ly-card\n            "
                },] },
    ];
    /** @nocollapse */
    LyCommon.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
    ]; };
    LyCommon.propDecorators = {
        "bg": [{ type: Input },],
        "color": [{ type: Input },],
        "raised": [{ type: Input },],
        "disabled": [{ type: Input },],
        "outlined": [{ type: Input },],
        "elevation": [{ type: Input },],
        "shadowColor": [{ type: Input },],
    };
    return LyCommon;
}());
export { LyCommon };
function LyCommon_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCommon.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCommon.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCommon.propDecorators;
    /** @type {?} */
    LyCommon.prototype._raised;
    /** @type {?} */
    LyCommon.prototype._outlined;
    /** @type {?} */
    LyCommon.prototype._disabled;
    /** @type {?} */
    LyCommon.prototype._className;
    /** @type {?} */
    LyCommon.prototype._autoContrast;
    /** @type {?} */
    LyCommon.prototype._isContrast;
    /** @type {?} */
    LyCommon.prototype.bg;
    /** @type {?} */
    LyCommon.prototype.color;
    /** @type {?} */
    LyCommon.prototype.elevation;
    /** @type {?} */
    LyCommon.prototype.shadowColor;
    /** @type {?} */
    LyCommon.prototype.theme;
    /** @type {?} */
    LyCommon.prototype.elementRef;
}
var /** @type {?} */ DEFAULT_VALUE = '';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFzQ3hDLGtCQUNVLE9BQ0E7UUFEQSxVQUFLLEdBQUwsS0FBSztRQUNMLGVBQVUsR0FBVixVQUFVO0tBQ2hCOzBCQWRTLDRCQUFNOzs7O1FBQ25CLGNBQWUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7O2tCQURqQixHQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7MEJBR3JELDhCQUFROzs7O1FBQ3JCLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztrQkFEbkIsR0FBWSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OzBCQUd6RCw4QkFBUTs7OztRQUNyQixjQUFpQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7a0JBRG5CLEdBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7OztJQVUvRCxrQ0FBZTs7OztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7Ozs7SUFHNUIsOEJBQVc7OztJQUFYO1FBQUEsaUJBK0dDO1FBOUdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFEN0M7Ozs7SUFxQk8sa0NBQWU7Ozs7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs7O2dCQWxMeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1UUFVQztpQkFDWjs7OztnQkFoQlEsUUFBUTtnQkFEcUIsVUFBVTs7O3VCQTBCN0MsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7NkJBR0wsS0FBSzs2QkFHTCxLQUFLOzhCQUdMLEtBQUs7Z0NBQ0wsS0FBSzs7bUJBeENSOztTQWtCYSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5S3JCLHFCQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBcbiAgICAgICAgICAgIFtiZ10sXG4gICAgICAgICAgICBbY29sb3JdLFxuICAgICAgICAgICAgW3JhaXNlZF0sXG4gICAgICAgICAgICBbcmFpc2VkXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbbHktYnV0dG9uXVtvdXRsaW5lZF0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXSxcbiAgICAgICAgICAgIFtlbGV2YXRpb25dW3NoYWRvd0NvbG9yXSxcbiAgICAgICAgICAgIFtkaXNhYmxlZF0sXG4gICAgICAgICAgICBseS1jYXJkXG4gICAgICAgICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfcmFpc2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9vdXRsaW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9hdXRvQ29udHJhc3Q6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lzQ29udHJhc3Q6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgYmc6IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNldCByYWlzZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX3JhaXNlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWQ7IH1cblxuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cblxuICBASW5wdXQoKSBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX291dGxpbmVkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IG91dGxpbmVkKCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZWQ7IH1cblxuICBASW5wdXQoKSBlbGV2YXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgc2hhZG93Q29sb3I6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICBwdWJsaWMgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl9pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICF0aGlzLmNvbG9yIHx8IHRoaXMuY29sb3IgPT09ICdhdXRvJztcbiAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgdGhpcy5iZyB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgdGhpcy5jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICB0aGlzLnJhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgIHRoaXMuZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICAgIHRoaXMub3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4obmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAodGhpcy5vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmJnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZihgJHt0aGlzLmJnfTpjb250cmFzdGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIHRoaXMuY29sb3IpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yYWlzZWQgfHwgdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9ICh0aGlzLnNoYWRvd0NvbG9yICYmIHRoaXMudGhlbWUuY29sb3JPZih0aGlzLnNoYWRvd0NvbG9yKSkgfHwgc3R5bGUuYmFja2dyb3VuZCB8fCBzdHlsZS5jb2xvciB8fCB0aGVtZS5jb2xvclNoYWRvdztcbiAgICAgICAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgIGlmICghdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8qKn4gKi9cbiAgICAvLyBjb25zdCByYWlzZWTEuGV5ID0gdGhpcy5yYWlzZWQgPT09IHRydWUgPyAncmFpc2VkJyA6ICcnO1xuICAgIC8vIGxldCBrZXkgPSAnJztcbiAgICAvLyBpZiAoKHRoaXMuY29udHJhc3QgJiYgIXRoaXMuY29sb3IgfHwgdGhpcy5jb2xvciA9PT0gJ2F1dG8nKSAmJiB0aGlzLmJnKSB7XG4gICAgLy8gICBrZXkgPSBgYmNyLWNvbnRyYXN0OiR7dGhpcy5iZ30ke3JhaXNlZMS4ZXl9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgdGhpcy5jb250cmFzdFN0eWxlLmJpbmQodGhpcyksIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmJnICYmIHRoaXMuY29sb3IpIHtcbiAgICAvLyAgIGtleSA9IGBiJsS4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMucmFpc2VkfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAvLyAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5LSR7a2V5fWAsIHRoaXMuYmdDb2xvclN0eWxlLmJpbmQodGhpcyksIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgIC8vICAga2V5ID0gcmFpc2VkxLhleSArIHRoaXMuY29sb3IgfHwgJyc7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4oYGx5LSR7a2V5fWAsIHRoZW1lID0+IHtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgO1xuICAgIC8vICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAvLyAgICAgbGV0IGNvbG9yU2hhZG93O1xuICAgIC8vICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgIC8vICAgICAgIGNvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gY29sb3I7XG4gICAgLy8gICAgICAgc3R5bGVzICs9IGBjb2xvcjoke2NvbG9yfTtgO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gdGhlbWUuY29sb3JTaGFkb3c7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBzdHlsZXM7XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5iZyB8fCB0aGlzLmNvbG9yKSB7XG4gICAgLy8gICBjb25zdCBjaGFuZ2VLZXkgPSB0aGlzLmJnID8gWydiZycsICdiYWNrZ3JvdW5kJywgdGhpcy5iZ10gOiBbJ8S4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgLy8gICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAvLyAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkfSR7dGhpcy5lbGV2YXRpb259YDtcblxuICAgIC8vICAgLyoqIENyZWF0ZSBzdHlsZSAqL1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIF9jb2xvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAvLyAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG5cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkfWVseHh4eHh4eHgke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCAoKSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoMCwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH1cbiAgfVxuICAvLyBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gIC8vICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gIC8vICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgLy8gICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgLy8gICBpZiAodGhpcy5fcmFpc2VkKSB7XG4gIC8vICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIGNzc0JnKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHN0eWxlcztcbiAgLy8gfVxuXG4gIC8vIHByaXZhdGUgYmdDb2xvclN0eWxlKCkge1xuICAvLyAgIGNvbnN0IGNzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAvLyAgIGNvbnN0IGNzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAvLyAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke2Nzc0NvbG9yfTtgO1xuICAvLyAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgLy8gICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGVzO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbiJdfQ==