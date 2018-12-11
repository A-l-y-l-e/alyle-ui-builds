/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, NgZone, Input, Renderer2 } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { mixinStyleUpdater, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinColor } from '../common/index';
import { toBoolean } from '../minimal/is-boolean';
/** @type {?} */
const DEFAULT_BG = 'paper';
export class LyPaperBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
if (false) {
    /** @type {?} */
    LyPaperBase.prototype._theme;
    /** @type {?} */
    LyPaperBase.prototype._ngZone;
}
/** @type {?} */
export const LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
export class LyPaper extends LyPaperMixinBase {
    /**
     * @param {?} theme
     * @param {?} ngZone
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(theme, ngZone, _el, _renderer) {
        super(theme, ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
        this._triggerElement = this._el;
        this._rippleContainer = this._el;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasText(val) {
        this._hasText = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get hasText() {
        return this._hasText;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeRippleEvents();
    }
}
LyPaper.decorators = [
    { type: Directive, args: [{
                selector: `ly-paper, [ly-paper], [ly-text]`,
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
LyPaper.ctorParameters = () => [
    { type: LyTheme2 },
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
LyPaper.propDecorators = {
    hasText: [{ type: Input, args: ['ly-text',] }]
};
if (false) {
    /** @type {?} */
    LyPaper.prototype._hasText;
    /** @type {?} */
    LyPaper.prototype._el;
    /** @type {?} */
    LyPaper.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvcGFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsVUFBVSxFQUFFLE1BQU0sRUFBYSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNKLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFNUMsVUFBVSxHQUFHLE9BQU87QUFFMUIsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBQ3RCLFlBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNwQixDQUFDO0NBQ047OztJQUhHLDZCQUF1Qjs7SUFDdkIsOEJBQXNCOzs7QUFJMUIsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGlCQUFpQixDQUNqRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUNkLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBZWxELE1BQU0sT0FBTyxPQUFRLFNBQVEsZ0JBQWdCOzs7Ozs7O0lBVzNDLFlBQ0UsS0FBZSxFQUNmLE1BQWMsRUFDTixHQUFlLEVBQ2YsU0FBb0I7UUFFNUIsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUhiLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFsQkQsSUFDSSxPQUFPLENBQUMsR0FBUTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFjRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hFLFNBQVMsRUFDVCxDQUFDO2dCQUNDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FDRCxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxNQUFNLEVBQUU7b0JBQ04sSUFBSTtvQkFDSixNQUFNO29CQUNOLE9BQU87b0JBQ1AsUUFBUTtvQkFDUixVQUFVO29CQUNWLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixlQUFlO2lCQUNoQjthQUNGOzs7O1lBbENRLFFBQVE7WUFEMEIsTUFBTTtZQUFsQixVQUFVO1lBQW9DLFNBQVM7OztzQkF1Q25GLEtBQUssU0FBQyxTQUFTOzs7O0lBRmhCLDJCQUFrQjs7SUFhaEIsc0JBQXVCOztJQUN2Qiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IsIG1peGluRGlzYWJsZVJpcHBsZSwgbWl4aW5Db2xvciB9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3BhcGVyJztcblxuZXhwb3J0IGNsYXNzIEx5UGFwZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlQYXBlck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlQYXBlckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbHktcGFwZXIsIFtseS1wYXBlcl0sIFtseS10ZXh0XWAsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UGFwZXIgZXh0ZW5kcyBMeVBhcGVyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9oYXNUZXh0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbHktdGV4dCcpXG4gIHNldCBoYXNUZXh0KHZhbDogYW55KSB7XG4gICAgdGhpcy5faGFzVGV4dCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUZXh0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2VsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcgJiYgIXRoaXMuaGFzVGV4dCkge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlQYXBlcicsXG4gICAgICAgICh7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIl19