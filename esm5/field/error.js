import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Inject } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LY_FIELD_STYLES_TOKEN } from './field-styles-token';
var STYLE_PRIORITY = -2;
var LyError = /** @class */ (function () {
    function LyError(renderer, el, theme, styles) {
        var className = theme.addStyleSheet(styles, STYLE_PRIORITY).error;
        renderer.addClass(el.nativeElement, className);
    }
    LyError.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
    ]; };
    LyError = tslib_1.__decorate([
        Directive({
            selector: 'ly-error'
        }),
        tslib_1.__param(3, Inject(LY_FIELD_STYLES_TOKEN))
    ], LyError);
    return LyError;
}());
export { LyError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdELElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBSzFCO0lBQ0UsaUJBQ0UsUUFBbUIsRUFDbkIsRUFBYyxFQUNkLEtBQWUsRUFDZ0IsTUFBVztRQUUxQyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVBXLFNBQVM7Z0JBQ2YsVUFBVTtnQkFDUCxRQUFRO2dEQUNkLE1BQU0sU0FBQyxxQkFBcUI7O0lBTHBCLE9BQU87UUFIbkIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQztRQU1HLG1CQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BTHJCLE9BQU8sQ0FVbkI7SUFBRCxjQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX0ZJRUxEX1NUWUxFU19UT0tFTiB9IGZyb20gJy4vZmllbGQtc3R5bGVzLXRva2VuJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZXJyb3InXG59KVxuZXhwb3J0IGNsYXNzIEx5RXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KExZX0ZJRUxEX1NUWUxFU19UT0tFTikgc3R5bGVzOiBhbnlcbiAgICApIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpLmVycm9yO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiJdfQ==