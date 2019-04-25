import * as tslib_1 from "tslib";
import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
var ThemeMinimaLight = /** @class */ (function () {
    function ThemeMinimaLight() {
    }
    ThemeMinimaLight = tslib_1.__decorate([
        Directive({
            selector: '[ly-theme-minima-light]',
            providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }]
        })
    ], ThemeMinimaLight);
    return ThemeMinimaLight;
}());
export { ThemeMinimaLight };
var ThemeMinimaDark = /** @class */ (function () {
    function ThemeMinimaDark() {
    }
    ThemeMinimaDark = tslib_1.__decorate([
        Directive({
            selector: '[ly-theme-minima-dark]',
            providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-dark' }]
        })
    ], ThemeMinimaDark);
    return ThemeMinimaDark;
}());
export { ThemeMinimaDark };
var ThemeMinimaModule = /** @class */ (function () {
    function ThemeMinimaModule() {
    }
    ThemeMinimaModule = tslib_1.__decorate([
        NgModule({
            declarations: [ThemeMinimaDark, ThemeMinimaLight],
            exports: [ThemeMinimaDark, ThemeMinimaLight]
        })
    ], ThemeMinimaModule);
    return ThemeMinimaModule;
}());
export { ThemeMinimaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVFwRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsU0FBUyxFQUFFLENBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUU7U0FDOUUsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixnQkFBZ0I7QUFNN0I7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFKM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxTQUFTLEVBQUUsQ0FBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBRTtTQUM3RSxDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixlQUFlO0FBTTVCO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztTQUM3QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUxpZ2h0IH0gZnJvbSAnLi9saWdodCc7XG5pbXBvcnQgeyBNaW5pbWFEYXJrIH0gZnJvbSAnLi9kYXJrJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1saWdodF0nLFxuICBwcm92aWRlcnM6IFsgTHlUaGVtZTIsIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH0gXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbIEx5VGhlbWUyLCB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWRhcmsnIH0gXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYURhcmsgeyB9XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF0sXG4gIGV4cG9ydHM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTW9kdWxlIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5pbWFUaGVtZSBleHRlbmRzIE1pbmltYUxpZ2h0LCBNaW5pbWFEYXJrIHsgfVxuIl19