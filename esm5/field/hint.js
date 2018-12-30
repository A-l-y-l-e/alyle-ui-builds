/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { STYLES } from './styles';
/**
 * LyHint
 * @type {?}
 */
var STYLE_PRIORITY = -2;
/**
 * Hint text to be shown underneath the field.
 */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.hint);
    }
    Object.defineProperty(LyHint.prototype, "align", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                if (val === 'after') {
                    this._renderer.addClass(this._el.nativeElement, this.classes.hintAfter);
                    this._alignClass = this.classes.hintAfter;
                }
                else {
                    this._renderer.addClass(this._el.nativeElement, this.classes.hintBefore);
                    this._alignClass = this.classes.hintBefore;
                }
            }
            else if (this._alignClass) {
                this._renderer.removeClass(this._el.nativeElement, this._alignClass);
                this._alignClass = null;
            }
            this._align = val;
        },
        enumerable: true,
        configurable: true
    });
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
    LyHint.propDecorators = {
        align: [{ type: Input }]
    };
    return LyHint;
}());
export { LyHint };
if (false) {
    /** @type {?} */
    LyHint.prototype.classes;
    /** @type {?} */
    LyHint.prototype._align;
    /** @type {?} */
    LyHint.prototype._alignClass;
    /** @type {?} */
    LyHint.prototype._renderer;
    /** @type {?} */
    LyHint.prototype._el;
    /** @type {?} */
    LyHint.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztJQUs1QixjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBR3pCO0lBMEJFLGdCQUNVLFNBQW9CLEVBQ3BCLEdBQWUsRUFDZixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBekJqQixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBMkJuRSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBekJELHNCQUNJLHlCQUFLOzs7O1FBZVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFsQkQsVUFDVSxHQUFnQjtZQUN4QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQzNDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7aUJBQzVDO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Ozs7Z0JBWm1CLFNBQVM7Z0JBQUUsVUFBVTtnQkFDaEMsUUFBUTs7O3dCQWdCZCxLQUFLOztJQTBCUixhQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E5QlksTUFBTTs7O0lBQ2pCLHlCQUFxRTs7SUFDckUsd0JBQTRCOztJQUM1Qiw2QkFBNEI7O0lBcUIxQiwyQkFBNEI7O0lBQzVCLHFCQUF1Qjs7SUFDdkIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTVFlMRVMgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEx5SGludEFsaWduID0gJ2JlZm9yZScgfCAnYWZ0ZXInO1xuXG4vKiogTHlIaW50ICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogSGludCB0ZXh0IHRvIGJlIHNob3duIHVuZGVybmVhdGggdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUhpbnQge1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfYWxpZ246IEx5SGludEFsaWduO1xuICBwcml2YXRlIF9hbGlnbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWw6IEx5SGludEFsaWduKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHZhbCA9PT0gJ2FmdGVyJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGludEFmdGVyKTtcbiAgICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IHRoaXMuY2xhc3Nlcy5oaW50QWZ0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGludEJlZm9yZSk7XG4gICAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSB0aGlzLmNsYXNzZXMuaGludEJlZm9yZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FsaWduQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FsaWduQ2xhc3MpO1xuICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2FsaWduID0gdmFsO1xuICB9XG4gIGdldCBhbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaW50KTtcbiAgfVxufVxuIl19