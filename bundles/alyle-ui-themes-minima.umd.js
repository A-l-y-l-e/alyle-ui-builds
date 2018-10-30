(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/responsive'), require('@alyle/ui/ripple')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/themes/minima', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/responsive', '@alyle/ui/ripple'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.themes = global.alyle.ui.themes || {}, global.alyle.ui.themes.minima = {}),global.ng.core,global.alyle.ui,global.alyle.ui.responsive,global.alyle.ui.ripple));
}(this, (function (exports,core,ui,responsive,ripple) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ThemeMinimaLight = /** @class */ (function () {
        function ThemeMinimaLight() {
        }
        ThemeMinimaLight.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ly-theme-minima-light]',
                        providers: [
                            ui.LyTheme2,
                            { provide: ui.LY_THEME_NAME, useValue: 'minima-light' }
                        ]
                    },] }
        ];
        return ThemeMinimaLight;
    }());
    var ThemeMinimaDark = /** @class */ (function () {
        function ThemeMinimaDark() {
        }
        ThemeMinimaDark.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ly-theme-minima-dark]',
                        providers: [
                            ui.LyTheme2,
                            { provide: ui.LY_THEME_NAME, useValue: 'minima-dark' }
                        ]
                    },] }
        ];
        return ThemeMinimaDark;
    }());
    var ThemeMinimaModule = /** @class */ (function () {
        function ThemeMinimaModule() {
        }
        ThemeMinimaModule.decorators = [
            { type: core.NgModule, args: [{
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            _this.breakpoints = responsive.Breakpoints;
            _this.zIndex = zIndex;
            _this.ripple = ripple.RippleVariables;
            _this.animations = animations;
            _this.direction = ui.Dir.ltr;
            return _this;
        }
        return MinimaBase;
    }(ui.LyStyleUtils));

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
            _this.field = ui.mergeDeep({}, field, {
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
            _this.field = ui.mergeDeep({}, field, {
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

    exports.ThemeMinimaLight = ThemeMinimaLight;
    exports.ThemeMinimaDark = ThemeMinimaDark;
    exports.ThemeMinimaModule = ThemeMinimaModule;
    exports.typography = typography;
    exports.iconButton = iconButton;
    exports.icon = icon;
    exports.field = field;
    exports.zIndex = zIndex;
    exports.animations = animations;
    exports.MinimaLight = MinimaLight;
    exports.MinimaDark = MinimaDark;
    exports.ɵa = MinimaBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3RoZW1lLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS92YXJpYWJsZXMudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9iYXNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9saWdodC50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvZGFyay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFMaWdodCB9IGZyb20gJy4vbGlnaHQnO1xuaW1wb3J0IHsgTWluaW1hRGFyayB9IGZyb20gJy4vZGFyayc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtbGlnaHRdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1saWdodCcgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTGlnaHQgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtZGFya10nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeVRoZW1lMixcbiAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWRhcmsnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYURhcmsgeyB9XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF0sXG4gIGV4cG9ydHM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTW9kdWxlIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5pbWFUaGVtZSBleHRlbmRzIE1pbmltYUxpZ2h0LCBNaW5pbWFEYXJrIHsgfVxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICBodG1sRm9udFNpemU6IDE2LFxuICBmb250U2l6ZTogMTQsXG4gIGd1dHRlclRvcDogMSxcbiAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gIGRpc3BsYXk0OiB7XG4gICAgZm9udFNpemU6IDk2LFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMS41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTM6IHtcbiAgICBmb250U2l6ZTogNjAsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIGxldHRlclNwYWNpbmc6IC0wLjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5Mjoge1xuICAgIGZvbnRTaXplOiA0OCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMFxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkxOiB7XG4gICAgZm9udFNpemU6IDM0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjI1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgaGVhZGxpbmU6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIHN1YmhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTUsXG4gICAgbGluZUhlaWdodDogMjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nMjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBib2R5MToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBjYXB0aW9uOiB7XG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBvdmVybGluZToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMS41LFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZ1xufTtcbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uID0ge1xuICBzaXplOiAnNDhweCdcbn07XG5leHBvcnQgY29uc3QgaWNvbiA9IHtcbiAgZm9udFNpemU6ICcyNHB4J1xufTtcbmV4cG9ydCBjb25zdCBmaWVsZCA9IHtcbiAgYXBwZWFyYW5jZToge1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0OiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzAgLjVlbSdcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldEhvdmVyOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgZmllbGRzZXRGb2N1c2VkOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4J1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsRm9jdXNlZDoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VmZml4OiB7XG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEuNzVlbSknXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWxsZWQ6IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHggNXB4IDAgMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbScsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzAnXG4gICAgICAgIH0sXG4gICAgICAgICcmOmhvdmVyOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRm9jdXNlZDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsRm9jdXNlZDoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyTGFiZWxIb3Zlcjoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46ICcxLjc4MTI1ZW0gMCAwLjU5Mzc1ZW0nXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgbWFyZ2luOiAnMS43ODEyNWVtIDAgMC41OTM3NWVtJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0uNzVlbSknXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgekluZGV4ID0ge1xuICB0b29sYmFyOiAxMDAwLFxuICBkcmF3ZXI6IDExMDAsXG4gIG92ZXJsYXk6IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25zID0ge1xuICBjdXJ2ZXM6IHtcbiAgICBzdGFuZGFyZDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKScsXG4gICAgZGVjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMCwwLjAsMC4yLDEpJyxcbiAgICBhY2NlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC40LDAuMCwxLDEpJyxcbiAgICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuNiwxKSdcbiAgfSxcbiAgZHVyYXRpb25zOiB7XG4gICAgY29tcGxleDogMzc1LFxuICAgIGVudGVyaW5nOiAyMjUsXG4gICAgZXhpdGluZzogMTk1XG4gIH1cbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgVHlwb2dyYXBoeUNvbmZpZywgLy8gRG8gbm90IGRlbGV0ZSB0aGlzLCB0aGlzIGlzIG5lY2Vzc2FyeSB0byBnZW5lcmF0ZSB0aGUgdHlwZXMgY29ycmVjdGx5XG4gIElSaXBwbGVWYXJpYWJsZXMsIC8vIERvIG5vdCBkZWxldGUgdGhpcywgdGhpcyBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIHR5cGVzIGNvcnJlY3RseVxuICBEaXJcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xufVxuIiwiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyNmYWZhZmEnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyNmYWZhZmEnLFxuICAgIHRlcnRpYXJ5OiAnI2Y1ZjZmNycsXG4gICAgYmFzZTogJyNFMEUwRTAnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9O1xuICBkaXZpZGVyID0gJ3JnYmEoMCwgMCwgMCwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9ICcjMzMzJztcbiAgc2hhZG93ID0gJyMzMzMnO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjExKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMCwgMCwgMCwgMC40MyknXG4gIH07XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSgwLDAsMCwuNiknXG4gIH07XG4gIGJhciA9ICcjZjVmNWY1JztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIGZpZWxkLCB7XG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBsYWJlbENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBmaWxsZWQ6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYWRnZSA9IHt9O1xufVxuIiwiaW1wb3J0IHsgZmllbGQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBEaXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIGZpZWxkLCB7XG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBsYWJlbENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJyxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBmaWxsZWQ6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYWRnZSA9IHt9O1xuICAvLyBkaXJlY3Rpb24gPSBEaXIucnRsO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiTFlfVEhFTUVfTkFNRSIsIk5nTW9kdWxlIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJCcmVha3BvaW50cyIsIlJpcHBsZVZhcmlhYmxlcyIsIkRpciIsIkx5U3R5bGVVdGlscyIsIm1lcmdlRGVlcCIsImNvbnRyYXN0Iiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7b0JBS0NBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUseUJBQXlCO3dCQUNuQyxTQUFTLEVBQUU7NEJBQ1RDLFdBQVE7NEJBQ1IsRUFBRSxPQUFPLEVBQUVDLGdCQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTt5QkFDckQ7cUJBQ0Y7OytCQVhEOzs7Ozs7b0JBY0NGLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxTQUFTLEVBQUU7NEJBQ1RDLFdBQVE7NEJBQ1IsRUFBRSxPQUFPLEVBQUVDLGdCQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTt5QkFDcEQ7cUJBQ0Y7OzhCQXBCRDs7Ozs7O29CQXVCQ0MsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQzt3QkFDakQs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