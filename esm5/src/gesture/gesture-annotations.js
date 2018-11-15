/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function HammerInput() { }
if (false) {
    /** @type {?} */
    HammerInput.prototype.preventDefault;
    /** @type {?} */
    HammerInput.prototype.deltaX;
    /** @type {?} */
    HammerInput.prototype.deltaY;
    /** @type {?} */
    HammerInput.prototype.center;
}
/**
 * @record
 */
export function HammerStatic() { }
if (false) {
    /** @type {?} */
    HammerStatic.prototype.Pan;
    /** @type {?} */
    HammerStatic.prototype.Swipe;
    /** @type {?} */
    HammerStatic.prototype.Press;
    /* Skipping unhandled member: new(element: HTMLElement | SVGElement, options?: any): HammerManager;*/
}
/**
 * @record
 */
export function Recognizer() { }
if (false) {
    /* Skipping unhandled member: new(options?: any): Recognizer;*/
    /**
     * @param {?} otherRecognizer
     * @return {?}
     */
    Recognizer.prototype.recognizeWith = function (otherRecognizer) { };
}
/**
 * @record
 */
export function RecognizerStatic() { }
/**
 * @record
 */
export function HammerInstance() { }
if (false) {
    /**
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    HammerInstance.prototype.on = function (eventName, callback) { };
    /**
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    HammerInstance.prototype.off = function (eventName, callback) { };
}
/**
 * @record
 */
export function HammerManager() { }
if (false) {
    /**
     * @param {?} recogniser
     * @return {?}
     */
    HammerManager.prototype.add = function (recogniser) { };
    /**
     * @param {?} options
     * @return {?}
     */
    HammerManager.prototype.set = function (options) { };
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    HammerManager.prototype.emit = function (event, data) { };
    /**
     * @param {?} events
     * @param {?=} handler
     * @return {?}
     */
    HammerManager.prototype.off = function (events, handler) { };
    /**
     * @param {?} events
     * @param {?} handler
     * @return {?}
     */
    HammerManager.prototype.on = function (events, handler) { };
}
/**
 * @record
 */
export function HammerOptions() { }
if (false) {
    /** @type {?|undefined} */
    HammerOptions.prototype.cssProps;
    /** @type {?|undefined} */
    HammerOptions.prototype.domEvents;
    /** @type {?|undefined} */
    HammerOptions.prototype.enable;
    /** @type {?|undefined} */
    HammerOptions.prototype.preset;
    /** @type {?|undefined} */
    HammerOptions.prototype.touchAction;
    /** @type {?|undefined} */
    HammerOptions.prototype.recognizers;
    /** @type {?|undefined} */
    HammerOptions.prototype.inputClass;
    /** @type {?|undefined} */
    HammerOptions.prototype.inputTarget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1hbm5vdGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9nZXN0dXJlL2dlc3R1cmUtYW5ub3RhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlDQUtDOzs7SUFKQyxxQ0FBeUI7O0lBQ3pCLDZCQUFlOztJQUNmLDZCQUFlOztJQUNmLDZCQUFrQzs7Ozs7QUFHcEMsa0NBTUM7OztJQUhDLDJCQUFnQjs7SUFDaEIsNkJBQWtCOztJQUNsQiw2QkFBa0I7Ozs7OztBQUdwQixnQ0FJQzs7Ozs7OztJQURDLG9FQUFnRTs7Ozs7QUFHbEUsc0NBRUM7Ozs7QUFFRCxvQ0FHQzs7Ozs7OztJQUZDLGlFQUFnRDs7Ozs7O0lBQ2hELGtFQUFpRDs7Ozs7QUFHbkQsbUNBTUM7Ozs7OztJQUxDLHdEQUF1RDs7Ozs7SUFDdkQscURBQWlDOzs7Ozs7SUFDakMsMERBQXFDOzs7Ozs7SUFDckMsNkRBQThDOzs7Ozs7SUFDOUMsNERBQTRDOzs7OztBQUc5QyxtQ0FVQzs7O0lBVEMsaUNBQW1DOztJQUNuQyxrQ0FBb0I7O0lBQ3BCLCtCQUF5RDs7SUFDekQsK0JBQWU7O0lBQ2Ysb0NBQXFCOztJQUNyQixvQ0FBb0I7O0lBRXBCLG1DQUF5Qjs7SUFDekIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBIYW1tZXJJbnB1dCB7XG4gIHByZXZlbnREZWZhdWx0OiAoKSA9PiB7fTtcbiAgZGVsdGFYOiBudW1iZXI7XG4gIGRlbHRhWTogbnVtYmVyO1xuICBjZW50ZXI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFtbWVyU3RhdGljIHtcbiAgbmV3KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCwgb3B0aW9ucz86IGFueSk6IEhhbW1lck1hbmFnZXI7XG5cbiAgUGFuOiBSZWNvZ25pemVyO1xuICBTd2lwZTogUmVjb2duaXplcjtcbiAgUHJlc3M6IFJlY29nbml6ZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1taXN1c2VkLW5ld1xuICBuZXcob3B0aW9ucz86IGFueSk6IFJlY29nbml6ZXI7XG4gIHJlY29nbml6ZVdpdGgob3RoZXJSZWNvZ25pemVyOiBSZWNvZ25pemVyIHwgc3RyaW5nKTogUmVjb2duaXplcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyU3RhdGljIHtcbiAgbmV3KG9wdGlvbnM/OiBhbnkpOiBSZWNvZ25pemVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbW1lckluc3RhbmNlIHtcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG4gIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYW1tZXJNYW5hZ2VyIHtcbiAgYWRkKHJlY29nbmlzZXI6IFJlY29nbml6ZXIgfCBSZWNvZ25pemVyW10pOiBSZWNvZ25pemVyO1xuICBzZXQob3B0aW9uczogYW55KTogSGFtbWVyTWFuYWdlcjtcbiAgZW1pdChldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkO1xuICBvZmYoZXZlbnRzOiBzdHJpbmcsIGhhbmRsZXI/OiBGdW5jdGlvbik6IHZvaWQ7XG4gIG9uKGV2ZW50czogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFtbWVyT3B0aW9ucyB7XG4gIGNzc1Byb3BzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGRvbUV2ZW50cz86IGJvb2xlYW47XG4gIGVuYWJsZT86IGJvb2xlYW4gfCAoKG1hbmFnZXI6IEhhbW1lck1hbmFnZXIpID0+IGJvb2xlYW4pO1xuICBwcmVzZXQ/OiBhbnlbXTtcbiAgdG91Y2hBY3Rpb24/OiBzdHJpbmc7XG4gIHJlY29nbml6ZXJzPzogYW55W107XG5cbiAgaW5wdXRDbGFzcz86IEhhbW1lcklucHV0O1xuICBpbnB1dFRhcmdldD86IEV2ZW50VGFyZ2V0O1xufVxuIl19