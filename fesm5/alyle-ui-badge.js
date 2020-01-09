import { __extends, __decorate } from 'tslib';
import { InjectionToken, ElementRef, Renderer2, Input, Directive, NgModule } from '@angular/core';
import { st2c, StyleCollection, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, LyHostClass, LyTheme2, LyCommonModule } from '@alyle/ui';

var LY_BADGE_DEFAULT_OPTIONS = new InjectionToken('BADGE_DEFAULT_OPTIONS');
var STYLE_PRIORITY = -2;
var DEFAULT_H_POSITION = 'after';
var DEFAULT_V_POSITION = 'above';
var DEFAULT_BG = 'primary';
var DEFAULT_APPEARANCE = 'default';
var DEFAULT_OVERLAP = 'rectangle';
var STYLES = function (theme, ref) {
    var badge = ref.selectorsOf(STYLES);
    return {
        $name: LyBadge.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{position:absolute;display:flex;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:" + theme.pxToRem(12) + ";font-family:" + theme.typography.fontFamily + ";justify-content:center;align-items:center;box-sizing:border-box;z-index:1;}" + st2c(((theme.badge
            && theme.badge.root
            && (theme.badge.root instanceof StyleCollection
                ? theme.badge.root.setTransformer(function (fn) { return fn(badge); })
                : theme.badge.root(badge)))), "" + className); }; },
        relative: function (className) { return className + "{position:relative;}"; }
    };
};
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
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        _this._badgeElementRef = _this._el.nativeElement;
        return _this;
    }
    LyBadge_1 = LyBadge;
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
    Object.defineProperty(LyBadge.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (container) {
            if (container == null) {
                throw new Error(LyBadge_1.и + ": [container] is undefined.");
            }
            if (this.content != null) {
                throw new Error(LyBadge_1.и + ": [container] with [content] don't work together.");
            }
            if (!container.tagName) {
                throw new Error(LyBadge_1.и + ": the value given to container is not an HTMLElement");
            }
            this._container = container;
            this._renderer.appendChild(container, this._el.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "overlap", {
        get: function () {
            return this._overlap;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.overlap) {
                this._overlap = val;
                Promise.resolve(null).then(function () {
                    var overlap = val;
                    var hp = _this.hPosition;
                    var vp = _this.vPosition;
                    var newClass = _this._theme.renderStyle(LyBadge_1.и + "-overlap-" + val + "&" + hp + "&" + vp, function (theme) {
                        var p = overlap === 'circle'
                            ? 14 : 0;
                        return function (className) { return className + "{" + theme.getDirection(vp) + ":" + p + "%;" + theme.getDirection(hp) + ":" + p + "%;}"; };
                    }, STYLE_PRIORITY);
                    _this._overlapClass = _this._hostClass.update(newClass, _this._overlapClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "bg", {
        /** The color of the badge */
        get: function () {
            return this._lyBadgeBg;
        },
        set: function (val) {
            if (this.content == null) {
                this.lyBadgeBg = val;
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
            var _this = this;
            if (val !== this.lyBadgeBg) {
                this._lyBadgeBg = val;
                var newClass_1 = this._theme.renderStyle(LyBadge_1.и + "--bg-" + val, function (theme) { return function (className) { return className + "{background-color:" + theme.colorOf(val) + ";color:" + theme.colorOf(val + ":contrast") + ";}"; }; }, STYLE_PRIORITY);
                Promise.resolve(null).then(function () {
                    _this[0x1] = _this._hostClass.update(newClass_1, _this[0x1]);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (this.content == null) {
                this.lyBadgeAppearance = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "lyBadgeAppearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.appearance) {
                this._appearance = val;
                var styleID_1 = LyBadge_1.и + "--appearance-" + val;
                var newClass_2 = this._theme.renderStyle(styleID_1, function (theme) {
                    var appearance = theme.badge
                        && theme.badge.appearance
                        && theme.badge.appearance[val]
                        && theme.badge.appearance[val](_this.classes);
                    if (appearance) {
                        return appearance;
                    }
                    throw new Error(styleID_1 + " is not defined in the theme.");
                }, STYLE_PRIORITY);
                Promise.resolve(null).then(function () {
                    _this._appearanceClass = _this._hostClass.update(newClass_2, _this._appearanceClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    LyBadge.prototype.ngOnChanges = function () {
        if (this.content == null) {
            this.updateStyle(this._el);
        }
        this._updatePosition();
        if (!this._hostClass) {
            this._hostClass = new LyHostClass(this._el, this._renderer);
        }
    };
    LyBadge.prototype.ngOnInit = function () {
        /** Add root styles */
        this._renderer.addClass(this._badgeElementRef, this.classes.root);
        /** Set default bg */
        if (!this.bg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
        /** Set default position */
        var requireUpdate = false;
        if (!this.hPosition) {
            requireUpdate = true;
            this.hPosition = DEFAULT_H_POSITION;
        }
        if (!this.vPosition) {
            requireUpdate = true;
            this.vPosition = DEFAULT_V_POSITION;
        }
        if (requireUpdate) {
            this._updatePosition();
        }
        /** Set default appearance */
        if (!this.appearance) {
            this.lyBadgeAppearance = DEFAULT_APPEARANCE;
        }
        /** Set default overlap */
        if (!this.overlap) {
            this.overlap = DEFAULT_OVERLAP;
        }
    };
    LyBadge.prototype.ngOnDestroy = function () {
        if (this._badgeEl) {
            this._renderer.removeChild(this._el.nativeElement, this._badgeEl);
        }
    };
    LyBadge.prototype._updatePosition = function () {
        var _this = this;
        var hp = this.hPosition;
        var vp = this.vPosition;
        if (hp && vp) {
            var y_1;
            var x_1;
            if (hp && vp) {
                if (hp === 'after') {
                    x_1 = 50;
                }
                else {
                    x_1 = -50;
                }
                if (vp === 'above') {
                    y_1 = -50;
                }
                else {
                    y_1 = 50;
                }
            }
            var newClass_3 = this._theme.renderStyle(LyBadge_1.и + "--position-" + hp + "-" + vp, function (theme) { return function (className) { return className + "{transform:translate(" + (theme.after === 'right'
                ? x_1 : -x_1) + "%, " + y_1 + "%);}"; }; }, STYLE_PRIORITY);
            Promise.resolve(null).then(function () {
                _this._positionClass = _this._hostClass.update(newClass_3, _this._positionClass);
            });
        }
    };
    LyBadge.prototype._createBadge = function () {
        if (!this._badgeEl) {
            var badge = this._badgeEl = this._renderer.createElement('div');
            this._renderer.appendChild((this.container) || this._el.nativeElement, badge);
            this._badgeElementRef = badge;
            this._hostClass = new LyHostClass(new ElementRef(badge), this._renderer);
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._badgeEl.textContent = "" + this.content;
    };
    var LyBadge_1;
    LyBadge.и = 'LyBadge';
    LyBadge.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input('lyBadge')
    ], LyBadge.prototype, "content", null);
    __decorate([
        Input()
    ], LyBadge.prototype, "container", null);
    __decorate([
        Input()
    ], LyBadge.prototype, "hPosition", void 0);
    __decorate([
        Input()
    ], LyBadge.prototype, "vPosition", void 0);
    __decorate([
        Input()
    ], LyBadge.prototype, "overlap", null);
    __decorate([
        Input()
    ], LyBadge.prototype, "bg", null);
    __decorate([
        Input()
    ], LyBadge.prototype, "lyBadgeBg", null);
    __decorate([
        Input()
    ], LyBadge.prototype, "appearance", null);
    __decorate([
        Input()
    ], LyBadge.prototype, "lyBadgeAppearance", null);
    LyBadge = LyBadge_1 = __decorate([
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
        })
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

/**
 * Generated bundle index. Do not edit.
 */

export { LY_BADGE_DEFAULT_OPTIONS, LyBadge, LyBadgeBase, LyBadgeMixinBase, LyBadgeModule, STYLES };
//# sourceMappingURL=alyle-ui-badge.js.map
