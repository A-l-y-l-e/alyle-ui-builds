(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/responsive', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.responsive = {}), global.ng.core, global.ly.core));
}(this, function (exports, core, ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

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
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], MediaDirective.prototype, "lyShow", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], MediaDirective.prototype, "lyHide", null);
        MediaDirective = __decorate([
            core.Directive({
                selector: '[lyShow], [lyHide]'
            }),
            __metadata("design:paramtypes", [core.Renderer2,
                core.ElementRef,
                ui.LyTheme2])
        ], MediaDirective);
        return MediaDirective;
    }());

    var ResponsiveModule = /** @class */ (function () {
        function ResponsiveModule() {
        }
        ResponsiveModule = __decorate([
            core.NgModule({
                declarations: [MediaDirective],
                exports: [MediaDirective, ui.LyCommonModule],
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

    exports.Breakpoints = Breakpoints;
    exports.MediaDirective = MediaDirective;
    exports.ResponsiveModule = ResponsiveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-responsive.umd.js.map
