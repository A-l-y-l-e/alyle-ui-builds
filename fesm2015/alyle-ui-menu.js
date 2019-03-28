import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { LyOverlay, LyTheme2, Positioning, shadowBuilder, XPosition, YPosition, LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -1;
/** @type {?} */
const DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
const DEFAULT_XPOSITION = XPosition.after;
/** @type {?} */
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: null,
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
    },
    item: {
        display: 'flex',
        minHeight: '48px',
        borderRadius: 0,
        width: '100%',
        justifyContent: 'flex-start'
    }
});
/** @type {?} */
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
/**
 * Menu container
 */
class LyMenu {
    /**
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        /**
         * styles
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES);
        const { menu } = this._theme.variables;
        if (menu) {
            if (menu.root) {
                this._renderer.addClass(this._el.nativeElement, this._theme.style(menu.root, STYLE_PRIORITY, STYLES));
            }
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
        }
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ref) {
            throw new Error('LyMenu: require @Input() ref');
        }
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.xPosition = DEFAULT_XPOSITION;
            this.placement = DEFAULT_PLACEMENT;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.ref._menuRef) {
            this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
        }
        this._updatePlacement();
    }
    /**
     * @private
     * @return {?}
     */
    _updatePlacement() {
        /** @type {?} */
        const el = (/** @type {?} */ ((/** @type {?} */ (this.ref._menuRef)).containerElement));
        /** @type {?} */
        const container = this._container.nativeElement;
        // reset height & width
        this._renderer.setStyle(container, 'height', 'initial');
        this._renderer.setStyle(container, 'width', 'initial');
        /** @type {?} */
        const position = new Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
        // set position
        this._renderer.setStyle(el, 'transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
        this._renderer.setStyle(this._el.nativeElement, 'transform-origin', `${position.ox} ${position.oy} 0`);
        // set height & width
        this._renderer.setStyle(container, 'height', position.height);
        this._renderer.setStyle(container, 'width', position.width);
    }
}
LyMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-menu',
                animations: [...ANIMATIONS],
                template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
                exportAs: 'lyMenu'
            }] }
];
/** @nocollapse */
LyMenu.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
LyMenu.propDecorators = {
    _container: [{ type: ViewChild, args: ['container',] }],
    ref: [{ type: Input }],
    placement: [{ type: Input }],
    xPosition: [{ type: Input }],
    yPosition: [{ type: Input }],
    menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
    endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
};
class LyMenuItem {
    /**
     * @param {?} _menu
     * @param {?} el
     * @param {?} renderer
     */
    constructor(_menu, el, renderer) {
        this._menu = _menu;
        renderer.addClass(el.nativeElement, _menu.classes.item);
    }
    /**
     * @return {?}
     */
    _click() {
        if (this._menu.ref && this._menu.ref._menuRef) {
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
    { type: Renderer2 }
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
     * \@docs-private
     * @return {?}
     */
    _targetPosition() {
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
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._menuRef) {
            this._menuRef.remove();
            this._menuRef = undefined;
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
    /**
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
}
LyMenuTriggerFor.decorators = [
    { type: Directive, args: [{
                selector: '[lyMenuTriggerFor]',
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyMenuModule {
}
LyMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule, LyOverlayModule],
                exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LyMenu, LyMenuItem, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=alyle-ui-menu.js.map