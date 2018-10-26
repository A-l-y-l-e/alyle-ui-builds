import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2, LyStyleUtils, mergeDeep } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import { RippleVariables } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ThemeMinimaLight {
}
ThemeMinimaLight.decorators = [
    { type: Directive, args: [{
                selector: '[ly-theme-minima-light]',
                providers: [
                    LyTheme2,
                    { provide: LY_THEME_NAME, useValue: 'minima-light' }
                ]
            },] }
];
class ThemeMinimaDark {
}
ThemeMinimaDark.decorators = [
    { type: Directive, args: [{
                selector: '[ly-theme-minima-dark]',
                providers: [
                    LyTheme2,
                    { provide: LY_THEME_NAME, useValue: 'minima-dark' }
                ]
            },] }
];
class ThemeMinimaModule {
}
ThemeMinimaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ThemeMinimaDark, ThemeMinimaLight],
                exports: [ThemeMinimaDark, ThemeMinimaLight]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const typography = {
    fontFamily: `'Roboto', sans-serif`,
    htmlFontSize: 16,
    fontSize: 14,
    gutterTop: 1,
    gutterBottom: .35,
    display4: /** @type {?} */ ({
        fontSize: 96,
        fontWeight: 300,
        letterSpacing: -1.5
    }),
    display3: /** @type {?} */ ({
        fontSize: 60,
        fontWeight: 300,
        letterSpacing: -0.5
    }),
    display2: /** @type {?} */ ({
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: 0
    }),
    display1: /** @type {?} */ ({
        fontSize: 34,
        fontWeight: 400,
        letterSpacing: 0.25
    }),
    headline: /** @type {?} */ ({
        fontSize: 24,
        fontWeight: 400,
        letterSpacing: 0
    }),
    title: /** @type {?} */ ({
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 0.15
    }),
    subheading: /** @type {?} */ ({
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0.15,
        lineHeight: 24
    }),
    subheading2: /** @type {?} */ ({
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.1
    }),
    body2: /** @type {?} */ ({
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0.15
    }),
    body1: /** @type {?} */ ({
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0.25
    }),
    button: /** @type {?} */ ({
        fontSize: 14,
        fontWeight: 500
    }),
    caption: /** @type {?} */ ({
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: 0.4
    }),
    overline: /** @type {?} */ ({
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
    })
};
/** @type {?} */
const iconButton = {
    size: '48px'
};
/** @type {?} */
const icon = {
    fontSize: '24px'
};
/** @type {?} */
const input = {
    /** @deprecated default color */
    withColor: 'primary',
    appearance: {
        standard: {
            container: {
                padding: '1em 0 0',
                '&:after': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px'
                },
                '&:hover:after': {
                    borderBottomColor: 'currentColor'
                }
            },
            containerFocused: {
                '&:after': {
                    borderWidth: '2px',
                    borderColor: 'currentColor'
                }
            },
            containerLabelHover: {
                color: 'currentColor'
            },
            label: {
                margin: '0.4375em 0'
            },
            placeholder: {
                margin: '0.4375em 0'
            },
            input: {
                margin: '0.4375em 0'
            },
            floatingLabel: {
                transform: 'translateY(-1.25em)'
            }
        },
        outlined: {
            container: {
                padding: '0 0.75em'
            },
            fieldset: {
                borderWidth: '1px',
                borderRadius: '5px',
                padding: '0 .5em'
            },
            fieldsetHover: {
                borderWidth: '1px',
                borderColor: 'currentColor'
            },
            fieldsetFocused: {
                borderWidth: '2px'
            },
            containerLabelFocused: {
                color: 'currentColor',
                '&:after': {
                    borderWidth: '2px',
                    borderColor: 'currentColor'
                }
            },
            prefix: {
                '&:after': {
                    padding: '0.25em'
                }
            },
            suffix: {
                '&:after': {
                    padding: '0.25em'
                }
            },
            input: {
                margin: '1.1875em 0'
            },
            label: {
                margin: '1.1875em 0'
            },
            placeholder: {
                margin: '1.1875em 0'
            },
            floatingLabel: {
                transform: 'translateY(-1.75em)'
            }
        },
        filled: {
            container: {
                borderRadius: '5px 5px 0 0',
                padding: '0 0.75em',
                '&:after': {
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'currentColor',
                    borderBottomWidth: '0'
                },
                '&:hover:after': {
                    borderBottomWidth: '1px'
                }
            },
            containerFocused: {
                '&:after': {
                    borderBottomWidth: '2px'
                }
            },
            containerLabelFocused: {
                color: 'currentColor',
                borderWidth: '2px',
                borderColor: 'currentColor'
            },
            containerLabelHover: {
                color: 'currentColor'
            },
            input: {
                margin: '1.78125em 0 0.59375em'
            },
            placeholder: {
                margin: '1.78125em 0 0.59375em'
            },
            label: {
                margin: '1.1875em 0'
            },
            floatingLabel: {
                transform: 'translateY(-.75em)'
            }
        }
    }
};
/** @type {?} */
const zIndex = {
    toolbar: 1000,
    drawer: 1100,
    overlay: 1200
};
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MinimaBase extends LyStyleUtils {
    constructor() {
        super(...arguments);
        this.typography = typography;
        this.iconButton = iconButton;
        this.icon = icon;
        this.breakpoints = Breakpoints;
        this.zIndex = zIndex;
        this.ripple = RippleVariables;
        this.animations = animations;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const contrast = '#fff';
/** @type {?} */
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
            contrast
        };
        this.warn = {
            default: '#f5414e',
            contrast
        };
        this.background = {
            default: '#fafafa',
            // secondary
            primary: {
                default: '#fff',
                shadow
            },
            secondary: '#fafafa',
            tertiary: '#f5f6f7',
            base: '#E0E0E0'
        };
        this.text = {
            default: 'rgba(0, 0, 0, 0.87)',
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
        };
        this.divider = 'rgba(0, 0, 0, 0.12)';
        this.colorShadow = '#333';
        this.shadow = '#333';
        /**
         * Components variables
         */
        this.button = {
            disabled: 'rgba(0, 0, 0, 0.11)'
        };
        this.radio = {
            radioOuterCircle: 'rgba(0, 0, 0, 0.43)'
        };
        this.menu = {
            bg: '#fff' // background>primary
        };
        this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        this.bar = '#f5f5f5';
        this.input = mergeDeep({}, input, {
            /** @deprecated */
            label: 'rgba(0, 0, 0, 0.6)',
            /** @deprecated */
            underline: 'rgba(0, 0, 0, 0.11)',
            borderColor: 'rgba(0, 0, 0, 0.12)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const contrast$1 = '#fff';
/** @type {?} */
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
        this.background = {
            default: '#303030',
            // secondary
            primary: {
                default: '#2b2b2b',
                shadow: shadow$1
            },
            secondary: '#303030',
            tertiary: '#212121',
            base: '#0E0E0E'
        };
        this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        /**
         * Components variables
         */
        this.button = {
            disabled: 'rgba(255, 255, 255, 0.30)'
        };
        this.radio = {
            radioOuterCircle: 'rgba(255, 255, 255, 0.55)'
        };
        this.menu = {
            bg: '#424242' // background>primary
        };
        this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        this.bar = '#212121';
        this.divider = 'rgba(255, 255, 255, 0.12)';
        this.colorShadow = shadow$1;
        this.shadow = shadow$1;
        this.input = mergeDeep({}, input, {
            /** @deprecated */
            label: 'rgba(255, 255, 255, 0.4)',
            /** @deprecated */
            underline: 'rgba(255, 255, 255, 0.11)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ThemeMinimaLight, ThemeMinimaDark, ThemeMinimaModule, typography, iconButton, icon, input, zIndex, animations, MinimaLight, MinimaDark, MinimaBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiIsImltcG9ydCB7IFR5cG9ncmFwaHlDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeSA9IHtcbiAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgaHRtbEZvbnRTaXplOiAxNixcbiAgZm9udFNpemU6IDE0LFxuICBndXR0ZXJUb3A6IDEsXG4gIGd1dHRlckJvdHRvbTogLjM1LFxuICBkaXNwbGF5NDoge1xuICAgIGZvbnRTaXplOiA5NixcbiAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgbGV0dGVyU3BhY2luZzogLTEuNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkzOiB7XG4gICAgZm9udFNpemU6IDYwLFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMC41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTI6IHtcbiAgICBmb250U2l6ZTogNDgsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5MToge1xuICAgIGZvbnRTaXplOiAzNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGhlYWRsaW5lOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1LFxuICAgIGxpbmVIZWlnaHQ6IDI0XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgc3ViaGVhZGluZzI6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJvZHkyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTE6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgY2FwdGlvbjoge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC40XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgb3ZlcmxpbmU6IHtcbiAgICBmb250U2l6ZTogMTAsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDEuNSxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9IGFzIFR5cG9ncmFwaHlDb25maWdcbn07XG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvbiA9IHtcbiAgc2l6ZTogJzQ4cHgnXG59O1xuZXhwb3J0IGNvbnN0IGljb24gPSB7XG4gIGZvbnRTaXplOiAnMjRweCdcbn07XG5leHBvcnQgY29uc3QgaW5wdXQgPSB7XG4gIC8qKiBAZGVwcmVjYXRlZCBkZWZhdWx0IGNvbG9yICovXG4gIHdpdGhDb2xvcjogJ3ByaW1hcnknLFxuICBhcHBlYXJhbmNlOiB7XG4gICAgc3RhbmRhcmQ6IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBwYWRkaW5nOiAnMWVtIDAgMCcsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgICB9LFxuICAgICAgICAnJjpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcwLjQzNzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzAuNDM3NWVtIDAnXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMC40Mzc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEuMjVlbSknXG4gICAgICB9XG4gICAgfSxcbiAgICBvdXRsaW5lZDoge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIC41ZW0nXG4gICAgICB9LFxuICAgICAgZmllbGRzZXRIb3Zlcjoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0Rm9jdXNlZDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzJweCdcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEZvY3VzZWQ6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1ZmZpeDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjc1ZW0pJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZmlsbGVkOiB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnLFxuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcwJ1xuICAgICAgICB9LFxuICAgICAgICAnJjpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEZvY3VzZWQ6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsSG92ZXI6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMS43ODEyNWVtIDAgMC41OTM3NWVtJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzEuNzgxMjVlbSAwIDAuNTkzNzVlbSdcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtLjc1ZW0pJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHpJbmRleCA9IHtcbiAgdG9vbGJhcjogMTAwMCxcbiAgZHJhd2VyOiAxMTAwLFxuICBvdmVybGF5OiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgY3VydmVzOiB7XG4gICAgc3RhbmRhcmQ6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwwLjIsMSknLFxuICAgIGRlY2VsZXJhdGlvbjogJ2N1YmljLWJlemllcigwLjAsMC4wLDAuMiwxKScsXG4gICAgYWNjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMSwxKScsXG4gICAgc2hhcnA6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwwLjYsMSknXG4gIH0sXG4gIGR1cmF0aW9uczoge1xuICAgIGNvbXBsZXg6IDM3NSxcbiAgICBlbnRlcmluZzogMjI1LFxuICAgIGV4aXRpbmc6IDE5NVxuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgTHlTdHlsZVV0aWxzLFxuICBUeXBvZ3JhcGh5Q29uZmlnLCAvLyBEbyBub3QgZGVsZXRlIHRoaXMsIHRoaXMgaXMgbmVjZXNzYXJ5IHRvIGdlbmVyYXRlIHRoZSB0eXBlcyBjb3JyZWN0bHlcbiAgSVJpcHBsZVZhcmlhYmxlcyAvLyBEbyBub3QgZGVsZXRlIHRoaXMsIHRoaXMgaXMgbmVjZXNzYXJ5IHRvIGdlbmVyYXRlIHRoZSB0eXBlcyBjb3JyZWN0bHlcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xufVxuIiwiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBpbnB1dCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWxpZ2h0JztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzYyMDBFRScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjRkYyOTk3JyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjZjU0MTRlJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNmNWY2ZjcnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4xMSknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge1xuICAgIGJnOiAnI2ZmZicgLy8gYmFja2dyb3VuZD5wcmltYXJ5XG4gIH07XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGlucHV0ID0gbWVyZ2VEZWVwKHt9LCBpbnB1dCwge1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIGxhYmVsOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJyxcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBpbnB1dCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBtZXJnZURlZXAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjNDI0MjQyJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgaW5wdXQgPSBtZXJnZURlZXAoe30sIGlucHV0LCB7XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgbGFiZWw6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHVuZGVybGluZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSknLFxuICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb250cmFzdCIsInNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFZYSxnQkFBZ0I7OztZQVA1QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsU0FBUyxFQUFFO29C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