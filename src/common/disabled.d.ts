import { Constructor } from './constructor';
export interface CanDisable {
    disabled: string;
}
export declare function mixinDisabled<T extends Constructor>(base: T): Constructor<CanDisable> & T;
