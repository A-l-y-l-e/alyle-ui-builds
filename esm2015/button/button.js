/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
/** @type {?} */
const DEFAULT_SIZE = 'medium';
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
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     * @param {?} rippleStyles
     * @param {?} _ngZone
     * @param {?} bgAndColor
     */
    constructor(elementRef, renderer, theme, rippleStyles, _ngZone, bgAndColor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this.rippleStyles = rippleStyles;
        this.bgAndColor = bgAndColor;
        this.classes = this.theme.addStyleSheet(styles, 'lyButton');
        this._disabled = false;
        this._rippleSensitive = false;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
        if (Platform.isBrowser) {
            /** @type {?} */
            const el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleStyles.stylesData, el);
        }
    }
    /**
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
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this.theme.addStyle(`lyButton-size:${this.size}`, Size[this.size], this.elementRef.nativeElement, this._sizeClass);
        }
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._rippleContainer.removeEvents();
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
    rippleSensitive: [{ type: Input, args: ['sensitive',] }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyButton.prototype.classes;
    /** @type {?} */
    LyButton.prototype._disabled;
    /** @type {?} */
    LyButton.prototype._rippleSensitive;
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
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDVCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFDeEMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO1dBR3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDN0QsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLE1BQU07Q0FDakIsQ0FBQyxPQU1LLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDN0QsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLE9BQU87Q0FDbEIsQ0FBQzs7QUFqQkosTUFBTSxJQUFJLEdBQUc7SUFDWCxLQUFLLElBS0g7SUFDRixNQUFNLEVBQUUsQ0FBQztRQUNQLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFFBQVEsRUFBRSxNQUFNO0tBQ2pCLENBQUM7SUFDRixLQUFLLElBS0g7Q0FDSCxDQUFDO0FBWUYsTUFBTTs7Ozs7Ozs7O0lBc0RKLFlBQ1UsWUFDQSxVQUNBLE9BQ0QsY0FDUCxPQUFlLEVBQ0ssVUFBb0I7UUFMaEMsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLO1FBQ04saUJBQVksR0FBWixZQUFZO1FBRUMsZUFBVSxHQUFWLFVBQVUsQ0FBVTt1QkEzRGhDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7eUJBQ25DLEtBQUs7Z0NBQ0csS0FBSztRQTJEOUIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7O1lBQ3RCLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0tBQ0Y7Ozs7SUFyREQsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCOzs7OztJQUNELElBQUksZUFBZSxDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFRCxJQUNJLElBQUksQ0FBQyxHQUFXO1FBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbkMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQztTQUNIO0tBQ0Y7Ozs7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFZRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFtQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztTQUMxQjtLQUNGOzs7O0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQWV4QyxXQUFXO1FBQ1QsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7WUE1R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFoREMsVUFBVTtZQUdWLFNBQVM7WUFTVCxRQUFRO1lBR08sZUFBZTtZQVg5QixNQUFNO1lBU04sUUFBUSx1QkFnR0wsUUFBUTs7OzhCQTVDVixLQUFLLFNBQUMsV0FBVzttQkFRakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUNvbW1vblxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuXG5jb25zdCBTaXplID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgbWluV2lkdGg6ICc2NHB4J1xuICB9KSxcbiAgbWVkaXVtOiAoe1xuICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIG1pbldpZHRoOiAnODhweCdcbiAgfSksXG4gIGxhcmdlOiAodGhlbWUpID0+ICh7XG4gICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKSxcbiAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICBtaW5XaWR0aDogJzExMnB4J1xuICB9KVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUJ1dHRvbicpO1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICAvLyBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcblxuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7XG4gIC8vICAgY29uc3QgY2xhc3NuYW1lID0gdG9Cb29sZWFuKHZhbCkgPT09IHRydWUgPyB0aGlzLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgLy8gICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gIC8vICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIC8vIH1cblxuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemVdLFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAvLyAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgLy8gICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgLy8gICAgIGNvbnN0IGtleSA9IHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpID8gJ3InIDogJ2YnO1xuICAvLyAgICAgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUJ1dHRvbi1kaXNhYmxlZDoke2tleX1gLCB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gIC8vICAgfVxuICAvLyB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKF9uZ1pvbmUsIHJpcHBsZVN0eWxlcy5zdHlsZXNEYXRhLCBlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICAvLyBwcml2YXRlIGRpc2FibGVTdHlsZSgpIHtcbiAgLy8gICBsZXQgc3R5bGUgPVxuICAvLyAgIGBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7YCArXG4gIC8vICAgYGN1cnNvcjogZGVmYXVsdDtgICtcbiAgLy8gICBgY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kaXNhYmxlZH0gIWltcG9ydGFudDtgICtcbiAgLy8gICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YDtcbiAgLy8gICBpZiAodGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykpIHtcbiAgLy8gICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLmJ1dHRvbi5kaXNhYmxlZH0gIWltcG9ydGFudDtgO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGU7XG4gIC8vIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==