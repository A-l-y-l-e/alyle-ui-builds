import { LyTheme2 } from '../theme/theme2.service';
export declare class LyOverlayContainer {
    private theme;
    private _classes;
    protected readonly _containerElement: HTMLElement;
    private _items;
    readonly overlayLen: number;
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
