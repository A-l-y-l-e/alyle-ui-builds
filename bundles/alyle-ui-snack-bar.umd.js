(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/snack-bar', ['exports', '@angular/core', 'rxjs', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.snackBar = {}),global.ng.core,global.rxjs,global.ly.core));
}(this, (function (exports,i0,rxjs,ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LySnackBarService = /** @class */ (function () {
        function LySnackBarService() {
        }
        LySnackBarService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ LySnackBarService.ngInjectableDef = i0.defineInjectable({ factory: function LySnackBarService_Factory() { return new LySnackBarService(); }, token: LySnackBarService, providedIn: "root" });
        return LySnackBarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_DURATION = 6e3;
    var LySnackBarRef = /** @class */ (function () {
        function LySnackBarRef(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
            var _this = this;
            this._snackBarService = _snackBarService;
            this._overlay = _overlay;
            this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
            this._theme = _theme;
            this._dismissedByAction = false;
            /**
             * Subject for notifying the user that the snack bar has been dismissed.
             */
            this._afterDismissed = new rxjs.Subject();
            this._timer = setTimeout(function () {
                _this.dismiss();
            }, duration || DEFAULT_DURATION);
        }
        /** Gets an observable that is notified when the snack bar is finished closing. */
        /**
         * Gets an observable that is notified when the snack bar is finished closing.
         * @return {?}
         */
        LySnackBarRef.prototype.afterDismissed = /**
         * Gets an observable that is notified when the snack bar is finished closing.
         * @return {?}
         */
            function () {
                return this._afterDismissed.asObservable();
            };
        /**
         * @return {?}
         */
        LySnackBarRef.prototype.dismiss = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var snackBar = this._overlay;
                /** @type {?} */
                var timer = this._timer;
                this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
                this._afterDismissed.next();
                this._afterDismissed.complete();
                if (snackBar) {
                    if (timer) {
                        // clear previous timer
                        clearTimeout(timer);
                    }
                    snackBar.containerElement.classList.remove(this._theme.addStyle('SnackBar:open', null, null, null, null));
                    setTimeout(function () {
                        snackBar.destroy();
                    }, 350);
                    this._snackBarService._currentSnackBar = null;
                    this._overlay = null;
                }
            };
        /**
         * @return {?}
         */
        LySnackBarRef.prototype.dismissWithAction = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var snackBar = this._overlay;
                if (snackBar) {
                    this._dismissedByAction = true;
                    this.dismiss();
                }
            };
        return LySnackBarRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_HORIZONTAL_POSITION = ui.XPosition.after;
    /** @type {?} */
    var DEFAULT_VERTICAL_POSITION = ui.YPosition.below;
    var LySnackBar = /** @class */ (function () {
        function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
            this._templateRef = _templateRef;
            this._theme = _theme;
            this._overlay = _overlay;
            this._snackBarService = _snackBarService;
            this.afterDismissed = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        LySnackBar.prototype.open = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // close previous snackBar if exist
                /** @type {?} */
                var sbrPrev = this._snackBarService._currentSnackBar;
                if (sbrPrev) {
                    sbrPrev.dismiss();
                }
                /** @type {?} */
                var duration = this.duration;
                /** @type {?} */
                var horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
                /** @type {?} */
                var verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
                /** @type {?} */
                var snackBar = this._overlay.create(this._templateRef, undefined, {
                    styles: {
                        // this remove previous style
                        justifyContent: null
                    },
                    classes: [
                        this._theme.addStyle('SnackBar', function (theme) {
                            var _a;
                            return (__assign((_a = { borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px', padding: '0 16px', minHeight: '48px', minWidth: '320px', maxWidth: '320px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms", fontSize: theme.pxToRem(theme.typography.fontSize), boxShadow: ui.shadowBuilder(4, ( /** @type {?} */(theme.snackBar.root.background))) }, _a[theme.getBreakpoint('XSmall')] = {
                                width: 'calc(100% - 16px)',
                                minWidth: 'calc(100% - 16px)'
                            }, _a), theme.snackBar.root));
                        }, undefined, undefined, STYLE_PRIORITY),
                        this._theme.addStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
                            /** @type {?} */
                            var __styles = {};
                            if (verticalPosition === ui.YPosition.above) {
                                __styles.transform = 'translateY(-180%)';
                                __styles.top = 0;
                            }
                            if (verticalPosition === ui.YPosition.below) {
                                __styles.transform = 'translateY(180%)';
                                __styles.bottom = 0;
                            }
                            if (horizontalPosition === 'center') {
                                __styles.marginRight = __styles.marginLeft = 'auto';
                                __styles.left = __styles.right = 0;
                            }
                            else {
                                __styles[theme.getDirection(( /** @type {?} */(horizontalPosition)))] = 0;
                            }
                            return __styles;
                        }, undefined, undefined, STYLE_PRIORITY)
                    ]
                });
                this._theme.requestAnimationFrame(function () {
                    _this._theme.addStyle('SnackBar:open', ({
                        opacity: 1,
                        transform: 'translateY(0)'
                    }), snackBar.containerElement, undefined, STYLE_PRIORITY);
                });
                /** @type {?} */
                var sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
                this._snackBarService._currentSnackBar = sbr;
                return sbr;
            };
        /** Dismiss snackBar */
        /**
         * Dismiss snackBar
         * @return {?}
         */
        LySnackBar.prototype.dismiss = /**
         * Dismiss snackBar
         * @return {?}
         */
            function () {
                /** @type {?} */
                var sbr = this._snackBarService._currentSnackBar;
                if (sbr) {
                    sbr.dismissWithAction();
                }
            };
        LySnackBar.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ng-template[ly-snack-bar]',
                        exportAs: 'lySnackBar'
                    },] }
        ];
        /** @nocollapse */
        LySnackBar.ctorParameters = function () {
            return [
                { type: i0.TemplateRef },
                { type: ui.LyTheme2 },
                { type: ui.LyOverlay },
                { type: LySnackBarService }
            ];
        };
        LySnackBar.propDecorators = {
            duration: [{ type: i0.Input }],
            horizontalPosition: [{ type: i0.Input }],
            verticalPosition: [{ type: i0.Input }],
            afterDismissed: [{ type: i0.Output }]
        };
        return LySnackBar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LySnackBarModule = /** @class */ (function () {
        function LySnackBarModule() {
        }
        LySnackBarModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [ui.LyOverlayModule],
                        declarations: [LySnackBar],
                        exports: [LySnackBar]
                    },] }
        ];
        return LySnackBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LySnackBarModule = LySnackBarModule;
    exports.LySnackBar = LySnackBar;
    exports.ɵa = LySnackBarService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktc25hY2stYmFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLXJlZi50cyIsIm5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci9zbmFjay1iYXIudHMiLCJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvc25hY2stYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U25hY2tCYXJSZWYgfSBmcm9tICcuL3NuYWNrLWJhci1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyU2VydmljZSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9jdXJyZW50U25hY2tCYXI6IEx5U25hY2tCYXJSZWY7XG59XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyRGlzbWlzcyB9IGZyb20gJy4vc25hY2stYmFyJztcblxuY29uc3QgREVGQVVMVF9EVVJBVElPTiA9IDZlMztcblxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJSZWYge1xuICBwcml2YXRlIF90aW1lcjogYW55O1xuICBwcml2YXRlIF9kaXNtaXNzZWRCeUFjdGlvbiA9IGZhbHNlO1xuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUgc25hY2sgYmFyIGhhcyBiZWVuIGRpc21pc3NlZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBzbmFjayBiYXIgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZixcbiAgICBwcml2YXRlIF9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfSwgZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTik7XG4gIH1cblxuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheTtcbiAgICBjb25zdCB0aW1lciA9IHRoaXMuX3RpbWVyO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkRXZlbnRFbWl0dGVyLmVtaXQoe2Rpc21pc3NlZEJ5QWN0aW9uOiB0aGlzLl9kaXNtaXNzZWRCeUFjdGlvbn0pO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkLm5leHQoKTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5jb21wbGV0ZSgpO1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIC8vIGNsZWFyIHByZXZpb3VzIHRpbWVyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG5cbiAgICAgIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzbmFja0Jhci5kZXN0cm95KCk7XG4gICAgICB9LCAzNTApO1xuICAgICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBudWxsO1xuICAgICAgdGhpcy5fb3ZlcmxheSA9IG51bGw7XG4gICAgfVxuICB9XG4gIGRpc21pc3NXaXRoQWN0aW9uKCkge1xuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgTHlPdmVybGF5LCBUaGVtZVZhcmlhYmxlcywgc2hhZG93QnVpbGRlciwgWFBvc2l0aW9uLCBZUG9zaXRpb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJSZWYgfSBmcm9tICcuL3NuYWNrLWJhci1yZWYnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OID0gWFBvc2l0aW9uLmFmdGVyO1xuY29uc3QgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTiA9IFlQb3NpdGlvbi5iZWxvdztcblxuLyoqIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIGEgc25hY2sgYmFyIGlzIGRpc21pc3NlZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbmFja0JhckRpc21pc3Mge1xuICAvKiogV2hldGhlciB0aGUgc25hY2sgYmFyIHdhcyBkaXNtaXNzZWQgdXNpbmcgdGhlIGFjdGlvbiBmbi4gKi9cbiAgZGlzbWlzc2VkQnlBY3Rpb246IGJvb2xlYW47XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2x5LXNuYWNrLWJhcl0nLFxuICBleHBvcnRBczogJ2x5U25hY2tCYXInXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXIge1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBob3Jpem9udGFsUG9zaXRpb246ICdjZW50ZXInIHwgWFBvc2l0aW9uO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiBZUG9zaXRpb247XG4gIEBPdXRwdXQoKSBhZnRlckRpc21pc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZVxuICApIHsgfVxuXG4gIG9wZW4oKSB7XG4gICAgLy8gY2xvc2UgcHJldmlvdXMgc25hY2tCYXIgaWYgZXhpc3RcbiAgICBjb25zdCBzYnJQcmV2ID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNiclByZXYpIHtcbiAgICAgIHNiclByZXYuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiB8fCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT047XG4gICAgY29uc3QgdmVydGljYWxQb3NpdGlvbiA9IHRoaXMudmVydGljYWxQb3NpdGlvbiB8fCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OO1xuXG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLl90ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgLy8gdGhpcyByZW1vdmUgcHJldmlvdXMgc3R5bGVcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiBbXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcicsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBtYXJnaW46ICc4cHgnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgIG1pbldpZHRoOiAnMzIwcHgnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMzIwcHgnLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzUwbXMsIHRyYW5zZm9ybSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gMzUwbXNgLFxuICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpLFxuICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0LCB0aGVtZS5zbmFja0Jhci5yb290LmJhY2tncm91bmQgYXMgc3RyaW5nKSxcbiAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDE2cHgpJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAnY2FsYygxMDAlIC0gMTZweCknXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi50aGVtZS5zbmFja0Jhci5yb290LFxuICAgICAgICB9KSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKSxcbiAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYFNuYWNrQmFyLmhwOiR7aG9yaXpvbnRhbFBvc2l0aW9ufS52cDoke3ZlcnRpY2FsUG9zaXRpb259YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IF9fc3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PzogJ2F1dG8nLFxuICAgICAgICAgICAgbGVmdD86IDAsXG4gICAgICAgICAgICBtYXJnaW5SaWdodD86ICdhdXRvJyxcbiAgICAgICAgICAgIHJpZ2h0PzogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybT86IHN0cmluZyxcbiAgICAgICAgICAgIHRvcD86IG51bWJlclxuICAgICAgICAgICAgYm90dG9tPzogbnVtYmVyXG4gICAgICAgICAgfSA9IHsgfTtcbiAgICAgICAgICBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMudG9wID0gMDtcbiAgICAgICAgICB9IGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDE4MCUpJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy5tYXJnaW5SaWdodCA9IF9fc3R5bGVzLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBfX3N0eWxlcy5sZWZ0ID0gX19zdHlsZXMucmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfX3N0eWxlc1t0aGVtZS5nZXREaXJlY3Rpb24oaG9yaXpvbnRhbFBvc2l0aW9uIGFzIGFueSldID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9fc3R5bGVzO1xuICAgICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCAoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgfSksIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2JyID0gbmV3IEx5U25hY2tCYXJSZWYodGhpcy5fc25hY2tCYXJTZXJ2aWNlLCBzbmFja0JhciwgdGhpcy5hZnRlckRpc21pc3NlZCwgZHVyYXRpb24sIHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IHNicjtcbiAgICByZXR1cm4gc2JyO1xuICB9XG5cbiAgLyoqIERpc21pc3Mgc25hY2tCYXIgKi9cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzYnIgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyKSB7XG4gICAgICBzYnIuZGlzbWlzc1dpdGhBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhciB9IGZyb20gJy4vc25hY2stYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5T3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5U25hY2tCYXJdLFxuICBleHBvcnRzOiBbTHlTbmFja0Jhcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlTbmFja0Jhck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJTdWJqZWN0IiwiWFBvc2l0aW9uIiwiWVBvc2l0aW9uIiwiRXZlbnRFbWl0dGVyIiwic2hhZG93QnVpbGRlciIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiTHlUaGVtZTIiLCJMeU92ZXJsYXkiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiTHlPdmVybGF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTs7Ozs7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