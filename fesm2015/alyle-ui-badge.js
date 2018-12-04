import { Directive, ElementRef, Input, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = 'startTop';
/** @type {?} */
const DEFAULT_BG = 'primary';
/** @type {?} */
const DEFAULT_POSITION_VALUE = {
    end: '-11px',
    top: '-11px'
};
/** @type {?} */
const styles = (theme) => ({
    root: Object.assign({ position: 'absolute', display: 'flex', width: '22px', height: '22px', borderRadius: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', pointerEvents: 'none', zIndex: 1, fontSize: theme.pxToRem(12), fontFamily: theme.typography.fontFamily, justifyContent: 'center', alignItems: 'center' }, theme.badge.root),
    relative: {
        position: 'relative'
    }
});
/**
 * \@docs-private
 */
class LyBadgeBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
class LyBadge extends LyBadgeMixinBase {
    /**
     * @param {?} _el
     * @param {?} _theme
     * @param {?} _renderer
     */
    constructor(_el, _theme, _renderer) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        /**
         * Styles
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.setAutoContrast();
        this._badgeElementRef = this._el.nativeElement;
    }
    /**
     * The content for the badge
     * @param {?} val
     * @return {?}
     */
    set content(val) {
        if (val !== this.content) {
            this._content = val;
            this._createBadge();
        }
    }
    /**
     * @return {?}
     */
    get content() {
        return this._content;
    }
    /**
     * The position for the badge
     * @param {?} val
     * @return {?}
     */
    set position(val) {
        if (val !== this.position) {
            this._position = val;
            this._positionClass = this._theme.addStyle(`ly-badge.position:${val}`, (theme) => {
                /** @type {?} */
                const sty = theme.badge.position && theme.badge.position[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
                if (sty) {
                    return sty;
                }
                else {
                    throw new Error(`LyBadge.position \`${val}\` not found in \`ThemeVariables\``);
                }
            }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * The color of the badge
     * @return {?}
     */
    get lyBadgeBg() {
        return this._lyBadgeBg;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyBadgeBg(val) {
        if (val !== this.lyBadgeBg) {
            this._lyBadgeBg = val;
            this._lyBadgeBgClass = this._theme.addStyle(`ly-badge.bg:${val}`, (theme) => ({
                backgroundColor: theme.colorOf(val),
                color: theme.colorOf(`${val}:contrast`)
            }), this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.content) {
            this.updateStyle(this._el);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** Add root styles */
        this._renderer.addClass(this._badgeElementRef, this.classes.root);
        /** Set default position */
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        /** Set default bg */
        if (this.content && !this.lyBadgeBg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
    }
    /**
     * @return {?}
     */
    _createBadge() {
        if (!this._elContainer) {
            /** @type {?} */
            const container = this._elContainer = this._renderer.createElement('div');
            this._renderer.appendChild(this._el.nativeElement, container);
            this._badgeElementRef = container;
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._elContainer.textContent = `${this.content}`;
    }
}
LyBadge.decorators = [
    { type: Directive, args: [{
                selector: 'ly-badge, [lyBadge]',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'disabled',
                    'outlined',
                    'elevation',
                    'shadowColor'
                ]
            },] }
];
/** @nocollapse */
LyBadge.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 },
    { type: Renderer2 }
];
LyBadge.propDecorators = {
    content: [{ type: Input, args: ['lyBadge',] }],
    position: [{ type: Input, args: ['lyBadgePosition',] }],
    lyBadgeBg: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyBadgeModule {
}
LyBadgeModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyBadge, LyCommonModule],
                declarations: [LyBadge]
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

export { LyBadgeBase, LyBadgeMixinBase, LyBadge, LyBadgeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS50cyIsIm5nOi8vQGFseWxlL3VpL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdzdGFydFRvcCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTl9WQUxVRSA9IHtcbiAgZW5kOiAnLTExcHgnLFxuICB0b3A6ICctMTFweCdcbn07XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgekluZGV4OiAxLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDEyKSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIC4uLnRoZW1lLmJhZGdlLnJvb3RcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUJhZGdlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCYWRnZU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5QmFkZ2VCYXNlKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGV4dGVuZHMgTHlCYWRnZU1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9seUJhZGdlQmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY29udGVudCBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZScpXG4gIHNldCBjb250ZW50KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlQmFkZ2UoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIC8qKiBUaGUgcG9zaXRpb24gZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2VQb3NpdGlvbicpXG4gIHNldCBwb3NpdGlvbih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eSA9IHRoZW1lLmJhZGdlLnBvc2l0aW9uICYmIHRoZW1lLmJhZGdlLnBvc2l0aW9uW3ZhbF0gfHwgdmFsID09PSBERUZBVUxUX1BPU0lUSU9OID8gREVGQVVMVF9QT1NJVElPTl9WQUxVRSA6IG51bGw7XG4gICAgICAgIGlmIChzdHkpIHtcbiAgICAgICAgICByZXR1cm4gc3R5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlCYWRnZS5wb3NpdGlvbiBcXGAke3ZhbH1cXGAgbm90IGZvdW5kIGluIFxcYFRoZW1lVmFyaWFibGVzXFxgYCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5QmFkZ2VCZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlCYWRnZUJnO1xuICB9XG4gIHNldCBseUJhZGdlQmcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5QmFkZ2VCZykge1xuICAgICAgdGhpcy5fbHlCYWRnZUJnID0gdmFsO1xuICAgICAgdGhpcy5fbHlCYWRnZUJnQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UuYmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX2x5QmFkZ2VCZ0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2x5QmFkZ2VCZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8qKiBBZGQgcm9vdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5seUJhZGdlQmcpIHtcbiAgICAgIHRoaXMubHlCYWRnZUJnID0gREVGQVVMVF9CRztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCYWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IGNvbnRhaW5lcjtcblxuICAgICAgLyoqIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJlbGF0aXZlKTtcbiAgICB9XG4gICAgdGhpcy5fZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCYWRnZSB9IGZyb20gJy4vYmFkZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlCYWRnZSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJhZGdlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtNQXFCTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUNuQixnQkFBZ0IsR0FBRyxVQUFVOztNQUM3QixVQUFVLEdBQUcsU0FBUzs7TUFDdEIsc0JBQXNCLEdBQUc7SUFDN0IsR0FBRyxFQUFFLE9BQU87SUFDWixHQUFHLEVBQUUsT0FBTztDQUNiOztNQUNLLE1BQU0sR0FBRyxDQUFDLEtBQXFCLE1BQU07SUFDekMsSUFBSSxrQkFDRixRQUFRLEVBQUUsVUFBVSxFQUNwQixPQUFPLEVBQUUsTUFBTSxFQUNmLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxZQUFZLEVBQUUsTUFBTSxFQUNwQixRQUFRLEVBQUUsUUFBUSxFQUNsQixVQUFVLEVBQUUsUUFBUSxFQUNwQixZQUFZLEVBQUUsVUFBVSxFQUN4QixhQUFhLEVBQUUsTUFBTSxFQUNyQixNQUFNLEVBQUUsQ0FBQyxFQUNULFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUMzQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3ZDLGNBQWMsRUFBRSxRQUFRLEVBQ3hCLFVBQVUsRUFBRSxRQUFRLElBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO0tBQ3JCO0NBQ0YsQ0FBQzs7OztBQUdGLE1BQWEsV0FBVzs7OztJQUN0QixZQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7S0FDcEI7Q0FDTjs7Ozs7QUFHRCxNQUFhLGdCQUFnQixHQUFHLGlCQUFpQixDQUNqRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQWNoRCxNQUFhLE9BQVEsU0FBUSxnQkFBZ0I7Ozs7OztJQStEM0MsWUFDVSxHQUFlLEVBQ3ZCLE1BQWdCLEVBQ1IsU0FBb0I7UUFFNUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSk4sUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUVmLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7O1FBN0Q5QixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBZ0UxRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2hEOzs7Ozs7SUF6REQsSUFDSSxPQUFPLENBQUMsR0FBb0I7UUFDOUIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7OztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7O0lBR0QsSUFDSSxRQUFRLENBQUMsR0FBVztRQUN0QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBcUI7O3NCQUNyRixHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLGdCQUFnQixHQUFHLHNCQUFzQixHQUFHLElBQUk7Z0JBQ3pILElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sR0FBRyxDQUFDO2lCQUNaO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsb0NBQW9DLENBQUMsQ0FBQztpQkFDaEY7YUFDRixFQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzdEO0tBRUY7Ozs7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBR0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUNELElBQUksU0FBUyxDQUFDLEdBQVc7UUFDdkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFxQixNQUFNO2dCQUM1RixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ25DLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7YUFDeEMsQ0FBQyxFQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7Ozs7SUFhRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7S0FDRjs7OztJQUVELFFBQVE7O1FBR04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR2xFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7U0FDbEM7O1FBR0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUM3QjtLQUNGOzs7O0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTs7a0JBQ2hCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDOztZQUdsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkQ7OztZQXJIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsTUFBTSxFQUFFO29CQUNOLElBQUk7b0JBQ0osT0FBTztvQkFDUCxRQUFRO29CQUNSLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixXQUFXO29CQUNYLGFBQWE7aUJBQ2Q7YUFDRjs7OztZQTdFQyxVQUFVO1lBT1YsUUFBUTtZQUhSLFNBQVM7OztzQkF3RlIsS0FBSyxTQUFDLFNBQVM7dUJBWWYsS0FBSyxTQUFDLGlCQUFpQjt3QkFxQnZCLEtBQUs7Ozs7Ozs7QUMvSFIsTUFRYSxhQUFhOzs7WUFKekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7Z0JBQ2xDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=