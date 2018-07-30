import { NgZone } from '@angular/core';
export interface RippleConfig {
    centered?: boolean;
    disabled?: boolean;
    sensitive?: boolean;
    radius?: 'containerSize' | number;
    percentageToIncrease?: number;
}
export declare class RippleRef {
    state: boolean;
    timestamp: number;
    readonly container: HTMLElement;
    end(): void;
}
export declare class Ripple {
    private _ngZone;
    private stylesData;
    private _containerElement;
    private _triggerElement?;
    private _rippleRef;
    private _state;
    private _eventHandlers;
    private rippleConfig;
    private _transitionDuration;
    private _eventOptions;
    constructor(_ngZone: NgZone, stylesData: string[], _containerElement: HTMLElement, _triggerElement?: HTMLElement);
    setConfig(config: RippleConfig): void;
    private readonly _rectContainer;
    private setTriggerElement;
    private createRipple;
    private onPointerDown;
    private onPointerLeave;
    startRipple(event: MouseEvent | PointerEvent, rippleConfig: RippleConfig): void;
    private runTimeoutOutsideZone;
    endRipple(): void;
    removeEvents(): void;
}
