(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/snack-bar', ['exports', '@alyle/ui', '@angular/core', 'rxjs'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.snackBar = {}),global.ly.core,global.ng.core,global.rxjs));
}(this, (function (exports,ui,i0,rxjs) { 'use strict';

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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (duration !== 'Infinity') {
                this._timer = setTimeout(function () {
                    _this.dismiss();
                }, duration || DEFAULT_DURATION);
            }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        LySnackBar.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.dismiss();
            };
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
                window.getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LySnackBarModule = LySnackBarModule;
    exports.LySnackBar = LySnackBar;
    exports.ɵa = LySnackBarService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-snack-bar.umd.js.map