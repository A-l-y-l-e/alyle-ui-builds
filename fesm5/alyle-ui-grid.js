import { __decorate } from 'tslib';
import { ElementRef, Input, Directive, Renderer2, NgModule } from '@angular/core';
import { eachMedia, LyTheme2, StyleCollection, StyleRenderer, LyHostClass } from '@alyle/ui';

var STYLE_PRIORITY = -1;
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
var STYLES = function () { return ({
    $priority: STYLE_PRIORITY,
    $name: LyGrid.и,
    root: function (className) { return className + "{width:100%;display:flex;flex-wrap:wrap;box-sizing:border-box;}"; },
    item: function (className) { return className + "," + className + " :first-child{box-sizing:border-box;}"; }
}); };
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
        this.classes = this.theme.renderStyleSheet(STYLES);
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
            var val = (xy || x || y);
            var spacingStyles = {};
            eachMedia(val, function (value, media) {
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
            var val = (xy || x || y);
            var negativeMarginStyles;
            eachMedia(val, function (value, media) {
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
                    eachMedia(val, function (value, media) {
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
                    eachMedia(val, function (value, media) {
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
                eachMedia(val, function (value, media) {
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
    LyGrid.и = 'LyGrid';
    LyGrid.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], LyGrid.prototype, "spacingX", null);
    __decorate([
        Input()
    ], LyGrid.prototype, "spacingY", null);
    __decorate([
        Input()
    ], LyGrid.prototype, "spacing", null);
    __decorate([
        Input()
    ], LyGrid.prototype, "justify", null);
    __decorate([
        Input()
    ], LyGrid.prototype, "direction", null);
    __decorate([
        Input()
    ], LyGrid.prototype, "alignItems", null);
    LyGrid = __decorate([
        Directive({
            selector: 'ly-grid[container]'
        })
    ], LyGrid);
    return LyGrid;
}());
var LyGridItem = /** @class */ (function () {
    function LyGridItem(gridContainer, el, renderer, theme, _sr) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
        this._sr = _sr;
        if (!gridContainer) {
            throw new Error("Require parent <ly-grid container>");
        }
        renderer.addClass(el.nativeElement, this.gridContainer.classes.item);
    }
    LyGridItem_1 = LyGridItem;
    Object.defineProperty(LyGridItem.prototype, "col", {
        /**
         * Defines the number of grids
         * Support breakpoints
         */
        get: function () {
            return this._col;
        },
        set: function (val) {
            var newVal = this._col = val || 0;
            this._colClass = this._sr.add(LyGridItem_1.и + "--col-" + newVal, function (theme) {
                var medias = new StyleCollection();
                eachMedia(newVal, function (value, media) {
                    if (typeof value === 'string') {
                        throw new Error(LyGridItem_1.и + ": '" + val + "' is not valid.");
                    }
                    var maxWidth = value ? value * 100 / 12 : 100;
                    var flexBasis = value ? value * 100 / 12 : 0;
                    var flexGrow = value ? 0 : 1;
                    if (media) {
                        medias.add(function (className) { return "@media " + theme.breakpoints[media] + "{" + className + "{max-width:" + maxWidth + "%;flex-basis:" + flexBasis + "%;flex-grow:" + flexGrow + ";}}"; });
                    }
                    else {
                        medias.add(function (className) { return className + "{max-width:" + maxWidth + "%;flex-basis:" + flexBasis + "%;flex-grow:" + flexGrow + ";}"; });
                    }
                });
                return medias.css;
            }, STYLE_PRIORITY, this._colClass);
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
                    eachMedia("" + val, function (value, media) {
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
    var LyGridItem_1;
    LyGridItem.и = 'LyGridItem';
    LyGridItem.ctorParameters = function () { return [
        { type: LyGrid },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: StyleRenderer }
    ]; };
    __decorate([
        Input()
    ], LyGridItem.prototype, "col", null);
    __decorate([
        Input('lyGridItem')
    ], LyGridItem.prototype, "gridItemCol", null);
    __decorate([
        Input()
    ], LyGridItem.prototype, "order", null);
    LyGridItem = LyGridItem_1 = __decorate([
        Directive({
            selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]',
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
    ], LyGridItem);
    return LyGridItem;
}());

var LyGridModule = /** @class */ (function () {
    function LyGridModule() {
    }
    LyGridModule = __decorate([
        NgModule({
            exports: [LyGrid, LyGridItem],
            declarations: [LyGrid, LyGridItem]
        })
    ], LyGridModule);
    return LyGridModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyGrid, LyGridItem, LyGridModule, STYLES };
//# sourceMappingURL=alyle-ui-grid.js.map
