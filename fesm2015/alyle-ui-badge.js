import { Directive, ElementRef, Input, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';

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
class LyBadgeBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @type {?} */
const LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase)))))))));
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
         * @ignore
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
                    'flat',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS50cyIsIm5nOi8vQGFseWxlL3VpL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluRmxhdCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlc1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0VG9wJztcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OX1ZBTFVFID0ge1xuICBlbmQ6ICctMTFweCcsXG4gIHRvcDogJy0xMXB4J1xufTtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcyMnB4JyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTIpLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgLi4udGhlbWUuYmFkZ2Uucm9vdFxuICB9LFxuICByZWxhdGl2ZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH1cbn0pO1xuXG5leHBvcnQgY2xhc3MgTHlCYWRnZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlCYWRnZU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5GbGF0KFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlCYWRnZUJhc2UpKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdmbGF0JyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZSBleHRlbmRzIEx5QmFkZ2VNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2NvbnRlbnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9lbENvbnRhaW5lcjogYW55O1xuICBwcml2YXRlIF9iYWRnZUVsZW1lbnRSZWY6IGFueTtcbiAgcHJpdmF0ZSBfbHlCYWRnZUJnQ2xhc3M6IHN0cmluZztcblxuICAvKiogVGhlIGNvbnRlbnQgZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2UnKVxuICBzZXQgY29udGVudCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZUJhZGdlKCk7XG4gICAgfVxuICB9XG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICAvKiogVGhlIHBvc2l0aW9uIGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlUG9zaXRpb24nKVxuICBzZXQgcG9zaXRpb24odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UucG9zaXRpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBzdHkgPSB0aGVtZS5iYWRnZS5wb3NpdGlvbiAmJiB0aGVtZS5iYWRnZS5wb3NpdGlvblt2YWxdIHx8IHZhbCA9PT0gREVGQVVMVF9QT1NJVElPTiA/IERFRkFVTFRfUE9TSVRJT05fVkFMVUUgOiBudWxsO1xuICAgICAgICBpZiAoc3R5KSB7XG4gICAgICAgICAgcmV0dXJuIHN0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEx5QmFkZ2UucG9zaXRpb24gXFxgJHt2YWx9XFxgIG5vdCBmb3VuZCBpbiBcXGBUaGVtZVZhcmlhYmxlc1xcYGApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgpXG4gIGdldCBseUJhZGdlQmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5QmFkZ2VCZztcbiAgfVxuICBzZXQgbHlCYWRnZUJnKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5seUJhZGdlQmcpIHtcbiAgICAgIHRoaXMuX2x5QmFkZ2VCZyA9IHZhbDtcbiAgICAgIHRoaXMuX2x5QmFkZ2VCZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLmJnOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZihgJHt2YWx9OmNvbnRyYXN0YClcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9seUJhZGdlQmdDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9seUJhZGdlQmc6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvKiogQWRkIHJvb3Qgc3R5bGVzICovXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgcG9zaXRpb24gKi9cbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBiZyAqL1xuICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgIXRoaXMubHlCYWRnZUJnKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VCZyA9IERFRkFVTFRfQkc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9lbENvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxDb250YWluZXIgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSBjb250YWluZXI7XG5cbiAgICAgIC8qKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yZWxhdGl2ZSk7XG4gICAgfVxuICAgIHRoaXMuX2VsQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb250ZW50fWA7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QmFkZ2UgfSBmcm9tICcuL2JhZGdlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5QmFkZ2UsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCYWRnZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7TUFzQk0sY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsZ0JBQWdCLEdBQUcsVUFBVTs7TUFDN0IsVUFBVSxHQUFHLFNBQVM7O01BQ3RCLHNCQUFzQixHQUFHO0lBQzdCLEdBQUcsRUFBRSxPQUFPO0lBQ1osR0FBRyxFQUFFLE9BQU87Q0FDYjs7TUFDSyxNQUFNLEdBQUcsQ0FBQyxLQUFxQixNQUFNO0lBQ3pDLElBQUksa0JBQ0YsUUFBUSxFQUFFLFVBQVUsRUFDcEIsT0FBTyxFQUFFLE1BQU0sRUFDZixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsWUFBWSxFQUFFLE1BQU0sRUFDcEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsWUFBWSxFQUFFLFVBQVUsRUFDeEIsYUFBYSxFQUFFLE1BQU0sRUFDckIsTUFBTSxFQUFFLENBQUMsRUFDVCxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FB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