import * as tslib_1 from "tslib";
import { Color } from '@alyle/ui/color';
import { MinimaDark } from './dark';
var shadow = new Color(0, 0, 0, 1);
var MinimaDeepDark = /** @class */ (function (_super) {
    tslib_1.__extends(MinimaDeepDark, _super);
    function MinimaDeepDark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'minima-deep-dark';
        _this.background = {
            default: new Color(24, 24, 24),
            primary: {
                default: new Color(16, 16, 16),
                shadow: shadow
            },
            secondary: new Color(24, 24, 24),
            tertiary: new Color(32, 32, 32),
        };
        _this.paper = {
            default: new Color(16, 16, 16),
            shadow: shadow
        };
        return _this;
        // field: LyFieldTheme = mergeThemes<LyFieldTheme, LyFieldTheme>(this.field, {
        //   root: _ => (className: string) => ``,
        //   appearance: {
        //     filled: _ => (className: string) => ``
        //   }
        // });
    }
    return MinimaDeepDark;
}(MinimaDark));
export { MinimaDeepDark };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1kYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvIiwic291cmNlcyI6WyJkZWVwLWRhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDO0lBQW9DLDBDQUFVO0lBQTlDO1FBQUEscUVBcUJDO1FBcEJDLFVBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUMxQixnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzlCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sUUFBQTthQUNQO1lBQ0QsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNoQyxDQUFDO1FBQ0YsV0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzlCLE1BQU0sUUFBQTtTQUNQLENBQUM7O1FBQ0YsOEVBQThFO1FBQzlFLDBDQUEwQztRQUMxQyxrQkFBa0I7UUFDbEIsNkNBQTZDO1FBQzdDLE1BQU07UUFDTixNQUFNO0lBQ1IsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUFvQyxVQUFVLEdBcUI3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnQGFseWxlL3VpL2NvbG9yJztcbmltcG9ydCB7IE1pbmltYURhcmsgfSBmcm9tICcuL2RhcmsnO1xuXG5jb25zdCBzaGFkb3cgPSBuZXcgQ29sb3IoMCwgMCwgMCwgMSk7XG5leHBvcnQgY2xhc3MgTWluaW1hRGVlcERhcmsgZXh0ZW5kcyBNaW5pbWFEYXJrIGltcGxlbWVudHMgVGhlbWVDb25maWcge1xuICBuYW1lID0gJ21pbmltYS1kZWVwLWRhcmsnO1xuICBiYWNrZ3JvdW5kID0ge1xuICAgIGRlZmF1bHQ6IG5ldyBDb2xvcigyNCwgMjQsIDI0KSwgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogbmV3IENvbG9yKDE2LCAxNiwgMTYpLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IG5ldyBDb2xvcigyNCwgMjQsIDI0KSxcbiAgICB0ZXJ0aWFyeTogbmV3IENvbG9yKDMyLCAzMiwgMzIpLFxuICB9O1xuICBwYXBlciA9IHtcbiAgICBkZWZhdWx0OiBuZXcgQ29sb3IoMTYsIDE2LCAxNiksXG4gICAgc2hhZG93XG4gIH07XG4gIC8vIGZpZWxkOiBMeUZpZWxkVGhlbWUgPSBtZXJnZVRoZW1lczxMeUZpZWxkVGhlbWUsIEx5RmllbGRUaGVtZT4odGhpcy5maWVsZCwge1xuICAvLyAgIHJvb3Q6IF8gPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgYCxcbiAgLy8gICBhcHBlYXJhbmNlOiB7XG4gIC8vICAgICBmaWxsZWQ6IF8gPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgYFxuICAvLyAgIH1cbiAgLy8gfSk7XG59XG4iXX0=