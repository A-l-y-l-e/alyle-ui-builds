/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { field } from './variables';
import { mergeDeep } from '@alyle/ui';
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
        _this.disabled = {
            default: 'rgba(255, 255, 255, 0.3)',
            contrast: 'rgba(255, 255, 255, 0.5)'
        };
        _this.action = {
            default: 'rgba(255, 255, 255, 0.70)',
            contrast: 'rgba(0, 0, 0, 0.87)'
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
        _this.hover = 'rgba(255, 255, 255, 0.04)';
        _this.paper = {
            default: '#2b2b2b',
            shadow: shadow
        };
        _this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        _this.radio = {
            outerCircle: 'rgba(255, 255, 255, 0.55)'
        };
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        _this.bar = '#212121';
        _this.divider = 'rgba(255, 255, 255, 0.12)';
        _this.colorShadow = shadow;
        _this.shadow = shadow;
        _this.field = mergeDeep({}, field, {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            labelColor: 'rgba(255, 255, 255, 0.4)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
        _this.badge = {};
        _this.checkbox = {
            unchecked: {
                color: 'rgba(255, 255, 255, 0.7)'
            }
        };
        _this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)'
            }
        };
        _this.tooltip = {
            root: {
                background: 'rgba(250, 250, 250, 0.85)',
                color: 'rgba(0,0,0,.87)'
            }
        };
        _this.avatar = {};
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
    MinimaDark.prototype.disabled;
    /** @type {?} */
    MinimaDark.prototype.action;
    /** @type {?} */
    MinimaDark.prototype.background;
    /** @type {?} */
    MinimaDark.prototype.hover;
    /** @type {?} */
    MinimaDark.prototype.paper;
    /** @type {?} */
    MinimaDark.prototype.text;
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
    MinimaDark.prototype.field;
    /** @type {?} */
    MinimaDark.prototype.badge;
    /** @type {?} */
    MinimaDark.prototype.checkbox;
    /** @type {?} */
    MinimaDark.prototype.snackBar;
    /** @type {?} */
    MinimaDark.prototype.tooltip;
    /** @type {?} */
    MinimaDark.prototype.avatar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiZGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFlLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOztJQUU5QixRQUFRLEdBQUcsTUFBTTs7SUFDakIsTUFBTSxHQUFHLGtCQUFrQjtBQUNqQztJQUFnQyxzQ0FBVTtJQUExQztRQUFBLHFFQXFGQztRQXBGQyxVQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3JCLGFBQU8sR0FBRztZQUNSLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQUNGLFlBQU0sR0FBRztZQUNQLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNULENBQUM7UUFDRixVQUFJLEdBQUc7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsY0FBUSxHQUFHO1lBQ1QsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxRQUFRLEVBQUUsMEJBQTBCO1NBQ3JDLENBQUM7UUFDRixZQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQUNGLGdCQUFVLEdBQUc7WUFDWCxPQUFPLEVBQUUsU0FBUzs7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLFFBQUE7YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixXQUFLLEdBQUcsMkJBQTJCLENBQUM7UUFDcEMsV0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQztRQUNGLFVBQUksR0FBRztZQUNMLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLE1BQU07WUFDZixTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsSUFBSSxFQUFFLDJCQUEyQjtTQUNsQyxDQUFDO1FBQ0YsV0FBSyxHQUFHO1lBQ04sV0FBVyxFQUFFLDJCQUEyQjtTQUN6QyxDQUFDO1FBQ0YsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU0sR0FBRztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztRQUNGLFNBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEIsYUFBTyxHQUFHLDJCQUEyQixDQUFDO1FBQ3RDLGlCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFlBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsV0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1lBQzNCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsVUFBVSxFQUFFLDBCQUEwQjtZQUN0QyxVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRTt3QkFDVCxlQUFlLEVBQUUsMkJBQTJCO3FCQUM3QztpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVEsR0FBRztZQUNULFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsMEJBQTBCO2FBQ2xDO1NBQ0YsQ0FBQztRQUNGLGNBQVEsR0FBRztZQUNULElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsU0FBUztnQkFDckIsS0FBSyxFQUFFLGlCQUFpQjthQUN6QjtTQUNGLENBQUM7UUFDRixhQUFPLEdBQUc7WUFDUixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLDJCQUEyQjtnQkFDdkMsS0FBSyxFQUFFLGlCQUFpQjthQUN6QjtTQUNGLENBQUM7UUFDRixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQUNkLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFyRkQsQ0FBZ0MsVUFBVSxHQXFGekM7Ozs7SUFwRkMsMEJBQXFCOztJQUNyQiw2QkFHRTs7SUFDRiw0QkFHRTs7SUFDRiwwQkFHRTs7SUFDRiw4QkFHRTs7SUFDRiw0QkFHRTs7SUFDRixnQ0FTRTs7SUFDRiwyQkFBb0M7O0lBQ3BDLDJCQUdFOztJQUNGLDBCQU1FOztJQUNGLDJCQUVFOztJQUNGLDBCQUFVOztJQUNWLDRCQUVFOztJQUNGLHlCQUFnQjs7SUFDaEIsNkJBQXNDOztJQUN0QyxpQ0FBcUI7O0lBQ3JCLDRCQUFnQjs7SUFDaEIsMkJBVUc7O0lBQ0gsMkJBQVc7O0lBQ1gsOEJBSUU7O0lBQ0YsOEJBS0U7O0lBQ0YsNkJBS0U7O0lBQ0YsNEJBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWVsZCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBtZXJnZURlZXAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgIGNvbnRyYXN0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9O1xuICBhY3Rpb24gPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCknLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCcsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjMmIyYjJiJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnIzMwMzAzMCcsXG4gICAgdGVydGlhcnk6ICcjMjEyMTIxJyxcbiAgICBiYXNlOiAnIzBFMEUwRSdcbiAgfTtcbiAgaG92ZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSc7XG4gIHBhcGVyID0ge1xuICAgIGRlZmF1bHQ6ICcjMmIyYjJiJyxcbiAgICBzaGFkb3dcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgcHJpbWFyeTogJyNmZmYnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknXG4gIH07XG4gIHJhZGlvID0ge1xuICAgIG91dGVyQ2lyY2xlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSdcbiAgfTtcbiAgbWVudSA9IHt9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDQ5LDQ5LDQ5LC42KSdcbiAgfTtcbiAgYmFyID0gJyMyMTIxMjEnO1xuICBkaXZpZGVyID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknO1xuICBjb2xvclNoYWRvdyA9IHNoYWRvdztcbiAgc2hhZG93ID0gc2hhZG93O1xuICBmaWVsZCA9IG1lcmdlRGVlcCh7fSwgZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhZGdlID0ge307XG4gIGNoZWNrYm94ID0ge1xuICAgIHVuY2hlY2tlZDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknXG4gICAgfVxuICB9O1xuICBzbmFja0JhciA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZhZmFmYScsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwwLDAsLjg3KSdcbiAgICB9XG4gIH07XG4gIHRvb2x0aXAgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMC44NSknLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknXG4gICAgfVxuICB9O1xuICBhdmF0YXIgPSB7fTtcbn1cbiJdfQ==