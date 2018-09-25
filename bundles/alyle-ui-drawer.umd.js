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
                overflow: 'auto'
            },
            drawerContent: {
                display: 'block'
            },
            drawerOpened: {
                transform: 'translate3d(0px, 0px, 0)'
            }
        });
    };
    var LyDrawerContainer = /** @class */ (function () {
        function LyDrawerContainer(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            this.classes = this._theme.addStyleSheet(styles, 'ly-drawer-container', STYLE_PRIORITY);
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
                /** @type {?} */
                var newKeyDrawerContent = "ly-drawer-content----:" + (__mode || DEFAULT_VALUE) + "\u00B7" + (__opened || DEFAULT_VALUE) + "\u00B7" + (__width || DEFAULT_VALUE) + "\u00B7" + (__height || DEFAULT_VALUE) + "\u00B7" + (__position || DEFAULT_VALUE);
                if (__opened) {
                    this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
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
                    // this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, null, this._drawerClass);
                    this._drawerClass = this._theme.addStyle(newKeyDrawerContent, function (theme) {
                        /** @type {?} */
                        var drawerContentNOpenStyles = {};
                        /** @type {?} */
                        var positionVal;
                        if (__position === 'start' || __position === 'end') {
                            positionVal = theme.getDirection(__position);
                        }
                        else {
                            positionVal = __position;
                        }
                        /** @type {?} */
                        var nnn = positionVal === 'left' || positionVal === 'top' ? '-' : '+';
                        if (__width) {
                            ui.eachMedia(__width, function (val, media, isMedia) {
                                /** @type {?} */
                                var newTranslateX = "translateX(" + (nnn + toPx(val)) + ")";
                                if (isMedia) {
                                    /** @type {?} */
                                    var breakPoint = theme.getBreakpoint(media);
                                    /** @type {?} */
                                    var styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentNOpenStyles, breakPoint);
                                    styleOfBreakPoint.transform = newTranslateX;
                                }
                                else {
                                    drawerContentNOpenStyles.transform = newTranslateX;
                                }
                            });
                        }
                        if (__height) {
                            ui.eachMedia(__height, function (val, media, isMedia) {
                                /** @type {?} */
                                var newTranslateY = "translateY(" + (nnn + toPx(val)) + ")";
                                if (isMedia) {
                                    /** @type {?} */
                                    var breakPoint = theme.getBreakpoint(media);
                                    /** @type {?} */
                                    var styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentNOpenStyles, breakPoint);
                                    styleOfBreakPoint.transform = newTranslateY;
                                }
                                else {
                                    drawerContentNOpenStyles.transform = newTranslateY;
                                }
                            });
                        }
                        return drawerContentNOpenStyles;
                    }, this._el.nativeElement, this._drawerClass, STYLE_PRIORITY);
                    this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
                    this._drawerContentClass = null;
                }
                this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingTop + "\u00B7" + __spacingBottom, function (theme) {
                    /** @type {?} */
                    var stylesDrawerRoot = {};
                    if (__width) {
                        ui.eachMedia(__width, function (val, media, isMedia) {
                            /** @type {?} */
                            var newStyleWidth = toPx(val);
                            if (isMedia) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.width = newStyleWidth;
                            }
                            else {
                                stylesDrawerRoot.width = newStyleWidth;
                            }
                        });
                    }
                    if (__height) {
                        ui.eachMedia(__height, function (val, media, isMedia) {
                            /** @type {?} */
                            var newStyleHeight = toPx(val);
                            if (isMedia) {
                                /** @type {?} */
                                var breakPoint = theme.getBreakpoint(media);
                                /** @type {?} */
                                var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                                styleOfBreakPoint.height = newStyleHeight;
                            }
                            else {
                                stylesDrawerRoot.height = newStyleHeight;
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
                }, this._el.nativeElement, this._drawerRootClass, STYLE_PRIORITY);
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** Set default position */
                if (!this.position) ;
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.opened = !this.opened;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIudHMiLCJuZzovL0BhbHlsZS91aS9kcmF3ZXIvZHJhd2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCB0b0Jvb2xlYW4sIGVhY2hNZWRpYSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IERFRkFVTFRfTU9ERSA9ICdzaWRlJztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwKSdcbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nO1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInIHwgJ3B1c2gnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LWRyYXdlci1jb250YWluZXInLCBTVFlMRV9QUklPUklUWSk7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBkcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGRyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlckNvbnRlbnQpO1xuICB9XG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWRDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX21vZGU6IG1vZGU7XG4gIHByaXZhdGUgX21vZGVDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIHByaXZhdGUgX3dpZHRoQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVpZ2h0Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZHJhd2VyUm9vdENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNvbnRlbnRDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKSBjb25maWc6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGU7XG4gIEBJbnB1dCgpIHNwYWNpbmdUb3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nU3RhcnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGRyYXdlci5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBwb3NpdGlvblZhbDogc3RyaW5nO1xuICAgICAgICBpZiAodmFsID09PSAnc3RhcnQnIHx8IHZhbCA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IHRoZW1lLmdldERpcmVjdGlvbih2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3Bvc2l0aW9uVmFsXTogMFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBfZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IF9fbW9kZSA9IHRoaXMubW9kZTtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IF9fc3BhY2luZ1RvcCA9IHRoaXMuc3BhY2luZ1RvcDtcbiAgICBjb25zdCBfX3NwYWNpbmdCb3R0b20gPSB0aGlzLnNwYWNpbmdCb3R0b207XG4gICAgaWYgKF9fd2lkdGggJiYgX19oZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgd2lkdGhcXGAgYW5kIFxcYGhlaWdodFxcYCBhcmUgZGVmaW5lZCwgeW91IGNhbiBvbmx5IGRlZmluZSBvbmVgKTtcbiAgICB9IGVsc2UgaWYgKCFfX3dpZHRoKSB7XG4gICAgICBpZiAoIV9faGVpZ2h0KSB7XG4gICAgICAgIF9fd2lkdGggPSAnMjMwcHgnO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgX19tb2RlIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgIF9fb3BlbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgX193aWR0aCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgX19oZWlnaHQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgX19wb3NpdGlvbiB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgaWYgKF9fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcblxuICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUobmV3S2V5RHJhd2VyQ29udGVudCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBkcmF3ZXJDb250ZW50U3R5bGVzOiB7XG4gICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgIG1hcmdpblJpZ2h0Pzogc3RyaW5nXG4gICAgICAgICAgbWFyZ2luVG9wPzogc3RyaW5nXG4gICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsID0gJ21hcmdpbi0nO1xuICAgICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsICs9IHRoZW1lLmdldERpcmVjdGlvbihfX3Bvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50W3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRyYXdlckNvbnRlbnRTdHlsZXM7XG4gICAgICB9LFxuICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBudWxsLCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleURyYXdlckNvbnRlbnQsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudE5PcGVuU3R5bGVzOiB7XG4gICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsOiBzdHJpbmc7XG4gICAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB0aGVtZS5nZXREaXJlY3Rpb24oX19wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSBfX3Bvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ubiA9IHBvc2l0aW9uVmFsID09PSAnbGVmdCcgfHwgcG9zaXRpb25WYWwgPT09ICd0b3AnID8gJy0nIDogJysnO1xuICAgICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGB0cmFuc2xhdGVYKCR7bm5uICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudE5PcGVuU3R5bGVzLCBicmVha1BvaW50KTtcbiAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRyYXdlckNvbnRlbnROT3BlblN0eWxlcy50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX2hlaWdodCkge1xuICAgICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVkgPSBgdHJhbnNsYXRlWSgke25ubiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKGRyYXdlckNvbnRlbnROT3BlblN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50Tk9wZW5TdHlsZXMudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudE5PcGVuU3R5bGVzO1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fZHJhd2VyUm9vdENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWRyYXdlci1yb290OiR7X193aWR0aH3DgsK3JHtfX2hlaWdodH3DgsK3JHtfX3NwYWNpbmdUb3B9w4LCtyR7X19zcGFjaW5nQm90dG9tfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc0RyYXdlclJvb3Q6IHtcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nXG4gICAgICAgIHRvcD86IHN0cmluZ1xuICAgICAgICBib3R0b20/OiBzdHJpbmdcbiAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgfSA9IHsgfTtcbiAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfX2hlaWdodCkge1xuICAgICAgICBlYWNoTWVkaWEoX19oZWlnaHQsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVIZWlnaHQgPSB0b1B4KHZhbCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nVG9wLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCb3R0b20sICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQm90dG9tID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QubGVmdCA9IDA7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QucmlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKiogU2V0IGRlZmF1bHQgcG9zaXRpb24gKi9cbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIC8vIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAZGRkZFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsV2l0aFNwYWNpbmcoc3BhY2luZ1RvcD86IHN0cmluZyB8IG51bWJlciwgc3BhY2luZ0JvdHRvbT86IHN0cmluZyB8IG51bWJlcikge1xuICBpZiAoc3BhY2luZ1RvcCB8fCBzcGFjaW5nQm90dG9tKSB7XG4gICAgbGV0IHN0eWwgPSAnY2FsYygxMDAlJztcbiAgICBpZiAoc3BhY2luZ1RvcCkge1xuICAgICAgc3R5bCArPSBgIC0gJHt0b1B4KHNwYWNpbmdUb3ApfWA7XG4gICAgfVxuICAgIGlmIChzcGFjaW5nQm90dG9tKSB7XG4gICAgICBzdHlsICs9IGAgLSAke3RvUHgoc3BhY2luZ0JvdHRvbSl9YDtcbiAgICB9XG4gICAgc3R5bCArPSAnKSc7XG4gICAgcmV0dXJuIHN0eWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcxMDAlJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZywgX25ldz86IGFueSkge1xuICByZXR1cm4ga2V5IGluIG9iamVjdFxuICA/IG9iamVjdFtrZXldXG4gIDogb2JqZWN0W2tleV0gPSBfbmV3IHx8IHt9O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudCB9IGZyb20gJy4vZHJhd2VyJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ29udGVudENoaWxkIiwiZm9yd2FyZFJlZiIsInRvQm9vbGVhbiIsImVhY2hNZWRpYSIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBSUEsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztJQUN6QixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0lBRWpDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7UUFBSyxRQUFDO1lBQ3pDLGVBQWUsRUFBRTtnQkFDZixPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQiw0QkFBNEIsRUFBRSxPQUFPO2FBQ3RDO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsT0FBTztnQkFDakIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDM0IsUUFBUSxFQUFFLE1BQU07YUFDakI7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLE9BQU87YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLDBCQUEwQjthQUN0QztTQUNGO0lBbkJ5QyxDQW1CeEMsQ0FBQzs7UUFXRCwyQkFDVSxRQUNBLFdBQ0E7WUFGQSxXQUFNLEdBQU4sTUFBTTtZQUNOLGNBQVMsR0FBVCxTQUFTO1lBQ1QsUUFBRyxHQUFILEdBQUc7MkJBTEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxF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