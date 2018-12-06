/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyIconService } from './icon.service';
import { take } from 'rxjs/operators';
import { Platform, LyTheme2, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/**
 * \@docs-private
 */
export class LyIconBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
if (false) {
    /** @type {?} */
    LyIconBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
export class LyIcon extends LyIconMixinBase {
    /**
     * @param {?} iconService
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} theme
     */
    constructor(iconService, _el, _renderer, theme) {
        super(theme);
        this.iconService = iconService;
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set icon(val) {
        this._icon = val;
        if (Platform.isBrowser) {
            this._prepareSvgIcon(this.iconService.getSvg(val));
        }
        else {
            this._appendDefaultSvgIcon();
        }
    }
    /**
     * @return {?}
     */
    get fontSet() {
        return this._fontSet;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set fontSet(key) {
        this._fontSet = key;
    }
    /**
     * @return {?}
     */
    get fontIcon() {
        return this._fontIcon;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set fontIcon(key) {
        this._fontIcon = key;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    _isDefault() {
        return !(this.icon || this.fontSet);
    }
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    _prepareSvgIcon(svgIcon) {
        if (svgIcon.svg) {
            this._cleanIcon();
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe((svgElement) => {
                this._cleanIcon();
                this._appendChild((/** @type {?} */ (svgElement.cloneNode(true))));
            });
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _appendChild(svg) {
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    }
    /**
     * @return {?}
     */
    _appendDefaultSvgIcon() {
        this._appendChild(this.iconService.defaultSvgIcon);
    }
    /**
     * @return {?}
     */
    _updateClass() {
        if (this._isDefault()) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateClass();
        this._theme.addStyle('lyIconRoot', theme => (`font-size:${theme.icon.fontSize};` +
            `width:1em;` +
            `position:relative;` +
            `height:1em;` +
            `display:inline-flex;`), this._el.nativeElement, undefined, STYLE_PRIORITY);
    }
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    _cleanIcon() {
        /** @type {?} */
        const icon = this._el.nativeElement.querySelector('svg');
        if (icon) {
            this._renderer.removeChild(this._el, icon);
        }
    }
    /**
     * @return {?}
     */
    _updateFontClass() {
        /** @type {?} */
        const currentClass = this._currentClass;
        /** @type {?} */
        const fontSetKey = this.fontSet;
        /** @type {?} */
        const icon = this.fontIcon;
        /** @type {?} */
        const el = this._el.nativeElement;
        /** @type {?} */
        const iconClass = this.iconService.getFontClass(fontSetKey);
        if (currentClass) {
            this._renderer.removeClass(el, currentClass);
        }
        if (this._previousFontSet) {
            if (this._previousFontSet.class) {
                this._renderer.removeClass(el, this._previousFontSet.class);
            }
        }
        if (iconClass) {
            this._previousFontSet = iconClass;
        }
        else {
            Error(`Icon with key${fontSetKey} not found`);
        }
        this._currentClass = `${iconClass.prefix}${icon}`;
        this._renderer.addClass(el, this._currentClass);
    }
}
LyIcon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-icon',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                ],
            },] }
];
/** @nocollapse */
LyIcon.ctorParameters = () => [
    { type: LyIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
LyIcon.propDecorators = {
    icon: [{ type: Input }],
    fontSet: [{ type: Input }],
    fontIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyIcon.prototype._icon;
    /** @type {?} */
    LyIcon.prototype._fontSet;
    /** @type {?} */
    LyIcon.prototype._previousFontSet;
    /** @type {?} */
    LyIcon.prototype._currentClass;
    /** @type {?} */
    LyIcon.prototype._fontIcon;
    /** @type {?} */
    LyIcon.prototype.iconService;
    /** @type {?} */
    LyIcon.prototype._el;
    /** @type {?} */
    LyIcon.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBNkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7TUFFL0ksY0FBYyxHQUFHLENBQUMsQ0FBQzs7OztBQUd6QixNQUFNLE9BQU8sVUFBVTs7OztJQUNyQixZQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztDQUNOOzs7SUFGRyw0QkFBdUI7Ozs7OztBQUszQixNQUFNLE9BQU8sZUFBZSxHQUFHLGlCQUFpQixDQUNoRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQWM1QyxNQUFNLE9BQU8sTUFBTyxTQUFRLGVBQWU7Ozs7Ozs7SUFvQ3pDLFlBQ1UsV0FBMEIsRUFDMUIsR0FBZSxFQUNmLFNBQW9CLEVBQzVCLEtBQWU7UUFFZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFMTCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUk1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFD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O2FBQU07WUFDTCxLQUFLLENBQUMsZ0JBQWdCLFVBQVUsWUFBWSxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQS9JRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLE1BQU0sRUFBRTtvQkFDTixJQUFJO29CQUNKLE9BQU87b0JBQ1AsUUFBUTtvQkFDUixVQUFVO29CQUNWLFdBQVc7b0JBQ1gsYUFBYTtpQkFDZDthQUNGOzs7O1lBakNRLGFBQWE7WUFEZ0IsVUFBVTtZQUFyQixTQUFTO1lBR2pCLFFBQVE7OzttQkF1Q3hCLEtBQUs7c0JBYUwsS0FBSzt1QkFRTCxLQUFLOzs7O0lBM0JOLHVCQUFzQjs7SUFDdEIsMEJBQXlCOztJQUN6QixrQ0FBMkM7O0lBQzNDLCtCQUE4Qjs7SUFDOUIsMkJBQTBCOztJQWdDeEIsNkJBQWtDOztJQUNsQyxxQkFBdUI7O0lBQ3ZCLDJCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5SWNvblNlcnZpY2UsIFN2Z0ljb24sIEZvbnRDbGFzc09wdGlvbnMgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCBtaXhpblN0eWxlVXBkYXRlciwgbWl4aW5CZywgbWl4aW5Db2xvciwgbWl4aW5SYWlzZWQsIG1peGluT3V0bGluZWQsIG1peGluRWxldmF0aW9uLCBtaXhpblNoYWRvd0NvbG9yIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUljb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUljb25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5SWNvbkJhc2UpKSkpKSkpO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWljb24nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUljb24gZXh0ZW5kcyBMeUljb25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udFNldDogc3RyaW5nO1xuICBwcml2YXRlIF9wcmV2aW91c0ZvbnRTZXQ6IEZvbnRDbGFzc09wdGlvbnM7XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mb250SWNvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2Zyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udFNldCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250U2V0O1xuICB9XG4gIHNldCBmb250U2V0KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udFNldCA9IGtleTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250SWNvbjtcbiAgfVxuICBzZXQgZm9udEljb24oa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250SWNvbiA9IGtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvblNlcnZpY2U6IEx5SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5mb250U2V0IHx8IHRoaXMuZm9udEljb24pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZvbnRDbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLmljb24gfHwgdGhpcy5mb250U2V0KTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnSWNvbi5zdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmdJY29uLm9ic1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzdmcsIHRoaXMuaWNvblNlcnZpY2UuY2xhc3Nlcy5zdmcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREZWZhdWx0U3ZnSWNvbigpIHtcbiAgICB0aGlzLl9hcHBlbmRDaGlsZCh0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRTdmdJY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLl9pc0RlZmF1bHQoKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5SWNvblJvb3QnLCB0aGVtZSA9PiAoXG4gICAgICBgZm9udC1zaXplOiR7dGhlbWUuaWNvbi5mb250U2l6ZX07YCArXG4gICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgXG4gICAgKSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLCBpY29uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGb250Q2xhc3MoKSB7XG5cbiAgICBjb25zdCBjdXJyZW50Q2xhc3MgPSB0aGlzLl9jdXJyZW50Q2xhc3M7XG4gICAgY29uc3QgZm9udFNldEtleSA9IHRoaXMuZm9udFNldDtcbiAgICBjb25zdCBpY29uID0gdGhpcy5mb250SWNvbjtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaWNvbkNsYXNzID0gdGhpcy5pY29uU2VydmljZS5nZXRGb250Q2xhc3MoZm9udFNldEtleSk7XG4gICAgaWYgKGN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQpIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpY29uQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzRm9udFNldCA9IGljb25DbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgRXJyb3IoYEljb24gd2l0aCBrZXkke2ZvbnRTZXRLZXl9IG5vdCBmb3VuZGApO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50Q2xhc3MgPSBgJHtpY29uQ2xhc3MucHJlZml4fSR7aWNvbn1gO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsLCB0aGlzLl9jdXJyZW50Q2xhc3MpO1xuICB9XG59XG4iXX0=