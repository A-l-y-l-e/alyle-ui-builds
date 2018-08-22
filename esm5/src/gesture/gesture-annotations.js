/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function HammerInput() { }
/** @type {?} */
HammerInput.prototype.preventDefault;
/** @type {?} */
HammerInput.prototype.deltaX;
/** @type {?} */
HammerInput.prototype.deltaY;
/** @type {?} */
HammerInput.prototype.center;
/**
 * @record
 */
export function HammerStatic() { }
/* TODO: handle strange member:
new(element: HTMLElement | SVGElement, options?: any): HammerManager;
*/
/** @type {?} */
HammerStatic.prototype.Pan;
/** @type {?} */
HammerStatic.prototype.Swipe;
/** @type {?} */
HammerStatic.prototype.Press;
/**
 * @record
 */
export function Recognizer() { }
/* TODO: handle strange member:
new(options?: any): Recognizer;
*/
/** @type {?} */
Recognizer.prototype.recognizeWith;
/**
 * @record
 */
export function RecognizerStatic() { }
/**
 * @record
 */
export function HammerInstance() { }
/** @type {?} */
HammerInstance.prototype.on;
/** @type {?} */
HammerInstance.prototype.off;
/**
 * @record
 */
export function HammerManager() { }
/** @type {?} */
HammerManager.prototype.add;
/** @type {?} */
HammerManager.prototype.set;
/** @type {?} */
HammerManager.prototype.emit;
/** @type {?} */
HammerManager.prototype.off;
/** @type {?} */
HammerManager.prototype.on;
/**
 * @record
 */
export function HammerOptions() { }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1hbm5vdGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9nZXN0dXJlL2dlc3R1cmUtYW5ub3RhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSGFtbWVySW5wdXQge1xuICBwcmV2ZW50RGVmYXVsdDogKCkgPT4ge307XG4gIGRlbHRhWDogbnVtYmVyO1xuICBkZWx0YVk6IG51bWJlcjtcbiAgY2VudGVyOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbW1lclN0YXRpYyB7XG4gIG5ldyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQsIG9wdGlvbnM/OiBhbnkpOiBIYW1tZXJNYW5hZ2VyO1xuXG4gIFBhbjogUmVjb2duaXplcjtcbiAgU3dpcGU6IFJlY29nbml6ZXI7XG4gIFByZXNzOiBSZWNvZ25pemVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXIge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbWlzdXNlZC1uZXdcbiAgbmV3KG9wdGlvbnM/OiBhbnkpOiBSZWNvZ25pemVyO1xuICByZWNvZ25pemVXaXRoKG90aGVyUmVjb2duaXplcjogUmVjb2duaXplciB8IHN0cmluZyk6IFJlY29nbml6ZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclN0YXRpYyB7XG4gIG5ldyhvcHRpb25zPzogYW55KTogUmVjb2duaXplcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYW1tZXJJbnN0YW5jZSB7XG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuICBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFtbWVyTWFuYWdlciB7XG4gIGFkZChyZWNvZ25pc2VyOiBSZWNvZ25pemVyIHwgUmVjb2duaXplcltdKTogUmVjb2duaXplcjtcbiAgc2V0KG9wdGlvbnM6IGFueSk6IEhhbW1lck1hbmFnZXI7XG4gIGVtaXQoZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KTogdm9pZDtcbiAgb2ZmKGV2ZW50czogc3RyaW5nLCBoYW5kbGVyPzogRnVuY3Rpb24pOiB2b2lkO1xuICBvbihldmVudHM6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbW1lck9wdGlvbnMge1xuICBjc3NQcm9wcz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBkb21FdmVudHM/OiBib29sZWFuO1xuICBlbmFibGU/OiBib29sZWFuIHwgKChtYW5hZ2VyOiBIYW1tZXJNYW5hZ2VyKSA9PiBib29sZWFuKTtcbiAgcHJlc2V0PzogYW55W107XG4gIHRvdWNoQWN0aW9uPzogc3RyaW5nO1xuICByZWNvZ25pemVycz86IGFueVtdO1xuXG4gIGlucHV0Q2xhc3M/OiBIYW1tZXJJbnB1dDtcbiAgaW5wdXRUYXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cbiJdfQ==