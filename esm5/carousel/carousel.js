/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, LyTheme2, toBoolean } from '@alyle/ui';
import * as _chroma from 'chroma-js';
/**
 * \@docs-private
 * @type {?}
 */
var chroma = _chroma;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = function (theme) { return ({
    root: {
        display: 'block',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        position: 'relative',
        '& {actions}.right': {
            right: 0,
            '-webkit-transform': 'rotate(180deg)',
            transform: 'rotate(180deg)'
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
        color: theme.background.primary.default,
        background: chroma(theme.text.primary).alpha(.25).css(),
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
}); };
var ɵ0 = styles;
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
    function LyCarousel(_el, _sanitizer, cd, theme, renderer) {
        this._el = _el;
        this._sanitizer = _sanitizer;
        this.cd = cd;
        this.theme = theme;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.nullImg = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        this._intervalFn = null;
        this.mode = CarouselMode.default;
        this.interval = 7000;
        this.selectedIndex = 0;
        this.renderer.addClass(_el.nativeElement, this.classes.root);
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
                this.renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
            }
            else {
                this.renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
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
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
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
        this.renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.selectedElement = this.lyItems.find(function (item, index) { return index === _this.selectedIndex; })._nativeElement;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} e
     * @return {?}
     */
    LyCarousel.prototype._onDrag = /**
     * \@docs-private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var rect = this.selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
        else {
            this._onPan(rect.width * Math.sign(e.deltaX));
        }
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} e
     * @return {?}
     */
    LyCarousel.prototype._onDragEnd = /**
     * \@docs-private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var rect = this.selectedElement.getBoundingClientRect();
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.select(this.selectedIndex);
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
            if (eventName === 'slideleft') {
                this.next();
            }
            else if (eventName === 'slideright') {
                this.prev();
            }
        }
        this._resetInterval();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    LyCarousel.prototype._onDragCancel = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.select(this.selectedIndex);
        this._resetInterval();
    };
    /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    LyCarousel.prototype.select = /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    function (val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._positionLeft = "translate3d(" + -100 * val + "%, 0px, 0)";
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
        this.select(prev < 0 ? len : prev);
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
        this.select(next > len ? 0 : next, notResetInterval);
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
        this._positionLeft = (/** @type {?} */ (this._sanitizerStyle("translate3d(calc(" + -100 * this.selectedIndex + "% + " + x + "px), 0px, 0)")));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyCarousel.prototype._sanitizerStyle = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return this._sanitizer.bypassSecurityTrustStyle(val);
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    LyCarousel.prototype._markForCheck = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.cd.markForCheck();
    };
    LyCarousel.decorators = [
        { type: Component, args: [{
                    selector: 'ly-carousel',
                    template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"\n      ></span>\n      </div>\n  </div>\n  <div [className]=\"classes.actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyCarousel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    LyCarousel.propDecorators = {
        slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
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
    LyCarousel.prototype._selectedIndex;
    /** @type {?} */
    LyCarousel.prototype.nullImg;
    /** @type {?} */
    LyCarousel.prototype._intervalFn;
    /**
     * \@docs-private
     * @type {?}
     */
    LyCarousel.prototype._positionLeft;
    /** @type {?} */
    LyCarousel.prototype.slideContainer;
    /** @type {?} */
    LyCarousel.prototype.lyItems;
    /** @type {?} */
    LyCarousel.prototype.mode;
    /** @type {?} */
    LyCarousel.prototype.interval;
    /** @type {?} */
    LyCarousel.prototype.selectedIndex;
    /** @type {?} */
    LyCarousel.prototype.selectedElement;
    /** @type {?} */
    LyCarousel.prototype._touch;
    /** @type {?} */
    LyCarousel.prototype._el;
    /** @type {?} */
    LyCarousel.prototype._sanitizer;
    /** @type {?} */
    LyCarousel.prototype.cd;
    /** @type {?} */
    LyCarousel.prototype.theme;
    /** @type {?} */
    LyCarousel.prototype.renderer;
}
var LyCarouselItem = /** @class */ (function () {
    function LyCarouselItem(theme, _el) {
        this.theme = theme;
        this._nativeElement = _el.nativeElement;
    }
    Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._className = this.theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
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
    /**
     * \@docs-private
     * @type {?}
     */
    LyCarouselItem.prototype._nativeElement;
    /** @type {?} */
    LyCarouselItem.prototype.theme;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDOzs7OztJQUcvQixNQUFNLEdBQUcsT0FBTzs7SUFFaEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFFbkIsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUM7WUFDUixtQkFBbUIsRUFBRSxnQkFBZ0I7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxjQUFjO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLFlB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b0NBQTJCOzs7OztJQWEzQix3Q0FBNEI7O0lBRzFCLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJiB7YWN0aW9uc30ucmlnaHQnOiB7XG4gICAgICByaWdodDogMCxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbWFyZ2luOiAnYXV0byAuMjVlbScsXG4gICAgaGVpZ2h0OiAnMWVtJyxcbiAgICB3aWR0aDogJzFlbScsXG4gICAgZm9udFNpemU6ICczNnB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZDogY2hyb21hKHRoZW1lLnRleHQucHJpbWFyeSkuYWxwaGEoLjI1KS5jc3MoKSxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ1xuICB9LFxuICBzbGlkZUNvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG91Y2hBY3Rpb246ICdwYW4teSAhaW1wb3J0YW50J1xuICB9LFxuICBzbGlkZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgIH1cbiAgfSxcbiAgc2xpZGVDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIHNsaWRlQW5pbToge1xuICAgICcmID4gZGl2Jzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknXG4gIH1cbiAgfSxcbiAgc2xpZGVOb0V2ZW50OiB7XG4gICAgJyY+ZGl2Jzoge1xuICAgICAgdG91Y2hBY3Rpb246ICdpbml0aWFsICFpbXBvcnRhbnQnXG4gICAgfVxuICB9LFxuICBjYXJvdXNlbEluZGljYXRvcnM6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAnJj5kaXYnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcGFkZGluZzogJy41ZW0nLFxuICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgfSxcbiAgICAnJj5kaXYgPiBzcGFuJzoge1xuICAgICAgdHJhbnNpdGlvbjogJzMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvcGFjaXR5OiAuNjVcbiAgICB9LFxuICAgICcmPmRpdj5zcGFuLmFjdGl2ZSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHVibGljIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIHB1YmxpYyBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdG91Y2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgdG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWdDYW5jZWwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gYHRyYW5zbGF0ZTNkKCR7LTEwMCAqIHZhbH0lLCAwcHgsIDApYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG5cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gdGhpcy5fc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZTNkKGNhbGMoJHstMTAwICogdGhpcy5zZWxlY3RlZEluZGV4IH0lICsgJHt4fXB4KSwgMHB4LCAwKWApIGFzIGFueTtcbiAgfVxuICBwcml2YXRlIF9zYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0ge1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuIl19