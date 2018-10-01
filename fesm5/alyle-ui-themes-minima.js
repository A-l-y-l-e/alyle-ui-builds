import { __extends } from 'tslib';
import { LyStyleUtils, LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import { RippleVariables } from '@alyle/ui/ripple';
import { NgModule, Directive } from '@angular/core';

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
var input = {
    /** default color */
    withColor: 'primary'
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
        _this.menu = {
            bg: '#fff' // background>primary
        };
        _this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        _this.bar = '#f5f5f5';
        _this.input = {
            label: 'rgba(0, 0, 0, 0.4)',
            underline: 'rgba(0, 0, 0, 0.11)',
            /** default color */
            withColor: input.withColor
        };
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
        _this.menu = {
            bg: '#424242' // background>primary
        };
        _this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        _this.bar = '#212121';
        _this.divider = 'rgba(255, 255, 255, 0.12)';
        _this.colorShadow = shadow$1;
        _this.shadow = shadow$1;
        _this.input = {
            label: 'rgba(255, 255, 255, 0.4)',
            underline: 'rgba(255, 255, 255, 0.11)',
            withColor: input.withColor
        };
        return _this;
    }
    return MinimaDark;
}(MinimaBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MinimaTheme = /** @class */ (function () {
    function MinimaTheme() {
        this.themes = [MinimaLight, MinimaDark];
    }
    return MinimaTheme;
}());
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
                },] },
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
                },] },
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
                },] },
    ];
    return ThemeMinimaModule;
}());

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

export { MinimaTheme, ThemeMinimaLight, ThemeMinimaDark, ThemeMinimaModule, typography, iconButton, icon, input, zIndex, animations, MinimaLight, MinimaDark, MinimaBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdmFyaWFibGVzLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9iYXNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9saWdodC50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvZGFyay50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICBodG1sRm9udFNpemU6IDE2LFxuICBmb250U2l6ZTogMTQsXG4gIGd1dHRlclRvcDogMSxcbiAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gIGRpc3BsYXk0OiB7XG4gICAgZm9udFNpemU6IDk2LFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMS41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTM6IHtcbiAgICBmb250U2l6ZTogNjAsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIGxldHRlclNwYWNpbmc6IC0wLjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5Mjoge1xuICAgIGZvbnRTaXplOiA0OCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMFxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkxOiB7XG4gICAgZm9udFNpemU6IDM0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjI1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgaGVhZGxpbmU6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIHN1YmhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTUsXG4gICAgbGluZUhlaWdodDogMjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nMjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBib2R5MToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBjYXB0aW9uOiB7XG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBvdmVybGluZToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMS41LFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZ1xufTtcbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uID0ge1xuICBzaXplOiAnNDhweCdcbn07XG5leHBvcnQgY29uc3QgaWNvbiA9IHtcbiAgZm9udFNpemU6ICcyNHB4J1xufTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9IHtcbiAgLyoqIGRlZmF1bHQgY29sb3IgKi9cbiAgd2l0aENvbG9yOiAncHJpbWFyeSdcbn07XG5cbmV4cG9ydCBjb25zdCB6SW5kZXggPSB7XG4gIHRvb2xiYXI6IDEwMDAsXG4gIGRyYXdlcjogMTEwMCxcbiAgb3ZlcmxheTogMTIwMFxufTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gIGN1cnZlczoge1xuICAgIHN0YW5kYXJkOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC4yLDEpJyxcbiAgICBkZWNlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC4wLDAuMCwwLjIsMSknLFxuICAgIGFjY2VsZXJhdGlvbjogJ2N1YmljLWJlemllcigwLjQsMC4wLDEsMSknLFxuICAgIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC42LDEpJ1xuICB9LFxuICBkdXJhdGlvbnM6IHtcbiAgICBjb21wbGV4OiAzNzUsXG4gICAgZW50ZXJpbmc6IDIyNSxcbiAgICBleGl0aW5nOiAxOTVcbiAgfVxufTtcbiIsImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgVHlwb2dyYXBoeUNvbmZpZyAvLyBEbyBub3QgZGVsZXRlIHRoaXMsIHRoaXMgaXMgbmVjZXNzYXJ5IHRvIGdlbmVyYXRlIHRoZSB0eXBlcyBjb3JyZWN0bHlcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xufVxuIiwiaW1wb3J0IHsgVGhlbWVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBNaW5pbWFCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5jb25zdCBzaGFkb3cgPSAnIzMzMyc7XG5leHBvcnQgY2xhc3MgTWluaW1hTGlnaHQgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1saWdodCc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyM2MjAwRUUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnI0ZGMjk5NycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI2Y1NDE0ZScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZhZmFmYScsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnI2ZhZmFmYScsXG4gICAgdGVydGlhcnk6ICcjZjVmNmY3JyxcbiAgICBiYXNlOiAnI0UwRTBFMCdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH07XG4gIGRpdmlkZXIgPSAncmdiYSgwLCAwLCAwLCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gJyMzMzMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBidXR0b24gPSB7XG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJ1xuICB9O1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgwLCAwLCAwLCAwLjQzKSdcbiAgfTtcbiAgbWVudSA9IHtcbiAgICBiZzogJyNmZmYnIC8vIGJhY2tncm91bmQ+cHJpbWFyeVxuICB9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDAsMCwwLC42KSdcbiAgfTtcbiAgYmFyID0gJyNmNWY1ZjUnO1xuICBpbnB1dCA9IHtcbiAgICBsYWJlbDogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgdW5kZXJsaW5lOiAncmdiYSgwLCAwLCAwLCAwLjExKScsXG4gICAgLyoqIGRlZmF1bHQgY29sb3IgKi9cbiAgICB3aXRoQ29sb3I6IGlucHV0LndpdGhDb2xvclxuICB9O1xufVxuIiwiaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5jb25zdCBzaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAxKSc7XG5leHBvcnQgY2xhc3MgTWluaW1hRGFyayBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWRhcmsnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjMURFOUI2JyxcbiAgICBjb250cmFzdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknXG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnIzlDMjdCMCcsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI0VBNDA0QycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCcsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjMmIyYjJiJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnIzMwMzAzMCcsXG4gICAgdGVydGlhcnk6ICcjMjEyMTIxJyxcbiAgICBiYXNlOiAnIzBFMEUwRSdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgcHJpbWFyeTogJyNmZmYnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknXG4gIH07XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBidXR0b24gPSB7XG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzApJ1xuICB9O1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSdcbiAgfTtcbiAgbWVudSA9IHtcbiAgICBiZzogJyM0MjQyNDInIC8vIGJhY2tncm91bmQ+cHJpbWFyeVxuICB9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDQ5LDQ5LDQ5LC42KSdcbiAgfTtcbiAgYmFyID0gJyMyMTIxMjEnO1xuICBkaXZpZGVyID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9IHNoYWRvdztcbiAgc2hhZG93ID0gc2hhZG93O1xuICBpbnB1dCA9IHtcbiAgICBsYWJlbDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgdW5kZXJsaW5lOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjExKScsXG4gICAgd2l0aENvbG9yOiBpbnB1dC53aXRoQ29sb3JcbiAgfTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUsIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUxpZ2h0IH0gZnJvbSAnLi9saWdodCc7XG5pbXBvcnQgeyBNaW5pbWFEYXJrIH0gZnJvbSAnLi9kYXJrJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYVRoZW1lIGltcGxlbWVudHMgTHlUaGVtZUNvbmZpZyB7XG4gIHRoZW1lcyA9IFtNaW5pbWFMaWdodCwgTWluaW1hRGFya107XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtbGlnaHRdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1saWdodCcgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTGlnaHQgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10aGVtZS1taW5pbWEtZGFya10nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeVRoZW1lMixcbiAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWRhcmsnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYURhcmsgeyB9XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF0sXG4gIGV4cG9ydHM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTW9kdWxlIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5pbWFUaGVtZSBleHRlbmRzIE1pbmltYUxpZ2h0LCBNaW5pbWFEYXJrIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiY29udHJhc3QiLCJzaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsSUFBYSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxZQUFZLEVBQUUsRUFBRTtJQUNoQixRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osWUFBWSxFQUFFLEdBQUc7SUFDakIsUUFBUSxvQkFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixhQUFhLEVBQUUsQ0FBQyxHQUFHO0tBQ0EsQ0FBQTtJQUNyQixRQUFRLG9CQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxDQUFDLEdBQUc7S0FDQSxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLENBQUM7S0FDRyxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxH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