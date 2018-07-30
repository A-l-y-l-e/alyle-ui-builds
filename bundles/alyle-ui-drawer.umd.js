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
     * @suppress {checkTypes} checked by tsc
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
                var /** @type {?} */ array = this.margin.split(' ');
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
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        LyDrawerContent.propDecorators = {
            "margin": [{ type: core.HostBinding, args: ['style.margin',] },],
            "_lyAnimation": [{ type: core.HostBinding, args: ['class.ly--animation',] },],
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
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: animations.AnimationBuilder, },
            ];
        };
        LyDrawerContainer.propDecorators = {
            "_drawers": [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyDrawer; }),] },],
            "_drawerContent": [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyDrawerContent; }),] },],
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
                    var /** @type {?} */ width = this.config.width;
                    var /** @type {?} */ height = this.config.height;
                    if (width !== 0 && this.position === 'left' || this.position === 'right') {
                        var /** @type {?} */ margin = {};
                        margin[this.position] = width;
                        this.drawerContainer._drawerContent.setContentStyle(margin);
                    }
                    if (height !== 0 && this.position === 'top' || this.position === 'bottom') {
                        var /** @type {?} */ margin = {};
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
                var /** @type {?} */ margin = {};
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
                { type: LyDrawerContainer, decorators: [{ type: core.Optional },] },
                { type: core.ElementRef, },
            ];
        };
        LyDrawer.propDecorators = {
            "config": [{ type: core.Input },],
            "mode": [{ type: core.HostBinding, args: ['attr.mode',] }, { type: core.Input },],
            "position": [{ type: core.HostBinding, args: ['attr.position',] }, { type: core.Input },],
            "isShowDrawer": [{ type: core.HostBinding, args: ['class.ly-show-drawer',] },],
            "isOpenDrawer": [{ type: core.HostBinding, args: ['@visibilityChanged',] },],
            "isDrawerHidden": [{ type: core.HostBinding, args: ['class.ly-drawer-hidden',] },],
            "opened": [{ type: core.Input },],
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
     * @suppress {checkTypes} checked by tsc
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawer = LyDrawer;
    exports.LyDrawerModule = LyDrawerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgSW5wdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBRdWVyeUxpc3QsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmFuZG9tSWQsIE5nVHJhbnNjbHVkZU1vZHVsZSwgSXNCb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIHRyaWdnZXIsIHN0YXRlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFyZ2luIHtcbiAgdG9wPzogc3RyaW5nO1xuICBsZWZ0Pzogc3RyaW5nO1xuICByaWdodD86IHN0cmluZztcbiAgYm90dG9tPzogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250ZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKSBtYXJnaW4gPSAnMCAwIDAgMCc7XG4gIF9lbDogSFRNTEVsZW1lbnQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktLWFuaW1hdGlvbicpIF9seUFuaW1hdGlvbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHNldENvbnRlbnRTdHlsZShtYXJnaW46IFN0eWxlTWFyZ2luKSB7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLm1hcmdpbi5zcGxpdCgnICcpO1xuICAgIGlmIChtYXJnaW4ubGVmdCkge1xuICAgICAgYXJyYXlbM10gPSBgJHttYXJnaW4ubGVmdH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4ucmlnaHQpIHtcbiAgICAgIGFycmF5WzFdID0gYCR7bWFyZ2luLnJpZ2h0fXB4YDtcbiAgICB9XG4gICAgaWYgKG1hcmdpbi50b3ApIHtcbiAgICAgIGFycmF5WzBdID0gYCR7bWFyZ2luLnRvcH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4uYm90dG9tKSB7XG4gICAgICBhcnJheVsyXSA9IGAke21hcmdpbi5ib3R0b219cHhgO1xuICAgIH1cbiAgICB0aGlzLm1hcmdpbiA9IGFycmF5LmpvaW4oJyAnKTtcbiAgICAvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobWFyZ2luKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGNvbnN0IGtleU5hbWUgPSBrZXlzW2ldO1xuICAgIC8vICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9kcmF3ZXJDb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG1hcmdpbi0ke2tleU5hbWV9YCwgYCR7bWFyZ2luW2tleU5hbWVdfXB4YCk7XG4gICAgLy8gfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250YWluZXInLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0IDo6bmctZGVlcD5seS1kcmF3ZXItY29udGVudHtoZWlnaHQ6MTAwJTtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6YmxvY2t9Omhvc3QgOjpuZy1kZWVwPmx5LWRyYXdlci1jb250ZW50Lmx5LS1hbmltYXRpb257dHJhbnNpdGlvbjozNzVtcyBjdWJpYy1iZXppZXIoLjQ1LDAsLjI1LDEpfS5seS1kcmF3ZXItYmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7b3BhY2l0eTouNjt6LWluZGV4OjEwOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubHktZHJhd2VyLWJnLW9wZW5lZHtkaXNwbGF5OmJsb2NrfS5seS1kcmF3ZXItYmctY2xvc2Vke2Rpc3BsYXk6bm9uZX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2luJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlLCAwJyAsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCAnZGlzcGxheSc6ICdub25lJyB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlLCAxJyAsIHN0eWxlKHsgb3BhY2l0eTogJy42JyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGFjdGl2ZScsIGFuaW1hdGUoJzM3NW1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMzc1bXMgZWFzZS1vdXQnKSksXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZHJhd2VyXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kcmF3ZXItY29udGVudFwiPjwvbmctY29udGVudD5cbiAgPGRpdlxuICAjYmdcbiAgW2NsYXNzLmx5LWRyYXdlci1iZy1vcGVuZWRdPVwiaXNEcmF3ZXJCZyB8IGFzeW5jXCJcbiAgW2NsYXNzLmx5LWRyYXdlci1iZy1jbG9zZWRdPVwiIShpc0RyYXdlckJnIHwgYXN5bmMpXCJcbiAgW0Bpbl09XCJpc0RyYXdlckJnIHwgYXN5bmNcIiBjbGFzcz1cImx5LWRyYXdlci1iZ1wiXG4gIGJnPVwiZHJhd2VyOmJhY2tkcm9wXCJcbiAgKGNsaWNrKT1cIl9jbG9zZUFsbFNpZGVBbmRQdXNoKClcIlxuICA+PC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseURyYXdlckNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICBpc0RyYXdlckJnID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnYWN0aXZlJyB8ICdpbmFjdGl2ZScgfCBib29sZWFuPihmYWxzZSk7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlcikpIF9kcmF3ZXJzOiBRdWVyeUxpc3Q8THlEcmF3ZXI+O1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSkgX2RyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXJcbiAgKSB7fVxuXG4gIF9jbG9zZUFsbFNpZGVBbmRQdXNoKCkge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyOiBMeURyYXdlcikgPT4ge1xuICAgICAgaWYgKGRyYXdlci5tb2RlID09PSAnb3ZlcicgfHwgZHJhd2VyLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgICBkcmF3ZXIuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5pc0RyYXdlckJnLm5leHQoJ2luYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQ2xvc2UgYWxsIG9wZW4gZHJhd2VycyAqL1xuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goKGRyYXdlcjogTHlEcmF3ZXIpID0+IHtcbiAgICAgIGlmIChkcmF3ZXIub3Blbikge1xuICAgICAgICBkcmF3ZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmlzRHJhd2VyQmcubmV4dCgnaW5hY3RpdmUnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1uYXYsIGx5LWRyYXdlcicsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzphdXRvO3otaW5kZXg6MTF9Omhvc3RbcG9zaXRpb249dG9wXXt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfTpob3N0W3Bvc2l0aW9uPWxlZnRde2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfTpob3N0W3Bvc2l0aW9uPXJpZ2h0XSw6aG9zdFtwb3NpdGlvbj1ydGxde3JpZ2h0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9Omhvc3RbcG9zaXRpb249Ym90dG9tXXtib3R0b206MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX06aG9zdC5seS1zaG93LWRyYXdlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX06aG9zdC5seS1kcmF3ZXItaGlkZGVue3Zpc2liaWxpdHk6aGlkZGVufWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZWQnLCBbXG4gICAgICBzdGF0ZSgndHJ1ZSwgb3BlbicgLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IG9wZW4sICogPT4gY2xvc2UnLCBbXG4gICAgICAgIGFuaW1hdGUoJzM3NW1zIGN1YmljLWJlemllciguNDUsIDAsIC4yNSwgMSknKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbmZpZzogTHlEcmF3ZXJDb25maWcgPSB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDIwMFxuICB9O1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubW9kZScpIEBJbnB1dCgpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdzaWRlJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnBvc2l0aW9uJykgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ3J0bCcgPSAnbGVmdCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktc2hvdy1kcmF3ZXInKSBpc1Nob3dEcmF3ZXI6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnQHZpc2liaWxpdHlDaGFuZ2VkJylcbiAgaXNPcGVuRHJhd2VyOiAnb3BlbicgfCAnY2xvc2UnIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWRyYXdlci1oaWRkZW4nKSBpc0RyYXdlckhpZGRlbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIEBJc0Jvb2xlYW4oKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gdmFsO1xuICAgIHRoaXMuX29wZW5lZCA9IHZhbDtcbiAgICB2YWwgPyB0aGlzLm9wZW4odHJ1ZSkgOiB0aGlzLmNsb3NlKGZhbHNlKTtcbiAgfVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3BlbmVkOyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7IH1cblxuICBnZXQgX2VsZW1lbnRSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRHJhd2VyTWFyZ2luKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzaWRlJyB8fCB0aGlzLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmNvbmZpZy53aWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY29uZmlnLmhlaWdodDtcbiAgICAgIGlmICh3aWR0aCAhPT0gMCAmJiB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB7fTtcbiAgICAgICAgbWFyZ2luW3RoaXMucG9zaXRpb25dID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50LnNldENvbnRlbnRTdHlsZShtYXJnaW4pO1xuICAgICAgfVxuICAgICAgaWYgKGhlaWdodCAhPT0gMCAmJiB0aGlzLnBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB7fTtcbiAgICAgICAgbWFyZ2luW3RoaXMucG9zaXRpb25dID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b0Jvb2xlYW4oZHJhd2VyU3RhdGU6IGJvb2xlYW4gfCAnb3BlbicgfCAnY2xvc2UnKTogYm9vbGVhbiB7XG4gICAgaWYgKGRyYXdlclN0YXRlID09PSB0cnVlIHx8IGRyYXdlclN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMudG9Cb29sZWFuKHRoaXMuaXNPcGVuRHJhd2VyKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbiAgb3Blbihpcz86IHRydWUpOiAnb3BlbicgfCBib29sZWFuIHtcbiAgICB0aGlzLnRvb2dsZURyYXdlcihpcyk7XG4gICAgdGhpcy5pc0RyYXdlckhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gaXMgfHwgJ29wZW4nO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9seUFuaW1hdGlvbiA9IHRoaXMuaXNPcGVuRHJhd2VyID09PSAnb3Blbic7XG4gICAgdGhpcy51cGRhdGVEcmF3ZXJNYXJnaW4oKTtcbiAgICB0aGlzLnNldEJnU3RhdGUoaXMgfHwgJ2FjdGl2ZScpO1xuICAgIHJldHVybiB0aGlzLmlzT3BlbkRyYXdlcjtcbiAgfVxuICBjbG9zZShpcz86IGZhbHNlKTogJ2Nsb3NlJyB8IGJvb2xlYW4ge1xuICAgIHRoaXMudG9vZ2xlRHJhd2VyKGlzKTtcbiAgICB0aGlzLnJlc2V0TWFyZ2luKCk7XG4gICAgdGhpcy5pc09wZW5EcmF3ZXIgPSBpcyA9PT0gZmFsc2UgfHwgaXMgPT09IHRydWUgPyBmYWxzZSA6ICdjbG9zZSc7XG4gICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2x5QW5pbWF0aW9uID0gdGhpcy5pc09wZW5EcmF3ZXIgPT09ICdjbG9zZSc7XG4gICAgdGhpcy5zZXRCZ1N0YXRlKGlzID09PSBmYWxzZSA/IGZhbHNlIDogJ2luYWN0aXZlJyk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuRHJhd2VyO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29nbGVEcmF3ZXIoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1Nob3dEcmF3ZXIgPSB0aGlzLnRvQm9vbGVhbihzdGF0dXMpO1xuICB9XG5cbiAgc2V0QmdTdGF0ZShiZ1N0YXRlOiBib29sZWFuIHwgJ2FjdGl2ZScgfCAnaW5hY3RpdmUnKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ292ZXInIHx8IHRoaXMubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5pc0RyYXdlckJnLm5leHQoYmdTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRNYXJnaW4oKSB7XG4gICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgbWFyZ2luW3RoaXMucG9zaXRpb25dID0gJzAnO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50LnNldENvbnRlbnRTdHlsZShtYXJnaW4pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLyoqZm9yIGBwb3NpdGlvbmAgY2hhbmdlcyAqL1xuICAgICAgaWYgKGtleSA9PT0gJ3Bvc2l0aW9uJyAmJiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlID09PSAncnRsJykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZGF0ZSBtb2RlICovXG4gICAgICBpZiAoY2hhbmdlc1snbW9kZSddICYmICFjaGFuZ2VzW2tleV0uZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy50b0Jvb2xlYW4odGhpcy5pc09wZW5EcmF3ZXIpID8gdGhpcy5vcGVuKHRydWUpIDogdGhpcy5jbG9zZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5RHJhd2VyQ29uZmlnIHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnQgfSBmcm9tICcuL2RyYXdlcic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJIb3N0QmluZGluZyIsIkJlaGF2aW9yU3ViamVjdCIsIkNvbXBvbmVudCIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkFuaW1hdGlvbkJ1aWxkZXIiLCJDb250ZW50Q2hpbGRyZW4iLCJmb3J3YXJkUmVmIiwiQ29udGVudENoaWxkIiwiT3B0aW9uYWwiLCJJbnB1dCIsIklzQm9vbGVhbiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHdCQW9DMkIsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7QUFFRCx3QkFJMkIsV0FBVyxFQUFFLGFBQWE7UUFDakQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25JLENBQUM7Ozs7Ozs7UUNiQyx5QkFDUyxZQUNBO1lBREEsZUFBVSxHQUFWLFVBQVU7WUFDVixhQUFRLEdBQVIsUUFBUTswQkFMcUIsU0FBUztnQ0FFSSxJQUFJO1lBS3JELElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUNyQzs7Ozs7UUFFRCx5Q0FBZTs7OztZQUFmLFVBQWdCLE1BQW1CO2dCQUNqQyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQU0sTUFBTSxDQUFDLElBQUksT0FBSSxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7b0JBQ2hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBTSxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUM7aUJBQ2hDO2dCQUNELElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQU0sTUFBTSxDQUFDLEdBQUcsT0FBSSxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBTSxNQUFNLENBQUMsTUFBTSxPQUFJLENBQUM7aUJBQ2pDO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7O2FBTS9COztvQkFsQ0ZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3FCQUM5Qjs7Ozs7d0JBdkNDQyxlQUFVO3dCQWtCVkMsY0FBUzs7OzsrQkF1QlJDLGdCQUFXLFNBQUMsY0FBYztxQ0FFMUJBLGdCQUFXLFNBQUMscUJBQXFCOzs4QkFqRHBDOzs7UUErR0UsMkJBQ1UsVUFDQSxZQUNBO1lBRkEsYUFBUSxHQUFSLFFBQVE7WUFDUixlQUFVLEdBQVYsVUFBVTtZQUNWLHFCQUFnQixHQUFoQixnQkFBZ0I7OEJBTmIsSUFBSUMsb0JBQWUsQ0FBa0MsS0FBSyxDQUFDO1NBT3BFOzs7O1FBRUosZ0RBQW9COzs7WUFBcEI7Z0JBQUEsaUJBT0M7Z0JBTkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFnQjtvQkFDckMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTt3QkFDcEQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUNsQztpQkFDRixDQUFDLENBQUM7YUFDSjs7Ozs7O1FBR0Qsb0NBQVE7Ozs7WUFBUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWdCO29CQUNyQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNoQjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbEM7O29CQXRERkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLE1BQU0sRUFBRSxDQUFDLGtnQkFBa2dCLENBQUM7d0JBQzVnQixVQUFVLEVBQUU7NEJBQ1ZDLGtCQUFPLENBQUMsSUFBSSxFQUFFO2dDQUNaQyxnQkFBSyxDQUFDLGFBQWEsRUFBR0MsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0NBQ2pFRCxnQkFBSyxDQUFDLFdBQVcsRUFBR0MsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dDQUM3Q0MscUJBQVUsQ0FBQyxhQUFhLEVBQUVDLGtCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0NBQ25ERCxxQkFBVSxDQUFDLGVBQWUsRUFBRUMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzZCQUN2RCxDQUFDO3lCQUNIO3dCQUNELFFBQVEsRUFBRSxrWEFXVDt3QkFDRCxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7d0JBQzFCLFFBQVEsRUFBRSxtQkFBbUI7cUJBQzlCOzs7Ozt3QkFsRkNULGNBQVM7d0JBbEJURCxlQUFVO3dCQTRCSFcsMkJBQWdCOzs7O2lDQTJFdEJDLG9CQUFlLFNBQUNDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxHQUFBLENBQUM7dUNBQzFDQyxpQkFBWSxTQUFDRCxlQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsR0FBQSxDQUFDOztnQ0E5R2pEOzs7UUE4S0Usa0JBQ3NCLGlCQUNaO1lBRFksb0JBQWUsR0FBZixlQUFlO1lBQzNCLGVBQVUsR0FBVixVQUFVOzJCQXRCRixLQUFLOzBCQUNXO2dCQUNoQyxLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNaO3dCQUNtRSxNQUFNOzRCQUNxQixNQUFNO2dDQUcxRCxLQUFLO2tDQUNRLElBQUk7U0FhdkQ7OEJBVkQsNEJBQU07OztnQkFLVixjQUF3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7OzswQkFMbkMsR0FBWTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztRQVM1QyxzQkFBSSxrQ0FBWTs7O2dCQUFoQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDOUQ7OztXQUFBOzs7O1FBRU8scUNBQWtCOzs7O2dCQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNoRCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO3dCQUN4RSxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM3RDtvQkFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7d0JBQ3pFLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO3dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzdEO2lCQUNGOzs7Ozs7UUFHSCw0QkFBUzs7OztZQUFULFVBQVUsV0FBdUM7Z0JBQy9DLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFO29CQUNsRCxPQUFPLElBQUksQ0FBQztpQkFDYjtxQkFBTTtvQkFDTCxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGOzs7O1FBRUQseUJBQU07OztZQUFOO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEU7Ozs7O1FBRUQsdUJBQUk7Ozs7WUFBSixVQUFLLEVBQVM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDO2dCQUNoRixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxQjs7Ozs7UUFDRCx3QkFBSzs7OztZQUFMLFVBQU0sRUFBVTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxLQUFLLEtBQUssSUFBSSxFQUFFLEtBQUssSUFBSSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQztnQkFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzFCOzs7OztRQUVPLCtCQUFZOzs7O3NCQUFDLE1BQWU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O1FBRzdDLDZCQUFVOzs7O1lBQVYsVUFBVyxPQUF3QztnQkFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQzthQUNGOzs7O1FBRUQsOEJBQVc7OztZQUFYO2dCQUNFLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7Ozs7O1FBRUQsOEJBQVc7Ozs7WUFBWCxVQUFZLE9BQXNCO2dCQUFsQyxpQkFZQztnQkFYQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7O29CQUUvQixJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7d0JBQzdELEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO3FCQUN6Qjs7b0JBR0QsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFO3dCQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3pFO2lCQUNGLENBQUMsQ0FBQzthQUNKOztvQkF6SEZULGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixNQUFNLEVBQUUsQ0FBQyxnb0JBQWdvQixDQUFDO3dCQUMxb0IsVUFBVSxFQUFFOzRCQUNWQyxrQkFBTyxDQUFDLG1CQUFtQixFQUFFO2dDQUMzQkMsZ0JBQUssQ0FBQyxZQUFZLEVBQUdDLGdCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO2dDQUNsRUMscUJBQVUsQ0FBQyx1QkFBdUIsRUFBRTtvQ0FDbENDLGtCQUFPLENBQUMsb0NBQW9DLENBQUM7aUNBQzlDLENBQUM7NkJBQ0gsQ0FBQzt5QkFDSDt3QkFDRCxRQUFRLEVBQUUsMkJBQTJCO3dCQUNyQyxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7d0JBQzFCLFFBQVEsRUFBRSxVQUFVO3FCQUNyQjs7Ozs7d0JBN0NZLGlCQUFpQix1QkFvRXpCSyxhQUFRO3dCQXpLWGYsZUFBVTs7OzsrQkFxSlRnQixVQUFLOzZCQUlMZCxnQkFBVyxTQUFDLFdBQVcsY0FBR2MsVUFBSztpQ0FDL0JkLGdCQUFXLFNBQUMsZUFBZSxjQUFHYyxVQUFLO3FDQUNuQ2QsZ0JBQVcsU0FBQyxzQkFBc0I7cUNBQ2xDQSxnQkFBVyxTQUFDLG9CQUFvQjt1Q0FFaENBLGdCQUFXLFNBQUMsd0JBQXdCOytCQUNwQ2MsVUFBSzs7O1lBQ0xDLFlBQVMsRUFBRTs7Ozt1QkF0S2Q7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLGlCQUFjO3lCQUNmO3dCQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7d0JBQ3ZELFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7cUJBQzdEOzs2QkFaRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=