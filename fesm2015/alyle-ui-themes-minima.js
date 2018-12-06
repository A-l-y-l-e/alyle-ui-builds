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
                providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }]
            },] }
];
class ThemeMinimaDark {
}
ThemeMinimaDark.decorators = [
    { type: Directive, args: [{
                selector: '[ly-theme-minima-dark]',
                providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-dark' }]
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
                small: ({
                    padding: '0 8px',
                    fontSize: this.pxToRem(this.typography.lyTyp.button.fontSize - 1),
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
                    fontSize: this.pxToRem(this.typography.lyTyp.button.fontSize + 1),
                    minHeight: '40px',
                    minWidth: '96px'
                })
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogWyBMeVRoZW1lMiwgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1saWdodCcgfSBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTGlnaHQgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtZGFya10nLFxuICBwcm92aWRlcnM6IFsgTHlUaGVtZTIsIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtZGFyaycgfSBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hRGFyayB7IH1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XSxcbiAgZXhwb3J0czogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFNb2R1bGUgeyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1pbmltYVRoZW1lIGV4dGVuZHMgTWluaW1hTGlnaHQsIE1pbmltYURhcmsgeyB9XG4iLCJcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICBodG1sRm9udFNpemU6IDE2LFxuICBmb250U2l6ZTogMTQsXG4gIGd1dHRlclRvcDogMSxcbiAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gIGx5VHlwOiB7XG4gICAgZGlzcGxheTQ6IHtcbiAgICAgIGZvbnRTaXplOiA5NixcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IC0xLjVcbiAgICB9LFxuICAgIGRpc3BsYXkzOiB7XG4gICAgICBmb250U2l6ZTogNjAsXG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC41XG4gICAgfSxcbiAgICBkaXNwbGF5Mjoge1xuICAgICAgZm9udFNpemU6IDQ4LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgIH0sXG4gICAgZGlzcGxheTE6IHtcbiAgICAgIGZvbnRTaXplOiAzNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgICB9LFxuICAgIGhlYWRsaW5lOiB7XG4gICAgICBmb250U2l6ZTogMjQsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICAgIH0sXG4gICAgc3ViaGVhZGluZzoge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xNSxcbiAgICAgIGxpbmVIZWlnaHQ6IDI0XG4gICAgfSxcbiAgICBzdWJoZWFkaW5nMjoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xXG4gICAgfSxcbiAgICBib2R5Mjoge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfSxcbiAgICBjYXB0aW9uOiB7XG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgICB9LFxuICAgIG92ZXJsaW5lOiB7XG4gICAgICBmb250U2l6ZTogMTAsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAxLjUsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uID0ge1xuICBzaXplOiAnNDhweCdcbn07XG5leHBvcnQgY29uc3QgaWNvbiA9IHtcbiAgZm9udFNpemU6ICcyNHB4J1xufTtcbmV4cG9ydCBjb25zdCBmaWVsZCA9IHtcbiAgYXBwZWFyYW5jZToge1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0OiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzAgLjVlbSdcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldEhvdmVyOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgZmllbGRzZXRGb2N1c2VkOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4J1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsRm9jdXNlZDoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VmZml4OiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEuNzVlbSknXG4gICAgICB9LFxuICAgICAgaGludDoge1xuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWxsZWQ6IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHggNXB4IDAgMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbScsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzAnXG4gICAgICAgIH0sXG4gICAgICAgICcmOmhvdmVyOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRm9jdXNlZDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsRm9jdXNlZDoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46ICcxLjc4MTI1ZW0gMCAwLjU5Mzc1ZW0nXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgbWFyZ2luOiAnMS43ODEyNWVtIDAgMC41OTM3NWVtJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0uNzVlbSknXG4gICAgICB9LFxuICAgICAgaGludDoge1xuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgekluZGV4ID0ge1xuICB0b29sYmFyOiAxMDAwLFxuICBkcmF3ZXI6IDExMDAsXG4gIG92ZXJsYXk6IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVWYXJpYWJsZXMgPSB7XG4gIHRyYW5zaXRpb246IHtcbiAgICBvcGFjaXR5OiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMSwxKScsXG4gICAgdHJhbnNmb3JtOiAnY3ViaWMtYmV6aWVyKDAsIDEsIDAuNiwgMSknXG4gIH0sXG4gIGR1cmF0aW9uOiA5NTBcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25zID0ge1xuICBjdXJ2ZXM6IHtcbiAgICBzdGFuZGFyZDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKScsXG4gICAgZGVjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMCwwLjAsMC4yLDEpJyxcbiAgICBhY2NlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC40LDAuMCwxLDEpJyxcbiAgICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuNiwxKSdcbiAgfSxcbiAgZHVyYXRpb25zOiB7XG4gICAgY29tcGxleDogMzc1LFxuICAgIGVudGVyaW5nOiAyMjUsXG4gICAgZXhpdGluZzogMTk1XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuICBMeVN0eWxlVXRpbHMsXG4gIERpclxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdHlwb2dyYXBoeSwgaWNvbkJ1dHRvbiwgaWNvbiwgekluZGV4LCBhbmltYXRpb25zLCBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBCcmVha3BvaW50cyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYUJhc2UgZXh0ZW5kcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5ID0gdHlwb2dyYXBoeTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xuICBicmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xuICB6SW5kZXggPSB6SW5kZXg7XG4gIHJpcHBsZSA9IFJpcHBsZVZhcmlhYmxlcztcbiAgYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gIGRpcmVjdGlvbiA9IERpci5sdHI7XG4gIGJ1dHRvbiA9IHtcbiAgICBzaXplOiB7XG4gICAgICBzbWFsbDogKHtcbiAgICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSh0aGlzLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgICAgICBtaW5XaWR0aDogJzQ4cHgnXG4gICAgICB9KSxcbiAgICAgIG1lZGl1bTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgICAgICBtaW5XaWR0aDogJzY0cHgnXG4gICAgICB9KSxcbiAgICAgIGxhcmdlOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSh0aGlzLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgICAgICBtaW5XaWR0aDogJzk2cHgnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgaWNvbjoge1xuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIGZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICB3aWR0aDogJzU2cHgnLFxuICAgICAgICBoZWlnaHQ6ICc1NnB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIG1pbmlGYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0gJ3JnYmEoMCwgMCwgMCwgMC4xMSknO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNlZmVmZWYnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgY2hlY2tib3ggPSB7XG4gICAgdW5jaGVja2VkOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjU0KSdcbiAgICB9XG4gIH07XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMzIzMjMyJyxcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknXG4gICAgfVxuICB9O1xuICB0b29sdGlwID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDUwLCA1MCwgNTAsIDAuODUpJyxcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgZmllbGQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFEYXJrIGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtZGFyayc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyMxREU5QjYnLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjOUMyN0IwJyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjRUE0MDRDJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBkaXNhYmxlZCA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzApJztcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCcsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjMmIyYjJiJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnIzMwMzAzMCcsXG4gICAgdGVydGlhcnk6ICcjMjEyMTIxJyxcbiAgICBiYXNlOiAnIzBFMEUwRSdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgcHJpbWFyeTogJyNmZmYnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknXG4gIH07XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSdcbiAgfTtcbiAgbWVudSA9IHt9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDQ5LDQ5LDQ5LC42KSdcbiAgfTtcbiAgYmFyID0gJyMyMTIxMjEnO1xuICBkaXZpZGVyID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9IHNoYWRvdztcbiAgc2hhZG93ID0gc2hhZG93O1xuICBmaWVsZCA9IG1lcmdlRGVlcCh7fSwgZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhZGdlID0ge307XG4gIGNoZWNrYm94ID0ge1xuICAgIHVuY2hlY2tlZDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknXG4gICAgfVxuICB9O1xuICBzbmFja0JhciA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZhZmFmYScsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwwLDAsLjg3KSdcbiAgICB9XG4gIH07XG4gIHRvb2x0aXAgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMC44NSknLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknXG4gICAgfVxuICB9O1xuICAvLyBkaXJlY3Rpb24gPSBEaXIucnRsOyAvLyBiZXRhXG59XG4iXSwibmFtZXMiOlsiY29udHJhc3QiLCJzaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFTYSxnQkFBZ0I7OztZQUo1QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsU0FBUyxFQUFFLENBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUU7YUFDOUU7O0FBT0QsTUFBYSxlQUFlOzs7WUFKM0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFFO2FBQzdFOztBQU9ELE1BQWEsaUJBQWlCOzs7WUFKN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2FBQzdDOzs7Ozs7OztBQ25CRCxNQUFhLFVBQVUsR0FBRztJQUN4QixVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLFlBQVksRUFBRSxF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