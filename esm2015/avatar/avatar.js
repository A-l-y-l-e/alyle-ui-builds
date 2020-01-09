var LyAvatar_1;
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, OnChanges, Renderer2, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, st2c, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
const STYLE_PRIORITY = -2;
const DEFAULT_SIZE = 40;
const DEFAULT_BG = 'action';
export const LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
export const STYLES = (theme) => {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: (className) => `${className}{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}${st2c(((theme.avatar
            && theme.avatar.root
            && theme.avatar.root())), `${className}`)}${className}>img{width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;-webkit-background-clip:padding-box;}`
    };
};
/** @docs-private */
export class LyAvatarBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
export const LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
let LyAvatar = LyAvatar_1 = class LyAvatar extends LyAvatarMixinBase {
    constructor(theme, renderer, _elementRef, _styleRenderer, _defaults) {
        super(theme);
        this._elementRef = _elementRef;
        this._styleRenderer = _styleRenderer;
        this._defaults = _defaults;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, this.classes.root);
    }
    /** Avatar size */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this[0x1] = this._styleRenderer.add(`${LyAvatar_1.и}-size-${val}`, () => ((className) => `${className}{width:${val}px;height:${val}px;}`), STYLE_PRIORITY, this[0x1]);
            // const newClass = this._theme.renderStyle(`${LyAvatar.и}.size:${val}`, () => (
            //   (className: string) => ``
            // ), STYLE_PRIORITY);
            // this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
        }
    }
    get size() {
        return this._size;
    }
    ngOnChanges() {
        this.updateStyle(this._elementRef.nativeElement);
    }
    ngOnInit() {
        if (!this.bg) {
            this.bg = (this._defaults && this._defaults.bg) || DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = (this._defaults && this._defaults.size) || DEFAULT_SIZE;
        }
    }
};
/** @docs-private */
LyAvatar.и = 'LyAvatar';
LyAvatar.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: StyleRenderer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_AVATAR_DEFAULT_OPTIONS,] }] }
];
tslib_1.__decorate([
    Input()
], LyAvatar.prototype, "size", null);
LyAvatar = LyAvatar_1 = tslib_1.__decorate([
    Directive({
        selector: 'ly-avatar',
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor',
        ],
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    }),
    tslib_1.__param(4, Optional()), tslib_1.__param(4, Inject(LY_AVATAR_DEFAULT_OPTIONS))
], LyAvatar);
export { LyAvatar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsSUFBSSxFQUNKLGFBQWEsRUFDYixXQUFXLEVBQ1gsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBaUJuQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUNsQyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQztBQUU1RSxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUF5QyxFQUFFLEVBQUU7SUFDbEUsT0FBTztRQUNMLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMseUtBQXlLLElBQUksQ0FBQyxDQUNqTixDQUFDLEtBQUssQ0FBQyxNQUFNO2VBQ1IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2VBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxTQUFTLG9IQUFvSDtL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TixJQUFJO1lBQ0osT0FBTztZQUNQLFFBQVE7WUFDUixVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7U0FDZDtRQUNELFNBQVMsRUFBRTtZQUNULFdBQVc7WUFDWCxhQUFhO1NBQ2Q7S0FDRixDQUFDO0lBa0NHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7R0FqQ3JDLFFBQVEsQ0FxRHBCO1NBckRZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdDJjLFxuICBTdHlsZVRlbXBsYXRlLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlBdmF0YXJUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIEF2YXRhciBDb21wb25lbnQgKi9cbiAgcm9vdD86ICgpID0+IFN0eWxlVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlBdmF0YXJEZWZhdWx0T3B0aW9ucyB7XG4gIHNpemU/OiBudW1iZXI7XG4gIGJnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5QXZhdGFyVmFyaWFibGVzIHtcbiAgYXZhdGFyPzogTHlBdmF0YXJUaGVtZTtcbn1cblxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9TSVpFID0gNDA7XG5jb25zdCBERUZBVUxUX0JHID0gJ2FjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBMWV9BVkFUQVJfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48THlBdmF0YXJEZWZhdWx0T3B0aW9ucz4oJ0xZX0FWQVRBUl9ERUZBVUxUX09QVElPTlMnKTtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUF2YXRhclZhcmlhYmxlcykgPT4ge1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeUF2YXRhci7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToxLjI1ZW07ZmxleC1zaHJpbms6MDthbGlnbi1pdGVtczpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXItcmFkaXVzOjUwJTt0ZXh0LWFsaWduOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5hdmF0YXJcbiAgICAgICAgICAgICYmIHRoZW1lLmF2YXRhci5yb290XG4gICAgICAgICAgICAmJiB0aGVtZS5hdmF0YXIucm9vdCgpKSksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX0+aW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpibG9jaztvYmplY3QtZml0OmNvdmVyOy13ZWJraXQtYmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O31gXG4gIH07XG59O1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QXZhdGFyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlBdmF0YXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5QXZhdGFyQmFzZSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWF2YXRhcicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUF2YXRhciBleHRlbmRzIEx5QXZhdGFyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlBdmF0YXInO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByaXZhdGUgX3NpemU6IG51bWJlcjtcblxuICAvKiogQXZhdGFyIHNpemUgKi9cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzWzB4MV0gPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChgJHtMeUF2YXRhci7QuH0tc2l6ZS0ke3ZhbH1gLCAoKSA9PiAoXG4gICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDoke3ZhbH1weDtoZWlnaHQ6JHt2YWx9cHg7fWBcbiAgICAgICksIFNUWUxFX1BSSU9SSVRZLCB0aGlzWzB4MV0pO1xuXG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKGAke0x5QXZhdGFyLtC4fS5zaXplOiR7dmFsfWAsICgpID0+IChcbiAgICAgIC8vICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgYFxuICAgICAgLy8gKSwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgLy8gdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpcy5fc2l6ZUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgWzB4MV06IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9BVkFUQVJfREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIF9kZWZhdWx0czogTHlBdmF0YXJEZWZhdWx0T3B0aW9uc1xuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSAodGhpcy5fZGVmYXVsdHMgJiYgdGhpcy5fZGVmYXVsdHMuYmcpIHx8IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSAodGhpcy5fZGVmYXVsdHMgJiYgdGhpcy5fZGVmYXVsdHMuc2l6ZSkgfHwgREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxufVxuIl19