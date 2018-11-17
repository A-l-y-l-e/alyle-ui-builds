import { ElementRef } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { LyCoreStyles } from '../styles/core-styles';
import { Observable } from 'rxjs';
export declare class WindowScrollService {
    private document;
    scroll$: Observable<number>;
    constructor(document: any);
}
export declare class LyOverlayContainer {
    private theme;
    private _classes;
    protected readonly _containerElement: HTMLElement;
    private _items;
    private _isActiveOverlayContainer;
    constructor(theme: LyTheme2);
    readonly containerElement: HTMLElement;
    /**
     * Add instance
     * @ignore
     */
    _add(item: any): void;
    /**
   * Remove instance
   * @ignore
   */
    _remove(item: any): void;
    /**
     * Update styles for overlay container
     * @ignore
     */
    private _update;
}
export declare class LyOverlayBackdrop {
    private _theme;
    private _overlayConfig;
    /** @ignore */
    classes: Record<"backdrop", string>;
    onclick(): void;
    constructor(el: ElementRef, _theme: LyTheme2, _overlayConfig: any, commonStyles: LyCoreStyles);
}
