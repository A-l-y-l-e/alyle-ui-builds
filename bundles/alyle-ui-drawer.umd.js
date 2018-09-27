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
                /** @type {?} */
                var __mode = this.mode;
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
                this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingTop + "\u00B7" + __spacingBottom + "\u00B7" + __spacingBottom + "\u00B7" + __position + "\u00B7" + __mode, function (theme) {
                    /** @type {?} */
                    var stylesDrawerRoot = {};
                    /** @type {?} */
                    var positionSign = __position === 'start' || __position === 'top' ? '-' : '+';
                    if (__width) {
                        ui.eachMedia(__width, function (val, media, isMedia) {
                            console.log({ val: val });
                            if (__mode === 'over' && val === '0') {
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
                console.log({ width: width });
                if (this.mode === 'side' && width === '0px') {
                    this._initialMode = this.mode;
                    this.mode = 'over';
                    this.opened = true;
                }
                else {
                    if (this._initialMode) {
                        this.mode = this._initialMode;
                    }
                    this.opened = !this.opened;
                }
                this.ngOnChanges();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIudHMiLCJuZzovL0BhbHlsZS91aS9kcmF3ZXIvZHJhd2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIHRvQm9vbGVhbiwgZWFjaE1lZGlhIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnc3RhcnQnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBkcmF3ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAnLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcnOiAndG91Y2gnXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgZHJhd2VyT3BlbmVkOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDApJyxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nO1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LWRyYXdlci1jb250YWluZXInLCBTVFlMRV9QUklPUklUWSArIDEuOSk7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBkcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGRyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlckNvbnRlbnQpO1xuICB9XG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2luaXRpYWxNb2RlOiBtb2RlO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbW9kZTogbW9kZTtcbiAgcHJpdmF0ZSBfbW9kZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgcHJpdmF0ZSBfd2lkdGhDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICBwcml2YXRlIF9oZWlnaHRDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZSA9IERFRkFVTFRfTU9ERTtcbiAgQElucHV0KCkgc3BhY2luZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdTdGFydDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgZHJhd2VyLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsOiBzdHJpbmc7XG4gICAgICAgIGlmICh2YWwgPT09ICdzdGFydCcgfHwgdmFsID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbcG9zaXRpb25WYWxdOiAwXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgX19tb2RlID0gdGhpcy5tb2RlO1xuICAgIGNvbnN0IF9fb3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgbGV0IF9fd2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IF9faGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY29uc3QgX19zcGFjaW5nVG9wID0gdGhpcy5zcGFjaW5nVG9wO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JvdHRvbSA9IHRoaXMuc3BhY2luZ0JvdHRvbTtcbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgX193aWR0aCA9ICcyMzBweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9fb3BlbmVkKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlcyBmb3IgbW9kZSBzaWRlICovXG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIGlmIChfX21vZGUgPT09ICdzaWRlJykge1xuICAgICAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgICAgIF9fb3BlbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGxldCBwb3NpdGlvblZhbCA9ICdtYXJnaW4tJztcbiAgICAgICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogcmVtb3ZlIHN0eWxlcyBmb3IgPGx5LWRyYXdlci1jb250ZW50PiAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLl9kcmF3ZXJSb290Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZHJhd2VyLXJvb3Q6JHtfX3dpZHRofcOCwrcke19faGVpZ2h0fcOCwrcke19fc3BhY2luZ1RvcH3DgsK3JHtfX3NwYWNpbmdCb3R0b219w4LCtyR7X19zcGFjaW5nQm90dG9tfcOCwrcke19fcG9zaXRpb259w4LCtyR7X19tb2RlfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc0RyYXdlclJvb3Q6IHtcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nXG4gICAgICAgIHRvcD86IHN0cmluZ1xuICAgICAgICBib3R0b20/OiBzdHJpbmdcbiAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgIH0gPSB7IH07XG4gICAgICBjb25zdCBwb3NpdGlvblNpZ24gPSBfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICd0b3AnID8gJy0nIDogJysnO1xuICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coe3ZhbH0pO1xuICAgICAgICAgIGlmIChfX21vZGUgPT09ICdvdmVyJyAmJiB2YWwgPT09ICcwJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVggPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX19oZWlnaHQpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9faGVpZ2h0LCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlSGVpZ2h0ID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVkgPSBgdHJhbnNsYXRlWSgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nVG9wLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCb3R0b20sICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQm90dG9tID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QubGVmdCA9IDA7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QucmlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCkud2lkdGg7XG4gICAgY29uc29sZS5sb2coe3dpZHRofSk7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3NpZGUnICYmIHdpZHRoID09PSAnMHB4Jykge1xuICAgICAgdGhpcy5faW5pdGlhbE1vZGUgPSB0aGlzLm1vZGU7XG4gICAgICB0aGlzLm1vZGUgPSAnb3Zlcic7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsTW9kZSkge1xuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLl9pbml0aWFsTW9kZTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAZGRkZFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcsIF9uZXc/OiBhbnkpIHtcbiAgcmV0dXJuIGtleSBpbiBvYmplY3RcbiAgPyBvYmplY3Rba2V5XVxuICA6IG9iamVjdFtrZXldID0gX25ldyB8fCB7fTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnQgfSBmcm9tICcuL2RyYXdlcic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIkNvbnRlbnRDaGlsZCIsImZvcndhcmRSZWYiLCJ0b0Jvb2xlYW4iLCJlYWNoTWVkaWEiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUdBLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQzs7SUFDNUIsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztJQUN6QixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0lBRWpDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7UUFBSyxRQUFDO1lBQ3pDLGVBQWUsRUFBRTtnQkFDZixPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQiw0QkFBNEIsRUFBRSxPQUFPO2FBQ3RDO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsT0FBTztnQkFDakIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDM0IsUUFBUSxF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