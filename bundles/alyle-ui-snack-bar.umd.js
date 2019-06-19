(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/snack-bar', ['exports', '@angular/core', '@alyle/ui', 'rxjs'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly['snack-Bar'] = {}), global.ng.core, global.ly.core, global.rxjs));
}(this, function (exports, core, ui, rxjs) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var LySnackBarService = /** @class */ (function () {
        function LySnackBarService() {
        }
        LySnackBarService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LySnackBarService_Factory() { return new LySnackBarService(); }, token: LySnackBarService, providedIn: "root" });
        LySnackBarService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], LySnackBarService);
        return LySnackBarService;
    }());

    var DEFAULT_DURATION = 6e3;
    var LySnackBarRef = /** @class */ (function () {
        function LySnackBarRef(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
            var _this = this;
            this._snackBarService = _snackBarService;
            this._overlay = _overlay;
            this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
            this._theme = _theme;
            this._dismissedByAction = false;
            /** Subject for notifying the user that the snack bar has been dismissed. */
            this._afterDismissed = new rxjs.Subject();
            if (duration !== 'Infinity') {
                this._timer = setTimeout(function () {
                    _this.dismiss();
                }, duration || DEFAULT_DURATION);
            }
        }
        /** Gets an observable that is notified when the snack bar is finished closing. */
        LySnackBarRef.prototype.afterDismissed = function () {
            return this._afterDismissed.asObservable();
        };
        LySnackBarRef.prototype.dismiss = function () {
            var snackBar = this._overlay;
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
        LySnackBarRef.prototype.dismissWithAction = function () {
            var snackBar = this._overlay;
            if (snackBar) {
                this._dismissedByAction = true;
                this.dismiss();
            }
        };
        return LySnackBarRef;
    }());

    var STYLE_PRIORITY = -2;
    var DEFAULT_HORIZONTAL_POSITION = ui.XPosition.after;
    var DEFAULT_VERTICAL_POSITION = ui.YPosition.below;
    var STYLES = function (theme) {
        var _a;
        return ({
            $priority: STYLE_PRIORITY,
            root: (_a = {
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '8px',
                    padding: '0 16px',
                    minHeight: '48px',
                    minWidth: '320px',
                    maxWidth: '320px',
                    opacity: 0,
                    transition: "opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms",
                    fontSize: theme.pxToRem(theme.typography.fontSize)
                },
                _a[theme.getBreakpoint('XSmall')] = {
                    width: 'calc(100% - 16px)',
                    minWidth: 'calc(100% - 16px)'
                },
                _a['&'] = theme.snackBar ? theme.snackBar.root : null,
                _a)
        });
    };
    var LySnackBar = /** @class */ (function () {
        function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
            this._templateRef = _templateRef;
            this._theme = _theme;
            this._overlay = _overlay;
            this._snackBarService = _snackBarService;
            this.classes = this._theme.addStyleSheet(STYLES);
            this.afterDismissed = new core.EventEmitter();
        }
        LySnackBar.prototype.ngOnDestroy = function () {
            this.dismiss();
        };
        LySnackBar.prototype.open = function () {
            var _this = this;
            // close previous snackBar if exist
            var sbrPrev = this._snackBarService._currentSnackBar;
            if (sbrPrev) {
                sbrPrev.dismiss();
            }
            var duration = this.duration;
            var horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
            var verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
            var snackBar = this._overlay.create(this._templateRef, undefined, {
                styles: {
                    // this remove previous style
                    justifyContent: null
                },
                hasBackdrop: false,
                classes: [
                    this.classes.root,
                    this._theme.addStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
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
                            __styles[theme.getDirection(horizontalPosition)] = 0;
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
            var sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
            this._snackBarService._currentSnackBar = sbr;
            return sbr;
        };
        /** Dismiss snackBar */
        LySnackBar.prototype.dismiss = function () {
            var sbr = this._snackBarService._currentSnackBar;
            if (sbr) {
                sbr.dismissWithAction();
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LySnackBar.prototype, "duration", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LySnackBar.prototype, "horizontalPosition", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LySnackBar.prototype, "verticalPosition", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LySnackBar.prototype, "afterDismissed", void 0);
        LySnackBar = __decorate([
            core.Directive({
                selector: 'ng-template[ly-snack-bar]',
                exportAs: 'lySnackBar'
            }),
            __metadata("design:paramtypes", [core.TemplateRef,
                ui.LyTheme2,
                ui.LyOverlay,
                LySnackBarService])
        ], LySnackBar);
        return LySnackBar;
    }());

    var LySnackBarModule = /** @class */ (function () {
        function LySnackBarModule() {
        }
        LySnackBarModule = __decorate([
            core.NgModule({
                imports: [ui.LyOverlayModule],
                declarations: [LySnackBar],
                exports: [LySnackBar]
            })
        ], LySnackBarModule);
        return LySnackBarModule;
    }());

    exports.LySnackBar = LySnackBar;
    exports.LySnackBarModule = LySnackBarModule;
    exports.STYLES = STYLES;
    exports.ɵa = LySnackBarService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-snack-bar.umd.js.map
