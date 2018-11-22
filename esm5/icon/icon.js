/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyIconService } from './icon.service';
import { take } from 'rxjs/operators';
import { Platform, LyTheme2, mixinStyleUpdater, mixinBg, mixinFlat, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
var LyButtonBase = /** @class */ (function () {
    function LyButtonBase(_theme) {
        this._theme = _theme;
    }
    return LyButtonBase;
}());
export { LyButtonBase };
if (false) {
    /** @type {?} */
    LyButtonBase.prototype._theme;
}
/** @type {?} */
export var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyButtonBase))))))));
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
    Object.defineProperty(LyIcon.prototype, "src", {
        get: /**
         * @return {?}
         */
        function () {
            return this._src;
        },
        /** deprecated */
        set: /**
         * deprecated
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._src = val;
            if (Platform.isBrowser) {
                if (val) {
                    /** @type {?} */
                    var key = "_url:" + val;
                    this.iconService.setSvg(key, val);
                    this._prepareSvgIcon(this.iconService.getSvg(key));
                }
            }
            else {
                this._appendDefaultSvgIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
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
        return !(this.src || this.icon || this.fontSet);
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
            this._cleanIcon();
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe(function (svgElement) {
                _this._cleanIcon();
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
            "height:1em;" +
            "display:inline-flex;"); }, this._el.nativeElement, undefined, STYLE_PRIORITY);
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
        var icon = this._el.nativeElement.querySelector('svg');
        if (icon) {
            this._renderer.removeChild(this._el, icon);
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
                        'flat',
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
        src: [{ type: Input }],
        icon: [{ type: Input }],
        fontSet: [{ type: Input }],
        fontIcon: [{ type: Input }]
    };
    return LyIcon;
}(LyButtonMixinBase));
export { LyIcon };
if (false) {
    /** @type {?} */
    LyIcon.prototype._src;
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
    LyIcon.prototype.iconService;
    /** @type {?} */
    LyIcon.prototype._el;
    /** @type {?} */
    LyIcon.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQTZCLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztJQUUxSixjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXpCO0lBQ0Usc0JBQ1MsTUFBZ0I7UUFBaEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUNyQixDQUFDO0lBQ1AsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUZHLDhCQUF1Qjs7O0FBSTNCLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FDbEQsT0FBTyxDQUNMLFNBQVMsQ0FDUCxVQUFVLENBQ1IsV0FBVyxDQUNULGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHakQ7SUFZNEIsa0NBQWlCO0lBdUQzQyxnQkFDVSxXQUEwQixFQUMxQixHQUFlLEVBQ2YsU0FBb0IsRUFDNUIsS0FBZTtRQUpqQixZQU1FLGtCQUFNLEtBQUssQ0FBQyxTQUViO1FBUFMsaUJBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFJNUIsS0FBSSxDQUFDLGVB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O3FCQUNkO2lCQUNGOzs7O2dCQWpDUSxhQUFhO2dCQURnQixVQUFVO2dCQUFyQixTQUFTO2dCQUdqQixRQUFROzs7c0JBeUN4QixLQUFLO3VCQWlCTCxLQUFLOzBCQWFMLEtBQUs7MkJBUUwsS0FBSzs7SUF3R1IsYUFBQztDQUFBLEFBbktELENBWTRCLGlCQUFpQixHQXVKNUM7U0F2SlksTUFBTTs7O0lBQ2pCLHNCQUFxQjs7SUFDckIsdUJBQXNCOztJQUN0QiwwQkFBeUI7O0lBQ3pCLGtDQUEyQzs7SUFDM0MsK0JBQThCOztJQUM5QiwyQkFBMEI7O0lBa0R4Qiw2QkFBa0M7O0lBQ2xDLHFCQUF1Qjs7SUFDdkIsMkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlJY29uU2VydmljZSwgU3ZnSWNvbiwgRm9udENsYXNzT3B0aW9ucyB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpbkZsYXQsIG1peGluQ29sb3IsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlCdXR0b25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluRmxhdChcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5QnV0dG9uQmFzZSkpKSkpKSkpO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWljb24nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdmbGF0JyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uIGV4dGVuZHMgTHlCdXR0b25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgX3NyYzogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRTZXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJldmlvdXNGb250U2V0OiBGb250Q2xhc3NPcHRpb25zO1xuICBwcml2YXRlIF9jdXJyZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udEljb246IHN0cmluZztcblxuICAvKiogZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3JjKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3JjID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYF91cmw6JHt2YWx9YDtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS5zZXRTdmcoa2V5LCB2YWwpO1xuICAgICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2ZyhrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3JjO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRTZXQ7XG4gIH1cbiAgc2V0IGZvbnRTZXQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250U2V0ID0ga2V5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRJY29uO1xuICB9XG4gIHNldCBmb250SWNvbihrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRJY29uID0ga2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmZvbnRTZXQgfHwgdGhpcy5mb250SWNvbikge1xuICAgICAgdGhpcy5fdXBkYXRlRm9udENsYXNzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuc3JjIHx8IHRoaXMuaWNvbiB8fCB0aGlzLmZvbnRTZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsIHRoZW1lID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2BcbiAgICApLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwsIGljb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvbnRDbGFzcygpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzcyA9IHRoaXMuX2N1cnJlbnRDbGFzcztcbiAgICBjb25zdCBmb250U2V0S2V5ID0gdGhpcy5mb250U2V0O1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmZvbnRJY29uO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmljb25TZXJ2aWNlLmdldEZvbnRDbGFzcyhmb250U2V0S2V5KTtcbiAgICBpZiAoY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldCkge1xuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgdGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGljb25DbGFzcykge1xuICAgICAgdGhpcy5fcHJldmlvdXNGb250U2V0ID0gaWNvbkNsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvcihgSWNvbiB3aXRoIGtleSR7Zm9udFNldEtleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDbGFzcyA9IGAke2ljb25DbGFzcy5wcmVmaXh9JHtpY29ufWA7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIHRoaXMuX2N1cnJlbnRDbGFzcyk7XG4gIH1cbn1cbiJdfQ==