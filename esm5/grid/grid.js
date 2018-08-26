/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Optional, Inject } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
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
export { LyGrid };
if (false) {
    /**
     * Styles
     * @ignore
     * @type {?}
     */
    LyGrid.prototype.classes;
    /** @type {?} */
    LyGrid.prototype._spacing;
    /** @type {?} */
    LyGrid.prototype._spacingClass;
    /** @type {?} */
    LyGrid.prototype._negativeMarginClass;
    /** @type {?} */
    LyGrid.prototype.mediaQueries;
    /** @type {?} */
    LyGrid.prototype.theme;
    /** @type {?} */
    LyGrid.prototype.elementRef;
}
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
export { LyGridCol };
if (false) {
    /** @type {?} */
    LyGridCol.prototype._col;
    /** @type {?} */
    LyGridCol.prototype._colClass;
    /** @type {?} */
    LyGridCol.prototype.mediaQueries;
    /** @type {?} */
    LyGridCol.prototype.gridContainer;
    /** @type {?} */
    LyGridCol.prototype.el;
    /** @type {?} */
    LyGridCol.prototype.theme;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXhELElBQU0sVUFBVSxHQUFHLEVBQUcsQ0FBQzs7QUFFdkIsSUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsWUFBWTtLQUN4QjtDQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQXdGRCxnQkFDZ0QsWUFBaUIsRUFDdkQsT0FDQTtRQUZzQyxpQkFBWSxHQUFaLFlBQVksQ0FBSztRQUN2RCxVQUFLLEdBQUwsS0FBSztRQUNMLGVBQVUsR0FBVixVQUFVOzs7Ozt1QkF0RVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQXdFbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hFO0lBakVELHNCQUNJLDJCQUFPO1FBSlg7O1dBRUc7Ozs7O1FBQ0g7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBQ0QsVUFBWSxHQUFvQjtZQUFoQyxpQkFpREM7WUFoREMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsSUFBSSxDQUFD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Q3RFOzs7Z0JBekRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0RBc0NJLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQUNiLE1BQU07Z0JBdkpiLFVBQVU7Z0JBQ3JCLFFBQVE7OztzQkFvSGQsS0FBSzs7b0JBckhSOztTQWlIYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkR0QixxQkFBcUIsR0FBVztJQUM5QixPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEIsQ0FBQztDQUNIOzs7OztBQUVELG1CQUFtQixHQUFvQjtJQUNyQyxPQUFPLEdBQUcsSUFBSSxVQUFVO1FBQ1osQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDakIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFHLENBQUM7Q0FDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPcHRpb25hbCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBlYWNoTWVkaWEgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcblxuY29uc3QgQ09MX1ZBTFVFUyA9IHsgfTtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufSk7XG5cbi8qKlxuICogZXhhbXBsZTpcbiAqIDxseS1ncmlkIGNvbnRhaW5lciBbc3BhY2luZ109XCInMTYgOEBYU21hbGwnXCI+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiA8L2x5LWdyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5R3JpZCcpO1xuICBwcml2YXRlIF9zcGFjaW5nOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3NwYWNpbmdDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBwYWRkaW5nOiR7dmFsIC8gMn1weDtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBtYXJnaW46JHt2YWwgLyAtMn1weDt3aWR0aDogY2FsYygxMDAlICsgJHt2YWx9cHgpO2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzID0ge1xuICAgICAgICAgICAgICBtYXJnaW46IGAkeygtdmFsdWUpIC8gMn1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3BhY2luZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nQ2xhc3M7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRDb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9jb2w6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgY29sKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb2wpIHtcbiAgICAgIHRoaXMuX2NvbENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBnZXRDb2xTdHlsZSh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBjb2xTdHlsZXM6IHtcbiAgICAgICAgICAgIG1heFdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4QmFzaXM/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhHcm93PzogbnVtYmVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbFN0eWxlcyA9IGdldENvbFN0eWxlKCt2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghY29sU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgY29sU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29sU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xTdHlsZXMgPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNvbFN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBScXVpcmVgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIl19