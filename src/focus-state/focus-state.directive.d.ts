import { ElementRef, ChangeDetectorRef, NgZone, Renderer2, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
export declare enum FocusStatus {
    /**mouse and/or touch*/
    DEFAULT = "default",
    /** keyboard and/or program*/
    KEYBOARD = "keyboard"
}
export declare class LyFocusState implements OnDestroy {
    private _ngZone;
    private _renderer;
    state: FocusStatus;
    stateMap: Map<string, boolean>;
    private _containerElement;
    private _eventHandlers;
    private _stateSubject;
    _stateSubscription: Subscription;
    lyFocusChange: EventEmitter<FocusStatus>;
    private _eventOptions;
    constructor(elementRef: ElementRef, _ngZone: NgZone, _renderer: Renderer2, _cd: ChangeDetectorRef);
    private _updateState;
    on(event: FocusEvent | TouchEvent | MouseEvent): void;
    private _updateClass;
    setTriggerElement(element: HTMLElement | null): void;
    ngOnDestroy(): void;
}
