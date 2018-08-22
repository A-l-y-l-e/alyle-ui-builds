/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef, Inject, Optional } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
import { LyFlexBase } from './flex-base';
/** @type {?} */
const GridDefaultValue = '100%';
/** @type {?} */
const __grid = {
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
            /** *
             * create style
              @type {?} */
            const newClass = this._createGutterClass(val, val);
            this._gutterClass = newClass;
            /** @type {?} */
            const newNegativeMarginClass = this._createNegativeMarginClass(val, val);
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
        /** @type {?} */
        const newKey = `k-gridGutter:${key || this.gutter}`;
        return this._coreTheme.setUpStyle(newKey, () => {
            /** @type {?} */
            const padding = val / 2;
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
        /** @type {?} */
        const newKey = `k-gridNegativeMargin:${key || this.gutter}`;
        return this._coreTheme.setUpStyle(newKey, () => {
            /** @type {?} */
            const padding = val / -2;
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
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: CoreTheme }
];
LyGrid.propDecorators = {
    gutter: [{ type: Input }]
};
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
            /** *
             * Save previous classes
              @type {?} */
            const prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            /** @type {?} */
            const valArray = typeof val === 'string' ? val.split(' ') : val;
            valArray.forEach(key => {
                /** @type {?} */
                let newClass;
                /** @type {?} */
                const values = key.split('@');
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
            /** @type {?} */
            const newClass = this.gridContainer.gutterClass;
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
        /** @type {?} */
        const newKey = `k-gridCol:${key || this.colVal}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => {
            if (this.colVal) {
                /** @type {?} */
                const newVal = __grid[this.colVal];
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
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
    { type: LyGrid },
    { type: ElementRef },
    { type: Renderer2 },
    { type: CoreTheme }
];
LyGridCol.propDecorators = {
    col: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGF5b3V0LyIsInNvdXJjZXMiOlsiZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUV6QyxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQzs7QUFFaEMsTUFBTSxNQUFNLEdBQUc7SUFDYixDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxvQkFBb0I7SUFDdkIsQ0FBQyxFQUFFLHFCQUFxQjtJQUN4QixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxxQkFBcUI7SUFDeEIsQ0FBQyxFQUFFLG9CQUFvQjtJQUN2QixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxxQkFBcUI7SUFDeEIsQ0FBQyxFQUFFLG9CQUFvQjtJQUN2QixDQUFDLEVBQUUsS0FBSztJQUNSLEVBQUUsRUFBRSxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLG9CQUFvQjtJQUN4QixFQUFFLEVBQUUsZ0JBQWdCO0NBQ3JCLENBQUM7Ozs7OztBQVlGLE1BQU0sYUFBYyxTQUFRLFVBQVU7Ozs7Ozs7SUE2QnBDLFlBQ3dDLFlBQWlCLEVBQ3ZELFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFNBQW9CO1FBRXBCLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkEvQjNDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMs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QUFVO1lBQXJCLFNBQVM7WUFDM0IsU0FBUzs7O2tCQTJIZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IEx5RmxleEJhc2UgfSBmcm9tICcuL2ZsZXgtYmFzZSc7XG5cbmNvbnN0IEdyaWREZWZhdWx0VmFsdWUgPSAnMTAwJSc7XG5cbmNvbnN0IF9fZ3JpZCA9IHtcbiAgMDogbnVsbCxcbiAgMTogJzguMzMzMzMzMzMzMzMzMzM0JScsXG4gIDI6ICcxNi42NjY2NjY2NjY2NjY2NjglJyxcbiAgMzogJzI1JScsXG4gIDQ6ICczMy4zMzMzMzMzMzMzMzMzMzYlJyxcbiAgNTogJzQxLjY2NjY2NjY2NjY2NjY3JScsXG4gIDY6ICc1MCUnLFxuICA3OiAnNTguMzMzMzMzMzMzMzMzMzM2JScsXG4gIDg6ICc2Ni42NjY2NjY2NjY2NjY2NyUnLFxuICA5OiAnNzUlJyxcbiAgMTA6ICc4My4zMzMzMzMzMzMzMzMzNCUnLFxuICAxMTogJzkxLjY2NjY2NjY2NjY2NjY3JScsXG4gIDEyOiBHcmlkRGVmYXVsdFZhbHVlXG59O1xuXG4vKipcbiAqIDxncmlkPlxuICogICAuLi5cbiAqIDwvZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdncmlkOm5vdChncmlkW2NvbF0pJyxcbiAgZXhwb3J0QXM6ICdseUdyaWQnXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZCBleHRlbmRzIEx5RmxleEJhc2Uge1xuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuICByb290Q2xhc3MgPSB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeSgnay1ncmlkJywgKFxuICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICBgZGlzcGxheTpmbGV4O2AgK1xuICAgIGBmbGV4LXdyYXA6d3JhcDtgICtcbiAgICBgYm94LXNpemluZzpib3JkZXItYm94O2BcbiAgKSk7XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlcih2YWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmd1dHRlciAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgICBjb25zdCBuZXdOZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy5fY3JlYXRlTmVnYXRpdmVNYXJnaW5DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdOZWdhdGl2ZU1hcmdpbkNsYXNzLCB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzKTtcbiAgICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSBuZXdOZWdhdGl2ZU1hcmdpbkNsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cbiAgZ2V0IGd1dHRlckNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJDbGFzcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgY29yZVRoZW1lLCBtZWRpYVF1ZXJpZXMpO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yb290Q2xhc3MpO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBwYWRkaW5nIGZvciBjaGlsZHMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3Moa2V5OiBudW1iZXIsIHZhbDogbnVtYmVyLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2d1dHRlciA9IHZhbCB8fCAxNjtcbiAgICBjb25zdCBuZXdLZXkgPSBgay1ncmlkR3V0dGVyOiR7a2V5IHx8IHRoaXMuZ3V0dGVyfWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHZhbCAvIDI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYHBhZGRpbmc6JHtwYWRkaW5nfXB4O2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cbiAgcHJpdmF0ZSBfY3JlYXRlTmVnYXRpdmVNYXJnaW5DbGFzcyhrZXk6IG51bWJlciwgdmFsOiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsIHx8IDE2O1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWdyaWROZWdhdGl2ZU1hcmdpbjoke2tleSB8fCB0aGlzLmd1dHRlcn1gO1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB2YWwgLyAtMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgbWFyZ2luOiR7cGFkZGluZ31weDtgICtcbiAgICAgICAgICBgd2lkdGg6IGNhbGMoMTAwJSArICR7dGhpcy5ndXR0ZXJ9cHgpO2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBleGFtcGxlczpcbiAqXG4gKiA8Z3JpZD5cbiAqICAgPGRpdiBjb2w9XCI5XCIgY29sTWVkaWE9XCJhdXRvIFNtYWxsXCI+PC9kaXY+XG4gKiAgIDxkaXYgY29sPVwiYXV0b1wiPjwvZGl2PlxuICogPC9ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dyaWRbY29sXScsXG4gIGV4cG9ydEFzOiAnbHlHcmlkSXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkQ29sIGV4dGVuZHMgTHlGbGV4QmFzZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9jb2w6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZztcbiAgY29sVmFsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXdDbGFzczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY29sICE9PSB2YWwpIHtcbiAgICAgIC8vIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIC8vIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQ29sQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgLy8gdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2NvbENsYXNzKTtcbiAgICAgIC8vIHRoaXMuX2NvbENsYXNzID0gbmV3Q2xhc3M7XG4gICAgICBpZiAoIXRoaXMuX3Jhd0NsYXNzKSB7XG4gICAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgICB9XG5cbiAgICAgIC8qKiBTYXZlIHByZXZpb3VzIGNsYXNzZXMgICovXG4gICAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgICAvKiogQ2xlYXIgcmF3Q2xhc3MgKi9cbiAgICAgIGlmICh0aGlzLl9yYXdDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsQXJyYXkgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHZhbC5zcGxpdCgnICcpIDogdmFsO1xuICAgICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgbmV3Q2xhc3M7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleS5zcGxpdCgnQCcpO1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUNvbENsYXNzKGtleSwgdmFsdWVzWzBdIGFzIGFueSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMV0pXSk7XG4gICAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgICAgfSk7XG4gICAgICAvKiogRGVsZXRlIHByZXZpb3VzIGNsYXNzZXMgaWYgdGhleSBleGlzdCAqL1xuICAgICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICBwcmV2Q2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvKiogQWRkIG5ldyBjbGFzcyAqL1xuICAgICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBwdWJsaWMgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvKiogYXBwbHkgZ3V0dGVyIGNsYXNzIGlmIGV4aXN0cyAqL1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuZ3V0dGVyKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuZ3JpZENvbnRhaW5lci5ndXR0ZXJDbGFzcztcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9ndXR0ZXJDbGFzcyk7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNvbENsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbFZhbCA9IHZhbCB8fCBudWxsO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWdyaWRDb2w6JHtrZXkgfHwgdGhpcy5jb2xWYWx9YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29sVmFsKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gX19ncmlkW3RoaXMuY29sVmFsXTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYG1heC13aWR0aDoke25ld1ZhbH07YCArXG4gICAgICAgICAgICBgZmxleC1iYXNpczoke25ld1ZhbH07YCArXG4gICAgICAgICAgICBgZmxleC1ncm93OjA7YFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGBtYXgtd2lkdGg6MTAwJTtgICtcbiAgICAgICAgICAgIGBmbGV4LWJhc2lzOjA7YCArXG4gICAgICAgICAgICBgZmxleC1ncm93OjE7YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cbn1cbiJdfQ==