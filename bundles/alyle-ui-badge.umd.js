(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/badge', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.badge = {}),global.ng.core,global.ly.core));
}(this, (function (exports,core,ui) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_POSITION = 'startTop';
    /** @type {?} */
    var DEFAULT_BG = 'primary';
    /** @type {?} */
    var DEFAULT_POSITION_VALUE = {
        after: '-11px',
        above: '-11px'
    };
    /** @type {?} */
    var styles = function (theme) {
        return ({
            root: __assign({ position: 'absolute', display: 'flex', width: '22px', height: '22px', borderRadius: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', pointerEvents: 'none', zIndex: 1, fontSize: theme.pxToRem(12), fontFamily: theme.typography.fontFamily, justifyContent: 'center', alignItems: 'center' }, theme.badge.root),
            relative: {
                position: 'relative'
            }
        });
    };
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyBadgeBase = /** @class */ (function () {
        function LyBadgeBase(_theme) {
            this._theme = _theme;
        }
        return LyBadgeBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyBadgeMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyBadgeBase))))))));
    var LyBadge = /** @class */ (function (_super) {
        __extends(LyBadge, _super);
        function LyBadge(_el, _theme, _renderer) {
            var _this = _super.call(this, _theme) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            /**
             * Styles
             * \@docs-private
             */
            _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
            _this.setAutoContrast();
            _this._badgeElementRef = _this._el.nativeElement;
            return _this;
        }
        Object.defineProperty(LyBadge.prototype, "content", {
            get: /**
             * @return {?}
             */ function () {
                return this._content;
            },
            /** The content for the badge */
            set: /**
             * The content for the badge
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.content) {
                    this._content = val;
                    this._createBadge();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "position", {
            get: /**
             * @return {?}
             */ function () {
                return this._position;
            },
            /** The position for the badge */
            set: /**
             * The position for the badge
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.position) {
                    this._position = val;
                    this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                        /** @type {?} */
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
            get: /**
             * The color of the badge
             * @return {?}
             */ function () {
                return this._lyBadgeBg;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.lyBadgeBg) {
                    this._lyBadgeBg = val;
                    this._lyBadgeBgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) {
                        return ({
                            backgroundColor: theme.colorOf(val),
                            color: theme.colorOf(val + ":contrast")
                        });
                    }, this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyBadge.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (!this.content) {
                    this.updateStyle(this._el);
                }
            };
        /**
         * @return {?}
         */
        LyBadge.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        LyBadge.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._elContainer) {
                    this._renderer.removeChild(this._el.nativeElement, this._elContainer);
                }
            };
        /**
         * @private
         * @return {?}
         */
        LyBadge.prototype._createBadge = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this._elContainer) {
                    /** @type {?} */
                    var container = this._elContainer = this._renderer.createElement('div');
                    this._renderer.appendChild(this._el.nativeElement, container);
                    this._badgeElementRef = container;
                    /** Add position relative */
                    this._renderer.addClass(this._el.nativeElement, this.classes.relative);
                }
                this._elContainer.textContent = "" + this.content;
            };
        LyBadge.decorators = [
            { type: core.Directive, args: [{
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
                    },] }
        ];
        /** @nocollapse */
        LyBadge.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: ui.LyTheme2 },
                { type: core.Renderer2 }
            ];
        };
        LyBadge.propDecorators = {
            content: [{ type: core.Input, args: ['lyBadge',] }],
            position: [{ type: core.Input, args: ['lyBadgePosition',] }],
            lyBadgeBg: [{ type: core.Input }]
        };
        return LyBadge;
    }(LyBadgeMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyBadgeModule = /** @class */ (function () {
        function LyBadgeModule() {
        }
        LyBadgeModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyBadge, ui.LyCommonModule],
                        declarations: [LyBadge]
                    },] }
        ];
        return LyBadgeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LyBadgeBase = LyBadgeBase;
    exports.LyBadgeMixinBase = LyBadgeMixinBase;
    exports.LyBadge = LyBadge;
    exports.LyBadgeModule = LyBadgeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-badge.umd.js.map