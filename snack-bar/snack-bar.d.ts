import { TemplateRef, EventEmitter, OnDestroy } from '@angular/core';
import { LyTheme2, LyOverlay, XPosition, YPosition } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
/** Event that is emitted when a snack bar is dismissed. */
export interface LySnackBarDismiss {
    /** Whether the snack bar was dismissed using the action fn. */
    dismissedByAction: boolean;
}
export declare class LySnackBar implements OnDestroy {
    private _templateRef;
    private _theme;
    private _overlay;
    private _snackBarService;
    duration: number;
    horizontalPosition: 'center' | XPosition;
    verticalPosition: YPosition;
    afterDismissed: EventEmitter<LySnackBarDismiss>;
    constructor(_templateRef: TemplateRef<any>, _theme: LyTheme2, _overlay: LyOverlay, _snackBarService: LySnackBarService);
    ngOnDestroy(): void;
    open(): LySnackBarRef;
    /** Dismiss snackBar */
    dismiss(): void;
}
