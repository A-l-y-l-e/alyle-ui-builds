(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@alyle/ui/ripple')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/header-pagination', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@alyle/ui/ripple'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['header-pagination'] = {}),global.ng.core,global.ng.common,global.ng.forms,global.alyle.ui.ripple));
}(this, (function (exports,core,common,forms,ripple) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyHeaderPagination = /** @class */ (function () {
        function LyHeaderPagination(elementRef) {
            this.elementRef = elementRef;
            this._with = 150;
            this._positionX = 0;
            this.traslateWidth = 100;
        }
        /**
         * @return {?}
         */
        LyHeaderPagination.prototype.updateAll = /**
         * @return {?}
         */
            function () {
                this._with = this.elementContainer.clientWidth;
                this._withHost = this.elementRef.nativeElement.clientWidth;
                /*console.log(this.elementContainer.clientWidth);*/
                /*console.log(
                      'this._positionX',
                      this._positionX,
                      'this._withHost',
                      this._withHost,
                      'this._with',
                      this._with,
                    );*/
            };
        /**
         * @return {?}
         */
        LyHeaderPagination.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.elementContainer = this.elementRef.nativeElement.querySelector('._container_items');
                this._withHost = this.elementRef.nativeElement.clientWidth;
                /*console.log(this.elementContainer.clientWidth);*/
                this._with = this.elementContainer.clientWidth;
            };
        /**
         * @return {?}
         */
        LyHeaderPagination.prototype._to_left = /**
         * @return {?}
         */
            function () {
                this.updateAll();
                this._positionX = this._positionX + this.traslateWidth;
                if (this._positionX < 0) {
                    this.elementContainer.setAttribute('style', "\n      left: " + this._positionX + "px;\n      ");
                }
                else {
                    this._positionX = 0;
                    this.elementContainer.setAttribute('style', "\n      left: " + 0 + ";\n      ");
                }
            };
        /**
         * @return {?}
         */
        LyHeaderPagination.prototype._to_right = /**
         * @return {?}
         */
            function () {
                this.updateAll();
                this._positionX = this._positionX - this.traslateWidth;
                if (-(this._positionX) + this._withHost <= this._with) {
                    this.elementContainer.setAttribute('style', "\n      left: " + this._positionX + "px;\n      ");
                }
                else {
                    this._positionX = -(this._with) + this._withHost;
                    this.elementContainer.setAttribute('style', "\n      left: " + (-(this._with) + this._withHost) + "px;\n      ");
                }
            };
        LyHeaderPagination.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-header-pagination',
                        template: "<div\n  lyRippleRadius=\"containerSize\"\n  lyRipple\n  lyRippleCentered\n  *ngIf=\"_positionX != 0\"\n  class=\"_op_left\"\n  (click)=\"_to_left()\">\n  <span>\n    <svg viewBox=\"0 0 24 24\" style=\"display: inline-block; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </span>\n</div>\n<div class=\"kfjddxm\" tabindex=\"0\"></div>\n<div class=\"_container\">\n  <div class=\"_container_items\" #elementContainer>\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"_op_right\" \n  lyRippleRadius=\"containerSize\"\n  lyRipple\n  lyRippleCentered\n  *ngIf=\"_with > (-(_positionX) + _withHost)\"\n  (click)=\"_to_right()\">\n  <span>\n    <svg viewBox=\"0 0 24 24\" style=\"display: inline-block; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg>\n  </span>\n</div>\n",
                        host: {
                            '(mouseenter)': 'updateAll()',
                        },
                        styles: [":host{position:absolute;width:100%;height:100%;display:inline-block;top:0;bottom:0;margin:auto;line-height:normal}._container{position:absolute;height:inherit;width:100%;overflow:hidden;top:0;left:0}._container_items{display:inline-flex;position:absolute;transition:450ms cubic-bezier(.23,1,.32,1);left:0;height:100%}._op_left,._op_right{position:absolute;display:inline-block;width:24px;height:24px;z-index:99;top:0;bottom:0;margin:auto 0;cursor:pointer;color:rgba(245,0,87,.63)}._op_left:hover,._op_right:hover{color:#f50057}._op_left span,._op_right span{fill:currentColor;position:absolute;top:0}._op_right{right:0}._op_left{left:0}"]
                    }] }
        ];
        /** @nocollapse */
        LyHeaderPagination.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        LyHeaderPagination.propDecorators = {
            _elementContainer: [{ type: core.ViewChild, args: ['elementContainer',] }]
        };
        return LyHeaderPagination;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyHeaderPaginationModule = /** @class */ (function () {
        function LyHeaderPaginationModule() {
        }
        LyHeaderPaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ripple.LyRippleModule],
                        exports: [LyHeaderPagination],
                        declarations: [LyHeaderPagination]
                    },] }
        ];
        return LyHeaderPaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyHeaderPaginationModule = LyHeaderPaginationModule;
    exports.LyHeaderPagination = LyHeaderPagination;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaGVhZGVyLXBhZ2luYXRpb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvaGVhZGVyLXBhZ2luYXRpb24vaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvaGVhZGVyLXBhZ2luYXRpb24vaGVhZGVyLXBhZ2luYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1oZWFkZXItcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnaGVhZGVyLXBhZ2luYXRpb24uaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICdoZWFkZXItcGFnaW5hdGlvbi5jc3MnLFxuICBdLFxuICBob3N0OiB7XG4gICAgJyhtb3VzZWVudGVyKSc6ICd1cGRhdGVBbGwoKScsXG4gIH0sXG5cbn0pXG5leHBvcnQgY2xhc3MgTHlIZWFkZXJQYWdpbmF0aW9uIHtcbiAgX3dpdGggPSAxNTA7XG4gIF93aXRoSG9zdDogbnVtYmVyO1xuICBfcG9zaXRpb25YID0gMDtcbiAgdHJhc2xhdGVXaWR0aCA9IDEwMDtcbiAgZWxlbWVudENvbnRhaW5lcjogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuXG4gIH1cbiAgdXBkYXRlQWxsKCkge1xuICAgIHRoaXMuX3dpdGggPSB0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fd2l0aEhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAvKmNvbnNvbGUubG9nKHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aCk7Ki9cblxuICAgIC8qY29uc29sZS5sb2coXG4gICAgICAndGhpcy5fcG9zaXRpb25YJyxcbiAgICAgIHRoaXMuX3Bvc2l0aW9uWCxcbiAgICAgICd0aGlzLl93aXRoSG9zdCcsXG4gICAgICB0aGlzLl93aXRoSG9zdCxcbiAgICAgICd0aGlzLl93aXRoJyxcbiAgICAgIHRoaXMuX3dpdGgsXG4gICAgKTsqL1xuICB9XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnRDb250YWluZXInKSBfZWxlbWVudENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZWxlbWVudENvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fY29udGFpbmVyX2l0ZW1zJyk7XG4gICAgdGhpcy5fd2l0aEhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAvKmNvbnNvbGUubG9nKHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aCk7Ki9cbiAgICB0aGlzLl93aXRoID0gdGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoO1xuICB9XG4gIF90b19sZWZ0KCkge1xuICAgIHRoaXMudXBkYXRlQWxsKCk7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gdGhpcy5fcG9zaXRpb25YICsgdGhpcy50cmFzbGF0ZVdpZHRoO1xuICAgIGlmICh0aGlzLl9wb3NpdGlvblggPCAwKSB7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7dGhpcy5fcG9zaXRpb25YfXB4O1xuICAgICAgYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uWCA9IDA7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7MH07XG4gICAgICBgKTtcbiAgICB9XG4gIH1cbiAgX3RvX3JpZ2h0KCkge1xuICAgIHRoaXMudXBkYXRlQWxsKCk7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gdGhpcy5fcG9zaXRpb25YIC0gdGhpcy50cmFzbGF0ZVdpZHRoO1xuICAgIGlmICgtKHRoaXMuX3Bvc2l0aW9uWCkgKyB0aGlzLl93aXRoSG9zdCA8PSB0aGlzLl93aXRoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7dGhpcy5fcG9zaXRpb25YfXB4O1xuICAgICAgYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uWCA9IC0odGhpcy5fd2l0aCkgKyB0aGlzLl93aXRoSG9zdDtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHstKHRoaXMuX3dpdGgpICsgdGhpcy5fd2l0aEhvc3R9cHg7XG4gICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlIZWFkZXJQYWdpbmF0aW9uIH0gZnJvbSAnLi9oZWFkZXItcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlIZWFkZXJQYWdpbmF0aW9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlIZWFkZXJQYWdpbmF0aW9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUhlYWRlclBhZ2luYXRpb25Nb2R1bGUge31cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiVmlld0NoaWxkIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFrQkUsNEJBQ1U7WUFBQSxlQUFVLEdBQVYsVUFBVTtZQU5wQixhQUFRLEdBQUcsQ0FBQztZQUVaLGtCQUFhLENBQUMsQ0FBQztZQUNmLHFCQUFnQixHQUFHLENBQUM7U0FNbkI7Ozs7UUFDRCxzQ0FBUzs7O1lBQVQ7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7Ozs7Ozs7OzthQVc1RDs7OztRQUVELCtDQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O2dCQUUzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7YUFDaEQ7Ozs7UUFDRCxxQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQ3BDLElBQUksQ0FBQyxVQUFVLGdCQUN0QixDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUNwQyxDQUFDLGNBQ1IsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7Ozs7UUFDRCxzQ0FBUzs7O1lBQVQ7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdkQsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUNwQyxJQUFJLENBQUMsVUFBVSxnQkFDdEIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQ3BDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGlCQUNyQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjs7b0JBdEVGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsOGhDQUFxQzt3QkFJckMsSUFBSSxFQUFFOzRCQUNKLGNBQWMsRUFBRSxhQUFhO3lCQUM5Qjs7cUJBRUY7Ozs7O3dCQVg4QkMsZUFBVTs7Ozt3Q0FxQ3RDQyxjQUFTLFNBQUMsa0JBQWtCOztpQ0FyQy9COzs7Ozs7O0FDQUE7Ozs7b0JBTUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksRUFBRUMsaUJBQVcsRUFBRUMscUJBQWMsQ0FBQzt3QkFDcEQsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQzdCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUNuQzs7dUNBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9