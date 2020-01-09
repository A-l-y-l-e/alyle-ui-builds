import { LyStyleUtils, Dir, shadowBuilder, StyleCollection, LyTheme2, LY_THEME_NAME, mergeThemes } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import { __decorate } from 'tslib';
import { Directive, NgModule } from '@angular/core';
import { Color, color } from '@alyle/ui/color';

const iconButton = {
    size: '48px'
};
const icon = {
    fontSize: '24px'
};
const zIndex = {
    toolbar: 1000,
    drawer: 1100,
    overlay: 1200
};
const RippleVariables = {
    transition: {
        opacity: 'cubic-bezier(0.4,0.0,1,1)',
        transform: 'cubic-bezier(0, 1, 0.6, 1)'
    },
    duration: 950
};
const animations = {
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

class MinimaBase extends LyStyleUtils {
    constructor() {
        super();
        this.typography = {
            fontFamily: `'Roboto', sans-serif`,
            htmlFontSize: 16,
            fontSize: 14,
            gutterTop: 1,
            gutterBottom: .35,
            lyTyp: {}
        };
        this.iconButton = iconButton;
        this.icon = icon;
        this.breakpoints = Breakpoints;
        this.zIndex = zIndex;
        this.ripple = RippleVariables;
        this.animations = animations;
        this.direction = Dir.ltr;
        this.button = {
            size: {
                small: () => (className) => `${className}{padding:0 8px;font-size:${this.pxToRem(13)};min-height:32px;min-width:48p;}`,
                medium: () => (className) => `${className}{padding:0 14px;min-height:36px;min-width:64px;}`,
                large: () => (className) => `${className}{padding:0 21px;font-size:${this.pxToRem(15)};min-height:40px;min-width:96px;}`
            },
            appearance: {
                icon: () => (className) => `${className}{min-width:40px;width:40px;height:40px;padding:0;border-radius:50%;}`,
                fab: () => (className) => `${className}{min-width:56px;width:56px;height:56px;padding:0;border-radius:50%;}`,
                miniFab: () => (className) => `${className}{min-width:40px;width:40px;height:40px;padding:0;border-radius:50%;}`
            }
        };
        this.badge = {
            appearance: {
                default: () => (className) => `${className}{padding:0 6px;min-width:22px;height:22px;border-radius:2em;}`,
                dot: () => (className) => `${className}{width:6px;height:6px;border-radius:50%;}`
            }
        };
        this.checkbox = {
            color: (checkbox, color) => (className) => `${className}${checkbox.checked} ${checkbox.icon}{color:${color};}${className}${checkbox.checked}:not({disabled}) ${checkbox.icon}{box-shadow:${shadowBuilder(1, color)};}`
        };
        this.expansion = {
            root: classes => (className) => `${className} ${classes.panelHeader}{height:48px;}${className} ${classes.expanded} ${classes.panelHeader}{height:64px;}`,
            appearance: {
                popOut: classes => (className) => `${className} ${classes.panel}{transition:margin ${this.animations.durations.entering}ms ${this.animations.curves.standard};}${className} ${classes.expanded}${classes.panel}{margin:16px 0;}${className} ${classes.expanded}${classes.panel}:first-child{margin-top:0;}${className} ${classes.expanded}${classes.panel}:last-child{margin-bottom:0jj;}`
            }
        };
        this.field = {
            appearance: {
                standard: new StyleCollection((classes) => (className) => `${className}:not(${classes.disabled}) ${classes.container}:hover:after{border-bottom-color:currentColor;}${className}${classes.disabled} ${classes.container}:after{border-bottom-style:dotted;border-color:inherit;}${className} textarea{inputNative}{margin:0.25em 0;}${className} ${classes.inputNative}:not(textarea){padding:0.25em 0;}${className} ${classes.container}{padding:1em 0 0;}${className} ${classes.container}:after{border-bottom-style:solid;border-bottom-width:1px;}${className}${classes.focused} ${classes.container}:after{border-width:2px;border-color:currentColor;}${className} ${classes.label}{margin:0.25em 0;}${className} ${classes.placeholder}{margin:0.25em 0;}${className} ${classes.floatingLabel}{transform:translateY(-1.25em);}`),
                outlined: new StyleCollection(classes => (className) => `${className}:not(${classes.focused}):not({disabled}):hover ${classes.fieldset}{border-color:currentColor;}${className}${classes.focused} ${classes.fieldset}{border-width:2px;border-color:inherit;}${className} textarea${classes.inputNative}{margin:1em 0;}${className} ${classes.inputNative}:not(textarea){padding:1em 0;}${className} ${classes.container}{padding:0 0.75em;}${className} ${classes.fieldset}{border-width:1px;border-radius:5px;padding:0 .5em;}${className} ${classes.prefix}:after{padding:0.25em;}${className} ${classes.suffix}:after{padding:0.25em;}${className} ${classes.label}{margin:1em 0;}${className} ${classes.placeholder}{margin:1em 0;}${className} ${classes.floatingLabel}${classes.label}{transform:translateY(-1.75em);}${className} ${classes.hintContainer}{padding:0 0.75em;}`),
                filled: new StyleCollection(classes => (className) => `${className}:not(${classes.focused}):not(${classes.disabled}) ${classes.container}:hover:after{border-bottom-width:1px;}${className} textarea${classes.inputNative}{margin:1.59375em 0 0.40625em;}${className} ${classes.inputNative}:not(textarea){padding:1.59375em 0 0.40625em;}${className} ${classes.container}{border-radius:5px 5px 0 0;padding:0 0.75em;}${className} ${classes.container}:after{border-bottom-style:solid;border-bottom-color:currentColor;border-bottom-width:0;}${className}${classes.focused} ${classes.container}:after{border-bottom-width:2px;}${className} ${classes.placeholder}{margin:1.59375em 0 0.40625em;}${className} ${classes.label}{margin:1em 0;}${className} ${classes.floatingLabel}${classes.label}{transform:translateY(-.75em);}${className} ${classes.hintContainer}{padding:0 0.75em;}`)
            }
        };
        this.toolbar = {
            appearance: {
                dense: new StyleCollection(() => (className) => `${className}{height:56px;}`)
            }
        };
        this.slider = {
            appearance: {
                standard: new StyleCollection()
            },
            color: ({ track, thumb, thumbLabel, tick, disabled, thumbContentFocused, tickActive, bg, thumbContent, horizontal, vertical, thumbVisible, thumbNotVisible, sliding }, color) => (className) => `${className} ${track},${className} ${thumb},${className} ${thumbLabel},${className} ${bg},${className} ${tick}{background-color:${color};}${className}:not(${disabled}) ${thumbContentFocused} ${thumb}::before,${className}:not(${disabled}) ${thumb}:hover::before{box-shadow:0 0 0 8px ${color.alpha(.13)};}${className}${sliding} ${thumbContentFocused} ${thumb}::before{box-shadow:0 0 0 16px ${color.alpha(.13)};}${className} ${tickActive}{background-color:${color.luminance(0.6)};}${className} ${bg}{opacity:.3;}${className}:not(${disabled}) ${thumbContent}::before{background:${color};}${className}:not(${disabled})${horizontal}${thumbVisible} ${thumbContent}::before,${className}:not(${disabled})${horizontal}:not(${thumbNotVisible}) ${thumbContent}:hover::before,${className}:not(${disabled})${horizontal}:not(${thumbNotVisible}) ${thumbContent}${thumbContentFocused}::before{background:linear-gradient(0deg, ${color} 0%, rgba(0, 0, 0, 0) 50%, ${color} 100%);}${className}:not(${disabled})${vertical}${thumbVisible} ${thumbContent}::before,${className}:not(${disabled})${vertical}:not(${thumbNotVisible}) ${thumbContent}:hover::before,${className}:not(${disabled})${vertical}:not(${thumbNotVisible}) ${thumbContent}${thumbContentFocused}::before{background:linear-gradient(90deg, ${color} 0%, rgba(0, 0, 0, 0) 50%, ${color} 100%);}`,
            disabled: ({ track, thumb, thumbContainer, thumbContent, thumbLabel, bg, tick, tickActive, horizontal, vertical }, color) => {
                const colorDisabled = color.darken(2)
                    .desaturate(2.5);
                const colorDisabledLum0_4 = colorDisabled.luminance(.4);
                return (className) => `${className} ${track},${className} ${thumb},${className} ${thumbLabel},${className} ${bg},${className} ${tick}{background-color:${colorDisabled.luminance(.4).css()};}${className} ${tickActive}{background-color:${colorDisabled.luminance(.6).css()};}${className}${horizontal} ${thumbContent}::before{background:linear-gradient(0deg, ${colorDisabledLum0_4} 0%, rgba(0, 0, 0, 0) 50%, ${colorDisabledLum0_4} 100%);}${className}${vertical} ${thumbContent}::before{background:linear-gradient(90deg, ${colorDisabledLum0_4} 0%, rgba(0, 0, 0, 0) 50%, ${colorDisabledLum0_4} 100%);}${className} ${bg}{opacity:.3;}${className}${horizontal} ${thumbContainer}::before{background:${this.disabled.default};}${className}${vertical} ${thumbContainer}::before{background:${this.disabled.default};}`;
            }
        };
        this.typography.lyTyp = {
            display4: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(96)};font-weight:300;letter-spacing:${-1.5 / 96}em;}`),
            display3: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(60)};font-weight:300;letter-spacing:${-0.5 / 60}em;}`),
            display2: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(48)};font-weight:400;letter-spacing:0;}`),
            display1: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(34)};font-weight:400;letter-spacing:${0.25 / 34}em;}`),
            headline: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(24)};font-weight:400;letter-spacing:0;}`),
            title: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(20)};font-weight:500;letter-spacing:${0.15 / 20}em;}`),
            subheading: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(16)};font-weight:400;letter-spacing:${0.15 / 16}em;line-height:${this.pxToRem(24)};}`),
            subheading2: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(14)};font-weight:500;letter-spacing:${0.1 / 14}em;}`),
            body1: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(16)};font-weight:400,        letter-spacing: ${0.5 / 16}em;}`),
            body2: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(14)};font-weight:400;letter-spacing:${0.25 / 14}em;}`),
            button: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(14)};font-weight:500;letter-spacing:${1.25 / 14}em;}`),
            caption: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(12)};font-weight:400;letter-spacing:${0.4 / 12}em;}`),
            overline: new StyleCollection(() => (className) => `${className}{font-size:${this.pxToRem(10)};font-weight:400;letter-spacing:${1.5 / 10}em;text-transform:uppercase;}`)
        };
        const { lyTyp } = this.typography;
        lyTyp.h1 = lyTyp.display4;
        lyTyp.h2 = lyTyp.display3;
        lyTyp.h3 = lyTyp.display2;
        lyTyp.h4 = lyTyp.display1;
        lyTyp.h5 = lyTyp.headline;
        lyTyp.h6 = lyTyp.title;
        lyTyp.subtitle1 = lyTyp.subheading;
        lyTyp.subtitle2 = lyTyp.subheading2;
    }
}

let ThemeMinimaLight = class ThemeMinimaLight {
};
ThemeMinimaLight = __decorate([
    Directive({
        selector: '[ly-theme-minima-light]',
        providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }]
    })
], ThemeMinimaLight);
let ThemeMinimaDark = class ThemeMinimaDark {
};
ThemeMinimaDark = __decorate([
    Directive({
        selector: '[ly-theme-minima-dark]',
        providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-dark' }]
    })
], ThemeMinimaDark);
let ThemeMinimaModule = class ThemeMinimaModule {
    constructor() {
        console.warn(`ThemeMinimaModule is deprecated.`);
    }
};
ThemeMinimaModule = __decorate([
    NgModule({
        declarations: [ThemeMinimaDark, ThemeMinimaLight],
        exports: [ThemeMinimaDark, ThemeMinimaLight]
    })
], ThemeMinimaModule);

const contrast = new Color(0xffffff);
const shadow = new Color(0x333333);
class MinimaLight extends MinimaBase {
    constructor() {
        super(...arguments);
        this.name = 'minima-light';
        this.primary = {
            default: new Color(0x6200EE),
            contrast
        };
        this.accent = {
            default: new Color(0xFF2997),
            contrast,
        };
        this.warn = {
            default: new Color(0xf5414e),
            contrast
        };
        this.action = {
            default: new Color(0, 0, 0, .6),
            contrast: new Color(0xffffff)
        };
        this.background = {
            default: new Color(0xfafafa),
            primary: {
                default: new Color(0xffffff),
                shadow
            },
            secondary: new Color(0xfafafa),
            tertiary: new Color(0xefefef),
        };
        this.hover = new Color(0, 0, 0, 0.04);
        this.paper = {
            default: new Color(0xffffff),
            shadow
        };
        this.disabled = {
            default: new Color(0, 0, 0, 0.27),
            contrast: new Color(0, 0, 0, 0.41)
        };
        this.text = {
            default: new Color(0, 0, 0, 0.87),
            primary: new Color(0, 0, 0, 0.87),
            secondary: new Color(0, 0, 0, 0.54),
            disabled: new Color(0, 0, 0, 0.26),
            hint: new Color(0, 0, 0, 0.38),
            dark: new Color(0, 0, 0, 0.87),
            light: new Color(0xffffff)
        };
        this.divider = new Color(0, 0, 0, 0.12);
        this.colorShadow = new Color(0x333333);
        this.shadow = new Color(0x333333);
        this.drawer = {
            backdrop: new Color(0, 0, 0, .6)
        };
        this.bar = new Color(0xf5f5f5);
        this.field = mergeThemes(this.field, {
            root: ({ container, fieldset, labelContainer, placeholder, label }) => (className) => `${className} ${container}:after,${className} ${fieldset},${className} ${labelContainer}{border-color:${new Color(0, 0, 0, 0.23)};}${className} ${label},${className} ${placeholder}{color:${new Color(0, 0, 0, 0.6)};}`,
            appearance: {
                filled: ({ container }) => (className) => `${className} ${container}{background-color:${new Color(0, 0, 0, 0.04)};}`
            }
        });
        this.snackBar = {
            root: new StyleCollection((className) => `${className}{background:${new Color(0x323232)};color:${new Color(0xffffff)};box-shadow:${shadowBuilder(4, new Color(0x323232))};}`)
        };
        this.tooltip = {
            root: new StyleCollection(() => (className) => `${className}{background:${new Color(50, 50, 50, 0.85)};color:${new Color(0xffffff)};}`)
        };
    }
}

const contrast$1 = new Color(0xffffff);
const shadow$1 = new Color(0, 0, 0, 1);
class MinimaDark extends MinimaBase {
    constructor() {
        super(...arguments);
        this.name = 'minima-dark';
        this.primary = {
            default: color(0x1DE9B6),
            contrast: new Color(0, 0, 0, 0.87)
        };
        this.accent = {
            default: new Color(0x9C27B0),
            contrast: contrast$1
        };
        this.warn = {
            default: new Color(0xEA404C),
            contrast: contrast$1
        };
        this.disabled = {
            default: new Color(255, 255, 255, 0.3),
            contrast: new Color(255, 255, 255, 0.5)
        };
        this.action = {
            default: new Color(255, 255, 255, 0.70),
            contrast: new Color(0, 0, 0, 0.87)
        };
        this.background = {
            default: new Color(0x303030),
            primary: {
                default: new Color(0x242424),
                shadow: shadow$1
            },
            secondary: new Color(47, 47, 47),
            tertiary: new Color(65, 65, 65),
        };
        this.hover = new Color(255, 255, 255, 0.04);
        this.paper = {
            default: new Color(0x242424),
            shadow: shadow$1
        };
        this.text = {
            default: new Color(0xffffff),
            primary: new Color(0xffffff),
            secondary: new Color(255, 255, 255, 0.70),
            disabled: new Color(255, 255, 255, 0.50),
            hint: new Color(255, 255, 255, 0.50),
            dark: new Color(0x2b2b2b),
            light: new Color(0xffffff)
        };
        this.drawer = {
            backdrop: new Color(49, 49, 49, .6)
        };
        this.bar = new Color(0x212121);
        this.divider = new Color(255, 255, 255, 0.12);
        this.colorShadow = shadow$1;
        this.shadow = shadow$1;
        this.field = mergeThemes(this.field, {
            root: _ => (className) => `${className} ${_.container}:after,${className} ${_.fieldset},${className} ${_.labelContainer}{border-color:${new Color(255, 255, 255, 0.12)};}${className} ${_.label},${className} ${_.placeholder}{color:${new Color(255, 255, 255, 0.4)};}`,
            appearance: {
                filled: _ => (className) => `${className} ${_.container}{background-color:${new Color(255, 255, 255, 0.04)};}`
            }
        });
        this.snackBar = {
            root: new StyleCollection((className) => `${className}{background:${new Color(0xfafafa)};color:${new Color(0, 0, 0, .87)};box-shadow:${shadowBuilder(4, new Color(0xfafafa))};}`)
        };
        this.tooltip = {
            root: new StyleCollection(() => (className) => `${className}{background:${new Color(250, 250, 250, 0.85)};color:${new Color(0, 0, 0, .87)};}`)
        };
    }
}

const shadow$2 = new Color(0, 0, 0, 1);
class MinimaDeepDark extends MinimaDark {
    constructor() {
        super(...arguments);
        this.name = 'minima-deep-dark';
        this.background = {
            default: new Color(0x161616),
            primary: {
                default: new Color(0x101010),
                shadow: shadow$2
            },
            secondary: new Color(0x161616),
            tertiary: new Color(0x1b1b1b),
        };
        this.paper = {
            default: new Color(0x101010),
            shadow: shadow$2
        };
        // field: LyFieldTheme = mergeThemes<LyFieldTheme, LyFieldTheme>(this.field, {
        //   root: _ => (className: string) => ``,
        //   appearance: {
        //     filled: _ => (className: string) => ``
        //   }
        // });
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { MinimaBase, MinimaDark, MinimaDeepDark, MinimaLight, ThemeMinimaDark, ThemeMinimaLight, ThemeMinimaModule };
//# sourceMappingURL=alyle-ui-themes-minima.js.map
