import { Component, ElementRef, Input, Directive, Optional, HostListener, HostBinding, NgModule } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { LyOverlay, LyTheme2, shadowBuilder, LyCommonModule, LxDomModule, LyOverlayModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
var menuStyles = function (theme) { return ({
    root: {
        background: theme.background.primary.default,
        borderRadius: '2px',
        boxShadow: shadowBuilder(4),
        display: 'inline-block',
        paddingTop: '8px',
        paddingBottom: '8px',
        transformOrigin: 'left top 0px'
    }
}); };
/**
 * Menu container
 */
var LyMenu = /** @class */ (function () {
    function LyMenu(theme, _el) {
        this.theme = theme;
        this._el = _el;
        this.classes = this.theme.addStyleSheet(menuStyles, STYLE_PRIORITY);
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
        { type: Component, args: [{
                    selector: 'ly-menu',
                    animations: [
                        trigger('menuEnter', [
                            transition(':enter', [
                                animate('120ms cubic-bezier(0, 0, 0.2, 1)', keyframes([
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
                            transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))
                        ])
                    ],
                    template: '<ng-content></ng-content>',
                    exportAs: 'lyMenu'
                }] }
    ];
    /** @nocollapse */
    LyMenu.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyMenu.propDecorators = {
        ref: [{ type: Input }],
        menuEnter: [{ type: HostBinding, args: ['@menuEnter',] }],
        menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
        endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
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
        { type: Directive, args: [{
                    selector: '[ly-menu-item]'
                },] }
    ];
    /** @nocollapse */
    LyMenuItem.ctorParameters = function () { return [
        { type: LyMenu, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyMenuItem.propDecorators = {
        _click: [{ type: HostListener, args: ['click',] }]
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
        { type: Directive, args: [{
                    selector: '[lyMenuTriggerFor]',
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '(click)': '_handleClick($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    LyMenuTriggerFor.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyOverlay }
    ]; };
    LyMenuTriggerFor.propDecorators = {
        lyMenuTriggerFor: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyCommonModule, LxDomModule, LyOverlayModule],
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

export { Origin, LyMenu, LyMenuItem, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlPdmVybGF5LCBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyB8ICdtaWRkbGUnO1xuZXhwb3J0IGNsYXNzIE9yaWdpbiB7XG4gIGhvcml6b250YWw6IHBvc2l0aW9uO1xuICB2ZXJ0aWNhbDogcG9zaXRpb247XG59XG5cbmNvbnN0IG1lbnVTdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AgMHB4J1xuICB9XG59KTtcblxuLyoqIE1lbnUgY29udGFpbmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ21lbnVFbnRlcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgICB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ21lbnVMZWF2ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzEwMG1zIDI1bXMgbGluZWFyJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChtZW51U3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIC8qKiBEZXN0cm95IG1lbnUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuICBASG9zdEJpbmRpbmcoJ0BtZW51RW50ZXInKSBtZW51RW50ZXI7XG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxufVxuXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIEBJbnB1dCgpIGx5TWVudVRyaWdnZXJGb3I6IFRlbXBsYXRlUmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IEx5T3ZlcmxheVxuICApIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciBhcyBUZW1wbGF0ZVJlZjxhbnk+LCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgICByaWdodDogbnVsbCxcbiAgICAgICAgICBib3R0b206IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBMeU1lbnUsIEx5TWVudVRyaWdnZXJGb3IsIEx5TWVudUl0ZW0gfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51VHJpZ2dlckZvcl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFvQkEsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFHMUI7OztpQkF2QkE7SUEwQkMsQ0FBQTtBQUhEO0FBS0EsSUFBTSxVQUFVLEdBQUcsVUFBQSxLQUFLLElBQUksUUFBQztJQUMzQixJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTztRQUM1QyxZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsY0FBYztRQUN2QixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsS0FBSztRQUNwQixlQUFlLEVBQUUsY0FBYztLQUNoQztDQUNGLElBQUMsQ0FBQzs7Ozs7SUF1Q0QsZ0JBQ1UsT0FDQTtRQURBLFVBQUssR0FBTCxLQUFLO1FBQ0wsUUFBRyxHQUFILEdBQUc7UUFiYixlQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQWU3RCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekQ7Ozs7O0lBVjRDLDZCQUFZOzs7O0lBQXpELFVBQTBELENBQUM7UUFDekQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BCO0tBQ0Y7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNuQixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixPQUFPLENB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