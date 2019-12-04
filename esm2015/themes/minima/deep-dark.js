import { Color } from '@alyle/ui/color';
import { MinimaDark } from './dark';
const shadow = new Color(0, 0, 0, 1);
export class MinimaDeepDark extends MinimaDark {
    constructor() {
        super(...arguments);
        this.name = 'minima-deep-dark';
        this.background = {
            default: new Color(0x161616),
            primary: {
                default: new Color(0x101010),
                shadow
            },
            secondary: new Color(0x161616),
            tertiary: new Color(0x1b1b1b),
        };
        this.paper = {
            default: new Color(0x101010),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1kYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3RoZW1lcy9taW5pbWEvIiwic291cmNlcyI6WyJkZWVwLWRhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQTlDOztRQUNFLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUMxQixlQUFVLEdBQUc7WUFDWCxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzVCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO2dCQUM1QixNQUFNO2FBQ1A7WUFDRCxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzlCLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDOUIsQ0FBQztRQUNGLFVBQUssR0FBRztZQUNOLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDNUIsTUFBTTtTQUNQLENBQUM7UUFDRiw4RUFBOEU7UUFDOUUsMENBQTBDO1FBQzFDLGtCQUFrQjtRQUNsQiw2Q0FBNkM7UUFDN0MsTUFBTTtRQUNOLE1BQU07SUFDUixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5pbXBvcnQgeyBNaW5pbWFEYXJrIH0gZnJvbSAnLi9kYXJrJztcblxuY29uc3Qgc2hhZG93ID0gbmV3IENvbG9yKDAsIDAsIDAsIDEpO1xuZXhwb3J0IGNsYXNzIE1pbmltYURlZXBEYXJrIGV4dGVuZHMgTWluaW1hRGFyayBpbXBsZW1lbnRzIFRoZW1lQ29uZmlnIHtcbiAgbmFtZSA9ICdtaW5pbWEtZGVlcC1kYXJrJztcbiAgYmFja2dyb3VuZCA9IHtcbiAgICBkZWZhdWx0OiBuZXcgQ29sb3IoMHgxNjE2MTYpLCAvLyBzZWNvbmRhcnlcbiAgICBwcmltYXJ5OiB7XG4gICAgICBkZWZhdWx0OiBuZXcgQ29sb3IoMHgxMDEwMTApLFxuICAgICAgc2hhZG93XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IG5ldyBDb2xvcigweDE2MTYxNiksXG4gICAgdGVydGlhcnk6IG5ldyBDb2xvcigweDFiMWIxYiksXG4gIH07XG4gIHBhcGVyID0ge1xuICAgIGRlZmF1bHQ6IG5ldyBDb2xvcigweDEwMTAxMCksXG4gICAgc2hhZG93XG4gIH07XG4gIC8vIGZpZWxkOiBMeUZpZWxkVGhlbWUgPSBtZXJnZVRoZW1lczxMeUZpZWxkVGhlbWUsIEx5RmllbGRUaGVtZT4odGhpcy5maWVsZCwge1xuICAvLyAgIHJvb3Q6IF8gPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgYCxcbiAgLy8gICBhcHBlYXJhbmNlOiB7XG4gIC8vICAgICBmaWxsZWQ6IF8gPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgYFxuICAvLyAgIH1cbiAgLy8gfSk7XG59XG4iXX0=