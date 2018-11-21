import { Injectable, Optional, Inject, NgModule, defineInjectable, inject, Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share, take } from 'rxjs/operators';
import { LyTheme2, LyCommonModule, mixinStyleUpdater, mixinBg, mixinFlat, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Platform } from '@alyle/ui';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
var LyIconService = /** @class */ (function () {
    function LyIconService(http, document, theme) {
        this.http = http;
        this.document = document;
        this.theme = theme;
        this.svgMap = new Map();
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    LyIconService.prototype.setSvg = /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    function (key, url) {
        var _this = this;
        if (!this.svgMap.has(key)) {
            url = url + ".svg";
            /** @type {?} */
            var svgIcon_1 = {
                obs: this.http.get(url, { responseType: 'text' })
                    .pipe(share(), map(function (svgText) {
                    if (svgIcon_1.svg) {
                        return svgIcon_1.svg;
                    }
                    /** @type {?} */
                    var svg = _this._textToSvg(svgText);
                    _this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon_1);
        }
    };
    /**
     * @param {?} str
     * @return {?}
     */
    LyIconService.prototype._textToSvg = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        var svg = (/** @type {?} */ (div.querySelector('svg')));
        return svg;
    };
    /**
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype._cacheSvgIcon = /**
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    function (svg, key) {
        /** @type {?} */
        var svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype.getSvg = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.svgMap.get(key);
    };
    LyIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyIconService.ngInjectableDef = defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(inject(HttpClient), inject(DOCUMENT, 8), inject(LyTheme2)); }, token: LyIconService, providedIn: "root" });
    return LyIconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY$1 = -2;
var LyButtonBase = /** @class */ (function () {
    function LyButtonBase(_theme) {
        this._theme = _theme;
    }
    return LyButtonBase;
}());
/** @type {?} */
var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyButtonBase))))))));
var LyIcon = /** @class */ (function (_super) {
    __extends(LyIcon, _super);
    function LyIcon(iconService, _el, _renderer, theme) {
        var _this = _super.call(this, theme) || this;
        _this.iconService = iconService;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._defaultClass = 'material-icons';
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
        set: /**
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
    /**
     * @return {?}
     */
    LyIcon.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyIcon.prototype._isDefault = /**
     * @return {?}
     */
    function () {
        return !(this.src || this.icon);
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
            this._renderer.addClass(this._el.nativeElement, this._defaultClass);
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
            "display:inline-flex;"); }, this._el.nativeElement, undefined, STYLE_PRIORITY$1);
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
        icon: [{ type: Input }]
    };
    return LyIcon;
}(LyButtonMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyIconModule = /** @class */ (function () {
    function LyIconModule() {
    }
    LyIconModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyIcon],
                    exports: [LyIcon, LyCommonModule]
                },] }
    ];
    return LyIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyIconModule, LyIconService, LyButtonBase, LyButtonMixinBase, LyIcon };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2ljb24vaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzdmc6IHtcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM6IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogU1ZHRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTdmdJY29uID0gdGhpcy5fdGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+Jyk7XG4gIH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdXJsID0gYCR7dXJsfS5zdmdgO1xuICAgICAgY29uc3Qgc3ZnSWNvbjogU3ZnSWNvbiA9IHtcbiAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHtcbiAgICAgICAgICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgICAgICAgICByZXR1cm4gc3ZnSWNvbi5zdmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc3ZnVGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVN2Z0ljb24oc3ZnLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN2ZztcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHN2Z0ljb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FjaGVTdmdJY29uKHN2ZzogU1ZHRWxlbWVudCwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdmdJY29uSW5mbyA9IHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICAgIGlmICghc3ZnSWNvbkluZm8uc3ZnKSB7XG4gICAgICB0aGlzLnN2Z01hcC5nZXQoa2V5KS5zdmcgPSBzdmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5SWNvblNlcnZpY2UsIFN2Z0ljb24gfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCBtaXhpblN0eWxlVXBkYXRlciwgbWl4aW5CZywgbWl4aW5GbGF0LCBtaXhpbkNvbG9yLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY2xhc3MgTHlCdXR0b25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IEx5QnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUJ1dHRvbkJhc2UpKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbiBleHRlbmRzIEx5QnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3JjID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYF91cmw6JHt2YWx9YDtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS5zZXRTdmcoa2V5LCB2YWwpO1xuICAgICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2ZyhrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3JjO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvblNlcnZpY2U6IEx5SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gISh0aGlzLnNyYyB8fCB0aGlzLmljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5SWNvblJvb3QnLCB0aGVtZSA9PiAoXG4gICAgICBgZm9udC1zaXplOiR7dGhlbWUuaWNvbi5mb250U2l6ZX07YCArXG4gICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgXG4gICAgKSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLCBpY29uKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUljb25dLFxuICBleHBvcnRzOiBbTHlJY29uLCBMeUNvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlNUWUxFX1BSSU9SSVRZIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFPTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUVuQixNQUFNLEdBQUc7SUFDYixHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsY0FBYztLQUNyQjtDQUNGOztJQWNDLHVCQUNVLElBQWdCLEVBQ2MsUUFBYSxFQUMzQyxLQUFlO1FBRmYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNjLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDM0MsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQU5qQixXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFDNUMsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQU96RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMseUVBQXlFLENBQUMsQ0FBQztLQUNs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