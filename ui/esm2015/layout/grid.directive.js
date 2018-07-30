/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef, Inject, Optional } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
import { LyFlexBase } from './flex-base';
const /** @type {?} */ GridDefaultValue = '100%';
const /** @type {?} */ __grid = {
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
export class LyGrid extends LyFlexBase {
    /**
     * @param {?} mediaQueries
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} coreTheme
     */
    constructor(mediaQueries, elementRef, renderer, coreTheme) {
        super(elementRef, renderer, coreTheme, mediaQueries);
        this.rootClass = this._coreTheme.setUpStyleSecondary('k-grid', (`width: 100%;` +
            `display:flex;` +
            `flex-wrap:wrap;` +
            `box-sizing:border-box;`));
        renderer.addClass(elementRef.nativeElement, this.rootClass);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutter(val) {
        if (this.gutter !== val) {
            /**
             * create style
             */
            const /** @type {?} */ newClass = this._createGutterClass(val, val);
            this._gutterClass = newClass;
            const /** @type {?} */ newNegativeMarginClass = this._createNegativeMarginClass(val, val);
            this._updateClass(newNegativeMarginClass, this._negativeMarginClass);
            this._negativeMarginClass = newNegativeMarginClass;
        }
    }
    /**
     * @return {?}
     */
    get gutter() {
        return this._gutter;
    }
    /**
     * @return {?}
     */
    get gutterClass() {
        return this._gutterClass;
    }
    /**
     * create padding for childs
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createGutterClass(key, val, media) {
        this._gutter = val || 16;
        const /** @type {?} */ newKey = `k-gridGutter:${key || this.gutter}`;
        return this._coreTheme.setUpStyle(newKey, () => {
            const /** @type {?} */ padding = val / 2;
            return (`padding:${padding}px;`);
        }, media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createNegativeMarginClass(key, val, media) {
        this._gutter = val || 16;
        const /** @type {?} */ newKey = `k-gridNegativeMargin:${key || this.gutter}`;
        return this._coreTheme.setUpStyle(newKey, () => {
            const /** @type {?} */ padding = val / -2;
            return (`margin:${padding}px;` +
                `width: calc(100% + ${this.gutter}px);`);
        }, media);
    }
}
LyGrid.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'grid:not(grid[col])',
                exportAs: 'lyGrid'
            },] },
];
/** @nocollapse */
LyGrid.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: CoreTheme, },
];
LyGrid.propDecorators = {
    "gutter": [{ type: Input },],
};
function LyGrid_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyGrid.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyGrid.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyGrid.propDecorators;
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
export class LyGridCol extends LyFlexBase {
    /**
     * @param {?} mediaQueries
     * @param {?} gridContainer
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} coreTheme
     */
    constructor(mediaQueries, gridContainer, elementRef, renderer, coreTheme) {
        super(elementRef, renderer, coreTheme, mediaQueries);
        this.gridContainer = gridContainer;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set col(val) {
        if (this.col !== val) {
            // /** create Style */
            // const newClass = this._createColClass(val, val);
            // this._updateClass(newClass, this._colClass);
            // this._colClass = newClass;
            if (!this._rawClass) {
                this._rawClass = [];
            }
            /**
             * Save previous classes
             */
            const /** @type {?} */ prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            const /** @type {?} */ valArray = typeof val === 'string' ? val.split(' ') : val;
            valArray.forEach(key => {
                let /** @type {?} */ newClass;
                const /** @type {?} */ values = key.split('@');
                newClass = this._createColClass(key, /** @type {?} */ (values[0]), this._mediaQueries[(values[1])]);
                this._rawClass.push(newClass);
            });
            /** Delete previous classes if they exist */
            if (prevClasses.length) {
                prevClasses.forEach(klass => {
                    this._renderer.removeClass(this._elementRef.nativeElement, klass);
                });
            }
            /** Add new class */
            this._rawClass.forEach(klass => {
                this._renderer.addClass(this._elementRef.nativeElement, klass);
            });
        }
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** apply gutter class if exists */
        if (this.gridContainer.gutter) {
            const /** @type {?} */ newClass = this.gridContainer.gutterClass;
            this._updateClass(newClass, this._gutterClass);
            this._gutterClass = newClass;
        }
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createColClass(key, val, media) {
        this.colVal = val || null;
        const /** @type {?} */ newKey = `k-gridCol:${key || this.colVal}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => {
            if (this.colVal) {
                const /** @type {?} */ newVal = __grid[this.colVal];
                return (`max-width:${newVal};` +
                    `flex-basis:${newVal};` +
                    `flex-grow:0;`);
            }
            else {
                return (`max-width:100%;` +
                    `flex-basis:0;` +
                    `flex-grow:1;`);
            }
        }, media);
    }
}
LyGridCol.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'grid[col]',
                exportAs: 'lyGridItem'
            },] },
];
/** @nocollapse */
LyGridCol.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
    { type: LyGrid, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: CoreTheme, },
];
LyGridCol.propDecorators = {
    "col": [{ type: Input },],
};
function LyGridCol_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyGridCol.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyGridCol.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyGridCol.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGF5b3V0LyIsInNvdXJjZXMiOlsiZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXpDLHVCQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztBQUVoQyx1QkFBTSxNQUFNLEdBQUc7SUFDYixDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxvQkFBb0I7SUFDdkIsQ0FBQyxFQUFFLHFCQUFxQjtJQUN4QixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxxQkFBcUI7SUFDeEIsQ0FBQyxFQUFFLG9CQUFvQjtJQUN2QixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxxQkFBcUI7SUFDeEIsQ0FBQyxFQUFFLG9CQUFvQjtJQUN2QixDQUFDLEVBQUUsS0FBSztJQUNSLEVBQUUsRUFBRSxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLG9CQUFvQjtJQUN4QixFQUFFLEVBQUUsZ0JBQWdCO0NBQ3JCLENBQUM7Ozs7OztBQVlGLE1BQU0sYUFBYyxTQUFRLFVBQVU7Ozs7Ozs7SUE2QnBDLFlBQ3dDLGNBQ3RDLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFNBQW9CO1FBRXBCLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkEvQjNDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQ3hELGNBQWM7WUFDZCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLHdCQUF3QixDQUN6QixDQUFDO1FBMkJBLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDN0Q7Ozs7O1FBekJHLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Ozs7WUFFdkIsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsdUJBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztTQUNwRDs7Ozs7SUFFSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7Ozs7O0lBYU8sa0JBQWtCLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFjO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUN6Qix1QkFBTSxNQUFNLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQ3RDLEdBQUcsRUFBRTtZQUNILHVCQUFNLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FDTCxXQUFXLE9BQU8sS0FBSyxDQUN4QixDQUFDO1NBQ0gsRUFDRCxLQUFLLENBQ04sQ0FBQzs7Ozs7Ozs7SUFFSSwwQkFBMEIsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWM7UUFDekUsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3pCLHVCQUFNLE1BQU0sR0FBRyx3QkFBd0IsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDdEMsR0FBRyxFQUFFO1lBQ0gsdUJBQU0sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQ0wsVUFBVSxPQUFPLEtBQUs7Z0JBQ3RCLHNCQUFzQixJQUFJLENBQUMsTUFBTSxNQUFNLENBQ3hDLENBQUM7U0FDSCxFQUNELEtBQUssQ0FDTixDQUFDOzs7O1lBdEVMLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLFFBQVE7YUFDbkI7Ozs7NENBK0JJLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBL0RGLFVBQVU7WUFBckIsU0FBUztZQUMzQixTQUFTOzs7dUJBMkNmLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVSLE1BQU0sZ0JBQWlCLFNBQVEsVUFBVTs7Ozs7Ozs7SUFvRHZDLFlBQ3dDLGNBQy9CLGVBQ1AsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsU0FBb0I7UUFFcEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTDlDLGtCQUFhLEdBQWIsYUFBYTtLQU1yQjs7Ozs7UUFsREcsR0FBRyxDQUFDLEdBQXNCO1FBQzVCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Ozs7O1lBS3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUNyQjs7OztZQUdELHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztZQUduQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUNyQjtZQUVELHVCQUFNLFFBQVEsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNoRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixxQkFBSSxRQUFRLENBQUM7Z0JBQ2IsdUJBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsb0JBQUUsTUFBTSxDQUFDLENBQUMsQ0FBUSxHQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CLENBQUMsQ0FBQzs7WUFFSCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNuRSxDQUFDLENBQUM7YUFDSjs7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDaEUsQ0FBQyxDQUFDO1NBQ0o7Ozs7O0lBR0gsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBWUQsa0JBQWtCOztRQUVoQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQzdCLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7U0FDOUI7S0FDRjs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQzFCLHVCQUFNLE1BQU0sR0FBRyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBRWpELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUN0QyxHQUFHLEVBQUU7WUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FDTCxhQUFhLE1BQU0sR0FBRztvQkFDdEIsY0FBYyxNQUFNLEdBQUc7b0JBQ3ZCLGNBQWMsQ0FDZixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxDQUNMLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixjQUFjLENBQ2YsQ0FBQzthQUNIO1NBQ0YsRUFDRCxLQUFLLENBQ04sQ0FBQzs7OztZQWxHTCxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsWUFBWTthQUN2Qjs7Ozs0Q0FzREksUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7WUF2STNCLE1BQU07WUFqQ21CLFVBQVU7WUFBckIsU0FBUztZQUMzQixTQUFTOzs7b0JBMkhmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgT3B0aW9uYWwsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgTHlGbGV4QmFzZSB9IGZyb20gJy4vZmxleC1iYXNlJztcblxuY29uc3QgR3JpZERlZmF1bHRWYWx1ZSA9ICcxMDAlJztcblxuY29uc3QgX19ncmlkID0ge1xuICAwOiBudWxsLFxuICAxOiAnOC4zMzMzMzMzMzMzMzMzMzQlJyxcbiAgMjogJzE2LjY2NjY2NjY2NjY2NjY2OCUnLFxuICAzOiAnMjUlJyxcbiAgNDogJzMzLjMzMzMzMzMzMzMzMzMzNiUnLFxuICA1OiAnNDEuNjY2NjY2NjY2NjY2NjclJyxcbiAgNjogJzUwJScsXG4gIDc6ICc1OC4zMzMzMzMzMzMzMzMzMzYlJyxcbiAgODogJzY2LjY2NjY2NjY2NjY2NjY3JScsXG4gIDk6ICc3NSUnLFxuICAxMDogJzgzLjMzMzMzMzMzMzMzMzM0JScsXG4gIDExOiAnOTEuNjY2NjY2NjY2NjY2NjclJyxcbiAgMTI6IEdyaWREZWZhdWx0VmFsdWVcbn07XG5cbi8qKlxuICogPGdyaWQ+XG4gKiAgIC4uLlxuICogPC9ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dyaWQ6bm90KGdyaWRbY29sXSknLFxuICBleHBvcnRBczogJ2x5R3JpZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIGV4dGVuZHMgTHlGbGV4QmFzZSB7XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG4gIHJvb3RDbGFzcyA9IHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KCdrLWdyaWQnLCAoXG4gICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgYGZsZXgtd3JhcDp3cmFwO2AgK1xuICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YFxuICApKTtcblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZ3V0dGVyICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgc3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIGNvbnN0IG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLl9jcmVhdGVOZWdhdGl2ZU1hcmdpbkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3MsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuICBnZXQgZ3V0dGVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlckNsYXNzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJvb3RDbGFzcyk7XG4gIH1cblxuICAvKiogY3JlYXRlIHBhZGRpbmcgZm9yIGNoaWxkcyAqL1xuICBwcml2YXRlIF9jcmVhdGVHdXR0ZXJDbGFzcyhrZXk6IG51bWJlciwgdmFsOiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsIHx8IDE2O1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWdyaWRHdXR0ZXI6JHtrZXkgfHwgdGhpcy5ndXR0ZXJ9YDtcbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gdmFsIC8gMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgcGFkZGluZzoke3BhZGRpbmd9cHg7YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuICBwcml2YXRlIF9jcmVhdGVOZWdhdGl2ZU1hcmdpbkNsYXNzKGtleTogbnVtYmVyLCB2YWw6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWwgfHwgMTY7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZE5lZ2F0aXZlTWFyZ2luOiR7a2V5IHx8IHRoaXMuZ3V0dGVyfWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHZhbCAvIC0yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW46JHtwYWRkaW5nfXB4O2AgK1xuICAgICAgICAgIGB3aWR0aDogY2FsYygxMDAlICsgJHt0aGlzLmd1dHRlcn1weCk7YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIGV4YW1wbGVzOlxuICpcbiAqIDxncmlkPlxuICogICA8ZGl2IGNvbD1cIjlcIiBjb2xNZWRpYT1cImF1dG8gU21hbGxcIj48L2Rpdj5cbiAqICAgPGRpdiBjb2w9XCJhdXRvXCI+PC9kaXY+XG4gKiA8L2dyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ3JpZFtjb2xdJyxcbiAgZXhwb3J0QXM6ICdseUdyaWRJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRDb2wgZXh0ZW5kcyBMeUZsZXhCYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuICBjb2xWYWw6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Jhd0NsYXNzOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jb2wgIT09IHZhbCkge1xuICAgICAgLy8gLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVDb2xDbGFzcyh2YWwsIHZhbCk7XG4gICAgICAvLyB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fY29sQ2xhc3MpO1xuICAgICAgLy8gdGhpcy5fY29sQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICAgIGNvbnN0IHByZXZDbGFzc2VzID0gdGhpcy5fcmF3Q2xhc3M7XG5cbiAgICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxBcnJheSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnNwbGl0KCcgJykgOiB2YWw7XG4gICAgICB2YWxBcnJheS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCdAJyk7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQ29sQ2xhc3Moa2V5LCB2YWx1ZXNbMF0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1sxXSldKTtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MucHVzaChuZXdDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgICBpZiAocHJldkNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgICB0aGlzLl9yYXdDbGFzcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIHB1YmxpYyBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgY29yZVRoZW1lLCBtZWRpYVF1ZXJpZXMpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8qKiBhcHBseSBndXR0ZXIgY2xhc3MgaWYgZXhpc3RzICovXG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5ndXR0ZXIpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5ncmlkQ29udGFpbmVyLmd1dHRlckNsYXNzO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29sQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuY29sVmFsID0gdmFsIHx8IG51bGw7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZENvbDoke2tleSB8fCB0aGlzLmNvbFZhbH1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb2xWYWwpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSBfX2dyaWRbdGhpcy5jb2xWYWxdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgbWF4LXdpZHRoOiR7bmV3VmFsfTtgICtcbiAgICAgICAgICAgIGBmbGV4LWJhc2lzOiR7bmV3VmFsfTtgICtcbiAgICAgICAgICAgIGBmbGV4LWdyb3c6MDtgXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYG1heC13aWR0aDoxMDAlO2AgK1xuICAgICAgICAgICAgYGZsZXgtYmFzaXM6MDtgICtcbiAgICAgICAgICAgIGBmbGV4LWdyb3c6MTtgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuIl19