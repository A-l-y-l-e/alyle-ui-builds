import { __decorate, __extends } from 'tslib';
import { Directive, NgModule } from '@angular/core';
import { LyTheme2, LY_THEME_NAME, Dir, LyStyleUtils, mergeDeep, shadowBuilder } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import * as _chroma from 'chroma-js';

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
    }
    ThemeMinimaModule = __decorate([
        NgModule({
            declarations: [ThemeMinimaDark, ThemeMinimaLight],
            exports: [ThemeMinimaDark, ThemeMinimaLight]
        })
    ], ThemeMinimaModule);
    return ThemeMinimaModule;
}());

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

var chroma = _chroma;
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
            defaultConfig: {
                size: 'medium'
            },
            size: {
                small: ({
                    padding: '0 8px',
                    fontSize: _this.pxToRem(13),
                    minHeight: '32px',
                    minWidth: '48px'
                }),
                medium: ({
                    padding: '0 14px',
                    minHeight: '36px',
                    minWidth: '64px'
                }),
                large: ({
                    padding: '0 21px',
                    fontSize: _this.pxToRem(15),
                    minHeight: '40px',
                    minWidth: '96px'
                })
            },
            appearance: {
                icon: {
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                },
                fab: {
                    minWidth: '56px',
                    width: '56px',
                    height: '56px',
                    padding: 0,
                    borderRadius: '50%'
                },
                miniFab: {
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                }
            }
        };
        _this.expansion = {
            root: {
                '& {panelHeader}': {
                    height: '48px'
                },
                '& {expanded} {panelHeader}': {
                    height: '64px'
                },
            },
            appearance: {
                popOut: {
                    '& {panel}': {
                        transition: "margin " + _this.animations.durations.entering + "ms " + _this.animations.curves.standard
                    },
                    '& {expanded}{panel}': {
                        margin: '16px 0',
                        '&:first-child': {
                            marginTop: 0
                        },
                        '&:last-child': {
                            marginBottom: 0
                        }
                    }
                }
            }
        };
        _this.field = {
            appearance: {
                outlined: {
                    '&:not({focused}):not({disabled}):hover {fieldset}': {
                        borderColor: 'currentColor'
                    },
                    '&{focused} {fieldset}': {
                        borderWidth: '2px',
                        borderColor: 'inherit'
                    },
                    '& textarea{inputNative}': {
                        margin: '1em 0'
                    },
                    '& {inputNative}:not(textarea)': {
                        padding: '1em 0'
                    },
                    '& {container}': {
                        padding: '0 0.75em'
                    },
                    '& {fieldset}': {
                        borderWidth: '1px',
                        borderRadius: '5px',
                        padding: '0 .5em'
                    },
                    '& {prefix}': {
                        '&:after': {
                            padding: '0.25em'
                        }
                    },
                    '& suffix': {
                        '&:after': {
                            padding: '0.25em'
                        }
                    },
                    '& {label}': {
                        margin: '1em 0'
                    },
                    '& {placeholder}': {
                        margin: '1em 0'
                    },
                    '& {floatingLabel}{label}': {
                        transform: 'translateY(-1.75em)'
                    },
                    '& {hintContainer}': {
                        padding: '0 0.75em'
                    }
                },
                filled: {
                    '&:not({focused}):not({disabled}) {container}:hover:after': {
                        borderBottomWidth: '1px'
                    },
                    'textarea{inputNative}': {
                        margin: '1.59375em 0 0.40625em'
                    },
                    '{inputNative}:not(textarea)': {
                        padding: '1.59375em 0 0.40625em'
                    },
                    '& {container}': {
                        borderRadius: '5px 5px 0 0',
                        padding: '0 0.75em',
                        '&:after': {
                            borderBottomStyle: 'solid',
                            borderBottomColor: 'currentColor',
                            borderBottomWidth: '0'
                        }
                    },
                    '&{focused} {container}': {
                        '&:after': {
                            borderBottomWidth: '2px'
                        }
                    },
                    '& {placeholder}': {
                        margin: '1.59375em 0 0.40625em'
                    },
                    '& {label}': {
                        margin: '1em 0'
                    },
                    '& {floatingLabel}{label}': {
                        transform: 'translateY(-.75em)'
                    },
                    '& {hintContainer}': {
                        padding: '0 0.75em'
                    }
                }
            }
        };
        _this.toolbar = {
            appearance: {
                dense: {
                    height: '56px'
                }
            }
        };
        _this.slider = {
            defaultConfig: {
                appearance: 'standard'
            },
            appearance: {
                standard: {
                    appearance: function (_theme) { return ({}); },
                    color: function (_theme, color) { return ({
                        '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                            backgroundColor: color
                        },
                        '&:not({disabled}) {thumbContentFocused} {thumb}::before, &:not({disabled}) {thumb}:hover::before': {
                            boxShadow: "0 0 0 8px " + chroma(color).alpha(.13).css()
                        },
                        '&{sliding} {thumbContentFocused} {thumb}::before': {
                            boxShadow: "0 0 0 16px " + chroma(color).alpha(.13).css()
                        },
                        '{tickActive}': {
                            backgroundColor: chroma(color).luminance(0.6).css()
                        },
                        '{bg}': {
                            opacity: .3
                        },
                        '& {thumbContent}::before': {
                            background: color
                        },
                        '&:not({disabled})': [['horizontal', 0], ['vertical', 90]].reduce(function (prev, orientation) {
                            var _a;
                            prev["&{" + orientation[0] + "}"] = (_a = {},
                                _a[[
                                    // always show visible thumb, when {thumbVisible} is available
                                    '&{thumbVisible} {thumbContent}::before',
                                    // on hover
                                    '&:not({thumbNotVisible}) {thumbContent}:hover::before',
                                    // on focused
                                    '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused}::before'
                                ].join()] = {
                                    background: "linear-gradient(" + orientation[1] + "deg, " + color + " 0%, rgba(0, 0, 0, 0) 50%, " + color + " 100%);"
                                },
                                _a);
                            return prev;
                        }, {})
                    }); },
                    disabled: function (theme, color) {
                        var colorDisabled = chroma(color).darken(2)
                            .desaturate(2.5);
                        return ({
                            '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                                backgroundColor: colorDisabled.luminance(.4).css()
                            },
                            '{tickActive}': {
                                backgroundColor: colorDisabled.luminance(.6).css()
                            },
                            '&': [['horizontal', 0], ['vertical', 90]].reduce(function (prev, orientation) {
                                prev["&{" + orientation[0] + "}"] = {
                                    '& {thumbContent}::before': {
                                        background: "linear-gradient(" + orientation[1] + "deg, " + colorDisabled.luminance(.4).css() + " 0%, rgba(0, 0, 0, 0) 50%, " + colorDisabled.luminance(.4).css() + " 100%);"
                                    },
                                };
                                return prev;
                            }, {}),
                            '{bg}': {
                                opacity: .3
                            },
                            '&{horizontal} {thumbContainer}::before': {
                                background: theme.disabled.default
                            },
                            '&{vertical} {thumbContainer}::before': {
                                background: theme.disabled.default
                            }
                        });
                    }
                }
            }
        };
        _this.typography.lyTyp = {
            display4: {
                fontSize: _this.pxToRem(96),
                fontWeight: 300,
                letterSpacing: _this.pxToRem(-1.5)
            },
            display3: {
                fontSize: _this.pxToRem(60),
                fontWeight: 300,
                letterSpacing: _this.pxToRem(-0.5)
            },
            display2: {
                fontSize: _this.pxToRem(48),
                fontWeight: 400,
                letterSpacing: 0
            },
            display1: {
                fontSize: _this.pxToRem(34),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.25)
            },
            headline: {
                fontSize: _this.pxToRem(24),
                fontWeight: 400,
                letterSpacing: 0
            },
            title: {
                fontSize: _this.pxToRem(20),
                fontWeight: 500,
                letterSpacing: _this.pxToRem(0.15)
            },
            subheading: {
                fontSize: _this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.15),
                lineHeight: 24
            },
            subheading2: {
                fontSize: _this.pxToRem(14),
                fontWeight: 500,
                letterSpacing: _this.pxToRem(0.1)
            },
            body2: {
                fontSize: _this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.15)
            },
            body1: {
                fontSize: _this.pxToRem(14),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.25)
            },
            button: {
                fontSize: _this.pxToRem(14),
                fontWeight: 500
            },
            caption: {
                fontSize: _this.pxToRem(12),
                fontWeight: 400,
                letterSpacing: 0.4
            },
            overline: {
                fontSize: _this.pxToRem(10),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(1.5),
                textTransform: 'uppercase'
            }
        };
        return _this;
    }
    return MinimaBase;
}(LyStyleUtils));

var contrast = '#fff';
var shadow = '#333';
var MinimaLight = /** @class */ (function (_super) {
    __extends(MinimaLight, _super);
    function MinimaLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-light';
        _this.primary = {
            default: '#6200EE',
            contrast: contrast
        };
        _this.accent = {
            default: '#FF2997',
            contrast: contrast,
        };
        _this.warn = {
            default: '#f5414e',
            contrast: contrast
        };
        _this.action = {
            default: 'rgba(0,0,0,.6)',
            contrast: '#fff'
        };
        _this.background = {
            default: '#fafafa',
            primary: {
                default: '#fff',
                shadow: shadow
            },
            secondary: '#fafafa',
            tertiary: '#efefef',
            base: '#E0E0E0'
        };
        _this.hover = 'rgba(0, 0, 0, 0.04)';
        _this.paper = {
            default: '#fff',
            shadow: shadow
        };
        _this.disabled = {
            default: 'rgba(0, 0, 0, 0.12)',
            contrast: 'rgba(0, 0, 0, 0.26)'
        };
        _this.text = {
            default: 'rgba(0, 0, 0, 0.87)',
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            hint: 'rgba(0, 0, 0, 0.38)'
        };
        _this.divider = 'rgba(0, 0, 0, 0.12)';
        _this.colorShadow = '#33base3';
        _this.shadow = '#333';
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        _this.bar = '#f5f5f5';
        _this.field = mergeDeep({}, _this.field, {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            labelColor: 'rgba(0, 0, 0, 0.6)',
            appearance: {
                filled: {
                    '{container}': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
        _this.badge = {};
        _this.snackBar = {
            root: {
                background: '#323232',
                color: '#fff',
                boxShadow: shadowBuilder(4, '#323232')
            }
        };
        _this.tooltip = {
            root: {
                background: 'rgba(50, 50, 50, 0.85)',
                color: '#fff'
            }
        };
        _this.avatar = {};
        return _this;
    }
    return MinimaLight;
}(MinimaBase));

var contrast$1 = '#fff';
var shadow$1 = 'rgba(0, 0, 0, 1)';
var MinimaDark = /** @class */ (function (_super) {
    __extends(MinimaDark, _super);
    function MinimaDark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-dark';
        _this.primary = {
            default: '#1DE9B6',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        _this.accent = {
            default: '#9C27B0',
            contrast: contrast$1
        };
        _this.warn = {
            default: '#EA404C',
            contrast: contrast$1
        };
        _this.disabled = {
            default: 'rgba(255, 255, 255, 0.3)',
            contrast: 'rgba(255, 255, 255, 0.5)'
        };
        _this.action = {
            default: 'rgba(255, 255, 255, 0.70)',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        _this.background = {
            default: '#303030',
            primary: {
                default: '#2b2b2b',
                shadow: shadow$1
            },
            secondary: '#303030',
            tertiary: '#212121',
            base: '#0E0E0E'
        };
        _this.hover = 'rgba(255, 255, 255, 0.04)';
        _this.paper = {
            default: '#2b2b2b',
            shadow: shadow$1
        };
        _this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        _this.bar = '#212121';
        _this.divider = 'rgba(255, 255, 255, 0.12)';
        _this.colorShadow = shadow$1;
        _this.shadow = shadow$1;
        _this.field = mergeDeep({}, _this.field, {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            labelColor: 'rgba(255, 255, 255, 0.4)',
            appearance: {
                filled: {
                    '& {container}': {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
        _this.badge = {};
        _this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)',
                boxShadow: shadowBuilder(4, '#fafafa')
            }
        };
        _this.tooltip = {
            root: {
                background: 'rgba(250, 250, 250, 0.85)',
                color: 'rgba(0,0,0,.87)'
            }
        };
        _this.avatar = {};
        return _this;
    }
    return MinimaDark;
}(MinimaBase));

export { MinimaDark, MinimaLight, ThemeMinimaDark, ThemeMinimaLight, ThemeMinimaModule, MinimaBase as ɵa };
//# sourceMappingURL=alyle-ui-themes-minima.js.map
