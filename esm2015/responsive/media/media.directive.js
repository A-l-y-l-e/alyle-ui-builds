/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '../tokens';
/** @type {?} */
const MEDIA_PRIORITY = 999;
/** @type {?} */
const styles = {
    hide: {
        display: 'none'
    }
};
export class MediaDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} theme
     * @param {?} mediaQueries
     */
    constructor(_renderer, _elementRef, theme, mediaQueries) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        this.mediaQueries = mediaQueries;
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
        this._showClass = this.theme.addStyle(`lyMedia-show:${val}`, {
            [`@media ${this.mediaQueries[val] || val}`]: {
                display: `block`
            }
        }, this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
    }
    /**
     * Hides the item when the value is resolved as true
     * @param {?} val
     * @return {?}
     */
    set lyHide(val) {
        this._hide = val;
        this._hideClass = this.theme.addStyle(`lyMedia-hide:${val}`, {
            [`@media ${this.mediaQueries[val] || val}`]: {
                display: 'none'
            }
        }, this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
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
    { type: LyTheme2 },
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
    /**
     * Styles
     * @ignore
     * @type {?}
     */
    MediaDirective.prototype.classes;
    /** @type {?} */
    MediaDirective.prototype._renderer;
    /** @type {?} */
    MediaDirective.prototype._elementRef;
    /** @type {?} */
    MediaDirective.prototype.theme;
    /** @type {?} */
    MediaDirective.prototype.mediaQueries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUU3QyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7O0FBRTNCLE1BQU0sTUFBTSxHQUFHO0lBQ2IsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07S0FDaEI7Q0FDRixDQUFDO0FBS0YsTUFBTTs7Ozs7OztJQXVESixZQUNVLFdBQ0EsYUFDQSxPQUMwQixZQUFpQjtRQUgzQyxjQUFTLEdBQVQsU0FBUztRQUNULGdCQUFXLEdBQVgsV0FBVztRQUNYLFVBQUssR0FBTCxLQUFLO1FBQ3FCLGlCQUFZLEdBQVosWUFBWSxDQUFLOzs7Ozt1QkFqRDNDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7S0FrRGhEOzs7OztJQTdDTCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFDM0Q7WUFDRSxDQUFDLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsT0FBTzthQUNqQjtTQUNGLEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7S0FDSDs7Ozs7O0lBS0QsSUFDSSxNQUFNLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFDM0Q7WUFDRSxDQUFDLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsTUFBTTthQUNoQjtTQUNGLEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7S0FDSDs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7OztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVFO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0Y7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQWpCQyxTQUFTO1lBQ1QsVUFBVTtZQUdILFFBQVE7NENBeUVaLE1BQU0sU0FBQyxnQkFBZ0I7OztxQkE1Q3pCLEtBQUs7cUJBcUJMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5jb25zdCBNRURJQV9QUklPUklUWSA9IDk5OTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5TWVkaWEnKTtcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5U2hvdygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaG93O1xuICB9XG4gIHNldCBseVNob3codmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsO1xuICAgIHRoaXMuX3Nob3dDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtc2hvdzoke3ZhbH1gLFxuICAgIHtcbiAgICAgIFtgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YF06IHtcbiAgICAgICAgZGlzcGxheTogYGJsb2NrYFxuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX3Nob3dDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGx5SGlkZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2hpZGUgPSB2YWw7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1oaWRlOiR7dmFsfWAsXG4gICAge1xuICAgICAgW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9oaWRlQ2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGx5SGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSwgLy8geyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH1cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=