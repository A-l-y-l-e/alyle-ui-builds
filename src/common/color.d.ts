import { Constructor } from './constructor';
export interface CanColor {
    color: string;
}
export declare function mixinColor<T extends Constructor>(base: T): Constructor<CanColor> & T;
