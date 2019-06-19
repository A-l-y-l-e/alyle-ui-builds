import { __decorate, __metadata } from 'tslib';
import { Input, Directive, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyTheme2, LyCommonModule } from '@alyle/ui';

var MEDIA_PRIORITY = 999;
var styles = {
    hide: {
        display: 'none'
    }
};
var MediaDirective = /** @class */ (function () {
    function MediaDirective(_renderer, _elementRef, theme) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles);
    }
    Object.defineProperty(MediaDirective.prototype, "lyShow", {
        /**
         * Shows the item when the value is resolved as true
         */
        get: function () {
            return this._show;
        },
        set: function (val) {
            this._show = val;
            this._showClass = this.theme.addStyle("lyMedia-show:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a[theme.getBreakpoint(val)] = {
                        display: 'block'
                    },
                    _a);
            }, this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaDirective.prototype, "lyHide", {
        get: function () {
            return this._hide;
        },
        /**
         * Hides the item when the value is resolved as true
         */
        set: function (val) {
            this._hide = val;
            this._hideClass = this.theme.addStyle("lyMedia-hide:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a[theme.getBreakpoint(val)] = {
                        display: 'none'
                    },
                    _a);
            }, this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    MediaDirective.prototype.ngOnInit = function () {
        if (!this.lyHide) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.hide);
        }
    };
    MediaDirective.prototype.ngOnChanges = function () {
        if (this.lyHide && this.lyShow) {
            throw new Error("use only `lyHide` or `lyShow` per element");
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MediaDirective.prototype, "lyShow", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MediaDirective.prototype, "lyHide", null);
    MediaDirective = __decorate([
        Directive({
            selector: '[lyShow], [lyHide]'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], MediaDirective);
    return MediaDirective;
}());

var ResponsiveModule = /** @class */ (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule = __decorate([
        NgModule({
            declarations: [MediaDirective],
            exports: [MediaDirective, LyCommonModule],
        })
    ], ResponsiveModule);
    return ResponsiveModule;
}());

var Breakpoints = {
    XSmall: '(max-width: 599px)',
    Small: '(min-width: 600px) and (max-width: 959px)',
    Medium: '(min-width: 960px) and (max-width: 1279px)',
    Large: '(min-width: 1280px) and (max-width: 1919px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599px) and (orientation: portrait), ' +
        '(max-width: 959px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

export { Breakpoints, MediaDirective, ResponsiveModule };
//# sourceMappingURL=alyle-ui-responsive.js.map
