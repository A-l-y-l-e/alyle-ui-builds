(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@alyle/ui'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', '@angular/core', '@angular/animations', '@alyle/ui', '@angular/forms', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.menu = {}),global.ng.core,global.ng.animations,global.ly.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,animations,ui,forms,common) { 'use strict';

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    /** @type {?} */
    var DEFAULT_PLACEMENT = ui.YPosition.below;
    /** @type {?} */
    var DEFAULT_XPOSITION = ui.XPosition.after;
    /** @type {?} */
    var STYLES = function (theme) {
        return ({
            container: __assign({ background: theme.background.primary.default, borderRadius: '2px', boxShadow: ui.shadowBuilder(4), display: 'inline-block', paddingTop: '8px', paddingBottom: '8px', transformOrigin: 'inherit', pointerEvents: 'all' }, theme.menu.root)
        });
    };
    /** @type {?} */
    var ANIMATIONS = [
        animations.trigger('menuEnter', [
            animations.transition('void => in', [
                animations.animate('125ms cubic-bezier(0, 0, 0.2, 1)', animations.keyframes([
                    animations.style({
                        opacity: 0,
                        transform: 'scale(0.8)'
                    }),
                    animations.style({
                        opacity: 1,
                        transform: 'scale(1)'
                    })
                ]))
            ]),
        ]),
        animations.trigger('menuLeave', [
            animations.transition('* => void', animations.animate('150ms linear', animations.style({ opacity: 0 })))
        ])
    ];
    /**
     * Menu container
     */
    var LyMenu = /** @class */ (function () {
        function LyMenu(_theme, _el, _renderer) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            /**
             * styles
             * \@docs-private
             */
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        }
        /**
         * @param {?} e
         * @return {?}
         */
        LyMenu.prototype.endAnimation = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.toState === 'void') {
                    this.ref.destroy();
                }
            };
        /**
         * @return {?}
         */
        LyMenu.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.placement && !this.xPosition && !this.yPosition) {
                    this.xPosition = DEFAULT_XPOSITION;
                    this.placement = DEFAULT_PLACEMENT;
                }
            };
        /**
         * @return {?}
         */
        LyMenu.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._updatePlacement();
            };
        /**
         * @return {?}
         */
        LyMenu.prototype._updatePlacement = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = ( /** @type {?} */(this._el.nativeElement));
                /** @type {?} */
                var rects = ( /** @type {?} */(el.getBoundingClientRect()));
                /** @type {?} */
                var targetRects = this.ref._targetPosition();
                /** @type {?} */
                var placement = this.placement;
                /** @type {?} */
                var xPosition = this.xPosition;
                /** @type {?} */
                var yPosition = this.yPosition;
                if (xPosition && yPosition) {
                    throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
                }
                if ((xPosition || yPosition) && !placement) {
                    throw new Error("`placement` is required.");
                }
                /** @type {?} */
                var x = 0;
                /** @type {?} */
                var y = 0;
                /** @type {?} */
                var ox = 'center';
                /** @type {?} */
                var oy = 'center';
                if (placement || xPosition || yPosition) {
                    if (placement) {
                        if (placement === ui.YPosition.above) {
                            x = (targetRects.width - rects.width) / 2;
                            y = -rects.height;
                            oy = 'bottom';
                        }
                        else if (placement === ui.YPosition.below) {
                            x = (targetRects.width - rects.width) / 2;
                            y = targetRects.height;
                            oy = 'top';
                        }
                        else {
                            /** @type {?} */
                            var dir = this._theme.config.getDirection(( /** @type {?} */(placement)));
                            if (dir === ui.DirPosition.left) {
                                ox = '100%';
                                x = -rects.width;
                                y = (targetRects.height - rects.height) / 2;
                            }
                            else if (dir === ui.DirPosition.right) {
                                ox = '0%';
                                x = targetRects.width;
                                y = (targetRects.height - rects.height) / 2;
                            }
                        }
                    }
                    if (xPosition) {
                        /** @type {?} */
                        var dir = this._theme.config.getDirection(( /** @type {?} */(xPosition)));
                        if (dir === ui.DirPosition.right) {
                            ox = '0%';
                            x = 0;
                        }
                        else if (dir === ui.DirPosition.left) {
                            ox = '100%';
                            x = targetRects.width - rects.width;
                        }
                    }
                    else if (yPosition) {
                        if (yPosition === ui.YPosition.above) {
                            y = 0;
                            oy = '0%';
                        }
                        else if (yPosition === ui.YPosition.below) {
                            y = targetRects.height - rects.height;
                            oy = '100%';
                        }
                    }
                }
                this._setTransform("translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)");
                this._renderer.setStyle(this._el.nativeElement, 'transform-origin', ox + " " + oy + " 0");
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyMenu.prototype._setTransform = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._renderer.setStyle(this._el.nativeElement, 'transform', val);
            };
        LyMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-menu',
                        animations: __spread(ANIMATIONS),
                        template: "<div [class]=\"classes.container\" [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
                        exportAs: 'lyMenu'
                    }] }
        ];
        /** @nocollapse */
        LyMenu.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        LyMenu.propDecorators = {
            ref: [{ type: core.Input }],
            placement: [{ type: core.Input }],
            xPosition: [{ type: core.Input }],
            yPosition: [{ type: core.Input }],
            menuLeave2: [{ type: core.HostBinding, args: ['@menuLeave',] }],
            endAnimation: [{ type: core.HostListener, args: ['@menuLeave.done', ['$event'],] }]
        };
        return LyMenu;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var menuItemStyles = ({
        display: 'block',
        minHeight: '48px',
        borderRadius: 0,
        width: '100%'
    });
    var LyMenuItem = /** @class */ (function () {
        function LyMenuItem(_menu, el, theme) {
            this._menu = _menu;
            theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement, undefined, STYLE_PRIORITY);
        }
        /**
         * @return {?}
         */
        LyMenuItem.prototype._click = /**
         * @return {?}
         */
            function () {
                if (this._menu.ref) {
                    this._menu.ref._menuRef.detach();
                }
            };
        LyMenuItem.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ly-menu-item]'
                    },] }
        ];
        /** @nocollapse */
        LyMenuItem.ctorParameters = function () {
            return [
                { type: LyMenu, decorators: [{ type: core.Optional }] },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyMenuItem.propDecorators = {
            _click: [{ type: core.HostListener, args: ['click',] }]
        };
        return LyMenuItem;
    }());
    var LyMenuTriggerFor = /** @class */ (function () {
        function LyMenuTriggerFor(elementRef, overlay) {
            this.elementRef = elementRef;
            this.overlay = overlay;
        }
        /** @docs-private */
        /**
         * \@docs-private
         * @return {?}
         */
        LyMenuTriggerFor.prototype._targetPosition = /**
         * \@docs-private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this.elementRef.nativeElement;
                /** @type {?} */
                var rect = element.getBoundingClientRect();
                return rect;
            };
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype._handleClick = /**
         * @return {?}
         */
            function () {
                if (this._menuRef) {
                    this._menuRef.detach();
                }
                else {
                    /** @type {?} */
                    var rect = this._targetPosition();
                    this._menuRef = this.overlay.create(this.lyMenuTriggerFor, {
                        $implicit: this
                    }, {
                        styles: {
                            top: rect.top,
                            left: rect.left,
                            right: null,
                            bottom: null,
                            pointerEvents: null
                        },
                        fnDestroy: this.detach.bind(this),
                        host: this.elementRef.nativeElement,
                        backdrop: true
                    });
                }
            };
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype.detach = /**
         * @return {?}
         */
            function () {
                this._menuRef.detach();
            };
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this._menuRef) {
                    this._menuRef.remove();
                    this._menuRef = null;
                }
            };
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._menuRef) {
                    this._menuRef.detach();
                }
            };
        LyMenuTriggerFor.decorators = [
            { type: core.Directive, args: [{
                        selector: '[lyMenuTriggerFor]',
                        host: {
                            '(click)': '_handleClick($event)'
                        }
                    },] }
        ];
        /** @nocollapse */
        LyMenuTriggerFor.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: ui.LyOverlay }
            ];
        };
        LyMenuTriggerFor.propDecorators = {
            lyMenuTriggerFor: [{ type: core.Input }]
        };
        return LyMenuTriggerFor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyMenuModule = /** @class */ (function () {
        function LyMenuModule() {
        }
        LyMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LyOverlayModule],
                        exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                        declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                    },] }
        ];
        return LyMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.LyMenuModule = LyMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvbWVudS9tZW51LnRzIiwibmc6Ly9AYWx5bGUvdWkvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGtleWZyYW1lcyxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMeU92ZXJsYXksIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsIEx5VGhlbWUyLCBzaGFkb3dCdWlsZGVyLCBUaGVtZVZhcmlhYmxlcywgUGxhY2VtZW50LCBYUG9zaXRpb24sIFlQb3NpdGlvbiwgRGlyUG9zaXRpb24gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBERUZBVUxUX1hQT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnaW5oZXJpdCcsXG4gICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgLi4udGhlbWUubWVudS5yb290XG4gIH1cbn0pO1xuXG5jb25zdCBBTklNQVRJT05TID0gW1xuICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBpbicsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICB9KVxuICAgICAgXSkpXG4gICAgXSksXG4gIF0pLFxuICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgXSlcbl07XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFsuLi5BTklNQVRJT05TXSxcbiAgdGVtcGxhdGVVcmw6ICdtZW51Lmh0bWwnLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSByZWY6IEx5TWVudVRyaWdnZXJGb3I7XG5cbiAgLyoqIFBvc2l0aW9uIHdoZXJlIHRoZSBtZW51IHdpbGwgYmUgcGxhY2VkLiAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuICAvKiogVGhlIHgtYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeFBvc2l0aW9uOiBYUG9zaXRpb247XG5cbiAgLyoqIFRoZSB5LWF4aXMgcG9zaXRpb24gb2YgdGhlIG1lbnUuICovXG4gIEBJbnB1dCgpIHlQb3NpdGlvbjogWVBvc2l0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBsYWNlbWVudCAmJiAhdGhpcy54UG9zaXRpb24gJiYgIXRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnhQb3NpdGlvbiA9IERFRkFVTFRfWFBPU0lUSU9OO1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlUGxhY2VtZW50KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQbGFjZW1lbnQgKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XG4gICAgY29uc3QgdGFyZ2V0UmVjdHMgPSB0aGlzLnJlZi5fdGFyZ2V0UG9zaXRpb24oKTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLnBsYWNlbWVudDtcbiAgICBjb25zdCB4UG9zaXRpb24gPSB0aGlzLnhQb3NpdGlvbjtcbiAgICBjb25zdCB5UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbjtcbiAgICBpZiAoeFBvc2l0aW9uICYmIHlQb3NpdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICAgIH1cbiAgICBpZiAoKHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pICYmICFwbGFjZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICAgIH1cbiAgICBsZXQgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICBveCA9ICdjZW50ZXInLFxuICAgICAgICBveSA9ICdjZW50ZXInO1xuICAgIGlmIChwbGFjZW1lbnQgfHwgeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikge1xuICAgICAgaWYgKHBsYWNlbWVudCkge1xuICAgICAgICBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB4ID0gKHRhcmdldFJlY3RzLndpZHRoIC0gcmVjdHMud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gLXJlY3RzLmhlaWdodDtcbiAgICAgICAgICBveSA9ICdib3R0b20nO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeCA9ICh0YXJnZXRSZWN0cy53aWR0aCAtIHJlY3RzLndpZHRoKSAvIDI7XG4gICAgICAgICAgeSA9IHRhcmdldFJlY3RzLmhlaWdodDtcbiAgICAgICAgICBveSA9ICd0b3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLmNvbmZpZy5nZXREaXJlY3Rpb24ocGxhY2VtZW50IGFzIGFueSk7XG4gICAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgICB4ID0gLXJlY3RzLndpZHRoO1xuICAgICAgICAgICAgeSA9ICh0YXJnZXRSZWN0cy5oZWlnaHQgLSByZWN0cy5oZWlnaHQpIC8gMjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICAgIHggPSB0YXJnZXRSZWN0cy53aWR0aDtcbiAgICAgICAgICAgIHkgPSAodGFyZ2V0UmVjdHMuaGVpZ2h0IC0gcmVjdHMuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh4UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWUuY29uZmlnLmdldERpcmVjdGlvbih4UG9zaXRpb24gYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgICAgeCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IHRhcmdldFJlY3RzLndpZHRoIC0gcmVjdHMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh5UG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgIG95ID0gJzAlJztcbiAgICAgICAgfSBlbHNlIGlmICh5UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHkgPSB0YXJnZXRSZWN0cy5oZWlnaHQgLSByZWN0cy5oZWlnaHQ7XG4gICAgICAgICAgb3kgPSAnMTAwJSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0VHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQoeCl9cHgsICR7TWF0aC5yb3VuZCh5KX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsIGAke294fSAke295fSAwYCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmFuc2Zvcm0odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdmFsKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX3RhcmdldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmx5TWVudVRyaWdnZXJGb3IsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICB9LCB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTHlNZW51LCBMeU1lbnVUcmlnZ2VyRm9yLCBMeU1lbnVJdGVtIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIllQb3NpdGlvbiIsIlhQb3NpdGlvbiIsInNoYWRvd0J1aWxkZXIiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJrZXlmcmFtZXMiLCJzdHlsZSIsIkRpclBvc2l0aW9uIiwiQ29tcG9uZW50IiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIkRpcmVjdGl2ZSIsIk9wdGlvbmFsIiwiTHlPdmVybGF5IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIiwiTHlPdmVybGF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTtBQUVELGFBNkVnQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcs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