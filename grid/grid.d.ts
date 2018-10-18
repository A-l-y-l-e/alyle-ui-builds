import { ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
declare type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
declare type Direction = 'row' | 'rowReverse' | 'column' | 'columnReverse';
/**
 * Grid container
 * example:
 * <ly-grid container [spacing]="'16 8@XSmall'">
 *   <ly-grid item [col]="'6 12@XSmall'">
 *     <div>6 12@XSmall</div>
 *   </ly-grid>
 *   <ly-grid item [col]="'6 12@XSmall'">
 *     <div>6 12@XSmall</div>
 *   </ly-grid>
 * </ly-grid>
 */
export declare class LyGrid {
    private theme;
    private el;
    /**
     * Styles
     * @ignore
     */
    classes: Record<"root", string>;
    private _spacing;
    private _spacingClass;
    private _negativeMarginClass;
    private _justify;
    private _justifyClass;
    private _direction;
    private _directionClass;
    /**
     * Defines the space between the component with the `item` attribute.
     */
    spacing: string | number;
    readonly spacingClass: string;
    /** Defines the justify-content style property. */
    justify: Justify;
    /** Defines the justify-content style property. */
    direction: Direction;
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
    /** Defines the number of grids */
    col: string | number;
    /** Defines the order style property. */
    order: string | number;
    constructor(gridContainer: LyGrid, el: ElementRef, theme: LyTheme2);
    ngOnInit(): void;
    private _updateSpacing;
}
export {};
