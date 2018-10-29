(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/drawer', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.drawer = {}),global.ng.core,global.alyle.ui,global.ng.common));
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_MODE = 'side';
    /** @type {?} */
    var DEFAULT_WIDTH = '230px';
    /** @type {?} */
    var DEFAULT_VALUE = '';
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_POSITION = 'start';
    /** @type {?} */
    var styles = function (theme) {
        return ({
            drawerContainer: {
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                '-webkit-overflow-scrolling': 'touch'
            },
            drawer: {
                display: 'block',
                position: 'fixed',
                zIndex: theme.zIndex.drawer,
                overflow: 'auto',
                visibility: 'hidden'
            },
            drawerContent: {
                display: 'block'
            },
            drawerOpened: {
                transform: 'translate3d(0px, 0px, 0)',
                visibility: 'visible'
            },
            backdrop: __assign({}, ui.LY_COMMON_STYLES.fill, { backgroundColor: theme.drawer.backdrop }),
            transition: {
                transition: theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration,
                transitionProperty: 'transform, margin, visibility'
            }
        });
    };
    var LyDrawerContainer = /** @class */ (function () {
        function LyDrawerContainer(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            /**
             * @ignore
             */
            this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY + 1.9);
            this._openDrawers = 0;
            this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
        }
        LyDrawerContainer.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-drawer-container'
                    },] }
        ];
        /** @nocollapse */
        LyDrawerContainer.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        LyDrawerContainer.propDecorators = {
            _drawerContent: [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyDrawerContent; }),] }]
        };
        return LyDrawerContainer;
    }());
    var LyDrawerContent = /** @class */ (function () {
        function LyDrawerContent(_renderer, _el, drawerContainer) {
            this._renderer = _renderer;
            this._el = _el;
            this._renderer.addClass(this._el.nativeElement, drawerContainer.classes.drawerContent);
        }
        /**
         * @return {?}
         */
        LyDrawerContent.prototype._getHostElement = /**
         * @return {?}
         */
            function () {
                return this._el.nativeElement;
            };
        LyDrawerContent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-drawer-content'
                    },] }
        ];
        /** @nocollapse */
        LyDrawerContent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: LyDrawerContainer }
            ];
        };
        return LyDrawerContent;
    }());
    var LyDrawer = /** @class */ (function () {
        function LyDrawer(_theme, _renderer, _el, _drawerContainer, _vcr) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            this._drawerContainer = _drawerContainer;
            this._vcr = _vcr;
            /**
             * Styles
             * @ignore
             */
            this.classes = this._drawerContainer.classes;
            this._position = DEFAULT_POSITION;
            this.mode = DEFAULT_MODE;
            this._renderer.addClass(this._el.nativeElement, _drawerContainer.classes.drawer);
        }
        Object.defineProperty(LyDrawer.prototype, "opened", {
            get: /**
             * @return {?}
             */ function () {
                return this._opened;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.opened) {
                    this._opened = ui.toBoolean(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "position", {
            get: /**
             * @return {?}
             */ function () {
                return this._position;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.position) {
                    this._position = val;
                    this._theme.addStyle("drawer.position:" + val, function (theme) {
                        var _a;
                        // const positionVal: string;
                        // if (val === 'start' || val === 'end') {
                        //   positionVal = theme.getDirection(val);
                        // } else {
                        //   positionVal = val;
                        // }
                        return _a = {},
                            _a[val] = 0,
                            _a;
                    }, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyDrawer.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this._updateBackdrop();
                this._updateAnimations();
                if (this._forceModeOver && !this._fromToggle) {
                    this._resetForceModeOver();
                }
                /** @type {?} */
                var __mode = this.mode;
                /** @type {?} */
                var __forceModeOver = this._forceModeOver;
                /** @type {?} */
                var __opened = this.opened;
                /** @type {?} */
                var __width = this.width;
                /** @type {?} */
                var __height = this.height;
                /** @type {?} */
                var __position = this.position;
                /** @type {?} */
                var __spacingTop = this.spacingTop;
                /** @type {?} */
                var __spacingBottom = this.spacingBottom;
                if (__width && __height) {
                    throw new Error("`width` and `height` are defined, you can only define one");
                }
                else if (!__width) {
                    if (!__height) {
                        /** set default __width if `width` & `height` is `undefined` */
                        __width = DEFAULT_WIDTH;
                    }
                }
                if (__opened) {
                    /** create styles for mode side */
                    this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
                    if (__mode === 'side') {
                        /** @type {?} */
                        var newKeyDrawerContent = "ly-drawer-content----:" + (__opened || DEFAULT_VALUE) + "\u00B7" + (__width || DEFAULT_VALUE) + "\u00B7" + (__position || DEFAULT_VALUE);
                        this._drawerContentClass = this._theme.addStyle(newKeyDrawerContent, function (theme) {
                            /** @type {?} */
                            var drawerContentStyles = {};
                            /** @type {?} */
                            var positionVal = "margin-" + __position;
                            // if (__position === 'start' || __position === 'end') {
                            //   positionVal += theme.getDirection(__position);
                            // } else {
                            //   positionVal += __position;
                            // }
                            ui.eachMedia(/** @type {?} */ (__opened), function () { });
                            if (__width) {
                                ui.eachMedia(__width, function (val, media, isMedia) {
                                    /** @type {?} */
                                    var newStyleWidth = toPx(val);
                                    if (isMedia) {
                                        /** @type {?} */
                                        var breakPoint = theme.getBreakpoint(media);
                                        /** @type {?} */
                                        var styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentStyles, breakPoint);
                                        styleOfBreakPoint[positionVal] = newStyleWidth;
                                    }
                                    else {
                                        drawerContentStyles[positionVal] = newStyleWidth;
                                    }
                                });
                            }
                            return drawerContentStyles;
                        }, this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                    }
                    else {
                        /** remove styles for <ly-drawer-content> */
                        this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                        this._drawerContentClass = null;
                    }
                }
                else {
                    this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                    this._drawerContentClass = null;
                    this._renderer.removeClass(this._el.nativeElement, this._drawerClass);
                    this._drawerClass = null;
                }
                /** default styles */
                // tslint:disable-next-line:max-line-length
                this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingTop + "\u00B7" + __spacingBottom + "\u00B7" + __spacingBottom + "\u00B7" + __position + "\u00B7" + __mode + "\u00B7" + __forceModeOver, function (theme) {
                    /** @type {?} */
                    var stylesDrawerRoot = {};
                    /** @type {?} */
                    var positionSign = __position === 'start' || __position === 'top' ? '-' : '+';
                    if (__width) {
                        ui.eachMedia(__width, function (val, media, isMedia) {
                            if ((__mode === 'over' || __forceModeOver) && val === '0') {
                                return;
                            }
                            /** @type {?} */
                            var newStyleWidth = toPx(val);
                            /** @type {?} */
                            var newTranslateX = "translateX(" + (positionSign + toPx(val)) + ")";
                            if (isMedia) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.width = newStyleWidth;
                                styleOfBreakPoint.transform = newTranslateX;
                            }
                            else {
                                stylesDrawerRoot.width = newStyleWidth;
                                stylesDrawerRoot.transform = newTranslateX;
                            }
                        });
                    }
                    else if (__height) {
                        ui.eachMedia(__height, function (val, media, isMedia) {
                            /** @type {?} */
                            var newStyleHeight = toPx(val);
                            /** @type {?} */
                            var newTranslateY = "translateY(" + (positionSign + toPx(val)) + ")";
                            if (isMedia) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.height = newStyleHeight;
                                styleOfBreakPoint.transform = newTranslateY;
                            }
                            else {
                                stylesDrawerRoot.height = newStyleHeight;
                                stylesDrawerRoot.transform = newTranslateY;
                            }
                        });
                    }
                    if (__position === 'start' || __position === 'end') {
                        ui.eachMedia(__spacingTop, function (val, media, isMedia) {
                            /** @type {?} */
                            var newStyleSpacingTop = toPx(val || 0);
                            if (isMedia) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.top = newStyleSpacingTop;
                            }
                            else {
                                stylesDrawerRoot.top = newStyleSpacingTop;
                            }
                        });
                        ui.eachMedia(__spacingBottom, function (val, media, isMedia) {
                            /** @type {?} */
                            var newStyleSpacingBottom = toPx(val || 0);
                            if (isMedia) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.bottom = newStyleSpacingBottom;
                            }
                            else {
                                stylesDrawerRoot.bottom = newStyleSpacingBottom;
                            }
                        });
                    }
                    else {
                        stylesDrawerRoot.left = 0;
                        stylesDrawerRoot.right = 0;
                    }
                    return stylesDrawerRoot;
                }, this._el.nativeElement, this._drawerRootClass, __mode === 'side' ? STYLE_PRIORITY : STYLE_PRIORITY + 1);
                this._fromToggle = false;
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.toggle = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var width = getComputedStyle(this._el.nativeElement).width;
                this._fromToggle = true;
                if (width === '0px') {
                    this._forceModeOver = true;
                    this.opened = true;
                }
                else {
                    if (this._forceModeOver && this.opened) {
                        this._resetForceModeOver();
                    }
                    else {
                        this.opened = !this.opened;
                    }
                }
                this.ngOnChanges();
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype._resetForceModeOver = /**
         * @return {?}
         */
            function () {
                this._forceModeOver = false;
                this.opened = false;
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype._updateBackdrop = /**
         * @return {?}
         */
            function () {
                if (this.opened && (this.mode === 'over' || this._forceModeOver)) {
                    this._drawerContainer._openDrawers++;
                    this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
                    ( /** @type {?} */(this._viewRef.rootNodes[0])).style.zIndex = "" + this._drawerContainer._openDrawers;
                }
                else if (this._viewRef) {
                    this._drawerContainer._openDrawers--;
                    this._vcr.clear();
                    this._viewRef = null;
                }
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype._updateAnimations = /**
         * @return {?}
         */
            function () {
                if (this._fromToggle && !this._isAnimation) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.transition);
                    this._renderer.addClass(this._drawerContainer._drawerContent._getHostElement(), this.classes.transition);
                    this._isAnimation = true;
                }
                else if (!this._fromToggle && this._isAnimation) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.transition);
                    this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this.classes.transition);
                    this._isAnimation = false;
                }
            };
        LyDrawer.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-drawer',
                        template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        exportAs: 'lyDrawer'
                    }] }
        ];
        /** @nocollapse */
        LyDrawer.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: LyDrawerContainer },
                { type: core.ViewContainerRef }
            ];
        };
        LyDrawer.propDecorators = {
            _backdrop: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            opened: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            spacingTop: [{ type: core.Input }],
            spacingBottom: [{ type: core.Input }],
            spacingStart: [{ type: core.Input }],
            spacingRight: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            position: [{ type: core.Input }]
        };
        return LyDrawer;
    }());
    /**
     * convert number to px
     * @param {?} val
     * @return {?}
     */
    function toPx(val) {
        if (typeof val === 'number') {
            return val + "px";
        }
        else {
            return val;
        }
    }
    /**
     * @param {?} object
     * @param {?} key
     * @param {?=} _new
     * @return {?}
     */
    function createEmptyPropOrUseExisting(object, key, _new) {
        return key in object
            ? object[key]
            : object[key] = _new || {};
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyDrawerModule = /** @class */ (function () {
        function LyDrawerModule() {
        }
        LyDrawerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ui.LyCommonModule
                        ],
                        exports: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                        declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                    },] }
        ];
        return LyDrawerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawer = LyDrawer;
    exports.LyDrawerModule = LyDrawerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9kcmF3ZXIvZHJhd2VyLnRzIiwibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGVhY2hNZWRpYSxcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBERUZBVUxUX01PREUgPSAnc2lkZSc7XG5jb25zdCBERUZBVUxUX1dJRFRIID0gJzIzMHB4JztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwKScsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gIH0sXG4gIGJhY2tkcm9wOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZHJhd2VyLmJhY2tkcm9wXG4gIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufWAsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiAndHJhbnNmb3JtLCBtYXJnaW4sIHZpc2liaWxpdHknXG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ3RvcCcgfCAnYm90dG9tJztcbnR5cGUgbW9kZSA9ICdzaWRlJyB8ICdvdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZICsgMS45KTtcbiAgX29wZW5EcmF3ZXJzID0gMDtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIGRyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyQ29udGVudCk7XG4gIH1cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmF3ZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzO1xuICBwcml2YXRlIF9mb3JjZU1vZGVPdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF9mcm9tVG9nZ2xlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9pc0FuaW1hdGlvbjogYm9vbGVhbjtcblxuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZHJhd2VyUm9vdENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNvbnRlbnRDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9iYWNrZHJvcDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGUgPSBERUZBVUxUX01PREU7XG4gIEBJbnB1dCgpIHNwYWNpbmdUb3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nU3RhcnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgZHJhd2VyLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgLy8gY29uc3QgcG9zaXRpb25WYWw6IHN0cmluZztcbiAgICAgICAgLy8gaWYgKHZhbCA9PT0gJ3N0YXJ0JyB8fCB2YWwgPT09ICdlbmQnKSB7XG4gICAgICAgIC8vICAgcG9zaXRpb25WYWwgPSB0aGVtZS5nZXREaXJlY3Rpb24odmFsKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBwb3NpdGlvblZhbCA9IHZhbDtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFt2YWxdOiAwXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyLFxuICAgIHByaXZhdGUgX3ZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVCYWNrZHJvcCgpO1xuICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbnMoKTtcbiAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiAhdGhpcy5fZnJvbVRvZ2dsZSkge1xuICAgICAgdGhpcy5fcmVzZXRGb3JjZU1vZGVPdmVyKCk7XG4gICAgfVxuICAgIGNvbnN0IF9fbW9kZSA9IHRoaXMubW9kZTtcbiAgICBjb25zdCBfX2ZvcmNlTW9kZU92ZXIgPSB0aGlzLl9mb3JjZU1vZGVPdmVyO1xuICAgIGNvbnN0IF9fb3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgbGV0IF9fd2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IF9faGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY29uc3QgX19zcGFjaW5nVG9wID0gdGhpcy5zcGFjaW5nVG9wO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JvdHRvbSA9IHRoaXMuc3BhY2luZ0JvdHRvbTtcblxuICAgIGlmIChfX3dpZHRoICYmIF9faGVpZ2h0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHdpZHRoXFxgIGFuZCBcXGBoZWlnaHRcXGAgYXJlIGRlZmluZWQsIHlvdSBjYW4gb25seSBkZWZpbmUgb25lYCk7XG4gICAgfSBlbHNlIGlmICghX193aWR0aCkge1xuICAgICAgaWYgKCFfX2hlaWdodCkge1xuICAgICAgICAvKiogc2V0IGRlZmF1bHQgX193aWR0aCBpZiBgd2lkdGhgICYgYGhlaWdodGAgaXMgYHVuZGVmaW5lZGAgKi9cbiAgICAgICAgX193aWR0aCA9IERFRkFVTFRfV0lEVEg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9fb3BlbmVkKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlcyBmb3IgbW9kZSBzaWRlICovXG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIGlmIChfX21vZGUgPT09ICdzaWRlJykge1xuICAgICAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgICAgIF9fb3BlbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVmFsID0gYG1hcmdpbi0ke19fcG9zaXRpb259YDtcbiAgICAgICAgICAvLyBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgIC8vICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLl9kcmF3ZXJSb290Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZHJhd2VyLXJvb3Q6JHtfX3dpZHRofcOCwrcke19faGVpZ2h0fcOCwrcke19fc3BhY2luZ1RvcH3DgsK3JHtfX3NwYWNpbmdCb3R0b219w4LCtyR7X19zcGFjaW5nQm90dG9tfcOCwrcke19fcG9zaXRpb259w4LCtyR7X19tb2RlfcOCwrcke19fZm9yY2VNb2RlT3Zlcn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNEcmF3ZXJSb290OiB7XG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIGhlaWdodD86IHN0cmluZ1xuICAgICAgICB0b3A/OiBzdHJpbmdcbiAgICAgICAgYm90dG9tPzogc3RyaW5nXG4gICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICB9ID0geyB9O1xuICAgICAgY29uc3QgcG9zaXRpb25TaWduID0gX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAndG9wJyA/ICctJyA6ICcrJztcbiAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGlmICgoX19tb2RlID09PSAnb3ZlcicgfHwgX19mb3JjZU1vZGVPdmVyKSAmJiB2YWwgPT09ICcwJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVggPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX19oZWlnaHQpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9faGVpZ2h0LCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlSGVpZ2h0ID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVkgPSBgdHJhbnNsYXRlWSgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nVG9wLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCb3R0b20sICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQm90dG9tID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QubGVmdCA9IDA7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QucmlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcmNlTW9kZU92ZXIoKSB7XG4gICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgKHRoaXMubW9kZSA9PT0gJ292ZXInIHx8IHRoaXMuX2ZvcmNlTW9kZU92ZXIpKSB7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzKys7XG4gICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAodGhpcy5fdmlld1JlZi5yb290Tm9kZXNbMF0gYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLnpJbmRleCA9IGAke3RoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnN9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMtLTtcbiAgICAgIHRoaXMuX3Zjci5jbGVhcigpO1xuICAgICAgdGhpcy5fdmlld1JlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQW5pbWF0aW9ucygpIHtcbiAgICBpZiAodGhpcy5fZnJvbVRvZ2dsZSAmJiAhdGhpcy5faXNBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Zyb21Ub2dnbGUgJiYgdGhpcy5faXNBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IG51bWJlciB0byBweFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcsIF9uZXc/OiBhbnkpIHtcbiAgcmV0dXJuIGtleSBpbiBvYmplY3RcbiAgPyBvYmplY3Rba2V5XVxuICA6IG9iamVjdFtrZXldID0gX25ldyB8fCB7fTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnQgfSBmcm9tICcuL2RyYXdlcic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkxZX0NPTU1PTl9TVFlMRVMiLCJEaXJlY3RpdmUiLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDb250ZW50Q2hpbGQiLCJmb3J3YXJkUmVmIiwidG9Cb29sZWFuIiwiZWFjaE1lZGlhIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3Q29udGFpbmVyUmVmIiwiVmlld0NoaWxkIiwiVGVtcGxhdGVSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFD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