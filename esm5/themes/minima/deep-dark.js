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
            default: new Color(0x161616),
            primary: {
                default: new Color(0x101010),
                shadow: shadow
            },
            secondary: new Color(0x161616),
            tertiary: new Color(0x1b1b1b),
        };
        _this.paper = {
            default: new Color(0x101010),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1kYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvIiwic291cmNlcyI6WyJkZWVwLWRhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDO0lBQW9DLDBDQUFVO0lBQTlDO1FBQUEscUVBcUJDO1FBcEJDLFVBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUMxQixnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsTUFBTSxRQUFBO2FBQ1A7WUFDRCxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzlCLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDOUIsQ0FBQztRQUNGLFdBQUssR0FBRztZQUNOLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDNUIsTUFBTSxRQUFBO1NBQ1AsQ0FBQzs7UUFDRiw4RUFBOEU7UUFDOUUsMENBQTBDO1FBQzFDLGtCQUFrQjtRQUNsQiw2Q0FBNkM7UUFDN0MsTUFBTTtRQUNOLE1BQU07SUFDUixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBckJELENBQW9DLFVBQVUsR0FxQjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuaW1wb3J0IHsgTWluaW1hRGFyayB9IGZyb20gJy4vZGFyayc7XG5cbmNvbnN0IHNoYWRvdyA9IG5ldyBDb2xvcigwLCAwLCAwLCAxKTtcbmV4cG9ydCBjbGFzcyBNaW5pbWFEZWVwRGFyayBleHRlbmRzIE1pbmltYURhcmsgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWRlZXAtZGFyayc7XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogbmV3IENvbG9yKDB4MTYxNjE2KSwgLy8gc2Vjb25kYXJ5XG4gICAgcHJpbWFyeToge1xuICAgICAgZGVmYXVsdDogbmV3IENvbG9yKDB4MTAxMDEwKSxcbiAgICAgIHNoYWRvd1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiBuZXcgQ29sb3IoMHgxNjE2MTYpLFxuICAgIHRlcnRpYXJ5OiBuZXcgQ29sb3IoMHgxYjFiMWIpLFxuICB9O1xuICBwYXBlciA9IHtcbiAgICBkZWZhdWx0OiBuZXcgQ29sb3IoMHgxMDEwMTApLFxuICAgIHNoYWRvd1xuICB9O1xuICAvLyBmaWVsZDogTHlGaWVsZFRoZW1lID0gbWVyZ2VUaGVtZXM8THlGaWVsZFRoZW1lLCBMeUZpZWxkVGhlbWU+KHRoaXMuZmllbGQsIHtcbiAgLy8gICByb290OiBfID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYGAsXG4gIC8vICAgYXBwZWFyYW5jZToge1xuICAvLyAgICAgZmlsbGVkOiBfID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYGBcbiAgLy8gICB9XG4gIC8vIH0pO1xufVxuIl19