/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, NgZone, Input, Renderer2 } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { mixinStyleUpdater, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinColor } from '../common/index';
import { toBoolean } from '../minimal/is-boolean';
/** @type {?} */
var DEFAULT_BG = 'paper';
var LyPaperBase = /** @class */ (function () {
    function LyPaperBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyPaperBase;
}());
export { LyPaperBase };
if (false) {
    /** @type {?} */
    LyPaperBase.prototype._theme;
    /** @type {?} */
    LyPaperBase.prototype._ngZone;
}
/** @type {?} */
export var LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
var LyPaper = /** @class */ (function (_super) {
    tslib_1.__extends(LyPaper, _super);
    function LyPaper(theme, ngZone, _el, _renderer) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this.setAutoContrast();
        _this._triggerElement = _this._el;
        _this._rippleContainer = _this._el;
        return _this;
    }
    Object.defineProperty(LyPaper.prototype, "hasText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasText;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hasText = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyPaper.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyPaper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    };
    /**
     * @return {?}
     */
    LyPaper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeRippleEvents();
    };
    LyPaper.decorators = [
        { type: Directive, args: [{
                    selector: "ly-paper, [ly-paper], [ly-text]",
                    inputs: [
                        'bg',
                        'flat',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                        'disableRipple'
                    ]
                },] }
    ];
    /** @nocollapse */
    LyPaper.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyPaper.propDecorators = {
        hasText: [{ type: Input, args: ['ly-text',] }]
    };
    return LyPaper;
}(LyPaperMixinBase));
export { LyPaper };
if (false) {
    /** @type {?} */
    LyPaper.prototype._hasText;
    /** @type {?} */
    LyPaper.prototype._el;
    /** @type {?} */
    LyPaper.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvcGFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFVBQVUsRUFBRSxNQUFNLEVBQWEsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzSixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBRTVDLFVBQVUsR0FBRyxPQUFPO0FBRTFCO0lBQ0UscUJBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNwQixDQUFDO0lBQ1Asa0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUhHLDZCQUF1Qjs7SUFDdkIsOEJBQXNCOzs7QUFJMUIsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGlCQUFpQixDQUNqRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUNkLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWxEO0lBYTZCLG1DQUFnQjtJQVczQyxpQkFDRSxLQUFlLEVBQ2YsTUFBYyxFQUNOLEdBQWUsRUFDZixTQUFvQjtRQUo5QixZQU1FLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsU0FJckI7UUFQUyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUc1QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDOztJQUNuQyxDQUFDO0lBbEJELHNCQUNJLDRCQUFPOzs7O1FBR1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFORCxVQUNZLEdBQVE7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7Ozs7SUFpQkQsNkJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDBCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FDeEUsU0FBUyxFQUNULENBQUM7Z0JBQ0MsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUNELENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7OztJQUVELDZCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osTUFBTTt3QkFDTixPQUFPO3dCQUNQLFFBQVE7d0JBQ1IsVUFBVTt3QkFDVixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7aUJBQ0Y7Ozs7Z0JBbENRLFFBQVE7Z0JBRDBCLE1BQU07Z0JBQWxCLFVBQVU7Z0JBQW9DLFNBQVM7OzswQkF1Q25GLEtBQUssU0FBQyxTQUFTOztJQXdDbEIsY0FBQztDQUFBLEFBeERELENBYTZCLGdCQUFnQixHQTJDNUM7U0EzQ1ksT0FBTzs7O0lBQ2xCLDJCQUFrQjs7SUFhaEIsc0JBQXVCOztJQUN2Qiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IsIG1peGluRGlzYWJsZVJpcHBsZSwgbWl4aW5Db2xvciB9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3BhcGVyJztcblxuZXhwb3J0IGNsYXNzIEx5UGFwZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlQYXBlck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlQYXBlckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbHktcGFwZXIsIFtseS1wYXBlcl0sIFtseS10ZXh0XWAsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UGFwZXIgZXh0ZW5kcyBMeVBhcGVyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9oYXNUZXh0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbHktdGV4dCcpXG4gIHNldCBoYXNUZXh0KHZhbDogYW55KSB7XG4gICAgdGhpcy5faGFzVGV4dCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUZXh0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2VsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcgJiYgIXRoaXMuaGFzVGV4dCkge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlQYXBlcicsXG4gICAgICAgICh7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIl19