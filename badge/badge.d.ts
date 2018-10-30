import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
export declare class LyBadge implements OnInit {
    private _el;
    private _theme;
    private _renderer;
    /**
     * Styles
     * @ignore
     */
    classes: Record<"relative" | "root", string>;
    private _content;
    private _position;
    private _positionClass;
    private _elContainer;
    private _badgeElementRef;
    private _bgClass;
    /** The content for the badge */
    content: string | number;
    /** The position for the badge */
    position: string;
    /** The color of the badge  */
    bg: string;
    private _bg;
    constructor(_el: ElementRef, _theme: LyTheme2, _renderer: Renderer2, _common: LyCommon);
    ngOnInit(): void;
    private _createBadge;
}
