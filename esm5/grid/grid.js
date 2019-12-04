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
            var val = xy || x || y;
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
            var val = xy || x || y;
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
                        medias.add(function (className) { return "@media " + theme.breakpoints[media] + "{" + className + "{max-width:" + maxWidth + "%;,flex-basis:" + flexBasis + "%;,flex-grow:" + flexGrow + ";}}"; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixJQUFNLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7Q0FDdkIsQ0FBQztBQUlGLElBQU0sTUFBTSxHQUFHLGNBQU0sT0FBQSxDQUFDO0lBQ3BCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNmLElBQUksRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLG9FQUFpRSxFQUE3RSxDQUE2RTtJQUMxRyxJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxTQUFJLFNBQVMsMENBQXVDLEVBQWhFLENBQWdFO0NBQzlGLENBQUMsRUFMbUIsQ0FLbkIsQ0FBQzs7QUFLSDs7R0FFRztBQUlIO0lBb1BFLGdCQUNVLEtBQWUsRUFDZixFQUFjO1FBRGQsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUNmLE9BQUUsR0FBRixFQUFFLENBQVk7UUFwUHhCOzs7V0FHRztRQUNNLFlBQU8sR0FBRyxJ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QWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN4RTtTQUNGO0lBQ0gsQ0FBQzs7SUE5R2UsWUFBQyxHQUFHLFlBQVksQ0FBQzs7Z0JBbUZSLE1BQU07Z0JBQ2pCLFVBQVU7Z0JBQ1osU0FBUztnQkFDSixRQUFRO2dCQUNWLGFBQWE7O0lBM0U1QjtRQURDLEtBQUssRUFBRTt5Q0FHUDtJQTRCRDtRQURDLEtBQUssQ0FBQyxZQUFZLENBQUM7aURBR25CO0lBVUQ7UUFEQyxLQUFLLEVBQUU7MkNBR1A7SUF6RFUsVUFBVTtRQVB0QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkNBQTZDO1lBQ3ZELFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxVQUFVLENBaUh0QjtJQUFELGlCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0FqSFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgZWFjaE1lZGlhLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBTdHlsZVRlbXBsYXRlLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbmNvbnN0IEFMSUdOX0FMSUFTID0ge1xuICByb3dSZXZlcnNlOiAncm93LXJldmVyc2UnLFxuICBjb2x1bW5SZXZlcnNlOiAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZTogJ3dyYXAtcmV2ZXJzZScsXG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbjogJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQ6ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHk6ICdzcGFjZS1ldmVubHknLFxufTtcblxuZXhwb3J0IHR5cGUgQWxpZ25JdGVtcyA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJztcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgJG5hbWU6IEx5R3JpZC7QuCxcbiAgcm9vdDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgaXRlbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9LCR7Y2xhc3NOYW1lfSA6Zmlyc3QtY2hpbGR7Ym94LXNpemluZzpib3JkZXItYm94O31gXG59KTtcblxuZXhwb3J0IHR5cGUgSnVzdGlmeSA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JztcbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZSc7XG5cbi8qKlxuICogR3JpZCBjb250YWluZXJcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlHcmlkJztcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5yZW5kZXJTdHlsZVNoZWV0KHN0eWxlcyk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBfc3BhY2luZ0NsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NwYWNpbmdYOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nWENsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NwYWNpbmdZOiBzdHJpbmcgfCBudW1iZXI7XG4gIF9zcGFjaW5nWUNsYXNzPzogc3RyaW5nO1xuXG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9qdXN0aWZ5OiBKdXN0aWZ5O1xuICBwcml2YXRlIF9qdXN0aWZ5Q2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2FsaWduSXRlbXM6IEFsaWduSXRlbXM7XG4gIHByaXZhdGUgX2FsaWduSXRlbXNDbGFzcz86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZ1goKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ1g7XG4gIH1cbiAgc2V0IHNwYWNpbmdYKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nWCkge1xuICAgICAgdGhpcy5fc3BhY2luZ1ggPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVTcGFjaW5nQ2xhc3ModW5kZWZpbmVkLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nWSgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nWTtcbiAgfVxuICBzZXQgc3BhY2luZ1kodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmdZKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nWSA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZVNwYWNpbmdDbGFzcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGBpdGVtYCBhdHRyaWJ1dGUuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVTcGFjaW5nQ2xhc3ModmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT25seSBvbmUgcGFyYW0gbXVzdCBiZSBkZWZpbmVkXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVTcGFjaW5nQ2xhc3MoeHk/OiBzdHJpbmcgfCBudW1iZXIsIHg/OiBzdHJpbmcgfCBudW1iZXIsIHk/OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdTcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3h5fcK3JHt4fcK3JHt5fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHh5IHx8IHggfHwgeTtcbiAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgcGFkZGluZz86IHN0cmluZ1xuICAgICAgfSA9IHt9O1xuICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZVBhZGRpbmcgPSBgJHsoK3ZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICBjb25zdCBwYWRkaW5nID0geHkgIT0gbnVsbFxuICAgICAgICAgID8gdmFsdWVQYWRkaW5nXG4gICAgICAgICAgOiB4ICE9IG51bGxcbiAgICAgICAgICAgID8gYDAgJHt2YWx1ZVBhZGRpbmd9YFxuICAgICAgICAgICAgOiBgJHt2YWx1ZVBhZGRpbmd9IDBgO1xuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBzcGFjaW5nU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXM7XG4gICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcblxuICAgIGlmICh4eSkge1xuICAgICAgdGhpcy5fc3BhY2luZ0NsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeCkge1xuICAgICAgICB0aGlzLl9zcGFjaW5nWENsYXNzID0gbmV3U3BhY2luZ0NsYXNzO1xuICAgICAgfVxuICAgICAgaWYgKHkpIHtcbiAgICAgICAgdGhpcy5fc3BhY2luZ1lDbGFzcyA9IG5ld1NwYWNpbmdDbGFzcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3h5fcK3JHt4fcK3JHt5fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHh5IHx8IHggfHwgeTtcbiAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgIH07XG4gICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlTWFyZ2luID0gYCR7KC12YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0geHkgIT0gbnVsbFxuICAgICAgICAgID8gdmFsdWVNYXJnaW5cbiAgICAgICAgICA6IHggIT0gbnVsbFxuICAgICAgICAgICAgPyBgMCAke3ZhbHVlTWFyZ2lufWBcbiAgICAgICAgICAgIDogYCR7dmFsdWVNYXJnaW59IDBgO1xuICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlczoge1xuICAgICAgICAgIG1hcmdpbjogc3RyaW5nXG4gICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgfSA9IHsgbWFyZ2luIH07XG5cbiAgICAgICAgaWYgKHh5ICE9IG51bGwgfHwgeCAhPSBudWxsKSB7XG4gICAgICAgICAgbmVnYXRpdmVNYXJnaW5zdHlsZXMud2lkdGggPSBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5lZ2F0aXZlTWFyZ2luU3R5bGVzITtcbiAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeSA9IHZhbDtcbiAgICAgIHRoaXMuX2p1c3RpZnlDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1qdXN0aWZ5OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGp1c3RpZnlTdHlsZXM6IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SnVzdGlmeVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnlTdHlsZXMhO1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LlxuICAgKiBTdXBwb3J0IGJyZWFrcG9pbnRzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblN0eWxlcyE7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RpcmVjdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBhbGlnbi1pdGVtc2Agc3R5bGUgcHJvcGVydHkuXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbkl0ZW1zKHZhbDogQWxpZ25JdGVtcykge1xuICAgIHRoaXMuX2FsaWduSXRlbXMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25JdGVtc0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLmFsaWduOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGxldCBhbGlnbkl0ZW1zU3R5bGVzOiB7XG4gICAgICAgIGFsaWduSXRlbXM/OiBzdHJpbmcsXG4gICAgICAgIFttZWRpYTogc3RyaW5nXToge1xuICAgICAgICAgIGFsaWduSXRlbXM/OiBzdHJpbmdcbiAgICAgICAgfSB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QWxpZ25JdGVtc1N0eWxlcyA9IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICBpZiAoIWFsaWduSXRlbXNTdHlsZXMpIHtcbiAgICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25JdGVtc1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsaWduSXRlbXNTdHlsZXMgPSBuZXdBbGlnbkl0ZW1zU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGlnbkl0ZW1zU3R5bGVzITtcbiAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FsaWduSXRlbXNDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnbkl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbkl0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0sIFtseS1ncmlkLWl0ZW1dLCBbbHlHcmlkSXRlbV0nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUdyaWRJdGVtJztcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzXG4gICAqIFN1cHBvcnQgYnJlYWtwb2ludHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9jb2wgPSB2YWwgfHwgMDtcbiAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMuX3NyLmFkZChgJHtMeUdyaWRJdGVtLtC4fS0tY29sLSR7bmV3VmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhcyA9IG5ldyBTdHlsZUNvbGxlY3Rpb248U3R5bGVUZW1wbGF0ZT4oKTtcbiAgICAgIGVhY2hNZWRpYShuZXdWYWwsICh2YWx1ZSwgbWVkaWEpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlHcmlkSXRlbS7QuH06ICcke3ZhbH0nIGlzIG5vdCB2YWxpZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHZhbHVlID8gdmFsdWUgKiAxMDAgLyAxMiA6IDEwMDtcbiAgICAgICAgY29uc3QgZmxleEJhc2lzID0gdmFsdWUgPyB2YWx1ZSAqIDEwMCAvIDEyIDogMDtcbiAgICAgICAgY29uc3QgZmxleEdyb3cgPSB2YWx1ZSA/IDAgOiAxO1xuXG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIG1lZGlhcy5hZGQoXG4gICAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHt0aGVtZS5icmVha3BvaW50c1ttZWRpYV19eyR7Y2xhc3NOYW1lfXttYXgtd2lkdGg6JHttYXhXaWR0aH0lOyxmbGV4LWJhc2lzOiR7ZmxleEJhc2lzfSU7LGZsZXgtZ3Jvdzoke2ZsZXhHcm93fTt9fWBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lZGlhcy5hZGQoXG4gICAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWF4LXdpZHRoOiR7bWF4V2lkdGh9JTtmbGV4LWJhc2lzOiR7ZmxleEJhc2lzfSU7ZmxleC1ncm93OiR7ZmxleEdyb3d9O31gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVkaWFzLmNzcztcbiAgICB9LCBTVFlMRV9QUklPUklUWSwgdGhpcy5fY29sQ2xhc3MpO1xuICB9XG5cbiAgQElucHV0KCdseUdyaWRJdGVtJylcbiAgc2V0IGdyaWRJdGVtQ29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5jb2wgPSB2YWw7XG4gIH1cbiAgZ2V0IGdyaWRJdGVtQ29sKCkge1xuICAgIHJldHVybiB0aGlzLmNvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBvcmRlciBzdHlsZSBwcm9wZXJ0eS5cbiAgICogU3VwcG9ydCBicmVha3BvaW50c1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gdmFsO1xuICAgICAgdGhpcy5fb3JkZXJDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1vcmRlcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBvcmRlclN0eWxlczoge1xuICAgICAgICAgIG9yZGVyPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYShgJHt2YWx9YCwgKHZhbHVlLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld09yZGVyU3R5bGVzID0ge1xuICAgICAgICAgICAgb3JkZXI6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghb3JkZXJTdHlsZXMpIHtcbiAgICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yZGVyU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmRlclN0eWxlcyA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcmRlclN0eWxlcyE7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX29yZGVyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfc3I6IFN0eWxlUmVuZGVyZXJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgcGFyZW50IDxseS1ncmlkIGNvbnRhaW5lcj5gKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgdGhpcy5ncmlkQ29udGFpbmVyLmNsYXNzZXMuaXRlbSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuX3NwYWNpbmdDbGFzcykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nWENsYXNzKSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1hDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLl9zcGFjaW5nWUNsYXNzKSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5fc3BhY2luZ1lDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==