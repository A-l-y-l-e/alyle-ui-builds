/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
export class LyHeaderPagination {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._with = 150;
        this._positionX = 0;
        this.traslateWidth = 100;
    }
    /**
     * @return {?}
     */
    updateAll() {
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
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.elementContainer = this.elementRef.nativeElement.querySelector('._container_items');
        this._withHost = this.elementRef.nativeElement.clientWidth;
        /*console.log(this.elementContainer.clientWidth);*/
        this._with = this.elementContainer.clientWidth;
    }
    /**
     * @return {?}
     */
    _to_left() {
        this.updateAll();
        this._positionX = this._positionX + this.traslateWidth;
        if (this._positionX < 0) {
            this.elementContainer.setAttribute('style', `
      left: ${this._positionX}px;
      `);
        }
        else {
            this._positionX = 0;
            this.elementContainer.setAttribute('style', `
      left: ${0};
      `);
        }
    }
    /**
     * @return {?}
     */
    _to_right() {
        this.updateAll();
        this._positionX = this._positionX - this.traslateWidth;
        if (-(this._positionX) + this._withHost <= this._with) {
            this.elementContainer.setAttribute('style', `
      left: ${this._positionX}px;
      `);
        }
        else {
            this._positionX = -(this._with) + this._withHost;
            this.elementContainer.setAttribute('style', `
      left: ${-(this._with) + this._withHost}px;
      `);
        }
    }
}
LyHeaderPagination.decorators = [
    { type: Component, args: [{
                selector: 'ly-header-pagination',
                template: `<div
  lyRippleRadius="containerSize"
  lyRipple
  lyRippleCentered
  *ngIf="_positionX != 0"
  class="_op_left"
  (click)="_to_left()">
  <span>
    <svg viewBox="0 0 24 24" style="display: inline-block; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
  </span>
</div>
<div class="kfjddxm" tabindex="0"></div>
<div class="_container">
  <div class="_container_items" #elementContainer>
    <ng-content></ng-content>
  </div>
</div>
<div class="_op_right" 
  lyRippleRadius="containerSize"
  lyRipple
  lyRippleCentered
  *ngIf="_with > (-(_positionX) + _withHost)"
  (click)="_to_right()">
  <span>
    <svg viewBox="0 0 24 24" style="display: inline-block; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
  </span>
</div>
`,
                styles: [`:host{position:absolute;width:100%;height:100%;display:inline-block;top:0;bottom:0;margin:auto;line-height:normal}._container{position:absolute;height:inherit;width:100%;overflow:hidden;top:0;left:0}._container_items{display:inline-flex;position:absolute;transition:450ms cubic-bezier(.23,1,.32,1) 0s;left:0;height:100%}._op_left,._op_right{position:absolute;display:inline-block;width:24px;height:24px;z-index:99;top:0;bottom:0;margin:auto 0;cursor:pointer;color:rgba(245,0,87,.63)}._op_left:hover,._op_right:hover{color:#f50057}._op_left span,._op_right span{fill:currentColor;position:absolute;top:0}._op_right{right:0}._op_left{left:0}`],
                host: {
                    '(mouseenter)': 'updateAll()',
                },
            },] },
];
/** @nocollapse */
LyHeaderPagination.ctorParameters = () => [
    { type: ElementRef, },
];
LyHeaderPagination.propDecorators = {
    "_elementContainer": [{ type: ViewChild, args: ['elementContainer',] },],
};
function LyHeaderPagination_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyHeaderPagination.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyHeaderPagination.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyHeaderPagination.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2hlYWRlci1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBdUIsVUFBVSxFQUFpQyxNQUFNLGVBQWUsQ0FBQztBQTRDckgsTUFBTTs7OztJQU1KLFlBQ1U7UUFBQSxlQUFVLEdBQVYsVUFBVTtxQkFOWixHQUFHOzBCQUVFLENBQUM7NkJBQ0UsR0FBRztLQU1sQjs7OztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7Ozs7S0FXNUQ7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOztRQUUzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7S0FDaEQ7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Y0FDcEMsSUFBSSxDQUFDLFVBQVU7T0FDdEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2NBQ3BDLENBQUM7T0FDUixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2NBQ3BDLElBQUksQ0FBQyxVQUFVO09BQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtjQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTO09BQ3JDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7OztZQS9GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsaW9CQUFpb0IsQ0FBQztnQkFDM29CLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsYUFBYTtpQkFDOUI7YUFFRjs7OztZQTNDbUQsVUFBVTs7O2tDQXFFM0QsU0FBUyxTQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBEaXJlY3RpdmUsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1oZWFkZXItcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICBseVJpcHBsZVJhZGl1cz1cImNvbnRhaW5lclNpemVcIlxuICBseVJpcHBsZVxuICBseVJpcHBsZUNlbnRlcmVkXG4gICpuZ0lmPVwiX3Bvc2l0aW9uWCAhPSAwXCJcbiAgY2xhc3M9XCJfb3BfbGVmdFwiXG4gIChjbGljayk9XCJfdG9fbGVmdCgpXCI+XG4gIDxzcGFuPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBoZWlnaHQ6IDI0cHg7IHdpZHRoOiAyNHB4OyB1c2VyLXNlbGVjdDogbm9uZTsgdHJhbnNpdGlvbjogYWxsIDQ1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXM7XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L3N2Zz5cbiAgPC9zcGFuPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwia2ZqZGR4bVwiIHRhYmluZGV4PVwiMFwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cIl9jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cIl9jb250YWluZXJfaXRlbXNcIiAjZWxlbWVudENvbnRhaW5lcj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiX29wX3JpZ2h0XCIgXG4gIGx5UmlwcGxlUmFkaXVzPVwiY29udGFpbmVyU2l6ZVwiXG4gIGx5UmlwcGxlXG4gIGx5UmlwcGxlQ2VudGVyZWRcbiAgKm5nSWY9XCJfd2l0aCA+ICgtKF9wb3NpdGlvblgpICsgX3dpdGhIb3N0KVwiXG4gIChjbGljayk9XCJfdG9fcmlnaHQoKVwiPlxuICA8c3Bhbj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgaGVpZ2h0OiAyNHB4OyB3aWR0aDogMjRweDsgdXNlci1zZWxlY3Q6IG5vbmU7IHRyYW5zaXRpb246IGFsbCA0NTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zO1wiPjxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L3NwYW4+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RvcDowO2JvdHRvbTowO21hcmdpbjphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbH0uX2NvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6aW5oZXJpdDt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjt0b3A6MDtsZWZ0OjB9Ll9jb250YWluZXJfaXRlbXN7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2l0aW9uOjQ1MG1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMHM7bGVmdDowO2hlaWdodDoxMDAlfS5fb3BfbGVmdCwuX29wX3JpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7ei1pbmRleDo5OTt0b3A6MDtib3R0b206MDttYXJnaW46YXV0byAwO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMjQ1LDAsODcsLjYzKX0uX29wX2xlZnQ6aG92ZXIsLl9vcF9yaWdodDpob3Zlcntjb2xvcjojZjUwMDU3fS5fb3BfbGVmdCBzcGFuLC5fb3BfcmlnaHQgc3BhbntmaWxsOmN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MH0uX29wX3JpZ2h0e3JpZ2h0OjB9Ll9vcF9sZWZ0e2xlZnQ6MH1gXSxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAndXBkYXRlQWxsKCknLFxuICB9LFxuXG59KVxuZXhwb3J0IGNsYXNzIEx5SGVhZGVyUGFnaW5hdGlvbiB7XG4gIF93aXRoID0gMTUwO1xuICBfd2l0aEhvc3Q6IG51bWJlcjtcbiAgX3Bvc2l0aW9uWCA9IDA7XG4gIHRyYXNsYXRlV2lkdGggPSAxMDA7XG4gIGVsZW1lbnRDb250YWluZXI6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcblxuICB9XG4gIHVwZGF0ZUFsbCgpIHtcbiAgICB0aGlzLl93aXRoID0gdGhpcy5lbGVtZW50Q29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3dpdGhIb3N0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgLypjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGgpOyovXG5cbiAgICAvKmNvbnNvbGUubG9nKFxuICAgICAgJ3RoaXMuX3Bvc2l0aW9uWCcsXG4gICAgICB0aGlzLl9wb3NpdGlvblgsXG4gICAgICAndGhpcy5fd2l0aEhvc3QnLFxuICAgICAgdGhpcy5fd2l0aEhvc3QsXG4gICAgICAndGhpcy5fd2l0aCcsXG4gICAgICB0aGlzLl93aXRoLFxuICAgICk7Ki9cbiAgfVxuICBAVmlld0NoaWxkKCdlbGVtZW50Q29udGFpbmVyJykgX2VsZW1lbnRDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuX2NvbnRhaW5lcl9pdGVtcycpO1xuICAgIHRoaXMuX3dpdGhIb3N0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgLypjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRDb250YWluZXIuY2xpZW50V2lkdGgpOyovXG4gICAgdGhpcy5fd2l0aCA9IHRoaXMuZWxlbWVudENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgfVxuICBfdG9fbGVmdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFsbCgpO1xuICAgIHRoaXMuX3Bvc2l0aW9uWCA9IHRoaXMuX3Bvc2l0aW9uWCArIHRoaXMudHJhc2xhdGVXaWR0aDtcbiAgICBpZiAodGhpcy5fcG9zaXRpb25YIDwgMCkge1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAke3RoaXMuX3Bvc2l0aW9uWH1weDtcbiAgICAgIGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblggPSAwO1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAkezB9O1xuICAgICAgYCk7XG4gICAgfVxuICB9XG4gIF90b19yaWdodCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFsbCgpO1xuICAgIHRoaXMuX3Bvc2l0aW9uWCA9IHRoaXMuX3Bvc2l0aW9uWCAtIHRoaXMudHJhc2xhdGVXaWR0aDtcbiAgICBpZiAoLSh0aGlzLl9wb3NpdGlvblgpICsgdGhpcy5fd2l0aEhvc3QgPD0gdGhpcy5fd2l0aCkge1xuICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICBsZWZ0OiAke3RoaXMuX3Bvc2l0aW9uWH1weDtcbiAgICAgIGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblggPSAtKHRoaXMuX3dpdGgpICsgdGhpcy5fd2l0aEhvc3Q7XG4gICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgIGxlZnQ6ICR7LSh0aGlzLl93aXRoKSArIHRoaXMuX3dpdGhIb3N0fXB4O1xuICAgICAgYCk7XG4gICAgfVxuICB9XG59XG4iXX0=