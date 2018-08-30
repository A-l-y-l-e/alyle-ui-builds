(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/responsive')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/responsive'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.grid = {}),global.ng.core,global.alyle.ui,global.alyle.ui.responsive));
}(this, (function (exports,core,ui,responsive) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
        function LyGrid(mediaQueries, theme, el) {
            this.mediaQueries = mediaQueries;
            this.theme = theme;
            this.el = el;
            /**
             * Styles
             * @ignore
             */
            this.classes = this.theme.addStyleSheet(styles, 'lyGrid');
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
                var _this = this;
                if (val !== this.spacing) {
                    this._spacing = val;
                    this._spacingClass = this.theme.addStyle("lyGrid-spacing:" + val, function () {
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
                                    spacingStyles_1["@media " + _this.mediaQueries[media]] = {
                                        padding: padding
                                    };
                                }
                                else {
                                    spacingStyles_1.padding = padding;
                                }
                            });
                            return /** @type {?} */ (spacingStyles_1);
                        }
                    });
                    this._negativeMarginClass = this.theme.addStyle("lyGrid-negative-margin:" + val, function () {
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
                                    negativeMarginStyles_1["@media " + _this.mediaQueries[media]] = negativeMarginstyles;
                                }
                                else {
                                    negativeMarginStyles_1 = negativeMarginstyles;
                                }
                            });
                            return /** @type {?} */ (negativeMarginStyles_1);
                        }
                    }, this.el.nativeElement, this._negativeMarginClass);
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
                var _this = this;
                if (val !== this.justify) {
                    this._justifyClass = this.theme.addStyle("lyGrid-justify:" + val, function () {
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
                                justifyStyles["@media " + _this.mediaQueries[media]] = newJustifyStyles;
                            }
                            else {
                                justifyStyles = newJustifyStyles;
                            }
                        });
                        return /** @type {?} */ (justifyStyles);
                    }, this.el.nativeElement, this._justifyClass);
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
                var _this = this;
                if (val !== this.direction) {
                    this._directionClass = this.theme.addStyle("lyGrid-direction:" + val, function () {
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
                                directionStyles["@media " + _this.mediaQueries[media]] = newDirectionStyles;
                            }
                            else {
                                directionStyles = newDirectionStyles;
                            }
                        });
                        return /** @type {?} */ (directionStyles);
                    }, this.el.nativeElement, this._directionClass);
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
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [responsive.LY_MEDIA_QUERIES,] }] },
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
    var LyGridCol = /** @class */ (function () {
        function LyGridCol(mediaQueries, gridContainer, el, theme) {
            this.mediaQueries = mediaQueries;
            this.gridContainer = gridContainer;
            this.el = el;
            this.theme = theme;
            if (!gridContainer) {
                throw new Error("Require parent grid");
            }
        }
        Object.defineProperty(LyGridCol.prototype, "col", {
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
                var _this = this;
                if (val !== this.col) {
                    this._col = val;
                    this._colClass = this.theme.addStyle("lyGrid-col:" + val, function () {
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
                                    colStyles_1["@media " + _this.mediaQueries[media]] = newColStyles;
                                }
                                else {
                                    colStyles_1 = newColStyles;
                                }
                            });
                            return /** @type {?} */ (colStyles_1);
                        }
                    }, this.el.nativeElement, this._colClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyGridCol.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._updateSpacing();
            };
        /**
         * @return {?}
         */
        LyGridCol.prototype._updateSpacing = /**
         * @return {?}
         */
            function () {
                if (this.gridContainer.spacingClass) {
                    this.el.nativeElement.classList.add(this.gridContainer.spacingClass);
                }
            };
        LyGridCol.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-grid[item]'
                    },] },
        ];
        /** @nocollapse */
        LyGridCol.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [responsive.LY_MEDIA_QUERIES,] }] },
                { type: LyGrid },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyGridCol.propDecorators = {
            col: [{ type: core.Input }]
        };
        return LyGridCol;
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
                        exports: [LyGrid, LyGridCol],
                        declarations: [LyGrid, LyGridCol]
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
    exports.LyGridCol = LyGridCol;
    exports.LyGridModule = LyGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9wdGlvbmFsLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG50eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvdy1yZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtbi1yZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICogZXhhbXBsZTpcbiAqIDxseS1ncmlkIGNvbnRhaW5lciBbc3BhY2luZ109XCInMTYgOEBYU21hbGwnXCI+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiA8L2x5LWdyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5R3JpZCcpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BhY2luZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRDb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9jb2w6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgcGFyZW50IGdyaWRgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5R3JpZCwgTHlHcmlkQ29sIH0gZnJvbSAnLi9ncmlkJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5R3JpZCwgTHlHcmlkQ29sXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlHcmlkLCBMeUdyaWRDb2xdXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJlYWNoTWVkaWEiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIkluamVjdCIsIkxZX01FRElB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