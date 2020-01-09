import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, EmbeddedViewRef, forwardRef, Input, OnChanges, Renderer2, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone, Inject } from '@angular/core';
import { eachMedia, LyTheme2, ThemeVariables, toBoolean, LY_COMMON_STYLES, Placement, XPosition, DirPosition, YPosition, WinResize, Platform, st2c, StyleRenderer, LyHostClass, ThemeRef, StyleCollection, StyleTemplate, LyClasses } from '@alyle/ui';
var DEFAULT_MODE = 'side';
var DEFAULT_WIDTH = '230px';
var DEFAULT_VALUE = '';
var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = XPosition.before;
export var STYLES = function (theme, ref) {
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
    LyDrawerContent = tslib_1.__decorate([
        Directive({
            selector: 'ly-drawer-content'
        }),
        tslib_1.__param(2, Inject(forwardRef(function () { return LyDrawerContainer; })))
    ], LyDrawerContent);
    return LyDrawerContent;
}());
export { LyDrawerContent };
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
    tslib_1.__decorate([
        ContentChild(forwardRef(function () { return LyDrawerContent; }), { static: true })
    ], LyDrawerContainer.prototype, "_drawerContent", void 0);
    LyDrawerContainer = tslib_1.__decorate([
        Directive({
            selector: 'ly-drawer-container'
        })
    ], LyDrawerContainer);
    return LyDrawerContainer;
}());
export { LyDrawerContainer };
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
    tslib_1.__decorate([
        ViewChild(TemplateRef, { static: false })
    ], LyDrawer.prototype, "_backdrop", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "opened", null);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "mode", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "spacingAbove", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "spacingBelow", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "spacingBefore", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "spacingAfter", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "width", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "height", void 0);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "hasBackdrop", null);
    tslib_1.__decorate([
        Input()
    ], LyDrawer.prototype, "position", null);
    LyDrawer = LyDrawer_1 = tslib_1.__decorate([
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
export { LyDrawer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sTUFBTSxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixhQUFhLEVBQ2IsV0FBVyxFQUNYLFFBQVEsRUFDUixlQUFlLEVBQ2YsYUFBYSxFQUNiLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWUvQixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDNUIsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzlCLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFMUMsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBeUMsRUFBRSxHQUFhO0lBQzdFLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsT0FBTztRQUNMLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN4QixTQUFTLEVBQUUsY0FBYyxHQUFHLEdB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S0FBSyxFQUFFO21EQUFnQztJQUUvQjtRQUFSLEtBQUssRUFBRTtrREFBK0I7SUFFOUI7UUFBUixLQUFLLEVBQUU7MkNBQXdCO0lBRXZCO1FBQVIsS0FBSyxFQUFFOzRDQUF5QjtJQUdqQztRQURDLEtBQUssRUFBRTsrQ0FHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzRDQU9QO0lBL0RVLFFBQVE7UUFWcEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIseUlBQTRCO1lBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxRQUFRLENBNFVwQjtJQUFELGVBQUM7Q0FBQSxBQTVVRCxJQTRVQztTQTVVWSxRQUFRO0FBOFVyQjs7R0FFRztBQUNILFNBQVMsSUFBSSxDQUFDLEdBQW9CO0lBQ2hDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQVUsR0FBRyxPQUFJLENBQUM7S0FDbkI7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDO0tBQ1o7QUFDSCxDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FBQyxNQUFjLEVBQUUsR0FBVyxFQUFFLElBQVU7SUFDM0UsT0FBTyxHQUFHLElBQUksTUFBTTtRQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ1pvbmUsXG4gIEluamVjdFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZWFjaE1lZGlhLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgUGxhY2VtZW50LFxuICBYUG9zaXRpb24sXG4gIERpclBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIFdpblJlc2l6ZSxcbiAgUGxhdGZvcm0sXG4gIHN0MmMsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIEx5SG9zdENsYXNzLFxuICBUaGVtZVJlZixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBTdHlsZVRlbXBsYXRlLFxuICBMeUNsYXNzZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlEcmF3ZXJUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIEJ1dHRvbiBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlEcmF3ZXJWYXJpYWJsZXMge1xuICBkcmF3ZXI/OiBMeURyYXdlclRoZW1lO1xufVxuXG5leHBvcnQgdHlwZSBMeURyYXdlclBvc2l0aW9uID0gUGxhY2VtZW50O1xuZXhwb3J0IHR5cGUgTHlEcmF3ZXJNb2RlID0gJ3NpZGUnIHwgJ292ZXInO1xuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9XSURUSCA9ICcyMzBweCc7XG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9IFhQb3NpdGlvbi5iZWZvcmU7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlEcmF3ZXJWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgX18gPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlEcmF3ZXJDb250ZW50LtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFkgKyAxLjksXG4gICAgcm9vdDogKCkgPT4gKHRoZW1lLmRyYXdlclxuICAgICAgJiYgdGhlbWUuZHJhd2VyLnJvb3RcbiAgICAgICYmICh0aGVtZS5kcmF3ZXIucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICA/IHRoZW1lLmRyYXdlci5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKF9fKSkuY3NzXG4gICAgICAgIDogdGhlbWUuZHJhd2VyLnJvb3QoX18pKVxuICAgICksXG4gICAgZHJhd2VyQ29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7fWAsXG4gICAgZHJhd2VyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDt6LWluZGV4OiR7dGhlbWUuekluZGV4LmRyYXdlcn07b3ZlcmZsb3c6YXV0bzt2aXNpYmlsaXR5OmhpZGRlbjt9YCxcbiAgICBkcmF3ZXJDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jazt9YCxcbiAgICBkcmF3ZXJPcGVuZWQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KTt2aXNpYmlsaXR5OnZpc2libGU7fWAsXG4gICAgZHJhd2VyQ2xvc2VkOiBudWxsLFxuICAgIGJhY2tkcm9wOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0MmMoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17YmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmRyYXdlci5iYWNrZHJvcH07fWAsXG4gICAgdHJhbnNpdGlvbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3RyYW5zaXRpb246JHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgbWFyZ2luLCB2aXNpYmlsaXR5O31gXG4gIH07XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250ZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5RHJhd2VyQ29udGVudCc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGFpbmVyKSkgZHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIChkcmF3ZXJDb250YWluZXIgYXMgTHlEcmF3ZXJDb250YWluZXIpLmNsYXNzZXMuZHJhd2VyQ29udGVudCk7XG4gIH1cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGFpbmVyIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgX29wZW5EcmF3ZXJzID0gMDtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCksIHsgc3RhdGljOiB0cnVlIH0pIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeURyYXdlcic7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzO1xuICBwcml2YXRlIF9mb3JjZU1vZGVPdmVyT3BlbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9mcm9tVG9nZ2xlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZpZXdSZWY/OiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfaXNBbmltYXRpb246IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc0JhY2tkcm9wOiBib29sZWFuIHwgbnVsbDtcblxuICBwcml2YXRlIF9wb3NpdGlvbjogTHlEcmF3ZXJQb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG5cbiAgcHJpdmF0ZSBfZHJhd2VyUm9vdENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNsYXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDb250ZW50Q2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYlJlc2l6ZVN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9pc09wZW46IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIF9iYWNrZHJvcDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIHRoaXMuX2lzT3BlbiA9IHRoaXMuX29wZW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG4gIEBJbnB1dCgpIG1vZGU6IEx5RHJhd2VyTW9kZSA9IERFRkFVTFRfTU9ERTtcblxuICBASW5wdXQoKSBzcGFjaW5nQWJvdmU6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nQmVsb3c6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nQmVmb3JlOiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgc3BhY2luZ0FmdGVyOiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgaGFzQmFja2Ryb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0JhY2tkcm9wO1xuICB9XG4gIHNldCBoYXNCYWNrZHJvcCh2YWw6IGFueSkge1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdmFsID09IG51bGwgPyBudWxsIDogdG9Cb29sZWFuKHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBMeURyYXdlclBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzWzB4MV0gPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChgJHtMeURyYXdlci7QuH0tLXBvc2l0aW9uLSR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17JHt0aGVtZS5nZXREaXJlY3Rpb24odmFsIGFzIGFueSl9OjA7fWAsIFNUWUxFX1BSSU9SSVRZLCB0aGlzWzB4MV0pO1xuICAgIH1cbiAgfVxuICBnZXQgcG9zaXRpb24oKTogTHlEcmF3ZXJQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG4gIFsweDFdOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyLFxuICAgIHByaXZhdGUgX3ZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF93aW5SZXNpemU6IFdpblJlc2l6ZSxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlQmFja2Ryb3AoKTtcbiAgICB0aGlzLl91cGRhdGVBbmltYXRpb25zKCk7XG5cbiAgICBjb25zdCBfX21vZGUgPSB0aGlzLm1vZGU7XG4gICAgY29uc3QgX19mb3JjZU1vZGVPdmVyT3BlbmVkID0gdGhpcy5fZm9yY2VNb2RlT3Zlck9wZW5lZDtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuXG4gICAgY29uc3QgX19zcGFjaW5nQWJvdmUgPSB0aGlzLnNwYWNpbmdBYm92ZTtcbiAgICBjb25zdCBfX3NwYWNpbmdCZWxvdyA9IHRoaXMuc3BhY2luZ0JlbG93O1xuICAgIGNvbnN0IF9fc3BhY2luZ0JlZm9yZSA9IHRoaXMuc3BhY2luZ0JlZm9yZTtcbiAgICBjb25zdCBfX3NwYWNpbmdBZnRlciA9IHRoaXMuc3BhY2luZ0FmdGVyO1xuXG4gICAgaWYgKF9fd2lkdGggJiYgX19oZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgd2lkdGhcXGAgYW5kIFxcYGhlaWdodFxcYCBhcmUgZGVmaW5lZCwgeW91IGNhbiBvbmx5IGRlZmluZSBvbmVgKTtcbiAgICB9IGVsc2UgaWYgKCFfX3dpZHRoKSB7XG4gICAgICBpZiAoIV9faGVpZ2h0KSB7XG4gICAgICAgIC8qKiBzZXQgZGVmYXVsdCBfX3dpZHRoIGlmIGB3aWR0aGAgJiBgaGVpZ2h0YCBpcyBgdW5kZWZpbmVkYCAqL1xuICAgICAgICBfX3dpZHRoID0gREVGQVVMVF9XSURUSDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuX2lzT3BlbiAmJiBfX29wZW5lZCkgfHwgKHRoaXMuX2lzT3BlbikgfHwgX19mb3JjZU1vZGVPdmVyT3BlbmVkKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlcyBmb3IgbW9kZSBzaWRlICovXG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIC8vIHN0eWxlcyBmb3IgPGx5LWRyYXdlci1jb250ZW50PlxuICAgICAgaWYgKF9fbW9kZSA9PT0gJ3NpZGUnKSB7XG4gICAgICAgIGNvbnN0IG5ld0tleURyYXdlckNvbnRlbnQgPSBgbHktZHJhd2VyLWNvbnRlbnQtLS0tOiR7XG4gICAgICAgICAgX193aWR0aCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVmFsID0gYG1hcmdpbi0ke19fcG9zaXRpb259YDtcbiAgICAgICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB2YWwgPT09ICdvdmVyJyA/ICcwcHgnIDogdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKGRyYXdlckNvbnRlbnRTdHlsZXMsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50W3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyQ29udGVudFN0eWxlc1twb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRyYXdlckNvbnRlbnRTdHlsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJhd2VyQ29udGVudENsYXNzKSB7XG4gICAgICAgIC8qKiByZW1vdmUgc3R5bGVzIGZvciA8bHktZHJhd2VyLWNvbnRlbnQ+ICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZHJhd2VyQ29udGVudENsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2RyYXdlckNsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIGRlZmF1bHQgc3R5bGVzICovXG4gICAgdGhpcy5fZHJhd2VyUm9vdENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktZHJhd2VyLXJvb3Q6JHtfX3dpZHRofcK3JHtfX2hlaWdodH3CtyR7X19zcGFjaW5nQWJvdmV9wrcke19fc3BhY2luZ0JlbG93fcK3JHtfX3NwYWNpbmdCZWZvcmV9wrcke19fc3BhY2luZ0FmdGVyfcK3JHtfX3Bvc2l0aW9ufcK3JHtfX21vZGV9wrcke19fZm9yY2VNb2RlT3Zlck9wZW5lZH1gLFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzRHJhd2VyUm9vdDoge1xuICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICAgICAgdG9wPzogc3RyaW5nXG4gICAgICAgIGJvdHRvbT86IHN0cmluZ1xuICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICAgIGJlZm9yZT86IHN0cmluZ1xuICAgICAgICBhZnRlcj86IHN0cmluZ1xuICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgIH0gPSB7IH07XG4gICAgICBjb25zdCBwb3MgPSB0aGVtZS5nZXREaXJlY3Rpb24oX19wb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgY29uc3QgcG9zaXRpb25TaWduID0gX19wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICctJyA6ICcrJztcbiAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgIGNvbnN0IGRpclhTaWduID0gcG9zID09PSBEaXJQb3NpdGlvbi5sZWZ0ID8gJy0nIDogJysnO1xuICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEpID0+IHtcbiAgICAgICAgICBpZiAoKF9fbW9kZSA9PT0gJ292ZXInIHx8IF9fZm9yY2VNb2RlT3Zlck9wZW5lZCkgJiYgKHZhbCA9PT0gJzAnIHx8IHZhbCA9PT0gJ292ZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSB2YWwgPT09ICdvdmVyJyA/ICcwcHgnIDogdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSBuZXdWYWw7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGB0cmFuc2xhdGVYKCR7ZGlyWFNpZ24gKyBuZXdWYWx9KWA7XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX2hlaWdodCkge1xuICAgICAgICBlYWNoTWVkaWEoX19oZWlnaHQsICh2YWwsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVIZWlnaHQgPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWSA9IGB0cmFuc2xhdGVZKCR7cG9zaXRpb25TaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ2JlZm9yZScgfHwgX19wb3NpdGlvbiA9PT0gJ2FmdGVyJykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQWJvdmUsICh2YWwsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nVG9wID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCZWxvdywgKHZhbCwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdCb3R0b20gPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX19wb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IF9fcG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQmVmb3JlLCAodmFsLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0JlZm9yZSA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYmVmb3JlID0gbmV3U3R5bGVTcGFjaW5nQmVmb3JlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJlZm9yZSA9IG5ld1N0eWxlU3BhY2luZ0JlZm9yZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQWZ0ZXIsICh2YWwsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQWZ0ZXIgPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmFmdGVyID0gbmV3U3R5bGVTcGFjaW5nQWZ0ZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYWZ0ZXIgPSBuZXdTdHlsZVNwYWNpbmdBZnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViID0gdGhpcy5fd2luUmVzaXplLnJlc2l6ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3RhYlJlc2l6ZVN1Yikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS53aWR0aDtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPT09ICcwcHgnKSB7XG4gICAgICB0aGlzLl9mb3JjZU1vZGVPdmVyT3BlbmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyT3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXJPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdGhpcy5vcGVuZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSAhdGhpcy5faXNPcGVuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb250ZW50SGFzTWFyZ2luKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9nZXRIb3N0RWxlbWVudCgpIGFzIEhUTUxFbGVtZW50O1xuICAgIHJldHVybiAoY29udGVudC5vZmZzZXRXaWR0aCA9PT0gY29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhY2tkcm9wKCkge1xuICAgIGlmICgoKHRoaXMuX2lzT3BlbiAmJiB0aGlzLm9wZW5lZCkgfHwgdGhpcy5faXNPcGVuKSAmJlxuICAgICAgKHRoaXMuaGFzQmFja2Ryb3AgIT0gbnVsbFxuICAgICAgICA/IHRoaXMuaGFzQmFja2Ryb3BcbiAgICAgICAgOiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgKHRoaXMuX2ZvcmNlTW9kZU92ZXJPcGVuZWQgJiYgdGhpcy5fY29udGVudEhhc01hcmdpbigpKSkpKSB7XG5cbiAgICAgIC8vIGNyZWF0ZSBvbmx5IGlmIGlzIG5lY2Vzc2FyeVxuICAgICAgaWYgKCF0aGlzLl92aWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzKys7XG4gICAgICAgICAgdGhpcy5fdmlld1JlZiA9IHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICh0aGlzLl92aWV3UmVmLnJvb3ROb2Rlc1swXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuekluZGV4ID0gYCR7dGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vyc31gO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vycy0tO1xuICAgICAgICB0aGlzLl92Y3IuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fdmlld1JlZiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyT3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5fZm9yY2VNb2RlT3Zlck9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHRoaXMub3BlbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbmltYXRpb25zKCkge1xuICAgIGlmICh0aGlzLl9mcm9tVG9nZ2xlICYmICF0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZnJvbVRvZ2dsZSAmJiB0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGNvbnZlcnQgbnVtYmVyIHRvIHB4XG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZywgX25ldz86IGFueSkge1xuICByZXR1cm4ga2V5IGluIG9iamVjdFxuICA/IG9iamVjdFtrZXldXG4gIDogb2JqZWN0W2tleV0gPSBfbmV3IHx8IHt9O1xufVxuIl19