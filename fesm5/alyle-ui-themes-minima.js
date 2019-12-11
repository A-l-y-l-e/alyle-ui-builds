import { __extends, __decorate } from 'tslib';
import { Dir, shadowBuilder, StyleCollection, LyStyleUtils, LyTheme2, LY_THEME_NAME, mergeThemes } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import { Directive, NgModule } from '@angular/core';
import { Color } from '@alyle/ui/color';

var iconButton = {
    size: '48px'
};
var icon = {
    fontSize: '24px'
};
var zIndex = {
    toolbar: 1000,
    drawer: 1100,
    overlay: 1200
};
var RippleVariables = {
    transition: {
        opacity: 'cubic-bezier(0.4,0.0,1,1)',
        transform: 'cubic-bezier(0, 1, 0.6, 1)'
    },
    duration: 950
};
var animations = {
    curves: {
        standard: 'cubic-bezier(0.4,0.0,0.2,1)',
        deceleration: 'cubic-bezier(0.0,0.0,0.2,1)',
        acceleration: 'cubic-bezier(0.4,0.0,1,1)',
        sharp: 'cubic-bezier(0.4,0.0,0.6,1)'
    },
    durations: {
        complex: 375,
        entering: 225,
        exiting: 195
    }
};

var MinimaBase = /** @class */ (function (_super) {
    __extends(MinimaBase, _super);
    function MinimaBase() {
        var _this = _super.call(this) || this;
        _this.typography = {
            fontFamily: "'Roboto', sans-serif",
            htmlFontSize: 16,
            fontSize: 14,
            gutterTop: 1,
            gutterBottom: .35,
            lyTyp: {}
        };
        _this.iconButton = iconButton;
        _this.icon = icon;
        _this.breakpoints = Breakpoints;
        _this.zIndex = zIndex;
        _this.ripple = RippleVariables;
        _this.animations = animations;
        _this.direction = Dir.ltr;
        _this.button = {
            size: {
                small: function () { return function (className) { return className + "{padding:0 8px;font-size:" + _this.pxToRem(13) + ";min-height:32px;min-width:48p;}"; }; },
                medium: function () { return function (className) { return className + "{padding:0 14px;min-height:36px;min-width:64px;}"; }; },
                large: function () { return function (className) { return className + "{padding:0 21px;font-size:" + _this.pxToRem(15) + ";min-height:40px;min-width:96px;}"; }; }
            },
            appearance: {
                icon: function () { return function (className) { return className + "{min-width:40px;width:40px;height:40px;padding:0;border-radius:50%;}"; }; },
                fab: function () { return function (className) { return className + "{min-width:56px;width:56px;height:56px;padding:0;border-radius:50%;}"; }; },
                miniFab: function () { return function (className) { return className + "{min-width:40px;width:40px;height:40px;padding:0;border-radius:50%;}"; }; }
            }
        };
        _this.badge = {
            appearance: {
                default: function () { return function (className) { return className + "{padding:0 6px;min-width:22px;height:22px;border-radius:2em;}"; }; },
                dot: function () { return function (className) { return className + "{width:6px;height:6px;border-radius:50%;}"; }; }
            }
        };
        _this.checkbox = {
            color: function (checkbox, color) { return function (className) { return "" + className + checkbox.checked + " " + checkbox.icon + "{color:" + color + ";}" + className + checkbox.checked + ":not({disabled}) " + checkbox.icon + "{box-shadow:" + shadowBuilder(1, color) + ";}"; }; }
        };
        _this.expansion = {
            root: function (classes) { return function (className) { return className + " " + classes.panelHeader + "{height:48px;}" + className + " " + classes.expanded + " " + classes.panelHeader + "{height:64px;}"; }; },
            appearance: {
                popOut: function (classes) { return function (className) { return className + " " + classes.panel + "{transition:margin " + _this.animations.durations.entering + "ms " + _this.animations.curves.standard + ";}" + className + " " + classes.expanded + classes.panel + "{margin:16px 0;}" + className + " " + classes.expanded + classes.panel + ":first-child{margin-top:0;}" + className + " " + classes.expanded + classes.panel + ":last-child{margin-bottom:0jj;}"; }; }
            }
        };
        _this.field = {
            appearance: {
                standard: new StyleCollection(function (classes) { return function (className) { return className + ":not(" + classes.disabled + ") " + classes.container + ":hover:after{border-bottom-color:currentColor;}" + className + classes.disabled + " " + classes.container + ":after{border-bottom-style:dotted;border-color:inherit;}" + className + " textarea{inputNative}{margin:0.25em 0;}" + className + " " + classes.inputNative + ":not(textarea){padding:0.25em 0;}" + className + " " + classes.container + "{padding:1em 0 0;}" + className + " " + classes.container + ":after{border-bottom-style:solid;border-bottom-width:1px;}" + className + classes.focused + " " + classes.container + ":after{border-width:2px;border-color:currentColor;}" + className + " " + classes.label + "{margin:0.25em 0;}" + className + " " + classes.placeholder + "{margin:0.25em 0;}" + className + " " + classes.floatingLabel + "{transform:translateY(-1.25em);}"; }; }),
                outlined: new StyleCollection(function (classes) { return function (className) { return className + ":not(" + classes.focused + "):not({disabled}):hover " + classes.fieldset + "{border-color:currentColor;}" + className + classes.focused + " " + classes.fieldset + "{border-width:2px;border-color:inherit;}" + className + " textarea" + classes.inputNative + "{margin:1em 0;}" + className + " " + classes.inputNative + ":not(textarea){padding:1em 0;}" + className + " " + classes.container + "{padding:0 0.75em;}" + className + " " + classes.fieldset + "{border-width:1px;border-radius:5px;padding:0 .5em;}" + className + " " + classes.prefix + ":after{padding:0.25em;}" + className + " " + classes.suffix + ":after{padding:0.25em;}" + className + " " + classes.label + "{margin:1em 0;}" + className + " " + classes.placeholder + "{margin:1em 0;}" + className + " " + classes.floatingLabel + classes.label + "{transform:translateY(-1.75em);}" + className + " " + classes.hintContainer + "{padding:0 0.75em;}"; }; }),
                filled: new StyleCollection(function (classes) { return function (className) { return className + ":not(" + classes.focused + "):not(" + classes.disabled + ") " + classes.container + ":hover:after{border-bottom-width:1px;}" + className + " textarea" + classes.inputNative + "{margin:1.59375em 0 0.40625em;}" + className + " " + classes.inputNative + ":not(textarea){padding:1.59375em 0 0.40625em;}" + className + " " + classes.container + "{border-radius:5px 5px 0 0;padding:0 0.75em;}" + className + " " + classes.container + ":after{border-bottom-style:solid;border-bottom-color:currentColor;border-bottom-width:0;}" + className + classes.focused + " " + classes.container + ":after{border-bottom-width:2px;}" + className + " " + classes.placeholder + "{margin:1.59375em 0 0.40625em;}" + className + " " + classes.label + "{margin:1em 0;}" + className + " " + classes.floatingLabel + classes.label + "{transform:translateY(-.75em);}" + className + " " + classes.hintContainer + "{padding:0 0.75em;}"; }; })
            }
        };
        _this.toolbar = {
            appearance: {
                dense: new StyleCollection(function () { return function (className) { return className + "{height:56px;}"; }; })
            }
        };
        _this.slider = {
            appearance: {
                standard: new StyleCollection()
            },
            color: function (_a, color) {
                var track = _a.track, thumb = _a.thumb, thumbLabel = _a.thumbLabel, tick = _a.tick, disabled = _a.disabled, thumbContentFocused = _a.thumbContentFocused, tickActive = _a.tickActive, bg = _a.bg, thumbContent = _a.thumbContent, horizontal = _a.horizontal, vertical = _a.vertical, thumbVisible = _a.thumbVisible, thumbNotVisible = _a.thumbNotVisible, sliding = _a.sliding;
                return function (className) { return className + " " + track + "," + className + " " + thumb + "," + className + " " + thumbLabel + "," + className + " " + bg + "," + className + " " + tick + "{background-color:" + color + ";}" + className + ":not(" + disabled + ") " + thumbContentFocused + " " + thumb + "::before," + className + ":not(" + disabled + ") " + thumb + ":hover::before{box-shadow:0 0 0 8px " + color.alpha(.13) + ";}" + className + sliding + " " + thumbContentFocused + " " + thumb + "::before{box-shadow:0 0 0 16px " + color.alpha(.13) + ";}" + className + " " + tickActive + "{background-color:" + color.luminance(0.6) + ";}" + className + " " + bg + "{opacity:.3;}" + className + ":not(" + disabled + ") " + thumbContent + "::before{background:" + color + ";}" + className + ":not(" + disabled + ")" + horizontal + thumbVisible + " " + thumbContent + "::before," + className + ":not(" + disabled + ")" + horizontal + ":not(" + thumbNotVisible + ") " + thumbContent + ":hover::before," + className + ":not(" + disabled + ")" + horizontal + ":not(" + thumbNotVisible + ") " + thumbContent + thumbContentFocused + "::before{background:linear-gradient(0deg, " + color + " 0%, rgba(0, 0, 0, 0) 50%, " + color + " 100%);}" + className + ":not(" + disabled + ")" + vertical + thumbVisible + " " + thumbContent + "::before," + className + ":not(" + disabled + ")" + vertical + ":not(" + thumbNotVisible + ") " + thumbContent + ":hover::before," + className + ":not(" + disabled + ")" + vertical + ":not(" + thumbNotVisible + ") " + thumbContent + thumbContentFocused + "::before{background:linear-gradient(90deg, " + color + " 0%, rgba(0, 0, 0, 0) 50%, " + color + " 100%);}"; };
            },
            disabled: function (_a, color) {
                var track = _a.track, thumb = _a.thumb, thumbContainer = _a.thumbContainer, thumbContent = _a.thumbContent, thumbLabel = _a.thumbLabel, bg = _a.bg, tick = _a.tick, tickActive = _a.tickActive, horizontal = _a.horizontal, vertical = _a.vertical;
                var colorDisabled = color.darken(2)
                    .desaturate(2.5);
                var colorDisabledLum0_4 = colorDisabled.luminance(.4);
                return function (className) { return className + " " + track + "," + className + " " + thumb + "," + className + " " + thumbLabel + "," + className + " " + bg + "," + className + " " + tick + "{background-color:" + colorDisabled.luminance(.4).css() + ";}" + className + " " + tickActive + "{background-color:" + colorDisabled.luminance(.6).css() + ";}" + className + horizontal + " " + thumbContent + "::before{background:linear-gradient(0deg, " + colorDisabledLum0_4 + " 0%, rgba(0, 0, 0, 0) 50%, " + colorDisabledLum0_4 + " 100%);}" + className + vertical + " " + thumbContent + "::before{background:linear-gradient(90deg, " + colorDisabledLum0_4 + " 0%, rgba(0, 0, 0, 0) 50%, " + colorDisabledLum0_4 + " 100%);}" + className + " " + bg + "{opacity:.3;}" + className + horizontal + " " + thumbContainer + "::before{background:" + _this.disabled.default + ";}" + className + vertical + " " + thumbContainer + "::before{background:" + _this.disabled.default + ";}"; };
            }
        };
        _this.typography.lyTyp = {
            display4: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(96) + ";font-weight:300;letter-spacing:" + -1.5 / 96 + "em;}"; }; }),
            display3: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(60) + ";font-weight:300;letter-spacing:" + -0.5 / 60 + "em;}"; }; }),
            display2: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(48) + ";font-weight:400;letter-spacing:0;}"; }; }),
            display1: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(34) + ";font-weight:400;letter-spacing:" + 0.25 / 34 + "em;}"; }; }),
            headline: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(24) + ";font-weight:400;letter-spacing:0;}"; }; }),
            title: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(20) + ";font-weight:500;letter-spacing:" + 0.15 / 20 + "em;}"; }; }),
            subheading: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(16) + ";font-weight:400;letter-spacing:" + 0.15 / 16 + "em;line-height:" + _this.pxToRem(24) + ";}"; }; }),
            subheading2: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(14) + ";font-weight:500;letter-spacing:" + 0.1 / 14 + "em;}"; }; }),
            body1: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(16) + ";font-weight:400,        letter-spacing: " + 0.5 / 16 + "em;}"; }; }),
            body2: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(14) + ";font-weight:400;letter-spacing:" + 0.25 / 14 + "em;}"; }; }),
            button: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(14) + ";font-weight:500;letter-spacing:" + 1.25 / 14 + "em;}"; }; }),
            caption: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(12) + ";font-weight:400;letter-spacing:" + 0.4 / 12 + "em;}"; }; }),
            overline: new StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(10) + ";font-weight:400;letter-spacing:" + 1.5 / 10 + "em;text-transform:uppercase;}"; }; })
        };
        var lyTyp = _this.typography.lyTyp;
        lyTyp.h1 = lyTyp.display4;
        lyTyp.h2 = lyTyp.display3;
        lyTyp.h3 = lyTyp.display2;
        lyTyp.h4 = lyTyp.display1;
        lyTyp.h5 = lyTyp.headline;
        lyTyp.h6 = lyTyp.title;
        lyTyp.subtitle1 = lyTyp.subheading;
        lyTyp.subtitle2 = lyTyp.subheading2;
        return _this;
    }
    return MinimaBase;
}(LyStyleUtils));

var ThemeMinimaLight = /** @class */ (function () {
    function ThemeMinimaLight() {
    }
    ThemeMinimaLight = __decorate([
        Directive({
            selector: '[ly-theme-minima-light]',
            providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }]
        })
    ], ThemeMinimaLight);
    return ThemeMinimaLight;
}());
var ThemeMinimaDark = /** @class */ (function () {
    function ThemeMinimaDark() {
    }
    ThemeMinimaDark = __decorate([
        Directive({
            selector: '[ly-theme-minima-dark]',
            providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-dark' }]
        })
    ], ThemeMinimaDark);
    return ThemeMinimaDark;
}());
var ThemeMinimaModule = /** @class */ (function () {
    function ThemeMinimaModule() {
        console.warn("ThemeMinimaModule is deprecated.");
    }
    ThemeMinimaModule = __decorate([
        NgModule({
            declarations: [ThemeMinimaDark, ThemeMinimaLight],
            exports: [ThemeMinimaDark, ThemeMinimaLight]
        })
    ], ThemeMinimaModule);
    return ThemeMinimaModule;
}());

var contrast = new Color(0xffffff);
var shadow = new Color(0x333333);
var MinimaLight = /** @class */ (function (_super) {
    __extends(MinimaLight, _super);
    function MinimaLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-light';
        _this.primary = {
            default: new Color(0x6200EE),
            contrast: contrast
        };
        _this.accent = {
            default: new Color(0xFF2997),
            contrast: contrast,
        };
        _this.warn = {
            default: new Color(0xf5414e),
            contrast: contrast
        };
        _this.action = {
            default: new Color(0, 0, 0, .6),
            contrast: new Color(0xffffff)
        };
        _this.background = {
            default: new Color(0xfafafa),
            primary: {
                default: new Color(0xffffff),
                shadow: shadow
            },
            secondary: new Color(0xfafafa),
            tertiary: new Color(0xefefef),
        };
        _this.hover = new Color(0, 0, 0, 0.04);
        _this.paper = {
            default: new Color(0xffffff),
            shadow: shadow
        };
        _this.disabled = {
            default: new Color(0, 0, 0, 0.27),
            contrast: new Color(0, 0, 0, 0.41)
        };
        _this.text = {
            default: new Color(0, 0, 0, 0.87),
            primary: new Color(0, 0, 0, 0.87),
            secondary: new Color(0, 0, 0, 0.54),
            disabled: new Color(0, 0, 0, 0.26),
            hint: new Color(0, 0, 0, 0.38),
            dark: new Color(0, 0, 0, 0.87),
            light: new Color(0xffffff)
        };
        _this.divider = new Color(0, 0, 0, 0.12);
        _this.colorShadow = new Color(0x333333);
        _this.shadow = new Color(0x333333);
        _this.drawer = {
            backdrop: new Color(0, 0, 0, .6)
        };
        _this.bar = new Color(0xf5f5f5);
        _this.field = mergeThemes(_this.field, {
            root: function (_a) {
                var container = _a.container, fieldset = _a.fieldset, labelContainer = _a.labelContainer, placeholder = _a.placeholder, label = _a.label;
                return function (className) { return className + " " + container + ":after," + className + " " + fieldset + "," + className + " " + labelContainer + "{border-color:" + new Color(0, 0, 0, 0.23) + ";}" + className + " " + label + "," + className + " " + placeholder + "{color:" + new Color(0, 0, 0, 0.6) + ";}"; };
            },
            appearance: {
                filled: function (_a) {
                    var container = _a.container;
                    return function (className) { return className + " " + container + "{background-color:" + new Color(0, 0, 0, 0.04) + ";}"; };
                }
            }
        });
        _this.snackBar = {
            root: new StyleCollection(function (className) { return className + "{background:" + new Color(0x323232) + ";color:" + new Color(0xffffff) + ";box-shadow:" + shadowBuilder(4, new Color(0x323232)) + ";}"; })
        };
        _this.tooltip = {
            root: new StyleCollection(function () { return function (className) { return className + "{background:" + new Color(50, 50, 50, 0.85) + ";color:" + new Color(0xffffff) + ";}"; }; })
        };
        return _this;
    }
    return MinimaLight;
}(MinimaBase));

var contrast$1 = new Color(0xffffff);
var shadow$1 = new Color(0, 0, 0, 1);
var MinimaDark = /** @class */ (function (_super) {
    __extends(MinimaDark, _super);
    function MinimaDark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-dark';
        _this.primary = {
            default: Color(0x1DE9B6),
            contrast: new Color(0, 0, 0, 0.87)
        };
        _this.accent = {
            default: new Color(0x9C27B0),
            contrast: contrast$1
        };
        _this.warn = {
            default: new Color(0xEA404C),
            contrast: contrast$1
        };
        _this.disabled = {
            default: new Color(255, 255, 255, 0.3),
            contrast: new Color(255, 255, 255, 0.5)
        };
        _this.action = {
            default: new Color(255, 255, 255, 0.70),
            contrast: new Color(0, 0, 0, 0.87)
        };
        _this.background = {
            default: new Color(0x303030),
            primary: {
                default: new Color(0x242424),
                shadow: shadow$1
            },
            secondary: new Color(47, 47, 47),
            tertiary: new Color(65, 65, 65),
        };
        _this.hover = new Color(255, 255, 255, 0.04);
        _this.paper = {
            default: new Color(0x242424),
            shadow: shadow$1
        };
        _this.text = {
            default: new Color(0xffffff),
            primary: new Color(0xffffff),
            secondary: new Color(255, 255, 255, 0.70),
            disabled: new Color(255, 255, 255, 0.50),
            hint: new Color(255, 255, 255, 0.50),
            dark: new Color(0x2b2b2b),
            light: new Color(0xffffff)
        };
        _this.drawer = {
            backdrop: new Color(49, 49, 49, .6)
        };
        _this.bar = new Color(0x212121);
        _this.divider = new Color(255, 255, 255, 0.12);
        _this.colorShadow = shadow$1;
        _this.shadow = shadow$1;
        _this.field = mergeThemes(_this.field, {
            root: function (_) { return function (className) { return className + " " + _.container + ":after," + className + " " + _.fieldset + "," + className + " " + _.labelContainer + "{border-color:" + new Color(255, 255, 255, 0.12) + ";}" + className + " " + _.label + "," + className + " " + _.placeholder + "{color:" + new Color(255, 255, 255, 0.4) + ";}"; }; },
            appearance: {
                filled: function (_) { return function (className) { return className + " " + _.container + "{background-color:" + new Color(255, 255, 255, 0.04) + ";}"; }; }
            }
        });
        _this.snackBar = {
            root: new StyleCollection(function (className) { return className + "{background:" + new Color(0xfafafa) + ";color:" + new Color(0, 0, 0, .87) + ";box-shadow:" + shadowBuilder(4, new Color(0xfafafa)) + ";}"; })
        };
        _this.tooltip = {
            root: new StyleCollection(function () { return function (className) { return className + "{background:" + new Color(250, 250, 250, 0.85) + ";color:" + new Color(0, 0, 0, .87) + ";}"; }; })
        };
        return _this;
    }
    return MinimaDark;
}(MinimaBase));

var shadow$2 = new Color(0, 0, 0, 1);
var MinimaDeepDark = /** @class */ (function (_super) {
    __extends(MinimaDeepDark, _super);
    function MinimaDeepDark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-deep-dark';
        _this.background = {
            default: new Color(0x161616),
            primary: {
                default: new Color(0x101010),
                shadow: shadow$2
            },
            secondary: new Color(0x161616),
            tertiary: new Color(0x1b1b1b),
        };
        _this.paper = {
            default: new Color(0x101010),
            shadow: shadow$2
        };
        return _this;
        // field: LyFieldTheme = mergeThemes<LyFieldTheme, LyFieldTheme>(this.field, {
        //   root: _ => (className: string) => ``,
        //   appearance: {
        //     filled: _ => (className: string) => ``
        //   }
        // });
    }
    return MinimaDeepDark;
}(MinimaDark));

/**
 * Generated bundle index. Do not edit.
 */

export { MinimaBase, MinimaDark, MinimaDeepDark, MinimaLight, ThemeMinimaDark, ThemeMinimaLight, ThemeMinimaModule };
//# sourceMappingURL=alyle-ui-themes-minima.js.map
