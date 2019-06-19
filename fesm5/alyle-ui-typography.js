import { __extends, __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinColor, toBoolean, LyTheme2, LyCommonModule } from '@alyle/ui';

var STYLE_PRIORITY = -1;
var styles = function (theme) { return ({
    root: {
        margin: 0,
        display: 'block',
        '&': theme.typography ? theme.typography.root : null
    }
}); };
var ɵ0 = styles;
/** @docs-private */
var Gutter;
(function (Gutter) {
    Gutter[Gutter["default"] = 0] = "default";
    Gutter[Gutter["top"] = 1] = "top";
    Gutter[Gutter["bottom"] = 2] = "bottom";
})(Gutter || (Gutter = {}));
/** @docs-private */
var LyTypographyBase = /** @class */ (function () {
    function LyTypographyBase(_theme) {
        this._theme = _theme;
    }
    return LyTypographyBase;
}());
/** @docs-private */
var LyTypographyMixinBase = mixinStyleUpdater(mixinColor((LyTypographyBase)));
var LyTypography = /** @class */ (function (_super) {
    __extends(LyTypography, _super);
    function LyTypography(_theme, _el, renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this.renderer = renderer;
        /** @docs-private */
        _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyTypography.prototype, "lyTyp", {
        get: function () {
            return this._lyTyp;
        },
        set: function (val) {
            if (val !== this.lyTyp) {
                if (val) {
                    this._lyTypClass = this._createTypClass(val, this._lyTypClass);
                }
                else if (this._lyTypClass) {
                    this.renderer.removeClass(this._el.nativeElement, this._lyTypClass);
                    this._lyTypClass = undefined;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "noWrap", {
        get: function () {
            return this._noWrap;
        },
        /** The text will truncate with an ellipsis. */
        set: function (val) {
            var newValue = toBoolean(val);
            if (newValue) {
                this._noWrapClass = this._theme.addSimpleStyle('lyTyp.noWrap', {
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                });
                this.renderer.addClass(this._el.nativeElement, this._noWrapClass);
            }
            else if (this._noWrapClass) {
                this.renderer.removeClass(this._el.nativeElement, this._noWrapClass);
                this._noWrapClass = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutter", {
        get: function () {
            return this._gutter;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterTop", {
        get: function () {
            return this._gutterTop;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                // const newClass = this._createGutterClass(Gutter.top, newVal);
                this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterBottom", {
        get: function () {
            return this._gutterBottom;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyTypography.prototype.ngOnInit = function () {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error("use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'");
        }
    };
    LyTypography.prototype.ngOnChanges = function () {
        this.updateStyle(this._el.nativeElement);
    };
    LyTypography.prototype._createTypClass = function (key, instance) {
        var newKey = "k-typ:" + key;
        return this._theme.addStyle(newKey, function (theme) {
            var typography = theme.typography;
            var styl = Object.assign({}, typography.lyTyp[key || 'body1']);
            if (styl.lineHeight) {
                styl.lineHeight = theme.pxToRem(styl.lineHeight);
            }
            if (typeof styl.letterSpacing === 'number') {
                styl.letterSpacing = styl.letterSpacing + "px";
            }
            // set default fontFamily
            styl.fontFamily = styl.fontFamily || typography.fontFamily;
            return styl;
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    };
    LyTypography.prototype._createGutterClass = function (name, val, instance) {
        return this._theme.addStyle("k-typ-gutter:" + name + ":" + val, function (theme) {
            var gutter = name === Gutter.default;
            return ("margin-top:" + (val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0) + "em;" +
                ("margin-bottom:" + (val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0) + "em;"));
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyTypography.prototype, "lyTyp", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyTypography.prototype, "noWrap", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyTypography.prototype, "gutter", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyTypography.prototype, "gutterTop", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyTypography.prototype, "gutterBottom", null);
    LyTypography = __decorate([
        Directive({
            selector: "[lyTyp]",
            inputs: [
                'color'
            ]
        }),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2])
    ], LyTypography);
    return LyTypography;
}(LyTypographyMixinBase));

var LyTypographyModule = /** @class */ (function () {
    function LyTypographyModule() {
    }
    LyTypographyModule = __decorate([
        NgModule({
            exports: [LyTypography, LyCommonModule],
            declarations: [LyTypography]
        })
    ], LyTypographyModule);
    return LyTypographyModule;
}());

export { LyTypography, LyTypographyBase, LyTypographyMixinBase, LyTypographyModule, ɵ0 };
//# sourceMappingURL=alyle-ui-typography.js.map
