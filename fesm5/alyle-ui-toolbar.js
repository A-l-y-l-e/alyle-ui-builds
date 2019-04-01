import { __extends } from 'tslib';
import { Directive, Renderer2, ElementRef, Input, isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, getLyThemeVariableUndefinedError, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = 'fixed';
/** @type {?} */
var DEFAULT_BG = 'background:tertiary';
/** @type {?} */
var styles = function (theme) {
    var _a;
    return ({
        root: (_a = {
                padding: '0 16px',
                display: 'flex',
                boxSizing: 'border-box',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                height: '64px',
                zIndex: theme.zIndex.toolbar
            },
            _a[theme.getBreakpoint('XSmall')] = {
                height: '56px'
            },
            _a['&'] = theme.toolbar ? theme.toolbar.root : null,
            _a),
        dense: {
            height: '56px'
        }
    });
};
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
var LyToolbar = /** @class */ (function (_super) {
    __extends(LyToolbar, _super);
    function LyToolbar(_renderer, _el, theme) {
        var _this = _super.call(this, theme) || this;
        _this._renderer = _renderer;
        _this._el = _el;
        _this.theme = theme;
        /**
         * Styles
         * \@docs-private
         */
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.setAutoContrast();
        _renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "dense", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dense;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (isDevMode() && newVal !== this.dense) {
                console.warn(this._el.nativeElement, "LyToolbar.appearance: `dense` is deprecated, instead use `appearance=\"dense\"`");
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.dense);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.dense);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "appearance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._appearance;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("LyToolbar.appearance:" + val, function (theme) {
                    if (!theme.toolbar) {
                        throw getLyThemeVariableUndefinedError('toolbar');
                    }
                    if (!(theme.toolbar.appearance && (/** @type {?} */ (theme.toolbar.appearance))[val])) {
                        throw new Error("Value toolbar.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    return (/** @type {?} */ ((/** @type {?} */ (theme.toolbar.appearance))[val]));
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyToolbar.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyToolbar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    };
    LyToolbar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor'
                    ]
                },] }
    ];
    /** @nocollapse */
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyToolbar.propDecorators = {
        position: [{ type: Input }],
        dense: [{ type: Input }],
        appearance: [{ type: Input }]
    };
    return LyToolbar;
}(LyToolbarMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LyToolbarModule = /** @class */ (function () {
    function LyToolbarModule() {
    }
    LyToolbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyCommonModule],
                    exports: [LyToolbar, LyCommonModule],
                    declarations: [LyToolbar]
                },] }
    ];
    return LyToolbarModule;
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

export { LyToolbarBase, LyToolbarMixinBase, LyToolbar, LyToolbarModule };

//# sourceMappingURL=alyle-ui-toolbar.js.map