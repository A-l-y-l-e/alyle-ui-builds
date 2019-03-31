/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { mergeDeep } from '@alyle/ui';
import { MinimaBase } from './base';
/** @type {?} */
const contrast = '#fff';
/** @type {?} */
const shadow = 'rgba(0, 0, 0, 1)';
export class MinimaDark extends MinimaBase {
    constructor() {
        super(...arguments);
        this.name = 'minima-dark';
        this.primary = {
            default: '#1DE9B6',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        this.accent = {
            default: '#9C27B0',
            contrast
        };
        this.warn = {
            default: '#EA404C',
            contrast
        };
        this.disabled = {
            default: 'rgba(255, 255, 255, 0.3)',
            contrast: 'rgba(255, 255, 255, 0.5)'
        };
        this.action = {
            default: 'rgba(255, 255, 255, 0.70)',
            contrast: 'rgba(0, 0, 0, 0.87)'
        };
        this.background = {
            default: '#303030',
            // secondary
            primary: {
                default: '#2b2b2b',
                shadow
            },
            secondary: '#303030',
            tertiary: '#212121',
            base: '#0E0E0E'
        };
        this.hover = 'rgba(255, 255, 255, 0.04)';
        this.paper = {
            default: '#2b2b2b',
            shadow
        };
        this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        this.menu = {};
        this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        this.bar = '#212121';
        this.divider = 'rgba(255, 255, 255, 0.12)';
        this.colorShadow = shadow;
        this.shadow = shadow;
        this.field = mergeDeep({}, this.field, {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            labelColor: 'rgba(255, 255, 255, 0.4)',
            appearance: {
                filled: {
                    '& {container}': {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    }
                }
            }
        });
        this.badge = {};
        this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)'
            }
        };
        this.tooltip = {
            root: {
                background: 'rgba(250, 250, 250, 0.85)',
                color: 'rgba(0,0,0,.87)'
            }
        };
        this.avatar = {};
    }
}
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
    MinimaDark.prototype.snackBar;
    /** @type {?} */
    MinimaDark.prototype.tooltip;
    /** @type {?} */
    MinimaDark.prototype.avatar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiZGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOztNQUU5QixRQUFRLEdBQUcsTUFBTTs7TUFDakIsTUFBTSxHQUFHLGtCQUFrQjtBQUNqQyxNQUFNLE9BQU8sVUFBVyxTQUFRLFVBQVU7SUFBMUM7O1FBQ0UsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixZQUFPLEdBQUc7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7UUFDRixXQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRO1NBQ1QsQ0FBQztRQUNGLFNBQUksR0FBRztZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVE7U0FDVCxDQUFDO1FBQ0YsYUFBUSxHQUFHO1lBQ1QsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxRQUFRLEVBQUUsMEJBQTBCO1NBQ3JDLENBQUM7UUFDRixXQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQUNGLGVBQVUsR0FBRztZQUNYLE9BQU8sRUFBRSxTQUFTOztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLE1BQU07YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixVQUFLLEdBQUcsMkJBQTJCLENBQUM7UUFDcEMsVUFBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTTtTQUNQLENBQUM7UUFDRixTQUFJLEdBQUc7WUFDTCxPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxNQUFNO1lBQ2YsU0FBUyxFQUFFLDJCQUEyQjtZQUN0QyxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLElBQUksRUFBRSwyQkFBMkI7U0FDbEMsQ0FBQztRQUNGLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUc7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1NBQzlCLENBQUM7UUFDRixRQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ2hCLFlBQU8sR0FBRywyQkFBMkIsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNyQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEMsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxVQUFVLEVBQUUsMEJBQTBCO1lBQ3RDLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUU7b0JBQ04sZUFBZSxFQUFFO3dCQUNmLGVBQWUsRUFBRSwyQkFBMkI7cUJBQzdDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHO1lBQ1QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCO1NBQ0YsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNSLElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsMkJBQTJCO2dCQUN2QyxLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCO1NBQ0YsQ0FBQztRQUNGLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFDZCxDQUFDO0NBQUE7OztJQTVFQywwQkFBcUI7O0lBQ3JCLDZCQUdFOztJQUNGLDRCQUdFOztJQUNGLDBCQUdFOztJQUNGLDhCQUdFOztJQUNGLDRCQUdFOztJQUNGLGdDQVNFOztJQUNGLDJCQUFvQzs7SUFDcEMsMkJBR0U7O0lBQ0YsMEJBTUU7O0lBQ0YsMEJBQVU7O0lBQ1YsNEJBRUU7O0lBQ0YseUJBQWdCOztJQUNoQiw2QkFBc0M7O0lBQ3RDLGlDQUFxQjs7SUFDckIsNEJBQWdCOztJQUNoQiwyQkFVRzs7SUFDSCwyQkFBVzs7SUFDWCw4QkFLRTs7SUFDRiw2QkFLRTs7SUFDRiw0QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29uZmlnLCBtZXJnZURlZXAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGRpc2FibGVkID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgIGNvbnRyYXN0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9O1xuICBhY3Rpb24gPSB7XG4gICAgZGVmYXVsdDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCknLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCcsIC8vIHNlY29uZGFyeVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGRlZmF1bHQ6ICcjMmIyYjJiJyxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiAnIzMwMzAzMCcsXG4gICAgdGVydGlhcnk6ICcjMjEyMTIxJyxcbiAgICBiYXNlOiAnIzBFMEUwRSdcbiAgfTtcbiAgaG92ZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSc7XG4gIHBhcGVyID0ge1xuICAgIGRlZmF1bHQ6ICcjMmIyYjJiJyxcbiAgICBzaGFkb3dcbiAgfTtcbiAgdGV4dCA9IHtcbiAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgcHJpbWFyeTogJyNmZmYnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwKScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknXG4gIH07XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIHRoaXMuZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhZGdlID0ge307XG4gIHNuYWNrQmFyID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmFmYWZhJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJ1xuICAgIH1cbiAgfTtcbiAgdG9vbHRpcCA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTAsIDI1MCwgMjUwLCAwLjg1KScsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwwLDAsLjg3KSdcbiAgICB9XG4gIH07XG4gIGF2YXRhciA9IHt9O1xufVxuIl19