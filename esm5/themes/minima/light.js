/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { mergeDeep, Dir } from '@alyle/ui';
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
        _this.input = mergeDeep({}, input, {
            /** @deprecated */
            label: 'rgba(0, 0, 0, 0.6)',
            /** @deprecated */
            underline: 'rgba(0, 0, 0, 0.11)',
            borderColor: 'rgba(0, 0, 0, 0.12)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
        _this.direction = Dir.ltr;
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
    /** @type {?} */
    MinimaLight.prototype.direction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUVwQyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7O0FBQ3hCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN0QixJQUFBO0lBQWlDLHVDQUFVOzs7UUFDekMsYUFBTyxjQUFjLENBQUM7UUFDdEIsZ0JBQVU7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsZUFBUztZQUNQLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNULENBQUM7UUFDRixhQUFPO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1QsQ0FBQztRQUNGLG1CQUFhO1lBQ1gsT0FBTyxFQUFFLFNBQVM7O1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLFFBQUE7YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixhQUFPO1lBQ0wsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixJQUFJLEVBQUUscUJBQXFCO1NBQzVCLENBQUM7UUFDRixnQkFBVSxxQkFBcUIsQ0FBQztRQUNoQyxvQkFBYyxNQUFNLENBQUM7UUFDckIsZUFBUyxNQUFNLENBQUM7Ozs7UUFFaEIsZUFBUztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQUNGLGNBQVE7WUFDTixnQkFBZ0IsRUFBRSxxQkFBcUI7U0FDeEMsQ0FBQztRQUNGLGFBQU87WUFDTCxFQUFFLEVBQUUsTUFBTTtTQUNYLENBQUM7UUFDRixlQUFTO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO1FBQ0YsWUFBTSxTQUFTLENBQUM7UUFDaEIsY0FBUSxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTs7WUFFM0IsS0FBSyxFQUFFLG9CQUFvQjs7WUFFM0IsU0FBUyxFQUFFLHFCQUFxQjtZQUNoQyxXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFO3dCQUNULGVBQWUsRUFBRSxxQkFBcUI7cUJBQ3ZDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxrQkFBWSxHQUFHLENBQUMsR0FBRyxDQUFDOzs7c0JBcEV0QjtFQU1pQyxVQUFVLEVBK0QxQyxDQUFBO0FBL0RELHVCQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29uZmlnLCBtZXJnZURlZXAsIERpciB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBpbnB1dCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWxpZ2h0JztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzYyMDBFRScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjRkYyOTk3JyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjZjU0MTRlJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNmNWY2ZjcnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzMyc7XG4gIHNoYWRvdyA9ICcjMzMzJztcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4xMSknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJ1xuICB9O1xuICBtZW51ID0ge1xuICAgIGJnOiAnI2ZmZicgLy8gYmFja2dyb3VuZD5wcmltYXJ5XG4gIH07XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoMCwwLDAsLjYpJ1xuICB9O1xuICBiYXIgPSAnI2Y1ZjVmNSc7XG4gIGlucHV0ID0gbWVyZ2VEZWVwKHt9LCBpbnB1dCwge1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIGxhYmVsOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJyxcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRpcmVjdGlvbiA9IERpci5sdHI7XG59XG4iXX0=