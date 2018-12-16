/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LyIconService } from './icon.service';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform } from '@alyle/ui';
import { take } from 'rxjs/operators';
/** @type {?} */
var STYLE_PRIORITY = -2;
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyIconBase = /** @class */ (function () {
    function LyIconBase(_theme) {
        this._theme = _theme;
    }
    return LyIconBase;
}());
/**
 * \@docs-private
 */
export { LyIconBase };
if (false) {
    /** @type {?} */
    LyIconBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase)))))));
var LyIcon = /** @class */ (function (_super) {
    tslib_1.__extends(LyIcon, _super);
    function LyIcon(iconService, _el, _renderer, theme) {
        var _this = _super.call(this, theme) || this;
        _this.iconService = iconService;
        _this._el = _el;
        _this._renderer = _renderer;
        _this.setAutoContrast();
        return _this;
    }
    Object.defineProperty(LyIcon.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._icon = val;
            if (Platform.isBrowser) {
                this._prepareSvgIcon(this.iconService.getSvg(val));
            }
            else {
                this._appendDefaultSvgIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontSet", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fontSet;
        },
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._fontSet = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIcon.prototype, "fontIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fontIcon;
        },
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._fontIcon = key;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyIcon.prototype._isDefault = /**
     * @return {?}
     */
    function () {
        return !(this.icon || this.fontSet);
    };
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    LyIcon.prototype._prepareSvgIcon = /**
     * @param {?} svgIcon
     * @return {?}
     */
    function (svgIcon) {
        var _this = this;
        if (svgIcon.svg) {
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe(function (svgElement) {
                _this._appendChild((/** @type {?} */ (svgElement.cloneNode(true))));
            });
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    LyIcon.prototype._appendChild = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._cleanIcon();
        this._iconElement = svg;
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    };
    /**
     * @return {?}
     */
    LyIcon.prototype._appendDefaultSvgIcon = /**
     * @return {?}
     */
    function () {
        this._appendChild(this.iconService.defaultSvgIcon);
    };
    /**
     * @return {?}
     */
    LyIcon.prototype._updateClass = /**
     * @return {?}
     */
    function () {
        if (this._isDefault()) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    };
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._cleanIcon();
    };
    /**
     * run only browser
     * remove current icon
     */
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    LyIcon.prototype._cleanIcon = /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    function () {
        /** @type {?} */
        var icon = this._iconElement;
        if (icon) {
            this._renderer.removeChild(this._el.nativeElement, icon);
            this._iconElement = null;
        }
    };
    /**
     * @return {?}
     */
    LyIcon.prototype._updateFontClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentClass = this._currentClass;
        /** @type {?} */
        var fontSetKey = this.fontSet;
        /** @type {?} */
        var icon = this.fontIcon;
        /** @type {?} */
        var el = this._el.nativeElement;
        /** @type {?} */
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
            Error("Icon with key" + fontSetKey + " not found");
        }
        this._currentClass = "" + iconClass.prefix + icon;
        this._renderer.addClass(el, this._currentClass);
    };
    LyIcon.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-icon',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                    ],
                },] }
    ];
    /** @nocollapse */
    LyIcon.ctorParameters = function () { return [
        { type: LyIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 }
    ]; };
    LyIcon.propDecorators = {
        icon: [{ type: Input }],
        fontSet: [{ type: Input }],
        fontIcon: [{ type: Input }]
    };
    return LyIcon;
}(LyIconMixinBase));
export { LyIcon };
if (false) {
    /** @type {?} */
    LyIcon.prototype._icon;
    /** @type {?} */
    LyIcon.prototype._fontSet;
    /** @type {?} */
    LyIcon.prototype._previousFontSet;
    /** @type {?} */
    LyIcon.prototype._currentClass;
    /** @type {?} */
    LyIcon.prototype._fontIcon;
    /** @type {?} */
    LyIcon.prototype._iconElement;
    /** @type {?} */
    LyIcon.prototype.iconService;
    /** @type {?} */
    LyIcon.prototype._el;
    /** @type {?} */
    LyIcon.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFvQixhQUFhLEVBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixRQUFRLEVBRVAsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVoQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBR3pCOzs7O0lBQ0Usb0JBQ1MsTUFBZ0I7UUFBaEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUNyQixDQUFDO0lBQ1AsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUZHLDRCQUF1Qjs7Ozs7O0FBSzNCLE1BQU0sS0FBTyxlQUFlLEdBQUcsaUJBQWlCLENBQ2hELE9BQU8sQ0FDTCxVQUFVLENBQ1IsV0FBVyxDQUNULGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRzVDO0lBVzRCLGtDQUFlO0lBcUN6QyxnQkFDVSxXQUEwQixFQUMxQixHQUFlLEVBQ2YsU0FBb0IsRUFDNUIsS0FBZTtRQUpqQixZQU1FLGtCQUFNLEtBQUssQ0FBQyxTQUViO1FBUFMsaUJBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFJNUIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztJ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LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvbnRDbGFzc09wdGlvbnMsIEx5SWNvblNlcnZpY2UsIFN2Z0ljb24gfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlJY29uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlJY29uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUljb25CYXNlKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uIGV4dGVuZHMgTHlJY29uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udFNldDogc3RyaW5nO1xuICBwcml2YXRlIF9wcmV2aW91c0ZvbnRTZXQ6IEZvbnRDbGFzc09wdGlvbnM7XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mb250SWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uRWxlbWVudDogU1ZHRWxlbWVudDtcblxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRTZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFNldDtcbiAgfVxuICBzZXQgZm9udFNldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRTZXQgPSBrZXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udEljb247XG4gIH1cbiAgc2V0IGZvbnRJY29uKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udEljb24gPSBrZXk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZm9udFNldCB8fCB0aGlzLmZvbnRJY29uKSB7XG4gICAgICB0aGlzLl91cGRhdGVGb250Q2xhc3MoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5pY29uIHx8IHRoaXMuZm9udFNldCk7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX2NsZWFuSWNvbigpO1xuICAgIHRoaXMuX2ljb25FbGVtZW50ID0gc3ZnO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2AgK1xuICAgICAgYC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7YCArXG4gICAgICBgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtgICtcbiAgICAgIGBib3gtc2l6aW5nOiBjb250ZW50LWJveDtgXG4gICAgKSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5faWNvbkVsZW1lbnQ7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGljb24pO1xuICAgICAgdGhpcy5faWNvbkVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvbnRDbGFzcygpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzcyA9IHRoaXMuX2N1cnJlbnRDbGFzcztcbiAgICBjb25zdCBmb250U2V0S2V5ID0gdGhpcy5mb250U2V0O1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmZvbnRJY29uO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmljb25TZXJ2aWNlLmdldEZvbnRDbGFzcyhmb250U2V0S2V5KTtcbiAgICBpZiAoY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldCkge1xuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgdGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGljb25DbGFzcykge1xuICAgICAgdGhpcy5fcHJldmlvdXNGb250U2V0ID0gaWNvbkNsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvcihgSWNvbiB3aXRoIGtleSR7Zm9udFNldEtleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDbGFzcyA9IGAke2ljb25DbGFzcy5wcmVmaXh9JHtpY29ufWA7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIHRoaXMuX2N1cnJlbnRDbGFzcyk7XG4gIH1cbn1cbiJdfQ==