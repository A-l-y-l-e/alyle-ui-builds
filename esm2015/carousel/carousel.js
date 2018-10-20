/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, LyTheme2, toBoolean } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: {
        display: 'block',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        position: 'relative',
        '& .ly-carousel-actions': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            margin: 'auto .25em',
            height: '1em',
            width: '1em',
            fontSize: '36px',
            cursor: 'pointer',
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.11)',
            willChange: 'transform'
        },
        '& .ly-carousel-actions.right': {
            right: 0,
            '-webkit-transform': 'rotate(180deg)',
            transform: 'rotate(180deg)'
        },
        '& svg': {
            display: 'block',
            fill: 'currentColor'
        }
    },
    slideContainer: {
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    slide: {
        display: 'flex',
        width: '100%',
        height: '100%',
        willChange: 'transform',
        '& > ly-carousel-item': {
            width: '100%',
            flexShrink: 0,
            overflow: 'auto',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        '& > ly-carousel-item > [lyCarouselImg]': {
            width: '100%'
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
            display: 'block'
        },
        '&>div>span.active': {
            transform: 'scale(1)'
        }
    }
});
/** @enum {number} */
var CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
export { CarouselMode };
CarouselMode[CarouselMode.default] = 'default';
CarouselMode[CarouselMode.inline] = 'inline';
export class LyCarousel {
    /**
     * @param {?} elementRef
     * @param {?} sanitizer
     * @param {?} cd
     * @param {?} theme
     * @param {?} renderer
     */
    constructor(elementRef, sanitizer, cd, theme, renderer) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.theme = theme;
        this.renderer = renderer;
        this.nullImg = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        this._intervalFn = null;
        this.mode = CarouselMode.default;
        this.interval = 7000;
        this.selectedIndex = 0;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set slideEvent(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        this._slideEvent = newVal;
        if (newVal) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.classes.slideNoEvent);
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, this.classes.slideNoEvent);
        }
    }
    /**
     * @return {?}
     */
    get slideEvent() {
        return this._slideEvent;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDragStart(e) {
        this.renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.selectedElement = this.lyItems.find((item, index) => index === this.selectedIndex)._nativeElement;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDrag(e) {
        /** @type {?} */
        const rect = this.selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDragEnd(e) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.slideEvent) {
            this.slideEvent = false;
        }
        if (Platform.isBrowser) {
            this._resetInterval();
        }
    }
    /**
     * @param {?} x
     * @return {?}
     */
    _onPan(x) {
        this._positionLeft = /** @type {?} */ (this.sanitizerStyle(`translate(calc(${-100 * this.selectedIndex}% + ${x}px), 0px)`));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    sanitizerStyle(val) {
        return this.sanitizer.bypassSecurityTrustStyle(val);
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
     * @return {?}
     */
    _markForCheck() {
        this.cd.markForCheck();
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
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    select(val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._positionLeft = `translate(${-100 * val}%, 0px)`;
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
    _resetInterval() {
        this.stop();
        this._intervalFn = setInterval(() => {
            this.next(true);
            this.cd.markForCheck();
        }, this.interval);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this._intervalFn !== null) {
            clearInterval(this._intervalFn);
        }
    }
}
LyCarousel.decorators = [
    { type: Component, args: [{
                selector: 'ly-carousel',
                template: "<div\n(slidestart)=\"slideEvent && onDragStart($event)\"\n(slide)=\"slideEvent && onDrag($event)\"\n(slideend)=\"slideEvent && onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"6\"></span>\n      </div>\n  </div>\n  <div class=\"ly-carousel-actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div class=\"ly-carousel-actions right\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
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
    slideEvent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyCarousel.prototype._selectedIndex;
    /** @type {?} */
    LyCarousel.prototype.nullImg;
    /** @type {?} */
    LyCarousel.prototype._intervalFn;
    /** @type {?} */
    LyCarousel.prototype.slideContainer;
    /** @type {?} */
    LyCarousel.prototype.lyItems;
    /** @type {?} */
    LyCarousel.prototype.mode;
    /** @type {?} */
    LyCarousel.prototype.interval;
    /** @type {?} */
    LyCarousel.prototype._positionLeft;
    /** @type {?} */
    LyCarousel.prototype.selectedIndex;
    /** @type {?} */
    LyCarousel.prototype.selectedElement;
    /** @type {?} */
    LyCarousel.prototype.classes;
    /** @type {?} */
    LyCarousel.prototype._slideEvent;
    /** @type {?} */
    LyCarousel.prototype.elementRef;
    /** @type {?} */
    LyCarousel.prototype.sanitizer;
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
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(theme, renderer, elementRef) {
        this.theme = theme;
        this.renderer = renderer;
        this._nativeElement = elementRef.nativeElement;
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
                // tslint:disable-next-line:directive-selector
                selector: 'ly-carousel-item'
            },] }
];
/** @nocollapse */
LyCarouselItem.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyCarouselItem.propDecorators = {
    srcImg: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyCarouselItem.prototype._className;
    /** @type {?} */
    LyCarouselItem.prototype._nativeElement;
    /** @type {?} */
    LyCarouselItem.prototype.theme;
    /** @type {?} */
    LyCarouselItem.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRTFELE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUUxQixNQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsd0JBQXdCLEVBQUU7WUFDeEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsTUFBTTtZQUNiLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsVUFBVSxFQUFFLFdBQVc7U0FDeEI7UUFDRCw4QkFBOEIsRUFBRTtZQUM5QixLQUFLLEVBQUUsQ0FBQztZQUNSLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxT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OzZCQWdJUixTQUFTLFNBQUMsZ0JBQWdCO3NCQUMxQixlQUFlLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzttQkFDaEQsS0FBSzt1QkFDTCxLQUFLOzRCQUVMLEtBQUs7eUJBSUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEySFIsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQWN6QixZQUNVLE9BQ0EsVUFDUixVQUFzQjtRQUZkLFVBQUssR0FBTCxLQUFLO1FBQ0wsYUFBUSxHQUFSLFFBQVE7UUFHaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ2hEOzs7OztJQWxCRCxJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ25DLG1CQUFtQixLQUFLLEVBQUUsRUFBRSxDQUMxQiwwQkFBMEIsS0FBSyxJQUFJLENBQ3BDLEVBQ0QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQ2hDLENBQUM7S0FDSDs7O1lBZkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBOVBrQixRQUFRO1lBTHpCLFNBQVM7WUFMVCxVQUFVOzs7cUJBMlFULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIC5seS1jYXJvdXNlbC1hY3Rpb25zJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICB9LFxuICAgICcmIC5seS1jYXJvdXNlbC1hY3Rpb25zLnJpZ2h0Jzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzbGlkZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICB9LFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSA+IFtseUNhcm91c2VsSW1nXSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBzbGlkZUFuaW06IHtcbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICB9XG4gIH0sXG4gIHNsaWRlTm9FdmVudDoge1xuICAgICcmPmRpdic6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnaW5pdGlhbCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgJyY+ZGl2Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgIH0sXG4gICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICczMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSknLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICAnJj5kaXY+c3Bhbi5hY3RpdmUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX3NlbGVjdGVkSW5kZXg6IGFueTtcbiAgcHVibGljIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9zbGlkZUV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgc2xpZGVFdmVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9zbGlkZUV2ZW50ID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNsaWRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlRXZlbnQ7XG4gIH1cbiAgb25EcmFnU3RhcnQoZSkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA8IHJlY3Qud2lkdGgpIHtcbiAgICAgIHRoaXMuX29uUGFuKGUuZGVsdGFYKTtcbiAgICB9XG4gIH1cbiAgb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNsaWRlRXZlbnQpIHtcbiAgICAgIHRoaXMuc2xpZGVFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IHRoaXMuc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZShjYWxjKCR7LTEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCksIDBweClgKSBhcyBhbnk7XG4gIH1cbiAgcHJpdmF0ZSBzYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQ29udGFpbmVyKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IGB0cmFuc2xhdGUoJHstMTAwICogdmFsfSUsIDBweClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG4gIG5leHQobm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICB0aGlzLnNlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxJdGVtIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmNJbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nOiR7dmFsdWV9YCwgKFxuICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpYFxuICAgICAgKSxcbiAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iXX0=