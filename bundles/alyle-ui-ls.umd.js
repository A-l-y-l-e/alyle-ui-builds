(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/ls', ['exports', '@angular/core', '@angular/common', 'rxjs'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.ls = {}),global.ng.core,global.ng.common,global.rxjs));
}(this, (function (exports,core,common,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MinimalStorage = /** @class */ (function () {
        function MinimalStorage(key$, val) {
            localStorage.setItem(key$, JSON.stringify(val));
        }
        return MinimalStorage;
    }());
    var MinimalLS = /** @class */ (function () {
        function MinimalLS(platformId) {
            var _this = this;
            this.platformId = platformId;
            this.itemsSubject = new Map();
            this._prefix = '*ls*';
            this.storage = new rxjs.Subject();
            if (common.isPlatformBrowser(this.platformId)) {
                this.storageEvent = rxjs.fromEvent(window, 'storage');
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
                if (common.isPlatformBrowser(this.platformId)) {
                    return !!localStorage.getItem(key);
                }
                if (common.isPlatformServer(this.platformId)) {
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
                if (_storage === void 0) {
                    _storage = true;
                }
                var /** @type {?} */ key = this._addPrefix(key$);
                if (_storage) {
                    if (common.isPlatformBrowser(this.platformId)) {
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
                var /** @type {?} */ ob = new rxjs.Observable(function (observer) {
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
                catch ( /** @type {?} */e) {
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
                catch ( /** @type {?} */e) {
                    return null;
                }
            };
        MinimalLS.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MinimalLS.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
            ];
        };
        return MinimalLS;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MinimalLSModule = /** @class */ (function () {
        function MinimalLSModule() {
        }
        MinimalLSModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            MinimalLS
                        ]
                    },] },
        ];
        return MinimalLSModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.MinimalStorage = MinimalStorage;
    exports.MinimalLS = MinimalLS;
    exports.MinimalLSModule = MinimalLSModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvbHMvbWluaW1hbC1sb2NhbHN0b3JhZ2UudHMiLCJuZzovL0BhbHlsZS91aS9scy9scy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdFxufSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJqZWN0ICwgIEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZlciAsICBmcm9tRXZlbnQgfSAgICAgIGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3Ioa2V5JDogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSQsIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaW5pbWFsTFMge1xuICBwcml2YXRlIGl0ZW1zU3ViamVjdCA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPj4oKTtcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJypscyonO1xuICBwcml2YXRlIHN0b3JhZ2VFdmVudDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcml2YXRlIHN0b3JhZ2UgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHN0b3JhZ2VPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0KSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc3RvcmFnZUV2ZW50ID0gZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKTtcbiAgICAgIHRoaXMuc3RvcmFnZUV2ZW50LnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UubmV4dCh7XG4gICAgICAgICAga2V5OiBlLmtleSxcbiAgICAgICAgICB2YWx1ZTogZS5uZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdG9yYWdlT2JzZXJ2YWJsZSA9IHRoaXMuc3RvcmFnZS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGJvb2xlYW5cbiAgICovXG4gIGhhc0l0ZW0oa2V5JDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5fYWRkUHJlZml4KGtleSQpO1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIH1cbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgbmV3IGl0ZW0gb3IgcmVwbGFjZSBpdGVtXG4gICAqL1xuICBzZXRJdGVtKGtleSQ6IHN0cmluZywgdmFsOiBhbnksIF9zdG9yYWdlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2FkZFByZWZpeChrZXkkKTtcbiAgICBpZiAoX3N0b3JhZ2UpIHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICBuZXcgTWluaW1hbFN0b3JhZ2Uoa2V5LCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0b3JhZ2UubmV4dCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZhbHVlOiB0aGlzLml0ZW0oa2V5JClcbiAgICB9KTtcbiAgICAvLyB0aGlzLml0ZW1zU3ViamVjdC5zZXQoa2V5LCBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odmFsKSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBPYnNlcnZhYmxlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAqL1xuICBnZXRJdGVtKGtleSQ6IHN0cmluZywgYmVmb3JlPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLl9hZGRQcmVmaXgoa2V5JCk7XG4gICAgY29uc3Qgb2IgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmhhc0l0ZW0oa2V5JCkpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLml0ZW0oa2V5JCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdG9yYWdlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gZS5rZXkpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2I7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB2YWx1ZSBmcm9tIGxvY2Fsc3RvcmFnZVxuICAgKi9cbiAgaXRlbShrZXkkOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2FkZFByZWZpeChrZXkkKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZVtrZXldKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRQcmVmaXgodmFsKSB7XG4gICAgcmV0dXJuIGB7XCIke3RoaXMuX3ByZWZpeH1cIjpcIiR7dmFsfVwifWA7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlUHJlZml4KHZhbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWwpW3RoaXMuX3ByZWZpeF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBWaWV3Q29udGFpbmVyUmVmLCBTa2lwU2VsZiwgT3B0aW9uYWwsXG4gIEluamVjdGlvblRva2VuIH0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWluaW1hbExTIH0gZnJvbSAnLi9taW5pbWFsLWxvY2Fsc3RvcmFnZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIE1pbmltYWxMU1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1pbmltYWxMU01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0IiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJmcm9tRXZlbnQiLCJpc1BsYXRmb3JtU2VydmVyIiwiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJJbmplY3QiLCJQTEFURk9STV9JRCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFhQTtRQUNFLHdCQUFZLElBQVksRUFBRSxHQUFRO1lBQ2hDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDs2QkFoQkg7UUFpQkMsQ0FBQTtBQUpEO1FBYUUsbUJBQXlDO1lBQXpDLGlCQVdDO1lBWHdDLGVBQVUsR0FBVixVQUFVO2dDQUw1QixJQUFJLEdBQUcsRUFBbUM7MkJBQy9DLE1BQU07MkJBRU4sSUFBSUEsWUFBTyxFQUFFO1lBRzdCLElBQUlDLHdCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFlBQVksR0FBR0MsY0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHO3dCQUNWLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUTtxQkFDbEIsQ0FBQyxDQUFDO2lCQUNKLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN0RDtTQUNGOzs7Ozs7Ozs7UUFLRCwyQkFBTzs7Ozs7WUFBUCxVQUFRLElBQVk7Z0JBQ2xCLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxJQUFJRCx3QkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUlFLHVCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDckMsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjs7Ozs7Ozs7Ozs7UUFJRCwyQkFBTzs7Ozs7OztZQUFQLFVBQVEsSUFBWSxFQUFFLEdBQVEsRUFBRSxRQUFlO2dCQUFmLHlCQUFBO29CQUFBLGVBQWU7O2dCQUM3QyxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxRQUFRLEVBQUU7b0JBQ1osSUFBSUYsd0JBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzt3QkFFdEMsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUM5QjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsR0FBRyxFQUFFLEdBQUc7b0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUN2QixDQUFDLENBQUM7O2FBRUo7Ozs7Ozs7Ozs7UUFJRCwyQkFBTzs7Ozs7O1lBQVAsVUFBUSxJQUFZLEVBQUUsTUFBWTtnQkFBbEMsaUJBYUM7Z0JBWkMscUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLHFCQUFNLEVBQUUsR0FBRyxJQUFJRyxlQUFVLENBQUMsVUFBQyxRQUFRO29CQUNqQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNoQztvQkFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQzt3QkFDakMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTs0QkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ3hCO3FCQUNGLENBQUMsQ0FBQztpQkFDSixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLENBQUM7YUFDWDs7Ozs7Ozs7O1FBSUQsd0JBQUk7Ozs7O1lBQUosVUFBSyxJQUFZO2dCQUNmLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxJQUFJO29CQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO2dCQUFDLHdCQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGOzs7OztRQUVPLDhCQUFVOzs7O3NCQUFDLEdBQUc7Z0JBQ3BCLE9BQU8sUUFBSyxJQUFJLENBQUMsT0FBTyxhQUFNLEdBQUcsUUFBSSxDQUFDOzs7Ozs7UUFFaEMsaUNBQWE7Ozs7c0JBQUMsR0FBRztnQkFDdkIsSUFBSTtvQkFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QztnQkFBQyx3QkFBTyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxJQUFJLENBQUM7aUJBQ2I7OztvQkF0RkpDLGVBQVU7Ozs7O3FEQU9JQyxXQUFNLFNBQUNDLGdCQUFXOzs7d0JBMUJqQzs7Ozs7OztBQ0FBOzs7O29CQU1DQyxhQUFRLFNBQUM7d0JBQ1IsU0FBUyxFQUFFOzRCQUNULFNBQVM7eUJBQ1Y7cUJBQ0Y7OzhCQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9