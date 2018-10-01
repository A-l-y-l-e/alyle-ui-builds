/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Optional, Renderer2 } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = 'end top';
/** @type {?} */
var DEFAULT_BG = 'primary';
/** @type {?} */
var styles = function (theme) { return ({
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
}); };
var ɵ0 = styles;
var LyBadge = /** @class */ (function () {
    function LyBadge(_el, _theme, _renderer, _common) {
        this._el = _el;
        this._theme = _theme;
        this._renderer = _renderer;
        this.classes = this._theme.addStyleSheet(styles, 'lyBadge', STYLE_PRIORITY);
        this._badgeElementRef = this._el.nativeElement;
        if (_common) {
            _common.setAutoContrast();
        }
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
                    var positionStyles = {};
                    /** @type {?} */
                    var dir = theme.getDirection(val.indexOf('start') !== -1 ? 'start' : 'end');
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "bg", {
        /** The color of the badge  */
        get: /**
         * The color of the badge
         * @return {?}
         */
        function () {
            return this._bg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.bg) {
                this._bg = val;
                this._bgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) { return ({
                    backgroundColor: theme.colorOf(val),
                    color: theme.colorOf(val + ":contrast")
                }); }, this._badgeElementRef, this._bgClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
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
        if (this.content && !this.bg) {
            this.bg = DEFAULT_BG;
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
                    selector: 'ly-badge, [lyBadge]'
                },] },
    ];
    /** @nocollapse */
    LyBadge.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    LyBadge.propDecorators = {
        content: [{ type: Input, args: ['lyBadge',] }],
        position: [{ type: Input, args: ['lyBadgePosition',] }],
        bg: [{ type: Input, args: ['lyBadgeBg',] }]
    };
    return LyBadge;
}());
export { LyBadge };
if (false) {
    /** @type {?} */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvIiwic291cmNlcyI6WyJiYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBa0IsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFL0QsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDOztBQUNuQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUM7O0FBRTdCLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFlBQVksRUFBRSxVQUFVO1FBQ3hCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzNCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVU7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtLQUNyQjtDQUNGLENBQUMsRUFuQndDLENBbUJ4QyxDQUFDOzs7SUErRUQsaUJBQ1UsS0FDQSxRQUNBLFdBQ0ksT0FBaUI7UUFIckIsUUFBRyxHQUFILEdBQUc7UUFDSCxXQUFNLEdBQU4sTUFBTTtRQUNOLGNBQVMsR0FBVCxT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O2dCQUNqQyxRQUFRLHVCQTRHNUIsUUFBUTs7OzBCQXJFVixLQUFLLFNBQUMsU0FBUzsyQkFZZixLQUFLLFNBQUMsaUJBQWlCO3FCQXFDdkIsS0FBSyxTQUFDLFdBQVc7O2tCQXpGcEI7O1NBOEJhLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPcHRpb25hbCwgUmVuZGVyZXIyLCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIEx5Q29tbW9uLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2VuZCB0b3AnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgekluZGV4OiAxLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDEyKSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9XG59KTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUJhZGdlJywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9iZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIC8qKiBUaGUgcG9zaXRpb24gZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2VQb3NpdGlvbicpXG4gIHNldCBwb3NpdGlvbih2YWw6ICdzdGFydCB0b3AnIHwgJ3N0YXJ0IGJvdHRvbScgfCAnZW5kIHRvcCcgfCAnZW5kIGJvdHRvbScpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UucG9zaXRpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvblN0eWxlczoge1xuICAgICAgICAgIHRvcD86IG51bWJlclxuICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICAgIGJvdHRvbT86IG51bWJlclxuICAgICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgICB9ID0ge307XG4gICAgICAgIGNvbnN0IGRpciA9IHRoZW1lLmdldERpcmVjdGlvbih2YWwuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgPyAnc3RhcnQnIDogJ2VuZCcpO1xuICAgICAgICBwb3NpdGlvblN0eWxlc1tkaXJdID0gMDtcbiAgICAgICAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDUwJSknO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwuaW5kZXhPZigndG9wJykgIT09IC0xKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudG9wID0gMDtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gKz0gJ3RyYW5zbGF0ZVkoLTUwJSknO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbC5pbmRleE9mKCdib3R0b20nKSAhPT0gLTEpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy5ib3R0b20gPSAwO1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSArPSAndHJhbnNsYXRlWSg1MCUpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb25TdHlsZXM7XG4gICAgICB9LFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgdGhlIGJhZGdlICAqL1xuICBASW5wdXQoJ2x5QmFkZ2VCZycpXG4gIGdldCBiZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmc7XG4gIH1cbiAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZykge1xuICAgICAgdGhpcy5fYmcgPSB2YWw7XG4gICAgICB0aGlzLl9iZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLmJnOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZihgJHt2YWx9OmNvbnRyYXN0YClcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9iZ0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2JnOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgX2NvbW1vbjogTHlDb21tb25cbiAgKSB7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoX2NvbW1vbikge1xuICAgICAgX2NvbW1vbi5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8qKiBBZGQgcm9vdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9lbENvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxDb250YWluZXIgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSBjb250YWluZXI7XG5cbiAgICAgIC8qKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yZWxhdGl2ZSk7XG4gICAgfVxuICAgIHRoaXMuX2VsQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb250ZW50fWA7XG4gIH1cblxufVxuIl19