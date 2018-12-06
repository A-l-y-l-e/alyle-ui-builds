(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/responsive')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/themes/minima', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/responsive'], factory) :
    (factory((global.ly = global.ly || {}, global.ly['themes/minima'] = {}),global.ng.core,global.ly.core,global.ly.responsive));
}(this, (function (exports,core,ui,responsive) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ThemeMinimaLight = /** @class */ (function () {
        function ThemeMinimaLight() {
        }
        ThemeMinimaLight.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ly-theme-minima-light]',
                        providers: [ui.LyTheme2, { provide: ui.LY_THEME_NAME, useValue: 'minima-light' }]
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
                        providers: [ui.LyTheme2, { provide: ui.LY_THEME_NAME, useValue: 'minima-dark' }]
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
            _this.breakpoints = responsive.Breakpoints;
            _this.zIndex = zIndex;
            _this.ripple = RippleVariables;
            _this.animations = animations;
            _this.direction = ui.Dir.ltr;
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
    }(ui.LyStyleUtils));

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
            _this.checkbox = {
                unchecked: {
                    color: 'rgba(0, 0, 0, .54)'
                }
            };
            _this.snackBar = {
                root: {
                    background: '#323232',
                    color: 'rgba(255,255,255,.7)'
                }
            };
            _this.tooltip = {
                root: {
                    background: 'rgba(50, 50, 50, 0.85)',
                    color: 'rgba(255,255,255,.7)'
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
            // direction = Dir.rtl; // beta
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

    exports.ThemeMinimaLight = ThemeMinimaLight;
    exports.ThemeMinimaDark = ThemeMinimaDark;
    exports.ThemeMinimaModule = ThemeMinimaModule;
    exports.MinimaLight = MinimaLight;
    exports.MinimaDark = MinimaDark;
    exports.ɵa = MinimaBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3RoZW1lLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdmFyaWFibGVzLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9iYXNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9saWdodC50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvZGFyay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFMaWdodCB9IGZyb20gJy4vbGlnaHQnO1xuaW1wb3J0IHsgTWluaW1hRGFyayB9IGZyb20gJy4vZGFyayc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtbGlnaHRdJyxcbiAgcHJvdmlkZXJzOiBbIEx5VGhlbWUyLCB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWxpZ2h0JyB9IF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFMaWdodCB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1kYXJrXScsXG4gIHByb3ZpZGVyczogWyBMeVRoZW1lMiwgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9IF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiXG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeSA9IHtcbiAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgaHRtbEZvbnRTaXplOiAxNixcbiAgZm9udFNpemU6IDE0LFxuICBndXR0ZXJUb3A6IDEsXG4gIGd1dHRlckJvdHRvbTogLjM1LFxuICBseVR5cDoge1xuICAgIGRpc3BsYXk0OiB7XG4gICAgICBmb250U2l6ZTogOTYsXG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMS41XG4gICAgfSxcbiAgICBkaXNwbGF5Mzoge1xuICAgICAgZm9udFNpemU6IDYwLFxuICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogLTAuNVxuICAgIH0sXG4gICAgZGlzcGxheTI6IHtcbiAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICB9LFxuICAgIGRpc3BsYXkxOiB7XG4gICAgICBmb250U2l6ZTogMzQsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjI1XG4gICAgfSxcbiAgICBoZWFkbGluZToge1xuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgICB9LFxuICAgIHN1YmhlYWRpbmc6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMTUsXG4gICAgICBsaW5lSGVpZ2h0OiAyNFxuICAgIH0sXG4gICAgc3ViaGVhZGluZzI6IHtcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMVxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjI1XG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH0sXG4gICAgY2FwdGlvbjoge1xuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMC40XG4gICAgfSxcbiAgICBvdmVybGluZToge1xuICAgICAgZm9udFNpemU6IDEwLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogMS41LFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvbiA9IHtcbiAgc2l6ZTogJzQ4cHgnXG59O1xuZXhwb3J0IGNvbnN0IGljb24gPSB7XG4gIGZvbnRTaXplOiAnMjRweCdcbn07XG5leHBvcnQgY29uc3QgZmllbGQgPSB7XG4gIGFwcGVhcmFuY2U6IHtcbiAgICBvdXRsaW5lZDoge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgIH0sXG4gICAgICBmaWVsZHNldDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIC41ZW0nXG4gICAgICB9LFxuICAgICAgZmllbGRzZXRIb3Zlcjoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGZpZWxkc2V0Rm9jdXNlZDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzJweCdcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEZvY3VzZWQ6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1ZmZpeDoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMS4xODc1ZW0gMCdcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzEuMTg3NWVtIDAnXG4gICAgICB9LFxuICAgICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjc1ZW0pJ1xuICAgICAgfSxcbiAgICAgIGhpbnQ6IHtcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZmlsbGVkOiB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnLFxuICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcwJ1xuICAgICAgICB9LFxuICAgICAgICAnJjpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckZvY3VzZWQ6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb250YWluZXJMYWJlbEZvY3VzZWQ6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckxhYmVsSG92ZXI6IHtcbiAgICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFyZ2luOiAnMS43ODEyNWVtIDAgMC41OTM3NWVtJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIG1hcmdpbjogJzEuNzgxMjVlbSAwIDAuNTkzNzVlbSdcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBtYXJnaW46ICcxLjE4NzVlbSAwJ1xuICAgICAgfSxcbiAgICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtLjc1ZW0pJ1xuICAgICAgfSxcbiAgICAgIGhpbnQ6IHtcbiAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHpJbmRleCA9IHtcbiAgdG9vbGJhcjogMTAwMCxcbiAgZHJhd2VyOiAxMTAwLFxuICBvdmVybGF5OiAxMjAwXG59O1xuXG5leHBvcnQgY29uc3QgUmlwcGxlVmFyaWFibGVzID0ge1xuICB0cmFuc2l0aW9uOiB7XG4gICAgb3BhY2l0eTogJ2N1YmljLWJlemllcigwLjQsMC4wLDEsMSknLFxuICAgIHRyYW5zZm9ybTogJ2N1YmljLWJlemllcigwLCAxLCAwLjYsIDEpJ1xuICB9LFxuICBkdXJhdGlvbjogOTUwXG59O1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgY3VydmVzOiB7XG4gICAgc3RhbmRhcmQ6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwwLjIsMSknLFxuICAgIGRlY2VsZXJhdGlvbjogJ2N1YmljLWJlemllcigwLjAsMC4wLDAuMiwxKScsXG4gICAgYWNjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMSwxKScsXG4gICAgc2hhcnA6ICdjdWJpYy1iZXppZXIoMC40LDAuMCwwLjYsMSknXG4gIH0sXG4gIGR1cmF0aW9uczoge1xuICAgIGNvbXBsZXg6IDM3NSxcbiAgICBlbnRlcmluZzogMjI1LFxuICAgIGV4aXRpbmc6IDE5NVxuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgTHlTdHlsZVV0aWxzLFxuICBEaXJcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucywgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xuICBidXR0b24gPSB7XG4gICAgc2l6ZToge1xuICAgICAgc21hbGw6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0odGhpcy50eXBvZ3JhcGh5Lmx5VHlwLmJ1dHRvbi5mb250U2l6ZSAtIDEpLFxuICAgICAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc0OHB4J1xuICAgICAgfSksXG4gICAgICBtZWRpdW06ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc2NHB4J1xuICAgICAgfSksXG4gICAgICBsYXJnZTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0odGhpcy50eXBvZ3JhcGh5Lmx5VHlwLmJ1dHRvbi5mb250U2l6ZSArIDEpLFxuICAgICAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc5NnB4J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBmYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc1NnB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNTZweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBtaW5pRmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnMCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBmaWVsZCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWxpZ2h0JztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzYyMDBFRScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjRkYyOTk3JyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjZjU0MTRlJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBkaXNhYmxlZCA9ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJztcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZhZmFmYScsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnI2ZhZmFmYScsXG4gICAgdGVydGlhcnk6ICcjZWZlZmVmJyxcbiAgICBiYXNlOiAnI0UwRTBFMCdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH07XG4gIGRpdmlkZXIgPSAncmdiYSgwLCAwLCAwLCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gJyMzMzMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgwLCAwLCAwLCAwLjQzKSdcbiAgfTtcbiAgbWVudSA9IHt9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDAsMCwwLC42KSdcbiAgfTtcbiAgYmFyID0gJyNmNWY1ZjUnO1xuICBmaWVsZCA9IG1lcmdlRGVlcCh7fSwgZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhZGdlID0ge307XG4gIGNoZWNrYm94ID0ge1xuICAgIHVuY2hlY2tlZDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIC41NCknXG4gICAgfVxuICB9O1xuICBzbmFja0JhciA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMyMzIzMicsXG4gICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjcpJ1xuICAgIH1cbiAgfTtcbiAgdG9vbHRpcCA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSg1MCwgNTAsIDUwLCAwLjg1KScsXG4gICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjcpJ1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5jb25zdCBzaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAxKSc7XG5leHBvcnQgY2xhc3MgTWluaW1hRGFyayBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWRhcmsnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjMURFOUI2JyxcbiAgICBjb250cmFzdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknXG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnIzlDMjdCMCcsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI0VBNDA0QycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgZGlzYWJsZWQgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSc7XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIGZpZWxkLCB7XG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBsYWJlbENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJyxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBmaWxsZWQ6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYWRnZSA9IHt9O1xuICBjaGVja2JveCA9IHtcbiAgICB1bmNoZWNrZWQ6IHtcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJ1xuICAgIH1cbiAgfTtcbiAgc25hY2tCYXIgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJyNmYWZhZmEnLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknXG4gICAgfVxuICB9O1xuICB0b29sdGlwID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1MCwgMjUwLCAyNTAsIDAuODUpJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJ1xuICAgIH1cbiAgfTtcbiAgLy8gZGlyZWN0aW9uID0gRGlyLnJ0bDsgLy8gYmV0YVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiTFlfVEhFTUVfTkFNRSIsIk5nTW9kdWxlIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJCcmVha3BvaW50cyIsIkRpciIsIkx5U3R5bGVVdGlscyIsIm1lcmdlRGVlcCIsImNvbnRyYXN0Iiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFLQTtTQUlpQzs7b0JBSmhDQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHlCQUF5Qjt3QkFDbkMsU0FBUyxFQUFFLENBQUVDLFdBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRUMsZ0JBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUU7cUJBQzlFOztRQUMrQix1QkFBQztLQUpqQyxJQUlpQzs7UUFFakM7U0FJZ0M7O29CQUovQkYsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFNBQVMsRUFBRSxDQUFFQyxXQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUVDLGdCQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFFO3FCQUM3RTs7UUFDOEIsc0JBQUM7S0FKaEMsSUFJZ0M7O1FBRWhDO1NBSWtDOztvQkFKakNDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7d0JBQ2pELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztxQkFDN0M7O1FBQ2dDLHdCQUFDO0tBSmxDOztJQ2pCQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FB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