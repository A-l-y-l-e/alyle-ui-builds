/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { toBoolean } from '../minimal/is-boolean';
/**
 * @record
 */
export function CanFlat() { }
if (false) {
    /** @type {?} */
    CanFlat.prototype.flat;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinFlat(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._flat = false;
        }
        /**
         * @return {?}
         */
        get flat() { return this._flat; }
        /**
         * @param {?} value
         * @return {?}
         */
        set flat(value) { this._flat = toBoolean(value); }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vZmxhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRWxELDZCQUVDOzs7SUFEQyx1QkFBYzs7Ozs7OztBQUdoQixNQUFNLFVBQVUsU0FBUyxDQUF3QixJQUFPO0lBQ3RELE9BQU8sS0FBTSxTQUFRLElBQUk7Ozs7UUFNdkIsWUFBWSxHQUFHLElBQVc7WUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUxyQyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBS2UsQ0FBQzs7OztRQUgvQyxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFVLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBR3hELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRmxhdCB7XG4gIGZsYXQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkZsYXQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRmxhdD4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0IGZsYXQoKSB7IHJldHVybiB0aGlzLl9mbGF0OyB9XG4gICAgc2V0IGZsYXQodmFsdWU6IGFueSkgeyB0aGlzLl9mbGF0ID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiJdfQ==