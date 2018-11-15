/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Optional, Renderer2, ElementRef, Input } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = 'fixed';
/** @type {?} */
var DEFAULT_BG = 'background:tertiary';
/** @type {?} */
var styles = function (theme) {
    var _a;
    return ({
        root: (_a = {
                padding: '0 16px',
                display: 'flex',
                boxSizing: 'border-box',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                height: '64px',
                zIndex: theme.zIndex.toolbar
            },
            _a[theme.getBreakpoint('XSmall')] = {
                height: '56px'
            },
            _a)
    });
};
var ɵ0 = styles;
var LyToolbar = /** @class */ (function () {
    function LyToolbar(renderer, _el, theme, _common) {
        this._el = _el;
        this.theme = theme;
        this._common = _common;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        renderer.addClass(this._el.nativeElement, this.classes.root);
        if (this._common) {
            this._common.setAutoContrast();
        }
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("ly-toolbar-position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyToolbar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this._common.bg) {
            this._common.bg = DEFAULT_BG;
            this._common.ngOnChanges();
        }
    };
    LyToolbar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar'
                },] }
    ];
    /** @nocollapse */
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    LyToolbar.propDecorators = {
        position: [{ type: Input }]
    };
    return LyToolbar;
}());
export { LyToolbar };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztJQUV6RCxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixnQkFBZ0IsR0FBRyxPQUFPOztJQUMxQixVQUFVLEdBQUcscUJBQXFCOztJQUVsQyxNQUFNLEdBQUcsVUFBQyxLQUFxQjs7SUFBSyxPQUFBLENBQUM7UUFDekMsSUFBSTtnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNO2dCQUNiLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87O1lBQzVCLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQkFDL0IsTUFBTSxFQUFFLE1BQU07YUFDZjtlQUNGO0tBQ0YsQ0FBQztBQWZ3QyxDQWV4Qzs7QUFJRjtJQWVFLG1CQUNFLFFBQW1CLEVBQ1gsR0FBZSxFQUNmLEtBQWUsRUFDSCxPQUFpQjtRQUY3QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUNILFlBQU8sR0FBUCxPQUFPLENBQVU7UUFmdkMsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWlCekQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQWxCRCxzQkFDSSwrQkFBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBUEQsVUFDYSxHQUFhO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXVCLEdBQUssRUFBRSxjQUFZLEdBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzFKLENBQUM7OztPQUFBOzs7O0lBZ0JELDRCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFoQ0MsU0FBUztnQkFDVCxVQUFVO2dCQUlPLFFBQVE7Z0JBQWxCLFFBQVEsdUJBNENaLFFBQVE7OzsyQkFaVixLQUFLOztJQTZCUixnQkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLFNBQVM7OztJQUNwQiw0QkFBMkQ7O0lBQzNELDhCQUE0Qjs7SUFDNUIsbUNBQStCOztJQVc3Qix3QkFBdUI7O0lBQ3ZCLDBCQUF1Qjs7SUFDdkIsNEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2ZpeGVkJztcbmNvbnN0IERFRkFVTFRfQkcgPSAnYmFja2dyb3VuZDp0ZXJ0aWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC50b29sYmFyLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIGhlaWdodDogJzU2cHgnXG4gICAgfVxuICB9XG59KTtcblxudHlwZSBwb3NpdGlvbiA9ICdzdGF0aWMnIHwgJ2Fic29sdXRlJyB8ICdmaXhlZCcgfCAnc3RpY2t5JyB8ICdyZWxhdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXInXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS10b29sYmFyLXBvc2l0aW9uOiR7dmFsfWAsIGBwb3NpdGlvbjoke3ZhbH1gLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2NvbW1vbjogTHlDb21tb25cbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICh0aGlzLl9jb21tb24pIHtcbiAgICAgIHRoaXMuX2NvbW1vbi5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2NvbW1vbi5iZykge1xuICAgICAgdGhpcy5fY29tbW9uLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMuX2NvbW1vbi5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19