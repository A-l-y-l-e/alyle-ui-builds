/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Directive, TemplateRef, Optional, HostListener, HostBinding, Renderer2 } from '@angular/core';
import { trigger, style, animate, transition, keyframes, } from '@angular/animations';
import { LyOverlay, LyTheme2, shadowBuilder, XPosition, YPosition, getPosition } from '@alyle/ui';
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
        var position = getPosition(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.config);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFFBQVEsRUFDUixZQUFZLEVBQ1osV0FBVyxFQUVYLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQTBCLFFBQVEsRUFBRSxhQUFhLEVBQTZCLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDOztJQUUvSSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7SUFDbkMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O0lBRW5DLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLFNBQVMscUJBQ1AsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFDNUMsWUFBWSxFQUFFLEtBQUssRUFDbkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDM0IsT0FBTyxFQUFFLGNBQWMsRUFDdkIsVUFBVSxFQUFFLEtBQUssRUFDakIsYUFBYSxFQUFFLEtBQUssRUFDcEIsZUFBZSxFQUFFLFNBQVMsRUFDMUIsYUFBYSxFQUFFLEtBQUssSUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CO0NBQ0YsQ0FBQyxFQVp3QyxDQVl4Qzs7O0lBRUksVUFBVSxHQUFHO0lBQ2pCLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFDbkIsVUFBVSxDQUFDLFlBQVksRUFBRTtZQUN2QixPQUFPLENBQUMsa0NBQWtDLEVBQUUsU0FBUyxDQUFDO2dCQUNwRCxLQUFLLENBQUM7b0JBQ0osT0FBTyxFQUFFLENBQUM7b0JBQ1YsU0FBUyxFQUFFLFlBQVk7aUJBQ3hCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO29CQUNKLE9BQU8sRUFBRSxDQUFDO29CQUNWLFNBQVMsRUFBRSxVQUFVO2lCQUN0QixDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0osQ0FBQztLQUNILENBQUM7SUFDRixPQUFPLENBQUMsV0FBVyxFQUFFO1FBQ25CLFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hFLENBQUM7Q0FDSDs7OztBQUdEO0lBa0NFLGdCQUNVLE1BQWdCLEVBQ2hCLEdBQWUsRUFDZixTQUFvQjtRQUZwQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXOzs7OztRQTFCckIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQTJCakUsQ0FBQzs7Ozs7SUFUd0MsNkJBQVk7Ozs7SUFBekQsVUFBMEQsQ0FBQztRQUN6RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBT0QseUJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsZ0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVPLGlDQUFnQjs7O0lBQXhCOztZQUNRLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBZTs7WUFDMUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLGlCQUFlLFFBQVEsQ0FBQyxDQUFDLFlBQU8sUUFBUSxDQUFDLENBQUMsV0FBUSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFLLFFBQVEsQ0FBQyxFQUFFLFNBQUksUUFBUSxDQUFDLEVBQUUsT0FBSSxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsVUFBVSxtQkFBTSxVQUFVLENBQUM7b0JBQzNCLDBHQUF3QjtvQkFDeEIsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQTlDMkMsUUFBUTtnQkFuQmxELFVBQVU7Z0JBU1YsU0FBUzs7O3NCQW9FUixLQUFLOzRCQUdMLEtBQUs7NEJBR0wsS0FBSzs0QkFHTCxLQUFLOzZCQUVMLFdBQVcsU0FBQyxZQUFZOytCQUN4QixZQUFZLFNBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNEI3QyxhQUFDO0NBQUEsQUF6REQsSUF5REM7U0FuRFksTUFBTTs7Ozs7OztJQUtqQix5QkFBcUU7Ozs7OztJQUtyRSx5QkFBb0I7O0lBQ3BCLHFCQUErQjs7Ozs7SUFHL0IsMkJBQThCOzs7OztJQUc5QiwyQkFBOEI7Ozs7O0lBRzlCLDJCQUE4Qjs7SUFFOUIsNEJBQXNDOztJQU9wQyx3QkFBd0I7O0lBQ3hCLHFCQUF1Qjs7SUFDdkIsMkJBQTRCOzs7Ozs7SUF1QjFCLGNBQWMsR0FBRyxDQUFDO0lBQ3RCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDO0FBRUY7SUFTRSxvQkFDc0IsS0FBYSxFQUNqQyxFQUFjLEVBQ2QsS0FBZTtRQUZLLFVBQUssR0FBTCxLQUFLLENBQVE7UUFJakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7SUFYc0IsMkJBQU07OztJQUE3QjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBUkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQVE4QixNQUFNLHVCQUFoQyxRQUFRO2dCQXpJWCxVQUFVO2dCQW1CZ0MsUUFBUTs7O3lCQWdIakQsWUFBWSxTQUFDLE9BQU87O0lBWXZCLGlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSxVQUFVOzs7SUFPbkIsMkJBQWlDOztBQVFyQztJQVVFLDBCQUNVLFVBQXNCLEVBQ3RCLE9BQWtCO1FBRGxCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztJQUN4QixDQUFDO0lBRUwsb0JBQW9COzs7OztJQUNwQiwwQ0FBZTs7OztJQUFmOztZQUNRLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztZQUNwRCxJQUFJLEdBQWUsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELHVDQUFZOzs7SUFBWjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO2FBQU07O2dCQUNDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6RCxTQUFTLEVBQUUsSUFBSTthQUNoQixFQUFFO2dCQUNELE1BQU0sRUFBRTtvQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLEtBQUssRUFBRSxJQUFJO29CQUNYLE1BQU0sRUFBRSxJQUFJO29CQUNaLGFBQWEsRUFBRSxJQUFJO2lCQUNwQjtnQkFDRCxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO2dCQUNuQyxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELGlDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGtDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7aUJBQ0Y7Ozs7Z0JBdEpDLFVBQVU7Z0JBbUJILFNBQVM7OzttQ0F1SWYsS0FBSzs7SUF3RFIsdUJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTNEWSxnQkFBZ0I7Ozs7OztJQUUzQixvQ0FBaUM7O0lBQ2pDLDRDQUE0Qzs7SUFFMUMsc0NBQThCOztJQUM5QixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlPdmVybGF5LCBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciwgVGhlbWVWYXJpYWJsZXMsIFBsYWNlbWVudCwgWFBvc2l0aW9uLCBZUG9zaXRpb24sIGdldFBvc2l0aW9uIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgREVGQVVMVF9YUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2luaGVyaXQnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIC4uLnRoZW1lLm1lbnUucm9vdFxuICB9XG59KTtcblxuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIHRlbXBsYXRlVXJsOiAnbWVudS5odG1sJyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIC8qKlxuICAgKiBEZXN0cm95IG1lbnVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuXG4gIC8qKiBQb3NpdGlvbiB3aGVyZSB0aGUgbWVudSB3aWxsIGJlIHBsYWNlZC4gKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cbiAgLyoqIFRoZSB4LWF4aXMgcG9zaXRpb24gb2YgdGhlIG1lbnUuICovXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuXG4gIC8qKiBUaGUgeS1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ0BtZW51TGVhdmUnKSBtZW51TGVhdmUyO1xuICBASG9zdExpc3RlbmVyKCdAbWVudUxlYXZlLmRvbmUnLCBbJyRldmVudCddKSBlbmRBbmltYXRpb24oZSkge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy54UG9zaXRpb24gPSBERUZBVUxUX1hQT1NJVElPTjtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVBsYWNlbWVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2VtZW50ICgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLnJlZi5fZ2V0SG9zdEVsZW1lbnQoKSwgZWwsIHRoaXMuX3RoZW1lLmNvbmZpZyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgsIDApYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0tb3JpZ2luJywgYCR7cG9zaXRpb24ub3h9ICR7cG9zaXRpb24ub3l9IDBgKTtcbiAgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgbWVudUl0ZW1TdHlsZXMgPSAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICB3aWR0aDogJzEwMCUnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudUl0ZW0ge1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudS5yZWYpIHtcbiAgICAgIHRoaXMuX21lbnUucmVmLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9tZW51OiBMeU1lbnUsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoZW1lLmFkZFN0eWxlKCdseU1lbnVJdGVtJywgbWVudUl0ZW1TdHlsZXMsIGVsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEN1cnJlbnQgbWVudVJlZiAqL1xuICBfbWVudVJlZjogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkgeyB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3RhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl90YXJnZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgICByaWdodDogbnVsbCxcbiAgICAgICAgICBib3R0b206IG51bGwsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcyksXG4gICAgICAgIGhvc3Q6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iXX0=