import * as tslib_1 from "tslib";
import { mergeDeep, shadowBuilder } from '@alyle/ui';
import { MinimaBase } from './base';
var contrast = '#fff';
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
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(49,49,49,.6)'
        };
        _this.bar = '#212121';
        _this.divider = 'rgba(255, 255, 255, 0.12)';
        _this.colorShadow = shadow;
        _this.shadow = shadow;
        _this.field = mergeDeep({}, _this.field, {
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
        _this.badge = {};
        _this.snackBar = {
            root: {
                background: '#fafafa',
                color: 'rgba(0,0,0,.87)',
                boxShadow: shadowBuilder(4, '#fafafa')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiZGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFlLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVwQyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDeEIsSUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUM7QUFDbEM7SUFBZ0Msc0NBQVU7SUFBMUM7UUFBQSxxRUE4RUM7UUE3RUMsVUFBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixhQUFPLEdBQUc7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7UUFDRixZQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsVUFBSSxHQUFHO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1QsQ0FBQztRQUNGLGNBQVEsR0FBRztZQUNULE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsUUFBUSxFQUFFLDBCQUEwQjtTQUNyQyxDQUFDO1FBQ0YsWUFBTSxHQUFHO1lBQ1AsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQyxRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7UUFDRixnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLFFBQUE7YUFDUDtZQUNELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7UUFDRixXQUFLLEdBQUcsMkJBQTJCLENBQUM7UUFDcEMsV0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQztRQUNGLFVBQUksR0FBRztZQUNMLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLE1BQU07WUFDZixTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsSUFBSSxFQUFFLDJCQUEyQjtTQUNsQyxDQUFDO1FBQ0YsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU0sR0FBRztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztRQUNGLFNBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEIsYUFBTyxHQUFHLDJCQUEyQixDQUFDO1FBQ3RDLGlCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFlBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsV0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUcsS0FBSSxDQUFDLEtBQUssRUFBRTtZQUNqQyxXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFVBQVUsRUFBRSwwQkFBMEI7WUFDdEMsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRTtvQkFDTixlQUFlLEVBQUU7d0JBQ2YsZUFBZSxFQUFFLDJCQUEyQjtxQkFDN0M7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILFdBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQzthQUN2QztTQUNGLENBQUM7UUFDRixhQUFPLEdBQUc7WUFDUixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLDJCQUEyQjtnQkFDdkMsS0FBSyxFQUFFLGlCQUFpQjthQUN6QjtTQUNGLENBQUM7UUFDRixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQUNkLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUE5RUQsQ0FBZ0MsVUFBVSxHQThFekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFEYXJrIGV4dGVuZHMgTWluaW1hQmFzZSBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtZGFyayc7XG4gIHByaW1hcnkgPSB7XG4gICAgZGVmYXVsdDogJyMxREU5QjYnLFxuICAgIGNvbnRyYXN0OiAncmdiYSgwLCAwLCAwLCAwLjg3KSdcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjOUMyN0IwJyxcbiAgICBjb250cmFzdFxuICB9O1xuICB3YXJuID0ge1xuICAgIGRlZmF1bHQ6ICcjRUE0MDRDJyxcbiAgICBjb250cmFzdFxuICB9O1xuICBkaXNhYmxlZCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpJyxcbiAgICBjb250cmFzdDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgfTtcbiAgYWN0aW9uID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBjb250cmFzdDogJ3JnYmEoMCwgMCwgMCwgMC44NyknXG4gIH07XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogJyMzMDMwMzAnLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogJyMzMDMwMzAnLFxuICAgIHRlcnRpYXJ5OiAnIzIxMjEyMScsXG4gICAgYmFzZTogJyMwRTBFMEUnXG4gIH07XG4gIGhvdmVyID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknO1xuICBwYXBlciA9IHtcbiAgICBkZWZhdWx0OiAnIzJiMmIyYicsXG4gICAgc2hhZG93XG4gIH07XG4gIHRleHQgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzApJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApJ1xuICB9O1xuICBtZW51ID0ge307XG4gIGRyYXdlciA9IHtcbiAgICBiYWNrZHJvcDogJ3JnYmEoNDksNDksNDksLjYpJ1xuICB9O1xuICBiYXIgPSAnIzIxMjEyMSc7XG4gIGRpdmlkZXIgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSc7XG4gIGNvbG9yU2hhZG93ID0gc2hhZG93O1xuICBzaGFkb3cgPSBzaGFkb3c7XG4gIGZpZWxkID0gbWVyZ2VEZWVwKHt9ICwgdGhpcy5maWVsZCwge1xuICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgbGFiZWxDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFkZ2UgPSB7fTtcbiAgc25hY2tCYXIgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJyNmYWZhZmEnLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknLFxuICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQsICcjZmFmYWZhJylcbiAgICB9XG4gIH07XG4gIHRvb2x0aXAgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMC44NSknLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknXG4gICAgfVxuICB9O1xuICBhdmF0YXIgPSB7fTtcbn1cbiJdfQ==