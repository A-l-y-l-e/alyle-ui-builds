(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/drawer', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.drawer = {}), global.ng.core, global.ly.core, global.ng.common));
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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var DEFAULT_MODE = 'side';
    var DEFAULT_WIDTH = '230px';
    var DEFAULT_VALUE = '';
    var STYLE_PRIORITY = -2;
    var DEFAULT_POSITION = ui.XPosition.before;
    var STYLES = function (theme) { return ({
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
    }); };
    var LyDrawerContainer = /** @class */ (function () {
        function LyDrawerContainer(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            /** @docs-private */
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY + 1.9);
            this._openDrawers = 0;
            this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
        }
        LyDrawerContainer.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        __decorate([
            core.ContentChild(core.forwardRef(function () { return LyDrawerContent; })),
            __metadata("design:type", LyDrawerContent)
        ], LyDrawerContainer.prototype, "_drawerContent", void 0);
        LyDrawerContainer = __decorate([
            core.Directive({
                selector: 'ly-drawer-container'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.Renderer2,
                core.ElementRef])
        ], LyDrawerContainer);
        return LyDrawerContainer;
    }());
    var LyDrawerContent = /** @class */ (function () {
        function LyDrawerContent(_renderer, _el, drawerContainer) {
            this._renderer = _renderer;
            this._el = _el;
            this._renderer.addClass(this._el.nativeElement, drawerContainer.classes.drawerContent);
        }
        LyDrawerContent.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LyDrawerContent = __decorate([
            core.Directive({
                selector: 'ly-drawer-content'
            }),
            __metadata("design:paramtypes", [core.Renderer2,
                core.ElementRef,
                LyDrawerContainer])
        ], LyDrawerContent);
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
             * @docs-private
             */
            this.classes = this._drawerContainer.classes;
            this._position = DEFAULT_POSITION;
            this.mode = DEFAULT_MODE;
            this._renderer.addClass(this._el.nativeElement, _drawerContainer.classes.drawer);
        }
        Object.defineProperty(LyDrawer.prototype, "opened", {
            get: function () {
                return this._opened;
            },
            set: function (val) {
                if (val !== this.opened) {
                    this._opened = ui.toBoolean(val);
                    this._isOpen = this._opened;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "hasBackdrop", {
            get: function () {
                return this._hasBackdrop;
            },
            set: function (val) {
                this._hasBackdrop = val == null ? null : ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (val) {
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
        LyDrawer.prototype.ngOnChanges = function () {
            this._updateBackdrop();
            this._updateAnimations();
            var __mode = this.mode;
            var __forceModeOverOpened = this._forceModeOverOpened;
            var __opened = this.opened;
            var __width = this.width;
            var __height = this.height;
            var __position = this.position;
            var __spacingAbove = this.spacingAbove;
            var __spacingBelow = this.spacingBelow;
            var __spacingBefore = this.spacingBefore;
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
                    var newKeyDrawerContent = "ly-drawer-content----:" + (__width || DEFAULT_VALUE) + "\u00B7" + (__position || DEFAULT_VALUE);
                    this._drawerContentClass = this._theme.addStyle(newKeyDrawerContent, function (theme) {
                        var drawerContentStyles = {};
                        var positionVal = "margin-" + __position;
                        if (__width) {
                            ui.eachMedia(__width, function (val, media) {
                                var newStyleWidth = val === 'over' ? '0px' : toPx(val);
                                if (media) {
                                    var breakPoint = theme.getBreakpoint(media);
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
                var stylesDrawerRoot = {};
                var pos = theme.getDirection(__position);
                var positionSign = __position === 'above' ? '-' : '+';
                if (__width) {
                    var dirXSign_1 = pos === ui.DirPosition.left ? '-' : '+';
                    ui.eachMedia(__width, function (val, media) {
                        if ((__mode === 'over' || __forceModeOverOpened) && (val === '0' || val === 'over')) {
                            return;
                        }
                        var newVal = val === 'over' ? '0px' : toPx(val);
                        var newStyleWidth = newVal;
                        var newTranslateX = "translateX(" + (dirXSign_1 + newVal) + ")";
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
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
                        var newStyleHeight = toPx(val);
                        var newTranslateY = "translateY(" + (positionSign + toPx(val)) + ")";
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
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
                        var newStyleSpacingTop = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.top = newStyleSpacingTop;
                        }
                        else {
                            stylesDrawerRoot.top = newStyleSpacingTop;
                        }
                    });
                    ui.eachMedia(__spacingBelow, function (val, media) {
                        var newStyleSpacingBottom = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
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
                        var newStyleSpacingBefore = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.before = newStyleSpacingBefore;
                        }
                        else {
                            stylesDrawerRoot.before = newStyleSpacingBefore;
                        }
                    });
                    ui.eachMedia(__spacingAfter, function (val, media) {
                        var newStyleSpacingAfter = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
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
        LyDrawer.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (ui.Platform.isBrowser) {
                this._tabResizeSub = this._winResize.resize$.subscribe(function () {
                    _this.ngOnChanges();
                });
            }
        };
        LyDrawer.prototype.ngOnDestroy = function () {
            if (this._tabResizeSub) {
                this._tabResizeSub.unsubscribe();
            }
        };
        LyDrawer.prototype.toggle = function () {
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
        LyDrawer.prototype._contentHasMargin = function () {
            var content = this._drawerContainer._drawerContent._getHostElement();
            var container = this._drawerContainer._getHostElement();
            return (content.offsetWidth === container.offsetWidth);
        };
        LyDrawer.prototype._updateBackdrop = function () {
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
                        _this._viewRef.rootNodes[0].style.zIndex = "" + _this._drawerContainer._openDrawers;
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
        LyDrawer.prototype._updateAnimations = function () {
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
        __decorate([
            core.ViewChild(core.TemplateRef),
            __metadata("design:type", core.TemplateRef)
        ], LyDrawer.prototype, "_backdrop", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyDrawer.prototype, "opened", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LyDrawer.prototype, "mode", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyDrawer.prototype, "spacingAbove", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyDrawer.prototype, "spacingBelow", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyDrawer.prototype, "spacingBefore", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyDrawer.prototype, "spacingAfter", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyDrawer.prototype, "width", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyDrawer.prototype, "height", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyDrawer.prototype, "hasBackdrop", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyDrawer.prototype, "position", null);
        LyDrawer = __decorate([
            core.Component({
                selector: 'ly-drawer',
                template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                exportAs: 'lyDrawer'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.Renderer2,
                core.ElementRef,
                LyDrawerContainer,
                core.ViewContainerRef,
                ui.WinResize,
                core.ChangeDetectorRef,
                core.NgZone])
        ], LyDrawer);
        return LyDrawer;
    }());
    /**
     * convert number to px
     */
    function toPx(val) {
        if (typeof val === 'number') {
            return val + "px";
        }
        else {
            return val;
        }
    }
    function createEmptyPropOrUseExisting(object, key, _new) {
        return key in object
            ? object[key]
            : object[key] = _new || {};
    }

    var LyDrawerModule = /** @class */ (function () {
        function LyDrawerModule() {
        }
        LyDrawerModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    ui.LyCommonModule
                ],
                exports: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
            })
        ], LyDrawerModule);
        return LyDrawerModule;
    }());

    exports.LyDrawer = LyDrawer;
    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawerModule = LyDrawerModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-drawer.umd.js.map
