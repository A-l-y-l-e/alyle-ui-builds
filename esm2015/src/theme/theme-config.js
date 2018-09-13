/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const THEME_CONFIG = new InjectionToken('ly.theme.config.root');
/** @type {?} */
export const LY_THEME_CONFIG = new InjectionToken('ly_theme_config');
/** @type {?} */
export const LY_THEME_NAME = new InjectionToken('ly.theme.name');
/**
 * @record
 */
export function ThemeConfig() { }
/** @type {?} */
ThemeConfig.prototype.name;
/** @type {?} */
ThemeConfig.prototype.primary;
/** @type {?} */
ThemeConfig.prototype.accent;
/** @type {?} */
ThemeConfig.prototype.warn;
/** @type {?} */
ThemeConfig.prototype.background;
/** @type {?} */
ThemeConfig.prototype.text;
/**
 * color for divider
 * @type {?}
 */
ThemeConfig.prototype.divider;
/** @type {?} */
ThemeConfig.prototype.shadow;
/**
 * @deprecated use shadow instead
 * @type {?|undefined}
 */
ThemeConfig.prototype.colorShadow;
/** @type {?} */
ThemeConfig.prototype.button;
/** @type {?} */
ThemeConfig.prototype.radio;
/** @type {?} */
ThemeConfig.prototype.menu;
/** @type {?} */
ThemeConfig.prototype.drawer;
/** @type {?} */
ThemeConfig.prototype.input;
/** @type {?} */
ThemeConfig.prototype.iconButton;
/** @type {?} */
ThemeConfig.prototype.icon;
/** @typedef {?} */
var PartialThemeConfig;
export { PartialThemeConfig };
export class LyThemeConfig {
    constructor() {
        this.themes = [];
    }
}
if (false) {
    /** @type {?} */
    LyThemeConfig.prototype.themes;
    /**
     * global variables
     * @type {?}
     */
    LyThemeConfig.prototype.variables;
}
/**
 * @record
 */
export function DefaultVal() { }
/** @type {?} */
DefaultVal.prototype.default;
/**
 * @record
 */
export function PaletteColor() { }
/** @type {?} */
PaletteColor.prototype.contrast;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0MsYUFBYSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQThCLHNCQUFzQixDQUFDLENBQUM7O0FBQ3BHLGFBQWEsZUFBZSxHQUFHLElBQUksY0FBYyxDQUFnQixpQkFBaUIsQ0FBQyxDQUFDOztBQUNwRixhQUFhLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBUyxlQUFlLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEekUsTUFBTTs7c0JBQ1ksRUFBRTs7Q0FHbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5LnRoZW1lLmNvbmZpZy5yb290Jyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEx5VGhlbWVDb25maWc+KCdseV90aGVtZV9jb25maWcnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgLyoqIHNlY29uZGFyeSAqL1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBzdHJpbmcsXG4gICAgc2Vjb25kYXJ5OiBzdHJpbmcsXG4gICAgdGVydGlhcnk6IHN0cmluZyxcbiAgICBiYXNlOiBzdHJpbmdcbiAgfTtcbiAgdGV4dDoge1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBzdHJpbmcsXG4gICAgc2Vjb25kYXJ5OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHN0cmluZyxcbiAgICBoaW50OiBzdHJpbmdcbiAgfTtcbiAgLyoqIGNvbG9yIGZvciBkaXZpZGVyICovXG4gIGRpdmlkZXI6IHN0cmluZztcbiAgc2hhZG93OiBzdHJpbmc7XG4gIC8qKiBAZGVwcmVjYXRlZCB1c2Ugc2hhZG93IGluc3RlYWQgKi9cbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XG4gIGJ1dHRvbjoge1xuICAgIGRpc2FibGVkOiBzdHJpbmc7XG4gIH07XG4gIHJhZGlvOiB7XG4gICAgLyoqIGNvbG9yIGZvciByYWRpbzpvdXRlckNpcmNsZSAqL1xuICAgIG91dGVyQ2lyY2xlPzogc3RyaW5nO1xuICAgIC8qKiBAZGVwcmVjYXRlZCB1c2Ugb3V0ZXJDaXJjbGUgaW5zdGVhZCAqL1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gIH07XG4gIG1lbnU6IHtcbiAgICBiZzogc3RyaW5nO1xuICB9O1xuICBkcmF3ZXI6IHtcbiAgICAvKiogY29sb3IgZm9yIGRyYXdlcjpiYWNrZHJvcCAqL1xuICAgIGJhY2tkcm9wOiBzdHJpbmdcbiAgfTtcbiAgaW5wdXQ6IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHVuZGVybGluZTogc3RyaW5nLFxuICAgIC8qKiBkZWZhdWx0IGNvbG9yICovXG4gICAgd2l0aENvbG9yOiBzdHJpbmdcbiAgfTtcbiAgaWNvbkJ1dHRvbjoge1xuICAgIHNpemU6IHN0cmluZztcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmc7XG4gIH07XG59XG5cblxuXG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVDb25maWcgPSBQYXJ0aWFsPFRoZW1lQ29uZmlnPjtcblxuZXhwb3J0IGNsYXNzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXM6IGFueVtdID0gW107XG4gIC8qKiBnbG9iYWwgdmFyaWFibGVzICovXG4gIHZhcmlhYmxlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdDogc3RyaW5nO1xufVxuIl19