import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2, LyStyleUtils, Dir, mergeDeep } from '@alyle/ui';
import { __extends } from 'tslib';
import { Breakpoints } from '@alyle/ui/responsive';
import { RippleVariables } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ThemeMinimaLight = /** @class */ (function () {
    function ThemeMinimaLight() {
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
    return ThemeMinimaLight;
}());
var ThemeMinimaDark = /** @class */ (function () {
    function ThemeMinimaDark() {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var typography = {
    fontFamily: "'Roboto', sans-serif",
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
var zIndex = {
    toolbar: 1000,
    drawer: 1100,
    overlay: 1200
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return _this;
    }
    return MinimaBase;
}(LyStyleUtils));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        _this.background = {
            default: '#fafafa',
            // secondary
            primary: {
                default: '#fff',
                shadow: shadow
            },
            secondary: '#fafafa',
            tertiary: '#f5f6f7',
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
        _this.button = {
            disabled: 'rgba(0, 0, 0, 0.11)'
        };
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
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
        _this.input = {
            /** @deprecated */
            label: 'rgba(0, 0, 0, 0.6)',
            /** @deprecated */
            underline: 'rgba(0, 0, 0, 0.11)',
        };
        _this.badge = {};
        return _this;
    }
    return MinimaLight;
}(MinimaBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        _this.button = {
            disabled: 'rgba(255, 255, 255, 0.30)'
        };
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
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
        _this.input = {
            /** @deprecated */
            label: 'rgba(255, 255, 255, 0.4)',
            /** @deprecated */
            underline: 'rgba(255, 255, 255, 0.11)',
        };
        _this.badge = {};
        return _this;
    }
    return MinimaDark;
}(MinimaBase));

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

export { ThemeMinimaLight, ThemeMinimaDark, ThemeMinimaModule, typography, iconButton, icon, field, zIndex, animations, MinimaLight, MinimaDark, MinimaBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiIsImltcG9ydCB7IFR5cG9ncmFwaHlDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeSA9IHtcbiAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgaHRtbEZvbnRTaXplOiAxNixcbiAgZm9udFNpemU6IDE0LFxuICBndXR0ZXJUb3A6IDEsXG4gIGd1dHRlckJvdHRvbTogLjM1LFxuICBkaXNwbGF5NDoge1xuICAgIGZvbnRTaXplOiA5NixcbiAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgbGV0dGVyU3BhY2luZzogLTEuNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkzOiB7XG4gICAgZm9udFNpemU6IDYwLFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMC41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTI6IHtcbiAgICBmb250U2l6ZTogNDgsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5MToge1xuICAgIGZvbnRTaXplOiAzNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGhlYWRsaW5lOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1LFxuICAgIGxpbmVIZWlnaHQ6IDI0XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgc3ViaGVhZGluZzI6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJvZHkyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTE6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgY2FwdGlvbjoge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC40XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgb3ZlcmxpbmU6IHtcbiAgICBmb250U2l6ZTogMTAsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDEuNSxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9IGFzIFR5cG9ncmFwaHlDb25maWdcbn07XG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvbiA9IHtcbiAgc2l6ZTogJzQ4cHgnXG59O1xuZXhwb3J0IGNvbnN0IGljb24gPSB7XG4gIGZvbnRTaXplOiAnMjRweCdcbn07XG5leHBvcnQgY29uc3QgZmllbGQgPSB7XG4gIGFwcGVhcmFuY2U6IHtcbiAgICBvdXRsaW5lZDoge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIC41ZW0nXG4gICAgICB9LFxuICAgICAgZmllbGRzZXRIb3Zlcjoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0Rm9jdXNlZDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzJweCdcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEZvY3VzZWQ6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1ZmZpeDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjc1ZW0pJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZmlsbGVkOiB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnLFxuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcwJ1xuICAgICAgICB9LFxuICAgICAgICAnJjpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEZvY3VzZWQ6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsSG92ZXI6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMS43ODEyNWVtIDAgMC41OTM3NWVtJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzEuNzgxMjVlbSAwIDAuNTkzNzVlbSdcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtLjc1ZW0pJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHpJbmRleCA9IHtcbiAgdG9vbGJhcjogMTAwMCxcbiAgZHJhd2VyOiAxMTAwLFxuICBvdmVybGF5OiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgY3VydmVzOiB7XG4gICAgc3RhbmRhcmQ6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwwLjIsMSknLFxuICAgIGRlY2VsZXJhdGlvbjogJ2N1YmljLWJlemllcigwLjAsMC4wLDAuMiwxKScsXG4gICAgYWNjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMSwxKScsXG4gICAgc2hhcnA6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwwLjYsMSknXG4gIH0sXG4gIGR1cmF0aW9uczoge1xuICAgIGNvbXBsZXg6IDM3NSxcbiAgICBlbnRlcmluZzogMjI1LFxuICAgIGV4aXRpbmc6IDE5NVxuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgTHlTdHlsZVV0aWxzLFxuICBUeXBvZ3JhcGh5Q29uZmlnLCAvLyBEbyBub3QgZGVsZXRlIHRoaXMsIHRoaXMgaXMgbmVjZXNzYXJ5IHRvIGdlbmVyYXRlIHRoZSB0eXBlcyBjb3JyZWN0bHlcbiAgSVJpcHBsZVZhcmlhYmxlcywgLy8gRG8gbm90IGRlbGV0ZSB0aGlzLCB0aGlzIGlzIG5lY2Vzc2FyeSB0byBnZW5lcmF0ZSB0aGUgdHlwZXMgY29ycmVjdGx5XG4gIERpclxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdHlwb2dyYXBoeSwgaWNvbkJ1dHRvbiwgaWNvbiwgekluZGV4LCBhbmltYXRpb25zIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYUJhc2UgZXh0ZW5kcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5ID0gdHlwb2dyYXBoeTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xuICBicmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xuICB6SW5kZXggPSB6SW5kZXg7XG4gIHJpcHBsZSA9IFJpcHBsZVZhcmlhYmxlcztcbiAgYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gIGRpcmVjdGlvbiA9IERpci5sdHI7XG59XG4iLCJpbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBEaXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgZmllbGQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBNaW5pbWFCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5jb25zdCBzaGFkb3cgPSAnIzMzMyc7XG5leHBvcnQgY2xhc3MgTWluaW1hTGlnaHQgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1saWdodCc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyM2MjAwRUUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnI0ZGMjk5NycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI2Y1NDE0ZScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZhZmFmYScsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnI2ZhZmFmYScsXG4gICAgdGVydGlhcnk6ICcjZjVmNmY3JyxcbiAgICBiYXNlOiAnI0UwRTBFMCdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH07XG4gIGRpdmlkZXIgPSAncmdiYSgwLCAwLCAwLCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gJyMzMzMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBidXR0b24gPSB7XG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJ1xuICB9O1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgwLCAwLCAwLCAwLjQzKSdcbiAgfTtcbiAgbWVudSA9IHt9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDAsMCwwLC42KSdcbiAgfTtcbiAgYmFyID0gJyNmNWY1ZjUnO1xuICBmaWVsZCA9IG1lcmdlRGVlcCh7fSwgZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGlucHV0ID0ge1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIGxhYmVsOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJyxcbiAgfTtcbiAgYmFkZ2UgPSB7fTtcbn1cbiIsImltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFEYXJrIGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtZGFyayc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyMxREU5QjYnLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjOUMyN0IwJyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjRUE0MDRDJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyMyYjJiMmInLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjMzAzMDMwJyxcbiAgICB0ZXJ0aWFyeTogJyMyMTIxMjEnLFxuICAgIGJhc2U6ICcjMEUwRTBFJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKSdcbiAgfTtcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gc2hhZG93O1xuICBzaGFkb3cgPSBzaGFkb3c7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9LCBmaWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaW5wdXQgPSB7XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgbGFiZWw6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHVuZGVybGluZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSknLFxuICB9O1xuICBiYWRnZSA9IHt9O1xuICAvLyBkaXJlY3Rpb24gPSBEaXIucnRsO1xufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiY29udHJhc3QiLCJzaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztnQkFLQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7cUJBQ3JEO2lCQUNGOzsyQkFYRDs7Ozs7O2dCQWNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUU7d0JBQ1QsUUFBUTt3QkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtxQkFDcEQ7aUJBQ0Y7OzBCQXBCRDs7Ozs7O2dCQXVCQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzdDOzs0QkExQkQ7Ozs7Ozs7O0FDRUEsSUFBYSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxZQUFZLEVBQUUsRUFBRTtJQUNoQixRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osWUFBWSxFQUFFLEdBQUc7SUFDakIsUUFBUSxvQkFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixhQUFhLEVBQUUsQ0FBQyxHQUFHO0tBQ0EsQ0FBQTtJQUNyQixRQUFRLG9CQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxDQUFDLEdBQUc7S0FDQSxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLENB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