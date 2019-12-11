export declare class ColorClass {
    private readonly _color;
    constructor(hex: number, alpha?: number);
    constructor(r: number, g: number, b: number, alpha?: number);
    constructor(...args: number[]);
    rgba(): number[];
    alpha(): number;
    alpha(value: number): Color;
    luminance(): number;
    luminance(lum: number): Color;
    saturate(amount?: number): ColorClass;
    desaturate(amount?: number): ColorClass;
    /**
     * @param amount default 1
     */
    darken(amount?: number): ColorClass;
    /**
     * The opposite of darken
     * @param amount default 1
     */
    brighten(amount?: number): ColorClass;
    css(): string;
    toString(): string;
}
export declare function hexColorToInt(_color: string): number;
interface ColorConstructor {
    (hex: number, alpha?: number): Color;
    (r: number, g: number, b: number, alpha?: number): Color;
    (...args: number[]): Color;
    new (hex: number, alpha?: number): Color;
    new (r: number, g: number, b: number, alpha?: number): Color;
    new (...args: number[]): Color;
}
export declare type Color = ColorClass;
export declare const Color: ColorConstructor;
export {};
