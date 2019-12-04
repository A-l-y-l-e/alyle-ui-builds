import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Inject } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LY_FIELD_STYLES_TOKEN } from './field-styles-token';
const STYLE_PRIORITY = -2;
let LyError = class LyError {
    constructor(renderer, el, theme, styles) {
        const className = theme.addStyleSheet(styles, STYLE_PRIORITY).error;
        renderer.addClass(el.nativeElement, className);
    }
};
LyError.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
];
LyError = tslib_1.__decorate([
    Directive({
        selector: 'ly-error'
    }),
    tslib_1.__param(3, Inject(LY_FIELD_STYLES_TOKEN))
], LyError);
export { LyError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdELE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBSzFCLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQU87SUFDbEIsWUFDRSxRQUFtQixFQUNuQixFQUFjLEVBQ2QsS0FBZSxFQUNnQixNQUFXO1FBRTFDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGLENBQUE7O1lBUmEsU0FBUztZQUNmLFVBQVU7WUFDUCxRQUFROzRDQUNkLE1BQU0sU0FBQyxxQkFBcUI7O0FBTHBCLE9BQU87SUFIbkIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztJQU1HLG1CQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0dBTHJCLE9BQU8sQ0FVbkI7U0FWWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfRklFTERfU1RZTEVTX1RPS0VOIH0gZnJvbSAnLi9maWVsZC1zdHlsZXMtdG9rZW4nO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1lcnJvcidcbn0pXG5leHBvcnQgY2xhc3MgTHlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoTFlfRklFTERfU1RZTEVTX1RPS0VOKSBzdHlsZXM6IGFueVxuICAgICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSkuZXJyb3I7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufVxuIl19