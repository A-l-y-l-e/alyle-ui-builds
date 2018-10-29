/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { input } from './variables';
import { mergeDeep, Dir } from '@alyle/ui';
import { MinimaBase } from './base';
/** @type {?} */
var contrast = '#fff';
/** @type {?} */
var shadow = 'rgba(0, 0, 0, 1)';
var MinimaDark = /** @class */ (function (_super) {
    tslib_1.__extends(MinimaDark, _super);
    function MinimaDark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-dark';
        _this.primary = {
            default: '#1DE9B6',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        _this.accent = {
            default: '#9C27B0',
            contrast: contrast
        };
        _this.warn = {
            default: '#EA404C',
            contrast: contrast
        };
        _this.background = {
            default: '#303030',
            // secondary
            primary: {
                default: '#2b2b2b',
                shadow: shadow
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
        _this.colorShadow = shadow;
        _this.shadow = shadow;
        _this.input = mergeDeep({}, input, {
            /** @deprecated */
            label: 'rgba(255, 255, 255, 0.4)',
            /** @deprecated */
            underline: 'rgba(255, 255, 255, 0.11)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
        _this.direction = Dir.rtl; // beta
        return _this;
    }
    return MinimaDark;
}(MinimaBase));
export { MinimaDark };
if (false) {
    /** @type {?} */
    MinimaDark.prototype.name;
    /** @type {?} */
    MinimaDark.prototype.primary;
    /** @type {?} */
    MinimaDark.prototype.accent;
    /** @type {?} */
    MinimaDark.prototype.warn;
    /** @type {?} */
    MinimaDark.prototype.background;
    /** @type {?} */
    MinimaDark.prototype.text;
    /**
     * Components variables
     * @type {?}
     */
    MinimaDark.prototype.button;
    /** @type {?} */
    MinimaDark.prototype.radio;
    /** @type {?} */
    MinimaDark.prototype.menu;
    /** @type {?} */
    MinimaDark.prototype.drawer;
    /** @type {?} */
    MinimaDark.prototype.bar;
    /** @type {?} */
    MinimaDark.prototype.divider;
    /** @type {?} */
    MinimaDark.prototype.colorShadow;
    /** @type {?} */
    MinimaDark.prototype.shadow;
    /** @type {?} */
    MinimaDark.prototype.input;
    /** @type {?} */
    MinimaDark.prototype.direction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiZGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFlLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFFcEMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDOztBQUN4QixJQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyxJQUFBO0lBQWdDLHNDQUFVOzs7UUFDeEMsYUFBTyxhQUFhLENBQUM7UUFDckIsZ0JBQVU7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7UUFDRixlQUFTO1lBQ1AsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1QsQ0FBQztRQUNGLGFBQU87WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsbUJBQWE7WUFDWCxPQUFPLEVBQUUsU0FBUzs7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLFFBQUE7YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixhQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU07WUFDZixPQUFPLEVBQUUsTUFBTTtZQUNmLFNBQVMsRUFBRSwyQkFBMkI7WUFDdEMsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxJQUFJLEVBQUUsMkJBQTJCO1NBQ2xDLENBQUM7Ozs7UUFFRixlQUFTO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO1FBQ0YsY0FBUTtZQUNOLGdCQUFnQixFQUFFLDJCQUEyQjtTQUM5QyxDQUFDO1FBQ0YsYUFBTztZQUNMLEVBQUUsRUFBRSxTQUFTO1NBQ2QsQ0FBQztRQUNGLGVBQVM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1NBQzlCLENBQUM7UUFDRixZQUFNLFNBQVMsQ0FBQztRQUNoQixnQkFBVSwyQkFBMkIsQ0FBQztRQUN0QyxvQkFBYyxNQUFNLENBQUM7UUFDckIsZUFBUyxNQUFNLENBQUM7UUFDaEIsY0FBUSxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTs7WUFFM0IsS0FBSyxFQUFFLDBCQUEwQjs7WUFFakMsU0FBUyxFQUFFLDJCQUEyQjtZQUN0QyxXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFO3dCQUNULGVBQWUsRUFBRSwyQkFBMkI7cUJBQzdDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxrQkFBWSxHQUFHLENBQUMsR0FBRyxDQUFDOzs7cUJBcEV0QjtFQU1nQyxVQUFVLEVBK0R6QyxDQUFBO0FBL0RELHNCQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFEYXJrIGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtZGFyayc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyMxREU5QjYnLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjOUMyN0IwJyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjRUE0MDRDJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyMyYjJiMmInLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjMzAzMDMwJyxcbiAgICB0ZXJ0aWFyeTogJyMyMTIxMjEnLFxuICAgIGJhc2U6ICcjMEUwRTBFJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKSdcbiAgfTtcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXG4gIGJ1dHRvbiA9IHtcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJ1xuICB9O1xuICBtZW51ID0ge1xuICAgIGJnOiAnIzQyNDI0MicgLy8gYmFja2dyb3VuZD5wcmltYXJ5XG4gIH07XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gc2hhZG93O1xuICBzaGFkb3cgPSBzaGFkb3c7XG4gIGlucHV0ID0gbWVyZ2VEZWVwKHt9LCBpbnB1dCwge1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIGxhYmVsOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJyxcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICB1bmRlcmxpbmU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpJyxcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRpcmVjdGlvbiA9IERpci5ydGw7IC8vIGJldGFcbn1cbiJdfQ==