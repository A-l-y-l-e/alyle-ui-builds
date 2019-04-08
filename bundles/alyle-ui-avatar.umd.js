(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/avatar', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.avatar = {}), global.ng.core, global.ly.core));
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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var STYLE_PRIORITY = -2;
    var DEFAULT_SIZE = 40;
    var DEFAULT_BG = 'action';
    var STYLES = function (theme) { return ({
        $priority: STYLE_PRIORITY,
        root: {
            display: 'inline-flex',
            position: 'relative',
            fontSize: '1.25em',
            flexShrink: 0,
            alignItems: 'center',
            userSelect: 'none',
            borderRadius: '50%',
            textAlign: 'center',
            justifyContent: 'center',
            '&>img': {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                display: 'block',
                objectFit: 'cover',
                '-webkit-background-clip': 'padding-box'
            },
            '&': theme.avatar ? theme.avatar.root : null
        }
    }); };
    var ɵ0 = STYLES;
    /** @docs-private */
    var LyAvatarBase = /** @class */ (function () {
        function LyAvatarBase(_theme) {
            this._theme = _theme;
        }
        return LyAvatarBase;
    }());
    /** @docs-private */
    var LyAvatarMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyAvatarBase)))))));
    var LyAvatar = /** @class */ (function (_super) {
        __extends(LyAvatar, _super);
        function LyAvatar(theme, renderer, _elementRef) {
            var _this = _super.call(this, theme) || this;
            _this._elementRef = _elementRef;
            /** @docs-private */
            _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            _this.setAutoContrast();
            renderer.addClass(_elementRef.nativeElement, _this.classes.root);
            return _this;
        }
        Object.defineProperty(LyAvatar.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (val) {
                if (val !== this.size) {
                    this._size = val;
                    this._sizeClass = this._theme.addStyle("lyAvatar.size:" + val, {
                        width: val + "px",
                        height: val + "px",
                    }, this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyAvatar.prototype.ngOnChanges = function () {
            this.updateStyle(this._elementRef.nativeElement);
        };
        LyAvatar.prototype.ngOnInit = function () {
            if (!this.bg) {
                this.bg = DEFAULT_BG;
                this.ngOnChanges();
            }
            if (!this.size) {
                this.size = DEFAULT_SIZE;
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], LyAvatar.prototype, "size", null);
        LyAvatar = __decorate([
            core.Directive({
                selector: 'ly-avatar',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                ]
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.Renderer2,
                core.ElementRef])
        ], LyAvatar);
        return LyAvatar;
    }(LyAvatarMixinBase));

    var LyAvatarModule = /** @class */ (function () {
        function LyAvatarModule() {
        }
        LyAvatarModule = __decorate([
            core.NgModule({
                exports: [LyAvatar, ui.LyCommonModule],
                declarations: [LyAvatar]
            })
        ], LyAvatarModule);
        return LyAvatarModule;
    }());

    exports.LyAvatar = LyAvatar;
    exports.LyAvatarBase = LyAvatarBase;
    exports.LyAvatarMixinBase = LyAvatarMixinBase;
    exports.LyAvatarModule = LyAvatarModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-avatar.umd.js.map
