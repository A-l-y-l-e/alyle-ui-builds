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
const chroma = _chroma;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = (theme) => ({
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
});
const ɵ0 = styles;
/** @enum {number} */
const CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
export { CarouselMode };
CarouselMode[CarouselMode.default] = 'default';
CarouselMode[CarouselMode.inline] = 'inline';
export class LyCarousel {
    /**
     * @param {?} _el
     * @param {?} _sanitizer
     * @param {?} cd
     * @param {?} theme
     * @param {?} renderer
     */
    constructor(_el, _sanitizer, cd, theme, renderer) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set touch(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        this._touch = newVal;
        if (newVal) {
            this.renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
        }
        else {
            this.renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
        }
    }
    /**
     * @return {?}
     */
    get touch() {
        return this._touch;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.touch) {
            this.touch = false;
        }
        if (Platform.isBrowser) {
            this._resetInterval();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this.stop();
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _onDragStart() {
        this.stop();
        this.renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.selectedElement = this.lyItems.find((item, index) => index === this.selectedIndex)._nativeElement;
    }
    /**
     * \@docs-private
     * @param {?} e
     * @return {?}
     */
    _onDrag(e) {
        /** @type {?} */
        const rect = this.selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
        else {
            this._onPan(rect.width * Math.sign(e.deltaX));
        }
    }
    /**
     * \@docs-private
     * @param {?} e
     * @return {?}
     */
    _onDragEnd(e) {
        /** @type {?} */
        const rect = this.selectedElement.getBoundingClientRect();
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
            const eventName = e.additionalEvent;
            if (Math.abs(e.velocity) >= 0.25) {
                if (eventName === 'slideleft') {
                    this.next();
                }
                else if (eventName === 'slideright') {
                    this.prev();
                }
            }
        }
        this._resetInterval();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _onDragCancel() {
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.select(this.selectedIndex);
        this._resetInterval();
    }
    /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    select(val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._positionLeft = `translate3d(${-100 * val}%, 0px, 0)`;
        }
        if (!notResetInterval) {
            this._resetInterval();
        }
    }
    /**
     * @return {?}
     */
    prev() {
        /** @type {?} */
        const len = this.lyItems.length - 1;
        /** @type {?} */
        const prev = this.selectedIndex - 1;
        this.select(prev < 0 ? len : prev);
    }
    /**
     * @param {?=} notResetInterval
     * @return {?}
     */
    next(notResetInterval) {
        /** @type {?} */
        const len = this.lyItems.length - 1;
        /** @type {?} */
        const next = this.selectedIndex + 1;
        this.select(next > len ? 0 : next, notResetInterval);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this._intervalFn !== null) {
            clearInterval(this._intervalFn);
            this._intervalFn = null;
        }
    }
    /**
     * @return {?}
     */
    _resetInterval() {
        this.stop();
        this._intervalFn = setInterval(() => {
            this.next(true);
            this._markForCheck();
        }, this.interval);
    }
    /**
     * @param {?} x
     * @return {?}
     */
    _onPan(x) {
        this._positionLeft = (/** @type {?} */ (this._sanitizerStyle(`translate3d(calc(${-100 * this.selectedIndex}% + ${x}px), 0px, 0)`)));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _sanitizerStyle(val) {
        return this._sanitizer.bypassSecurityTrustStyle(val);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _markForCheck() {
        this.cd.markForCheck();
    }
}
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
LyCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: Renderer2 }
];
LyCarousel.propDecorators = {
    slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
    lyItems: [{ type: ContentChildren, args: [forwardRef(() => LyCarouselItem),] }],
    mode: [{ type: Input }],
    interval: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    touch: [{ type: Input }]
};
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
export class LyCarouselItem {
    /**
     * @param {?} theme
     * @param {?} _el
     */
    constructor(theme, _el) {
        this.theme = theme;
        this._nativeElement = _el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set srcImg(value) {
        this._className = this.theme.addStyle(`ly-carousel-img:${value}`, (`background-image: url('${value}')`), this._nativeElement, this._className, STYLE_PRIORITY);
    }
}
LyCarouselItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-carousel-item'
            },] }
];
/** @nocollapse */
LyCarouselItem.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyCarouselItem.propDecorators = {
    srcImg: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDOzs7OztNQUcvQixNQUFNLEdBQUcsT0FBTzs7TUFFaEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFFbkIsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixRQUFRLEVBQUUsVUFBVTtRQUNwQixtQkFBbUIsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQztZQUNSLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLGNBQWM7U0FDckI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVB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QUFvRTs7SUFDcEUsb0NBQW9COztJQUNwQiw2QkFBK0Y7O0lBQy9GLGlDQUEyQjs7Ozs7SUFFM0IsbUNBQStCOztJQUMvQixvQ0FBd0Q7O0lBQ3hELDZCQUFzRjs7SUFDdEYsMEJBQW1EOztJQUNuRCw4QkFBeUI7O0lBQ3pCLG1DQUEyQjs7SUFDM0IscUNBQTZCOztJQUM3Qiw0QkFBd0I7O0lBZ0J0Qix5QkFBdUI7O0lBQ3ZCLGdDQUFnQzs7SUFDaEMsd0JBQTZCOztJQUM3QiwyQkFBdUI7O0lBQ3ZCLDhCQUEyQjs7QUFrSS9CLE1BQU0sT0FBTyxjQUFjOzs7OztJQWdCekIsWUFDVSxLQUFlLEVBQ3ZCLEdBQWU7UUFEUCxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBR3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMxQyxDQUFDOzs7OztJQW5CRCxJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ25DLG1CQUFtQixLQUFLLEVBQUUsRUFBRSxDQUMxQiwwQkFBMEIsS0FBSyxJQUFJLENBQ3BDLEVBQ0QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQ2hDLENBQUM7SUFDSixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQTlSa0IsUUFBUTtZQVZ6QixVQUFVOzs7cUJBMlNULEtBQUs7Ozs7SUFETixvQ0FBMkI7Ozs7O0lBYTNCLHdDQUE0Qjs7SUFHMUIsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIHthY3Rpb25zfS5yaWdodCc6IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG4gICAgJyYgc3ZnJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kOiBjaHJvbWEodGhlbWUudGV4dC5wcmltYXJ5KS5hbHBoYSguMjUpLmNzcygpLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3VjaEFjdGlvbjogJ3Bhbi15ICFpbXBvcnRhbnQnXG4gIH0sXG4gIHNsaWRlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgJyYgPiBseS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgfVxuICB9LFxuICBzbGlkZUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgc2xpZGVBbmltOiB7XG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKSdcbiAgfVxuICB9LFxuICBzbGlkZU5vRXZlbnQ6IHtcbiAgICAnJj5kaXYnOiB7XG4gICAgICB0b3VjaEFjdGlvbjogJ2luaXRpYWwgIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIGNhcm91c2VsSW5kaWNhdG9yczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICcmPmRpdic6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nOiAnLjVlbScsXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICB9LFxuICAgICcmPmRpdiA+IHNwYW4nOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSguNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG9wYWNpdHk6IC42NVxuICAgIH0sXG4gICAgJyY+ZGl2PnNwYW4uYWN0aXZlJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfc2VsZWN0ZWRJbmRleDogYW55O1xuICBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdG91Y2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgdG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoTWF0aC5hYnMoZS52ZWxvY2l0eSkgPj0gMC4yNSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlcmlnaHQnKSB7XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0NhbmNlbCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlM2QoJHstMTAwICogdmFsfSUsIDBweCwgMClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsRm4gIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxGbik7XG4gICAgICB0aGlzLl9pbnRlcnZhbEZuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLl9zYW5pdGl6ZXJTdHlsZShgdHJhbnNsYXRlM2QoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgsIDApYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgX3Nhbml0aXplclN0eWxlKHZhbDogYW55KTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWNhcm91c2VsLWltZzoke3ZhbHVlfWAsIChcbiAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKWBcbiAgICAgICksXG4gICAgICB0aGlzLl9uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fY2xhc3NOYW1lLCBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iXX0=