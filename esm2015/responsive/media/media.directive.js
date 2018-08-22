/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '../tokens';
export class MediaDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} coreTheme
     * @param {?} mediaQueries
     */
    constructor(_renderer, _elementRef, coreTheme, mediaQueries) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.coreTheme = coreTheme;
        this.mediaQueries = mediaQueries;
        this.classes = {
            hide: this.coreTheme.setUpStyle('k-media-hide', 'display:none;', 'all')
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyShow(val) {
        this._show = val;
        /** @type {?} */
        const newClass = this.coreTheme.setUpStyle(`k-media-show-${val}`, (`display: block;`), `${this.mediaQueries[val] || val}` // , InvertMediaQuery.Yes
        );
        this.coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, this._showClass);
        this._showClass = newClass;
    }
    /**
     * @return {?}
     */
    get lyShow() {
        return this._show;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyHide(val) {
        this._hide = val;
        /** @type {?} */
        const newClass = this.coreTheme.setUpStyle(`k-media-hide-${val}`, (`display: none !important;`), `${this.mediaQueries[val] || val}`);
        this.coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, this._hideClass);
        this._hideClass = newClass;
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
    { type: CoreTheme },
    { type: undefined, decorators: [{ type: Inject, args: [LY_MEDIA_QUERIES,] }] }
];
MediaDirective.propDecorators = {
    lyShow: [{ type: Input }],
    lyHide: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MediaDirective.prototype._show;
    /** @type {?} */
    MediaDirective.prototype._showClass;
    /** @type {?} */
    MediaDirective.prototype._hide;
    /** @type {?} */
    MediaDirective.prototype._hideClass;
    /** @type {?} */
    MediaDirective.prototype.classes;
    /** @type {?} */
    MediaDirective.prototype._renderer;
    /** @type {?} */
    MediaDirective.prototype._elementRef;
    /** @type {?} */
    MediaDirective.prototype.coreTheme;
    /** @type {?} */
    MediaDirective.prototype.mediaQueries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSzdDLE1BQU07Ozs7Ozs7SUE2Q0osWUFDVSxXQUNBLGFBQ0EsV0FDMEIsWUFBaUI7UUFIM0MsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNpQixpQkFBWSxHQUFaLFlBQVksQ0FBSzt1QkE1QzNDO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDO1NBQ3hFO0tBMkNJOzs7OztJQXpDTCxJQUNJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOztRQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEVBQ2hFLENBQ0UsaUJBQWlCLENBQ2xCLEVBRUQsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRTtTQUNqQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0tBQzVCOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksTUFBTSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O1FBQ2pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFDaEUsQ0FDRSwyQkFBMkIsQ0FDNUIsRUFFRCxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7S0FDNUI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RTtLQUNGOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7Ozs7WUFUQyxTQUFTO1lBQ1QsVUFBVTtZQUdILFNBQVM7NENBdURiLE1BQU0sU0FBQyxnQkFBZ0I7OztxQkF4Q3pCLEtBQUs7cUJBa0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuICBjbGFzc2VzID0ge1xuICAgIGhpZGU6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2stbWVkaWEtaGlkZScsICdkaXNwbGF5Om5vbmU7JywgJ2FsbCcpXG4gIH07XG5cbiAgQElucHV0KClcbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKGBrLW1lZGlhLXNob3ctJHt2YWx9YCxcbiAgICAoXG4gICAgICBgZGlzcGxheTogYmxvY2s7YFxuICAgIClcbiAgICAsXG4gICAgYCR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YC8vICwgSW52ZXJ0TWVkaWFRdWVyeS5ZZXNcbiAgICApO1xuICAgIHRoaXMuY29yZVRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fc2hvd0NsYXNzKTtcbiAgICB0aGlzLl9zaG93Q2xhc3MgPSBuZXdDbGFzcztcbiAgfVxuXG4gIGdldCBseVNob3coKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBseUhpZGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oaWRlID0gdmFsO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShgay1tZWRpYS1oaWRlLSR7dmFsfWAsXG4gICAgKFxuICAgICAgYGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtgXG4gICAgKVxuICAgICxcbiAgICBgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXG4gICAgKTtcbiAgICB0aGlzLmNvcmVUaGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2hpZGVDbGFzcyk7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gbmV3Q2xhc3M7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksIC8vIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmx5SGlkZSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==