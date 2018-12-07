(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.grid = {}),global.ng.core,global.ly.core));
}(this, (function (exports,core,ui) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
             */ function () {
                return this._spacing;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.spacing) {
                    this._spacing = val;
                    this._spacingClass = this.theme.addStyle("lyGrid-spacing:" + val, function (theme) {
                        if (typeof val === 'number') {
                            return ( /** @type {?} */("padding:" + val / 2 + "px;"));
                        }
                        else {
                            /** @type {?} */
                            var spacingStyles_1 = {};
                            ui.eachMedia(val, function (value, media, len) {
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
                            return ( /** @type {?} */("margin:" + val / -2 + "px;width: calc(100% + " + val + "px);"));
                        }
                        else {
                            /** @type {?} */
                            var negativeMarginStyles_1;
                            ui.eachMedia(val, function (value, media, len) {
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
             */ function () {
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
             */ function () {
                return this._justify;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.justify) {
                    this._justify = val;
                    this._justifyClass = this.theme.addStyle("lyGrid-justify:" + val, function (theme) {
                        /** @type {?} */
                        var justifyStyles;
                        ui.eachMedia(val, function (value, media, isMedia) {
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
             */ function () {
                return this._direction;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.direction) {
                    this._direction = val;
                    this._directionClass = this.theme.addStyle("lyGrid-direction:" + val, function (theme) {
                        /** @type {?} */
                        var directionStyles;
                        ui.eachMedia(val, function (value, media, isMedia) {
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
             */ function () {
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
             */ function (val) {
                this._alignItems = val;
                this._alignItemsClass = this.theme.addStyle("lyGrid-direction:" + val, function (theme) {
                    /** @type {?} */
                    var alignItemsStyles;
                    ui.eachMedia(val, function (value, media, isMedia) {
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
            { type: core.Directive, args: [{
                        selector: 'ly-grid[container]'
                    },] }
        ];
        /** @nocollapse */
        LyGrid.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef }
            ];
        };
        LyGrid.propDecorators = {
            spacing: [{ type: core.Input }],
            justify: [{ type: core.Input }],
            direction: [{ type: core.Input }],
            alignItems: [{ type: core.Input }]
        };
        return LyGrid;
    }());
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
             */ function () {
                return this._col;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.col) {
                    this._col = val;
                    this._colClass = this.theme.addStyle("lyGrid-col:" + val, function (theme) {
                        if (typeof val === 'number') {
                            return getColStyle(val);
                        }
                        else {
                            /** @type {?} */
                            var colStyles_1;
                            ui.eachMedia(val, function (value, media, len) {
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
             */ function () {
                return this._order;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.order) {
                    this._order = val;
                    this._orderClass = this.theme.addStyle("lyGrid-order:" + val, function (theme) {
                        /** @type {?} */
                        var orderStyles;
                        ui.eachMedia("" + val, function (value, media, isMedia) {
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
            { type: core.Directive, args: [{
                        selector: 'ly-grid[item]'
                    },] }
        ];
        /** @nocollapse */
        LyGridItem.ctorParameters = function () {
            return [
                { type: LyGrid },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyGridItem.propDecorators = {
            col: [{ type: core.Input }],
            order: [{ type: core.Input }]
        };
        return LyGridItem;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyGridModule = /** @class */ (function () {
        function LyGridModule() {
        }
        LyGridModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyGrid, LyGridItem],
                        declarations: [LyGrid, LyGridItem]
                    },] }
        ];
        return LyGridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyGrid = LyGrid;
    exports.LyGridItem = LyGridItem;
    exports.LyGridModule = LyGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgQ09MX1ZBTFVFUyA9IHsgfTtcblxuY29uc3QgQUxJR05fQUxJQVMgPSB7XG4gIHJvd1JldmVyc2U6ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2U6ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlOiAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQ6ICdmbGV4LXN0YXJ0JyxcbiAgZW5kOiAnZmxleC1lbmQnLFxuICBiZXR3ZWVuOiAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZDogJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seTogJ3NwYWNlLWV2ZW5seScsXG59O1xuXG5leHBvcnQgdHlwZSBBbGlnbkl0ZW1zID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxuZXhwb3J0IHR5cGUgSnVzdGlmeSA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JztcbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZSc7XG5cbi8qKlxuICogR3JpZCBjb250YWluZXJcbiAqIGV4YW1wbGU6XG4gKiA8bHktZ3JpZCBjb250YWluZXIgW3NwYWNpbmddPVwiJzE2IDhAWFNtYWxsJ1wiPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogPC9seS1ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3NwYWNpbmdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9qdXN0aWZ5OiBKdXN0aWZ5O1xuICBwcml2YXRlIF9qdXN0aWZ5Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9hbGlnbkl0ZW1zOiBBbGlnbkl0ZW1zO1xuICBwcml2YXRlIF9hbGlnbkl0ZW1zQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGBpdGVtYCBhdHRyaWJ1dGUuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YCBhcyBhbnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICAgICAgcGFkZGluZz86IHN0cmluZ1xuICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHsoK3ZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYG1hcmdpbjoke3ZhbCAvIC0yfXB4O3dpZHRoOiBjYWxjKDEwMCUgKyAke3ZhbH1weCk7YCBhcyBhbnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzID0ge1xuICAgICAgICAgICAgICBtYXJnaW46IGAkeygtdmFsdWUpIC8gMn1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG5lZ2F0aXZlTWFyZ2luU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBnZXQgc3BhY2luZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nQ2xhc3M7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmeSgpOiBKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuICBzZXQganVzdGlmeSh2YWw6IEp1c3RpZnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmp1c3RpZnkpIHtcbiAgICAgIHRoaXMuX2p1c3RpZnkgPSB2YWw7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnlTdHlsZXM7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG4gIHNldCBkaXJlY3Rpb24odmFsOiBEaXJlY3Rpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtZGlyZWN0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblN0eWxlczoge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvblN0eWxlcyA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uU3R5bGVzKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXM7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RpcmVjdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBhbGlnbi1pdGVtc2Agc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbkl0ZW1zKHZhbDogQWxpZ25JdGVtcykge1xuICAgIHRoaXMuX2FsaWduSXRlbXMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25JdGVtc0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgYWxpZ25JdGVtc1N0eWxlczoge1xuICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nLFxuICAgICAgICBbbWVkaWE6IHN0cmluZ106IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nXG4gICAgICAgIH0gfCBzdHJpbmdcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FsaWduSXRlbXNTdHlsZXMgPSB7XG4gICAgICAgICAgYWxpZ25JdGVtczogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICBpZiAoIWFsaWduSXRlbXNTdHlsZXMpIHtcbiAgICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGlnbkl0ZW1zU3R5bGVzO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25JdGVtc0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduSXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG9yZGVyIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgb3JkZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5fb3JkZXIgPSB2YWw7XG4gICAgICB0aGlzLl9vcmRlckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW9yZGVyOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IG9yZGVyU3R5bGVzOiB7XG4gICAgICAgICAgb3JkZXI/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKGAke3ZhbH1gLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBvcmRlcjogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXM7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX29yZGVyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCBncmlkYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcyk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Q29sU3R5bGUodmFsOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXhXaWR0aDogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAnMTAwJScsXG4gICAgZmxleEJhc2lzOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6IDAsXG4gICAgZmxleEdyb3c6IHZhbCA/IDAgOiAxXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbFZhbCh2YWw6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWwgaW4gQ09MX1ZBTFVFU1xuICAgICAgICAgICAgICA/IENPTF9WQUxVRVNbdmFsXVxuICAgICAgICAgICAgICA6IENPTF9WQUxVRVNbdmFsXSA9IGAkeyt2YWwgKiAxMDAgLyAxMn0lYDtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUdyaWQsIEx5R3JpZEl0ZW0gfSBmcm9tICcuL2dyaWQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlHcmlkLCBMeUdyaWRJdGVtXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlHcmlkLCBMeUdyaWRJdGVtXVxufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiZWFjaE1lZGlhIiwiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBR00sY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7UUFHbkIsVUFBVSxHQUFHLEVBQUc7O1FBRWhCLFdBQVcsR0FBRztRQUNsQixVQUFVLEVBQUUsYUFBYTtRQUN6QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFdBQVcsRUFBRSxjQUFjO1FBQzNCLEtBQUssRUFBRSxZQUFZO1FBQ25CLEdBQUcsRUFBRSxVQUFVO1FBQ2YsT0FBTyxFQUFFLGVBQWU7UUFDeEIsTUFBTSxF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