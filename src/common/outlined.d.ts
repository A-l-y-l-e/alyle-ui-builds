import { Constructor } from './constructor';
export interface CanOutlined {
    outlined: boolean;
}
export declare function mixinOutlined<T extends Constructor>(base: T): Constructor<CanOutlined> & T;
