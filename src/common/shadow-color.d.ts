import { Constructor } from './constructor';
export interface CanShadowColor {
    shadowColor: string;
}
export declare function mixinShadowColor<T extends Constructor>(base: T): Constructor<CanShadowColor> & T;
