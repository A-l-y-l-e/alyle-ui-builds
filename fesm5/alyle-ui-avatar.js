import { __extends, __decorate, __metadata } from 'tslib';
import { Input, Directive, Renderer2, ElementRef, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, LyCommonModule } from '@alyle/ui';

var STYLE_PRIORITY = -2;
var DEFAULT_SIZE = 40;
var DEFAULT_BG = 'action';
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1.25em',
        flexShrink: 0,
        alignItems: 'center',
        userSelect: 'none',
        borderRadius: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        '&>img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'block',
            objectFit: 'cover',
            '-webkit-background-clip': 'padding-box'
        },
        '&': theme.avatar ? theme.avatar.root : null
    }
}); };
var ɵ0 = STYLES;
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
    function LyAvatar(theme, renderer, _elementRef) {
        var _this = _super.call(this, theme) || this;
        _this._elementRef = _elementRef;
        /** @docs-private */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyAvatar.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
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
    LyAvatar.prototype.ngOnChanges = function () {
        this.updateStyle(this._elementRef.nativeElement);
    };
    LyAvatar.prototype.ngOnInit = function () {
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], LyAvatar.prototype, "size", null);
    LyAvatar = __decorate([
        Directive({
            selector: 'ly-avatar',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor',
            ]
        }),
        __metadata("design:paramtypes", [LyTheme2,
            Renderer2,
            ElementRef])
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

export { LyAvatar, LyAvatarBase, LyAvatarMixinBase, LyAvatarModule, ɵ0 };
//# sourceMappingURL=alyle-ui-avatar.js.map
