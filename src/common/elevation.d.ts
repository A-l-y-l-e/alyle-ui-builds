import { Constructor } from './constructor';
export interface CanElevation {
    elevation: number;
}
export declare function mixinElevation<T extends Constructor>(base: T): Constructor<CanElevation> & T;
