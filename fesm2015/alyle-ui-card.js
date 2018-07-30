import { Directive, Renderer2, ElementRef, Input, NgModule } from '@angular/core';
import { LyTheme2, shadowBuilder } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCard {
    /**
     * @param {?} styler
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(styler, elementRef, renderer) {
        this.styler = styler;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ newClass = this.styler.setUpStyleSecondary('k-card', theme => (`background-color:${theme.background.primary};` +
            `display:block;` +
            `position:relative;` +
            `padding:24px;` +
            `border-radius:2px;` +
            `${shadowBuilder(this.elevation)}`));
        this.renderer.addClass(this.elementRef.nativeElement, newClass);
    }
}
LyCard.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card'
            },] },
];
/** @nocollapse */
LyCard.ctorParameters = () => [
    { type: LyTheme2, },
    { type: ElementRef, },
    { type: Renderer2, },
];
LyCard.propDecorators = {
    "elevation": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCardModule {
}
LyCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [LyCard],
                declarations: [LyCard]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyCardModule, LyCard };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVsZXZhdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVyOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLnN0eWxlci5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICAnay1jYXJkJyxcbiAgICAgIHRoZW1lID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnl9O2AgK1xuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICBgcGFkZGluZzoyNHB4O2AgK1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2FyZCB9IGZyb20gJy4vY2FyZC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeUNhcmRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcmRdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7SUFTRSxZQUNVLFFBQ0EsWUFDQTtRQUZBLFdBQU0sR0FBTixNQUFNO1FBQ04sZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtLQUNiOzs7O0lBRUwsUUFBUTtRQUNOLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUM5QyxRQUFRLEVBQ1IsS0FBSyxLQUNILG9CQUFvQixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRztZQUMvQyxnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQ25DLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2pFOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBSlEsUUFBUTtZQURjLFVBQVU7WUFBckIsU0FBUzs7OzBCQU8xQixLQUFLOzs7Ozs7O0FDUFI7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN2Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9