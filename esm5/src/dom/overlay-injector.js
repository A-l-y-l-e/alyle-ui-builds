import { Injector } from '@angular/core';
import { LyOverlayRef } from './overlay-ref';
import { LyOverlayConfig } from './overlay-config';
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
        parent: parent
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5ELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxNQUFnQixFQUFFLE1BQXVCLEVBQUUsY0FBbUI7SUFDbEcsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3JCLFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLEVBQUcsTUFBTTthQUNsQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixRQUFRLEVBQUcsY0FBYzthQUMxQjtTQUNGO1FBQ0QsTUFBTSxRQUFBO0tBQ1AsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbmZpZyB9IGZyb20gJy4vb3ZlcmxheS1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3ZlcmxheUluamVjdG9yKHBhcmVudDogSW5qZWN0b3IsIGNvbmZpZzogTHlPdmVybGF5Q29uZmlnLCBvdmVybGF5RmFjdG9yeTogYW55KSB7XG4gIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiBMeU92ZXJsYXlDb25maWcsXG4gICAgICAgIHVzZVZhbHVlOiAgY29uZmlnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiBMeU92ZXJsYXlSZWYsXG4gICAgICAgIHVzZVZhbHVlOiAgb3ZlcmxheUZhY3RvcnlcbiAgICAgIH1cbiAgICBdLFxuICAgIHBhcmVudFxuICB9KTtcbn1cbiJdfQ==