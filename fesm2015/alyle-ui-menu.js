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
const STYLE_PRIORITY = -1;
/** @type {?} */
const STYLES = theme => ({
    root: {
        background: theme.background.primary.default,
        borderRadius: '2px',
        boxShadow: shadowBuilder(4),
        display: 'inline-block',
        paddingTop: '8px',
        paddingBottom: '8px',
        transformOrigin: 'left top 0px'
    }
});
/**
 * Menu container
 */
class LyMenu {
    /**
     * @param {?} theme
     * @param {?} _el
     */
    constructor(theme, _el) {
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
    endAnimation(e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    }
}
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
LyMenu.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyMenu.propDecorators = {
    ref: [{ type: Input }],
    menuEnter: [{ type: HostBinding, args: ['@menuEnter',] }],
    menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
    endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
};
/** @type {?} */
const menuItemStyles = ({
    display: 'block',
    minHeight: '48px',
    borderRadius: 0,
    width: '100%'
});
class LyMenuItem {
    /**
     * @param {?} _menu
     * @param {?} el
     * @param {?} theme
     */
    constructor(_menu, el, theme) {
        this._menu = _menu;
        theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement, undefined, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    _click() {
        if (this._menu.ref) {
            this._menu.ref._menuRef.detach();
        }
    }
}
LyMenuItem.decorators = [
    { type: Directive, args: [{
                selector: '[ly-menu-item]'
            },] }
];
/** @nocollapse */
LyMenuItem.ctorParameters = () => [
    { type: LyMenu, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyMenuItem.propDecorators = {
    _click: [{ type: HostListener, args: ['click',] }]
};
class LyMenuTriggerFor {
    /**
     * @param {?} elementRef
     * @param {?} overlay
     */
    constructor(elementRef, overlay) {
        this.elementRef = elementRef;
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    targetPosition() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        return rect;
    }
    /**
     * @return {?}
     */
    _handleClick() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
        else {
            /** @type {?} */
            const rect = this.targetPosition();
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
    }
    /**
     * @return {?}
     */
    detach() {
        this._menuRef.detach();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._menuRef) {
            this._menuRef.remove();
            this._menuRef = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
    }
}
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
LyMenuTriggerFor.ctorParameters = () => [
    { type: ElementRef },
    { type: LyOverlay }
];
LyMenuTriggerFor.propDecorators = {
    lyMenuTriggerFor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyMenuModule {
}
LyMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule, LxDomModule, LyOverlayModule],
                exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
            },] }
];

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

export { LyMenu, LyMenuItem, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlPdmVybGF5LCBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbmNvbnN0IFNUWUxFUyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0KSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCAwcHgnXG4gIH1cbn0pO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIC8qKlxuICAgKiBEZXN0cm95IG1lbnVcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuICBASG9zdEJpbmRpbmcoJ0BtZW51RW50ZXInKSBtZW51RW50ZXI7XG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxufVxuXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIEBJbnB1dCgpIGx5TWVudVRyaWdnZXJGb3I6IFRlbXBsYXRlUmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IEx5T3ZlcmxheVxuICApIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciBhcyBUZW1wbGF0ZVJlZjxhbnk+LCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgICByaWdodDogbnVsbCxcbiAgICAgICAgICBib3R0b206IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBMeU1lbnUsIEx5TWVudVRyaWdnZXJGb3IsIEx5TWVudUl0ZW0gfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51VHJpZ2dlckZvcl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFvQkEsTUFBTSxj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