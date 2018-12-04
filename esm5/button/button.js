/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState } from '@alyle/ui';
import { styles } from './button.style';
/** @type {?} */
var DEFAULT_SIZE = 'medium';
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
var ɵ0 = function (theme) { return ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.lyTyp.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '48px'
}); }, ɵ1 = function (theme) { return ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.lyTyp.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '96px'
}); };
/**
 * \@docs-private
 * @type {?}
 */
var Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '64px'
    }),
    large: ɵ1
};
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyButtonBase = /** @class */ (function () {
    function LyButtonBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyButtonBase;
}());
/**
 * \@docs-private
 */
export { LyButtonBase };
if (false) {
    /** @type {?} */
    LyButtonBase.prototype._theme;
    /** @type {?} */
    LyButtonBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
var LyButton = /** @class */ (function (_super) {
    tslib_1.__extends(LyButton, _super);
    function LyButton(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._rippleService = _rippleService;
        _this._focusState = _focusState;
        /**
         * Style
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this._rippleSensitive = false;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        _this._renderer.addClass(_this._el.nativeElement, _this.classes.root);
        if (Platform.FIREFOX) {
            _this._theme.addStyle('button-ff', {
                '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                    border: 0
                }
            }, _this._el.nativeElement, undefined, STYLE_PRIORITY);
        }
        return _this;
    }
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        /** @docs-private */
        get: /**
         * \@docs-private
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
            /** @type {?} */
            var newVal = this._rippleSensitive = toBoolean(value);
            this._rippleConfig.sensitive = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "size", {
        /** Button size */
        get: /**
         * Button size
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
                this._sizeClass = this._theme.addStyle("lyButton.size:" + val, function (theme) { return theme.button.size[val]; }, this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "appearance", {
        /** Button appearance */
        get: /**
         * Button appearance
         * @return {?}
         */
        function () { return this._appearance; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.appearance) {
                if (val === 'icon' && !this._rippleConfig.centered) {
                    this._rippleConfig.centered = true;
                }
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("lyButton.appearance:" + val, function (theme) { return (theme.button.appearance[val]); }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        /** @type {?} */
        var focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (_this._onFocusByKeyboardState === true) {
                    _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    _this._onFocusByKeyboardState = false;
                }
                if (event.by === 'keyboard') {
                    if (event.event.type === 'focus') {
                        _this._onFocusByKeyboardState = true;
                        _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    }
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._el.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    };
    LyButton.decorators = [
        { type: Component, args: [{
                    selector: '[ly-button]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<span [className]=\"classes.content\">\n  <ng-content></ng-content>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'disabled',
                        'outlined',
                        'elevation',
                        'shadowColor',
                        'disableRipple'
                    ]
                }] }
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState }
    ]; };
    LyButton.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        rippleSensitive: [{ type: Input, args: ['sensitive',] }],
        size: [{ type: Input }],
        appearance: [{ type: Input }]
    };
    return LyButton;
}(LyButtonMixinBase));
export { LyButton };
if (false) {
    /**
     * Style
     * \@docs-private
     * @type {?}
     */
    LyButton.prototype.classes;
    /** @type {?} */
    LyButton.prototype._rippleSensitive;
    /** @type {?} */
    LyButton.prototype._size;
    /** @type {?} */
    LyButton.prototype._sizeClass;
    /** @type {?} */
    LyButton.prototype._appearance;
    /** @type {?} */
    LyButton.prototype._appearanceClass;
    /** @type {?} */
    LyButton.prototype._onFocusByKeyboardState;
    /** @type {?} */
    LyButton.prototype._rippleContainer;
    /** @type {?} */
    LyButton.prototype._el;
    /** @type {?} */
    LyButton.prototype._renderer;
    /** @type {?} */
    LyButton.prototype._rippleService;
    /** @type {?} */
    LyButton.prototype._focusState;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFHTixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUVSLGFBQWEsRUFDYixVQUFVLEVBQ1YsT0FBTyxFQUNQLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUNsQyxZQUFZLEdBQUcsUUFBUTs7SUFDdkIsc0JBQXNCLEdBQUcsS0FBSzs7SUFDOUIsY0FBYyxHQUFHLENBQUMsQ0FBQztTQU1oQixVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0NBQ2pCLENBQUMsRUFMZ0MsQ0FLaEMsT0FNSyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLFNBQVMsRUFBRSxN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OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQXpJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyx1S0FBMEI7b0JBQzFCLE1BQU0sRUFBRTt3QkFDTixJQUFJO3dCQUNKLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO2lCQUNGOzs7O2dCQXhGQyxVQUFVO2dCQUVWLFNBQVM7Z0JBV1QsUUFBUTtnQkFWUixNQUFNO2dCQXFCTixlQUFlO2dCQUNmLFlBQVk7OzttQ0E2RVgsU0FBUyxTQUFDLGlCQUFpQjtrQ0FHM0IsS0FBSyxTQUFDLFdBQVc7dUJBVWpCLEtBQUs7NkJBa0JMLEtBQUs7O0lBK0VSLGVBQUM7Q0FBQSxBQTFJRCxDQWU4QixpQkFBaUIsR0EySDlDO1NBM0hZLFFBQVE7Ozs7Ozs7SUFLbkIsMkJBQXFFOztJQUNyRSxvQ0FBaUM7O0lBQ2pDLHlCQUE0Qjs7SUFDNUIsOEJBQTJCOztJQUMzQiwrQkFBNEI7O0lBQzVCLG9DQUFpQzs7SUFDakMsMkNBQXlDOztJQUV6QyxvQ0FBMkQ7O0lBaUR6RCx1QkFBdUI7O0lBQ3ZCLDZCQUE0Qjs7SUFHNUIsa0NBQXNDOztJQUN0QywrQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5CZyxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZVxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG50eXBlIEx5QnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTaXplOiBSZWNvcmQ8THlCdXR0b25TaXplLCBhbnk+ID0ge1xuICBzbWFsbDogKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgbWluV2lkdGg6ICc0OHB4J1xuICB9KSxcbiAgbWVkaXVtOiAoe1xuICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIG1pbldpZHRoOiAnNjRweCdcbiAgfSksXG4gIGxhcmdlOiAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgbWluV2lkdGg6ICc5NnB4J1xuICB9KVxufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCdXR0b25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlCdXR0b25CYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGV4dGVuZHMgTHlCdXR0b25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFN0eWxlXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2l6ZTogTHlCdXR0b25TaXplO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZy5zZW5zaXRpdmUgPSBuZXdWYWw7XG4gIH1cblxuICAvKiogQnV0dG9uIHNpemUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogTHlCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBzZXQgc2l6ZSh2YWw6IEx5QnV0dG9uU2l6ZSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24uc2l6ZToke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB0aGVtZS5idXR0b24uc2l6ZVt2YWxdLFxuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBCdXR0b24gYXBwZWFyYW5jZSAqL1xuICBASW5wdXQoKVxuICBnZXQgYXBwZWFyYW5jZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTsgfVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgaWYgKHZhbCA9PT0gJ2ljb24nICYmICF0aGlzLl9yaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlQ29uZmlnLmNlbnRlcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHRoZW1lLmJ1dHRvbi5hcHBlYXJhbmNlW3ZhbF0pLFxuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgX25nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKFBsYXRmb3JtLkZJUkVGT1gpIHtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdidXR0b24tZmYnLCB7XG4gICAgICAgICcmOjotbW96LWZvY3VzLWlubmVyLCY6Oi1tb3otZm9jdXMtaW5uZXIsJjo6LW1vei1mb2N1cy1pbm5lciwmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgICAgIGJvcmRlcjogMFxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5ieSA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIGlmIChldmVudC5ldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cbiJdfQ==