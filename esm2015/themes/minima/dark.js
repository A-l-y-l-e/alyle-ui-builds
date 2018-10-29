/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { input } from './variables';
import { mergeDeep, Dir } from '@alyle/ui';
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
        this.text = {
            default: '#fff',
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
            hint: 'rgba(255, 255, 255, 0.50)'
        };
        /**
         * Components variables
         */
        this.button = {
            disabled: 'rgba(255, 255, 255, 0.30)'
        };
        this.radio = {
            radioOuterCircle: 'rgba(255, 255, 255, 0.55)'
        };
        this.menu = {
            bg: '#424242' // background>primary
        };
        this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        this.bar = '#212121';
        this.divider = 'rgba(255, 255, 255, 0.12)';
        this.colorShadow = shadow;
        this.shadow = shadow;
        this.input = mergeDeep({}, input, {
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
        this.direction = Dir.rtl; // beta
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiZGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUVwQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7O0FBQ3hCLE1BQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDO0FBQ2xDLE1BQU0sT0FBTyxVQUFXLFNBQVEsVUFBVTs7O1FBQ3hDLFlBQU8sYUFBYSxDQUFDO1FBQ3JCLGVBQVU7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7UUFDRixjQUFTO1lBQ1AsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUTtTQUNULENBQUM7UUFDRixZQUFPO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUTtTQUNULENBQUM7UUFDRixrQkFBYTtZQUNYLE9BQU8sRUFBRSxTQUFTOztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLE1BQU07YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixZQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU07WUFDZixPQUFPLEVBQUUsTUFBTTtZQUNmLFNBQVMsRUFBRSwyQkFBMkI7WUFDdEMsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxJQUFJLEVBQUUsMkJBQTJCO1NBQ2xDLENBQUM7Ozs7UUFFRixjQUFTO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO1FBQ0YsYUFBUTtZQUNOLGdCQUFnQixFQUFFLDJCQUEyQjtTQUM5QyxDQUFDO1FBQ0YsWUFBTztZQUNMLEVBQUUsRUFBRSxTQUFTO1NBQ2QsQ0FBQztRQUNGLGNBQVM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1NBQzlCLENBQUM7UUFDRixXQUFNLFNBQVMsQ0FBQztRQUNoQixlQUFVLDJCQUEyQixDQUFDO1FBQ3RDLG1CQUFjLE1BQU0sQ0FBQztRQUNyQixjQUFTLE1BQU0sQ0FBQztRQUNoQixhQUFRLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFOztZQUUzQixLQUFLLEVBQUUsMEJBQTBCOztZQUVqQyxTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRTtvQkFDTixTQUFTLEVBQUU7d0JBQ1QsZUFBZSxFQUFFLDJCQUEyQjtxQkFDN0M7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILGlCQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUM7O0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBEaXIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTWluaW1hQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbnRyYXN0ID0gJyNmZmYnO1xuY29uc3Qgc2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuZXhwb3J0IGNsYXNzIE1pbmltYURhcmsgZXh0ZW5kcyBNaW5pbWFCYXNlIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kYXJrJztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzFERTlCNicsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJ1xuICB9O1xuICBhY2NlbnQgPSB7XG4gICAgZGVmYXVsdDogJyM5QzI3QjAnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIHdhcm4gPSB7XG4gICAgZGVmYXVsdDogJyNFQTQwNEMnLFxuICAgIGNvbnRyYXN0XG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgYnV0dG9uID0ge1xuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKSdcbiAgfTtcbiAgcmFkaW8gPSB7XG4gICAgcmFkaW9PdXRlckNpcmNsZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSknXG4gIH07XG4gIG1lbnUgPSB7XG4gICAgYmc6ICcjNDI0MjQyJyAvLyBiYWNrZ3JvdW5kPnByaW1hcnlcbiAgfTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSg0OSw0OSw0OSwuNiknXG4gIH07XG4gIGJhciA9ICcjMjEyMTIxJztcbiAgZGl2aWRlciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSBzaGFkb3c7XG4gIHNoYWRvdyA9IHNoYWRvdztcbiAgaW5wdXQgPSBtZXJnZURlZXAoe30sIGlucHV0LCB7XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgbGFiZWw6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHVuZGVybGluZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSknLFxuICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZGlyZWN0aW9uID0gRGlyLnJ0bDsgLy8gYmV0YVxufVxuIl19