(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/animations'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/drawer', ['exports', '@angular/core', '@alyle/ui', '@angular/animations', 'rxjs', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.drawer = {}),global.ng.core,global.alyle.ui,global.ng.animations,global.rxjs,global.ng.common));
}(this, (function (exports,core,ui,animations,rxjs,common) { 'use strict';

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
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyDrawerContent = /** @class */ (function () {
        function LyDrawerContent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.margin = '0 0 0 0';
            this._lyAnimation = true;
            this._el = elementRef.nativeElement;
        }
        /**
         * @param {?} margin
         * @return {?}
         */
        LyDrawerContent.prototype.setContentStyle = /**
         * @param {?} margin
         * @return {?}
         */
            function (margin) {
                /** @type {?} */
                var array = this.margin.split(' ');
                if (margin.left) {
                    array[3] = margin.left + "px";
                }
                if (margin.right) {
                    array[1] = margin.right + "px";
                }
                if (margin.top) {
                    array[0] = margin.top + "px";
                }
                if (margin.bottom) {
                    array[2] = margin.bottom + "px";
                }
                this.margin = array.join(' ');
                // const keys = Object.keys(margin);
                // for (let i = 0; i < keys.length; i++) {
                //   const keyName = keys[i];
                //   this.renderer.setStyle(this._drawerContent.elementRef.nativeElement, `margin-${keyName}`, `${margin[keyName]}px`);
                // }
            };
        LyDrawerContent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-drawer-content'
                    },] },
        ];
        /** @nocollapse */
        LyDrawerContent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        LyDrawerContent.propDecorators = {
            margin: [{ type: core.HostBinding, args: ['style.margin',] }],
            _lyAnimation: [{ type: core.HostBinding, args: ['class.ly--animation',] }]
        };
        return LyDrawerContent;
    }());
    var LyDrawerContainer = /** @class */ (function () {
        function LyDrawerContainer(renderer, elementRef, animationBuilder) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.animationBuilder = animationBuilder;
            this.isDrawerBg = new rxjs.BehaviorSubject(false);
        }
        /**
         * @return {?}
         */
        LyDrawerContainer.prototype._closeAllSideAndPush = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._drawers.forEach(function (drawer) {
                    if (drawer.mode === 'over' || drawer.mode === 'push') {
                        drawer.close();
                        _this.isDrawerBg.next('inactive');
                    }
                });
            };
        /** Close all open drawers */
        /**
         * Close all open drawers
         * @return {?}
         */
        LyDrawerContainer.prototype.closeAll = /**
         * Close all open drawers
         * @return {?}
         */
            function () {
                this._drawers.forEach(function (drawer) {
                    if (drawer.open) {
                        drawer.close();
                    }
                });
                this.isDrawerBg.next('inactive');
            };
        LyDrawerContainer.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-drawer-container',
                        styles: [":host{display:block;overflow:hidden;-webkit-overflow-scrolling:touch;box-sizing:border-box;position:relative}:host ::ng-deep>ly-drawer-content{height:100%;overflow:auto;display:block}:host ::ng-deep>ly-drawer-content.ly--animation{transition:375ms cubic-bezier(.45,0,.25,1)}.ly-drawer-bg{position:absolute;top:0;left:0;right:0;bottom:0;opacity:.6;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ly-drawer-bg-opened{display:block}.ly-drawer-bg-closed{display:none}"],
                        animations: [
                            animations.trigger('in', [
                                animations.state('inactive, 0', animations.style({ opacity: '0', 'display': 'none' })),
                                animations.state('active, 1', animations.style({ opacity: '.6' })),
                                animations.transition('* => active', animations.animate('375ms ease-in')),
                                animations.transition('* => inactive', animations.animate('375ms ease-out')),
                            ])
                        ],
                        template: "\n  <ng-content select=\"ly-drawer\"></ng-content>\n  <ng-content select=\"ly-drawer-content\"></ng-content>\n  <div\n  #bg\n  [class.ly-drawer-bg-opened]=\"isDrawerBg | async\"\n  [class.ly-drawer-bg-closed]=\"!(isDrawerBg | async)\"\n  [@in]=\"isDrawerBg | async\" class=\"ly-drawer-bg\"\n  bg=\"drawer:backdrop\"\n  (click)=\"_closeAllSideAndPush()\"\n  ></div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        exportAs: 'lyDrawerContainer'
                    },] },
        ];
        /** @nocollapse */
        LyDrawerContainer.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: animations.AnimationBuilder }
            ];
        };
        LyDrawerContainer.propDecorators = {
            _drawers: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyDrawer; }),] }],
            _drawerContent: [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyDrawerContent; }),] }]
        };
        return LyDrawerContainer;
    }());
    var LyDrawer = /** @class */ (function () {
        function LyDrawer(drawerContainer, elementRef) {
            this.drawerContainer = drawerContainer;
            this.elementRef = elementRef;
            this._opened = false;
            this.config = {
                width: 200,
                height: 200
            };
            this.mode = 'side';
            this.position = 'left';
            this.isOpenDrawer = false;
            this.isDrawerHidden = true;
        }
        Object.defineProperty(LyDrawer.prototype, "opened", {
            get: /**
             * @return {?}
             */ function () { return this._opened; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this.isOpenDrawer = val;
                this._opened = val;
                val ? this.open(true) : this.close(false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "_elementRect", {
            get: /**
             * @return {?}
             */ function () {
                return this.elementRef.nativeElement.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyDrawer.prototype.updateDrawerMargin = /**
         * @return {?}
         */
            function () {
                if (this.mode === 'side' || this.mode === 'push') {
                    /** @type {?} */
                    var width = this.config.width;
                    /** @type {?} */
                    var height = this.config.height;
                    if (width !== 0 && this.position === 'left' || this.position === 'right') {
                        /** @type {?} */
                        var margin = {};
                        margin[this.position] = width;
                        this.drawerContainer._drawerContent.setContentStyle(margin);
                    }
                    if (height !== 0 && this.position === 'top' || this.position === 'bottom') {
                        /** @type {?} */
                        var margin = {};
                        margin[this.position] = height;
                        this.drawerContainer._drawerContent.setContentStyle(margin);
                    }
                }
            };
        /**
         * @param {?} drawerState
         * @return {?}
         */
        LyDrawer.prototype.toBoolean = /**
         * @param {?} drawerState
         * @return {?}
         */
            function (drawerState) {
                if (drawerState === true || drawerState === 'open') {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.toBoolean(this.isOpenDrawer) ? this.close() : this.open();
            };
        /**
         * @param {?=} is
         * @return {?}
         */
        LyDrawer.prototype.open = /**
         * @param {?=} is
         * @return {?}
         */
            function (is) {
                this.toogleDrawer(is);
                this.isDrawerHidden = false;
                this.isOpenDrawer = is || 'open';
                this.drawerContainer._drawerContent._lyAnimation = this.isOpenDrawer === 'open';
                this.updateDrawerMargin();
                this.setBgState(is || 'active');
                return this.isOpenDrawer;
            };
        /**
         * @param {?=} is
         * @return {?}
         */
        LyDrawer.prototype.close = /**
         * @param {?=} is
         * @return {?}
         */
            function (is) {
                this.toogleDrawer(is);
                this.resetMargin();
                this.isOpenDrawer = is === false || is === true ? false : 'close';
                this.drawerContainer._drawerContent._lyAnimation = this.isOpenDrawer === 'close';
                this.setBgState(is === false ? false : 'inactive');
                return this.isOpenDrawer;
            };
        /**
         * @param {?} status
         * @return {?}
         */
        LyDrawer.prototype.toogleDrawer = /**
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this.isShowDrawer = this.toBoolean(status);
            };
        /**
         * @param {?} bgState
         * @return {?}
         */
        LyDrawer.prototype.setBgState = /**
         * @param {?} bgState
         * @return {?}
         */
            function (bgState) {
                if (this.mode === 'over' || this.mode === 'push') {
                    this.drawerContainer.isDrawerBg.next(bgState);
                }
            };
        /**
         * @return {?}
         */
        LyDrawer.prototype.resetMargin = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var margin = {};
                margin[this.position] = '0';
                this.drawerContainer._drawerContent.setContentStyle(margin);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LyDrawer.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                Object.keys(changes).forEach(function (key) {
                    /**for `position` changes */
                    if (key === 'position' && changes[key].currentValue === 'rtl') {
                        _this.position = 'right';
                    }
                    /** Update mode */
                    if (changes['mode'] && !changes[key].firstChange) {
                        _this.toBoolean(_this.isOpenDrawer) ? _this.open(true) : _this.close(false);
                    }
                });
            };
        LyDrawer.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-nav, ly-drawer',
                        styles: [":host{display:block;position:fixed;box-sizing:border-box;overflow:auto;z-index:11}:host[position=top]{top:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}:host[position=left]{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}:host[position=right],:host[position=rtl]{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}:host[position=bottom]{bottom:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}:host.ly-show-drawer{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host.ly-drawer-hidden{visibility:hidden}"],
                        animations: [
                            animations.trigger('visibilityChanged', [
                                animations.state('true, open', animations.style({ transform: 'translate3d(0, 0, 0)' })),
                                animations.transition('* => open, * => close', [
                                    animations.animate('375ms cubic-bezier(.45, 0, .25, 1)')
                                ])
                            ])
                        ],
                        template: "<ng-content></ng-content>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        exportAs: 'lyDrawer'
                    },] },
        ];
        /** @nocollapse */
        LyDrawer.ctorParameters = function () {
            return [
                { type: LyDrawerContainer, decorators: [{ type: core.Optional }] },
                { type: core.ElementRef }
            ];
        };
        LyDrawer.propDecorators = {
            config: [{ type: core.Input }],
            mode: [{ type: core.HostBinding, args: ['attr.mode',] }, { type: core.Input }],
            position: [{ type: core.HostBinding, args: ['attr.position',] }, { type: core.Input }],
            isShowDrawer: [{ type: core.HostBinding, args: ['class.ly-show-drawer',] }],
            isOpenDrawer: [{ type: core.HostBinding, args: ['@visibilityChanged',] }],
            isDrawerHidden: [{ type: core.HostBinding, args: ['class.ly-drawer-hidden',] }],
            opened: [{ type: core.Input }]
        };
        __decorate([
            ui.IsBoolean(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyDrawer.prototype, "opened", null);
        return LyDrawer;
    }());

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

    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawer = LyDrawer;
    exports.LyDrawerModule = LyDrawerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElzQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCB0cmlnZ2VyLCBzdGF0ZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcmdpbiB7XG4gIHRvcD86IHN0cmluZztcbiAgbGVmdD86IHN0cmluZztcbiAgcmlnaHQ/OiBzdHJpbmc7XG4gIGJvdHRvbT86IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgbWFyZ2luID0gJzAgMCAwIDAnO1xuICBfZWw6IEhUTUxFbGVtZW50O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LS1hbmltYXRpb24nKSBfbHlBbmltYXRpb24gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBzZXRDb250ZW50U3R5bGUobWFyZ2luOiBTdHlsZU1hcmdpbikge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXJnaW4uc3BsaXQoJyAnKTtcbiAgICBpZiAobWFyZ2luLmxlZnQpIHtcbiAgICAgIGFycmF5WzNdID0gYCR7bWFyZ2luLmxlZnR9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLnJpZ2h0KSB7XG4gICAgICBhcnJheVsxXSA9IGAke21hcmdpbi5yaWdodH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4udG9wKSB7XG4gICAgICBhcnJheVswXSA9IGAke21hcmdpbi50b3B9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLmJvdHRvbSkge1xuICAgICAgYXJyYXlbMl0gPSBgJHttYXJnaW4uYm90dG9tfXB4YDtcbiAgICB9XG4gICAgdGhpcy5tYXJnaW4gPSBhcnJheS5qb2luKCcgJyk7XG4gICAgLy8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcmdpbik7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBrZXlOYW1lID0ga2V5c1tpXTtcbiAgICAvLyAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZHJhd2VyQ29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXJnaW4tJHtrZXlOYW1lfWAsIGAke21hcmdpbltrZXlOYW1lXX1weGApO1xuICAgIC8vIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCA6Om5nLWRlZXA+bHktZHJhd2VyLWNvbnRlbnR7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcD5seS1kcmF3ZXItY29udGVudC5seS0tYW5pbWF0aW9ue3RyYW5zaXRpb246Mzc1bXMgY3ViaWMtYmV6aWVyKC40NSwwLC4yNSwxKX0ubHktZHJhd2VyLWJne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO29wYWNpdHk6LjY7ei1pbmRleDoxMDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Lmx5LWRyYXdlci1iZy1vcGVuZWR7ZGlzcGxheTpibG9ja30ubHktZHJhd2VyLWJnLWNsb3NlZHtkaXNwbGF5Om5vbmV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbicsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZSwgMCcgLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgJ2Rpc3BsYXknOiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZSwgMScgLCBzdHlsZSh7IG9wYWNpdHk6ICcuNicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBhY3RpdmUnLCBhbmltYXRlKCczNzVtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzM3NW1zIGVhc2Utb3V0JykpLFxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRyYXdlclwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZHJhd2VyLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gIDxkaXZcbiAgI2JnXG4gIFtjbGFzcy5seS1kcmF3ZXItYmctb3BlbmVkXT1cImlzRHJhd2VyQmcgfCBhc3luY1wiXG4gIFtjbGFzcy5seS1kcmF3ZXItYmctY2xvc2VkXT1cIiEoaXNEcmF3ZXJCZyB8IGFzeW5jKVwiXG4gIFtAaW5dPVwiaXNEcmF3ZXJCZyB8IGFzeW5jXCIgY2xhc3M9XCJseS1kcmF3ZXItYmdcIlxuICBiZz1cImRyYXdlcjpiYWNrZHJvcFwiXG4gIChjbGljayk9XCJfY2xvc2VBbGxTaWRlQW5kUHVzaCgpXCJcbiAgPjwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXJDb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGFpbmVyIHtcbiAgaXNEcmF3ZXJCZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2FjdGl2ZScgfCAnaW5hY3RpdmUnIHwgYm9vbGVhbj4oZmFsc2UpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXIpKSBfZHJhd2VyczogUXVlcnlMaXN0PEx5RHJhd2VyPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge31cblxuICBfY2xvc2VBbGxTaWRlQW5kUHVzaCgpIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goKGRyYXdlcjogTHlEcmF3ZXIpID0+IHtcbiAgICAgIGlmIChkcmF3ZXIubW9kZSA9PT0gJ292ZXInIHx8IGRyYXdlci5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuaXNEcmF3ZXJCZy5uZXh0KCdpbmFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIENsb3NlIGFsbCBvcGVuIGRyYXdlcnMgKi9cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXI6IEx5RHJhd2VyKSA9PiB7XG4gICAgICBpZiAoZHJhd2VyLm9wZW4pIHtcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pc0RyYXdlckJnLm5leHQoJ2luYWN0aXZlJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbmF2LCBseS1kcmF3ZXInLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6YXV0bzt6LWluZGV4OjExfTpob3N0W3Bvc2l0aW9uPXRvcF17dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX06aG9zdFtwb3NpdGlvbj1sZWZ0XXtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX06aG9zdFtwb3NpdGlvbj1yaWdodF0sOmhvc3RbcG9zaXRpb249cnRsXXtyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfTpob3N0W3Bvc2l0aW9uPWJvdHRvbV17Ym90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9Omhvc3QubHktc2hvdy1kcmF3ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9Omhvc3QubHktZHJhd2VyLWhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Zpc2liaWxpdHlDaGFuZ2VkJywgW1xuICAgICAgc3RhdGUoJ3RydWUsIG9wZW4nICwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBvcGVuLCAqID0+IGNsb3NlJywgW1xuICAgICAgICBhbmltYXRlKCczNzVtcyBjdWJpYy1iZXppZXIoLjQ1LCAwLCAuMjUsIDEpJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb25maWc6IEx5RHJhd2VyQ29uZmlnID0ge1xuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyMDBcbiAgfTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKSBASW5wdXQoKSBtb2RlOiAnc2lkZScgfCAncHVzaCcgfCAnb3ZlcicgPSAnc2lkZSc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5wb3NpdGlvbicpIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdydGwnID0gJ2xlZnQnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LXNob3ctZHJhd2VyJykgaXNTaG93RHJhd2VyOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ0B2aXNpYmlsaXR5Q2hhbmdlZCcpXG4gIGlzT3BlbkRyYXdlcjogJ29wZW4nIHwgJ2Nsb3NlJyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1kcmF3ZXItaGlkZGVuJykgaXNEcmF3ZXJIaWRkZW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBASXNCb29sZWFuKClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IHZhbDtcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWw7XG4gICAgdmFsID8gdGhpcy5vcGVuKHRydWUpIDogdGhpcy5jbG9zZShmYWxzZSk7XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lcixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG5cbiAgZ2V0IF9lbGVtZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURyYXdlck1hcmdpbigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc2lkZScgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jb25maWcud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgICBpZiAod2lkdGggIT09IDAgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9IHdpZHRoO1xuICAgICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHQgIT09IDAgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9Cb29sZWFuKGRyYXdlclN0YXRlOiBib29sZWFuIHwgJ29wZW4nIHwgJ2Nsb3NlJyk6IGJvb2xlYW4ge1xuICAgIGlmIChkcmF3ZXJTdGF0ZSA9PT0gdHJ1ZSB8fCBkcmF3ZXJTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnRvQm9vbGVhbih0aGlzLmlzT3BlbkRyYXdlcikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIG9wZW4oaXM/OiB0cnVlKTogJ29wZW4nIHwgYm9vbGVhbiB7XG4gICAgdGhpcy50b29nbGVEcmF3ZXIoaXMpO1xuICAgIHRoaXMuaXNEcmF3ZXJIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IGlzIHx8ICdvcGVuJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fbHlBbmltYXRpb24gPSB0aGlzLmlzT3BlbkRyYXdlciA9PT0gJ29wZW4nO1xuICAgIHRoaXMudXBkYXRlRHJhd2VyTWFyZ2luKCk7XG4gICAgdGhpcy5zZXRCZ1N0YXRlKGlzIHx8ICdhY3RpdmUnKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5EcmF3ZXI7XG4gIH1cbiAgY2xvc2UoaXM/OiBmYWxzZSk6ICdjbG9zZScgfCBib29sZWFuIHtcbiAgICB0aGlzLnRvb2dsZURyYXdlcihpcyk7XG4gICAgdGhpcy5yZXNldE1hcmdpbigpO1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gaXMgPT09IGZhbHNlIHx8IGlzID09PSB0cnVlID8gZmFsc2UgOiAnY2xvc2UnO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9seUFuaW1hdGlvbiA9IHRoaXMuaXNPcGVuRHJhd2VyID09PSAnY2xvc2UnO1xuICAgIHRoaXMuc2V0QmdTdGF0ZShpcyA9PT0gZmFsc2UgPyBmYWxzZSA6ICdpbmFjdGl2ZScpO1xuICAgIHJldHVybiB0aGlzLmlzT3BlbkRyYXdlcjtcbiAgfVxuXG4gIHByaXZhdGUgdG9vZ2xlRHJhd2VyKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuaXNTaG93RHJhd2VyID0gdGhpcy50b0Jvb2xlYW4oc3RhdHVzKTtcbiAgfVxuXG4gIHNldEJnU3RhdGUoYmdTdGF0ZTogYm9vbGVhbiB8ICdhY3RpdmUnIHwgJ2luYWN0aXZlJykge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdvdmVyJyB8fCB0aGlzLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuaXNEcmF3ZXJCZy5uZXh0KGJnU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TWFyZ2luKCkge1xuICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9ICcwJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8qKmZvciBgcG9zaXRpb25gIGNoYW5nZXMgKi9cbiAgICAgIGlmIChrZXkgPT09ICdwb3NpdGlvbicgJiYgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGRhdGUgbW9kZSAqL1xuICAgICAgaWYgKGNoYW5nZXNbJ21vZGUnXSAmJiAhY2hhbmdlc1trZXldLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMudG9Cb29sZWFuKHRoaXMuaXNPcGVuRHJhd2VyKSA/IHRoaXMub3Blbih0cnVlKSA6IHRoaXMuY2xvc2UoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeURyYXdlckNvbmZpZyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9kcmF3ZXInO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSG9zdEJpbmRpbmciLCJCZWhhdmlvclN1YmplY3QiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJBbmltYXRpb25CdWlsZGVyIiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIkNvbnRlbnRDaGlsZCIsIk9wdGlvbmFsIiwiSW5wdXQi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