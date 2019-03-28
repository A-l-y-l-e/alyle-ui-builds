/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { LyOverlay, LyTheme2, Positioning, shadowBuilder, XPosition, YPosition } from '@alyle/ui';
import { trigger, style, animate, transition, keyframes, } from '@angular/animations';
/** @type {?} */
const STYLE_PRIORITY = -1;
/** @type {?} */
const DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
const DEFAULT_XPOSITION = XPosition.after;
/** @type {?} */
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: null,
    container: {
        background: theme.background.primary.default,
        borderRadius: '2px',
        boxShadow: shadowBuilder(4),
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
const ɵ0 = STYLES;
/** @type {?} */
const ANIMATIONS = [
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
];
/**
 * Menu container
 */
export class LyMenu {
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
        this.classes = this._theme.addStyleSheet(STYLES);
        const { menu } = this._theme.variables;
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
    endAnimation(e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ref) {
            throw new Error('LyMenu: require @Input() ref');
        }
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.xPosition = DEFAULT_XPOSITION;
            this.placement = DEFAULT_PLACEMENT;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.ref._menuRef) {
            this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
        }
        this._updatePlacement();
    }
    /**
     * @private
     * @return {?}
     */
    _updatePlacement() {
        /** @type {?} */
        const el = (/** @type {?} */ ((/** @type {?} */ (this.ref._menuRef)).containerElement));
        /** @type {?} */
        const container = this._container.nativeElement;
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', 'initial');
        /** @type {?} */
        const position = new Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
        // set position
        this._renderer.setStyle(el, 'transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
        this._renderer.setStyle(this._el.nativeElement, 'transform-origin', `${position.ox} ${position.oy} 0`);
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        this._renderer.setStyle(container, 'width', position.width);
    }
}
LyMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-menu',
                animations: [...ANIMATIONS],
                template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
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
    _container: [{ type: ViewChild, args: ['container',] }],
    ref: [{ type: Input }],
    placement: [{ type: Input }],
    xPosition: [{ type: Input }],
    yPosition: [{ type: Input }],
    menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
    endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
};
if (false) {
    /**
     * styles
     * \@docs-private
     * @type {?}
     */
    LyMenu.prototype.classes;
    /**
     * Destroy menu
     * \@docs-private
     * @type {?}
     */
    LyMenu.prototype.destroy;
    /** @type {?} */
    LyMenu.prototype._container;
    /** @type {?} */
    LyMenu.prototype.ref;
    /**
     * Position where the menu will be placed.
     * @type {?}
     */
    LyMenu.prototype.placement;
    /**
     * The x-axis position of the menu.
     * @type {?}
     */
    LyMenu.prototype.xPosition;
    /**
     * The y-axis position of the menu.
     * @type {?}
     */
    LyMenu.prototype.yPosition;
    /** @type {?} */
    LyMenu.prototype.menuLeave2;
    /**
     * @type {?}
     * @private
     */
    LyMenu.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyMenu.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyMenu.prototype._renderer;
}
export class LyMenuItem {
    /**
     * @param {?} _menu
     * @param {?} el
     * @param {?} renderer
     */
    constructor(_menu, el, renderer) {
        this._menu = _menu;
        renderer.addClass(el.nativeElement, _menu.classes.item);
    }
    /**
     * @return {?}
     */
    _click() {
        if (this._menu.ref && this._menu.ref._menuRef) {
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
    { type: Renderer2 }
];
LyMenuItem.propDecorators = {
    _click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyMenuItem.prototype._menu;
}
export class LyMenuTriggerFor {
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
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._menuRef) {
            this._menuRef.remove();
            this._menuRef = undefined;
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
    /**
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
}
LyMenuTriggerFor.decorators = [
    { type: Directive, args: [{
                selector: '[lyMenuTriggerFor]',
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
if (false) {
    /**
     * Current menuRef
     * @type {?}
     */
    LyMenuTriggerFor.prototype._menuRef;
    /** @type {?} */
    LyMenuTriggerFor.prototype.lyMenuTriggerFor;
    /**
     * @type {?}
     * @private
     */
    LyMenuTriggerFor.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    LyMenuTriggerFor.prototype.overlay;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFHUixXQUFXLEVBQ1gsYUFBYSxFQUViLFNBQVMsRUFDVCxTQUFTLEVBQ1IsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxxQkFBcUIsQ0FBQzs7TUFFdkIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O01BQ25DLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLOztNQUVuQyxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRSxJQUFJO0lBQ1YsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDNUMsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxFQUFFLE9BQU87UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7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Q0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtpQkFDbEM7YUFDRjs7OztZQS9MQyxVQUFVO1lBWVYsU0FBUzs7OytCQXVMUixLQUFLOzs7Ozs7O0lBRE4sb0NBQTBCOztJQUMxQiw0Q0FBNEM7Ozs7O0lBRTFDLHNDQUE4Qjs7Ozs7SUFDOUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5LFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZhY3RvcnksXG4gIFBsYWNlbWVudCxcbiAgUG9zaXRpb25pbmcsXG4gIHNoYWRvd0J1aWxkZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgREVGQVVMVF9YUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IG51bGwsXG4gIGNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnaW5oZXJpdCcsXG4gICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBtYXhIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXhXaWR0aDogJ2luaGVyaXQnLFxuICB9LFxuICBpdGVtOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCdcbiAgfVxufSk7XG5cbmNvbnN0IEFOSU1BVElPTlMgPSBbXG4gIHRyaWdnZXIoJ21lbnVFbnRlcicsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgIH0pXG4gICAgICBdKSlcbiAgICBdKSxcbiAgXSksXG4gIHRyaWdnZXIoJ21lbnVMZWF2ZScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxNTBtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICBdKVxuXTtcblxuLyoqIE1lbnUgY29udGFpbmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgYW5pbWF0aW9uczogWy4uLkFOSU1BVElPTlNdLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIC8qKlxuICAgKiBEZXN0cm95IG1lbnVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgX2NvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvcjtcblxuICAvKiogUG9zaXRpb24gd2hlcmUgdGhlIG1lbnUgd2lsbCBiZSBwbGFjZWQuICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIC8qKiBUaGUgeC1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcblxuICAvKiogVGhlIHktYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeVBvc2l0aW9uOiBZUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgY29uc3QgeyBtZW51IH0gPSB0aGlzLl90aGVtZS52YXJpYWJsZXM7XG4gICAgaWYgKG1lbnUpIHtcbiAgICAgIGlmIChtZW51LnJvb3QpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICB0aGlzLl90aGVtZS5zdHlsZShtZW51LnJvb3QsIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0x5TWVudTogcmVxdWlyZSBASW5wdXQoKSByZWYnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBsYWNlbWVudCAmJiAhdGhpcy54UG9zaXRpb24gJiYgIXRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnhQb3NpdGlvbiA9IERFRkFVTFRfWFBPU0lUSU9OO1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLnJlZi5fbWVudVJlZi5vblJlc2l6ZVNjcm9sbCA9IHRoaXMuX3VwZGF0ZVBsYWNlbWVudC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCAoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLnJlZi5fbWVudVJlZiEuY29udGFpbmVyRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIHJlc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgJ2luaXRpYWwnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsICdpbml0aWFsJyk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbmluZyh0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLnJlZi5fZ2V0SG9zdEVsZW1lbnQoKSwgZWwsIHRoaXMuX3RoZW1lLnZhcmlhYmxlcyk7XG5cbiAgICAvLyBzZXQgcG9zaXRpb25cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsIGAke3Bvc2l0aW9uLm94fSAke3Bvc2l0aW9uLm95fSAwYCk7XG5cbiAgICAvLyBzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcG9zaXRpb24ud2lkdGgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVJdGVtIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnUucmVmICYmIHRoaXMuX21lbnUucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51LnJlZi5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbWVudTogTHlNZW51LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgX21lbnUuY2xhc3Nlcy5pdGVtKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY/OiBPdmVybGF5RmFjdG9yeTtcbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkgeyB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3RhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgIH0sIHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==