import { __extends, __decorate } from 'tslib';
import { ElementRef, Renderer2, Input, Directive, NgModule } from '@angular/core';
import { st2c, StyleCollection, mixinStyleUpdater, mixinColor, toBoolean, LyTheme2, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';

var STYLE_PRIORITY = -1;
var STYLES = function (theme) {
    return {
        $name: LyTypography.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{margin:0;display:block;font-family:" + theme.typography.fontFamily + ";}" + st2c(((theme.typography
            && theme.typography.root
            && (theme.typography.root instanceof StyleCollection
                ? theme.typography.root.setTransformer(function (fn) { return fn(); }).css
                : theme.typography.root()))), "" + className); },
        gutterTop: function (className) { return className + "{margin-top:0.35em;}"; },
        gutterBottom: function (className) { return className + "{margin-bottom:0.35em;}"; },
        gutter: function (className) { return className + "{margin:0.35em 0;}"; }
    };
};
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
    function LyTypography(_theme, _el, renderer, sr, hostClass) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this.renderer = renderer;
        _this.sr = sr;
        _this.hostClass = hostClass;
        /** @docs-private */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
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
                    this._lyTypClass = null;
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
                this.hostClass.toggle(this.classes.gutter, newVal);
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
                this.hostClass.toggle(this.classes.gutterTop, newVal);
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
                this.hostClass.toggle(this.classes.gutterBottom, newVal);
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
    LyTypography.prototype._createTypClass = function (val, instance) {
        var newKey = "k-typ:" + val;
        return this.sr.add(newKey, function (theme) {
            if (theme.typography && theme.typography.lyTyp) {
                var lyTyp = theme.typography.lyTyp[val];
                if (lyTyp) {
                    return lyTyp instanceof StyleCollection
                        ? lyTyp.setTransformer(function (_) { return _(); }).css
                        : lyTyp();
                }
            }
            throw new Error("Value typography.lyTyp['" + val + "'] not found in ThemeVariables");
        }, STYLE_PRIORITY, instance);
    };
    /** @docs-private */
    LyTypography.и = 'LyTypography';
    LyTypography.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
    __decorate([
        Input()
    ], LyTypography.prototype, "lyTyp", null);
    __decorate([
        Input()
    ], LyTypography.prototype, "noWrap", null);
    __decorate([
        Input()
    ], LyTypography.prototype, "gutter", null);
    __decorate([
        Input()
    ], LyTypography.prototype, "gutterTop", null);
    __decorate([
        Input()
    ], LyTypography.prototype, "gutterBottom", null);
    LyTypography = __decorate([
        Directive({
            selector: "[lyTyp]",
            inputs: [
                'color'
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
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

/**
 * Generated bundle index. Do not edit.
 */

export { LyTypography, LyTypographyBase, LyTypographyMixinBase, LyTypographyModule, STYLES };
//# sourceMappingURL=alyle-ui-typography.js.map
