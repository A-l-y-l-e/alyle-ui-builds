import { Renderer2, ElementRef, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { LySlider } from './slider';
export declare class LyTick implements OnChanges, OnInit, OnDestroy {
    private _slider;
    private _renderer;
    private _el;
    /** @docs-private */
    readonly classes: Record<"disabled" | "thumbVisible" | "vertical" | "root" | "track" | "bg" | "thumbContainer" | "thumbContent" | "thumb" | "thumbLabel" | "thumbLabelValue" | "horizontal" | "marked" | "mark" | "markActive" | "tick" | "tickActive" | "thumbNotVisible" | "thumbContentFocused" | "sliding", string>;
    private _tickActiveClass?;
    value: number;
    constructor(_slider: LySlider, _renderer: Renderer2, _el: ElementRef);
    ngOnChanges(): void;
    ngOnInit(): void;
    private _updateTick;
    ngOnDestroy(): void;
    _getHostElement(): any;
}
