(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.grid = {}), global.ng.core, global.ly.core));
}(this, function (exports, core, ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var STYLE_PRIORITY = -1;
    /** @docs-private */
    var COL_VALUES = {};
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
    var styles = ({
        root: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            boxSizing: 'border-box'
        },
        item: {
            '&, & :first-child': {
                boxSizing: 'border-box'
            }
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
             * @docs-private
             */
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this.el.nativeElement.classList.add(this.classes.root);
        }
        Object.defineProperty(LyGrid.prototype, "spacingX", {
            get: function () {
                return this._spacingX;
            },
            set: function (val) {
                if (val !== this.spacingX) {
                    this._spacingX = val;
                    this._createSpacingClass(undefined, val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGrid.prototype, "spacingY", {
            get: function () {
                return this._spacingY;
            },
            set: function (val) {
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
            get: function () {
                return this._spacing;
            },
            set: function (val) {
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
        LyGrid.prototype._createSpacingClass = function (xy, x, y) {
            var newSpacingClass = this.theme.addStyle("lyGrid-spacing:" + xy + "\u00B7" + x + "\u00B7" + y, function (theme) {
                var val = xy || x || y;
                var spacingStyles = {};
                ui.eachMedia(val, function (value, media) {
                    var valuePadding = (+value) / 2 + "px";
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
                var val = xy || x || y;
                var negativeMarginStyles;
                ui.eachMedia(val, function (value, media) {
                    var valueMargin = (-value) / 2 + "px";
                    var margin = xy != null
                        ? valueMargin
                        : x != null
                            ? "0 " + valueMargin
                            : valueMargin + " 0";
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
                return negativeMarginStyles;
            }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
        };
        Object.defineProperty(LyGrid.prototype, "justify", {
            /**
             * Defines the justify-content style property.
             * Support breakpoints
             */
            get: function () {
                return this._justify;
            },
            set: function (val) {
                if (val !== this.justify) {
                    this._justify = val;
                    this._justifyClass = this.theme.addStyle("lyGrid-justify:" + val, function (theme) {
                        var justifyStyles;
                        ui.eachMedia(val, function (value, media) {
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
            get: function () {
                return this._direction;
            },
            set: function (val) {
                if (val !== this.direction) {
                    this._direction = val;
                    this._directionClass = this.theme.addStyle("lyGrid-direction:" + val, function (theme) {
                        var directionStyles;
                        ui.eachMedia(val, function (value, media) {
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
                        return directionStyles;
                    }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGrid.prototype, "alignItems", {
            get: function () {
                return this._alignItems;
            },
            /**
             * Defines the `align-items` style property.
             * Support breakpoints
             */
            set: function (val) {
                this._alignItems = val;
                this._alignItemsClass = this.theme.addStyle("lyGrid.align:" + val, function (theme) {
                    var alignItemsStyles;
                    ui.eachMedia(val, function (value, media) {
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
                    return alignItemsStyles;
                }, this.el.nativeElement, this._alignItemsClass, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyGrid.prototype, "spacingX", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyGrid.prototype, "spacingY", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyGrid.prototype, "spacing", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyGrid.prototype, "justify", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyGrid.prototype, "direction", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyGrid.prototype, "alignItems", null);
        LyGrid = __decorate([
            core.Directive({
                selector: 'ly-grid[container]'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef])
        ], LyGrid);
        return LyGrid;
    }());
    var LyGridItem = /** @class */ (function () {
        function LyGridItem(gridContainer, el, renderer, theme) {
            this.gridContainer = gridContainer;
            this.el = el;
            this.theme = theme;
            if (!gridContainer) {
                throw new Error("Require parent <ly-grid container>");
            }
            renderer.addClass(el.nativeElement, this.gridContainer.classes.item);
        }
        Object.defineProperty(LyGridItem.prototype, "col", {
            /**
             * Defines the number of grids
             * Support breakpoints
             */
            get: function () {
                return this._col;
            },
            set: function (val) {
                if (val !== this.col) {
                    this._col = val;
                    this._colClass = this.theme.addStyle("lyGrid-col:" + val, function (theme) {
                        if (typeof val === 'number') {
                            return getColStyle(val);
                        }
                        else {
                            var colStyles_1;
                            ui.eachMedia(val, function (value, media) {
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
                            return colStyles_1;
                        }
                    }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGridItem.prototype, "gridItemCol", {
            get: function () {
                return this.col;
            },
            set: function (val) {
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
            get: function () {
                return this._order;
            },
            set: function (val) {
                if (val !== this.order) {
                    this._order = val;
                    this._orderClass = this.theme.addStyle("lyGrid-order:" + val, function (theme) {
                        var orderStyles;
                        ui.eachMedia("" + val, function (value, media) {
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
                        return orderStyles;
                    }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyGridItem.prototype.ngOnInit = function () {
            this._updateSpacing();
        };
        LyGridItem.prototype._updateSpacing = function () {
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
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyGridItem.prototype, "col", null);
        __decorate([
            core.Input('lyGridItem'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyGridItem.prototype, "gridItemCol", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyGridItem.prototype, "order", null);
        LyGridItem = __decorate([
            core.Directive({
                selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]'
            }),
            __metadata("design:paramtypes", [LyGrid,
                core.ElementRef,
                core.Renderer2,
                ui.LyTheme2])
        ], LyGridItem);
        return LyGridItem;
    }());
    function getColStyle(val) {
        return {
            maxWidth: val ? getColVal(val) : '100%',
            flexBasis: val ? getColVal(val) : 0,
            flexGrow: val ? 0 : 1
        };
    }
    function getColVal(val) {
        return val in COL_VALUES
            ? COL_VALUES[val]
            : COL_VALUES[val] = +val * 100 / 12 + "%";
    }

    var LyGridModule = /** @class */ (function () {
        function LyGridModule() {
        }
        LyGridModule = __decorate([
            core.NgModule({
                exports: [LyGrid, LyGridItem],
                declarations: [LyGrid, LyGridItem]
            })
        ], LyGridModule);
        return LyGridModule;
    }());

    exports.LyGrid = LyGrid;
    exports.LyGridItem = LyGridItem;
    exports.LyGridModule = LyGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-grid.umd.js.map
