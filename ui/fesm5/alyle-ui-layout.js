import { __extends } from 'tslib';
import { Directive, Input, Renderer2, ElementRef, isDevMode, Inject, Optional, NgModule } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyFlexBase = /** @class */ (function () {
    function LyFlexBase(_elementRef, _renderer, _coreTheme, _mediaQueries) {
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
    LyFlexBase.prototype._updateClass = /**
     * @param {?} newClass
     * @param {?} oldClass
     * @return {?}
     */
    function (newClass, oldClass) {
        this._coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, oldClass);
    };
    return LyFlexBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {?} */
var __align = {
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
var LyFlex = /** @class */ (function (_super) {
    __extends(LyFlex, _super);
    function LyFlex(mediaQueries, elementRef, renderer, coreTheme) {
        return _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
    }
    Object.defineProperty(LyFlex.prototype, "fx", {
        set: /**
         * @param {?} valArray
         * @return {?}
         */
        function (valArray) {
            var _this = this;
            if (!this._rawClass) {
                this._rawClass = [];
            }
            /**
             * Save previous classes
             */
            var /** @type {?} */ prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            valArray.forEach(function (key) {
                var /** @type {?} */ newClass;
                var /** @type {?} */ values = key.split(':');
                if (values[0] === 'display') {
                    newClass = _this._createDisplayClass(key, /** @type {?} */ (values[1]), _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'flow') {
                    newClass = _this._createFlowClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'align') {
                    newClass = _this._createAlignClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'direction') {
                    newClass = _this._createDirectionClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'wrap') {
                    newClass = _this._createWrapClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxDisplay;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxDisplay !== val) {
                var /** @type {?} */ newClass = this._createDisplayClass(val, val);
                this._updateClass(newClass, this._fxDisplayClass);
                this._fxDisplayClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxFlow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxFlow;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxFlow !== val) {
                var /** @type {?} */ newClass = this._createFlowClass(val, val);
                this._updateClass(newClass, this._fxFlowClass);
                this._fxFlowClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxAlign;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxAlign !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createAlignClass(val, val);
                this._updateClass(newClass, this._fxAlignClass);
                this._fxAlignClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxDirection;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._fxDirection !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createDirectionClass(val, val);
                this._updateClass(newClass, this._fxDirectionClass);
                this._fxDirectionClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxWrap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxWrap;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxWrap !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createWrapClass(val, val);
                this._updateClass(newClass, this._fxWrapClass);
                this._fxWrapClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyFlex.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this._fxDisplay) {
            /** Set default display */
            this.fxDisplay = null;
        }
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createDisplayClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        this._checkVal(val);
        this._fxDisplay = val || 'flex';
        var /** @type {?} */ newKey = "k-fx-display:" + (key || this.fxDisplay);
        return this._coreTheme.setUpStyle(newKey, function () {
            return (val === 'inline' ? "display:inline-flex;" : "display:flex;");
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createFlowClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._checkVal(val);
        this._fxFlow = val || 'row wrap';
        var /** @type {?} */ newKey = "k-fx-flow:" + (key || this.fxFlow);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return "flex-flow:" + _this.fxFlow; }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createAlignClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._checkVal(val);
        this._fxAlign = val || 'start stretch';
        var /** @type {?} */ newKey = "k-fx-align:" + (key || this.fxAlign);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            var /** @type {?} */ arrayVal = _this.fxAlign.split(' ');
            var /** @type {?} */ justifyContent = arrayVal[0] || 'start';
            var /** @type {?} */ alignItems = arrayVal[1] || 'stretch';
            var /** @type {?} */ alignContent = arrayVal[2];
            return ("justify-content:" + __align[justifyContent] + ";" +
                ("align-items:" + __align[alignItems] + ";") +
                ("align-content:" + __align[alignContent || alignItems] + ";"));
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createDirectionClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxDirection = val || 'row';
        var /** @type {?} */ newKey = "k-fx-direction:" + (key || this.fxDirection);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("flex-direction:" + __align[_this.fxDirection] + ";");
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createWrapClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxWrap = val || 'wrap';
        var /** @type {?} */ newKey = "k-fx-wrap:" + (key || this.fxWrap);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("flex-wrap:" + __align[_this.fxWrap] + ";");
        }, media);
    };
    /**
     * Check if value is string else emit error
     * @param {?} val
     * @return {?}
     */
    LyFlex.prototype._checkVal = /**
     * Check if value is string else emit error
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (isDevMode() && Array.isArray(val)) {
            console.warn(val, 'in', this._elementRef, "\n\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B");
            throw new Error("value: '" + val + "' is not a string in");
        }
    };
    LyFlex.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fxDisplay], [fxFlow], [fxDirection], [fxWrap], [fxAlign], [fx]',
                    exportAs: 'lyFx'
                },] },
    ];
    /** @nocollapse */
    LyFlex.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: CoreTheme, },
    ]; };
    LyFlex.propDecorators = {
        "fx": [{ type: Input },],
        "fxDisplay": [{ type: Input },],
        "fxFlow": [{ type: Input },],
        "fxAlign": [{ type: Input },],
        "fxDirection": [{ type: Input },],
        "fxWrap": [{ type: Input },],
    };
    return LyFlex;
}(LyFlexBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyFlexItem = /** @class */ (function (_super) {
    __extends(LyFlexItem, _super);
    function LyFlexItem(elementRef, renderer, coreTheme, mediaQueries, lyFlex) {
        var _this = _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
        _this.lyFlex = lyFlex;
        return _this;
    }
    Object.defineProperty(LyFlexItem.prototype, "fxItem", {
        set: /**
         * @param {?} valArray
         * @return {?}
         */
        function (valArray) {
            var _this = this;
            if (!this._rawClass) {
                this._rawClass = [];
            }
            /**
             * Save previous classes
             */
            var /** @type {?} */ prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            valArray.forEach(function (key) {
                var /** @type {?} */ newClass;
                var /** @type {?} */ values = key.split(':');
                if (values[0] === 'flex') {
                    newClass = _this._createFlexClass(key, /** @type {?} */ (values[1]), _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'order') {
                    newClass = _this._createOrderClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'alignSelf') {
                    newClass = _this._createAlignSelfClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlexItem.prototype, "fxFlex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxFlex;
        },
        set: /**
         * Works the same as flex, default: 1
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxFlex !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createFlexClass(val, val);
                this._updateClass(newClass, this._fxFlexClass);
                this._fxFlexClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlexItem.prototype, "fxOrder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxOrder;
        },
        set: /**
         * Works the same as order, default: 1
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxOrder !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createOrderClass(val, val);
                this._updateClass(newClass, this._fxOrderClass);
                this._fxOrderClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlexItem.prototype, "fxAlignSelf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxAlignSelf;
        },
        set: /**
         * Works the same as order, align-self: center
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxAlignSelf !== val) {
                /**
                 * create Style
                 */
                var /** @type {?} */ newClass = this._createAlignSelfClass(val, val);
                this._updateClass(newClass, this._fxAlignSelfClass);
                this._fxAlignSelfClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlexItem.prototype._createFlexClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxFlex = val || '1';
        var /** @type {?} */ newKey = "k-fx-flex:" + (key || this.fxFlex);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("flex:" + _this.fxFlex + ";");
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlexItem.prototype._createOrderClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxOrder = val || '1';
        var /** @type {?} */ newKey = "k-fx-order:" + (key || this.fxOrder);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("order:" + _this.fxOrder + ";");
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlexItem.prototype._createAlignSelfClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxAlignSelf = val || '1';
        var /** @type {?} */ newKey = "k-fx-alignSelf:" + (key || this.fxAlignSelf);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            return ("align-self:" + _this.fxAlignSelf + ";");
        }, media);
    };
    LyFlexItem.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fxItem], [fxFlex], [fxOrder]',
                    exportAs: 'lyFxItem'
                },] },
    ];
    /** @nocollapse */
    LyFlexItem.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
        { type: LyFlex, decorators: [{ type: Optional },] },
    ]; };
    LyFlexItem.propDecorators = {
        "fxItem": [{ type: Input },],
        "fxFlex": [{ type: Input },],
        "fxOrder": [{ type: Input },],
        "fxAlignSelf": [{ type: Input },],
    };
    return LyFlexItem;
}(LyFlexBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ GridDefaultValue = '100%';
var /** @type {?} */ __grid = {
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
    __extends(LyGrid, _super);
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
                /**
                 * create style
                 */
                var /** @type {?} */ newClass = this._createGutterClass(val, val);
                this._gutterClass = newClass;
                var /** @type {?} */ newNegativeMarginClass = this._createNegativeMarginClass(val, val);
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
        var /** @type {?} */ newKey = "k-gridGutter:" + (key || this.gutter);
        return this._coreTheme.setUpStyle(newKey, function () {
            var /** @type {?} */ padding = val / 2;
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
        var /** @type {?} */ newKey = "k-gridNegativeMargin:" + (key || this.gutter);
        return this._coreTheme.setUpStyle(newKey, function () {
            var /** @type {?} */ padding = val / -2;
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
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: CoreTheme, },
    ]; };
    LyGrid.propDecorators = {
        "gutter": [{ type: Input },],
    };
    return LyGrid;
}(LyFlexBase));
/**
 * examples:
 *
 * <grid>
 *   <div col="9" colMedia="auto Small"></div>
 *   <div col="auto"></div>
 * </grid>
 */
var LyGridCol = /** @class */ (function (_super) {
    __extends(LyGridCol, _super);
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
                /**
                 * Save previous classes
                 */
                var /** @type {?} */ prevClasses = this._rawClass;
                /** Clear rawClass */
                if (this._rawClass.length) {
                    this._rawClass = [];
                }
                var /** @type {?} */ valArray = typeof val === 'string' ? val.split(' ') : val;
                valArray.forEach(function (key) {
                    var /** @type {?} */ newClass;
                    var /** @type {?} */ values = key.split('@');
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
            var /** @type {?} */ newClass = this.gridContainer.gutterClass;
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
        var /** @type {?} */ newKey = "k-gridCol:" + (key || this.colVal);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            if (_this.colVal) {
                var /** @type {?} */ newVal = __grid[_this.colVal];
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
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
        { type: LyGrid, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: CoreTheme, },
    ]; };
    LyGridCol.propDecorators = {
        "col": [{ type: Input },],
    };
    return LyGridCol;
}(LyFlexBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyFlex, LyFlexItem, LyGrid, LyGridCol],
                    declarations: [LyFlex, LyFlexItem, LyGrid, LyGridCol]
                },] },
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyFlex, LyFlexItem, LyGrid, LyGridCol, LayoutModule, LyFlexBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2ZsZXgtYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL2xheW91dC9mbGV4LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2xheW91dC9mbGV4LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2dyaWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY2xhc3MgTHlGbGV4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9jb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwdWJsaWMgX21lZGlhUXVlcmllczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICkgeyB9XG5cbiAgX3VwZGF0ZUNsYXNzKG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb3JlVGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBpc0Rldk1vZGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSwgVW5kZWZpbmVkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5lbnVtIF9fYWxpZ24ge1xuICBmbGV4LFxuICBpbmxpbmUsXG4gIHJvdyA9ICdyb3cnLFxuICByb3dSZXZlcnNlID0gJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uID0gJ2NvbHVtbicsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICBub3dyYXAgPSAnbm93cmFwJyxcbiAgd3JhcCA9ICd3cmFwJyxcbiAgd3JhcFJldmVyc2UgPSAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQgPSAnZmxleC1zdGFydCcsXG4gIGNlbnRlciA9ICdjZW50ZXInLFxuICBlbmQgPSAnZmxleC1lbmQnLFxuICBiZXR3ZWVuID0gJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQgPSAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5ID0gJ3NwYWNlLWV2ZW5seScsXG4gIGJhc2VsaW5lID0gJ2Jhc2VsaW5lJyxcbiAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbn1cbi8qKiAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnICovXG5leHBvcnQgdHlwZSBGeERpcmVjdGlvbiA9IHN0cmluZyB8IG51bGw7XG4vKiogJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyAqL1xuZXhwb3J0IHR5cGUgRnhXcmFwID0gc3RyaW5nIHwgbnVsbDtcbi8qKiBbRnhEaXJlY3Rpb24sIEZ4V3JhcF0gKi9cbmV4cG9ydCB0eXBlIEZ4RmxvdyA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZ4SnVzdGlmeUNvbnRlbnQgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seScgfCBudWxsO1xuZXhwb3J0IHR5cGUgRnhBbGlnbkl0ZW1zID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEZ4QWxpZ25Db250ZW50ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyB8IG51bGw7XG5leHBvcnQgdHlwZSBGeEFsaWduSXRlbXNBbmRDb250ZW50ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCBudWxsO1xuLyoqXG4gKiBbRnhKdXN0aWZ5Q29udGVudF0gfCBbRnhKdXN0aWZ5Q29udGVudCwgRnhBbGlnbkl0ZW1zQW5kQ29udGVudF0gfCBbRnhKdXN0aWZ5Q29udGVudCwgRnhBbGlnbkl0ZW1zLCBGeEFsaWduQ29udGVudF1cbiAqL1xuZXhwb3J0IHR5cGUgRnhBbGlnbiA9IHN0cmluZztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnhEaXNwbGF5XSwgW2Z4Rmxvd10sIFtmeERpcmVjdGlvbl0sIFtmeFdyYXBdLCBbZnhBbGlnbl0sIFtmeF0nLFxuICBleHBvcnRBczogJ2x5RngnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmxleCBleHRlbmRzIEx5RmxleEJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9meERpc3BsYXk6ICdmbGV4JyB8ICdpbmxpbmUnO1xuICBwcml2YXRlIF9meERpc3BsYXlDbGFzczogc3RyaW5nO1xuXG4gIC8qKiA8RnhEaXJlY3Rpb24+ICsgPEZ4V3JhcD4gKi9cbiAgcHJpdmF0ZSBfZnhGbG93OiBGeEZsb3c7XG4gIHByaXZhdGUgX2Z4Rmxvd0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhBbGlnbjogRnhBbGlnbjtcbiAgcHJpdmF0ZSBfZnhBbGlnbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhEaXJlY3Rpb246IEZ4RGlyZWN0aW9uO1xuICBwcml2YXRlIF9meERpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhXcmFwOiBGeFdyYXA7XG4gIHByaXZhdGUgX2Z4V3JhcENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF3Q2xhc3M6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmeCh2YWxBcnJheTogc3RyaW5nW10pIHtcbiAgICBpZiAoIXRoaXMuX3Jhd0NsYXNzKSB7XG4gICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKiBTYXZlIHByZXZpb3VzIGNsYXNzZXMgICovXG4gICAgY29uc3QgcHJldkNsYXNzZXMgPSB0aGlzLl9yYXdDbGFzcztcblxuICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgIGlmICh0aGlzLl9yYXdDbGFzcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuICAgIHZhbEFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2Rpc3BsYXknKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlzcGxheUNsYXNzKGtleSwgdmFsdWVzWzFdIGFzIGFueSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdmbG93Jykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUZsb3dDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdhbGlnbicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnbkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXJlY3Rpb25DbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICd3cmFwJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdyYXBDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yYXdDbGFzcy5wdXNoKG5ld0NsYXNzKTtcbiAgICB9KTtcbiAgICAvKiogRGVsZXRlIHByZXZpb3VzIGNsYXNzZXMgaWYgdGhleSBleGlzdCAqL1xuICAgIGlmIChwcmV2Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQWRkIG5ldyBjbGFzcyAqL1xuICAgIHRoaXMuX3Jhd0NsYXNzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZ4RGlzcGxheSh2YWw6ICdmbGV4JyB8ICdpbmxpbmUnKSB7XG4gICAgaWYgKHRoaXMuZnhEaXNwbGF5ICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlzcGxheUNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meERpc3BsYXlDbGFzcyk7XG4gICAgICB0aGlzLl9meERpc3BsYXlDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhEaXNwbGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9meERpc3BsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhGbG93KHZhbDogRnhGbG93KSB7XG4gICAgaWYgKHRoaXMuZnhGbG93ICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxvd0NsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEZsb3dDbGFzcyk7XG4gICAgICB0aGlzLl9meEZsb3dDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhGbG93KCkge1xuICAgIHJldHVybiB0aGlzLl9meEZsb3c7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhBbGlnbih2YWw6IEZ4QWxpZ24pIHtcbiAgICBpZiAodGhpcy5meEFsaWduICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQWxpZ25DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhBbGlnbkNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4QWxpZ25DbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhBbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhBbGlnbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeERpcmVjdGlvbih2YWw6IEZ4RGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuX2Z4RGlyZWN0aW9uICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlyZWN0aW9uQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RGlyZWN0aW9uQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhEaXJlY3Rpb25DbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhEaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RGlyZWN0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4V3JhcCh2YWw6IEZ4V3JhcCkge1xuICAgIGlmICh0aGlzLmZ4V3JhcCAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdyYXBDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhXcmFwQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhXcmFwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGZ4V3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhXcmFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuX2Z4RGlzcGxheSkge1xuICAgICAgLyoqIFNldCBkZWZhdWx0IGRpc3BsYXkgKi9cbiAgICAgIHRoaXMuZnhEaXNwbGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXNwbGF5Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogJ2ZsZXgnIHwgJ2lubGluZScsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2tWYWwodmFsKTtcblxuICAgIHRoaXMuX2Z4RGlzcGxheSA9IHZhbCB8fCAnZmxleCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZGlzcGxheToke2tleSB8fCB0aGlzLmZ4RGlzcGxheX1gO1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIHZhbCA9PT0gJ2lubGluZScgPyBgZGlzcGxheTppbmxpbmUtZmxleDtgIDogYGRpc3BsYXk6ZmxleDtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxvd0NsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhGbG93ID0gdmFsIHx8ICdyb3cgd3JhcCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZmxvdzoke2tleSB8fCB0aGlzLmZ4Rmxvd31gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gYGZsZXgtZmxvdzoke3RoaXMuZnhGbG93fWAsXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBbGlnbkNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhBbGlnbiA9IHZhbCB8fCAnc3RhcnQgc3RyZXRjaCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtYWxpZ246JHtrZXkgfHwgdGhpcy5meEFsaWdufWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiAgdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheVZhbCA9IHRoaXMuZnhBbGlnbi5zcGxpdCgnICcpO1xuXG4gICAgICAgIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gYXJyYXlWYWxbMF0gfHwgJ3N0YXJ0JztcbiAgICAgICAgY29uc3QgYWxpZ25JdGVtcyA9IGFycmF5VmFsWzFdIHx8ICdzdHJldGNoJztcbiAgICAgICAgY29uc3QgYWxpZ25Db250ZW50ID0gYXJyYXlWYWxbMl07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYGp1c3RpZnktY29udGVudDoke19fYWxpZ25banVzdGlmeUNvbnRlbnRdfTtgICtcbiAgICAgICAgICBgYWxpZ24taXRlbXM6JHtfX2FsaWduW2FsaWduSXRlbXNdfTtgICtcbiAgICAgICAgICBgYWxpZ24tY29udGVudDoke19fYWxpZ25bYWxpZ25Db250ZW50IHx8IGFsaWduSXRlbXNdfTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRGlyZWN0aW9uQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogRnhEaXJlY3Rpb24sIG1lZGlhPzogc3RyaW5nKSB7XG5cbiAgICB0aGlzLl9meERpcmVjdGlvbiA9IHZhbCB8fCAncm93JztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1kaXJlY3Rpb246JHtrZXkgfHwgdGhpcy5meERpcmVjdGlvbn1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleC1kaXJlY3Rpb246JHtfX2FsaWduW3RoaXMuZnhEaXJlY3Rpb25dfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlV3JhcENsYXNzKGtleTogc3RyaW5nLCB2YWw6IEZ4V3JhcCwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meFdyYXAgPSB2YWwgfHwgJ3dyYXAnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LXdyYXA6JHtrZXkgfHwgdGhpcy5meFdyYXB9YDtcblxuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleC13cmFwOiR7X19hbGlnblt0aGlzLmZ4V3JhcF19O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICAvKiogQ2hlY2sgaWYgdmFsdWUgaXMgc3RyaW5nIGVsc2UgZW1pdCBlcnJvciAqL1xuICBwcml2YXRlIF9jaGVja1ZhbCh2YWw6IGFueSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybih2YWwsICdpbicsIHRoaXMuX2VsZW1lbnRSZWYsIGBcXG7DsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLYCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlOiAnJHt2YWx9JyBpcyBub3QgYSBzdHJpbmcgaW5gKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUsIFVuZGVmaW5lZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgTHlGbGV4IH0gZnJvbSAnLi9mbGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmeEl0ZW1dLCBbZnhGbGV4XSwgW2Z4T3JkZXJdJyxcbiAgZXhwb3J0QXM6ICdseUZ4SXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGbGV4SXRlbSBleHRlbmRzIEx5RmxleEJhc2Uge1xuXG4gIHByaXZhdGUgX2Z4RmxleDogc3RyaW5nO1xuICBwcml2YXRlIF9meEZsZXhDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Z4T3JkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhPcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhBbGlnblNlbGY6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnhBbGlnblNlbGZDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Jhd0NsYXNzOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzZXQgZnhJdGVtKHZhbEFycmF5OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuXG4gICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG4gICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZmxleCcpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbGV4Q2xhc3Moa2V5LCB2YWx1ZXNbMV0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ29yZGVyJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZU9yZGVyQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnYWxpZ25TZWxmJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduU2VsZkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgIH0pO1xuICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBmbGV4LCBkZWZhdWx0OiAxICovXG4gIEBJbnB1dCgpXG4gIHNldCBmeEZsZXgodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5meEZsZXggIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbGV4Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RmxleENsYXNzKTtcbiAgICAgIHRoaXMuX2Z4RmxleENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEZsZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RmxleDtcbiAgfVxuXG4gIC8qKiBXb3JrcyB0aGUgc2FtZSBhcyBvcmRlciwgZGVmYXVsdDogMSAqL1xuICBASW5wdXQoKVxuICBzZXQgZnhPcmRlcih2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZ4T3JkZXIgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVPcmRlckNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meE9yZGVyQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhPcmRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeE9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9meE9yZGVyO1xuICB9XG5cbiAgLyoqIFdvcmtzIHRoZSBzYW1lIGFzIG9yZGVyLCBhbGlnbi1zZWxmOiBjZW50ZXIgKi9cbiAgQElucHV0KClcbiAgc2V0IGZ4QWxpZ25TZWxmKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZnhBbGlnblNlbGYgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnblNlbGZDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhBbGlnblNlbGZDbGFzcyk7XG4gICAgICB0aGlzLl9meEFsaWduU2VsZkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEFsaWduU2VsZigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhBbGlnblNlbGY7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGx5RmxleDogTHlGbGV4XG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbGV4Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4RmxleCA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZmxleDoke2tleSB8fCB0aGlzLmZ4RmxleH1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleDoke3RoaXMuZnhGbGV4fTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlT3JkZXJDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnhPcmRlciA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtb3JkZXI6JHtrZXkgfHwgdGhpcy5meE9yZGVyfWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBvcmRlcjoke3RoaXMuZnhPcmRlcn07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFsaWduU2VsZkNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meEFsaWduU2VsZiA9IHZhbCB8fCAnMSc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtYWxpZ25TZWxmOiR7a2V5IHx8IHRoaXMuZnhBbGlnblNlbGZ9YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgYGFsaWduLXNlbGY6JHt0aGlzLmZ4QWxpZ25TZWxmfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgT3B0aW9uYWwsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgTHlGbGV4QmFzZSB9IGZyb20gJy4vZmxleC1iYXNlJztcblxuY29uc3QgR3JpZERlZmF1bHRWYWx1ZSA9ICcxMDAlJztcblxuY29uc3QgX19ncmlkID0ge1xuICAwOiBudWxsLFxuICAxOiAnOC4zMzMzMzMzMzMzMzMzMzQlJyxcbiAgMjogJzE2LjY2NjY2NjY2NjY2NjY2OCUnLFxuICAzOiAnMjUlJyxcbiAgNDogJzMzLjMzMzMzMzMzMzMzMzMzNiUnLFxuICA1OiAnNDEuNjY2NjY2NjY2NjY2NjclJyxcbiAgNjogJzUwJScsXG4gIDc6ICc1OC4zMzMzMzMzMzMzMzMzMzYlJyxcbiAgODogJzY2LjY2NjY2NjY2NjY2NjY3JScsXG4gIDk6ICc3NSUnLFxuICAxMDogJzgzLjMzMzMzMzMzMzMzMzM0JScsXG4gIDExOiAnOTEuNjY2NjY2NjY2NjY2NjclJyxcbiAgMTI6IEdyaWREZWZhdWx0VmFsdWVcbn07XG5cbi8qKlxuICogPGdyaWQ+XG4gKiAgIC4uLlxuICogPC9ncmlkPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dyaWQ6bm90KGdyaWRbY29sXSknLFxuICBleHBvcnRBczogJ2x5R3JpZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIGV4dGVuZHMgTHlGbGV4QmFzZSB7XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG4gIHJvb3RDbGFzcyA9IHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KCdrLWdyaWQnLCAoXG4gICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgYGZsZXgtd3JhcDp3cmFwO2AgK1xuICAgIGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YFxuICApKTtcblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZ3V0dGVyICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgc3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIGNvbnN0IG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLl9jcmVhdGVOZWdhdGl2ZU1hcmdpbkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3MsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IG5ld05lZ2F0aXZlTWFyZ2luQ2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuICBnZXQgZ3V0dGVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlckNsYXNzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJvb3RDbGFzcyk7XG4gIH1cblxuICAvKiogY3JlYXRlIHBhZGRpbmcgZm9yIGNoaWxkcyAqL1xuICBwcml2YXRlIF9jcmVhdGVHdXR0ZXJDbGFzcyhrZXk6IG51bWJlciwgdmFsOiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsIHx8IDE2O1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWdyaWRHdXR0ZXI6JHtrZXkgfHwgdGhpcy5ndXR0ZXJ9YDtcbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gdmFsIC8gMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgcGFkZGluZzoke3BhZGRpbmd9cHg7YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuICBwcml2YXRlIF9jcmVhdGVOZWdhdGl2ZU1hcmdpbkNsYXNzKGtleTogbnVtYmVyLCB2YWw6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWwgfHwgMTY7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZE5lZ2F0aXZlTWFyZ2luOiR7a2V5IHx8IHRoaXMuZ3V0dGVyfWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHZhbCAvIC0yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBtYXJnaW46JHtwYWRkaW5nfXB4O2AgK1xuICAgICAgICAgIGB3aWR0aDogY2FsYygxMDAlICsgJHt0aGlzLmd1dHRlcn1weCk7YFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIGV4YW1wbGVzOlxuICpcbiAqIDxncmlkPlxuICogICA8ZGl2IGNvbD1cIjlcIiBjb2xNZWRpYT1cImF1dG8gU21hbGxcIj48L2Rpdj5cbiAqICAgPGRpdiBjb2w9XCJhdXRvXCI+PC9kaXY+XG4gKiA8L2dyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ3JpZFtjb2xdJyxcbiAgZXhwb3J0QXM6ICdseUdyaWRJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRDb2wgZXh0ZW5kcyBMeUZsZXhCYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuICBjb2xWYWw6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXJDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Jhd0NsYXNzOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jb2wgIT09IHZhbCkge1xuICAgICAgLy8gLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVDb2xDbGFzcyh2YWwsIHZhbCk7XG4gICAgICAvLyB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fY29sQ2xhc3MpO1xuICAgICAgLy8gdGhpcy5fY29sQ2xhc3MgPSBuZXdDbGFzcztcbiAgICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICAgIGNvbnN0IHByZXZDbGFzc2VzID0gdGhpcy5fcmF3Q2xhc3M7XG5cbiAgICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxBcnJheSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnNwbGl0KCcgJykgOiB2YWw7XG4gICAgICB2YWxBcnJheS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCdAJyk7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQ29sQ2xhc3Moa2V5LCB2YWx1ZXNbMF0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1sxXSldKTtcbiAgICAgICAgdGhpcy5fcmF3Q2xhc3MucHVzaChuZXdDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgICBpZiAocHJldkNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgICB0aGlzLl9yYXdDbGFzcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIHB1YmxpYyBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgY29yZVRoZW1lLCBtZWRpYVF1ZXJpZXMpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8qKiBhcHBseSBndXR0ZXIgY2xhc3MgaWYgZXhpc3RzICovXG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5ndXR0ZXIpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5ncmlkQ29udGFpbmVyLmd1dHRlckNsYXNzO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29sQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuY29sVmFsID0gdmFsIHx8IG51bGw7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZENvbDoke2tleSB8fCB0aGlzLmNvbFZhbH1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb2xWYWwpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSBfX2dyaWRbdGhpcy5jb2xWYWxdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgbWF4LXdpZHRoOiR7bmV3VmFsfTtgICtcbiAgICAgICAgICAgIGBmbGV4LWJhc2lzOiR7bmV3VmFsfTtgICtcbiAgICAgICAgICAgIGBmbGV4LWdyb3c6MDtgXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYG1heC13aWR0aDoxMDAlO2AgK1xuICAgICAgICAgICAgYGZsZXgtYmFzaXM6MDtgICtcbiAgICAgICAgICAgIGBmbGV4LWdyb3c6MTtgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlGbGV4IH0gZnJvbSAnLi9mbGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUZsZXhJdGVtIH0gZnJvbSAnLi9mbGV4LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5R3JpZCwgTHlHcmlkQ29sIH0gZnJvbSAnLi9ncmlkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUZsZXgsIEx5RmxleEl0ZW0sIEx5R3JpZCwgTHlHcmlkQ29sXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlGbGV4LCBMeUZsZXhJdGVtLCBMeUdyaWQsIEx5R3JpZENvbF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxJQUFBO0lBQ0Usb0JBQ1MsYUFDQSxXQUNBLFlBQ0E7UUFIQSxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNULGVBQVUsR0FBVixVQUFVO1FBQ1Ysa0JBQWEsR0FBYixhQUFhO0tBQ2pCOzs7Ozs7SUFFTCxpQ0FBWTs7Ozs7SUFBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDckc7cUJBYkg7SUFjQzs7Ozs7Ozs7OztTQ05PLEtBQUs7Z0JBQ0UsYUFBYTtZQUNqQixRQUFRO21CQUNELGdCQUFnQjtZQUN2QixRQUFRO1VBQ1YsTUFBTTtpQkFDQyxjQUFjO1dBQ3BCLFlBQVk7WUFDWCxRQUFRO1NBQ1gsVUFBVTthQUNOLGVB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