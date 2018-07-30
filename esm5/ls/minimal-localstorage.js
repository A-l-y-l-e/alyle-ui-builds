/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Observable, Subject, fromEvent } from 'rxjs';
var MinimalStorage = /** @class */ (function () {
    function MinimalStorage(key$, val) {
        localStorage.setItem(key$, JSON.stringify(val));
    }
    return MinimalStorage;
}());
export { MinimalStorage };
var MinimalLS = /** @class */ (function () {
    function MinimalLS(platformId) {
        var _this = this;
        this.platformId = platformId;
        this.itemsSubject = new Map();
        this._prefix = '*ls*';
        this.storage = new Subject();
        if (isPlatformBrowser(this.platformId)) {
            this.storageEvent = fromEvent(window, 'storage');
            this.storageEvent.subscribe(function (e) {
                _this.storage.next({
                    key: e.key,
                    value: e.newValue
                });
            });
            this.storageObservable = this.storage.asObservable();
        }
    }
    /**
     * get boolean
     */
    /**
     * get boolean
     * @param {?} key$
     * @return {?}
     */
    MinimalLS.prototype.hasItem = /**
     * get boolean
     * @param {?} key$
     * @return {?}
     */
    function (key$) {
        var /** @type {?} */ key = this._addPrefix(key$);
        if (isPlatformBrowser(this.platformId)) {
            return !!localStorage.getItem(key);
        }
        if (isPlatformServer(this.platformId)) {
            return false;
        }
    };
    /**
     * Set new item or replace item
     */
    /**
     * Set new item or replace item
     * @param {?} key$
     * @param {?} val
     * @param {?=} _storage
     * @return {?}
     */
    MinimalLS.prototype.setItem = /**
     * Set new item or replace item
     * @param {?} key$
     * @param {?} val
     * @param {?=} _storage
     * @return {?}
     */
    function (key$, val, _storage) {
        if (_storage === void 0) { _storage = true; }
        var /** @type {?} */ key = this._addPrefix(key$);
        if (_storage) {
            if (isPlatformBrowser(this.platformId)) {
                // tslint:disable-next-line:no-unused-expression
                new MinimalStorage(key, val);
            }
        }
        this.storage.next({
            key: key,
            value: this.item(key$)
        });
        // this.itemsSubject.set(key, new BehaviorSubject<string>(val));
    };
    /**
     * Get Observable from localStorage
     */
    /**
     * Get Observable from localStorage
     * @param {?} key$
     * @param {?=} before
     * @return {?}
     */
    MinimalLS.prototype.getItem = /**
     * Get Observable from localStorage
     * @param {?} key$
     * @param {?=} before
     * @return {?}
     */
    function (key$, before) {
        var _this = this;
        var /** @type {?} */ key = this._addPrefix(key$);
        var /** @type {?} */ ob = new Observable(function (observer) {
            if (_this.hasItem(key$)) {
                observer.next(_this.item(key$));
            }
            _this.storageObservable.subscribe(function (e) {
                if (key === e.key) {
                    observer.next(e.value);
                }
            });
        });
        return ob;
    };
    /**
     * Get value from localstorage
     */
    /**
     * Get value from localstorage
     * @param {?} key$
     * @return {?}
     */
    MinimalLS.prototype.item = /**
     * Get value from localstorage
     * @param {?} key$
     * @return {?}
     */
    function (key$) {
        var /** @type {?} */ key = this._addPrefix(key$);
        try {
            return JSON.parse(window.localStorage[key]);
        }
        catch (/** @type {?} */ e) {
            return null;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MinimalLS.prototype._addPrefix = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return "{\"" + this._prefix + "\":\"" + val + "\"}";
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MinimalLS.prototype._removePrefix = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        try {
            return JSON.parse(val)[this._prefix];
        }
        catch (/** @type {?} */ e) {
            return null;
        }
    };
    MinimalLS.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MinimalLS.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    return MinimalLS;
}());
export { MinimalLS };
function MinimalLS_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MinimalLS.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MinimalLS.ctorParameters;
    /** @type {?} */
    MinimalLS.prototype.itemsSubject;
    /** @type {?} */
    MinimalLS.prototype._prefix;
    /** @type {?} */
    MinimalLS.prototype.storageEvent;
    /** @type {?} */
    MinimalLS.prototype.storage;
    /** @type {?} */
    MinimalLS.prototype.storageObservable;
    /** @type {?} */
    MinimalLS.prototype.platformId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaW1hbC1sb2NhbHN0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbHMvIiwic291cmNlcyI6WyJtaW5pbWFsLWxvY2Fsc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUtMLFVBQVUsRUFDVixNQUFNLEVBQ1AsTUFBK0IsZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBSSxPQUFPLEVBQW1DLFNBQVMsRUFBRSxNQUFXLE1BQU0sQ0FBQztBQUc5RixJQUFBO0lBQ0Usd0JBQVksSUFBWSxFQUFFLEdBQVE7UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2pEO3lCQWhCSDtJQWlCQyxDQUFBO0FBSkQsMEJBSUM7O0lBU0MsbUJBQXlDO1FBQXpDLGlCQVdDO1FBWHdDLGVBQVUsR0FBVixVQUFVOzRCQUw1QixJQUFJLEdBQUcsRUFBbUM7dUJBQy9DLE1BQU07dUJBRU4sSUFBSSxPQUFPLEVBQUU7UUFHN0IsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRztvQkFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVE7aUJBQ2xCLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztZQUNILElB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Q29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0XG59ICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YmplY3QgLCAgQmVoYXZpb3JTdWJqZWN0ICwgIE9ic2VydmVyICwgIGZyb21FdmVudCB9ICAgICAgZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcihrZXkkOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5JCwgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1pbmltYWxMUyB7XG4gIHByaXZhdGUgaXRlbXNTdWJqZWN0ID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+PigpO1xuICBwcml2YXRlIF9wcmVmaXggPSAnKmxzKic7XG4gIHByaXZhdGUgc3RvcmFnZUV2ZW50OiBPYnNlcnZhYmxlPGFueT47XG4gIHByaXZhdGUgc3RvcmFnZSA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgc3RvcmFnZU9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zdG9yYWdlRXZlbnQgPSBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpO1xuICAgICAgdGhpcy5zdG9yYWdlRXZlbnQuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5uZXh0KHtcbiAgICAgICAgICBrZXk6IGUua2V5LFxuICAgICAgICAgIHZhbHVlOiBlLm5ld1ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN0b3JhZ2VPYnNlcnZhYmxlID0gdGhpcy5zdG9yYWdlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgYm9vbGVhblxuICAgKi9cbiAgaGFzSXRlbShrZXkkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLl9hZGRQcmVmaXgoa2V5JCk7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCBuZXcgaXRlbSBvciByZXBsYWNlIGl0ZW1cbiAgICovXG4gIHNldEl0ZW0oa2V5JDogc3RyaW5nLCB2YWw6IGFueSwgX3N0b3JhZ2UgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5fYWRkUHJlZml4KGtleSQpO1xuICAgIGlmIChfc3RvcmFnZSkge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBNaW5pbWFsU3RvcmFnZShrZXksIHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RvcmFnZS5uZXh0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgdmFsdWU6IHRoaXMuaXRlbShrZXkkKVxuICAgIH0pO1xuICAgIC8vIHRoaXMuaXRlbXNTdWJqZWN0LnNldChrZXksIG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih2YWwpKTtcbiAgfVxuICAvKipcbiAgICogR2V0IE9ic2VydmFibGUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICovXG4gIGdldEl0ZW0oa2V5JDogc3RyaW5nLCBiZWZvcmU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2FkZFByZWZpeChrZXkkKTtcbiAgICBjb25zdCBvYiA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzSXRlbShrZXkkKSkge1xuICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuaXRlbShrZXkkKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0b3JhZ2VPYnNlcnZhYmxlLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSBlLmtleSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYjtcbiAgfVxuICAvKipcbiAgICogR2V0IHZhbHVlIGZyb20gbG9jYWxzdG9yYWdlXG4gICAqL1xuICBpdGVtKGtleSQ6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5fYWRkUHJlZml4KGtleSQpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlW2tleV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZFByZWZpeCh2YWwpIHtcbiAgICByZXR1cm4gYHtcIiR7dGhpcy5fcHJlZml4fVwiOlwiJHt2YWx9XCJ9YDtcbiAgfVxuICBwcml2YXRlIF9yZW1vdmVQcmVmaXgodmFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbClbdGhpcy5fcHJlZml4XTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuIl19