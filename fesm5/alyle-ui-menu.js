import { __decorate, __metadata, __spread, __param } from 'tslib';
import { ViewChild, ElementRef, Input, HostBinding, HostListener, Component, Renderer2, Directive, Optional, TemplateRef, Output, EventEmitter, NgModule } from '@angular/core';
import { YPosition, XPosition, Positioning, LyTheme2, LyOverlay, shadowBuilder, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

var STYLE_PRIORITY = -1;
var DEFAULT_PLACEMENT = YPosition.below;
var DEFAULT_XPOSITION = XPosition.after;
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
        boxSizing: 'border-box'
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
        this.classes = this._theme.addStyleSheet(STYLES);
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
    __decorate([
        ViewChild('container', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyMenu.prototype, "_container", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LyMenu.prototype, "ref", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LyMenu.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LyMenu.prototype, "xPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LyMenu.prototype, "yPosition", void 0);
    __decorate([
        HostBinding('@menuLeave'),
        __metadata("design:type", Object)
    ], LyMenu.prototype, "menuLeave2", void 0);
    __decorate([
        HostListener('@menuLeave.done', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LyMenu.prototype, "endAnimation", null);
    LyMenu = __decorate([
        Component({
            selector: 'ly-menu',
            animations: __spread(ANIMATIONS),
            template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
            exportAs: 'lyMenu'
        }),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2])
    ], LyMenu);
    return LyMenu;
}());
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
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyMenuItem.prototype, "_click", null);
    LyMenuItem = __decorate([
        Directive({
            selector: '[ly-menu-item]'
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [LyMenu,
            ElementRef,
            Renderer2])
    ], LyMenuItem);
    return LyMenuItem;
}());
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
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], LyMenuTriggerFor.prototype, "lyMenuTriggerFor", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LyMenuTriggerFor.prototype, "menuOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LyMenuTriggerFor.prototype, "menuClosed", void 0);
    LyMenuTriggerFor = __decorate([
        Directive({
            selector: '[lyMenuTriggerFor]',
            host: {
                '(click)': '_handleClick()'
            },
            exportAs: 'lyMenuTriggerFor'
        }),
        __metadata("design:paramtypes", [ElementRef,
            LyOverlay])
    ], LyMenuTriggerFor);
    return LyMenuTriggerFor;
}());

var LyMenuModule = /** @class */ (function () {
    function LyMenuModule() {
    }
    LyMenuModule = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule, LyCommonModule, LyOverlayModule],
            exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
            declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
        })
    ], LyMenuModule);
    return LyMenuModule;
}());

export { LyMenu, LyMenuItem, LyMenuModule, LyMenuTriggerFor, ɵ0 };
//# sourceMappingURL=alyle-ui-menu.js.map
