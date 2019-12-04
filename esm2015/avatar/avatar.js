var LyAvatar_1;
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, OnChanges, Renderer2, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, styleTemplateToString, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
const STYLE_PRIORITY = -2;
const DEFAULT_SIZE = 40;
const DEFAULT_BG = 'action';
export const LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
const STYLES = (theme) => {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: (className) => `${className}{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}${styleTemplateToString(((theme.avatar
            && theme.avatar.root
            && theme.avatar.root())), `${className}`)}${className}>img{width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;-webkit-background-clip:padding-box;}`
    };
};
const ɵ0 = STYLES;
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixXQUFXLEVBQ1gsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBaUJuQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUNsQyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQztBQUU1RSxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXlDLEVBQUUsRUFBRTtJQUMzRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElBQUksRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyx5S0FBeUsscUJBQXFCLENBQUMsQ0FDbE8sQ0FBQyxLQUFLLENBQUMsTUFBTTtlQUNSLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtlQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsU0FBUyxvSEFBb0g7S0FDbEws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QUk7WUFDSixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsV0FBVztZQUNYLGFBQWE7U0FDZDtLQUNGLENBQUM7SUFrQ0csbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQTtHQWpDckMsUUFBUSxDQXFEcEI7U0FyRFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIEluamVjdGlvblRva2VuLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5QXZhdGFyVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBBdmF0YXIgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiAoKSA9PiBTdHlsZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5QXZhdGFyRGVmYXVsdE9wdGlvbnMge1xuICBzaXplPzogbnVtYmVyO1xuICBiZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUF2YXRhclZhcmlhYmxlcyB7XG4gIGF2YXRhcj86IEx5QXZhdGFyVGhlbWU7XG59XG5cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfU0laRSA9IDQwO1xuY29uc3QgREVGQVVMVF9CRyA9ICdhY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTFlfQVZBVEFSX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEx5QXZhdGFyRGVmYXVsdE9wdGlvbnM+KCdMWV9BVkFUQVJfREVGQVVMVF9PUFRJT05TJyk7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUF2YXRhclZhcmlhYmxlcykgPT4ge1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeUF2YXRhci7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToxLjI1ZW07ZmxleC1zaHJpbms6MDthbGlnbi1pdGVtczpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXItcmFkaXVzOjUwJTt0ZXh0LWFsaWduOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLmF2YXRhclxuICAgICAgICAgICAgJiYgdGhlbWUuYXZhdGFyLnJvb3RcbiAgICAgICAgICAgICYmIHRoZW1lLmF2YXRhci5yb290KCkpKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfT5pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmJsb2NrO29iamVjdC1maXQ6Y292ZXI7LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7fWBcbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlBdmF0YXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUF2YXRhck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlBdmF0YXJCYXNlKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYXZhdGFyJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5QXZhdGFyIGV4dGVuZHMgTHlBdmF0YXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUF2YXRhcic7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuXG4gIC8qKiBBdmF0YXIgc2l6ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIHRoaXNbMHgxXSA9IHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKGAke0x5QXZhdGFyLtC4fS1zaXplLSR7dmFsfWAsICgpID0+IChcbiAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOiR7dmFsfXB4O2hlaWdodDoke3ZhbH1weDt9YFxuICAgICAgKSwgU1RZTEVfUFJJT1JJVFksIHRoaXNbMHgxXSk7XG5cbiAgICAgIC8vIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoYCR7THlBdmF0YXIu0Lh9LnNpemU6JHt2YWx9YCwgKCkgPT4gKFxuICAgICAgLy8gICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBgXG4gICAgICAvLyApLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICAvLyB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl9ob3N0Q2xhc3MudXBkYXRlKG5ld0NsYXNzLCB0aGlzLl9zaXplQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBbMHgxXTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc3R5bGVSZW5kZXJlcjogU3R5bGVSZW5kZXJlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0FWQVRBUl9ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHRzOiBMeUF2YXRhckRlZmF1bHRPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9ICh0aGlzLl9kZWZhdWx0cyAmJiB0aGlzLl9kZWZhdWx0cy5iZykgfHwgREVGQVVMVF9CRztcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICh0aGlzLl9kZWZhdWx0cyAmJiB0aGlzLl9kZWZhdWx0cy5zaXplKSB8fCBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG59XG4iXX0=