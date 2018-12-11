/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.el.nativeElement.classList.add(this.classes.root);
    }
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
                this._spacingClass = this.theme.addStyle("lyGrid-spacing:" + val, function (theme) {
                    if (typeof val === 'number') {
                        return (/** @type {?} */ ("padding:" + val / 2 + "px;"));
                    }
                    else {
                        /** @type {?} */
                        var spacingStyles_1 = {};
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var padding = (+value) / 2 + "px";
                            if (len) {
                                spacingStyles_1[theme.getBreakpoint(media)] = {
                                    padding: padding
                                };
                            }
                            else {
                                spacingStyles_1.padding = padding;
                            }
                        });
                        return spacingStyles_1;
                    }
                }, undefined, undefined, STYLE_PRIORITY);
                this._negativeMarginClass = this.theme.addStyle("lyGrid-negative-margin:" + val, function (theme) {
                    if (typeof val === 'number') {
                        return (/** @type {?} */ ("margin:" + val / -2 + "px;width: calc(100% + " + val + "px);"));
                    }
                    else {
                        /** @type {?} */
                        var negativeMarginStyles_1;
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
                                negativeMarginStyles_1[theme.getBreakpoint(media)] = negativeMarginstyles;
                            }
                            else {
                                negativeMarginStyles_1 = negativeMarginstyles;
                            }
                        });
                        return negativeMarginStyles_1;
                    }
                }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "spacingClass", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._spacingClass;
        },
        enumerable: true,
        configurable: true
    });
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
                            justifyStyles[theme.getBreakpoint(media)] = newJustifyStyles;
                        }
                        else {
                            justifyStyles = newJustifyStyles;
                        }
                    });
                    return justifyStyles;
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
                            directionStyles[theme.getBreakpoint(media)] = newDirectionStyles;
                        }
                        else {
                            directionStyles = newDirectionStyles;
                        }
                    });
                    return directionStyles;
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
                eachMedia(val, function (value, media, isMedia) {
                    /** @type {?} */
                    var newAlignItemsStyles = {
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
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var newColStyles = getColStyle(+value);
                            if (len) {
                                if (!colStyles_1) {
                                    colStyles_1 = {};
                                }
                                colStyles_1[theme.getBreakpoint(media)] = newColStyles;
                            }
                            else {
                                colStyles_1 = newColStyles;
                            }
                        });
                        return colStyles_1;
                    }
                }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
            }
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
                    eachMedia("" + val, function (value, media, isMedia) {
                        /** @type {?} */
                        var newOrderStyles = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixNQUFNLFdBQVcsQ0FBQzs7SUFFMUQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFHbkIsVUFBVSxHQUFHLEVBQUc7O0lBRWhCLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkI7O0lBSUssTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FBaUJGO0lBa01FLGdCQUNVLEtBQWUsRUFDZixFQUFjO1FBRGQsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUNmLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7O1FBNUx4QixZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBOEx6RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQTNLRCxzQkFDSSwyQkFBTztRQUxY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QkExVWIsVUFBVTtnQkFDckIsUUFBUTs7O3NCQW9RZCxLQUFLO3dCQXVDTCxLQUFLOztJQWlEUixpQkFBQztDQUFBLEFBdEdELElBc0dDO1NBbkdZLFVBQVU7OztJQUNyQiwwQkFBOEI7O0lBQzlCLCtCQUEwQjs7SUFFMUIsNEJBQWdDOztJQUNoQyxpQ0FBNEI7O0lBMkUxQixtQ0FBNkI7O0lBQzdCLHdCQUFzQjs7SUFDdEIsMkJBQXVCOzs7Ozs7QUFtQjNCLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFDOUIsT0FBTztRQUNMLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUN2QyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCLENBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CO0lBQ3JDLE9BQU8sR0FBRyxJQUFJLFVBQVU7UUFDWixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQUcsQ0FBQztBQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmV4cG9ydCB0eXBlIEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG5leHBvcnQgdHlwZSBKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdldmVubHknO1xuZXhwb3J0IHR5cGUgRGlyZWN0aW9uID0gJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICogZXhhbXBsZTpcbiAqIDxseS1ncmlkIGNvbnRhaW5lciBbc3BhY2luZ109XCInMTYgOEBYU21hbGwnXCI+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiA8L2x5LWdyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BhY2luZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2FsaWduSXRlbXM6IEFsaWduSXRlbXM7XG4gIHByaXZhdGUgX2FsaWduSXRlbXNDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBwYWRkaW5nOiR7dmFsIC8gMn1weDtgIGFzIGFueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgIGFzIGFueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXMgPSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYCR7KC12YWx1ZSkgLyAyfXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeSA9IHZhbDtcbiAgICAgIHRoaXMuX2p1c3RpZnlDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1qdXN0aWZ5OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGp1c3RpZnlTdHlsZXM6IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SnVzdGlmeVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWp1c3RpZnlTdHlsZXMpIHtcbiAgICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAganVzdGlmeVN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcztcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fanVzdGlmeUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWw7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblN0eWxlcztcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlyZWN0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGFsaWduLWl0ZW1zYCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGFsaWduSXRlbXModmFsOiBBbGlnbkl0ZW1zKSB7XG4gICAgdGhpcy5fYWxpZ25JdGVtcyA9IHZhbDtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQuYWxpZ246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgbGV0IGFsaWduSXRlbXNTdHlsZXM6IHtcbiAgICAgICAgYWxpZ25JdGVtcz86IHN0cmluZyxcbiAgICAgICAgW21lZGlhOiBzdHJpbmddOiB7XG4gICAgICAgICAgYWxpZ25JdGVtcz86IHN0cmluZ1xuICAgICAgICB9IHwgc3RyaW5nXG4gICAgICB9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBbGlnbkl0ZW1zU3R5bGVzID0ge1xuICAgICAgICAgIGFsaWduSXRlbXM6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICA6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgaWYgKCFhbGlnbkl0ZW1zU3R5bGVzKSB7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3QWxpZ25JdGVtc1N0eWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzID0gbmV3QWxpZ25JdGVtc1N0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWxpZ25JdGVtc1N0eWxlcztcbiAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FsaWduSXRlbXNDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnbkl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbkl0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZEl0ZW0gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9jb2w6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9vcmRlcjogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9vcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkc1xuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb2wpIHtcbiAgICAgIHRoaXMuX2NvbCA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWNvbDoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBnZXRDb2xTdHlsZSh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBjb2xTdHlsZXM6IHtcbiAgICAgICAgICAgIG1heFdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4QmFzaXM/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhHcm93PzogbnVtYmVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbFN0eWxlcyA9IGdldENvbFN0eWxlKCt2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghY29sU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgY29sU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29sU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBvcmRlciBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gdmFsO1xuICAgICAgdGhpcy5fb3JkZXJDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1vcmRlcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBvcmRlclN0eWxlczoge1xuICAgICAgICAgIG9yZGVyPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYShgJHt2YWx9YCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld09yZGVyU3R5bGVzID0ge1xuICAgICAgICAgICAgb3JkZXI6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFvcmRlclN0eWxlcykge1xuICAgICAgICAgICAgICBvcmRlclN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JkZXJTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9yZGVyU3R5bGVzO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZSBwYXJlbnQgZ3JpZGApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldENvbFN0eWxlKHZhbDogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgbWF4V2lkdGg6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogJzEwMCUnLFxuICAgIGZsZXhCYXNpczogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAwLFxuICAgIGZsZXhHcm93OiB2YWwgPyAwIDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xWYWwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsIGluIENPTF9WQUxVRVNcbiAgICAgICAgICAgICAgPyBDT0xfVkFMVUVTW3ZhbF1cbiAgICAgICAgICAgICAgOiBDT0xfVkFMVUVTW3ZhbF0gPSBgJHsrdmFsICogMTAwIC8gMTJ9JWA7XG59XG4iXX0=