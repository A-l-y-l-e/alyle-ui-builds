import * as tslib_1 from "tslib";
import { AfterViewInit, Component, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, Positioning, shadowBuilder, ThemeVariables, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
import { trigger, style, animate, transition, keyframes, } from '@angular/animations';
const STYLE_PRIORITY = -1;
const DEFAULT_PLACEMENT = YPosition.below;
const DEFAULT_XPOSITION = XPosition.after;
const STYLES = (theme, ref) => {
    const menu = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: () => (theme.menu
            && theme.menu.root
            && (theme.menu.root instanceof StyleCollection
                ? theme.menu.root.setTransformer(fn => fn(menu)).css
                : theme.menu.root(menu))),
        container: (className) => `${className}{background:${theme.background.primary.default};border-radius:2px;box-shadow:${shadowBuilder(4)};display:block;padding-top:8px;padding-bottom:8px;transform-origin:inherit;pointer-events:all;overflow:auto;max-height:inherit;max-width:inherit;box-sizing:border-box;}`,
        item: (className) => `${className}{display:flex;min-height:48px;border-radius:0;width:100%;justify-content:flex-start;}`
    };
};
const ɵ0 = STYLES;
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
/** Menu container */
let LyMenu = class LyMenu {
    constructor(_theme, _el, _renderer) {
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
    endAnimation(e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    }
    ngOnInit() {
        if (!this.ref) {
            throw new Error('LyMenu: require @Input() ref');
        }
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.xPosition = DEFAULT_XPOSITION;
            this.placement = DEFAULT_PLACEMENT;
        }
    }
    ngAfterViewInit() {
        if (this.ref._menuRef) {
            this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
        }
        this._updatePlacement();
        this.ref.menuOpened.emit();
        Promise.resolve(null).then(() => {
            this.ref._setMenuOpenToTrue();
        });
    }
    _updatePlacement() {
        const el = this.ref._menuRef.containerElement;
        const container = this._container.nativeElement;
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', 'initial');
        const position = new Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
        // set position
        this._renderer.setStyle(el, 'transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
        this._renderer.setStyle(this._el.nativeElement, 'transform-origin', `${position.ox} ${position.oy} 0`);
        // set height & width
        this._renderer.setStyle(container, 'height', position.height === 'initial' ? '100%' : position.height);
        this._renderer.setStyle(container, 'width', position.width === 'initial' ? '100%' : position.width);
    }
};
LyMenu.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
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
        animations: [...ANIMATIONS],
        template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
        exportAs: 'lyMenu'
    })
], LyMenu);
export { LyMenu };
let LyMenuItem = class LyMenuItem {
    constructor(_menu, el, renderer) {
        this._menu = _menu;
        renderer.addClass(el.nativeElement, _menu.classes.item);
    }
    _click() {
        if (this._menu.ref && this._menu.ref._menuRef) {
            this._menu.ref.closeMenu();
        }
    }
};
LyMenuItem.ctorParameters = () => [
    { type: LyMenu, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];
tslib_1.__decorate([
    HostListener('click')
], LyMenuItem.prototype, "_click", null);
LyMenuItem = tslib_1.__decorate([
    Directive({
        selector: '[ly-menu-item]'
    }),
    tslib_1.__param(0, Optional())
], LyMenuItem);
export { LyMenuItem };
let LyMenuTriggerFor = class LyMenuTriggerFor {
    constructor(elementRef, overlay) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this._menuOpen = false;
        this.menuOpened = new EventEmitter();
        this.menuClosed = new EventEmitter();
    }
    /** Whether the menu is open. */
    get menuOpen() {
        return this._menuOpen;
    }
    ngOnDestroy() {
        // Not force destruction if it is already being destroyed
        if (!this._destroying) {
            this.closeMenu();
        }
    }
    _handleClick() {
        this.toggleMenu();
    }
    /** Opens the menu */
    openMenu() {
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
    }
    /** Closes the menu */
    closeMenu() {
        this.detach();
    }
    /** Toggle menu */
    toggleMenu() {
        if (this._menuRef) {
            this.closeMenu();
        }
        else {
            this.openMenu();
        }
    }
    /** @docs-private */
    detach() {
        if (this._menuRef) {
            this._destroying = true;
            this._menuRef.detach();
        }
    }
    /** @docs-private */
    destroy() {
        if (this._menuRef) {
            this.menuClosed.emit(null);
            this._menuRef.remove();
            this._menuRef = null;
            this._destroying = false;
            Promise.resolve(null).then(() => this._menuOpen = false);
        }
    }
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
    _setMenuOpenToTrue() {
        this._menuOpen = true;
    }
};
LyMenuTriggerFor.ctorParameters = () => [
    { type: ElementRef },
    { type: LyOverlay }
];
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
export { LyMenuTriggerFor };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxxQkFBcUIsQ0FBQztBQVk3QixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDMUMsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBRTFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBdUMsRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN4RSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU87UUFDTCxTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FDVixLQUFLLENBQUMsSUFBSTtlQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtlQUNmLENBQUMsS0FBSyxDQUFDLElB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QUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztDQUVGLENBQUE7O1lBeEV1QixVQUFVO1lBQ2IsU0FBUzs7QUFQbkI7SUFBUixLQUFLLEVBQUU7MERBQW9DO0FBRWxDO0lBQVQsTUFBTSxFQUFFO29EQUFnRDtBQUMvQztJQUFULE1BQU0sRUFBRTtvREFBZ0Q7QUFkOUMsZ0JBQWdCO0lBUDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztHQUNXLGdCQUFnQixDQXlGNUI7U0F6RlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBQbGFjZW1lbnQsXG4gIFBvc2l0aW9uaW5nLFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBMeU1lbnVUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIE1lbnUgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVudVZhcmlhYmxlcyB7XG4gIG1lbnU/OiBMeU1lbnVUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgREVGQVVMVF9YUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeU1lbnVWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgbWVudSA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCkgPT4gKFxuICAgICAgdGhlbWUubWVudVxuICAgICAgICAmJiB0aGVtZS5tZW51LnJvb3RcbiAgICAgICAgJiYgKHRoZW1lLm1lbnUucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgID8gdGhlbWUubWVudS5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKG1lbnUpKS5jc3NcbiAgICAgICAgICA6IHRoZW1lLm1lbnUucm9vdChtZW51KSlcbiAgICApLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JhY2tncm91bmQ6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdH07Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzoke3NoYWRvd0J1aWxkZXIoNCl9O2Rpc3BsYXk6YmxvY2s7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDt0cmFuc2Zvcm0tb3JpZ2luOmluaGVyaXQ7cG9pbnRlci1ldmVudHM6YWxsO292ZXJmbG93OmF1dG87bWF4LWhlaWdodDppbmhlcml0O21heC13aWR0aDppbmhlcml0O2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgICBpdGVtOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6NDhweDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt9YFxuICB9O1xufTtcblxuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIHRlbXBsYXRlVXJsOiAnbWVudS5odG1sJyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2NvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvciAmIHsgfTtcblxuICAvKiogUG9zaXRpb24gd2hlcmUgdGhlIG1lbnUgd2lsbCBiZSBwbGFjZWQuICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIC8qKiBUaGUgeC1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcblxuICAvKiogVGhlIHktYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeVBvc2l0aW9uOiBZUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMeU1lbnU6IHJlcXVpcmUgQElucHV0KCkgcmVmJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy54UG9zaXRpb24gPSBERUZBVUxUX1hQT1NJVElPTjtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnJlZi5fbWVudVJlZikge1xuICAgICAgdGhpcy5yZWYuX21lbnVSZWYub25SZXNpemVTY3JvbGwgPSB0aGlzLl91cGRhdGVQbGFjZW1lbnQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlUGxhY2VtZW50KCk7XG4gICAgdGhpcy5yZWYubWVudU9wZW5lZC5lbWl0KCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWYuX3NldE1lbnVPcGVuVG9UcnVlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQbGFjZW1lbnQgKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5yZWYuX21lbnVSZWYhLmNvbnRhaW5lckVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyByZXNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsICdpbml0aWFsJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCAnaW5pdGlhbCcpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcodGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5yZWYuX2dldEhvc3RFbGVtZW50KCksIGVsLCB0aGlzLl90aGVtZS52YXJpYWJsZXMpO1xuXG4gICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgsIDApYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuXG4gICAgLy8gc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgcG9zaXRpb24uaGVpZ2h0ID09PSAnaW5pdGlhbCcgPyAnMTAwJScgOiBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcG9zaXRpb24ud2lkdGggPT09ICdpbml0aWFsJyA/ICcxMDAlJyA6IHBvc2l0aW9uLndpZHRoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZiAmJiB0aGlzLl9tZW51LnJlZi5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIF9tZW51LmNsYXNzZXMuaXRlbSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygpJ1xuICB9LFxuICBleHBvcnRBczogJ2x5TWVudVRyaWdnZXJGb3InXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmPzogT3ZlcmxheUZhY3RvcnkgfCBudWxsO1xuICBwcml2YXRlIF9tZW51T3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kZXN0cm95aW5nOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGlzIG9wZW4uICovXG4gIGdldCBtZW51T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudU9wZW47XG4gIH1cblxuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBtZW51T3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbWVudUNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBOb3QgZm9yY2UgZGVzdHJ1Y3Rpb24gaWYgaXQgaXMgYWxyZWFkeSBiZWluZyBkZXN0cm95ZWRcbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3lpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgLyoqIE9wZW5zIHRoZSBtZW51ICovXG4gIG9wZW5NZW51KCkge1xuICAgIGlmICghdGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsb3NlcyB0aGUgbWVudSAqL1xuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgbWVudSAqL1xuICB0b2dnbGVNZW51KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5NZW51KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9kZXN0cm95aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5tZW51Q2xvc2VkLmVtaXQobnVsbCEpO1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgICAgdGhpcy5fZGVzdHJveWluZyA9IGZhbHNlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5fbWVudU9wZW4gPSBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIF9zZXRNZW51T3BlblRvVHJ1ZSgpIHtcbiAgICB0aGlzLl9tZW51T3BlbiA9IHRydWU7XG4gIH1cblxufVxuIl19