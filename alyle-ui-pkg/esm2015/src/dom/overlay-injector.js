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
        parent
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5ELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxNQUFnQixFQUFFLE1BQXVCLEVBQUUsY0FBbUI7SUFDbEcsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3JCLFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLEVBQUcsTUFBTTthQUNsQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixRQUFRLEVBQUcsY0FBYzthQUMxQjtTQUNGO1FBQ0QsTUFBTTtLQUNQLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5UmVmIH0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXlJbmplY3RvcihwYXJlbnQ6IEluamVjdG9yLCBjb25maWc6IEx5T3ZlcmxheUNvbmZpZywgb3ZlcmxheUZhY3Rvcnk6IGFueSkge1xuICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTHlPdmVybGF5Q29uZmlnLFxuICAgICAgICB1c2VWYWx1ZTogIGNvbmZpZ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTHlPdmVybGF5UmVmLFxuICAgICAgICB1c2VWYWx1ZTogIG92ZXJsYXlGYWN0b3J5XG4gICAgICB9XG4gICAgXSxcbiAgICBwYXJlbnRcbiAgfSk7XG59XG4iXX0=