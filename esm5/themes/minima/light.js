/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { input } from './variables';
import { MinimaBase } from './base';
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUVwQyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7O0FBQ3hCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN0QixJQUFBO0lBQWlDLHVDQUFVOzs7cUJBQ2xDLGNBQWM7d0JBQ1g7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVDt1QkFDUTtZQUNQLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNUO3FCQUNNO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1Q7MkJBQ1k7WUFDWCxPQUFPLEVBQUUsU0FBUzs7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sUUFBQTthQUNQO1lBQ0QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7cUJBQ007WUFDTCxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtZQUNoQyxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLElBQUksRUFBRSxxQkFBcUI7U0FDNUI7d0JBQ1MscUJBQXFCOzRCQUNqQixNQUFNO3VCQUNYLE1BQU07Ozs7dUJBRU47WUFDUCxRQUFRLEVBQUUscUJBQXFCO1NBQ2hDO3NCQUNPO1lBQ04sZ0JBQWdCLEVBQUUscUJBQXFCO1NBQ3hDO3FCQUNNO1lBQ0wsRUFBRSxFQUFFLE1BQU07U0FDWDt1QkFDUTtZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0I7b0JBQ0ssU0FBUztzQkFDUDtZQUNOLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsU0FBUyxFQUFFLHFCQUFxQjs7WUFFaEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzNCOzs7c0JBM0RIO0VBTWlDLFVBQVUsRUFzRDFDLENBQUE7QUF0REQsdUJBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBNaW5pbWFCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29udHJhc3QgPSAnI2ZmZic7XG5jb25zdCBzaGFkb3cgPSAnIzMzMyc7XG5leHBvcnQgY2xhc3MgTWluaW1hTGlnaHQgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1saWdodCc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyM2MjAwRUUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnI0ZGMjk5NycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI2Y1NDE0ZScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZhZmFmYScsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnI2ZhZmFmYScsXG4gICAgdGVydGlhcnk6ICcjZjVmNmY3JyxcbiAgICBiYXNlOiAnI0UwRTBFMCdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH07XG4gIGRpdmlkZXIgPSAncmdiYSgwLCAwLCAwLCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gJyMzMzMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBidXR0b24gPSB7XG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJ1xuICB9O1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgwLCAwLCAwLCAwLjQzKSdcbiAgfTtcbiAgbWVudSA9IHtcbiAgICBiZzogJyNmZmYnIC8vIGJhY2tncm91bmQ+cHJpbWFyeVxuICB9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDAsMCwwLC42KSdcbiAgfTtcbiAgYmFyID0gJyNmNWY1ZjUnO1xuICBpbnB1dCA9IHtcbiAgICBsYWJlbDogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgdW5kZXJsaW5lOiAncmdiYSgwLCAwLCAwLCAwLjExKScsXG4gICAgLyoqIGRlZmF1bHQgY29sb3IgKi9cbiAgICB3aXRoQ29sb3I6IGlucHV0LndpdGhDb2xvclxuICB9O1xufVxuIl19