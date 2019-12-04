export declare class Color {
    private readonly _color;
    constructor(hex: number, alpha?: number);
    constructor(r: number, g: number, b: number, alpha?: number);
    constructor(...args: number[]);
    rgb(): number[];
    alpha(): number;
    alpha(value: number): Color;
    luminance(): number;
    luminance(lum: number): Color;
    saturate(amount?: number): Color;
    desaturate(amount?: number): Color;
    /**
     * @param amount default 1
     */
    darken(amount?: number): Color;
    /**
     * The opposite of darken
     * @param amount default 1
     */
    brighten(amount?: number): Color;
    css(): string;
    toString(): string;
}
export declare function hexColorToInt(color: string): number;
