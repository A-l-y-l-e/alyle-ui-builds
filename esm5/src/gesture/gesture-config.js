/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
/** @type {?} */
export var LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
var LyHammerGestureConfig = /** @class */ (function (_super) {
    tslib_1.__extends(LyHammerGestureConfig, _super);
    function LyHammerGestureConfig(_hammerOptions) {
        var _this = _super.call(this) || this;
        _this._hammerOptions = _hammerOptions;
        _this._hammer = typeof window !== 'undefined' ? (/** @type {?} */ (window)).Hammer : null;
        _this.events = _this._hammer ? [
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    LyHammerGestureConfig.prototype.buildHammer = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var mc = new this._hammer(element, this._hammerOptions || undefined);
        /** @type {?} */
        var pan = new this._hammer.Pan();
        /** @type {?} */
        var swipe = new this._hammer.Swipe();
        /** @type {?} */
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        slide.recognizeWith(swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    };
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    LyHammerGestureConfig.prototype._createRecognizer = /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        /** @type {?} */
        var recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    LyHammerGestureConfig.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyHammerGestureConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] }] }
    ]; };
    return LyHammerGestureConfig;
}(HammerGestureConfig));
export { LyHammerGestureConfig };
if (false) {
    /** @type {?} */
    LyHammerGestureConfig.prototype._hammer;
    /** @type {?} */
    LyHammerGestureConfig.prototype.events;
    /** @type {?} */
    LyHammerGestureConfig.prototype._hammerOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUt2RixXQUFhLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFnQixtQkFBbUIsQ0FBQyxDQUFDOztJQUc3QyxpREFBbUI7SUFTNUQsK0JBQ2lELGNBQTZCO1FBRDlFLFlBSUUsaUJBQU8sU0FDUjtRQUpnRCxvQkFBYyxHQUFkLGNBQWMsQ0FBZTt3QkFUNUQsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxtQkFBQyxNQUFhLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7dUJBQzVELEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU87WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1NBQ1osQ0FBQyxDQUFDLENBQUMsRUFBRTs7S0FNTDs7Ozs7SUFDRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBb0I7O1FBVzlCLElBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsQ0FBQzs7UUFFdkUsSUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBQ3ZDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUM7S0FDWDs7Ozs7Ozs7SUFHTyxpREFBaUI7Ozs7Ozs7Y0FBQyxJQUFTLEVBQUUsT0FBWTtRQUFFLHNCQUFzQjthQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7WUFBdEIscUNBQXNCOzs7UUFDdkUsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFFN0QsT0FBTyxVQUFVLENBQUM7OztnQkFoRHJCLFVBQVU7Ozs7Z0RBV04sUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7O2dDQW5CekM7RUFTMkMsbUJBQW1CO1NBQWpELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIHByaXZhdGUgX2hhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gIGV2ZW50czogc3RyaW5nW10gPSB0aGlzLl9oYW1tZXIgPyBbXG4gICAgJ3NsaWRlJyxcbiAgICAnc2xpZGVzdGFydCcsXG4gICAgJ3NsaWRlZW5kJyxcbiAgICAnc2xpZGVyaWdodCcsXG4gICAgJ3NsaWRlbGVmdCdcbiAgXSA6IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zLFxuICAgIC8vIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgLy8gaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgIC8vICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdrLWhhbW1lci1jc3MnLCB7XG4gICAgLy8gICAgICcnOiAoKSA9PiAoXG4gICAgLy8gICAgICAgYHVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgIC8vICAgICAgIGAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO2BcbiAgICAvLyAgICAgKVxuICAgIC8vICAgfSk7XG4gICAgLy8gICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIC8vIH1cbiAgICBjb25zdCBtYyA9IG5ldyB0aGlzLl9oYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IHRoaXMuX2hhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyB0aGlzLl9oYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHNsaWRlLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iXX0=