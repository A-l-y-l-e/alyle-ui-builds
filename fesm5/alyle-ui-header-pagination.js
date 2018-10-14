import { Component, ViewChild, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LyRippleModule } from '@alyle/ui/ripple';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyHeaderPaginationModule = /** @class */ (function () {
    function LyHeaderPaginationModule() {
    }
    LyHeaderPaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyRippleModule],
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

export { LyHeaderPaginationModule, LyHeaderPagination };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaGVhZGVyLXBhZ2luYXRpb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9oZWFkZXItcGFnaW5hdGlvbi9oZWFkZXItcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BhbHlsZS91aS9oZWFkZXItcGFnaW5hdGlvbi9oZWFkZXItcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWhlYWRlci1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICdoZWFkZXItcGFnaW5hdGlvbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ2hlYWRlci1wYWdpbmF0aW9uLmNzcycsXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ3VwZGF0ZUFsbCgpJyxcbiAgfSxcblxufSlcbmV4cG9ydCBjbGFzcyBMeUhlYWRlclBhZ2luYXRpb24ge1xuICBfd2l0aCA9IDE1MDtcbiAgX3dpdGhIb3N0OiBudW1iZXI7XG4gIF9wb3NpdGlvblggPSAwO1xuICB0cmFzbGF0ZVdpZHRoID0gMTAwO1xuICBlbGVtZW50Q29udGFpbmVyOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG5cbiAgfVxuICB1cGRhdGVBbGwoKSB7XG4gICAgdGhpcy5fd2l0aCA9IHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICB0aGlzLl93aXRoSG9zdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIC8qY29uc29sZS5sb2codGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoKTsqL1xuXG4gICAgLypjb25zb2xlLmxvZyhcbiAgICAgICd0aGlzLl9wb3NpdGlvblgnLFxuICAgICAgdGhpcy5fcG9zaXRpb25YLFxuICAgICAgJ3RoaXMuX3dpdGhIb3N0JyxcbiAgICAgIHRoaXMuX3dpdGhIb3N0LFxuICAgICAgJ3RoaXMuX3dpdGgnLFxuICAgICAgdGhpcy5fd2l0aCxcbiAgICApOyovXG4gIH1cbiAgQFZpZXdDaGlsZCgnZWxlbWVudENvbnRhaW5lcicpIF9lbGVtZW50Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50Q29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLl9jb250YWluZXJfaXRlbXMnKTtcbiAgICB0aGlzLl93aXRoSG9zdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIC8qY29uc29sZS5sb2codGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoKTsqL1xuICAgIHRoaXMuX3dpdGggPSB0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGg7XG4gIH1cbiAgX3RvX2xlZnQoKSB7XG4gICAgdGhpcy51cGRhdGVBbGwoKTtcbiAgICB0aGlzLl9wb3NpdGlvblggPSB0aGlzLl9wb3NpdGlvblggKyB0aGlzLnRyYXNsYXRlV2lkdGg7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uWCA8IDApIHtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHt0aGlzLl9wb3NpdGlvblh9cHg7XG4gICAgICBgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9zaXRpb25YID0gMDtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHswfTtcbiAgICAgIGApO1xuICAgIH1cbiAgfVxuICBfdG9fcmlnaHQoKSB7XG4gICAgdGhpcy51cGRhdGVBbGwoKTtcbiAgICB0aGlzLl9wb3NpdGlvblggPSB0aGlzLl9wb3NpdGlvblggLSB0aGlzLnRyYXNsYXRlV2lkdGg7XG4gICAgaWYgKC0odGhpcy5fcG9zaXRpb25YKSArIHRoaXMuX3dpdGhIb3N0IDw9IHRoaXMuX3dpdGgpIHtcbiAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgbGVmdDogJHt0aGlzLl9wb3NpdGlvblh9cHg7XG4gICAgICBgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9zaXRpb25YID0gLSh0aGlzLl93aXRoKSArIHRoaXMuX3dpdGhIb3N0O1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAkey0odGhpcy5fd2l0aCkgKyB0aGlzLl93aXRoSG9zdH1weDtcbiAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUhlYWRlclBhZ2luYXRpb24gfSBmcm9tICcuL2hlYWRlci1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeVJpcHBsZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUhlYWRlclBhZ2luYXRpb25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUhlYWRlclBhZ2luYXRpb25dXG59KVxuZXhwb3J0IGNsYXNzIEx5SGVhZGVyUGFnaW5hdGlv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