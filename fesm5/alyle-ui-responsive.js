import { Directive, Input, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MEDIA_PRIORITY = 999;
/** @type {?} */
var styles = {
    hide: {
        display: 'none'
    }
};
var MediaDirective = /** @class */ (function () {
    function MediaDirective(_renderer, _elementRef, theme) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles);
    }
    Object.defineProperty(MediaDirective.prototype, "lyShow", {
        /**
         * Shows the item when the value is resolved as true
         */
        get: /**
         * Shows the item when the value is resolved as true
         * @return {?}
         */
        function () {
            return this._show;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._show = val;
            this._showClass = this.theme.addStyle("lyMedia-show:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a[theme.getBreakpoint(val)] = {
                        display: 'block'
                    },
                    _a);
            }, this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaDirective.prototype, "lyHide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hide;
        },
        /**
         * Hides the item when the value is resolved as true
         */
        set: /**
         * Hides the item when the value is resolved as true
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hide = val;
            this._hideClass = this.theme.addStyle("lyMedia-hide:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a[theme.getBreakpoint(val)] = {
                        display: 'none'
                    },
                    _a);
            }, this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MediaDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.lyHide) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.hide);
        }
    };
    /**
     * @return {?}
     */
    MediaDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.lyHide && this.lyShow) {
            throw new Error("use only `lyHide` or `lyShow` per element");
        }
    };
    MediaDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lyShow], [lyHide]'
                },] }
    ];
    /** @nocollapse */
    MediaDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    MediaDirective.propDecorators = {
        lyShow: [{ type: Input }],
        lyHide: [{ type: Input }]
    };
    return MediaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ResponsiveModule = /** @class */ (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MediaDirective],
                    exports: [MediaDirective],
                },] }
    ];
    return ResponsiveModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var Breakpoints = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEvbWVkaWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEtcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBNRURJQV9QUklPUklUWSA9IDk5OTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG5cbiAgLyoqXG4gICAqIFNob3dzIHRoZSBpdGVtIHdoZW4gdGhlIHZhbHVlIGlzIHJlc29sdmVkIGFzIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBseVNob3coKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcbiAgfVxuICBzZXQgbHlTaG93KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2hvdyA9IHZhbDtcbiAgICB0aGlzLl9zaG93Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLXNob3c6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT5cbiAgICAoe1xuICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQodmFsKV06IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9zaG93Q2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBpdGVtIHdoZW4gdGhlIHZhbHVlIGlzIHJlc29sdmVkIGFzIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBseUhpZGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oaWRlID0gdmFsO1xuICAgIHRoaXMuX2hpZGVDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtaGlkZToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PlxuICAgICh7XG4gICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCh2YWwpXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5faGlkZUNsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIGdldCBseUhpZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5seUhpZGUpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmx5SGlkZSAmJiB0aGlzLmx5U2hvdykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2Ugb25seSBcXGBseUhpZGVcXGAgb3IgXFxgbHlTaG93XFxgIHBlciBlbGVtZW50YCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBSZXNwb25zaXZlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYURpcmVjdGl2ZSB9IGZyb20gJy4vbWVkaWEvbWVkaWEuZGlyZWN0aXZlJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm92aWRlckZhY3RvcnkoXG4vLyAgIHBhcmVudDogUmVzcG9uc2l2ZSwgbmdab25lOiBOZ1pvbmUsIHBsYXRmb3JtSWQ6IE9iamVjdCk6IFJlc3BvbnNpdmUge1xuLy8gcmV0dXJuIHBhcmVudCB8fCBuZXcgUmVzcG9uc2l2ZShuZ1pvbmUsIHBsYXRmb3JtSWQpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgcmVzcG9uc2l2ZVByb3ZpZGVyOiBQcm92aWRlciA9IHtcbi8vICAgcHJvdmlkZTogUmVzcG9uc2l2ZSxcbi8vICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFJlc3BvbnNpdmVdLCBOZ1pvbmUsIFBMQVRGT1JNX0lEXSxcbi8vICAgdXNlRmFjdG9yeTogcmVzcG9uc2l2ZVByb3ZpZGVyRmFjdG9yeVxuLy8gfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVkaWFEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTWVkaWFEaXJlY3RpdmVdLFxuICAvLyBwcm92aWRlcnM6IFtyZXNwb25zaXZlUHJvdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQnJlYWtwb2ludHMgPSB7XG4gIFhTbWFsbDogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gIFNtYWxsOiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknLFxuICBNZWRpdW06ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknLFxuICBMYXJnZTogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknLFxuICBYTGFyZ2U6ICcobWluLXdpZHRoOiAxOTIwcHgpJyxcblxuICBIYW5kc2V0OiAnKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgICAgICcobWF4LXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFRhYmxldDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgICAgJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgV2ViOiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG5cbiAgSGFuZHNldFBvcnRyYWl0OiAnKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFRhYmxldFBvcnRyYWl0OiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgV2ViUG9ydHJhaXQ6ICcobWluLXdpZHRoOiA4NDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcblxuICBIYW5kc2V0TGFuZHNjYXBlOiAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXRMYW5kc2NhcGU6ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYkxhbmRzY2FwZTogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQVdBLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7QUFFM0IsSUFBTSxNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtLQUNoQjtDQUNGLENBQUM7O0lBNERBLHdCQUNVLFdBQ0EsYUFDQTtRQUZBLGNBQVMsR0FBVCxTQUFTO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7Ozs7O1FBaERmLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FpRHRDO0lBNUNMLHNCQUNJLGtDQUFNOzs7Ozs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQUNELFVBQVcsR0FBVztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNq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