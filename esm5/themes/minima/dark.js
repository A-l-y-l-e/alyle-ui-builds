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
        _this.typography = typography;
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
        _this.input = {
            label: 'rgba(255, 255, 255, 0.4)',
            underline: 'rgba(255, 255, 255, 0.11)',
            withColor: input.withColor
        };
        _this.iconButton = iconButton;
        _this.icon = icon;
        return _this;
    }
    return MinimaDark;
}(LyStyleUtils));
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
    MinimaDark.prototype.typography;
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
    MinimaDark.prototype.iconButton;
    /** @type {?} */
    MinimaDark.prototype.icon;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiZGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbEUsT0FBTyxFQUFlLFlBQVksRUFBb0IsTUFBTSxXQUFXLENBQUM7O0FBRXhFLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQzs7QUFDeEIsSUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUM7QUFDbEMsSUFBQTtJQUFnQyxzQ0FBWTs7O3FCQUNuQyxhQUFhO3dCQUNWO1lBQ1IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQzt1QkFDUTtZQUNQLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNUO3FCQUNNO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1Q7MkJBQ1ksVUFBVTsyQkFDVjtZQUNYLE9BQU8sRUFBRSxTQUFTOztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLE1BQU0sUUFBQTthQUNQO1lBQ0QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7cUJBQ007WUFDTCxPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxNQUFNO1lBQ2YsU0FBUyxFQUFFLDJCQUEyQjtZQUN0QyxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLElBQUksRUFBRSwyQkFBMkI7U0FDbEM7Ozs7dUJBRVE7WUFDUCxRQUFRLEVBQUUsMkJBQTJCO1NBQ3RDO3NCQUNPO1lBQ04sZ0JBQWdCLEVBQUUsMkJBQTJCO1NBQzlDO3FCQUNNO1lBQ0wsRUFBRSxFQUFFLFNBQVM7U0FDZDt1QkFDUTtZQUNQLFFBQVEsRUFBRSxtQkFBbUI7U0FDOUI7b0JBQ0ssU0FBUzt3QkFDTCwyQkFBMkI7NEJBQ3ZCLE1BQU07dUJBQ1gsTUFBTTtzQkFDUDtZQUNOLEtBQUssRUFBRSwwQkFBMEI7WUFDakMsU0FBUyxFQUFFLDJCQUEyQjtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDM0I7MkJBQ1ksVUFBVTtxQkFDaEIsSUFBSTs7O3FCQTVEYjtFQUtnQyxZQUFZLEVBd0QzQyxDQUFBO0FBeERELHNCQXdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIGlucHV0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIEx5U3R5bGVVdGlscywgVHlwb2dyYXBoeUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBMeVN0eWxlVXRpbHMgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWRhcmsnO1xuICBwcmltYXJ5ID0ge1xuICAgIGRlZmF1bHQ6ICcjMURFOUI2JyxcbiAgICBjb250cmFzdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknXG4gIH07XG4gIGFjY2VudCA9IHtcbiAgICBkZWZhdWx0OiAnIzlDMjdCMCcsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI0VBNDA0QycsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjNDI0MjQyJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgaW5wdXQgPSB7XG4gICAgbGFiZWw6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIHVuZGVybGluZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSknLFxuICAgIHdpdGhDb2xvcjogaW5wdXQud2l0aENvbG9yXG4gIH07XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbn1cbiJdfQ==