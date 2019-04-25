import * as tslib_1 from "tslib";
import { Directive, ElementRef, NgZone, Input, Renderer2 } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { mixinStyleUpdater, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, mixinColor } from '../common/index';
import { toBoolean } from '../minimal/is-boolean';
const DEFAULT_BG = 'paper';
export class LyPaperBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
export const LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
let LyPaper = class LyPaper extends LyPaperMixinBase {
    constructor(theme, ngZone, _el, _renderer) {
        super(theme, ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
        this._triggerElement = this._el;
        this._rippleContainer = this._el;
    }
    set hasText(val) {
        this._hasText = toBoolean(val);
    }
    get hasText() {
        return this._hasText;
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    ngOnInit() {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    }
    ngOnDestroy() {
        this._removeRippleEvents();
    }
};
tslib_1.__decorate([
    Input('ly-text'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], LyPaper.prototype, "hasText", null);
LyPaper = tslib_1.__decorate([
    Directive({
        selector: `ly-paper, [ly-paper], [ly-text]`,
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor',
            'disableRipple'
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [LyTheme2,
        NgZone,
        ElementRef,
        Renderer2])
], LyPaper);
export { LyPaper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvcGFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsVUFBVSxFQUFFLE1BQU0sRUFBYSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNKLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFFM0IsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFDUyxNQUFnQixFQUNoQixPQUFlO1FBRGYsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3BCLENBQUM7Q0FDTjtBQUVELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLGlCQUFpQixDQUNqRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUNkLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFjbkQsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBUSxTQUFRLGdCQUFnQjtJQVczQyxZQUNFLEtBQWUsRUFDZixNQUFjLEVBQ04sR0FBZSxFQUNmLFNBQW9CO1FBRTVCLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFIYixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUc1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFqQkQsSUFBSSxPQUFPLENBQUMsR0FBUTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFjRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hFLFNBQVMsRUFDVCxDQUFDO2dCQUNDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FDRCxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7QUF2Q0M7SUFEQyxLQUFLLENBQUMsU0FBUyxDQUFDOzs7c0NBR2hCO0FBTlUsT0FBTztJQVpuQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUNBQWlDO1FBQzNDLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7U0FDaEI7S0FDRixDQUFDOzZDQWFTLFFBQVE7UUFDUCxNQUFNO1FBQ0QsVUFBVTtRQUNKLFNBQVM7R0FmbkIsT0FBTyxDQTJDbkI7U0EzQ1ksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWl4aW5TdHlsZVVwZGF0ZXIsIG1peGluQmcsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciwgbWl4aW5EaXNhYmxlUmlwcGxlLCBtaXhpbkNvbG9yIH0gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmNvbnN0IERFRkFVTFRfQkcgPSAncGFwZXInO1xuXG5leHBvcnQgY2xhc3MgTHlQYXBlckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeVBhcGVyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVBhcGVyQmFzZSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBseS1wYXBlciwgW2x5LXBhcGVyXSwgW2x5LXRleHRdYCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVBhcGVyIGV4dGVuZHMgTHlQYXBlck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBfaGFzVGV4dDogYm9vbGVhbjtcblxuICBASW5wdXQoJ2x5LXRleHQnKVxuICBzZXQgaGFzVGV4dCh2YWw6IGFueSkge1xuICAgIHRoaXMuX2hhc1RleHQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaGFzVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzVGV4dDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9lbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmJnICYmICF0aGlzLmhhc1RleHQpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5UGFwZXInLFxuICAgICAgICAoe1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cbiJdfQ==