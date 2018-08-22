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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2hlYWRlci1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBdUIsVUFBVSxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7SUFrRG5ILDRCQUNVO1FBQUEsZUFBVSxHQUFWLFVBQVU7cUJBTlosR0FBRzswQkFFRSxDQUFDOzZCQUNFLEdBQUc7S0FNbEI7Ozs7SUFDRCxzQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7Ozs7S0FXNUQ7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7UUFFM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0tBQ2hEOzs7O0lBQ0QscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQ3BDLElBQUksQ0FBQyxVQUFVLGdCQUN0QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQ3BDLENBQUMsY0FDUixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBQ0Qsc0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQ3BDLElBQUksQ0FBQyxVQUFVLGdCQUN0QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsaUJBQ3JDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7O2dCQS9GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9oQ0EyQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsOG5CQUE4bkIsQ0FBQztvQkFDeG9CLElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUUsYUFBYTtxQkFDOUI7aUJBRUY7Ozs7Z0JBM0NtRCxVQUFVOzs7b0NBcUUzRCxTQUFTLFNBQUMsa0JBQWtCOzs2QkFyRS9COztTQTRDYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRGlyZWN0aXZlLCBSZW5kZXJlciwgRWxlbWVudFJlZiwgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktaGVhZGVyLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgbHlSaXBwbGVSYWRpdXM9XCJjb250YWluZXJTaXplXCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICAqbmdJZj1cIl9wb3NpdGlvblggIT0gMFwiXG4gIGNsYXNzPVwiX29wX2xlZnRcIlxuICAoY2xpY2spPVwiX3RvX2xlZnQoKVwiPlxuICA8c3Bhbj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgaGVpZ2h0OiAyNHB4OyB3aWR0aDogMjRweDsgdXNlci1zZWxlY3Q6IG5vbmU7IHRyYW5zaXRpb246IGFsbCA0NTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zO1wiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImtmamRkeG1cIiB0YWJpbmRleD1cIjBcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJfY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJfY29udGFpbmVyX2l0ZW1zXCIgI2VsZW1lbnRDb250YWluZXI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIl9vcF9yaWdodFwiIFxuICBseVJpcHBsZVJhZGl1cz1cImNvbnRhaW5lclNpemVcIlxuICBseVJpcHBsZVxuICBseVJpcHBsZUNlbnRlcmVkXG4gICpuZ0lmPVwiX3dpdGggPiAoLShfcG9zaXRpb25YKSArIF93aXRoSG9zdClcIlxuICAoY2xpY2spPVwiX3RvX3JpZ2h0KClcIj5cbiAgPHNwYW4+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGhlaWdodDogMjRweDsgd2lkdGg6IDI0cHg7IHVzZXItc2VsZWN0OiBub25lOyB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcztcIj48cGF0aCBkPVwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiPjwvcGF0aD48L3N2Zz5cbiAgPC9zcGFuPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jazt0b3A6MDtib3R0b206MDttYXJnaW46YXV0bztsaW5lLWhlaWdodDpub3JtYWx9Ll9jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmluaGVyaXQ7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47dG9wOjA7bGVmdDowfS5fY29udGFpbmVyX2l0ZW1ze2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNpdGlvbjo0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpO2xlZnQ6MDtoZWlnaHQ6MTAwJX0uX29wX2xlZnQsLl9vcF9yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O3otaW5kZXg6OTk7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG8gMDtjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDI0NSwwLDg3LC42Myl9Ll9vcF9sZWZ0OmhvdmVyLC5fb3BfcmlnaHQ6aG92ZXJ7Y29sb3I6I2Y1MDA1N30uX29wX2xlZnQgc3BhbiwuX29wX3JpZ2h0IHNwYW57ZmlsbDpjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9Ll9vcF9yaWdodHtyaWdodDowfS5fb3BfbGVmdHtsZWZ0OjB9YF0sXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ3VwZGF0ZUFsbCgpJyxcbiAgfSxcblxufSlcbmV4cG9ydCBjbGFzcyBMeUhlYWRlclBhZ2luYXRpb24ge1xuICBfd2l0aCA9IDE1MDtcbiAgX3dpdGhIb3N0OiBudW1iZXI7XG4gIF9wb3NpdGlvblggPSAwO1xuICB0cmFzbGF0ZVdpZHRoID0gMTAwO1xuICBlbGVtZW50Q29udGFpbmVyOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG5cbiAgfVxuICB1cGRhdGVBbGwoKSB7XG4gICAgdGhpcy5fd2l0aCA9IHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICB0aGlzLl93aXRoSG9zdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIC8qY29uc29sZS5sb2codGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoKTsqL1xuXG4gICAgLypjb25zb2xlLmxvZyhcbiAgICAgICd0aGlzLl9wb3NpdGlvblgnLFxuICAgICAgdGhpcy5fcG9zaXRpb25YLFxuICAgICAgJ3RoaXMuX3dpdGhIb3N0JyxcbiAgICAgIHRoaXMuX3dpdGhIb3N0LFxuICAgICAgJ3RoaXMuX3dpdGgnLFxuICAgICAgdGhpcy5fd2l0aCxcbiAgICApOyovXG4gIH1cbiAgQFZpZXdDaGlsZCgnZWxlbWVudENvbnRhaW5lcicpIF9lbGVtZW50Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50Q29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLl9jb250YWluZXJfaXRlbXMnKTtcbiAgICB0aGlzLl93aXRoSG9zdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIC8qY29uc29sZS5sb2codGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoKTsqL1xuICAgIHRoaXMuX3dpdGggPSB0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGg7XG4gIH1cbiAgX3RvX2xlZnQoKSB7XG4gICAgdGhpcy51cGRhdGVBbGwoKTtcbiAgICB0aGlzLl9wb3NpdGlvblggPSB0aGlzLl9wb3NpdGlvblggKyB0aGlzLnRyYXNsYXRlV2lkdGg7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uWCA8IDApIHtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHt0aGlzLl9wb3NpdGlvblh9cHg7XG4gICAgICBgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9zaXRpb25YID0gMDtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHswfTtcbiAgICAgIGApO1xuICAgIH1cbiAgfVxuICBfdG9fcmlnaHQoKSB7XG4gICAgdGhpcy51cGRhdGVBbGwoKTtcbiAgICB0aGlzLl9wb3NpdGlvblggPSB0aGlzLl9wb3NpdGlvblggLSB0aGlzLnRyYXNsYXRlV2lkdGg7XG4gICAgaWYgKC0odGhpcy5fcG9zaXRpb25YKSArIHRoaXMuX3dpdGhIb3N0IDw9IHRoaXMuX3dpdGgpIHtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHt0aGlzLl9wb3NpdGlvblh9cHg7XG4gICAgICBgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9zaXRpb25YID0gLSh0aGlzLl93aXRoKSArIHRoaXMuX3dpdGhIb3N0O1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAkey0odGhpcy5fd2l0aCkgKyB0aGlzLl93aXRoSG9zdH1weDtcbiAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19