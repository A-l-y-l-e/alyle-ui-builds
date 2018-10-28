/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES } from '@alyle/ui';
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
        transform: 'translate3d(0px, 0px, 0)',
        visibility: 'visible'
    },
    backdrop: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { backgroundColor: theme.drawer.backdrop }),
    transition: {
        transition: theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration,
        transitionProperty: 'transform, margin, visibility'
    }
}); };
var ɵ0 = styles;
/** @typedef {?} */
var position;
/** @typedef {?} */
var mode;
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
     * @ignore
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
                this._position = val;
                this._theme.addStyle("drawer.position:" + val, function (theme) {
                    var _a;
                    /** @type {?} */
                    var positionVal;
                    if (val === 'start' || val === 'end') {
                        positionVal = theme.getDirection(val);
                    }
                    else {
                        positionVal = val;
                    }
                    return _a = {},
                        _a[positionVal] = 0,
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
                    var positionVal = 'margin-';
                    if (__position === 'start' || __position === 'end') {
                        positionVal += theme.getDirection(__position);
                    }
                    else {
                        positionVal += __position;
                    }
                    eachMedia(/** @type {?} */ (__opened), function () { });
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
        // tslint:disable-next-line:max-line-length
        this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingTop + "\u00B7" + __spacingBottom + "\u00B7" + __spacingBottom + "\u00B7" + __position + "\u00B7" + __mode + "\u00B7" + __forceModeOver, function (theme) {
            /** @type {?} */
            var stylesDrawerRoot = {};
            /** @type {?} */
            var positionSign = __position === 'start' || __position === 'top' ? '-' : '+';
            if (__width) {
                eachMedia(__width, function (val, media, isMedia) {
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
            if (__position === 'start' || __position === 'end') {
                eachMedia(__spacingTop, function (val, media, isMedia) {
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
                eachMedia(__spacingBottom, function (val, media, isMedia) {
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
            (/** @type {?} */ (this._viewRef.rootNodes[0])).style.zIndex = "" + this._drawerContainer._openDrawers;
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
        spacingTop: [{ type: Input }],
        spacingBottom: [{ type: Input }],
        spacingStart: [{ type: Input }],
        spacingRight: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        position: [{ type: Input }]
    };
    return LyDrawer;
}());
export { LyDrawer };
if (false) {
    /**
     * Styles
     * @ignore
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
    LyDrawer.prototype.spacingTop;
    /** @type {?} */
    LyDrawer.prototype.spacingBottom;
    /** @type {?} */
    LyDrawer.prototype.spacingStart;
    /** @type {?} */
    LyDrawer.prototype.spacingRight;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUVWLFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBRVIsU0FBUyxFQUNULGdCQUFnQixFQUNmLE1BQU0sV0FBVyxDQUFDOztBQUVyQixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7O0FBQzVCLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQzs7QUFDOUIsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztBQUN6QixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0FBRWpDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsNEJBQTRCLEVBQUUsT0FBTztLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDM0IsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsVUFBVSxFQUFF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Szt5QkFDTCxLQUFLOzJCQUVMLEtBQUs7O21CQTdJUjs7U0FzR2EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNFFyQixTQUFTLElBQUksQ0FBQyxHQUFvQjtJQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFVLEdBQUcsT0FBSSxDQUFDO0tBQ25CO1NBQU07UUFDTCxPQUFPLEdBQUcsQ0FBQztLQUNaO0NBQ0Y7Ozs7Ozs7QUFFRCxTQUFTLDRCQUE0QixDQUFDLE1BQWMsRUFBRSxHQUFXLEVBQUUsSUFBVTtJQUMzRSxPQUFPLEdBQUcsSUFBSSxNQUFNO1FBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0NBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBlYWNoTWVkaWEsXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBMWV9DT01NT05fU1RZTEVTXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9XSURUSCA9ICcyMzBweCc7XG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdzdGFydCc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRyYXdlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCdcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICBkcmF3ZXJPcGVuZWQ6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMCknLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICB9LFxuICBiYWNrZHJvcDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRyYXdlci5iYWNrZHJvcFxuICB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn1gLFxuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3RyYW5zZm9ybSwgbWFyZ2luLCB2aXNpYmlsaXR5J1xuICB9XG59KTtcblxudHlwZSBwb3NpdGlvbiA9ICdzdGFydCcgfCAnZW5kJyB8ICd0b3AnIHwgJ2JvdHRvbSc7XG50eXBlIG1vZGUgPSAnc2lkZScgfCAnb3Zlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGFpbmVyIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSArIDEuOSk7XG4gIF9vcGVuRHJhd2VycyA9IDA7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBfZHJhd2VyQ29udGVudDogTHlEcmF3ZXJDb250ZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZHJhd2VyQ29udGFpbmVyKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGRyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlckNvbnRlbnQpO1xuICB9XG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJhd2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseURyYXdlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3NlcztcbiAgcHJpdmF0ZSBfZm9yY2VNb2RlT3ZlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZnJvbVRvZ2dsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfaXNBbmltYXRpb246IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfcG9zaXRpb246IHBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RyYXdlclJvb3RDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDb250ZW50Q2xhc3M6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfYmFja2Ryb3A6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCBvcGVuZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbiAgfVxuICBASW5wdXQoKSBtb2RlOiBtb2RlID0gREVGQVVMVF9NT0RFO1xuICBASW5wdXQoKSBzcGFjaW5nVG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdCb3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ1N0YXJ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdSaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGRyYXdlci5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBwb3NpdGlvblZhbDogc3RyaW5nO1xuICAgICAgICBpZiAodmFsID09PSAnc3RhcnQnIHx8IHZhbCA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IHRoZW1lLmdldERpcmVjdGlvbih2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3Bvc2l0aW9uVmFsXTogMFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lcixcbiAgICBwcml2YXRlIF92Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlQmFja2Ryb3AoKTtcbiAgICB0aGlzLl91cGRhdGVBbmltYXRpb25zKCk7XG4gICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgIXRoaXMuX2Zyb21Ub2dnbGUpIHtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpO1xuICAgIH1cbiAgICBjb25zdCBfX21vZGUgPSB0aGlzLm1vZGU7XG4gICAgY29uc3QgX19mb3JjZU1vZGVPdmVyID0gdGhpcy5fZm9yY2VNb2RlT3ZlcjtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IF9fc3BhY2luZ1RvcCA9IHRoaXMuc3BhY2luZ1RvcDtcbiAgICBjb25zdCBfX3NwYWNpbmdCb3R0b20gPSB0aGlzLnNwYWNpbmdCb3R0b207XG5cbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgLyoqIHNldCBkZWZhdWx0IF9fd2lkdGggaWYgYHdpZHRoYCAmIGBoZWlnaHRgIGlzIGB1bmRlZmluZWRgICovXG4gICAgICAgIF9fd2lkdGggPSBERUZBVUxUX1dJRFRIO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfX29wZW5lZCkge1xuICAgICAgLyoqIGNyZWF0ZSBzdHlsZXMgZm9yIG1vZGUgc2lkZSAqL1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyT3BlbmVkLCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICBpZiAoX19tb2RlID09PSAnc2lkZScpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5RHJhd2VyQ29udGVudCA9IGBseS1kcmF3ZXItY29udGVudC0tLS06JHtcbiAgICAgICAgICBfX29wZW5lZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgIF9fd2lkdGggfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGxldCBwb3NpdGlvblZhbCA9ICdtYXJnaW4tJztcbiAgICAgICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLl9kcmF3ZXJSb290Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZHJhd2VyLXJvb3Q6JHtfX3dpZHRofcK3JHtfX2hlaWdodH3CtyR7X19zcGFjaW5nVG9wfcK3JHtfX3NwYWNpbmdCb3R0b219wrcke19fc3BhY2luZ0JvdHRvbX3CtyR7X19wb3NpdGlvbn3CtyR7X19tb2RlfcK3JHtfX2ZvcmNlTW9kZU92ZXJ9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzRHJhd2VyUm9vdDoge1xuICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICAgICAgdG9wPzogc3RyaW5nXG4gICAgICAgIGJvdHRvbT86IHN0cmluZ1xuICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgfSA9IHsgfTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uU2lnbiA9IF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ3RvcCcgPyAnLScgOiAnKyc7XG4gICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBpZiAoKF9fbW9kZSA9PT0gJ292ZXInIHx8IF9fZm9yY2VNb2RlT3ZlcikgJiYgdmFsID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVYID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3Qud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZUhlaWdodCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVZID0gYHRyYW5zbGF0ZVkoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ1RvcCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdUb3AgPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQm90dG9tLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0JvdHRvbSA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmxlZnQgPSAwO1xuICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnJpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZXNEcmF3ZXJSb290O1xuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlclJvb3RDbGFzcywgX19tb2RlID09PSAnc2lkZScgPyBTVFlMRV9QUklPUklUWSA6IFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgdGhpcy5fZnJvbVRvZ2dsZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS53aWR0aDtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPT09ICcwcHgnKSB7XG4gICAgICB0aGlzLl9mb3JjZU1vZGVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRGb3JjZU1vZGVPdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRGb3JjZU1vZGVPdmVyKCkge1xuICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQmFja2Ryb3AoKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmICh0aGlzLm1vZGUgPT09ICdvdmVyJyB8fCB0aGlzLl9mb3JjZU1vZGVPdmVyKSkge1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2VycysrO1xuICAgICAgdGhpcy5fdmlld1JlZiA9IHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgKHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzWzBdIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS56SW5kZXggPSBgJHt0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzfWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzLS07XG4gICAgICB0aGlzLl92Y3IuY2xlYXIoKTtcbiAgICAgIHRoaXMuX3ZpZXdSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuX2Zyb21Ub2dnbGUgJiYgIXRoaXMuX2lzQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9mcm9tVG9nZ2xlICYmIHRoaXMuX2lzQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogY29udmVydCBudW1iZXIgdG8gcHhcbiAqL1xuZnVuY3Rpb24gdG9QeCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nLCBfbmV3PzogYW55KSB7XG4gIHJldHVybiBrZXkgaW4gb2JqZWN0XG4gID8gb2JqZWN0W2tleV1cbiAgOiBvYmplY3Rba2V5XSA9IF9uZXcgfHwge307XG59XG4iXX0=