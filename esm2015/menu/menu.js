import * as tslib_1 from "tslib";
import { AfterViewInit, Component, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, Positioning, shadowBuilder, ThemeVariables, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef, toBoolean } from '@alyle/ui';
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7QUFZN0IsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQzFDLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUUxQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXVDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxPQUFPO1FBQ0wsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1YsS0FBSyxDQUFDLElBQUk7ZUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7ZUFDZixDQUFDLEtB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Q3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztDQUVGLENBQUE7O1lBekV1QixVQUFVO1lBQ2IsU0FBUzs7QUFQbkI7SUFBUixLQUFLLEVBQUU7MERBQW9DO0FBRWxDO0lBQVQsTUFBTSxFQUFFO29EQUFnRDtBQUMvQztJQUFULE1BQU0sRUFBRTtvREFBZ0Q7QUFkOUMsZ0JBQWdCO0lBUDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztHQUNXLGdCQUFnQixDQTBGNUI7U0ExRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBQbGFjZW1lbnQsXG4gIFBvc2l0aW9uaW5nLFxuICBzaGFkb3dCdWlsZGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZixcbiAgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVudVRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgTWVudSBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlNZW51VmFyaWFibGVzIHtcbiAgbWVudT86IEx5TWVudVRoZW1lO1xufVxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBERUZBVUxUX1hQT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5TWVudVZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBtZW51ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoKSA9PiAoXG4gICAgICB0aGVtZS5tZW51XG4gICAgICAgICYmIHRoZW1lLm1lbnUucm9vdFxuICAgICAgICAmJiAodGhlbWUubWVudS5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgPyB0aGVtZS5tZW51LnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4obWVudSkpLmNzc1xuICAgICAgICAgIDogdGhlbWUubWVudS5yb290KG1lbnUpKVxuICAgICksXG4gICAgY29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17YmFja2dyb3VuZDoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0fTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OiR7c2hhZG93QnVpbGRlcig0KX07ZGlzcGxheTpibG9jaztwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O3RyYW5zZm9ybS1vcmlnaW46aW5oZXJpdDtwb2ludGVyLWV2ZW50czphbGw7b3ZlcmZsb3c6YXV0bzttYXgtaGVpZ2h0OmluaGVyaXQ7bWF4LXdpZHRoOmluaGVyaXQ7Ym94LXNpemluZzpib3JkZXItYm94O31gLFxuICAgIGl0ZW06IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7bWluLWhlaWdodDo0OHB4O2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O31gXG4gIH07XG59O1xuXG5jb25zdCBBTklNQVRJT05TID0gW1xuICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBpbicsIFtcbiAgICAgIGFuaW1hdGUoJzEyNW1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICB9KVxuICAgICAgXSkpXG4gICAgXSksXG4gIF0pLFxuICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgXSlcbl07XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFsuLi5BTklNQVRJT05TXSxcbiAgdGVtcGxhdGVVcmw6ICdtZW51Lmh0bWwnLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICAvKipcbiAgICogRGVzdHJveSBtZW51XG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yICYgeyB9O1xuXG4gIC8qKiBQb3NpdGlvbiB3aGVyZSB0aGUgbWVudSB3aWxsIGJlIHBsYWNlZC4gKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cbiAgLyoqIFRoZSB4LWF4aXMgcG9zaXRpb24gb2YgdGhlIG1lbnUuICovXG4gIEBJbnB1dCgpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuXG4gIC8qKiBUaGUgeS1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBASW5wdXQoKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcblxuICAvKiogV2hldGhlciB0aGUgbWVudSBoYXMgYSBiYWNrZHJvcC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGhhc0JhY2tkcm9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNCYWNrZHJvcDtcbiAgfVxuICBzZXQgaGFzQmFja2Ryb3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTHlNZW51OiByZXF1aXJlIEBJbnB1dCgpIHJlZicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMueFBvc2l0aW9uID0gREVGQVVMVF9YUE9TSVRJT047XG4gICAgICB0aGlzLnBsYWNlbWVudCA9IERFRkFVTFRfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZWYuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMucmVmLl9tZW51UmVmLm9uUmVzaXplU2Nyb2xsID0gdGhpcy5fdXBkYXRlUGxhY2VtZW50LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnJlZi5fbWVudVJlZi51cGRhdGVCYWNrZHJvcCh0aGlzLmhhc0JhY2tkcm9wKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlUGxhY2VtZW50KCk7XG4gICAgdGhpcy5yZWYubWVudU9wZW5lZC5lbWl0KCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWYuX3NldE1lbnVPcGVuVG9UcnVlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQbGFjZW1lbnQgKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5yZWYuX21lbnVSZWYhLmNvbnRhaW5lckVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyByZXNldCBoZWlnaHQgJiB3aWR0aFxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcsICdpbml0aWFsJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCAnaW5pdGlhbCcpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcodGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5yZWYuX2dldEhvc3RFbGVtZW50KCksIGVsLCB0aGlzLl90aGVtZS52YXJpYWJsZXMpO1xuXG4gICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgsIDApYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHtwb3NpdGlvbi5veH0gJHtwb3NpdGlvbi5veX0gMGApO1xuXG4gICAgLy8gc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgcG9zaXRpb24uaGVpZ2h0ID09PSAnaW5pdGlhbCcgPyAnMTAwJScgOiBwb3NpdGlvbi5oZWlnaHQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcG9zaXRpb24ud2lkdGggPT09ICdpbml0aWFsJyA/ICcxMDAlJyA6IHBvc2l0aW9uLndpZHRoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZiAmJiB0aGlzLl9tZW51LnJlZi5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIF9tZW51LmNsYXNzZXMuaXRlbSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygpJ1xuICB9LFxuICBleHBvcnRBczogJ2x5TWVudVRyaWdnZXJGb3InXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmPzogT3ZlcmxheUZhY3RvcnkgfCBudWxsO1xuICBwcml2YXRlIF9tZW51T3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kZXN0cm95aW5nOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGlzIG9wZW4uICovXG4gIGdldCBtZW51T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudU9wZW47XG4gIH1cblxuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBtZW51T3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbWVudUNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBOb3QgZm9yY2UgZGVzdHJ1Y3Rpb24gaWYgaXQgaXMgYWxyZWFkeSBiZWluZyBkZXN0cm95ZWRcbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3lpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgLyoqIE9wZW5zIHRoZSBtZW51ICovXG4gIG9wZW5NZW51KCkge1xuICAgIGlmICghdGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xvc2VzIHRoZSBtZW51ICovXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSBtZW51ICovXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLm1lbnVDbG9zZWQuZW1pdChudWxsISk7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IG51bGw7XG4gICAgICB0aGlzLl9kZXN0cm95aW5nID0gZmFsc2U7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl9tZW51T3BlbiA9IGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgX3NldE1lbnVPcGVuVG9UcnVlKCkge1xuICAgIHRoaXMuX21lbnVPcGVuID0gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=