/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState } from '@alyle/ui';
import { styles } from './button.style';
/** @type {?} */
const DEFAULT_SIZE = 'medium';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
/**
 * \@docs-private
 */
export class LyButtonBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
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
export const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
export class LyButton extends LyButtonMixinBase {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _ngZone
     * @param {?} _rippleService
     * @param {?} _focusState
     */
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        super(_theme, _ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this._rippleService = _rippleService;
        this._focusState = _focusState;
        /**
         * Style
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._rippleSensitive = false;
        this.setAutoContrast();
        this._triggerElement = _el;
        if (Platform.FIREFOX) {
            this._theme.addStyle('button-ff', {
                '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                    border: 0
                }
            }, this._el.nativeElement, undefined, STYLE_PRIORITY);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get rippleSensitive() {
        return this._rippleSensitive;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rippleSensitive(value) {
        /** @type {?} */
        const newVal = this._rippleSensitive = toBoolean(value);
        this._rippleConfig.sensitive = newVal;
    }
    /**
     * Button size
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this._theme.addStyle(`lyButton.size:${val}`, (theme) => theme.button.size[val], this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
        }
    }
    /**
     * Button appearance
     * @return {?}
     */
    get appearance() { return this._appearance; }
    /**
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        if (val !== this.appearance) {
            if (val === 'icon' && !this._rippleConfig.centered) {
                this._rippleConfig.centered = true;
            }
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle(`lyButton.appearance:${val}`, (theme) => (theme.button.appearance[val]), this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
        if (!this.size && !this.appearance) {
            this.size = DEFAULT_SIZE;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        /** @type {?} */
        const focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe((event) => {
                if (this._onFocusByKeyboardState === true) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    this._onFocusByKeyboardState = false;
                }
                if (event.by === 'keyboard') {
                    if (event.event.type === 'focus') {
                        this._onFocusByKeyboardState = true;
                        this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    }
                }
            });
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this._el.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    }
}
LyButton.decorators = [
    { type: Component, args: [{
                selector: 'button[ly-button]',
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
                ],
                host: {
                    '[disabled]': 'disabled'
                }
            }] }
];
/** @nocollapse */
LyButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState }
];
LyButton.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    rippleSensitive: [{ type: Input, args: ['sensitive',] }],
    size: [{ type: Input }],
    appearance: [{ type: Input }]
};
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
export class LyAnchor extends LyButton {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _ngZone
     * @param {?} _rippleService
     * @param {?} _focusState
     */
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        super(_el, _renderer, _theme, _ngZone, _rippleService, _focusState);
    }
}
LyAnchor.decorators = [
    { type: Component, args: [{
                selector: 'a[ly-button]',
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
LyAnchor.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUdOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVIsYUFBYSxFQUNiLFVBQVUsRUFDVixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BQ2xDLFlBQVksR0FBRyxRQUFROztNQUN2QixzQkFBc0IsR0FBRyxLQUFLOztNQUM5QixjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBS3pCLE1BQU0sT0FBTyxZQUFZOzs7OztJQUN2QixZQUNTLE1BQWdCLEVBQ2hCLE9BQWU7UUFEZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDcEIsQ0FBQztDQUNOOzs7SUFIRyw4QkFBdUI7O0lBQ3ZCLCtCQUFzQjs7Ozs7O0FBSzFCLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FDbEQsT0FBTyxDQUNILFVBQVUsQ0FDUixXQUFXLENBQ1QsYUFBYSxDQUNYLGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQ2Qsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQW9CeEQsTUFBTSxPQUFPLFFBQVMsU0FBUSxpQkFBaUI7Ozs7Ozs7OztJQTZEN0Ms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c0M7O0lBQ3RDLCtCQUFpQzs7QUF5RXJDLE1BQU0sT0FBTyxRQUFTLFNBQVEsUUFBUTs7Ozs7Ozs7O0lBQ3BDLFlBQ0UsR0FBZSxFQUNmLFNBQW9CLEVBQ3BCLE1BQWdCLEVBQ2hCLE9BQWUsRUFDZixjQUErQixFQUMvQixXQUF5QjtRQUV6QixLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsdUtBQTBCO2dCQUMxQixNQUFNLEVBQUU7b0JBQ04sSUFBSTtvQkFDSixPQUFPO29CQUNQLFFBQVE7b0JBQ1IsVUFBVTtvQkFDVixVQUFVO29CQUNWLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixlQUFlO2lCQUNoQjthQUNGOzs7O1lBbE5DLFVBQVU7WUFFVixTQUFTO1lBV1QsUUFBUTtZQVZSLE1BQU07WUFxQk4sZUFBZTtZQUNmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5CZyxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZVxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgdHlwZSBMeUJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QnV0dG9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUJ1dHRvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUJ1dHRvbkJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBleHRlbmRzIEx5QnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3NpemU6IEx5QnV0dG9uU2l6ZTtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcuc2Vuc2l0aXZlID0gbmV3VmFsO1xuICB9XG5cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IEx5QnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsOiBMeUJ1dHRvblNpemUpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLnNpemU6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gdGhlbWUuYnV0dG9uLnNpemVbdmFsXSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQnV0dG9uIGFwcGVhcmFuY2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7IH1cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIGlmICh2YWwgPT09ICdpY29uJyAmJiAhdGhpcy5fcmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZUNvbmZpZy5jZW50ZXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh0aGVtZS5idXR0b24uYXBwZWFyYW5jZVt2YWxdKSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBfbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICAgIGlmIChQbGF0Zm9ybS5GSVJFRk9YKSB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnYnV0dG9uLWZmJywge1xuICAgICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwmOjotbW96LWZvY3VzLWlubmVyLCY6Oi1tb3otZm9jdXMtaW5uZXIsJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplICYmICF0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYVtseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlBbmNob3IgZXh0ZW5kcyBMeUJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbDogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICkge1xuICAgIHN1cGVyKF9lbCwgX3JlbmRlcmVyLCBfdGhlbWUsIF9uZ1pvbmUsIF9yaXBwbGVTZXJ2aWNlLCBfZm9jdXNTdGF0ZSk7XG4gIH1cbn1cbiJdfQ==