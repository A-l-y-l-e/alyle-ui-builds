/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { toBoolean } from '../minimal';
import { shadowBuilder } from '../shadow';
/** @type {?} */
var STYLE_PRIORITY = -1;
/** @type {?} */
var DEFAULT_VALUE = '';
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
        /** @type {?} */
        var __bg = this.bg;
        /** @type {?} */
        var __color = this.color;
        /** @type {?} */
        var __raised = this.raised;
        /** @type {?} */
        var __elevation = this.elevation;
        /** @type {?} */
        var __disabled = this.disabled;
        /** @type {?} */
        var __outlined = this.outlined;
        /** @type {?} */
        var __shadowColor = this.shadowColor;
        /** @type {?} */
        var __isContrast = this._isContrast = this._autoContrast && !__color || __color === 'auto';
        /** @type {?} */
        var newKey = "common----:" + (__bg || DEFAULT_VALUE) + "\u00B7" + (__color || DEFAULT_VALUE) + "\u00B7" + (__raised || DEFAULT_VALUE) + "\u00B7" + (__elevation || DEFAULT_VALUE) + "\u00B7" + (__disabled || DEFAULT_VALUE) + "\u00B7" + (__outlined || DEFAULT_VALUE) + "\u00B7" + (__shadowColor || DEFAULT_VALUE) + "\u00B7" + (__isContrast || DEFAULT_VALUE);
        this._className = this.theme.addStyle(newKey, function (theme) {
            /** @type {?} */
            var style = {};
            if (__outlined) {
                style.border = '1px solid currentColor';
            }
            if (__disabled) {
                style.color = theme.text.disabled;
                style.pointerEvents = 'none';
                if (__bg) {
                    style.background = theme.button.disabled;
                }
            }
            else {
                if (__bg) {
                    style.background = theme.colorOf(__bg);
                    if (__isContrast) {
                        style.color = theme.colorOf(__bg + ":contrast");
                    }
                }
                if (!style.color && __color) {
                    style.color = theme.colorOf(__color);
                }
                if (__raised || __elevation) {
                    if (!__bg) {
                        style.background = theme.background.primary.default;
                    }
                    /** @type {?} */
                    var backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                    /** @type {?} */
                    var shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
                    style.boxShadow = shadowBuilder(__elevation || 3, shadowColor);
                    if (!__elevation) {
                        style['&:active'] = {
                            boxShadow: shadowBuilder(8, shadowColor)
                        };
                    }
                }
            }
            return (/** @type {?} */ (style));
        }, this._getHostElement(), this._className, STYLE_PRIORITY);
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
                    selector: "\n            [bg],\n            [color],\n            [raised],\n            [raised][shadowColor],\n            [ly-button][outlined],\n            [elevation],\n            [elevation][shadowColor],\n            [disabled],\n            ly-card,\n            ly-toolbar,\n            ly-checkbox\n            "
                },] }
    ];
    /** @nocollapse */
    LyCommon.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyCommon.propDecorators = {
        bg: [{ type: Input }],
        color: [{ type: Input }],
        raised: [{ type: Input }],
        disabled: [{ type: Input }],
        outlined: [{ type: Input }],
        elevation: [{ type: Input }],
        shadowColor: [{ type: Input }]
    };
    return LyCommon;
}());
export { LyCommon };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFFcEMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDbkIsYUFBYSxHQUFHLEVBQUU7QUFFeEI7SUFzQ0Usa0JBQ1UsS0FBZSxFQUNmLFVBQXNCO1FBRHRCLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzVCLENBQUM7SUFkTCxzQkFBYSw0QkFBTTs7OztRQUNuQixjQUFlLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7O1FBRHJDLFVBQW9CLEdBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3BFLHNCQUFhLDhCQUFROzs7O1FBQ3JCLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBRHpDLFVBQXNCLEdBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3hFLHNCQUFhLDhCQUFROzs7O1FBQ3JCLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBRHpDLFVBQXNCLEdBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFNB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Q0FBQyxHQUFHOzRCQUNsQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7eUJBQ3pDLENBQUM7cUJBQ0g7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sbUJBQUEsS0FBSyxFQUFPLENBQUM7UUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFTyxrQ0FBZTs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOztnQkF0SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwVEFZQztpQkFDWjs7OztnQkFyQlEsUUFBUTtnQkFEcUIsVUFBVTs7O3FCQStCN0MsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBR0wsS0FBSzsyQkFHTCxLQUFLOzRCQUdMLEtBQUs7OEJBQ0wsS0FBSzs7SUFrRlIsZUFBQztDQUFBLEFBdkhELElBdUhDO1NBeEdZLFFBQVE7OztJQUNuQiwyQkFBeUI7O0lBQ3pCLDZCQUEyQjs7SUFDM0IsNkJBQTJCOztJQUMzQiw4QkFBMkI7O0lBQzNCLGlDQUErQjs7SUFDL0IsK0JBQTZCOztJQUU3QixzQkFBb0I7O0lBRXBCLHlCQUF1Qjs7SUFXdkIsNkJBQTJCOztJQUMzQiwrQkFBNkI7O0lBRTNCLHlCQUF1Qjs7SUFDdkIsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZCxcbiAgICAgICAgICAgIGx5LXRvb2xiYXIsXG4gICAgICAgICAgICBseS1jaGVja2JveFxuICAgICAgICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0NvbnRyYXN0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGJnOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG5cbiAgQElucHV0KCkgZWxldmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIHB1YmxpYyBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IF9fYmcgPSB0aGlzLmJnO1xuICAgIGNvbnN0IF9fY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIGNvbnN0IF9fcmFpc2VkID0gdGhpcy5yYWlzZWQ7XG4gICAgY29uc3QgX19lbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcbiAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICBjb25zdCBfX291dGxpbmVkID0gdGhpcy5vdXRsaW5lZDtcbiAgICBjb25zdCBfX3NoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3dDb2xvcjtcbiAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICFfX2NvbG9yIHx8IF9fY29sb3IgPT09ICdhdXRvJztcbiAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgX19jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICBfX3JhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICBfX2Rpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICAgIF9fb3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICAgICAgICBfX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUobmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19