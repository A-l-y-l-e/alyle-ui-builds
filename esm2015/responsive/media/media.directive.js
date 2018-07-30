/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ newClass = this.coreTheme.setUpStyle(`k-media-show-${val}`, (`display: block;`), `${this.mediaQueries[val] || val}` // , InvertMediaQuery.Yes
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
        const /** @type {?} */ newClass = this.coreTheme.setUpStyle(`k-media-hide-${val}`, (`display: none !important;`), `${this.mediaQueries[val] || val}`);
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
    { type: Renderer2, },
    { type: ElementRef, },
    { type: CoreTheme, },
    { type: undefined, decorators: [{ type: Inject, args: [LY_MEDIA_QUERIES,] },] },
];
MediaDirective.propDecorators = {
    "lyShow": [{ type: Input },],
    "lyHide": [{ type: Input },],
};
function MediaDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MediaDirective.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSzdDLE1BQU07Ozs7Ozs7SUE2Q0osWUFDVSxXQUNBLGFBQ0EsV0FDMEI7UUFIMUIsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNpQixpQkFBWSxHQUFaLFlBQVk7dUJBNUN0QztZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQztTQUN4RTtLQTJDSTs7Ozs7UUF4Q0QsTUFBTSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFDaEUsQ0FDRSxpQkFBaUIsQ0FDbEIsRUFFRCxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Ozs7O0lBRzdCLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7UUFHRyxNQUFNLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxFQUNoRSxDQUNFLDJCQUEyQixDQUM1QixFQUVELEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FDakMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzs7Ozs7SUFHN0IsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7O0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUU7S0FDRjs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBVEMsU0FBUztZQUNULFVBQVU7WUFHSCxTQUFTOzRDQXVEYixNQUFNLFNBQUMsZ0JBQWdCOzs7dUJBeEN6QixLQUFLO3VCQWtCTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfc2hvdzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG93Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZTogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlQ2xhc3M6IHN0cmluZztcbiAgY2xhc3NlcyA9IHtcbiAgICBoaWRlOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdrLW1lZGlhLWhpZGUnLCAnZGlzcGxheTpub25lOycsICdhbGwnKVxuICB9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVNob3codmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShgay1tZWRpYS1zaG93LSR7dmFsfWAsXG4gICAgKFxuICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICApXG4gICAgLFxuICAgIGAke3RoaXMubWVkaWFRdWVyaWVzW3ZhbF0gfHwgdmFsfWAvLyAsIEludmVydE1lZGlhUXVlcnkuWWVzXG4gICAgKTtcbiAgICB0aGlzLmNvcmVUaGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3Nob3dDbGFzcyk7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gbmV3Q2xhc3M7XG4gIH1cblxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoYGstbWVkaWEtaGlkZS0ke3ZhbH1gLFxuICAgIChcbiAgICAgIGBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7YFxuICAgIClcbiAgICAsXG4gICAgYCR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YFxuICAgICk7XG4gICAgdGhpcy5jb3JlVGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9oaWRlQ2xhc3MpO1xuICAgIHRoaXMuX2hpZGVDbGFzcyA9IG5ld0NsYXNzO1xuICB9XG5cbiAgZ2V0IGx5SGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LCAvLyB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5seUhpZGUpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=