/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { mergeDeep } from '@alyle/ui';
import { field } from './variables';
import { MinimaBase } from './base';
/** @type {?} */
const contrast = '#fff';
/** @type {?} */
const shadow = '#333';
export class MinimaLight extends MinimaBase {
    constructor() {
        super(...arguments);
        this.name = 'minima-light';
        this.primary = {
            default: '#6200EE',
            contrast
        };
        this.accent = {
            default: '#FF2997',
            contrast,
        };
        this.warn = {
            default: '#f5414e',
            contrast
        };
        this.action = {
            default: 'rgba(0,0,0,.6)',
            contrast: '#fff'
        };
        this.background = {
            default: '#fafafa',
            // secondary
            primary: {
                default: '#fff',
                shadow
            },
            secondary: '#fafafa',
            tertiary: '#efefef',
            base: '#E0E0E0'
        };
        this.hover = 'rgba(0, 0, 0, 0.04)';
        this.paper = {
            default: '#fff',
            shadow
        };
        this.disabled = {
            default: 'rgba(0, 0, 0, 0.12)',
            contrast: 'rgba(0, 0, 0, 0.26)'
        };
        this.text = {
            default: 'rgba(0, 0, 0, 0.87)',
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            hint: 'rgba(0, 0, 0, 0.38)'
        };
        this.divider = 'rgba(0, 0, 0, 0.12)';
        this.colorShadow = '#33base3';
        this.shadow = '#333';
        this.radio = {
            outerCircle: 'rgba(0, 0, 0, 0.43)'
        };
        this.menu = {};
        this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        this.bar = '#f5f5f5';
        this.field = mergeDeep({}, field, {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            labelColor: 'rgba(0, 0, 0, 0.6)',
            appearance: {
                filled: {
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
        this.badge = {};
        this.checkbox = {
            unchecked: {
                color: 'rgba(0, 0, 0, .54)'
            }
        };
        this.snackBar = {
            root: {
                background: '#323232',
                color: '#fff'
            }
        };
        this.tooltip = {
            root: {
                background: 'rgba(50, 50, 50, 0.85)',
                color: '#fff'
            }
        };
        this.avatar = {};
    }
}
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
    MinimaLight.prototype.action;
    /** @type {?} */
    MinimaLight.prototype.background;
    /** @type {?} */
    MinimaLight.prototype.hover;
    /** @type {?} */
    MinimaLight.prototype.paper;
    /** @type {?} */
    MinimaLight.prototype.disabled;
    /** @type {?} */
    MinimaLight.prototype.text;
    /** @type {?} */
    MinimaLight.prototype.divider;
    /** @type {?} */
    MinimaLight.prototype.colorShadow;
    /** @type {?} */
    MinimaLight.prototype.shadow;
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
    /** @type {?} */
    MinimaLight.prototype.snackBar;
    /** @type {?} */
    MinimaLight.prototype.tooltip;
    /** @type {?} */
    MinimaLight.prototype.avatar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7TUFFOUIsUUFBUSxHQUFHLE1BQU07O01BQ2pCLE1BQU0sR0FBRyxNQUFNO0FBQ3JCLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtJQUEzQzs7UUFDRSxTQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3RCLFlBQU8sR0FBRztZQUNSLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVE7U0FDVCxDQUFDO1FBQ0YsV0FBTSxHQUFHO1lBQ1AsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUTtTQUNULENBQUM7UUFDRixTQUFJLEdBQUc7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRO1NBQ1QsQ0FBQztRQUNGLFdBQU0sR0FBRztZQUNQLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQztRQUNGLGVBQVUsR0FBRztZQUNYLE9BQU8sRUFBRSxTQUFTOztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsTUFBTTthQUNQO1lBQ0QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNGLFVBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUM5QixVQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU07U0FDUCxDQUFDO1FBQ0YsYUFBUSxHQUFHO1lBQ1QsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7UUFDRixTQUFJLEdBQUc7WUFDTCxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtZQUNoQyxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLElBQUksRUFBRSxxQkFBcUI7U0FDNUIsQ0FBQztRQUNGLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFVBQVUsQ0FBQztRQUN6QixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFVBQUssR0FBRztZQUNOLFdBQVcsRUFBRSxxQkFBcUI7U0FDbkMsQ0FBQztRQUNGLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUc7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7UUFDRixRQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRTtvQkFDTixTQUFTLEVBQUU7d0JBQ1QsZUFBZSxFQUFFLHFCQUFxQjtxQkFDdkM7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUc7WUFDVCxTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLG9CQUFvQjthQUM1QjtTQUNGLENBQUM7UUFDRixhQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRixDQUFDO1FBQ0YsWUFBTyxHQUFHO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSx3QkFBd0I7Z0JBQ3BDLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRixDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUNkLENBQUM7Q0FBQTs7O0lBcEZDLDJCQUFzQjs7SUFDdEIsOEJBR0U7O0lBQ0YsNkJBR0U7O0lBQ0YsMkJBR0U7O0lBQ0YsNkJBR0U7O0lBQ0YsaUNBU0U7O0lBQ0YsNEJBQThCOztJQUM5Qiw0QkFHRTs7SUFDRiwrQkFHRTs7SUFDRiwyQkFNRTs7SUFDRiw4QkFBZ0M7O0lBQ2hDLGtDQUF5Qjs7SUFDekIsNkJBQWdCOztJQUNoQiw0QkFFRTs7SUFDRiwyQkFBVTs7SUFDViw2QkFFRTs7SUFDRiwwQkFBZ0I7O0lBQ2hCLDRCQVVHOztJQUNILDRCQUFXOztJQUNYLCtCQUlFOztJQUNGLCtCQUtFOztJQUNGLDhCQUtFOztJQUNGLDZCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb25maWcsIG1lcmdlRGVlcCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBmaWVsZCB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWxpZ2h0JztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzYyMDBFRScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjRkYyOTk3JyxcbiAgICBjb250cmFzdCxcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI2Y1NDE0ZScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWN0aW9uID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsMCwwLC42KScsXG4gICAgY29udHJhc3Q6ICcjZmZmJ1xuICB9O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNlZmVmZWYnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICBob3ZlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJztcbiAgcGFwZXIgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHNoYWRvd1xuICB9O1xuICBkaXNhYmxlZCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzYmFzZTMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIHJhZGlvID0ge1xuICAgIG91dGVyQ2lyY2xlOiAncmdiYSgwLCAwLCAwLCAwLjQzKSdcbiAgfTtcbiAgbWVudSA9IHt9O1xuICBkcmF3ZXIgPSB7XG4gICAgYmFja2Ryb3A6ICdyZ2JhKDAsMCwwLC42KSdcbiAgfTtcbiAgYmFyID0gJyNmNWY1ZjUnO1xuICBmaWVsZCA9IG1lcmdlRGVlcCh7fSwgZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yMyknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhZGdlID0ge307XG4gIGNoZWNrYm94ID0ge1xuICAgIHVuY2hlY2tlZDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIC41NCknXG4gICAgfVxuICB9O1xuICBzbmFja0JhciA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMyMzIzMicsXG4gICAgICBjb2xvcjogJyNmZmYnXG4gICAgfVxuICB9O1xuICB0b29sdGlwID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDUwLCA1MCwgNTAsIDAuODUpJyxcbiAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICB9XG4gIH07XG4gIGF2YXRhciA9IHt9O1xufVxuIl19