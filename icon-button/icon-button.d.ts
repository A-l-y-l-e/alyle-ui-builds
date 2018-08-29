import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyRipple } from '@alyle/ui/ripple';
import { LyCommon, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
export declare class LyIconButton implements OnInit {
    elementRef: ElementRef;
    private renderer;
    iconButtonService: LyIconButtonService;
    private theme;
    ripple: LyRipple;
    classes: Record<"size", string>;
    constructor(elementRef: ElementRef, renderer: Renderer2, bgAndColor: LyCommon, iconButtonService: LyIconButtonService, theme: LyTheme2);
    ngOnInit(): void;
}
