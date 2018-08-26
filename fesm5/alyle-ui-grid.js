import { Directive, ElementRef, Input, Optional, Inject, NgModule } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';

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
         */
        function () {
            return this._spacing;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
                        eachMedia(val, function (value, media, len) {
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
         */
        function () {
            return this._spacingClass;
        },
        enumerable: true,
        configurable: true
    });
    LyGrid.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-grid[container]'
                },] },
    ];
    /** @nocollapse */
    LyGrid.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyGrid.propDecorators = {
        spacing: [{ type: Input }]
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
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this.col) {
                this._colClass = this.theme.addStyle("lyGrid-negative-margin:" + val, function () {
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
        { type: Directive, args: [{
                    selector: 'ly-grid[item]'
                },] },
    ];
    /** @nocollapse */
    LyGridCol.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
        { type: LyGrid },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyGridCol.propDecorators = {
        col: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { LyGrid, LyGridCol, LyGridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC50cyIsIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3B0aW9uYWwsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5cbmNvbnN0IENPTF9WQUxVRVMgPSB7IH07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG4vKipcbiAqIGV4YW1wbGU6XG4gKiA8bHktZ3JpZCBjb250YWluZXIgW3NwYWNpbmddPVwiJzE2IDhAWFNtYWxsJ1wiPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogICA8bHktZ3JpZCBpdGVtIFtjb2xdPVwiJzYgMTJAWFNtYWxsJ1wiPlxuICogICAgIDxkaXY+NiAxMkBYU21hbGw8L2Rpdj5cbiAqICAgPC9seS1ncmlkPlxuICogPC9seS1ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2NvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUdyaWQnKTtcbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNwYWNpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ0NsYXNzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkQ29sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sKSB7XG4gICAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q29sU3R5bGUodmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29sU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXhXaWR0aD86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEJhc2lzPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4R3Jvdz86IG51bWJlclxuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2xTdHlsZXMgPSBnZXRDb2xTdHlsZSgrdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIWNvbFN0eWxlcykge1xuICAgICAgICAgICAgICAgIGNvbFN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbFN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUnF1aXJlYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcyk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Q29sU3R5bGUodmFsOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXhXaWR0aDogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAnMTAwJScsXG4gICAgZmxleEJhc2lzOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6IDAsXG4gICAgZmxleEdyb3c6IHZhbCA/IDAgOiAxXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbFZhbCh2YWw6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWwgaW4gQ09MX1ZBTFVFU1xuICAgICAgICAgICAgICA/IENPTF9WQUxVRVNbdmFsXVxuICAgICAgICAgICAgICA6IENPTF9WQUxVRVNbdmFsXSA9IGAkeyt2YWwgKiAxMDAgLyAxMn0lYDtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUdyaWQsIEx5R3JpZENvbCB9IGZyb20gJy4vZ3JpZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUdyaWQsIEx5R3JpZENvbF0sXG4gIGRlY2xhcmF0aW9uczogW0x5R3JpZCwgTHlHcmlkQ29sXVxufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUlBLElBQU0sVUFBVSxHQUFHLEVBQUcsQ0FBQzs7QUFFdkIsSUFBTSxNQUFNLElBQUk7SUFDZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7Q0FDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7SUF3RkQsZ0JBQ2dELFlBQWlCLEVBQ3ZELE9BQ0E7UUFGc0MsaUJBQVksR0FBWixZQUFZLENBQUs7UUFDdkQsVUFBSyxHQUFMLEtBQUs7UUFDTCxlQUFVLEdBQVYsVUFBVTs7Ozs7dUJBdEVWLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7UUF3RWxELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoRTtJQWpFRCxzQkFDSSwyQkFBTzs7Ozs7Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFDRCxVQUFZLEdBQW9CO1lBQWhDLGlCQWlEQztZQWhEQyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBa0IsR0FBSyxFQUFFO29CQUNoRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTt3QkFDM0IsT0FBTyxhQUFXLEdBQUcsR0FBRyxDQUFDLFFBQUssQ0FBQztxQkFDaEM7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