import { __decorate, __param } from 'tslib';
import { ElementRef, Renderer2, ViewChild, Input, HostBinding, HostListener, Component, Optional, Directive, EventEmitter, Output, NgModule } from '@angular/core';
import { YPosition, XPosition, StyleCollection, shadowBuilder, toBoolean, Positioning, LyTheme2, LyOverlay, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
__decorate([
    ViewChild('container', { static: false })
], LyMenu.prototype, "_container", void 0);
__decorate([
    Input()
], LyMenu.prototype, "ref", void 0);
__decorate([
    Input()
], LyMenu.prototype, "placement", void 0);
__decorate([
    Input()
], LyMenu.prototype, "xPosition", void 0);
__decorate([
    Input()
], LyMenu.prototype, "yPosition", void 0);
__decorate([
    Input()
], LyMenu.prototype, "hasBackdrop", null);
__decorate([
    HostBinding('@menuLeave')
], LyMenu.prototype, "menuLeave2", void 0);
__decorate([
    HostListener('@menuLeave.done', ['$event'])
], LyMenu.prototype, "endAnimation", null);
LyMenu = __decorate([
    Component({
        selector: 'ly-menu',
        animations: [...ANIMATIONS],
        template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
        exportAs: 'lyMenu'
    })
], LyMenu);
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
__decorate([
    HostListener('click')
], LyMenuItem.prototype, "_click", null);
LyMenuItem = __decorate([
    Directive({
        selector: '[ly-menu-item]'
    }),
    __param(0, Optional())
], LyMenuItem);
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
__decorate([
    Input()
], LyMenuTriggerFor.prototype, "lyMenuTriggerFor", void 0);
__decorate([
    Output()
], LyMenuTriggerFor.prototype, "menuOpened", void 0);
__decorate([
    Output()
], LyMenuTriggerFor.prototype, "menuClosed", void 0);
LyMenuTriggerFor = __decorate([
    Directive({
        selector: '[lyMenuTriggerFor]',
        host: {
            '(click)': '_handleClick()'
        },
        exportAs: 'lyMenuTriggerFor'
    })
], LyMenuTriggerFor);

let LyMenuModule = class LyMenuModule {
};
LyMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, LyCommonModule, LyOverlayModule],
        exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
        declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
    })
], LyMenuModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyMenu, LyMenuItem, LyMenuModule, LyMenuTriggerFor, ɵ0 };
//# sourceMappingURL=alyle-ui-menu.js.map
