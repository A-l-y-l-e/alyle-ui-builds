import { __extends } from 'tslib';
import { Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { LyTheme2, toBoolean, mixinStyleUpdater, mixinColor, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -1;
/** @type {?} */
var styles = function (theme) { return ({
    root: {
        margin: 0,
        display: 'block',
        '&': theme.typography ? theme.typography.root : null
    }
}); };
/** @enum {number} */
var Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = 'default';
Gutter[Gutter.top] = 'top';
Gutter[Gutter.bottom] = 'bottom';
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyTypographyBase = /** @class */ (function () {
    function LyTypographyBase(_theme) {
        this._theme = _theme;
    }
    return LyTypographyBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyTypographyMixinBase = mixinStyleUpdater(mixinColor((LyTypographyBase)));
var LyTypography = /** @class */ (function (_super) {
    __extends(LyTypography, _super);
    function LyTypography(_theme, _el, renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyTypography.prototype, "lyTyp", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lyTyp;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.lyTyp) {
                if (val) {
                    this._lyTypClass = this._createTypClass(val, this._lyTypClass);
                }
                else if (this._lyTypClass) {
                    this.renderer.removeClass(this._el.nativeElement, this._lyTypClass);
                    this._lyTypClass = undefined;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "noWrap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._noWrap;
        },
        /** The text will truncate with an ellipsis. */
        set: /**
         * The text will truncate with an ellipsis.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newValue = toBoolean(val);
            if (newValue) {
                this._noWrapClass = this._theme.addSimpleStyle('lyTyp.noWrap', {
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                });
                this.renderer.addClass(this._el.nativeElement, this._noWrapClass);
            }
            else if (this._noWrapClass) {
                this.renderer.removeClass(this._el.nativeElement, this._noWrapClass);
                this._noWrapClass = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutter", {
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
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterTop;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                // const newClass = this._createGutterClass(Gutter.top, newVal);
                this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterBottom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterBottom;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTypography.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error("use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'");
        }
    };
    /**
     * @return {?}
     */
    LyTypography.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el.nativeElement);
    };
    /**
     * @private
     * @param {?} key
     * @param {?=} instance
     * @return {?}
     */
    LyTypography.prototype._createTypClass = /**
     * @private
     * @param {?} key
     * @param {?=} instance
     * @return {?}
     */
    function (key, instance) {
        /** @type {?} */
        var newKey = "k-typ:" + key;
        return this._theme.addStyle(newKey, function (theme) {
            var typography = theme.typography;
            /** @type {?} */
            var styl = Object.assign({}, typography.lyTyp[key || 'body1']);
            if (styl.lineHeight) {
                styl.lineHeight = theme.pxToRem((/** @type {?} */ (styl.lineHeight)));
            }
            if (typeof styl.letterSpacing === 'number') {
                styl.letterSpacing = styl.letterSpacing + "px";
            }
            // set default fontFamily
            styl.fontFamily = styl.fontFamily || typography.fontFamily;
            return styl;
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    };
    /**
     * @private
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    LyTypography.prototype._createGutterClass = /**
     * @private
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    function (name, val, instance) {
        return this._theme.addStyle("k-typ-gutter:" + name + ":" + val, function (theme) {
            /** @type {?} */
            var gutter = name === Gutter.default;
            return ("margin-top:" + (val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0) + "em;" +
                ("margin-bottom:" + (val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0) + "em;"));
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    };
    LyTypography.decorators = [
        { type: Directive, args: [{
                    selector: "[lyTyp]",
                    inputs: [
                        'color'
                    ]
                },] }
    ];
    /** @nocollapse */
    LyTypography.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyTypography.propDecorators = {
        lyTyp: [{ type: Input }],
        noWrap: [{ type: Input }],
        gutter: [{ type: Input }],
        gutterTop: [{ type: Input }],
        gutterBottom: [{ type: Input }]
    };
    return LyTypography;
}(LyTypographyMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LyTypographyModule = /** @class */ (function () {
    function LyTypographyModule() {
    }
    LyTypographyModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyTypography, LyCommonModule],
                    declarations: [LyTypography]
                },] }
    ];
    return LyTypographyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LyTypographyModule, LyTypographyBase, LyTypographyMixinBase, LyTypography };

//# sourceMappingURL=alyle-ui-typography.js.map