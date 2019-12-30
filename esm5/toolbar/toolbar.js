import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input, OnInit, OnChanges, } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, styleTemplateToString, StyleCollection, LyClasses, StyleTemplate, ThemeRef, StyleRenderer, LyHostClass } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'fixed';
var DEFAULT_BG = 'background:tertiary';
export var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{padding:0 16px;display:flex;box-sizing:border-box;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:64px;z-index:" + theme.zIndex.toolbar + ";}" + styleTemplateToString(((theme.toolbar
            && theme.toolbar.root
            && (theme.toolbar.root instanceof StyleCollection
                ? theme.toolbar.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.toolbar.root(__)))), "" + className) + className + " " + theme.getBreakpoint('XSmall') + "{height:56px;}"; }; }
    };
};
/** @docs-private */
var LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
export { LyToolbarBase };
/** @docs-private */
export var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
var LyToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(LyToolbar, _super);
    function LyToolbar(_renderer, _el, theme, _sr) {
        var _this = _super.call(this, theme) || this;
        _this._el = _el;
        _this.theme = theme;
        _this._sr = _sr;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this.theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        _renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._sr.add("LyToolbar.appearance:" + val, function (theme, ref) {
                    var classes = ref.selectorsOf(STYLES);
                    if (theme.toolbar && theme.toolbar.appearance) {
                        var appearance = theme.toolbar.appearance[val];
                        if (appearance) {
                            return appearance instanceof StyleCollection
                                ? appearance.setTransformer(function (_) { return _(classes); }).css
                                : appearance(classes);
                        }
                    }
                    throw new Error(val + " not found in theme.field.appearance");
                }, STYLE_PRIORITY, this._appearanceClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyToolbar.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyToolbar.prototype.ngOnInit = function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    };
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: StyleRenderer }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyToolbar.prototype, "position", null);
    tslib_1.__decorate([
        Input()
    ], LyToolbar.prototype, "appearance", null);
    LyToolbar = tslib_1.__decorate([
        Directive({
            selector: 'ly-toolbar',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor'
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
    ], LyToolbar);
    return LyToolbar;
}(LyToolbarMixinBase));
export { LyToolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2IsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDUixhQUFhLEVBQ2IsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBZ0JqQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztBQUNqQyxJQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQztBQUV6QyxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUEwQyxFQUFFLEdBQWE7SUFDOUUsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxPQUFPO1FBQ0wsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLGNBQU0sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLG1KQUE4SSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sVUFBSyxxQkFBcUIsQ0FBQyxDQUN0TyxDQUFDLEtBQUssQ0FBQyxPQUFPO2VBQ1QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2VBQ2xCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDL0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENB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ImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZixcbiAgU3R5bGVSZW5kZXJlcixcbiAgTHlIb3N0Q2xhc3MgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5VG9vbGJhclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgVG9vbGJhciBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGFwcGVhcmFuY2U/OiB7XG4gICAgW2tleTogc3RyaW5nXTogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5VG9vbGJhclZhcmlhYmxlcyB7XG4gIHRvb2xiYXI/OiBMeVRvb2xiYXJUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnZml4ZWQnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdiYWNrZ3JvdW5kOnRlcnRpYXJ5JztcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVRvb2xiYXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmZsZXg7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7aGVpZ2h0OjY0cHg7ei1pbmRleDoke3RoZW1lLnpJbmRleC50b29sYmFyfTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS50b29sYmFyXG4gICAgICAgICAgICAmJiB0aGVtZS50b29sYmFyLnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS50b29sYmFyLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS50b29sYmFyLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oX18pKS5jc3NcbiAgICAgICAgICAgICAgOiB0aGVtZS50b29sYmFyLnJvb3QoX18pKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e2hlaWdodDo1NnB4O31gXG4gIH07XG59O1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXRpYycgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knIHwgJ3JlbGF0aXZlJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRvb2xiYXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICAgIG1peGluQ29sb3IoXG4gICAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5VG9vbGJhckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciBleHRlbmRzIEx5VG9vbGJhck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUb29sYmFyLnBvc2l0aW9uOiR7dmFsfWAsIGBwb3NpdGlvbjoke3ZhbH1gLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6IHBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3NyLmFkZChcbiAgICAgICAgYEx5VG9vbGJhci5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogTHlUb29sYmFyVmFyaWFibGVzLCByZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgaWYgKHRoZW1lLnRvb2xiYXIgJiYgdGhlbWUudG9vbGJhci5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhlbWUudG9vbGJhci5hcHBlYXJhbmNlW3ZhbF07XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gYXBwZWFyYW5jZSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgID8gYXBwZWFyYW5jZS5zZXRUcmFuc2Zvcm1lcigoXykgPT4gXyhjbGFzc2VzKSkuY3NzXG4gICAgICAgICAgICAgICAgOiBhcHBlYXJhbmNlKGNsYXNzZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuZmllbGQuYXBwZWFyYW5jZWApO1xuICAgICAgICB9LFxuICAgICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3NyOiBTdHlsZVJlbmRlcmVyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==