/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { LyOverlay, LyTheme2, Positioning, shadowBuilder, XPosition, YPosition } from '@alyle/ui';
import { trigger, style, animate, transition, keyframes, } from '@angular/animations';
/** @type {?} */
var STYLE_PRIORITY = -1;
/** @type {?} */
var DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
var DEFAULT_XPOSITION = XPosition.after;
/** @type {?} */
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        '&': theme.menu ? theme.menu.root : null
    },
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
}); };
var ɵ0 = STYLES;
/** @type {?} */
var ANIMATIONS = [
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
var LyMenu = /** @class */ (function () {
    function LyMenu(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        /**
         * styles
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
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
    /**
     * @return {?}
     */
    LyMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.ref) {
            throw new Error('LyMenu: require @Input() ref');
        }
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.xPosition = DEFAULT_XPOSITION;
            this.placement = DEFAULT_PLACEMENT;
        }
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.ref._menuRef) {
            this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
        }
        this._updatePlacement();
    };
    /**
     * @private
     * @return {?}
     */
    LyMenu.prototype._updatePlacement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = (/** @type {?} */ ((/** @type {?} */ (this.ref._menuRef)).containerElement));
        /** @type {?} */
        var container = this._container.nativeElement;
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', 'initial');
        /** @type {?} */
        var position = new Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
        // set position
        this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
        this._renderer.setStyle(this._el.nativeElement, 'transform-origin', position.ox + " " + position.oy + " 0");
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        this._renderer.setStyle(container, 'width', position.width);
    };
    LyMenu.decorators = [
        { type: Component, args: [{
                    selector: 'ly-menu',
                    animations: tslib_1.__spread(ANIMATIONS),
                    template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
                    exportAs: 'lyMenu'
                }] }
    ];
    /** @nocollapse */
    LyMenu.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyMenu.propDecorators = {
        _container: [{ type: ViewChild, args: ['container',] }],
        ref: [{ type: Input }],
        placement: [{ type: Input }],
        xPosition: [{ type: Input }],
        yPosition: [{ type: Input }],
        menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
        endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
    };
    return LyMenu;
}());
export { LyMenu };
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
var LyMenuItem = /** @class */ (function () {
    function LyMenuItem(_menu, el, renderer) {
        this._menu = _menu;
        renderer.addClass(el.nativeElement, _menu.classes.item);
    }
    /**
     * @return {?}
     */
    LyMenuItem.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this._menu.ref && this._menu.ref._menuRef) {
            this._menu.ref._menuRef.detach();
        }
    };
    LyMenuItem.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-menu-item]'
                },] }
    ];
    /** @nocollapse */
    LyMenuItem.ctorParameters = function () { return [
        { type: LyMenu, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyMenuItem.propDecorators = {
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return LyMenuItem;
}());
export { LyMenuItem };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyMenuItem.prototype._menu;
}
var LyMenuTriggerFor = /** @class */ (function () {
    function LyMenuTriggerFor(elementRef, overlay) {
        this.elementRef = elementRef;
        this.overlay = overlay;
    }
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    LyMenuTriggerFor.prototype._targetPosition = /**
     * \@docs-private
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
    };
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._menuRef) {
            this._menuRef.detach();
        }
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
            this._menuRef = undefined;
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
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype._getHostElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    LyMenuTriggerFor.decorators = [
        { type: Directive, args: [{
                    selector: '[lyMenuTriggerFor]',
                    host: {
                        '(click)': '_handleClick($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    LyMenuTriggerFor.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyOverlay }
    ]; };
    LyMenuTriggerFor.propDecorators = {
        lyMenuTriggerFor: [{ type: Input }]
    };
    return LyMenuTriggerFor;
}());
export { LyMenuTriggerFor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBR1IsV0FBVyxFQUNYLGFBQWEsRUFFYixTQUFTLEVBQ1QsU0FBUyxFQUNSLE1BQU0sV0FBVyxDQUFDO0FBQ3JCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7O0lBRXZCLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLOztJQUNuQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7SUFFbkMsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsU0FBUyxFQUFFLGNBQWM7SUFDekIsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3pDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDNUMsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxFQUFFLE9BQU87UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLFNBQVM7UUFD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RCwwQ0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDO2lCQUNGOzs7O2dCQXpMQyxVQUFVO2dCQVlWLFNBQVM7OzttQ0FpTFIsS0FBSzs7SUFxRFIsdUJBQUM7Q0FBQSxBQTlERCxJQThEQztTQXhEWSxnQkFBZ0I7Ozs7OztJQUUzQixvQ0FBMEI7O0lBQzFCLDRDQUE0Qzs7Ozs7SUFFMUMsc0NBQThCOzs7OztJQUM5QixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeU92ZXJsYXksXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RmFjdG9yeSxcbiAgUGxhY2VtZW50LFxuICBQb3NpdGlvbmluZyxcbiAgc2hhZG93QnVpbGRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBERUZBVUxUX1hQT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgICcmJzogdGhlbWUubWVudSA/IHRoZW1lLm1lbnUucm9vdCA6IG51bGxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdpbmhlcml0JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIG1heEhlaWdodDogJ2luaGVyaXQnLFxuICAgIG1heFdpZHRoOiAnaW5oZXJpdCcsXG4gIH0sXG4gIGl0ZW06IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICB9XG59KTtcblxuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIHRlbXBsYXRlVXJsOiAnbWVudS5odG1sJyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBfY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuXG4gIC8qKiBQb3NpdGlvbiB3aGVyZSB0aGUgbWVudSB3aWxsIGJlIHBsYWNlZC4gKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cbiAgLyoqIFRoZSB4LWF4aXMgcG9zaXRpb24gb2YgdGhlIG1lbnUuICovXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuXG4gIC8qKiBUaGUgeS1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ0BtZW51TGVhdmUnKSBtZW51TGVhdmUyO1xuICBASG9zdExpc3RlbmVyKCdAbWVudUxlYXZlLmRvbmUnLCBbJyRldmVudCddKSBlbmRBbmltYXRpb24oZSkge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0x5TWVudTogcmVxdWlyZSBASW5wdXQoKSByZWYnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBsYWNlbWVudCAmJiAhdGhpcy54UG9zaXRpb24gJiYgIXRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnhQb3NpdGlvbiA9IERFRkFVTFRfWFBPU0lUSU9OO1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLnJlZi5fbWVudVJlZi5vblJlc2l6ZVNjcm9sbCA9IHRoaXMuX3VwZGF0ZVBsYWNlbWVudC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCAoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLnJlZi5fbWVudVJlZiEuY29udGFpbmVyRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIHJlc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgJ2luaXRpYWwnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsICdpbml0aWFsJyk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbmluZyh0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLnJlZi5fZ2V0SG9zdEVsZW1lbnQoKSwgZWwsIHRoaXMuX3RoZW1lLnZhcmlhYmxlcyk7XG5cbiAgICAvLyBzZXQgcG9zaXRpb25cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsIGAke3Bvc2l0aW9uLm94fSAke3Bvc2l0aW9uLm95fSAwYCk7XG5cbiAgICAvLyBzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcG9zaXRpb24ud2lkdGgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVJdGVtIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnUucmVmICYmIHRoaXMuX21lbnUucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51LnJlZi5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbWVudTogTHlNZW51LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgX21lbnUuY2xhc3Nlcy5pdGVtKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY/OiBPdmVybGF5RmFjdG9yeTtcbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkgeyB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3RhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgIH0sIHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==