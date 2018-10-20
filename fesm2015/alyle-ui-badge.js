import { Directive, Input, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';
import { LyCommon, LyTheme2, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = 'end top';
/** @type {?} */
const DEFAULT_BG = 'primary';
/** @type {?} */
const styles = (theme) => ({
    root: {
        position: 'absolute',
        width: '22px',
        height: '22px',
        borderRadius: '100%',
        lineHeight: '22px',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        pointerEvents: 'none',
        zIndex: 1,
        fontSize: theme.pxToRem(12),
        fontFamily: theme.typography.fontFamily
    },
    relative: {
        position: 'relative'
    }
});
class LyBadge {
    /**
     * @param {?} _el
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _common
     */
    constructor(_el, _theme, _renderer, _common) {
        this._el = _el;
        this._theme = _theme;
        this._renderer = _renderer;
        /**
         * Styles
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._badgeElementRef = this._el.nativeElement;
        if (_common) {
            _common.setAutoContrast();
        }
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
                const positionStyles = {};
                /** @type {?} */
                const dir = theme.getDirection(val.indexOf('start') !== -1 ? 'start' : 'end');
                positionStyles[dir] = 0;
                if (dir === 'left') {
                    positionStyles.transform = 'translateX(-50%)';
                }
                else {
                    positionStyles.transform = 'translateX(50%)';
                }
                if (val.indexOf('top') !== -1) {
                    positionStyles.top = 0;
                    positionStyles.transform += 'translateY(-50%)';
                }
                else if (val.indexOf('bottom') !== -1) {
                    positionStyles.bottom = 0;
                    positionStyles.transform += 'translateY(50%)';
                }
                return positionStyles;
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
    get bg() {
        return this._bg;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set bg(val) {
        if (val !== this.bg) {
            this._bg = val;
            this._bgClass = this._theme.addStyle(`ly-badge.bg:${val}`, (theme) => ({
                backgroundColor: theme.colorOf(val),
                color: theme.colorOf(`${val}:contrast`)
            }), this._badgeElementRef, this._bgClass, STYLE_PRIORITY);
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
        if (this.content && !this.bg) {
            this.bg = DEFAULT_BG;
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
                selector: 'ly-badge, [lyBadge]'
            },] }
];
/** @nocollapse */
LyBadge.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
LyBadge.propDecorators = {
    content: [{ type: Input, args: ['lyBadge',] }],
    position: [{ type: Input, args: ['lyBadgePosition',] }],
    bg: [{ type: Input, args: ['lyBadgeBg',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyBadgeModule {
}
LyBadgeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyCommonModule],
                exports: [LyBadge, LyCommonModule],
                declarations: [LyBadge]
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

export { LyBadge, LyBadgeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS50cyIsIm5nOi8vQGFseWxlL3VpL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPcHRpb25hbCwgUmVuZGVyZXIyLCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIEx5Q29tbW9uLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2VuZCB0b3AnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgekluZGV4OiAxLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDEyKSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9XG59KTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9iZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgLyoqIFRoZSBwb3NpdGlvbiBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZVBvc2l0aW9uJylcbiAgc2V0IHBvc2l0aW9uKHZhbDogJ3N0YXJ0IHRvcCcgfCAnc3RhcnQgYm90dG9tJyB8ICdlbmQgdG9wJyB8ICdlbmQgYm90dG9tJykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICAgICAgYm90dG9tPzogbnVtYmVyXG4gICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgY29uc3QgZGlyID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbC5pbmRleE9mKCdzdGFydCcpICE9PSAtMSA/ICdzdGFydCcgOiAnZW5kJyk7XG4gICAgICAgIHBvc2l0aW9uU3R5bGVzW2Rpcl0gPSAwO1xuICAgICAgICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNTAlKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbC5pbmRleE9mKCd0b3AnKSAhPT0gLTEpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSArPSAndHJhbnNsYXRlWSgtNTAlKSc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsLmluZGV4T2YoJ2JvdHRvbScpICE9PSAtMSkge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtICs9ICd0cmFuc2xhdGVZKDUwJSknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvblN0eWxlcztcbiAgICAgIH0sXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgICovXG4gIEBJbnB1dCgnbHlCYWRnZUJnJylcbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9iZztcbiAgfVxuICBzZXQgYmcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnKSB7XG4gICAgICB0aGlzLl9iZyA9IHZhbDtcbiAgICAgIHRoaXMuX2JnQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UuYmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX2JnQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBfY29tbW9uOiBMeUNvbW1vblxuICApIHtcbiAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChfY29tbW9uKSB7XG4gICAgICBfY29tbW9uLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLyoqIEFkZCByb290IHN0eWxlcyAqL1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYmcgKi9cbiAgICBpZiAodGhpcy5jb250ZW50ICYmICF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCYWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IGNvbnRhaW5lcjtcblxuICAgICAgLyoqIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJlbGF0aXZlKTtcbiAgICB9XG4gICAgdGhpcy5fZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QmFkZ2UgfSBmcm9tICcuL2JhZGdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCYWRnZSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJhZGdlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7O0FBQ25DLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQzs7QUFFN0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixNQUFNO0lBQ3pDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsTUFBTTtRQUNwQixVQUFVLEVBQUUsTUFBTTtRQUNsQixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsUUFBUTtRQUNwQixZQUFZLEVBQUUsVUFBVTtRQUN4QixhQUFhLEVBQUUsTUFBTTtRQUNyQixNQUFNLEVBQUUsQ0FBQztRQUNULFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMzQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVO0tBQ3hDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7S0FDckI7Q0FDRixDQUFDLENBQUM7TUFJVSxPQUFPOzs7Ozs7O0lBK0VsQixZQUNVLEtBQ0EsUUFDQSxXQUNJLE9BQWlCO1FBSHJCLFFBQUcsR0FBSCxHQUFHO1FBQ0gsV0FBTSxHQUFOLE1BQU07UUFDTixjQUFT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