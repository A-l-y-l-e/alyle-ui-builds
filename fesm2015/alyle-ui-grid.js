import { __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { eachMedia, LyTheme2 } from '@alyle/ui';

const STYLE_PRIORITY = -1;
/** @docs-private */
const COL_VALUES = {};
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
const styles = ({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    },
    item: {
        '&, & :first-child': {
            boxSizing: 'border-box'
        }
    }
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
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
            const val = xy || x || y;
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
            const val = xy || x || y;
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
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyGrid.prototype, "spacingX", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyGrid.prototype, "spacingY", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyGrid.prototype, "spacing", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyGrid.prototype, "justify", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyGrid.prototype, "direction", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyGrid.prototype, "alignItems", null);
LyGrid = __decorate([
    Directive({
        selector: 'ly-grid[container]'
    }),
    __metadata("design:paramtypes", [LyTheme2,
        ElementRef])
], LyGrid);
let LyGridItem = class LyGridItem {
    constructor(gridContainer, el, renderer, theme) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
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
        if (val !== this.col) {
            this._col = val;
            this._colClass = this.theme.addStyle(`lyGrid-col:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return getColStyle(val);
                }
                else {
                    let colStyles;
                    eachMedia(val, (value, media) => {
                        const newColStyles = getColStyle(+value);
                        if (media) {
                            if (!colStyles) {
                                colStyles = {};
                            }
                            colStyles[theme.getBreakpoint(media)] = newColStyles;
                        }
                        else {
                            colStyles = newColStyles;
                        }
                    });
                    return colStyles;
                }
            }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
        }
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
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyGridItem.prototype, "col", null);
__decorate([
    Input('lyGridItem'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyGridItem.prototype, "gridItemCol", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyGridItem.prototype, "order", null);
LyGridItem = __decorate([
    Directive({
        selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]'
    }),
    __metadata("design:paramtypes", [LyGrid,
        ElementRef,
        Renderer2,
        LyTheme2])
], LyGridItem);
function getColStyle(val) {
    return {
        maxWidth: val ? getColVal(val) : '100%',
        flexBasis: val ? getColVal(val) : 0,
        flexGrow: val ? 0 : 1
    };
}
function getColVal(val) {
    return val in COL_VALUES
        ? COL_VALUES[val]
        : COL_VALUES[val] = `${+val * 100 / 12}%`;
}

let LyGridModule = class LyGridModule {
};
LyGridModule = __decorate([
    NgModule({
        exports: [LyGrid, LyGridItem],
        declarations: [LyGrid, LyGridItem]
    })
], LyGridModule);

export { LyGrid, LyGridItem, LyGridModule };
//# sourceMappingURL=alyle-ui-grid.js.map
