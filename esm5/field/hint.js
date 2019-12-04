import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input, Inject } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LY_FIELD_STYLES_TOKEN } from './field-styles-token';
/** LyHint */
var STYLE_PRIORITY = -2;
/** Hint text to be shown underneath the field. */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme, styles) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.hint);
    }
    Object.defineProperty(LyHint.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (val) {
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
                this._alignClass = undefined;
            }
            this._align = val;
        },
        enumerable: true,
        configurable: true
    });
    LyHint.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyHint.prototype, "align", null);
    LyHint = tslib_1.__decorate([
        Directive({
            selector: 'ly-field > ly-hint'
        }),
        tslib_1.__param(3, Inject(LY_FIELD_STYLES_TOKEN))
    ], LyHint);
    return LyHint;
}());
export { LyHint };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJN0QsYUFBYTtBQUNiLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRTFCLGtEQUFrRDtBQUlsRDtJQXlCRSxnQkFDVSxTQUFvQixFQUNwQixHQUFlLEVBQ2YsTUFBZ0IsRUFDTyxNQUFXO1FBSGxDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFHdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTFCRCxzQkFBSSx5QkFBSzthQWVUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7YUFqQkQsVUFBVSxHQUFnQjtZQUN4QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQzNDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7aUJBQzVDO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQUtvQixTQUFTO2dCQUNmLFVBQVU7Z0JBQ1AsUUFBUTtnREFDdkIsTUFBTSxTQUFDLHFCQUFxQjs7SUF0Qi9CO1FBREMsS0FBSyxFQUFFO3VDQWVQO0lBckJVLE1BQU07UUFIbEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDO1FBOEJHLG1CQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BN0JyQixNQUFNLENBa0NsQjtJQUFELGFBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX0ZJRUxEX1NUWUxFU19UT0tFTiB9IGZyb20gJy4vZmllbGQtc3R5bGVzLXRva2VuJztcblxuZXhwb3J0IHR5cGUgTHlIaW50QWxpZ24gPSAnYmVmb3JlJyB8ICdhZnRlcic7XG5cbi8qKiBMeUhpbnQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBIaW50IHRleHQgdG8gYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SGludCB7XG4gIHJlYWRvbmx5IGNsYXNzZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgcHJpdmF0ZSBfYWxpZ246IEx5SGludEFsaWduO1xuICBwcml2YXRlIF9hbGlnbkNsYXNzPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ24odmFsOiBMeUhpbnRBbGlnbikge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGlmICh2YWwgPT09ICdhZnRlcicpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpbnRBZnRlcik7XG4gICAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSB0aGlzLmNsYXNzZXMuaGludEFmdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpbnRCZWZvcmUpO1xuICAgICAgICB0aGlzLl9hbGlnbkNsYXNzID0gdGhpcy5jbGFzc2VzLmhpbnRCZWZvcmU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbGlnbkNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hbGlnbkNsYXNzKTtcbiAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2FsaWduID0gdmFsO1xuICB9XG4gIGdldCBhbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgQEluamVjdChMWV9GSUVMRF9TVFlMRVNfVE9LRU4pIHN0eWxlczogYW55XG4gICAgKSB7XG4gICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGludCk7XG4gIH1cbn1cbiJdfQ==