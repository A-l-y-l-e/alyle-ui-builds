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
    private _offset;
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
    private _origin;
    readonly offsetX: number;
    readonly offsetY: number;
    constructor(placement: Placement, xPosition: XPosition, yPosition: YPosition, origin: Element, overlayElement: Element, _themeVariables: ThemeVariables, _offset?: number | {
        x?: number;
        y?: number;
    }, _flip?: boolean);
    private createPosition;
    private checkLeft;
    private checkRight;
    private checkTop;
    private checkBottom;
    private checkAll;
    private updateOrigin;
}
export declare function invertPlacement(placement: Placement): Placement;
