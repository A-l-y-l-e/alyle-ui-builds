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
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     * @param {?} rippleService
     * @param {?} _ngZone
     * @param {?} bgAndColor
     */
    constructor(elementRef, renderer, theme, rippleService, _ngZone, bgAndColor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        /**
         * Style
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, 'lyButton', STYLE_PRIORITY);
        this._rippleSensitive = false;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
        if (Platform.isBrowser) {
            /** @type {?} */
            const el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleService.classes, el);
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
            this._sizeClass = this.theme.addStyle(`lyButton-size:${this.size}`, Size[/** @type {?} */ (this.size)], this.elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = /** @type {?} */ (DEFAULT_SIZE);
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
    /**
     * Style
     * @ignore
     * @type {?}
     */
    LyButton.prototype.classes;
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
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDVCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFDeEMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDOztBQUM5QixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztXQVNqQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixPQUFPLEVBQUUsT0FBTztJQUNoQixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzdELFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0NBQ2pCLENBQUMsT0FNSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzdELFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxPQUFPO0NBQ2xCLENBQUM7O0FBakJKLE1BQU0sSUFBSSxHQUFHO0lBQ1gsS0FBSyxJQUtIO0lBQ0YsTUFBTSxFQUFFLENBQUM7UUFDUCxPQUFPLEVBQUUsUUFBUTtRQUNqQixTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsTUFBTTtLQUNqQixDQUFDO0lBQ0YsS0FBSyxJQUtIO0NBQ0gsQ0FBQztBQVlGLE1BQU07Ozs7Ozs7OztJQXFDSixZQUNVLFlBQ0EsVUFDQSxPQUNSLGFBQThCLEVBQzlCLE9BQWUsRUFDSCxVQUFvQjtRQUx4QixlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ1IsVUFBSyxHQUFMLEtBQUs7Ozs7O3VCQW5DTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQztnQ0FDM0MsS0FBSztRQXVDOUIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7O1lBQ3RCLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0tBQ0Y7Ozs7O0lBeENELElBQ0ksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5Qjs7Ozs7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUM7Ozs7SUFFRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBK0I7UUFDdEMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNuQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxFQUM1QixJQUFJLG1CQUFDLElBQUksQ0FBQyxJQUFXLEVBQUMsRUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNmLENBQUM7U0FDSDtLQUNGOzs7O0lBbUJELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUkscUJBQUcsWUFBbUIsQ0FBQSxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBR3hDLFdBQVc7UUFDVCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RDO0tBQ0Y7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXZEQyxVQUFVO1lBR1YsU0FBUztZQVNULFFBQVE7WUFHTyxlQUFlO1lBWDlCLE1BQU07WUFTTixRQUFRLHVCQXNGTCxRQUFROzs7OEJBL0JWLEtBQUssU0FBQyxXQUFXO21CQVFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5Q29tbW9uXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5pbnRlcmZhY2UgU2l6ZSB7XG4gIHNtYWxsOiBhbnk7XG4gIG1lZGl1bTogYW55O1xuICBsYXJnZTogYW55O1xufVxuXG5jb25zdCBTaXplID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgbWluV2lkdGg6ICc2NHB4J1xuICB9KSxcbiAgbWVkaXVtOiAoe1xuICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIG1pbldpZHRoOiAnODhweCdcbiAgfSksXG4gIGxhcmdlOiAodGhlbWUpID0+ICh7XG4gICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKSxcbiAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICBtaW5XaWR0aDogJzExMnB4J1xuICB9KVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFN0eWxlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlCdXR0b24nLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogUmVjb3JkPGtleW9mIFNpemUsIHN0cmluZz47XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogUmVjb3JkPGtleW9mIFNpemUsIHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogUmVjb3JkPGtleW9mIFNpemUsIHN0cmluZz4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZSBhcyBhbnldLFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb25cbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZShfbmdab25lLCByaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==