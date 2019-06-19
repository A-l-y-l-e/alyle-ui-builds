import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Output, Directive, TemplateRef, EventEmitter, NgModule } from '@angular/core';
import { XPosition, YPosition, LyTheme2, LyOverlay, LyOverlayModule } from '@alyle/ui';
import { Subject } from 'rxjs';

var LySnackBarService = /** @class */ (function () {
    function LySnackBarService() {
    }
    LySnackBarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LySnackBarService_Factory() { return new LySnackBarService(); }, token: LySnackBarService, providedIn: "root" });
    LySnackBarService = __decorate([
        Injectable({
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
        this._afterDismissed = new Subject();
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
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
var DEFAULT_VERTICAL_POSITION = YPosition.below;
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
        this.afterDismissed = new EventEmitter();
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
                    if (verticalPosition === YPosition.above) {
                        __styles.transform = 'translateY(-180%)';
                        __styles.top = 0;
                    }
                    if (verticalPosition === YPosition.below) {
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
        Input(),
        __metadata("design:type", Object)
    ], LySnackBar.prototype, "duration", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LySnackBar.prototype, "horizontalPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LySnackBar.prototype, "verticalPosition", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LySnackBar.prototype, "afterDismissed", void 0);
    LySnackBar = __decorate([
        Directive({
            selector: 'ng-template[ly-snack-bar]',
            exportAs: 'lySnackBar'
        }),
        __metadata("design:paramtypes", [TemplateRef,
            LyTheme2,
            LyOverlay,
            LySnackBarService])
    ], LySnackBar);
    return LySnackBar;
}());

var LySnackBarModule = /** @class */ (function () {
    function LySnackBarModule() {
    }
    LySnackBarModule = __decorate([
        NgModule({
            imports: [LyOverlayModule],
            declarations: [LySnackBar],
            exports: [LySnackBar]
        })
    ], LySnackBarModule);
    return LySnackBarModule;
}());

export { LySnackBar, LySnackBarModule, STYLES, LySnackBarService as ɵa };
//# sourceMappingURL=alyle-ui-snack-bar.js.map
