/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -1;
/**
 * \@docs-private
 * @type {?}
 */
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
/**
 * Grid container
 */
var LyGrid = /** @class */ (function () {
    function LyGrid(theme, el) {
        this.theme = theme;
        this.el = el;
        /**
         * Styles
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.el.nativeElement.classList.add(this.classes.root);
    }
    Object.defineProperty(LyGrid.prototype, "spacingX", {
        get: /**
         * @return {?}
         */
        function () {
            return this._spacingX;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.spacingX) {
                this._spacingX = val;
                this._createSpacingClass(undefined, val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "spacingY", {
        get: /**
         * @return {?}
         */
        function () {
            return this._spacingY;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.spacingY) {
                this._spacingY = val;
                this._createSpacingClass(undefined, undefined, val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "spacing", {
        /**
         * Defines the space between the component with the `item` attribute.
         * Support breakpoints
         */
        get: /**
         * Defines the space between the component with the `item` attribute.
         * Support breakpoints
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
                this._createSpacingClass(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Only one param must be defined
     */
    /**
     * Only one param must be defined
     * @private
     * @param {?=} xy
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    LyGrid.prototype._createSpacingClass = /**
     * Only one param must be defined
     * @private
     * @param {?=} xy
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    function (xy, x, y) {
        /** @type {?} */
        var newSpacingClass = this.theme.addStyle("lyGrid-spacing:" + xy + "\u00B7" + x + "\u00B7" + y, function (theme) {
            /** @type {?} */
            var val = xy || x || y;
            /** @type {?} */
            var spacingStyles = {};
            eachMedia(val, function (value, media) {
                /** @type {?} */
                var valuePadding = (+value) / 2 + "px";
                /** @type {?} */
                var padding = xy != null
                    ? valuePadding
                    : x != null
                        ? "0 " + valuePadding
                        : valuePadding + " 0";
                if (media) {
                    spacingStyles[theme.getBreakpoint(media)] = {
                        padding: padding
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
        this._negativeMarginClass = this.theme.addStyle("lyGrid-negative-margin:" + xy + "\u00B7" + x + "\u00B7" + y, function (theme) {
            /** @type {?} */
            var val = xy || x || y;
            /** @type {?} */
            var negativeMarginStyles;
            eachMedia(val, function (value, media) {
                /** @type {?} */
                var valueMargin = (-value) / 2 + "px";
                /** @type {?} */
                var margin = xy != null
                    ? valueMargin
                    : x != null
                        ? "0 " + valueMargin
                        : valueMargin + " 0";
                /** @type {?} */
                var negativeMarginstyles = { margin: margin };
                if (xy != null || x != null) {
                    negativeMarginstyles.width = "calc(100% + " + value + "px)";
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
    };
    Object.defineProperty(LyGrid.prototype, "justify", {
        /**
         * Defines the justify-content style property.
         * Support breakpoints
         */
        get: /**
         * Defines the justify-content style property.
         * Support breakpoints
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
                    eachMedia(val, function (value, media) {
                        /** @type {?} */
                        var newJustifyStyles = {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "direction", {
        /**
         * Defines the justify-content style property.
         * Support breakpoints
         */
        get: /**
         * Defines the justify-content style property.
         * Support breakpoints
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
                    eachMedia(val, function (value, media) {
                        /** @type {?} */
                        var newDirectionStyles = {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "alignItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alignItems;
        },
        /**
         * Defines the `align-items` style property.
         * Support breakpoints
         */
        set: /**
         * Defines the `align-items` style property.
         * Support breakpoints
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._alignItems = val;
            this._alignItemsClass = this.theme.addStyle("lyGrid.align:" + val, function (theme) {
                /** @type {?} */
                var alignItemsStyles;
                eachMedia(val, function (value, media) {
                    /** @type {?} */
                    var newAlignItemsStyles = {
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
        spacingX: [{ type: Input }],
        spacingY: [{ type: Input }],
        spacing: [{ type: Input }],
        justify: [{ type: Input }],
        direction: [{ type: Input }],
        alignItems: [{ type: Input }]
    };
    return LyGrid;
}());
export { LyGrid };
if (false) {
    /**
     * Styles
     * \@docs-private
     * @type {?}
     */
    LyGrid.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._spacing;
    /** @type {?} */
    LyGrid.prototype._spacingClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._spacingX;
    /** @type {?} */
    LyGrid.prototype._spacingXClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._spacingY;
    /** @type {?} */
    LyGrid.prototype._spacingYClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._negativeMarginClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._justify;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._justifyClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._direction;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._directionClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._alignItems;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype._alignItemsClass;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    LyGrid.prototype.el;
}
var LyGridItem = /** @class */ (function () {
    function LyGridItem(gridContainer, el, theme) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
        if (!gridContainer) {
            throw new Error("Require parent <ly-grid container>");
        }
    }
    Object.defineProperty(LyGridItem.prototype, "col", {
        /**
         * Defines the number of grids
         * Support breakpoints
         */
        get: /**
         * Defines the number of grids
         * Support breakpoints
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
                        var colStyles_1;
                        eachMedia(val, function (value, media) {
                            /** @type {?} */
                            var newColStyles = getColStyle(+value);
                            if (media) {
                                if (!colStyles_1) {
                                    colStyles_1 = {};
                                }
                                colStyles_1[theme.getBreakpoint(media)] = newColStyles;
                            }
                            else {
                                colStyles_1 = newColStyles;
                            }
                        });
                        return (/** @type {?} */ (colStyles_1));
                    }
                }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGridItem.prototype, "gridItemCol", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.col = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGridItem.prototype, "order", {
        /**
         * Defines the order style property.
         * Support breakpoints
         */
        get: /**
         * Defines the order style property.
         * Support breakpoints
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
                    eachMedia("" + val, function (value, media) {
                        /** @type {?} */
                        var newOrderStyles = {
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
     * @private
     * @return {?}
     */
    LyGridItem.prototype._updateSpacing = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    LyGridItem.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]'
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
        gridItemCol: [{ type: Input, args: ['lyGridItem',] }],
        order: [{ type: Input }]
    };
    return LyGridItem;
}());
export { LyGridItem };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyGridItem.prototype._col;
    /**
     * @type {?}
     * @private
     */
    LyGridItem.prototype._colClass;
    /**
     * @type {?}
     * @private
     */
    LyGridItem.prototype._order;
    /**
     * @type {?}
     * @private
     */
    LyGridItem.prototype._orderClass;
    /**
     * @type {?}
     * @private
     */
    LyGridItem.prototype.gridContainer;
    /**
     * @type {?}
     * @private
     */
    LyGridItem.prototype.el;
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixNQUFNLFdBQVcsQ0FBQzs7SUFFMUQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFHbkIsVUFBVSxHQUFHLEVBQUc7O0lBRWhCLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkI7O0lBSUssTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7Q0FDRixDQUFDOzs7O0FBUUY7SUFzUEUsZ0JBQ1UsS0FBZSxFQUNmLEVBQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2YsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7Ozs7UUFoUGYsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWtQbEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUE1TkQsc0JBQ0ksNEJBQVE7Ozs7UUFEWjtZQUVFLE9B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QUN2QyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCLENBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CO0lBQ3JDLE9BQU8sR0FBRyxJQUFJLFVBQVU7UUFDWixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQUcsQ0FBQztBQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmV4cG9ydCB0eXBlIEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG5leHBvcnQgdHlwZSBKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdldmVubHknO1xuZXhwb3J0IHR5cGUgRGlyZWN0aW9uID0gJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZ1g6IHN0cmluZyB8IG51bWJlcjtcbiAgX3NwYWNpbmdYQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZ1k6IHN0cmluZyB8IG51bWJlcjtcbiAgX3NwYWNpbmdZQ2xhc3M/OiBzdHJpbmc7XG5cblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfYWxpZ25JdGVtczogQWxpZ25JdGVtcztcbiAgcHJpdmF0ZSBfYWxpZ25JdGVtc0NsYXNzPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nWCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nWDtcbiAgfVxuICBzZXQgc3BhY2luZ1godmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmdYKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nWCA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZVNwYWNpbmdDbGFzcyh1bmRlZmluZWQsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmdZKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdZO1xuICB9XG4gIHNldCBzcGFjaW5nWSh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZ1kpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdZID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZVNwYWNpbmdDbGFzcyh2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IG9uZSBwYXJhbSBtdXN0IGJlIGRlZmluZWRcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZVNwYWNpbmdDbGFzcyh4eT86IHN0cmluZyB8IG51bWJlciwgeD86IHN0cmluZyB8IG51bWJlciwgeT86IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7eHl9wrcke3h9wrcke3l9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgdmFsID0geHkgfHwgeCB8fCB5O1xuICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICB9ID0ge307XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlUGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB4eSAhPSBudWxsXG4gICAgICAgICAgPyB2YWx1ZVBhZGRpbmdcbiAgICAgICAgICA6IHggIT0gbnVsbFxuICAgICAgICAgICAgPyBgMCAke3ZhbHVlUGFkZGluZ31gXG4gICAgICAgICAgICA6IGAke3ZhbHVlUGFkZGluZ30gMGA7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcztcbiAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuXG4gICAgaWYgKHh5KSB7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdYQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgICB9XG4gICAgICBpZiAoeSkge1xuICAgICAgICB0aGlzLl9zcGFjaW5nWUNsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7eHl9wrcke3h9wrcke3l9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgdmFsID0geHkgfHwgeCB8fCB5O1xuICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgfTtcbiAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVNYXJnaW4gPSBgJHsoLXZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB4eSAhPSBudWxsXG4gICAgICAgICAgPyB2YWx1ZU1hcmdpblxuICAgICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgICA/IGAwICR7dmFsdWVNYXJnaW59YFxuICAgICAgICAgICAgOiBgJHt2YWx1ZU1hcmdpbn0gMGA7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzOiB7XG4gICAgICAgICAgbWFyZ2luOiBzdHJpbmdcbiAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICB9ID0geyBtYXJnaW4gfTtcblxuICAgICAgICBpZiAoeHkgIT0gbnVsbCB8fCB4ICE9IG51bGwpIHtcbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpbnN0eWxlcy53aWR0aCA9IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMhO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZnkoKTogSnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cbiAgc2V0IGp1c3RpZnkodmFsOiBKdXN0aWZ5KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5qdXN0aWZ5KSB7XG4gICAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsO1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWp1c3RpZnlTdHlsZXMpIHtcbiAgICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAganVzdGlmeVN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcyE7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG4gIHNldCBkaXJlY3Rpb24odmFsOiBEaXJlY3Rpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtZGlyZWN0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblN0eWxlczoge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvblN0eWxlcyA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzITtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlyZWN0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGFsaWduLWl0ZW1zYCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGFsaWduSXRlbXModmFsOiBBbGlnbkl0ZW1zKSB7XG4gICAgdGhpcy5fYWxpZ25JdGVtcyA9IHZhbDtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQuYWxpZ246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgbGV0IGFsaWduSXRlbXNTdHlsZXM6IHtcbiAgICAgICAgYWxpZ25JdGVtcz86IHN0cmluZyxcbiAgICAgICAgW21lZGlhOiBzdHJpbmddOiB7XG4gICAgICAgICAgYWxpZ25JdGVtcz86IHN0cmluZ1xuICAgICAgICB9IHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBbGlnbkl0ZW1zU3R5bGVzID0ge1xuICAgICAgICAgIGFsaWduSXRlbXM6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICA6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIGlmICghYWxpZ25JdGVtc1N0eWxlcykge1xuICAgICAgICAgICAgYWxpZ25JdGVtc1N0eWxlcyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0FsaWduSXRlbXNTdHlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlcyA9IG5ld0FsaWduSXRlbXNTdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFsaWduSXRlbXNTdHlsZXMhO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25JdGVtc0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduSXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSwgW2x5LWdyaWQtaXRlbV0sIFtseUdyaWRJdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbFN0eWxlcyA9IGdldENvbFN0eWxlKCt2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXMhO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCdseUdyaWRJdGVtJylcbiAgc2V0IGdyaWRJdGVtQ29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5jb2wgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgb3JkZXIgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmRlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuICBzZXQgb3JkZXIodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9yZGVyKSB7XG4gICAgICB0aGlzLl9vcmRlciA9IHZhbDtcbiAgICAgIHRoaXMuX29yZGVyQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtb3JkZXI6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgb3JkZXJTdHlsZXM6IHtcbiAgICAgICAgICBvcmRlcj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEoYCR7dmFsfWAsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcmRlclN0eWxlcyA9IHtcbiAgICAgICAgICAgIG9yZGVyOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZSBwYXJlbnQgPGx5LWdyaWQgY29udGFpbmVyPmApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdYQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nWENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdZQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nWUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIl19