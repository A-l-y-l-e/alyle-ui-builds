/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { toBoolean } from '../minimal/is-boolean';
/**
 * @record
 */
export function CanRaised() { }
if (false) {
    /** @type {?} */
    CanRaised.prototype.raised;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanRaised.prototype._superHyperInternalPropertyRaised;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinRaised(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get raised() { return this._superHyperInternalPropertyRaised; }
        /**
         * @param {?} value
         * @return {?}
         */
        set raised(value) { this._superHyperInternalPropertyRaised = toBoolean(value); }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2NvbW1vbi9yYWlzZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVsRCwrQkFNQzs7O0lBTEMsMkJBQWdCOzs7OztJQUloQixzREFBb0Q7Ozs7Ozs7QUFHdEQsTUFBTSxVQUFVLFdBQVcsQ0FBd0IsSUFBTztJQUN4RCxPQUFPLEtBQU0sU0FBUSxJQUFJOzs7O1FBR3ZCLElBQUksTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDL0QsSUFBSSxNQUFNLENBQUMsS0FBVSxJQUFJLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O1FBRXJGLFlBQVksR0FBRyxJQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuUmFpc2VkIHtcbiAgcmFpc2VkOiBib29sZWFuO1xuICAvKipcbiAgICogSXQgaXMgb25seSB1c2VkIGZvciBjb21tb24gYmVoYXZpb3IsIHRoZXJlZm9yZSwgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgICovXG4gIHJlYWRvbmx5IF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVJhaXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluUmFpc2VkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblJhaXNlZD4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5UmFpc2VkOiBib29sZWFuO1xuXG4gICAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5UmFpc2VkOyB9XG4gICAgc2V0IHJhaXNlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5UmFpc2VkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiJdfQ==