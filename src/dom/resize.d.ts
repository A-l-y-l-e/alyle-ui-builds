import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
export declare class ResizeService {
    private document;
    resize$: Observable<number>;
    constructor(document: any, ngZone: NgZone);
}
