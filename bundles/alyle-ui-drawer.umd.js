(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/drawer', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.drawer = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

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
            }
        });
    };
    var LyDrawerContainer = /** @class */ (function () {
        function LyDrawerContainer(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            this.classes = this._theme.addStyleSheet(styles, 'ly-drawer-container', STYLE_PRIORITY + 1.9);
            this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
        }
        LyDrawerContainer.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-drawer-container'
                    },] },
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
            drawerContent: [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyDrawerContent; }),] }]
        };
        return LyDrawerContainer;
    }());
    var LyDrawerContent = /** @class */ (function () {
        function LyDrawerContent(_theme, _renderer, _el, drawerContainer) {
            this._theme = _theme;
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
                    },] },
        ];
        /** @nocollapse */
        LyDrawerContent.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: LyDrawerContainer }
            ];
        };
        return LyDrawerContent;
    }());
    var LyDrawer = /** @class */ (function () {
        function LyDrawer(_theme, _renderer, _el, _drawerContainer) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            this._drawerContainer = _drawerContainer;
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
        LyDrawer.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-drawer',
                        exportAs: 'lyDrawer'
                    },] },
        ];
        /** @nocollapse */
        LyDrawer.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: LyDrawerContainer }
            ];
        };
        LyDrawer.propDecorators = {
            config: [{ type: core.Input }],
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ui.LyCommonModule
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

    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawer = LyDrawer;
    exports.LyDrawerModule = LyDrawerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIudHMiLCJuZzovL0BhbHlsZS91aS9kcmF3ZXIvZHJhd2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIHRvQm9vbGVhbiwgZWFjaE1lZGlhIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnc3RhcnQnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBkcmF3ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAnLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcnOiAndG91Y2gnXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgZHJhd2VyT3BlbmVkOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDApJyxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nO1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LWRyYXdlci1jb250YWluZXInLCBTVFlMRV9QUklPUklUWSArIDEuOSk7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBkcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGRyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlckNvbnRlbnQpO1xuICB9XG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2luaXRpYWxNb2RlOiBtb2RlO1xuICBwcml2YXRlIF9mb3JjZU1vZGVPdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF9mcm9tVG9nZ2xlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbW9kZTogbW9kZTtcbiAgcHJpdmF0ZSBfbW9kZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgcHJpdmF0ZSBfd2lkdGhDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICBwcml2YXRlIF9oZWlnaHRDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZSA9IERFRkFVTFRfTU9ERTtcbiAgQElucHV0KCkgc3BhY2luZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdTdGFydDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgZHJhd2VyLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsOiBzdHJpbmc7XG4gICAgICAgIGlmICh2YWwgPT09ICdzdGFydCcgfHwgdmFsID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbcG9zaXRpb25WYWxdOiAwXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgIXRoaXMuX2Zyb21Ub2dnbGUpIHtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpO1xuICAgIH1cbiAgICBjb25zdCBfX21vZGUgPSB0aGlzLm1vZGU7XG4gICAgY29uc3QgX19mb3JjZU1vZGVPdmVyID0gdGhpcy5fZm9yY2VNb2RlT3ZlcjtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IF9fc3BhY2luZ1RvcCA9IHRoaXMuc3BhY2luZ1RvcDtcbiAgICBjb25zdCBfX3NwYWNpbmdCb3R0b20gPSB0aGlzLnNwYWNpbmdCb3R0b207XG4gICAgaWYgKF9fd2lkdGggJiYgX19oZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgd2lkdGhcXGAgYW5kIFxcYGhlaWdodFxcYCBhcmUgZGVmaW5lZCwgeW91IGNhbiBvbmx5IGRlZmluZSBvbmVgKTtcbiAgICB9IGVsc2UgaWYgKCFfX3dpZHRoKSB7XG4gICAgICBpZiAoIV9faGVpZ2h0KSB7XG4gICAgICAgIF9fd2lkdGggPSAnMjMwcHgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfX29wZW5lZCkge1xuICAgICAgLyoqIGNyZWF0ZSBzdHlsZXMgZm9yIG1vZGUgc2lkZSAqL1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyT3BlbmVkLCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICBpZiAoX19tb2RlID09PSAnc2lkZScpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5RHJhd2VyQ29udGVudCA9IGBseS1kcmF3ZXItY29udGVudC0tLS06JHtcbiAgICAgICAgICBfX29wZW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgX193aWR0aCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX3Bvc2l0aW9uIHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUobmV3S2V5RHJhd2VyQ29udGVudCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IGRyYXdlckNvbnRlbnRTdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0Pzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5Ub3A/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT86IHN0cmluZ1xuICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICBsZXQgcG9zaXRpb25WYWwgPSAnbWFyZ2luLSc7XG4gICAgICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVmFsICs9IHRoZW1lLmdldERpcmVjdGlvbihfX3Bvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25WYWwgKz0gX19wb3NpdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWFjaE1lZGlhKF9fb3BlbmVkIGFzIGFueSwgKCkgPT4ge30pO1xuICAgICAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHRvUHgodmFsKTtcbiAgICAgICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKGRyYXdlckNvbnRlbnRTdHlsZXMsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50W3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyQ29udGVudFN0eWxlc1twb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRyYXdlckNvbnRlbnRTdHlsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKiogZGVmYXVsdCBzdHlsZXMgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5fZHJhd2VyUm9vdENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWRyYXdlci1yb290OiR7X193aWR0aH3DgsK3JHtfX2hlaWdodH3DgsK3JHtfX3NwYWNpbmdUb3B9w4LCtyR7X19zcGFjaW5nQm90dG9tfcOCwrcke19fc3BhY2luZ0JvdHRvbX3DgsK3JHtfX3Bvc2l0aW9ufcOCwrcke19fbW9kZX3DgsK3JHtfX2ZvcmNlTW9kZU92ZXJ9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzRHJhd2VyUm9vdDoge1xuICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICAgICAgdG9wPzogc3RyaW5nXG4gICAgICAgIGJvdHRvbT86IHN0cmluZ1xuICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgfSA9IHsgfTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uU2lnbiA9IF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ3RvcCcgPyAnLScgOiAnKyc7XG4gICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBpZiAoKF9fbW9kZSA9PT0gJ292ZXInIHx8IF9fZm9yY2VNb2RlT3ZlcikgJiYgdmFsID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVYID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3Qud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZUhlaWdodCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVZID0gYHRyYW5zbGF0ZVkoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ1RvcCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdUb3AgPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQm90dG9tLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0JvdHRvbSA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmxlZnQgPSAwO1xuICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnJpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZXNEcmF3ZXJSb290O1xuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlclJvb3RDbGFzcywgX19tb2RlID09PSAnc2lkZScgPyBTVFlMRV9QUklPUklUWSA6IFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgdGhpcy5fZnJvbVRvZ2dsZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS53aWR0aDtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPT09ICcwcHgnKSB7XG4gICAgICB0aGlzLl9mb3JjZU1vZGVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRGb3JjZU1vZGVPdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRGb3JjZU1vZGVPdmVyKCkge1xuICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogQGRkZGRcbiAqL1xuZnVuY3Rpb24gdG9QeCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nLCBfbmV3PzogYW55KSB7XG4gIHJldHVybiBrZXkgaW4gb2JqZWN0XG4gID8gb2JqZWN0W2tleV1cbiAgOiBvYmplY3Rba2V5XSA9IF9uZXcgfHwge307XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9kcmF3ZXInO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDb250ZW50Q2hpbGQiLCJmb3J3YXJkUmVmIiwidG9Cb29sZWFuIiwiZWFjaE1lZGlhIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7O0lBQzVCLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FB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