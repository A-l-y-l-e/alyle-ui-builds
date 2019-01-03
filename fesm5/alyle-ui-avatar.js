import { __assign, __extends } from 'tslib';
import { Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_SIZE = 40;
/** @type {?} */
var DEFAULT_BG = 'action';
/** @type {?} */
var STYLES = function (theme) { return ({
    root: __assign({ display: 'inline-flex', position: 'relative', fontSize: '1.25em', flexShrink: 0, alignItems: 'center', userSelect: 'none', borderRadius: '50%', textAlign: 'center', justifyContent: 'center' }, theme.avatar.root, { '&>img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        } })
}); };
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyAvatarBase = /** @class */ (function () {
    function LyAvatarBase(_theme) {
        this._theme = _theme;
    }
    return LyAvatarBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
var LyAvatar = /** @class */ (function (_super) {
    __extends(LyAvatar, _super);
    function LyAvatar(theme, renderer, _elementRef) {
        var _this = _super.call(this, theme) || this;
        _this._elementRef = _elementRef;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyAvatar.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.size) {
                this._size = val;
                this._sizeClass = this._theme.addStyle("lyAvatar.size:" + val, {
                    width: val + "px",
                    height: val + "px",
                }, this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyAvatar.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._elementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    LyAvatar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    LyAvatar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-avatar',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                    ]
                },] }
    ];
    /** @nocollapse */
    LyAvatar.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyAvatar.propDecorators = {
        size: [{ type: Input }]
    };
    return LyAvatar;
}(LyAvatarMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyAvatarModule = /** @class */ (function () {
    function LyAvatarModule() {
    }
    LyAvatarModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyAvatar, LyCommonModule],
                    declarations: [LyAvatar]
                },] }
    ];
    return LyAvatarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyAvatarBase, LyAvatarMixinBase, LyAvatar, LyAvatarModule };

//# sourceMappingURL=alyle-ui-avatar.js.map