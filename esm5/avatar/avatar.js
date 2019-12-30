import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, OnChanges, Renderer2, InjectionToken, Inject, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, styleTemplateToString, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_SIZE = 40;
var DEFAULT_BG = 'action';
export var LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
export var STYLES = function (theme) {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}" + styleTemplateToString(((theme.avatar
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2F2YXRhci8iLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFpQm5DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFFNUIsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQ2xDLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsQ0FBQyxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXlDO0lBQzlELE9BQU87UUFDTCxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsOEtBQXlLLHFCQUFxQixDQUFDLENBQ2xPLENBQUMsS0FBSyxDQUFDLE1BQU07ZUFDUixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7ZUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxTQUFXLENBQUMsR0FBRyxTQUFTLHVIQUFvSCxFQUhwSixDQUdvSjtLQUNsTCxDQUFD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QU0sRUFBRTtnQkFDTixJQUFJO2dCQUNKLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1NBQ0YsQ0FBQztRQWtDRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO09BakNyQyxRQUFRLENBcURwQjtJQUFELGVBQUM7Q0FBQSxBQXJERCxDQUE4QixpQkFBaUIsR0FxRDlDO1NBckRZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUF2YXRhclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgQXZhdGFyIENvbXBvbmVudCAqL1xuICByb290PzogKCkgPT4gU3R5bGVUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUF2YXRhckRlZmF1bHRPcHRpb25zIHtcbiAgc2l6ZT86IG51bWJlcjtcbiAgYmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlBdmF0YXJWYXJpYWJsZXMge1xuICBhdmF0YXI/OiBMeUF2YXRhclRoZW1lO1xufVxuXG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1NJWkUgPSA0MDtcbmNvbnN0IERFRkFVTFRfQkcgPSAnYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExZX0FWQVRBUl9ERUZBVUxUX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxMeUF2YXRhckRlZmF1bHRPcHRpb25zPignTFlfQVZBVEFSX0RFRkFVTFRfT1BUSU9OUycpO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5QXZhdGFyVmFyaWFibGVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5QXZhdGFyLtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjEuMjVlbTtmbGV4LXNocmluazowO2FsaWduLWl0ZW1zOmNlbnRlcjt1c2VyLXNlbGVjdDpub25lO2JvcmRlci1yYWRpdXM6NTAlO3RleHQtYWxpZ246Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUuYXZhdGFyXG4gICAgICAgICAgICAmJiB0aGVtZS5hdmF0YXIucm9vdFxuICAgICAgICAgICAgJiYgdGhlbWUuYXZhdGFyLnJvb3QoKSkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9PmltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6YmxvY2s7b2JqZWN0LWZpdDpjb3Zlcjstd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUF2YXRhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QXZhdGFyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUF2YXRhckJhc2UpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hdmF0YXInLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlBdmF0YXIgZXh0ZW5kcyBMeUF2YXRhck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5QXZhdGFyJztcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG5cbiAgLyoqIEF2YXRhciBzaXplICovXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoYCR7THlBdmF0YXIu0Lh9LXNpemUtJHt2YWx9YCwgKCkgPT4gKFxuICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6JHt2YWx9cHg7aGVpZ2h0OiR7dmFsfXB4O31gXG4gICAgICApLCBTVFlMRV9QUklPUklUWSwgdGhpc1sweDFdKTtcblxuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShgJHtMeUF2YXRhci7QuH0uc2l6ZToke3ZhbH1gLCAoKSA9PiAoXG4gICAgICAvLyAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYGBcbiAgICAgIC8vICksIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIC8vIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMuX2hvc3RDbGFzcy51cGRhdGUobmV3Q2xhc3MsIHRoaXMuX3NpemVDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIFsweDFdOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9zdHlsZVJlbmRlcmVyOiBTdHlsZVJlbmRlcmVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfQVZBVEFSX0RFRkFVTFRfT1BUSU9OUykgcHJpdmF0ZSBfZGVmYXVsdHM6IEx5QXZhdGFyRGVmYXVsdE9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gKHRoaXMuX2RlZmF1bHRzICYmIHRoaXMuX2RlZmF1bHRzLmJnKSB8fCBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gKHRoaXMuX2RlZmF1bHRzICYmIHRoaXMuX2RlZmF1bHRzLnNpemUpIHx8IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==