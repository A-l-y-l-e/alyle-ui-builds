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
                    host: {
                        '(mouseenter)': 'updateAll()',
                    },
                    styles: [":host{position:absolute;width:100%;height:100%;display:inline-block;top:0;bottom:0;margin:auto;line-height:normal}._container{position:absolute;height:inherit;width:100%;overflow:hidden;top:0;left:0}._container_items{display:inline-flex;position:absolute;transition:450ms cubic-bezier(.23,1,.32,1);left:0;height:100%}._op_left,._op_right{position:absolute;display:inline-block;width:24px;height:24px;z-index:99;top:0;bottom:0;margin:auto 0;cursor:pointer;color:rgba(245,0,87,.63)}._op_left:hover,._op_right:hover{color:#f50057}._op_left span,._op_right span{fill:currentColor;position:absolute;top:0}._op_right{right:0}._op_left{left:0}"]
                }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2hlYWRlci1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBa0IvRCw0QkFDVTtRQUFBLGVBQVUsR0FBVixVQUFVO1FBTnBCLGFBQVEsR0FBRyxDQUFDO1FBRVosa0JBQWEsQ0FBQyxDQUFDO1FBQ2YscUJBQWdCLEdBQUcsQ0FBQztLQU1uQjs7OztJQUNELHNDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7Ozs7Ozs7OztLQVc1RDs7OztJQUVELCtDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOztRQUUzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7S0FDaEQ7Ozs7SUFDRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQkFDcEMsSUFBSSxDQUFDLFVBQVUsZ0JBQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQkFDcEMsQ0FBQyxjQUNSLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFDRCxzQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQkFDcEMsSUFBSSxDQUFDLFVBQVUsZ0JBQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxvQkFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxpQkFDckMsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4aENBQXFDO29CQUlyQyxJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLGFBQWE7cUJBQzlCOztpQkFFRjs7OztnQkFYOEIsVUFBVTs7O29DQXFDdEMsU0FBUyxTQUFDLGtCQUFrQjs7NkJBckMvQjs7U0FZYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktaGVhZGVyLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ2hlYWRlci1wYWdpbmF0aW9uLmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnaGVhZGVyLXBhZ2luYXRpb24uY3NzJyxcbiAgXSxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAndXBkYXRlQWxsKCknLFxuICB9LFxuXG59KVxuZXhwb3J0IGNsYXNzIEx5SGVhZGVyUGFnaW5hdGlvbiB7XG4gIF93aXRoID0gMTUwO1xuICBfd2l0aEhvc3Q6IG51bWJlcjtcbiAgX3Bvc2l0aW9uWCA9IDA7XG4gIHRyYXNsYXRlV2lkdGggPSAxMDA7XG4gIGVsZW1lbnRDb250YWluZXI6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcblxuICB9XG4gIHVwZGF0ZUFsbCgpIHtcbiAgICB0aGlzLl93aXRoID0gdGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3dpdGhIb3N0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgLypjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGgpOyovXG5cbiAgICAvKmNvbnNvbGUubG9nKFxuICAgICAgJ3RoaXMuX3Bvc2l0aW9uWCcsXG4gICAgICB0aGlzLl9wb3NpdGlvblgsXG4gICAgICAndGhpcy5fd2l0aEhvc3QnLFxuICAgICAgdGhpcy5fd2l0aEhvc3QsXG4gICAgICAndGhpcy5fd2l0aCcsXG4gICAgICB0aGlzLl93aXRoLFxuICAgICk7Ki9cbiAgfVxuICBAVmlld0NoaWxkKCdlbGVtZW50Q29udGFpbmVyJykgX2VsZW1lbnRDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuX2NvbnRhaW5lcl9pdGVtcycpO1xuICAgIHRoaXMuX3dpdGhIb3N0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgLypjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGgpOyovXG4gICAgdGhpcy5fd2l0aCA9IHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgfVxuICBfdG9fbGVmdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFsbCgpO1xuICAgIHRoaXMuX3Bvc2l0aW9uWCA9IHRoaXMuX3Bvc2l0aW9uWCArIHRoaXMudHJhc2xhdGVXaWR0aDtcbiAgICBpZiAodGhpcy5fcG9zaXRpb25YIDwgMCkge1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAke3RoaXMuX3Bvc2l0aW9uWH1weDtcbiAgICAgIGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblggPSAwO1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAkezB9O1xuICAgICAgYCk7XG4gICAgfVxuICB9XG4gIF90b19yaWdodCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFsbCgpO1xuICAgIHRoaXMuX3Bvc2l0aW9uWCA9IHRoaXMuX3Bvc2l0aW9uWCAtIHRoaXMudHJhc2xhdGVXaWR0aDtcbiAgICBpZiAoLSh0aGlzLl9wb3NpdGlvblgpICsgdGhpcy5fd2l0aEhvc3QgPD0gdGhpcy5fd2l0aCkge1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAke3RoaXMuX3Bvc2l0aW9uWH1weDtcbiAgICAgIGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblggPSAtKHRoaXMuX3dpdGgpICsgdGhpcy5fd2l0aEhvc3Q7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7LSh0aGlzLl93aXRoKSArIHRoaXMuX3dpdGhIb3N0fXB4O1xuICAgICAgYCk7XG4gICAgfVxuICB9XG59XG4iXX0=