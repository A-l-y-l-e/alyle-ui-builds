import { __extends, __decorate, __param } from 'tslib';
import { InjectionToken, Renderer2, ElementRef, Optional, Inject, Input, Directive, NgModule } from '@angular/core';
import { st2c, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';

var STYLE_PRIORITY = -2;
var DEFAULT_SIZE = 40;
var DEFAULT_BG = 'action';
var LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
var STYLES = function (theme) {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}" + st2c(((theme.avatar
            && theme.avatar.root
            && theme.avatar.root())), "" + className) + className + ">img{width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;-webkit-background-clip:padding-box;}"; }
    };
};
/** @docs-private */
var LyAvatarBase = /** @class */ (function () {
    function LyAvatarBase(_theme) {
        this._theme = _theme;
    }
    return LyAvatarBase;
}());
/** @docs-private */
var LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
var LyAvatar = /** @class */ (function (_super) {
    __extends(LyAvatar, _super);
    function LyAvatar(theme, renderer, _elementRef, _styleRenderer, _defaults) {
        var _this = _super.call(this, theme) || this;
        _this._elementRef = _elementRef;
        _this._styleRenderer = _styleRenderer;
        _this._defaults = _defaults;
        /** @docs-private */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, _this.classes.root);
        return _this;
    }
    LyAvatar_1 = LyAvatar;
    Object.defineProperty(LyAvatar.prototype, "size", {
        get: function () {
            return this._size;
        },
        /** Avatar size */
        set: function (val) {
            if (val !== this.size) {
                this._size = val;
                this[0x1] = this._styleRenderer.add(LyAvatar_1.и + "-size-" + val, function () { return (function (className) { return className + "{width:" + val + "px;height:" + val + "px;}"; }); }, STYLE_PRIORITY, this[0x1]);
                // const newClass = this._theme.renderStyle(`${LyAvatar.и}.size:${val}`, () => (
                //   (className: string) => ``
                // ), STYLE_PRIORITY);
                // this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyAvatar.prototype.ngOnChanges = function () {
        this.updateStyle(this._elementRef.nativeElement);
    };
    LyAvatar.prototype.ngOnInit = function () {
        if (!this.bg) {
            this.bg = (this._defaults && this._defaults.bg) || DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = (this._defaults && this._defaults.size) || DEFAULT_SIZE;
        }
    };
    var LyAvatar_1;
    /** @docs-private */
    LyAvatar.и = 'LyAvatar';
    LyAvatar.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: StyleRenderer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_AVATAR_DEFAULT_OPTIONS,] }] }
    ]; };
    __decorate([
        Input()
    ], LyAvatar.prototype, "size", null);
    LyAvatar = LyAvatar_1 = __decorate([
        Directive({
            selector: 'ly-avatar',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor',
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        }),
        __param(4, Optional()), __param(4, Inject(LY_AVATAR_DEFAULT_OPTIONS))
    ], LyAvatar);
    return LyAvatar;
}(LyAvatarMixinBase));

var LyAvatarModule = /** @class */ (function () {
    function LyAvatarModule() {
    }
    LyAvatarModule = __decorate([
        NgModule({
            exports: [LyAvatar, LyCommonModule],
            declarations: [LyAvatar]
        })
    ], LyAvatarModule);
    return LyAvatarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LY_AVATAR_DEFAULT_OPTIONS, LyAvatar, LyAvatarBase, LyAvatarMixinBase, LyAvatarModule, STYLES };
//# sourceMappingURL=alyle-ui-avatar.js.map
