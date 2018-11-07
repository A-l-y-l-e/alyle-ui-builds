/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyIconService } from './icon.service';
import { take } from 'rxjs/operators';
import { Platform, LyTheme2 } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
export class Icon {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     */
    constructor(iconService, elementRef, renderer, theme) {
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this._defaultClass = 'material-icons';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set src(val) {
        this._src = val;
        if (Platform.isBrowser) {
            if (val) {
                /** @type {?} */
                const key = `_url:${val}`;
                this.iconService.setSvg(key, val);
                this._prepareSvgIcon(this.iconService.getSvg(key));
            }
        }
        else {
            this._appendDefaultSvgIcon();
        }
    }
    /**
     * @return {?}
     */
    get src() {
        return this._src;
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
    get icon() {
        return this._icon;
    }
    /**
     * @return {?}
     */
    _isDefault() {
        return !(this.src || this.icon);
    }
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    _prepareSvgIcon(svgIcon) {
        if (svgIcon.svg) {
            this._cleanIcon();
            this._appendChild(/** @type {?} */ (svgIcon.svg.cloneNode(true)));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe((svgElement) => {
                this._cleanIcon();
                this._appendChild(/** @type {?} */ (svgElement.cloneNode(true)));
            });
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _appendChild(svg) {
        this.renderer.addClass(svg, this.iconService.classes.svg);
        this.renderer.appendChild(this.elementRef.nativeElement, svg);
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
            this.renderer.addClass(this.elementRef.nativeElement, this._defaultClass);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateClass();
        this.theme.addStyle('lyIconRoot', theme => (`font-size:${theme.icon.fontSize};` +
            `width:1em;` +
            `height:1em;` +
            `display:inline-flex;`), this.elementRef.nativeElement, undefined, STYLE_PRIORITY);
    }
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    _cleanIcon() {
        /** @type {?} */
        const icon = this.elementRef.nativeElement.querySelector('svg');
        if (icon) {
            this.renderer.removeChild(this.elementRef, icon);
        }
    }
}
Icon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-icon'
            },] }
];
/** @nocollapse */
Icon.ctorParameters = () => [
    { type: LyIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
Icon.propDecorators = {
    src: [{ type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    Icon.prototype._defaultClass;
    /** @type {?} */
    Icon.prototype._src;
    /** @type {?} */
    Icon.prototype._icon;
    /** @type {?} */
    Icon.prototype.iconService;
    /** @type {?} */
    Icon.prototype.elementRef;
    /** @type {?} */
    Icon.prototype.renderer;
    /** @type {?} */
    Icon.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFXLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUUvQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUsxQixNQUFNLE9BQU8sSUFBSTs7Ozs7OztJQWlDZixZQUNVLGFBQ0EsWUFDQSxVQUNBO1FBSEEsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLOzZCQXBDUyxnQkFBZ0I7S0FxQ25DOzs7OztJQWxDTCxJQUNJLEdBQUcsQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLEdBQUcsRUFBRTs7Z0JBQ1AsTUFBTSxHQUFHLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7S0FDRjs7OztJQUNELElBQUksR0FBRztRQUNMLE9BQU8s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aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5SWNvblNlcnZpY2UsIFN2Z0ljb24gfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaWNvbidcbn0pXG5leHBvcnQgY2xhc3MgSWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzcyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIHByaXZhdGUgX3NyYzogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjb25zdCBrZXkgPSBgX3VybDoke3ZhbH1gO1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLnNldFN2ZyhrZXksIHZhbCk7XG4gICAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgc3JjKCkge1xuICAgIHJldHVybiB0aGlzLl9zcmM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuc3JjIHx8IHRoaXMuaWNvbik7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0ljb24uc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnSWNvbi5vYnNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHN2Z0VsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ2hpbGQoc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsIHRoaXMuaWNvblNlcnZpY2UuY2xhc3Nlcy5zdmcpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREZWZhdWx0U3ZnSWNvbigpIHtcbiAgICB0aGlzLl9hcHBlbmRDaGlsZCh0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRTdmdJY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLl9pc0RlZmF1bHQoKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGVmYXVsdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgIHRoaXMudGhlbWUuYWRkU3R5bGUoJ2x5SWNvblJvb3QnLCB0aGVtZSA9PiAoXG4gICAgICBgZm9udC1zaXplOiR7dGhlbWUuaWNvbi5mb250U2l6ZX07YCArXG4gICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgXG4gICAgKSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1biBvbmx5IGJyb3dzZXJcbiAgICogcmVtb3ZlIGN1cnJlbnQgaWNvblxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYW5JY29uKCkge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYsIGljb24pO1xuICAgIH1cbiAgfVxufVxuIl19