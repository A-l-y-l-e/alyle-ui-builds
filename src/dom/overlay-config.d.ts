export declare class LyOverlayConfig {
    /** Styles for overlay container */
    styles?: Object;
    classes?: string[];
    hasBackdrop?: boolean;
    backdropClass?: string;
    fnDestroy?: (...arg: any) => void;
    /** Function that will be called on scroll or resize event */
    onResizeScroll?: (() => void);
}
