import { LyStyleUtils, LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import { NgModule, Directive } from '@angular/core';

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
    /** default color */
    withColor: 'primary'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const contrast = '#fff';
/** @type {?} */
const shadow = '#333';
class MinimaLight extends LyStyleUtils {
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
        this.typography = typography;
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
        this.input = {
            label: 'rgba(0, 0, 0, 0.4)',
            underline: 'rgba(0, 0, 0, 0.11)',
            /** default color */
            withColor: input.withColor
        };
        this.iconButton = iconButton;
        this.icon = icon;
        this.breakpoints = Breakpoints;
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
class MinimaDark extends LyStyleUtils {
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
        this.typography = typography;
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
        this.input = {
            label: 'rgba(255, 255, 255, 0.4)',
            underline: 'rgba(255, 255, 255, 0.11)',
            withColor: input.withColor
        };
        this.iconButton = iconButton;
        this.icon = icon;
        this.breakpoints = Breakpoints;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MinimaTheme {
    constructor() {
        this.themes = [MinimaLight, MinimaDark];
    }
}
class ThemeMinimaLight {
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
class ThemeMinimaDark {
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
class ThemeMinimaModule {
}
ThemeMinimaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ThemeMinimaDark, ThemeMinimaLight],
                exports: [ThemeMinimaDark, ThemeMinimaLight]
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdmFyaWFibGVzLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS9saWdodC50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvZGFyay50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICBodG1sRm9udFNpemU6IDE2LFxuICBmb250U2l6ZTogMTQsXG4gIGd1dHRlclRvcDogMSxcbiAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gIGRpc3BsYXk0OiB7XG4gICAgZm9udFNpemU6IDk2LFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMS41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTM6IHtcbiAgICBmb250U2l6ZTogNjAsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIGxldHRlclNwYWNpbmc6IC0wLjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5Mjoge1xuICAgIGZvbnRTaXplOiA0OCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMFxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkxOiB7XG4gICAgZm9udFNpemU6IDM0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjI1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgaGVhZGxpbmU6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIHN1YmhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTUsXG4gICAgbGluZUhlaWdodDogMjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nMjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4xXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBib2R5MToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiA1MDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBjYXB0aW9uOiB7XG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBvdmVybGluZToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMS41LFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZ1xufTtcbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uID0ge1xuICBzaXplOiAnNDhweCdcbn07XG5leHBvcnQgY29uc3QgaWNvbiA9IHtcbiAgZm9udFNpemU6ICcyNHB4J1xufTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9IHtcbiAgLyoqIGRlZmF1bHQgY29sb3IgKi9cbiAgd2l0aENvbG9yOiAncHJpbWFyeSdcbn07XG4iLCJpbXBvcnQgeyB0eXBvZ3JhcGh5LCBpY29uQnV0dG9uLCBpY29uLCBpbnB1dCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMeVN0eWxlVXRpbHMsIFR5cG9ncmFwaHlDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTHlTdHlsZVV0aWxzIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1saWdodCc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyM2MjAwRUUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnI0ZGMjk5NycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI2Y1NDE0ZScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyNmYWZhZmEnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyNmYWZhZmEnLFxuICAgIHRlcnRpYXJ5OiAnI2Y1ZjZmNycsXG4gICAgYmFzZTogJyNFMEUwRTAnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9O1xuICBkaXZpZGVyID0gJ3JnYmEoMCwgMCwgMCwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9ICcjMzMzJztcbiAgc2hhZG93ID0gJyMzMzMnO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjExKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMCwgMCwgMCwgMC40MyknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjZmZmJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSgwLDAsMCwuNiknXG4gIH07XG4gIGJhciA9ICcjZjVmNWY1JztcbiAgaW5wdXQgPSB7XG4gICAgbGFiZWw6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgIHVuZGVybGluZTogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxuICAgIC8qKiBkZWZhdWx0IGNvbG9yICovXG4gICAgd2l0aENvbG9yOiBpbnB1dC53aXRoQ29sb3JcbiAgfTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xuICBicmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xufVxuIiwiaW1wb3J0IHsgdHlwb2dyYXBoeSwgaWNvbkJ1dHRvbiwgaWNvbiwgaW5wdXQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTHlTdHlsZVV0aWxzLCBUeXBvZ3JhcGh5Q29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFEYXJrIGV4dGVuZHMgTHlTdHlsZVV0aWxzIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHR5cG9ncmFwaHkgPSB0eXBvZ3JhcGh5O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyMyYjJiMmInLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjMzAzMDMwJyxcbiAgICB0ZXJ0aWFyeTogJyMyMTIxMjEnLFxuICAgIGJhc2U6ICcjMEUwRTBFJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKSdcbiAgfTtcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJ1xuICB9O1xuICBtZW51ID0ge1xuICAgIGJnOiAnIzQyNDI0MicgLy8gYmFja2dyb3VuZD5wcmltYXJ5XG4gIH07XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gc2hhZG93O1xuICBzaGFkb3cgPSBzaGFkb3c7XG4gIGlucHV0ID0ge1xuICAgIGxhYmVsOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJyxcbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpJyxcbiAgICB3aXRoQ29sb3I6IGlucHV0LndpdGhDb2xvclxuICB9O1xuICBpY29uQnV0dG9uID0gaWNvbkJ1dHRvbjtcbiAgaWNvbiA9IGljb247XG4gIGJyZWFrcG9pbnRzID0gQnJlYWtwb2ludHM7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBNaW5pbWFMaWdodCB9IGZyb20gJy4vbGlnaHQnO1xuaW1wb3J0IHsgTWluaW1hRGFyayB9IGZyb20gJy4vZGFyayc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFUaGVtZSBpbXBsZW1lbnRzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXMgPSBbTWluaW1hTGlnaHQsIE1pbmltYURhcmtdO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiJdLCJuYW1lcyI6WyJjb250cmFzdCIsInNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBYSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxZQUFZLEVBQUUsRUFBRTtJQUNoQixRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osWUFBWSxFQUFFLEdBQUc7SUFDakIsUUFBUSxvQkFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixhQUFhLEVBQUUsQ0FBQyxHQUFHO0tBQ0EsQ0FBQTtJQUNyQixRQUFRLG9CQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxDQUFDLEdBQUc7S0FDQSxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLENBQUM7S0FDRyxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLElBQUk7S0FDQSxDQUFBO0lBQ3JCLFFBQVEsb0JBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLENBQUM7S0FDRyxDQUFBO0lBQ3JCLEtBQUssb0JBQUU7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLElBQUk7S0FDQSxDQUFBO0lBQ3JCLFVBQVUsb0JBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLEVBQUU7S0FDSyxDQUFBO0lBQ3JCLFdBQVcsb0JBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLEdBQUc7S0FDQyxDQUFBO0lBQ3JCLEtBQUssb0JBQUU7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLElBQUk7S0FDQSxDQUFBO0lBQ3JCLEtBQUssb0JBQUU7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLElBQUk7S0FDQSxDQUFBO0lBQ3JCLE1BQU0sb0JBQUU7UUFDTixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO0tBQ0ksQ0FBQTtJQUNyQixPQUFPLG9CQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxHQUFHO0tBQ0MsQ0FBQTtJQUNyQixRQUFRLG9CQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxHQUFHO1FBQ2xCLGFBQWEsRUFBRSxXQUFXO0tBQ1AsQ0FBQTtDQUN0QixDQUFDOztBQUNGLE1BQWEsVUFBVSxHQUFHO0lBQ3hCLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQzs7QUFDRixNQUFhLElBQUksR0FBRztJQUNsQixRQUFRLEVBQUUsTUFBTTtDQUNqQixDQUFDOztBQUNGLE1BQWEsS0FBSyxHQUFHOztJQUVuQixTQUFTLEVBQUUsU0FBUztDQUNyQjs7Ozs7O0FDcEZEO0FBSUEsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDOztBQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDdEIsaUJBQXlCLFNBQVEsWUFBWTs7O29CQUNwQyxjQUFjO3VCQUNYO1lBQ1IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUTtTQUNUO3NCQUNRO1lBQ1AsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUTtTQUNUO29CQUNNO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUTtTQUNUOzBCQUNZLFVBQVU7MEJBQ1Y7WUFDWCxPQUFPLEVBQUUsU0FBUzs7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU07YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCO29CQUNNO1lBQ0wsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixJQUFJLEVBQUUscUJBQXFCO1NBQzVCO3VCQUNTLHFCQUFxQjsyQkFDakIsTUFBTTtzQkFDWCxNQUFNOzs7O3NCQUVOO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQztxQkFDTztZQUNOLGdCQUFnQixFQUFFLHFCQUFxQjtTQUN4QztvQkFDTTtZQUNMLEVBQUUsRUFBRSxNQUFNO1NBQ1g7c0JBQ1E7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCO21CQUNLLFNBQVM7cUJBQ1A7WUFDTixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLFNBQVMsRUFBRSxxQkFBcUI7O1lBRWhDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUMzQjswQkFDWSxVQUFVO29CQUNoQixJQUFJOzJCQUNHLFdBQVc7O0NBQzFCOzs7Ozs7QUNoRUQ7QUFJQSxNQUFNQSxVQUFRLEdBQUcsTUFBTSxDQUFDOztBQUN4QixNQUFNQyxRQUFNLEdBQUcsa0JBQWtCLENBQUM7QUFDbEMsZ0JBQXdCLFNBQVEsWUFBWTs7O29CQUNuQyxhQUFhO3VCQUNWO1lBQ1IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQztzQkFDUTtZQUNQLE9BQU8sRUFBRSxTQUFTO3NCQUNsQkQsVUFBUTtTQUNUO29CQUNNO1lBQ0wsT0FBTyxFQUFFLFNBQVM7c0JBQ2xCQSxVQUFRO1NBQ1Q7MEJBQ1ksVUFBVTswQkFDVjtZQUNYLE9BQU8sRUFBRSxTQUFTOztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFNBQVM7d0JBQ2xCQyxRQUFNO2FBQ1A7WUFDRCxTQUFTLEVBQUUsU0FBUztZQUNwQixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsU0FBUztTQUNoQjtvQkFDTTtZQUNMLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLE1BQU07WUFDZixTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsSUFBSSxFQUFFLDJCQUEyQjtTQUNsQzs7OztzQkFFUTtZQUNQLFFBQVEsRUFBRSwyQkFBMkI7U0FDdEM7cUJBQ087WUFDTixnQkFBZ0IsRUFBRSwyQkFBMkI7U0FDOUM7b0JBQ007WUFDTCxFQUFFLEVBQUUsU0FBUztTQUNkO3NCQUNRO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtTQUM5QjttQkFDSyxTQUFTO3VCQUNMLDJCQUEyQjsyQkFDdkJBLFFBQU07c0JBQ1hBLFFBQU07cUJBQ1A7WUFDTixLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLFNBQVMsRUFBRSwyQkFBMkI7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzNCOzBCQUNZLFVBQVU7b0JBQ2hCLElBQUk7MkJBQ0csV0FBVzs7Q0FDMUI7Ozs7OztBQy9ERDs7c0JBTVcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDOztDQUNuQzs7OztZQUVBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxTQUFTLEVBQUU7b0JBQ1QsUUFBUTtvQkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtpQkFDckQ7YUFDRjs7QUFVRDs7O1lBUEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRTtvQkFDVCxRQUFRO29CQUNSLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2lCQUNwRDthQUNGOztBQU9EOzs7WUFKQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7YUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9