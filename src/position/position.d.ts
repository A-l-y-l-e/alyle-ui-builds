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
export declare function getPosition(placement: Placement, xPosition: XPosition, yPosition: YPosition, origin: Element, overlayElement: Element, themeVariables: ThemeVariables, offset?: number): {
    x: number;
    y: number;
    ox: string;
    oy: string;
};
