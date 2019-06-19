import { ElementRef, NgZone, OnInit, Renderer2, QueryList, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LyFocusState, LyRippleService, LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
export declare const STYLES: (theme: ThemeVariables) => {
    $priority: number;
    root: {
        display: string;
        position: string;
        paddingTop: string;
        paddingBottom: string;
        '&': import("@alyle/ui/alyle-ui").StyleContainer;
    };
    listItem: {
        fontFamily: string;
        fontSize: string;
        color: string;
        display: string;
        width: string;
        position: string;
        padding: string;
        minHeight: string;
        overflow: string;
        textAlign: string;
        alignItems: string;
        justifyContent: string;
        borderRadius: number;
        '&::after': {
            width: string;
            height: string;
            background: string;
            opacity: number;
            pointerEvents: string;
            position: string;
            top: number;
            bottom: number;
            left: number;
            right: number;
            content: string;
        };
        '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
            background: string;
            opacity: number;
            borderRadius: string;
        };
        '-webkit-tap-highlight-color': string;
        backgroundColor: string;
        border: number;
        '-moz-appearance': string;
        '-webkit-appearance': string;
        margin: number;
        outline: string;
        boxSizing: string;
        textDecorationLine: string;
        '-webkit-text-decoration-line': string;
        '&::-moz-focus-inner': {
            border: number;
        };
    };
    onFocusByKeyboard: any;
    listItemContent: {
        display: string;
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        fontSize: string;
        width: string;
        height: string;
        boxSizing: string;
    };
    oneLine: {
        paddingTop: string;
        paddingBottom: string;
        minHeight: string;
    };
    twoLine: {
        paddingTop: string;
        paddingBottom: string;
        minHeight: string;
        '{lines}': {
            marginBottom: string;
        };
    };
    actionListItem: {
        cursor: string;
        userSelect: string;
    };
    lines: {
        alignSelf: string;
        minWidth: number;
        width: string;
        justifyContent: string;
        flexDirection: string;
        display: string;
    };
    listItemWithIcon: {
        '{lines}': {
            paddingBefore: string;
        };
    };
    twoLineWithIcon: {
        paddingTop: string;
        paddingBottom: string;
        '{lines}': {
            marginBottom: string;
        };
    };
};
/** List container */
export declare class LyList {
    private theme;
    /** @docs-private */
    readonly classes: Record<"root" | "listItem" | "onFocusByKeyboard" | "listItemContent" | "oneLine" | "twoLine" | "actionListItem" | "lines" | "listItemWithIcon" | "twoLineWithIcon", string>;
    constructor(theme: LyTheme2);
}
/** @docs-private */
export declare class LyListItemBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyListItemMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyListItemBase;
/** List Item */
export declare class LyListItem extends LyListItemMixinBase implements OnInit, AfterContentInit, OnDestroy {
    private _el;
    private _renderer;
    _rippleService: LyRippleService;
    private _focusState;
    private _list;
    private _cd;
    /** @docs-private */
    readonly classes: Record<"root" | "listItem" | "onFocusByKeyboard" | "listItemContent" | "oneLine" | "twoLine" | "actionListItem" | "lines" | "listItemWithIcon" | "twoLineWithIcon", string>;
    readonly _isBrowser: boolean;
    private _isActionListItem;
    private _onFocusByKeyboardState;
    _rippleContainer: ElementRef;
    _lines: QueryList<LyLine>;
    _icon: LyListIcon & {};
    _avatar: LyAvatar;
    readonly _listItemClasses: string[];
    /** @docs-private */
    isActionListItem: any;
    constructor(_el: ElementRef, _renderer: Renderer2, theme: LyTheme2, ngZone: NgZone, _rippleService: LyRippleService, _focusState: LyFocusState, _list: LyList, _cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
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
