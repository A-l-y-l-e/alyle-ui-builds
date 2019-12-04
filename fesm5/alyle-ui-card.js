import { __extends, __decorate } from 'tslib';
import { ElementRef, Renderer2, NgZone, Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { styleTemplateToString, StyleCollection, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyTheme2, StyleRenderer, toBoolean, LyHostClass, LyCommonModule } from '@alyle/ui';

var STYLES = function (theme, ref) {
    var card = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyCard.и,
        root: function () { return function (className) { return className + "{display:block;overflow:hidden;border-radius:2px;}" + styleTemplateToString(((theme.card
            && theme.card.root
            && (theme.card.root instanceof StyleCollection
                ? theme.card.root.setTransformer(function (fn) { return fn(card); })
                : theme.card.root(card)))), "" + className); }; },
        content: function (className) { return className + "{display:block;padding:16px 24px;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:16px 16px;}"; },
        actions: function (className) { return className + "{display:block;padding:8px 12px;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:8px 4px;}"; },
        actionsItem: function (className) { return className + "{margin:0 4px;}"; }
    };
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
        _this.classes = _this.theme.renderStyleSheet(STYLES);
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
    LyCard.и = 'LyCard';
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
            ],
            providers: [StyleRenderer]
        })
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
    LyCardContent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    LyCardContent = __decorate([
        Directive({
            selector: 'ly-card-content'
        })
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
    LyCardActions.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    __decorate([
        Input()
    ], LyCardActions.prototype, "disableActionSpacing", void 0);
    LyCardActions = __decorate([
        Directive({
            selector: 'ly-card-actions'
        })
    ], LyCardActions);
    return LyCardActions;
}());
var LyCardMedia = /** @class */ (function () {
    function LyCardMedia(el, renderer, styleRenderer) {
        this.el = el;
        this.renderer = renderer;
        this.styleRenderer = styleRenderer;
    }
    LyCardMedia_1 = LyCardMedia;
    Object.defineProperty(LyCardMedia.prototype, "bgImg", {
        get: function () {
            return this._bgImg;
        },
        set: function (val) {
            if (val !== this.bgImg) {
                this._bgImg = val;
                this[0x1] = this.styleRenderer.add(LyCardMedia_1.и + "--bgImg-" + val, function () { return function (className) { return className + "{display:block;background-size:cover;background-repeat:no-repeat;background-position:center;}"; }; }, STYLE_PRIORITY, this[0x1]);
                this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCardMedia.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        /**
         * Aspect ratio
         *
         * e.g:
         * 4:3
         * 1:1
         */
        set: function (val) {
            if (val !== this.ratio) {
                this._ratio = val;
                this[0x2] = this.styleRenderer.add(LyCardMedia_1.и + "--ratio-" + val, function () { return function (className) { return className + "::before{content:'';display:block;padding-top:" + val
                    .split(':')
                    .reduce(function (prev, current) { return (+current / +prev * 100).toString(); }) + "%;}"; }; }, STYLE_PRIORITY, this[0x2]);
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
    var LyCardMedia_1;
    LyCardMedia.и = 'LyCardMedia';
    LyCardMedia.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: StyleRenderer }
    ]; };
    __decorate([
        Input()
    ], LyCardMedia.prototype, "bgImg", null);
    __decorate([
        Input()
    ], LyCardMedia.prototype, "ratio", null);
    LyCardMedia = LyCardMedia_1 = __decorate([
        Directive({
            selector: 'ly-card-media',
            providers: [
                StyleRenderer,
                LyHostClass
            ]
        })
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

/**
 * Generated bundle index. Do not edit.
 */

export { LyCard, LyCardActions, LyCardBase, LyCardContent, LyCardMedia, LyCardMixinBase, LyCardModule, STYLES };
//# sourceMappingURL=alyle-ui-card.js.map
