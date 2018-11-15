/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
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
                },] }
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
                },] }
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
                },] }
    ];
    return ThemeMinimaModule;
}());
export { ThemeMinimaModule };
/**
 * @record
 */
export function IMinimaTheme() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUlwRDtJQUFBO0lBT2dDLENBQUM7O2dCQVBoQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7cUJBQ3JEO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBUGpDLElBT2lDO1NBQXBCLGdCQUFnQjtBQUU3QjtJQUFBO0lBTytCLENBQUM7O2dCQVAvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7cUJBQ3BEO2lCQUNGOztJQUM4QixzQkFBQztDQUFBLEFBUGhDLElBT2dDO1NBQW5CLGVBQWU7QUFFNUI7SUFBQTtJQUlpQyxDQUFDOztnQkFKakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2lCQUM3Qzs7SUFDZ0Msd0JBQUM7Q0FBQSxBQUpsQyxJQUlrQztTQUFyQixpQkFBaUI7Ozs7QUFFOUIsa0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiJdfQ==