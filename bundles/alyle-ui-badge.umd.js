(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/badge', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.badge = {}), global.ng.core, global.ly.core));
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
    var DEFAULT_POSITION = 'startTop';
    var DEFAULT_BG = 'primary';
    var DEFAULT_POSITION_VALUE = {
        after: '-11px',
        above: '-11px'
    };
    var STYLES = function (theme) { return ({
        $priority: STYLE_PRIORITY,
        root: {
            position: 'absolute',
            display: 'flex',
            width: '22px',
            height: '22px',
            borderRadius: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            pointerEvents: 'none',
            zIndex: 1,
            fontSize: theme.pxToRem(12),
            fontFamily: theme.typography.fontFamily,
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            '&': theme.badge ? theme.badge.root : null
        },
        relative: {
            position: 'relative'
        }
    }); };
    /** @docs-private */
    var LyBadgeBase = /** @class */ (function () {
        function LyBadgeBase(_theme) {
            this._theme = _theme;
        }
        return LyBadgeBase;
    }());
    /** @docs-private */
    var LyBadgeMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyBadgeBase))))))));
    var LyBadge = /** @class */ (function (_super) {
        __extends(LyBadge, _super);
        function LyBadge(_el, _theme, _renderer) {
            var _this = _super.call(this, _theme) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            /**
             * Styles
             * @docs-private
             */
            _this.classes = _this._theme.addStyleSheet(STYLES);
            _this.setAutoContrast();
            _this._badgeElementRef = _this._el.nativeElement;
            return _this;
        }
        Object.defineProperty(LyBadge.prototype, "content", {
            get: function () {
                return this._content;
            },
            /** The content for the badge */
            set: function (val) {
                if (val !== this.content) {
                    this._content = val;
                    this._createBadge();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "position", {
            get: function () {
                return this._position;
            },
            /** The position for the badge */
            set: function (val) {
                if (val !== this.position) {
                    this._position = val;
                    this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                        var sty = theme.badge.position && theme.badge.position[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
                        if (sty) {
                            return sty;
                        }
                        else {
                            throw new Error("LyBadge.position `" + val + "` not found in `ThemeVariables`");
                        }
                    }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "lyBadgeBg", {
            /** The color of the badge */
            get: function () {
                return this._lyBadgeBg;
            },
            set: function (val) {
                if (val !== this.lyBadgeBg) {
                    this._lyBadgeBg = val;
                    this._lyBadgeBgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) { return ({
                        backgroundColor: theme.colorOf(val),
                        color: theme.colorOf(val + ":contrast")
                    }); }, this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyBadge.prototype.ngOnChanges = function () {
            if (!this.content) {
                this.updateStyle(this._el);
            }
        };
        LyBadge.prototype.ngOnInit = function () {
            /** Add root styles */
            this._renderer.addClass(this._badgeElementRef, this.classes.root);
            /** Set default position */
            if (!this.position) {
                this.position = DEFAULT_POSITION;
            }
            /** Set default bg */
            if (this.content && !this.lyBadgeBg) {
                this.lyBadgeBg = DEFAULT_BG;
            }
        };
        LyBadge.prototype.ngOnDestroy = function () {
            if (this._elContainer) {
                this._renderer.removeChild(this._el.nativeElement, this._elContainer);
            }
        };
        LyBadge.prototype._createBadge = function () {
            if (!this._elContainer) {
                var container = this._elContainer = this._renderer.createElement('div');
                this._renderer.appendChild(this._el.nativeElement, container);
                this._badgeElementRef = container;
                /** Add position relative */
                this._renderer.addClass(this._el.nativeElement, this.classes.relative);
            }
            this._elContainer.textContent = "" + this.content;
        };
        __decorate([
            core.Input('lyBadge'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyBadge.prototype, "content", null);
        __decorate([
            core.Input('lyBadgePosition'),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyBadge.prototype, "position", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyBadge.prototype, "lyBadgeBg", null);
        LyBadge = __decorate([
            core.Directive({
                selector: 'ly-badge, [lyBadge]',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'disabled',
                    'outlined',
                    'elevation',
                    'shadowColor'
                ]
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                ui.LyTheme2,
                core.Renderer2])
        ], LyBadge);
        return LyBadge;
    }(LyBadgeMixinBase));

    var LyBadgeModule = /** @class */ (function () {
        function LyBadgeModule() {
        }
        LyBadgeModule = __decorate([
            core.NgModule({
                exports: [LyBadge, ui.LyCommonModule],
                declarations: [LyBadge]
            })
        ], LyBadgeModule);
        return LyBadgeModule;
    }());

    exports.LyBadge = LyBadge;
    exports.LyBadgeBase = LyBadgeBase;
    exports.LyBadgeMixinBase = LyBadgeMixinBase;
    exports.LyBadgeModule = LyBadgeModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-badge.umd.js.map
