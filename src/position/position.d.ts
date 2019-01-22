import { ThemeVariables } from '../theme/theme-config';
export declare enum YPosition {
    above = "above",
    below = "below"
}
export declare enum XPosition {
    before = "before",
    after = "after",
    left = "left",
    right = "right"
}
export declare type Placement = XPosition | YPosition;
export declare class Positioning {
    private placement;
    private xPosition;
    private yPosition;
    private origin;
    private overlayElement;
    private _themeVariables;
    private offset;
    private _offsetCheck;
    private readonly _originRect;
    private readonly _overlayElementRect;
    x: number;
    y: number;
    ax: number;
    ay: number;
    ox: string;
    oy: string;
    width: string;
    height: string;
    constructor(placement: Placement, xPosition: XPosition, yPosition: YPosition, origin: Element, overlayElement: Element, _themeVariables: ThemeVariables, offset?: number);
    private createPosition;
    private checkLeft;
    private checkRight;
    private checkTop;
    private checkBottom;
    private checkAll;
    private updateOrigin;
}
export declare function invertPlacement(placement: Placement): Placement;
