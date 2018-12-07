import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2, LyStyleUtils, Dir, mergeDeep } from '@alyle/ui';
import { __extends } from 'tslib';
import { Breakpoints } from '@alyle/ui/responsive';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ThemeMinimaLight = /** @class */ (function () {
    function ThemeMinimaLight() {
    }
    ThemeMinimaLight.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-theme-minima-light]',
                    providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }]
                },] }
    ];
    return ThemeMinimaLight;
}());
var ThemeMinimaDark = /** @class */ (function () {
    function ThemeMinimaDark() {
    }
    ThemeMinimaDark.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-theme-minima-dark]',
                    providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-dark' }]
                },] }
    ];
    return ThemeMinimaDark;
}());
var ThemeMinimaModule = /** @class */ (function () {
    function ThemeMinimaModule() {
    }
    ThemeMinimaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ThemeMinimaDark, ThemeMinimaLight],
                    exports: [ThemeMinimaDark, ThemeMinimaLight]
                },] }
    ];
    return ThemeMinimaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var typography = {
    fontFamily: "'Roboto', sans-serif",
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
var iconButton = {
    size: '48px'
};
/** @type {?} */
var icon = {
    fontSize: '24px'
};
/** @type {?} */
var field = {
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
var zIndex = {
    toolbar: 1000,
    drawer: 1100,
    overlay: 1200
};
/** @type {?} */
var RippleVariables = {
    transition: {
        opacity: 'cubic-bezier(0.4,0.0,1,1)',
        transform: 'cubic-bezier(0, 1, 0.6, 1)'
    },
    duration: 950
};
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MinimaBase = /** @class */ (function (_super) {
    __extends(MinimaBase, _super);
    function MinimaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typography = typography;
        _this.iconButton = iconButton;
        _this.icon = icon;
        _this.breakpoints = Breakpoints;
        _this.zIndex = zIndex;
        _this.ripple = RippleVariables;
        _this.animations = animations;
        _this.direction = Dir.ltr;
        _this.button = {
            size: {
                small: ({
                    padding: '0 8px',
                    fontSize: _this.pxToRem(_this.typography.lyTyp.button.fontSize - 1),
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
                    fontSize: _this.pxToRem(_this.typography.lyTyp.button.fontSize + 1),
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
        return _this;
    }
    return MinimaBase;
}(LyStyleUtils));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var contrast = '#fff';
/** @type {?} */
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
            contrast: contrast
        };
        _this.warn = {
            default: '#f5414e',
            contrast: contrast
        };
        _this.disabled = 'rgba(0, 0, 0, 0.11)';
        _this.background = {
            default: '#fafafa',
            // secondary
            primary: {
                default: '#fff',
                shadow: shadow
            },
            secondary: '#fafafa',
            tertiary: '#efefef',
            base: '#E0E0E0'
        };
        _this.text = {
            default: 'rgba(0, 0, 0, 0.87)',
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
        };
        _this.divider = 'rgba(0, 0, 0, 0.12)';
        _this.colorShadow = '#333';
        _this.shadow = '#333';
        /**
         * Components variables
         */
        _this.radio = {
            radioOuterCircle: 'rgba(0, 0, 0, 0.43)'
        };
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        _this.bar = '#f5f5f5';
        _this.field = mergeDeep({}, field, {
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
        _this.badge = {};
        _this.checkbox = {
            unchecked: {
                color: 'rgba(0, 0, 0, .54)'
            }
        };
        _this.snackBar = {
            root: {
                background: '#323232',
                color: '#fff'
            }
        };
        _this.tooltip = {
            root: {
                background: 'rgba(50, 50, 50, 0.85)',
                color: '#fff'
            }
        };
        return _this;
    }
    return MinimaLight;
}(MinimaBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var contrast$1 = '#fff';
/** @type {?} */
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
        _this.disabled = 'rgba(255, 255, 255, 0.30)';
        _this.background = {
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
        _this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        /**
         * Components variables
         */
        _this.radio = {
            radioOuterCircle: 'rgba(255, 255, 255, 0.55)'
        };
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        _this.bar = '#212121';
        _this.divider = 'rgba(255, 255, 255, 0.12)';
        _this.colorShadow = shadow$1;
        _this.shadow = shadow$1;
        _this.field = mergeDeep({}, field, {
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
        _this.badge = {};
        _this.checkbox = {
            unchecked: {
                color: 'rgba(255, 255, 255, 0.7)'
            }
        };
        _this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)'
            }
        };
        _this.tooltip = {
            root: {
                background: 'rgba(250, 250, 250, 0.85)',
                color: 'rgba(0,0,0,.87)'
            }
        };
        return _this;
    }
    return MinimaDark;
}(MinimaBase));

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogWyBMeVRoZW1lMiwgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1saWdodCcgfSBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTGlnaHQgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtZGFya10nLFxuICBwcm92aWRlcnM6IFsgTHlUaGVtZTIsIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtZGFyaycgfSBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hRGFyayB7IH1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XSxcbiAgZXhwb3J0czogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFNb2R1bGUgeyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1pbmltYVRoZW1lIGV4dGVuZHMgTWluaW1hTGlnaHQsIE1pbmltYURhcmsgeyB9XG4iLCJcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICBodG1sRm9udFNpemU6IDE2LFxuICBmb250U2l6ZTogMTQsXG4gIGd1dHRlclRvcDogMSxcbiAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gIGx5VHlwOiB7XG4gICAgZGlzcGxheTQ6IHtcbiAgICAgIGZvbnRTaXplOiA5NixcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IC0xLjVcbiAgICB9LFxuICAgIGRpc3BsYXkzOiB7XG4gICAgICBmb250U2l6ZTogNjAsXG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC41XG4gICAgfSxcbiAgICBkaXNwbGF5Mjoge1xuICAgICAgZm9udFNpemU6IDQ4LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgIH0sXG4gICAgZGlzcGxheTE6IHtcbiAgICAgIGZvbnRTaXplOiAzNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgICB9LFxuICAgIGhlYWRsaW5lOiB7XG4gICAgICBmb250U2l6ZTogMjQsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICAgIH0sXG4gICAgc3ViaGVhZGluZzoge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xNSxcbiAgICAgIGxpbmVIZWlnaHQ6IDI0XG4gICAgfSxcbiAgICBzdWJoZWFkaW5nMjoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xXG4gICAgfSxcbiAgICBib2R5Mjoge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfSxcbiAgICBjYXB0aW9uOiB7XG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgICB9LFxuICAgIG92ZXJsaW5lOiB7XG4gICAgICBmb250U2l6ZTogMTAsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAxLjUsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uID0ge1xuICBzaXplOiAnNDhweCdcbn07XG5leHBvcnQgY29uc3QgaWNvbiA9IHtcbiAgZm9udFNpemU6ICcyNHB4J1xufTtcbmV4cG9ydCBjb25zdCBmaWVsZCA9IHtcbiAgYXBwZWFyYW5jZToge1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0OiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzAgLjVlbSdcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldEhvdmVyOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgZmllbGRzZXRGb2N1c2VkOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4J1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsRm9jdXNlZDoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VmZml4OiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEuNzVlbSknXG4gICAgICB9LFxuICAgICAgaGludDoge1xuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWxsZWQ6IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHggNXB4IDAgMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbScsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzAnXG4gICAgICAgIH0sXG4gICAgICAgICcmOmhvdmVyOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRm9jdXNlZDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsRm9jdXNlZDoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46ICcxLjc4MTI1ZW0gMCAwLjU5Mzc1ZW0nXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgbWFyZ2luOiAnMS43ODEyNWVtIDAgMC41OTM3NWVtJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0uNzVlbSknXG4gICAgICB9LFxuICAgICAgaGludDoge1xuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgekluZGV4ID0ge1xuICB0b29sYmFyOiAxMDAwLFxuICBkcmF3ZXI6IDExMDAsXG4gIG92ZXJsYXk6IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVWYXJpYWJsZXMgPSB7XG4gIHRyYW5zaXRpb246IHtcbiAgICBvcGFjaXR5OiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMSwxKScsXG4gICAgdHJhbnNmb3JtOiAnY3ViaWMtYmV6aWVyKDAsIDEsIDAuNiwgMSknXG4gIH0sXG4gIGR1cmF0aW9uOiA5NTBcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25zID0ge1xuICBjdXJ2ZXM6IHtcbiAgICBzdGFuZGFyZDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKScsXG4gICAgZGVjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMCwwLjAsMC4yLDEpJyxcbiAgICBhY2NlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC40LDAuMCwxLDEpJyxcbiAgICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuNiwxKSdcbiAgfSxcbiAgZHVyYXRpb25zOiB7XG4gICAgY29tcGxleDogMzc1LFxuICAgIGVudGVyaW5nOiAyMjUsXG4gICAgZXhpdGluZzogMTk1XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuICBMeVN0eWxlVXRpbHMsXG4gIERpclxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdHlwb2dyYXBoeSwgaWNvbkJ1dHRvbiwgaWNvbiwgekluZGV4LCBhbmltYXRpb25zLCBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBCcmVha3BvaW50cyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYUJhc2UgZXh0ZW5kcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5ID0gdHlwb2dyYXBoeTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xuICBicmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xuICB6SW5kZXggPSB6SW5kZXg7XG4gIHJpcHBsZSA9IFJpcHBsZVZhcmlhYmxlcztcbiAgYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gIGRpcmVjdGlvbiA9IERpci5sdHI7XG4gIGJ1dHRvbiA9IHtcbiAgICBzaXplOiB7XG4gICAgICBzbWFsbDogKHtcbiAgICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSh0aGlzLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgICAgICBtaW5XaWR0aDogJzQ4cHgnXG4gICAgICB9KSxcbiAgICAgIG1lZGl1bTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgICAgICBtaW5XaWR0aDogJzY0cHgnXG4gICAgICB9KSxcbiAgICAgIGxhcmdlOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSh0aGlzLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgICAgICBtaW5XaWR0aDogJzk2cHgnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgaWNvbjoge1xuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIGZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICB3aWR0aDogJzU2cHgnLFxuICAgICAgICBoZWlnaHQ6ICc1NnB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIG1pbmlGYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0gJ3JnYmEoMCwgMCwgMCwgMC4xMSknO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNlZmVmZWYnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgY2hlY2tib3ggPSB7XG4gICAgdW5jaGVja2VkOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjU0KSdcbiAgICB9XG4gIH07XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMzIzMjMyJyxcbiAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICB9XG4gIH07XG4gIHRvb2x0aXAgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNTAsIDUwLCA1MCwgMC44NSknLFxuICAgICAgY29sb3I6ICcjZmZmJ1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5jb25zdCBzaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAxKSc7XG5leHBvcnQgY2xhc3MgTWluaW1hRGFyayBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWRhcmsnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjMURFOUI2JyxcbiAgICBjb250cmFzdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknXG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnIzlDMjdCMCcsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI0VBNDA0QycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgZGlzYWJsZWQgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSc7XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIGZpZWxkLCB7XG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBsYWJlbENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJyxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBmaWxsZWQ6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYWRnZSA9IHt9O1xuICBjaGVja2JveCA9IHtcbiAgICB1bmNoZWNrZWQ6IHtcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJ1xuICAgIH1cbiAgfTtcbiAgc25hY2tCYXIgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJyNmYWZhZmEnLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknXG4gICAgfVxuICB9O1xuICB0b29sdGlwID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1MCwgMjUwLCAyNTAsIDAuODUpJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJ1xuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsImNvbnRyYXN0Iiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQUtBO0tBSWlDOztnQkFKaEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRSxDQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxDQUFFO2lCQUM5RTs7SUFDK0IsdUJBQUM7Q0FKakMsSUFJaUM7O0lBRWpDO0tBSWdDOztnQkFKL0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFFO2lCQUM3RTs7SUFDOEIsc0JBQUM7Q0FKaEMsSUFJZ0M7O0lBRWhDO0tBSWtDOztnQkFKakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2lCQUM3Qzs7SUFDZ0Msd0JBQUM7Q0FKbEM7Ozs7Ozs7QUNoQkEsSUFBYSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFLHNCQUFzQjtJ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