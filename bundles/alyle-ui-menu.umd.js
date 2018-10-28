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
    /** @type {?} */
    var STYLES = function (theme) {
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
            /**
             * styles
             * @ignore
             */
            this.classes = this.theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
                    }] }
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
                    },] }
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
                    },] }
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
                    },] }
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

    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.LyMenuModule = LyMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9tZW51L21lbnUudHMiLCJuZzovL0BhbHlsZS91aS9tZW51L21lbnUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAga2V5ZnJhbWVzLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5jb25zdCBTVFlMRVMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AgMHB4J1xuICB9XG59KTtcblxuLyoqIE1lbnUgY29udGFpbmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ21lbnVFbnRlcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgICB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ21lbnVMZWF2ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzEwMG1zIDI1bXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICAvKipcbiAgICogRGVzdHJveSBtZW51XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIHJlZjogTHlNZW51VHJpZ2dlckZvcjtcbiAgQEhvc3RCaW5kaW5nKCdAbWVudUVudGVyJykgbWVudUVudGVyO1xuICBASG9zdEJpbmRpbmcoJ0BtZW51TGVhdmUnKSBtZW51TGVhdmUyO1xuICBASG9zdExpc3RlbmVyKCdAbWVudUxlYXZlLmRvbmUnLCBbJyRldmVudCddKSBlbmRBbmltYXRpb24oZSkge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbn1cblxuY29uc3QgbWVudUl0ZW1TdHlsZXMgPSAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICB3aWR0aDogJzEwMCUnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudUl0ZW0ge1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudS5yZWYpIHtcbiAgICAgIHRoaXMuX21lbnUucmVmLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9tZW51OiBMeU1lbnUsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoZW1lLmFkZFN0eWxlKCdseU1lbnVJdGVtJywgbWVudUl0ZW1TdHlsZXMsIGVsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7fVxuXG4gIHRhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhcmdldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmx5TWVudVRyaWdnZXJGb3IgYXMgVGVtcGxhdGVSZWY8YW55Piwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgIH0sIHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgICAgcmlnaHQ6IG51bGwsXG4gICAgICAgICAgYm90dG9tOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcyksXG4gICAgICAgIGhvc3Q6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTHlNZW51LCBMeU1lbnVUcmlnZ2VyRm9yLCBMeU1lbnVJdGVtIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeU1lbnUsIEx5TWVudUl0ZW0sIEx5TWVudVRyaWdnZXJGb3JdLFxuICBkZWNsYXJhdGlvbnM6IFtMeU1lbnUsIEx5TWVudUl0ZW0sIEx5TWVudVRyaWdnZXJGb3JdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsic2hhZG93QnVpbGRlciIsIkNvbXBvbmVudCIsInRyaWdnZXIiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsInN0eWxlIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIkRpcmVjdGl2ZSIsIk9wdGlvbmFsIiwiTHlPdmVybGF5IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIiwiTHhEb21Nb2R1bGUiLCJMeU92ZXJsYXlNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQW9CQSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFMUIsSUFBTSxNQUFNLEdBQUcsVUFBQSxLQUFLO1FBQUksUUFBQztZQUN2QixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQzVDLFlBQVksRUFBRSxLQUFLO2dCQUNuQixTQUFTLEVBQUVBLGdCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixlQUFlLEVBQUUsY0FBYzthQUNoQztTQUNGO0lBVnVCLENBVXRCLENBQUM7Ozs7O1FBOENELGdCQUNVLE9BQ0E7WUFEQSxVQUFLLEdBQUwsS0FBSztZQUNMLFFBQUcsR0FBSCxHQUFHOzs7OztZQWhCYixlQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztZQWtCekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pEOzs7OztRQVY0Qyw2QkFBWTs7OztZQUF6RCxVQUEwRCxDQUFDO2dCQUN6RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO29CQUN4QixJQUFJLENB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