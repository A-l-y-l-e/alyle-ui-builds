import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FontClassOptions, LyIconService, SvgIcon } from './icon.service';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, ThemeVariables, keyframesUniqueId, LyHostClass } from '@alyle/ui';
import { take } from 'rxjs/operators';
var STYLE_PRIORITY = -2;
var STYLES = function (theme) {
    var loading = keyframesUniqueId.next();
    var _a = theme.background, primary = _a.primary, secondary = _a.secondary, tertiary = _a.tertiary;
    var lum = primary.default.luminance();
    var one = (lum < .5
        ? tertiary
        : secondary);
    var two = (lum < .5
        ? secondary
        : tertiary);
    one = one.darken(.25 * (lum < .5 ? -1 : 1.1));
    two = two.darken(.25 * (lum < .5 ? -1 : 1.1));
    return {
        $priority: STYLE_PRIORITY,
        $global: function (className) { return "@keyframes " + loading + "{" + className + " 0%{background-position:200% 50%;}" + className + " 100%{background-position:-200% 50%;}}"; },
        loading: function (className) { return className + "{background:" + ("linear-gradient(270deg, " + one + ", " + two + ", " + two + ", " + one + ")") + ";background-size:400% 400%;animation:" + loading + " 8s ease-in-out infinite;}"; },
        defaultIcon: function (className) { return className + "{border-radius:50px;}"; }
    };
};
var ɵ0 = STYLES;
/** @docs-private */
var LyIconBase = /** @class */ (function () {
    function LyIconBase(_theme) {
        this._theme = _theme;
    }
    return LyIconBase;
}());
export { LyIconBase };
/** @docs-private */
export var LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
var LyIcon = /** @class */ (function (_super) {
    tslib_1.__extends(LyIcon, _super);
    function LyIcon(iconService, _el, _renderer, theme, _hostClass) {
        var _this = _super.call(this, theme) || this;
        _this.iconService = iconService;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._hostClass = _hostClass;
        _this.classes = _this._theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        return _this;
    }
    Object.defineProperty(LyIcon.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            this._addDefaultIcon();
            if (Platform.isBrowser) {
                this._prepareSvgIcon(this.iconService.getSvg(val));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontSet", {
        get: function () {
            return this._fontSet;
        },
        set: function (key) {
            this._fontSet = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontIcon", {
        get: function () {
            return this._fontIcon;
        },
        set: function (key) {
            this._fontIcon = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "hostElement", {
        /** @docs-private */
        get: function () {
            return this._el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LyIcon.prototype.ngOnChanges = function () {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    };
    LyIcon.prototype._isDefault = function () {
        return !(this.icon || this.fontSet);
    };
    LyIcon.prototype._prepareSvgIcon = function (svgIcon) {
        var _this = this;
        if (svgIcon.svg) {
            this._appendChild(svgIcon.svg.cloneNode(true));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe(function (svgElement) {
                _this._appendChild(svgElement.cloneNode(true));
            });
        }
    };
    LyIcon.prototype._appendChild = function (svg) {
        this._cleanIcon();
        this._iconElement = svg;
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    };
    LyIcon.prototype._addDefaultIcon = function () {
        this._hostClass.add(this.classes.defaultIcon);
        this._hostClass.add(this.classes.loading);
    };
    // private _appendDefaultSvgIcon() {
    //   const svgIcon = this.iconService._textToSvg(this.iconService.defaultSvgIcon) as SVGAElement;
    //   svgIcon.classList.add(this.classes.loading);
    //   this._appendChild(svgIcon);
    // }
    LyIcon.prototype._updateClass = function () {
        if (this._isDefault() && this.iconService.defaultClass) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    };
    LyIcon.prototype.ngOnInit = function () {
        this._updateClass();
        this._theme.addStyle('lyIconRoot', function (theme) { return ("font-size:" + theme.icon.fontSize + ";" +
            "width:1em;" +
            "position:relative;" +
            "height:1em;" +
            "display:inline-flex;" +
            "-webkit-box-sizing: content-box;" +
            "-moz-box-sizing: content-box;" +
            "box-sizing: content-box;"); }, this._el.nativeElement, undefined, STYLE_PRIORITY);
    };
    LyIcon.prototype.ngOnDestroy = function () {
        this._cleanIcon();
    };
    /**
     * run only browser
     * remove current icon
     */
    LyIcon.prototype._cleanIcon = function () {
        var icon = this._iconElement;
        this._hostClass.remove(this.classes.defaultIcon);
        this._hostClass.remove(this.classes.loading);
        if (icon) {
            this._renderer.removeChild(this._el.nativeElement, icon);
            this._iconElement = undefined;
        }
    };
    LyIcon.prototype._updateFontClass = function () {
        var currentClass = this._currentClass;
        var fontSetKey = this.fontSet;
        var icon = this.fontIcon;
        var el = this._el.nativeElement;
        var iconClass = this.iconService.getFontClass(fontSetKey);
        if (currentClass) {
            this._renderer.removeClass(el, currentClass);
        }
        if (this._previousFontSet) {
            if (this._previousFontSet.class) {
                this._renderer.removeClass(el, this._previousFontSet.class);
            }
        }
        if (iconClass) {
            this._previousFontSet = iconClass;
        }
        else {
            throw new Error("Icon with key" + fontSetKey + " not found");
        }
        this._currentClass = "" + iconClass.prefix + icon;
        this._renderer.addClass(el, this._currentClass);
    };
    LyIcon.ctorParameters = function () { return [
        { type: LyIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: LyHostClass }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyIcon.prototype, "icon", null);
    tslib_1.__decorate([
        Input()
    ], LyIcon.prototype, "fontSet", null);
    tslib_1.__decorate([
        Input()
    ], LyIcon.prototype, "fontIcon", null);
    LyIcon = tslib_1.__decorate([
        Directive({
            selector: 'ly-icon',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor',
            ],
            exportAs: 'lyIcon',
            providers: [
                LyHostClass
            ]
        })
    ], LyIcon);
    return LyIcon;
}(LyIconMixinBase));
export { LyIcon };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQjtJQUNuQyxJQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFBLHFCQUFtRCxFQUFqRCxvQkFBTyxFQUFFLHdCQUFTLEVBQUUsc0JBQTZCLENBQUM7SUFDMUQsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2pCLENBQUMsQ0FBQyxRQUFRO1FBQ1YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNqQixDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNkLEdB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O1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBakhzQixhQUFhO2dCQUNyQixVQUFVO2dCQUNKLFNBQVM7Z0JBQ3JCLFFBQVE7Z0JBQ0ssV0FBVzs7SUFyQ2pDO1FBREMsS0FBSyxFQUFFO3NDQUdQO0lBVUQ7UUFEQyxLQUFLLEVBQUU7eUNBR1A7SUFNRDtRQURDLEtBQUssRUFBRTswQ0FHUDtJQWhDVSxNQUFNO1FBZmxCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLE1BQU0sRUFBRTtnQkFDTixJQUFJO2dCQUNKLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1lBQ0QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFO2dCQUNULFdBQVc7YUFDWjtTQUNGLENBQUM7T0FDVyxNQUFNLENBNkpsQjtJQUFELGFBQUM7Q0FBQSxBQTdKRCxDQUE0QixlQUFlLEdBNkoxQztTQTdKWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb250Q2xhc3NPcHRpb25zLCBMeUljb25TZXJ2aWNlLCBTdmdJY29uIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAga2V5ZnJhbWVzVW5pcXVlSWQsXG4gIEx5SG9zdENsYXNzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNVbmlxdWVJZC5uZXh0KCk7XG4gIGNvbnN0IHsgcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeSB9ID0gdGhlbWUuYmFja2dyb3VuZDtcbiAgY29uc3QgbHVtID0gcHJpbWFyeS5kZWZhdWx0Lmx1bWluYW5jZSgpO1xuICBsZXQgb25lID0gKGx1bSA8IC41XG4gICAgPyB0ZXJ0aWFyeVxuICAgIDogc2Vjb25kYXJ5KTtcbiAgbGV0IHR3byA9IChsdW0gPCAuNVxuICAgID8gc2Vjb25kYXJ5XG4gICAgOiB0ZXJ0aWFyeSk7XG4gIG9uZSA9IG9uZS5kYXJrZW4oLjI1ICogKGx1bSA8IC41ID8gLTEgOiAxLjEpKTtcbiAgdHdvID0gdHdvLmRhcmtlbiguMjUgKiAobHVtIDwgLjUgPyAtMSA6IDEuMSkpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJGdsb2JhbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQGtleWZyYW1lcyAke2xvYWRpbmd9eyR7Y2xhc3NOYW1lfSAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjIwMCUgNTAlO30ke2NsYXNzTmFtZX0gMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDAlIDUwJTt9fWAsXG4gICAgbG9hZGluZzogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JhY2tncm91bmQ6JHtcbiAgICAgICAgYGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICR7XG4gICAgICAgICAgb25lXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgdHdvXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgdHdvXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgb25lXG4gICAgICAgIH0pYH07YmFja2dyb3VuZC1zaXplOjQwMCUgNDAwJTthbmltYXRpb246JHtsb2FkaW5nfSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTt9YCxcbiAgICBkZWZhdWx0SWNvbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JvcmRlci1yYWRpdXM6NTBweDt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUljb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUljb25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5SWNvbkJhc2UpKSkpKSkpO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWljb24nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxuICBleHBvcnRBczogJ2x5SWNvbicsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uIGV4dGVuZHMgTHlJY29uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udFNldDogc3RyaW5nO1xuICBwcml2YXRlIF9wcmV2aW91c0ZvbnRTZXQ6IEZvbnRDbGFzc09wdGlvbnM7XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mb250SWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uRWxlbWVudD86IFNWR0VsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIHRoaXMuX2FkZERlZmF1bHRJY29uKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRTZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFNldDtcbiAgfVxuICBzZXQgZm9udFNldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRTZXQgPSBrZXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udEljb247XG4gIH1cbiAgc2V0IGZvbnRJY29uKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udEljb24gPSBrZXk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBnZXQgaG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3NcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5mb250U2V0IHx8IHRoaXMuZm9udEljb24pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZvbnRDbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLmljb24gfHwgdGhpcy5mb250U2V0KTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZXBhcmVTdmdJY29uKHN2Z0ljb246IFN2Z0ljb24pIHtcbiAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0ljb24uc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnSWNvbi5vYnMhXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgIHRoaXMuX2ljb25FbGVtZW50ID0gc3ZnO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZERlZmF1bHRJY29uKCkge1xuICAgIHRoaXMuX2hvc3RDbGFzcy5hZGQodGhpcy5jbGFzc2VzLmRlZmF1bHRJY29uKTtcbiAgICB0aGlzLl9ob3N0Q2xhc3MuYWRkKHRoaXMuY2xhc3Nlcy5sb2FkaW5nKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAvLyAgIGNvbnN0IHN2Z0ljb24gPSB0aGlzLmljb25TZXJ2aWNlLl90ZXh0VG9TdmcodGhpcy5pY29uU2VydmljZS5kZWZhdWx0U3ZnSWNvbikgYXMgU1ZHQUVsZW1lbnQ7XG4gIC8vICAgc3ZnSWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5sb2FkaW5nKTtcbiAgLy8gICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uKTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLl9pc0RlZmF1bHQoKSAmJiB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5SWNvblJvb3QnLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoXG4gICAgICBgZm9udC1zaXplOiR7dGhlbWUuaWNvbi5mb250U2l6ZX07YCArXG4gICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgICtcbiAgICAgIGAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O2AgK1xuICAgICAgYC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7YCArXG4gICAgICBgYm94LXNpemluZzogY29udGVudC1ib3g7YFxuICAgICksIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuX2ljb25FbGVtZW50O1xuICAgIHRoaXMuX2hvc3RDbGFzcy5yZW1vdmUodGhpcy5jbGFzc2VzLmRlZmF1bHRJY29uKTtcbiAgICB0aGlzLl9ob3N0Q2xhc3MucmVtb3ZlKHRoaXMuY2xhc3Nlcy5sb2FkaW5nKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgaWNvbik7XG4gICAgICB0aGlzLl9pY29uRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGb250Q2xhc3MoKSB7XG5cbiAgICBjb25zdCBjdXJyZW50Q2xhc3MgPSB0aGlzLl9jdXJyZW50Q2xhc3M7XG4gICAgY29uc3QgZm9udFNldEtleSA9IHRoaXMuZm9udFNldDtcbiAgICBjb25zdCBpY29uID0gdGhpcy5mb250SWNvbjtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaWNvbkNsYXNzID0gdGhpcy5pY29uU2VydmljZS5nZXRGb250Q2xhc3MoZm9udFNldEtleSk7XG4gICAgaWYgKGN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQpIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpY29uQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzRm9udFNldCA9IGljb25DbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJY29uIHdpdGgga2V5JHtmb250U2V0S2V5fSBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudENsYXNzID0gYCR7aWNvbkNsYXNzLnByZWZpeH0ke2ljb259YDtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbCwgdGhpcy5fY3VycmVudENsYXNzKTtcbiAgfVxufVxuIl19