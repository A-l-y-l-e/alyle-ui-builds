/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { mergeDeep } from '@alyle/ui';
import { field } from './variables';
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
        _this.disabled = 'rgba(0, 0, 0, 0.11)';
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
        _this.radio = {
            radioOuterCircle: 'rgba(0, 0, 0, 0.43)'
        };
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        _this.bar = '#f5f5f5';
        _this.field = mergeDeep({}, field, {
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
    MinimaLight.prototype.disabled;
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
    MinimaLight.prototype.radio;
    /** @type {?} */
    MinimaLight.prototype.menu;
    /** @type {?} */
    MinimaLight.prototype.drawer;
    /** @type {?} */
    MinimaLight.prototype.bar;
    /** @type {?} */
    MinimaLight.prototype.field;
    /** @type {?} */
    MinimaLight.prototype.badge;
    /** @type {?} */
    MinimaLight.prototype.checkbox;
    /** @type {?} */
    MinimaLight.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFNBQVMsRUFBTyxNQUFNLFdBQVcsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7O0lBRTlCLFFBQVEsR0FBRyxNQUFNOztJQUNqQixNQUFNLEdBQUcsTUFBTTtBQUNyQjtJQUFpQyx1Q0FBVTtJQUEzQztRQUFBLHFFQW1FQztRQWxFQyxVQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3RCLGFBQU8sR0FBRztZQUNSLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNULENBQUM7UUFDRixZQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsVUFBSSxHQUFHO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1QsQ0FBQztRQUNGLGNBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUNqQyxnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7O1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLFFBQUE7YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixVQUFJLEdBQUc7WUFDTCxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtZQUNoQyxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLElBQUksRUFBRSxxQkFBcUI7U0FDNUIsQ0FBQztRQUNGLGFBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxpQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNyQixZQUFNLEdBQUcsTUFBTSxDQUFDOzs7O1FBRWhCLFdBQUssR0FBRztZQUNOLGdCQUFnQixFQUFFLHFCQUFxQjtTQUN4QyxDQUFDO1FBQ0YsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU0sR0FBRztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztRQUNGLFNBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEIsV0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1lBQzNCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRTt3QkFDVCxlQUFlLEVBQUUscUJBQXFCO3FCQUN2QztpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVEsR0FBRztZQUNULFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsb0JBQW9CO2FBQzVCO1NBQ0YsQ0FBQztRQUNGLGNBQVEsR0FBRztZQUNULElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsU0FBUztnQkFDckIsS0FBSyxFQUFFLHNCQUFzQjthQUM5QjtTQUNGLENBQUM7O0lBQ0osQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQW5FRCxDQUFpQyxVQUFVLEdBbUUxQzs7OztJQWxFQywyQkFBc0I7O0lBQ3RCLDhCQUdFOztJQUNGLDZCQUdFOztJQUNGLDJCQUdFOztJQUNGLCtCQUFpQzs7SUFDakMsaUNBU0U7O0lBQ0YsMkJBTUU7O0lBQ0YsOEJBQWdDOztJQUNoQyxrQ0FBcUI7O0lBQ3JCLDZCQUFnQjs7Ozs7SUFFaEIsNEJBRUU7O0lBQ0YsMkJBQVU7O0lBQ1YsNkJBRUU7O0lBQ0YsMEJBQWdCOztJQUNoQiw0QkFVRzs7SUFDSCw0QkFBVzs7SUFDWCwrQkFJRTs7SUFDRiwrQkFLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29uZmlnLCBtZXJnZURlZXAsIERpciB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBmaWVsZCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWxpZ2h0JztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzYyMDBFRScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjRkYyOTk3JyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjZjU0MTRlJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBkaXNhYmxlZCA9ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJztcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZhZmFmYScsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnI2ZhZmFmYScsXG4gICAgdGVydGlhcnk6ICcjZjVmNmY3JyxcbiAgICBiYXNlOiAnI0UwRTBFMCdcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH07XG4gIGRpdmlkZXIgPSAncmdiYSgwLCAwLCAwLCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gJyMzMzMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICByYWRpbyA9IHtcbiAgICByYWRpb091dGVyQ2lyY2xlOiAncmdiYSgwLCAwLCAwLCAwLjQzKSdcbiAgfTtcbiAgbWVudSA9IHt9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDAsMCwwLC42KSdcbiAgfTtcbiAgYmFyID0gJyNmNWY1ZjUnO1xuICBmaWVsZCA9IG1lcmdlRGVlcCh7fSwgZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhZGdlID0ge307XG4gIGNoZWNrYm94ID0ge1xuICAgIHVuY2hlY2tlZDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIC41NCknXG4gICAgfVxuICB9O1xuICBzbmFja0JhciA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMyMzIzMicsXG4gICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjcpJ1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==