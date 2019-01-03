/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Platform, LyTheme2, toBoolean, DirAlias } from '@alyle/ui';
import * as _chroma from 'chroma-js';
/**
 * \@docs-private
 * @type {?}
 */
var chroma = _chroma;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
export var STYLES = function (theme) {
    /** @type {?} */
    var dir = theme.getDirection(DirAlias.before);
    /** @type {?} */
    var right = dir === 'right' ? 0 : 180;
    /** @type {?} */
    var left = dir === 'left' ? 0 : 180;
    return {
        root: {
            display: 'block',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            position: 'relative',
            '& {actions}.right': {
                after: 0,
                transform: "rotate(" + right + "deg)"
            },
            '& {actions}.left': {
                before: 0,
                transform: "rotate(" + left + "deg)"
            },
            '& svg': {
                display: 'block',
                fill: 'currentColor'
            }
        },
        actions: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            margin: 'auto .25em',
            height: '1em',
            width: '1em',
            fontSize: '36px',
            cursor: 'pointer',
            background: chroma(theme.background.primary.default).alpha(.25).css(),
            color: theme.text.primary,
            willChange: 'transform'
        },
        slideContainer: {
            overflow: 'hidden',
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'relative',
            touchAction: 'pan-y !important'
        },
        slide: {
            display: 'flex',
            width: '100%',
            height: '100%',
            willChange: 'transform',
            '& > ly-carousel-item': {
                width: '100%',
                flexShrink: 0,
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        },
        slideContent: {
            display: 'flex'
        },
        slideAnim: {
            '& > div': {
                transition: 'transform 750ms cubic-bezier(.1, 1, 0.5, 1)'
            }
        },
        slideNoEvent: {
            '&>div': {
                touchAction: 'initial !important'
            }
        },
        carouselIndicators: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 0,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '48px',
            '&>div': {
                display: 'inline-block',
                borderRadius: '50%',
                cursor: 'pointer',
                position: 'relative',
                padding: '.5em',
                outline: 'none'
            },
            '&>div > span': {
                transition: '300ms cubic-bezier(0.65, 0.05, 0.36, 1)',
                width: '1em',
                height: '1em',
                transform: 'scale(.5)',
                borderRadius: '50%',
                willChange: 'transform',
                display: 'block',
                opacity: .65
            },
            '&>div>span.active': {
                transform: 'scale(1)',
                opacity: 1
            }
        }
    };
};
/** @enum {number} */
var CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
export { CarouselMode };
CarouselMode[CarouselMode.default] = 'default';
CarouselMode[CarouselMode.inline] = 'inline';
var LyCarousel = /** @class */ (function () {
    function LyCarousel(_el, _cd, _theme, _renderer) {
        this._el = _el;
        this._cd = _cd;
        this._theme = _theme;
        this._renderer = _renderer;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        this._intervalFn = null;
        /**
         * \@docs-private
         */
        this.mode = CarouselMode.default;
        this.interval = 7000;
        this.selectedIndex = 0;
        this._renderer.addClass(_el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyCarousel.prototype, "touch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._touch;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            this._touch = newVal;
            if (newVal) {
                this._renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
            }
            else {
                this._renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyCarousel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.touch) {
            this.touch = false;
        }
        if (Platform.isBrowser) {
            this._resetInterval();
        }
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this.stop();
        }
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    LyCarousel.prototype._onDragStart = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        var _this = this;
        this.stop();
        this._renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._selectedElement = this.lyItems.find(function (_item, index) { return index === _this.selectedIndex; })._nativeElement;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LyCarousel.prototype._onDrag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var rect = this._selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
        else {
            this._onPan(rect.width * Math.sign(e.deltaX));
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LyCarousel.prototype._onDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var rect = this._selectedElement.getBoundingClientRect();
        /** @type {?} */
        var dir = this._theme.config.getDirection(DirAlias.before);
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._select(this.selectedIndex);
        if (Math.abs(e.deltaX) > rect.width / 2) {
            if (0 > e.deltaX) {
                this.next();
            }
            else if (0 < e.deltaX) {
                this.prev();
            }
        }
        else if (e.additionalEvent) {
            /** @type {?} */
            var eventName = e.additionalEvent;
            if (Math.abs(e.velocity) >= 0.25) {
                if (eventName === 'slideleft') {
                    if (dir === 'left') {
                        this.next();
                    }
                    else {
                        this.prev();
                    }
                }
                else if (eventName === 'slideright') {
                    if (dir === 'right') {
                        this.next();
                    }
                    else {
                        this.prev();
                    }
                }
            }
        }
        this._renderer.removeStyle(this._slide.nativeElement, 'transform');
        this._resetInterval();
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype._onDragCancel = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._select(this.selectedIndex);
        this._resetInterval();
    };
    /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    LyCarousel.prototype._select = /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    function (val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._slideClass = this._theme.addStyle("lyCarousel.select:" + val.toString(32), function (theme) {
                /** @type {?} */
                var sign = theme.getDirection(DirAlias.before) === 'left' ? -1 : 1;
                return {
                    transform: "translateX(" + 100 * val * sign + "%)"
                };
            }, this._slide.nativeElement, this._slideClass, STYLE_PRIORITY);
        }
        if (!notResetInterval) {
            this._resetInterval();
        }
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype.prev = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var len = this.lyItems.length - 1;
        /** @type {?} */
        var prev = this.selectedIndex - 1;
        this._select(prev < 0 ? len : prev);
    };
    /**
     * @param {?=} notResetInterval
     * @return {?}
     */
    LyCarousel.prototype.next = /**
     * @param {?=} notResetInterval
     * @return {?}
     */
    function (notResetInterval) {
        /** @type {?} */
        var len = this.lyItems.length - 1;
        /** @type {?} */
        var next = this.selectedIndex + 1;
        this._select(next > len ? 0 : next, notResetInterval);
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this._intervalFn !== null) {
            clearInterval(this._intervalFn);
            this._intervalFn = null;
        }
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype._resetInterval = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.stop();
        this._intervalFn = setInterval(function () {
            _this.next(true);
            _this._markForCheck();
        }, this.interval);
    };
    /**
     * @param {?} x
     * @return {?}
     */
    LyCarousel.prototype._onPan = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var sign = this._theme.config.getDirection(DirAlias.before) === 'left' ? -1 : 1;
        this._renderer.setStyle(this._slide.nativeElement, 'transform', "translateX(calc(" + sign * 100 * this.selectedIndex + "% + " + x + "px))");
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._cd.markForCheck();
    };
    LyCarousel.decorators = [
        { type: Component, args: [{
                    selector: 'ly-carousel',
                    template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"\n      ></span>\n      </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyCarousel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    LyCarousel.propDecorators = {
        slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
        _slide: [{ type: ViewChild, args: ['_slide',] }],
        lyItems: [{ type: ContentChildren, args: [forwardRef(function () { return LyCarouselItem; }),] }],
        mode: [{ type: Input }],
        interval: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        touch: [{ type: Input }]
    };
    return LyCarousel;
}());
export { LyCarousel };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyCarousel.prototype.classes;
    /** @type {?} */
    LyCarousel.prototype._intervalFn;
    /** @type {?} */
    LyCarousel.prototype.slideContainer;
    /** @type {?} */
    LyCarousel.prototype._slide;
    /** @type {?} */
    LyCarousel.prototype.lyItems;
    /**
     * \@docs-private
     * @type {?}
     */
    LyCarousel.prototype.mode;
    /** @type {?} */
    LyCarousel.prototype.interval;
    /** @type {?} */
    LyCarousel.prototype.selectedIndex;
    /** @type {?} */
    LyCarousel.prototype._selectedElement;
    /** @type {?} */
    LyCarousel.prototype._touch;
    /** @type {?} */
    LyCarousel.prototype._slideClass;
    /** @type {?} */
    LyCarousel.prototype._el;
    /** @type {?} */
    LyCarousel.prototype._cd;
    /** @type {?} */
    LyCarousel.prototype._theme;
    /** @type {?} */
    LyCarousel.prototype._renderer;
}
var LyCarouselItem = /** @class */ (function () {
    function LyCarouselItem(_theme, _el) {
        this._theme = _theme;
        this._nativeElement = _el.nativeElement;
    }
    Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._className = this._theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    LyCarouselItem.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-carousel-item'
                },] }
    ];
    /** @nocollapse */
    LyCarouselItem.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyCarouselItem.propDecorators = {
        srcImg: [{ type: Input }]
    };
    return LyCarouselItem;
}());
export { LyCarouselItem };
if (false) {
    /** @type {?} */
    LyCarouselItem.prototype._className;
    /** @type {?} */
    LyCarouselItem.prototype._nativeElement;
    /** @type {?} */
    LyCarouselItem.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBa0IsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDOzs7OztJQUcvQixNQUFNLEdBQUcsT0FBTzs7SUFFaEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7QUFFekIsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztRQUNwQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztRQUN6QyxLQUFLLEdBQUcsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHOztRQUNqQyxJQUFJLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQ3JDLE9BQU87UUFDTCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsT0FBTztZQUNoQixxQkFBcUIsRUFBRSxNQUFNO1lBQzdCLGtCQUFrQixFQUFFLE1BQU07WUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QixRQUFRLEVBQUUsVUFBVTtZQUNwQixtQkFBbUIsRUFBRTtnQkFDbkIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsU0FBUyxFQUFFLFlBQVUsS0FBSyxTQUFNO2FBQ2pDO1lB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Qix3Q0FBNEI7O0lBRzFCLGdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgRGlyQWxpYXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgY29uc3QgZGlyID0gdGhlbWUuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSk7XG4gIGNvbnN0IHJpZ2h0ID0gZGlyID09PSAncmlnaHQnID8gMCA6IDE4MDtcbiAgY29uc3QgbGVmdCA9IGRpciA9PT0gJ2xlZnQnID8gMCA6IDE4MDtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICcmIHthY3Rpb25zfS5yaWdodCc6IHtcbiAgICAgICAgYWZ0ZXI6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JpZ2h0fWRlZylgXG4gICAgICB9LFxuICAgICAgJyYge2FjdGlvbnN9LmxlZnQnOiB7XG4gICAgICAgIGJlZm9yZTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7bGVmdH1kZWcpYFxuICAgICAgfSxcbiAgICAgICcmIHN2Zyc6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbWFyZ2luOiAnYXV0byAuMjVlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgZm9udFNpemU6ICczNnB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYmFja2dyb3VuZDogY2hyb21hKHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0KS5hbHBoYSguMjUpLmNzcygpLFxuICAgICAgY29sb3I6IHRoZW1lLnRleHQucHJpbWFyeSxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gICAgfSxcbiAgICBzbGlkZUNvbnRhaW5lcjoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdG91Y2hBY3Rpb246ICdwYW4teSAhaW1wb3J0YW50J1xuICAgIH0sXG4gICAgc2xpZGU6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgJyYgPiBseS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgICB9XG4gICAgfSxcbiAgICBzbGlkZUNvbnRlbnQ6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG4gICAgc2xpZGVBbmltOiB7XG4gICAgICAnJiA+IGRpdic6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknXG4gICAgfVxuICAgIH0sXG4gICAgc2xpZGVOb0V2ZW50OiB7XG4gICAgICAnJj5kaXYnOiB7XG4gICAgICAgIHRvdWNoQWN0aW9uOiAnaW5pdGlhbCAhaW1wb3J0YW50J1xuICAgICAgfVxuICAgIH0sXG4gICAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAgICcmPmRpdic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgcGFkZGluZzogJy41ZW0nLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJj5kaXYgPiBzcGFuJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpJyxcbiAgICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguNSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3BhY2l0eTogLjY1XG4gICAgICB9LFxuICAgICAgJyY+ZGl2PnNwYW4uYWN0aXZlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfc2xpZGUnKSBfc2xpZGU6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUNhcm91c2VsSXRlbSkpIGx5SXRlbXM6IFF1ZXJ5TGlzdDxMeUNhcm91c2VsSXRlbT47XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgpIG1vZGU6IENhcm91c2VsTW9kZSA9IENhcm91c2VsTW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDcwMDA7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBfc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdG91Y2g6IGJvb2xlYW47XG4gIHByaXZhdGUgX3NsaWRlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHRvdWNoKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3RvdWNoID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICB0aGlzLnRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ1N0YXJ0KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKF9pdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUGFuKHJlY3Qud2lkdGggKiBNYXRoLnNpZ24oZS5kZWx0YVgpKTtcbiAgICB9XG4gIH1cblxuICBfb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLmNvbmZpZy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoTWF0aC5hYnMoZS52ZWxvY2l0eSkgPj0gMC4yNSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fc2xpZGUubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIF9vbkRyYWdDYW5jZWwoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBfc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fc2xpZGVDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlDYXJvdXNlbC5zZWxlY3Q6JHt2YWwudG9TdHJpbmcoMzIpfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzaWduID0gdGhlbWUuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSkgPT09ICdsZWZ0JyA/IC0xIDogMTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkezEwMCAqIHZhbCAqIHNpZ259JSlgXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fc2xpZGUubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2xpZGVDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghbm90UmVzZXRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5fc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5fc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMuX3RoZW1lLmNvbmZpZy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWChjYWxjKCR7c2lnbiAqIDEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCkpYCk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==