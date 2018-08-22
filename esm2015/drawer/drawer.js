/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @type {?|undefined} */
StyleMargin.prototype.top;
/** @type {?|undefined} */
StyleMargin.prototype.left;
/** @type {?|undefined} */
StyleMargin.prototype.right;
/** @type {?|undefined} */
StyleMargin.prototype.bottom;
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
        /** @type {?} */
        const array = this.margin.split(' ');
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
    { type: ElementRef },
    { type: Renderer2 }
];
LyDrawerContent.propDecorators = {
    margin: [{ type: HostBinding, args: ['style.margin',] }],
    _lyAnimation: [{ type: HostBinding, args: ['class.ly--animation',] }]
};
if (false) {
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
    { type: Renderer2 },
    { type: ElementRef },
    { type: AnimationBuilder }
];
LyDrawerContainer.propDecorators = {
    _drawers: [{ type: ContentChildren, args: [forwardRef(() => LyDrawer),] }],
    _drawerContent: [{ type: ContentChild, args: [forwardRef(() => LyDrawerContent),] }]
};
if (false) {
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
            /** @type {?} */
            const width = this.config.width;
            /** @type {?} */
            const height = this.config.height;
            if (width !== 0 && this.position === 'left' || this.position === 'right') {
                /** @type {?} */
                const margin = {};
                margin[this.position] = width;
                this.drawerContainer._drawerContent.setContentStyle(margin);
            }
            if (height !== 0 && this.position === 'top' || this.position === 'bottom') {
                /** @type {?} */
                const margin = {};
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
        /** @type {?} */
        const margin = {};
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
    { type: LyDrawerContainer, decorators: [{ type: Optional }] },
    { type: ElementRef }
];
LyDrawer.propDecorators = {
    config: [{ type: Input }],
    mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }],
    position: [{ type: HostBinding, args: ['attr.position',] }, { type: Input }],
    isShowDrawer: [{ type: HostBinding, args: ['class.ly-show-drawer',] }],
    isOpenDrawer: [{ type: HostBinding, args: ['@visibilityChanged',] }],
    isDrawerHidden: [{ type: HostBinding, args: ['class.ly-drawer-hidden',] }],
    opened: [{ type: Input }]
};
tslib_1.__decorate([
    IsBoolean(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyDrawer.prototype, "opened", null);
if (false) {
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
/** @type {?|undefined} */
LyDrawerConfig.prototype.width;
/** @type {?|undefined} */
LyDrawerConfig.prototype.height;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsZUFBZSxFQUNmLFlBQVksRUFDWixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7OztBQVd2QyxNQUFNOzs7OztJQUlKLFlBQ1MsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7c0JBTHFCLFNBQVM7NEJBRUksSUFBSTtRQUtyRCxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDckM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQW1COztRQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0tBTS9COzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUF6QkMsVUFBVTtZQVNWLFNBQVM7OztxQkFrQlIsV0FBVyxTQUFDLGNBQWM7MkJBRTFCLFdBQVcsU0FBQyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7O0FBMERwQyxNQUFNOzs7Ozs7SUFJSixZQUNVLFVBQ0EsWUFDQTtRQUZBLGFBQVEsR0FBUixRQUFRO1FBQ1IsZUFBVSxHQUFWLFVBQVU7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCOzBCQU5iLElBQUksZUFBZSxDQUFrQyxLQUFLLENBQUM7S0FPcEU7Ozs7SUFFSixvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFnQixFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDcEQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBZ0IsRUFBRSxFQUFFO1lBQ3pDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDZixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNsQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixNQUFNLEVBQUUsQ0FBQyxrZ0JBQWtnQixDQUFDO2dCQUM1Z0IsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQUU7d0JBQ1osS0FBSyxDQUFDLGFBQWEsRUFBRyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO3dCQUNqRSxLQUFLLENBQUMsV0FBVyxFQUFHLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUM3QyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDbkQsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDdkQsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUE3RUMsU0FBUztZQVRULFVBQVU7WUFjSCxnQkFBZ0I7Ozt1QkEyRXRCLGVBQWUsU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUMxQyxZQUFZLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQTJDakQsTUFBTTs7Ozs7SUFxQkosWUFDc0IsZUFBa0MsRUFDOUM7UUFEWSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFDOUMsZUFBVSxHQUFWLFVBQVU7dUJBdEJGLEtBQUs7c0JBQ1c7WUFDaEMsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztTQUNaO29CQUNtRSxNQUFNO3dCQUNxQixNQUFNOzRCQUcxRCxLQUFLOzhCQUNRLElBQUk7S0FhdkQ7Ozs7O1FBVkQsTUFBTSxDQUFDLEdBQVk7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNDOzs7O0lBQ0QsSUFBSSxNQUFNLEtBQWMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7SUFPOUMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQzlEOzs7O0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7O1lBQ2hELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztZQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7O2dCQUN4RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7WUFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7O2dCQUN6RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7U0FDRjs7Ozs7O0lBR0gsU0FBUyxDQUFDLFdBQXVDO1FBQy9DLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEU7Ozs7O0lBRUQsSUFBSSxDQUFDLEVBQVM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUM7UUFDaEYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUNELEtBQUssQ0FBQyxFQUFVO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQztRQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUVPLFlBQVksQ0FBQyxNQUFlO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0lBRzdDLFVBQVUsQ0FBQyxPQUF3QztRQUNqRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQztLQUNGOzs7O0lBRUQsV0FBVzs7UUFDVCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdEOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztZQUVuQyxJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3pCOztZQUdELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekU7U0FDRixDQUFDLENBQUM7S0FDSjs7O1lBekhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixNQUFNLEVBQUUsQ0FBQyxnb0JBQWdvQixDQUFDO2dCQUMxb0IsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTt3QkFDM0IsS0FBSyxDQUFDLFlBQVksRUFBRyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO3dCQUNsRSxVQUFVLENBQUMsdUJBQXVCLEVBQUU7NEJBQ2xDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQzt5QkFDOUMsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQXVCd0MsaUJBQWlCLHVCQUFyRCxRQUFRO1lBM0pYLFVBQVU7OztxQkF1SVQsS0FBSzttQkFJTCxXQUFXLFNBQUMsV0FBVyxjQUFHLEtBQUs7dUJBQy9CLFdBQVcsU0FBQyxlQUFlLGNBQUcsS0FBSzsyQkFDbkMsV0FBVyxTQUFDLHNCQUFzQjsyQkFDbEMsV0FBVyxTQUFDLG9CQUFvQjs2QkFFaEMsV0FBVyxTQUFDLHdCQUF3QjtxQkFDcEMsS0FBSzs7O0lBQ0wsU0FBUyxFQUFFOzs7c0NBS1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBRdWVyeUxpc3QsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXNCb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIHRyaWdnZXIsIHN0YXRlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFyZ2luIHtcbiAgdG9wPzogc3RyaW5nO1xuICBsZWZ0Pzogc3RyaW5nO1xuICByaWdodD86IHN0cmluZztcbiAgYm90dG9tPzogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250ZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKSBtYXJnaW4gPSAnMCAwIDAgMCc7XG4gIF9lbDogSFRNTEVsZW1lbnQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktLWFuaW1hdGlvbicpIF9seUFuaW1hdGlvbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHNldENvbnRlbnRTdHlsZShtYXJnaW46IFN0eWxlTWFyZ2luKSB7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLm1hcmdpbi5zcGxpdCgnICcpO1xuICAgIGlmIChtYXJnaW4ubGVmdCkge1xuICAgICAgYXJyYXlbM10gPSBgJHttYXJnaW4ubGVmdH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4ucmlnaHQpIHtcbiAgICAgIGFycmF5WzFdID0gYCR7bWFyZ2luLnJpZ2h0fXB4YDtcbiAgICB9XG4gICAgaWYgKG1hcmdpbi50b3ApIHtcbiAgICAgIGFycmF5WzBdID0gYCR7bWFyZ2luLnRvcH1weGA7XG4gICAgfVxuICAgIGlmIChtYXJnaW4uYm90dG9tKSB7XG4gICAgICBhcnJheVsyXSA9IGAke21hcmdpbi5ib3R0b219cHhgO1xuICAgIH1cbiAgICB0aGlzLm1hcmdpbiA9IGFycmF5LmpvaW4oJyAnKTtcbiAgICAvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobWFyZ2luKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGNvbnN0IGtleU5hbWUgPSBrZXlzW2ldO1xuICAgIC8vICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9kcmF3ZXJDb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG1hcmdpbi0ke2tleU5hbWV9YCwgYCR7bWFyZ2luW2tleU5hbWVdfXB4YCk7XG4gICAgLy8gfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250YWluZXInLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0IDo6bmctZGVlcD5seS1kcmF3ZXItY29udGVudHtoZWlnaHQ6MTAwJTtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6YmxvY2t9Omhvc3QgOjpuZy1kZWVwPmx5LWRyYXdlci1jb250ZW50Lmx5LS1hbmltYXRpb257dHJhbnNpdGlvbjozNzVtcyBjdWJpYy1iZXppZXIoLjQ1LDAsLjI1LDEpfS5seS1kcmF3ZXItYmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7b3BhY2l0eTouNjt6LWluZGV4OjEwOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubHktZHJhd2VyLWJnLW9wZW5lZHtkaXNwbGF5OmJsb2NrfS5seS1kcmF3ZXItYmctY2xvc2Vke2Rpc3BsYXk6bm9uZX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2luJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlLCAwJyAsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCAnZGlzcGxheSc6ICdub25lJyB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlLCAxJyAsIHN0eWxlKHsgb3BhY2l0eTogJy42JyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGFjdGl2ZScsIGFuaW1hdGUoJzM3NW1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMzc1bXMgZWFzZS1vdXQnKSksXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZHJhd2VyXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kcmF3ZXItY29udGVudFwiPjwvbmctY29udGVudD5cbiAgPGRpdlxuICAjYmdcbiAgW2NsYXNzLmx5LWRyYXdlci1iZy1vcGVuZWRdPVwiaXNEcmF3ZXJCZyB8IGFzeW5jXCJcbiAgW2NsYXNzLmx5LWRyYXdlci1iZy1jbG9zZWRdPVwiIShpc0RyYXdlckJnIHwgYXN5bmMpXCJcbiAgW0Bpbl09XCJpc0RyYXdlckJnIHwgYXN5bmNcIiBjbGFzcz1cImx5LWRyYXdlci1iZ1wiXG4gIGJnPVwiZHJhd2VyOmJhY2tkcm9wXCJcbiAgKGNsaWNrKT1cIl9jbG9zZUFsbFNpZGVBbmRQdXNoKClcIlxuICA+PC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseURyYXdlckNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICBpc0RyYXdlckJnID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnYWN0aXZlJyB8ICdpbmFjdGl2ZScgfCBib29sZWFuPihmYWxzZSk7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlcikpIF9kcmF3ZXJzOiBRdWVyeUxpc3Q8THlEcmF3ZXI+O1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSkgX2RyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXJcbiAgKSB7fVxuXG4gIF9jbG9zZUFsbFNpZGVBbmRQdXNoKCkge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyOiBMeURyYXdlcikgPT4ge1xuICAgICAgaWYgKGRyYXdlci5tb2RlID09PSAnb3ZlcicgfHwgZHJhd2VyLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgICBkcmF3ZXIuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5pc0RyYXdlckJnLm5leHQoJ2luYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQ2xvc2UgYWxsIG9wZW4gZHJhd2VycyAqL1xuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goKGRyYXdlcjogTHlEcmF3ZXIpID0+IHtcbiAgICAgIGlmIChkcmF3ZXIub3Blbikge1xuICAgICAgICBkcmF3ZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmlzRHJhd2VyQmcubmV4dCgnaW5hY3RpdmUnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1uYXYsIGx5LWRyYXdlcicsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzphdXRvO3otaW5kZXg6MTF9Omhvc3RbcG9zaXRpb249dG9wXXt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfTpob3N0W3Bvc2l0aW9uPWxlZnRde2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfTpob3N0W3Bvc2l0aW9uPXJpZ2h0XSw6aG9zdFtwb3NpdGlvbj1ydGxde3JpZ2h0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9Omhvc3RbcG9zaXRpb249Ym90dG9tXXtib3R0b206MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX06aG9zdC5seS1zaG93LWRyYXdlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX06aG9zdC5seS1kcmF3ZXItaGlkZGVue3Zpc2liaWxpdHk6aGlkZGVufWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZWQnLCBbXG4gICAgICBzdGF0ZSgndHJ1ZSwgb3BlbicgLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IG9wZW4sICogPT4gY2xvc2UnLCBbXG4gICAgICAgIGFuaW1hdGUoJzM3NW1zIGN1YmljLWJlemllciguNDUsIDAsIC4yNSwgMSknKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbmZpZzogTHlEcmF3ZXJDb25maWcgPSB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDIwMFxuICB9O1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubW9kZScpIEBJbnB1dCgpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdzaWRlJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnBvc2l0aW9uJykgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ3J0bCcgPSAnbGVmdCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktc2hvdy1kcmF3ZXInKSBpc1Nob3dEcmF3ZXI6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnQHZpc2liaWxpdHlDaGFuZ2VkJylcbiAgaXNPcGVuRHJhd2VyOiAnb3BlbicgfCAnY2xvc2UnIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWRyYXdlci1oaWRkZW4nKSBpc0RyYXdlckhpZGRlbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIEBJc0Jvb2xlYW4oKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gdmFsO1xuICAgIHRoaXMuX29wZW5lZCA9IHZhbDtcbiAgICB2YWwgPyB0aGlzLm9wZW4odHJ1ZSkgOiB0aGlzLmNsb3NlKGZhbHNlKTtcbiAgfVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3BlbmVkOyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7IH1cblxuICBnZXQgX2VsZW1lbnRSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRHJhd2VyTWFyZ2luKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzaWRlJyB8fCB0aGlzLm1vZGUgPT09ICdwdXNoJykge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmNvbmZpZy53aWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY29uZmlnLmhlaWdodDtcbiAgICAgIGlmICh3aWR0aCAhPT0gMCAmJiB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB7fTtcbiAgICAgICAgbWFyZ2luW3RoaXMucG9zaXRpb25dID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50LnNldENvbnRlbnRTdHlsZShtYXJnaW4pO1xuICAgICAgfVxuICAgICAgaWYgKGhlaWdodCAhPT0gMCAmJiB0aGlzLnBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBjb25zdCBtYXJnaW4gPSB7fTtcbiAgICAgICAgbWFyZ2luW3RoaXMucG9zaXRpb25dID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5zZXRDb250ZW50U3R5bGUobWFyZ2luKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b0Jvb2xlYW4oZHJhd2VyU3RhdGU6IGJvb2xlYW4gfCAnb3BlbicgfCAnY2xvc2UnKTogYm9vbGVhbiB7XG4gICAgaWYgKGRyYXdlclN0YXRlID09PSB0cnVlIHx8IGRyYXdlclN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMudG9Cb29sZWFuKHRoaXMuaXNPcGVuRHJhd2VyKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbiAgb3Blbihpcz86IHRydWUpOiAnb3BlbicgfCBib29sZWFuIHtcbiAgICB0aGlzLnRvb2dsZURyYXdlcihpcyk7XG4gICAgdGhpcy5pc0RyYXdlckhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaXNPcGVuRHJhd2VyID0gaXMgfHwgJ29wZW4nO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9seUFuaW1hdGlvbiA9IHRoaXMuaXNPcGVuRHJhd2VyID09PSAnb3Blbic7XG4gICAgdGhpcy51cGRhdGVEcmF3ZXJNYXJnaW4oKTtcbiAgICB0aGlzLnNldEJnU3RhdGUoaXMgfHwgJ2FjdGl2ZScpO1xuICAgIHJldHVybiB0aGlzLmlzT3BlbkRyYXdlcjtcbiAgfVxuICBjbG9zZShpcz86IGZhbHNlKTogJ2Nsb3NlJyB8IGJvb2xlYW4ge1xuICAgIHRoaXMudG9vZ2xlRHJhd2VyKGlzKTtcbiAgICB0aGlzLnJlc2V0TWFyZ2luKCk7XG4gICAgdGhpcy5pc09wZW5EcmF3ZXIgPSBpcyA9PT0gZmFsc2UgfHwgaXMgPT09IHRydWUgPyBmYWxzZSA6ICdjbG9zZSc7XG4gICAgdGhpcy5kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2x5QW5pbWF0aW9uID0gdGhpcy5pc09wZW5EcmF3ZXIgPT09ICdjbG9zZSc7XG4gICAgdGhpcy5zZXRCZ1N0YXRlKGlzID09PSBmYWxzZSA/IGZhbHNlIDogJ2luYWN0aXZlJyk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuRHJhd2VyO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29nbGVEcmF3ZXIoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1Nob3dEcmF3ZXIgPSB0aGlzLnRvQm9vbGVhbihzdGF0dXMpO1xuICB9XG5cbiAgc2V0QmdTdGF0ZShiZ1N0YXRlOiBib29sZWFuIHwgJ2FjdGl2ZScgfCAnaW5hY3RpdmUnKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ292ZXInIHx8IHRoaXMubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICB0aGlzLmRyYXdlckNvbnRhaW5lci5pc0RyYXdlckJnLm5leHQoYmdTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRNYXJnaW4oKSB7XG4gICAgY29uc3QgbWFyZ2luID0ge307XG4gICAgbWFyZ2luW3RoaXMucG9zaXRpb25dID0gJzAnO1xuICAgIHRoaXMuZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50LnNldENvbnRlbnRTdHlsZShtYXJnaW4pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLyoqZm9yIGBwb3NpdGlvbmAgY2hhbmdlcyAqL1xuICAgICAgaWYgKGtleSA9PT0gJ3Bvc2l0aW9uJyAmJiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlID09PSAncnRsJykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZGF0ZSBtb2RlICovXG4gICAgICBpZiAoY2hhbmdlc1snbW9kZSddICYmICFjaGFuZ2VzW2tleV0uZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy50b0Jvb2xlYW4odGhpcy5pc09wZW5EcmF3ZXIpID8gdGhpcy5vcGVuKHRydWUpIDogdGhpcy5jbG9zZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5RHJhd2VyQ29uZmlnIHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cbiJdfQ==