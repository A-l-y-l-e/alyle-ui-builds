import { __decorate } from 'tslib';
import { Directive, NgModule } from '@angular/core';
import { LyTheme2, LY_THEME_NAME, LyStyleUtils, Dir, mergeDeep, shadowBuilder } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import * as _chroma from 'chroma-js';

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
};
ThemeMinimaModule = __decorate([
    NgModule({
        declarations: [ThemeMinimaDark, ThemeMinimaLight],
        exports: [ThemeMinimaDark, ThemeMinimaLight]
    })
], ThemeMinimaModule);

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

const chroma = _chroma;
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
            defaultConfig: {
                size: 'medium'
            },
            size: {
                small: ({
                    padding: '0 8px',
                    fontSize: this.pxToRem(13),
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
                    fontSize: this.pxToRem(15),
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
        this.expansion = {
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
                        transition: `margin ${this.animations.durations.entering}ms ${this.animations.curves.standard}`
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
        this.field = {
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
        this.toolbar = {
            appearance: {
                dense: {
                    height: '56px'
                }
            }
        };
        this.slider = {
            defaultConfig: {
                appearance: 'standard'
            },
            appearance: {
                standard: {
                    appearance: _theme => ({}),
                    color: (_theme, color) => ({
                        '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                            backgroundColor: color
                        },
                        '&:not({disabled}) {thumbContentFocused} {thumb}::before, &:not({disabled}) {thumb}:hover::before': {
                            boxShadow: `0 0 0 8px ${chroma(color).alpha(.13).css()}`
                        },
                        '&{sliding} {thumbContentFocused} {thumb}::before': {
                            boxShadow: `0 0 0 16px ${chroma(color).alpha(.13).css()}`
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
                        '&:not({disabled})': [['horizontal', 0], ['vertical', 90]].reduce((prev, orientation) => {
                            prev[`&{${orientation[0]}}`] = {
                                [[
                                    // always show visible thumb, when {thumbVisible} is available
                                    '&{thumbVisible} {thumbContent}::before',
                                    // on hover
                                    '&:not({thumbNotVisible}) {thumbContent}:hover::before',
                                    // on focused
                                    '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused}::before'
                                ].join()]: {
                                    background: `linear-gradient(${orientation[1]}deg, ${color} 0%, rgba(0, 0, 0, 0) 50%, ${color} 100%);`
                                },
                            };
                            return prev;
                        }, {})
                    }),
                    disabled: (theme, color) => {
                        const colorDisabled = chroma(color).darken(2)
                            .desaturate(2.5);
                        return ({
                            '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                                backgroundColor: colorDisabled.luminance(.4).css()
                            },
                            '{tickActive}': {
                                backgroundColor: colorDisabled.luminance(.6).css()
                            },
                            '&': [['horizontal', 0], ['vertical', 90]].reduce((prev, orientation) => {
                                prev[`&{${orientation[0]}}`] = {
                                    '& {thumbContent}::before': {
                                        background: `linear-gradient(${orientation[1]}deg, ${colorDisabled.luminance(.4).css()} 0%, rgba(0, 0, 0, 0) 50%, ${colorDisabled.luminance(.4).css()} 100%);`
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
        this.typography.lyTyp = {
            display4: {
                fontSize: this.pxToRem(96),
                fontWeight: 300,
                letterSpacing: this.pxToRem(-1.5)
            },
            display3: {
                fontSize: this.pxToRem(60),
                fontWeight: 300,
                letterSpacing: this.pxToRem(-0.5)
            },
            display2: {
                fontSize: this.pxToRem(48),
                fontWeight: 400,
                letterSpacing: 0
            },
            display1: {
                fontSize: this.pxToRem(34),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.25)
            },
            headline: {
                fontSize: this.pxToRem(24),
                fontWeight: 400,
                letterSpacing: 0
            },
            title: {
                fontSize: this.pxToRem(20),
                fontWeight: 500,
                letterSpacing: this.pxToRem(0.15)
            },
            subheading: {
                fontSize: this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.15),
                lineHeight: 24
            },
            subheading2: {
                fontSize: this.pxToRem(14),
                fontWeight: 500,
                letterSpacing: this.pxToRem(0.1)
            },
            body2: {
                fontSize: this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.15)
            },
            body1: {
                fontSize: this.pxToRem(14),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.25)
            },
            button: {
                fontSize: this.pxToRem(14),
                fontWeight: 500
            },
            caption: {
                fontSize: this.pxToRem(12),
                fontWeight: 400,
                letterSpacing: 0.4
            },
            overline: {
                fontSize: this.pxToRem(10),
                fontWeight: 400,
                letterSpacing: this.pxToRem(1.5),
                textTransform: 'uppercase'
            }
        };
    }
}

const contrast = '#fff';
const shadow = '#333';
class MinimaLight extends MinimaBase {
    constructor() {
        super(...arguments);
        this.name = 'minima-light';
        this.primary = {
            default: '#6200EE',
            contrast
        };
        this.accent = {
            default: '#FF2997',
            contrast,
        };
        this.warn = {
            default: '#f5414e',
            contrast
        };
        this.action = {
            default: 'rgba(0,0,0,.6)',
            contrast: '#fff'
        };
        this.background = {
            default: '#fafafa',
            primary: {
                default: '#fff',
                shadow
            },
            secondary: '#fafafa',
            tertiary: '#efefef',
            base: '#E0E0E0'
        };
        this.hover = 'rgba(0, 0, 0, 0.04)';
        this.paper = {
            default: '#fff',
            shadow
        };
        this.disabled = {
            default: 'rgba(0, 0, 0, 0.12)',
            contrast: 'rgba(0, 0, 0, 0.26)'
        };
        this.text = {
            default: 'rgba(0, 0, 0, 0.87)',
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            hint: 'rgba(0, 0, 0, 0.38)'
        };
        this.divider = 'rgba(0, 0, 0, 0.12)';
        this.colorShadow = '#33base3';
        this.shadow = '#333';
        this.menu = {};
        this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        this.bar = '#f5f5f5';
        this.field = mergeDeep({}, this.field, {
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
        this.badge = {};
        this.snackBar = {
            root: {
                background: '#323232',
                color: '#fff',
                boxShadow: shadowBuilder(4, '#323232')
            }
        };
        this.tooltip = {
            root: {
                background: 'rgba(50, 50, 50, 0.85)',
                color: '#fff'
            }
        };
        this.avatar = {};
    }
}

const contrast$1 = '#fff';
const shadow$1 = 'rgba(0, 0, 0, 1)';
class MinimaDark extends MinimaBase {
    constructor() {
        super(...arguments);
        this.name = 'minima-dark';
        this.primary = {
            default: '#1DE9B6',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        this.accent = {
            default: '#9C27B0',
            contrast: contrast$1
        };
        this.warn = {
            default: '#EA404C',
            contrast: contrast$1
        };
        this.disabled = {
            default: 'rgba(255, 255, 255, 0.3)',
            contrast: 'rgba(255, 255, 255, 0.5)'
        };
        this.action = {
            default: 'rgba(255, 255, 255, 0.70)',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        this.background = {
            default: '#303030',
            primary: {
                default: '#2b2b2b',
                shadow: shadow$1
            },
            secondary: '#303030',
            tertiary: '#212121',
            base: '#0E0E0E'
        };
        this.hover = 'rgba(255, 255, 255, 0.04)';
        this.paper = {
            default: '#2b2b2b',
            shadow: shadow$1
        };
        this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        this.menu = {};
        this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        this.bar = '#212121';
        this.divider = 'rgba(255, 255, 255, 0.12)';
        this.colorShadow = shadow$1;
        this.shadow = shadow$1;
        this.field = mergeDeep({}, this.field, {
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
        this.badge = {};
        this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)',
                boxShadow: shadowBuilder(4, '#fafafa')
            }
        };
        this.tooltip = {
            root: {
                background: 'rgba(250, 250, 250, 0.85)',
                color: 'rgba(0,0,0,.87)'
            }
        };
        this.avatar = {};
    }
}

export { MinimaDark, MinimaLight, ThemeMinimaDark, ThemeMinimaLight, ThemeMinimaModule, MinimaBase as ɵa };
//# sourceMappingURL=alyle-ui-themes-minima.js.map
