import { ElementRef, Renderer2, NgZone, OnDestroy, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { LyTheme2, LyRippleService, LyFocusState } from '@alyle/ui';
declare type LyButtonSize = 'small' | 'medium' | 'large';
/** @docs-private */
export declare class LyButtonBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyButtonMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyButtonBase;
export declare class LyButton extends LyButtonMixinBase implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    private _el;
    private _renderer;
    _rippleService: LyRippleService;
    private _focusState;
    /**
     * Style
     * @docs-private
     */
    readonly classes: Record<"root" | "content" | "onFocusByKeyboard" | "animations", string>;
    private _rippleSensitive;
    private _size;
    private _sizeClass;
    private _appearance;
    private _appearanceClass;
    private _onFocusByKeyboardState;
    _rippleContainer: ElementRef;
    /** @ignore */
    rippleSensitive: boolean;
    /** Button size */
    size: LyButtonSize;
    /** Button appearance */
    appearance: string;
    constructor(_el: ElementRef, _renderer: Renderer2, _theme: LyTheme2, _ngZone: NgZone, _rippleService: LyRippleService, _focusState: LyFocusState);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    focus(): void;
    ngOnDestroy(): void;
}
export {};
