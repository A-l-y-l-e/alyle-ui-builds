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
    container: tslib_1.__assign({ background: theme.background.primary.default, borderRadius: '2px', boxShadow: shadowBuilder(4), display: 'block', paddingTop: '8px', paddingBottom: '8px', transformOrigin: 'inherit', pointerEvents: 'all', overflow: 'auto', maxHeight: 'inherit', maxWidth: 'inherit' }, theme.menu.root)
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
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
/**
 * \@docs-private
 * @type {?}
 */
var menuItemStyles = ({
    display: 'block',
    minHeight: '48px',
    borderRadius: 0,
    width: '100%'
});
var LyMenuItem = /** @class */ (function () {
    function LyMenuItem(_menu, el, theme) {
        this._menu = _menu;
        theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement, undefined, STYLE_PRIORITY);
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
        { type: LyTheme2 }
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
                fnDestroy: this.detach.bind(this),
                host: this.elementRef.nativeElement,
                backdrop: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBR1IsV0FBVyxFQUNYLGFBQWEsRUFFYixTQUFTLEVBQ1QsU0FBUyxFQUNSLE1BQU0sV0FBVyxDQUFDO0FBQ3JCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7O0lBRXZCLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLOztJQUNuQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7SUFFbkMsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsU0FBUyxxQkFDUCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUM1QyxZQUFZLEVBQUUsS0FBSyxFQUNuQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUMzQixPQUFPLEVBQUUsT0FBTyxFQUNoQixVQUFVLEVBQUUsS0FBSyxFQUNqQixhQUFhLEVBQUUsS0FBSyxFQUNwQixlQUFlLEVBQUUsU0FBUyxFQUMxQixhQUFhLEVBQUUsS0FBSyxFQUNwQixRQUFRLEVBQUUsTUFBTSxFQUNoQixTQUFTLEVBQUUsU0FBUyxFQUNwQixRQUFRLEVBQUUsU0FBUyxJQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkI7Q0FDRixDQUFDLEVBZndDLENB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QUFTLEVBQUUsc0JBQXNCO3FCQUNsQztpQkFDRjs7OztnQkFyTEMsVUFBVTtnQkFZVixTQUFTOzs7bUNBNktSLEtBQUs7O0lBdURSLHVCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0ExRFksZ0JBQWdCOzs7Ozs7SUFFM0Isb0NBQWtDOztJQUNsQyw0Q0FBNEM7Ozs7O0lBRTFDLHNDQUE4Qjs7Ozs7SUFDOUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5LFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZixcbiAgUGxhY2VtZW50LFxuICBQb3NpdGlvbmluZyxcbiAgc2hhZG93QnVpbGRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBERUZBVUxUX1hQT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdpbmhlcml0JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIG1heEhlaWdodDogJ2luaGVyaXQnLFxuICAgIG1heFdpZHRoOiAnaW5oZXJpdCcsXG4gICAgLi4udGhlbWUubWVudS5yb290XG4gIH1cbn0pO1xuXG5jb25zdCBBTklNQVRJT05TID0gW1xuICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBpbicsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICB9KVxuICAgICAgXSkpXG4gICAgXSksXG4gIF0pLFxuICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgXSlcbl07XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFsuLi5BTklNQVRJT05TXSxcbiAgdGVtcGxhdGVVcmw6ICdtZW51Lmh0bWwnLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBfY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuXG4gIC8qKiBQb3NpdGlvbiB3aGVyZSB0aGUgbWVudSB3aWxsIGJlIHBsYWNlZC4gKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cbiAgLyoqIFRoZSB4LWF4aXMgcG9zaXRpb24gb2YgdGhlIG1lbnUuICovXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuXG4gIC8qKiBUaGUgeS1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ0BtZW51TGVhdmUnKSBtZW51TGVhdmUyO1xuICBASG9zdExpc3RlbmVyKCdAbWVudUxlYXZlLmRvbmUnLCBbJyRldmVudCddKSBlbmRBbmltYXRpb24oZSkge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTHlNZW51OiByZXF1aXJlIEBJbnB1dCgpIHJlZicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMueFBvc2l0aW9uID0gREVGQVVMVF9YUE9TSVRJT047XG4gICAgICB0aGlzLnBsYWNlbWVudCA9IERFRkFVTFRfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZWYuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMucmVmLl9tZW51UmVmLm9uUmVzaXplU2Nyb2xsID0gdGhpcy5fdXBkYXRlUGxhY2VtZW50LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVBsYWNlbWVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2VtZW50ICgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMucmVmLl9tZW51UmVmIS5jb250YWluZXJFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gcmVzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCAnaW5pdGlhbCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgJ2luaXRpYWwnKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24sIHRoaXMucmVmLl9nZXRIb3N0RWxlbWVudCgpLCBlbCwgdGhpcy5fdGhlbWUudmFyaWFibGVzKTtcblxuICAgIC8vIHNldCBwb3NpdGlvblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4LCAwKWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0tb3JpZ2luJywgYCR7cG9zaXRpb24ub3h9ICR7cG9zaXRpb24ub3l9IDBgKTtcblxuICAgIC8vIHNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsIHBvc2l0aW9uLmhlaWdodCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBwb3NpdGlvbi53aWR0aCk7XG4gIH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IG1lbnVJdGVtU3R5bGVzID0gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWluSGVpZ2h0OiAnNDhweCcsXG4gIGJvcmRlclJhZGl1czogMCxcbiAgd2lkdGg6ICcxMDAlJ1xufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVJdGVtIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnUucmVmICYmIHRoaXMuX21lbnUucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51LnJlZi5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbWVudTogTHlNZW51LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGVtZS5hZGRTdHlsZSgnbHlNZW51SXRlbScsIG1lbnVJdGVtU3R5bGVzLCBlbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY/OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iXX0=