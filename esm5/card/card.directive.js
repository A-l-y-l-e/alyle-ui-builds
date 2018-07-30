/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, shadowBuilder } from '@alyle/ui';
var LyCard = /** @class */ (function () {
    function LyCard(styler, elementRef, renderer) {
        this.styler = styler;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ newClass = this.styler.setUpStyleSecondary('k-card', function (theme) {
            return ("background-color:" + theme.background.primary + ";" +
                "display:block;" +
                "position:relative;" +
                "padding:24px;" +
                "border-radius:2px;" +
                ("" + shadowBuilder(_this.elevation)));
        });
        this.renderer.addClass(this.elementRef.nativeElement, newClass);
    };
    LyCard.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card'
                },] },
    ];
    /** @nocollapse */
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    LyCard.propDecorators = {
        "elevation": [{ type: Input },],
    };
    return LyCard;
}());
export { LyCard };
function LyCard_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCard.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCard.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCard.propDecorators;
    /** @type {?} */
    LyCard.prototype.elevation;
    /** @type {?} */
    LyCard.prototype.styler;
    /** @type {?} */
    LyCard.prototype.elementRef;
    /** @type {?} */
    LyCard.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztJQVFsRCxnQkFDVSxRQUNBLFlBQ0E7UUFGQSxXQUFNLEdBQU4sTUFBTTtRQUNOLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjs7OztJQUVMLHlCQUFROzs7SUFBUjtRQUFBLGlCQWFDO1FBWkMscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQzlDLFFBQVEsRUFDUixVQUFBLEtBQUs7WUFBSSxPQUFBLENBQ1Asc0JBQW9CLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxNQUFHO2dCQUMvQyxnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjtnQkFDcEIsZUFBZTtnQkFDZixvQkFBb0I7aUJBQ3BCLEtBQUcsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQSxDQUNuQztRQVBRLENBT1IsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDakU7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCOzs7O2dCQUpRLFFBQVE7Z0JBRGMsVUFBVTtnQkFBckIsU0FBUzs7OzhCQU8xQixLQUFLOztpQkFQUjs7U0FNYSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZWxldmF0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXI6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuc3R5bGVyLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55PihcbiAgICAgICdrLWNhcmQnLFxuICAgICAgdGhlbWUgPT4gKFxuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeX07YCArXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICAgIGBwYWRkaW5nOjI0cHg7YCArXG4gICAgICAgIGBib3JkZXItcmFkaXVzOjJweDtgICtcbiAgICAgICAgYCR7c2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbil9YFxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICB9XG5cbn1cbiJdfQ==