import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2, LyStyleUtils, Dir, mergeDeep } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const typography = {
    fontFamily: `'Roboto', sans-serif`,
    htmlFontSize: 16,
    fontSize: 14,
    gutterTop: 1,
    gutterBottom: .35,
    lyTyp: {
        display4: {
            fontSize: 96,
            fontWeight: 300,
            letterSpacing: -1.5
        },
        display3: {
            fontSize: 60,
            fontWeight: 300,
            letterSpacing: -0.5
        },
        display2: {
            fontSize: 48,
            fontWeight: 400,
            letterSpacing: 0
        },
        display1: {
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: 0.25
        },
        headline: {
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: 0
        },
        title: {
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 0.15
        },
        subheading: {
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0.15,
            lineHeight: 24
        },
        subheading2: {
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 0.1
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0.15
        },
        body1: {
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 0.25
        },
        button: {
            fontSize: 14,
            fontWeight: 500
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 0.4
        },
        overline: {
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: 1.5,
            textTransform: 'uppercase'
        }
    }
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
const field = {
    appearance: {
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
            },
            hint: {
                padding: '0 0.75em'
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
            },
            hint: {
                padding: '0 0.75em'
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
const RippleVariables = {
    transition: {
        opacity: 'cubic-bezier(0.4,0.0,1,1)',
        transform: 'cubic-bezier(0, 1, 0.6, 1)'
    },
    duration: 950
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.direction = Dir.ltr;
        this.button = {
            size: {
                small: {
                    fontSize: this.pxToRem(16)
                },
                medium: {
                    fontSize: this.pxToRem(16)
                },
                large: {
                    fontSize: this.pxToRem(16)
                }
            },
            appearance: {
                icon: {
                    minWidth: '0',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                },
                fab: {
                    minWidth: '0',
                    width: '56px',
                    height: '56px',
                    padding: 0,
                    borderRadius: '50%'
                },
                miniFab: {
                    minWidth: '0',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                }
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.disabled = 'rgba(0, 0, 0, 0.11)';
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
        this.radio = {
            radioOuterCircle: 'rgba(0, 0, 0, 0.43)'
        };
        this.menu = {};
        this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        this.bar = '#f5f5f5';
        this.field = mergeDeep({}, field, {
            borderColor: 'rgba(0, 0, 0, 0.12)',
            labelColor: 'rgba(0, 0, 0, 0.6)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
        this.badge = {};
        this.checkbox = {
            unchecked: {
                color: 'rgba(0, 0, 0, .54)'
            }
        };
        this.snackBar = {
            root: {
                background: '#323232',
                color: 'rgba(255,255,255,.7)'
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.disabled = 'rgba(255, 255, 255, 0.30)';
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
        this.radio = {
            radioOuterCircle: 'rgba(255, 255, 255, 0.55)'
        };
        this.menu = {};
        this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        this.bar = '#212121';
        this.divider = 'rgba(255, 255, 255, 0.12)';
        this.colorShadow = shadow$1;
        this.shadow = shadow$1;
        this.field = mergeDeep({}, field, {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            labelColor: 'rgba(255, 255, 255, 0.4)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
        this.badge = {};
        this.checkbox = {
            unchecked: {
                color: 'rgba(255, 255, 255, 0.7)'
            }
        };
        this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)'
            }
        };
        // direction = Dir.rtl; // beta
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ThemeMinimaLight, ThemeMinimaDark, ThemeMinimaModule, MinimaLight, MinimaDark, MinimaBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiIsIlxuZXhwb3J0IGNvbnN0IHR5cG9ncmFwaHkgPSB7XG4gIGZvbnRGYW1pbHk6IGAnUm9ib3RvJywgc2Fucy1zZXJpZmAsXG4gIGh0bWxGb250U2l6ZTogMTYsXG4gIGZvbnRTaXplOiAxNCxcbiAgZ3V0dGVyVG9wOiAxLFxuICBndXR0ZXJCb3R0b206IC4zNSxcbiAgbHlUeXA6IHtcbiAgICBkaXNwbGF5NDoge1xuICAgICAgZm9udFNpemU6IDk2LFxuICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogLTEuNVxuICAgIH0sXG4gICAgZGlzcGxheTM6IHtcbiAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IC0wLjVcbiAgICB9LFxuICAgIGRpc3BsYXkyOiB7XG4gICAgICBmb250U2l6ZTogNDgsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgfSxcbiAgICBkaXNwbGF5MToge1xuICAgICAgZm9udFNpemU6IDM0LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICAgIH0sXG4gICAgaGVhZGxpbmU6IHtcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMjAsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gICAgfSxcbiAgICBzdWJoZWFkaW5nOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1LFxuICAgICAgbGluZUhlaWdodDogMjRcbiAgICB9LFxuICAgIHN1YmhlYWRpbmcyOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjFcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9LFxuICAgIGNhcHRpb246IHtcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuNFxuICAgIH0sXG4gICAgb3ZlcmxpbmU6IHtcbiAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDEuNSxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGljb25CdXR0b24gPSB7XG4gIHNpemU6ICc0OHB4J1xufTtcbmV4cG9ydCBjb25zdCBpY29uID0ge1xuICBmb250U2l6ZTogJzI0cHgnXG59O1xuZXhwb3J0IGNvbnN0IGZpZWxkID0ge1xuICBhcHBlYXJhbmNlOiB7XG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICB9LFxuICAgICAgZmllbGRzZXQ6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICBwYWRkaW5nOiAnMCAuNWVtJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0SG92ZXI6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldEZvY3VzZWQ6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxGb2N1c2VkOiB7XG4gICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWZmaXg6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS43NWVtKSdcbiAgICAgIH0sXG4gICAgICBoaW50OiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbGxlZDoge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCA1cHggMCAwJyxcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJyxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXI6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcxcHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb250YWluZXJGb2N1c2VkOiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxGb2N1c2VkOiB7XG4gICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEhvdmVyOiB7XG4gICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1hcmdpbjogJzEuNzgxMjVlbSAwIDAuNTkzNzVlbSdcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICBtYXJnaW46ICcxLjc4MTI1ZW0gMCAwLjU5Mzc1ZW0nXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLS43NWVtKSdcbiAgICAgIH0sXG4gICAgICBoaW50OiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB6SW5kZXggPSB7XG4gIHRvb2xiYXI6IDEwMDAsXG4gIGRyYXdlcjogMTEwMCxcbiAgb3ZlcmxheTogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IFJpcHBsZVZhcmlhYmxlcyA9IHtcbiAgdHJhbnNpdGlvbjoge1xuICAgIG9wYWNpdHk6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwxLDEpJyxcbiAgICB0cmFuc2Zvcm06ICdjdWJpYy1iZXppZXIoMCwgMSwgMC42LCAxKSdcbiAgfSxcbiAgZHVyYXRpb246IDk1MFxufTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gIGN1cnZlczoge1xuICAgIHN0YW5kYXJkOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC4yLDEpJyxcbiAgICBkZWNlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC4wLDAuMCwwLjIsMSknLFxuICAgIGFjY2VsZXJhdGlvbjogJ2N1YmljLWJlemllcigwLjQsMC4wLDEsMSknLFxuICAgIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC42LDEpJ1xuICB9LFxuICBkdXJhdGlvbnM6IHtcbiAgICBjb21wbGV4OiAzNzUsXG4gICAgZW50ZXJpbmc6IDIyNSxcbiAgICBleGl0aW5nOiAxOTVcbiAgfVxufTtcbiIsImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgRGlyXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyB0eXBvZ3JhcGh5LCBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMsIFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB0eXBvZ3JhcGh5O1xuICBpY29uQnV0dG9uID0gaWNvbkJ1dHRvbjtcbiAgaWNvbiA9IGljb247XG4gIGJyZWFrcG9pbnRzID0gQnJlYWtwb2ludHM7XG4gIHpJbmRleCA9IHpJbmRleDtcbiAgcmlwcGxlID0gUmlwcGxlVmFyaWFibGVzO1xuICBhbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgZGlyZWN0aW9uID0gRGlyLmx0cjtcbiAgYnV0dG9uID0ge1xuICAgIHNpemU6IHtcbiAgICAgIHNtYWxsOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpXG4gICAgICB9LFxuICAgICAgbWVkaXVtOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpXG4gICAgICB9LFxuICAgICAgbGFyZ2U6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNilcbiAgICAgIH1cbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBmYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc1NnB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNTZweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBtaW5pRmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnMCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0gJ3JnYmEoMCwgMCwgMCwgMC4xMSknO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNmNWY2ZjcnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgY2hlY2tib3ggPSB7XG4gICAgdW5jaGVja2VkOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjU0KSdcbiAgICB9XG4gIH07XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMzIzMjMyJyxcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgZmllbGQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBEaXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCknO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyMyYjJiMmInLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjMzAzMDMwJyxcbiAgICB0ZXJ0aWFyeTogJyMyMTIxMjEnLFxuICAgIGJhc2U6ICcjMEUwRTBFJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKSdcbiAgfTtcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gc2hhZG93O1xuICBzaGFkb3cgPSBzaGFkb3c7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgY2hlY2tib3ggPSB7XG4gICAgdW5jaGVja2VkOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSdcbiAgICB9XG4gIH07XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmFmYWZhJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJ1xuICAgIH1cbiAgfTtcbiAgLy8gZGlyZWN0aW9uID0gRGlyLnJ0bDsgLy8gYmV0YVxufVxuIl0sIm5hbWVzIjpbImNvbnRyYXN0Iiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BWWEsZ0JBQWdCOzs7WUFQNUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFNBQVMsRUFBRTtvQkFDVCxRQUFRO29CQUNS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