/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'ly-header-pagination',
                    template: "<div\n  lyRippleRadius=\"containerSize\"\n  lyRipple\n  lyRippleCentered\n  *ngIf=\"_positionX != 0\"\n  class=\"_op_left\"\n  (click)=\"_to_left()\">\n  <span>\n    <svg viewBox=\"0 0 24 24\" style=\"display: inline-block; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </span>\n</div>\n<div class=\"kfjddxm\" tabindex=\"0\"></div>\n<div class=\"_container\">\n  <div class=\"_container_items\" #elementContainer>\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"_op_right\" \n  lyRippleRadius=\"containerSize\"\n  lyRipple\n  lyRippleCentered\n  *ngIf=\"_with > (-(_positionX) + _withHost)\"\n  (click)=\"_to_right()\">\n  <span>\n    <svg viewBox=\"0 0 24 24\" style=\"display: inline-block; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg>\n  </span>\n</div>\n",
                    styles: [":host{position:absolute;width:100%;height:100%;display:inline-block;top:0;bottom:0;margin:auto;line-height:normal}._container{position:absolute;height:inherit;width:100%;overflow:hidden;top:0;left:0}._container_items{display:inline-flex;position:absolute;transition:450ms cubic-bezier(.23,1,.32,1);left:0;height:100%}._op_left,._op_right{position:absolute;display:inline-block;width:24px;height:24px;z-index:99;top:0;bottom:0;margin:auto 0;cursor:pointer;color:rgba(245,0,87,.63)}._op_left:hover,._op_right:hover{color:#f50057}._op_left span,._op_right span{fill:currentColor;position:absolute;top:0}._op_right{right:0}._op_left{left:0}"],
                    host: {
                        '(mouseenter)': 'updateAll()',
                    },
                },] },
    ];
    /** @nocollapse */
    LyHeaderPagination.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    LyHeaderPagination.propDecorators = {
        _elementContainer: [{ type: ViewChild, args: ['elementContainer',] }]
    };
    return LyHeaderPagination;
}());
export { LyHeaderPagination };
if (false) {
    /** @type {?} */
    LyHeaderPagination.prototype._with;
    /** @type {?} */
    LyHeaderPagination.prototype._withHost;
    /** @type {?} */
    LyHeaderPagination.prototype._positionX;
    /** @type {?} */
    LyHeaderPagination.prototype.traslateWidth;
    /** @type {?} */
    LyHeaderPagination.prototype.elementContainer;
    /** @type {?} */
    LyHeaderPagination.prototype._elementContainer;
    /** @type {?} */
    LyHeaderPagination.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2hlYWRlci1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBMkMvRCw0QkFDVTtRQUFBLGVBQVUsR0FBVixVQUFVO3FCQU5aLEdBQUc7MEJBRUUsQ0FBQzs2QkFDRSxHQUFHO0tBTWxCOzs7O0lBQ0Qsc0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOzs7Ozs7Ozs7O0tBVzVEOzs7O0lBRUQsK0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1FBRTNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztLQUNoRDs7OztJQUNELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUNwQyxJQUFJLENBQUMsVUFBVSxnQkFDdEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUNwQyxDQUFDLGNBQ1IsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUNELHNDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUNwQyxJQUFJLENBQUMsVUFBVSxnQkFDdEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9CQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGlCQUNyQyxDQUFDLENBQUM7U0FDSjtLQUNGOztnQkEvRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxvaENBMkJYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDhuQkFBOG5CLENBQUM7b0JBQ3hvQixJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLGFBQWE7cUJBQzlCO2lCQUVGOzs7O2dCQXBDOEIsVUFBVTs7O29DQThEdEMsU0FBUyxTQUFDLGtCQUFrQjs7NkJBOUQvQjs7U0FxQ2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWhlYWRlci1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gIGx5UmlwcGxlUmFkaXVzPVwiY29udGFpbmVyU2l6ZVwiXG4gIGx5UmlwcGxlXG4gIGx5UmlwcGxlQ2VudGVyZWRcbiAgKm5nSWY9XCJfcG9zaXRpb25YICE9IDBcIlxuICBjbGFzcz1cIl9vcF9sZWZ0XCJcbiAgKGNsaWNrKT1cIl90b19sZWZ0KClcIj5cbiAgPHNwYW4+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGhlaWdodDogMjRweDsgd2lkdGg6IDI0cHg7IHVzZXItc2VsZWN0OiBub25lOyB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcztcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L3NwYW4+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJrZmpkZHhtXCIgdGFiaW5kZXg9XCIwXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwiX2NvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiX2NvbnRhaW5lcl9pdGVtc1wiICNlbGVtZW50Q29udGFpbmVyPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJfb3BfcmlnaHRcIiBcbiAgbHlSaXBwbGVSYWRpdXM9XCJjb250YWluZXJTaXplXCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICAqbmdJZj1cIl93aXRoID4gKC0oX3Bvc2l0aW9uWCkgKyBfd2l0aEhvc3QpXCJcbiAgKGNsaWNrKT1cIl90b19yaWdodCgpXCI+XG4gIDxzcGFuPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBoZWlnaHQ6IDI0cHg7IHdpZHRoOiAyNHB4OyB1c2VyLXNlbGVjdDogbm9uZTsgdHJhbnNpdGlvbjogYWxsIDQ1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXM7XCI+PHBhdGggZD1cIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87bGluZS1oZWlnaHQ6bm9ybWFsfS5fY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDppbmhlcml0O3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3RvcDowO2xlZnQ6MH0uX2NvbnRhaW5lcl9pdGVtc3tkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zaXRpb246NDUwbXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtsZWZ0OjA7aGVpZ2h0OjEwMCV9Ll9vcF9sZWZ0LC5fb3BfcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDt6LWluZGV4Ojk5O3RvcDowO2JvdHRvbTowO21hcmdpbjphdXRvIDA7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6cmdiYSgyNDUsMCw4NywuNjMpfS5fb3BfbGVmdDpob3ZlciwuX29wX3JpZ2h0OmhvdmVye2NvbG9yOiNmNTAwNTd9Ll9vcF9sZWZ0IHNwYW4sLl9vcF9yaWdodCBzcGFue2ZpbGw6Y3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowfS5fb3BfcmlnaHR7cmlnaHQ6MH0uX29wX2xlZnR7bGVmdDowfWBdLFxuICBob3N0OiB7XG4gICAgJyhtb3VzZWVudGVyKSc6ICd1cGRhdGVBbGwoKScsXG4gIH0sXG5cbn0pXG5leHBvcnQgY2xhc3MgTHlIZWFkZXJQYWdpbmF0aW9uIHtcbiAgX3dpdGggPSAxNTA7XG4gIF93aXRoSG9zdDogbnVtYmVyO1xuICBfcG9zaXRpb25YID0gMDtcbiAgdHJhc2xhdGVXaWR0aCA9IDEwMDtcbiAgZWxlbWVudENvbnRhaW5lcjogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuXG4gIH1cbiAgdXBkYXRlQWxsKCkge1xuICAgIHRoaXMuX3dpdGggPSB0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fd2l0aEhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAvKmNvbnNvbGUubG9nKHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aCk7Ki9cblxuICAgIC8qY29uc29sZS5sb2coXG4gICAgICAndGhpcy5fcG9zaXRpb25YJyxcbiAgICAgIHRoaXMuX3Bvc2l0aW9uWCxcbiAgICAgICd0aGlzLl93aXRoSG9zdCcsXG4gICAgICB0aGlzLl93aXRoSG9zdCxcbiAgICAgICd0aGlzLl93aXRoJyxcbiAgICAgIHRoaXMuX3dpdGgsXG4gICAgKTsqL1xuICB9XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnRDb250YWluZXInKSBfZWxlbWVudENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZWxlbWVudENvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fY29udGFpbmVyX2l0ZW1zJyk7XG4gICAgdGhpcy5fd2l0aEhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAvKmNvbnNvbGUubG9nKHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aCk7Ki9cbiAgICB0aGlzLl93aXRoID0gdGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoO1xuICB9XG4gIF90b19sZWZ0KCkge1xuICAgIHRoaXMudXBkYXRlQWxsKCk7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gdGhpcy5fcG9zaXRpb25YICsgdGhpcy50cmFzbGF0ZVdpZHRoO1xuICAgIGlmICh0aGlzLl9wb3NpdGlvblggPCAwKSB7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7dGhpcy5fcG9zaXRpb25YfXB4O1xuICAgICAgYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uWCA9IDA7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7MH07XG4gICAgICBgKTtcbiAgICB9XG4gIH1cbiAgX3RvX3JpZ2h0KCkge1xuICAgIHRoaXMudXBkYXRlQWxsKCk7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gdGhpcy5fcG9zaXRpb25YIC0gdGhpcy50cmFzbGF0ZVdpZHRoO1xuICAgIGlmICgtKHRoaXMuX3Bvc2l0aW9uWCkgKyB0aGlzLl93aXRoSG9zdCA8PSB0aGlzLl93aXRoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7dGhpcy5fcG9zaXRpb25YfXB4O1xuICAgICAgYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uWCA9IC0odGhpcy5fd2l0aCkgKyB0aGlzLl93aXRoSG9zdDtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHstKHRoaXMuX3dpdGgpICsgdGhpcy5fd2l0aEhvc3R9cHg7XG4gICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==