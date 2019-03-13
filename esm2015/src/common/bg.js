/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_BG = 'primary';
/**
 * @record
 */
export function CanBg() { }
if (false) {
    /** @type {?} */
    CanBg.prototype.bg;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanBg.prototype._superHyperInternalPropertyBg;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinBg(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get bg() { return this._superHyperInternalPropertyBg; }
        /**
         * @param {?} val
         * @return {?}
         */
        set bg(val) {
            /** @type {?} */
            const defaultColor = val || DEFAULT_BG;
            if (defaultColor !== this.bg) {
                this._superHyperInternalPropertyBg = defaultColor;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2JnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BRU0sVUFBVSxHQUFHLFNBQVM7Ozs7QUFFNUIsMkJBTUM7OztJQUxDLG1CQUFXOzs7OztJQUlYLDhDQUErQzs7Ozs7OztBQUdqRCxNQUFNLFVBQVUsT0FBTyxDQUF3QixJQUFPO0lBQ3BELE9BQU8sS0FBTSxTQUFRLElBQUk7Ozs7UUFHdkIsSUFBSSxFQUFFLEtBQWEsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDOzs7OztRQUMvRCxJQUFJLEVBQUUsQ0FBQyxHQUFXOztrQkFDVixZQUFZLEdBQUcsR0FBRyxJQUFJLFVBQVU7WUFDdEMsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLDZCQUE2QixHQUFHLFlBQVksQ0FBQzthQUNuRDtRQUNILENBQUM7Ozs7UUFFRCxZQUFZLEdBQUcsSUFBVztZQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkJnIHtcbiAgYmc6IHN0cmluZztcbiAgLyoqXG4gICAqIEl0IGlzIG9ubHkgdXNlZCBmb3IgY29tbW9uIGJlaGF2aW9yLCB0aGVyZWZvcmUsIGl0IHNob3VsZCBub3QgYmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMuXG4gICAqL1xuICByZWFkb25seSBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlCZzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5CZzxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5CZz4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Qmc6IHN0cmluZztcblxuICAgIGdldCBiZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlCZzsgfVxuICAgIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQkc7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmJnKSB7XG4gICAgICAgIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5QmcgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==