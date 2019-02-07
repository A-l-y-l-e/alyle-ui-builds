import { LyOverlayRef } from '@alyle/ui';
export declare class LyDialogRef {
    private _overlayRef;
    private _result;
    readonly afterOpened: import("rxjs").Observable<void>;
    readonly beforeClosed: import("rxjs").Observable<any>;
    readonly afterClosed: import("rxjs").Observable<any>;
    /**
     * @internal
     * @docs-private
     */
    readonly result: any;
    constructor(_overlayRef: LyOverlayRef);
    close(result?: any): void;
}
