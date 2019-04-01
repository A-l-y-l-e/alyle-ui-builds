(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/toolbar', ['exports', '@angular/core', '@angular/common', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.toolbar = {}),global.ng.core,global.ng.common,global.ly.core));
}(this, (function (exports,core,common,ui) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_POSITION = 'fixed';
    /** @type {?} */
    var DEFAULT_BG = 'background:tertiary';
    /** @type {?} */
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
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyToolbarBase = /** @class */ (function () {
        function LyToolbarBase(_theme) {
            this._theme = _theme;
        }
        return LyToolbarBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
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
             * \@docs-private
             */
            _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            _this.setAutoContrast();
            _renderer.addClass(_this._el.nativeElement, _this.classes.root);
            return _this;
        }
        Object.defineProperty(LyToolbar.prototype, "position", {
            get: /**
             * @return {?}
             */ function () {
                return this._position;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._position = val;
                this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyToolbar.prototype, "dense", {
            get: /**
             * @return {?}
             */ function () {
                return this._dense;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
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
            get: /**
             * @return {?}
             */ function () {
                return this._appearance;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.appearance) {
                    this._appearance = val;
                    this._appearanceClass = this._theme.addStyle("LyToolbar.appearance:" + val, function (theme) {
                        if (!theme.toolbar) {
                            throw ui.getLyThemeVariableUndefinedError('toolbar');
                        }
                        if (!(theme.toolbar.appearance && ( /** @type {?} */(theme.toolbar.appearance))[val])) {
                            throw new Error("Value toolbar.appearance['" + val + "'] not found in ThemeVariables");
                        }
                        return ( /** @type {?} */(( /** @type {?} */(theme.toolbar.appearance))[val]));
                    }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyToolbar.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        LyToolbar.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.position) {
                    this.position = DEFAULT_POSITION;
                }
                if (!this.bg) {
                    this.bg = DEFAULT_BG;
                    this.updateStyle(this._el);
                }
            };
        LyToolbar.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-toolbar',
                        inputs: [
                            'bg',
                            'color',
                            'raised',
                            'outlined',
                            'elevation',
                            'shadowColor'
                        ]
                    },] }
        ];
        /** @nocollapse */
        LyToolbar.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyToolbar.propDecorators = {
            position: [{ type: core.Input }],
            dense: [{ type: core.Input }],
            appearance: [{ type: core.Input }]
        };
        return LyToolbar;
    }(LyToolbarMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyToolbarModule = /** @class */ (function () {
        function LyToolbarModule() {
        }
        LyToolbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ui.LyCommonModule],
                        exports: [LyToolbar, ui.LyCommonModule],
                        declarations: [LyToolbar]
                    },] }
        ];
        return LyToolbarModule;
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

    exports.LyToolbarBase = LyToolbarBase;
    exports.LyToolbarMixinBase = LyToolbarMixinBase;
    exports.LyToolbar = LyToolbar;
    exports.LyToolbarModule = LyToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-toolbar.umd.js.map