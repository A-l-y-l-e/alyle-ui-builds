var LyGridItem_1;
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, eachMedia, ThemeVariables, StyleCollection, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
const STYLE_PRIORITY = -1;
const ALIGN_ALIAS = {
    rowReverse: 'row-reverse',
    columnReverse: 'column-reverse',
    wrapReverse: 'wrap-reverse',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
};
const styles = () => ({
    $priority: STYLE_PRIORITY,
    $name: LyGrid.и,
    root: (className) => `${className}{width:100%;display:flex;flex-wrap:wrap;box-sizing:border-box;}`,
    item: (className) => `${className},${className} :first-child{box-sizing:border-box;}`
});
const ɵ0 = styles;
/**
 * Grid container
 */
let LyGrid = class LyGrid {
    constructor(theme, el) {
        this.theme = theme;
        this.el = el;
        /**
         * Styles
         * @docs-private
         */
        this.classes = this.theme.renderStyleSheet(styles);
        this.el.nativeElement.classList.add(this.classes.root);
    }
    get spacingX() {
        return this._spacingX;
    }
    set spacingX(val) {
        if (val !== this.spacingX) {
            this._spacingX = val;
            this._createSpacingClass(undefined, val);
        }
    }
    get spacingY() {
        return this._spacingY;
    }
    set spacingY(val) {
        if (val !== this.spacingY) {
            this._spacingY = val;
            this._createSpacingClass(undefined, undefined, val);
        }
    }
    /**
     * Defines the space between the component with the `item` attribute.
     * Support breakpoints
     */
    get spacing() {
        return this._spacing;
    }
    set spacing(val) {
        if (val !== this.spacing) {
            this._spacing = val;
            this._createSpacingClass(val);
        }
    }
    /**
     * Only one param must be defined
     */
    _createSpacingClass(xy, x, y) {
        const newSpacingClass = this.theme.addStyle(`lyGrid-spacing:${xy}·${x}·${y}`, (theme) => {
            const val = (xy || x || y);
            const spacingStyles = {};
            eachMedia(val, (value, media) => {
                const valuePadding = `${(+value) / 2}px`;
                const padding = xy != null
                    ? valuePadding
                    : x != null
                        ? `0 ${valuePadding}`
                        : `${valuePadding} 0`;
                if (media) {
                    spacingStyles[theme.getBreakpoint(media)] = {
                        padding
                    };
                }
                else {
                    spacingStyles.padding = padding;
                }
            });
            return spacingStyles;
        }, undefined, undefined, STYLE_PRIORITY);
        if (xy) {
            this._spacingClass = newSpacingClass;
        }
        else {
            if (x) {
                this._spacingXClass = newSpacingClass;
            }
            if (y) {
                this._spacingYClass = newSpacingClass;
            }
        }
        this._negativeMarginClass = this.theme.addStyle(`lyGrid-negative-margin:${xy}·${x}·${y}`, (theme) => {
            const val = (xy || x || y);
            let negativeMarginStyles;
            eachMedia(val, (value, media) => {
                const valueMargin = `${(-value) / 2}px`;
                const margin = xy != null
                    ? valueMargin
                    : x != null
                        ? `0 ${valueMargin}`
                        : `${valueMargin} 0`;
                const negativeMarginstyles = { margin };
                if (xy != null || x != null) {
                    negativeMarginstyles.width = `calc(100% + ${value}px)`;
                }
                if (media) {
                    if (!negativeMarginStyles) {
                        negativeMarginStyles = {};
                    }
                    negativeMarginStyles[theme.getBreakpoint(media)] = negativeMarginstyles;
                }
                else {
                    negativeMarginStyles = negativeMarginstyles;
                }
            });
            return negativeMarginStyles;
        }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
    }
    /**
     * Defines the justify-content style property.
     * Support breakpoints
     */
    get justify() {
        return this._justify;
    }
    set justify(val) {
        if (val !== this.justify) {
            this._justify = val;
            this._justifyClass = this.theme.addStyle(`lyGrid-justify:${val}`, (theme) => {
                let justifyStyles;
                eachMedia(val, (value, media) => {
                    const newJustifyStyles = {
                        justifyContent: value in ALIGN_ALIAS
                            ? ALIGN_ALIAS[value]
                            : value
                    };
                    if (media) {
                        if (!justifyStyles) {
                            justifyStyles = {};
                        }
                        justifyStyles[theme.getBreakpoint(media)] = newJustifyStyles;
                    }
                    else {
                        justifyStyles = newJustifyStyles;
                    }
                });
                return justifyStyles;
            }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the justify-content style property.
     * Support breakpoints
     */
    get direction() {
        return this._direction;
    }
    set direction(val) {
        if (val !== this.direction) {
            this._direction = val;
            this._directionClass = this.theme.addStyle(`lyGrid-direction:${val}`, (theme) => {
                let directionStyles;
                eachMedia(val, (value, media) => {
                    const newDirectionStyles = {
                        flexDirection: value in ALIGN_ALIAS
                            ? ALIGN_ALIAS[value]
                            : value
                    };
                    if (media) {
                        if (!directionStyles) {
                            directionStyles = {};
                        }
                        directionStyles[theme.getBreakpoint(media)] = newDirectionStyles;
                    }
                    else {
                        directionStyles = newDirectionStyles;
                    }
                });
                return directionStyles;
            }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the `align-items` style property.
     * Support breakpoints
     */
    set alignItems(val) {
        this._alignItems = val;
        this._alignItemsClass = this.theme.addStyle(`lyGrid.align:${val}`, (theme) => {
            let alignItemsStyles;
            eachMedia(val, (value, media) => {
                const newAlignItemsStyles = {
                    alignItems: value in ALIGN_ALIAS
                        ? ALIGN_ALIAS[value]
                        : value
                };
                if (media) {
                    if (!alignItemsStyles) {
                        alignItemsStyles = {};
                    }
                    alignItemsStyles[theme.getBreakpoint(media)] = newAlignItemsStyles;
                }
                else {
                    alignItemsStyles = newAlignItemsStyles;
                }
            });
            return alignItemsStyles;
        }, this.el.nativeElement, this._alignItemsClass, STYLE_PRIORITY);
    }
    get alignItems() {
        return this._alignItems;
    }
};
LyGrid.и = 'LyGrid';
LyGrid.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], LyGrid.prototype, "spacingX", null);
tslib_1.__decorate([
    Input()
], LyGrid.prototype, "spacingY", null);
tslib_1.__decorate([
    Input()
], LyGrid.prototype, "spacing", null);
tslib_1.__decorate([
    Input()
], LyGrid.prototype, "justify", null);
tslib_1.__decorate([
    Input()
], LyGrid.prototype, "direction", null);
tslib_1.__decorate([
    Input()
], LyGrid.prototype, "alignItems", null);
LyGrid = tslib_1.__decorate([
    Directive({
        selector: 'ly-grid[container]'
    })
], LyGrid);
export { LyGrid };
let LyGridItem = LyGridItem_1 = class LyGridItem {
    constructor(gridContainer, el, renderer, theme, _sr) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
        this._sr = _sr;
        if (!gridContainer) {
            throw new Error(`Require parent <ly-grid container>`);
        }
        renderer.addClass(el.nativeElement, this.gridContainer.classes.item);
    }
    /**
     * Defines the number of grids
     * Support breakpoints
     */
    get col() {
        return this._col;
    }
    set col(val) {
        const newVal = this._col = val || 0;
        this._colClass = this._sr.add(`${LyGridItem_1.и}--col-${newVal}`, (theme) => {
            const medias = new StyleCollection();
            eachMedia(newVal, (value, media) => {
                if (typeof value === 'string') {
                    throw new Error(`${LyGridItem_1.и}: '${val}' is not valid.`);
                }
                const maxWidth = value ? value * 100 / 12 : 100;
                const flexBasis = value ? value * 100 / 12 : 0;
                const flexGrow = value ? 0 : 1;
                if (media) {
                    medias.add((className) => `@media ${theme.breakpoints[media]}{${className}{max-width:${maxWidth}%;;flex-basis:${flexBasis}%;;flex-grow:${flexGrow};}}`);
                }
                else {
                    medias.add((className) => `${className}{max-width:${maxWidth}%;flex-basis:${flexBasis}%;flex-grow:${flexGrow};}`);
                }
            });
            return medias.css;
        }, STYLE_PRIORITY, this._colClass);
    }
    set gridItemCol(val) {
        this.col = val;
    }
    get gridItemCol() {
        return this.col;
    }
    /**
     * Defines the order style property.
     * Support breakpoints
     */
    get order() {
        return this._order;
    }
    set order(val) {
        if (val !== this.order) {
            this._order = val;
            this._orderClass = this.theme.addStyle(`lyGrid-order:${val}`, (theme) => {
                let orderStyles;
                eachMedia(`${val}`, (value, media) => {
                    const newOrderStyles = {
                        order: value
                    };
                    if (media) {
                        if (!orderStyles) {
                            orderStyles = {};
                        }
                        orderStyles[theme.getBreakpoint(media)] = newOrderStyles;
                    }
                    else {
                        orderStyles = newOrderStyles;
                    }
                });
                return orderStyles;
            }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
        }
    }
    ngOnInit() {
        this._updateSpacing();
    }
    _updateSpacing() {
        if (this.gridContainer._spacingClass) {
            this.el.nativeElement.classList.add(this.gridContainer._spacingClass);
        }
        else {
            if (this.gridContainer._spacingXClass) {
                this.el.nativeElement.classList.add(this.gridContainer._spacingXClass);
            }
            if (this.gridContainer._spacingYClass) {
                this.el.nativeElement.classList.add(this.gridContainer._spacingYClass);
            }
        }
    }
};
LyGridItem.и = 'LyGridItem';
LyGridItem.ctorParameters = () => [
    { type: LyGrid },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: StyleRenderer }
];
tslib_1.__decorate([
    Input()
], LyGridItem.prototype, "col", null);
tslib_1.__decorate([
    Input('lyGridItem')
], LyGridItem.prototype, "gridItemCol", null);
tslib_1.__decorate([
    Input()
], LyGridItem.prototype, "order", null);
LyGridItem = LyGridItem_1 = tslib_1.__decorate([
    Directive({
        selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]',
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    })
], LyGridItem);
export { LyGridItem };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUIsTUFBTSxXQUFXLEdBQUc7SUFDbEIsVUFBVSxFQUFFLGFBQWE7SUFDekIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixXQUFXLEVBQUUsY0FBYztJQUMzQixLQUFLLEVBQUUsWUFBWTtJQUNuQixHQUFHLEVBQUUsVUFBVTtJQUNmLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE1BQU0sRUFBRSxjQUFjO0NBQ3ZCLENBQUM7QUFJRixNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNmLElBQUksRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxpRUFBaUU7SUFDMUcsSUFBSSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLElBQUksU0FBUyx1Q0FBdUM7Q0FDOUYsQ0FBQyxDQUFDOztBQUtIOztHQUVHO0FBSUgsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQW9QakIsWUFDVSxLQUFlLEVBQ2YsRUFBYztRQURkLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBcFB4Qjs7O1dBR0c7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QWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2RTthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0Y7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQWhIaUIsWUFBQyxHQUFHLFlBQVksQ0FBQzs7WUFtRlIsTUFBTTtZQUNqQixVQUFVO1lBQ1osU0FBUztZQUNKLFFBQVE7WUFDVixhQUFhOztBQTNFNUI7SUFEQyxLQUFLLEVBQUU7cUNBR1A7QUE0QkQ7SUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDOzZDQUduQjtBQVVEO0lBREMsS0FBSyxFQUFFO3VDQUdQO0FBekRVLFVBQVU7SUFQdEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDZDQUE2QztRQUN2RCxTQUFTLEVBQUU7WUFDVCxXQUFXO1lBQ1gsYUFBYTtTQUNkO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FpSHRCO1NBakhZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIGVhY2hNZWRpYSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmV4cG9ydCB0eXBlIEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICgpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICRuYW1lOiBMeUdyaWQu0LgsXG4gIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtib3gtc2l6aW5nOmJvcmRlci1ib3g7fWAsXG4gIGl0ZW06IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSwke2NsYXNzTmFtZX0gOmZpcnN0LWNoaWxke2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YFxufSk7XG5cbmV4cG9ydCB0eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5R3JpZCc7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUucmVuZGVyU3R5bGVTaGVldChzdHlsZXMpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgX3NwYWNpbmdDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9zcGFjaW5nWDogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ1hDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9zcGFjaW5nWTogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ1lDbGFzcz86IHN0cmluZztcblxuXG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9hbGlnbkl0ZW1zOiBBbGlnbkl0ZW1zO1xuICBwcml2YXRlIF9hbGlnbkl0ZW1zQ2xhc3M/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmdYKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdYO1xuICB9XG4gIHNldCBzcGFjaW5nWCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZ1gpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdYID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHVuZGVmaW5lZCwgdmFsKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZ1koKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ1k7XG4gIH1cbiAgc2V0IHNwYWNpbmdZKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nWSkge1xuICAgICAgdGhpcy5fc3BhY2luZ1kgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVTcGFjaW5nQ2xhc3ModW5kZWZpbmVkLCB1bmRlZmluZWQsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgb25lIHBhcmFtIG11c3QgYmUgZGVmaW5lZFxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlU3BhY2luZ0NsYXNzKHh5Pzogc3RyaW5nIHwgbnVtYmVyLCB4Pzogc3RyaW5nIHwgbnVtYmVyLCB5Pzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3U3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt4eX3CtyR7eH3CtyR7eX1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAoeHkgfHwgeCB8fCB5KSBhcyBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgIH0gPSB7fTtcbiAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVQYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHh5ICE9IG51bGxcbiAgICAgICAgICA/IHZhbHVlUGFkZGluZ1xuICAgICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgICA/IGAwICR7dmFsdWVQYWRkaW5nfWBcbiAgICAgICAgICAgIDogYCR7dmFsdWVQYWRkaW5nfSAwYDtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgc3BhY2luZ1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSB7XG4gICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzO1xuICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgICBpZiAoeHkpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IG5ld1NwYWNpbmdDbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHgpIHtcbiAgICAgICAgdGhpcy5fc3BhY2luZ1hDbGFzcyA9IG5ld1NwYWNpbmdDbGFzcztcbiAgICAgIH1cbiAgICAgIGlmICh5KSB7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdZQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt4eX3CtyR7eH3CtyR7eX1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAoeHkgfHwgeCB8fCB5KSBhcyBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICB9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZU1hcmdpbiA9IGAkeygtdmFsdWUpIC8gMn1weGA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHh5ICE9IG51bGxcbiAgICAgICAgICA/IHZhbHVlTWFyZ2luXG4gICAgICAgICAgOiB4ICE9IG51bGxcbiAgICAgICAgICAgID8gYDAgJHt2YWx1ZU1hcmdpbn1gXG4gICAgICAgICAgICA6IGAke3ZhbHVlTWFyZ2lufSAwYDtcbiAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXM6IHtcbiAgICAgICAgICBtYXJnaW46IHN0cmluZ1xuICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIH0gPSB7IG1hcmdpbiB9O1xuXG4gICAgICAgIGlmICh4eSAhPSBudWxsIHx8IHggIT0gbnVsbCkge1xuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luc3R5bGVzLndpZHRoID0gYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyE7XG4gICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmeSgpOiBKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuICBzZXQganVzdGlmeSh2YWw6IEp1c3RpZnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmp1c3RpZnkpIHtcbiAgICAgIHRoaXMuX2p1c3RpZnkgPSB2YWw7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzITtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fanVzdGlmeUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWw7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uU3R5bGVzKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ25JdGVtcyh2YWw6IEFsaWduSXRlbXMpIHtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gdmFsO1xuICAgIHRoaXMuX2FsaWduSXRlbXNDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC5hbGlnbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgYWxpZ25JdGVtc1N0eWxlczoge1xuICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nLFxuICAgICAgICBbbWVkaWE6IHN0cmluZ106IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nXG4gICAgICAgIH0gfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FsaWduSXRlbXNTdHlsZXMgPSB7XG4gICAgICAgICAgYWxpZ25JdGVtczogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgaWYgKCFhbGlnbkl0ZW1zU3R5bGVzKSB7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3QWxpZ25JdGVtc1N0eWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzID0gbmV3QWxpZ25JdGVtc1N0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWxpZ25JdGVtc1N0eWxlcyE7XG4gICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hbGlnbkl0ZW1zQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgYWxpZ25JdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25JdGVtcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dLCBbbHktZ3JpZC1pdGVtXSwgW2x5R3JpZEl0ZW1dJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZEl0ZW0gaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlHcmlkSXRlbSc7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9vcmRlcjogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9vcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkc1xuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fY29sID0gdmFsIHx8IDA7XG4gICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLl9zci5hZGQoYCR7THlHcmlkSXRlbS7QuH0tLWNvbC0ke25ld1ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYXMgPSBuZXcgU3R5bGVDb2xsZWN0aW9uPFN0eWxlVGVtcGxhdGU+KCk7XG4gICAgICBlYWNoTWVkaWEobmV3VmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0x5R3JpZEl0ZW0u0Lh9OiAnJHt2YWx9JyBpcyBub3QgdmFsaWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSB2YWx1ZSA/IHZhbHVlICogMTAwIC8gMTIgOiAxMDA7XG4gICAgICAgIGNvbnN0IGZsZXhCYXNpcyA9IHZhbHVlID8gdmFsdWUgKiAxMDAgLyAxMiA6IDA7XG4gICAgICAgIGNvbnN0IGZsZXhHcm93ID0gdmFsdWUgPyAwIDogMTtcblxuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBtZWRpYXMuYWRkKFxuICAgICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7dGhlbWUuYnJlYWtwb2ludHNbbWVkaWFdfXske2NsYXNzTmFtZX17bWF4LXdpZHRoOiR7bWF4V2lkdGh9JTs7ZmxleC1iYXNpczoke2ZsZXhCYXNpc30lOztmbGV4LWdyb3c6JHtmbGV4R3Jvd307fX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYXMuYWRkKFxuICAgICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC13aWR0aDoke21heFdpZHRofSU7ZmxleC1iYXNpczoke2ZsZXhCYXNpc30lO2ZsZXgtZ3Jvdzoke2ZsZXhHcm93fTt9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lZGlhcy5jc3M7XG4gICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXMuX2NvbENsYXNzKTtcbiAgfVxuXG4gIEBJbnB1dCgnbHlHcmlkSXRlbScpXG4gIHNldCBncmlkSXRlbUNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuY29sID0gdmFsO1xuICB9XG4gIGdldCBncmlkSXRlbUNvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2w7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgb3JkZXIgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmRlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuICBzZXQgb3JkZXIodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9yZGVyKSB7XG4gICAgICB0aGlzLl9vcmRlciA9IHZhbDtcbiAgICAgIHRoaXMuX29yZGVyQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtb3JkZXI6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgb3JkZXJTdHlsZXM6IHtcbiAgICAgICAgICBvcmRlcj86IHN0cmluZyB8IG51bWJlclxuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEoYCR7dmFsfWAsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcmRlclN0eWxlcyA9IHtcbiAgICAgICAgICAgIG9yZGVyOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3NyOiBTdHlsZVJlbmRlcmVyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCA8bHktZ3JpZCBjb250YWluZXI+YCk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZ3JpZENvbnRhaW5lci5jbGFzc2VzLml0ZW0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1hDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdYQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1lDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdZQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=