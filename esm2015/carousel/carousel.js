/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, LyTheme2, toBoolean } from '@alyle/ui';
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
        this.classes = this.theme.addStyleSheet(styles, 'lyCarousel');
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
                template: `<div
(slidestart)="slideEvent && onDragStart($event)"
(slide)="slideEvent && onDrag($event)"
(slideend)="slideEvent && onDragEnd($event)"
#slideContainer
>
  <div [className]="classes.slide" [style.transform]="_positionLeft">
    <ng-content></ng-content>
  </div>
  <div [className]="classes.carouselIndicators" *ngIf="lyItems.length !== 1">
      <div tabindex="0"
      (click)="select(i)"
      role="button"
      *ngFor="let item of lyItems; let i = index">
      <span color="#000"
      bg="background:primary"
      [class.active]="selectedIndex==i"
      [elevation]="6"></span>
      </div>
  </div>
  <div class="ly-carousel-actions" (click)="prev()">
    <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
  </div>
  <div class="ly-carousel-actions right" (click)="next()">
    <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
  </div>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] },
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
        this._className = this.theme.addStyle(`ly-carousel-img:${value}`, (`background-image: url('${value}')`), this._nativeElement, this._className);
    }
}
LyCarouselItem.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'ly-carousel-item'
            },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRTFELE1BQU0sTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixRQUFRLEVBQUUsVUFBVTtRQUNwQix3QkFBd0IsRUFBRTtZQUN4QixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLFlBQVk7WUFDcEIsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxNQUFNO1lBQ2IsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxVQUFVLEVBQUUsV0FBVztTQUN4QjtRQUNELDhCQUE4QixFQUFFO1lBQzlCLEtBQUssRUFBRSxDQUFDO1lBQ1IsbUJBQW1CLEVBQUUsZ0JBQWdCO1lBQ3JDLFNBQVMsRUFBRSxnQkFBZ0I7U0FDNUI7UUFDRCxPQUFPLEVBQUU7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QUFFLENBQUMsY0FBYyxDQUFDO21CQUNoRCxLQUFLO3VCQUNMLEtBQUs7NEJBRUwsS0FBSzt5QkFJTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJIUixNQUFNOzs7Ozs7SUFjSixZQUNVLE9BQ0EsVUFDUixVQUFzQjtRQUZkLFVBQUssR0FBTCxLQUFLO1FBQ0wsYUFBUSxHQUFSLFFBQVE7UUFHaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ2hEOzs7OztJQWxCRCxJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ25DLG1CQUFtQixLQUFLLEVBQUUsRUFBRSxDQUMxQiwwQkFBMEIsS0FBSyxJQUFJLENBQ3BDLEVBQ0QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQztLQUNIOzs7WUFmRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUF0UmtCLFFBQVE7WUFMekIsU0FBUztZQUxULFVBQVU7OztxQkFtU1QsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyYgLmx5LWNhcm91c2VsLWFjdGlvbnMnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8gLjI1ZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjExKScsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ1xuICAgIH0sXG4gICAgJyYgLmx5LWNhcm91c2VsLWFjdGlvbnMucmlnaHQnOiB7XG4gICAgICByaWdodDogMCxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICAgIH1cbiAgfSxcbiAgc2xpZGVDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHNsaWRlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgJyYgPiBseS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgIH0sXG4gICAgJyYgPiBseS1jYXJvdXNlbC1pdGVtID4gW2x5Q2Fyb3VzZWxJbWddJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSxcbiAgc2xpZGVDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIHNsaWRlQW5pbToge1xuICAgICcmID4gZGl2Jzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknXG4gIH1cbiAgfSxcbiAgc2xpZGVOb0V2ZW50OiB7XG4gICAgJyY+ZGl2Jzoge1xuICAgICAgdG91Y2hBY3Rpb246ICdpbml0aWFsICFpbXBvcnRhbnQnXG4gICAgfVxuICB9LFxuICBjYXJvdXNlbEluZGljYXRvcnM6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAnJj5kaXYnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcGFkZGluZzogJy41ZW0nLFxuICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgfSxcbiAgICAnJj5kaXYgPiBzcGFuJzoge1xuICAgICAgdHJhbnNpdGlvbjogJzMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgICcmPmRpdj5zcGFuLmFjdGl2ZSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuKHNsaWRlc3RhcnQpPVwic2xpZGVFdmVudCAmJiBvbkRyYWdTdGFydCgkZXZlbnQpXCJcbihzbGlkZSk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZygkZXZlbnQpXCJcbihzbGlkZWVuZCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ0VuZCgkZXZlbnQpXCJcbiNzbGlkZUNvbnRhaW5lclxuPlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5zbGlkZVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3Bvc2l0aW9uTGVmdFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNhcm91c2VsSW5kaWNhdG9yc1wiICpuZ0lmPVwibHlJdGVtcy5sZW5ndGggIT09IDFcIj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBseUl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8c3BhbiBjb2xvcj1cIiMwMDBcIlxuICAgICAgYmc9XCJiYWNrZ3JvdW5kOnByaW1hcnlcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEluZGV4PT1pXCJcbiAgICAgIFtlbGV2YXRpb25dPVwiNlwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImx5LWNhcm91c2VsLWFjdGlvbnNcIiAoY2xpY2spPVwicHJldigpXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L3N2Zz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zIHJpZ2h0XCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBfc2VsZWN0ZWRJbmRleDogYW55O1xuICBwdWJsaWMgbnVsbEltZyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09JztcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxGbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlQ29udGFpbmVyJykgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUNhcm91c2VsSXRlbSkpIGx5SXRlbXM6IFF1ZXJ5TGlzdDxMeUNhcm91c2VsSXRlbT47XG4gIEBJbnB1dCgpIG1vZGU6IENhcm91c2VsTW9kZSA9IENhcm91c2VsTW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDcwMDA7XG4gIF9wb3NpdGlvbkxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlDYXJvdXNlbCcpO1xuICBwcml2YXRlIF9zbGlkZUV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgc2xpZGVFdmVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9zbGlkZUV2ZW50ID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNsaWRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlRXZlbnQ7XG4gIH1cbiAgb25EcmFnU3RhcnQoZSkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA8IHJlY3Qud2lkdGgpIHtcbiAgICAgIHRoaXMuX29uUGFuKGUuZGVsdGFYKTtcbiAgICB9XG4gIH1cbiAgb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNsaWRlRXZlbnQpIHtcbiAgICAgIHRoaXMuc2xpZGVFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IHRoaXMuc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZShjYWxjKCR7LTEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCksIDBweClgKSBhcyBhbnk7XG4gIH1cbiAgcHJpdmF0ZSBzYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQ29udGFpbmVyKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IGB0cmFuc2xhdGUoJHstMTAwICogdmFsfSUsIDBweClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG4gIG5leHQobm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICB0aGlzLnNlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxJdGVtIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmNJbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nOiR7dmFsdWV9YCwgKFxuICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpYFxuICAgICAgKSxcbiAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9jbGFzc05hbWVcbiAgICApO1xuICB9XG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==