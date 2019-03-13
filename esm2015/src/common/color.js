/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_COLOR = 'primary';
/**
 * @record
 */
export function CanColor() { }
if (false) {
    /** @type {?} */
    CanColor.prototype.color;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanColor.prototype._superHyperInternalPropertyColor;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinColor(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get color() { return this._superHyperInternalPropertyColor; }
        /**
         * @param {?} val
         * @return {?}
         */
        set color(val) {
            /** @type {?} */
            const defaultColor = val || DEFAULT_COLOR;
            if (defaultColor !== this.color) {
                this._superHyperInternalPropertyColor = defaultColor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BRU0sYUFBYSxHQUFHLFNBQVM7Ozs7QUFFL0IsOEJBTUM7OztJQUxDLHlCQUFjOzs7OztJQUlkLG9EQUFrRDs7Ozs7OztBQUdwRCxNQUFNLFVBQVUsVUFBVSxDQUF3QixJQUFPO0lBQ3ZELE9BQU8sS0FBTSxTQUFRLElBQUk7Ozs7UUFHdkIsSUFBSSxLQUFLLEtBQWEsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNyRSxJQUFJLEtBQUssQ0FBQyxHQUFXOztrQkFDYixZQUFZLEdBQUcsR0FBRyxJQUFJLGFBQWE7WUFDekMsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLFlBQVksQ0FBQzthQUN0RDtRQUNILENBQUM7Ozs7UUFFRCxZQUFZLEdBQUcsSUFBVztZQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkNvbG9yIHtcbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIEl0IGlzIG9ubHkgdXNlZCBmb3IgY29tbW9uIGJlaGF2aW9yLCB0aGVyZWZvcmUsIGl0IHNob3VsZCBub3QgYmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMuXG4gICAqL1xuICByZWFkb25seSBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5Db2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Q29sb3I6IHN0cmluZztcblxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvcjsgfVxuICAgIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Q29sb3IgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==