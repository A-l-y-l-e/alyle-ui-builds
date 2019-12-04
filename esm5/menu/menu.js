import * as tslib_1 from "tslib";
import { AfterViewInit, Component, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, Positioning, shadowBuilder, ThemeVariables, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
import { trigger, style, animate, transition, keyframes, } from '@angular/animations';
var STYLE_PRIORITY = -1;
var DEFAULT_PLACEMENT = YPosition.below;
var DEFAULT_XPOSITION = XPosition.after;
var STYLES = function (theme, ref) {
    var menu = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return (theme.menu
            && theme.menu.root
            && (theme.menu.root instanceof StyleCollection
                ? theme.menu.root.setTransformer(function (fn) { return fn(menu); }).css
                : theme.menu.root(menu))); },
        container: function (className) { return className + "{background:" + theme.background.primary.default + ";border-radius:2px;box-shadow:" + shadowBuilder(4) + ";display:block;padding-top:8px;padding-bottom:8px;transform-origin:inherit;pointer-events:all;overflow:auto;max-height:inherit;max-width:inherit;box-sizing:border-box;}"; },
        item: function (className) { return className + "{display:flex;min-height:48px;border-radius:0;width:100%;justify-content:flex-start;}"; }
    };
};
var ɵ0 = STYLES;
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
/** Menu container */
var LyMenu = /** @class */ (function () {
    function LyMenu(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        /**
         * styles
         * @docs-private
         */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    LyMenu.prototype.endAnimation = function (e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    };
    LyMenu.prototype.ngOnInit = function () {
        if (!this.ref) {
            throw new Error('LyMenu: require @Input() ref');
        }
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.xPosition = DEFAULT_XPOSITION;
            this.placement = DEFAULT_PLACEMENT;
        }
    };
    LyMenu.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.ref._menuRef) {
            this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
        }
        this._updatePlacement();
        this.ref.menuOpened.emit();
        Promise.resolve(null).then(function () {
            _this.ref._setMenuOpenToTrue();
        });
    };
    LyMenu.prototype._updatePlacement = function () {
        var el = this.ref._menuRef.containerElement;
        var container = this._container.nativeElement;
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', 'initial');
        var position = new Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
        // set position
        this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
        this._renderer.setStyle(this._el.nativeElement, 'transform-origin', position.ox + " " + position.oy + " 0");
        // set height & width
        this._renderer.setStyle(container, 'height', position.height === 'initial' ? '100%' : position.height);
        this._renderer.setStyle(container, 'width', position.width === 'initial' ? '100%' : position.width);
    };
    LyMenu.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        ViewChild('container', { static: false })
    ], LyMenu.prototype, "_container", void 0);
    tslib_1.__decorate([
        Input()
    ], LyMenu.prototype, "ref", void 0);
    tslib_1.__decorate([
        Input()
    ], LyMenu.prototype, "placement", void 0);
    tslib_1.__decorate([
        Input()
    ], LyMenu.prototype, "xPosition", void 0);
    tslib_1.__decorate([
        Input()
    ], LyMenu.prototype, "yPosition", void 0);
    tslib_1.__decorate([
        HostBinding('@menuLeave')
    ], LyMenu.prototype, "menuLeave2", void 0);
    tslib_1.__decorate([
        HostListener('@menuLeave.done', ['$event'])
    ], LyMenu.prototype, "endAnimation", null);
    LyMenu = tslib_1.__decorate([
        Component({
            selector: 'ly-menu',
            animations: tslib_1.__spread(ANIMATIONS),
            template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
            exportAs: 'lyMenu'
        })
    ], LyMenu);
    return LyMenu;
}());
export { LyMenu };
var LyMenuItem = /** @class */ (function () {
    function LyMenuItem(_menu, el, renderer) {
        this._menu = _menu;
        renderer.addClass(el.nativeElement, _menu.classes.item);
    }
    LyMenuItem.prototype._click = function () {
        if (this._menu.ref && this._menu.ref._menuRef) {
            this._menu.ref.closeMenu();
        }
    };
    LyMenuItem.ctorParameters = function () { return [
        { type: LyMenu, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        HostListener('click')
    ], LyMenuItem.prototype, "_click", null);
    LyMenuItem = tslib_1.__decorate([
        Directive({
            selector: '[ly-menu-item]'
        }),
        tslib_1.__param(0, Optional())
    ], LyMenuItem);
    return LyMenuItem;
}());
export { LyMenuItem };
var LyMenuTriggerFor = /** @class */ (function () {
    function LyMenuTriggerFor(elementRef, overlay) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this._menuOpen = false;
        this.menuOpened = new EventEmitter();
        this.menuClosed = new EventEmitter();
    }
    Object.defineProperty(LyMenuTriggerFor.prototype, "menuOpen", {
        /** Whether the menu is open. */
        get: function () {
            return this._menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    LyMenuTriggerFor.prototype.ngOnDestroy = function () {
        // Not force destruction if it is already being destroyed
        if (!this._destroying) {
            this.closeMenu();
        }
    };
    LyMenuTriggerFor.prototype._handleClick = function () {
        this.toggleMenu();
    };
    /** Opens the menu */
    LyMenuTriggerFor.prototype.openMenu = function () {
        if (!this._menuRef) {
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
    /** Closes the menu */
    LyMenuTriggerFor.prototype.closeMenu = function () {
        this.detach();
    };
    /** Toggle menu */
    LyMenuTriggerFor.prototype.toggleMenu = function () {
        if (this._menuRef) {
            this.closeMenu();
        }
        else {
            this.openMenu();
        }
    };
    /** @docs-private */
    LyMenuTriggerFor.prototype.detach = function () {
        if (this._menuRef) {
            this._destroying = true;
            this._menuRef.detach();
        }
    };
    /** @docs-private */
    LyMenuTriggerFor.prototype.destroy = function () {
        var _this = this;
        if (this._menuRef) {
            this.menuClosed.emit(null);
            this._menuRef.remove();
            this._menuRef = null;
            this._destroying = false;
            Promise.resolve(null).then(function () { return _this._menuOpen = false; });
        }
    };
    LyMenuTriggerFor.prototype._getHostElement = function () {
        return this.elementRef.nativeElement;
    };
    LyMenuTriggerFor.prototype._setMenuOpenToTrue = function () {
        this._menuOpen = true;
    };
    LyMenuTriggerFor.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyOverlay }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyMenuTriggerFor.prototype, "lyMenuTriggerFor", void 0);
    tslib_1.__decorate([
        Output()
    ], LyMenuTriggerFor.prototype, "menuOpened", void 0);
    tslib_1.__decorate([
        Output()
    ], LyMenuTriggerFor.prototype, "menuClosed", void 0);
    LyMenuTriggerFor = tslib_1.__decorate([
        Directive({
            selector: '[lyMenuTriggerFor]',
            host: {
                '(click)': '_handleClick()'
            },
            exportAs: 'lyMenuTriggerFor'
        })
    ], LyMenuTriggerFor);
    return LyMenuTriggerFor;
}());
export { LyMenuTriggerFor };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxxQkFBcUIsQ0FBQztBQVk3QixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDMUMsSUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBRTFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBdUMsRUFBRSxHQUFhO0lBQ3BFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTztRQUNMLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElBQUksRUFBRSxjQUFNLE9BQUEsQ0FDVixLQUFLLENBQUMsSUFBSTtlQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtlQUNmLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFlB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QUssQ0FBQztZQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQXRCLENBQXNCLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Z0JBdEVxQixVQUFVO2dCQUNiLFNBQVM7O0lBUG5CO1FBQVIsS0FBSyxFQUFFOzhEQUFvQztJQUVsQztRQUFULE1BQU0sRUFBRTt3REFBZ0Q7SUFDL0M7UUFBVCxNQUFNLEVBQUU7d0RBQWdEO0lBZDlDLGdCQUFnQjtRQVA1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsZ0JBQWdCO2FBQzVCO1lBQ0QsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO09BQ1csZ0JBQWdCLENBeUY1QjtJQUFELHVCQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0F6RlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBQbGFjZW1lbnQsXG4gIFBvc2l0aW9uaW5nLFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBMeU1lbnVUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIE1lbnUgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVudVZhcmlhYmxlcyB7XG4gIG1lbnU/OiBMeU1lbnVUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgREVGQVVMVF9YUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeU1lbnVWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgbWVudSA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCkgPT4gKFxuICAgICAgdGhlbWUubWVudVxuICAgICAgICAmJiB0aGVtZS5tZW51LnJvb3RcbiAgICAgICAgJiYgKHRoZW1lLm1lbnUucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgID8gdGhlbWUubWVudS5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKG1lbnUpKS5jc3NcbiAgICAgICAgICA6IHRoZW1lLm1lbnUucm9vdChtZW51KSlcbiAgICApLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JhY2tncm91bmQ6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdH07Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzoke3NoYWRvd0J1aWxkZXIoNCl9O2Rpc3BsYXk6YmxvY2s7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDt0cmFuc2Zvcm0tb3JpZ2luOmluaGVyaXQ7cG9pbnRlci1ldmVudHM6YWxsO292ZXJmbG93OmF1dG87bWF4LWhlaWdodDppbmhlcml0O21heC13aWR0aDppbmhlcml0O2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgICBpdGVtOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6NDhweDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt9YFxuICB9O1xufTtcblxuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIHRlbXBsYXRlVXJsOiAnbWVudS5odG1sJyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2NvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvciAmIHsgfTtcblxuICAvKiogUG9zaXRpb24gd2hlcmUgdGhlIG1lbnUgd2lsbCBiZSBwbGFjZWQuICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIC8qKiBUaGUgeC1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcblxuICAvKiogVGhlIHktYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeVBvc2l0aW9uOiBZUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMeU1lbnU6IHJlcXVpcmUgQElucHV0KCkgcmVmJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy54UG9zaXRpb24gPSBERUZBVUxUX1hQT1NJVElPTjtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnJlZi5fbWVudVJlZikge1xuICAgICAgdGhpcy5yZWYuX21lbnVSZWYub25SZXNpemVTY3JvbGwgPSB0aGlzLl91cGRhdGVQbGFjZW1lbnQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlUGxhY2VtZW50KCk7XG4gICAgdGhpcy5yZWYubWVudU9wZW5lZC5lbWl0KCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWYuX3NldE1lbnVPcGVuVG9UcnVlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQbGFjZW1lbnQgKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5yZWYuX21lbnVSZWYhLmNvbnRhaW5lckVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyByZXNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsICdpbml0aWFsJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCAnaW5pdGlhbCcpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcodGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5yZWYuX2dldEhvc3RFbGVtZW50KCksIGVsLCB0aGlzLl90aGVtZS52YXJpYWJsZXMpO1xuXG4gICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgsIDApYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuXG4gICAgLy8gc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgcG9zaXRpb24uaGVpZ2h0ID09PSAnaW5pdGlhbCcgPyAnMTAwJScgOiBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcG9zaXRpb24ud2lkdGggPT09ICdpbml0aWFsJyA/ICcxMDAlJyA6IHBvc2l0aW9uLndpZHRoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZiAmJiB0aGlzLl9tZW51LnJlZi5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIF9tZW51LmNsYXNzZXMuaXRlbSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygpJ1xuICB9LFxuICBleHBvcnRBczogJ2x5TWVudVRyaWdnZXJGb3InXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmPzogT3ZlcmxheUZhY3RvcnkgfCBudWxsO1xuICBwcml2YXRlIF9tZW51T3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kZXN0cm95aW5nOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGlzIG9wZW4uICovXG4gIGdldCBtZW51T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudU9wZW47XG4gIH1cblxuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBtZW51T3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbWVudUNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBOb3QgZm9yY2UgZGVzdHJ1Y3Rpb24gaWYgaXQgaXMgYWxyZWFkeSBiZWluZyBkZXN0cm95ZWRcbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3lpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgLyoqIE9wZW5zIHRoZSBtZW51ICovXG4gIG9wZW5NZW51KCkge1xuICAgIGlmICghdGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsb3NlcyB0aGUgbWVudSAqL1xuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgbWVudSAqL1xuICB0b2dnbGVNZW51KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5NZW51KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9kZXN0cm95aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5tZW51Q2xvc2VkLmVtaXQobnVsbCEpO1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgICAgdGhpcy5fZGVzdHJveWluZyA9IGZhbHNlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5fbWVudU9wZW4gPSBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIF9zZXRNZW51T3BlblRvVHJ1ZSgpIHtcbiAgICB0aGlzLl9tZW51T3BlbiA9IHRydWU7XG4gIH1cblxufVxuIl19