import { TemplateRef, EventEmitter } from '@angular/core';
import { LyTheme2, LyOverlay } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
/** Event that is emitted when a snack bar is dismissed. */
export interface LySnackBarDismiss {
    /** Whether the snack bar was dismissed using the action fn. */
    dismissedByAction: boolean;
}
export declare class LySnackBar {
    private _templateRef;
    private _theme;
    private _overlay;
    private _snackBarService;
    duration: number;
    horizontalPosition: 'start' | 'center' | 'end' | 'left' | 'right';
    verticalPosition: 'top' | 'bottom';
    afterDismissed: EventEmitter<LySnackBarDismiss>;
    constructor(_templateRef: TemplateRef<any>, _theme: LyTheme2, _overlay: LyOverlay, _snackBarService: LySnackBarService);
    open(): LySnackBarRef;
    /** Dismiss snackBar */
    dismiss(): void;
}
