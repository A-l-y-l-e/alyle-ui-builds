(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/animations'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', '@angular/core', '@alyle/ui', '@angular/animations', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.menu = {}), global.ng.core, global.ly.core, global.ng.animations, global.ng.forms, global.ng.common));
}(this, function (exports, core, ui, animations, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    var STYLE_PRIORITY = -1;
    var DEFAULT_PLACEMENT = ui.YPosition.below;
    var DEFAULT_XPOSITION = ui.XPosition.after;
    var STYLES = function (theme) { return ({
        $priority: STYLE_PRIORITY,
        root: {
            '&': theme.menu ? theme.menu.root : null
        },
        container: {
            background: theme.background.primary.default,
            borderRadius: '2px',
            boxShadow: ui.shadowBuilder(4),
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
        animations.trigger('menuEnter', [
            animations.transition('void => in', [
                animations.animate('125ms cubic-bezier(0, 0, 0.2, 1)', animations.keyframes([
                    animations.style({
                        opacity: 0,
                        transform: 'scale(0.8)'
                    }),
                    animations.style({
                        opacity: 1,
                        transform: 'scale(1)'
                    })
                ]))
            ]),
        ]),
        animations.trigger('menuLeave', [
            animations.transition('* => void', animations.animate('150ms linear', animations.style({ opacity: 0 })))
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
            var position = new ui.Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
            // set position
            this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
            this._renderer.setStyle(this._el.nativeElement, 'transform-origin', position.ox + " " + position.oy + " 0");
            // set height & width
            this._renderer.setStyle(container, 'height', position.height === 'initial' ? '100%' : position.height);
            this._renderer.setStyle(container, 'width', position.width === 'initial' ? '100%' : position.width);
        };
        __decorate([
            core.ViewChild('container', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyMenu.prototype, "_container", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyMenu.prototype, "ref", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LyMenu.prototype, "placement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LyMenu.prototype, "xPosition", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LyMenu.prototype, "yPosition", void 0);
        __decorate([
            core.HostBinding('@menuLeave'),
            __metadata("design:type", Object)
        ], LyMenu.prototype, "menuLeave2", void 0);
        __decorate([
            core.HostListener('@menuLeave.done', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], LyMenu.prototype, "endAnimation", null);
        LyMenu = __decorate([
            core.Component({
                selector: 'ly-menu',
                animations: __spread(ANIMATIONS),
                template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
                exportAs: 'lyMenu'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef,
                core.Renderer2])
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
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], LyMenuItem.prototype, "_click", null);
        LyMenuItem = __decorate([
            core.Directive({
                selector: '[ly-menu-item]'
            }),
            __param(0, core.Optional()),
            __metadata("design:paramtypes", [LyMenu,
                core.ElementRef,
                core.Renderer2])
        ], LyMenuItem);
        return LyMenuItem;
    }());
    var LyMenuTriggerFor = /** @class */ (function () {
        function LyMenuTriggerFor(elementRef, overlay) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this._menuOpen = false;
            this.menuOpened = new core.EventEmitter();
            this.menuClosed = new core.EventEmitter();
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
            this.closeMenu();
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
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], LyMenuTriggerFor.prototype, "lyMenuTriggerFor", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LyMenuTriggerFor.prototype, "menuOpened", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LyMenuTriggerFor.prototype, "menuClosed", void 0);
        LyMenuTriggerFor = __decorate([
            core.Directive({
                selector: '[lyMenuTriggerFor]',
                host: {
                    '(click)': '_handleClick()'
                },
                exportAs: 'lyMenuTriggerFor'
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                ui.LyOverlay])
        ], LyMenuTriggerFor);
        return LyMenuTriggerFor;
    }());

    var LyMenuModule = /** @class */ (function () {
        function LyMenuModule() {
        }
        LyMenuModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LyOverlayModule],
                exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
            })
        ], LyMenuModule);
        return LyMenuModule;
    }());

    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuModule = LyMenuModule;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-menu.umd.js.map
