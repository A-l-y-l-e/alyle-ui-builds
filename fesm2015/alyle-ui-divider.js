import { Directive, Input, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const style = (theme) => ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
});
class LyDivider {
    /**
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * Add indentation (72px)
     * @param {?} val
     * @return {?}
     */
    set inset(val) {
        this._inset = val;
        this._theme.addStyle(`lyDivider.inset`, () => ({
            marginBefore: '74px'
        }), this._el.nativeElement, this._insetClass);
    }
    /**
     * @return {?}
     */
    get inset() {
        return this._inset;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    }
}
LyDivider.decorators = [
    { type: Directive, args: [{
                selector: 'ly-divider'
            },] }
];
/** @nocollapse */
LyDivider.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDivider.propDecorators = {
    inset: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyDividerModule {
}
LyDividerModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyDivider],
                declarations: [LyDivider]
            },] }
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZGl2aWRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2RpdmlkZXIvZGl2aWRlci50cyIsIm5nOi8vQGFseWxlL3VpL2RpdmlkZXIvZGl2aWRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGl2aWRlcixcbiAgaGVpZ2h0OiAnMXB4J1xufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRpdmlkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RGl2aWRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2luc2V0OiBib29sZWFuO1xuICBwcml2YXRlIF9pbnNldENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEFkZCBpbmRlbnRhdGlvbiAoNzJweCkgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2V0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2luc2V0ID0gdmFsO1xuICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5RGl2aWRlci5pbnNldGAsXG4gICAgICAoKSA9PiAoe1xuICAgICAgICBtYXJnaW5CZWZvcmU6ICc3NHB4J1xuICAgICAgfSksXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faW5zZXRDbGFzc1xuICAgICk7XG4gIH1cbiAgZ2V0IGluc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnNldDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseURpdmlkZXInLCBzdHlsZSk7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeURpdmlkZXIgfSBmcm9tICcuL2RpdmlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlEaXZpZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlEaXZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBMeURpdmlkZXJNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO01BR00sS0FBSyxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN4QyxPQUFPLEVBQUUsT0FBTztJQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU87SUFDOUIsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFDO01BS1csU0FBUzs7Ozs7SUFxQnBCLFlBQ1UsR0FBZSxFQUNmLE1BQWdCO1FBRGhCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFVO0tBQ3JCOzs7Ozs7SUFuQkwsSUFDSSxLQUFLLENBQUMsR0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsaUJBQWlCLEVBQ2pCLE9BQU87WUFDTCxZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLEVBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7S0FDSDs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7OztJQU9ELFFBQVE7O2NBQ0EsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqRDs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVgwQixVQUFVO1lBQzVCLFFBQVE7OztvQkFnQmQsS0FBSzs7Ozs7OztBQ2pCUixNQU9hLGVBQWU7OztZQUozQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNwQixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9