import { __extends, __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, LyCommonModule } from '@alyle/ui';

var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'startTop';
var DEFAULT_BG = 'primary';
var DEFAULT_POSITION_VALUE = {
    after: '-11px',
    above: '-11px'
};
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        position: 'absolute',
        display: 'flex',
        width: '22px',
        height: '22px',
        borderRadius: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        pointerEvents: 'none',
        zIndex: 1,
        fontSize: theme.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        '&': theme.badge ? theme.badge.root : null
    },
    relative: {
        position: 'relative'
    }
}); };
/** @docs-private */
var LyBadgeBase = /** @class */ (function () {
    function LyBadgeBase(_theme) {
        this._theme = _theme;
    }
    return LyBadgeBase;
}());
/** @docs-private */
var LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
var LyBadge = /** @class */ (function (_super) {
    __extends(LyBadge, _super);
    function LyBadge(_el, _theme, _renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        _this._badgeElementRef = _this._el.nativeElement;
        return _this;
    }
    Object.defineProperty(LyBadge.prototype, "content", {
        get: function () {
            return this._content;
        },
        /** The content for the badge */
        set: function (val) {
            if (val !== this.content) {
                this._content = val;
                this._createBadge();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "position", {
        get: function () {
            return this._position;
        },
        /** The position for the badge */
        set: function (val) {
            if (val !== this.position) {
                this._position = val;
                this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                    var sty = theme.badge.position && theme.badge.position[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
                    if (sty) {
                        return sty;
                    }
                    else {
                        throw new Error("LyBadge.position `" + val + "` not found in `ThemeVariables`");
                    }
                }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "lyBadgeBg", {
        /** The color of the badge */
        get: function () {
            return this._lyBadgeBg;
        },
        set: function (val) {
            if (val !== this.lyBadgeBg) {
                this._lyBadgeBg = val;
                this._lyBadgeBgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) { return ({
                    backgroundColor: theme.colorOf(val),
                    color: theme.colorOf(val + ":contrast")
                }); }, this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyBadge.prototype.ngOnChanges = function () {
        if (!this.content) {
            this.updateStyle(this._el);
        }
    };
    LyBadge.prototype.ngOnInit = function () {
        /** Add root styles */
        this._renderer.addClass(this._badgeElementRef, this.classes.root);
        /** Set default position */
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        /** Set default bg */
        if (this.content && !this.lyBadgeBg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
    };
    LyBadge.prototype.ngOnDestroy = function () {
        if (this._elContainer) {
            this._renderer.removeChild(this._el.nativeElement, this._elContainer);
        }
    };
    LyBadge.prototype._createBadge = function () {
        if (!this._elContainer) {
            var container = this._elContainer = this._renderer.createElement('div');
            this._renderer.appendChild(this._el.nativeElement, container);
            this._badgeElementRef = container;
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._elContainer.textContent = "" + this.content;
    };
    __decorate([
        Input('lyBadge'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyBadge.prototype, "content", null);
    __decorate([
        Input('lyBadgePosition'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyBadge.prototype, "position", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyBadge.prototype, "lyBadgeBg", null);
    LyBadge = __decorate([
        Directive({
            selector: 'ly-badge, [lyBadge]',
            inputs: [
                'bg',
                'color',
                'raised',
                'disabled',
                'outlined',
                'elevation',
                'shadowColor'
            ]
        }),
        __metadata("design:paramtypes", [ElementRef,
            LyTheme2,
            Renderer2])
    ], LyBadge);
    return LyBadge;
}(LyBadgeMixinBase));

var LyBadgeModule = /** @class */ (function () {
    function LyBadgeModule() {
    }
    LyBadgeModule = __decorate([
        NgModule({
            exports: [LyBadge, LyCommonModule],
            declarations: [LyBadge]
        })
    ], LyBadgeModule);
    return LyBadgeModule;
}());

export { LyBadge, LyBadgeBase, LyBadgeMixinBase, LyBadgeModule, STYLES };
//# sourceMappingURL=alyle-ui-badge.js.map
