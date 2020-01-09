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
export const STYLES = () => ({
    $priority: STYLE_PRIORITY,
    $name: LyGrid.и,
    root: (className) => `${className}{width:100%;display:flex;flex-wrap:wrap;box-sizing:border-box;}`,
    item: (className) => `${className},${className} :first-child{box-sizing:border-box;}`
});
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
        this.classes = this.theme.renderStyleSheet(STYLES);
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
                    medias.add((className) => `@media ${theme.breakpoints[media]}{${className}{max-width:${maxWidth}%;flex-basis:${flexBasis}%;flex-grow:${flexGrow};}}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUIsTUFBTSxXQUFXLEdBQUc7SUFDbEIsVUFBVSxFQUFFLGFBQWE7SUFDekIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixXQUFXLEVBQUUsY0FBYztJQUMzQixLQUFLLEVBQUUsWUFBWTtJQUNuQixHQUFHLEVBQUUsVUFBVTtJQUNmLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE1BQU0sRUFBRSxjQUFjO0NBQ3ZCLENBQUM7QUFJRixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzQixTQUFTLEVBQUUsY0FBYztJQUN6QixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixJQUFJLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsaUVBQWlFO0lBQzFHLElBQUksRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxJQUFJLFNBQVMsdUNBQXVDO0NBQzlGLENBQUMsQ0FBQztBQUtIOztHQUVHO0FBSUgsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQW9QakIsWUFDVSxLQUFlLEVBQ2YsRUFBYztRQURkLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBcFB4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Q0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkU7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN4RTtTQUNGO0lBQ0gsQ0FBQztDQUVGLENBQUE7QUFoSGlCLFlBQUMsR0FBRyxZQUFZLENBQUM7O1lBbUZSLE1BQU07WUFDakIsVUFBVTtZQUNaLFNBQVM7WUFDSixRQUFRO1lBQ1YsYUFBYTs7QUEzRTVCO0lBREMsS0FBSyxFQUFFO3FDQUdQO0FBNEJEO0lBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzs2Q0FHbkI7QUFVRDtJQURDLEtBQUssRUFBRTt1Q0FHUDtBQXpEVSxVQUFVO0lBUHRCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw2Q0FBNkM7UUFDdkQsU0FBUyxFQUFFO1lBQ1QsV0FBVztZQUNYLGFBQWE7U0FDZDtLQUNGLENBQUM7R0FDVyxVQUFVLENBaUh0QjtTQWpIWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBlYWNoTWVkaWEsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuY29uc3QgQUxJR05fQUxJQVMgPSB7XG4gIHJvd1JldmVyc2U6ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2U6ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlOiAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQ6ICdmbGV4LXN0YXJ0JyxcbiAgZW5kOiAnZmxleC1lbmQnLFxuICBiZXR3ZWVuOiAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZDogJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seTogJ3NwYWNlLWV2ZW5seScsXG59O1xuXG5leHBvcnQgdHlwZSBBbGlnbkl0ZW1zID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKCkgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgJG5hbWU6IEx5R3JpZC7QuCxcbiAgcm9vdDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgaXRlbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9LCR7Y2xhc3NOYW1lfSA6Zmlyc3QtY2hpbGR7Ym94LXNpemluZzpib3JkZXItYm94O31gXG59KTtcblxuZXhwb3J0IHR5cGUgSnVzdGlmeSA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JztcbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZSc7XG5cbi8qKlxuICogR3JpZCBjb250YWluZXJcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlHcmlkJztcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ0NsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NwYWNpbmdYOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nWENsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NwYWNpbmdZOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nWUNsYXNzPzogc3RyaW5nO1xuXG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9qdXN0aWZ5OiBKdXN0aWZ5O1xuICBwcml2YXRlIF9qdXN0aWZ5Q2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2FsaWduSXRlbXM6IEFsaWduSXRlbXM7XG4gIHByaXZhdGUgX2FsaWduSXRlbXNDbGFzcz86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZ1goKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ1g7XG4gIH1cbiAgc2V0IHNwYWNpbmdYKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nWCkge1xuICAgICAgdGhpcy5fc3BhY2luZ1ggPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVTcGFjaW5nQ2xhc3ModW5kZWZpbmVkLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nWSgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nWTtcbiAgfVxuICBzZXQgc3BhY2luZ1kodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmdZKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nWSA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZVNwYWNpbmdDbGFzcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGBpdGVtYCBhdHRyaWJ1dGUuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVTcGFjaW5nQ2xhc3ModmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT25seSBvbmUgcGFyYW0gbXVzdCBiZSBkZWZpbmVkXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVTcGFjaW5nQ2xhc3MoeHk/OiBzdHJpbmcgfCBudW1iZXIsIHg/OiBzdHJpbmcgfCBudW1iZXIsIHk/OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdTcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3h5fcK3JHt4fcK3JHt5fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICh4eSB8fCB4IHx8IHkpIGFzIHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgcGFkZGluZz86IHN0cmluZ1xuICAgICAgfSA9IHt9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZVBhZGRpbmcgPSBgJHsoK3ZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICBjb25zdCBwYWRkaW5nID0geHkgIT0gbnVsbFxuICAgICAgICAgID8gdmFsdWVQYWRkaW5nXG4gICAgICAgICAgOiB4ICE9IG51bGxcbiAgICAgICAgICAgID8gYDAgJHt2YWx1ZVBhZGRpbmd9YFxuICAgICAgICAgICAgOiBgJHt2YWx1ZVBhZGRpbmd9IDBgO1xuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBzcGFjaW5nU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXM7XG4gICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcblxuICAgIGlmICh4eSkge1xuICAgICAgdGhpcy5fc3BhY2luZ0NsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeCkge1xuICAgICAgICB0aGlzLl9zcGFjaW5nWENsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgICAgfVxuICAgICAgaWYgKHkpIHtcbiAgICAgICAgdGhpcy5fc3BhY2luZ1lDbGFzcyA9IG5ld1NwYWNpbmdDbGFzcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3h5fcK3JHt4fcK3JHt5fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICh4eSB8fCB4IHx8IHkpIGFzIHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlTWFyZ2luID0gYCR7KC12YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0geHkgIT0gbnVsbFxuICAgICAgICAgID8gdmFsdWVNYXJnaW5cbiAgICAgICAgICA6IHggIT0gbnVsbFxuICAgICAgICAgICAgPyBgMCAke3ZhbHVlTWFyZ2lufWBcbiAgICAgICAgICAgIDogYCR7dmFsdWVNYXJnaW59IDBgO1xuICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlczoge1xuICAgICAgICAgIG1hcmdpbjogc3RyaW5nXG4gICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgfSA9IHsgbWFyZ2luIH07XG5cbiAgICAgICAgaWYgKHh5ICE9IG51bGwgfHwgeCAhPSBudWxsKSB7XG4gICAgICAgICAgbmVnYXRpdmVNYXJnaW5zdHlsZXMud2lkdGggPSBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5lZ2F0aXZlTWFyZ2luU3R5bGVzITtcbiAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeSA9IHZhbDtcbiAgICAgIHRoaXMuX2p1c3RpZnlDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1qdXN0aWZ5OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGp1c3RpZnlTdHlsZXM6IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SnVzdGlmeVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnlTdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblN0eWxlcyE7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RpcmVjdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBhbGlnbi1pdGVtc2Agc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbkl0ZW1zKHZhbDogQWxpZ25JdGVtcykge1xuICAgIHRoaXMuX2FsaWduSXRlbXMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25JdGVtc0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLmFsaWduOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGxldCBhbGlnbkl0ZW1zU3R5bGVzOiB7XG4gICAgICAgIGFsaWduSXRlbXM/OiBzdHJpbmcsXG4gICAgICAgIFttZWRpYTogc3RyaW5nXToge1xuICAgICAgICAgIGFsaWduSXRlbXM/OiBzdHJpbmdcbiAgICAgICAgfSB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QWxpZ25JdGVtc1N0eWxlcyA9IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBpZiAoIWFsaWduSXRlbXNTdHlsZXMpIHtcbiAgICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGlnbkl0ZW1zU3R5bGVzITtcbiAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FsaWduSXRlbXNDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnbkl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbkl0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0sIFtseS1ncmlkLWl0ZW1dLCBbbHlHcmlkSXRlbV0nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUdyaWRJdGVtJztcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9jb2wgPSB2YWwgfHwgMDtcbiAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMuX3NyLmFkZChgJHtMeUdyaWRJdGVtLtC4fS0tY29sLSR7bmV3VmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhcyA9IG5ldyBTdHlsZUNvbGxlY3Rpb248U3R5bGVUZW1wbGF0ZT4oKTtcbiAgICAgIGVhY2hNZWRpYShuZXdWYWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlHcmlkSXRlbS7QuH06ICcke3ZhbH0nIGlzIG5vdCB2YWxpZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHZhbHVlID8gdmFsdWUgKiAxMDAgLyAxMiA6IDEwMDtcbiAgICAgICAgY29uc3QgZmxleEJhc2lzID0gdmFsdWUgPyB2YWx1ZSAqIDEwMCAvIDEyIDogMDtcbiAgICAgICAgY29uc3QgZmxleEdyb3cgPSB2YWx1ZSA/IDAgOiAxO1xuXG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIG1lZGlhcy5hZGQoXG4gICAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHt0aGVtZS5icmVha3BvaW50c1ttZWRpYV19eyR7Y2xhc3NOYW1lfXttYXgtd2lkdGg6JHttYXhXaWR0aH0lO2ZsZXgtYmFzaXM6JHtmbGV4QmFzaXN9JTtmbGV4LWdyb3c6JHtmbGV4R3Jvd307fX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYXMuYWRkKFxuICAgICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC13aWR0aDoke21heFdpZHRofSU7ZmxleC1iYXNpczoke2ZsZXhCYXNpc30lO2ZsZXgtZ3Jvdzoke2ZsZXhHcm93fTt9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lZGlhcy5jc3M7XG4gICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXMuX2NvbENsYXNzKTtcbiAgfVxuXG4gIEBJbnB1dCgnbHlHcmlkSXRlbScpXG4gIHNldCBncmlkSXRlbUNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuY29sID0gdmFsO1xuICB9XG4gIGdldCBncmlkSXRlbUNvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2w7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgb3JkZXIgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmRlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuICBzZXQgb3JkZXIodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9yZGVyKSB7XG4gICAgICB0aGlzLl9vcmRlciA9IHZhbDtcbiAgICAgIHRoaXMuX29yZGVyQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtb3JkZXI6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgb3JkZXJTdHlsZXM6IHtcbiAgICAgICAgICBvcmRlcj86IHN0cmluZyB8IG51bWJlclxuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEoYCR7dmFsfWAsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcmRlclN0eWxlcyA9IHtcbiAgICAgICAgICAgIG9yZGVyOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3NyOiBTdHlsZVJlbmRlcmVyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCA8bHktZ3JpZCBjb250YWluZXI+YCk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZ3JpZENvbnRhaW5lci5jbGFzc2VzLml0ZW0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1hDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdYQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1lDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdZQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=