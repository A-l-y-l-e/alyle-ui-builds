var LyThemeModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LyTheme2 } from './theme/theme2.service';
import { LY_THEME_NAME } from './theme/theme-config';
import { StyleRenderer } from './minimal/renderer-style';
let LyThemeModule = LyThemeModule_1 = class LyThemeModule {
    static setTheme(themeName) {
        return {
            ngModule: LyThemeModule_1,
            providers: [
                [LyTheme2],
                [StyleRenderer],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    }
};
LyThemeModule = LyThemeModule_1 = tslib_1.__decorate([
    NgModule()
], LyThemeModule);
export { LyThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3pELElBQWEsYUFBYSxxQkFBMUIsTUFBYSxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBaUI7UUFDL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxDQUFFLFFBQVEsQ0FBRTtnQkFDWixDQUFFLGFBQWEsQ0FBRTtnQkFDakIsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7YUFDaEQ7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFYWSxhQUFhO0lBRHpCLFFBQVEsRUFBRTtHQUNFLGFBQWEsQ0FXekI7U0FYWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgU3R5bGVSZW5kZXJlciB9IGZyb20gJy4vbWluaW1hbC9yZW5kZXJlci1zdHlsZSc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbIEx5VGhlbWUyIF0sXG4gICAgICAgIFsgU3R5bGVSZW5kZXJlciBdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==