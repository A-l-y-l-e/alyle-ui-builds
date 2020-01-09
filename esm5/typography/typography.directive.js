import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges } from '@angular/core';
import { LyTheme2, toBoolean, ThemeVariables, mixinStyleUpdater, mixinColor, StyleCollection, StyleTemplate, st2c, LyHostClass, StyleRenderer } from '@alyle/ui';
var STYLE_PRIORITY = -1;
export var STYLES = function (theme) {
    return {
        $name: LyTypography.и,
        $priority: STYLE_PRIORITY,
        root: function (className) { return className + "{margin:0;display:block;font-family:" + theme.typography.fontFamily + ";}" + st2c(((theme.typography
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsZUFBZSxFQUNmLGFBQWEsRUFDYixJQUFJLEVBQ0osV0FBVyxFQUNYLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWdCbkMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBNkM7SUFDbEUsT0FBTztRQUNMLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNyQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyw0Q0FBdUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLFVBQUssSUFBSSxDQUFDLENBQ2pILENBQUMsS0FBSyxDQUFDLFVBQVU7ZUFDWixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7ZUFDckIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksWUFBWSxlQUFlO2dCQUNsRCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxFQUFFLEVBQUosQ0FBSSxDQUFDLENBQUMsR0FBRztnQkFDdEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FDN0IsQ0FBQyxFQUFFLEtBQUcsU0FBVyxDQUFH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O2dCQUNMLFNBQVM7Z0JBQ2YsYUFBYTtnQkFDTixXQUFXOztJQTNFaEM7UUFEQyxLQUFLLEVBQUU7NkNBVVA7SUFPRDtRQURDLEtBQUssRUFBRTs4Q0FjUDtJQU1EO1FBREMsS0FBSyxFQUFFOzhDQU9QO0lBTUQ7UUFEQyxLQUFLLEVBQUU7aURBT1A7SUFNRDtRQURDLEtBQUssRUFBRTtvREFPUDtJQWxGVSxZQUFZO1FBVnhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLE1BQU0sRUFBRTtnQkFDTixPQUFPO2FBQ1I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO2FBQ2Q7U0FDRixDQUFDO09BQ1csWUFBWSxDQWdJeEI7SUFBRCxtQkFBQztDQUFBLEFBaElELENBQWtDLHFCQUFxQixHQWdJdEQ7U0FoSVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICB0b0Jvb2xlYW4sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgbWl4aW5Db2xvcixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBTdHlsZVRlbXBsYXRlLFxuICBzdDJjLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlUeXBvZ3JhcGh5VGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBUeXBvZ3JhcGh5IENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoKSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoKSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgbHlUeXA/OiB7XG4gICAgW25hbWU6IHN0cmluZ106IFN0eWxlQ29sbGVjdGlvbjwoKCkgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoKSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5VHlwb2dyYXBoeVZhcmlhYmxlcyB7XG4gIHR5cG9ncmFwaHk/OiBMeVR5cG9ncmFwaHlUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlUeXBvZ3JhcGh5VmFyaWFibGVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5VHlwb2dyYXBoeS7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW46MDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OiR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5fTt9JHtzdDJjKChcbiAgICAgICAgKHRoZW1lLnR5cG9ncmFwaHlcbiAgICAgICAgICAmJiB0aGVtZS50eXBvZ3JhcGh5LnJvb3RcbiAgICAgICAgICAmJiAodGhlbWUudHlwb2dyYXBoeS5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICA/IHRoZW1lLnR5cG9ncmFwaHkucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbigpKS5jc3NcbiAgICAgICAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5yb290KCkpXG4gICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBndXR0ZXJUb3A6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tdG9wOjAuMzVlbTt9YCxcbiAgICBndXR0ZXJCb3R0b206IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tYm90dG9tOjAuMzVlbTt9YCxcbiAgICBndXR0ZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW46MC4zNWVtIDA7fWBcbiAgfTtcbn07XG5cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVR5cG9ncmFwaHlCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVR5cG9ncmFwaHlNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgICBtaXhpbkNvbG9yKChMeVR5cG9ncmFwaHlCYXNlKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlUeXBdYCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbG9yJ1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IGV4dGVuZHMgTHlUeXBvZ3JhcGh5TWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlUeXBvZ3JhcGh5JztcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzczogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbm9XcmFwOiBib29sZWFuO1xuICBwcml2YXRlIF9ub1dyYXBDbGFzcz86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwsIHRoaXMuX2x5VHlwQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9seVR5cENsYXNzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgbHlUeXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VHlwO1xuICB9XG5cbiAgLyoqIFRoZSB0ZXh0IHdpbGwgdHJ1bmNhdGUgd2l0aCBhbiBlbGxpcHNpcy4gKi9cbiAgQElucHV0KClcbiAgc2V0IG5vV3JhcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fbm9XcmFwQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlUeXAubm9XcmFwJywge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9ub1dyYXBDbGFzcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9ub1dyYXBDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9ub1dyYXBDbGFzcyk7XG4gICAgICB0aGlzLl9ub1dyYXBDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG5vV3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9XcmFwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlcih2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlcikge1xuICAgICAgdGhpcy5fZ3V0dGVyID0gbmV3VmFsO1xuICAgICAgdGhpcy5ob3N0Q2xhc3MudG9nZ2xlKHRoaXMuY2xhc3Nlcy5ndXR0ZXIsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXJUb3AodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXJUb3ApIHtcbiAgICAgIHRoaXMuX2d1dHRlclRvcCA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuaG9zdENsYXNzLnRvZ2dsZSh0aGlzLmNsYXNzZXMuZ3V0dGVyVG9wLCBuZXdWYWwpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLmhvc3RDbGFzcy50b2dnbGUodGhpcy5jbGFzc2VzLmd1dHRlckJvdHRvbSwgbmV3VmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzcjogU3R5bGVSZW5kZXJlcixcbiAgICBwcml2YXRlIGhvc3RDbGFzczogTHlIb3N0Q2xhc3NcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKHZhbDogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke3ZhbH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuc3IuYWRkKG5ld0tleSxcbiAgICAgICh0aGVtZTogTHlUeXBvZ3JhcGh5VmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0aGVtZS50eXBvZ3JhcGh5ICYmIHRoZW1lLnR5cG9ncmFwaHkubHlUeXApIHtcbiAgICAgICAgICBjb25zdCBseVR5cCA9IHRoZW1lLnR5cG9ncmFwaHkubHlUeXBbdmFsXTtcbiAgICAgICAgICAgIGlmIChseVR5cCkge1xuICAgICAgICAgICAgICByZXR1cm4gbHlUeXAgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IGx5VHlwLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKCkpLmNzc1xuICAgICAgICAgICAgICAgIDogbHlUeXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHR5cG9ncmFwaHkubHlUeXBbJyR7dmFsfSddIG5vdCBmb3VuZCBpbiBUaGVtZVZhcmlhYmxlc2ApO1xuICAgICAgfSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgaW5zdGFuY2UsXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=