import { Directive, Input, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MEDIA_PRIORITY = 999;
/** @type {?} */
const styles = {
    hide: {
        display: 'none'
    }
};
class MediaDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} theme
     */
    constructor(_renderer, _elementRef, theme) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, 'lyMedia');
    }
    /**
     * Shows the item when the value is resolved as true
     * @return {?}
     */
    get lyShow() {
        return this._show;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyShow(val) {
        this._show = val;
        this._showClass = this.theme.addStyle(`lyMedia-show:${val}`, (theme) => ({
            [theme.getBreakpoint(val)]: {
                display: 'block'
            }
        }), this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
    }
    /**
     * Hides the item when the value is resolved as true
     * @param {?} val
     * @return {?}
     */
    set lyHide(val) {
        this._hide = val;
        this._hideClass = this.theme.addStyle(`lyMedia-hide:${val}`, (theme) => ({
            [theme.getBreakpoint(val)]: {
                display: 'none'
            }
        }), this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
    }
    /**
     * @return {?}
     */
    get lyHide() {
        return this._hide;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.lyHide) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.hide);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.lyHide && this.lyShow) {
            throw new Error(`use only \`lyHide\` or \`lyShow\` per element`);
        }
    }
}
MediaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lyShow], [lyHide]'
            },] },
];
/** @nocollapse */
MediaDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
MediaDirective.propDecorators = {
    lyShow: [{ type: Input }],
    lyHide: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResponsiveModule {
}
ResponsiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MediaDirective],
                exports: [MediaDirective],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const Breakpoints = {
    XSmall: '(max-width: 599px)',
    Small: '(min-width: 600px) and (max-width: 959px)',
    Medium: '(min-width: 960px) and (max-width: 1279px)',
    Large: '(min-width: 1280px) and (max-width: 1919px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599px) and (orientation: portrait), ' +
        '(max-width: 959px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MediaDirective, ResponsiveModule, Breakpoints };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEvbWVkaWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEtcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBNRURJQV9QUklPUklUWSA9IDk5OTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5TWVkaWEnKTtcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5U2hvdygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaG93O1xuICB9XG4gIHNldCBseVNob3codmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsO1xuICAgIHRoaXMuX3Nob3dDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtc2hvdzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PlxuICAgICh7XG4gICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCh2YWwpXToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX3Nob3dDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGx5SGlkZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2hpZGUgPSB2YWw7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1oaWRlOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+XG4gICAgKHtcbiAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KHZhbCldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9oaWRlQ2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGx5SGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmx5SGlkZSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMubHlIaWRlICYmIHRoaXMubHlTaG93KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSBvbmx5IFxcYGx5SGlkZVxcYCBvciBcXGBseVNob3dcXGAgcGVyIGVsZW1lbnRgKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IFJlc3BvbnNpdmUgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhRGlyZWN0aXZlIH0gZnJvbSAnLi9tZWRpYS9tZWRpYS5kaXJlY3RpdmUnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVByb3ZpZGVyRmFjdG9yeShcbi8vICAgcGFyZW50OiBSZXNwb25zaXZlLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm1JZDogT2JqZWN0KTogUmVzcG9uc2l2ZSB7XG4vLyByZXR1cm4gcGFyZW50IHx8IG5ldyBSZXNwb25zaXZlKG5nWm9uZSwgcGxhdGZvcm1JZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCByZXNwb25zaXZlUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuLy8gICBwcm92aWRlOiBSZXNwb25zaXZlLFxuLy8gICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgUmVzcG9uc2l2ZV0sIE5nWm9uZSwgUExBVEZPUk1fSURdLFxuLy8gICB1c2VGYWN0b3J5OiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5XG4vLyB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIC8vIHByb3ZpZGVyczogW3Jlc3BvbnNpdmVQcm92aWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBCcmVha3BvaW50cyA9IHtcbiAgWFNtYWxsOiAnKG1heC13aWR0aDogNTk5cHgpJyxcbiAgU21hbGw6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXG4gIE1lZGl1bTogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KScsXG4gIExhcmdlOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXG4gIFhMYXJnZTogJyhtaW4td2lkdGg6IDE5MjBweCknLFxuXG4gIEhhbmRzZXQ6ICcobWF4LXdpZHRoOiA1OTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAgICAgJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0OiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAgICAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWI6ICcobWluLXdpZHRoOiA4NDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcblxuICBIYW5kc2V0UG9ydHJhaXQ6ICcobWF4LXdpZHRoOiA1OTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgVGFibGV0UG9ydHJhaXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBXZWJQb3J0cmFpdDogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuXG4gIEhhbmRzZXRMYW5kc2NhcGU6ICcobWF4LXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFRhYmxldExhbmRzY2FwZTogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgV2ViTGFuZHNjYXBlOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBV0EsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDOztBQUUzQixNQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0NBQ0YsQ0FBQztBQUtGOzs7Ozs7SUF1REUsWUFDVSxXQUNBLGFBQ0E7UUFGQSxjQUFTLEdBQVQsU0FBUztRQUNULGdCQUFXLEdBQVgsV0FBVztRQUNYLFVBQUssR0FBTCxLQUFLOzs7Ozt1QkFoREwsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztLQWlEaEQ7Ozs7O0lBNUNMLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFL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