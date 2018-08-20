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
                    style.background = theme.colorOf(_this.bg);
                    if (_this._isContrast) {
                        style.color = theme.colorOf(_this.bg + ":contrast");
                    }
                }
                if (!style.color && _this.color) {
                    style.color = theme.colorOf(_this.color);
                }
                if (_this.raised || _this.elevation) {
                    var /** @type {?} */ shadowColor = (_this.shadowColor && theme.colorOf(_this.shadowColor)) || style.background || style.color || theme.colorShadow;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFzQ3hDLGtCQUNVLE9BQ0E7UUFEQSxVQUFLLEdBQUwsS0FBSztRQUNMLGVBQVUsR0FBVixVQUFVO0tBQ2hCOzBCQWRTLDRCQUFNOzs7O1FBQ25CLGNBQWUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7O2tCQURqQixHQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7MEJBR3JELDhCQUFROzs7O1FBQ3JCLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztrQkFEbkIsR0FBWSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OzBCQUd6RCw4QkFBUTs7OztRQUNyQixjQUFpQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7a0JBRG5CLEdBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7OztJQVUvRCxrQ0FBZTs7OztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7Ozs7SUFHNUIsOEJBQVc7OztJQUFYO1FBQUEsaUJBK0dDO1FBOUdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFB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QXFCTyxrQ0FBZTs7OztRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDOzs7Z0JBbEx4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVRQVVDO2lCQUNaOzs7O2dCQWhCUSxRQUFRO2dCQURxQixVQUFVOzs7dUJBMEI3QyxLQUFLOzBCQUVMLEtBQUs7MkJBRUwsS0FBSzs2QkFHTCxLQUFLOzZCQUdMLEtBQUs7OEJBR0wsS0FBSztnQ0FDTCxLQUFLOzttQkF4Q1I7O1NBa0JhLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlLckIscUJBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwnO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFxuICAgICAgICAgICAgW2JnXSxcbiAgICAgICAgICAgIFtjb2xvcl0sXG4gICAgICAgICAgICBbcmFpc2VkXSxcbiAgICAgICAgICAgIFtyYWlzZWRdW3NoYWRvd0NvbG9yXSxcbiAgICAgICAgICAgIFtseS1idXR0b25dW291dGxpbmVkXSxcbiAgICAgICAgICAgIFtlbGV2YXRpb25dLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2Rpc2FibGVkXSxcbiAgICAgICAgICAgIGx5LWNhcmRcbiAgICAgICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9yYWlzZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX291dGxpbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNDb250cmFzdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBiZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgb3V0bGluZWQoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lZDsgfVxuXG4gIEBJbnB1dCgpIGVsZXZhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBzaGFkb3dDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX2lzQ29udHJhc3QgPSB0aGlzLl9hdXRvQ29udHJhc3QgJiYgIXRoaXMuY29sb3IgfHwgdGhpcy5jb2xvciA9PT0gJ2F1dG8nO1xuICAgIGNvbnN0IG5ld0tleSA9IGBjb21tb24tLS0tOiR7XG4gICAgICB0aGlzLmJnIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICB0aGlzLmNvbG9yIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgIHRoaXMucmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgdGhpcy5lbGV2YXRpb24gfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93Q29sb3IgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGU8YW55PihuZXdLZXksICh0aGVtZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGU6IHtcbiAgICAgICAgYm9yZGVyPzogc3RyaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICBjb2xvcj86IHN0cmluZyxcbiAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nLFxuICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAnJjpob3Zlcic/OiB7XG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgICcmOmFjdGl2ZSc/OiB7XG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgIH1cbiAgICAgIH0gPSB7fTtcbiAgICAgIGlmICh0aGlzLm91dGxpbmVkKSB7XG4gICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUudGV4dC5kaXNhYmxlZDtcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgaWYgKHRoaXMuYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYnV0dG9uLmRpc2FibGVkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5iZykge1xuICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJhaXNlZCB8fCB0aGlzLmVsZXZhdGlvbikge1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKHRoaXMuc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZih0aGlzLnNoYWRvd0NvbG9yKSkgfHwgc3R5bGUuYmFja2dyb3VuZCB8fCBzdHlsZS5jb2xvciB8fCB0aGVtZS5jb2xvclNoYWRvdztcbiAgICAgICAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgIGlmICghdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8qKn4gKi9cbiAgICAvLyBjb25zdCByYWlzZWTEuGV5ID0gdGhpcy5yYWlzZWQgPT09IHRydWUgPyAncmFpc2VkJyA6ICcnO1xuICAgIC8vIGxldCBrZXkgPSAnJztcbiAgICAvLyBpZiAoKHRoaXMuY29udHJhc3QgJiYgIXRoaXMuY29sb3IgfHwgdGhpcy5jb2xvciA9PT0gJ2F1dG8nKSAmJiB0aGlzLmJnKSB7XG4gICAgLy8gICBrZXkgPSBgYmNyLWNvbnRyYXN0OiR7dGhpcy5iZ30ke3JhaXNlZMS4ZXl9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgdGhpcy5jb250cmFzdFN0eWxlLmJpbmQodGhpcyksIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmJnICYmIHRoaXMuY29sb3IpIHtcbiAgICAvLyAgIGtleSA9IGBiJsS4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMucmFpc2VkfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAvLyAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5LSR7a2V5fWAsIHRoaXMuYmdDb2xvclN0eWxlLmJpbmQodGhpcyksIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgIC8vICAga2V5ID0gcmFpc2VkxLhleSArIHRoaXMuY29sb3IgfHwgJyc7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4oYGx5LSR7a2V5fWAsIHRoZW1lID0+IHtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgO1xuICAgIC8vICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAvLyAgICAgbGV0IGNvbG9yU2hhZG93O1xuICAgIC8vICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgIC8vICAgICAgIGNvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gY29sb3I7XG4gICAgLy8gICAgICAgc3R5bGVzICs9IGBjb2xvcjoke2NvbG9yfTtgO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gdGhlbWUuY29sb3JTaGFkb3c7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBzdHlsZXM7XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5iZyB8fCB0aGlzLmNvbG9yKSB7XG4gICAgLy8gICBjb25zdCBjaGFuZ2VLZXkgPSB0aGlzLmJnID8gWydiZycsICdiYWNrZ3JvdW5kJywgdGhpcy5iZ10gOiBbJ8S4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgLy8gICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAvLyAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkfSR7dGhpcy5lbGV2YXRpb259YDtcblxuICAgIC8vICAgLyoqIENyZWF0ZSBzdHlsZSAqL1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIF9jb2xvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAvLyAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG5cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkfWVseHh4eHh4eHgke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCAoKSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoMCwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH1cbiAgfVxuICAvLyBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gIC8vICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gIC8vICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgLy8gICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgLy8gICBpZiAodGhpcy5fcmFpc2VkKSB7XG4gIC8vICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIGNzc0JnKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHN0eWxlcztcbiAgLy8gfVxuXG4gIC8vIHByaXZhdGUgYmdDb2xvclN0eWxlKCkge1xuICAvLyAgIGNvbnN0IGNzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAvLyAgIGNvbnN0IGNzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAvLyAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke2Nzc0NvbG9yfTtgO1xuICAvLyAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgLy8gICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGVzO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbiJdfQ==