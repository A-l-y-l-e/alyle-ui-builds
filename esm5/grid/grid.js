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
export var STYLES = function () { return ({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixJQUFNLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkIsQ0FBQztBQUlGLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxjQUFNLE9BQUEsQ0FBQztJQUMzQixTQUFTLEVBQUUsY0FBYztJQUN6QixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxvRUFBaUUsRUFBN0UsQ0FBNkU7SUFDMUcsSUFBSSxFQUFFLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsU0FBSSxTQUFTLDBDQUF1QyxFQUFoRSxDQUFnRTtDQUM5RixDQUFDLEVBTDBCLENBSzFCLENBQUM7QUFLSDs7R0FFRztBQUlIO0lBb1BFLGdCQUNVLEtBQWUsRUFDZixFQUFjO1FBRGQsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUNmLE9BQUUsR0FBRixFQUFFLENBQVk7UUFwUHhCOzs7V0FHRztRQUNNLFlB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QUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDeEU7U0FDRjtJQUNILENBQUM7O0lBOUdlLFlBQUMsR0FBRyxZQUFZLENBQUM7O2dCQW1GUixNQUFNO2dCQUNqQixVQUFVO2dCQUNaLFNBQVM7Z0JBQ0osUUFBUTtnQkFDVixhQUFhOztJQTNFNUI7UUFEQyxLQUFLLEVBQUU7eUNBR1A7SUE0QkQ7UUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDO2lEQUduQjtJQVVEO1FBREMsS0FBSyxFQUFFOzJDQUdQO0lBekRVLFVBQVU7UUFQdEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZDQUE2QztZQUN2RCxTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO2FBQ2Q7U0FDRixDQUFDO09BQ1csVUFBVSxDQWlIdEI7SUFBRCxpQkFBQztDQUFBLEFBakhELElBaUhDO1NBakhZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIGVhY2hNZWRpYSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmV4cG9ydCB0eXBlIEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAoKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAkbmFtZTogTHlHcmlkLtC4LFxuICByb290OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Ym94LXNpemluZzpib3JkZXItYm94O31gLFxuICBpdGVtOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0sJHtjbGFzc05hbWV9IDpmaXJzdC1jaGlsZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7fWBcbn0pO1xuXG5leHBvcnQgdHlwZSBKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdldmVubHknO1xuZXhwb3J0IHR5cGUgRGlyZWN0aW9uID0gJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUdyaWQnO1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcblxuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZ1g6IHN0cmluZyB8IG51bWJlcjtcbiAgX3NwYWNpbmdYQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZ1k6IHN0cmluZyB8IG51bWJlcjtcbiAgX3NwYWNpbmdZQ2xhc3M/OiBzdHJpbmc7XG5cblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uQ2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfYWxpZ25JdGVtczogQWxpZ25JdGVtcztcbiAgcHJpdmF0ZSBfYWxpZ25JdGVtc0NsYXNzPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nWCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nWDtcbiAgfVxuICBzZXQgc3BhY2luZ1godmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmdYKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nWCA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZVNwYWNpbmdDbGFzcyh1bmRlZmluZWQsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmdZKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdZO1xuICB9XG4gIHNldCBzcGFjaW5nWSh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZ1kpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmdZID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlU3BhY2luZ0NsYXNzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZVNwYWNpbmdDbGFzcyh2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IG9uZSBwYXJhbSBtdXN0IGJlIGRlZmluZWRcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZVNwYWNpbmdDbGFzcyh4eT86IHN0cmluZyB8IG51bWJlciwgeD86IHN0cmluZyB8IG51bWJlciwgeT86IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7eHl9wrcke3h9wrcke3l9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgdmFsID0gKHh5IHx8IHggfHwgeSkgYXMgc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICB9ID0ge307XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlUGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB4eSAhPSBudWxsXG4gICAgICAgICAgPyB2YWx1ZVBhZGRpbmdcbiAgICAgICAgICA6IHggIT0gbnVsbFxuICAgICAgICAgICAgPyBgMCAke3ZhbHVlUGFkZGluZ31gXG4gICAgICAgICAgICA6IGAke3ZhbHVlUGFkZGluZ30gMGA7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcztcbiAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuXG4gICAgaWYgKHh5KSB7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdYQ2xhc3MgPSBuZXdTcGFjaW5nQ2xhc3M7XG4gICAgICB9XG4gICAgICBpZiAoeSkge1xuICAgICAgICB0aGlzLl9zcGFjaW5nWUNsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7eHl9wrcke3h9wrcke3l9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgdmFsID0gKHh5IHx8IHggfHwgeSkgYXMgc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgfTtcbiAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVNYXJnaW4gPSBgJHsoLXZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB4eSAhPSBudWxsXG4gICAgICAgICAgPyB2YWx1ZU1hcmdpblxuICAgICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgICA/IGAwICR7dmFsdWVNYXJnaW59YFxuICAgICAgICAgICAgOiBgJHt2YWx1ZU1hcmdpbn0gMGA7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzOiB7XG4gICAgICAgICAgbWFyZ2luOiBzdHJpbmdcbiAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICB9ID0geyBtYXJnaW4gfTtcblxuICAgICAgICBpZiAoeHkgIT0gbnVsbCB8fCB4ICE9IG51bGwpIHtcbiAgICAgICAgICBuZWdhdGl2ZU1hcmdpbnN0eWxlcy53aWR0aCA9IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMhO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZnkoKTogSnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cbiAgc2V0IGp1c3RpZnkodmFsOiBKdXN0aWZ5KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5qdXN0aWZ5KSB7XG4gICAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsO1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWp1c3RpZnlTdHlsZXMpIHtcbiAgICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAganVzdGlmeVN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcyE7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG4gIHNldCBkaXJlY3Rpb24odmFsOiBEaXJlY3Rpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtZGlyZWN0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblN0eWxlczoge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvblN0eWxlcyA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzITtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlyZWN0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGFsaWduLWl0ZW1zYCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGFsaWduSXRlbXModmFsOiBBbGlnbkl0ZW1zKSB7XG4gICAgdGhpcy5fYWxpZ25JdGVtcyA9IHZhbDtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQuYWxpZ246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgbGV0IGFsaWduSXRlbXNTdHlsZXM6IHtcbiAgICAgICAgYWxpZ25JdGVtcz86IHN0cmluZyxcbiAgICAgICAgW21lZGlhOiBzdHJpbmddOiB7XG4gICAgICAgICAgYWxpZ25JdGVtcz86IHN0cmluZ1xuICAgICAgICB9IHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBbGlnbkl0ZW1zU3R5bGVzID0ge1xuICAgICAgICAgIGFsaWduSXRlbXM6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICA6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIGlmICghYWxpZ25JdGVtc1N0eWxlcykge1xuICAgICAgICAgICAgYWxpZ25JdGVtc1N0eWxlcyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkl0ZW1zU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0FsaWduSXRlbXNTdHlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlcyA9IG5ld0FsaWduSXRlbXNTdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFsaWduSXRlbXNTdHlsZXMhO1xuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25JdGVtc0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduSXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSwgW2x5LWdyaWQtaXRlbV0sIFtseUdyaWRJdGVtXScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5R3JpZEl0ZW0nO1xuICBwcml2YXRlIF9jb2w6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfb3JkZXI6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfb3JkZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHNcbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2NvbCA9IHZhbCB8fCAwO1xuICAgIHRoaXMuX2NvbENsYXNzID0gdGhpcy5fc3IuYWRkKGAke0x5R3JpZEl0ZW0u0Lh9LS1jb2wtJHtuZXdWYWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgbWVkaWFzID0gbmV3IFN0eWxlQ29sbGVjdGlvbjxTdHlsZVRlbXBsYXRlPigpO1xuICAgICAgZWFjaE1lZGlhKG5ld1ZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMeUdyaWRJdGVtLtC4fTogJyR7dmFsfScgaXMgbm90IHZhbGlkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gdmFsdWUgPyB2YWx1ZSAqIDEwMCAvIDEyIDogMTAwO1xuICAgICAgICBjb25zdCBmbGV4QmFzaXMgPSB2YWx1ZSA/IHZhbHVlICogMTAwIC8gMTIgOiAwO1xuICAgICAgICBjb25zdCBmbGV4R3JvdyA9IHZhbHVlID8gMCA6IDE7XG5cbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgbWVkaWFzLmFkZChcbiAgICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAke3RoZW1lLmJyZWFrcG9pbnRzW21lZGlhXX17JHtjbGFzc05hbWV9e21heC13aWR0aDoke21heFdpZHRofSU7O2ZsZXgtYmFzaXM6JHtmbGV4QmFzaXN9JTs7ZmxleC1ncm93OiR7ZmxleEdyb3d9O319YFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWFzLmFkZChcbiAgICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXgtd2lkdGg6JHttYXhXaWR0aH0lO2ZsZXgtYmFzaXM6JHtmbGV4QmFzaXN9JTtmbGV4LWdyb3c6JHtmbGV4R3Jvd307fWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZWRpYXMuY3NzO1xuICAgIH0sIFNUWUxFX1BSSU9SSVRZLCB0aGlzLl9jb2xDbGFzcyk7XG4gIH1cblxuICBASW5wdXQoJ2x5R3JpZEl0ZW0nKVxuICBzZXQgZ3JpZEl0ZW1Db2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLmNvbCA9IHZhbDtcbiAgfVxuICBnZXQgZ3JpZEl0ZW1Db2woKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG9yZGVyIHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgb3JkZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5fb3JkZXIgPSB2YWw7XG4gICAgICB0aGlzLl9vcmRlckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW9yZGVyOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IG9yZGVyU3R5bGVzOiB7XG4gICAgICAgICAgb3JkZXI/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKGAke3ZhbH1gLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBvcmRlcjogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFvcmRlclN0eWxlcykge1xuICAgICAgICAgICAgICBvcmRlclN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JkZXJTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9yZGVyU3R5bGVzITtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fb3JkZXJDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9zcjogU3R5bGVSZW5kZXJlclxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZSBwYXJlbnQgPGx5LWdyaWQgY29udGFpbmVyPmApO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCB0aGlzLmdyaWRDb250YWluZXIuY2xhc3Nlcy5pdGVtKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdYQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nWENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdZQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nWUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19