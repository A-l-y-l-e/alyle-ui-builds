/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
export class ThemeMinimaLight {
}
ThemeMinimaLight.decorators = [
    { type: Directive, args: [{
                selector: '[ly-theme-minima-light]',
                providers: [
                    LyTheme2,
                    { provide: LY_THEME_NAME, useValue: 'minima-light' }
                ]
            },] }
];
export class ThemeMinimaDark {
}
ThemeMinimaDark.decorators = [
    { type: Directive, args: [{
                selector: '[ly-theme-minima-dark]',
                providers: [
                    LyTheme2,
                    { provide: LY_THEME_NAME, useValue: 'minima-dark' }
                ]
            },] }
];
export class ThemeMinimaModule {
}
ThemeMinimaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ThemeMinimaDark, ThemeMinimaLight],
                exports: [ThemeMinimaDark, ThemeMinimaLight]
            },] }
];
/**
 * @record
 */
export function IMinimaTheme() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVdwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFQNUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFNBQVMsRUFBRTtvQkFDVCxRQUFRO29CQUNSLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO2lCQUNyRDthQUNGOztBQVVELE1BQU0sT0FBTyxlQUFlOzs7WUFQM0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRTtvQkFDVCxRQUFRO29CQUNSLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2lCQUNwRDthQUNGOztBQU9ELE1BQU0sT0FBTyxpQkFBaUI7OztZQUo3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7YUFDN0M7Ozs7O0FBR0Qsa0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiJdfQ==