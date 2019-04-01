/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState, getLyThemeVariableUndefinedError } from '@alyle/ui';
import { STYLES } from './button.style';
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
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        if (!_theme.variables.button) {
            throw getLyThemeVariableUndefinedError('button');
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
            this._sizeClass = this._theme.addStyle(`lyButton.size:${val}`, (theme) => {
                if (theme.button && theme.button.size && theme.button.size[val]) {
                    return (/** @type {?} */ (theme.button.size[val]));
                }
                throw new Error(`Value button.size['${val}'] not found in ThemeVariables`);
            }, this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
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
            this._appearanceClass = this._theme.addStyle(`lyButton.appearance:${val}`, (theme) => {
                if (!((/** @type {?} */ (theme.button)).appearance && (/** @type {?} */ ((/** @type {?} */ (theme.button)).appearance))[val])) {
                    throw new Error(`Value button.appearance['${val}'] not found in ThemeVariables`);
                }
                return (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (theme.button)).appearance))[val]));
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
        /** @type {?} */
        const isDisabled = this.disabled;
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { button } = this._theme.variables;
        if (button) {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // Apply default config
            if (this.size == null && this.appearance == null) {
                this.size = button.defaultConfig.size;
            }
            else {
                if (button.defaultConfig && button.defaultConfig.appearance) {
                    if (this.appearance == null) {
                        this.appearance = button.defaultConfig.appearance;
                    }
                }
            }
        }
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        /** @type {?} */
        const focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe((event) => {
                if (this._onFocusByKeyboardState === true) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    this._onFocusByKeyboardState = false;
                }
                if (event === 'keyboard') {
                    this._onFocusByKeyboardState = true;
                    this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
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
                selector: 'button[ly-button], a[ly-button]',
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
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._rippleSensitive;
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._size;
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._sizeClass;
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._appearance;
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._appearanceClass;
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._onFocusByKeyboardState;
    /** @type {?} */
    LyButton.prototype._rippleContainer;
    /**
     * @type {?}
     * @protected
     */
    LyButton.prototype._el;
    /**
     * @type {?}
     * @protected
     */
    LyButton.prototype._renderer;
    /** @type {?} */
    LyButton.prototype._rippleService;
    /**
     * @type {?}
     * @private
     */
    LyButton.prototype._focusState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUdOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVIsYUFBYSxFQUNiLFVBQVUsRUFDVixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFlBQVksRUFDWixnQ0FBZ0MsRUFDakMsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVsQyxzQkFBc0IsR0FBRyxLQUFLOztNQUM5QixjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBS3pCLE1BQU0sT0FBTyxZQUFZOzs7OztJQUN2QixZQUNTLE1BQWdCLEVBQ2hCLE9BQWU7UUFEZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDcEIsQ0FBQztDQUNOOzs7SUFIRyw4QkFBdUI7O0lBQ3ZCLCtCQUFzQjs7Ozs7O0FBSzFCLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FDbEQsT0FBTyxDQUNILFVBQVUsQ0FDUixXQUFXLENBQ1QsYUFBYSxDQUNYLGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQ2Qsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQWlCeEQsTUFBTSxPQUFPLFFBQVMsU0FBUSxpQkFBaUI7Ozs7Ozs7OztJQXVFN0MsWUFDWSxHQUFl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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5CZyxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3Jcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNUWUxFUyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcblxuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IHR5cGUgTHlCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCdXR0b25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlCdXR0b25CYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktYnV0dG9uXSwgYVtseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gZXh0ZW5kcyBMeUJ1dHRvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3R5bGVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zaXplOiBMeUJ1dHRvblNpemU7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnLnNlbnNpdGl2ZSA9IG5ld1ZhbDtcbiAgfVxuXG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2l6ZSgpOiBMeUJ1dHRvblNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogTHlCdXR0b25TaXplKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi5zaXplOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBpZiAodGhlbWUuYnV0dG9uICYmIHRoZW1lLmJ1dHRvbi5zaXplICYmIHRoZW1lLmJ1dHRvbi5zaXplW3ZhbF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVtZS5idXR0b24uc2l6ZVt2YWxdITtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBidXR0b24uc2l6ZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NpemVDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEJ1dHRvbiBhcHBlYXJhbmNlICovXG4gIEBJbnB1dCgpXG4gIGdldCBhcHBlYXJhbmNlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9hcHBlYXJhbmNlOyB9XG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICBpZiAodmFsID09PSAnaWNvbicgJiYgIXRoaXMuX3JpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgICB0aGlzLl9yaXBwbGVDb25maWcuY2VudGVyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgaWYgKCEodGhlbWUuYnV0dG9uIS5hcHBlYXJhbmNlICYmIHRoZW1lLmJ1dHRvbiEuYXBwZWFyYW5jZSFbdmFsXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgYnV0dG9uLmFwcGVhcmFuY2VbJyR7dmFsfSddIG5vdCBmb3VuZCBpbiBUaGVtZVZhcmlhYmxlc2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhlbWUuYnV0dG9uIS5hcHBlYXJhbmNlIVt2YWxdITtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBfbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICAgIGlmIChQbGF0Zm9ybS5GSVJFRk9YKSB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnYnV0dG9uLWZmJywge1xuICAgICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwmOjotbW96LWZvY3VzLWlubmVyLCY6Oi1tb3otZm9jdXMtaW5uZXIsJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgICBpZiAoIV90aGVtZS52YXJpYWJsZXMuYnV0dG9uKSB7XG4gICAgICB0aHJvdyBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvcignYnV0dG9uJyk7XG4gICAgfVxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBidXR0b24gfSA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcztcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAgIC8vIEFwcGx5IGRlZmF1bHQgY29uZmlnXG4gICAgICBpZiAodGhpcy5zaXplID09IG51bGwgJiYgdGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zaXplID0gYnV0dG9uLmRlZmF1bHRDb25maWcuc2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChidXR0b24uZGVmYXVsdENvbmZpZyAmJiBidXR0b24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYXBwZWFyYW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBidXR0b24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcblxuICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIl19