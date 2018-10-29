import { Directive, Input, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';
import { LyCommon, LyTheme2, Dir, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
var LyBadge = /** @class */ (function () {
    function LyBadge(_el, _theme, _renderer, _common) {
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
                    var dir = theme.getDirection(val.indexOf(Dir.start) !== -1 ? Dir.start : Dir.end);
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
                },] }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyBadgeModule = /** @class */ (function () {
    function LyBadgeModule() {
    }
    LyBadgeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyCommonModule],
                    exports: [LyBadge, LyCommonModule],
                    declarations: [LyBadge]
                },] }
    ];
    return LyBadgeModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS50cyIsIm5nOi8vQGFseWxlL3VpL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPcHRpb25hbCwgUmVuZGVyZXIyLCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIEx5Q29tbW9uLCBMeVRoZW1lMiwgRGlyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnZW5kIHRvcCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcyMnB4JyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTIpLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseVxuICB9LFxuICByZWxhdGl2ZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH1cbn0pO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYmFkZ2UsIFtseUJhZGdlXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2NvbnRlbnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9zaXRpb246ICdzdGFydCB0b3AnIHwgJ3N0YXJ0IGJvdHRvbScgfCAnZW5kIHRvcCcgfCAnZW5kIGJvdHRvbSc7XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZWxDb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBfYmFkZ2VFbGVtZW50UmVmOiBhbnk7XG4gIHByaXZhdGUgX2JnQ2xhc3M6IHN0cmluZztcblxuICAvKiogVGhlIGNvbnRlbnQgZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2UnKVxuICBzZXQgY29udGVudCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZUJhZGdlKCk7XG4gICAgfVxuICB9XG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICAvKiogVGhlIHBvc2l0aW9uIGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlUG9zaXRpb24nKVxuICBzZXQgcG9zaXRpb24odmFsOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHlsZXM6IHtcbiAgICAgICAgICB0b3A/OiBudW1iZXJcbiAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBjb25zdCBkaXIgPSB0aGVtZS5nZXREaXJlY3Rpb24odmFsLmluZGV4T2YoRGlyLnN0YXJ0KSAhPT0gLTEgPyBEaXIuc3RhcnQgOiBEaXIuZW5kKTtcbiAgICAgICAgcG9zaXRpb25TdHlsZXNbZGlyXSA9IDA7XG4gICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCg1MCUpJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsLmluZGV4T2YoJ3RvcCcpICE9PSAtMSkge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRvcCA9IDA7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtICs9ICd0cmFuc2xhdGVZKC01MCUpJztcbiAgICAgICAgfSBlbHNlIGlmICh2YWwuaW5kZXhPZignYm90dG9tJykgIT09IC0xKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gKz0gJ3RyYW5zbGF0ZVkoNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uU3R5bGVzO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIHRoZSBiYWRnZSAgKi9cbiAgQElucHV0KCdseUJhZGdlQmcnKVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmcpIHtcbiAgICAgIHRoaXMuX2JnID0gdmFsO1xuICAgICAgdGhpcy5fYmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5iZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YoYCR7dmFsfTpjb250cmFzdGApXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fYmdDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9iZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIF9jb21tb246IEx5Q29tbW9uXG4gICkge1xuICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKF9jb21tb24pIHtcbiAgICAgIF9jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvKiogQWRkIHJvb3Qgc3R5bGVzICovXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgcG9zaXRpb24gKi9cbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBiZyAqL1xuICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJhZGdlKCkge1xuICAgIGlmICghdGhpcy5fZWxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsQ29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjb250YWluZXIpO1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gY29udGFpbmVyO1xuXG4gICAgICAvKiogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucmVsYXRpdmUpO1xuICAgIH1cbiAgICB0aGlzLl9lbENvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3RoaXMuY29udGVudH1gO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCYWRnZSB9IGZyb20gJy4vYmFkZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJhZGdlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5QmFkZ2VdXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUMxQixJQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzs7QUFDbkMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDOztBQUU3QixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssUUFBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLE1BQU07UUFDcEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsYUFBYSxFQUFFLE1BQU07UUFDckIsTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDM0IsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVTtLQUN4QztJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO0tBQ3JCO0NBQ0YsSUFBQyxDQUFDOztJQW1GRCxpQkFDVSxLQUNBLFFBQ0EsV0FDSSxPQUFpQjtRQUhyQixRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ04sY0FB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