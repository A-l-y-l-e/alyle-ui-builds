import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Input, Output, Directive, TemplateRef, NgModule } from '@angular/core';
import { XPosition, YPosition, LyTheme2, LyOverlay, LyOverlayModule } from '@alyle/ui';
import { Subject } from 'rxjs';

let LySnackBarService = class LySnackBarService {
};
LySnackBarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LySnackBarService_Factory() { return new LySnackBarService(); }, token: LySnackBarService, providedIn: "root" });
LySnackBarService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LySnackBarService);

const DEFAULT_DURATION = 6e3;
class LySnackBarRef {
    constructor(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
        this._snackBarService = _snackBarService;
        this._overlay = _overlay;
        this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
        this._theme = _theme;
        this._dismissedByAction = false;
        /** Subject for notifying the user that the snack bar has been dismissed. */
        this._afterDismissed = new Subject();
        if (duration !== 'Infinity') {
            this._timer = setTimeout(() => {
                this.dismiss();
            }, duration || DEFAULT_DURATION);
        }
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    afterDismissed() {
        return this._afterDismissed.asObservable();
    }
    dismiss() {
        const snackBar = this._overlay;
        const timer = this._timer;
        this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.next();
        this._afterDismissed.complete();
        if (snackBar) {
            if (timer) {
                // clear previous timer
                clearTimeout(timer);
            }
            snackBar.containerElement.classList.remove(this._theme.addStyle('SnackBar:open', null, null, null, null));
            setTimeout(() => {
                snackBar.destroy();
            }, 350);
            this._snackBarService._currentSnackBar = null;
            this._overlay = null;
        }
    }
    dismissWithAction() {
        const snackBar = this._overlay;
        if (snackBar) {
            this._dismissedByAction = true;
            this.dismiss();
        }
    }
}

const STYLE_PRIORITY = -2;
const DEFAULT_HORIZONTAL_POSITION = XPosition.after;
const DEFAULT_VERTICAL_POSITION = YPosition.below;
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
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
        transition: `opacity ${theme.animations.curves.standard} 350ms, transform ${theme.animations.curves.deceleration} 350ms`,
        fontSize: theme.pxToRem(theme.typography.fontSize),
        [theme.getBreakpoint('XSmall')]: {
            width: 'calc(100% - 16px)',
            minWidth: 'calc(100% - 16px)'
        },
        '&': theme.snackBar ? theme.snackBar.root : null
    }
});
let LySnackBar = class LySnackBar {
    constructor(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.classes = this._theme.addStyleSheet(STYLES);
        this.afterDismissed = new EventEmitter();
    }
    ngOnDestroy() {
        this.dismiss();
    }
    open() {
        // close previous snackBar if exist
        const sbrPrev = this._snackBarService._currentSnackBar;
        if (sbrPrev) {
            sbrPrev.dismiss();
        }
        const duration = this.duration;
        const horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
        const verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
        const snackBar = this._overlay.create(this._templateRef, undefined, {
            styles: {
                // this remove previous style
                justifyContent: null
            },
            hasBackdrop: false,
            classes: [
                this.classes.root,
                this._theme.addStyle(`SnackBar.hp:${horizontalPosition}.vp:${verticalPosition}`, (theme) => {
                    const __styles = {};
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
        this._theme.requestAnimationFrame(() => {
            this._theme.addStyle('SnackBar:open', ({
                opacity: 1,
                transform: 'translateY(0)'
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
        });
        window.getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
        const sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
        this._snackBarService._currentSnackBar = sbr;
        return sbr;
    }
    /** Dismiss snackBar */
    dismiss() {
        const sbr = this._snackBarService._currentSnackBar;
        if (sbr) {
            sbr.dismissWithAction();
        }
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

let LySnackBarModule = class LySnackBarModule {
};
LySnackBarModule = __decorate([
    NgModule({
        imports: [LyOverlayModule],
        declarations: [LySnackBar],
        exports: [LySnackBar]
    })
], LySnackBarModule);

export { LySnackBar, LySnackBarModule, STYLES, LySnackBarService as ɵa };
//# sourceMappingURL=alyle-ui-snack-bar.js.map
