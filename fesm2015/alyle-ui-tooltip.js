import { __decorate } from 'tslib';
import { ElementRef, Renderer2, ChangeDetectorRef, NgZone, Input, Directive, NgModule } from '@angular/core';
import { YPosition, StyleCollection, Platform, Positioning, LyTheme2, LyOverlay, LyFocusState, WinScroll, LyOverlayModule } from '@alyle/ui';

const DEFAULT_PLACEMENT = YPosition.below;
const STYLE_PRIORITY = -2;
const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: () => (theme.tooltip
            && theme.tooltip.root
            && (theme.tooltip.root instanceof StyleCollection
                ? theme.tooltip.root.setTransformer(fn => fn(__)).css
                : theme.tooltip.root(__)))
    };
};
const ɵ0 = STYLES;
let LyTooltip = class LyTooltip {
    constructor(_theme, _overlay, _el, _renderer, _cd, _focusState, ngZone, scroll) {
        this._theme = _theme;
        this._overlay = _overlay;
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._focusState = _focusState;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this._listeners = new Map();
        this._scrollVal = 0;
        this.lyTooltipShowDelay = 0;
        this.lyTooltipHideDelay = 0;
        if (Platform.isBrowser) {
            const element = _el.nativeElement;
            if (!Platform.IOS && !Platform.ANDROID) {
                this._listeners
                    .set('mouseenter', () => this.show())
                    .set('mouseleave', () => this.hide());
            }
            else {
                this._listeners.set('touchstart', () => this.show());
            }
            this._listeners.forEach((listener, event) => element.addEventListener(event, listener));
            this._scrollSub = scroll.scroll$.subscribe(() => {
                if (this._tooltipOverlay) {
                    this._scrollVal++;
                    if (this._scrollVal > 10) {
                        ngZone.run(() => this.hide(0));
                        this._scrollVal = 0;
                    }
                }
            });
            _focusState.listen(element).subscribe(ev => {
                if (ev === 'keyboard') {
                    ngZone.run(() => this.show());
                }
                else if (ev == null) {
                    ngZone.run(() => this.hide());
                }
            });
        }
    }
    set tooltip(val) {
        this._tooltip = val;
    }
    get tooltip() {
        return this._tooltip;
    }
    ngOnInit() {
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.placement = DEFAULT_PLACEMENT;
        }
    }
    ngOnDestroy() {
        this.hide(0);
        // Clean up the event listeners set in the constructor
        this._listeners.forEach((listener, event) => {
            this._el.nativeElement.removeEventListener(event, listener);
        });
        if (this._scrollSub) {
            this._scrollSub.unsubscribe();
        }
        this._focusState.unlisten(this._el);
    }
    show(delay) {
        delay = typeof delay === 'number' ? delay : this.lyTooltipShowDelay;
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        if (!this._tooltipOverlay && this.tooltip && !this._showTimeoutId) {
            const tooltipRef = this.tooltip;
            this._showTimeoutId = setTimeout(() => {
                // const rect = this._el.nativeElement.getBoundingClientRect();
                const tooltip = this._tooltipOverlay = this._overlay.create(tooltipRef, undefined, {
                    styles: {
                    // top: rect.y,
                    // left: rect.x
                    },
                    onResizeScroll: this._updatePosition.bind(this),
                    classes: [
                        this.classes.root,
                        this._theme.addStyle('LyTooltip', (theme) => ({
                            borderRadius: '4px',
                            fontSize: '10px',
                            padding: '6px 8px',
                            opacity: 0,
                            transition: `opacity ${theme.animations.curves.standard} 300ms`,
                            left: 0,
                            [theme.getBreakpoint('XSmall')]: {
                                padding: '8px 16px',
                                fontSize: '14px',
                            }
                        }), undefined, undefined, STYLE_PRIORITY)
                    ],
                    hasBackdrop: false
                });
                this._updatePosition();
                // const position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
                // tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
                this._theme.requestAnimationFrame(() => {
                    this._theme.addStyle('lyTooltip:open', ({
                        opacity: 1,
                    }), tooltip.containerElement, undefined, STYLE_PRIORITY);
                });
                this._showTimeoutId = null;
                this._markForCheck();
            }, delay);
        }
    }
    hide(delay) {
        // return;
        const tooltipOverlay = this._tooltipOverlay;
        delay = typeof delay === 'number' ? delay : this.lyTooltipHideDelay;
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        if (tooltipOverlay && !this._hideTimeoutId) {
            this._hideTimeoutId = setTimeout(() => {
                this._renderer.removeClass(tooltipOverlay.containerElement, this._theme.addStyle('lyTooltip:open', null));
                setTimeout(() => tooltipOverlay.destroy(), 300);
                this._tooltipOverlay = null;
                this._hideTimeoutId = null;
                this._markForCheck();
            }, delay);
        }
    }
    toggle() {
        if (this._tooltipOverlay) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    _markForCheck() {
        this._cd.markForCheck();
    }
    _updatePosition() {
        const tooltip = this._tooltipOverlay;
        if (tooltip) {
            const position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
            tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
        }
    }
};
LyTooltip.ctorParameters = () => [
    { type: LyTheme2 },
    { type: LyOverlay },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyFocusState },
    { type: NgZone },
    { type: WinScroll }
];
__decorate([
    Input('lyTooltip')
], LyTooltip.prototype, "tooltip", null);
__decorate([
    Input()
], LyTooltip.prototype, "lyTooltipShowDelay", void 0);
__decorate([
    Input()
], LyTooltip.prototype, "lyTooltipHideDelay", void 0);
__decorate([
    Input('lyTooltipPlacement')
], LyTooltip.prototype, "placement", void 0);
__decorate([
    Input('lyTooltipXPosition')
], LyTooltip.prototype, "xPosition", void 0);
__decorate([
    Input('lyTooltipYPosition')
], LyTooltip.prototype, "yPosition", void 0);
LyTooltip = __decorate([
    Directive({
        selector: '[lyTooltip]',
        exportAs: 'lyTooltip'
    })
], LyTooltip);

let LyTooltipModule = class LyTooltipModule {
};
LyTooltipModule = __decorate([
    NgModule({
        imports: [LyOverlayModule],
        declarations: [LyTooltip],
        exports: [LyTooltip]
    })
], LyTooltipModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyTooltip, LyTooltipModule, ɵ0 };
//# sourceMappingURL=alyle-ui-tooltip.js.map
