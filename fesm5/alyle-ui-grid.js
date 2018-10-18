import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -1;
/** *
 * @ignore
  @type {?} */
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
                        return "padding:" + val / 2 + "px;";
                    }
                    else {
                        /** @type {?} */
                        var spacingStyles_1 = {};
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var padding = (+value) / 2 + "px";
                            if (len) {
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
         */
        function () {
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
        direction: [{ type: Input }]
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
                        var colStyles_1 = void 0;
                        eachMedia(val, function (value, media, len) {
                            /** @type {?} */
                            var newColStyles = getColStyle(+value);
                            if (len) {
                                if (!colStyles_1) {
                                    colStyles_1 = {};
                                }
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
        { type: NgModule, args: [{
                    exports: [LyGrid, LyGridItem],
                    declarations: [LyGrid, LyGridItem]
                },] }
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

export { LyGrid, LyGridItem, LyGridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC50cyIsIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAaWdub3JlICovXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG50eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZSc7XG5cbi8qKlxuICogR3JpZCBjb250YWluZXJcbiAqIGV4YW1wbGU6XG4gKiA8bHktZ3JpZCBjb250YWluZXIgW3NwYWNpbmddPVwiJzE2IDhAWFNtYWxsJ1wiPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogPC9seS1ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUdyaWQnLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBwYWRkaW5nOiR7dmFsIC8gMn1weDtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgLy8gc3BhY2luZ1N0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0ge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBtYXJnaW46JHt2YWwgLyAtMn1weDt3aWR0aDogY2FsYygxMDAlICsgJHt2YWx9cHgpO2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzID0ge1xuICAgICAgICAgICAgICBtYXJnaW46IGAkeygtdmFsdWUpIC8gMn1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBuZWdhdGl2ZU1hcmdpblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3BhY2luZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nQ2xhc3M7XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmeSgpOiBKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuICBzZXQganVzdGlmeSh2YWw6IEp1c3RpZnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmp1c3RpZnkpIHtcbiAgICAgIHRoaXMuX2p1c3RpZnkgPSB2YWw7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGp1c3RpZnlTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fanVzdGlmeUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWw7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaXJlY3Rpb25TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlyZWN0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb2xTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgICAgY29sU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG5cblxuICAvKiogRGVmaW5lcyB0aGUgb3JkZXIgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmRlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuICBzZXQgb3JkZXIodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9yZGVyKSB7XG4gICAgICB0aGlzLl9vcmRlciA9IHZhbDtcbiAgICAgIHRoaXMuX29yZGVyQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtb3JkZXI6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgb3JkZXJTdHlsZXM6IHtcbiAgICAgICAgICBvcmRlcj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEoYCR7dmFsfWAsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcmRlclN0eWxlcyA9IHtcbiAgICAgICAgICAgIG9yZGVyOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghb3JkZXJTdHlsZXMpIHtcbiAgICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9yZGVyU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmRlclN0eWxlcyA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcmRlclN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX29yZGVyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCBncmlkYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcyk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Q29sU3R5bGUodmFsOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXhXaWR0aDogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAnMTAwJScsXG4gICAgZmxleEJhc2lzOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6IDAsXG4gICAgZmxleEdyb3c6IHZhbCA/IDAgOiAxXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbFZhbCh2YWw6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWwgaW4gQ09MX1ZBTFVFU1xuICAgICAgICAgICAgICA/IENPTF9WQUxVRVNbdmFsXVxuICAgICAgICAgICAgICA6IENPTF9WQUxVRVNbdmFsXSA9IGAkeyt2YWwgKiAxMDAgLyAxMn0lYDtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUdyaWQsIEx5R3JpZEl0ZW0gfSBmcm9tICcuL2dyaWQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlHcmlkLCBMeUdyaWRJdGVtXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlHcmlkLCBMeUdyaWRJdGVtXVxufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBR0EsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7QUFHMUIsSUFBTSxVQUFVLEdBQUcsRUFBRyxDQUFDOztBQUV2QixJQUFNLFdBQVcsR0FBRztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUN6QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGVBQWU7SUFDeEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7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