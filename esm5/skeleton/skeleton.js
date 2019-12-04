import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ThemeVariables, keyframesUniqueId, LyHostClass, StyleRenderer, toBoolean, Dir } from '@alyle/ui';
var STYLE_PRIORITY = -0.5;
export var STYLES = function (theme) {
    var id = keyframesUniqueId.next();
    var _a = theme.background, primary = _a.primary, secondary = _a.secondary, tertiary = _a.tertiary;
    var dir = theme.direction === Dir.ltr ? -1 : 1;
    var lum = primary.default.luminance();
    var one = (lum < .5
        ? tertiary
        : secondary);
    var two = (lum < .5
        ? secondary
        : tertiary);
    one = one.darken(1 * (lum < .5 ? -.5 : 0));
    two = two.darken(.25 * (lum < .5 ? -1 : 1));
    return {
        $name: LySkeleton.и,
        $priority: STYLE_PRIORITY,
        $global: function (className) { return "@keyframes " + id + "{" + className + " 0%{background-position:" + -dir * 200 + "% 50%;}" + className + " 100%{background-position:" + dir * 200 + "% 50%;}}"; },
        root: function (className) { return className + "{content:'';background:" + ("linear-gradient(270deg, " + one + ", " + two + ", " + two + ", " + one + ")") + ";background-size:400% 400%;animation:" + id + " 8s ease-in-out infinite;color:transparent;cursor:progress;user-select:none;}"; }
    };
};
var LySkeleton = /** @class */ (function () {
    function LySkeleton(styleRenderer, hostClass) {
        this.styleRenderer = styleRenderer;
        this.hostClass = hostClass;
        /** @docs-private */
        this.classes = this.styleRenderer.addSheet(STYLES);
    }
    Object.defineProperty(LySkeleton.prototype, "skeleton", {
        get: function () {
            return this._skeleton;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            this._skeleton = newVal;
            this.hostClass.toggle(this.classes.root, newVal);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    LySkeleton.и = 'LySkeleton';
    LySkeleton.ctorParameters = function () { return [
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
    tslib_1.__decorate([
        Input('lySkeleton')
    ], LySkeleton.prototype, "skeleton", null);
    LySkeleton = tslib_1.__decorate([
        Directive({
            selector: '[lySkeleton]',
            providers: [
                LyHostClass,
                StyleRenderer
            ],
            exportAs: 'lySkeleton'
        })
    ], LySkeleton);
    return LySkeleton;
}());
export { LySkeleton };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvc2tlbGV0b24vIiwic291cmNlcyI6WyJza2VsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUNMLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGFBQWEsRUFDYixTQUFTLEVBQ1QsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpCLElBQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCO0lBQzFDLElBQU0sRUFBRSxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLElBQUEscUJBQW1ELEVBQWpELG9CQUFPLEVBQUUsd0JBQVMsRUFBRSxzQkFBNkIsQ0FBQztJQUMxRCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2pCLENBQUMsQ0FBQyxRQUFRO1FBQ1YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNqQixDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNkLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVDLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkIsU0FBUyxFQUFFLGNBQWM7UUFDekIsT0FBTyxFQUFFLFVBQUMsU0FBaUIsSUFBSyxPQUFBLGdCQUFjLEVBQUUsU0FBSSxTQUFTLGdDQUEyQixDQUFDLEdBQUcsR0FBRyxHQUFHLGVBQVUsU0FBUyxrQ0FBNkIsR0FBRyxHQUFHLEdBQUcsYUFBVSxFQUFySSxDQUFxSTtRQUNySyxJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxnQ0FDckMsNkJBQ0UsR0FBRyxVQUVILEdBQUcsVUFFSCxHQUFHLFVBRUgsR0FBRyxNQUNGLDhDQUF3QyxFQUFFLGtGQUErRSxFQVRuRyxDQVNtRztLQUNqSSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVUY7SUFpQkUsb0JBQ1UsYUFBNEIsRUFDNUIsU0FBc0I7UUFEdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQWhCaEMsb0JBQW9CO1FBQ1gsWUFBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBZ0JuRCxDQUFDO0lBYkwsc0JBQUksZ0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FMQTtJQVJELG9CQUFvQjtJQUNKLFlBQUMsR0FBRyxZQUFZLENBQUM7O2dCQWdCUixhQUFhO2dCQUNqQixXQUFXOztJQVpoQztRQURDLEtBQUssQ0FBQyxZQUFZLENBQUM7OENBR25CO0lBVFUsVUFBVTtRQVJ0QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO2FBQ2Q7WUFDRCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO09BQ1csVUFBVSxDQXFCdEI7SUFBRCxpQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBUaGVtZVZhcmlhYmxlcyxcbiAga2V5ZnJhbWVzVW5pcXVlSWQsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICB0b0Jvb2xlYW4sXG4gIERpciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTAuNTtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IGlkID0ga2V5ZnJhbWVzVW5pcXVlSWQubmV4dCgpO1xuICBjb25zdCB7IHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnkgfSA9IHRoZW1lLmJhY2tncm91bmQ7XG4gIGNvbnN0IGRpciA9IHRoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciA/IC0xIDogMTtcbiAgY29uc3QgbHVtID0gcHJpbWFyeS5kZWZhdWx0Lmx1bWluYW5jZSgpO1xuICBsZXQgb25lID0gKGx1bSA8IC41XG4gICAgPyB0ZXJ0aWFyeVxuICAgIDogc2Vjb25kYXJ5KTtcbiAgbGV0IHR3byA9IChsdW0gPCAuNVxuICAgID8gc2Vjb25kYXJ5XG4gICAgOiB0ZXJ0aWFyeSk7XG4gIG9uZSA9IG9uZS5kYXJrZW4oMSAqIChsdW0gPCAuNSA/IC0uNSA6IDApKTtcbiAgdHdvID0gdHdvLmRhcmtlbiguMjUgKiAobHVtIDwgLjUgPyAtMSA6IDEpKTtcblxuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeVNrZWxldG9uLtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJGdsb2JhbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQGtleWZyYW1lcyAke2lkfXske2NsYXNzTmFtZX0gMCV7YmFja2dyb3VuZC1wb3NpdGlvbjokey1kaXIgKiAyMDB9JSA1MCU7fSR7Y2xhc3NOYW1lfSAxMDAle2JhY2tncm91bmQtcG9zaXRpb246JHtkaXIgKiAyMDB9JSA1MCU7fX1gLFxuICAgIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjb250ZW50OicnO2JhY2tncm91bmQ6JHtcbiAgICAgICAgYGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICR7XG4gICAgICAgICAgb25lXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgdHdvXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgdHdvXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgb25lXG4gICAgICAgIH0pYH07YmFja2dyb3VuZC1zaXplOjQwMCUgNDAwJTthbmltYXRpb246JHtpZH0gOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7Y29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnByb2dyZXNzO3VzZXItc2VsZWN0Om5vbmU7fWBcbiAgfTtcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNrZWxldG9uXScsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXSxcbiAgZXhwb3J0QXM6ICdseVNrZWxldG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNrZWxldG9uIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5U2tlbGV0b24nO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5zdHlsZVJlbmRlcmVyLmFkZFNoZWV0KFNUWUxFUyk7XG5cbiAgQElucHV0KCdseVNrZWxldG9uJylcbiAgZ2V0IHNrZWxldG9uKCkge1xuICAgIHJldHVybiB0aGlzLl9za2VsZXRvbjtcbiAgfVxuICBzZXQgc2tlbGV0b24odmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fc2tlbGV0b24gPSBuZXdWYWw7XG4gICAgdGhpcy5ob3N0Q2xhc3MudG9nZ2xlKHRoaXMuY2xhc3Nlcy5yb290LCBuZXdWYWwpO1xuICB9XG4gIHByaXZhdGUgX3NrZWxldG9uOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVSZW5kZXJlcjogU3R5bGVSZW5kZXJlcixcbiAgICBwcml2YXRlIGhvc3RDbGFzczogTHlIb3N0Q2xhc3NcbiAgKSB7IH1cbn1cbiJdfQ==