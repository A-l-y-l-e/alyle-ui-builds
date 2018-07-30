import { LyOverlayContainer } from './overlay-container.component';
import { Optional } from '@angular/core';
export declare function LY_OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer: LyOverlayContainer): LyOverlayContainer;
export declare const LY_OVERLAY_CONTAINER_PROVIDER: {
    provide: typeof LyOverlayContainer;
    deps: Optional[][];
    useFactory: typeof LY_OVERLAY_CONTAINER_PROVIDER_FACTORY;
};
export declare class LxDomModule {
}
