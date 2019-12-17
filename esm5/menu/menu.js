import * as tslib_1 from "tslib";
import { AfterViewInit, Component, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, Positioning, shadowBuilder, ThemeVariables, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef, toBoolean } from '@alyle/ui';
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
        this._hasBackdrop = true;
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyMenu.prototype, "hasBackdrop", {
        /** Whether the menu has a backdrop. */
        get: function () {
            return this._hasBackdrop;
        },
        set: function (value) {
            this._hasBackdrop = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
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
            this.ref._menuRef.updateBackdrop(this.hasBackdrop);
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
                fnDestroy: this.detach.bind(this),
                hasBackdrop: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7QUFZN0IsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQzFDLElBQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUUxQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXVDLEVBQUUsR0FBYTtJQUNwRSxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU87UUFDTCxTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsY0FBTSxPQUFBLENBQ1YsS0FBSyxDQUFDLElBQUk7ZUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7ZUFDZixDQUFDLEtBQUssQ0FBQyxJQUFJLENB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WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlPdmVybGF5LFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZhY3RvcnksXG4gIFBsYWNlbWVudCxcbiAgUG9zaXRpb25pbmcsXG4gIHNoYWRvd0J1aWxkZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFRoZW1lUmVmLFxuICB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGtleWZyYW1lcyxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlNZW51VGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBNZW51IENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeU1lbnVWYXJpYWJsZXMge1xuICBtZW51PzogTHlNZW51VGhlbWU7XG59XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IERFRkFVTFRfWFBPU0lUSU9OID0gWFBvc2l0aW9uLmFmdGVyO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlNZW51VmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICgpID0+IChcbiAgICAgIHRoZW1lLm1lbnVcbiAgICAgICAgJiYgdGhlbWUubWVudS5yb290XG4gICAgICAgICYmICh0aGVtZS5tZW51LnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICA/IHRoZW1lLm1lbnUucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihtZW51KSkuY3NzXG4gICAgICAgICAgOiB0aGVtZS5tZW51LnJvb3QobWVudSkpXG4gICAgKSxcbiAgICBjb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtiYWNrZ3JvdW5kOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHR9O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6JHtzaGFkb3dCdWlsZGVyKDQpfTtkaXNwbGF5OmJsb2NrO3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7dHJhbnNmb3JtLW9yaWdpbjppbmhlcml0O3BvaW50ZXItZXZlbnRzOmFsbDtvdmVyZmxvdzphdXRvO21heC1oZWlnaHQ6aW5oZXJpdDttYXgtd2lkdGg6aW5oZXJpdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7fWAsXG4gICAgaXRlbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjQ4cHg7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCU7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7fWBcbiAgfTtcbn07XG5cbmNvbnN0IEFOSU1BVElPTlMgPSBbXG4gIHRyaWdnZXIoJ21lbnVFbnRlcicsIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluJywgW1xuICAgICAgYW5pbWF0ZSgnMTI1bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgIH0pXG4gICAgICBdKSlcbiAgICBdKSxcbiAgXSksXG4gIHRyaWdnZXIoJ21lbnVMZWF2ZScsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxNTBtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICBdKVxuXTtcblxuLyoqIE1lbnUgY29udGFpbmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgYW5pbWF0aW9uczogWy4uLkFOSU1BVElPTlNdLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIC8qKlxuICAgKiBEZXN0cm95IG1lbnVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9jb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBASW5wdXQoKSByZWY6IEx5TWVudVRyaWdnZXJGb3IgJiB7IH07XG5cbiAgLyoqIFBvc2l0aW9uIHdoZXJlIHRoZSBtZW51IHdpbGwgYmUgcGxhY2VkLiAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuICAvKiogVGhlIHgtYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgQElucHV0KCkgeFBvc2l0aW9uOiBYUG9zaXRpb247XG5cbiAgLyoqIFRoZSB5LWF4aXMgcG9zaXRpb24gb2YgdGhlIG1lbnUuICovXG4gIEBJbnB1dCgpIHlQb3NpdGlvbjogWVBvc2l0aW9uO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGhhcyBhIGJhY2tkcm9wLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0JhY2tkcm9wO1xuICB9XG4gIHNldCBoYXNCYWNrZHJvcCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oYXNCYWNrZHJvcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMeU1lbnU6IHJlcXVpcmUgQElucHV0KCkgcmVmJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy54UG9zaXRpb24gPSBERUZBVUxUX1hQT1NJVElPTjtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnJlZi5fbWVudVJlZikge1xuICAgICAgdGhpcy5yZWYuX21lbnVSZWYub25SZXNpemVTY3JvbGwgPSB0aGlzLl91cGRhdGVQbGFjZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMucmVmLl9tZW51UmVmLnVwZGF0ZUJhY2tkcm9wKHRoaXMuaGFzQmFja2Ryb3ApO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVQbGFjZW1lbnQoKTtcbiAgICB0aGlzLnJlZi5tZW51T3BlbmVkLmVtaXQoKTtcbiAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlZi5fc2V0TWVudU9wZW5Ub1RydWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBsYWNlbWVudCAoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLnJlZi5fbWVudVJlZiEuY29udGFpbmVyRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIHJlc2V0IGhlaWdodCAmIHdpZHRoXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgJ2luaXRpYWwnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd3aWR0aCcsICdpbml0aWFsJyk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbmluZyh0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLnJlZi5fZ2V0SG9zdEVsZW1lbnQoKSwgZWwsIHRoaXMuX3RoZW1lLnZhcmlhYmxlcyk7XG5cbiAgICAvLyBzZXQgcG9zaXRpb25cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCwgMClgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsIGAke3Bvc2l0aW9uLm94fSAke3Bvc2l0aW9uLm95fSAwYCk7XG5cbiAgICAvLyBzZXQgaGVpZ2h0ICYgd2lkdGhcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICdoZWlnaHQnLCBwb3NpdGlvbi5oZWlnaHQgPT09ICdpbml0aWFsJyA/ICcxMDAlJyA6IHBvc2l0aW9uLmhlaWdodCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBwb3NpdGlvbi53aWR0aCA9PT0gJ2luaXRpYWwnID8gJzEwMCUnIDogcG9zaXRpb24ud2lkdGgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVJdGVtIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnUucmVmICYmIHRoaXMuX21lbnUucmVmLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51LnJlZi5jbG9zZU1lbnUoKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbWVudTogTHlNZW51LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgX21lbnUuY2xhc3Nlcy5pdGVtKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCknXG4gIH0sXG4gIGV4cG9ydEFzOiAnbHlNZW51VHJpZ2dlckZvcidcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY/OiBPdmVybGF5RmFjdG9yeSB8IG51bGw7XG4gIHByaXZhdGUgX21lbnVPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rlc3Ryb3lpbmc6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgaXMgb3Blbi4gKi9cbiAgZ2V0IG1lbnVPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9tZW51T3BlbjtcbiAgfVxuXG4gIEBJbnB1dCgpIGx5TWVudVRyaWdnZXJGb3I6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1lbnVPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBtZW51Q2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IEx5T3ZlcmxheVxuICApIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIE5vdCBmb3JjZSBkZXN0cnVjdGlvbiBpZiBpdCBpcyBhbHJlYWR5IGJlaW5nIGRlc3Ryb3llZFxuICAgIGlmICghdGhpcy5fZGVzdHJveWluZykge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy50b2dnbGVNZW51KCk7XG4gIH1cblxuICAvKiogT3BlbnMgdGhlIG1lbnUgKi9cbiAgb3Blbk1lbnUoKSB7XG4gICAgaWYgKCF0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmx5TWVudVRyaWdnZXJGb3IsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICB9LCB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRldGFjaC5iaW5kKHRoaXMpLFxuICAgICAgICBoYXNCYWNrZHJvcDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbG9zZXMgdGhlIG1lbnUgKi9cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICAvKiogVG9nZ2xlIG1lbnUgKi9cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fZGVzdHJveWluZyA9IHRydWU7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMubWVudUNsb3NlZC5lbWl0KG51bGwhKTtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lpbmcgPSBmYWxzZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX21lbnVPcGVuID0gZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfc2V0TWVudU9wZW5Ub1RydWUoKSB7XG4gICAgdGhpcy5fbWVudU9wZW4gPSB0cnVlO1xuICB9XG5cbn1cbiJdfQ==