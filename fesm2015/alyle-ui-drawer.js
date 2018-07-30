import { __decorate, __metadata } from 'tslib';
import { Component, Directive, ElementRef, Input, ContentChildren, ContentChild, ChangeDetectionStrategy, forwardRef, HostBinding, Optional, Renderer2, NgModule } from '@angular/core';
import { IsBoolean, LyCommonModule } from '@alyle/ui';
import { AnimationBuilder, trigger, state, animate, transition, style } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyDrawerContent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
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
    setContentStyle(margin) {
        const /** @type {?} */ array = this.margin.split(' ');
        if (margin.left) {
            array[3] = `${margin.left}px`;
        }
        if (margin.right) {
            array[1] = `${margin.right}px`;
        }
        if (margin.top) {
            array[0] = `${margin.top}px`;
        }
        if (margin.bottom) {
            array[2] = `${margin.bottom}px`;
        }
        this.margin = array.join(' ');
        // const keys = Object.keys(margin);
        // for (let i = 0; i < keys.length; i++) {
        //   const keyName = keys[i];
        //   this.renderer.setStyle(this._drawerContent.elementRef.nativeElement, `margin-${keyName}`, `${margin[keyName]}px`);
        // }
    }
}
LyDrawerContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-drawer-content'
            },] },
];
/** @nocollapse */
LyDrawerContent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
LyDrawerContent.propDecorators = {
    "margin": [{ type: HostBinding, args: ['style.margin',] },],
    "_lyAnimation": [{ type: HostBinding, args: ['class.ly--animation',] },],
};
class LyDrawerContainer {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} animationBuilder
     */
    constructor(renderer, elementRef, animationBuilder) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.animationBuilder = animationBuilder;
        this.isDrawerBg = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    _closeAllSideAndPush() {
        this._drawers.forEach((drawer) => {
            if (drawer.mode === 'over' || drawer.mode === 'push') {
                drawer.close();
                this.isDrawerBg.next('inactive');
            }
        });
    }
    /**
     * Close all open drawers
     * @return {?}
     */
    closeAll() {
        this._drawers.forEach((drawer) => {
            if (drawer.open) {
                drawer.close();
            }
        });
        this.isDrawerBg.next('inactive');
    }
}
LyDrawerContainer.decorators = [
    { type: Component, args: [{
                selector: 'ly-drawer-container',
                styles: [`:host{display:block;overflow:hidden;-webkit-overflow-scrolling:touch;box-sizing:border-box;position:relative}:host ::ng-deep>ly-drawer-content{height:100%;overflow:auto;display:block}:host ::ng-deep>ly-drawer-content.ly--animation{transition:375ms cubic-bezier(.45,0,.25,1)}.ly-drawer-bg{position:absolute;top:0;left:0;right:0;bottom:0;opacity:.6;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ly-drawer-bg-opened{display:block}.ly-drawer-bg-closed{display:none}`],
                animations: [
                    trigger('in', [
                        state('inactive, 0', style({ opacity: '0', 'display': 'none' })),
                        state('active, 1', style({ opacity: '.6' })),
                        transition('* => active', animate('375ms ease-in')),
                        transition('* => inactive', animate('375ms ease-out')),
                    ])
                ],
                template: `
  <ng-content select="ly-drawer"></ng-content>
  <ng-content select="ly-drawer-content"></ng-content>
  <div
  #bg
  [class.ly-drawer-bg-opened]="isDrawerBg | async"
  [class.ly-drawer-bg-closed]="!(isDrawerBg | async)"
  [@in]="isDrawerBg | async" class="ly-drawer-bg"
  bg="drawer:backdrop"
  (click)="_closeAllSideAndPush()"
  ></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                exportAs: 'lyDrawerContainer'
            },] },
];
/** @nocollapse */
LyDrawerContainer.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: AnimationBuilder, },
];
LyDrawerContainer.propDecorators = {
    "_drawers": [{ type: ContentChildren, args: [forwardRef(() => LyDrawer),] },],
    "_drawerContent": [{ type: ContentChild, args: [forwardRef(() => LyDrawerContent),] },],
};
class LyDrawer {
    /**
     * @param {?} drawerContainer
     * @param {?} elementRef
     */
    constructor(drawerContainer, elementRef) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set opened(val) {
        this.isOpenDrawer = val;
        this._opened = val;
        val ? this.open(true) : this.close(false);
    }
    /**
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @return {?}
     */
    get _elementRect() {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @return {?}
     */
    updateDrawerMargin() {
        if (this.mode === 'side' || this.mode === 'push') {
            const /** @type {?} */ width = this.config.width;
            const /** @type {?} */ height = this.config.height;
            if (width !== 0 && this.position === 'left' || this.position === 'right') {
                const /** @type {?} */ margin = {};
                margin[this.position] = width;
                this.drawerContainer._drawerContent.setContentStyle(margin);
            }
            if (height !== 0 && this.position === 'top' || this.position === 'bottom') {
                const /** @type {?} */ margin = {};
                margin[this.position] = height;
                this.drawerContainer._drawerContent.setContentStyle(margin);
            }
        }
    }
    /**
     * @param {?} drawerState
     * @return {?}
     */
    toBoolean(drawerState) {
        if (drawerState === true || drawerState === 'open') {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.toBoolean(this.isOpenDrawer) ? this.close() : this.open();
    }
    /**
     * @param {?=} is
     * @return {?}
     */
    open(is) {
        this.toogleDrawer(is);
        this.isDrawerHidden = false;
        this.isOpenDrawer = is || 'open';
        this.drawerContainer._drawerContent._lyAnimation = this.isOpenDrawer === 'open';
        this.updateDrawerMargin();
        this.setBgState(is || 'active');
        return this.isOpenDrawer;
    }
    /**
     * @param {?=} is
     * @return {?}
     */
    close(is) {
        this.toogleDrawer(is);
        this.resetMargin();
        this.isOpenDrawer = is === false || is === true ? false : 'close';
        this.drawerContainer._drawerContent._lyAnimation = this.isOpenDrawer === 'close';
        this.setBgState(is === false ? false : 'inactive');
        return this.isOpenDrawer;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    toogleDrawer(status) {
        this.isShowDrawer = this.toBoolean(status);
    }
    /**
     * @param {?} bgState
     * @return {?}
     */
    setBgState(bgState) {
        if (this.mode === 'over' || this.mode === 'push') {
            this.drawerContainer.isDrawerBg.next(bgState);
        }
    }
    /**
     * @return {?}
     */
    resetMargin() {
        const /** @type {?} */ margin = {};
        margin[this.position] = '0';
        this.drawerContainer._drawerContent.setContentStyle(margin);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        Object.keys(changes).forEach((key) => {
            /**for `position` changes */
            if (key === 'position' && changes[key].currentValue === 'rtl') {
                this.position = 'right';
            }
            /** Update mode */
            if (changes['mode'] && !changes[key].firstChange) {
                this.toBoolean(this.isOpenDrawer) ? this.open(true) : this.close(false);
            }
        });
    }
}
LyDrawer.decorators = [
    { type: Component, args: [{
                selector: 'ly-nav, ly-drawer',
                styles: [`:host{display:block;position:fixed;box-sizing:border-box;overflow:auto;z-index:11}:host[position=top]{top:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}:host[position=left]{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}:host[position=right],:host[position=rtl]{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}:host[position=bottom]{bottom:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}:host.ly-show-drawer{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host.ly-drawer-hidden{visibility:hidden}`],
                animations: [
                    trigger('visibilityChanged', [
                        state('true, open', style({ transform: 'translate3d(0, 0, 0)' })),
                        transition('* => open, * => close', [
                            animate('375ms cubic-bezier(.45, 0, .25, 1)')
                        ])
                    ])
                ],
                template: `<ng-content></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                exportAs: 'lyDrawer'
            },] },
];
/** @nocollapse */
LyDrawer.ctorParameters = () => [
    { type: LyDrawerContainer, decorators: [{ type: Optional },] },
    { type: ElementRef, },
];
LyDrawer.propDecorators = {
    "config": [{ type: Input },],
    "mode": [{ type: HostBinding, args: ['attr.mode',] }, { type: Input },],
    "position": [{ type: HostBinding, args: ['attr.position',] }, { type: Input },],
    "isShowDrawer": [{ type: HostBinding, args: ['class.ly-show-drawer',] },],
    "isOpenDrawer": [{ type: HostBinding, args: ['@visibilityChanged',] },],
    "isDrawerHidden": [{ type: HostBinding, args: ['class.ly-drawer-hidden',] },],
    "opened": [{ type: Input },],
};
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyDrawer.prototype, "opened", null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyDrawerModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyDrawerContent, LyDrawerContainer, LyDrawer, LyDrawerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIElucHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJhbmRvbUlkLCBOZ1RyYW5zY2x1ZGVNb2R1bGUsIElzQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCB0cmlnZ2VyLCBzdGF0ZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcmdpbiB7XG4gIHRvcD86IHN0cmluZztcbiAgbGVmdD86IHN0cmluZztcbiAgcmlnaHQ/OiBzdHJpbmc7XG4gIGJvdHRvbT86IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgbWFyZ2luID0gJzAgMCAwIDAnO1xuICBfZWw6IEhUTUxFbGVtZW50O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LS1hbmltYXRpb24nKSBfbHlBbmltYXRpb24gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBzZXRDb250ZW50U3R5bGUobWFyZ2luOiBTdHlsZU1hcmdpbikge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXJnaW4uc3BsaXQoJyAnKTtcbiAgICBpZiAobWFyZ2luLmxlZnQpIHtcbiAgICAgIGFycmF5WzNdID0gYCR7bWFyZ2luLmxlZnR9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLnJpZ2h0KSB7XG4gICAgICBhcnJheVsxXSA9IGAke21hcmdpbi5yaWdodH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4udG9wKSB7XG4gICAgICBhcnJheVswXSA9IGAke21hcmdpbi50b3B9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLmJvdHRvbSkge1xuICAgICAgYXJyYXlbMl0gPSBgJHttYXJnaW4uYm90dG9tfXB4YDtcbiAgICB9XG4gICAgdGhpcy5tYXJnaW4gPSBhcnJheS5qb2luKCcgJyk7XG4gICAgLy8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcmdpbik7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBrZXlOYW1lID0ga2V5c1tpXTtcbiAgICAvLyAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZHJhd2VyQ29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXJnaW4tJHtrZXlOYW1lfWAsIGAke21hcmdpbltrZXlOYW1lXX1weGApO1xuICAgIC8vIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCA6Om5nLWRlZXA+bHktZHJhd2VyLWNvbnRlbnR7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcD5seS1kcmF3ZXItY29udGVudC5seS0tYW5pbWF0aW9ue3RyYW5zaXRpb246Mzc1bXMgY3ViaWMtYmV6aWVyKC40NSwwLC4yNSwxKX0ubHktZHJhd2VyLWJne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO29wYWNpdHk6LjY7ei1pbmRleDoxMDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Lmx5LWRyYXdlci1iZy1vcGVuZWR7ZGlzcGxheTpibG9ja30ubHktZHJhd2VyLWJnLWNsb3NlZHtkaXNwbGF5Om5vbmV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbicsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZSwgMCcgLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgJ2Rpc3BsYXknOiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZSwgMScgLCBzdHlsZSh7IG9wYWNpdHk6ICcuNicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBhY3RpdmUnLCBhbmltYXRlKCczNzVtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzM3NW1zIGVhc2Utb3V0JykpLFxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRyYXdlclwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZHJhd2VyLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gIDxkaXZcbiAgI2JnXG4gIFtjbGFzcy5seS1kcmF3ZXItYmctb3BlbmVkXT1cImlzRHJhd2VyQmcgfCBhc3luY1wiXG4gIFtjbGFzcy5seS1kcmF3ZXItYmctY2xvc2VkXT1cIiEoaXNEcmF3ZXJCZyB8IGFzeW5jKVwiXG4gIFtAaW5dPVwiaXNEcmF3ZXJCZyB8IGFzeW5jXCIgY2xhc3M9XCJseS1kcmF3ZXItYmdcIlxuICBiZz1cImRyYXdlcjpiYWNrZHJvcFwiXG4gIChjbGljayk9XCJfY2xvc2VBbGxTaWRlQW5kUHVzaCgpXCJcbiAgPjwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXJDb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGFpbmVyIHtcbiAgaXNEcmF3ZXJCZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2FjdGl2ZScgfCAnaW5hY3RpdmUnIHwgYm9vbGVhbj4oZmFsc2UpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXIpKSBfZHJhd2VyczogUXVlcnlMaXN0PEx5RHJhd2VyPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge31cblxuICBfY2xvc2VBbGxTaWRlQW5kUHVzaCgpIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goKGRyYXdlcjogTHlEcmF3ZXIpID0+IHtcbiAgICAgIGlmIChkcmF3ZXIubW9kZSA9PT0gJ292ZXInIHx8IGRyYXdlci5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuaXNEcmF3ZXJCZy5uZXh0KCdpbmFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIENsb3NlIGFsbCBvcGVuIGRyYXdlcnMgKi9cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXI6IEx5RHJhd2VyKSA9PiB7XG4gICAgICBpZiAoZHJhd2VyLm9wZW4pIHtcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pc0RyYXdlckJnLm5leHQoJ2luYWN0aXZlJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbmF2LCBseS1kcmF3ZXInLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6YXV0bzt6LWluZGV4OjExfTpob3N0W3Bvc2l0aW9uPXRvcF17dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX06aG9zdFtwb3NpdGlvbj1sZWZ0XXtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX06aG9zdFtwb3NpdGlvbj1yaWdodF0sOmhvc3RbcG9zaXRpb249cnRsXXtyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfTpob3N0W3Bvc2l0aW9uPWJvdHRvbV17Ym90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9Omhvc3QubHktc2hvdy1kcmF3ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9Omhvc3QubHktZHJhd2VyLWhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Zpc2liaWxpdHlDaGFuZ2VkJywgW1xuICAgICAgc3RhdGUoJ3RydWUsIG9wZW4nICwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBvcGVuLCAqID0+IGNsb3NlJywgW1xuICAgICAgICBhbmltYXRlKCczNzVtcyBjdWJpYy1iZXppZXIoLjQ1LCAwLCAuMjUsIDEpJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb25maWc6IEx5RHJhd2VyQ29uZmlnID0ge1xuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyMDBcbiAgfTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKSBASW5wdXQoKSBtb2RlOiAnc2lkZScgfCAncHVzaCcgfCAnb3ZlcicgPSAnc2lkZSc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5wb3NpdGlvbicpIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdydGwnID0gJ2xlZnQnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LXNob3ctZHJhd2VyJykgaXNTaG93RHJhd2VyOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ0B2aXNpYmlsaXR5Q2hhbmdlZCcpXG4gIGlzT3BlbkRyYXdlcjogJ29wZW4nIHwgJ2Nsb3NlJyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1kcmF3ZXItaGlkZGVuJykgaXNEcmF3ZXJIaWRkZW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBASXNCb29sZWFuKClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IHZhbDtcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWw7XG4gICAgdmFsID8gdGhpcy5vcGVuKHRydWUpIDogdGhpcy5jbG9zZShmYWxzZSk7XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lcixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG5cbiAgZ2V0IF9lbGVtZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURyYXdlck1hcmdpbigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc2lkZScgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jb25maWcud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgICBpZiAod2lkdGggIT09IDAgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9IHdpZHRoO1xuICAgICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHQgIT09IDAgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9Cb29sZWFuKGRyYXdlclN0YXRlOiBib29sZWFuIHwgJ29wZW4nIHwgJ2Nsb3NlJyk6IGJvb2xlYW4ge1xuICAgIGlmIChkcmF3ZXJTdGF0ZSA9PT0gdHJ1ZSB8fCBkcmF3ZXJTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnRvQm9vbGVhbih0aGlzLmlzT3BlbkRyYXdlcikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIG9wZW4oaXM/OiB0cnVlKTogJ29wZW4nIHwgYm9vbGVhbiB7XG4gICAgdGhpcy50b29nbGVEcmF3ZXIoaXMpO1xuICAgIHRoaXMuaXNEcmF3ZXJIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IGlzIHx8ICdvcGVuJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fbHlBbmltYXRpb24gPSB0aGlzLmlzT3BlbkRyYXdlciA9PT0gJ29wZW4nO1xuICAgIHRoaXMudXBkYXRlRHJhd2VyTWFyZ2luKCk7XG4gICAgdGhpcy5zZXRCZ1N0YXRlKGlzIHx8ICdhY3RpdmUnKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5EcmF3ZXI7XG4gIH1cbiAgY2xvc2UoaXM/OiBmYWxzZSk6ICdjbG9zZScgfCBib29sZWFuIHtcbiAgICB0aGlzLnRvb2dsZURyYXdlcihpcyk7XG4gICAgdGhpcy5yZXNldE1hcmdpbigpO1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gaXMgPT09IGZhbHNlIHx8IGlzID09PSB0cnVlID8gZmFsc2UgOiAnY2xvc2UnO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9seUFuaW1hdGlvbiA9IHRoaXMuaXNPcGVuRHJhd2VyID09PSAnY2xvc2UnO1xuICAgIHRoaXMuc2V0QmdTdGF0ZShpcyA9PT0gZmFsc2UgPyBmYWxzZSA6ICdpbmFjdGl2ZScpO1xuICAgIHJldHVybiB0aGlzLmlzT3BlbkRyYXdlcjtcbiAgfVxuXG4gIHByaXZhdGUgdG9vZ2xlRHJhd2VyKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuaXNTaG93RHJhd2VyID0gdGhpcy50b0Jvb2xlYW4oc3RhdHVzKTtcbiAgfVxuXG4gIHNldEJnU3RhdGUoYmdTdGF0ZTogYm9vbGVhbiB8ICdhY3RpdmUnIHwgJ2luYWN0aXZlJykge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdvdmVyJyB8fCB0aGlzLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuaXNEcmF3ZXJCZy5uZXh0KGJnU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TWFyZ2luKCkge1xuICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgIG1hcmdpblt0aGlzLnBvc2l0aW9uXSA9ICcwJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8qKmZvciBgcG9zaXRpb25gIGNoYW5nZXMgKi9cbiAgICAgIGlmIChrZXkgPT09ICdwb3NpdGlvbicgJiYgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGRhdGUgbW9kZSAqL1xuICAgICAgaWYgKGNoYW5nZXNbJ21vZGUnXSAmJiAhY2hhbmdlc1trZXldLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMudG9Cb29sZWFuKHRoaXMuaXNPcGVuRHJhd2VyKSA/IHRoaXMub3Blbih0cnVlKSA6IHRoaXMuY2xvc2UoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeURyYXdlckNvbmZpZyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9kcmF3ZXInO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBa0RFLFlBQ1MsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7c0JBTHFCLFNBQVM7NEJBRUksSUFBSTtRQUtyRCxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDckM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQW1CO1FBQ2pDLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0tBTS9COzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUF2Q0MsVUFBVTtZQWtCVixTQUFTOzs7dUJBdUJSLFdBQVcsU0FBQyxjQUFjOzZCQUUxQixXQUFXLFNBQUMscUJBQXFCOzs7Ozs7OztJQThEbEMsWUFDVSxVQUNBLFlBQ0E7UUFGQSxhQUFRLEdBQVIsUUFBUTtRQUNSLGVBQVUsR0FBVixVQUFVO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQjswQkFOYixJQUFJLGVBQWUsQ0FBa0MsS0FBSyxDQUFDO0tBT3BFOzs7O0lBRUosb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBZ0I7WUFDckMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDcEQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBZ0I7WUFDckMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2xDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLE1BQU0sRUFBRSxDQUFDLGtnQkFBa2dCLENBQUM7Z0JBQzVnQixVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDWixLQUFLLENBQUMsYUFBYSxFQUFHLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7d0JBQ2pFLEtBQUssQ0FBQyxXQUFXLEVBQUcsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQzdDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNuRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUN2RCxDQUFDO2lCQUNIO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7OztZQWxGQyxTQUFTO1lBbEJULFVBQVU7WUE0QkgsZ0JBQWdCOzs7eUJBMkV0QixlQUFlLFNBQUMsVUFBVSxDQUFDLE1BQU0sUUFBUSxDQUFDOytCQUMxQyxZQUFZLFNBQUMsVUFBVSxDQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBZ0UvQyxZQUNzQixpQkFDWjtRQURZLG9CQUFlLEdBQWYsZUFBZTtRQUMzQixlQUFVLEdBQVYsVUFBVTt1QkF0QkYsS0FBSztzQkFDVztZQUNoQyxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1NBQ1o7b0JBQ21FLE1BQU07d0JBQ3FCLE1BQU07NEJBRzFELEtBQUs7OEJBQ1EsSUFBSTtLQWF2RDs7Ozs7UUFWRCxNQUFNLENBQUMsR0FBWTtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQUU1QyxJQUFJLE1BQU0sS0FBYyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7OztJQU85QyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUQ7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNoRCx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDaEMsdUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtnQkFDeEUsdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3RDtZQUNELElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDekUsdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3RDtTQUNGOzs7Ozs7SUFHSCxTQUFTLENBQUMsV0FBdUM7UUFDL0MsSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLFdBQVcsS0FBSyxNQUFNLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEU7Ozs7O0lBRUQsSUFBSSxDQUFDLEVBQVM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUM7UUFDaEYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUNELEtBQUssQ0FBQyxFQUFVO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSyxJQUFJLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUM7UUFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQWU7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7SUFHN0MsVUFBVSxDQUFDLE9BQXdDO1FBQ2pELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRzs7WUFFL0IsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO2dCQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzthQUN6Qjs7WUFHRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RTtTQUNGLENBQUMsQ0FBQztLQUNKOzs7WUF6SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLE1BQU0sRUFBRSxDQUFDLGdvQkFBZ29CLENBQUM7Z0JBQzFvQixVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLG1CQUFtQixFQUFFO3dCQUMzQixLQUFLLENBQUMsWUFBWSxFQUFHLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7d0JBQ2xFLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRTs0QkFDbEMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDO3lCQUM5QyxDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7O1lBN0NZLGlCQUFpQix1QkFvRXpCLFFBQVE7WUF6S1gsVUFBVTs7O3VCQXFKVCxLQUFLO3FCQUlMLFdBQVcsU0FBQyxXQUFXLGNBQUcsS0FBSzt5QkFDL0IsV0FBVyxTQUFDLGVBQWUsY0FBRyxLQUFLOzZCQUNuQyxXQUFXLFNBQUMsc0JBQXNCOzZCQUNsQyxXQUFXLFNBQUMsb0JBQW9COytCQUVoQyxXQUFXLFNBQUMsd0JBQXdCO3VCQUNwQyxLQUFLOzs7SUFDTCxTQUFTLEVBQUU7Ozs7Ozs7OztBQ3RLZDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztnQkFDdkQsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzthQUM3RDs7Ozs7Ozs7Ozs7Ozs7OyJ9