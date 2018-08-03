import { Injectable, NgModule, Directive, Renderer2, ElementRef, Input, defineInjectable, inject } from '@angular/core';
import { LyTheme2, defaultEntry, shadowBuilder } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCardClasses {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.cardContent = this.theme.setUpStyleSecondary('k-card-content', () => (`display:block;` +
            `padding:16px 24px;`));
        this.cardActions = this.theme.setUpStyleSecondary('k-card-actions', () => (`display: block;` +
            `padding: 8px 12px;`));
        this.cardActionsItem = this.theme.setUpStyleSecondary('k-card-actions-item', () => (`margin: 0 4px;`));
    }
}
LyCardClasses.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LyCardClasses.ctorParameters = () => [
    { type: LyTheme2, },
];
/** @nocollapse */ LyCardClasses.ngInjectableDef = defineInjectable({ factory: function LyCardClasses_Factory() { return new LyCardClasses(inject(LyTheme2)); }, token: LyCardClasses, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DEFAULT_ELEVATION = 2;
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
     * @param {?} val
     * @return {?}
     */
    set elevation(val) {
        if (this.elevation !== val) {
            const /** @type {?} */ newClass = this._createElevationClass(val);
            this._elevationClass = this.styler.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._elevationClass);
        }
    }
    /**
     * @return {?}
     */
    get elevation() {
        return this._elevation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.elevation === void 0) {
            this.elevation = DEFAULT_ELEVATION;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createElevationClass(val) {
        this._elevation = defaultEntry(val, DEFAULT_ELEVATION);
        return this.styler.setUpStyleSecondary(`k-card-e:${this.elevation}`, theme => (`background-color:${theme.background.primary};` +
            `display:block;` +
            `position:relative;` +
            `border-radius:2px;` +
            `${shadowBuilder(this.elevation)}`));
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
class LyCardContent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} classes
     */
    constructor(elementRef, renderer, classes) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.cardContent);
    }
}
LyCardContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-content'
            },] },
];
/** @nocollapse */
LyCardContent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyCardClasses, },
];
class LyCardActions {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} classes
     */
    constructor(elementRef, renderer, classes) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.elementRef.nativeElement.childNodes.forEach(element => {
            this.renderer.addClass(element, this.classes.cardActionsItem);
        });
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.cardActions);
    }
}
LyCardActions.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-actions'
            },] },
];
/** @nocollapse */
LyCardActions.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyCardClasses, },
];

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
                exports: [LyCard, LyCardContent, LyCardActions],
                declarations: [LyCard, LyCardContent, LyCardActions]
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

export { LyCardModule, LyCard, LyCardContent, LyCardActions, LyCardClasses as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2FyZC9jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENsYXNzZXMge1xuICBjYXJkQ29udGVudCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkLWNvbnRlbnQnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgYHBhZGRpbmc6MTZweCAyNHB4O2BcbiAgICApXG4gICk7XG4gIGNhcmRBY3Rpb25zID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQtYWN0aW9ucycsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6IGJsb2NrO2AgK1xuICAgICAgYHBhZGRpbmc6IDhweCAxMnB4O2BcbiAgICApXG4gICk7XG4gIGNhcmRBY3Rpb25zSXRlbSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkLWFjdGlvbnMtaXRlbScsXG4gICAgKCkgPT4gKFxuICAgICAgYG1hcmdpbjogMCA0cHg7YFxuICAgIClcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciwgZGVmYXVsdEVudHJ5IH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5Q2FyZENsYXNzZXMgfSBmcm9tICcuL2NhcmQuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2VsZXZhdGlvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBlbGV2YXRpb24odmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fZWxldmF0aW9uQ2xhc3MgPSB0aGlzLnN0eWxlci51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsZXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXI6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX2VsZXZhdGlvbiA9IGRlZmF1bHRFbnRyeSh2YWwsIERFRkFVTFRfRUxFVkFUSU9OKTtcbiAgICByZXR1cm4gdGhpcy5zdHlsZXIuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgYGstY2FyZC1lOiR7dGhpcy5lbGV2YXRpb259YCxcbiAgICAgIHRoZW1lID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnl9O2AgK1xuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICAvLyBgcGFkZGluZzoyNHB4O2AgKyAvLyByZW1vdmUgdGhpc1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNsYXNzZXM6IEx5Q2FyZENsYXNzZXNcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZENvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zSXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMgfSBmcm9tICcuL2NhcmQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQXlCRSxZQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7MkJBckJELElBQUksQ0FBQyxLQUFLLENBQUMs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