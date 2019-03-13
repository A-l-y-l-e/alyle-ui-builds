import { Constructor } from './constructor';
export interface CanShadowColor {
    shadowColor: string;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     */
    readonly _superHyperInternalPropertyShadowColor: string;
}
export declare function mixinShadowColor<T extends Constructor>(base: T): Constructor<CanShadowColor> & T;
