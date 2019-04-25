import { NgZone } from '@angular/core';
import { ThemeVariables } from '../theme/theme-config';
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
    private _themeVariables;
    private _ngZone;
    private classes;
    private _containerElement;
    private _triggerElement?;
    private _rippleRef?;
    private _eventHandlers;
    config: RippleConfig;
    private _transitionDuration;
    private _eventOptions;
    constructor(_themeVariables: ThemeVariables, _ngZone: NgZone, classes: any, _containerElement: HTMLElement, _triggerElement?: HTMLElement);
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
