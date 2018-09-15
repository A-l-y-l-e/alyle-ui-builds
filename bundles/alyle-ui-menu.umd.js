(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@alyle/ui'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', '@angular/core', '@angular/animations', '@alyle/ui', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.menu = {}),global.ng.core,global.ng.animations,global.alyle.ui,global.ng.forms,global.ng.common));
}(this, (function (exports,core,animations,ui,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    var Origin = /** @class */ (function () {
        function Origin() {
        }
        return Origin;
    }());
    /** @type {?} */
    var menuStyles = function (theme) {
        return ({
            root: {
                background: theme.background.primary.default,
                borderRadius: '2px',
                boxShadow: ui.shadowBuilder(4),
                display: 'inline-block',
                paddingTop: '8px',
                paddingBottom: '8px',
                transformOrigin: 'left top 0px'
            }
        });
    };
    /**
     * Menu container
     */
    var LyMenu = /** @class */ (function () {
        function LyMenu(theme, _el) {
            this.theme = theme;
            this._el = _el;
            this.classes = this.theme.addStyleSheet(menuStyles, 'lyMenu', STYLE_PRIORITY);
            this._el.nativeElement.classList.add(this.classes.root);
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
        LyMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-menu',
                        animations: [
                            animations.trigger('menuEnter', [
                                animations.transition(':enter', [
                                    animations.animate('120ms cubic-bezier(0, 0, 0.2, 1)', animations.keyframes([
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
                                animations.transition('* => void', animations.animate('100ms 25ms linear', animations.style({ opacity: 0 })))
                            ])
                        ],
                        template: '<ng-content></ng-content>',
                        exportAs: 'lyMenu'
                    },] },
        ];
        /** @nocollapse */
        LyMenu.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef }
            ];
        };
        LyMenu.propDecorators = {
            ref: [{ type: core.Input }],
            menuEnter: [{ type: core.HostBinding, args: ['@menuEnter',] }],
            menuLeave2: [{ type: core.HostBinding, args: ['@menuLeave',] }],
            endAnimation: [{ type: core.HostListener, args: ['@menuLeave.done', ['$event'],] }]
        };
        return LyMenu;
    }());
    /** @type {?} */
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
            { type: core.Directive, args: [{
                        selector: '[ly-menu-item]'
                    },] },
        ];
        /** @nocollapse */
        LyMenuItem.ctorParameters = function () {
            return [
                { type: LyMenu, decorators: [{ type: core.Optional }] },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyMenuItem.propDecorators = {
            _click: [{ type: core.HostListener, args: ['click',] }]
        };
        return LyMenuItem;
    }());
    var LyMenuTriggerFor = /** @class */ (function () {
        function LyMenuTriggerFor(elementRef, overlay) {
            this.elementRef = elementRef;
            this.overlay = overlay;
        }
        /**
         * @return {?}
         */
        LyMenuTriggerFor.prototype.targetPosition = /**
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
                    var rect = this.targetPosition();
                    this._menuRef = this.overlay.create(/** @type {?} */ (this.lyMenuTriggerFor), {
                        $implicit: this
                    }, {
                        styles: {
                            top: rect.top,
                            left: rect.left,
                            right: null,
                            bottom: null,
                        },
                        fnDestroy: this.detach.bind(this),
                        host: this.elementRef.nativeElement
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
        LyMenuTriggerFor.decorators = [
            { type: core.Directive, args: [{
                        selector: '[lyMenuTriggerFor]',
                        // tslint:disable-next-line:use-host-property-decorator
                        host: {
                            '(click)': '_handleClick($event)'
                        }
                    },] },
        ];
        /** @nocollapse */
        LyMenuTriggerFor.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: ui.LyOverlay }
            ];
        };
        LyMenuTriggerFor.propDecorators = {
            lyMenuTriggerFor: [{ type: core.Input }]
        };
        return LyMenuTriggerFor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyMenuModule = /** @class */ (function () {
        function LyMenuModule() {
        }
        LyMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LxDomModule, ui.LyOverlayModule],
                        exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                        declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                    },] },
        ];
        return LyMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.Origin = Origin;
    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.LyMenuModule = LyMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9tZW51L21lbnUudHMiLCJuZzovL0BhbHlsZS91aS9tZW51L21lbnUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5leHBvcnQgdHlwZSBwb3NpdGlvbiA9ICdsZWZ0JyB8ICdyaWdodCcgfCAndG9wJyB8ICdib3R0b20nIHwgJ2NlbnRlcicgfCAnbWlkZGxlJztcbmV4cG9ydCBjbGFzcyBPcmlnaW4ge1xuICBob3Jpem9udGFsOiBwb3NpdGlvbjtcbiAgdmVydGljYWw6IHBvc2l0aW9uO1xufVxuXG5jb25zdCBtZW51U3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wIDBweCdcbiAgfVxufSk7XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgICAgfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyAyNW1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQobWVudVN0eWxlcywgJ2x5TWVudScsIFNUWUxFX1BSSU9SSVRZKTtcbiAgLyoqIERlc3Ryb3kgbWVudSAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSByZWY6IEx5TWVudVRyaWdnZXJGb3I7XG4gIEBIb3N0QmluZGluZygnQG1lbnVFbnRlcicpIG1lbnVFbnRlcjtcbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG59XG5cbmNvbnN0IG1lbnVJdGVtU3R5bGVzID0gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWluSGVpZ2h0OiAnNDhweCcsXG4gIGJvcmRlclJhZGl1czogMCxcbiAgd2lkdGg6ICcxMDAlJ1xufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVJdGVtIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnUucmVmKSB7XG4gICAgICB0aGlzLl9tZW51LnJlZi5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbWVudTogTHlNZW51LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGVtZS5hZGRTdHlsZSgnbHlNZW51SXRlbScsIG1lbnVJdGVtU3R5bGVzLCBlbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEN1cnJlbnQgbWVudVJlZiAqL1xuICBfbWVudVJlZjogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkge31cblxuICB0YXJnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3Q6IENsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWN0ID0gdGhpcy50YXJnZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yIGFzIFRlbXBsYXRlUmVmPGFueT4sIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICB9LCB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRldGFjaC5iaW5kKHRoaXMpLFxuICAgICAgICBob3N0OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IEx5TWVudSwgTHlNZW51VHJpZ2dlckZvciwgTHlNZW51SXRlbSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlNZW51LCBMeU1lbnVJdGVtLCBMeU1lbnVUcmlnZ2VyRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInNoYWRvd0J1aWxkZXIiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJrZXlmcmFtZXMiLCJzdHlsZSIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIklucHV0IiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIkx5T3ZlcmxheSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSIsIkx4RG9tTW9kdWxlIiwiTHlPdmVybGF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFvQkEsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFHMUI7OztxQkF2QkE7UUEwQkMsQ0FBQTtBQUhEO0lBS0EsSUFBTSxVQUFVLEdBQUcsVUFBQSxLQUFLO1FBQUksUUFBQztZQUMzQixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQzVDLFlBQVksRUFBRSxLQUFLO2dCQUNuQixTQUFTLEVBQUVBLGdCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixlQUFlLEVBQUUsY0FBYzthQUNoQztTQUNGO0lBVjJCLENBVTFCLENBQUM7Ozs7O1FBdUNELGdCQUNVLE9BQ0E7WUFEQSxVQUFLLEdBQUwsS0FBSztZQUNMLFFBQUcsR0FBSCxHQUFHOzJCQWJILElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDO1lBZXRFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENB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