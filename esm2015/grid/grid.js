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
                    return `padding:${val / 2}px;`;
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
                    return (/** @type {?} */ (spacingStyles));
                }
            }, undefined, undefined, STYLE_PRIORITY);
            this._negativeMarginClass = this.theme.addStyle(`lyGrid-negative-margin:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return `margin:${val / -2}px;width: calc(100% + ${val}px);`;
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
                    return (/** @type {?} */ (negativeMarginStyles));
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
                return (/** @type {?} */ (justifyStyles));
            }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the justify-content style property.
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
                return (/** @type {?} */ (directionStyles));
            }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
        }
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
    direction: [{ type: Input }]
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
                    return (/** @type {?} */ (colStyles));
                }
            }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the order style property.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixNQUFNLFdBQVcsQ0FBQzs7TUFFMUQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7TUFHbkIsVUFBVSxHQUFHLEVBQUc7O01BRWhCLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkI7O01BRUssTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FBb0JGLE1BQU0sT0FBTyxNQUFNOzs7OztJQWlKakIsWUFDVSxLQUFlLEVBQ2YsRUFBYztRQURkLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFZOzs7OztRQTlJeEIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWdKekQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7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QUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7OztZQTJFMEIsTUFBTTtZQXBSYixVQUFVO1lBQ3JCLFFBQVE7OztrQkFpTmQsS0FBSztvQkFvQ0wsS0FBSzs7OztJQTNDTiwwQkFBOEI7O0lBQzlCLCtCQUEwQjs7SUFFMUIsNEJBQWdDOztJQUNoQyxpQ0FBNEI7O0lBcUUxQixtQ0FBNkI7O0lBQzdCLHdCQUFzQjs7SUFDdEIsMkJBQXVCOzs7Ozs7QUFtQjNCLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFDOUIsT0FBTztRQUNMLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUN2QyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCLENBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CO0lBQ3JDLE9BQU8sR0FBRyxJQUFJLFVBQVU7UUFDWixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBlYWNoTWVkaWEsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IENPTF9WQUxVRVMgPSB7IH07XG5cbmNvbnN0IEFMSUdOX0FMSUFTID0ge1xuICByb3dSZXZlcnNlOiAncm93LXJldmVyc2UnLFxuICBjb2x1bW5SZXZlcnNlOiAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZTogJ3dyYXAtcmV2ZXJzZScsXG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbjogJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQ6ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHk6ICdzcGFjZS1ldmVubHknLFxufTtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufSk7XG5cbmV4cG9ydCB0eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBwYWRkaW5nOiR7dmFsIC8gMn1weDtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeSA9IHZhbDtcbiAgICAgIHRoaXMuX2p1c3RpZnlDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1qdXN0aWZ5OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGp1c3RpZnlTdHlsZXM6IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SnVzdGlmeVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWp1c3RpZnlTdHlsZXMpIHtcbiAgICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAganVzdGlmeVN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG4gIHNldCBkaXJlY3Rpb24odmFsOiBEaXJlY3Rpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtZGlyZWN0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblN0eWxlczoge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvblN0eWxlcyA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uU3R5bGVzKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfb3JkZXI6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfb3JkZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sKSB7XG4gICAgICB0aGlzLl9jb2wgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1jb2w6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q29sU3R5bGUodmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29sU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXhXaWR0aD86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEJhc2lzPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4R3Jvdz86IG51bWJlclxuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2xTdHlsZXMgPSBnZXRDb2xTdHlsZSgrdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIWNvbFN0eWxlcykge1xuICAgICAgICAgICAgICAgIGNvbFN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbFN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xTdHlsZXMgPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNvbFN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLyoqIERlZmluZXMgdGhlIG9yZGVyIHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3JkZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5fb3JkZXIgPSB2YWw7XG4gICAgICB0aGlzLl9vcmRlckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW9yZGVyOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IG9yZGVyU3R5bGVzOiB7XG4gICAgICAgICAgb3JkZXI/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKGAke3ZhbH1gLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBvcmRlcjogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZSBwYXJlbnQgZ3JpZGApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldENvbFN0eWxlKHZhbDogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgbWF4V2lkdGg6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogJzEwMCUnLFxuICAgIGZsZXhCYXNpczogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAwLFxuICAgIGZsZXhHcm93OiB2YWwgPyAwIDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xWYWwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsIGluIENPTF9WQUxVRVNcbiAgICAgICAgICAgICAgPyBDT0xfVkFMVUVTW3ZhbF1cbiAgICAgICAgICAgICAgOiBDT0xfVkFMVUVTW3ZhbF0gPSBgJHsrdmFsICogMTAwIC8gMTJ9JWA7XG59XG4iXX0=