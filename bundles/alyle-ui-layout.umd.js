(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/responsive')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/layout', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/responsive'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.layout = {}),global.ng.core,global.alyle.ui,global.alyle.ui.responsive));
}(this, (function (exports,core,ui,responsive) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    __align[__align.flex] = 'flex';
    __align[__align.inline] = 'inline';
    var LyFlex = /** @class */ (function (_super) {
        __extends(LyFlex, _super);
        function LyFlex(mediaQueries, elementRef, renderer, coreTheme) {
            return _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
        }
        Object.defineProperty(LyFlex.prototype, "fx", {
            set: /**
             * @param {?} valArray
             * @return {?}
             */ function (valArray) {
                var _this = this;
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
                valArray.forEach(function (key) {
                    /** @type {?} */
                    var newClass;
                    /** @type {?} */
                    var values = key.split(':');
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
             */ function () {
                return this._fxDisplay;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxDisplay !== val) {
                    /** @type {?} */
                    var newClass = this._createDisplayClass(val, val);
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
             */ function () {
                return this._fxFlow;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxFlow !== val) {
                    /** @type {?} */
                    var newClass = this._createFlowClass(val, val);
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
             */ function () {
                return this._fxAlign;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxAlign !== val) {
                    /** *
                     * create Style
                      @type {?} */
                    var newClass = this._createAlignClass(val, val);
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
             */ function () {
                return this._fxDirection;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._fxDirection !== val) {
                    /** *
                     * create Style
                      @type {?} */
                    var newClass = this._createDirectionClass(val, val);
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
             */ function () {
                return this._fxWrap;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxWrap !== val) {
                    /** *
                     * create Style
                      @type {?} */
                    var newClass = this._createWrapClass(val, val);
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
                /** @type {?} */
                var newKey = "k-fx-display:" + (key || this.fxDisplay);
                return this._coreTheme.setUpStyle(newKey, function () { return (val === 'inline' ? "display:inline-flex;" : "display:flex;"); }, media);
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
                /** @type {?} */
                var newKey = "k-fx-flow:" + (key || this.fxFlow);
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
                /** @type {?} */
                var newKey = "k-fx-align:" + (key || this.fxAlign);
                /** create Style */
                return this._coreTheme.setUpStyle(newKey, function () {
                    /** @type {?} */
                    var arrayVal = _this.fxAlign.split(' ');
                    /** @type {?} */
                    var justifyContent = arrayVal[0] || 'start';
                    /** @type {?} */
                    var alignItems = arrayVal[1] || 'stretch';
                    /** @type {?} */
                    var alignContent = arrayVal[2];
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
                /** @type {?} */
                var newKey = "k-fx-direction:" + (key || this.fxDirection);
                /** create Style */
                return this._coreTheme.setUpStyle(newKey, function () { return ("flex-direction:" + __align[_this.fxDirection] + ";"); }, media);
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
                /** @type {?} */
                var newKey = "k-fx-wrap:" + (key || this.fxWrap);
                /** create Style */
                return this._coreTheme.setUpStyle(newKey, function () { return ("flex-wrap:" + __align[_this.fxWrap] + ";"); }, media);
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
                if (core.isDevMode() && Array.isArray(val)) {
                    console.warn(val, 'in', this._elementRef, "\n\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B");
                    throw new Error("value: '" + val + "' is not a string in");
                }
            };
        LyFlex.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[fxDisplay], [fxFlow], [fxDirection], [fxWrap], [fxAlign], [fx]',
                        exportAs: 'lyFx'
                    },] },
        ];
        /** @nocollapse */
        LyFlex.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [responsive.LY_MEDIA_QUERIES,] }] },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.CoreTheme }
            ];
        };
        LyFlex.propDecorators = {
            fx: [{ type: core.Input }],
            fxDisplay: [{ type: core.Input }],
            fxFlow: [{ type: core.Input }],
            fxAlign: [{ type: core.Input }],
            fxDirection: [{ type: core.Input }],
            fxWrap: [{ type: core.Input }]
        };
        return LyFlex;
    }(LyFlexBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
             */ function (valArray) {
                var _this = this;
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
                valArray.forEach(function (key) {
                    /** @type {?} */
                    var newClass;
                    /** @type {?} */
                    var values = key.split(':');
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
             */ function () {
                return this._fxFlex;
            },
            /** Works the same as flex, default: 1 */
            set: /**
             * Works the same as flex, default: 1
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxFlex !== val) {
                    /** *
                     * create Style
                      @type {?} */
                    var newClass = this._createFlexClass(val, val);
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
             */ function () {
                return this._fxOrder;
            },
            /** Works the same as order, default: 1 */
            set: /**
             * Works the same as order, default: 1
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxOrder !== val) {
                    /** *
                     * create Style
                      @type {?} */
                    var newClass = this._createOrderClass(val, val);
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
             */ function () {
                return this._fxAlignSelf;
            },
            /** Works the same as order, align-self: center */
            set: /**
             * Works the same as order, align-self: center
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.fxAlignSelf !== val) {
                    /** *
                     * create Style
                      @type {?} */
                    var newClass = this._createAlignSelfClass(val, val);
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
                /** @type {?} */
                var newKey = "k-fx-flex:" + (key || this.fxFlex);
                /** create Style */
                return this._coreTheme.setUpStyle(newKey, function () { return ("flex:" + _this.fxFlex + ";"); }, media);
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
                /** @type {?} */
                var newKey = "k-fx-order:" + (key || this.fxOrder);
                /** create Style */
                return this._coreTheme.setUpStyle(newKey, function () { return ("order:" + _this.fxOrder + ";"); }, media);
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
                /** @type {?} */
                var newKey = "k-fx-alignSelf:" + (key || this.fxAlignSelf);
                /** create Style */
                return this._coreTheme.setUpStyle(newKey, function () { return ("align-self:" + _this.fxAlignSelf + ";"); }, media);
            };
        LyFlexItem.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[fxItem], [fxFlex], [fxOrder]',
                        exportAs: 'lyFxItem'
                    },] },
        ];
        /** @nocollapse */
        LyFlexItem.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.CoreTheme },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [responsive.LY_MEDIA_QUERIES,] }] },
                { type: LyFlex, decorators: [{ type: core.Optional }] }
            ];
        };
        LyFlexItem.propDecorators = {
            fxItem: [{ type: core.Input }],
            fxFlex: [{ type: core.Input }],
            fxOrder: [{ type: core.Input }],
            fxAlignSelf: [{ type: core.Input }]
        };
        return LyFlexItem;
    }(LyFlexBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
             */ function () {
                return this._gutter;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'grid:not(grid[col])',
                        exportAs: 'lyGrid'
                    },] },
        ];
        /** @nocollapse */
        LyGrid.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [responsive.LY_MEDIA_QUERIES,] }] },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.CoreTheme }
            ];
        };
        LyGrid.propDecorators = {
            gutter: [{ type: core.Input }]
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
             */ function () {
                return this._col;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'grid[col]',
                        exportAs: 'lyGridItem'
                    },] },
        ];
        /** @nocollapse */
        LyGridCol.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [responsive.LY_MEDIA_QUERIES,] }] },
                { type: LyGrid },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.CoreTheme }
            ];
        };
        LyGridCol.propDecorators = {
            col: [{ type: core.Input }]
        };
        return LyGridCol;
    }(LyFlexBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyFlex, LyFlexItem, LyGrid, LyGridCol],
                        declarations: [LyFlex, LyFlexItem, LyGrid, LyGridCol]
                    },] },
        ];
        return LayoutModule;
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

    exports.LyFlex = LyFlex;
    exports.LyFlexItem = LyFlexItem;
    exports.LyGrid = LyGrid;
    exports.LyGridCol = LyGridCol;
    exports.LayoutModule = LayoutModule;
    exports.ɵa = LyFlexBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbGF5b3V0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2ZsZXgtYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL2xheW91dC9mbGV4LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2xheW91dC9mbGV4LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2dyaWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjbGFzcyBMeUZsZXhCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2NvcmVUaGVtZTogQ29yZVRoZW1lLFxuICAgIHB1YmxpYyBfbWVkaWFRdWVyaWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgKSB7IH1cblxuICBfdXBkYXRlQ2xhc3MobmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M6IHN0cmluZykge1xuICAgIHRoaXMuX2NvcmVUaGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIGlzRGV2TW9kZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lLCBVbmRlZmluZWQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IEx5RmxleEJhc2UgfSBmcm9tICcuL2ZsZXgtYmFzZSc7XG5cbmVudW0gX19hbGlnbiB7XG4gIGZsZXgsXG4gIGlubGluZSxcbiAgcm93ID0gJ3JvdycsXG4gIHJvd1JldmVyc2UgPSAncm93LXJldmVyc2UnLFxuICBjb2x1bW4gPSAnY29sdW1uJyxcbiAgY29sdW1uUmV2ZXJzZSA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gIG5vd3JhcCA9ICdub3dyYXAnLFxuICB3cmFwID0gJ3dyYXAnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgY2VudGVyID0gJ2NlbnRlcicsXG4gIGVuZCA9ICdmbGV4LWVuZCcsXG4gIGJldHdlZW4gPSAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZCA9ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHkgPSAnc3BhY2UtZXZlbmx5JyxcbiAgYmFzZWxpbmUgPSAnYmFzZWxpbmUnLFxuICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxufVxuLyoqICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgKi9cbmV4cG9ydCB0eXBlIEZ4RGlyZWN0aW9uID0gc3RyaW5nIHwgbnVsbDtcbi8qKiAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnICovXG5leHBvcnQgdHlwZSBGeFdyYXAgPSBzdHJpbmcgfCBudWxsO1xuLyoqIFtGeERpcmVjdGlvbiwgRnhXcmFwXSAqL1xuZXhwb3J0IHR5cGUgRnhGbG93ID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRnhKdXN0aWZ5Q29udGVudCA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JyB8IG51bGw7XG5leHBvcnQgdHlwZSBGeEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiYXNlbGluZScgfCAnc3RyZXRjaCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgRnhBbGlnbkNvbnRlbnQgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ3N0cmV0Y2gnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEZ4QWxpZ25JdGVtc0FuZENvbnRlbnQgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8IG51bGw7XG4vKipcbiAqIFtGeEp1c3RpZnlDb250ZW50XSB8IFtGeEp1c3RpZnlDb250ZW50LCBGeEFsaWduSXRlbXNBbmRDb250ZW50XSB8IFtGeEp1c3RpZnlDb250ZW50LCBGeEFsaWduSXRlbXMsIEZ4QWxpZ25Db250ZW50XVxuICovXG5leHBvcnQgdHlwZSBGeEFsaWduID0gc3RyaW5nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmeERpc3BsYXldLCBbZnhGbG93XSwgW2Z4RGlyZWN0aW9uXSwgW2Z4V3JhcF0sIFtmeEFsaWduXSwgW2Z4XScsXG4gIGV4cG9ydEFzOiAnbHlGeCdcbn0pXG5leHBvcnQgY2xhc3MgTHlGbGV4IGV4dGVuZHMgTHlGbGV4QmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2Z4RGlzcGxheTogJ2ZsZXgnIHwgJ2lubGluZSc7XG4gIHByaXZhdGUgX2Z4RGlzcGxheUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIDxGeERpcmVjdGlvbj4gKyA8RnhXcmFwPiAqL1xuICBwcml2YXRlIF9meEZsb3c6IEZ4RmxvdztcbiAgcHJpdmF0ZSBfZnhGbG93Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meEFsaWduOiBGeEFsaWduO1xuICBwcml2YXRlIF9meEFsaWduQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meERpcmVjdGlvbjogRnhEaXJlY3Rpb247XG4gIHByaXZhdGUgX2Z4RGlyZWN0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meFdyYXA6IEZ4V3JhcDtcbiAgcHJpdmF0ZSBfZnhXcmFwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXdDbGFzczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4KHZhbEFycmF5OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuXG4gICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG4gICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZGlzcGxheScpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXNwbGF5Q2xhc3Moa2V5LCB2YWx1ZXNbMV0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2Zsb3cnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxvd0NsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2FsaWduJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZGlyZWN0aW9uJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZURpcmVjdGlvbkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ3dyYXAnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV3JhcENsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgIH0pO1xuICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZnhEaXNwbGF5KHZhbDogJ2ZsZXgnIHwgJ2lubGluZScpIHtcbiAgICBpZiAodGhpcy5meERpc3BsYXkgIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXNwbGF5Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RGlzcGxheUNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4RGlzcGxheUNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeERpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RGlzcGxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEZsb3codmFsOiBGeEZsb3cpIHtcbiAgICBpZiAodGhpcy5meEZsb3cgIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbG93Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4Rmxvd0NsYXNzKTtcbiAgICAgIHRoaXMuX2Z4Rmxvd0NsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEZsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RmxvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEFsaWduKHZhbDogRnhBbGlnbikge1xuICAgIGlmICh0aGlzLmZ4QWxpZ24gIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnbkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEFsaWduQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhBbGlnbkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEFsaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9meEFsaWduO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4RGlyZWN0aW9uKHZhbDogRnhEaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5fZnhEaXJlY3Rpb24gIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXJlY3Rpb25DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhEaXJlY3Rpb25DbGFzcyk7XG4gICAgICB0aGlzLl9meERpcmVjdGlvbkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhEaXJlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhXcmFwKHZhbDogRnhXcmFwKSB7XG4gICAgaWYgKHRoaXMuZnhXcmFwICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV3JhcENsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meFdyYXBDbGFzcyk7XG4gICAgICB0aGlzLl9meFdyYXBDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhXcmFwKCkge1xuICAgIHJldHVybiB0aGlzLl9meFdyYXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5fZnhEaXNwbGF5KSB7XG4gICAgICAvKiogU2V0IGRlZmF1bHQgZGlzcGxheSAqL1xuICAgICAgdGhpcy5meERpc3BsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZURpc3BsYXlDbGFzcyhrZXk6IHN0cmluZywgdmFsOiAnZmxleCcgfCAnaW5saW5lJywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhEaXNwbGF5ID0gdmFsIHx8ICdmbGV4JztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1kaXNwbGF5OiR7a2V5IHx8IHRoaXMuZnhEaXNwbGF5fWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgdmFsID09PSAnaW5saW5lJyA/IGBkaXNwbGF5OmlubGluZS1mbGV4O2AgOiBgZGlzcGxheTpmbGV4O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbG93Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrVmFsKHZhbCk7XG5cbiAgICB0aGlzLl9meEZsb3cgPSB2YWwgfHwgJ3JvdyB3cmFwJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1mbG93OiR7a2V5IHx8IHRoaXMuZnhGbG93fWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiBgZmxleC1mbG93OiR7dGhpcy5meEZsb3d9YCxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFsaWduQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrVmFsKHZhbCk7XG5cbiAgICB0aGlzLl9meEFsaWduID0gdmFsIHx8ICdzdGFydCBzdHJldGNoJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1hbGlnbjoke2tleSB8fCB0aGlzLmZ4QWxpZ259YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuICB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsID0gdGhpcy5meEFsaWduLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgY29uc3QganVzdGlmeUNvbnRlbnQgPSBhcnJheVZhbFswXSB8fCAnc3RhcnQnO1xuICAgICAgICBjb25zdCBhbGlnbkl0ZW1zID0gYXJyYXlWYWxbMV0gfHwgJ3N0cmV0Y2gnO1xuICAgICAgICBjb25zdCBhbGlnbkNvbnRlbnQgPSBhcnJheVZhbFsyXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBganVzdGlmeS1jb250ZW50OiR7X19hbGlnbltqdXN0aWZ5Q29udGVudF19O2AgK1xuICAgICAgICAgIGBhbGlnbi1pdGVtczoke19fYWxpZ25bYWxpZ25JdGVtc119O2AgK1xuICAgICAgICAgIGBhbGlnbi1jb250ZW50OiR7X19hbGlnblthbGlnbkNvbnRlbnQgfHwgYWxpZ25JdGVtc119O2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXJlY3Rpb25DbGFzcyhrZXk6IHN0cmluZywgdmFsOiBGeERpcmVjdGlvbiwgbWVkaWE/OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuX2Z4RGlyZWN0aW9uID0gdmFsIHx8ICdyb3cnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LWRpcmVjdGlvbjoke2tleSB8fCB0aGlzLmZ4RGlyZWN0aW9ufWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4LWRpcmVjdGlvbjoke19fYWxpZ25bdGhpcy5meERpcmVjdGlvbl19O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVXcmFwQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogRnhXcmFwLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4V3JhcCA9IHZhbCB8fCAnd3JhcCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtd3JhcDoke2tleSB8fCB0aGlzLmZ4V3JhcH1gO1xuXG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4LXdyYXA6JHtfX2FsaWduW3RoaXMuZnhXcmFwXX07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBDaGVjayBpZiB2YWx1ZSBpcyBzdHJpbmcgZWxzZSBlbWl0IGVycm9yICovXG4gIHByaXZhdGUgX2NoZWNrVmFsKHZhbDogYW55KSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY29uc29sZS53YXJuKHZhbCwgJ2luJywgdGhpcy5fZWxlbWVudFJlZiwgYFxcbsOwwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwovDsMKfwqDCi8Owwp/CoMKLw7DCn8KgwotgKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdmFsdWU6ICcke3ZhbH0nIGlzIG5vdCBhIHN0cmluZyBpbmApO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSwgVW5kZWZpbmVkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBMeUZsZXggfSBmcm9tICcuL2ZsZXguZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5RmxleEJhc2UgfSBmcm9tICcuL2ZsZXgtYmFzZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Z4SXRlbV0sIFtmeEZsZXhdLCBbZnhPcmRlcl0nLFxuICBleHBvcnRBczogJ2x5RnhJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZsZXhJdGVtIGV4dGVuZHMgTHlGbGV4QmFzZSB7XG5cbiAgcHJpdmF0ZSBfZnhGbGV4OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z4RmxleENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhPcmRlcjogc3RyaW5nO1xuICBwcml2YXRlIF9meE9yZGVyQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meEFsaWduU2VsZjogc3RyaW5nO1xuICBwcml2YXRlIF9meEFsaWduU2VsZkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF3Q2xhc3M6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEl0ZW0odmFsQXJyYXk6IHN0cmluZ1tdKSB7XG4gICAgaWYgKCF0aGlzLl9yYXdDbGFzcykge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG5cbiAgICAvKiogU2F2ZSBwcmV2aW91cyBjbGFzc2VzICAqL1xuICAgIGNvbnN0IHByZXZDbGFzc2VzID0gdGhpcy5fcmF3Q2xhc3M7XG5cbiAgICAvKiogQ2xlYXIgcmF3Q2xhc3MgKi9cbiAgICBpZiAodGhpcy5fcmF3Q2xhc3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgIH1cbiAgICB2YWxBcnJheS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgbmV3Q2xhc3M7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdmbGV4Jykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUZsZXhDbGFzcyhrZXksIHZhbHVlc1sxXSBhcyBhbnksIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnb3JkZXInKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlT3JkZXJDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdhbGlnblNlbGYnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQWxpZ25TZWxmQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmF3Q2xhc3MucHVzaChuZXdDbGFzcyk7XG4gICAgfSk7XG4gICAgLyoqIERlbGV0ZSBwcmV2aW91cyBjbGFzc2VzIGlmIHRoZXkgZXhpc3QgKi9cbiAgICBpZiAocHJldkNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBwcmV2Q2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEFkZCBuZXcgY2xhc3MgKi9cbiAgICB0aGlzLl9yYXdDbGFzcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFdvcmtzIHRoZSBzYW1lIGFzIGZsZXgsIGRlZmF1bHQ6IDEgKi9cbiAgQElucHV0KClcbiAgc2V0IGZ4RmxleCh2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZ4RmxleCAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUZsZXhDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhGbGV4Q2xhc3MpO1xuICAgICAgdGhpcy5fZnhGbGV4Q2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGZ4RmxleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhGbGV4O1xuICB9XG5cbiAgLyoqIFdvcmtzIHRoZSBzYW1lIGFzIG9yZGVyLCBkZWZhdWx0OiAxICovXG4gIEBJbnB1dCgpXG4gIHNldCBmeE9yZGVyKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZnhPcmRlciAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZU9yZGVyQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4T3JkZXJDbGFzcyk7XG4gICAgICB0aGlzLl9meE9yZGVyQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGZ4T3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4T3JkZXI7XG4gIH1cblxuICAvKiogV29ya3MgdGhlIHNhbWUgYXMgb3JkZXIsIGFsaWduLXNlbGY6IGNlbnRlciAqL1xuICBASW5wdXQoKVxuICBzZXQgZnhBbGlnblNlbGYodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5meEFsaWduU2VsZiAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduU2VsZkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEFsaWduU2VsZkNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4QWxpZ25TZWxmQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGZ4QWxpZ25TZWxmKCkge1xuICAgIHJldHVybiB0aGlzLl9meEFsaWduU2VsZjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbHlGbGV4OiBMeUZsZXhcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZsZXhDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnhGbGV4ID0gdmFsIHx8ICcxJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1mbGV4OiR7a2V5IHx8IHRoaXMuZnhGbGV4fWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4OiR7dGhpcy5meEZsZXh9O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVPcmRlckNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meE9yZGVyID0gdmFsIHx8ICcxJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1vcmRlcjoke2tleSB8fCB0aGlzLmZ4T3JkZXJ9YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgYG9yZGVyOiR7dGhpcy5meE9yZGVyfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQWxpZ25TZWxmQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4QWxpZ25TZWxmID0gdmFsIHx8ICcxJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1hbGlnblNlbGY6JHtrZXkgfHwgdGhpcy5meEFsaWduU2VsZn1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgYWxpZ24tc2VsZjoke3RoaXMuZnhBbGlnblNlbGZ9O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5jb25zdCBHcmlkRGVmYXVsdFZhbHVlID0gJzEwMCUnO1xuXG5jb25zdCBfX2dyaWQgPSB7XG4gIDA6IG51bGwsXG4gIDE6ICc4LjMzMzMzMzMzMzMzMzMzNCUnLFxuICAyOiAnMTYuNjY2NjY2NjY2NjY2NjY4JScsXG4gIDM6ICcyNSUnLFxuICA0OiAnMzMuMzMzMzMzMzMzMzMzMzM2JScsXG4gIDU6ICc0MS42NjY2NjY2NjY2NjY2NyUnLFxuICA2OiAnNTAlJyxcbiAgNzogJzU4LjMzMzMzMzMzMzMzMzMzNiUnLFxuICA4OiAnNjYuNjY2NjY2NjY2NjY2NjclJyxcbiAgOTogJzc1JScsXG4gIDEwOiAnODMuMzMzMzMzMzMzMzMzMzQlJyxcbiAgMTE6ICc5MS42NjY2NjY2NjY2NjY2NyUnLFxuICAxMjogR3JpZERlZmF1bHRWYWx1ZVxufTtcblxuLyoqXG4gKiA8Z3JpZD5cbiAqICAgLi4uXG4gKiA8L2dyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ3JpZDpub3QoZ3JpZFtjb2xdKScsXG4gIGV4cG9ydEFzOiAnbHlHcmlkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQgZXh0ZW5kcyBMeUZsZXhCYXNlIHtcbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX25lZ2F0aXZlTWFyZ2luQ2xhc3M6IHN0cmluZztcbiAgcm9vdENsYXNzID0gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoJ2stZ3JpZCcsIChcbiAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICBgZmxleC13cmFwOndyYXA7YCArXG4gICAgYGJveC1zaXppbmc6Ym9yZGVyLWJveDtgXG4gICkpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5ndXR0ZXIgIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBzdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgY29uc3QgbmV3TmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMuX2NyZWF0ZU5lZ2F0aXZlTWFyZ2luQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3TmVnYXRpdmVNYXJnaW5DbGFzcywgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gbmV3TmVnYXRpdmVNYXJnaW5DbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG4gIGdldCBndXR0ZXJDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQ2xhc3M7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucm9vdENsYXNzKTtcbiAgfVxuXG4gIC8qKiBjcmVhdGUgcGFkZGluZyBmb3IgY2hpbGRzICovXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKGtleTogbnVtYmVyLCB2YWw6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWwgfHwgMTY7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZ3JpZEd1dHRlcjoke2tleSB8fCB0aGlzLmd1dHRlcn1gO1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB2YWwgLyAyO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGBwYWRkaW5nOiR7cGFkZGluZ31weDtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG4gIHByaXZhdGUgX2NyZWF0ZU5lZ2F0aXZlTWFyZ2luQ2xhc3Moa2V5OiBudW1iZXIsIHZhbDogbnVtYmVyLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2d1dHRlciA9IHZhbCB8fCAxNjtcbiAgICBjb25zdCBuZXdLZXkgPSBgay1ncmlkTmVnYXRpdmVNYXJnaW46JHtrZXkgfHwgdGhpcy5ndXR0ZXJ9YDtcbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gdmFsIC8gLTI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbjoke3BhZGRpbmd9cHg7YCArXG4gICAgICAgICAgYHdpZHRoOiBjYWxjKDEwMCUgKyAke3RoaXMuZ3V0dGVyfXB4KTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogZXhhbXBsZXM6XG4gKlxuICogPGdyaWQ+XG4gKiAgIDxkaXYgY29sPVwiOVwiIGNvbE1lZGlhPVwiYXV0byBTbWFsbFwiPjwvZGl2PlxuICogICA8ZGl2IGNvbD1cImF1dG9cIj48L2Rpdj5cbiAqIDwvZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdncmlkW2NvbF0nLFxuICBleHBvcnRBczogJ2x5R3JpZEl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZENvbCBleHRlbmRzIEx5RmxleEJhc2UgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfY29sOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbENsYXNzOiBzdHJpbmc7XG4gIGNvbFZhbDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF3Q2xhc3M6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmNvbCAhPT0gdmFsKSB7XG4gICAgICAvLyAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUNvbENsYXNzKHZhbCwgdmFsKTtcbiAgICAgIC8vIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9jb2xDbGFzcyk7XG4gICAgICAvLyB0aGlzLl9jb2xDbGFzcyA9IG5ld0NsYXNzO1xuICAgICAgaWYgKCF0aGlzLl9yYXdDbGFzcykge1xuICAgICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICAvKiogU2F2ZSBwcmV2aW91cyBjbGFzc2VzICAqL1xuICAgICAgY29uc3QgcHJldkNsYXNzZXMgPSB0aGlzLl9yYXdDbGFzcztcblxuICAgICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgICBpZiAodGhpcy5fcmF3Q2xhc3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbEFycmF5ID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwuc3BsaXQoJyAnKSA6IHZhbDtcbiAgICAgIHZhbEFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXkuc3BsaXQoJ0AnKTtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVDb2xDbGFzcyhrZXksIHZhbHVlc1swXSBhcyBhbnksIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzFdKV0pO1xuICAgICAgICB0aGlzLl9yYXdDbGFzcy5wdXNoKG5ld0NsYXNzKTtcbiAgICAgIH0pO1xuICAgICAgLyoqIERlbGV0ZSBwcmV2aW91cyBjbGFzc2VzIGlmIHRoZXkgZXhpc3QgKi9cbiAgICAgIGlmIChwcmV2Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLyoqIEFkZCBuZXcgY2xhc3MgKi9cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgcHVibGljIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLyoqIGFwcGx5IGd1dHRlciBjbGFzcyBpZiBleGlzdHMgKi9cbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLmd1dHRlcikge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmdyaWRDb250YWluZXIuZ3V0dGVyQ2xhc3M7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgICAgdGhpcy5fZ3V0dGVyQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDb2xDbGFzcyhrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xWYWwgPSB2YWwgfHwgbnVsbDtcbiAgICBjb25zdCBuZXdLZXkgPSBgay1ncmlkQ29sOiR7a2V5IHx8IHRoaXMuY29sVmFsfWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbFZhbCkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IF9fZ3JpZFt0aGlzLmNvbFZhbF07XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGBtYXgtd2lkdGg6JHtuZXdWYWx9O2AgK1xuICAgICAgICAgICAgYGZsZXgtYmFzaXM6JHtuZXdWYWx9O2AgK1xuICAgICAgICAgICAgYGZsZXgtZ3JvdzowO2BcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgbWF4LXdpZHRoOjEwMCU7YCArXG4gICAgICAgICAgICBgZmxleC1iYXNpczowO2AgK1xuICAgICAgICAgICAgYGZsZXgtZ3JvdzoxO2BcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeUZsZXggfSBmcm9tICcuL2ZsZXguZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5RmxleEl0ZW0gfSBmcm9tICcuL2ZsZXgtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlHcmlkLCBMeUdyaWRDb2wgfSBmcm9tICcuL2dyaWQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5RmxleCwgTHlGbGV4SXRlbSwgTHlHcmlkLCBMeUdyaWRDb2xdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZsZXgsIEx5RmxleEl0ZW0sIEx5R3JpZCwgTHlHcmlkQ29sXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJpc0Rldk1vZGUiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIkluamVjdCIsIkxZX01FRElBX1FVRVJJRVMiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiQ29yZVRoZW1lIiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0FD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