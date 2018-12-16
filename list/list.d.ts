import { ElementRef, NgZone, OnInit, Renderer2, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { LyFocusState, LyRippleService, LyTheme2 } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
/** List container */
export declare class LyList {
    private theme;
    readonly classes: Record<"list" | "listItem" | "onFocusByKeyboard" | "listItemContent" | "oneLine" | "twoLine" | "actionListItem" | "lines" | "listItemWithIcon" | "twoLineWithIcon", string>;
    constructor(theme: LyTheme2);
}
/** @docs-private */
export declare class LyListItemBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyListItemMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyListItemBase;
/** List Item */
export declare class LyListItem extends LyListItemMixinBase implements OnInit, AfterContentInit {
    private _el;
    private _renderer;
    _rippleService: LyRippleService;
    private _focusState;
    private _list;
    private _cd;
    /** @docs-private */
    readonly classes: Record<"list" | "listItem" | "onFocusByKeyboard" | "listItemContent" | "oneLine" | "twoLine" | "actionListItem" | "lines" | "listItemWithIcon" | "twoLineWithIcon", string>;
    readonly _isBrowser: boolean;
    private _isActionListItem;
    private _onFocusByKeyboardState;
    _rippleContainer: ElementRef;
    _lines: QueryList<LyLine>;
    _icon: LyListIcon;
    _avatar: LyAvatar;
    readonly listItemClasses: string[];
    /** @docs-private */
    isActionListItem: any;
    constructor(_el: ElementRef, _renderer: Renderer2, theme: LyTheme2, ngZone: NgZone, _rippleService: LyRippleService, _focusState: LyFocusState, _list: LyList, _cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
export declare class LyListIcon implements OnInit {
    private _theme;
    private _el;
    private _renderer;
    private _disablePadding;
    private _disablePaddingClass;
    /** Disable extra padding */
    disablePadding: any;
    constructor(_theme: LyTheme2, _el: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
}
export declare class LyLine {
    private _theme;
    private _el;
    private _renderer;
    constructor(_theme: LyTheme2, _el: ElementRef, _renderer: Renderer2);
}
