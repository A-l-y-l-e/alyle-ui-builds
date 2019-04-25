/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
export declare class Platform {
    static readonly isBrowser: boolean;
    /** Layout Engines */
    static readonly EDGE: boolean;
    static readonly TRIDENT: boolean;
    static readonly BLINK: boolean;
    static readonly WEBKIT: boolean;
    /** Browsers and Platform Types */
    static readonly IOS: boolean;
    static readonly FIREFOX: boolean;
    static readonly ANDROID: boolean;
    static readonly SAFARI: boolean;
}
