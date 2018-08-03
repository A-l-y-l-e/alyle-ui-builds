/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, shadowBuilder, defaultEntry } from '@alyle/ui';
import { LyCardClasses } from './card.service';
var /** @type {?} */ DEFAULT_ELEVATION = 2;
var LyCard = /** @class */ (function () {
    function LyCard(styler, elementRef, renderer) {
        this.styler = styler;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(LyCard.prototype, "elevation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elevation;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.elevation !== val) {
                var /** @type {?} */ newClass = this._createElevationClass(val);
                this._elevationClass = this.styler.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._elevationClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.elevation === void 0) {
            this.elevation = DEFAULT_ELEVATION;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyCard.prototype._createElevationClass = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        this._elevation = defaultEntry(val, DEFAULT_ELEVATION);
        return this.styler.setUpStyleSecondary("k-card-e:" + this.elevation, function (theme) {
            return ("background-color:" + theme.background.primary + ";" +
                "display:block;" +
                "position:relative;" +
                // `padding:24px;` + // remove this
                "border-radius:2px;" +
                ("" + shadowBuilder(_this.elevation)));
        });
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
    LyCard.prototype._elevation;
    /** @type {?} */
    LyCard.prototype._elevationClass;
    /** @type {?} */
    LyCard.prototype.styler;
    /** @type {?} */
    LyCard.prototype.elementRef;
    /** @type {?} */
    LyCard.prototype.renderer;
}
var LyCardContent = /** @class */ (function () {
    function LyCardContent(elementRef, renderer, classes) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    LyCardContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.cardContent);
    };
    LyCardContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-content'
                },] },
    ];
    /** @nocollapse */
    LyCardContent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyCardClasses, },
    ]; };
    return LyCardContent;
}());
export { LyCardContent };
function LyCardContent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardContent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardContent.ctorParameters;
    /** @type {?} */
    LyCardContent.prototype.elementRef;
    /** @type {?} */
    LyCardContent.prototype.renderer;
    /** @type {?} */
    LyCardContent.prototype.classes;
}
var LyCardActions = /** @class */ (function () {
    function LyCardActions(elementRef, renderer, classes) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    LyCardActions.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.elementRef.nativeElement.childNodes.forEach(function (element) {
            _this.renderer.addClass(element, _this.classes.cardActionsItem);
        });
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.cardActions);
    };
    LyCardActions.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-actions'
                },] },
    ];
    /** @nocollapse */
    LyCardActions.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyCardClasses, },
    ]; };
    return LyCardActions;
}());
export { LyCardActions };
function LyCardActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardActions.ctorParameters;
    /** @type {?} */
    LyCardActions.prototype.elementRef;
    /** @type {?} */
    LyCardActions.prototype.renderer;
    /** @type {?} */
    LyCardActions.prototype.classes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MscUJBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDOztJQW1CMUIsZ0JBQ1UsUUFDQSxZQUNBO1FBRkEsV0FBTSxHQUFOLE1BQU07UUFDTixlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO0tBQ2I7MEJBZEQsNkJBQVM7Ozs7UUFNYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7a0JBUmEsR0FBb0I7WUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEdBQUcsRUFBRTtnQkFDMUIscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUg7Ozs7Ozs7O0lBWUgseUJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7U0FDcEM7S0FDRjs7Ozs7SUFFTyxzQ0FBcUI7Ozs7Y0FBQyxHQUFvQjs7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUNwQyxjQUFZLElBQUksQ0FBQyxTQUFXLEVBQzVCLFVBQUEsS0FBSztZQUFJLE9BQUEsQ0FDUCxzQkFBb0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLE1BQUc7Z0JBQy9DLGdCQUFnQjtnQkFDaEIsb0JBQW9CO2dCQUNwQixtQ0FBbUM7Z0JBQ25DLG9CQUFvQjtpQkFDcEIsS0FBRyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBRyxDQUFBLENBQ25DO1FBUFEsQ0FPUixDQUNGLENBQUM7OztnQkF6Q0wsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7OztnQkFQUSxRQUFRO2dCQURjLFVBQVU7Z0JBQXJCLFNBQVM7Ozs4QkFZMUIsS0FBSzs7aUJBWlI7O1NBU2EsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQ2pCLHVCQUNVLFlBQ0EsVUFDQTtRQUZBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixZQUFPLEdBQVAsT0FBTztLQUNaOzs7O0lBRUwsZ0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNqRjs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQXJEOEIsVUFBVTtnQkFBckIsU0FBUztnQkFFcEIsYUFBYTs7d0JBRnRCOztTQXNEYSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCeEIsdUJBQ1UsWUFDQSxVQUNBO1FBRkEsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFlBQU8sR0FBUCxPQUFPO0tBQ1o7Ozs7SUFDTCxnQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakY7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFyRThCLFVBQVU7Z0JBQXJCLFNBQVM7Z0JBRXBCLGFBQWE7O3dCQUZ0Qjs7U0FzRWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciwgZGVmYXVsdEVudHJ5IH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5Q2FyZENsYXNzZXMgfSBmcm9tICcuL2NhcmQuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2VsZXZhdGlvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBlbGV2YXRpb24odmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fZWxldmF0aW9uQ2xhc3MgPSB0aGlzLnN0eWxlci51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsZXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXI6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX2VsZXZhdGlvbiA9IGRlZmF1bHRFbnRyeSh2YWwsIERFRkFVTFRfRUxFVkFUSU9OKTtcbiAgICByZXR1cm4gdGhpcy5zdHlsZXIuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgYGstY2FyZC1lOiR7dGhpcy5lbGV2YXRpb259YCxcbiAgICAgIHRoZW1lID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnl9O2AgK1xuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICAvLyBgcGFkZGluZzoyNHB4O2AgKyAvLyByZW1vdmUgdGhpc1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNsYXNzZXM6IEx5Q2FyZENsYXNzZXNcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZENvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zSXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zKTtcbiAgfVxufVxuIl19