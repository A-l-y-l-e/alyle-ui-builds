(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@alyle/ui'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', '@angular/core', '@angular/animations', '@alyle/ui', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.menu = {}),global.ng.core,global.ng.animations,global.alyle.ui,global.ng.forms,global.ng.common));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    /** @type {?} */
    var STYLES = function (theme) {
        return ({
            root: __assign({ background: theme.background.primary.default, borderRadius: '2px', boxShadow: ui.shadowBuilder(4), display: 'inline-block', paddingTop: '8px', paddingBottom: '8px', transformOrigin: 'left top 0px' }, theme.menu.root)
        });
    };
    /**
     * Menu container
     */
    var LyMenu = /** @class */ (function () {
        function LyMenu(theme, _el) {
            this.theme = theme;
            this._el = _el;
            /**
             * styles
             * @ignore
             */
            this.classes = this.theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            this._el.nativeElement.classList.add(this.classes.root);
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
        LyMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-menu',
                        animations: [
                            animations.trigger('menuEnter', [
                                animations.transition(':enter', [
                                    animations.animate('120ms cubic-bezier(0, 0, 0.2, 1)', animations.keyframes([
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
                                animations.transition('* => void', animations.animate('100ms 25ms linear', animations.style({ opacity: 0 })))
                            ])
                        ],
                        template: '<ng-content></ng-content>',
                        exportAs: 'lyMenu'
                    }] }
        ];
        /** @nocollapse */
        LyMenu.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef }
            ];
        };
        LyMenu.propDecorators = {
            ref: [{ type: core.Input }],
            menuEnter: [{ type: core.HostBinding, args: ['@menuEnter',] }],
            menuLeave2: [{ type: core.HostBinding, args: ['@menuLeave',] }],
            endAnimation: [{ type: core.HostListener, args: ['@menuLeave.done', ['$event'],] }]
        };
        return LyMenu;
    }());
    /** @type {?} */
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
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype.targetPosition = /**
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
                    var rect = this.targetPosition();
                    this._menuRef = this.overlay.create(this.lyMenuTriggerFor, {
                        $implicit: this
                    }, {
                        styles: {
                            top: rect.top,
                            left: rect.left,
                            right: null,
                            bottom: null,
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
                        // tslint:disable-next-line:use-host-property-decorator
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
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LxDomModule, ui.LyOverlayModule],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvbWVudS9tZW51LnRzIiwibmc6Ly9AYWx5bGUvdWkvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wIDBweCcsXG4gICAgLi4udGhlbWUubWVudS5yb290XG4gIH1cbn0pO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIC8qKlxuICAgKiBEZXN0cm95IG1lbnVcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuICBASG9zdEJpbmRpbmcoJ0BtZW51RW50ZXInKSBtZW51RW50ZXI7XG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxufVxuXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIEBJbnB1dCgpIGx5TWVudVRyaWdnZXJGb3I6IFRlbXBsYXRlUmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IEx5T3ZlcmxheVxuICApIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgIH0sIHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgICAgcmlnaHQ6IG51bGwsXG4gICAgICAgICAgYm90dG9tOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcyksXG4gICAgICAgIGhvc3Q6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IEx5TWVudSwgTHlNZW51VHJpZ2dlckZvciwgTHlNZW51SXRlbSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInNoYWRvd0J1aWxkZXIiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJrZXlmcmFtZXMiLCJzdHlsZSIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIklucHV0IiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIkx5T3ZlcmxheSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSIsIkx4RG9tTW9kdWxlIiwiTHlPdmVybGF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENB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