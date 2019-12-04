import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, OnChanges, Renderer2, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, styleTemplateToString, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_SIZE = 40;
var DEFAULT_BG = 'action';
export var LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
var STYLES = function (theme) {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}" + styleTemplateToString(((theme.avatar
            && theme.avatar.root
            && theme.avatar.root())), "" + className) + className + ">img{width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;-webkit-background-clip:padding-box;}"; }
    };
};
var ɵ0 = STYLES;
/** @docs-private */
var LyAvatarBase = /** @class */ (function () {
    function LyAvatarBase(_theme) {
        this._theme = _theme;
    }
    return LyAvatarBase;
}());
export { LyAvatarBase };
/** @docs-private */
export var LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
var LyAvatar = /** @class */ (function (_super) {
    tslib_1.__extends(LyAvatar, _super);
    function LyAvatar(theme, renderer, _elementRef, _styleRenderer, _defaults) {
        var _this = _super.call(this, theme) || this;
        _this._elementRef = _elementRef;
        _this._styleRenderer = _styleRenderer;
        _this._defaults = _defaults;
        /** @docs-private */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, _this.classes.root);
        return _this;
    }
    LyAvatar_1 = LyAvatar;
    Object.defineProperty(LyAvatar.prototype, "size", {
        get: function () {
            return this._size;
        },
        /** Avatar size */
        set: function (val) {
            if (val !== this.size) {
                this._size = val;
                this[0x1] = this._styleRenderer.add(LyAvatar_1.и + "-size-" + val, function () { return (function (className) { return className + "{width:" + val + "px;height:" + val + "px;}"; }); }, STYLE_PRIORITY, this[0x1]);
                // const newClass = this._theme.renderStyle(`${LyAvatar.и}.size:${val}`, () => (
                //   (className: string) => ``
                // ), STYLE_PRIORITY);
                // this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyAvatar.prototype.ngOnChanges = function () {
        this.updateStyle(this._elementRef.nativeElement);
    };
    LyAvatar.prototype.ngOnInit = function () {
        if (!this.bg) {
            this.bg = (this._defaults && this._defaults.bg) || DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = (this._defaults && this._defaults.size) || DEFAULT_SIZE;
        }
    };
    var LyAvatar_1;
    /** @docs-private */
    LyAvatar.и = 'LyAvatar';
    LyAvatar.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: StyleRenderer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_AVATAR_DEFAULT_OPTIONS,] }] }
    ]; };
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
    return LyAvatar;
}(LyAvatarMixinBase));
export { LyAvatar };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFpQm5DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFFNUIsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBRTVFLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBeUM7SUFDdkQsT0FBTztRQUNMLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyw4S0FBeUsscUJBQXFCLENBQUMsQ0FDbE8sQ0FBQyxLQUFLLENBQUMsTUFBTTtlQUNSLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtlQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFHLFNBQVcsQ0FBQyxHQUFHLFNBQVMsdUhBQW9ILEVBSHBKLENBR29KO0tBQ2xMLENBQUM7QUFDSixDQUFD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QkFDTixJQUFJO2dCQUNKLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1NBQ0YsQ0FBQztRQWtDRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO09BakNyQyxRQUFRLENBcURwQjtJQUFELGVBQUM7Q0FBQSxBQXJERCxDQUE4QixpQkFBaUIsR0FxRDlDO1NBckRZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUF2YXRhclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgQXZhdGFyIENvbXBvbmVudCAqL1xuICByb290PzogKCkgPT4gU3R5bGVUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUF2YXRhckRlZmF1bHRPcHRpb25zIHtcbiAgc2l6ZT86IG51bWJlcjtcbiAgYmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlBdmF0YXJWYXJpYWJsZXMge1xuICBhdmF0YXI/OiBMeUF2YXRhclRoZW1lO1xufVxuXG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1NJWkUgPSA0MDtcbmNvbnN0IERFRkFVTFRfQkcgPSAnYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExZX0FWQVRBUl9ERUZBVUxUX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxMeUF2YXRhckRlZmF1bHRPcHRpb25zPignTFlfQVZBVEFSX0RFRkFVTFRfT1BUSU9OUycpO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlBdmF0YXJWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlBdmF0YXIu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MS4yNWVtO2ZsZXgtc2hyaW5rOjA7YWxpZ24taXRlbXM6Y2VudGVyO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyLXJhZGl1czo1MCU7dGV4dC1hbGlnbjpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5hdmF0YXJcbiAgICAgICAgICAgICYmIHRoZW1lLmF2YXRhci5yb290XG4gICAgICAgICAgICAmJiB0aGVtZS5hdmF0YXIucm9vdCgpKSksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX0+aW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpibG9jaztvYmplY3QtZml0OmNvdmVyOy13ZWJraXQtYmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O31gXG4gIH07XG59O1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QXZhdGFyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlBdmF0YXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5QXZhdGFyQmFzZSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWF2YXRhcicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUF2YXRhciBleHRlbmRzIEx5QXZhdGFyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlBdmF0YXInO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByaXZhdGUgX3NpemU6IG51bWJlcjtcblxuICAvKiogQXZhdGFyIHNpemUgKi9cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzWzB4MV0gPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChgJHtMeUF2YXRhci7QuH0tc2l6ZS0ke3ZhbH1gLCAoKSA9PiAoXG4gICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt3aWR0aDoke3ZhbH1weDtoZWlnaHQ6JHt2YWx9cHg7fWBcbiAgICAgICksIFNUWUxFX1BSSU9SSVRZLCB0aGlzWzB4MV0pO1xuXG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKGAke0x5QXZhdGFyLtC4fS5zaXplOiR7dmFsfWAsICgpID0+IChcbiAgICAgIC8vICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgYFxuICAgICAgLy8gKSwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgLy8gdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpcy5fc2l6ZUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgWzB4MV06IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9BVkFUQVJfREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIF9kZWZhdWx0czogTHlBdmF0YXJEZWZhdWx0T3B0aW9uc1xuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSAodGhpcy5fZGVmYXVsdHMgJiYgdGhpcy5fZGVmYXVsdHMuYmcpIHx8IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSAodGhpcy5fZGVmYXVsdHMgJiYgdGhpcy5fZGVmYXVsdHMuc2l6ZSkgfHwgREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxufVxuIl19