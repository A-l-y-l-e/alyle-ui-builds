/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, Optional } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
import { LyFlexBase } from './flex-base';
/** @type {?} */
var GridDefaultValue = '100%';
/** @type {?} */
var __grid = {
    0: null,
    1: '8.333333333333334%',
    2: '16.666666666666668%',
    3: '25%',
    4: '33.333333333333336%',
    5: '41.66666666666667%',
    6: '50%',
    7: '58.333333333333336%',
    8: '66.66666666666667%',
    9: '75%',
    10: '83.33333333333334%',
    11: '91.66666666666667%',
    12: GridDefaultValue
};
/**
 * <grid>
 *   ...
 * </grid>
 */
var LyGrid = /** @class */ (function (_super) {
    tslib_1.__extends(LyGrid, _super);
    function LyGrid(mediaQueries, elementRef, renderer, coreTheme) {
        var _this = _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
        _this.rootClass = _this._coreTheme.setUpStyleSecondary('k-grid', ("width: 100%;" +
            "display:flex;" +
            "flex-wrap:wrap;" +
            "box-sizing:border-box;"));
        renderer.addClass(elementRef.nativeElement, _this.rootClass);
        return _this;
    }
    Object.defineProperty(LyGrid.prototype, "gutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutter;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.gutter !== val) {
                /** *
                 * create style
                  @type {?} */
                var newClass = this._createGutterClass(val, val);
                this._gutterClass = newClass;
                /** @type {?} */
                var newNegativeMarginClass = this._createNegativeMarginClass(val, val);
                this._updateClass(newNegativeMarginClass, this._negativeMarginClass);
                this._negativeMarginClass = newNegativeMarginClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyGrid.prototype, "gutterClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterClass;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * create padding for childs
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyGrid.prototype._createGutterClass = /**
     * create padding for childs
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        this._gutter = val || 16;
        /** @type {?} */
        var newKey = "k-gridGutter:" + (key || this.gutter);
        return this._coreTheme.setUpStyle(newKey, function () {
            /** @type {?} */
            var padding = val / 2;
            return ("padding:" + padding + "px;");
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyGrid.prototype._createNegativeMarginClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._gutter = val || 16;
        /** @type {?} */
        var newKey = "k-gridNegativeMargin:" + (key || this.gutter);
        return this._coreTheme.setUpStyle(newKey, function () {
            /** @type {?} */
            var padding = val / -2;
            return ("margin:" + padding + "px;" +
                ("width: calc(100% + " + _this.gutter + "px);"));
        }, media);
    };
    LyGrid.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'grid:not(grid[col])',
                    exportAs: 'lyGrid'
                },] },
    ];
    /** @nocollapse */
    LyGrid.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: CoreTheme }
    ]; };
    LyGrid.propDecorators = {
        gutter: [{ type: Input }]
    };
    return LyGrid;
}(LyFlexBase));
export { LyGrid };
if (false) {
    /** @type {?} */
    LyGrid.prototype._gutter;
    /** @type {?} */
    LyGrid.prototype._gutterClass;
    /** @type {?} */
    LyGrid.prototype._negativeMarginClass;
    /** @type {?} */
    LyGrid.prototype.rootClass;
}
/**
 * examples:
 *
 * <grid>
 *   <div col="9" colMedia="auto Small"></div>
 *   <div col="auto"></div>
 * </grid>
 */
var LyGridCol = /** @class */ (function (_super) {
    tslib_1.__extends(LyGridCol, _super);
    function LyGridCol(mediaQueries, gridContainer, elementRef, renderer, coreTheme) {
        var _this = _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
        _this.gridContainer = gridContainer;
        return _this;
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
            if (this.col !== val) {
                // /** create Style */
                // const newClass = this._createColClass(val, val);
                // this._updateClass(newClass, this._colClass);
                // this._colClass = newClass;
                if (!this._rawClass) {
                    this._rawClass = [];
                }
                /** *
                 * Save previous classes
                  @type {?} */
                var prevClasses = this._rawClass;
                /** Clear rawClass */
                if (this._rawClass.length) {
                    this._rawClass = [];
                }
                /** @type {?} */
                var valArray = typeof val === 'string' ? val.split(' ') : val;
                valArray.forEach(function (key) {
                    /** @type {?} */
                    var newClass;
                    /** @type {?} */
                    var values = key.split('@');
                    newClass = _this._createColClass(key, /** @type {?} */ (values[0]), _this._mediaQueries[(values[1])]);
                    _this._rawClass.push(newClass);
                });
                /** Delete previous classes if they exist */
                if (prevClasses.length) {
                    prevClasses.forEach(function (klass) {
                        _this._renderer.removeClass(_this._elementRef.nativeElement, klass);
                    });
                }
                /** Add new class */
                this._rawClass.forEach(function (klass) {
                    _this._renderer.addClass(_this._elementRef.nativeElement, klass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyGridCol.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** apply gutter class if exists */
        if (this.gridContainer.gutter) {
            /** @type {?} */
            var newClass = this.gridContainer.gutterClass;
            this._updateClass(newClass, this._gutterClass);
            this._gutterClass = newClass;
        }
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyGridCol.prototype._createColClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this.colVal = val || null;
        /** @type {?} */
        var newKey = "k-gridCol:" + (key || this.colVal);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            if (_this.colVal) {
                /** @type {?} */
                var newVal = __grid[_this.colVal];
                return ("max-width:" + newVal + ";" +
                    ("flex-basis:" + newVal + ";") +
                    "flex-grow:0;");
            }
            else {
                return ("max-width:100%;" +
                    "flex-basis:0;" +
                    "flex-grow:1;");
            }
        }, media);
    };
    LyGridCol.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'grid[col]',
                    exportAs: 'lyGridItem'
                },] },
    ];
    /** @nocollapse */
    LyGridCol.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
        { type: LyGrid },
        { type: ElementRef },
        { type: Renderer2 },
        { type: CoreTheme }
    ]; };
    LyGridCol.propDecorators = {
        col: [{ type: Input }]
    };
    return LyGridCol;
}(LyFlexBase));
export { LyGridCol };
if (false) {
    /** @type {?} */
    LyGridCol.prototype._col;
    /** @type {?} */
    LyGridCol.prototype._colClass;
    /** @type {?} */
    LyGridCol.prototype.colVal;
    /** @type {?} */
    LyGridCol.prototype._gutterClass;
    /** @type {?} */
    LyGridCol.prototype._rawClass;
    /** @type {?} */
    LyGridCol.prototype.gridContainer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGF5b3V0LyIsInNvdXJjZXMiOlsiZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFekMsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7O0FBRWhDLElBQU0sTUFBTSxHQUFHO0lBQ2IsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsb0JBQW9CO0lBQ3ZCLENBQUMsRUFBRSxxQkFBcUI7SUFDeEIsQ0FBQyxFQUFFLEtBQUs7SUFDUixDQUFDLEVBQUUscUJBQXFCO0lBQ3hCLENBQUMsRUFBRSxvQkFBb0I7SUFDdkIsQ0FBQyxFQUFFLEtBQUs7SUFDUixDQUFDLEVBQUUscUJBQXFCO0lBQ3hCLENBQUMsRUFBRSxvQkFBb0I7SUFDdkIsQ0FBQyxFQUFFLEtBQUs7SUFDUixFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCLEVBQUUsRUFBRSxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLGdCQUFnQjtDQUNyQixDQUFDOzs7Ozs7O0lBWTBCLGtDQUFVO0lBNkJwQyxnQkFDd0MsWUFBaUIsRUFDdkQsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsU0FBb0I7UUFKdEIsWUFNRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FFckQ7MEJBakNXLEtBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQ3hE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REFzREksUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBQ2QsTUFBTTtnQkF6S00sVUFBVTtnQkFBckIsU0FBUztnQkFDM0IsU0FBUzs7O3NCQTJIZixLQUFLOztvQkE1SFI7RUFtSCtCLFVBQVU7U0FBNUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5jb25zdCBHcmlkRGVmYXVsdFZhbHVlID0gJzEwMCUnO1xuXG5jb25zdCBfX2dyaWQgPSB7XG4gIDA6IG51bGwsXG4gIDE6ICc4LjMzMzMzMzMzMzMzMzMzNCUnLFxuICAyOiAnMTYuNjY2NjY2NjY2NjY2NjY4JScsXG4gIDM6ICcyNSUnLFxuICA0OiAnMzMuMzMzMzMzMzMzMzMzMzM2JScsXG4gIDU6ICc0MS42NjY2NjY2NjY2NjY2NyUnLFxuICA2OiAnNTAlJyxcbiAgNzogJzU4LjMzMzMzMzMzMzMzMzMzNiUnLFxuICA4OiAnNjYuNjY2NjY2NjY2NjY2NjclJyxcbiAgOTogJzc1JScsXG4gIDEwOiAnODMuMzMzMzMzMzMzMzMzMzQlJyxcbiAgMTE6ICc5MS42NjY2NjY2NjY2NjY2NyUnLFxuICAxMjogR3JpZERlZmF1bHRWYWx1ZVxufTtcblxuLyoqXG4gKiA8Z3JpZD5cbiAqICAgLi4uXG4gKiA8L2dyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ3JpZDpub3QoZ3JpZFtjb2xdKScsXG4gIGV4cG9ydEFzOiAnbHlHcmlkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQgZXh0ZW5kcyBMeUZsZXhCYXNlIHtcbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M6IHN0cmluZztcbiAgcm9vdENsYXNzID0gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoJ2stZ3JpZCcsIChcbiAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICBgZmxleC13cmFwOndyYXA7YCArXG4gICAgYGJveC1zaXppbmc6Ym9yZGVyLWJveDtgXG4gICkpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5ndXR0ZXIgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBzdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgY29uc3QgbmV3TmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMuX2NyZWF0ZU5lZ2F0aXZlTWFyZ2luQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3TmVnYXRpdmVNYXJnaW5DbGFzcywgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gbmV3TmVnYXRpdmVNYXJnaW5DbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG4gIGdldCBndXR0ZXJDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQ2xhc3M7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucm9vdENsYXNzKTtcbiAgfVxuXG4gIC8qKiBjcmVhdGUgcGFkZGluZyBmb3IgY2hpbGRzICovXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKGtleTogbnVtYmVyLCB2YWw6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWwgfHwgMTY7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZEd1dHRlcjoke2tleSB8fCB0aGlzLmd1dHRlcn1gO1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB2YWwgLyAyO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBwYWRkaW5nOiR7cGFkZGluZ31weDtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG4gIHByaXZhdGUgX2NyZWF0ZU5lZ2F0aXZlTWFyZ2luQ2xhc3Moa2V5OiBudW1iZXIsIHZhbDogbnVtYmVyLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2d1dHRlciA9IHZhbCB8fCAxNjtcbiAgICBjb25zdCBuZXdLZXkgPSBgay1ncmlkTmVnYXRpdmVNYXJnaW46JHtrZXkgfHwgdGhpcy5ndXR0ZXJ9YDtcbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gdmFsIC8gLTI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbjoke3BhZGRpbmd9cHg7YCArXG4gICAgICAgICAgYHdpZHRoOiBjYWxjKDEwMCUgKyAke3RoaXMuZ3V0dGVyfXB4KTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogZXhhbXBsZXM6XG4gKlxuICogPGdyaWQ+XG4gKiAgIDxkaXYgY29sPVwiOVwiIGNvbE1lZGlhPVwiYXV0byBTbWFsbFwiPjwvZGl2PlxuICogICA8ZGl2IGNvbD1cImF1dG9cIj48L2Rpdj5cbiAqIDwvZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdncmlkW2NvbF0nLFxuICBleHBvcnRBczogJ2x5R3JpZEl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZENvbCBleHRlbmRzIEx5RmxleEJhc2UgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmc7XG4gIGNvbFZhbDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF3Q2xhc3M6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmNvbCAhPT0gdmFsKSB7XG4gICAgICAvLyAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUNvbENsYXNzKHZhbCwgdmFsKTtcbiAgICAgIC8vIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9jb2xDbGFzcyk7XG4gICAgICAvLyB0aGlzLl9jb2xDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgaWYgKCF0aGlzLl9yYXdDbGFzcykge1xuICAgICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICAvKiogU2F2ZSBwcmV2aW91cyBjbGFzc2VzICAqL1xuICAgICAgY29uc3QgcHJldkNsYXNzZXMgPSB0aGlzLl9yYXdDbGFzcztcblxuICAgICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgICBpZiAodGhpcy5fcmF3Q2xhc3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbEFycmF5ID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwuc3BsaXQoJyAnKSA6IHZhbDtcbiAgICAgIHZhbEFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXkuc3BsaXQoJ0AnKTtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVDb2xDbGFzcyhrZXksIHZhbHVlc1swXSBhcyBhbnksIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzFdKV0pO1xuICAgICAgICB0aGlzLl9yYXdDbGFzcy5wdXNoKG5ld0NsYXNzKTtcbiAgICAgIH0pO1xuICAgICAgLyoqIERlbGV0ZSBwcmV2aW91cyBjbGFzc2VzIGlmIHRoZXkgZXhpc3QgKi9cbiAgICAgIGlmIChwcmV2Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLyoqIEFkZCBuZXcgY2xhc3MgKi9cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgcHVibGljIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLyoqIGFwcGx5IGd1dHRlciBjbGFzcyBpZiBleGlzdHMgKi9cbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLmd1dHRlcikge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmdyaWRDb250YWluZXIuZ3V0dGVyQ2xhc3M7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDb2xDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xWYWwgPSB2YWwgfHwgbnVsbDtcbiAgICBjb25zdCBuZXdLZXkgPSBgay1ncmlkQ29sOiR7a2V5IHx8IHRoaXMuY29sVmFsfWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbFZhbCkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IF9fZ3JpZFt0aGlzLmNvbFZhbF07XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGBtYXgtd2lkdGg6JHtuZXdWYWx9O2AgK1xuICAgICAgICAgICAgYGZsZXgtYmFzaXM6JHtuZXdWYWx9O2AgK1xuICAgICAgICAgICAgYGZsZXgtZ3JvdzowO2BcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgbWF4LXdpZHRoOjEwMCU7YCArXG4gICAgICAgICAgICBgZmxleC1iYXNpczowO2AgK1xuICAgICAgICAgICAgYGZsZXgtZ3JvdzoxO2BcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG4iXX0=