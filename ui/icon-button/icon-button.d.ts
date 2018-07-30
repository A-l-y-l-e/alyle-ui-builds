import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyRipple } from '@alyle/ui/ripple';
import { LyBgColorAndRaised, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
export declare class LyIconButton implements OnInit {
    elementRef: ElementRef;
    private renderer;
    private bgAndColor;
    iconButtonService: LyIconButtonService;
    private theme;
    private _iconStyle;
    ripple: LyRipple;
    readonly classes: {
        config: string;
    };
    constructor(elementRef: ElementRef, renderer: Renderer2, bgAndColor: LyBgColorAndRaised, iconButtonService: LyIconButtonService, theme: LyTheme2);
    ngOnInit(): void;
}
