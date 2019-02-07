/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector } from '@angular/core';
import { LyOverlayRef } from './overlay-ref';
import { LyOverlayConfig } from './overlay-config';
/**
 * @param {?} parent
 * @param {?} config
 * @param {?} overlayFactory
 * @return {?}
 */
export function createOverlayInjector(parent, config, overlayFactory) {
    return Injector.create({
        providers: [
            {
                provide: LyOverlayConfig,
                useValue: config
            },
            {
                provide: LyOverlayRef,
                useValue: overlayFactory
            }
        ],
        parent
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQUVuRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsTUFBZ0IsRUFBRSxNQUF1QixFQUFFLGNBQW1CO0lBQ2xHLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNyQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsUUFBUSxFQUFHLE1BQU07YUFDbEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsWUFBWTtnQkFDckIsUUFBUSxFQUFHLGNBQWM7YUFDMUI7U0FDRjtRQUNELE1BQU07S0FDUCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheVJlZiB9IGZyb20gJy4vb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPdmVybGF5SW5qZWN0b3IocGFyZW50OiBJbmplY3RvciwgY29uZmlnOiBMeU92ZXJsYXlDb25maWcsIG92ZXJsYXlGYWN0b3J5OiBhbnkpIHtcbiAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEx5T3ZlcmxheUNvbmZpZyxcbiAgICAgICAgdXNlVmFsdWU6ICBjb25maWdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEx5T3ZlcmxheVJlZixcbiAgICAgICAgdXNlVmFsdWU6ICBvdmVybGF5RmFjdG9yeVxuICAgICAgfVxuICAgIF0sXG4gICAgcGFyZW50XG4gIH0pO1xufVxuIl19