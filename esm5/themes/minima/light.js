/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typography, iconButton, icon, input } from './variables';
import { LyStyleUtils } from '@alyle/ui';
/** @type {?} */
var contrast = '#fff';
/** @type {?} */
var shadow = '#333';
var MinimaLight = /** @class */ (function (_super) {
    tslib_1.__extends(MinimaLight, _super);
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
        _this.iconButton = iconButton;
        _this.icon = icon;
        return _this;
    }
    return MinimaLight;
}(LyStyleUtils));
export { MinimaLight };
if (false) {
    /** @type {?} */
    MinimaLight.prototype.name;
    /** @type {?} */
    MinimaLight.prototype.primary;
    /** @type {?} */
    MinimaLight.prototype.accent;
    /** @type {?} */
    MinimaLight.prototype.warn;
    /** @type {?} */
    MinimaLight.prototype.typography;
    /** @type {?} */
    MinimaLight.prototype.background;
    /** @type {?} */
    MinimaLight.prototype.text;
    /** @type {?} */
    MinimaLight.prototype.divider;
    /** @type {?} */
    MinimaLight.prototype.colorShadow;
    /** @type {?} */
    MinimaLight.prototype.shadow;
    /**
     * Components variables
     * @type {?}
     */
    MinimaLight.prototype.button;
    /** @type {?} */
    MinimaLight.prototype.radio;
    /** @type {?} */
    MinimaLight.prototype.menu;
    /** @type {?} */
    MinimaLight.prototype.drawer;
    /** @type {?} */
    MinimaLight.prototype.bar;
    /** @type {?} */
    MinimaLight.prototype.input;
    /** @type {?} */
    MinimaLight.prototype.iconButton;
    /** @type {?} */
    MinimaLight.prototype.icon;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQWUsWUFBWSxFQUFvQixNQUFNLFdBQVcsQ0FBQzs7QUFFeEUsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDOztBQUN4QixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDdEIsSUFBQTtJQUFpQyx1Q0FBWTs7O3FCQUNwQyxjQUFjO3dCQUNYO1lBQ1IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1Q7dUJBQ1E7WUFDUCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVDtxQkFDTTtZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNUOzJCQUNZLFVBQVU7MkJBQ1Y7WUFDWCxPQUFPLEVBQUUsU0FBUzs7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sUUFBQTthQUNQO1lBQ0QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7cUJBQ007WUFDTCxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtZQUNoQyxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLElBQUksRUFBRSxxQkFBcUI7U0FDNUI7d0JBQ1MscUJBQXFCOzRCQUNqQixNQUFNO3VCQUNYLE1BQU07Ozs7dUJBRU47WUFDUCxRQUFRLEVBQUUscUJBQXFCO1NBQ2hDO3NCQUNPO1lBQ04sZ0JBQWdCLEVBQUUscUJBQXFCO1NBQ3hDO3FCQUNNO1lBQ0wsRUFBRSxFQUFFLE1BQU07U0FDWDt1QkFDUTtZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0I7b0JBQ0ssU0FBUztzQkFDUDtZQUNOLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsU0FBUyxFQUFFLHFCQUFxQjs7WUFFaEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzNCOzJCQUNZLFVBQVU7cUJBQ2hCLElBQUk7OztzQkE3RGI7RUFLaUMsWUFBWSxFQXlENUMsQ0FBQTtBQXpERCx1QkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBvZ3JhcGh5LCBpY29uQnV0dG9uLCBpY29uLCBpbnB1dCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMeVN0eWxlVXRpbHMsIFR5cG9ncmFwaHlDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIEx5U3R5bGVVdGlscyBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHR5cG9ncmFwaHkgPSB0eXBvZ3JhcGh5O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNmNWY2ZjcnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4xMSknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge1xuICAgIGJnOiAnI2ZmZicgLy8gYmFja2dyb3VuZD5wcmltYXJ5XG4gIH07XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGlucHV0ID0ge1xuICAgIGxhYmVsOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJyxcbiAgICAvKiogZGVmYXVsdCBjb2xvciAqL1xuICAgIHdpdGhDb2xvcjogaW5wdXQud2l0aENvbG9yXG4gIH07XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbn1cbiJdfQ==