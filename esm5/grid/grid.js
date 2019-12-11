import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, eachMedia, ThemeVariables, StyleCollection, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
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
var styles = function () { return ({
    $priority: STYLE_PRIORITY,
    $name: LyGrid.и,
    root: function (className) { return className + "{width:100%;display:flex;flex-wrap:wrap;box-sizing:border-box;}"; },
    item: function (className) { return className + "," + className + " :first-child{box-sizing:border-box;}"; }
}); };
var ɵ0 = styles;
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
        this.classes = this.theme.renderStyleSheet(styles);
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
    tslib_1.__decorate([
        Input()
    ], LyGrid.prototype, "spacingX", null);
    tslib_1.__decorate([
        Input()
    ], LyGrid.prototype, "spacingY", null);
    tslib_1.__decorate([
        Input()
    ], LyGrid.prototype, "spacing", null);
    tslib_1.__decorate([
        Input()
    ], LyGrid.prototype, "justify", null);
    tslib_1.__decorate([
        Input()
    ], LyGrid.prototype, "direction", null);
    tslib_1.__decorate([
        Input()
    ], LyGrid.prototype, "alignItems", null);
    LyGrid = tslib_1.__decorate([
        Directive({
            selector: 'ly-grid[container]'
        })
    ], LyGrid);
    return LyGrid;
}());
export { LyGrid };
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
                        medias.add(function (className) { return "@media " + theme.breakpoints[media] + "{" + className + "{max-width:" + maxWidth + "%;;flex-basis:" + flexBasis + "%;;flex-grow:" + flexGrow + ";}}"; });
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
    tslib_1.__decorate([
        Input()
    ], LyGridItem.prototype, "col", null);
    tslib_1.__decorate([
        Input('lyGridItem')
    ], LyGridItem.prototype, "gridItemCol", null);
    tslib_1.__decorate([
        Input()
    ], LyGridItem.prototype, "order", null);
    LyGridItem = LyGridItem_1 = tslib_1.__decorate([
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
export { LyGridItem };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixJQUFNLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkIsQ0FBQztBQUlGLElBQU0sTUFBTSxHQUFHLGNBQU0sT0FBQSxDQUFDO0lBQ3BCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNmLElBQUksRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLG9FQUFpRSxFQUE3RSxDQUE2RTtJQUMxRyxJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxTQUFJLFNBQVMsMENBQXVDLEVBQWhFLENBQWdFO0NBQzlGLENBQUMsRUFMbUIsQ0FLbkIsQ0FBQzs7QUFLSDs7R0FFRztBQUlIO0lBb1BFLGdCQUNVLEtBQWUsRUFDZixFQUFjO1FBRGQsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUNmLE9BQUUsR0FBRixFQUFFLENBQVk7UUFwUHhCOzs7V0FHRztRQUNNLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBa1ByRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQTNORCxzQkFBSSw0QkFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFhLEdBQW9CO1lBQy9CLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQzs7O09BTkE7SUFTRCxzQkFBSSw0QkFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFhLEdBQW9CO1lBQy9CLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNyRDtRQUNILENBQUM7OztPQU5BO0lBYUQsc0JBQUksMkJBQU87UUFMWDs7O1dBR0c7YUFFSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBWSxHQUFvQjtZQUM5QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQzs7O09BTkE7SUFRRDs7T0FFRztJQUNLLG9DQUFtQixHQUEzQixVQUE0QixFQUFvQixFQUFFLENBQW1CLEVBQUUsQ0FBbUI7UUFDeEYsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQWtCLEVBQUUsY0FBSSxDQUFDLGNBQUksQ0FBRyxFQUFFLFVBQUMsS0FBcUI7WUFDbEcsSUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBb0IsQ0FBQztZQUM5QyxJQUFNLGFBQWEsR0FFZixFQUFFLENBQUM7WUFDUCxTQUFTLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUs7Z0JBQzFCLElBQU0sWUFBWSxHQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQUksQ0FBQztnQkFDekMsSUFBTSxPQUFPLEdBQUcsRUFBRSxJQUFJLElBQUk7b0JBQ3hCLENBQUMsQ0FBQyxZQUFZO29CQUNkLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTt3QkFDVCxDQUFDLENBQUMsT0FBSyxZQUFjO3dCQUNyQixDQUFDLENBQUksWUFBWSxPQUFJLENBQUM7Z0JBQzFCLElBQUksS0FBSyxFQUFFO29CQUNULGFBQWEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7d0JBQzFDLE9BQU8sU0FBQTtxQkFDUixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2lCQUNqQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFekMsSUFBSSxFQUFFLEVBQUU7WUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQzthQUN2QztTQUNGO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLDRCQUEwQixFQUFFLGNBQUksQ0FBQyxjQUFJLENBQUcsRUFBRSxVQUFDLEtBQXFCO1lBQzlHLElBQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQW9CLENBQUM7WUFDOUMsSUFBSSxvQkFHSCxDQUFDO1lBQ0YsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO2dCQUMxQixJQUFNLFdBQVcsR0FBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFJLENBQUM7Z0JBQ3hDLElBQU0sTUFBTSxHQUFHLEVBQUUsSUFBSSxJQUFJO29CQUN2QixDQUFDLENBQUMsV0FBVztvQkFDYixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7d0JBQ1QsQ0FBQyxDQUFDLE9BQUssV0FBYTt3QkFDcEIsQ0FBQyxDQUFJLFdBQVcsT0FBSSxDQUFDO2dCQUN6QixJQUFNLG9CQUFvQixHQUd0QixFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7Z0JBRWYsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQzNCLG9CQUFvQixDQUFDLEtBQUssR0FBRyxpQkFBZSxLQUFLLFFBQUssQ0FBQztpQkFDeEQ7Z0JBQ0QsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLG9CQUFvQixFQUFFO3dCQUN6QixvQkFBb0IsR0FBRyxFQUFFLENBQUM7cUJBQzNCO29CQUNELG9CQUFvQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztpQkFDekU7cUJBQU07b0JBQ0wsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7aUJBQzdDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLG9CQUFxQixDQUFDO1FBQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQU9ELHNCQUFJLDJCQUFPO1FBTFg7OztXQUdHO2FBRUg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVksR0FBWTtZQUN0QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBa0IsR0FBSyxFQUFFLFVBQUMsS0FBcUI7b0JBQ3RGLElBQUksYUFFSCxDQUFDO29CQUNGLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSzt3QkFDMUIsSUFBTSxnQkFBZ0IsR0FBRzs0QkFDdkIsY0FBYyxFQUFFLEtBQUssSUFBSSxXQUFXO2dDQUNwQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQ0FDcEIsQ0FBQyxDQUFDLEtBQUs7eUJBQ1IsQ0FBQzt3QkFDRixJQUFJLEtBQUssRUFBRTs0QkFDVCxJQUFJLENBQUMsYUFBYSxFQUFFO2dDQUNsQixhQUFhLEdBQUcsRUFBRSxDQUFDOzZCQUNwQjs0QkFDRCxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO3lCQUM5RDs2QkFBTTs0QkFDTCxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7eUJBQ2xDO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sYUFBYyxDQUFDO2dCQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUM7OztPQTFCQTtJQWlDRCxzQkFBSSw2QkFBUztRQUxiOzs7V0FHRzthQUVIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFjLEdBQWM7WUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQW9CLEdBQUssRUFBRSxVQUFDLEtBQXFCO29CQUMxRixJQUFJLGVBRUgsQ0FBQztvQkFDRixTQUFTLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUs7d0JBQzFCLElBQU0sa0JBQWtCLEdBQUc7NEJBQ3pCLGFBQWEsRUFBRSxLQUFLLElBQUksV0FBVztnQ0FDbkMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0NBQ3BCLENBQUMsQ0FBQyxLQUFLO3lCQUNSLENBQUM7d0JBQ0YsSUFBSSxLQUFLLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQ0FDcEIsZUFBZSxHQUFHLEVBQUUsQ0FBQzs2QkFDdEI7NEJBQ0QsZUFBZSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzt5QkFDbEU7NkJBQU07NEJBQ0wsZUFBZSxHQUFHLGtCQUFrQixDQUFDO3lCQUN0QztvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLGVBQWdCLENBQUM7Z0JBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQzs7O09BMUJBO0lBaUNELHNCQUFJLDhCQUFVO2FBMkJkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7UUFsQ0Q7OztXQUdHO2FBRUgsVUFBZSxHQUFlO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBZ0IsR0FBSyxFQUFFLFVBQUMsS0FBcUI7Z0JBQ3ZGLElBQUksZ0JBS0gsQ0FBQztnQkFDRixTQUFTLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUs7b0JBQzFCLElBQU0sbUJBQW1CLEdBQUc7d0JBQzFCLFVBQVUsRUFBRSxLQUFLLElBQUksV0FBVzs0QkFDaEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7NEJBQ3BCLENBQUMsQ0FBQyxLQUFLO3FCQUNSLENBQUM7b0JBQ0YsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFOzRCQUNyQixnQkFBZ0IsR0FBRyxFQUFFLENBQUM7eUJBQ3ZCO3dCQUNELGdCQUFnQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztxQkFDcEU7eUJBQU07d0JBQ0wsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUM7cUJBQ3hDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sZ0JBQWlCLENBQUM7WUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQTlPZSxRQUFDLEdBQUcsUUFBUSxDQUFDOztnQkFvUFosUUFBUTtnQkFDWCxVQUFVOztJQXhOeEI7UUFEQyxLQUFLLEVBQUU7MENBR1A7SUFTRDtRQURDLEtBQUssRUFBRTswQ0FHUDtJQWFEO1FBREMsS0FBSyxFQUFFO3lDQUdQO0lBcUZEO1FBREMsS0FBSyxFQUFFO3lDQUdQO0lBaUNEO1FBREMsS0FBSyxFQUFFOzJDQUdQO0lBaUNEO1FBREMsS0FBSyxFQUFFOzRDQTJCUDtJQS9PVSxNQUFNO1FBSGxCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztPQUNXLE1BQU0sQ0EwUGxCO0lBQUQsYUFBQztDQUFBLEFBMVBELElBMFBDO1NBMVBZLE1BQU07QUFtUW5CO0lBbUZFLG9CQUNVLGFBQXFCLEVBQ3JCLEVBQWMsRUFDdEIsUUFBbUIsRUFDWCxLQUFlLEVBQ2YsR0FBa0I7UUFKbEIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUVkLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFlO1FBRTFCLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7bUJBOUZVLFVBQVU7SUFhckIsc0JBQUksMkJBQUc7UUFMUDs7O1dBR0c7YUFFSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDO2FBQ0QsVUFBUSxHQUFvQjtZQUMxQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBSSxZQUFVLENBQUMsQ0FBQyxjQUFTLE1BQVEsRUFBRSxVQUFDLEtBQXFCO2dCQUNwRixJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBaUIsQ0FBQztnQkFDcEQsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO29CQUM3QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTt3QkFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBSSxZQUFVLENBQUMsQ0FBQyxXQUFNLEdBQUcsb0JBQWlCLENBQUMsQ0FBQztxQkFDNUQ7b0JBQ0QsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNoRCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSyxFQUFFO3dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQ1IsVUFBQyxTQUFpQixJQUFLLE9BQUEsWUFBVSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFJLFNBQVMsbUJBQWMsUUFBUSxzQkFBaUIsU0FBUyxxQkFBZ0IsUUFBUSxRQUFLLEVBQTVILENBQTRILENBQ3BKLENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FDUixVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLG1CQUFjLFFBQVEscUJBQWdCLFNBQVMsb0JBQWUsUUFBUSxPQUFJLEVBQXRGLENBQXNGLENBQzlHLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3BCLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQXpCQTtJQTRCRCxzQkFBSSxtQ0FBVzthQUdmO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7YUFMRCxVQUFnQixHQUFvQjtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQVVELHNCQUFJLDZCQUFLO1FBTFQ7OztXQUdHO2FBRUg7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQVUsR0FBb0I7WUFDNUIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWdCLEdBQUssRUFBRSxVQUFDLEtBQXFCO29CQUNsRixJQUFJLFdBRUgsQ0FBQztvQkFDRixTQUFTLENBQUMsS0FBRyxHQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSzt3QkFDL0IsSUFBTSxjQUFjLEdBQUc7NEJBQ3JCLEtBQUssRUFBRSxLQUFLO3lCQUNiLENBQUM7d0JBQ0YsSUFBSSxLQUFLLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQ0FDaEIsV0FBVyxHQUFHLEVBQUUsQ0FBQzs2QkFDbEI7NEJBQ0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7eUJBQzFEOzZCQUFNOzRCQUNMLFdBQVcsR0FBRyxjQUFjLENBQUM7eUJBQzlCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sV0FBWSxDQUFDO2dCQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUM3RDtRQUNILENBQUM7OztPQXhCQTtJQXVDRCw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxtQ0FBYyxHQUF0QjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDeEU7U0FDRjtJQUNILENBQUM7O0lBOUdlLFlBQUMsR0FBRyxZQUFZLENBQUM7O2dCQW1GUixNQUFNO2dCQUNqQixVQUFVO2dCQUNaLFNBQVM7Z0JBQ0osUUFBUTtnQkFDVixhQUFhOztJQTNFNUI7UUFEQyxLQUFLLEVBQUU7eUNBR1A7SUE0QkQ7UUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDO2lEQUduQjtJQVVEO1FBREMsS0FBSyxFQUFFOzJDQUdQO0lBekRVLFVBQVU7UUFQdEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZDQUE2QztZQUN2RCxTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO2FBQ2Q7U0FDRixDQUFDO09BQ1csVUFBVSxDQWlIdEI7SUFBRCxpQkFBQztDQUFBLEFBakhELElBaUhDO1NBakhZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIGVhY2hNZWRpYSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmV4cG9ydCB0eXBlIEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICgpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICRuYW1lOiBMeUdyaWQu0LgsXG4gIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtib3gtc2l6aW5nOmJvcmRlci1ib3g7fWAsXG4gIGl0ZW06IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSwke2NsYXNzTmFtZX0gOmZpcnN0LWNoaWxke2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YFxufSk7XG5cbmV4cG9ydCB0eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5R3JpZCc7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUucmVuZGVyU3R5bGVTaGVldChzdHlsZXMpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgX3NwYWNpbmdDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9zcGFjaW5nWDogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ1hDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9zcGFjaW5nWTogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ1lDbGFzcz86IHN0cmluZztcblxuXG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9hbGlnbkl0ZW1zOiBBbGlnbkl0ZW1zO1xuICBwcml2YXRlIF9hbGlnbkl0ZW1zQ2xhc3M/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmdYKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdYO1xuICB9XG4gIHNldCBzcGFjaW5nWCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZ1gpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdYID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHVuZGVmaW5lZCwgdmFsKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZ1koKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ1k7XG4gIH1cbiAgc2V0IHNwYWNpbmdZKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nWSkge1xuICAgICAgdGhpcy5fc3BhY2luZ1kgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVTcGFjaW5nQ2xhc3ModW5kZWZpbmVkLCB1bmRlZmluZWQsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgb25lIHBhcmFtIG11c3QgYmUgZGVmaW5lZFxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlU3BhY2luZ0NsYXNzKHh5Pzogc3RyaW5nIHwgbnVtYmVyLCB4Pzogc3RyaW5nIHwgbnVtYmVyLCB5Pzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3U3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt4eX3CtyR7eH3CtyR7eX1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAoeHkgfHwgeCB8fCB5KSBhcyBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgIH0gPSB7fTtcbiAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVQYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHh5ICE9IG51bGxcbiAgICAgICAgICA/IHZhbHVlUGFkZGluZ1xuICAgICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgICA/IGAwICR7dmFsdWVQYWRkaW5nfWBcbiAgICAgICAgICAgIDogYCR7dmFsdWVQYWRkaW5nfSAwYDtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgc3BhY2luZ1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSB7XG4gICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzO1xuICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgICBpZiAoeHkpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IG5ld1NwYWNpbmdDbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHgpIHtcbiAgICAgICAgdGhpcy5fc3BhY2luZ1hDbGFzcyA9IG5ld1NwYWNpbmdDbGFzcztcbiAgICAgIH1cbiAgICAgIGlmICh5KSB7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdZQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt4eX3CtyR7eH3CtyR7eX1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAoeHkgfHwgeCB8fCB5KSBhcyBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICB9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZU1hcmdpbiA9IGAkeygtdmFsdWUpIC8gMn1weGA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHh5ICE9IG51bGxcbiAgICAgICAgICA/IHZhbHVlTWFyZ2luXG4gICAgICAgICAgOiB4ICE9IG51bGxcbiAgICAgICAgICAgID8gYDAgJHt2YWx1ZU1hcmdpbn1gXG4gICAgICAgICAgICA6IGAke3ZhbHVlTWFyZ2lufSAwYDtcbiAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXM6IHtcbiAgICAgICAgICBtYXJnaW46IHN0cmluZ1xuICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIH0gPSB7IG1hcmdpbiB9O1xuXG4gICAgICAgIGlmICh4eSAhPSBudWxsIHx8IHggIT0gbnVsbCkge1xuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luc3R5bGVzLndpZHRoID0gYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyE7XG4gICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmeSgpOiBKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuICBzZXQganVzdGlmeSh2YWw6IEp1c3RpZnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmp1c3RpZnkpIHtcbiAgICAgIHRoaXMuX2p1c3RpZnkgPSB2YWw7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzITtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fanVzdGlmeUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWw7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uU3R5bGVzKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ25JdGVtcyh2YWw6IEFsaWduSXRlbXMpIHtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gdmFsO1xuICAgIHRoaXMuX2FsaWduSXRlbXNDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC5hbGlnbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgYWxpZ25JdGVtc1N0eWxlczoge1xuICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nLFxuICAgICAgICBbbWVkaWE6IHN0cmluZ106IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zPzogc3RyaW5nXG4gICAgICAgIH0gfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FsaWduSXRlbXNTdHlsZXMgPSB7XG4gICAgICAgICAgYWxpZ25JdGVtczogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgaWYgKCFhbGlnbkl0ZW1zU3R5bGVzKSB7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3QWxpZ25JdGVtc1N0eWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzID0gbmV3QWxpZ25JdGVtc1N0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWxpZ25JdGVtc1N0eWxlcyE7XG4gICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hbGlnbkl0ZW1zQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgYWxpZ25JdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25JdGVtcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dLCBbbHktZ3JpZC1pdGVtXSwgW2x5R3JpZEl0ZW1dJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZEl0ZW0gaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlHcmlkSXRlbSc7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9vcmRlcjogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9vcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkc1xuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fY29sID0gdmFsIHx8IDA7XG4gICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLl9zci5hZGQoYCR7THlHcmlkSXRlbS7QuH0tLWNvbC0ke25ld1ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYXMgPSBuZXcgU3R5bGVDb2xsZWN0aW9uPFN0eWxlVGVtcGxhdGU+KCk7XG4gICAgICBlYWNoTWVkaWEobmV3VmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0x5R3JpZEl0ZW0u0Lh9OiAnJHt2YWx9JyBpcyBub3QgdmFsaWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSB2YWx1ZSA/IHZhbHVlICogMTAwIC8gMTIgOiAxMDA7XG4gICAgICAgIGNvbnN0IGZsZXhCYXNpcyA9IHZhbHVlID8gdmFsdWUgKiAxMDAgLyAxMiA6IDA7XG4gICAgICAgIGNvbnN0IGZsZXhHcm93ID0gdmFsdWUgPyAwIDogMTtcblxuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBtZWRpYXMuYWRkKFxuICAgICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7dGhlbWUuYnJlYWtwb2ludHNbbWVkaWFdfXske2NsYXNzTmFtZX17bWF4LXdpZHRoOiR7bWF4V2lkdGh9JTs7ZmxleC1iYXNpczoke2ZsZXhCYXNpc30lOztmbGV4LWdyb3c6JHtmbGV4R3Jvd307fX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYXMuYWRkKFxuICAgICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC13aWR0aDoke21heFdpZHRofSU7ZmxleC1iYXNpczoke2ZsZXhCYXNpc30lO2ZsZXgtZ3Jvdzoke2ZsZXhHcm93fTt9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lZGlhcy5jc3M7XG4gICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXMuX2NvbENsYXNzKTtcbiAgfVxuXG4gIEBJbnB1dCgnbHlHcmlkSXRlbScpXG4gIHNldCBncmlkSXRlbUNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuY29sID0gdmFsO1xuICB9XG4gIGdldCBncmlkSXRlbUNvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2w7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgb3JkZXIgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmRlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuICBzZXQgb3JkZXIodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9yZGVyKSB7XG4gICAgICB0aGlzLl9vcmRlciA9IHZhbDtcbiAgICAgIHRoaXMuX29yZGVyQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtb3JkZXI6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgb3JkZXJTdHlsZXM6IHtcbiAgICAgICAgICBvcmRlcj86IHN0cmluZyB8IG51bWJlclxuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEoYCR7dmFsfWAsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcmRlclN0eWxlcyA9IHtcbiAgICAgICAgICAgIG9yZGVyOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3NyOiBTdHlsZVJlbmRlcmVyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCA8bHktZ3JpZCBjb250YWluZXI+YCk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZ3JpZENvbnRhaW5lci5jbGFzc2VzLml0ZW0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1hDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdYQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1lDbGFzcykge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdZQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=