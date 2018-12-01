import { Component, ElementRef, Input, Directive, Optional, HostListener, HostBinding, Renderer2, NgModule } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { LyOverlay, LyTheme2, shadowBuilder, XPosition, YPosition, DirPosition, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -1;
/** @type {?} */
const DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
const DEFAULT_XPOSITION = XPosition.after;
/** @type {?} */
const STYLES = (theme) => ({
    container: Object.assign({ background: theme.background.primary.default, borderRadius: '2px', boxShadow: shadowBuilder(4), display: 'inline-block', paddingTop: '8px', paddingBottom: '8px', transformOrigin: 'inherit', pointerEvents: 'all' }, theme.menu.root)
});
/**
 * Menu container
 */
class LyMenu {
    /**
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_theme, _el, _renderer) {
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
    endAnimation(e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.xPosition = DEFAULT_XPOSITION;
            this.placement = DEFAULT_PLACEMENT;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._updatePlacement();
    }
    /**
     * @return {?}
     */
    _updatePlacement() {
        /** @type {?} */
        const el = (/** @type {?} */ (this._el.nativeElement));
        /** @type {?} */
        const rects = (/** @type {?} */ (el.getBoundingClientRect()));
        /** @type {?} */
        const targetRects = this.ref._targetPosition();
        /** @type {?} */
        const placement = this.placement;
        /** @type {?} */
        const xPosition = this.xPosition;
        /** @type {?} */
        const yPosition = this.yPosition;
        if (xPosition && yPosition) {
            throw new Error(`You can not use \`xPosition\` and \`yPosition\` together, use only one of them.`);
        }
        if ((xPosition || yPosition) && !placement) {
            throw new Error(`\`placement\` is required.`);
        }
        /** @type {?} */
        let x = 0;
        /** @type {?} */
        let y = 0;
        /** @type {?} */
        let ox = 'center';
        /** @type {?} */
        let oy = 'center';
        if (placement || xPosition || yPosition) {
            if (placement) {
                if (placement === YPosition.above) {
                    x = (targetRects.width - rects.width) / 2;
                    y = -rects.height;
                    oy = 'bottom';
                }
                else if (placement === YPosition.below) {
                    x = (targetRects.width - rects.width) / 2;
                    y = targetRects.height;
                    oy = 'top';
                }
                else {
                    /** @type {?} */
                    const dir = this._theme.config.getDirection((/** @type {?} */ (placement)));
                    if (dir === DirPosition.left) {
                        ox = '100%';
                        x = -rects.width;
                        y = (targetRects.height - rects.height) / 2;
                    }
                    else if (dir === DirPosition.right) {
                        ox = '0%';
                        x = targetRects.width;
                        y = (targetRects.height - rects.height) / 2;
                    }
                }
            }
            if (xPosition) {
                /** @type {?} */
                const dir = this._theme.config.getDirection((/** @type {?} */ (xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = 0;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = targetRects.width - rects.width;
                }
            }
            else if (yPosition) {
                if (yPosition === YPosition.above) {
                    y = 0;
                    oy = '0%';
                }
                else if (yPosition === YPosition.below) {
                    y = targetRects.height - rects.height;
                    oy = '100%';
                }
            }
        }
        this._setTransform(`translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`);
        this._renderer.setStyle(this._el.nativeElement, 'transform-origin', `${ox} ${oy} 0`);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _setTransform(val) {
        this._renderer.setStyle(this._el.nativeElement, 'transform', val);
    }
}
LyMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-menu',
                animations: [
                    trigger('menuEnter', [
                        transition('void => in', [
                            animate('125ms cubic-bezier(0, 0, 0.2, 1)', keyframes([
                                style({
                                    opacity: 0,
                                    transform: 'scale(0.8)'
                                }),
                                style({
                                    opacity: 1,
                                    transform: 'scale(1)'
                                })
                            ]))
                        ]),
                    ]),
                    trigger('menuLeave', [
                        transition('* => void', animate('150ms linear', style({ opacity: 0 })))
                    ])
                ],
                template: "<div [class]=\"classes.container\" [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
                exportAs: 'lyMenu'
            }] }
];
/** @nocollapse */
LyMenu.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
LyMenu.propDecorators = {
    ref: [{ type: Input }],
    placement: [{ type: Input }],
    xPosition: [{ type: Input }],
    yPosition: [{ type: Input }],
    menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
    endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
};
/** @type {?} */
const menuItemStyles = ({
    display: 'block',
    minHeight: '48px',
    borderRadius: 0,
    width: '100%'
});
class LyMenuItem {
    /**
     * @param {?} _menu
     * @param {?} el
     * @param {?} theme
     */
    constructor(_menu, el, theme) {
        this._menu = _menu;
        theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement, undefined, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    _click() {
        if (this._menu.ref) {
            this._menu.ref._menuRef.detach();
        }
    }
}
LyMenuItem.decorators = [
    { type: Directive, args: [{
                selector: '[ly-menu-item]'
            },] }
];
/** @nocollapse */
LyMenuItem.ctorParameters = () => [
    { type: LyMenu, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyMenuItem.propDecorators = {
    _click: [{ type: HostListener, args: ['click',] }]
};
class LyMenuTriggerFor {
    /**
     * @param {?} elementRef
     * @param {?} overlay
     */
    constructor(elementRef, overlay) {
        this.elementRef = elementRef;
        this.overlay = overlay;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _targetPosition() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        return rect;
    }
    /**
     * @return {?}
     */
    _handleClick() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
        else {
            /** @type {?} */
            const rect = this._targetPosition();
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
    }
    /**
     * @return {?}
     */
    detach() {
        this._menuRef.detach();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._menuRef) {
            this._menuRef.remove();
            this._menuRef = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
    }
}
LyMenuTriggerFor.decorators = [
    { type: Directive, args: [{
                selector: '[lyMenuTriggerFor]',
                // tslint:disable-next-line:use-host-property-decorator
                host: {
                    '(click)': '_handleClick($event)'
                }
            },] }
];
/** @nocollapse */
LyMenuTriggerFor.ctorParameters = () => [
    { type: ElementRef },
    { type: LyOverlay }
];
LyMenuTriggerFor.propDecorators = {
    lyMenuTriggerFor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyMenuModule {
}
LyMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule, LyOverlayModule],
                exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
            },] }
];

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

export { LyMenu, LyMenuItem, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIFRoZW1lVmFyaWFibGVzLCBQbGFjZW1lbnQsIFhQb3NpdGlvbiwgWVBvc2l0aW9uLCBEaXJQb3NpdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IERFRkFVTFRfWFBPU0lUSU9OID0gWFBvc2l0aW9uLmFmdGVyO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0KSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdpbmhlcml0JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAuLi50aGVtZS5tZW51LnJvb3RcbiAgfVxufSk7XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICAvKipcbiAgICogRGVzdHJveSBtZW51XG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvcjtcblxuICAvKiogUG9zaXRpb24gd2hlcmUgdGhlIG1lbnUgd2lsbCBiZSBwbGFjZWQuICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIC8qKiBUaGUgeC1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcblxuICAvKiogVGhlIHktYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeVBvc2l0aW9uOiBZUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMueFBvc2l0aW9uID0gREVGQVVMVF9YUE9TSVRJT047XG4gICAgICB0aGlzLnBsYWNlbWVudCA9IERFRkFVTFRfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCAoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcbiAgICBjb25zdCB0YXJnZXRSZWN0cyA9IHRoaXMucmVmLl90YXJnZXRQb3NpdGlvbigpO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50O1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uO1xuICAgIGNvbnN0IHlQb3NpdGlvbiA9IHRoaXMueVBvc2l0aW9uO1xuICAgIGlmICh4UG9zaXRpb24gJiYgeVBvc2l0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4gbm90IHVzZSBcXGB4UG9zaXRpb25cXGAgYW5kIFxcYHlQb3NpdGlvblxcYCB0b2dldGhlciwgdXNlIG9ubHkgb25lIG9mIHRoZW0uYCk7XG4gICAgfVxuICAgIGlmICgoeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikgJiYgIXBsYWNlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGBwbGFjZW1lbnRcXGAgaXMgcmVxdWlyZWQuYCk7XG4gICAgfVxuICAgIGxldCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIG94ID0gJ2NlbnRlcicsXG4gICAgICAgIG95ID0gJ2NlbnRlcic7XG4gICAgaWYgKHBsYWNlbWVudCB8fCB4UG9zaXRpb24gfHwgeVBvc2l0aW9uKSB7XG4gICAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICAgIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHggPSAodGFyZ2V0UmVjdHMud2lkdGggLSByZWN0cy53aWR0aCkgLyAyO1xuICAgICAgICAgIHkgPSAtcmVjdHMuaGVpZ2h0O1xuICAgICAgICAgIG95ID0gJ2JvdHRvbSc7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB4ID0gKHRhcmdldFJlY3RzLndpZHRoIC0gcmVjdHMud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gdGFyZ2V0UmVjdHMuaGVpZ2h0O1xuICAgICAgICAgIG95ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWUuY29uZmlnLmdldERpcmVjdGlvbihwbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICAgIHggPSAtcmVjdHMud2lkdGg7XG4gICAgICAgICAgICB5ID0gKHRhcmdldFJlY3RzLmhlaWdodCAtIHJlY3RzLmhlaWdodCkgLyAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgICAgeCA9IHRhcmdldFJlY3RzLndpZHRoO1xuICAgICAgICAgICAgeSA9ICh0YXJnZXRSZWN0cy5oZWlnaHQgLSByZWN0cy5oZWlnaHQpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHhQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZS5jb25maWcuZ2V0RGlyZWN0aW9uKHhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gdGFyZ2V0UmVjdHMud2lkdGggLSByZWN0cy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh5UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgb3kgPSAnMCUnO1xuICAgICAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeSA9IHRhcmdldFJlY3RzLmhlaWdodCAtIHJlY3RzLmhlaWdodDtcbiAgICAgICAgICBveSA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZXRUcmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7TWF0aC5yb3VuZCh4KX1weCwgJHtNYXRoLnJvdW5kKHkpfXB4LCAwKWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0tb3JpZ2luJywgYCR7b3h9ICR7b3l9IDBgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyYW5zZm9ybSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB2YWwpO1xuICB9XG5cbn1cblxuY29uc3QgbWVudUl0ZW1TdHlsZXMgPSAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICB3aWR0aDogJzEwMCUnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudUl0ZW0ge1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudS5yZWYpIHtcbiAgICAgIHRoaXMuX21lbnUucmVmLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9tZW51OiBMeU1lbnUsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoZW1lLmFkZFN0eWxlKCdseU1lbnVJdGVtJywgbWVudUl0ZW1TdHlsZXMsIGVsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX3RhcmdldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmx5TWVudVRyaWdnZXJGb3IsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICB9LCB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTHlNZW51LCBMeU1lbnVUcmlnZ2VyRm9yLCBMeU1lbnVJdGVtIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtNQXVCTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUNuQixpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7TUFDbkMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O01BRW5DLE1BQU0sR0FBRyxDQUFDLEtBQXFCLE1BQU07SUFDekMsU0FBUyxrQkFDUCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUM1QyxZQUFZLEVBQUUsS0FBSyxFQUNuQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUMzQixPQUFPLEVBQUUsY0FBYyxFQUN2QixVQUFVLEVBQUUsS0FBSyxFQUNqQixhQUFhLEVBQUUsS0FBSyxFQUNwQixlQUFlLEVBQUUsU0FBUyxFQUMxQixhQUFhLEVBQUUsS0FBSyxJQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkI7Q0FDRixDQUFDOzs7O0FBMkJGLE1BQWEsTUFBTTs7Ozs7O0lBNEJqQixZQUNVLE1BQWdCLEVBQ2hCLEdBQWUsRUFDZixTQUFvQjtRQUZwQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXOzs7OztRQTFCckIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztLQTJCaEU7Ozs7O0lBVHdDLFlBQVksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1NBQ3BDO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFTyxnQkFBZ0I7O2NBQ2hCLEVBQUUsc0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQWU7O2NBQzFDLEtBQUssc0JBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEVBQWM7O2NBQ2hELFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTs7Y0FDeEMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTOztjQUMxQixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7O2NBQzFCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztRQUNoQyxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ3BHO1FBQ0QsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9DOztZQUNHLENBQUMsR0FBRyxDQUFDOztZQUNMLENBQUMsR0FBRyxDQUFDOztZQUNMLEVBQUUsR0FBRyxRQUFROztZQUNiLEVBQUUsR0FBRyxRQUFRO1FBQ2pCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDdkMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDakMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDbEIsRUFBRSxHQUFHLFFBQVEsQ0FBQztpQkFDZjtxQkFBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUN4QyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUMxQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDdkIsRUFBRSxHQUFHLEtBQUssQ0FBQztpQkFDWjtxQkFBTTs7MEJBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksb0JBQUMsU0FBUyxHQUFRO29CQUM3RCxJQUFJLEdBQUcsS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO3dCQUM1QixFQUFFLEdBQUcsTUFBTSxDQUFDO3dCQUNaLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7cUJBQzdDO3lCQUFNLElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7d0JBQ3BDLEVBQUUsR0FBRyxJQUFJLENBQUM7d0JBQ1YsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7d0JBQ3RCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7cUJBQzdDO2lCQUNGO2FBQ0Y7WUFFRCxJQUFJLFNBQVMsRUFBRTs7c0JBQ1AsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksb0JBQUMsU0FBUyxHQUFRO2dCQUM3RCxJQUFJLEdBQUcsS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUM3QixFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNWLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ1A7cUJBQU0sSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtvQkFDbkMsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDWixDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNyQzthQUNGO2lCQUFNLElBQUksU0FBUyxFQUFFO2dCQUNwQixJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNOLEVBQUUsR0FBRyxJQUFJLENBQUM7aUJBQ1g7cUJBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDeEMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsRUFBRSxHQUFHLE1BQU0sQ0FBQztpQkFDYjthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3RGOzs7OztJQUVPLGFBQWEsQ0FBQyxHQUFXO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRTs7O1lBdklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLFVBQVUsQ0FBQyxZQUFZLEVBQUU7NEJBQ3ZCLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxTQUFTLENBQUM7Z0NBQ3BELEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztvQ0FDVixTQUFTLEVBQUUsWUFBWTtpQ0FDeEIsQ0FBQztnQ0FDRixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFFLENBQUM7b0NBQ1YsU0FBUyxFQUFFLFVBQVU7aUNBQ3RCLENBQUM7NkJBQ0gsQ0FBQyxDQUFDO3lCQUNKLENBQUM7cUJBQ0gsQ0FBQztvQkFDRixPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNuQixVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDeEUsQ0FBQztpQkFDSDtnQkFDRCwwR0FBd0I7Z0JBQ3hCLFFBQVEsRUFBRSxRQUFRO2FBQ25COzs7O1lBNUMyQyxRQUFRO1lBbkJsRCxVQUFVO1lBU1YsU0FBUzs7O2tCQWtFUixLQUFLO3dCQUdMLEtBQUs7d0JBR0wsS0FBSzt3QkFHTCxLQUFLO3lCQUVMLFdBQVcsU0FBQyxZQUFZOzJCQUN4QixZQUFZLFNBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7OztNQTRGdkMsY0FBYyxJQUFJO0lBQ3RCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDO0FBS0YsTUFBYSxVQUFVOzs7Ozs7SUFNckIsWUFDc0IsS0FBYSxFQUNqQyxFQUFjLEVBQ2QsS0FBZTtRQUZLLFVBQUssR0FBTCxLQUFLLENBQVE7UUFJakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBQzNGOzs7O0lBWHNCLE1BQU07UUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbEM7S0FDRjs7O1lBUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFROEIsTUFBTSx1QkFBaEMsUUFBUTtZQXBNWCxVQUFVO1lBbUJnQyxRQUFROzs7cUJBMktqRCxZQUFZLFNBQUMsT0FBTzs7TUFxQlYsZ0JBQWdCOzs7OztJQUkzQixZQUNVLFVBQXNCLEVBQ3RCLE9BQWtCO1FBRGxCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztLQUN2Qjs7Ozs7SUFHTCxlQUFlOztjQUNQLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztjQUNwRCxJQUFJLEdBQWUsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7YUFBTTs7a0JBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pELFNBQVMsRUFBRSxJQUFJO2FBQ2hCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUk7b0JBQ1gsTUFBTSxFQUFFLElBQUk7b0JBQ1osYUFBYSxFQUFFLElBQUk7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7Z0JBQ25DLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7S0FDRjs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9COztnQkFFOUIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxzQkFBc0I7aUJBQ2xDO2FBQ0Y7Ozs7WUFsTkMsVUFBVTtZQW1CSCxTQUFTOzs7K0JBbU1mLEtBQUs7Ozs7Ozs7QUN4TlIsTUFXYSxZQUFZOzs7WUFMeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztnQkFDckUsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDL0MsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQzthQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=