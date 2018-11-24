import { __assign, __extends } from 'tslib';
import { Directive, ElementRef, Input, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = 'startTop';
/** @type {?} */
var DEFAULT_BG = 'primary';
/** @type {?} */
var DEFAULT_POSITION_VALUE = {
    end: '-11px',
    top: '-11px'
};
/** @type {?} */
var styles = function (theme) { return ({
    root: __assign({ position: 'absolute', display: 'flex', width: '22px', height: '22px', borderRadius: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', pointerEvents: 'none', zIndex: 1, fontSize: theme.pxToRem(12), fontFamily: theme.typography.fontFamily, justifyContent: 'center', alignItems: 'center' }, theme.badge.root),
    relative: {
        position: 'relative'
    }
}); };
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyBadgeBase = /** @class */ (function () {
    function LyBadgeBase(_theme) {
        this._theme = _theme;
    }
    return LyBadgeBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase)))))))));
var LyBadge = /** @class */ (function (_super) {
    __extends(LyBadge, _super);
    function LyBadge(_el, _theme, _renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        /**
         * Styles
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.setAutoContrast();
        _this._badgeElementRef = _this._el.nativeElement;
        return _this;
    }
    Object.defineProperty(LyBadge.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        /** The content for the badge */
        set: /**
         * The content for the badge
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.content) {
                this._content = val;
                this._createBadge();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        /** The position for the badge */
        set: /**
         * The position for the badge
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.position) {
                this._position = val;
                this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                    /** @type {?} */
                    var sty = theme.badge.position && theme.badge.position[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
                    if (sty) {
                        return sty;
                    }
                    else {
                        throw new Error("LyBadge.position `" + val + "` not found in `ThemeVariables`");
                    }
                }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "lyBadgeBg", {
        /** The color of the badge */
        get: /**
         * The color of the badge
         * @return {?}
         */
        function () {
            return this._lyBadgeBg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.lyBadgeBg) {
                this._lyBadgeBg = val;
                this._lyBadgeBgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) { return ({
                    backgroundColor: theme.colorOf(val),
                    color: theme.colorOf(val + ":contrast")
                }); }, this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyBadge.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.content) {
            this.updateStyle(this._el);
        }
    };
    /**
     * @return {?}
     */
    LyBadge.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    LyBadge.prototype._createBadge = /**
     * @return {?}
     */
    function () {
        if (!this._elContainer) {
            /** @type {?} */
            var container = this._elContainer = this._renderer.createElement('div');
            this._renderer.appendChild(this._el.nativeElement, container);
            this._badgeElementRef = container;
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._elContainer.textContent = "" + this.content;
    };
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
    LyBadge.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    LyBadge.propDecorators = {
        content: [{ type: Input, args: ['lyBadge',] }],
        position: [{ type: Input, args: ['lyBadgePosition',] }],
        lyBadgeBg: [{ type: Input }]
    };
    return LyBadge;
}(LyBadgeMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyBadgeModule = /** @class */ (function () {
    function LyBadgeModule() {
    }
    LyBadgeModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyBadge, LyCommonModule],
                    declarations: [LyBadge]
                },] }
    ];
    return LyBadgeModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS50cyIsIm5nOi8vQGFseWxlL3VpL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluRmxhdCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlc1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0VG9wJztcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OX1ZBTFVFID0ge1xuICBlbmQ6ICctMTFweCcsXG4gIHRvcDogJy0xMXB4J1xufTtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcyMnB4JyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTIpLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgLi4udGhlbWUuYmFkZ2Uucm9vdFxuICB9LFxuICByZWxhdGl2ZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QmFkZ2VCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUJhZGdlTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUJhZGdlQmFzZSkpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYmFkZ2UsIFtseUJhZGdlXScsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGV4dGVuZHMgTHlCYWRnZU1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9seUJhZGdlQmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY29udGVudCBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZScpXG4gIHNldCBjb250ZW50KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlQmFkZ2UoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIC8qKiBUaGUgcG9zaXRpb24gZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2VQb3NpdGlvbicpXG4gIHNldCBwb3NpdGlvbih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eSA9IHRoZW1lLmJhZGdlLnBvc2l0aW9uICYmIHRoZW1lLmJhZGdlLnBvc2l0aW9uW3ZhbF0gfHwgdmFsID09PSBERUZBVUxUX1BPU0lUSU9OID8gREVGQVVMVF9QT1NJVElPTl9WQUxVRSA6IG51bGw7XG4gICAgICAgIGlmIChzdHkpIHtcbiAgICAgICAgICByZXR1cm4gc3R5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlCYWRnZS5wb3NpdGlvbiBcXGAke3ZhbH1cXGAgbm90IGZvdW5kIGluIFxcYFRoZW1lVmFyaWFibGVzXFxgYCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5QmFkZ2VCZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlCYWRnZUJnO1xuICB9XG4gIHNldCBseUJhZGdlQmcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5QmFkZ2VCZykge1xuICAgICAgdGhpcy5fbHlCYWRnZUJnID0gdmFsO1xuICAgICAgdGhpcy5fbHlCYWRnZUJnQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UuYmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX2x5QmFkZ2VCZ0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2x5QmFkZ2VCZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8qKiBBZGQgcm9vdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5seUJhZGdlQmcpIHtcbiAgICAgIHRoaXMubHlCYWRnZUJnID0gREVGQVVMVF9CRztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCYWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IGNvbnRhaW5lcjtcblxuICAgICAgLyoqIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJlbGF0aXZlKTtcbiAgICB9XG4gICAgdGhpcy5fZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCYWRnZSB9IGZyb20gJy4vYmFkZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlCYWRnZSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJhZGdlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFzQk0sY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDbkIsZ0JBQWdCLEdBQUcsVUFBVTs7SUFDN0IsVUFBVSxHQUFHLFNBQVM7O0lBQ3RCLHNCQUFzQixHQUFHO0lBQzdCLEdBQUcsRUFBRSxPQUFPO0lBQ1osR0FBRyxFQUFFLE9BQU87Q0FDYjs7SUFDSyxNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDekMsSUFBSSxhQUNGLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxNQUFNLEVBQ3BCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLFlBQVksRUFBRSxVQUFVLEVBQ3hC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