import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges } from '@angular/core';
import { LyTheme2, toBoolean, ThemeVariables, mixinStyleUpdater, mixinColor, StyleCollection, StyleTemplate, styleTemplateToString, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -1;
var STYLES = function (theme) {
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
var ɵ0 = STYLES;
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsZUFBZSxFQUNmLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWdCbkMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUE2QztJQUMzRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElBQUksRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLDRDQUF1QyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsVUFBSyxxQkFBcUIsQ0FBQyxDQUNsSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2VBQ1osS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO2VBQ3JCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDbEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDLEdBQUc7Z0JBQ3RELENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQzdCLENBQUMsRUFBRSxLQUFHLFNBQVcsQ0FBRyxFQU5J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Q0wsU0FBUztnQkFDZixhQUFhO2dCQUNOLFdBQVc7O0lBM0VoQztRQURDLEtBQUssRUFBRTs2Q0FVUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhDQWNQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OENBT1A7SUFNRDtRQURDLEtBQUssRUFBRTtpREFPUDtJQU1EO1FBREMsS0FBSyxFQUFFO29EQU9QO0lBbEZVLFlBQVk7UUFWeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsTUFBTSxFQUFFO2dCQUNOLE9BQU87YUFDUjtZQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxZQUFZLENBZ0l4QjtJQUFELG1CQUFDO0NBQUEsQUFoSUQsQ0FBa0MscUJBQXFCLEdBZ0l0RDtTQWhJWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBtaXhpbkNvbG9yLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5VHlwb2dyYXBoeVRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgVHlwb2dyYXBoeSBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKCkgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKCkgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGx5VHlwPzoge1xuICAgIFtuYW1lOiBzdHJpbmddOiBTdHlsZUNvbGxlY3Rpb248KCgpID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgICAgfCAoKCkgPT4gU3R5bGVUZW1wbGF0ZSkgfCB1bmRlZmluZWRcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVR5cG9ncmFwaHlWYXJpYWJsZXMge1xuICB0eXBvZ3JhcGh5PzogTHlUeXBvZ3JhcGh5VGhlbWU7XG59XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlUeXBvZ3JhcGh5VmFyaWFibGVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5VHlwb2dyYXBoeS7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW46MDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OiR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5fTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAodGhlbWUudHlwb2dyYXBoeVxuICAgICAgICAgICYmIHRoZW1lLnR5cG9ncmFwaHkucm9vdFxuICAgICAgICAgICYmICh0aGVtZS50eXBvZ3JhcGh5LnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKCkpLmNzc1xuICAgICAgICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LnJvb3QoKSlcbiAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX1gLFxuICAgIGd1dHRlclRvcDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi10b3A6MC4zNWVtO31gLFxuICAgIGd1dHRlckJvdHRvbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi1ib3R0b206MC4zNWVtO31gLFxuICAgIGd1dHRlcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbjowLjM1ZW0gMDt9YFxuICB9O1xufTtcblxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VHlwb2dyYXBoeU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICAgIG1peGluQ29sb3IoKEx5VHlwb2dyYXBoeUJhc2UpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gLFxuICBpbnB1dHM6IFtcbiAgICAnY29sb3InXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHkgZXh0ZW5kcyBMeVR5cG9ncmFwaHlNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeVR5cG9ncmFwaHknO1xuICBwcml2YXRlIF9seVR5cDogc3RyaW5nO1xuICBwcml2YXRlIF9seVR5cENsYXNzOiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX2d1dHRlcjogYm9vbGVhbjtcblxuICBwcml2YXRlIF9ndXR0ZXJUb3A6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tOiBib29sZWFuO1xuICBwcml2YXRlIF9ub1dyYXA6IGJvb2xlYW47XG4gIHByaXZhdGUgX25vV3JhcENsYXNzPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVR5cCh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlUeXApIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IHRoaXMuX2NyZWF0ZVR5cENsYXNzKHZhbCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2x5VHlwQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICAvKiogVGhlIHRleHQgd2lsbCB0cnVuY2F0ZSB3aXRoIGFuIGVsbGlwc2lzLiAqL1xuICBASW5wdXQoKVxuICBzZXQgbm9XcmFwKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl9ub1dyYXBDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseVR5cC5ub1dyYXAnLCB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25vV3JhcENsYXNzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX25vV3JhcENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25vV3JhcENsYXNzKTtcbiAgICAgIHRoaXMuX25vV3JhcENsYXNzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnZXQgbm9XcmFwKCkge1xuICAgIHJldHVybiB0aGlzLl9ub1dyYXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICB0aGlzLmhvc3RDbGFzcy50b2dnbGUodGhpcy5jbGFzc2VzLmd1dHRlciwgbmV3VmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlclRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlclRvcCkge1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wID0gbmV3VmFsO1xuICAgICAgdGhpcy5ob3N0Q2xhc3MudG9nZ2xlKHRoaXMuY2xhc3Nlcy5ndXR0ZXJUb3AsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXJUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlclRvcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJCb3R0b20odmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJCb3R0b20pIHtcbiAgICAgIHRoaXMuX2d1dHRlckJvdHRvbSA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuaG9zdENsYXNzLnRvZ2dsZSh0aGlzLmNsYXNzZXMuZ3V0dGVyQm90dG9tLCBuZXdWYWwpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNyOiBTdHlsZVJlbmRlcmVyLFxuICAgIHByaXZhdGUgaG9zdENsYXNzOiBMeUhvc3RDbGFzc1xuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCh0aGlzLmd1dHRlclRvcCAmJiB0aGlzLmd1dHRlckJvdHRvbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlICc8ZWxlbWVudCBseVR5cCBndXR0ZXI+JyBpbnN0ZWFkIG9mICc8ZWxlbWVudCBseVR5cCBndXR0ZXJUb3AgZ3V0dGVyQm90dG9tPidgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3ModmFsOiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstdHlwOiR7dmFsfWA7XG5cbiAgICByZXR1cm4gdGhpcy5zci5hZGQobmV3S2V5LFxuICAgICAgKHRoZW1lOiBMeVR5cG9ncmFwaHlWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHRoZW1lLnR5cG9ncmFwaHkgJiYgdGhlbWUudHlwb2dyYXBoeS5seVR5cCkge1xuICAgICAgICAgIGNvbnN0IGx5VHlwID0gdGhlbWUudHlwb2dyYXBoeS5seVR5cFt2YWxdO1xuICAgICAgICAgICAgaWYgKGx5VHlwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBseVR5cCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgID8gbHlUeXAuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oKSkuY3NzXG4gICAgICAgICAgICAgICAgOiBseVR5cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgdHlwb2dyYXBoeS5seVR5cFsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICB9LFxuICAgICAgU1RZTEVfUFJJT1JJVFksXG4gICAgICBpbnN0YW5jZSxcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==