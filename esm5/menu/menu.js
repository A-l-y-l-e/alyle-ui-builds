/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, TemplateRef } from '@angular/core';
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
    container: tslib_1.__assign({ background: theme.background.primary.default, borderRadius: '2px', boxShadow: shadowBuilder(4), display: 'inline-block', paddingTop: '8px', paddingBottom: '8px', transformOrigin: 'inherit', pointerEvents: 'all' }, theme.menu.root)
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
        this._updatePlacement();
    };
    /**
     * @return {?}
     */
    LyMenu.prototype._updatePlacement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = (/** @type {?} */ (this._el.nativeElement));
        /** @type {?} */
        var position = new Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.config);
        this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
        this._renderer.setStyle(el, 'transform-origin', position.ox + " " + position.oy + " 0");
    };
    LyMenu.decorators = [
        { type: Component, args: [{
                    selector: 'ly-menu',
                    animations: tslib_1.__spread(ANIMATIONS),
                    template: "<div [class]=\"classes.container\" [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
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
    /** @type {?} */
    LyMenu.prototype._theme;
    /** @type {?} */
    LyMenu.prototype._el;
    /** @type {?} */
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
        if (this._menu.ref) {
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
    /** @type {?} */
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
            /** @type {?} */
            var rect = this._targetPosition();
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
    };
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.detach = /**
     * @return {?}
     */
    function () {
        this._menuRef.detach();
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
            this._menuRef = null;
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
    /** @type {?} */
    LyMenuTriggerFor.prototype.elementRef;
    /** @type {?} */
    LyMenuTriggerFor.prototype.overlay;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFHUixXQUFXLEVBQ1gsYUFBYSxFQUViLFNBQVMsRUFDVCxTQUFTLEVBQ1IsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFdkIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDbkIsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O0lBQ25DLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLOztJQUVuQyxNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztJQUN6QyxTQUFTLHFCQUNQLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQzVDLFlBQVksRUFBRSxLQUFLLEVBQ25CLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQzNCLE9BQU8sRUFBRSxjQUFjLEVBQ3ZCLFVBQVUsRUFBRSxLQUFLLEVBQ2pCLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLGVBQWUsRUFBRSxTQUFTLEVBQzFCLGFBQWEsRUFBRSxLQUFLLElBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQjtDQUNGLENBQUMsRUFad0MsQ0FZeEM7OztJQUVJLFVBQVUsR0FBRztJQUNqQixPQUFPLENBQUMsV0FBVyxFQUFFO1FBQ25CLFVBQVUsQ0FBQyxZQUFZLEVBQUU7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O1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7aUJBQ0Y7Ozs7Z0JBOUpDLFVBQVU7Z0JBV1YsU0FBUzs7O21DQXVKUixLQUFLOztJQXdEUix1QkFBQztDQUFBLEFBakVELElBaUVDO1NBM0RZLGdCQUFnQjs7Ozs7O0lBRTNCLG9DQUFpQzs7SUFDakMsNENBQTRDOztJQUUxQyxzQ0FBOEI7O0lBQzlCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeU92ZXJsYXksXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLFxuICBQbGFjZW1lbnQsXG4gIFBvc2l0aW9uaW5nLFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb25cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGtleWZyYW1lcyxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IERFRkFVTFRfWFBPU0lUSU9OID0gWFBvc2l0aW9uLmFmdGVyO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0KSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdpbmhlcml0JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAuLi50aGVtZS5tZW51LnJvb3RcbiAgfVxufSk7XG5cbmNvbnN0IEFOSU1BVElPTlMgPSBbXG4gIHRyaWdnZXIoJ21lbnVFbnRlcicsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgIH0pXG4gICAgICBdKSlcbiAgICBdKSxcbiAgXSksXG4gIHRyaWdnZXIoJ21lbnVMZWF2ZScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxNTBtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICBdKVxuXTtcblxuLyoqIE1lbnUgY29udGFpbmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgYW5pbWF0aW9uczogWy4uLkFOSU1BVElPTlNdLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICAvKipcbiAgICogRGVzdHJveSBtZW51XG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvcjtcblxuICAvKiogUG9zaXRpb24gd2hlcmUgdGhlIG1lbnUgd2lsbCBiZSBwbGFjZWQuICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIC8qKiBUaGUgeC1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcblxuICAvKiogVGhlIHktYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeVBvc2l0aW9uOiBZUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMueFBvc2l0aW9uID0gREVGQVVMVF9YUE9TSVRJT047XG4gICAgICB0aGlzLnBsYWNlbWVudCA9IERFRkFVTFRfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCAoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24sIHRoaXMucmVmLl9nZXRIb3N0RWxlbWVudCgpLCBlbCwgdGhpcy5fdGhlbWUuY29uZmlnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuICB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX3RhcmdldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmx5TWVudVRyaWdnZXJGb3IsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICB9LCB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==