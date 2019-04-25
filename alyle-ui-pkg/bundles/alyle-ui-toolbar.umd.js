(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/toolbar', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.toolbar = {}), global.ng.core, global.ly.core, global.ng.common));
}(this, function (exports, core, ui, common) { 'use strict';

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
    var DEFAULT_POSITION = 'fixed';
    var DEFAULT_BG = 'background:tertiary';
    var styles = function (theme) {
        var _a;
        return ({
            root: (_a = {
                    padding: '0 16px',
                    display: 'flex',
                    boxSizing: 'border-box',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    height: '64px',
                    zIndex: theme.zIndex.toolbar
                },
                _a[theme.getBreakpoint('XSmall')] = {
                    height: '56px'
                },
                _a['&'] = theme.toolbar ? theme.toolbar.root : null,
                _a),
            dense: {
                height: '56px'
            }
        });
    };
    var ɵ0 = styles;
    /** @docs-private */
    var LyToolbarBase = /** @class */ (function () {
        function LyToolbarBase(_theme) {
            this._theme = _theme;
        }
        return LyToolbarBase;
    }());
    /** @docs-private */
    var LyToolbarMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyToolbarBase))))))));
    var LyToolbar = /** @class */ (function (_super) {
        __extends(LyToolbar, _super);
        function LyToolbar(_renderer, _el, theme) {
            var _this = _super.call(this, theme) || this;
            _this._renderer = _renderer;
            _this._el = _el;
            _this.theme = theme;
            /**
             * Styles
             * @docs-private
             */
            _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            _this.setAutoContrast();
            _renderer.addClass(_this._el.nativeElement, _this.classes.root);
            return _this;
        }
        Object.defineProperty(LyToolbar.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (val) {
                this._position = val;
                this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyToolbar.prototype, "dense", {
            get: function () {
                return this._dense;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                if (core.isDevMode() && newVal !== this.dense) {
                    console.warn(this._el.nativeElement, "LyToolbar.appearance: `dense` is deprecated, instead use `appearance=\"dense\"`");
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this.classes.dense);
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this.classes.dense);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyToolbar.prototype, "appearance", {
            get: function () {
                return this._appearance;
            },
            set: function (val) {
                if (val !== this.appearance) {
                    this._appearance = val;
                    this._appearanceClass = this._theme.addStyle("LyToolbar.appearance:" + val, function (theme) {
                        if (!theme.toolbar) {
                            throw ui.getLyThemeVariableUndefinedError('toolbar');
                        }
                        if (!(theme.toolbar.appearance && theme.toolbar.appearance[val])) {
                            throw new Error("Value toolbar.appearance['" + val + "'] not found in ThemeVariables");
                        }
                        return theme.toolbar.appearance[val];
                    }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyToolbar.prototype.ngOnChanges = function () {
            this.updateStyle(this._el);
        };
        LyToolbar.prototype.ngOnInit = function () {
            if (!this.position) {
                this.position = DEFAULT_POSITION;
            }
            if (!this.bg) {
                this.bg = DEFAULT_BG;
                this.updateStyle(this._el);
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyToolbar.prototype, "position", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyToolbar.prototype, "dense", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyToolbar.prototype, "appearance", null);
        LyToolbar = __decorate([
            core.Directive({
                selector: 'ly-toolbar',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor'
                ]
            }),
            __metadata("design:paramtypes", [core.Renderer2,
                core.ElementRef,
                ui.LyTheme2])
        ], LyToolbar);
        return LyToolbar;
    }(LyToolbarMixinBase));

    var LyToolbarModule = /** @class */ (function () {
        function LyToolbarModule() {
        }
        LyToolbarModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, ui.LyCommonModule],
                exports: [LyToolbar, ui.LyCommonModule],
                declarations: [LyToolbar]
            })
        ], LyToolbarModule);
        return LyToolbarModule;
    }());

    exports.LyToolbar = LyToolbar;
    exports.LyToolbarBase = LyToolbarBase;
    exports.LyToolbarMixinBase = LyToolbarMixinBase;
    exports.LyToolbarModule = LyToolbarModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-toolbar.umd.js.map
