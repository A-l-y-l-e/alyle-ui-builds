import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export declare type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export declare type Direction = 'row' | 'rowReverse' | 'column' | 'columnReverse';
/**
 * Grid container
 */
export declare class LyGrid {
    private theme;
    private el;
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Record<"root" | "item", string>;
    private _spacing;
    _spacingClass?: string;
    private _spacingX;
    _spacingXClass?: string;
    private _spacingY;
    _spacingYClass?: string;
    private _negativeMarginClass?;
    private _justify;
    private _justifyClass?;
    private _direction;
    private _directionClass?;
    private _alignItems;
    private _alignItemsClass?;
    spacingX: string | number;
    spacingY: string | number;
    /**
     * Defines the space between the component with the `item` attribute.
     * Support breakpoints
     */
    spacing: string | number;
    /**
     * Only one param must be defined
     */
    private _createSpacingClass;
    /**
     * Defines the justify-content style property.
     * Support breakpoints
     */
    justify: Justify;
    /**
     * Defines the justify-content style property.
     * Support breakpoints
     */
    direction: Direction;
    /**
     * Defines the `align-items` style property.
     * Support breakpoints
     */
    alignItems: AlignItems;
    constructor(theme: LyTheme2, el: ElementRef);
}
export declare class LyGridItem implements OnInit {
    private gridContainer;
    private el;
    private theme;
    private _col;
    private _colClass;
    private _order;
    private _orderClass;
    /**
     * Defines the number of grids
     * Support breakpoints
     */
    col: string | number;
    gridItemCol: string | number;
    /**
     * Defines the order style property.
     * Support breakpoints
     */
    order: string | number;
    constructor(gridContainer: LyGrid, el: ElementRef, renderer: Renderer2, theme: LyTheme2);
    ngOnInit(): void;
    private _updateSpacing;
}
