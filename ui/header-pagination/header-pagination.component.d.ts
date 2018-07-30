import { ElementRef } from '@angular/core';
export declare class LyHeaderPagination {
    private elementRef;
    _with: number;
    _withHost: number;
    _positionX: number;
    traslateWidth: number;
    elementContainer: any;
    constructor(elementRef: ElementRef);
    updateAll(): void;
    _elementContainer: ElementRef;
    ngAfterContentInit(): void;
    _to_left(): void;
    _to_right(): void;
}
