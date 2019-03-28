(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/avatar', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.avatar = {}),global.ng.core,global.ly.core));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_SIZE = 40;
    /** @type {?} */
    var DEFAULT_BG = 'action';
    /** @type {?} */
    var STYLES = ({
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
            }
        }
    });
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyAvatarBase = /** @class */ (function () {
        function LyAvatarBase(_theme) {
            this._theme = _theme;
        }
        return LyAvatarBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyAvatarMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyAvatarBase)))))));
    var LyAvatar = /** @class */ (function (_super) {
        __extends(LyAvatar, _super);
        function LyAvatar(theme, renderer, _elementRef) {
            var _this = _super.call(this, theme) || this;
            _this._elementRef = _elementRef;
            /**
             * \@docs-private
             */
            _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            var avatar = _this._theme.variables.avatar;
            _this.setAutoContrast();
            renderer.addClass(_elementRef.nativeElement, _this.classes.root);
            if (avatar) {
                if (avatar.root) {
                    renderer.addClass(_this._elementRef.nativeElement, _this._theme.style(avatar.root, STYLE_PRIORITY, STYLES));
                }
            }
            return _this;
        }
        Object.defineProperty(LyAvatar.prototype, "size", {
            get: /**
             * @return {?}
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
        /**
         * @return {?}
         */
        LyAvatar.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._elementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        LyAvatar.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.bg) {
                    this.bg = DEFAULT_BG;
                    this.ngOnChanges();
                }
                if (!this.size) {
                    this.size = DEFAULT_SIZE;
                }
            };
        LyAvatar.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-avatar',
                        inputs: [
                            'bg',
                            'color',
                            'raised',
                            'outlined',
                            'elevation',
                            'shadowColor',
                        ]
                    },] }
        ];
        /** @nocollapse */
        LyAvatar.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        LyAvatar.propDecorators = {
            size: [{ type: core.Input }]
        };
        return LyAvatar;
    }(LyAvatarMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyAvatarModule = /** @class */ (function () {
        function LyAvatarModule() {
        }
        LyAvatarModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyAvatar, ui.LyCommonModule],
                        declarations: [LyAvatar]
                    },] }
        ];
        return LyAvatarModule;
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

    exports.LyAvatarBase = LyAvatarBase;
    exports.LyAvatarMixinBase = LyAvatarMixinBase;
    exports.LyAvatar = LyAvatar;
    exports.LyAvatarModule = LyAvatarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-avatar.umd.js.map