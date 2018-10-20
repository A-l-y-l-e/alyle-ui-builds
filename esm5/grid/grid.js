/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -1;
/** *
 * @ignore
  @type {?} */
var COL_VALUES = {};
/** @type {?} */
var ALIGN_ALIAS = {
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
var styles = ({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    }
});
/** @typedef {?} */
var Justify;
/** @typedef {?} */
var Direction;
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
var LyGrid = /** @class */ (function () {
    function LyGrid(theme, el) {
        this.theme = theme;
        this.el = el;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.el.nativeElement.classList.add(this.classes.root);
    }
    Object.defineProperty(LyGrid.prototype, "spacing", {
        /**
         * Defines the space between the component with the `item` attribute.
         */
        get: /**
         * Defines the space between the component with the `item` attribute.
         * @return {?}
         */
        function () {
            return this._spacing;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.spacing) {
                this._spacing = val;
                this._spacingClass = this.theme.addStyle("lyGrid-spacing:" + val, function (theme) {
                    if (typeof val === 'number') {
                        return "padding:" + val / 2 + "px;";
                    }
                    else {
                        /** @type {?} */
                        var spacingStyles_1 = {};
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var padding = (+value) / 2 + "px";
                            if (len) {
                                // spacingStyles[`@media ${this.mediaQueries[media]}`] = {
                                spacingStyles_1[theme.getBreakpoint(media)] = {
                                    padding: padding
                                };
                            }
                            else {
                                spacingStyles_1.padding = padding;
                            }
                        });
                        return /** @type {?} */ (spacingStyles_1);
                    }
                }, undefined, undefined, STYLE_PRIORITY);
                this._negativeMarginClass = this.theme.addStyle("lyGrid-negative-margin:" + val, function (theme) {
                    if (typeof val === 'number') {
                        return "margin:" + val / -2 + "px;width: calc(100% + " + val + "px);";
                    }
                    else {
                        /** @type {?} */
                        var negativeMarginStyles_1 = void 0;
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var negativeMarginstyles = {
                                margin: (-value) / 2 + "px",
                                width: "calc(100% + " + value + "px)"
                            };
                            if (len) {
                                if (!negativeMarginStyles_1) {
                                    negativeMarginStyles_1 = {};
                                }
                                // negativeMarginStyles[`@media ${this.mediaQueries[media]}`] = negativeMarginstyles;
                                negativeMarginStyles_1[theme.getBreakpoint(media)] = negativeMarginstyles;
                            }
                            else {
                                negativeMarginStyles_1 = negativeMarginstyles;
                            }
                        });
                        return /** @type {?} */ (negativeMarginStyles_1);
                    }
                }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "spacingClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._spacingClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "justify", {
        /** Defines the justify-content style property. */
        get: /**
         * Defines the justify-content style property.
         * @return {?}
         */
        function () {
            return this._justify;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.justify) {
                this._justify = val;
                this._justifyClass = this.theme.addStyle("lyGrid-justify:" + val, function (theme) {
                    /** @type {?} */
                    var justifyStyles;
                    eachMedia(val, function (value, media, isMedia) {
                        /** @type {?} */
                        var newJustifyStyles = {
                            justifyContent: value in ALIGN_ALIAS
                                ? ALIGN_ALIAS[value]
                                : value
                        };
                        if (isMedia) {
                            if (!justifyStyles) {
                                justifyStyles = {};
                            }
                            // justifyStyles[`@media ${this.mediaQueries[media]}`] = newJustifyStyles;
                            justifyStyles[theme.getBreakpoint(media)] = newJustifyStyles;
                        }
                        else {
                            justifyStyles = newJustifyStyles;
                        }
                    });
                    return /** @type {?} */ (justifyStyles);
                }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "direction", {
        /** Defines the justify-content style property. */
        get: /**
         * Defines the justify-content style property.
         * @return {?}
         */
        function () {
            return this._direction;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.direction) {
                this._direction = val;
                this._directionClass = this.theme.addStyle("lyGrid-direction:" + val, function (theme) {
                    /** @type {?} */
                    var directionStyles;
                    eachMedia(val, function (value, media, isMedia) {
                        /** @type {?} */
                        var newDirectionStyles = {
                            flexDirection: value in ALIGN_ALIAS
                                ? ALIGN_ALIAS[value]
                                : value
                        };
                        if (isMedia) {
                            if (!directionStyles) {
                                directionStyles = {};
                            }
                            // directionStyles[`@media ${this.mediaQueries[media]}`] = newDirectionStyles;
                            directionStyles[theme.getBreakpoint(media)] = newDirectionStyles;
                        }
                        else {
                            directionStyles = newDirectionStyles;
                        }
                    });
                    return /** @type {?} */ (directionStyles);
                }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyGrid.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-grid[container]'
                },] }
    ];
    /** @nocollapse */
    LyGrid.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyGrid.propDecorators = {
        spacing: [{ type: Input }],
        justify: [{ type: Input }],
        direction: [{ type: Input }]
    };
    return LyGrid;
}());
export { LyGrid };
if (false) {
    /**
     * Styles
     * @ignore
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
var LyGridItem = /** @class */ (function () {
    function LyGridItem(gridContainer, el, theme) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
        if (!gridContainer) {
            throw new Error("Require parent grid");
        }
    }
    Object.defineProperty(LyGridItem.prototype, "col", {
        /** Defines the number of grids */
        get: /**
         * Defines the number of grids
         * @return {?}
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.col) {
                this._col = val;
                this._colClass = this.theme.addStyle("lyGrid-col:" + val, function (theme) {
                    if (typeof val === 'number') {
                        return getColStyle(val);
                    }
                    else {
                        /** @type {?} */
                        var colStyles_1 = void 0;
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var newColStyles = getColStyle(+value);
                            if (len) {
                                if (!colStyles_1) {
                                    colStyles_1 = {};
                                }
                                // colStyles[`@media ${this.mediaQueries[media]}`] = newColStyles;
                                colStyles_1[theme.getBreakpoint(media)] = newColStyles;
                            }
                            else {
                                colStyles_1 = newColStyles;
                            }
                        });
                        return /** @type {?} */ (colStyles_1);
                    }
                }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGridItem.prototype, "order", {
        /** Defines the order style property. */
        get: /**
         * Defines the order style property.
         * @return {?}
         */
        function () {
            return this._order;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.order) {
                this._order = val;
                this._orderClass = this.theme.addStyle("lyGrid-order:" + val, function (theme) {
                    /** @type {?} */
                    var orderStyles;
                    eachMedia("" + val, function (value, media, isMedia) {
                        /** @type {?} */
                        var newOrderStyles = {
                            order: value
                        };
                        if (isMedia) {
                            if (!orderStyles) {
                                orderStyles = {};
                            }
                            // orderStyles[`@media ${this.mediaQueries[media]}`] = newOrderStyles;
                            orderStyles[theme.getBreakpoint(media)] = newOrderStyles;
                        }
                        else {
                            orderStyles = newOrderStyles;
                        }
                    });
                    return /** @type {?} */ (orderStyles);
                }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyGridItem.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._updateSpacing();
    };
    /**
     * @return {?}
     */
    LyGridItem.prototype._updateSpacing = /**
     * @return {?}
     */
    function () {
        if (this.gridContainer.spacingClass) {
            this.el.nativeElement.classList.add(this.gridContainer.spacingClass);
        }
    };
    LyGridItem.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-grid[item]'
                },] }
    ];
    /** @nocollapse */
    LyGridItem.ctorParameters = function () { return [
        { type: LyGrid },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyGridItem.propDecorators = {
        col: [{ type: Input }],
        order: [{ type: Input }]
    };
    return LyGridItem;
}());
export { LyGridItem };
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
        : COL_VALUES[val] = +val * 100 / 12 + "%";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixNQUFNLFdBQVcsQ0FBQzs7QUFFaEUsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7QUFHMUIsSUFBTSxVQUFVLEdBQUcsRUFBRyxDQUFDOztBQUV2QixJQUFNLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkIsQ0FBQzs7QUFFRixJQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxZQUFZO0tBQ3hCO0NBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3S0QsZ0JBQ1UsT0FDQTtRQURBLFVBQUssR0FBTCxLQUFLO1FBQ0wsT0FBRSxHQUFGLEVBQUU7Ozs7O1FBakpaLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBbUp6RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEQ7SUFwSUQsc0JBQ0ksMkJB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QyxHQUFXO0lBQzlCLE9BQU87UUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDdkMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QixDQUFDO0NBQ0g7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBb0I7SUFDckMsT0FBTyxHQUFHLElBQUksVUFBVTtRQUNaLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBRyxDQUFDO0NBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAaWdub3JlICovXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG50eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZSc7XG5cbi8qKlxuICogR3JpZCBjb250YWluZXJcbiAqIGV4YW1wbGU6XG4gKiA8bHktZ3JpZCBjb250YWluZXIgW3NwYWNpbmddPVwiJzE2IDhAWFNtYWxsJ1wiPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogPC9seS1ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3NwYWNpbmdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9qdXN0aWZ5OiBKdXN0aWZ5O1xuICBwcml2YXRlIF9qdXN0aWZ5Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGBpdGVtYCBhdHRyaWJ1dGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fc3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYHBhZGRpbmc6JHt2YWwgLyAyfXB4O2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICAgICAgcGFkZGluZz86IHN0cmluZ1xuICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHsoK3ZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICAvLyBzcGFjaW5nU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYG1hcmdpbjoke3ZhbCAvIC0yfXB4O3dpZHRoOiBjYWxjKDEwMCUgKyAke3ZhbH1weCk7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXMgPSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYCR7KC12YWx1ZSkgLyAyfXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeSA9IHZhbDtcbiAgICAgIHRoaXMuX2p1c3RpZnlDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1qdXN0aWZ5OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGp1c3RpZnlTdHlsZXM6IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SnVzdGlmeVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWp1c3RpZnlTdHlsZXMpIHtcbiAgICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ganVzdGlmeVN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnlTdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpcmVjdGlvblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfb3JkZXI6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfb3JkZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sKSB7XG4gICAgICB0aGlzLl9jb2wgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1jb2w6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q29sU3R5bGUodmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29sU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXhXaWR0aD86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEJhc2lzPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4R3Jvdz86IG51bWJlclxuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2xTdHlsZXMgPSBnZXRDb2xTdHlsZSgrdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIWNvbFN0eWxlcykge1xuICAgICAgICAgICAgICAgIGNvbFN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGNvbFN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qKiBEZWZpbmVzIHRoZSBvcmRlciBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gdmFsO1xuICAgICAgdGhpcy5fb3JkZXJDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1vcmRlcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBvcmRlclN0eWxlczoge1xuICAgICAgICAgIG9yZGVyPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYShgJHt2YWx9YCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld09yZGVyU3R5bGVzID0ge1xuICAgICAgICAgICAgb3JkZXI6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFvcmRlclN0eWxlcykge1xuICAgICAgICAgICAgICBvcmRlclN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3JkZXJTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgICAgb3JkZXJTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9yZGVyU3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fb3JkZXJDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgcGFyZW50IGdyaWRgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIl19