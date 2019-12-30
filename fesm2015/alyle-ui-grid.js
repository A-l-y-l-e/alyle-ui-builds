import { __decorate } from 'tslib';
import { ElementRef, Input, Directive, Renderer2, NgModule } from '@angular/core';
import { eachMedia, LyTheme2, StyleCollection, StyleRenderer, LyHostClass } from '@alyle/ui';

var LyGridItem_1;
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
const STYLES = () => ({
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
__decorate([
    Input()
], LyGrid.prototype, "spacingX", null);
__decorate([
    Input()
], LyGrid.prototype, "spacingY", null);
__decorate([
    Input()
], LyGrid.prototype, "spacing", null);
__decorate([
    Input()
], LyGrid.prototype, "justify", null);
__decorate([
    Input()
], LyGrid.prototype, "direction", null);
__decorate([
    Input()
], LyGrid.prototype, "alignItems", null);
LyGrid = __decorate([
    Directive({
        selector: 'ly-grid[container]'
    })
], LyGrid);
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
__decorate([
    Input()
], LyGridItem.prototype, "col", null);
__decorate([
    Input('lyGridItem')
], LyGridItem.prototype, "gridItemCol", null);
__decorate([
    Input()
], LyGridItem.prototype, "order", null);
LyGridItem = LyGridItem_1 = __decorate([
    Directive({
        selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]',
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    })
], LyGridItem);

let LyGridModule = class LyGridModule {
};
LyGridModule = __decorate([
    NgModule({
        exports: [LyGrid, LyGridItem],
        declarations: [LyGrid, LyGridItem]
    })
], LyGridModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyGrid, LyGridItem, LyGridModule, STYLES };
//# sourceMappingURL=alyle-ui-grid.js.map
