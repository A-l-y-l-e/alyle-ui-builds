/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
/** @type {?} */
export var LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
/** @type {?} */
var HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft',
    'slidecancel'
];
var LyHammerGestureConfig = /** @class */ (function (_super) {
    tslib_1.__extends(LyHammerGestureConfig, _super);
    function LyHammerGestureConfig(_hammerOptions) {
        var _this = _super.call(this) || this;
        _this._hammerOptions = _hammerOptions;
        _this.events = HAMMER_GESTURES_EVENTS;
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
        var hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        /** @type {?} */
        var mc = new hammer(element, this._hammerOptions || {});
        /** @type {?} */
        var pan = new hammer.Pan();
        /** @type {?} */
        var swipe = new hammer.Swipe();
        /** @type {?} */
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
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
        { type: Injectable }
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
    LyHammerGestureConfig.prototype.events;
    /** @type {?} */
    LyHammerGestureConfig.prototype._hammerOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR2hFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsbUJBQW1CLENBQUM7O0lBRWpGLHNCQUFzQixHQUFHO0lBQzdCLE9BQU87SUFDUCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtDQUNkO0FBRUQ7SUFDMkMsaURBQW1CO0lBRTVELCtCQUNpRCxjQUE2QjtRQUQ5RSxZQUdFLGlCQUFPLFNBQ1I7UUFIZ0Qsb0JBQWMsR0FBZCxjQUFjLENBQWU7UUFGOUUsWUFBTSxHQUFhLHNCQUFzQixDQUFDOztJQUsxQyxDQUFDOzs7OztJQUNELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFvQjs7WUFDeEIsTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTs7WUFDdEUsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQzs7WUFFbkQsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTs7WUFDdEIsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTs7WUFDMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsRUFBRSxLQUFLLENBQUM7UUFFaEYsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6Qiw0Q0FBNEM7UUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxzRkFBc0Y7Ozs7Ozs7O0lBQzlFLGlEQUFpQjs7Ozs7OztJQUF6QixVQUEwQixJQUFTLEVBQUUsT0FBWTtRQUFFLHNCQUFzQjthQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7WUFBdEIscUNBQXNCOzs7WUFDakUsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRWxELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUU3RCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOztnQkEvQkYsVUFBVTs7OztnREFJTixRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7SUE0QnpDLDRCQUFDO0NBQUEsQUFoQ0QsQ0FDMkMsbUJBQW1CLEdBK0I3RDtTQS9CWSxxQkFBcUI7OztJQUNoQyx1Q0FBMEM7O0lBRXhDLCtDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuY29uc3QgSEFNTUVSX0dFU1RVUkVTX0VWRU5UUyA9IFtcbiAgJ3NsaWRlJyxcbiAgJ3NsaWRlc3RhcnQnLFxuICAnc2xpZGVlbmQnLFxuICAnc2xpZGVyaWdodCcsXG4gICdzbGlkZWxlZnQnLFxuICAnc2xpZGVjYW5jZWwnXG5dO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIGV2ZW50czogc3RyaW5nW10gPSBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgY29uc3QgaGFtbWVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAod2luZG93IGFzIGFueSkuSGFtbWVyIDogbnVsbDtcbiAgICBjb25zdCBtYyA9IG5ldyBoYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB7fSk7XG5cbiAgICBjb25zdCBwYW4gPSBuZXcgaGFtbWVyLlBhbigpO1xuICAgIGNvbnN0IHN3aXBlID0gbmV3IGhhbW1lci5Td2lwZSgpO1xuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwYW4sIHtldmVudDogJ3NsaWRlJywgdGhyZXNob2xkOiAwfSwgc3dpcGUpO1xuXG4gICAgcGFuLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwYW4sIHNsaWRlXSk7XG4gICAgcmV0dXJuIG1jO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUmVjb2duaXplcihiYXNlOiBhbnksIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgKGJhc2UuY29uc3RydWN0b3IpKG9wdGlvbnMpO1xuXG4gICAgaW5oZXJpdGFuY2VzLnB1c2goYmFzZSk7XG4gICAgaW5oZXJpdGFuY2VzLmZvckVhY2goaXRlbSA9PiByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgoaXRlbSkpO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZXI7XG4gIH1cbn1cbiJdfQ==