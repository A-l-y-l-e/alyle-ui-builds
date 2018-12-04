(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.card = {}),global.ng.core,global.ly.core,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = function (theme) {
        var _a, _b;
        return ({
            root: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: '2px'
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
    /** @type {?} */
    var DEFAULT_ASPECT_RATIO = '16:9';
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyCardBase = /** @class */ (function () {
        function LyCardBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCardBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
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
             * @ignore
             */
            _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            _this.setAutoContrast();
            return _this;
        }
        /**
         * @return {?}
         */
        LyCard.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        LyCard.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
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
        /**
         * @return {?}
         */
        LyCard.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._removeRippleEvents();
            };
        LyCard.decorators = [
            { type: core.Directive, args: [{
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
                    },] }
        ];
        /** @nocollapse */
        LyCard.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.NgZone }
            ];
        };
        return LyCard;
    }(LyCardMixinBase));
    var LyCardContent = /** @class */ (function () {
        function LyCardContent(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        /**
         * @return {?}
         */
        LyCardContent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
            };
        LyCardContent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card-content'
                    },] }
        ];
        /** @nocollapse */
        LyCardContent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyCard }
            ];
        };
        return LyCardContent;
    }());
    var LyCardActions = /** @class */ (function () {
        function LyCardActions(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        /**
         * @return {?}
         */
        LyCardActions.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
                if (!ui.toBoolean(this.disableActionSpacing)) {
                    this.el.nativeElement.childNodes.forEach(function (element) {
                        _this.renderer.addClass(element, _this.card.classes.actionsItem);
                    });
                }
            };
        LyCardActions.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card-actions'
                    },] }
        ];
        /** @nocollapse */
        LyCardActions.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyCard }
            ];
        };
        LyCardActions.propDecorators = {
            disableActionSpacing: [{ type: core.Input }]
        };
        return LyCardActions;
    }());
    var LyCardMedia = /** @class */ (function () {
        function LyCardMedia(el, renderer, theme) {
            this.el = el;
            this.renderer = renderer;
            this.theme = theme;
        }
        Object.defineProperty(LyCardMedia.prototype, "bgImg", {
            get: /**
             * @return {?}
             */ function () {
                return this._bgImg;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.bgImg) {
                    this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCardMedia.prototype, "ratio", {
            get: /**
             * @return {?}
             */ function () {
                return this._ratio;
            },
            /** Aspect ratio */
            set: /**
             * Aspect ratio
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.ratio) {
                    this._createAspectRatioClass(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCardMedia.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.ratio) {
                    this.ratio = DEFAULT_ASPECT_RATIO;
                }
            };
        /**
         * @param {?} val
         * @param {?} instance
         * @return {?}
         */
        LyCardMedia.prototype._createBgImgClass = /**
         * @param {?} val
         * @param {?} instance
         * @return {?}
         */
            function (val, instance) {
                this._bgImg = val;
                this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
                return this.theme.addStyle("lyCard-media:" + val, ("display:block;" +
                    "background-size: cover;" +
                    "background-repeat: no-repeat;" +
                    "background-position: center;"), this.el.nativeElement, instance, STYLE_PRIORITY);
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCardMedia.prototype._createAspectRatioClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._ratio = val;
                this._ratioClass = this.theme.addStyle("lyCard-media-ar:" + val, ({
                    '&:before': val.split(':').reduce(function (valorAnterior, valorActual) {
                        return ( /** @type {?} */(({
                            paddingTop: +valorActual / +valorAnterior * 100 + "%",
                            content: "''",
                            display: 'block'
                        })));
                    })
                }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
            };
        LyCardMedia.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card-media'
                    },] }
        ];
        /** @nocollapse */
        LyCardMedia.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 }
            ];
        };
        LyCardMedia.propDecorators = {
            bgImg: [{ type: core.Input }],
            ratio: [{ type: core.Input }]
        };
        return LyCardMedia;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyCardModule = /** @class */ (function () {
        function LyCardModule() {
        }
        LyCardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, ui.LyCommonModule],
                        declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
                    },] }
        ];
        return LyCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyCardModule = LyCardModule;
    exports.LyCardBase = LyCardBase;
    exports.LyCardMixinBase = LyCardMixinBase;
    exports.LyCard = LyCard;
    exports.LyCardContent = LyCardContent;
    exports.LyCardActions = LyCardActions;
    exports.LyCardMedia = LyCardMedia;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvY2FyZC9jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcxNnB4IDE2cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnOHB4IDEycHgnLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggNHB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uc0l0ZW06IHtcbiAgICBtYXJnaW46ICcwIDRweCdcbiAgfVxufSk7XG5cbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5Q2FyZEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDYXJkTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUNhcmRCYXNlKSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZScsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGV4dGVuZHMgTHlDYXJkTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCByZXF1aXJlT25DaGFuZ2VzOiBib29sZWFuO1xuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9ICdiYWNrZ3JvdW5kOnByaW1hcnknO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZU9uQ2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5jb250ZW50KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWFjdGlvbnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZEFjdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaXNhYmxlQWN0aW9uU3BhY2luZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmFjdGlvbnMpO1xuICAgIGlmICghdG9Cb29sZWFuKHRoaXMuZGlzYWJsZUFjdGlvblNwYWNpbmcpKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2JnSW1nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnSW1nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuICBwcml2YXRlIF9yYXRpb0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGJnSW1nKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZ0ltZykge1xuICAgICAgdGhpcy5fYmdJbWdDbGFzcyA9IHRoaXMuX2NyZWF0ZUJnSW1nQ2xhc3ModmFsLCB0aGlzLl9iZ0ltZ0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJnSW1nKCkge1xuICAgIHJldHVybiB0aGlzLl9iZ0ltZztcbiAgfVxuXG4gIC8qKiBBc3BlY3QgcmF0aW8gKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5fY3JlYXRlQXNwZWN0UmF0aW9DbGFzcyh2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5Q2FyZC1tZWRpYToke3ZhbH1gLFxuICAgICAgKFxuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYGJhY2tncm91bmQtc2l6ZTogY292ZXI7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2BcbiAgICAgICksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yYXRpbyA9IHZhbDtcbiAgICB0aGlzLl9yYXRpb0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUNhcmQtbWVkaWEtYXI6JHt2YWx9YCwgKHtcbiAgICAgICAgJyY6YmVmb3JlJzogdmFsLnNwbGl0KCc6JykucmVkdWNlKCh2YWxvckFudGVyaW9yLCB2YWxvckFjdHVhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogYCR7K3ZhbG9yQWN0dWFsIC8gK3ZhbG9yQW50ZXJpb3IgKiAxMDB9JWAsXG4gICAgICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3JhdGlvQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYSB9IGZyb20gJy4vY2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWFdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJtaXhpblN0eWxlVXBkYXRlciIsIm1peGluQmciLCJtaXhpbkNvbG9yIiwibWl4aW5SYWlzZWQiLCJtaXhpbkRpc2FibGVkIiwibWl4aW5PdXRsaW5lZCIsIm1peGluRWxldmF0aW9uIiwibWl4aW5TaGFkb3dDb2xvciIsIm1peGluRGlzYWJsZVJpcHBsZSIsInRzbGliXzEuX19leHRlbmRzIiwiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTmdab25lIiwidG9Cb29sZWFuIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENB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