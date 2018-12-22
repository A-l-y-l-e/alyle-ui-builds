import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
export declare class WinScroll {
    private _document;
    scroll$: Observable<number>;
    constructor(_document: any, ngZone: NgZone);
}
