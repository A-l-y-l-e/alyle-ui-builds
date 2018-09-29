/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
/** @type {?} */
const DEFAULT_SIZE = 'medium';
/** @type {?} */
const STYLE_PRIORITY = -2;
const ɵ0 = theme => ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '64px'
}), ɵ1 = (theme) => ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '112px'
});
/** @type {?} */
const Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '88px'
    }),
    large: ɵ1
};
export class LyButton {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _rippleService
     * @param {?} _ngZone
     * @param {?} bgAndColor
     */
    constructor(_elementRef, _renderer, _theme, _rippleService, _ngZone, bgAndColor) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._theme = _theme;
        this._rippleService = _rippleService;
        this._ngZone = _ngZone;
        /**
         * Style
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(styles, 'lyButton', STYLE_PRIORITY);
        this._rippleSensitive = false;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    /**
     * @ignore
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
        this._rippleSensitive = toBoolean(value);
    }
    /**
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
            this._sizeClass = this._theme.addStyle(`lyButton-size:${this.size}`, Size[/** @type {?} */ (this.size)], this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = /** @type {?} */ (DEFAULT_SIZE);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (Platform.isBrowser) {
            /** @type {?} */
            const rippleContainer = this._rippleContainer.nativeElement;
            /** @type {?} */
            const triggerElement = this._elementRef.nativeElement;
            this._ripple = new Ripple(this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._ripple.removeEvents();
        }
    }
}
LyButton.decorators = [
    { type: Component, args: [{
                selector: '[ly-button]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
  <span [className]="classes.content">
    <ng-content></ng-content>
  </span>
  <div #rippleContainer [className]="classes.rippleContainer"></div>
  `,
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LyButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: LyRippleService },
    { type: NgZone },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
LyButton.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    rippleSensitive: [{ type: Input, args: ['sensitive',] }],
    size: [{ type: Input }]
};
if (false) {
    /**
     * Style
     * @ignore
     * @type {?}
     */
    LyButton.prototype.classes;
    /** @type {?} */
    LyButton.prototype._rippleSensitive;
    /** @type {?} */
    LyButton.prototype._ripple;
    /** @type {?} */
    LyButton.prototype._size;
    /** @type {?} */
    LyButton.prototype._sizeClass;
    /** @type {?} */
    LyButton.prototype._rippleContainer;
    /** @type {?} */
    LyButton.prototype._elementRef;
    /** @type {?} */
    LyButton.prototype._renderer;
    /** @type {?} */
    LyButton.prototype._theme;
    /** @type {?} */
    LyButton.prototype._rippleService;
    /** @type {?} */
    LyButton.prototype._ngZone;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFHTixpQkFBaUIsRUFDakIsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixRQUFRLEVBQ1QsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBQ3hDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQzs7QUFDOUIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7V0FTakIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM3RCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsTUFBTTtDQUNqQixDQUFDLE9BTUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakIsT0FBTyxFQUFFLFFBQVE7SUFDakIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM3RCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsT0FBTztDQUNsQixDQUFDOztBQWpCSixNQUFNLElBQUksR0FBRztJQUNYLEtBQUssSUFLSDtJQUNGLE1BQU0sRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLE1BQU07S0FDakIsQ0FBQztJQUNGLEtBQUssSUFLSDtDQUNILENBQUM7QUFhRixNQUFNOzs7Ozs7Ozs7SUF1Q0osWUFDVSxhQUNBLFdBQ0EsUUFDQSxnQkFDQSxTQUNJLFVBQW9CO1FBTHhCLGdCQUFXLEdBQVgsV0FBVztRQUNYLGNBQVMsR0FBVCxTQUFTO1FBQ1QsV0FBTSxHQUFOLE1BQU07UUFDTixtQkFBYyxHQUFkLGNBQWM7UUFDZCxZQUFPLEdBQVAsT0FBTzs7Ozs7dUJBdkNQLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDO2dDQUM1QyxLQUFLO1FBeUM5QixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQXBDRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUNELElBQUksSUFBSSxDQUFDLEdBQStCO1FBQ3RDLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDcEMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDNUIsSUFBSSxtQkFBQyxJQUFJLENBQUMsSUFBVyxFQUFDLEVBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsVUFBVSxFQUNmLGNBQWMsQ0FDZixDQUFDO1NBQ0g7S0FDRjs7OztJQWVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUkscUJBQUcsWUFBbUIsQ0FBQSxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztZQUN0QixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztZQUM1RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZHO0tBQ0Y7Ozs7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBR3pDLFdBQVc7UUFDVCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM3QjtLQUNGOzs7WUF0RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBMURDLFVBQVU7WUFHVixTQUFTO1lBV1QsUUFBUTtZQUdPLGVBQWU7WUFiOUIsTUFBTTtZQVdOLFFBQVEsdUJBeUZMLFFBQVE7OzsrQkFsQ1YsU0FBUyxTQUFDLGlCQUFpQjs4QkFHM0IsS0FBSyxTQUFDLFdBQVc7bUJBUWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUNvbW1vblxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuaW50ZXJmYWNlIFNpemUge1xuICBzbWFsbDogYW55O1xuICBtZWRpdW06IGFueTtcbiAgbGFyZ2U6IGFueTtcbn1cblxuY29uc3QgU2l6ZSA9IHtcbiAgc21hbGw6IHRoZW1lID0+ICh7XG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSAtIDEpLFxuICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgIG1pbldpZHRoOiAnNjRweCdcbiAgfSksXG4gIG1lZGl1bTogKHtcbiAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICBtaW5XaWR0aDogJzg4cHgnXG4gIH0pLFxuICBsYXJnZTogKHRoZW1lKSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgbWluV2lkdGg6ICcxMTJweCdcbiAgfSlcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuIFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIDxkaXYgI3JpcHBsZUNvbnRhaW5lciBbY2xhc3NOYW1lXT1cImNsYXNzZXMucmlwcGxlQ29udGFpbmVyXCI+PC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUJ1dHRvbicsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBSZWNvcmQ8a2V5b2YgU2l6ZSwgc3RyaW5nPjtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IFJlY29yZDxrZXlvZiBTaXplLCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBzZXQgc2l6ZSh2YWw6IFJlY29yZDxrZXlvZiBTaXplLCBzdHJpbmc+KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi1zaXplOiR7dGhpcy5zaXplfWAsXG4gICAgICAgIFNpemVbdGhpcy5zaXplIGFzIGFueV0sXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gREVGQVVMVF9TSVpFIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy5fbmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIl19