import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
export declare class WinResize {
    private document;
    resize$: Observable<number>;
    constructor(document: any, ngZone: NgZone);
}
