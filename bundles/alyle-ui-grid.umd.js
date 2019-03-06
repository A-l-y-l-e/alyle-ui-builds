(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@alyle/ui', '@angular/core'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.grid = {}),global.ly.core,global.ng.core));
}(this, (function (exports,ui,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
             */ function () {
                return this._spacingX;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
                return this._spacingY;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
                return this._spacing;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
                    ui.eachMedia(val, function (value, media) {
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
                    ui.eachMedia(val, function (value, media) {
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
                    return ( /** @type {?} */(negativeMarginStyles));
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
                        ui.eachMedia(val, function (value, media) {
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
                        return ( /** @type {?} */(justifyStyles));
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
                        ui.eachMedia(val, function (value, media) {
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
                        return ( /** @type {?} */(directionStyles));
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
                this._alignItemsClass = this.theme.addStyle("lyGrid.align:" + val, function (theme) {
                    /** @type {?} */
                    var alignItemsStyles;
                    ui.eachMedia(val, function (value, media) {
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
                    return ( /** @type {?} */(alignItemsStyles));
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
            spacingX: [{ type: core.Input }],
            spacingY: [{ type: core.Input }],
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
                            ui.eachMedia(val, function (value, media) {
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
                            return ( /** @type {?} */(colStyles_1));
                        }
                    }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGridItem.prototype, "gridItemCol", {
            get: /**
             * @return {?}
             */ function () {
                return this.col;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
                        ui.eachMedia("" + val, function (value, media) {
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
                        return ( /** @type {?} */(orderStyles));
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
            { type: core.Directive, args: [{
                        selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]'
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
            gridItemCol: [{ type: core.Input, args: ['lyGridItem',] }],
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

    exports.LyGrid = LyGrid;
    exports.LyGridItem = LyGridItem;
    exports.LyGridModule = LyGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-grid.umd.js.map