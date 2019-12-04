import * as tslib_1 from "tslib";
import { Color } from '@alyle/ui/color';
import { shadowBuilder } from '../shadow';
import { getNativeElement } from '../minimal/common';
var DEFAULT_VALUE = '';
var STYLE_PRIORITY = -1;
export function mixinStyleUpdater(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        class_1.prototype.setAutoContrast = function () {
            this._autoContrast = true;
        };
        class_1.prototype.updateStyle = function (element) {
            var __bg = this._superHyperInternalPropertyBg;
            var __color = this._superHyperInternalPropertyColor === 'auto'
                ? ''
                : this._superHyperInternalPropertyColor;
            var __raised = this._superHyperInternalPropertyRaised;
            var __elevation = this._superHyperInternalPropertyElevation;
            var __disabled = this._superHyperInternalPropertyDisabled;
            var __outlined = this._superHyperInternalPropertyOutlined;
            var __shadowColor = this._superHyperInternalPropertyShadowColor;
            var __isContrast = this._autoContrast || this._superHyperInternalPropertyColor === 'auto';
            var el = getNativeElement(element);
            var newKey = "c--" + (__bg || DEFAULT_VALUE) + "_" + (__color || DEFAULT_VALUE) + "_" + (__raised || DEFAULT_VALUE) + "_" + (__elevation || DEFAULT_VALUE) + "_" + (__disabled || DEFAULT_VALUE) + "_" + (__outlined || DEFAULT_VALUE) + "_" + (__shadowColor || DEFAULT_VALUE) + "_" + (__isContrast || DEFAULT_VALUE);
            var newClass = this._theme.renderStyle(newKey, function (theme) {
                var sColor;
                var sBackground;
                var sBorder;
                var sPointerEvents;
                var sBoxShadow;
                var sBoxShadowActive;
                if (__outlined) {
                    sBorder = '1px solid currentColor';
                }
                if (__disabled) {
                    sColor = theme.disabled.contrast;
                    sPointerEvents = 'none';
                    if (__bg) {
                        sBackground = theme.disabled.default;
                    }
                }
                else {
                    if (__bg) {
                        sBackground = colorOf(theme, __bg);
                        if (__isContrast && !__color) {
                            sColor = theme.colorOf(__bg + ":contrast");
                            // Generate auto contrast if is necessary
                            if (sColor.css().includes('invalid')) {
                                var lum = (__bg instanceof Color ? __bg : theme.colorOf(__bg)).luminance();
                                sColor = lum < 0.5 ? theme.text.light : theme.text.dark;
                            }
                        }
                    }
                    if (!sColor && __color) {
                        sColor = colorOf(theme, __color);
                    }
                    if (__raised || (__elevation != null)) {
                        if (!__bg) {
                            sBackground = theme.background.primary.default;
                        }
                        var backgroundColorCss = sBackground !== __bg && colorOf(theme, __bg || 'background:primary', 'shadow');
                        var shadowColor = (__shadowColor && colorOf(theme, __shadowColor)) || backgroundColorCss || sBackground || sColor || theme.shadow;
                        if (__elevation != null) {
                            sBoxShadow = shadowBuilder(__elevation, shadowColor);
                        }
                        else {
                            sBoxShadow = shadowBuilder(3, shadowColor);
                            sBoxShadowActive = shadowBuilder(8, shadowColor);
                        }
                    }
                }
                return function (className) { return className + "{color:" + sColor + ";background:" + sBackground + ";border:" + sBorder + ";pointer-events:" + sPointerEvents + ";box-shadow:" + sBoxShadow + ";}" + className + ":active{box-shadow:" + sBoxShadowActive + ";}"; };
            }, STYLE_PRIORITY);
            el.classList.remove(this._classNameAnonymous);
            el.classList.add(newClass);
            this._classNameAnonymous = newClass;
        };
        return class_1;
    }(base));
}
function colorOf(theme, color, optional) {
    return color instanceof Color ? color : theme.colorOf(color, optional);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtY29tbW9uLWJlaGF2aW9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vYnVpbGQtY29tbW9uLWJlaGF2aW9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFVMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLckQsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBYTFCLE1BQU0sVUFBVSxpQkFBaUIsQ0FBZ0MsSUFBTztJQUN0RTtRQUFxQixtQ0FBSTtRQW1GdkI7WUFBWSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O3VEQUFhLElBQUk7UUFBRyxDQUFDO1FBaEYvQyxpQ0FBZSxHQUFmO1lBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQztRQUNELDZCQUFXLEdBQVgsVUFBWSxPQUFzQztZQUNoRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDaEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxLQUFLLE1BQU07Z0JBQzlELENBQUMsQ0FBQyxFQUFFO2dCQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7WUFDMUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO1lBQ3hELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztZQUM5RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUM7WUFDNUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO1lB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LElBQUksSUFBSSxFQUFFOzRCQUN2QixVQUFVLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzt5QkFDdEQ7NkJBQU07NEJBQ0wsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7NEJBQzNDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQ2xEO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxlQUFVLE1BQU0sb0JBQWUsV0FBVyxnQkFBVyxPQUFPLHdCQUFtQixjQUFjLG9CQUFlLFVBQVUsVUFBSyxTQUFTLDJCQUFzQixnQkFBZ0IsT0FBSSxFQUExTCxDQUEwTCxDQUFDO1lBQzNOLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuQixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLENBQUM7UUFHSCxjQUFDO0lBQUQsQ0FBQyxBQXBGTSxDQUFjLElBQUksR0FvRnZCO0FBQ0osQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEtBQXFCLEVBQUUsS0FBOEIsRUFBRSxRQUFpQjtJQUN2RixPQUFPLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcbmltcG9ydCB7IENhbkNvbG9yIH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBDYW5CZyB9IGZyb20gJy4vYmcnO1xuaW1wb3J0IHsgQ2FuRGlzYWJsZSB9IGZyb20gJy4vZGlzYWJsZWQnO1xuaW1wb3J0IHsgQ2FuUmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQnO1xuaW1wb3J0IHsgQ2FuRWxldmF0aW9uIH0gZnJvbSAnLi9lbGV2YXRpb24nO1xuaW1wb3J0IHsgQ2FuT3V0bGluZWQgfSBmcm9tICcuL291dGxpbmVkJztcbmltcG9ydCB7IENhblNoYWRvd0NvbG9yIH0gZnJvbSAnLi9zaGFkb3ctY29sb3InO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHtcbiAgIH0gZnJvbSAnLi4vcGFyc2UnO1xuXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhblN0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG4gIHVwZGF0ZVN0eWxlOiAoZWxlbWVudDogRWxlbWVudFJlZiB8IEVsZW1lbnQpID0+IHZvaWQ7XG4gIHNldEF1dG9Db250cmFzdDogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCB0eXBlIENhblN0eWxlVXBkYXRlckN0b3IgPSBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyICYgUGFydGlhbDxDYW5Db2xvciAmIENhbkJnICYgQ2FuRGlzYWJsZSAmIENhblJhaXNlZCAmIENhbkVsZXZhdGlvbiAmIENhbk91dGxpbmVkICYgQ2FuU2hhZG93Q29sb3I+PjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU3R5bGVVcGRhdGVyPFQgZXh0ZW5kcyBDYW5TdHlsZVVwZGF0ZXJDdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU3R5bGVVcGRhdGVyPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfY2xhc3NOYW1lQW5vbnltb3VzOiBzdHJpbmc7XG4gICAgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgICBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGVTdHlsZShlbGVtZW50OiBFbGVtZW50UmVmPGFueT4gfCBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgX19iZyA9IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Qmc7XG4gICAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvciA9PT0gJ2F1dG8nXG4gICAgICAgID8gJydcbiAgICAgICAgOiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUNvbG9yO1xuICAgICAgY29uc3QgX19yYWlzZWQgPSB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVJhaXNlZDtcbiAgICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlFbGV2YXRpb247XG4gICAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlEaXNhYmxlZDtcbiAgICAgIGNvbnN0IF9fb3V0bGluZWQgPSB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eU91dGxpbmVkO1xuICAgICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5U2hhZG93Q29sb3I7XG4gICAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9hdXRvQ29udHJhc3QgfHwgdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvciA9PT0gJ2F1dG8nO1xuICAgICAgY29uc3QgZWwgPSBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBuZXdLZXkgPSBgYy0tJHtcbiAgICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfV8ke1xuICAgICAgICAgIF9fY29sb3IgfHwgREVGQVVMVF9WQUxVRX1fJHtcbiAgICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9XyR7XG4gICAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9XyR7XG4gICAgICAgICAgICAgICAgX19kaXNhYmxlZCB8fCBERUZBVUxUX1ZBTFVFfV8ke1xuICAgICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfV8ke1xuICAgICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9XyR7XG4gICAgICAgICAgICAgICAgICAgICAgX19pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUobmV3S2V5LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBzQ29sb3I6IENvbG9yIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc0JhY2tncm91bmQ6IENvbG9yIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc0JvcmRlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc1BvaW50ZXJFdmVudHM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHNCb3hTaGFkb3c6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHNCb3hTaGFkb3dBY3RpdmU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICAgIHNCb3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fZGlzYWJsZWQpIHtcbiAgICAgICAgICBzQ29sb3IgPSB0aGVtZS5kaXNhYmxlZC5jb250cmFzdDtcbiAgICAgICAgICBzUG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc0JhY2tncm91bmQgPSB0aGVtZS5kaXNhYmxlZC5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc0JhY2tncm91bmQgPSBjb2xvck9mKHRoZW1lLCBfX2JnKTtcbiAgICAgICAgICAgIGlmIChfX2lzQ29udHJhc3QgJiYgIV9fY29sb3IpIHtcbiAgICAgICAgICAgICAgc0NvbG9yID0gdGhlbWUuY29sb3JPZihgJHtfX2JnfTpjb250cmFzdGApO1xuXG4gICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGF1dG8gY29udHJhc3QgaWYgaXMgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgIGlmIChzQ29sb3IuY3NzKCkuaW5jbHVkZXMoJ2ludmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGx1bSA9IChfX2JnIGluc3RhbmNlb2YgQ29sb3IgPyBfX2JnIDogdGhlbWUuY29sb3JPZihfX2JnKSkubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICAgICAgc0NvbG9yID0gbHVtIDwgMC41ID8gdGhlbWUudGV4dC5saWdodCA6IHRoZW1lLnRleHQuZGFyaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXNDb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgICBzQ29sb3IgPSBjb2xvck9mKHRoZW1lLCBfX2NvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9fcmFpc2VkIHx8IChfX2VsZXZhdGlvbiAhPSBudWxsKSkge1xuICAgICAgICAgICAgaWYgKCFfX2JnKSB7XG4gICAgICAgICAgICAgIHNCYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzQmFja2dyb3VuZCAhPT0gX19iZyAmJiBjb2xvck9mKHRoZW1lLCBfX2JnIHx8ICdiYWNrZ3JvdW5kOnByaW1hcnknLCAnc2hhZG93Jyk7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IChfX3NoYWRvd0NvbG9yICYmIGNvbG9yT2YodGhlbWUsIF9fc2hhZG93Q29sb3IpKSB8fCBiYWNrZ3JvdW5kQ29sb3JDc3MgfHwgc0JhY2tncm91bmQgfHwgc0NvbG9yIHx8IHRoZW1lLnNoYWRvdztcbiAgICAgICAgICAgIGlmIChfX2VsZXZhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHNCb3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKF9fZWxldmF0aW9uLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzQm94U2hhZG93ID0gc2hhZG93QnVpbGRlcigzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgICAgIHNCb3hTaGFkb3dBY3RpdmUgPSBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjb2xvcjoke3NDb2xvcn07YmFja2dyb3VuZDoke3NCYWNrZ3JvdW5kfTtib3JkZXI6JHtzQm9yZGVyfTtwb2ludGVyLWV2ZW50czoke3NQb2ludGVyRXZlbnRzfTtib3gtc2hhZG93OiR7c0JveFNoYWRvd307fSR7Y2xhc3NOYW1lfTphY3RpdmV7Ym94LXNoYWRvdzoke3NCb3hTaGFkb3dBY3RpdmV9O31gO1xuICAgICAgfSwgU1RZTEVfUFJJT1JJVFkpO1xuXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzTmFtZUFub255bW91cyk7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZUFub255bW91cyA9IG5ld0NsYXNzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbG9yT2YodGhlbWU6IFRoZW1lVmFyaWFibGVzLCBjb2xvcjogc3RyaW5nIHwgbnVtYmVyIHwgQ29sb3IsIG9wdGlvbmFsPzogc3RyaW5nKSB7XG4gIHJldHVybiBjb2xvciBpbnN0YW5jZW9mIENvbG9yID8gY29sb3IgOiB0aGVtZS5jb2xvck9mKGNvbG9yLCBvcHRpb25hbCk7XG59XG4iXX0=