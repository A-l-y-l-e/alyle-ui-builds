import * as tslib_1 from "tslib";
import { mergeDeep, shadowBuilder } from '@alyle/ui';
import { MinimaBase } from './base';
var contrast = '#fff';
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
            contrast: contrast,
        };
        _this.warn = {
            default: '#f5414e',
            contrast: contrast
        };
        _this.action = {
            default: 'rgba(0,0,0,.6)',
            contrast: '#fff'
        };
        _this.background = {
            default: '#fafafa',
            primary: {
                default: '#fff',
                shadow: shadow
            },
            secondary: '#fafafa',
            tertiary: '#efefef',
            base: '#E0E0E0'
        };
        _this.hover = 'rgba(0, 0, 0, 0.04)';
        _this.paper = {
            default: '#fff',
            shadow: shadow
        };
        _this.disabled = {
            default: 'rgba(0, 0, 0, 0.12)',
            contrast: 'rgba(0, 0, 0, 0.26)'
        };
        _this.text = {
            default: 'rgba(0, 0, 0, 0.87)',
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            hint: 'rgba(0, 0, 0, 0.38)'
        };
        _this.divider = 'rgba(0, 0, 0, 0.12)';
        _this.colorShadow = '#33base3';
        _this.shadow = '#333';
        _this.menu = {};
        _this.drawer = {
            backdrop: 'rgba(0,0,0,.6)'
        };
        _this.bar = '#f5f5f5';
        _this.field = mergeDeep({}, _this.field, {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            labelColor: 'rgba(0, 0, 0, 0.6)',
            appearance: {
                filled: {
                    '{container}': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        });
        _this.badge = {};
        _this.snackBar = {
            root: {
                background: '#323232',
                color: '#fff',
                boxShadow: shadowBuilder(4, '#323232')
            }
        };
        _this.tooltip = {
            root: {
                background: 'rgba(50, 50, 50, 0.85)',
                color: '#fff'
            }
        };
        _this.avatar = {};
        return _this;
    }
    return MinimaLight;
}(MinimaBase));
export { MinimaLight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbImxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDdEI7SUFBaUMsdUNBQVU7SUFBM0M7UUFBQSxxRUE4RUM7UUE3RUMsVUFBSSxHQUFHLGNBQWMsQ0FBQztRQUN0QixhQUFPLEdBQUc7WUFDUixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLFVBQUE7U0FDVCxDQUFDO1FBQ0YsWUFBTSxHQUFHO1lBQ1AsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxVQUFBO1NBQ1QsQ0FBQztRQUNGLFVBQUksR0FBRztZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsVUFBQTtTQUNULENBQUM7UUFDRixZQUFNLEdBQUc7WUFDUCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUM7UUFDRixnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sUUFBQTthQUNQO1lBQ0QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNGLFdBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUM5QixXQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sUUFBQTtTQUNQLENBQUM7UUFDRixjQUFRLEdBQUc7WUFDVCxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQUNGLFVBQUksR0FBRztZQUNMLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixTQUFTLEVBQUUscUJBQXFCO1lBQ2hDLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBQ0YsYUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBQ2hDLGlCQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLFlBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU0sR0FBRztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztRQUNGLFNBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEIsV0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssRUFBRTtZQUNoQyxXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRTtvQkFDTixhQUFhLEVBQUU7d0JBQ2IsZUFBZSxFQUFFLHFCQUFxQjtxQkFDdkM7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILFdBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLEtBQUssRUFBRSxNQUFNO2dCQUNiLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQzthQUN2QztTQUNGLENBQUM7UUFDRixhQUFPLEdBQUc7WUFDUixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLHdCQUF3QjtnQkFDcEMsS0FBSyxFQUFFLE1BQU07YUFDZDtTQUNGLENBQUM7UUFDRixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQUNkLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUE5RUQsQ0FBaUMsVUFBVSxHQThFMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbmZpZywgbWVyZ2VEZWVwLCBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb250cmFzdCA9ICcjZmZmJztcbmNvbnN0IHNoYWRvdyA9ICcjMzMzJztcbmV4cG9ydCBjbGFzcyBNaW5pbWFMaWdodCBleHRlbmRzIE1pbmltYUJhc2UgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWxpZ2h0JztcbiAgcHJpbWFyeSA9IHtcbiAgICBkZWZhdWx0OiAnIzYyMDBFRScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWNjZW50ID0ge1xuICAgIGRlZmF1bHQ6ICcjRkYyOTk3JyxcbiAgICBjb250cmFzdCxcbiAgfTtcbiAgd2FybiA9IHtcbiAgICBkZWZhdWx0OiAnI2Y1NDE0ZScsXG4gICAgY29udHJhc3RcbiAgfTtcbiAgYWN0aW9uID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsMCwwLC42KScsXG4gICAgY29udHJhc3Q6ICcjZmZmJ1xuICB9O1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6ICcjZmFmYWZhJywgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6ICcjZmFmYWZhJyxcbiAgICB0ZXJ0aWFyeTogJyNlZmVmZWYnLFxuICAgIGJhc2U6ICcjRTBFMEUwJ1xuICB9O1xuICBob3ZlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJztcbiAgcGFwZXIgPSB7XG4gICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIHNoYWRvd1xuICB9O1xuICBkaXNhYmxlZCA9IHtcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgY29udHJhc3Q6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJ1xuICB9O1xuICB0ZXh0ID0ge1xuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfTtcbiAgZGl2aWRlciA9ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJztcbiAgY29sb3JTaGFkb3cgPSAnIzMzYmFzZTMnO1xuICBzaGFkb3cgPSAnIzMzMyc7XG4gIG1lbnUgPSB7fTtcbiAgZHJhd2VyID0ge1xuICAgIGJhY2tkcm9wOiAncmdiYSgwLDAsMCwuNiknXG4gIH07XG4gIGJhciA9ICcjZjVmNWY1JztcbiAgZmllbGQgPSBtZXJnZURlZXAoe30sIHRoaXMuZmllbGQsIHtcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yMyknLFxuICAgIGxhYmVsQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICAne2NvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYWRnZSA9IHt9O1xuICBzbmFja0JhciA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMyMzIzMicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQsICcjMzIzMjMyJylcbiAgICB9XG4gIH07XG4gIHRvb2x0aXAgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNTAsIDUwLCA1MCwgMC44NSknLFxuICAgICAgY29sb3I6ICcjZmZmJ1xuICAgIH1cbiAgfTtcbiAgYXZhdGFyID0ge307XG59XG4iXX0=