import { Directive, Input, Renderer2, ElementRef, isDevMode, Inject, Optional, NgModule } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyFlexBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _coreTheme
     * @param {?} _mediaQueries
     */
    constructor(_elementRef, _renderer, _coreTheme, _mediaQueries) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._coreTheme = _coreTheme;
        this._mediaQueries = _mediaQueries;
    }
    /**
     * @param {?} newClass
     * @param {?} oldClass
     * @return {?}
     */
    _updateClass(newClass, oldClass) {
        this._coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, oldClass);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {?} */
const __align = {
    flex: 0,
    inline: 1,
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
    nowrap: 'nowrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse',
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    baseline: 'baseline',
    stretch: 'stretch',
};
__align[__align.flex] = "flex";
__align[__align.inline] = "inline";
class LyFlex extends LyFlexBase {
    /**
     * @param {?} mediaQueries
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} coreTheme
     */
    constructor(mediaQueries, elementRef, renderer, coreTheme) {
        super(elementRef, renderer, coreTheme, mediaQueries);
    }
    /**
     * @param {?} valArray
     * @return {?}
     */
    set fx(valArray) {
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
        valArray.forEach(key => {
            let /** @type {?} */ newClass;
            const /** @type {?} */ values = key.split(':');
            if (values[0] === 'display') {
                newClass = this._createDisplayClass(key, /** @type {?} */ (values[1]), this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'flow') {
                newClass = this._createFlowClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'align') {
                newClass = this._createAlignClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'direction') {
                newClass = this._createDirectionClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'wrap') {
                newClass = this._createWrapClass(key, values[1], this._mediaQueries[(values[2])]);
            }
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
    /**
     * @param {?} val
     * @return {?}
     */
    set fxDisplay(val) {
        if (this.fxDisplay !== val) {
            const /** @type {?} */ newClass = this._createDisplayClass(val, val);
            this._updateClass(newClass, this._fxDisplayClass);
            this._fxDisplayClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxDisplay() {
        return this._fxDisplay;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxFlow(val) {
        if (this.fxFlow !== val) {
            const /** @type {?} */ newClass = this._createFlowClass(val, val);
            this._updateClass(newClass, this._fxFlowClass);
            this._fxFlowClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxFlow() {
        return this._fxFlow;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxAlign(val) {
        if (this.fxAlign !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createAlignClass(val, val);
            this._updateClass(newClass, this._fxAlignClass);
            this._fxAlignClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxAlign() {
        return this._fxAlign;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxDirection(val) {
        if (this._fxDirection !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createDirectionClass(val, val);
            this._updateClass(newClass, this._fxDirectionClass);
            this._fxDirectionClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxDirection() {
        return this._fxDirection;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxWrap(val) {
        if (this.fxWrap !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createWrapClass(val, val);
            this._updateClass(newClass, this._fxWrapClass);
            this._fxWrapClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxWrap() {
        return this._fxWrap;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this._fxDisplay) {
            /** Set default display */
            this.fxDisplay = null;
        }
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createDisplayClass(key, val, media) {
        this._checkVal(val);
        this._fxDisplay = val || 'flex';
        const /** @type {?} */ newKey = `k-fx-display:${key || this.fxDisplay}`;
        return this._coreTheme.setUpStyle(newKey, () => (val === 'inline' ? `display:inline-flex;` : `display:flex;`), media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createFlowClass(key, val, media) {
        this._checkVal(val);
        this._fxFlow = val || 'row wrap';
        const /** @type {?} */ newKey = `k-fx-flow:${key || this.fxFlow}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => `flex-flow:${this.fxFlow}`, media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createAlignClass(key, val, media) {
        this._checkVal(val);
        this._fxAlign = val || 'start stretch';
        const /** @type {?} */ newKey = `k-fx-align:${key || this.fxAlign}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => {
            const /** @type {?} */ arrayVal = this.fxAlign.split(' ');
            const /** @type {?} */ justifyContent = arrayVal[0] || 'start';
            const /** @type {?} */ alignItems = arrayVal[1] || 'stretch';
            const /** @type {?} */ alignContent = arrayVal[2];
            return (`justify-content:${__align[justifyContent]};` +
                `align-items:${__align[alignItems]};` +
                `align-content:${__align[alignContent || alignItems]};`);
        }, media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createDirectionClass(key, val, media) {
        this._fxDirection = val || 'row';
        const /** @type {?} */ newKey = `k-fx-direction:${key || this.fxDirection}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`flex-direction:${__align[this.fxDirection]};`), media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createWrapClass(key, val, media) {
        this._fxWrap = val || 'wrap';
        const /** @type {?} */ newKey = `k-fx-wrap:${key || this.fxWrap}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`flex-wrap:${__align[this.fxWrap]};`), media);
    }
    /**
     * Check if value is string else emit error
     * @param {?} val
     * @return {?}
     */
    _checkVal(val) {
        if (isDevMode() && Array.isArray(val)) {
            console.warn(val, 'in', this._elementRef, `\n🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋`);
            throw new Error(`value: '${val}' is not a string in`);
        }
    }
}
LyFlex.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fxDisplay], [fxFlow], [fxDirection], [fxWrap], [fxAlign], [fx]',
                exportAs: 'lyFx'
            },] },
];
/** @nocollapse */
LyFlex.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: CoreTheme, },
];
LyFlex.propDecorators = {
    "fx": [{ type: Input },],
    "fxDisplay": [{ type: Input },],
    "fxFlow": [{ type: Input },],
    "fxAlign": [{ type: Input },],
    "fxDirection": [{ type: Input },],
    "fxWrap": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyFlexItem extends LyFlexBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} coreTheme
     * @param {?} mediaQueries
     * @param {?} lyFlex
     */
    constructor(elementRef, renderer, coreTheme, mediaQueries, lyFlex) {
        super(elementRef, renderer, coreTheme, mediaQueries);
        this.lyFlex = lyFlex;
    }
    /**
     * @param {?} valArray
     * @return {?}
     */
    set fxItem(valArray) {
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
        valArray.forEach(key => {
            let /** @type {?} */ newClass;
            const /** @type {?} */ values = key.split(':');
            if (values[0] === 'flex') {
                newClass = this._createFlexClass(key, /** @type {?} */ (values[1]), this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'order') {
                newClass = this._createOrderClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'alignSelf') {
                newClass = this._createAlignSelfClass(key, values[1], this._mediaQueries[(values[2])]);
            }
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
    /**
     * Works the same as flex, default: 1
     * @param {?} val
     * @return {?}
     */
    set fxFlex(val) {
        if (this.fxFlex !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createFlexClass(val, val);
            this._updateClass(newClass, this._fxFlexClass);
            this._fxFlexClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxFlex() {
        return this._fxFlex;
    }
    /**
     * Works the same as order, default: 1
     * @param {?} val
     * @return {?}
     */
    set fxOrder(val) {
        if (this.fxOrder !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createOrderClass(val, val);
            this._updateClass(newClass, this._fxOrderClass);
            this._fxOrderClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxOrder() {
        return this._fxOrder;
    }
    /**
     * Works the same as order, align-self: center
     * @param {?} val
     * @return {?}
     */
    set fxAlignSelf(val) {
        if (this.fxAlignSelf !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createAlignSelfClass(val, val);
            this._updateClass(newClass, this._fxAlignSelfClass);
            this._fxAlignSelfClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxAlignSelf() {
        return this._fxAlignSelf;
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createFlexClass(key, val, media) {
        this._fxFlex = val || '1';
        const /** @type {?} */ newKey = `k-fx-flex:${key || this.fxFlex}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`flex:${this.fxFlex};`), media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createOrderClass(key, val, media) {
        this._fxOrder = val || '1';
        const /** @type {?} */ newKey = `k-fx-order:${key || this.fxOrder}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`order:${this.fxOrder};`), media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createAlignSelfClass(key, val, media) {
        this._fxAlignSelf = val || '1';
        const /** @type {?} */ newKey = `k-fx-alignSelf:${key || this.fxAlignSelf}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`align-self:${this.fxAlignSelf};`), media);
    }
}
LyFlexItem.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fxItem], [fxFlex], [fxOrder]',
                exportAs: 'lyFxItem'
            },] },
];
/** @nocollapse */
LyFlexItem.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: CoreTheme, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
    { type: LyFlex, decorators: [{ type: Optional },] },
];
LyFlexItem.propDecorators = {
    "fxItem": [{ type: Input },],
    "fxFlex": [{ type: Input },],
    "fxOrder": [{ type: Input },],
    "fxAlignSelf": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
class LyGrid extends LyFlexBase {
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
/**
 * examples:
 *
 * <grid>
 *   <div col="9" colMedia="auto Small"></div>
 *   <div col="auto"></div>
 * </grid>
 */
class LyGridCol extends LyFlexBase {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyFlex, LyFlexItem, LyGrid, LyGridCol],
                declarations: [LyFlex, LyFlexItem, LyGrid, LyGridCol]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyFlex, LyFlexItem, LyGrid, LyGridCol, LayoutModule, LyFlexBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2ZsZXgtYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL2xheW91dC9mbGV4LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2xheW91dC9mbGV4LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2dyaWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY2xhc3MgTHlGbGV4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9jb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwdWJsaWMgX21lZGlhUXVlcmllczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICkgeyB9XG5cbiAgX3VwZGF0ZUNsYXNzKG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb3JlVGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBpc0Rldk1vZGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSwgVW5kZWZpbmVkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5lbnVtIF9fYWxpZ24ge1xuICBmbGV4LFxuICBpbmxpbmUsXG4gIHJvdyA9ICdyb3cnLFxuICByb3dSZXZlcnNlID0gJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uID0gJ2NvbHVtbicsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICBub3dyYXAgPSAnbm93cmFwJyxcbiAgd3JhcCA9ICd3cmFwJyxcbiAgd3JhcFJldmVyc2UgPSAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQgPSAnZmxleC1zdGFydCcsXG4gIGNlbnRlciA9ICdjZW50ZXInLFxuICBlbmQgPSAnZmxleC1lbmQnLFxuICBiZXR3ZWVuID0gJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQgPSAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5ID0gJ3NwYWNlLWV2ZW5seScsXG4gIGJhc2VsaW5lID0gJ2Jhc2VsaW5lJyxcbiAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbn1cbi8qKiAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnICovXG5leHBvcnQgdHlwZSBGeERpcmVjdGlvbiA9IHN0cmluZyB8IG51bGw7XG4vKiogJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyAqL1xuZXhwb3J0IHR5cGUgRnhXcmFwID0gc3RyaW5nIHwgbnVsbDtcbi8qKiBbRnhEaXJlY3Rpb24sIEZ4V3JhcF0gKi9cbmV4cG9ydCB0eXBlIEZ4RmxvdyA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZ4SnVzdGlmeUNvbnRlbnQgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seScgfCBudWxsO1xuZXhwb3J0IHR5cGUgRnhBbGlnbkl0ZW1zID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEZ4QWxpZ25Db250ZW50ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyB8IG51bGw7XG5leHBvcnQgdHlwZSBGeEFsaWduSXRlbXNBbmRDb250ZW50ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCBudWxsO1xuLyoqXG4gKiBbRnhKdXN0aWZ5Q29udGVudF0gfCBbRnhKdXN0aWZ5Q29udGVudCwgRnhBbGlnbkl0ZW1zQW5kQ29udGVudF0gfCBbRnhKdXN0aWZ5Q29udGVudCwgRnhBbGlnbkl0ZW1zLCBGeEFsaWduQ29udGVudF1cbiAqL1xuZXhwb3J0IHR5cGUgRnhBbGlnbiA9IHN0cmluZztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnhEaXNwbGF5XSwgW2Z4Rmxvd10sIFtmeERpcmVjdGlvbl0sIFtmeFdyYXBdLCBbZnhBbGlnbl0sIFtmeF0nLFxuICBleHBvcnRBczogJ2x5RngnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmxleCBleHRlbmRzIEx5RmxleEJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9meERpc3BsYXk6ICdmbGV4JyB8ICdpbmxpbmUnO1xuICBwcml2YXRlIF9meERpc3BsYXlDbGFzczogc3RyaW5nO1xuXG4gIC8qKiA8RnhEaXJlY3Rpb24+ICsgPEZ4V3JhcD4gKi9cbiAgcHJpdmF0ZSBfZnhGbG93OiBGeEZsb3c7XG4gIHByaXZhdGUgX2Z4Rmxvd0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhBbGlnbjogRnhBbGlnbjtcbiAgcHJpdmF0ZSBfZnhBbGlnbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhEaXJlY3Rpb246IEZ4RGlyZWN0aW9uO1xuICBwcml2YXRlIF9meERpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhXcmFwOiBGeFdyYXA7XG4gIHByaXZhdGUgX2Z4V3JhcENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF3Q2xhc3M6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmeCh2YWxBcnJheTogc3RyaW5nW10pIHtcbiAgICBpZiAoIXRoaXMuX3Jhd0NsYXNzKSB7XG4gICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKiBTYXZlIHByZXZpb3VzIGNsYXNzZXMgICovXG4gICAgY29uc3QgcHJldkNsYXNzZXMgPSB0aGlzLl9yYXdDbGFzcztcblxuICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgIGlmICh0aGlzLl9yYXdDbGFzcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuICAgIHZhbEFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2Rpc3BsYXknKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlzcGxheUNsYXNzKGtleSwgdmFsdWVzWzFdIGFzIGFueSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdmbG93Jykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUZsb3dDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdhbGlnbicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnbkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXJlY3Rpb25DbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICd3cmFwJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdyYXBDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yYXdDbGFzcy5wdXNoKG5ld0NsYXNzKTtcbiAgICB9KTtcbiAgICAvKiogRGVsZXRlIHByZXZpb3VzIGNsYXNzZXMgaWYgdGhleSBleGlzdCAqL1xuICAgIGlmIChwcmV2Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQWRkIG5ldyBjbGFzcyAqL1xuICAgIHRoaXMuX3Jhd0NsYXNzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZ4RGlzcGxheSh2YWw6ICdmbGV4JyB8ICdpbmxpbmUnKSB7XG4gICAgaWYgKHRoaXMuZnhEaXNwbGF5ICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlzcGxheUNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meERpc3BsYXlDbGFzcyk7XG4gICAgICB0aGlzLl9meERpc3BsYXlDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhEaXNwbGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9meERpc3BsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhGbG93KHZhbDogRnhGbG93KSB7XG4gICAgaWYgKHRoaXMuZnhGbG93ICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxvd0NsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEZsb3dDbGFzcyk7XG4gICAgICB0aGlzLl9meEZsb3dDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhGbG93KCkge1xuICAgIHJldHVybiB0aGlzLl9meEZsb3c7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhBbGlnbih2YWw6IEZ4QWxpZ24pIHtcbiAgICBpZiAodGhpcy5meEFsaWduICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQWxpZ25DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhBbGlnbkNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4QWxpZ25DbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhBbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhBbGlnbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeERpcmVjdGlvbih2YWw6IEZ4RGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuX2Z4RGlyZWN0aW9uICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlyZWN0aW9uQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RGlyZWN0aW9uQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhEaXJlY3Rpb25DbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhEaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RGlyZWN0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4V3JhcCh2YWw6IEZ4V3JhcCkge1xuICAgIGlmICh0aGlzLmZ4V3JhcCAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdyYXBDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhXcmFwQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhXcmFwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGZ4V3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhXcmFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuX2Z4RGlzcGxheSkge1xuICAgICAgLyoqIFNldCBkZWZhdWx0IGRpc3BsYXkgKi9cbiAgICAgIHRoaXMuZnhEaXNwbGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXNwbGF5Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogJ2ZsZXgnIHwgJ2lubGluZScsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2tWYWwodmFsKTtcblxuICAgIHRoaXMuX2Z4RGlzcGxheSA9IHZhbCB8fCAnZmxleCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZGlzcGxheToke2tleSB8fCB0aGlzLmZ4RGlzcGxheX1gO1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIHZhbCA9PT0gJ2lubGluZScgPyBgZGlzcGxheTppbmxpbmUtZmxleDtgIDogYGRpc3BsYXk6ZmxleDtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxvd0NsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhGbG93ID0gdmFsIHx8ICdyb3cgd3JhcCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZmxvdzoke2tleSB8fCB0aGlzLmZ4Rmxvd31gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gYGZsZXgtZmxvdzoke3RoaXMuZnhGbG93fWAsXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBbGlnbkNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhBbGlnbiA9IHZhbCB8fCAnc3RhcnQgc3RyZXRjaCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtYWxpZ246JHtrZXkgfHwgdGhpcy5meEFsaWdufWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiAgdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheVZhbCA9IHRoaXMuZnhBbGlnbi5zcGxpdCgnICcpO1xuXG4gICAgICAgIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gYXJyYXlWYWxbMF0gfHwgJ3N0YXJ0JztcbiAgICAgICAgY29uc3QgYWxpZ25JdGVtcyA9IGFycmF5VmFsWzFdIHx8ICdzdHJldGNoJztcbiAgICAgICAgY29uc3QgYWxpZ25Db250ZW50ID0gYXJyYXlWYWxbMl07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYGp1c3RpZnktY29udGVudDoke19fYWxpZ25banVzdGlmeUNvbnRlbnRdfTtgICtcbiAgICAgICAgICBgYWxpZ24taXRlbXM6JHtfX2FsaWduW2FsaWduSXRlbXNdfTtgICtcbiAgICAgICAgICBgYWxpZ24tY29udGVudDoke19fYWxpZ25bYWxpZ25Db250ZW50IHx8IGFsaWduSXRlbXNdfTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRGlyZWN0aW9uQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogRnhEaXJlY3Rpb24sIG1lZGlhPzogc3RyaW5nKSB7XG5cbiAgICB0aGlzLl9meERpcmVjdGlvbiA9IHZhbCB8fCAncm93JztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1kaXJlY3Rpb246JHtrZXkgfHwgdGhpcy5meERpcmVjdGlvbn1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleC1kaXJlY3Rpb246JHtfX2FsaWduW3RoaXMuZnhEaXJlY3Rpb25dfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlV3JhcENsYXNzKGtleTogc3RyaW5nLCB2YWw6IEZ4V3JhcCwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meFdyYXAgPSB2YWwgfHwgJ3dyYXAnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LXdyYXA6JHtrZXkgfHwgdGhpcy5meFdyYXB9YDtcblxuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleC13cmFwOiR7X19hbGlnblt0aGlzLmZ4V3JhcF19O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICAvKiogQ2hlY2sgaWYgdmFsdWUgaXMgc3RyaW5nIGVsc2UgZW1pdCBlcnJvciAqL1xuICBwcml2YXRlIF9jaGVja1ZhbCh2YWw6IGFueSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybih2YWwsICdpbicsIHRoaXMuX2VsZW1lbnRSZWYsIGBcXG7DsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLYCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlOiAnJHt2YWx9JyBpcyBub3QgYSBzdHJpbmcgaW5gKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUsIFVuZGVmaW5lZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgTHlGbGV4IH0gZnJvbSAnLi9mbGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmeEl0ZW1dLCBbZnhGbGV4XSwgW2Z4T3JkZXJdJyxcbiAgZXhwb3J0QXM6ICdseUZ4SXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGbGV4SXRlbSBleHRlbmRzIEx5RmxleEJhc2Uge1xuXG4gIHByaXZhdGUgX2Z4RmxleDogc3RyaW5nO1xuICBwcml2YXRlIF9meEZsZXhDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Z4T3JkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhPcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhBbGlnblNlbGY6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhBbGlnblNlbGZDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Jhd0NsYXNzOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzZXQgZnhJdGVtKHZhbEFycmF5OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuXG4gICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG4gICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZmxleCcpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbGV4Q2xhc3Moa2V5LCB2YWx1ZXNbMV0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ29yZGVyJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZU9yZGVyQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnYWxpZ25TZWxmJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduU2VsZkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgIH0pO1xuICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBmbGV4LCBkZWZhdWx0OiAxICovXG4gIEBJbnB1dCgpXG4gIHNldCBmeEZsZXgodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5meEZsZXggIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbGV4Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RmxleENsYXNzKTtcbiAgICAgIHRoaXMuX2Z4RmxleENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEZsZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RmxleDtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBvcmRlciwgZGVmYXVsdDogMSAqL1xuICBASW5wdXQoKVxuICBzZXQgZnhPcmRlcih2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZ4T3JkZXIgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVPcmRlckNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meE9yZGVyQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhPcmRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeE9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9meE9yZGVyO1xuICB9XG5cbiAgLyoqIFdvcmtzIHRoZSBzYW1lIGFzIG9yZGVyLCBhbGlnbi1zZWxmOiBjZW50ZXIgKi9cbiAgQElucHV0KClcbiAgc2V0IGZ4QWxpZ25TZWxmKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZnhBbGlnblNlbGYgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnblNlbGZDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhBbGlnblNlbGZDbGFzcyk7XG4gICAgICB0aGlzLl9meEFsaWduU2VsZkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEFsaWduU2VsZigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhBbGlnblNlbGY7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGx5RmxleDogTHlGbGV4XG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbGV4Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4RmxleCA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZmxleDoke2tleSB8fCB0aGlzLmZ4RmxleH1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleDoke3RoaXMuZnhGbGV4fTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlT3JkZXJDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnhPcmRlciA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtb3JkZXI6JHtrZXkgfHwgdGhpcy5meE9yZGVyfWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBvcmRlcjoke3RoaXMuZnhPcmRlcn07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFsaWduU2VsZkNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meEFsaWduU2VsZiA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtYWxpZ25TZWxmOiR7a2V5IHx8IHRoaXMuZnhBbGlnblNlbGZ9YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgYGFsaWduLXNlbGY6JHt0aGlzLmZ4QWxpZ25TZWxmfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgT3B0aW9uYWwsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgTHlGbGV4QmFzZSB9IGZyb20gJy4vZmxleC1iYXNlJztcblxuY29uc3QgR3JpZERlZmF1bHRWYWx1ZSA9ICcxMDAlJztcblxuY29uc3QgX19ncmlkID0ge1xuICAwOiBudWxsLFxuICAxOiAnOC4zMzMzMzMzMzMzMzMzMzQlJyxcbiAgMjogJzE2LjY2NjY2NjY2NjY2NjY2OCUnLFxuICAzOiAnMjUlJyxcbiAgNDogJzMzLjMzMzMzMzMzMzMzMzMzNiUnLFxuICA1OiAnNDEuNjY2NjY2NjY2NjY2NjclJyxcbiAgNjogJzUwJScsXG4gIDc6ICc1OC4zMzMzMzMzMzMzMzMzMzYlJyxcbiAgODogJzY2LjY2NjY2NjY2NjY2NjY3JScsXG4gIDk6ICc3NSUnLFxuICAxMDogJzgzLjMzMzMzMzMzMzMzMzM0JScsXG4gIDExOiAnOTEuNjY2NjY2NjY2NjY2NjclJyxcbiAgMTI6IEdyaWREZWZhdWx0VmFsdWVcbn07XG5cbi8qKlxuICogPGdyaWQ+XG4gKiAgIC4uLlxuICogPC9ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dyaWQ6bm90KGdyaWRbY29sXSknLFxuICBleHBvcnRBczogJ2x5R3JpZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIGV4dGVuZHMgTHlGbGV4QmFzZSB7XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG4gIHJvb3RDbGFzcyA9IHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KCdrLWdyaWQnLCAoXG4gICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgYGZsZXgtd3JhcDp3cmFwO2AgK1xuICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YFxuICApKTtcblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZ3V0dGVyICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgc3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIGNvbnN0IG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLl9jcmVhdGVOZWdhdGl2ZU1hcmdpbkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3MsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuICBnZXQgZ3V0dGVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlckNsYXNzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJvb3RDbGFzcyk7XG4gIH1cblxuICAvKiogY3JlYXRlIHBhZGRpbmcgZm9yIGNoaWxkcyAqL1xuICBwcml2YXRlIF9jcmVhdGVHdXR0ZXJDbGFzcyhrZXk6IG51bWJlciwgdmFsOiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsIHx8IDE2O1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWdyaWRHdXR0ZXI6JHtrZXkgfHwgdGhpcy5ndXR0ZXJ9YDtcbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gdmFsIC8gMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgcGFkZGluZzoke3BhZGRpbmd9cHg7YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuICBwcml2YXRlIF9jcmVhdGVOZWdhdGl2ZU1hcmdpbkNsYXNzKGtleTogbnVtYmVyLCB2YWw6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWwgfHwgMTY7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZE5lZ2F0aXZlTWFyZ2luOiR7a2V5IHx8IHRoaXMuZ3V0dGVyfWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHZhbCAvIC0yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW46JHtwYWRkaW5nfXB4O2AgK1xuICAgICAgICAgIGB3aWR0aDogY2FsYygxMDAlICsgJHt0aGlzLmd1dHRlcn1weCk7YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIGV4YW1wbGVzOlxuICpcbiAqIDxncmlkPlxuICogICA8ZGl2IGNvbD1cIjlcIiBjb2xNZWRpYT1cImF1dG8gU21hbGxcIj48L2Rpdj5cbiAqICAgPGRpdiBjb2w9XCJhdXRvXCI+PC9kaXY+XG4gKiA8L2dyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ3JpZFtjb2xdJyxcbiAgZXhwb3J0QXM6ICdseUdyaWRJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRDb2wgZXh0ZW5kcyBMeUZsZXhCYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuICBjb2xWYWw6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Jhd0NsYXNzOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jb2wgIT09IHZhbCkge1xuICAgICAgLy8gLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVDb2xDbGFzcyh2YWwsIHZhbCk7XG4gICAgICAvLyB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fY29sQ2xhc3MpO1xuICAgICAgLy8gdGhpcy5fY29sQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICAgIGNvbnN0IHByZXZDbGFzc2VzID0gdGhpcy5fcmF3Q2xhc3M7XG5cbiAgICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxBcnJheSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnNwbGl0KCcgJykgOiB2YWw7XG4gICAgICB2YWxBcnJheS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCdAJyk7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQ29sQ2xhc3Moa2V5LCB2YWx1ZXNbMF0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1sxXSldKTtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MucHVzaChuZXdDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgICBpZiAocHJldkNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgICB0aGlzLl9yYXdDbGFzcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIHB1YmxpYyBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgY29yZVRoZW1lLCBtZWRpYVF1ZXJpZXMpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8qKiBhcHBseSBndXR0ZXIgY2xhc3MgaWYgZXhpc3RzICovXG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5ndXR0ZXIpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5ncmlkQ29udGFpbmVyLmd1dHRlckNsYXNzO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29sQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuY29sVmFsID0gdmFsIHx8IG51bGw7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZENvbDoke2tleSB8fCB0aGlzLmNvbFZhbH1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb2xWYWwpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSBfX2dyaWRbdGhpcy5jb2xWYWxdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgbWF4LXdpZHRoOiR7bmV3VmFsfTtgICtcbiAgICAgICAgICAgIGBmbGV4LWJhc2lzOiR7bmV3VmFsfTtgICtcbiAgICAgICAgICAgIGBmbGV4LWdyb3c6MDtgXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYG1heC13aWR0aDoxMDAlO2AgK1xuICAgICAgICAgICAgYGZsZXgtYmFzaXM6MDtgICtcbiAgICAgICAgICAgIGBmbGV4LWdyb3c6MTtgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlGbGV4IH0gZnJvbSAnLi9mbGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUZsZXhJdGVtIH0gZnJvbSAnLi9mbGV4LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5R3JpZCwgTHlHcmlkQ29sIH0gZnJvbSAnLi9ncmlkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUZsZXgsIEx5RmxleEl0ZW0sIEx5R3JpZCwgTHlHcmlkQ29sXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlGbGV4LCBMeUZsZXhJdGVtLCBMeUdyaWQsIEx5R3JpZENvbF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7Ozs7SUFDRSxZQUNTLGFBQ0EsV0FDQSxZQUNBO1FBSEEsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsY0FBUyxHQUFULFNBQVM7UUFDVCxlQUFVLEdBQVYsVUFBVTtRQUNWLGtCQUFhLEdBQWIsYUFBYTtLQUNqQjs7Ozs7O0lBRUwsWUFBWSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDckc7Q0FDRjs7Ozs7O0FDZEQ7Ozs7U0FRUSxLQUFLO2dCQUNFLGFBQWE7WUFDakIsUUFBUTttQkFDRCxnQkFBZ0I7WUFDdkIsUUFBUTtVQUNWLE1BQU07aUJBQ0MsY0FBYztXQUNwQixZQUFZO1lBQ1gsUUFBUTtTQUNYLFVBQVU7YUFDTixlQUFlO1lBQ2hCLGNBQWM7WUFDZCxjQUFjO2NBQ1osVUFB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