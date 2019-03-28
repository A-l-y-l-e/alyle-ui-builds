import { CommonModule } from '@angular/common';
import { __extends } from 'tslib';
import { Directive, ElementRef, Input, NgZone, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLES = function (theme) {
    var _a, _b;
    return ({
        $priority: STYLE_PRIORITY,
        root: {
            display: 'block',
            overflow: 'hidden',
            borderRadius: '2px'
        },
        content: (_a = {
                display: 'block',
                padding: '16px 24px'
            },
            _a[theme.getBreakpoint('XSmall')] = {
                padding: '16px 16px'
            },
            _a),
        actions: (_b = {
                display: 'block',
                padding: '8px 12px'
            },
            _b[theme.getBreakpoint('XSmall')] = {
                padding: '8px 4px'
            },
            _b),
        actionsItem: {
            margin: '0 4px'
        }
    });
};
/** @type {?} */
var DEFAULT_ASPECT_RATIO = '16:9';
/** @type {?} */
var STYLE_PRIORITY = -1;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyCardBase = /** @class */ (function () {
    function LyCardBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCardBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyCardMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCardBase)))))))));
var LyCard = /** @class */ (function (_super) {
    __extends(LyCard, _super);
    function LyCard(theme, _el, renderer, ngZone) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this.theme = theme;
        _this._el = _el;
        _this.renderer = renderer;
        /**
         * styles
         * \@docs-private
         */
        _this.classes = _this.theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        return _this;
    }
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var card = this.theme.variables.card;
        if (card) {
            this.renderer.addClass(this._el.nativeElement, this.theme.style(card.root, STYLE_PRIORITY, STYLES));
        }
        /** @type {?} */
        var requireOnChanges;
        if (!this.bg) {
            this.bg = 'background:primary';
            requireOnChanges = true;
        }
        if (!this.elevation) {
            this.elevation = 2;
            requireOnChanges = true;
        }
        if (requireOnChanges) {
            this.updateStyle(this._el);
        }
        this.renderer.addClass(this._el.nativeElement, this.classes.root);
    };
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeRippleEvents();
    };
    LyCard.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                        'disableRipple',
                    ]
                },] }
    ];
    /** @nocollapse */
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    return LyCard;
}(LyCardMixinBase));
var LyCardContent = /** @class */ (function () {
    function LyCardContent(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    LyCardContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    };
    LyCardContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-content'
                },] }
    ];
    /** @nocollapse */
    LyCardContent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    return LyCardContent;
}());
var LyCardActions = /** @class */ (function () {
    function LyCardActions(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    LyCardActions.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(function (element) {
                _this.renderer.addClass(element, _this.card.classes.actionsItem);
            });
        }
    };
    LyCardActions.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-actions'
                },] }
    ];
    /** @nocollapse */
    LyCardActions.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    LyCardActions.propDecorators = {
        disableActionSpacing: [{ type: Input }]
    };
    return LyCardActions;
}());
var LyCardMedia = /** @class */ (function () {
    function LyCardMedia(el, renderer, theme) {
        this.el = el;
        this.renderer = renderer;
        this.theme = theme;
    }
    Object.defineProperty(LyCardMedia.prototype, "bgImg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bgImg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.bgImg) {
                this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCardMedia.prototype, "ratio", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ratio;
        },
        /** Aspect ratio */
        set: /**
         * Aspect ratio
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.ratio) {
                this._createAspectRatioClass(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyCardMedia.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    };
    /**
     * @private
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    LyCardMedia.prototype._createBgImgClass = /**
     * @private
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    function (val, instance) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
        return this.theme.addStyle("lyCard-media:" + val, ("display:block;" +
            "background-size: cover;" +
            "background-repeat: no-repeat;" +
            "background-position: center;"), this.el.nativeElement, instance, STYLE_PRIORITY);
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    LyCardMedia.prototype._createAspectRatioClass = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._ratio = val;
        this._ratioClass = this.theme.addStyle("lyCard-media-ar:" + val, ({
            '&:before': val.split(':').reduce(function (valorAnterior, valorActual) {
                return (/** @type {?} */ (({
                    paddingTop: +valorActual / +valorAnterior * 100 + "%",
                    content: "''",
                    display: 'block'
                })));
            })
        }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
    };
    LyCardMedia.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-media'
                },] }
    ];
    /** @nocollapse */
    LyCardMedia.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 }
    ]; };
    LyCardMedia.propDecorators = {
        bgImg: [{ type: Input }],
        ratio: [{ type: Input }]
    };
    return LyCardMedia;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LyCardModule = /** @class */ (function () {
    function LyCardModule() {
    }
    LyCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCommonModule],
                    declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
                },] }
    ];
    return LyCardModule;
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

export { LyCardModule, STYLES, LyCardBase, LyCardMixinBase, LyCard, LyCardContent, LyCardActions, LyCardMedia };

//# sourceMappingURL=alyle-ui-card.js.map