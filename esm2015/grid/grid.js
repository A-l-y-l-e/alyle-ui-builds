/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
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
 * example:
 * <ly-grid container [spacing]="'16 8\@XSmall'">
 *   <ly-grid item [col]="'6 12\@XSmall'">
 *     <div>6 12\@XSmall</div>
 *   </ly-grid>
 *   <ly-grid item [col]="'6 12\@XSmall'">
 *     <div>6 12\@XSmall</div>
 *   </ly-grid>
 * </ly-grid>
 */
export class LyGrid {
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
            this._spacingClass = this.theme.addStyle(`lyGrid-spacing:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return (/** @type {?} */ (`padding:${val / 2}px;`));
                }
                else {
                    /** @type {?} */
                    const spacingStyles = {};
                    eachMedia(val, (value, media, len) => {
                        /** @type {?} */
                        const padding = `${(+value) / 2}px`;
                        if (len) {
                            spacingStyles[theme.getBreakpoint(media)] = {
                                padding
                            };
                        }
                        else {
                            spacingStyles.padding = padding;
                        }
                    });
                    return spacingStyles;
                }
            }, undefined, undefined, STYLE_PRIORITY);
            this._negativeMarginClass = this.theme.addStyle(`lyGrid-negative-margin:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return (/** @type {?} */ (`margin:${val / -2}px;width: calc(100% + ${val}px);`));
                }
                else {
                    /** @type {?} */
                    let negativeMarginStyles;
                    eachMedia(val, (value, media, len) => {
                        /** @type {?} */
                        const negativeMarginstyles = {
                            margin: `${(-value) / 2}px`,
                            width: `calc(100% + ${value}px)`
                        };
                        if (len) {
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
                }
            }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get spacingClass() {
        return this._spacingClass;
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
                eachMedia(val, (value, media, isMedia) => {
                    /** @type {?} */
                    const newJustifyStyles = {
                        justifyContent: value in ALIGN_ALIAS
                            ? ALIGN_ALIAS[value]
                            : value
                    };
                    if (isMedia) {
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
                eachMedia(val, (value, media, isMedia) => {
                    /** @type {?} */
                    const newDirectionStyles = {
                        flexDirection: value in ALIGN_ALIAS
                            ? ALIGN_ALIAS[value]
                            : value
                    };
                    if (isMedia) {
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
     * @param {?} val
     * @return {?}
     */
    set alignItems(val) {
        this._alignItems = val;
        this._alignItemsClass = this.theme.addStyle(`lyGrid.align:${val}`, (theme) => {
            /** @type {?} */
            let alignItemsStyles;
            eachMedia(val, (value, media, isMedia) => {
                /** @type {?} */
                const newAlignItemsStyles = {
                    alignItems: value in ALIGN_ALIAS
                        ? ALIGN_ALIAS[value]
                        : value
                };
                if (isMedia) {
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
    spacing: [{ type: Input }],
    justify: [{ type: Input }],
    direction: [{ type: Input }],
    alignItems: [{ type: Input }]
};
if (false) {
    /**
     * Styles
     * \@docs-private
     * @type {?}
     */
    LyGrid.prototype.classes;
    /** @type {?} */
    LyGrid.prototype._spacing;
    /** @type {?} */
    LyGrid.prototype._spacingClass;
    /** @type {?} */
    LyGrid.prototype._negativeMarginClass;
    /** @type {?} */
    LyGrid.prototype._justify;
    /** @type {?} */
    LyGrid.prototype._justifyClass;
    /** @type {?} */
    LyGrid.prototype._direction;
    /** @type {?} */
    LyGrid.prototype._directionClass;
    /** @type {?} */
    LyGrid.prototype._alignItems;
    /** @type {?} */
    LyGrid.prototype._alignItemsClass;
    /** @type {?} */
    LyGrid.prototype.theme;
    /** @type {?} */
    LyGrid.prototype.el;
}
export class LyGridItem {
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
            throw new Error(`Require parent grid`);
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
                    eachMedia(val, (value, media, len) => {
                        /** @type {?} */
                        const newColStyles = getColStyle(+value);
                        if (len) {
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
                eachMedia(`${val}`, (value, media, isMedia) => {
                    /** @type {?} */
                    const newOrderStyles = {
                        order: value
                    };
                    if (isMedia) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateSpacing();
    }
    /**
     * @return {?}
     */
    _updateSpacing() {
        if (this.gridContainer.spacingClass) {
            this.el.nativeElement.classList.add(this.gridContainer.spacingClass);
        }
    }
}
LyGridItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[item]'
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
    order: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyGridItem.prototype._col;
    /** @type {?} */
    LyGridItem.prototype._colClass;
    /** @type {?} */
    LyGridItem.prototype._order;
    /** @type {?} */
    LyGridItem.prototype._orderClass;
    /** @type {?} */
    LyGridItem.prototype.gridContainer;
    /** @type {?} */
    LyGridItem.prototype.el;
    /** @type {?} */
    LyGridItem.prototype.theme;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixNQUFNLFdBQVcsQ0FBQzs7TUFFMUQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7TUFHbkIsVUFBVSxHQUFHLEVBQUc7O01BRWhCLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkI7O01BSUssTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FBb0JGLE1BQU0sT0FBTyxNQUFNOzs7OztJQStMakIsWUFDVSxLQUFlLEVBQ2YsRUFBYztRQURkLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFZOzs7OztRQTVMeEIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQThMekQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7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TUFBTTtZQTFVYixVQUFVO1lBQ3JCLFFBQVE7OztrQkFvUWQsS0FBSztvQkF1Q0wsS0FBSzs7OztJQWpETiwwQkFBOEI7O0lBQzlCLCtCQUEwQjs7SUFFMUIsNEJBQWdDOztJQUNoQyxpQ0FBNEI7O0lBMkUxQixtQ0FBNkI7O0lBQzdCLHdCQUFzQjs7SUFDdEIsMkJBQXVCOzs7Ozs7QUFtQjNCLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFDOUIsT0FBTztRQUNMLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUN2QyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCLENBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CO0lBQ3JDLE9BQU8sR0FBRyxJQUFJLFVBQVU7UUFDWixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBlYWNoTWVkaWEsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IENPTF9WQUxVRVMgPSB7IH07XG5cbmNvbnN0IEFMSUdOX0FMSUFTID0ge1xuICByb3dSZXZlcnNlOiAncm93LXJldmVyc2UnLFxuICBjb2x1bW5SZXZlcnNlOiAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZTogJ3dyYXAtcmV2ZXJzZScsXG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbjogJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQ6ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHk6ICdzcGFjZS1ldmVubHknLFxufTtcblxuZXhwb3J0IHR5cGUgQWxpZ25JdGVtcyA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJztcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufSk7XG5cbmV4cG9ydCB0eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfYWxpZ25JdGVtczogQWxpZ25JdGVtcztcbiAgcHJpdmF0ZSBfYWxpZ25JdGVtc0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fc3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYHBhZGRpbmc6JHt2YWwgLyAyfXB4O2AgYXMgYW55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBtYXJnaW46JHt2YWwgLyAtMn1weDt3aWR0aDogY2FsYygxMDAlICsgJHt2YWx9cHgpO2AgYXMgYW55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IHNwYWNpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ0NsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZnkoKTogSnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cbiAgc2V0IGp1c3RpZnkodmFsOiBKdXN0aWZ5KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5qdXN0aWZ5KSB7XG4gICAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsO1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ25JdGVtcyh2YWw6IEFsaWduSXRlbXMpIHtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gdmFsO1xuICAgIHRoaXMuX2FsaWduSXRlbXNDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC5hbGlnbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgYWxpZ25JdGVtc1N0eWxlczoge1xuICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nLFxuICAgICAgICBbbWVkaWE6IHN0cmluZ106IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nXG4gICAgICAgIH0gfCBzdHJpbmdcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FsaWduSXRlbXNTdHlsZXMgPSB7XG4gICAgICAgICAgYWxpZ25JdGVtczogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICBpZiAoIWFsaWduSXRlbXNTdHlsZXMpIHtcbiAgICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGlnbkl0ZW1zU3R5bGVzO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25JdGVtc0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduSXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG9yZGVyIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgb3JkZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5fb3JkZXIgPSB2YWw7XG4gICAgICB0aGlzLl9vcmRlckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW9yZGVyOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IG9yZGVyU3R5bGVzOiB7XG4gICAgICAgICAgb3JkZXI/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKGAke3ZhbH1gLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBvcmRlcjogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXM7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX29yZGVyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCBncmlkYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcyk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Q29sU3R5bGUodmFsOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXhXaWR0aDogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAnMTAwJScsXG4gICAgZmxleEJhc2lzOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6IDAsXG4gICAgZmxleEdyb3c6IHZhbCA/IDAgOiAxXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbFZhbCh2YWw6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWwgaW4gQ09MX1ZBTFVFU1xuICAgICAgICAgICAgICA/IENPTF9WQUxVRVNbdmFsXVxuICAgICAgICAgICAgICA6IENPTF9WQUxVRVNbdmFsXSA9IGAkeyt2YWwgKiAxMDAgLyAxMn0lYDtcbn1cbiJdfQ==