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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLElBQUE7O3NCQUNXLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7c0JBTnBDO0lBT0MsQ0FBQTtBQUZELHVCQUVDOzs7Ozs7Ozs7Z0JBRUEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRTt3QkFDVCxRQUFRO3dCQUNSLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO3FCQUNyRDtpQkFDRjs7MkJBZkQ7O1NBZ0JhLGdCQUFnQjs7Ozs7Z0JBRTVCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUU7d0JBQ1QsUUFBUTt3QkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtxQkFDcEQ7aUJBQ0Y7OzBCQXhCRDs7U0F5QmEsZUFBZTs7Ozs7Z0JBRTNCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDN0M7OzRCQTlCRDs7U0ErQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hVGhlbWUgaW1wbGVtZW50cyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzID0gW01pbmltYUxpZ2h0LCBNaW5pbWFEYXJrXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1saWdodF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeVRoZW1lMixcbiAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWxpZ2h0JyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFMaWdodCB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1kYXJrXScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtZGFyaycgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hRGFyayB7IH1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XSxcbiAgZXhwb3J0czogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFNb2R1bGUgeyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1pbmltYVRoZW1lIGV4dGVuZHMgTWluaW1hTGlnaHQsIE1pbmltYURhcmsgeyB9XG4iXX0=