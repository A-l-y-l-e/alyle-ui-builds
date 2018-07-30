/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            /**
             * Save previous classes
             */
            var /** @type {?} */ prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            valArray.forEach(function (key) {
                var /** @type {?} */ newClass;
                var /** @type {?} */ values = key.split(':');
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
        set: /**
         * Works the same as flex, default: 1
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxFlex !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createFlexClass(val, val);
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
        set: /**
         * Works the same as order, default: 1
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxOrder !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createOrderClass(val, val);
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
        set: /**
         * Works the same as order, align-self: center
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxAlignSelf !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createAlignSelfClass(val, val);
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
        var /** @type {?} */ newKey = "k-fx-flex:" + (key || this.fxFlex);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("flex:" + _this.fxFlex + ";");
        }, media);
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
        var /** @type {?} */ newKey = "k-fx-order:" + (key || this.fxOrder);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("order:" + _this.fxOrder + ";");
        }, media);
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
        var /** @type {?} */ newKey = "k-fx-alignSelf:" + (key || this.fxAlignSelf);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("align-self:" + _this.fxAlignSelf + ";");
        }, media);
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
        { type: ElementRef, },
        { type: Renderer2, },
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
        { type: LyFlex, decorators: [{ type: Optional },] },
    ]; };
    LyFlexItem.propDecorators = {
        "fxItem": [{ type: Input },],
        "fxFlex": [{ type: Input },],
        "fxOrder": [{ type: Input },],
        "fxAlignSelf": [{ type: Input },],
    };
    return LyFlexItem;
}(LyFlexBase));
export { LyFlexItem };
function LyFlexItem_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyFlexItem.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyFlexItem.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyFlexItem.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9sYXlvdXQvIiwic291cmNlcyI6WyJmbGV4LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBT1Qsc0NBQVU7SUE4RnhDLG9CQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFNBQW9CLEVBQ2tCLGNBQ2xCO1FBTHRCLFlBT0Usa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQ3JEO1FBSHFCLFlBQU0sR0FBTixNQUFNOztLQUczQjswQkF4RkcsOEJBQU07Ozs7O2tCQUFDLFFBQWtCOztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDckI7Ozs7WUFHRCxxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFHbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDckI7WUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDbEIscUJBQUksUUFBUSxDQUFDO2dCQUNiLHFCQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxD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QUksQ0FBQyxXQUFXLE1BQUcsQ0FDbEM7UUFGSyxDQUVMLEVBQ0QsS0FBSyxDQUNOLENBQUM7OztnQkE5SUwsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBVnFDLFVBQVU7Z0JBQXJCLFNBQVM7Z0JBQzNCLFNBQVM7Z0RBNEdiLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQTFHL0IsTUFBTSx1QkEyR1YsUUFBUTs7OzJCQXRGVixLQUFLOzJCQXdDTCxLQUFLOzRCQWNMLEtBQUs7Z0NBY0wsS0FBSzs7cUJBNUZSO0VBV2dDLFVBQVU7U0FBN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lLCBVbmRlZmluZWQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IEx5RmxleCB9IGZyb20gJy4vZmxleC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlGbGV4QmFzZSB9IGZyb20gJy4vZmxleC1iYXNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnhJdGVtXSwgW2Z4RmxleF0sIFtmeE9yZGVyXScsXG4gIGV4cG9ydEFzOiAnbHlGeEl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5RmxleEl0ZW0gZXh0ZW5kcyBMeUZsZXhCYXNlIHtcblxuICBwcml2YXRlIF9meEZsZXg6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhGbGV4Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meE9yZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z4T3JkZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Z4QWxpZ25TZWxmOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z4QWxpZ25TZWxmQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXdDbGFzczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4SXRlbSh2YWxBcnJheTogc3RyaW5nW10pIHtcbiAgICBpZiAoIXRoaXMuX3Jhd0NsYXNzKSB7XG4gICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKiBTYXZlIHByZXZpb3VzIGNsYXNzZXMgICovXG4gICAgY29uc3QgcHJldkNsYXNzZXMgPSB0aGlzLl9yYXdDbGFzcztcblxuICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgIGlmICh0aGlzLl9yYXdDbGFzcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuICAgIHZhbEFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxleENsYXNzKGtleSwgdmFsdWVzWzFdIGFzIGFueSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdvcmRlcicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVPcmRlckNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2FsaWduU2VsZicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnblNlbGZDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yYXdDbGFzcy5wdXNoKG5ld0NsYXNzKTtcbiAgICB9KTtcbiAgICAvKiogRGVsZXRlIHByZXZpb3VzIGNsYXNzZXMgaWYgdGhleSBleGlzdCAqL1xuICAgIGlmIChwcmV2Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQWRkIG5ldyBjbGFzcyAqL1xuICAgIHRoaXMuX3Jhd0NsYXNzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogV29ya3MgdGhlIHNhbWUgYXMgZmxleCwgZGVmYXVsdDogMSAqL1xuICBASW5wdXQoKVxuICBzZXQgZnhGbGV4KHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZnhGbGV4ICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxleENsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEZsZXhDbGFzcyk7XG4gICAgICB0aGlzLl9meEZsZXhDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhGbGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9meEZsZXg7XG4gIH1cblxuICAvKiogV29ya3MgdGhlIHNhbWUgYXMgb3JkZXIsIGRlZmF1bHQ6IDEgKi9cbiAgQElucHV0KClcbiAgc2V0IGZ4T3JkZXIodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5meE9yZGVyICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlT3JkZXJDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhPcmRlckNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4T3JkZXJDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhPcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhPcmRlcjtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBvcmRlciwgYWxpZ24tc2VsZjogY2VudGVyICovXG4gIEBJbnB1dCgpXG4gIHNldCBmeEFsaWduU2VsZih2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZ4QWxpZ25TZWxmICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQWxpZ25TZWxmQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4QWxpZ25TZWxmQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhBbGlnblNlbGZDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhBbGlnblNlbGYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4QWxpZ25TZWxmO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBseUZsZXg6IEx5RmxleFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgY29yZVRoZW1lLCBtZWRpYVF1ZXJpZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxleENsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meEZsZXggPSB2YWwgfHwgJzEnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LWZsZXg6JHtrZXkgfHwgdGhpcy5meEZsZXh9YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgYGZsZXg6JHt0aGlzLmZ4RmxleH07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU9yZGVyQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4T3JkZXIgPSB2YWwgfHwgJzEnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LW9yZGVyOiR7a2V5IHx8IHRoaXMuZnhPcmRlcn1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgb3JkZXI6JHt0aGlzLmZ4T3JkZXJ9O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBbGlnblNlbGZDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnhBbGlnblNlbGYgPSB2YWwgfHwgJzEnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LWFsaWduU2VsZjoke2tleSB8fCB0aGlzLmZ4QWxpZ25TZWxmfWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBhbGlnbi1zZWxmOiR7dGhpcy5meEFsaWduU2VsZn07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuIl19