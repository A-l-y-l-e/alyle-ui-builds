(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/drawer', ['exports', '@angular/core', '@angular/common', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.drawer = {}),global.ng.core,global.ng.common,global.ly.core));
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
    var DEFAULT_MODE = 'side';
    /** @type {?} */
    var DEFAULT_WIDTH = '230px';
    /** @type {?} */
    var DEFAULT_VALUE = '';
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_POSITION = ui.XPosition.before;
    /** @type {?} */
    var STYLES = function (theme) {
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
                transform: 'translate(0px, 0px)',
                visibility: 'visible'
            },
            drawerClosed: null,
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
             * \@docs-private
             */
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY + 1.9);
            this._openDrawers = 0;
            this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
        }
        /**
         * @return {?}
         */
        LyDrawerContainer.prototype._getHostElement = /**
         * @return {?}
         */
            function () {
                return this._el.nativeElement;
            };
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
        function LyDrawer(_theme, _renderer, _el, _drawerContainer, _vcr, _winResize, _cd, _zone) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            this._drawerContainer = _drawerContainer;
            this._vcr = _vcr;
            this._winResize = _winResize;
            this._cd = _cd;
            this._zone = _zone;
            /**
             * Styles
             * \@docs-private
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
                    this._isOpen = this._opened;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "hasBackdrop", {
            get: /**
             * @return {?}
             */ function () {
                return this._hasBackdrop;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._hasBackdrop = val == null ? null : ui.toBoolean(val);
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
                    this._theme.addStyle("drawer.position:" + val, 
                    // the style needs to be a function so that it can be changed dynamically
                    function () {
                        var _a;
                        return (_a = {},
                            _a[val] = 0,
                            _a);
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
                /** @type {?} */
                var __mode = this.mode;
                /** @type {?} */
                var __forceModeOverOpened = this._forceModeOverOpened;
                /** @type {?} */
                var __opened = this.opened;
                /** @type {?} */
                var __width = this.width;
                /** @type {?} */
                var __height = this.height;
                /** @type {?} */
                var __position = this.position;
                /** @type {?} */
                var __spacingAbove = this.spacingAbove;
                /** @type {?} */
                var __spacingBelow = this.spacingBelow;
                /** @type {?} */
                var __spacingBefore = this.spacingBefore;
                /** @type {?} */
                var __spacingAfter = this.spacingAfter;
                if (__width && __height) {
                    throw new Error("`width` and `height` are defined, you can only define one");
                }
                else if (!__width) {
                    if (!__height) {
                        /** set default __width if `width` & `height` is `undefined` */
                        __width = DEFAULT_WIDTH;
                    }
                }
                if ((this._isOpen && __opened) || (this._isOpen) || __forceModeOverOpened) {
                    /** create styles for mode side */
                    this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
                    // styles for <ly-drawer-content>
                    if (__mode === 'side') {
                        /** @type {?} */
                        var newKeyDrawerContent = "ly-drawer-content----:" + (__width || DEFAULT_VALUE) + "\u00B7" + (__position || DEFAULT_VALUE);
                        this._drawerContentClass = this._theme.addStyle(newKeyDrawerContent, function (theme) {
                            /** @type {?} */
                            var drawerContentStyles = {};
                            /** @type {?} */
                            var positionVal = "margin-" + __position;
                            if (__width) {
                                ui.eachMedia(__width, function (val, media) {
                                    /** @type {?} */
                                    var newStyleWidth = val === 'over' ? '0px' : toPx(val);
                                    if (media) {
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
                    else if (this._drawerContentClass) {
                        /** remove styles for <ly-drawer-content> */
                        this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                        this._drawerContentClass = undefined;
                    }
                }
                else {
                    if (this._drawerContentClass) {
                        this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                        this._drawerContentClass = undefined;
                    }
                    if (this._drawerClass) {
                        this._renderer.removeClass(this._el.nativeElement, this._drawerClass);
                        this._drawerClass = undefined;
                    }
                }
                /** default styles */
                this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingAbove + "\u00B7" + __spacingBelow + "\u00B7" + __spacingBefore + "\u00B7" + __spacingAfter + "\u00B7" + __position + "\u00B7" + __mode + "\u00B7" + __forceModeOverOpened, function (theme) {
                    /** @type {?} */
                    var stylesDrawerRoot = {};
                    /** @type {?} */
                    var pos = theme.getDirection(( /** @type {?} */(__position)));
                    /** @type {?} */
                    var positionSign = __position === 'above' ? '-' : '+';
                    if (__width) {
                        /** @type {?} */
                        var dirXSign_1 = pos === ui.DirPosition.left ? '-' : '+';
                        ui.eachMedia(__width, function (val, media) {
                            if ((__mode === 'over' || __forceModeOverOpened) && (val === '0' || val === 'over')) {
                                return;
                            }
                            /** @type {?} */
                            var newVal = val === 'over' ? '0px' : toPx(val);
                            /** @type {?} */
                            var newStyleWidth = newVal;
                            /** @type {?} */
                            var newTranslateX = "translateX(" + (dirXSign_1 + newVal) + ")";
                            if (media) {
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
                        ui.eachMedia(__height, function (val, media) {
                            /** @type {?} */
                            var newStyleHeight = toPx(val);
                            /** @type {?} */
                            var newTranslateY = "translateY(" + (positionSign + toPx(val)) + ")";
                            if (media) {
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
                    if (__position === 'before' || __position === 'after') {
                        ui.eachMedia(__spacingAbove, function (val, media) {
                            /** @type {?} */
                            var newStyleSpacingTop = toPx(val || 0);
                            if (media) {
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
                        ui.eachMedia(__spacingBelow, function (val, media) {
                            /** @type {?} */
                            var newStyleSpacingBottom = toPx(val || 0);
                            if (media) {
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
                    else if (__position === ui.YPosition.above || __position === ui.YPosition.below) {
                        ui.eachMedia(__spacingBefore, function (val, media) {
                            /** @type {?} */
                            var newStyleSpacingBefore = toPx(val || 0);
                            if (media) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.before = newStyleSpacingBefore;
                            }
                            else {
                                stylesDrawerRoot.before = newStyleSpacingBefore;
                            }
                        });
                        ui.eachMedia(__spacingAfter, function (val, media) {
                            /** @type {?} */
                            var newStyleSpacingAfter = toPx(val || 0);
                            if (media) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.after = newStyleSpacingAfter;
                            }
                            else {
                                stylesDrawerRoot.after = newStyleSpacingAfter;
                            }
                        });
                    }
                    return stylesDrawerRoot;
                }, this._el.nativeElement, this._drawerRootClass, __mode === 'side' ? STYLE_PRIORITY : STYLE_PRIORITY + 1);
                this._fromToggle = false;
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (ui.Platform.isBrowser) {
                    this._tabResizeSub = this._winResize.resize$.subscribe(function () {
                        _this.ngOnChanges();
                    });
                }
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._tabResizeSub) {
                    this._tabResizeSub.unsubscribe();
                }
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
                    this._forceModeOverOpened = true;
                    this._isOpen = true;
                }
                else {
                    if (this._forceModeOverOpened) {
                        this._forceModeOverOpened = false;
                        this._isOpen = this.opened;
                    }
                    else {
                        this._isOpen = !this._isOpen;
                    }
                }
                this.ngOnChanges();
            };
        /**
         * @private
         * @return {?}
         */
        LyDrawer.prototype._contentHasMargin = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var content = ( /** @type {?} */(this._drawerContainer._drawerContent._getHostElement()));
                /** @type {?} */
                var container = ( /** @type {?} */(this._drawerContainer._getHostElement()));
                return (content.offsetWidth === container.offsetWidth);
            };
        /**
         * @private
         * @return {?}
         */
        LyDrawer.prototype._updateBackdrop = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (((this._isOpen && this.opened) || this._isOpen) &&
                    (this.hasBackdrop != null
                        ? this.hasBackdrop
                        : (this.mode === 'over' || (this._forceModeOverOpened && this._contentHasMargin())))) {
                    // create only if is necessary
                    if (!this._viewRef) {
                        this._zone.run(function () {
                            _this._drawerContainer._openDrawers++;
                            _this._viewRef = _this._vcr.createEmbeddedView(_this._backdrop);
                            _this._cd.markForCheck();
                            (( /** @type {?} */(_this._viewRef.rootNodes[0]))).style.zIndex = "" + _this._drawerContainer._openDrawers;
                        });
                    }
                }
                else if (this._viewRef) {
                    this._zone.run(function () {
                        _this._drawerContainer._openDrawers--;
                        _this._vcr.clear();
                        _this._viewRef = undefined;
                        _this._cd.markForCheck();
                        if (_this._forceModeOverOpened) {
                            _this._forceModeOverOpened = false;
                            _this._isOpen = _this.opened;
                        }
                    });
                }
            };
        /**
         * @private
         * @return {?}
         */
        LyDrawer.prototype._updateAnimations = /**
         * @private
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
                { type: core.ViewContainerRef },
                { type: ui.WinResize },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        LyDrawer.propDecorators = {
            _backdrop: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            opened: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            spacingAbove: [{ type: core.Input }],
            spacingBelow: [{ type: core.Input }],
            spacingBefore: [{ type: core.Input }],
            spacingAfter: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hasBackdrop: [{ type: core.Input }],
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

    exports.STYLES = STYLES;
    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawer = LyDrawer;
    exports.LyDrawerModule = LyDrawerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-drawer.umd.js.map