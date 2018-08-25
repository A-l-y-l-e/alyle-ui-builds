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
            this.classes = this.theme.addStyleSheet(styles, 'lyGrid');
            this.elementRef.nativeElement.classList.add(this.classes.root);
        }
        Object.defineProperty(LyGrid.prototype, "spacing", {
            get: /**
             * @return {?}
             */ function () {
                return this._spacing;
            },
            /**
             * example:
             * <ly-grid container spacing="24 8@Small@XSmal">
             */
            set: /**
             * example:
             * <ly-grid container spacing="24 8\@Small\@XSmal">
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9wdGlvbmFsLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxuLyoqXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5R3JpZCcpO1xuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3NwYWNpbmdDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGV4YW1wbGU6XG4gICAqIDxseS1ncmlkIGNvbnRhaW5lciBzcGFjaW5nPVwiMjQgOEBTbWFsbEBYU21hbFwiPlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBzcGFjaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZENvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBjb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBScXVpcmVgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5R3JpZCwgTHlHcmlkQ29sIH0gZnJvbSAnLi9ncmlkJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5R3JpZCwgTHlHcmlkQ29sXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlHcmlkLCBMeUdyaWRDb2xdXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJlYWNoTWVkaWEiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIkluamVjdCIsIkxZX01FRElBX1FVRVJJRVMiLCJMeVRoZW1lMiIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFJQSxJQUFNLFVBQVUsR0FBRyxFQUFHLENBQUM7O0lBRXZCLElBQU0sTUFBTSxJQUFJO1FBQ2QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCO0tBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O1FBb0ZELGdCQUNnRCxZQUFpQixFQUN2RCxPQUNBO1lBRnNDLGlCQUFZLEdBQVosWUFBWSxDQUFLO1lBQ3ZELFVBQUssR0FBTCxLQUFLO1lBQ0wsZUFBVSxHQUFWLFVBQVU7MkJBdEVWLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUF3RWxELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQWhFRCxzQkFDSSwyQkFBTzs7O2dCQWtEWDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7Ozs7Ozs7Z0JBckRELFVBQ1ksR0FBb0I7Z0JBRGhDLGlCQWtEQztnQkFoREMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQWtCLEdBQUssRUFBRTt3QkFDaEUsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7NEJBQzNCLE9BQU8sYUFB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