import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import * as i0 from "@angular/core";
import * as i1 from "../theme/theme2.service";
var ɵ0 = function (className) { return className + "{position:absolute;top:0;bottom:0;left:0;right:0;}"; }, ɵ1 = function (className) { return className + "{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none;}"; }, ɵ2 = function (className) { return className + "{-webkit-tap-highlight-color:transparent;background-color:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;margin:0;outline:none;box-sizing:border-box;position:relative;text-decoration-line:none;-webkit-text-decoration-line:none;}" + className + "::-moz-focus-inner:{border:0;}"; };
export var LY_COMMON_STYLES = {
    fill: ɵ0,
    visuallyHidden: ɵ1,
    button: ɵ2
};
export var LY_COMMON_STYLES_DEPRECATED = {
    fill: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        outline: 0,
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none'
    },
    button: {
        '-webkit-tap-highlight-color': 'transparent',
        backgroundColor: "transparent",
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        margin: 0,
        outline: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        textDecorationLine: 'none',
        '-webkit-text-decoration-line': 'none',
        '&::-moz-focus-inner': {
            border: 0
        }
    }
};
var LyCoreStyles = /** @class */ (function () {
    function LyCoreStyles(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES_DEPRECATED);
    }
    LyCoreStyles.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    LyCoreStyles.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(i0.ɵɵinject(i1.LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
    LyCoreStyles = tslib_1.__decorate([
        Injectable({ providedIn: 'root' })
    ], LyCoreStyles);
    return LyCoreStyles;
}());
export { LyCoreStyles };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zdHlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvc3R5bGVzL2NvcmUtc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O1NBSzNDLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsdURBQW9ELEVBQWhFLENBQWdFLE9BQzdFLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsdUtBQW9LLEVBQWhMLENBQWdMLE9BQy9NLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsK1BBQTBQLFNBQVMsbUNBQWdDLEVBQS9TLENBQStTO0FBSGhWLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHO0lBQzlCLElBQUksSUFBeUY7SUFDN0YsY0FBYyxJQUF5TTtJQUN2TixNQUFNLElBQXdVO0NBQy9VLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRztJQUN6QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsTUFBTTtRQUM1QixpQkFBaUIsRUFBRSxNQUFNO0tBQzFCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sNkJBQTZCLEVBQUUsYUFBYTtRQUM1QyxlQUFlLEVBQUUsYUFBYTtRQUM5QixNQUFNLEVBQUUsQ0FBQztRQUNULGlCQUFpQixFQUFFLE1BQU07UUFDekIsb0JBQW9CLEVBQUUsTUFBTTtRQUM1QixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxNQUFNO1FBQ2YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsa0JBQWtCLEVBQUUsTUFBTTtRQUMxQiw4QkFBOEIsRUFBRSxNQUFNO1FBQ3RDLHFCQUFxQixFQUFFO1lBQ3JCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7S0FDRjtDQUNGLENBQUM7QUFHRjtJQUVFLHNCQUFvQixLQUFlO1FBQWYsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQURuQyxZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFBYixRQUFROzs7SUFGeEIsWUFBWTtRQUR4QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsWUFBWSxDQUd4Qjt1QkF0REQ7Q0FzREMsQUFIRCxJQUdDO1NBSFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgIH0gZnJvbSAnLi4vcGFyc2UnO1xuXG5leHBvcnQgY29uc3QgTFlfQ09NTU9OX1NUWUxFUyA9IHtcbiAgZmlsbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO31gLFxuICB2aXN1YWxseUhpZGRlbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTt9YCxcbiAgYnV0dG9uOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjA7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjA7b3V0bGluZTpub25lO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt9JHtjbGFzc05hbWV9OjotbW96LWZvY3VzLWlubmVyOntib3JkZXI6MDt9YFxufTtcblxuZXhwb3J0IGNvbnN0IExZX0NPTU1PTl9TVFlMRVNfREVQUkVDQVRFRCA9IHtcbiAgZmlsbDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgfSxcbiAgdmlzdWFsbHlIaWRkZW46IHtcbiAgICBib3JkZXI6IDAsXG4gICAgY2xpcDogJ3JlY3QoMCAwIDAgMCknLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgbWFyZ2luOiAnLTFweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxcHgnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogYHRyYW5zcGFyZW50YCxcbiAgICBib3JkZXI6IDAsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgJyY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICBib3JkZXI6IDBcbiAgICB9XG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChMWV9DT01NT05fU1RZTEVTX0RFUFJFQ0FURUQpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iXX0=