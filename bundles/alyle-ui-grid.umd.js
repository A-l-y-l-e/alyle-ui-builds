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
                    this._createSpacingClass(null, val);
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
                    this._createSpacingClass(null, null, val);
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
         * @param {?=} xy
         * @param {?=} x
         * @param {?=} y
         * @return {?}
         */
        LyGrid.prototype._createSpacingClass = /**
         * Only one param must be defined
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
                    ui.eachMedia(val, function (value, media, len) {
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
                this._alignItemsClass = this.theme.addStyle("lyGrid.align:" + val, function (theme) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgQ09MX1ZBTFVFUyA9IHsgfTtcblxuY29uc3QgQUxJR05fQUxJQVMgPSB7XG4gIHJvd1JldmVyc2U6ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2U6ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlOiAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQ6ICdmbGV4LXN0YXJ0JyxcbiAgZW5kOiAnZmxleC1lbmQnLFxuICBiZXR3ZWVuOiAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZDogJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seTogJ3NwYWNlLWV2ZW5seScsXG59O1xuXG5leHBvcnQgdHlwZSBBbGlnbkl0ZW1zID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxuZXhwb3J0IHR5cGUgSnVzdGlmeSA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JztcbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZSc7XG5cbi8qKlxuICogR3JpZCBjb250YWluZXJcbiAqIGV4YW1wbGU6XG4gKiA8bHktZ3JpZCBjb250YWluZXIgW3NwYWNpbmddPVwiJzE2IDhAWFNtYWxsJ1wiPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogPC9seS1ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9zcGFjaW5nWDogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ1hDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NwYWNpbmdZOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nWUNsYXNzOiBzdHJpbmc7XG5cblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfYWxpZ25JdGVtczogQWxpZ25JdGVtcztcbiAgcHJpdmF0ZSBfYWxpZ25JdGVtc0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmdYKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdYO1xuICB9XG4gIHNldCBzcGFjaW5nWCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZ1gpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdYID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKG51bGwsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmdZKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdZO1xuICB9XG4gIHNldCBzcGFjaW5nWSh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZ1kpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdZID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKG51bGwsIG51bGwsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgb25lIHBhcmFtIG11c3QgYmUgZGVmaW5lZFxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlU3BhY2luZ0NsYXNzKHh5Pzogc3RyaW5nIHwgbnVtYmVyLCB4Pzogc3RyaW5nIHwgbnVtYmVyLCB5Pzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3U3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt4eX3DgsK3JHt4fcOCwrcke3l9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgdmFsID0geHkgfHwgeCB8fCB5O1xuICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICB9ID0ge307XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlUGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB4eSAhPSBudWxsXG4gICAgICAgICAgPyB2YWx1ZVBhZGRpbmdcbiAgICAgICAgICA6IHggIT0gbnVsbFxuICAgICAgICAgICAgPyBgMCAke3ZhbHVlUGFkZGluZ31gXG4gICAgICAgICAgICA6IGAke3ZhbHVlUGFkZGluZ30gMGA7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcztcbiAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuXG4gICAgaWYgKHh5KSB7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdYQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgICB9XG4gICAgICBpZiAoeSkge1xuICAgICAgICB0aGlzLl9zcGFjaW5nWUNsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7eHl9w4LCtyR7eH3DgsK3JHt5fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHh5IHx8IHggfHwgeTtcbiAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVNYXJnaW4gPSBgJHsoLXZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB4eSAhPSBudWxsXG4gICAgICAgICAgPyB2YWx1ZU1hcmdpblxuICAgICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgICA/IGAwICR7dmFsdWVNYXJnaW59YFxuICAgICAgICAgICAgOiBgJHt2YWx1ZU1hcmdpbn0gMGA7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzOiB7XG4gICAgICAgICAgbWFyZ2luOiBzdHJpbmdcbiAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICB9ID0geyBtYXJnaW4gfTtcblxuICAgICAgICBpZiAoeHkgIT0gbnVsbCB8fCB4ICE9IG51bGwpIHtcbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpbnN0eWxlcy53aWR0aCA9IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5lZ2F0aXZlTWFyZ2luU3R5bGVzO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZnkoKTogSnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cbiAgc2V0IGp1c3RpZnkodmFsOiBKdXN0aWZ5KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5qdXN0aWZ5KSB7XG4gICAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsO1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ25JdGVtcyh2YWw6IEFsaWduSXRlbXMpIHtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gdmFsO1xuICAgIHRoaXMuX2FsaWduSXRlbXNDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC5hbGlnbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgYWxpZ25JdGVtc1N0eWxlczoge1xuICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nLFxuICAgICAgICBbbWVkaWE6IHN0cmluZ106IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nXG4gICAgICAgIH0gfCBzdHJpbmdcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FsaWduSXRlbXNTdHlsZXMgPSB7XG4gICAgICAgICAgYWxpZ25JdGVtczogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICBpZiAoIWFsaWduSXRlbXNTdHlsZXMpIHtcbiAgICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGlnbkl0ZW1zU3R5bGVzO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25JdGVtc0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduSXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG9yZGVyIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgb3JkZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5fb3JkZXIgPSB2YWw7XG4gICAgICB0aGlzLl9vcmRlckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW9yZGVyOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IG9yZGVyU3R5bGVzOiB7XG4gICAgICAgICAgb3JkZXI/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKGAke3ZhbH1gLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBvcmRlcjogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXM7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX29yZGVyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCA8bHktZ3JpZCBjb250YWluZXI+YCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1hDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdYQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1lDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdZQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldENvbFN0eWxlKHZhbDogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgbWF4V2lkdGg6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogJzEwMCUnLFxuICAgIGZsZXhCYXNpczogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAwLFxuICAgIGZsZXhHcm93OiB2YWwgPyAwIDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xWYWwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsIGluIENPTF9WQUxVRVNcbiAgICAgICAgICAgICAgPyBDT0xfVkFMVUVTW3ZhbF1cbiAgICAgICAgICAgICAgOiBDT0xfVkFMVUVTW3ZhbF0gPSBgJHsrdmFsICogMTAwIC8gMTJ9JWA7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlHcmlkLCBMeUdyaWRJdGVtIH0gZnJvbSAnLi9ncmlkJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5R3JpZCwgTHlHcmlkSXRlbV0sXG4gIGRlY2xhcmF0aW9uczogW0x5R3JpZCwgTHlHcmlkSXRlbV1cbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImVhY2hNZWRpYSIsIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O1FBR25CLFVBQVUsR0FBRyxFQUFHOztRQUVoQixXQUFXLEdBQUc7UUFDbEIsVUFBVSxFQUFFLGFBQWE7UUFDekIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixXQUFXLEVBQUUsY0FBYztRQUMzQixLQUFLLEVBQUUsWUFBWTtRQUNuQixHQUFHLEVBQUUsVUFBVTtRQUNmLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLE1BQU0sRUFBRSxjQUFjO0tBQ3ZCOztRQUlLLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsWUFBWTtTQUN4QjtLQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFpQkY7UUFzUEUsZ0JBQ1UsS0FBZSxFQUNmLEVBQWM7WUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFVO1lBQ2YsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7Ozs7WUFoUGYsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztZQWtQbEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxD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