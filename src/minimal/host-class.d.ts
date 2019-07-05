import { ElementRef, Renderer2 } from '@angular/core';
export declare class LyHostClass {
    private _el;
    private _renderer;
    private readonly _set;
    constructor(_el: ElementRef, _renderer: Renderer2);
    add(className: string): void;
    remove(className: string): void;
    toggle(className: string, enabled: boolean): void;
}
