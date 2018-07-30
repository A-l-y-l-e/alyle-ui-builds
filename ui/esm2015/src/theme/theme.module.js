/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { LY_THEME_NAME } from './theme-config';
export class LyThemeModule {
    /**
     * @param {?} themeName
     * @return {?}
     */
    static setTheme(themeName) {
        return {
            ngModule: LyThemeModule,
            providers: [
                LyTheme2,
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    }
}
LyThemeModule.decorators = [
    { type: NgModule },
];
function LyThemeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyThemeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyThemeModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUQsTUFBTSxlQUFlLENBQUM7QUFHOUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CL0MsTUFBTTs7Ozs7SUFDSixNQUFNLENBQUMsUUFBUSxDQUFDLFNBQWlCO1FBQy9CLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTthQUNoRDtTQUNGLENBQUM7S0FDSDs7O1lBVkYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFNlbGYsIEhvc3QsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVRoZW1lQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBUSEVNRTJfUFJPVklERVJfRkFDVE9SWShcbi8vICAgcGFyZW50UmVnaXN0cnk6IEx5VGhlbWUyLFxuLy8gICBjb3JlVGhlbWU6IENvcmVUaGVtZSkge1xuLy8gICByZXR1cm4gcGFyZW50UmVnaXN0cnkgfHwgbmV3IEx5VGhlbWUyKGNvcmVUaGVtZSk7XG4vLyB9XG5cbi8vIC8qKiBAZG9jcy1wcml2YXRlICovXG4vLyBleHBvcnQgY29uc3QgVEhFTUUyX1BST1ZJREVSID0ge1xuLy8gICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIEx5VGhlbWUyIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4vLyAgIHByb3ZpZGU6IEx5VGhlbWUyLFxuLy8gICBkZXBzOiBbXG4vLyAgICAgW25ldyBPcHRpb25hbCgpLCBMeVRoZW1lMl0sXG4vLyAgICAgW0NvcmVUaGVtZV1cbi8vICAgXSxcbi8vICAgdXNlRmFjdG9yeTogVEhFTUUyX1BST1ZJREVSX0ZBQ1RPUlksXG4vLyB9O1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTHlUaGVtZTIsXG4gICAgICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6IHRoZW1lTmFtZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19