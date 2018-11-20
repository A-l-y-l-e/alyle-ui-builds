import { Constructor } from './constructor';
export interface CanRaised {
    raised: boolean;
}
export declare function mixinRaised<T extends Constructor>(base: T): Constructor<CanRaised> & T;
