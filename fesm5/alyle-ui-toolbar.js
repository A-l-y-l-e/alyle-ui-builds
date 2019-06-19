import { __extends, __decorate, __metadata } from 'tslib';
import { isDevMode, Input, Directive, Renderer2, ElementRef, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, toBoolean, getLyThemeVariableUndefinedError, LyTheme2, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'fixed';
var DEFAULT_BG = 'background:tertiary';
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
var ɵ0 = styles;
/** @docs-private */
var LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
/** @docs-private */
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
         * @docs-private
         */
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.setAutoContrast();
        _renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "dense", {
        get: function () {
            return this._dense;
        },
        set: function (val) {
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
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("LyToolbar.appearance:" + val, function (theme) {
                    if (!theme.toolbar) {
                        throw getLyThemeVariableUndefinedError('toolbar');
                    }
                    if (!(theme.toolbar.appearance && theme.toolbar.appearance[val])) {
                        throw new Error("Value toolbar.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    return theme.toolbar.appearance[val];
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyToolbar.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyToolbar.prototype.ngOnInit = function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyToolbar.prototype, "position", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyToolbar.prototype, "dense", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyToolbar.prototype, "appearance", null);
    LyToolbar = __decorate([
        Directive({
            selector: 'ly-toolbar',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor'
            ]
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyToolbar);
    return LyToolbar;
}(LyToolbarMixinBase));

var LyToolbarModule = /** @class */ (function () {
    function LyToolbarModule() {
    }
    LyToolbarModule = __decorate([
        NgModule({
            imports: [CommonModule, LyCommonModule],
            exports: [LyToolbar, LyCommonModule],
            declarations: [LyToolbar]
        })
    ], LyToolbarModule);
    return LyToolbarModule;
}());

export { LyToolbar, LyToolbarBase, LyToolbarMixinBase, LyToolbarModule, ɵ0 };
//# sourceMappingURL=alyle-ui-toolbar.js.map
