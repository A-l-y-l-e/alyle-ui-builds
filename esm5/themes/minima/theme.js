/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function MinimaTheme_tsickle_Closure_declarations() {
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
function ThemeMinimaLight_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ThemeMinimaLight.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ThemeMinimaLight.ctorParameters;
}
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
function ThemeMinimaDark_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ThemeMinimaDark.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ThemeMinimaDark.ctorParameters;
}
var MinimaThemeModule = /** @class */ (function () {
    function MinimaThemeModule() {
    }
    MinimaThemeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ThemeMinimaLight, ThemeMinimaDark],
                    exports: [ThemeMinimaLight, ThemeMinimaDark]
                },] },
    ];
    return MinimaThemeModule;
}());
export { MinimaThemeModule };
function MinimaThemeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MinimaThemeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MinimaThemeModule.ctorParameters;
}
/**
 * @record
 */
export function IMinimaTheme() { }
function IMinimaTheme_tsickle_Closure_declarations() {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLElBQUE7O3NCQUNXLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7c0JBTnBDO0lBT0MsQ0FBQTtBQUZELHVCQUVDOzs7Ozs7Ozs7Z0JBRUEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRTt3QkFDVCxRQUFRO3dCQUNSLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO3FCQUNyRDtpQkFDRjs7MkJBZkQ7O1NBZ0JhLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Z0JBRTVCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUU7d0JBQ1QsUUFBUTt3QkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtxQkFDcEQ7aUJBQ0Y7OzBCQXhCRDs7U0F5QmEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Z0JBRTNCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztpQkFDN0M7OzRCQTlCRDs7U0ErQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hVGhlbWUgaW1wbGVtZW50cyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzID0gW01pbmltYUxpZ2h0LCBNaW5pbWFEYXJrXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1saWdodF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeVRoZW1lMixcbiAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWxpZ2h0JyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFMaWdodCB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1kYXJrXScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtZGFyaycgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hRGFyayB7IH1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGhlbWVNaW5pbWFMaWdodCwgVGhlbWVNaW5pbWFEYXJrXSxcbiAgZXhwb3J0czogW1RoZW1lTWluaW1hTGlnaHQsIFRoZW1lTWluaW1hRGFya11cbn0pXG5leHBvcnQgY2xhc3MgTWluaW1hVGhlbWVNb2R1bGUge31cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiJdfQ==