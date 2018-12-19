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
/** @deprecated in favor of `Positioning` */
export declare function getPosition(placement: Placement, xPosition: XPosition, yPosition: YPosition, origin: Element, overlayElement: Element, themeVariables: ThemeVariables, offset?: number): {
    x: number;
    y: number;
    ox: string;
    oy: string;
};
export declare class Positioning {
    private placement;
    private xPosition;
    private yPosition;
    private origin;
    private overlayElement;
    private themeVariables;
    private offset;
    private offsetCheck;
    private originRect;
    private overlayElementRect;
    x: number;
    y: number;
    ax: number;
    ay: number;
    ox: string;
    oy: string;
    width: number;
    height: number;
    constructor(placement: Placement, xPosition: XPosition, yPosition: YPosition, origin: Element, overlayElement: Element, themeVariables: ThemeVariables, offset?: number);
    private createPosition;
    private checkLeft;
    private checkRight;
    private checkTop;
    private checkBottom;
    private checkAll;
    private invertPosition;
}
