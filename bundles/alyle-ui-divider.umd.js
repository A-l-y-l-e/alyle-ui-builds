(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/divider', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.divider = {}), global.ng.core, global.ly.core));
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

    var style = function (theme) { return ({
        display: 'block',
        backgroundColor: theme.divider,
        height: '1px'
    }); };
    var ɵ0 = style;
    var LyDivider = /** @class */ (function () {
        function LyDivider(_el, _theme) {
            this._el = _el;
            this._theme = _theme;
        }
        Object.defineProperty(LyDivider.prototype, "inset", {
            get: function () {
                return this._inset;
            },
            /** Add indentation (72px) */
            set: function (val) {
                this._inset = val;
                this._theme.addStyle("lyDivider.inset", function () { return ({
                    marginBefore: '74px'
                }); }, this._el.nativeElement, this._insetClass);
            },
            enumerable: true,
            configurable: true
        });
        LyDivider.prototype.ngOnInit = function () {
            var className = this._theme.addSimpleStyle('lyDivider', style);
            this._el.nativeElement.classList.add(className);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyDivider.prototype, "inset", null);
        LyDivider = __decorate([
            core.Directive({
                selector: 'ly-divider'
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                ui.LyTheme2])
        ], LyDivider);
        return LyDivider;
    }());

    var LyDividerModule = /** @class */ (function () {
        function LyDividerModule() {
        }
        LyDividerModule = __decorate([
            core.NgModule({
                exports: [LyDivider],
                declarations: [LyDivider]
            })
        ], LyDividerModule);
        return LyDividerModule;
    }());

    exports.LyDivider = LyDivider;
    exports.LyDividerModule = LyDividerModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-divider.umd.js.map
