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
    MinimaLight.prototype.field;
    /** @type {?} */
    MinimaLight.prototype.badge;
    /** @type {?} */
    MinimaLight.prototype.checkbox;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFNBQVMsRUFBTyxNQUFNLFdBQVcsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7O0lBRTlCLFFBQVEsR0FBRyxNQUFNOztJQUNqQixNQUFNLEdBQUcsTUFBTTtBQUNyQjtJQUFpQyx1Q0FBVTtJQUEzQztRQUFBLHFFQStEQztRQTlEQyxVQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3RCLGFBQU8sR0FBRztZQUNSLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNULENBQUM7UUFDRixZQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsVUFBSSxHQUFHO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1QsQ0FBQztRQUNGLGdCQUFVLEdBQUc7WUFDWCxPQUFPLEVBQUUsU0FBUzs7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sUUFBQTthQUNQO1lBQ0QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNGLFVBQUksR0FBRztZQUNMLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixTQUFTLEVBQUUscUJBQXFCO1lBQ2hDLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBQ0YsYUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBQ2hDLGlCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFlBQU0sR0FBRyxNQUFNLENBQUM7Ozs7UUFFaEIsWUFBTSxHQUFHO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDO1FBQ0YsV0FBSyxHQUFHO1lBQ04sZ0JBQWdCLEVBQUUscUJBQXFCO1NBQ3hDLENBQUM7UUFDRixVQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsWUFBTSxHQUFHO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO1FBQ0YsU0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQixXQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFO3dCQUNULGVBQWUsRUFBRSxxQkFBcUI7cUJBQ3ZDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUSxHQUFHO1lBQ1QsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxvQkFBb0I7YUFDNUI7U0FDRixDQUFDOztJQUNKLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUEvREQsQ0FBaUMsVUFBVSxHQStEMUM7Ozs7SUE5REMsMkJBQXNCOztJQUN0Qiw4QkFHRTs7SUFDRiw2QkFHRTs7SUFDRiwyQkFHRTs7SUFDRixpQ0FTRTs7SUFDRiwyQkFNRTs7SUFDRiw4QkFBZ0M7O0lBQ2hDLGtDQUFxQjs7SUFDckIsNkJBQWdCOzs7OztJQUVoQiw2QkFFRTs7SUFDRiw0QkFFRTs7SUFDRiwyQkFBVTs7SUFDViw2QkFFRTs7SUFDRiwwQkFBZ0I7O0lBQ2hCLDRCQVVHOztJQUNILDRCQUFXOztJQUNYLCtCQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGZpZWxkIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJyMzMzMnO1xuZXhwb3J0IGNsYXNzIE1pbmltYUxpZ2h0IGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtbGlnaHQnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjNjIwMEVFJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyNGRjI5OTcnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNmNTQxNGUnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyNmYWZhZmEnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyNmYWZhZmEnLFxuICAgIHRlcnRpYXJ5OiAnI2Y1ZjZmNycsXG4gICAgYmFzZTogJyNFMEUwRTAnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9O1xuICBkaXZpZGVyID0gJ3JnYmEoMCwgMCwgMCwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9ICcjMzMzJztcbiAgc2hhZG93ID0gJyMzMzMnO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjExKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMCwgMCwgMCwgMC40MyknXG4gIH07XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSgwLDAsMCwuNiknXG4gIH07XG4gIGJhciA9ICcjZjVmNWY1JztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIGZpZWxkLCB7XG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBsYWJlbENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBmaWxsZWQ6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYWRnZSA9IHt9O1xuICBjaGVja2JveCA9IHtcbiAgICB1bmNoZWNrZWQ6IHtcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAuNTQpJ1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==