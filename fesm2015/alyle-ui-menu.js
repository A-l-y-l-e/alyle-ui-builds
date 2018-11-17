import { Component, ElementRef, Input, Directive, Optional, HostListener, HostBinding, NgModule } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { LyOverlay, LyTheme2, shadowBuilder, LyCommonModule, LxDomModule, LyOverlayModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -1;
/** @type {?} */
const STYLES = (theme) => ({
    root: Object.assign({ background: theme.background.primary.default, borderRadius: '2px', boxShadow: shadowBuilder(4), display: 'inline-block', paddingTop: '8px', paddingBottom: '8px', transformOrigin: 'left top 0px' }, theme.menu.root)
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
            this._menuRef = this.overlay.create(this.lyMenuTriggerFor, {
                $implicit: this
            }, {
                styles: {
                    top: rect.top,
                    left: rect.left,
                    right: null,
                    bottom: null,
                },
                fnDestroy: this.detach.bind(this),
                host: this.elementRef.nativeElement,
                backdrop: true
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyMenu, LyMenuItem, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlPdmVybGF5LCBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AgMHB4JyxcbiAgICAuLi50aGVtZS5tZW51LnJvb3RcbiAgfVxufSk7XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgICAgfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyAyNW1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgZXhwb3J0QXM6ICdseU1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgbWVudVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSByZWY6IEx5TWVudVRyaWdnZXJGb3I7XG4gIEBIb3N0QmluZGluZygnQG1lbnVFbnRlcicpIG1lbnVFbnRlcjtcbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG59XG5cbmNvbnN0IG1lbnVJdGVtU3R5bGVzID0gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWluSGVpZ2h0OiAnNDhweCcsXG4gIGJvcmRlclJhZGl1czogMCxcbiAgd2lkdGg6ICcxMDAlJ1xufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVJdGVtIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21lbnUucmVmKSB7XG4gICAgICB0aGlzLl9tZW51LnJlZi5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbWVudTogTHlNZW51LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGVtZS5hZGRTdHlsZSgnbHlNZW51SXRlbScsIG1lbnVJdGVtU3R5bGVzLCBlbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEN1cnJlbnQgbWVudVJlZiAqL1xuICBfbWVudVJlZjogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkge31cblxuICB0YXJnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3Q6IENsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWN0ID0gdGhpcy50YXJnZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgfSwge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgICByaWdodDogbnVsbCxcbiAgICAgICAgICBib3R0b206IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTHlNZW51LCBMeU1lbnVUcmlnZ2VyRm9yLCBMeU1lbnVJdGVtIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeU1lbnUsIEx5TWVudUl0ZW0sIEx5TWVudVRyaWdnZXJGb3JdLFxuICBkZWNsYXJhdGlvbnM6IFtMeU1lbnUsIEx5TWVudUl0ZW0sIEx5TWVudVRyaWdnZXJGb3JdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVN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