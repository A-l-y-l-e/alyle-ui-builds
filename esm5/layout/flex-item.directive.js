/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, Optional } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
import { LyFlex } from './flex.directive';
import { LyFlexBase } from './flex-base';
var LyFlexItem = /** @class */ (function (_super) {
    tslib_1.__extends(LyFlexItem, _super);
    function LyFlexItem(elementRef, renderer, coreTheme, mediaQueries, lyFlex) {
        var _this = _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
        _this.lyFlex = lyFlex;
        return _this;
    }
    Object.defineProperty(LyFlexItem.prototype, "fxItem", {
        set: /**
         * @param {?} valArray
         * @return {?}
         */
        function (valArray) {
            var _this = this;
            if (!this._rawClass) {
                this._rawClass = [];
            }
            /** *
             * Save previous classes
              @type {?} */
            var prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            valArray.forEach(function (key) {
                /** @type {?} */
                var newClass;
                /** @type {?} */
                var values = key.split(':');
                if (values[0] === 'flex') {
                    newClass = _this._createFlexClass(key, /** @type {?} */ (values[1]), _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'order') {
                    newClass = _this._createOrderClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'alignSelf') {
                    newClass = _this._createAlignSelfClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                _this._rawClass.push(newClass);
            });
            /** Delete previous classes if they exist */
            if (prevClasses.length) {
                prevClasses.forEach(function (klass) {
                    _this._renderer.removeClass(_this._elementRef.nativeElement, klass);
                });
            }
            /** Add new class */
            this._rawClass.forEach(function (klass) {
                _this._renderer.addClass(_this._elementRef.nativeElement, klass);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlexItem.prototype, "fxFlex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxFlex;
        },
        /** Works the same as flex, default: 1 */
        set: /**
         * Works the same as flex, default: 1
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxFlex !== val) {
                /** *
                 * create Style
                  @type {?} */
                var newClass = this._createFlexClass(val, val);
                this._updateClass(newClass, this._fxFlexClass);
                this._fxFlexClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlexItem.prototype, "fxOrder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxOrder;
        },
        /** Works the same as order, default: 1 */
        set: /**
         * Works the same as order, default: 1
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxOrder !== val) {
                /** *
                 * create Style
                  @type {?} */
                var newClass = this._createOrderClass(val, val);
                this._updateClass(newClass, this._fxOrderClass);
                this._fxOrderClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlexItem.prototype, "fxAlignSelf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxAlignSelf;
        },
        /** Works the same as order, align-self: center */
        set: /**
         * Works the same as order, align-self: center
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxAlignSelf !== val) {
                /** *
                 * create Style
                  @type {?} */
                var newClass = this._createAlignSelfClass(val, val);
                this._updateClass(newClass, this._fxAlignSelfClass);
                this._fxAlignSelfClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlexItem.prototype._createFlexClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxFlex = val || '1';
        /** @type {?} */
        var newKey = "k-fx-flex:" + (key || this.fxFlex);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return ("flex:" + _this.fxFlex + ";"); }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlexItem.prototype._createOrderClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxOrder = val || '1';
        /** @type {?} */
        var newKey = "k-fx-order:" + (key || this.fxOrder);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return ("order:" + _this.fxOrder + ";"); }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlexItem.prototype._createAlignSelfClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxAlignSelf = val || '1';
        /** @type {?} */
        var newKey = "k-fx-alignSelf:" + (key || this.fxAlignSelf);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return ("align-self:" + _this.fxAlignSelf + ";"); }, media);
    };
    LyFlexItem.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fxItem], [fxFlex], [fxOrder]',
                    exportAs: 'lyFxItem'
                },] },
    ];
    /** @nocollapse */
    LyFlexItem.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: CoreTheme },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
        { type: LyFlex, decorators: [{ type: Optional }] }
    ]; };
    LyFlexItem.propDecorators = {
        fxItem: [{ type: Input }],
        fxFlex: [{ type: Input }],
        fxOrder: [{ type: Input }],
        fxAlignSelf: [{ type: Input }]
    };
    return LyFlexItem;
}(LyFlexBase));
export { LyFlexItem };
if (false) {
    /** @type {?} */
    LyFlexItem.prototype._fxFlex;
    /** @type {?} */
    LyFlexItem.prototype._fxFlexClass;
    /** @type {?} */
    LyFlexItem.prototype._fxOrder;
    /** @type {?} */
    LyFlexItem.prototype._fxOrderClass;
    /** @type {?} */
    LyFlexItem.prototype._fxAlignSelf;
    /** @type {?} */
    LyFlexItem.prototype._fxAlignSelfClass;
    /** @type {?} */
    LyFlexItem.prototype._rawClass;
    /** @type {?} */
    LyFlexItem.prototype.lyFlex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9sYXlvdXQvIiwic291cmNlcyI6WyJmbGV4LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBT1Qsc0NBQVU7SUE4RnhDLG9CQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFNBQW9CLEVBQ2tCLFlBQWlCLEVBQ25DLE1BQWM7UUFMcEMsWUFPRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FDckQ7UUFIcUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTs7S0FHbkM7SUF6RkQsc0JBQ0ksOEJBQU07Ozs7O1FBRFYsVUFDVyxRQUFrQjtZQUQ3QixpQkFxQ0M7WUFuQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3JCOzs7O1lBR0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFHbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDckI7WUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7Z0JBQ2xCLElBQUksUUFBUSxDQUFDOztn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QU0sTUFBTSxHQUFHLHFCQUFrQixHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDOztRQUUzRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDdEMsY0FBTSxPQUFBLENBQ0osZ0JBQWMsS0FBSSxDQUFDLFdBQVcsTUFBRyxDQUNsQyxFQUZLLENBRUwsRUFDRCxLQUFLLENBQ04sQ0FBQzs7O2dCQTlJTCxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkFWcUMsVUFBVTtnQkFBckIsU0FBUztnQkFDM0IsU0FBUztnREE0R2IsUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBMUcvQixNQUFNLHVCQTJHVixRQUFROzs7eUJBdEZWLEtBQUs7eUJBd0NMLEtBQUs7MEJBY0wsS0FBSzs4QkFjTCxLQUFLOztxQkE1RlI7RUFXZ0MsVUFBVTtTQUE3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUsIFVuZGVmaW5lZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgTHlGbGV4IH0gZnJvbSAnLi9mbGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmeEl0ZW1dLCBbZnhGbGV4XSwgW2Z4T3JkZXJdJyxcbiAgZXhwb3J0QXM6ICdseUZ4SXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGbGV4SXRlbSBleHRlbmRzIEx5RmxleEJhc2Uge1xuXG4gIHByaXZhdGUgX2Z4RmxleDogc3RyaW5nO1xuICBwcml2YXRlIF9meEZsZXhDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Z4T3JkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhPcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhBbGlnblNlbGY6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhBbGlnblNlbGZDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Jhd0NsYXNzOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzZXQgZnhJdGVtKHZhbEFycmF5OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuXG4gICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG4gICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZmxleCcpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbGV4Q2xhc3Moa2V5LCB2YWx1ZXNbMV0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ29yZGVyJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZU9yZGVyQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnYWxpZ25TZWxmJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduU2VsZkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgIH0pO1xuICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBmbGV4LCBkZWZhdWx0OiAxICovXG4gIEBJbnB1dCgpXG4gIHNldCBmeEZsZXgodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5meEZsZXggIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbGV4Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RmxleENsYXNzKTtcbiAgICAgIHRoaXMuX2Z4RmxleENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEZsZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RmxleDtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBvcmRlciwgZGVmYXVsdDogMSAqL1xuICBASW5wdXQoKVxuICBzZXQgZnhPcmRlcih2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZ4T3JkZXIgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVPcmRlckNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meE9yZGVyQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhPcmRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeE9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9meE9yZGVyO1xuICB9XG5cbiAgLyoqIFdvcmtzIHRoZSBzYW1lIGFzIG9yZGVyLCBhbGlnbi1zZWxmOiBjZW50ZXIgKi9cbiAgQElucHV0KClcbiAgc2V0IGZ4QWxpZ25TZWxmKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZnhBbGlnblNlbGYgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnblNlbGZDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhBbGlnblNlbGZDbGFzcyk7XG4gICAgICB0aGlzLl9meEFsaWduU2VsZkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEFsaWduU2VsZigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhBbGlnblNlbGY7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGx5RmxleDogTHlGbGV4XG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbGV4Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4RmxleCA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZmxleDoke2tleSB8fCB0aGlzLmZ4RmxleH1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleDoke3RoaXMuZnhGbGV4fTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlT3JkZXJDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnhPcmRlciA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtb3JkZXI6JHtrZXkgfHwgdGhpcy5meE9yZGVyfWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBvcmRlcjoke3RoaXMuZnhPcmRlcn07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFsaWduU2VsZkNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meEFsaWduU2VsZiA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtYWxpZ25TZWxmOiR7a2V5IHx8IHRoaXMuZnhBbGlnblNlbGZ9YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgYGFsaWduLXNlbGY6JHt0aGlzLmZ4QWxpZ25TZWxmfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG4iXX0=