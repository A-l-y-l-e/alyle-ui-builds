/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_SIZE = 40;
/** @type {?} */
var DEFAULT_BG = 'action';
/** @type {?} */
var STYLES = ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1.25em',
        flexShrink: 0,
        alignItems: 'center',
        userSelect: 'none',
        borderRadius: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        '&>img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'block',
            objectFit: 'cover',
            '-webkit-background-clip': 'padding-box'
        }
    }
});
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyAvatarBase = /** @class */ (function () {
    function LyAvatarBase(_theme) {
        this._theme = _theme;
    }
    return LyAvatarBase;
}());
/**
 * \@docs-private
 */
export { LyAvatarBase };
if (false) {
    /** @type {?} */
    LyAvatarBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
var LyAvatar = /** @class */ (function (_super) {
    tslib_1.__extends(LyAvatar, _super);
    function LyAvatar(theme, renderer, _elementRef) {
        var _this = _super.call(this, theme) || this;
        _this._elementRef = _elementRef;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        var avatar = _this._theme.variables.avatar;
        _this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, _this.classes.root);
        if (avatar) {
            if (avatar.root) {
                renderer.addClass(_this._elementRef.nativeElement, _this._theme.style(avatar.root, STYLE_PRIORITY, STYLES));
            }
        }
        return _this;
    }
    Object.defineProperty(LyAvatar.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.size) {
                this._size = val;
                this._sizeClass = this._theme.addStyle("lyAvatar.size:" + val, {
                    width: val + "px",
                    height: val + "px",
                }, this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyAvatar.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._elementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    LyAvatar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    LyAvatar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-avatar',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                    ]
                },] }
    ];
    /** @nocollapse */
    LyAvatar.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyAvatar.propDecorators = {
        size: [{ type: Input }]
    };
    return LyAvatar;
}(LyAvatarMixinBase));
export { LyAvatar };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyAvatar.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyAvatar.prototype._size;
    /**
     * @type {?}
     * @private
     */
    LyAvatar.prototype._sizeClass;
    /**
     * @type {?}
     * @private
     */
    LyAvatar.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2hCLE1BQU0sV0FBVyxDQUFDOztJQUVmLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLFlBQVksR0FBRyxFQUFFOztJQUNqQixVQUFVLEdBQUcsUUFBUTs7SUFDckIsTUFBTSxHQUFHLENBQUM7SUFDZCxTQUFTLEVBQUUsY0FBYztJQUN6QixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixTQUFTLEVBQUUsT0FBTztZQUNsQix5QkFBeUIsRUFBRSxhQUFhO1NBQ3pDO0tBQ0Y7Q0FDRixDQUFDOzs7O0FBR0Y7Ozs7SUFDRSxzQkFDUyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQ3JCLENBQUM7SUFDUCxtQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBRkcsOEJBQXVCOzs7Ozs7QUFLM0IsTUFBTSxLQUFPLGlCQUFpQixHQUFHLGlCQUFpQixDQUNoRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVoRDtJQVc4QixvQ0FBaUI7SUFrQjdDLGtCQUNFLEtBQWUsRUFDZixRQUFtQixFQUNYLFdBQXVCO1FBSGpDLFlBS0Usa0JBQU0sS0FBSyxDQUFDLFNBV2I7UUFiUyxpQkFBVyxHQUFYLFdBQVcsQ0FBWTs7OztRQW5CeEIsYUFBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQXNCM0QsSUFBQSxzQ0FBTTtRQUNkLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDZixRQUFRLENBQUMsUUFBUSxDQUNmLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzNEO1NBQ0Y7O0lBQ0gsQ0FBQztJQTdCRCxzQkFDSSwwQkFBSTs7OztRQVNSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBWkQsVUFDUyxHQUFXO1lBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFpQixHQUFLLEVBQUU7b0JBQzdELEtBQUssRUFBSyxHQUFHLE9BQUk7b0JBQ2pCLE1BQU0sRUFBSyxHQUFHLE9BQUk7aUJBQ25CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNyRTtRQUNILENBQUM7OztPQUFBOzs7O0lBc0JELDhCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsMkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osT0FBTzt3QkFDUCxRQUFRO3dCQUNSLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxhQUFhO3FCQUNkO2lCQUNGOzs7O2dCQTlEQyxRQUFRO2dCQUZnRCxTQUFTO2dCQUF4QyxVQUFVOzs7dUJBc0VsQyxLQUFLOztJQTRDUixlQUFDO0NBQUEsQUE1REQsQ0FXOEIsaUJBQWlCLEdBaUQ5QztTQWpEWSxRQUFROzs7Ozs7SUFFbkIsMkJBQXFFOzs7OztJQUNyRSx5QkFBc0I7Ozs7O0lBQ3RCLDhCQUEyQjs7Ozs7SUFpQnpCLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfU0laRSA9IDQwO1xuY29uc3QgREVGQVVMVF9CRyA9ICdhY3Rpb24nO1xuY29uc3QgU1RZTEVTID0gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udFNpemU6ICcxLjI1ZW0nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyY+aW1nJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAnLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXAnOiAncGFkZGluZy1ib3gnXG4gICAgfVxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUF2YXRhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QXZhdGFyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUF2YXRhckJhc2UpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hdmF0YXInLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5QXZhdGFyIGV4dGVuZHMgTHlBdmF0YXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseUF2YXRhci5zaXplOiR7dmFsfWAsIHtcbiAgICAgICAgd2lkdGg6IGAke3ZhbH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7dmFsfXB4YCxcbiAgICAgIH0sIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fc2l6ZUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIGNvbnN0IHsgYXZhdGFyIH0gPSB0aGlzLl90aGVtZS52YXJpYWJsZXM7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKGF2YXRhcikge1xuICAgICAgaWYgKGF2YXRhci5yb290KSB7XG4gICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICB0aGlzLl90aGVtZS5zdHlsZShhdmF0YXIucm9vdCwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG59XG4iXX0=