import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, OnChanges, Renderer2, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, st2c, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_SIZE = 40;
var DEFAULT_BG = 'action';
export var LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
export var STYLES = function (theme) {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}" + st2c(((theme.avatar
            && theme.avatar.root
            && theme.avatar.root())), "" + className) + className + ">img{width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;-webkit-background-clip:padding-box;}"; }
    };
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxJQUFJLEVBQ0osYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFpQm5DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFFNUIsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDO0lBQzlELE9BQU87UUFDTCxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsOEtBQXlLLElBQUksQ0FBQyxDQUNqTixDQUFDLEtBQUssQ0FBQyxNQUFNO2VBQ1IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2VBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsU0FBVyxDQUFDLEdBQUcsU0FBUyx1SEFBb0gsRUFIcEosQ0FHb0o7S0FDbEwsQ0FBQztBQUNK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QUU7Z0JBQ04sSUFBSTtnQkFDSixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixXQUFXO2dCQUNYLGFBQWE7YUFDZDtZQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7UUFrQ0csbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQTtPQWpDckMsUUFBUSxDQXFEcEI7SUFBRCxlQUFDO0NBQUEsQUFyREQsQ0FBOEIsaUJBQWlCLEdBcUQ5QztTQXJEWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgc3QyYyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5QXZhdGFyVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBBdmF0YXIgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiAoKSA9PiBTdHlsZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5QXZhdGFyRGVmYXVsdE9wdGlvbnMge1xuICBzaXplPzogbnVtYmVyO1xuICBiZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUF2YXRhclZhcmlhYmxlcyB7XG4gIGF2YXRhcj86IEx5QXZhdGFyVGhlbWU7XG59XG5cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfU0laRSA9IDQwO1xuY29uc3QgREVGQVVMVF9CRyA9ICdhY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTFlfQVZBVEFSX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEx5QXZhdGFyRGVmYXVsdE9wdGlvbnM+KCdMWV9BVkFUQVJfREVGQVVMVF9PUFRJT05TJyk7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlBdmF0YXJWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlBdmF0YXIu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MS4yNWVtO2ZsZXgtc2hyaW5rOjA7YWxpZ24taXRlbXM6Y2VudGVyO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyLXJhZGl1czo1MCU7dGV4dC1hbGlnbjpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuYXZhdGFyXG4gICAgICAgICAgICAmJiB0aGVtZS5hdmF0YXIucm9vdFxuICAgICAgICAgICAgJiYgdGhlbWUuYXZhdGFyLnJvb3QoKSkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9PmltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6YmxvY2s7b2JqZWN0LWZpdDpjb3Zlcjstd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUF2YXRhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QXZhdGFyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUF2YXRhckJhc2UpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hdmF0YXInLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlBdmF0YXIgZXh0ZW5kcyBMeUF2YXRhck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5QXZhdGFyJztcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG5cbiAgLyoqIEF2YXRhciBzaXplICovXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoYCR7THlBdmF0YXIu0Lh9LXNpemUtJHt2YWx9YCwgKCkgPT4gKFxuICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6JHt2YWx9cHg7aGVpZ2h0OiR7dmFsfXB4O31gXG4gICAgICApLCBTVFlMRV9QUklPUklUWSwgdGhpc1sweDFdKTtcblxuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShgJHtMeUF2YXRhci7QuH0uc2l6ZToke3ZhbH1gLCAoKSA9PiAoXG4gICAgICAvLyAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYGBcbiAgICAgIC8vICksIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIC8vIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMuX2hvc3RDbGFzcy51cGRhdGUobmV3Q2xhc3MsIHRoaXMuX3NpemVDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIFsweDFdOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9zdHlsZVJlbmRlcmVyOiBTdHlsZVJlbmRlcmVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfQVZBVEFSX0RFRkFVTFRfT1BUSU9OUykgcHJpdmF0ZSBfZGVmYXVsdHM6IEx5QXZhdGFyRGVmYXVsdE9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gKHRoaXMuX2RlZmF1bHRzICYmIHRoaXMuX2RlZmF1bHRzLmJnKSB8fCBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gKHRoaXMuX2RlZmF1bHRzICYmIHRoaXMuX2RlZmF1bHRzLnNpemUpIHx8IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==