import { ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/**
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
    private mediaQueries;
    private theme;
    private elementRef;
    /**
     * Styles
     * @ignore
     */
    classes: Record<"root", string>;
    private _spacing;
    private _spacingClass;
    private _negativeMarginClass;
    /**
     * Defines the space between the component with the `item` attribute.
     */
    spacing: string | number;
    readonly spacingClass: string;
    constructor(mediaQueries: any, theme: LyTheme2, elementRef: ElementRef);
}
export declare class LyGridCol implements OnInit {
    private mediaQueries;
    private gridContainer;
    private el;
    private theme;
    private _col;
    private _colClass;
    /** Defines the number of grids */
    col: string | number;
    constructor(mediaQueries: any, gridContainer: LyGrid, el: ElementRef, theme: LyTheme2);
    ngOnInit(): void;
    private _updateSpacing;
}
