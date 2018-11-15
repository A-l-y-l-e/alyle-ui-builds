/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @type {?} */
var STYLES = ({
    root: {
        display: 'block',
        fontSize: '.75em',
        marginTop: '8px'
    }
});
/**
 * Hint text to be shown underneath the field.
 */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme) {
        /** @type {?} */
        var className = _theme.addStyleSheet(STYLES).root;
        _renderer.addClass(_el.nativeElement, className);
    }
    LyHint.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > ly-hint'
                },] }
    ];
    /** @nocollapse */
    LyHint.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyHint;
}());
export { LyHint };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDOztJQUUvQixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0NBQ0YsQ0FBQzs7OztBQUdGO0lBSUUsZ0JBQ0UsU0FBb0IsRUFDcEIsR0FBZSxFQUNmLE1BQWdCOztZQUVWLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7UUFDbkQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7OztnQkFkbUIsU0FBUztnQkFBRSxVQUFVO2dCQUNoQyxRQUFROztJQXVCakIsYUFBQztDQUFBLEFBWkQsSUFZQztTQVRZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRVMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJy43NWVtJyxcbiAgICBtYXJnaW5Ub3A6ICc4cHgnXG4gIH1cbn0pO1xuXG4vKiogSGludCB0ZXh0IHRvIGJlIHNob3duIHVuZGVybmVhdGggdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUhpbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3RoZW1lOiBMeVRoZW1lMlxuICAgICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IF90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUykucm9vdDtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiJdfQ==