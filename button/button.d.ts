import { ElementRef, Renderer2, NgZone, OnDestroy, OnInit, AfterViewInit, OnChanges, InjectionToken } from '@angular/core';
import { LyTheme2, LyRippleService, LyFocusState, StyleTemplate, LyClasses, ThemeRef, StyleCollection, LyHostClass } from '@alyle/ui';
export interface LyButtonTheme {
    /** Styles for Button Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    appearance?: {
        icon?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        fab?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        miniFab?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        [name: string]: ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
    size?: {
        small?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        medium?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        large?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        [name: string]: ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
}
export interface LyButtonDefaultOptions {
    size?: string;
    appearance?: string;
}
export interface LyButtonVariables {
    button?: LyButtonTheme;
}
export declare const LY_BUTTON_DEFAULT_OPTIONS: InjectionToken<LyButtonDefaultOptions>;
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyButtonVariables, ref: ThemeRef) => {
    $priority: number;
    $name: string;
    root: () => (className: string) => string;
    content: (className: string) => string;
    /** When focus by keyboard */
    onFocusByKeyboard: any;
    animations: (className: string) => string;
};
/** @docs-private */
export declare class LyButtonBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyButtonMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyButtonBase;
export declare class LyButton extends LyButtonMixinBase implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    protected _el: ElementRef<HTMLButtonElement | HTMLAnchorElement>;
    protected _renderer: Renderer2;
    _rippleService: LyRippleService;
    private _focusState;
    private _hostClass;
    private _defaultConfig;
    static readonly и = "LyButton";
    /**
     * Style
     * @docs-private
     */
    readonly classes: Pick<{
        $priority: string;
        $name: string;
        root: string;
        content: string;
        onFocusByKeyboard: string;
        animations: string;
    }, "root" | "content" | "onFocusByKeyboard" | "animations">;
    private _rippleSensitive;
    private _size;
    private _sizeClass;
    private _appearance;
    private _appearanceClass;
    private _onFocusByKeyboardState;
    _rippleContainer: ElementRef;
    /** @docs-private */
    rippleSensitive: boolean;
    /** Button size */
    size: string;
    /** Button appearance */
    appearance: string;
    /** @docs-private */
    readonly hostElement: HTMLButtonElement | HTMLAnchorElement;
    constructor(_el: ElementRef<HTMLButtonElement | HTMLAnchorElement>, _renderer: Renderer2, _theme: LyTheme2, _ngZone: NgZone, _rippleService: LyRippleService, _focusState: LyFocusState, _hostClass: LyHostClass, _defaultConfig: LyButtonDefaultOptions);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    focus(): void;
    ngOnDestroy(): void;
}
