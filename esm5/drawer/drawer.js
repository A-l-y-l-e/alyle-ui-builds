/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, ElementRef, Input, ContentChildren, ContentChild, QueryList, ChangeDetectionStrategy, forwardRef, HostBinding, Optional, Renderer2 } from '@angular/core';
import { IsBoolean } from '@alyle/ui';
import { AnimationBuilder, trigger, state, animate, transition, style } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
/**
 * @record
 */
export function StyleMargin() { }
function StyleMargin_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    StyleMargin.prototype.top;
    /** @type {?|undefined} */
    StyleMargin.prototype.left;
    /** @type {?|undefined} */
    StyleMargin.prototype.right;
    /** @type {?|undefined} */
    StyleMargin.prototype.bottom;
}
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
        { type: Directive, args: [{
                    selector: 'ly-drawer-content'
                },] },
    ];
    /** @nocollapse */
    LyDrawerContent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    LyDrawerContent.propDecorators = {
        "margin": [{ type: HostBinding, args: ['style.margin',] },],
        "_lyAnimation": [{ type: HostBinding, args: ['class.ly--animation',] },],
    };
    return LyDrawerContent;
}());
export { LyDrawerContent };
function LyDrawerContent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyDrawerContent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyDrawerContent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyDrawerContent.propDecorators;
    /** @type {?} */
    LyDrawerContent.prototype.margin;
    /** @type {?} */
    LyDrawerContent.prototype._el;
    /** @type {?} */
    LyDrawerContent.prototype._lyAnimation;
    /** @type {?} */
    LyDrawerContent.prototype.elementRef;
    /** @type {?} */
    LyDrawerContent.prototype.renderer;
}
var LyDrawerContainer = /** @class */ (function () {
    function LyDrawerContainer(renderer, elementRef, animationBuilder) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.animationBuilder = animationBuilder;
        this.isDrawerBg = new BehaviorSubject(false);
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
        { type: Component, args: [{
                    selector: 'ly-drawer-container',
                    styles: [":host{display:block;overflow:hidden;-webkit-overflow-scrolling:touch;box-sizing:border-box;position:relative}:host ::ng-deep>ly-drawer-content{height:100%;overflow:auto;display:block}:host ::ng-deep>ly-drawer-content.ly--animation{transition:375ms cubic-bezier(.45,0,.25,1)}.ly-drawer-bg{position:absolute;top:0;left:0;right:0;bottom:0;opacity:.6;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ly-drawer-bg-opened{display:block}.ly-drawer-bg-closed{display:none}"],
                    animations: [
                        trigger('in', [
                            state('inactive, 0', style({ opacity: '0', 'display': 'none' })),
                            state('active, 1', style({ opacity: '.6' })),
                            transition('* => active', animate('375ms ease-in')),
                            transition('* => inactive', animate('375ms ease-out')),
                        ])
                    ],
                    template: "\n  <ng-content select=\"ly-drawer\"></ng-content>\n  <ng-content select=\"ly-drawer-content\"></ng-content>\n  <div\n  #bg\n  [class.ly-drawer-bg-opened]=\"isDrawerBg | async\"\n  [class.ly-drawer-bg-closed]=\"!(isDrawerBg | async)\"\n  [@in]=\"isDrawerBg | async\" class=\"ly-drawer-bg\"\n  bg=\"drawer:backdrop\"\n  (click)=\"_closeAllSideAndPush()\"\n  ></div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    exportAs: 'lyDrawerContainer'
                },] },
    ];
    /** @nocollapse */
    LyDrawerContainer.ctorParameters = function () { return [
        { type: Renderer2, },
        { type: ElementRef, },
        { type: AnimationBuilder, },
    ]; };
    LyDrawerContainer.propDecorators = {
        "_drawers": [{ type: ContentChildren, args: [forwardRef(function () { return LyDrawer; }),] },],
        "_drawerContent": [{ type: ContentChild, args: [forwardRef(function () { return LyDrawerContent; }),] },],
    };
    return LyDrawerContainer;
}());
export { LyDrawerContainer };
function LyDrawerContainer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyDrawerContainer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyDrawerContainer.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyDrawerContainer.propDecorators;
    /** @type {?} */
    LyDrawerContainer.prototype.isDrawerBg;
    /** @type {?} */
    LyDrawerContainer.prototype._drawers;
    /** @type {?} */
    LyDrawerContainer.prototype._drawerContent;
    /** @type {?} */
    LyDrawerContainer.prototype.renderer;
    /** @type {?} */
    LyDrawerContainer.prototype.elementRef;
    /** @type {?} */
    LyDrawerContainer.prototype.animationBuilder;
}
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
         */
        function () { return this._opened; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'ly-nav, ly-drawer',
                    styles: [":host{display:block;position:fixed;box-sizing:border-box;overflow:auto;z-index:11}:host[position=top]{top:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}:host[position=left]{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}:host[position=right],:host[position=rtl]{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}:host[position=bottom]{bottom:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}:host.ly-show-drawer{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host.ly-drawer-hidden{visibility:hidden}"],
                    animations: [
                        trigger('visibilityChanged', [
                            state('true, open', style({ transform: 'translate3d(0, 0, 0)' })),
                            transition('* => open, * => close', [
                                animate('375ms cubic-bezier(.45, 0, .25, 1)')
                            ])
                        ])
                    ],
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    exportAs: 'lyDrawer'
                },] },
    ];
    /** @nocollapse */
    LyDrawer.ctorParameters = function () { return [
        { type: LyDrawerContainer, decorators: [{ type: Optional },] },
        { type: ElementRef, },
    ]; };
    LyDrawer.propDecorators = {
        "config": [{ type: Input },],
        "mode": [{ type: HostBinding, args: ['attr.mode',] }, { type: Input },],
        "position": [{ type: HostBinding, args: ['attr.position',] }, { type: Input },],
        "isShowDrawer": [{ type: HostBinding, args: ['class.ly-show-drawer',] },],
        "isOpenDrawer": [{ type: HostBinding, args: ['@visibilityChanged',] },],
        "isDrawerHidden": [{ type: HostBinding, args: ['class.ly-drawer-hidden',] },],
        "opened": [{ type: Input },],
    };
    tslib_1.__decorate([
        IsBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyDrawer.prototype, "opened", null);
    return LyDrawer;
}());
export { LyDrawer };
function LyDrawer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyDrawer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyDrawer.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyDrawer.propDecorators;
    /** @type {?} */
    LyDrawer.prototype._opened;
    /** @type {?} */
    LyDrawer.prototype.config;
    /** @type {?} */
    LyDrawer.prototype.mode;
    /** @type {?} */
    LyDrawer.prototype.position;
    /** @type {?} */
    LyDrawer.prototype.isShowDrawer;
    /** @type {?} */
    LyDrawer.prototype.isOpenDrawer;
    /** @type {?} */
    LyDrawer.prototype.isDrawerHidden;
    /** @type {?} */
    LyDrawer.prototype.drawerContainer;
    /** @type {?} */
    LyDrawer.prototype.elementRef;
}
/**
 * @record
 */
export function LyDrawerConfig() { }
function LyDrawerConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    LyDrawerConfig.prototype.width;
    /** @type {?|undefined} */
    LyDrawerConfig.prototype.height;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUdULFVBQVUsRUFHVixLQUFLLEVBRUwsZUFBZSxFQUNmLFlBQVksRUFDWixTQUFTLEVBQ1QsdUJBQXVCLEVBTXZCLFVBQVUsRUFFVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFNVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWdDLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlckMseUJBQ1MsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7c0JBTHFCLFNBQVM7NEJBRUksSUFBSTtRQUtyRCxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDckM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixNQUFtQjtRQUNqQyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFNLE1BQU0sQ0FBQyxJQUFJLE9BQUksQ0FBQztTQUMvQjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQU0sTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxNQUFN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NkJBQy9CLFdBQVcsU0FBQyxlQUFlLGNBQUcsS0FBSztpQ0FDbkMsV0FBVyxTQUFDLHNCQUFzQjtpQ0FDbEMsV0FBVyxTQUFDLG9CQUFvQjttQ0FFaEMsV0FBVyxTQUFDLHdCQUF3QjsyQkFDcEMsS0FBSzs7O1FBQ0wsU0FBUyxFQUFFOzs7O21CQXRLZDs7U0F5SmEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIElucHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJhbmRvbUlkLCBOZ1RyYW5zY2x1ZGVNb2R1bGUsIElzQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCB0cmlnZ2VyLCBzdGF0ZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcmdpbiB7XG4gIHRvcD86IHN0cmluZztcbiAgbGVmdD86IHN0cmluZztcbiAgcmlnaHQ/OiBzdHJpbmc7XG4gIGJvdHRvbT86IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgbWFyZ2luID0gJzAgMCAwIDAnO1xuICBfZWw6IEhUTUxFbGVtZW50O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LS1hbmltYXRpb24nKSBfbHlBbmltYXRpb24gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBzZXRDb250ZW50U3R5bGUobWFyZ2luOiBTdHlsZU1hcmdpbikge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXJnaW4uc3BsaXQoJyAnKTtcbiAgICBpZiAobWFyZ2luLmxlZnQpIHtcbiAgICAgIGFycmF5WzNdID0gYCR7bWFyZ2luLmxlZnR9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLnJpZ2h0KSB7XG4gICAgICBhcnJheVsxXSA9IGAke21hcmdpbi5yaWdodH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4udG9wKSB7XG4gICAgICBhcnJheVswXSA9IGAke21hcmdpbi50b3B9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLmJvdHRvbSkge1xuICAgICAgYXJyYXlbMl0gPSBgJHttYXJnaW4uYm90dG9tfXB4YDtcbiAgICB9XG4gICAgdGhpcy5tYXJnaW4gPSBhcnJheS5qb2luKCcgJyk7XG4gICAgLy8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcmdpbik7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBrZXlOYW1lID0ga2V5c1tpXTtcbiAgICAvLyAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZHJhd2VyQ29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXJnaW4tJHtrZXlOYW1lfWAsIGAke21hcmdpbltrZXlOYW1lXX1weGApO1xuICAgIC8vIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCA6Om5nLWRlZXA+bHktZHJhd2VyLWNvbnRlbnR7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcD5seS1kcmF3ZXItY29udGVudC5seS0tYW5pbWF0aW9ue3RyYW5zaXRpb246Mzc1bXMgY3ViaWMtYmV6aWVyKC40NSwwLC4yNSwxKX0ubHktZHJhd2VyLWJne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO29wYWNpdHk6LjY7ei1pbmRleDoxMDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Lmx5LWRyYXdlci1iZy1vcGVuZWR7ZGlzcGxheTpibG9ja30ubHktZHJhd2VyLWJnLWNsb3NlZHtkaXNwbGF5Om5vbmV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbicsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZSwgMCcgLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgJ2Rpc3BsYXknOiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZSwgMScgLCBzdHlsZSh7IG9wYWNpdHk6ICcuNicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBhY3RpdmUnLCBhbmltYXRlKCczNzVtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzM3NW1zIGVhc2Utb3V0JykpLFxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRyYXdlclwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZHJhd2VyLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gIDxkaXZcbiAgI2JnXG4gIFtjbGFzcy5seS1kcmF3ZXItYmctb3BlbmVkXT1cImlzRHJhd2VyQmcgfCBhc3luY1wiXG4gIFtjbGFzcy5seS1kcmF3ZXItYmctY2xvc2VkXT1cIiEoaXNEcmF3ZXJCZyB8IGFzeW5jKVwiXG4gIFtAaW5dPVwiaXNEcmF3ZXJCZyB8IGFzeW5jXCIgY2xhc3M9XCJseS1kcmF3ZXItYmdcIlxuICBiZz1cImRyYXdlcjpiYWNrZHJvcFwiXG4gIChjbGljayk9XCJfY2xvc2VBbGxTaWRlQW5kUHVzaCgpXCJcbiAgPjwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXJDb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGFpbmVyIHtcbiAgaXNEcmF3ZXJCZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2FjdGl2ZScgfCAnaW5hY3RpdmUnIHwgYm9vbGVhbj4oZmFsc2UpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXIpKSBfZHJhd2VyczogUXVlcnlMaXN0PEx5RHJhd2VyPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge31cblxuICBfY2xvc2VBbGxTaWRlQW5kUHVzaCgpIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goKGRyYXdlcjogTHlEcmF3ZXIpID0+IHtcbiAgICAgIGlmIChkcmF3ZXIubW9kZSA9PT0gJ292ZXInIHx8IGRyYXdlci5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuaXNEcmF3ZXJCZy5uZXh0KCdpbmFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIENsb3NlIGFsbCBvcGVuIGRyYXdlcnMgKi9cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXI6IEx5RHJhd2VyKSA9PiB7XG4gICAgICBpZiAoZHJhd2VyLm9wZW4pIHtcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pc0RyYXdlckJnLm5leHQoJ2luYWN0aXZlJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbmF2LCBseS1kcmF3ZXInLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6YXV0bzt6LWluZGV4OjExfTpob3N0W3Bvc2l0aW9uPXRvcF17dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX06aG9zdFtwb3NpdGlvbj1sZWZ0XXtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX06aG9zdFtwb3NpdGlvbj1yaWdodF0sOmhvc3RbcG9zaXRpb249cnRsXXtyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfTpob3N0W3Bvc2l0aW9uPWJvdHRvbV17Ym90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9Omhvc3QubHktc2hvdy1kcmF3ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9Omhvc3QubHktZHJhd2VyLWhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Zpc2liaWxpdHlDaGFuZ2VkJywgW1xuICAgICAgc3RhdGUoJ3RydWUsIG9wZW4nICwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBvcGVuLCAqID0+IGNsb3NlJywgW1xuICAgICAgICBhbmltYXRlKCczNzVtcyBjdWJpYy1iZXppZXIoLjQ1LCAwLCAuMjUsIDEpJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb25maWc6IEx5RHJhd2VyQ29uZmlnID0ge1xuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyMDBcbiAgfTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKSBASW5wdXQoKSBtb2RlOiAnc2lkZScgfCAncHVzaCcgfCAnb3ZlcicgPSAnc2lkZSc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5wb3NpdGlvbicpIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdydGwnID0gJ2xlZnQnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LXNob3ctZHJhd2VyJykgaXNTaG93RHJhd2VyOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ0B2aXNpYmlsaXR5Q2hhbmdlZCcpXG4gIGlzT3BlbkRyYXdlcjogJ29wZW4nIHwgJ2Nsb3NlJyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1kcmF3ZXItaGlkZGVuJykgaXNEcmF3ZXJIaWRkZW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBASXNCb29sZWFuKClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IHZhbDtcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWw7XG4gICAgdmFsID8gdGhpcy5vcGVuKHRydWUpIDogdGhpcy5jbG9zZShmYWxzZSk7XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lcixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG5cbiAgZ2V0IF9lbGVtZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURyYXdlck1hcmdpbigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc2lkZScgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jb25maWcud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgICBpZiAod2lkdGggIT09IDAgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9IHdpZHRoO1xuICAgICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHQgIT09IDAgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9Cb29sZWFuKGRyYXdlclN0YXRlOiBib29sZWFuIHwgJ29wZW4nIHwgJ2Nsb3NlJyk6IGJvb2xlYW4ge1xuICAgIGlmIChkcmF3ZXJTdGF0ZSA9PT0gdHJ1ZSB8fCBkcmF3ZXJTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnRvQm9vbGVhbih0aGlzLmlzT3BlbkRyYXdlcikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIG9wZW4oaXM/OiB0cnVlKTogJ29wZW4nIHwgYm9vbGVhbiB7XG4gICAgdGhpcy50b29nbGVEcmF3ZXIoaXMpO1xuICAgIHRoaXMuaXNEcmF3ZXJIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IGlzIHx8ICdvcGVuJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fbHlBbmltYXRpb24gPSB0aGlzLmlzT3BlbkRyYXdlciA9PT0gJ29wZW4nO1xuICAgIHRoaXMudXBkYXRlRHJhd2VyTWFyZ2luKCk7XG4gICAgdGhpcy5zZXRCZ1N0YXRlKGlzIHx8ICdhY3RpdmUnKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5EcmF3ZXI7XG4gIH1cbiAgY2xvc2UoaXM/OiBmYWxzZSk6ICdjbG9zZScgfCBib29sZWFuIHtcbiAgICB0aGlzLnRvb2dsZURyYXdlcihpcyk7XG4gICAgdGhpcy5yZXNldE1hcmdpbigpO1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gaXMgPT09IGZhbHNlIHx8IGlzID09PSB0cnVlID8gZmFsc2UgOiAnY2xvc2UnO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9seUFuaW1hdGlvbiA9IHRoaXMuaXNPcGVuRHJhd2VyID09PSAnY2xvc2UnO1xuICAgIHRoaXMuc2V0QmdTdGF0ZShpcyA9PT0gZmFsc2UgPyBmYWxzZSA6ICdpbmFjdGl2ZScpO1xuICAgIHJldHVybiB0aGlzLmlzT3BlbkRyYXdlcjtcbiAgfVxuXG4gIHByaXZhdGUgdG9vZ2xlRHJhd2VyKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuaXNTaG93RHJhd2VyID0gdGhpcy50b0Jvb2xlYW4oc3RhdHVzKTtcbiAgfVxuXG4gIHNldEJnU3RhdGUoYmdTdGF0ZTogYm9vbGVhbiB8ICdhY3RpdmUnIHwgJ2luYWN0aXZlJykge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdvdmVyJyB8fCB0aGlzLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuaXNEcmF3ZXJCZy5uZXh0KGJnU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TWFyZ2luKCkge1xuICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9ICcwJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8qKmZvciBgcG9zaXRpb25gIGNoYW5nZXMgKi9cbiAgICAgIGlmIChrZXkgPT09ICdwb3NpdGlvbicgJiYgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGRhdGUgbW9kZSAqL1xuICAgICAgaWYgKGNoYW5nZXNbJ21vZGUnXSAmJiAhY2hhbmdlc1trZXldLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMudG9Cb29sZWFuKHRoaXMuaXNPcGVuRHJhd2VyKSA/IHRoaXMub3Blbih0cnVlKSA6IHRoaXMuY2xvc2UoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeURyYXdlckNvbmZpZyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG4iXX0=