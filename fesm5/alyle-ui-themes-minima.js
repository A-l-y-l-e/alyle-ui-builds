import { __extends } from 'tslib';
import { LyStyleUtils, LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
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
        fontWeight: 500,
        letterSpacing: 0
    }),
    title: /** @type {?} */ ({
        fontSize: 20,
        fontWeight: 400,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var contrast = '#fff';
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
        _this.typography = typography;
        _this.background = {
            default: '#fafafa',
            // secondary
            primary: '#fff',
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
        _this.iconButton = iconButton;
        _this.icon = icon;
        return _this;
    }
    return MinimaLight;
}(LyStyleUtils));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var contrast$1 = '#fff';
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
        _this.typography = typography;
        _this.background = {
            default: '#303030',
            // secondary
            primary: '#2b2b2b',
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
        _this.colorShadow = 'rgba(0, 0, 0, 1)';
        _this.shadow = 'rgba(0, 0, 0, 1)';
        _this.input = {
            label: 'rgba(255, 255, 255, 0.4)',
            underline: 'rgba(255, 255, 255, 0.11)',
            withColor: input.withColor
        };
        _this.iconButton = iconButton;
        _this.icon = icon;
        return _this;
    }
    return MinimaDark;
}(LyStyleUtils));

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

export { MinimaTheme, ThemeMinimaLight, ThemeMinimaDark, ThemeMinimaModule, typography, iconButton, icon, input, MinimaLight, MinimaDark };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdmFyaWFibGVzLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9saWdodC50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvZGFyay50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICBodG1sRm9udFNpemU6IDE2LFxuICBmb250U2l6ZTogMTQsXG4gIGd1dHRlclRvcDogMSxcbiAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gIGRpc3BsYXk0OiB7XG4gICAgZm9udFNpemU6IDk2LFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMS41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTM6IHtcbiAgICBmb250U2l6ZTogNjAsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIGxldHRlclNwYWNpbmc6IC0wLjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5Mjoge1xuICAgIGZvbnRTaXplOiA0OCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMFxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkxOiB7XG4gICAgZm9udFNpemU6IDM0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjI1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgaGVhZGxpbmU6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIHN1YmhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTUsXG4gICAgbGluZUhlaWdodDogMjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nMjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBib2R5MToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBjYXB0aW9uOiB7XG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBvdmVybGluZToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMS41LFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZ1xufTtcbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uID0ge1xuICBzaXplOiAnNDhweCdcbn07XG5leHBvcnQgY29uc3QgaWNvbiA9IHtcbiAgZm9udFNpemU6ICcyNHB4J1xufTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9IHtcbiAgLyoqIGRlZmF1bHQgY29sb3IgKi9cbiAgd2l0aENvbG9yOiAncHJpbWFyeSdcbn07XG4iLCJpbXBvcnQgeyB0eXBvZ3JhcGh5LCBpY29uQnV0dG9uLCBpY29uLCBpbnB1dCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMeVN0eWxlVXRpbHMsIFR5cG9ncmFwaHlDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIEx5U3R5bGVVdGlscyBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHR5cG9ncmFwaHkgPSB0eXBvZ3JhcGh5O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeTogJyNmZmYnLFxuICAgIHNlY29uZGFyeTogJyNmYWZhZmEnLFxuICAgIHRlcnRpYXJ5OiAnI2Y1ZjZmNycsXG4gICAgYmFzZTogJyNFMEUwRTAnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9O1xuICBkaXZpZGVyID0gJ3JnYmEoMCwgMCwgMCwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9ICcjMzMzJztcbiAgc2hhZG93ID0gJyMzMzMnO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjExKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMCwgMCwgMCwgMC40MyknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjZmZmJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSgwLDAsMCwuNiknXG4gIH07XG4gIGJhciA9ICcjZjVmNWY1JztcbiAgaW5wdXQgPSB7XG4gICAgbGFiZWw6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgIHVuZGVybGluZTogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxuICAgIC8qKiBkZWZhdWx0IGNvbG9yICovXG4gICAgd2l0aENvbG9yOiBpbnB1dC53aXRoQ29sb3JcbiAgfTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xufVxuIiwiaW1wb3J0IHsgdHlwb2dyYXBoeSwgaWNvbkJ1dHRvbiwgaWNvbiwgaW5wdXQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTHlTdHlsZVV0aWxzLCBUeXBvZ3JhcGh5Q29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5leHBvcnQgY2xhc3MgTWluaW1hRGFyayBleHRlbmRzIEx5U3R5bGVVdGlscyBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtZGFyayc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyMxREU5QjYnLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjOUMyN0IwJyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjRUE0MDRDJyxcbiAgICBjb250cmFzdFxuICB9O1xuICB0eXBvZ3JhcGh5ID0gdHlwb2dyYXBoeTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCcsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6ICcjMmIyYjJiJyxcbiAgICBzZWNvbmRhcnk6ICcjMzAzMDMwJyxcbiAgICB0ZXJ0aWFyeTogJyMyMTIxMjEnLFxuICAgIGJhc2U6ICcjMEUwRTBFJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKSdcbiAgfTtcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJ1xuICB9O1xuICBtZW51ID0ge1xuICAgIGJnOiAnIzQyNDI0MicgLy8gYmFja2dyb3VuZD5wcmltYXJ5XG4gIH07XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuICBzaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAxKSc7XG4gIGlucHV0ID0ge1xuICAgIGxhYmVsOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJyxcbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpJyxcbiAgICB3aXRoQ29sb3I6IGlucHV0LndpdGhDb2xvclxuICB9O1xuICBpY29uQnV0dG9uID0gaWNvbkJ1dHRvbjtcbiAgaWNvbiA9IGljb247XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFMaWdodCB9IGZyb20gJy4vbGlnaHQnO1xuaW1wb3J0IHsgTWluaW1hRGFyayB9IGZyb20gJy4vZGFyayc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFUaGVtZSBpbXBsZW1lbnRzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXMgPSBbTWluaW1hTGlnaHQsIE1pbmltYURhcmtdO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsImNvbnRyYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxJQUFhLFVBQVUsR0FBRztJQUN4QixVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLENBQUM7SUFDWixZQUFZLEVBQUUsR0FBRztJQUNqQixRQUFRLG9CQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxDQUFDLEdBQUc7S0FDQSxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLENBQUMsR0FBRztLQUNBLENBQUE7SUFDckIsUUFBUSxvQkFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixhQUFhLEVBQUUsQ0FBQztLQUNHLENBQUE7SUFDckIsUUFBUSxvQkFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixhQUFhLEVBQUUsSUFBSTtLQUNBLENBQUE7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