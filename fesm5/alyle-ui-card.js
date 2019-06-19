import { __extends, __decorate, __metadata } from 'tslib';
import { Directive, ElementRef, Renderer2, NgZone, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyTheme2, toBoolean, LyCommonModule } from '@alyle/ui';

var STYLES = function (theme) {
    var _a, _b;
    return ({
        $priority: STYLE_PRIORITY,
        root: {
            display: 'block',
            overflow: 'hidden',
            borderRadius: '2px',
            '&': theme.card ? theme.card.root : null
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
var DEFAULT_ASPECT_RATIO = '16:9';
var STYLE_PRIORITY = -1;
/** @docs-private */
var LyCardBase = /** @class */ (function () {
    function LyCardBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCardBase;
}());
/** @docs-private */
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
         * @docs-private
         */
        _this.classes = _this.theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        return _this;
    }
    LyCard.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyCard.prototype.ngOnInit = function () {
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
    LyCard.prototype.ngOnDestroy = function () {
        this._removeRippleEvents();
    };
    LyCard = __decorate([
        Directive({
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
        }),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2,
            NgZone])
    ], LyCard);
    return LyCard;
}(LyCardMixinBase));
var LyCardContent = /** @class */ (function () {
    function LyCardContent(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    LyCardContent.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    };
    LyCardContent = __decorate([
        Directive({
            selector: 'ly-card-content'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyCard])
    ], LyCardContent);
    return LyCardContent;
}());
var LyCardActions = /** @class */ (function () {
    function LyCardActions(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    LyCardActions.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(function (element) {
                _this.renderer.addClass(element, _this.card.classes.actionsItem);
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LyCardActions.prototype, "disableActionSpacing", void 0);
    LyCardActions = __decorate([
        Directive({
            selector: 'ly-card-actions'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyCard])
    ], LyCardActions);
    return LyCardActions;
}());
var LyCardMedia = /** @class */ (function () {
    function LyCardMedia(el, renderer, theme) {
        this.el = el;
        this.renderer = renderer;
        this.theme = theme;
    }
    Object.defineProperty(LyCardMedia.prototype, "bgImg", {
        get: function () {
            return this._bgImg;
        },
        set: function (val) {
            if (val !== this.bgImg) {
                this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCardMedia.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        /** Aspect ratio */
        set: function (val) {
            if (val !== this.ratio) {
                this._createAspectRatioClass(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyCardMedia.prototype.ngOnInit = function () {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    };
    LyCardMedia.prototype._createBgImgClass = function (val, instance) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
        return this.theme.addStyle("lyCard-media:" + val, ("display:block;" +
            "background-size: cover;" +
            "background-repeat: no-repeat;" +
            "background-position: center;"), this.el.nativeElement, instance, STYLE_PRIORITY);
    };
    LyCardMedia.prototype._createAspectRatioClass = function (val) {
        this._ratio = val;
        this._ratioClass = this.theme.addStyle("lyCard-media-ar:" + val, ({
            '&:before': val.split(':').reduce(function (valorAnterior, valorActual) {
                return ({
                    paddingTop: +valorActual / +valorAnterior * 100 + "%",
                    content: "''",
                    display: 'block'
                });
            })
        }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyCardMedia.prototype, "bgImg", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyCardMedia.prototype, "ratio", null);
    LyCardMedia = __decorate([
        Directive({
            selector: 'ly-card-media'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyTheme2])
    ], LyCardMedia);
    return LyCardMedia;
}());

var LyCardModule = /** @class */ (function () {
    function LyCardModule() {
    }
    LyCardModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCommonModule],
            declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
        })
    ], LyCardModule);
    return LyCardModule;
}());

export { LyCard, LyCardActions, LyCardBase, LyCardContent, LyCardMedia, LyCardMixinBase, LyCardModule, STYLES };
//# sourceMappingURL=alyle-ui-card.js.map
