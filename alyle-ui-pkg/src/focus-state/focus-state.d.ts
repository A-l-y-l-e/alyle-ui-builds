import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export declare enum FocusStatus {
    /**mouse and/or touch*/
    DEFAULT = "default",
    /** keyboard and/or program*/
    KEYBOARD = "keyboard"
}
export interface FocusStateInfo {
    unlisten: () => void;
    subject: Subject<FocusState>;
}
export declare type FocusState = 'keyboard' | 'mouse' | null;
export declare class LyFocusState implements OnDestroy {
    private _ngZone;
    private _elementMap;
    private _currentEvent;
    private _removeGlobalListeners;
    private _count;
    constructor(_ngZone: NgZone);
    listen(element: HTMLElement | ElementRef<HTMLElement>, keyElement?: HTMLElement | ElementRef<HTMLElement>): Observable<FocusState> | null;
    focusElement(element: HTMLElement | ElementRef<HTMLElement>, origin: FocusState, options: FocusOptions): void;
    unlisten(element: HTMLElement | ElementRef<HTMLElement>): void;
    private _on;
    private _addGlobalListeners;
    private _incrementCount;
    private _decrementCount;
    ngOnDestroy(): void;
}
