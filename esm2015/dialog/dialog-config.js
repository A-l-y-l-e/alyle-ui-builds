/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration for opening a modal dialog with the LyDialog service.
 * @template DATA
 */
export class LyDialogConfig {
    constructor() {
        /**
         * Max-height of the dialog. If a number is provided, pixel units are assumed.
         * Defaults to calc(100vw - 90px)
         */
        this.maxHeight = 'calc(100vh - 64px)';
        /**
         * Max-width of the dialog. If a number is provided, pixel units are assumed.
         * Defaults to calc(100vw - 90px)
         */
        this.maxWidth = 'calc(100vw - 64px)';
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
    }
}
if (false) {
    /**
     * Data being injected into the child component.
     * @type {?}
     */
    LyDialogConfig.prototype.data;
    /**
     * Width of the dialog.
     * @type {?}
     */
    LyDialogConfig.prototype.width;
    /**
     * Height of the dialog.
     * @type {?}
     */
    LyDialogConfig.prototype.height;
    /**
     * Max-height of the dialog. If a number is provided, pixel units are assumed.
     * Defaults to calc(100vw - 90px)
     * @type {?}
     */
    LyDialogConfig.prototype.maxHeight;
    /**
     * Max-width of the dialog. If a number is provided, pixel units are assumed.
     * Defaults to calc(100vw - 90px)
     * @type {?}
     */
    LyDialogConfig.prototype.maxWidth;
    /**
     * Min-height of the dialog. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    LyDialogConfig.prototype.minHeight;
    /**
     * Min-width of the dialog. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    LyDialogConfig.prototype.minWidth;
    /**
     * Whether the dialog has a backdrop.
     * @type {?}
     */
    LyDialogConfig.prototype.hasBackdrop;
    /**
     * Custom class for the backdrop. Overrides the current style.
     * @type {?}
     */
    LyDialogConfig.prototype.backdropClass;
    /**
     * Custom class for the `<ly-dialog-container>`. Overwrite the current style.
     * @type {?}
     */
    LyDialogConfig.prototype.containerClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsTUFBTSxPQUFPLGNBQWM7SUFBM0I7Ozs7O1FBZUUsY0FBUyxHQUE0QixvQkFBb0IsQ0FBQzs7Ozs7UUFNMUQsYUFBUSxHQUE0QixvQkFBb0IsQ0FBQzs7OztRQVN6RCxnQkFBVyxHQUFhLElBQUksQ0FBQztJQVcvQixDQUFDO0NBQUE7Ozs7OztJQXRDQyw4QkFBbUI7Ozs7O0lBR25CLCtCQUF3Qjs7Ozs7SUFHeEIsZ0NBQXlCOzs7Ozs7SUFNekIsbUNBQTBEOzs7Ozs7SUFNMUQsa0NBQXlEOzs7OztJQUd6RCxtQ0FBNEI7Ozs7O0lBRzVCLGtDQUEyQjs7Ozs7SUFHM0IscUNBQTZCOzs7OztJQUs3Qix1Q0FBdUI7Ozs7O0lBS3ZCLHdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3Igb3BlbmluZyBhIG1vZGFsIGRpYWxvZyB3aXRoIHRoZSBMeURpYWxvZyBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb25maWc8REFUQSA9IHVua25vd24+IHtcblxuICAvKiogRGF0YSBiZWluZyBpbmplY3RlZCBpbnRvIHRoZSBjaGlsZCBjb21wb25lbnQuICovXG4gIGRhdGE/OiBEQVRBIHwgbnVsbDtcblxuICAvKiogV2lkdGggb2YgdGhlIGRpYWxvZy4gKi9cbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgZGlhbG9nLiAqL1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1heC1oZWlnaHQgb2YgdGhlIGRpYWxvZy4gSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLlxuICAgKiBEZWZhdWx0cyB0byBjYWxjKDEwMHZ3IC0gOTBweClcbiAgICovXG4gIG1heEhlaWdodD86IG51bWJlciB8IHN0cmluZyB8IG51bGwgPSAnY2FsYygxMDB2aCAtIDY0cHgpJztcblxuICAvKipcbiAgICogTWF4LXdpZHRoIG9mIHRoZSBkaWFsb2cuIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC5cbiAgICogRGVmYXVsdHMgdG8gY2FsYygxMDB2dyAtIDkwcHgpXG4gICAqL1xuICBtYXhXaWR0aD86IG51bWJlciB8IHN0cmluZyB8IG51bGwgPSAnY2FsYygxMDB2dyAtIDY0cHgpJztcblxuICAvKiogTWluLWhlaWdodCBvZiB0aGUgZGlhbG9nLiBJZiBhIG51bWJlciBpcyBwcm92aWRlZCwgcGl4ZWwgdW5pdHMgYXJlIGFzc3VtZWQuICovXG4gIG1pbkhlaWdodD86IG51bWJlciB8IHN0cmluZztcblxuICAvKiogTWluLXdpZHRoIG9mIHRoZSBkaWFsb2cuIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC4gKi9cbiAgbWluV2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRpYWxvZyBoYXMgYSBiYWNrZHJvcC4gKi9cbiAgaGFzQmFja2Ryb3A/OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ3VzdG9tIGNsYXNzIGZvciB0aGUgYmFja2Ryb3AuIE92ZXJyaWRlcyB0aGUgY3VycmVudCBzdHlsZS5cbiAgICovXG4gIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBjbGFzcyBmb3IgdGhlIGA8bHktZGlhbG9nLWNvbnRhaW5lcj5gLiBPdmVyd3JpdGUgdGhlIGN1cnJlbnQgc3R5bGUuXG4gICAqL1xuICBjb250YWluZXJDbGFzcz86IHN0cmluZztcbn1cbiJdfQ==