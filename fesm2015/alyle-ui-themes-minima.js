import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2, LyStyleUtils } from '@alyle/ui';
import { Breakpoints } from '@alyle/ui/responsive';
import { RippleVariables } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @type {?} */
const zIndex = {
    toolbar: 1000,
    drawer: 1100,
    overlay: 1200
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    }
}

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

export { ThemeMinimaLight, ThemeMinimaDark, ThemeMinimaModule, typography, iconButton, icon, input, zIndex, animations, MinimaLight, MinimaDark, MinimaBase as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGhlbWVzLW1pbmltYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvdGhlbWUudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL3ZhcmlhYmxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvYmFzZS50cyIsIm5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvbGlnaHQudHMiLCJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hL2RhcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hTGlnaHQgfSBmcm9tICcuL2xpZ2h0JztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWxpZ2h0XScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5VGhlbWUyLFxuICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlUaGVtZTIsXG4gICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogJ21pbmltYS1kYXJrJyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNaW5pbWFEYXJrIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdLFxuICBleHBvcnRzOiBbVGhlbWVNaW5pbWFEYXJrLCBUaGVtZU1pbmltYUxpZ2h0XVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYU1vZHVsZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluaW1hVGhlbWUgZXh0ZW5kcyBNaW5pbWFMaWdodCwgTWluaW1hRGFyayB7IH1cbiIsImltcG9ydCB7IFR5cG9ncmFwaHlDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeSA9IHtcbiAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgaHRtbEZvbnRTaXplOiAxNixcbiAgZm9udFNpemU6IDE0LFxuICBndXR0ZXJUb3A6IDEsXG4gIGd1dHRlckJvdHRvbTogLjM1LFxuICBkaXNwbGF5NDoge1xuICAgIGZvbnRTaXplOiA5NixcbiAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgbGV0dGVyU3BhY2luZzogLTEuNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGRpc3BsYXkzOiB7XG4gICAgZm9udFNpemU6IDYwLFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMC41XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgZGlzcGxheTI6IHtcbiAgICBmb250U2l6ZTogNDgsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDBcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBkaXNwbGF5MToge1xuICAgIGZvbnRTaXplOiAzNCxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC4yNVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGhlYWRsaW5lOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMTVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBzdWJoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1LFxuICAgIGxpbmVIZWlnaHQ6IDI0XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgc3ViaGVhZGluZzI6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMVxuICB9IGFzIFR5cG9ncmFwaHlDb25maWcsXG4gIGJvZHkyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLjE1XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgYm9keTE6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDAuMjVcbiAgfSBhcyBUeXBvZ3JhcGh5Q29uZmlnLFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwXG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgY2FwdGlvbjoge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMC40XG4gIH0gYXMgVHlwb2dyYXBoeUNvbmZpZyxcbiAgb3ZlcmxpbmU6IHtcbiAgICBmb250U2l6ZTogMTAsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxldHRlclNwYWNpbmc6IDEuNSxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9IGFzIFR5cG9ncmFwaHlDb25maWdcbn07XG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvbiA9IHtcbiAgc2l6ZTogJzQ4cHgnXG59O1xuZXhwb3J0IGNvbnN0IGljb24gPSB7XG4gIGZvbnRTaXplOiAnMjRweCdcbn07XG5leHBvcnQgY29uc3QgaW5wdXQgPSB7XG4gIC8qKiBkZWZhdWx0IGNvbG9yICovXG4gIHdpdGhDb2xvcjogJ3ByaW1hcnknXG59O1xuXG5leHBvcnQgY29uc3QgekluZGV4ID0ge1xuICB0b29sYmFyOiAxMDAwLFxuICBkcmF3ZXI6IDExMDAsXG4gIG92ZXJsYXk6IDEyMDBcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25zID0ge1xuICBjdXJ2ZXM6IHtcbiAgICBzdGFuZGFyZDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKScsXG4gICAgZGVjZWxlcmF0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMCwwLjAsMC4yLDEpJyxcbiAgICBhY2NlbGVyYXRpb246ICdjdWJpYy1iZXppZXIoMC40LDAuMCwxLDEpJyxcbiAgICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsMC4wLDAuNiwxKSdcbiAgfSxcbiAgZHVyYXRpb25zOiB7XG4gICAgY29tcGxleDogMzc1LFxuICAgIGVudGVyaW5nOiAyMjUsXG4gICAgZXhpdGluZzogMTk1XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuICBMeVN0eWxlVXRpbHMsXG4gIFR5cG9ncmFwaHlDb25maWcgLy8gRG8gbm90IGRlbGV0ZSB0aGlzLCB0aGlzIGlzIG5lY2Vzc2FyeSB0byBnZW5lcmF0ZSB0aGUgdHlwZXMgY29ycmVjdGx5XG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyB0eXBvZ3JhcGh5LCBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBCcmVha3BvaW50cyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB0eXBvZ3JhcGh5O1xuICBpY29uQnV0dG9uID0gaWNvbkJ1dHRvbjtcbiAgaWNvbiA9IGljb247XG4gIGJyZWFrcG9pbnRzID0gQnJlYWtwb2ludHM7XG4gIHpJbmRleCA9IHpJbmRleDtcbiAgcmlwcGxlID0gUmlwcGxlVmFyaWFibGVzO1xuICBhbmltYXRpb25zID0gYW5pbWF0aW9ucztcbn1cbiIsImltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyNmYWZhZmEnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyNmYWZhZmEnLFxuICAgIHRlcnRpYXJ5OiAnI2Y1ZjZmNycsXG4gICAgYmFzZTogJyNFMEUwRTAnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9O1xuICBkaXZpZGVyID0gJ3JnYmEoMCwgMCwgMCwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9ICcjMzMzJztcbiAgc2hhZG93ID0gJyMzMzMnO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjExKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMCwgMCwgMCwgMC40MyknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjZmZmJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSgwLDAsMCwuNiknXG4gIH07XG4gIGJhciA9ICcjZjVmNWY1JztcbiAgaW5wdXQgPSB7XG4gICAgbGFiZWw6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgIHVuZGVybGluZTogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxuICAgIC8qKiBkZWZhdWx0IGNvbG9yICovXG4gICAgd2l0aENvbG9yOiBpbnB1dC53aXRoQ29sb3JcbiAgfTtcbn1cbiIsImltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjNDI0MjQyJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgaW5wdXQgPSB7XG4gICAgbGFiZWw6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIHVuZGVybGluZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSknLFxuICAgIHdpdGhDb2xvcjogaW5wdXQud2l0aENvbG9yXG4gIH07XG59XG4iXSwibmFtZXMiOlsiY29udHJhc3QiLCJzaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7WUFLQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsU0FBUyxFQUFFO29CQUNULFFBQVE7b0JBQ1IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7aUJBQ3JEO2FBQ0Y7O0FBVUQ7OztZQVBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUU7b0JBQ1QsUUFBUTtvQkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtpQkFDcEQ7YUFDRjs7QUFPRDs7O1lBSkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2FBQzdDOzs7Ozs7OztBQ3hCRCxNQUFhLFVBQVUsR0FBRztJQUN4QixVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLENBQUM7SUFDWixZQUFZLEVBQUUsR0FBRztJQUNqQixRQUFRLG9CQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNm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