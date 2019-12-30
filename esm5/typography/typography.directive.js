import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges } from '@angular/core';
import { LyTheme2, toBoolean, ThemeVariables, mixinStyleUpdater, mixinColor, StyleCollection, StyleTemplate, styleTemplateToString, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -1;
export var STYLES = function (theme) {
    return {
        $name: LyTypography.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{margin:0;display:block;font-family:" + theme.typography.fontFamily + ";}" + styleTemplateToString(((theme.typography
            && theme.typography.root
            && (theme.typography.root instanceof StyleCollection
                ? theme.typography.root.setTransformer(function (fn) { return fn(); }).css
                : theme.typography.root()))), "" + className); },
        gutterTop: function (className) { return className + "{margin-top:0.35em;}"; },
        gutterBottom: function (className) { return className + "{margin-bottom:0.35em;}"; },
        gutter: function (className) { return className + "{margin:0.35em 0;}"; }
    };
};
/** @docs-private */
var LyTypographyBase = /** @class */ (function () {
    function LyTypographyBase(_theme) {
        this._theme = _theme;
    }
    return LyTypographyBase;
}());
export { LyTypographyBase };
/** @docs-private */
export var LyTypographyMixinBase = mixinStyleUpdater(mixinColor((LyTypographyBase)));
var LyTypography = /** @class */ (function (_super) {
    tslib_1.__extends(LyTypography, _super);
    function LyTypography(_theme, _el, renderer, sr, hostClass) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this.renderer = renderer;
        _this.sr = sr;
        _this.hostClass = hostClass;
        /** @docs-private */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        _this.renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyTypography.prototype, "lyTyp", {
        get: function () {
            return this._lyTyp;
        },
        set: function (val) {
            if (val !== this.lyTyp) {
                if (val) {
                    this._lyTypClass = this._createTypClass(val, this._lyTypClass);
                }
                else if (this._lyTypClass) {
                    this.renderer.removeClass(this._el.nativeElement, this._lyTypClass);
                    this._lyTypClass = null;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "noWrap", {
        get: function () {
            return this._noWrap;
        },
        /** The text will truncate with an ellipsis. */
        set: function (val) {
            var newValue = toBoolean(val);
            if (newValue) {
                this._noWrapClass = this._theme.addSimpleStyle('lyTyp.noWrap', {
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                });
                this.renderer.addClass(this._el.nativeElement, this._noWrapClass);
            }
            else if (this._noWrapClass) {
                this.renderer.removeClass(this._el.nativeElement, this._noWrapClass);
                this._noWrapClass = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutter", {
        get: function () {
            return this._gutter;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                this.hostClass.toggle(this.classes.gutter, newVal);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterTop", {
        get: function () {
            return this._gutterTop;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                this.hostClass.toggle(this.classes.gutterTop, newVal);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterBottom", {
        get: function () {
            return this._gutterBottom;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                this.hostClass.toggle(this.classes.gutterBottom, newVal);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyTypography.prototype.ngOnInit = function () {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error("use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'");
        }
    };
    LyTypography.prototype.ngOnChanges = function () {
        this.updateStyle(this._el.nativeElement);
    };
    LyTypography.prototype._createTypClass = function (val, instance) {
        var newKey = "k-typ:" + val;
        return this.sr.add(newKey, function (theme) {
            if (theme.typography && theme.typography.lyTyp) {
                var lyTyp = theme.typography.lyTyp[val];
                if (lyTyp) {
                    return lyTyp instanceof StyleCollection
                        ? lyTyp.setTransformer(function (_) { return _(); }).css
                        : lyTyp();
                }
            }
            throw new Error("Value typography.lyTyp['" + val + "'] not found in ThemeVariables");
        }, STYLE_PRIORITY, instance);
    };
    /** @docs-private */
    LyTypography.и = 'LyTypography';
    LyTypography.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyTypography.prototype, "lyTyp", null);
    tslib_1.__decorate([
        Input()
    ], LyTypography.prototype, "noWrap", null);
    tslib_1.__decorate([
        Input()
    ], LyTypography.prototype, "gutter", null);
    tslib_1.__decorate([
        Input()
    ], LyTypography.prototype, "gutterTop", null);
    tslib_1.__decorate([
        Input()
    ], LyTypography.prototype, "gutterBottom", null);
    LyTypography = tslib_1.__decorate([
        Directive({
            selector: "[lyTyp]",
            inputs: [
                'color'
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
    ], LyTypography);
    return LyTypography;
}(LyTypographyMixinBase));
export { LyTypography };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsZUFBZSxFQUNmLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWdCbkMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBNkM7SUFDbEUsT0FBTztRQUNMLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNyQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyw0Q0FBdUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLFVBQUsscUJBQXFCLENBQUMsQ0FDbEksQ0FBQyxLQUFLLENBQUMsVUFBVTtlQUNaLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSTtlQUNyQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxZQUFZLGVBQWU7Z0JBQ2xELENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEVBQUUsRUFBSixDQUFJLENBQUMsQ0FBQyxHQUFHO2dCQUN0RCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUM3QixDQUFDLEVBQUUsS0FBRyxTQUFX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LFVBQVU7Z0JBQ0wsU0FBUztnQkFDZixhQUFhO2dCQUNOLFdBQVc7O0lBM0VoQztRQURDLEtBQUssRUFBRTs2Q0FVUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhDQWNQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OENBT1A7SUFNRDtRQURDLEtBQUssRUFBRTtpREFPUDtJQU1EO1FBREMsS0FBSyxFQUFFO29EQU9QO0lBbEZVLFlBQVk7UUFWeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsTUFBTSxFQUFFO2dCQUNOLE9BQU87YUFDUjtZQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxZQUFZLENBZ0l4QjtJQUFELG1CQUFDO0NBQUEsQUFoSUQsQ0FBa0MscUJBQXFCLEdBZ0l0RDtTQWhJWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBtaXhpbkNvbG9yLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5VHlwb2dyYXBoeVRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgVHlwb2dyYXBoeSBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKCkgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKCkgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGx5VHlwPzoge1xuICAgIFtuYW1lOiBzdHJpbmddOiBTdHlsZUNvbGxlY3Rpb248KCgpID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgICAgfCAoKCkgPT4gU3R5bGVUZW1wbGF0ZSkgfCB1bmRlZmluZWRcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVR5cG9ncmFwaHlWYXJpYWJsZXMge1xuICB0eXBvZ3JhcGh5PzogTHlUeXBvZ3JhcGh5VGhlbWU7XG59XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5VHlwb2dyYXBoeVZhcmlhYmxlcykgPT4ge1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeVR5cG9ncmFwaHku0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luOjA7ZGlzcGxheTpibG9jaztmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgKHRoZW1lLnR5cG9ncmFwaHlcbiAgICAgICAgICAmJiB0aGVtZS50eXBvZ3JhcGh5LnJvb3RcbiAgICAgICAgICAmJiAodGhlbWUudHlwb2dyYXBoeS5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICA/IHRoZW1lLnR5cG9ncmFwaHkucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbigpKS5jc3NcbiAgICAgICAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5yb290KCkpXG4gICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBndXR0ZXJUb3A6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tdG9wOjAuMzVlbTt9YCxcbiAgICBndXR0ZXJCb3R0b206IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tYm90dG9tOjAuMzVlbTt9YCxcbiAgICBndXR0ZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW46MC4zNWVtIDA7fWBcbiAgfTtcbn07XG5cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVR5cG9ncmFwaHlNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgICBtaXhpbkNvbG9yKChMeVR5cG9ncmFwaHlCYXNlKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbG9yJ1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IGV4dGVuZHMgTHlUeXBvZ3JhcGh5TWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlUeXBvZ3JhcGh5JztcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbm9XcmFwOiBib29sZWFuO1xuICBwcml2YXRlIF9ub1dyYXBDbGFzcz86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwsIHRoaXMuX2x5VHlwQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9seVR5cENsYXNzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgbHlUeXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VHlwO1xuICB9XG5cbiAgLyoqIFRoZSB0ZXh0IHdpbGwgdHJ1bmNhdGUgd2l0aCBhbiBlbGxpcHNpcy4gKi9cbiAgQElucHV0KClcbiAgc2V0IG5vV3JhcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fbm9XcmFwQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlUeXAubm9XcmFwJywge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9ub1dyYXBDbGFzcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9ub1dyYXBDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9ub1dyYXBDbGFzcyk7XG4gICAgICB0aGlzLl9ub1dyYXBDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG5vV3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9XcmFwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlcih2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlcikge1xuICAgICAgdGhpcy5fZ3V0dGVyID0gbmV3VmFsO1xuICAgICAgdGhpcy5ob3N0Q2xhc3MudG9nZ2xlKHRoaXMuY2xhc3Nlcy5ndXR0ZXIsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJUb3AodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJUb3ApIHtcbiAgICAgIHRoaXMuX2d1dHRlclRvcCA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuaG9zdENsYXNzLnRvZ2dsZSh0aGlzLmNsYXNzZXMuZ3V0dGVyVG9wLCBuZXdWYWwpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLmhvc3RDbGFzcy50b2dnbGUodGhpcy5jbGFzc2VzLmd1dHRlckJvdHRvbSwgbmV3VmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzcjogU3R5bGVSZW5kZXJlcixcbiAgICBwcml2YXRlIGhvc3RDbGFzczogTHlIb3N0Q2xhc3NcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKHZhbDogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke3ZhbH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuc3IuYWRkKG5ld0tleSxcbiAgICAgICh0aGVtZTogTHlUeXBvZ3JhcGh5VmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0aGVtZS50eXBvZ3JhcGh5ICYmIHRoZW1lLnR5cG9ncmFwaHkubHlUeXApIHtcbiAgICAgICAgICBjb25zdCBseVR5cCA9IHRoZW1lLnR5cG9ncmFwaHkubHlUeXBbdmFsXTtcbiAgICAgICAgICAgIGlmIChseVR5cCkge1xuICAgICAgICAgICAgICByZXR1cm4gbHlUeXAgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IGx5VHlwLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKCkpLmNzc1xuICAgICAgICAgICAgICAgIDogbHlUeXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHR5cG9ncmFwaHkubHlUeXBbJyR7dmFsfSddIG5vdCBmb3VuZCBpbiBUaGVtZVZhcmlhYmxlc2ApO1xuICAgICAgfSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgaW5zdGFuY2UsXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=