/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES, XPosition, DirPosition, YPosition } from '@alyle/ui';
/** @type {?} */
var DEFAULT_MODE = 'side';
/** @type {?} */
var DEFAULT_WIDTH = '230px';
/** @type {?} */
var DEFAULT_VALUE = '';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = XPosition.before;
/** @type {?} */
var styles = function (theme) { return ({
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
    backdrop: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { backgroundColor: theme.drawer.backdrop }),
    transition: {
        transition: theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration,
        transitionProperty: 'transform, margin, visibility'
    }
}); };
var ɵ0 = styles;
var LyDrawerContainer = /** @class */ (function () {
    function LyDrawerContainer(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY + 1.9);
        this._openDrawers = 0;
        this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
    }
    LyDrawerContainer.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-drawer-container'
                },] }
    ];
    /** @nocollapse */
    LyDrawerContainer.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyDrawerContainer.propDecorators = {
        _drawerContent: [{ type: ContentChild, args: [forwardRef(function () { return LyDrawerContent; }),] }]
    };
    return LyDrawerContainer;
}());
export { LyDrawerContainer };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyDrawerContainer.prototype.classes;
    /** @type {?} */
    LyDrawerContainer.prototype._openDrawers;
    /** @type {?} */
    LyDrawerContainer.prototype._drawerContent;
    /** @type {?} */
    LyDrawerContainer.prototype._theme;
    /** @type {?} */
    LyDrawerContainer.prototype._renderer;
    /** @type {?} */
    LyDrawerContainer.prototype._el;
}
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
        { type: Directive, args: [{
                    selector: 'ly-drawer-content'
                },] }
    ];
    /** @nocollapse */
    LyDrawerContent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyDrawerContainer }
    ]; };
    return LyDrawerContent;
}());
export { LyDrawerContent };
if (false) {
    /** @type {?} */
    LyDrawerContent.prototype._renderer;
    /** @type {?} */
    LyDrawerContent.prototype._el;
}
var LyDrawer = /** @class */ (function () {
    function LyDrawer(_theme, _renderer, _el, _drawerContainer, _vcr) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this._drawerContainer = _drawerContainer;
        this._vcr = _vcr;
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
         */
        function () {
            return this._opened;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.opened) {
                this._opened = toBoolean(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDrawer.prototype, "hasBackdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasBackdrop;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hasBackdrop = val == null ? null : toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDrawer.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.position) {
                if (val === 'start' || val === 'end') {
                    console.warn("LyDrawer: position " + val + " is deprecated, use `before` or `after` instead");
                }
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
        /** @type {?} */
        var __spacingAbove = this.spacingAbove;
        /** @type {?} */
        var __spacingBelow = this.spacingBelow;
        /** @type {?} */
        var __spacingBefore = this.spacingBefore;
        /** @type {?} */
        var __spacingAfter = this.spacingAfter;
        // const __spacingRight = this.spacingRight;
        // const __spacingLeft = this.spacingLeft;
        if (__spacingTop || __spacingBottom) {
            console.warn("LyDrawer: `spacingTop` and spacingBottom is deprecated use `spacingAbove` or `spacingBelow` instead");
        }
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
                    eachMedia((/** @type {?} */ (__opened)), function () { });
                    if (__width) {
                        eachMedia(__width, function (val, media, isMedia) {
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
        this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingAbove + "\u00B7" + __spacingBelow + "\u00B7" + __spacingBefore + "\u00B7" + __spacingAfter + "\u00B7" + __position + "\u00B7" + __mode + "\u00B7" + __forceModeOver, function (theme) {
            /** @type {?} */
            var stylesDrawerRoot = {};
            /** @type {?} */
            var pos = theme.getDirection((/** @type {?} */ (__position)));
            /** @type {?} */
            var positionSign = __position === 'above' ? '-' : '+';
            if (__width) {
                /** @type {?} */
                var dirXSign_1 = pos === DirPosition.left ? '-' : '+';
                eachMedia(__width, function (val, media, isMedia) {
                    if ((__mode === 'over' || __forceModeOver) && val === '0') {
                        return;
                    }
                    /** @type {?} */
                    var newStyleWidth = toPx(val);
                    /** @type {?} */
                    var newTranslateX = "translateX(" + (dirXSign_1 + toPx(val)) + ")";
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
                eachMedia(__height, function (val, media, isMedia) {
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
            if (__position === 'before' || __position === 'after') {
                eachMedia(__spacingAbove, function (val, media, isMedia) {
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
                eachMedia(__spacingBelow, function (val, media, isMedia) {
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
            else if (__position === YPosition.above || __position === YPosition.below) {
                eachMedia(__spacingBefore, function (val, media, isMedia) {
                    /** @type {?} */
                    var newStyleSpacingBefore = toPx(val || 0);
                    if (isMedia) {
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
                eachMedia(__spacingAfter, function (val, media, isMedia) {
                    /** @type {?} */
                    var newStyleSpacingAfter = toPx(val || 0);
                    if (isMedia) {
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
        if (this.opened && (this.hasBackdrop != null ? this.hasBackdrop : (this.mode === 'over' || this._forceModeOver))) {
            if (!this._viewRef) {
                this._drawerContainer._openDrawers++;
                this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
                ((/** @type {?} */ (this._viewRef.rootNodes[0]))).style.zIndex = "" + this._drawerContainer._openDrawers;
            }
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
        { type: Component, args: [{
                    selector: 'ly-drawer',
                    template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'lyDrawer'
                }] }
    ];
    /** @nocollapse */
    LyDrawer.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyDrawerContainer },
        { type: ViewContainerRef }
    ]; };
    LyDrawer.propDecorators = {
        _backdrop: [{ type: ViewChild, args: [TemplateRef,] }],
        opened: [{ type: Input }],
        mode: [{ type: Input }],
        spacingAbove: [{ type: Input }],
        spacingTop: [{ type: Input }],
        spacingBelow: [{ type: Input }],
        spacingBottom: [{ type: Input }],
        spacingBefore: [{ type: Input }],
        spacingAfter: [{ type: Input }],
        spacingRight: [{ type: Input }],
        spacingLeft: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        hasBackdrop: [{ type: Input }],
        position: [{ type: Input }]
    };
    return LyDrawer;
}());
export { LyDrawer };
if (false) {
    /**
     * Styles
     * \@docs-private
     * @type {?}
     */
    LyDrawer.prototype.classes;
    /** @type {?} */
    LyDrawer.prototype._forceModeOver;
    /** @type {?} */
    LyDrawer.prototype._fromToggle;
    /** @type {?} */
    LyDrawer.prototype._opened;
    /** @type {?} */
    LyDrawer.prototype._viewRef;
    /** @type {?} */
    LyDrawer.prototype._isAnimation;
    /** @type {?} */
    LyDrawer.prototype._hasBackdrop;
    /** @type {?} */
    LyDrawer.prototype._position;
    /** @type {?} */
    LyDrawer.prototype._positionClass;
    /** @type {?} */
    LyDrawer.prototype._drawerRootClass;
    /** @type {?} */
    LyDrawer.prototype._drawerClass;
    /** @type {?} */
    LyDrawer.prototype._drawerContentClass;
    /**
     * @ignore
     * @type {?}
     */
    LyDrawer.prototype._backdrop;
    /** @type {?} */
    LyDrawer.prototype.mode;
    /** @type {?} */
    LyDrawer.prototype.spacingAbove;
    /**
     * \@deprecated, use `spacingAbove` instead
     * @type {?}
     */
    LyDrawer.prototype.spacingTop;
    /** @type {?} */
    LyDrawer.prototype.spacingBelow;
    /**
     * \@deprecated, use `spacingBelow` instead
     * @type {?}
     */
    LyDrawer.prototype.spacingBottom;
    /** @type {?} */
    LyDrawer.prototype.spacingBefore;
    /** @type {?} */
    LyDrawer.prototype.spacingAfter;
    /** @type {?} */
    LyDrawer.prototype.spacingRight;
    /** @type {?} */
    LyDrawer.prototype.spacingLeft;
    /** @type {?} */
    LyDrawer.prototype.width;
    /** @type {?} */
    LyDrawer.prototype.height;
    /** @type {?} */
    LyDrawer.prototype._theme;
    /** @type {?} */
    LyDrawer.prototype._renderer;
    /** @type {?} */
    LyDrawer.prototype._el;
    /** @type {?} */
    LyDrawer.prototype._drawerContainer;
    /** @type {?} */
    LyDrawer.prototype._vcr;
}
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUVWLFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBRVIsU0FBUyxFQUNULGdCQUFnQixFQUVoQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDUixNQUFNLFdBQVcsQ0FBQzs7SUFFZixZQUFZLEdBQUcsTUFBTTs7SUFDckIsYUFBYSxHQUFHLE9BQU87O0lBQ3ZCLGFBQWEsR0FBRyxFQUFFOztJQUNsQixjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixnQkFBZ0IsR0FBRyxTQUFTLENBQUMsTUFBTTs7SUFFbkMsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsNEJBQTRCLEVBQUUsT0FBTztLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDM0IsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsVUFBVSxFQUFFLFNBQVM7S0FDdEI7SUFD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QUV2QyxpQ0FBd0M7O0lBRXhDLGlDQUF3Qzs7SUFFeEMsZ0NBQXVDOztJQUV2QyxnQ0FBdUM7O0lBQ3ZDLCtCQUFzQzs7SUFFdEMseUJBQWdDOztJQUNoQywwQkFBaUM7O0lBNkIvQiwwQkFBd0I7O0lBQ3hCLDZCQUE0Qjs7SUFDNUIsdUJBQXVCOztJQUN2QixvQ0FBMkM7O0lBQzNDLHdCQUE4Qjs7Ozs7OztBQStPbEMsU0FBUyxJQUFJLENBQUMsR0FBb0I7SUFDaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsT0FBVSxHQUFHLE9BQUksQ0FBQztLQUNuQjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUM7Ozs7Ozs7QUFFRCxTQUFTLDRCQUE0QixDQUFDLE1BQWMsRUFBRSxHQUFXLEVBQUUsSUFBVTtJQUMzRSxPQUFPLEdBQUcsSUFBSSxNQUFNO1FBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGVhY2hNZWRpYSxcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFBsYWNlbWVudCxcbiAgWFBvc2l0aW9uLFxuICBEaXJQb3NpdGlvbixcbiAgWVBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9XSURUSCA9ICcyMzBweCc7XG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9IFhQb3NpdGlvbi5iZWZvcmU7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRyYXdlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCdcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICBkcmF3ZXJPcGVuZWQ6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpJyxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgfSxcbiAgYmFja2Ryb3A6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kcmF3ZXIuYmFja2Ryb3BcbiAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259YCxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd0cmFuc2Zvcm0sIG1hcmdpbiwgdmlzaWJpbGl0eSdcbiAgfVxufSk7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ3RvcCcgfCAnYm90dG9tJyB8IFBsYWNlbWVudDtcbnR5cGUgbW9kZSA9ICdzaWRlJyB8ICdvdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZICsgMS45KTtcbiAgX29wZW5EcmF3ZXJzID0gMDtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIGRyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyQ29udGVudCk7XG4gIH1cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmF3ZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzO1xuICBwcml2YXRlIF9mb3JjZU1vZGVPdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF9mcm9tVG9nZ2xlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9pc0FuaW1hdGlvbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A6IGJvb2xlYW4gfCBudWxsO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2JhY2tkcm9wOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZSA9IERFRkFVTFRfTU9ERTtcblxuICBASW5wdXQoKSBzcGFjaW5nQWJvdmU6IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYHNwYWNpbmdBYm92ZWAgaW5zdGVhZCAqL1xuICBASW5wdXQoKSBzcGFjaW5nVG9wOiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgc3BhY2luZ0JlbG93OiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKiBAZGVwcmVjYXRlZCwgdXNlIGBzcGFjaW5nQmVsb3dgIGluc3RlYWQgKi9cbiAgQElucHV0KCkgc3BhY2luZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdCZWZvcmU6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nQWZ0ZXI6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ0xlZnQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgaGFzQmFja2Ryb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0JhY2tkcm9wO1xuICB9XG4gIHNldCBoYXNCYWNrZHJvcCh2YWw6IGFueSkge1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdmFsID09IG51bGwgPyBudWxsIDogdG9Cb29sZWFuKHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGlmICh2YWwgPT09ICdzdGFydCcgfHwgdmFsID09PSAnZW5kJykge1xuICAgICAgICBjb25zb2xlLndhcm4oYEx5RHJhd2VyOiBwb3NpdGlvbiAke3ZhbH0gaXMgZGVwcmVjYXRlZCwgdXNlIFxcYGJlZm9yZVxcYCBvciBcXGBhZnRlclxcYCBpbnN0ZWFkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBkcmF3ZXIucG9zaXRpb246JHt2YWx9YCxcbiAgICAgIC8vIHRoZSBzdHlsZSBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uIHNvIHRoYXQgaXQgY2FuIGJlIGNoYW5nZWQgZHluYW1pY2FsbHlcbiAgICAgICgpID0+ICh7XG4gICAgICAgIFt2YWxdOiAwXG4gICAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgcG9zaXRpb24oKTogcG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBfZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3VwZGF0ZUJhY2tkcm9wKCk7XG4gICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9ucygpO1xuICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyICYmICF0aGlzLl9mcm9tVG9nZ2xlKSB7XG4gICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICB9XG4gICAgY29uc3QgX19tb2RlID0gdGhpcy5tb2RlO1xuICAgIGNvbnN0IF9fZm9yY2VNb2RlT3ZlciA9IHRoaXMuX2ZvcmNlTW9kZU92ZXI7XG4gICAgY29uc3QgX19vcGVuZWQgPSB0aGlzLm9wZW5lZDtcbiAgICBsZXQgX193aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgX19oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCBfX3Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCBfX3NwYWNpbmdUb3AgPSB0aGlzLnNwYWNpbmdUb3A7XG4gICAgY29uc3QgX19zcGFjaW5nQm90dG9tID0gdGhpcy5zcGFjaW5nQm90dG9tO1xuXG4gICAgY29uc3QgX19zcGFjaW5nQWJvdmUgPSB0aGlzLnNwYWNpbmdBYm92ZTtcbiAgICBjb25zdCBfX3NwYWNpbmdCZWxvdyA9IHRoaXMuc3BhY2luZ0JlbG93O1xuICAgIGNvbnN0IF9fc3BhY2luZ0JlZm9yZSA9IHRoaXMuc3BhY2luZ0JlZm9yZTtcbiAgICBjb25zdCBfX3NwYWNpbmdBZnRlciA9IHRoaXMuc3BhY2luZ0FmdGVyO1xuICAgIC8vIGNvbnN0IF9fc3BhY2luZ1JpZ2h0ID0gdGhpcy5zcGFjaW5nUmlnaHQ7XG4gICAgLy8gY29uc3QgX19zcGFjaW5nTGVmdCA9IHRoaXMuc3BhY2luZ0xlZnQ7XG5cbiAgICBpZiAoX19zcGFjaW5nVG9wIHx8IF9fc3BhY2luZ0JvdHRvbSkge1xuICAgICAgY29uc29sZS53YXJuKGBMeURyYXdlcjogXFxgc3BhY2luZ1RvcFxcYCBhbmQgc3BhY2luZ0JvdHRvbSBpcyBkZXByZWNhdGVkIHVzZSBcXGBzcGFjaW5nQWJvdmVcXGAgb3IgXFxgc3BhY2luZ0JlbG93XFxgIGluc3RlYWRgKTtcbiAgICB9XG5cbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgLyoqIHNldCBkZWZhdWx0IF9fd2lkdGggaWYgYHdpZHRoYCAmIGBoZWlnaHRgIGlzIGB1bmRlZmluZWRgICovXG4gICAgICAgIF9fd2lkdGggPSBERUZBVUxUX1dJRFRIO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfX29wZW5lZCkge1xuICAgICAgLyoqIGNyZWF0ZSBzdHlsZXMgZm9yIG1vZGUgc2lkZSAqL1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyT3BlbmVkLCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICBpZiAoX19tb2RlID09PSAnc2lkZScpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5RHJhd2VyQ29udGVudCA9IGBseS1kcmF3ZXItY29udGVudC0tLS06JHtcbiAgICAgICAgICBfX29wZW5lZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgIF9fd2lkdGggfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVmFsID0gYG1hcmdpbi0ke19fcG9zaXRpb259YDtcbiAgICAgICAgICAvLyBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgIC8vICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIHRoaXMuX2RyYXdlclJvb3RDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWRyYXdlci1yb290OiR7X193aWR0aH3CtyR7X19oZWlnaHR9wrcke19fc3BhY2luZ0Fib3ZlfcK3JHtfX3NwYWNpbmdCZWxvd33CtyR7X19zcGFjaW5nQmVmb3JlfcK3JHtfX3NwYWNpbmdBZnRlcn3CtyR7X19wb3NpdGlvbn3CtyR7X19tb2RlfcK3JHtfX2ZvcmNlTW9kZU92ZXJ9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc0RyYXdlclJvb3Q6IHtcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nXG4gICAgICAgIHRvcD86IHN0cmluZ1xuICAgICAgICBib3R0b20/OiBzdHJpbmdcbiAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICBiZWZvcmU/OiBzdHJpbmdcbiAgICAgICAgYWZ0ZXI/OiBzdHJpbmdcbiAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICB9ID0geyB9O1xuICAgICAgY29uc3QgcG9zID0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24gYXMgYW55KTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uU2lnbiA9IF9fcG9zaXRpb24gPT09ICdhYm92ZScgPyAnLScgOiAnKyc7XG4gICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICBjb25zdCBkaXJYU2lnbiA9IHBvcyA9PT0gRGlyUG9zaXRpb24ubGVmdCA/ICctJyA6ICcrJztcbiAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgaWYgKChfX21vZGUgPT09ICdvdmVyJyB8fCBfX2ZvcmNlTW9kZU92ZXIpICYmIHZhbCA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGB0cmFuc2xhdGVYKCR7ZGlyWFNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3Qud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZUhlaWdodCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVZID0gYHRyYW5zbGF0ZVkoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdiZWZvcmUnIHx8IF9fcG9zaXRpb24gPT09ICdhZnRlcicpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0Fib3ZlLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCZWxvdywgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdCb3R0b20gPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX3Bvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUgfHwgX19wb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCZWZvcmUsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQmVmb3JlID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJlZm9yZSA9IG5ld1N0eWxlU3BhY2luZ0JlZm9yZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5iZWZvcmUgPSBuZXdTdHlsZVNwYWNpbmdCZWZvcmU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0FmdGVyLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0FmdGVyID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmFmdGVyID0gbmV3U3R5bGVTcGFjaW5nQWZ0ZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYWZ0ZXIgPSBuZXdTdHlsZVNwYWNpbmdBZnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcmNlTW9kZU92ZXIoKSB7XG4gICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgKHRoaXMuaGFzQmFja2Ryb3AgIT0gbnVsbCA/IHRoaXMuaGFzQmFja2Ryb3AgOiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5fZm9yY2VNb2RlT3ZlcikpKSB7XG4gICAgICBpZiAoIXRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2VycysrO1xuICAgICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgICh0aGlzLl92aWV3UmVmLnJvb3ROb2Rlc1swXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuekluZGV4ID0gYCR7dGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vyc31gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vycy0tO1xuICAgICAgdGhpcy5fdmNyLmNsZWFyKCk7XG4gICAgICB0aGlzLl92aWV3UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbmltYXRpb25zKCkge1xuICAgIGlmICh0aGlzLl9mcm9tVG9nZ2xlICYmICF0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZnJvbVRvZ2dsZSAmJiB0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGNvbnZlcnQgbnVtYmVyIHRvIHB4XG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZywgX25ldz86IGFueSkge1xuICByZXR1cm4ga2V5IGluIG9iamVjdFxuICA/IG9iamVjdFtrZXldXG4gIDogb2JqZWN0W2tleV0gPSBfbmV3IHx8IHt9O1xufVxuIl19