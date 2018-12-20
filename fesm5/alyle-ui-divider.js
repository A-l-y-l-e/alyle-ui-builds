import { Directive, Input, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var style = function (theme) { return ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
}); };
var LyDivider = /** @class */ (function () {
    function LyDivider(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: /**
         * Add indentation (72px)
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._inset = val;
            this._theme.addStyle("lyDivider.inset", function () { return ({
                marginBefore: '74px'
            }); }, this._el.nativeElement, this._insetClass);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyDivider.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    };
    LyDivider.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-divider'
                },] }
    ];
    /** @nocollapse */
    LyDivider.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyDivider.propDecorators = {
        inset: [{ type: Input }]
    };
    return LyDivider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyDividerModule = /** @class */ (function () {
    function LyDividerModule() {
    }
    LyDividerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyDivider],
                    declarations: [LyDivider]
                },] }
    ];
    return LyDividerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyDivider, LyDividerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZGl2aWRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2RpdmlkZXIvZGl2aWRlci50cyIsIm5nOi8vQGFseWxlL3VpL2RpdmlkZXIvZGl2aWRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGl2aWRlcixcbiAgaGVpZ2h0OiAnMXB4J1xufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRpdmlkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RGl2aWRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2luc2V0OiBib29sZWFuO1xuICBwcml2YXRlIF9pbnNldENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEFkZCBpbmRlbnRhdGlvbiAoNzJweCkgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2V0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2luc2V0ID0gdmFsO1xuICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5RGl2aWRlci5pbnNldGAsXG4gICAgICAoKSA9PiAoe1xuICAgICAgICBtYXJnaW5CZWZvcmU6ICc3NHB4J1xuICAgICAgfSksXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faW5zZXRDbGFzc1xuICAgICk7XG4gIH1cbiAgZ2V0IGluc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnNldDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseURpdmlkZXInLCBzdHlsZSk7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeURpdmlkZXIgfSBmcm9tICcuL2RpdmlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlEaXZpZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlEaXZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBMeURpdmlkZXJNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBR00sS0FBSyxHQUFHLFVBQUMsS0FBcUIsSUFBSyxRQUFDO0lBQ3hDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLElBQUM7O0lBMEJBLG1CQUNVLEdBQWUsRUFDZixNQUFnQjtRQURoQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtLQUNyQjtJQW5CTCxzQkFDSSw0QkFBSzs7OztRQVdUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7Ozs7O1FBZEQsVUFDVSxHQUFZO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixpQkFBaUIsRUFDakIsY0FBTSxRQUFDO2dCQUNMLFlBQVksRUFBRSxNQUFNO2FBQ3JCLElBQUMsRUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztTQUNIOzs7T0FBQTs7OztJQVVELDRCQUFROzs7SUFBUjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2pEOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFYMEIsVUFBVTtnQkFDNUIsUUFBUTs7O3dCQWdCZCxLQUFLOztJQXlCUixnQkFBQztDQWpDRDs7Ozs7O0FDVEE7SUFHQTtLQU1DOztnQkFOQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNwQixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQzFCOztJQUdELHNCQUFDO0NBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=