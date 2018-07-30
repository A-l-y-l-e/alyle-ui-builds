/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Observable, Subject, fromEvent } from 'rxjs';
export class MinimalStorage {
    /**
     * @param {?} key$
     * @param {?} val
     */
    constructor(key$, val) {
        localStorage.setItem(key$, JSON.stringify(val));
    }
}
export class MinimalLS {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.itemsSubject = new Map();
        this._prefix = '*ls*';
        this.storage = new Subject();
        if (isPlatformBrowser(this.platformId)) {
            this.storageEvent = fromEvent(window, 'storage');
            this.storageEvent.subscribe((e) => {
                this.storage.next({
                    key: e.key,
                    value: e.newValue
                });
            });
            this.storageObservable = this.storage.asObservable();
        }
    }
    /**
     * get boolean
     * @param {?} key$
     * @return {?}
     */
    hasItem(key$) {
        const /** @type {?} */ key = this._addPrefix(key$);
        if (isPlatformBrowser(this.platformId)) {
            return !!localStorage.getItem(key);
        }
        if (isPlatformServer(this.platformId)) {
            return false;
        }
    }
    /**
     * Set new item or replace item
     * @param {?} key$
     * @param {?} val
     * @param {?=} _storage
     * @return {?}
     */
    setItem(key$, val, _storage = true) {
        const /** @type {?} */ key = this._addPrefix(key$);
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
    }
    /**
     * Get Observable from localStorage
     * @param {?} key$
     * @param {?=} before
     * @return {?}
     */
    getItem(key$, before) {
        const /** @type {?} */ key = this._addPrefix(key$);
        const /** @type {?} */ ob = new Observable((observer) => {
            if (this.hasItem(key$)) {
                observer.next(this.item(key$));
            }
            this.storageObservable.subscribe((e) => {
                if (key === e.key) {
                    observer.next(e.value);
                }
            });
        });
        return ob;
    }
    /**
     * Get value from localstorage
     * @param {?} key$
     * @return {?}
     */
    item(key$) {
        const /** @type {?} */ key = this._addPrefix(key$);
        try {
            return JSON.parse(window.localStorage[key]);
        }
        catch (/** @type {?} */ e) {
            return null;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _addPrefix(val) {
        return `{"${this._prefix}":"${val}"}`;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _removePrefix(val) {
        try {
            return JSON.parse(val)[this._prefix];
        }
        catch (/** @type {?} */ e) {
            return null;
        }
    }
}
MinimalLS.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MinimalLS.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaW1hbC1sb2NhbHN0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbHMvIiwic291cmNlcyI6WyJtaW5pbWFsLWxvY2Fsc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUtMLFVBQVUsRUFDVixNQUFNLEVBQ1AsTUFBK0IsZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBSSxPQUFPLEVBQW1DLFNBQVMsRUFBRSxNQUFXLE1BQU0sQ0FBQztBQUc5RixNQUFNOzs7OztJQUNKLFlBQVksSUFBWSxFQUFFLEdBQVE7UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2pEO0NBQ0Y7QUFHRCxNQUFNOzs7O0lBTUosWUFBeUM7UUFBQSxlQUFVLEdBQVYsVUFBVTs0QkFMNUIsSUFBSSxHQUFHLEVBQW1DO3VCQUMvQyxNQUFNO3VCQUVOLElBQUksT0FBTyxFQUFFO1FBRzdCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHO29CQUNWLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUTtpQkFDbEIsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdEQ7S0FDRjs7Ozs7O0lBS0QsT0FBTyxDQUFDLElBQVk7UUFDbEIsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjs7Ozs7Ozs7SUFJRCxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQVEsRUFBRSxRQUFRLEdBQUcsSUFBSTtRQUM3Qyx1QkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFFdEMsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2QixDQUFDLENBQUM7O0tBRUo7Ozs7Ozs7SUFJRCxPQUFPLENBQUMsSUFBWSxFQUFFLE1BQVk7UUFDaEMsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsdUJBQU0sRUFBRSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLENBQUM7S0FDWDs7Ozs7O0lBSUQsSUFBSSxDQUFDLElBQVk7UUFDZix1QkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUFDLHdCQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjs7Ozs7SUFFTyxVQUFVLENBQUMsR0FBRztRQUNwQixPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sTUFBTSxHQUFHLElBQUksQ0FBQzs7Ozs7O0lBRWhDLGFBQWEsQ0FBQyxHQUFHO1FBQ3ZCLElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsd0JBQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjs7OztZQXRGSixVQUFVOzs7O3lDQU9JLE1BQU0sU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdFxufSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJqZWN0ICwgIEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZlciAsICBmcm9tRXZlbnQgfSAgICAgIGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3Ioa2V5JDogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSQsIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaW5pbWFsTFMge1xuICBwcml2YXRlIGl0ZW1zU3ViamVjdCA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPj4oKTtcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJypscyonO1xuICBwcml2YXRlIHN0b3JhZ2VFdmVudDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcml2YXRlIHN0b3JhZ2UgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHN0b3JhZ2VPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0KSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc3RvcmFnZUV2ZW50ID0gZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKTtcbiAgICAgIHRoaXMuc3RvcmFnZUV2ZW50LnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UubmV4dCh7XG4gICAgICAgICAga2V5OiBlLmtleSxcbiAgICAgICAgICB2YWx1ZTogZS5uZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdG9yYWdlT2JzZXJ2YWJsZSA9IHRoaXMuc3RvcmFnZS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGJvb2xlYW5cbiAgICovXG4gIGhhc0l0ZW0oa2V5JDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5fYWRkUHJlZml4KGtleSQpO1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIH1cbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgbmV3IGl0ZW0gb3IgcmVwbGFjZSBpdGVtXG4gICAqL1xuICBzZXRJdGVtKGtleSQ6IHN0cmluZywgdmFsOiBhbnksIF9zdG9yYWdlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2FkZFByZWZpeChrZXkkKTtcbiAgICBpZiAoX3N0b3JhZ2UpIHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICBuZXcgTWluaW1hbFN0b3JhZ2Uoa2V5LCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0b3JhZ2UubmV4dCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZhbHVlOiB0aGlzLml0ZW0oa2V5JClcbiAgICB9KTtcbiAgICAvLyB0aGlzLml0ZW1zU3ViamVjdC5zZXQoa2V5LCBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odmFsKSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBPYnNlcnZhYmxlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAqL1xuICBnZXRJdGVtKGtleSQ6IHN0cmluZywgYmVmb3JlPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLl9hZGRQcmVmaXgoa2V5JCk7XG4gICAgY29uc3Qgb2IgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmhhc0l0ZW0oa2V5JCkpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLml0ZW0oa2V5JCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdG9yYWdlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gZS5rZXkpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2I7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB2YWx1ZSBmcm9tIGxvY2Fsc3RvcmFnZVxuICAgKi9cbiAgaXRlbShrZXkkOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2FkZFByZWZpeChrZXkkKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZVtrZXldKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRQcmVmaXgodmFsKSB7XG4gICAgcmV0dXJuIGB7XCIke3RoaXMuX3ByZWZpeH1cIjpcIiR7dmFsfVwifWA7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlUHJlZml4KHZhbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWwpW3RoaXMuX3ByZWZpeF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==