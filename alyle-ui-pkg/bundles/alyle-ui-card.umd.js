(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@angular/common', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.card = {}), global.ng.core, global.ng.common, global.ly.core));
}(this, function (exports, core, common, ui) { 'use strict';

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

    var STYLES = function (theme) {
        var _a, _b;
        return ({
            $priority: STYLE_PRIORITY,
            root: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: '2px',
                '&': theme.card ? theme.card.root : null
            },
            content: (_a = {
                    display: 'block',
                    padding: '16px 24px'
                },
                _a[theme.getBreakpoint('XSmall')] = {
                    padding: '16px 16px'
                },
                _a),
            actions: (_b = {
                    display: 'block',
                    padding: '8px 12px'
                },
                _b[theme.getBreakpoint('XSmall')] = {
                    padding: '8px 4px'
                },
                _b),
            actionsItem: {
                margin: '0 4px'
            }
        });
    };
    var DEFAULT_ASPECT_RATIO = '16:9';
    var STYLE_PRIORITY = -1;
    /** @docs-private */
    var LyCardBase = /** @class */ (function () {
        function LyCardBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCardBase;
    }());
    /** @docs-private */
    var LyCardMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyCardBase)))))))));
    var LyCard = /** @class */ (function (_super) {
        __extends(LyCard, _super);
        function LyCard(theme, _el, renderer, ngZone) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this.theme = theme;
            _this._el = _el;
            _this.renderer = renderer;
            /**
             * styles
             * @docs-private
             */
            _this.classes = _this.theme.addStyleSheet(STYLES);
            _this.setAutoContrast();
            return _this;
        }
        LyCard.prototype.ngOnChanges = function () {
            this.updateStyle(this._el);
        };
        LyCard.prototype.ngOnInit = function () {
            var requireOnChanges;
            if (!this.bg) {
                this.bg = 'background:primary';
                requireOnChanges = true;
            }
            if (!this.elevation) {
                this.elevation = 2;
                requireOnChanges = true;
            }
            if (requireOnChanges) {
                this.updateStyle(this._el);
            }
            this.renderer.addClass(this._el.nativeElement, this.classes.root);
        };
        LyCard.prototype.ngOnDestroy = function () {
            this._removeRippleEvents();
        };
        LyCard = __decorate([
            core.Directive({
                selector: 'ly-card',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple',
                ]
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef,
                core.Renderer2,
                core.NgZone])
        ], LyCard);
        return LyCard;
    }(LyCardMixinBase));
    var LyCardContent = /** @class */ (function () {
        function LyCardContent(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        LyCardContent.prototype.ngOnInit = function () {
            this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
        };
        LyCardContent = __decorate([
            core.Directive({
                selector: 'ly-card-content'
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                LyCard])
        ], LyCardContent);
        return LyCardContent;
    }());
    var LyCardActions = /** @class */ (function () {
        function LyCardActions(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        LyCardActions.prototype.ngOnInit = function () {
            var _this = this;
            this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
            if (!ui.toBoolean(this.disableActionSpacing)) {
                this.el.nativeElement.childNodes.forEach(function (element) {
                    _this.renderer.addClass(element, _this.card.classes.actionsItem);
                });
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], LyCardActions.prototype, "disableActionSpacing", void 0);
        LyCardActions = __decorate([
            core.Directive({
                selector: 'ly-card-actions'
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                LyCard])
        ], LyCardActions);
        return LyCardActions;
    }());
    var LyCardMedia = /** @class */ (function () {
        function LyCardMedia(el, renderer, theme) {
            this.el = el;
            this.renderer = renderer;
            this.theme = theme;
        }
        Object.defineProperty(LyCardMedia.prototype, "bgImg", {
            get: function () {
                return this._bgImg;
            },
            set: function (val) {
                if (val !== this.bgImg) {
                    this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCardMedia.prototype, "ratio", {
            get: function () {
                return this._ratio;
            },
            /** Aspect ratio */
            set: function (val) {
                if (val !== this.ratio) {
                    this._createAspectRatioClass(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyCardMedia.prototype.ngOnInit = function () {
            if (!this.ratio) {
                this.ratio = DEFAULT_ASPECT_RATIO;
            }
        };
        LyCardMedia.prototype._createBgImgClass = function (val, instance) {
            this._bgImg = val;
            this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
            return this.theme.addStyle("lyCard-media:" + val, ("display:block;" +
                "background-size: cover;" +
                "background-repeat: no-repeat;" +
                "background-position: center;"), this.el.nativeElement, instance, STYLE_PRIORITY);
        };
        LyCardMedia.prototype._createAspectRatioClass = function (val) {
            this._ratio = val;
            this._ratioClass = this.theme.addStyle("lyCard-media-ar:" + val, ({
                '&:before': val.split(':').reduce(function (valorAnterior, valorActual) {
                    return ({
                        paddingTop: +valorActual / +valorAnterior * 100 + "%",
                        content: "''",
                        display: 'block'
                    });
                })
            }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyCardMedia.prototype, "bgImg", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyCardMedia.prototype, "ratio", null);
        LyCardMedia = __decorate([
            core.Directive({
                selector: 'ly-card-media'
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                ui.LyTheme2])
        ], LyCardMedia);
        return LyCardMedia;
    }());

    var LyCardModule = /** @class */ (function () {
        function LyCardModule() {
        }
        LyCardModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, ui.LyCommonModule],
                declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
            })
        ], LyCardModule);
        return LyCardModule;
    }());

    exports.LyCard = LyCard;
    exports.LyCardActions = LyCardActions;
    exports.LyCardBase = LyCardBase;
    exports.LyCardContent = LyCardContent;
    exports.LyCardMedia = LyCardMedia;
    exports.LyCardMixinBase = LyCardMixinBase;
    exports.LyCardModule = LyCardModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-card.umd.js.map
