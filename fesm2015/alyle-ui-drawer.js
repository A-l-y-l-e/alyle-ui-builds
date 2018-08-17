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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyDrawerContent, LyDrawerContainer, LyDrawer, LyDrawerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJc0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgdHJpZ2dlciwgc3RhdGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXJnaW4ge1xuICB0b3A/OiBzdHJpbmc7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIHJpZ2h0Pzogc3RyaW5nO1xuICBib3R0b20/OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbicpIG1hcmdpbiA9ICcwIDAgMCAwJztcbiAgX2VsOiBIVE1MRWxlbWVudDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS0tYW5pbWF0aW9uJykgX2x5QW5pbWF0aW9uID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX2VsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgc2V0Q29udGVudFN0eWxlKG1hcmdpbjogU3R5bGVNYXJnaW4pIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMubWFyZ2luLnNwbGl0KCcgJyk7XG4gICAgaWYgKG1hcmdpbi5sZWZ0KSB7XG4gICAgICBhcnJheVszXSA9IGAke21hcmdpbi5sZWZ0fXB4YDtcbiAgICB9XG4gICAgaWYgKG1hcmdpbi5yaWdodCkge1xuICAgICAgYXJyYXlbMV0gPSBgJHttYXJnaW4ucmlnaHR9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLnRvcCkge1xuICAgICAgYXJyYXlbMF0gPSBgJHttYXJnaW4udG9wfXB4YDtcbiAgICB9XG4gICAgaWYgKG1hcmdpbi5ib3R0b20pIHtcbiAgICAgIGFycmF5WzJdID0gYCR7bWFyZ2luLmJvdHRvbX1weGA7XG4gICAgfVxuICAgIHRoaXMubWFyZ2luID0gYXJyYXkuam9pbignICcpO1xuICAgIC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtYXJnaW4pO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgY29uc3Qga2V5TmFtZSA9IGtleXNbaV07XG4gICAgLy8gICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2RyYXdlckNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbWFyZ2luLSR7a2V5TmFtZX1gLCBgJHttYXJnaW5ba2V5TmFtZV19cHhgKTtcbiAgICAvLyB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcicsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QgOjpuZy1kZWVwPmx5LWRyYXdlci1jb250ZW50e2hlaWdodDoxMDAlO292ZXJmbG93OmF1dG87ZGlzcGxheTpibG9ja306aG9zdCA6Om5nLWRlZXA+bHktZHJhd2VyLWNvbnRlbnQubHktLWFuaW1hdGlvbnt0cmFuc2l0aW9uOjM3NW1zIGN1YmljLWJlemllciguNDUsMCwuMjUsMSl9Lmx5LWRyYXdlci1iZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtvcGFjaXR5Oi42O3otaW5kZXg6MTA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5seS1kcmF3ZXItYmctb3BlbmVke2Rpc3BsYXk6YmxvY2t9Lmx5LWRyYXdlci1iZy1jbG9zZWR7ZGlzcGxheTpub25lfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignaW4nLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUsIDAnICwgc3R5bGUoeyBvcGFjaXR5OiAnMCcsICdkaXNwbGF5JzogJ25vbmUnIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUsIDEnICwgc3R5bGUoeyBvcGFjaXR5OiAnLjYnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gYWN0aXZlJywgYW5pbWF0ZSgnMzc1bXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaW5hY3RpdmUnLCBhbmltYXRlKCczNzVtcyBlYXNlLW91dCcpKSxcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kcmF3ZXJcIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRyYXdlci1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICA8ZGl2XG4gICNiZ1xuICBbY2xhc3MubHktZHJhd2VyLWJnLW9wZW5lZF09XCJpc0RyYXdlckJnIHwgYXN5bmNcIlxuICBbY2xhc3MubHktZHJhd2VyLWJnLWNsb3NlZF09XCIhKGlzRHJhd2VyQmcgfCBhc3luYylcIlxuICBbQGluXT1cImlzRHJhd2VyQmcgfCBhc3luY1wiIGNsYXNzPVwibHktZHJhd2VyLWJnXCJcbiAgYmc9XCJkcmF3ZXI6YmFja2Ryb3BcIlxuICAoY2xpY2spPVwiX2Nsb3NlQWxsU2lkZUFuZFB1c2goKVwiXG4gID48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5RHJhd2VyQ29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIGlzRHJhd2VyQmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdhY3RpdmUnIHwgJ2luYWN0aXZlJyB8IGJvb2xlYW4+KGZhbHNlKTtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyKSkgX2RyYXdlcnM6IFF1ZXJ5TGlzdDxMeURyYXdlcj47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBfZHJhd2VyQ29udGVudDogTHlEcmF3ZXJDb250ZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlclxuICApIHt9XG5cbiAgX2Nsb3NlQWxsU2lkZUFuZFB1c2goKSB7XG4gICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXI6IEx5RHJhd2VyKSA9PiB7XG4gICAgICBpZiAoZHJhd2VyLm1vZGUgPT09ICdvdmVyJyB8fCBkcmF3ZXIubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICAgIGRyYXdlci5jbG9zZSgpO1xuICAgICAgICB0aGlzLmlzRHJhd2VyQmcubmV4dCgnaW5hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDbG9zZSBhbGwgb3BlbiBkcmF3ZXJzICovXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyOiBMeURyYXdlcikgPT4ge1xuICAgICAgaWYgKGRyYXdlci5vcGVuKSB7XG4gICAgICAgIGRyYXdlci5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaXNEcmF3ZXJCZy5uZXh0KCdpbmFjdGl2ZScpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW5hdiwgbHktZHJhd2VyJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmF1dG87ei1pbmRleDoxMX06aG9zdFtwb3NpdGlvbj10b3Bde3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9Omhvc3RbcG9zaXRpb249bGVmdF17bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9Omhvc3RbcG9zaXRpb249cmlnaHRdLDpob3N0W3Bvc2l0aW9uPXJ0bF17cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX06aG9zdFtwb3NpdGlvbj1ib3R0b21de2JvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfTpob3N0Lmx5LXNob3ctZHJhd2Vyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfTpob3N0Lmx5LWRyYXdlci1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCd2aXNpYmlsaXR5Q2hhbmdlZCcsIFtcbiAgICAgIHN0YXRlKCd0cnVlLCBvcGVuJyAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gb3BlbiwgKiA9PiBjbG9zZScsIFtcbiAgICAgICAgYW5pbWF0ZSgnMzc1bXMgY3ViaWMtYmV6aWVyKC40NSwgMCwgLjI1LCAxKScpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseURyYXdlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY29uZmlnOiBMeURyYXdlckNvbmZpZyA9IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwXG4gIH07XG4gIEBIb3N0QmluZGluZygnYXR0ci5tb2RlJykgQElucHV0KCkgbW9kZTogJ3NpZGUnIHwgJ3B1c2gnIHwgJ292ZXInID0gJ3NpZGUnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucG9zaXRpb24nKSBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAncnRsJyA9ICdsZWZ0JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1zaG93LWRyYXdlcicpIGlzU2hvd0RyYXdlcjogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdAdmlzaWJpbGl0eUNoYW5nZWQnKVxuICBpc09wZW5EcmF3ZXI6ICdvcGVuJyB8ICdjbG9zZScgfCBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZHJhd2VyLWhpZGRlbicpIGlzRHJhd2VySGlkZGVuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgQElzQm9vbGVhbigpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5EcmF3ZXIgPSB2YWw7XG4gICAgdGhpcy5fb3BlbmVkID0gdmFsO1xuICAgIHZhbCA/IHRoaXMub3Blbih0cnVlKSA6IHRoaXMuY2xvc2UoZmFsc2UpO1xuICB9XG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuZWQ7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHsgfVxuXG4gIGdldCBfZWxlbWVudFJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEcmF3ZXJNYXJnaW4oKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3NpZGUnIHx8IHRoaXMubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY29uZmlnLndpZHRoO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgICAgaWYgKHdpZHRoICE9PSAwICYmIHRoaXMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgICAgICBtYXJnaW5bdGhpcy5wb3NpdGlvbl0gPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gICAgICB9XG4gICAgICBpZiAoaGVpZ2h0ICE9PSAwICYmIHRoaXMucG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgICAgICBtYXJnaW5bdGhpcy5wb3NpdGlvbl0gPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50LnNldENvbnRlbnRTdHlsZShtYXJnaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvQm9vbGVhbihkcmF3ZXJTdGF0ZTogYm9vbGVhbiB8ICdvcGVuJyB8ICdjbG9zZScpOiBib29sZWFuIHtcbiAgICBpZiAoZHJhd2VyU3RhdGUgPT09IHRydWUgfHwgZHJhd2VyU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy50b0Jvb2xlYW4odGhpcy5pc09wZW5EcmF3ZXIpID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxuICBvcGVuKGlzPzogdHJ1ZSk6ICdvcGVuJyB8IGJvb2xlYW4ge1xuICAgIHRoaXMudG9vZ2xlRHJhd2VyKGlzKTtcbiAgICB0aGlzLmlzRHJhd2VySGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pc09wZW5EcmF3ZXIgPSBpcyB8fCAnb3Blbic7XG4gICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2x5QW5pbWF0aW9uID0gdGhpcy5pc09wZW5EcmF3ZXIgPT09ICdvcGVuJztcbiAgICB0aGlzLnVwZGF0ZURyYXdlck1hcmdpbigpO1xuICAgIHRoaXMuc2V0QmdTdGF0ZShpcyB8fCAnYWN0aXZlJyk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuRHJhd2VyO1xuICB9XG4gIGNsb3NlKGlzPzogZmFsc2UpOiAnY2xvc2UnIHwgYm9vbGVhbiB7XG4gICAgdGhpcy50b29nbGVEcmF3ZXIoaXMpO1xuICAgIHRoaXMucmVzZXRNYXJnaW4oKTtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IGlzID09PSBmYWxzZSB8fCBpcyA9PT0gdHJ1ZSA/IGZhbHNlIDogJ2Nsb3NlJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fbHlBbmltYXRpb24gPSB0aGlzLmlzT3BlbkRyYXdlciA9PT0gJ2Nsb3NlJztcbiAgICB0aGlzLnNldEJnU3RhdGUoaXMgPT09IGZhbHNlID8gZmFsc2UgOiAnaW5hY3RpdmUnKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5EcmF3ZXI7XG4gIH1cblxuICBwcml2YXRlIHRvb2dsZURyYXdlcihzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzU2hvd0RyYXdlciA9IHRoaXMudG9Cb29sZWFuKHN0YXR1cyk7XG4gIH1cblxuICBzZXRCZ1N0YXRlKGJnU3RhdGU6IGJvb2xlYW4gfCAnYWN0aXZlJyB8ICdpbmFjdGl2ZScpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLmlzRHJhd2VyQmcubmV4dChiZ1N0YXRlKTtcbiAgICB9XG4gIH1cblxuICByZXNldE1hcmdpbigpIHtcbiAgICBjb25zdCBtYXJnaW4gPSB7fTtcbiAgICBtYXJnaW5bdGhpcy5wb3NpdGlvbl0gPSAnMCc7XG4gICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvKipmb3IgYHBvc2l0aW9uYCBjaGFuZ2VzICovXG4gICAgICBpZiAoa2V5ID09PSAncG9zaXRpb24nICYmIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgPT09ICdydGwnKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAncmlnaHQnO1xuICAgICAgfVxuXG4gICAgICAvKiogVXBkYXRlIG1vZGUgKi9cbiAgICAgIGlmIChjaGFuZ2VzWydtb2RlJ10gJiYgIWNoYW5nZXNba2V5XS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLnRvQm9vbGVhbih0aGlzLmlzT3BlbkRyYXdlcikgPyB0aGlzLm9wZW4odHJ1ZSkgOiB0aGlzLmNsb3NlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlEcmF3ZXJDb25maWcge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudCB9IGZyb20gJy4vZHJhd2VyJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQWlDRSxZQUNTLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO3NCQUxxQixTQUFTOzRCQUVJLElBQUk7UUFLckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3JDOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFtQjtRQUNqQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoQztRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNkLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7OztLQU0vQjs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxR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