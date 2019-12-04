import { TemplateRef, EventEmitter, OnDestroy } from '@angular/core';
import { LyTheme2, LyOverlay, XPosition, YPosition, StyleTemplate, StyleCollection } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
export interface LySnackBarTheme {
    /** Styles for SnackBar Component */
    root?: StyleTemplate | StyleCollection;
}
export interface LySnackBarVariables {
    snackBar?: LySnackBarTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LySnackBarVariables) => {
    $priority: number;
    root: (className: string) => string;
};
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
    readonly classes: Pick<{
        $priority: string;
        root: string;
    }, "root">;
    duration: number | 'Infinity';
    horizontalPosition: 'center' | XPosition;
    verticalPosition: YPosition;
    afterDismissed: EventEmitter<LySnackBarDismiss>;
    constructor(_templateRef: TemplateRef<any>, _theme: LyTheme2, _overlay: LyOverlay, _snackBarService: LySnackBarService);
    ngOnDestroy(): void;
    open(): LySnackBarRef;
    /** Dismiss snackBar */
    dismiss(): void;
}
