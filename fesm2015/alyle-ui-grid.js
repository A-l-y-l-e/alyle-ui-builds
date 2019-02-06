import { LyTheme2, eachMedia } from '@alyle/ui';
import { Directive, ElementRef, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -1;
/**
 * \@docs-private
 * @type {?}
 */
const COL_VALUES = {};
/** @type {?} */
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
/** @type {?} */
const styles = ({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    }
});
/**
 * Grid container
 */
class LyGrid {
    /**
     * @param {?} theme
     * @param {?} el
     */
    constructor(theme, el) {
        this.theme = theme;
        this.el = el;
        /**
         * Styles
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.el.nativeElement.classList.add(this.classes.root);
    }
    /**
     * @return {?}
     */
    get spacingX() {
        return this._spacingX;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set spacingX(val) {
        if (val !== this.spacingX) {
            this._spacingX = val;
            this._createSpacingClass(undefined, val);
        }
    }
    /**
     * @return {?}
     */
    get spacingY() {
        return this._spacingY;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set spacingY(val) {
        if (val !== this.spacingY) {
            this._spacingY = val;
            this._createSpacingClass(undefined, undefined, val);
        }
    }
    /**
     * Defines the space between the component with the `item` attribute.
     * Support breakpoints
     * @return {?}
     */
    get spacing() {
        return this._spacing;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set spacing(val) {
        if (val !== this.spacing) {
            this._spacing = val;
            this._createSpacingClass(val);
        }
    }
    /**
     * Only one param must be defined
     * @private
     * @param {?=} xy
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    _createSpacingClass(xy, x, y) {
        /** @type {?} */
        const newSpacingClass = this.theme.addStyle(`lyGrid-spacing:${xy}·${x}·${y}`, (theme) => {
            /** @type {?} */
            const val = xy || x || y;
            /** @type {?} */
            const spacingStyles = {};
            eachMedia(val, (value, media) => {
                /** @type {?} */
                const valuePadding = `${(+value) / 2}px`;
                /** @type {?} */
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
            /** @type {?} */
            const val = xy || x || y;
            /** @type {?} */
            let negativeMarginStyles;
            eachMedia(val, (value, media) => {
                /** @type {?} */
                const valueMargin = `${(-value) / 2}px`;
                /** @type {?} */
                const margin = xy != null
                    ? valueMargin
                    : x != null
                        ? `0 ${valueMargin}`
                        : `${valueMargin} 0`;
                /** @type {?} */
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
            return (/** @type {?} */ (negativeMarginStyles));
        }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
    }
    /**
     * Defines the justify-content style property.
     * Support breakpoints
     * @return {?}
     */
    get justify() {
        return this._justify;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set justify(val) {
        if (val !== this.justify) {
            this._justify = val;
            this._justifyClass = this.theme.addStyle(`lyGrid-justify:${val}`, (theme) => {
                /** @type {?} */
                let justifyStyles;
                eachMedia(val, (value, media) => {
                    /** @type {?} */
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
                return (/** @type {?} */ (justifyStyles));
            }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the justify-content style property.
     * Support breakpoints
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set direction(val) {
        if (val !== this.direction) {
            this._direction = val;
            this._directionClass = this.theme.addStyle(`lyGrid-direction:${val}`, (theme) => {
                /** @type {?} */
                let directionStyles;
                eachMedia(val, (value, media) => {
                    /** @type {?} */
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
                return (/** @type {?} */ (directionStyles));
            }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the `align-items` style property.
     * Support breakpoints
     * @param {?} val
     * @return {?}
     */
    set alignItems(val) {
        this._alignItems = val;
        this._alignItemsClass = this.theme.addStyle(`lyGrid.align:${val}`, (theme) => {
            /** @type {?} */
            let alignItemsStyles;
            eachMedia(val, (value, media) => {
                /** @type {?} */
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
            return (/** @type {?} */ (alignItemsStyles));
        }, this.el.nativeElement, this._alignItemsClass, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    get alignItems() {
        return this._alignItems;
    }
}
LyGrid.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[container]'
            },] }
];
/** @nocollapse */
LyGrid.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyGrid.propDecorators = {
    spacingX: [{ type: Input }],
    spacingY: [{ type: Input }],
    spacing: [{ type: Input }],
    justify: [{ type: Input }],
    direction: [{ type: Input }],
    alignItems: [{ type: Input }]
};
class LyGridItem {
    /**
     * @param {?} gridContainer
     * @param {?} el
     * @param {?} theme
     */
    constructor(gridContainer, el, theme) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
        if (!gridContainer) {
            throw new Error(`Require parent <ly-grid container>`);
        }
    }
    /**
     * Defines the number of grids
     * Support breakpoints
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set col(val) {
        if (val !== this.col) {
            this._col = val;
            this._colClass = this.theme.addStyle(`lyGrid-col:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return getColStyle(val);
                }
                else {
                    /** @type {?} */
                    let colStyles;
                    eachMedia(val, (value, media) => {
                        /** @type {?} */
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
                    return (/** @type {?} */ (colStyles));
                }
            }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gridItemCol(val) {
        this.col = val;
    }
    /**
     * Defines the order style property.
     * Support breakpoints
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set order(val) {
        if (val !== this.order) {
            this._order = val;
            this._orderClass = this.theme.addStyle(`lyGrid-order:${val}`, (theme) => {
                /** @type {?} */
                let orderStyles;
                eachMedia(`${val}`, (value, media) => {
                    /** @type {?} */
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
                return (/** @type {?} */ (orderStyles));
            }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateSpacing();
    }
    /**
     * @private
     * @return {?}
     */
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
}
LyGridItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]'
            },] }
];
/** @nocollapse */
LyGridItem.ctorParameters = () => [
    { type: LyGrid },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyGridItem.propDecorators = {
    col: [{ type: Input }],
    gridItemCol: [{ type: Input, args: ['lyGridItem',] }],
    order: [{ type: Input }]
};
/**
 * @param {?} val
 * @return {?}
 */
function getColStyle(val) {
    return {
        maxWidth: val ? getColVal(val) : '100%',
        flexBasis: val ? getColVal(val) : 0,
        flexGrow: val ? 0 : 1
    };
}
/**
 * @param {?} val
 * @return {?}
 */
function getColVal(val) {
    return val in COL_VALUES
        ? COL_VALUES[val]
        : COL_VALUES[val] = `${+val * 100 / 12}%`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyGridModule {
}
LyGridModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyGrid, LyGridItem],
                declarations: [LyGrid, LyGridItem]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LyGrid, LyGridItem, LyGridModule };

//# sourceMappingURL=alyle-ui-grid.js.map