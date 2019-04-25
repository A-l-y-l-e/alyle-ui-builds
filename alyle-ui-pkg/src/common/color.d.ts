import { Constructor } from './constructor';
export interface CanColor {
    color: string;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     */
    readonly _superHyperInternalPropertyColor: string;
}
export declare function mixinColor<T extends Constructor>(base: T): Constructor<CanColor> & T;
