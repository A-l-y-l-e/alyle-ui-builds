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
            if (eventName === 'slideleft') {
                this.next();
            }
            else if (eventName === 'slideright') {
                this.prev();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDOzs7OztNQUcvQixNQUFNLEdBQUcsT0FBTzs7TUFFaEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFFbkIsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixRQUFRLEVBQUUsVUFBVTtRQUNwQixtQkFBbUIsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQztZQUNSLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLGNBQWM7U0FDckI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVB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QXdEOztJQUN4RCw2QkFBc0Y7O0lBQ3RGLDBCQUFtRDs7SUFDbkQsOEJBQXlCOztJQUN6QixtQ0FBMkI7O0lBQzNCLHFDQUE2Qjs7SUFDN0IsNEJBQXdCOztJQWdCdEIseUJBQXVCOztJQUN2QixnQ0FBZ0M7O0lBQ2hDLHdCQUE2Qjs7SUFDN0IsMkJBQXVCOztJQUN2Qiw4QkFBMkI7O0FBZ0kvQixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFnQnpCLFlBQ1UsS0FBZSxFQUN2QixHQUFlO1FBRFAsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUd2QixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFuQkQsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNuQyxtQkFBbUIsS0FBSyxFQUFFLEVBQUUsQ0FDMUIsMEJBQTBCLEtBQUssSUFBSSxDQUNwQyxFQUNELElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUE1UmtCLFFBQVE7WUFWekIsVUFBVTs7O3FCQXlTVCxLQUFLOzs7O0lBRE4sb0NBQTJCOzs7OztJQWEzQix3Q0FBNEI7O0lBRzFCLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJiB7YWN0aW9uc30ucmlnaHQnOiB7XG4gICAgICByaWdodDogMCxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbWFyZ2luOiAnYXV0byAuMjVlbScsXG4gICAgaGVpZ2h0OiAnMWVtJyxcbiAgICB3aWR0aDogJzFlbScsXG4gICAgZm9udFNpemU6ICczNnB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZDogY2hyb21hKHRoZW1lLnRleHQucHJpbWFyeSkuYWxwaGEoLjI1KS5jc3MoKSxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ1xuICB9LFxuICBzbGlkZUNvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG91Y2hBY3Rpb246ICdwYW4teSAhaW1wb3J0YW50J1xuICB9LFxuICBzbGlkZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgIH1cbiAgfSxcbiAgc2xpZGVDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIHNsaWRlQW5pbToge1xuICAgICcmID4gZGl2Jzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknXG4gIH1cbiAgfSxcbiAgc2xpZGVOb0V2ZW50OiB7XG4gICAgJyY+ZGl2Jzoge1xuICAgICAgdG91Y2hBY3Rpb246ICdpbml0aWFsICFpbXBvcnRhbnQnXG4gICAgfVxuICB9LFxuICBjYXJvdXNlbEluZGljYXRvcnM6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAnJj5kaXYnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcGFkZGluZzogJy41ZW0nLFxuICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgfSxcbiAgICAnJj5kaXYgPiBzcGFuJzoge1xuICAgICAgdHJhbnNpdGlvbjogJzMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvcGFjaXR5OiAuNjVcbiAgICB9LFxuICAgICcmPmRpdj5zcGFuLmFjdGl2ZSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHVibGljIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIHB1YmxpYyBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdG91Y2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgdG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWdDYW5jZWwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gYHRyYW5zbGF0ZTNkKCR7LTEwMCAqIHZhbH0lLCAwcHgsIDApYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG5cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gdGhpcy5fc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZTNkKGNhbGMoJHstMTAwICogdGhpcy5zZWxlY3RlZEluZGV4IH0lICsgJHt4fXB4KSwgMHB4LCAwKWApIGFzIGFueTtcbiAgfVxuICBwcml2YXRlIF9zYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0ge1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuIl19