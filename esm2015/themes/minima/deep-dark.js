import { Color } from '@alyle/ui/color';
import { MinimaDark } from './dark';
const shadow = new Color(0, 0, 0, 1);
export class MinimaDeepDark extends MinimaDark {
    constructor() {
        super(...arguments);
        this.name = 'minima-deep-dark';
        this.background = {
            default: new Color(24, 24, 24),
            primary: {
                default: new Color(16, 16, 16),
                shadow
            },
            secondary: new Color(24, 24, 24),
            tertiary: new Color(32, 32, 32),
        };
        this.paper = {
            default: new Color(16, 16, 16),
            shadow
        };
        // field: LyFieldTheme = mergeThemes<LyFieldTheme, LyFieldTheme>(this.field, {
        //   root: _ => (className: string) => ``,
        //   appearance: {
        //     filled: _ => (className: string) => ``
        //   }
        // });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1kYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvIiwic291cmNlcyI6WyJkZWVwLWRhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQTlDOztRQUNFLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUMxQixlQUFVLEdBQUc7WUFDWCxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDOUIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTthQUNQO1lBQ0QsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNoQyxDQUFDO1FBQ0YsVUFBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzlCLE1BQU07U0FDUCxDQUFDO1FBQ0YsOEVBQThFO1FBQzlFLDBDQUEwQztRQUMxQyxrQkFBa0I7UUFDbEIsNkNBQTZDO1FBQzdDLE1BQU07UUFDTixNQUFNO0lBQ1IsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuaW1wb3J0IHsgTWluaW1hRGFyayB9IGZyb20gJy4vZGFyayc7XG5cbmNvbnN0IHNoYWRvdyA9IG5ldyBDb2xvcigwLCAwLCAwLCAxKTtcbmV4cG9ydCBjbGFzcyBNaW5pbWFEZWVwRGFyayBleHRlbmRzIE1pbmltYURhcmsgaW1wbGVtZW50cyBUaGVtZUNvbmZpZyB7XG4gIG5hbWUgPSAnbWluaW1hLWRlZXAtZGFyayc7XG4gIGJhY2tncm91bmQgPSB7XG4gICAgZGVmYXVsdDogbmV3IENvbG9yKDI0LCAyNCwgMjQpLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiBuZXcgQ29sb3IoMTYsIDE2LCAxNiksXG4gICAgICBzaGFkb3dcbiAgICB9LFxuICAgIHNlY29uZGFyeTogbmV3IENvbG9yKDI0LCAyNCwgMjQpLFxuICAgIHRlcnRpYXJ5OiBuZXcgQ29sb3IoMzIsIDMyLCAzMiksXG4gIH07XG4gIHBhcGVyID0ge1xuICAgIGRlZmF1bHQ6IG5ldyBDb2xvcigxNiwgMTYsIDE2KSxcbiAgICBzaGFkb3dcbiAgfTtcbiAgLy8gZmllbGQ6IEx5RmllbGRUaGVtZSA9IG1lcmdlVGhlbWVzPEx5RmllbGRUaGVtZSwgTHlGaWVsZFRoZW1lPih0aGlzLmZpZWxkLCB7XG4gIC8vICAgcm9vdDogXyA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBgLFxuICAvLyAgIGFwcGVhcmFuY2U6IHtcbiAgLy8gICAgIGZpbGxlZDogXyA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBgXG4gIC8vICAgfVxuICAvLyB9KTtcbn1cbiJdfQ==