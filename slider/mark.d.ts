import { Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { LySlider } from './slider';
import { LyTick } from './tick';
export declare class LyMark implements OnInit, OnDestroy {
    private _slider;
    private _renderer;
    private _el;
    /** @docs-private */
    readonly classes: Record<"disabled" | "thumbVisible" | "vertical" | "root" | "track" | "bg" | "thumbContainer" | "thumbContent" | "thumb" | "thumbLabel" | "thumbLabelValue" | "horizontal" | "marked" | "mark" | "markActive" | "tick" | "tickActive" | "thumbNotVisible" | "thumbContentFocused" | "sliding", string>;
    private _markActiveClass?;
    _tick: LyTick;
    value: number;
    constructor(_slider: LySlider, _renderer: Renderer2, _el: ElementRef);
    ngOnInit(): void;
    private _updateMark;
    ngOnDestroy(): void;
    private _getHostElement;
}
