/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
import { MinimaLight } from './light';
import { MinimaDark } from './dark';
var MinimaTheme = /** @class */ (function () {
    function MinimaTheme() {
        this.themes = [MinimaLight, MinimaDark];
    }
    return MinimaTheme;
}());
export { MinimaTheme };
if (false) {
    /** @type {?} */
    MinimaTheme.prototype.themes;
}
var ThemeMinimaLight = /** @class */ (function () {
    function ThemeMinimaLight() {
    }
    ThemeMinimaLight.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-theme-minima-light]',
                    providers: [
                        LyTheme2,
                        { provide: LY_THEME_NAME, useValue: 'minima-light' }
                    ]
                },] },
    ];
    return ThemeMinimaLight;
}());
export { ThemeMinimaLight };
var ThemeMinimaDark = /** @class */ (function () {
    function ThemeMinimaDark() {
    }
    ThemeMinimaDark.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-theme-minima-dark]',
                    providers: [
                        LyTheme2,
                        { provide: LY_THEME_NAME, useValue: 'minima-dark' }
                    ]
                },] },
    ];
    return ThemeMinimaDark;
}());
export { ThemeMinimaDark };
var ThemeMinimaModule = /** @class */ (function () {
    function ThemeMinimaModule() {
    }
    ThemeMinimaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ThemeMinimaDark, ThemeMinimaLight],
                    exports: [ThemeMinimaDark, ThemeMinimaLight]
                },] },
    ];
    return ThemeMinimaModule;
}());
export { ThemeMinimaModule };
/**
 * @record
 */
export function IMinimaTheme() { }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLGFBQWEsRUFBRSxRQUFRLEVBQWlCLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVwQyxJQUFBOztzQkFDVyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7O3NCQU5wQztJQU9DLENBQUE7QUFGRCx1QkFFQzs7Ozs7Ozs7O2dCQUVBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxTQUFTLEVBQUU7d0JBQ1QsUUFBUTt3QkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtxQkFDckQ7aUJBQ0Y7OzJCQWZEOztTQWdCYSxnQkFBZ0I7Ozs7O2dCQUU1QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7cUJBQ3BEO2lCQUNGOzswQkF4QkQ7O1NBeUJhLGVBQWU7Ozs7O2dCQUUzQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzdDOzs0QkE5QkQ7O1NBK0JhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUsIEx5VGhlbWUyLCBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUxpZ2h0IH0gZnJvbSAnLi9saWdodCc7XG5pbXBvcnQgeyBNaW5pbWFEYXJrIH0gZnJvbSAnLi9kYXJrJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYVRoZW1lIGltcGxlbWVudHMgTHlUaGVtZUNvbmZpZyB7XG4gIHRoZW1lcyA9IFtNaW5pbWFMaWdodCwgTWluaW1hRGFya107XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtbGlnaHRdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1saWdodCcgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTGlnaHQgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtZGFya10nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeVRoZW1lMixcbiAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWRhcmsnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYURhcmsgeyB9XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF0sXG4gIGV4cG9ydHM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTW9kdWxlIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5pbWFUaGVtZSBleHRlbmRzIE1pbmltYUxpZ2h0LCBNaW5pbWFEYXJrIHsgfVxuIl19