import { __assign } from 'tslib';
import { Directive, Input, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';
import { LyCommon, LyTheme2, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS50cyIsIm5nOi8vQGFseWxlL3VpL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPcHRpb25hbCwgUmVuZGVyZXIyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdzdGFydFRvcCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTl9WQUxVRSA9IHtcbiAgZW5kOiAnLTExcHgnLFxuICB0b3A6ICctMTFweCdcbn07XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgekluZGV4OiAxLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDEyKSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIC4uLnRoZW1lLmJhZGdlLnJvb3RcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9XG59KTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZWxDb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBfYmFkZ2VFbGVtZW50UmVmOiBhbnk7XG4gIHByaXZhdGUgX2JnQ2xhc3M6IHN0cmluZztcblxuICAvKiogVGhlIGNvbnRlbnQgZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2UnKVxuICBzZXQgY29udGVudCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2NyZWF0ZUJhZGdlKCk7XG4gICAgfVxuICB9XG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICAvKiogVGhlIHBvc2l0aW9uIGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlUG9zaXRpb24nKVxuICBzZXQgcG9zaXRpb24odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UucG9zaXRpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBzdHkgPSB0aGVtZS5iYWRnZS5wb3NpdGlvbiAmJiB0aGVtZS5iYWRnZS5wb3NpdGlvblt2YWxdIHx8IHZhbCA9PT0gREVGQVVMVF9QT1NJVElPTiA/IERFRkFVTFRfUE9TSVRJT05fVkFMVUUgOiBudWxsO1xuICAgICAgICBpZiAoc3R5KSB7XG4gICAgICAgICAgcmV0dXJuIHN0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEx5QmFkZ2UucG9zaXRpb24gXFxgJHt2YWx9XFxgIG5vdCBmb3VuZCBpbiBcXGBUaGVtZVZhcmlhYmxlc1xcYGApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgdGhlIGJhZGdlICAqL1xuICBASW5wdXQoJ2x5QmFkZ2VCZycpXG4gIGdldCBiZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmc7XG4gIH1cbiAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZykge1xuICAgICAgdGhpcy5fYmcgPSB2YWw7XG4gICAgICB0aGlzLl9iZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLmJnOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZihgJHt2YWx9OmNvbnRyYXN0YClcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9iZ0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2JnOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgX2NvbW1vbjogTHlDb21tb25cbiAgKSB7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoX2NvbW1vbikge1xuICAgICAgX2NvbW1vbi5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8qKiBBZGQgcm9vdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9lbENvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxDb250YWluZXIgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSBjb250YWluZXI7XG5cbiAgICAgIC8qKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yZWxhdGl2ZSk7XG4gICAgfVxuICAgIHRoaXMuX2VsQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb250ZW50fWA7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJhZGdlIH0gZnJvbSAnLi9iYWRnZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5QmFkZ2UsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCYWRnZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLElBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDOztBQUNwQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUM7O0FBQzdCLElBQU0sc0JBQXNCLEdBQUc7SUFDN0IsR0FBRyxFQUFFLE9BQU87SUFDWixHQUFHLEVBQUUsT0FBTztDQUNiLENBQUM7O0FBQ0YsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDekMs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