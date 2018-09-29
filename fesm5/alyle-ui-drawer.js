import { __assign } from 'tslib';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef, NgModule } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_MODE = 'side';
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
    backdrop: __assign({}, LY_COMMON_STYLES.fill, { backgroundColor: theme.drawer.backdrop })
}); };
var LyDrawerContainer = /** @class */ (function () {
    function LyDrawerContainer(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(styles, 'ly-drawer-container', STYLE_PRIORITY + 1.9);
        this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
    }
    LyDrawerContainer.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-drawer-container'
                },] },
    ];
    /** @nocollapse */
    LyDrawerContainer.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyDrawerContainer.propDecorators = {
        drawerContent: [{ type: ContentChild, args: [forwardRef(function () { return LyDrawerContent; }),] }]
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
        { type: Directive, args: [{
                    selector: 'ly-drawer-content'
                },] },
    ];
    /** @nocollapse */
    LyDrawerContent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyDrawerContainer }
    ]; };
    return LyDrawerContent;
}());
var LyDrawer = /** @class */ (function () {
    function LyDrawer(_theme, _renderer, _el, _drawerContainer, _vcr) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this._drawerContainer = _drawerContainer;
        this._vcr = _vcr;
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
                this._updateBackdrop();
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
                __width = '230px';
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
                }, this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
            }
            else {
                /** remove styles for <ly-drawer-content> */
                this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
                this._drawerContentClass = null;
            }
        }
        else {
            this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
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
    LyDrawer.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
        // this._viewRef.onDestroy(() => console.log('drawer backdrop destroyed!!'));
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
        if (this.opened && (this._mode === 'over' || this._forceModeOver)) {
            this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
        }
        else {
            this._vcr.clear();
            this._viewRef = null;
        }
    };
    LyDrawer.decorators = [
        { type: Component, args: [{
                    selector: 'ly-drawer',
                    template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\">backdrop</div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'lyDrawer'
                },] },
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
        config: [{ type: Input }],
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
/**
 * \@dddd
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        LyCommonModule
                    ],
                    exports: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                    declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                },] },
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

export { LyDrawerContainer, LyDrawerContent, LyDrawer, LyDrawerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZWFjaE1lZGlhLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFU1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IERFRkFVTFRfTU9ERSA9ICdzaWRlJztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwKScsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gIH0sXG4gIGJhY2tkcm9wOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZHJhd2VyLmJhY2tkcm9wXG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ3RvcCcgfCAnYm90dG9tJztcbnR5cGUgbW9kZSA9ICdzaWRlJyB8ICdvdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseS1kcmF3ZXItY29udGFpbmVyJywgU1RZTEVfUFJJT1JJVFkgKyAxLjkpO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSkgZHJhd2VyQ29udGVudDogTHlEcmF3ZXJDb250ZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZHJhd2VyQ29udGFpbmVyKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGRyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlckNvbnRlbnQpO1xuICB9XG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjxuZy10ZW1wbGF0ZT5cbiAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuYmFja2Ryb3BcIiAoY2xpY2spPVwidG9nZ2xlKClcIj5iYWNrZHJvcDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseURyYXdlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBjbGFzc2VzID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXM7XG4gIHByaXZhdGUgX2luaXRpYWxNb2RlOiBtb2RlO1xuICBwcml2YXRlIF9mb3JjZU1vZGVPdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF9mcm9tVG9nZ2xlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuXG4gIHByaXZhdGUgX21vZGU6IG1vZGU7XG4gIHByaXZhdGUgX21vZGVDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIHByaXZhdGUgX3dpZHRoQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVpZ2h0Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZHJhd2VyUm9vdENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNvbnRlbnRDbGFzczogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9iYWNrZHJvcDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVCYWNrZHJvcCgpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZSA9IERFRkFVTFRfTU9ERTtcbiAgQElucHV0KCkgc3BhY2luZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdTdGFydDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgZHJhd2VyLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsOiBzdHJpbmc7XG4gICAgICAgIGlmICh2YWwgPT09ICdzdGFydCcgfHwgdmFsID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbcG9zaXRpb25WYWxdOiAwXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyLFxuICAgIHByaXZhdGUgX3ZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiAhdGhpcy5fZnJvbVRvZ2dsZSkge1xuICAgICAgdGhpcy5fcmVzZXRGb3JjZU1vZGVPdmVyKCk7XG4gICAgfVxuICAgIGNvbnN0IF9fbW9kZSA9IHRoaXMubW9kZTtcbiAgICBjb25zdCBfX2ZvcmNlTW9kZU92ZXIgPSB0aGlzLl9mb3JjZU1vZGVPdmVyO1xuICAgIGNvbnN0IF9fb3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgbGV0IF9fd2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IF9faGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY29uc3QgX19zcGFjaW5nVG9wID0gdGhpcy5zcGFjaW5nVG9wO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JvdHRvbSA9IHRoaXMuc3BhY2luZ0JvdHRvbTtcbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgX193aWR0aCA9ICcyMzBweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9fb3BlbmVkKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlcyBmb3IgbW9kZSBzaWRlICovXG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIGlmIChfX21vZGUgPT09ICdzaWRlJykge1xuICAgICAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgICAgIF9fb3BlbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGxldCBwb3NpdGlvblZhbCA9ICdtYXJnaW4tJztcbiAgICAgICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogcmVtb3ZlIHN0eWxlcyBmb3IgPGx5LWRyYXdlci1jb250ZW50PiAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLl9kcmF3ZXJSb290Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZHJhd2VyLXJvb3Q6JHtfX3dpZHRofcOCwrcke19faGVpZ2h0fcOCwrcke19fc3BhY2luZ1RvcH3DgsK3JHtfX3NwYWNpbmdCb3R0b219w4LCtyR7X19zcGFjaW5nQm90dG9tfcOCwrcke19fcG9zaXRpb259w4LCtyR7X19tb2RlfcOCwrcke19fZm9yY2VNb2RlT3Zlcn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNEcmF3ZXJSb290OiB7XG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIGhlaWdodD86IHN0cmluZ1xuICAgICAgICB0b3A/OiBzdHJpbmdcbiAgICAgICAgYm90dG9tPzogc3RyaW5nXG4gICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICB9ID0geyB9O1xuICAgICAgY29uc3QgcG9zaXRpb25TaWduID0gX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAndG9wJyA/ICctJyA6ICcrJztcbiAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGlmICgoX19tb2RlID09PSAnb3ZlcicgfHwgX19mb3JjZU1vZGVPdmVyKSAmJiB2YWwgPT09ICcwJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVggPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX19oZWlnaHQpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9faGVpZ2h0LCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlSGVpZ2h0ID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVkgPSBgdHJhbnNsYXRlWSgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nVG9wLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCb3R0b20sICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQm90dG9tID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QubGVmdCA9IDA7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QucmlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gdGhpcy5fdmlld1JlZiA9IHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fYmFja2Ryb3ApO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYub25EZXN0cm95KCgpID0+IGNvbnNvbGUubG9nKCdkcmF3ZXIgYmFja2Ryb3AgZGVzdHJveWVkISEnKSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcmNlTW9kZU92ZXIoKSB7XG4gICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgKHRoaXMuX21vZGUgPT09ICdvdmVyJyB8fCB0aGlzLl9mb3JjZU1vZGVPdmVyKSkge1xuICAgICAgdGhpcy5fdmlld1JlZiA9IHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fYmFja2Ryb3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92Y3IuY2xlYXIoKTtcbiAgICAgIHRoaXMuX3ZpZXdSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBkZGRkXG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZywgX25ldz86IGFueSkge1xuICByZXR1cm4ga2V5IGluIG9iamVjdFxuICA/IG9iamVjdFtrZXldXG4gIDogb2JqZWN0W2tleV0gPSBfbmV3IHx8IHt9O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudCB9IGZyb20gJy4vZHJhd2VyJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7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