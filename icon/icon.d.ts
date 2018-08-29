import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyIconService } from './icon.service';
import { LyTheme2 } from '@alyle/ui';
export declare class Icon implements OnInit {
    private iconService;
    private elementRef;
    private renderer;
    private theme;
    private _defaultClass;
    private _src;
    private _icon;
    src: string;
    icon: string;
    constructor(iconService: LyIconService, elementRef: ElementRef, renderer: Renderer2, theme: LyTheme2);
    private _isDefault;
    private _prepareSvgIcon;
    private _appendChild;
    private _appendDefaultSvgIcon;
    private _updateClass;
    ngOnInit(): void;
    /**
     * run only browser
     * remove current icon
     */
    private _cleanIcon;
}
