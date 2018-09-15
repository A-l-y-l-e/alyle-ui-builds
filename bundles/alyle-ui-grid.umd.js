(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.grid = {}),global.ng.core,global.alyle.ui));
}(this, (function (exports,core,ui) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    /** @type {?} */
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
             * @ignore
             */
            this.classes = this.theme.addStyleSheet(styles, 'lyGrid', STYLE_PRIORITY);
            this.el.nativeElement.classList.add(this.classes.root);
        }
        Object.defineProperty(LyGrid.prototype, "spacing", {
            /**
             * Defines the space between the component with the `item` attribute.
             */
            get: /**
             * Defines the space between the component with the `item` attribute.
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
                            return "padding:" + val / 2 + "px;";
                        }
                        else {
                            /** @type {?} */
                            var spacingStyles_1 = {};
                            ui.eachMedia(val, function (value, media, len) {
                                /** @type {?} */
                                var padding = (+value) / 2 + "px";
                                if (len) {
                                    // spacingStyles[`@media ${this.mediaQueries[media]}`] = {
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
                                    // negativeMarginStyles[`@media ${this.mediaQueries[media]}`] = negativeMarginstyles;
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: 'ly-grid[container]'
                    },] },
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
            direction: [{ type: core.Input }]
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
            /** Defines the number of grids */
            get: /**
             * Defines the number of grids
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
                            var colStyles_1 = void 0;
                            ui.eachMedia(val, function (value, media, len) {
                                /** @type {?} */
                                var newColStyles = getColStyle(+value);
                                if (len) {
                                    if (!colStyles_1) {
                                        colStyles_1 = {};
                                    }
                                    // colStyles[`@media ${this.mediaQueries[media]}`] = newColStyles;
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
            { type: core.Directive, args: [{
                        selector: 'ly-grid[item]'
                    },] },
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyGridModule = /** @class */ (function () {
        function LyGridModule() {
        }
        LyGridModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyGrid, LyGridItem],
                        declarations: [LyGrid, LyGridItem]
                    },] },
        ];
        return LyGridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyGrid = LyGrid;
    exports.LyGridItem = LyGridItem;
    exports.LyGridModule = LyGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG50eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvdy1yZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtbi1yZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICogZXhhbXBsZTpcbiAqIDxseS1ncmlkIGNvbnRhaW5lciBbc3BhY2luZ109XCInMTYgOEBYU21hbGwnXCI+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiA8L2x5LWdyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5R3JpZCcsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3NwYWNpbmdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9qdXN0aWZ5OiBKdXN0aWZ5O1xuICBwcml2YXRlIF9qdXN0aWZ5Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGBpdGVtYCBhdHRyaWJ1dGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fc3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYHBhZGRpbmc6JHt2YWwgLyAyfXB4O2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICAgICAgcGFkZGluZz86IHN0cmluZ1xuICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHsoK3ZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICAvLyBzcGFjaW5nU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYG1hcmdpbjoke3ZhbCAvIC0yfXB4O3dpZHRoOiBjYWxjKDEwMCUgKyAke3ZhbH1weCk7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXMgPSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYCR7KC12YWx1ZSkgLyAyfXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeSA9IHZhbDtcbiAgICAgIHRoaXMuX2p1c3RpZnlDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1qdXN0aWZ5OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGp1c3RpZnlTdHlsZXM6IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SnVzdGlmeVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWp1c3RpZnlTdHlsZXMpIHtcbiAgICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ganVzdGlmeVN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnlTdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpcmVjdGlvblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfb3JkZXI6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfb3JkZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sKSB7XG4gICAgICB0aGlzLl9jb2wgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1jb2w6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q29sU3R5bGUodmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29sU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXhXaWR0aD86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEJhc2lzPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4R3Jvdz86IG51bWJlclxuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2xTdHlsZXMgPSBnZXRDb2xTdHlsZSgrdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIWNvbFN0eWxlcykge1xuICAgICAgICAgICAgICAgIGNvbFN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGNvbFN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qKiBEZWZpbmVzIHRoZSBvcmRlciBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gdmFsO1xuICAgICAgdGhpcy5fb3JkZXJDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1vcmRlcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBvcmRlclN0eWxlczoge1xuICAgICAgICAgIG9yZGVyPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYShgJHt2YWx9YCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld09yZGVyU3R5bGVzID0ge1xuICAgICAgICAgICAgb3JkZXI6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFvcmRlclN0eWxlcykge1xuICAgICAgICAgICAgICBvcmRlclN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3JkZXJTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgICAgb3JkZXJTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9yZGVyU3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fb3JkZXJDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgcGFyZW50IGdyaWRgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5R3JpZCwgTHlHcmlkSXRlbSB9IGZyb20gJy4vZ3JpZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUdyaWQsIEx5R3JpZEl0ZW1dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUdyaWQsIEx5R3JpZEl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJlYWNoTWVkaWEiLCJEaXJlY3RpdmUiLCJMeVRoZW1lMiIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFMUIsSUFBTSxVQUFVLEdBQUcsRUFBRyxDQUFDOztJQUV2QixJQUFNLFdBQVcsR0FBRztRQUNsQixVQUFVLEVBQUUsYUFBYTtRQUN6QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFdBQVcsRUFBRSxjQUFjO1FBQzNCLEtBQUssRUFBRSxZQUFZO1FBQ25CLEdBQUcsRUFBRSxVQUFVO1FBQ2Ys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