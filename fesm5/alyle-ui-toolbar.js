import { __extends, __decorate } from 'tslib';
import { Renderer2, ElementRef, Input, Directive, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'fixed';
var DEFAULT_BG = 'background:tertiary';
var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{padding:0 16px;display:flex;box-sizing:border-box;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:64px;z-index:" + theme.zIndex.toolbar + ";}" + styleTemplateToString(((theme.toolbar
            && theme.toolbar.root
            && (theme.toolbar.root instanceof StyleCollection
                ? theme.toolbar.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.toolbar.root(__)))), "" + className) + className + " " + theme.getBreakpoint('XSmall') + "{height:56px;}"; }; }
    };
};
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
    function LyToolbar(_renderer, _el, theme, _sr) {
        var _this = _super.call(this, theme) || this;
        _this._el = _el;
        _this.theme = theme;
        _this._sr = _sr;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this.theme.renderStyleSheet(STYLES);
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
    Object.defineProperty(LyToolbar.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._sr.add("LyToolbar.appearance:" + val, function (theme, ref) {
                    var classes = ref.selectorsOf(STYLES);
                    if (theme.toolbar && theme.toolbar.appearance) {
                        var appearance = theme.toolbar.appearance[val];
                        if (appearance) {
                            return appearance instanceof StyleCollection
                                ? appearance.setTransformer(function (_) { return _(classes); }).css
                                : appearance(classes);
                        }
                    }
                    throw new Error(val + " not found in theme.field.appearance");
                }, STYLE_PRIORITY, this._appearanceClass);
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
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: StyleRenderer }
    ]; };
    __decorate([
        Input()
    ], LyToolbar.prototype, "position", null);
    __decorate([
        Input()
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
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
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

/**
 * Generated bundle index. Do not edit.
 */

export { LyToolbar, LyToolbarBase, LyToolbarMixinBase, LyToolbarModule, STYLES };
//# sourceMappingURL=alyle-ui-toolbar.js.map
