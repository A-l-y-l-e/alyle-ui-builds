import { Constructor } from './constructor';
export interface CanBg {
    bg: string;
}
export declare function mixinBg<T extends Constructor>(base: T): Constructor<CanBg> & T;
