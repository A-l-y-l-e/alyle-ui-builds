/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Platform, LyTheme2, toBoolean, DirAlias } from '@alyle/ui';
import * as _chroma from 'chroma-js';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * \@docs-private
 * @type {?}
 */
var chroma = _chroma;
/**
 * Default interval in ms
 * @type {?}
 */
var DEFAULT_INTERVAL = 7000;
/** @type {?} */
var DEFAULT_AUTOPLAY = true;
/** @type {?} */
var DEFAULT_HAS_PROGRESS_BAR = false;
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
        $priority: STYLE_PRIORITY,
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
            },
            '&': theme.carousel ? theme.carousel.root : null
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
        },
        barContainer: {
            background: chroma(theme.background.primary.default).alpha(.25).css(),
            height: '4px',
            position: 'absolute',
            bottom: 0,
            width: '100%',
        },
        bar: {
            height: '4px',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            animationName: '{interval}',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            background: theme.text.primary
        },
        $keyframes: {
            interval: {
                0: {
                    transform: 'translateX(0%)'
                },
                100: {
                    transform: "translateX(" + (dir === 'left' ? '-' : '') + "100%)"
                }
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
        this.classes = this._theme.addStyleSheet(STYLES);
        this._intervalFn = null;
        /**
         * \@docs-private
         */
        this.mode = CarouselMode.default;
        this.selectedIndex = 0;
        this._interval = DEFAULT_INTERVAL;
        /**
         * Emits whenever the component is destroyed.
         */
        this._destroy = new Subject();
        this._renderer.addClass(_el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyCarousel.prototype, "_isIntervalFn", {
        /** @internal */
        get: /**
         * \@internal
         * @return {?}
         */
        function () {
            return !!this._intervalFn;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(LyCarousel.prototype, "autoplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoplay;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            this._autoplay = newVal;
            if (newVal) {
                this._resetInterval();
            }
            else {
                this.stop();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCarousel.prototype, "hasProgressBar", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasProgressBar;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            this._hasProgressBar = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCarousel.prototype, "interval", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._interval = val;
            this._resetInterval();
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
        if (this.autoplay == null) {
            this.autoplay = DEFAULT_AUTOPLAY;
        }
        if (this.hasProgressBar == null) {
            this.hasProgressBar = DEFAULT_HAS_PROGRESS_BAR;
        }
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
        this.lyItems.changes.pipe(takeUntil(this._destroy)).subscribe(function () { return _this._markForCheck(); });
    };
    /**
     * @return {?}
     */
    LyCarousel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
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
        this._selectedElement = (/** @type {?} */ (this.lyItems.find(function (_item, index) { return index === _this.selectedIndex; })))._nativeElement;
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
        var dir = this._theme.variables.getDirection(DirAlias.before);
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
            if (this.autoplay) {
                this._resetInterval();
            }
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
     * @private
     * @return {?}
     */
    LyCarousel.prototype._resetInterval = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (Platform.isBrowser) {
            this.stop();
            this._restartProgressBarAnimation();
            this._markForCheck();
            this._intervalFn = (/** @type {?} */ (setInterval(function () {
                _this.next(true);
                _this._restartProgressBarAnimation();
                _this._markForCheck();
            }, this.interval)));
        }
    };
    /**
     * @private
     * @return {?}
     */
    LyCarousel.prototype._restartProgressBarAnimation = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.hasProgressBar && this._progressBar) {
            /** @type {?} */
            var el = this._progressBar.nativeElement;
            // Hack for restart animation
            el.style.animationName = 'øfakeName';
            window.getComputedStyle(el).getPropertyValue('opacity');
            el.style.animationName = '';
        }
    };
    /**
     * @private
     * @param {?} x
     * @return {?}
     */
    LyCarousel.prototype._onPan = /**
     * @private
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var sign = this._theme.variables.getDirection(DirAlias.before) === 'left' ? -1 : 1;
        this._renderer.setStyle(this._slide.nativeElement, 'transform', "translateX(calc(" + sign * 100 * this.selectedIndex + "% + " + x + "px))");
    };
    /**
     * @private
     * @return {?}
     */
    LyCarousel.prototype._markForCheck = /**
     * @private
     * @return {?}
     */
    function () {
        this._cd.markForCheck();
    };
    LyCarousel.decorators = [
        { type: Component, args: [{
                    selector: 'ly-carousel',
                    template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n    <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; index as i\"\n    >\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"></span>\n    </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div\n    [className]=\"classes.barContainer\"\n    *ngIf=\"hasProgressBar && _isIntervalFn && interval && autoplay\"\n  >\n    <div\n      [className]=\"classes.bar\"\n      #_progressBar\n      [style.animation-duration]=\"interval + 'ms'\"\n    ></div>\n  </div>\n</div>",
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
        _progressBar: [{ type: ViewChild, args: ['_progressBar',] }],
        lyItems: [{ type: ContentChildren, args: [forwardRef(function () { return LyCarouselItem; }),] }],
        mode: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        touch: [{ type: Input }],
        autoplay: [{ type: Input }],
        hasProgressBar: [{ type: Input }],
        interval: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._intervalFn;
    /** @type {?} */
    LyCarousel.prototype.slideContainer;
    /** @type {?} */
    LyCarousel.prototype._slide;
    /** @type {?} */
    LyCarousel.prototype._progressBar;
    /** @type {?} */
    LyCarousel.prototype.lyItems;
    /**
     * \@docs-private
     * @type {?}
     */
    LyCarousel.prototype.mode;
    /** @type {?} */
    LyCarousel.prototype.selectedIndex;
    /** @type {?} */
    LyCarousel.prototype._selectedElement;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._touch;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._autoplay;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._hasProgressBar;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._interval;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._slideClass;
    /**
     * Emits whenever the component is destroyed.
     * @type {?}
     * @private
     */
    LyCarousel.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    LyCarousel.prototype._theme;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    LyCarouselItem.prototype._className;
    /** @type {?} */
    LyCarouselItem.prototype._nativeElement;
    /**
     * @type {?}
     * @private
     */
    LyCarouselItem.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBa0IsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztJQUdyQyxNQUFNLEdBQUcsT0FBTzs7Ozs7SUFHaEIsZ0JBQWdCLEdBQUcsSUFBSTs7SUFDdkIsZ0JBQWdCLEdBQUcsSUFBSTs7SUFDdkIsd0JBQXdCLEdBQUcsS0FBSzs7SUFDaEMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7QUFFekIsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztRQUNwQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztRQUN6QyxLQUFLLEdBQUcsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHOztRQUNqQyxJQUFJLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQ3JDLE9BQU87UUFDTCxTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUU7WUFDSixPQUFP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dGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMsIERpckFsaWFzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbi8qKiBEZWZhdWx0IGludGVydmFsIGluIG1zICovXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMID0gNzAwMDtcbmNvbnN0IERFRkFVTFRfQVVUT1BMQVkgPSB0cnVlO1xuY29uc3QgREVGQVVMVF9IQVNfUFJPR1JFU1NfQkFSID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCBkaXIgPSB0aGVtZS5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgY29uc3QgcmlnaHQgPSBkaXIgPT09ICdyaWdodCcgPyAwIDogMTgwO1xuICBjb25zdCBsZWZ0ID0gZGlyID09PSAnbGVmdCcgPyAwIDogMTgwO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnJiB7YWN0aW9uc30ucmlnaHQnOiB7XG4gICAgICAgIGFmdGVyOiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyaWdodH1kZWcpYFxuICAgICAgfSxcbiAgICAgICcmIHthY3Rpb25zfS5sZWZ0Jzoge1xuICAgICAgICBiZWZvcmU6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2xlZnR9ZGVnKWBcbiAgICAgIH0sXG4gICAgICAnJiBzdmcnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgICB9LFxuICAgICAgJyYnOiB0aGVtZS5jYXJvdXNlbCA/IHRoZW1lLmNhcm91c2VsLnJvb3QgOiBudWxsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8gLjI1ZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IGNocm9tYSh0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCkuYWxwaGEoLjI1KS5jc3MoKSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnByaW1hcnksXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ1xuICAgIH0sXG4gICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvdWNoQWN0aW9uOiAncGFuLXkgIWltcG9ydGFudCdcbiAgICB9LFxuICAgIHNsaWRlOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVDb250ZW50OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuICAgIHNsaWRlQW5pbToge1xuICAgICAgJyYgPiBkaXYnOiB7XG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICAgIH1cbiAgICB9LFxuICAgIHNsaWRlTm9FdmVudDoge1xuICAgICAgJyY+ZGl2Jzoge1xuICAgICAgICB0b3VjaEFjdGlvbjogJ2luaXRpYWwgIWltcG9ydGFudCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhcm91c2VsSW5kaWNhdG9yczoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAnJj5kaXYnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJzMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKScsXG4gICAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG9wYWNpdHk6IC42NVxuICAgICAgfSxcbiAgICAgICcmPmRpdj5zcGFuLmFjdGl2ZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG4gICAgfSxcbiAgICBiYXJDb250YWluZXI6IHtcbiAgICAgIGJhY2tncm91bmQ6IGNocm9tYSh0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCkuYWxwaGEoLjI1KS5jc3MoKSxcbiAgICAgIGhlaWdodDogJzRweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBiYXI6IHtcbiAgICAgIGhlaWdodDogJzRweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBhbmltYXRpb25OYW1lOiAne2ludGVydmFsfScsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnRleHQucHJpbWFyeVxuICAgIH0sXG4gICAgJGtleWZyYW1lczoge1xuICAgICAgaW50ZXJ2YWw6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJ1xuICAgICAgICB9LFxuICAgICAgICAxMDA6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7ZGlyID09PSAnbGVmdCcgPyAnLScgOiAnJ30xMDAlKWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInKSBzbGlkZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX3NsaWRlJykgX3NsaWRlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfcHJvZ3Jlc3NCYXInKSBfcHJvZ3Jlc3NCYXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90b3VjaDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYXV0b3BsYXk6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1Byb2dyZXNzQmFyOiBib29sZWFuO1xuICBwcml2YXRlIF9pbnRlcnZhbCA9IERFRkFVTFRfSU5URVJWQUw7XG4gIHByaXZhdGUgX3NsaWRlQ2xhc3M6IHN0cmluZztcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0IF9pc0ludGVydmFsRm4oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5faW50ZXJ2YWxGbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCB0b3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2g7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXV0b3BsYXkodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fYXV0b3BsYXkgPSBuZXdWYWw7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGF1dG9wbGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvcGxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNQcm9ncmVzc0Jhcih2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9oYXNQcm9ncmVzc0JhciA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgaGFzUHJvZ3Jlc3NCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1Byb2dyZXNzQmFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGludGVydmFsKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWw7XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG4gIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvcGxheSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9wbGF5ID0gREVGQVVMVF9BVVRPUExBWTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzUHJvZ3Jlc3NCYXIgPT0gbnVsbCkge1xuICAgICAgdGhpcy5oYXNQcm9ncmVzc0JhciA9IERFRkFVTFRfSEFTX1BST0dSRVNTX0JBUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuXG4gICAgdGhpcy5seUl0ZW1zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ1N0YXJ0KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKF9pdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkhLl9uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgX29uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuX3NlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuX3NlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZS52YXJpYWJsZXMuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcblxuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPiByZWN0LndpZHRoIC8gMikge1xuICAgICAgaWYgKDAgPiBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoMCA8IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5hZGRpdGlvbmFsRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGUuYWRkaXRpb25hbEV2ZW50O1xuICAgICAgaWYgKE1hdGguYWJzKGUudmVsb2NpdHkpID49IDAuMjUpIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlbGVmdCcpIHtcbiAgICAgICAgICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgICBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nKTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBfb25EcmFnQ2FuY2VsKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5fc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgX3NlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3NsaWRlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5Q2Fyb3VzZWwuc2VsZWN0OiR7dmFsLnRvU3RyaW5nKDMyKX1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2lnbiA9IHRoZW1lLmdldERpcmVjdGlvbihEaXJBbGlhcy5iZWZvcmUpID09PSAnbGVmdCcgPyAtMSA6IDE7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsxMDAgKiB2YWwgKiBzaWdufSUpYFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NsaWRlQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuX3NlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG5cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuX3NlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICAgIHRoaXMuX2ludGVydmFsRm4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLl9yZXN0YXJ0UHJvZ3Jlc3NCYXJBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLl9yZXN0YXJ0UHJvZ3Jlc3NCYXJBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCB0aGlzLmludGVydmFsKSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzdGFydFByb2dyZXNzQmFyQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLmhhc1Byb2dyZXNzQmFyICYmIHRoaXMuX3Byb2dyZXNzQmFyKSB7XG5cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJvZ3Jlc3NCYXIubmF0aXZlRWxlbWVudDtcblxuICAgICAgLy8gSGFjayBmb3IgcmVzdGFydCBhbmltYXRpb25cbiAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSAnw7hmYWtlTmFtZSc7XG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICcnO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIGNvbnN0IHNpZ24gPSB0aGlzLl90aGVtZS52YXJpYWJsZXMuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSkgPT09ICdsZWZ0JyA/IC0xIDogMTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9zbGlkZS5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoY2FsYygke3NpZ24gKiAxMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpKWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0ge1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nOiR7dmFsdWV9YCwgKFxuICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpYFxuICAgICAgKSxcbiAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iXX0=