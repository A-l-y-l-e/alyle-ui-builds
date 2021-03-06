import { __decorate, __param } from 'tslib';
import { Renderer2, ElementRef, Inject, forwardRef, Directive, ContentChild, ViewContainerRef, ChangeDetectorRef, NgZone, ViewChild, TemplateRef, Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { XPosition, StyleCollection, st2c, LY_COMMON_STYLES, LyTheme2, toBoolean, eachMedia, DirPosition, YPosition, Platform, StyleRenderer, WinResize, LyHostClass, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

var DEFAULT_MODE = 'side';
var DEFAULT_WIDTH = '230px';
var DEFAULT_VALUE = '';
var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = XPosition.before;
var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    return {
        $name: LyDrawerContent.и,
        $priority: STYLE_PRIORITY + 1.9,
        root: function () { return (theme.drawer
            && theme.drawer.root
            && (theme.drawer.root instanceof StyleCollection
                ? theme.drawer.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.drawer.root(__))); },
        drawerContainer: function (className) { return className + "{display:block;position:relative;overflow:hidden;-webkit-overflow-scrolling:touch;}"; },
        drawer: function (className) { return className + "{display:block;position:fixed;z-index:" + theme.zIndex.drawer + ";overflow:auto;visibility:hidden;}"; },
        drawerContent: function (className) { return className + "{display:block;}"; },
        drawerOpened: function (className) { return className + "{transform:translate(0px, 0px);visibility:visible;}"; },
        drawerClosed: null,
        backdrop: function (className) { return "" + st2c((LY_COMMON_STYLES.fill), "" + className) + className + "{background-color:" + theme.drawer.backdrop + ";}"; },
        transition: function (className) { return className + "{transition:" + theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration + ";transition-property:transform, margin, visibility;}"; }
    };
};
var LyDrawerContent = /** @class */ (function () {
    function LyDrawerContent(_renderer, _el, drawerContainer) {
        this._renderer = _renderer;
        this._el = _el;
        this._renderer.addClass(this._el.nativeElement, drawerContainer.classes.drawerContent);
    }
    LyDrawerContent.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LyDrawerContent.и = 'LyDrawerContent';
    LyDrawerContent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return LyDrawerContainer; }),] }] }
    ]; };
    LyDrawerContent = __decorate([
        Directive({
            selector: 'ly-drawer-content'
        }),
        __param(2, Inject(forwardRef(function () { return LyDrawerContainer; })))
    ], LyDrawerContent);
    return LyDrawerContent;
}());
var LyDrawerContainer = /** @class */ (function () {
    function LyDrawerContainer(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this._openDrawers = 0;
        this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
    }
    LyDrawerContainer.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LyDrawerContainer.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        ContentChild(forwardRef(function () { return LyDrawerContent; }), { static: true })
    ], LyDrawerContainer.prototype, "_drawerContent", void 0);
    LyDrawerContainer = __decorate([
        Directive({
            selector: 'ly-drawer-container'
        })
    ], LyDrawerContainer);
    return LyDrawerContainer;
}());
var LyDrawer = /** @class */ (function () {
    function LyDrawer(_theme, _styleRenderer, _renderer, _el, _drawerContainer, _vcr, _winResize, _cd, _zone) {
        this._theme = _theme;
        this._styleRenderer = _styleRenderer;
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
    LyDrawer_1 = LyDrawer;
    Object.defineProperty(LyDrawer.prototype, "width", {
        set: function (_val) {
            console.log(LyDrawer_1.и, this._el.nativeElement);
            throw new Error(LyDrawer_1.и + ": [width] is deprecated instead use [drawerWidth].");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDrawer.prototype, "height", {
        set: function (_val) {
            console.log(LyDrawer_1.и, this._el.nativeElement);
            throw new Error(LyDrawer_1.и + ": [height] is deprecated instead use [drawerHeight].");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDrawer.prototype, "opened", {
        get: function () {
            return this._opened;
        },
        set: function (val) {
            if (val !== this.opened) {
                this._opened = toBoolean(val);
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
            this._hasBackdrop = val == null ? null : toBoolean(val);
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
                this[0x1] = this._styleRenderer.add(LyDrawer_1.и + "--position-" + val, function (theme) { return function (className) { return className + "{" + theme.getDirection(val) + ":0;}"; }; }, STYLE_PRIORITY, this[0x1]);
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
        var __width = this.drawerWidth;
        var __height = this.drawerHeight;
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
                        eachMedia(__width, function (val, media) {
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
                var dirXSign_1 = pos === DirPosition.left ? '-' : '+';
                eachMedia(__width, function (val, media) {
                    if ((__mode === 'over' || __forceModeOverOpened) && (val === 0 || val === 'over')) {
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
                eachMedia(__height, function (val, media) {
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
                eachMedia(__spacingAbove, function (val, media) {
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
                eachMedia(__spacingBelow, function (val, media) {
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
            else if (__position === YPosition.above || __position === YPosition.below) {
                eachMedia(__spacingBefore, function (val, media) {
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
                eachMedia(__spacingAfter, function (val, media) {
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
        if (Platform.isBrowser) {
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
    var LyDrawer_1;
    LyDrawer.и = 'LyDrawer';
    LyDrawer.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: StyleRenderer },
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyDrawerContainer },
        { type: ViewContainerRef },
        { type: WinResize },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    __decorate([
        ViewChild(TemplateRef, { static: false })
    ], LyDrawer.prototype, "_backdrop", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "width", null);
    __decorate([
        Input()
    ], LyDrawer.prototype, "height", null);
    __decorate([
        Input()
    ], LyDrawer.prototype, "opened", null);
    __decorate([
        Input()
    ], LyDrawer.prototype, "mode", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "spacingAbove", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "spacingBelow", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "spacingBefore", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "spacingAfter", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "drawerWidth", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "drawerHeight", void 0);
    __decorate([
        Input()
    ], LyDrawer.prototype, "hasBackdrop", null);
    __decorate([
        Input()
    ], LyDrawer.prototype, "position", null);
    LyDrawer = LyDrawer_1 = __decorate([
        Component({
            selector: 'ly-drawer',
            template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'lyDrawer',
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
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
        NgModule({
            imports: [
                CommonModule,
                LyCommonModule
            ],
            exports: [
                LyDrawer,
                LyDrawerContainer,
                LyDrawerContent,
                LyCommonModule
            ],
            declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
        })
    ], LyDrawerModule);
    return LyDrawerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyDrawer, LyDrawerContainer, LyDrawerContent, LyDrawerModule, STYLES };
//# sourceMappingURL=alyle-ui-drawer.js.map
