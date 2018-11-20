import { Constructor } from './constructor';
export interface CanFlat {
    flat: boolean;
}
export declare function mixinFlat<T extends Constructor>(base: T): Constructor<CanFlat> & T;
