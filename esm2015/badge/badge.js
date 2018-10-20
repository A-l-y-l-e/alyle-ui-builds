/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Optional, Renderer2 } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
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
const ɵ0 = styles;
export class LyBadge {
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
if (false) {
    /**
     * Styles
     * @ignore
     * @type {?}
     */
    LyBadge.prototype.classes;
    /** @type {?} */
    LyBadge.prototype._content;
    /** @type {?} */
    LyBadge.prototype._position;
    /** @type {?} */
    LyBadge.prototype._positionClass;
    /** @type {?} */
    LyBadge.prototype._elContainer;
    /** @type {?} */
    LyBadge.prototype._badgeElementRef;
    /** @type {?} */
    LyBadge.prototype._bgClass;
    /** @type {?} */
    LyBadge.prototype._bg;
    /** @type {?} */
    LyBadge.prototype._el;
    /** @type {?} */
    LyBadge.prototype._theme;
    /** @type {?} */
    LyBadge.prototype._renderer;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvIiwic291cmNlcyI6WyJiYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBa0IsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFL0QsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDOztBQUNuQyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUM7O0FBRTdCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLE1BQU07UUFDcEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsYUFBYSxFQUFFLE1BQU07UUFDckIsTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDM0IsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVTtLQUN4QztJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO0tBQ3JCO0NBQ0YsQ0FBQyxDQUFDOztBQUlILE1BQU0sT0FBTyxPQUFPOzs7Ozs7O0lBK0VsQixZQUNVLEtBQ0EsUUFDQSxXQUNJLE9BQWlCO1FBSHJCLFFBQUcsR0FBSCxHQUFHO1FBQ0gsV0FBTSxHQUFOLE1BQU07UUFDTixjQUFTLEdBQVQsU0FBUzs7Ozs7UUE3RW5CLGVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBZ0YxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDM0I7S0FDRjs7Ozs7O0lBM0VELElBQ0ksT0FBTyxDQUFDLEdBQW9CO1FBQzlCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7OztJQUdELElBQ0ksUUFBUSxDQUFDLEdBQTREO1FBQ3ZFLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUU7O2dCQUMvRixNQUFNLGNBQWMsR0FNaEIsRUFBRSxDQUFDOztnQkFDUCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlFLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtvQkFDbEIsY0FBYyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztpQkFDL0M7cUJBQU07b0JBQ0wsY0FBYyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztpQkFDOUM7Z0JBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM3QixjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsY0FBYyxDQUFDLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQztpQkFDaEQ7cUJBQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDMUIsY0FBYyxDQUFDLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQztpQkFDL0M7Z0JBQ0QsT0FBTyxjQUFjLENBQUM7YUFDdkIsRUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM3RDtLQUVGOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUdELElBQ0ksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNqQjs7Ozs7SUFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFXO1FBQ2hCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ25DLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7YUFDeEMsQ0FBQyxFQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0Y7Ozs7SUFlRCxRQUFROztRQUdOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUdsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1NBQ2xDOztRQUdELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7U0FDdEI7S0FDRjs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBQ3RCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzs7WUFHbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7O1lBdkhyRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7OztZQTdCMEIsVUFBVTtZQUNGLFFBQVE7WUFETSxTQUFTO1lBQ2pDLFFBQVEsdUJBZ0g1QixRQUFROzs7c0JBckVWLEtBQUssU0FBQyxTQUFTO3VCQVlmLEtBQUssU0FBQyxpQkFBaUI7aUJBcUN2QixLQUFLLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9wdGlvbmFsLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcywgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnZW5kIHRvcCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcyMnB4JyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTIpLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseVxuICB9LFxuICByZWxhdGl2ZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH1cbn0pO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYmFkZ2UsIFtseUJhZGdlXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2NvbnRlbnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdzdGFydCB0b3AnIHwgJ3N0YXJ0IGJvdHRvbScgfCAnZW5kIHRvcCcgfCAnZW5kIGJvdHRvbSc7XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZWxDb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBfYmFkZ2VFbGVtZW50UmVmOiBhbnk7XG4gIHByaXZhdGUgX2JnQ2xhc3M6IHN0cmluZztcblxuICAvKiogVGhlIGNvbnRlbnQgZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2UnKVxuICBzZXQgY29udGVudCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZUJhZGdlKCk7XG4gICAgfVxuICB9XG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICAvKiogVGhlIHBvc2l0aW9uIGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlUG9zaXRpb24nKVxuICBzZXQgcG9zaXRpb24odmFsOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHlsZXM6IHtcbiAgICAgICAgICB0b3A/OiBudW1iZXJcbiAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBjb25zdCBkaXIgPSB0aGVtZS5nZXREaXJlY3Rpb24odmFsLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xID8gJ3N0YXJ0JyA6ICdlbmQnKTtcbiAgICAgICAgcG9zaXRpb25TdHlsZXNbZGlyXSA9IDA7XG4gICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCg1MCUpJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsLmluZGV4T2YoJ3RvcCcpICE9PSAtMSkge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRvcCA9IDA7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtICs9ICd0cmFuc2xhdGVZKC01MCUpJztcbiAgICAgICAgfSBlbHNlIGlmICh2YWwuaW5kZXhPZignYm90dG9tJykgIT09IC0xKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gKz0gJ3RyYW5zbGF0ZVkoNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uU3R5bGVzO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIHRoZSBiYWRnZSAgKi9cbiAgQElucHV0KCdseUJhZGdlQmcnKVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmcpIHtcbiAgICAgIHRoaXMuX2JnID0gdmFsO1xuICAgICAgdGhpcy5fYmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5iZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YoYCR7dmFsfTpjb250cmFzdGApXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fYmdDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9iZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIF9jb21tb246IEx5Q29tbW9uXG4gICkge1xuICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKF9jb21tb24pIHtcbiAgICAgIF9jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvKiogQWRkIHJvb3Qgc3R5bGVzICovXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgcG9zaXRpb24gKi9cbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBiZyAqL1xuICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJhZGdlKCkge1xuICAgIGlmICghdGhpcy5fZWxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsQ29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjb250YWluZXIpO1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gY29udGFpbmVyO1xuXG4gICAgICAvKiogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucmVsYXRpdmUpO1xuICAgIH1cbiAgICB0aGlzLl9lbENvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3RoaXMuY29udGVudH1gO1xuICB9XG5cbn1cbiJdfQ==