(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@alyle/ui'), require('@angular/forms'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', '@angular/animations', '@alyle/ui', '@angular/forms', '@angular/common', '@angular/core'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.menu = {}),global.ng.animations,global.ly.core,global.ng.forms,global.ng.common,global.ng.core));
}(this, (function (exports,animations,ui,forms,common,core) { 'use strict';

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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            $priority: STYLE_PRIORITY,
            root: null,
            container: {
                background: theme.background.primary.default,
                borderRadius: '2px',
                boxShadow: ui.shadowBuilder(4),
                display: 'block',
                paddingTop: '8px',
                paddingBottom: '8px',
                transformOrigin: 'inherit',
                pointerEvents: 'all',
                overflow: 'auto',
                maxHeight: 'inherit',
                maxWidth: 'inherit',
            },
            item: {
                display: 'flex',
                minHeight: '48px',
                borderRadius: 0,
                width: '100%',
                justifyContent: 'flex-start'
            }
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
            this.classes = this._theme.addStyleSheet(STYLES);
            var menu = this._theme.variables.menu;
            if (menu) {
                if (menu.root) {
                    this._renderer.addClass(this._el.nativeElement, this._theme.style(menu.root, STYLE_PRIORITY, STYLES));
                }
                this._renderer.addClass(this._el.nativeElement, this.classes.root);
            }
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
                if (!this.ref) {
                    throw new Error('LyMenu: require @Input() ref');
                }
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
                if (this.ref._menuRef) {
                    this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
                }
                this._updatePlacement();
            };
        /**
         * @private
         * @return {?}
         */
        LyMenu.prototype._updatePlacement = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = ( /** @type {?} */(( /** @type {?} */(this.ref._menuRef)).containerElement));
                /** @type {?} */
                var container = this._container.nativeElement;
                // reset height & width
                this._renderer.setStyle(container, 'height', 'initial');
                this._renderer.setStyle(container, 'width', 'initial');
                /** @type {?} */
                var position = new ui.Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
                // set position
                this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
                this._renderer.setStyle(this._el.nativeElement, 'transform-origin', position.ox + " " + position.oy + " 0");
                // set height & width
                this._renderer.setStyle(container, 'height', position.height);
                this._renderer.setStyle(container, 'width', position.width);
            };
        LyMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-menu',
                        animations: __spread(ANIMATIONS),
                        template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
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
            _container: [{ type: core.ViewChild, args: ['container',] }],
            ref: [{ type: core.Input }],
            placement: [{ type: core.Input }],
            xPosition: [{ type: core.Input }],
            yPosition: [{ type: core.Input }],
            menuLeave2: [{ type: core.HostBinding, args: ['@menuLeave',] }],
            endAnimation: [{ type: core.HostListener, args: ['@menuLeave.done', ['$event'],] }]
        };
        return LyMenu;
    }());
    var LyMenuItem = /** @class */ (function () {
        function LyMenuItem(_menu, el, renderer) {
            this._menu = _menu;
            renderer.addClass(el.nativeElement, _menu.classes.item);
        }
        /**
         * @return {?}
         */
        LyMenuItem.prototype._click = /**
         * @return {?}
         */
            function () {
                if (this._menu.ref && this._menu.ref._menuRef) {
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
                { type: core.Renderer2 }
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
                    this._menuRef = this.overlay.create(this.lyMenuTriggerFor, {
                        $implicit: this
                    }, {
                        styles: {
                            top: 0,
                            left: 0,
                            pointerEvents: null
                        },
                        fnDestroy: this.detach.bind(this)
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
                if (this._menuRef) {
                    this._menuRef.detach();
                }
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
                    this._menuRef = undefined;
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
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype._getHostElement = /**
         * @return {?}
         */
            function () {
                return this.elementRef.nativeElement;
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.LyMenuModule = LyMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-menu.umd.js.map