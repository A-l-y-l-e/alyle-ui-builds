import { ElementRef, NgZone, OnInit, Renderer2, QueryList, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LyFocusState, LyRippleService, LyTheme2, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
export interface LyListTheme {
    /** Styles for List Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
}
export interface LyListVariables {
    list?: LyListTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyListVariables, ref: ThemeRef) => {
    $name: string;
    $priority: number;
    root: () => (className: string) => string;
    listItem: () => (className: string) => string;
    onFocusByKeyboard: any;
    listItemContent: (className: string) => string;
    oneLine: (className: string) => string;
    twoLine: () => (className: string) => string;
    actionListItem: (className: string) => string;
    lines: (className: string) => string;
    listItemWithIcon: () => (className: string) => string;
    twoLineWithIcon: () => (className: string) => string;
};
/** List container */
export declare class LyList {
    private theme;
    static readonly и = "LyList";
    /** @docs-private */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        listItem: string;
        onFocusByKeyboard: string;
        listItemContent: string;
        oneLine: string;
        twoLine: string;
        actionListItem: string;
        lines: string;
        listItemWithIcon: string;
        twoLineWithIcon: string;
    }, "root" | "listItem" | "onFocusByKeyboard" | "listItemContent" | "oneLine" | "twoLine" | "actionListItem" | "lines" | "listItemWithIcon" | "twoLineWithIcon">;
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
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        listItem: string;
        onFocusByKeyboard: string;
        listItemContent: string;
        oneLine: string;
        twoLine: string;
        actionListItem: string;
        lines: string;
        listItemWithIcon: string;
        twoLineWithIcon: string;
    }, "root" | "listItem" | "onFocusByKeyboard" | "listItemContent" | "oneLine" | "twoLine" | "actionListItem" | "lines" | "listItemWithIcon" | "twoLineWithIcon">;
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
