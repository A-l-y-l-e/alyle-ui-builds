(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/typography', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.typography = {}), global.ng.core, global.ly.core));
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

    var STYLE_PRIORITY = -1;
    var styles = function (theme) { return ({
        root: {
            margin: 0,
            display: 'block',
            '&': theme.typography ? theme.typography.root : null
        }
    }); };
    var ɵ0 = styles;
    /** @docs-private */
    var Gutter;
    (function (Gutter) {
        Gutter[Gutter["default"] = 0] = "default";
        Gutter[Gutter["top"] = 1] = "top";
        Gutter[Gutter["bottom"] = 2] = "bottom";
    })(Gutter || (Gutter = {}));
    /** @docs-private */
    var LyTypographyBase = /** @class */ (function () {
        function LyTypographyBase(_theme) {
            this._theme = _theme;
        }
        return LyTypographyBase;
    }());
    /** @docs-private */
    var LyTypographyMixinBase = ui.mixinStyleUpdater(ui.mixinColor((LyTypographyBase)));
    var LyTypography = /** @class */ (function (_super) {
        __extends(LyTypography, _super);
        function LyTypography(_theme, _el, renderer) {
            var _this = _super.call(this, _theme) || this;
            _this._el = _el;
            _this.renderer = renderer;
            /** @docs-private */
            _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
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
                        this._lyTypClass = undefined;
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
                var newValue = ui.toBoolean(val);
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
                var newVal = ui.toBoolean(val);
                if (newVal !== this.gutter) {
                    this._gutter = newVal;
                    this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
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
                var newVal = ui.toBoolean(val);
                if (newVal !== this.gutterTop) {
                    this._gutterTop = newVal;
                    // const newClass = this._createGutterClass(Gutter.top, newVal);
                    this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
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
                var newVal = ui.toBoolean(val);
                if (newVal !== this.gutterBottom) {
                    this._gutterBottom = newVal;
                    this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
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
        LyTypography.prototype._createTypClass = function (key, instance) {
            var newKey = "k-typ:" + key;
            return this._theme.addStyle(newKey, function (theme) {
                var typography = theme.typography;
                var styl = Object.assign({}, typography.lyTyp[key || 'body1']);
                if (styl.lineHeight) {
                    styl.lineHeight = theme.pxToRem(styl.lineHeight);
                }
                if (typeof styl.letterSpacing === 'number') {
                    styl.letterSpacing = styl.letterSpacing + "px";
                }
                // set default fontFamily
                styl.fontFamily = styl.fontFamily || typography.fontFamily;
                return styl;
            }, this._el.nativeElement, instance, STYLE_PRIORITY);
        };
        LyTypography.prototype._createGutterClass = function (name, val, instance) {
            return this._theme.addStyle("k-typ-gutter:" + name + ":" + val, function (theme) {
                var gutter = name === Gutter.default;
                return ("margin-top:" + (val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0) + "em;" +
                    ("margin-bottom:" + (val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0) + "em;"));
            }, this._el.nativeElement, instance, STYLE_PRIORITY);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyTypography.prototype, "lyTyp", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyTypography.prototype, "noWrap", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyTypography.prototype, "gutter", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyTypography.prototype, "gutterTop", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyTypography.prototype, "gutterBottom", null);
        LyTypography = __decorate([
            core.Directive({
                selector: "[lyTyp]",
                inputs: [
                    'color'
                ]
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef,
                core.Renderer2])
        ], LyTypography);
        return LyTypography;
    }(LyTypographyMixinBase));

    var LyTypographyModule = /** @class */ (function () {
        function LyTypographyModule() {
        }
        LyTypographyModule = __decorate([
            core.NgModule({
                exports: [LyTypography, ui.LyCommonModule],
                declarations: [LyTypography]
            })
        ], LyTypographyModule);
        return LyTypographyModule;
    }());

    exports.LyTypography = LyTypography;
    exports.LyTypographyBase = LyTypographyBase;
    exports.LyTypographyMixinBase = LyTypographyMixinBase;
    exports.LyTypographyModule = LyTypographyModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-typography.umd.js.map
