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
            tertiary: '#efefef',
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
        this.tooltip = {
            root: {
                background: 'rgba(50, 50, 50, 0.85)',
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
        this.tooltip = {
            root: {
                background: 'rgba(250, 250, 250, 0.85)',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiIsIlxuZXhwb3J0IGNvbnN0IHR5cG9ncmFwaHkgPSB7XG4gIGZvbnRGYW1pbHk6IGAnUm9ib3RvJywgc2Fucy1zZXJpZmAsXG4gIGh0bWxGb250U2l6ZTogMTYsXG4gIGZvbnRTaXplOiAxNCxcbiAgZ3V0dGVyVG9wOiAxLFxuICBndXR0ZXJCb3R0b206IC4zNSxcbiAgbHlUeXA6IHtcbiAgICBkaXNwbGF5NDoge1xuICAgICAgZm9udFNpemU6IDk2LFxuICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogLTEuNVxuICAgIH0sXG4gICAgZGlzcGxheTM6IHtcbiAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IC0wLjVcbiAgICB9LFxuICAgIGRpc3BsYXkyOiB7XG4gICAgICBmb250U2l6ZTogNDgsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgfSxcbiAgICBkaXNwbGF5MToge1xuICAgICAgZm9udFNpemU6IDM0LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICAgIH0sXG4gICAgaGVhZGxpbmU6IHtcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMjAsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gICAgfSxcbiAgICBzdWJoZWFkaW5nOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1LFxuICAgICAgbGluZUhlaWdodDogMjRcbiAgICB9LFxuICAgIHN1YmhlYWRpbmcyOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjFcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9LFxuICAgIGNhcHRpb246IHtcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuNFxuICAgIH0sXG4gICAgb3ZlcmxpbmU6IHtcbiAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDEuNSxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGljb25CdXR0b24gPSB7XG4gIHNpemU6ICc0OHB4J1xufTtcbmV4cG9ydCBjb25zdCBpY29uID0ge1xuICBmb250U2l6ZTogJzI0cHgnXG59O1xuZXhwb3J0IGNvbnN0IGZpZWxkID0ge1xuICBhcHBlYXJhbmNlOiB7XG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICB9LFxuICAgICAgZmllbGRzZXQ6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICBwYWRkaW5nOiAnMCAuNWVtJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0SG92ZXI6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldEZvY3VzZWQ6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxGb2N1c2VkOiB7XG4gICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWZmaXg6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS43NWVtKSdcbiAgICAgIH0sXG4gICAgICBoaW50OiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbGxlZDoge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCA1cHggMCAwJyxcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJyxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXI6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcxcHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb250YWluZXJGb2N1c2VkOiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxGb2N1c2VkOiB7XG4gICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEhvdmVyOiB7XG4gICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1hcmdpbjogJzEuNzgxMjVlbSAwIDAuNTkzNzVlbSdcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICBtYXJnaW46ICcxLjc4MTI1ZW0gMCAwLjU5Mzc1ZW0nXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLS43NWVtKSdcbiAgICAgIH0sXG4gICAgICBoaW50OiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB6SW5kZXggPSB7XG4gIHRvb2xiYXI6IDEwMDAsXG4gIGRyYXdlcjogMTEwMCxcbiAgb3ZlcmxheTogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IFJpcHBsZVZhcmlhYmxlcyA9IHtcbiAgdHJhbnNpdGlvbjoge1xuICAgIG9wYWNpdHk6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwxLDEpJyxcbiAgICB0cmFuc2Zvcm06ICdjdWJpYy1iZXppZXIoMCwgMSwgMC42LCAxKSdcbiAgfSxcbiAgZHVyYXRpb246IDk1MFxufTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gIGN1cnZlczoge1xuICAgIHN0YW5kYXJkOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC4yLDEpJyxcbiAgICBkZWNlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC4wLDAuMCwwLjIsMSknLFxuICAgIGFjY2VsZXJhdGlvbjogJ2N1YmljLWJlemllcigwLjQsMC4wLDEsMSknLFxuICAgIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC42LDEpJ1xuICB9LFxuICBkdXJhdGlvbnM6IHtcbiAgICBjb21wbGV4OiAzNzUsXG4gICAgZW50ZXJpbmc6IDIyNSxcbiAgICBleGl0aW5nOiAxOTVcbiAgfVxufTtcbiIsImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgRGlyXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyB0eXBvZ3JhcGh5LCBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMsIFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB0eXBvZ3JhcGh5O1xuICBpY29uQnV0dG9uID0gaWNvbkJ1dHRvbjtcbiAgaWNvbiA9IGljb247XG4gIGJyZWFrcG9pbnRzID0gQnJlYWtwb2ludHM7XG4gIHpJbmRleCA9IHpJbmRleDtcbiAgcmlwcGxlID0gUmlwcGxlVmFyaWFibGVzO1xuICBhbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgZGlyZWN0aW9uID0gRGlyLmx0cjtcbiAgYnV0dG9uID0ge1xuICAgIHNpemU6IHtcbiAgICAgIHNtYWxsOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpXG4gICAgICB9LFxuICAgICAgbWVkaXVtOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpXG4gICAgICB9LFxuICAgICAgbGFyZ2U6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNilcbiAgICAgIH1cbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBmYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc1NnB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNTZweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBtaW5pRmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnMCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0gJ3JnYmEoMCwgMCwgMCwgMC4xMSknO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNlZmVmZWYnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgY2hlY2tib3ggPSB7XG4gICAgdW5jaGVja2VkOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjU0KSdcbiAgICB9XG4gIH07XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMzIzMjMyJyxcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknXG4gICAgfVxuICB9O1xuICB0b29sdGlwID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDUwLCA1MCwgNTAsIDAuODUpJyxcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgZmllbGQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBEaXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCknO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyMyYjJiMmInLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjMzAzMDMwJyxcbiAgICB0ZXJ0aWFyeTogJyMyMTIxMjEnLFxuICAgIGJhc2U6ICcjMEUwRTBFJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKSdcbiAgfTtcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gc2hhZG93O1xuICBzaGFkb3cgPSBzaGFkb3c7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgY2hlY2tib3ggPSB7XG4gICAgdW5jaGVja2VkOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSdcbiAgICB9XG4gIH07XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmFmYWZhJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJ1xuICAgIH1cbiAgfTtcbiAgdG9vbHRpcCA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTAsIDI1MCwgMjUwLCAwLjg1KScsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwwLDAsLjg3KSdcbiAgICB9XG4gIH07XG4gIC8vIGRpcmVjdGlvbiA9IERpci5ydGw7IC8vIGJldGFcbn1cbiJdLCJuYW1lcyI6WyJjb250cmFzdCIsInNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQVlhLGdCQUFnQjs7O1lBUDVCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxTQUFTLEVBQUU7b0JBQ1QsUUFBUTtvQkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtpQkFDckQ7YUFDRjs7QUFVRCxNQUFhLGVBQWU7OztZQVAzQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFO29CQUNULFFBQVE7b0JBQ1IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7aUJBQ3BEO2FBQ0Y7O0FBT0QsTUFBYSxpQkFBaUI7OztZQUo3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7YUFDN0M7Ozs7Ozs7O0FDekJELE1BQWEsVUFBVSxHQUFHO0lBQ3hCLFVBQVUsRUFBRSxzQkFBc0I7SUFDbEMsWUFBWSxFQUFFLEVBQUU7SUFDaEIsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsQ0FBQztJQUNaLFlBQVksRUFBRSxHQUFHO0lBQ2pCLEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLEdBQUc7WUFDZixhQUFhLEVBQUUsQ0FBQyxHQUFHO1NBQ3BCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsR0FBRztZQUNmLGFBQWEsRUFBRSxDQUFDLEdBQUc7U0FDcEI7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