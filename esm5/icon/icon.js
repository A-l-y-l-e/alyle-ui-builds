import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FontClassOptions, LyIconService, SvgIcon } from './icon.service';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, ThemeVariables, keyframesUniqueId, LyHostClass } from '@alyle/ui';
import { take } from 'rxjs/operators';
var STYLE_PRIORITY = -2;
export var STYLES = function (theme) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7SUFDMUMsSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsSUFBQSxxQkFBbUQsRUFBakQsb0JBQU8sRUFBRSx3QkFBUyxFQUFFLHNCQUE2QixDQUFDO0lBQzFELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNqQixDQUFDLENBQUMsUUFBUTtRQUNWLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNmLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUU7UUFDakIsQ0FBQyxDQUFDLFNBQVM7UUFDWCxDQUFDLENBQUMsUUFBUSxDQUFDLENB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Q0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBakhzQixhQUFhO2dCQUNyQixVQUFVO2dCQUNKLFNBQVM7Z0JBQ3JCLFFBQVE7Z0JBQ0ssV0FBVzs7SUFyQ2pDO1FBREMsS0FBSyxFQUFFO3NDQUdQO0lBVUQ7UUFEQyxLQUFLLEVBQUU7eUNBR1A7SUFNRDtRQURDLEtBQUssRUFBRTswQ0FHUDtJQWhDVSxNQUFNO1FBZmxCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLE1BQU0sRUFBRTtnQkFDTixJQUFJO2dCQUNKLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1lBQ0QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFO2dCQUNULFdBQVc7YUFDWjtTQUNGLENBQUM7T0FDVyxNQUFNLENBNkpsQjtJQUFELGFBQUM7Q0FBQSxBQTdKRCxDQUE0QixlQUFlLEdBNkoxQztTQTdKWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb250Q2xhc3NPcHRpb25zLCBMeUljb25TZXJ2aWNlLCBTdmdJY29uIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAga2V5ZnJhbWVzVW5pcXVlSWQsXG4gIEx5SG9zdENsYXNzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCBsb2FkaW5nID0ga2V5ZnJhbWVzVW5pcXVlSWQubmV4dCgpO1xuICBjb25zdCB7IHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnkgfSA9IHRoZW1lLmJhY2tncm91bmQ7XG4gIGNvbnN0IGx1bSA9IHByaW1hcnkuZGVmYXVsdC5sdW1pbmFuY2UoKTtcbiAgbGV0IG9uZSA9IChsdW0gPCAuNVxuICAgID8gdGVydGlhcnlcbiAgICA6IHNlY29uZGFyeSk7XG4gIGxldCB0d28gPSAobHVtIDwgLjVcbiAgICA/IHNlY29uZGFyeVxuICAgIDogdGVydGlhcnkpO1xuICBvbmUgPSBvbmUuZGFya2VuKC4yNSAqIChsdW0gPCAuNSA/IC0xIDogMS4xKSk7XG4gIHR3byA9IHR3by5kYXJrZW4oLjI1ICogKGx1bSA8IC41ID8gLTEgOiAxLjEpKTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgICRnbG9iYWw6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBrZXlmcmFtZXMgJHtsb2FkaW5nfXske2NsYXNzTmFtZX0gMCV7YmFja2dyb3VuZC1wb3NpdGlvbjoyMDAlIDUwJTt9JHtjbGFzc05hbWV9IDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjotMjAwJSA1MCU7fX1gLFxuICAgIGxvYWRpbmc6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtiYWNrZ3JvdW5kOiR7XG4gICAgICAgIGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke1xuICAgICAgICAgIG9uZVxuICAgICAgICB9LCAke1xuICAgICAgICAgIHR3b1xuICAgICAgICB9LCAke1xuICAgICAgICAgIHR3b1xuICAgICAgICB9LCAke1xuICAgICAgICAgIG9uZVxuICAgICAgICB9KWB9O2JhY2tncm91bmQtc2l6ZTo0MDAlIDQwMCU7YW5pbWF0aW9uOiR7bG9hZGluZ30gOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7fWAsXG4gICAgZGVmYXVsdEljb246IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtib3JkZXItcmFkaXVzOjUwcHg7fWBcbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlJY29uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlJY29uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUljb25CYXNlKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUljb24nLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbiBleHRlbmRzIEx5SWNvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRTZXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJldmlvdXNGb250U2V0OiBGb250Q2xhc3NPcHRpb25zO1xuICBwcml2YXRlIF9jdXJyZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udEljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbkVsZW1lbnQ/OiBTVkdFbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHNldCBpY29uKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICB0aGlzLl9hZGREZWZhdWx0SWNvbigpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRTZXQ7XG4gIH1cbiAgc2V0IGZvbnRTZXQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250U2V0ID0ga2V5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRJY29uO1xuICB9XG4gIHNldCBmb250SWNvbihrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRJY29uID0ga2V5O1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IGhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9ob3N0Q2xhc3M6IEx5SG9zdENsYXNzXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZm9udFNldCB8fCB0aGlzLmZvbnRJY29uKSB7XG4gICAgICB0aGlzLl91cGRhdGVGb250Q2xhc3MoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5pY29uIHx8IHRoaXMuZm9udFNldCk7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzIVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICB0aGlzLl9pY29uRWxlbWVudCA9IHN2ZztcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzdmcsIHRoaXMuaWNvblNlcnZpY2UuY2xhc3Nlcy5zdmcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIF9hZGREZWZhdWx0SWNvbigpIHtcbiAgICB0aGlzLl9ob3N0Q2xhc3MuYWRkKHRoaXMuY2xhc3Nlcy5kZWZhdWx0SWNvbik7XG4gICAgdGhpcy5faG9zdENsYXNzLmFkZCh0aGlzLmNsYXNzZXMubG9hZGluZyk7XG4gIH1cblxuICAvLyBwcml2YXRlIF9hcHBlbmREZWZhdWx0U3ZnSWNvbigpIHtcbiAgLy8gICBjb25zdCBzdmdJY29uID0gdGhpcy5pY29uU2VydmljZS5fdGV4dFRvU3ZnKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pIGFzIFNWR0FFbGVtZW50O1xuICAvLyAgIHN2Z0ljb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMubG9hZGluZyk7XG4gIC8vICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnSWNvbik7XG4gIC8vIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5faXNEZWZhdWx0KCkgJiYgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseUljb25Sb290JywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKFxuICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgIGBwb3NpdGlvbjpyZWxhdGl2ZTtgICtcbiAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YCArXG4gICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtgICtcbiAgICAgIGAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O2AgK1xuICAgICAgYGJveC1zaXppbmc6IGNvbnRlbnQtYm94O2BcbiAgICApLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1biBvbmx5IGJyb3dzZXJcbiAgICogcmVtb3ZlIGN1cnJlbnQgaWNvblxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYW5JY29uKCkge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLl9pY29uRWxlbWVudDtcbiAgICB0aGlzLl9ob3N0Q2xhc3MucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kZWZhdWx0SWNvbik7XG4gICAgdGhpcy5faG9zdENsYXNzLnJlbW92ZSh0aGlzLmNsYXNzZXMubG9hZGluZyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGljb24pO1xuICAgICAgdGhpcy5faWNvbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRm9udENsYXNzKCkge1xuXG4gICAgY29uc3QgY3VycmVudENsYXNzID0gdGhpcy5fY3VycmVudENsYXNzO1xuICAgIGNvbnN0IGZvbnRTZXRLZXkgPSB0aGlzLmZvbnRTZXQ7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZm9udEljb247XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGljb25DbGFzcyA9IHRoaXMuaWNvblNlcnZpY2UuZ2V0Rm9udENsYXNzKGZvbnRTZXRLZXkpO1xuICAgIGlmIChjdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBjdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJldmlvdXNGb250U2V0KSB7XG4gICAgICBpZiAodGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCB0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaWNvbkNsYXNzKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c0ZvbnRTZXQgPSBpY29uQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSWNvbiB3aXRoIGtleSR7Zm9udFNldEtleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDbGFzcyA9IGAke2ljb25DbGFzcy5wcmVmaXh9JHtpY29ufWA7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIHRoaXMuX2N1cnJlbnRDbGFzcyk7XG4gIH1cbn1cbiJdfQ==