import * as tslib_1 from "tslib";
import { AfterViewInit, Component, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, Positioning, shadowBuilder, ThemeVariables, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef, toBoolean } from '@alyle/ui';
import { trigger, style, animate, transition, keyframes, } from '@angular/animations';
const STYLE_PRIORITY = -1;
const DEFAULT_PLACEMENT = YPosition.below;
const DEFAULT_XPOSITION = XPosition.after;
export const STYLES = (theme, ref) => {
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
        this._hasBackdrop = true;
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    /** Whether the menu has a backdrop. */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(value) {
        this._hasBackdrop = toBoolean(value);
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
            this.ref._menuRef.updateBackdrop(this.hasBackdrop);
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
    Input()
], LyMenu.prototype, "hasBackdrop", null);
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
                fnDestroy: this.detach.bind(this),
                hasBackdrop: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7QUFZN0IsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQzFDLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUUxQyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUF1QyxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQy9FLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTztRQUNMLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNWLEtBQUssQ0FBQyxJQUFJO2VBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO2VB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SSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztDQUVGLENBQUE7O1lBekV1QixVQUFVO1lBQ2IsU0FBUzs7QUFQbkI7SUFBUixLQUFLLEVBQUU7MERBQW9DO0FBRWxDO0lBQVQsTUFBTSxFQUFFO29EQUFnRDtBQUMvQztJQUFULE1BQU0sRUFBRTtvREFBZ0Q7QUFkOUMsZ0JBQWdCO0lBUDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztHQUNXLGdCQUFnQixDQTBGNUI7U0ExRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBQbGFjZW1lbnQsXG4gIFBvc2l0aW9uaW5nLFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZixcbiAgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVudVRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgTWVudSBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlNZW51VmFyaWFibGVzIHtcbiAgbWVudT86IEx5TWVudVRoZW1lO1xufVxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBERUZBVUxUX1hQT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeU1lbnVWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgbWVudSA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCkgPT4gKFxuICAgICAgdGhlbWUubWVudVxuICAgICAgICAmJiB0aGVtZS5tZW51LnJvb3RcbiAgICAgICAgJiYgKHRoZW1lLm1lbnUucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgID8gdGhlbWUubWVudS5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKG1lbnUpKS5jc3NcbiAgICAgICAgICA6IHRoZW1lLm1lbnUucm9vdChtZW51KSlcbiAgICApLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JhY2tncm91bmQ6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdH07Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzoke3NoYWRvd0J1aWxkZXIoNCl9O2Rpc3BsYXk6YmxvY2s7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDt0cmFuc2Zvcm0tb3JpZ2luOmluaGVyaXQ7cG9pbnRlci1ldmVudHM6YWxsO292ZXJmbG93OmF1dG87bWF4LWhlaWdodDppbmhlcml0O21heC13aWR0aDppbmhlcml0O2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgICBpdGVtOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6NDhweDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt9YFxuICB9O1xufTtcblxuY29uc3QgQU5JTUFUSU9OUyA9IFtcbiAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gaW4nLCBbXG4gICAgICBhbmltYXRlKCcxMjVtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgfSlcbiAgICAgIF0pKVxuICAgIF0pLFxuICBdKSxcbiAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gIF0pXG5dO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbLi4uQU5JTUFUSU9OU10sXG4gIHRlbXBsYXRlVXJsOiAnbWVudS5odG1sJyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2NvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvciAmIHsgfTtcblxuICAvKiogUG9zaXRpb24gd2hlcmUgdGhlIG1lbnUgd2lsbCBiZSBwbGFjZWQuICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIC8qKiBUaGUgeC1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcblxuICAvKiogVGhlIHktYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeVBvc2l0aW9uOiBZUG9zaXRpb247XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgaGFzIGEgYmFja2Ryb3AuICovXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQmFja2Ryb3A7XG4gIH1cbiAgc2V0IGhhc0JhY2tkcm9wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hhc0JhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ0BtZW51TGVhdmUnKSBtZW51TGVhdmUyO1xuICBASG9zdExpc3RlbmVyKCdAbWVudUxlYXZlLmRvbmUnLCBbJyRldmVudCddKSBlbmRBbmltYXRpb24oZSkge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0x5TWVudTogcmVxdWlyZSBASW5wdXQoKSByZWYnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBsYWNlbWVudCAmJiAhdGhpcy54UG9zaXRpb24gJiYgIXRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnhQb3NpdGlvbiA9IERFRkFVTFRfWFBPU0lUSU9OO1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLnJlZi5fbWVudVJlZi5vblJlc2l6ZVNjcm9sbCA9IHRoaXMuX3VwZGF0ZVBsYWNlbWVudC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5yZWYuX21lbnVSZWYudXBkYXRlQmFja2Ryb3AodGhpcy5oYXNCYWNrZHJvcCk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVBsYWNlbWVudCgpO1xuICAgIHRoaXMucmVmLm1lbnVPcGVuZWQuZW1pdCgpO1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVmLl9zZXRNZW51T3BlblRvVHJ1ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2VtZW50ICgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMucmVmLl9tZW51UmVmIS5jb250YWluZXJFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gcmVzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCAnaW5pdGlhbCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgJ2luaXRpYWwnKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24sIHRoaXMucmVmLl9nZXRIb3N0RWxlbWVudCgpLCBlbCwgdGhpcy5fdGhlbWUudmFyaWFibGVzKTtcblxuICAgIC8vIHNldCBwb3NpdGlvblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4LCAwKWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0tb3JpZ2luJywgYCR7cG9zaXRpb24ub3h9ICR7cG9zaXRpb24ub3l9IDBgKTtcblxuICAgIC8vIHNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsIHBvc2l0aW9uLmhlaWdodCA9PT0gJ2luaXRpYWwnID8gJzEwMCUnIDogcG9zaXRpb24uaGVpZ2h0KTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHBvc2l0aW9uLndpZHRoID09PSAnaW5pdGlhbCcgPyAnMTAwJScgOiBwb3NpdGlvbi53aWR0aCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudUl0ZW0ge1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudS5yZWYgJiYgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnUucmVmLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9tZW51OiBMeU1lbnUsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBfbWVudS5jbGFzc2VzLml0ZW0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soKSdcbiAgfSxcbiAgZXhwb3J0QXM6ICdseU1lbnVUcmlnZ2VyRm9yJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEN1cnJlbnQgbWVudVJlZiAqL1xuICBfbWVudVJlZj86IE92ZXJsYXlGYWN0b3J5IHwgbnVsbDtcbiAgcHJpdmF0ZSBfbWVudU9wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGVzdHJveWluZzogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgbWVudSBpcyBvcGVuLiAqL1xuICBnZXQgbWVudU9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVPcGVuO1xuICB9XG5cbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbWVudU9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1lbnVDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gTm90IGZvcmNlIGRlc3RydWN0aW9uIGlmIGl0IGlzIGFscmVhZHkgYmVpbmcgZGVzdHJveWVkXG4gICAgaWYgKCF0aGlzLl9kZXN0cm95aW5nKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG4gIC8qKiBPcGVucyB0aGUgbWVudSAqL1xuICBvcGVuTWVudSgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgIH0sIHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcyksXG4gICAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsb3NlcyB0aGUgbWVudSAqL1xuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgbWVudSAqL1xuICB0b2dnbGVNZW51KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5NZW51KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9kZXN0cm95aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5tZW51Q2xvc2VkLmVtaXQobnVsbCEpO1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgICAgdGhpcy5fZGVzdHJveWluZyA9IGZhbHNlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5fbWVudU9wZW4gPSBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIF9zZXRNZW51T3BlblRvVHJ1ZSgpIHtcbiAgICB0aGlzLl9tZW51T3BlbiA9IHRydWU7XG4gIH1cblxufVxuIl19