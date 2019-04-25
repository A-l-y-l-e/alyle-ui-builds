import { ElementRef, NgZone } from '@angular/core';
import { Constructor } from './constructor';
import { LyTheme2 } from '../theme/theme2.service';
import { RippleConfig } from '../ripple/ripple';
export interface RequireParams {
    _theme: LyTheme2;
    _ngZone: NgZone;
}
export interface CanDisableRipple {
    _triggerElement: ElementRef;
    _rippleContainer: ElementRef;
    disableRipple: boolean;
    _rippleConfig: RippleConfig;
    _removeRippleEvents: () => void;
}
export declare function mixinDisableRipple<T extends Constructor<RequireParams>>(base: T): Constructor<CanDisableRipple> & T;
