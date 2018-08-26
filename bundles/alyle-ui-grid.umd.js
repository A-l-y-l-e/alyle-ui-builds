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
    var styles = ({
        root: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            boxSizing: 'border-box'
        }
    });
    /**
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
        function LyGrid(mediaQueries, theme, elementRef) {
            this.mediaQueries = mediaQueries;
            this.theme = theme;
            this.elementRef = elementRef;
            /**
             * Styles
             * @ignore
             */
            this.classes = this.theme.addStyleSheet(styles, 'lyGrid');
            this.elementRef.nativeElement.classList.add(this.classes.root);
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
                    }, this.elementRef.nativeElement, this._negativeMarginClass);
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
            spacing: [{ type: core.Input }]
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
                throw new Error("Rquire");
            }
        }
        Object.defineProperty(LyGridCol.prototype, "col", {
            get: /**
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
                    this._colClass = this.theme.addStyle("lyGrid-negative-margin:" + val, function () {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9wdGlvbmFsLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxuLyoqXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlHcmlkJyk7XG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BhY2luZ0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGBpdGVtYCBhdHRyaWJ1dGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3BhY2luZygpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIHNldCBzcGFjaW5nKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zcGFjaW5nKSB7XG4gICAgICB0aGlzLl9zcGFjaW5nID0gdmFsO1xuICAgICAgdGhpcy5fc3BhY2luZ0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLXNwYWNpbmc6JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYHBhZGRpbmc6JHt2YWwgLyAyfXB4O2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2luZ1N0eWxlczoge1xuICAgICAgICAgICAgcGFkZGluZz86IHN0cmluZ1xuICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHsoK3ZhbHVlKSAvIDJ9cHhgO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYG1hcmdpbjoke3ZhbCAvIC0yfXB4O3dpZHRoOiBjYWxjKDEwMCUgKyAke3ZhbH1weCk7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXMgPSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYCR7KC12YWx1ZSkgLyAyfXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG5lZ2F0aXZlTWFyZ2luU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZENvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJxdWlyZWApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldENvbFN0eWxlKHZhbDogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgbWF4V2lkdGg6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogJzEwMCUnLFxuICAgIGZsZXhCYXNpczogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAwLFxuICAgIGZsZXhHcm93OiB2YWwgPyAwIDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xWYWwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsIGluIENPTF9WQUxVRVNcbiAgICAgICAgICAgICAgPyBDT0xfVkFMVUVTW3ZhbF1cbiAgICAgICAgICAgICAgOiBDT0xfVkFMVUVTW3ZhbF0gPSBgJHsrdmFsICogMTAwIC8gMTJ9JWA7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlHcmlkLCBMeUdyaWRDb2wgfSBmcm9tICcuL2dyaWQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlHcmlkLCBMeUdyaWRDb2xdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUdyaWQsIEx5R3JpZENvbF1cbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImVhY2hNZWRpYSIsIkRpcmVjdGl2ZSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiTFlfTUVESUFfUVVFUklFUyIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUlBLElBQU0sVUFBVSxHQUFHLEVBQUcsQ0FBQzs7SUFFdkIsSUFBTSxNQUFNLElBQUk7UUFDZCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLFlBQVk7U0FDeEI7S0FDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7UUF3RkQsZ0JBQ2dELFlBQWlCLEVBQ3ZELE9BQ0E7WUFGc0MsaUJBQVksR0FBWixZQUFZLENBQUs7WUFDdkQsVUFBSyxHQUFMLEtBQUs7WUFDTCxlQUFVLEdBQVYsVUFBVTs7Ozs7MkJBdEVWLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUF3RWxELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQWpFRCxzQkFDSSwyQkFBTzs7Ozs7OztnQkFEWDtnQkFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7Z0JBQ0QsVUFBWSxHQUFvQjtnQkFBaEMsaUJBaURDO2dCQWhEQyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFD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