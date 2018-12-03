/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_SIZE = 40;
/** @type {?} */
const DEFAULT_BG = 'background:base';
/** @type {?} */
const STYLES = ({
    root: {
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1.25em',
        flexShrink: 0,
        alignItems: 'center',
        userSelect: 'none',
        borderRadius: '50%',
        textAlign: 'center',
        justifyContent: 'center'
    }
});
/**
 * \@docs-private
 */
export class LyAvatarBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
if (false) {
    /** @type {?} */
    LyAvatarBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase))))))));
export class LyAvatar extends LyAvatarMixinBase {
    /**
     * @param {?} theme
     * @param {?} renderer
     * @param {?} _elementRef
     */
    constructor(theme, renderer, _elementRef) {
        super(theme);
        this._elementRef = _elementRef;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this._theme.addStyle(`lyAvatar.size:${val}`, {
                width: `${val}px`,
                height: `${val}px`,
            }, this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
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
    ngOnChanges() {
        this.updateStyle(this._elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
}
LyAvatar.decorators = [
    { type: Directive, args: [{
                selector: 'ly-avatar',
            },] }
];
/** @nocollapse */
LyAvatar.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyAvatar.propDecorators = {
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyAvatar.prototype.classes;
    /** @type {?} */
    LyAvatar.prototype._size;
    /** @type {?} */
    LyAvatar.prototype._sizeClass;
    /** @type {?} */
    LyAvatar.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBRWhCLE1BQU0sV0FBVyxDQUFDOztNQUVmLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLFlBQVksR0FBRyxFQUFFOztNQUNqQixVQUFVLEdBQUcsaUJBQWlCOztNQUM5QixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsY0FBYyxFQUFFLFFBQVE7S0FDekI7Q0FDRixDQUFDOzs7O0FBR0YsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsWUFDUyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQ3JCLENBQUM7Q0FDTjs7O0lBRkcsOEJBQXVCOzs7Ozs7QUFLM0IsTUFBTSxPQUFPLGlCQUFpQixHQUFHLGlCQUFpQixDQUNoRCxPQUFPLENBQ0wsU0FBUyxDQUNQLFVBQVUsQ0FDUixXQUFXLENBQ1QsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQVFuRCxNQUFNLE9BQU8sUUFBUyxTQUFRLGlCQUFpQjs7Ozs7O0lBaUI3QyxZQUNFLEtBQWUsRUFDZixRQUFtQixFQUNYLFdBQXVCO1FBRS9CLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUZMLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBbkJ4QixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBc0JuRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFyQkQsSUFDSSxJQUFJLENBQUMsR0FBVztRQUNsQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxFQUFFO2dCQUM3RCxLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBSTthQUNuQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFXRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUl0Qjs7OztZQW5EQyxRQUFRO1lBRmdELFNBQVM7WUFBeEMsVUFBVTs7O21CQTBEbEMsS0FBSzs7OztJQUhOLDJCQUFxRTs7SUFDckUseUJBQXNCOztJQUN0Qiw4QkFBMkI7O0lBaUJ6QiwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluRmxhdCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlc1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1NJWkUgPSA0MDtcbmNvbnN0IERFRkFVTFRfQkcgPSAnYmFja2dyb3VuZDpiYXNlJztcbmNvbnN0IFNUWUxFUyA9ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZvbnRTaXplOiAnMS4yNWVtJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QXZhdGFyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlBdmF0YXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICBtaXhpbkZsYXQoXG4gICAgICBtaXhpbkNvbG9yKFxuICAgICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlBdmF0YXJCYXNlKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWF2YXRhcicsXG4gIC8vIGhvc3Q6IHtcbiAgLy8gICAnW2NsYXNzXSc6ICdjbGFzc2VzLnJvb3QnXG4gIC8vIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlBdmF0YXIgZXh0ZW5kcyBMeUF2YXRhck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3NpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5QXZhdGFyLnNpemU6JHt2YWx9YCwge1xuICAgICAgICB3aWR0aDogYCR7dmFsfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHt2YWx9cHhgLFxuICAgICAgfSwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9zaXplQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxufVxuIl19