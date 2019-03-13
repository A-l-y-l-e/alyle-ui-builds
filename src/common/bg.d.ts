import { Constructor } from './constructor';
export interface CanBg {
    bg: string;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     */
    readonly _superHyperInternalPropertyBg: string;
}
export declare function mixinBg<T extends Constructor>(base: T): Constructor<CanBg> & T;
