/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Optional, Renderer2, ElementRef, Input } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = 'fixed';
/** @type {?} */
const DEFAULT_BG = 'background:tertiary';
/** @type {?} */
const styles = (theme) => ({
    root: {
        padding: '0 16px',
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        height: '64px',
        zIndex: theme.zIndex.toolbar,
        [theme.getBreakpoint('XSmall')]: {
            height: '56px'
        }
    }
});
const ɵ0 = styles;
/** @typedef {?} */
var position;
export class LyToolbar {
    /**
     * @param {?} renderer
     * @param {?} _el
     * @param {?} theme
     * @param {?} _common
     */
    constructor(renderer, _el, theme, _common) {
        this._el = _el;
        this.theme = theme;
        this._common = _common;
        this.classes = this.theme.addStyleSheet(styles, 'ly-toolbar', STYLE_PRIORITY);
        renderer.addClass(this._el.nativeElement, this.classes.root);
        if (this._common) {
            this._common.setAutoContrast();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set position(val) {
        this._position = val;
        this._positionClass = this.theme.addStyle(`ly-toolbar-position:${val}`, `position:${val}`, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this._common.bg) {
            this._common.bg = DEFAULT_BG;
            this._common.ngOnChanges();
        }
    }
}
LyToolbar.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar'
            },] },
];
/** @nocollapse */
LyToolbar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
LyToolbar.propDecorators = {
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyToolbar.prototype.classes;
    /** @type {?} */
    LyToolbar.prototype._position;
    /** @type {?} */
    LyToolbar.prototype._positionClass;
    /** @type {?} */
    LyToolbar.prototype._el;
    /** @type {?} */
    LyToolbar.prototype.theme;
    /** @type {?} */
    LyToolbar.prototype._common;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztBQUUvRCxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0FBQ2pDLE1BQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDOztBQUV6QyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsTUFBTTtRQUNiLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUM1QixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUMvQixNQUFNLEVBQUUsTUFBTTtTQUNmO0tBQ0Y7Q0FDRixDQUFDLENBQUM7Ozs7QUFPSCxNQUFNOzs7Ozs7O0lBWUosWUFDRSxRQUFtQixFQUNYLEtBQ0EsT0FDWSxPQUFpQjtRQUY3QixRQUFHLEdBQUgsR0FBRztRQUNILFVBQUssR0FBTCxLQUFLO1FBQ08sWUFBTyxHQUFQLE9BQU8sQ0FBVTt1QkFmN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7UUFpQnRFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNoQztLQUNGOzs7OztJQWxCRCxJQUNJLFFBQVEsQ0FBQyxHQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN6Sjs7OztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFoQ0MsU0FBUztZQUNULFVBQVU7WUFJTyxRQUFRO1lBQWxCLFFBQVEsdUJBNENaLFFBQVE7Ozt1QkFaVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2ZpeGVkJztcbmNvbnN0IERFRkFVTFRfQkcgPSAnYmFja2dyb3VuZDp0ZXJ0aWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC50b29sYmFyLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIGhlaWdodDogJzU2cHgnXG4gICAgfVxuICB9XG59KTtcblxudHlwZSBwb3NpdGlvbiA9ICdzdGF0aWMnIHwgJ2Fic29sdXRlJyB8ICdmaXhlZCcgfCAnc3RpY2t5JyB8ICdyZWxhdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXInXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHktdG9vbGJhcicsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IHBvc2l0aW9uO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5LXRvb2xiYXItcG9zaXRpb246JHt2YWx9YCwgYHBvc2l0aW9uOiR7dmFsfWAsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfY29tbW9uOiBMeUNvbW1vblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKHRoaXMuX2NvbW1vbikge1xuICAgICAgdGhpcy5fY29tbW9uLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5fY29tbW9uLmJnKSB7XG4gICAgICB0aGlzLl9jb21tb24uYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5fY29tbW9uLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=