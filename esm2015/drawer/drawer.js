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
export class LyDrawerContent {
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
export class LyDrawerContainer {
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
export class LyDrawer {
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
tslib_1.__decorate([
    IsBoolean(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyDrawer.prototype, "opened", null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUdULFVBQVUsRUFHVixLQUFLLEVBRUwsZUFBZSxFQUNmLFlBQVksRUFDWixTQUFTLEVBQ1QsdUJBQXVCLEVBTXZCLFVBQVUsRUFFVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFNVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWdDLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVd2QyxNQUFNOzs7OztJQUlKLFlBQ1MsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7c0JBTHFCLFNBQVM7NEJBRUksSUFBSTtRQUtyRCxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDckM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQW1CO1FBQ2pDLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDO1NBQ2hDO1FB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QUNwQyxLQUFLOzs7SUFDTCxTQUFTLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBJbnB1dCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSYW5kb21JZCwgTmdUcmFuc2NsdWRlTW9kdWxlLCBJc0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgdHJpZ2dlciwgc3RhdGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXJnaW4ge1xuICB0b3A/OiBzdHJpbmc7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIHJpZ2h0Pzogc3RyaW5nO1xuICBib3R0b20/OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbicpIG1hcmdpbiA9ICcwIDAgMCAwJztcbiAgX2VsOiBIVE1MRWxlbWVudDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS0tYW5pbWF0aW9uJykgX2x5QW5pbWF0aW9uID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX2VsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgc2V0Q29udGVudFN0eWxlKG1hcmdpbjogU3R5bGVNYXJnaW4pIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMubWFyZ2luLnNwbGl0KCcgJyk7XG4gICAgaWYgKG1hcmdpbi5sZWZ0KSB7XG4gICAgICBhcnJheVszXSA9IGAke21hcmdpbi5sZWZ0fXB4YDtcbiAgICB9XG4gICAgaWYgKG1hcmdpbi5yaWdodCkge1xuICAgICAgYXJyYXlbMV0gPSBgJHttYXJnaW4ucmlnaHR9cHhgO1xuICAgIH1cbiAgICBpZiAobWFyZ2luLnRvcCkge1xuICAgICAgYXJyYXlbMF0gPSBgJHttYXJnaW4udG9wfXB4YDtcbiAgICB9XG4gICAgaWYgKG1hcmdpbi5ib3R0b20pIHtcbiAgICAgIGFycmF5WzJdID0gYCR7bWFyZ2luLmJvdHRvbX1weGA7XG4gICAgfVxuICAgIHRoaXMubWFyZ2luID0gYXJyYXkuam9pbignICcpO1xuICAgIC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtYXJnaW4pO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgY29uc3Qga2V5TmFtZSA9IGtleXNbaV07XG4gICAgLy8gICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2RyYXdlckNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbWFyZ2luLSR7a2V5TmFtZX1gLCBgJHttYXJnaW5ba2V5TmFtZV19cHhgKTtcbiAgICAvLyB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcicsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QgOjpuZy1kZWVwPmx5LWRyYXdlci1jb250ZW50e2hlaWdodDoxMDAlO292ZXJmbG93OmF1dG87ZGlzcGxheTpibG9ja306aG9zdCA6Om5nLWRlZXA+bHktZHJhd2VyLWNvbnRlbnQubHktLWFuaW1hdGlvbnt0cmFuc2l0aW9uOjM3NW1zIGN1YmljLWJlemllciguNDUsMCwuMjUsMSl9Lmx5LWRyYXdlci1iZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtvcGFjaXR5Oi42O3otaW5kZXg6MTA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5seS1kcmF3ZXItYmctb3BlbmVke2Rpc3BsYXk6YmxvY2t9Lmx5LWRyYXdlci1iZy1jbG9zZWR7ZGlzcGxheTpub25lfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignaW4nLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUsIDAnICwgc3R5bGUoeyBvcGFjaXR5OiAnMCcsICdkaXNwbGF5JzogJ25vbmUnIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUsIDEnICwgc3R5bGUoeyBvcGFjaXR5OiAnLjYnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gYWN0aXZlJywgYW5pbWF0ZSgnMzc1bXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gaW5hY3RpdmUnLCBhbmltYXRlKCczNzVtcyBlYXNlLW91dCcpKSxcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kcmF3ZXJcIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRyYXdlci1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICA8ZGl2XG4gICNiZ1xuICBbY2xhc3MubHktZHJhd2VyLWJnLW9wZW5lZF09XCJpc0RyYXdlckJnIHwgYXN5bmNcIlxuICBbY2xhc3MubHktZHJhd2VyLWJnLWNsb3NlZF09XCIhKGlzRHJhd2VyQmcgfCBhc3luYylcIlxuICBbQGluXT1cImlzRHJhd2VyQmcgfCBhc3luY1wiIGNsYXNzPVwibHktZHJhd2VyLWJnXCJcbiAgYmc9XCJkcmF3ZXI6YmFja2Ryb3BcIlxuICAoY2xpY2spPVwiX2Nsb3NlQWxsU2lkZUFuZFB1c2goKVwiXG4gID48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5RHJhd2VyQ29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIGlzRHJhd2VyQmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdhY3RpdmUnIHwgJ2luYWN0aXZlJyB8IGJvb2xlYW4+KGZhbHNlKTtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyKSkgX2RyYXdlcnM6IFF1ZXJ5TGlzdDxMeURyYXdlcj47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBfZHJhd2VyQ29udGVudDogTHlEcmF3ZXJDb250ZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlclxuICApIHt9XG5cbiAgX2Nsb3NlQWxsU2lkZUFuZFB1c2goKSB7XG4gICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXI6IEx5RHJhd2VyKSA9PiB7XG4gICAgICBpZiAoZHJhd2VyLm1vZGUgPT09ICdvdmVyJyB8fCBkcmF3ZXIubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICAgIGRyYXdlci5jbG9zZSgpO1xuICAgICAgICB0aGlzLmlzRHJhd2VyQmcubmV4dCgnaW5hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDbG9zZSBhbGwgb3BlbiBkcmF3ZXJzICovXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyOiBMeURyYXdlcikgPT4ge1xuICAgICAgaWYgKGRyYXdlci5vcGVuKSB7XG4gICAgICAgIGRyYXdlci5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaXNEcmF3ZXJCZy5uZXh0KCdpbmFjdGl2ZScpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW5hdiwgbHktZHJhd2VyJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmF1dG87ei1pbmRleDoxMX06aG9zdFtwb3NpdGlvbj10b3Bde3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9Omhvc3RbcG9zaXRpb249bGVmdF17bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9Omhvc3RbcG9zaXRpb249cmlnaHRdLDpob3N0W3Bvc2l0aW9uPXJ0bF17cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX06aG9zdFtwb3NpdGlvbj1ib3R0b21de2JvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfTpob3N0Lmx5LXNob3ctZHJhd2Vyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfTpob3N0Lmx5LWRyYXdlci1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCd2aXNpYmlsaXR5Q2hhbmdlZCcsIFtcbiAgICAgIHN0YXRlKCd0cnVlLCBvcGVuJyAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gb3BlbiwgKiA9PiBjbG9zZScsIFtcbiAgICAgICAgYW5pbWF0ZSgnMzc1bXMgY3ViaWMtYmV6aWVyKC40NSwgMCwgLjI1LCAxKScpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseURyYXdlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY29uZmlnOiBMeURyYXdlckNvbmZpZyA9IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwXG4gIH07XG4gIEBIb3N0QmluZGluZygnYXR0ci5tb2RlJykgQElucHV0KCkgbW9kZTogJ3NpZGUnIHwgJ3B1c2gnIHwgJ292ZXInID0gJ3NpZGUnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucG9zaXRpb24nKSBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAncnRsJyA9ICdsZWZ0JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1zaG93LWRyYXdlcicpIGlzU2hvd0RyYXdlcjogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdAdmlzaWJpbGl0eUNoYW5nZWQnKVxuICBpc09wZW5EcmF3ZXI6ICdvcGVuJyB8ICdjbG9zZScgfCBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZHJhd2VyLWhpZGRlbicpIGlzRHJhd2VySGlkZGVuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgQElzQm9vbGVhbigpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5EcmF3ZXIgPSB2YWw7XG4gICAgdGhpcy5fb3BlbmVkID0gdmFsO1xuICAgIHZhbCA/IHRoaXMub3Blbih0cnVlKSA6IHRoaXMuY2xvc2UoZmFsc2UpO1xuICB9XG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuZWQ7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHsgfVxuXG4gIGdldCBfZWxlbWVudFJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEcmF3ZXJNYXJnaW4oKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3NpZGUnIHx8IHRoaXMubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY29uZmlnLndpZHRoO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgICAgaWYgKHdpZHRoICE9PSAwICYmIHRoaXMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgICAgICBtYXJnaW5bdGhpcy5wb3NpdGlvbl0gPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gICAgICB9XG4gICAgICBpZiAoaGVpZ2h0ICE9PSAwICYmIHRoaXMucG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHt9O1xuICAgICAgICBtYXJnaW5bdGhpcy5wb3NpdGlvbl0gPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50LnNldENvbnRlbnRTdHlsZShtYXJnaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvQm9vbGVhbihkcmF3ZXJTdGF0ZTogYm9vbGVhbiB8ICdvcGVuJyB8ICdjbG9zZScpOiBib29sZWFuIHtcbiAgICBpZiAoZHJhd2VyU3RhdGUgPT09IHRydWUgfHwgZHJhd2VyU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy50b0Jvb2xlYW4odGhpcy5pc09wZW5EcmF3ZXIpID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxuICBvcGVuKGlzPzogdHJ1ZSk6ICdvcGVuJyB8IGJvb2xlYW4ge1xuICAgIHRoaXMudG9vZ2xlRHJhd2VyKGlzKTtcbiAgICB0aGlzLmlzRHJhd2VySGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pc09wZW5EcmF3ZXIgPSBpcyB8fCAnb3Blbic7XG4gICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2x5QW5pbWF0aW9uID0gdGhpcy5pc09wZW5EcmF3ZXIgPT09ICdvcGVuJztcbiAgICB0aGlzLnVwZGF0ZURyYXdlck1hcmdpbigpO1xuICAgIHRoaXMuc2V0QmdTdGF0ZShpcyB8fCAnYWN0aXZlJyk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuRHJhd2VyO1xuICB9XG4gIGNsb3NlKGlzPzogZmFsc2UpOiAnY2xvc2UnIHwgYm9vbGVhbiB7XG4gICAgdGhpcy50b29nbGVEcmF3ZXIoaXMpO1xuICAgIHRoaXMucmVzZXRNYXJnaW4oKTtcbiAgICB0aGlzLmlzT3BlbkRyYXdlciA9IGlzID09PSBmYWxzZSB8fCBpcyA9PT0gdHJ1ZSA/IGZhbHNlIDogJ2Nsb3NlJztcbiAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fbHlBbmltYXRpb24gPSB0aGlzLmlzT3BlbkRyYXdlciA9PT0gJ2Nsb3NlJztcbiAgICB0aGlzLnNldEJnU3RhdGUoaXMgPT09IGZhbHNlID8gZmFsc2UgOiAnaW5hY3RpdmUnKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5EcmF3ZXI7XG4gIH1cblxuICBwcml2YXRlIHRvb2dsZURyYXdlcihzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzU2hvd0RyYXdlciA9IHRoaXMudG9Cb29sZWFuKHN0YXR1cyk7XG4gIH1cblxuICBzZXRCZ1N0YXRlKGJnU3RhdGU6IGJvb2xlYW4gfCAnYWN0aXZlJyB8ICdpbmFjdGl2ZScpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpIHtcbiAgICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLmlzRHJhd2VyQmcubmV4dChiZ1N0YXRlKTtcbiAgICB9XG4gIH1cblxuICByZXNldE1hcmdpbigpIHtcbiAgICBjb25zdCBtYXJnaW4gPSB7fTtcbiAgICBtYXJnaW5bdGhpcy5wb3NpdGlvbl0gPSAnMCc7XG4gICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuc2V0Q29udGVudFN0eWxlKG1hcmdpbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvKipmb3IgYHBvc2l0aW9uYCBjaGFuZ2VzICovXG4gICAgICBpZiAoa2V5ID09PSAncG9zaXRpb24nICYmIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgPT09ICdydGwnKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAncmlnaHQnO1xuICAgICAgfVxuXG4gICAgICAvKiogVXBkYXRlIG1vZGUgKi9cbiAgICAgIGlmIChjaGFuZ2VzWydtb2RlJ10gJiYgIWNoYW5nZXNba2V5XS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLnRvQm9vbGVhbih0aGlzLmlzT3BlbkRyYXdlcikgPyB0aGlzLm9wZW4odHJ1ZSkgOiB0aGlzLmNsb3NlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlEcmF3ZXJDb25maWcge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuIl19