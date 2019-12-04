import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, TemplateRef, Input, Output, Directive, NgModule } from '@angular/core';
import { XPosition, YPosition, styleTemplateToString, LyTheme2, LyOverlay, LyOverlayModule } from '@alyle/ui';
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
            snackBar.containerElement.classList.remove(this._theme.getClass('SnackBar:open'));
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
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: function (className) { return className + "{border-radius:4px;display:flex;justify-content:space-between;align-items:center;margin:8px;padding:0 16px;min-height:48px;min-width:320px;max-width:320px;opacity:0;transition:opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms;font-size:" + theme.pxToRem(theme.typography.fontSize) + ";box-sizing:border-box;}" + styleTemplateToString(((theme.snackBar
        && theme.snackBar.root) || null), "" + className) + className + " " + theme.getBreakpoint('XSmall') + "{width:calc(100% - 16px);min-width:calc(100% - 16px);}"; }
}); };
var LySnackBar = /** @class */ (function () {
    function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.classes = this._theme.renderStyleSheet(STYLES);
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
                this._theme.renderStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
                    var marginLeft;
                    var left;
                    var marginRight;
                    var right;
                    var transform;
                    var top;
                    var bottom;
                    var hp;
                    if (verticalPosition === YPosition.above) {
                        transform = 'translateY(-180%)';
                        top = 0;
                    }
                    if (verticalPosition === YPosition.below) {
                        transform = 'translateY(180%)';
                        bottom = 0;
                    }
                    if (horizontalPosition === 'center') {
                        marginRight = marginLeft = 'auto';
                        left = right = 0;
                    }
                    else {
                        hp = theme.getDirection(horizontalPosition);
                    }
                    return function (className) { return className + "{margin-left:" + marginLeft + ";left:" + left + ";margin-right:" + marginRight + ";right:" + right + ";transform:" + transform + ";top:" + top + ";bottom:" + bottom + ";" + hp + ":0;}"; };
                }, STYLE_PRIORITY)
            ]
        });
        this._theme.requestAnimationFrame(function () {
            var newClass = _this._theme.renderStyle('SnackBar:open', function () { return (function (className) { return className + "{opacity:1;transform:translateY(0);}"; }); }, STYLE_PRIORITY);
            snackBar.containerElement.classList.add(newClass);
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
    LySnackBar.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: LyTheme2 },
        { type: LyOverlay },
        { type: LySnackBarService }
    ]; };
    __decorate([
        Input()
    ], LySnackBar.prototype, "duration", void 0);
    __decorate([
        Input()
    ], LySnackBar.prototype, "horizontalPosition", void 0);
    __decorate([
        Input()
    ], LySnackBar.prototype, "verticalPosition", void 0);
    __decorate([
        Output()
    ], LySnackBar.prototype, "afterDismissed", void 0);
    LySnackBar = __decorate([
        Directive({
            selector: 'ng-template[ly-snack-bar]',
            exportAs: 'lySnackBar'
        })
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

/**
 * Generated bundle index. Do not edit.
 */

export { LySnackBar, LySnackBarModule, STYLES, LySnackBarService as ɵa };
//# sourceMappingURL=alyle-ui-snack-bar.js.map
