/**
 * Configuration for opening a modal dialog with the LyDialog service.
 */
var LyDialogConfig = /** @class */ (function () {
    function LyDialogConfig() {
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
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
    }
    return LyDialogConfig;
}());
export { LyDialogConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7SUFBQTtRQVdFOzs7V0FHRztRQUNILGNBQVMsR0FBNEIsb0JBQW9CLENBQUM7UUFFMUQ7OztXQUdHO1FBQ0gsYUFBUSxHQUE0QixvQkFBb0IsQ0FBQztRQVF6RCx5Q0FBeUM7UUFDekMsZ0JBQVcsR0FBYSxJQUFJLENBQUM7SUFnQi9CLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIG9wZW5pbmcgYSBtb2RhbCBkaWFsb2cgd2l0aCB0aGUgTHlEaWFsb2cgc2VydmljZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29uZmlnPERBVEEgPSB1bmtub3duPiB7XG5cbiAgLyoqIERhdGEgYmVpbmcgaW5qZWN0ZWQgaW50byB0aGUgY2hpbGQgY29tcG9uZW50LiAqL1xuICBkYXRhPzogREFUQSB8IG51bGw7XG5cbiAgLyoqIFdpZHRoIG9mIHRoZSBkaWFsb2cuICovXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIGRpYWxvZy4gKi9cbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYXgtaGVpZ2h0IG9mIHRoZSBkaWFsb2cuIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC5cbiAgICogRGVmYXVsdHMgdG8gY2FsYygxMDB2dyAtIDkwcHgpXG4gICAqL1xuICBtYXhIZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsID0gJ2NhbGMoMTAwdmggLSA2NHB4KSc7XG5cbiAgLyoqXG4gICAqIE1heC13aWR0aCBvZiB0aGUgZGlhbG9nLiBJZiBhIG51bWJlciBpcyBwcm92aWRlZCwgcGl4ZWwgdW5pdHMgYXJlIGFzc3VtZWQuXG4gICAqIERlZmF1bHRzIHRvIGNhbGMoMTAwdncgLSA5MHB4KVxuICAgKi9cbiAgbWF4V2lkdGg/OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsID0gJ2NhbGMoMTAwdncgLSA2NHB4KSc7XG5cbiAgLyoqIE1pbi1oZWlnaHQgb2YgdGhlIGRpYWxvZy4gSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLiAqL1xuICBtaW5IZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIE1pbi13aWR0aCBvZiB0aGUgZGlhbG9nLiBJZiBhIG51bWJlciBpcyBwcm92aWRlZCwgcGl4ZWwgdW5pdHMgYXJlIGFzc3VtZWQuICovXG4gIG1pbldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkaWFsb2cgaGFzIGEgYmFja2Ryb3AuICovXG4gIGhhc0JhY2tkcm9wPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBjbGFzcyBmb3IgdGhlIGJhY2tkcm9wLiBPdmVycmlkZXMgdGhlIGN1cnJlbnQgc3R5bGUuXG4gICAqL1xuICBiYWNrZHJvcENsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gY2xhc3MgZm9yIHRoZSBgPGx5LWRpYWxvZy1jb250YWluZXI+YC4gT3ZlcndyaXRlIHRoZSBjdXJyZW50IHN0eWxlLlxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHVzZXIgY2FuIGNsaWNrIG9uIHRoZSBiYWNrZHJvcCB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgKi9cbiAgZGlzYWJsZUNsb3NlPzogYm9vbGVhbjtcbn1cbiJdfQ==